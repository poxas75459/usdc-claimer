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
    "2R25ApghhkFvcHrABLeWTiDh6mz3p935tByGhPGfwufWHYKsfTyJEnjUaV9FwChk9VsEf1wNmF4ET6CrfreoSQvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VAyHTK7RMcaXRpnZwuF5DWXGGWUabiDS5GMujceXqBYgaJMgQMgNNpB2J25QEYx6NLibhoswXXeGazgrCd4pLQa",
  "key1": "4StytJ4b6sA45KeWuSiHRBAeepwSWcLQkXFUZuyxS3oRLs34bnNVgza84rEPYoBbx89MTjRSWQjq6NnNv6MkAxyk",
  "key2": "33r3yaxAcdEjszQmWQMCqCnPi4okuMtVAsPXG6MSFrDz2iXQffR3SuEkZPcWA7EseqF5oCza5pGaRsJLe9pbNFPZ",
  "key3": "2DWoEX7bkSucmM2qikp8tjgyBhfjLNowKbkTWYcyRBiJ5LPe9KEXVeTdX5JycAv65ug65TRjBvKAhq6SRQ7d6uMe",
  "key4": "5K5HQeAAwBmUc5eRBHXWmnxpEtzaz6BGiGrmjJaBULnGWXCKu74FQHKzUsV8yvntw46tdQwAYvoePadvvVZCymLG",
  "key5": "uniLocWvzeB2A2RgeotNjqFFcWzes1KnVeJY2AE48hXhAed6bXoqKMhcNda51LVhGPnrUpEuM5aKcUKFb1tDpK1",
  "key6": "3FKK8TXvcTm5qewFe8ZU7vBtCaqZ9pGFXEoES57Q1ZTyLpj6hxgzVTddq2aZVgeJRGnFhRkd6jMVEM1CDzWgTybD",
  "key7": "2pyPKJxkV8JLWwNvNktSxGXpdhr45JKzgMn3ygoicqysAvDUkKwtmTNQ4Lzukk6h848jNAinerVPEvj6FMFim7pA",
  "key8": "3uVE951W5ToEsn2oRDF7rV3UZBkvVsYQu9iqinVHoreFcFWDB7ByRwUYbceDv9tLJuyGAcy5FjUokBCK7uL4KvHg",
  "key9": "5gGuafNYomRqx6KpmQvwKk2GYaPHfb6UuTk7ETtCrxoKEjmYWXmn75o7PHR3VYPBjhEj7kRBqJxNMfWuTKmZAtE4",
  "key10": "4YbCNVRDB26p7ryLs2FW2UsUENTx7jYFioHZAysm9zCP3CoAARr1MaVm34i4VtVvwntVBvB4rBxYF7mJao7WmtzY",
  "key11": "5BeqStYychvDcQw2PJrvJcumN5EGVEtrKLogPkw54jZuYj4Tdc5cSs4qtT2McmRwQ5AVjGxUJeopqTB1nsKTXcFe",
  "key12": "WsvhdDff9A8utBLL1gaAmyMtuuTHCHjNiSzd7yaLZ2DP9UF1hz7RB5KRNxiXofj3Kb84nAH3qFvzaEArWr15vR2",
  "key13": "2KRcZ3nFyvZH1NuW7mAj3HJVWMMcH6u8J2zRisEzBJeaL8rahGfSnwd51QJrxWKYBq6WE5cXGwpz2PcK9TKjbcoX",
  "key14": "3Qrrv33RpXizPKNamiHA9qeuUNABnsTemo52rxQfVzZAcAiXr9oVJi2Ad8E3r9muQNE2XKtNVauArQpgwRkxs6a3",
  "key15": "uUHzHFJ3FDiMdawyFnzyJVvfYiANm6iptgeEFCVmsAdNqB7ZNNaKyrXbZQ2KRV1EUrRnvvE6uLbnWB3aytW1zoF",
  "key16": "4cK6TvjS9Pdj2svvMo8H1YP4xFR6iGfkBhead59CX8kakG5sCS3gGq7KqHg8fp4HZ6KLvLwFp8Mu718cjL3YEee3",
  "key17": "5iFwn6YX5XqpqM45eavvnwEmTbB4QtAXVvFLgvRabN1PR8x6CbQtxbYYDonWyVSLR9RjK3fJBQoEoEbtCYQBJaZT",
  "key18": "4fq6WtJs3M8Quv5TchBmu5iXvjXGcAEneGkRMdf54pmdpNWXnE6UbypdQU8XuZU2AwJGb5VDR5k7tm5M3cpZoMG6",
  "key19": "VbSLnx6KqXMxGQZ93dakEULdva9onhsnMpQqycjtrLK7yzZj5rtSAjD2RXqNd9SQV6HQaaT9S5nqRC31PpJiYG7",
  "key20": "2NuYgANtMd1gp65NDeV2LCvQSdtPuVrZi7k8rjHouLpvaa4he9BcC7geYP1F15PWs5qkX1Vw1JwNz6eSEcpFr1uZ",
  "key21": "4oWa3hyMqC3nTWfcTqYsmAs4BdT3vwudyqkLaVuRY2EnytacwJf4EfkihqUo6m4GskYroBNJ6gkT7V4Hw1DzU4f4",
  "key22": "3HQnAYDweiTQUdK1jbxCQAoWRWJMBQd6Kzgyp1ud9KkxLWZQs8KzXjKyJkMR29e2U3HjsD8oEnq3JZT9KpvDE1pj",
  "key23": "2MEFygbci9SztqvEHZuWTodpw6H4MJ3oGCeEBvUS5mqJqBt2Ui4uVyVNkeb7ev4UQtDkHGF4WqPXkJq7j49mzsgk",
  "key24": "P737a4WETFyu9qvfJMNWJK7e261HxUNKUdY2qt7aS3uGkqZ8hLgbZAP1Ft7q5rNjgb1HtUZPoBKwg3Sz3JVKdtw",
  "key25": "mcJRHeCgRbtdGZuVWMXKV7by9T3627R1CYGsuqgzr9EBmEUVbeXGdwQSLsyuXcXJcxGewCBZsTEnTvx55TZQbhh",
  "key26": "4Heu9HDvcNE5aCre9vyZbFYoxc33fq27bJih9U6TBXKeMB66F8aFv5EHY7kZz6XUg1qzJdynrXgSEYeUh6vKKQtD",
  "key27": "2UC8tU7JSyX2KttvvogrXHEC6HGmSYzNPe4bmqWutuaMhRQ6A2eVcphL9TPWffM7EMLpL1yAyiR4qcSi3ahjZQ9R",
  "key28": "31yep7r3DoMecvzUb8FJjoHKXPrdGxijBknnWjFhbxzfXSMhHLT3HhruW7yxiLovVheKmWMQKhHpAkkJ5XSaKbks",
  "key29": "5HXQHf5fvb51DN7cvGF15ahVECVMUiqALG2d8DoziKGNQCpqjqGpCJwsJ58c66tXijHuJp8mcX3c1LszBWEigdMf",
  "key30": "5RnrUtnhTsupPZ8W5QQFHcx6DvZtt1YGUjrMFvNVuXTdYxWXdp1hkwxboeQwPS2DKhKw96oGSDJcE1R6nKkiDko8",
  "key31": "3WbriWkKuuUiqNcytfukT7gM7TyN1yEvDTnMAFVvSNNKh4ehDG3qJDzriND2Evk8a3JxJ9XMaiswVu7QAVgKzqfU",
  "key32": "41skFDwovKbG5raJ8Nh4LBhSbQf2snpTfLfEZeHCYbstvhaeuNuWvTB4Vj1QKWDnt9E6qf3K3TC3Z3SiwUC9mnaf",
  "key33": "5hvsWtCLUh5Lg4QUD6g6JBreMpvKJi7sKBg4HkLF5SoMx4HDWKBHo3Vh4TvoQnwgKvLGPEn9A8V8wY6xonLaYW4s",
  "key34": "3RYCn8hYGFeicp5AEU4SxosXn1pMzAThtLYJhYYsU9vQwqhBTBEfECA5aS6XeN98uh4pHQNm7DetkMATqcqec9xT",
  "key35": "5679EmfJX2CezHcrXPLiKhZQYoaBF4HyTkNP6GhUGhAYjKXKsRAc95QhVHxPwiMfRwYhXYvVbqwhYCfBiaSHo5NY",
  "key36": "5GJKpz6vS4JcTrx4rHRqAjRyX6aAfazrp7J3AHSsPdECD2M891GkeBV6BL1R9HKqHUjfJhJLdEYnpDB79HkehAoq",
  "key37": "5WJVTQrgxKnubfnJxr7rY6PKS78AgLdBLAc787MRLEDT9CaNUrcef625FKTSa3JHFbwAqE3SmnkwKxwu9WYreqFC",
  "key38": "UpKcNoRYr16snxmTLmTAWZHLgCP1sVTN36fxYgTDAeQZRxjueXmTV73ppcgucKgXh9zhUxwSmnn9xeEVggaUbHx",
  "key39": "538kjCijws22iLeYCGuKiD7Xuv9vbhkDf9ef4htBupCUH9XUBf4oQ3hwGpuBhVnCp2PKD1xNwVwWxj4wL8LMoV7W",
  "key40": "54uHHHPAR9sfdjScVafjd1HkQBFnWiTTApJsE8PkG1NwkKKSKfRVwNi2CkgNm5fgKEkDpmbJgMuVCWzqgKJNnCr9",
  "key41": "2tS2uX5iMcoqxjYsGNnForEhQqt6LJ4B1dgzVsyvEXdh6Lw5evNF5Whkog41wGdWVt7Q9AtQKRhjfyzy3nzGZUXF",
  "key42": "3azoJfCwUVYNkBF6nq3VLAYpiYjVdhz9UJoxfSAtzyWfyvrMYkeejwB8REMR6m9QRzaBiGdSVgJzTbZyqtXBS6dH"
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
