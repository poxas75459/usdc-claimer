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
    "5LWNZS31nUTtRz9rncZw1xTVTxFTEvkWJLJ59E2jGVuvmzbAeNJUqnxvdb7oSQxnYai5jHqhGQ1m1DjugdZq7sTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2RkPQjrm2Bsa4wZQwrgUL9zNpMyhXtSjGae8WjYy6P3NBhZUU5ebqsKmx2NTvWrP7ZhXVe5fSskUvAxVdT2G4Q",
  "key1": "3KC6tf6p5FtsfWmu2TbbALdkwGuvPc5vTakYiv6ELwA5yJFmVcY8QZFz2C2cs9jaFx5Bcp24Mq54oQvp8VeGscba",
  "key2": "3RLfAmTwckz38a2dgFV2JKsyHcBmQJ18MiisogshsAGiCehJmgpGpt4pRRZzXGeUsRqKtQztQbKoYog9nm8Rn7RH",
  "key3": "v9adERLdoHTkwaDQQX5swdc6dvQY6JzT4z4nSQzyTbC2v4g2ycng8ovXFqvcZM4udjKj4uoMW3HkTDPDuodmWTu",
  "key4": "4RrFf53JuYTLUfi1hDngqfZEHDdeTy4AhnaxPEP6GUR4pAvEukDBHoWBRUx94fKJSoEPp4qmZqRtoqF3jzz81sJk",
  "key5": "2s5wqAiKZUrp54VSV9BA1MVcssxqu7kf9fMk2Pt7wxBiFzd7ftKBg5e5HrxkUF2dzDDTmpgTEdZZKyhQMuGqAUq7",
  "key6": "3Li8fTZ6jWWGB2vAVEJqyVzKsA8jXuHasbvto2EVVftYeojThNKy5LQRcUEkzxByDxaNf7RAbSHGJSrVx8voGEPk",
  "key7": "FQzsMpx2LB1zfRqqajV89qn5i9PYBCjUKHTp5Nw27NKSpvWfV7sr3Ja1ch9J6xB9s4Uif4en1vyzxkgS2SCxvW4",
  "key8": "4e3unc3ZQXiiPk7NUZDc6XXX9BfYM99nJwAciseuprnLK2aGVkFqH2SryB5GKm5D9FoYVtrrWQTs9BKjgm1Pd6SS",
  "key9": "5wLLSPrDWtiRaDagGHdiPx6drXKZLypqRX7d2rdmXz4yJmRF6Um8wMH2EidvXkL49hZJAQVt4pVvX8QzBxdPQ8pa",
  "key10": "4QEDQNpB2J5JGEmug45mitiK8UGCfD3itags32BtyF26cqA1XtiYL1QACfxuHnxEvQvzri1D1gah16HwonSh5BiQ",
  "key11": "2meQe8N5SBDeXqDGrxNuQUYcvQ6SmbNQukzLAoppRfAN5YsQthxY4idjQCduQyptT4XZ43tygti7c7SUhKWfj8fc",
  "key12": "22N1zVHzrSa44RpzypbYWGrE2Kec8nJuH3h3jVLR8VjKBLHgmBEgdh48xpXXTyaiHKzKUidB42vTBR1LA7iPUGd7",
  "key13": "5fKpnk7nTEeyk34DvARbSZwgjVvr2V7VBV4J9cm4bYwE2EEooxynZoXBnBdEUrMLMVW3w3ddbzAhBKdcU4SQiAiv",
  "key14": "2wPF6bzHMJKZAs4EzHauFj7MHkMPTDKyx3F7ivZcRyEyLirPrRriojAvMcFmZN1oQZHVAZ8qXRXBQ2gVM5SGgLKh",
  "key15": "gFbf7bGvDBePoVkhtDLytEHUNfu5DjGgL2JHCUev64f37Wh5xn6hKYWz1FpKDAPbW8gFLgJfXMz6re1PRyCZVkX",
  "key16": "2PNPtUjs1SUsz7ooWDbGjhCYhVAEADz31NrWkwkkKB1e3zjF6kExEq85PByoZj6gXycwmEvdKnDYzUCm7sj1tMPx",
  "key17": "eDT25wAcZC5yUAS182K6keHBn5KX3hrjeARxNevh4FFwapQ12UFbcDyBrPLjT8mnFdCb7DTLy8rM88dzhyBbZPn",
  "key18": "3VXbw4j7FBLocLz3pkX23VvZ6sQM98vnnqkyDpvLAqbt9dberd7uQHZp6M9GknciUTajJuyXDrRufSEQ3BPnzNim",
  "key19": "25z9LzJbHrDg8FuKampckDb9au3uR3zTeKRkPEvTF494r1VrdxSUHRjiiR5FrypaG1jCvHYrM6rnA67iSh2oRt9f",
  "key20": "2d7U2g2SMDefBN5645PZXb29e7Cte6QjJb1owtyBKUb6pBBYH8MqRP7tJ2ChFxDtHHqMKGim7gPrxfE3zrg56xpd",
  "key21": "5x9VAUbeVpt2tiDwQQdgUHapdQeneFN8obLWiRQZZZm7g6BasAtZFmosfGQuSyvEUbyetnhjKBXdLB6TbEs4Wc8Y",
  "key22": "5PrkDHhSU6EgpuHooWBgfhqHLAWseN9jzwMt5hHETXHuXzGuevWWKaBqe6mD8GfXStbENDmi6zb2AmCuVG2JR3Lf",
  "key23": "5x4NfLG1DhBnpn4xFMghSNX7HkMigbdV6yCy5wqAjSoRyKF5gNbMKJ6dhPVndudobiF5CTqaUJhtSYs2CVS3U2Ex",
  "key24": "5eGoMfEiXzmCHVsUfUzDvhdeKZCZkYK5Ujj1a6AJwBVKSNPRkYJxbAfwatUjc8HgD9W2fDWPWs1iggc4hY8eTwv9",
  "key25": "2M3jFahbAqH6GPVruwXobagtc4wcgDepMq6CWh7imwrLXe58NFiGsQuXkGrc8BrrQyAJNf76WBk3gm9z471RzpNU",
  "key26": "36kmdmD8821nVTsyx6RuSZaWxo7BH2VaCPEVUUtvP5ArDJgxRErT3iJAJU4TVMsLFCCJjVQ9BLr6L62tQyRKKoWw",
  "key27": "4M7azZPJSXYeyXRzyfjVyB6oAraW9CpnyimuZvrRcP5CpkvbRTdDvViuPYTMPDzyeHAKB8f39w3kHnJ7RUC2Di7Y",
  "key28": "3BW7iVxkBpwBb8zpYF91wbC7xoMyQEzhPqbQwYD1LEyk7foQH3k4r4JEgmY3fSU6vDX4rVSm5pEYj6bvxvLgpQdy",
  "key29": "2iCeVZkciPH3EyqHUXqPasHtKCFh7ok7417BikWK78pGW4dv8BjnmSNvoqzrm8WKTdT1nap8SLCMqjSkoPfGpoWz",
  "key30": "5VMc5XUvtfD45FGfag1KDeGiWnmAkMUCYdjMmH3jBAvLdWgmPB8vmS6brnoaeQWqTrrwqrENB3te9kDXH8HLdzPL",
  "key31": "5VjhM6QcjctnP6339tbfnDpoLxCJNdgLvrQwLPUvFcEK7Dr9GDP2bQnbZnzmB9LavQK2Kf9hyuh4xEMr8TWxvEa4",
  "key32": "5BBnmjaiwv4Y3aCSvE4inXzRaJPXF3dFhtheeiPx49VPYt9GDHyktMc8m1DZsXfurV3L9vVEDzVHnJsmqMDJ9fkd"
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
