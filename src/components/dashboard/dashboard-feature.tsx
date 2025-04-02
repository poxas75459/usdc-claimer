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
    "GpurdvTbrjbZFKEkrwLfVaBucePnCU84cr6LLbguumeVUbRR2J2juKxEFEXvTDkrcCKjH4jUuTNcJtnkYNy7DJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxJ4UdUuBtMt9Q6YvpTckehp8xKuWbpEzGaG4X9FmAoW22m5eU1Zq3A4otmezDyrX8ciCFeTMTfhYx1DhpWreRz",
  "key1": "ZT3MoesK2b2QUCDRv9syyurm8rjLTBtvV1cdtKjuLhZ3nV6sa6TwTQaJDnyNCRG6xCR1BhMUqdTzXrEhpcRi1S5",
  "key2": "5Z7QQb54SMVEx9HprQNFfRaSvnXSHdrAUeGvsb3rFiL4ZEFcMF3xzRTvKtzAFUAzDvWa7Q4Zj1dpXWK8fFXuyPvX",
  "key3": "5FuhAZEPu9TXGwQe9tHYQ5Qc7UUuMqY484soTgGBhw9wyDvf1ZPF2tDE8BgnvEntYDXSBJGk7jgcAHXj9MV7nYFq",
  "key4": "4dXU8F3ezPPmJ7HE3Z2sBLZxUh7BsqZjFbfJu8ZaEAXa5cx9PzHf5izQXa8J7cYhoxdwDCVoLeunF7G6bKgfWMeD",
  "key5": "4VHHeQyLthmmGTwLzbzyYFAmYv94Yvas6pggjM8VBWCNiWjkoi1z4vTHv3Rx6e9YdfmNWMCj7gTSMi9dAhsyNppo",
  "key6": "4yTzmhgtcT57ng9CREQpgt4oCycoYBCrGEVmpj3nJgFeEuVLYi2KVhkyzKdk4QKYPuhsg8bjCjCCD29hUpVFUNCa",
  "key7": "3dACnvXHdBMrx9HTBRkB3UDeKTa23zydwmRBbN29UD4rbV3ipQr2ttFymezQFecFgFtegPdkJpEZg3QKW2783Drg",
  "key8": "4voRCEaXzGh1hojtBBze6dsETo96uxzHpGozsG5bapYmFxr8f3bhzDdkpfAsANU2SpNkL3zgVkgFTK6ac1P3TDd4",
  "key9": "2t8bSHqkSSSiUxSvL7wB3MoiH4Uuv7tTs4owB4acPJEr7NJq8ERQJCSueV7L9t1uiRrCWfLqRBthe8xKx1RS7Cfy",
  "key10": "4x9R2xofYMEzrAouB7AsSJzTPcmnnzB6oQ6Qnutz33tFs134M9ff4mJg1K3hvuKWcMAXJDFpo147iKXJ9qmLiDgb",
  "key11": "2TigNQxbFhbGyBvzas99rXnxXE2x76GL8WMK1YBzj7Ra3wpMKMk63ZvLjEpWDyGxNfyzUwuT1iodzJe5fDcGT5Bg",
  "key12": "5mFaGrzwyvDrS5EVznq4Vc16J5dqn8QysU1Laep4Pu3wN2A5FzknFLC6AAmrbwLohr3tx1fPy4SUgr3Drrnb2DQJ",
  "key13": "3K6xoStWzG5xJS8z81p15Ghc1e5jGDmg9YeUG5PXbQ95Hpeay7rN1JSALFWJJYWSVeWJVVVgXSwq4WMhAyvRsQz2",
  "key14": "2bcGUAPSfC3qsCf4m9nJvF19JA6p1uR2tekn9s6uhrftHKDoysnmkxsMqbbJBQrTwPNdk6rVaNKXd9ojYt2QpbfN",
  "key15": "2whp4wTgNmtLceoMPN3ZvVhqWad15eaq11d8Ewwyvq5cdfQKi3GkJucjT4H9PGrx8p4PBeJ1hj2kL35KJ47L1YGG",
  "key16": "21hHNCW9n2RKVECd4aLxejxW6ZBVhCGias2WucTvfM7f3aUoYDKjF5LzGpy8WmEMCXkMGPdHBsPh7sRsn6JMfAmE",
  "key17": "Cv8JnYxXoqRLbfpuZNPaTHSryrQx9SfGBgssKtbBeFtZordAmCHSPmFRZcrrYiDUFrqTtkzHH7j9ECMz8y8pBuR",
  "key18": "5UhA9TRKYomGfoAhfyRckwuNaMVjY9kFN1zq14ecHZox9W3VDVbZvzAKqaqwmad6QPQ4q4hnh7FmF25ALG6pCdxe",
  "key19": "4Fg3SQt9zKaKy8KguyMVtS4KJKmxSbvVeAwULZnE4aD9LVdMd8Nj8oRALBNvzuXhRjdZ8GGEARNyBPMcvjmL85Sa",
  "key20": "51SqWPGQN8EBAasS1vDqwdPM58DGwCFQsr3W8SmJGveZ8rkRG1sGTADy2xTbEN38tp2VkDTnNbfwNHZM89oSRX9V",
  "key21": "3uMacbJbT5Q3h6buFqPwbAv6vzySVSiFgooNvU9Hjwd8ZjEqAu72fwest1nPC9UfcERKmYT1PQ1KnHPbJvDNeiEX",
  "key22": "5RZhuJ6BmeLzKdRtUvk3yqJSm3Rh65RCVmweRsXVhLcrfR8t96Xs6afKYPCi8aNnpHaTSoH937N5Vp7SRtE7QMTx",
  "key23": "5SVuVQmDM62KLPogvnAfrui9NetJ4V1oUSBZ1TLpFnMbsKjs8TsHcZXx1ggHzLp2uuKzPAmgrXZwDRabrh2C5XaH",
  "key24": "2633Tj8jUbtACxtv8S9n7vWnLnuGqJboJPQsXBwvVCwx1qTFzMnKf6kL92T8ZrLHHmF65aw5gP5MxK8UfKV3VALH",
  "key25": "2FxXPF8jA4J2xnWn9bxUXoHqduPD3HCRzwud2GjQn8hZ59k7y9orHcbvQecPMVW4fte6Zes3avFji2EYnKqk5UjT",
  "key26": "3gDEjaMt5iJrwZ9FfbAVVq8ArmsxA7Fsnv3DQcBKLAUHdPuFwNAWBmouJ4dV5oByL9ArWaDY83FycikShcRsf34g",
  "key27": "4BYjbW7nbQwJnh3J665engLEYGZLEgsV9zVRELAf9iA9iq49xqgG7uwDzAqbjav1DkW5ntbBjyTZVrCfbnfdE6cb",
  "key28": "5QZuCJ92sEe8i42KwrZq5sE6Nz4uBvaidZYR4S5wz7tQSzyHxWjyoVWqduTU8sodmosW3PGTdjqnTtRgWSBYDc6F",
  "key29": "3m7UiEfo5Mhrx6vekVFfUkPNoUKCdCG1gCy4nKmb5GhqY5GpzP8n33VjMtdsuYaMLG11HjLsp8NdvkyW2qAWkkwu",
  "key30": "43NWgifBpAoC78KJofkQdejwgzrAbtGqRAAggR8o8YZ5496gDHTot7LdzbsSbZzLSRZaBv5bYs4ZijQJqvsLyw9D",
  "key31": "4baTtbCqth2E19iwirbbK5TMsT67MiX1dJb8SgNH4HEs9muE9QdcGBQdbBFf3Fho1C8Dpt51n6NwAMw2UR7mXFTP"
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
