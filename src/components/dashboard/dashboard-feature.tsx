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
    "4geiasc63rzUk5zmPoHDBX7czJ4HAQWdqmWtKh3i4zssw36FCNvca2HVD4HFikvn1au1LNoXYoJmi4AuS33sJqFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598YmFYkUnZra5toEJFymgNMswNGZHmWLxSBKfWnsEnsh3RVNmPFxD9bS656yBozzMs2pJv9pS971Fj1vCe2WGGw",
  "key1": "5GjhYgE8z2uWBQgRPvDaEYqdDzQAb5YGHFQ6vMiWWKPxEsS4dKVeKZZJgSsdHvGffAbcBh5phmfAwnUzvEpE9MAM",
  "key2": "4ybYPkgyWZyKFumTutDsQp8dLs4RHTJmdeeyVvW73ScKtXX4eo4MmFNJNanmjR3QcwtsfnjaW5HTwBmpNeV5NmnL",
  "key3": "3fA8hXH9yL6V1DJFBKxGajkWf3UhZBbH4MT3VbSqN6PUrLTgpkDvCG2rmUv3QnHSHHwxd9SJtqnZEQLJ6eHZRWNi",
  "key4": "4pEt9SQq6HT9SoJeV8DsQvmTEj9Z5YdjtXHmuGFjjtWTnckkw8MsnXseeocSE9upHFwg76XuKdWFMCDXFiJYmVmC",
  "key5": "5gg4V8tTmCCa2DFvQsAq6ybQjqyDqh5wRHYRCNPXXS6PF8kfbgkDTnkM9H5bri4sF879EMrvxBVPVVfZYLuqoyD7",
  "key6": "3u3KPEQzVgBgEM4KgKvy7Ew8T6SJcbof4AT74Gu4Q2vXEEghDAZ33iH1AtBQ1ZXemqzgNbsneQukePt76v5XAwSP",
  "key7": "3j2ZTGqGh5FiQBxMtoaM6QLuiXbpXkzH3sqhgZtdYoJBjoKy2fiCDga7PUb5zagrsof7Yjx8Te12qob8sPiJPBvh",
  "key8": "5MWC4PMjBkHag9VV9W5EzQC8tVdFBXsjuFMg79nSLS6BwcEWhbNBETzWiWQ5hC9C9qVWK8RUNU4hbPi5SeSwsgUo",
  "key9": "4Xh2ATXEaLmaTzMaijMXdFToYszL2bzvxvYbYW5r38f4LNTAdrPXm3XYRfXHiXJCaBzcrUU3Rdv5MAfaV5TadSur",
  "key10": "3ko1J5SftTQpGfGG8hQfs3FKEEP2qy7atsNhHNYRd53xd9QaJNn72c9kAqjYPrarct79XjzRckp3B1WzoScVHrTD",
  "key11": "3dtBxtLoiiXspC41gCkBmbaX5NdeRN5rtfcoePWpbXnqKd67QSuDi4CYntCcgLkt1o2cAaaPP94SnHhDyCEPFtmA",
  "key12": "5qVy8YbTcYsuFMWvqLZjiGji7sTfBAVtQyJjwAmF4K8c2gfertPnSm4UX2UvK2XGzu9nRUo9crDdA1GihZPkUzXD",
  "key13": "2BVQLWjGXGMGa6VKrHeMDhHBpDoRC8szcJpRtUCZQh8Yj65qANpPPRXshq3hQcYtnevvXP95VEZY4qCepfQWQFyn",
  "key14": "43owY3iXvgr1hx3uruqNsGsyrXQHLfXhvs3fxtRYQfHWzJLVfggCAEJbxrCnLouxquL45sumeoWJ6usjtfQ6JVfd",
  "key15": "8bbHR9hCk9DAWVKSHF2uPtJLgqhWNtrd3vrkD7jKBSMCfbMEsMr7WNS1oZSu4ksJVXz6C57mXWhSm5USAeYbuub",
  "key16": "44LswYa6icJ7XRRRFFjiZ1c9oPwCM334dtshxeayo3vASRktDHiaF5txJYW69q1rM7JbpB38Pw1Qyk1j5iQW6U4g",
  "key17": "5vdhBCLSRpy5dTAKoaktYqQDExGmDykL2G42YhC5ym3UK1zNzSty91ax7JKAS6CeCZMu3t2mqZjpn2pDEgANa1Bq",
  "key18": "67E8xE98fBjGSgCvE1nCK5GBks36NSg6nnki7ucjkdjDRmyXjccUQ8DWQwHpk9eFEiciyS4uzjBMPXq2vMKdwMdy",
  "key19": "2Rcs8AsQ2wcV4cmizLHZKTn5dvoT5reYiyJYvDcT3Yfp1t7LmbBHFWTkXk77sgjEEdydGoxQBUMPfowujAWwoL6J",
  "key20": "2wHp7KWnp5VpwjNucQ2QVDMbTawFhMKpJeuqnozuu77ak34vsSNm91SEqEV8Y1bd2WaGfJg7iG6ZMR742h8Pn4Cr",
  "key21": "5zzBked94tbymumm3qgB2UQFi5sejqyh3F3brZUQ5bnGZA6zZS6YTNP2Zc6sYEvjociXBNf6ktZWuUantPMH6MUV",
  "key22": "4gMUm4ixqXmeU8Sr2gcNbSLHAodPQJVAGmkiHS5gSdMdHqGrGiESjaNbVPhTdwcYHPmPsfNdaubGdif8363sH56w",
  "key23": "2beVqApRfp8GtPGJX647x3KVLYMPf6i4Jxa3hioQnaq9YRfvBTyMhSud9oXQCzeBbWdRqnrxBWGSF3BE8onFtPKV",
  "key24": "2MP45XFDQTDB3dqxQEFUuTeuNbb4rfBHNc93ZXEMCjGVBXitauKYJgiJPKry2kQRax8vVp6an7KPqBSmHBJoDMet",
  "key25": "3mUuCuRoj3e2c7p5zqkmqigydz1pNNxEaBfNgW4LNM3T4E6oysVRB6yn77G2eXUSbop8EhkeqRqdQq2Cc9gKosTK",
  "key26": "58XS9LGH9eoLYb5R3asVCaRcGmPr8bbdDcAtYwhYk4HMuS8ESwJd2jRbeAE5UqYb7WXwymRC6hzMFEc52PRFxCYW",
  "key27": "32GsAtSFvtCQTBn9VmcDeZDtNnMq763kbRF8cFVk1mYHepJpC5fevrVtfU28FEVME1d1xvSUpffktcKgtBfSCiF1",
  "key28": "4VLtwheZL21PnSFMKo1Da1HrL4Sx8xPktcvgESBbVTtBXNZpEFbntSTKZJoszQq5jWK7icgdAU9PWjB7V5tY5YTJ",
  "key29": "3YkB1YcTXXzDZv8uSr5zyTKmP584E3u8KhjbwHb9NvmR3w4K7S5T8sRzBd1F7E61EsVS4aFAv86VaqsmXB4Yx2KE",
  "key30": "4225TQboMGpS47EhV3ZLmSatGDZ3Vgg26mydjLeZE3tahYVCKfEcZbFjSERTtcEtkxg9WZtzTujKX8Evt8Wnmhqr",
  "key31": "4DmE4fCAHbuxxVvQSdJKuGPvS53ivtrXbNvLQHXN3cDM7hnb5YiDb9DXYyqJnsvmjKJfesBtA2nMTDUXBMJfKnxd",
  "key32": "7rw1YCmEvpeJgpTnrvYiGnBRYRXw1gBbdMhXr1NZyWzXD8zETCtrVo2Lv5ix3Acs3SL2X6Gt6QiVVpAzLzzfvrP",
  "key33": "4CAALCRo5eSoq31GDEPNPUpSdDnZmPF8nCUSsqa7Bcw9yai25cGJMdRHRmk2Zw1HuKnhVWK3s4ZXtybzGR7xqtsT",
  "key34": "xPpgTJMojdYBE7fKCkpgY8aYokceuHkaJS4YKxAeGBM1ZdfbKFgHmqVoTx6r7bgqs4B7WYpbcGZ25Pg9njfBnrR",
  "key35": "AtgQyahqTvgGaMawNsGe377DESxPvabZhcKkENU9wtsa9QHA5RNmNCoBjYPqk3mGLfYCoBNUBvAiEQGfwSWFJYb",
  "key36": "2xCzhSSqfgECykjPaWgYLDVLrJv6q3RCYXjs7dEjHzYUnX6tio45sHGBQrJgirPFDQsWFF6wkrVKVgAd3596NvXu",
  "key37": "41h1rnCDrchfmsgvJVXpwma691bkcuD1Z2ySkA7RJ8CRSmGDvoTdGpVaBNGADgvPNS9v8NJA5BV9TDLhyBaubnex",
  "key38": "5c9UNXZY8jQ33UagVYjZuycbEzMGDqQqSao2Et1Yjhmq15hCGCXacsHxzSjLzb6BJtETjgdAzmxgjr3dg3H1JmpG",
  "key39": "4JP3BkmdJP9JTMbfG6WGHfsGjHahWZV24eiyiaQuhWHUT1Yqy8TqgQom8nbcyEp4mHnUFcHR58FrH8wYq8TL2kkj",
  "key40": "5NdZDq7qMru6eEjYNnvSA3hmLTQNXWTws2W9EAmDxu592HanZjjjnu8t3LV9XGkBEXbi2ANqfdsjCT4LpEJpkETH",
  "key41": "MNbUwJSw6dHgcdAKnUdoe1xms14gPQKxczUULzgxYjp5FmuWyJJCPHcBpuhLnATfET4vUGzdEAqaQHEgqVLrCqx",
  "key42": "2w9XRyPr4pzwvasSAcRo1argGZoAyqeDGBF4RLVV8ZpGGmEHA436i7uF9ECbujDeDj3XnKaiNEtjb7GuGdS1BLeg",
  "key43": "65frHWrrxU4VHAhhY2b4DVe5Sj9NDDxHfa2bpiJgkSTxrgUph55SLutiNgFHMDPshiaCmjDbnk72jTqyEeKPLvhG",
  "key44": "5yhca567aySyaftjoXacWdfvCf1BfBYqbaLtGn32djNQXFhocGQPKSb1i4pHJ5m3m8P5f8Ln4mB8zmuw6aEpgQDg"
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
