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
    "2tQigHmpLiKVbL2nCjar4V7kMd9BXhmT1noqnhQ8qgFEhGmgyDTLv87S8rSaqr531XhLbNDB3F4wVdk3XNKg8Sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvFBjHUWQanFYHrWPqPsqEqtxsFpU77Yeg21skK8GxzJc7jewX21FryyxmCTLU26Z3JiUVeERq3r1QbfvBQyyyo",
  "key1": "51PKdRZor3ShEKbUBTzwP8XLW8BUoESqiQqVEVCYsCCUhMRSnLzUTfPizyWYqKhErzXDMVpVAXy6rUPRgkxWnrHq",
  "key2": "2M9AFhGH5X8FG62C9JbQB7e2yu2YRXGsuige2Hcc8Ge2mcxx3AESRJsMCGckxLbGVYjxwKCBn5VTpz837wPHpuvr",
  "key3": "3xxUjtoCzZMnU3HajDVoU85MDQEWq4Pgg1DNXJw8q8xyVn3orjKEkagLqaZfoRAbRk8NgnRfKMA22EGgpqcMgNCm",
  "key4": "2dpfEucwbBMGYyceiBeuGt4pP5qSPHN36Ri1QbeFgx3Q2n2AkPqfw8rS63DJ1jFs8dpMBawrBzyvr1nzSP8VrneJ",
  "key5": "HFXapzwQqS1knxqtiCGDpn4gXgW3MwHfKeJP9t8fPesexMUpsc14FC7yJWr6V51MUyAyJFE3AqA7u1ogti4PTuD",
  "key6": "4ubHgy2iVvc8w6nacMwhQUq5Z3inTpdvnoTbDerBrmg7NkUJZy9U21oKS8LDW2CH8p5YCMDug22BJZzFwf9swZUu",
  "key7": "38cBoVeEQqfBrWBYbgeXgfWr2R6GYfpXYiFpb2iPg5A31vviW5w9EqGLEorxNMx8ARVP1LFc5yruUqYrsNcyPMgg",
  "key8": "3F9otPWixtqY36Gy2vMBqwEzdPkpFFuyf3tnbAz3ANewcMSs8FH7iS8CxX9tKW2qW5pgVWAQY9236hrsnchUqA1A",
  "key9": "54UjZ7Z1J1PvxoQyE7P58yjJxNfaNtMSMyBE2xJscCgjLA2c7ASZLcGTLMoPXriDZijfiHV2q6uEx4dEVYGPLg9E",
  "key10": "2W1zoyEveM9WtXca53zxXk2LTppAUCpv3eMC4qQi7RX9np1CYCtvYzfrxQmpWJgxVQRTKNxGfTK8tvUErQqGcxGC",
  "key11": "2VqtbcmzemErRrMXoMcaNAjhEYwxdzxahacoD4QrC17SkTypB3Roqy61HUeffrdfExLB6ygHqSz2octHBY9uLb4x",
  "key12": "3rjUpx37KPZGgvjN6pEXecDB8cuHXLu6GiHextYVGK8yFcQT2RN59RR3ZqD8XcCc4MBQSjbQWyYayNRqGq5URQM2",
  "key13": "2mKKKt9Du7cmm1RDHmZ1138BJs1qsiJg1s11qVLv7NcLxkA7aetiMr27Hk24mAyXZE6wUqGAHzEbqQp83WA4zG3Q",
  "key14": "4b8tbWQGpKfRoPB3og6Xpc5snhx1aTiWi9ZcpN9LfRpkjH1CM68Wxizo4B5oazrSR7nbzwx1kbJY6wSxp4iGmEY9",
  "key15": "CceCDJ42b5ZJ3GHb9U1HKyAkcKPckQZatCf5JU1a7LmK5Eoaj2QsxCc37oyw5mkyHUYaEgotKYT69vMWboJcfDo",
  "key16": "4Su2gta9uSE5iW9c5U1JCiatrPekEvpRaP2DeWsQxGQihR4yfhgU4bLxFs3WRspxLxJNDToNwHbVDBFzYYf3HyKn",
  "key17": "5cTTACnH7Lg6uuNCU2SAyCUij8no8QpArmE3VQbnMNs5mMhZRJ2caCJ1WzC9YSjDyUJPMuRQ9NFNaeircS2njbvv",
  "key18": "275wKtHoLEP4K7z6F6wrnBpDQgnbVkZNDLhCLHT6e8p2HzXgq5PkwA7uiXaZMoP6meB136P67JwQJSVv9SwUXjNR",
  "key19": "4B5B9y5f6naZJvQuQaxzTAS2MhRjFNP9Xj3tVsZ8YLwJxaeb5Vofj1cHfhz7t2X77g42S1jVogD1aqDyJy1JcZJ7",
  "key20": "3QzS4fzZyWxvt83TAoJuLBYpaYAXviuBtsy3CBL5MheSaZXwX2se5aCiaC65h15ZGDwj2q7wSXRTxWizEDZuCRUD",
  "key21": "2Ymabo357dMW8REzi5ZT9fGo6YKPJw9sPNMfAu7hdPpv3cYdpgwgYeoCpygqW1JnchmFj1AtdQ123Ennnf8FVtLC",
  "key22": "257PaZ5PUXx92iu95qPavWqKwyVW7vegTxTDEVYcj3LKFcyHvjvNk1AwxkgQt8JCQz5z8x1K2DJZmXxqPCcJHDYC",
  "key23": "38j8fYwpho4ZrLfkgL5nBjGgKDGmsZRDdbtGTUAKhAW5TwSUP4ApHxepnP95vm4XxyZZXrStadYDqTqojhXQRwM4",
  "key24": "24RcGx5Pf7cgn37d1eCmN2FtfysznzhBnxdfSzCqbBjhh3vkPLDzyfFWfT4DZ3YzetpqagkM1RVBstYvoUaWX29Z",
  "key25": "D2g69M5oXjK6WvNqfuugbbkN6Tuw7Lt8hUyS94bXQ6DmFwyD3jDF49b9P3x2VxfUdiLgpRqXivhRoZyWHzn2iNb",
  "key26": "5ahvRqhXgG2mjW8KMwCvXm7tBRobwTzoP3Z5C8jKX3UwzUBSr6Nv341bfGijG8Vwvq3RvNjyqLkqQZtJ7d67tG6g",
  "key27": "vPxsssk6wiJ9ZGRUWodyVnNfDnxZ1qyVs9XorFP5SrrdNNFhR8QizYjXPaLLYjQiGsuC9q2AQK9o6ej2eN3b1XD",
  "key28": "YpC8FFsJFjWTZ1pZRFFVK9UAWov8gD4hSP9EbFzDwzeX4uYZXgkZt8wWcZeWGn6GevxvUsAPpSkdg2Jkk42vuV8"
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
