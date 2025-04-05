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
    "5F4ieLYZrmWzN26tk7RVPc6p3A19pJaqkKt8pC95pqVCo2XrjPybayPxqe3QUEEw14wjXcYyoUKu8QfpM8h6bhf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SBHnkcozfjfD6PWfMfe8YkfRj83cz9xvXKoVhF5nwLAyVJfKfSUkbhmzAY7kHaJcbw29ENsSx9mbHHUdfncJ3M",
  "key1": "bsv5EPKECS1RycpWoFWSDJFY9vTwAboYDqYRUyWZNHQmWyhdRVXJx8vTDGX9wmvbTNqAFWmL8zC7u3hVuT2dpxn",
  "key2": "2S9oA7YTgPA8H3RV3CNWMe5xLPDEMbRxHo2bRmwwJEopfLgee3Wx5TYUaDr5FMBMEa21AS8a1Znn8oCsiqs2V3yb",
  "key3": "QhUYiBFpkkUCgMZ4wEw6q5Zs4Aj8bcNLZocUUHohK4AGNtzF7iXj565rt3DXRYgNzK5p7p6KV5TAEUViEVqd3VF",
  "key4": "5txfdpMhpzbbP3UoHAbYg6C5kxB1oefXdQmjTpsxJ225Reh9SvKS6rjeNvjHr9uCSemPc4QApkVaVaTmB2LPSU4w",
  "key5": "oJ8zutXhvBuXuvqnsZHwSn1tahRpSVPBRGnrL2uRA4xd1UnCfysoQ6rU3x4XydX2HpWmgb8ku4sVvz5gTgisMDe",
  "key6": "ytZipEMBAwWWL3Y54nwsyFM9k2LpPUi5j8DwHViHoWUfcAJCHGvQFjv6w6MrgNipkmMgrQqyDWuf1vWxGaWgvPU",
  "key7": "5PJbnq4RKgCp74SihiaZogD5tS46vMPiUA79ax29RtYN6k2Q4iAx37zxVWLUmxv5jBAzJZpYu629uKpq2CudxjZ2",
  "key8": "Yp9cmiT4tsht3rzkAeSpiCaFonNM7EcN9pi93WBRvcx7bvw2QtrYzz5etszpscdr2YMMA7xNMtyerhVYQRwbKhP",
  "key9": "5kynZx5HP3FNKqUheGPhNAUisVaL9fVnApDdH37KZgtNxT1GwhACZtuMtn4sFcQ99pgzfjmWprmTg66dMf11a3v8",
  "key10": "43FzFSY5EvgLEhHw7Wb7MHCASxjxbEpdMFAgKYXA1nvwtMV9L7PgvL3AJ3LYUQaa1AyiTPUEk6mh7UEHBnfKNahm",
  "key11": "5soi2TDLbinXw3vBfTRVdGtMDcSj1zB6DvZ3fZV4cw6bgc2x5vJwyaDj6jyncx5NBc42H7Gu3tsCrFgc1Fb7WggZ",
  "key12": "53NUyXoqYoHnTLTwCC9oNBwQYQ3CUUs1BLJNxbGuCDjikpuK9CKeRfBDNcCv1G2vpntpcCjEB98NXC6zPzLaFgC7",
  "key13": "NWLvTPY6wLzFcDoH5SUTpfPowXou1c88bWp29rwfFm47vdLG7JbHctFM2gZzdLYZgKEcP1QDzC5ngM7hzhcjWog",
  "key14": "2qrkG4VKwVzrEiqE1L4jqwkMU1VcVPtcMaLa9ejtBL5T7zbLWj8An5b9d3GVpCKDA1ZDyaDPE59hzjSwjme8tnbL",
  "key15": "KoV2v7WkRZksiKnvozWdNxVq4cz2PiibA8FiA21nof1boMeMhRfZz2C4frYy5bKFhgaTtouXue66qfBVDGJB53d",
  "key16": "3AJ6V8wzYfMaPkwJHbY2RQx8KF9JjVQfrtn3YvFeq3pB1BRHArMs8shPDTctnzu2vU3g13wngerakoFTxWeEXu84",
  "key17": "3dZWyKvc5NXRJYmiA5bN2D9vjt51YCg1fmg96ns8SVWB1ZPRnicuwNKjP5yzWR5tFF4nAF82V6feD12oFRAR5GwD",
  "key18": "2sP9tkymq1nVBV5o5RRVENV7K9dWdFbVaRkyqmFWvpNEsZ1vR3nWkVkSYMmjDy34Nyw3kptPSVAKsshE5hzZEsWY",
  "key19": "4ktCEVx94NmCmisNGUGqSdbEdxXgRLZz35jYd4qpHcK9RSd4fYsGJ5MaQaAbNoVsXR5zufw2ZDbxBDLgFASiXF9n",
  "key20": "5uMyojVWhTUmPDWx3exFsqXHrv9ZPzhPZrSA5i4SDMaHNfEgB3ep1k46T9me9PSWWFmxAZFkDp2AqWNS6wESfGvr",
  "key21": "5MHbqeak2Gs3qgEyjvLEbpccxhk6fueCZaZhxafz8LoPMaN2Br1U6Z6ibNdKVihg5Z9myzmgQ3ocH6WvRuGB7976",
  "key22": "3tXRfjRmZb7R4LRgPLGFXk53iNUH2EsBFLJaWkmgpSxk9GWRMtqLSNjeW6fqESyG4FmB4y99CyEvPaBw8LJGADSj",
  "key23": "3p1rNorAXPGm5g4M6z5TESuAgsKhtNfc4FGFMVXJ65anfu6cbrtAJRyK5BqP883nZkp1huZt8KSRu8sQY8CJDf1H",
  "key24": "52Zi17aPpKqFrou5ajcrVvL9gpgiLcuVeKCZ6LK51b771rmuyNesLBz7wc6C8xfMZT81BZpoMAYUN8SYN4pt5SGN",
  "key25": "QL1qbNwaNB5FGTgcCunkcNGyLC6p6pZZykRssYYncF1wxFVsFkmvU4oecR2C88Zo47WStjXDV5eHDBtgF5t4U9h",
  "key26": "3iAFwjL7L7yp8xiQKvzF4wu3P7om5KuEsxLUYoGHmnde4CyMiPHwujL3FcmcfB3qDQasqwYZrqP4tJ1MaKYqdkS6"
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
