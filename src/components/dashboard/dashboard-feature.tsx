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
    "zDeWi8feBHWyQzhWVegCBVpKz1fkZx45BGT43LeZ7U6Xf5amRRdfoHr7ioEhb1C5Z5v6sMv5tXdZQes7jeCCR8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jerWVXJLRZKDn1cxztTSWGteJF1A8jDy2nGPT9FCZkLjPwWQ1wq4J9R6AAqE1Aw8pgqWKZa7tRPVM7uhqLdofYd",
  "key1": "2zK8KXs6skGZjXj8yRgcdVUXSThTGYiXwjGmSnEs8ZWqq3DPzrgtomjSE9HtXY8nNs3gzYWtP6DN3cgEakf7trLi",
  "key2": "KBNUeEimNi84VyryZbMB8H6eRWhyD8MEhK5LTinthJChuVJYW99bVhie9xmAS7KaDPptfUy1ougHyg64tzKZEEe",
  "key3": "41uBSoah3L9J5kbNXaiSW8v2hfDSxxHNRi7xxmmzdEzaWLzPu6DYp5cLktCUpkqXk5BvvvovY3gDQ1meFYyvzapG",
  "key4": "3MLDUcDuNq97pqZW2oU5c5S7bmL5XxWDbSQRN25E46Wso1apduvJRVBLun3aAafWLt2ppQ1aNNbVZmGeWMaKCkEJ",
  "key5": "UniNVBJL8rsoPxBh2MKnQdmUNzUzYNLLNG7qDCQnDZ5J2x6CvUiDnW9Fy1z2bfLwQtyqHusM3tBCtQQWm28M2my",
  "key6": "4XvwidneAkAQMfFBBT7tgVApeGkSXS1siAf6ZDAEL4uiHWTGj5CAMhafAVFxG8iCnJHqv61Uw4qUjNGxuSdpQHPx",
  "key7": "4skFBCQSQMzJ1qXLPhHVDeSBd43B43w3uJVmaXKHV31ZgqLXMEbf9h4qAxkV1nGG3q52Ww5dioQmVCCp9ky8wacC",
  "key8": "2wfzLgmyTV3jVnWrZZdpgoB4v1AQxW1wb8BZxZBL9jjUcsJGH3p1VDsLPMc9Grd8kS2Y17Pqwrv8kwxiFSAc49BH",
  "key9": "4ay75MGoisVcLHYVuJX64qySgyFwcVLaGPtNmaab8yhhJRxbBvHDcBw2DeawRXgEgHeLvsCwf2uZRCVQyrLutasA",
  "key10": "51Jm92DxWaEMBvmdatve7fbHBEZmgSEr58rTNXejuZ8pwx5QAf8SSq1mXqsiaWZL4bzNkgQaJzu4kYyMNypFrquR",
  "key11": "5jKs6KaRasp1FhETHQGFh3JHmpYAD6PBeKdyyz4x9JSB4DibY6hSgBjSw86w6p4sGAWZnKEHXr65sMHbjj8EiCWK",
  "key12": "4mhUCRkn7fRcqfTuJNg3qgiCuM4FUBpeXhQF6tEvEN4MnRKQ4ok4BWiku3rVoo6etfiwQubS4fzVGaAs4WsoUVc8",
  "key13": "49E3tWdDCQF14cJy25rVKsMVVmDaXaRt1T6LtMGug5GrUP67rcmAb32QiCNkdcM21qrMZqSMTzXgXqoJKbLYVvF8",
  "key14": "4u8fSJkhYCQLmY9PMndoq6SyqQ8UqmhfYD3kQ9EdD9id3VUifyCDjkwT4kXsb1xQf7ZPxms877ZNhg57MWut2N6s",
  "key15": "NQ1NSfj6RDd7KkMzxbeQvXu8JEbJJfDfZKjosnP24Fvcsp2pJmtW7kJkLBtE8UAMehFdoekojhjfkT9mMepSEgu",
  "key16": "4Zd6soMCTF9xwnyukN3Q2Geo1BqiaJXBddBUns75GkwExyeF9kyznKJRY18VrhsriMBCuNbdCrxvKzAVahB74TBB",
  "key17": "45Jba9x5Vs732eWjqCnohJVrBBVGnQjMJVsn9NY7Ei8Z8mEsrRBSFj6HhTxn5PP8TojL8xysc7v8CW2XmjbLJTbi",
  "key18": "4S5sGzEbJTaJajQwkABAHf4YjzXaBJafXuGKTgHRbZi8Mntwiy9Ff7C1MECAHS5oUy8gHFV2Nxa4CHUwxBscpGXZ",
  "key19": "CvB2WwMYUicTPTqDq1B4wKG93FW8RRzKzPJiBAPzYCZZXVhVj421KhmwvnvAK2GKvGtUkhL22qWoMyNCCw9CH9S",
  "key20": "39Bfdi412hN99RF7ustdqvb1CwvmxrpsLTMrqqLzZgnwRCwuLiF22FnVL4Lfggu6KMh9JPdaSuPhUWPutFcP78BM",
  "key21": "3aJjwo9x67fuidxJrvVQWHdESFDqs6hkEDVNnjBeBp5dtudsXDqM1CkbVdEBEwJJjTwQuGzEhgWRULR8HvpLKGc7",
  "key22": "qrZTAujNaJ5mKECve9XWsCcXEbBvL3F1YwyWfRYan2swzypqKKPtRUK9Lvf414waisrfNFBcb1S4ga83xsQGAk6",
  "key23": "43BcRbGe5pxWPJ7qHEPMKhrLpnjntbtu7XS5KRQskqisnMMybFA67dwmYHTNzwU7DB18ZTUh6fJodRPrsxbGS4YU",
  "key24": "5zf9YsV44rNNzeSYHC6fQbgybH6haezfytZLA47uJos9zyLU552kEMT1XsnLaxmkz6xei4h8nn6jzU8iWspcN5ef",
  "key25": "Rh4vSZbMejDEhWaCSTunPeVwUTvKrkyrsTaPCShpf3KYghXuuCokdPLXigwuDej45MqEbVvV2HQnPYSoJ7s46WS",
  "key26": "2c1ztpcERurnvn8yTRiMyEHHqXhN6HgrvRV9odA5hKrpdDZueyFh6XmW1vHfCuuCb99UdndqXpv1P3mEMjXw7P8H",
  "key27": "5yExZTP1F9edPQztrWeZeLqP9KuuYmsJZMVVuq8Pn9DFEWqw5YDaK169qBGmKp8F2FCMDdgsMgLB9P2BR6AZ5yR9",
  "key28": "5RLk2FYJ1QbrGHG9x3f5T2P51PQCDgeEqtemWx7WnzwrBxWE7LKZUsKoqArJhrpkExnhaBgBiGAdzKvUcAg4Nrpr",
  "key29": "5iGtrJuEH6ZWVUKpAd2Qac2uUR4Pw5Mm3Z36WvvEtQsR43eUS6duxZthbSnRR5YxU9NUfpBbJ549B5pSXGrK17aZ",
  "key30": "34LSYA46YRNuPy7YLRL4vFUR35Q4NUay3smwDUTyzvR1STUXZkdtCT9MA6chrPVBuD4SQGAiucAXhCAESPBX3BnC",
  "key31": "33r238E9urXsrLR3u9qSD2TtFydmJgU8Vvtf2vh9bzLgqaUcMLHv6uV5v8163nMf5f8b5pV4aUsJvTjVnBm4MtUQ",
  "key32": "52ciMtECzLizjMYg8QYdDNZcRxZbQeM32iDVArpCEJyUU8NrjwuRsLBQeLRJKshitBBCr7YXwofBdVBs81zmyrFo",
  "key33": "5Jv9Z7boWsk9qiqPe21n6yfduDA3bkg8AjNVRxDmo52w6KD6vtfkCoFzbxsRJDzDiMMBLQCtTT6EA1Kcgio16yfv",
  "key34": "qYyXbPwBi8Rp1wpvgntGRZo9vUrFYPe11CXhGQXctQmv2mbBLq5kH1cYjSx6aWyxgfuqr3Jzop6cDBoiLykTPAd",
  "key35": "39uSwUWLDBbzmVqGdyMv6guKvcdqPP9pEZ9Tt7j9swErF2Ydr4qGNcui3xWPLVihY2PwBPo7dgPqQMyCNf88eMdQ",
  "key36": "3jFH6G6LRhSSW1gajDoefJSpC66MNSL3KF2LvKueWA2BAT1X7meZWoQFRQGiJmzMC5fEzViuaZ1JUFPdXG46NSi7",
  "key37": "4TXQ3aLEwRKRvw9HP5WzAWHrcnznUeHrzcVcg7FoZj8XtZYLcweDvUZDo62C2aGDtDb2Ruwi1mtA19gbyk7PmC7Z",
  "key38": "3nKQkUq5i37zoXN5Ynox2LvPVkC4BuGccfLtbEjqErDPHkDXtomhpcG71fceSMSQLro8JhJLMXRoRog1mudndaYJ",
  "key39": "MkKwsoQs8gB5iLeWztqak6HTiSQ5hG8SZjwvaYb1NMmeVVodSf2qjX5exUexFpnPNJHKDmQvLdbB2LQoueSRPdP",
  "key40": "5qRaKgLbAadgc9fmkyamvRpoWkwxmr9aH7oKPutP4kFrk1bqWpP46HpLaqFyJeXQfXHYwYXqvkp8AZ8Z5Bc5nq5t",
  "key41": "PeLwvPVdC9nmfbNQUMc1vH72AXms4vqzycv43yP5vzEmAwDvx2QwN27MuAs4PTBckjSKaDXkg7fqBkKVPrsyvWD",
  "key42": "4DipHv8s2MnUV26QtmQ3UiFxjfyby8Cih3D1gL8tcdeUf4Qye6ZybGAUbfGQzkGNEszLcXc7qx8pAwJCApQxfA3o",
  "key43": "3A1SfViTjbSoP1w8xkEyaxze7RCNiimCeikL27C6DHLVqBgGVcWd4s5Auj2UdbVRoJnF53ehGKypzFkLN3NAxW3Y",
  "key44": "2sN8bSS7o1ceQ17HKfPJEKpnFR33EMoFMuuEUhud432TmZmQWPrAmHM9oXEFWQY1w8LUtKC8THqTAGYMJGseeYAt",
  "key45": "3bXjdLpaS3hrwtaW5HGpAiybdi4LdA9axNBbKqvpEXC9SLJsV2JwQcY7cc6r4oTRJPyq7rYfu6b4Y379HPRSVNDr",
  "key46": "3gHX4nz6tkLktHBcNY3shFb8TQ3ciWZqunPPsK9qwDshpZwNKobq2pRmKf12YZz6dQj8bDKekzBPaiQq8dXVdzH8",
  "key47": "63RoYKP3yNJLD6nNpvmtdZM8iT1hBe9tHYjtAE7cqcNoD3k8V4V2fi5UTBdd8ekcpVzNbx6Cu55Q8F6t7aYBoryG"
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
