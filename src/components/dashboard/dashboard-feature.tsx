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
    "5VfV8YoU3fMkV63YhKY49PdcJK2PUzg11oz8ayMDb5wnAJP7mayyzKqcmahJGdfvMu3yrNtTYkgbFsReeSWXKX2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRxR7QRWZ2JTGUKUkFznh779TGmoMmxXqSg9J53wBJ7V2MVm244r64Wc3gL5DrwZ7x65GU7odhyLP8ytyniMZgx",
  "key1": "3piMK4Cw4yFbqZgrn3tJoQ4ueUjY8MF29rnmPGmxq7N1Gy8zwjLszaiLaQ6NWmFB86kzy2zxDqebRMwLWgdj9bYg",
  "key2": "5Bi36eqCgb9EmXUTSsCzZcvzvtixYSuee9jg6D65xuW1YiWFmD2UWukwzgAKPLh5UX8Bx7J8KSUPgAHwMmxNgQSP",
  "key3": "59szVxGHWxK5Stn86xRyCPHMs4L92bnJfWER3d5BnUMHZzUg81cVHj5WfAiHpitSsyxUNSHKYS8HGsZy3GipF8Kc",
  "key4": "3FTt1umxqKhZKcnMjABF4QJhtsDL9Q8dSkfuwKjPfCXHf99MdTN2E2Fev7ehXoWiowH9uMHhJpUcQWTYUp8gVzsz",
  "key5": "b7XZHh3VeHmEkZwkptW13nrHQUmHRTLyqMsKn4ymU4ecHdwowsqvKthEgrcwZoMVKQ2pjxroCNu4K7Ux9qPvpTw",
  "key6": "5AGNjz43koYy3P9cNbRZtrbvyWPvRzh6HcXCHEGhA3getFV3BYWq9hrigBaAuhVoCd5Abc1bwGVguQneSGZXVUVF",
  "key7": "5xZWNUXrXBvw1nySgKeBAqMxuK4YnQPQLTZN6g4epxMLtf1KXJ6CmVbkDe6QeAShH8uzKpgtgdaf2U4LUVLKqrru",
  "key8": "5gk1aq1VrmB6FARUpsQyyCG2maZwgF1YzMV5VNZG92g2qPFTwg2dRZXqVoHhu7Cu8s9HvPfz79QMcpih3TUX4dfh",
  "key9": "2kF3gfDEXNQJgRAAHxAd3m4tgvtwJmkB9UgGud3b7UyMSd5nC3ELtk861avUEG4kUDbomwA1QnBUBh2jsEQpcowg",
  "key10": "4ugHqP5APeUkbCGnZY3caUMRXrE48ZHXmaHRp7BgUbdGphdBZ3SfiWtvYwxeXPz91WyFfS1HoMBdSCCVYD9KfxFb",
  "key11": "59vw5GaLihdWJ51zbarQh7ZSKFNTXvtno7XNGTrDq13Q3sueZAgkGTCfekxiBvf312FPmQ18pb2XVnxPTrxgiV9k",
  "key12": "5LH6nkcaxtog6hybjLYuoqm2srZ9ncaNgnyP7hBKNMEbfA5YMjzXaFmr7Z6TbTY8LQzrcGcUk6GAP2sKHKPzRWD2",
  "key13": "ddKTboKtvvpCgvQX29FHxMH6x9CUovCXHLPLcmnMW2rbRqCdy7yMGuKH7PBdMT6w7Qb9eFRJMQpjfWPh6SdhwHm",
  "key14": "5eSd1fLFNcYWTwf6vSS3BFZHNqu49vxvbvzkdCYPEFKYPxHvNPPXqD5oxm2TAviji3Me75mgQBZZWkP8MQ3MX5un",
  "key15": "yxAfZbpVFTmBXdu6Vbgk1fubDYxFS7pyjZPhasPwVLKFHy9vPqDgUdjFAAaYkknJjFJf3kA7YaBQZ2UnKz1FZHQ",
  "key16": "5hJLcMkEoxGQZ8JoHFeNRbD2SYS37RrfYZY58iygsE75N5yVo4rpcjyhqeJ3nUTmxQGFHAMBSSvnr4AkecnUEgLr",
  "key17": "2n7mvDEPy6VTc8ZXcLL2AUhD2gxkkSpWtDF7bA2qMAd9zVM8QhMAma5zaw6y5GrCB6kbuwPAkdzT6RuU58kY6ERM",
  "key18": "4wjvMmWpH2ZftMTMkJJidma7Ej58tgmwqwbbFDmeivHLtFBmow9X7p6RVvKgcyFFhihEq7zKvfSoYGksc9fVtfbh",
  "key19": "4RoKLNv7fYtxzk7DdpUrjtcwnHCSY1VJMofdDhdCuLxHDqE9eXPgsFdVYBVud13Ybwj64cGXdypntSEUBGGso5su",
  "key20": "4jkaoVEQpVeBcVs4CkwtKXTF4h3oCkwfu1CXEuHARYguvjkZShtabccmN1Xp2UaKVc57rL33ovswgo2YWdXE3zvc",
  "key21": "5e3WSE4QmtZCZ95tJ43bUhdr9sKvcrKtYr2EAQmauK4zo6NcvjHPp9TxQR9cRim8tSCavf6ss1DEriLNLWEER4pb",
  "key22": "tRrsKx62rme2LTbLqrHUgrcnYnggAohsNFXCMFFZRzfaHU7N5HhYRR6NAxEAYcMsZb3KxapyRC72mJygPuV7VrW",
  "key23": "5Qt8fKWeyX6CSbnjMsqv4YPNqnnaM69gPoFnGi8swGXdJJW9nKsrar4vdBD8dtJTxZ1ckdK8xTz1szKTfvjkc4FY",
  "key24": "3WAiYGcfykaL6ajX6xNZ7KnM4AFPyKnaptV1gPStWiE4XMew3xeSn2F84pqjZByWPh93TeiaGLBkVSV1wBk4axUV",
  "key25": "5jwkdowdHWFzfy9FBBbFXWsxgehbJENzTScTBnR7aFpjSRRtcEvsnvXbsFV1ymiPMGyLuhhMZPBsDqd31ikP5UFH",
  "key26": "57tX8bY3jV59f8HUtkJyBP6341m2oPRkJgmEuLEhZZaZpQwUC4HveU64STsuePEoT8igdLwx5djdSjtJaSSJTrNV"
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
