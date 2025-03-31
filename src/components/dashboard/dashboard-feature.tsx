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
    "Rn2pKXTYApNSzVzeRLuNWbufASeyG1R55QTtyf2PNYnmb1obY1axoZ3AYpdJANo25XJtb5Wum9956UKTNMd8dvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLcMdh2fzo4qarJr5CF2KWkumpwpksDbm4y54hwWY8CfUCd5F1aExRRMFJNVNbFspksP2g2LHA4vDNHJDRPPXKQ",
  "key1": "3Q8s86ncobwGWwkt2Qi1eP6xUee7X725rgAVsC3snS8vaLFmj8iadmCvdTP3hu2bYercSiDxGi7SvERg83tkayeD",
  "key2": "4bQuQP139RegNEkEAaFhfWXi8LErpx2k1k5nUoB5CmKgDCy6zrFxLJsGtgq1foQF8QzTMUnRXKbghMvsitvd74kg",
  "key3": "ZZwq6LU1ikWHXzbABbBz6tLepVqRabGqRNVffz7476zCjsBGFFC7C5VSLHJSeZg6qTNAo6i1bbvHrpbAmV3qBeK",
  "key4": "4BzCtXrY3oSFwsshaMNN7nSb4SfeNU164aGyQRzNxGsFJLUomse9TN4qwMaT9VnNSAECsf2TkFxukpjrztDbZJFU",
  "key5": "2KwKCkSM4Zkcp9UBs7mGVkmLkZ9tLdqzyZYSUwknVJ94cBKkY79SkHatsVYYSJL6c29yG1Qku4JomBRNcrNx3brk",
  "key6": "59EZgoxpwPJa2YZ2YoEJgaZNbHCnNnbnHF1voWvoyuuaAt4h6HxLPyKCNHd3sBmMQMYsDYiErXsbgb2Qdr2yixCK",
  "key7": "2oXsyD8TsTa54VpCkgB84uWCKsCb2s6adJ8mhaHhSqkpxgsnh2rfdScUMkPm6tgMEurgNMkPTKFtbPLrWmx573rT",
  "key8": "4wvTEs5NiAKVjQgzVKy195k6JCTeVBEQmYaevEeS4b61cJAom5fHsoSCjboyC4JqtZK4pmYM6H1ndnVwcBjo6ULg",
  "key9": "5v2RefNYspqzVYAyzzhmvVo5jeUq7onyF5zUhY8scLAXnQARkQYwh9uGM7FNkDcK6eHNeKzEM5F9w5L51rngExmw",
  "key10": "3xEddncBBMZArFhCbWSo3pZPjWnL8PkZGPxoTLY5L6UcZ9ipj2FheQmPZ3rTNsmBVv3cbwahZvmpfD9t4ZZqBYox",
  "key11": "5roKna1dKmi7vG2B5RiR8Nd9BcznFwmYAY5uUGLH4gXPCafJdLArhcRfh7uDnZj67E7BubTgmFZ3jsKg1Gd29xef",
  "key12": "2rPBws9HA8xn3m4BrAgdZ1Fg8cG2XNsdyk9Uww4HyXde8RMWZic2QbM7sPHTNi9GrzgcxvkfyQCJnA91xmdYE1HA",
  "key13": "5jXwuLDzw6Uc69Q5iZPcbwvTxi4nubNjPczfJ5Jd8H3ycjxWiGrgX67kBM1pUHVtAsHrmxjTogJpDL4ayfJzsPbA",
  "key14": "2bbj2cgpW9Fx3surkuXApH1Geu1bxXFwMcUhtG9H4RJaEG4ABR2LdJvyftAzyNb21gyHhkzbVMuKAnSjez9x57ZS",
  "key15": "5i5iCWp4sWdKJMNYgvrLyeBWLBK9YnwdYwkSiGGmkwrptQA7rsbprWtwzqVZyLRpwf15dHJevsm7uXWtFQ8xUgC8",
  "key16": "2BmQG6nwtKKC1ZKZsyX4zjFQSHtoevsbK55hGr1N1eFkbMnmtVPDpt3DExaQQAWHwZgoVKD7mBgQzUh9GFWbaDri",
  "key17": "5xXB7MH54D1dboDPyJZXDZzSKX64TraioeFsngJb97smny6UqsTARpVqkbD1r4NuGiHA59qhQaaX4LncAqY1d6xW",
  "key18": "5cwU7M9yBtnJ6cS1YCH3GMQU5ZmDqgLTt2oa4oZpmiKeRGjcp4guBNy9CuELb8sLKtzdn912KShPgrRMUZvaQTZp",
  "key19": "4o5GZvBYTuRy13kfgKCmxjZFRQew3FxP2NZFP8BTHkU95ZtdpqcAMb29Q8C5GMGqQTF3kfi3YRoA2kkuB7uMhLBg",
  "key20": "2SK5Wg3aHtBFxYLPe8KgvNg5AbBSgETKTTwagXpHPN1vgic7X2wbAUGVUtNwFbSVno9cv2DZCWdF7H88do9kZs2t",
  "key21": "3ByG3K42DjVi3T2hf6tQTiVop4tfK4gUNRtX2gwWtPXRv7XwFBJDEApcRYLARUCp2fy6D5ivdJxnhCY621r2DhGS",
  "key22": "2TTYHLU5VgPu1XavTbKvJZCnuBdSXPy5VLsM2xi9PYBdP8AFGgrfoD2x1zmMDNo9omaANPK8n4hkJY2VGkWcmHMk",
  "key23": "rTT1PPv5TcHEJ67Xu1GDUHTvkS6oJ2pmwux2SH3A51XTadufVM5g6QHj4cHCGvr5UMuitVtaByHF5GuJ8Zmh4Hx",
  "key24": "4WRHqXncn9w5phzH869FbsUHNyWjkUiH61wvgcSFEs8SYiVSzDjdrRt7YU4UCLtAiRStZeKd3dgJ89yv7kLaAQEW",
  "key25": "4gK6PZLFNtoUHrd359CebkTuGNmKwGH7jpCfFmuLrT3jBzwmvLtb3XfRC57exxDEz9AcAeEHJ2rKDSH77Y4K5nEU",
  "key26": "125A5giqu6kyetM6KtZ9ZPiyYtGMkoyZaLKWZy7dQqBcWRncVb7cxCB2MBpc76Bae5FCrcP64yMWzBasTTi4S3YA",
  "key27": "4BEV8up6bCFMUs9LYAwe5opZLEp2e78bdUZdsSEXXTAhn5N9VGnPeERtgrK3PMDk5yKn8hV6Li882gjgngdKZpEZ",
  "key28": "46Nj1xAT3imD6zWoUxrpfNczucMf4f6mDKGBJHeyuJFcN27m2kqbjEgnPpeB3NFT4Z9DV2zB1pHqf2xBPxJkWsyZ",
  "key29": "3hXMcc6jFuiQJuiJvRXeau5jT3jmCYMCeHgoeqhjpvcx6m8a6ykriS9ktZYAWokSiXZej8ohbDd1HrGpwqrbLmfa",
  "key30": "21pjBPBQf6xfFWMSP73YhRejz3gEmwPWDEeBBd969JFHQoVZW3uioST55wDQzDkCTa4tg9Xaw2WLxE3meErbf1Mh",
  "key31": "4Ho1esuzv1AF3VyjvdzJrQeLk4LKJVpNfzrF9NLi9VZ4db8sTJCaR7WgjX5LQXMu5uUoTnQcfEddVxkCpJzqVxG6",
  "key32": "28nrK6NRZRimvFgSdubhKPVnYiVaKzd9VG8vyNmFmxtqnoZWp8ym7s6d5Y6rnPkXqChfxuft1Y8SDNjDfQKGZa88",
  "key33": "pcvdsNAWGbDQDUwKE34xDcA8daBRqvxz82bRAdnfd3qdc3hyH5V5y1fBHb67KLThF6LKaufkrVdvKzEojqRN9Z9",
  "key34": "3a1U22dq3d6qDQ3bwBZ9LL1eBG9EcehqCdLkHt3rRtMVQZFfYVRA2VCQzcvrnL7RAdi8MPDCB7S7U6aEadXqVjfv",
  "key35": "5dYhHSoXntUWESphFngh8w8gnYiPaGSHhb7Xd9sGJVUTDR3NXft88HmgJh3eP4rMrRgctNAjaLkpcY62JomVB7tE",
  "key36": "5Kbk6diTq6xG6JyvnnHrMnjGVKFMTJZo87aY3nj7CAGeSeeuv2y2GYUCniubAPz3WcRVqtuZk6hNRvtrTaVN798n",
  "key37": "65gMXWtVfEHSgH38yHd8KAGJML95KyoYKxqtKXDoF3ZL7ycp2wSFSwxVEpGqioREfAMcyuQL7QM1aAHpBrhBi3GA",
  "key38": "4EyKzW7okcZj9auUCtB8QN9FBFMGbNoX5pWx6Pxsz8MeDDDLjo2MAYXjYtFLh9dk6qN11gj4SojgUUCMigaB4KPH",
  "key39": "2wyoqVCSzytUcvb6PGHHuLZpkU2EEQGiCAS2tpvkTGeGeF5nrebuAepvuhvGVBUH2aRtG5xgrvKAtKdEzV75ZPiy",
  "key40": "21f6B1UZZ817oat5wEfZJjFgcDtcShThwVVLxHFtuQEtKtuWpaPARffTjp9Zc2UJBJmkaPGNCk9NpTqbWwmcJCFj",
  "key41": "tChuAbyccsvyAm2Ki7A1Vhk9A81suCszZmHnBCT3NmQC3WiFaXz5Xapu7Re6gXz7h5uaa3Di91pmVWLXnFWcupo",
  "key42": "4PJBjJufb8yDykV6orB1ztYi78er5uRWrnvdi6Lm7ajNphVndroZfYW45skL3J7EdWNsSq8cRgQGqphoXLehT4MX",
  "key43": "5V8p3ZCFwZN2bVVwZ3Gd4zBWCGNXBizvGhch3xCUtKQUwuUjpq2uUQm9amBXaDfqGYJBHUKkNdj5ZtDRPkdipLSR",
  "key44": "56JuSzRTCUP8pPqtQrGKWCyFe19qbptA3qGuDDt3VzXPBCtNcyr8ZmCY8HuuucWG5cFtNCE9KX6U3MB9BvNPNzev"
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
