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
    "CTuPbqw2caSZDUR3cmxz66E5PVoFkLLDrpazhq8PnU7nLK823jLDRK24EBsPeJS1tUPonvMfwxZRCAyfQvPhf19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vnso3GPkYokwPAdeGyoA5HKFfwbNcu1carsL2PHymLK4gyeiK4awfjLRjjKsK6KpVCsW1vP6Mk7GeW1DXbJ5dGT",
  "key1": "5UVae9AJqg1U9RyQF1NAgnNsrqLG16tC8hGardNqfgkAEJpDdPgJ2P6Phq3rqToCJLdT5vLYZ1xgMmmauDLgYhhp",
  "key2": "b5YU9GC7hPR3YnAq9Gft9Qr6Jc38VSG6QAJKByA4B8x6KXduXnzpdF8inK8cGuAgcHhBNDDU8mzjRkASLMySiN3",
  "key3": "2FTL6f8h4byUtrdDnDYAF6HiWMjnMip11qZNCf5pkmQJWGS96iLtLmeW4FwufHN46SojwmACfoG29tGGurTWsuPq",
  "key4": "4orZNP3GrY2UArYxueCr6MvSygYfbnz9BebccYj9Bbd8sRFTthtxjmXXZA1k2SxvSYaV4jYGC1jWygQEfqfpQnuA",
  "key5": "3qfK6DNeGnw7Zg5DrmSgEqgGDQk6wBEVNwddN6ZFzHkM25ZKmXu2bdV4HRLBmpYD3u4MkBKrS23cZrbUFAFWVb77",
  "key6": "3WfJg8MRWVfCyM3TYyXLSe2nbH5r6RXSeHWye2RVhHkS3KSVW6KjpZXhYHGo5QfXKUMxCuxFg9NVCjwsYdRZ1Wvi",
  "key7": "47fRZqx7tunuAeZCdWpyjqRKamSK5vbyCbQmJoiT78XNExDiQjZE1RxD4Wb8VXDM7eqMqUXJS3isn15mwNZsikyD",
  "key8": "3bAGV3LxLeH9PVeTfYNsUEAwChqcbvyMptnyErW3afuYaJjtfGDTpmjZ5ubFbzqUZU5jw8dkC6rQh9CJxH7caS61",
  "key9": "56tnEccUAQ2QzUWCjVKBrUJarqiXjZMBwQFKMNafGQPPMMDPFbJfc96m4bJ2BSeRFnezeGiDZxnA2e7cXgU7kj1T",
  "key10": "2pkE6Mff5CPPxcAkCLt5Fq8uNktDm2oLeuXJR47TDk9bFtwoN47Hn68zmywBYziz3DFpXaPLg2JPYajngGNhEhQM",
  "key11": "5TXJ3gbkwj4c1hoDLbR2Y3TEGDjnmbdckAbNcmgNwb24PPvpHdsLYXB3k2SxuPMpCYRwaiyNCyfRZ9736hT23Fk5",
  "key12": "4aJthwc4MUGpcfUaGQE9HcQvtNUa8XvwQd1T1tqJpz3CEdjCk5tEKbqxfrSaupHPCYBbRSsngKi8zz6QXgrPwXCY",
  "key13": "3sio96ZB9HafpTHxjsWuREP2diCJZjENkSCQzWHLyCwQXZtXprBx8kXzUpRciMuwRx1JRmBWNC8BhaJq3RJ9XmDy",
  "key14": "4U869c4zuPXtGb5FBqTE8UzyUJCtLMzSMa43mETQv27ty57JmMC7DUoQyXobWJExZW1vyyHsSyuAGhgL7snnThNu",
  "key15": "4yyNkdytsi7vzhA19Kiorwww5AvG1fnUHa1xhxVSE7UZjgY8xsDuBVjQqezkuUgu32SUAmoBPLDLfXuZjeWxmsqF",
  "key16": "4mNoeAjmjLBb7u1NKqd1cmK1vJuAwrAwuMWEdZKD1ou6Py5X6rPTXVhkqk4vD6nLtHzb7zta3okUbrV13XRvMXea",
  "key17": "4rBjwBsjPcbWwcwhFJ2AR8PPLJozKKmdfbhF18ULLvbCkqqsotHij7NKnskQoxSUXSxuTBenL9h7oezgwb76UBZH",
  "key18": "32nNfRbhCkgQURJsp7wCjV48RaHBK1WtgxdWf7KyQLY5tb9eAK8cwmy5qmCmsuJAg3zf9UbfSqk8UgcQd1QkkAXF",
  "key19": "hxGvVb77VffRNt2h7cLBTF3DLBbbcVAzPgULThtkUfqqhfNUhiEZxkrSnEiXgNemCFcv3evtiaKDAdw2LyZj6gY",
  "key20": "3NUQbyvRJi28AVXmkUb5c76zjbsPag1o1CKEZtqbQgDDbZ9HwaBWZMuC9sMpmXs1Pn4XogG2kBMQxypKAvdnMMSo",
  "key21": "2YDv3ARs6uHo5FaT5d2KX2autXh2LzhtVoBB2ioxc1AMUoxw1u9PXCzdJ1noFhvQDv9mrrnVmH7XjUBjqL9F9x7X",
  "key22": "2QGdUSaN5t7sk4yRGBeNRmXVdQzSgmX4Zk6M8ke9G3Y84NCxn2n5E8Tn5XcDmUrtgRq7bMZXZo3wmdPSx5mB8ecD",
  "key23": "61M7zvaP8ftPagwuhA7DSixKM7BRGjhsvNdTEAYcPt82tfawK2PfAAG4JfJTf7zy5Ej7AdQP7REgU3aJnSPF5SU5",
  "key24": "3SG4JYpTXqAMYq7zCQ8Hsy3v5Py7oLiTmnAe6UZF1nbswWmhqCjoS3X96RpsqnpkXD5ZJaEj26nU5irVif1nxnUs",
  "key25": "Wh4P8Xmm32h6hivAs4838KTkQ8Jqs6u9myU4ZRybX3E7u39Akk29U8mj6jkHLjM2rYLBxqLTRj4sinNMm2E68RP",
  "key26": "3X6bZT3Q3RRME5k5vVhwPJWNfeL7cCbisTRWvKEsF6ev3NDKZjxWfRQYNATuL1Lkg2VVuLwB9JxFsBZnXJaWiSrQ",
  "key27": "xPTs4sLTgvJrwGQohiBv4dXnFhxaibZviwNGJnW8njbYe6jVbtm6ktMDEzzbKaxRHEw5DnqJAsNFy2RWpBZqBAD",
  "key28": "qMhyqxvWEVcnRUEXq5epfpAzSzf51ykzAjNz7UWXhe77pamPZK3M39dWrW4Fim2TKqRM3nz9i8J2SXhZUpRZNjh",
  "key29": "mkueH5XpjcuXyCeoxewVqrZdLk4f5pTJWccpviojbYUMxHRJDzaqNwHwHuJi89Ax8Qq2mrnd5LP15rWresxtcJm",
  "key30": "52sgXtFJfWEV2iTFTUxt427pP6Qtw7qbsrPEhp5wVAvxgpdszi1ymihYhDbmsNmCdVFyGjAKqobCijrAd1CSTuU6",
  "key31": "4nSzVAxLjrhyfCNQzztjgThgA9B16se6oyrYS3wQq5FmVUYGs8UThbXngj3NmK6hgzm74L8LnFKkBw2xdqJTL2XG"
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
