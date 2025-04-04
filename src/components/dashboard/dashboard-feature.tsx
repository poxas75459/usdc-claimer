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
    "5piZqbJ2yjTQ6wxYgcSfyzyJq42SFEwtGsVxKqoyi21QEAEaQjRDncQMFEEMsL1JhuQnsrJ6eka4Hficz3ctupWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQb3rVC2CR3bftbkoYMmA6iNu5krFcpCAAedKRPShGYNaLKmgAoCh4pMAPBQNYsH2HW7CsdnTi8zsdXEyJYNZBb",
  "key1": "5LdaQKK6TUaW2qF2kfC3HPNo5GkxQ41LBvSMXAo7TgPSNXa352tgBm9b6SRMSTYpAS12E8ZJVPo4D2C8UhxrCkx9",
  "key2": "5C9PRatCsgrRHZTpCTzN9hUPu5jAL5qmado9LKFYWcKC3r2DQeshL9haPNvitrC2Y8SRG9dHD9jBkoXKRzpGFenp",
  "key3": "4zb1pzHWtn8cZ2p3tNMP798hY6r5gi8KVywQJbLvDfPBGuj5u3Lj1rsaiNqYzk4fT1XiGZC66EqQ91LsjUzn3a9H",
  "key4": "5VS2GWPqzqH3BVWoWtyKWYSdnG4Jvn7tFFWFLHmBMz6rTphZ95Azd6HsecZKj9M9XJsW26Rs2E67rvMgaUMd2apD",
  "key5": "wFNR2tTxDsXbAy7cwNYY8nhktiYZUv2eQEuABDE6DeCMYNNZmng7gm6oEkVcH8VNhrikQZiGCN43KCNg1HnhcTk",
  "key6": "JSg95CLTaCWiFqk1pqjf5Nr8U77NAe8Xaxj8WSFNfzMEewCPhDYUkxzEnvfvpstTQ1Me9fyYUAEJ1hayX9fuPHF",
  "key7": "29tT9Pu4kk3ENshGNuv3gBUJS8PV3ZrXMrk4YyrzhYZR4b5Dt41MNG5yRaZNQui3y1u1vwPTK7y9J565WGoLS1pH",
  "key8": "5htgVsEQUBCwEacZksAruVVMYddHVHmo9tUF4eoVLLgBLY8xJGqHU1BNVmnX4Lram7frePCB91AEML42qgezMw36",
  "key9": "5tVM4r5hSw57VCUgCSj2KiqsCVU6mkjaxjUb97P7KqE9Dy9CtV9kyr9LbAcf69eLzkz8oMJH1tMkeFNVKZAjom37",
  "key10": "2BQaAwFEUH9A5wyaMsSrVn4x8UHdvKcBVnHqLRhGH5XJr9NNxEymag7q9jJinXHFzsMd6VZz4SpMN1oU14PRUAyy",
  "key11": "2Y4e3H8HTmhUgHnniyn1acxWNFmwfLJ16pCvCFeMf6ifwkATMdq2CNi9opP95YHPZiboxNtXNGF4UYJh14TcxLxN",
  "key12": "4PAHShfhF8rCvKYFMjLBy5RnXs7VG1bmg1PgZEhwe3euXCR4mBVrtBBvYi2yDZG8CbGqfo6XeZ4Z1RimorkqDVpp",
  "key13": "4pyg5SWxyikqAAoXHD8XxaJRCWp12J1FNHHhkzZ8bpaiudR2yJPV6S699K7aQNxXR8iQ5fGZYHthPsF4CMfBpAEn",
  "key14": "3Pxhr7CJSsXef3KwHzxRt7MPy3JkKWJdarYFfEkNyr4dhkTNrUMWk1pvkDDemw1oXDBRFtMCcyG6SPsFZYjtugTf",
  "key15": "deGV6T9bdYMynByxsEXt8hHWV4br92W5YZDW1YQMfZwVNnb4XXRVfF3MUS9tZwsMBoUuUrevcsArSVjizWUk3a1",
  "key16": "qhnitXWZ1yZHWJV4bkQ79YDpLnniuiYiUKrn4C7q5eW5LceiVV4bwkxxYYT1FQphbbL8LXxboSWKfHvEsdCdGhH",
  "key17": "5SKCMfRuNPhGpvcWDuVswDB4e9h5mn1ZkK1cjhEfMmBnUwUuWoAdTg9WoP48Su6DBBWuN7T121hR8byXcBkQMMyS",
  "key18": "2oXJ2Miw6GLYY6ZmKJivZfFLhJrjSGGoeTtozzS7hbmNuEHYc1PWtUop7BjDFngj7HFZkZptgH4M9ABjhr72kC25",
  "key19": "4qQUWGK2CZ73zU1dJKMRVV999c5ydfkbnnnd9WJGMuR2pzUeMjGDH2L2nLog3TkkjKrz8LgLbT65BfGDUWUFnfZ1",
  "key20": "32txRJzDsX2LCAm98mS1AMXSoiv5vUZMop2MxKmgRiuo6DfemqHxz5dmvaT5xsnUF2ui4BTPnbDgbEAbwTygsbuv",
  "key21": "2nwKreirGq91zfeQpfZXCMPotMEdTAcF4R6b8bAvfN84KVfXPEWefg3sFh9kVUgSKzzGTDFfxd9bJeTzsGeUXNVK",
  "key22": "4zF4tNopVa56DWtjouHRT71GDbqN9kM7vTMoWzEvxWKgtvrbBT4yhpd7ZUxQCT5qJbGnJSn6Jcm1wz6EC4RDRbf2",
  "key23": "5dgzeHdkZk5PoL81vyx3G3NzRhoVGStFB3vgomdG1LMJusvweEWADcoTrfCT47PHFzeKwpV8WQT1gZCoj4Eoa4KW",
  "key24": "5yZAjthgVxs68bdL4LpXffQRGMP9RXzPCyTwehy3YJJb2YmgjeEDU7LeTrsjw7GW1NfcrCSQ1UyfGEJR92Tp4XM9",
  "key25": "u6W9HX2hayULBrN2Ds3tCVGjnRSMmhVmJZ3tGZCVjA8pxc6SYPADXvSYt45xEptTNDmHRU5WxpUDGsE9zafSuRt",
  "key26": "57ojE5efW2nqfV7itKkBELJbXpYWC4ToasbNE4RbDL3uwpPwgWAzr5HWQNZSGwWz9qeGG7feEPJBuJeA1JbWqmYx",
  "key27": "3pQ9nLru9J7LviysPXChKsdQkG1s4PVs8KdTELpBvAySnh2gJGnDWE6aeXtAvjBEZt2bPBjmsXVVCYTNMpMnfx1g",
  "key28": "45NEzK1hJr8m5tgXYPGkwEWivXW1RpykzZXjxYZzNp9qNfKwPJ3YaaUoKtWoGTiie2fi9rXxhV6t3Yg31jvdsP1q",
  "key29": "uBxYx8wWh17XriieTbVHoT6DvEuaJ9Z51QSQjvAeChYCcNRX9r47UEC3JC5SZvz3Dyh7iaviHGvnv2S2zLgS5NG",
  "key30": "5ma77Rj44EWQJyiJz7GhK7S4Vg5nF8WeWihKbNPfy3b5ZNubBXoC6DgetLbRxigi2xsHFGqLw5iKHVnm84wrt2hw",
  "key31": "3MYKhcmkJriUKNTdi1yPemzdU6BoZBvyVmwTZc9DLCJy2XL5tWgWQ3sMLYteCAsqvmdJsnJK5Sx8fEof5As1PPMh",
  "key32": "4UBqfgaerxp4MBf6Javnd8kAthESJu9ks1MU1Jfb7s2mtXBSN4DWp5GZ1qw9fYxao1LHWtjKF6g2ztUgd3Ra6Knn",
  "key33": "2nHPYQPdN7NaUB4zupng9TL215CMbBzUnaRgCN8G2ebZeqBanQRGiorDBaJ644N66JVfXde1oSjXsfAXdWHC2x79",
  "key34": "5Z8mkYFUzuTGv7UkgGnZ8ntP7ppmTaznNsWKkQXZaKfycwL1ueENwNbZMVcRQJC9pRNnRseznY1m8SBoEMm7ofAK"
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
