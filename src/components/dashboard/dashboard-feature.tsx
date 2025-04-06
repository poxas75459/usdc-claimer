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
    "EBHNPzFDnSDLpcALh89fwq4tv9LUEDS7czc6Ao1rxusVSNuzgSdsfrRMjBc7Vh6j16oWr425fRV6GWuk8BSrFgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b7gYqZVA1DWRau8uyi7MchBpumX1ZihNP47kTTxH6phdpyAaiJXcs4Gtpioozmpr1oXNJiyJEw84cMhA9JdWMYM",
  "key1": "4oxwjxtfsErnR4cfvuxaMVVTuHc6nMymN7DZAJcs7UD1s6EqV9Ue3aKMPGHRfFny9TuMoPiJeTpTHT8nMsvBATKE",
  "key2": "rTRSJPNNC6fScWnNKqGez2UEaZ4xfejppafD8iTcBfamfE7KtifLoLLgGJTf9ZdGSVBdGx51REjFXtgdLtdcTv4",
  "key3": "5p1EGcDV5mVhcgcyhQse2Dt9zkV4YmuW9eLMWfbkf7uoeXAqpfv4dJQ74dS8xmBTnXhrYeT6iBTYPffKX2U1jasf",
  "key4": "4XsYdpC2Sp6eRhex5ADnupswsdTJjJKRb8W6nq8hD3wiLmVazeiwpH3hJ5Khsw4JgHLiSvHgofGV21Y3jeeoAebH",
  "key5": "5ZyZ3sqAcy4NLz4xhXHBud79ZK1XTB4bU8thdFXfxA1LMFNwchn22CVgqP8doee7mpGNumTKFqTgPckcpXyBRjfT",
  "key6": "3uWJmEE9qv8DmL8icJZozoAwFEKGmAYgpfwwkQGr2osvqZpEu8N7WqhJPPAoFKzQ5kNeJeHPiWDLXEuZEJw3Wjjg",
  "key7": "2z3nXfggpDSH8NPZ3DKWsHWS4gyedFUwNmEfkLemdQAbQdKJmyYbbYdSxcwp8xHy9hmtYA642Yya2sQMJvYqymBa",
  "key8": "3tL3uJBbpCReizNBv8E7dnJf4A6hgGrJPAxymCr78yYGsHr5Jx4aKba2dvoF5coBugSe3hYwNMt3wMS5RMNrsqjv",
  "key9": "3gC82vLTNHnK6T2in7YAEqPuAMRG2rpTAU9sYzrdF1vPAUBHZaBJrfNJrmiyLTRBGTKFpJrDvBVa1SbU1e6Bsina",
  "key10": "556k2RAyB5AUjYqQk4DFXDWXbbnRMVuB2NqnpG7EqS6qvn6CUSVrsr5zydWbZ5dmTCPeCTfb4XccZ7vA3EotjBav",
  "key11": "37sAADzqdmHubsFRK4qMxFoKpcGnf1zmmAEvsWsAgGtsjGZvCNtuntJ5LfkiWWh2xquUic5jVgZUbuLZgwDH6qxJ",
  "key12": "3wCPEJyckjpaXuuH3DH4U5EXCzAmvHxZZ3kRvdxMJ3FLShssamroQsxQFktXZwepq28ipxsJ7CEmAh9fdPfvDWqf",
  "key13": "UZxGa6683TiFsbZ1YTQ2UthHby3sgwnR9MoUxZceDMa4Yj34c4nBrRhZTKQdHQym1tgCbjr4kUNjxh7HyQ4qrM3",
  "key14": "35y4vmkQnYAQTeTv2XKGKh2fXBMYhiicH2xqGRk7SW91j76p7sAtrLRLLqzWx5NVyyEZv1yEfcPWUC22mh55P6aT",
  "key15": "3scLwv33XV3prG3hJLRJKViEwq3xgKEcxW1usQ9UG4z4SCL2diiW3oqiqUeY593GJWqmEYiXdQCWSBYXWB3QBV5v",
  "key16": "3pFK8kP7jinECpeNCH6jDJG4Wg9e5C5XB4yVU2ZV9tDVbsu8muRa5kwKMUxFh2PTSi9SrKucrMYsy9SwpJ6jh9Qi",
  "key17": "QA35uyjLgym2TARhH4uQ9QAYxHeQnuderQFesrmQueyPFiqwJYXo1i7DZLEB3HdjvkHtW7mS37gYyKJpEQRKVXJ",
  "key18": "4nfK37QjMfg9wGe2KcLWgkdYa1VXTY5x6FNDT71Uh83Z9Fy6YCuif2prL1zAkwrtAmEvnRMyhyV1eS2VEnhf57sr",
  "key19": "2ytgQJpe2jRG4UF3dmRPQMVLPrHuBMksYZH7FQe86iUph2bLUcDd92RKTzFPwL2SJwzMUXYpqEDM6QrogTFwULK8",
  "key20": "5jD7y3KiTTbKmfdik5ePM2vRfPJaS3Jt1u2akZzUtVYp7pxDDFnCN5XBxNs4deKV9saNrmKc5XApggiostsmVGwN",
  "key21": "4Lvy5Bx9Soeb8GyKnUVqdeFs5UGtsiFr9Scz9g74XuP36Soq1BWQnC8QufXUBaePf4vwdLTRKibW33qnfNAZewha",
  "key22": "4pNPBaCoHmTT4kPwnysDW9TKuXrswZWJTM9Kog46DXLqZRKc3SaGTJXsoYx2zdD4Myt1VBgrQsH52HFzVz1BpXCy",
  "key23": "3bffJUiFYTZCHKJNnTbygnE7BRoS1me4Drx5bjYGgpkNGw4CXxZ6jVah4gRhZwqhGGw1RpRF75sMRynYs7xy5dP1",
  "key24": "529sVUBQmsTEUkQbRMe6e9HKQSSsX1W7igj2Tc7dZHm5JrLZZps9aFMwpbGDqbkBwX6iDNJiqgMqHwFYFAFmzZDT",
  "key25": "4MUhDYfQ2DAXqykb4GWSqqtVFu2QwGRLXuo4jJnqCD3CJzLPKUrnuugT8KHnip8piNR5veVe5LPsRMEQ3YpZmmZf",
  "key26": "5qEHoGGp75x2pgSegH477uQEKrGdAEMfY9RjVFuxrg8VJgDWiXCzUh3rLfiBLnXjhNz5VZH7zRQzYtZyfKa62JQe",
  "key27": "2GXrRetUNb3uvVB2ALgWruu56r5u1GUCcSdLb6bJCVnRGSSTaVBusdfjivpLPhtnPMMvJzcokCZy4uFMGCKU5igx",
  "key28": "t2zQYbTdt9ZgBeVSuLtgAY6Fc7Hg9RWaJHxA8uNBNoK5nBdtGSgNzC5A2xygfWeTEW524H3FVig8QFY2dfYUJ61",
  "key29": "48xJvuevCuTmjsjdDUDovopF7maDo7iMYxkZPTG2p76Mqq8RxQMd8ThZWERGLxA8AtShokKw7cQXx5MksSTuEFB3",
  "key30": "5bbFYhrQ7yDW1Z4VCjJeUjFXpPWtb8EF73B92PCPBEprVvnxxLdVHRYWqPJzG4vKJ27sGUUrZ9wiaErt52Fyzb9A"
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
