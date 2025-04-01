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
    "3KAr6L5PWuBJeRCkjM1Z6kSK1RC9gdAazyvsg9hS99sBFwGS5FktZVBUTqdMJfSLGptTnymQgyD6rrNufwYF4woi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W762Jd5og9Ajtq3KTNMPKQkyHvnpYn55BNSZETr8jac8STHApYCSVRQvCscRqwjbMTUyToPQJKZVVUh8xZuMWqA",
  "key1": "YDYVgyXQqqE7rJARs4W6X6kVFopvgJR4gvDeg6DUWBcydAiquY4HJVCqcXc9SzvGggjFRUTE9agdQ8hFeDTepjM",
  "key2": "83mCHFsVwFAVybdWz1bTqCsjstVKqyR7a5ey2TmJsyeuF5Sw4qCbM3HjfGG9M41WNST9c5qXA6e182Y8dGM9KNs",
  "key3": "Z9W7i6zFjxovcMJkDNmwtcgVmesxF12H9zLjhGPZVxXyBDfc4k93JFT4tsFDFnPAuVbwwvtnVcjKTJvfLAd3p5b",
  "key4": "3kBDKwjcyCPirEJ9GCeQimt3NzrtUNeTZvufkBCWZwuSxCdPtQfZAUf8iHvobr5wwZRdPYMdB4vUi5UjVM3P3Ysj",
  "key5": "4AH51ZLxemj16ELHykeLrauMydysaqZY85NThHF5XmTpQbq5bqVWsAPhCCQzN9nwPLAT1DVrwhmdGD1KEj6FEDFR",
  "key6": "3NuyDgCCQhSwhPzo4y73yb9GCoUSwrkndi43vfqNMVv6nVjjzAjxFEZmqpfoCs5R2j6d32YD3F3Ydj4aGNEfP98Y",
  "key7": "3TCrF7PDMa9VktvSaSTVueDn4auT3uKHivyt8vgaDw9PhG74h675TBg9gxDpXCdZdFzFowV5tDoXjdy3jr4y2jhr",
  "key8": "2iCULBQFWaQ5h91TkLbW2AVz37pkYLdAm5vNWERcgqtxoFA535DCQeKTBjsgduzYbxGktXtB7b4GQ5ZPg7G2Ww6t",
  "key9": "5Xu6BAH1BRnRpFKko8fc9LuUi48WKMYRA85YRgGQPRSAdwCGyY82p7WrArqCySbYDFqkjQrL5QQyhrs5i5qEFVk6",
  "key10": "45avKqTsLu2Tys9GSGis8NtkJvSLQVEP1R74GFer3K9fNKgcacEKKuS46Q54eDTeA2Ho5UFmFNGfMWjGRhEczRSk",
  "key11": "73pX9qLnk8hMwi2UAcqFLiPy5Tu4DAMex51HREckjSvNdrjvEGaPUxo28cnVa5DYy1t7XzDZCCV3F7nGQzgh2h6",
  "key12": "5grURMRojpcp1TcTUt2CY9iRY5cPAQsJwNRdooowA6dSwavfxSWy9Ahn3sYt48p4jfnPUo1DwrFKh21mSsb3BBFo",
  "key13": "zVExuNEfFwLQnGTNkWVM6fPUu1eFoPevvEizxv5jtjchCfTcYUtEnc1hyU8oxUVwTVrJasfZ78izRXn5aZghzwv",
  "key14": "2jQbWzxKYAEveKnj8jchpJh8vJpDWG6USDMdiTe5B9xRYRFjLoEqtd8jZVrSb8WKVjE4YgYjsfzasbSjhGixee8h",
  "key15": "2WuzUrsuBWfZMZRDNDYmRSwS9NUUR8mzV42fbP4oE5cGRm8uugxGCGJmn36cAkkRsG8ondQar9fsSoeNhvSFRnL",
  "key16": "2J1Bs8LY42gGdrenYJ87DCMbbqzZtY6UbMhdBAxtF7feA2UH413V1AwJVA2dUKbwtCSRCVyZW8uMt7uB7oKtcrJo",
  "key17": "3ducCAcZ73AV7DVLraNf42qXcCw6wy7bt8h6zvvpjYMGiLxJfoZxXTZ3MFojDuft3aqxSLgwXuBJjp2BdGf6srPs",
  "key18": "2nZLoRo3YKuGpATKr3zUEubKASMWZxQxcd5jQJrXEnABG3DUwmPZ8mCGwmeDub6nySyw6aoQPCivc8svRYXUSDaK",
  "key19": "oMT7MworBTPCnxMQJgfDvRU1qHLx7uk7kBVzaGrqqCJ3cFchc9RsDPVcHabG384Cmmpbcwo5t8ZyEwYfTnWZVwc",
  "key20": "4yoVcZfdGYToHBwrCaLsx9KwyrnZ3oCWUWpU1Pyy4AVQAWMvc9G5Ma6pBLgCKDa3pTpsu8CgEopJHpsS758SnVjv",
  "key21": "5J47dxpAMko6BMEDzkFWL1yHpKZgunkrWR7vm8GFsfVRkxs9CMzmtg5B5ZKwbwiWVC1Nfa6ZwaEzPySyU1gpdZNk",
  "key22": "67Xhow7zwSmByekQVhXLwS53uMNjwMvQ3degBvzMB8A1uiTx911YJcW3nNwSUGt2cGH69yUhNxHeJENJCXhjBcNj",
  "key23": "nBAyajv2RQDhY5UEb85GDajdcDGmrx1RdM3diXLJVvNHj3zJA5zYJUqwpGWkgkM7eBW4XvkiDJJRsh1XpuuDdwW",
  "key24": "3ZGrudFA8gm6WmXk5QVwVMR9y9kjf5g3HwJVeUSbecdwQQfEDchZqka5A7dkTKXb2LCdENMxRbcoZsFAk24rmNnw",
  "key25": "56mRBPZ95im7sVSD66A76FXeYxeHfKMwbE6ieXbAzqMcdSYVprPGva7jqshy3h7387Dg7V3B989pNcv4Zqk5JrZi",
  "key26": "3GrnsNpmPgpUuK1Bk2CTAGxLrFJDktg2PKJ441S1e7gNenAa7nBWAEXwQer3xDrmLQReQAdEV3EksDKrQpMxJrLP",
  "key27": "64aHY96MPrtJMJ92kHumyh41q4TPwurf5qeiPtTyfaSGK2TUnq8PF4TbrrVhiR1ziq9jtKo7iYTXsPcJaEQHDcBJ",
  "key28": "3PqSpxmQZfT9HoEuM2ozxmf3M29uDCjWLUX2SFddqmnGxVhxvi2AxB5F1nrPAD8F7N2RUZyc21HAv6UnV5CFPAXJ",
  "key29": "gTGM6XK4cRX89KgcqXzP5HUwEbenGEf3Rjq9E58ffk5zBWDHinCzu4SdvUFQH7WZSyhn7YEc2W7dwyn8o2QJhuL",
  "key30": "56zZeiWG52BfENxFzRFMSG5fqmhJyJX1VmbHGCfu2HN89xuSBjYGq3BpvXh81BkiPirY48a8DnawHer4QQ65gZBX",
  "key31": "4Jg58WknvY2gN86ZnwndPcyak9ag971WBq8GmgCVwsm3AUh5dCnGEKgAXze9bKir5fBi64MYRZENZdXTHYAbJRN3",
  "key32": "47hXG6yk9vZyJZ48j3Jki1S2wT7Dc5MMqFWTAcKxXuxh9eX1pLR55z2YujZF4mQLEkxBAJvekdsbpj7A6nPqp7yU",
  "key33": "24KfV8wRqBpnzxcFBvcXqZ6xeaHJ1HF6W627WYF9pAKytc4fFko81QyYm82qinbeq5UsFWiF765oVcx2DKUUs2pT",
  "key34": "4samaT2P7G5abkNM2U4mxzLWiQXpPBJfUZo39crvcjcbLDsv1mTToTWvkzHXqnQf5wMCtLwATzNLJAQBSVB5istD",
  "key35": "3VBq9pc8Zu8fbAa64w2PDqzHujt19WCSD52pqx93ESafzq22vAQ5binPjetBvpwoXy7uXEcBtxtGjxmKsJHM9ZS5",
  "key36": "4aEP6wxvwFFXWckSJEwHSb6j9QmuK29Awg8aU386u3ydQA7nf3Wv6eYHtsWNgGDA2JqYmDwXjoGyAptsZw2UsraS",
  "key37": "22CZbmTf5qURT5FyLDHkjS9TCTqVyfg2fW1et7XqDziGwTq2vFoPqAgekP1xFFw5TwuP3eNpXC66vtEHAL4DsARy",
  "key38": "eKdrVWvGX5facRXCqVUdHrfkMZ6gmsfnhBduD3i1Kip39FMoETJLEUdeerVguAKsBYYm6uW6VRFSz38hFBSSdAM",
  "key39": "5cLA22w5JGGXizqMHKp2BP8nYDFp1AsfWdsuVy5at5kBG5wD3XBmoyosaGbb7sfeP9wTc8Pi4SsiyJ6kr5BeDB6Z",
  "key40": "3uY4TBXnf17SRjsWBXp35WNbWbEFnY4fjKSyuqhMU6KYEv7AnmWraCRNU8YuGm7wbJFY4zB2mkNWULyPe2UR8n5h",
  "key41": "2hdsRk4M2N8UUctBvrth2mPz1LhKvDPrJAbRRNGHWMejyJaSAq6YpczSWdd4uwBUqXUC2zTrSdoMafenTaHS1Rod",
  "key42": "3KsfS6YhPUD7y2cYswmxVy4ysZCD2j6Xc9gEYakXbJF4cmTwMPfgpAJNyLFw67Cg47wYBJYJeMLB8FCiPZVyhGDn",
  "key43": "5bEpsqUbA9vacmwDTArSZgvLggKpNGumV9ByTDNT1Prgd8JseuT6cxSiL3VF3k8sszQ5eAw5E3nCtB99EVZJ498Z",
  "key44": "iGJrKavwe3Y8KUpYkaL6D2MpM62d3ReZtLWHLKfL78egZmNiJFNKuogy2f4MH88kgsyxBEQhjM6q5yMpSjsanTH",
  "key45": "4pzB5viBYm55XFaHEW6jNCurtRpLf6crrShoNrpPEBDFiVCfWKwfxWgU5QQfQNZJteWV5QyqaYmFZ96CjrJpaSKH",
  "key46": "2fxfpRL8hg4NY8ws7JYhDjUmmBZEWcZ7fxKjxguUQTkGsp4EYJFoqZTgtSrXxt5Amv3xXg9jahJToJp9dERn6kEH",
  "key47": "Hv4K6pHZ49CL96gjDSihrrCFmGpZsHP9crzKAY3xvAareDkxVS9o629paLW3rRqwrdv5Eq1pZguPh4aTEdmvPyk"
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
