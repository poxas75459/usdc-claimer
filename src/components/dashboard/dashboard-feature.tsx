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
    "42B34wuVVY7dNLBR12ahkxWNBcBj5RYqxYZh1grGshKBUVAmGU3sSivXUzjSZBjWsebXKq74pcHse9CQr1mUq81t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMswG4PCP4qXffyX2zSgzrr2iKjDeijfo6ekk3Z132JH8cC8jqXDF4oJyfARpwg8eKp5y8KnmTykxfUECtcrarY",
  "key1": "4VrFM55RZ9vHDMK4Sck64z1jkU4Mwr2jzDvNRs8eYC6YRSACKr288r74CqvvT2uLGBmPPf9cJVmsuCugskCKUXDi",
  "key2": "g8FxiJQkUYymy1HRtFPUikTw8ghyXv7uCRVCbbgNmeFpwKpxRaiBGBGZCDfGraqh2eg9ayR9f8XL8PWH7QHDgtJ",
  "key3": "4ETMVGnFci4x9o9gxejt5Fhbai7ZcuUKuz392zXHCzUh9Zc9X3jesbaGS8ZZAzVbtEuHWycD5VHMK6mXNXbUzgc4",
  "key4": "3k8AQprM1k8RiERAsAgDZUwJwnVYRQ2fkR4BP97RNtoUFdLHN5j9vv1emr8NYq3a3tKd3W3Mr8tjYiGebCMz5oZY",
  "key5": "4i7yv1Kx4BKRjFU8a7j6urw2ZZGEuz8x7GqnhbfwHBExb8AxbZeSgzvHb8SdDthQjs1PCtNHB38HtrAQ9pTwhkJi",
  "key6": "3eCrgBRSWsDcbm35wXNvq94okjpMdkhVHWszg2Mx2PR2oJF9ovsM4ztdmBywDA69VvPdr1crDnGs8rWRpP9nnop8",
  "key7": "3Avm8yDYN3HfLsBGc5L55R7HgMHATJSZbEKT2nZkMaTPvrk7DnefVfcBrKZPk5Z1z7yiBk4JyekpSxHWPs94AyhZ",
  "key8": "NKj77Gh2JGFEeYp7E31bMvPbS1GCLn9F2TBSm8omJ7pTvebCpS6mVkS2Bvd9vv2FMKN2p6v9L7q5oAt5Cq5NGFj",
  "key9": "3J2J8jgwjZAz1vuuCdmvw354uxymhFAuZwRu7BLUfAwWTUX99qeGxdiAo38tHHHVxCVzFLZ576sx8o9KVDEDgMCG",
  "key10": "5o9xgr1eYcwgsb6HZWmAqqUc6mRC4G4ufiPXTrhiRkeuyHorMjtLH5pK1QUDpsZb6sNEtZSiLBCBrDP5r9uLuUbo",
  "key11": "mDkapkUTHNjmdgWQeCSTmWQmLVesT3WteMnCCPawT78b86NxKaGTeygyAABxtMXuFVrSiw54ZLgvCYjpYX1Puz1",
  "key12": "5DhHNZxWBerP6cUG5PKydtZpzDacR4k3Loo2DcG5zp4VbyGdpx4coLF94BKC1V6wUo8eFG7SWKmxTR6ycQYzT397",
  "key13": "5H1s2hoGiXWH2EyjB8LaJHmGS7HjZZtGNhuBVgMrRn6fuj6gJoxj3nbjCvbY9o3rD8Md5bBaUp548Lxu96ptuZte",
  "key14": "sgPVhDUGxvZy2Aq7e6geQmr24pJjkmShbdrThbXidEQMSNKqNa6K1pTZuSV4LaX9eKLxbFXgv4RgyucBp5iqNfR",
  "key15": "64XCDJfWj4YwdozrJjuuuGsB5z2Pvy9KzqVkCeDGe2jVLMZydQAcqdLwEd2HgLagrQgDaYfY3UABkowPjHZP6eCk",
  "key16": "58foGk5Fv9J1NbBKxrPTGV2t7FwzCJHWYeKm5bNSXQoG5GMAjNCKVEQkeqNU42YCcSvWbcvucEVTB7PWhfQ2dA5S",
  "key17": "5qVJWK4SVrJhWyBgqrCNmKou5DepxWnsPcXKrzRcgtLHGoaYCfEYj7psy3b6sJg74Ku89RZ25WYeb7dbXdCxTtLR",
  "key18": "31Ko4wfgUHDeQQ7jKtzzfk1p6bmxDhTaVJHPf82YctUGWxSM5rCPjwKiWhs7SPSU712s7r9rnAuQgQHEGZEJWkfG",
  "key19": "4ZAeXJRXzPqGv3Pmzk7g4mxKn5h4C3zf6MUd1tvij2orgXNUYjvzepLv13hn8e4ef9Rv4DBMGFeHBGafKdMSiH9k",
  "key20": "5wFScJft6FEVAX1LstJ3hNKYq8RuwBpXUbBHm6xZrB6vyjXf6cVLnnZeP6bcDbSFZacmH1vkFm3LzUZeo5R2HeC9",
  "key21": "3FM1DhGPERXdw78x5PqZ1sJRCKbQFHAb4dMc3gHsxogu3t79KDvBYF7U6RnF3nzyseTuRcJRwAbzTWoxkG8uKSzW",
  "key22": "3jDAh63kUjVnuHboECWvGQosx1kRZsF7dAgLXoLJXhvyGLJbd58XZhaRHNUr6Y3denEDuNPMqUeDxJX7DPByJsNA",
  "key23": "4yhoiMBQtCuhK5EzRnYCwCQe72rtqG3xD1srBPN2i9FGoaqgQ3R1d5Dkduc8kPbYoWGmJ71deFB6wFZYbJyrR4KB",
  "key24": "4sAtAmiAMFgUaRwLWNNYGVguFYHqdWtN44C68SKww3QzoXtSQvCPvZR9fCfQjoZw2cYvnY6EMFcGL3yKcAkUyyt8",
  "key25": "41KfyLgtuB3VUHj12rcboWQ7JVJRKq7QMs6Dcz2o4Ys2wHk9SuWRwi4SNtk81pfpCxvYiBfz2hoCcfwV5n7Nf5ug",
  "key26": "3H2rvKxvzZbbNgdjWwF5DHiawMqrgKA7Ynume9Zaewcsp379YsB8H5VSiCP7XSsGTjf4c59eUNrDkuNwBXtxsYDa",
  "key27": "5HRKaPNhaF5Rec5ztMo2qA1LBBGogDciPtQa98dYN5XU9Qii6eeN8eUDUx9c3SBySewurPciLGTaH1K4JbF8ztQu",
  "key28": "5JBWqNckGfvto5fatXS6gVdnQvkTCnNDopbNj9N5qobqTCMeSt4fLDWR3i1WZ5Ws77zt7AW96sUT2QhbWjZu7uxy",
  "key29": "WudG1suPD4vFPk1w7gkvL4VSgAUp258EKWgwimWdHA17jszX5SHdYwASFSHQP2oWWDTCEb9kz9oDUSU4ZQqzH1v",
  "key30": "eVEAz3be8Ux9WNkpwNr5Nw1LR3G3pvbV4HcvJk4ZqRn9EMDpBTqB8RGLi3fgRE4FMi4PWwuTQm82CPjiHjJhkUZ",
  "key31": "4LLychLmm8GeCp4us5PhxMGbwnVjafp4vWTPShhyJuj4Kxh82eeQiYsvN6SuELXCmMx6gHD2iNaUpHSrBvwrTc9R",
  "key32": "DgLYWeWSETuaXcK5miR63pqWMFrUmw2JsXnY4P8VxNDZwHao7TaBAqNh9vqa9cN7v2GHqPD98QuF6p4tnFny3gy",
  "key33": "5z5hyLJQAeL7iAzib5w79Jcjgwg2B1AmyfkoHTVGAmECnBJyw1n3GYwQH5opDZugarzDLC45T4syKGTzngotyjRw",
  "key34": "2AFiY1mfTdtz9VwY54GYxAX51Ygh5YBJ3XH7KEEHcQxHJTAZmZ4qz9ehTtbwAKN8AqvBpG2hHPqcevUZBr9G2PFo",
  "key35": "2a5rRhatWDYonxCXrKHYyFzHAUNnCyTpXePBoNgbHimiso3iFXAZkZUnFkejsLS9Etqq24wie5dUatCanUE3u8eT",
  "key36": "3A4CzgUfjv6MdcHfB2umi9uZaT4VWVA73uY51pEz8ajcMFrkaUUPWz4zDknPSVh8uXSiThHP6VNGX4UffRoAJcKC",
  "key37": "32fAaAQiARGGDfsSMQ1Rxd5SPuHAerUbg1vijfYCY5qEzmu3kFj8jAfRfnyqYM25dQLZR3AE5dRV3bem2SvkNSqg",
  "key38": "49oS3KkuhQ5jUjxj7BP29L5mXdRpjvKubtnKe3Rzdcrsk3Y87gLx83DC7L5KduywVqyDe8DdQ7EDWRdak1fnYNiE",
  "key39": "4NSexquVsmFawiqYn7XQWCE4bvavg8L6qQChB5TKXF1X7ATgv941XbGsBuqJVynz7bE2YMdz1dj6GUYZc93qbqTp",
  "key40": "rWYSoxwtqxLpcUXzaaUjvtqCGgqTQ9tv4zqMCD9krfgKRGUE8MRm9H72WEACH4yaGBxctGpfoP4Kv45rZgUrrEx",
  "key41": "2vq1Cz17WgMxGkSLXNuqmFYBbkws88Wt3zsGnszQx2UGuDHAJEh8jSif9hXANBvbKU5jrKjd7DvtRwCSwPwXKDsN",
  "key42": "22aFEZTUWXC91bA82txTMhPZFXQgVSrWt7rieZBPKeihAW9miDWhuXWS924FLxB89NCysaXkdfGxNa1TsN8D3uti",
  "key43": "5tDtzkVUyym8P5Gen6whL1xHZWUnewpnpoVeueYtfYj1xqGqMc2fdv1suAB4NnvpTPrVti2GeFB6dGTzYjzt8NWG"
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
