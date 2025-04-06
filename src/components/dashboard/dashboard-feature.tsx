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
    "4wLWAbX11wQgU7q1Yk84wvuktvV5oJd4QQGvtGoJgzR4vdH4dGAbubz3VLaqZVZpsHjezMbQgVn6HcMEM8VAv2R1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43GZyUCf9RZY9GVyfN3442wdwKVcEsWh7h9ctbDRo9Kss8hPAEMEbg6yxkiPBvmP4dMssBqFvdnqZiQNimuwty5f",
  "key1": "1uibpW5FDVKf44TqY2f9mNN3x9Wnduyo7K7eJqAxyCpaaWesLFuDTicDHd1hAYXDZX21DqVwsfh9Te5SheWshrR",
  "key2": "5WfZgYWVBbo6YgeSeCF6a2Np2nmedGwRVXL5jyev26RAxw2ETdCcVMQcKieRSryimQwG43QyN5hBgjekMYsHyEMy",
  "key3": "3i32PaJ5cX5azcuybQ9S22CGxgM8KHuv24AMXzYbDZDjfWeAnr3w1eHXfVw73Fr2hdQKvXRpHFjasTGxagmaNaXS",
  "key4": "2Fr1EWaizcTLS1dF3zca9NBRTMycz2qSQH4ZxWBBjYWBhbM2mYf7NPzDP6pzGFvEsUB7SUmAWVBwjhXYPgyG6qLk",
  "key5": "3dBgpzYm34zgy86SWJWmzLf7W37qcfncigSZ1ZBcAqriFiXnkYD8iWvmEosKEumHG8PtxJVX28Uj3C4SPWaa6fR",
  "key6": "4kyNwWSa8Q8vWQFuw2UaqkF9g9Cu5fW7uszXD9AKKg9NP25iaw2TiDAsfTNuXPz5XEb7Ggm2QrmjJ7q3DtbCGVjt",
  "key7": "2X75pL3YEfjhyqUWiMdQApPN5AqevpdMpq8fJ67Awe3H2HzPLcdH8vx4mkv7X2XsWSwYhRbEDq3CfdkesE5EeTwu",
  "key8": "654hr7BMvTYyQwnfqsK2ptoX7yAnYq3Ho6udrZGkzu7RNbRnX2K9GigRhzEHzBVu6hP282cVVq8zWDuXTinYCfKg",
  "key9": "4P2kZGQweNfjZWJD3eUZ5GaA2egVi5bdZVKhWbhPMJtH4HyvniLUEFcgR2X9FCsMrp2bNnuFUjzWKD7hxu1dJ5pj",
  "key10": "5U45tCZfkVbxzrkBdnhRXemnzx5fKhZGvth1vGFmiBsToyAQ3vPFo2iZ8YVZ4xkP17t9ktWVTYZoUu3fhHMknoks",
  "key11": "31VNfU2ThWYupcVfU97wjJxPjpBNknXcBJawgYt84N5Bix2Zq2vdUfD3xFwNPyWzwK7Nn4oHhbaHwLxudRi1Jffa",
  "key12": "53a9XiZs2EEknTuo5qjnombqZNQm6NhSUrZmP33f2ZFAKcj3hj6HZ94VcnveMYJDoF9zSB9tauBie1MHuf2B8YHB",
  "key13": "3dXcFfKttNTFVpYmLT6vkLEoi3WXFqYsxJH4idnSS3n4s9bV2t36piEKPUr9TunntBHqfqAuctgfZza8hBi4D1Gt",
  "key14": "4i3KMDm1f8jBYyZuqS4g8HemCdEeVKzAXLQAc9ayPJfyS1KhoFCwuUVxsL2eiZNabHmiW4H8dfJvv9iJhorELPJE",
  "key15": "2P6ZHsCLjXBpprdNTThmyEG4hqj3Hvb4fdKuyGqf7zdaUpbn2isBKLXZucMZrX1CRrW2bSyKgqpJ6vAKKLwGTNNp",
  "key16": "5URR641L316pYnwdR2nswthB7HGxXbcm7L8ueETzweRaCiPNK6TNR6NTiANtdPzqiymqAaZdLD2SYgrythXqyMJb",
  "key17": "2HpWJaUeuQvjm8UAgFRMukDsDtyasheKQvhsBtJ3HnqpFmTZimaqry21G1TRgtEzpB9ZH6WA5Tv62QNqZhJkPxzp",
  "key18": "4ZGdUDTcYUUh16xbQ7AWa5tSLcQZYqxfywEnY3Py8xW6A9tmjfyAaTkkKoD4gHnUoiHeE6c2PUvtwzr3FL1M78cT",
  "key19": "3omErxAxwNbVJaxXeJU58kbmkLg6Xcho8EhTxK4eX9eUCBh9d6xXiYVxfkjrxhr4Rx7whE1sDH6AELTAviXbXNUv",
  "key20": "2Mf9pYmB8izr8DkaKYcgZcnx8GW9bBaDQ1gpwpmJmg2fmEWPEECfPjUx7BqN7EN9qHYKmMjg5uJ1TcE1FvCqQGcG",
  "key21": "2aaj7sVtH8GqbS2YovTTu6uj4bUkyDcwDnEezsjuQ3QaynPcjnv2KVeGSEWsJSZkxb5zqGfySak3BfKDSG62hs1",
  "key22": "5HEerGTM49zJndQwJrne9d4tDtjWw8DFzPRSmFL7MpFTpsMaTsMuVC682bTpjPTJBiMpPHonLNSYy1HQnrBhTbUf",
  "key23": "pk74AthMBKto5zh7utHjav5bhs8HzjFpWh6Ma56RFbix21RMuHQug7Sq1ufF62BK8k2a4Q2Wn7T3bUbUN3ANKdL",
  "key24": "3KU1t5XdumTj7ZCmkH1oVPbRYvNVRwr3d5m4WR6zyFPYg1PGrRmaoRNT4v87ZKcSXChdiYV7kWxcksWGQCsYcxy7",
  "key25": "5qThzCd5x1dotd7RrKfL3rLZCKKEdw4moYXU9caRuGhi5pZMXHGWDQ2aLVogT9bCJoFzp33mqKAdGTuF5CgtNLiH",
  "key26": "U7b121cvLb42ih41AyHQy1218KB9YnxMr58hK2nHeuc9eNxSkxw8xk77uhJ9XJ1LWD39UA8BLyFyGjWiyDishPQ",
  "key27": "47DojMMSSQ77N3VpBLedXdbTLLDifeLv3o37qDAsDMttfo8spQZCa7if2LaXiNdiMiJff3kep9kcUM6QUq4u7Xhc",
  "key28": "5jBVVLvP121BrGN3Twqz3kBj1BTkKiTyQnuCRXpZMXKGKqwKaL9Bjg7W7VC8XF8jikfaEBoFB1iaTKyfyQdio6B9",
  "key29": "3mwZYxqKta6RRReufqjs9v9buRPXJ5ySNPSxVy8rUUXvoMqtbjYUvWigzWWbRGfEh487eSpsMDs2PbjPd5cr2dhT",
  "key30": "2pvjJ9bPAGSghNDvw6VuWHks9PEVF37GrZuinFxMJxohwXeZgGVdYhhm2hLkFPZdxVWbENoy8XzjtHBtUZQv5fJs",
  "key31": "3twigQP82VDhKHFUkPwVLw159JELkM9n8Tqu7Y9bzL3Dka9JPAL65GtNVvasSK57FjAeD36zXP2eF9uWWfMi6cbm",
  "key32": "65ye42ChsyvQzhR8EMAXzHYHvTzcnzRhANihAjrGTJugMQhwKTbvqZwrKYXSc3NnUpHZpx9FUPiBVv4PKpnCgDsX",
  "key33": "2hJQCeEVKh86KBGkGVdz5bAHitGGCTAvJyAYLjUxvfB5kBmhZdXTL4i9uw6qZFW2DAhEpkqeQU8Vz34B76GFPZ3r",
  "key34": "2BhFojdCkG9TybGW9KH429u7dquiNqtP2Xj1WD7KyWKgnBghR2upSy4snoJZsuLCENCf5BMuK8SRZ83BqmnHA9ai",
  "key35": "2SMd1PLYZRPipCSwunxHCiq4PdpFm8XdwAYtZFjT5Ynf4vfooCfaN2m9SHARWVEHSZANVzxsJNq2Aoui7c2Tziog",
  "key36": "4BkJqWD4BLzpQ1tyQ7EddHAcstBEANRbpyyaWyZ5xhHJ3ApGovCkE1MqLQmp8bJrS1wD1hVwBH5Me9KUaThu3oFq",
  "key37": "YszGnLnQ4smyikokBUzVJvvuF49YBkkcpMo1RU9uJxGEYwz8Wq2HvvBxdRYDVvi8sg2EDjSpiGujK96gkAMusNX",
  "key38": "CLP4zaKNLjjvhzChzG4RsfAKyR7iKJBZaZVUvDchh6Y6nB47fzEMtAe4Byjs5Z1FgF5ojqJKnECXgAZXfJfYvKk",
  "key39": "21aENCQ7S1SxtQFh8cocgFcL8P14LDgJFA2qyi2wPAnsbLQ8EXT4gBQVkUSAv3ACqkAK3uriDjG4yr1Z2XdxUXZY",
  "key40": "4yDcgssasjBmZCCRwSiiXrVCPZ1BM8LtZVeJa8YDCpXvFc1iFyDDSLh9uEykg8BfcszQqbu5z3atHvrMJa5zEiGz",
  "key41": "36uoujkMTPHVscizxVis2KvqD2tHeFF2fwxS5K5GDnoCXbevS4vxS5mrC99EQpy2V2ThbahSpoN3QWX5jtBzYGLf",
  "key42": "gYAbbWwNb92TsNMdjJa4h5nxUd1Kx1bUh9pvjS1pjXq6su1ptPNNF35kiPhozmvsEcL7Gqt322Z8Rej5hgKaGki",
  "key43": "2CmWChvFnTxNvBW9fdwZrMBWaMYJzD9822mqwpYfYDkDZ3dvdQFCgiSzacL31CkXyJd7eBBrBBtK5KVLgitzBwcR",
  "key44": "4sUXFH7KGBwTk2CqHQpgGpgQvzZy73BN8TsrWfGgmkEjLjEpCVXz6Fy4PvWQdKvetwnRja2rtBKcYYBM6WMMyyAu",
  "key45": "4nv8AzYWzjegqnJN4HVe3sdkc8pg81xde9DxcLC4zM9asoH8Di5q2mQ68jmtwfs2zuUzectbcHVrksFtxKHfxTzk",
  "key46": "5cdEctCAYzvimWJ5fedkxt3ekTWaiVw5iutxkpeKob2C6e9nPRwENS7sQCzgQZuXisjff8eWPqtLGHo97ia4tSNZ",
  "key47": "5fFiL4HmB2jJmn3nhojWueBKnNezpVfj9R1wTWhqNhFjdqiTb6DqqqgG5hKv3QncvEKXKKjxVqzBzTYKvsfbH7Za",
  "key48": "4336JYEjtJkCsr2KrEMi79GCaeanJZ987hWhLzWTVHfejYsAwDCZTphMqxJ9npFz2wLVX6MnHNsWkMLYms489PTK"
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
