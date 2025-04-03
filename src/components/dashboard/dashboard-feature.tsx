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
    "yXDe8TiY6eVnQ5836HZe7ppUi5QQcUHEUKggpaMUSNeqqo3HZBscLe3baeWbJk1gRZBTodZ3mPkLJ99XYF8e7js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wYNPPvSxnYePjNxWD1dmxLH52vvKFbh6mTvBRbZ7pbXZXdDYKfB8hhZE4Y5HM1HBiEYdN7MRdLnB7QhKXwfU1P",
  "key1": "3ZD4BeRYQggbuMieawP3SGEwr46zRrAEuPL2FvUh5JdggpisZ9mk1wjpQFTVrDRzD4pn7oZf8B4F2zzhTqXmpFch",
  "key2": "Xe4yAj9qhHTQTqjLbiXjkBGw8fMPaK9QsUWHaT19eE44ZfV8vVjW2T9T1ApzktunWtbmryKVp7Mjf7QrCTGce5f",
  "key3": "5pCvUXtfaChitLvj6hN5FLXQvPowiAvDyQQrNBpfL4ytCnUkJBb8sTM2BXyCNz2PfryxNVrmVQE3dx6XEzifMk1o",
  "key4": "2r3r8CoX89eik4x8AKrwTgiJpSAttdKeZ8dZ3s7JpS7G8pMUmz4mNAKFFQGvwcrpWDKCWdrpvER4gfDrzJPNaDn",
  "key5": "3fxxBNBXpbYZ57eHPyynaKENXy1EaUY2udcnobs3A7MeCam5Z3GSMA6ZSVJ57xt1Zhyc2hfCrAoaNuP7HbxjyQSH",
  "key6": "3VPbpjTVBAL4sDkuNRFaqiGjax1hTUFEF5TedWJ5atQmo28XmKNLvNvmbxeUvM577PTaMfiowo14zaLNTT43518U",
  "key7": "4d6wKVyi1uCsCSQUFxDnrjdZTr9HMmVwt3RaZs73NQFnfNDT7RwckY2ZfRh1nAJXZz8Uarwcz7AHj3a7Qyn4RKe3",
  "key8": "YTCp8nX9cF3VjmeQ2w45ZL5xMRadokPc9kvDYD5Drh11fwDNHG57zBvanvz4ffwrQmmxzHZ1Z2NTXfKupE5yYD3",
  "key9": "2EagbMS5jUKeZMxJeqwboXNfzMBkqgxKVFxovumDhqSX4sZZaGYWfmf5GTT8Q9KzG4zQSDgyMJuM4Y1jtJ3jLiKG",
  "key10": "5zUKf4JC93SxKYTe99XNsCibnbxB8ZvswYkarqrBqLgE39bYY7HUikf4GtNg5d6xHHmEMQEGCqiiTbUAUJM6Qxtj",
  "key11": "2YQxkYZhbb4578VFHjUn6xr2pADyD7j5drGsbg984pgvzLw8hUSmmh7HxDZxXJrdVZCMTsiT3YdGmUeAKi8U5bR1",
  "key12": "5pYTQViHx376ocrzMYUCmaaTvJRsQJu2oS7CYc2eaS4iUBAmrc5HZuDLDj1wWkGYGov647QgYsjFHsfpTLP5tSv",
  "key13": "2e15Pi8LXdRHWs4E6cMniUJeuVTYWg1rAxhwMrUAvrEvmpG2NmShTJAA2WBRCi7TvePDamxyKX6wxZcteFV2dkDy",
  "key14": "2ShkjWLJcGDaRznRFWuQshcSCHNiMGTZR3H59p2V4rx173WojWfqXYGn2rxNUB4oPQpRPw5F78LpV6NkahRkpaY1",
  "key15": "3kNvSDoW9w7pwtYBB7EdnuKh6xXmry4cUaYDZHz7djBrF1N9wEikEzyAqWYTEYGvSMzhTd78hamEnPgyuvqP4o4V",
  "key16": "3Vaz1oQx2VUQwAB5jRC2mjysovmB66ADtu4oNDzWBQDnvLnedK8pNLN1SkxBHyaYRGwxGbh6rdda3c6pxGq5KeQz",
  "key17": "5eZwi9Yphdn32DHCmrb6K5A5L7RqnepPhbCFJjUAur8JBeHQsv7gGBpg4trzffuvAXoQoboqFXj8xCCzfcLkbuUr",
  "key18": "5pieaXHrCxW3HHrAucxEZtFPQHVMeybLUCRrhjMAd4DAp9CefEGdMY5mh2HdCz7i1bn42xfwNVdmZjTFjGr7YPao",
  "key19": "5a4SB6o4Bttdefq7GQHusMG7pLVsquJYePV2LKVLwLzU3yKYnM9vT29iKU5p7mcgqGKgVzMysrAz17uBSe5YUFck",
  "key20": "82Pu9saphxtq53M44dLWNxT8xZhTLaLT7jhGEtRLCRf4xMTo4MrZ1bPdX9ZbCbiJZAxXhLG3XpxeKoV2Y9yTEF3",
  "key21": "5j2pzqYR9U6RtB6C3jicHHBZCad18ULSZ3Wx6Uyb2LKocC1G15gqTDUB6FDkq787zQDR74MGHtRXeTWwJeubDNBK",
  "key22": "38JyrRyR64MZfnTrtykiPxfobrdaMvag9Gb7LZrmV3YhMeuWbUUQxPS1vimrxgEZ94bsQjU4dwd9uMEQsgZKLc6A",
  "key23": "48xwe7A1qYgBrMYZ7nfL4ZhDk1xzKxetg4nEbdD2D13dRfu9DbqQxa82U5PcbmvuNQn3AjpTK5qM9oZgwqpift3s",
  "key24": "X6GtD9PXmuY9UzcD25g9ztMJUvMbSyHh9PgWHwDjraV8JCfFG8LSQERpStYLqNgAidCeNiHVJHc7nrzT8CGZrHL",
  "key25": "wz21LzVPonbvQa1TNDDW5ybg3QKCDTjXkeJ1VPwLbmu24rBYHuFHN5Qn3byBHiNupf6tm3fyhm1VzeLS4X98SXi",
  "key26": "3FWeEknfRAxJHVUvaq9fcAsP4sqtGKW5j4NhvgnZEFxc322NgZnEjusdYF1LwP7d1wHgq36qXLWg1E5g3Kkkfq1o",
  "key27": "4jz4TLvxK1jnqgA5XP1oSwKi7Jq9BRfN1EC7CmXRZaKsNDzhibfKNmnTT7TSvdzkdvANnNVbhBXXRGhM9tyLRS6Z",
  "key28": "5BP41evmh5bDKMFJfJEp3DmTHdAduJwj9Gq6XATPCjWb4DRn8YDmQAkHKKr5R57EPxRXwpmSLPsadWjLPiaJdAoq",
  "key29": "4hL8TZVppdbK1jfhb2qH57dyBCk81aK9j23iXiSdsskrqfRL17MPSm1VVB6BeD6iLqnuHQJYNn8a8f2V4TKTsa6Y",
  "key30": "3HRW66PUpVTKkktSxqMBubzWyudZeHMEBJv4jmwdM6gBAvQYL3rqZ51Mn7va8Ly2nJJMdY7RdLeokhHLECc6j9jB",
  "key31": "5Jt2Lr3rG878cwrYjesVquQvnbkcUZZFESyHDEh5oYk9QB4xJRYQEjZNnutJ37DAd66kaoL8HgYB5yx14aPzQdge",
  "key32": "2GwWDjreNCHq5GuSpw8uSRQBf6DCzPyAzZPgh6MAQC765aPkdG4U58nSyXXSukN9DVVoXRDaqfKQTNciyUdGX4sN",
  "key33": "st6HqpJtBcuFCJSWChUB3SE7j4hjGvCjte1moveQTDcVX6joHDqxFdxCFq2db2GNPVzfXqDyweA6jdUoYQE9EJC",
  "key34": "3pAwp2kSijnM5ryC7u1d1jHSCJicSZAYtr9XRDfgpV39J4yhX2yrpCzJSL3tXJWFegZQDAXz9Aywb8amagt97nYe",
  "key35": "bdc3cmEEmkhpZjfsfxRb38iz25acvBe4CKqMzM5zpvw1h6kUSZmKAZxAHBbJTfz8QQk8a2X7MdsCLGehY5PTy4z",
  "key36": "p2zHY2ccTcmaRhs9BXHA9JACvP22rR6FfnSjJ8ESfow1si6NxPJh1SDhjM8GrK4qmcFBdnjrVZmNgLn14pRBDPM",
  "key37": "3Ny1vww6iczWkrSeKEYq7yrnadR7i5v5Hi1wXzx5MT7qC2qEhank8NhBvZebCpPPiAUwmEjELyvZ8EM27EKnXR6M",
  "key38": "4sNCKE67daLnZJiNrc61akDASHeYX4Sz9fXMB7RMSvGzmiUWPfZZ3fPQQZoAv78oAZruodX4C8ApKgurZ7PE9HiG",
  "key39": "49q7bFBCAZmu8wYDq8xHBD4orPhPkYZpQfmECQDagiRU9UVMBuwmcR5YnR4sZhX4upT23akoapwXbbm1W2MWX2mn",
  "key40": "62N616xvjZiMKWzLBabxgGbJYmNo3vYafFjAZoUX5qi4NCWUiWpsWm1mzwkT2AZW5DTgfEt4a8E2cw3ohYnK3UyN",
  "key41": "3qGqGRZxhs1D239f2p2EV2HN2HtMiUWfZauy4fxsHj4pM5LFkj3Wfo4e3vSo3Y8s4QSGwcZbjy5ZNvDGwCxxcHBB",
  "key42": "2vXVreeYUj14rdaKULcQGq9Bi2AFyJk4t2eMn9FRfhk2pUsT2SbQAaHoxbiwesgbe4LTg2zbHngr5uYw3zt9tqub",
  "key43": "387dyw1PuoQWamkQcavxvD46N4DDgFQryGksimGSeMyEiaioVav7VDLcqeaCu168nHmDss1cR5qe7xf3TYTbmhfh"
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
