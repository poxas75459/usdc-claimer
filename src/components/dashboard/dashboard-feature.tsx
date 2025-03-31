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
    "wHorqEf4wrtMnh3ypsXQdhEbe7PCDF2tCykAjeQnUVp255vcHvRGLJu27WG8z8iDt38aj4P3rqqD4FWnf2xN257"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pies2n7iFC5fpuSvqGbjiUjJh4vRcCULBAGpo4jxxbbsoRa6KetWaYEk2b6fMFhbzUY7MhAkZLNhT5LvUpcPhDD",
  "key1": "2xTjwGBrtj7XhwbJ1pt1HiB3pzAzwW448zco3F2KiQb7MZYbVpzmj4y7y4rHyphkFp52LUNqfPFzg3ZAekNcDKdb",
  "key2": "4McdqbCiiDNqgBgFinv2wdG7zFGJPwVgHs4UwQzR7DkEQasveQy5nJkLYLGoYqhPqvRvWmBajdynYUfs6RjrYYA8",
  "key3": "61hCyNkvAgKToAqmfwBTwf2xa9xJ5JrZ2xC3CPKwNabdNRfhMHouuQAzQGSEYnsHfLRXK6T8E44WxxzaAq8K7JaU",
  "key4": "3chQRw9ycMS5goBfV3kfYLD8qceKgj5b4JH4KAHUX5NyTuJ8jJCL3236vUnY46UmYXqaTW4avThqomzrR1NLqJqw",
  "key5": "3HuqAhN1EEWjRfWkD6eHvdqFbFQffXZVqqY8nAHY1rLpByrDMVXgCDjU6RhGh73aB71nPvk5TkDzbU2Way6gJ4Vq",
  "key6": "3kaGwMu5xNSjqB3uTfsfU9Tgf9TqJ3qGbo5Vpe3unUVxGjnqvNAZemnUsxRgF9sYBCSnEaZorV9TNXZ5SQoFMYDE",
  "key7": "6jfE6e4FNb17dMwnXPyTr463X1ioyJm2menxNsJ9R49CrttERSmX7AVZpLN4k2k63PMj4ai6gSUPdHAaAd9oZFJ",
  "key8": "2GXok3VVUoEq3PjjNNBVK47WoQ3Ne86F2wqu3qSVee8RZ3LyjCJeRjWnDhA4Q1RxrpmqRH3uFz457haRkFjv5hHo",
  "key9": "518xz42u4g6soCeqs9GKNieNjwncgSexnDzDUVGhAytxkYpzrWs8fKLdFUtjpFnTE7KrDy4LExNt5UHYaxU8imxf",
  "key10": "2hwn8nc31Cm5RrZF1kbPGLuALnEUocmEoXVRgb8BGTAGcs9vPmWtSoYmR8rTiLtuoidDj55HSfBJFBMTLdX5jtEA",
  "key11": "2x5WeFqjzgxAwAQa7gsfb82yRL3r1H1fpY6GKHp5thVJx1ikYuvzgA7rmcpX3VCyZdwn6UV5eAGbEGrAfWttc7uE",
  "key12": "9y3RF1iWq76dDg2JyPZoLdyTWMHUEPYEGxSJVZgWUmDhNCTfySn9RnJtgvYvtA6KjkwkPZwUssoi6haAMjBSTp3",
  "key13": "jfmLSG65i8wTV6dsZWQ8bPcVhVM1xLxpbgCX426FhcXu2GAWDifh9rsee6owa6o3nNxPUWSdN3iCWCVVfaP3WN1",
  "key14": "Za285ei8HNasegMXWRXH2T9ge7eKJKaTQ7HaiweRm395u7UyhZ2BpNN53NWDwfo8rGbNDYnZ2G1mAuuEVXqh9Zw",
  "key15": "szd2cGfShxvDr8vJSWhSsdqxwhQLcKaX4ab5TMStAekxjEnzCnkFsA6EoNdUiBXLCcqWGLwRdo5AdbNhrMgZToD",
  "key16": "4mHbpDYv9TdLhdczsT2BPGxxwqBXVATYpQgHsadh6DpZCTG2hegqFeYbwb7oULW8iTCiQ8dVeuWdhEuKaReFF4pr",
  "key17": "3tTz42JCR9b7ffgYaz3xV1T8WWbhGgd4kmXUZtrVZkdfhnDToWzMmjkFwchZd8sdTkdQkS9TUCEkCM5PQigPoZE",
  "key18": "526XT9XtD6gb7GMKbPxd8i1fk1sNHy6ct2QSsUhmLNp9vWKrustKdAMt85sxiLbivW22AxJ9Y4SMCHaksuogGMuY",
  "key19": "5FEcMc7bJ6Jzw2vUa7uYhWsdRVHCZEztr1jhg6HVyxi3cTBhUBnxtqvVQPFDQJvtgu5rZ61dpAWoeji9hBDMeRXQ",
  "key20": "5UpoPTemSxWnq9HBTgJAdRAfR2fzVdpTgsNNSFaetvTPZuvqDpx2ByBPtWF5TGVw655vR7XX8Wrn5YzugF4t3yaw",
  "key21": "5txLbZ7Y2EdAmCrQpnJ397kb96JsJ9iFGECuUozDMvqGfekzPrUhdHaQcA3ZJd1tc6oB9TcjsNTS6L23DqvNckcY",
  "key22": "2p1AMndCViXF6ieA5qgEjxagLcURuqoJqZ4GtzCzUGWZdbxn5z6Lf3Ki4a5kGM3sa3dzZwyo4a3cGtghEi6Kvmam",
  "key23": "22BD2VHQaCiWBeksEWuFGYmpANifrPJYsXmRGpY34X3RmCY6SHpJs64vRKkLG3QUEfhwqptWGN7cchequbSPyG5K",
  "key24": "34phFUVrscsnyKRYWy5u2uuyTqCDtS3scQ5mViC4WtLP69nvKYNFZWfk9D2L16W4Tupc7XCMtj7mdeaCJrQmw3Z1",
  "key25": "JBFKkzYdkGT94HnvMsbBjsbZVTd71pcDiFS487Hr2bR1RoD5QYaCFBe9RF8bix3tvJWMmy17WpnovgnnDhuhyWh",
  "key26": "3HzCVFXDdnioNWM98A91smzkqoRY8iDaN4uPvULbQc7YtmLdrkmnQngF4w7JN79QVMZWwsioVDG5PmEuMmiDFJtc",
  "key27": "3czhpBKTwi7TaMvZTBx4mCLjs6dbxMd1TgtP5oddQE6ddy89r1GxAnBvTDgUQHqfCKVpprNwdshJfKeiVMNS67Ea",
  "key28": "24vhiYPYn9dcfRh4nnddKjd6vgEPwbNpLsQjs2AXaNVLHNY78WdUV6AmMMBt63B4bbj3UDyA42F73AdVAZ6SpVhm",
  "key29": "2KccQPwKZ5gbj1z42V3sMDqP4JepwG9VdD9Z6cboNfxkyjBfJSgJFfPhvCV73sgGZ1txDNwZjHNzbXeezjKEPLLo",
  "key30": "486YBv7L6bUPuG7sU6HsSRc9pnTyvnaGEK1cUHhQcKs12PEpuSbf5q91c2UqKhK2RB2gggsqy1TscxGZg1LKhFQC",
  "key31": "567ZMCuDBUrC654TJLs9ysCDhXWEorjey9ZBZApiVQ9sHECN3cigrRkU8ynk6vHRNMrhFJNL9BHZ6iHNbGVspbj2",
  "key32": "nExqLBiE9vakwwYn8rDs71gZfBkxwbHeejghjo6B6eboQQ45qwjubpxkdD27uNsdFEZvJHGzPfciBZ3MeLN7fmV",
  "key33": "XGmtgeXwbJLR6NFnoDEpkPgi5xLz8bTCVauPB5WRaYs7Cy44K5jMBoZwCeNV1cMAg6npEMSDrkkoodUheENkoGK",
  "key34": "2SzYtcokvwAfWEp5mJG1Q8nDEaJtMXgYRhqc2E4KDCv681bEU88UKVVvNqnGdWBAWkZSwXvWvEjJpXGBEiXRyMbn",
  "key35": "7FsLs1EbKEqQBo8ePpbH4WVLssaBe32vLszgjFSaApmiq2BrsWgdVd7b4MJp4BfuPLVUm9KyzSPRBJjjSPDnCER",
  "key36": "48BbfyxuR2Qru8uWiXc6zX6uf9jebuj29eL7HVfpr1bgCuUhCu33Jru2Kb5QAEDN6LzGmNUZPS8RbDJu27z53dDp",
  "key37": "4h8fbnjGDBmGKXhus36Nwmfj3qiVDi9rYqRiCM1kwKzYeSQ4PgQB9Uprog9wscdDndrTYzPb8zgR4xMWabhR5spB",
  "key38": "HyTqW5aEySJxaU8bHNNGDJ9m9S1NHaPw2mLZgRNrtJUdtYu8YqYw8SWyihBzr2fKBw18avNpW9CpSCgtF8BsnZk",
  "key39": "3v2p2tWmAPByiYKbXbe973Z6yEBfFVV1BWeGwvXny4pTvPrvby2XkWZ5xhyWvJkQhfUHC4ZkBkNiZncCiXT3YJ5n",
  "key40": "4rzVUPWJVHEc8qGgY6VyrkfrEPcm7Y56swd3PcNDuFpiLwGJYxPaVQHaJBvH2eeYYnrjWNsgPAR3TXvVKjuqzyFs",
  "key41": "2ReQg4tPwpG2ku1ezc6M4pB5XeRQ1SF2Pc72iCxkxMVCrhW4VgshkdQmPN567ZBGrG5YQnowdz7Mtbe5HN9m1qDF",
  "key42": "4YXcSfauFVBS1UEoMUHfcbEdpuSwGW6idEEif3ndTmAVbCBKR1x1irS7AfnLGXnGXsr8GpyRPXhToxyQENxbn54g",
  "key43": "4FtKiyPNJihAHAgJVQA5huUbDCA4HRispQ6GVNhSycQeJiUcMH6gQkNYFkBHAjBkm7nXyF2GY9vgNoFNGasLWTg9",
  "key44": "5PEUmJWP6CJrWcQpqbfn36qJY6WWPWyd6K8cDKEEGsauGbqi6AuCwkttztiGBj9Kgvj8jg5vsdYfYKZEJ9GhN6MY",
  "key45": "3wKLZ93bCpGdMtp41ynMd84k2NdvGjohsxq9tp499fyUby6pq5p4FAjsHVsgtQmwTqvSj9dPsRoVeSYjVhzWBT8T",
  "key46": "4CCsmHwjyqpxuovVtdiRhzCaXdTEadMqvNG7mGGpDXibx7QKXDBJUFzycD1jcA8LktXAypk8EDh14qvgqjL1T1C"
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
