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
    "8rCvd2H7ResBW2S7E5fzLzEVBLkyvTvJoJx4JLQwSvK8Ute3DeGFbM9szZa1CGne5BpWLtvkA9svBqo9avVSHCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tT4rXTcgf7diM4FVvNEVLdKaoNEz2gzFaNTiqqfTSPDWUNyBqVftwCXUM7Qg1WDxxauegwEUB794EdPGvVPbdsP",
  "key1": "5VHmWGSB4VdnRvNHsAmnM4rSdQU8aeTyUVfJBATc8ZPSmeiDByUAD6phNPJku8L2bQyhPkbvocXbbLUcrNU1iygr",
  "key2": "5oRtXChj3HWdF9rfqs6oAS2rLW54msQUEpfdkANjRG9sJmtfShB27epopwLWug7r4BiQDVmFyQMizeh9T7AbLyTD",
  "key3": "5k7m1M3hJcjf41pov8jdi1HW6PphkbDZqwbkeKGn41iLeyghqLGov5KqNewmQcNcUJi1FsTRFEacX98d28dHf5Rd",
  "key4": "3iWkd1ZBdh4yL4eRVkFFqWgBa8ipzrjoa58ddaFx7JZbUhTThgQ1qC4csnE2dxtYmmggiX5GEmvaQv1w8rfx4CJS",
  "key5": "w1UFHfdCawsT667SCKkkH5F2j9JBeyKSmyiboUxck43abBdjVeMoCAXmqPeiCuasBkhbAht6sHqvQTqbem1Qjj2",
  "key6": "5rEA7CNVxsMqbkrvsBCdDbWQNwY49h78LmqVeRgHU19r5TRp1d6EUpmxB153bCj2kZiPdG8P1ZfNsbA5xS6Q7ZVs",
  "key7": "5s7mHxf6mv5bRUKxpf4jyUyTh22JhUzDneQMw89TaG4UhWNU24eogfJncnnsMYAv83mPNPVBfWfTUUL3Jy5jwdk8",
  "key8": "5EupPtvD18pWH4jNUWQQWcKQD3sCc6LtLSkeqnT1ARDcCKsKjPsUvxceyu8H7zHgU5GzhJrFSK9VXoP9B223iT61",
  "key9": "3E5FyQVtk7UnRMBSDHwtMAgwQyV8J1jMqgPpJFftwYHmKLSUMVenAcfSmjyQxDx8UJM7yhERVXnvekShLEYuuXmg",
  "key10": "3DVHiUM78uGXQxHLpcRzmjpi4CuMHScD3NrX4bHm5XirDN1JEHAknJGN4pPEsi9H119aAqxyVfDkev5LFZPQWA4N",
  "key11": "BHEBrP65JPbhmeq11vLjCPiyE4ELq4Hn7bG4mCVKPuAFSkk7RbR2ZdLVMtqAvquCDgcKUmZaXAJn4SLvnrwqFka",
  "key12": "3e3MSbebA5cSPra4gZVvuYLuhq9FWGgcENeddxvvFJLtidVGvwz8i67n3Aez71Sfoxum79zXmiAfZA7nK45dkqW6",
  "key13": "4Lor2BLwtnKrv78mTJQwvKEqdoz1FvvNYT8RYV1A2R6J2AtRdsySNnKKRho5Wuj9hsVcZozY3f9uAavxdMY16ie6",
  "key14": "4ugaSyS8kXBkztmk8ugN5CEoQjwPfTQW7QVUDjDtDJZ5LvBoHhki1PGoA7uPAaMQYP1gMBnmatwrXAnypePP5RTZ",
  "key15": "kew6vT3pbZ5tkYpRTwPYJC5bLN3vRFdPoAbRzyiDTNaA92XKiijEFzHuE1MEGSCXNQEWym9vMmC1bfKFMtcvLuw",
  "key16": "3Q53q2qG1YH6TL1UpDRZETLsveYGhJewkEPYde25ept8UsmucNTaCFkkDkzY37dEnLGTAaKRs4836Zhf26pyvMT",
  "key17": "5HK3FRzjaWE4cRDmtKKpoccr9ErWhHVVrh23G6czQX5qUiZFTqNC8oURFCC2tBguA9oV38UwzUXrsn61b6c9aJm3",
  "key18": "nCd5HzNDBnezVneqT6Y9pZQZK5t6fsauLifXGCMwWzEiSHmpADh91mLTLfAqL3VHcDKpMDnEHabrAe64p5rV6kW",
  "key19": "3Me7ef6WS6jMuu6pt2X6F42Y7obbUrGp1nCfitHJaVma1JcPXjrNXrxGfwGhPouEd8ejLo2VJwvTiD13omT4USTn",
  "key20": "5ew7sfJWTeGFhY7U6J7BQ5B3WhDPCQyKJVCVAxgczopowChpQH1x2njeEGYEdgME7spCvrS5EsKBQTqZSujQPnLQ",
  "key21": "5cPn7asaGd3F4usFDU5CsgXPT8KYXyLt8LXBsNJQPRthtwvTWWH2dVq8NuZPbwbaiZwzCnhiv9PQXKbgx4kyi9qu",
  "key22": "2fPBCGREQf8XecDV2QmUU73aQy1tFfv1rPdGq4AeWL9kBeHcmqGYS7H8vHiaorTrsFDDm7zSN4wLEeiEf5kpmt49",
  "key23": "44aJbigXAFZ3BvcdqeRMc8zm3eUXQpDXdzkTEipfSmGDStWkipEyxCCLdUwJpPA2fohGBws6h7sokdA4tr37JhXB",
  "key24": "26oxEoTuswpSCdh74qwpozDzFoZWfckr4SZF7aYD7ekMGE1Z6mSX2dVbSmyjzpZAcWfz1UVVQ9GDoVRVX81yrSPV",
  "key25": "3rt9J2ACqXFWbvUh3Gu85aXCXvaFFGLz1qxRdjwCnA4E8bpUgarwkty7v7o8enVSenRjpnhdVbBda3mUzgMQxL3t",
  "key26": "2917Tx3NetA76yKFs6hhJ4Y6d8bg4dviodFKKLvRw91SBmRrz7Pk2vYiLsPvHxmwgtrGT8wn5TtnMgJMcbTW9x5U",
  "key27": "4T2fdU8N8Hymfv4PDbnY3GdMQo234eGU38iQQF6ujKkHQe5x8RfEQMizTpjHbv3tAz78fU14mBRW8LSL6f9CQhqN",
  "key28": "Di56H8PmaXZSsVwjSch3wQhFVBXjFHqQjrpW93cC7QNrZfFHYHVhiB2xFNqxkw6yEqtZ6DHxbBmVNLrMSqRNfEL",
  "key29": "3BamKJu5XYmkxh4i2i276DJU75bMe29LBfVGMCb3mFZi6ZtTg6ziRacYMksAhMRwtn6uzFbYQ7zR9odJgfjZwXwr",
  "key30": "56jb6rgre2dcP6EdZdL24p6xxpWTsaBcpBRX9so8HtCBhmPAXBXfniX3PwbjNnC2Ztr8AoxDTAdBwHKUrVDghZT4"
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
