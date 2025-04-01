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
    "588CrKmRe53bSJE2BsPLd6Bgp1GDiekKM6WsUhbnpvsqfcmwtk2HHZ4XeELR5j6HWnV8F5zZsTsZHkSPoTno8drN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UuGYijyhvcyjRJJZ5zB7R1ufeGBEqaCF1rabMpkisBseeqWmVUwcY6PF8yKBX3Bbb2iST3W1UfjRWqSBScp27n",
  "key1": "5v6Loeu4DQqEmmb9GYqKsR7gjYAS4HW7EWchX8LdJtFnF94EGBsm7Xeo2sPkQ7Zt2xLNZiwxLcHY8cbuVoNjpf2s",
  "key2": "BN88ddjZ4kGZus8RuQaSrYe7mM79DtP4vpusJJxkrgGVh5NaYmUixrfw5h5cG11p3jhwrQ1gPTPjGT5DtsKxt1N",
  "key3": "dq4GHTP5L98HQetJvRboqyXFtiS5kenMMmRweCXhGJP3K1M2n6qv4iqkaZV79SjUV4Dsm8kr1wszHAGQCckd55R",
  "key4": "2sEugvPjca2X44D4JPxbAFWeEuGXhu6vg8jAtgAs8p5VEysxhPZPqPsduG8NaSggVDzaiHjSt1Pg1gQjiVkh5JYW",
  "key5": "4rK2e9BQbzDbgSzrYyLyLk7FfRdjHs8XNxiqhZbFZP5659ePp3wkzRqSYhtiqraMgjDaxhAN86yDoqq138TV6AZ",
  "key6": "5akFAWsdB4bZyCxp6BsgMZ5P9oGRgYUSVZXY44Wyrx9NsHy8H5YQrJ76bLEus7nAFNDxMBpNvQXuCdJ8obcEp7Zj",
  "key7": "GYSpHuW3evJVzps8tPcriqGG8P1ThC48vSTHPXZaY19n81wG25cYCe6NneCmaNjTut4jY2A6uuHHUtcQFMJD2a1",
  "key8": "2Vrai1CJtkg2EB6fqDi23AAtDVzaXHVeBZPKo1niHgvpimgBu6xH55gvVPiuHX5SPUn2PFvqiftEv646B4CSLCbn",
  "key9": "PmbJpKMmxBngj2VLm9FsGHy5ya8KKtDycEH4Veu7jD2i3TyqCtM42uMH8daW7r61kQA2gMFmXWWdJ7muigeWXDK",
  "key10": "4fBUfXF2cNc1b1SNUHwRSZVZf4MrDNUVkqGMtgPwae78TSKRzQb9yLJUf86XFv5HnSX5juc4b9sYMbopQGiD5xbX",
  "key11": "32ozALmJGT4eqdN7T2xt3XuxKKojpvM7ZKa9HKG6hdmEn2ipitub7vozN1MaxYBVq6BQKbt9VhWd1ckk1DUoduEq",
  "key12": "5YEQC5LUgaG3hXj3u8czn3JoJTFQ2rSt8D4Fmqij9Se9HaqX98QKUPRz5vRKYTBm7xreHBpWCxT76R3rbYtkXmHc",
  "key13": "5dW3guh9uKrYei8fzidS9yptqsePw2EaiBGYd9DPyjNQfyu3Q9nYkdKzmgjW41RU45Jm56JQ1LZwxwD74BdyAu2o",
  "key14": "3EzaqdJ3cE9q6thqoGP6FxahFerS13BmA5fRSPkjzT37m1yPpHVp7RMwwDmdZ4TAXLKbyHNtSD4PDpNBkpjf9dU9",
  "key15": "5SywHk4KjisupS4WLywr7dP2p5MUq5n5j3wEHLeEvyNjANjSqa9hnFPn2YM4z6aRHopa14T5M9gi79TT5RTQoAxe",
  "key16": "21EhnqFsParG3sYrPJBNX9kjWrn5gyJUhECS7BNZ1t7pkpxpUY5fQy9cK8x6Z5mRn8FmnQ6Uia7GRSNeC5tL5fhS",
  "key17": "5y1PmJj57bmL4CMsergyUw1wf8pMN1PriACyEKaK4hFjLPuj9g4rAwAhGrxYgzbTdWj1cUHnZh9ZPjvX2izqoPGd",
  "key18": "5gjc8nVRv3r5T6pmbLY3CY8uEenCstCumzg8pkiNaXSiddRyGcns8G3SjoJA5uHPcVAv2ypaQoYKrKt5QfsWgYXE",
  "key19": "5fwLZn55XLiWqXJCVHugDJoMjH743QFigtzLMCu1f1hY7ZxAHYFKdWbXphn3sp7bDYZpudmSP71VCin89XnXvkmp",
  "key20": "12A6qCcfn7akiDyXBntRdZZRqp12uzeKS2jTLyPJ3Ljd3ewesa7D9JjFJC6tyn7CtPL7TeMhCct3wisV9aqGYooM",
  "key21": "5dkLF71XMiAVKCLNEAvPuEvAX44TmF1bCFcErh6MxRMUDWczT4T8KrygHv6tNJ1FD467C6M4aNGLyzwfLwV8Egjk",
  "key22": "Lu9Lyyj9iypFi1bWAS9KesKeM45iUVX337GCeLr59k2Q3TgdHFwaoAALZo4gxQ3ixb7eNmaC3LthmqBNUXZZe1W",
  "key23": "4XQgdoa5vtSeMf8XroorTDUY3veb4iZK9yysXQrni6CsqsfqZWFwvo8WhwZ4jcGEtDHCqC4LzL9NfTwnzVYf3o8b",
  "key24": "5JcR6oLAwA847GAa3iop8grzfEkzcMHCCg5C1vyhorB3iEmYGRYW2iXFZ3RBjESJ2TfTNDxVywXskxPnEAGb1zK8",
  "key25": "jWNxT6vp6ntmK5rCpjJLRq5mFcRaqndz93auLTi4VaFQvsoAtjGht3NZK8qu5ff12Na9KV8goKXvPhpnbGuTXQz",
  "key26": "3GwFyViNTEqcnif8sgfzoFrdfw6UjeNC5i7DntpT6tkmf5Zc2Xzv8dAj3yTmjY7S6ewqFwZbwJRC3GvLXtC6LpBu",
  "key27": "2suYbgHnxFFVSQddBHkdy6HqBMwHjA3W8d3xWD7DUEkohmKo4YdtP8g8MpkV6J4zQa4ptY2kb4znXzmZG934ynKK",
  "key28": "Hg7iZgtR5UBnCYn2SFPfCSvuSGbLczV9rFW9CFJzNkw1HyzJUzfEUsiB7DgosJnqMd88bRQr4n3J2xVnsuXr3dH",
  "key29": "2crfVK8Vw4763WSJoY6WbddNyk7VJ3ipmT36xBruKoZg3akZ4ZoDpdqodoZBCjj65JFWyingwVry5ZEE4LUFMprw",
  "key30": "3PRkDoL2GSSiQYqFKZcFPktYbqtpioDHV4mXmtfsryXKQkwWuEAeVYmGc3RXs9WvAA7ncgkNfUBuj8H5i13my5Hk",
  "key31": "3qP8J5T8WX8WN3CWU67dtLQZf217UgzqB4fWqxCo89kJCUXwHtaeY59QBtdDnGrzcdLRfKAqKhxULz8Mej4qZgQ4",
  "key32": "3mhsdn5JEEF1axk2dGJ7Wu23BYicjrcCrQgUg9dYUuG1yczsLMa5LMZ1kUBSuw7HU3DWis99P2J2TqqNQ3HDrKsv",
  "key33": "2wPxN5ciBPr5EiRdRt7Zo9B43VBhNxKki3ciMQqLnQtUWHZFpu4ZGTWqs3o5tV7jm7p8GHZVJzdce8zGhAerE4rG",
  "key34": "3iP6JB5AH85Qe4NsEv9ZgVdUSjQ4jFQhF8YkEyx4E3MdS7pe384j91eNwTVQ1aazF7ob9d48HLVLsmoJkZ7GsBPX",
  "key35": "4xmafKEoWcoQm6FRwPGSDjS8s32TcBP6Vm8sNB7ttG1B93t8rpfGwdNWkpHF7xyJFUJKCmXtCLJyhEU1QgeFJBWe",
  "key36": "3gVX2SP7JbSdcD3WkbqUkyxpqzP3wbqRBa1YUzxZubwkEUY7nkfB2YVEK5BJQ6VLhn8xaJGseb1pEnhCLEHVuZPx",
  "key37": "Nyx4Zobstuvc99G7pyBQvXoPrrrngTyiQcrvj2qra8F4CYmGUfgVMsShkEzwYEFaB9zBsffjPUs9qptGP7ggrxq",
  "key38": "3XHu5tw1RCS3XzoxVn9Q3QF7R42e65Xot7Gfhc5qAvT1jubqD1dt8RsFKEky18rMUiTiPUhYz9PJWyksxUUX49cm"
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
