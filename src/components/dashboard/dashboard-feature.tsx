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
    "63aW2GaGSRwgUdJ4jJ23U4UKF4K6LuhrPWcgmGocgdKtwGmAUaQthtnbd1eSfxur99UCMxWWbUWbrYwq5g92WT9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31K9jGdgTGM8Kwt8jPaGS3obDWJ1xhqeU1UXXhGdneinvLCXghQ84oJon6wYNBPFmHGtM18hf8Jmna25SsEvVqN4",
  "key1": "5cJFebxTwLAbcgMqQisTRMWqFBLJ4N5d312F1cMZknHJD3ZW3GDhrt3ZQNv8VVcE9L1nfMshRfq59PJc3uFTnaJX",
  "key2": "5vH73jRHnnhbz5UcQe3MapHWd59CXbebH2bjKeLz4SXAmko9wi9tmMNDeeJeeVs1AWqfKr9vvpLb4Tra928aLLpf",
  "key3": "52HSiLiSTERtZSc7vr4mTSJtYmjaVhWKMQ6hzxAoS6phsVjCW8U3K7yeVGL3CTXT8hqW2Td9mUBaopy1kiiwwCBC",
  "key4": "3Tp2AmatCb8ukEQSCxBbwNFPd8oPNkAra5MzqkzLwj1JHnnMovNU36a6n6DvLiNX718m6KyUWhCN2W5VRVyZgVv4",
  "key5": "5SzhHJLMMtjw8AbX7iwfzqH1YugZEy6mubLxnbvLTVmdKxjGbWcGsfxsc53CvrPs7TazLEYoYRNKXwb4MQYhkQtw",
  "key6": "Ej27BU7P3QrmQNQcWFsbGQWX1ieZFg74qKkUr1xBqskdPeyTcmuxH9qrpwayXLV336QWxpZE4okmemEJBM5GJD3",
  "key7": "3nFsQc2zX7jxYYYASo9TGsuC55kk9WcrHTrNoy6npNgqs1GZY72WGwtnFt2h4ReGk5G36abCag1MFNFwpJA8YCkL",
  "key8": "52bV4WDKQyx9tEfRDvDVvxJmeFSL2VLLibGsqWTUBcRhyNDMRu8W8FHu25DsU1wzhyGAMns9Bhyu3JGM5cVx5r39",
  "key9": "n9kuHB8HZC1UxPKxymAFmiDcDc5cptLYsYZQxRPwqXRsvgftqQHVyTUX6TwrXuQPZhkoFpUxuduFGVfKBfSnPti",
  "key10": "2kydJuuzeTKmaV1TpbWsrtbfD2iHp31TYgQLNingH9SJQKUJXJqa5fEGJKmPiU8bLhyLywqHF7RG2poh8teBVVZQ",
  "key11": "4SrvQHn6nsFP8YdguSVJJH6tS8cHRx3FNfyCpBJFgPBhCS2126ZYYnVHFB7EjF9Y5zLVTUY4qtcddJs4HcxZKaja",
  "key12": "4k7U6MS95zZoBbnM8pFz1AtY4nFkb32oWsmcduGSiMA7wTo5dKjSchLituhRZvH381WRxtrjufg52R3sZHcTeHqh",
  "key13": "2yHBvGs3zcXjao4GMtKiy9PZxdrsmjumY6TogB6uhtiVKTmNwTmsBYcnArN5xbbpHFU7DtxhvuTUU4kBtkPwGprs",
  "key14": "5PsSt1RvCdtUKdVEdv1srJkEHWWXVVaA8Dfz3q47oa5p8PopQvRnmsXTJJA5qm8g6PuwFvQe2yjpJyDbja4GeE51",
  "key15": "2zVpzPA5H2pEBjfYGyyRTmxAGa7PEfgun1D2PwefCBosMBT1y3vBX29pccgWf1nXPGu8MB8VNHsUYwEynsyehpdy",
  "key16": "8qAUddBxbeEWPBrUNm9j57DyPtdZXURntWvufP7Lsjdr4i8cz8kjG6niRA9PDHwJ1t5TdBUqzA3Kwbma9qfvo5v",
  "key17": "55mKB8ckAmUYozFHsxsjUt229qyxm3Yt32AYWW8JcJQCjosUq6g63hzNqv2HnSq3X7CzNEJmGpD9PDB8i8MVp9Zc",
  "key18": "3jYhuR1T7j7ZcMHGKVbbJuFSfxt94rNReUjFr5zmTcpzgdKjfwKPGqNxx5ScciTR4NvEwQcmMCp58uszrgDVwcas",
  "key19": "byCKPasiFHscpQWAJfRLxnv7ir9FAkgZJfvPAWRVnbJRNiX2BWjo4wAhJy8fqsN5jgoikUg5eMb4A3vqfHc4oun",
  "key20": "3weMc3qgk4BZHt9Q71goZ7bmc8JZTjQinvjYuinEJisxprUTxvzmkcfmaWyroz7b1FEDjH5x8BrPcN8pRwYNW48T",
  "key21": "3Q1zbyQJYL1eP1ZbQXsR1o8Mm8tWD9takQtDURhC59TbqSHtZjFz6WoP3R1S2nV2q7JUJdb6XAvmQpE87EyhjJuW",
  "key22": "46oC1rawUSEM45DF72gsb69wxsHXBStiLiQcnLXzX1oe4XhbY1vtCACoTr99ibsoj9dMcwAf8V7uxV5eUkobFcab",
  "key23": "4AbmqAFj6pJg4TyswwiBd7b6m3ntzcFfYf9yQ8GCLUVQRkY572F5tutYb4pY11mcg7FrD3btsNXLtXc5YmSxSV3w",
  "key24": "57pyBxttTie6C5x7k8RLqzbJSMSQg4hZgbWqNRTPR3W2tfvr2HJLPcM3JvSkvczfNmb1dNTqt7JLx25CP3fpJhqk",
  "key25": "LdnoczaGjb8n3pvtc3HsViMM3K8NhDJiJjHnYLB5AAbzHxjN5vM7TUeHAHFnNLnfGNDmDWebZ27CYKMWz92ZKcR",
  "key26": "WSQ2H7ftn8XDRW9RHbSXdJftxrBz5ULHKMwnzm9sYmLonSKiG1CWDezoGKRd8NSYcYXmtRCBtwJqEu6RZVMrrCd",
  "key27": "Mxe4hV2LGizYeMacekupQg4HphfiBYgEwhGoS42bnubuJcsBe2DCSnCLBL9v1RLpH5QoWmCkR46cLNPf3Peg6Ra",
  "key28": "AqEBNBmWex6WniLvTR62BCiqVtVpdeCEGH8gcYajiU8g4BsCwpycnhvdFhyB6TnGWtu2W8z5WEc14yXL32fekti",
  "key29": "ZgBa4QXyVD6kQaoXK4DeLMMJgnc45q71RDEakm5cw82fDbMZzqFG1TQJGDqPmuFGvRsgb8WCiijenMzNjFt2HfF",
  "key30": "5gf53NrR7zQSCJvdA4ybJf2bXhSLzoijBWMsMFmVggtnEk5WRguQoYVzfidXY8zonAGtBdKUfoQmpKkEnsf5pVm5",
  "key31": "4pApjrdSY7mzWn4f7xhPMRrow53tLi1RKRcRi5BVwymjUcWCEcQgreQo1KuSbVvbzgEvnWDWR4ZAE8bDvTLTfgNs",
  "key32": "4hhndmT9PwiiQ87v5FKzPSyxKk4oPC1kbLsCnUGQvhXA6hzgPBbCTiXRqvTj9T9xvWTHB7kPAo4rwC5dYivjkgjV",
  "key33": "gXANeQUJeupTPKeDyLoq8j72LuydVaNzzicEukmBCjV8vdzW1t2DD7A1GN37W8kdf5Bm4zFf9ipiPpHQT3d96gv",
  "key34": "4E3imMGtiWx3yKm3EZcvvwbBJ2Nj27gqthRt4QkQuFmgBuiuiQy6o4FgNZxmtb3EvSLDXuTX93GD1jJPMapvVr5W"
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
