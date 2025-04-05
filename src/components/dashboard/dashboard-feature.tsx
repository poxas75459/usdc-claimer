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
    "ptXE6tzZABwEANKDLk1g38zC4bFz2oL3hXXoeqNqpoySt2bJ9dGCkh6USHDRCc3xtRmdFycvXqxXMpwRBJVtB66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zr6w1aKCxcENcGeXBJkczf2APwc4Bz2Abq6aEkGQRGWjXwUJFecCJoeYdw5jG6LxcEWNzTmFRmwUAW8ERvcJiFJ",
  "key1": "2hVkZ1F49YWexP5szinYbV6SvM6ENfSoggbHZ66FCicd72oakFWk9sup2REL1eKyWK7dVWiXt2S3JYoFSvWqyWXh",
  "key2": "16bdpxjkKHdaysnS267qxah4on12HrMLdXtLndhjTPf29GASGix8Q1MRsfUnLWumkzDy6ix8sPVq9HMiVHMr1FK",
  "key3": "iWCxMjZJuEXJSHaNX98MwG7dYSpquaA6esrMb7X6sbzjSmpTfDAwnvuKWThyKLtxbUMLEmQsTpEcH7kgLQaweWA",
  "key4": "KJXQtLHBwYKajUFC2YF7V8VwAdYZTuREYPshYZ3tkL3AjjMTUHY5U1vroPLSxZtC7SzP7FTJ6iHyBxnU1kNFWWc",
  "key5": "4kyWTHqUHhcCYiv5hr7SR2276gcJyFWdEnbgeaTRUWyCgBFBLsjLNsgtLUBdpJvWfAmXQU8ccQ8NRpJk5jy96dDt",
  "key6": "26ta8CTDzJ6bMfP3YQ1GrtzwLiz7csuavP1hMtwneXGeMK1QvRCfHRXoCMrYBWqVbkptWn9fYsuBMY5bsxBmZadu",
  "key7": "QcdKkyHjWDYfx6SiikAEt8aGcN25NVmSFMikdmtDEwZTkMjb6KovgMym1Na2DLD5tnvVXkBS9o3SNY4MGNgYu1A",
  "key8": "4jhi4bikwXfuXQdxoahT1wk1GRjT7KSbDXnsDUu5vttaFKUFMD12HCiRwrR9k8jMXyWKUDXL8fzqXxCpujpcmqXQ",
  "key9": "3UsP5jfPvffqQPuGSaod73s1ZR925kY2ZH9BEmU7nFV8fzeU2e2pLFhU2Y1gSL9NAJuggFF8vK9xVBp84Bjp848z",
  "key10": "5dVeSyKofUGtCeCoh3cERYYLrJ3cEeFYcqdiLG7KJhhcDM6pWSnWd515r32J91TCmfXT7JX5SF99YxJqGyUPXDHd",
  "key11": "5fsPqEtY7F7XZZG7CvBEV6GSXMygK1tiRmqWedz5DwgVfCEGu6vchpgxYfDwu9mF55EDTgH8gPx5CNKMsEnnmBRa",
  "key12": "3oEojSTyNP2eXGQdStd9wDdKCs85AhFYyQJ8TqrE8PpmXZPwqGDwsAW6eNniWvZKx5TZmJNDgA5A8bTy77vEyVXe",
  "key13": "4TyFh1KiTPhgwoxo5uT8B8UCJFHJMRF6w454cXbADbYeESWXSWPBYbwKvn1LXueX53zHray9RJLLvgduVVVvm4R7",
  "key14": "122wZquM9iGP225rL7SwAYaPzaNU4SWjy6ALX3Gw5wReyAxP4Yvd6SkaRgWM2xmHThMqtP8KE8yL5n2zcEgF9vgG",
  "key15": "3L6BRvmpLAKs3NDxb5CYi9EyWasTiQdazXBLXTGoziFhC2HpnywvrFBnMqC3nijJeBQEGheeKayRf6BBBqAPfPmd",
  "key16": "2VwhhH4hYq3XdmMjLbhDoJ8Z1kYp6PijzKqJ4obCXux8q5XoT1Z1JrGwPafTg1HigSTp2u3aXQm3fTYxp5iHqCcJ",
  "key17": "67TcXdhJ2oiT2rgaHY5KXpq3uJ9a4NrTrY4bvgSw4ddbuENHqAqzANVxxZsfaS44encMssuiv87YQxMxpVJmLCfj",
  "key18": "31eGnHrczfM2M3j6R23wtVQDHDugTKh4n6swruD2hhmggtSNgPF3q2Yh1os3TeTPrwhT3NPVX65ZJ2NqRevdDc9U",
  "key19": "WHaWPMSUQN1QLrghpvGeBmeMj1ZxN7oExv8gmWUX4LmcVNRTxvz9dsknNvsVruCkpZC5UvXa9cAULFp9tNtN74Q",
  "key20": "5LbMoz4X2zgtww5ZZynbyi3SRtwnpA1GXroyYWQXC2cUooHqHTcN78qtuYouwsjCV29awnpRJvZjF3aEKWBTY5nx",
  "key21": "3bjYvNbER3tqKu9TxQQN1n2MoTBHgCAmFbQ4y7JaXM6k4kYNHBUmrW5GHnE5fhK9ArEhjDXLyGqjcLzujkaE5Y86",
  "key22": "48ZAKU3aUKmbvbn9761EWDFsem4iRMTsFy2PxDvAdXaXpZQXgAteVB7Ai8trgTkGC3enVQvS3AwM9o6Md6M5Sg5Y",
  "key23": "54D5NBd8Tvnq54PQ11fxHQirt4XP32C5t8hT1UEJ3at8FwmpYh9zHfNt12bBVt18AjPUzjXjcEYpDxDEJrQYnwfe",
  "key24": "hLqWjTRrv3jWDB3hxLRHcCKsiubQLpumGPihaJsG6DSUeAPgasom2kxyCDDrGc5HWm9WHb4bjakKCjHhLyY5U25",
  "key25": "noJuYG5DVCJThGPB8pRY62PHiNEA9W3hZphmKxBXszskAFvRx5frmMuZEFYzACgKvXmQM7HxnMUq1betNA7Cauf",
  "key26": "2Vgdu4KqwHUprVCC8aYjc4osEnEt5Fk8vaygKX3aozw9Ae9EantHtkaVAxiEhP6De6xqEVknmq2we2ZJ5RaJSTmv",
  "key27": "36voWZhZjcpWRLtkeMdhCbdZ8PBvhhPdyVnFUhyGHsxYuLCyEFY71kUV1eXTRTKChVhvZAwRrgBTP3NKoRDbVh1p",
  "key28": "2rTKFqqo9qXuKvxBJD6Yjmbgtw49QHqjackNrBbCtC6YCuNARRENeYUVvYtVzR1sx1CVaCSSNgNSm6N92jnY5vhF",
  "key29": "3iCCEfVF2g7vX4pB72Q9wnUFAUkjxeijoShuVYhpK9KnBpxbPcmtHNYJ9swkXXEuXNBbgT3rquzRPqEUHpnbwLqP",
  "key30": "5sMRUaNqfh6q3oWVYCWTSz5Sn9BCC1hReu64pc3m2tYdQKWPu6xJ3o98bgRh7YjCLgJDMUiHziSyHHvK66RMZFSr",
  "key31": "d5WYZW8dsjUgoUeWFKZZG8gcxZtPMKXYrinU6q1E6jj5ZFSb6aRHbuHaLBMxnDFWG93yj2KfgdoQseaeoe7r9wW",
  "key32": "2jmyHfWcrvUyteH6wPAdwriFiHurB3A7U99pBJEdytSDJv5yhFWmsW138LR3oBosgayb9M4DY3htK5kmaDa6h9Ey",
  "key33": "5GAs7bv7aGX5QjrypTj9Cq78XkiqURtGPnADXGJrdVgKTVhPTD94gMwRshHGnQJTdxbXfKM4HgxRaJUvUpgWhZmP"
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
