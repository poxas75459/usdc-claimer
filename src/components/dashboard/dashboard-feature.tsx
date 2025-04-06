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
    "4EfwZpUkdNrffYYqJKEPcCVg7uSffo8du1JyazH139fAYWtRUprGZ6RLfa3VotVc8zsK7oERu9chzedQNpB31Ssn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXFHU8EJWcEF4CS7PUySCX7kq1UP2JfAbwcCENC1K5NDAoub6UkS7kGKeyfRfsRzHTW9rkrLjjdpZMrbtzMeeqW",
  "key1": "3bEDcN6tC2tnr5BF5kz4m7mVHoe1LboZYFoiS5kaMecDhvw6tBBLNwADbFYj63GDKDLQ4CKauQ7EtEiiym9xDnQZ",
  "key2": "47Cf9YCikZFhqxSL88nX3cEsTfWv2ETqU6aP7hodJXbvziEoGN7QivXeCGNWUnrhXSbTSX9X1mLNtXBvGecxhMBK",
  "key3": "2pLz9Xgw8vc4FwUqKLKu6jMFTshi9M9zU7ULHA5to6Hf7AKh7LpviNdRmKy31JuSA1hgn6neYygq3gxQ5z3vgTpb",
  "key4": "4GLUJYQUSEjqr1sSpSbMotmdtJr1JWbbHAEyhzdJ9131xQCceYWMGymr7vV9mGTQQKFjedE7qqrvBwXhRdwkpLwv",
  "key5": "5MT8YLbai5Fj5WFVvvQHXSX3DmiwPvSSFkvNv88osxtMY8eYyXckmNf472whSSGh9UE5D8cqhdy9TUYtTB4ZWHLk",
  "key6": "5muw1apjT6MLP98jddk1AmXLRLPZg1q9mfEpi9QxV86ftvYxVpN3JjugxkCQ9iF738jqvAk7yysS3XQCs41rTr8L",
  "key7": "3U85eRVmeyP3hqh2j69VV4Mb1QYJvJafPTruLz9M6ZKqqxeZWFFs6Z6hM2JHTBvohTUtKiDnzCmNEmG5wTpPK2GZ",
  "key8": "56FntCKvFvrJ4jbwReejNSqhQvLS8fWKjp2a9irQB4BQAEdhz7FiXyQytonyMinEHt32bST6HD3jT1Q915vMQnCP",
  "key9": "3J4zJkt66X9QqSQYEMBLG552jJrkQDcgwyG9pw8SPqMrae8wMRNsRcg45Yu9KwToinRGtGcMGnjNWZ3z8BD2FzWF",
  "key10": "5BZAKuxFdrJDVEKRzHPqzAQ6Ci5KDCNU9kskEcaG6KJfEATcTZRu5MXytuVPNhEdMURidHVDX1XC27WRMvUHj7QQ",
  "key11": "4552BjrgT1f57ZJ5yZn798NYd3hNm72dk6ZZk8BAxY28eTkYycunh7YZWzjNjugy4bJfs4Wz33ar7dQ7xzrf4Mbk",
  "key12": "4RfJw7yPYkQhW8WuHnqyBDeFMzyzYzqYxRbLGF7WUks4fjivUbzqy1uSiq9rhehBK6Cmq3Vc8QJXZYmFLaUcdYiJ",
  "key13": "5j3o6LwrDMvNWZQt8gibdhLTkt5ta2ptfFhsRTBfJckUEsPW5HDa8xydZWok2ni6zGpZXS8gxwrJn6GpumBowL9X",
  "key14": "3djwWtGtb3C7cjWjvR672H9T68bsGymUdTTCxUxpJETr2QY8wCFuSLV6L9kKQ6UHmhSjsRCEPWnyDgLS2Phw71wC",
  "key15": "5avUqhduXsBrqPPbC9fc8kUWgLWoZhXNvpt5aGKvT5A1UtEYh35GLndnk5ywW3TVi118vq3Jda9YjNbWsNmfwhPg",
  "key16": "GNbmB2RcRJCBd9ecqCKHbUJ34nbRezjPz2zM2d8x3f6ZCrG4fjzWRNym462jd7XwMHn5zaesMDnoz3U3SpeBgut",
  "key17": "3RRbDGQbDYKv58kkX7J7qgsCwY9G3qsht1jtnM5YToCC26ZLW1tGbDwuvo2QvSWdzRHCuCCXLhHJCRPkTCedDUPM",
  "key18": "2WV4CdnJ9NBdSv31f4HevWGXHrm6ExrENJCq1Gbbj3xQqV61CGJYsiqXFTCZtHZ33b4pSpoWKbKKNCoX35A8Fr3J",
  "key19": "2K8Scv5mcnLZZsa3iXKusryanJQQ8cvLhPmnBSDoh9W5qmtV4XkX2aB6G4sWa8jV6QE8WutkPVQhKXVWxnaZftA",
  "key20": "5EnGHEKvxu6iohe5xQkDCJmy56ijhnzg7UpSzx8DKE8a95jHPTwZJwyo974Xkww4EjQBHmrE6vCL6RbfdNEYNh9i",
  "key21": "5HDfpiseYwCTTP7ocQeypMe9Ey9Wximud5z9SRL6x4f6zjNX1DohbCBSNaPXkMRGx7R7brEQMtAMXULfA7YCYqra",
  "key22": "5JqM4hUFELCRUr5LXWyVBPnWeqjkU1wjAd14ZJLpZFERZt5wkJkDumctWxRxAXZjGpDhuRBUpFzWo9WzhVZSATF2",
  "key23": "3kG267x3q6u4aQhvBNfyFYs2rwbg4Pd2qfcbnZ7hCvat1teoTMcxdSsnZNRee1JNxECNXoP8fTB33F7GyKkpYNxK",
  "key24": "5y4X5M4kz5XLXbDd7UpYyVXsgqMNG5J9BM9fC5vMB2RF5p6WHtZKsX42rjZdfn3rRNuCk3eytr8XAbcARpYrNB9s",
  "key25": "5WmWrQqkNeJo863mTEAVX65LaKg9mYwYUtBcqbkEKhmkhyYXTLWpWbj51mZ3cTBcSXT3y2gS6hGxgkyYE8vFue4A",
  "key26": "CQ36jvztnia5BjT4pm4cknZLx6W32WoNoc79sGh8b2fuRdZJ1Byq9sGiMqCMtv9mxVpA3WskgpSm3Re5QozZfaY",
  "key27": "3Lw415MGAYpGHqizaeafpGxS5oSR6gV2We2PBE6N7ikm43rjQsQn5A4ycEEZ8P8PEHTa52z1G5GjehcuWUnWB5AM",
  "key28": "2uiCA5oGx3pkmDwWqMBpLuvzQUdcbgXhXgMGfJWQLQZD7SpKqgNJBA7s118v4RphDmYAajsc8tMuVoSKM573zG2V",
  "key29": "3FUeje66NaUHkPBTcJEhe6yeE27UQQ1EwYWxAbQPLCtTGGuoQ2GviopugFAB6do9sc8KzP2Ne15jvYyS6VbBqUYN",
  "key30": "2ozS3i42x5U16A7mbshYQNTdpuXDy32ivTPQEyTrw1NgM4MYgTAm71oCJLn5UgyfocBhvoKpnLnjVReNEp786P7V",
  "key31": "2CZQJtUa8wr261Ke9coxHuWVXde4Stmaas63d23MfxGztrNKJUwudWr5nbbP8GjdSCdF7dGPgJEELH1LB2eLjXVn",
  "key32": "3tP3yFoYRofu99vMK88m7NscFEvZUvTJkb8mWqvBey9vMKUko5yZW9dDC85izrmc8GjHxDaQm9JhdXqJhzwDTTuz",
  "key33": "3wsmWL8odSknXgTXLoaW2XUas9jU7AiCz2MHcvTJfnjkd7T9xbQxYDWktx9QKhzt2diRWKPUD9d75MX1241VESys",
  "key34": "5xvhV2J9KfADhb8JmhJTtFqJWhGdoCW4gPsRn4cDuHNqyeQGZ5kUBp9bnviffeiaGScnJXBnJDwuN3yPyMvaTBjK",
  "key35": "3pFodY8cNtcn19ZVjEcHaDmB5NAjS7x3fUzvafCCPtLYBomPN7offRf2oz6dfbNdTTB65XsDmEGYoC1bZgDtZD7o",
  "key36": "24958ZPMDGuMfyFTfsXaq1hNNsahbK6Y3WjSHAoYFkyBZQAYuX1kKB2eNh74DWEMyMdGBj4SRYNprVW6dLVA2aNH",
  "key37": "2MRCTBXsj7MiE9ieteuhx495qXMmKoEcAZpS5ckE6GmeFBzeDbnHD13csaYA87cUd81DmgvB2Nha9x4n7i4hd2Du"
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
