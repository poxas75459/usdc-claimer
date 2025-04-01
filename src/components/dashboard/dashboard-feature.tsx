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
    "5KeHtyso9ffcQnakXvsP1JroME2bgAMtbri8gLJsCtigiQ1o5t1JLfPxpQ62sq6RhJNkCci7p4nepBr5xJWQsRTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Qh25akdrymxcAJfcgg17XBDjLvjxEqUf4siaRkwwrsj9njkVAjtdeCtSTRi55tUuBpxiiumqxYnwJEVjPV5dHN",
  "key1": "4fxtvE8JZ42j7VR3RzebN3grxtK2AE8knbkf91jggNfs4vasGBPJ25hNNcKF1BUZSd1nNegX3s6PCHfqWm6vNen3",
  "key2": "5yRGFSDTJuJy2CAmrdruxSumEDNKUx269vdpYZEA787UGyWU5LZJieEaFeT4tQ44R1wwG7mJaLJUmP2qRuRvMC4d",
  "key3": "5eTxF3Jod4J3RBDdbEiUHDgXiGWhHboLnYtV3wqnf76PgB6ofrCXoyqZFNXroaVGQDzMH2RxRVM7up8pXXnEwScS",
  "key4": "3SsELHjqEnwfK4U4Xo5qsPwMoEPdqGKrRoWzJZFQFfGuy577f44wbVqhHirmsJMMn9HE7AFAT3uVTKEqmsRbbfdP",
  "key5": "zdigWBRmyt9yVEM5gE7vr5hEhTTLoet47zvJhPeExwckey5DnLTcxKCTVzKV7YXeLVa4EZSmk6vQVTNy9gC4A4F",
  "key6": "3VxbR7k1bu9563TFKQBs27R1omK1gk87YP4e2amhGBEtdEa23tyMPESj3jCpea414Kqze4fzfiypN9Pcx76kBMrx",
  "key7": "4jzyPcn4dMZKfhwAUjNuccEEaZDHCkwphRaZczvMDQ9rPSxqtnUJ8nyMRsntTGKjDR9rqGHX4Bpx47FuFyBaQpT",
  "key8": "54Rem5LPuV3RvSQsV1Hfs3CHYZfS1pLgzXPyk1GLk3tUW3GukrQnt75rqAhkWbEc6drq6Kxos1FuCrvGoP1kX8un",
  "key9": "3cP796FVpFy81AeYUXM63pmJDx7y2WxHCzybdoqYpqC9zNxoLz5f7dnhBBUoWiN964rFt1fz7bAqohTfjTC2D5z6",
  "key10": "52mQuSC7Z8TtEFxNbh7yxRrMtArzXDoni1CpBqQ86hTSRJHaqXykgnwLgMsSQ8MY57AoCf2GrCAiztwZqTY6VvvZ",
  "key11": "8s8povEdximtW324MB9EpSAyYPsuNTAR2RH1WPq5g498xJgibKe5ukxR77w8bdpXu2PHgyRSN9qCWwui9jHU1pY",
  "key12": "3gGuPaa4VJWyiVApgjXWBFnUc6mkFxk1uj9ctxUMbaAmit4tL3U9jm4xqhsyuT1t4eAUvMMY9rt1zaTFrJVQwHiD",
  "key13": "3w4uwqFjPPQQJnF59av9cDZdhFidRWJhYJZZsJPeT47ngXWL3EuDbbz7CSs1iXR3ECbSRCAe6kkFsXgqvMZCMRWA",
  "key14": "3A5dzgTzAJuWGgNFEPn5t7wxXX3sqVTkeYJad4eWCaJKfVB7LHsuwe9A3M5UQPASWteU8Ff8nf1wEWh4W9atjTUW",
  "key15": "25neb3VsEZQKvopnD1LSwFexcGCEtP1551H88hnmSFS8uRSV2WXkGascaTHKjmdneJ73Z5kaRjpWuo21CkoBK3Ts",
  "key16": "3DtDMJPRKYKytr4NgxMqoTntwN94dJcYioVm3MXcMLLZr2qjwv2J3D8SAYuoMM9eMjoJnXFTyHBjuULC2g2cy91P",
  "key17": "3tmV5CPumEN96ab7Zx8StGnRTz2bGSpQYCFj1xTNGGJcm2hc9fWWUioUbzKiMJLSgkVRPzEzza4JTSiMq6jjTtre",
  "key18": "pVqhYGaPT78DLjfRjqSQYwzsajWqx2rn2NRFX2gRj2RVrN2ioDkaXnuWFz4EHDPb2SVhSpg1LyxYu9uBzMDKjuP",
  "key19": "3oQiDbKqT8GMagWLgSiCPCNnKp3CDc7rSSdE8sQxG4aaYTuq7v6oV62gN3mE23S2tjAusGr7ne3zLbePHa9CzsQ9",
  "key20": "23K2KtvXvVYfcjWdVxsahQcKXPoE4Rb5fLtLpmwriG1sN6zU8j1vWWFjcg2Ls1zicXaA4pCFcfHDjuD7hYpw4W7t",
  "key21": "4QTtPiiipL6fAbgEbDyaiW6r98V2V9V3ocSvN916beQCChDKmRnoJXpGNQ3m6VY8pa2GR5GDYku3efy96nEhAEQb",
  "key22": "2C93JL4zi8HE1744dckUvwWiemV2ndJEyHs7PHqufioxfFDdYzXY7s3Y3TCjECCUrBi9V6PV7WbKuwddU4g3eLpU",
  "key23": "2mVc9QjhuGcSKH44AWGpevKALqrj86A43n7b1vkahmtwx6znwDZcvUvBqpdZYZreGaFCvhm9oV4PphDAtzGp1yBS",
  "key24": "39MvgEFH6a1Ug6jTRHGJvRJXF5CeqVpBUK6wHU1fLeeX2MQ9pKAihrouE5zPvSArd5edqzNV4Xq62hNjNg2c3XdT"
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
