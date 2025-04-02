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
    "5QnMSnMWiwvMBTv35LUdm1dKcLMAZ5JiRThbkVACoj71Spv551f79XMAj3BhpzyLXXTAvXuuaVhm6xtpsZPdNLW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53bnDVuBMqjTPDvzrw6XbhZ3XeQ1VGkRYZV4BmqE3WVKpe4oibQbijeB6geZCV5m3qeJkhWTxnRH6N23AVgPPLgU",
  "key1": "67R1ui4tbLwo2h2BVTg7WcnG2XM9ADzhjLWqBk4EJLgLaiaN9sdcc7Hkpjf8Csaobb97nJLZ2Lo9eMMM2DRvnVFA",
  "key2": "2AZ8tU8R12riFPDU31jWVj2y5De4zA6FQAnqdbJCXx3zu6MDu4DuFCdQdUPcywsK8k8vY48KEewoxXx7MHGipJ1u",
  "key3": "4MBGpwKpT8hsJgJqmGxeTL1phWvbXpYctb8L2pMyTXsRSsxjt57SYUwnVmme55h1R1LgPAn4VxkbCrjSKbotUS85",
  "key4": "G2cayUJdBMRzkAiEkmvhwseB5UcS1KyH8r4Qk6rajSV9Xuptt5GUfi29i1ydyyeYUAWwjv85VU8YsZHJSE1Wavj",
  "key5": "r6MdDWpV1K99FD55bjgSr99FDGQRqPiSgnZsCsqLLDh9FtuSscomiU4G1FjMJJFxMJ1ArzBgT5PWsiUQ2FZciwR",
  "key6": "4AzXEbv45xSqHr5EnD85DG3h4x8noGzLysnawT2gD8g8togVmaWjRv651N2fopMaEBfXT6Chej7YxZMqDsxsdjxY",
  "key7": "5UTUFrPChE8Y6e1vDuYFPmiGzaFpVtF62jmmXkDsMqpXQpfSge5Z7FybJjPYxJvMZzPntjmnEEDWyzCJVvi55pbm",
  "key8": "2XbZ1pJAdUMUDFA8wbPtPtSb6mXBwjsoniUJ6CUed4iF1iN4gcDtCYGj4CwjxrkCVgvoR2eN5PZcwcqoUXoQSw8w",
  "key9": "5oVgcVY21mw282QArTTZBvHjToUydUE8HnUKA6osZ5knqYZCG419jwvCvqYzgBxE7yS4WyNXYUTtZZx2LbFioYK6",
  "key10": "5nso5eFgPK7e613uY9FgUMvFsRH2nMmUfdtZPdhDCN8oobWeQSRwqSEPKdF6MkjrRd7CovwL2Bty5daXgkZcQXfv",
  "key11": "4yiqjdnUtMMWz3ww8HBRn2eZF2q3Gv5EMwkVJtCyKpUcnm28YGaVTUZ9LDm9BJdPVeje53UyB73yxPGVtGZ1rt33",
  "key12": "Zdyh2vyiBa6BaYDxLMZk1p41hke9dzi9zGkHxpffWzw9EcrAswjikXHUrDHXbUGp2NCNcFg8NpGGedhgD9h1zr1",
  "key13": "5UVeeh2a4MxXVJEusxyXGZ5m1ZpNcnZkwUo2sko5obwks7DAkdg1NuzbHpC3XCnzsXHPDkshBWeWjhv264soUzsZ",
  "key14": "3JwzR2dujJ4sTcWaSg9KiU5R4qyKXcmSVHTfLsBhxTnzf22j6ZJNZHwj8SaDyv7J1tGGYpTaedpg7tcfVn5giEKb",
  "key15": "4pFtr5hfeYQfSGz2FyYf8252VzNjbqL3wUn474MA1zyfWtRCXLvbaT3cRv9nzvYut1jJnbRXX1ZjhSkSgsZ2peC4",
  "key16": "56ejcWyk6ghs7FWjPuEQpXKjzpksiDtnnSdmzgDZ1mrXEStgWD2GStjHNPhfCRC663sg9HUcCCNXSPW6KpQme4h5",
  "key17": "rhfACdjC7HbpQUBPeUFbzvV3eruGwj7NF3X68EEnYzT6CYRofJx3qbdU2Wr1oUmV7D1CCRcGsztAJEWWCFYjQ5Q",
  "key18": "5YNQgTrog87fpRMnArmyc3ML8L8RrjMe2LQAdRjBzkN56SDSubzshUEXSfpmSZiTBpF3dN62MdA4GGjQ4pZsWjHa",
  "key19": "4Wgg5kpx5Pz78SRzTJYT1WXAbrWgwjQH9Rd2RXEQHr7a9VXRGp2y2YzoH4o112Q74ahKPHV2ok5Yeymw6W12E8qe",
  "key20": "fMDhoiTW8jZ8sT5hJdkCjRupxvZ7aKmdmyjscCZHeqGvJwWVjMD5HbHiPfnr3CTNo718f6TXbzqGJGFbU75QmGS",
  "key21": "4wH8qKqkMnP3RkfxUeS1vvuTmDb77UyvAca4YwBnB5FCmKx1ZR2Av4VP1dkVHnhD89SxkL5kgEpDQhrqeGmjKeHQ",
  "key22": "4t2sfvBUs4zrsANJ57YgH38JN8YxDf8hQKj3NtExUNkeJRpzZap6oKMCGKoQza9DxUnUjprG6i769NzMoA79pYYC",
  "key23": "4jU8sFP4ePVZBv2KDgubEaaPRFrQcKhhLw2JMgAensupPw2MjSJFVbdECGi7hJiU1tKLe8x65HQxApofvtYh6RFn",
  "key24": "5CB2Nqw82BvGQbQtsd3e8fhF15NmHWwZUfajwLVeh7YVtHJv7NZ19rFg4P1kUtHeUBhn92hy7whatND51MaApwXD",
  "key25": "UEwzCL1xNjbfEUrCJyRqMKedmNmo9ZakbBiChYxRiANXjuHB8NkvVwUdr8gpqmW4CXPAGMKJz1CBRPvSL8UbQY2",
  "key26": "5xUQKhhcX3U6FXXVwSdq4wCLD5DLQisfqLKYpmt4xzqCUkDoHr8br6rhQzQrEkU3u9ziizxWygW4ymBqNXhbCako",
  "key27": "2TWUFV5tTPR52uKQXWdqP4SiBZAukd9b1z9fUtAWDtgzYgXUtko8QZpQ45X5RauQDyTG4Pu2qbxAjgbQRjdSFnEu",
  "key28": "56LETe1Hrgrs5UYGDdX6N9sXzH7TSrV9fdewvcW5MzjsRKMXSxKXEJvreZo4jfztqLV2nSXmr5GaneUyVNFj1WYw",
  "key29": "45AGm1fPZR4kUMMtGETQTrxTmqHmKpk675HvMkHU8ctvfdKJgFa41V2rb4j5JsVAEDYmaDLYnuY6324USTpBPhUC",
  "key30": "5bvfsfJ1ALY6bcwBj57J2G8UcJX2f5979w3EWJ6vpAhnxGrFtRK5ADSWnVtVSrjdM2DCHDww4YggJGqNuZAbkuEt",
  "key31": "5FYnZqYJfpAke7o8mCQALNMXRbSzXMAan54boPeGUmHn2kWyDsvkV9RwS7jV8JYH4kuGuukP1VUbu5n9H8W5aCRw",
  "key32": "5esSMuAiouuT56ePZSNtiDVcCDVw6bcGAeQaUFo3CnVnHapxckMNNM6zXkr3kDP4Xuj7VjeLvxcDzThvMyfr8GWW",
  "key33": "5zQvqj9PeV4kQKrmLXeYZunExbCUCmW9Uhtvp4iKTP1jtqpvMGgUma927BFGfLxtCPub2438uayByTbYU2qcA54n",
  "key34": "42UM3RgEsP4R7Reri5U5C79wHLHmCZBcwPyeYy9C8zZYVDaQ1BnmWQwLSiFJNEtUmUqwwpwkXj8cCpaC9caRvBZu",
  "key35": "3huDfPeuafsFWP1VgwjAajGTMApAe8eDSmcixLeyR5Y659AkXuuVa8TKErnHsFG4sCxedU4FhBmE7Yc23BUPL1rp",
  "key36": "2BDFqd4AhW1fhmeQ1E6BdWZ7h6LB8wi8XEX8RUSsYW6pWr2bn29YSQQvqQWSyi3QirjDZQzB9P1LQs9jKuujpnnK",
  "key37": "2v6mGRhvo5wTFRgdi9FF6L34tmsC6kyh1ATeeBfmpEx5inT18yYymTFh3e4BMs6ZpG853koHB2cwdKJAdWNJH9Ks",
  "key38": "2YjW6SjasYHXZPUaBceG8avEgGyHD5TSthMVmZhRGxDA48oFqScenV7hmRhQjMauGYJ5zZ4uEwu3Na9rnrQqso17"
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
