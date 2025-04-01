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
    "3qmE7Ns7es6dnqDQKATnKK8zJ9KPvMG8pUWwnWxSdAZVq48ziFrd2MpsLnSiJCgqH62ZpLNjuGm9XGfGp3W15q3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqgGfxN8FEn71EkbqZ9jiuQBktcGP8QWURN1kwX7W82gd1PkCpSnYgpdTBSFsjnNPrRRQPS3LAt1dsUedFtnZni",
  "key1": "4ZrzsdwX3q8dFpMX4TUN1BqkmLjveDKveApKonNYKTySn5HrUbPnsgDguaTmCqkNJ7UGuKsEsoMHSzBSLPy7iLyX",
  "key2": "5cjTdujxRYmVhWXGdRapMnzVxHoy3NjygQ7tojNXYGU2BAA612WJ4tHRJMtEy2R51reP2o7m5dbpfmLtTBZmBdQH",
  "key3": "66PLKVqFkLvWnvcuTdcTue9Q4aoxqK426PZa96adKUmhJ5MN2nygf11JYJNyb5gRMeGGHkhRj6nVrYxRwTZRb2G4",
  "key4": "5UC5GExFG7YExaqMgaL9Lvv8zAVJc9tnDsKeeC3FrpABHE6vf17vSkGB6jUTrCxBStKZWcsUXYxqdXR4NP5sogs3",
  "key5": "4R94eZ8UkxhsLzrkyAfsoysaJjU22YJrjJvbPZvRnqi7J11a65FS3cm7YbjMpTnecbGi6Kz584vSQhZHZMoandgT",
  "key6": "3HYhKUbStyJMi7ZorjjqVzzm7J9qe9YcArg21jUCT3UZ6dpHQeXEgBusms3LWmy14NSjnLsdLN7A7WrG8L5BKFEm",
  "key7": "5vtxvgch2KXCrdZkwthDwaowyMqBMDEfQQt3bvM5z8N3NPnnfND6eTjriUtPaNoBdXHCCo4oFS1cfAF82pDAsC8v",
  "key8": "51qe9fDnScsbbha5oqsNuuM4rpJsen7ri9rDPqjLMBo7GesKtsobQwEVyq3d9j3usEi6o7aCQNfbp4Gvai8QA4mW",
  "key9": "2jPLzTxSbN2j11Dcgwq2VTM2o7Av9MWV1nuhra3keaybfNu9j4pLLkzjMXWh7LmUF9LpDRkYD7ukt7h9a8xsVqw3",
  "key10": "4vjT5HG3vWBL8CvHfb6b62eNAuLHn7JbRs5LQ2zpS4AzJPZb5EUia6F4dT37dUDafAN1Qv7cvFpx2br399py8Hip",
  "key11": "2czfX9nM7uKdKJFJv8nWjcoYubAWYTXPrLNtpKq7sirSrbUoHMFkNeMW1mx8Au7n1P3gSkheotGW5ixvVzXCodmT",
  "key12": "3HyGQUByVUTNpztu4zX7EH633ysAyrxByG66LjBz213RLHWuQb6QpJMhDwLqhR6gHxti4yZdRBkDiDnaaALa7n4F",
  "key13": "2Czub9mqwL82K4mFdw3J81B3gE222c9ufksw5MMmgnNHgh36jjn3W2RDH83qxc1wPwrmELw4ZnMFDi9rbkY2X2BF",
  "key14": "3JYFTPrykAVbiCwtMLUKRAEDgxFuKxFdtwzBmENDbQ99LFRY17c8iXLfogx5tKBbrqW9HoZTgPBPe68emfJGz31H",
  "key15": "3VbPrvoB2fMmkouDXxbBohRZYQFpz4Qu2Ta49v9eCo2ETpyTJCCzGg6CU3VTM7mmtxcYVCsqFiEpCnQDJat7WTae",
  "key16": "58zvVFnRfjpbAsjSd7aA8xqLRwAMjdzwGYCSn6WHNUND1RgRVho2S4NFN7JmcVKpFaGGPUuBRPY357Eu45Bpa3z",
  "key17": "37eckdJPbaAoGQzLvc3errbGjbNbxxKyqQFiYdM6btcWfC9rAFttSePxx7S8odA7Ej1y93voSFw1qQJFKVXWSWv7",
  "key18": "z7h5VVXEwAD8YPmQ8RueibWAobJBwpxi21HLA7X6VRneFbvZ4M3EDETfAq7Exdq8kzPdMaJ3TqnQoqZjjH9VKoJ",
  "key19": "5WAx98iD4PGKEvBYMWWkyWmYm4Tn2g1wuojMkET6takPh4dhRFA1umaF2QTcMfRDEvb3jLSNrk46ZztGvqHrf5To",
  "key20": "2VB3TRoXeELv63cM5QmsAWN6bsgom7abTeYVP2sQgDVxMtw5a4jzNSMY8hH2hsuMVLwaHrPQYDLjugQKmntVwPyN",
  "key21": "2t6AJvm5rE3dRQ1g8dWuR2U5G8RFQHHcpCnvWyjKDHQ2ZYGwM52EPUgWgwFLooDbHpH8ywkSx2zuWbDsqE84w9mC",
  "key22": "4845Hcndkk5F7Lcevtb1uRwDY7EvGm482zS438hUVegeijFcF7JKJw4gbQx4ATmg2BBUK7Hczw7qzoR8hmgtGny2",
  "key23": "3skFgJTxGFazEFUjcvDHE2RzLkt1dpQmUhtnkDhyNCdJrqoJYjKFqM8CsjjW5m6stnJUwBBm9DNkSWsqUDpvnEjg",
  "key24": "4cUCnz7Ts8HK6Gh4BA3W1SwfrqdvCSUoSyVwTx8jwdQYwgy9hZdXQzfsggnqwZE7tQeSVjzq7feJn83QripjWUqi",
  "key25": "3f3D1zkeqMZzY2EauWkLUZiv7bW8BJzvRhJecfkmTCNXUxq1SooyxqrokCWM7ggM4K78scPsMkEDCvrAbyCfv1ed",
  "key26": "5mrzfWaXFEHkjr5RJtaY7byeKZwCfPMpN59jvcKart7VJ4ZnqbadRTrG4h1NJmb7udN3GxkBCH4UHsjqnaVtseta",
  "key27": "5SisngVfptp3t86XQVVwpdPvHy2RLA3fgApHhmmjxGptn4p1pJCszpcEpYJ4SHYvVxRNi2T7jeuyy6UpNAjkxgMP",
  "key28": "2Gfy1GXatSm2vBmNWNez5HLEiaT57deAj291svmd8DrxNXFN9FxBDuREj7i9QZq7SLEAHNdgm7BYY67CGhJnohEK",
  "key29": "DM9WDE5iMUHdbjz8wcmk7e9PPu2RF1vxLmTjxBRXPK9cF3DXEMwxpsZFqeChkRQjEBs8J7y3vcy6YiKeDaywDai",
  "key30": "3Twc3ew8LDxff3bwkQULdwkdzFrkbvhwNpZ2C2fwS7UZtS1DdUejuomtcoArwwfiNiJH86bRCGdUiQx2tsFpXeN6",
  "key31": "4F5qLNDppUFRFAWZTPFWueFUSdzfcGtRGGD5q3hZ586zVhADrAW3VXYPgh3yZuR3b8VVWhWiBPyQhNQYEXtmZ3bh"
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
