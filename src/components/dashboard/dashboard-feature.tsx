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
    "52ArBDrWv1Yyss1HBaor4s86ynRAE5VYzSVtcgk75soc4yBdfoF4bAfmymEjQeRaSmKaiN6a53oByuczcCh3mGDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kj56MCfzLSAHiiwwrAHWq2rRKqAkhsT6xZCUx72LEYEfsq6sR173L26oCNHo9VUDxHMbJj8K2JT2o7ujm9psoHU",
  "key1": "3xmB7ydbofx67KvxtKqBi2TBXEE2kmvr5kCsUdndVTdcmYrmwpardwBLEc6aYVEA3qEZbR4JNxCDSHCne7JBcpTD",
  "key2": "3axa3UgzfWnEpys1VbbZb81WWAus47virM4G4qmL9JkXT4EQ4TcQECJukAHpSit1TVm9FCQDedtPgx4a91Xam7NJ",
  "key3": "4bxxFX1yhPecCAMrR6JTNFEmgqXrjLZZuBr5wVvYoEpotD6ZCx5ETncKkCJw6Zw4Rf3rhvdjpf79FocET8ai7Xh6",
  "key4": "RWMpE4wRT3sdrbR7pGid9ZpvCRZ9fyWj2L7JxByepp3dUF6cbRHtgUP5tsF2mcXf2sUZqsB5VDbpFW5pY8d82U8",
  "key5": "5nMbacx3mbN7nWoGvrDNHxD6rs1ifcLHH6m3pmg5N3oyWTP2HgjokqfzZTrrorhWUVsLHRgkk9ijdwjhoFwNdTKs",
  "key6": "4jebEnPiHadjT5R7idXzUcD2zERxjie1smV3Vb9FqawXAk7RDNNHFToFz5phkHrRi2fp1JNpcZ7ZQfF4K2WtMLxX",
  "key7": "3rimXiPiacpLogquXrt6JfR43CJQP8wsD711anwDX9tr94QiZ5u9Zgj7mNsJ2xYAMGZ8jiiNac8xqnuNxxwS1Rq2",
  "key8": "t7XF1VZ1qwn5fttgrNb39FB2tvaE2Foi9s1GKjwHxar4t66ytnZooUWyuzxzvz78d1PgYYP4tTRx1TSqh65A7FC",
  "key9": "5XEuafx5Ss7bHjRBakLSKGzhSJGwckvXGTxTRxdHH6Fra5zZ8TNu6vyTdvKauH92ba6sE5UQLStVhfPqRN6dCcTo",
  "key10": "Gdu8my4aPpcQRETMs4cYbUAzZgeDcGigjJepunqWeynh16jusojWVRkXB2Vn2KeUDiPmo62YCfQzooCXHjbfG2Z",
  "key11": "3shuQtV9d22rGNcdFoxVHmEZ8zTXxhuQgm4PmRY6dFPu5tQSmFsU1xXqNZErkL3THk1FWF3ms37AnAbheeCdN2zF",
  "key12": "5Azrp7ivCALuG7NucWhw5W6KdK7AMGwUyonHTgfZVXwmaMohAsjCK1ycKof2M3LxrcnajRL24KStKmTEdRKoX2wE",
  "key13": "hK2VQqVUUD8pXfqbGgfEDJyJdRpDHKGeqDuScmTufRui1FkC2kg5rBZEQDzqCqsk86kGkCkPp3QJvjVzZ8BSZDX",
  "key14": "3Jb7dj8QQohuwqpKG83CVkhcb4AQqvqYGA98ihucvReQeXznXtwTuxqWUjRRemsKishcRFDB2W2RbVXUsh1XzzTw",
  "key15": "3KmDr72Xxq35w7KpvecvDAqtyt76NQXcniSFWx99MqSyo4PLo6jhQAWEtGgjAG98FVJhQ7wq3cjJTNr6tYKP8HWe",
  "key16": "3stYAjjFmZ1NwZrRGQWSMAdR1aSwvNE2bGaaSsE6E2kNFQXuoCiWxiC8xrWqaTpGXT3g3V5KRxV1QcMPYPEoUESC",
  "key17": "2Zm9HMteDRePXo7McVUiVXsmsqih3siu1nebPXCFYyt53x942BFPdbqnBpmEhDXyy6qWVZmdqKPSPaY3TQNYR9Bi",
  "key18": "iiNDSaXuap3fnv6ozZefxzbC7Gfpx6i3LJkV9W7Wr3hxKBPsJG9jyLQxaCtjFQFKvsMEjbuSdP6g2uDyRjKXNfg",
  "key19": "2pRcPthBRZZdMLFZycy11XskNmBavSLtCbQqbyUcGwqznUTNxvjMctDAaaoDNm9LeU5NBGDDTpiCZ16cfZ1GAfFf",
  "key20": "5Rcm5WBdLfoY4VLaQBQbAfAcHMEnLvfPYLobd8ViP92jCfoFN7iDqz7phsaPpU5rqxgYgXT6pGCcBGXT3oybKW7J",
  "key21": "3r6k5LEyQwebG8Z7vWNUafwoXqqyR2SQ9Wg4Q9VE6oCv987wpuF68AvCKNvbu5Seua9to2yH4jrecroJdqUV3AQK",
  "key22": "5yf3CPhSfsujXzzBjYit4p9iUDYaY43kb676FuQt8jzyDDGjGN7HS4soC1REQwvxsbbWauXdz7cruwBb7guXngik",
  "key23": "2M7MT74Xy8RJ8hEyZqHNo5UcfgnGrwTbzxL593yroUCwVizjRz6F59SYddv3iEJsVxCiB7gKTYGqqYDjqQ43xzsy",
  "key24": "42RoF6QKnDHtQqbMfdSont6SYuaLvASGB49rRz3fg1KNhESWU4EWfPk7YmXigSDYQuhpjvQXAq5Nea3s3L22zA74",
  "key25": "3MQTunRJ7LJXJKPb9yxftgwkQSu3KHM4J9gqQD7evm6kkw62amYcwqFx4UReRwf2B6zrD7EnM3STDvDCPyEVkZz",
  "key26": "WU8mbGqtmHDbAcGAroTdZBU3nCbTTamKLGhquAg6erqNBA2atKJHt3RPhGdgPTxEPk4zECSLCgTvLHpkiBQYSwY",
  "key27": "64ReSAwiNjcFqBmURqRGHWS8KZtFryUJAHHM3keUweaujkxCRmRMWk4rn8s8pLFhTfvioLzBooRpbpzygx8FmjBY",
  "key28": "3XWYjdP7sim6LDApkordSMqNRkWiztGhzUYxht5rpk69JXMTNs1QW2FzK1m5zrJsEDhSLv3T8o7iZc6yFiNuGCZc",
  "key29": "45mDZ7NuXU28w7d4c9H3gam5V93bd77F7rxaB4kqJZ8hTwq5E5c4STjQYFUKLp8zer2zkaGvam99tYcyBoNW3iWA",
  "key30": "3TFfWFnPJ7wghpDKFQJ3QdPQYLAqa64BuFu6WDYcFVADH12kovY4QbjhPA5hkwKbBhy9fNmkpm4k1JP7oFc5syQh",
  "key31": "urKciS2dxAFt6unY93disQKm2ekbJ76p5ePGkm1MR3M8sH7SK8h5ers4c6BCH1toKRqjiVjRM3tEAkN82bVWbFQ",
  "key32": "hwYbv4Xnin59oqPMfTAW4gZbKk5BUmb9Ki6sRvdWx7hiSQWAc7wsDC1QJrHsatcgYDjCn2NNT1B81TLqTiXsdx4",
  "key33": "37vzovUx6WbJfqEGkqG2Zvh9Q4rJ2gEFuk4kCtkyDMB6trDBRyqWv6zquex97tz5DW2PHVb7eeqTP5rWu8HGZ9ah",
  "key34": "5gbwVX2jhAAgTMXsykvVy2yE4AkKuudXDLyxkK492HQ5W6VszXux1LGSm8iXGV73YCW6QnYruHwVEPR1Gpk8vrZA",
  "key35": "2ewDwNb2tiFtLr3B5ZJudNfHGehjP3LbMpEEV2TK74BtypF395Cg2yM3LggNLwPJaiycF1kM8acyeddga8hfLt58",
  "key36": "2WUxG9n9rZpm4AVrSQTM3rC4utHTTCiawW7aiFoZC27oMUrDBQDh5eAai1FqLgZxXFLf9gNNWi1YV4eE4Hjtz14i",
  "key37": "dPqEh6QZp6gzmChfmXWdWjuqA1PXiK4pJkP9pqYXuzksEEyJhiwLTRkStqG2bL663WQtamrdd34mmLrFfxFSt9u",
  "key38": "5Tj3h7qoCmAWNYySTsymWZhkP5h6UszJEQqnrUCPanZWMw9C2KabQGArcpYgutbXUmowwGYzCZGtFkfcNUAcfAHv",
  "key39": "3XxwjHRr7HbBrctP8V3gFfaW6vvwKJKpgaxJinbVw28uWDN4kpYcF89xxfetLeFZqc7VKCgxYBqNGFTp9mecFgyP",
  "key40": "2uyhvTDD1ZzENtAnWMk1Fv2gwJL39YqHnueMxR8MwLxmaaUHCMtV3A3nzAEHixHK9VnChgKTofAihHdqd5n8cAbS",
  "key41": "59K7F3drVtHuQtMzVvuiQCFNdkpJTir1V2afsErdSussw2rZN8dE1yt7q28tsHQHkojMSuCMDy218iiV13tWtHKf",
  "key42": "361Z6N4ryfGViYT4FmofNCE1TTGLNfkRo6RnpSNndc2K6U4Q57RFvaPcyNcdRWthkveuXBLYa3ypLv2Y61Xv5aWG"
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
