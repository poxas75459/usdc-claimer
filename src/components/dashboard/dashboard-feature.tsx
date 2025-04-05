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
    "5tgWjP5Zbp7PCUaW5kKXYvkrGCyrvPQ8KA7DzCjFYnpYQe2SyxEqHmNuHfooXFAvZszq1KjtfKJkyYyVXzUdQAc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFqHMdkBZuSJj5T9AopjFT9gm4f8TjYtrUADjHHhsjqUwqDSXebbjWLuEgsxhgnvkZ7ZWuiBqTEAYvxSvWb2eMs",
  "key1": "3WuyW3DbBE5RgQtm4v4JHHRuZS7ovYsBWY67XiVhprXuNwJgjgzteeyjsJnu4TgGwwXX9Yn7gdnMC7cvZ6JQZWPm",
  "key2": "46BGzX2QYASmi4x42R1qigxxbow4EaT3DZrMuCQSBZLedj8JPvxtwSDLHDr3GXCfXrs2qnWps19H9X4mi3qZhJwG",
  "key3": "zRs6K6cSb1dXfS1aTLcETGc27F17beqz1hVYuR1gP2oScWrJYBJ9fcCdj9PNZembGCxyyv71fuBpBsLpVfwAsKX",
  "key4": "5aa6TVJN2DABfdMnq3v1zwq5JwjyUpVU4D5uhEWowbekT7ScqF4Rdpa9FjxRE7bZpCdoverkRniQroqjV48QmGxa",
  "key5": "47BFpzX5sN1dMPY9VJVRpvhrY3DG3vZiLSZdZKEhz38jnjjyHnyKg8chVqVRWTtScEQvWp87d8EnXumPmm1gHwFX",
  "key6": "2oDVSek9qVYqzFLtWsuxUkKCX8vnxpd4tX4ve15xKpBQuAXbrN6KJBVsgSRWYrfRgr8F7HJovoYkxKYYS3dTuDzG",
  "key7": "FuNwL4yxcXTALwN3emKM7iHhhf4mbr8BjcFGJJWqLTAq7NGAUWsjvnh3cobgkfeV3t4od8as5vwvoQuBJNHdeyj",
  "key8": "5LyNr85ESysboFF2cSbki7sVSnwCeYwjAX2M63CYFFvYavp7UXjkrRhzXv3njWfS3SPx1qNsVwT4ghXriCmdDSmE",
  "key9": "3NEQSYCkDNzhymzXrNg6RLfoj1gxRYk7QXoDnj8i3LqDrbW69PTpzYVqhyQPKRDSV1sP5xtbrxqkfAs8CUFBiLnX",
  "key10": "2Gk4u8aSEPoPsxrJhZyGKmJhNoE8EDKAFrUPpg4X6kjpBthdmbWcxK9RF9kyBbubKYceRo4PgQAizNJYvTrvU24o",
  "key11": "6DpsvWnoJhWYX2fWUSVXHBJSMw4ZqWn4emM9RUe4vyEQEfkAwjBeFTb2dap3N7mTsAeu9oRFHXieNeGX8C6tjoQ",
  "key12": "5mVCXHoXs9AF3fnjnyhq5wQMehrZchiNVrW3j6yBJLk5TaHezj2AweuXzbBHdAyLrbMZvCscNo9TbF3zJnen3H9i",
  "key13": "2pPJ5DdMbs5QR7qN9WNHTtFpy2QkKb8eHreU5YjhaWq4ywL7VmaVoAYBEmyoXXxMCe7TGqGkjLDD8HRbmJtr2Ffe",
  "key14": "2KMAuDqrbHQY3MCyPWztAJ63rYmdVS4h9WtLU8TSXhEChZdFCNgaxsARstQvN9L848ETeFsDrLsjtE8BvhDSxwTt",
  "key15": "3SHf1mbQ8rRmnTKSx2ayuJygLcoPS3k68nj3Db3DooU8RdAsVZU16szLzaxHEBX1S4XJ9FWrbgF1mkWgVV8NdT9i",
  "key16": "5ov36HYyyjarP15yzAGeJ3sQoTBJE7VTdR8W3F4hA8R5w7fmuamwytLv2DY6wTRUftw1j9YNAhbKpFkL8Se3g6Jd",
  "key17": "3GAkTHuRzJKMUsEjgaiDdUkWBrGZAc8d2Q5iXa7Ki1B7bbPsoxRcNuhu2LFWFrJTsycKRQm4ju6kiSXsV8zbZt8D",
  "key18": "5i6fK8byi6DVTMAiU9FXy1ADvZf6pRJFXj3t24RwG5sK6MSxVHbaX9fjwZCBcko4BB5g9PWSpFMhqMNM4Tpsa6yJ",
  "key19": "PYVboVHKWDNyRpK4bHf1Ufsx2vU1gCo37tnrBfs2c8ioUmuQ9mU5qHxrWt1Ju4Pv82649cYVupop9u6XS5oTu1d",
  "key20": "53ft55ib3DMgTwj2BRx5yv7uGch8nELPfMjnuwkjnZwCUGN2jzsbCSbmdh792JroqtG3xbc55BzRoMSxtCGjEHNF",
  "key21": "38wo6CfCbEKXMxyzMTiP1JTAX4ucdjLvnJHDysfL8yGjmvsRE1SkT8GLSJRKg7TpbSvt9Sy7GpnkNjsgiLJMr3ww",
  "key22": "5WahHDLWawRbEbQGauSb3tB2jiAzTqVDkMntcWkSAKgTPbLtfyFbsEp9bXbwmdxShj9JZqVf23TFfZLRLzREgb21",
  "key23": "3FVT1F2vaPVrjThnjJTTb8PD1MuRHdgtBgfY1niZAUr5wApH9k1stiBUBxumHQSUynSh3pMUXGoQfNxBexEcj8Rn",
  "key24": "4u3KmBcPQPNFzfN9nvjmS63uY81Y231H5r1y8ta6WEZ5WxB1AKbNc1f7MssLiKRGA3Qa9mQwuoJJLeXsT5ZfGQeL",
  "key25": "2KaeohUb7AKf3odtaqJj8eWyxzJH2hDqrPTAz5US32YMyf1VYWjHUUp1T822Fh61dEdYvUJDk4NoBHQC7d6VWxaS",
  "key26": "5WMAqFDy6wrWcLZYKEhSfqD5JBH4DwdhJUn84GnPuPz1MXGoT2Cjn3268X5ojZM8dP6kAL547BTvHVYB9aUaPBMt"
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
