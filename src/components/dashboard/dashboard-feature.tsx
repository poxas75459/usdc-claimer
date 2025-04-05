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
    "4877LQoSU78738Wocaj3SiEcLnbYxKhAG9JXCK1uVFotD7SGaNmfvnxS7DEYpjgNvLX4vPqooyH1sD65crbSdswb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRUTUsBa7J7XCyrMNEkPcVv2esecLduFWv3q9shE8ZDmxEEoYSdG8QucQwtMDFHtT17V4Qf4JKWZ7xj1QacR4yx",
  "key1": "219r4j69JF25q5wXmqLsnYdue6h4uvgsTi8ikyEUFMhPoeq32HciUUvJFhavQJpApzQKMLQh5JrXJe3j44aVXePc",
  "key2": "2d4dggXNC68eZdeVEL9BR42EosbLjL158DBAM1B6RimeyyjDMKL9qb3GdRpi5FriLcQ9XticdcNRHaw3RSdi3t6E",
  "key3": "2q38KSFF6j7hzrKnJjHybYeEpugVfDF4QjQoirjbyRX5WYBGjVhXPxUPL1nmktKGCr5EP4MxF621SnSGHySG3bWD",
  "key4": "joyCVdqxcPkADEQ62V7zcCepAW4EqH7EDW8gcjY11WCQXfoWLDpPU9T6QmC6VRTWk5CVw3QqqG6ms9Q2em7ZcBF",
  "key5": "4zL65G8WGYyVZcwbLBjoYmD3RjCBysrWSZgZaFsJo8jVD5XD9mYTT5qFssVHo4o4b3eBgQbiCMNxLsT621PY7ATU",
  "key6": "2jhTsCpdsEVVyC89csXMgzou7NwMjBFPXGqPoggC2ccwfPVM7uQhUNNNmH2tgChj3cXXRgFjMmevTf81vbDqRkAk",
  "key7": "2TH2A8mnW5cF7LqyTqHZkxGACh67J537Fp8s8CrWjVMP6LJVUrctHPbJkqrvSkMmdhHGMyMr4JfA6SC9Y31uMzv9",
  "key8": "3xXJyUp6e2Zc6b6PiLYxf8Qs5NoGR2eHVA4XcMAp9pvVi2GpHMYmY9GHsEWwGaFXd2kBtiBGySDVqZLXTnxgDjCe",
  "key9": "3qQyGF9PGf4BWnWnNNVFb1RL93mLDCfor6b31sofYNbKPV2WS2w9eoquQLacadhb4g6L2MLnSsovT2gsE5dFRyvC",
  "key10": "3Cg2BPGwapVRBRnXrTEb923UzfRoMatutp4nWksGccjeGMDYfE5MW2p3rKemD9R1Hyi3jZVoB91JXUdxvfxhx75z",
  "key11": "4qradBhCW3ygfV9uuVL3wcznax7RLe28ZajKLT7WDpoPk6BEgbaD1B8EgrSTT66J7icrJqx25Fqtc2Y7n7fhvPTJ",
  "key12": "2NQvxXkpPeh3UESf33UtNBMuP6gpG2LMMh24E78HsMDRxT3Y2EASoLvgTerCaeT133jkSCfjk9nQeVeVfcJmvwkm",
  "key13": "iv3BGC5Qt1EKzcSQApBJCAZZgMX8KVJWwb9HTdes5ieN5yA1M4ktPmFMtCm9Rsh2fcxnLpk1jmVgLuJeDRAAnEG",
  "key14": "3yMwPNuab3UMF7yaCBdF2y9jkwQTUjw87f2TVCMxeYSgo8dujeczusMW3h1W1F92nauH7anWArZvH9UrLr9VNnEy",
  "key15": "5p8AiP3YL1ECJwA7xaeXrc1VDwhQbUERtQaqTeQsCicxrWSrFB8Ge8vpdvWNLSmKdApsKv58Lx2oB1y9nLjnVqYe",
  "key16": "3XUZbrTT3nFRhgwExzAbvZTTaCGUmapE3JruFWeTNyBacAbrYzErcdwzHin8qS62RmT5xQwAa1nuiDbkVWV1MWqG",
  "key17": "2hzHu7SroNUH1SX7cXTsHXk5iucf7AFHjmpYA6PFTdrknYqorhxdtpDMYrrDzXRKE4X9MxKCeyxDrCinvNYKsHEf",
  "key18": "4VhjCAVuUe8B5hdLYQ6W1mb5235boJxbatFkHjXbD5D2YbAdQ4MoYsTZDMPMdNJarBxEueixD6QJkyKKrTPCx6Xo",
  "key19": "52sfmwWnRVoUJ2D1QJeGc9fkMoBGH14VER5qdP52hcmDa7YBBL1bZvGb53r7SQJqb7hnfzX1XjrvpnU7MQgj7usL",
  "key20": "2t8vvBip5atQAbKSjMWafG13jJokry2pnwc95qbkcsh8JCQZYoBg2kc5s5CzJxzMdnkKNQgmmuCSQCdRPkeV8hxA",
  "key21": "5VHUECRVGVAuqYgxrj9UYWLZAESszfhUf7ag7aqyADXoNfkwxjUHPK6bxponx6QeaL1RynPgoPKFeDWTAuXLjEbR",
  "key22": "4J3xVVApV7WwPZZAFDG1CzFHVK8jS3swMp1ZYqTf2zxdTGRzjW6FvEPbbtu16VLfKxbLB51nkxK4tpaXRcBkGoAe",
  "key23": "4YfLrBrfQ4jkeQ4V4Rxe19eV8VG8XnoknuaGjQUZKQT5182wb6wZY3VETAM8PwCcXfpTVjCdvYfV5NnXwEag8DbF",
  "key24": "4Sz4WMd7ZiKmbDCppALFEAUHquEP9asgsM14imzb5cBdvKBVqjhvCA2rYwsiWwZxc1z669ewPEGeJmsXTuunvJKb"
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
