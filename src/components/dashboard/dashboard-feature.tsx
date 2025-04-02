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
    "32YoXsWWgoiAUsiCh9MUvMDnnTFzhQhYpToatyZyUbFCvKvf6SceBn9mLF77NvpcqL1LtbfLMAwycQyLBXwAEtca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juocT4K2pqgfiGBntaCgRQG16EbYkX48Y8wHpbLzsoKXLCTMcfa2zHPkVM5wpvqVkuoCefHpAs9cU6fhjiwAg15",
  "key1": "HNHRVWY34kgbCaManSJCDRRXwAs3efrsMfearQusNnFT9t6VPZUmSqg9jMfvthxcNcoa3DGrTurQDhAyA3E6BdZ",
  "key2": "2MB5fE2gSGYJJa2HoWft7fipnoTuj3ekFo5tMDpR1ti7DT52eCqkKcsZ6RG14KjfsHVx76Zj2EU1vxAZZb4bwnWu",
  "key3": "5T3nFn8XLXJqowvLK47hdyuVonNTMvkHwdKak8L6F3ErzhMrZtM4g5MDc345GaKq5yAeveBKeAYgdsq98WpH3aKR",
  "key4": "BrRYjT4rcc5VieTq9qu19RdML1UYGssins1Rp4WvbWSoTjTYiSQmewHbJaUNY7e8HiQX9GHVrRyVNrCPmf9hdLK",
  "key5": "3cTfMktrpafLpdsArpgB2hjGb2gVaf7gTTKfCTQo6NpLpGbjwUQjQ2zDQuvHByw6vfZdb7d8HSFiUD2NJDFQR2vs",
  "key6": "5M9MVXcgKERtf4y9hqVYntiqg4ikba1p1Jv9c4nQucwPCe9RDjUHDLKyjDnMSxkjMJrQwEUt9xLMH5XZmZe9UNzX",
  "key7": "5PnqWJHykQKhEWivK24pZ9fEniSnnxMQyGdDaK37A1xZNdXeegHsqvWU8LvGgZbUMPNWTfVu7bMzK5DXk4BnJhxZ",
  "key8": "54ksu3bh7sDZpY4kp7Hvp9RfTADxqp7a7aypovL8s7TMBZvq85nfxjF8zjtW2MCSL6zqtc5yHdpfYvtyaEBnwNmD",
  "key9": "2H2wj3emMCFgxFC2XicUjKrotQCZniUj6mHUPnaxKUdmNKCB4SJJNes7JJLZarxQXU9NfekMA57WP3eN3GhN16Do",
  "key10": "4W2K79pAaZhwo1UFG5DnLCxjKPd4mxjiUmC7yxP6uyrKBFtiKDhSVLZM4D9ASkzm7pCRQGq5nTJ9CZ58VVSkKNLP",
  "key11": "5344LNn72b62UjyczeZx6upg6Fc1MSDe97M5Z12Mu1iAHTeratYD1VTr5WJ7CcGhfXjx6s9GYPLbcs9ejif2LDmK",
  "key12": "5ppxhxFdimt4EKx5Tka2AS3FXiBvTRLnWj2jA33ik4MshvCfwM4Fqd6Q3E888qGFy4nsCVms7zMLPgbztqyojXci",
  "key13": "2nX2NKNgcDdCADQY4B6sHrrAEwe5i33Yw38uw1Mfg53xkFEfh64Sdo6kMFfaHKNtE63XSEHuxGVNqbZPaPeDv6UH",
  "key14": "38aeLfuKTojiJ1m62bqnTJwADb4G5JxrhcjJo3wUXFEDM1CrEgNty6UXqW8AXiJPftYcn1r6kAGVWPgFVxJ7C8mM",
  "key15": "nrepkFG4ngVeqdVj7bdQqk9CyuEpQPssa49Vogm5EiyPBTKG3oEVsnorEqQpzcnKtXy7hnSawFjNjb87xh5Jjvx",
  "key16": "5Q4pkmMEiHZ7DmeJENH6KpqacpWoXhjRejVjYUWT5rq6rPFrS476argowmQG76gbKiCY15k7Px6MgtbTFbJGgE7A",
  "key17": "5nRQUdCcZKw7iAfUDsD3oAF9QZ5HoQNvxTt1nb5ygSDBvJuAK1ns1FM4Bh3J7xU5UTZT8c1L6sSmED4tAbnnC9vY",
  "key18": "5YdPUcQqhG26VwQh7NrGjRuJr4NiKq1mLb7fr6osrghQLQmkEyT8zcLxo3TmrZNgd9rkmFHTqgyeoRCTPwXrUtPr",
  "key19": "5YCXNPdMhgTUSKi4d2BQmy1yZoDWMqTpgkE49Nnz3qao8Z3rN4EXF5fDkeuqZpVoHA9oxwogdvgCSTG5U7QPfCFu",
  "key20": "3wqXJDTGphVgDVxiaFQRAf7dU5JAHaq7eVawer6VESP6goQrKY5zR4NNDiXWoohBpmBsxcRyrJgJq61kvYYhingC",
  "key21": "4HyKtdx4JabF88HDzcoRAkXUvArNcgEWM2FRcQ3XBULtoiVHLbbjVqxKcJ8B3uzCVJednFhcoFjYN54DyGX4YwFh",
  "key22": "3gch8qmkurjziRQCV8Lk7diKQ99tKFKGyHY8mjviZbq4VPoFGA9v4zT7GJnY5nv633T2vPWdVyhj8z7kfsPNhQNT",
  "key23": "5D8JZGn12mdF932YNwzPyr8XMD7VCm7ZasXsUzBs4Zyoruj3JXUJsNqEicWjCjHxoPrPSuzP2v2ztM7MYnEpCP2f",
  "key24": "446x7hdUmeJUFCHawYtLhkJP67ogc8vjx1hVENg6WDoQj9EVnwx5uXcZug9dMSzKKuYhWsKQityyWLSt4pZRU3yS",
  "key25": "ezLXtZb52eQsTppFyw68NW3enLHtDaXK6zaHhxcfPkk4rbNb35tfqfFtkmDxKkLMjgzNbqDGyonBDNo6TD55bXN",
  "key26": "4Piyn7qCdfRVXLy8SRyuqK8DAWUCHQyjt78UDxXhhawMKDdj6QjEC7TRyfUF4qrdfCzEudgam6ZUJW5DCBjJFLeZ",
  "key27": "4RQobHXbV5YBWJ9rcULTmGMcMvg2jyiE1bujBgogMh1paRRRyTEpTRLw3qAoJqe8zKJRX7CYaFUXs23GZ3Ke1p9k",
  "key28": "4C9h8zddxD1LwT3gooCp7kzZVFGS3ngg1HQQVTYAtzaSQpT7vDSKaDTWKixUWuyoq9ZUSMhfQBQzUut3HAPEr472",
  "key29": "qrMDnZ6AAC63XGAP7DqCGQEsF6F4m4C6DnWtfCBdi6VrtG8JMfntywvq5vzxejkRL2jG6hQxF3gMrB7vUxmcAaE",
  "key30": "Bc3AhiEMRGmkLwbRaYQF8f7UcDhMjJa6mxTotH5momr7yUQobxADYBzaBtjpYDSoHEC79DECUBG68Sm1cHxkudt",
  "key31": "k9Vmcz4HuKu6X8zg89MCswdE2PMJJ5ZA8v8Rpj7LSPiVWyKTtDUfeRSSbbwwRQvRmtg7QG9uDDvRbAyYrXKutRS",
  "key32": "2QtYeyimQkf8kxy4is2M8LNnAvBYJktajnapQU3JBUrGreJe4ByaVzDmumsKm7R1YR4o9ZioTZv6nU1wQpvsrP86",
  "key33": "4iJyuTkLKFGbCmchVsUGeP3Qn1bC61QSLWuJTWCwYpeVm6QoDHNrGQrbHwXcYtF3Gxbo9hZcx34wX7wAbnmUt6uw",
  "key34": "48CyqH1PXvPWNkkxrQCRbx6ETTiNtoeaBztBN8R4cJLnFXgaQtvRavWJieLbFhTkACLXKdgiZqKLse41EaZZEVuM",
  "key35": "5f7Q3ruM1F2CkBfR85b91UDGoRve8QwctbzjpcAiZirqps1oXgbaEqqKWdss47BuoKLCe48CqZD2DzpxkQYXCyey",
  "key36": "AYeJxWPxtxhcWFLWhcF5VNnm8QbDJGpphqwxEH3Yjs3rBhHuB193zZfjYXEVJPfLTkLDbCmjvvDVJJYiYiJmmXk",
  "key37": "3uPY2AY1uCXa7KVUVzjWUJFSUF56xbp7fmCuoSw6qrzJ739xKFBR8VWQgWofBuL1EEb8YxGGRZiRnEXFZkXJLsf8",
  "key38": "3hJe6xrmYuorGP5t4xajhAC8Q89KykzJm9CvzMUZ88YmQij5fGMw2EiqSCY1rkRBsiNqQ5S6YemfJpfxrUkSPEi2",
  "key39": "Jmsv1Ew7czJacYy49VkpriTVfUJpJ12cyx1vLJVqRZYfwjkNvRUCjaF8X65eN4qg4dBE5TnHsGL7pQC5C7R5LxH",
  "key40": "5r7oAtZwYxMafp7CfcJeyisBeBi7VhESbn4iKDfHaHNcVttcvU2XUnM3KNRupVsXbTk1LTQveiD3TxDNTTCqBsg4",
  "key41": "4Ptu2GrBtTHCMduKvr59HT9TzgsWzjoPmP3fLm7DGsgMXSWfc8DWRBBBN14xe5AV2ALxSQ9uJTxnU89LNS3obMwi",
  "key42": "3H1iBa5396BHyg8e286eSDjqgsiExNwZifjSByZkkTkjd1dRFUs4Jpua911uuY33LaoMRSgasJH4P3hk1csnVSv9",
  "key43": "5pAZGHaRHsWREHqart7EnPVatYdfDGyuPq3EQoEyfNHccTatzFnmJ7KVwC7jcS9rFUdQSrK21k1RTosgqsWcz5jr",
  "key44": "41LCL8p8NYMFM1sdQJ6MwgicwvFsuaXzTNB6wAeWcj6ddoE2rbFu2T5omXXCnm9ewrK1QnGeLNRymhdHoGaqsd5b",
  "key45": "4P4uah3dcScyi23YNPtaa4cf8kJJ2oMgg6g8YBJvEd98HHKoA67LmsmMnT9rXpWchuyRnnbBaGdXmThL9uA8tWax",
  "key46": "2ng8hAScoHjXsqtZwbkWfu2e44syReyS2dq7eDcCFaiDXJSdJAyz45NNgrunP7HLscqV2FJSswbgZcCCafc1wcqJ",
  "key47": "3KHVkcwojH6KUgcerX88Wyv2QrLuZF7MoUjo4fmmL7WdL5AVqvAhFL7vgBpUynVB4EDJiHgodnPTi3WEfd6CoJzh",
  "key48": "3spVs3or2LBnbuhsGfAUpioBZFBAyTHoQ8bJyCWkaQvWHLdG7Kus8i9wiGqt8FNaKyzSYwqLKLhgXjovmMfyZaec"
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
