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
    "56EUKo2Fsi4QqG4G5fELYFAjaskeGQMv4AcxxwEAndSmrNuA73Yftj9caiXcyBNLqGDUJ6SGiTAYfjFjDcZdW9QN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LXhMCkehVc12eoQ5iyjYUAe6jaeJAebQZLVDq3rP3E2W9vME5qbXENeLe5ytnGiiXjuHDmm7pxpcga9m264p8t",
  "key1": "2sUHLf2229tqdbcLD6sEuLont7E9SFCYjUv3bopcqeZFHeiJDS1QzXLxsRhVg868gioosZfFMSK4YERVfcuMqqaR",
  "key2": "4QExeB713bEEohj27xUPR6GYb4AjGTL4BWTReSiFJsCyAKNgTLWQCXs5HGyJ3T3TbTSA5gA8Mw7tfKmFhnhiL9i6",
  "key3": "5vx6iykrw3UWmogXCFRvDpq2eXTrUeVC7s5XBGkRSGCkJWWLemzKKkMNFgopNvomYkWd1GeTADbqpceuKuVDiP9c",
  "key4": "4NJdzQV7ivtkXs86vf53TuwDWP3f4Dx6p6ZcWWSFh7zjw7BBn7g6gbix5kjjMh85h72TKLG55onFysjXssqE5vz7",
  "key5": "5kqGmNnYhgRoVvkcVKUEJbBc9itKhYQasoLP2ZQJa3BPhW44fXUHTUcSmnUGrQ9zvQTRAPTKBuxXN4VKZyspYjms",
  "key6": "5JU3X3V41M34MhNhUp9zbLtwP3WMU6NuW7npZ2SP2Di2wy1zuzX9ESNyCLcZvhwyJSUBuBPbEFWQ9B83nA7eiTr7",
  "key7": "4UWpU5Nt4axcMwWU6GJ9ymoTJcvr7iGyWcRZtCdCadTLHDCKpubhV1PcAfrDUNMpRTJh3nSMo1Airg7e2DkU2Lkv",
  "key8": "4PdzhjQZ1qv5BPWH3GKxhjHzc5b8u7CqMawd3j3bVg8A1Bsxu94pzXsx8Fdc4p3JD6iaTCNLafJLTaZUbUJ3TcUd",
  "key9": "5aWQoYpb8yuRTva8dLds4vJGeo6TtnetCkMXhDEtQG5BGZNSnkoHnYstRfL1hMLV6VaTbobhNvUsbYc1tPkQddCR",
  "key10": "4tCKH24AfoCGTFBeyHgkVFwhPAayidALkLyYU67K2axz5gRHXJ6GimcPbJjj9frXYPJVWrPVNRpHuq741M86FgXt",
  "key11": "3m2KR7hCq3suihDRNTCZsjbkFUKybXC82592rcN1hxNkapqWPUNbpzJXbTy9RuupZNXh9irPZHM5ksBXxAs1EcRP",
  "key12": "2KHYeVcVu1r5ZKRiYT1yJ5vHQg96eRg8PvaaxC7CMPZASwuYQZqDeKqPhPRrHoNnQg89cuiYzzBCe6xTTP8BSEZG",
  "key13": "4ZNhPmrkU88uxBWghzN9v6HncCoo1pcL8MkX2Dh23cLNfTWXdc59nARPHofBH51VNcAa58HXdmFo4N8LHgwkMnQ3",
  "key14": "3h91JrYLB2aVXCkibiuLGQpjdprpw6uvabPvEjEkfAt3Gh8negX64gxjeUUnxNwbmbfK67XLgnXLeexbDqpJJiJo",
  "key15": "2YbcjnYAyorWTGYwDXf5cfwcv6iPkxvph5zgTkjxk8TSqseNNh4dMyHurjV3DmrdCfgekYKvnwJeB5RkJzRJKUug",
  "key16": "5cvikNEuE31Jf5s7kGz9BxHYMzoy3dR2n4fktieyvSRWBmVkKRLSwPm4KpjZSKo7GMiZPnDkN2qoAFtNrFqnDh3j",
  "key17": "62UfAZUwfycPe8rucoEPFnGbM9T2sNMbxZPaN83oniRgg1t8Xq9HteN1qSdmfukQPQn6Eg8pTDkxgBNEHntco2n5",
  "key18": "61PZXDcZqGQ6h65EpB4qEX6eVLBrHbyk8MSmJHHv3X8xj7TrdwQkWwmESqzvULtdRYSfxz7hinDn2LmSUe6bx5Rp",
  "key19": "4wTdhyz5bQbNBmXJ9VJj3DY9ykoCKT9FFDhbiERKXSvd4CTt3frxik2X6Nm4zYkEP8skXKd8Y6uLwuFvVv6LkUWU",
  "key20": "62RrsZvZiuRCjtgoMxuUd8wXmwoCTREW613eZMfk3xxxeyqxzU9oMsLeg17reWYogMat6NtUbN5u1eGMnvmozzt8",
  "key21": "5pumwWDtFcTmbax2wivTpFDzHSWZut2YhZ51hgKVgTPYqF7mwC1WE6WwzNfCWwqsPgwJArzNQfLt876RGxwAACtx",
  "key22": "3gWssLLTZAeDP6zMDHzAWoUoej4zKbq5WysLDwC1ynvq1XwQgDHqwA25wZsKJaZqUrR5YcyEy4KrwZS6nLQgCn2K",
  "key23": "3ibWHBk1juySbeAoecYjukE4LSKAsXtpF7qF5d2ATwC5QPATX7igiXmiknt1QAR2ix6BWaBHDXztnp72qdvT8hEw",
  "key24": "5QPp9EedtCU3iNsKHURmvtrKDVGsnk9QNPDWhuKrMnEkfKG1PpnD2w9EpazVS8d7Em3GDhrEVZn7TwNeZwwVM8w5",
  "key25": "bMpptv79Wvf8MvXKA9W5JrEJStKmD77dZ7ZVFvoanAyyHczuTYf5dpcGVXRT1gvesDtX3kKqzkcG3ymp291s9vb",
  "key26": "C3XAgFbx6sES4GyXAa5gKfPMNAH6YQ35wNkVWK1quxWUD5H1r5h4UB6uSQwhCugsmSkX7ywP9YzDxdCmgu3CjxD",
  "key27": "4tbWkQ9hbbsFMp8Ws7j7TGwDX5tqu6zs656YNQrjm2WPj4Bvgts5R5p4GyUuTd2oYaHMTyE3jJisrk7j7F4wngSr",
  "key28": "yU7LZsaqHvKtXPbNKz9eQ72Ly3udoyK6GKyf6dRHnUEGcnEFz3AzPoqJ5VN8cYzPYUdZg9MBqGxDuhZRS4zZZWR",
  "key29": "4rFVxkDD1fR4qGdY1hsrG7pKwXqjPKMVde2dqmdDUCyTa4DKDaD9Yknghum2cCxSi8M7RV2t4xXhh7vga5TsKSiK",
  "key30": "3j7pVRL7y8sfA8ZfLV22S4kHg62LHpFJ4LsnHLsQAvAfBf7Y6EkAbtPoTcZ7yZ1cAAzKeJeqixEbbTDipSw1uuxg",
  "key31": "2McW7WW99c4n7DGVQficUdstiWmPLVjnGhsEGdgY3Eedm4kdLrPC4txAYN2ZnzRnVooCRvE6Uhpwf8FLXhaNDfF3",
  "key32": "57EpECC6uiJG7ARYZhmDavobvGNXGFy2bne7zgrhCrKSEnbDA6w8iAcTVWZRxodoSbWsNQbDh6nM9dKCAhZtoAsx",
  "key33": "5zxTwxLNAgd2KzDYAmLH4D5sWuKmX7sUNkdRyi2fdBxJeKh32LoPo4jp71kHBNGQEx2uUxfarCM5U6xijVqnrk81",
  "key34": "3Gwokqx7uBbXoctEBCkVNxT7yd2SykLnUgU4HMfKS4wsPAc5VwGoGYxGyFuF4URbavmqUs8RvvfGP4xCgaXCzR1W",
  "key35": "2GeggRefujonGEodJaM2VGEhrKUbn94bqi955nTYVDsVB7fNSG76DzAtTq9uRaAJoJMB8jTp4L4FijH68BGUJ2sM"
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
