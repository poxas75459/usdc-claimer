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
    "4BsjHUrhcNxurG7Ce4meHFm5Yh3Na2imSwJVZDuwdAi6ka6RM21pXsvfLKesPEZBmFdKz8esitN9qSkg3GpSkdoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BcCdfkMaQLNFoFwco2xvyYQ1Pi6JCbunXhpYaAeGpK58UXABpqWZEVh9d62WXNx8Ky15qB2oLaccSFzKm4izyxm",
  "key1": "4SiWSyaifbWPtVATTgirJhiVbpUycx6Wt9J51NQFfnYCVgznwiWGsSQ44vbRoJU34ugaxWX7VQ6fJoQZJp5sbM2L",
  "key2": "46HpDyN9oEsEim9iPP3B7b3zyZ1gn3UPyWT3z8ynivVobcGQxaKZydohLPfeMRtDQVTUXyFtLFhz8yXCZPTp5N25",
  "key3": "QbbFNdR1rM8wERJDU6DWn656MojxSxbk3BgKFxPfyu4E2mTZnQMrhibiga89yuGM2B2ozu8RyqC9xNoHZZWt4Mk",
  "key4": "3E7mFDmebWA9KWZMpMjzr1JM19VT1GPXgAGrSCuUa4aisbYEmEYV2xsjqS35NfyD9wvdGtiXG8q5cBpVPrf4wvPU",
  "key5": "5etiASeqRb2qDiqs94U9EVg5U3P4ghw7EY48K4c1XprhSep3wfVfK2znvLAoFDy5psuMS5q7vsHDv9gBQLA5AceX",
  "key6": "2nc2KazLTfbC5281cQZFWgpXSYYEmhfT6Z6bvgMBiCCm5yuqxYni8uQB2d58FvVWirm5pWxed3gDaQ5wHpFSwog7",
  "key7": "3JPTyBFb6MKvhw3HhesrA28Tj9eeoqmjhcwqTndcvstvaYfdwVoQqei8tZeP88ArwhgwwQgsibx9SkkHRAhS5ExW",
  "key8": "U1tMsTe4Moq6iHeUCqijwvZ21ppHyBwmaSndAxbSw354xLmaBPwbEM1A8YxYDVSRzPVYV8KK3nH7uV4canPBzgg",
  "key9": "2hVNB3t7y4aKxQvqL9qh3e3WR39NBsyBmjveb5FBYnNYthqxbMwAqYvrBqDMry2tnH7n7qWdEogsXzsMGwqhMEJ5",
  "key10": "2BRgsGJHEqX1V5Ufx4qyWA4bHciP9s6ccbsHPaA9BoosDgena6WspgocJKkmf9E4diWcaGCAHNvpyxgirozEAn5d",
  "key11": "2a5i1BuRccECt55PG9E93CscLTRTK1dFZKtD53tj3tjWnhsvSDdLxGgWQs1ZPXtY8tzRxp3ZeYWGHFZxUSQHngdk",
  "key12": "5awSbJuH2cLzPvbTkhZesQVvz4P5NPfohM3gQVCxhXA9WB67RwzegpwUYvcsongqtJicphLen6AawWzDDRB69uhF",
  "key13": "4GysnTFqZWLaZRVtV5yFp6sdqnNMuZ6mxF5r5eWZxiF2RPW1gpxibG1A863PkemesmF7YjuMp5NYMjvWf6iwQx3A",
  "key14": "3d6GRJUbvKxBvaunat71Mi7BkwzUrmLNGnDKw22T8y8PXZXj2LAJ2MJQwLrrXBxgfgUNg3YwDegTCGUupXVk4VuU",
  "key15": "3KCAhBmMRGC4oScdxBiVYE7aiE9ecAJrWRnJWAmcicQSJx6ZcYFE4teREZKXHzvrHvuKBKfu73RsGpM51fiY2nJf",
  "key16": "4YKyDX2L3WVfUTfdAzaPVbBWUPmFDNp7DwRT5jJd9yfxqTvN1BnShmL48Frm7Pmp1795Rp3zbxghG1yL5Vqxg9rS",
  "key17": "nN995N87pVQ9PZfq4U6AsCS1GH5u4wg1acq8oHiSiQraFugf6NfiEKnMskEk3iEo77aCDBEEVhUKXqQyBL8t3mY",
  "key18": "3LmWDzwiRWUuxgBUDMfmCBvx25RC7KkhVeJ9DgQFedFrU3pe5MFWStAhDvz4px9YnvJyxA65VPGcj4d9QETUmStH",
  "key19": "2pRBNkXYNpwfKUdkxQZvtnBACMP5MrHsALRmYurd85h5kaKhYbs5VtrgVQ2TVyknjy9poMtqhhkoQt2g7teVzjBi",
  "key20": "3yo2kWQuSpYnJvRy1yqVqTr6iEFtKSKVXeRAm4xC5P5T94J7YnDVat9HgUQnhurbcZQ4vNhKRso4eX5WexoYYEhf",
  "key21": "5ZuBjjZyAAcRtZYb8sMsLMQVzoy68A22dDsoJw2JzJJ8pWegpB3mkHptKcV7K5rPaP4irpC9ruDBD91dW5XEHWQ8",
  "key22": "4BDuxpKwFVZu5btbKfvyQ1Z2dgt9sCVR5gxV7P3AmkcZQjkgGgSta82SPvwQ7TN5PEDwrcsqVPQrBXKoRzjogqG2",
  "key23": "fTVBpkkc4jHDT7wG7ujEqFgYkimFr7wiFwL7tjmxP7WZfbm9DV4d9K7JJzL2diSFR8oAWfZu9G8rqWGPZZJuJ4N",
  "key24": "A15YhK4Fe68DRwcCu6c2vEkHCa3co39WZDR6u9xMFab8ihkhf92E26MG6zrGTWYMzgmUUwKCNJBqf16svfqd8F7",
  "key25": "4hKsHsy525b2A3Sm1npRk5uuWAmtSapASZLka5trwgHs7yh9Bu8VNiwE3kwL4PrhX33akVZx4QayTmCsEgsNMaHW",
  "key26": "3tdAcU2yLNU6Qnqphyu266ZFMwFPecT6bTr5XUXC1qQEa4F3Up4z1AHYnSELDENAVcMraz1R5XFWhZaBm6ykdy62",
  "key27": "5sdr3oWVCCgsYZv5zoTsX1fkekgiH7tbrXAm3g6x2AqkTWkC4CzRCqxfqVNZj6JSXvGtNPPUSdsBiFL9Xq7qQbgn",
  "key28": "4ZRG6KPnD7ypdByK83NL6bhydFaw6Jm3c1MkFjEQEQWoyJhbUYryaEpNaaWAYKs2zRa6kQ7sFh92xJX28wMiFg1U",
  "key29": "5j7hzDmFcnkuPbTVTn9Jox3NcaTrGPPHcVDwgUrs7sA24PYoGUDLPN2MnQH2Wkm5jdGUH1ZFuHbJ88u6PEo4h7sE",
  "key30": "5RCQhTba8u16rPx7uuK1RHo3vx8XaZ3QcNMfPNQys5jiaKsv9G9pQfqP196aYCjAYc5RVy8Bd1Q3rDkKbe1L6nq2",
  "key31": "evV6exBUgFBvJqVJ2ia7gMTcSGYabiqBTgwT2faEAsNU3Lxi7XUh2sAgqL8d828SwSUiNCF4aAs7CeELoPybRcF",
  "key32": "53upEn9ALHbnjdLMizH6X9afvEwk8j8vG6DcAxPGsLkpH7UkJHr4s5oUrM3B88fwedicdqs9yBM3tUoUs7iVKE22",
  "key33": "5mgPppbdx4c5gndJzZzL5uWh4iEVwdNL4Xbb5BixYbHPcEcD2GaoGV6rYuXNCJVMo3ZweqPtDvzcVoA8m1PcWDUh",
  "key34": "4xJpX9Y2P1dFfxaNR6aPjcaf3i5BxpFSXTGpJktQpjnokCvryPJYgc4J2xHqZtocWgCcLaqR9bBWHCyQBfpETbd7",
  "key35": "5o3UuELS7nc7LfYLsFdorTWeTyKMsxY6NPZogXVt5dA5dee7XmqL8UCkdx6xnJk5vqrGa1K6xPF9owU8tHU7RTCH",
  "key36": "sZgSv2ZBUt1igJk6cfNSrHv7ZMt7ed5tA9gXKDmAzUbiaJhAfdEPnFKs2VKsHtBqwutsL7vop7UrLsbs5QYJBBt",
  "key37": "4DzczDrxVNGzeU1ScMUQm9nC2EZDL7RYrhj8SMSr3zvf1msd7LHtdxy8Nnnxz2ussSL87DMuFdpnuRQXncqGRsNQ",
  "key38": "46HKznGt6LXheJPVLh2F84h7rrvihaUyCzyRbQxZJVmRXj52AGDSsytHjnTT4Ps5TUfxtQCYSpzvEbGVpwxn5YPk",
  "key39": "3DawNAnrywEuy4wq5jUQyMaA3eBkGxKckdjkoaesJkpyovhZFCdueRYuxaNzYzzDLAmvzVdYuWyJKh2AVdced6fT",
  "key40": "2LEbfWW5GC1RANg4Bc74nPEiqAjXerSGBGtHzbqh6bgDpttj8MuEqG6W7V59HDK63Y3eZ6QJQ2ckRPGxMePgphit",
  "key41": "4YnDPJBQLymPBU7Msko3B2WyLjrWPS5rvNK7eWPRpjwQCrP2XaMBar9T9Xecd5XRGGGjr54mG8wESZ6Y6UwxUp7z",
  "key42": "3fZfcDTrYYYP1sct2jFEwTR67DqbFymNz35Xn4ZZqQdEzoL6HAPJub7b39c8p5DqCrR1DJNztQZ1S5ftvYnsh9Tf",
  "key43": "2YGJigxp1mu9PesF6hYJYqiTp8o8RFHXoo6oYpfuKwSBGQ33YAkENRNAVTyCVMYJe8FFkDW9p8ueNAKxytzsX7yg",
  "key44": "3ofye5GDnU9g9csnxtnUkioMpUw1kaDudx2oEtvZrHvpUBam6Cc3g4pEs7WteCTYCi9uoS6iwVZQ5QUF2zxhTthp",
  "key45": "2CJ5FGEYK8bYWXmqTxc2sngUaPAvXBmyHQEzd3RP7FWx8XdVcBRLEVnrwUQUQsL7DQfu8CAJ5RcghHGG2wYANWFf"
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
