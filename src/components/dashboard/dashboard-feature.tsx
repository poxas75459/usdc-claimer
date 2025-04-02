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
    "3gCnEfXMDZ4XXgoWnnCKtyihryGQ4iyFF5K2XuUxDUo2rqvADv9317W3cKHoyykdN7ASjbqEdM7rN3XTT3AF7521"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPpupLt9G7rh12WVgFEypgu9jhAB7LF6fQkPZz69sddDutA7QsbfHqu7GxdGVBpgPQR5SYAyrpfMhZvewtMkN1V",
  "key1": "4cgAfdcjAW68YcUrvfD1uWoAYis6LHpow53ynt6dyx2fxePYM6ogZtcU6Jjt4xLnvYEbwkrqqXZbbbG5TSgoaEDy",
  "key2": "5gkmQViuzHSdX6NniB65jKDU63gAQFpJL7EndFJXB4MEDmAyTEk5DKm8rV9a6wA4Gm6DoEwPyhrrU3umyF6Ua5gc",
  "key3": "XSe8j97izY7KhgBKLGbEq7XXWEFXeWwitpftJV6bewXTQKZDUqvhBcDUNeZwGtVKARMPLXiqRYgGXbdqNmJvy9L",
  "key4": "4QvghLfs2UpBaEtHq3gxPqZThGsU6jiVDDS7KAS79aHRYBYoJssqx1JtsRM23vdmHYvfgdqevwcKWazAgNZv34fd",
  "key5": "5kEfiAdwbrEr4qGRXFR9FcVAann5RG6b6p6r9tjfyDfenK6nZBkxTR4FJSHpysu1BwcCUfsNKdzyZFsDEqSAyvBe",
  "key6": "5VKR7vEWVWFDGPdLNWQFrg71QbnKgZ3ickHAFZQ2Vikw2MtKt5ZnUwaf6Dbs9yEg8VsPgqMY7npeiDrcyKZnumhf",
  "key7": "7vzhm3FZ5cdyuiGbVtrmHuyZg2mEWsGfvYSkQZ66tNwyUhXT2akLgnqEdTp32nXmAyfRMF4hbH9VDB6eRd2Tk57",
  "key8": "5W4tMhpDMGBfYJM2Ddy8fiy8MUGUiUHqGCSsFj2PWDqu5WZhDYGNASw2yWtJhvzcgWxmc557UMkz1jADafy1rnCt",
  "key9": "4rB9k6g3XhJS72NxwgrhbiNrCM2oxDcC2aYBCmsR1mftVD9z9PM8KBVNQjtdh5yPj9kZ57haZ2HpALG7Ay9mgjoW",
  "key10": "9FErajXxtTzRB4PTn5vifJzfbMSXiXuDfM9k9WKDPxdEakdJcrEUZ3KGdHaN378dtDzefa4yGD2QEaWzwAHyV8q",
  "key11": "53bawWhshYiXf4FsRpphbHhzYp4vN3HZ1cJRRmV1P7yRHvkeju14tyCGEMYo6PfVKLsb7tjVtUtvdeSE6uik3eQo",
  "key12": "TwjGCCwVuPm26yaBfvbU2pjQedwJwmUDYM21gdoxA9TQJS1KbzhGXA111Uz8uSijG46CwxtQTiyncGANVDxjYqJ",
  "key13": "V4fhgcrgag8595so87JT1tPPEwJQMHXQkhCg2czdEfnQQg5PvttxeNryQooY8b8Bmny3dV7y26szQt4MDEpMcKf",
  "key14": "2YAvAvcDBCCyjpWvUVVvGyt8DQNz9BNvLfxQoa3QghN6VLQghdweotNuRmJjt9HvEc9mGuqN499yd8dBiP6CovM6",
  "key15": "4nMVJEUiwHRp5FiHJXPdtPhj9NCv2KYEKaot4zW4uDSEBUjufmrtJ3M6TfV4NFCviZGUwDcFFJwtxGoDZKpK4rmb",
  "key16": "5YCmudmWD49VpHikqZY3phaSvMfewqerdsQhSTZ3T9zZTKgVppenDzkfMPfFxUjxkshcWFqRZGEQsPFNM7wMHA5A",
  "key17": "2XjznkvVNZKYh1RcZdqRv4w1UQvEf9MS5uAgy7TDWxNyvF6Cb4neJVZr7NN57SRyRybCnAkJ13yu9qBaQNLiwmE8",
  "key18": "2qAiPMKBuJN2K412NujAsQHEzok632yGg4Ri9WWGPSLQGRxsZUW8tZ1oMk1K62DYPjkQYph9pMDhYGBLcXYnbyFP",
  "key19": "4frasb2itumLRa1WV5jkwfn1pRdgut5pj5cZQ8E2NsRE7D7oYs5CP9FgNbkmhkC4f5wscBKV9qH1njGRJSFjs3ML",
  "key20": "35Fwaa5igzNXhR4KGsX278Az7Mzz6KfiDkbpFaVDo9yuiRGyvTSAToyZipFP1yaPuBhTQmGNqTQgeMwNjSXyyqQH",
  "key21": "5tF9R7JW5ynB3tdRhwqfvA6zHb75by3T39iZ97XgJT7pGyHqx1QhRFoYmT3GGgML9Zz7BcBX35zu9vUyfC6rdDjT",
  "key22": "2eLWWMiZnbWTSd9n61nq2x656JWvSy4kvMJeEtqyhqxqpY24M4uqbkDh14LxWNzwnoprFeQBJnTnrwUPdkDuToHZ",
  "key23": "Nq3qcwFMMwD6ydw3nJbWzBoXFzkKgv6PMGCc3H1HVNwVCxGNwZ1NCgMSBsa6QnMuznE9XxswuTecShdzHnVoGn1",
  "key24": "5ncDtzJZ1ELR895Dkybob3ogXqCGM845h2fmD125KFiLXVaujrZ5JrcdyK711o4bPCaJwFqnwzJw6LGLUneE1Cgq",
  "key25": "5dCuFRwqVYoTMcXSdyjCh9hg7XTZ9UFabt3YvtSYisxkWh2ybduYUi2XB4G4q51wqFzgoZsRVHUw4z1Z1s2zQcV8",
  "key26": "4Rwmir561A7WVADAKb5EuvHRULxdYvK8hJgyJct4eFHdKjhUSg8ScVRAQArQLfbmJtQxzbcrUhTBhfB2E8gXvUqs",
  "key27": "xBZ6jXBrht9jN2nrJqauszmd4R8TgYjXBb1mBXnXAtQV3JmzK5zSEMnXRnUWxHSsBWx8deyoPsm32H3oUAS8wjW",
  "key28": "5R9LfA5kMCdaEXwPtGG8WwWSnNuJZ7ZVgPAHfeSUH7satYnoBrk3S7nN8MA2kct9NZDaLqjEmTj8SGTn3yt13xDq",
  "key29": "3N4gJRbrvQDj8jy6qkwKHY5buXCf4uND6C66cogAnyHis6Y2pVhN6AEUeQXM995rpQNKDajXZxoSZTXfF5ZBeeoK",
  "key30": "5D1khBcWHCDGYtbAKMbKfaU1cr6uwYZ9xKMb4R9HNo5BwUKjNzjvTvziX2qnY6zK9decMpHrRNsL4T1Q4oZTomFP",
  "key31": "3hZpe4VLjBejZLi9Vyw7gHR5SNb6RVKmfVgdbTpfkjobfvUM2gLBzbyS6GLc777yQDsqcB1KS2WDhB1svgUACZRe",
  "key32": "5Q1esdz6U1zKhzdjkVdSgMs6WRFwDUeak783wmCDP7Xy8WCN5ucDKhVbN6Hp6QbcUJoQT5PVDgX4EtTqoFQbpcp8",
  "key33": "5etGv1Z7DqPD2bTM2vT59FEpJwzdWTG8HJ8A6F7mMM19KNvG7fHtmvq5TLE7LHwDdu1pjUPixVuxM5QmutoCTorg",
  "key34": "5pC5NsYvVUNeEasX4X5eeZcpLqV2LLXQY1A53vJp53w8yeart74RT6MZGLRcPKGj8N4b16yXJFJyf2fJwvgBfk7B",
  "key35": "5i2DZVKrirK4hfQpacCxcuzhXiDinEvFZVye4HNUvvCiSyCck9mwuYFj64pb6niDorrfZve6of6dmnVFiKPqLSCE",
  "key36": "5GkLFd6yYC24KpLjP1nBR98tMMxoDsQMahRjiCgETCMbHGG8jSHguZYJLNnBoz6nf3mwpN4ZqVC9QqcffAARDzS2",
  "key37": "eB7W3CzFYpNKAzaRncG7nR9Ff4xqW7Nvt1F5KttBoZtW1txGbHMGnt9nwHfqb8vo1FrAWkfsy4Jtv1ycgjSQ64v",
  "key38": "4UhxD6GsZqLqMeAo3i6YLrHRBPxo9XCW5wNgaM5o6crCR1oReRGSt4xWVwn1nzniTRJfSvQTTvqoJsSCfQwhccbu",
  "key39": "2jLHWjXpvH8V4pmwobPfynvHC66qX8rDCRu7tKQSKYNFcSBYNJ8vAiHPf8fZecUXn9ggZC55RVNefGPaMNXh7DMG",
  "key40": "5r3gzeKN8gEJXpdjxD83QqZd4JYAL2MvYfDjbq7vQAyobbbicgsJyQKpJ3sB8HojNUqTjr1BUB274o8ukZJtvQDX"
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
