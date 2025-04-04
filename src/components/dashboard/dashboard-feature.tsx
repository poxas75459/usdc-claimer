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
    "3cqfbcdoqEFJiWS3XzFQP4zNQ41MhDXxyd8jzzkv9mtDVUYohvHVhTLdBhzsMd8eKPtHZNqbVKfaf8ZSHhWi4zDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gz2mAkQrQo8M93Sj2t5h82DZZhPw1FYU5sazHo178RnrhwyjWKr6xo2YK4gKTajJaudXVAWxtJ4iGJ5aDFAznn8",
  "key1": "4FS1jky4tQv8ffrUE4GTJTZ1PRe2VNt4q2mLBnET3FcM3kChuAPUoV6RZt157Du2uvBnYKodeyUDG11hhH8knJYw",
  "key2": "27BJGDkUFrYu3mhn48TF8S8H4SnsQBpvjx3NRvmmwJ2EGTBeN962wcHxS4LPg3bmatpTQZArFnVrHgWXGgKthrBp",
  "key3": "2rE5CN2GyDToK4FovSEQPTD6fxcLR8oPoc8qvUA6jVToeNNfWTc191aCsn7MsJixGCP3zkSno9FK6SM1CPnXSYMt",
  "key4": "4ik8nwTh4XsMQqQxCJHkS3y4RTp3fThzs9SkYhAFzHtvCuuE224KUAUWbVKRUckbcq6BkQPzbuiBbkwT474cmrzA",
  "key5": "3fFeSbqyde7H3TppcMdxUqM7a9KFnvu2xmaMcufWR6QjxkG1Bpk6w6FJPyDUMiGzDqisRfC9kXYkFfc6jB8GtQdq",
  "key6": "3ZcuiKpLQJ9e12Kwfk3oFQAQg56tTj2xUMPbzP8VXMsUXdfKqHzWuECtnjRVQohyWyukYTaydAQF3w6MWmRvnUCo",
  "key7": "5BE5e2bzKngBUr72MPCVfiRAL1CNscVuGiiYDYhSjbK1f1YxT1ayGNpZm21irZjMVhG6XWr6BC3w9Yo7tC5Z1FNY",
  "key8": "3M8MWbVYq5pU7UX6TeYRn3iWi1uqzndBmZQYchhAryJfJLxiHnseZTXTKqRZAasZYPbsEmgZusvqSLY4ioJyRzF8",
  "key9": "5Akgkw6wjyJ7i3iYVXb8Hrrdfiw3tqV1YBSpGnkjMFYsytoaHwo4K43gMC6WaFTTv13Tc7BxVAbiQyZHDt3LBALd",
  "key10": "5vwPYKCrNGrJkMptEx3tF4LV5zGS2gU7Vq63u5u4ta4mPaLtEDm6PcX7V4MrVzHHsytNecQryiazr98cYnsaAC8A",
  "key11": "2Gyduv5zfdejX6RffqJsjNxUK8m3cXwjYS6aL1fXwemfMdprbmWWANorLjHeD62xRe8n8fYxtbzPk6eyDzr3XvQR",
  "key12": "2mXyHPbAPsv7tyGjWVv4ZgXoohmY8Vz6zXDJKETkZKjC3Ynx7Kd3Doy3jjaLD72oeMMSmDebGVaZN1kihsC2k3Kt",
  "key13": "4S1VczDeBdGyvUA5hqS48bpdXuoVDLs5nBhGejw1yfZvcgT4SxZrrLfPXPt2tSgSsfWcRLBTgq3jopjJ45bTmyoU",
  "key14": "2owtpo7P9dgBZmtQXsZNEXtz9RvUTfZbLb2HV41PmWXehtXKE5e6RdfX1jtfCA31zXgNYAgCvqD8GCkjCwiEfqEj",
  "key15": "nCdbYeTftHzHSsxyT6EiU4VpMEv67vwZW3Yguz78Pqpmhfa4HHZD6NNaBwxz8jpYpN9PaiYHWNA2P8jAGKNTS5k",
  "key16": "3DiVaFZyHgHm6azLGN3aWEEXywpLhtbakjcmnAZcQyvPYEeixXh5xAx2TAs4tCM2hLMKprw1DNj9NduJL7Qz5Etf",
  "key17": "546bS9uNerJdnKKrgk3guAWfxnZ746iUj8k86zEKo3jDcew7K4bX1Kz14ZNdsEyBHRg6vVVqynRLB95gcx834vSX",
  "key18": "3MxQcAKmso8f422SoXai4anhbLv72forB6SiFuAp4FdJP91mDKoyMPjyYGrWgUmLx8D4UeaiFLWunpKVSpMFLKaJ",
  "key19": "5cN1hEWZVExYvdUf15Ho4gUdkbKmWLvjFwFCfJpKmeUTvagGNRq9LmGHEnKjMbKy47BCVH1Fu1bJ7pAgd3jfwe8H",
  "key20": "rVEwPgR8sM53NFC6vNSJKLk8ZiKsTgptQaoijA8RDQDLCtnUw6Q3oYv4J7f7F9zCWcDPybw3DoQREEQyPyv2g6o",
  "key21": "4DjmnJLtEmpiLDnpV9EPDBC52ydBUeqHBRAv2zTBNySL3CeKWp9SGJxYcGNdBTrHCRhZVW9kGXiQRpq4EX4XR3tV",
  "key22": "27McLWpMh7qfGvCyiv2wfE6WFyYi3qiZCJaT9aziAgAyNNk2EPi8eiQBkSb9hd4am7sFPVXLNY5tLgkccsi4iz32",
  "key23": "36dFEjeGCn9UrRfajTmTPjwAMN3k6sHEJmN2PcY3fK39PBTc14z58NgUgzP3cmJFTmsH4xpHzjEju4jJhGVU4DLr",
  "key24": "5vTsdrfhmuewFr4HB5vnJZ7ZFDRU2tgwSyfw5Qgj6Pe8Lx4sv1NA9JmkqFJ14bKY2DrQ5z6G7PjK1nnUDaMma8Zq",
  "key25": "4NhiWDPHcATn48cQKJdUxpysoo8TWRUkk2kwbCA64gwjwrYnCzVT3aLopq6mjWfNNX2Zk6TYNSJZ44br7yJNJxZ3",
  "key26": "2D9zuLChXjqUd2x2yiFAWmxCwhDRMdhNmdhBGX6LYWxxpaDEHLRx4phxmjMGx1NQGJCM3v3Njs7is4ou3jsuTb4Z",
  "key27": "qsmatXxeDBtNwikZ7LCwbrGC9Q6vZodb6Fbwqsx4gxiyV2cMkJr5C5K19d65Xs5wNBBKcjRJPPPMFS8RgdQH1cS",
  "key28": "42jB9AyXV5Afi125iU2cBQq747ryeo9KJjoYVLFEjxeKC5YQxZmvGWT7786gHajL37Lv9HSTNX3XEHnY29Errqvg",
  "key29": "3mdrxC9TRbwYiMyaAyDUi28MNwAPkYA8csLRxcdTeYmQtKffXxZJ26jPmzHC2k2aFGiLWeqPr97uyHeg83SRejbP"
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
