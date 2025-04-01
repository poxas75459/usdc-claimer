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
    "3Wynrp8YcpPfkfujXRbRRxGyouakZCYPrYaAtyTP3sHmhTzHptkC4X9ZaJSuutPhZzJqLz5GHndGEjXqA3BpxXGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M25Updo8KkJPPCnDiyi1FMkBu4CVrG5mch6BtPQc2tfugqeXE7NZ7boffjyNt8xYtBweGXXQVHsc4xHcFnrByuN",
  "key1": "3KcC2SAdFKPAKBk9dkM2DfekgM82U9m1XNKmZu8CrHYFEHT3fVjT3HpWVYXoPxcyKricxZL4bnzpTZ1YKKreXBge",
  "key2": "2uS7WBtCX8DEUotQm68GrpueEyXip71bjFKgVD3rG213VtKWS7GyVxDJjh3KZs6CS1VN9R1wWEnsxpvSoPb1g4hN",
  "key3": "4MsoD5KjwVRaNob6aDapr9CokbCKuQBw6fPTqcm4nkWqGP6A4B1Z9rtdBGr3TbsLy9j3QN3sqK39nH64Pdet5SUb",
  "key4": "33zUtnpS7j4TurT8XRUNzE1ARXrs7BQvXV4P8U9BrWJPCdunVqjx9LTRdWCZWasbANDGTtWUxRaCPinnyoGxAVji",
  "key5": "5kad2bjDQDxybD2uCyVGnurJz1QGMaVmyfRgAi5re6SByA1pQ1UKYg1n7DFZvEdzD8Lmy8LZoGJhUgAbz4G87Sd8",
  "key6": "29ctUeZmE2CqfHNtvtwhU3cgPwVF7aoRhUiTXFoAc1VbfPc4hbiqYo4LQ6foPqVxcqsWAFRvBkTuwmb4XkyxAbbm",
  "key7": "63YW2DDPUZxKNufvTYV3NqNMfDLjo5LUHYkisa88S8yEVjviqHD6P4Q8BMTGR5H2TejLUoJct4coWF4HPK4oj2wZ",
  "key8": "5NTguWGmWYMzwGTyZkWxYB9pYTXnUMwPRyYZoHoQsxKPXA8ocbpcmFrBtHFM5ZJCX5cu4YUQvtFEZkq3WVBATPbZ",
  "key9": "39ERF3hDA2Z57S5kVPdioMMRc7ypcJ78bVeRA5N8HZ6DCS4vkSGN9t5RheuGkw8RBq25fRchy5y1q8YapSVPLtDq",
  "key10": "65DsAsJ5KwMoJGrWwG1RoEg9Rkrmfrc3vBoPdy8eXBmgsvA9RSuT8YAkMft578bKmBFesLhzfAntk7rRFvXHT5C5",
  "key11": "2aze8T6C2ujRhKfSSJE6NT6h1jTjHTbMbmibyv3dbSTbdDX6oTLGLYiPfVsU9SKmUjDBCRWsAbmUbEHSuSGpgfK1",
  "key12": "4LFh5gc2NBb22eZ8zbLUjmENth7j3Bcbhx9dEo6JXu7563Di6rvrLbGyHAEuaRQpCufn3dXrFthUnd3ypWU2g6Yp",
  "key13": "5bAWnCPZYgCiooLGtAAhqC3rQY1uTSTphuqeSDwLSqQrhJPbsM4KT9CLhBYYsj65iLdzXf4Wz97vM4E1NfU2uvAw",
  "key14": "BsUp3pfe99BpF9c1oo8LPtCDrTvvWn1vCUQ7DUTnPFF63PV7AGv3jpRqyYConeubavYKbWRCefgstETC24jAGE4",
  "key15": "4KsGRQcqipeSPcr1Ku67XvBRyz26r4AjRkRQSomqZEHcjRBryVQsrX5NvMiDasp87NzsjNXtZZryYtDG7JZeFXeu",
  "key16": "qs5SYfGviGSDiqsnbDNbLoZ7EMpkYuPYeRxzRWzEEwqToELG31Ad4uhrZbskCt1wHXBwpAnAjnXu3bWVBSEHXTg",
  "key17": "3SGSEkp95oP7pRJDUzyGwi2NkbQX9fvkUkN75QabRGPT4KHLRNtYBXnjm81yF76yonK52uFcqSTemxDaNgZYcszK",
  "key18": "4zwrvMTkDKz1PyEuJkfmGHVKghsb56aumeSRUgpoki9mUtvGqUtTcwJCHbhmvsizYPry6Kzk74WvodLX1fjmyD14",
  "key19": "39wfCTYFwfqzmikgNYZDVHkpQrePCohKiy26jtCb1p6HPR9Z8x9eipLAhHuKMN8baioQ6Na3gQiaULaLur5Q4a8M",
  "key20": "5N7o5AQEY4DtL5cSDzBRaeUcM2XJiKDHvbZtL6DuuhhLgosts2RPWAPdxWhgsWXcyuxL7wxqSh4v8xVaNmiJRpcZ",
  "key21": "5kzZt49L7nhyfav8xJQyebkvcyrXvRS8aVuFEcj2M11zfJjH9jqtJLjzDoikd7G2DATPhxXYVzgkmnSBaM4Q3KQJ",
  "key22": "4BZcUR1NG1j7Kd8J63zKSawpRuA4kR2fK2NNgYMdnvntcSsmN3zT2SMDk46bJ4MdksjdaAGywmFSSzwpQBBPKftU",
  "key23": "3Cy7NsbtCwjpQazNMN1xxsT394frhKiTiN4dd2kMCT6UQbeRoGENWQFKs8ws7ogF5NeVYRh8CQ2bc3GapHHsmCxs",
  "key24": "4UwpPANe8xk8b6TsHjeuqcnrzQJJGLao4tYbU82qeZ2ypZAB9afiShufJBZses2YcX9dnSoo6j72VbHXbAS39fAT",
  "key25": "57YXznfRgqdTS1kFDAUfDE4x1Nzt3ZXRhn8XpemuP7MzuMkKbpTwppfHhEg28EnGn3jDFGxcCVoJUdLKT76YutBz",
  "key26": "24Zue5W9csxRcwMaFtAhbC4wuPoW1fD474TGqXFhHcgLKf2drZ6cTLNaxk2i8U4JtbzsJwfozU3YT2Ks4tqpuKDo",
  "key27": "5yCis2TbMAsrTy34pXaiUxCceiDqGsU8YLm5ZRm5Ee7NqVQGL1yQvLum1PjLSc2dUXjdYHyLnz8Y7LbSmwQQ6kvC",
  "key28": "3PVC8UZZ8EZkprEeVrQQE8dUC3bVwv8tH71NVo7HicV6MjYVWUB1CH8sDMw66jJh3i4PZuuCPR99Sg1Z41WcLsWk",
  "key29": "2mRqCQEVfH9wKNvizq67Rox3c8qwnoxpYXkPFVSgtjPHUcXYB7T1CwpauLbQqRzknZqx1ZUt452mN6mV6bsgNWwK",
  "key30": "5aSSxvkMEsZrhgQK98i8hPE1jcDS4bTYWj7BPgMrqe9CPiRmbbEzLDgTfDpNF3tJ4JzwPrKfXDZL3F4yBMpU6f7E",
  "key31": "2QTPeWEFvgKoAdBhN8RBqZC37gCFegVAPyP1kTxkvSpXZzR6ZhDMznJiqSVmhkFEZFfgYmztrEZenLP4aDXRqVEN",
  "key32": "3Cj2KNQDo5eRR2UyRVNQtHfgoobjq8P9VmUXjQEKdATwPN9SHvWBxVgYoBfWXSPPYqyjx5oR39PxRVT9PYqGcWpG",
  "key33": "358cuT1M921bz57LERL3SdGBPDB61oeNB2g43SiEGbXD2dKJuLsKMCXwiEqm9svszhnsB2YxSapDVJzNUfxq3qaE",
  "key34": "2rg7EsfkYivozdrpQcErKRFD7u7BSYv62rXNmBwjQs6MqzUUSVWdBcfSyorkepK9StxrjWmiFikqfb5gfvhUV5CV",
  "key35": "5oouUXKpiCmfZHSTL7QREQcQGFZ4kwLEaG6zw8KXvRWadf476mXMGmWGCzVeHAfDsUvKMrwY3MPczo5jcezHChhE",
  "key36": "3D4RembqWEzmnFY6gQFDvbbe9VTS76aQrYUHTSRAbMetc3sJF1ENaAnEvFkRZDyvbW9afFry7VKFNK1nJa8XA2rA",
  "key37": "WPgxaFFU14LaBbqvEG7wYX63gAcjnSCi5TsDeZBEz2UxfrAdBaQBqYemBWNYSVGtj1WCT5edbPm887iqQw3V2UP",
  "key38": "34QoRudFih9DsSb267JuF6vxzKd4aGybz3gQ7FMK5DQ7QfgaCXrnLVKMP5xbLQprCYe1VqQbzxy2JAbbhYZfaqFb",
  "key39": "3npcH2PaGmUahSdBB2eim4ZWCzgFby6fwG5X3WtULXyWBTaUjknMwjWbwxTReEJA6Mio7V4dYynrrm58WWJ6wsBD",
  "key40": "5sMKiKwxvd82jAetpMdxkQTgAj3JRdyjCwYoJ29EGZqnFMFEY2YNCLm58iaB8kiya4XxiDpRxLCvpBR5Gfa9Q9wZ",
  "key41": "dvesXaq9ewNSqVkYL5WZLd17U1anT7dnjaKrYQQCS54Gi1ZDpACBrQYQfv4JYBBPVCMDQoax7N5cJ9usSivn5Eo",
  "key42": "63cVjJd5vSmQviJjbByqspiFW1tSrDtUA9Lt5igcMqPPopMAFbgrJntK5Z6BSLULyK2ibrtKPT8JUBQBg1SqHGYF"
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
