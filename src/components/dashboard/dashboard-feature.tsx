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
    "2fNNuNuugjSfK6mqDt3KVXdiL5qYGdbHmtx8JYjm7EiJKkU7dhgLj6C2TEMAPc5jAEkPpPhuHyBVzJKH8unmLyfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpqwwjZYuKhL8c5wrt4eMgf2sF8KemVLTXkZ5jqtMv1TwC1xZ5Kai8SMxyJAf3HCvvJ3rSJasaFq4ggcB5QAeWg",
  "key1": "APB1SRwSTsU2mYYXymyPHGd2Fc3N5UrAZbwtDSeMJc6YM4zmDoJ8csDvKBkNDubTcMWMFkybNHbawEQRfZjsWeS",
  "key2": "3gfkhWvDspF2YEszWukyPV7MPmS9dfLvxyeT9gXHo4ku9WuT1rciAwFoG6bk8YsCdMCQNca5Goahb88mmeyggd7L",
  "key3": "ys1DKESCoHpZGyMT3xgQXugPT9fvFwKg4pbU1cDSQj9QyDStCJdnV6Wtz3KCRg5skhuK4BueeAyekLZRmZjf8RP",
  "key4": "4Tik3QAWu9svpd9KML1GpJMhZ6zWrGvNAK2jfaWVMUTguX4SXmc3p1611CheMjZsrH7goY2UAwCBr8hS1YKGjeRV",
  "key5": "37U7jezCjyafEEeDDTt3wb8bNdVtnjoGvijwxbRvSPrRSGQ7mUSSoSkJiEWZo2CdskGhTyjxoWviwDQAXFmXQcJm",
  "key6": "4vPaHuMGSw6crp7birQd1aounaqXwuksM4xnbYVWtC7Z9tEBav8eXsYvz5yh5cGGxxpnmc5KUeTAjVYXyFMnPLKA",
  "key7": "Lr6bQvTp1TBYCERFbrA1GZ2XbS6APLVLb2WzV32TftsTqK4d13NkdGhf8HvRwo6MxHbiMwpPA9qSDFXrqFJCMuN",
  "key8": "3MoH3AzLQe1opViwdZ7L8LaQoyik3H1MQiWKrv8PYXUJHfFkn7wR6BnHk82R4jPewJU7gb5ViR3zSjcy8LAFVVqS",
  "key9": "5fxhcr2UFhsic5kdeD9ekL4kU4XrT8L5U8STEpAFVbk3gCnobUuVxd7m2PMkmkBSJryfX7ZWRZxGXfw5uZgDx3BE",
  "key10": "3PCC8YgeuNRauKRtFdcQxaXtetMZtRkmRT3J7Jn2NxPse3PoEVVpSNN7v98zBTatLSeSuAFE7cDovqk656VyE7uh",
  "key11": "5FUzYpkym4o8KfnENsMciCZaELXtKNcXGp6EBhwsG8UeGTvKeoKXi4P7PgfQXN7kEVbuLgJ52AFwvYsCPgg9jULb",
  "key12": "5w97BwEA7kbpeo42mEz9ihC9eXQQgTpQVJemBAUxmqqpNWS37k1UfQ4achxfac13QgBLXVTyCD9xKGeCRSgQMdo6",
  "key13": "XYqZRz1xWMN2w4zAAJtWJ5GniyCqyzd189Vrf53wHBgsyqM7Heyt34SMu7pMeztVyeYkLx6LkNMQuAywe7Coa3F",
  "key14": "5zW1o2GpgkB87skF3YhSGka7PgTrgtG8ttgXXuXqgivYJr8hwAk9aVQ8xDZufbgWxenwFPFDTVh1Gbfyj6tDYoe7",
  "key15": "5WehyqfkX8gWJJCbsw14AYQGojmwskMJFm7eRHL3nU4J8YoyKts9yGmo5M8yZVRYgFZW6naTSP1v3twdEuk7mh99",
  "key16": "3s839BoqMzV7b4n8ySz2y3hANXSAErT7iMxz49d9Nutv83opBr6CKzM4e74tbCZvreLREhNQNtEiJwWryD5UJSBT",
  "key17": "5fe31jHHymW4fieYriafh4Z2ifP28tTvPfaGeB4RFQVyD6o2B4NpSzBconCw3swaZRpY1ifnEbs66y2LFpS1HfpX",
  "key18": "P3rNyAgNWNAmrxZD4UWF8n41YGREhoyyfe3ZZxr85MQQPDUXTUbWejRYuwLBU4s6kBH9ELDjNjhRYeDUHUmcbe2",
  "key19": "2ePB7Cmo5Y9ZmfQ74Phnfga34z8DVSZhPcQ1ExGeqLnmYx2qBpf2vryqAUyJN2g2hQZkmhtWiTUyneidaQqZu3YK",
  "key20": "2mZGeh5gquArhFsKxBUnoGcMgZyKwaXDmz1Y52wMvgRDrWEH28WUJucLYGhqkwR4M335F6UQsaYBVVj4VJTHYqEH",
  "key21": "HP6WRMwoH2WEb7rbBySxH158UQkrt1EhEWJx6QPZwazREtCvWJ4yx2SJBB5D2yVFQqUR6nvkvkKzg3yxzzaBhs6",
  "key22": "2Z7AiR3EjSupjxDm2xUnRMhVXWaoMTpr2AJAaVHzoebNS1TENQaD1CRWdtkRXfZ8CyqYEYWKCTFHCf9muGNkkspA",
  "key23": "2dfoqrNSwfBPXVBoiQMXTJpeEXHgpAXf3y9zRm8bq7AW6Urap9LrShbnQhguhPufVunzRAMUJ9VymDj32RKJcxAa",
  "key24": "34U7p8YNUxAvo6XB2X3kKYAcMFHuKZ6jBHabJNTMSbu6qpdjFL8EgfqpdLCZScHkERF34UAcwg8A9HsHhNbwvqMW"
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
