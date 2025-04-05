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
    "4jBUwcgLznqVwN2FUMdEBEUwBwUbPLm1gXAWywoXHktvc9YnvQ1MtBQNq45EhRovocwibARwyqNLxc3tJXfWXEiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdMAESAJckT9y6T2jzZnA8CQUTFBgGd45notnQMUpe2fBiXKnuJ8EeYn6FRGMTGwZdeoemnAF95qrDRwD1C3hbs",
  "key1": "59azyVhVanVwhEwWwz7ZnXhhtyyD4AUkbJq8Ra9axm6b9oZ9ysha4aXvdHFWzsmacBQbBFng9m3xYpW4Ey4M3fCU",
  "key2": "9LcknvKpLz12Z3svB3Uuh2XfcGbNNcu2kuV3Z9cM3BQhxPvRWMG2PpQGexrV4hkbWBqtJTRvDPyRUfESLxPnUTz",
  "key3": "9qhXp8zbaYZt8ae56WumfmbyfEPLiCjMTBX7Edm5b6fYthGEHR2jzStbF5xBFUnaCWYxW7QRotC6ykH2mi2b4cr",
  "key4": "5dHjEyopTz6Yi3vrBab9FNS9FUNrVcggxWDeFkijvZUU4U2HvaeGa9MBPd1qAAsEVwLGHc96uHhkQk2ifA2gkYj5",
  "key5": "51P5pk6s8hDkNCJvAGKqAGi2NYHmhFqRbwdxECPkLm7FkLy2nZaHDDNvYFRtv8upHdvUD47zKS4k9oKJSZm5YvbU",
  "key6": "3Vm75LQtaSRGEcbUUyJv1oUDkwcwRiRohsskjCQf4b2BHPEuU4hBiBh5sT3BuyM4cib6HKCkhti1RCuQAKekw7V2",
  "key7": "K6NBGn2g6pVfRQmDKSZE7ZVrdijoYXfiYrCoh8cS7xjoXk3J8k9rGkDbomp2e5KHBYxCW89X4z3476vYiftEbrU",
  "key8": "2jyt2k4RXAx4pZcMRLGmTzka9nvNf7G1oNHF82FLpginTsKhoWYdBdrZmo6K8E6fXzpnUxFv7fhx3xvAfHjZoTm3",
  "key9": "3ZHvMPuvVCrzfYtxdFbrmX5A1CNkAFKw7r8uG6PNwe3BAKGaEako3Lx4E3egsS9NoKhopEqH54zifRkveL41Rbms",
  "key10": "63YpxERQYz4pXPRpfVrwNQWp8YMHunZPiHBXgiFfbahWE9kpPN6s6mwqYW6wJofMTyn9znPjKn5UfrDbK8SgmmVe",
  "key11": "e5BHDF7FdPyVBLApLpNDNCC8wEz1keEwUNdrC4mSgmCDWPWrarhkKpS9TzYvyAZTtakJ3FVm3pWGp2VXj8efAFQ",
  "key12": "WDXyvtWUFyyiz497NdAhTdW5ndtUEPRANxjqMgWVFait1GsQjg2wiUiJz7zM3NXRkt4QK8rRqT6LvmDU1KP5Tr6",
  "key13": "4QdDo47P197BCq8Z71P1pK5LK3kV1sk9YFccEXFm4uDVsq2op4NearSXxagxfzixfrSkuTKTyhWiGVi1gX3cYmYE",
  "key14": "HJ5bZsR4782rA9WFhPvkL255smDueqnEsjRVrcFtsmMUhFKMTepTQZRJc2yyVted8wrK9wmzK6utksXm8EbKbgQ",
  "key15": "5kutVgGVHTboq6AMJvoEkwmrTMpZbjuZ9FMjDmCc4CZs4SYyuSAamzkH3PGEeHrE2Bk8q3FP4Pmv4hUXdCGYHJKX",
  "key16": "4osGRZT8TzR17oTkJ2ACweckzUZju2Uck6XUP34Up6EMTvoVKguVrSPXeiHdsFvDGSkqfYMbJeAwDpVHSXELdUou",
  "key17": "3YkuTrsFfsVS6jFans891RPu67BueMRtwC6jnQ2kj9ooVHYXK1KuZ6G6HUkGjpv1H2YsxKytdU2noFevC13Qs1kR",
  "key18": "3V9cb3LSnoBXwSarBCdvA8Q2mKKdndi7nB8MBfpF1gQUPbMqoQQfgq2iAwjLSxPiArA5DiV875tcKKxc7TGSenNB",
  "key19": "62beQGE7Kr66wyYjXEzp2JHTyrdJaCNUtvxpiMAR6JTXqHiec33xJXHDgMgCT4ji6d2FiPMMKLefrauhVr3STkP",
  "key20": "5NYzhCq3FcEM7HcD442rXevmGytbSXr98YtF8Rsxh5bq3xv2PXBdaTaMjM2L1kyxy8YEvcedqwaBKkbNMkBeqQ22",
  "key21": "3BgQmnSUaWT8Pxeh9XzhznRhWuvvFdPUkeNXk3zFTTsZa4we7EZXxvwW2YmrUxEbZLDEemDQqpM2PHwjVnVdFTjp",
  "key22": "2rPrSqk6cZ8zHKyuRdE8R25nZqdq3S3yJvjqKaPhDsGSAZrvqkbNR3WvAyM4Ahb98CUEM9TUoqhLmA4zfrKALRKS",
  "key23": "52UyRGKA17NwFmsk89qtBSCnoVbi5KrtK5n83Mf4HB7X5RAF3eSdoxtZCUP377QApTmhzvWMRf8d3p8n9DTYZMUc",
  "key24": "4bprHPDuMdUn1GqXwk7bSD1bBVWCZAzmd6V83TL52GCxeMAyLmtXkPt8rGozN4ejJi4L92Ga2XKA6LNSNsedunMK",
  "key25": "QWmMHBrATYgfmeEtmUa591ustUAzatjNmXuiBcTn8zPca1DGyeAPRprfW9mztkFSCqazA8TySLFWwH8GCNLQtu4",
  "key26": "2g2eDGYE2Mvrnc6WbDyMs9czotRRLnGskPixNdydwDdBdh17zyrwHH2g9k2amC5De8nktioCCqVqycuxHcXCSfSq",
  "key27": "2eu7vnBx1EVtMKeFAMaWLar1pwqNUqmrbBZDrxQ9eqGWpuscT3GqcsK9wAWh72ADJFwx6JgxZkeRaVTiinBShjgR",
  "key28": "5LMmqVmZSpbXH3ZaL3CFrB3o1nEG3UhW4ziq4Bob5mcxb2kLkJmxeFzRaR3uygrBAhL74RtZqjj1u6TkkS1kwbrP",
  "key29": "5GCdRwNbquGJHBhPw925wuQX4DtkG4GigeKHoEcE9tEpHMo6BHBxYWHaPjRQeVJkKJaCgnifhN1MKaHAtfV74bN8",
  "key30": "4XEx2xxgA6h34x7WJr1o5WghKWJ22tMQYokH7zoo5kjzeQrbcxwa3KNAD3z4sN4ovuL3CqR6CzHRwou64s483BJi",
  "key31": "34KrEa9vB5zaqD9C2K6mYNRqAJ33kMHuGT53faoi7X3vpBCGyiL63QLbVjQSbTqSPAVKM6XaDWFLSocQkTuRyPYD",
  "key32": "vgc1af7f79WUe8UmYxXmWPXP7rfym7uBxhFvGp2TV843uiR2UmwuJAqKKyPJ6jUrMBAZdPjge2m1CQzGYc8RuGF",
  "key33": "497qmCpJmhehF8ozVozqV3efpcEBKL9xiqwBcDbFKK1KDP7pNCMKmcB3yyfspsdnBYWLLhUZJnSLQ6psvwike2RF",
  "key34": "5D8a6QkwGN22kZv7fQ63GjbkyfCi6YgcBeBkH7NCiYvz5ndosKnbEAoEWB8yUHyCvYhPLFi32JzDKQSDHwjKbMJV",
  "key35": "5wz9wsK1FeXvWvn4sNgTZ3rx45gka32RqMrfHaCvD4VULvHUwMS5kKWhwZmw6vDBqz5B91Yj1UbnasxGugQiT23Q",
  "key36": "2ZByk8jTmr5ZTfSZyjttfbLgd41dedMm3nA2qVXoCDAN5JZ6NwpuJRP7ybNV4Z2a9Rnuodf7ABEABniyeDm1ucmf",
  "key37": "5FhrwRQMHYEWytPXFnhL4SbzmzS7iKAFNSVttiQ7gFAjk8xfwqCXqtKAsRTvWq2DqsfyFmD6uEW69qrGWuudzn32",
  "key38": "4tkmMZ1r2y7U28Fu7nehhJz7oxyc5ssWAzFwS33cJKEUnKrr8kEhGdJB92daeGjVUda4QEjmeca2MyzNFLfvf4Y8",
  "key39": "AjLKyfL8gJMuTCYxTunqD1f9escWbNDui1EHRADqFQcsAquy9kQMThCS4ZMSWCpWVvtoKR9Z9uUC6BVKN1PKvm7",
  "key40": "GFTJVVtt87GU89xjia5mg5HuM7EtVrTL4xb922xdMFRbwwv4w3pDUoKqLppeRExXBJb9Z86b7JyXpWvnv35WwBH",
  "key41": "26QMTZYSfJXnNi1GgjquFN8fxuJxi2TEh4fyeE3jE9nAcrd6pnCFQMekcgo15dArByFmnXCCtcbvon8p2bnjikxU",
  "key42": "3oQeQFMW8edErMCzu4NDLXu791pzVE4u1JbcXoSJuoccdRAWrBQdqsbdk4bDu23hKoXU2TQ18tyRfA6z3X7F54FK",
  "key43": "5UC83eE3NJdMe3Rg5XfCEJdb1TxqxviGjMa9vrnmdzzpjU1A4n2S3xqfMH6HUD1boXfrCq6hiCfnPMhxCVRC9QEh",
  "key44": "gbeZEkbthjKaUJM8X6Dwum2k8f5cKxZVqJ3hxr2Z5u5PweGGqfDJE4GUHjApKagMsh6bS1cxK5zdu2UuHxbzbBN"
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
