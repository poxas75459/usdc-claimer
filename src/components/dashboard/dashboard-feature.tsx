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
    "3aX7QMEhvC4uG89MmcagAPyNfWS4oeHMz72gSu2TCbKiVcHMJP8teZ1fWLJqSsA3mbTkBu6f1pVrRfJTc46xJm4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BpxxxTVmNWyvW3YU6a34wETjKQ5gsQ2p62TWiCF5PfY8BmGrY7e6A7HaYdP1DDoRD61L7gsXEqbxUExReXMsqSv",
  "key1": "VKtp6ZcyxDVfUnFC1UEzKVewqmMkzUWzQELJAKkc2UcQ6iqczaTg72bLmYa6hnrWSnyEqk5S9siDzkWLMjt3xJq",
  "key2": "2LHsPomxbbJ7XScRUGzCoq5PNyzxnwfSP1NtFzZ7SkqiUxfP5GkLjieZtobA7vQinfVor7i5z8FdRCAFdZizvfJ1",
  "key3": "KQtbW6qwrHScuAnp6sWat7hxzo6aSNJVig5RgKobfNGE3Rar91yM5qVpVdeGK1Se7TjU4p92HQ1tKWMQQeG1SHV",
  "key4": "KKY7H7HrBf8wCXugXFierFLvoENv3TqUfhqq1PXWFgR2cYR94cQk6tsNaSgGawES4YUeuzXzb5aFGFPFgYyS1MG",
  "key5": "5wSFgWrrZ6Tijek7amLj4TZj3Ne4WLUnMV3zgFLv8ZXEZKJHxjoTtxE9ZxU4kxrXpshCTtLhPoDCJL2c5hrRaNUb",
  "key6": "5zB9MAUjTiwNojuYZAw2CSvDceknyc9RPumdw2vhyZhq9AQWMHjpqKpcAdpk3jXvptfC7zyMCGpH3bTwtniSvTph",
  "key7": "4P8wRWiB7yrWijvSjZGDf87GMYeZzbdkcozHmu2MxiLZTmXgL9UVjf1RVhtFVDp28vPA3WPbKdjbbQVSaiPUnYZq",
  "key8": "45WtzuQ3p7DfWoPxZUphViPVm23cyjTpvBae9bXUsrghuUrdV3q2P5u7htfGqNEtWZBWYwxggbBLjrGcYJvnx8vd",
  "key9": "51tuTd6oxY8CPRNfM54YcBWixMLVMB1K2M7iWHAUMnGv9deKGLyQFSubPJBhyHFVCvSfKTyVXZEsueb8A9QM6wXH",
  "key10": "aLrtgSQBuauf4mcHBVb85z2uH7V4GrSfRrsu9ajhMV6ZQZXK24LFCSj3EZL6BtEaYUGTQ1TrFFzVrby8Cey6pdj",
  "key11": "2SkF2Sr32kdcHCNrGkRsYSj1KjjonYeTu6HCTtJS1MNEFVUYZKKwQCqjzZtNP24otEwbJZZ1chRVMH6dhLDinTa4",
  "key12": "5CptEq5KABKDurett8N8XmoUhNYpNvALtpKBRgn6dxsb4dFb1yH3vr5xzGD6SNXoqPgy7vHJuan2QSd3uf7Ziex4",
  "key13": "2Nh9TyWYPZyhRm9MgRKGBw4BPpEz9fd4uSvV2LfysxmUvhZvi9fD4C6zfFCzKzmAgJ36BpzJRrP1nHarCRcWkksx",
  "key14": "2CEN8ax7qA3b96ne997439KvTXUyBuwp834s1fZgNBejQMtvRUSkepPS2L8RyYNjBhmyhReMKzhZGLB1x8KcC8L3",
  "key15": "3bx3RJDWGWS1GSRETAwzQ9d9DJQXo3iBWzUQUBd9RUKryKisQHEUsxB8wiqjXsWpGaWLSarZmMjB8puMZU8NPL4H",
  "key16": "3Dgaz7Jxp98YanqFUzsemK9mRZbR4MAE9kVdnZKJ3oLwvd3iP8HbqbZ2Vh3nwsftE9tfoMjiuJz2xY43Ns8bdUfX",
  "key17": "5jZKzHBt4WQA5SgoTnXGLfbR1GQQdjj6oyuV2VAMvvPDSMHtGWLqgngVzGovtN7qmpr5Jwn79tSFmPnmiMA1GteS",
  "key18": "MwzK1pAjqrvUNfor5Q3yqcFHRJztbDm7e4CFPHRApz5mEvwDo3QP3mtRzNwzTJbT6UyQn4QLkdo8tcqrptB3HNc",
  "key19": "hbcEwGbZkkz3jaGTuAQGwj8BHj8dMskykxafryKLX91WrUVrvLUbixmjg1rkePEZcsSUPHT7q3qMVf33Qo51uca",
  "key20": "66rRzPwdFg9fv8EHMEqZuBrXrYwodqQwnsCETbQku8zRm7sovZE7ghK3NMht41SgEQQFHTiQxn2WEnULJEBELrXp",
  "key21": "5LYPAdTkyqzUFbDbr1wG7M76dEaKCd9KXhcj2aEtQirVAcWvWawevDAGFRtGAnCnsQ1z2tHCyzhU6Pz3ibatyeq1",
  "key22": "4n8Kbed7CFvoWnCrPYt54Yr57A6Wpxs8NWo1AccLnMN7J6UxtoX8uJXTuAF4MpSurXcmtLtWFre9YdEGDDmFcDhE",
  "key23": "5CZSAUkzjxncV2zHh3DG25CMsfbKbvjLfVMmzoq7b4JyJBMhcB28xfyxQuW2SnEAYowiiK7A9VA6Ssf7jG6Y1Jf5",
  "key24": "sozmGUUkKsfUaoJC5JpyfhYo5VRvX2y1Vm1og48SCVLZZwwbazoYPLaYnMbpCGL59se9qSZckyL2kHZsYC1VXRB",
  "key25": "5zFFz2bpYrWnCJYajeJX1j4bh1Mb6oN7VdDZxLvHtjDe46gmBG6W6bAEcAQWG6e37bx8J8vsNK5ic7xGrP538PGe",
  "key26": "39iLEyf6ArwmCUVGPtEjFPoU6dfT24qvw5orBfNYcTkgqvmUUBSAqPfEvz3eQMBPVpbF49bjiTD4nM851w3mQqbJ"
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
