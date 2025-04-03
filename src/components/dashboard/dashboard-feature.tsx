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
    "KEaTxrZEmbpA7w9sVaoVTuYG4nxdrpvKENpfQf7ejBK7tW8Lvem7y8N9Gp8gGMjeTpY44bTTFvFDbXHXXv3fncA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfAFprHxrfK3dCEUywtzkXAjrXP35sXKDfsxJwMkmhoSNTwdpd1QKU9dhcqjQ3mLCGmM542X9hmUsJdETP4FUKt",
  "key1": "2FQJLqXr44GqBkEtzjAeQzLU4B9GK7PuadcqTXiVXTfBg2hKUQowFfj5U8ZHhEP2B9jFB1EfYwnrvaUJ4NWnnMWy",
  "key2": "2dvkMVtchMxX6mwq87QoGGAsow3kaNJwv7P1drPhUyEycmAzrUgjv1pzyYHNX67GHE1qR1fukYUR3NzhWKaDF41j",
  "key3": "5Rbm95KSabQ17A11bWHd8rNoRBQ4AWPc9xH9spPwagnkZkbytWVZYRkwoNb6bWzpzd4oafmpxqBUMDnstPKRETcS",
  "key4": "4Fesb5E22wc8UGWsyrYoo4h6CxWAnkNREpoJAKB3GHYLKDVdq41hu6Xwf4oaHkP9DuKCtFGXxXGYNxLotYLiEWw9",
  "key5": "42TEoGkc1eTpuzArvPkxbW47o9smSrKSkztUDB3E27znAPV3vw2iZ6jtjsauYFaTDsWgmbtAuuEMpJAfXFSCHBUQ",
  "key6": "r3ymMWnMDxHJxqPaaoceKoeYDSFtqfNkjY7ChukQbJdd3ihXcFFs44ERTqjdbuFWxZnsfo6mLGvDj7Eta892ksi",
  "key7": "onN3sN899ciSsFGktdYtsUSK3grE3VS2H54dQeWCa1VigBXfiTkRhCs2U5NH8JSBb1asniqDpEPMZLL8W2jn1Bj",
  "key8": "4hcADAs7gyhSCo9xT1L7P3BZJaFW3jFHi1MRSJqLJdWmWH3BpwjUh77ZioMZ8Zk8oxr9EYQCcDKZaJVmVwfRZXQC",
  "key9": "8ER7DrhbXE4pYYhrdJn2kxdtQbA8FfpwsahdoGsPdft3BeeGbFr5qSrYn5KJPLxrf7WCCmzpP94jnduMH88Vet6",
  "key10": "4rPajWbf5sMqknXuFJXcpgdGoy93iCHVM8fEP42EA2kQ2dNZEwN7KVSbVCRLpEk3u7to91WfQ4XxB7eVTKiAFLYH",
  "key11": "bzkPU4aY8QZdL8RkJ4TE2mLF8HckLSbjtJegcSZQLYPWtavrpevPc8B9EHGG69bA47L68JDzdgQhvWkUmtARBgJ",
  "key12": "65y8PKL8JW2xqsx7CFLmXVqZZkAaj6oasUaAJNEyAMUxNdoy6TNqvoHFo4JzHWwGTCBuakNjw6CttPYNQgmfKEM2",
  "key13": "3dzrcUCMTsr8JzC1HiyNvLcrDr51TEYNXmFYN8hAFftqFRi358f5hxJLNm9mwUceF4QmSfqjg3aKWMoD6z3yCFPb",
  "key14": "4LLrvFnNbqkQHNze29Erx5HuH8PH39snsgvthsLXYcA2PpWZ16NkTTEzZPdsgcy9Gj1QMsYBR2QEJ1whifrBhZv3",
  "key15": "3Rjd6eb4daKy1MLxbnWeZNjbEBEhwtVPYV7cQnNeuE8pWuPeGDQ55qx9nYCLFmtdT5bRkNHaiZGFz5okjPNg9wgc",
  "key16": "4FJ4kQ4mdFPd43tApjxuCE1tLmz4Sik8ob5jPsaS5kSRdYwpkKFDaN6E7gK2dZ9RG4ZyrbXDfNLvt3oNPURCBw8B",
  "key17": "48YsHoh8JwDYETyzXU9RzKeHx5gbpxveUao8VKuXcd29wQgG7P7pWg8kPmoFxdCT9XcZbMVNooTcEbrSb2hyQDaF",
  "key18": "4vQVJ236jCtBtkaJy2XtZDsM9QYxJRsDW9aAAXCQqEhjAXMkESKSUGkMpQ2YmuSfB3ve3CT4CMv85fkFVHToFssi",
  "key19": "Fjr3jPvWYS4P4pfgBQ7Y7xGny3EMkE9w4w8UsYuPh3pmPcJdqFrrhcXVCF2xyKdXhsi79NH5jCLbe2gkBjZz1rZ",
  "key20": "32M1cpKcqbFiNqEjFk2P2iSMuTtA3C3oeQqQmUajyc3FrLAyKD2QzTGfne34kjmhQY3RV7abiav8KiGZjTKABVpD",
  "key21": "qRdhKNXCHRECVGy3zicmVitGgGjUp1yniUPMHWduaH1Nt4jBr64PYnvwsvmZ59aJ56onh4wZ7J2tY5kVitZdcoS",
  "key22": "5petcuRJuNtWDBxRffkUPhfkgCJwLMU1ZrjWJDMRoJa2cthopNj28LRwqJXhNdBxprz4qtTJkX7oeqsL8bPrzLYb",
  "key23": "3smov4U94ocXgMqKkiJ2gQKShn9VK2ZmYEnEuk8oLyZ8DTud281vCNXrdD1KtQqBaSMXuwKXmyA6H67LqofM6CJh",
  "key24": "4pJrGJa7nykUKLP74BX2cWb9VzjMhD3XQu3xuhrdPFYkNqkuXERYk1Q6eMvQvm5vXLjELgFUZ2QzfqHZEg5bxYGb",
  "key25": "4ge9TTfP9NLiKPdKufqwZXEoktK13jSheu4RnxeNwmSRPxSk54D7SZtnwcfq4wTuPBjAwMt3mi7Fkuhsy7NECt1m",
  "key26": "3NdkBHGS8XNHjgX2jChetcwgRUXmHVQyx9QrMSVqoMcFtsud1qdkjHrP9vXHHdbiu8Y678gyuVvc3M2i1yehZsF1",
  "key27": "4DgJzT5RdwEiD9u6G9ACE5qVdT5CKAgE8gsM15qnX4HZKMNx8cAboDgUhJEaFPvN7bwhM1Mbqz1qKq92vCBQDYvk",
  "key28": "5sEKoV86u4AUriA2By4P8bV2ab8ZNg4dzSbDV7TvrCEMJw61XaCqxHG44gPn7Q9GWzHW6xyBNtVV2V2pnJUaF4vC",
  "key29": "sTB1V4qfSRmHtQf8XXDcLiCmgmMmB6uiHjT5yYZWxpF8AxbYmf5V3pDHV59pPJ8DmFU756bRvVi8nFBxVJsKnWd",
  "key30": "4h6iLr1ipGC1j2ncQXLKSvoovHNcPGmdDfsQxy7RdQbiXdqkpiNm2PXd9qJy4qRrFiW4w3ssnC6riJdkBpHsMFP6",
  "key31": "nnsX7XzjTdeGFRtsK76ymxcdNxhAPUZ4TZQhYspaZAhKM9hUk697UxQ89t7C7BoxiwUsWUL6UF53JF5PMrEQwvK",
  "key32": "2xSej2i1DxjFEz7z7aFGSfCrUoDNvtHArse8SF81c4CHhxLQa8HYM18uTX68YApsVA5cbURwJNYHmQ7xFMGvtWgp",
  "key33": "57PHGcrgVq2D65oaVDjVSWLutN2YBQfcQB3RVY81tzcWJS3ZgrxmSzcsCrwdJXjJdugFHomck9TdWE6VLXseXtQQ",
  "key34": "4SC6A4TE1v4NA1E1GZzBLJr5i6fUVQCVXTRi61gmPmKuwoe64MwsUsYDnnthL2aFfepMv9UGyrNjbqcD68rrGbB2",
  "key35": "47JFgkkiNw78Kcg67Kj88bZDZuoTWEqRwqv4bUTnen21Uq5FX4ENR8ZN7RYNEfTDKSgJuMhdSDPCTJCzTcCuEv6G",
  "key36": "3wADmKHPpRCUBviVTJ6RT1kkqfgh1a8PPwbRPvFApgyh5cPPm4JxmdXf7cTsyEgdo1pihRWMn8KvCfmgzihEWjcJ",
  "key37": "2LoWzJUP2zjuP7kWBa4KXa1nNPHmK7qBfLea91QT2DHmy36CHHVWt4a3ndVfYSvNBaJLXMhDpaAoBnxRSVuURy6n"
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
