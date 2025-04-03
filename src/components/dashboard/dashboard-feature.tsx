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
    "3EZEeuuDknWvHX6Bzqsc9TzzYzgHubaQ3MkzQ8GrNFtW9N8mANfyf5BvFNScYBsTYRSeDWho4JnN8MifLA9VwJ5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPgzYHXa9FA1syszCnxND4UVS53Ak75Evqjj6oc2YZkWqvzciGRCLNoptChXCorcx6dNs1u4T8Md7quzXofBMJw",
  "key1": "2LqBnEYjWGY3tuS75okyAtrsutwpSYvtNWYnfCPMLBkRKyXx4FqSi7PgEe4TjUCXBPpFc9Cs7cRiARUPddFntem9",
  "key2": "5WenNn6D62GmvLbTwWAqVoAgAXLfrFmN3crzXVTggcuNEejX7be7vTzyL58VuYM3824HRBEFPbUu4vQYg6Bk5eqX",
  "key3": "56fYEgfHdai3ZNx7iuNQzWxRaA3aaq32E1YBuGzC4cshUbFGYD2c9fwtD679Bf1hDP7avZFQpAuuP81jAg9LZBug",
  "key4": "2bEU2UmaQbbHwQuN7heVSk8L1m3rb7qszkmBQFs1BwqCRS3oJiSnvLbeNzz1WMozpihYKmbHCpbw2fQC9LnRh85V",
  "key5": "2aMvDfb5WBgKoCqnxY69P9GRZPcRAn89UBGJf82WRiQDJ3AyMz16pnP8rWShuBaDv1T3VxxoJbiA6v3obMyKLRL1",
  "key6": "21m2PDU7eJj7Ycy2cErHpQHB79PnZYSUBa2jTfbXYDbJcUUcJ53x558dKgsZFKMi8gQVWvhYfqyXhKPuz8J7JM8C",
  "key7": "fJ6TUytojzGds9gB6v6oerNrcaAKU12XDQVuE7WWPvTNGhjtjzyApzgoofDDAy8g9XrVqWRSUR8J4CwiCnB8bXp",
  "key8": "2xGwJQwbGj3EA5uyKYNKZTsddYAuDrZtQNy9xjFKg1VMGJyXMhALyF9wvqp49Jt9RdBb8KLxBcC26mYTjC52ukzq",
  "key9": "zKkJK6oV3mVMfdp2GJTJJcp2hikb1uFpMcm7Wy7V6yUmcVcitqd187e2s8bnbCxNDc96KjmuBmQB7uxm6U4LJ2F",
  "key10": "4pw4yV5GqtQd6Q2W4Bfx7EqtkDYCVhT7NcMJanhqKBjpZe9FpemSEnBwUtLBeDUWVE1AUUEfws7rwVbxktewFp1o",
  "key11": "qsQav9CV7ztKy4pQGEFEPb3FiFLYdY2A2gdoxAfR2kxT9QtkMWt39gSQB6cBnxeWiGT7G2n7KYdzmFTMD5ebud6",
  "key12": "3jRZFiMEH8UrQGWjXCucPaQjvkuZMFyLBX2YW3BQfPbgdziu62N27Z2keMUg2UU9hcvJBiCtofJsuTkod9f1WRaG",
  "key13": "4XCaJ9TSqxB2tdre5vkNMfUpafzAB4o4A4y8DzSiVHs23quhVSKoVB24ipp8MeX1dSXQjadwpofZexVGWRbxm1Yg",
  "key14": "3syQJ3jNfNQNi3Bw2HrNuFNptCjRyaggh7CM4L81vS4A7H46yNFfAkWb13kYTP3cqER1NoL3g41mVVbdSWTf3twh",
  "key15": "4jrMHnaug4PaqCZL32GMCA6KddmbnDy2BGGKQ2NsTNggmjScxzzCeDLqwr1z9kib1F45jpsXEmQ2EuDVBgDsde9F",
  "key16": "4PM7sFE1Hteqfyg4F4XAuamHhYZ7ULwbCjSfKmNkScMfdv5GPRPLiEr9oGYgGxTkTGdE1A1q7MxrZXwxThehvEBq",
  "key17": "ndqXj4RPr4GfLbSFXYCgudcSfAuSXsMYM557RP7MHuHDXaYdQzpb629HD92SFYuUv91WZPXT6ge9RyzHT7RruCQ",
  "key18": "5VbeRESybMZwsgSVrTVwSe7gST6CcJwVqXGcNsCgkJYrXhD4iUgCJH5pjFby99dxVgkjeqASpot9tUFkuoVknM2P",
  "key19": "51iU5fR2yEhb6AjmqMnCeySzXkC8WwNfRfgKNQ55b12mC4TLVMD5o7DKN4zBDNWrgKeQkURMhw8MG9qH6VGZAFTB",
  "key20": "4atKSNWe6Wz6QtEU4pqWSZqESLEGbkHHBVvC3awLncwkYvoh4vMTwUaSDo4hN9kYwRxCrfa157GPPUACJvypN5FR",
  "key21": "61UfM6EmagsMhj8TPBfv97n4rAa6ZYzy5DZ1bkToQ9fVe7gtdTLCScEopZrEarFnsXpZ6hGTZMRsxnXs4CWapYWZ",
  "key22": "5efdppSWb6uwCPgxKjcTVWeb6r6yCwBMV7M19SPyXEy16ebb2xRrjpLcsFKvVB7S2u6KM6MmgpK1M7jq6UGFG4ae",
  "key23": "3K3a4Uo9SbLg2Xcu1HPvDDAcu9Xhe6JcPqxa661QByWPtSz9z8u8BikzdrspnDZrhoVoHB68BCqhiujybs28MHh1",
  "key24": "F7WkREAdn2snwXM1grenMmoJwXQWyJTaKkGPCRvaBxTJRc7hCzu7mXEHz4iqURAs2uDixnrYwq4qdXTEg6ttDrp",
  "key25": "arrpS8DJkZSi3bTJYuZwRiSQb4V2AuzppHBLRkV3WEhioqT3a1eKXp2w2ZnRL3iiiAUT3xtCAw7URmJqFKVyHpF"
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
