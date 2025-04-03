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
    "4CmiEP317VcuNveg4WzJdsbZK5i6v3WmoFVvcnv71HgZmBNTP65MvPe2j98p1XSExYpJzrCMBQsX9xEtrpZonJrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hoUYHHSEvLE4MRLmEYr3XGGrf1W4cbZNr5avcxWcnK3kpkRNZzq4vGggyChfznaUb5uNS5rkS514DSxoTaehepc",
  "key1": "5ECCHGzeP6Ve1CuA9GyWXyEbVVh2KMqCpgYUAaMyr4fMvLYj52pLfHAmr1LwzTZkLuWkA74EdfA1T5u3fjW5F2a6",
  "key2": "3p7iCU3gwCBZ9L4wbY6i6bSYNR4UJFGuYF5wkFtv8o2zHW2rQjgiqqWBazz8HPQm5Ux1Wg1SqzUXz4GHrD5Ljrxb",
  "key3": "h1hbzT1QQfDpXhv5TMoYWK9BYAQ86K7hPYXsCimfkuiP17G9BCxZ5AKwhgsfV2QzsMnTtK3kQVEFdEBV8LUdNAC",
  "key4": "3Nua33162LLGshQi6ZEbeMEy4pNfS2zcvfPZmnBHtWXbhgS5gY3fbFhqZdhbiTVfcaXLT4hTcSwrwRUQ2J2HxzHX",
  "key5": "4CXxK9PZkSC2CGqr1pvxNiqFktRZfmYjqxDxDb6bo8qNXtUwqE9RmAmKMA7fjZEdNVRYv564pDSVUuw1vb59VCEj",
  "key6": "39qJyhc4TWngKD6SY2wXT17K3SwRYvBXVWjuqCC42rBWeSAjaZwvx1YDHQrfguV6r5rEu4jkv6XeG1j5hcJ78ozR",
  "key7": "HSh3NczGSCycoKX7tE7iwHzrX7aGdSpejRm8H5UGtU9QVMJWHcgG5NPQkQ2PfLFPW9VRHAFtKW7tuspGD1YfESg",
  "key8": "5oBNcweocxJC3w9bqMgaREcmJrFCPXibg63iJLkxgebo5goi5JKhRa622BBZQf236AbR5wTRGK1pKWbmTWrTmyBw",
  "key9": "5XuqCmjmpczNpyqJAfKob2Y1ii3kTGfHAxuiu5QPCWUPPDMTDya2BsBV8o5mP33foMcTro9bXSaN4jAhy34mc2TR",
  "key10": "GZzBGvZB7irhckSVpkYxvWjv6rWmU1wufXEj8W3RZ1Sk8rQpqMsFBFVsRDS3gPS84kR1ktCkcaS9cJUM51ULgjq",
  "key11": "2mY7BjGjfKpPuLENa2DPyMdgMynDmYQZUbpV5E5sDVEW9EAajxNGUbKx3aSG8ZtnpJ7e4u46Br7MBgztEnWfwurb",
  "key12": "2cLwatxDJN1hQ36jLSv5oc4o128QKMJosaywcEguycTa4GAh9ZgHcBkG7MbtKvwvNEHVqrAkrotPW5T2xxiAv6yB",
  "key13": "ahdNyZy3MjXQK5LzPF3n2e4gDNziCgiCx41smSnoPTFHyYoshQE9wg7eRWs9WGK9QqoPyER2AcEyErRNExWcvHJ",
  "key14": "3rHnu5j5kqbHP6JSzbhjVuEtmHjiCqDqdLeLbS3kisCWMYjBZUPebyczNtkKsYE48hEXAAzmme1RpEqpQHhKCNai",
  "key15": "66ZiTkNBTrvWetox64wzxqhHBjpAfBzchR6qXdA6XD7eJkAxqhxNBb9LkMncVevMGPEJFNy9BBvXA9566b6C5Q3F",
  "key16": "4cNUMSDwPTxz7MJhMkPpKhM9MQAetmZai5jREEFkKoJrMKbUK18J2K34QKmCqm6YTfXtBYyewrsjT1rqzAhjG5Ff",
  "key17": "4s1LhYHsp1GuRV3NMLmQoRTxaXL2MVFdeKEjZwhM1qCovPzb7BgVwifiDHdRuLGcqCSBuKZXXfXr5wgY1AbCNK3d",
  "key18": "4Kf2L6CQMfMLdUUdDFsJkQeNU7xvAJJgSDgG1iVox7JfRaJsh2tcm5ZTtPB1GZvCJf95Pb6bSWVYxfAB7n52CxUk",
  "key19": "2oo8jwjsiQNcVuUkLEBzEbuttAQMyvDry9UAScgZT9tEXX5a7ALPRWqvTZvD8shNkCPyCd5gAMpnhNMHGwTHZtMT",
  "key20": "5zKuRcyTjXMLup1r3zaMrQzu8cSJvUdugriWUub6qL7QmsXLZWJga3YTArAq8uXd3uPxX75Mdu62pyFA4ZraeHtW",
  "key21": "3BNnN6CdjBBFbChPwB5GFfCnrR39Z9vzpwLNL3k2rnJTBdufmxnnmWCAh1eDnRS8VnK9ZcTXi2KRQtc98fzBonEj",
  "key22": "fFcZZz5TsXFqJfotKs4Nc3MhbQbVm2eySN9oZQvoXDWPrFycndi58921qSxj6kCNpP7JBNBWqJ3q5X2ftGxzjc3",
  "key23": "2KfAG5BAW4qjDkEcPeGksPrDv27cBnwuR1KdxakLM5xFmZUAMY76yNzBikUwrK55LvtrwobsDsDd1mk3XockNNdu",
  "key24": "3JfyabB8GHSgUqLERwnDi9N7DUujmDa2pK6dL49mmYN43n6eehiPnnVfs9BpN5vXTy73XuHYEdgXnfmWsMaS5LzY",
  "key25": "2Q9ohWdBeQSYFQBJe6krG5dMuhCNEsDrzgvfJdwmaGuLNmazYjkhAjs3Gdihwb7xEvd4Z8eLNtpNVE3kTWFFdtBt",
  "key26": "3Fswy6kTWydwSXtiQw9frDQuVrk3PjhAmPttnQNXau6vzg4D3LVE2Woq8mnVqwMjuwtc7SNFhJDuCxeRoEEBxu3N",
  "key27": "2mS6LCZFNBnpNVn6qt2CnQVHX7vw6LCE6V8EGa6cn8dyHHDiAETDzLysMDak3EtYjxFYaCHGXiTSw6F7F99FSx3Z",
  "key28": "5XkFSvo566WDDq3SdsUU4x3TQBH4WQvWEoHKm7ueg9GJaL5xvWTRmsVohyBqPejny12XV862hzTYPCRrAwxs9CyQ",
  "key29": "MdXZKttG6BxgXfgFysgsqeP1csZgwnjqFGkFwQfFQu1Ywqyipj13RLdrSgjbtXtNKZrmj7vystZZ4FDyfE1QQmN",
  "key30": "RoQkUo7xeTySCDErVrRyruTKhByMGRHn85djg54jNzNp8Q6rAx23W9CnVXHz88qTkJaeiV7G3efywN1sMSh2vjw",
  "key31": "4ZkM5G2sP7zYUrn6C3JYmtZNU2wnpUyEyi8THqz4JBasGdGEedUxocjngNqBAW5AtSKpbRBQQ3oxeAhy5kJbdtK",
  "key32": "4HxGp3jUiCXaLZfiiQL5uRjnj8yCciQFuVznBQhhJhWFYGPP8fhvB6bwk9sDd7uQxuowTKboMninfvn6RfNbXf4X",
  "key33": "5JouxmVTZxypSd87JRSF3AJciMtJtEXk8AEFonbTYFb1NfuvgZbMHSZ28ExFUQ5BohVWWkMz8VgKBLi3VmKaHSbL",
  "key34": "5XwprXj3NKtmmU85fE3cjFmWgm8tV4stZmfxHrVDGK2tD4GokMq4CdtkLeN3GRJ1rRFJnw9LWeDjVGRNZ2emLkDf",
  "key35": "2jDG2QTv2WFiuGnwUBjsJronC985wqJrognat6X8C3RkPhCSy8QaAT2xrE26s4fQF58KMaKoVjgLmqzxFQgGusvY",
  "key36": "5G9L2UQ7kVtUD6Po2ioPBhSnmgY1nyB8GQP1KWWNLBrEhScw5hdDJFP8R3JPTSLJGGNxrG6zxNpnGjnugzPA7DQS",
  "key37": "2hwMKAbDBdVJ4C8NmRYKH2BQbGW239yi8GqQ8D1hKVywV1mBPEyDMuKTY99BkZ3q92o2o4Z5XCNcA9GnYG7UQbwF",
  "key38": "5P1d4ykLtzDBVX3NYu1ffdwNUbxqEUN7HKFKXQTornQZNNmVS1mjrMVSEV92oneHTskwerkpxF8nvgsBJiK2Cums",
  "key39": "37N4tcvpn61ZGttNwGZXdGnv1ouWa4TWqchrYJpaRRAbNFjqYeA4Kd3bgVL1Gvizckw5ToAQfTPhMMK58NAAoo1f",
  "key40": "6ab6tNDCT8MxfFoVxHFQ3SfvypecXFP2wjxbmiFJ14dh4hmmUyKDxD4HAbcabsqYipZGo3Saypjq7DFJgCo2hzC",
  "key41": "5kczxyriSsg3M9mFBwCYDKiYt7SpNACjqHMHiN1EZ7kntyQ8V2AuXQqGdxQDwNcnAbFVowHxRnAfNwBnWHNvWTB9",
  "key42": "33DBHnZVWmFxRYXRzGEwDKG6xSNZUGRqytSASTkEgV1nWo2jJwXhuxFyTtz6yGe65tFza73Yuc7ykkiSgb6vUkRo",
  "key43": "AUmJvSSSpTtb9Tx7vDkQS7E5fPqp7ezpiBuXjiARuDgWsB4zqzk4Uu12rpP8tSXq5Wu9yR7dG6d84bauSTeME2p",
  "key44": "5G94N31cvBEgzZYiHHSoCRhsHXB6UUUhiJxSxHjtXNXxe7r6WmNYJ3neqfRre2NfcrXmVAi8uhc5Qk7fe34rEmfu",
  "key45": "5JneKWGYJwH4b2ErmgHinGnvRSzxv5bYocectFjwWbqieXUYTQJhyPYQt5wN85jdwKjfm7oWXLhTAH2WbWGoyLJW"
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
