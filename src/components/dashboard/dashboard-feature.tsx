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
    "5zUfAKhqYJw1KTYP69GQcMtMi3PdJSUVSgH5dbq6FwwobXgpKDCCgtAD8Nk8SpCga5jpmygoidwyHoJmFXrV7Beq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TA5Bj5YYYa2L36nsxx75quQgh469SP1PTtj4wEeqk4KmjWJsnrzTGe6aYPQB8cbfxsKaQeKAUrVMexTRk7cwAW",
  "key1": "2vz5ZfpJCq9sQcKeRnzTivsvZK6jQQ1nMFMaWg4XgsWArXrRgGUFime7XuDzQWSqU9sSyyUYsY2ueWoUA4J4qKjX",
  "key2": "2FFsibXZan4C9sFoxCFNhpE13GZ84dJYTUNqZD5N6R1uZqqNohMJEmGa1toQxfia3xFNKxwb4B8RFrSyf9G76LMr",
  "key3": "925dkbXUGFi3HTDAM8P45uN9nto4Z1e5eLeJTAeG4FMCzqPMQzq9HrFps1ibvwWuBMeAVfXXme7G9qurpvzpjzf",
  "key4": "3MoDcJbywRKyXutcEvGKcANUKwVE4XQhpjTeEoKwXkMg1vcov97MbiayicWXFAG5HGL6n6E2iZ9eXdN6N2LTihCY",
  "key5": "43mSD1TGDayeDrCic4VNCk8S9iVzvL9DWZk8V5myNdBQwxLG5PLveEn358hLnrxwZtRBkxQAePzrxAATqDXZ5ZUR",
  "key6": "5tTmT7rQmHh1aF9iviJkonf9326remLy6YxsgdSehumjkYqZr71Vce8YAsyBPziqjoL6rbUxApAKdXD2cd9j52X4",
  "key7": "3agRio8VtGwU6HE5V2yY4shGQFFr5dHAyq1iQYbYEKYvLWQFnf5DSoEr8n4pNqtD6TwTDpAzKptJYTqosKCWs4QY",
  "key8": "oiRuqR7Ps5A2XHxT5JtbBCitYho2AW65QX9QB1XszXVCbZ38Nqwr8hYZw4yopesM47dpW3qpnNg9acez2qaPkZC",
  "key9": "2kZnQnFXfCpC4uuz5CTJNywEuKTbzDJTi9C5oiYPryDaP6k4S4R6d4a6kuuY7ymPfw6T5Sa8ij673d3FbeJC3kYf",
  "key10": "55pLR1pW83gNapMfxnxgDUhBczjS7RdebiqY9P4E5RmJoZP7mU1KPgWT94Zo3oZHuLtBYR3J4B7xjgjCNWrGTGt",
  "key11": "3KAkZVPbj5zyuwsn1KLc9B5Ay5sMFd5mHqVErsZGBLUrz3VSQBtxhvPJKpRKNvXekn9SoqHo5mM6Kerquc6UejN5",
  "key12": "33zi2ktP13TxCyGBP7b1YYCHax7oS7ZKJwaeK9eaupYBw83Tb8b4ofN2EgdULzSokdn6awHoGgzjS9QNig4x8jso",
  "key13": "2L1rzJTYgUMibnGxrcqVadzqeDRzzJGm5tPGu93LeR1NLXSpzfhGFgUhrdNraQTqSdtxFBXyzZzGgcpfCTEXjqXy",
  "key14": "5mU6HodToibzZjH4V56szKT8sR3DD59b4jVp5tnHGx8hHviNsgerNohXUjsk4Zp1XJnEwBfZeEE6AUnpvKfa4iEL",
  "key15": "xvzPsZQt5X2WGexqxLmY9t6oV8xx33Ywh3Ho6hWg9oK9JiKABWJ5S1CRnhB4yH6UnDdz1CKox7xwBPNoN6vZz9W",
  "key16": "34aUUuzF3apNwEHg3zT8wLewHeUrMWPZ61ZG8JCs7NhaKvnhdBb6vyFiLkX3f1jv3TuwJv9PZN4PZQ6x7h3kWF1N",
  "key17": "3HBdBLDZLC1v1CRfkMq4vTaX7u4ETTg9fhT8M9zWfMphn8NxPGtMLLqBz8EoifTZQW2BGjMmVzMu63ynebmkoipm",
  "key18": "22kETJwqCrrcT6MJemrnnTBJVB7ZehbexcKjW6iyUSq5UTLcWcDVqSRKRm3ED4AdW8YuYVbTw5s9dT88w9JEzQCW",
  "key19": "66gv1NDkirFLidC1bUfZZiEiDZtcgek5Ud2EWDD4DGmiPnqAPMw6MAYDJ5XXoHRRLZSbBzrNWV3u8yFXsqyt8Ri8",
  "key20": "4mdsP8QF4jTW8CtWAcrWfoXZBLJsHcNBmQLv91FGhivDJxeL4p64VsgCQ5yGSwkbf7Uy4eKGrMQAbH8ZERjncUbG",
  "key21": "5bY11oejVExWSS2F5PS6tWSS3A359WJVFwyGRcW5heUbh7ucjCSWT3dhoM35skAV8WsGVjg8Q6ARAzMGtj323HnW",
  "key22": "5AYG86xATyBDut53LaSvVB7gDRvyWe9GUr82vPWkeCL9WiuEnG2heiHePJTYDnMtopjivm75aEZvVbD8bUniQ51j",
  "key23": "45zgQjMGMPHwCMX1H8wWxadzRrk9zVEQpGmu59eyJTVbAAS5caHPfh71w6mTPuQDcVzXc1rQuzoQMwTEEZmRMsJn",
  "key24": "4TDZB1BfC2dPX2tX4MCapGorafZmc1oZGn3s3FpN255g9qqLM4TZNFvicBjRLgVxaB3RwGTUm3tvL1EETPVVjHoX",
  "key25": "3DDG2JdzUwmPpDYZmJHgKtRQ7iDEUFDeFmRqyej2P3fcTvdYwhjxuDuCJercGw7Lx7SAUuM9ERu3aLP7A2ffZ5Km",
  "key26": "5PMFmp6jYCabyaPDGJdn76DiniAALTGFbZEU36yJnX2DrTUYbGXmxgNubwafnQvRQVmaPtLUDNdYP8adwp4sQtQp",
  "key27": "3UTdkswbMmQtrpBDPLQvhnRvstWGmqjS7U4XwyiESXspRSqbs96LAwHd1tJxhTKVfpVEsBGAiAfuroDfRrrCh4eU",
  "key28": "3PtB6ZrjU1sMdDP1agadBgataon6heiEqzQo7u5GZsvHBokvouKxLe7FsZH8UV1Gnyq7Tv3VWa6CX3Zsh1vPJxvD",
  "key29": "2pxwUthtL63gGBgdTUCWaLkyaoihkPtmyLU57kZqkFvySbg1HaQ8dhiCWL1F5tes6B3jZFdz4RSveT5uGHycJUNn",
  "key30": "591RUztDvs3Wgpsd1yZncjeNgtfj1KuFKdAkF3PMfb215mx8qZN7mQdDe9XTB2ed7nyD78t3oWE66huPonUfvVpi",
  "key31": "3oVvCmKEof9zuvbDXJhN1RxuPBmMEcR3d3nn8tCVTN5SmX9qQK9bYvFKzfGtNQ5Y87SZ8TYPWS8quFEjCDDRTmFg",
  "key32": "5SBSexQ71G8HJWs3FBFitCrPXoHmZSvNrWSSNiVU2o6EQk4A6Fu5MRNw7JTeQS4abHUv4aJRd74niqZjAsY243vs",
  "key33": "3cJe1j3LBsxaaMMCMjuSkAonq3GiPfhsP57CGXiy1ULKDC6syYdgmfPVgEdNJBmKHXZ4PPKzGBqFu82cLst3jKUQ",
  "key34": "4JvQxA5yArVR27jQbBcxjMZHCsTcqadzH6izeYGN5w6Aq1y4tLRY4EMxnrh55HAhAceRmAm9GWbDLxabvJUWyQqK",
  "key35": "3DnQg4SH8C3AKVvdhLWfmMVRCG9Xqj6GrrtzYhWhuywMqKNJCWNmRNrhCAvNv3cidh9xvc1q4eNSKF96tMxPcZg3",
  "key36": "3xBz35VuiQGVhBBQPEggzak11CRXd3He3eSU6DMBQTs9qVageuMy279ERu3XczEWEdHue1yTMy6GyQsvSHgMjuu3",
  "key37": "4nrBDVxy3sQgBEuLN6CsPLcJFZD4mvshmBXBbTeTcQdCmMwJosYGL78qUPRwqQmKY2x6qrMGo9LqhLAeNzTyyBz1",
  "key38": "4oNyvQZP4fd5GmrQuoPNoQx4bvSB3QKg4cu2LXHTwWCnkudAi77DnSpCYhFyuxbgptubT6ecjM42kfp8GjEGt2jk",
  "key39": "5yuqrCTBoPR6i5CQPhMbqkV4hu2UNG2JaWvqx5catbMrktNQ6yW8VFR6Vqt1iV1aPpwuYZfY1tTFapYRDZybYjJ6",
  "key40": "4ecC7LpFXyKvWG2u1siHVLSJby6jiy5S3mdk8HcdPFXyNDp7FS7nmQXWmFp9mvM8JScjpfkYrjizT37px3oUZTMP",
  "key41": "3suuC8aaFdhRaYHwr6FBWRhC6W7MRniUF2MGEncEPz2jUAd1K3s28JE4ovJV6MgUk9Q46kAy4ekGvjkS8cLu3CBg",
  "key42": "3WmiU9A28NhUhdsE7z4kjL2uVdXW1QmVYn5oq8fnQg3WC63cRxbZTYaLxWPo7gWfQ71V8zuXXAhRum9JmY3kQbWq",
  "key43": "3QD9NjMDwCdd3RErvP1ZG3LbSZrbsPYnmvA4DJaYhpKLVGyEAvBKuRsSkWzh2K6VJnKs1KfahmdEWUmpVGpAX5iN",
  "key44": "4HXqKHhYnswnV6NouVyB16JTfn7kXJkzfzw5oHWeNmBxis5ZBjXKfjET3KDwcripfVCqPYPHEnDFLUDrMMxcyQSF",
  "key45": "5VV6NL11MnFyrXBoBQDDobubNaYRexJ8X6YmeM8C32K4Lq9wszTSUU125Frnu3UqucYX4MN9rppZeqtnKQNRAond",
  "key46": "KQNQVVvoc9P57NGJEHGdgHwtyCqPpBjF3ykMNG4u6kus1SDNX7DfChveRgy86uwYdHscgbMFdcwYwTnLDaEi4wf",
  "key47": "4Zr6rTVNQSJfRvtngZYUHfAXD7buxBHzFPhW9iQBB9RD3CFMcWszjCqZMCyssMjysdwcAp8eyYHmwu8cSGzkXkpm",
  "key48": "4UwTHSqUMpTkR9fnFFGdxtt1r6QjkowxdSNyS6QtKi99zRC9NwPQ7ocDYvnoZ3SQ2jse7Gtjf8qU1eQazDqiYwD8",
  "key49": "4Rengu9mBMusfZGNRbFzdT1Cu3uwSypKQUq1C8C6zyHiWDAqu3SJ1h6nTiEYMNYCDHwZtfKkvz5iGxSTNCrDMZ4i"
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
