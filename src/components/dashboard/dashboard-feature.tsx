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
    "3CWdGzM8WSAY8gA8ZaoE4sw2rVcXYaZvXHuhQNEgfsFbwMuNFn2gbtesNwveThBxjdpqXShQ1tsQ6LA7coG8TogX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8H2KTz6tqp1Ytvt1buLVMmomvMQLJ26y8m61coY9JqhJhqWMEzFxeRrcRzHmSbLzNVdtxhKc4ueJuX67ck7zKEV",
  "key1": "PN5ATGchn1TDLw31EsvVfbWYGpYoDWkDZA6BmHp45RJ2Pn5HQsxPqS6YVAJKypbvrc23seMirGcCRpewYttghw7",
  "key2": "5LmyEnM9adpADy2Az2JY6sGbUZpMWt2rocshrFPeUjrYw7qYctqqvyrHnSjcvUJtZVpXr2mUZL6LnWHXPN9viwPQ",
  "key3": "63HE4Geexb74kinMhWBPTfwQPKkQKZ1RLTEEdD2ur86DbFWXjVN7rbhnYWa95rkeLdG3UXVRZ4osnmB6Fomz4thB",
  "key4": "5e4v6x6MHfZEM28xJfD9c6UW8QViSjWJfpA7z1mEbaqhfsgAPLN3suBKwxMTYPxWqbQdJBCFtSNKTfgv9q8wXqs7",
  "key5": "TCz5zcPbbKmV7RXpJGbaB6hT5mhZBMPje2nyb3KMAW9vVtAGbiY6bmRZhxEKNAC3SzzV2fEBSR3NKZZyvhaTW2s",
  "key6": "5VifcJoJyjL6XxmRqcECpW5kiWFr9oPYdcbG29BBWmsM95jThRXWAGreYL7fec6joaQo3ErY6EGBmARi2CCKu9KG",
  "key7": "dAwGK8n6i4aXixu7MTqTy4G35eFHmQEC2Fb2MVSu1t9CsjpiXLn3b24TP1Uz7FbEHDCmWojBhkuJHg15f61CmPB",
  "key8": "4NYMdfko8NNjTbFAvoippBy6DH8UcuTBKkDsqGzGf4Ysm2MZ1QdSpZcF12Uqxi8ZmaXPaDUfwomiqsAxX8355dtd",
  "key9": "5Shpz71YHnaMGAfVWtTig5gZYEv933SLdQUeAZijY4FnkFafheAfixtPpFs7fzkcAXdhE5BjgPckgoEtF9HY728R",
  "key10": "4DFMi6RyyjthmbZxyFt98ZSwJ993pry8pJCeKJxjHrpXWHXFB9phwCTeAE9Dvg3Hm2jCVMLKGc7RmJKTTe9QK72T",
  "key11": "D4qFX15SwmoQDFjGVAkAtmBYXnT2W5U1Uct3nZfQSSsS3xQWRWwChpCZisccMAmytJkVqarjhiuKfZtwxkBxtPF",
  "key12": "3mXjvKP2WrZyxYPzjZpWJ5nJCRNkk248Ynxs4i2jfhBuWAmsHyyReqiFEcgkYkHxzUbLLRremgMwJBTiTKyqvkHF",
  "key13": "4Nu5f7nQNxVcKnbQTo15brgoMmiNS6GUdFDtUAJC3GrivnwT2ygtfScE33MwzvG5GVJcMKG7hGjEw3buGHDVahLf",
  "key14": "527sERfF9Jv51DiNykGpM7SRcdrZJyrbvG9hGgQMLwqfS5h7mSfmMueJ944rAUgrVyGuEgZ9jRVwPbVRmbdgFeGy",
  "key15": "4MGCnbsB7NTQZGkNa6r8snkKPupzV16oTpRrA5Zud12SzgWCBABjHBs4HiuQKo2R3mThpEck2tNuViDPrHM9Y9yH",
  "key16": "TCEY1YtBCR6fSUVMEreTAKVwnYUGEyGsguSbPKeEScX9ZSbN5kwtXZ5WYpnjKNhiJYnyV2FJGGVnUUKb6VDMfGE",
  "key17": "5ji2wkbZBepB3UQqwDh3PVyicF828xdsTHejoJ7D9VNMSuR5zWyAL9jnGhoMmkTzC9LAU48AhdCPtJqSTaKJvEtL",
  "key18": "5hDTnuqn7tQvnmNC266uc6oj72hRUTdKF2TfzRwpNJdSaLJsL1yKJF46hoHdY1j3a6iACvFiggQRUEunHBZ2uyLq",
  "key19": "32yKeNxW9sddhU2TraqwXhEQmendFECrxpufEL3EZEVP7VD9i7TCETDzLbVGsNH9cWgnmY8BYQLrk5VTV4wD1UUH",
  "key20": "5bSy2CYV4upXh3HgsuLLvaHZSgJ51x6a5jcAFkvUYXJTD1Err6zuG3W8vKUoLxYuvNuEjpng4PYFnLx7Mt4rdXag",
  "key21": "2gewuULN3E9pGWyubY5ux2ktvGLw3FcFjS1GiXptAKHrp7m6GPgVJGRfR91RC1917k5hJboh7k9JP2fKtSWX58SM",
  "key22": "5saUxBsK1n5hr8dtYs9QZFig9d85JSCTX1QTogDv1r7SG5xiWmeg9XCLyDDfsnqyUARHaABuhLLdMqmoohJEBeg2",
  "key23": "5U87Lg35NTwprBmp7YJtiKL5DfJu4WHRSkCjUTHzWcPLRrBPYEBBhqPVPxrALMAmgV5RWXC7ykiKWYRiQUXGbJfP",
  "key24": "5DKf4URfdcgntizFeM86oZ6qwewckDz1AAAGwezZqRo61EsyWs3feh5zzJxiqzZjg9dfmH965jyJh4jtCA28x7Pi",
  "key25": "3RcnNEZcaV6RBg8oQ4MHd7nddndoxDCPVr3SQ9ZoZe9vt7ieDdqqRJpPAkpMyG8zVgPr9noKaQhjNz69YPcbsrhM",
  "key26": "2YHnKnuPDH26VzCyLwLbE4W5iayCFdESDoZE39vG5CgeC9xt1aCiZ5u88ReKMu6rKRQEnBJxqixKZ1QGKX5Lkz8G",
  "key27": "422uU1wWh2KUzx4bBm8EbwbgHDwkbQaHBRaiaKQMo1zPUSCPBP4VnfqKQ9qy9nXL2s6Y3ftdFCqMk4hGkf37v4pe",
  "key28": "64dWXSG4cNKBCZY97Dicy92r7hKVq1oo5TVwZ6ZUAmqRbY3udxD32CCsA9NpTtouwdqWLaJDiGfUwNgci3mGrYaD",
  "key29": "35JZy6b8N2mfTwArxGP9UGymSV5pb77fexNjXubmyG9cSJNhRKxVUVxacJ96JANfaqb8DPcriBPexj7khvTFADck",
  "key30": "5DA6pL5Tk1m39kjMnfMmDvhZiTXayVXSzMHWiPMkPMqX6XwVkAevaWDXYW86DyMFdwTVGeWRT8jt8YyfRLrsQfwG",
  "key31": "3Q9iZmwXdBTjja2iDsLGiop157sfoRD8dPKmWtDuG495ryW3Tj5Bt8Un2XtqbGTYozaPYQucn1GvJj9YHxeBvii4",
  "key32": "3NzyCZwirzSHAVhrwYvFupcbVG5iP4NegHa5DYDSrEhsttCTyCCQ49t4HCQQWmVx174QjWZ7WZcrgRCN55o2v6pT",
  "key33": "56oPzfrMynZsDZQaeMuaizTLab1tn9wtU22NoFXMAzHuxX4SLcmo3V3NacKRutbBn8c6ne95kHJGAKRSmwpJM6jx",
  "key34": "rpcCRkrRP1GLSXg1pxmBenW6oqy8DSqj3yTsd8JCDkgk3nTUgt94r2FSDXKhrgmZaTUhhtLc5MT1eVMphnGQY5B",
  "key35": "412tExDQYVCNMurU44o3e5SvZvdbAs5GHENuqGJJvzkUU4ckDm194j4B3Ka5P6EoUV2aMHNyCZhnPfvS1zxKTFNQ",
  "key36": "3ctn3GUUF5M8jpyYyn1pFtc2WzsAM6R3hhLfMHpFMxRaTLCnF7HTF87tmMdxp5wwkpZzSrZ5WjNGGN9QbrxLbP7j",
  "key37": "1h4yCKwTBA15TiVkNZ9bM1zVmVP8Z9zvmaoYzBMuCApMYFgqoXo7LDuuH8rSiYJ6c3Pfz49qfFCH5rJxq4vUvuv",
  "key38": "4yeGnwwaGicaD6bVV4WdzCmkp3bY7SvpqhAyJzhRLRWPfmkB2xMpRxyNpEymfm9L42BRbuWWanrdFY43izWdqWhA",
  "key39": "dmmsbgkb8Nft8TwzsXL4imyf4B3RZpZ3YruefLBhDNKRn1rbSer5i7jv6gqqQbhu9FiRa96Kh9jWjp9di4aYbJr",
  "key40": "5UkhGDNeYBxScJsKHsqHHx45XGrP76eMuWzRuThVpDp9i6D5dWMeuBTsbtVg8jugYaUsrGupf1w1FkqGjKTvc6o8",
  "key41": "3jXM5ZxJsnNmCQymNyNZMbyQhUU3QhQEjQaDvb6NjAdvWhCHSu8pSofua5WVXs8itZECQV9jq4RqKpfty3o4HAot",
  "key42": "5kFAr59XTc9NPjDZPe89FSiVNLxB5ryBmJDEhTf1FfmimhQB117oApn5cAxUbvhW8PvEo5Z2hAtsT1dn73Y6xzNW",
  "key43": "2W4atEKi47zCTwmVn1aMhQa95MGZdD5oBqCoBn7chu9wCNe56LaNEnY9MGSt1Yd9rs54c4LrmvyKVL9r5w3ziPrg"
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
