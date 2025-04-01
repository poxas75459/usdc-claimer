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
    "3NhqqUXs1e1u4HKNhXGfCh1Hh2XtweFTMgnLcECRBpqjokrznQaj4jvYxcJqJsUBorDpgZnjFBTr87euCGFZanKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKcyJ77LWNXZWeqSwuvcRN9ioe26NZsSFDLkUuCT8SbeMLb2hAw8JB7jma7j5tQtogACMA15DFodip41nM1Pf3",
  "key1": "4FiTLAvWy7rK7PDk95MZckYK8jiAjNSaasAYCjMiiaQGHvBwK7RhzZadnsy49W2A7irtJQgCkdV3KE4qyHy1Qdzh",
  "key2": "ANoEyJadzyok7ECg36bis6fCSpMjo9T6WVHNYwRJZahFGBSWMHNdcbwkUgvLRZ1RCe2Q7dZPFsBprFuBgGkqtCE",
  "key3": "AStihnFDMrLKLqL76RYs91LA86kQsX5T7vDBjm8eKstZdu5XVdYSLUVeoVn8n5oUzZAyS46XMCctzWC6vLWjQRe",
  "key4": "2duutPTyzHemoUcoM8Bm29H3KoboK64h1AiSjEs1SrQK4FGKvwoN6HRiESMnsQHNaXzByfEWkfubDdRWNKtmv7Nv",
  "key5": "2cCyDSk9nTsHBFczfkbF3odnQrHSynsh399NNZ3XjZ3eDjikWjzTG6K7R8gqwVasttjCHdRGHU4ojMkv3dhke9Up",
  "key6": "ur9oMaB2cajUzRMG65X2cLBGR7sLH2oiVFAYGv8vDBSfB61kCrzxyEj76efdqy8L5EMZyRCiMTY6kKh9baYLkUA",
  "key7": "2mparDuhjpjrWYFpxNar3vPzX7SReaQaVdyCWR86ic7xpDqPZfBoVeH8vSkar1HqhEYPVBEw6yqMwDxW1VNsmpDH",
  "key8": "5F7m9TLdWhAS2NgxTczTpaoiQQnmDiFcsLtTZvLWeJash93ZcYgNU97kt52X7MEwMzJwmwx9mkriivzAxpkQvTo9",
  "key9": "3d28iKP8FYLARzkgNmtRENdjUg7RhUbRc7BzMo3kgye8P6CdDjh6TJcaTqvtiPkhK3mKTkMXNUwU8ANQ8RjYMaZQ",
  "key10": "4T31PFiF3o4ecdsHD25dd4Uvg8v8E2JGSH8uaw3PzhzawU17LoYTk7UQGoiA72pyA1YpJp21vUBcRwHc1pZtEvUf",
  "key11": "2DRPYBEQwcQySCLU2aFSNK6ZUkmHZFn1FtzcgQ4vyoMrd3D1uNXu7hNA4PXq6nUdyki6cMArcfuce7kj2xTkWNu8",
  "key12": "5KauhAKgL4RREgDP7tUoaAT339rCH72qoGmK7gXptXFVd5TD8zG2rR1BenRWFiFqkf5eJgYQpMCbXGm6rJnVVv3b",
  "key13": "2iHrAuJs3r4tGP1w4DiAeEr7yPebB7kqtp8QmJ7Ne9p6NcY1GLS6i4ZavjixKEEMvkfsmmUY8aJfYW2fENgVJCjg",
  "key14": "GqxEggME1NgF6icwKXuNig3CoRD397GYUpYT6Ys8E1ZmimF65U5n3VDJGCFZ3ReaTtUMUBwcU1M59jGUoU6Y8ya",
  "key15": "4YPxqtYSUST58bYVvzboBGzhfAyLeFtCj6bFLLmAAnJZYje1nk4qHVuAA2nvLpQyhURTXNiGZvsWdeGJYPvVGBGp",
  "key16": "4QvZf2hc3XC3JtMpUxyZkQRffFwNgrPX61pdXubCX7NrDG116PxentqYnU2nnt74AjJ8fXC2c82sn6HWovJZfJKF",
  "key17": "4mPYcRTNFX3E6ZK58PD2kzCTbE3kfpC84Q1CsPaZzeARVzNPC2gisfUmhUd6x6rHZ19QSi9n4jheWGDxeZgB3HzZ",
  "key18": "2aqR4a1XWtWhMku6Tg1BDZxxpEGKev6cEvBGi3K97stj9sgGUdrwqPa8cHmsgVky2q2eUTMikJQ77QCUZHSQqxJu",
  "key19": "2aYucoXbHrXDEGU2vBa1tjQfMBMhSFNKWbiC6epphGT9p9J6BFPY1HTPhnezaGLgZjEfJ8tLsxUMpTxALHrBMeFW",
  "key20": "4SGehofLfXouGRHhRKuhxJ8sNXBG192MCokE7MwfF2rvYLREAQ1JpLTmj7YyDCCRHQxbaCNdvn8jUgqtug5Awmus",
  "key21": "3fDdGSMRiiGATZ34RrJ94S6e2FPcarkuJCxHs3ttTVufS3k6sYW6Gn4pFuhkwxcTNcqyjZzQbpKtXL7UKs1e7xkT",
  "key22": "2rsjQL87JvS7eL82TFXyzZFWxPyj2a8khgHRgCwsDJbm1LBGNMtLxoJnjx3nydutoFJMZ1fHcng4y8wt1paF6ref",
  "key23": "2GaLs39E821rvFuDiDajyFkv7DErn2Y1i71V8qeRZXKkphngZEe4bpvoRmthaMKiPD1P45ZR5M9VbfHoQLa7VnH1",
  "key24": "3MeoDXnX9MYBbgCaLuu3Ut5diNDsQ6Pfp2XueSBTZbWkw7L8shu3WMRT652nGt4aqHg8Nfg6MwGTBEkENWwcxNbc",
  "key25": "3XvXypzyAn8PcvW7xwXwgtxJiqMLLcxRHgfHRuw2BAF8RKPuZiqLdDtbT7xWSXrYJKTdL3CRNg9m3bHiqdq2mjov",
  "key26": "53iiirFtHaj6ZNJPUVKMu7bqDLhib1izgTT7VavnixbbpYo6NWZ2JpNxAMECyqXZeVhopxs5JAuNk69dL6utwhDb",
  "key27": "4DcrBJvJ358YzLfaGeoLGA4gzSxePf2GHXGTmhi4KT7o5y97nmfDFva1PWjAc98UGh5kcLMR13YxvK81BQeCDM2h",
  "key28": "5zLTiZKVLxkQvQCFSKkh2zzjhSE6noEQFumsqGemDStfpn76V4LyDggVN9dyKWwfbA95kKxWBkwwUctUFMRMHmaU",
  "key29": "58HDwM24Yovmx7Y1uutXVJVAcrtDKPACEsJRiboP7EpPDQ5CvZjf3VH736GTXjx6oZJR52V1jmHjfRbsviYBiCV9",
  "key30": "274jERpyDydft8MhKRUB5HugQmCjUB6jkSgp6TMe7VWtVDwfeGAjCsrTazu63p1CP4ccq5quLjSHWTKZjGkB8FKo",
  "key31": "5zpuahpoecWrSMPbisXmUJUio4971MXwuxfDgTP8dzrWwhBGtW8MhDgqq7TX8o7ssLtgdBqtNmK4Hs8z8AUFGwHh",
  "key32": "WHxHYn2WSvdnFrAM5og1mSegUFHzefuyYCGhWdstCU16ejy94mHVKhrbJMUx8Pm5PL7KSW6zbixTbg6n7zLQH2h",
  "key33": "3iQzXaosK3pYhiuc5RDgsT1unpTvsogNDx2gk8c3uXvKqBMDZGhWgUJ2cq7ZKj9CGnrY3vhVb4rWofzUHb5y91f2",
  "key34": "JYWcLvrZMKZ22yLVN9fT36PmcGtUA5XkxCuj5FVz9dsmqHaRRzvV6kYuLcd87x4tbGbU5oKw7asmC7bR7oxwasH",
  "key35": "2H4p3igUwrWeBcrySpys89Ay74ccgSqb1MVAfRaKAKuBWoMT6ECwojL8s93QK56QPJyZrQNS7y8apSdofXC35ACL",
  "key36": "FJVhnzkx6vRZeH7AZbsNXtnfG4Nu4Nc7UvRPcFybXAdYehSfi2oLJxjFWhyi2tpEY7GEH5peMhKwgbqgyqrtdx9",
  "key37": "5WtuZ25grAyT4EvSaBhrnT3GgCAPEUfWZih98dSgjc4KcaE624yXivMsjoTpV69uYR2Qkyq43aq9karNfBNAKfhK",
  "key38": "3uHsmFm4qsmrqFw5yPiAAoM4tWXDwQoR7RCxHuuSV1f3kMGti1xhWaaiTx5jzNX8V2fX9qkBve32E39DTjXXqiAX",
  "key39": "W3kTpSfpmysAcv3ufcLJgggtCqsXfSGTdZS88naEmnqzMkbkdYUptTLbcPBejX3TzLJQU2iriC1FaCJFvyCrYYG",
  "key40": "5JGhRm3yPLFTxcj6K8Aor3WU1pUHJcH5NuZGGvtwRm2HFUEJ2c7q9QExvMKCLK4AosiCiRdhE1eXPep8d6kL6Zyk",
  "key41": "45E6KjizwhQhSKVjMygxSe3Ha8jpZGhaAjogqfF8ZPghCxyk28nBvDwfaEzRWZEB43AAS3FsGGcWjge1VBktGKAe",
  "key42": "57PNSUnpTbkGRB3pKrTd3GYCVkvtiLP2bbqDytVZrGrT29Z9ry7Gg3LHpHUvgjxunJvz4xuqocR1sTkWVnQ4Y1bz",
  "key43": "5RmPV6gChtwt17ShPyNFLHXeY9zteL7WfH5QHhWcza4d6P6p39HnttnuY1nX8vkyD3tNaFFuggpsMb7jRGpUyPri",
  "key44": "AvzdhNW9C3RPsyhLvmyGiHmeLtUZ4TU7V697BrVev7fRyqJsEhfWqqH1qjEogbbBwUhbLsRLmmSm4gEqKVp7PrE",
  "key45": "35FudzbwuHBoaJam6NJpYzQyHNCA99JRpTTJ3F9VbuzNtCbqWd5EsyuU1MU4qbEPPsLyCaKmkyBqavoC4hLE16XT",
  "key46": "5p1pqFhbsUTNbAkLJrsJZW6UYcG4aA1TnQH5rgTucXWYNH2Cef3naTc8vhPNpPNzPC7JMLrKtEGnzNz9XwQeV5c",
  "key47": "3svw8DsFcHZ8Lw5jfQ6mDXAoAJRaYkd14WGFQGzHMHjRfaMqGyNNYABVekcGGq9YosECBpK9yQTjbE6yJ4Jn48xS",
  "key48": "5dKHMZWA83YmXM4oKShAbdD5Li28mNBVVRd3JVWs9EZCugLypNXxkTNnzfkd7cNrNhggwjKDmEHEcXqQDDFRWsLf",
  "key49": "JRGcUfpZVo155qehWBijZ8VaaaKBBA4dpivPAmF4LXmVoW6d6QvA9bCmmpRwBCcGf9gFMZGXriKmr6EWN4pGqdd"
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
