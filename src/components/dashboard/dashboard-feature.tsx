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
    "5Pd1DWHmi1Nc5sSjFXFFBGT8htUZ7pTf84tSD5XMYH13STVtZpCi4EdqqkndfQArunE1ZpJYrEQtTsXPrAe2U68P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btpRnsoqMKrvqCboSYQrkCjmfdhKRqYD8ygyR356vkv6tkKBe9Nvd1GeiaX9p9ARuDFBA6bUfxJvkXhwUAzDeBe",
  "key1": "4NMtRx9yxMLL1mBAoYrYoD1Wr6GEzEpvufQxdDeX1A7NcATvRVxQ6P3MPgkb7JbXhAMyAUdm8WUhx7XEeTzFPfbY",
  "key2": "5Vo8SgkEQZ4LYVQb1Nv1GPniQNHEgx38knTNYJV8W9YtXDhymi2kB53QfcGoYtpqb3kJEuLR9tKCApjRNPUe95hJ",
  "key3": "5N2tzKAk99pxmUFz7RkMcKa6EB1vzz9hk6NKVxZvBtMZCkxaMWw4b1JPmBF5GG2ggPG85s6ZxKyA7XDZhY2qtZnN",
  "key4": "4GXYSfZj92kfJe9ECwTiAJANY4ZzHGctE3Euk6xpZqCcs8T1wADdAn3H983UtrcC89CBJANKiopAxpaYi2Gqy6wZ",
  "key5": "Y9GjoNbpK8DQanv7qYeaWbY53uABFTVpnknBGk2QKUUBiNkzj8koCi6eP7LK2sAqDbYR2uVdcsaX964cwwibS6w",
  "key6": "vHU5pkbk8ZtKSHnqtPQPUrmFUibqBHKd8dtsEVZvnUXqTseZcGdYMpyew68aeBVSg34Pz8Jqqzmi3rDwgPH67rk",
  "key7": "2ErKqdHXYYMZCb1pLF9e6pwc5HmyTTtdUZsTikVZGQEqbAX5dn9fdSnSfQGXk5FL6yjnsmgLSp98cCZgMANdQEXE",
  "key8": "4W5b586qiDHTUcZGCwRBQAWLbpnzD2TQWvEY6zyYtLYGYU8pMaYicCMF98yyB9t4foGUT8YdDmQd1wJtZAJJxnpU",
  "key9": "2RbAFmCqg8bWyb2EnBcpUCay8hawKPqpw1SrcSdNR3fwyrit8GCufVJ6mX4EQXXEwtT4kSfGLKqGcuuigBBujBk4",
  "key10": "3ey3HsjV1u5WcJXCf7pcpA4DgBjWetCAag8mqQo5sK672VU3gnqo7DX1GwefhHzChEJuxgSLPQfXocoHdK5pdCDk",
  "key11": "59axgMTnGxQxUYxhAAGizbzf8SNEYsrghP4ZHATAFfxirtEjn86p4xvjr689k143VRmxq2PJzcxepGAfEegbbhWe",
  "key12": "5a3e3mSg2DVAxoh4nFNKy8sRSqfn99tRkXYJYXCvnJ358ggFmM71SebK659aGwoiNeBaWyC7YBLw6YQKAtJDdm6r",
  "key13": "3X6XJWdxj6ajQo2Ryi5WUnDahwhUc81QufyfUdfjCFzj8Ny8XsyWNi1ZP6vsYTADZMuMGqPXG725ntHGDDrtoPa5",
  "key14": "3tpX7A5wnjjk9bzg2FSGusLoRHRBvLGwwjvtQWcPHWygXn7MSiyQmZ18msPQP45atKcU4qWC6omy114Bg5FVP3kG",
  "key15": "4B859rT2dTZSxoZSgHn9vmqcVGVtzKdJwqGVpHrMuMS51ewbGWp37Hgmnt5DmEaD9PnzHLzW7uuo4HTQbzySo5KM",
  "key16": "51KmbUiwCr5yj8YnREkoxogDXnizT8y1yXRHNcbAqosh4GorR7BT28of2xH73msDXPrtJVJZKBBTEPFUxHLjjvRE",
  "key17": "WVP1Rau8Ed4n5xTvAizF8voXpjRvtt9tsRvYvJ1vUFVdvETv5F69zcJgjyWeVmaCxYcGTXsUAZ55DCad7zQoEDK",
  "key18": "4uNJDjfuCetEizuhN4koRPbubFuMEpQtyNrVUNk4M3H5v6bSnmQ4aTzrp9WWrDB16Mbj7oPuRuppcn5ixCqi4ijh",
  "key19": "HD2cMf4SXR6NbPftNH5jcxi2UAtpxX9jF2SLk9ADEAXnpuRsJ6DUS8ti5TKqx2iXUfbbWe8xnfsJn1kBHG5RP7p",
  "key20": "ppyP1PpShNgCiBbg7ocBiqtTwbMETWm2wzcEcKWYm4CPsfb4i84kEnFeg1Qv81YsJsWV991TYxg4vPWUZQMv2Hv",
  "key21": "WkqWLEvbZXDeC8h6j48JaDy5VswMFPfA7HqA3q3vmweKWQBsxb8v1qJufSTkyiNfnNwSuX6piSLca9rc4noqYXg",
  "key22": "4eLGX9MtHw4kaoxZVkcrKrKKebKhhtcb229x6bJtzB9MqyU9caM6j6MDbQ1KMGjWu46dMMTtvCrJJPAXPcDSsncv",
  "key23": "4ZRqZkofdQX17iNTU6oQXvh4wH8FVPUGxivooy7diScFiz5WPL3YDqbQfyrQtiSU76JoqkWYSBEVA9byzs8cXHXA",
  "key24": "2n6zwDekqchBzDho9ns16gcrx1g6oTbMJkpoCjhpFnozeNB1SGw3nCcZn5oZAYNYF7Je67ERwZLPSsUguUT1EQwr",
  "key25": "2fLGCMinz9q767beAwjuwrD6TNZ4bYcRWXBYV6vrJ4TqQvEEW6MZ9M96xFnEGdMtjvkHZsWmAGyhSHwbcEYCfYUL",
  "key26": "3dkWX9DEdFdeJHxuXC2d7H576dKjiQDvUQeiTSMt9Sa1Bkq1L96YfsaUbmrzC2uJEj6B7vqK2BagPqY4WhMAGPF6",
  "key27": "4GVMEgDLo9P53X9sGYzETnTFvxnYLAwy7AatWJWz9QTsTjVozXCB4rg4uSNdXADji3CMiMREBMpyNwd4nbZf65ZS"
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
