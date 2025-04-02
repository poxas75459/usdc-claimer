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
    "KR6RtRvd9vCxSheqP9c36VbmfA8Wcm4QCWcB5Sr225DXAZxt1fUxULEsed9f7GdG6jXLmJ2WAQzKZqjkykesamW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zn26yQAuC95HK1mtdsr7TFzzrYsFk5UxCUkcNggpijT5vKX7mJUkXVxKZ63BvefN9E38XqzymQpw3YhZnLCWM7L",
  "key1": "57fmxYRBDxeyZdH7JfJEuoUJGRoZXMnH7Z9fCXAJMJ7FKme5Fj28F4sqcNfHTBMVH99Wke2sk9sYDGQHNUKxtGLF",
  "key2": "4dH5J3HH1uXkagTDRLA9n1RoLXraKEPLp5bDyJZ51Uzonm7AGzUCEDekAkQ8NsoziPLiu586AnDCf1h61zfHaa3t",
  "key3": "tK9GazXLFqAtRfe83qW9fbfy5V95gTS9knKmHKrpKWCarejLuXVTgF4R5v6PYsJhWHfCiYdHUYeyBaWnRowMhkk",
  "key4": "4S8gp13a76ke1ZTfLHLmb3U1631wurQs5NyCcDuLe7fzyVDDGKTbznWp3r1Mvo9z2hviKht4k47mRhLTGsqwncZQ",
  "key5": "3AXej3dbTpwJ5x95BnzJexLePbC4F21qnAn4okqY7WEWeBMmKhRhJjpDpoCwPv4EiHD8x9GrNPWTjGD2GxEMc1Ws",
  "key6": "KKYV6oGj7h4yvbgLasVg22251eRpwuXg52xCz8L8X2oV35JPqEuWmMu41a7a8qkJ7KFF4CA9XeTRdwSMqrzomPV",
  "key7": "RAL57ogWs6WzfdjxqqkH5sLNDhhMeHAUvF5MrAH1FYzKrA9A3eVayzBN7gmTLQhGL4EpGfWQdSED7KBcty9JksW",
  "key8": "5pxgFWBh5EyGGYAGsAEwsHavCkB9BCSvKNPe2QYj8pT5jnWfbgYXX2XDKqpDw7ShsurStexXfTeJbPpiCuQdgZA2",
  "key9": "4zeAxX1ACqDNinQvu9ufpCJvSVbVLsJ3jhgJMisn3WEXetThAovpYDn8to7NfP2AKB1JbP4yxTBUJ2HdpRyTPCkT",
  "key10": "2jrF4pHAMjszG7z5xrda6DSX5okVmEiSYwZuUse2BycN9NwLq6mRKhSpKfbf4HcfqDrvCdwWMwWf11PKALfxpi2R",
  "key11": "3BFsNbBfbNACZ4uG3y4evEVPAyPP8RZuz6rdkPf7LkDW6ktDjGA65e7WR9a8uUdzKD2ppc3gSt1myMV2VviRyRio",
  "key12": "4MbVrQpXC5PF9HhFyjmiGHfHTyML3PxxMY95uJF3uKQbf63UtfyeU1guLymLFMykM3RDJ75G9R125uAViKfRbhti",
  "key13": "2Wpta1znxJ7sSAEHSEvsqJSKUzemWpBdXT79QANzmouubRLmyj1MFFGfFiUfS7zPuAsUGLWZ9XPXt8dxa3tT1X8K",
  "key14": "3jxzfuxxjBRYx1W9cFq9wdyVSuac4qHAvQetwEwUqiTw64JYUnx8vrBuVuuSPxqjH4RsuMXGtPk58tSq1iq6uH1h",
  "key15": "3K7tt1K2g4pQKZTvnmBUVnbhbgB9ioa2mux1Z7XkBSUHWru2UgvNcwsynANKS94DN1JYdaxpqJdVPh2BiKxinqjc",
  "key16": "4VgB1ypTQaDtwMwtuQQjpsqNeWnB1wN4bRt5sorY1Ynngum4sRoffqg4VjUe8HBc5qg5oRmE1b3EhgtcvXzwuVcY",
  "key17": "4U8fSug6uoih2GAAuHTKF3ct7axtqsCFnJV9w8gtuFysjHF3nWRKeirVtUBAJetpZw82fDodWKHAbGzyynFR4qmp",
  "key18": "4SihSE89EFzEPen6F2oyi7rbjesUGr4ydmVNNiyrWpdupDGkWCabEM5vmXamRjYeiRiXgx1iYcBWqgTVoVjk1EaZ",
  "key19": "Vh3GXJ8wAf9hwsQPLT2dmtUFQTjgpbUthnijX7h1pGcjAajgdxCfB9RvSdxEwVGT6BZnAkbLYyCfPidgmBGEQUd",
  "key20": "4JmJvVXMYsRcgLtVJxfHirgvhepbkBYbuvzVa4qvA4UpThSWRHh54rnckqXw9DU52EznB6zM8R2UXRuVwNakf1GS",
  "key21": "3q9T4fij7DvehAKG5jrEDGvQoJywaAb7xbPztdjvYp8dyLoMSGsuazzGin3Cny8zJPqR7oWNLuhxwYEAUduPaWoV",
  "key22": "5ntXKpWxaMQL8dhEBzdAxGz1THi89TMohs3sESAipfeo1Vebe9g7zoX9HxiDfiY7ud72mAPPn9h9rKWms8DL3pR6",
  "key23": "5zHK8WgmFZ6LQspjWb54ZbDKUuf6t2CQ1Q1rFYoUJQf88w2pCcHujEzwJ7m3qyGtw4HRNDhg7P42Qigoou5vc3E",
  "key24": "4aatyZodPK7BxywC22P6XaF1Nfz5bj3x2LNv27gZESndxZEwX9tgz5DCRNTM1zk68Qf4HKPbt2KZEFhHymHCegry",
  "key25": "5wAKf8uc3LzgeDYXm5h2Ro2KC2hgWm7EsR73dMaqKjHWa4o6fRYCNwMQyu48aMNbsrqrwpJ8DutKMn545QDYhUqv",
  "key26": "i6DrYCN4fb1LK91cwmKc8bJKTqENMVFvBmdfwQzQgJ7Sba4R6emzfrDr1BpsBVc7EyF27WVsvKJcLEPPnJ285hh",
  "key27": "2k7rg5bTkdUDNt1QXW6WhPwFwauJ3vAiQn5d29Pn6Qrbg8bPyE8dtu4muMFn6SX3cAf1m5jgfN5R8rhQtTegmA8C",
  "key28": "3XXVdVW8Ubkq8AjnUshkc4Nc7ZTLNEwV6gMXSVZgVE24vgRn5CtmgTQQ95FCVak51n8aBX1iC6Ex6doL7YPMAq5y",
  "key29": "d6Tj8ffBpAbtcC5MkzsxL1SevDWzbwivBfWihmzHSi2JCX2bPvEWvgYS4DdcGwAuD1yoqrSVB9EvS58DKYkKUuJ",
  "key30": "3D2jhSNxWRfusF8iQhaNPj4GbvBFAtBdcrMYTCyqZzS2sJMEphK5UrB4cJN6igVg6NkEiY4xPpYK6V8gfn5Sqy5Y",
  "key31": "3VyUMo8mGLnSMgc1q2Q6bK2gVxrT4A2tGxz2UJBtLs4Av61qHpCy9sWJhWusbJmUnjyTzgtBF4WWgg5cx1VaWfF5",
  "key32": "2NMsyE1u7391AccYg64x6Utnk5w5qdZNznLEiuyfeuWFedjHZCd9u4QVZe4ArQtn69GV7JeEPdQNjDJ8ahCwceHa",
  "key33": "4BnC8nxtRRkX3HHbuL3Jww9qqXzaqbbpH9euER3fVaa9qVMhyUXgfSHbLmV6rhpe23buNMNpeVPYZpTfqPW1QXor",
  "key34": "ttqaZKzyewqEgyJsjFgnvCCzuzCGdRvNbzMmUqNTivVCVcwuvk3eEbAGGcwDMFizk7iB5i7xHxpGzEpZrcYrnqU",
  "key35": "4jrKWPwZGTwECNEkBXBchcsTKEd51Tq4PxKUBUQfxE6fgLw2Qcb4ePkwG7uTHPUydKB3vNBb62uZ8EmqXtv7NZzq",
  "key36": "3x6ocJQMRXDqQzpa1tyRkpx3gvK37jsp1ey2AE2qWZbtnrnnJ3vwTiobQJsMYjVbCynWxtFNqPA77Pi7W9oELuVP",
  "key37": "3EeqbsYYkd59XBovwGJ67PamsqfLMTZWJ6YdTqzDuWnPjtx1eFYFtCQgaJT95TGki6DGXP8DTsW5xF1qEy7qHjmH",
  "key38": "3Mpj1sPRzJtz3oeQ7LGmx1ypE96qdFDkXXnjwwyfBr5vkiamc134z3Z27TjEcFEpC2gdhWKTRP4Fggf6FpB6HpWd",
  "key39": "3mQ9ipbNcRuo3XDfe7jXwwwcte5WbMj3Am7KsT38tNrivzVQq9YMK5W8vQNYbUB2QnhLrM5ufZdtYdcWKhCiJtwt",
  "key40": "3d2eyGwTRua9kcpgDzURkyHEUnMoi4FcK5zwBigLB3DTdA2D5nh5YnJ628AyTGSb28aBasfy7KNq2cSNMAsPtTTR",
  "key41": "4RewZbn3yBvmncgSfTLTL9b2HB9DbWH7cP3yqn6kCwQvrpUu6r6e7q8kLDGu1sreqqRi7DvgFdy5kAtezWSMZFTb",
  "key42": "4ZK3xFfTGwkxqHeyeA7uYhSbjqdJnZGXgihZpoAg5HrzHfcMccdCWRLZxLZDARGxg7F2DwtqnFumTj9pxcmg74ny",
  "key43": "HNZD6KpeWymgwAJKCyLMSKCJeqAm6WiB2JbS5YgYjT6E6Ygc6gU52YGVt2bJ9KxKuLuGGYD9xiq92dGso5honyg",
  "key44": "QAMrbCK1PoM9Xv9VmqHiHuePycXMuQJWxPvsSsGJAEvRTeXimtf2riVU6mNwgQcRqsi6w48WgYN6Q1BW8q6aDcS",
  "key45": "3pZTF3s7g7X77c98VYbvRuaHhhY2dFbXxP4SnZprup9EQgGKJMXgovJuxdoER2YVYDYc2RDUq9yaVdJazTHWociW",
  "key46": "4GPrUT3PZTYX9kxKMzHnKbJGPkPV5zDkPDim27iRsnn13KHDbA7NQWdU4rLBke8X2krwJbcMdR9tinjGD3QBf5B2"
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
