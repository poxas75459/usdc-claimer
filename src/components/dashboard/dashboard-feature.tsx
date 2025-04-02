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
    "5JCgpNGLhLWH6Gys7HjwS4zwaSyW4SZeGgJq9hhfm6gbdTQt635KVAK8fVhP92jr6MkcF1jGPgk96v5v1Ly1zvAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLKXCq4fxdpTUERAE5XhYdZUkDorc8Dnk8PaEYXuBx3zuGJFcpiuzABWDNhix3zTrFLmNkVzk1bxkRaaNQ7kmra",
  "key1": "2emwmp5LiS987eUm35pCHN9qfMpC59MfZC7R2N8qFDgZGbF5ZAeazRxBZTRUfo72z1Jg4DCKybH12946YuTiH3wN",
  "key2": "44FepeRRrSZWiqhFgQdHEZiGup3qN9Mhqw1iNspqLj7mNaF9tr1CpsiQxZP9Cjyjreg4zckpLqssWat1653EzogS",
  "key3": "4e6XW1sbu7kWUcv5gBBR8sMGcvc4J6WgknwPvVDYw6bvTcRipTKK4nXdWVWQidXLGLgneWQ7PC65mdCtyMNnEmAF",
  "key4": "3R86F2KjVhiPiwvuEyqrYmYrgiXsoqNkwNhrdURnCYeprBJrYKDRJvY36EHbkDNYq2QsNzR1M6rk4BnV1xiczJ7x",
  "key5": "4FfeWXj1Ppg44EQjT8WpzoYB9xc2KP5ahEDW4AxNQYvjHbng816dDd9wQpVv8uZ8c1MgxBhCjPxjdHNUenHn7S7K",
  "key6": "4dyJEzNS7Gv2tsf6DbJPyvAMCd84VHHZWb75Kg7XrxQnu8MRwbrWHXSNou4wyymMwDzoGqh7Mf1zjMNQoUibmyDu",
  "key7": "5VPVrPd65zcpV46Y7TYyGmV6ZqXPBf9cUYJ9zd1kKYZLPuhgLfXL4o1mdpGuUhwXrFzZpciLR44UQEg5Ekcfepuo",
  "key8": "x96eexw8cWznkUDBK7zg8C2pcrnEZmi2ULXv43Js9VmjaXTZabi5u1dSb7Cs6dFJsJf9xMkjw2VsXHdek8Dv2R3",
  "key9": "66RWDJUVUHWuC2KBh4zsh4DFSs7ooiBLcDDLEU3wU5TbxX6yTDvDavpiSxH1H3mwP95mGLRb98Pasnro8zRVn1HJ",
  "key10": "5pGJcEQacQ9VQdwFSuw3E8713gCL9xd7eGBXdg5fZvj3tqEikZppi2S4xq8on7mi3PWXQy7fk2MuSghojVukNqYx",
  "key11": "3XGp46eejoAQ3PwgKyV7JpGoXZFH7zNXHAuxLp1n718FodYqKGXqmzqXjwVa3bCsHtK7UwzDWdjG1HimRMqMmDic",
  "key12": "5aVxxHwF9FKPKhodTY4ijPs2L5fTZvxMAFUeYF9XAwUQj7BtyWcS85hdRNGS3bQ62D68VKDbiEhJDJ4PJEGyFYqy",
  "key13": "S9i2Huf1uWLyX3BS28XeqiAtGG69AiDwkXHQ6gvEXnNAqzVnTs4brD5rR3dK8gPpEGT6poXTvMyTTMvNgkSXeL2",
  "key14": "3JootnSPKv5ZrPyQT7aes6i2sF7dh2sR9rVr5fiHCLJegvRsJoQZd8DmMa6zsWccT4pTAaqXoRZ5mQW3zZxP8MTn",
  "key15": "3E7XqvQ2WSdiHm74KCBKWw5nNmGqX16AyHu5DVi79TDQD1cNn8bZBYdAAyQEYG2aTijptcwkJLdkNRNrbu5knEge",
  "key16": "RFB9y9atsuNNrfjUrvybsu3peBg5JrdchCik8rLwVqiftzWai1evfxLudMTnzPSzXSX27oyr97735n8gUSrbTip",
  "key17": "ozWeLPqo9EeYdLEdkBm5taa5EiJKWc6jbJii8rBL2TPSQE8TxzMcK8b4E25fMCJ3Lq5FPThUNCKQMYWeBrLki6H",
  "key18": "VrbGvQgpcMore4cS6g8in1xQUgMQSEcLWPp6ND6ZzKeDXxz8hAaFgvGjxiZQ572EYq4KGzhFhKVQ4hsts3Z5DRz",
  "key19": "3uPs8vhmhk4WD1543d1VdEHj4M1QpCtk4MH8QSnMHNMaUEKsYXTxyh9npWHF7nwJfGEJ3uT4j8TiQWcSfApE3XDX",
  "key20": "csZGFk3gn1MRQ1KQ4E8csgdvjEGJkWdRzccqSmi5WkkBg1uo4WcgrNJGGC4zNz55DSDVueUL1vJ1i7LNvq2V525",
  "key21": "54CcXoXNiUC9XBWa3taKJcBH231azQ54WWrYAnonJhRQ9HuKm6WUy684gGc3jSBL9T4yyHmE3YYscwFqYP918RGj",
  "key22": "4UYeF3wkiEoEvJFBZ4MNace6Vu7yPhPvioDqHrtkXda4kKHKTmHUYxs32kdPuwVBhh8EQCJrcdHtjL9WUcXHwyfL",
  "key23": "3sEjGejSnDNtVV6KjG9UuZnTchd6eBAWXRFs1MYzM1KLvedwiDer2LDgReDBDsjeuvNyFYczj3VneNdadpzkU7cY",
  "key24": "26x6aS1F2RkeoetNa1RgruLkMezPywKL4ovQ4kX4pEqPJ3C9HmH6F7o2YhSRcMSGVYUn2j6YuwyNQaMRW6ZHBcJb",
  "key25": "fNHSxnRBnZaPnVzjLr798HcpYNhBWeCbh7vzfxdZrWauCkuZhSZYspG5fF74aTQdgsiniHkE9Y6ojrAnkGDK19W"
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
