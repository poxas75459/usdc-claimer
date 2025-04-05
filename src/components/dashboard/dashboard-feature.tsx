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
    "KVdSSqESanaq2iN75aBG1BuppGxn413PzS8nK7XtVwb7Hy3Xzz8NtdBpMohxXkTcPUTEftJgX5eEEQUbMqiqUnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBPn3bkGTGNei5CQ3cjty5XWZF5G3qUtqiXgGbA6pSFEXqHNQt3vpZuLTH5vbJbukpCaKvxdmcFoaPxfknbgQzN",
  "key1": "48fZjkH681e5jQncVj1EwNTuqeZ8VDkD8gqn1NyKphQgjFkEaSkGocUiEdt1oxJPs6TgQgPbz1YGYEPf9PkDe2Jg",
  "key2": "3QtiUnAE264MsqaVqdrfV4S1AfJvNihcL2TwqvV9WBKLXUNgsh29f9REL1MDfnqDtCCQ5Eth1BD5WQ3MS5qdQbiR",
  "key3": "2R8JJmZQcXRpNBjhVRgmSXZbUPbLFhxVKbXBcgCkQVXppcf7asTEVv228xQdgLJNAZwykoYYkKQto9yydwDTP19M",
  "key4": "3dTLPoYT91v224S4Z5Py9ktmz1EmHuLkq65TPjVpN4dvSEydboWMCVV3NfVuyzQiqa8iYAsiU7CPqYhtQza2fgFF",
  "key5": "16PYHWjav3xkCWhSDxgBiSKAf87QKypiQJ7f9m1RdDi1pUv9m1edDAh5reHz8daunPG9XDY2jtXw26ZgAQT1o9G",
  "key6": "43F469FJnr5fGRDwgRYc9yPYQRtsafft4inygjEnWaMZJwYDyv79vb37iX3AnNLTY4Rom3uj5yLvtEJoVpfgjgnN",
  "key7": "2gDWjTgabMFmJRL5b95aoVUga4pDKaaQi1UWn66yR4xTHDp3pJwb9TaXacTcndEbFGUGTnt6e1J7HMcVoDKVJaA5",
  "key8": "jnFBdGTDKCAiz9wawVGtNRTMWWaMTuppyaw4njwNcdM29kzByoxmcc5y47Ghxdw2qnxT4LC6rjQVd5bbotoiTiE",
  "key9": "4hix6tvYFWhdewEegB7EGbzNCMwwxFEpKoSzeHDWf4eKhEW149yiM8PeTS2Mcxr2Qjd3Q6S7dXDyLAXs8QBeGc2V",
  "key10": "4rwttoHCpCFZTmMJE7c8JGFUkboejKg2FJVW3rpnNiutphyhEPk93rgT8kZgUfMq3vJpzUpZVeAcQ6ECZodzBJeN",
  "key11": "64MrXvgdLquiCdpSNSaj9wKNDLZbamyiuwRk1sRsHry4Tqp45zojRcZ6WjVAWdwpnhXq1a3xPGhkJycrB2zbD8g2",
  "key12": "xLwj2QtSeLNjGNgqRtfacphMsMX1VWQWwgQs5htqjsSoqNKPDtmvPnJpQs4fYvaPJAiTTLiSbRUhvfeATHf3HSd",
  "key13": "3xgCPtM6EwDexHX5kESgmrLHm2qMFUSu3PpmxkL6udWh6fTLC9Hbo3mEJuqbaAMbgr86ronpftAkX43kDjhMBEHa",
  "key14": "uqkaLqTdWBP8TTuuWK5xDkTyTwL9KxKueqGSdFYwp2LBndgiYQPo3KJkXJLZd5hGmXEbxSAkCZ3fA9L7p7tL3DL",
  "key15": "3aSqrEBQyrB6KdmeqvwptNAx8kebFQTE7STQULovrLyocCpo3H56vVzkdPVn7eH8XLm3ynkGu5k9ng5YiVCEpQpV",
  "key16": "2Y1n1nGDmbwHc2P45GaPdRdb5Sac66bzF7y3n7HWtVFXXroaRhWMLg5hBFYFqKu6RXzUpkR5JUTJDAFdULJX2rJw",
  "key17": "R3gvL2JTD1YdWAHDZ8oCWLe8A7nmen2JZX5YDbsDUjnZkmETn7p92zkgM2kCccmAGXLKG2YFsLRRvPFZLhDDguQ",
  "key18": "24sjR4iE8ikFULjqLpos12E6Cdo2EdQ5LCrL9TpwQFZi9RcKw3PtDFPLepHxKQhA2aP4Fxfyms7EfHvnU95SF7vD",
  "key19": "5eyFLeZFLU9Fgd9H2witvbCq2Uh1XRX2RC3YqRP9y8M2ZXfJiJxVqB3u2UrmJiwmdZEuyxhJZgVWJLPVFZDtzcfi",
  "key20": "5cn5gBWPCgFdRR7ZVLgy8GDfAJfAwuX4gyUZbmwoKZ4i1LRfxdobCP4DFDbyDHWpFWT2S3VeC9r2jft5AJDoeLAR",
  "key21": "4xLnNoW2rwTv9gKrauqSXBqsti3fcHpmLSZCamtMXRgwydCZSNdZbaCEBtu8Ktexqacythxs8BaR29HDK76dMS4Q",
  "key22": "L4kgNFKTXvhMjcWgDG5nZ5kofZzCi7b1GRXdXp1qjR4pALVoQN9kNgvCpvWiq1xmckt96cdG1WFJcWwwnLCgQgp",
  "key23": "5cStfSW4PTfNnV3AWM77cU7h1W68tpPuVpBgiFPw774tz9FcPHi4pLNc8iE9BH2y6RRgps2FnvQf8onSvbswseZL",
  "key24": "2jvrGhRJnuBu4yeVH1H6QFFCoRBfmziXYtHbHpPLzC5KSv5Pjbz5kC3f4S8FezcDsZnRvqwr3Q5yKoisFF1xZRkh",
  "key25": "5BYSXVxJkF7m2jdRmNpjRb55gkKVuPY3dXu4VzDStqanrJAFxZnzafktm9dCFEmZLZG7ZuJoyt9SuHLeBBXZDVM3",
  "key26": "2nFWCgb1otANUwLRTf5yjt3iMGQhhbgTr6QEM7GCviHfY7k7GFcpDTPm57qagnjpELcm57BAxMUA9r134N4bwttn",
  "key27": "hR2NVXsNa4iC6XMCpiwMs8GEukFbCUSQpziHAT5agR2yiYRZbmrxpynxW56KSkZxp1cniZcv2v8Xa22ZqM6ZpW1",
  "key28": "4s2zvL68NCjNwemP54jjtEFJMsGgDUrsLFBX3uoFANc7AbTa5t9oQVt7dsaSjgeFFXL9RmzEX865XgQh1EXgki9f",
  "key29": "31E2xUK3pbkvcLLfUHZnvWFSN8WKZoiWhmcziucVqf1YPaHuMhqoz65EVVmSPmqmg4sK6RKgRPqeAA4PXMgeLTjb",
  "key30": "4o83vNppAD4cPhUHFYF2GTRSVhV1Ldpc7veMmj4RoCe43V7sYzbGbFASt6j3trP9Vt9DB83cPrNzKYYyj1wvZJ8M",
  "key31": "vFPBhzgUWznh2WRABnWDhjAL1rcKsaAoLydqR4kvMsTnC7eEctmV68PvEzZgxmVM8EsnwfFgHHW2vHV8eCxrLd3",
  "key32": "5RhXu9NmZf8C3CE8dNiG2Wtqh4WoNBEqcPwQF2kco9ZZhZNNv9bbR5nkZUkUkbvJNjL43opscVXGse7utf3oLiFg",
  "key33": "5YLsZHQ3gdL4HxtySv9gKp7794PDfyvxUSjj88UyBpvRVs43oLi4KP64cbNTvrNnuWAZErU5gGCVceawN17tStVw",
  "key34": "5EdfTGfj2suSbaHgQAi5RKbVhVB1Wor3EgpuRBdtkYHz9jWHns9wqqUMCLXpHnUQsAKNQ5ubVdr3FVfpKp2oG3mZ",
  "key35": "4AAu6c6gKUbixbaiENoWMW13bV22g8kHrqX664oeRk4YoV2adEXfQP1nsWtN5wMpLHCvStUAHY2NL1CDj6s1LuFE",
  "key36": "3TdEQTLL7TcLUTCSqNHp9XT8NNpziwUs8BJKBBcmyFtLjhhHKPhdivp5oexk1m3iDhi75pjtXNrh6g1sS8kvz88v",
  "key37": "2yR4svwoE5eYwSu2hgCYJq2tJcsxy4YkWYowTL6AGFt8zydhfKn94TWW34hjmXwDtuQQe3af84PoDShh2eNbrguR",
  "key38": "2YXeJDaWakJTVSYkicfT6BkxV38o9z3vLopHAcnf3HeZkQarcEpRCx6PG2wosGUREZ1iEFxisJVCgwwN7e3FxUKL",
  "key39": "f4TbgUjVN7fouCZeCYCvutS6Apo58yHnibG2YCPZhCkzXbwDz8JuXccV3EmTfm7sexLYzixD9pH63dk3NLtQ2gg",
  "key40": "3MQyhzFmBo6yLpg1gdCdCjogBGWN2BsAyCD2tKuY3ATnXwkKWAzGUu1NpZfVechqmiUGuNHy3pgnnFw3VqZh7mm8",
  "key41": "5U1Wvbd2KmmKxZtyDMyuBhhve7iTR87YsyQxZ2YAMZLGfnANfYEDgARWFkH64nhGNcSX1rfrFQ2hhYHtQ695SHfU",
  "key42": "PZHRXAXNQnWCJofbQ7o1soYQsPXSrCacLANpMW9o8pAjDE72jjwQBVQimyLTxxX24gn5wPQdd8i5XeRt97BRbGa",
  "key43": "58dFgtriyYZLh8Tsz3s1vQa6NLiUB6X7UqrLLjqFkNT5vMUDXZBX5G84UitFm7EuitWEJs8pGaeNXpd6tjsNZ5tF",
  "key44": "3DBgW2bnrGKxoDefk833q28kGM6GkAAFYQ3zZXJ1myTefSJyNgixrfdJstoy9L8iUBkVGdHCmK2d4ALkxFFmBiu1"
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
