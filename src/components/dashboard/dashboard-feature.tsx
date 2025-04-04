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
    "3Atc1NHFiRETTYQw8v8nXzGGCW7G45XHGw8G4giCjhQ1WrQSe6D3es8c5LvCvVdAvTDZyPU3ujX1uZ3Summ8cvKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJ1am1Pn6Ecnt4oSGYuA4VM4NPdUiAGQvg7kpC82fyJnaSKvwhaX2PYR4LZCtAxd4B35ZEaYggwzPgfBD9TQo58",
  "key1": "CuzWPYYdK1RGdZpgb4cR6tdcp2Nwsm887iNmDpXc1eFyQXuN9hZT5RZ2TRmRisMmaEijkK7USdY1feVuyoA7QgE",
  "key2": "46aSJnbxbanEJvwZgD2VmL6ee7QPk4XeResgmV1C6MCzxt68NpV79nX9vnvnYqsNF3hL4DHeHQE6733ufrvdYtUB",
  "key3": "5zevHcrMVG4ze83rhzTbd3McfdC8hwHj3ureBQNzVh5zbmLetRhuwwpFqg9vwHiKDRdqRQwYLhXeYFFVWXeoG64x",
  "key4": "5TBgLBnwWPD7syxCp8WLmh1P6dfuy34V5BhHup98tsbmR596xUhYKrkndhw54b8Ag14ADuS23baJkRFjxvj534Se",
  "key5": "29Z4qZfNsXHgUNvyfB2A8N2wigsMV64xxCnJ9jqCobiJm1S1mKVrh4RnzpmXGiYTUCAFyw3bsyRHcfhJShRPFpnJ",
  "key6": "2KLG6TZDLuLvY1XeSEPKTonh7cWCd937iD6wzXK5qW1Hnxao93h61aVU2cw2zaZ88nLWKBbiaP49rrgr96ruW8y1",
  "key7": "3ZdYnMQSxm8r2n1xVJpykhy8PAbcywcL7zD82L2Uxo3fJ1yvKFtxYJ6a7T6oJoYzs1fRL7gs5p1WRQr3a54VqNcL",
  "key8": "56iaBWrmv6Yu6bpxDVLQSnAsEGs2DeaNKNDZTgphUTstoPLGYCvNxe1mt6aPLivmgzhZTPsNVsn7SFyhVn8kdN8N",
  "key9": "46nfhcGME6hCwz9PXr4JKGd9KnAGMxashgoXN2wfesUKUawrRs9FwXpiKfoLvTq1Dey82xGDJAKDE8XB8f73DEwZ",
  "key10": "5SJu4XTCTZGgodyrBNNQE9EoPJo3Lvbr1cF6RUKXKanVdAaMVuJodnoeJQ8iCgtMFLZFWURPPFNHSHpEdjAV5RtZ",
  "key11": "2wX21SgsqLPtALZMcdqkcDDbrGugRmWG3Xf84jog6jQdT3Hv6bYvwx2Jj9U3FuTtJPPkBRXtSqaA2dS86quyriH1",
  "key12": "3NBGJ4FNVZKRPg2dUPffk1zkGLzgEUR6en3sHFVtXHqfJHaRqKKKBwkqXxbgQtbbrhwH2KB4NmZXnnk4jLVutQo6",
  "key13": "K19gxJammfJJ3jvWvcTQs5nQgASpgQyFtPN5ts8AjhrYQwBR3FQQZ8bGnbiHzCnyEJraqboWya6bZdush8fZA8A",
  "key14": "31y5KfnA7jmT78dJe3s2SXbCvWKkjV9kHGpjaSviKPo4qfQZXsx9v3V7WfY1ADLN5cNp3auP4yrVU7YCaMp4cVXA",
  "key15": "2JMehiEBa94Fu6cQNAji41e4GLfsibPT3MaJmKFwz1Yy4FVHhC3sUh6sqLa8LJ6Etubdn6wR4C6bg83sJ9tQtaf6",
  "key16": "579naMsq5ABahtQLLxmXvYkc6CufKmNwNs4hFzCZywu6kJZ1M6R4ko68spkckn6gxtLSzG38fiPrB7vvKnkbn7pb",
  "key17": "KE9RVqAJAuXCpmUBpaTAHx54bjPLF3cbhThwBmheUH4qH7XSip3tfXkpB56imiKzJvT92na1vxc4Km5uCU7mMfw",
  "key18": "2Wtgd6kB6NoQzRow66jLAS1kmYkWFxzVW3ReuMAFk4KaELJpTZu5pfCNSsHMxa1osc5JYM7GEAHAq8GTmvPbXDbk",
  "key19": "3E7vBtH2C7MTMTNYaPzCRfMqgV5XD32P5bfdpG3PDnntiFmh16KuVwfGeLqUAgDVrofB2Kb15SoEMkytRZ6YsdMW",
  "key20": "aRNxwo9MEzJzskkqZwAo2M3LBTcjNCBDpupK2qDqs3Pvt7LQbxWVVVabmPkGtMtv6R3yFV5zdxnyUZKkHNnsYYi",
  "key21": "2RWX8hgGDChNzdFpcW3QdVezWAWY6Qaf32cwHWjAaaBpTVMXHLwQivaRiWGJ6gaorG4t5HGa3rvB55vpQS3MuX7g",
  "key22": "4zYQ6RMbBvQPqasxKDQVzqfgizPbFaDQAoRq6H23ctNkDuFkc1FKWZ5CRCGcxf6uAAGzxDshSEXRHFeN63j7T5WC",
  "key23": "7n9bFP2YCscWGza1xHfUF1YCyvL2vEbuLbkhmouUXscnTygcTf2qXasifqYPgS7AQSW44VhtddSZnQpDCP1z7hY",
  "key24": "5BJABVMTKfpj4GBP2e7UqxEjxZuTQRfQM2VVxz9VwFLuJYpztaHtfJeY6VwMa1iMgnEVtEqADsZWXZnJjtHgmsWa",
  "key25": "5tgsf6NSmU5Hmc9Kr5GdTUhNTzTqTd7xLtwgYX9UmQHKfixhMmyNAeYFNX13eKfAKb9ABWahd9MaTPXnGMFY1b2R",
  "key26": "4G6vXa2RuB5TvE1rwbAfuAuN7dVM4d8yejwwjucq2LaD3Zb5ZnKK28YRmfKgM3enkT5F5fajpM8R1sQqjtRHkqsb",
  "key27": "5PFkdjWRfjoyCAG6StxBbSJLZHM99WDMjEZrGBwcbzdAgTRw5WuhxzKXmH48cioeZWHbv4KKUPkPJ9JX9UVqKYqJ",
  "key28": "3wN9L6MiCHrXKpXQG83uWLDwiTskjLAmwpkxNTtkFmvKQvN5Y8jsQQnYtsrVNyuBP8YDzDaC2a4NeYvA49LQ1x6y",
  "key29": "21X5cP6HQXBnSheVPSKg4UFmbphSicw9X9rpt3jQnAgvEk38g13gMQPCmUJvZnrscVCxH5tcnjdTzp88HDj8rEqK",
  "key30": "2P3eTRDyQWTZaatmBXiGMQkJmFu9qyDC1UEwGiHYZeJv9NU7Yaz66tPg7UXsL48KmFs9WSxSXNJvV5WwFMfGsZCE",
  "key31": "3RcQCb6GGVZm4b8eBAojvafqfS6GzKVU6PLsyGAmPpkqeXxmtjqzr2b3bvmqeuX2NxtE53LCqDQMoWJWYWkHW1nN",
  "key32": "4H14DDzmbVxcoSMBQs6ANKKfKtSGECWLGLDVVzVL2Ridmcutj1ncxJujmyfC4U4ZpPbkCqdL6vnA42bGc312A21A"
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
