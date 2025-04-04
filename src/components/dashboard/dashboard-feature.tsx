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
    "tT8yQ2rEdyy1fbWNC68EY1XxCSKfGpkMwuJ8nVgtTjecHFVoanHf7Spu31fwCcJiAN4jSEdF35Ds9uttNznb6Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f97euWiaauBYuG94A1nKSfMp6QVBuJt7PjW6RPpZgZLLjeS496QWqhMyYREniHsNY3mUGYHB9QtEsQ34Bpc648b",
  "key1": "2WmtfG2syoyLb5jyvHz6Jw39n8jkZswFkQLpRBDhrcdWjshg8GjVJKYGPxTwAuQnBWQGuxPoFAeUCdWoLNsPoii5",
  "key2": "hw3Y3uaLmNj6KxSfQh3rdMgufscqdtcdZivnpwQhrmNDmgBfYk1f1EGg3Ctjy52cutPVLZtozNFjxLhJT5osUqf",
  "key3": "4Mp2Sk6fwFrU4ozpV2tsoWDxPLN58SFGLkFw7Rz2LkYNxG8TiRQBGDt1bGJBYNRyd7doJv73JPLRB4m8ytyNRGW3",
  "key4": "5uNLWzdgYkByQQfzdq4qmx6x6kABbbc4imEqhtFWT2LdSE1WCbLiKRrKv8nhjGBn1fomvjGoSqJJ1Vi2m7Twkpkx",
  "key5": "3sWg9a9BFCDpMBfGx5qJbEEWQjJkvRYwpDXcZbLcbzsutZ7HMYSs73YXSao2mpWHsvSLNqVbUbSGNy3QBsW4H9Lr",
  "key6": "2jPEjrzUQgmfMoUEwC7b6yNSKHjHGXuiEKrJUcFZD7BoV2ppHcVxKg3x4tYuW1ym9SrjfcSUSyebQ3AKBvc2mL7c",
  "key7": "3XYJTgRCho9zknT25kPYhNhW9z5SQibspEN5vSyZywbcCC1C7DzQNnK9ocpChzY7VdYX2rCBBucPzGsz5KbUhmN2",
  "key8": "28vcBAGAL2rgpDurtSn6UGAa37w3QwSycKfP5xWnauoKQBNZPGm8MvUn9EUkBcD8phtkey6RHajZ5Cht3ZbTHg9o",
  "key9": "iSiL1zBQqUugu33PgV5oNk1jhhghN4YrF8Csa9jvKPKLTgExwi1w4mWUQ4Tzsho1YJZ7UheyiA5jr7PKbiQXVgT",
  "key10": "3UNMf8iEkiaYzxDYnVhbYkWm46HrcbjUfsdt9d6KmukvWTjQZCBrZZtdVMp9zYz92RSfNvfj47xhFF34122qhnQj",
  "key11": "5FBCuwijVGBAgnP8MfqqQV9EtD2pcneaoznWPxtKVcVwC8n1Y8BuJqzUnC5muTEdeytz7fG2HeRNrSAoPQHFYCnf",
  "key12": "2CYXPoFAWA2ocrK8no259L26VHjudrpFAKNXC4pmpujUz1pSigwsmbZrwj2h4zkZ654yUCeEGJ4jaELdc2yqwCXA",
  "key13": "5BVn5sLiite8dZS4XcdKaJjdPjSgVxf3kzvrEKGdcVc7MUqWLJUv5ebdofbYhTCguUVxZ2QsS4kr3Fyh7Kg9KbZn",
  "key14": "4FCRGuz5vgffyix2R4BRu2QsEy47nVdaArXAUjDjnQifvEqh6h5pcVKuarYXXWGudw49Aftk8eYzqWXeBSiLKfYU",
  "key15": "4oB7caboaBQuewBJbi1ptYZN7G5jyw9bS2CunSTByHrFNRZWSmwsQE2sScTt7bGfuGpjQEd6QNHuGzaFcVDkjVaB",
  "key16": "578gYP6Pp77gQasEzb9D2zAV6fr1W7qzBXYBSskLmVFNLG886UcT3ar2Qn4uFAy4wZBAVg1CypY7D7oosBMdubgd",
  "key17": "5J3q5g25L2MjiE1EJ7o6ZRBmANjYukJ9ijG3t6gGzdgxgMb5D2LgfoQYxrsgjh4qZPTqanSk8eaxvGJopinhSG3D",
  "key18": "4u6NG6oxxeZpWdB9aoaBRNchyGpLdvhyxP4YadCiKQ2EGm8Xtq9r7jCj2c42kyRsusVp97D2vD5iyBxzpCaRpAe2",
  "key19": "5ygDDnt7Q6XKKDgRzbSZDQZBQ8VTExsjp1QJxaoM3yMyCdgyXnviuRqxLc9fwHn3uLp4pf6fXjgKpJreuNuQ9Vy",
  "key20": "2CHsg9MQ1BkWQsEyz49gCyUwY3tmu9famY1HxgUdFhqWJsAKKgpiekpXhdvm9HZA8TnLzEgVH5eJ6vCj1p4NB9EM",
  "key21": "58yJUPvYxAZR3pV2xnvZBFnkCnWvDJbts9HP1SDXo9kY7cc9XkcM7X9gwEVcm9mn4ChmBHubF6CfXGVU38HYkERe",
  "key22": "3m3yLCGwTybKyUW8EAaF2iiHeV4hSP9wqaiVNs3X9B9WMxAdEkySrjXhsQQofM8bERsXyACLaXpM2SNPHk8ykK6",
  "key23": "LeWhQpBXN4ufmhVeDKcsxmMNhUXunphxT5aTwjdyJmrrsKafWp15E5cYErYi2xykvDXeouqMfE2zoPsP2rvW2YS",
  "key24": "4hAyLyz45RXQZJ9tZxkgYMuqLQSbDdL53CQK5MwKALM5pvfzZK6AqmemujE4B5fdvGuYp2Y4FUUZ92SWU8ykARiF",
  "key25": "2wtZ2k5h7BBqZGrzgkGcmiSGwEzamRk1aCTLVbZwYtMH1qEq1uS4mNezwjuDuz4jXQ6GAw1xKbYoEdcW2jQeq1nf",
  "key26": "2B2uw2qxornTBuJzzo66L5xuZiNtPhy7h14HxYPFcbReqjjiYfCBdQcBpR9AiYeZ74jYHWi3qsqv44EPUy6dcL4V",
  "key27": "2BF1G395imtbfa4uNYiwiWDMuDEPNseGDsXTtnYUCy2UAYcPnTTstz3j1tfJazhoEEpRS9wjom2aj69KEWDrqitf",
  "key28": "28YPvXSkfCXa2HEBC7P8ANmkaDY9cn1A3jb3xTcmtm1R3S3tUnJty6WxmmwEXhuHowCSbvpY2qkNuEHavQcrSddY",
  "key29": "Y4GjfmPiTgjhBRjMAxDY2vbL86bfZMoNR7XAsEvmAhEwSva1tmD9wpT7wpTUgY8PTMvcv4WiD7J5nJaZ5XYDAPL",
  "key30": "ZSmBWCNeNagdiFszunuGRWN7oJgjsLK1aNfMfW7Khbvus766yeJeCwd7HVmzYF1ngy8cMALweGSFXwNfsZNy6Hn",
  "key31": "2s6Cz2awfE8T3gCQzVYJxf1VavFJQdD9SHmVCSQERshHoV6QVhRKR2AM2CAmEQhQqWqEBEFnCUJf2NmdDk5jNqbQ",
  "key32": "cMfnpJqLFK2Piz6hodQjFA7D9zijhfntCKPk6oyWY6KipobubjFQbrDEGM1mS7w81J1SafqVD6vQGhUSsKtry61",
  "key33": "gor5ixzBTj2BwLReRKcZwsiFgEdQMhkAgrEi9hY3Ysm3TEwWcbQsAjrfmEF4N7HnJMcpdSmU4sW47x9V9Akuz18",
  "key34": "4mc6ofA6aDgKCEHp4aghXbra4izC6SoF2DUBSVtY78vHNjqF7cMrYkyzv71ey6rpphs34ZrVoH4LiTAAD8icQyHF",
  "key35": "4YqADfV8x1kPg99EEwgA3vg4AqcUtm9KFUr8kt8Mg1qChd7jUWbx6oWyzRkR5xhWHP4oity93LsBe3Hngp5JsZvm",
  "key36": "46pxPQQNAMeGPPvFnE5T9xyeBfQm19EW8kGZz3eWh4UmxvvEAKqbEAPG1Xos1GDp5qnGEhpinq2ezqcDUmZQ2J3A",
  "key37": "29PwYU7e35MYZq12vHK3YErrFXNvV6mCK6e3aAcW8jRmURj2ePBRzTx4Eh2CQQrALD25DT4Je8t2PhqPuA2kYSe6"
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
