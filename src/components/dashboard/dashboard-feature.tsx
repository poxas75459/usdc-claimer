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
    "3HxEyrKqs5Vwy9DK551p26GiaNQFLTJ971SKmVbwDyEGLJdBwnC6VeYaC6jX3XJ5sKrvoxnMQsQKkGkQNsNnDhe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErkF9zAa2kfcS6J8fnMrvNUojY1gEjCiDRLKD9vdkZtKjy9okbf5SeLmrVY2FJncKahXMrXRhs3WiuhNA22FGtr",
  "key1": "3HETtxHCi11JfnujJoftspncYokWXPi7ey6nvm33ZzxxcDeFoKn1nxUXpk69ZnwieXwAFhrdVwZhKskY97hrkzoP",
  "key2": "cLf8gyKZN3uS3jhnPEjTNhVVizJLd8gms61hRaLA9TV1irusP725imAVeasoaCmJQLNM2yn9XotmhWWKAutXmhy",
  "key3": "5aY3emNvE4mDb97WKrCzu1m6XUBqVvMnj6bVNr41itQ7mhqFSaKcuyYFHNNjNZ7G3iYY99q3tYk4EGF85auK4GwC",
  "key4": "63jwS66Fyu6Lg6XB76QtDKGLrRTE6cnY5BcDhKwRGpHCRc5uPx5hmyAzwTnW1pd2s67o5CJjpKpqwaftar7g7vxa",
  "key5": "4TydkRQ7K6g2YUF3wjSEAXv8ogpLUZX7fu53yCnp9kApfCmVZoHd2mYE7hGqEMXZjL9vtoUXzfLJ1az66peJ84xC",
  "key6": "2FbGTueSVLw61tbdWGb1u8MCvNV61roDnDcY4MnGnUi6YqDhVywTECvthYtKsTeSYMo1SVEYpXDzfXVc32uzfbyh",
  "key7": "3aEsegtZSzpKsf487aTA4AGZ8U6A2GNGJamTuceF86rBxS3JXGxhECCkoErBLdpu18scj9n7sCRfZgqVBQsjEFkP",
  "key8": "542g9Xo3ioXTkHTKtkfzG4qUwxUk6CPFGGJ2kTpvrXACxJrEfQAHqnczV6FdP8JHRz5h99MEKyGSd1WZFkixuajS",
  "key9": "2SbadyGRBzCoKV1ndySRXF1iyjiE3YNxM377S6MxZ4iSJ4erpTXZMcKWacYAFJYLZ6sDo1M8EftS77o8SH8g1eZh",
  "key10": "26wXy7XtdTfmD3qEcXF8szUd2SgwocrKMQM3Jo4NcbmtvE4wMiaMnjTaZMReCq651HoQf4cyjFsPJAe7Yqe2ThsX",
  "key11": "4WkVXeXEBhMg8Ex9KWGFkTZPK3Mn6L6W5NspKpgkUQtoM94ApnmhzBCsKfPCHJgLkLc1iEdM7bSEDEf9BzodZsjp",
  "key12": "6NqX7JRuVQ2JfBL5P7oS3QwuwTAQEpLswkRPuRgS5Xvcn2es5iFD5UddKf2z4RcrdDY4iM5rNqBi8t4JwyCQV4J",
  "key13": "5czULKQvRamdkii2CierwJS84ujM1nrHCL8ScDy2NY2RWxPizii4kxW3os8NFfAEVNp4yrejpDHUik9m9gLBUqN3",
  "key14": "3s16vHrFgneqVavad7d5wkL6K3rTzG4NkgqvSBr7Uh5re83JpcFvnF1wcm6SZKNws1kunZdN3ggdQKsuUtLGLHKa",
  "key15": "2YWJLRd6hiJQhzjLj5uNaS2onLf4LvvWDz6uYof4uZ1ydF64aHwDEoDAY6LjxjaKQhyxczm7fQJREKvshCnbuKxL",
  "key16": "SkW99DEuZbySa7ZfCwUpri48X1h7gLRMPbT4rcy3S4gewmRnaowARnhQoXvQxxyJWZMyp21NoJ5iWPErdgvxxpo",
  "key17": "FUzvbdpm9aDJPf1yUjE9wdyxvwvaXjjThRrUiHqJUbeUd2XxLWu6m46oTMnovybEjZyrxpf3QPZqGWQBF8kZLaA",
  "key18": "29W2oGjom6f6zUT4wsjqasbufnXucUosAxUhLb6UnVJdUA4tLXDmwJzgHufdZsfpj4k1wK3i6A6vtmBLGGkpFuMH",
  "key19": "4hMAc2TNyV28j7XAs29ZYS2AdboZHmqET6Yapv2KD2KP8Kuw6TyU2uNeTaNbYbM9ctkATPkakEZRTjZDVWBi6iVj",
  "key20": "w9xSwN4X1LiY6cTdiWeQQRnFF4Krraar9HhCYAo9eZNfHTXHzk6pFb6QMJxZoc8KCwraN86hn1Vfg4iNp91LdUT",
  "key21": "65nhk3uEMnS26xSH1XE54VqsWCz3X2vUwEkcCZJTpknKwHTWo5337VTJLwcJgubcueUoqPrPBeSATKsuzYXsr7FT",
  "key22": "5PHDVydrLZar67BA88DP6ip9QgYH1AxfJFnhGgqSxxCFuQaSkMniGzCQX6pwChCquoP3T6NXgZoKTMDHcRbbtpYi",
  "key23": "2VVe1H7qm2HwHns5MHambFNz4SPpncUgCF7ou3dEmXriWCU3Booauo277xXMWK8cN8qfiHAw4uChr8tkopwzvps2",
  "key24": "3x5WKgbreGwG1sGJtYTZufegmz3oNfDye6Zz22nTy8exdPkq8aoL5C5fEAsoExRhPcXS6pKxoNrbKTp2rkW99VdN",
  "key25": "4vvXnk8raqqu8cfub2UFLHBvk5ihEGpSbzqxnTZdRJGDCDGGsxfoCYsLx4NA8X5ZaMTVpejwD7gfYDBqxmQVt943",
  "key26": "3arcs4aAGkxtNGNNn6qotz7o7ShWheF46UYb36n4LX34H48YFqeF2fdGefpcW2FFtLDjiwVUM42oePmcHEkFxtHP",
  "key27": "479R6dtMdJHfPY9E8L4tYRvgyuaKqZgChT8XihMeHGDTYRvZ1qBiJHk7MAvJKaR3ddPgbSiejiFiCtwTbgSSKhiA",
  "key28": "mSzoNewsDvkAAsk4862GTpNtfEvAHcC3tEWRa6zmSyN1B1gocHjA8DveD8DpHjbvcqpp7rTCNm8UA42upMiPPnQ",
  "key29": "2QFHiovogJ4Hsg6nrTnQMySnivnGSuaSuCPXPbWprf5QQRVXG9HhiaXQHynA6PKmea5N62GFjDPxE8U4G1AdhQWS"
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
