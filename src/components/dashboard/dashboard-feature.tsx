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
    "ZEabC6zrGnhRAaBVgJfwonuHXFjLwGV7Lk29bHnCfmKxycorbQJfdkrmL7FcNoQiPBEEioJxa9ei3TTCHp5Hbhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j94Q731N8ZS1pVVF1ZJCvFPixTCAAWsAnUuEqE9jzaVzJQGSwsd6jAP8DAAUoLq112quYqrcbNwgdGjr7Sybq7z",
  "key1": "46X9c6Hb3XLAejbgMX2h4JCVRon9z9wXCNNbZajZ8oAfV76UtVAVwX6HdTmVNsxmGtKz7RZg6UEqfEdCUnXWwK7J",
  "key2": "4wp7WnkcMzVUMRHq5cJXTa5zEso3p7KAfJ2A8Ka3tuA4tnQanarjwttDaryrPQZWuteRM46tcmLN74uUkcv8duNU",
  "key3": "jHVSmMZuCuccr7khjpumXUuDgBivYu13ZhPv9R4YwQL5uKdddHHQpruHZzkD2Qw1ekFrG5xvn7zDwTdxoUikiuh",
  "key4": "22PyUYwL6dLicZBoyVqrzRmjN5AfinviJzDVD6zM91XSkeyNxbLKdpQKrAyRdXLNVv1ezf7eRBD2x38eyq2TamJU",
  "key5": "UpqXsHA8rwD84NXAq5o6KpMtVPjP3gpzibzxtHNqZtX4sdZ9RZqSvPjZQFXLHVwibVXtMh3L9Axvseciuy3nioG",
  "key6": "434BgZgwRFovUn7N6iXFtdwXX3PNAcDw2iFd2Uuh4b812rZmd3b7Xkim5m5jpAkF1TyudLrrJFGCyzcxH3EmcuuZ",
  "key7": "2hkvMXFAvA2DwyjFReYshdDNYz5TttjAvyMXgcZs7V5suHzjwAf9zctiT5kdQYZ5scrjVipAX3K5CdnphGT8Szn4",
  "key8": "2NdxhBTfTZxdSGiVp7vNRaC7TgnwMnMex2bkN1aDSfD1zyobEi9ZeNByKEGhGCrprFDMZALLRB8D2gT91etbVMWQ",
  "key9": "2mH69QQmQwDoCNf4cPSJQUzoHmDybvADRhk4gUExXEP4XJ6WtkdAyMVeKrntU6e15B1pKvF4x9BkdeTyZCXh4Wfq",
  "key10": "2whjCqAiBFRWC4qCU5x9qzbYhW8H8eyQVEHdZdc4XfUcwaZEaEEEo3tVaj5Xo3REtcUDKW2ZrHTqn5Rt2dttaMvH",
  "key11": "3YQo4J3f3vyvwrgZpHxMZSHP3fqMCYQ4B1cxBK381isMArBMR15TtpModnjPw8y7kmHSobeEy99T3DR8V2JuYx4p",
  "key12": "3ZyUeuXtoqjtbyi7gfkzYxujLSvWwmEwb4JbQcxojvZFVKRfsdc9MepXYXnRmarR1e4AZvHHddEzwv3FttqdyMU3",
  "key13": "3e4N3frK64WSoeH5y4agGnVcSMBZVqtwf77RZQvh8BpaAXfzBUQmf9fXzDNZFUKhPd2UywFiLd3j9CKztYDun4h1",
  "key14": "HcJe2YnGEU6Jzans1dwJHZMcMqFNUzQrQVfJ6G7V2AxWNYzUSw3hQ2v1BUmaX7wuYTV4AcNYRPqwdnHGVYDQJGF",
  "key15": "5V1sGTYmgbcXjaoNLcDLoQXp7tA8e38TfrrmPPov8K6eiZ7cAJDsuA9rp1yovnf6sQvW8Pqb2KNQVGttSZu617cp",
  "key16": "4XhAxkT6YUMKLE6ST9Ly1sPYzbw1n618JC1eaMgp98SLAtrb4KVHZewqyqDmhFigGpBfFyRiYt9QSy6Zzb5scWRQ",
  "key17": "5F2M7nAea5hY9Bpa3GU2A58dFDJyqRGFC77ehJ8wcV1UNDi8M5DzmxsMY7SSnh4WdsnM4hV3zhNEMpFbLfmo3ohd",
  "key18": "4351SMJ83Acswkg47yDoBsMrHxso6igaGNCJyeEyErHY6utoVMgiNXn1Uep5Qsaw2Lu1RnZ28SENca9vh76qeRo1",
  "key19": "2p7sMcUzBMet64xAVLB3ChZiHfrHYdvtGuc7z5cAEDBvr6bPaBfPPRW17zvw1A1VHiiZ6LMqRvh6fEfr29mCxssL",
  "key20": "3bxAfBTcGVfUXUiWU2TA5QapdjGgrraRUjwEfkduKYsK2HGGEEMvHuSAr5FJadWsbATiaGohfCbdEwy6UJVtuUnb",
  "key21": "2gxEgxkqvWGWYpi4QCxw698E6htGu8p8xMqdxMK5CykvLtrHk7PocN6QzbZvBeutxRaov482fyjceTUN8UcqHVwQ",
  "key22": "32msSm5rJboyvsKe4dmeeUrPRziJMrVCy9CRBMiosTX9MiFTDmAnJKc2rSLSKnZ7nD7BwnXseKNxTPW96jvPcRRA",
  "key23": "4vQ2YVfsGWSsNc2sTeKsFA5WRDFPWW2ipB3snGB96N3oYZWxL1Tk6DEp7AigisqurryyH1XfVf8nca7BXh65ynFu",
  "key24": "4io9sJZhgyaXzBBQj69Gskh1hSWZ2xtWJNLjqDLeJuQmUSiqYZ9Cbt99VMWYnAvnrJsiMADEP9tyYVkrfMAzFL63",
  "key25": "4jiSGvfkY6BpeaBR4QXiN9HoDfb5Dt8YnN4Ae3F57Tsc8zXnNcV8uJY1MKrDeBJrns6B1cENLYjaAUDfJ4h86N65"
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
