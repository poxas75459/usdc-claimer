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
    "3L8VUsULwv4c4CMVqTWTxss1FS7698dni3HkLDuVjNfvydeMGUou5V4KuxRP259zVUe3iSKMe92rsWNp5po1bCfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCGqbzV9d2u1tHHPfxrpqUB8bbWeQfNZF3iVWZz5Lkxro73myanHo5hbtNwDL7AJpGg4q47SS6oXtycgfs69X4u",
  "key1": "q3qvQGr2Hjr9dZMvL2qUmmg7SbknWmCL6vchYQ9KDcTuZLoYZRxsLeV4F7BxJE33Ru8WNRtGPkDi5a2W4F4Jwpj",
  "key2": "28mqByeeY9esDGoKuczPmgfd5QjnECSNnCjcysKcKedHGsvVASuu1BSjom9cf2yFuowXbz2LRnZB3aDyJ1qt3iPu",
  "key3": "2jYypaxRGyJ85w8px1KK63kFhP9KsbyLjdCwsYt5CX6ZpACWQcTBdkYDc7wtfzLrJmxWrXsUVeN4C3bFZyngAVci",
  "key4": "2sdsdH7z7hD2RfpHqkUdY8Y6faMktLrBEm5C7Gg9j3XbD87Cn9wEwh6ctn7MqEaktUMHkmSPwrEduAgj2oLrwmRd",
  "key5": "5NnudH7bd23N8FQR2J8TQago97A7VD6W1G8Qst9Nsizwp1Ax4eNECo7LwUp3ULuLiXRvHp4miWxnWTwc18PuNtve",
  "key6": "56NFFQopv9mpQAZ4sBba9rkep7C8t7eRDpnZ3VvJQ7JKKdX45rxzC2ufcd7pMArb3aQfbv5pcSM5iGPQexkFLQ7W",
  "key7": "4ihfzJx6iiBZfnNgAwUccJMxpApGQoGXTRTQMzzTLsgCPcYBy517RZnfLCDw99sAfHStCwhoLFzdWXAstZw8tZbz",
  "key8": "4hR7SaTnE3gyKgBc65C36V1BiBpNjMRqdrfeV34Fid3JAhwdNM2QZcvLFt437kUhx69z4gpq9r2422j42RyADjzZ",
  "key9": "3TidwWFZo32VWGqaxjXF2VCEjqvGmGui2uwgskFxAr5et5qsBnQn3LENUU5Mn4tJixrSeQU39wCADQUXJ6srKv2K",
  "key10": "4r9AxQJm4EqW5kGNBLzG2mCquizi8TAcWqZA17jvjAsjXSgPMLMzjWTheoTQ5d7snJ4TSnYZMoLxgMcVvNjrXkEy",
  "key11": "23JzAJo5CLargftHr4DBVLav5gXBuijjzT2JCfjXVA9UGFjGgwEmMVgDswrKY4tBMstn2nMMLGFDYNp7KPASRZ6o",
  "key12": "35RMiGMKMgFJeviANLexTvd2GhDCnzvj79VbghbtWFpjSZBzAeU7NX83NMKY36bRNfrHqkUcssLkUAgnAVXW1TC5",
  "key13": "3UekUkjrwSwU6YG8BaieWftiAjoGYFocTRj8o5ytRmUxaZ4bjwY4yqxBrimcxaj3jLysBVMRwE5vhg8ubQmJQ1UC",
  "key14": "3mNuzM5Z5aqnHP9YPiJhiWLnChM2K8skrAzWRnAzxoQaoFLBHr36C143VvJ4QFnvmWpKNwh4XiYzp1VdaDLxurcX",
  "key15": "2suZHNamxXbEFakUGam4ud3jFA5tBSiWeMw6wrEJioEHdsmUPiTtib7csPrgh6wGQdMsZEpSy9E9jaNLALFGrrJ8",
  "key16": "3QeJsT7eXj6FivdY57MfJXmxDZi8KMGb8Spvj4vjJfNH8gJjMpikMENhpxbAa47iAcyAwnLtk7fXYJYuV8NDZuc9",
  "key17": "adZyR8kb8YcKRQ18qy84b1Ni1dTZeBiKSiDPACJPAAbe9nf3GwDSU2Sda784Gf7Bzm6iQV1GJtn1aHakicXwKrT",
  "key18": "7nYN4if1aVdmd9aViUCbPczmFzD19u8dbSuziDRX3uWyPvcyMhUCVYoCbFCbu8ttPTfGZ834aUeY6nuX3fURBsh",
  "key19": "J5XUidiSe42jtGAHt1ks4v9gNMsJR2TfgCRPJEQGRfC3qgwcKBYreCBsFMzsgqcP1QX4uHVAjNB6HzufmqTuedZ",
  "key20": "2w9FZhXjFRYmB5ZqUWuYzHyTfiYJRQLw8W4sWGdDA9z8ejoumUjyV2TcXBpEZiMCPJEzS8c2ghyArTJZ4kH3nGDu",
  "key21": "5kQxoRzsNBPqoZPSikJhZzVEjVBFFsTJJDtoT81ZUsKE7gq9CfAPkPr5b1wXPAtq8pQAJRrjaoNJap6qqUYdsWrW",
  "key22": "5qEuhJyYPutissHLLvDYuyKyWBDUD46RaBmJkL6HtawWxVgDC2tHuFFHYighL7G2xCCd3axXCt1KWLnrpj1QM313",
  "key23": "rtmgVRq3zGagjHUaFT1rMKVvDLUqHCfvt72RMJT8tJBRaie6K2CpZJhNeddE2Pb9KRz75X2viyrmqfbBvszVTqT",
  "key24": "5xtabmx9KfoeQRt11jVM3LZNw1kHx7YyQyJiPxNw8wegjj6uBJu1vucqFjCqJBu6k1TY2E2mpnecFszXdUkyngDr",
  "key25": "qs3dowBUnis4BYaDgY9nymRYGuA3CgcBYtiTaiFrs7LDQd9g5AmTmR1rtbMgKTP4ewAFBDgh4kDqBnktAurTST8",
  "key26": "YjpzXYQDRhYr19rnEMDkZpYfepEmH2UEdVzgrsCJYT2C8K3CsCBqZhPyZ1oiGzPMGecgwcapkhZwrSmzm8TzJAq",
  "key27": "625a2B9DpCEv9wxhWmgi6QyooRvipcj8YvYitDUuvXZPDqjS2hsC2hHZTwFGtEwb4YaGDaX9A5GvgAEVd61W2gHj",
  "key28": "5YVMhqebz7J58n3pD6nUCJ2mGJwwxy5iV2cMBcoit9FAj1xioJpJ2efRQNKrQdqzy26EZGeDkMRRrQAM81ZEZ4xx"
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
