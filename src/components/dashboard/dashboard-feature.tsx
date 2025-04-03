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
    "5cHiJNQTMUfjAr7cRDTFm342HqK4sKG6as71Bckab1TrygsnnWJVtfh1QqMCDArTx697C99RE9wg89CodNvNbKUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25275s1mR8nuwwrLpqWiFPR4hMpAbezNmbHQEVpwz2cPRL5nqNivnDV4YrFRB7GC7zBAopFrNQYztr2qyRZKq6w4",
  "key1": "3eZBRkiyZP3hQeXk4ZeoeGygLKBRxjCqVoFdnVYERx6HKy6xrwQgTdz27qQgpUE88mhW5o4FBXHw2buPzy9HGCDr",
  "key2": "2F4TkwPibpZokbiGEpkut4DJYLHnqN6o7JZazjNBd2U2UXbzSUKgX1X25VACeH5jjoVBHAawU5Ps1mdP8owA7PHH",
  "key3": "2rZzX5m3vzPPd6mBzEC7YsTLMWbLrUF4cpwMDb9cx97sitwonGTEVJ549SRuRF79BRnFfsfDjVDdSfQ6MN78FKPU",
  "key4": "393Wheb5S4LSWd66DbNWY5iMSePHmRXXvUhaReHHss8rFDFV6BKFqmS7m2AzyA5S2fPTDrFJ6cQBHGWiRChU6F5K",
  "key5": "4RoS1prDF9KUiAPGBymQbM4jYXoZtNNUdUQDc5G8VmYujuKqUgN29eJNYUNoyP76FfQVTap8D1bVhp6hLUrmJbZM",
  "key6": "4kNMj5v5Xn9cFGe4fBALzs1pp86TM5wFCVMMCdwvy9pXJYhkzLm8PtdFdr45WgvoC7Rp3qC4KUGpPiQGYMHTvZjo",
  "key7": "pLMyXSP92ub6zPfbApb5BT4SET92wKMktUarnPZRka1wYsujWeVZLFfDXGAdSMYVaYuJPJ4Y8sLUDb2dfU2eVwe",
  "key8": "5tbBJrE5uaQzVmyntzfctaYhPogz4fG3Y53n4vRRaTTjawk1vJsBDqhCAYpvWExVG9BgXZAS3Lr1nGyV6rGUtD1v",
  "key9": "42KhEpvLzH2buc1phazSYeUPtpsM4YKsAw2aDXUJevxwFwe4nUXXtoaCBUZ9YKeiYaFhbbxTFdxU3uh6Hs5hHGL2",
  "key10": "2tU6yseRMEvJXJ5eutFQRe6PKj26UZEAWgvr2y2A2HJems1arycx62ocA267xP5QD7Gz4TURTmnRYi7pi29JLtt2",
  "key11": "5R4wgsEUTE6Q5NroBBMSzigCycRokKkMcG6Xy6SKZA3SA1vr9kJSaVNePiyn8AL4B3oMAr3PzGRg1wj8ShQN1PvF",
  "key12": "2ySBMjKNigmLDBqGZtQm5Xp9vCF4CJ6nuvirKmJvs9Be8x3QXwUma7A1ynrvjJBpcwPZDKT1Sub8QtuvWp7fFiHy",
  "key13": "2LizRaEpzsL4uXBLNKWePov23jdybgPyZDmQRac6ET7jnuTWvvepPHBDcRk4XHbysrwiKeAt5rZtVRMEB1rhs8Td",
  "key14": "3pfmEnHhk4Gwn39kjCUfYr59E5Vgkm9hqDgd5gcJrmjmBYMdkxpTnCAB4n52MG1s2ao3xCMrtn4nowHCV6SYTsRp",
  "key15": "5HMcNQKJgdSNBE3bGdYEk8ukyhSkiy9HdEPJu1EMGMCiobbvN4jvWzGs5vxYtwURzsRFvpJ9gFuBnsGdT4GyqQmd",
  "key16": "5KpqnVLsErAUtWgxyP851A6ag9ybwPEYbkAE6JvGBKb8fru4P8U5F4GCKmKLhJAjR4kgVzGJayhUcQGTzr4UefKm",
  "key17": "MJSa6DWC4vE6B2YNYLsgpwKKz4wtjWPiFmM9rdtBhkUgEtkrieNK9sihtGkr7nTzKbxJuhNGbkjybcZ3cJCVMsM",
  "key18": "3sSbzuRiHrCgX3CLsuGuPesc3jJxLKZdPHGcPRcYsL7eLPRwAWh1LxYcspuENynLorAAxhASRxYH7djXoT4VW3Jb",
  "key19": "65NaZx6uBgu3RdC8A7gJEuegTNGjgt6SZWDMCrQw1dJ6s3Zpxs2kSNExadzfeeWvMfXuTHk7sQYrRAkLRM9LCEbH",
  "key20": "37x7gTaL31KVMUYd6WHUZwoCr7kPwVHkm8McUvVBreRZ97regjMzDiALfg3XEgw8jMCXjQNyP3TjbPNiYRLYZaG6",
  "key21": "5FsUqtyD32Dw5cEjtXq1ztx1xspuR42sZP4PC7REmWmMws6ZpVWNtrGCTivKs1kHX2NCya78cEMnT69RR3ZpQ2x9",
  "key22": "4dtFYjhAupjgmp3CPRzfe8AhXiVTYBmD6b3WiJNYt6KhYTAxL9VWt7y4y3isaqCRXC2efxmrh9YkJwHC8vXnuiQk",
  "key23": "3euoJ2yRvCTusy3ByNeZ4FiTLnECQDMsyURGnJdZo9Ba3V9ZGyQnkZ61eZ8CNDuzp14sDafDCzGL4PeedPqMFhN",
  "key24": "4P2m4N3QpUxQHgpHSa1dYeV5XMtN2meMom8QRZpmA3ZHMUfMQ4dnZZC5BR1n1PZMdS3YkihpKoXwqxt1BL99wrVy",
  "key25": "3TamEnsKHrzj8p8owUDE99sULEpLtZosphSZamy1a8NhpuzL8TJnBjJgS4NyPCaWejT4C8hH7vd7E1VJgQVzBgoT",
  "key26": "peZ9ATXiAWRS88tkEj7VDDZyRShapxoE9oikQrCdXzNmC2wm8Hb38eKG5zYkGe9nRib9DdpezxWrMN8rrvwWZSA",
  "key27": "5mHSKvWK17DuuZxHBw4yBTkPiFXss1YKENamhFcGaNVEeb2T1YTAEUYkz6zyV9VpN2avMLu43xmRM4atKA53xfdZ",
  "key28": "3AmLYer8SpGFheakHfEGSJHjysGbiu5JsGdfMRumGoeYMWaAhZneKYQesbmv3SMCVvwr1CNxZKcmmZW7CR3RyM6s",
  "key29": "5quGKohhqP1PQNAHVMLYiTecCsREVB6wBLvEMekqPSSNdRU9b6uAZSAaVPLRSnxYyLPqQHZP2B26bro7uFm6FMJi",
  "key30": "2RZo9MWp7jbACZeiDtP4W1sCo6aTY8wM1w3brbHstnXkLNbG5SQBUgWTDswqJVfWeX7Zbq825BDqcE8Wdds3itoZ",
  "key31": "3Z2uAadmwnp6bc5nUvdi9NUgKW7JpgXCDgH6e6m8D6D67MokP9uewgFG3cjFYg3JWVxkkR8vDLuRNf31z8MmpJxj",
  "key32": "u8GMipLEKnrRsaYtSSGJ1tr5KphFTEs3pxeZJty5QQ1RsQU9PsdHn8EJEfEwRH2WnpWGzgXjgL2wadser4UxEf8",
  "key33": "3cZg3zYmawzaNyvUKAFybSvp4xNkkUkSpkbYucUmTUNMi36YDw5KohpvAKnmtMmEDrbbZbDz6ygHejwhJmESXkLz",
  "key34": "2d1BAFZQmcNAyxMiGrvtw5gFceokFK1NB14kUwvuaRCekjumjnLxkYnt5fhyWtoFtqjcuvqTrhN1pN93FjpF1Zxs",
  "key35": "2vC4ersWnyrZjwfmxaXnZ1kBmuwWAdEtY6sQiESgxjUg7ZyCzzfvodprtz7fRFVKvC79SJ7zenoYAhJfSQmKToan",
  "key36": "kabFEQLuKLHmx8fTvsf8i52zvmJZwLyTwMnYMMuTWt91aQ4nUE6xRhBfkdxyX9PxkJ4p1WW6rWDJRCzaFTMJaWk",
  "key37": "n7C2773egKpYbME4dST5MgjTym4bUYiqP6CShhe25z6Ye3NPWKsqCxnYiPfgqhC4QYE4n6766b9Lae4wh9nQfeF",
  "key38": "273z45U3BGoxTYRt9vKsotKSmGXY3p7H2E5GfxeuXgWPQ3HT2rgdU3wCmJLFy1dRjaciLiVNSJSF5FaSVmyu6yfN",
  "key39": "3e3ybkMymBic8yTUY6qLNfJDks5Tznd1GqvKFMUSaREVjZKFpWR3wLhuH6etuKLy4A7i6ZusEbrFWbnxK1WJDPLi",
  "key40": "2gX1ZsTcc3MZVsbHfJYdEXUPJ1eWHnzQPc3tfNjpwTzT5gyuKEcWwxseKNJUfhhC6Q538ifVaiMMwcUTc9fRLfCo",
  "key41": "2CEiZ9PUPqsiTdftPvWjGUjQ699t1xaSJnYtHoAtxHv8N29dBcyQrWVYB5G3TQsJ9PfDD9TnZoAidHTEj6SQmLxG",
  "key42": "4gDT5ANCvjFNDfoMVNvPodqKAiDR3ZUQaSyCCtt9Xk5cVbgb8af2oCVbjjWREKDjuFR8Jk8bNtizaXaQB4nNbuZ4",
  "key43": "5qnFex2r8iwxbUdHrdtnHcfuxbsAAZ7WM5xuUUYHzWizsFYvMhNNTyJb1uL6gWQwdezWoP3QrU624rfdM23uZznd",
  "key44": "4c3wjkSb9jqMTYVjQHQ7643ejG9YXdCx3dsMZgRsbURVtc8YWhvPk4ruZjD1g4VXVud9sMSp4UPhn5wYV4YHe6vn",
  "key45": "4Hb3ttiouHgvLVBmFUMEhr7zBtTmjqAdHXUwfxGr6sZkcjRmoucFf2tVpPHSPwZS6eTRHZEh13GMGHmMSxDmS5hK",
  "key46": "3guNwkCYcQSVx3DJDsJviqqhMVFxnvrdDAfLUSDHSVxhsQaGNv486WmbZugjBWSw4wUwCeRqgRkmFa97TpVcMrP9",
  "key47": "5MMz4mBqGquLyRU8etNeJy2waTQLNcEQ6K9d2gZ3hKaSVWh6DG5ru2PfDoUCBP9GYeBp5WpgByiDxRcLbdJ13g66",
  "key48": "34b1ii4XYum2qR3Fy7867gQJMZhfCVLL4uNUmzgwcB2sus2ZYu5QyiJ9q6JZ6u8pBocpVtb7N9py7A5VkhtVzYpx"
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
