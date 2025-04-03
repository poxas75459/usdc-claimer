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
    "63Yhbv5FCJ3LQijr4mrq6kxRuQZow1kZ9yxfoRDuiEMrZgyDJEBW1rt5PqPbN7RnhaACAMjqGowbEMH5rs2pVy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHSBD4GaAAgma9928CqZP18QExf9hxuecFFK9Pk5ub1pRbjtJFsDEzzmjBd8P2g7Skh8sjH9GD2iCWfR7v1TtfR",
  "key1": "2coF3s5zAQrnf7isQBN1PoXoikWYNMoFSkQLQPcoueVonbuLkEfiw3d6ghBS3Y3FYYGgG5jYU8ffQzCvkv68jB3P",
  "key2": "2RCuBuGuHKBEC3rzgbXq8KuZyt3dUcAfWTiLAEcDGjW5yZ2ih1PeXsEqDp53Umt8bvFB5cbdKgczrKSUkeVhb5Fq",
  "key3": "47Y1Eu2j5PFM8wB9VuuHdfjy9zWbiJiZDSDZjeoJa6cVvLdRhKhHDHiQRbBhzmf2SWSB3ak4GvEmSKe7ELQKK2fA",
  "key4": "4WZud9azHxMpSPnCgh7cggwa2aF23MSCyszRqkL3ejHa1dtQQobkbcUrMdf1H7kwE8u6DFNY47z5T7Q6LjeT1PDQ",
  "key5": "5LKF6Nv5zaAPDr7bRJhD47J2nNBsKLJF9pxWifeDzDk9aDzN4XjS1LaYcCyqoeEYKWH9CbDsYMjXB5ejiyrseMmm",
  "key6": "5M4LggJukDtZmhbwCq24hzeFTNKKXxB8iJajGHWQyHLSsh6Ldv3ta9XTSQphqNFTWrZhWTGmnfN4Hek4uj8QaYA9",
  "key7": "s1ucLL9deDZnHnYdhZmQvib3dXUYPqDVN1guRAHvwe6QGMbuVXB9YZTcFpkTZpCgoRWYScQCXKocVV52b788KwS",
  "key8": "VLnG6u4H8HoP7jCYayJofJokah1iBh1tTQdPZx2uUFWVnEMfUAwkgACsBzm4GceeLErvc2Lp1YuY8hZ5mR1qbpS",
  "key9": "5UNf589pMzyHC1MJ5RMYSAdNUWvvRyCvD2KJn9oYY2u5YNccusVdnZ1xhVEuSq5QPD54Es35ySqKKtwBS3Qeh8kH",
  "key10": "2R5KjRUdFy9NKY7oU7GPktUqtNuP8XpmKhqftrSYt55KH6cLBgp7TwbeEzzEWWWBS7CfAPeXNf7pa8i6Zao3fPKm",
  "key11": "2RhBiY3Jr8uWicWab42odpan6A9nDCeT7N3jEK83zZ2wfdtX214sQdaFxBk1XhoUSLiysCwcXRtZUjkAkr8aVbd7",
  "key12": "5DUVY9hFS53NMWYk7jsqPpjkfdMrpaEq45nAHfU6TNXP7Z5d4PQoK2YpUth7srqCXHgrxiRbqvCRDU1DgBv51cqz",
  "key13": "2wTRqLvCLaaX3heR3XkXvExqYfKPW7kpqa4TVXrCPcFYnuJd22ZrjUrY8BZR7brkx7ssXGTvYcokSxsHQsErcW3F",
  "key14": "4XopM9x78wBDUoFP7nBmxJ9QmLbzPELVQqkx8JfTifT66z3V7qiYkaLRQkJSygdfmvgRHR8teaB4pz7uFXbXYfdD",
  "key15": "2YixqLLLcGYDh99SSGN8WcLs2B22qw579b8dveWMy2hQRwBbrBYvTzzt2GgpRjbEXgA58yf1KGJ7RetMACguQxh4",
  "key16": "4JBBemjkjS7y2eq88277VkUwTZ3Lo8M2SsDFX5miVc6Py3EF3cQ3aDTUXW675Yvo9mZcEe24sgPPQdeFw2YVTkJE",
  "key17": "4Ko9NMGNSnw1gENoLw8C3vjLVPL9ZeH8wfxm7v6NK4SCFRjoBtCnFauN2Kt7KhSc48Yzt7g3xK14s1ScYFHUUTyN",
  "key18": "4Bx3KRzYELeY9JfMvB8qTGbhpaSQtRTCqcUrA3tqPAmqKk6Ks5KwCapBzRtU6mFD9EGUtTna1gjeKtPJzLMUz5ur",
  "key19": "4ZZqHHFVgGjbm8Qqj7vNX17HgUTV3UsnfzXvTooNj2u7DtGK6Fndmb2DERPeFZAVM2jo6hHC3v5fH1zWnysVmBho",
  "key20": "2ADZW2XMbmbNf2GjT5RtyhqPJxhJickvkaexcppSqHxG9uwpp4xukczU8Nzxbghsa2kbcoshj8ZZF8RgwhQPeQd5",
  "key21": "2HSmCjkwG94vwnNBXdVPary13xMbEkxt3jR7DrST76TjiL21hQYZEKTa6rRhaMDPQqjErqSG6TxhmX3gWDtaULUd",
  "key22": "2QamnJptLeXcAxhxGrEyBdYxGD7p4cxmjG2xAcnSn2fbQhSwMLJtDA2pTS1BNigsnPNrpeC946DhMUmGNdpy24qf",
  "key23": "3auuBsqsSnBCcViDLtTtU5Rk6rkpLejFDG6ddGet9cGEgcnPN1wPuEY3pCn6Ry7qs93pyLZDeMc9NNdj2h36BWos",
  "key24": "5e2SeXXSdedvp31Vrhr2hmxyXHtR7G3sLNxMQN6LEze7c7dHUQVqYCUBAb2DJQEZYmxkBp5TQM8ALnnifnLtq7cU",
  "key25": "4kwkaT1sfsDipmBLHwb3MuNfkjvs24MeRNRPoc1Pho5F5d2gvaivJ5gsoTacaFu4QiWRExwqQPwMyKuwbWJxXkU3",
  "key26": "5TFk3AxZQyZzNorLUENJkm5ZMCA2SFjbkidZSZFgfNsc86yYtyMmfPu2VxeC4vJiGxsRSCYrVtMqPf6SFYKPqEKy",
  "key27": "5d2MihiDf9wVvoxpeDgJFCLADZ8fRJfgZ2oVhepNfexgDKCyF2RuUVBzsPek3raiNBtDqD7L3dxUinL5hGTsERuB",
  "key28": "rhET36YzWav1FQ7K63hHZXMSv4AwMWYrDr4FZTcgX3vfakdrKbEGSt8aiPVmyMLEfyk4kfpNaMpkQwe3zVZbxqv",
  "key29": "jcDBRJYWu7Vye6FS4Qq9y5cY9cuwCUWeasrbpvGri7yfTeKYBEU7cmWKr9CKtLeQnAkLpKkkepW1RthHYoVfbv7",
  "key30": "hpVbkRyZ6KHGk3EUAfCWba8b6JM5pJpwAhT6LF7svenk1w3P2MakqUJHdV3xAhq86rbrUWGBhQxXpwmTnw13cXe",
  "key31": "3ho4B72igBaT9UNqxthRP5jADM4dM8apzKxdsExub1XyaF56uK4KdjhqoyMrWH9rtK3yW3jdhv2tC1ddLi6AJwQR",
  "key32": "4GaYga6ognB36ZRpeyfYQsn6W18DR9BHhT2n72tkDcyhFR8Jpep5L8ebFEUSFkdCRF3CinSt24NpnXhNeRkah1dj"
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
