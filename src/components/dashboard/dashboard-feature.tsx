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
    "5XAHKq8uxxNpLPgdTTu6YydovA9znTRCDt4bLDCDERbdHbEL4LF3Bpbetm4A6CkwPnV749g672nxzaopZ3EfHChX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRndVtuCQnJ9NYc7zVh5hAooy1CjSKYwN6pN3EjHubMhEHt8FL2J46Ur2qPSWJqLQe6YXwr9Xg6rdturzcM6eJy",
  "key1": "2yVZGhZAiyxuLhVcATinDPDPX7WXxrKiGhnKDuc7ZmLutJWJ9vgUbeKZbXSMHFwq144MYDQr7Fenh5HL1iUAttPP",
  "key2": "M9aPinV5UPPyLUac3zWFSxHAhy5YmKAeZKLacH9UG7ifxi717FaVgpmabHXCtDCxMGnH8pHQFHLbJ87B1XP4r6V",
  "key3": "2MfuhqrgPNocJSa1WXAUQTd4SNaswYnhM4TbFBcxESJbDqLB9hAZjmu3GvBnVv9N2qscWXWg3maqXDZqrgannxeC",
  "key4": "32Fek6jrwyoUWvGRE8yiBavPPAUaqEz1QNxNMg69uWqJT22j6nQxZsP9AhuXRzD3xxfPoLeYVisZBois2RuiEzrM",
  "key5": "At3rxgL4rY3dsSeXnehmAUeYazn9YfLrEJbBgtadYHoENFFUd5M5UaEoaxobR1cAz5ntmt8f5R9EqGyaUAehg7Q",
  "key6": "FFbHWLsD3tAyWcxCWzeJ6jWZxVHS9cqqMEF1JaQxmoSFYsPwQtb6MnYVtndz1yWU82c9mSWmp4WMn6izqfAQPqk",
  "key7": "2mKviD7vqrc67QwDGHtEkpYSXrEAyLQo6omg4z9qEYtWtQbqdFSGtLxwq9LbezE2au7SCidxG17n5hGmejuYB6VJ",
  "key8": "9fqoKCMkvpyqVAAAZJGWPmUgSTzrmRhnZfnFHKNummmg3x2e6DEXhVSYfe1jW61qgxTiiLwG1Y1tF2DQu2vLXeT",
  "key9": "1Y2WLABT1vWsWbBZCSVfUdE4S62DXkkh3TVJpXZwzVey8Y5j6ZqGBm6Nn2E6DVyQVfx2CS88q2CcwUShaNvkysL",
  "key10": "43XdKRHrswpexi4HWPTTScmxAfygdTMPvsnURvRHpwSYEVxx6McpgkQBHAPhoj9PHQueiT8WEbwvu7hZpBowSGC2",
  "key11": "3KQ7m6DaQw76Vbtzs4YarcscTMbLcqHpGGJz8GmhEc22zpq8A7Htj8asgxGx3RSGffUpWwkLaS7XSGFnkDCpHiai",
  "key12": "4Q3ukZH188SwB1w5MLyNPQfKn2X8LFSwGZWX1r7x2xkQ7stpbKWGNKdRBhV2EomnF5W8JqjBFoKBLFnrnN7FWeu4",
  "key13": "3whTTcUNjAkZsnJhgkyuaK1B8UXNcySCWUVdyYuqWWrN9fPmhbvZnHbHvfnnHFKkeMAosdAc6rnrYUkzNLUeHDu6",
  "key14": "EwwnW3HeD7oqsV1uZ8kQvXFUmRRtH1XY7rWHNV3cMqPST2BZLXWqnkyDPDvmvoyVuz3RCEgLctpbeHaYEy8w751",
  "key15": "3rLPwt2Fp3hyAztyVMRZ83F8ER9NRVa2z5YuFktPZ9Q2jdE46wRf6UFRebu4KH5d5bqF2t6qomip48Sg6bCCW44N",
  "key16": "48JS93hMGApUP6kpbUYJ36g6aQrWRpBhPKbZkARU3newoP3pKNTA7PGABPUm1AEYN1XQKi8Pxs4L5M8etZrV7bnG",
  "key17": "kv4n7cVDiwVe7smrKb1NmS6JBmVnUbs82dcEuJ4Mx1nWyEVzv18m7MWv7s5y62xG4WMwDPj2rRBja7X38GVcvtH",
  "key18": "2wsNgHMfhHNaP6a1BY6dmQxBM7YieDXbSdY9bDvFsYJV9UCqJq8j4WJb4NeensMhUA9LGf456azmjU9MJ4Y8cxXE",
  "key19": "43t1HGZ3cFHRZTTUwXCCDJMuUXjeMNEXzCUXGd6tJg5gEfeuNE3dECfeJmThuMsCphc8DZKGBj5brg9H5RRddqD",
  "key20": "N3VWCjR7knudzAeXmMhX1yfrMX91gUa6imS3yXeSFnDbdEAttQVgCfgd4nxwTPLmdDtiHFnkJnzPwERnJoqDshM",
  "key21": "KFJXP8hqo7e8G4KJFSiFwJBRUyAF7uCbVdsqvgQLCt5tNUova4DZMMT2C9jj7wjd2BeVQMMDTZhWnZFEXyarVmL",
  "key22": "4nYa2bKguJZ1kU9fJArWAeS3zog2g3HXAhDxnVoW4xMKf2RoWdN2FTY6AucsXhhde1oymH5mEJwZMuRH8gi5QWkj",
  "key23": "4GUCuebHwrVptfWz9L9j7HSVAjdLHHpCadq37vcwfVubAyL1xzAkY9gCrBSyuvEZcPNRjgdqVsPqHYL2xmVj7Fe8",
  "key24": "5hhc5LYZmKBhzAHzJsUCD6ATzTgfpQVLoY2kBEpgx7uW4hYPaSVkYRuznyHMJD3oGjwU4N5KuXCyY1eXiNasUmKq",
  "key25": "386KAByHDQkDuDE5BVo5HVNquubNS7XZG9VsBocbLBnXQd4mVEvEXxhoej8ep4eKAGRhEjHDqNeQoVunSWDFzY4r",
  "key26": "62n6tWBCbbpvJbcupX1GayFE8xfYRYGfAKuBbztQnEJ6ysHTKr3QqXKee4gHszSuc2JcH9y6H1pd7vDez5TWs4gh",
  "key27": "2vkq5fZfsQtR49AzRAK7DJB2ePsPEvD8L6MM9WKekQXDkqDR4A4SGvptcpWKfmAgmHBEMEqKH3bVRroVM1G1pkNz",
  "key28": "62a9SWrYBCua9HgGNS7W4Jvu55vhQUpgKsooosfBf4Tg1LqfXt3tBwNTkVusX36v1LyNkicTg4X3voL3GkWAizCS",
  "key29": "8AZrD6NK3YkG4avjSnk24mYrnNDr3J55qmjyD4ZTCeyepXQJd7KsfDxZTY5c6HuaNiejsZQYZ8ZrmVNGnFDwBgM",
  "key30": "tfhyDR6TQkm218S45oi4SbJpbdZHRSDpmyX1Stq1UnsWkySZcfCe1F16jAurXciEnejXwFkuTFvH6UmKejk51qS",
  "key31": "3UW7vERGY6TemEXtmihagVB4GLsDbCUCf9Zb9jyRr3HP6osrrPwD6VZjchp8MFhavvddQZEvck6LNbJ6zH9wrLQ6",
  "key32": "4XTVL433S2kMQ8xCBdEzeTeGMZWTi2G5CLczPTRhD2de7QGK2hWoCRyxpsPLhHuyYSYRyopjxxTZYEE4EWynvsD6",
  "key33": "z7xwyn8C2Qte62HhER3UUSDobTofKqTQCdpNznYYJcQrhqnFgrLMnyqBxRLd2BDRTUvQr7C4jrohZAvzCqe2FUR",
  "key34": "4hjxZiubnrrzCQTzF5nEqMMV1J1df7o4Josyrun9tyqzoJnNabuqCnjcYtsWdhtayynvv54AX2hRs1yBXbNe6tVo",
  "key35": "hp2aia5fjsMQCA7NL4PL6fDnmf2hWGifhab3yApfVrYs9bFEhXxWaKT2EZkA6uS5YCENzwnK3291GKtc1Jznfe5",
  "key36": "31ibNv7f3KsUs2S8JxgrkcrJCzgNWmCQ4wNkatZYiQXLvRSym8yWkzbGkA7oUiTnyDeUjXnV3HTfja7C9EsWMmNV",
  "key37": "2N7PG5FnygjDfFVJs4fQ3thN7FA3eTYqhC4xRoBEZgXAAL6J2DSoaiMiMZYPXQs96w2g8wRJSgRrduXUtaEFbhHY",
  "key38": "2itCeLa71KL8ncAEWuHjWEPUfQtzjkZhaVU4KWUbBFZJnR6NWEu1XSNGXrnmM4RLp3U7M3TtpHMu38QdAHgWR97f",
  "key39": "2RE8r3fhBc6niTGtBJdxsmZoqwRXZRxFtxasaMpRCDBzMefXSCmBNNBvxWZNDzVEc4jwDxgQSVQoQRBSnjDmgk5g",
  "key40": "4aRirErKpy8fR539Xr2LjV1mJQDLgehLxuZXqmev8Mmz5dvLukx19A999LkLinP6qRuwQV4DkrKx8Aa4y6mHdh7A",
  "key41": "2ieM956uDVwbd3fo2QpaKrwkgxeXu8yXmw5Ktxm1jmQ6a9msdEm9comAEXoMvdHjBbuAMAjUnAHmtNTTBf97Aj9W",
  "key42": "3oPr28hsysQUJTpy5siS5L1z14g9v5sd2H4ru4CVB3WTNvvvQe4YUDvpxJ6a3HJ2aUQX98CD1pKNGkKSdmGoo8tS",
  "key43": "4BfeXSbtr4fruQRGBjWGW8wSEB2jaDmh47ByaRi3Rq92C5avr59AqyRZKZTubCQSVzqb76RpujdkJF9XBLGiAUf6"
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
