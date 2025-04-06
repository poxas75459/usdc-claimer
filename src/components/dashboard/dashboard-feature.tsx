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
    "4Zfxrd8CkUc2xDm8HXg4Sr67cNaNmZxLZf6bE5ZJ3wumZpS3YPWwTSmTcuMPd9EQdhvDsnaBpsCW1o8X44PygBFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UoR36KZjGymwEqoHeYmakRxSR8po3fcJdRSH1yHr4tJFxzNP2XD9W5LE7Rs8TtQwvrneDhVj6d8NdEhgV7tnQPY",
  "key1": "3eywVYVcBJW6iMrh4NM3EG2ZQXLUP6fBUA5zyyNgAExCNxLJgUhhgp8iQwvQ47ad3r8AVJqDxYFDf8hQKe9x6Bmy",
  "key2": "3P6StskLQamBgcWbMcmizcjtRS74CsuiwRzaXqDbeTn4uy4UNjHJeMSd6VbAckocNdPvfN7KqHTDzwDVS53gJTRo",
  "key3": "V6mBLtSsWwoxXDgLYtUPdkvfrEMrXKoy9YvmoNdWcuoWwB9wX9dRSMRwau5xiVhZQ1u2VLsDHQbECAbo8eqNSY4",
  "key4": "Lpmg99JKRSLRPiPzQauXnEfY2iKVQMQKwuKdGD6ihn1UUPVN8ZgrnfiqRBy5TEjsvVbrEpg2Yy4ajhGhsAJLib7",
  "key5": "2BJ7Gum2PhbTe7szaWzKWSQiFopavLZE42f4ZBQUZ4FpQR78rUMXWeqkG84hiCbowmVXKLmetVx1aMq52PwYFxrC",
  "key6": "3t2u71cQbygHr4QvauSHR56HEz7xN1Bii8eoyhh3xa4W4hYzWf8kDPXr8G3AepmFhbuD9mbYCtYoXyXErXhBVkfK",
  "key7": "4Ue2kPrtNTcSPA6n4FvAvVjg9JwZkDHf2ke4cHPXCydstz6oeyhamANs2KPDBJKy5imYXvDPbPvGCm22yQvKz5Jv",
  "key8": "3mG5w7yHfZGSsTDky96A8kT3j3vYF52j72mXjmfSBRtk5TAYePk7frRviCPyrzvmLA24qfZGGex6LsVQHFcqGjZy",
  "key9": "6YS128HyrtstGvaxD77USTtGMD2VHrWizFbNYYBws6pDyf4ABCFmfsV2HtebhKm6XrY9DFdpz4JojwqiE49scwf",
  "key10": "5Zd5fNWnVQxbfk912UFFCYyB27ya8g8EqSJnMwxud4JJkVqw9PAfJeeeoDDsKWMQvsHFaRcZ4suFwTsR78aAHimn",
  "key11": "VRGDTJr9aUxywjkRUof1qnEN61xZ2Suayt3zRGLZ4rzs7JaBLPZGUXV5GMw3b3zh68C1gDYVTKi9MffoDkD71Fc",
  "key12": "4CTThoCJi53zQ1LwHf71qKM4PzcJKRecfdB1QXQp7mpbTX8pvvszLE1WfTLi179n4EWi2KeGwMH2QyATbjf1zz3F",
  "key13": "4psHKcCZm11dKX9n5Yyeo2gfpsogEYprxyXBSC4FUqCqapsbv6T2Fms43W72UCZeU7y4Bk3thVGsFYGNqWHsZDSQ",
  "key14": "3s8QKmzAgj68JvVTyynTV7Spq1vPQ9VxNC1xs5qC4JAbwd3tWgXyC5v1yJdbPXrL59PDJcgV1cXVW8c9emhUSJ5C",
  "key15": "5fEu4v9iR36PsNGdWxzxHskGaxAdKo568wjnNdaq8XPMXWXTvPB2dqMrJNkB3VQ8RkCmqJ4zY1KSPiW3RwkK89TT",
  "key16": "51VYmxgHWcmgMLx7r6SPvLCNgGvdSh1HTbzEwKVhJsy3p9qzC4ymVbz9VgDE2JeMcyaT3HourHXMFWEGttPYTSV8",
  "key17": "2FyYbHuioWNZsgU7r6zFBrbyriSbqsq5XeEhn1HMtuYDX2n7QAtfcPsexJXu5FK3gDxm7NJsXAGg5wjTwFQhRVux",
  "key18": "5Y4rbS2ozHBdr1ZPSCqbUjeLKA6b1AH5n7pF6P4gJ3L1NKPyo2MjjRfRrSHs7boycxxE67Cqkv1jo8Fu3oaNPc4V",
  "key19": "3mDfrY3crwtqd9VvnKkX91iFjFnAmqrRS7hTuYhUb2g8sP2x5HzXnkRCyknN6zRjurBVdufBEEPihBghQ9RizNF9",
  "key20": "3kN5HZ1tKLgaDzeHPRFhiQz6XbGDgdJjXFNfBvpnQmFd6TRihDdnQoN8jdc48hLFYhtE1J2LDJKHdUrkbz47GJ3Q",
  "key21": "2Kdevfr6gpz8tFL5go56XaB1V21gXib2A7CSPXn9uykiimhsB2WP2B4azDNEkWH7PDcKFpxzWhiFJf96eySeSKcU",
  "key22": "2fiTY6GXg7NSs6THNuZQdjjZzJ5wfh3M2ycxcbuVDdbwR1sRhFS6KCyKk1EP4YdmZfKvMug8TXCL3jXSgNBJqkNt",
  "key23": "56vS67mSYsxTdhZaGvhiMRYQCVszzFPsbgPYse1zCE9V5zpuqoR5MRtBptQ7mpYa6c3WCQiggQLKoh9Y5DWcz4AA",
  "key24": "2BjLi61zArUoVEkEYtTrWYPaca4sLCzf14Wyci4k386x3FZNy3mqkVkzXQgd4fD4CP6H44Ez9xeCazMXLopFkCrt",
  "key25": "2quUY4RZkztrbgWb84EoavRsk112J1yYBjgShLEP28bbsV1ttP3cBoKUhBWio8nCGqda4u9HZCoJGgFa4FvdsybM",
  "key26": "27iLnfZBJGnAEoXS4Z1nAmQSMBP5T9qoxWFNNNN9kB6rAPAqNfeJDVTEXWmmCjGKXCZSeSsaujKyozr7NuBS9JnH"
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
