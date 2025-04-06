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
    "fBiZYqEWEoW54jnJ1LTf1176SCG5UrKT7DjXrSRaoCsSRjNc3VKZmfWFMCGjbwTEw58ACUQ3LmKtjCzqgKx94HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sfaJxV33Bxq6hXEXaNRejGRr7vVRTJDR49C5bzoo8kjdD1codXEDeDZPUGyGe9WP4pXsRRLKxBDzrFSYtBtEC7r",
  "key1": "tajE1MoqcE9CP6s2cU3s3WnTtWzuQS6USrcXa13dSocP9xLip8D7iJUPJrbdmSYAfTLdwW1z1bDLeerxcsKRgo3",
  "key2": "5ovhogTtsmuiyQyQ41arkA2xmd6CSuyENsAiBkrgYeySrPZHLCutwJ6Ed4Vwt6dHXkTk53nfFYa5fF8KwvQ9TgNd",
  "key3": "5vHjvnsAdiBMwdAvf9a5xxSEAmRkbBgPjE8Um4d8TriUmXzWSx4cuSFLHw8EuUqFuFHLNeCYJ47RVSeQRkyAE1uS",
  "key4": "3kKVWFqmFVonDVSNa6mKXh83YQqp44hr8246WTVaJPfeGm8MRDmmbAkMkSxxbS4uSxbohvALEGViodoXg6dkqFFx",
  "key5": "5FvbKc91E6ZGEQf9VMuMFYzfvMnScydXVh9uDUBGRsJfA9YALkegn1WPaLB1knTkbNtbEsyrnuDFq5fkQhfMDtQY",
  "key6": "4adNsJiGcoK4MMkTK8sKjfnEu87FRaRwW3qHfByzfmJpB2gX5c1XMADZiwHosRbpJBfEYuPKquDPnFqZt1k2FdiA",
  "key7": "5ErHHKp6dETx9h9EJqvN4fY3PgrpAEUmpR3bACqm7VHwAdYuusgtEPFD5Hd8cjhPaxZaK1cZZGxZ8Wx82ZRQH2W4",
  "key8": "3Z79rhcrnVNL583Hs2PNArZJePUQXz6Qdx3frqTRZc6PLKNA7UznTCkQuBWXmpnQT9mJaMbU7jutywVGfBfJPWcg",
  "key9": "32nzoqGAYV6UtLVajP6uzhpSBqmu4YFH69W3nB3xjVu6j1kXNi1UgxokVyUwADWc54kR5rCDDu3SvXs2qHsmQqa3",
  "key10": "32saCiAeTSEgLCfdGF4vNiJbHUbjM647gcVarVmNYoZzATujpVrbgcrjNCaoPkPetZog66dBaXpw7rEirtMgy85f",
  "key11": "2xqrccTPbf2ks6ND6qDufN5R3QBKFeQwUkkhAZXL7VrokFf3Te7TNQ7X96DavTxiZPXbkSBvKRCZXqTJ4bvpDp7W",
  "key12": "4TX2M1oJhdMj8Go1bkxVzHUrKK8Zuo3z5RPHFanKtx7Vh3q5uK9KTLymsnmhsBFkvzPVZWyMLpHYTAyKhx2BsWve",
  "key13": "kEyz4bv5iTWs5vHqRYTChbkovCW7dq98FAmtwXFRcSfExqPn9xTpxAz5qYhxcSCTbTYpLSRSgZzDBsmVd3cYxLd",
  "key14": "eGBJftRkHxxeUwtDxfqimMpKsT5mftNH2iBtKNbHjtWTvHvkVhnV3ziXBbkeGzSN43P1TqSBPHFK91m6KBFLnmu",
  "key15": "3imMbWuZawiZn9DxrmiNyqeVBhNmNejMivvDDoF9Pcn71us2UrsZz2KY1he44shxuY8nC3vzTm71wqCJsMoPy2LK",
  "key16": "Pk3GDiyHuyUqHsdS2Ly9LiKG8xzE2U6w3RY7sVUZPTBXCj5KUuRohpUmRDCffW1HFnbH6gYakwakao82S1cpyvC",
  "key17": "4RbZC9wJwwhcXmaDwsgLeCTaHdTgc2SwFE14Jfh5qdjaQvKk6tXychVriTJMNMJxZQoPDiG5mxdKYFTSh32PwKHJ",
  "key18": "5rpqk9oPPxDpDY9N5jTtu4bBwkUP19zrJYHvPud7crPRGh5KQLmv9Hf4bxW63utXc4tKxSXoQ3YBiybwYS6hANJC",
  "key19": "2m6LDp3octdHxiPi9puEnGR9NW3qu72HusVQD95sfvNokuZvaSXcXkoUqACjRas9CNJJocaH7aUD9sD4swkMncLV",
  "key20": "thCq4BfU6ZY4Pe3CwAsbtE1D73WYADQ19P8SeGB2WhAMw1SvKaPEFwa4iXyFfbfNqrHtht63B2x576NWY1cPQEf",
  "key21": "2S9ADS4tdnNe34qFcHkLXWLDgHvRB9fdWRPzSAGWrT4U38j2P3LjomUuXGiKGX9grUWybksRXTh6oV2DU3oomXTb",
  "key22": "9kEU3ioN1SqfEFKad5Zzbt1Rzo8tQz2CowfVKcBLtr3HigjqBmRDhcRma1xVxaMajPVTxaPmiHLrUWJhEZQbJRd",
  "key23": "2LdwU6zFKQQfmcMr9R7Lqwg9Ep3Psqun2LUvajjxnT7R2VxXfCbZLyugSjnMRbT2grGvcqiBeQj1psAdN6QYqbYc",
  "key24": "4iQjbv5K99ZWqxR14uKmfnfkZz91JkxfdCKEpSc1mqdWfXygmC3MpZmngK9NegfVxxGEWbAaTbQ4zLQBZgZACQQd",
  "key25": "3pA5prc81qU58kVPxrx4MfMAPXBNCZJAVUYJEtSZSNC7EH1RGndJepm15FooBH8BMKm4KUbbBB8xYf2k8fkcVcKA",
  "key26": "gXwg8onZRTtjKY7QnQbhV2QjpyQNWAyRZbRr4RXQjB8QNfcByprd6XBYetQFGf4iUX9bkmRfp8Fb1DQWHFJRi39",
  "key27": "5VryMyLJ3nUNLkk66o24Fd926AEKP9fD9G4XXJnuvHD8KTcGsWGgJx4ZBCNjQ72DQjas7pt654Uwii43etTCeeLv",
  "key28": "3ZP3qw78BHqe8jKtvgGTfDjku4HrAX5Jdo1UBE6wMhWoNnncJ7RLF2e1iYn6RpmQssB2D3KwkUQMFHLSkSVbETj3",
  "key29": "2g4UF8VzB79p1Z4WYkzuuNMVuo9WAicV6XPBVrc4iAv165MNQh9SsdxnPzEgWuErJhGYD5986mGuVt5rPmikxF4S"
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
