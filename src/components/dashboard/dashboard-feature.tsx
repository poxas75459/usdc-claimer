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
    "5DyrEoV5HYgZ2wAcrPfEovDaJy5muJBVFhyvnnDxDvZgA3Mv3RX2Lbc3Mnr1hAejvz42c3ZKMSAh9HJmE7Rwhdg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NoYZXjV7HMBJFRD1SM8ayJBd8Qjsb9LDwzobyJ2JknFooyxArvw6SSoyherQxwJXgxPerhQDd142bWVMmz55zoB",
  "key1": "4injAkzorNrYapFvTrZvMWGq87KZn7Kxa2ZMwh34YWfiwjkw66hXvuJqTPMfNhvVtZwm86BL6Smk2n84zMfbkMKD",
  "key2": "3dzfU1CN93JCzYxyJdKPcreP8qQ1CCo84x3a8qWPAz3K6JxhoSq5Ef9haTYrzmTQ1mErpdoCfxxw32bKknPM5dE3",
  "key3": "5ar5GdNT8AoByRCC87SMkF2D4SXqFYaZKtvUxXALEUSfdwgPkjqjqqHMGx4CvQjbjDsu1q3evChjmeTCrB1imCHu",
  "key4": "2QFsGrtE3Vf6Q2fFKEqYoNg1PCUMXFbaqUGjXc8v5wexs6tu6wkN8d1ePUHzhVdEQhfgNTF5fH7uEze4a5baWgVS",
  "key5": "4uhuZQucWCrWHZ8pgx1j3W9cGupnsLpBi9EXQgCwdoYqXLs4bkazLpFefLxxcV8WaUfsaJoySfpyHEpywT5moKAT",
  "key6": "3oKbqAYAXFA8UhEYMMUX4QJZupoNVevsYLfGEbCs7NE1FKHHiyBYwH3GG26LA8Lws98g5P4LmRhe6nSZyGnekVGm",
  "key7": "2bCFDYivyQJshfLDyTVSGzTtTpsiF6MfqGDzsraY23G3kDiRDek6PEE9fNAGRFXskKdk1Z72RAWYctqk1t6qrzVy",
  "key8": "2SUy7GeJYhEyfGHc9Vqx9nXzDe3Tx3eHpFZhr2QNBCbmgK2L3pzYB9q1Vxkbu4wAvSzgMfDsej15rdjBm1sygaKZ",
  "key9": "2Ymp4cPg8DK7Nn4FSD8tiXTfZJD96SvFxnyxNkHu5d25VbrVhutpjNYxXhWvja5qAA8YYqXXeQPkJFc4oQRY3d88",
  "key10": "48SikJ9ARAaRLT8AiLFoHL1djbGTa3ykviGPYjWMxkYjXZiq1Yx3SBxaxe8XTjC5G4PTnnv6Cc7TA8RvRrzFgykq",
  "key11": "5rfTnLB17jtKJpz2ZcQF158yRvDrnm9o5rmxX1zPssuunahoNQqtCwC6XSiWHyD419DEbXfK9r1AzUDAF7TXDT8L",
  "key12": "4ipPEZH2xAtygZJtFmAd7e4sss1g6JrpsqvC4EkbVe8nwi9nVv1mSYSweAVXaXVpxyS5NXw1KND4pUby3AfEcHzt",
  "key13": "5Z6WnsEddGQitbE3mqiDBMEjLPUEmuWoHEo53TXsRzdpYs1Pk6U273Yry5UPVWAdwYCyDTFH4bZDvJ7VbMr5xg5d",
  "key14": "9JQNhduo2baTP58SKQpdGKAHKHSWzW4bvRP6pXezYBKjiZqQFG9hbMUWewNzLSQae2J99pcqh5TpWMAtL2MdTKV",
  "key15": "42DWt5aNZm2RbT7K68QRnDZSzWE1e9ydX1THxfM1TMr3PKjQ4KYeSfzhh3fFYjaEZ1Jop9BLdV7bNYSTUEzpLxj2",
  "key16": "45TfTANeqLQEVqV9T76GpqCHsRDY24adgowsVLBwHGPvTJQugpT52spYoRTLKZgoQcAswfPoPqqdY2DZ7FaqcNDb",
  "key17": "YXJHB8KzsJEro79acah6anASV9ZJCxQH4iMNEy2cF5zUAtU1S98qJzLxmH95EoZ3c9W1ocQZjcaAZ6Rg7a82zJJ",
  "key18": "4FxRv5CyeV8FZG8d8Q8ph3U1GSYQoXKNwkARhmPNgYZEjgS6WCwcgJVg6wkRrTuth1NZyWgqnEod8Bc2dR2U5VA2",
  "key19": "53jTKK2wGmKnC75CUFwx2ry57iwwQPEdk4MxFeVqqCQitAtX27evjs8NQtRi3oN8wum4n9kjZDCCAxQDAtymJotK",
  "key20": "3gAghwMywdj7dRQa9wmLfM6cs8zXw1HboMFFAtYEc6teuNCkqXSga4j2GUvVTy26URRieXvADjDW6grjphyUJcPm",
  "key21": "2hag87ZNs3xDYimcrDAY8xTm1ANzEWfmP2FV1UBiqBKwaEaQx36kUN5GdnqcZ6NriKduhGC98y8LX2bG7kxpnWRg",
  "key22": "5rVLwX1yM212o9ZmWHhTsucQxK3PhgQzUUcT6oTaWNmAPkvFfwGFp8U1S1ag62wgZx364GXa96FpGeFYzeFysGAv",
  "key23": "5v24cQAQ7FwhF4DsSBbnuTWukcYwKSZXzp6Wq5yYruHqHwJ9RDjD3HoSkG8uoMeFbZkdhe87VcS5dQbu9Wu83Gvn",
  "key24": "63Jkb55dFx4CKHSvDWMEX2HVKexSQrjn4EwZhudJDNwWRdfxt57BW8v1kPhU7ZZsXrwT4mM6QocefnbE9Z8f4ESW",
  "key25": "2MmiGYD9wf4mgZbX3uDTLb7ADqJv8EpXa4tK4tQVDiqwnx4yy5uAhXwD4rB7gzHfKZ1jaqRCuyZtSkRh6McDeRH8",
  "key26": "57upGZnexpiCH8LdyAWtoxRBfYGinJJF2XbLyzHZVJQ7Z94MVD5KJG4NprLbGahevoKLyvXrmteT7osMMJVPcAir",
  "key27": "3sP93kidgpujfgjsHLYQNZQqxRCq8iZigkiqEPteyrMWGcENKURJxrbZ5REs6rA3LnmPZJM5brbS7z7158fw7jfN",
  "key28": "3ktL3FxoxG6tzqYFnYKn58PUAJuNpkF7hApk57rJVtX5ze8MX9P4SUHDJTMDBBsaPcvfcCF9TXp6ECgdnGjjh7Cq",
  "key29": "5RnTuZzzCbrFMxESaHaXTpkjPPdzqqtMveGkH7AmFn9Vk8ktkxMXRUxSrsP61vz4WW8pTZrCbtAegChu1ALBnbna",
  "key30": "y5faL4MudQ89DSEsXAz14z6BHhZvAcYLxAX6sMr8oPecyQpvrhvzwpGRXKShoVp6HsrEic3irw5X9SzaAvB3AAL",
  "key31": "2K2r8iLqYvX6u7Hha4v7amBJU15Zy8p9nHcBQLVYiRp8kNZ67abams81LNiVrpzK9nNGXgWt5ibfDMMSWJ8hJj3",
  "key32": "4aJUjtTCp9ptJSbbjcmFF93PQbVveeRYJESnixwKZeH51JPL6FcqpzCBRBPgyYTovK3LUGTukaEVt4NLZuG4eJHn"
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
