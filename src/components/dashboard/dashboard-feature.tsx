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
    "3vVmj8LBy2kS3zUfWcEi1iY6vXyqGxsZ6C37pkgLBUiFy3z5FBaSZxZNo747Vng4r2wtHRNaZ6oBUfddRk5WwwZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpawJgC8b9L55Snw13EnMJeznFFmmkDaP4hKh3AkSVg1LQtzqdVjQA9uqMj51iZgbcJn7B7C57wXZMLa8hs5kha",
  "key1": "4cK5CV4u9TTQY7hi7H4pJRjNSYpAWG1qxkysWifhvbmnpFkjftFQmmjvU2seQeAHhEWRMvgcr16fAEMpghFiyU7S",
  "key2": "5gXhSyBQQbrMxTzPqJkSxLLurjjDMkpMB6nDjGDd1FZUwp9CdWwYWKQLFuv1twwyCATTTpcsdpky4axYVnfyQuSM",
  "key3": "4gyZzFFJPC8LiCvWrqvHELqj8mYYo3iipo8nbbyaour8bFXJAt7NJk6irsEBXHWHbb6oDM1g7qTmAmjvEvSNaWqh",
  "key4": "3vHJBNG8moNEK6wWVTtAxGXWis39dTjSyD5d4XTCrPVDk7s4GhePPmkjVENAcjPhpusj15nBPx7vkQKm8kQtxv3x",
  "key5": "3pmoCyXMXMi1T3EgEKL4wkvorwzRDoZeZxB3uVauwZ7Jx8ehxL3W1MQtRRRJdpmLpicSFfSTWsUDuwuZayZB5qzV",
  "key6": "5rpbjMtuJUwbbpX69MaSr6nau4wEYZDGWepfZxw6qSx6XwfaJqdktAFSR6eu9cgRzcx72vpsSRK91ooAVxa4nMwB",
  "key7": "3JiCmU7ptkTgYuuZnkczKjn1ZFrTGov68qrNR3nGBMz9hwRm2ifFMCoDkD5SBAFBBW5Ygx7ifmHtaqqHBHoQyfFZ",
  "key8": "3DkfcaChjQkitLdkG4Rjbb7dQ87m6RmfXz4sw2LVETEC3Zt5Cgo94B69tudzFmT1DgBWS7jNLyYmdM7xDX4qp2vq",
  "key9": "5AcctNj8z6MzRqr3BXPQHYpAgAoreT6sLnq8Kgd1E9b4csXwJWXzPyvGihY7VMG7hoxck2wN5t3r4hBYWMkaxfBn",
  "key10": "5NMhkJmyRfxRzMYNj2XzpLnpVbY9vb1dXQjtw2aeg3fu1972MbRuH1S8eReApFChnH2GfmgUvz2bdktE7Q8oqi1H",
  "key11": "66vGRAFU4xBRK8RUfCorFompaSbRcumjogiRjWLAiqS9f8CVjrdtDDh3c6fHsxjTtzquM9zZZCZgW337GTvom6VT",
  "key12": "numabkSv4xztbM4SE9EgtQRwwvkk8NiGaLDR4nJazu7PEB52pE55Twv8NJL75QUwesGvCvUMs55Wt8T8e4K8v3U",
  "key13": "G8Agk5brS4ZjrMKDp63FiudPvnb1SNi2mVagA5b7gSL1MhfWdiU4FF1Ms3nffc3Bx7guzveYQ88m78z6bm5Zg1c",
  "key14": "s8FLe2bP5LXHuwZvU73auWttNKVDxQkrJi96woKDDPT95aBia7z5a4wf3xpahTSUGQbtsKiEtNNNjME3yvV4rd3",
  "key15": "4rbfubUgSDiSJm4p6xG7VJjpKTnMugSWYaozwLVQzWeL5kAUoHJ1X67SJ6bXVFVqiiycoe8hSax7xSjaxbr1fm1F",
  "key16": "3E6MefJXRGfHyWPApsp7GJrHoZPDrRVrSVGcW2ngt5rJ5aUPUHVRBcbq5j9mKj7RA7ziF94cQW1mEVb4AouguTLo",
  "key17": "51JtYu3hjcAsXfE2cBNEHPo8PqSJDL4vznYBTAKgpBuQz37cKCJHduZKE73Pw8TduSARWJsprFRjoK3UXmoVGPw9",
  "key18": "5RuVi7nzr5UDQAEGJjKsGoqWFnG7RiyBc6BsPRu3sw7jKcaT18qagM3j4jvzDhHBFXSfcAozEKDnYKjVGRxFkHkn",
  "key19": "3boS86YJKwQbTx1pwK9aeNG8cHVNA4Bwj8zZQrai8AeJr64aP8tTypmdUo76toWmV9FEpXMwHwuEkuJjtyuhkKuF",
  "key20": "47YNJmgpYDeYYgLgj2L2TMA3heRVQqvQCnV3x2ZQmes7rA31nUA3sVbquo397PtnUNvKYwTgWdajUYkgfrym9hUh",
  "key21": "5sVyTaZCvFSSk1V8Z12aQLfocGL4KeBW3uTzsP3pBHHwcMpasUjzEs4V4tNcEPy8jRLDHwot8ppPhZtbk5tBs7ts",
  "key22": "TVVGzKh2wyYw3MTzrFfrc86pEjCK8noj3m6shgXJ4xkXQY9gCg5zJsvsQBQvJEBYiwk4ENrTApTnLLU3Juz51z2",
  "key23": "26Kwy3AeQ1b5Y2wT3UDQgPCS3Jv4ce4YLRSPKt9xtHsA2Dx5zS7Zh6Szqo4kkp2WuWHYK1DGapi9nsYvmGJmYcM3",
  "key24": "PjtCYB8gsCyxjkD8q2vxmbqv6JUHL9oYFCG5YUq7XVGAacRBCmB4gcWqFLjdMZAgMfVDxzGALYv3RGDsDvHz1Hn",
  "key25": "oNp13w1HmXC4YArMqFtYxNGZY9qDhdYJJaT56tG3LkFqZywVevL8ZKA4o1pUSzMEwqhB8oq59919sPMbK2sZ5kP",
  "key26": "41uJwXWX65fp13G3VfERA4tCf3R6gSY23xtJ5af7Q9nTnpcazev38YYRUcGiv1JsaDHtJQoHgQf14DDN9cB1w8sc",
  "key27": "aKb3qaA3JQLT9CeL38HEYLycXM3XmWfbcwhxh7MP1zVx2KBauZABS3dvMi26jAu66yzktXWCZ4o66cHcxUfWvFU",
  "key28": "59hZtVh5m4EURaixS7ebhLmncDM9zRb6eH2ET3Dz7Vq99qHcVEt3ek7sXCQXWmkSVrLqRP2ZaNmWpMB6mfuNmnqk",
  "key29": "5hj6yKWiD9hLcsdFA55VeQ8a9ekbmRnbkNoXvYAmYBUPxmmJCic5ejBuXvDj7V4tTRUxaUJK6XiivZBozTmEPHHj",
  "key30": "3zZy3eLqzgyQZQ5EU69611rKZYfKrB6FyfPFDnYwRu3usBLbWEFuGHzPfTWpf8CDSByxLAFamV2UrVqS37aBkmzb",
  "key31": "2QKE5NxY2jX2XdD6rhC7fFo9rrBLmHzvjsMWXKqVK3G8HtjkpFYxzuBrwMzj8j7BQazwXSuYeMNZbG2Dg5NG7FnV",
  "key32": "66LWhmgFFGs51LQyN8uHpw3smq9SRqeFuwm1m9WB8dvF5V4BXuXrDa49pu7qBCugVTSbdgj16gHpvKuqBj3Vm2FY",
  "key33": "662PQHoRee8BKpAs7MuWE9qWEjc4JRSUTPMU9AP8UgD4umWjpwu6e87yFi8zqx7Hswzvt6MsGqwpoN354MStcDwW",
  "key34": "477QAr7VAg28sDLD52KNdqifKsM5of3z4LVysJUEitbgiXkTenio7aL9BQbvrqSJo8bqGmSjgwpfkFjBrZ3MMUVX",
  "key35": "4fyEyfEoJtPtpeeMrw99heD2kakvXMVucNqmXKhoegHu3PsnC2So94DTuF1Y3aA3sueYs3NJyx2mBmSJRfRf1VMs",
  "key36": "22fFCRArX8GekwdhKxFTgu24YQ3hwq3hT914XdttkqfLWr3XXfuxqMVvw4vXunVWag9h7CuTfkn9GZRACR8994oy",
  "key37": "37hoVwe9PEayN3vjQ9UQwGDucYPNVDDZgzJKTrXun3D4dN9LnD7Dq8UWVPmTUd7Yq3k1TaJYmTxMkjAkkzSNdxRZ",
  "key38": "419rm88cKAT5YoDpRLNN6v5CLtpDzTArTvP5NrgizETGaVUfkD3otE5ErLhCeXyen9YxvxDLp1K5rKLWnAuDtz6w",
  "key39": "YUotUbjaJc5VsjVydQcLuHujTCiCe2cQP4akZn7ngg89xeQzWNWp3hYHUsqMn44Aooi9pngxMe9ZS6qGjAPLWok",
  "key40": "KnRYSkKMcDrQvMuL12VXVentFDNwstArPESJqU773rHsCfWHEwrfByfSyFNoA6x2rH45dZ93DhDszrroLFZ9JKU"
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
