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
    "5oDi4fWkLpFmk4wb6z4dPEjkknA3n1ZmYwtsKbz8Tc3HVZvsHnKeq3gh6sYc2C4eGcaQhatUqkBy4YyRpaP8ZrTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwP7scWec7AGaJfzzEL8Nn94fX1bXpkBHhp1x1fYNDybkcisEEC32kbBUwYUdoKScKjpRnCnStj1zjz4vsvg1e7",
  "key1": "iGxQkHbnhmFuPn1xkLrai6Kzf5KwkWs7wBgQkpzyRDNtdQsk9h2WShrCQHQzLttBr1CrDpxCJXm9bZXoTXgXt3r",
  "key2": "syZzJpAvib5qc11ueRFmgdxFg5LrZ6fCM66V3865e58hYCkCiHTLyWUsxapSDGbkTLoHiYFMivqTvBVrvNKdV9i",
  "key3": "48GozDn8YzGTqodKeYEjit2PqfJjsAmyK8hWxE7Zs4D9UL4nnofD5JquVxP3V8pmaDkxJcyujjMNkTwiudPn9M7K",
  "key4": "5wjQ1xQPh67qD9wn7xuSL1TNnNang36XkBHUubNtHpM72thqePKuJNrsLzz1njhj74KgYrstfAj3NnXJiD52dcwj",
  "key5": "4mk5KYBiKfVEJcieWDKH7wphS4a6dKx7cxUgDFPn5BfUoaPYwnvJtG8TszPLZbfJZorNYjoWXyZqLbyZbaE4KizG",
  "key6": "9vJBjN15JXXvEDz8JHe22fuwvpQEA1EMgHJEhguLhracB7TSuFXr75e4A8N5W4VZiiDk5wpznWd7oneqZhCH3Qb",
  "key7": "3cG4PpB2TqdhN9WfBxg1cGrVue48Ko35TxLnnFHrvyCwTm5YkivmYTJyHMZS1fqCJCn5xKTsqM6JmsZtQPKiY6Bf",
  "key8": "48S6UGCcGzUKQ3wtzyoeE9DAC5NDmmJwSbCy716qo9FnQbKjP478ciKL3oq2dNJty1rVV4SwcTg1QCnVP3uCYFT5",
  "key9": "2gw4Dkv2ZetAwry73bVn8CdhqV5mkojRWJDUGGwx9AeRn34qYoYf9nXKFE7gmBRLYRfUrXH56LtsfcADSZ3H8LGZ",
  "key10": "V5TQjHwgLGZCawuE1HhgLZgiyihZKvyxy8GF5AsCsNrnrtJCHE7yiUS1i9Wnxzw4A4wjNVLR86r9WBgwWQJBWJ1",
  "key11": "3xg8EJaQB8yCDPQkJYRK8SLCfVK5bG7kQxJUaqDvFwGcJPPbwMH8zRtM5BXSvtTyUCoxh6rMuXK87sNfEXUsc3RA",
  "key12": "Hz3agaDFghG9LcmnRpkTgjvpFkE3sbHAZWtkfovybbmk7TxSoajkgQDkqrkhajw74JtwSjnUMABvXTgQBd1CrEy",
  "key13": "4jRKhERe9WPpAGp8nHomcRZSkGheHjzNbmidfJuVsxoo5UFZC46Ve6ud2eQufL3ejbTacHJh4apZiLQM2DYEzGWC",
  "key14": "2tEHeQxEwrVCYk4GQisD3joSysrZWfAf9nt7hPwSiggKwCQQFqdCnVLMRkatJshrqGEKLY8LeoH8QSWZ6rRqUe6z",
  "key15": "5WtLVyHN3G8R7g7y4jcdymYyE9rWJ3wr6Mx5c4Z51ewoHrRKnGm8WhSzbXq2jFvqetfx8jGgyNQK6w6pxk34p4uf",
  "key16": "5uCSrdtG8kbhpRpwgNiaNmeK29qfVBYBN8r6oUFbBvpKU2fdALnJyYbcXKz19Mceb57EYFesHFWPGM7Lp9Fbwibw",
  "key17": "reWohRDpeDs65dYKq5B3FYF8XKstweAMzpBvrqLVYXPA25NhXEEErnSdmP7gUEkZNyE7x6hvYR4oqNm7cEPHJ5B",
  "key18": "3CdkUDrM3Z1p52bo4rv4GBdc4ZdYiuS2e3wzGe7jyz33NHyfCDS6JD5HY1UUdmi3cmfkpbZwNaniqN5xZwcfut2P",
  "key19": "ACiKjE681oNhmZ77fGiodvmEdj7eXikm7Rx2pFTmbi6Aupu6xxVKPRHhLx2PjQZKBJzJkWqer1inbmefihxiZeL",
  "key20": "3WoecfrUDzGfkCtre7q59CkrQnmrRerZzC9kUSJ66jXim5CxuQJTKC6a6L1wETqdYeuzvuSv6ziAY9ipE7fbWmkF",
  "key21": "5sNJHhZVmuThf3D6733SLxWBRyQVoFVMi31PeXx7sb54Y18KLUfnh5rrniMXTydxB812Z2SRkLTEdtMsYakDWrYN",
  "key22": "MLbrrS1dGeQSj29N58BVDrMc1tjd2GWzCh7YJADNtHGyewYcVKezsPjBr7xTdKukc2bAXDDQPsHVQMAAhjxmgYq",
  "key23": "2QTVKghUkqrGcxhEXX3W12cyEMf4yL6gP5Br9MiaUbWCLcfapsvfHYH9EMQPW8G73STdLqvsJ4VyjPMuRJc62r86",
  "key24": "3xEA9NDrJBmf2VyirmqQkTvhEp55w44rdCNY3sQoPgAKWcutgzFqpfiQZhrJc6kDDWq5Epshs62fj6QeAAbcN1hq"
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
