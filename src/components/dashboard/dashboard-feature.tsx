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
    "3Ur8FzdjWbwrhUYRt9M89tCSmekeQ9WuoP4ufvKV3vnhJZSjygZRJXNnEyHrSNiT5kwALMrPTLCP9GShCoziFSf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tyQkX7jh7N7Us8vP3dFPknSUwi3uDzCF4nQNEnXuwtSUbMmG2574fLb55zTGkP2V42BTAEn1gaJydNe3ndgMtX",
  "key1": "3euGXpHtKoeYC7pcHfgmggUsTNkuuNBdL8Tb5p1AwQCD5xwqG168QprTdb2EgN2TASipg7XaodGGQZPcTrqCsA7x",
  "key2": "3csDEWGPX5KmLhc8MFdGmFSCfKJ7zMABpaGGLa5HNHRvy6vaU9wHkUrskEL43uZFWupgaz6D34f649nt1mhyF3Z2",
  "key3": "4vf4bvLPWDaC8ydxiGPx2NpmgLoP7xBGJexc9GfrHdVkVjpdbVLppAHJDJS8ssFRvpPa2be4HKGfQfrN4o3xTawn",
  "key4": "4rakZoMrJNUkRATanMdPjBZqrnKKCzSHj2C1DNz8hwQr7zuNJEkoXoqRat4aeUj4CazLE2ezKkJvixfgWj2Eindi",
  "key5": "4URweVjfZ2D9cfakXBDReuqRdwDUki2hpeXnmutYAZvGyL9bvTer5NUa7sGjCsdom4ak6de9CkxfgQB7Ms34but",
  "key6": "4mAohKuMWxuaMBAcTSgLjgrDDsfQnLm55VDi1uzoybKP99owhAA8JESYAxwDG1FA6EiaraAydgnxXk1uqQiEPhF7",
  "key7": "QNUfCaXMUAKhtYhtVQAX83GyQuXwZhEZEFQeFKSGTBjiMYnPo7PrpYbp2i2KtpHuyVMZysdHEGCmUTu8UjL4xQv",
  "key8": "27YxxQMuSpevfgSrUVGgn7Fr8xQvbJh8TwHDmsYFfrkvkuNfN7qxxivVDFeFDrMq5EzfsCR2mFqi6X6TH2h6JPAa",
  "key9": "2g5vAhQe1e2qRegBCXyuWBK8471w1sfdhKbFmjARKjVxDpov6JaMfUbKn4RkE6w9Sn32tDHe9u8ZrQBorhzKvERT",
  "key10": "2Q974355sTm5DKc7Qc6jarkkGP57yMAe1v6svfNgg5YDDPvRDBKubYQSbbiQcvgJ9gW99k1KUo7QkBp1w3ZFbbDG",
  "key11": "AvwYx9tvaA5fVEF4rjUv3W2d2ZydSyM1XqpnijJS4SXmRVTh4Qja65UFt56ECtTDDvfCRmM97exCJfqtQTptYUm",
  "key12": "55gR3iKRP9VAu3Yy1wFEtLRmaV6sGdsmiB1CsnwNeUpuTX6o4KdY5QpKurFNkfc8cGMnMt1XrjitdmK7ZKk5Ziuq",
  "key13": "34w3nmPEmrSpf4Y2tdT8MZkKqV5bcMus1znfuXJEpat1zveNQV1cHRhDSboZwFe4Cj3N9uB3GQi1kStvevVhuE7G",
  "key14": "4F4sugxvnBAvAoFneFxdTPQsYYkCEcwvaYKXwCK3RbdD5bUshbkRJzzm26fTiRvWxiw2y34QPysaufRr7HRLpNLG",
  "key15": "542JmiLNRZzTu3fYS4LNg4yboRMiu26TAD8nbdk3NgCcegMpJ9h6LQHC9Bb1XY3DPRZ6sgxixXLEVRABTwjHANd6",
  "key16": "54LjvWNd2ShBhATFYLk5xE8VKunbFRvjymnR35UoMBXBf635iGDbjwTotPz37DkgA1GuEbDos9NyErMSNK3tZu2A",
  "key17": "5ukW3Cov2oymHMwUFHdiWxXz2KnydgDtmGwqYzSmKkk4HKDMso8FB8AUS2o4Yxez4ReEWENcrhvrShjnQMhT8j8p",
  "key18": "3oTfvvJWB5QYLKspBKzVjeHhE4ogaMYhAH3R85BiwR5qWvkqeW7EjJPpeUDapAgtGwN4bNkULghrUa9yMJ9Fs82W",
  "key19": "YQXYdiL57cLcCDwD1gGXTddcz9rb3QX52TQ9ZT92VTyEXjqjc7dcY9g3GtPvrChErXkwUBmnP9dRW1AsZNThxpF",
  "key20": "3FVWVBZDdAvt55bmpyYhBGyXX1rEZ2wGEbZNFerAA3M3Ldmu3dMcNZC4M6Zu9TgazWPsACJPrssma4zGDkU4QmDg",
  "key21": "ND6VKMSjTipXExbXkgtAY5A6hhaf25kbVrz5nm1K2eksKox9gPgLYp3v6R9NpUxEupxgDByE8xu6iVe4vxHJSQR",
  "key22": "2KVxWphkQzDrzy967E7gzH6RwqByecS2TDts6Ah6ieKvVK9hxny5ZbVTcfKQwWgxGNqEhGYKkcATCNenqLyuECbJ",
  "key23": "2dPP8wpctBTk2BHpwJqCQC2iViUn9yXAmuduN37TQapRHPmUMAx8cVXN2dxexS2Mnuh7LxRHtu5mqrq8DprzvGfV",
  "key24": "4NtmMvCffETaznkLwDv6efMWoxBT5tg9GMB6gMypy2DPjPW3bjbLfH16nPzwNwVEuWoKstR1zwCizh4DRm1g4bLo",
  "key25": "65tAAQ1Ft595ATbu9boNaZbHnTNKfxgL3L2kVX2dXVzkZeWSwFf4QwA2cf9PvNotJCyY8yotP3eCT8iF5GVT1EQT",
  "key26": "56cnJRzjyZitP7LAzygWSLA6xyXwVBvTPg6e9QxPrDaacvZsUZG221Ngr9RNVAPygZ5PJRuuW8TYEKdjP75NXuYL",
  "key27": "9VSrVgUkh33G8Zhs2a4sruBxDStJo1iLmRn6bRHGqF7ZmGKXScStHkdHfjpKMxJ7RddtaeFiTgQ1ZHt43z3mwNM",
  "key28": "53HBoCh94NDNVLiFXaSETNDAerwdU8Jdfs6P399h5EcV38sjjY58qg2ekFFgWAGjjdp8MwmqmSvNXGATeRCVETUf",
  "key29": "2929DhagnSadaGRpChUhnwayVMsbCgzU49Hp1SPLSBaHbeYQjg69xgjUBsEazoShcMosoYvabxhyrcUErchMM4vM"
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
