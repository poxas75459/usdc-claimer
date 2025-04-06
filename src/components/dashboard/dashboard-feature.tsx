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
    "23YaNqHbdZZ6y2KKoDjL6UrCrbLaADSmiBdq9hHsQ8yYBGMV5Su9rxn15jzWZoHwP12vwkiuDXdo4w1zcH2UZVuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43PzR9zKRnVgXLCbGRbRxxUyFkadprCswR37D74qBwKnyh5jS4vZgLh7KGj2AbajUX2N1NDW6PXykJhbGBYX9rmC",
  "key1": "2qbYUwCV62XGmxmsHSmNr8RhJpEskMvNttNU5A4AjB4BT7oQRtxb9W4r3cLKsCcZgdFCdvq6gWw8vzY5zrH4aGXx",
  "key2": "2MCKpD78WWusELF13noDmZaF5JZ3HBFNbb6n2PZffQcsTbRzns3aDVMxBhQdiMHVaX3tqRgVUdwTE4QjvCtRDQNW",
  "key3": "qd8JqszRHHogYP5Rf2b1917CrSHPmysGJf33v3sEwjzJHap8y81kH9PjZ8JZURTdKPaErZNv5w3dvcAsEeGbKpv",
  "key4": "Nbr1vKpsTA8nMf1yT19JtmnNXjDcZHtBENDLFrbTQYpNf9xeRb7Qv7dCNKCGZvvZhZRmwsXZ4C4wQuS7kD36Vxs",
  "key5": "3gsfxFXcqnHrtyDeEDV3KnegLbn7rafEnHos8yRJM3DRUKewpdW48yyxCcLSuagf4q7TGPn8dKd7Ydb5byAs6wBz",
  "key6": "pqXk1LNZTu9Jp8smnezp266zbCb5adm7AHxY83xKEcQZqnRYYfWtD8UpcEzkjE12iKoxuDddpgMVL1jY1jmJv6f",
  "key7": "5gr2WHCifZsbyEMZQqeEy7U3gxxWjfJFZ8UDQLViijQ15dVRSakucsFiBf993oVhKmffngGJETDjaTh2yziHQy7J",
  "key8": "4P6qfUsava6Ln1Vu4RCgYKsyEAyanibTX1xXBjSXeQ3gZJLK33Y7vwWNF5mQnhsfmvyQdKUVqCTRtPgDDWq4gKY1",
  "key9": "4ZmwDEXzvGUQ7M21arCLV7UH71vU1u2ZSVZqQVQp5Ui43wxkTrazqmuTRoHLYPFyPAWbVyjxrzdHY4JLrdXDKcMe",
  "key10": "2W5muMGvedQRfQ7iwEFYpWeDJNE1h1vtpuTPKwUjveqb7ozVgDYtVBdwaABDuqmTLvFAy8SrMBz167ueuS95Ss1T",
  "key11": "2FxHxGsD7d7Lbtp9zP33A8gy4dCtnPVyd4ny6q8YRP4btAjppeZeBuHoLtfPNzWysgV1cX4H3a1vLpkCDvhqjTvH",
  "key12": "21izUgBao2S8ane6PobfEvj92jZiNTs7d3S2B5pqcjJ1wzQEtwPQK4QjwQsNfuaB8gKGmEU8vF68EcR1QSkj33eq",
  "key13": "2dpanKndo3h6xJ8b6EVJonxfgcsnnRUFLPGshCtxuv1dp1kaiAm1qaK7H1JrhRKfqcQMkNEdrc8Z4LMd8HfrEQZd",
  "key14": "3iAi5aXRACFC9Y7yktR3Wbd4rbERbtXLFRQmhXxcS36ZopW5W9FCdSkb2s33ivFiMYTq6M31Gz4W4QpW8FWgxaw7",
  "key15": "518cXy4BrcYNiJTw6D32xKNPNzgxGu8zo2MdXC2SAqgrGc13MLfJqAbzS5A4GtsES4v1HdDqrnsEHNHj3nRSw8dc",
  "key16": "4Sid6dfSDxRon5ut29aqYh1S7gDuTZ9uDrJQHsKQh6gk17FA5hSekpncoqRcErHFiLNU6Eq9L6T7PdiRKoHEgFLv",
  "key17": "wAYstQvtBiMpggmGSL4TCsGwa1GRqeMkaqao1q3YvRb244JwZcHQQ6Lp8P4yLv5ismNPusGkgFQn8Nr9G1LKKu9",
  "key18": "4nm8ugSmPgKMtBcgsV4jtxk9oX4v19rv1rWka1n6ZNzmNSTDT61gEX7TpaQ1JDpYsBXNarVagT8wMF8Bv7EDLyVz",
  "key19": "2wRdPgcJQNK9GjEb7U3VvM8pFA3RFXuwND5rAuhrBrw9YYajVjfoDwh7ChZgVyWJUUeAgW5RvWDrhtja1G5TpxUV",
  "key20": "4o6NB7wQchssK2XEjWzV3FsvKf6sHozyKneRPMgAwWnzqY2MeFswk6yvLu5Hjwwjdrx7R7u8ApfQmQRR3fh993pj",
  "key21": "43WzQ9WzCNARcgThx8z1vgfHqrUB2F835pVWxHaAijhqVz3cB4BkmFANxNFvEwbpNug4JRApeoMfA11GMFC3ti8V",
  "key22": "4YdNaFJniMBAe4Ur7M92PvJ2ujbTjc9cUTiLgbYTc8J3Ff81yj7JTQkifWVtwck9HFyvgXKcUfLskgickDiqQTcg",
  "key23": "374DDFpzYxpcEu1Y2vpKCAuMh3pb7RK8o99uigdmY79MwtGYk9xKU2uSQzhq9HjX2R3HrnQqt5ZZpewSJLuvcE5X",
  "key24": "2DnYUJEJHaAtCmdojdEhwotusVVnDrbhokbJHWYUbwAqfps1bKUJjtQEK7CgN8T79cN2QQRtjxA8hv9KP6cXLXQf",
  "key25": "615SYo6dZuCSg6kDqGj4q7tUuz4jTVNtbtrEotPBXgh3bbqjNBGMzzTtSwZgzT7RmVfz3F7bkuLtyQfBSSXYmXxQ",
  "key26": "3h7xbCNBpJ5p3SCKxkXKKp6kLeEbrkrcwmSd8Z4kR7cKVfrHJb6rb7F6NDvfAUK3mYoC9wBSjpveZGhBQ7xkXgcV",
  "key27": "5MXqRVtz44TKurCAKbqZn4KtfL5syWQSKMa3Q53GuyVZEjFL9rpTF1pQnTq2HeYncNLevhCSqJXeQUrzsDRbfhpV",
  "key28": "5Fjcd14nxSUrZw26BMWAqeKTf1RGd2qVeCVuuKuTvw5oy1Wtd9edLXU9YAvCrwvKnTPGjxfKtW1drpgVBnR8NDLP",
  "key29": "5jaLcAJHa6pLvhQCsUkhLhpDmhMj1SQmCSGQhuhr8EoWhVkLiJ3i7SXWWPL6SqazfhZcDvq27XLaFhiJv5SEwtbD"
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
