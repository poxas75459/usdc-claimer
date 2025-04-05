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
    "2xymQsjDJ3bQTVsm5dmmSDW5AdSdga3u7LpZSE6baSFfVGNQrRDaj9oRqbYoZD7pydUqRCzjpGuHM6MtkhgiPkpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KovzAe8kqgozEntzjmmwY34AZnXz4GTMpKq2L9aPaZQuVjUHf7sH3odGLefyxKNWfXuYxQLV5prN85g6kwo2FG8",
  "key1": "47x7BCE3U1ok6oguEXVnCZRiAfqYu6ei5UfG73RV8VQrqPN3BSM9PJLQhSju2oVqbgzpp8D6ptLa8XrJWoav3Pot",
  "key2": "8wYZHyy7yLJD63bskrXVMJKf82XKkXprKXHZWTP8xgxxZJ6KFoRN9ZQBXS192sCw3HHaVC391uFoLEdFyFCAyRA",
  "key3": "rPyTKswYtErt1dGCHTUtMoYAU1V2NjfkYMTM9oqu3ipt5msf5KoVtyTQXn1stE6T9ys9i2HVWZFAsZgQi2A7eWm",
  "key4": "i3Cb56VJ5KkQwbZjEdez4NTeGxhFPEwz4fonkHMVHPnN41vpQ8hfhtVbgz6kjBXcejT8UKxW3m29XaLBUUqSysn",
  "key5": "FQ13Dvecf8ArtPcFu9MNYwL6PzqU996NpE6XexEcsDpN6dwtMGr4BKYeS4H9bULtVgBGKJRGtcMJum2awXyWYvc",
  "key6": "54XWKdMEb5B1iR6VqF2bvDnaTLkwHaf5AMtrpgv2BckDgJwibAkmkPsuCZWtMfKcaLQW3sbGWbXKfP3PLfsWCoxQ",
  "key7": "4ZR8LWVMNdQYVSzG47ENSnZmFfG5eydULEky1iB4dSRX16hUryRffFWJvXFRz13RAPUDKEVxY8MJin18YzFLLMjP",
  "key8": "4Js4LyFyCcsN4cXSvdJ4GKquP95tt688hsxCVC3vEKMbmY5JigaiHV7UmnegcL9cQ3PwaYBxJJ8gK2W9AbHUHcGx",
  "key9": "5TMzVUXkyjdAVKZa2GJ67uwJ2iwjX4AjHixHHJv3EHfujyKb9Ep32QkMdHM7p2TNX6RADZss8LuCZ47CABUXahkH",
  "key10": "5nwe6DgQJ3D4BgfnbPx4tYLMW3V55nEbr6kvRd6Sft4ArzSbEzCXS2tq8CCdxEw3weZAtBNBdMWrjVDDejauVuVq",
  "key11": "3Uf2S2GBVf8mE7ziDkXgymR4HdCXxQjS3y5Err3L5VcGsgYJtXJ8BA2i1uZUG3pWdVW4sgR1xrSRZpceHhy1huFL",
  "key12": "3QCcvNFmMJ7BrWQbLXokRqESTBuyGMLyu9UcC5H2WdaB98227sS9L3BT5E4RqbrdrXaqZKo38Q1nL1uxDoWJyV9c",
  "key13": "4VLnTH4Qpg7ZL9odMzYYo6vVovDuSiiNXTKadfPgrd2VNKC5TXxLSKPQ5fjVRMM8WiAxPGm4LbhnHjJPmKSyFkrz",
  "key14": "4c25v2txNWq35mJ2sKvxwWLbiHQsHYvaq61DYm7T7Ang2JRGnbPGkJTnsMzmk95iXNH5gVUMmQHTbxZkED7aVMJm",
  "key15": "fTDiWfNfRUxHDzB7FhLAJM69GvsaXLXVYj8o6JtpxyuTkk4XMze6cbX81qVc7VZZfcgrmFtkrpq1dcb1TLYGxAj",
  "key16": "5AkGTPXvdbHrSUhi1pdQtLq9rJq6gzRwWAC9vr9tfo8ZawB8T4RSMHvfaBXMcHpNQhNU73MmBPTMZi7CoBmLmZej",
  "key17": "4DUnjziSuKTebfkhxtYyBfEAxKPvfY9XsPUKpKBAed9t7noBuWHQvrsLBvgAWBF6tqgLDg3itPPqwrWgbFEMoWcg",
  "key18": "5jJZHQPcj7zeC2GpD8TUuwq5PNqAD8n2kwyhD3xWWicB18M7cEg4eujEw8Nots3KxKpXFnQswffXCtr2Rh5ARo8W",
  "key19": "kQjy9T1E4MiCKTUEYznQ7N1BMdSvfdyXRNYmWorBEmMjjiV7rbggC1d2T6aAX5hWwRmqhVh4cCKCXUETGKcZviz",
  "key20": "2pzNvoPUdoxu4KYR8HZgTQo2N6vbHDb3ShKPxFDMkP7GFNYLrguyMLVeSmej6a53DpZQgH84mhL556dYTomTnUtj",
  "key21": "4GqhkS767axqGPRonzKq4sy6J4oyyso5SRMfu82b4h8JWBqgwozpAYYBwEi6afEETsVnETGVVatBW299SmjPsVTT",
  "key22": "5xEjto7G2SMM8HDeh4w19zGrCndtZF6LQdePGct9rH83eag5jKszAQ2Sr4km1sGMFCvc8A2b6CNyLsEAJA2aLbEN",
  "key23": "64qhtBamcTqAKiSCw6jSYmLmzKASj8PRwPumzuwUHUDfH3yAokptfULP7x6jTr1E6W3ooTmHxArB9xRQbP7C7iJu",
  "key24": "5Dp3agrTUsyW5EhopSJyCM99dgQiGGsRCdwjCzG1Enjn7ScMnsQojEXHW4jtZR8qJ1Z8AqPznMkgmkMcrPRrx9nu",
  "key25": "j3F7E2nX6K8WHTMe4oQuZf1AVSXT6gXDXi9MmFhExCyDsJKpgET4z3QjUQtuJfYp29rGc69jsLczMh3tzoAhtkh",
  "key26": "vzxpWJ9Ka6RxTaBrRX88YWfMWEePT4iNnhrUG1ym5Fz5LZe2f9tSrtjsBB8MaQEVoxWbb6GvwWS51XpwD5JR3jf",
  "key27": "2vwG1E56bzbATiCRbG16TAeR4r3AZfpvRz6oUgFeLA6tgXw4qkUWqbKgB617Xa8cZg8TsK9YmbSAgMcAyFS2Ysfy",
  "key28": "R4BkD9f9RtMfEPHb8mXpAKXADP7dAHkQCt15nkdAL31AxTDHodom81pL7C7rhGVdpq3zxc7Jp52WcdEd5v8gmRv",
  "key29": "3VwV8J8ukpk7td8ULA5KYxQPxqRtFptuPTg3zTdVmCQBVn5MAVxDfUFsTZw1jS4ConbRxSmruLdmco9sYh74GmEM",
  "key30": "fHtGf6hvXTRy3woAtAKvrFWN4UEpWpy7rjejYXNi2ddWTgp7LNKqQmSD7kUu9vzpYFfxMztkyHD3tNfzVVx31o7",
  "key31": "3QMdSUdK8AyK2zoWz4rNez6yzy3D1aSpqWoUYD7y12jxhugD4E91GSPdstcVEhsd1Cub6D51xTi7NFbeKK46oRTe",
  "key32": "5eCfotKzDZ6AwAGRoYWGzZQLSSNrEmRjQqMfYSsmEGwsnDphSDm9wTqTtF6xPFW651bcG7QWLXcJ5JiTmA7tXrXS",
  "key33": "2kngeLkN1ANL5gUHjUcFtcYxYSgCDJfJupDsgx8Qepa6RGbkAbVi5Di6ijvJ32RutFPA7XCSNBhJHpGKajWp6sGK",
  "key34": "jH9BP9XU9XwtiLnek12AbNUNwfYreXeDtkFhJWFXFYzYjjNR2Ec6T6Jx8AygkJd5FA2xqaVFPZoncs1tfCVKKBb",
  "key35": "3CT7FPrBABLRJ8TFrcuo5ZE8TKfPZCL6Jj7BCNygQyhn7WLybUD5Dv21xsqPCQpC3FSx7VbDLPmCNs57UPqVmEYy",
  "key36": "qrQnbaMaVmiU2hkpuadQwaeZowP8rW2i7Cdf9zEAi186ybhqJ1ETS6RWkiDB73Uu6X497nDFiZamJ1BaQzRcGZn",
  "key37": "5VEAjWCQ6XQXN3Bt5A2xYUh2pSLeKB7raNNBqTtHbTpo5GfZgpda4suvoGn5AHUvR9YEBz675RHteaKYgucZApNM",
  "key38": "5dPiqvS6akP9JjjLhtLMBWXmTgbjBFLBNCVwN1DRR5dNdGv2z98u4H9qBgZt7hgsgsW76m5sM8BfwSV61KcuKpem",
  "key39": "5TNG8qhBowiKsWfp8KCuLTU1wAyubLdi6qWNdSe6phMHhCdhvsfdT9H6PP2ceua25WrPbep8d3azSeFCECxh4JV5",
  "key40": "3EGdacunCMNTVWUVsAsAuasjSK6nz2bfrhsd1zafWY1kF6rdUPQJfh6KyB75NzVZSbqRzDqT7RmNA2utYRpWYc55",
  "key41": "2Rbmw8TvfNezwfJErVwf9GrRTimGu7wYreui2ThXCapxi4QCFdRCZkdMm4JgVju4ZLufmUK37fiUHngiJRWo7DQf",
  "key42": "4jey6kmnPqAowPJ4CpziR3Xfhi1poRujzx7BcKJa4Ee4MdPAtYaPczy9pyrqWLdh9DCo2ABKaa4oBzyxniaX9Wpk",
  "key43": "4yc4AJcphpkrveyXmF9s6huAi2iqJLJwjoB7M6noXgfJKKS5T4nshDP9VQt7iVJtsSW98ASb5WF98DzRCSPu9vgD"
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
