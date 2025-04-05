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
    "HJEbAgEPdNUgY1dyuA8q9dq8wQzbHuYvbhNt2nnxDHMpno61MKLDqcmSmU5FeCYjLRewnssPj5uicety6Ar8Nuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2hi4M7Pz3M7oBBkSdJ7dvSkALmHQxa9XT8GHk3teKunGdg9hZ6qeGt5rqyPTT3aXDv6oTqTcjA19GjdonqTFMx",
  "key1": "4gnKDdehaFQ5Xr4iWP1h73zjw25sUVpWXTRWgkXzZgA2NgLMbJgx2sYhLpw17UKBqNwvhf9D6Fx5wFVKLRhbGKni",
  "key2": "2GZMkNe8yuDuKpZeTomwEtr6wikyAp5wGuVRnzXcZYJXvS2x2geHVwYJ9B9qbw6fM1B9q6NbtykzR9DERHWBVATC",
  "key3": "2AFvLRVTERXJtfwroGsT2jktTPSQNfC7t8iYpWSAz6jCA7AUnNVoNHJZDJbmNV9i1VR8S8erBQfqMyMwZ4Us2q4i",
  "key4": "uVc89Z6pe31CkQf5ygbyj3BwEVoZmBB2ephjLu9PKVH46n23uSe7JcdTFGNiHcit2Wy2Xsg3NE97ReLVMbHHuyE",
  "key5": "n4bftYiYaLnkWxEhXTaFjbKDWAf2H3qgnWTMqgkyVeKnj9noNW9DXDrMeCycqqKvX2dq2755EUPkUc7VunQgkHx",
  "key6": "5rT4fKzWGBxUC3rHWjyfJfEQzPcwSSjxEzLJNKdXik9cyrgBCHJJ9HYfUdHYShrWohQxWVY5fsHxdQc8jsWmJcKL",
  "key7": "kykJBZiRcb6CDyLgQ7wKSZHTRcUiVVmZKNJxB1eySBguo1mfFByiLZjuF2TFGFi46xYTenht8UpMAdbZUXQAwUm",
  "key8": "2gw7bTYwZVCMdzTK4rANgmE5tFhme7mRsfiLeCXUWnqM8Gpd7co7jR2R3bQ1xzkF6RiueP6dfSqykS1668raKkTc",
  "key9": "5tJVTCCvg1YS6bKzvJKQqFQh4T2vDAPpaTAmQcTj9Ltxn3zwxL993673dWwq9GsRaJ1x2VvXt5TZ53kVWsDdChWW",
  "key10": "AxkDNJGVbqGnExG1vwDxsJryXK6nTAxiQ3zWcEGoEW3yMs4znBaPbur4ekQnJunfH7ymJ7uQx9B7UMiWTDHDs1e",
  "key11": "2GzKacjmo74qkCaKkXRFaDSJxn4Ln3eSBTLLgnXYVtkk8pqreUNn9t6m536i5BC5E8St3y2Zwe4TefjjoW4VQpwJ",
  "key12": "2byTvo9AwnpA4NjxYQCh2iMNvnuXVS2946hUpf8oRyxZyqAp8tHwoXkEogDRaRCw2dA9SzZGW8yR6uTbxA94dbQQ",
  "key13": "cqtwdw4sf7aqxsrzEBbBzpCvKzwvmV881ZP3bFQFpQH4LH152vk4GqGXQpXAKusMk86oCJMiLy8Tu6QuJCTjc7N",
  "key14": "4Ms6r8mNJaq41Qd7ZEPEehScBY4S2EsmBRwwL8yMMBnxeYzgy1jAiYs868HV9AdDGUJ9Lz4k49EYbRzijB6AVg7p",
  "key15": "5oQUKETf32Knah66P4uDaJXwju23Q9QV3u43jW7B6CFRkostZNxYXDq9HbET1t4wDsZRemHmYnVixtWQMBbVGMWM",
  "key16": "q763AiGiPSUF3Dtk4ZrnDHs9feZiZrHRD87WJQRwS9t5wcKoZu7NfRGQti5L2AeiqhL89qqxSUyCut9LuUd6SL3",
  "key17": "2aZHU8EZHvyqd6NLCNsSzSVmFDX7Tv3QZs8VUHZkofLGTy9gXkYhd8GA65YDSBXoiiagEVTuQj4DnnD1KSoVQMCD",
  "key18": "65aYKHMA69jWcmsDhuTs93vDqU2vYCCCzcS53bXBpTut17zruE58Us74HFz7dxWudUpNSTBCruTW7nErhRkX9BAL",
  "key19": "2BpAFNarnG8LnLyP1bUGcpzFiBbtVmwuZgbrZAyAGrg1264jwwtnaUgf7vQVfjK1EHdxBxycF1vjq2gsvF1x9zNL",
  "key20": "7chkANCA6E4VG2oVfgunXqWsAtoWd9K3jyN15HK7yiP32vhACdgWHWRBmjqSnVQ2fR6Sif8CMGEw6vYdGV6QMsv",
  "key21": "4ySFqimoJ7PRoLjbH1WXKzbmY6jDRSBwUpfUFQ6PkTwcA876KjrB5M3fBVd9qdqjixToQcPkr3KivkVXrTNeoXBa",
  "key22": "45pDAsw3wftes3THfuJFhJbBMdoXxph2okpyWDSi2XLJmFpssdQ5d97nW2TJCKjyZvPnwnKNhf2MhcX8ooY6Nmva",
  "key23": "22Ln8sYfdCTrtmtwGmK7Wu82JiaLtiBHmHjtME72nwUkyPTA95CNj1fdPvSwNi3buiyEfekhFqYKsBR59t43WHY3",
  "key24": "5HQ855up4HRme4EsSixuwdNvfvKuNyjA3956QcFEw1u4quhmfa2tLxHJ2jJ3iswAMYEJMfPmouoXh2dMFSzPBcNK",
  "key25": "3YGnHccBWU8hRiKwWvUfoY2AkUmAhBFSGXigPHxw2Nzn4YQmMEzD78v3HUxiKMhjMubEsohx5tYh5SLFcNLNSstR",
  "key26": "2wwu6bjFZ1s7JVjbtdKpmqLrF7YkV4byp1DuoSh4XNsMGLKUrNHZosGyxPZuwfzh9n5TF9CQR27njhyFKL3XuSuu",
  "key27": "4Et51GJfgVm8ZWRz5VVwAHVHY4TA1kUJiGTJ3bZHzsbyooyAMQXcNiGWR9r8KW6sVhsnyRUKuYs9pyd4DtFT2aLf",
  "key28": "4h2BJFyn3hm2Vurv1JgvCtAAvyFC2rAx6QmWQSicHThaX762GFmeoEmzJQQnAoMMe8HnEZecZWZ5YHF2SXTnXpbW",
  "key29": "5dWunev9D4i4BTzdc7qd99xVSGmPSETSBurbYPykDWXXKfHZZUTaDzfWxnQebeHXD3kHDoTg7oRHmEQZzkhktuDs",
  "key30": "4abPGUfZCSQvaRbjTt9fAgcH2Ujt7KBxDzGdd6KaJ1sX7uSZFnQAFRAXnRibBDUieZVqLKwkVGBw9ckhXawdXN5p",
  "key31": "4QhiC999XDFPK6tEc4U3P5zDXbwmpyPmKb5vjjSs8Q8NasngMxFxfb6682KrfPPAy9nnX4CBRoCcRMJwsXhwkKac",
  "key32": "3mWW67MkkUqb43pyRaJvuTLxrGgxZMhM52S2iTmxCDZE45ySgZiCmyVgAUtvXpSmDwwAdiZpSLizLTeJjU3Wj84D",
  "key33": "2DNGb6jgXj67vkUj4Zx4y8wZvnL8gw7sFVUwpCipByA9ZZ5YkgeoEWM3xMt6xyzF7E5uRCoiqum3gjmnjgevoXs3",
  "key34": "SDPRmnGCQaecXppRiAhs4gbHtZbWfXisjaG3sTxfSt9BHzWz9HM2RxW2h652jU6g4CGvcCqWErW4QhQCSdxBmE1",
  "key35": "3tKUHjDpg5kPCz35AY7GRLXgK8e4AqCRmB7ZJpApc32QgbCCiYtJNa7qmhBHemn7jKcyY7oFVYjJ7bxV5PmxwitW",
  "key36": "6455Lc6FeVop8qGDNetJapUEjQ5iPRXLhEG9aZaqQcxUaSfQf8ucv5BSnPkhzGThwaLLPsaPkUKBNJMbPueLrvaR",
  "key37": "5wTMtE1yCEQR5QFrTn2M6M4LchJ8CNVwgwfkDiQtsBGjxCfn5bQo7EdEoe8YU8HCXiqS2Az4VdR59oesmEkVP5zR",
  "key38": "5mA4cSXnVVpsocDRgveyerFzPKHDQ1mSZV27wL3b7a4Q8EbTXmDrD5QpAS35hgcRhXp7NLDgdAyupPPpXqEB2aQJ",
  "key39": "2H8fej55p69KuEonrzEKvJ3S9RpAdHogMoEaWTcNJ7hga4zMamH3BcZUmCQdoqkNuhp3ZsWC9YgHCMcDL1kZHPhr",
  "key40": "5hvbNF149SwDUVK5GvSNp5PaCbAfSfbJu9HxMeCMR4uqQCENSSApPDorwmku7VtXhywFacZudS51ybvC7xGLi9pj",
  "key41": "mjyw2THW9ydstPszMXH3VMLvy4ZcvNMrbM2qvekdwxGDDgwtQE3VxPmwuddK3RmbVhcPNQjq38JYBFYp8x2CVos",
  "key42": "22FmjmnpqtvtW4vDw5CfzHq5FtYvKoCjDULiQxXLnkiU1uYxwSGfci5g8wnTne9AfvCmR9cgB2iot8RHPUJb8kgE",
  "key43": "3or1KfR6sByJL5a61ZZU8gkPLwtea4TWP5Qv7U2tXCtsKbUqgVfDbVZNG9WfurMWHqrkiLqZySYMraLTJLPU1Zr6",
  "key44": "4G79LXQZaXxEU8HkkZ11D21eG9Fyembo2gbcNsoeKA4N5Mn9YAo1sdBa6vSgFdyPKAnVfKVkXkCN2K2WcmuRQBtn",
  "key45": "5veqAaUjePzJ3KKd6T4767zxgnhFpNavNz9AJ2HcUHLSwA9nonRnkR66Rb3cVzgvCy1RP7mVUwXeBUdsj9Z6qKK2",
  "key46": "3hHoXiFs8xxUBwpnXGhtj6o7CfJSvZMHckUQspuMBbximAX41oaMQKwHKhTFg9pkpnRVCfCsoxGretWZHHB4vXip",
  "key47": "qHUrBVrMJQYLvTCJegQY269RL3aNy1sZRQMaiJHePYBgXyjLnRaxqZodyZ6zKNsriD2FpVAir6gWk5APR2WsfDH"
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
