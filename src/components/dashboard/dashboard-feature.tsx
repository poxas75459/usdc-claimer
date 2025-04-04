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
    "5mspvBk6mkAVve8HDwuAm9UPCQH7UdF24ogKdQLN1y1NhVa2nWTFgjsDhxfHNtEEPoZbPJn4CXbXqsza1aASfYa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDo1qefDqwa7jqZXmRRbvgs3Qb8fC9AmAN5Sy6B7tWQA9U2UW7ce2LhUUHpxawdSxT1BzeR9DMYsw4Gd4VNufow",
  "key1": "2EShC7xqTuH9DjmutVAYEikHxq2fqiN2BEfmtSRaZJXrhxkbXswRUE8yyoB9ErU9kuspkrh5bJo5nXVAVJLdCiFm",
  "key2": "59YcH8JWsG9yCto6T92HNdDkpxMsA6kiJAXHFUf5fDCNunUHcJZwBUsS8dTQgRy9bVZQwbdrB2DRT3iUXYwgLTC2",
  "key3": "29uTGHGVxtTW6eAvQVQiqzz6sEPkhTuHDDDyst14Zib2BvwjRxB3UEMvLMGqfU29LQ4HiGZNZ7GQ9sKVMtLZZ5SN",
  "key4": "2NzGbe71kJC68F2zNDVyDoFh5P33bwHxcXFeLJc5Hd7NWALTfHido3TdvRCqsQ4p4EEpLr7LMrXAcBfZGLtwCvo3",
  "key5": "2TkcQUDU5sFRjP8s1w1t5h3ys6bems7iviubAz4VqyBetv6ThSKEVgrAgwrMonza1wtAhrM6dsVtuezP75mu5DTA",
  "key6": "26SYvgVruRQvmfU4QtKR2FN4pcGRsFATCGMNZC7r1YknLQGDXtY8pGttSXB4kG6VpTkvybK23goa9zq3ALrMRWRk",
  "key7": "52qUgquTTrJxYw2cjm3dQ9Vz1caDg2XLGB1yd6eWSz1KjoDU1GZLi8ZnEspR1DcNRmyChdrDxPQogFZQS3NXziUK",
  "key8": "5monktgDmLSEAagiDxxReBqzFrBtta7tKLMU4UbnHBLuDv4zbKGPrZrevR3TZb8ZJo7S6CR1BzqsgJm9FMfn2bnT",
  "key9": "4iNAfUZ9gwvoZdHaiKMZ8QbzWskgGLwhvAk22Z6o2qvRY5ag9dbJxBrkLz4cz99abfTPvH2Ly7P8pxPwv7KPX5v9",
  "key10": "4v8Mn4SktmJjf4ZmW8D9jBHde9bWh3v3EZM1kmmrzGYKBMj37m55obWGyb8Q5gA7VLR6jp7ifZPAZGcjLYRq2UvF",
  "key11": "58iT6rmqpbABzUBBFgPBj7uA5nUBVGtf9gEeRvbZw5wABsk6uHNawfDfGxCzDcxq466WnZ9LYmaWEYd2vwZ92evW",
  "key12": "3cqbryjNcLPS59NXxMjBBmS8wuzJ5n1BSZt46kUJ5QJDbKpsuGMePsPvw42QW1R5mx7uwhXispb41a37mmMpqrcE",
  "key13": "wmMvJbznz8mdoKbfCAShHnTmVV6DkahEJTpQLwshZWEMYMyvzyFiAnXjpLBZQzgveFn8K9GrGewmX3VoT2tTu85",
  "key14": "h2h36bLLmbBwEPePPjWHxGxeCtxtDKRU1xktc8b6djPn2qMo8YGPvCay4Njt5qNu4vmaeviZFSvpFikrrXrQKCv",
  "key15": "2Ew5KS15BGsb2Xu6w21n6ccfA1aU1z8PFPEv4KA6HsX3mT8dacCWCGuJB7ybHFH6vjvTYTWAsoR429AFR12SYZVK",
  "key16": "4fqVy3ByKTZvGP4TBE2PTKAYBLwf47Ly826rTKCQkkHHsjEdU8HHUGSo3JnB4dEFJTXhN8HbmNQK2gbHcEDbFA4m",
  "key17": "4TpBoBqUyFsrovUTmtZdJEnApCpK6DMWCYNcoQmQaboRWxmtYzv3w7dbBQVyoqfMVb4o8xsn3TvFbSYkmDVDrLzM",
  "key18": "2so1btyusLgjqDTJEcjJidQHvxjPymcVn1miKqASbaoKKZaUJh9BpeEgC3hGjTgXfoD63duJv3afDJeGeqyXBPmH",
  "key19": "48bVgzyNtg9etRiKBRE1DTWot24GkzUhhZmyCZaTVHBoxTWfH8nUNH9p7ipbxCPeG54RrUGS6ZDehv2r9gtKVf21",
  "key20": "34E5Z9tJnUFiXa3qpsK3Jf4cS29Dz4TkLKgZRek3c7cvACLpPdsy2NkcQfxvDH2iBDA96tCpKkkRa1Uiir4pPoWA",
  "key21": "42vxngbmAurQ2szqoTtWc6KGtbzYppGx8ps9D8BWmCaeRGWwRQ9akAt4LHiGZwjbvZyWiHAZQWNBnPfS7bHFhvr5",
  "key22": "3hp5qnpNB2WMGaVgSBdF5bXeVGtGQiq8sxcFpcvkcQdfT92rEqqDWrwdnokxiDM4MD5mwJoqvr5C6qQiGt841TpP",
  "key23": "3Sw5Je1UEEqxNnBjqKdtomq1kC4DZYbA8SP2fJtqr7YPSK21HBKY5MwLPqQiXNrGUMvYRBYdkNMvkqJMQoeEpVqj",
  "key24": "gUbbFSnper9VYFQWc3uneBxL16CKpZwBQzwEcZqirNF44r6FUoU1HPdE6JSihCRgxyyAWUydo8QWpEXqgcq8Nb6",
  "key25": "3FCCVP3Rp8Crzd6sEDyN4uT2NbWCTadKiqTKXbs5EbeNkwPw9gp4pADsEfiuSikBeDxTugVoKbyWHs6ujLJ2UWaQ",
  "key26": "mcFjUxdvACL2S8kdUZxwcc8PtyTo9DF2fkG4iDLmDNYeF3C4R3AoVzFG3AHpmjArcDAMMFjTRP57rT1aJgXTmAU"
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
