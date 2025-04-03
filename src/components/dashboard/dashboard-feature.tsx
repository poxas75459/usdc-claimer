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
    "5oGMgy3MKuZL6GgobYp1FFMyWPYmpcRePJF2Mou43eV2GqourgJsnLuu8RvBRZr9rTpxeEEULz5FXqEaei9hnXN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vC2vzGPiUHU9P1vkfFw2BBnhNEvVVkyQwzkHRmfaP1cPEcpiTaz2wFqcKFN2Bsb2yGrqycCyVShStKZbzFHLm61",
  "key1": "2A3v8LPooFv2x3TWyaE8QaqtjTHFBZaPc1k3PQZdEKvueuDA9p992owFk9Be8wkgUBhm4Lj77Lsye9pHCwSZQwSq",
  "key2": "3YRUTZ2ezSpwTADsxTpjW1XU5MEutDBhxu9hau5yanWNFUTY5agdEWZaJoXN3nGJmbc2jWDJe2PfxQf7vXw99Dhw",
  "key3": "4mPdehyBfiXdSWzjBYXTUTEF1Wcm8R4LN4pXM9TwrNMhJFh6YkmEsqosKPzVndbS2fjGMkLjsbdecyJ5aSB6ruVq",
  "key4": "5RavNRdhPKmUWPwC3uLSjVyS2RZAaHtQDuXhp4VZgD1dn3xX9aw3UJnXVBu3UkgBmL9KHj2V9BqY7wyPQAhh1p8D",
  "key5": "49GyLj1yHkZaFH9GcSprnCGyCRntzgj8R1DGMpMSf7gPRh9iobK5HyQAKsfTxEH5utdb1vgwfgHCZeqfS1W5gVq7",
  "key6": "knkBzJxdYqV9VtsgXDhqrDFmcCv3jETZusMBbjqBMyjJtCJRrhR85Q4ZJ3cq1gPGFad4YGDK5ciomeuhsbYekvg",
  "key7": "W28cRjCefw6bLYw69XRfhPMmGrHkGjFN8AqmVtzVeRa1jaeZeBHWnEzEW9VHNYuBoaNbbYDsa6xvL8LaEzvoHA4",
  "key8": "2JTekM4iheJ4au7c8biyNpm4ik7fNYoYw9B6Pgf3g1GhKxNxvHJiRYFFCBieWDxuXprkXJpKPMcSn8i3STvjKv32",
  "key9": "dPDXLK1DSrFsHq78MqimPzZ4YmLLSFLSLioU9qwEFvGRG9juGNSTWMVvCk18LGhpMzFrF8JSuot2HnhSowaccqL",
  "key10": "48yBwLwrnHZ271qXoXYytMECPXn7GQfhN6gfiksuhXZx6fNm7xMNwWuYZnv47Fj9CuKbrbnVNeZShvTMn79L5heu",
  "key11": "NXcsigPtzNgP4LqQsUAPSwUdkhSBhLf4gH51QFDtvTFDcG1qiXxkPq2cKrCySTPfCLRfhUSQvNwvPnhGEdQUD7T",
  "key12": "4nPhFBhr4Bgamqh7hWN9ndrDSC1x3gHutUFNKNBJ6QPkEbnwH6jV5HZxLJQQmfHQnedmSJAqterzcv7QHLsJhUR2",
  "key13": "39Lo1M9kAkC4dMfa69nQNh9WpKMvf1JAC6tEfJxgYWD5ovVoRb5A7EQHWf9yu2nLidANFJ75k8etEsmDsKuQ29GU",
  "key14": "3jtRz78VBm6R4vMbvW2uKMy3yJuFWHVgW1XtVLutKPZ9Vt49a1D8Mrhkvj4vBYYhCx53szKrkvV1ddckBAmz989b",
  "key15": "2z7xoRgRBKVLJZxtXF1cLuMQvzTBKV46UUqym5aijPfQ4JqNqM9xCLJGzzCJhqttrmsuVyg3ARgoYSRVnptujrZp",
  "key16": "4dsTfYkXPGLNiC3icD9vnhchwDCVpGGQPBryuJRL5TPqbY6UTVQeSijzQ7Zmhas8KS1uS7TGpT65sGkD4eoo1pnK",
  "key17": "4Kv6Gt7fhn7WScKwdJUucTysD3u7UD6XExx5cfGUdAEBXcu4AtpdaWWbPVMBTKK6Naj2kwikFFbAZrD9NKud6D18",
  "key18": "2DuVugkNTVhwF3nerfs9VEjv7NwN8Ht8yYT7obFWsykhTxgEJHLYvZpE7ujSNwe9ZSPatANPWPZYu1iCVB7hgpeb",
  "key19": "59u9cBxPfSo8dcvxiN95tsoVs2Pca7jdR9R4PQMA538BXVrt8dyuzdkrgazbokg1L5WfnCQFYNzkGHBSq8ZY1rhz",
  "key20": "yT3NRQQ4ESb1s9xw9DvpNLKqBXFCgyc6bkqe1PMhsftfC2MWUkRuWFqiT4WozPur2ewcHGpbEBoWEz6UyEd6b26",
  "key21": "5rj1uA6dKZJDv7sknUVYS6dMt6hw4zhG1SMwtEMxrSMKRFgF9YH1V9equK4jTyeSBcKD6tZ1m8aXQuAEBnqpUtYG",
  "key22": "spz1bJAisA1qLkqHhoahHkHqRhDXChv4WAfh8XgtDz82B1gzoBfWrpriCVTYLmMdBBMvikpY334BrnRWPq3CyRG",
  "key23": "4PDzmUyGhowKv5vAzpudrgD4eqnsNtB1YuoHdkz64RM7n2xoTSmzT9Hg5LyUMJj981kVspGkhFfAdH2PsehxPTcg",
  "key24": "59ZaDaqrX3Z2WafVAx4SJk7pcdv8hra8EjmmgzDgYAC5Z3C8vV4zBApzkQhv4ScLrJsZ93WntGHjBMKfu5ZwNwsC",
  "key25": "5cAaJucAShWnam7WMrnYAYRszuniGVdamTJWQtHdrvBuPjZ9dTw6fiB5E6zgyXxDTYRnnqdGauLExty9jsrKTZ9N",
  "key26": "yQr38vovPXnYJkXYH9KgtpHRxWPDAR3ZQhHrGK6AtujTBeggpbmvxkDtiTbtS4yeKDqJbr18u9oeQnMVFYQY9QU",
  "key27": "4y5iofbfa28QJMxemKYRqjX8bvFrUukFhtz1vyFseVDmdMjKeBQXojkZV9c27zuFgn4zSv3x6zmf8RVqePoWGTWS",
  "key28": "5towwT3qe9daAxUpdFBm3Zk2TsDZw1PaevBqU8BNpWqCgHTKWm5SVyU75i9JaGNtACV3wQPdQhJANVhYUDUC7u7q",
  "key29": "fhpu68qb9ELfx6tonQPrQP777L3PH98D17QupybL7P7vAsaQEtPhcvuXafEePZwj8HHxTNcr6aoYWyYjJaswXtp",
  "key30": "5fe5ZUZwkcKptFmvrx64mKvQB9WpvU617gsp38h47ATwtvxf1CJ6AEpxGex9y91eKX9avVgNZew9d2V41qNSzsFG",
  "key31": "524KnzX8sjjxMqwxB3s5DWUCMkK1QASKMNWvg8FcbXrP9c4C37uFjRtySBv2pKgzv77SHZ84AvngoQvzEbq2WCtp",
  "key32": "3jqRqAbiPZ76ciJM91fKRpQg5ncmLERkuPKRdvLoWKzVm6CMSDqZNgz4x4m1AtBMhd2KwvfD6epWFZN42MdX933v",
  "key33": "4hqAerCWzmwYeqpC4WEanpNYBNqEVrkvQurxd4DHRhmJ8wfVNDe63kRXd6SXPeJjASsXaT5DPxAKUZUWVPhDVrcV",
  "key34": "5ZWVwPxFuR8mBBCxDMjX9ZSM1uVQhHZApkdevd16MJadt2WCEWUAzhoxex2TdZ6Hg27iAapGPos3v8VMPp4mCwzz",
  "key35": "5R5sx92nnPsZNx6XTSSYMkv2aJzLDGJzKkNR74PbkfX93KoehNaRYGVjQMWtJCeringcHzR56sKn3HAiiyhcEFHB",
  "key36": "66AC6vuoAfYxAsjmBLi6EJoMfT89DFAmxkERtEPR3UgzmE14sVdaTxxwQvYpfU3ioVNZcLpccZsSieE1SjXA1Ljh",
  "key37": "41Zns4cM9NxPbJwmLxxNvzAzvkBiKDsuQVRd1bPBcAMdDDyH2jeyWoQuQiFuv5xjo9oLfmCDqoW3v9noXDMDgU7T",
  "key38": "3pJkCiHz9C4e1RyJ4XUHgC8sNnQjVRrLiWs9EvBZTM44rVRh5PunMKJhKZnFBnm9pWLbcp8itZ3xejxR7jKPtN2m",
  "key39": "4MU7FZ56X6qrnLTZurKEpasEVHfWGXkqtbsSotzjL6m6rhAbPebWYs9fyeKmdUJrrJwadTJYNQGeWcKFu4HPbVNt",
  "key40": "KphzJSrQVjgLCoNYXYmiYzsJWPpCEpiaqg4YouULsUM3CwtUmJXqqHjYgtDdqfWzRT2VTmtwLPVwqSFnDnTZCv8",
  "key41": "2M5Wvgup7zei2Jv24HdgSMXM5doPkLpQUDxqU2KzcGjBBA1n2FgA481JQESFUQZUVSAXV7bzvyndH9nEJn4LYq14",
  "key42": "2sURcEDPqc3vCj2n3k2a79Pb5hJqCRjPeSt9n1zT4FcFgYrSd4ux9kf27Kwwsa6tkGoZ3EyxbSfuR4HPseJCjRCc",
  "key43": "45sXGPtk21JN5hf6P5EhxX95uUJwrsxLFZTcRqL9358mpKCspgzmXwmmyx6dBJA1LngaNxeUhmXTCMzQY6wKfUXK",
  "key44": "5AvtUQ85Jw5nUhR1kM8bBBmAaVNiTgmRbDs4zzZi9zfrdRzKJLnUCdZNvz6RSQJb9nt7VLuus5Goy61SvXdEt3fs"
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
