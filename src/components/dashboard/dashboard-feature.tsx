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
    "5MrK8FWKDdRVEjS6miRW2gSjvUJ1rXDRJ7RuHGUwTSyUQSWqRdPh9eGN3bV7tP8MhNf7FCBaTrosTXX2zpZf3oN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TRhPGor2zQwLCr5QJZiqyDFvowboQoGTWsfs36B4eLWtCzXahMtatfm76yE4Agoi9z8DTeeV2tH6RZyx7US8AD2",
  "key1": "3cYEUbVpx7AHUYVgK2XwLtdPk6yF9oWzgyJ8WZUNfpKQqfQdBfCJaHCtcAuQ9dz9XBitZD4vi2mfmqoTUR61m9LX",
  "key2": "3E73cMLAbapT6DKTUqcvcvFno9t23cqqhmJTvYTTaAsZdvGGuYaXyJvwYVy5NCjimcGVLSrufY52zmpbezmvefoM",
  "key3": "58yC9CiTECh4ogun8eQFEH6c5x84N4SZ1tNn6ZTB3PD59jRy7KAG9mEeBpQiUyZJnyhuiig7KtWUXVPgNULBUfwj",
  "key4": "3VvVXjzKPkpgmDBvbERFNtMtFDBmLfAFTbRm3vKC2PpY9xvG3zmpFT6V1UNQFpFmL3VGprGw1HRRftU2p9WW3pn1",
  "key5": "4AfGGVG1Ds7Y6hRJ3LBW84v7Cuqq552dCvGJCMJfWnKYm5YRLFtnwFxh2ruUndoup5TMGoEQDBxBJyyzNbCchmip",
  "key6": "5oy4FquH9qQix9BPqN4BxKMs3aJNn2vQALuphTi1aXzBDhEtW9Hkm1sgu59HtaYkNc2nHTYmMWVCVSksdFUkhxWu",
  "key7": "36fbCjry8eKWhk9U1SvpA3scXNew4rioYSaSY9TS6rToMLfaJTjBkuwSkRw6A5TSJBbUs8ce9NFRCTfDatDqQGNo",
  "key8": "ZKezQbBdbxE174ofQHSEnDziWKgd6bNbLAiRsXDaLcw6T7rkN4iAw3oPAZrmULNPGbgro9FRFYu5btnDYMCbKBx",
  "key9": "3Eb1ciTrMKBrux8zqMmagkwcxcfgnYcbe6stCpZid5k3aK36WX6yXTNQthpDMVLdJYm7yNNwhXiDnT5EYoS2gc1o",
  "key10": "MaLx97azkz1KDPUE5DVvt2oCUJwVcwPTT22Px5x4Y2SJPQMQLnPqNYgcb9g5B2TgiUvG4WGxEerR7Ukd6NCjjVx",
  "key11": "5jHeVcp1xuvXEGAPgeRcE2WnSWxoD4uWCDRftM4cJbXeM4tatP8Eu3toQ6h78U6hRF9542VtRHq9uTWLFNZrbykT",
  "key12": "39o32Z9VEiekdE71B3h42rG8Ptfxc6GdvG2Vu8VoLcxCxqoRaEhGpbrsmCtJRFWL3F9ajMRBk6VCcSnR458CJ5VA",
  "key13": "3QCpqV2WEDiL8cmWiYabESyk9AjfErG1Zc1wYgyejQbKNFnCTADzh4P4JyoukLuqJQC7FccFtS9VuphvNqmPsvYJ",
  "key14": "2VpnwZ9QipucK3cQR12jc72VL2NmeUcNE3B5wUASNfhNBpr31q93dFSeJenCg4FHEwb5WUBFMV7L1huD9pWQdrbj",
  "key15": "31oqfZhWvmSnhQMaqYTfoPfcxVXobFpJGabUUP8nSgB8QF8RHSMGFBjwQgL3Tj9tUfpbUjM4qPR33RW5VjT7jt92",
  "key16": "3vY2dZnbWcyGKoQnr2dNQHmXTUyubAStp8Gmh5oU2DTrAQxAWhBEo72mRyLq2ZnYzkP4pCpYHeo5xdpsQNC1q1vW",
  "key17": "FY6ZnE7ndFsv9hcbSfnVVxnEQFPDtDKvzEgwpfj1BN67az8r5M8Kaqt1xd9BmdDsiv44SMZgspcA1gdUNkusaHP",
  "key18": "3AZmPF66ZX91e42LXtxmMAFTEM5bDZtFzRVxsQ9bpFSLw7EMvP18pr4TeqbWYnyxZ1XhtZfo4L1PkWx3Tw1P6soY",
  "key19": "3YgbS8e6piWbCQ1PMjDiPvrcMRr1qpdUXW4UAc53zhXSQgg6SxGykJ7wtVj3okvCCtHkFFDPz227cuh8bbX9dNJx",
  "key20": "2pwUAS19uKLWgcEB2BpvsCN1WkJ8fG1uQuDW6XqkVW1dxdr5oNAhDKPWQHnrRmjJscATuAiLGkBJQZC3ZFa1MFs9",
  "key21": "LZ3ETr7o6KNNgNzKeVY2bq87Yy2oBW9aC6s9S5NNCkTCz8CNULq3hqmTGnNg3ZnskJeE8fd5JWJcTbvFmL9x9WW",
  "key22": "2yaYKfBwuo8xMFag8dSJ75yMd35GYZvYhRpQVbTffynDWAttyYza2FPrUcLZo7dc2nFctck4PccVtnpNx8afrAdW",
  "key23": "JYbi7eStYoSPVjN7kAPZZB5LpsrdMDm3AcqCQMjtaorb8CaQsCSynKKgf1qinYLB1As1sQdP4Eiu3PsUojKiAb9",
  "key24": "3Hgi3SECHGGfCfwm2x9pkHjFjzpp1g7mi8ycP8LxjXLNEH3uTLmbNeM8LLg7XGMkqU9SnU6s8XksaeTTxdGARdtp",
  "key25": "3PbpzxvbQWpLvJ1WMDuMz73npXzm4zHqSQdZFABsDkF7zaXY9d4i8T9n9wHtaZDjHoUDmp24kyJbQQshUtcNNfyN",
  "key26": "3G6oAniM19oH22CNYbQ2aw9iqxkQ64zoZ5iuveXFN91VPJSamgGeSuiM2nUKTstwDjxYkdwC7VFstQAZEXWq9vsx",
  "key27": "3wAoSoh6vMUgUyVTxg4XC8BtBTtRXxNKVkwTraPrBX4yEz3aJsM7zpNvxN8w2iJFniegscsSw4CBrbWTD1R8HJcA",
  "key28": "3oG4MxhL6nWpEazzBzpEvDGSLQ8d13xVAwBFoDuU1rLpRHV6EBnp9411QwibnYdWZH3dcAic4sF5fZfDuEo9fNfR",
  "key29": "32Z15tPZu4XzDSCc3JUHNRRuRpUi6UuBH9zLeXE5o2PxuipqyHaNAoeX46qDnp9ntKPfaNcXkFqwpncU6zZvyYZm",
  "key30": "44GzVFtGBxnagZvninEeWhn7BNC9soMrL2AS1EeWagNcMiFqzD22pxHZBwRidsADfkf6ngiuAWrxdgcLEYjiiY67",
  "key31": "3jujzpPdgLDUQhohSq4BpEjoqa8RrYnZAUaMMWDteM82Sc1qyL6sSxvA5dgdaEzom4LPVa6N9o5iCBqNYxFXGDJd",
  "key32": "4DRdRgpwa4FpWo9BCnaA5F7vjUT7yHMmswuMP8Cq4DCg5Y9FESegPoBaw6tLFiCkvP5KbPUwx96ZtQzQYngxVFuA",
  "key33": "23k2xExn2LYdiZs5xEWmnMY511Cbd1BMRLVBWRCuDseLPiZiPEdAQyVfenQPugqVtGSbar9w64Z91apwDmEKvT5a",
  "key34": "2WY2Q5zGB3z9LQKrZJW9G1kBx6hbZ2xcghVpX9Kyyb6WwkfCFnjCqpC5Deitv5Pg6cHQQ5KkqAj5JdsGbcrHk4jX",
  "key35": "ZvX3B9hAakoUAcvQYJaRCwnomxv1XAW6RkGsAkLHaurz1zagozWGHA2MCXMBdpspB4vSZSGh11B3YNe5sFbhoSp",
  "key36": "2Zgg2cHRbqDMP6HEcv7bmwFZw8UoRAcGf2GxhjWZ9pmDBpLZfd8eqgJWYX1AFRfMWe9G4MMQuuGL4sFrtK2qgtTq",
  "key37": "5bxxL9KGasWk95Rz1qNSY5d1yPZPXbuBvzDRK3TmpeZt7eQxNXtGuxky9gFdv47gaycphisTL3heoiyZGWyhxWva",
  "key38": "2SfBPERWwkFWQsdNY7Ec14ZJ31yhNFyoeQ7HgQufML32H84hBbtExuyLcUUQ1niUMuEbxoL8aobJNuuEBjYbZS66",
  "key39": "5848ud5yrQB7gsZyXVtjFX68y8iGMj9QuuvTwDGg1GcysNVU5fbaxoPUmxFWjqneZfM67RBnwVruMAkNddw1bgXP"
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
