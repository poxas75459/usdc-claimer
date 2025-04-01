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
    "4WgWPAr9WPNqamRWhYLoEva2d1TLvP2jCyRpKPSSMFdLTbYHfMjdC9EiK99VWoUb7968kkvV4Vwr3z3A3iN6W8kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrmY2epHLNk7gYZeNT99WFFyLLCVoRfA6u16mg8EhDgDKBaGzaQU5upb5ybqoGcLHZSqGnfhUrZbyUBqXATnGdk",
  "key1": "5TtAwEWJH3aKCCYQ8RVQnAxTJ2CQ6wXFi3GLK4DBpPGkTmLBBr6fTaKKJQq2x4Kx2d3F2iLjbFXPTLrfU1Zs9XGG",
  "key2": "56acFgJRuQjSa5abC72SHkM5eR7oiq9i1xbTbgsHWKKMuHrPVhCp9tGc9WiUnmkYZRdePPwXUdFQtrhtsN8GPYVG",
  "key3": "2MwQL7pnr7LPX1yfCABtHjWysqhkrPRCeRLKszBjfKm9Nwxk9CdjitsxAUqT3G1HePrrrTPysJCENKHsw6srsYFS",
  "key4": "5ekucTe4udg51zXkGLWUdvRa3soUknMj2eATLi73zeFdpJJoya8goSEr234prw1q4UeB9qzBNUgakMBfmgdWwdxi",
  "key5": "PTka3B6rr4WfwjVD4Mm645So9KrCPgnnoVkHkB6BU3Bngv5KQqfLY59gHo7k2RyG4bEXRe7n8iWJQEPcn6fjWQ6",
  "key6": "5csn4usgf496QLrwBvwPp9AGMWU9koyKiJ7ygsCyxk25h7jBi4ZvPw3w9gsqB65yRYSLnUw58mMM41f7mUzwbENy",
  "key7": "2qbdJXBwSpgcs6s4SjuL4sJmqoSFqF71rSfipwMHjZ2pzuo8WGkRvGQHpaxQLkoQcqJwbM9SrATaDzgCAWphPRR",
  "key8": "4Be9RE1kgHEzrv32vfE63MuicR2RA9BHqjKvAbwF2gbKLWjJGF9G8Dhqchuf9a1ra8W6n7GXocJ1W2LNpwWGR2ze",
  "key9": "3BUcLTLoVHe5Ah3nW2ZDo3SjTDzKqwgiYDfRup1nkvgysuZiq3rpGD2pvLebgqj9FSeRDtZMu39bJ17UExAUYL3k",
  "key10": "38RPbj5VNDyCLbEHnszhK51UgHwRwd9aLYKQ5Wr7P3SeWRCviT4zvcqmQKRkcigjUgbBpfQzV5iV5y9NzpNnG9rW",
  "key11": "69rYdh4AoBGJkVSqLtDGEcyuPL5ZJd6ciT9CfKuz5keaeHX1WHBQAA3VKRpKmWk94q4jjwmkrijzgh1rmbY1vff",
  "key12": "AHnhD9UTyKLM4fVLnGUVgpT43NTuHPxg9nPTRXgmFARz3XbQB8FRp66qMe5uaJinH2pcpgUwpTC1izDkZdrb8e6",
  "key13": "5JDGPqjJ4C1WGL3CrjXnMLUvJGzzqHChw5L7BpXWnhTdo3nkg8cPVDkSBVakzckgAWydxhfuKx3WAJAqfenqMqEf",
  "key14": "3Xh2tcDy2j3S1Q9rc6qkAXhSczukpyCRKyNYadCbi6FqyZQCfLD5nhFKuQXvdfyczq69vnqamLvgDhNKkfJj2LKb",
  "key15": "2Fn34vqEhZikvrhm3WQtG7g1mFNYoqhqt7b2QG1VEg2m5jx44w7CHcMFDy7Y6Brh84mypb51gm7G8c8LoNkeuCz5",
  "key16": "2d94vKSKhSUcVFgKskmtXYgE9ALTQMB1oyfyqce5kP7ACNvPkkUfURJFTJWYARnmkKTyVfx6sfJrAr2JD4JNwyhP",
  "key17": "3PdDpN1jKS8zDpyMrGNbMFTJH5e54UEve7jm1Mkpbo9dDgz4fRuh25QYS8HPjo5nLRMJ1A8m4tX5CCQjcRoNmMpZ",
  "key18": "eHjWZfPB1j93HjJKUCBBn7U32EFGXmLvTrfh93x8sAawHsnnZWi7cFgisxZpxVA9LWq6u4FGyALpaduZ8VN5rsX",
  "key19": "9X3wmQKX9SEtsttDxP8kKxVSEazXC4Z3nSTKUH5hFEXAusxLHUMHa6NkvFnod39q26nTFioEhJWAKywkNsyPQB9",
  "key20": "3UC2LHCmNJsak1N5nqT2jL1j8fJgdy7khiyaKygVykCUfFSynV9ZL3kAStpDZXD3T9xgZezCb5WHTkHXedTEuXrB",
  "key21": "i8wM34Z7FkJknoUVVybSTSFFubQBkjfoLk2LvDhyN4ic2Jcmdj8KqNQ5BFxn9RwBpLmaAhTePYuN2kzAPd9daAy",
  "key22": "4znvJ84AJENJto8px39a63C4N7tQMfnbDcJE5oLUieXCC3QoHzdWZFZJVxNLzdBPTjzK3ghs1Xh3CnFWk8Dz2ujv",
  "key23": "2W1aQMipSVVNxxhFrB66FfEMdQkk96ze8eiZkNec4oqcFg7Q8r35eAawRFavpTbSDozH7sp5ueB6ei6qfppQXeGE",
  "key24": "2m9ENYiEhVvwLCyKV3iXApgFgWHznVi5tZGzcxj5DBYGV7Z1iYaTADRLZ6ZwrbgsVzSYvjDqvMqKSm3Mo2g78Gac",
  "key25": "3vVnshbbvgsFHCE1CwA87PYbhiaxD1W9EAAQycv5A1nge28byVDcP7BVkwS9iSW2D3PjT3AWq43HxYxJzjcQLFX7",
  "key26": "4T4zu9uuAZDvFuo2YMGDmuLeddpGGfnKgCnJ8qKtrNiGbkQQcvzqCM7pQxY2Bxx1EN2YDutDMgRDAW4R6reRn8ei",
  "key27": "3bffPVpgPpDjr9iVqGDqmRGiW2Ymn8Mjcr2ecptBW2x6KsFrE5LEjYprWtxYei8qwWA3bR5Aj4RnxMQiiaYFsjZi",
  "key28": "56S9mfq4jb78tXeRSn4gT5SBs9rHSQoF7Uqy8RnwNE4qopAJeBGnDuttPC1gHEufZUiGqB6PsM2SNAzNYgvjc3TQ",
  "key29": "4yyfphwZDLF9MmusXc6JLCcfwP59hdZm2E1hNcfxoSEv9HJyGHyMWjfyaY3yBGm18p383kDZXRAme7mVQEQoT1kN",
  "key30": "3Mx2jRJxyZTNm1DUfyNjXJ5baptp8mQAhbmLhZjouhWMFobfyDqqYpjZRjDDwsPXzUVujC4z7Jch8FaMB7v6sX47",
  "key31": "5HxEpMSytbAc3eEdhUBEj5XaCXcVLVU4xncjxLCujMFxFP9rA9FRXzJXZZjEwZ3LzcEiCR3geB5yhMKJspu6CGSv",
  "key32": "4Bw27k6JSecDLRGfREADsby6cVK4cCKd8pAvXzU9YNHSjEbnZJxW6bzXEnUp1sZvSiexNadpufYGSeMZ82EAoFYq",
  "key33": "3wFUtXKQ2bNtLHGMNQtsmaaNqKPz4tTj4qJ33zKWm6cTwA5a3S9qjnkgBZyTN2idgGsUfWW3sZE4KD3Br53YF63S",
  "key34": "5wZ8UoTR58jkwYu1rmCP4DWBezfQx7cocfgbZZJZjfc1NvWye3TwkhJECtzHgKcTwQnHuPMqBpA1XWBg3cYVEHPf",
  "key35": "3Dx2xSUgjqAiNNaj7QhXtFjSfZjW4zrS33CdnjsttpFm4RyDuyF6sTMMXE2TqRQSGw5mdvGjDF5qvwzHmY5duz9T",
  "key36": "2jZYXttVwA1LtHHre971321JRuX4fH7tvVU5GEepc6YHmDRqrXYnEhVqReCHvMpPTKAg5YAZRppEx2rex9G7MvtV",
  "key37": "3G2Ht2TKLhYUpMoV9fHR318f8kPH1Hk8FnftyZjVZCmo3dN9qdmEEgan2UNXL2BGENUyU8y7vpB5baHxkPC7huM1",
  "key38": "596i3186K9Ko4H6nHJuWVuSxQ5qS1ixxYQYhsjhNvgroARb1bMfg3RhHPeHcZGLtxgh24yF3QgmSSUTbjmLQkhUY",
  "key39": "48gjHXvaVqbyFwXkUwkC2jMzBugRBWjQaMy57yXiAR32DGExoU8i1uJBRR4nWLMtvwMLC9adTenENsWh8yLZMfxv",
  "key40": "5eV3Br1sY9YFDYWUK9ryQ4bdPamVvzhEBmMg3fcnvEvaekhBqqXWaBJnaiN2nDaFGbdkW4maM7y8R9iKn6kpYE9z",
  "key41": "5GKv1RLNc8CoX3bje5YQtJmtfFRresq91QfCkhDzSjsDhmNhGjPCTNksRgefxTUdyb85DZWEf7Gj4Dd4GfT3RFJD",
  "key42": "4sWJsZuLtUpAxiq3L96P4JJp6iT7CCSRg7rrad4PCYuzVPjGA4x8aeDckPFqFeMJqfREbvmJD1TXb6NiucgDVV71",
  "key43": "gNSdgBdDHL9NN55VjMmHa6Tfkh3HrGmrihCq2GkzcbYsuxWV2ciop8eyDRhxVApuPHyLMrsjprZ7qhTTdD4iiCT",
  "key44": "4awqnjq7NvMBhup4gn5UvHyzwcS2jtDPaERsE4YzLV7r1rxKBKjWW9RkNF4wk7mFahuTA2mgCEFtRbULHnAdgwmw",
  "key45": "4pfFC2uK7iuB1MwUTsCcXARSLYQimpFHZViHteuS6Q4Kme51UqVwJDUsC4UF4XZXTaSLCrcvNidRdpYPTTmGVSX5",
  "key46": "5tzp7k81e7t5kWi95QqosgpA5WCfktotW2myww5ssQDjbDNRi9J2TpEEAExqg6i12bTP7KATH1mzXjCb54acr9GZ",
  "key47": "2h5VHv5jHLnhwqGfkWJYd2YAuMn6JDR8Dqw1TnHFF7wgc33LwRtfZ2qK94uHZjtfmPtHnCkbDzQY8CA6S22SW4wg"
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
