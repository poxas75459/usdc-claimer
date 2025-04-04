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
    "4S8wCYhN41Yuqj6dfw6J7CZazLhLrBb6pnjcybbBHwqfuYVKFCfyknL9WPGisTKzE9GnXgjQ1sTeXdG3boJiDpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVXDLsZmkLT82oDxSuGiFAxL5ST4KLmrHiZ13DD59xfNAm6Jx9bMx88f42TPfPWCMdR6CEyvcwMq4kcPsrE4fPb",
  "key1": "JKFYgNXB5PD23FnrffSNm622tPwnx7AJxmwyuzw8R6UZqZ8TQ3t5zv2QWkSNuXn1Z9pAvA6tCNdBqPNQdrFSLx7",
  "key2": "4X6UZeYL7zhf3UGTKSUyhyU62rayP3mJ9LfmaBQP5TMsXFWb2RK7LLeS4idQNV3QP2CcJaL7FXntxjEabFxNm4hx",
  "key3": "MTAPFoNp1dyjeZ4o7mVSL8fVSqn541dMUXo7ZLSTwpSvs54ZKgRXZ4Vj18uDV94MTgVuEybAdUzy4RmQrtYDSAL",
  "key4": "2CPWYwvctkcgKUk3pHVmokuPJpgnq62NNNXfgQFW381tdnNri5ZXrSq9phHW7NH8DJK9yp1vmxG86XGb2AYZnfZt",
  "key5": "3gx2feZzfFtNN5vDNkgDeoggjZ9i2SKH25YYm3cQHgWH1fpZGi1gKwiR3Um8FMB8AkZXvV8auGMh4NZicmTeeDNp",
  "key6": "4ubkY9BwhbJqc4M6EHYLfGLUtZqsBZtaXBnahZiinV1UtuidPbKJSRAhtY5JGYYBc2RBpgyhFbvg1pJVH5WMWfRc",
  "key7": "4jVHXDBeckxdREn1EsZuhNPq3a2ghz5WdnqC3jHKKKX8cePYD9ao9hRQoAKLD4cAeuVzzQrU4qy7JG4T5zPxaWAi",
  "key8": "3v6RG9xc3maiyTSq6t8CiPP5kWsQmr7Qr4hEqvgBKkT4rBgkRj5SduYQwzvSTDTtFWrmQRWwd8UWxW8nkaqULXNf",
  "key9": "2NBunzBYeKLmkmRzVucPJ1UkH2aZJMGdtH8dQt1BaLirmsmmQo5Z1BAiiTGngtAXcxgbG2YcKgW4K5QWGgHNZTqL",
  "key10": "54bS17fXvykDBqtuyY7a5JTiyemAogoP1438VWa2gFv9tsuap4GWdt8Srtpy6ox4ULFUTi3WwmvTcz1QCjja4QkL",
  "key11": "4XtgFgskAzin3PAXa5QpB4S7oudBBimjs85RhHC74NHm4nNckUwcHxoYMZqvKQqgpka3D28pgvBQEHZiScXzWTmN",
  "key12": "1izSk3jRysyWjuz7RbEtqffeSzuNYMqA3C7KRXiAKeVjdFfhjsZcCXJokvTE9VF6RUJfxwYcEZGwhNcfkoz6E1Z",
  "key13": "34kGGPz15o2MywaHUjF1MMsUGgapRo4D2dvYHbW6eqBSguZnwVozJdZSWJbMH6ngZJEGiZC3HZAUP82aZebTiAtz",
  "key14": "HgwxbwAjc9jMxr86pwKUsj1t6NpNywo8YwVYDSvSkETcVbnC7VaoiK4cc8oZyJSrgfgL1paLemEh7ujPVHz4bQD",
  "key15": "5HSF2KX4BPc5XLmrCfVbDJEKaJ5F7v6hD6wreXikRKknfAijamhnih7o7ZvFq4QaMARWA1diQ6KbHMewSgxtZB72",
  "key16": "4kBwMu7nCLbposHu9rJTBq5gVEjWv4k86xCh6F4p71uJ3wGpMEme4kV4R6DRsFrWVSo98pN8tzQvc5amxgEkTetL",
  "key17": "APZ7yUEKngzowiXt2NQzE6DUhunGtXBvmMosLGQxs3KqeaDj5ZSqAqKu6qwTgFWpBNhVvLQFpV7e3WC12ismrcS",
  "key18": "5BokpJhuKfrs4EC7kmmSfKZeqn6kmjyodF6XYWgBnCyYVBHuAjoqaUZDn6M7xcnWfzG3pC4Tom9SDw17dr3bqdPS",
  "key19": "32qZQLRwAusCGshQxwAhEPXjoyirG8Qrt7ug7CKFvxgxiwM1q65hBHxWCVUyexrrXqdmx1QxVMAxrCjH6h6vVRen",
  "key20": "3oz6QZPGnkDMqa987Mq5WSec5fQjoa6gaevL1wtRosMWyfqffum9cQrLgATGPjb68iKutWkYnEPqgjUt3mxWUnhR",
  "key21": "yd4Ut13deXF5GiQNigBCLhDj4yWxNpHk48RL7LYMEW1T6iCA9ymDVaYRht6XeEopywEsCN5GTRN2dLcZiqMWkSK",
  "key22": "27i1yPexRvMHPbaNV4pxUnPiuCoJgP3Bgtsozv59oQpe1k3bLjZuSRKRLTHDHPgCG6jAibeyYGLAPztY5T8pJe8X",
  "key23": "5TQGz1i9RgFojYy9RaXJpN1dGFbuN4PwDNEsziRcNxH2HUzsqhj8Uy5372Y2T54Cwppyu7FVwrTK7ZtKM8nfjnbF",
  "key24": "3EwKcDHjM6A8GdJWL73iPerDN2U1izuA4kaXgT5moq1hpbK3zrHAf5ZNu59UEw7BUDBneMRvLUCR798XUiCVrDh8",
  "key25": "4K44gFs8G1BgUk4xZsxBe21E4pPJLDYhCzu2QE8deoqFJDfnF4LW9YQybZ36rRuiiHFtEW9zNBLbqwmgxAUnpxuR",
  "key26": "3pRNRKJZDAh9pof4nWNjXi6zyfTHHGmykgaNfFVJDbhJtyRX8KXenryGQQ7rjxYqXAy5iJ7XVgzxf5sph3ZsoPLg",
  "key27": "4eReYP9X1kpEEVtQvURbMbzBEaw5tbjBVgMjwQ7RQSEnYbvF9YdEHQZE9UKApgvwzFECD6RqixTeLAjkkgoZGvb4",
  "key28": "37iEweGRaMFBeQwLdfdFKMsAi1VAPyLRp2htdUVKeXzQoDtMnSkze3f2mmapHcpZEdxciUX8Zt4rbHZrvKMtpZCC",
  "key29": "3AJm2zdqjwLaVqifYjmtAqD4U4ftFmm29x9EWaW6a9VtV56YXU8kq9EaBdSvx6tW9mShvNnemkBcf2hQ3x3icaKN",
  "key30": "Nscg5oxaFXri9SwjDYoNZ22Y2Sd4rMXsNX73gWsF3dwDPkinoy6Do8fizvZPRgZfL1H1Xn2p8TiJggpPq24Lwoz",
  "key31": "4k8PMqCcxrZz3yED89noaatkwLGE2sGdxpE4siW1sRmCzFgbu8Hk2PG9VYefqpTJKDgvc4M1cMK24a4pnUtQ6RiG",
  "key32": "67N5oU62V2QDqy1QjFJcaAEQiPR7kmGRUuc6fRo9wpPXbt4F71PXjmu5DjKW7kR678DCynEXyyyZusnuUhWwtkkB",
  "key33": "2SewgD72gzpsQNYEG2HrHiue2XPUsURumUTpKrUfYZLBW9LGriXYDLTN8jFjdTevJhfrbH1sWE65KGJaPwKnJqs5",
  "key34": "5xL9SHhYgh4hHtCKZ7dFEWiidAg49XnFquSG4KiGmYnma6L8tBRVDi2oKxWRgx6H6pWJA5j7ymmJ8qz1L2r9Dzj8",
  "key35": "4g14YvJwxF3acCZjM5mbz3qfnHxS5D1SuF68KuB6E7mxpaVRLLKuzNiq7QytmNr3QXaNrSCFr8B4HjThhaLMuUuF",
  "key36": "2PJBXjT5Jr1dDEgcbteuYx69EEiBD3Xmw47QiAHz1UAJN595dEzeJzY46jixYtsHuadtXF7Hhrf5EbiZQQskPXMC",
  "key37": "5isyYkTD831KXBz2KZgNjfK4waBPWwYEe6ZyZEaYFnqzyiRmpdAQzB8pQ6nUeTyUYZs8DsegCVfDczexffy8Fpt2",
  "key38": "6ECPLDTqJqbpie6tVj33HV3RxZHW7eZz1HkJ5LsRMSAL9aQcj3XKMaU6rqB5tNC1yafs2GFB1sKbPLhmojPxTRw",
  "key39": "33SBQ9sq4Qc2TyAeEWhBg665qK3xK396a4NSNscwqkNMy9XFV3ftCG1h1if8nZPF1hR2FmpFUZGAatyQbT4VdV8f",
  "key40": "4ewx2xruUgQQ3BUf1WvL4zWTYzg9RsjLmmuVeLAV8RrUEp1u7VpqXbWmd4yVa61ha87wFhLgPBAnoFxiSsUWSGQK",
  "key41": "3h4SHATohKrcrGBjNDfDBsSPeqsEETasVYq6b8PYQMFe6s3F3ahYySW6mwJvxoHgAZKG7rWWCniGiTSrXqWPVEn1",
  "key42": "44KxU3FK5zp8HRhMteQkt5v2opjX1PJ3nWDMivodpya1Pzw2YspFZeHnpA8YP8e2yKVUYsMErw5jtqWGANfPUuDi",
  "key43": "64c3cPS8oWFVPegvDdYvmWet3rrtwCjT1mcJJhTeJ1P2BVkKZhhH2HVLtz56gXBEBFN2oASGPv8PuSyRSgkfAqyv",
  "key44": "432jLS7ZC4HGoNgpDfDvqyC8FtowbK3YVwgSw9EdvoMdFxuedtt1Ek4HWZgRhJ77TZEpygaWLy8T742YwVHu2ZPE",
  "key45": "32hNE6PEMkXihH7jU4PsTTKBft3YDum3V4CMHyGqRB8Wj2ja6V2nNMLhtkosEiQD8ysueTWQzEkfcpNsQmtVxYFU",
  "key46": "4qNdcMXwbBCf9m6WWh2Gdacxnp9YuHfDj49sGf2eT6uspzQ9R9hVbXRjuJosTiH38aVNMRJpx1SuMkmP7gm5qgUC",
  "key47": "22g18CH76cS9jQMw7AqyLZejTDQfsxfjJk66Jk7PJQVVkTKFvbPzcLyM1WZyJzFdgNpm5hCnxsSfnKj56yVwzot7",
  "key48": "2by6dvjUMk2DX4hZ2giSqWqNZuMnLE352FgYEmjLyAp41UTawNzFqz8Kzi3s7CMTdrRUs64oPN32wZQ3WtcyJUAz",
  "key49": "4B3r32FAGaRJtxnbCnYq3KsNKnWy8CL942SmM8T8Ubf4XtqCymh11DjQgo5FReRoSfnVmwQdWkqLvkfYYiRy8F9i"
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
