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
    "LBQjzv5oGsGvRZZVvad5p3oTJiDZYFymZKwRJQann5TP4TFtk9xWEDVziLeo2YJ9R1G9QzcZym7PSRNEEMLKtzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kr6Z3v6p49CWFAhqPbenj5W6AJdJmKZfruguqhFgok8AG6Uq8V7K6HAcUb3ZYvP2QHue75VTP3RTywRVTsJjq8L",
  "key1": "2b3UR988YCeg4CCRrkrwPenWZq8usjL7pp4oYQrdUsf4JPtPMxjJ324xeuS3tb96rzB2x8vr4UrSM5La4ysWwkyP",
  "key2": "3rqEsYU6Yv4wzM2PQfSKBVuYTAc4h1Q4bouPg8rdRcUriTg2WrmbGaKuBhAtpsijmfST2opC9jxBs39XseevimMq",
  "key3": "2pmbGdjacSHfqpTEGkDuqbXXBfkcsPyJcGZbPMGAv7WH7UhK98RJoWjMEUWJ7h71CoVggH4fuQ3SefkkFUkWbVmB",
  "key4": "3qntBnuivTu5z1fkYfSNAVfqhUvC7zVFaVC3uTHoVg7X7pinDY7mZvwMZgvZuYnCaQBHryjKCpxcwEmroBy7sac2",
  "key5": "VjKmtML9hmNLLCvCQV9hS9za7gAdSARnFKsyw7WHEtkrHPBacBtBfhC55C2rCK9o7eZFTHHxAHPh4BETU7hTjzw",
  "key6": "5ziUXDGCKVb5G5Mx9qL3nqSvVsbUmHtRSS2dUMJ7L5Rqw8tTXg5zVfcK7iyaMy4Rwzz2kVBwXesgXNeRC1Xqj4dV",
  "key7": "3f1U29j9aMFtj8Ug7o2Mj1eegdhSi7WuTK46Jr2XuSSMSxa1pfhw6yejJYzZh1KSPMK4Jq1SWdxheadXd6KVsobj",
  "key8": "293X5xP2Kwnua9cho94UxEhSMVtkapipx4BuoSTNV5SXzoAwuSbAznXWrzsD7YWDnasKAY3pxQfhFt6SnzczNYWX",
  "key9": "58csjLLitq3xohPCXyCfpAnJ1fmDqf7FqBHdDY1oKK9XKmrpQNSmsVzLwvZx4wakX77Vw8BpVfPdET8rZtFdXUCm",
  "key10": "2UTKGSJJUmWjYX9nSqMGTzPmxL2RurFmETfRewASNp2ysDZrv5BJrCnnjvSrgWdfjSUZ2yBxDBQnkKH61wvN6ZB6",
  "key11": "62gammZEnMBokCXx51cKjQ5VwoChDNJE6Dzf79hJiY5kHQJpxsXCHmaaDr1db8yjKyDMTsiRkPeKmkB4yfMYf2Us",
  "key12": "3dtPYGp5apXVxoMKf4YWQN9Hqxh5MgSeXukJuBPKdXNAKrJKZB9ZYEX1eaMEHkcck8kyk38KDsYkSyCvvjsLre22",
  "key13": "3XY6of9hsiMvBt6MyzhEiW9u7AKRkFavpAXK6ZHyPzUqBrAmgGivSE345wAk6wFVq99Hjk3AxLUkssJjSfJv9LjW",
  "key14": "1GwhF9R6rkJFgr33goTfkX3RJerUPNPpNnomiUBcKSHWDDr5XH4QNSaq7g7eHPSH5VyGqknQ2yxXFvH6bCJb7cZ",
  "key15": "47XZfCurbWp5TrupVeJpV9XvTkw6omxroK7JQnAhdAysUrD4TF7iVZ7BzHwWAuxQVbnJfh6haomvv5rG8Jo8fYrt",
  "key16": "4S7VgA95xfFUyvKk2SNHFJhhqKzB2br9jruZTnWXRCJmXPGr3JPncjfqRZkhxday4NujVZLHZq79pvz54T18T18B",
  "key17": "227gTKi4JzNYH6GpPWHmV5ay53DPhCy68VLA8vYQQMX1TH5WavFGtVVab76Xbiv3bqRdkoxSWUZAfpHvWnFGy7dS",
  "key18": "3yPe8siDiDhwDTq5uAaK5HEaKEH3mXXbDJEPq22iwjkvb5CYuiKLxCXv2bgrs39hLKnrAwWjSiofGD94AhdkuVrw",
  "key19": "2tTcyJjtYh48EQbuqMPW72CyB18GHVXa7veucpSwP6TCAm6BgiYJ6DXmjkuMp7ELUZGMf4HicUUoTGtuKieG9NhR",
  "key20": "34bih99bgGg4RGyGWyTq6wNZqVEqSRywZoNtZzUJ7DHLFTPC7aq9oLB3eKwxPRcUczgRhXpmHSyz5b3Mr2e6BFwc",
  "key21": "4srUZZjux9oDgEh2UZ7qpeahWSe1s9HSvvxUYYg3orEv4G6bkzJQwwXBWbFgsVwLHv2xuDeKobyvyzFp92TBBYJN",
  "key22": "5rLK5EsJBtpiJwzmhsuqqmYvdNLwojJQYmCQK5Fa96wiXinVxsvewZEDBEfbwyewobBS7S1RCsDpLuwroCPUXEQa",
  "key23": "3ShMGJTiDP7ajPchbRtyxENmwDC91vbJi8teTG2HbskjywtRg1JrTLbMU3HXpYAinXwVU6nadQD1p5oJpfCPSKya",
  "key24": "4WsdqTNWXbhxLEJW2pmEaowKMqEFsaf3Q11sG2csDLPn8PYwo2WuZ819iBrUaFo8TFuyTkmnJLN6qZi5DEsHwbAh",
  "key25": "41oQoU1PtgWCZNze4Ham7DY7oeMGdH3UBMU7JG7dJ2PkTQeu9q6jGtoFLvWKKKDQGWABvcrF8c4naNHhZdzS8GHR",
  "key26": "4zMjkooMiJKzkUxwFn2ModB5MX11R1vfLPkc3Atfxer6TSAdzJeK9sw4ure6UhXn2DPL1ZG4hVjXVTNpkHu9u8aK",
  "key27": "33J1o4BjpbgD6Rk3PBGSapXo5hiEnm356wV2HdjBmHD4ih2kWk1z5RzPr1qAGw9HkyGrMEYh1FsDVqx4mHa9sZus",
  "key28": "3acFbfpKPzWLyKXSK8ckEPLr9rZaFFXv3vHCvq1gHoLCVVEqtVQtzwZjink93S5tn6xV3ymKvyt7kvmKSruHGmBL",
  "key29": "9j9vgxQxPvZ38pZQ2qoeqo9gyNsG3RG2rFEhXAr19rvmUy4hzB5rQpA9Lp79u8HUJ2sW79TznN53bvdRiJeme8o",
  "key30": "2Udd51Tqr52kRk6dfqrz7ZEHhSgcyxe7DnoptP2rC8PZS4KT1D64qfxYFFjLYzXeopAhgf2ZsaRnw1rYZwCUaZG2",
  "key31": "enj23g5EYNocjZMfps7ftUa8TQumWh2YPbsLwXePSjbrkNmis77xrrbbxELn5D6hBWP6H3Y19KtFtv1JopyZ6mr",
  "key32": "5mKjDWq6pvv4QtmsxVnNwQpydxUqVmUMNtVvPE5rjLLUdowvzqadAiBFmsyHiRAxrgMsC1xWtmknP8XWVrpS2vJG",
  "key33": "31SeNUG5HiuXoW98s5uMoNVbFyN2Ny8QD8Mrw37sYDunzmZqKYywY5E62AEC6mwnfAqxGENKe4NZJHUTMBAkkDV8",
  "key34": "3VtzCuKbPh1zbfhVHhQSKznmhYQyyvx7TJVShfnNJqN4EjPPWbTUKf5jPUHiSDagQvxditt9nbyPLneRPPvoNfv1",
  "key35": "2SHJUFg1EXck3DzKpGKnCsa5wVzkRa1LNNobqy6pugTVAmaeZZZWxHqiZDXtPEtuz8qKCmENz8UHkctnKBKsaspt",
  "key36": "4URvntpn3ctbwK5YwhCCz9EmZcwxk5h2N42hmU5X6ktzWpgMMNmoU3bJfSXac4WrLJY8qw4Dt9sZ2hNr1JxfBRgY",
  "key37": "5MWQVCKThc2YTtkAUBm67n63ifeWiWx1NT5gqVydFx27iEp3A7fkAyif7QPVJdPgLkyPqpfuzry4SHhVMiePzGwg",
  "key38": "3hRcE5EaGpibDEmzwFJ92HkST6meQcNq6TgzLucyiuHGVXqN3QwM9ec1Fd48VRSnjfuCGQH6LRgtwy15grsyQqPi",
  "key39": "63dinhsb8TzLdiYTdfH8u7eSTt92zSjv4ysibqZbT4ySLVhukmbTYb1aTb9tjv9i6j9J2SrQYaQHBDiAZuhWh31k",
  "key40": "3NZPDozFxVtuYQkLyQFBXPciRbKWc4F5a9L7Pgcm6c28WWk8x2zQcPjqywgu3n2atzhcAEREkLTdHrfitdj5Jsex",
  "key41": "5oiYc2gEekDj1ac6Usd78pcPyGvUvSB4FSGzXZFPetHRUGKAJ8LqZqZ4iwcR4MjfxNHwWX6HaC3zwJdCHKUj5z4C",
  "key42": "47sNAjWXLHFm8PtRdVxL9PxHABKesAm89M73baALaMmSqMvLEp6Md3qhkvViLdFAkCsN4BpYGGaXKcrCWAKowDpn",
  "key43": "cZTXNdZqwiSSZFasNqHFZRMrnY3q3S45vDjFrQd1QNAh3QGDXu9Vwdm4J2iNKPnx4XY1Y7mL9JULWFvU67hM6xZ",
  "key44": "7mDdfN1f6QPvtC6NiFYZ8qNVNuDruutFZ2BBSruTqyagHtjk8t6TMGpZZydULDtzddff7zsK7FRMvAzsPxs9XTB",
  "key45": "4htGgGzRGuwtphqhk64dn2eoM2rNeBTBi51RjWNKDKD6hfduPDVPbNbkecLv7fJyBnbuos4Vj7cMb4w214JG6DqD",
  "key46": "266dPaYWqQNzBm8PwgtSyhwd2LfheKnjTxoHxXSi3iSDQbZw53xi4Zp8mGNcUtCW35kqLV5in9dqn1kEKE8oZBjW"
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
