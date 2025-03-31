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
    "31bHUs9LTB1U4EVeFBUDwkczwChbp3Z98aHipkdbk3xrNBkn9TKFTn4S2WDPddw7TGgq4kyr2wzXcZDAhCb3cbiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dsJY8WW8AjU4QWwLRiUqoLKbATJiZHAS7vSMZv2oYidExbaBaL1TFkkF3TQWrZvXdzEhS9PFvULuWeHJcds1rTX",
  "key1": "227vZscy1JHyqNmbaue93HH7p87VLUmMUrNpDzGsLunZ9EVvPZfPbTVgtug4hjg7hBEd3NhAaKvZjnJAZtnSKiLk",
  "key2": "41VyMzED8cBiwAERGkAu4XDVaaSMTuBvpQSkUpZNBTGx9tyiFeZBwqTopiYJHXQNMmGjNeLmsXhZdhoHNgbkQpUm",
  "key3": "5s5orsNVi2wdFDpnwGK2kjUdaV6Nb7L3BV22QSM1WXy6zcL7SXThRkYpS4ohcoS8T5PjR8sqPw5fgN7zaixLDxXN",
  "key4": "2qVx1ksMQa7sTX2i3vXT8e7pmNxLASEs3pQ6mQCSsRfykebXMqvTj2bxpzuTyAHr494VhTiuQLPTNhuuH4Nw5VMM",
  "key5": "3NNxVzYv2zfw4uoL4yFJaMD85duf3DdZXymqv6CwPw4fjqMjzrfwsF6eCZDWcGhPiHnbnbG6LxNaa8dDWT9HdAyJ",
  "key6": "3uabagFj5fbb6EVsJ8jtD9vfZZZsFWhCj46zJUtcwUL7wZJ4hHhPuEwgLqStbLg13BDCvWvyxsbf77qL1cTRooGS",
  "key7": "2mkq2z19NaSQjK7Q2N6gfJFkPZsTf3dknUjtKRzfttiWNHWx9ML5bWofKkyQdr7zHS8zK73haJZB6CYnxVG6XmFm",
  "key8": "4MJ9ydAVvf4SbDDBZTr7f8yhz2g2uVJ6k63xeqjXNajkiTr978hJJ1ABUrdXHnDg2ayr2tC1HWkE8V3sCabL8Rjm",
  "key9": "2MVYU3oCjwLR8ohhCUTqyNFhMWcozfzwj2v9RpMKVzYUh65yUeJD9uGEVpTuzurRFa8eZJeaQBRw13KSSdRrsZHo",
  "key10": "3bR2oDwZrvhAHedwF6QMSUJGVSaQ5H4toLuK2bSpZx5B8FWh8YLU4CWb472c2W6DsN81dz3WHnr2SktfyRZcXdq3",
  "key11": "4CpmYKHfBF9mWtVGyFLKhKtJYWNu8td4jufVs9TZKCPMg5GbDPMG9sJMtsZP7yBxpoKFndZ843jqD3oZHcV1cmzS",
  "key12": "2B5S9Gip6Mm16QKKU9TxHPkLoWHWGbGz4d63TtmP8cne2bmVA4eg1E5MfBqZn8GdYZY8Gk21rK9QSKTvKC8c5p5x",
  "key13": "3y54AwmQFhw4HXq4pFamwWXJpjzQLvWSdWpWf1fDUWmwhKzSRqp3aSMrpuZh65CacXR8ZVTgh9xrWmppgdWotJRh",
  "key14": "2eaVeRWWwk1p5VrNTg1wUku8KN73Khb7encErvSTquC7afkVHgtLrH4MnyeLcAjvkPyYbaHN5wzChwjgR3Dj2EDy",
  "key15": "26oMt5uue8ujGKAb5YBZvXkhg1ZEgJ3m4qufqdw9yJB2gCVqyiZ9NaidHaxkPg6ETrw9s8bj5xz444W8AbYQNKNF",
  "key16": "PEcNRtdW1xv2qTXvmruNaZdCkBfS9tuxBra4fFw7KskQWyJvF2AvDiJbqRn5Pgty3QipNT8KPy1uRgcScBF2DtT",
  "key17": "2AxQvogoJH2vdXk7uDxBK9KsuuYmQyJTdYfmLwt8YzeQ8y2jeRNy4Gd92AnZxLZP7qyZSr2pHiG7sGLRJ2RD8uja",
  "key18": "5F49iwRhBtjp6SJXPRnfqePFPx5xAW3efQgokK3MirTXJExGA2TUMAeajsAj38DALRmPjd2yTmjQy3sxUzV6w7ii",
  "key19": "LJC68J6VmNiYVKJgAM6BUWYAzt7L8eueUAu6CjipLGujfAotTF6TJN3ZFgvhLHwtyiyoYEeNdiMQcBSqLAbycZH",
  "key20": "3YcmzwUauvnAt8wPhLCruTqbAY4oMbYoeGgrFU5BKkEdcLoXwChteXDVMJ9hK6e3D2E5be98jUX8hofYTfhqAsVA",
  "key21": "5gVek9ei4idKxi7sfS1YEgK2VVgSQ5C9JxHxGBRMmx3Sa2aw3u72v7uDchy8aZDmazWmbENvsoeFF4GLb7MhA8Mw",
  "key22": "ALitn4BkzKvGXPMrVyG3rVQngX9oqB6cpx4r1495fy2Zx9EAKotF5uYuxBRXqHSWgKh8DMywe93tnW4pyJuTRyS",
  "key23": "3yQSjismVzDSQePNyJCgwAMtyufj3dJyPzkxa2S77hsfC26nfoFNvtjSKwWfPoTyqDNvU5KLb9mr3zMHtUuCxrvB",
  "key24": "2L8t8gxBVmwq8X69HeTcKDWxzqnzkAAiuJwYrCSDzR8a5xnojsVYnEKtfRnYQR33D5TuC5K5hmmDpLB3GDVzAiHQ"
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
