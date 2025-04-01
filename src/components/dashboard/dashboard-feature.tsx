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
    "5JXdRzyA9TusxAesHm1VSDgZTTjmFhUyi9VY7BiA1gCnYvbz7qAVMSxxfdcwMhYGnznQEjZ7xgn1ymZZ8c4DoDvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1G6NVuuUbVmPvvrmF1EAfcJr6GBYkB4mu1Kgn8osEJM1793g3FzY8X5ggF8gsnah4N7MarX2c7FCRZj83gbuD9",
  "key1": "5PwbqSxi9pnSbU7y9X5iFDdWXSbYpzzuNCPT8RQ5kj5EWshLCQxTDrAxhBKN2TTR7EYX2nspE4oJzvLbmQVLk8J2",
  "key2": "6uES3xmVNa7K4C86uuaGepNHbLHsWgWUPqSdBsYCzGa9Evy15dQJ1KcfUnDNY86gbcTshAQBCBuWB6owtd1cFe7",
  "key3": "39kZwb2ZpjCTW8w667aCPz15sVSjaNxxQofwpPvUe7jT8q5CbxzKtWFohq7EUNCC3L9PfKMjgdBzbj6R8SzPYGdR",
  "key4": "38dbxYt3REnSmLn1NE6mwNE1cvmEMxFR5h4aS2W9wSweSmn7rKKrk6d42coQYcCWgap5SyFjCgRE4myyUwAe4S8p",
  "key5": "tse6Q9xbFUcmUhHTvLMvsb9JJJaNd72GXBsTXmdTe7stvGVRNAvm9Mk22dN9CgW6cxf8P1kFEDFfj7tK8Y4eeWt",
  "key6": "Ef4PUUfSdJFREjxfdcUH7wqJqDKD6HWeLCHNo9UV5gg25grB2DtRVV9svmx2ARn4LRyakPvY78xfa17xCohsny9",
  "key7": "2nwAwo9AmbMt8qA2Ae8rFM6sYVBs9A2kyBU947NhaE8awnsMmftWMzkafAZP1AGMK1MMz6RHUCpBtaiCrrLgSXWy",
  "key8": "iv6tRPYcpuh7Ux7ASN1WDE1svFJaYrE4kCMmBkqMdWoAQTAy4yw1a5qCU7RWwj4RheLZmRU8sHmGK6XeQCdK164",
  "key9": "4kJrTrzPhArM7mpwoyZSkZAPfP2fkTx6fiVyu7ykXC7cb8T5nYBUd5amWLXasCvxmNms68km9UHeEuRUfoH3GzNR",
  "key10": "5UKmwFXZHpdb3EvaQf5owS3ZQdeqsEwf57FaUa3GmgfwxGBWgtr45CmQosQVBpnWKULM2vdDJHFi3KkH16cukhBZ",
  "key11": "4o8cDL1QT6LcEuFLxmWPcxx9fybwQa1CDGuJibRBoxbtd3Wqd2zdH88VAqr8tBsdu8Soxz4YzRx5xa1EnCLu6WL5",
  "key12": "5mzqzFEMJCt4T95goBY9SwM96bPVWaEyBtfWi6VAWZcYQ7o7b3VoHBQ8yTJXmsBjJCJcoj9mS66ibP7Rz2Z2JMk9",
  "key13": "5c27VjArjSy5NpcZF9bVhxMiF3rVguwCyQqTx6Vwny3pKAfYTfUBuiFvgsFrQgV4WurCBh3v5Y4Rpg8HFs17tf67",
  "key14": "pjRcSmw5aysc4S75gxdtJvGooBTZ2HCbEBtfTtF4xZR4ivmxTutAonXL6M3t76BtA7KTjAKanBfxsaciAAtUXHW",
  "key15": "2koBg7A7TiwFfzKZva33oErvp2Z9wmMxFidH2sCy448Djd2qHe1L7ATxhkAho5yRALRC2BJfaUvJX9mFRbNdQcqi",
  "key16": "2P99o6vZPdsdL4QCmdux5mTFmtVGhQ7vs2suRLSbyh9dArT5rEQ3HHaDSwr2kJukPChDRd8hbJFmdY1vFcZ1vRsC",
  "key17": "4kWs5DDZe9naLXiw96s14a4Hyxnvjan2NE8bD1uWJZ3xRTgGmLyPDrnn5usLzyUR51zUkFdSx9umhoCKm1LGWbw1",
  "key18": "5Afu2jHJQ6x4CuzyoScYtLnm9TpUGZwLF3x2pKc9awFkxUTUh6jc7fnf7jL5w35t2smED7o7YvNYropSg632sqsH",
  "key19": "2LdEsanaYxC4BYyGUFPkzv2mmNwDkuvEPNqAdwdeV7GHiV3KErTjQ82E4T2BCQkPBUPNTY73xtP3QudUwWSUMWR8",
  "key20": "3dA57KM1NqfWa4cdqUwgmcFFnqh9YVVr5zUGy6gCvfuyiLcWHfMMTK9jMhQCAGK7HZXaUzwGftqtFRJXyZSAAyq4",
  "key21": "2nK6E3YMmt9wC2s4Cm3AaBCGNUSqwbbhkazuU3q3JoSDyCBWfsoEspvaHBiVogHWRRXAy8GNHinTtbR3qQEpx4eo",
  "key22": "ydSkbzT6WJX8ZAP8nordPPh57GYC5GoZQZ3rJy7LmJFpwu1wJ7qBNLYZujgAtmb9YjkkrdMqp7S8CtSZHJQaTpa",
  "key23": "3nc1bm27Yc5tbeuZMNf3WMVSdPQzRBw4DparkfmPqARkbQKaegzCqegthRdn4BBeopiTn9VuPu1mnATtqL2HCDLT",
  "key24": "3VZRMyiHmBsUXH6ui1zmwrJYNnrTAjqXE4Mv6sWuYZ9BsUJXye3JMbfwLgLYiQceGWWBGCfCNBbutyTQkzro7yMJ",
  "key25": "3Yfkqbo8F7jnZdifqn9QtjRzQ3b6z5bmDX548BF9A73tRnXvXqniQ2SfWV53nASUXQkhcqbriNsnCtXv2ptiSd9u",
  "key26": "4PKaMxQEYgHJL4BufFfp2aA7SqjW3uugnga8SKsCsemHLJnfC3C1hRoDWZSFUWAE9z32Z4utt1g4ghh2fbNhdPeb",
  "key27": "4YnFhfDwstw8v3NSkoeNKXdzbcPoLRJ7bX6EkC3jZW68aLyaGEuX6wEnAjs4WoecuEcm3JLJXmPMVMfMYVvK6zLB",
  "key28": "5if2WWBPr55rdA1xxCamJJcTZ9NcTNtBANrx9vdAS3p6ps86L5BYurMEKDy86wG23tFQmvHegUQAxVjtVNvwh1fZ",
  "key29": "U78tw9Qb7rMoWEKBTr37pQJKNYAcFwCPR5ETPTEJYgcfNa7F5Fh29ZAph2BJfNQ9zJfHg7b7c2gi4QyNLaZb5qj",
  "key30": "4yKKnV5YHdpqws6DLeWse9jcFK3jkhNPwsUFxaWw5i5YF42FCzv41BtaqNznNXF4RHW37YsKvrGjJaJqgdg2HMho",
  "key31": "2H1DUmv7aRzy5mErxET8zKAkDaAVJVK5m54Ppgq65h2AZ6dkKR8taNPDyyWweMt7eN1mg3PWecYN1tGDy811XGGS",
  "key32": "XFpZNdnJS9GzeBeqcaLYCaGv5rCAJJUn2ZvRiB6hH4GGv4uybF1omz4Zk97LkUxiZ5M5n6K1aq4nzcqkyjMXY9J",
  "key33": "5LnuZTUw4fGNGnGtugNHyMVFcfW9W41QRiT17xzCw4RkZU8g3cWJsFPLxK7YUUUg4fp162apQJh7w2Afzoj6cf1f",
  "key34": "4Xfdgt5aRM6boeYwCDiskRMU7fnsDn32cPxnEywVLiBGPR2xWLsogtRGTK3UD4C2pPGc1fx6NRJqJoEGjietiMgK"
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
