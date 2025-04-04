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
    "5AuFFPQm1teaNDXgftw8BsXcqfXjajW9L8x1BJWwqdBJks8zomUGuDo9MZK7S6JsvJVbxXT9ae1MCLz3x9TYGXTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqFMSJM76WuQ9Lz1zo4ymf6TbgBDmu6y51M6F8jeUgLSAWjugvDYqg2rzWqWAEketfeEejChDTaN9XFZGYpBsEa",
  "key1": "47ARNHWPs8eLgr424pXkN4X23Xu4GikFyqyENwT8Xv1t74iVyguDdbM7GRmfM2JmqkgqRDsxXTmqZQK2zpm6BQ6Q",
  "key2": "24bW2aKLsqKaUyP71ifbpzEFB1whnzGcuTKLeZbxiXxKJ54GAdW1om8fwbntY6UH5WerW2gxmq48XuvHKUUvzMGX",
  "key3": "4B9negS61CVp3oZds3J9iCmdDrpTKgpQbR7FncyNSp6mEf5bDwnXvNLgNDioJwKN6FSKm2XHWPwEAaFNjnsX1J7",
  "key4": "5yxu8mEbcrZQ1ExuD6nZyoGuhHdTS6tFBAPTWADxhzz5aJzWT6SYnzxr52yVREnXYJFZJrPEB9zRgGtJPCsAmXsp",
  "key5": "2nZiYXH7JW7b4LHjXGjXqaBiEYzTpJFjwvVZu26HbSdB2u5TAJqN1mWfGj9zu7BvAWDcxceF8C7J3r4v4RDKdeta",
  "key6": "3BjMe8GwLBq3767AknUduCB5oezjXRL3WLeqjSn2zDJdBBEvvDAKq2cAZLNTAkRRMTNCf4iKn8fHTFa44Y2BJdiy",
  "key7": "B2gVLkjzF3QrXzzhEYqRJg3d9b4VjPSZ4HvxHW1guz2E8w9hGLoGgQ3g2trF1hvFfgcbWjs4oCoXhPvsV5Jiaiq",
  "key8": "4hkDKFrZkg3ueUdbgYoChyBbSyLvz3JNTUoHE82AEfz4ERZBFcevAJxHE1yRFVbjPFH1ACLziAyY6TScVywivf44",
  "key9": "4MA7jorgAKGZevzWs9xcbuVhidLa79Uy9tUSmkWfdubkrM16Z7KyNFqWrcZzi4Ya4zcBhwjkRR9ov9rGJxHaE97L",
  "key10": "4FKgbGdMQbAboiu1PUSJxGPjwCCoXigqWtZa6uEsdTAhnVFgZVTpnSQyvVk1SavvUsGqFGxjL6wfbq8qxbTSyi6W",
  "key11": "5JWcL1EwSdUnhCDPYsBzwSWGHnVg5KbLi6ahY1JPrcYrUJGEFBP9rGDwuBbNbW8Ws6avQsqKPVnyavgo39wTHnEi",
  "key12": "39stkg7WhVQZBrCVHcajBxtfHoskhCGttrYBDHDriMmaSpAuWDKB16j6eppMo1L81W5MhJ7rPNAoTiX9TQ7USZ8g",
  "key13": "56ePihd8xygi8wN4Nx1h36j4J5sKm67MPDdp4VnEKWqwDNTyDUVQWTFEJgygohSR4WLPgY52z7Ap329wqm6ZkBmP",
  "key14": "5hcrrGAfj3tckxrmrEMk3xp4racn1RKGGTKZvLGhinwHgMWdWCErkXF18SWT3w5qvRGbQiC7nKCLUy7UnBqArJxN",
  "key15": "2cwpm9HkRLhQwqwLGXNTcvqebMXnfZS2vMrsCfeTuRjK4THstkyWxCPc4gVdkZiLG8YQ9kNZ8NdcecLVkrjmhrnP",
  "key16": "39RB2eWNz5ujNrJw4iuMBeu6eKqXbajzv8vjtxqb7BS3rsCyytRoCu5cVpxF8bLmGmLWjW2AmcjEDxijSSsgiAzS",
  "key17": "2BWtfAk25ASuFJj38czoJSKLnadYU4XgP4aXPa5Sd3JxsRp6Y8z3Qwy9wUa46JtPRTyzMfZpM3mjqpKHLAdApQxy",
  "key18": "5VGqGDvCJ1TWqHg7mcTmnzoxhVNmZEn6sJNWq7jwHJHne9dCmFqWFZmcoAWZaLBqNZj5ti562NyJqbFa6zbL3HkM",
  "key19": "5cDWezknVdbEbw2WbmC1jTywhf2kZaZcU9hpTQUph9ZQySaLUzgyMoLQsEM3EsNpCvDXV5ELM253q5oQG7FzJVWK",
  "key20": "5mR9gotpiv6uzAp76S2nNrwBdQ51nP4LCerus4jAJQP8jre4ffe1FkzKyhEGLnGxwHdYG3PFHMXNU2SDHfhKTrKK",
  "key21": "3Fd39LdGr8SaBhfzKhBJC9pVum6y52KqTA7vQWAzx4x9pcXVtEUViXcqeKAhgM1z27F77HpZrhKbpeS8YCK9mVyq",
  "key22": "yBzdpbqt3UScmkGig2qbZ5A9oFVpctSigA7iSm9HhG2HidTiFDG1xHkk8zHw2JFJSVkN6ivRxydKzXGAUikw9NC",
  "key23": "b9vAVBuQLGRRivxMZaH1mSHpdfij5HGn8w5UuMKgJpfLG9WhB1XtuRXvAMvpog3NJiqunKXk5VguFvT39SpD4Ee",
  "key24": "4huuzXAraNtogiSxyK6V681exq1KWrsaxkSeJKNN872h8QB8SHPGaPxocLqS79QuUWaBgYtykp6pF25PmZuv4rz8",
  "key25": "4ssNGqH4JchSk2u6ZLWqm5pYtzEwvcaSAyVR5JS676UzhtFnCeSFLrXA5sLtSh7JVHbJn3G8ztHE8FPFsXquEw7E",
  "key26": "JmzxTyfGQYtE91emWxS5BuXQAfajpf6afXHAjKBuuLvYxAWJoLDPc3uLDLqnYxjrWRnPU2s4irFJ6xZSwM26hdw",
  "key27": "r5fq6Ywbg35vRyL7b46r4pvPRvbyVsGENAhqCNfRrEuXRRCMY2Ld6c6hZADSszNHYyYfd84zL4psRLocNSkgQ6P",
  "key28": "2QwSTGtRedmMKyPWmjxd9J4qEBpnwUuLfS6Twy9Me6TM1KMBjKDUqwZxYMCbut1KhPZpBWWsLsd1PypB5ECf7Hux",
  "key29": "5Zue38KzDxv3nRjgRtybDEzb4dLL2r394HNgg6WfYhHccUJppixxqwEPprSeXYnKCUorq8DbGJxtszSjPHP27weJ",
  "key30": "4ZeyRHwyMLFUBR14e5U478q6kXotss88VLmS6G4sFJzhvY1wZQhoTboJx1A6t1gmBoTzaoQhBfakrrn7cojnrUqX",
  "key31": "4ZmALZkcxxu5R1jYVo9hi5mDfLtuypU8rZptiPT2drCn5ozXATGYWJqjGPR5e7tjh4swo2Cgrb63eGCZR66Nz3Pg",
  "key32": "4UPrMsn9xge3iaRkbrPQGtDfNYeC35YcEVfLpmQcMiJa2dtj4XfjdFaes4ccmbU33GoD7eSYuRzWddJ346526fzg",
  "key33": "3jkrnyUmog4zTDewfhNYYiu4AVFAJWNzhXrPCi9LM8iJ8Hm959cfa7G6pw7zxv5A3hBawSUKDEdMcKV8thoWFYa5",
  "key34": "5Njc5gfYz8Y1EiVX3wtMqEKDzSaeZbYQbNXr6iXdyNg46tiFg68YvtYu8goRZL5dv9MFadidDLuKg8uwDQcwHsZE",
  "key35": "3dZJv22YK78rr3mkZgGNsg5p9c63r6GkE3CcBhu5CfkVWzTAepxGQJ4ynzTiKCLQwYfm3nrMvpbPBhhmBJNvTSMF",
  "key36": "vdkGuzUN5BitJcowzzz5rdvejWPsGmC3JQjHQaqGx5xr22seq6FPrtZP42bzTH7iHjpGEyB3WKyJw3P24FwcJup",
  "key37": "2zC11wJjSkkQwvbf3u6vHmcUJ7314MFcGDfemgo4tZzRjame3p1p6WSGDhKYanCtiRhUJXRDwZYGmQWUq4TfHe5Y",
  "key38": "4URSwupoDwmBgiPqyJamsM9HDw99W8it6SKq183ywJBxdz8tPyChfPSgVKVGcAXZUrBgFEDXfMWuoSz64wyYa7hi",
  "key39": "Fptkko1mP8AL47HrJVGBL8p2M9B2tCkYp5Lee5PPGRdX217B8nYbq2MPo6z9xwNz6s4myGnFMUHZLCgWUTyWkjj",
  "key40": "2eaDXKUWfc2qexRxzPbp7sPDVpLh88jZsd6NnBAfXGtz6EiubsMSpuHLmGL7HiAWsaDRnYc82dAWuFnQbTRVvXRw",
  "key41": "34nEZ19PUmgCahyEFuoQcLysjyLYJscGAog47PeHUjK288EVw7cPBVLviHSjuePZmJzomUpFv8jiDaLkGFUD6gE3",
  "key42": "4UV82vcZE4Yq6hy1kFzgYkxgENAfxitcahn68xP2c49V5wXtQUsoX9reB76QonMkvYhS7j4dvCCZt42S6yNaYfwr",
  "key43": "yEVD2PZ2RXkmgy3dt1QTizXZjoFXz5Hue3V8iLSX3bXUkkirE5gpinqEPBTqLni35tzD3QXM2wZsWryTcvAZfDK",
  "key44": "2yhyaidfLmbxVFvk23dVzaSBr567sSbf3fHGKDjnVjcvt22j74ya1fkQ5tucPkyyCAUejzZvv3WWsWg6aJtfswpt"
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
