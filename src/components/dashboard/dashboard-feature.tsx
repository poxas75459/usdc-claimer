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
    "3znveTzGqgS5KFmuESCmokACzX7PTLembs2Vx2Su6s2ADfv9yhDSpZrctiPrBgyspGnyTp5CjqWcqsN1DgLcWmFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGG3UDBgWGksMa5pCaLj26LufeWEVA1pXwhZ9cezaAez4k925oiqZ5MFuW9kKk59CXNYNFDr8vPKyTLVsZCNwbb",
  "key1": "3GkyhJypw3opQF1siJubk3MskiTbyQRkX54nEqVBVeZMwES6Xxc6EukLXgDiAHctnC8rpnfrRL73Zjwd877NFAjF",
  "key2": "2sMqzNrcPL8JNDjDNsLbWWDcfRUY6YRTj7wsvjdDQZr4Tv2GUR3DT17RTthQudsTkyJvDVdAojfigCm7qdUHdiRb",
  "key3": "2tBPWJJm9THqTB4xAqLVVYvjdPth3ho4Sh5pAREnsSJyQYqEtcFmpC1CJQ94QCmrUNUVhnX2Xi6iHQhgYTEn49HK",
  "key4": "56msD3zUWDnADRev3ufsGAiuHFYt99fJdg4ha7k4HeSWYL1ArRGbmZUyFJhB129Fk9yQNeBHpHzmmwpxTJSKKfTh",
  "key5": "ytTYDKLw54M25hijwJ1yW4xV9PERf8KoeiZVvwqe6wSsejB9Wrvu64iZVtr7jNAthjQkHiP3APtncxutzsZAgFZ",
  "key6": "4n1f9NT61EupFrv33CS4SxXqK9YQsXUXy5M8hrHCsx4mHQ3iM4pReNZTFtTHTU8gt96Bq2kbTcMdc38MouBNQiXJ",
  "key7": "yyEWpcAep85ejxK8mDUfToEF2631k1bvumh1enrLrGwkbneRM2u2jFU7LLjbcckKJ6yuuWiWXy8fyvn3nWo55E9",
  "key8": "22y6zjbTV2a41E7vTgVvL3ensUrqCZAy9hnZxNaBWxGuJ4F8CojhPEVzwf7kJZHT255koYvTh64m1cNAhZkz4YRF",
  "key9": "5QUXsK35PRwFMGE8Ko9cWNZqGoXuLposwWXWk3iHk2hBYNtWRhYHaBWXWXJQkYnp6A5dUvbSeSWgDSCFr3UtiU5W",
  "key10": "5Pqw4EfVLudgDrozF5MaiWoL1c5byzMidGNXignujWPY3x5NkJ6qHQtUyMsNSaPnt78RsdZyXuwc7sbGoYwQBhAQ",
  "key11": "4oWcp7NXTQVm8hh2zyZJen7GX7QodGtTJKZqeb1NuRsVnjBTTBWSVfmDx3csnmNFWtm8K3LVmnUmb2w75mcFN2Ry",
  "key12": "5SJtmi256Dog71TLWDqSMTutM5Dy2xfsdEGrTtjv5xzrCzUY29p4iSNasQgd7amNNVcBYsbbufrBAhMK5naL9ai",
  "key13": "58WxH4TL3PMbWGPJE3poV9CNpe884SReys5d2K6fbA2PghjKVd4B42FSKeWyoZq7MGwzKQaU6sysVrmdxmv9B6Sd",
  "key14": "2y5W6hGcj1dzWCayWqALUwY6q6NNe2tPfaHVQ697TuqUMqqcvmYiWUvwgVSh6WSekmz3s9SwwWMhhQZLRxiHVL5i",
  "key15": "21mgPa6foJUX1aAzYmYgoCTbm4KcbM7taXQSQqJjFeKnuPrWMWymZDnqbAeuCBYhgzGrYwtypqyfg7aRr94VFTr1",
  "key16": "23ifiuWVdVDrjNUhgNUVbjUJXB3rdiPxRGbfxuk8FwfFsCCK6KJ8FG97nSzYTLC8EQhssbum5QtxWXRebG7XhHgz",
  "key17": "gPeu7VyfrSK65vdrgThEsKmvjw4nFoKU77uooNESyeY8Kwxc77rqwkp9EvhmYKRPQhakPYF8ws2ypixShK1e1L4",
  "key18": "27DXQkVE4TtKCEKy5wUEdhKPH6ii82Um4DqkDd5pEHZS4TZYavjJRcfpmJpRa4BgiEtWzjdwbLU5PQjW5AYVGwon",
  "key19": "5AxxYxSaYTXUSZJLNVeVTCJBnXdrKqWoqiMTE9c75AACbWRADyk3YDQXWAZwHRFcemh9QPGR9jcGCoLqTKGRC2iY",
  "key20": "4ZnK47fKBD5eG4LgkAzXFKZSYUgyX28QGrxLAbFX7Bm4hNFS4jiEE7sizzYiNcNiFgHjwKDkVeQnWgxVKyCnw42K",
  "key21": "YcYeLBeLtc11iNF9ohEAqHxPXbZficU8UjVbcN5CyLdrN2Jb5H3A2nogFHqa3miaXMeuoSHgjTHNBf3V546Qvog",
  "key22": "382mex2Xhw4u99GgDsBFKpfqR4FTWkWDo84dHAxf9AZWdCqinW18pWZ92okCF28b3JHaakHsXvwttzM3AqBo96JY",
  "key23": "2citmYbGyhMUkvKFpAp2cXQkhprtqMWScAvtC1TudhDfiMX1BXJbY8GFVoR5BVsdZgi1yiRDQirAhxdHsuTLrtRo",
  "key24": "54QXV5vcBeWY23DivKuGbQEwGETkW5Lhs1uF9zBYyVx7CwvhF1UDiv3zJ4PJrCY3FGwyKyAdea72LbQS6H7Mn8tN",
  "key25": "5ACicGUpNbmDTqzyMeGNj5mf9mSYY8J5cdqKK6PH7yEztW6xXVBRUvtMxyQBxLEibPXQLJRmLzGevobhcfZXTBDe",
  "key26": "58YukWVP7PrSiyHXoyMMmC6yhnTFw5tFR18q5ZW2NXNwsL3aV8bK68ds9aM4k8168vsHkf2BEm2yMAxnCEmY9z3k",
  "key27": "3pxVqZ5U8JaJS8xU5qmeBC17kZNCLpVsR3RgpaZVWdhEgpTtV8pj5nCEudmFBNdAimJ71hr8oF7C6juVTqtbZkay",
  "key28": "2egASC5k2Fsy8GAi1rkvRrzBPCzDQPmSu1WaoU1fE8VXhjVchShT1emF9zpGLfeWuezD9f5FXEnU8iM9QT1yNWFp",
  "key29": "3nhPgpygXFWV75g4JdzqcYHA3MFXHzjeQo8CaG7tLDufRWjq6SbjhMevBnEFQUEyzmzBaZDqFqM9nT8sZ2QNsnEC",
  "key30": "37G7H1MzbVMieEHeAPY9ZDpB5DNMixsk8VA6RYMwtxxA3DPTJozHG5M4wLPyma36e1uHpQTyZRdacfkycX1LtNEC",
  "key31": "3xGEe9uDfHqjKPCUCWTLLNQXHucHTbfM3Bw5VJwkL5dTJQGXEQACw9NYmZhqNBnwTz7UAPDNjiZsBCCW3wGWXr65",
  "key32": "2rkJBh6SGnz85qifQ5Jt6szr1W7duRQUcrmX8Dzo7rgoycizcs2qo1iQfP6PR6gzJkeLUYpQKgKMqTZhQMR9S8k3"
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
