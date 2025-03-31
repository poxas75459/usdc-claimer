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
    "2waM5ygbXvtRbHRWgLvByvwUYG92XvfMwTuWBf2TzCwH6X83uw2n71SUUquoPGdguRMTkvGapWgBKkUP26bZmDMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCpYBLDQKQAwvkQeFtwPouPhSfGdvLHvVRnsYmDQP7GLqKo78h69yuQcrNdvVSQLvSG6L1LLMoufgHQtHN7M97h",
  "key1": "5oSEJ6NZwVurzXRJudaRQXgn64buCgZZyjDniSN9qwxD7wknwUhPUALkeqYwjQyZqGMcKwfY7kKFhEtribC1XgW",
  "key2": "4zCnxZrCGGMzPbHz7iTAtJUNYjkGZSXq15TvTqjopmrSJtiUZQaRehkESHSu2xP716Xj3JT6y5mAx2oJTV1cTjm1",
  "key3": "39QjEAt6ANHXvgB6MbCxNH6pcvWuWzSK9xsLJL98EoqZQxHjdoZUSZNhN7WKWfwGviYxfFUD7VE18GADLhFirBiF",
  "key4": "ctp4M5uSjhDpHUeWyukbco37zawtQugkFuXc9YpZyVs3FzBNa2Jz5LfCFzWd2nm1RBJynWiJ6azzPgcs87vheAQ",
  "key5": "wZQw1EcAsHXzQktM53835Q1wNXLqAAg8NDkBKHcNffaCyz3ETeVq3vMBNh9a7Lr4DAzy6GoNFP2eoxg28iezyHN",
  "key6": "48gGDzrpRd1rNEjZ2bYzu7642XEiY2AgeoyF82iGpMs5JiTKcxYkSygEiSwaVUhQZbaYjy9hoKaN7mbP9KpVogtf",
  "key7": "5ZANpCEgPzCBuipiNuamPcAihMFaFRGEQodgWhH3psFd633znJrgGFu41X8Nn9ro81k2ZvzXsnamTKCvB84nc7bc",
  "key8": "5Rf78SqeKuxS8mfe53tL3ftfrpXFKz5USC2BFR2XHx7SiEJFPc8Js1KBNHvaktaf4yFVMgU2EjsUW9dGoGY5N3xu",
  "key9": "65qQfZYA3tqDVY8NWGMYoQgkrbL8GjKpWmzw6R1PEEaGepwmtLpujauSrqXgveDiUGLdjGdMxm3dS7JMGNNjUSVy",
  "key10": "3NXhovPacDC9KVsSb22sT1yE6fSYsdQaQ5nHndvG3FdAmS3axcL1V4goqpkLbwgiMRwpURcLtwEs3Nhzr1hVDkry",
  "key11": "5NHVQeSa97BDVanj9mtmNWkkLzwqSJswHaJ3QMGMLL87tZC7VDVbsPJXWgDLnAf4a78wy8eQxJ2QShJ5VQPHRrb9",
  "key12": "Nobt566hxNNuMRHEyQCzEXUp6LedbsGNd9bCCRuzY33KQE5KuudqmGnxYkuXdgaWAh82PMJBQz5Su5RHTYxULNz",
  "key13": "2DyuNGXpLFQ43xThtZZXbuyrLrHRz4EyfYmfj8XmsMdp5G7KwnrrtvtxR5wmNyUEJboFfFkeCsAKmnEUgb5vrevh",
  "key14": "xvkuNcV7o9MZcU1pip9owEbvsJAAPCBa5rwR2NK3FYJoqF8pbZJtHJEyQGj3HLqKPEtkihQDvejieajZgEaUjGn",
  "key15": "5BBV5ZmZPeqU99AAWJe9SoasNoLY2qrc58NnZvN8JneEqK1Um8GYynyGGfHpTiySmidfaGFDpHoBPetceakUygga",
  "key16": "3SmeyZNJkzkVvvCdRDKkQ6G4QLUpP9cgKmbysaY7BFxxyNSSadix6DXTWg2ZRUa3mZMWyBMtubvFz3DPDAMtJpVf",
  "key17": "2bmNFe5XWSqpUyU89GSjnTKLqmQTAk1qgdW7wKWZfLBc1AYMQWGtRYZsTHtqyx9B47qzDQHHPNjPnH9RHUV7DMcA",
  "key18": "4w2us2djkRQDNaNR1yY915ETpU6zdU8NSv4TT4DvK2UtV75LHbzEZDDM3iNV5t2LASV3fk7g4KV32QSTc9peJ65U",
  "key19": "N9Pq4cfufp8oonKTYDpzeWa8wXVtwSfNUPVMUHXkQCAEvJZoqjQgi1uALJ6WM5QWmNTjsxKRJRG5uRhcrDyZEwB",
  "key20": "5b6HNUYwrWVPVorxetk6osJezZCWcdPTpjeCFCW7ue8oEJpZ54pZWZ5qe56gYbTF5vwZ1jH9L3RB8fddZ8HFjYoJ",
  "key21": "39MweDsDSCBQsr5L7qGmNf1XYhwjC9QTMHSsxvpRrheBjakUiXqqR2hagy5qhvcdkvg7ATP6tHsWBk9tyEe9DrkW",
  "key22": "nmvvFPyNcTtnHTXWpt51CGCt4eszZadBDUAai96jKdZUNi6QcAaRrfs1KH2vk8SgAFFkxqhgAs5VqR6ynULMoyj",
  "key23": "7T6teFoET7CuE2oE5kQuWQkM8ZcgBH6v8YzUeFbduyjSny2EwBe4rizcb3BhbNCosPg9URydXwHuxuHUgGYM9DE",
  "key24": "2Y8tqfTGtHtq4WEm4Y5uakP3QGKHts5n9WZYAMgxUmqzMeHDfMZetyPLbvDyPkHXLzNr5iXnmCejxCm27m3D6Qki",
  "key25": "5EziEVqNP3JqkHkiPwxJL4hgjGUkPMKqQzoMtory58ZGuCAjVq36ubekTavTw9tciZH1qUwz2XdgcLiRpnj15exp",
  "key26": "4rM1RwVaFVEFMLsb4gZrMhjDVD9SMR1PhwK9YcVF8nrhHCqiSLXSXGkExRVSAi3vrSZArz8e3oBzViVXR2sEDUzW",
  "key27": "KPnr3FVZ9yjXuCj11BDDt1Ndg2ET4Ak8irFMAmhQr8fWfNW7FxCWzvzSCzVWhNDXfWyKxPUSC2qK772LR1hoVQp",
  "key28": "4qi1dzHWqEufT7g1qCEPeWskkR6QRTTSxGBytjxWixDm8sdfijTkrHpBB5H9kHwKde69zL9XbrEeG9WCpRnMgTQp",
  "key29": "28GisikZzPDEv3LEwhNsLxXsPMw8Lx8kC3zvARDJW2Piip3pzDjME7wiehckEtzgWFxFP9AVv9SM5hnH9NkH2M7M",
  "key30": "3UEc8DHQU7kFGq6VKH9t2WJMcWHuGPJ2JPB3o95SuFAQE1J9wADmudozmKjvKyTiYrKDUULwfLi4Z1eC4xvNTrPM",
  "key31": "5EUQpuUomnnnbYzigpXnNFdgkTQg9XRar2JWkLg5KdhX1MY3PQz4MrdQxbMcmRhMWs8hFkR8W86H3YffKjzZH3aA",
  "key32": "RQnpD1nuP4bKCU6YvzRGiEygDB1uKofBaSSSH8MToT7Ec64gxj5d33QZnsGkVc2gR5U3rFh3FdU2tYvaSrjtvbo",
  "key33": "2R4wNnaguG3H64fd32GHkAVkXXoQNKuswFoNPkLQcQdkRmMsarVwQMxa3oGfvp1MXpq8P4rsFJQKuLnoRim5do4t",
  "key34": "3G761BLyaaVSWAuUKfv2NajD9qsyCVS3zzinpKiMbMMX7guYdEh4SoMPoeZAp6hUaCk7Dj8QLqAv6X87AD1g7yA8",
  "key35": "npeh4TYbneUAeriMDk3Q6Sw4QksARN4bsUQmgjHUhVfjDWjU76AR1uyuBFvyZifjkfBrmwXReg1yhDKrxUda4hf",
  "key36": "5mHJNZQMfoCNDoVUSgo2W1hEmagsChzs6MTkQkcvyTjcx5RSmxeepXhACtMJfAF48XdoBrnFQd97bkurpFyHMK43",
  "key37": "5YTqDA1mmPsX7yrejgWwBv6TWgCEvAG71M4cmn4zZ87C6TYadBCFiSEUmcjMDaE91YVrvXXxHHDguBsAGZrLv5gP",
  "key38": "5hXt8LtBxQafqDiMHsr4qmG6VXtECmHiH7zaDb2d6zuW28CyED7wmciTMC5AhDXWRCo65do5gzeVJgX2rBmxNWSB",
  "key39": "3RkKCULqGBwA5XLnQwykedb4SBrQy1QmPC6UVRqcJiXz3y8vFvCfQ74qmBbXgeDYvKTWqxubv6aWWLr7URh9TBdu",
  "key40": "61fXPsNjR6hgureewbHLYT6J4QUEfPS3QGs8w7d1JeWxJEh2XgjkzkDdUX7CYWcr3wx6pv2gP4E5qDi8f2fDSK68",
  "key41": "CeTEKUa7HcM5SzkMGe2LitDahW4fvNNzsy9Tt7Cu3LG7k7ghHZwaHVohpUzHrn8L8AeUcKegfWC7WUMn6SttdZL",
  "key42": "Aw41qonWrTTVAtqW5YG54meqiDkEp7DFT2SYAobzKpMxeQW1H4dGQ2a1crd7RzfzgSmdxn9JvwgaTCBSx9rdpPZ",
  "key43": "5jKDcdyN6zm5Toxk5wuzwa1ETtRRS4wMWCw9hJNh87ut1FfmknZV8qc62JxCyEz9fHdc3gtAJUQZLgHSs9GrvZ6N",
  "key44": "DPaHVhXHogsqjTrSe3U91zE81EiRAhArPEWmtKSF73QYFWdManHrtbP53tj7HTy1Km1C3VMCoG9P1GiJpZn17Wz",
  "key45": "43JnGsS3BFTGhKkM3Hz4bTTgignjtx8t9K6BDbxSTCgZbwanxDnkBMFkdrJeHpiaodsjrG6xCAky7TfxWpwRsXNE",
  "key46": "57m1ejJJqPZidg4WAYxF1agkbKN1sXBKQk3yBkNaRvs8vvvxJH981qQERBqZKKgJWg8c4jQ4CDUbnrviJah57oEs",
  "key47": "4X3qumi8dEr5YzLQP1tW78kMS16h5dLzrvcb7NkVs6XeNo1SAJJdqVSmmxKHSYPcAxB72YcUT2Bt9NE1fczFDCRK",
  "key48": "jmefttPDXmnRZ6DTQ8SXbDu7ec37iSNRaRrocMzC1fXgybSHYEMUUVtzp2JG6ah5XF8NdL8K4PV6vwDcJbra6Pi"
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
