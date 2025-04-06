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
    "4yoRBBjNFi2GXgpqCuPfZ6dCsMW79AxppRi5ijZ1u6sKhTFXw11n9iYpDMzzrVCToj3V8KYLqtjBpfut63s21PzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuhw2dcBRjzHLrHGp9kKtn9AWqFQdTmQ5vceyQZuHspVnRJpRGLypUqeeoSgTeEadUFVA5LRC1WunghX5Ytig5t",
  "key1": "3iYAyys6q3MCae7fXR9WJJKDmNBBiiDcs33TaLgmBRznT5CEoZtSHsmxaRpswZaRJWW2g7Mbx4oqDJq74rGGkWQs",
  "key2": "3myEjJejfSzC3y4LfU4BpY4swBCEKYD3VKwfRAxq1mn6nAueEdq7sqVsQxf27p2nbMzSusWEj98jXRtj1E3R8YGy",
  "key3": "65prU3NmmS3B4Doa2RCucgocy9htTCqdzYLi9hFrr7N4de1tAY4Bk1oUM9YW5wU6hgdpnaqfVvzBSq4zwmPeyn4a",
  "key4": "42gMWwrWKcWQcbxyaY1eB8QDrcz3BV5a8ZA4NoHJrmsePeJoLWT6kQWfinrBdRLmnybnpNaH5JpSiwsAJYCC4DuH",
  "key5": "mw6MisR8F6hthr4FzsyjudEhwtG83CyJmDoFHJnLb6me4E7J47cTWBqhbqubaACvTGKPZJto7KjfXjwUVdzc7eA",
  "key6": "c37CiekwrTzMZwT5KLHHZWtsf9fyrDQ4AqE62oe4S3qLygQD1VGXV81fiEe5iPDCBwLpWRzG3XUzFiVsqmkDeGc",
  "key7": "3jU34UbZ3knoB7GhE4p4mESTs8AHgCCxNvZhnMx6yA19dvP8XU2uEs9aaKeX6EKK4vVDoL8Z92ZaE78yUxthXyHF",
  "key8": "3SyVsUKDAjsda45DFG9JnysqoY1zzrzNqZekBjAGt3ykG6CYbtxCe4yZks5bEes9s6PSZdnnfGwKYtsvxAF63PCE",
  "key9": "aR5NFReSu3Pf3egK9a3mWmk5eQpTu3UkDp1CpGYB68V3V1KwSRwVay2FRe7EbufEwxs3tjBaJLrLaswvpx2Ce1i",
  "key10": "5CpUhUW49uzWawdtuaH75sM6w82e7i3tbLf5c3ZQ8LgzGvZnHmhFHMeHrKCYk6Tgvmmb1jX3dHCUDMXxWmFYetZK",
  "key11": "yJcPmsXyUK65WoR4TKPKiDGeqT5QyRKc8XCjhwB74znAdzMUuiEPuXoX4dmVZExS4K3WXjgXowX9opSpYBatWGv",
  "key12": "3ujykxzCFzdJ11HYxcShZsN8DYQdTyYB9xvNXN2MccWQgQvjo8p3Zmpbg4CUe3NnaLF8ZoTp9Hm1LdbQDDzvYSav",
  "key13": "2rVBAWhZudnUZHhGLXuTxzTRwLc333eeSMa4DGBx9sNz8NFK1fGJ3cwjKS2M1bwe26o9Xxivg7FbfJbt1bi1goPN",
  "key14": "RsGuAN6SLDSCXfkjazkmhGKkBS6eg3ii4M9sdzw2QqzZcmVP1EYRuUCL3xLjCkhvqwH8jbGrBuCEURfhpnNeMNC",
  "key15": "5kQGwKniaGiQAGmpz53tj9hXkaaUcNuQFSFRMYdrJscrNXZU6Y7zHZQivSouYkzJzLMfo8R8JrW1DFjXnN4BwdQB",
  "key16": "4gGxc1XkwLujmfHoyiSVUKqws6nm7UMdrSnRjZxLCHwCGzLa7pNDGSRpcznYrWvTvTdLWvdiGHSSr3GESwsykMef",
  "key17": "5siu4JJv6AUk6cy9JfmiApy1SB9BAzMpoQfCdLGxRgivey1KDjHF4t6K6i8YiQEHvrGioEj2MjbYuU1RW7PFwuQT",
  "key18": "5AMbW9veYtCp7W9XdLUibP87Ux36DohVpz3QyRgDiztfZxBqkTus469sucJWNNs2WdfGjQ2Xw3NrBaMYdMbv2YrS",
  "key19": "4HcwxatmFnLLXB2TfZsC6oma7BEdNK1kMWosBmLcbx3umTdfTo94ckmns1pRc1tCQoZ1ccE1He2PAuL6LxsKAWBA",
  "key20": "5Tq6njBGb6pCzo2vuUoJjd6DXuTNVYYEnDyLxNVxeuwFff42WSkHosLmkkYmowEKtfRYzgF5gJHonKPzjAtxhPSv",
  "key21": "3zGTMYw85ukSguDr4KNmkcVEHFAX6GdpvX6SL1xf56R9VU5o4RnRCnzYZwbRntoAh9QDPeLKkLycZgdzV4Ug3wGP",
  "key22": "2FMj2WoSSJuFiT5nD2LAeDvir2bKgNnaVGZXz7Rhiqjkhs7pPaaLm9S3vXhBA3GNpz54dJn62cLkUabnnaAigevD",
  "key23": "2TNhS4ZAZcW7zcvyES4QcBSNBLegQweGig42CSudctXEjfVaS85HYBG58LqN151hnL4VejHKk9TjtctgQzXgfw8M",
  "key24": "5bx8htboEC594fUXp6XqJM6EJTwtQpjrvBdNGuyPZyufw4EpX2wuVd6zBMoVMqpFJbKeMeQ2awnsrucdFhJ3XpRE",
  "key25": "5BmKTyLE488hEvxJJadpzJpaSmiazaAsEpNjyEW3vsMepTUnd3UmYnGpF81dUTsSvnj3T83p2Afk8QnEA7MbwodR",
  "key26": "5h1284TJaC7QuLHya1TRqH2WhXLN5G6dMSJkrsFdX5yJgSpfyRwBaw4CZFTzkiuaP6TBXpj35kiYbvpHVeH8nfz8",
  "key27": "24LqRvMfyYWZ23USRK3LPZ2v2rJ4q7wcucV21P6G66BEN558SA7jWo6jzBAKtzbEE4yvT3aY8B7myFLt2PeoVhKU",
  "key28": "38LJNX9zCnjVwUGyw9G6TDyUriZhZf2X6LLQ9KXKUhan6qaEXbB4a9YE6FXp66hqSwBisH1WiBnTEZULgyyaKe4z",
  "key29": "28bYUaVTTz2fQxzru1hKg4cpoFTwgHVFs5bTcRnDniV9x5TZi7Wx3NqYTFgUVEgxkcPtfn2R3U5hCBNiERWYEtc3",
  "key30": "4cxfiLiMHxAgRPiyA6NpBzqXhbxTUGMViUKQsmMChe9DAMwk3HGWnX3utM9aMaWr2vSLddznrVybEsEFZV89G15q",
  "key31": "3sDxhY2ezjA4YF8FhrD7T5fAityc4SPVp3WYe2rtBMDeBPEfQhre6qFutUzyRyJSp46jWpdZ1pZLLGonDNqNpfkZ"
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
