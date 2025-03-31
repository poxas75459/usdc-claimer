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
    "53vobDCqTGA3jNC2tD1xMD2wHBA1k4YNTyqyvvEvQvgRaNAPfjhCDLmZkdvPcFMWMLkvimg19dMk285tYxZjFNtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdAY8x4NFtWjKjkyxzJby6mymr3Mbb2DZfTzKFjJuCL8emwUgMTidFKpPgeJFreQwtCrvaifyvJZ2VrQZg2g7fr",
  "key1": "61jJudQxd1P89CosSrML2o4vwGCYKDWfcxByfCDD9Bgcx5PUScikFr3p22M8JYAncLMPsggqBwj9SxvhS3UTMPAp",
  "key2": "3tLZkQtNGiWDGEBbJiV6N8YLxNKHBFQjbGiAkTf49RjXeGMGhQ4qG3ZqEyi5n37hcB5zcU1rH6pTG6HA4FBBhM6V",
  "key3": "4ewYGabfzuFdZXYakTwjZpd79CAASizbRYDebpKbsMz7wYf9P3FUu5oS9Y9CYBbaFGWLv8KuN4eoaMGbHPGSS1NP",
  "key4": "4BbXrJnjw5xe5a2bUygKzh8gV2TPduChMupczfviXumgyiHoxS5DjrwBvE3DLJs4VHS1D73vKQ1iyCHjdYiA2PA8",
  "key5": "4YGwEddbbdGJ8jJP8KPXbaV3wDEeCWpkw4iehcUXngywz7yoDAy6YkxcVPa7gDWRNXDmbocyQLXxfjNcMDeCtsZj",
  "key6": "2xpmEkJisHSk468AcJN1ALDPhBJHAHNWfEUht3S9GVTYYEZTCTL8nJyZad7egrqp568spBoYk8iXeKhaF9gUhiBP",
  "key7": "dMzmTwhfTbD5rsL2o2ATSvX5KSVNVaZRJJGWGyURWA2Z1L3EgmnfboZdsDtYfWvZMV4G8bbmnUMjHbufvPkz8rd",
  "key8": "4jbUeBTbzPSVYCg3XgS49H3VAA8eaR2zCAga4tQwLHFvhLXRjkaudJgUxPipwfa1Pw711zbCYn1M3yPmq6gE1diY",
  "key9": "4t72cZDxioR4wQnBHsKFt7zAen9CGYERCRuvnXTU91xvnkWMMHWVGnN5jrnfwWBY6xGzXDg35X8NfQ8wD4KFrFj4",
  "key10": "4mz1vf571kaTemGmk8Qw8iSGmM84SuLUc3CAZi7CWP1YHguRS6cppL9a7urZYqYuK8trGEeuLPDRdpxkgigxaGmZ",
  "key11": "37hHh3g6Jz1m3nZP1RPSfwqfffpVXSfeRVYsC6c7gaeuFkavXegTKwV6DvdDzVEyuGAMd96duT7P3HW7Jg8sQYu9",
  "key12": "5YV8vJZjqPsMBzbEUWk9tFDN7U48SBvspTTzDFCKpcG1NJTEEKF8XXbzWiB6UAbeq3DSoFyo2CuyJFNeQAXHRxBP",
  "key13": "wKN8KshQCZSwPuhWbrsGaDkjUfFtTfA9heByjBbt7oEaWRBi7MnGRbEkXnBhPBYZC8boNRwNb5HRQBerG1odJ55",
  "key14": "oMwPn742jQ2jhsoowKPx3HyXQnCwt8PjkuPgiKw6j8tfkGrNboxvKimVfn1QNZuEyQSD5zvTxmsXtwAGfZXyT4L",
  "key15": "3tZKKWPTkVkfggtHw7iyyapfonqmGqVfMuf1gBX7QeKP5oi4iDf1LpkRpRxau8cNyiKCaNDcFycjuPgEsx1z7HLR",
  "key16": "31P8FPdsi3posGaEALi5Z7y8BLvWfkjjynaFTYuDZqCmaTyRoHePb8erAFDu6gVAsZmcntgqrstLE5A136kCkPt3",
  "key17": "3incu9URLQfYvBNTnAPau64eRqwqrza5skvhgXSF9tA7QEfJ3uA9rMfhTXq4C7Guq6mgtYbtroCKeyvApTnjxifP",
  "key18": "ExrZHbxLnruYSryixaBcqzou1bqUrN6g3SdZkHAynXvdKgmTiRQzXYYoeoN9aRXdm7JBhj2J5Zm69TwyyH4fhZz",
  "key19": "3v5ZCryGZik6amnu3hKrCShEPNuNwmBZ3ts7o16NgQng556b3QoAea7mfjxbVQHUx4iLMUuPuKWaYJ7fPVaM4eSf",
  "key20": "4fLG33V9nxJ66wyxqCXDQJHsxbQBHZYCZW5xqRwnLREWjfddGvwSZhRRB5qsvNVTkSW2V6JL8BNUzGVNSyxVgVy9",
  "key21": "5hYDGqTqxamiZUBgTCkmvQTcoUPuiop4hQmPUdutK14cUyCjWrRt4WHuYeCckuucPy2UTKcv9caMVca4hQWnRuSf",
  "key22": "39t3ybfEV5hVGMHMnFgk9GsZuNYJmDGyVRadHAqjfYc2ePQAm3eMopPWqb39TEAgotLt3yS2YPfAv46mNX688sQ",
  "key23": "Be7GP2Ku5cr9YCHtYjK8ZyjB7JEgsTbfPZC3y82EMqmDLdAJfFnbENbfKoGwXLutJwevfAiJ5imrTeQAufY5qFT",
  "key24": "4hNpHEwKyCjMYJUCxM3Jp2sqFzpvaBz8xrVD3HqvcxyegxXbeWZAhD5P5ukHcAvSF2atwdCgaaYEqdAVnQua4AkH",
  "key25": "4R7nNootZod12kccFAJCUxNbFw9TA9N2Rsa7Yo4kLwyGPL8oDsPSHpQau4NGgHJ6LDE2bgA4Xqubo9z2PZ8FC1UC",
  "key26": "2YEc9EziT7qBykYSFeaoZaWVTz2Rwxi4aQq1XosVfVTdnNo5JfDZUjRaito3Z1HvfiPVm2iB3nhXSrQNFZUrZjbF",
  "key27": "Qp4HUyjy9m4Ut6GtKynsCdhP7uSaYFHtCwfUsCBhyWR6Q9XF5iB14834KFnyuJYPN9jwYjAaL4mUhiFpZL6Ua7F",
  "key28": "5ZPdEa5ndyoGt2xnxMfbDBkRJubsYGGd2L15BG7ndvopznbUx1U3FoJjaiAXp6grtKGs4bxDcjkygs73C1TzJRR1",
  "key29": "5xXD8kYkKQKrXVasqN4XNZj2BXE5oyfwnVDWVCNHJBN5LfSRm8pDp1tYGcP2FFuhqd1cS6jked459U9mWYfuYy73",
  "key30": "4ihPKayDMm18biECP6ipcVCaygG1SL7rXou1E9m8KL4nreJhhQ38P3QX4gaNX2G3nZSc1rKnPVndwFxha63K4Khf",
  "key31": "2wDNDJoxD6xef4MCsn4fquABXC6oHm6D99yeeribSYjPJCREApDU2zqKMpSNb1AhBTBivfu6maNmZUEUepUmgerB",
  "key32": "5v6gA59SEwAw9rBzhPJZjiQ8WATvZX7sVLVoDj4Td9actD1MEkUgVkLcWNNEpSBDKPxHeTqMYfn4NUJ36P6ZL1it",
  "key33": "48Fq4y6cvD4SGj7N29wrpWwQ2zH9hmv2V4zVyPcCkmZynS8Gxk1YdEfmtdSDpk53BpgYqmVAZJpqAJ9PgZHqPoGF",
  "key34": "3j4Sz7nANULENeE2n8HvPs719if6qsz8Sr1o6T3F7QKNmqQFDLjQPSHDRu9QY9jTwva7YNvT8GmvXZHSydeyyhbT",
  "key35": "5ntyNDkpr81AjDP24A73jvGFnrfdGF2LUU9essHLydTgAgSDQZoUTrKxSiBeHxAhCPm7Aatq95JLKcjKTB5KHRsf",
  "key36": "4yccdx8Sou5CgeDW4KWN4u3TcU5C2s6sYqHhJAJ47UD1UKNaeTdA1cK6vJKjQNKzcjNrG8qK1Y9PDQE6m2YsD8Go",
  "key37": "tzRk9RPt8L85hY1CJ4jpBwPXKXqx15Kw9Gc33ANSPu4mWS184UAzAuHWMA4Ta2QPUDbRenY4mGcWxMs85exSC94",
  "key38": "2YD5Un5f1syAvMvAdaWffDrEZdeGkq8sC2uhvriqN1Yst88bqyPp4Q74juda81tjohUEqPzjdxikF5tu1G5D67pC"
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
