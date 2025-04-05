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
    "374a1HrLzjFsTaRosBgwo2rrrRSTNB5Qqh3MoiTc9GuzG7Bfv1jkJUQtgSdGpiwzmU3mfmvRNLQ37FUBsywRZnRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49B6yP4khA26dQrh1vcxzvJmczTyCFEfUHqCm1JdNeKAyHgWdzYaZEawX5jMsZRrDBDtJU8WXach2bi8FakNHV5f",
  "key1": "BdR34nUSagnPFfjRLDsRsjydgsb9WXPKfSmnLaASwrNPAZnFAhsWDz2UMQPofv6qPPQWsUrnTqUGVHywwFfZLr9",
  "key2": "5G3HUP98SVAEF8xohiLGy77HZoyoc1eHdCLJ4AwgKtHEjuLL9peZhWRheBxNhiQ6pCZ7FZge944an3LcaEXQsBKJ",
  "key3": "58AWjE8X1tFQE8pLXBXo7f2kShMzNxFNCEeWGVoN7Ad6rHN6DjvJL6YGtqCYaQ5UHNUT1bjPzJ2XKqpc8TuEYRrp",
  "key4": "57cjM7rLSzJhhRHX19vE1HaDP69cRpyMZZWY7LHU6YrsyBFmyjfFDWr1fiNfjfuQLc91iuMhUrvDVwoHMSyPmJDd",
  "key5": "52XLxSJYX3hV3eg36NDS14GamieeQEP8cvXZp9cAYTrW8ThfYtnbd4ZcZVUxSFbqLVqR8bUFFJorHDWm8a7qxQrZ",
  "key6": "4BXvPc5QMYwLc7iEJjdA5GSjMAog4SjFv3MMLK4Uc7UXn9SkvgcF8UCBJNLvfwQm9VzLvgj9nQrrV6QE8KUb8KKv",
  "key7": "4qBK5xcGqeoxuQft27ZisLfk5HBba55A79cut2qcBNUTcAqKNKU3vAqdSustbaf5kuKLMTHNBEzZmoGVzX8MMFsb",
  "key8": "2D5SSDubp9H3UBRRxE1S5d9S46tQiobqcPWWfoQusaWvZB8QxTY6181vmT3LzMz1YP46z7fLmveKPvuDr2wPPXgY",
  "key9": "NGKTYBxaQvarXf2TmfYo1Eodd2oFebBvMZ8Djp8bfrhGHJT6jY1AcqXmmtvHhfr8PxBPLd7L2eCnfPRTGgGo7T4",
  "key10": "4nysov7Z7bDfcURQ4dRhsKWr8d3T9aZy3ea3zvipRL9wFfri4DURRbfR1ELuzwA5inAHB7auWUg6hUkSTkEkzgMg",
  "key11": "2RdRm5mDMPh3qbreuJFGcy5jdFw8cuegmcEgao4XiYKxPgu4yeH4huRunCjkK8YiMRL8YBFcnL8BajmVeu7c2D2V",
  "key12": "5V6xua5JMAhXc2xAPznx8Vg66kCJmGoGJCXZgyCqvwRHGQP44uxG99c4oTAppsZ9UuVkPVfsx2w15XQSeWfMmPQ7",
  "key13": "2Pvru1f2ogxYiLHPqYtYjq9DYDgR6qYYRBjJJn2E8LKb8qiwskhJRAmKM1subdSvrjvykSuNQjozP3fS4rrR8nsy",
  "key14": "CjFXcpNTAbwXxYMMPTXGJmcMbSxyTkqL8gNH6eCMumoVDeCtfTf1X9SReJPiPBKsNX3FVWcCuFJ1ttja5RQJx74",
  "key15": "3AMDSVCztxA5HZj4nTbKh48g9Z4NoRCuWhZdC9Gqfr2FgTatavYoZxdX3LrbvBu2mgPBJM2NG962hbVxHt6fTAzH",
  "key16": "PxAkDvgnchR1Z9cmEVhcrGcTqWG4vTgxWgKKc4cpaHxq3udxUeZn5r3PTQHENDk3QSPRkLbwyK38irLqbNjG1kq",
  "key17": "4L6krWD3Vn9ncRxBVCwDfWDrYE48LbdxRGhZAR2qMp1zFRsYENoigUcZDJqunJMqT4aDcnS7LBK9MB2fxRdS5ukz",
  "key18": "2uCAi5QosLJKYNXX7WmyuSGhdeVJqV82ViF8nuUKdVe8PFcGAaT2WVVscka6gwVVMo5zdF9TLLDc98H1JDAvhcW8",
  "key19": "38HFPkaZ9jA5KZ6NaG3WfRoMLnHrhBue4mUA3ZRdaxQxnog3CmfjRSto2SM44yFqq8pNZw7rdtUxjt6Tz11utn9y",
  "key20": "3d3Wr4hgCiZrzMJUTVwWz1svA5DitAC7BGGaLjr59UoCpAUGbWnmETJ6bAnigBxe3KaSnZxDvuJFwqDvJbRj4E5B",
  "key21": "3ML4pcsbGodTALGV26Zkmu8uwg1PGzff1EbZecz8W17YXxS6Evni44YtXw4PVceYH8eqYjWQY97iNCH2mH34w5xN",
  "key22": "366xSKTRHgcJJR9752jhSM3axR6qCdtDxoLQBzfcW5v5YWcT2gdB9AGQgfJPqbsfeF7xb97GW8Y7JbY3L5XjnvKF",
  "key23": "5fenwRxBKPNuSjBMDTD8HLnnFbQL75psDf72AVzx8p1DFFvHnZ1Y17gD5GkDL7o6otpS7d9VX1sHsUxuWN4rbKE7",
  "key24": "5q2dHkyBbRLRiQgeGLcHMGQQDaJtRkvwgMtGYRXdBwFFDVPz5jNuqDPWisQibnSELQ4n43tuh3VhvcNSutJFTkeB",
  "key25": "5auM9L9DygZhndtygbrrQ4ceHcErNAKXr7QqJcaQMtWeVjrU82keF5bCZrx7kLsvMMinkDznBC21cgxipxydYtVv",
  "key26": "4LnsSjYtt7v4eqmDgen3M4gcanANgp2qgDkeEUdqLrqv3pG32CRaGYQXutHspp83BHhK3pu1hs86bCa8CVWPp9ZB",
  "key27": "5taHWesdUjGM9XTrMXUbmeKwxHNmfS3QGErvVvens8wf5fv11R9GJKWUjpDjSBUe4qfw1ZoidC74arEy5DYtYY83",
  "key28": "67GH5BfSyi6sqXcXVdV9BMCVLqLv5xhvkYVDiAVVmF9BeRLzsm1VmbpRvWY7EjoWJ7XrBAZvcGyvp1HmdYkcFXEn",
  "key29": "2abVU9Tg7kS6URQqdJ9Cxp5eDZgZKoPnQiTHgc8XWjy7gSbWN5CbvDoALLXgGJtR8XVybsDBGejPpS6nLbZv24Dt",
  "key30": "KtjV4Z1b5xwtUnLUdEUL7xvQaudpKqvcbhfGSJ1NTFZ9zD8D1Z3rj1x6dCHnp1kxYqVJKkadFAvm2QuFziMjP24",
  "key31": "5Ra6t6hxCRUdWQcidRNCtW2Lgjt2oVfrByRGbx8VAMwe95GL6teiZvk5jgcu4LCoJH6aVLVapKoF1PCPRz6r58i7",
  "key32": "5ZoFuogmPhjKYw5xJBwyuwcu93zU9ZrNwUiUPSXiauvbjLv8k5uKGjdyzaKEBBQScsMnR4VPckqNU5NXBsUzvcV4"
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
