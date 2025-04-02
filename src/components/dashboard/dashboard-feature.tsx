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
    "2yYrdg74u5wAQFsXDwmCdNUSrue2dYWhxA3qaMsQAYzw2NNXJ9aipFFQ3cX7SyzmKXQmFondAE4ZhRuvhTeS5QYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41etu96jYNtLWGPvwhKFbHkFeJKLiDoPJm1YokePt5xj713f2zfihmdnUAbq3MCepNLJaTDRhfHMYNdfgY12J4Xt",
  "key1": "4Dy8yfTMPvNpF2PCZjfUYBCqFDwtuyzXTvtA4XEhcTUKsxCZipegLxUFC4UDsvFqnx5JWT3u568po2jJqWMRCaBQ",
  "key2": "5m3gJwqnHBVuFACW5xAxuLQm5k8zXR5VR2SkYhTmAYi5BYEKDo58WNtAWj7AnaoGG3hSr8ZvFp2td9uNuriHQr7g",
  "key3": "KgH92cfNvdjVVdBwNfPceHSjZBg1XKveRAvhLshT2eWTywCSFiVXCAsptZhUGBnC9oroLtM9ojdoNKCoE4EcQ6d",
  "key4": "4W4QYR2u4BxF9tvX1j5ux3goDhDU63ktJvXoHBduEKLuUXowboLe6B5xLaGMecTCHUa9wHLax8rPrYtncz1FzKyK",
  "key5": "2eTF7X1kY2B2yrgoKmsJ11xwU98j7Xfd4A85Wv1uirKCBeWKU2siYCq2qpGKL6x9vFjY3Uev7JtiLNF5aZBk5Sxj",
  "key6": "2sNiBsnJugfDY1b3XFmMcXQqG7JiKm1R7zRXCCqooUJ6knVtSyVMLfaDYAw9h3jt1o8Wk2gYCzdLjnyyQjauiAXG",
  "key7": "4KHxDSvAi3ozMpdUaeajWMuYov51NZ8QyzLbBDKMXWMnyMAC9hmfG1AVyCE9D6abX2A5LfPUhVPmnScthNadgn1b",
  "key8": "5LYpwcqiiarTGcWLgy4HkxXJKnhWFfcNoDcZP3fXznNg1ypDkAZG976y7krPWdoYgem3ZrbwZxJt7Y6mh7Zx3KLq",
  "key9": "5HgpMUaTYaw2gb7bMx7jQgZarHUzVCNNCfp9PM18Ub58jdcFT5Dv5KdS5Jb6x6kZi3yuvMXs9FUgSB4GpgsYZ94",
  "key10": "56dYeCiPgQHmEe4DhSNqN6ub1WczULqqbCuo9mtiHb7QskYM1Hph8R5avptW81NomSkjBXeidHUy1iYX4bMhcCe3",
  "key11": "4wnpReqMW3vPEN7V8YhfV1p6grdJJC2XxaXSzN5dzEcNzioFykC7BYUvbxuaigPTX1H7VQP546LZueMdtXPpNM4x",
  "key12": "5dogmiZccJzrDK8pgNKXyBaSSMnGQ7jgTeNjEKjwWSe5MCdXfQvsEHjpzcf2EPHhbMBvGKLbCMbfwmjyeCCdZ4Kv",
  "key13": "LUMsz18vnpb5shkVTcgk61hBQcMANSkYPtpdScuShieHyTkD7xAE96BvV4mySBQz8CyxAU7mchoKHgzjCh5ucTd",
  "key14": "tWvAiM5CGMbwfVMo3arWn536mgKohzQz4LFseP2WF27eHbQ21RtZVHb1tyf7zoXnSW7mwbkxZpFQWSFhC3Md1T8",
  "key15": "mTAX5LjF8YiUva5K21prRdwp9QViNKiPNBVjNhB1fu48CtoLvqU8nQFZb9tn5Vk1fDUcxPHi6WPjVW4hSpAdoNs",
  "key16": "kKG2tThpufT5uKTT9bgTXSzET5yDv9vjYfyX2FK1K3CS5eM8TbZ2QQ9qM83YqrnvAoyzvApuTvyAUdYJfJjznt9",
  "key17": "4ZWrRWvEpP2zkYDX9zekLboEnghEe6N8i7CMUgX4pCJLZ9e8iCDAfB6oGLXFC5NtWx2114jKfCAvsoV87EPReac1",
  "key18": "4wjeSGxjPpBxwGJnhJf4ohZhtYEYPoT7Ntcvr2V7fdm2cuxFz2N32qj7bb9jB3fesXYrxsozetCe8D6Bp2fdHks4",
  "key19": "5C2KMiobqEbpeXfvc8ci3EdAYcbjTnYaWoQsZGnynaYv4KYVSyvuE54Yqjox4aG2d1TZJkAyLhsyA38sJSWLXYcd",
  "key20": "2TA2VMs8GsjrJTHJupEiN7wxF3HPTPKmAViXT1VJs1Kj4BDpESTouhQy6P7HiGvi5havw4TVBfqytEgkoXMyG1Dn",
  "key21": "4qzfApVgL2NsLWBRC9hRwKdWZcJ7FoMJh2Uuxsy4ac4UcFtFocJ9mXAsGhoDGJbjPAjtyCR8XuXEFALsR93zVzGV",
  "key22": "6QjfnYd5Knd1ZeNhHUU979gDpGfU8QuCRGDZqFxzPKWQL9qvoSRUkvJNPsEEya8g7PjLUtEjdW9MYh8gZGvLcPR",
  "key23": "uWaBKX2K7zGAxENYJGRYSxw8xXnwhqkQKUYoV1NGcvfNhbukvMEb7BYvXBhyskFfEvi1HdSE3Fy8iD35cBjXXYb",
  "key24": "4VVwJMuxW7z85ZrgW1aTmzbwqHrjzSCNZJRLem6WhsMSyTy4zDiVWciVfpXyB8DWrDcraXEx2bfXXLYumFKqYn23",
  "key25": "PTQ43qSFjDduCLCVMxqPTC57HXpPaExPZq2JpPe5ci2kJwbPgWgnP4SHQqfrsBoNq7Dpb7mABc95HrGz8p7NNCg",
  "key26": "RcoReU4nQHFtgLRJHhENXHduzwYJhGpmWcjs2StUr9WQC4QCgABhyJeCaTsSqpmD14L3cx17dRSsPyLtqNKfvuf",
  "key27": "3rqrBvwkfzbaWiQ3bhnsBiMKyJc5D2VkaCsrpGfB8sjUceqxuoAWjXdkD4mmaDSAWtvsTuAYpe4SNPfcXwhfBQmg",
  "key28": "LkWRDF5rdJhrsJyrwru1N4axDnRYHHusCPzN2RTnQGHPtymPDgDmxm9QVmEJqMeQyiaFGUVD7Tn7rzcWbERRVqP",
  "key29": "1QbjqtQKYgdwwEm1Bk9oqGAngABQKRYyWWJYPpELBAQPLGXHs1bDKhBLtnQu47TZvfRB7Ueipwee5665V72cvwz",
  "key30": "2uzVvcadcV7cysYFeQq271QN6LAUAqvKwg6yykzmm7snKJR2hDgyckd4P6fQJ9D6YS9ZhBJmZNdNatLnAqnUsi8E",
  "key31": "25rx9JtirmfojFYukXm1CooijoQcQ3WT6ijQ3516G3VevLRL5jK14jxu3Y2BVDMm9UiEDC1uLmhMrbEzP9jXnChS",
  "key32": "3YPmwY3CWrHt1umvK6mFR4uu97runDFR3VdM2ZXoYnG7u5YXcntaXNpbBJ3TYoj1n3bL8aCEiw6UT82atuDWi6bk",
  "key33": "5PK3D233iWYEwLUrbzug4TXYnf5d2sN7CjtXM2WxLzuqr92rqTtvFbDERGojZQ5cuQLWqxYjQNbLrQdq85gBVWN9"
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
