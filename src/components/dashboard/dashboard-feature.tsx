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
    "2UJkUyuByBsebB8choKMCnEgo2KTcaNkgh8a9aHagasVLYsVGkV1Em7hTN57Hf4apqehpA3HGiCVMAowyUmfTCxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSHpaRhf7PBxtGYh8jaFDky8dkYVWgDJ7x7ckobcidJb1N2uPHCdmPHUjr2tWCbpc6ph2ivuapym2vqsLJLZG4C",
  "key1": "2ALBQuJXtRTMk2wdXPtmMkA7UedBna3D97Udt8yH8zsxyhEnFQzAF4QLHp7qdP8ehVyPpdYv8ejmy9YGwAw9f4BY",
  "key2": "4uLR4DgJQBWfeYL3qXFEwxbHj4HY6wxbJjDpF89t4DFt5hkLWrX1TYRKmjjtByaxk2tr16ZBpkU1icjH7F4UgDZu",
  "key3": "3Qxz89ahw6WDXEzsMzNP5pak3qunU6E2gFiqg6VtSmwDsF6dZcLxT1NBz26i3qVtKcPkYetCAUwWg1L1Wup8Dsof",
  "key4": "32gMhDXikk2A6CroSCT6sd6yxRxRtAV8FjZ2k2VDKQ1gUXuhsZENE9xHKpz8mTv8tBg3yLB4ru5BSHdL1nh57XVh",
  "key5": "5GqhD5iBH5ZhKr76GDynEm714twF6rEnYaNysApjAciWtfcgXVLZUAb53V4V9ouFoxCF8M678qUZjyHRB3wmPePw",
  "key6": "uuzzxkaVXHT9KN7HQ1KLNyPhGK3c2zEWqYD4yNUREPJpH3cmAmPk9R7SacdyfCtT8VB3N4vnFS5QQziTHwiRck3",
  "key7": "J1gh4RwEiwNVugDe4cMaohnL4fHByjrycYsdfcADxEdXXURvp7gSXbaArhT7oKWyKXfqQdiLtGrjy6As72pfoUj",
  "key8": "65A66cwmjGfh6ke2czRJMy9tyvgnDyW6RE5d5htLET1zVezMFwEioanatQhTpPX4Lhmguayx7cNR8xMTrLn9N7A8",
  "key9": "2QabKN8wHVdhCiApuJwH6FXEoHu4Jbp3XotrBKb25YSAWhRMAnHw9RJR83Ej2wDRxsgkvd5m6Tse3YtPHp2vVp1n",
  "key10": "5NhaUZeiYkwFKyyH68qX7pJ6NRtf99k5yu5gMXH1C4nQucDJdUcAjuyBika688bd5yp9utSNjeWarAR4ofQN2aov",
  "key11": "5eyhwD9LTLaNuBfHtPgnJnvN3BQStQtCWSPrgt16H63Sz6gZYuakHiFnsxNt7hBNBxToTCBqSgMhgVBYh1YVH59T",
  "key12": "RoArNVg5jEaexZu3wozC4NeZiG8njfqmeDhd1xaAfkwREfsVsnnf3xwH5KLCUfM8e9yfoaQepJsWaYPrwHLvAVD",
  "key13": "2z6Ci7RdnSgNp8wkmnipYM5GbVrpZLHwZ3jsTdzhBSGByja3BanAws5iFQA9G1j6gDtNY4mekRSPqCmWwmy8WPkk",
  "key14": "5VGsRKrofKfcYVhRTaWKaJWJS1AXnrZ35fUki7HCX5DfDY3VqXV1jmSNKcYfktLZXAaoK3MgnDJ3AkUoQjkzE9EZ",
  "key15": "sx1qJpxCiBZLmPuZhEekGMUm9ViyBzzdAvhHJXFaVqdG7WywLwNzU9f2YKunBj5xcGpbfecbzQ33rxQRJ267asF",
  "key16": "4t4S8ME22Ye11f38SvGhE27VifwZ3sZtyysXEhf3mHC63MEVwnsUsAx87wGzJmMsLZpaKdyGExGXs2aFEEcPB54Y",
  "key17": "zxGauk1yHByfvHbuY6bM8J9zjhRXTeGiLNBpqqNHsgTLL2q14BAFHZNey6Ujk3sKBBs6F8sM4QCqvijgp9sTDGZ",
  "key18": "1PXeA58WduWqNqsikkxxwc3krZQgfwmcWdQxkrKsGos27vrCUPNT1534XSHUDDv4RUm3bq7dCPaFGrpbEqdx1uM",
  "key19": "VytfoixHqQgHXmHJQRU3VaWT7RNMiGS9s7meYQgAHHkdnfNr76GUMiJiDwYLkFpxk1T1CX849XJxVzedeQ9dEKT",
  "key20": "41a85ArHAn9hfpuWc3ocHXKhAgnexmhvPaGGDtmVqAD9Vbru6EWP4Cizfy6EAUC1S1Fm76hgVh8hbEeKvuY6pUoV",
  "key21": "3CT9eY88hZCT94iXCCEczbu69gJMrF4VFL8MdHUJgHwEJGueMdoGmkh9DRYPYiQUkkSPMSZZEVDZkcgv7NaoEtCD",
  "key22": "5Uey5n6kqGHSFdvxdDVznXf9jcDGBnTSvFgjWdoa1p5RmbQVcZMPFvEajwjoQ29Y5k2WeSCZgcSur17ekGYgDetf",
  "key23": "Ek1WDoKocKTghUU8Sg7TwSJfpTk8H6SaADqmtyuoGwqRdNzeMKLNg4qGhqy2YawxF7ehJP5b7doDcMB2CJ6GiNA",
  "key24": "EtsfDJA6r6QqCU6iXwQTnK4nm6urAWCEtE4oPzSE8ZUsQoSDpazVjePQo9e69kcoXrRXQ6HhrzKcEW2oKPGtAc1",
  "key25": "4pUmqrRR2Bcr7EBVG9hK1y3112azzh2wQMsrJSEaByU58Vv6icfsFPrnPQKnjkGCDWJePc8nLpMfzaQfosYUbjmf",
  "key26": "4tQMKyPWq4RDGRzn5aAb66atxRXma9FZrZgr4SM2j2yjcvHpb56P1177dUyNFgau4BzK3h9qpAkcEYy8rVJukft5",
  "key27": "SyDa1v8o4BckszGK3BpbfmRnkGexWC4BwxEM8jKqS62nBKmuqvHLdA1ifzNCTBN8qP5NCxEqMNs4KFqPrcVczuW",
  "key28": "3v3fBgMj9JTff5udZgSdhFN8recZjKTLs1Kj4yUpiMdpdPa2swQU1x3HFGjUvB4VqjFvk2FVGxecmzFnfSoo2Q44",
  "key29": "35RwECqxE39ZaS4ajxW454iNv3Hn3XJfGmBpHhuACwWhts6CW63MsCjtDAeZ1oQTZpuFBDUf9eWjWxaVb5VBqVx4",
  "key30": "3gYzqjZE3sGAXaXpUhMu31j5seDWQT2idQh3jMDA1KR7inMtVw9B2osyyh4KmysDqubaykbZP6gsTFHs12Xj2wT6",
  "key31": "bK8Wciwd34FdhDiL3QvoEHxLk2jrix42j3xBsXFTZghsWj4XQoiUpZBBUvnxqMF4s77YvfGTjBvssPUkPTaFL6q",
  "key32": "bPxng9gie41ZjyfzQLgZ2fqCUT7vKcPkQMobYrXgeVYSy8F78tDei1aGgKgmsD4Edm8BNzSe2pFvnANJxevg35B",
  "key33": "2kzgaZMFMPBZ8twf2zZstqspKi3gkAfhcA8DSGBYTjE8p5nXvxKKh28PxugyFqL9sCNC7XZ3wVHnTdykac65SS64",
  "key34": "4iWB86XwAkHWtx715ZW2keJ881vw3cwdjr8T393hVz8sUM1jtPJ81FRHBpK9wsWnEakFW2X5kYX3KJ3SEfEMiXMp",
  "key35": "rTWxYDdXpRk7AHsiyB5Xc2wCLqRa4zee1wVyQ7RitUjDcHtMwNCB4NfNqDD8GNn8Xnif6o5iT2eCzRT3khKNDvi",
  "key36": "5mSRgT8a76eF1qqnbFLWQ2RogwneGZsjS825T3yH9vQ3wTcZm3nLEfbqVagteNevsWw98beGDTz7aAGTJsZ5XjRz",
  "key37": "GzAp8XDxFfV6BcgpRHUkRGYSBHtXEHdJfespQFn8yCvn43ba2C6XS7g8DNA7bfVPVfzs62pbwp51T9rwbp8Usdn",
  "key38": "5iDB968JsH4wc9FfSfsz94HmnFv3daqwrDrAGZbB1q2JKQrAeZYgthnR6uDAJC484yqyWhA2veWDpw3RDztT4ati",
  "key39": "5FfeTQvnPtn5rwuC8xhJ741Pbb8F9wgZJR3fQofCQrvtaWzRByJQG1mJPiFLvuRyyppdtoHANwF4DMw6WkQakhwy",
  "key40": "bZ4g16FaZ2k52yvUhVay3GThDyf8uFJndmdshmiU9y2ATU88kYV4Ww3r32K5oQvK5skHGLFPHsWiJPTymoq1QKr",
  "key41": "bajE63veN43Q6EoCDfUowDf2kEJSyefVqsc82NXYJAnnozddGtv5YEVXbJ91eZRGUF1JimqyaJaJM3BSTPNHRUr",
  "key42": "9UKYNATjv8PNnTLmn9tyhyU6BJ19Ckhv3ct9HvbgsMdLBZj2D6HCWKCLLiuLigwHAYQgJgih94z1u9b7vuCuXHg",
  "key43": "3NDKkAC3onmJJAPs46xkoFGTxqCbZS3Rh4PP3mpQomANQnGKkXMUvqeboDqU8YGHyM492LoMm62bVAv3bAkE8xKw",
  "key44": "4zd6R6FLKfpMcMmydxcDE4obcXqBCpT6rtMh1t8DDnLL7wdvKpfyKHsg7Z5kGimL5Jpb7Vqo6zd2sw8wzag5aPWn",
  "key45": "5dJbY2cjeQnbhtCZ7Hp1pibLC546xsP88inmvnLmrDVEbLeqXhgSFCDbkD2LEM6jx4FrDEK8owCQLNfYdiYiA6iG",
  "key46": "2NnLage8EaPkGLiBWgQT9yXF4x1p6dMBMU6w8aaUo3RoTC2wTno3tWoTihe7hDwpRgbGQcLmZNvhaPMqvbeSqoNV",
  "key47": "jUa99L4iWMYeuFpN7eKcn1upyGTWNd2iGwJBY1G95WR5BUi8L9EUDEZipumfsQDTEhxx5KDBsRWSdFSsHjVJbJc",
  "key48": "2ARqoqqiPv2Tkkqo2cou18yMbTb8PLUk6QfjTT5cfBB1eMSnriFwWKqxBeeiHxzqaJXhG1E4ZkgG61RXu1PMJzBN"
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
