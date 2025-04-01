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
    "3Vp8p9G52n9yPZefXvLo3WwHuh71L1X89WnWHJFXW1mmi3yuFBaTCibkyMPpxjm2duPhDCme5DmLUuGPHPMCLrLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3199g6TbuLrZUaUjz6ney5iJ6Yh5n13bvpKgXTU4XJxZmhvvbJwfJDHMe3D4Bw5TrMAxuRYRmV1Fu9nnXZY6YPbZ",
  "key1": "67PBP3iRpJU1xabivWstXtRFdf3pzG58LGpmdnZjE173Bf8yQwPVCMcgzEbqdUr6iz3bM5PDKpV7LSZrVyQC9Prm",
  "key2": "4mdCkGf8xXUBQCanofSjcrHME9HdmkXzX3CUsoK2JxzCNcKpAaMWEWNr2JGrqKyWGBPtQ7AQYW83KXi1QpRw6Fhh",
  "key3": "5tpSsTn6PakFVZMjQsiJuaypBVHvphprFBo89ZDRV3JADVZRGLdaKLy3hV6BD4m69ihw8eXZqQnZvSFGwM3s7XQu",
  "key4": "2uozNxw2wooRujMyNBxdye3ErHjb9D35Y1U9jGudfb5WpX88WZJDukD4mPd8q6VuH3Dm2GeWowe6H73yhnSRDxX2",
  "key5": "5tVQf87cMGf6wa2S4faUSXuP3CWFD6nZmjTYUU5qAt1cYZAkBGgmZKutdjSZXX6V1xBgwppNaeDXwgEHgqBbsR6M",
  "key6": "nLS4gwqTx853YRAHw5AxfwWyYTsbumKv1uyqaQhh3YYZc8bphApSueJWxb4zmidVfpw1TPHjUD9X9WRwUKWwaxA",
  "key7": "2ogXAGPpRichN8nZN7BHu1EK5DorPeZwKYpJy3qgkwCcvMWDyy5bgHVxzub7VY4bJ8MeS9d73pU6mLdBkuWpwFsL",
  "key8": "SyHptebem4Mf6dWKnoPAnjaoKn1CXZ5mN2ogFj4PjmPUKAMCpuT31eqgo22rt6rweh5oXxTQTqptVXGTH1srFw6",
  "key9": "3uGvwAiwCRGCjRUwx5WwKKUuVZVdpfh83uUiL1CFxmgyh9oDRmJbgJaLwLNwJUa48tfXsGpXBdFWBPDaWymtyVHN",
  "key10": "25dn1jmPEeRQ8oa1zS377QnvqzwH3Bf7AXq3DVsz1MemtGJzzg4HJp85mHjaEDhu7PPM49wJaKZRK9ZRuqkUQUVc",
  "key11": "617mN1Krfo7RvfsXZvLMTQewTJ73HDXiAUKkJ1r1LSMYUQhcuWRg4gZJWVZGzJWkSFmsdQPtLjvsyKXEER6MuLZk",
  "key12": "2QnqcSVyUpfe7D8Kwr2dtzTiSiee2NiqXik4moAicSH6CjSMj9EnS8E88U8gwVnKPmWo6jR3EosjyqVxDdxUwjfE",
  "key13": "34psYUk5LqXMGk7qQJajUVxd2NWJGE6XFztFPs9nHavRPCA53P88Gc2uDNPiBUZMpb1YqrzekV2arNzsJJnSSxYz",
  "key14": "3hjNCp2FuHGUYmF9RQFWx4PWwXwwV6tksnGMrDyibihjEkJrFE7wuHW24DuU2Zh6pjCSzr7nrx76nLwH23z7jYJ",
  "key15": "3YNNAB1JXRfWXpBounWwDk517BLvS8r3uv8MgLGsKVveH6MFQB6gmpkpyKwJciHJ7DK6EemCBQ82uwJpYJucoKsw",
  "key16": "5Ji4ZiE5XGjQbRXARGxjxmmCcoXE6K426Fw9vutTRU6wwkEVJi3K8kZrn6DAJzP1WZ2xoWV2M5bXKJWRiXAdSB6N",
  "key17": "2SFReFtFEuTCA6ZAiudWAhCZKLua3Hi9MVc3sBdfr85FUAWxgX2sMMXdSwGN6N1YCsiErHu1gMvU11rPPvWkNwmF",
  "key18": "1ohnb7VnvbsmiUDrc7osr7zm2fCud55L3N5cqYTTUhovZ2A7X2BqaZ48ZeaRwTcV43ZLe2BUjj1Exs9bSaC6a6G",
  "key19": "4Xn79iGC48ja6FgcEGuexSRM1cd9cQ8evs17wehGqM6AageMj9i5U1KgV4WPDZkpaRG9KqCyFXMtB597EDvcmvqU",
  "key20": "3BDjd9gXNd35wyW6noXQmaUDFoL5pFk3yRAnYk2HasfyxRRxHmcvsKJQB6MLLVobKGTnhDrZhedyTEwu5xeF1Ay6",
  "key21": "2PkJAaeKB8gsJZnpV4c9cDgJKWrBhYwKYWi6PijWkSJfPxB5vXGuqSbC7HAE4SwvT6c26xd8de58wwhwpRuN3R8D",
  "key22": "4dMSSdKk96BahH51Pvoj9CxQqemg5EnpqgwaBh4Uo9ea34CaY9ZE5ihnE1FbNBNavnChY3Fb25uTLRSvPFZD8NDC",
  "key23": "4fNTyaHewmyEHsXQRJejyt7k4svyKHrAP9CrDHhuq5YsMWhsupp2wFPWha3t1zpAcMuG4n2Jt5gGoxybrBhztg3B",
  "key24": "3uBnb3ZRFsNY797cBNAikVw1jGp1wn6Dg3HG2ckhCZSBAigrZdj36QQeCBVtChBX1U4thuAW71No3NzA4S7m6wDm",
  "key25": "2TwSUCgz691AzEN6QEzVzV4xhg2VGcGtiJhsqFD7kX8hYmsGCM4tugdeV1Ng1zdkMoJn1dhdFGXgSYmqcyMo9oMv",
  "key26": "3V2Z6fmgruJeasFZBGnvNAC8age2KeDRntg2QtfDvhsbGAPofDdJAmGhC45CK1mDyJ2TtDTix4RRZiNbuNgpk9Kw",
  "key27": "4Cqb1brsGQwaQ9j6UT87bR1wyQZ8MbkGm69mgArP1f69XVhSaPYX9p8T1VHwMhy74qCG8rsA42Xd7QcsWaomakGs",
  "key28": "5Mc9qZNgJ5bwvk5A5gssbMBABsYTGdQeZ23mbCmL32Lx2ttWgh6NQbQBvS7HA2gqxws9YPgnZ4V14Bqq41qz9sWt",
  "key29": "3SJTaFfDLYs3aMVre6mpV76kQZcWn13XyfmockXPngJDvBdpoc5NKptNkEhx8QKvFwTRHRjb6QQmB8bM8UxybHdG",
  "key30": "244GETevDaTAVS4aMJEDD8k7rfoXSdryBRvov6y2Fht4qt32m7T9ftPSJaQbxxcWSu1ANmVsyhEpSDc8FhCE58Wc",
  "key31": "44zbRdamysrhu6LWw2DKzBJUcRnt2XY2cwGD7qaXV4K65jWQg5Evad3Ct5Cd4t9MJqntURLbTwBW9BrGMwM9BGo8",
  "key32": "wQ9U8LzP8RJBudWSbhtticm4xNFFoYiJrjUP38e35jqbkXUVLSM3APopxtxmfjaNPEfJBRBacYwxKc7ZwT4soDm",
  "key33": "wsqwqeEeWvnpZ3EzS2i7572mm3QSrb9GbQqPTTfKcDJQcyrU2tTZEv1mytJUVm7UDoqjUjkkqk1xhVKVXPhxm1d",
  "key34": "3jb81w5F521siCtBWi2qnWMuZqXVwgc4Sfq1cGcLdYqwFocnGgX4b17nx1xX3WcbP1U3DzE1FNapCBGHJSd5pYRU",
  "key35": "3gBwWnFJpAUowq4FSto7do1JrdV3Bu8NEYaJt6hG4HKLK4jZ8Hoc3y7WwNg36p8acejXvFewdg3Hrj5qzj8YVaPV",
  "key36": "4Xomkotjk64Va2Avfq4sqdLdvP4RSrMKvTDmE3kLp78xQ4fr5FTmnt3djPDF7q3EGa7NnKPRMDM5PTZvbbZfXdLn",
  "key37": "5q3oYcXmcFJwc91rPvRSMaNLzM8S3zGoczmJ534Uvo6HEfPJPMEFrzVtJeEe6nUK57WeJy9qqB28UkTSu139RSwZ",
  "key38": "4hyqp9AfaQDda3Qo88B2ejs2NjGfkAQWyY9MPyzyVVfCzMoT5rhRygeSZqFgkFGgWgcdMAA5K2AgU4iy53xjFnt3",
  "key39": "tJUuzPE6LiJgPVj1HeG67G5bTZMNh5Xs8F7bwPLuWvZ6nHhXpMDu3ELRskYFdnuhymf3FQGGWhPvCbyF7M9Dvkt",
  "key40": "3Z48Sc7vBaBjrgkf8oCgUQTqMBp7R8winwcb88tdACH2hLUhV9VUkf2mhFunGAVSv47MPvdBmYrLLajC67TjU4ve",
  "key41": "4gR4HVi9dNnBmqgLkh54E77Fz5i3MxG35SVxPdgvXNzLtS68ciSwJETTYgorDUAsYwQRr65VPw1JuzW7mZnGFD3E",
  "key42": "5TtHgkkv8PYBSwReGvMDL3665uUiTvLxg1AAjgcDvppK2G3qGMT5jFtSyJnt4cDFGLVb5Z8Ztpd99D56tBp9j4Gf",
  "key43": "4EZ7xd6Nsbwr682zzBtWU5X3isa9s5uFsaJUpFF9KspUP8BprXja4PRdnBbnMufkuxYy7XnuYz35SY42iKiQHmbr",
  "key44": "29r7HsrMLNgaC9forkMpMw5EbiHcvTfWkTM5BuhrFYnKYC5uqqtZcmQBXXBxQUqr9e6GhinszQT9XhQWJiLzbZSf",
  "key45": "5p3t1DNVuHWKU23GDatq8iRtSz3gyHTtq9gYd14dhvLgznJHJWcmcDW3jmwxRFm2RvGZkDbfYzaZbFhbTH5Vj3Du",
  "key46": "4PHUXE9oQeDAWVVU9c5oHF2NGcU9VH5d7tsKsRpQN8sgNeQ2kc47GBb1A15HneixvpM7UJadR2MVbVkde7Yw9MUY",
  "key47": "WUYqzaBZoLfHRNUDCYFvLG93VZYDvAXkkHVXpdMiFzjhkWhWMZfkpAf6TsiTvhWTUzUAiZqHGFGEPcY2jswokqC"
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
