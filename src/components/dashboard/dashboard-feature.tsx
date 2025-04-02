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
    "5bY7wwQRC4HSsNJGf8dWMcrVxZqbREtE4JgBoRJPeW8LFHyjSArL312HatRiYUAoinkJCh93rNDrGzJJYKKus3ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNjM7ZZmsk7ocGGp9Zp5KPvGjYQEskb4KNmGfNUzFGVwCPwVM5teeTWFgLK6MqAqaWc4PHZ9p8qppg86vE3CAKn",
  "key1": "5n3Gqru2C7Lg768aBDDWMSUNxjkXG14LbSzriWiJyspbe5ByFDTU9PTmKHuhK1TQgFKkkL58Kp9329eGUTG3DkqC",
  "key2": "3YatfCwaRGp4PPX7TiHxGrbriZ2t5WpLjyBzNFqdSgKtscJ3JzJZ37CELKNcgsTN4ghwi4qrGpE2B6RrHeDrLQwa",
  "key3": "3gL7owkC4e9nVqixv4VxsCnTJb4owFxvRPMe9a6uEWxvzE5yC8ftQpbTpnsXrioVczQHkxcTDUZ5wuakfqMSeeD3",
  "key4": "5gsc5susTSMe8C3F6WmEFYFQWzp4mLSUGK7tF6B4uQ8ERtC1eP67CAtuBZCLVMr9Gk5unYHZWvKRFbuL4M3UsyD8",
  "key5": "wCBFnpmK4mDgeVm23GUNqzCuD41DN6ePUsT3Qr7VLvcCiKWMCpnnW7k8tRBGo8VBPUJuESX67RmaQwnkHTz3LqP",
  "key6": "3sozRLvsP6eDcurcoKWDkG5BCrHSRPT5bDaTvDdCJBb68682Qw2gJ4tSERWgZmbZ5AGbBCPzqBhfsa4UNLWvgn2E",
  "key7": "2NMQRKkk9N1DB4hG2HVob6YRAMpi1icxsXBr3AJVNWtqE8NtUqVc84KaWNJKx8vUwvxkuY4CRVo2PfTCmM15Yfkv",
  "key8": "2PyVSd9aKJCC5gZFeAPq1rbKvoQrRzqsErHWHqorRwkr5rRe3Dukj7eyAmvUFj5YU2Qaz1xGYetr5eHoisLGSG6w",
  "key9": "57WP2X6bs5vQ9RPxN954vSd9Cpbm5XmcBY5TWdunRbFxgVaVpDsvfjuT6VArRcb8Lb9a9XHL4977q75jbaE7kUuz",
  "key10": "3ZWx7vUjD2wz1cCnawyKbwrKbv57cDYifsX2uREMgF77dSkycULkBsDSmJQoTBgPgvEXzKcRMP91HYPoonNwtgG8",
  "key11": "5TAafGXW9FsvzvdzwBbb2sKgHoPbt6ygEm9fxHBorFNwQwcTrpUCNEV6xUrrsojKw7LJ5pqPjtReGMjKGiSQKt3Z",
  "key12": "3MUKKy6Nreh2RgsMzTknETm1xcRZyLEV2U7GRthiVwBHxpm4YXwEamw6FExwerXfsV4n868QTRc1egnq3k9f7z9Q",
  "key13": "4xmUH4eZFhZ4Bx65BzVGjnCJP6SGb65sEmDog1E1HES5X4xLXJRJZzFL1XLtE7EUeqnuEBCujamTHnn5QkAVgZj2",
  "key14": "55z7FdtpF1AtkLuvuF1dJS7T2RbfD45BCugKuFCcg9AxNYkUxPcpH9qZozAVGk6JWfSCDoQUGwRfmJMoNeSXZGV4",
  "key15": "2gJ7CdyGA52qcF9aBjYx26vwtJF9ifofiSr769wCwU4nTmCsgQ68gqy4zPLhoFnjiHBbGoFNQRj192cEbCZHduFw",
  "key16": "5unDAfactSSnUU9uutmh4o7bEhA14rgwsWQZjPAs6pgrBZwHr7yGWX9W96RrQKjRkp9gCTU3LuFsYPo4A8LT2nb6",
  "key17": "3X1dtsLbXxfGYcKvgzH9Xp4STEWzn75shoEnkVa8DY8VW1geNDxq7bc591twtjpiVuTzj7THortPmyJprjk9yVLg",
  "key18": "2S9mDJAcnt2KBnwCxkbbYevcDxmbrE2krzA4CTkrZEkrUAGDFV1AseyDy5AgaNJdded2sf4i5cSzRYtRf87u2dV",
  "key19": "29Nafe15K5gFHabg5xSYvF4vigxCyqnqAifji9BskoDfmdgQkqWhQmv3wcHvNqpwCFRcYUPhip7DseNN97ftYYSZ",
  "key20": "3tWTPhUx8QcYHQ1nvbfwoEJ3rLDx26njyegoYQSjiNLFzgNjUGBGisCC6HrCcxf6R8R2Qd2BdWq81YG7zg3L2JdN",
  "key21": "wFmmmmN9oAv8wVs351Lj9ajNHBgp4m1fMfpku2mjxWdnEtqsrTfyiWM8bPYTEeBKVPoSpoJemQ28MgnptxF5iPQ",
  "key22": "4p1EHU5wZz1xJUuo3Wto1b4fJ4nVUFh9CCKJngDrxR6t7FeMXZv5UnyExAK4ZRPA5bLiQzy7e7jtgm13pb77zPeX",
  "key23": "2t7wXmKnvks5u7gSoixAJy4vwcy2mFkdPQjRHZRMoS35w47GnmWcwCNpqJAegyuitxExQZpcpL93RQM5Bxjje134",
  "key24": "4MNhRuiAN2CB7jo3xpchjNFTRLnxSeaxPnHxCzm6dcQ51rx5tGfyqGquCw3cC6efufj14uvLqoHg9uEreYUXy7kh",
  "key25": "3uk7xjbccJsHVAJoRzcKQJPBL121dD7yfgAwHjPj2YASS1zBrJaZ4EZTVXzQZoLFBf8JgKaMAiCytZooQZqNTuTP",
  "key26": "52Htj5DRGJCDat3sH1qVAth3mN2gLoyftxAfSaLzU7ts2B4WQtUTueXuWe98zU6hwBsEQ7ZmWAkw9xUfFaE3ovAg",
  "key27": "gt2uhPXPYgUZS3MMtnKpdeDUfmbBu3uFjWZQTDM85EyCx91fhv7YvErQYKGPTovPRvNHdmEFefivpWk7c7kMjM4",
  "key28": "2BucofFHSoHjb4sNdQ3MthS1ZuecbkNYnAzXMLuxADXTsBZ1JfWR3nVdLXuEMFNX4yCCQWjJbBJjtjJLf3dCayc1",
  "key29": "55n2ftyhBrVQJAZZ7TCMhDJCiKwQJfbki2sHsJYFEjECH9DKdS2bqx26Mp2wwEPKR3v2tdm3AHveJAPiUrJ9jieQ",
  "key30": "8VyVwJswbtW8ryeHakvBjfbapBkqL1insE9btPro9mTgVLDoqvbGbWJ7wjGvfi4Wfvv2R7aHtmQJfg6HCk2grfS",
  "key31": "ppmTF2up6zt2Y4nhATKaSmE73zmzNe56RiVdbWNdeDx4zXAeXFTkaP5nt3N7nnCM8vV7LEqRpLkiYG1dnQupCHC",
  "key32": "4NPWfYzCpfs8KdR77TzFWktFDk7gd6rVaAfpASjsmJTNTyTrkRi2bJqqcxukEJhYq3BrX3WxX3ycAxUVhV3m9Xtf"
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
