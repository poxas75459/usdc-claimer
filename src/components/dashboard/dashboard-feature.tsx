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
    "5fuN9MXrmnrNc6YZb5MfX3rA2ArRGVtHM5iTxZ7zRRBoaR5NHyLk35gkDbd8MeFZy2D9DU2wS3y2T3AXMzQkLunF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38CvMh77Jt9rXdhBZzzi2HgRhpqSx9BpGmx9QFBhZ58aCpFi3TdG86f6tEzY3PiZ8kZTMGtZXxPmrrsJtnn3cqdp",
  "key1": "4FbtidFfTvEh2d9d26bwPpNCNmBNpWoZyVPDuWxJKf5GUPqRFxk7noN1TkFPSjmmETekSjiW8fcNKjGpNg26VB4Q",
  "key2": "32Cszznc8JiH8jUChZwQ7hQtBh6FveKy5BetzrmMGmxasT8hNQYcCLY57vNw1hVAuv4d4QXeBLqSFzbNJjvPVKBy",
  "key3": "2Fiupd3QJX98Ye4daEYNnN1wcsRywSB4f6cnmJB22KZ8mPn8cPn1Um58D3KxaqGRJr3hC4XH89zGaHA8Zz4NnQJq",
  "key4": "kgy1R4DA8hkTHaY3ZqJD5hBrTnQN1bNegxZkYtwAzTRTzoebLTeg2ZXRmKcmP9CdRQ3Cb5YhhkQb937a8Funko4",
  "key5": "5VhvZTFLm3mXe9WtpA5X4Uo2yCzqhfkBzdUHHB6D7RhW5K1CAQBQikuqnXyFshR7FCi9qwXRDVBUL3vt9pXTneEz",
  "key6": "4b5utZ2XsWtbxxDkHF6qkDiQcwqoEoXJMGkUSs29B6ju53e1848t9dwYhxwFN2HF9zJMdx9B1aeJbCz4EK4ym5Gu",
  "key7": "57cVXQRsm6jf4fUS1QomxaPefE4SHsh8wS2o3UjJnakn1tZ16EN38yvresNdAs3yQUyKnhuWbAnRtX6rSdSDXa62",
  "key8": "3JGh6VFfNwBrvwe1AiUAnJZeoNWXYtCn7ismANd65wkPJ2D6UhN5j9FX5hAocubZxQQQLSkxpDUYCns3MuebbHiE",
  "key9": "zDx9iucCnLAsPvEkZCWMyNbgwkJt9MEpUguR9Nbtiu89JdgVJJ4sMweekqQBBLXkC7BtUayVxUDN9A6xMSgQW4d",
  "key10": "5YNbRdnCmF7isrEnxRu7zjWSoXigCjGBGPak4ULWuW6Qr6kAopCsGAcGPHHh2kc2QmofHbpeZUQC5186THCgKEe8",
  "key11": "3Ejn3W6Kdg7e1LGo6eDKccXJuyBxRDzhhaSkxx8uoAhDnMRS4xR32pNAjgYdhGg57VnZyu38uStogHoeYgWu5yhb",
  "key12": "B9wGKw67XhmLtGH6BvHLH6U3CDPaXD8MJkWGhCfooFx5N2CAhwbAJ5X6TcNn2yPYJ6yh6Hqrv12WEt8q2xbvbSL",
  "key13": "5AbbLxhnTb2xna6LidHULHCNsuangDymgTCaGA77Qt5VF7bNCGoV8RumjtMZRW6dHkv54npSv4SPL65HHnJEufNa",
  "key14": "5VS24gXd2PsGSkTM6oEZ9TVRa8wE2MqJqH721aT329cL6tgdBJxYhggQBSEoQaQX42FjpGARd9wAEs2JpTpFyKGg",
  "key15": "5RyGyVVBr2LCiFn9bCeakrvFKoE8Y6SbTq8os18R8VR7Wftx5rfkFZftAJ1eF7CJb1SpQjemHb2VhZrwagSZeyV8",
  "key16": "Juoj4AHtXS6xXhaqGGRh4oxhWPoDar1g3XGHfNiKhmgA8WksN3kRgdz9SvojsxJfzSkokFGFqNVhRHDFZuPxtPx",
  "key17": "3FUpC7tBtswdncwZHGWh1R7c1YPvoM27iQCx3sTb1pVkDQ1Vm49ehjP7UVAyVsfvykcHLopSWhaVx8ddTpfyanMy",
  "key18": "1yGgXmc3aQv7VozxjKuLLmj2b5ory4xxQDVEVhgJ377t8LSXybS6mNFE2v5CmkBhzzXk1SdaR65Ew8f8B3TdpNb",
  "key19": "B2fpdxgQ6TLC4HYCdDAmGgfgcUCnRQPN4bGuKfdPSzWSCjdiiWMLJoikH5F8hCbY1k4bHfQpxGpzhcRyNioE8be",
  "key20": "4myWfs2Ss2N9aGG93Fw89yiXChjKuGHEBRTTiv3CX7MbPdveixbGQhVRtMZeRhcDkB51JZ6o4sRT5P92sxx8fZ6A",
  "key21": "5qv4UoPfSG1o2TkfCwDoezM8YhK7Jy1Ze9HWiEFpYS9kmjqxC3ZcTgJwvpigvZBSQGPNNv8vURtCAx1PSqv1HExk",
  "key22": "42ubeCvUzxp6LbYN1bAtfUiDX71RARG9mggFXEecWjd65TAZCxF3twiHn3PaQoYG7rsMHBBYwTMjuUnoSAvwZWBj",
  "key23": "5EzvCmiDAiH1eGx86Yzsazb9dJDtt4pSW2Nje6oHXtWaWfByRtqD74FrssvKkVNNHSsKoqDX4CVvw38ZVEecbKPA",
  "key24": "35Qe5KpVsEFGfLX8tiw2n7gjsZPuSGS48vBCtdmP5rZj2J8BvC2P26LpSEKmduLwhL5CphxqPsv7Ayb5ZhWcxqRV",
  "key25": "28BU5TomwcTjtyZTiYgbf7A2dNd5zBeyruUth7iE4ED9R9wYmtggRXDZ4xCRUqAyMZUGjdZax8jHwps2uFtYj4nU",
  "key26": "2DUkXtgNCuUss7beyeVnyz2rEKYxbaEc2Gh1mHkntU48QncgZciBp8SiU7BnMdX22NGngHJ2pbTEaXSLEvd85fP4",
  "key27": "2WqUBLCsyNktuo8eBRw4B5aJLPSkaeFkCEqkovVDMrcH2GMUWo145eSjjua7vYsPA1VqK9EjEMwP4N5ZscNcN39Y"
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
