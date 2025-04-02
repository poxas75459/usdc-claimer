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
    "4Re3WU7PGFaESf29safKGRKptDiVC1ksHrq3C7vBPkuBMTUoG3SB3rMEkFt9F9kubeRKam3qsPcf51ToMH846F6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpNYqdp7Z2LFAkv2s9MrATqhVKL1xhFaSh9LKMYRvq8KjfCq3D5WEPWozLjJMPb4Af6jxZNYv2N4LzEtiLsMSTS",
  "key1": "4VrbxMUvBYmG5dJM6i9RBNRjFQ9EW4h1nAjM4sKfK9Pd68fRfSL9CXCAxB7MQ7hDaS1V5AosBjhTwWFZVr4CFaYj",
  "key2": "23atLPUztuasxFdboYj7K1AGczdCmNkznVZXizHMcBeFap6fEACVKTvvfznuj4KmuVoBrxmM3JojP97qHSbJwMyR",
  "key3": "3Hj97YF39STupqgEtHkpjUk1Y5tnHBweGgAnsz9Ra25m7MHxLKN2QFe8aqXK653mz1CCXa71djG7EpMaozvkaQv4",
  "key4": "WCRWYdiErB1o1TrPt5f5xSTntnSn4tVd7QA6JjQWsxvPRaUWgHME3h6K5JrbUkfsxs3fBAE9AxWXsyF3EmcrGBX",
  "key5": "4WnMB2Jx13jUPheiwp1gJYYRjw893LcAKNdYQhXJ7p1TZNLp2294RE1uYNuHp5JNUzqKvrzK8XquCFixxct4fmxZ",
  "key6": "3m86NbENAuHHvkc666sq8yj5VUpSDrNHNrm72Jqv38AGk2dpv4DJVfEcpVQpg8hCgXNqJX5MTCNcehXLPetyXcYo",
  "key7": "uhdWCPAqHXjuAv1PWoeu9Yd3BTH9CFL2VRkwhpQdBoMtiLc1BifQda7sTWS54WuRgD6UwyUcYUepbm7sU5EAGAF",
  "key8": "vMawdCvpgrjwiBWbDRNgwi7DPS8G81bSeAYEpQbqA6vMK7uda94vMQduzUNARCLTbtgbVa3MkHjPdLqKEYCgau7",
  "key9": "ufZGsVhPfNFUbqy1dcnkKVPvSepPKJpm8mjZBFh7445a1vpSgoCkrfoEFpRDw3iLVSB1gTVcqsHBHwjjcwz3UMx",
  "key10": "4CmnRQCAfR9bA8h2LxxBffDsqJDLGxiYiYykJnKgmUGNP6z2RPN1ACx7Vto8eGphreipY66x4dj5dHycvawd6Kau",
  "key11": "2vJuQNp6HF3N9tqig8fFNz5r53U491EXTFgyAdGRzrGHArALtWGuiTQU3M9DLFSasyDxXZNxHc4J1FB9hSxDDDto",
  "key12": "23zivVdQRjDTAzfBMfvaKMcNFM97LSdPiDM8rPSX4YYzs7fiLeWmj5Xhng9Pw8JjKVoZTqhMEf93vzr83CWApYxn",
  "key13": "3iQwMk8h41qnDKATAi719iE4eRyXfog3TRyu2BcX9PxVhPmDqCxsd6NWbV3zgrY7VzX5zaCG6BFUdq2rE14GYNrE",
  "key14": "3J4qtTTxbmRb2ZS8JbaKj7wcQjjZJV8BCJxy8MxpK2Wh7Huzw2cy9gBDid4JXHJuQMW6x7BPHPW8tm61uEoqc9jS",
  "key15": "2th7UWM1FJCz2NgErBmAmcvtVsjpqUZma1XZbCTnCJgThy4B7HHQMayoQoKqvmUa1BT99t1h5QBDgv1oNgS1PpLZ",
  "key16": "GbGA79BfWyH8FSKaXjCBdvQqnniyxibd9dgBUpLMgq5gkadoNEdXPe2YYxR1iUrqVmjEyaseE817ZCLX4WYBpac",
  "key17": "4uKfKME8UorfxvPtkgQByuuToQZJM3oBGMrmyD64shorxUFY5vGt6h3YgsGMvJHAoQJ8qBNGKUT9JaKKDjkQHmNE",
  "key18": "4AGAD7bF9HX2snmTBqMaZFDf2jrRpvATCNyQecAAqFbTBfnkkF8So2z7srLCo6hc15o33hW1doBoUupFWnjf7dpA",
  "key19": "3UKLFwn2VJoeuVa5cSqESkPqt2vCivUUoXzrywiRtX99ubesnNafkFkUuRrnymUntGoKZsBQdE5nDpJPWfQp5D18",
  "key20": "532r7LJySqdzfXLkn3wLBERKNhgQEjhEGjNiTy3Us3ViKjJ8RbxitJBXa2wRyKxep2V4giHVSpzLJL5ZqzXm4ji2",
  "key21": "4UdVKRWwEe24WtSPZ73YaWs2gcNBEwbeYeG1zFBgFnsrQCgTCSbq235S3MeCfX4V5cRnbgHetHGU4C7qwgtfCLGM",
  "key22": "4HhAXfeSamR4eBtTeBXdyugikY1AmWb5JMHpP2V4c1Xr6Am8N2b7KivWHDaB2jGQV4zpsNVdMakG2b37XnJesYJd",
  "key23": "5SZFC85Mpzv25UuwetvB79K28jWWtLn6TyucPEzz3ahgQcyRvxETLYExSpXj1pFjALfrgxTjFgfpKafErxF6aCdw",
  "key24": "65DT5XyK7nWdGZorp6gs8Uimg26YShfH3WC2YpJNMNufnB9q5sRRSsA6zKvyzmiXKt8yw6NXq9QzmshgYCvvjiHE"
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
