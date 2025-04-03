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
    "2bGsLMLPpCmbx6vP57aujttqfxEvcAGnckiwSKaQsZ443C5b99EbFw1o4gL1TLCr6i2rgXhajJA8kxsrxmLCz1Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NG9Sy3MWEjEkXnQDKvjcwipzE63d1AzJaouvadk7Mv3djsyDYRHxCMvJVxF8BH4RgSR6EEGCKvLjnLsLahP4o8L",
  "key1": "2neLHkQ1XsvQDbmJwoUqsnDqzeSwK9TFXoGJe6YPxiT634WjJ8PF7bh5Vj5J2c1UawHs28eYkmM5GyjWQNrFTLiU",
  "key2": "2oS4bKRCivHXBwCs7wTuVfeTZmFbv3fp5h84ieE9GSi8EQ9ZsiTLTe4oaguKx5qFmqNjer2Nq8CdUEm2LCTdeTE1",
  "key3": "4VZEW217nEyPn1y5oCZiV3GsNgdA1KrK1HRf1AqwZaFU3BEHKcninU3dgenVShErbjPDuvz9n1jgTsj5qzFUCzxo",
  "key4": "4fMaZgWoM8Q1mWMEwHrT7yHV7BQpCNaK4y2GQ3XnytX6mLRsD5hZpwgbhQkUnLizWGBn5UaNZYkNU4SVkcLBZDJt",
  "key5": "2Ytzh4HetTKbkZvEFzxSrzNSp2XQoDKb1ZbKgpGk4URePrnDGZA2nHr83bMr8R12hXS1GdgMXKBnmJEyWWiArh5L",
  "key6": "5CxFZazVtXqivSg47BKmmjuD3uAx5HjdvDFgTLsFDengWZ3LH6NNC5qqoj7b2s292RREENMxQgyeVq2GmqdLpg5w",
  "key7": "3JARF8ZhtxLa8EHrUPZdZgjRM7JngWHJS44THkm86GfyTodWBfvjtBLEyZPNHuNKFCG9TNFQMtKevW42K2PcJXAy",
  "key8": "4R4wpUryUf5tQ14XpN1iKTqqkSpn3zq3r2LRp6VNRmQXUXuSpjH4jcSdpduxFjr238ecyGgvcSF3uSqr6VGPPwT1",
  "key9": "5Rnpt7CnUFCouXEnuckfrYcojedVDPt1ZFdovVgwnv4y1xDojsGACFfsr3dVhwdkrx8CmpUV4j478MJh2QeTgsyQ",
  "key10": "sX31v1eq5pf7PCRk6VE3Jt9j6mNqskgTFo1iP8gCMy4mBkWQTmbQYMRys4HnmeUuttJpDW96oYwJk6T3An3yK67",
  "key11": "UA34RvmYVGYeeyDT2ZJCEb9eimPZUjRJd6gzauGWvmJ8WEXTLfq4Lh8uF1arpm8w3XuD6yKr33unW5LVZiSdjaq",
  "key12": "2y6pLp9zwW5Kom2W6NhaEujigQaisv5jGDPQn3cYJ7J8u69P3QZ6wzq6aNg5eZ7FbGb1vsuMnwH1Dj9az8BoXUTV",
  "key13": "4VMJekzvk3pTW5Krzfd4pfutK3fHwgLNPJRayzfQrnUSZW1HnPU9Lu1cZyN2LiXKfXiNHvB8MX3s2Fab9KV7noYh",
  "key14": "5UeGLcVwD4mm82nZaMcZurt6QY7gwDeYYw5CJkcU4UWfV1AVeyvft1DrJxMTauhRD7h9PExbaCb89us44GK8dJVn",
  "key15": "b9Muh7Qp4Haqrv8668Kj5Q5NxBDLuhgAUfocBoVrsPyg8AM29hDzXMdfV3X8apVRcdF1ywApKDyHYtn5E4NmE7U",
  "key16": "4PGQxh8NZz2d1mmwXy4RR7zKSDJLMnMrMABeSSgNtWB1H3RaZ7dSfYjYEKSiroDJi53mhpKHb5h3BnW3aEf41Gdz",
  "key17": "3BFjQmevntYtm3GL4X7fgmBGMXDakpKeQgG7jfgCQqZUrriUPnhSSwAvtRPmXcEQPCGpvoDSwf66PW56qJN7RiV6",
  "key18": "4yKSqkcPnURpsixjdbs2HiF1U3EgdXgsCZpwKXNL6XXv5mojGU7TCu45GtQW1o93L14ucUv1P2aEz2pzqgDoGhAJ",
  "key19": "3ZN63P8JjsqH1A4wD7PU6ZU9GnoEiZbyuCDRRRmZtL1BMMSTnfE6VpCCVV6NsFHpS9LgiiT4V45hbcUhQuiSkx8E",
  "key20": "52WF8pEePuf6NHo1d7rfttVA2DNHuDqFhBM3sMg4m6np51nkbJ8n3QutyemTpyMJCRV7vjH1HqcMXgeeFr4Wg69f",
  "key21": "QzRhZNUraBEo8Wwr1m7Jyc2ZFRzBVT3x5b26uf4fqR9SpbdknQ1rXJWz4FaPq7fKKKGT8NHMWmEQs1FuUqwdLNE",
  "key22": "22xgzfK9tEnrSP8YnyRtSF4r4wgzbBwGNVyJ3uU81KAV9iREbF1ViUsoRkGCQXn6idWMDaUz8cbqMfZzs5RvQnbg",
  "key23": "D69TLtakhcD4CbyC87YGXpdqnwVaoZdsnzpiFuDt7MTpP98eQCCQwZdnretNpnUVNH8HwTTotAymexXoDuxXj31",
  "key24": "2GmkaYBdsnT2WLD6FEPq6HYogk9LM66CnEMXYo6P4HytnXRsLD8TNLj4NbLpB8kgaDo5pkGCgUxPGBpcw2KNcJMh",
  "key25": "5czRmQkrJR54GwP7fQWktiWTnMmyrdxZaPhz42UsmU3DDi97z2AXifzGD62hqEU4yUzEUEWYmC2CjFxp52aJh8Wz",
  "key26": "5SFepzDCMHD2otvNNL7qNp95R7qXsJDE2RCyqwxdZzqtZpnoKP1DkHf3XjrQaomEErBpR3BWEjPKnM6CK7d87dgi",
  "key27": "62YwTmaYzdASFsyfmdyNtKrGYzRKZGaN5ZUxC7Zb4We6YRyvtJ7K4HdELdZB54LYoy14Aw64Ed6ezatPVoFWK3gA",
  "key28": "33iVdmAum2c3pwHC5eDHuNFFw7iTVrGErn2Q6Tc5Y7QG9oC5Ki9GxCuAuehsjpHj7mE54VG49G7TJiWDcsKak5Wa",
  "key29": "2QrxiBS7FfHbwetDYFgkYbFmGxfFQ3uSXHwe271kcaWspgjEeSXpducARZAiVbh2HPqdGbWQmAwD1Rj2ruW2ircg",
  "key30": "5VCtRymkmCfRRtF8bDinTsTqhv8xsrsoMGf8HYXUxe8ENr9aR7mbQ1m4BTjqP9YjtSjmJB5NVdLSqYZBkexkbViY",
  "key31": "3UHsycSkYbSTFoBchugz9r3KKDmjZc8B86ZvDPgYr2m7hYjvZU65hZYF8NBRJjbTv3VeeoaQSRy9ggspZ9hLvF6X",
  "key32": "2Si52ciiZFTknvS1ngcLZznPPqphsvf5iqZCxCS2BMgZVzQpXRFuea6vFE926SsUS8Uafxt5PCwArHHTpMMy2biJ",
  "key33": "65z5VR62o7UiL3m7yNj11dgnqZdHp819bDqDdK93s3nwPnLFXQRBsivF3vfhFnmMPbRGBCdTYPutcJWk3SNPcsEk",
  "key34": "5TJeYzF9npv3azwHyZAs7BhsZmMTrre4XnyBvHjNTsq4hsA3i74MRZudkT4NWjRjWPLmcnGPvq38NEuhDnj4gXqY",
  "key35": "Z7rzA2vCkhxiMFrtMNTTASJKbk2ALCjRD9H2kmRmHUqYQFjKVk5X9B9GaNSaMcx3MQJnaue5h1b8JcdvymDfw2b",
  "key36": "3nwJpeT4vyNLWKgduN8CRBckspiqKRK9FtW5Yh13VseVSLQ62Awdb8oAWjaWcu5QtHNtD6g8J7DB9nqZAkNCaPwM"
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
