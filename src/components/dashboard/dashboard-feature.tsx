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
    "5D5bX72FvPUZPxmxH7vMdDijUSWpHhGz3WLkfgUEztnm91sEUrAw1AwibuxUYwRCU3f6L9QjvfMKHxQDB9g2xS3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osJU69VMUFZGwTeXfLbrfFmwP4a3YnrguB67p7C58KrAzPxYSSTQoDLL4TA5DxWcuKkmiAFSPov84gi377wLX9M",
  "key1": "5VKdbiPzGVWN1pCqCPNfEShtCzQFXZrTkMM2hsrCfbwcpkwqpBWuQtdUBvZk2fQUCZBU5GHrL7feMVByNcV6kZaQ",
  "key2": "4aX6786g6N8WL197YFW4qkQELAuT4uVsrSYSCFj4zwaGxRRy4xmohXjxzxnfCoU5EaTEzDnFwrZy8BBu89FCunRx",
  "key3": "5TG3EC9p2GE3TbE4Tgb5qwjUcegkTENCt7fW1gyi1JyHuPXTzzkVHbpJ9XprNxcNn1R8CBLUPAgJQbu6MC35ydkX",
  "key4": "4Nc3X239ipHfY6Nujr4tfSr7DTrCWVZLrk9oXzrFco7UKHJSwrvNK8rveRaC8tQLA2yx12Zw2vbDw26Kn5QUpXrB",
  "key5": "65EGsUpWf6ho11iN1h7xZeaLyKXAvqiFXCP7QJq8vZh7FELR715qw1M7yQgE9TmpKQMh9mPPRDqHC24f5xcNGjwZ",
  "key6": "2R24jDDkXF1VnLfRdfYv6SGHH6rk8wMrCFUn5kLHR59xaZodJ8eGKGqt1x5gNwErsbAznanjRTqLLArUjAhQvkfC",
  "key7": "5a6LsBB95je1GHA6VH2ew1jU4FE3d2rutQZmifC6NiyR3Fq9G1THm3ybJRCu62paYbSpEgkamAKdZ7Y56axGbxvP",
  "key8": "3WMY6a7WrGWu1QpapaAz1oiyUZqK4C39qpiwP69unaUimC3Zz3jsivy1PQCD19k72bcjjvTrRLhjavTbausT32v9",
  "key9": "2AkrxE8phXn9SPcnUsks64cU5pzL11Wy2wvdZduFX97yAEJMYxh4kTw5gJ1wXfPrFuCJFWJwqeBLi9FtiXn7D56K",
  "key10": "2yxXZkn5ZQ9FAdJabMZS9VBTszcu5kjCxbV4YQd5Eu1ekmZwMgQBAMBDBm9UYtpuVXHVQMKdCaakPF15tzwTyXTj",
  "key11": "2HvNHQpxq7tJk5p4VoZa2G7eSw8JJWh1YfYHEL2dx8JNVDHk9eqco28Lc2BK6UbjvzCPoKznHCQtts4CuZuZHey9",
  "key12": "2NES8yyZfiwPLuhJ9N4KUih595uSj3S6yCLynJNqDrY6zquVpenay9ux4BCe1t5t3ysdX5Fi14d85Ws1xQRBFs9x",
  "key13": "2ir2PWxbQmN9KVGMf4BJdPXmrsnZtXPqqSKATvQfZndzPfBZuSmDq9ehXQDs3piXbNXb8tLAubBCyBZEBsTGzv3a",
  "key14": "5BW6xsovj9jeCtKU1yEoERGdspma4H83fFwf7PbD7FdwJZpAe9kAnxDcWcwwqAngNrQMq2MXQpnG7Z42ZDX6Epwg",
  "key15": "2RefhfSPwPFo6sqk4ucCyH5JsrSPXQsbYRiFYoCgxuMnsqRDizSdm7qZD99QaMApMKWyWePbKhzJsszRN9TiVdgt",
  "key16": "3sj7je8gZgujTAz4sArKQXmP6H22LAz9q4T2TRRUsBVX4e953EkHDsXKS2ujxbNuU1Symou3CWVw9rr1nEvyASHu",
  "key17": "2EYMgLR99zmmkouXyGdjPbeocakrnhv5A13p3dxZppe5L4uzdg4eo3hzj2vzBKJAXuhUZQPd6z2wABj5FvMLqy8p",
  "key18": "mGwQabWuizeL3uenivLbCFLGTLPDeB7rNo5PTqCoBanPoF27tvktgGtKGBHkHFE9M2mQVwX1qe5XyHwMA6d4FKn",
  "key19": "2v3zp1DFTe6Q8AJbHAJ7mHFaerVreAFjbfcdcEPqVHgvdEopnnubMZA77vCQ5VuaCFeojV8XbmFnpvG4MTMKED5m",
  "key20": "4niF1dQvF5s5Jvd3cG5truJHZjdnfYUhnLn6ZzKHdAPqdbDFQym4EXnauVaR2VupnSL7yGZGU3kxRvwk51bkHqc2",
  "key21": "4q19RRfPNrBWXRBggfVefYkqQkp53G81TrWxjhYMtg9aJgTb5TMWsmHaa1VznAY8z6zQ51CYnMVV2oMRq9VvAxJx",
  "key22": "5xZBmix68UyKDkgueY1XYc1uaEPTGTEonticsCRKQGCmFejmfPGWahjHiATyoQCNUxepcj6xte4nMjTn18NDgqN8",
  "key23": "qWHHeoQ8jWxHHGv5VPpcy9SqxQjzpsuxndTdjeRANFwrwKdqn3dLgPTNh6ERCfsfPMnNt6dbnNkmTP6thUc819m",
  "key24": "4erkXouLxZayeYMQXyhZJHomvqjespG3Dexc76X4nh8e6ek51EYyyfJ1eUdjy5ui59Skg4mB9GmbgbQLwfRuSTNZ",
  "key25": "4yqLZcdEzDyiKWrHs5JnQy7pND8iPg47CnqBK4XrwtxLZ38zpgnCPmMdUMxoBTSfvEpU1f8DmCAT5eDHtViR2uFg",
  "key26": "3VRRqbXS6mzpBZ5GtRstZHFWmPAsadKUM5hJi7fyy8MwRcsTZvg3eudREnFtz1DNU1osmHHbBD1cEHvPP3jSyeew",
  "key27": "4yU6zwqzX9B9C721MZLoo66uSa1UTfxcJywrcsyhdTffUnypWWvdyzvoem83MhaxdEa7ibiWYcBMS7tFzZFyVTRg",
  "key28": "4FkJcQSGJoBhM4PLPVANhT5rhYggMi4Hy3zKDb6Ad4C8jzxt56fNBAySeHpmWhLSb8qxT8aGxiLKsovCvV26L9PX",
  "key29": "4hwXyye81fEzhaEQ45koXSE2ncipfK7jYDyaBrqxRPWrfKhjVbe51QzNCyXSqqs3s8HDo8yTfvJhPzrXRqDcisYQ",
  "key30": "48WdsqZ9cYieNPy8pLTvSikFAPpWXiYqrQvarXti6kY16d8b4cQVfeTd5BrsCjAco3imGMh44pxqudGEi2n8dodb",
  "key31": "3712Kt5DzWgdmaP8E44iehzyYZFWNG1ivT5xLJ41yecXPudnNvDgB4vfQvg7m7S4tXQxCRLpCwobSn6EcmFvLtbx",
  "key32": "3xB3MXN2iV1cEgHWfpUf5xC8cz5xggXsaGAdiTYii5Z8cKUHepyPoSC95Geaw7m4jW3acki9Uonr4VwUsTN4Vk73",
  "key33": "585X5y9EpwA7Ab9Zn5X8v6Q9MrAPtXS3UjGdycJsSmbZNcyAnzy9RuPpuRgEi9fv3xk5koBMoYdg7ydnBU6SFLgW",
  "key34": "5XDTZSbEH6ex7Fu5m6o5K1DiKHsm6f7Ev55EVfGNSqco8f71LUF9XAK7B4iQLRcVKpNGD491FjF7bvRbmZUim6Du",
  "key35": "4iknyiizSceeLeRbVq8VgFg4LHoC3MjZgNjaWaxzGRb6Up8LqwQ4RQaS9arVi9LKjvM7RAkyU18yhiHEqw6uCr4k"
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
