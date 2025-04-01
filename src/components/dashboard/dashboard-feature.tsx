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
    "34LbbRaPKMwmzjdEkqz6h4AkbZL9nnc47oYvpMCvW7DB4Nc1wTscHaRnTR9HRNzhfY5P5K4CVH5u9JfgnVm3J6i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47wR5sAkPG7BeS3zQLoZ8ktgaSu6TQbya6aTNSab3iJREtSdbdTr61Rq3FQk1egB71NsM3yrg6ycRzXdztxNBbSC",
  "key1": "4bZvV8RgKdPDbrirCM1xRkq7AjUFPsBuDeVhWhLaNkujK5bm6pdBAPL7uEKfDzbzXiUXtcv1rKtJttaLsqHs55Uy",
  "key2": "5Nrz2gXbwvcASkvcRb17X5ir2Foy4wrqeSSiboo4T3ePRK2EKe3CRaY8ronwjr3jhFXnrBScvhjN2wYXvfsiLnfA",
  "key3": "42r4vwkrBUh5J6Tr1Hywk27EfAvSn5Dt3wKm1r5bHACKSsAEaDz2Rij2oGCz9VSSTWF4wYGP9Mvo2MpQMBAYgTWm",
  "key4": "4JpXZUhomScH8NKotRyFRKf3Pnk6jAbfpcaexVWSP9Mqgaz3f2uZk7ZsxN581Uh19SP5eDzAXpppuZuLWugucte7",
  "key5": "3J7MvcUTFfNg5ku3s198CGPKKZuzoLSwArE4i3SHhn87uZ2DebexPv1FkwMA97kV59aHDfVJfbNrWocAppr3Moqg",
  "key6": "3BYBzCgtCs5yYPh3MwFtSdYX8Uu7eLrVJWKMPmgAkebPEBvv8Kfr8s118rsW2tSuCmpmeLEPi6ucdv95Cq9XGGgR",
  "key7": "YWc1hyQvjQVbjdYt154CQY9oMhDxatq2XALAFdNxnhw6gtsKxUCvghXJAZoMaPtULGuv291yAgmMAM8k5NLAFXQ",
  "key8": "5w9gC9jwKupykttziAF3LAyJDb5x1EAbuXh1h1YRGmiW6XXudBYdsr3JSQYkawAebXbUg7Qxv8QxG3FBwh8K4Ff2",
  "key9": "3tKDsqabwbTG2nM89abogv3vwEbJV7W5hhEKBGJ39FMr2Y2z5ZEV3a3u8ke3YeMm4QyHC4panFcnRPLQjWQeVDxa",
  "key10": "UCQnMeqRD5hH4F5u9QkLGBxWraKGXQ4DTWsKf8nwFsySa6ZDnHnzdoqMmzsN3wi5E6iqXH3bSVbx7iA7fGXRbk6",
  "key11": "3UBv9SHUqsbGj3MsUp5GiCE3u3VDiRj18QY9HH9fiJsMYTRWyUBSKNZjwh488X1SnUmHNgvcjTpHBJWXoF773Loo",
  "key12": "2tJcv8G1krFmHFHUbcrLcXpRJm2eWSpD9uwmQDZ7SkpXWNUbkdPLKgx5qttn1hgsGssPEX7DiaK1nVLYMgVKTCQ5",
  "key13": "6fvEscBsjpZYPShqZ93pjKBDWuoxPyKdMNv9XTJa4KCTBVDjZFHHzUifyQvLobJeHnJmtYYNni9cwSB8oqZQMNB",
  "key14": "2TUFkSUqsY3MYzPZLVmfy9YwEAifsHx7vEr6X1N1ieERXNHQv6rmX4GouZbiURxznguapgCzfjCW94JsYPfcZf9d",
  "key15": "5UMaj1zVVpmoKdEdd71DK5g6e2DjChvtt54cKsjViFG1xVSjekBRpqnBtoQMoH3eDkvjcW9F1wV32KhSNej4HLrn",
  "key16": "5r3szUDvVqHVhTE4DY9aKNEk14RuJaG3oFnGvpZZmhBpfswZ6YMTpaHL4c7QfNLKhsHWunhmWqo8AYhDbKdirLxB",
  "key17": "4iAhH9ZcXoeryowa5YT4KDBVeocYZAQ1TMrPRTsfp2zdR2X7xQLSFftUxtVstoaxCZBVTsaJPP4nbesZZT3CFkLd",
  "key18": "2HCrkYnjqEQa2TxwAeX88B1RhriXXFwtsmcJDZkzrJ2ufRUFPr8GBMhRyqzd4CxBt39x29EV3CVKGp36dpH3Nnwt",
  "key19": "1pUzAn7wWroy42eCsKyf59hcH1iFyGQAjPx7mUQwAXpHvxL33UZsqhFuXdGFfc793LpNpTEiSc5WnHnAwdUfudr",
  "key20": "SnQ9GbFa5Ge33XJaQ8addS8RBu4C6HFX9RUnMmJWaYLjv9t2ZM4osozidBcqBfTsPxV1oZjtEYHEXFFEkDjaX1i",
  "key21": "62sqKEzPAKV6DGGxGJJunvnZ7QZckQQM8amYtiEPN2cRSU3qhECjz3cCrKHoBCkefJGppbQBMXXG9Renrcpa9W91",
  "key22": "4xurih2HdkK65j9rvA6qVpTMvGDVhDsFHkUE4DXKKiv2R2q4Bvfj6eyrZvFq5ZPiTuDf5TWBuWFyfJf8VWsGWBmF",
  "key23": "5egmn97rWLv5LPXcUtXKxVf6Kz2uGX1joEP2otoHKYRu5ec9hXzCGG2VuoW7zfCS5PCejVujw8R8J72aRpVAztFY",
  "key24": "38UU5G7KC5sadX7JWqjTYKaa35Aa7ET3oWdzoTiP8rfivEdMcg7kepiDF6Pwz49ehv6dPLXf56zj6bXPRtHA43xF",
  "key25": "48KifAXpkRC4p8kLJ6Vtz2McjBdoPkkGXajFGuf8NYujqiVbyycZbjDEnrwUuYonfg4Gi4qaHC2kvdgkyPzJiPKH",
  "key26": "3t1X3JLJPG72muia3vx4FFaQHpFKknubzCtepvFx2s5ATXxRfbNSoBtQHvt85Qz5Wg7C8St6uox7dimp9mh692TL"
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
