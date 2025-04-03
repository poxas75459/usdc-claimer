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
    "3bNVF34gvBK6nrjEd1NJHYz6p7pvGduywqjMhz9wXvhHqs3vETf76exZThJzzi89GxAfAhLthpkRKcohXoNTtww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271sftw7SauC7wXF7MhZ3cSjioUGwo7gNJRKxZxPSfAWQwbvExAb51UzsntQfTebwxjbPZvwdAwzzVNfWm9ceWZY",
  "key1": "bPYBJqz3RrXYDFTXRNpBJZ1DHyZgYJkt4aE5491tuP7KfcJTykp4X1UqgDGH1AMjYipkeNDgbgkapq1yc6Hx4ZZ",
  "key2": "359QUvqnn6ujZ6SEuu5tVhcUfVjoRv3G3DPn6CwGwsvBztDQaLWAzUAUghi8kc7zkYus2gbo6rk3kTp6QysgPNF",
  "key3": "2C2tBrWDuyKGPArYZRMmpxDvtq9cAbFmCvHs6sEYZ9C5JzjY1RuWSsc19z8heTq3tFAbA4gcE2eUGRaQ7fSFjkkZ",
  "key4": "5dkaWZVqfJ4CzT3HjJi4xVpJfTpCJuVQ9FPgyoYarusc8WjfP7j3TaMqswhS8jHXfhRXChc5jtoAKjd4X3j1reVU",
  "key5": "2MsMHKtUEeaURJxU1nkP3WRxLSnJacyiK4orSx5jor2dFC1rYNMEHN9d2MGZdsfjyq1R9ZESnecig8hH2pUVofU2",
  "key6": "4voY4WRkzX73WJmxYJ5SnXMZ5fmFSnhBGcaKjx76CYPg19mSKfHJ8XSXeLQ2PFCkT2CPLpfaXmEeP5USvhqPqWwf",
  "key7": "5Rhy3wqkAgHQqbMdSm3AKoqoH5UHeSYt1WHxusGtRvzDfgkZarifan4Kf169pze5VJzXqMwo6LjE4xP2ybkJfNDX",
  "key8": "2Xm2vhyR9ZEsfcUediXVeUQAtLCb46s34Xsjwwi51KTDRrKQK26jv8DcDXVUKb9Gww9fycFxWEpyBEpDguyEdsvy",
  "key9": "5hF3SFtjHCARabTKFXJ96QuDB1KaE4fYx26ekdGVKujKqRUqe7deabUVsMHLFyCUMu8ZKqud3tdFexaPrYZGMQ5s",
  "key10": "2QBYDvbt4zSzkmVRoHvGi1fXWPz1bc5iAMC5sbUc9jpnf8YxEPS2jpSvXR8EBb7KV7rSmDHGFy4phJJxQqb45gtn",
  "key11": "3XPfwy6Gkrd2orupo4x4bEoXRt2FnsrKpqi64gRW26Qo1fbZRXcsCZbv48vdow5r4mtZRztfH2sL2LJrEBKjNTmT",
  "key12": "5RsyXUz3z27Bztf8fDBJjpXLFuRGr5v9QHMvBXsMigLhRm85iBSeekApgSizeeaLvLaTbCkwKBNBR5xBsUSfLm2j",
  "key13": "23c1A51A63YUDCJdNdR3hzDRXtnUJZfLjKC2JdZEyxnqD2hCLSaprjRGEiWBdx6XQB2QNc8QPp1fDwAm36SntHov",
  "key14": "5NXHgMkUxbrTJiZbfMakWviDrS1bH934nKUpD2jwNaVD6s34tudbXRXCYoDXgw6Y95s14gvafgu6ZaEft6vLz1ja",
  "key15": "2GyAnX4vmEegB1JkALTttb47pBX4ASazQ1cwDBvFxkYgxj8uuDPpmBuGYd2DNN1tPFJSXrL8XpJDmXb1z2avXKXb",
  "key16": "5eMBx8JJL9uoV5FkhCrANj7Y2XauB2zz3NWcse5gyDADkBNLAhTu8T3SepyjfEuUdHpuz3ozvkU9JzoBmJx6TkL4",
  "key17": "aKCsiG7uaAqh8vJxJMgcTa8ogcgUXc2yvoT3aeRHB6mLkwq36gZNMfMXixCZjR2jhBVgXT8Qupihnpbo2tWCyRF",
  "key18": "2QW5ZsdV5PjY6YDEQDWSAFPtRRLRpqbH58oP1ijQAPq8NDsfUCMsX5jK6pEFUkdDKYWadt61HJXif1xWqAAf5m3d",
  "key19": "3evNAvEJdfe44qgmwn1yjdZU3whMPuHSMJayEZrzfKpbAYRPDxSHmxnNzbEDhha31j7sqEESKfVVhRcwQrFd7Q76",
  "key20": "3oY6GXkmocm5qzA6kufkXJiEsfoTtN6EJpDRDUs4zpzujb8mH6qa9VGCt5WWxYcCnCFEdtmZoRU3xMBABUSgiMdC",
  "key21": "4j9LZCR77Vbo99E1J5m9KTa745y2d1ciiGvBobNmXMRaE3SbSXWXD8snLx7BBQgFh1Y784hVkGCmq7QnmV7mXWbC",
  "key22": "3hZuPwbKoP31HCncMVUzUQoadxB9SFwiBBgywqKSYe3GxgX1noPbgHpFcd9A5zZFmUK7CQHiDBpLtv8YgMNPaCnc",
  "key23": "h9xJm6MgoqTX2BnYWebQSc3FcubiZSequDmweHQVkuaZr3b5YGEBadvqXsSJG7L2dEu59y3XXUfBSneWtUqJ1R7",
  "key24": "3zfmNQES7qZk9sc7ELMF3L9Yz9p2uRPNCUFCcNLEAwxXz2xZAa5ATR7MQvEvchTauYiauJeV9jX83xxMYv2y34uX",
  "key25": "RApYevAhjxszvKCsaYffKb77gAwRwgFzy7zPCP4VupPynkpoQJwn8x1VGT27z763KQkD6feoyvsy9Qgr98NZJM6",
  "key26": "ggqDwyyiJ8S3E94Dac6jz1UER7VptreWZEq7EYBd1wqH8zLEu9E7aL4qheNjbNFkp9rQELHBhjuAw9dsmZqAVnw",
  "key27": "4Purshfrg2D2gWPF4DV2EoMTNDAkPVRKwZWfL9jYnUn7s3PA3bYYgh8o4XwZcjYQSTHgfFynScVRhTCG9jefbinE",
  "key28": "2YPJH8JM97vp1Tfqei6dijDjAreSzc1xEm8JbFVrNMmzJ5hR2B57PwWGXgpTwRNRquj6yi3pk6AdTFzGdNvabxTq"
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
