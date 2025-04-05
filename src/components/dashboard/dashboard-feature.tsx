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
    "62bpuMMfsM98rdZaoxS7uCR9jyN8owEn3g6aki6FizKB5rFzBoDU7GpQ3cwUKwK3NQMPwkMKyBJYcVXZX3r1ADJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6BgB7WAYt17rEq6ipQaYPQJ3oBAjXicJZUnqjvDErBGduvNJ4ZBXYGEgfVM6dJS95D62naUyP5e7gMBysdbVSA",
  "key1": "5p4VFUXw32U9reAsxBq5fyAsPKWJFpwgwVEBJCSfntDbrUSwipJwheShvdUAHdPzzcSzJovoFA8HJpWzpNW25d98",
  "key2": "KpMc1AkLMY6hgCKwLzeh68e6L5dP6JQgGewce6gimjvXeSw4XD9YbRmSFnYUtBx9juqgp4TswmLxsP97VzDUTXv",
  "key3": "2AWvXoYnzcsPJAk9RFs7onHqXH5LGdmH45CSy7bWPEBpBFigCruixojT6fMXwJVQz7nT6HgFpy3Y7CMocf8asZ5G",
  "key4": "65Hv1bZpKPH2wjwjBnC1ivPzWN4UVF9in9ZXb2oDCaWjfnj7BzyvSr3a8teP53epWYRRzYqzLRHKTU58bjWH3K8t",
  "key5": "4gguG4mGFHHB1SrevtieBF4Qb1xgS5jWTejkADr2XTtkxDe6s4NJZiSJ7mv2dx5y5yD11zZxiWCe9dbaopynpt67",
  "key6": "pLCNfK22a4XDoMvTnPQAHzLpR8C8ggHuuXvrRVWVveeg9YkHRLVvN61gQACFNvGGEoYoug4SnGfA2zroaaxjQFD",
  "key7": "2UgSwMzCEBBu5XC4t8qY16T3fUXHgGmcrfhcVBRHPtA6a1rrkJgP6DtK5GcarFm8JTVhs5eGiXVs4WujgbpW3ttS",
  "key8": "5xZcuNWiiN1aLDRcBaRiGx7jZUMq9mBa1q1Yi2Yf4iYYN37K6PCoRN1NJbV4tsv4Dmqus3MvWjhcENmNAX7vQ7CN",
  "key9": "xSRSXNncp2PysQ2CN9wQ98bJssQi2D5vkFmmXrqeHzqDaeTyu5Fr4KB3qaMD1zAi7mi55SLu2kJyisytuYAkeB8",
  "key10": "FC6mK9oM2TGFwmFpqzvrnkAPp3omXTTubGnCtutDKiewnCJtDcGij3BHPxk4RDFK3j6sMAGc7p3PfzwPoMgEbuN",
  "key11": "2Qv8aqGtTEmnRg7FrKVAXGWN91PxtxRKpHiXyLtgtd1zuZhZsfoGPr7614sHd9S2wWssYqwML9LT9CwG5mdbrmwH",
  "key12": "2c2LYrWL4FqocsDTkGrXjq5K3aVNZPfk27dPezgjncQUxRhkhr8UPqwxV1J5eVcVfDv1B5LH1T6NDLHtVyUgJ2V8",
  "key13": "2CPBLDki1m1VccRm233279uZYg7meRsQsjr54fbC8aQQMcvnvKvv2vGUtrd9zdKtBmcsNsyRbgDy17oeP2UFCg5N",
  "key14": "S6z679dG5Vn9R8R6QJVbmJeExyN2zvqXG13wC7DV46CAtG9LgMAo2GA1yRf6tA74157J53CPMhxJopR7xnDLd9R",
  "key15": "5PcFYiE6uegqT9XkVcavyvgRpCrtvJbfaZTu2aZhU4ccLjJRWjp4rQJoESV4Zn23ozu6kvjQhB6FQ3mJfYvrjZBC",
  "key16": "2GBnHC5ncrVUC7V3zrfRQznrzMXXMzCsB22shsu8VBEC8eEHn7wMUDiAtMm5sN2vbkhCgUqwsGLybWsbVg8bw4fh",
  "key17": "2egmiLMmREb7KPinSRS8GJoBDK8ZpPrEGxWMkmHNTji2vdQG1MZozTcKo8mN1APpesYhN3HFDJqBf7DnaMbHUnJW",
  "key18": "4ZyztFZBKAPG3EpE3FDvRC1WxFnYiue6PkRGphfgFV6LDBFcQDganb2w2vmxfJ8EQKVujkUgnCCRkiAC6NfnP6Ej",
  "key19": "2MwgGKv3RL81hmDd2CVL6vUKfsePyUX7y8L5MvcHTRTNsurnZ54W1iaHZ8z192UmpmTWBngecicC88xgLvB9veB3",
  "key20": "3whRXL7L2rdaTtf3TGq17ZadjcodKQdqM7zZoL9evYtBDdvFbueh3YD7RLGGLmsEWDqSE1aRzUjgXrPiJCgMxxTG",
  "key21": "4o6ZgsY9eQw4dLwEziT5DixoHfsWsLGz7va3uY92U3LJBE4ZrF5kFUHakknWoStQEemeVMHgZLRNz6MML4qdht2s",
  "key22": "szr4oS4w1AM8MoiydLwWesK6TKq6GXCDdBB9GC6Wci36uQ3P9h8Xew8CSTxd6iULjxZt7sWN6eg4onRTthXeDC8",
  "key23": "vuFpbFBTAaVvkCgLJVtx2QSPqXangyXy3FX3hJC5BwdJC8yDmWFaCbQfqvGgVXJY4shwDu71yThJYs7ovnzvJLz",
  "key24": "3S3MEVgjdqzKMDCgy5EPNnio5Ss3xNp596q2rH8YzVEVuzmsctrm2AQUFiCDRAkksoquHom9FfzgRjpBYigzDz3S",
  "key25": "2Ag1TCfVVSB8HEhMBPZhroUWwSR1R3ar6PiBDbHdvh38achLYsXZZV8Pg4EgAwT2MzmTF4ToiwbL9iPdUqQ2mPTD",
  "key26": "5JFyXpRTR5uC3yqYehKLf3UnzbKtXhkVFCw83VPkV7G7sPcRTp7wjGzkQPLc7UcqdQ2K4Tnf19ijWT65Fkr1awEy",
  "key27": "36tHEbUHzuna28U7qercFs6PGgzzEXUhsBEoUhSieJKzezkcprYCC2NZgNceMqv2wDoTyEz2TJgaHhMXmHc48X8u",
  "key28": "5ZNWAigay356T6r7XgwZrR3KXgH1uHpBxq3L9KANHp8rX6J9m1U5PdtKDHdUXJYxyYepuwhw8Ncv3rbgqejo4EwN",
  "key29": "5RJNatGuDZLknhqLkq2aCp6Ps7qQePJWj4N4JK7fMx9URZM6F97Np3BTpxEmNexGxxMb1Em7vy8CVLA9yrp4LmGS",
  "key30": "3nMdP4H34SiWej2PcQVTWd72udxsXteg42wf2DL4Jymt9JgHBuvQquDdAdtaG1vKPS1CnAuDzPXpUYACJ6sw9mv4",
  "key31": "3CasDD2mMrAJkYjLi1mppozhEggzPFW5opRq5MNKtiURwxCZAao9a5PajCm4hHqST7bsQVCrwdfmCkKXbRd1U2Yz",
  "key32": "5zcGE6TZh43Er7Hp1Fy22gdzTmBd25dgasDkYRg2CAB8gjTeCwGFkW5mxrPrPZBcnTzcUyrUWMp1hbcMdsBwNQRQ",
  "key33": "4RNPiHJ32htb8Vuy3rCEuq3ZdVxwJ9Ybmz7geC8L18kq59B2hz2JfC1hG5Wi9cPM6si1NHX3PinNvR3yRxoZJBhX",
  "key34": "2ANkK14Gys5Z1j3pGT8Er7GXdqceJ8i1atE6gYT7ZYeaFZ73QAXcKjgNfxSJUedqM1qejkgneb3ETXR3Qq47NpLT",
  "key35": "2NQ8yvQTpXtrt5quZQAK6HGcc8GQATG5UcGzqcDGxttLTntGX3irbtVU1y7LaXgLZpbwvkTn2vQBKQPDNucCJtXx",
  "key36": "YzDjjnwah1zYB3kjHiTMfRicRVttacfeigqSWmLQRaGEBe8mQYCdVQLYsut444n7bm2pciZDFTVmUwjX9cLcfUZ",
  "key37": "53sRW5NYvruwmmQoZMh73aK8gx5J1Hxk6D8stY5tz1eVm8jwm9KEFdSgKpLjRvzwLoAMgCvJFXEc7fGfQqK89t1C",
  "key38": "61TqnVZC3AyKCrrYR2J9uvZjseY2kVWnMFa2HAvJxcMLobE1ejNBPUVSJwvzBntg1mmBPm4VHhN4tcoVabDmbFzL",
  "key39": "2hRqvYBve7V2A3zxaUYVjHTfFGPaoG76oi6t8q3sCu2pTvkQDHH9DKB38v4ABmkNqim62nCzzhZGrQJ5PFAf8xSt",
  "key40": "4DqHNgUALesSBYYLqFVPSWGkWtvCm7SWr4QEMCWKd8eXdDT7BH3dZacLDtmsDvyPVjQocbWwqos57oJVAgfcYESz",
  "key41": "5F1iyszD79p32z6wGGRMi9r7MNaukKAZesCgRfcmoNBbpb88zEwDos5ZvLTcnLwMERqBRRCQEYuZdeJ74TRp69C9"
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
