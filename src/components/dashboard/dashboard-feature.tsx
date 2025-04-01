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
    "3avQkKVYSg82wmBc22nnfraM4NoYeeqhfhquBdb6Xfw9iMNKUv3VydjuYvDRDffLbNtiX55PcY9kTpE4mmpXk59Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qfN4XDUaKNsxLvQ6XDbkx834uuKuCBixz3FqgfmzqvayXNgUmsWxAG9Y12kGEJB21VrVTPWhmqdvjv6yfJR3riJ",
  "key1": "RFi1hdPi9YfMisCr4C8YEuZHPq9vKXrHrTiowU6xcD4jxw24gwz6d8ARMjQY66ksibwexaKSdnwD5bQKtrwcJcA",
  "key2": "4XFCz9J91rnTxAwDaZvT2n8M2XdkV21i8Wi9Z6kJFdFUXJ3xtriziFFXizzBjUE7Re5Dq8r4zLEhRC3ee1jnxcGn",
  "key3": "4HD6uvFRy6QGTS6qR1SHgqnASA9tgWAvpzvQyZhh1bvXDGoaWtrLXtMN8cRvCW1pEU3RHRNpqXUnk6izpabZXbS3",
  "key4": "2c4inXi8BXTGuereJourqKMqNyVjwLbRnCFqbzwaPZ9LxDoocs9wE9mkNUGcHHoAFyqQ45nvYBBEmsBZov1TmNty",
  "key5": "52DWQ4TEZSAmUg1YkUvGKXwFjHrbNM4aB49eXzcotUwjJmJCVg8zRUyjfgSxumBk2N8QrMUY3GTUUmCgaYMijySo",
  "key6": "MVSm5dxqThCyAoTcjs4sqVfCf4UdypU4wBjii4LSK6QwSZipgeZxDyEzWmXnwkkvMqmrLS9i6EN3EExCKzMfhYU",
  "key7": "5yLVhWmuwBDHWy8xDQtLFkDLYHt3uXdw8ZVKEukwqVnfDHvhi7fxVBzr9fbxLEovkgwKemsRJJjir4hF5h8m3cKe",
  "key8": "2VmoqjDGteonXKBqU8PbAf4J7nRMyKa9Jcuwhrwj5YKFvBS7wQzUymq6NWiVC77ma6Pj75c6gMqQqJKALdGpaDEX",
  "key9": "5di2Ge9YuNcsxwiDecwU6bbVNf7yYeKntcYGhbpsPdhkKFyAqAShEKeabrCgu4QDdR5e3wNro7R5BrCbVYEKnxpS",
  "key10": "3TrdtudrSeYA1npi5UuQPbT4UqJvxq1Dq2bDYsxyfpMEMpoPu7g1VM8knemHnebqsQtLzphVkPV4mveeFrE7fEGA",
  "key11": "3kkjXKrXKrhrDNDbWTHWB1gZ1uqfaW2VSkaEYPisJJEgoVXFmmmAoBKkYSA2D5o9KdTVFmcED35i5Vd1Ft5QGCfR",
  "key12": "4TxxcNCaALv5BsuQKh3MytrcNhTppBsjVbE7a977sCsW3CrFkfp9oeRc2iCivA2K8Ly8hwDwqxgv9X7tGGJBLRQY",
  "key13": "qzCFfSSZjzEwq3XGWwPKsecvmQVdLSUAbLBx5Nc6UmDJDfu715AiZxc5GT1nkGXNSmu2tpQnhE8zCYXKgPu4ujB",
  "key14": "45RkfbBmbbQSjScraDWd2xNvAMTHbpSHAmt9ArFozPMfE6hQqYuW748FuxoqaZ98qdYLoVaxBqLrvFdGcgXKaGjs",
  "key15": "3w3JKrQui5LeqUesnrSandqeVmgd8yTdKZGCJKeXZKcYUhpD8zZ1hWNoeTmFCr1kjSpgXxgBVyYoKVNUUzm3HfxB",
  "key16": "5tZGCwfhM1bqcf5YyghkQug4m9yjsmCEjjWb6gp7qTWYNsXm3ssCNZS2NBUpU23aBDvFNTwT6Jc5QLsoJ1FfmwSP",
  "key17": "4sqhaQ7xTTQDfFvcgeM4YepoqB1uaA3zTEbuKCyJp8d8ktzWHnsirvCZvWqRHZq4sktXZ2xda36dso6nHCiEBQZJ",
  "key18": "4pMYstiSS8E4TYRA8CfQrR3nFQ5EoBLXvG8prtwtpZmaMNuzni8SN5pokvs5B6vgsG7LV37YUD4KEboiyU3uwceg",
  "key19": "5utrtETLS1yrnSrzEaQHuvP5BvDmLLpstmA8j3wK89CtQ2kRq363aD8BBVCyWaCJ5A353hpX5DEJTjMMwtYByJ3C",
  "key20": "4CP254LVhkYh7ZS5xyRRbUJsdenFMiVB33TpTMakDhd3yBLC1oQMTALaK93Jas2zgfxui9MkL6CaYhMTvvBkFRL1",
  "key21": "5der1qRSNXamX44rj688YWC2Kyz6eV6w9a837qALS946aJmHg3aBesZNGHyTyGcxfx8NfdL99ecpSE6NdYvhRJKf",
  "key22": "59gF3xDcwHo1RVdJdQpuaHQadEV5NaTgTc3aoueUvDmrFkKpYZf8a3NqVTEs71gUweY9Riy9BrmQfSwRLthB5eBU",
  "key23": "4qTjpMgpriuRTEyqTCJT2JheHCG4Z32PyKxskfi4CG5R7Nqa6MozS9MyCPvAZgBZkrWwgpYbtJQepf6AUaSCnHY",
  "key24": "5bpFjMojni8mCioGcLwLyzroeotP6cyksokoyZ57EYR2aRDcxo9zQduy48WXVQFE7DqRiXP3UpbqPTRT9QGhcZiy",
  "key25": "3j5VeXsXcukVMZLuqRnsrMDk2chZ6hk45pkqQdNTqbJGAZGFHmDgvm8ffqK1NVh2nCZRqNd8KktQbnMp5ZcvyvkU",
  "key26": "7DUvtQd7ZtV5HBAVTAzKA9R1tgknYwiwYfbB4PVe8MKxbXCryktpcEnXmwv6r89Rk69C8yWtVYR5P7nfWHqQto5",
  "key27": "3DqSbEq4ctBemhc5UMM2U1ffgUmjeSazRrsm9d5SWX4tDVTeSvYotzbp7dLShQsqSV8MNLoMtx9QKSdSxqNcyfkZ",
  "key28": "fTE2bq8dyBSaxe6mf1vRkWE7p9ZqfLqrnbcVrAiuLMAR9qkmLdMGhp4WcucTeY3qR3FDnjHKQrBTYZ3Gj2KketF",
  "key29": "2hZMaeiUNDQzzoVJWU3xL9Pp6XrYTVRj5tN4Rm8YL8yX4vgKPiqSZSxGttG1cvQi5ETnnjwtBJoAWW2gFJyKewRj",
  "key30": "MSLtsTvZZNsrd4HzyQNMQAD2ffJWXBrWqtQwpQpaVr1jFrBczh3tqotLZcfF8CjJcWRTmxFmoXcxWRQ9fgR59Lp"
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
