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
    "29paF7GANKm5XXsVzxhuhNNJ5JhehWAQ672p4iZLaSB9HS7TUZhT7smHvJcKDPBc4vpmiT4rargF5abN4ZNKS851"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RrSY55boNuP6zGrxm2Q5Q4WEoYyxPwEvd9XvDHKQtq6gKPRr5H7eMZYfZkGgKdNP5gRCqsPYcmM48Y4Epe8MU3j",
  "key1": "KJXxkwyRdTHLZiDYDxs4sj6rhLP19KntYgk2sHTk6nXyXqnXtcnhAGv3sit8Cacm9s2sRrU92gA7zMV8P7fhVja",
  "key2": "4u8kcfRqF3AV5KdZoewVdqAvj7cP9gcrwG8KQmEUhybzyKVN9kVCMz8978RMt5Yo1tQMiKLf2658C55izyBvtKMd",
  "key3": "2tXRDrjWhUqn4MBXMiqRUXaLKGdDAjGcDioQQbWQxAvJ1GhXgsiAAYJEQxXruTekJSGMzn7bEpgecC9fuEzduhNa",
  "key4": "2idvSeLeS46mKtLrqqUwKG9PDtwHm8vYQiZ59as6aPD9VMsC9vXcD9CeqmFw4Ltc9BsUZ7y4Y4ib1GcKo8bn6QBx",
  "key5": "67NGX7qtvxBNfPLPZpywdc8rdqg6jP9gXUnTeHG9GczByDrDAAXvcd6yQYb7eo948iCdejgmfqQcz6AqtWWQZBKQ",
  "key6": "5wx3EWSq48Zj5u8rVhqJUeFLeWSUG13raPEgGNkmj8PBisEz3AoF3b6jGDK43eHHAugwpVEoXVJrcCDeWi2tayTH",
  "key7": "4zkEQxN9TSd6yTiLCe7Qpy41vN29Gb9bfP4iCFmQWk43Awxfp872n1qW6N6xTM28dMrFBZgsNeGAGqyw9NtT47Dg",
  "key8": "48KoxeeLNHb9QL6hRtSggyvS9cuvL64gCvsV2RHSDHiZ3qypJRGRdfdPu54LaA38WdgiRECrrtQByLiipAszA84W",
  "key9": "5RSPijsJuSmMFHfNjJuNDxFypd3QSGNCUjLQ88MJqEsc1Wh5r3hKFtd3uwPAfrCynbnnpoXjG9GPFrxeYNsojS33",
  "key10": "5RH7BQiwWzLModvv9hck5q24iLjySe8JnrbQUjT1vHvMkbgssAggTwmWwgVj7qrRMTeY1hv4GoHnKFkx25qaFgMq",
  "key11": "51BVyh9YzzqEyyC1Xj3Rijao9WEdR4JqZo6erSCxTEB6yy5Ws8paXagNk36EwTXjFxMkFgRfcTEPuzfj8JpEg5TE",
  "key12": "5FjcL7yQBSvV9j3ubSAQRy3QQ7HhTR3KRzXtU4HsTjDEQqaAWNyZp42LK7f4Z8hPz1PPtrDghr6jm5k7WokFfdvb",
  "key13": "3YvGZomtsYdwnE8L1StUmUXB8CwXyLw8f2S3SZQJPN9uKbGTTquXC8TyRo1qrfXujfmgRpNmVJdHkdviEgr3caL5",
  "key14": "53HEiYu8oGTFkaY8RadbErkU44PyPHWyvhknbbf3n2XniZs98RuqGw5NTeuvEvHSJjiLno7XUDWWy4h1Aii6jpQU",
  "key15": "8h9ZhFtLf4kAoLC8URNgLe947qij4SXumzaFMQvsvSMFKDkmW5HFMLP5XDZcPFKgHWqagyYcTN4dvr9FY3XTAW8",
  "key16": "3EW1wEhAozWzvoCrsdkrR68phvQPYNvhysixnocXu7JiftZT261VcZPLfsa4hr7SD3sMGtS83PF2n1hQCVBy79sg",
  "key17": "4cKAaNqJDsiJeCTBxmVb4HfcwZRMJhLFKuPNL142ZY24CKc3CYNTV5aP5eAJXhyW6P7yuuL3Dz2imPCVF4StFnfK",
  "key18": "3adE5539Rp6pU3PBf5eE8LXL7imDPKiVAsZXWnGnUKvaiY9THNZguiKQL4MfiSiLPSA9mSmKrgfuGPWjjqSvxZMM",
  "key19": "3MMJCD4s99shN6RnVDFkpazA3DL7y49tWohK2VUtoSQf9mG9CFeAxRYMkFF6bZUNvv5y4K9Wnd1kLAcT7kbZwPxt",
  "key20": "25iAVfc3oz5UhsjSekK2ioxCnkwbhAGxjSVHMEvSvMy5zaDz9TZxu2gjvN6igGUyDQRLsAQMxM2wkfHPusgdZYoa",
  "key21": "4Vz1GCWjtbWRDUPyL7B429ZjNxcVEUiBMJyLK8ReHNScfzB1jQAzcpCHLDoVDX2CVXPebZb5J9Swiu8YjYpPbG4c",
  "key22": "4KZWVz45PDK1n5o681r2juVscFCBg2dPnmFhY6mWrtdbT4MBDfQRdcT8yz9uXNufWUtNaCiKW2LoLTzXXFMjnHXw",
  "key23": "2aDHTsDFxoVGwXE36MhZaf8EX9aFeRoch2veJG9TwdvnnTjtDhJL8qFF6qqdyxTtp9PBH7omG4fJigpjzg8PP2JF",
  "key24": "3Hbami2okDLhTK1U8YgdQBMbohLgj4FAN78KfMuRmhxKF7rWknA2Y35HwL1pCEqevGvEKPrkDyQq1us4cz2U7VWt",
  "key25": "5keo5MPPUhfhW8E8k62YWo3NArbzKn5yHd5u61DZBwWwHNWipM8nVtTtrLQx7y43h7MueKgBFocAjn1xt7JB2r4L",
  "key26": "2uC8iwkpJxCA1SnyijSg4k3pQnrk2gqGe4w16vA2fbeoECh1qzfaRfzzj2tUGZ7CD35RxZhyvxu41AwBcg2V3c7k",
  "key27": "5Yjmh3ae34CiRFssfP3wxutaa9ivZmQ7YZ6Yuv3371k9JgztzhbiwGNJMuiNmthNYRRU2GYFcBftPPc1AsxN7Q7Z",
  "key28": "4SZe8RjFKCF8ZoDozk6NtognWuTMHhUkWwJ2gG4NtApC5KSuHJfyThVxvy7HdTbgh9TBzoTcL1TPemqgrW6rZUF6"
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
