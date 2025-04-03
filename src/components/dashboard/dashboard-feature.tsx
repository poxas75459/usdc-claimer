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
    "2z1x1iLoHToRCrPgyv2VdZ8M5WpJaugyDYY33cdhd8AJkmqJc7FEMm48QQhUYyxkU9gWGEKhgjta6FBTJ5C1MNUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NGMNURAqK24STmyzxyJahstVgE1bfCDmiPc99ui5cLWcvPGQFpDGGxk3zXcUsBFUuwKjnpAqpuUEzHFTXiXXWY",
  "key1": "QWtUmf2ExGDuGNpQMNpj3A7au67pcyw794s2u4MQyLsPDTnPwCVq34hCheFNzwJkrMNAbxYh6AaxJCstKfgfzL8",
  "key2": "4MXJoV7a8oQtaJu7obPZ6jAEKfs6hXCtjsy8ASKPRuF8jYvxjZdyxLJEo8ZrEkKfGozTRwpCGkgsjrr8JbWhXYuo",
  "key3": "536HWPj494gT9Vpf8E6BcFaQnB3juXhQ7PijJcDCzemkDgQGvenecM7RzPpiGCQLehpvnASS7YmFKfuS1GBE9sxJ",
  "key4": "j68NQ8MHBXeBncTiaHY68ctFBJNtqypiyJ3UV2iCLiv8ibSCXUsTWTGmp7dSHsQ9iJT2twfvcUGrLADAPm61Rei",
  "key5": "6qk4nmpXj2N6kyxFWjpduhjKzWv1mgdffhdHuUVhr4aYgrXJxJ5MHtdFxcnPeBxsXAFBnHeAXD6NoLY5eDBynVv",
  "key6": "32Gx2s9xoV9VQf7Xs6ou1uJ93ck4enzh1Q2t5xZ6XPqEpZdFCvpbqUAwzJdi2gArWWKnHxQRCdnbyqSZX5YNpGpx",
  "key7": "VSMgnFhCFdt8dp8DSsoHcxtDK3X3DKWcyALzscD9aue4fx57f6ygd7mcVBr35hzR4MJb2aBLeCBe2WGm98LiNWg",
  "key8": "2JYWVwZ4pPZDShhzVdZ4qK543NcRPSGmhovKRJo8EUrExRuw2ySGr2QDC7DkJhNoNZerXdNxZ5VyyhoUV1wDR3sK",
  "key9": "5Ype6Tyt8uwD78XPDxJM1WohshpWGL8Mg9t1GWWhYxudKHomDa794BqWBeTwDRkZ4PwwZfdEK7cXxz6V85rwrxD8",
  "key10": "3HqYiu4CChPWsemgcbWk9p3ikxGbHDZJCrXcyLmxVwCp3ey5GGf3AYhSzLrs1nHYvWaxvFnhvofZoKEH56a1HETz",
  "key11": "ZwjP1KSgaZjzKjQUFNoCHLHFJAXbrcDjGZ8nhXcABXvRyu5G5NARwxmZbHkaTVu6mb7SWFpQhGkpLsAU8tQhtNU",
  "key12": "5d6368xtZZwjWSRL4iDaK5rG1dWxkbKXasvqVEXvAqdB3EqSXC2ChHC9MiUQyyRcVnwPDJeT4ZcVPGpurrQCXE2u",
  "key13": "5ntppGqZNh4jjNuEmHiqH1fSRCKqPx16pFbmKNetM6V8pZBoFevt39mpUrbAwafVuAXiAf5omusrWD3wuQNMpYTN",
  "key14": "5NZ4Ljo9md1aeES5kk4aFN1qHzQEKP3DMyP5pUeyeaZwyQrHq9H7r1SPTmjMtYCE6C8a5SSNjKn31xnGuFajatk7",
  "key15": "3uKBkhbp3EEymUchm5TrbmcCzQrM93F8ekki5yok2ggwQx25mr1unw9R2TFkQW3HCqC5riQCHexUgYSp4VBX1za6",
  "key16": "4ohSz44iLTfFnsLcCea9ii9byVMTfUPDK5LAhBwzVksnavPhs3mgFH4yrWMPehKmLR3nopdkg5xR7VhxUiT2n3QP",
  "key17": "4JBwf8xyeB7sTL4d9Cy9z8bn7wbrv1qDYa5j8Xv3oH5AcSfSzoAE6vRzZZudYJjkpbpfAW6Kbh3iMNZvm88PwseK",
  "key18": "45P7oKfLbpspYZMbnXFQJp9NMgvb51kvkvvUbqEeyMY9rbjFmWD6aM5wy6pCfFpJ3KWNFDmfWuBVCNqvstMNrVT1",
  "key19": "56gpA4kwzX6EMaX6p22Pxsx6My1rmFzB1NsEC4PnSNr3SEwc4nsrJTkT66RVfXDhonpkWZ1RmbBXXHgmtLazbYMK",
  "key20": "4xnBS9YdZnvbXREnhdQZ3t7Ltg52P5dfLyXeQNJG6LroLZYcVqxNQtgTYZbtDcFsvBR9BYYqpQwaL7BxysLGn7Db",
  "key21": "5ygZMsFiXMzD9cx8W1SDf1ha5oyGWJW5LqC8hNx3pWwDupKJspRqRifmbr5EAPaxFVYszmbuDf47dT45Le9YgymB",
  "key22": "527XjpKqqNAeGakK9LhG2vRCcQ6tE38iQTgMV6mFrJH3cWtnjXhKKJGwJrfnnk4fDiEcUizgssRcrCq2s8YEQuxs",
  "key23": "61buMfVxmyHNWkoCrAmsbCqH8pP4r4EenWjGMVN9tqehVbwaPm66hHe5vHszNEgsHcaebXsg3uouU86CyVPVtPAY",
  "key24": "HGHfX2pM4SQJF4LHPLrfeihiv99wuAAzonj81JX4qfQ6p1N7hWiVxfk6gLPBk7Y3cDnBJdoM2DPJD1MvDoyEmWi",
  "key25": "2QpGtjYwGYuLBDxaX52nHkTtmGcagFBDncbMLkeZzcmJpPPRT8WG6s94vjfXPNHRDS2TQ84k8APDFy1cCR8v2GDJ",
  "key26": "39HiT8hdiT74NW8miEZbeVus1SgvHyBAm4QJE51ZGhHFWteU5FyJbL76KB7ZxWK4GpFJG5JCiYtSUEivXKMn8Zi8",
  "key27": "KDEXvEWiRusNN9ThrtQsE2wYiXHQJfzCVKEAJDoaBG6xGEaPUZSvRFwjX5PLjQz4tDTx56GKyJTrCPDxoHEhGHN",
  "key28": "3mrfVnDBqCARXR1SNsxuDmX1dBg6AMxqqABXyA5kCTELEJd3crumnnQWSBBHpQA6K8WMNhAfK7nNcujKkKtRGEWV",
  "key29": "5bj7biBsv6HmzsiEE9toVRtsmHMuEGfgjNMQ6WKmTScsmxMdpYmm3nqC2VmJBYfBgAQkqr7f3cP2H8pXDcKSfHHU",
  "key30": "5omj1ZGzCfqtEpp798ZgEDdWmXuyAJd3WqMG5i4xSFQLpMxDS5BPnM51w4L4QyFVMzqayYbHMdjUgkkNJ6TXRZxY",
  "key31": "4qdP5YbR9S6nRqPVRAsa2dYcHpHdYLv5fhc9HWTCJ1197wKpnK62S5M6shSX4uEiy7KPyFAfyaZCHonGaNZWvWoA",
  "key32": "5mimot9gc5ukBa6bs6boP2g1ek6Xuat2pvaTsmWpJyNZTtXP8x9hPBJ64Yz3tZiBpkcpbuxuLpDkuLymFnNdZpAJ",
  "key33": "5Nhp4cw4s5knyn9EAaZKpuquZisv2hv7a2GGuqii7ptGvkB9Th4dnWi5EzujrWFE62GHmjivoCox2iWrFa4QS4nj",
  "key34": "2YhTayEWiFEznWj3XRD54hrAiT6nQFrcqwhDYaP8Lx2mo5WKASGM7A6mdqHf3xCFkVFmcLyaGEtbhn4twRRzHT7E",
  "key35": "4yYzxA98Gq62Rw3Bd17wqQ6wTfvisBhpSdqQqaguGkamtQpxdyPa4FGgUmpHvNdy9383sFVZQeQEGgJcvZiYpnd",
  "key36": "5U4fuTYVHgTR1PY2yxZ6GMtWhojz8fA4dxhhtrjf4HcoVE9CcsvncUHxpnxoL83rkenQEGYmhRhZqL59ec6sLWYQ",
  "key37": "4ppFLo48k4W6j653ynXL3d1u9uBknubdhfYFvh6Lo1rqDEi8pDSMgnMAqg77E6oKSKzwQm8VSwXjqbVucU5BrW2d",
  "key38": "3fHTk3VCHEXzvyYGkSaCiv3GA2U6fH215XVFsUs4d1za4KF8JDvGYyNmQjnhQWoeDzEiA7xCeVnPfr9YXVGuAndW",
  "key39": "2STEAjZaAk2BPYMW83geu9NHkFXxZYLXnbXdRCYGGAgpzjAFtJZW3w6Nf2zNmQ9D3R7rYRVeXemDZ9LLqZvwSv87",
  "key40": "2TdvaZwcYFwm1xPCNyCYYLfKZzkuFgnTEkchYArXUJg8seLBJMAvFkLny1KPMFcdgRcVcc6nZhvJci2AzTZrUGuo",
  "key41": "223ycbU3BYho2teiGzZdmkqXnVtgFgfDovg1SVEv5Nm2Pks95uw7dRaq2qjfCH6Ns5LwqZCc7jvsjHhv1pRFk8wH",
  "key42": "2So8DNDrofFyH3hFejgb2AskiK3cs3ViE3rVRKgyz4LM5BN19DkVGGvs35YHw33PPpC33MkBTZtEzBEm1h1T2YDi",
  "key43": "4JsGmvJENzRg1VPsoUa8PMAQUP28iVWJxXA7T2AgULzcnhCZKWUu1s5EnVbVrz1nLcjTV6VXW2cD7UUAuu7eRFtk",
  "key44": "LMUZrvQbDmHFyGV77tPNWP5q5sgMLJHNY7j3X31cmPHXi2fUcdWPXJb2eZkcMUvBvHyvaveU7euEbkZuc9CPFoi",
  "key45": "RtcoKtr8JP3PK9JWuJqZ9McUt9zchPtoRaRnSavnLpVoshEYt1qS438cio4oPADPihbpBJEu2mFVwTvszgMKrtf",
  "key46": "5iJZFTpQbiR36VArbDUQ34wcRV7Tsqpt3UsGDYFNWs5bgmqHKKh87DMEYR9ipoX8Vr1yrRYoDdGbFPH1rCqgmc1d"
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
