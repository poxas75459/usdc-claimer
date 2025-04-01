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
    "3p2UsRMwP3CVAvPCE3MrgUa9WX8Ui1rvcfXiu1GLE9Cagca4b8xTxaWk8cyQoy5acm1pPPCJJJa5w2L9B7dGB7ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7R1jVuRFDLTZSGHP8fpsC8a9vpR9RV4anYVggbc1hBfKvSeoshKp5qUh7p3PB7yZshs4tJz6wq8pBnws8kWvFV",
  "key1": "63P3TiB7A6g3wSCyThc6NsewTaZoNAKzjSJU6gy8qMHDFWRkJNA5uCrRAMkNTNiinfCCRdePnMN59a9h9bMCYmnM",
  "key2": "3gopgk7AeUd7LqRNAWXJmFqiCuxC1ipPU6voMas1By96GAMzsDn4MC88Z97E3ZeP1bqjCiCnvz2d3bokmiPwFozK",
  "key3": "578V7iNgr9RkKK73EV6KwzYLb2U8JDahjTAXyJBmunkERDD5dN9J3bSPVSNT8nc1DG8A4iCqY6pf9TAHvZeDJJqT",
  "key4": "5TcbAUzNSbR7xDy4U87wg8gWJ2scvH7npNe7ETSQyqzKJoUkvvUmpRpLWN4pgwvRMqaCxHNB46487mH5oRHA45Lx",
  "key5": "RUCiPoo5YeA3E4EpefoAub19e1C7tb6qLCUGsstxRkkM6KtTZf5843NKc7A5nJXFz1ASR9sQFEqetR8QfYKpiik",
  "key6": "5xrkR8TrEZGw2EN2CFAQVzqfgAUwNAwFBTEBxdfBMLBuPLmCg4ED8mHc8PJqvmKELzbytHQCcPUn3b1TWziaPbBS",
  "key7": "3jUEknBBxrWzN58tYtk1ayFqZrPTZRpVnPWDN7CnMMRQqEkhyVwfEZWEta5TyMbzfEnafTj8sp3qrJJKBCGc9XpB",
  "key8": "2rcH7xBQVq76XezAFD6rEnXYeXdWSb6FhEFzvRtj92Fj8xWvAiE57Ma7Mh6f4AWCKP4tvSFHFoaYfsWvqew8M9GY",
  "key9": "2XWeksLCXB2QQtFq6AZ8X5yHWDy3QQHxCT6SLuqUhvQeq2zPGV7HwyNCV6vnCxc2JKNxbfTtPMGrMcR9mzRDRb2c",
  "key10": "2td17QiexeeNefPGH2LXPEmAjeLsw28kRssje5yjShBUdNjvtvUy5b5HE469Zd4rCFwZ1Ju8g1QTK8Zq5J4JnRje",
  "key11": "2B4tmdQZjPPvG4u6uBaTXAC9knGQxNmBJyW4UrdU7f7xx1GbMeaMwDhJ56pb3dJSq6surkod7rEG3yJoa7KcRKe2",
  "key12": "2VEthmUcHgwgKQjk3DT1saUEmieYy5Tmg7np55LEGEAtkDTSXrDaP7tfyfsEKStZkQdjLi4vMtAzRwXoiEHCMANZ",
  "key13": "6Ujj3M9ZtXtTYAjNtAVorUJQvn7UP2TpnGfJW6sCmTSZoXVc1cAbgATk4MrTExM5LvPKGAsby1bSf3C8P6EJrTQ",
  "key14": "UsmMtF433YgUV55bLpEnPVApJPASRuNrF77bXkxySzfJwxoB2GSSZ9dqh8AgqvP2hrQKs4jrWYXMk4JFkDE4Db1",
  "key15": "wfsGJP6XiF3Ku9xGBQZwd7GTZREKc1kEXwGud5Qn28xX9at1gzXXFAqb3Zy2VXZuBXFufnETBzvTgMgRYEtJ4LY",
  "key16": "62UH9ZPgDqUtDSHbBsKrrTdvGYv4yhPe74m4PjX6SM9NJ9JVPjAf8WodDmf5oCSxUFfE3LzAxBtJGBuq26zx2QLp",
  "key17": "5vmbFXfeJjw3KDSh8ep1K5JuG8giZE4ausZuvV3mGJBqLc3z8HajHdNbKxF6iwvdazPU5d8HSc44fPeSGwu9kCN8",
  "key18": "5Rm3Kag44rWSCCT3ECoD4WJQdEeP7SQ3xHYDkJcJX3xvYZm7TRZhNGSe83ocf9quo255kMDqYRiTMeFCzmpnbVef",
  "key19": "NJpGxkzpcKGhfwQmNT3oyj8V5nBY4PahDNRia1YRAa7tJ3frjYxe2EU4gbyG9ygkyqNi6XcFVoVBPUEgGRAAp3D",
  "key20": "TyrB5pPqbj6paYXoeFiqT846SJru1bFvMJGUDJu56X9pTNW79uxRfcdpc46KznE82QocExvX2rh6sefAtHEVp4U",
  "key21": "3yvJAGjaY5c2TwrT9DF7chyTcncynxKrTMGeT7bPM3cwto1UwQTsbMgGgETwFSK3dPsmxEEaSK3WkwEVYT3nDzao",
  "key22": "25DApu8kmZRMi6s8jcike5U7ErDPjRtBnKjBEAwXSpzDtyboiQgDQ4YGDmzX4E55XLKa6UP5ronpP4NVHiSwbsJ2",
  "key23": "462U4dH1v4c9ue5LCEVgTmXXmvm2nb516UYpyVGNY4mpEgnPBF8Mms3XNdEMhWZhD1YBt2WyzBu1sYK5TTDBFWtC",
  "key24": "4atzeqSfMWMCvPMcLdrqi27HPgouLQfuo1Ju5QbLYg5s6YUs336z8jmRaYyZziKtvt8H4mxiXBuha87A7oT8sges",
  "key25": "3BmxgzCzfobd2b2CKhNKzenw7LBUojyq6LmtP1Bi4poZx4KzD7ddq22TieDtvNLewk8Fp3vaF6p3h6Hz1BsSt3Ni",
  "key26": "2Vw4vYtmMnPVDFAw9E8MARcRKtXr3R8wpFBhiRA5JDy6wuVzoAd4XMPPDkxoXPZ8csT6Yo2qMMWfeb1apvq6n5hs",
  "key27": "3sfAhMBGzfEPtE6vYAGhho9yp5AXZcm4A2jQfLnQy4W6VHGa6ojvcx9PUDRXYd9Z9RE8ZeX8TPbwC891VNRuGEQV",
  "key28": "2wVuW8gAF7gifw8SMXL8mn51vnCgVLcXR96NAhoh4R7pYSu1UjBBkQMEU269rQwSuDUVdMgeFtGfZ8SEdPxetvyx",
  "key29": "4xrP3tJCTtAitBKXBpiNMrk4YZStXgDu1msh1aqJiXZqJzZpyCkXDNuj4TNUyNH11kGRbKf42PpavA55GiD9TrWe",
  "key30": "39aV664QnURBTysfHu3PjimGyok7pEgKH4BWSmnDboDCpPDD2TRtLxUZGUvzmxsRwHr6Z8YWAeL9P8moFzed71i1",
  "key31": "jAfC9EpSXtYdfqvJKCeYHhLZ2QJVpAYTaMZGhYpSrPcXsFqKwNmqfbkoDks2Z7MT6tEV9ZEB15nPFrtPfipZdZy",
  "key32": "5KuPzRrjZphTeEp5N21iBomNT58XWpzVyPgWLuAKun5yFFok4TkBrzUYQfJcy76sMyVXa2Vvd52mkCThJH7ASy3K",
  "key33": "85v175sWGv1eMqNnkJnt3aWaQyKTZDUNqhRtoVzEVSzoCcZowc3KUkbwqWGXyD6mdv1enQpXx33cVhe15Qv62s7",
  "key34": "55a8YCF8jMBgtcfdsjSDXXUeCavbbiCsHSfWVn8RhmXgUY9CdgJAM7h2ZdGVPS8hJivgDiR7hFtj1ztYG8PWeRjB",
  "key35": "5wVSo36DkR47n4pBcnW66hhxUASKEn6Kz5vgi4eB84L8hHV5bsKBBMgvcdLdUWakEcKkVcuMPjow852UN97NYWyS",
  "key36": "jh126kKs7YDX54sLYebq754UQFevnNT6owp38cYDrJ2dL82uNN9XQ64zEy4hEod82V2yD7EUT1h9DPNsMY5uXM2",
  "key37": "2AUNkTHam9fso8KUAM2qLc7YA6iKg4PYiy22AiEuhgVs38B7oivCEv7xbCYqJNnfcHX7Sx5hFqQxeoWovgXa1dtV",
  "key38": "3bHL1Ey1LuacNqw4if29Lp263EaTi8S9j4xVyHTD3vc574ZtFvkhVKJcCEHrYrXoGuKC9cqHj8rPBe7KJTkB8362",
  "key39": "5UrfSHSH9B84Rba5eNq5ZSDeA7xa3A7CdCfP9euzCLw3SX2nqVuYGNjDB8BxDQQdXRkhw4JfigGYPFqnvojgy99g",
  "key40": "4p3EVcfNLyRrtPj1GctEt1x7pZ1N2aihtXKixjPpKY4DpPquAqkdPnaG4HR8XUo8VzZJr3z8VqTWvBpmXT93C8je",
  "key41": "4V7K5ECxViCMeWz6YgxzcVZdyjavDmfLEARtZrwt6mqPL348RycBup1U7nvJhBhj83dY8iWZH1q5syPq7Jox9qS6",
  "key42": "5sE7xuU1E3EpzKCjL6HkPyZGxMHMDw4jbHfczKvf8YWcTknkRJV4o69ZKD6qq5dKzBjNUiLPZoW48MxGcvZ2C52D",
  "key43": "2meGxBZX2RRcs89Ly5uQFSC737KfLtiAdfqynXz6yvePcwiWyccJRgaev4L5DnJRu1sT6tWtq4AahmY7gR6HNiA7",
  "key44": "47hLgDNgfbBF1tgmQbZxZhYsAJFpLmerb6cNFTiNUVyeUN7ww99h2K9oDZhz9TMtw5pEzonjpu73cpp9gm7HXHxS",
  "key45": "41HaxmzUcnxzPNvAa69GQfLF4DYZ8uh2d33KHwmRzEZVpV1kqcs4d2bRfqQBtJmfEMpH5DmRuCZ31jo2M4ieKm46",
  "key46": "RfPumT5ENs9B468wWEooGN2Fzs353FeYKC4mycuXhpd4Ye3pteiZ4VomaDEsiMtjVbWxLgP1dmPLTXrP2hx2p31",
  "key47": "eUmH6HWKEP3Dpw3siCYb3gZLMVzucbLnDCGPGDy7BcT6WPVr6PRz1mXcsv1sFQJpZ5bcrPT2rdN9f9tim9AK9va",
  "key48": "5NiBbxUTzAgkL4hsX9sWQaJsQ7xnmuZiYF3LiR7k2zZ3jb8DyTETrcxRDoCJxfmdWqmCMvJYMML4Exfg5rMiLE71",
  "key49": "5GxT3FiXTQNktNo7iZqM1sxPZ5Zewm2BbFUK6nDaKA13nHFzD2rG9zURewM5GVjQhhoCkhEDfi4Zxrz6WdqC9PJ4"
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
