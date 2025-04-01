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
    "5kjMJurTW9wZ7bG7U73iwN3up2jVh47BTQ32hAfiofiPGHdXAFC5qTsc2esbPuWivS2hGgSHo5zdancgMogXCFYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TPBLLjfn9CYuzSnX17rmzzuUSgzkXgio3FePgbWgQs4pZGQTdTvfjqmwFRLWLY2ByCQkYgv9yizaC9aCkGdh7m",
  "key1": "2A3gyUa6e6ueLa26GiDbwmBGNv9wvTQYcuRnRf9RDnTnwNy6CMWwC2ANYCv6kgHJq5824Fv32HSMi31zcMM7trc8",
  "key2": "43RrDU9js7pQKgbDdq8Y8FbriMy6UCY8djhJ5GZiTtb7Pv6VeL2z4Stg24UHa8KpWqRZseZJrWDQfCdiNktyxngv",
  "key3": "41WA5VxEko6w1vU8iKx8tKmAwb6nGiyNttELY1YoduyJB1vJrhP9WM9xoMmvKHf5nU6jNZe5xoVHteFCK7NDstMX",
  "key4": "3NrGnoVLGxiF5iWTJnBmioLcahyEAkV1Wk1Mcrxn6vwCi6jjfAntnNbKD36Frbz7tgesQYWhHyCpkBLtiQbLRmvX",
  "key5": "6bCRnGJU1nBj42B19NVTonjR1ARs2thArc9epGfjD8bhHhZ9NfEFcEY9ox9eDQf1zvK7kSV3dqoLEXvSAvmXaSV",
  "key6": "18ptFxmpTL4cva6ap4hyghqFVt3P7ujXdFsXdepp2FmkW4wqxMQ58fYpsyE9vM6fx5zSguodLxr36eNngLD4KLK",
  "key7": "5vjrLyNA6cpB1JpwCbEs72Nz3FhWmAMdFCSp2J1mpL7Uc5zDBpmiBNZpfYP2WqY4wzy56rH8pn1uJ7N66iocLQMe",
  "key8": "4hXSJMWTz9AkMGRovxd7eN3qe5PJC4mjEJQ4pLV2CxkuPs7idmCsbrww6TxTrF66g7qRtTuaBzZxKnjh6jCJoEgJ",
  "key9": "3X6rMXarbzCjTzgSVtvne5pZNWvr31Qu6BGBxEjsZ25hPPksVebPsA8ryBVMKxn9u1pmt1EffhVbqYvpEMtZjjeC",
  "key10": "4ySJxRkvyeaxoZb9K3qoxnQ4DbCC9EXVAV25zxShkxc8aXw8Kx7KsJH4Tvah4sGXp8dohV1xaPX46eRwiW4gr4wd",
  "key11": "4YJMoLLnk492RwSX2z8bGt2Lxsyr4sCMjDW3fsxoruPpJFc63yrbZapJZNUjPLNnuzAYJELH7gNDyYKJjPsZew3u",
  "key12": "63m3UJWNWAoLdth3rr2uRWr18Vf6x84t2GX6sTEHfSjq5YNhKgE9kRE3Mf9TTm4jtSCuvGBjCf8RLeo1EnXH8PqL",
  "key13": "Y6kLLAYLp8XXJxPpvaomHLR4DeH3PweHB5PPYh3Uo39fbsYpBP2WNCYGxobWRGoj7zDe8ftakE9wyJVdRV9Y4td",
  "key14": "3xaYhn9pjgJrhTX15N2TEaP7fPwiHLMcWh6sEDqy1oxyarALEApDMbnps33y7NK4TjuUamjRg1SF4TiMmxq4BudV",
  "key15": "5TDsE3zHUuM4Gh2wU1v3ywFeLJZRBPbFPyRdXkMwtbWEbqEasxMnFZKxC76M4bfsfPwtqemNx5fRx9fAN89wVxYh",
  "key16": "3vjV2jBVQqgDtZcNyEPqu9X5PV79wKdJDKgw37kAjm2bfJdNvAFrSRW7QzoXiwAStxqLxgy3UTywettecz4V519F",
  "key17": "2Wcd6F4y2vbfcauXA1i4qFLWMtu5CaekxLPS2gDerSNEcWvTbWmYnh31Rgs3eWr4ZXAW7pfHj2LfnzMZRWvuWWoj",
  "key18": "pjnxfbLZqhqRDDCG1DGxNpfYt7JMDC7YYWNPu9QsUoGEZGcJtQE2qehxg9gDKqi91UCLwEVzZpnFd73cJMTUKcn",
  "key19": "39h5MACCsB32uyuopggCwinh5nwkbwZGtKWbSosbfDhYE1ssNqewFrb2qPcaG7HbMVhxEHxRY8kxBqY9XoYnHb6v",
  "key20": "26KAVkBKNZMo1diNFtMxhmUhjJeiWbWuz7eHUYmupoVDMLNwTL34eUVv3Cny5BydT54NTitTzo74zT9gDC5RsfBh",
  "key21": "NVcc1ubKrdiWzHzr659iHERQGfZBmRhnGNGhkUHZuX9n5cQMUmVfeidDHChEft9UjjHpRcNMpZZBUAZNg5QMAJJ",
  "key22": "4sBYuwXVHaviUaT7mWPy6jCtdnk5SQGvacQ8T3N86aZBWQURR2syrNZiNZ3GTLnprjt7JtiNUC92oLgSEJJz4Q82",
  "key23": "2eMHPU8XtS2wSFfrMYton5wAKkxGby315H4VTxeDv3ZJtJy47LeWbioZtUa3X4nGUyGoPbwkH5xJPSMkBBDkC1iR",
  "key24": "3c1x6NFAXpQo2tYu6Hfjd4JPwC8da84x57U5xKc2ahwcNPcmca3PhAV6wkzDRSpwhrxkckU5U876xCUz2F6wtNen",
  "key25": "5Nobotoy26Gyja4P4Sn6Dxxk2VamDAn9thDoq57fPXFeJHq6HPLkinn1tRi93pBXkXrRYhwxMkhJLHthrgkxRyPx",
  "key26": "3tGJMLaXN8XPPUeMdxrvWWZfkaTtLhHrywnakvF1iPdtAPck5kaCn3CdbiPhZ6cVQbz4bJGsK3NppyUc8NGxUd9Z",
  "key27": "5GRzsgPzDWqeaab9jH7y5hTTyjH2X2eMqfe6dZAL41qG2sw2t4U1vXJ2QThnYXtJmBg6oN18txCMFtUaB3kxrEHw",
  "key28": "5r7vhui2hFQHPsXRB5U7bXkQ8vLa2nTqSD893hctbJoX1fTzapSEGxkCszjdZjgnzGkgMTUvCvSMAjLG5efLfbU1",
  "key29": "JrJ9C1b2iRCk9ermnTBABbNFMAtdfAmYjHhDxvEtiAEWADcKhgrLz8svuivLuEe2X8pdrHGeHkcQWaZuiix3SRL",
  "key30": "VvKjjKDuuzngWA2x2g1M85eipdj7ocxCcZYbou2eb8QGF71Kc3JB9nCawUB3daMz9apMCvKr3MuG1ugYX1LP7Rd",
  "key31": "2zhQWn2Noaz1G6SLVyKfjfrkdacyXMbcFgyftc6DUNh5wQvpPSCRi3AvxQrsratKKfqB6r9LPMva3nTZCswBGEfF",
  "key32": "fPKy8vxv9G1Tj88iELu4cuQFewuy9RoCDZcJt4pNWiVPgiNxM6h4fRPgXDSCkDgYBZHPNWvV8E2PZXJHKJejcsD",
  "key33": "3aXaXNQoWczvvWYAy3mVKfTt8PBgn4mYbhxsdn9icJwyG9ThFh2QfFnCirq7K9hB6ADb7fpEgpBHJXQ7TQuUXr4X",
  "key34": "4k9sWEwHQfhLHpuCXL7f6qcg4ebd8ztpQ9Sa7d6M4hGNVkaLE2UFLu41HY3Z5uj6nWLKKPi29nb8fUipGgXfM6KS",
  "key35": "jHDnTw9414C3KP6L2Xr2144uY2ECM5wPmmy1AebsGTpQErJeD5mbTuYXkvamnCjMqhEySNFWAxYXh9nt69xYGh5",
  "key36": "3pKPsaRt2SZTSaXjo5XbrWg1vKgP4d4Zek8dt4AszUTg9nftz3Bf9Lfq9BV5PT9DJZFTRWiPXm1xBLRYDKN7JzSj",
  "key37": "2GckrrefBZJhVrYcDXcacNH6xcnsH98ncFa9tdin2nvbztijYqZJADnasdNquUiBNH3TBbUMUSyG82jmZxEXLovU",
  "key38": "4LXCj2fZUqy68GodfSXkfKntaPqS7votMhNaz28zCz4RAmUMyDEpjweXMwN7aFXexSGBLv8hAeiZa31ez4sMZQdr",
  "key39": "5zUJcGMck4CwdjDDcEQBnvQtPn9Wap8zzrBgs3NxAeBQAAVKeAaCAZ8u3cpx3DNW2dK23gRw1Ei6AcV8AuSrvJLf",
  "key40": "5Cx5EYqyGpFcScYJBPP3gayiCqsGgSU78YBMLLcjSF6mXFL7ZaqVBY24ChnkoqnAoPiueGavKoW2qPBvEqxX8wzY",
  "key41": "42gEBnhJKzT9a9n1Lq9K3cFzXvhBPVdn5Y4Rh2DtaVEF6bTZwXTM5t6RTkjPuCYmVB1Hiyb5kCsFzGdveYzDYNuJ",
  "key42": "4fretSi4aNEdydy3kNxpyFMqwemsWN9Pxvui5yadvr719gNU5NjPtoR6u9Pnjg6UcKUUWg88dTUoQGNVTAdpt3i1",
  "key43": "4tq6EqY56WxeZwGWs6S1YvLWGJDr8M46sWCjzpMTFuwcPbnNGuVoXjj9bBWmL3eiQnN7P2aGgeD1yMUyefFTdKgU",
  "key44": "2VnKqbebfRx4fA9b3BvYwYTU4KuMoCJRNfNKgvFz2HLeC2PG9PbqQNafHCNigpYgKRmw2y7k5T4hZm4A7RFsYVZj",
  "key45": "2UHEwqXv34eNghKXk9e7s2xAHL2yaGKreSriZkEVfCDWpNL2wv4nFEj249feST8kCAdgj23r7DXofbnfuUvTt217",
  "key46": "2rVcCuY49qxj67eP1eRVqShDJtvtjJDjPMjsgdZZyYFYA4ZWmgycVkaafUhg2AJXZcqcCGF2e5w5jxTfYugQ9hL9"
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
