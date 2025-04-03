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
    "5E5Hr6Z24Pniv3wmYfkB2SEi1FHyeEvqoZJtfpX15XqKy7wxYN1cNdQgpxMyDhSFV3qLkvBfUQbHvDJ2TqhgmLTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oK6Wx61QcaMjdY3K442W3N2gTSmBaWUUdy1brqQgRphwvrSa9GinJX38NcbGc4pfNtWZzsLYUMmDZ7DkrXXaFDS",
  "key1": "2aLJb4YH8CB4vAGfMZiqQiLoAiVw796V81TVgrYY5jPLD2FFAXgcMz3s8GYYhi67227jdMNf9vpH4ovj8T8stSXi",
  "key2": "AdvAdxvmyUdwTyPBAiDu1qwYztirMEoXHdSjWtYMYhQeSiWAG5S9U3XqKPMbXyw5HWhz7amHC2oge1NJhxpnJLt",
  "key3": "7qhCxRHUrfpv1QfiBH6K1Hxa9bREx1KVPBCTsXpXCaoibYNCMEpiXUu9tT5YNm7PYzUYXKGYL4SReeKrymBvgLp",
  "key4": "6kLM6p4o7mfL43Pv9poGtaqdJ9e19wY5U4MHNqYKg4axsfX4zmjEB3BcHp5WhWsQSVcbTBNxCAScUYUEtsCNJPS",
  "key5": "hMkc6CGCDWtxTR84AeS24u28qykYWXAA6yD3UzvRjiJfHjNknbVg5dsx3FiazcnPDKE7EJh9ro1KuG3HVhFQ3Gi",
  "key6": "4Ry9QefYeDraXeSbQxCqqoXdMKxrApzzzWuZABPcvC5TbuAptwRJ1WzqgH6e46PDcZK3JarG5eW2z3zYYHH9mKBF",
  "key7": "65oyUJqizquAspZN3nt5RKzzQF9dzsZhvz4ztpZTEywpCqa9PLsuATnvBQDYpcRMTCYBuubjRvZkj9i41z7nju9f",
  "key8": "4SaKiwyeRcoQRyy2hvjewCrxTrhifcSXotBScoctbT2MTwTo51jAi3JCnZaPbmx4AxrSC24uFvXxqgM8WhW2DSuh",
  "key9": "4YepLrMu6EoJpMqAsz1JscoJUVMKdfsUDhugy6sgJMpPacRVwXzFdxioikSy7uDM2EtSAkyfi9wXdgeKbNh3ucCa",
  "key10": "3VdYnRzxK12cSu3JVtYvDmST5FFTTQL8f4J14pcQkHjwy3BqMq1oMddFQsZ9gEahPQaUtjLLHVnUmj9oziTKyfmg",
  "key11": "P5TippqfCht9diCqVoXthRmyqvSXpegp4zkG2uT4V1pW7dC9zuMXX4MzW4EEyngzbCbnvRV9Dw671DZKwr9EnoE",
  "key12": "2Cbtb5Vvjyw94Zf8Nfq4zQ2N7vzK7wsdTW2WCBdcThx4meEFfaAHVHqz2LCUnfwWpVs5Su3zSrhtbrBtzfSRdnat",
  "key13": "3dHsuPbHdAtW1nWhx8iFc1XGdQwfcQ9F9ULCa2moHLEYWfvVvacXX925hbveMLzht4eJhXyQhNs8W17XfQ46VE8x",
  "key14": "BmNTvciLw2CigUGVUQGE6Hnut2SU5xatd3HqT3ZPkUMuTBHwJdwC97NcScZpj1KMfhwjdJHHLVzhE3SPhmKnhwk",
  "key15": "3FQivwcn1TorZyzeQjMkD7BatUj2G8Wo2CRLYtvXsRfhtqEuNJohgjWfHbH17GSq9MPwg1MxQHyhGG3LW2ikGbob",
  "key16": "5Fn1yap2QC1CJeArq5nwCJkiXVVEcyvb2NqJFb8YEgpT5TNDQB2ULHn7K1137frd3fiU7xzfN69fmsmze4TcZfnf",
  "key17": "62Z6F3jjqWStFSSBFSaC7ExMn426t521eEu1i6edkFSZwj2YZyX8mhHzZ2YmVhH8Edn1sNjLMrYbtL2Y29rebDNh",
  "key18": "4965fjrpm7y4w615bbNTrBFaqMen4EJQjCUNqHDBjwfsxGZaACG4Y3m68a1je3xbgCAmJMehVzde46g2BWWxogCG",
  "key19": "PumaFKSXLb9QqFRJ32yPJRrGTh6JCjDjioyFTUkxusmn47cDdVivsWQtj8bgu4FT9XWnFSui7w7nLgwHNHHjFff",
  "key20": "4nxciD5FgRsZGNGvv8fqkno6qJxEgcZg95KhpeBihsJbVyiGB81zXxGEmiPVd99iRkcUJP5J2yVd6uoEKseZUSVZ",
  "key21": "3Q5ZUEy7iZBR7UoeKRGYaoZNM4fCTN9X6Kiadr7mExtpbbXxy1dPD6SKLkPZPm18bL4EqJYDzEZvfBCqAHbabG5M",
  "key22": "4WDAPmkjLhvektgPfcnZF74EWCgQ7k5ZFDv7HFJup4PbQFB4nqPkAwdezFf4gaGJJpVvn8KkngEwtQ9eXXdJsJF3",
  "key23": "72zH3BfEqFkAgVEBvXEspMDSgQnqEHLttYfhVTaekewDaKNt9GBYoxWk5awR4HScsMS9eyBiEXghs4qwUsFDhEB",
  "key24": "3iVob8a4crQX5PfxSrYrUZQJsEY2i5keebC6KunQyNSBoKh9GU3j9qNEuGGMdNmpL7PfzF1KWVdqUdk43B31S1fr",
  "key25": "2wpfCPiMRb3TcsNy3USDfYLEbK7tUiV3NMMf1Lkup36b4SihQAUf6ACDNUb5gCjyhNPehzkXf7HH6yEZjJkvncfv",
  "key26": "3AgKZdqqyLretTmAzJ5hojZiqVsV34vZuTPBCyDC3t4oV19HeUJXpECejD8ZtFTUqPvAWBNGqyNni5hZXG6jJLio",
  "key27": "4pMFGgLSogceDggPW8wLtguVhj8ZgRRVpM4ewGHpG2WwFiVLNgc16sBjVwo9B3avSQQQpywaWrT993SDPFGxmeE3",
  "key28": "5SAzTXBtwh7oMYvPggJsUReNXpUTu7XzHxWFW9rAgSmPS42cp8jxUh1oxYjLPDaZ7vbEwQ688JD8DFfKEGnEz1gD",
  "key29": "4xQUPYbXjV4ryu9tv3QUmWLAAC6YxtZZimXm47x1t66UPPo9YJBxw6YPdQ4w85xA3K9KWH46tJNHPyYFG9Rqxjp3",
  "key30": "4jYr9YDUTeTexMivUpffbZ5rTRcRBAsvBb2MsiPkNnzdiT1RRfVPKtGth6sTsHhu2J4toAnc2qi5cmkit6UL6XCx",
  "key31": "61kp7X3R8iiwf329CjZiNLb7nhwCDPphfHqFDf9WnboJK33NDSk71wLVQzH4ZDnFQuBWvd46r6G4T3ds37FYPmko",
  "key32": "4rXyhwNuPAqbD7dn2WmrpUSDHSdXqHEqfnT5ncKcyAXF3mfyMLWsWjMXCiAz6QJNgjqAVeY5oRkkpqasM25yJVQs",
  "key33": "5U9qMhPwiPPZTbxWuZfVYKxbBW7LmoBtgrCrkkwWojo6n8Wz1D2e7mFCKjyxVQgZ5onVLatVE9syLbUCi6oRiuun",
  "key34": "4NVV4TF73TmqmhQAC7QkXgBoMTQRugxPTGg5QkEBqFpH5BGidfJW2d7Cz3qxwBBSKTXAvtRzDxeET4n4KXG1S1of",
  "key35": "2dAViUsFEzd9WLguD3wrXvjLhYWBc1T6KDwA3Y6RYHhcBFoW3g2zXgLq17V7ehZjQMxWVSTDN4q9vqmuYcQSh7Lj",
  "key36": "3sXd8gQm7kebqZmCtsavDBrcuYyyanN2M44VgjJwU95rH6JtghupwSe1t2kqQMAu3etRgS3jjax2uBo18zF13Nqs",
  "key37": "3t6Zyt1FwwTbRyumULzwicoSJNLMceLAE2QXx7uZEHoTN9Fx7RqmbxzyyJht9ZxU73gMFrDPYqQddf1W6NoPcjhP",
  "key38": "4y7unELTgYv8LG5bs3ReBtLCNZqr4eMb17KHAL5y1sPedG91sgjYYLocLLvBAygHL9VVvvDZPa73zYgMLQ8sDQq",
  "key39": "f7CWzmH1NFdHmg28cgojGM7itzdFLnvQxSY1UDgnhZqbYfGLv4yECqsPGAWuvzdjiNc8U5qEZjsCqTPBv5CGLeC",
  "key40": "63Ti6AY95yoTvfM3CSoK2frSA2KcTBCHvdkaj7VzSWmq7YpUv7ZLhvwQxyUPB84uoNt62Jow8V9iUwuq9UevYe18",
  "key41": "4gUwzD1Jv6bxWdAdxSoWnrZu1tp1NY9cWvTVWYkMLsikaoqWN2exeH19zJL7gTtmdBYMM8X6Z4M8jE8mvW4MnLAH",
  "key42": "5mA9FL8aCxVumfb2or88DjdMiLEw8a67cjX6a6wpQXnpXBzWXDjeU9mRsSEy9nT8jMgYnWU1jnJLMKH4guY3M76X",
  "key43": "5nhza9kQvZTYFhcUdAyxVUHCGwSua8kvCrXtnGwEZNB5WDXewgSpx78kR9xjJu2GafNkAkxAHPzVwQLa5JCQDWti",
  "key44": "2gnzcNzchDb2QMTD7ryugxcqMTt1wXQhCBRzm4ctB8tZAJtKqtpD1cGCfvEcTthGnsD4pV4qkNMgBGcvDdDH73ZN",
  "key45": "3LF2fKbgQTjegsQ9R3HK7Buf4q8ifRH5jJ2FnC1jE3YBRz3mcHzhibcuYhaDJuRhdHr2T9aUhpqMKrFbnga8R2Pb",
  "key46": "5w9dxj5zXEmZQFGhWvhLvpmw9paXg5GWpb41iQyB9wbDbKpgqQZQ8icvvehWcBRcsXBQaiP5iFwmwN8dw9CKYLtJ"
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
