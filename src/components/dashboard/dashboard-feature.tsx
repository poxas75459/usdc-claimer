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
    "H6Dpyi212BBiVVLRtREouXf1RJ3sKbrCdsNLiXpsZqaoXxhrcGxQtZXmHQQjsYNrQDWonyUgMUYwcDBstVKo3uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46aJD1ycnpV7xKd3QCmhVnyqRg17ttL9BjL7Pmj521QtD5TWKEdgZyEgFuhovswpjkhnGTgobRrfiAEvizsGr6iV",
  "key1": "4gfmDjgBAVHyNc1k2nbYTsiF5Vy2vgWa5zrMAvDyVGx744mNCsgm5ph7BgBEws49RWd6qsGvG4B9NENYDWsLMsnt",
  "key2": "4MSedSCHkVrhVKLARbMdikb2eefqNSVjBSixGq4eP3hGvSbcYPSSWsn7W595YXxEoKpSLk8qTynjiiMmwdYVCLAS",
  "key3": "2SKEa8nEX38E4duTc3ZtkvwjTMQmiymnsz8R95SNwAT11aKt8KmXeqVFD8Z79WqpwT9wX9b1qxaQoryGoPqisMJP",
  "key4": "44NzGy54xtqDf9JnLcqW3kr5XWr8K2CThRyScNZ4Vy4sc5bRyiFn7mMgv9Rz31e9iL9RCgFR9nFmiJqYwNJ5Tfyk",
  "key5": "652CJ6Jn4SvJL22SukqFYSeFe2GwgnuKCQE1KHzag2ofd1wK7CrcKwL3EErVWmJ75qdYZAPNoCSdZEbGN7ezn8cm",
  "key6": "55KcANKVNyAGgpwYKtYaWT6BNhnU1Gxf1SuGgWC59euaFzSyFpXMXx62JUqtaSLzc1LXxB7irAcTphMiymWyCTjZ",
  "key7": "34CNa3gKyAxyt2DMguccD2kKnqE3ZoBFTskywe5grbp8mve8CzbYbnTfagKHHwGy5hQUvpprBCDTFoV7ye3YFWV8",
  "key8": "3p1tHKeMJeiS7HExvJgJubkoP3qGKK7PpUL595kDDNZ8GXsraCit9LU6jSAxxSgkzfxPy3kGeFBZLsurejBUdDhd",
  "key9": "4ghQwZE8bDjGdoWhjqAcXvBiZTPRWAQWab9yzVaycAN6H24Q5YzQYyxPtesCrjD6JzVNrwqxMfrHFi6HhZwCBaiN",
  "key10": "2uKUqqzozkVbFPfVyrKw3Jm1BuecLmakWMd1sndCAPJrP6nvJXfX9akszUZsGEzj8kdUvM6qfBbEubaKLHRg8asB",
  "key11": "5LFrL8ZeCExUWPhEquw5iGgh61yUZrTHvRxH8VghQJ11e5U9MJjjreM5Lvhb2kuZ7Pt5Q1YwRvAwU7R6rLtiX3gn",
  "key12": "ZRWmAtbg9sztbajR3GJs6nDndLiwKWCwjCxUiEc2N92bduKpi4BKqEMUqGVsL2tUWVsJHr6AuM8PjEwTqYnnMaB",
  "key13": "t22WHcRBYV7ugH4jCmwZoADVwLRVfyvz7vLEhwkV6HiprGp4m3AU32z6qnasCN9Y7EksFviJuxkSWjPPMCyn7Jh",
  "key14": "6WPbC6fUsEuHqd3iCutUs4FrdEsWTHJAqnAhC918DBah2mis4GB8H2UTKw8pkTUiwjncM4dduhj1SC7NJTBf1iJ",
  "key15": "ckzZXrXgrzBLcNkyAWXy7vtyjhi55kBoS1mi68XgsCS3v5wNAfRZpRTMZzutUQ72cL1E2PM4CGSMFMggP9FQdYE",
  "key16": "5Z3nizHvUFkNex69H49TRZH6RgF6vFNzvz1qqBYCmsD8uwuyYodKnA8W1YR7LmjGKP1vGXZXgEnCokVTpLbGzfdy",
  "key17": "4DdonNjgFzYGthWP3p44An1F1oRjmpacLzKdTLikiPTWNLjvDgufyuT8muqeNGT4VvTahRm2WdGVBNUunsnp7gJa",
  "key18": "2Nc12tUX69UvJkJ6nN8eEpwBhWyPSEvA1EH8GfRXNAVyhcbimiUCivLfz44VucWc1xoNpXbXhcCAs41Z5vDGd4D8",
  "key19": "429MEmwVTveSeXXQPV1wpamkrSEmNwdKqB5SgyU7e1JvszU6DXqdXS111gcRbahhpAuVRghiMc7qBsReDvUKSycw",
  "key20": "hf4qhhYN8oEeBCEzQGJFAaFQWEKiXjTS8htLsoQCRFB9pAeRjxbvPn4m7DPfyjJ6HiC8eRtAjp6PuVJek5ybKif",
  "key21": "5fx4cKgDhrXyqDtorehXz2zVAz1MTDBHZzoSuCJT1ZfmAMGxoLYsudjZYBZW6RuJEC5b8wydeQvqGoaSSwuwJTr9",
  "key22": "1APpUGSGNEPLNRNUXJAdsTGta8TPV2yvkKeVZt2MmMSUuRkUVWhHHwpinYVzwBqjeNz7qckmz4esxaMk5Eat9t1",
  "key23": "25U9Qnm8o5vD4zUiCqmXF4qnbSckbeb4dibcvg8tTyw47p5zcn14hvL65isW8RE97gZWQReAmkUnuPogxNEPrRbZ",
  "key24": "4aSjWf3awgUUreWGjyH1zmBog2ycXAfDBDSuVma2TiGApP6UwTsALdYQYPpLETkGHTHKdjXBqPjATezjJEyJPkS3",
  "key25": "3e2GauJe5ZU4Fi1hEDBBXMTAckq8Xbpn5V1b7RWhPrXPH9hAjUKjQd2AwW1bfcbK4CMh7k4Kcc6hkMxxoi2cwE86",
  "key26": "25u535e812vFJAuh83yGHym3cMcNtRtPMMngBwbCY8B54DNiqzd6qkyre9s7LcKkaYNYkEjqZWJo9B8WExwZbCm2",
  "key27": "4zCX41DiR9W57gEEmwnjZkq4GRTuaHTsTEWUbLDHc319AE87hQke9hTvitUoTwPMPWJaGD9CAEUcgBAmP7BqkzDG",
  "key28": "5YrHpScdpbS83a8yenzrgnaDbZHymTbMDqVzP88hBXspSSEJSX7Di128oAfR88yzpk45tXttYTE1hC1BungvTAti",
  "key29": "YPoirnEiZ4JdteiusyGpQRzA5QaxPzXZ7tAmQsL3PtK3aMJAB7g9gjcXdCYobEPgLPXZLXYvBydrSr7EfYo2WEu",
  "key30": "3ELMV8LCM7dQDBLP9autjxymCPqEmMUKViTfRx4Ax3vvVH7e8NKo72jNvpKsmEMFx1g7YrD1HvBmDzjQFPesszjy",
  "key31": "2hm91PKik1z4dVMScMiXVtMLSsD3NyH419Uwj3BbF1dgmBXvyvB1AtqEorhVxsM59TQFA4mq3pdijwr7Kwo2KC8h",
  "key32": "2JnLSVPTvjwauQwf3VhPxeWosMz2YgCSt58AuFtcfNuZJ12ELhWRpDPbXgYYigJfiLxSGii72RTHP1k6ig3DZnnz"
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
