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
    "38McHs9V9aVEpBjTHc4h6JqjaF1ZTa5AYDixSTKntCYrzvY2JmP7VAumq53JbSqmoRW2TDZyALTwC42yibFCgfoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxqzYs2CJjWEAEzJKQ6VgnAThmiVPSCXswYwwoF8DWzeAMFau9TnXzoMg6xYfpBPaDzcSc79SdfGPTdaLtydkYd",
  "key1": "31gv1TDdhuiu4eQikrMthqZ3Q4DxiAguHuGtqGJ6hM65ghEKWiwdZ4Gk97nutXUpYVSDjFwMGNn7n8ehkFK8VDJT",
  "key2": "25pWgn2FpP8ZsAHz9FwNYQyP4gKLwU5BpJAgZpWJXao81p3vxTEhDRoMRde9DnK9Fbg4At92BA5myNNxDHnGoUNW",
  "key3": "4gWWDT2V6hDG7HMDbMjUatRYKAY8YzrMRNuYLb8ig8hLUFsescXyCRb84wGDzg95QVdeS1T6JurxyL9dYJWgrXAm",
  "key4": "2KDsaV3H1uNN3gsQW557otKLpxKQNNbd91FVHUDSyfjXcBYjAad9Y34fDm6MxrsnzUzes9PCZKanGHCwxmuuhsdz",
  "key5": "5ySeu7ajmWx7UmftYN91eurxeteqxgk9Ag68GofETkKLfo6VLvNwP8JvDwyMroym59VgteGupv1t5LkWAabfsB7h",
  "key6": "f6ArQeKD9qmMz4onBZ1R75sjdZavUHjkLtHgBMM6mxvWFKJ73Q2AKbBo7UqPBxYPancE8M8EpAJ1wW2CijkifTd",
  "key7": "4q5nD9VXYDdxhAqeFAPAdnuYdy3H9XaKW3uXTU18R8yrWUCNYU3oB7Tf429guscJqR4hNcW7dJDCJYBXcSGKbLiK",
  "key8": "2bz8rmf3zPBpwjGhaYzyPTQC9aTDNff7bAJq6wVGLac7XhAs9z7Vp2Ks61Qft4jUecvnQRABT8YQscuYbvMmLSFX",
  "key9": "2dCY9jnhRWNmRfKAu4ncRL1GFtC2bt7iJ9kgLnR3fdB9Q6tLRQHWw3yPwAT8yaVMzF7YRZVPJfG8hCd5siYBJRTo",
  "key10": "5ezKjegqbhMcuyZ5E9YnBon1ZNgV91tyBiXKTHxy1Kg2ssgpjmrwJ9fJWdXjSUThdtRp7VhjuNRqRtvykhNDeHp7",
  "key11": "5h2gkgPLbz3cArZeN1Db1T9BrXthgJpQ8Tz29quY5pZfbJvCptVHpXRxADDS1c3YQQwpbkE2SqbuDFwXf89FBiL8",
  "key12": "2oGDqR9cqG5Kbx7bJAoxEM7Qpb9yPWjv5GrAXPXNjE5VwPbeRkdUWjSe8DKSTGDpCqPkhpQVRQstW6dJTUxdAAst",
  "key13": "5atVvVSBy8Qv5vbG9zff1pfkvrWik1wwoEmTXAMFgW2uNx2iE8qPkKnyyD13JXNBB9XdKhcKW82yz42WrDzJ1KGa",
  "key14": "3rfVDDw6yGAmUEqG63oYSX9DiYnBBeQi3PEy7ayTFJSK8NKFwpPEyszNQNfNrCjkLsJnLBf6MBgmxiEGx6fEwxCm",
  "key15": "58eEKzwLQdKFWyBpsmVtn6NDjuZHwjNcs1A7ozW1BzoDuoKqt3QsytuW4AD7p49KjUs1RH8vvNftaJxQ6YYg5VE8",
  "key16": "5JeHgSaiqYuhERJfK7tj3D66LmqKhwvpK86iovxQmnSQj1dSvoKpw5CTVjPXCsTaGkEL7BSWjeSXChsje4TY7unM",
  "key17": "4No2KEoHvEVbHAqFrGsFxYsbNycm6bYrhsTbpeNYxFo7aYfLv3upop7eMBphvKZiLT6kymMYH7PyEv14TEaVZ8TW",
  "key18": "41pYP1NoJdT1f5AfLCXCxKWgzU7Q9REYVYv9GcAn6xvAMa92pPnHu6Puq9F2PaNQegp65117BdooURUeFow9jNLc",
  "key19": "4rWEcGdGNemWa1yZ6a9ygQSYCMy146GBEoBzxy7sM9eMp9HkZZahEovn6QydnYnnTjbnyWDds2GRNfoBfnXGDWMZ",
  "key20": "3mAdE7Jk5DMWHaRZ9R9ozrirWLCFYSuFArCgxiKqNG7QTfrmVFpqarLYxT7fvUti74FggERUweAp7Z7AFkT7ZGMF",
  "key21": "3gXYtpPqmFci51GnZYbmEPSjgSDUkxysmcBnSzeFY7twtQh65zyYSCDZ3RVrSkAUVZfVwpLBP8sA1MTSdrRfj7N5",
  "key22": "2fY5Ptjoh2NpYARnb5YaWJCnZzns5mSCX99QswG7J4Hbu6HhkqFPDK5MR3McG8GD2z9G1RESzkC39Cnj9VVzSnFf",
  "key23": "2PtAnADgiWiygnz3p4GT9c1kLx1RVNYoWAJifYXdu5rVcmSiGznPwWDgsGJKuyTfomrd12LW7ebKCvpcEhBRwo11",
  "key24": "62jpFv4XgDfNkoafpKCbb35bLs6Z9HS2p9Z4jV532ZyKMQB9HNdsqVfV3kmjvXR3NDqCHARh6aMrHSAf2pGadJk9",
  "key25": "31UCkcJumzsBLgc6ifmjaaPbiP8cXKNDeDpF3FHW6BEoYV83JBQ5pPYMcJKRPv1GEMW6KYU8hDPsCf8r3vcSsfBw",
  "key26": "3HNBMkSptgnfxZYVKfqbwFEP6oJb1A7N8Zqvcd115tRNkzDswcDcLrupt963QRG6yoRBmE8NsFH9pDte2AA26oxV",
  "key27": "353gSTB2zpqrLJ4hhvbCufUNMX6G8HjFPrPFgC3TdGoVZF6kekg1M2WFURhJJZDwPb5rzYa5Xx571Zd5mrr7zKvX",
  "key28": "26yM1BVMN9nksyYSrxY67MArSUuFScAEpCa3szw2nYVNGVqBMuobLnwzc71nUPKhxRcFZc3S2qFjEX96hxVxGSEt",
  "key29": "29MGfDzF1A6fQdjgzGJGBB3SKmDHSr599eicqegtJLdHN8yCXRsDFj4Wj93qH2Ec4AEuyF8ysGwcicvEdpe5YauG",
  "key30": "64mvBSjdX1LGKx5GHcVn29cy4bpYGfrxTENJwS4CHukTBCaTtjhfacVXPasb993DVoMnhFxMhR2wscLtkcpTvDK",
  "key31": "2auzNrKx6Lya6Z9o2DvYD8iMS8BbXXJ1KnVSLakkNw9gGszxAYBogJsffF92ZUe8bs9XQd7eyUfUB4BRjTKwAgF4",
  "key32": "5ub2LiM837u63U7HKFB5quA6usuTzG9bd9Jpz9Xv9xkJRhgzxUmgJGfDugwiR87B9SUJjQ9121WzRKTzsnCw69Q3",
  "key33": "3DDZsRGiFR24d3D8cv3uvcBirN5Ngae7PeQiSJ7k4N7H4SAt7cMUgPrr7ZC7H5JGj962sc5Qr4f9QSY7UmtRkCTb",
  "key34": "3VVC5EWzGfcn6niszonn2QY97fLP1Ku2m4LjHbFyGjCs9P7imzz4RkzBdKcaS6VhWoCjyp4n5QDvrry1tD8LNPNx",
  "key35": "5UQfLuAjPwf9Jdz13R7eCjJsWajC1F7d3ExUMiWrZuCw59nVsXJAW3nRnfkhRFcrpSDjwrQF7XqUofL7xwQVD7gC",
  "key36": "2Dfi8pqXspgNQQRjQ1c486xq7aZnC1AE7BuHwdNjYRb9LYUeesWTte2cKtGLiCuVA4trqUJ3QWfZG4gRjjR7ACJY",
  "key37": "4uacGgbykVLpE91SwCbzE6S18aHK9zXKK3rDPEDV8nt7nrf8ixmZmTuH6oYxXcQWpn59dKTrgujkCeVXH2Ch8ZEb",
  "key38": "4oXEcGWdLrPriwo36vDBERPYUZXgQGQtZn6E4RFmRh3kJ51oA3b3rJz87n7jJFWSvwbjmsphDg94HagRW1seHR7f",
  "key39": "35dE9GVbDmUDtGAnuxiQq3VyhsgMqaxKCRkn7BGLpXngCKh6onSGq4f8oB2CAfBS8UZQrtSgQ7VprZNkrGiaao9m",
  "key40": "2VTqZGfZiEYGyoHFKPC7Vc31n4tkCYt3B916jtKqSm7Ch8AxiWC4jLMKxs5xrx2pMonv5fjNnoGVBRUZ8KkQupFS"
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
