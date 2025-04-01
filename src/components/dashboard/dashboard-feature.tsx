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
    "32iWZfHzQT4nViertV2bbqNjKbCQXKozdKbj88QdojXCoRSjUtH9R8w5CAb6HAjZRGWE8DSRzZuKvjCMBNoPDSh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChSYZArhGePJYZPrrW7c4ZCqQQ21Y4PwhvF2pHeSx6WZt79ikQoKz7HHaEGkRrk82qhwiF5hSVmW1NRhzRuA3aa",
  "key1": "591HEU6tLFjGQ3JH4AnGrYJN4q7U1Z8MiXcfAGtYHygzHpVxKGKWyhtKAG3ATwdXbF1ezpxcvaCiP557dwkZWEZx",
  "key2": "5ju2e94CLkV8haHn5RURKjxg7HejeN1Sy6xVLGHpsrJGZqHR8zU5wQzPSc51p82m9yU469zjVht6fybnmzMWsVJ8",
  "key3": "4tCrJniEGxuqLEMNLtuKFaXvAjJcGqPUgpAGXcsEtmKdyjghVYk6SxZHAifqGwtQnHnsMX8CShHtkoEaGK1wSmU5",
  "key4": "3oKSyKN2g5GQjhqokd7Jsot9DMNNEcLZDMGR69HdTgoA8E8Z8AD4d3wJWW898D1b2KnqnDGQZMSdKaWqC3eqkEFo",
  "key5": "ghQwm4ZkVT8uuENYziDfSNzdnFCr8fBPTTcsztT4jGUED1myK7rt4q6ri66ekDF5L7GhWuSsUrixnSF26BLJbEN",
  "key6": "3o5j2iN9DBambo4KZ9L7FHvq6VPFU2uNXzzGtngM19JERDsJiJpcepMhPN2H81uNoWUVz9EJtUrehg8cSHt6mTME",
  "key7": "63f4zG1pYMWTKPzCasBxJAXVkGL1WYyxKseKYesmtRxu3dgDfjw53X154pd9F5VpQ6iAWThzv4W9bUKVUTN79Wij",
  "key8": "fDP4brBF5UTePmbes15EYtGBcnckHKXCaCD9Ya5P3nPfSQZp286TPXvP8MUw3cERAqZ46xoZNaYRXYJJHvk2kmV",
  "key9": "2Wjm3GssNgkZcgJhRgHLqmGXjZaTTC2sXVPUPNtYUrRx9Z8bhF7ZMVVFSEyZn5Lwua6bBmCfF6FXtQj7MMY9BMYk",
  "key10": "sHEah2riHLg8z8mUbKQWJtSnrHJRZussP69uSifuZKJZg57wnNmEZdACYshSf1s6wq4uyBFtZYWDkMgK51Z6jEx",
  "key11": "5MYJtpvw46TD1e5gAmVGvPRjfVpjfy3dEKqN8GT51GtquzzXqW1VeRtHe2XLFuf1sU7CqACMjsYuDgzpG64SG4Un",
  "key12": "3rLfXKhkUnrHwD1qgnR8APuu9EYj8M4gopAS86Pk7JubYkZXX48PY8oEwMDtPrznty4zcmGLqDq9sBjyk7wzGHTj",
  "key13": "5iYn5H4eZaLeac59Ni9uGAZRi6c6i4nmGFN9G4b8sqC3RWyTMqAAPWHrjLGEZwVyQmHCaH5E4meT6Xto6xxuts3J",
  "key14": "3gj2LkH6NN4NBEnF31dmdLPNpL4ezF66Dd4dML9zcu4HV42bXC5zZSLk2M4buAEjkAijVpet8F3Mb7SnUN78mce6",
  "key15": "41HWBooXFWcqXfbXJcULCrN2mfr3NA2Po4dWKTroGMBJfurf6xZzvdHncQ1UCPoEhNC36AbGmiBnosZcPCsn6a3V",
  "key16": "4MgM3TCVUjbtSuTesKieoN6itAVGxWKHrciZsyu3pA9N1LbyKz3aPjtWxCo3wMjUqZFQnBiZW9nqyTnkN3faU7cG",
  "key17": "2kvd93w2aV9Y2xoLbqNqoPL8QeAS1eTtJHGZCkkAKHYu5ob3h4VipHbNZwzHPVxaYgUb13u3cWzCAEzdCVC4ZPjF",
  "key18": "4GzEKNHZvunGqkXbxnpyvUaQChv6XV34ZHyVFzFTyvFPrw4JWggJi48vHPzB3uLnSt5yNFCrADdKYtcGq2z4NiBY",
  "key19": "3wGVSqrrvEYrXamVbC4hZsBS9Vzz3qzQ3Hn7YooAochnJALZJAWU8W9cjJJduDyfYNU1sZuaNUemwdZsTSvXTM6m",
  "key20": "2ub6XE9L88EGEY3Kun7QNjdADBWqHGsE345gPhwYhNVJpjZkPH2XyPXwYUSzKKVsWjDJAqMX5aWXknd9xfSP8z3N",
  "key21": "3KJFGXBm91137e8MVYEd1d3dzTVWUPb7DwvgxoLSWyopHEWqyzFLBWFivspcpozfhvd9P9o36uCY2XU43pNrLDPG",
  "key22": "519NUaacCfHcwm9zg1c6Ja3gixn46hXiaJU2rVhrzWn8B3LZdxyZxmHTGJgF7pomSh7o8HkMAi5wKNNwug543bxh",
  "key23": "TCCswsUgP9GwFxj3QCyLt2WtNWb4ibXkQqiYK8yF3dmR9N5NBxdxYVNVPeZHCZiZJ6pF57di5oXtFSvCEa9KNtS",
  "key24": "2uqVTYMJZ8YQDWdaNvUehQ1q8Nunnhwzik8j5xLrdhP1mNsBSyrnYPB4w1a6X9hRhdyX4sBfCwscP97pouD6iEHa",
  "key25": "2RbJrhisFJd6F9dgWibybg4wV9ntnMGoLLg3sBdHzm1ehAKkHgnLiNXYeqgFUWZvnoswpwbebAQzFvkNsPNTghBH",
  "key26": "2pd8dfkZ4yriZhX9ZP7kCsPTDENMpyVBVjViB1BTcYTR9KwiFgeKGrjDEX41MGFXv6VxfhxrCHj9Nmdojf8SB6Zy",
  "key27": "26h9QWdjbcxHBdj8bVbN3oVNAnSRtYVN4AbWa9VDfwjTf2G7Z4Vi2nz2cHbwocEKkQYuiSsbrRXU6rnnGENUAWdi",
  "key28": "5E5F6s7HMNdgdBtGxv7ouTvVBNbU2wzRLDJzKT5LXK54xa8iS4jWteAfpiDLYgsgUze1ytKhmfJibTS7Z2CHac8",
  "key29": "5o2cq7qHQhopGsknXY7XCCEYvb9BiTbYgz1MUDfX8ami83rcGMM6morJLKBea6N5XLTSag6jVs2zHEsvbHhjB7qD",
  "key30": "5PJUJzP7QH6zyvYb8oKfJBaRBhDEESJnBupzMfKXxmMjdc4eGS27aQYVXhEGQQ7L8xor9cGGbtMLVmCXxW4XB96b",
  "key31": "3ay9HZCSwNq6E6BrYFwqHbYziyrRidWiWXZMbF5DT2zNsE4AFn1DRs2tjaRSG7EQWU7QDMvpA89qYCpjJnLXAoAC",
  "key32": "3Zou7oXdJSw2r4vVmjMDspNA7MmXY18AgP4tysr6Behda9HJndue7TcmwxB9UTHCUe1Y6raHbLuxp6ikupVhAPyt",
  "key33": "2bBWc1xNs61AMK7hBf482uSQp88EVzTzE9e8BVqcSeDgc3ugy7GA93cDb18TJrJDDWXZQBkmnW3vMG6WoG8rZi3z",
  "key34": "5JPc1PEgEnZAECxVQaSU6QRtyW75gdb1dQF2KWkPGk1tKG8hK2GxT47FTnLSm2yB5yC2j9NdGR8ym8WP72hXVTHR",
  "key35": "6126jfFDbNBULV91AZC7AVzUGVJWktfwcprPnkiyRJCKMcdBComXY9cTScAMMmkngrGeJbpAyjceQFVY45AYX9QJ",
  "key36": "59VinHQCLxN2Z1N8v6ML76zqfYb65nVbZLCnfnN4Dipbj9nQPWgz1cEswth3aB1nHxy7gWVZyR88L9YdddVrPgEW",
  "key37": "2xdPStuobMshPpc1Ei3HDtZBN274K5vQpoWXQeeJehsdVtrSoXSPj8HkLv8hNwSNueUSrzFtEv3khLEhV8Zzg3Bc"
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
