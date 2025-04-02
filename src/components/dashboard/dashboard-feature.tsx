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
    "GLdwJRvmgfCudfNsj5myH7hy654ciRMExG56qvxRnzXJMyVsicqW8KUrvqHoHpJu1mp7HJuBY6GFQPtQ5RTzxZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eo4KF2g9TiA1oMh1uNKFapgFNMb4MzQNfgz43wNPui4npcn8c5gpgPp5SyX4nm2t7dGRvDeKrnBikzhAgpHVodV",
  "key1": "GnQCeiv4bagEbzwzL6ezQTGHuiP6zgiAak3ZXhqQU1LBHGRu6cvLy5HSXxsqseqkTXetUfcC8bYYrHqeZagiE2E",
  "key2": "3zLeVam3cnxieCE5Kr2DoqqrrdqG8hfZ9rveLqUGrVNxpdGP72rNDLBWNDStsUozbGUsLMpVgkfRaZ4bnkErdCRU",
  "key3": "3sobV2t91GwLNF3zCzH3AvDnft2fMHLBcbfXMdu4Ecw66M6okoWToihaUJBgNiKYHxurPooh9mQ4gTZCs7nTxyXa",
  "key4": "RB4SU65wsJPWq9YBUgSgLCLxLocLX3uMG1HXyYz3WSRoyJHUxxD6aTKi4ekP7ThQ97GmQ6vmpXP6AJwTA6tGYHj",
  "key5": "3KLxnaAYz3c9tQcSi1B57dAmCnXQZPVzexrBEAvRFW8bPsfGFkTKifGeqefFi2HRg6BjtBbFkzXfTTXEKun2fssX",
  "key6": "2LGJtaAN2PibzwQChyMCw9eCcPZDgA67C2xBxUXW3VAwFTJSbWFfD6QU23GoiazB13VsBi4XXnDo4ehdbDLz4Scx",
  "key7": "2UfxpCxe2ZNdCegwGXUQcF9BKJM6fJCxTmVq6qSXRLbKWtheZQygdux6dgPj1WdoxL1zJYufVNawKMhfUEnvFpVi",
  "key8": "2rLoCcoVCdudryAcG2GyMJDY3tecqANzWiKMbQzGSv7xThmXVsucr6jKX8X7zbKM8BPySyvNoABBXUfevEfkJXf",
  "key9": "5QrBubi8b9XR7ehheoSekc1V4TzPekKqnc27sv67CBuTnjuShzXMkrPcxchx4poF54QUUZEQ1CHfGdgASnd6q3er",
  "key10": "DdX1bkNMjKG5Q99DsnUAYGUyBD4moFxZGe5ywXwQdZT9t8FRnBJWokawTEFAdncbckaz75BLnqY3ypbnHcY1hFJ",
  "key11": "5ar6XSnRyYhSHnmTGB1mdULphmABJkmF1XnKG8ZfuJ1r8LcpHXuniQoXnYJruV4L9xoqSQH8SMxLinwZAvXhGR9R",
  "key12": "3qDc27eHu6XdnBjExia8qj3DDxBthxwtBedjL8DAhBVx9GavqjBr8cjXka6Ym8R7HT9NQH8x9buPvhFob6ykNcsx",
  "key13": "ZPysG3gJbd1rPuBGvAyzBzRwA3t1eBgeWP7irjRjGG6W7Nyy3uEB7j9BfwNRjzgR7UHKjsaQnEtSphAQPaYdtRR",
  "key14": "3BAQTZdpKE2di2KH8TFp2amZdv8kH8ZA7brDUcQAYoqUTMagtmsTxDS2UYX9CcXexN8Ua7VT9FWTEtbe7qhoCTCU",
  "key15": "2gSfJZfxJM2ndf7xSyaCC4iMscUSjBDB8Yn2Qr3BZH3hrvdT1KSVwb6TmGhQ1L4g5BJfPjUC9zFuqaLhE3XQxskQ",
  "key16": "8ZbAg9HNSA6UeNCt1d6gsUCakeCimKB8o2u1y6Pn3i9ejoiauAvsBRZ5jqyZarV81AtMyvnbj17zXwm3527nLfX",
  "key17": "46646pEPHvXFePUooQgJbZnbpPJjgpc8K1jbR3KxWV934xbjkdU9xK4M3cAVw9pEFPuHPcbuyd1HRny2XNf4nJsL",
  "key18": "5T4TT1FKRQXAULNeB6zD327NoCJFK58B2pjuhMJYTaotyhWpTnUJi56wuxDYfNf5i1xBQtszavxfQs65wa9xXsFw",
  "key19": "3Trk56676nWSWJdHP79iFoxPRKL9JTfv4oprZWgafULUcQmQZrcmc1hHPogUVa9FetCFehnQE18WKKWgKVWAX9r4",
  "key20": "3SjBpLVZA1CEMbe4vxkDrm5FWnAYvRxv48LdGuFJFZ9XBDcQoZwoABaWsswYN1EKZHERiVdT51xEa7JeL387USQw",
  "key21": "5kkbvw7JUfgWkSVH6ivA8VhTBeSSrzGP35eenvJxaJR2H4mDgbcrwFVRWtyyfDika29RVRfNg68ghC5GHAdiJqza",
  "key22": "664D1kqzNUSfRBctdQXGA745RPbrSH2NznFUgPEAohdgYGmgVbu1z3gd8nbd7mpYPgLEURmuALT12A3DfvwiwcZ1",
  "key23": "4LH8AUvc9dF3h1ejrvEZDcw4K9K6Xkgq2uYpkKuWkHaXcrQg8AwBqHKAC5SHgvKDPqP1iqYTunmGQkqpKk4DuqBi",
  "key24": "UmkN1jNqqQcareJ7z3BQ7hG56okptBHwG9jzTXErRyzM9R1mPwpxmECcC7oUdbSAFUC5TvbBrCxYoSWdH3TuqxF",
  "key25": "4seywWCP87Y2NXuN5sPNBPtkgLPVvnQADVPoJG2741swtfGgPTDkDp26ZrM27AAQfwUR2CVfFj35qKNi3eZ3qmAn",
  "key26": "4gam22QUcxzVonqvnEBQV6usv5o3H8TMryegdvuywmiGih9vBhHhiEufpYaC1VRn443cBrqFbxBEicnQ5kxv7FD5",
  "key27": "44JHRA1zFFgpTPWg2p9437YH2MS8EN6YyhgYg63XtSzvBMSSrD2K9atmxUWwyk2dKYAVUaoa1opPdcZaBY47duXa",
  "key28": "2qySypDWyNsX7WmTYwCSbnganhGKtFK3MBsgRnEJcjrEsxQ63GsTZmcWtS5rn5mVQxBpg4dhVqfX29XJsfF9aYjq",
  "key29": "3PjZAkyn5xx5TKkwPbkLDqDcKpVGA9bdhYkehKRRRJsuhqHgPpJ8DcdNBATXkVxjehHXaPTnN2cYAyzQ2WGk9JaZ",
  "key30": "2GH2SMgWZzGcsUBBaBhz58PWzBwoq3Q44Y4jb1P8QSZSe6LjnWY6JFYdnHLLaZ6Z63GVEVAKdD4tdVPoQo1VaS3Z",
  "key31": "5oeb7e9buFU6mHFaw7sxLD1XndZzBoiEDzJnHZJrmZfN2KDYT7ptvN4UzBK4zuSwLED9srV7Q1NB7edgqDnAXZPX",
  "key32": "2P6Eab6oQa7NLwopNAAyUmLeDpGqRkX1bhZUCKz89A3RSAnZ8EzPLnB6eaGJzEnY7RvQTrnaHr9paugUuNmRWYoc",
  "key33": "4BME821owZq7JsFhSc18bQGUugwPhfY6rYjurbKTHoSFAfxWAwjoeF8zy1v4YWkFZsgXsCNVpfrAf6E3i7BGuLcr",
  "key34": "wz9fUrA8DePzcDS4xxZTX9xsi3PwGXXf5DJUJnCc4iEHbdUvbR7NaaMN9H88PEV4R7dEcAcaSZVpnUuXXtF4WTm",
  "key35": "5JatFxc4EJmYw76ZK6AXVKhfxtHq5fAE718Qk8CmZYeQs8rg3HZhEHx2CheNWt9DRwRCWwEy1i74Sfp4L3y8bHfc",
  "key36": "648uU3Lk1PRTa1HYx8xFbHWsxAMzufDqT3aq5BJJk7HxHEre15jV27kuZiYTw4V8bbsXsEYFXrj8M3EXcZMVTeXu",
  "key37": "5XPhzzzkCtFuL7JsVAuS6eZNbf3h9ForZQkUQymCYenx8UseAhYyxnCB3yNkCyaYxEM1VzqMHL66Rpfn8G39fBTH",
  "key38": "FoF6mJ3kLc3LHMyo1HM8gkMQuKrEdz7u363ag8WPkfRqNYzoPbS74ddX15kf9VZrkyYQwFyXderURpQuMw5xN6T"
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
