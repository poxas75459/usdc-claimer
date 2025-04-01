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
    "KKCN2Gak2B9oJJamqaN9fq57gB4V6hWasZr49Nhcwaeu8KPhbDSdr6azYzVeFWrLAJDTa16NuNRbvfpn8ezCUzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7Uak1fukMzAzVLD6pfVHCmrG5XkQ75E3s1JkvLJoAWkKjtYZXyc86E42bbEF6RPtchMo8MHNKA88n5ZQ6nHEUp",
  "key1": "2Av6cFDRg7j7Qo14Fo44Ypno5MgCU4Qejm8n1eeT2zGJ6y4K5LLqvpB9t1HchT5DdkCcyqQ9hHDzFuR1g7z4y8M4",
  "key2": "5w8a3yKHwdaVB4VratAUJR8Mm6Rz64YtRefWSbBbKYFDnLhhPUQ4R6WZn15Z3JhsJpp4do3zkJgs8s1nBNBcibr4",
  "key3": "4Q6xMRoyMt83xhBFjJEZQFte9FQQ7MEjkC9LHu2HrHv8L22pz9YfbiPECLnKi4jrWygCsfNGbBq4TYYsBvicZbsg",
  "key4": "5eRpwGp113g8kJ2VNqspK465J1YWRcNT12gkJCJKgNazuijD2m35PJJQHajVHzArKaApVshsixfAVPMcDh4T52XB",
  "key5": "5i374zMVGuAS1CWPsAF2G7CTUv3GvwjkDkuSjw5vbCmmz4DrWA6U7mTt8pnHn6iLBiVPoT7XGCQByNGshJsoWEuX",
  "key6": "5b6zD4JwuKV1j7sW8GmsU5SDsArbDHEQ4NJCDZJPc4SwAuns8M1Wo74u8QxVFfUUVArKchVwEciXGBmoegWmVXRw",
  "key7": "2KpYnJxW8SY8sertN6FB2JeodFokuzRMQuvWJD8TQNUqECmbUsR4rNPand1rPodPoPmJwwBEtRGV61QQewxifKZP",
  "key8": "5iKX1MpGdhQ94Dbz7ra3UQaSa5bH45Ms47mQrZLRugHgouMjQj9ZJsQMvbgmuT1seMBLFLV6riRCwt85HjbxTvLT",
  "key9": "42MQ5Y7hinQts6C7sHxsQYhUUCcnnLVVVKoV8RU3vohoAhdMpAh16L6BcEyqfssCpS7pLbbQSkcGB5WaD67ShceS",
  "key10": "4psrS4VVqSXHQgdhhgncZnsf1LSRYgUfhb47E6aHTL2oyYZAoNYAPcxSwMQ5Z12P8BzyDi2R1Q7nV8bpnXoRuVbz",
  "key11": "YuC4otDNsxerBGWuJzAuNrDYMStSbuNN9LTxbEuihiGdq4Nr8UXsXfA24ce61sAXNujiCMTus9rPa58zfKb8Qjx",
  "key12": "5wNNpfRk7Vv5RHyd6J1ybrowpanWbDvrdpLRjbLpL81Gjzkn2dRqXgZHATS9UxmUhkQP6TqyHP9rE2DDTr6zFkK9",
  "key13": "4KRxWFAQmtXEPypsrAtwD7jtjhP1zBKDdTbawpy2Ndae6edXW3cSwqwiYKimQQCqddo3S6UUP6GrD6t4FCLqAU1h",
  "key14": "32Pm5AFijyjTXRWkdEJ967yF1i4GgNwdGPKWMMrcAKeFu38WPNm1cUfCfUkwfmqNpkCkydv3Y93svgktZG3pswLL",
  "key15": "3KFWierhcTzHZNPZ5gfwdWVSg9KAhMh7x76xQvbV4EzDGSUdLpP8Xo2iapSko5GoyexAzwr53HBuATJ76ewpRaeB",
  "key16": "2xnTefpTePh5BhMuUHyDZvWAVXzNXvhcqK1ZKHDddMf9xUEwe9VDf2qjvE7uXVnm3fbYu1mcKWFmAGFdMkfWGioZ",
  "key17": "4jVrW4mgxhEitYqK26fMB2mNgXDpAozZ1K6j2BoaAGbs3WpCXKNdkc1M4jY9hY6nWCpLqoFEfHHzBwZzNigu1yFj",
  "key18": "3wVdv9qxWrnQ2BjbVpnEDtyVKM8Hd2dcZaj5H6NDjiaVNMs96ivRQggkqJL1FZ1y2773AsCtYzZeoEtuKjBKbHhc",
  "key19": "RrouToLbYgZGQF2ZcyRNXD29XTYmnHut4xpUEiricxR7LG7cerpLevvAVsY4BK4VXzRavGwCxPodX12Gk2oxnHV",
  "key20": "2vbs21RDLQaTCwqKMdNPVwBtQk23GGohFaPPQKW8mtiHLkWTrs5ATcjXi2wTbztNH2Uc2yQfHjGqwyQkHb6QRbve",
  "key21": "4ybCukzbvB83RWXopwYk4Dy9nKgHW1DC5WH5EJBnQfy6M6SwjPC5fEkQcqfPyYFHtPi49QESdNepyf4a9a9W8puT",
  "key22": "5rgF7bS9tXDwE2BArgZ3GEyALh2Ua4GcQJExt4zG93JAU7m8eg7CZCCMgnC4B4mRGuP639af2ow6nXGPm3ZMa9u8",
  "key23": "4cv47ar9vX3hukVZdm1Zmt7QzhTGgjEgBw2HFmWe4iaj9WuZZYX1vZDADR6YuxyDnVcknu5DHgA3F3b8ctmDbdSw",
  "key24": "3YDwf5R2qZWPCbgdnCHbtfay3ZnwZksVspCpuuJhTnjBxkJsiUFkJ234yoTV8SNfUBaCCFTvDrZAzyGf6oEsNN9E",
  "key25": "3TTXy3kT4e7GmTs9JNmmtfoDqNghediArEcddgWndohEbsSbx4hLZ5Jc3AMaKNMepeZje8H5VxMpS87EfuDxQyXu",
  "key26": "59skpJE8JrcSidN9rGfCCojGPfd4tZz4cjy1u34YyK6ngPgkNFW7zThkHFdwhzk5hQTsDFbtw7JiW3vtbAjQYGhn",
  "key27": "UUWuVL2ttj4wM4D3cPvu84DcKk92p6eDEEJBSd3pDXmLLNo6YcsnkGMyzVZdZ4zituFADRCb3ZL3CtXkDaDNxbe",
  "key28": "5VjJsx4wNL4s38SYfgXnKS82KU8UhuvraiNcbwseRaQ7XY3ApjkazxPfcbJKGj1guVCPDXpBLErmFnCniFx8x9aQ",
  "key29": "3tx2Bm3MmgBV1HkjBpNrAKuzDraCLDUyAvwX3X8f4TbhLuBKU2LPLfABvPyiiGEwN8WwckJs5MwSvyG5KfbLfWMj",
  "key30": "R3z7X5Mr2zGbR7qDaNzwetgWFWYkGKsUkvd8N5ua3uGyvJnC9AzzRPzevYgBoPwhVpx5jnS2yysnWrLCixzXWuj",
  "key31": "2UY4U6CuthSiBYb6CTSmoP2MTUi8ac2WH1ZEeyYFrkXDs53RfB7CighFmfQJGdh39eb35Brz9raFqQkGX9dxmHi9",
  "key32": "5Ejrw4zZaaVftTjDTLUHkSZ4NZGocqKzeXSh9xf7RGazpZrhHorS5Pt5Wz6xfoT8SNunYXpzdpmfqwk1RcX65bFr",
  "key33": "h1XuFgM9j6S8L96vYZTUsSpJFNRYQbqsvVDnmtvwqVbHC2mxa96tSULd1wXeVJ3SBypq2UDewAZh6egqxQWNHgc",
  "key34": "2W4wpyshXGftdizgGuWbdsBUW8sJR6LPLhx26pdRRdnkKDTjmi5BZi7cLf2GJrxBNMLJdFm3s2T3Tb5k8fjvBNkb",
  "key35": "5u31pNAdoB8o97tztmydmiyhcJTtwwByhfvoahP1NCFcN2QiPNjC5m73xAvCv9zZbMaiHkBZLrYRNGHXdhDzFSs3",
  "key36": "5WafkMEWh6aeeaqHmUjsbsCeVaxyXCS5H1CpNVXPXAuDdD4vstBPSJ5JF422HYfDnBkiWQ5R6CTwneuQf9J9jCQ6",
  "key37": "4tciaDG4BUFXLquQt6JaB3LYjtdaGi93n7PzBrzzgPY4pQFwY7Yu3CB4QnTCw9Kzj2rA6tQogVJDh2zD3tTyaz69",
  "key38": "3NDfTe7bxM4wEfNwD6m5VLXYh7eKJWXa328B9foBwQaZVnSafSRQrkjwSbKT7rcd1WFEJGaR2q6BWtVXkjt4y4RZ",
  "key39": "43WLDYzhhZUYAtBLPF4usennEGJezZSoLEajX8fS9DxLNm4dkfcqHrwBELg2dszJxbhbMJJMnwcTg1qKMsjcr2W5",
  "key40": "3qphG79oTnPArYpzok6BV81CAv9JZ6VMXimgo9eCaDiTSynAvHjADzZk4qSQfF9iL2AxjNPMYNybPDYv418jrzPr",
  "key41": "2zL18fJ69ddnafaAGEAoGkwPnKEUDQBoAZm8CwFBXMVynut69CKiYRD14fGZdKNnyWq2nu2gSNbYLhynLJwwZKHx",
  "key42": "4CWHFXdAwfRx88uYGFePFD6MW8cpgb143MXxQfZF8UsCtgUpkPqwvfU61Fxenj7EBhGiie73GFuxZX5u5w5EmFu7",
  "key43": "4BMewrztMNvrtMiBXSSQNNLrw6PejQh37bkRiJGWAZmuyZJjBeXZDoD4FiutvKhV2BaSQBkTUKZNstnAj4ej3kZD",
  "key44": "5EzpEF7nbJx5UcXyhPo5rA8X9GWbgKtaprm74pXm2xifqsdQR9DYa9RohDi5YrssRyHAkdxHnz2K4huxhVfvsG2j",
  "key45": "2aQWEmdStEVbc4fV7aDPVvD5KPQnfvpkzqHyiPYeRzS2Vdarix3hJBvfhatsYDT1MfLjjJgnVsjryGFNCvwZuwNt"
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
