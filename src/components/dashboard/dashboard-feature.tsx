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
    "4ujV7vdvmKfejbM1cVjemRhU3YVmajkYRAXyW8aQBSZDNt8KunZmPhMJHq5mu6zQSSuDu4aYVhMZFstYiUCozkHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4up5Cvdc1dtKpih5dwkG5wc3CQhVxiTgjNGvqmNcgN3XDKSHTK7pwYXaeDTvsH3vpGhD4y87pH5TbgZAn1Jrgo3g",
  "key1": "4EqvPyWmK3FQZ9MEdAP4mi9ZmSGf65pHr3Dj8S9WDog6zz5RyMaBUJYD7mctwxZs47dvEkNCyZpALART5Kcby9SH",
  "key2": "2iSNJ4dqcLDp9ysXdtGMNf2j6t9rSf5vKM4m675HrAwXrc3DkvSe8JeTA39cMK9kQZLwZU4RKSfywsAHGiWjb9TM",
  "key3": "2mHtH99s3ffEGDmDuJysRSniQjNakCsXcvo76VXpY7rNsMthr5We6f6HJGF4H2GGdfEvoRLwfcK4zzkN7DQTgFjn",
  "key4": "SgSjvJoU8wqrMH6STCyEXwzVcNT5fJsc8gDAgutSFHKcQ7vYx9wqmTrCnH6wLfPjpkCnAP3oGAXAfxx5D8b5wmW",
  "key5": "5vNTNGUDFqrpyoZ46JxSY5co6wEku7NTvbJGc18EW2ySCLobeHws9TaxnypBZJHwyA4dYQgVeEzvg72Az7jDSTBf",
  "key6": "AqMPGrzDoQEwXJSR1CyPDz3GZWhSFafV89eWC84nq94Xvnc4qrhL7YcRDacSUGQUub8EyzFQtxNMihNhU3xuts4",
  "key7": "3FemNbXSGHRS2Fkw1BrQAgr2rTGXh4JtVWaFEXEBPPymaxk5m9EM8ubaN9fDJTEuC7YNVdkjV6i8bAVs6CK2SK4o",
  "key8": "4ZsQiFPypKbDb1CGthgMq2BL32AQacypwpK3ApDFHko5vBKvvSLK1u4RjV56D9j4Y8avokgm1AjKvR6v2rurHzkP",
  "key9": "4fhRDMCcGs7YxnfidTHNuNT1kQvqgJYtyGL3MAohQVgKFMw8z3zepafFiqwzAjjHx2CAELiSQ4JZ4k7GVYGv9QiP",
  "key10": "2YePeEcJLxBatcBPo5AyfctQoXzkbkJ8U8MNYZyukJCGtYtprf9RmimA9HaTCoMV3Lkmz3zrxkWFvaW1U74CXrK",
  "key11": "RDDMFKUFhJWFymqrnxtaLkfik3m18itiKRJS68fUdMcjMxQQYADFVqpsh1ymnT9GX8HzbYkqN6mpZAgntZeANBo",
  "key12": "JmGWVJ95SK1vFAMvvTPGqyQXKRF8hurdtMbkdNeXfwVZTQ3U63aNGpgyDriTaA7tvVQhyqCZkbSh1mtHADaqBuU",
  "key13": "t1FQTe2fSjkmssRxmrJLDQgXniNsKXkxroWNhPqg935D2WNAW5Sd2U3bZ8LcJyyWcvUxQcb3dBjz7q5R55X3Cmu",
  "key14": "52so7eVnhzmtpyd7Eh9TGFVLrEVc6x3bAtG3W5ufNPGjNHCbHoFxLoqrU66zg482AHCZKuSLqF2e5LLKt8rYJWPL",
  "key15": "5s4HA11Z5nCNfDJrDZJBoq77dsqPSZyp8dkZAcDhDdDC8E5NEPbjUaDrSfnAh1ZgdK1zzQRGziBZxBYKUG7qNkuZ",
  "key16": "3VTb7BK6s39L2kjAG7yFRdBaJCALuMwhEReN9SVCzafDBPEuJ8Sd83a99nCL788S2FHyoVUeKWU6zCTxo5CgtRr5",
  "key17": "5SmGED2HW9bo8aT9czoyN8Yq711fJduwtiBuDjWJ7RRCrnWS7JaWyGthZW1ndYBrTxRX5A1RCBJpeTRW4whNBjEX",
  "key18": "3NNnEwKKw1NYFCwJNciXgH9HxRJjjNvoEp2PmqkAq2Yn9y8vvZPofwpgJC8NEnq63WoMArPCKRr1gKJqWBAk3PL6",
  "key19": "5vWpNBxv4jtDE9Xz9r6WEAiieiVZhWDmEFEASGwtZnD7Q1TpCzE5bDUWz76fMCssKL7e5rSpk4DSNufVJaTyQHuM",
  "key20": "3QoEBwdZAtMSLhxPeukn5EmBHncsXbVtrLiwj3xFJnNKro1vHZDyb2scHWfVJkAeD7EbNtqxUSoQopviDgc4iK7Q",
  "key21": "2GEZ6nmzjLWhdWyFiUKR84bchQjEwgwfbYj94R2TSMpLAtSY8yYiiQcJwoeAdx76T6uL1p3dCj7SCe9cf2gxzAk7",
  "key22": "66JhD7Tywj12udwNFHf631TZ5XRM4oiR6c5SCxh7VDvavCmLb7Kacep6EPjgJDUgi64Y1UioHbHUepQKwAFcRzky",
  "key23": "2YE9xR7TTfk2v5zQPU5gSjUfuWC7dSHTeTZddinWAGZWTFSuaxMgQfkdxKR94sfNV6NRrmNp2Uzb3JGUrnkfmVNY",
  "key24": "UGyeLtrYf9vVbcpQwfZeGoGMyGg8GrjwhmhaQe3LPuYsLwP5d8d1LhQEpjgyC8qQXakBXoNo8q75UGM9ZMhmiMD",
  "key25": "2bXummjjYxJdeRvjPSuC71NBQHBjZ7MJUyxzjcqEVsDK3zGD8eafXAc2Pt1cQoNX84bA9ZTSxbcMnv6LH73DkhHW",
  "key26": "nQ7juArdjBiVGrzLB5E7jbDj4JbLfoHf32HkvnSTrfzuDK3pTSn7M9K91B685hECQkyvnW1jdhQDwLy5Qcumhzh",
  "key27": "aXjujie8dFgkPSoVwFJfjHGwvNyEAT5gJjieMweBjMeVRWRVQXAzEmrA9JC4d5psFZAucRM5tdLFQEQpSmuEH9W",
  "key28": "45QBVH8sVWRqBxPZq7WwXfUrgUNWnNXUD4m8UwC7xX28gRYZgWKuES7KGirtLkH9CR9R3xTEqi7xBdF2oABM8gk2",
  "key29": "BJX2HZT722UXF8m7RXBs3aga9M22qPpsvhsmtZ5Zu81QTPfPJYPsBD2akPA8PzaA2G1n8QjZUGP53xSBc284aFD",
  "key30": "21gRunyxUeiyk9kygiPgpkxxqaFXrD3Wp4SZNCyuLL6ZWNAzUPeK8hHazmoUU2NFsV7JVGGSSE5fdAYcMRSwjj6T",
  "key31": "5kqdLtuTz3DAPs2YdUHDYof6zUWtx5AuN6WXiFGAgxXC1tQCvoEPfSFT9ExHrd6NJTSkcGCQSKVVC6PCv4XEPmjj",
  "key32": "mojaNtDCpNgpfXXukFR3apxBrRbXJt4Brb37pfCFnVxqmbqB4zQePjbzrQRq7RmGyJ3WkpWQBEPwZ8Parme7q8p",
  "key33": "4cbkiqZ2C83j2T8JWe1iSpWLdPnzbDkuWDrxaEDRNGXKY8ATwURNvxSCmS5TenTJUUY4Tj9frM1fnPTrUD7WQxuG",
  "key34": "t2tS4cM83bsr7XMZtu5NaUfgm5Z9GSuCpUHoxfEsdwnLR6jRWYpxg433F3gfrYpyu9nHi45Gt1VzUqJkjsB81fX",
  "key35": "3YBvNXMbUsfuZ3SC8CtW9qVjG6VgK84se9iFrpJxYWo8DBkKUeSbZPkSPUntWToyeH6JWGff5jsJP8Uzr3M7Rtty",
  "key36": "4F7rXLGZ3QGvVg7tSQ63wznRubf5hrC721RZJvFu5TZpF8ocYsc159L4Qv7pz5hRSdyXKRk7nTXtzzFhDwaiRJ1q",
  "key37": "vS7fR7oChRfHh7QDVXfvu3Q5HGFvcNoGKDaRT2rmwDermxiVUmYBMSHpWfoyPVsCkJqLz3M3tWnqaF3Vn8CaXMG",
  "key38": "3aPoHDJoWGRps3FDxsA9L4FDe9HM16icKmv2UGh6LSrteWesfBoatTDK41eJEs8Txjd3uUeEG9GqFixXCEzARixq",
  "key39": "54GpHiwtiAd81EmgzLYuBEUGXN5kNQ3TUTCyN3kxTFtiFuzeWGhyVjWesNAjAED3g8xMzbEiC82yyZEBxVbVG9Hb",
  "key40": "3NEjKM4BJF9zSi1V7NVduPkwQNHrQkmKeA11qjzWsj2cEbQuSAC8fCdsfRuBGGQ35u9R1eWFjQQVJXwJghLCcwuR"
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
