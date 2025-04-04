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
    "21tZs1YWHoV5JC8H5Q2awHuw8QEa6wjHyRc64xFeq4g5K7BJpfrysySejoxS7SEdXf83smbxXKRL1RV5gZrgfp1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ooCTqVpLh1pXoLFLYUXiyHMeaxmGbejBQajJGKjr29PCxV975LLrSx56Kdk1ifb1A9q4ZW8RXEs4V51eMo3zKbA",
  "key1": "5e4gehqRFcANZ7Tq9xB1wy8zFG976dJG1RuppiwpBN24MdUiTTyp9wpA6twZSuL9vkMTfXDnN8A39msQhGHbNfvC",
  "key2": "3jK3b5bVmivUytPYf5WYoiSgRuXtBFBjrtiuQ5mKafACoWBVb9QDYgdaa5wXAdvw8WyfwjuLQLnGcXVjNQoRbgoK",
  "key3": "3acQm7jtTrtxqNwmT1US2Z262yKu2PFi6cKtCWueb9thm99w1ZkH3C3EvHoPYkAB8dAApWoFiQShPzxnY96oMKik",
  "key4": "3z8rhJB2Xk3zFf1uPfyAbWQE7nivsfsz9FVnh34ht7UUxer8ote8LNQn98pYxo1fJd7jAQRWSzsmjLqio6GPgZLm",
  "key5": "2SyDz5ZRQPaD2JnFajSGzzgDj7vquqNHLYRh2FQWHG1HaurCfgH2gRB7b9CymNZy9PX2svMZg9TzWjSeXiBrsaaE",
  "key6": "2WULRZvn4rHZ1CQ8v3mnawtuKrfhq9qVf8z4Kziu1XgTjegw6jtX6xwp3NCv7CYwdxY8DUrUJCgTHwQBX8YHdg47",
  "key7": "hHHG88qZENajM3qMs5f7c9zwQhhM1zYqC2L4R8vgzJEhb9cDEKnjMrRqhKPCQjvzRDfZsx9Pzm22rAF93YJF8Um",
  "key8": "5vQs9wdQoCwvWt344GcLo36n3mbg4mqDSmXHTeNFGsvpNKzEQhXUTHxMaUAJMTuEPJ1AtHvwjVLSNWAYs4bbMrha",
  "key9": "wiJexYy69S8ADJzrG2xZw38EtHwT8B1JpPxcCHxc1QoXtBaRs4daDTsv7spy1RwLoUpSnCiLqW5zLDrZxbRE8Mg",
  "key10": "2QRvX1NWc8BJ6J8DfBoyctCXaL7xjjtQY4RDP61QpMJ1EGaZZwZseCxcT1Fg1EcbSzqfECgyEBpjknumUMPrdubJ",
  "key11": "4VjUv3y3RAgwdPCRfJpB2hFVt4Sq5xP7a1YyQLuPLnK2d9cPrJ4x4hU6YH6ZQ7kfrx6yo6arSyFEHtLCLdPoJdS7",
  "key12": "4Mvtiaf3wATgYFqjfbsqj3iyQHRrPLRi4K5sCfgTLZqxiNDC451rE8iqQ9u26A1zWMVZA51yqMvLxnrLrak7f9VZ",
  "key13": "5722D2xr9hECcMWrRqXKLGQfmjMy5Vympv2xm3BXauPEahKMFWbst3PVMLRsN83b6W4itijT3HQzYfz2UdJRme6V",
  "key14": "2h81LD7bYZzieRfGXikdHmFkUBWHva2eTNuaCDDxQDAsLhwhdoof3psK3d6JcDmdvbYA6pjxxYdYMS5R3ajwbHHA",
  "key15": "4ErPaziNfBPekHgVB33aWSSXkmM3E7y2MV98vPnAmZytWcPsKkvxV7hkYzMe8mdWsvUuMCwvPhPyGT3ViLgsvjaY",
  "key16": "4fDbGJ7fbM1z2ThpezaMRQkSDTc9bs2gkjbzECcb2DFuX7RbnCHx6wxqniPZSnuQkJyNyfS66G8mSaftde1Jh1Ex",
  "key17": "25FdT2LmRUA7bv9RDVBR4VXmTe6utpWuJb53j2K2cF7gW5ZTW1VZL6Dvr67tfueYVimTxvNtPmoNvLmJ45uXLN4z",
  "key18": "GoUDopsxystGwwHrSjDsNv2JuhHeAbpVZy9B1WFymSZaecGtECWU8ze5te6KSbsg93x7mNrE5Sj9472yyC6Zdbn",
  "key19": "SkMU2yewzynewbEsbMC2jLMAqiHg8BFPvFjmA7QtYfK7hUmvgaz3VWw1rGqFvbGW7HqkJm4BAVAR3nqNrJdSLuq",
  "key20": "vNKAmuGs8ea5QQwW9VBayfhHcfCceKvTqeAtqUdhE6k4yq5vd9eXXkPhZL3Wbhp6gY3XAbkCurx4unDeNnQmETV",
  "key21": "j6TxsTsWHtu91r11YconqxT9KjvKMhizQJq5waWN8X8EVv21yvN5FJDNGBbGGXRAZmYVUpVC3wWixQSzaNZ1iK5",
  "key22": "frbxvJ6y6udDqftcMjV39qeX1DjgQ7NPyAdeHvPabbQKmWX2bn3YghTczXuzyH3BAHsKMQZwLPrSk3ow4mN33FL",
  "key23": "4wtswVGJ1Xw9cG819hPXoYs29Xovi2oqpSah88C6j5H1TaADrpNDfD79cgzNvKLeQYVtsJaag4gy22Bx8bgsFtBr",
  "key24": "4h6NVBRZb6hHfkxmcaSgN82GY6TSsQckUdzo7pRxpHYjKT8mKN6aRnJSD8zQxYCMsUydDCdfSR299rnnDF8HTi5s",
  "key25": "VF1fu2h1fwxQEFzJkScPr3JcZmu391HhLT4BsyiQU8pfWDKgXHRL2wskJ78L4atj28yRdu2cN6hq82LhBUnCepf",
  "key26": "5dchz35ZMrJJrECWAYs2uA6TWKMwoaXwMFD69MwtxcXBpXs4XzdNnbrq9ZxRNnifWzvBVfFsQjfXBTeGUCKStvk2",
  "key27": "2YXW2Q4k69ggL7bDf73PvGVVQsxNbPVvsaTDK2agJQNvHDYyLEprB7NwaTnLtWXRpb3zTffuDaoHBHXxpJGwKfT1",
  "key28": "4SWEcS9JetNzLLG5zedcJKFuYy332hfWRZpTxxGGi2xGfZGHvXtJRtfZzrViEQyt3MgdBy1q8CVA4Q7PUYHt8KdA",
  "key29": "Fq48u9E5AnvhjEtYA5nUN3qJCXecDd1edq4BRfNoKZnGdYbcfq59fdGk7H8YRgGsuanXyqdcSvSzTvE3cioH4yn",
  "key30": "2iPtQ6e9tv12mpUcoU3sqdvaJJKZQCWry6Ys13nQg5inFTWTqHuTGsM5595DgjbbqwuH8KtML7Np4WyAjPPwY3eV",
  "key31": "2Wffy1BoCD3hh9ELMBNWNMdiX4SVjZh4tDeCzNtHktATqvSyoCLSVz6WqEQCiiAx4zyqmJXtMkTc1kCTkp1jgS7D",
  "key32": "t53U8pASNpDZiKN9n7gUFQfa2zois5vPRn8Ms1M79DfwhvQsPgNw3qPTvFj26N4KHMgTkgg1tvjc2K7P3Xtzit4",
  "key33": "4Fcb2Z2qAsBd6D3uzvR5YGqa1ouP967refv1wseMZ7CZ9QihQsrFb1BvyEYJfHb4T9QN66JSbQjeBz4xhSt5aftb",
  "key34": "3zpxPejfFkLpLpsLvZ5gXWccDwEzPCFkPn4wErwLWFjCLciSzLLWFsRnmFwQCaLsNDXWXBzG5EHSVxoq9FnvdXpz",
  "key35": "2FP2DWgXhcvcKE7YptvHMi5XZoWsTc67ee7t5FohMnQLKb9C1uutqT2tdAEhH91BfB9TwncH6zTodyix8hKEn8x4",
  "key36": "3btzWFL7dQppNHgbsMSiXtiKuPhmvaprWsm9siCPpKyZmLEXa8oCYBLVTHmooMEPFXqMX96fmXab4zefbNhn3ZwA",
  "key37": "5bqWW1LoMheKQ2zMqg2i6GqzCsjKn2cKvE5rBDnvp4bYnai3UX14dWDFxXE3d3YSuDpRLdrP5tmtFN7Jns8wPWwh",
  "key38": "3jF4ZDfsHiPpJewwFUidxUSVnKLem6wpzstr4YpgasGpFXk9V93zmeZKx52fDJDYRtM5Lma5ZXYmqzDgJB2rvVeR",
  "key39": "3UZX5T6Qz1C4rxdkV94C45asqcFPzP47XJZL5tpdP92R3HHreSJysxBjLTivDEEoHw46MM59LFf25Ac6ph3ZTZuC",
  "key40": "2sPnvfhPzdJBkx9ZYipq7z8FNwheqNWPLz24LFKjENk5iFSPPzRNNtPaMsywPRZ8gq3CSF87GCPNPRwCgy8qX8kF",
  "key41": "5yVfTtzUcqZaQGj5QQVZQLWVYRQ9qv2DBYVmwUc4gQTDeavqZaFBXBdehETGfcU5LTiNkcKLQfVKD1pMicQK2Vfo",
  "key42": "5TJe2nZ62HyYPK2LKAz27BX67PhzQwBQLDiVCGuGPgVhqVvEFiCMKytHaMZNzd1VEqsB2hFzwSTmE5CPAZqfaHM7"
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
