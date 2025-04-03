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
    "2mCVopJRw4VZcAkpavjscyPmePqxYoqQjfxHaJCSdV7oxJZLXFTDdUdjBs63ayECfzfrbvcjEDw2vrmWh6W2biqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27oi8HgD1Mvvw7iB6Neu3r1pyVX4pRRdWoUTrHo2YYAMexoa3evETUkwZV3EctgnMvcAB7cXJmhcoqdRBL32Z4oS",
  "key1": "2Pa5cNixSv7R5bCZEpiuz2FWAcWFW8jgu9swxWZZx29nHPCbyhG7ZUfbBhCz1zvAm8dPD9EDXKb3AUa5FY5qdz7t",
  "key2": "p5oMXEEusFBPDaacC4fm3VHuv6ghSAeL78jnmfBXi4Maes8c8tmgwMADPzpynRnqZ6aii9VmCfggZCmkgA4nXyv",
  "key3": "3igyF22XVQQbaR8HikQLLKyAFXpVgGLxoLN4BDX24uGuYTTazgjtYT1NX1UA5MXoq5Y1ghVGJm8hQ8gPH7a2xAM7",
  "key4": "4Az8GBTuyC4qeyZYA19TwJRLiuywbA6CbkhpajU8mtr6jBcxrPFzPTjoZvH1Hmd7cPb4N6ujZXWDmtjvRowvm4BS",
  "key5": "3LThj1ZpaqBiWPigvpZSRygRzhVd2b7wT7fdosPb1AS9FSz6j9sD9fEoF4SU9xYvPCy8MkSMqWU4xAXcRWoybi6D",
  "key6": "49SsZB3AjQwvhfvvMQbhwHFHyheA6skuAyCwVEg5WNwjhqBX3FDDr1Wm7KUkYmV2bEQnr9VE5D5wy7ADhwEk7Ait",
  "key7": "eiH4E8thERpigmikRf7NbNQtiCQcGqax2D6uoGf17xkVcNbeDRW8H1tX6BGd23W8EfiSCNEF1vkSW7pbtE48U2H",
  "key8": "386GfF7KQdpH8UgW9pgwuFwihzCTxT2xzrezRSBgtXRoacVuXXM17VW5JtN6FCoHnWN6QP2Z4vrhaR2b8Sf1HtM8",
  "key9": "4UP9xiug3JDcYUEaLJ1cGyUkNW7yw5ZZibWLkd2L8f5yKziqzVFxikULYV6LsHu9vCHdtzQXuxwwhmreyTRYQoyb",
  "key10": "QvHeisQ9KmBc1bjwuEAC9sfBnxRSVTxxbwpNqdYtF6h9sh4eaxtW7Zb72xPBr6GGPyBft8EPRpvx5tiniVNrKht",
  "key11": "iqdV5Ht933dvX1bVHN261Y2MESLuCAZXjVLPBzjDetNuQUMNRrvGLSqNcFGKkRBE1Vcd6n4PKKRmNzF8WZfvCEQ",
  "key12": "32HzdmMHHdNYt7eYG5BLEZZTicjZnJ8nR9Rttzkq4CNiVD5s3Po1nrorPbyJV4MUQ8FkaNaJztDCJVspB6T9cSDg",
  "key13": "3HRcvZxMJn5kkZCKqiAu8xp9HqQSDiazfjSouJ3qd4UgmC2DM4P2u47SbkqKRjdKKJvEDRP3ND1hyLmr5y7Z4bbS",
  "key14": "2LC27Wm2vwUxH9wThSeYCu5xCpKrcS9pH197vWLqpcK6QYgpm7DDBxMXB8ZwzXRZU68CDcdnkro8ue1erwLGRNtn",
  "key15": "3QFTcWabwHbaYsdBC3Yovc7Xkc7U7G9rz7fM8UcNCSYkaHg9AvP97pCzQxBWrbEFAGWogE7wmpt8G6vu83zWj93D",
  "key16": "5VUoswX5p5seAJFLi7rnNSieAnoQD1iHE9Au4TqgENdjNZysgwXc7Jo4aAGKQsYYymN41uVx5NmuwQaH5tzuRfrD",
  "key17": "WjQnvNMN87Dqr3YFKA67VHhWcwhCGuFoWV7R2DftTzBaPMJ27fdhQtY7aYTiydbjhDADkm3pek39AoNq8Zqw3wS",
  "key18": "9MgBygGMJqpgTHbifUfk3kC2KzBk5umbbc7gsT4sZH9dWuYChE2GJBntu5jtvtvRkPdMgfejDbXizW1hvcmLv12",
  "key19": "2cunHPLmqQAskVAaXjrtBYi23k6vHzM2iABUQJbU7vfSqQYqJucWs8zMsXx3kK8n43UJX3WGENtdQod1aerPdyaN",
  "key20": "5twEWmzw5XfTN5TvL54f7cMtmPQLZed5fni2Ga3xKS4yW6CrPdWuRwcH1oYgQ2FePZUSThKfQGZxBixZZ4LTyiET",
  "key21": "4aod9Nvk49656bbi76YbMk71mn5eBGSg6E5FXvBtqXobDMdK8AWQq5YKuT5GJkAWsQS6uxGZ64jwynug1RbL5Ec5",
  "key22": "4Q5WD3oe7n49pkE7oeq7VusJUJ8reGbecvC4LVGrYWLtK5nPSWUgE55hKoVbWxsAqKyi1L919Bw3WC4g1rV4Y2is",
  "key23": "3PSj7Ls87cfmKdwLmFiAXymKrtZcGKSTdjk6CE5ht24evc9u6K85b4gqFxSJ2uNazrxKvJX7Vm9fGViTpJGYauag",
  "key24": "4FbYjHm1pHrjh4WXQnfARFDUcR34eP28Y9Sza4x4EkB3iG82z5THPhLsNoJi1vToYnud8pmEueNmFM2JLvqcXAH2",
  "key25": "4pis7cDTNVf6rNkogW4HY4WL2z5c2kjBVYHbMcSmHf89UrY6Sr6RzsAwh1PNsRmDSEMExyNBUNRYmJNQ4gsSrxm",
  "key26": "7FGCuFEndnRXtdY45R2DSkHdpnBSZpk9pD5Xy8KPoLoB2uGVC8Y2s5rjb1BiHGofdcpNtufTeMcAzHdEfxMwjMK",
  "key27": "3Dgq8fkF9qg7w9DJe98cnMoGWebqRotQefyj4idEq4c5TWCQSkuxCYTqT5qHL7nVT5eYhs4iP7RFrYGZKANzpWqh",
  "key28": "4upogwyyPw6mwpnGDYZorwJiceqbxtpVa45v4F12DKJJLq2VALnU1BWjWvDWuN3LGFXoyeMgo9G6jMmHNMWirERh",
  "key29": "4bUt3k6jvgrnut29gsMf2hiShfvqkCsjUSFDQgPNJCxKxe9aQaaHNkWfYVPP8eXLt7V7oznbif9ym4ztDu4BNGrT",
  "key30": "4xvgc83E59h9D6L2iDUYSBY6rjERRbTm34yEAkBxvYEejYvSkhWmMf7FkZJgqHfBobYmPFM7M8XWkTH8oVwfyq9M",
  "key31": "48irHtTrcrYSb2Tr3v8qzKmYHKvKUxce5gBQ5vfJp5tb6RLsYVLkqZevRCQrnJLizgnBUMUGiLg8oaF6CS8w8BMd",
  "key32": "5PEBPDwSsQHU27w3dqABuWmdGFxCcrndu48NATAdfZYkwyk9m2X64gzsDwGE8N5SsMn8iZ49SVtiDJb8g4vbrekE",
  "key33": "3NohBh8fFq4qzzUqFunnmW6eZuc71jH3Z18iPzwXk5BaYWEErM9zABS23GVJ4JxsewDPdEdADwkWDXywXRJiZ41N",
  "key34": "2hWQumCjdysxpkG1FRjFMEjUdkqtdAWsTLiCqLib8fxipDMdkQE5pwFJBwxMxgmimQ8g3biNgnrs28xhNJxUEUud",
  "key35": "2rSXZccm3gzE8bqRUmnt1cTxSyn3nhRq6pefGAVxpEeTJ8cdd7J3kv4yUf3QMbypsbpzqyYFBT1AiHjLy1Dvb3iz",
  "key36": "cpPkAhih4npWGjW2DQf68pit4aBM7LmFFte9w88XevneWQj4T32pv8HrQgLEiwQCra3pGxFELNzn38B7ZGaYBRd",
  "key37": "3UoNPzi3qvaRv6oxHQ1NE8kU6KwKtc7fAY4cap322YBGzLEXhAaxgEubMBmz5iqwTXVMkeeESbDcV7GgaBT4WnX4",
  "key38": "5n9B2A3jbo5zuXZW4jUwcTLpJbci1sEefzEBjCh6cevZMfhtBnjnKLfcjdjhSQTt2UsroXzBVZKc1FafYJozQwDL",
  "key39": "2MTzbSozUSrYRhgkeMXweJ8SthvBWZMvWCNSYyqXukUbvc9Hzjo3EJLRcg4WbhpLumv5jyp226UrmSSZ9Yac3YNW"
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
