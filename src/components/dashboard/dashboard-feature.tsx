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
    "2LiMq1TZrhsqG9QMBg6brQjsQvXzfJXeK7W25PoVi6Nkqu8YbME5iikevzm2TYweqVcKRxF9qiQgFvLPEJ4mmv38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAed8sxkmtnaWUXd19hx1AtYVEfQzUXhgRnBJ7HPQY3BRCiy9G8cob98kYw6jRYhQpnzKdvoiNnVi46TSSd2s3H",
  "key1": "5xiZQpbw39C7cZZSoDBE9n2SooN3kStZdoBwcKBT42qcVXRN7odhGLN3MvoTgPch8R9xE6fRv6xegGSQGADQXAGe",
  "key2": "nDGSiLe7eM1qRWCy3Sh2CieR9NfnkuaDQSJ3R3ZMpgEAeUkxhiGHLAx1B9WQd4a5d4yqToLghk8YxVopJM4nDZa",
  "key3": "2tp2X6PWdLD6kkSaeW2q4e9t1wkXgtWnis7QTRfXSZ8ikHefs78rJfmc2RHy5i5p86WysjEUMRX6yDKwGeA5ypxV",
  "key4": "39vaoRUJHLVUmSKsPB5TcyUT198gHZ94Wr3zuKF2BBJg3SkWzbx2Jmbgz3egtp9aWT8oPK4e39dzLGMzJAxEcehr",
  "key5": "3SGxaW9hFaS9GYD96o56oPvXXPD52C8SeFqza2E7MnCM7wR2iRLBeZ6uDfFx5LfDaHtnC45DEJMkRMYkK9Kt1fjF",
  "key6": "5mMRgs1ZtZy5JsWdY83gYwE1Mvv9cBRkjSFzCHMnzWDeXAqTheyBuHYmnsXyLKNBtGgM2rwQyQX2QzkC66chp97Y",
  "key7": "2Jhf7baAT5WqtkFNieeENqz8XNDqcVNcmw8fHJTfu5Y94Wozpxeijc4PYshhB55MpmQ9aNFUQBvWTdupU1smLjoz",
  "key8": "24SvaRKsTz5qikx6bUfA8ARmZUfcTtF9vuLJKhyDFkHpUYpF9syB9u98hXAFWPecMAdM6HGrrdFLMmwGxxKqUv44",
  "key9": "Yf8XujK6cwjYnFFdVkHcrLnN1DhW7VFatoQHYH7bzHWYLUpDHtDGAYuydg53WArx1uxpm1sxNcUERWjtoapdAYp",
  "key10": "5tW4MpmghaC5aLC1rjZrBgnZS8bCmvUrxsjHf1YzCkKirTWTCe9VLa3ZCTgZjKfmpy6X4GCmpfYf9zeoxgLhyGoN",
  "key11": "2V2ZaZfGhNRa9VrvvXraxJiJRrowanpPqKvKp8J4Ruvq1rGbG9qZjfy3r3WM7XpEf1tEYR4TMfR3MVgrUcY5Dced",
  "key12": "C3TY2VqYDPJY8cPHP7LVuW5L4Zwn7J81xEVzy28euSwDG2CVXHnovz2Jucwx5fRevyCNMmgk1wB6N6Mjzz5Wovk",
  "key13": "5UBHhqXW7UKYKxsPPcmGWiFWUMPY75mHeuEvQexMDCyWKfP1h2gqmpoEgVZFfwr2iSH5sPSuH7s4vxgiWADQrm7m",
  "key14": "4YffoBEpMeFXCoZrrcss7hAJexcF6B3zAL4SRJZSWcpuVo8RCj9ZXgp7nXbJrhmtFayFP438ysr2ue6YeqYhCQMj",
  "key15": "k2na5JxauQCaiYWzk6WBBpnemcfuRFsuebT5ue9VATa3iov91CoFL8CsdpMq89KiqPuYPFcQTVcsSAE53PZ9wwG",
  "key16": "4jQciMWTyYQ6oTbRpFqAPx8hqJFwXMDNfDkFKgjTKfpirhm2xugs81nDq1GChzpAKGqijTnMUqxDbdyXxNSz7jJX",
  "key17": "2zEYCqRvNtY4G1TnptUWsPpMkRbuuDV9GmaAjvUKoBeszSe1S5wg12tQPtVhfFbe4ZVsPDMaG1yqxC3pJaXut9P7",
  "key18": "2z5q82akhma4DiJLR6vJLjPrg8rpRcjvDq9BmMc4XzoXMWx8hZ8ohSHr56NZGqxaBfBeQtChiqDckGV6NazS8J7L",
  "key19": "5x1ZoZNTos2WdtReAMoLgUXdUGtPF9QLUVNoKGuWFiNJtGjvpHqL9BV8fCnoEUFKyLaQ3xSWAWTCzKrQj4uSP4CU",
  "key20": "28EDL5asvcLgc6Af6vR3wvqXbxjYoZqxtay9HpTjH3yM2Se8qEhtxuZLZhUNYgo2sBHMMbihCkFFvUjZvWoo9V1i",
  "key21": "33Z6j11ppYrhEi5598SLDY6Er4uibafzuhGuWcaVeWjqkexH5RsZvcikiDkSvGkj7QXeCZLJtKuacEm9pEGuYjDo",
  "key22": "4Q2DPks8HSbAripnwzsBBvNXEwmftt6po5gdrzShnP9tcE5NYK88BQdiTzDYYGAMGzFTxoBitUod54nsDQbcPWX1",
  "key23": "2NNevcqU7YWWD95P3heS8jjo3d21xsDog4yacXcbHmAzDAiz3iYn8W3TnSo8XWzuQqFpUvLkJWYZ29F4x8giWfZW",
  "key24": "iYoqeQVHK7wTGZo2o6VSkN5WbEZyNzVfq1jQkH7N2pryyWxLkZ4iYqJC6vxrvZwg3YwucGy1bC9N6RkTQVuHHMN",
  "key25": "23jkufb2L7LzpzPm2tWdLRRKWa3kW644WDbtJU6Na6itvwGCUQrAHNvxQaAEEwrAsxkWoAHfganbG9xpKA2HVdYB",
  "key26": "5qTmHFLxpknNN22DQsGa1XeemBAL1FF2mfbT6x2jjKJRUoFWLLDb2S6Xu8pFT7d8o32MDakjjbiBYTTzxXVft7Mc",
  "key27": "3g5KR6Go5EkucD3d9rB2McqXizypqYFuXugNjPYdCpuVE1k91hJVsGdi3aigF5Gf8AzHfB7VjWsfCDRGDDCRp3YU",
  "key28": "2LmopK1cGZrhdebyQv1ui3wTUXRLPUG4jRhaqnC3bPwGA2aBY7bsC35GAPCXsKG8t1grvyjYUXiyUukhsTAhWruL",
  "key29": "5zV3udUnapQeHWBS6AsuTqNyCsjkag1qmzKHheWa99YQDGJxrGEwDScmLHRu11Jm9B7BnTMtyZZhFR14zfF5agPu",
  "key30": "fjXtYJ4bAQ7hXQo7uKCzzULWx32VJ8b1wzPUoUmPNawm8Tc28GUzmpcYARsnBcfgE7H8LPj7SC2mCWMmFTCAN8P",
  "key31": "FC1KaHs3Pnv9KtSy3b7zXEBuqqMSST15uJyCYf9yV7n29tNtt6Xj6xG1Z1mj2VxRMU6uvL5nRwpRk3j16xzJaHo",
  "key32": "4uHaLsmxpVEZHYukA7WZ7892v1JbE18nXTv6w7hNWNXLN9hEDCt4JfCRJd1mHunZ1UzU7BHMu8U6cYuivj3HKomJ",
  "key33": "5wJGrA1DAMBTR3hr8ker5N46Pyg5QXGVPdhVtg6fD1kBtwmech9nTKye57eNkPqxTBfmpAJCCpDSb5XUj58L7W3p",
  "key34": "RofKnNp9mPAfYox4jRkgLqCXCzmsr9uHFriCjtMmQNzZeaPwU5ZSyEnfZtyHvEv2bRT7H3w6yq3A3FmbXX54FLV",
  "key35": "3w9p1ceM4k4uwRT3R1mp7iErx1oCQ12BuLLkaudypBEt5ecCvv4GV8JA47jm8LVsPMpmd7zsGFAwtNgfbxnWLPR8",
  "key36": "4c1W2RhFCn2VR7eigHt5nf2jitE7BWjwbMTHHMK3huc9HaYaXFitgaRcwCJiUkrBPXyKvzZ58gsThF6Amm9zHxKi",
  "key37": "3hNKQrpzoJ7WaKDNnMLuWS64yivvGhE2VAMRujgTSD6VWg2oNPGGmJzxSDs85WTPue1JGDAv5zDfGxvpFVUQCCjm",
  "key38": "3JaXhRVV1Lt9w4RozPuyCjAN34PpsLXWEGtD5edeuDWMDtUYCcqsyQDji9Qba39o4XGxMmq4qRTG6qcBt6ngwP6D",
  "key39": "2ZEbwEfGNUtNiaHxNNxCQrB5kgaoSz3UAbymHWbtp3tFBv4nPr7NG2CcRnsc36fXQeNKM4MPzz8YAMckg5e6UEzb"
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
