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
    "v5m5WKeqmQm7kRGjxxB8NLBg3k1b3sh4jjBzk3DgN2WXAm77PCPHKJ5SGzFQzXJFaTmfaTDQiz68suRArdCYg5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u595qWdisQLMijNraHzp64K5WgWBWE8a7VLncAjWz3RbjtHkiuZ8vV7iuwZWqf8zLRm8uPpHXtkSZSpb4H6r715",
  "key1": "5xxMxnXUZ7S13P1tTnGmfNfhcUZecBRd2BvYPMpb2rBtT6LeDpGQToJVwd4DhSGZJPJakPLtNqrfzmH3MatmtquV",
  "key2": "4DGFNaYp4WpMT7cGaxxgXTzsn2sULSctHiK9RHDrXVNmtaAMpC4jxF4jDD8i8EHagWJ2W8nhHy8oMDHvZiNqeSrP",
  "key3": "3diGdSh73TJBmwXbBXm1nGwaYzBygZyQDdodmSNYqMPd8pDh8EgcfEYzLYG5dBHp1HjhsT5FUb4oTrQfpHaFyqp2",
  "key4": "2stc3AGCpoBcnepAg4mWY19fMoDi5FsfPzYPcNpXqH7rsuw6UY196meJ9ZSusYLc5HkYWUeHWxExfrJi5JHvpRLT",
  "key5": "4a4vepLhXEqgYG89CDmwEZv5XLNhiezAcfPNo1C54HoQGzsdphFXg179uGZLhc3qjWZfHdeTM4iijDDKR71rHfpA",
  "key6": "5PuvaykWxiK7EgLTn1jmpeL7cWhXKogBtgVnmhE6aRkc9gWMRteQVrif3Q1FsrGxw5A1LoSCNGhV47TH754xtiez",
  "key7": "L8KDdxHmdshTK9SQPNDKvwXTyGfqPqBBUXvyKQdFZ8voxHifj4Lgu5Dbq5qYQhCSZU91P1X9NVVRiPXqmqDwGCC",
  "key8": "4aqQxCDaWZv2gF3FfnRfpDvHUADMosEf6rMFf3Hc9nmbPxTMyZmmYLn4T6U349zSXLr57j15pFHn1QTdeE2pSQQC",
  "key9": "5MkBvMRAgj3NneVWTTvE9sKhVqPkU17PZSYr687dyP2d7zk9uxwcFKt2rM7rhJpP484A82XJviPgPaCuNGhewey5",
  "key10": "5Ff2RHfeMmzhPtoPaYcqrcRdp4cSXdUEJDN3N1GNXnDmwnRPnzA41R2FnRxVnrZsFHUDpjrA5RfHsB2FFTPFvZtQ",
  "key11": "2WCyLCzgnUAE7Q6WKTtMhuB5bddgkVw6ZjMDBvXSh9t8PY9XQ4sMhRL4HhXofCSTGJEuefhcVWtZyeoWrGuRcbPF",
  "key12": "5Fvyu46W94Qa5e3jBriN8Q79jP8c3cqHmiEnA6Qz1kPEmJQiym5kYFsz7jSZgcQ21o2xmrYVqpbmjcekzEPCqQs5",
  "key13": "3SvDf61nXrKiuCQt469DMufxWUZRqGy9tpTr4rmJmLjj8kzUYyAsoR6iB1mDKSBk9ytUJV5FKvtg4rsUswQehsBS",
  "key14": "4XNhdTsnCXKpWLusCQVwzM7s4KZEANHEZKw2pcRUpBxpd4xh5oKNwCdNWjUfWXTf96ePysnaJbFnfGyYyLEvVfbb",
  "key15": "41Pfq6FSXSbXJ3MSzVrx46cNKNAfV5tGZQWqhZ87HACZh7JX7g4M4ZA8xLmiE8Enf1VCX2W6RgCEKgvkKXnzxvP2",
  "key16": "4dpNgpgy4fcvjnbedkD1xwUgrHEEQnP2ngpbjtcgQ5TjBE4Hr42rmRkaQNdAjuJQyaGe9kjSrHEMazkxq57GEZtU",
  "key17": "3LTMr3kzH7PyJQA8NUjN1aHZapHv9pCpN9DfCSHpC4TxoDrVNSbzULwvzBZ7Jt8eVXedCWjUPTMegxv3dvi63c2U",
  "key18": "3p4FPZXeRk4En49Zy2ZU3KFRUATKj3HYP72UbyZFvqXfCecEKnk5zpzkgi2opPuCHz8uiEhfJQ9ZCNqesvndxGNt",
  "key19": "4QHaUvKGF4pSVTd9w7Lcan6J4T4FZ7U1vGUVHt2qrdXYcgqtY5Hc1t97y8xDmfRRvX8SYn7PL5AG7hxEmhh5bkmR",
  "key20": "9HVUVNssTZ3UXUPSXSGekkRsTbZsx1AhqaNVxSrmqohQgA2Q35qoMPbDQ3XNRqMgdHFpd7nMKhtKApqEkxEDzsm",
  "key21": "5Yv3ea6i8pYyJgNxA8UNbNmmNGdVdzUPWDQ2zDKw8uLj8vUDza8GiaX7vCaAHywd1ckgW6rKonbik4p6pUMUGBjs",
  "key22": "5Eh6ouxSXomzABQnFKYJU869h1XxaV2VkJiqopVxG15mvhpkwjrbUq2YW1WcUFsY4GWyxk8KCCyUTkPhW5e41NJX",
  "key23": "PZauwmYVwWu5Up9W63vnYT3c4zpjk1oK6ZD9XNyEVE8QwmRL9GLbingCdByKeiAH8Q1rLhBdoLvSACTDKd1LXR5",
  "key24": "3iv8GnLmv9R628oY8BCP1mrsXmtX3F4XgRbPDDa4A9FEbc8G1qF2C8QigDFYfHoYRv1VWP44VtbJY4Qb23DhdKhw",
  "key25": "d1d2C54ha6M1Ph9sC9Muga69FPqr8jzSwmwjGY3wuUo7YZmmRRn3rKuRqT5UAHcGaYmg2djnnrjXNcp94GQdLGk",
  "key26": "286nf6mRcBbpdjPbetZoRUnSRYPFHbGzPkr1W6yACy9F9UKoui3hvG17VwMraF82tBAJWvx22CLP3HdgyjbXBfAm",
  "key27": "2HYXXPfB577hJnsuPQKpdETFRXn1N33RKzUxRFSUhfz6mBsjwAk3xVqp3ajyoR1c25euEybchJseXoPmn3aCV1Y1",
  "key28": "4ikF6UBxsQCySxzxSsx1ZHMv5EzrXrZGypVygRvUfNQutDVqP6VH1fVW87gW9mkQXhr9kw8jt9J1qtSwHKVYCXvf",
  "key29": "2xyL52B2i6B8SD5evhf4aakLMbw29JFxt4Y7P73zW2d5SiSuaG7YfV41RwNZ3W3ap1gKHd3HuXdASk4pLJhZiYHP",
  "key30": "5phf1zcJKaXExzsNwNPr6mzwheaaic6vrHATozTGgzW4bJvBApmsH7i2L3NhDWtpMjjimcW8vmTi9GV5WsbqcZCJ",
  "key31": "Cp5pQEpwxoPY5mHZPJ2YcHpf5tvjFtnZyZnJt37NzVWzxn4Wx1Q14Qkb16h83pCBzd11S78PAeBTHDdTeuucNF2",
  "key32": "4z9nzSe1WdPjNMDgeifeGt3REZpbJDUiJCmpuPeK6bopEevQDdJH1kjrgPJkb3ToF8JE5dvB1593Vj2oRG2fL1Pu",
  "key33": "4wbHofVHjBHPKMqRVosUKxDg4ZBshzjgRhQ96TsbCgNyxgdfW2S4v6c5mhYSEjq4aDMB6dLJqbwcrst3KRtUjs1d",
  "key34": "4My1EN57ahZ4zKxN6USm5ZwbvXmEFUM4dmk4vDvobitx3Rzy5SU22GQaJ8ZamkuYdEnxgJpfv4NGUKPzeteVDcBC",
  "key35": "5Z8b3S9JQkFmhpYmrLhDzKbuxKuWsoW4BTPQWyuEk6iuc7rFBzjFQidF81hJd2F95eZdkgRPhtMZ9pYB9VRezpfv",
  "key36": "z2VhaAEgvvujV7b8CkUxyb7pZ1txCDX31QXArpnBiTL8fzZD3sVyT18efsdUZXvJBSe8JvM6y5BZwAsgYuCB96s",
  "key37": "5PgjPcFGuS1Q2qXakPwCM2xBdUAKBVmeoS8ydQ6jxMPW69yZSB7eY3GL5okGNkuMc2RZbdThVnHjNB4SEzYGQt2c",
  "key38": "5g3MfXZUPmn3jQAGKokoP4BxjDZPWSiLHusMQQD1YgxfNngP7tC6aaoMHxbe4vCCc7qpJ4Ya7ZwkT749LDUvN9oH",
  "key39": "DuDWbjnaaAvBzTkLeqz1svG1bKKmBXnZusRVaYBepg8FrghozmPktkGSD2jBT8QMN2smzjhuXRgi5vY8GuQ3759",
  "key40": "5UGUMAWRBxcH2yJ9mQvRx7GgMUMTS8YVBrn6cnSadDUTRpVcQBMsm35LwuEUP6raMfUrfGnykH5XLqUWALsEGyrG"
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
