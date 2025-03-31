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
    "5m5jab6nWWD3EscP8UtrzBXG1e5wb8nJKijZ3Ldj3ryTvWGRZGFzLE4br2Wsrod4mCTKHU71iPji4oN8YCS5Zfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgzHPwFvTbybS57P4inv8GTcbZi51jkq99WWXvAr1UknzdU6kDpZV3icaBiwepFjwskrWArjkZzZanTfyVDzkBu",
  "key1": "2hth8xxZmrUR3rsVwTByzrakdR2gHcGQ5Dm7APheVwNwo5bWpcGkwYsEMkE2u9gk1tARRG5hoNUtYi8Zr6etVjxd",
  "key2": "64cxudx6Nn3kfmivVEHrqeW6r2GkY15yNamhvchXz5ymRUyeu9NDm6Bcng1rqFvqsjSxc3iYFvgGx2us4EHyMtoo",
  "key3": "2ttwSxVfR8Wcq8PHYdZhgie6nP2AhPkWSteBRX1Vhra5eNgPUmmLUA7R6ddBpzF3dRGVVHxXw8p4X1D4TX3S6ft9",
  "key4": "2zpPmy7J9U44p5GY4gp5JgWwh6CsSN1jgiYc5gXCwYXD93BxmrQrLtQh5AoT5DUXvDmCx8qcw62XPMjp4mbw1P6s",
  "key5": "5gRzfwYQpq9DuGaggBi9gQrvNy6Za2H2biHHZQr4pQo2XzspZiHZEEpWGQzwWbxNE9wVdowfG4fFkHmb7vrgXb9q",
  "key6": "3QF2h2D4PMxr5AZerKD2bFanUiRZaCTKfywPRiRbxeCfvMDUYWYvu2z91iTrU49Yg7dAE699Y4wk9wrYNJLFGoHg",
  "key7": "5PtU9VuDA9KUtc3sgzr8PEqVZHEUAg8RrvdsUEodpcd5qA2S419cDDetVgBZCp2ngPape92QZRF5GGuy9aHHk411",
  "key8": "4j67r5Uu3MmxmVP9qDF2TaoS8cxN5eeQjiNUrw5CfPua3JWazDMRDGFHxcMMehcrkniCbSvm1HFDQwzYBaTN48R4",
  "key9": "2uTzrtz6AQ52MBRMrcjS696JejkRAnzK3f246yreGB4wxmf4J8h39zFMYrSPMVczD6x8RHkR6WBMXXRxCDYPFC5Y",
  "key10": "3ysquXzsW37UYubhWgipw6ys5ZSy4ia5ftpJ943pWwyedT1x14XuSFDpqDp6uvuRnXY1wjFhHhakgAxK7Ya8H5vW",
  "key11": "2aVHb7JE2qiSUU7Bt9f7GfnV6vCcu5eneL6me9AaXQSeqwJg1zzJCV8T7pQbXRiUSZnbhjfJybTz4pMvwNc6TTVV",
  "key12": "3fpCjTVwqZ5ftMFC8ZapaYineK6FRhZiX4rzaAzdrdSZzj4oJmUcnfffuDveNiBM54HsT4EfWyzTET3Qg8aEy8yE",
  "key13": "49RFpgezuWsgs96jeyUt5e9XkaGsKARPZf7pNZx2GDmgwF4iwiJNRhVNK6ivL1poJTNzkC76isBjbWjQuqFEZ8KY",
  "key14": "4fMZXLdfBt9nJdgyLKtNmqUjgPaESqBgV8efz3Pfb6gFpAw4NnDxdeHd2HvMsVP6DdGqSw6oCsRqTV5dp57hKLL2",
  "key15": "3B1pipoDqZ1V5oZcGw6mooBxDXr64qiDB1k2RwK8mqJzmiC5VbkGVndmT8VS5Df5DHs7QKqS3TKjVvD6TEivQaW4",
  "key16": "pH8xm3bAp1UMPozXQHY5q9NzGRrJcAiQxjZsjhF4nXnKZewCExD6rxY3EuoDP1F53QFkZBNyipukUfAhixjh5SD",
  "key17": "5tFRsfpwe5hYbBFoqLg7jUbidvLz2uEGhuVKhYR7ZzxzHrvFN8kZWKZ9thqSZRJxSbebJkJQ7mH3FHGgqRp2hiZY",
  "key18": "5Mipp47dvM2VDnkqYeoxc712XTNvTWQYjPyYUprJhY2eUCPC2WZrzUHc4QCRqgwwLuz5fz3ADbFZMKtk7pvGLbMc",
  "key19": "KjXk68qgfjtm38LNu51tR6y9RCrmeLvSwcZPEGNShkWqWapVjebhQME9C5oQG6uGxjN5Ho6UZmJJyjgrdStZksk",
  "key20": "4t5wk3gkBs4Kkx7e2oKBTo9bemi7YAU9xBFH3TBcUfJ2riPV7Vwv6DXxk6tXvsfKQZfS2W91Wz8sWgq562D7o1SC",
  "key21": "3XkCTWXZ84FvyJPHbREG6gW9n5p2XCvDzLQFJmcNxeZoZR8X23YkzM7D1me2FCrm33wSbo6u8oqboXae7GTM6chL",
  "key22": "aJGqbALnWrPryMjmnDtYiFGGREYmHjqgee62RfuXWuYzzdnJW34iJwmQSAiN4xTErMQVSVT9osgdEmwsHgsUozC",
  "key23": "63u8FinFua9y1KKbJu4kktvqFQGToKXfYyGrBDLNG2moGgivFvxacSyVJcsoAuoRrYtJk1RZMwQNA9XZY9BAEfqu",
  "key24": "5gyVrPdgbnHvFgWZ1uinbRU9yEJpYf6vGgApdmPezvb4Lu66e6FqSNmwYUTnUZaL25SGRoRMT9oNES7E9TYFajfF",
  "key25": "54pBoe1RZCGKBxG8fHriBhVx8YrZ7dKb41FyW9tnVFTYDwMbDnSRXA2sUcEmsUS8CAxFaauCUkcEyTQ47t1PaxHa",
  "key26": "571weYAcgJyQFXw4v535CZLacBPxNaeXgFZBo2A6V2FFPZDUYCL9V9HasqkATHdHM4kN1L6DNxK9TxnZN8LzDuMw",
  "key27": "2tSHfJ6TFKgpL6yWWEbTNcqoDJYxNBd86LsBbkFDPgWZietg2MQrJPkJKNtAWBh33XgTtZgYYn6oaeU69RWi84nB",
  "key28": "5RQHVhD8TeXp6wdmSzrTRb6DPU5AnPgxvxx9Z4kdt6oimqZmnDnEHQ1o4PM9v3Hkgk7Layrqy4MNoFcdCVfShdnT",
  "key29": "5VawhoeHynJ1Hc3SDQqELx1LVxBRzV53hUvcusvWEnoWh1JwAfqpndepeqrFY7zJfxVHJsTGuCuQyZdYct4pHF8e",
  "key30": "5PD12qYVv3L4RvGA5UdkrERdje4zr5JHvGumsJ2gzXxTzXdDHh4AViqL5bkBr4zCtBA7DYw7QX9usgnRu3Y25Xy9",
  "key31": "5Nv2uQi4JirVP6rSdMYGTzr1gbHX7MdTQ9DC2hHiMRVRbhrm9syZ6WbFiteG8n1udpcpjQxTyjbafRUriz5r1Z3p"
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
