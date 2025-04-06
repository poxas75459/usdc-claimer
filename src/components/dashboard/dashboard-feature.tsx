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
    "3J8GvDqEZnh2KjMJ2GiMRuNfgN2eJz11aLCzovPkuzwb6NKfScZaRBbEerfRfXoaHEbNDqAHveyePJvJYAq6qUuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeoxsAPMCE9fdVdaMQ9nGiBMwxsvMNHizdpH5E4vW8xN62uxMo1eFgC5yvsKxRgu353799NtraLMHDZ7xBRZhbS",
  "key1": "3cFxMeoUZ86HBNyMy1FGyqKxUdJxqjFQRXAGqpBu54uRCmFLpNcH3jhjgVocCd7RvDiE9BcqJcXfTT3uTwA4yPMM",
  "key2": "26UPa8VmarxMcBxBsPbwpdRsCXAvr3bfgQFEXVRKnCUGyjve7JQsLp7vzRVLPfHqNbJmnrj5bGt7eEeHkNxdoJee",
  "key3": "57ajPGtq2CHrVuQnWfmTpSTfWByB27NTHEujAQgycmig9C71A7Rtpv7JccWWWmApvaLXWK9d5GdTB9L3SWZA4vdP",
  "key4": "5JGY5oki4bkt3kHQjhS9YQ3jaRCYPqk7maXZUEkB9GSo3tLi6CMSQNTw3LsRZrQsbZoTSmTHvng94DAYsBKJuC2H",
  "key5": "47an1mdzH2vLjrbohpoygDtEdpro9kM8dM7uPCQQQyoeveasYE3zVjCcKDHwL12dsZnnEib377bPsTJKNqgUQbKC",
  "key6": "2C1LDushvPQojRbLdT6VQvQsvhhVUefUoSPkKkxrHXBBvVzGwFBFKTd8N1VxRFSCY8i9w1ofjLMFQuqtv8apJPXS",
  "key7": "5A78uk7uSViatgREaZZuzYpkHkY4ZAFTS8KVLP48ssz1LR3GnHpURBSLj5ZJsHpxLvFxsZdG9d6ok3NrySA8cXv6",
  "key8": "38VDtAt449CbjU4Ah7FmYfRvb3WHThRa8vCsEEzn4kG3rg7rQMm4xnTjuu3kKzskW7Frunep1fWDg1tGj8qSz7hj",
  "key9": "3cmtroKWrMVYLnM6Y3aCsqz4vbsJTLm8HyJ7czUJqqdubif2qk4wXSi5jk4NYnTVtL3iW3S2XtxzHkn6jUFXDW9S",
  "key10": "4kWcroJhvEg5EPdLpNZvyMiqRSrA3vy2YroVDoaCcYeRMJwWzRi6gZqB8GTuiKKeW8yNRwkQDdWpvJRokpbE1wVg",
  "key11": "37qm6NJ3uD3rBYfsqnk6bu5MCFenjQwDawGUWPQjLhBndZWBNDKbGubY4vzyEohAPLK3x4vVjeTXG6ik4XRiaiFz",
  "key12": "4u9ferXNx58ej2DfEqtxgcx23Vd2Yq2n6fnGaWuXxP59e4HYLJW4Kw6c95KWuvgPXMxc5255MJXV2YwzRV3EJcKg",
  "key13": "3RqVfX4rGgJnhUdw8F1jSArvbXopAYjZquv3Dz2LodVWRwES6woEQPAapbqY62TYp8eJ4azmCAsb4qSadZTiKeda",
  "key14": "2aTPm8uALM9R7qsg3Rpb1swDhSypnZqK2MotL3hoaiH6n4r6E7dcTZ76cYVYsfB2hBXyZBHM2Mpnp1r8tBfwiM6X",
  "key15": "2aX7f2XzLj4DDnwP411sMBnmPnbpRJhU9qrijb4ZGe8APNkDjEAiGSFVPqcHW2uCpum2mf8DLciwbQGMJX4EEXMs",
  "key16": "2PHZB2RZJG8ZbDwoqgDCUXcNDfGRxybrVkRNtKssFBTphU2rDmN1J8GuecMrEH7d9pz4gEh7qt8mn6Vcw7Bmjnbc",
  "key17": "24KjYA4Tjy3wRgNSUkfnjfBUnM2EvAf5922u3HxjhnzsnGT7AX9JfG3eqJroQu2VrVhQ5exdrD8pFsRvVi2TRQqo",
  "key18": "4LaFGuQUqgjuFokARZgdYS9XBzojSsS3MqchP56i7BdKqfrVqHpu4y7AbnooGYSN4pLFU494XgP1fi694xSJhKcK",
  "key19": "5ZriCVyddCNwkV4vaeydzv67ktAtJSZABsFVkXzGBxRJzxXBUjPTK9CCoh3gjztWd6HZyw2fmetTUkQfUJYwqZSj",
  "key20": "bQz7jHmGA5kRiJJh6J9zo5PG8vQqVmevitHfqj5b2wJhCLHF1cwF37Bc7aKVrgChYeUQdd66sm9a1Q9HL7rSLbB",
  "key21": "4LvJ58C5yufzDDTwKpqzF6a3FEchN1WdPKErHAYHQJqzvQn5JNSfHhJPovWt87iBBb5npfU7rut3YHrbK5k8L5QM",
  "key22": "54mja1WW6zCVyk7d7EqVi4YHaL4HSsu34zDvjiFFrZmWxPxNVicZ86chVFpEVyxnCdKfPC48ZtmPypogdd3PBeem",
  "key23": "2ihkWGr6sn1LgeWi4T3ccD1LxniP1xjn35xEC8jjbvqxbMKU6fvmfvPD3tbHjwqixARhaqHNrcx2oRXr4KNoA9aM",
  "key24": "2zZ314tNzkAckYorVt8KLR68CJvT28TxjndxsNon9fdScLWwFnR7sE7uFDAShYp5aNb7kRhToByqj1Yzm445Q4SN",
  "key25": "4qRYBJ8CSJS9HQXbaQQZHYwnmLrPsvqBMuafZEqFwPWkGwCwhdJwGwDLhM18RR2AKeVuA34mmBeYayM37oixqqaM",
  "key26": "5qPzAgpQ4yeZ3SjaiAmR38jQMj9PDDRDLE16dFud1Dzw1i7CXrkqVDeBUtcCG5WmrLiw8iVTjvRaNMJHjnwGVTRP",
  "key27": "4RrxeZfiYj5bHm5QvC8ZRotjwCf921XRcD6rQQyDNfDGDMxS4ytFr4WdWi3Fun2VV5PAeMSDJrAUHBDn9UfFADJ",
  "key28": "Ki6KKz9qg64uCVWxMottYa5uzGDtNNwAA5jntZhmCg8G6JFSUsEicsj7nvyauMjUcm2HqrPW927mqzHvGjvE5PG",
  "key29": "5WozTHrt2dX3ZL2p7x6xBR5oT74F4jYKjTqjKK9UVYUYEmSuUCzCrocEN3zTDopMoeQR6Th2LxY2Bjf8Ew2ev5Ny",
  "key30": "2vUV3knfaYkL7bs7TBNSKH3UdiGtQtyi4wpkE7jWgqKhPagrPNDfuahEhcfa8Wj4kchzM214voPmrDMkSSSzBr8J",
  "key31": "5ffEEduVetGZo6MQBATg1W1FLZcWDFdBApQvQVrZN36ZygrG7wkgAooCig5xhEGe8BGdCYbkMHxQM7rMLdjVB5Gd",
  "key32": "5RYP4gFqJZUypqXsoh7eR8eWqsTXdGQyozhisJmfMNo8qLWGpVi51Qp4wUfEhL5LwF7qhfxHSUDgZJg8Smks7XD2",
  "key33": "4QfkiC8nDVgEE3sm8HHuDmVyq9sZGFfrukP1neosiPnRzbEVfy25RLbe68P4RXiYNrEHbNoF4J7YfpJE2wvGAZqV",
  "key34": "41kxxVGjL3T3YBp2cR3iHjqBDcmXc714cURdx79h8eLjAhW4egmWCiWZNGzMWrpBQYaNn8NhwA3m7QgmhzJABXqZ"
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
