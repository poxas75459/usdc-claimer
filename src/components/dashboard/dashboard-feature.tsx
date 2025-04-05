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
    "3KnPpQimUvJRdiS3YHryhpY3Yi4XCC3GK2MBvgUoENH54NHdwAyP9PAXnBrwsh1N6XRveU4EKW8GxuubcwpkZwAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5fEHb39XhrEmCZoiqtVqbP56FJsKGkXnr33w1J4vJxt2gJgLr3rdJDHS6QzpF2JSRTkdY1kxMf7faDA5WpTAgg",
  "key1": "4CyjrJvg2zrMsvqbvHmCh9ZHBYNSJXQh94W5NsRgx3z2t2zcXRqFZgy8MHedd1ZHvaDqTb78cQkJFSaXoefgkRR9",
  "key2": "4XxcDNQ5xPu8nwZJ24Q3zEmVJw68tTNjNhchi6ztU2vXYPRnr2cYBRUvWNnm1Ve2iFE25v9YYXC1tSiB1aAq4F6y",
  "key3": "352oQKoaiMaZkWpCMAqMqiGUsXepiHSZo8o5kF8CasGz8np7Ly8qujo1CghB23ecwWzMfEfW45Xf5dsQUXqbKoqk",
  "key4": "5zgyAN3noTQpKpFfjdiTwAyx86dusEE7hJdS1hNbJUGqCdHdsxcr7VmJdgT8AsnBvtUd7VxjcZ6ZjfmdUPc1wfUU",
  "key5": "3sN247Kr8PHW9vtT4rnzUMFMaJbrwRBgd63TCnpxoqxL2zEBaDPgYuR5YjDXNfFZ8GEp4zDeBnGADJEwP2burqVb",
  "key6": "2zGNnRaWJKeDPuwpMxgD7XSxJsVXH7YjHuPGfPQ28qUp84CmrZwtSfjJW6SbTsqFGFwEZzYjR1S7bkE7A9uMwcV5",
  "key7": "5juwnSzBqyYnaSSKbRYrTWh5bHpSLWUB8dxdgjMFXpMNcicKBhwW8xnz8D7GraMojxMm1ZC8i2HUzdzpASSrNHos",
  "key8": "57VyKF6rDknxGZXwnREDytiy6LeHLxcogUDAMphRecWeqDYoARCT6r756vYvzjGtqvFv4T6m4F9Gj9849ZQNbEpN",
  "key9": "2A457remqqBksu9tqe6piTwWRPuQF6ye6crePjQJbrCV5UNU5TLje9ShtctfeXWraHYNRz2RNDzG5Fqx4jprB8Ga",
  "key10": "4yngrS8MR9t7HNmYn7tYFgfEqtYbSrDDvb9Rem62KTtj4QmDMMA5eMo4n6WAW61n4mgh4WgM5V7bSVMD93VMH8rV",
  "key11": "bNUwAAYMShf3XT4PiSoiYUVUXPjuaTutchBpTnpJygGwSvbnsoaeENjvjqbCXpsdm7mHKMwnienVJdohJb38ZdL",
  "key12": "4a16WJpzg8j4kSu2vahy8t4Rc9rcXQs19bTebksWBd4cWzGiKUU2HpofbRAD1Vgs7tcRi1XxiwZGswZ34zafJ7R7",
  "key13": "5mJRvJzXt9yC3hRLwcuWX9U8h6i2k7NCzT7yVn6gUCMdToL7nvQfz9UGUf8A8gqeMqnH2u46RCrV52aNb4EJY3GH",
  "key14": "34BTfkJS16Ls3ywtdDYR8Ybjp2jTfyNMWCaFzVHRhNZvhnn5kyK4PKzphi7SUVVbTYyevzhKrM6Jc3YF4SM61dU1",
  "key15": "2j2TBxDxB2XKfNCpCzigxJZ66tQ7pj2bRcXi5mqvT5zreEJJT25CgHruSN5DMxCWMFoLFe2FNJJgCV3zfpTMT7YA",
  "key16": "3SXTJrhyR3sdwq3a6NNAQGYP8Ui62jSRjqxLmSQgSz1u52XwfqUwVGG51RjgmWu1nYHGVCvi217MjGXGAjabYYJ8",
  "key17": "3zRoZ6U6Z5fa3ahETCxQkepDsDNr1RDhao6MmvbTqJ4NeraEUzPZna2nCpUnwHDtsMBvXyHgDhXXazcwdLXiZ2Mg",
  "key18": "2SEjpA1h4FmD6kcwKTcD9HzBG2LP62edbkQiBmURDduTjvff76hmEHqegxeCdqjVbYmoZBNjuV4xZp4rcN64HUD4",
  "key19": "4Ztm7izpQmFwQNVc5rMyFHLcaUaovCbMqyztj4mmAkxfZJvyVVNXr57KjCLGV7Yz7AaBwj3sEv5TgvVDidVbJoNr",
  "key20": "23f7mzrTqysgQc8WLuxTmFzgRS5otF3Y3JAgMyHebAwv2oYcysqpNY65H8mudsp4TGsQzQMWLJqC549r3RWpTE73",
  "key21": "62Nu8z3DUGEpFRg1GcotXebhdTWqHw5JyJPAk73SXZXn63rKBk9RCkuuDiK3C8CYru8Jityn4Yb1ZeCRA7yXRPCS",
  "key22": "58FNKTmdeQtbJMFjhdnVSH4wqj2DG9mzrAwbHNQGwNAzU9AF9WBaU9XkK6GvugwFjfiX26yX8RQ51ffcZqy3b6wb",
  "key23": "RrSxs2yR1pawhZPvDKhFnEH55GjgE8C37BaXaWXpeQydPaG12d8hdzW9A5zY3ATMiBvgogyLKdwF1UzeEArMYgS",
  "key24": "3toNn4Rjjn8Xq23sg3YEpo2Z64KoGAgFHceccNZLmccZiJtpQoNZ8mN9YUAbzJfsnYhwPHEr6WBBJ28k8z7tjfXG",
  "key25": "PDvwptJ87dmW6rMEuyTFiuLmxAKV8EdGyRfcoVZvbUr9roK5mg4Jyj36cCNihgf4AHDXzHYn6cVMQNyqwvJDMbM",
  "key26": "5etrG82CW4qJ8ArMM2XbmRW17UkPgc4CCvwXDXHXuF3w1Vgp12GZFX6Y5Z8De2tEbv49dx86UDGG9U8gcZ7wWJ4P",
  "key27": "3ujLhs1mx8kQma92p5HgfF6MvhFhEYiUcm5F2vE1AWjfJnsTnVsqhNusGPMewFw1Q1zL7vcE3xCxAhPuQCKP347E",
  "key28": "4NLVvMYRaofuRj37yLzfJpdTAxzDFvmJ2ghA8vCHyZ9PDca3ofiimYjHfAoRDxooBgnGKN7BHyiAMpD5ZpbgB1t3",
  "key29": "5ishTbbBudbRXZ4AYsAFcpAkpcezhT3NSKso2zvfKwynCfr7JfyKwFjjUP4GQgriY2GFKA7vq6btFuv1KoFmM2Mw"
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
