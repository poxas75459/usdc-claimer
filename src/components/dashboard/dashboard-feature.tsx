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
    "27cu5GbFzowC1WgfYUCWSxWAnhvQbDWHU387YxhT38PiGES5eMeWNV4o91xME3aPHLCNegUajPuc1FFdbrJY1ZgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DKE6uVgZHC5YGfLGng8sGRQpEZoXKUy6YmhCCrdYL4mq32QSbmpUZ7W7ofv4LPuvjLSi79vUTmmJdQ53v22C5XZ",
  "key1": "5UAd9juieni6NkfiF2ZU8NXk8g1RQfQQLvPBw1ezxuzDgdN1WiyA37RMeG2eXBS3mZotz9mdzhtFAHrU4oDEFCcP",
  "key2": "2EbU6tN72NhcCvZwNT64KAXWv1V1b1EbAzM1dKWJxzYZYpWa6tAEiVviTNADqdxsekB2ZcJ9h3tvnuxJ133bpHAL",
  "key3": "3Zoroe3Y7cmmaThtmBXCXqXrtAn2TuXZgTD3d4bvw5UKUtNzaF8jYQqqyyqCEdxBHg75rnzmaJoA8W6ZLQMWey1m",
  "key4": "434zKp9Xrm2uhMW2ujU7bvoxaVC4SvGtBEkJBuhy3SXNPMv1FKmF3pdtxDPmqouwiS7gyBPBHvq536CyNikUWqYQ",
  "key5": "gBo3n2FTh6Zjdmm99KmUQGNQmAAvCCgg8173HyPJ8hMDH8oLdkSuvHeZYR636zNsRKLtEcGGCcYGQL9ES8DX8e2",
  "key6": "3PKQqfr2LheWCjmrzn8jusqY5ETMxMAyPZwgPchuWphW1pXQRF64eAazYrJyy6PRzyi9jQr9WYyJpBrCtKz6Lk3V",
  "key7": "5TkuD8A7g51LAfm542PGMoBeodE6n5Rgw8i4dFTxH58B9jirC54xmnvomw9GYu15CpYN6ELqhK6AQYABnHmoW5wS",
  "key8": "5WFSwCFSJW3PVmE48Hj3FZfELbi843fcj5evh4o41d3NKsQ9fSbUVShU6wW1dM6Fx34BvFgxQsFbU2nyv92bhf6W",
  "key9": "5Hp99T2igai53ab9vQU6FTSwjGR79ToVDWuCJeMyAKPzNe4kQhGqKDndLiErs8eMnuEcvuMLfCFnppX89J79o1pe",
  "key10": "hQkBbwT8oDAM2BV4MxiMcmzgJdJMw7zyKPt6HCD74wmXiULy5ySYnEU8tkSgE4cV46dHCqhTfSjwk5eR8fT2XMr",
  "key11": "5AchcwFLJNCFYuCnNFFyBk5wcFNqZ8HRv28rb7rA2e9EkCRRhxda14NVyR1wqmtQRhQmEX1Vg7jD9u3ZHN2yd1Wi",
  "key12": "2gYeHNmWGK3csrmQtSn8vWoomvR6vogAHC28DDrt7zAtZL6jApG3AnZ5CAUkjsvUqZ91Dteyt2nAh5a2xSdaFR1c",
  "key13": "67HvNfeqTzwCeUeXLy43GAQekZ7jpoErSuomuEkV17LMoXCgMpCKgjhMjPFiy6T4K8N7TvmuRxWBmvYVJ7HzyFZV",
  "key14": "5HFV9YJM6gk2NfqYxge3JTq8UTjvWNQWsnCHYyJHA14HMMhbPznChBrBjkfMJr3zpW6qm4K1QXaFfSktBS2wEtUY",
  "key15": "4wpfVNf3hLq8KwYwzVQsKkRH8jWBpKKzPWABSHWrwR28i1eFjUt7xu12XLPkjiXx77n8Q2x7EonF3A9arr4WubUF",
  "key16": "2cxBH8RKzhqFHTKc3kkaZH6e1YANUEvnBx3HPEYmu7frzr5AXuTPkpghQKMBSzHnbVT5ta2U5xw7cuw22PkVCQqs",
  "key17": "3R2noUVdBsJeJK6U6TgQnS5YuBeUbK335u5bwHdzMZWTX5T5fK4p3kzKbGxgnuacbQpDyFGq5XCLRqx9586LQa7N",
  "key18": "3zbkei32aG3GZwfeR5cAyFjtAv1S7iX1k7BXi7SN5Dr5d58PZtP4JaY2tRq4ZEETgJ5co1J3oYgo9js7Sbse7hwN",
  "key19": "5dJ5E8PyaPKNwUskKsQAuRxSjBeYfvSrVa7Bwu8J44gv3SJugHceRk3pbBctNBoGaeuY9o7GL8WW8hodCFEhonwB",
  "key20": "67aqTgAgwt2kWCUjsj3KZVVpBXY6d6NtaiSaDEgo2JDds5vke4LdoMaHozGQtiu1D71H5oAHJQVPz7BXhb1FZUzz",
  "key21": "4idUqUHtifP5DWrmS8HpqgBxNhP1NBrX8fvbkUUBbGE9LanbudGwrmV1wwxMeQAUdjPnW9xo5Wx1VQH4TSTpMQ7z",
  "key22": "5VTCSyQNZmVMQmYbwDBAGZ2smxDk5VuxkBUaSzJmkE1QFpa1mpVpci3yUe4HZw1ogiSsSBbW5foKWYCwx4G1zoXs",
  "key23": "3mBcnnSFRRY93kPWfCrf2FXd7AD1sjtGxNAstm6MjqSjo6RySrociUzXAXX11tqRiLSPHcTTKMpJ15ckKtLbLytN",
  "key24": "5PWWsou3wP6VpuTiS3aMGCyxzPUkmPphbXxPSxsypyB5FGE1vk3fDaUWBZD3NJY36NSwKjXV5TBqZ5URKiMp1Z5d",
  "key25": "5s8GbSMhFYHveHtLRgmmfKzhjh4xeu3RR4VCwYMUEGGdPZ921VHbGGmGFsZwPxANczmAB38XwBnJynczf91bJfgt",
  "key26": "3zpVq6CSvM8afnNr2QbzfFzeeFuLYzh8rvFTCctFmHpXPFJ8j6CYGBa5DJGtjvcCci5YJFmcfVzkunGSmjHDic4W",
  "key27": "2L3nYRjJVM1gjSCmFXC2GMmK7CnJmGxzKdDdGhFQTHXBqhmhpZVAcHzsUYpYSFtTauyyBoGbYs61eCx3kDPx6Mzf",
  "key28": "4E6enAArYmnFEk6TTxDb59raBsKLkDmQR51XVsCdn3TnCpervKxVxbGfzM6iaBVtdkgHLxEe6HZti9n3LFQbza2E",
  "key29": "4SUF9YbeiwVnjinT5T7bazErpxpCYYiYKT4vT42QSrAhhBW1AbxS9wpnyaa1umvEDYytdn9hraiM3BMU7oTtSXMT",
  "key30": "5Djm1Rhk48BwFX9kgmGobz6Wb8MYkggLvDRxRAbEi88TBwmZJr8zH3vdDFYvVsmQrCPmuu1k3TdFj46JfX3irt3N",
  "key31": "2m9VUgFWPrj57wRWt838S5khMozpeBXf3HjD5BPYWrnrC1BSfPNJJe76ZeLBGV4b3hsv5SuA6daLcd3SxcJ9tabU",
  "key32": "3r1P4uGzyuBSfPBggw9kBn5ho527p8TQ5wE9HM5GUhHCjEohzGoD48hacvPybJmmqmx1DdBZuT4pbMZ1pqNEfzn5",
  "key33": "25LhETyAYuZZtZKoyrAjTsNxykpU8bCoUTSi1NcqqdUHkC1A5cUpKcFkNQZ8xbubLwZuQ2PWfC9vXwbGeHq7UE4n",
  "key34": "32puq4UTwuMmdfTgvgi2CuBjRYw7rNMpBXH1VDq75mCsEESghmuVnKYBpG9HjZ6z9KvKDzZZq6UVaSoKNZqRLxki"
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
