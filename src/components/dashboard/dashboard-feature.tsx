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
    "5hDVGN62hAJXKT1bQqwHMLBaZvFHsbFeKPLPGRXGtqHdEA3DwrLMMuaCNSuZeXY4LoRHx9chrZaRnsZRzZKmzUAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oRQzwt1JrPHTUvqnMtrjf3ndNF6JmkAZjvDx6yCrFGRCcxEtNMSfQnqZBQ5YaEREWGJqzKjn8NCiKgmvBuDdb2r",
  "key1": "3Nf7kWoAELPLFmPu8mrAWzL23iT7Me55Mcztw31N2gcr7szG61DwmE7GBfKw4Q4vXdgyFGEu4xmmaBWiZ1Y3T4iz",
  "key2": "462uceQnSK32R4AUMajFGsvpoTtJUZoZ3DuaQ7fubFZaQDsonkUoQYNtxBrLQLwiAahwKprKGg2KaxnJdnwJjtcZ",
  "key3": "4Sf3ooZ8XjxqvZeNqT5S5xGLfBPVoCPsxiesv2Uguu3ZBocaeyGsgDirQNFQTgo9bvUVZ76Wf2KD3LA9TUdJVMzS",
  "key4": "4z8r4nTci2Wv5DayXXxSrfL2nDeBzuzR3jp3d9kTD5W41yP5kugfYGucrztCnqPSGvnWLmTTciQXfNRsEPQvCDER",
  "key5": "4TxQgn4wShSxnmbxvM3vXWXhHZHPY8iVmuC9KVGFnmoZjoPENW291jRaYoiBiqvqcuGYRnr7qhuLHjwYT5Qgw4n7",
  "key6": "5Wg4RdCxKrhQvrxgHZ6DzofJTu5JFS7L9uzJBaoM9SMEWmMoQPa4Naz3tXp6N49JK5xyCBUgcyZcMXoHhh5Rijzk",
  "key7": "RP88D4Y7pttzsKcVbHuKHsvhWTW7LHEzn9M6GeDvc7BdiUMMtmkzyGtYWpGyZwtxhcPepXsiYCg2ktAkqw7ybLS",
  "key8": "5ktVsDk5dqZ6RvBTziietfhfoKjYv4q4NA8QkvDJqnDEEHLY6EhamcQQ7UiLfz7As6EGDt81LLYnk5EzN8ECerhs",
  "key9": "5RW5ASQsgKxZ3KUtYykie77Z7MxiHrGQhCxr3WecoDeZTE87uBsKAnwVTGh4KsLSWHJiYAJSd76mer8ASt2QXsre",
  "key10": "5mdsZeCyKQcV6XV7rNGBkXs8KnuX9WnDUoyCNsQysbQkWEp7BsdqNqdAD5jK3TUuc1pVqNEFTmG9T5SNesFWz3c6",
  "key11": "4uojLtczJuDYrQobf9HFeAEF1FVwPgxh5gZkBBRj23DhapUTLmBzwx9i73sE6mL6Si7roQYaNsZbF5TX3zJ5UFQj",
  "key12": "4gjWKd8S5VjCWMoAwFk6A8njJ1zvf9QFdL1rfXevqYiy7rjbZnvnNZ4pwhKXi9nBSPvmNFyBprKb9Cef9LLd2uoC",
  "key13": "3EKELsF9pDAM8bNo82dCNRjk1kjzJwvTG3Aov8aFFg1rWq3Zk3zFm8agzWN2wEUkVTBoJ476xA2GFjbMqdCT8KGb",
  "key14": "35ZqH7K7y7N59bkAEimXVNkNHB9DHbJSgQRJuFkPzRo8S2ZhzewYp8597aVfFoqv7BCLudKHj2oQMBJnZ2k43oSr",
  "key15": "4oxbnVLY2ZTqfe153xCmyD3YHvjphr8nfCtooH8aMCQg8PjTNigNvVSV7WfJ7jNXSoErx4wY3rk36jL8LSpFydRx",
  "key16": "2cD2KyG6DjonoJqLREeAxVu6QsvuNELPguSmFbtrv1k7Rz23EVc4pFmacFbQEx4xBt3Mry2Ccka9vDEUxD2aNZA",
  "key17": "2TjMM7us1NYYThAJKV6mttVGiwN811ckscmcEXoLaoXcmYTeyWwpfkhMUdktAbUXdD5fr4fPjGhfeThVgXQ6JeHL",
  "key18": "2pjX4GDPVXmZUXFckHqJ2wwEZVM2TdeN5hsiWZZeQ13L8DfTBtpX1zsEPSWtgC4tj7HxNXmGxq6daWsfKjnGKrf3",
  "key19": "2pw1bWRqDzZfXGZ8K8UwVnpoobQX4eDpYXC9XRDRJzRoFYvGneom5j67Gqf2d515UMKwg6oKJQnR1u1mkT87x4w9",
  "key20": "3aGKirZQvSS8VuuD4qNgvRTRM8iuEU7ikHk79TFiccX4EezukqR5qyypyn9bYiTqickRaTDc19ESaduJ1bzrDfX5",
  "key21": "4csVNGuLF77soFjFhif78sN4MmyYTEFkUXKoVKnED1HK34SEyr4c5qUBvHkkmHwEwsFrqC4X5evUFcqfmtVBBftq",
  "key22": "3Z7HhPZTCZMPXiwhF2RhSecsnDhmLVeU1GCaJ87fKWPNLV4GFeG5ABpjeeAWVTnjFvWqCHvYhsC52GTKsXFXLP8c",
  "key23": "Nq2p8WKT9nUSU86oiLbNyMuNxLjbu2X5tm22hh25UScBihh1X5HpGiexCGJPWsNxPVj75shMjZvpUeJ7h2iXno2",
  "key24": "3w2HeLddVqM6zYLpn3LmdMA4CeJ7apZYxra5B2QUoJpoFH1JMAYi2tmKSeW1WbfDciuUpCcSdDfh6L6yCqQee5bQ",
  "key25": "VBmTopyjJVt9ogsrhbZveEmPP4wWaHSgCaYvTWYvZ2r7mi1uQpbJQWko8wZ2at3nSwWTMyu5N2gEcV94r4KTdTv",
  "key26": "48CYB8xjY1An6GmKB1oRqH1Tm85eB7qjwfW9Coom4uG8iGX5PdrjHuEZsFGjieZBBYEXeGmYV3duhoihN65om8ae",
  "key27": "2HBoafdWcfqtzJgyu4NALUxuxKa96kUa7B8poqwCGjJB1PtbxrjtQozNKY8xCsnsCh2dsKC8sJCsnDykYES5w8ra",
  "key28": "5diwTLpZUcU7y8Mv9zuC17RNFgi7dfS687CbDVnXr8ZdNGgxHvScYbYkoifwsQQ92rF4kD8XwEHSTQs7716QKdhS",
  "key29": "4vFkRweRd77S1x89Vt7Q5GQ9jcsuJZ1oKkE9aRTpEEmFFefa3z1cHUgGrEfZ6zq2eTFkYj2TpdoLbmfazDJpwCzy",
  "key30": "Pw9H26mhQVzQeg4R3xqDGSyPAyZ6yWnh8tb2r2CUaP6zxR6a88zj3kTuxT1oKNC6N2MkhiCJbhvJKvsfMyjpgDi",
  "key31": "2PvNs82Z23mUXLHDb6sk1TxNKHyEibQKY41LVBhdEMVACm5Jty9SY8bTbiHaqWaEdt8MuMAUbzDSFLJJRc7cnGWj",
  "key32": "4KKKThE2Hi7ziZiFHRXMCEKwspbFPwQwfLuNNG4V5dcPiKLQ5a6nV63TaPY591rXay1jreUwpjQY8hbxpyXQ3Y6N",
  "key33": "61cCm3dJNFZgNfJc2jC48rRWGRgsPXHF7KkPWSTyC5KiV9f1DkPdQfJgg8y1aXGyyvoxHHprHM4yV9Qnq72ErH7j",
  "key34": "5spusenTeE3fR11GHtHqwMWbQ5CXH62i75gATCY4F6Tq8P86YPBuwtSX15LawFrk4ty37rdBd6evHUHRVB3rmXw8",
  "key35": "45MwHM154fnQEyTfjKkoRsDumpdv2HVwPd7sTT1apZPShyQmyVyuU4DJG3eYqQfT3NYiBFsGvra6HBZ3tLSmqCUJ",
  "key36": "3B97xHXVEXbgWPn9sWw6qnZugubLd3V98CbQMKpnVBR1yWpPxdC9kUP8bjiagmgkrmWQ21KezQMJQG96mTZnJquF",
  "key37": "5UPSwA1ktL56eFiZH1AgtQ1f54nNK3X7sSrQHuMn3exwN62G38JvkbAUrWyJArKwwJs4sbXyV54CUGFvKCkof7v4"
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
