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
    "4fF5voMjvfdMTt7aqrrsA58gsMUxUT7mJiQWJAzMQcZev9epEB8jdrNEMinVUomVhJpniLwzPVEeycuFxrFszviu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JSBYVMJWLkg3FMjysZFd8s8JxwPcLFaZJiaJqqQnibcMeCMjvcPv3dWAHbbLBX3T7HYLKp1fMg49x7xZPpRSJk",
  "key1": "2K3FJbs4TR28muKYRsNiC5N4jBGTshHduEa4pyoKJwMSkoZQMecY7E6DxXHPWraSUQ9TQpSgrALkJBQUqfKyHLYR",
  "key2": "5edBQFPBCYnyxvwonH6ACEr4LGev25MLuGgcygw7xssZs1xZozPLtBufjhbrci4PtiPs7LUFZVbBYbDGDUUFa8Re",
  "key3": "2mc8hZcKznpAs76UzhKH3xX67avMAukUEV2KRJKRNtvqMubBjewdif2sY3PeEb7nzyM2dNAHMpUeaSQDenqy3hJt",
  "key4": "4zjy7xDjpd4tgFXUZ7ArhJXcfV6izqX6A2aVuTTGvXywtfUQqQRsH9dfqda152hAaqXLMsET5YLBqdUoDNAq7Evp",
  "key5": "58RB7886U9F2mkTvuxVNqUTXCangyMYXnrZdLE3QL2rvpy6AaRsuGLUaCnSkqWgZiVDW1ZpWUkvo2At2VNmydwdZ",
  "key6": "3jaMTFnBuqotymcqQNKd4CkuxmLcpykjw8VeeagU4FEGEYrEwKfBeCp9fKjwSKwJrMkMmbocFdukrbvZYr2mv6Lv",
  "key7": "nZWkrZEZcZWW9stq51VNQyTQgEeWaZF3fyT4eH3dqHDmpWcvcbVe1T1q8S5pbh7E9GNo9rcGytTGEmWhkJuHNAN",
  "key8": "2Wmr2sZBdSn1w4Ngg6J6cBDt3YRhyaf5PLwwR8ksHgT88dXHvtyTrkfgiomz7u15Ykiw58G7eFkudzyrmeJbpPWN",
  "key9": "2qBELPXgHdBNFZUhJniNMxVdSKAJXUuJK91SHm9vdCgjeBGZXTKQMuyy8Qy7ncUemHkcaSwrkJNfTmZQfbs5krjP",
  "key10": "YFpA2XydpJDbnZohEjEhZcMuk8JCtvh43diPq31GTvWZCvtMHqzUMTYRn8iEVMmfvk9FczCKLk16CzKqzjqjqa1",
  "key11": "8CsCsqMSMWnPKPaGksJ51TSHpZ3THGzfrnV87njmvmhZG4KrTQ4wNeSsFDBvqqfi9vTXVHjjRqJMvou59EN4nn6",
  "key12": "3VRoqA3r1gaCLvAnmf53ztoxo79YNbC2M5QoRjt6PvPHBwcAty8uB6eomi9WD7R7R8aMujVsPU5eGRipSBvT31j3",
  "key13": "5kmgJKNRCiX8zxUkXK2dHDNPBCtZ4bcKbZX9N5co7BSq8bSPE7gNLchpdqEKgu2Cu7E3v2MADBywcEcDVArmjE9z",
  "key14": "3qL1tP9B2osxfXWSWbcB2igjJD8WWxVBSv2CaEWM3dgGFTQbnyTSqD99osDGgEwvY6x22AwP34vHPNyyXY7uTcBs",
  "key15": "4jukDVMn8DmfrstCseMTWiKipbSBMWQhwgjhDWPKSTq11XL4eB6Euhyd9ST7rsfNLFtbPAAw85rbpiQaGysUgRQN",
  "key16": "3uxV8zv8eSorTPZxybiUJMAQFoPgwgw3gvhLuqziJuS3zdfm9StK5ziQFijBV3eckCF6n74kEV7LRjb4xooUXtWi",
  "key17": "23nC6i7wvpbNoFttTnjDrJQZRt3jHxAh4WkPCpdSByP5bow4TXAuJhV7ipyda9HhFJFyNFECeEpPeQQNQNbArPeb",
  "key18": "2XAoq67FKVTxNFZSPhaAqMueMWwRGYQyHFNL3PcN3BBRtSB3b4eTsq81w53CUi49A4D3Tw3uT5ANdGLEHdYFMamF",
  "key19": "46CXuSobWPGmAX1nPNT5qafk4SXbA4t4skzqogcHwC1AVNqvVnSwcpH2ji8SVJ1h8rcMvJFhqCGAsdQ5A2oVZ6KB",
  "key20": "78zDsUTWcsrNQSyGXGK1ovT32Xpc3FuBXgZ2QeLKaZU7KtTZufKXizsWJeYk6rWYBxkQ1M4vaq1YnMFjBsvVbkd",
  "key21": "Tf8YM89EsqG5ZZa4PLNQfPUnKuauqpuYMnmbSzFh9pHTj8wyGxqfsVDsL8Q3mDeGG9kdCLm9XdivUNLZvgazsHc",
  "key22": "2XzMCEjL5C5DzfnpLLzvo5CRzofsbZWgsttgaYYK3QhAmavbUKoV4uyE1hWumJ7XqNQxqtksMP7gxMdnj8TzPqNA",
  "key23": "3HNxoZ4RAYrRdJsDRybAzdDbFrBdtKE3iddYY4e8rSWN4fNnaGVoeHEtGaTwnKgdgbRGwhy25VngmY6Fv6jqepcs",
  "key24": "3wJ1kqpZppaA9eqJ2TrvEzf9ke4iponASUe6JTpBbrZdeYp4UPBTDFgJsGVMkwjsfERzWyBeqQrSJTxVoyAQA1GC",
  "key25": "3jCiw1wBW1eDQxmegDH5VJoP6nfezC48JAcnRNGoY19e9q26jZ3x8g7JPTn9ri3HApuG8q1QdzSHQ7repjDjKCYM",
  "key26": "5zo2AYk3Dpo9NetCPGqSgrSunDFEYkVBSvRESQQj8fZztxesujEew4i5CiHFofoywUXhwmN66AuDf85nUh1sALXq",
  "key27": "2zQF5wDbpAVzAYYc4F9ieXWq5thyZrbrFBaV9Fvns8AT2GChGhnpGUsc361aUCj4QoF2maX9aADJQsQDLvND52kL",
  "key28": "5oHbzAc9keGSxACbiaZYQKCEgtfe1oV412eBQ2uDhhzUT5Qw1udjdNnSN29eGPXfnHqj4vhewhDz22j4Hk7sieQa",
  "key29": "4wTY2XU7WcY6yNKXaHmVwU4ZLF3io3mvT46Kc117Psw5Kji85K5PLYSSnPnFqTre4eJ5bpg2vtb7TWLnDciNCcor",
  "key30": "4bocrBaK3piaiBJL7TcVr8pmsjkfeXutxPgCrSn8Kq63B7NA9FET2LNUYG1wWEmcXQKzXpMmFD15ygM7XyHUE8yB"
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
