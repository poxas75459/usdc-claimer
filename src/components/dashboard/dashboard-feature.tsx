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
    "4U62jnTTsVoujdhBeS61w8TTRaFt5RpVMgYe1KziEUfY4SbSGdSthwgfhE3nLpAMP2c64QF7h7TUEHBkZqxjJYcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtQY8ChATVvJzfHiSFjroJSY7dm2YZ5YxXzdb4cY2SHXBujvabFvY8gkD7U6smTDD5gBKdsc4oMQNXKAkcHYbLD",
  "key1": "3SFg364zopCWrMhMGtMAcpyDVnTWWppFJN2DSHhw8XLAeXet2z4DrzUGok1gTLp8Qrv67C8nQJBJpKGEr1hNUB8i",
  "key2": "2tUEhaEtzND7JMEjKXkEYK2LBGm9Wi9upkKQmcC6gYBo3jsgYTR5qUVzhJXrD3LrmkzPybSVZCXNwkkKXbDtDKSM",
  "key3": "54RnsrhZ8y5pGGaA1jaoRAWv8ybbdWAffSwNH5RkUBFtSQUP2fruWtNCyxGL5JcnhEAN9nYBEjTu3EQDAK2vAgPi",
  "key4": "2SGerjc5QHJw5qqN6ANcyBh5FJE1as68jJCqjA2dKVxdRWofuAYcStifyjyr2sPE6nJmQo5WJimZPGr3gjB8cH4Z",
  "key5": "mRAta1hkmuBxDvyXufonAvha9qLj6rfwG5ZvbVqr938t6uLAqD6H9vkq9vasVt3zQzASzcYRSAF6achu9Nh54A4",
  "key6": "3uzNtcwS9Hp8KL2GfUC9SdFsh7V57R6YSYoQBu2YjJKaV2Mcq6tUFJehEfYvvFNRN4iQHABvWQ9oL4pHnAcAB7zQ",
  "key7": "5R6RaMpckyGMpi3ddcnifwTVNjbGT3iur9AEx6Qf3YfoPrGHb1cYo8sAJRff8Sg7PHdhZYh116eKuRczDtJyDdK",
  "key8": "2B2LvxYrKjrLrKrGHEk3yhZyMDT7TLHwyef9K6sVAvi8QSSvcpnqYEaMdeomY6c42vLVXzHSK1s26KUYx1zKZXWy",
  "key9": "5nbdKK8qb9iFds48dxuXRLCUuebMKZWiKkvwy31sEu8G6ksYCJVVZNrU9UQjXc3QQXjW6eeDn6MSxufAhiJpvkWT",
  "key10": "66EmoGm3hMyaMQeUZQv5sQqurYhXBE4wNCpjERhL7YoPgraFt9KHkr3LwwSmmVX641Ex2Hj661EPPDFRkn3HkGpG",
  "key11": "5U6cWsPyJR9H4h8quzY6vRFKEAjTXNqPYr3NWpXb6ECHv6NdXAB75pMxt4ivHuduzCWwDTfQyr9nosaNFPM8n2cy",
  "key12": "5gyKTToA3xBMARom2jb4LXaJ1Lk4NDTSwd7Ugj832gYhZ4DtSsGahBiu9xp8oZE3EtgEDsfBzVotathmsKBSKofc",
  "key13": "2eN5RgQyeYuZ9zqwjbqbHDuDgnjughudFct8sLGs1grkktFLwhecFWUb6XDxFcDwdGmwz4i9i9bXH4WmK9EnaEqW",
  "key14": "wNS6WhGrb2cU4JEttSu3X1187GFJTkPkTBk9cSetG7RLaRa6jqBHJjqu1qTMgsWj36psw3hdB7ygfUGzdoRQKKt",
  "key15": "UBGztoEBauStkVmWMWLZy6xzLE14g9NDpdHZx5zvGjVEVb9XVFTANGQgxNPehGnQF1rjmhRwJXr4BBReqv5jYtx",
  "key16": "4krbaX43T1sViFFbETwyScXRWXYHZXCcVgarDy2Ma2fPnvpTbpiLWDinWmgVqbShDdLU5km6s2rVksyihRSxpzKZ",
  "key17": "mQpqxSod1rTf7kjXY8J72RTjcLZh4WoJmwrLhdHWg5uWmJLh6T59wt8B7YW7EU5mFCMU4Ty4R7d4fLP2pkvrKso",
  "key18": "PK3doxPSMyFANTpvpVX7sR9qJiLp6WPLueJsFnBHzAEYaKhhxCWUj9u3jEa6xzihJqqD4niKKZqJKHuCQmEWgCb",
  "key19": "2xNwwtmFoUPF745RbaYkKNsWBYUWgEcWJ3iu3yEyjWrG5UvzVN2RB1H1pAB4BQpXPTzLcKd9CA98o9ogkE13AfRm",
  "key20": "3EuvYUsWSMRr7v524Z2PrRZkQ6x2a7fqqSXTKxsXYra8qAJWeiaGo5qM1rhcK6sYa3YjwmZeowVFEzoEef18LicR",
  "key21": "qRAAn2qHr5dVxH8dGVCaFqhSC2pfThH21VUAScoKCNc1AqESHc68g7jzdK6a5aoQTCmRKs2nZeYrTeZ3pvRP4KT",
  "key22": "4KMfxwRXatZv9oRZop7wCNfBei4wRtsyPujWxAi9LYRBEHKLeQHbSkVkTN8GVJQzbWUz44byMAs8WGWN9AwDoZ3L",
  "key23": "VXhnfyvfVQBFN7xXnPFRPC473gm2iPyavfjWxKMT7KEqvmYcrb9732MiVAuY7yGCUoeGyUNvhxRTwvHin9zBtPG",
  "key24": "3k65U4QVXsJMQ3UAWrt6RVaKznEqTaYA9xJJkkyhGQUWA9hNAUJ5A4YUdP4hEvAVkhZsu7wLcapqk1sT4s2j4tde",
  "key25": "53nsAqznkWzNGvAqNMFYZYBAZqvFn2Mk8B22NaXQRE5Ji5vJzo7mrN5sFJ7ATESm2YRJVJKCAy1zJgoVKE3dJcj3",
  "key26": "WUmx6gRWzt9qLRBGeYiEEWirLW4n7mRAoWW98ReWHUMThy6RDR4QpeRgXbcLKu7gMPDCREia7s3GCVzy81tYEJJ",
  "key27": "3K2RMMK84pbVEDehBPLK7vv9upULKQvZjXVNuRz2eTjPuAqJY7Ty4UVtM4X1QrCxjrq4pkyM8XxLAVeecukt8Lw5",
  "key28": "5BRonBgE7NEwn9YDABPDm3DQDnUE7NJJgi99q6a9qMZeGkf2kuebeWAvzpE8hLseZFCussXzbEFp7SmXfeDYwLN4",
  "key29": "4BkYtHAGmMqgK8b4hQ1tBWWaRMY3FojugcngsmGoMuNqkf7XDG7Kh1ti8521rrrCKSnQLvwZWRtqDLitayWXCfpR"
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
