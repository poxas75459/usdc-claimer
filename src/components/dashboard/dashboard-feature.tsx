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
    "3DvUdhR9y2k5TeQXZ99cm61VdUaGHyvYCQACoaZTw8E2fGVsXCF54CWcBgPt8ZKPPjaba7KBhPL43Xik41zsAxzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohgcfH3A8u7xe1UYE1SrJBfhXMc9xJkd9LKAgSXinFwfcqGj6CR7rAAcwBd2yzetRKc2yUNbarCk2q5yS6PNKTu",
  "key1": "Nu7kAgN8zL19VB56uMw6ZGbXEDBsboDQcjmJLD6sS3r771bCBckb12yjpuGRRXqWtxXTekm2XknmMFpXCzQ3Zuy",
  "key2": "4D4guZyB4XSKZT9WXX4mSHouZXSn9uYhm2zQnsUdhjNMvjFdqxZYdb5ZbEGrPwkWFkYEd51ggDGu5vm5nHv4aerY",
  "key3": "4Bb934nRb2Kx2YW4M5TGTMHwynLn26jW5DH785Dj7iiKajSam1ABhJDMMJaAPkHkpwz87DptTYNtxTnmrKE6TG8",
  "key4": "3NB74wJsRe43i7TBErjqnyt19pWPJZTYPfWepBbf4QKTWdw7WxK64docXe5BUWkzPy2GiYro2TbPHCByGWcuHN36",
  "key5": "2AEne5qkum6ZhGGuNgLrdttrgTghyhMKg8X9fRFoJRbHQfrRCYh4vvtAuEhwHb5ZX7nPFuKdRwDYPGgS4urRa6DM",
  "key6": "52VYDVqBVH2wdnmmKKDA5E3r5v2btShsqtYU6F8pP4Gcv48DxDCubqYvJ5xvKpWekDrQwXv61nUXdF4gawEYFgT",
  "key7": "5RKWSQwCSCq58FDZfBpVutoD2Wc8U6C7nVVxMoAgSjZRSzYtkk9KyogqGUzdRAXCinfRFRn5iHZVQuZ4ruuJV3gx",
  "key8": "2WYDyF9eS5JW8Xj1PRRTGfYkYEZPHtexXSvGwHarNTFKxzvGfBPchyjq93Cwe9587VHhjSrBsiN6pCxZ4vYzi27a",
  "key9": "4KuceEoF77o8AGW4vbPBBvD4RFjm46prwvPcsr6eL7FB5DwKBhMqDz4Eekr3dBT6ph2bjUjK1ANBFMJq5ckcXxHi",
  "key10": "3N6z7rE3eHggiorXpvAnQcdpkseS1eg5tiKBH73NB2mpov51gDkV6Qi2ctK19VvEsEnUYz68jCNVnneHGhq4zWRs",
  "key11": "2ch4qFhFvjuDsuAqjYXD57tjzPZQ5zD4WnvgAq1XfXfTe3T51BKfbpowHvJXou2sKAiBvtuuED3TmDdE7Q5qdZgp",
  "key12": "2NgXVpf4ugooe7AoNNkgfKHNvFnJ5yhKXUFcc2k1jQgFzEFdSWtKfe241kYNEUDPiJ48jga4p8YHoeeqhnDMFS2u",
  "key13": "3X6jSurAmsfLr5WCVqwDHswUYZG239JRivSUmbb7YPtvjvD3qMdQTishEZyQyMgQHFoDLdCyQT8bao39jJ2P8Fpu",
  "key14": "3u79LAby1icSLK8cQoZ6La9zo6X9woGrdtRqGqYk4o3PYNsLodATr6MZ3jSf47ds5azH5hgmZUdQEqGRqwSVqHVJ",
  "key15": "yi1t17Pjz5HdDw4JzqQiEAbRvxBEAKHKDfk6ZP6a97sSiViTD5CKDCuDeaWTqpXxVmW88yY7Z3SiKZ3sjxR92Ln",
  "key16": "4DnPynxyEkqjKo346Yo7az6wHPnVTFjSDVfW3Bw21WF1eeRu4Pu8GDrikHibRCTk5fZ47AQ9UpDTD6E7xuYo1j3k",
  "key17": "5UWAdwkKGu6JbuRgzaCwmDCVTt33hW5PvdJJgGKPig5BDo9pgGcUe4xkrHcQVGUyjeXnM1ifKK4K3emSpX9CSX5G",
  "key18": "5ey8ixVoa9HGF427KcQPLt9wWnfEGs7mkkzQrGTATGL9qqQotMvQoV5XzXXBF6GzNVj13tGYM1wWAieAYwpYhgJW",
  "key19": "51Ya8f1PyAcmJTAUGeDZZuRhKGHnraHEuEvnycuihmiYESLzAYcpBBH5PHG83Ku8bb7YsXDUCgwSEEQRpmSF1AUE",
  "key20": "5GBdpNmqYsGzvh4ALZT3KW8cLKC85YoDnghZE18vuGKj5CZSdwhDhLjrfqmxTsbTohJub88ddBvses87nzVBeCSJ",
  "key21": "35tV1x7wUi3BVzVPwSPib5B3MTtf9rZckqbSEosAS3wSQ9ppPK8iiFP6LRYhmrehvnBbRmUTjMeCzazN69p7mhSo",
  "key22": "67j5yFQSWHvPpkERCsRUxqc5RmzRArFEeBGhzrq9XZh3hvXUeFymHwoMrXLXxWh8ayZJfyDxLEWPjSDn4sBzVbeg",
  "key23": "29iaSaeaSMMqhZGoTcWqnbJADfsJFM6hYhJ6rqinEtn5GxAozErVLG34CierEQKrJB5VfuRpoHrXuZ3N8Zvkf6S5",
  "key24": "3vsuqM4Rfx3uGvibFYm9vecHXsUpTshyHfkNwWhAE2KRvAt8GUiDQg4tvbFJMnjF2BnTv39PKvgsiGKzjVJnjNbL",
  "key25": "4owUAf2481NBw6z4aBQBE5sw8hSX64VWiNkzyLoQyHP9w5tErnd2hJVsgRU2VmatLZmwECkooMFWZzdVv2tpkreb",
  "key26": "2n35Y3E1sgyvUK5ZDCRhrX59s3bEim7mGiz6by9BCUU6L9wGhYFDJwcy6Gageyp6f2imFa2e3gyQz57vszybZFPD",
  "key27": "2vuh1QmiVgjDWH9nY3zHyGaHRyYM7w8d3JHdwFSTeu2tjVxZ5TPqtfPmvmtBf4AcXRx1Zj4do2s2nrEcNnYBXrQR",
  "key28": "43UJWA6bRD8b4zxvP21t7iZDVX13jJirKHdQhXkNZpvMc9NgEDU2c7FZqWabSuuRc4uz5HXpTh93VmXWhJN65tyu",
  "key29": "quPL9V3BvrZdom6QFnJo9akermCs3fowcn4HiiWPofMnnZzVQc5HQNsj2ugk8sByMk6kcFTJLCCE7Yam4fybAwa",
  "key30": "32fKAnJf1UXH2CXC6cXLbu6hn8vAqhH4UTDXQALEwEn198rdduQXrSm9bCFnDkApn7PTVEizVHUi7t392ubhiPFv",
  "key31": "2zT3cbU4ZDoNPHZVwasnWGUnxwMe3NYWk3WAqDycHpTRigHqZwhP5vuBuMowWQdZmbRW6gdiouQjN9KnUvTsu1jo",
  "key32": "e6fEGt2ZUgPQMfdf6xitf2jwF8BmYGfHEZrKNRzKL8kDzzq3RMrff1gaHQ8y5CbjV1Sx1oXmEAc6PTzsMgXt35n",
  "key33": "5vVDk5EKrBbUCkxSjF1hmDweJ6dMh1txEthke6D1gARaL3N6YHuJBdEqYreD7igEN2QLDcdRDWMV3AYxtFk7gLmD",
  "key34": "3y9WxCJgPWV7vik4KBbEEdh3ACSeWwPUJG3CUHMQifgTXSnhc9bJrjiKKwpECrrC8AS7D6bYQpPY814EUzP1pdUv",
  "key35": "4TLn68xZMygszrRbLUSJ5vQ2iQ8CR16HjfxXXpRYijcyBoinX1yejgoghamBwXcFYxn5o2XbSvhEvTtDvioRVveV",
  "key36": "4d7JoVFdU3ai7d3XEKB4ojBXaYWLru3ibBBnV9oyxV5gv78auL6takWDHe1iZGRkTZVSWPYn4wokYYR2ufihGwA3",
  "key37": "8PR2B2aoesQppoEF6BMJXaFTft3FUAMuBgaYBCeR9E3MGMFuHgPpr2bXzYpSPR325tGvcrd4TaYCQkXTT8HjQQS",
  "key38": "5T4oMFNZAK1Dew7h4X9gz3NA6YKfiGePbcgp3RvkopdMD3soZsDBBYdA1ynVzpy3T2eK8zawfMC5DuSLHKLkzjSA",
  "key39": "652hoGxh3vrfqd7WYoSHAWNjp39GcDiQzTazaE3x4FipqxVKHJggBLkmgjr4myRvjoDbacfsk6GhWDpCy16m7NQL",
  "key40": "3U9xtJKYtsY4DUg2cKKCNa6Rj6DkUQy9bAAGkbaDpJBMQvEDQb7PCHvF9KdpqbYf3JWTXic2YbCys9vtfaWj1Rv6"
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
