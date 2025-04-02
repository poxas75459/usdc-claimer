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
    "2yX75WDym1CGwsYTKTbzJavVQue6v4iUeaXEZEbSFCAXLuV4GWsCfVJAD3p9ocz9LmEb3AzynEujysDzBkk87o1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vj3YrVu55FhMk5YLWVynZ9UxzCAaKVGQmvaxX5EFCke8U3W1DYFyG7tSuGEHyp7SHxzv2ux49gzgfsPoaYCnSdT",
  "key1": "2aY4q3Je5qhFt8yvxUri8DTnfZj2G9BvCztfLTpbfXmkUtmcVxYiSqQKqFv2kwkEHA7RicvUFCHxAzfAngicRR3R",
  "key2": "5EQ55U5oxwS5jYsfUE18cnMRLLg4qfjLgjUEA9z5YXf6ouEyggY83cKZ5bpupEVnRrBgfb5RDBP8aCkP568noQ4Y",
  "key3": "vxEayqEq99MoeLQb8jKDz14koCyrKNB8GEL3hxY528P6Mz31Ds7jbfGt6iFc9GAqYp16TcrQHmCLPaRNcRfZzcJ",
  "key4": "5BbaCgb4PPuoBBrTrLYFPVz7Z6SpnqyUZ63RNzCHFWJXDAWFa7ZH4h2VVmMJ2y3usRGn1KAsq4NFUamMdaAhTdXB",
  "key5": "5VsA3Vg7yXZgTFXW4i4TSeU8JQLKsPpkaeKuGQZcAdgf4f2nfScSFPswDAMJFSVg5r6gcmgMZFVaMHXZguXGsFjP",
  "key6": "3rgDqtdoQ5sv6KB8mFJSqekSCEE3xXfsvWdvMgE3bX7TMrhb7cGmXvCB394iHsrJrZYe6GZs6AzfyqA9ugS3QpZn",
  "key7": "3siHHHMMJxTGBD2puTDZMqQ7kDMwTctuKZmmCsmVKsxpDWJksVUoMZmyizbM48StWmSc822UGkxW1aFnAn94eams",
  "key8": "8DMFQqqnUcJnowEfrX5wG1Gaz6ePkiS5h4VpPLdh5bjaj6FwULjEMwVXCRkVYrkZxad5B4Snspzq58UEVViXJ1N",
  "key9": "3UTmv5rfewNoMEBp53pPicD8yT5pndDh95hCBDnnyZoPsnBHTaAxJQS3Z74QfAmuaqHxaRGv16Mpdyq24wSS8x5v",
  "key10": "5u8oM6hiFYkrB6khXWdeqGvBSiYxVBu5zpdPpVqdQuvSDZNhKs6jYCxQ4KT7arFpU6QeZmeZ1uz1cki3k5ciQHBJ",
  "key11": "4ALfnH5Uq2SttJgq4SoU7siiBceE4XfWmHbYFJZ8Tnp8w9tVWqdYVMGUFCrPphenALrcc7fuVYKCNu7FpNv6DSrH",
  "key12": "4rkNGTqZY5eqjf1FnuEwpGKxxxDyexqA8MDVfByLoBHcyaU2JW6RGPnRxbTcTEbchiY9MhwLyzc581ygbSbXsmgA",
  "key13": "vRA73kndPEdKCYH7qQcfxXdrmtMETTbJfGX3x93EKPdzbUMZTX3wkvgKCn2EsncfPWDuj4JHjniv84FisZXzBv1",
  "key14": "dG3bw52f3Du5SU7ckynGuhpi23LniFHEJnuQTmEzDcZ8UkKjDqCYBC1WFN9ihVaztB8944dComLptKreQM99Si5",
  "key15": "5Z1rdgztenNUS4vX1fFgWMBGbXNWdi2qfWrLuisbjuRFHxs8e6iTp8hoCWiFSSYvPPZ7of1Kumw1Qv3CmvNLg328",
  "key16": "5hyuq95j62n35mpd9E8tpDVrKRassgomKmpHwdGKpGjALEgijiKVjUNTqoA1qksoqYYWoBCQ8C4rhxuFbnvKdFYS",
  "key17": "4hb4VPHDvrRcnLAxz1otLn1eA2N6AAKEFc99CnNyjiG5f2GB4MqXqeNj6vfbWtomgwUKfkCSpnW1NTY666ijcZEv",
  "key18": "67AgbyPzuaYNPFwAGbSsQu7oupNfRh9PhMyBR86faPPQVdNiCfhX8vQZf2nvfzgPv8BcCJ5n5MshGc65gciBFaJ9",
  "key19": "2YHBh7CVUm4LT4R2KvcUZYwYgQXsPQYBg9bF3PvZb9xnQ7p6PjQh7Kpqxc3WMDF5n5MKUeCbpesrATaZpXuJyQRa",
  "key20": "cLUkqd2UULFf9ge34kG587Sh8canMAREozcQfjQtwARTZMNdRkm8ArmzozfMR7ZiEqrHBPA6Fo4ZQuj9FxDSyeq",
  "key21": "5GWzAqxVH5F2LirxJfdSDkkYHjbyRuotSk237PHJAKKjZY8bNPVZy399eN49DuNpezAenujDvZcGK7qSBYtVG4g4",
  "key22": "3ypZrjC3PVmjViNJgHykgEo7oKTkrWVs362CQ7koGctjuPZwopQG7N8TDHfaFS86RDYuKApnozztFn5sCQH52SY4",
  "key23": "XdriZ3zLyqfpMMrvCafLUagTDn4usJnM7ednmARqdzxfva6M4taP48zKkwYhxk7p1qeDjwbrVk82Qty4264yDQ6",
  "key24": "c3ScuuY6g48EiBZsZ4y8cm7hmmUtwdTrHK3JANSzZzDri9UrvMJ3FnnV6ihJgK7e5PETMNyrFGLLVzj8fAFCB1u",
  "key25": "5HkCWQu65uC7YLqGZt6LuozUuFCW9dTdYZr9PbHmz6rgGVJh14HXrh5B28s8WqA9FrHvgDmd6jVBraCUcMYqHLRr",
  "key26": "5q81oAfpkXSYsTcmZTCaSh8eEYx8WjMfNjaqVkg3JuQLNN49KDoxwH7iqSc9HG7JjFJApKzTcLcfDxE76J9yYXis",
  "key27": "MEL9sCFRYaWzLWQefCHepGMkqjXhcdKyW6iXAUBy3vsrsTATeFjAMumG9X3L2ZLaipJ5yV1g8mnxHnCFBdNAFM8",
  "key28": "QZUNcGxJR4DqNe6ZMhzpwcgKhbJGfvPkb6LfaDvszkJrdg3vsP6sTypruVLj6jY3tqP16gHiDKBi7eiPAPDc2aX",
  "key29": "4qik4Mx7uXj8hVWsztWRjwTemJT6yGgTjEMfobBHBkHfp18nuDgbdkh9K3qUyrZEH4UfCHSfV3hjkZSkSVw6jYMD",
  "key30": "4AAksXgg2aZeWUrVBXXgC7iMp4bTQszaLj3N1L6QQ5eZrcQsrVUrE8TqEjUAN5qbXXf3MhS2u3CoXrM6rxsxdRRt",
  "key31": "3UqfRNuyih2TQqvMWfNYDFerop35evHLRhbDLfYotkyMdTzoqYCxkEXNrNuSvaTiqBzY8DvPU1SGV6o7f5wbtPAn",
  "key32": "3No82jBN7wR6KSrGWbLcLgC1BjRMzj99t9rVKQdTjWsbFPWUhiSxyz3T7AVFXeRVdkaCmzZYretLa3jpeQatRg8R",
  "key33": "3Brg3EgL7pb1cAhVvKsZvaDu3CYRLUNDC3FK7jaCsVWxoxAxf1zsLigP2KSMr5SN4oV6h4REiDFYp7xmTuD9wbC1"
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
