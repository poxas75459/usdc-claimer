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
    "5BdZ6EUtcmoF1985qnjjXqknEPaH6Z4AQWqme49GQn9YeoeLDF2wkT8C1Dy1jJiN9gxeGSfbYufNoJb3ZSwkt5wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYVHFiiea72hQku5iP3Y1zL8yQTzWuZ2EwtZYTXmpdPmxtKjNcia8SaJ2QjorDxFRquqkFqWgCRFSznmremXivt",
  "key1": "51ZY44xSiQAGC6a82cMNsuX8KNcGLwRvqr7s5aFxGJCyqg7RiLyeQoPA3zw2eu5pLz8QBZc4yFUxoF1fk7QG8j3N",
  "key2": "nobiwNBoUUnpcggoYMubHmYfgzN27dhPSu7o58zVeJkL2nwbFJhg8wjxXS2Y3eyhLEn9WkXW4o6TpHqh8B8xeAy",
  "key3": "5imAuaamvtHKQWN1iv2ck4PeE9wYtCuwct4s5Rmw4wRVgnqJ9i1CPCQfdaSKBXQuARfhUUX68SudjxFkQJV6yUTT",
  "key4": "4sqXF6MSZ2ZF2rYXA7CMbDCSemRJkorscj9XsiG46zWNoQEHEaYWu5kqdjPzBCqoy5HiG3KZdb97YTjjqAhCa7s5",
  "key5": "2Uuxb8K3h6YnDX3X193MLX6eQHNCDsKbrA2PDivubn62Co3NaKFpeEZBSTKaSV87YY5Jc4EURKH6Ys7y4xs2546m",
  "key6": "23HtJQbyxU5FsCBVf9gN12Y6ftghBdm1A1WwS5orKSq9BWsoxQdULjuEghsarX4X5eqKioFaY1sz6X36xYidqY2p",
  "key7": "4ZcrogUtGxpMCsroQKTYxqr21C4VJAJBuhg59FNDkbVZ1QtQ2bQoLAwyWjCmfztahwMZe838ZAhrJWw6yvf82mp4",
  "key8": "5GyN8iFQfffdt6VFuq2SbTZfwGR5cQGCUNNmVKRoEePKu9KqViSJvVKCdXXMjZ1Utah7rxu84UxdQYiNRMBPcqn4",
  "key9": "2jGsTsm7QVf3ytZmihrUbmuT8BQqxtorNndj75ozU48AZE19mLKUQv1Ph8k2uPXQXxMCiZpznnEnAf8XwKuETZTG",
  "key10": "217o5a13R9Zaqqt2TqMuoF5DH6qfKPAFseahy3inu8gshq8Py8CmKnTj6gue6o47Gue9J22DyEqgrwYT9fP9Fq15",
  "key11": "DxQ2CgaMcRkpETjJ4RkYLBZ8rwV7L78UYyyxySSSMt2Wdu8wQDJ2toMTKs5e45imz5uw2weGUSVoDNo6LexmgQN",
  "key12": "2mtDrMBh2WHdhUzwRvCHRoqpi22rwV4LBRfBar2mKkPP5Y97rgUWy2oxP27SbM7zBuUZYsrCrKzmGQX2NDXFQAmM",
  "key13": "qexQf5AW5Qa6oHNcEi3CDc7Vga87jtMNKXEm9kR4Qy3aYepX4dVJko8b9UxDcbTCnmr9PjdTn1ratr2k9ipnqtx",
  "key14": "5CVmcnEHJmfdoQx2NyVP9SaXkBX6NszuQFxSRHTYMUAdm3UUAGJUTN2JLDxvjz4yHRYhg6s3M387Uf5b2bW73hkW",
  "key15": "3uKSPgP5Pr6kyoTv11JS6TyVHSQUUgCKfxWhAotn8eLAcYfRhwF1xWqigu3RbcKJWASue8WspFi3NT9VPtm5RFfG",
  "key16": "2umS9vaZ5v2oaqxXJ9gCVmQQgGZxNrkQovbVekMSMvsY2sfzRYMfGu86Ytv9qjqM8qSe6zt67Yji5oH8T5KZ89UV",
  "key17": "62ne1f9GgwsBU7hJjWvRqfKJZvXk2fV5ygQYuJwcpHvaFsPKLCnh1X5XHKYG9zSNyF1VMWKxiDJz7n7uYZgdDqmo",
  "key18": "49tv26qBJUmdjKdF5b4KqmPEVwMxUfq6BwQEcaTDSimrgGGY63XGtMinwMaEit5Jt7X5iCbU9zKjECD2JsiQkfnw",
  "key19": "2gtFmMwphsQ8hzTnMBdq87APbjzsQhW59jrCZpXZnZSMqozipnNC7j15EVfSg4MEWVmBGojwUZjJizzy8dpoLkN8",
  "key20": "gZ1oZnAvkvYbTZ5cTejqW5CgafsPS5Z9oYi5cHS1nxL9F82Kb7JTfyawDWNBLrfQPCKxPowC15WRnWWkGVetfPG",
  "key21": "3e3GnQearTipD6zCM4Xx12QtaSpvXeK1Czunzo9KEWHERLDCmXMoKotMWfV4ysHboh5rJNVR6kn5GJggJ6CxwrrS",
  "key22": "22FQXG4SeBgDfBPYiTgXcHgFkfmnrxCikFhRs6DLQvqnEH484qoWHZb26AynQKLUPyNKFJ6rgvD5MyQZhuLxLwAf",
  "key23": "4rei8Sdask1NGKaqc9YpCYdqrNy9ehwUSmmEaJ5VJKXySUQK9tTw1s5NameYoip39aRszEaAWUiX4CwvH2qqgHeq",
  "key24": "33rKgAuk9aXLSr6DcaNtyXcV5ewsZDmzzd24Mwqyt16FF54LoENbAGTuY9oE8hxpKETAjY7M9o61ahknBB3X6qTC",
  "key25": "oetmSK5Dcd9iXcLUNhVeQd8TVHyJwswRFeryxzvSTpV1XZEGYVMndsiUG8o1ZpdatQPH8eb2NkXJwi7uZ5zU8cg",
  "key26": "4amVwUC2x8P2BesZbARxowxwxYX9nkuRnNU499nt9rWW8Ff1fPidsCWEHM1SKvVBBzqRXmwaQHd3oazYbmtjAUL3",
  "key27": "25boqnzzN1VBwmj7taiZH4ma8eSDbf24xfJKjmfzagGfY8NMMTUG6upFKe8cNpcppNqrV1Gk51ZYhzWrFgzkhFGo",
  "key28": "5QMEQZsgRwHg2cEuDFnkCjSmEJavT7D6qFbGearHnmTV9ijemkKTcVpsRpaGduweZpU3NLKv38kjju9eoUH18qnE",
  "key29": "2yqjGhgyaxfbjhwR6ji5ci4Gp5TWQHRzzBTF5U9fBTJjgAtdxpFVPdJKoTCcKTPj5nMgLLeL1JeTCH1MUPk7pF4w",
  "key30": "qwKm2MCpeNNyGzPFwSzx2PwPXHfQER4QcUZVRDXUd9xYK6RcQusWvUxBMjMYdJZcjNjMAYNi3BKS9TvGdeiRoP8",
  "key31": "5QetN8LXUvGZfRxQwZS3jnci3KjVLcTtMixD3fawfaCQRaRY7baSo89hjtAWuswWXb5WUgTio2sNxASqYmeNcydp",
  "key32": "4jWwwsaEiHx8pKs2cGC1NjCGEn7QYFPQWj1pJ4UVZJtpr3bnk72JNE35z8c3SFzKEDcaH4AJiS3wG7JSnSxrw9Ec",
  "key33": "5bb5SYo1UoDkC3gW5H5v1fXzHJo1dRSALBZTiUnsmv9kz8Qm1Pac8xfEisWDRcx3pGBy6u3aMLUftS8MyjwLDCZs",
  "key34": "41W1bKNTwwC9tZUiryy7rzxfob6uVEK2QsF1n1KTH7U4hjcCkGguagbErHggJuC7ZGMvLC2yhPuH1ka6oMUGiUGc",
  "key35": "4wcwfkisbp2f6WRSo5W7wt7FiBKFGXEEMpmVdpYVr9ifgDPCYSC7LzKsTrYWpEC3qHBBRcN3pxoHuViMJgGMtuCD",
  "key36": "2AQCgsq4Fk4QsrQXYLZmzvnJA7GQ8oPxJnSPsBDip8Go3gs8sCwSmiziWiNVLxk4f6dKD3zBEpcwhx78XQKWGRB2"
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
