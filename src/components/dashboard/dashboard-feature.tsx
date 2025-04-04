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
    "4fdzBds87afn3kpZKWMZawJGMAdMyTCNjRdcrtsWuYpJ5Cn23vKtS57x1ETSJX8jKHDyVHMfdqtqeFeZNCS5wpuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7w4YxopyRKU5VHqtGQNttgPMMh8BVQsaGdjfeGwZy1XHY6c354nP8VYAu4dP4csMEW41hzYGgB5S65F2mUgHXk",
  "key1": "2mr4AB5rWFmLSu2AzCxpoEVxboBBx6qsJHJGLFZWhhKC5zvmfbHgoBKinqhPa5PRYRdVrUVwUJSHt7MWiae5Q6gK",
  "key2": "5QdKrgG3SpkWvSQwQ6smxZ43vNWLVVv5iJWnGVQsKDpgWnphUCxWHQcoG93ReHydVbD7kxEhTETbMw33qti5GQXe",
  "key3": "2xd9DwpjGH6TYqNEZc6RZ6vNF3MZrtF6Q4EAHHtzjLQnSEmMVuDJcKsBG2F8JdqY4Xf4StG1dz1jyr13pS6rsK2J",
  "key4": "2GrP3EdQnhKgvw4MZGSn4Xn5sesno9FZT3WsxrsXxp9pD7zz5itGTz1Bcu3yWN29Hr9tocFRpDMKHY3GDMJdY9Ke",
  "key5": "53e2Aw3B8NY4koqTDvvaZ9breuTAN3pEhD8jB2r2SJYfXWcSG71AqzPtw2BfRGWdy6uBE9HbD2zMJyDC2yR2siRY",
  "key6": "4tMYMKYAxW43FMcbtPdP8fURc5q6U7WgnJqpb8E2ULBQc5wCq988tyPtKV37TZuHNYZZBnJ26L7y3VGjRmYhyVus",
  "key7": "5e7a9wPA8ugjEAzekwyE4wXUxLE8fmPdMkTKUwKyz7vrKdncfXJxfvUqV4jjQBY1oQqN9bKBnmi1oJzawPFLdu6a",
  "key8": "2uZn4RWC85BizUuy5iqJfEebRgQVJZFqRBEiVadGxRN1xPLZow45UAqChvuuMfnfWgKEdkbyv63MavUybJwHBKeN",
  "key9": "52dY26fxbzgnLkhfNUeXegAmkSCnSr8X5uXgYZcvYLwCZkkczejgho3ZYLAtXjzgVnGDJ5LVqr9NN58z125H6KHz",
  "key10": "4bcUCmSGQc6imj6KLrk5ArxtaYNV2vwcW9cc1ddSMq3VoCX3Yv23UEWmtmP6g5ngJRih36AVs9c1njsoT9UuJL2s",
  "key11": "3s4La5H9KEW4b5Sdi2K5wgfyLwMQsFnh5uRWAuvup6jfiM2D9RWPYHDThgzxJV3To6KCqUPUQRozDwwTJGgajdYA",
  "key12": "5viwB6djGE1sP7U212KFEpHthz3nZ7ep5JhTLWgeX1eu1MtraXRtDYijNC24eNwkYXaNwNYofbMu4xFh7JQiuEsX",
  "key13": "3Mp5jbeASVU6zrcBf7pHtzpC77pXg5jskYE9BLXTA3tU2yJz6zcDsy89JU6abxnKE8n8DhHnSt75hxeoos1dmqM5",
  "key14": "45JguUi3qug4KGaFrxVvNETi7jXkfSV8ykbEifYHyAofv5UgB24eyJPnTHp7hTgxeCT5ygWSsCec1J37uyK2ettp",
  "key15": "BXNMgWh1cWzrPgL2QL6kgsJ3pACEtCQKH9nheuZvmdcpqg8uauC7s6fVEGD2ZRVQeV6YDxtvN8wJAgRUPvx3bzx",
  "key16": "6JuYeWSgZMwd3uSwcuajLJYftEb9tkj73GJFMacadhUGaZdFSUmU3RFf1dnuC5oCz3kCUKf7hFKG6HDFLgP2Kpb",
  "key17": "5E821d2wDyXi2HMsc6CMvHpyiSqPPZ3PhZcq3CaugMj2eAw5WxHEXiNnbUtfzTroFbZw29UCpEygRvbwQNYEiVTd",
  "key18": "2KGQWSN4FooAHLHA8CTcdCxjzPyScujTy9Vs16ZN2CKgYGzZA4by1wQSS7xp6ERYyQxYQz4biXGn6DkNZf2oFjaX",
  "key19": "Rc3hxH5HBGrbZmVGnNqATH43KA2CN8hxrq3KBXBJwhTLPnVhwFZ1dkWHU4QvTboUmZMni7R3nvvoqHeBMSoMoPV",
  "key20": "24uXz8o8LcQgz3iZA2WFgbBoYbGNjxGtwkyEDvsvdTXon5RFnQksbDUs2cmndFBFJiCEm232VSxaWdp5fx8AmtA5",
  "key21": "2827yfTq3s56s4EEShoUHdezkJFRV1HkzyccPqCjY6yBBHKBQdZba3WqyvV92rkgsXR2BEaPr5H8j8xtw2rzN5sg",
  "key22": "QyBs8FfEu7bgF39DVgvCXZLTzgJyc9JSXZBR1nrZhWEk8gyDkNVDJttZEwnjqTjSdsHdLwa89uVjcZJmf1QJxSM",
  "key23": "2fxW4jKibb3zeiN6rPQ7VcdMuoYGwQZnhRWN5Tvd6Q5sjrrZaKKjHkfS7T6UMAR1eC1HxNiberJ1caRSgZ4CAAUD",
  "key24": "5RNpbVbkU7ub27dScpw44GAiZyUTMx8f4vNGmeUMVD1Nf8BbJM6xUzgdDEDvmhyLsFfPd2U1AZM5b9CRu8kNUupB",
  "key25": "D86EZnwwDYBv92i3WkB1KUdtzbb1csyt8chs2HK26fXyhsurYd7NABXcGPbZvJNQtKEa2QyeUzkmJvMvjiPrKzx",
  "key26": "3N92cFSLfw8MPMQbm2TqiNAJtzcEYybiQEq3uU7fUx1WWvi4vBHTyLhKSscDX6SbobVZxzzHwfcEVqVAaU9guztE",
  "key27": "L82horxbTBBQ6Th8LLH97LZ5Lx5yrryE7aCrq4YNLU2ACEjivyowLuuZdaSdyr45B7NEnbJMzrNYLCdWzsvfv77",
  "key28": "3FQK1Jqeik31W8LwL16KiYCzfWJcw2fqf84QyQPz7HiqrZPvSNA1Esv69DW3z7dwefEzkb9UFH3QW4Cn4DacVLe2",
  "key29": "3d9DtqLFAThwnUibXDCPZTPp1RmgYocY1GmCCoFHJHp9HEqXHfFn7iakSg4jkmBb3frafrrKBizveLdT3u1g51go",
  "key30": "3JoPEwYJruZg1fRgFsiiKHnSXXVXnYDskNYEtRekEGb32g63CKinRmMvujTCcwmFvAr2M2hBmdNtVZrMKQRqBeus",
  "key31": "dMcEMTjcMhSsmcCAUcrxKtvTZdDcQjkUcWMGbLmiFy42sZXWbPv5M4GNju3EdHxE5fQXTvym6r2D9JNC8cDTQPm",
  "key32": "5vpcnnpHAHypNhTGaVU1TtND7TYzemzPzx1Ssd3bjMzRjtJV41UpbTNzW4CcCbNwwdSqTnCsoG8eDze9wrxcws4x",
  "key33": "5Z7uufP7mWrDv7LXeCoPrtFK7DcinUxGvuJbrorjKpSc3NyJkVAiVssrDDVeNwC74SvExXAev8qkxfr1nm7oNgA3",
  "key34": "22d7ZfJHUBPJwstjhg2ous8gC9jsDAmo5Koc89wBeoDKciNrtchkW4Gp3hPm2813eBn7DVaeuCVas7etPajc7vWK",
  "key35": "8iXpUsFhPDpDohx69qXou5YtrQ6biMCPFpG3pqp1vKyhCj2gPSauF1NLDDbiiU2QDghcbXGChuiRzwJgVY9gtmL",
  "key36": "3GSiPwzcSJsspNpUnoxDa6ixPzEHpmkBx84DyTGsbgBxizzofTr3wY3V5KquVodzXWkkAFBgxCAVDxStxRnu1Ft",
  "key37": "55DuW7Pnv7EYCvNz8ACaLpN7E66KiCjtJv9sSDFVfoQqgTKf2vSSArTgE66iKWCxeBAcDQaN6JF62qzJWGwthf59",
  "key38": "5R9HKJLesjVfK5YCrtyjcWv7g4gG4DEiQjseFyHuERUzujR3daFRsBeAY1znEyjwcC6WBA1pUd1SbLA2QuR2SGw3",
  "key39": "5HTxuBAXTSE1inrvk6USqChDMrGuY7SUsxDqhqgAk8zpxLRRMVcc3dsaD4jfvriGf2Fe2TfThzedeK54P292JV4e",
  "key40": "5DZ8MDubvLaWUffwqoAdQJ6MN8Nksu4sPwE4DuPtjJzyKc7yFzbQdy2r7Y1ANrDFEDXuHVnvfdodxp8a8HU513hx",
  "key41": "4gbRX9P18E3ZQfawdrxAJ7SJARPVoSqcA6i4syxFd3qzWkenrzLS73qng5UVHTsBTSsm8pr3iLZYL8DFp51Qzk3f",
  "key42": "2hYx7KtwCStZfFt2yfgrrpTo6HwfGxWYsV8k766WHfsX8XzjHK7MwJx8eAzjBRxivvLPouupMiGpyvGATgYCpYdq",
  "key43": "RynrfHfky3Ff6C1dWqE7HRcyiW7MEpxbZ4YKrR13pxLkga1E1tRcYd2fRzE7tzoKXzoVPnus4cu7AfV2vSp9g2J",
  "key44": "3oidNjd9h3EBujVVW6W69j2VyKt3BDgh3N6CzaYBwfa88j1ZWnVnmKnGP9kJm4Rs5WTyhCkzchbL6QGQwvrLGCf2",
  "key45": "3eo3S7S6AqpodZxxKt3i4AXFwvVHke4XRbMBo7RUD7wN9p37HNDscwouqBzf8qU8sL7uTF9fxEHNCnYUNnjaHnjF",
  "key46": "9YesmhqTQugKCzTdJbcBzoWy2JsngXoYE6AY277H7dmNqjTh94tcnSQm8F37DDd3nY79hVHSKNyhEtNhcGZ1H8H",
  "key47": "nBapxM5i1vxjx79KZACi3zWSYQqKXpH2b6fYVjjbaZH3Ebb4HzWCbiMvRWCzgLuRYWgebuMZGcZqe6vud4joS25",
  "key48": "5ubXa2M3EmvhoBmL5wxobDpWSnv6x1J8xgBFUpjT9Z38USPYhjC7hcuGbg64qwP8mzZNBJGbuV7DeZg84N4i1chL",
  "key49": "3NXNRckRBuKqQ7F4HZ7u1WFvFyoaSFwQWC5BD8tdRjiAzP6efEEVTbCEz2nQpZS5sFCnPhat4axFcNankvdQ3pS1"
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
