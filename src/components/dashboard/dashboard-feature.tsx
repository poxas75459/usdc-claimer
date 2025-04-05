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
    "VgWnjJC2TNnmPLocERBS62FAWpajtCJTxTe5cS7QLhznsvdkNsujo695RSrGa9c9GZKMELiYHsgYhnXTSMaKgpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52yvEHr1ZTBf4jAj8nihhZTMvfikvu1HBmg7BA6ozm8hY1vQLHYjcyxiswK3NcsGwkUCwiqmeeNvMrAHXPZS7uMb",
  "key1": "4B7Enzv8WauqXJAjorgRVPG9j4u6jUPJYKEgPQaQhX5V8KwPqdXg76xArkNUATVx8TYiJV82nfW1ufKa66L8e1Rn",
  "key2": "3FeQEsWLFMBMK93SPcowDvg4vLWy8Ag2ypUDdcJEWDMKfZXAtLCHD3QEn92XNEzoLER7fUWM8yWgQd3ZhckAAUn1",
  "key3": "4na9xMroCpNoJHjg3FUTVCBr6Es1KbNrFQRcQoAPBxWBHmKHiSqjvCMBgdQVpq2eGx8gxQeZMTmfNbnqB92hxdBs",
  "key4": "3DccZsGdeTNCLfUDVXpvz2SeD5LnRmLoYkhGA2zDVv2hu722LYrZN9zheYuJPHQv5ervYVjJG6ers9AYUyBPb9uu",
  "key5": "4Hfi8QLhYvGWv1EDm3YwEr5MnW8nMoGszynz2WU3tibutssAoAN21Z343hLuwecNqGicSBKpsLWgDQqZkcxu7qwA",
  "key6": "2AGPgWUYC4Fr2r7UcVgkf9Z3AFwEWbQD5o7Hi2JagF45N1CuJLopBhKguwfC72zJx4ftYvk8tv3J8SHygH77s8LH",
  "key7": "3ShwYKJVDBk5P51wv6HoezpocfdyHwya7jCEvja3aDCyefS4jtS4mwpAhKqVbvndqoE7vcNZbSHRSc5UEBsyyX8Z",
  "key8": "vZnotZg9uuknHY4He1dYLoywBpw2kkhDYixYcSFpKdyf7vfPcrrskB8zoy34XhB2Q4qbTSKSAQQL22NxPjRjwXQ",
  "key9": "4fJeZ9UrWfymkaRK8rL35PkBjSf828Xo37Lh3Ggrxz7y3WUJLHXvmeBLi7jEdr5eYoe8rM9BYt6CRiKHD9J9XY2T",
  "key10": "3nPkUQhtaDThYQYpgZspusfzJ3xRUet1BtCT7Ufrwue2XrEFEgeDYMvJxiM1ngUfZDKrgKKijH6NTxfVqQXf3JV3",
  "key11": "2KQc7xdEdQ8E9nezjF3rzvcdTwyds3xjzhJ2svayGbfYiUSzvWSQnNxomVLp4ChCc8eQ7PsoKWB3WfPQpLcchoee",
  "key12": "2tgPhLK2W2n1z88n2nRRmRv4Jum8RJu8TxDJHUcc7XMnNCGxcsuQ6ZmSiLRRKGDKSnru9RNtqQ7SSkwDG7ZNGbxs",
  "key13": "5Wt6CGNoRSB8YanRrD9AGhBcppAsZb7fL6Egp1dyEuBEeJM4ftxds44xXeVKw4BzSQJunR3QvSDpjZFVprJtu8hW",
  "key14": "64WCjEiudhHVTuBQFW1GcipnhHevPtfTEuNtHSseecm5EnhJHLsb4dGrF5u4cwhjhB7AcCzbMsznYbvUK8YSp9Pu",
  "key15": "5SNZhqPrav7H9Byjxs3cBU9QNBvo5ASaBGVkBChwPJGeUaMN4oKQtN9K2CXniVxcWZBBVAvBrB7UaFQCUb56Mqse",
  "key16": "5UTfGi7PGkTY6LcB9qq1FPEtZhJGAUBG1xrGfSRcg8sA47wFvdaQZdxM5WRfDB572iTWkbqTHYtJQiz2e5d7Dd6y",
  "key17": "4V4E3A3uFr2PCzwD5DYS7XKkNvawZmkRuJrqwm7GcVx4ecJbYVpGv8iPyVfivDV45QPtwwJzCC5vjMtqapXQHWTr",
  "key18": "4AbVgCTyuwZKJRc7oVfkx3dTiPefAuWJgTro77GWWjgiuAj2q2ss8o1owAxc6JXaKg6ZeCD3YJoMpxaF4K5uNitD",
  "key19": "3YrAc6ouFGcLJyiQEWXdZDc9tQ3BSL1Mhbpfg6nwCfmoWipTFnZeTZcA2e8uf1wHajrZgG254T58zaBfcpdHKazG",
  "key20": "5ZyxvAjiWbyRZ7ETqBsQzXY1XHxgisKjHcPsc7ek22s3uVBQqoGPDrBpnFXRELe446fUPfjEvcMGyBpwFSELPdrs",
  "key21": "T1vi8pH1vEzUqBwJ7RH2cKcodrgUqLZrS4uLZ8znJ4ptASWMGeQAhBeKRpHZySNapgeg4gYAsaPwCakd8UckLrh",
  "key22": "4w4HdzGAxLceJ7RiYDWEVrjniybooNaCBporcpr5hhnJAKNXW4QWHe1ZYW8QBMs4xWDAH91fzsQjBbhMWgk4sKmZ",
  "key23": "38cuHyTTxDMxXRongRgWMXyZ6FDNUSPMMm8RNP3Wvzw3VDpkNCuPWAtpQCBHdSreZwuGKwpLHKhtEFLCUBZKWvQQ",
  "key24": "2Kc7vpTQsQVpLHEQuP88xSmdfcEoewjjqQjwbzoPPg5PVoikxNAuMHMtFdPza1ezABPZcjsKaFZERRtEtC5m6G99",
  "key25": "4523pYvSkbikL1Y249WQwT8G9L1u3EzyotxqnZcGLJYBRRu79rYdigCWYzQX6VZ8PxBXBDGQVUg4LPf2WU1TrGKC",
  "key26": "39CnSX5tLpjpvrW7PgTRnEGfdRveL7eZXK7wX1Waam5juokrucwG828PAH6qN3cvG1PMTUMV8yDLBpukJt775wGk",
  "key27": "mMnp8b4CVUxhv98qKfBFhHRTYVVmPTUTTZ8GaDpQQ4ZEv1Bzzp2W1XAXScUkLpyzfptc9XMfkj1pQyjSrTSoVJb",
  "key28": "65MPaDJdp1J2VhEFjYvPyX2xK5r6ePEv8DMWfHMmMDJsANCLQF8otwwfRtZ72t8gMepmcRT9AG4erdxLRuRncoKx",
  "key29": "3vtSddpSYofMkcpAP9fFLdxE1zgXrPFGavddnGcEz9WxrV7ci9fuBsSrHojrSgWCgojjY5nr6V4udh2CWf7zjoXH",
  "key30": "4j3jjwReumUjU3rmmXaHFohmNPVo79WEzEuGLbfR4gUQg6dFASbg59UFnMXTQXzHP9VzrZ4Crx8vC9iUJmaA7T1c",
  "key31": "3TAPXVxC7kbvF9C12M9N2YQ45zjieWUA34kTXMnbkQiMLS2Bzoo2SCDW53dS9raoRC48ZRAmfWjhGNrxfFBjfaTu",
  "key32": "4ZnJg4RwEqMW6XiQ1NdPf6NE6WuLgvBnNzbhAJwYYsh7XDfBum5c2yFahgzcPt8dvH24Qh3mruuwCaXMRwgFdA5J",
  "key33": "3dVs3kL94iw7Nyu1X6ZPSNLBuWyggYfZdcZFCDZWN9j5T18QrL7kJD3Ni6fCGPXBzniqD3hiuT5tmwRQfEUqHydV",
  "key34": "2ZabahkmCUS88rKPjSPpYgJoLF1P59c8YLQuw3mhg2D433ZkY6RYkaDwjU55k6tYpfGvR83U5tcTAweCFUf51Yfs",
  "key35": "2aPdzp8CZovoF4JLwX6nYt33W7amBGeJ8PCUKjZRVJq5Vo7b7VP19s6KiMzzFW4VtN96ETNerxyLpk6riVkNaS2f"
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
