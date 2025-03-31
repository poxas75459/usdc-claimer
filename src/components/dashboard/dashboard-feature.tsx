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
    "V1jRetCZyPqkytpxSW1vnW6k6k1JCfktU5fka3VVcro2PoxqYQkTqhrdHGHknuVidcvyH4WZ96JrtXDkSx7z24H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MExHCbBA5JH9RLcpGmSqFzXw9Q9MDXpZKb1dSHsnrqfSrrStDF6htzckn4AMkEBQAyQPAebjSrLNGDnqK42QAap",
  "key1": "297q3uVZsawYWjq1hddmTTNWusK1HvkZttxYChZCXHAaUVTeFkKSYQvao6MkovncH7coMhozWZQBabCYACJSXcaB",
  "key2": "3NnAzz8As1bS2LWNALQP7wgiuHR5ypUc7vQWn88ZaeJuG3MYta1wUECNBqJ4FCkRnp8KvnciHC2KRaEr9VRJuCU1",
  "key3": "3CxNRqo8NPdzzU5jbTNu2zGCMbfV6bVPFUShqMdvRbAKJVu4TGXtepBCARLZAbik42RZ4GUWksMPiYMFFZqt1mWC",
  "key4": "3wA1rEcMoWinH1hL8EWwtSFLn7CbMvBBfiQ1ubd1kn2LMjM5rP8o83G4f6JEnFQckr8FeNwFWuediwF7d3RPNbY6",
  "key5": "3BbGk4WeSLuTkNv2EQjrunXV4CTbd3HH8zVLqAGJB3NJU9YrHV4kqr5Qa6LmHNfeKTDxALo2EpAdZkhE2SNgnFcJ",
  "key6": "tHructYWszKrWrLrdZnCU6ufcCbH5LFRsssyk5bwji3oBTmrTBNusKr4aoApp6nxN4yS6VMXK8B2ReNixUViip3",
  "key7": "2mzt7PmEMb18BPqqRrqXtS6Vwci2yp2mFVzeZXBxkx4ZPifqGiiYGmhTzCLbKQERThKbhYq5wK5628VmzdnCDAKX",
  "key8": "5ibHLzEPgRJN9wSuJVNBbyaZgAhZZDkxcASf4vGavPdj3phgV1RoZPkoNaJrAoRsJ6536Co1szmKu369WXrLydzP",
  "key9": "4ZFX88iCAMZbgxeSQ3snMSfjFzX1AjGfE6Z76ri6oDTYMWCMvrZon43Uq3L9NaTKX2D82hh37mgbebCRXpTmsv8W",
  "key10": "3jrEfdXbbEF3YaCdpmTGa9vhp5nCK2GD1DAfGkgQNPzRUAtiLxvgdwZKGSEbvfjrcgQikvvbNroeaCqBDbEU4h7Y",
  "key11": "3TefbdrnpTWCr1LmFeY4TwZeat71EReWCXTbhJmM8XoTbovMaqoxdf52eLHprzFqcRqmB3SRZvn2uRY3wbWG5SPS",
  "key12": "4F7sxu5WToXu7XBAW88oXUKhnmiCrUgcxzqqnf9b152mrMwYpGtKrBeFeP32x61utYaYLwtXLwqiu2UrcZkMWaEg",
  "key13": "EezcjQZswzcc8uiDKGDPc3XDbwMGwPUAQ4Uzsm6TUiSLLPqBJZru4jTjx93wtxasjjWpN4ZTuN32b9mENxfU1z2",
  "key14": "NCwqC1u9fUZzwi8fQQ5rUR2FweWR6u3oUHsbaq4r857eAHXdDChqhE2W8FHJLMLdkCDryXcPYUh4ErZzEf62dPv",
  "key15": "E6irnknzbjFtCL4CmDKGxBkqb1YdcDQnPWTibt3ViMc9GM9EWfwEejWy9iGsyRV1B8fLNK7mcTtrgTLbmtknZmP",
  "key16": "5uDgVdHRkAsh1fQwFtkvLL2y4Pd3RyNKUkZD8hRo2zpk6EtR86pioQESz3FrNCRMupQtq2Auqq4M88mcY321LAz3",
  "key17": "4P199Tc8CgapF9UDqogTgGwBTQEwVSyJcvC7Z9Pya32GF2EGXqrMeyVgdc9NGazznJa4J61ne6PCFSRmJFkd5Je6",
  "key18": "3oSZkSbArTQeBLatQSns73xvy269Fmrxzv2ckFXVnovN5Gb9LnnEVVoLpEmt5iozdf9fkD1jxqJktcHP19HuAA5W",
  "key19": "5urxckVuS1VRgjq7VTCy73GrtbwgnoLn4c3KCHrZ65hTWHiVF9Tibd1ifyDySkPc2SpchfLgT5ZR2pKzYna5jkGa",
  "key20": "3SXMfiQcCyoN37ed7R6bXLrgjmWbjkF8SE6KvjJo6cRrWUrrEpi82J8f3MRy6CeLHQFBq5PAjxsp4hbkSFWd3fQs",
  "key21": "2SpHc568nMYFtavZEyNAk7k6SuApe19FbaXjmdNhVRLdQyxogdVpFYsJZzimSmHmLv96VjxcL6feNKv53b913Tn6",
  "key22": "JC1YmvRNFpkY9ZFaYCwigPByhufCZnkQyn85BkiAKHEekcvVG1uqL2CueYeS91gPWPbPaTYgtaTnBkQuab8MvsR",
  "key23": "3GPA8eRXtWqzgJhPNFfX3rkkLWWaPuoUfSSQhon8E8nJf7WJDLgEMwP6GioLwSDg3BcJUgYPv69LWnv5QdSARsan",
  "key24": "5FW8jZA2eUjE4nkRmnnWfAdijNW4R8gHktF8PyK5MU6Eqt5qe7LF3KETT3u2Ut7q6YifqZyvMto8ifmDYYsrGk97",
  "key25": "26jHe45CysF9kj5kgMRFWPrSuHCX86VsuNiUiwy21W5xb6bYFTWxbaYdJoMJUGey2AqsJ4eawG5fqoMmAsu5m9Bm",
  "key26": "37xzsDk2Ant8EF6CoTLzpe1JUejArJtkuTiFHjKMgDH8HhzEANpSAx5WC4q1iE5yru53g6d555754HKK8sY5M6fx",
  "key27": "4nRtfL7bcXhKFXtLHLMXCk1STNeicb1KSzeFTPefhS5QfnssJ8xbA2MzwZKXMEkU2DohmhAk2j4og6rna7rSAhY2",
  "key28": "JBcucZuCTewLwu4o3poha9M5NgbJbiyFAtFUARfQRQPssrAhxAZKhivtd8yR7V8i34GvDoaqytfZJnBE7UUzo4D"
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
