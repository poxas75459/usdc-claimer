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
    "2hPBUm5bYAcczxC5Nkho8AygDWtzrfWckBrjsnMC6wJ7ZTVLefqv15YCK7TkAxbu5JCW95aEKy4GY3eX5pyy9Txe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65X4JL1HcEocx8K5rzfENPiAyUjt3aQ233hkMgdGXwWbJ1birayLb78Ha6ifLKEcqYMNnU4TLq8i6mL5eAutJirC",
  "key1": "5SB7vr4ZJu8cVNUTVxCce3unXtKLK8dzuY4JSWLL7cPpFnqXrYv8jcSNfWE5b4adzFqFM7qB9Ggc6HWAQ4M9iymE",
  "key2": "4G4xeYr893ES3Z9mvBnQSxpgSnp4jKetvrTXdtLVBTSxtR5DsSWeFF1VdVv6ahg4rtjsH2ETif41QrGqip3haTvV",
  "key3": "K8UVHPE71ioVNLzeraWaN7wVutCRDeKuBP5dQGkYmo2ubvH3UahR85NU6ywKECsR1hNBqBYx4XGSDyXKpEmuWYA",
  "key4": "4htfaekn66z4yU3zRtfsqvjDFSj6qYZ3a92QY3zWbkjZCUaVM7zVvNeaFBVPr9YLet61DyM3DDjouqpb6QBMGYYX",
  "key5": "2WjEv9tRtzBCa6KGLqAyvxS8XVx3TUcD94wkPHefQb3yAsaK7tiu8dkvUWJaKH8KH5p4YmCn4XxjJqAKB5ZjJZzB",
  "key6": "5KsQuBF97vB83AjdH2CyrJaTqtCs8q2U4asDAR737z1hTVeAXutD5quvHiTZRLeq2fR6BgsQS42JpiScppwv5CfC",
  "key7": "5uUqgpSk65JcDQuKTuJVustC9q3VNJNbrJzywRfrKFYrrorPYsRTKnGCNTj66uDnRkKTx5CwEwsszksmazX4BGdp",
  "key8": "4cSYgypH26GJEoeddpj6fQZbm846hLqXk4THKGtZjNxo9EGsp6LFrK5hNF1Ep1hBrGDz96MapJid4gbuMJYHzGAh",
  "key9": "8RT7KXa6VC9qMdUVtXRZJaLHZtzjRK3we18zC5SifhpSqSiyg4jkJ2uRuUbcj1orM6eT9YENPvt9CcfbjWAVKD6",
  "key10": "5tXFSqCGc7G1oATJFrzAN88xD3V1bNN7Q5DFLbKBVcH9aqbjqX3cjx2eYFfzQjvCgK3fSZ8Cg61wbmaNh2oU1cMA",
  "key11": "2nv6j94nV17FHF4UQSzakHkCqxkrVHiy11HAW2PkdW3V3ie85ZKMfuJts1tUtp4ht8EjZi24kCuiPRzpZ3wgYroK",
  "key12": "2a7kHBowaA4ijszC27n6AqQs8Yc86neEcmv4qXE97R4QMxcrnmjNGhMJLMgft8p3bJgvS3wD2A6Ps3dN7m2DzPy6",
  "key13": "mmQBa4GSNYr1SeGVhhK3fgQMYmT96Gp4nDfKz77sQoKAAv6LMdjaYTnBNh42mss8TeJYP4SqZsG5kPJncTmwtL9",
  "key14": "2bSvjYAtQ2Fkmrv78oHiVmQjZNM7hV3L6YcttkSdgr49kevNE1Mc6d4aJDxKgCKq6zVN1diCAQFfGYhS54ADqsqB",
  "key15": "4PKd6jYR9T2453cKKF7z4BXtRNZnXht2WXvVpqtPc23tfkwP9cfmMKxWw7gHrK7gFRXA6NWuWE173hyD6JH4iuw7",
  "key16": "5DYRd2wSchXCPc5nDMDMD6gGFcn6LURmbszZhwxYy16rAwTUiyrTdjbuaERAUivgSQBFWeZhiJZzM3NBPKuqRP8e",
  "key17": "3tMoUke9ZrAbAFxRt1LeyMfhJgFicvtVxfBmDdSEvrijz8rv3XeyEj2aFiX5M2PS8B2gMzQzfgpVafWRzUvafynR",
  "key18": "TW8RBMcCAZtsJtiLk9xnQotRdAoDVoZHXNLwVfcY9gmkYzzU5n25nfRD1Fym5RwzN1gTnVGarLG9d6pFC9WVWLr",
  "key19": "3Ju19k2gRLUuPQcK4tAEFGeCMwGGFBJLTgF4rZckkv6EgXEdWDkSwyFfuLmHQFtoaP3LMaivHbk1NU2w9WbwLsD5",
  "key20": "66Kb6guxqAX5UrdMrnbdqVF8CdpDYh24suVSfMRzzW9ZYdXrBojRSEG5cp7DTK6kLQQoCwZav9ydJ3RiGcZNpdp3",
  "key21": "5T85Ts6dpmyQS2PGZcowo64JYQeG9NjRyb5E1vncSh4JdLwZgjoRmaKyjca2aDeCKuK7PsQBHme8rugnNvc1bVz1",
  "key22": "27UyJqDv581dqMkEy9D1jYrqfmCQogKF5afU3zzFoJJcb7GfAPtD2soU8KGSvR2MfHWw59fKHf9ij2ypek9RS8CZ",
  "key23": "4GEYxGK1fZHXQ6XwKxDzqpzhuzvpR391bXbXDX8AUMYo1CL8GDTy6qZzR5Mai28HAoDcw83oaRgtqJEpYWqRyi6A",
  "key24": "4Pzt2hC2A3DjpWkaWgvuCCgofFEQ3EHdvmYNkcYJhMQ3sH17Ep4ebjzMDFBXAN4qaKhiVnYL7GTCvFZKzwZsLmAK",
  "key25": "K8BR5ZpPkCurMzhsM1jsN6Mr1EcsR2fGzn2Gf58QDSveufEytQoGoC3TLcyRjneDECzAEbd2GNdzT8MqQTaADG3",
  "key26": "4gmkqf3BfySZe3ygTRHHTCZXPgvYjw8okGPpoh1T2LdBZ3Vfmt6mD9hQNs1vKSgoT24XU5QYQ5fGGMv8NTZ9BEHc",
  "key27": "4D7mMQ95hxGYcXEAuD3UMBhV9DKDFmxdAA2AC6WfoQJcYwTCb1ZJHizgPi4BbqUquciKHr3Kpvd3CtidtqYSPrAA",
  "key28": "XUXgqqY9gLafztuuUH7ui2K7iLU7DazFJsoHKadvNf2DnDphH7Ufh1neoZ6YCtiFbqXuoqBB9hgDY8RkV1eAA8d",
  "key29": "58UNGnSsWMBeTLYrsMdhN7vNa1PXHs3SMnsvRMywucSynPYef8eAk1PY3mFJyUCTxVw5ytvzeA9tfAgpWbdvNrB4",
  "key30": "5bXLTJvvy8HatPtmWvXW1NFjziaB5iEc2ix8tKgbzQR49bHqyvb4nMGZeA4dUugHzLcwbtEZ2zMUPDcE5NnsLvLA",
  "key31": "YRJqX5oEZoWEjLBAPT3fgnA2sCR3kPoqf4yTpUfdD7cztNLL7v6yoeEohQXp44NZCoPGAzkSddGUoSDJ8SowaiW",
  "key32": "5LETzq4CotVRHN68ejBqh8vB31zWwnR2BGcstYn2CQMSusTZ7s5xPs8z3m4ztk4d6Zy7MAKPkVAVeT9hcbUYTRQj",
  "key33": "2T4ESQ8mj8hjB6ZGwJHEmAwEBXkH7UTNEYEiqyTpSgbcMz2JZcdRb1cS9CTAoVkQAkkfwdqHzobeiPauE2r3NVBH",
  "key34": "2t3up5eAeHpntabk9RbcxkTdxhXcrDde65ng2rjNJb1sGyQaenfZFWjjVeyyD6d99umn3vvBRjoFm6SZnPDhwUvt",
  "key35": "3ug24BU7GYydYwgr8qmFPgbLRAPvw8ZFWfN6KxuaGebMGPFTV741CHrMiBgstySJd5WACaUZ1mYNCW1bUKb8aabL",
  "key36": "4PZFViXMHsiyRYQXcu9hr4N2k85pg1PDdvpZvoqU5vmYTxc45QGwp537Ggt9CvZUCiYKW2QN7PbfoiKD59xDLBhq",
  "key37": "3YSdMst3NK1gaE7xfenGc3VATankSWMozL4xHjsMXWcrzBBCNPbAbmLHgT4V8rBZGzxo9d2e7B2dvyyHUwpN5Ra9",
  "key38": "2qy2k2VTExFycY2bXAHWxpFB9nsLhYdgLSkiC5zzXBuCkuNeZa1eUSnZQmKsZ5ZaKkZr8E7kMFZAXwEg48sCL6DC",
  "key39": "euazxUevCs5zs2r48cdd1tGYNC11jQFJewDFpkcZ2xm6xwCKyv8A96m3hRAntHzGPSdgXtMGyA54j796DCpfVpr",
  "key40": "2v2vSBRhR9ifRJMZz1QjgPG9eadekML3v2zv6j3JmjUsPpDazYBHDoSwoHd3B6SRkMaCNUkgHJhorEmBgSVU8ZLy",
  "key41": "4eXG1rf89MaAgDrHjqPmK1SvRZme1sQkdTxKp2Dw8sChtJon28CYnX4KDkPeFDySXQnZhjB6TJYGtgE2VEDmAyRf",
  "key42": "5ECqjjwcptTecEt13bFSgYJNExuxoZc13vhdBXdaQR8Wt9jVwVhax5tBhEqhhFA5Ziq753MfFRJCwdwB4eu8pjFg",
  "key43": "3RQXJX1j5ELsxTZLixBJaWEiX9xzXHH8fdtG6So7JYKLVUviKAKLsnfH4HY5kAyng7LsXTrPosyGGSyQ3QQ8anW7"
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
