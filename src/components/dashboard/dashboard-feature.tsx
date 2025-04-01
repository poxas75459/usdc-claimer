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
    "5HtQE5sivVNZxx9ZaWsPEeiwjwNzM52RYAP1k7Urwdiz2mun79wVebzvQmBjk2XVEixZmwPqpikqh4y5JbHhgSQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYcBWnkd8puD3ML6tTJjdqpwfPyidDuDYyR96nBUhRBicaowtv4LJmTR7y5rxXD1xmEijBtN8Prxyz5hSf1kg7t",
  "key1": "3xGCvt4H9X1gr9Qfq7itksyF6NAskfiWuv6dQRD84pAvmoyShdrgj4pL32pfjuhnotCMvxv1dBV1uCmWmaZMuYMg",
  "key2": "51nX2sKMxJqvcGMZjYMnznKqo6cp7NZ2X2exHwtugye7SMtdS3Y6ixWqkDrKSpzG2mNuZqaXiYRdcK25HCLBhV3N",
  "key3": "2aoL17x3Mx6nXxYavAbjsxqK6Ri7io9jqiEApdtL4h6nuRYmUkhN5dfB5nU9G6DKXacVFNdBMrDpbHbrzGBT3vVH",
  "key4": "3s8BR6a8Jo5zAMHVoSiFsspFVtCJuPV7V872tjrB1Pqoxtns3NdZTW4ChxnM9N81EzwaU5j3E3pH4CTV1jFw3K58",
  "key5": "3ZsZ7BC8uTrBUeT5bRuJj1f3PHCE4ZHBnKjU3zj4j3ABofnxLs3SRGwLXvnvdhWA1XPwTbpan39K1CvaPhHYJzef",
  "key6": "4c3AbADWeEDhDboyK6476kepsCJ6uHEkMAtQXsGqFsFSB4HvcAeMJa1bCrtgHZaUW1dwZ67Bw5JWCS3mr2eZcQBJ",
  "key7": "4UuZU71kh27jPEUQEMmAh9JrQUpRXUHMJuLdMYCAi84XmotXTqv82RjWwtyyc5aUrCfb87JNNTfriYuD4aR4NW1K",
  "key8": "3Z3ezvoJnQ2uKssjUaT3h4da8ty9GL5FcvGJTmQ8hLsfjQfXqpfJHw92Tx6kRhSkSaksen2moU1wadNaok9Qh3ac",
  "key9": "5QxupEDKR6EQ3cBevP2Q9vhMzC7CXbaV3JTJgoKdJpSa2LTZzR4WZJVzv6CrEz1wQnDuEx6mQXJ8xQLoUN6K5WMo",
  "key10": "49zGjUaGZnjKQvWr6WCb2BTHsZo65NiyWqBZRKojHECKQ845AHCmxm22rKTY1Sg4iCgcRJ3X2wFiukLdX5SS3iZA",
  "key11": "2SiHCkC97kvNxr9u3tM8dqCLLM4Yz45bNaqbMc8qzpBERnssSvRw8Q5q7nt7U2SMo7L9iAXuE2SKPypEDuARZZ4Q",
  "key12": "2dLvFGyeH5FF14SvtKnQJqGwy6rLo2fTHebTWbLMA7Dwzz2i3eq1KPDFj58VUNFbejjYdEQdQoMCbNYuJsLdbdmM",
  "key13": "4Qdg9pbWQa4g44QnGfqhtrwfCiJLkpF8BPFuCAJ839FF9x5P5ubXRSgXgPGmT8rTakv9tXtnwMpa3rH1rpdRZuXy",
  "key14": "MBXb6mySgPJTFShZQPMxCh1m3U1oAmqjgi1eH5Q2tEg7auaE4Nov1F6RVrT6NpXnP5j7h3hL7jWrKA7t84taDDA",
  "key15": "4jsaVbyztKUTQmYLjGd21DBy79kRMuaAfqKjqMA9f4WrSsjmX3hCn4xQR85zQ19WuUV9zSm6Pwh3621LPPaY8Yr7",
  "key16": "2jRdBugCxhEUWNoPPTpfKnCmYZQoPkZ2H6ykJNqnmWR7SSFL8ASvFzYWgmsRhPNLUnJBhsXWnb4F8Ky2oxtX7LHp",
  "key17": "2J7sosTGvFn87Bec3mLwnCkDkmiLXpAiCaVygMnztorVsLDLR6QCLAM9gEESxuPkMWz5evE8GF7o6wzu1Z1LFsGh",
  "key18": "4zryunXcYYP4Mcj6FLCtqYHFzDnewGMKZZvrhcE4jc6tQad7JzKhc6trW61dWstrdAquiPG5rPss8K9JfEUHPuwx",
  "key19": "2GmqmNnG1DSxpHBkE1wizXscFX1k4PnGt7LG3bhztKQzquPSEtgY846sbzHsVk8ocxCqHun3U3SfGW93uspH49VF",
  "key20": "27k2V5B7jZ6CDx8FhKhAp8qCyreh6Pc1ASQTySgvoXY5spChh2CTkYKcwvjHFafRb4L5PmFw7v6DYsE1NcXfNd3d",
  "key21": "61jJTZ4yfGyQXLuNdTFCc9HP8anTMLx1WzJynwGgkkt8veUBj1WDdmKWzpkGQwBuo4phMfNRkRjw7uChKnvSZpbi",
  "key22": "2s8af83q6cubf9VG4NNDoRAT5xWdj7FtCNe2sjuKHZ7LdSDrMKucjbxCJN4aH13ecAbkmuPfZ6UPCE2X1uhKFwvU",
  "key23": "2WrKcLiGwLZhptYSsY8q3hb6hqepjvTzguQXxQLKZVBGijT9wHAvbqtrVjR7d8nYgcxA2wnf7CdT7ahFMcnLksJj",
  "key24": "3FVyU1NrfZUWNuY9SFA1XKJtuBJh9QJJVVwg5PYpjvQbZSosHhtzRfryf2gEPdKAykaKubXW8A3jwsHXdd4a8DTR",
  "key25": "5HNZHdmYum2BC1U5at5VhzwqCWYJQpEkBpPCYgxnNkZXPDTUCtJRpc5u7QjmU4VzLNEC6rFfbBco43Kj96pJnXeb",
  "key26": "2Q2WXTNi7BaDF5HHfzR1aW6mPvzRNbmUokUV4Wfcx7sGEfTchMrxLx4tRDSWwPx9oUmCqy6zg2irum48MKKSqhHi",
  "key27": "5fp9M9dXDo2QK9Sr4X6RSVVLsSZKH2Z3LdapDyjJi1jQMXFd2Xtec91New3qoGUbHWj5q8ET4VBiz7PeEQYwDFo4",
  "key28": "2uvugce8fPS6mwsWQgRnDhQ8ACAg36jd1RfLafeWm3JFLNFZjGgboViZJC5ByN6GPmMhUxbaXJWUScpesGpkzxoa",
  "key29": "29KHXEXyxM1xLULYgdvR5UMJFvJzPbnndmGYJX6PwF88VmvPnu2J8sc3KDDbyKn1rMygF2M1MU4QVRd84ebwXFpj",
  "key30": "2CpC9e2S9FX2vqxdXo17Yvmni8wJgALUZNP55oHoormmvYPXmVTTNucn8kAUZWYUxZGDRfvGFSkVfDUFFm8M6GaH",
  "key31": "4HXMf8UHG6N9896C8ACir8NMcwSroPi1C5ozrKy5EoDm7YSsyZkmwZhFqBsE1P9VSaQR5kk7qsxMHX7NJEKb1mA",
  "key32": "4oqvCo5vSwnpukvYeGrTRjuAMMZBq3PH6We9ZTqcu5RJC2Bde8ogERyjjd9jKDLLeYTnq2qn2GiiPANcn46Hohoi",
  "key33": "5ptToFBVwYyTb6N3MuNZf8wgPJGHSZeBNZfmifr7D8nR5qw8Xd2ndHExxzHw12Y3YpchENLMqcywvtSwtQfvspzD",
  "key34": "5wDSzhgkvMv3JaZ7Fk23sXHbLxZFrYm97QrY34MoAqe26CXWZtANXVWzSectZsMS6qLrrHQn4SFRzpXaEiC4iYTo"
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
