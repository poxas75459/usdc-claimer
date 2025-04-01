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
    "32wkaSXRx9yCyyGkWuZo5VnFCDC4j8hJRUaG2gdRWqhsNrQikDnyNW4huVUEbfjhuFzgSKDkdn7qT1xBhzHdeaQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDxMzDKVFRXHxeri69VMdw8KhHcviJuupahovQaPDniceJT6JhLRX4nCyEpx5fojVSLbZevqLS6H53gxzeLRSvk",
  "key1": "2qfK4TRZdW4M7vstrpp7kEKTiBHykRdAqqeNVf7hX8no8pBLhb8GTZAFofPhmS7F2XrmbHQo6imcLuxY1Yhj28Cq",
  "key2": "tfyDkdSZHtPTgJhC8EqWui8L6QuRFp8gbwaZ95YBvm9w5Tj8PR5YxqxuLoe6DYLbUJYWQx4ws3ouB7LGAg7aLdW",
  "key3": "4YaFE2XxWRCT5ejDArx5zMN7QGkpYN7qXSvwDX55LgfixmroMnV1aNUHHC8xWCe29Q5g3MWshCHiPC7hZnXXpHGo",
  "key4": "V5EiZSDHGWzgP6b9RdaU52Pvpt78sAVpPyGeXkrN2siHC9RnUgmsCX4fBhbP8ZykumowzVqEh4wq6LE7Wen4iFi",
  "key5": "4czFZz9zEeBqjQuto6BAFxorQFSJy5xHWZqN7DkQ3UdTXM1onq5K2ad7v6m7R76T91vUnfct7nxd2LAskgQjbnUn",
  "key6": "mxXA9LVYhsD4HtY8QAbW5t5WyK7g3fj1SFP4iNaYKCY72u8Df4SpGWN1qH5oaB5eRn7YaoyawQQ3ZkNBMDD9cch",
  "key7": "3v1U1h849XUVT44BKtGoNEBY8XoJdWg3r6r47VUEq29jCGcSuXSVrA1maH5jekofBymRRx5keijj2F3rzC2hmPho",
  "key8": "3wbKpsvW7kkHXdtuGkYCeyG9XRDqN9xe2Kd69iCpMMx8oUbUUHeyvYLocNYGGGEvUay3YXHJd9MwjEYPPgbpqK5A",
  "key9": "YAuNeAMf3pJom82fafEouUVX9CQLajCJ82kmoGJi1cMHv7QhPSX4RBuP7VUzoEHXrfdqShcpdqzHYDZBvo3MM8U",
  "key10": "4iMyuPMbiJxHtqwLV4cRtMvzL4oeYJ6CmYVakSqachQo8hkSsi7Nn1yjskhpo23yEYdnUJARdZauP4j2FoMCZWmm",
  "key11": "7PPGurj7FTsjzyYTuunqxGpFbFoVyeXfEzcmdZjkBhAiUwV7gFoMrKZkTiVEJ9h9LCF5d8C3X3Nj85J3B91sYET",
  "key12": "5eVyyES9U1kxf2jj85uqma7GoEmvUJtnfVxANQXdSgqX2J7K2Syn8Zs4C5tAFGMjhbq1gzqDZc5okjttWkVesQqb",
  "key13": "2s4iRvs1jZ7TfWnj2cK1ZhhARfftpZvPdF1Pddkt8AxuxVcKsiQZmgVNFTW56kFkUgTEomUH4CVTS6XEH4JzBMfM",
  "key14": "2ft28GMmUA53hYnpDqQ2uMWY93dwfsk4AYmrgxTpwJEck2gbv7MAbKGbdy8xJ9kGvm713eSTXGzGxGTj9wkixSPq",
  "key15": "58HQw5Qq8ApRMQMYpj2X8ruimUHe9jzS1WSFqiS9PZJst8bHYWiRCpvuzWePxL4rLa5CBxagHSAHKuGtJxGML1vq",
  "key16": "iZGgfMz5xhGPCGT4xzykgs3yzAsbSL6UzBAyKt6iiqE7LS8tURvVzt8snpjAqnnVPJ8w8gR62n37Z9NhD16JhV6",
  "key17": "4HKoa7hyjdx6QN86gh3Yg8zdW5jbAWnY2HfCmVa6vJMiL9kNuzTEur5YghWvA52GMEuZDt5oxdUscFZJtqmCBwcc",
  "key18": "37TcEqFQZsodm7p645cGNE9TJXXjdTxa7t2zpjk5uZ7gedCb1DdM4DMwP3FqzrSKoV8uq3aUVe2Dkn3Q8YQZmLce",
  "key19": "Fesa5WxQbHi7GouRCiWH9f8FZxn17zkeQnGEyxSkiQVBYwQy1Dw4PRdwo7RmxBFSxx6DLA9GFx2sjAVuMsP7Xap",
  "key20": "MmFSFZEV58K5WVPwZf1mbw8q7qSxauzq3mscyso3VAPNKqjaF2nyuWBG3X4fc47koH7QkZGG8rc8jcAVkLwdwAF",
  "key21": "4gSBYvvQV6mapfqxsYqBZCTQSawY2reSw5dhXp7MCSCCMAEjv7ZYaC6VWRNVFFJnVA13SAtVR2y35DamzDuxAzJs",
  "key22": "58LhZSrMCkTed8WpoiuaWRNX8cMin4jB5iZ5XYr8vW8FheDYwewu9EwpCjmpfRQjPY2HvF2XnrYPrPMy4YKHD2ks",
  "key23": "4T6e3QTnByqPvuPEXnTXktpZAkXMkhSuGbvRfzktV4uzngHJ9ip5oE7KMYcDEfjySegXvx2eufYi5Ca3hEp2UXoA",
  "key24": "2zmfn64hamUctrswaC4dZLDYdtGfXMyP2ZJFA2LtGASvGuZWjPj7y5WdgqzBbcADEDiNyh9u9tqcFiJArczjctBj"
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
