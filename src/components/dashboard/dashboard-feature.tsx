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
    "31DdNowe3s8JcjFRaEfgY797wners3jySB1zhQV8NMMazbQTKFh1nYNAbsJyKmY2g6Et2iXnG9eu4ZYT71ouGnKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gbNfaLMyQ9GvvWMX5NMXMazKnePTZQHzcoaGC8Y4zetetkrCC6jqZWxVXyxbJ1fiwgPJwKFkmGj2ss2XFa6REeK",
  "key1": "4vXP2mvvA8YJ97HUfXwstsju3MLe8ULEWWhmGRKB6tUrV752uw7wD84fhLPNm8XbUzVve9UAreuRVikYrFHGwANN",
  "key2": "3W5RBUC4WxCWe8BeVFdYEeCU7bfpKadBNZfSB25KhKRtEtkMUhHR7JtSdnJnkohM4EYN924QjudPzdcgyZ5MCf6R",
  "key3": "4WfHG1DyaiZZfk8jGR1bGLD3ETe3t6SWbF5Gh42juB9U3zPpdsux418TCaN1HXfL8RbwVkdBSpAwazq3Q7D53ZoP",
  "key4": "2Z18mN1hsSQGteJ9ayBixSVPfXfuera4Kz1UDUXYJtZ25LNBWHM4oomoZH5ivLvT6ZEauTUdibbK71DLXdHxSWmj",
  "key5": "435PhmfoDhRDWfYczfCFJLmnZUUvQzNh8qgmFE69cNaekRag5bNeGxCt2rhss3pivFoMsdoC9gQriCDfTPBVjvsg",
  "key6": "5w4BqRhXmVLdfdE6EcSd28b4DhFgNzrhnMzdiknUDfirWCdqVQaembU7GfjTjSWN5fVRxVyMBpXusFxDDoNj6jJR",
  "key7": "4No8zHU3L1yXQYUsGnASWvH2wWnGRurxAa9ih4mdp2tRerb4VYRC5dQyda48gPLBKjJN3J2TWNCz9BtrBo7njpYx",
  "key8": "4yQNroTApzzLKDvUKj2aBbS2gXX1BgJvgp91SQu8SV4Tpj2Wt26jpAxyYL7XqV1LtFEZwpssYXVAJxQoFW5u1cb5",
  "key9": "5S73H8YQs8BxFwrowf9f6z6LuQNAC6RaTtkFBUtAUY35gnA5udSa5ySvfAoyWzA6N9LpcMb85iQJGvWAotaghJQt",
  "key10": "2Juy5rkTS4czTS8aven8htPnn7gDiZEpY6GK4nJHEGTcMgZ8nBp2wPFtLdTSSK7XisHvCXJhcFKATLQth7gToqty",
  "key11": "62YYoG4s89fAzPFAyagxXyru7qjJ79sVPjq7rKxgx4DsNYnoHWrYyUzwxna9LVB3MYvYMRWheC6xQAF3KFWPVDJd",
  "key12": "2AbCBJdpr6o1UDG24i8KDZujiho7idFZtL8hrmwBZiE39LqFvjbp4agXgXqKybeJfGQmXKCM5YdD7BCDoaj7KMbB",
  "key13": "67RCShxmmRkNRiwLQYAEsLLFxfN9YnXntaKsTbzQNXtzUDwmwThQ22HFQu1jTQbXaZ8XkQNNRQcaAynTLaDtVm5x",
  "key14": "4k3pkXk8TDuKp27a2YADzcHuoHzeRyosQXSo4Lf7RA9qtHznrYm8vch2W7aBryyu7ed8uc9WhupLXJZTxJiVEkoe",
  "key15": "4dUGyTDRuVcyY8JGST5Jfy1pK5rKw3au4T5kdENDjG37FdQ6tCj6XVH42LQHeZESVUE9nLoQVKsieC71GXi3kMD8",
  "key16": "kzf27nz2heQVjobZA5VxdM4exAe78MDsK9rki8stL9hqGCqzeU7uMvmQQ3pT6Ud6PQJ6qBKSedA81XmuxbPHHCp",
  "key17": "5LQfrib1gDbTj9BXjbn1Jm4XwUCPwEVEHcLixb7SLcG7skZm8RyauNsg3s3Pe3itLH5ZgJCvQ4KdBTbjVRsjrs3N",
  "key18": "yJoE5c67t7c2e9cZhBEoyfwrkmXbiAaNuoDvsiuaJwqZ9f7VXSk4rGCUq2LHcyyMLeznKseNubGL4u9XCH2UdCh",
  "key19": "5VUEeLYJoNtMdojkpaQyD2HKFc8xjuMa9NevVgWhXRQioPEieozGaTzkssrRwkyKyucT9SuXbRkoroHNXirN88Rw",
  "key20": "32qWiGGA71Z1HwSMkU82WrPHKUNA9B8jeU5pJuUG3J3EtF1PJ5zKcs6HJQL4uF21RoFNYYZEMTCnNHt2rW1B2Cj2",
  "key21": "FgtqmiJ3iVR6WfaXCcWhV7TAgHmfYEGVNEP7FH8fNwKdfEVvyYsbBtGmwhaz3xe4w25UW2hfSqExwn7JRd7C7vh",
  "key22": "3memCKTxNLoWBDkp2LmJrnVz1GzjDNgu6c4r4PQoqZWEeBtVFqnuw7VBrusTgo7Z67oMnRcSyhUnzoqiZkXrA81N",
  "key23": "iaQPByBRhKYdGqXJow5Crsed5GiAupitdwwVC9qzWzNcbAMJFhxpFsZKBN7afXFJ3pt3Thn5n1jwVRyX3FTsQda",
  "key24": "5SjPaWEhBTybScyNK5xjw2iAHPGxW7Weu1TQBjXDWANGQFeBcaDL8tLNkALdJNBKT8LvBK8L3cXNMS6m5uw4o8do",
  "key25": "5nPeTRFmLyqWc9DfKtAXqbhVuoqLnBaUUNJkchn2F81rngY8cH7XyCZW6UtiMF4BrEX71jNZGTqNMmqUanviKeu1",
  "key26": "2PsftXQuwjedDWdE5SnYXpVsWd2gg6dEzf3J3GwfxEnLknjV4cQm94PHVFMNvxyq8q5XjaEeihaEupqgeEvpTYPA",
  "key27": "6ojkENEfkguquwfvAjYkEKC9JhD7MwPojoeyofe4mM7RHbZ8JD6nk4y3dUCMaMnUVXz1k1B1hA1qKCRZgT28ck9"
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
