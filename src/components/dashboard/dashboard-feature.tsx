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
    "4JoSZ83SffKnRCStM5At3To1kY3ZzuBUA3gMfmSyGPKFfiB9i86YhyWgGUpDH9imscGgzogFbB1sZA6u8MEQqJYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsD9fkTajFsxcjJFZmP2uWb56QDHKUQaLdvhvj4X7bGmC6hatvDYhAAqb22HDU7qM6mjKHYf12LbSQEbkN8h8F2",
  "key1": "4mnkYTrFnFH5SdLFg2jKQPew4gjahnwcio6XsAuJ5BViKgNRx3hJx81mcRWb4ASTBefizUoFWBRWGYjmDxnTBP4V",
  "key2": "3CmuuBGq876VQUwc41nGgdsUemxG18TNxwM9my1K5JcidA9FCJfwkrRwVBhKFmZCDuxkFHoNrgvTsFvAnWfRqT55",
  "key3": "3Rj1huGRNmA1moowWpq4yqXkpfkkkA7kNrVASzuPStPddLe834cmsBHkQEYzvpxFqWGoV44RKXU1ukkQoPanym7P",
  "key4": "2PZUxpjNibUUZw9d3KRjRVdxGGRvA3LYdQSej5VkDGwdUQuB4ZxYctjjEUnqCFLP6punP2awug5tQKhaUh2r5R7X",
  "key5": "2V77kLU4FzuzHPc8BgeLnqQAxF1ZzT2b7MHdQM5vdzxocp3s4ZH4vKkeMprSWqvRTVpjGZUeo474FTQZi3xUB8NJ",
  "key6": "443RRwo37wJCUNcbgqLoGzTWCfpV3W6gQyxExtHhcSjoL8U7CduBpPt9EVJrLCMFVYpY89EY1LUC4QC3czgieC69",
  "key7": "4DwR6tNrw5ViMHZWt6ZEfSRi3DfdyosQsFgnFevTFyVeW18oHtkpHXJCNQY6CvWxUq91YQCVouThpDNdpcUWyNpd",
  "key8": "3ht7ghRyurXDMFnebLkg4v5iqVxutm3S1bMkqP8wP6aQuT8hKx3GfGjMsffvzEkgtvvJxxKoUAtutJB7g8x9fVun",
  "key9": "2wqs7xzs3PBD5Xh3P89QRUkoWXhHhUmrPrMtRq5VBmgmuCMXTTrvkkmFfGwikjR9YW2eWUhZMDivsNRWzVGjgnZJ",
  "key10": "5cSd7zH5B8hoPr6k58WYof6YcSJMw3kFWM2CLZ269PTvGmYZSV2H1N3oHFoR42MVi7qwhmRNE7mLH1ByeaauDsru",
  "key11": "4TmsTnbUxSCz5F1QBgFb3CKUCoiAWb64QDjnzy2CK3xAxm8TU4GBV4in59rgQr7BDVKwYksHqL1HSS9YKsM68QD5",
  "key12": "5zvnzFEoZTBLZuAzayKTQW3BPLQ1BtNRZEnXnEFuCgjCpddPHbTD4XY75VaVUuFZY7rz5TKTAPZpPMpjQoBiToyR",
  "key13": "2tAVxpXva3zgcjdPyFQNfBFQe58zGmEKR7w2mcukbmrPQ3L6ftpV43ysDKtuccoZwqzPMpaD6485iE1SZ7aygEvo",
  "key14": "5XSiEzrtf6Nx4PQrtXhNavcuhf1kshiCMYrjoKLTcuwJqzZ4VZXQZwPkfH3V4xrs1DURvAqVkcYGyi3spZym24WK",
  "key15": "3Xh2JutQBLvvW6Axf7NqMey3B8c2PsTk7EbxwqXbnw8uTYLNHa5smJ1ZGSFZSnjzQQ532sRcoLX8mZZjX1uxo9xL",
  "key16": "4KE2SW3jic6NbuYz8b3cSf8QJkYLdzM2QFXPfRDzmqPFEQeNAPwtf4juoEr9tHZaY2rX91voRDHdB6jk2mzm71BC",
  "key17": "3TX2E3hHRJczagFHsCkwiZF9M7tM1mHKXHGES3et4sVsxvZxyA74Dk6h9WHERmF2XDbkCce4LvXqYY13RQq6USxn",
  "key18": "5tWvXtCi6n2zGwNQgjToRNemtAd97w9zbs7tarFzPCqkT6cRLaomea9HiWEvy9k8ABF381NidyCcJudRJo8YJijc",
  "key19": "34LGxv6FxvE9tSPoSBKKATHRzPUuUjUHVgPB4j3nXzEHcgknkvL5q9Rq5yQ9mA1x9dtayh439f2TPDDiwcy3DdF",
  "key20": "6724ZHNFTmoD4vscr4xcmNChTCUDuC2bBVMWdNtoJUNkgHYJ3SXLRJMAA48SjovQbTh2R2qX71Q4NRrrUgTVdAbV",
  "key21": "jFTeadVc6GrkRHZgeU9uBjYoTR5U8isDvj1yZcqZ4funD3smoY7Ah7X2bWBnUD7a5vowgsDRX4YXxtc9PhiA3um",
  "key22": "5f66fLbfd4qk14gA7qcd5qj8ZQxzEsqbKjNMbepuD4zvcxGrbphsjvyKaTzD7kXJuHBoHkNDAdaD8RF5RAMYJdB6",
  "key23": "2g7SjBXXu3U91QAM67JR87tFqQY8DvyDMoDURoPUAvW5XkJSW5PaoCPkeXdQK1kQmadHiw7dfUf1jLWHwxkrQPFd",
  "key24": "4KdYc3Hejk7czKXaThmG3ojsz2cNbWWfpD272Bsec2M2AXAfVidmoRbkJGjjnXTC3gn2Wm72n8k898rhD7dMgzmg",
  "key25": "23fDQqPn7UA8bvvcGZTFgCJhy4oGGwrgESCZPd1TGxpTrTJ36hGZcTYWPs1ZhYa4FqCM2yvJ57Afc3vg9qcmaoo6",
  "key26": "S2wv8BgfjYDML5Lz65FFLTQ9MZyY8y6YEKKnupmm6495dUfEJ9xQgsES18f6Yxg4MVkaM4V2eF8RFRCsh6EQygd",
  "key27": "3r5m58U6Qbb1kPNQU2xuUxhndeD4DC6Qt7zEBmggrEfLkRXqpfz65oNo8gNVUb4W3mYRDAWxDs76d4n2K3UXH8CV",
  "key28": "3VLhzNnJF23D4f7bYyPv4bp1yAsZnfg58Hv6ir12PCZ7KGHAmA9fWFKGozgZsAKUEwEFtFTsobJYcanzZTyfuWNb",
  "key29": "eP6r2q98ca9EVyoh1s5ZDXQhsFBGqhy5MQiazajC2SijEnryLAmmhCo6v4T6BNVXve1yKRL2CxhwnLNT157JHjn",
  "key30": "2GjzVyVW6vyCtD5GuTN63t8ysiGnxmH6F6VEM35auL7SbSwEYSn9ixVDTkJKiEt6NZzrVMJcbPhYn9JNZ5PR3UEs",
  "key31": "2aB14GEQghGmC6w5ufrMJPA96xqPBWkjJYZ1WaGUD2ygU2S9HcB1Xu6LRmzKea9pgmCWXZtHcjRtyysX19cmvswe",
  "key32": "2WhU3F3khqCM4cR8ZvRUjSun1GSy6EA5fvRU9HLMrV8EFjUpd4xAMJXmCrNixoBbfVZtdeibASg5CP1mm3Pjf3Tz",
  "key33": "5Sd6kvsvGcnTAmbA7wGYi7jBTAiymPaptemUjvToDb3AmZVxTPw1iyAQP53FiCbiAXVtuidfwo9oGVHSivQ8Fkn2",
  "key34": "3VjZNG1UhzP4o6cHBW2qqXbKbWpdohKoLxXaFKnfWyqXxyPjqXbk69XWP1EehExtVSVVmToPFhaJyzb6Pe979TjV",
  "key35": "vxocPdHx4FCSKmmzAT8hVfEs2T4CPTitmdQyV6imEZ3yPYfFqiDFj5BjXjFG8W5G3SCWMCwz6erxVqi9SaXqvAd",
  "key36": "3TGfigY4tEMfdunQZT5wSsykQ9GfjWicnGBWgLUgrYiLc4upPT97biAWXFHGKebTjxfgjRn6zYGa4hb7hyS9WfRY",
  "key37": "EREPK1CbavNCQxgEBuuwzmh5MB6GLaSpm7vtbniAqr9KzDEy93ogqeXw8eAcz8TJoo8VteL1rH3jqeqBq4Wyd4y",
  "key38": "5Ytw9GBZh6KWWxFmsFwcmwLqkJbm1ccCiGoA8J14umtLxMDTAvGMM2szUfosxViV35k9EfnGYdd2mbW4xVNDwW64",
  "key39": "517oTXkJRFSy5KsFpss2UC47pkv2JTSwY5mp2A7W2Dbb24MedzoF4xVDjrwx9cED3Cv6gLm6Z2jSKDuPhGUV3w6B",
  "key40": "5JtULtMDtcCM6Awv5vYdDSHUnKAWbrJsawRvM4TGjW1r5j2zGbYZ8zWCjt4pMfBCCUt34oYJ1t3xvmDSisQ7VDrN",
  "key41": "3LTFXG6fV4zAZKk7Havsy342pWq4PhBUkTyCBkqt7hP39iZf3cpDcmMoL1VUGk37hPh5YwngEgB59QaGANCBpN45",
  "key42": "2BFTYMftqk6BG54be4dQtpBpjrd6o1wpjZKwN7kz83EmCFoLaY6P3rY3A6JZqagg4EcHzh98aSBYAwSKiTNkikud",
  "key43": "4Hg5NXewEXH2EdT51WC52QgxkBDvopEB5RxKm8dpWT6JYDPb8x3AgS267VCE3WA8d1fdd28aaR5myRwAYeHJG57v",
  "key44": "5dGa8J5mNxcef5tVXsmo8a17TNLC5GL4ccGeXDXN7kaE8F4UCb2BLAgQDr3gzcmhGcBKaeWH3RaPodAZ84L3g2XX"
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
