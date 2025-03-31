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
    "JDGdD3FgnQeNUsnok7SqXngctX3kvFUZASVPLKQpG8tLmEGn4ES4kTHK4XqP9QViVDiPFrpdZDG6JdmieSmsjqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fitZVYEhy27ACB1ZVG6jQTuSsB9cSirCrgHei6LGNmAxukjiYT1HDeWpf1jkU8D6pHZ1w46ndwniE5hDJ52Pfkm",
  "key1": "Cr7NzRwJQXrLSsfm6KPZ53xbBTNVAai536ApAYJC41iTFBXBgReHQZCHcd8H7vhNHScwrxUeMSq3b4Yrig14spV",
  "key2": "332Jk4PmDTbQW1dhAKUr8me6u2ALiXZveVf7UFP23sp93F4HmwYUVgtigvhsdPp1ebJbvkXwnAVQ7MAMHg9BnHLe",
  "key3": "4vCCPBsr2PsZKzFkAqqmhcvjTd4nTF5NvA4D5PzRoyrXizYtFAbJZVuNcKgDW2kn3oyccmALhY9JorTS1P3m2ULh",
  "key4": "3A9dCTsnAbLTAsNL4LXM1378NkUf2saYBuixiknSSxpYk771jrHPThUy22WfbEcpWayazggUN1Dsf7xJnnpFSFYM",
  "key5": "5Kn9NUZFRrU9oFn2wiKHnZMmKusDuYwQCnHL6prpQdNYmVgztkaUZzJ5EsRzC7PZiDsx4KJ1eCrARtazgdfqqeKb",
  "key6": "5AMKrZscr9RxQyoJLPnGFmWfhneuoC2t3ju6mtWugr7pVJtmFRRjnP6tyrhfg4iYDjgdnH7N1dv55g69ijLHS3py",
  "key7": "uKLmq1pvY1VxB1Jk9gwmaTWtJRcGPs1iS5df51dyvPAfnRg2pCs1p5QJo9QiTcfPezaQEduSDfqnxhGtXc8ENvK",
  "key8": "4ky8m93JcPXhTmLWydM6WJkVtNJQmvjDSqDgdP9kdbNCcXK58ArcRgAivs2VsrL5dQuLiWS7PHhbzcBEKoEjFaL2",
  "key9": "iwjgNuzfiz2t69MwDKUxdqZojfqM1K7BJK9kt8EXyABy9vTgn1JDAbt7QZeRjcKvaPpZ55yWwC6U6PBoMRvc1Ea",
  "key10": "ib1cS9J7fUR85rDYbfHiNCGUabvvdAZWhocmY5D9mgpSUQYqS8tFiodx93dk3UVXmG3spF5bTQ5oh7hegGnJ9YE",
  "key11": "4ij6UGFf22TbZNRYfvA8HJaBtMc31dcED3EHVAnF2sqmaYRXnAELJYYpVABi7rgpCUZZUaFkv1o7KV3V4DygU1TG",
  "key12": "4sR4o98pR2V596vU18jXSxAYpTXrh7E9Xy2yHtVvR5AGCX8qjbCrUpoKSSYRCA1aXiZsZ98VQYA3Q87uXuArpaEM",
  "key13": "4xmSYp9aidrZ7UmUZxQAQAjMbwqwNmyQ6vvVqLHoKpegRNHbpHog9DzbeuiMRKx1twhqe3C9Ne8PArj6PYNrodQ5",
  "key14": "3Ed2f7a7DXQc5WntfLchpdKLX2gsq6hX6MWz2hhZkNiRYkJWRCv3Uxw55tNTyFGQ6fSidiuurNn6SaEMPCdFAapW",
  "key15": "NRYJkG3vzCZDFrBqEfGc1fFL5JDjyhBGEec7a3tDEoxxCFZg9BNAPeRMTFPnrowVspE81SbaqRRKNAXLcAwE3rg",
  "key16": "3HncK42ZEgRPLJeh91yAFUyerPEnmXqmvuaAUg3yfUq6kBvkeNd8aU14TtdVjce8iT3gF85jj8tFi9FNqXZT567a",
  "key17": "4ngteuNZrP8tbKRPU9MQZpapmtD1VWLWCvjtHuqSUQKik87Bk4b26jYo6AfbWiUcskJWp7hVNTqe8p3mMuWYu1oy",
  "key18": "3p2hwfVGhoci3sZ9s6vqJ8fKgprV5SbRYroKvDM9hLpz89Rs1jA4yhoDom1LDojgqaKtdghwiFLVQhEuheRWhWyk",
  "key19": "4LA1TNYmx9DauuWweqDaatkxbuhT5iQ2Lz68j4Y4q5bFhCVw4X4BjCYirGLyy8gv3D3BJhny4HHpgokY5anGfeo9",
  "key20": "4Qo1uwY1PSRZvXkRJnxt6pUNoE3KjUvdePBsf44YK2po3cYJkVenwmS78K4UiMdxtaEizdtn54GdZET7quj1iRp2",
  "key21": "4pE19rCJdwerafVNE7qJN29S2WXwhVVxRUWezNDkw4rqAFW7riMaG1AEidfJnbB2JtRiGG8sc3QM8mhnAxh1n6Q2",
  "key22": "WQRvcX6ChUAkQZsyT5HvvGWvZjKFHwQLWjAabqmorchgmx5XRcDCJp5R8fZJrLPXjNW8ARQTYkHRzYXfGWpvYdT",
  "key23": "3wr5AzvTMWht26heoHF3Vi9NEooUF8FBkn3t1dikcdsAf9uWS19BYApfME4K44m9QW9XFWmFjyEGHkkbfpMehGRM",
  "key24": "o5SUf6F91zF1fJEghRVtRhnnx69xVuYEjbFyxLh4GRj8Kd2Acd6mRusdKhAWBRdTEUX9AQHMBMCrDH5eumQ33SK",
  "key25": "4GwCbSAYgpS4NdM2RCeCjxxmUQ9qpohmt3ZCS7N2Q52T18ojQLUvKp43y9gNDB4CbgvYBkHZka3VhqTm69NNaSRa",
  "key26": "eNvBH2h9MZB2NgFg4nAPa6LMhsyAingLujfMsE4cvnm4qiPTZF6akvT8rrF98KXpUbFgNZExpRisFVy2vK921GM",
  "key27": "4HhvMd7uhD37GBhucNLRfUtHDnFdJzFr41cXcujpKYL5uXvAa6gTCj5p6mVbhZ6yAJK5smTFyvRADwqMph38BdD5",
  "key28": "Wgpy56CUAFYDBppjDuhK1Ar9UoVBbqwCtTCAXymXjriehDvr3rvmbq6fLnB4RD2UczJsTt78bEbZ9V3g9UgP1Zk",
  "key29": "3toL8KjEwdQ3YkF9mz4XXxVA5s3Th5kSt25g1s44VLbHauMck3APK9MEirwNhK2PKn6txktpvaru4sNwTvBcfjpE",
  "key30": "4nWKLLKEJx2FDCBDPd4kAkbPujYbr98xqRMoRaYvYbCbabCfrY3X4FVgV2FGuBCh4i9JmzkqHp5fEs4DrBpBS1U4",
  "key31": "3AcLj6yEhdundiCJpZ5T8vKxwrb8hES4ChBceDc3wZLzvryUJTogyf3NZJRAPu2HZjqy8G3v3KVHfRvfihaynwfp",
  "key32": "5i61JD9yTtvwV1jRpsGWwbavAUPTr2oh6C5qLqaGd6wsjEJmb2RL7o75wH2ZiS2bfZufbJ7QuvFMYL3knZi2qEKv",
  "key33": "3yHGQkv6pUPweGaLDGgDJWxANVYcXYkE679B3Chvsc6Q8ATPnVrZyUtBovpnR5dTHFc6Zh7B7NpdeTNZLBhwgMgN",
  "key34": "58fhsRQTrzSDdLkVXZVyAb916JyiAC266wU6tTUNBNTSg73nV264VDgimdB5PeDkBnVWfUj7mkdyHUnGfV8kw2kD",
  "key35": "vqFHkGJd5N8VLWw5puvYQqiM9DCfcFuCZh23jGL5pEavSTaNKhbrEhnFLxjbJr2d4xg7UmuxFMZMnMRFfsJ6KVa",
  "key36": "3ES4rtdtjJMzLjsKPRTSW3WZMWtYoevcgX5GVXZLQ981qWfSPF5fpk2Ne3ukzYoRDuiVkMrCzLiwJcRWtKx3HUJy",
  "key37": "48SPfFtWyvWifZxNbibkWkgP2tTgimHhcTF6e9BF2iz6iCVAZVY87baHcE4rGuCUzW7MUVwzQm3oMJLmvU8Wb1da",
  "key38": "4DmsNBoXWYsdUBXPLo8pkdZGSHK2nkGAgR2pkjpkX7SqHDgPqYW8b6my3GkJ3sqNnzrzFoqho5TMeJv6YZsi5X7P",
  "key39": "8RVsauhYnkfza7JmGK7dr4ncU9kif662f6tZ7CMAiRkqa4v9P9ynrJpmy8ZVoxb6Pc3NLT6oh9cBqGnkPHzdQSS",
  "key40": "M7LEXPdhtDSuD9W3pfu1DUDyfYEnceqvWBkFeWFXYAZkyqZo7ZMxP759hgh24xTK9Wmv8zsHFz6ukkPnq5AeL9V",
  "key41": "XcwV9oEaYq6CMRs3XD4fXNdEq8p49v7NPPcSMPVcZuAiopLxm6hF5F29hqQLCDnj97e151FCv6fx2AFrtLacDJR",
  "key42": "21jQtTbUF1bBNQf96EnvUGqZrvqBkMcBc9ddaJqt5Do1prKcMNqoy8g6kVhw4DuqQUmuHZxE4G4maea2TF7waStN",
  "key43": "4PnLZAMZbhyNWJUW4jScAJWckQAsxxYuGpsp37P511SLaskCVA2ogX3wvxNgAVG1o8GKyVPFPzxct9KUtxYWxLfh",
  "key44": "4qfqsDBUNcaQBqWLYp8xJvfW9pb9rPrpXamkdCqEp378AzAo3x5kZP9Fw9Si6zsKfiaFL2mQ8GgyypMiThd91CNH",
  "key45": "2SabfGhEnGbspJp6GjKpJXJcS6bZaNkCA6HfKtPeLkzjjYcMTKQ8o1WUNoVcx1acYFPiakJ3mDLDN4KwcnNKy66",
  "key46": "3fEGcLxHDvpiSM7XXVSXmLy7NxgLXB4nBSeRN78qWuU6kh3g7i8tcDcmMT2Zi6pxHaD91fyeD74tRiUyXGv59tQ9",
  "key47": "4kzSVLxq7Ez9TYU6tXcJ7p3zmMWpk64bfCmRjHtrWeAeCxohdwYu3TFvwJSkHe8ZdXh4YFfYTQGkwJqkf2fdL7eu"
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
