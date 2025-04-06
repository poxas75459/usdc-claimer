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
    "3d1gWhZwVyiUAN39mhdyZZHKFj6YkNDNzyqLm9WtA7oB1Yze3ADtTH7W3DEKWpm9iwa9dFmJuqgtcmcNpF6cHaVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hf4adFSj256cf6H3Ar1x9Q5TT7HDyFjY34foBGj4FYvS6Qw1TRgHMGBVBhvpP7ngXzAqMNUxDgEFGk6mX99XqcZ",
  "key1": "5bKfABGpepWqDbBZ24Tm9YTaTBouFVbq6TY9MGK86kbDEykAUDUognMpUaDW5LYY91dzKYnBkZ8ei336n8r45HQA",
  "key2": "5kJdwr7cWmXZLGNw8iHq5gPzKckYa4ya48aAtvdGjYWVs3LTQV1Z2MSREWBHuJBobWetfRsZUq3yLxggZA2dZcFz",
  "key3": "wHweVcvjWdFW3TNbmMxq5Mbp851kTb5UBfRM4yC2jQpbZyvaCjXbrMoEtSGDBLyCkc5pF9jEdG8EACU8f1YLz8Y",
  "key4": "27gfG3x1HoD5QaJv6w4foyJTMSNEVQLXFA5JGHCGahU2n4Hms5Yt2Ts57uavKEdwbav3Po2M3UjXdmQU22LejU8w",
  "key5": "RsNp3Jug1EL7nHfrB6EeoT4kYSFuyCtuR5ChrEBiL93JjKyVnDYXxQf6Sx7Cu8qRFdBf9PegMTnqCczM8DwwD35",
  "key6": "5iCE8e7SxYQYTePuGtn8eCNW5kxkBwDcT8ccVTtwEQgg9MwmghaD6CZoVmz29ShfbTRnLTdWrJWKadwykwDenw5w",
  "key7": "63cx9VYDvk9gikuKUeKzhchYT1VMnmfrWkSLFYWmX4bVV3WVy27rnx57J9NtQm7WWeLmncxtLvM46WqSpajLFEnG",
  "key8": "3G1JzkVBGzr1SS6LQrAJNbDqgjPUpF2bjzNQoskirRnPrCc2Wihg2WSR34WbySQMJSUDFW8GLPZZNVzoZYjwiZW1",
  "key9": "5gTcTyGLG2zB4fyd7kkJ1Gqveam73zLJcHaHKdXZKkVo2fFaKT19BEuT8pZs4T7vfhTVV1z5nZnLYXsDZRJo4LMt",
  "key10": "41c55J2GhNYv7aEVumfarFMb9dhFQdKHjMEe1zcA43Sx86jobPdL6YRm7DBrAfpzP1gJKriYD9wxNbh1Z69hH17P",
  "key11": "3p4vXQ6z2ZNGcxSAM6YTh74ySzEVCg18AU2kjq3eBz8STPzAoMGq3oQiwf9B5zVM6GfJAMWtJcyNdkHYkgyUFsdr",
  "key12": "36UhefHdZMHNXJYinyDAqhJwzXcouzMAsY4cSEiQqeapYNfndikmeHeianXhZFdHwbMyqEaruTC1rN8ZFSXjGm6X",
  "key13": "2utmAmQgorBGqiAmHs6jtDkypsDeZqwRGQpfkPhCm2dM6xZQ1bK1PJeVgAqUqmdPL72mo8PcZDUmWsPjTYpWtGJ8",
  "key14": "5FcxqJpkR68nXWGTevvbivoGQYgz1FZm8Fv1esBnJ6oJc41zzyoihZ4Sy8wPkGGLNmAvoQozQNXJRs5Rz1RX65wQ",
  "key15": "2i1QB8s1iYD1WBpNZqsTY9Y4KDqvSUJPiK8hngN1zpa2mKaYFEHogs9G46XX5CDNT8xoTetKbe1TAa7c1acsFU53",
  "key16": "3HStNFZjtdsfoMCqYXWHRHxiKAg7YucZG6ezpsiRNxpess6788kj1wo7aN5tPoUyqnPQMhPcGErWnA968h6Yj8S3",
  "key17": "3V3utWJmAZs7cekFcFJLmWcvH6LoUKtWGzUawDbb5TDz4j9m3PgqbKLQhwp1JKHz8RQz9zxrfGfiZuEsNtSdfVSN",
  "key18": "59dQhhkWekL3BmJS7HiF5Lz4pEe2c1k97uTxu5xpDuZch6W7k6So3dCZmHkwvooL4cDBF6VVDxrQuj2zZitSR8TG",
  "key19": "LXt7pu926cMVBScfCeaFYXVsyG2xmUoNqpYG3dMW9Kp7jptmQf5PV34zmg2qKThVSYfECWrGagyC6CXhLyw1Nfo",
  "key20": "9WuUDoxm7XFc2DMwSvomGndegJZAcunVnD67DKxhfrADo67WGZUPX7xaaszGZaY9StcEFd6RZ7B3KkUFZWD3U6r",
  "key21": "LGmd8FBKjZCSGAzVE7tvr7Hf979qioE3Wo22ZFdzAXm96fNFmgfxAFwcPLEvymzkQjQLbeXZUzEoFwPfx534Pt9",
  "key22": "2pAwt6YVZNv6LpqX6ZLfVDVMMRCPxUTzEaj9DMsScDYGsGqZnLk231L9D6dZCwajaqTu42WeFD3oSq71fzqwqcLv",
  "key23": "3adnkq354TM7RM5fdUFsQJcQV2uagJ33bQK65DRWoSmi2mLfQ82GvbPEswouv18u9Muv2DYiGLgtTEmti4TN1UJH",
  "key24": "4vxRoHcUyMWn2uQTkz78HZjXTMMZ8zsAaE8bz1P8cFDQMVmyUUwfjjEiDahsy4ZNXDVX2uB5v7hDJmSUazoynKUb",
  "key25": "5jWZBJ78umjjchuMFERn849fDcrSwyDXchBFTokbRCFfR7cF8ZHAEWZ4hDWJevEkxd4hu8yiNLTs38iiy9fNJun4",
  "key26": "2sPKFwDJMqDi8eHbMZNuysAYHV73ua32cZEmtFzQ46QQDBkb4hz2RXczKSvMHnYBDpyGxbTq7oEirKpgAGyxHiMo",
  "key27": "2YCrTtg5jYZxpNSxxxpaJyPDxT6mH6UVT1eGc4ye5hwvKyBSCk3vdXRTtshs1aboQjDNHY86jikhzvThcwmwo9T",
  "key28": "3EPpTiqq65e7TETFxiwfzrfxSaGmW1J35wL2VNkiaGirkyhy2biUrkVU25ao8N7Cp4U5jFjrGCpincb9mW4Kh2hN",
  "key29": "5THpEhgqHCnny1deLLo2op3JLQbWR26zX1t1m3KSERzezEBeUSUsxJnWeNM8uztRicNMU2uMW7rcLJgG49SriWCw",
  "key30": "Qvy2m1psruZarVsb7TLWb7JMgJHiVhCH3yanJuNNW4rtaFaDbc42K4hmHSGtPfBLg8gg2aZbsjFzCVgdXKJZRPB",
  "key31": "5yqpN2uCnVzMNMbYk5ZUbR4hr3sMS6Ne9Zi12RYAYHsDUkLni1tcCufHQK3aEgegmVKbzGNqRUhg2uYPaNaTLFRv",
  "key32": "5yhQQLePmaA6bBPghnrqb3x5CSomZTpsgWSmev1arpWG7GGMayuwasZLEpAtFqigxZDSjeTi2YxrjPLZLNg8YuEY",
  "key33": "5CDLrdY7HnD4eC2de9nrJrAs9Msm4SXT3EYi3yezT8YtkirwtvXvFKLFzoaSswbHWMMiu2qV8NCuHq55QNAjnSro",
  "key34": "4AMwmapo7f5V8EVbVKVc36LBpkTgZ8jzzaPpE1AADnULBx6imeXbDQzxhScswqpPqLJEgmaGKEenrCrk2PQTSVpL",
  "key35": "4zfCqasnr9m7sScehdydVfyL1pqs52vG8XoSWSruBSNT9WQvL54773SeeS7cK9VHL2ke8mArFfUsPdZ2VpQAK7Ma",
  "key36": "4EYyfeUzeBiMsKuixeVik7Xcmax14LsyouXgwZiqBnNeNrD4r1ZNRC8RLwkW4RX1sQrebXM23iFM9V21kwaCqsKy",
  "key37": "2jVSmDgvLnMLPiuHSarqNbrPGwWPtYdvfRebT1nCjJA5PCb1zPWJ5JUi1vcf7P4e26mhiw5cDq2YLY4xE1Dpwjhu",
  "key38": "5VdRci6FiqiVAEZxiynrqHNaXYKzGFFykoPtkmJTTAWRjjhNhVfZo64izGFaLq3SPWgVj46XQhoJPFjdM4UPHmhp",
  "key39": "41ui4JB7TJBWLewVHzaFCQZVdXP983fbNVs4V9sTs16LdqJ4BVzoF7gN268tyVzivQkUNrYfjYtYzbCwTYb1LGbV",
  "key40": "3xGaRpyb3GhRvXJSGEaCvVZfYD3pSnN8RANCH1grsbVzeACMU39Q7REJzGPrYCsG3431AsxST5cjSzMa892ampbE",
  "key41": "JCr1AKtuvFttrvZkeC8eaijkB7JRUFphftcjyhA83FBSDXycdmocbguPhszKCquMWKNJdh1J3QQ8o1mcsVJiFot",
  "key42": "4ypugnoAhU9wGeUF9A1PyHkFDBm2gNcJbSi8du5CeuqDUSFa8y8noN8XHeqGa3fYGWbh45MxAKv7nSsmYS3pmgSZ",
  "key43": "3sXQ4qhQiS4iHgnesV68DgW8epuC5TiieqdcPXKtArEcwWscoSPZB2gmzvwFFuLxypn42uQT43wyBnFZYeMYA7eG",
  "key44": "2itRMTeFYYHLgcMiXYDposCvXjZjm2QMHpt7jrbibKFfe8SM8uThJZP7284sb6Mfs9rZDuXoMgfJutxk36c7DzQ5",
  "key45": "xJc744pMD43TDXmjEZcjtPsJESE2MgzmqvemiB15CL2n42nJdGE5z51Nek8JPsUSinbCJc7Zsy3yk8xG68UWuFu",
  "key46": "eu2bG7Jp8oXa5ykj5QHstSpomVVE4tcDLxKK6wAwvgX7q42QRFayJRnKUKnz3CxCVHhXotDHLcj3W6D2eKdYyPA"
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
