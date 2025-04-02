/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "K7e71Rn35rnpPDhXsvYFhCYsRr81QJMTGb7DD9ikmZtoaLWc48MeZJkHZTZMQPUtcEqqYFinWrrLuLYwUxA5Edu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JP1yxM3RrMwnp3uzNzvRQMixcV86J7e7Vy55JZvezQwdUuZhUejniioo4TSSDtShYm9ywd75fQG8tG1tPWAMxH",
  "key1": "3EiQfU8y89HtfhmK77DXhqaS3ruvZzywvTBSdU6QEn7kFHqbYtrhqLbLYQHxifspKerNgj5eteWzZTxGDdcvGnJo",
  "key2": "2zvLXcFj1obXnkJVQKYesZDZrtpSEKgrWAncLrKD1jjKncRLvBZhJj3PbEsm39uF7qxUyTddtTw3av4NP7V5b7Es",
  "key3": "G1ayva8kmWFANRR6ZufZEohQWWt6LnKvA2ctTa8FU98p3zhZMhx9TNRjEoi1deiMMTky9UozkPv2WMGd9TqG4EL",
  "key4": "5Jomyfmq1SNgoBvf5AdQhLaTz1uKr7tNSY9ZStyRGMunRzD4g28EmBrZexm1w6kbP1TqrcG5ePcz8uXdL7vH97Do",
  "key5": "4Z7Mb65hCU8zDjx1pZKadYBoGKvuCmYyrtEhiK1BSmX6kX4aYzs787CYc4625ZBCUpz6pRdFdBivz6s8cxjsz9Bw",
  "key6": "5XkXs8pP8VrpNRyxSb4BnNXr4DFtqUjWio9Loq2NBXvfW82KHaf2cwTPBBegYWBbF5EjYegrpyA2TWfz4bW2z4ZW",
  "key7": "2qa53QEw1xsfiRCnUzT393U47UXpPKWDm5xunVfTQRKYzcf5SvvAayW95USmmRHJgzc4GLQYWxuVrTLVxkLvmUMX",
  "key8": "2EQceLSdY87mVXvE8sSEAF9d79utBNJh1Ft9t8n1rxzBb5FnNVkwLwodjSjFnA3FEu3DcXamoSBWzUJGWg1nfnPG",
  "key9": "3uk7Z2qes1wFMWgVsGwtsQLA3GJYbLiYbpVMpHEeNaShy9nor3PNfXQKiKNHnDTHwAzGtnmies1tQSQ57HaGd4c5",
  "key10": "2ZpG3m8N9ncudSVbZju16XS34VuVRmZBm9hhZAmWHPZA6QRVRBit613AMEXWiQMag21oLAEfd9FocTjR8pmTjzpL",
  "key11": "3tUBd6mXVUcR4A7MkvVWv2Z1iBwiEbaojRcSp6HXqbtvBTVn2f2t1K17kqtqRpmwzgQ3WArGcvpkHAPw15pYm32u",
  "key12": "3au2ABQB3gAUjDZoNsTy92i7ckmpYhC6nDxBwLNyKFyA2g3dDpNXAZ6aBxa8Hg4fkQkBzdtWt2kcJdpNSX8jZsm2",
  "key13": "4vocTArtWvnGx3cZMr5GaopBpDnZZ9jujFu8xBsRU2kTgv4fSSorMhropZxqDx59CBcwZZQRpZfJQwc6pmE2rvRp",
  "key14": "2tpyECjh4jvhGqa5UbDiajC4yKQENbQArbdnfaHN3aF8pJ745jEgUZ7cAdVFrpVnaixaH3rtCpjxbgd4u2yy3vqB",
  "key15": "5YbJFWySbh8rz42wFGBskofGCgJPE5hZoobqZSW1CCPGcr4meeGyVBWMGx9o35DkNT7PihpHDGQk95Q8PLdhGBHU",
  "key16": "4RFZcTtbBXGJbT1A3wVCpc4FNyxDw5A8mcoC9u6DXR6UatxsEQjwkf54sZHFRThhoY5YPUCKdvzWrTgvfAw2puMQ",
  "key17": "3cd5qR2aLnvQxn6ftuS1Hz6w3FxVVa9mu6RxE1R63D9Z3iWXt4EatuEcthXzE2HufwC4f9UNzmEXwMfvPtBcsjCa",
  "key18": "4pbjiadyCrK2EpQu7mobTMgVv6DNFWZgyatL9uQuasPxhZaCghG7J9SmJ3gobZ89JcvcgQ8dm8M2ardWw9aJz7Kq",
  "key19": "5A2qSKdThnZtVkJEuMaLFAQhcoHJMtckziz9Juc8tpWt5BD7SpJ8hZFqLC3YqpnawvWUNudSGFs5qckmdxgtHopu",
  "key20": "4r73P86cAb5hRhRJDmDtPD88Au4VNLkQvNH4kKku84aqWkMnVXkG9uFXu2UVKGwoaaaEpnNCUfJT5RoTWZCsPcqf",
  "key21": "4u9CwuNSLBSwhR4pc34dd8VYbFaGMZ8KfSwJKw45KfhngLoBr1jZZW2uYjuszDHeYXSRnGHFNwZfdSp5N6UPrmL5",
  "key22": "jswXqCxnYw4F1kxbDe9HxtUtQLj5SzYnEiSCcyp61PGYSrUyr7sPbw8YrZHipCABsKsLfXbTr6bwruwgU2geKhf",
  "key23": "3JTHugamaUbnktqzYse1FY1U2mTpaEhZEV6PsgGtkUyQ5HaixthGSy81kfdHFnxvxZGGG3RRGHZ4SnAt6puU965u",
  "key24": "3dh8TtaboUjbP51JCAAj6vnAKPBvBZbkHwyMbQXjQBhhYfdSPQN1maKq1j8n5gvje55xrE1iCG7N9mo1LCqYpd9U",
  "key25": "4h4mPpnvfEatgKPKrbg32BwQXJFtJQAYfRojxjigEZWDJtq978NwXNST4LknNXGYLatRgpmVXyMUYnvsWCLP4RUZ",
  "key26": "4jMjBoSR4pEyKMDcuFseqtEt3eH45b5LgqJRqkYEhiffEDQJEso3ZPKAMhjfrjML5kSacjEDo3ap4jN88hywJJyt",
  "key27": "5hAQq5ij5oGgv9jXM69XnELS3mTvmj2nxUQ872twLYeq3Tjp3fXy3gWUBtp5FQ17i5trWGMRdSQLNKj8bgnBBamA",
  "key28": "4on7qGwh217KN5ePyz9HFwHYsCEZLQk2FQQBsfiAuiozcHp1YDsQhYbfGPLWZTesnADZwqAr6KbTqDuvcznQZSAX",
  "key29": "3cX3cDu2MxEAYaNsgPw8Az3LGMu2RQa1nM1ARHVH6oKmSWVfx6v5v9gJ2frvoJT1Jmerd8oiXpA2pueMenJT6WmK",
  "key30": "5Dw8LKH4A9NHnwTPKLhqzcKamiGrrw642HDgnSANBoNqQD1H99Eo7kGhexPb6nSqbs3VLxrXbLN9SEyKhQ2FXqbC",
  "key31": "3T8FSWAARwndhYkiqahMSrbVU3Uaf9JcGQiiqDtiMnFzEevY5Z4Etgr9WXmLEYUf6PA31guvqbc8AZnhMyGho4g5",
  "key32": "4RnCawmTPY1umAGcVhwyJLXfw4pT8bhkmaSbpTDwBx4G4yZS8JSimVgyYDhcbNdkofMXpXnZKFyfZNgbMt9ircce",
  "key33": "5DQMUnrvGhChu723rQKtopyM8mVPWxAJtSvatHPS1MVTFnxYnen8nR9jfkk3aM9AXkGupU4WmywYb6CkjHkzGgkV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
