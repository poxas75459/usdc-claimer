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
    "Zts5BK9t4UmzSUhQY8XXbdTwYYDCayPgb55n5XP7pvHv89QVPu94KCUtqsKrftbuzRVqs1U3UBAyT1kacieDmum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kZJ9rznrse5dstAvgoSojV9bqndCjrejzEmEV3be6T1QhU5uUWEsX4NxvFXP7xURR4NBFm8gQr2KmaAFEx9qPB",
  "key1": "2t6Zkh539iMci6FTRdifFYQUvMbvMVZf6cbEQhzMmEAWHPaXjdGZY2YPc6cwcbTUxspEtgKjihytywVefm5KrtQ5",
  "key2": "buWgtAoM7shzrgQS9KWbNi1GMD3E82RCgWL1z6NoVAnJ3bGyTyHjFqEmoaoo9JBu6w86gxtVLgd14J2ZLQ3X1nW",
  "key3": "rYgx8cQMyNDkRqFsfMNNYBxiEubnb1ssvsCjjm2J6k9vFNmCtdebMDk66zFjHmfpRkWtL8p1zqUbaGkjXLZCaf2",
  "key4": "34uNYK9pn4zdeqJrkbiAsdyrcXzy4PWdhdEQUhTeEVwwDr2qm89MrfppX7rfk1WSy7CztTkJgW36vhmHVN2UXgDa",
  "key5": "2K7kuxXEA8zhoBZB4mtKtzTLx9nm7jFzZgbS9A2j4dDCfR9Fbv3Qbm7chwzrhdLhLUzrMp2NKZojDRbfmeTuFJgw",
  "key6": "25KTzkgynqLazNHzvxP12YD3RsLhrhNsyQJCe9cAwgAD59xWPnPJzmeppkKEPmZKDesJhqUAStxD7abEao5L3QsW",
  "key7": "3ZJfkLzNjLfUP8GBSnBAGgvAttq43XRpA7XF8G1uER3gUE1TQwCEif8fQZ9KoRHfNG1h8Z5RfwF3vboAyJJtLXHh",
  "key8": "4DkywNTgXDgpKnP2CSi4rXn3Jic82VgaxkvuW5qHLc22zvpt7nvvUH9FUAq9vPJ5PYdQop6JUnnn8Mk8rkemSpi",
  "key9": "3J5xiLzGE3C6UDC1uiDG3DJBt7WRFhVNvv7MY3A9RYnJvf2BYCTZQ5is2NYjKSfRshC6b3z35LJRb8JaL5oQLSVm",
  "key10": "2q4Ay6tcy9h7dqf9jxDB3TcyFgHVKX4P5Qtrsxd5BtL7Ge9DBoWjr6ioW8C39CyXQjGG9mcysoPTcbSWHbAhgE9d",
  "key11": "5WKXzFGTmPZodiuqWppoWc88AczoUuWDMS3qzVsRWAkYnyVvyJoprCrYoV18UYt7ks2NDv8wCAbBur2z94AxzuPJ",
  "key12": "tuWKSf2UesgL2nxEqmD4NEqxTLo3fq26eoQEXEcbNJEywAnWmrGLYZt3CeanBYGctVM99q2ftrYoDmToJCjdbdc",
  "key13": "5rVWD9amqcXwiJFAMMc3Q5jWxqqqGHXEDAAA4ZvkGc6PFFVUnhYVM18MsWVKpdzMTU8ibUpJ8Q5U9y2BnLq8giaJ",
  "key14": "4u7LWTijJPFUPE5wiNvwjJf63AKBSnd2vkvjnoPGZMe5QhqNPVNBmJtz2tUvt5LuE4P832K6FtAA5EwZPJfzYeD5",
  "key15": "4bJKfkg9vkJeYWJkReyT8HZmbmu1LuHfjMPEtW9Kt2LFmSVrfPH2GiP8T3ZQmC6tSJotH2A833UgAKkdMzgxD6fo",
  "key16": "47GABzKETcS4zirZfNaw99tZXwtoEmcQKcjaFqiQUrEVwtgq7WJvdPxc2p7hR6gfyo2bE6FzLvqKR9JV9bfqESEr",
  "key17": "2v4pDD9VqrzoQvk73P6pAhvX5bmQV9gEZ5DCWXeNvrG1XvsQiFyhDk468GzTXx8SAoP1wwEsUavTJM56ruoAby7r",
  "key18": "U7cRSkDpjZjcuLtr3H4KvhuPeZ5jpe9wbB2nmdr9S61UEwCnhJP6rbkjuFaZqRuPWpUTPzGstLJfw81Lbr3exWb",
  "key19": "2tnxxkEkeXUntufsgM82tx4W3DLGQz35wEQwW48CGNyKY5MsuZSNoSSzZSCvttJXiGaLKguFbqELqnQfSpmNN7pC",
  "key20": "2ENw8mhnovXXLRBN8WwK3qnMdoxDJiaGYA5R3CX4m4WZYhADcFJektx6rU7Pv1zZGt3mgn19CEb5dbvucu7YgPmS",
  "key21": "42SwFDojfE1TPDXrkpU3HH3dUJmJNUrW9JEWDxymE4J6sRU6p3vAWg7jQhqnfLhFRsU5Pnbq5embjthuGJVzYkvt",
  "key22": "48oSkYfKpAS69Rg7kDxPpn9eMadNsLQgFXoinvzRT32FcyDMoCPLKXGvPKRvGYhFzARZT8CkaETuGJsKL57f871k",
  "key23": "4opuSZaFRQV9qyu4FxHhhrKUxS7NEyT1PZZHkWDf4uKuPTE14Np22SqSd8KyJ6vQbQDFvdPKgkU3d1bXm6aJUB3a",
  "key24": "4GBB3XysmqigRyDovYcCKC9TaoZ4kfkgDSjKzUUrrMNHH5Jomq5iWVr44AJCPg8CABEPT5CEGXLUyfB3yQe9QtwP",
  "key25": "571Wgz9crm4DeB7BTdvK5sns38SAeyCZeeckv4Cti1Qh8TDx39j2paKzQLSXsLn96NHBgWsnxakxw8Czm97VjWuT",
  "key26": "5pEAMUb26ttP4hxpX2tkfbUriVcEhKVHdPFYRSYoqSchwxSw5USvmpBF6AF2gnqbLjiZmxSGPpU85rw9G3DLDTEq",
  "key27": "5eQL1ZCTnhBrXgUEtVQFo2huC63hupekTSxvUSXdXsDYjZt27VqcAJ7jVBJWgFWtemnV4JSaeZtsuSFS2q1eQJrd",
  "key28": "RajUtyekxrSattcNVaM9182VisZLEAvsrfFxDZ1n13utv8sEXowEAHTytKVjJtSXrka8Ms8VSkSiQEL5gtmKKCh"
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
