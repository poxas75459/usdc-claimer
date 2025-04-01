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
    "Ed5vgHr2xLGqC3ramo5MmYXVYkZdGHPN5xDFTEedyNYuaYRJbHjxc5BLHyZE6qnC7YDKHTKCkF59JKus8supM55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BvRQkLNXRctVKNVnWhjgwXdNHLge6yJ4bhB6iAq42afp4ZfE2sMhTVCxraskvPzoNMQKxMABZpBoRHJHMUWtfkM",
  "key1": "34GxX7HSn91tKezoavg9LBFrCHQkaRP8gXd9imnfpF14ya73aSsTP755ZrZKvGtSnVNWwRmwu3csmgUNDnJXEf19",
  "key2": "4MhFTx5fpt1KqLLeUEjX2KSp6DkNEzS8RzxWhWuywpiHT3pNCYaPpMz3dwTJ4wK5JMrs6CZ12i2y8tMrhWYRirZ7",
  "key3": "37CAswfeRdasjVEZqAKCiGWtNCAMw9DBbgSZ7UAnMvEdmmKm4HkEp2K5ZMPM7rih5XrW8dfHwSy1gHnHNyQKvvDi",
  "key4": "2LcnoKoRh9HMD2iETM53KYLvx9AqXemHY9wvZLRvC3BoHwReV2moCnLWXYLpdTdFhhWq3tzyTcpmGSoiZwS6tNLF",
  "key5": "2sXLnyEyPzWEC2r1QFcNfX3hvqjvDxiNymY1vQtvv9okVdgP3AvrvuhkYYBdz5F6HzZpTUMhGf4EzNcFP3bt1tSx",
  "key6": "fMV545cvrybeyfjCGxWwxnaQhaBdLdzUgxXARC92jJASsg7Ve2WESkPMz7K8oW9PhR2MVEjYfT9ypQZE3FknqaF",
  "key7": "3xv3jPYJSZnzdYLH8CYjPxicND57CGyYYaa3j5YotxAsCcc7B5AJkyTJ7iQVP7oJJdQUbcGmhw93MKqAxMR9aYW4",
  "key8": "5r1AxtZBFBoSu8ubPyBnjiZDq7mvWe7h2KEFNLoNin1GnntNXpco8Qx4w3m9grN1tk8s3LH7SBmFuoz2VwLjip9t",
  "key9": "2u9sjzYKwoPDhZkSd9g1fytSUVxrvi2S4sbmB7eKMsT2asFNbGz15VfTEaT16eLezyvFDPchFdVyenBVbAR1E32",
  "key10": "3cWJ8med3op6uNPQdSVMNsfCKeRb6TLPxRUbCCFZa8bCXwkn7rNcBoTMWTtb51kDvWkXc41VNE7Qhzi5AR4ytxKA",
  "key11": "4ZdDfKpL9HQi3QUYsHRFqbqUxM1HMqaDQ6uA9addcRD1h52vgQvWjiPxjuMLtKE2fYLsdVWBjj4jYdwcz2XjLUWt",
  "key12": "4v1DkXqbWNLZjCK6tzwzXeXY5yCu2EZRxAJ7dVcaW5daoU4rf6ZZ8TyDPDxJ9yCHTG64mfQUXwLdeifRmCMKMquL",
  "key13": "67gNwdj8AQRgPbhqsvpjFMTADurhR1PTd1qCK12aiHaD3kZar2grDBwGLEt5ZGVtqBbBsF1qSkmxvuki65o7TAm",
  "key14": "42p7d9HYD4CUFosTrEcfukHdiHbpx4ZcKeTvfpu9qfUkkfsTSKKRwFTyJNQ57fJ8Drzq8R5BNfm4aVBum35BEaKt",
  "key15": "4uVsaTXRic9gbZYtrGTJo2SnPCJhrFPK3knCQAiunwC5Lfez5iqdxhVVRsJCTvCMUXQ4XbfknP87PPvewHmcrrpP",
  "key16": "25STNjMHPiLRtoXrYz6EZWz1qXnyWARtxXF6bZJK246GM6yQxsPWitHEXsBDKthvgRmQvAR4YVGij5YFfWCabcbY",
  "key17": "24sqyP4aK55Dh2AcsbTrrBYMcuSjixiKFyPyX8sBxu4XvstiK8vo4xbCwbLUDBSSQhenJwLgMN9MjVpKNQ9wrYrL",
  "key18": "65WHLErs68jF5pHFwyCEVo5itUyxG3D9ZnPv1D2i3jFrf6NCXxoaREETcupcEW62eyQfRkb7qZvjEh9nUgV4RWBe",
  "key19": "28xp2i4tVYrnc3LvfgnpfRmqvcxgumLtej6gSXfcJoRf159e4JimneqbApirLmuwTXjUAoJJZZJmUno2LtmVA3Ji",
  "key20": "36HLXpxBHjADCTgq9rPd1v25iK2zUqSmNHzysuvkjKaHKwTNKj5MrtaPFUCn61X519pNmiwixBWbFcgjyVKnWxCr",
  "key21": "67n798eP5DjsEuBpwJrc5iH9RMTJ8cwXZZj2YdUNS3hzyTyHo5MM95CXCkjD6rjFtfsCvHD7L8BiZSGUB8gJak9m",
  "key22": "5rhApQaWCJdxwhe7GnDjGUNsyRzp6eDMpGtGRb99PuSzx4FqkeQDDiujnXHithEuWaLH8sdkryzkdy3pJPQikQdd",
  "key23": "4ysm8aPsULVJGiCjApoYvht4gJEnDziLNR88DL41dhsquWatE4YhPjZ8xWRm7FB5859rkQp79V4C59FEnLVc4786",
  "key24": "31eJS2ZCExCPEveWEUAKitmJQy56Sn6gUUu5djPyWgXvCP2g4brcxTrC7fyhbXK4msVkgZ33sRQZe5DY7iYwZVgm",
  "key25": "2FVdFzA5syjLxsiwXVFA7A81XxpGKE54LwHfdk9njE455N4BLcQFCSUKsjPCbQpBdiBSP5kBTWTsCZWH12sVUdvc",
  "key26": "5Do4gsyLzXoqb2d9Uy1842RkgQq88xZ14odDNh9mZPW62dUEEcvJiSyhkizGF36efmycha7avEYzF88ALhXKwSkn",
  "key27": "61j58GAY8qybMiGtmFVtMgdrGpanVZyysYjxZaCCALToh79KZZgyKwHsRDn8UZJEEyS4m6NfmjpwtT5dAJfJJ6aX",
  "key28": "BdZkoRhDWos3reeDntdnJ7UGAj841qtHhw7VSCu3ffZLu3n1m7go8o1rJsY8zxQLa555riNeRCwovgi59ZqXcZ7",
  "key29": "3FKjdFDPHPWEARES7EBxzCupcXD5yiHMuRdiJzms8ksDsuTvK31PasGjEatrQxVhEdvbHqsVaG79bG376Uvc5mSK"
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
