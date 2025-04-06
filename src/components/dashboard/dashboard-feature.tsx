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
    "2d2Kf7nLC214cc5GkLody628EGbvhTUpWns4LC494sW5zEyoZMg2WhXSs47h94D2V1gbieZTJ5YXKt79CJ4THLMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYq379YXyZTEPQBVL2nsvKzLb7e4yL6pf1Q14oP86TtiG1YGvBj6eekTssoHYirJuSPkD9grq63ctqYXG4DKFxu",
  "key1": "9k24p7NBMyAC8eKyST4J1HZq1YbYF3HGLemz6eH4NDkvvFiug7djwjvYTKxKHt4iUq8KcXm1ipbK1VQ97kqmEvX",
  "key2": "kNcR4Cozm8gmZ1wtikFKRk3A6ihoVFX7EQmXZrBkrdKkuM8D8Qi44yjpsxzAL7K6gcGSuCSKBv3ozUqmatdhnyF",
  "key3": "2qsyMK83RvGBSDDa8Mm3ovba8YZareUMghQtkopTryQCAskj1Ak9v1EyZCZ3qbHTMykwm2idzuxvzydAmLPU4ypt",
  "key4": "2BLoLqjMwFHGDCchkgQe65v5YKNjwJD1CaFqYQruFyhsapQVcrswUB95vAEuSTDxenprT42CdtKXGkS9j2tKRjSY",
  "key5": "2c9cGV6JGJqqLcSPGCKJE8VYpdatp2UADcdGZES4T7cF7BtQG6aoKkUqZMfEPvvmgDn5NqvqkAmFC8j8c7pxZz3b",
  "key6": "2gd7VuRuQaYLUpetPSTqpKWvEUjmsdFZe2tqHFP4j8jU4LGgZ4XtkZtWZWUghS1vEvbgqk3uvqXTW632CGQUHwmw",
  "key7": "2Noo3RYC5HugU57GiPfPbH7xPbKu78uRPJdMRbBahGxM8SGJZNknzFmHGtBgwtzMXBYEregoKzQGoSzi5taQWMee",
  "key8": "39UzZRE4Z67qrF3KwdYEpeCy17qxbC22gFA1Jpn1fhTSNc1M84V4siQawZhEEUZV63rCRdgRMhXF85BSkwQhMQ3q",
  "key9": "3zjFw7gDts2Wjk66tk7K2pYgn2SZ2r38YYuumHwPS6PyYoH7uoKek6QeBTzjKKATrS7p8odFZi6wJNLjGLSfh6PA",
  "key10": "5K3F1Rnhr23ryKfoMftRP9wdPg9PaLT2vxz7WBpP27u8GvG5sMP59MJ3CMoWcjKPhE3JnAE9DVtaDTRmS63cyGtk",
  "key11": "54SHUrzyhVVvxTXPEqU8xvkEJfMczw5FvktSSK81zXuqdRW9uo71JSFraCXw96py7Hq4KGwyYwGwkzJRmanWkp29",
  "key12": "4xnbfVrSsnkLSsu1SaigaW362akDM4MtjEFGrey6EXwu2DSdRSPFMosJnbZuxmYGfePwu4dAkzqygHmjDsLHhXDZ",
  "key13": "4eCwS1hhV6CYHUzSG7e9SGK3bMG1Eejf3NWtKc9LPeXdSg2V6Jt6npNuVCgePAywdRE1sZvGFLWcLjDwCxJB9gGQ",
  "key14": "2Jj7Tg8PzoovHBKLFpwUBGMLMdqmXVwnUSSj9HL1WswYDwto36wEcmEsr2aNENGecUco2ESqDYcjeijozrPGor2R",
  "key15": "58m5yWU1FNofezGLoGNtz4Gg1LPNL8ByVwXAjv2yyxhpq67XaCq8AwMV7zpiWNSogQf8EFzR5FTMZhTwcuGfZPVZ",
  "key16": "2vYJPS9HSG8hiNtaw6T7uuw2huGG5JoFKkNEPUxNLtiZzvAdcDnE3ZAV12cC5LYawYDq6G24p74WMdHWjHJrFRhN",
  "key17": "3Kgc72mMjrf92wNJZmZycpsggq8mSKP5strBmnhUBCEYmMxsGXS7PN4dhHVQUTVfb6r3xnVd2LH5P9sXJecME2Vr",
  "key18": "2guHTr3W3F7BfXWLmGvuYx2MaiJbUMceKcoo49vD38mJcnXgyPs7w16sR1E1sTn8StiT4TuYJ9ZwwTvTSAAT2CtM",
  "key19": "sgihsiL5arruq7cwNNtcMXqu5pctRD9vVJxD33psdHwSRTPPx8Pte2roVdRBAJPwHhqBdQkYGV8zY9sJpsRMnuw",
  "key20": "4hVYHcx2wHGuKvJqwUxbEehyet2cTiiYj7rBXPbD9XRZpcSYGrYJfZVuJrUqpJhHhQmWmJZDHJ7VZAyvhYn9WSzi",
  "key21": "4yAeHnVyNXw51ZuuNybhfoBhWm1fCB2nZyFzqwjWDvGVhukKrT7JAptVjmVidbWPLVkezR2yg4j9kiyYEGfUCQH7",
  "key22": "2bcPgSamTa9FGJjAcNGsX2pX5HZDiwKR2CbkPv2pm23hVPiMApabT3YDYbFwJVHqSo8fS1bWDCqfdM8caGJLpU1K",
  "key23": "3PACF7VfBkWZkTB199RCn2t9WSc9Fgh8RMwej3Gkx8CEDkuipWTj8RXfXVvuUEG8W718ryhqaRL8UYQU1XH6dcga",
  "key24": "3UWuHHZ8WAJFm9wfVreCnSDaNJUwmVp4UjW9kCUyy3DVt2dPSEnfZBb4gtyJAoz1aM6peq9NznHGZHoKsCq2A6S3",
  "key25": "4F5gRxpEWAAC2FuitSKh1yBF3AmAwRCi6R8fYCkrzaxAZ4hfWfNzAS4yDsgYf63Eti9qNS5maFsXQr4FZH3JxGkY",
  "key26": "4yaiX39fhUuvZyRifTVYuykh16gRWgN8fqjgjpbqDkpjnHC6q4V45GD2wzhhWqgDJ9vnxbQHMYPfNkEjRQUJVrtX",
  "key27": "3EK62Pxd1aFrD3khuj1RK8XeMJsaU5Ef5etav8E7AgRCWPGtiL9RZNcNDfUxhYqMp5P4ZvhBjrzKEnZLD44cH2i7",
  "key28": "q4YNcVRLYcPYwQXJzKUQWxhK4nZ3CB9FQLzzW5RqeZKU374cV5t4yn1fyCtB4i9geKH8rHXEWnq2JgjXFNQGCAT",
  "key29": "3217P6t6F84jxQyFF4u8Nsh3chUT8Zn8K1fTa1xBn4MbthrKLpKTnypVCMhzHuRyWQYQAr4qVHALXpCrf2URxMoT",
  "key30": "Hqm9ewspgMNo5iYhEYbws3ME5JpSBnD4yvQBKyo4dZKcfPX9dMgwcabmL9ddJ46c27CnAUJb1BBRBKWKYKN3pVV",
  "key31": "2NVFTkn7n5SU8ryVuWNEewNpJNN72hQBBwAwfpiSYMRPFnWECHwxtCofueGpVKtXaQzHt4L2ET6UgMWMWYbyNw62",
  "key32": "33gSCzUJC9AwGp2KLSZY1TahAARBXhwCwT857YCKyJkHyh4FyjjNqrWrx3MeD6NstKi2UmYEkrcZsEaiEezwwJdh",
  "key33": "2owZKAo3n74X73Z4f6MJmU392BG7A2ZVAQP5n3za8oFYMYHXNPSu3i2SkNZvsQPJKSpowMhC5P1MUidVN2V4oUuM",
  "key34": "3A2PokkDsziEmx4ExiyXsUv2CVJU9aa4mEgaPYYmDgmHqmQxoW5BNxTb8gy6WZwKiM7EKfTis3rTPGjHFEUYmWrS",
  "key35": "64RuC5WXg1m8T74fJ1cUdvRQYu1GUbZyWDvFRbTB9f18p1V2aeMiz3wqgEuYW2vNFnaBTm4jtTBqop5wbY3ZoM5M",
  "key36": "4u8jjMZJqSFRsKZ6j6GXKmN4X5aG1QMttcXGNRw8FZJUMQz83tBUwQr71xcvuimACnWot9kb4XRyJbPQLzku5U7T"
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
