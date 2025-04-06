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
    "5872gsPT28yAKawPij2XDKF4TuRp6i37FC3PzMNKCu8ba1RsqWKR9w5FjpTVdaJWJkJZHDAyt7d5hsCoWMeFieuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c3PqEpN3cfCdTeLpnKdWJWoAxmDGYC2sZWVQ22K9wWK861wocQU8Q8Js4KTo459CpZRVWePhTBQ4YvK4gCW7Zy6",
  "key1": "677Yskg4Achy9MWGoQjVrhPu42H7VHmkB45Cz76KHhFYbBCLDAJ9xG3o5rLydcjZvfrYuUiS8mTa2TpaEZ9yuH1J",
  "key2": "5VtnSZMeCaVpPe1nsvP1ESChTW8KroYy65VQhXw8PvnY3gMq63xx4q7czWxDW1Hs44cEdE3RCNvTTX17yQMywLS3",
  "key3": "3j39WiW9g6FurX7vLVckC1wHzZ97qPsNZGyEkYnoPF9W7xFc3UZoEX7harwFFXk3F5RpBMdfYBnkEHfVjEzv8kSV",
  "key4": "31mJBfZYySNWxknZ5xjwC19DdEgShNmPsY3MN3etzcaBv5UwYyna45Mr22ArAXf5Ma3r8sSbdV5pPBUY4YHm6Kx4",
  "key5": "2ux637KmFbpTJaMiNs1hqj4gA6Dg3TTwxqMfqpivUz7zdYvkzgewJx5pzbtnsKTBzttTQ7iwdGyiKzg8dLm6hSKC",
  "key6": "29objpwCbBHiuRx8FqCv6ytq2dQuqiS3zSfsu2fxuz8eUcXkcao4hZqkGzfr7RTYt2o61yZC9ULBwmufoXm6n5UB",
  "key7": "dsDDUKEcibNa4ABSWSJgBhqdczLYFG98Tsa1xXRcKoLQK8yesLhwujRVFhNiZcvbuKyok9Akmsr4DncYMSH2hEs",
  "key8": "5MzFPNvdfpF6xAStA19Mx8EvKCDdCfpzyy9U5mKh3RjDaBH2oDUhi6Wbc7NDjfEncAcXvrVN2GvZnrPUog4PqhW7",
  "key9": "3xX7MciZd3uQ4TkicXBVsEUMwcXD5M4QaN1zEohgNkxZTHf97THv2wmF1FB2L6nQCVi24MnLNHh2d4jpnNEoH751",
  "key10": "2686PJpUceQN6Mhe93NFJg6ycyEcUAcwiYzSndFpcoPrAj5W6hinfrWvFFLGcUmRgQfnbs2iS8AaHzJhoKBMi1dQ",
  "key11": "5HNqk4wWTuus342AGLCoKsrCJQMC9aJuj2Pm8ZovVw5vzfBfjvtmT227QjeLd2ZVGdY2wYMh3CA9Nv588eXCRuMc",
  "key12": "4V7RhCuZof39pvoX5kBxPMbddAr3u7g7vRRSVmHVg6DcwWCpanpW6ijbJc9PB7iKRAd4AwgjKf8VARGripE5Re9U",
  "key13": "4PVJccojoSdf6XmnAZjeh8HwfjdFenm8Pqgi2AYhLvg6SH2TigKBfi6XeX3YzwvFVe7cRrozBdpspoHt7KRyrov",
  "key14": "3AWVqHWSH3yHN7Y8eY7t8pvGaUaUSCrzGVpuuu6BWjwBHuEjPEC58dPZorxz4FrJACAVGsCpFhKKus8JRXrzhHb6",
  "key15": "2Uaq4XgiALiBR6zVJrHtXSCuzyYZ24QLARvuFWbv9qVCv2FpsYbbFYDyndCwSQ3HthbT4Eu2egULKGAyrkCUTPYC",
  "key16": "4tRMHwkUUBsfPmsP5g9G4AJQTf2qrqC7bRHcXYTXh6zzn63QQBeyFv8X4HyRfp3FrFLsxQyGmPuWWXxhHacAD3p1",
  "key17": "4v5fAb8Ft2xyoaXmSbumzdsyop1Z8ebiFcHoSPTC4AVFuE62roeCSPGX8QHUgyaNTPVE24KEqeXZm57K31LjWTJb",
  "key18": "3pcacmZG6iwA2Yh26kLPNy5rfqi1SPZvRsKQjFb4x4bq5aSqGoehtzBFc9hQsDemhjaZ3PBrDW7bRj1w2PLq8bAb",
  "key19": "2oZC6mT4uQKzbQ8DenxtWWKNCJTM9zMe4ww7DjDebtytKtxHwQ6ZLTjcnhSdt4w4112PnUcFpBeRZj3mT8nscw7d",
  "key20": "2v2LeMz33K7JLuNQCcGFu6MT5CNqchuKcTBJpBMMguNj5c5GqKJHr1TPV1xk8u5AHMnsJj2mT6ZccMzfMbMsyyea",
  "key21": "4u2fGmvNPkY8yhdeyxbrrwzzD8VBMKcxusTzrqbFt2tpTdUNzTGiNPFEzkNnYZ6XK4syTuGnry8qWRhkTiymzrb9",
  "key22": "GnvPdScvx5pedvKmuRsSWg8ddWU44HbkXnHrCCBxZnxkeAV2S1y591chszbDDwDzLUbNqhKJTneixQPeGdaNSHc",
  "key23": "65jCSk6wq7vFYVwmVC2gzRFDyx4RZC6oh4RTniN45a2ahXvJavk3RDAhppU8m8b5qjk3U7ULat2N8vFWfAYgsmad",
  "key24": "2BJSwSmCJy9P8drkoeJQpYt2yUfXof5Akk46NbDauknC4V3GeMx8sYoJ27Dq8XcfP5v5QTsptWVpWibWb3ekNXdi",
  "key25": "559JywjBnCUD9cBEDEc8vGh7Auod8VvxfgqCeSLjSKQhJ5s2vW38d7TQtE2dRbQH2fsB5qh9YSjrUad4qxJzvhQs",
  "key26": "123PUrhYEEYqdRyxoMfWTH1rc9WPJPs5Yqe35RrG4SD7QTxNqa69aLSfDRCRY7tUyu2pBKUSXsRZZFMFtz7erfJz",
  "key27": "2yR28Fj5vV6wq62uj6qQMKcmDc2TCFjtYbZUGJHMmekN39aKJyxyU1zoycQSHvMJbdRcoKeP9Dv6wQhXZsMia5bH",
  "key28": "48gEnabbusVWaXKuyyGpJk5tQySoJbNrTswUD8ZbgMWhne6Bt3P5dP5UvCjeFh6YpzcnsfTuV52Ue8ffNuERppR1",
  "key29": "sgyxqjUV7MPSkb9NfQKX56kxRgKnX7RHRzucRSj3Uc5pdHEtbwjQK6HhUAv8wCnpEZg1SSUGQQsqPMd6A5M8uxW",
  "key30": "5FghDyfwy7FkryKiapqZqKyJH7ahgUgcQyjAgjHGKdZfhva3kxZ6eK618eSDrD7m5h9idjYsWoAaqMF5dVe3SaWe",
  "key31": "3uXsxxaSBws92rZtxPC8N3uUJX2hX5BfRqJiq838U12dyzL33oFBY5eLr4ivR7fZsJoKEb5g6VULDUDtCSu3wjL2"
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
