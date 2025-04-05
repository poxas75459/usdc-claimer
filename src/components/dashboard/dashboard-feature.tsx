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
    "362rnXzcwtYcswW9ZDp657T1y8iWxWHJhpAqq76aEhbdAbyXkkF9fi4Xxd1PrJBcp6xhFhoNtxKW7s4FbwuzAn18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Z6Ui3s4SXjL2DZE4giXc3QFvzrUtK82RPi9MLnN5sHAntEFNeTwCDzaPYY6PcUaC9rBvJDvqJHNSTJFrfEwMfm",
  "key1": "4SjRsnQy988Ykd1FGruqWm7qZTRwv7HpmTvKF3JFUgSgsYd6UtzBMXeh1ViMVJ8zkGaknj7eHC2DQmz6GKmNoxSq",
  "key2": "21KjVgM6oanRN4ssCKnTUATLL1grWpT6kkmjybcsXVme52Z2z3B4HyonXvUgoBfTzKJjxnXwvkpj6DmibdJ5KHoK",
  "key3": "wnuA1ntvaWCp8tv7MYVvT98PquhZHPqcJuHSWZUFCKixsS1mr1FiJ3vCbbxY6FArbgtSEKts4HY2BvCN7coQ6VD",
  "key4": "3WZyuFtdFi49NQvmcphFR9a7g4DHvjWuYy8wPCA8hk3wQZFbdFW6pR2ZZ8adfL6kwbe9B6KU1aSXX6ibFECn1C1W",
  "key5": "3gRnrvHBdkAQ4ymtuBoyHZMZDAiGFrBQZEZgFW8DJeASkr8eM5rapWmsykGWzyKTGzoPf47qXTftMn2ftnonQDwK",
  "key6": "4VbMCR81XQmhjkZYt22q73QXCyeCEuGPces1oeKJWqZryU1EeVDn8R2RucdnXv532GgZKDHirjZ9TaceevyzMWRM",
  "key7": "5DEcSGyAanf1NLAjN8b3Gv3Kfd93tU3Kyy5UBaEMdXEFpjJ46ajVNWg2ZU4Q2NKPggufoMqwH6xSB65k1pkKgxD9",
  "key8": "5KDmEjiURefYgxEaWY2KeGk7EBBtxaYqMs7YUXGpnE1Ki3Kw9PxggFQoMTqnk989fkhshJcER7fGPTNYyUjMnGXU",
  "key9": "Jiw1YAhgPfdAkm8ykffihSw4JTguP2qDKsNPHLTic5rePmsnY7PdDi54Z7XfgHdnCKwqJ5xr8gs7sjXKu35QcWs",
  "key10": "4H8EkaYrjkXt9NnMoZejBAqGgwt9EoJm7TdKoVEuicWGWJYCyKYn1t8a9Sfz1roX2iXPTv3FYordcPF4GQEXAMLT",
  "key11": "4ujishuciRCdk7NRdfD593g4Ygj1hpXYD82uWDBuS8CjCiduPPzVwD3aRE2z9FePXsdDNMKjk9Hp1Ym9wwbMWRMV",
  "key12": "5ctoAkL23Fxmck6uCPLbu7cbgStfuvMjK5iJCoj9UF1JiD1E7m3WBasRK5cpCUXGjD8nVcL6S8hP4rDci5VXWTQE",
  "key13": "31464sxDgYJnE868QHJAdU69df4csbXPmGhWZh1UGathjPnwKFULG99Vew7HdGbtiMYhRZ2n5STT9wZ5Z3KBXbbo",
  "key14": "66yEL2QUtJNJeKUGxsmP84YNi9ggmPxNnuLJb8r1Z5vnziWanXZ4izRLJdvrYv1xSAWWMrsbvjTayMXWHrzvLKH8",
  "key15": "4AJzcbybPqjSuZhupfg5x9ZdEawQ9dE3Bp3N8UrnALCt9RkafYqPWYygXsM87oQ1ZzymYLgTsBBYNJtuAUNJjLud",
  "key16": "4rcx9NAfGnQRuUsdMT1u5dm56ZtGc2fypzKghWqkAKBMqbL9ZviU43G3VQQi7JUY9smuGc45yKc9fEc4KtUnFinH",
  "key17": "5JwnzrT9HGdpUkMmo7AELXfnFyaoQNCMahfF2k2hH7DfMnZP6of7us3tc6fTUPBayMfonUEG9Z1GWVhHewp9GUKi",
  "key18": "5o7TEduoxgBLJigcy6965MNWcofwPEjdxj7iL6PFH4A9pKww6jnDtL1hrb8nCvNosmaBRpHNUrFx5ztWTkFxE2mU",
  "key19": "BSjdZxosQo5wYvCRKUwkysWms442mUaWjjzoYY76hm84j6itBNocp3K67tsUEqwDd9KWFg3gqAQcxVYV5Rb79Wk",
  "key20": "3B63S27bd73sNiZjnq7hS6ptESNpPgsLAQSwJPcmMmpK6yTpPKiMFNqCxu8xTpZtd9dNneG4LZFYjpNKXdiEPWFD",
  "key21": "3zjPR4JEG6Y15BYVDVtuXSaNY7YqVseLrMEA6EDSyaazhmuHV4HPXX3AQZweKsY66C8mEZypZieGCwfTBeLWXjUf",
  "key22": "5oPixt68uUEbt9rb7YYdEciwJcWm2gu4Hb47NEesMDBZvuAbyrN9CYKE1f94DyY3gMmtNfQYcHnwcdhrwWsqbB98",
  "key23": "3f4CXYiC9ymnnvMS4cXLd1NMnZHCK7jwoL6qkW5Pmxt56xd5wbgRFfif7SofbLoAqvme5PAaHLayw43hRDvdTRmn",
  "key24": "4xCag64hB1x2UTpsnEEcNURUqw2sAH5FHA6938TnpCaUxRGfJ3JCo3uPCj7dkBJQgSf4a4G4vujnHCEYLxWnvWWB",
  "key25": "4j1Z4CfhEjTXWpr7kdP6PHyoH8FcgdhFzRgEG1Sti4d1UqrMgZREo2YzwNGWc9TWj3cEEreXAs31EzMPaiQygVVR",
  "key26": "51HVRMzpJXmCrcgF8ZFjxMe2EFxvjkTuuuFrVwGrSF3grsoxckAqwLfjwSUMhSigwXKYD1NumY2ZnrTedZay3bD",
  "key27": "544KYgYzojX2bcTRrU8t3QMBQ2oYQHTX97TmH6TCtW3Ng2GoL5wXbU2TwSycV4VZVjeBtmXYpQKi6xZasJZgawUV",
  "key28": "3dtDprmcpuHhuDBS9dM5JAxpgH1CyJr5nQDzvbQEjANSYsBxuhzz7W2LBcHJovbbkgUrKY6JM3Ew62yD4scfxcWi",
  "key29": "3anaX6JPKiG7j1JKGo6HNmDvP9b9sMQvzCSwuFgYNTfM98RjEHSrzXocKHNXc8HbXyvTFZePz9BhauL6hY188LXE",
  "key30": "5h7gJZwydkYNK46XvBcB1asS9pEUAeMD17tgz9zTAfJbmpSekGMf5sitKe5qEXnYwLQo6Rsf7L6Bixca5Uf19Bho",
  "key31": "3JagAtKRiXj2CGcrvw35sj5dghCG34Y2HbVXGk2ufNX8S7efP7njxUiG5kkJE5uhJtHkFJDP8JW1TuwiX9bgd625",
  "key32": "2x1vYatajxb5GGga92yNna2HczmFhFpEmm8EqoX5HfnGan2UwS2VGVXv42jedSFxKZDpU32twUTUapwWh6zxS1r3",
  "key33": "UbgbnVvYJZDUgmKUc46Fg9GUsM6koej1MU2zs2cexGZAdrKBNg2ahKz5LL23jDEzKetRj6ZzTLr2X9ZtMsv8nuP",
  "key34": "XMXxF6xvKmURcmPaVKCRn7xqAAqrbrNfTEmASN7f5imWz1g2AHS2MbThM61W4tVvG54zukTEMSEfvwiZXimAmqK",
  "key35": "5od3BanFtRk37UpYMZhsLVTQqcKHoP2Zq1qKz196zBYa829emLarCy5oh6B8FkZN7dtd9Ln478mjFq9iFAE3xC96",
  "key36": "h15XkRWYhWAEuwvXnTGQoi832AqB6VjdHoysCc3aJ6WFJLJSqBVY4LkLTRqmzR1HoLWvjWRxdeB4HQ1Xv1zErRi",
  "key37": "5QMBTdvuSToFSmcANcjW8XYaXnmxcC2bm1i29CzhTfWYyGY1Rtm9qNBZAX1ux3CkZR7yiWxGBRTkgYjoMAmWs4DB",
  "key38": "4KR3RFktjZ8CUj4t16f3dnVBRDMbNRsNRybssEQwAAG6k1cYdXGLhsZheJBsZEwoEi8ieqzMgw8NZQqYsNXh1Ymd",
  "key39": "enByY5nYCoPssQ46v3b9vSEQ9LS4eyYBtu69tg87xsAcDqBTdPaFXJbLh8jt9FkdSLK9z4j2gDFSNojAhTmKYUa",
  "key40": "5qConqoc559tgvXEU5CKgg2uz1z1X667vzD5W36LZsruJyFim3QMaGeZJJbG3MGRv9EK7zePWUVEUU3dALVMVT3u"
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
