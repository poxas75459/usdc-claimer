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
    "psNNDG8NNn8MQqm2BJtqkhRDLFuULRBvn7gGPbURzDyr5PvPUb78NpxfR6gpY1w9T7eizmp8KbWsVJdu9N4j7B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzAJVpCGqAujbDGtissDBsooDWXpTdqpvKWAJpBifgdfPWmphnqTLRVcGQ29xRbkRwkrfHCfaP4F7YLY3W1Cvt2",
  "key1": "K7Eh6j6PYSzTHPQZHP2EnRezgeP4a4GHBR8xAw7vspTy8DZL45QLzHm5HEXYLKLh4Sms6xhmztsauTYtcKDxGji",
  "key2": "5eJQsypFEJuQJDGpPMmhJnq82M8TetYvStm39Fxt9LBVFJMuJgDax2KAJTarfSWyq9vgk9KpG1sDNjEfyarJwgte",
  "key3": "ashhCghxo2S45fuv1qBtLSfoKCNZSKVnR478yJE17ENyemtY8ut9ztueaqCRv8vbop6s6DraYL1HUtKkNU6f6zu",
  "key4": "3T7nJBYQp4UUh9sZoLdRXBLEyTaHer1VTpiJ4o6gxSB7GtusdSUzJQ1NdtJENmodhnuYTMycAtg1a6C72QVwT134",
  "key5": "2ms17YYkHZ7uvumf435Tw5WHQQudCtVxvuGH9oewguo29siR8DqBocYC6d9fZgAWXakEfXnovK8m5b1E7s3kx7uP",
  "key6": "3HLzKrNpgAQmc4CWjgrYCTMdXBSGpCDA91qKVKJVLAPRFXx9ae92wm9eL4JYDvdHK2WFXbMxZ6PJqbpYzCYRSmX3",
  "key7": "4yApkQk8UKM4XjMsQpr7KdsYHQYPZAdi9A3Ewe8CgyaRYnEb3TQSXf3mgMxtPd1tMuXbTLU9WS4MFCd9VBYmRDj7",
  "key8": "4JpDdULapgA36qpmhkFnSUKC8JpUGBdTDwWfn5V4hqwVDXatx3DtUjxC5RpnzQK8qMqe1MTVtmK5mDt2ZWnZ3RiJ",
  "key9": "4ip2EaaNAMrepEe5TvG5PEBrtBitS9zNzvKGGXKwLwbG8L7sq7yQXnFgkxJAso6b3aY6TfvzDb6uKXqKi4ox6jSN",
  "key10": "4K95R4Kkkt8d8KLFsxaQ9ikLLzMthswBJwngEiLw3XNiHhkjpmve3NeHTz483RWepopth7RVBfxGco1DcGycr3oe",
  "key11": "5ozhGuhigKT45ukRnFXE8TqTWKQ8w1LV8izVqyWYB1arfP6mG9nt5A8Q6LewcDXNVYHiG8LozmZa5cbV3wG8NwJp",
  "key12": "5y5WWhyLs51KYb1vFEsMNHXy3FVMpLP56G3AGbKayNLH3uNp3uj8pzpee1CHfvxgFFXCFzLEipyR2sWfWnyPQ3P9",
  "key13": "33EBdJzFERK2Rg7XKwRx1NQZiEv3BUToMXASV8Tn1EvRPYpckwi4mymRs144nZGzQDn8HVaHbfJuegnixYnWndyb",
  "key14": "2zbGHnGUazWe5b6gwQ15e4XFBoqe6CvueCVupM1pSeTKJCxhQqiNDm2tpPMbYprMusiKgsEyPxC99nXUurpQu4hy",
  "key15": "23RV5Mhatt5iBaBaUSzUsETyPQg7YwCZmgYZbnTigX6Ba4QmkpW8LLEczt4L2KzHj1ffqS95WSquqZTC4aWEpMCF",
  "key16": "uL8ZLuvbSYZMScyVfLtWchZV8cudA3u5hBDpfZ7EV2Kx2NnbN9xRjVRa8iG5myUGkotMNVAfLG9E9dMCgNftJnw",
  "key17": "eBt5NJpb8MP8aTEBmAA7UnJXjYWyLBzaTq5ArAKmy8bMrwu6QKiDCGCoQYHadPfS1TGVodm7Hq4AhSNXZTDEBnU",
  "key18": "36mREwyphDrWo3Wa7PeaWEVmx4moyWmS5crti79pkSidmoUnTvoCg5uj9mk7NYJ6VR81qmcmycLm7d4cbFiji3im",
  "key19": "4QMY9QwKmJwzbVyMYSVJrW1EfoFY9ccMSEG4c6nF3EwBpJn6NXRqA8pQ6dXqDJh7B8KSWpbunrutSU8vujQkiYwz",
  "key20": "3e3HmRvxfuPvGYdgX4gSWbx1TMckEhWWC7e426gsBXAt7czQMP7WhBEhBSBVL8UXrfe2Tbkf6S4dRdCF9oVAjaNH",
  "key21": "3RgAFaBSKuWeBASWdFS6nWimMfM6Eb6FLn9YiW1HHhDDuWHBhgu79sGeXrh6Y1N7LcrPfvWKmJ5oQnw5LsmotNpF",
  "key22": "3j1Ya9msm18QSbH2RZhxKXkAYqgWvMSj6tQhzEYQuWBarc6rcbi3yxnZ2pq6kat86bELnnsdJjbizVBodex2DWou",
  "key23": "5LenhgMTcpk9mDoyGR4MZDfiWritfPsqR9NvkQskVGiap9MPULzHb4p97CLHYjMiKY7Hjvt9zgbSRkKorn7bZpTq",
  "key24": "4xpUkjDrCKa84tLAFXAk5uSxUaYfkK3tWTFUanrsVo9bCJsKWQMgWarWx9nJKYLhfCDtfYMgyjmG4utFfwf7wKsB",
  "key25": "59HTbkGG1RTNPVh8TNCXji387kM7VAfDb9bQQrLE6rhiBcjLdrMPCuzi25uL8JJsadJynEwc5cu5X7bQyyqVHLqR",
  "key26": "4FpsAhFMHGpR9YTRJDHFhZw8EwcAA2K9eoWvXCtZQQSyTXjzQ4Z8TH9tnYMTGToeP5kMEL8g2c34LEYF9qvH5khw",
  "key27": "VhzTyJXL3WDajF8GsLVRoTdG5TYxTnRr3MS7tFcjeqYfmrk7Ncs3sk49qnzpYjUdxvnf5y37oJ3mmzps85fxoEw"
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
