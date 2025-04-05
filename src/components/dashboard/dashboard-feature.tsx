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
    "3WzcoUKCwHNptoYj3ntTs3HiAerRNTU74PoVtK6PFtMZr4bhhEB11X3ri7CUUyrJAySWzLzMHqSXWJ2Cn4FQApRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bMTdCi9FcXAFboQjVswm2J3JkmAwEP8wUuxonQRy4N15rVbrWtJFNfMcJn4jZSsL4ERWWBx4phpJimVv3CEhdF",
  "key1": "65ZqFu1byew7Tc8p15jArF1JigAjoHurMZGtvnV73h28fgTfSU7EL8SgZ6dr1YF5dyvgEt5abwqY4Q6gF3NqCgfD",
  "key2": "3txjMvFGLFGwvwH6HCzJ5m6PF9s9khRCXpxF7C7GxiPvoYVsq7kMbwgUBA4XupQZUAiRs9MVu1KqT5Dyw8gfve2Z",
  "key3": "5EWte2FuPEseep77LVkoVLJzMBLSz9y8vynmerGDdGkekM8vb6gTfc7JPamrEWKG4QydGUt29WFojFMehSPPARNR",
  "key4": "5QCow8TmfJbL5xeyYUuRsaVvTVtm8eW1fywCugPKWt9UVoo9aMb8WXb19cQ8g361tD1Vfm66qYX5Hp4BveN7yGrz",
  "key5": "2pJxSqB1jiEqu9nhZCp7hjrAsR7RxMdhKkn7AdD8qqae2fn23Edc1vGTbyGok6ZzpCcoBptTGvqu4ZNXg4hmJEj8",
  "key6": "4axCRPnTeqF57JQpob4DndiycAYBfyi1AYzb8WpmqpSitnvhjH9EkuqodWSwgivs76fADYJbxLStp6xeBajJ99Az",
  "key7": "25BmRzUi1CTcsrgCkeH3DpYhifCYD2iNrMCkuyr7GrxKr78w9VLQmVBPGVqFf8H5AQkJkKmubwa2dPJFSFqe17Ze",
  "key8": "5y4EaE88PhZ3USMJcuF1G8uSkvBJbSENFxSMMUZqY5FMR4r55YHb2ndW8DeV5FQHhKqppGmpkzyWM6aTRGw3P3gh",
  "key9": "2dyobNsp2KfSwwnnG7W9543mZcb4YtVA861SLxLwxvcFKViqGhK7zrWXNpUsx7wPDMjgQEb3wSK1sjgnqG6mswPE",
  "key10": "vfUDEUpkiGC754nexHKSygEHBTbXETgzGZ3L1MifvTaPa2CHshE8SoaK37TsW1AZsWGDd2tcGgLN2Cv1o7LrTbG",
  "key11": "36TDDDqqKVD2NK1t9vjzkBMtphzpqrTnSLW4XV5LjfBRy62hgWHLkSFdhcBvS5hfskPYi4DKKxmGz27puvDyizWZ",
  "key12": "tXZV5KbKmtVWwTGiUGYLNZz8mnfTiR85zam23PDhuinpKmGGZv8DnzfqkFy7hDfjT2MnoBv3uNZzwbqRUQfAVbn",
  "key13": "3XjWMWtUy4BRqRAJUEvAWTk1DXDCheFZ9znPJLS7ULr51AdBeXQ6QtEvDQFThG3bkzmqcyt98vYEMQ1KGaBuxvqk",
  "key14": "36ax7U4zsCPMUu9vyiTP8Cd8Yx533UMTUosqp7bEd9wc4wKYtYBe8LEV4qaX8sm5HwdENPV2EqtDTHwki5qS2uQU",
  "key15": "jYENLUvDCp6poHukccUxxQoTWRae2naLUEeDQ24mZqGgqJXNbKSrUg1pfegZCTBH9m6rQ2ph7jztcgEuwsA4dF9",
  "key16": "HmWtL2wFEzoQvbKvySzsuXnxW7737H4qVKLaSmosVbXtdCrHg4LjT29BXxBbxvXXwAL5nbo3K4iwobxtzBX7KAT",
  "key17": "3cHdTymd1LZzDrXooCxihai5Cn7miY6r77yepY6GT2WRndR3hNEiggihv9fTYjWj1YALxTUBP9iF4BG65DH6Xiht",
  "key18": "4SBDshe3JSyztiHMm5aCBNieaG8tRAFNkTCYcfRrhp4Ac62kwojVRc18b4Gzt28XJzPg5rHEfLdKpPp6M1adTJGs",
  "key19": "5Mx2bwtxfgcXPgf7XKZEjoRv4mCBqbmRN8fXFtShK4keVd7PFpXx6XoqZHAyKF3RwQbr7ymMQKYV4ETPU6m5fVL1",
  "key20": "4i1czDKBJiQWEDrqyRRwiSn8Wau5w3JYgfi5XXZ4rw2trzn7JE1gXhSEoScZDznNaPPhESvAPCnm7bb9aVaXpCC8",
  "key21": "5upfB6NdZMZaCArgvhXutv3ewxPeR6iknudxc2Tr5Yhu9cj4tEpwUNCFi9p5Uq2L2eMxhAqS73rZHupZuiPoacT3",
  "key22": "4A5KXCKztHiUdeGaxTB3vRp5DaxLy3bfWnnLX13W53CuJXBAzQoMCEXeYX7zdxBBGcT4h7SykVdFgg84Hmu28w9z",
  "key23": "4Lc62yiR5VMyBXf9TnoR3s7pjRo2y284rnJQDqhdgr55XSb75mbUxckVs6rLvHsM3WbaKLPR8y1Wu5myoGm9LHQT",
  "key24": "3AwXcQnn2GQpryzgFvSwM1zhcr1BhQJtGLrRSBvXnAAhmGUMY711rz4JKpkDbWbXD9zxf3BseVno2Y3BfP8dkXa1",
  "key25": "23jgFKFr8428MzVp411r54RFwED4uT2A9CygKuhiPqPEpez514pAALMfX3X2M8F6jjbTYQh7g1w8nfVxcUk9jBZX",
  "key26": "3JqjGQa3b8M85XPtAmZewY4uhamP1CWNcN1oYvKVfqVMWPbnnbjS3yak9iGMySGp1PQ8A4uu1DXZtQmskLgZSAro",
  "key27": "2oZ6VyJDToPZ2H5som1qycJ68ngMk3wzj9tt5hShKPZJNPAwLFj4wjWMsBv6Dq1FJ2X53hKKjgstSJgKy5yqEQpf",
  "key28": "5m87o4w5jbQMDvaQSJ97xMQ12eJ3REdLZ5c1fLhBXxnk5F8RvYKGAjuVXtdTHdzckfRT75A2fq1dvssCadnbXFFq",
  "key29": "2mz3L5bi23mVcD1WkrcCaRMYFVmzLH5XNJ4GMird2JiPxyC3BPEhNeKVViGFxmxS99ojtj6KKQzVmGBmTGiP1MES",
  "key30": "5DQsmx1Ya8HW5Pn2i129skL7WepEpCDaaGDfPieC4igZm1F21euHVUQgABXxn5qjP9pdJFQuArTuFccmKCkcxjre",
  "key31": "5X9FLXZz1iS4MSWiq4a7wSHqrJv1VBAvn9rWYVbCS88HsPu7R9uANJkoUHMra2B8aFiC67p7qmMYrMkJV4ccutTd",
  "key32": "4nmrSy8ydiBeJtK3hGCcYkxMKy5yQvy7uuzK5Xn9PNVAnZdW4xSPbG975d6czph9aZb1xxFXDvwhntnfGCud6j4E",
  "key33": "54dyeoobG9kFAQArQ5L2p166BfjUdxRyXPGiRhK51AqisRPURReHkTptZGwJ6oK6hHB4dfLYUF5ce3VDXCAZjGPB"
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
