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
    "32UkrKBfc2vocBcJ8KzQSHonTBXni8fF8nRatBuPCJd6FuBNbNRkMLDpBxxiyQQESUqu8TViVPzdgzYoVoZSB7HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDetUJoT5C971s3QJqr7eEWLCcm7eLAAkF6aokWpMmZKHRJnW57TyfZagadDrdih52Dd3t4vBBoCm4FvysvKvuH",
  "key1": "513RMYeMxGUB9HMWnAv9RhE86WmjERtcWPgnkBmpcT5Xyrk3MibVh3h1tZ7DA6HxRRxaFV6aDmBkr7pTu6PiaWgY",
  "key2": "2c8M7owuhwqxxQ3aCFqgi54MokFf7XDzKk8PEsXtCFaJacTE6Ydzb4oPuBtLoLcPRR8o4tNa2LrjgVUHD5BPaPHr",
  "key3": "2agq9BN6LHeBy9fEb5RESYVygHQbxPmcaspWGMvvVLyR2jLoaJr9quZPHLAmPRKTsQanX73gTJKYpgnGnVfk2Jdj",
  "key4": "5H1G919gD9zVyqoCMds9CR8CYvQvkPdEcpGiRL5aQfgU4L6J9mfFiPZH94hRzqij6SF7b6jPH4GUB3DiTartZXxn",
  "key5": "2ogu5wVvVFS7QghNRrWGYACStKT9VwhMTfzcgvQoWmhKgyCYwkZEu1S4ao77pMgwXeZgdLFEU39o8aEDgoLCQhRb",
  "key6": "5LyH3W2YHhj83tRAGdivxG2Ndvaw4hTAjf3yzDcoApYRuFzKtL62YR1eppLLyN9fztTWbqKGpKw6gAreCsoXB7cg",
  "key7": "57gXhp6sLTYHkEdYihPc2JCtL1joBBZF9y22rHP4jSi4k8SGCmp7FWyEWhZwTaGcXKJm8vvmvYjMjj3ns5Hv7Nkp",
  "key8": "4DeCwndfjfXRQR1cWA4KgThVAfocQFPWzKRyK4svgPKM6CZgKr7CGmkU8TsUpCnAVnbSr1U7pFSdFy2cJd364LgD",
  "key9": "5n7ZTE2tmFELztBimCNTa1MirvjXvTE2k7wvAgJgQaBC9UNBMz99iZ5YAc1V84H2KKoHMj6nbEK8HJmN4zryCUFs",
  "key10": "481H3pbezjwfBkgHHT2fN3j5KFHw574R5vxtugpqxDVENvLozCjZT9iDRNpt7Lt3XE2DzrGk3mrAZ1xNSfRLJffE",
  "key11": "2jQFKt2f5GqojqZmtS1vQzJF5giKZqEVDX3jX9yn2HEKSQLGBYL2vzkadjj5bXhQbpDYqmqqDKvDQgwL1rMV3cHg",
  "key12": "2Ubr3rWW2dwQ28EhBpSqirVvFhu5rCNULix5oT19fAbtaGa3da8TC4BPdJaHbBEtdu8FThpWoKpgb6nM5WuNMucG",
  "key13": "3evADbhzdWjqnwFxur44T3bt83a6ztk2ujU6ZuxMV7xtkGvcUkhGLJyJiYojX3jHidvfxc9udWc8yvJTaJG4vM1t",
  "key14": "2VikH7fwPtJdien9jrU8JAywp6kdtKGhii7rVNMVQ7HPzMbLNCp6QKLXLE75DtPXJYn12rLwBNSsUoGjrjUJBGCu",
  "key15": "4zzHbAQ9xD3fFwsR88H29tKCqRoCmKUuWmUA7z6U5ahCB5dHWmVpqhNEcQBVtUt8uHzsGpnLc2za4yWLftPytJK1",
  "key16": "3EtUXHmJGDq145kdwmHss3wQb7nbjgDqFnTzkB9yRf6hMFSn7CZLreomf8km54QXvfx6CVurJehEQu5fkbs63UXe",
  "key17": "4zCQjVLXrHguT5CYZKh99AStJa2XDfTfDMZXiUKMY9cWQPkhVCzMPpAFPgW7PWWuywoTW5S7LbXACMBHbSFfDsZg",
  "key18": "4oWz7gwqWbUoqiK6grnxD7eaKcD5YKU3h1i1pJzrKmEpEdgnAv9r4P4Lz2NJdmdQ4AYfvcAqv7oqUMNnq96oTAKm",
  "key19": "1iwuz5Ds9aojfgvjrXqsDZSh1w5agoKSH2Eti8WENc6pzF4szCexeDGppbnn3MMKKXh5Und9d8MaZ4QfTUskA4m",
  "key20": "5TAGnnoYErwiqAxCCA1bUFhZBQPKcFQi8znBMUcgmvFQTDvMKdJuxMPV8Niqrptm5AWrPjDBd823RFbGrNDe2n1a",
  "key21": "3NeDJTx7HUf8PjaWVxjWfyyUNn87DhsGqrTTdRHHXwi52ED9CA6Hy4Tkqeh5YNyyz5Nzv761LyTpEDWSaNKjSTUS",
  "key22": "62WWFjCrPEzDDyLbjr6D4G8V43kQJFskLs1LHM5cFnup8PEhyRct34ZUr8CnHmZtXR9t34dp4T9goQKsWL9c7TrA",
  "key23": "2D7oMooAxqpDjKYMmvKTtPU4qKumV2exFaMuEd2NhZ356Wht1PD1B3qnDVnCMarLqmX67UjRwhgee5KGFXqGAmpj",
  "key24": "uHZeBHV2HaYVtv1Ar7ZnBjETMZH7jQcX8RAkdmUf5VEtum7MPUTLaVjjobvrsesqZj7JsDNGphgmzZVKARAdKV4",
  "key25": "383o6TxT92Q1sH9chgaqm5X6FjFc6fmHDV9L7cxPQ9MGWhKxQXdBcUQ5NuviAAy5Lsv64u2b8A79AWCAszYuGki9",
  "key26": "5K1HsyHzoghfSAXp2dUzpTneWY5t6Yc1CPZb18EY6qr3wszmRpV5tH2SDPWBLPrANuXpLX7ifanh3WotJNAkY5kN",
  "key27": "T3rKigqTRxnN1jKATVLsfShB5rhquFae7MihwSC9ZzM9gEGyRwxG8rZjVqQs316ij2C6UrjtFVUY2NhR1Tf1ZZ8",
  "key28": "3Vm2fd2NveXDFQ3KuqpwkkuTzV97nxeFb59V5RtLm8DggCmhLtCRyjmQkmq4JmNfqmxuN87BAM1QEKbVZLmaSh8L",
  "key29": "ZoGsbaEH7rx2C3iRA23ty2jvTacfgDXMpLp5ev2TQPif7tgdGMvC3eXHdJb5zCqwnktqhEyP6ZCftiP6SLCTsHH",
  "key30": "31HzyjdSxz4RRxfmtKhkxRL3vUUFpQJxAGhzexWKX6uLe4myxLUewaHDqFSggK9e8eZWNQDckPobaDKkvUBar5d5"
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
