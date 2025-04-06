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
    "Ypn3bTRxLEZxkkYVxrswz2JY66svYGBFmcLQDxcHwierXoH8rjypTZkBNj1SRVjDTMNc7JhyjBESx5EoQX937TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8dJpd2ih9XefUtU1a199HtVqQAqCLD69TzY6YtyEUyA14DEGaHwyQB3NKmcXxehSDmg6XNC1rs9heXoiNHvhae",
  "key1": "54ADYtWx23jZjpZsJvRfmpnXAm5BGeDuQqxPuSmeFH8xtbe7Aqd1woRGAKMDwUP1gthn2nHb86WyPMCYnTEw3ZhP",
  "key2": "5JDA9YXAKXtBNgv2p7EE1EduGrghzJt3L8XmB7NJYB6Lu9zoXSKnuW1RRNY5LC32XwYpe9ZqmHoUSYSbPmPAmeAT",
  "key3": "WXd3tAoyP6e6CcEmhktdFoFjPU3XzcVWdi6V5WZaq6d6jGQB1mbxd8PXDnLeufbzv4xkWoFsHYRZGqXAc5vfchE",
  "key4": "nPDHxu4issj6xeJdjvSQJ6Xsy86gci75ihHKHq8g5gC5Ph5X9k7J25p8jX629e7exQWGw2oW5uTjnuyBNMMvgZi",
  "key5": "3AFhRXiFJxBRzLNkWoR33QUvRBxM9fNeReafubuRxcsJ86NBB5wrU76hLQXodvHZLY9XPMDVoaMg69Q1iWSB25RL",
  "key6": "5kTTWmYjzK2t3sEY1NHbqZXwoR245qnWbBNQtbKCUDxkM7ts5yDyg8dqU6jcDdxscvu6EZ5hqPJ3kvUNS44wX4Rm",
  "key7": "4VV4GkSvPFsLhi4Ee24edT99WfqbYgMMgssckxPp1Ys22G7MnTpdjmfaADGkWN6iG9CpQwsKL6n5rSd7H2ezYVVS",
  "key8": "3W9GqVyH6FHyze4Vf2cW8Pif4Nq543SURV7VZugMq3N7B7F5br6PMBTusNF9EEAPptURtMpiCQgAyyaLmJSF5DZZ",
  "key9": "3dt1bfxfW54AYMpQwcp61Q4XmD4gRAMaUKDNhNQm8nGjB2DQW9rwY6X7oAewqCApTBeYc3QKd1NcuaZUE4nVrQJt",
  "key10": "D8gtXFrr2aoLbhmM4SnZDNoQUMf7tZjkdsZ2V1ZcfXGKavFypgTQbf9sNLExWWJhSdBmkFJngbk6WDPxX4eBuy8",
  "key11": "4dZu7kGZmTgqmYgYWgZYYC8qu28i2P7yRPCwYuDmuUZ9gMC4dHkhkpPNpH3zGibMCv4myV5VR2w6zpYphhdrSyvJ",
  "key12": "2nKU2qzBUdRqFYQZb9vb3krStRZoaF1kY2irWM3QpTSXc9t4TzCxirSE6qsL4oUf8AVXehCm8LnKFM8BNRyG9kXe",
  "key13": "64UBtjjbMu7QizYgTeS6ACbcLDCdqXV5HKjiTPcTw5QGnVSMm2ELhaNfQtLZceeHJuWLJPYsFzFxVUB72s3GfUZQ",
  "key14": "4RQv6shQQLyjeYZiJTsixN1nZVttpEjK9TsTZbyouZUC5WGVhsxWa8dix712qwWczWAVc49oqFnk4pjwDT8BwzXW",
  "key15": "4gmUmSz5runWG8p5MNcpmpNxefeBKM39agmjsgSrz5o5jQhKtrjqqiVCDE554ydQhawbLU3X2brWoaR7LXSzD8pQ",
  "key16": "4TFBYZ4LfG8FoB9He5LmEBKd8eneBKdrHvJaNUn3GwaFvgU4Hd5ZidQamZxuFjDj2zbB5AiHVPvysHj6tYgqhHwm",
  "key17": "2XsXE8jtQpojai2vJyg3qfvnvWq1aCj8rpDrQRswbgYNfD3medw5g7onF7m7EF5VM2V1goqQSMRybsi6mRiEgk7D",
  "key18": "3iX1mvBtvJmYk1ZajSvErULusCX2D5igwwzjyATXKp5teWJiDptLgKrJEtaUFz2dbatTCMPbUteA64UBpQSVtwBF",
  "key19": "h5tj3nF1DcwyiLeGfZZNAhqyuLCzRUhWMUzyNGNn8sXf3f2urUB4qtdmkena2vTfcFnYRs1zmnkk7r58Np4yHVZ",
  "key20": "5G2aLQRxxonx4tNt1FWcCNQrDYcJX5rCZ5tp6RadLSzaKnvVysMro8QcJpvPk1fCvEBkVpzAs4y48GM6qW2AnSxx",
  "key21": "4N3rUFFjDBbGpJxgDcGLwnXivZMuEA8WtQ9XiEevxAaB7qPvegZ6TJUNmNMFdvy1kLHsjL23EJgdpnrLK5Fuhtyx",
  "key22": "4B5PwSxtVa9pPZhc1gPt2UejqpvJY1svoRwfTpx7CEhLSgPDqWWsTaRMCqh14y3ZGhdEwkeX2aBtiVm2uwkV9UDP",
  "key23": "257FJKmguWysoyDTuLoZLmViToHzZoCdMAiYSa2kA5Kc7ZSCFAkazeYXemHHG5GErSokqtthQhE5JPPmjzQP5Emm",
  "key24": "3HwQ7eYpV5HoLT6BB9a6HbDDEm3YtMqTfrqRCbj4Zq85bBTmNqw7XPTDiiRp3KMtLHGQoQww9BjgBWdUy8k9zeBk",
  "key25": "4cvG6yoTM46eNwKX9XAQMWfhHwKAQ7TBp9sMWXTTSezkBvMSfx1ZqGpdy39XRfVqocwMbWWqiza9twBLgrzEkvKD",
  "key26": "3vyjUuS89ncvs78iRxtHVTWJnCS6c28vWGbHtA9uYjozeZh3XboQJ3gSqR2qs18UCNmJcrbJ1ybeTHwq8pTEdBNo",
  "key27": "aRAHjM6fvmFAK1VYoiL8cp5v5mZU1DpvrEfF3LfWzUHjVBkZX23qUBN9H2zNQZVoyAcuKqKDzLxa1Rm7Z2frd8h",
  "key28": "2YdN7kmYqg51i2KoTktf1VTNzdRyjgGkAisizCSTwtb3sfF71z37fGHtQVu21dkMiW2CV1dCb8eur6tKuAA4EzpU"
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
