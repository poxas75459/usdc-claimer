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
    "5r6RsGUQ7jsWSvrbWwKt3BrqgpG66F71mTicD4CNbEHubC6ifw8D2yAVKv7D75QXPxPs5711K2CWJaHn9FrwiKUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqzowvsDWpcfydWNmfeJdGNmdbbxSXk4YdRxBW9dAsiBxve33nDcXJHRgVauVau3BPTSicaaCNLHHekbZ1gxouM",
  "key1": "2m3HcJPhiAybZieAZ9RKiuJ8jrPzLxALNUDx4FSHvEwJkgea44N2oTSsVBYpv1A33rDFyKKzAVHNmdLoTNyMt7bu",
  "key2": "2YLHLS7uGH5uqUrxhmHQc3SAdLSKNcVxKkrUHCx6Fb2epyFqcdYX68AUJWXc1oZWmZbWfnL2B2VDgcsKbduvY1e",
  "key3": "C5Aq5142kcmafEWLyPczMeqKWXcs4y47pV1sVvVxzeeTJpsmTNQPT33efngTkprrDAcLfa7E57tMm3rxDQ4k6sg",
  "key4": "3gvTMP1kYfujMCGZqXYfGurWPREbkZaAUk1gNZeUY9L9c5BzCz58H3AuamEgdmJzojWNvVDn1n7ktGJbsmVWoAZY",
  "key5": "53rJbX53bM4tFcyERfW92w5kcXWyjMtcQem9EtvE7tpqqbwh6G4A2QrEHAK78SMSEtrULz9wkZcDoWREHkwraQ68",
  "key6": "FuFSezJHN6joajcRh5axjBstZC323v2RazwmgXSuNSDEeRPCtpy9Dai6kQ1kB9kvaSfB6dG38cb7Bvw2iRcYcmg",
  "key7": "591DMHRchrpzxgdbggURv5LdjJtiA9jBPWzysJB5BPCPEPnmrS1Qd6dJcWeKDrqMi9XjmyGz13aPS4iUx71KJ7FQ",
  "key8": "2iixdQs7ywkk4T6AzKGAw513pjftMbJ8yQHsWWY6w5Bq6KxrK5jDfJL1FQfZaubPeKjAtbNfy1FAy7fkoivpUiJo",
  "key9": "h7jiwx8RKamTXgVERNKpYEXr9FdEUKnL2yapqkwJ2aYJqn5ePeaDj1Tk2nByyxaJWLG3RNYfpVJFtiLvzWx7TU1",
  "key10": "3L27752QvjM5emnWBzCQhJg3eX7tWgKFmTih5dignavZZJEVUkyN46o2wnsFUivkU4MFPuSd5DfjScfQa8Wk9tyv",
  "key11": "5HDEw1knAXQzu8vXctBQdi9PFaSp29dbcdGzQ4LUcn8fce6yJY9dq5FhbBhkk6cjUxwE3gxTnWej3oQNmBDCtgP5",
  "key12": "3jnMQuTe1ndi6vnRpAiroY5eQvNSj9LGhYhGjHpffQh1VDQsssyGvzkKqgi1MQQx58LHQxgvw6NUQuNmXdoZxAN",
  "key13": "k9tJichP9WeAUkDQhEN22bmzRQ7mZNpBSuxwuzBAq958gW11Ly2zbB6oUQZUhE8hp9MLH1CaLW8BGL8aRhCuxTx",
  "key14": "2xz2xWAGQxnrKWodESBWuNvjyXTNHytPSVwLqqs3yqYB7BdFezHnkXPf3FQNYqnbtEik34C7gUAzPf42hpGVUpDJ",
  "key15": "2E7axMvUX3cKFETEhVLWiSg2kgkCUgNfPFpFSQrebAVztYDNCpRSFcc12KPmUdaHWcJaXE5Q6c3UriSp9oPKDPiC",
  "key16": "3TYPvG7c8F7qw9rbbmKSjoKTP5TcGzr1yDP4oyexrV1cLGT1GPqVrr9NjiF8EQL6ytYrTecRbMcPwuCNgXxzCZCd",
  "key17": "2gtixu8uJWvQjjgKkrikFghzAZCJ3h8qJ2B8MRAPjEGR1XELuW84YJ72kJGN5iddesCVwtXEpZTrDeXKcBaU6yJj",
  "key18": "3XGVcsZ1kUmUhAhXkLUbWso1unRYG4JnsPbzT9x9p3R8vXf78cvCPJPfFXSmJqKgW4uPGKfR9RPxiR5Tm4ftDXpJ",
  "key19": "v2fY1Jmm6Xwj9W4QE4asyzYvTVeGrJACpScYW2BHY5g3z8QVUEnn8bEwK1QrzPtBS4zccQ3Zof1f6wH9kDabBxs",
  "key20": "4sjhG5HHpnejh4j4xhMuV1vfqkJsXaV7doifAtDhPdcTpEzbvsWb93iDBMnaFhv7S9Dupc4ZS9QafhPSJZWRCnsS",
  "key21": "4odeotQKN79LFXzcMLzXXa9dUkeen6bmnpyaGMaY5edjVfNd1rqmCHBSvJXsMaY288T6H5XjHyt6oGQgPMfnqLNw",
  "key22": "5ZAfWTiB36fqi1LYRPWAY97PPLnWueMxM5F8qRDbhKY215ck1GZcmTMUEZNPXqaSq3SNS2tf3p2Lzrmuof2JhKeX",
  "key23": "584ik3q4Su3KYWzfgi4UDGYTWTg9rcfcMP1qrHBD24DNv3hMeHEBpE2hGz1HfsQB88MT1dHHv7GzDVpSVqvJy4AD",
  "key24": "2Y568vRQFFyrtgSbkWm3fXbwJGKQqXqfFtc2YAFiGeeAWUPu8MHnUYJH6tuRzywXV5qDx63Cy3VQfKufPLEWUeLo",
  "key25": "3f1eY69HxjUjD2QiK6SkBAqM8pTBR4dTTXLBwLm2vDab9caY34T3jvndqbHKukeyRU2dTZ3wvJBK9SjBUcWAHWbo",
  "key26": "2YqLyrfwrfsg6rTWNZaMQrkD3s22UAAHPbN44FwC7bDXSb9TdcWxfL4GhrKEX3REmCCtc2wHrf8wmmcU5ywJcsHd",
  "key27": "5J3QTRH1C4k93iBMWEM79TQMNMTTixNwCh5aZhFfCf6erzFZtyFW8rNQ4miUiis84hYENo1BfENVtuRweDxqZJ5S",
  "key28": "21q7TbecPNnSkZKTupQbNQgrX99cPLKFuvL7MJujpzj4YwzwndiowzYAMFn6aXkZTFKZAasj8Tuf7pEh2ZsLYSXV",
  "key29": "4LJr7EHAhm5DAojNm1tJXsze2itFDmwpwFa4CLDCkmWnfXhi9uKPipzrbfSd54nhw2UyRmH2kskVtRUywm2Bz6e3",
  "key30": "3gQTHbEvQdjmjAqEWKRty9wFQXwKUmpiynvBq5hXNKjsJG6wYj1Fc3uW9Hh1Nj2rSsMj8UaCnXoCoX6xqB5zntt4",
  "key31": "ajiUhiw4PjytWedULcfZvR7tTwN1t6e3y7bBmgPsjKe9FyPfGQJ1YTtwih8YarGUgkPKkXbpmSVrEJbbRanzrFo",
  "key32": "5vhFywgAZL2khPJB9esKXjcEKUbRdjnFesMUHN1oW8m5KUTD7pxBJgdmS3yKbh6CNWgaVvHRTKC4NbyuDrsXETFA",
  "key33": "67HeJjE7NSxcChDFYJH2cjfhnCTbKTWe8pTZf7FvXQ4VNHmB2ve1WZxXzZ1tUb42RSCWs42v1WjgyApc3RkV827w",
  "key34": "3N16w24RBWGTjktuCzubaRSrej7Jgi8Ba1MbtEm4b1STjDhwd9uDTP2FWEY7juuL6r3eJwZf5eqyV185cF6PfCpv",
  "key35": "4c7rtGvPnL599RBs5TTubg9wCqhCrStSENZDBdii3z1fm2YosUqk6UWMdaE3LgoAPGKSWhZpwPqr1izSBvqs17xu",
  "key36": "SC6DMLMREEffou6ZnTMHo2TeXRH31SghbT3eywouBoi7X7XkXEvVWHKTYWK7g8TUtZRu9YUFvruZHzMPtoWApxN",
  "key37": "2nr6QT76ZNeqqXr6Re3AQzvS71X6k7FpQwjCm5eQzCj27ze8t8YEwcY3WNmdK2LnYRrDBkNLAbQe5HBematvzuPj",
  "key38": "2Apuw3gyrq9wqLWAUq4vA2aMH8XRZP8LhuYDys5UvNd6w24bv1REBUhwXifvw8J28oASdoCPgmDAGStuuLn4qDsp",
  "key39": "2hHYWc2YdHt7KtM6wtYBFpSDXoaivgqPoQFZw8dpmwk3TbBdKDYSeazQkmo5jh1eq3LYs5FZy4V6vktH8T8JhLmC",
  "key40": "27VbzxcjUMDGBdAFQEUDUwwLRbRYkMofwHMAskZXahezxfM3NZSpKagGx9X47ByQEDKgePF9zRCtB1rtqb8e6Ex3"
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
