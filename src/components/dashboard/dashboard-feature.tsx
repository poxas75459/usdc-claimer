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
    "AFsYmXa1v5BChojMZwTreFzJBWro2KUKpDfMkxPagg61MsBDfwpa9ayCzzn61sxqSx1ZdmBVf3c4pucwJ52ibxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23mmNkLFPUTWb7AKEBSyd8Zjwcv8QCE1AfXJdes81bhX8rpEjFwX5J5HEJtyZyCWhVgRUhmvVTDnXKaDbpJ2q7Fr",
  "key1": "wzQFMe8pAReioaoLdt6BaVCzojejTSbrEy3pyDcVK9sUDFaDizPjssBgnuNr3kNsJ2HudyvkTtwFb2u1QpaHTtn",
  "key2": "3bPFrw3b8oj19g2n9kbbWKdTQTk5HCBhBTVbYeg8CgbrtVSBftkEFqpGZx5qUJpp9dW8vp9YUed3nhq4XtX25uuJ",
  "key3": "64cSHRg8vjKSHv4UwYHJjtzdzCQTrgcew3vJ4UT1FLB8VG9SQzLFjQPVKJdbbkNmpeaXUG9RY5jyL9zA39rpugyo",
  "key4": "dnMSkr8efYp9h5ZmgKLvTunZpwYPvJDHCETCHALgDNTmQSji9i4LxwBSqzwLUhmbfZrgutE1odJAUJfhxHproFi",
  "key5": "5L5wFeCigk8EZnaahD1XVumG3q2yUNkHhxNw85FCvQmg5DLuLD1jqoVXBeQnVnAKyqNnJu9vfbw561HLhfXfV2xq",
  "key6": "4zABDpfH53SEE4YRY4XPfq58F29LYbL56dErvo6ZBnyMjzThAaj755xdunEC3wCRvxwMnTkmDs4AjfPnMmJbPdK6",
  "key7": "3QzobCZiejRgwLFNdv77sJo7hjxsa5n9ucHQrHC6jxm6e1UUi8UU3YqsifE9i4EQ1CsVczh64PeMqXETJ2qgY6KN",
  "key8": "2sgrFtWHAp7wvMGB65vSwzLLYEQkxCt353kJ7nv7gHud9z8DiHaJiiargzjrBJyUpTTWVkRCHT2cR9jQXx5ycCm6",
  "key9": "qtZdc4GtLbPNSYPbkQRMzfjWtse7eyZFaiiHGv2Dj6GVxXZnApuq39M7nnZhyVxFbsSvjv1k7Hb62ZX2gjwPeMP",
  "key10": "mHugW3bcw5cKnWdkBNLVrkZSEcss2BWJcjoNZUn2pJBomN6KhiNXiaEiRH1ZjQZLfbCF2GjSraP8zmq1HVZh2tg",
  "key11": "66fgUv8trJNw6bFT2QJzFRp1A5vaeP9rKaMzC8DaqbMFDjj6GFL948GifcpiU34n2rDMBYQa7Pvh4SzFnvikN3cX",
  "key12": "Tt1wqV8haxr4Mxr3Gspm7RVzT6dxgxhhzz3GXcoKXw54RccTKqtQG69E7T1X2ZUJWYUJyonKGacxe12iWL6Yqz7",
  "key13": "3xezk35h8Hyb4xMqJsBLGg7v7z8oA69zJBRnhLNsYLeyRQXPvmN1817WVTB4WQZqUPGBkuz8jV6JupzrPCxwx8rJ",
  "key14": "4xvJEqy7PgLkmm5fEKXE7s3pXfPNYsaPm3VtDAcNFyDrjdwD9XehTPZREHsxMhEx4mwjwDmp3jXXeyyudgJLg5aN",
  "key15": "2KjbFbW9nZkrvfqF8sKcgAp7k94E4W9m5nT4wrTr1zFTikqmCBDPc12zmbKLynHdnvQwHWVqz3zvbzJ3MqDkn8cY",
  "key16": "4YXSVcuaspeLevrQz1cQMPioVM9y7Ws1MhphZJesYJ79kgxEEeMDm5vaCxsaf92cFfiRzvMMoGinNLmEkTh4HSKr",
  "key17": "4nMTVjp78CuT2aV17XNJtoviueukrNBuTFmWti8VHP7JV5b8SDqqxzKNRcXVFDWYHx7psvgrjMSTPHAJ9Lws8ooD",
  "key18": "XeErxSN9Vst3u4Zywdi5FxScFBFq9g8BrsKkJ7KMA7yye8XioJLyoNrCKahTXeTfha7dboic5hgdeEtPtTLnjjT",
  "key19": "4MUWwadiDgACZhhKwBAhuLoGhH3xe9AF6iUqbRLARW1e1uVZwiAU5fMAGnxqdSiVq1infZAG3wv5PPCJQojp5Xbf",
  "key20": "3y7xBMC2wNs6jCPKgnJYMbZz135ShkN8ujYephhoMS2yNU78umjTbyNa33mBCpzZbfrNwASoyf6wdq3TqNocpoke",
  "key21": "5VgAgaYUccL3k7hXMBpaPycs6E3fw5u5h3z9C7FWrXNzH9ppJNrWx4gyK4UZQLy9LKZiJ57Rk9bPg5Nxn4HNkJVF",
  "key22": "3JsmdEemuPaCccdxQ3dYKL1wgyQhkTFtw4bcgjkktrxVztYEz7GrfDKdq1wj61m5NX4XAAp424E5yTRdUWf1PwYn",
  "key23": "2q4njkD3etLikMnZXHE5jb3tZVADQ1TUm4hnaroLhLNZ2vnMdjTy3ob15GhqXSianfs3TyfWMu4gYgEkmnjqyhTx",
  "key24": "3dN5HZbofhn7aJpTwiLSJv8CupBzV8DkHBfHWBFqukdE7CJGTpf6Df3yW4fY342J8c5x5STP4Tfwyz36GoFu6h2U",
  "key25": "35s589E8cd9HTZvNrwbDQFeNCuDQ5Cs21eiHGoov5AdN48yif3BVbhymt26mf1BeFWpxkpCakNLHuCMWw7tik6gN"
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
