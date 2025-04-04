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
    "kY8wTnM8zPmTopi3uKCmG6W2HV9aAmeHPoqZ99Y1zBTVF2gYvyR3XzhddCum8bL1kEp8kJx3DD7Y65WaHab1bd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZjx5tGBqLZahMuvTi2kKXPyPZ12mX69nHrx63Cip9JatgBq3zMUzb4JiRauZDp3qq6eAfuX75n6P5PNXbYfYgW",
  "key1": "4zE4sBBJgp7k6STX91n2mU24VnFSDrhr9oUtKdD4P3UuuNDA6Czz9zvDNmv7MuuWQMiiGyVeMhFfgKaqDTfW1AAC",
  "key2": "4FabccQKjVjF82ypvtsXbXnrfsy2SJf3FDw33fSB4q3t6YFZsTGQjAQhNy1WdBv74couDTvffZRARC8h1g8zVtnM",
  "key3": "kgmw9hMYcXPXdmirqLTHTWwPXLL6sCRydeiskC8b7r4DsWdpTp81FxPHSy28BJD1nV1Q8Y96NTSzfQxKqDKesqX",
  "key4": "2TzDNgeoKP9xkhUwmx5PzkanmsrqFSNikAQowuJWu5BfhLboYDGYHqaiW5m6MhTcx133oxXfCUqqA1btCxVyt8h4",
  "key5": "F1fVVQP5BiLwX9FhH6kGZsMVHqAgW9aVVgh7TVNCQXMtfkZ7EHSSfrn46Bm2hZEkrbsddzsGu5GXhmJuqhoHq53",
  "key6": "3ouuzGRG5nZBgwraKzyiuN6KsAVUBMmYtQV2RV7JMA7e8AfewtbvfatjtJjia1idQK4pxDVMBctQy581qsEWzEnX",
  "key7": "29dCeJ3XWXFtUjenqh8mtzSygfsV2vaW4pAQ3seH54rqPPhPWYFGo9JtwfXr9WaF6bmeWXMMnCCK59Q3ktmyAJDU",
  "key8": "5RQSAAQgjge8Q2FWXyErjJB8q6Rr9qKNTV51pMhXipH6ysCbQNQqBBE8ZSD9mGNDvLRmnfZZcpvZZ1qhC5XoU8kr",
  "key9": "23qmv1BdrZZ5Ptv4dTewqFmKmTyBAWHCzFhZUYuYdFKXQG4oeNBiDsjgy9DLjHFGednwefJEeurXKUw4jj5LMALz",
  "key10": "3GNnt2K5BXniKNuD1jYx6TG4VwFcuNvfUYCEAbhDm2jMVUMvmSvwn79z9vXYATQnn1SkVFFH8WWvJ1PbBicc6fAe",
  "key11": "E6SJh2yTJQtpkHudkuPUCYNkpompr24qqoKG2JSVBaDLnwWiBeuv4SYC3SubMsVEUaAW1LrV5EwsVLP1iXviB1j",
  "key12": "4mitECANtAvsuAQvuSC69yPuqCCvzQtkNnmKUpzwqaQ4gZhECr7rneVuBs23mNWwWhQY51gn3URs2ZiZZSJgv4Ez",
  "key13": "5FBm7A8aSoMnKWvdG22vqQzfcwriRk9Z4c15f1a8zz772PQSDP4SN4n9YzGufw5PFw2XWYSV9sVNLnLzYuX7NKX",
  "key14": "3m4B2SsJjnBkLq8NpMaFjWKVRqpnfBcwxTzTPrcQPAjW7KfJJ6WiFx1WnifjTyN4Rh34DMhG3fYK3wRqZvBgzAoc",
  "key15": "3fnumZe7GfBCMYHLBQbdmKa8Kue1t4r34YKvG6fFhNbipeAU4RcpnDoptPqyovaEa3cFTGCKmmL39H1LNYBNrg9F",
  "key16": "3jb2vEubeprcbEWQEN2zyTcdrrFhqQQVc78G2ULVyuZFQQGnSbDtJeGwna4eWqFmrRvjESq3FEs1CYRDWYQSekWT",
  "key17": "2oqZikR92zjAnoy8GbZ76JKy1AcQFwMu7UbaDFZHUZ62XZwEdpDQjA3bAVzQMbbVQuTNxUSCXQyskaUrKC7YzceQ",
  "key18": "3D7uw96CrnsHyCrWqeX5PZ8Rgx7R2nPep3erCdnALoGVWn2X7NSrgv9roUdyaLrcte5MyKtZJKzhSXGzBqFQpNcX",
  "key19": "3qH6i5FagLwAGu5he1DX9uWax8TYevUp9EWfWBsxQfXdKvwumHQfg2ipWcjwEjdnsrLjc2unjeiwoR8FvTJSdAb4",
  "key20": "2sphXH8ocpyDjd7EAXWDiziQWoxKXUQE6TsDhaaQoL5YFZBtfUZMXsNNi9jPSeEFkmzyY4m4zzvEanX41knRCbZ2",
  "key21": "2zaT2fi7cdHt4A4psgta615KkLNApSCpBMaEvocNuUqLWTWopYuF2ESai2sTuSuMwhJzkzRbBZRdbCFui33c36mm",
  "key22": "3YM2npPBZsypu2JrzcGugu8AtnuxyUKMYF49Qax4gCQMeRuXZgQgSBFP6SNupyM8wqtyT6gSXx2YVzjwCCz8Kyv5",
  "key23": "5knMFDMFjvfYWmgEm7PhaXdC5aEHrUMnmxt3dtLzNBnzPYskMTHu8HsKeGzRMwyAwJh3Q8FWztRqken2NueWNUjK",
  "key24": "5PFarQLJVS7sXaRzdU3bGXawfuqGc5RuuYfNtPpegFwQCFiBZ8HhfxAzzf5rkkoXq25MQPMT2nENgoXoo2rakVcU",
  "key25": "4yqS27npcwhQrSHwrYaoDRK2btgek1XrfJxC3f4wzvuh6M5w1L54Y5VgbuNNoxEUwdFW5f9uckFtvNQkHywY46W3",
  "key26": "5jZWaBPTKUkekJatx295apK7Uf2iQvB769dZY1EV8GVR3JGW7n9WV7ePp2xTLAQdy8KZ6jNpWRQX8dgxqxV93nFM",
  "key27": "rp8ffCQ6YF1xbPYfRtVJR8hAn66n2Li5c3SwPDW8dqfzqGdQR93YfjABoHvRe1vYcovem3qtuYX6JwnpAbDKGBa",
  "key28": "2JdULBC6UrpzfBSJNUa3pu6M6rtHdBJ8Fuey9yGoDVfGF8sn9oGwjN8FNZQj1hM7ufUhx8n6CtYUHvSbMj25ipgQ",
  "key29": "k48qGKz2NnTBSwWU4T7EGjvmT6WE1PzvzK9GsKcJ2CE8GfneazGiv2eDbP4dogEuyAoVN7zjiZWG32Zo4FYxur9",
  "key30": "4UUgVYkXHDXmeZ6PGkPGc8qcmGtaPfD9Bihd982Xu7CDNQMDsJmRD9PvnoxfMaxRSzxL5nDGdjG7KcieuQireDQ8",
  "key31": "4GVpBAYH3jDPrFyWbCz2C3QGRPWvKsNgfriunrLS4fQ3w9krT4TzJBNfT6YizsZbw9jP3Kg2SdC2HRfxf2FApSjQ",
  "key32": "5pGVASCLFWCqZxwEoYbpF4DTUiSqp6NNMGG7uAx7W6qqTHB4wRfZrvBVyRreeRVWLBJphqPj9vVyPutKeD7cjc5C",
  "key33": "2jZYoYjYLAn3mgUHXVT9y4MaEs7NxeGg4bftgmhZ116JsQjq4FFjRssybyJWoLBUzTARo7KkLoyG2ZbtcuCyPkto",
  "key34": "3CPpiz5ksnxxWyPV8jHqYMmL1Zcc9dQA7DGQSjd9gaF2PpVKJqKLYvoi2onY326aJukP4SrBGpmgGh2vCk91c66t",
  "key35": "4muvk5haFqcTBqFVPxpmT8oQWu3HvDcmz3fa8dywDz47EoiBC48Vkc18S8ky42wD1LiYofFnBs8DLaw1X22ejqKD",
  "key36": "PnH7XAoTxSxMZxYVPHNSKJBRrrbrW1D3ADMZdqLzLBYtdHrCAm1LdxeuEcSBumhxQYkce8CrSK8PsSsegRqFvKE",
  "key37": "243D9xgZY9a5KY4UKRpJ9FXSQALJdTaqXT4iVQhwPCPjAjLkmVHZWRD2hcAoyjLv5kn3RcsAUBGKNwHU9Bydnet1",
  "key38": "42jKTgCZfBwDWrfuthbDykYopBdPTBxmnb3DHZGFd4ZkXuVbTcwvWVQxwBDQfsuRxuFW5DLBWedJFe75ogW3dMdT",
  "key39": "4dDW1RLUZ9nQtroVNjbQMBRmFr3LYKUMdNDtd23oKTfbm15oFo5wqyRGShjeZ9meUiGXbp771AeiSsWzdk2pD57G",
  "key40": "eE3qyHzCApUZjSe4f8m5ExxiL3BYZyWUhqMyihKBXtTXxgH1GZfy2KK7nPJ2YYsmkqywPja9hTkiyGstHQR7NYQ",
  "key41": "3g8Hwuvx1Yy59FqtJoUYt9SVJgG58JWSWawp1NSehz1WjY25zk7CtaZHt6prxms41YdeFuEt727NWFUCdB3TbU3r",
  "key42": "2eg5moZLoFGL9FrQ3FiVe3DnrzBCBuRqwqCyfjGXQn9sTSkt8Gf6XmfmCj2QpUjBH5k7zhHejEm5dUaAg4TK8GxU",
  "key43": "5x79SyDLT898eSBbqm2ahPZg7eoZTjd8uDWuXCcLSM2JtzHYMsSXd34eY9dzxaLL7ADrLwmEiyKkW8urzCLtfAYj",
  "key44": "4zS2eFsaReYwCXDZ5ZBgBuJxq5ejvLSSxt8MrWdAmi1YReZTNVrCMLVfMyQDw27hbaY8VBpWpmgwTc5nYP6aouEq",
  "key45": "3vBDJwfVzwsLG9KEAWaUm2KwffL8MnVjUp8PUSRDWGGoh43z6ZAsubXpR3F9aZ9NVQ8kjfV7LhhRFn2MDQTzfLYC"
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
