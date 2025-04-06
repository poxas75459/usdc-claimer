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
    "469WWB4C97XC7wza8yyfU9PGMUC7CSunH21YrYhdTjqbQFfQtbHPtE8qcG1DCii1zY2GJ266azsrs5pZvanvnmb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v5V4FW6WGBLhe1vZeXehDCEhv53wAxYkfxhxZnWMsgQm2XDR94KPcRSj8iaRXhF1Hvih2xpSX2RXpdbUCRnFMKb",
  "key1": "5w9TCprT4gi7ui7F8ayicwRnfPoFkJ2y6s1YcGkvJ7rzGkMJWWRxaDaFkSAVNCbdUGoZY5m4XpgksZK3dPv5Aex",
  "key2": "5CVaY9tj5jnR25dYWwS9RT9tGKDEZtdPNV9sqbzyTZmTEMcUDQENpGbWeNZzFRGWa9pPqyG9xmDYTKWR1Mb9M38h",
  "key3": "13gqYwoCYXcZMaQ4sxEfFdy8qWBpie35qzXDCZv7soNSyPEbi1zcyXjay3AmXRuZmW8RXNYTv7vAxt2JrthmLA8",
  "key4": "3dubDKgcV92YbtPVbCsJHiNEuy3GV4ffbKC7bYbGNfE8WvcoTM8xu1pRp9bEWZBMf7aFRtfaEXPqSvu1q86PH6XE",
  "key5": "4iXaXJFLoJQmhND9ZkF9EgNuPsQosPW4TdNUy9ZwDUE8rTAH2gTddKvkedEMYcBdnKbX6ZKbTXvtWMt1eLqGZ3jX",
  "key6": "mxcTeVt1vwF8nFr9CamsQUEnTD7nzLnF74LoiukVcwEiALPsJvLNtvXy7n7xDkm3FzyqtMmXpFSKjrB5eHHGD7u",
  "key7": "5aZvpQQKhG2HWKFaj9y8JdniPZX8eHGfbzrJN9BXJJKTGXuEsf4GZTPXKJbcu5dN9Dwz8gRRsL7a45FESjsqaMyb",
  "key8": "5mqARbnoaCBMt4BVky16cbBv4a1qSPQUPvJqTbLmSsekS1zm1TufrJDsjJLPdFuBFsNBEYkTjG1RqjsAcAMwz2J",
  "key9": "5j1nNtZe4hMAQ8CDqPrh9s5EscCSYLzFDf7dqk9J8TbbGLkPZBWqstsTdWpEG7h5tmPY6waAAT5ZjrRSYwf2kQYs",
  "key10": "4ztW43g9jz5aWJXLdurwRLPgSXkMvU2mkAFPsG5CXzZHJSvcxtSEzAWZ6aWEQdNnse3yLaxXomLavfL91Qpf5brA",
  "key11": "2xRAgNzhvvERFJHg3adu68Mk5QAMgQ6uKhjzBpKn3Wx1nF4s9SatqZ9jbdMQMxYPENhmbvz72PMimX2c61K4pEhC",
  "key12": "2sVYv5CpzuFxLSVqUnT7ZWa4Z71LesH5p3cjQaESgT42BZaFWGSXQtEGJqafUfAYScmdC1SdWMqYp1rgvVBxTe1X",
  "key13": "2fsCfThmfZxY3Mo88kTE9zbnfoBu5mcs8pbdBPsqRTuNKBPkUrzq54R4apt13fG4TSX735i9LAyX5TELzyTeXaTF",
  "key14": "eadfSFCKdtNvCsVMUZJNyMci9JpR85mpxetEQxeyr4GBbuqsaqHpcFEdEsrkAHe6a6itNBy1c22LTM4r25F3vS5",
  "key15": "3kwsdykRoQUjp5WPgiRtdcBEf7CG5qBD8dmYfWffsJYEhv93qFKaPLYGP9MLVLGoyJnfXpNajUja6TGSfewzcQoV",
  "key16": "64s1BpQ15ASQktw1dZ9vfP3y8ff2GotMQuq4MSXRs5K3WEtS5tQx7iYN19XxF1Xr8fDjqQNHuNW4CTP8MMwZVjk4",
  "key17": "5hZbKWDvSmDzVbctkmmuQuehZZT27oWdYNxKkrGPqSGN3qbKwndW4FY7jHAQyj2bH9kVvrDMwdNDiJAezjtP3fEd",
  "key18": "3eXy4R5we5q2P94YMdjn5dM6QjsHGeMQQynngd1G9EC1dCnN6NDp6Hj3PKSEuvsCqjcSqkxWEcRx382zjTeNEh2b",
  "key19": "3zdnje744pM6pQbkNWtQBU4krU6kEN2igop6jmZRadV9HN5415Xd4Qmou9TEJHfye1GXTumAnVb6cF442FY7NcHk",
  "key20": "2rjxyHpvNUZnjFVQc2aSBRA2PZCzZtrPL3rf9J5WgosETpWBTboy6oKEihCSk83w4uRP68VFQ8HDHo9AkjrDQB8G",
  "key21": "wmyG1k2F6hjCyN7c9BdD3wgCcrcoopnAFrDN62mrMtgPUFxNHUFpTXhaGRdBQBrtjTGKZttaFSzL4gbHB567TNf",
  "key22": "2v4kY1VWJjxXaTed2oUb2GAo1ZM53Mca5rnmzBABBmzPXUAKHeYc9i46JSawj3WwpT4kVaj3figHRHsusgJg12XK",
  "key23": "3N92SwMU7qMMh4uQnoRU4KDyXjBZLJBizxz4Y9otcmpX2yReHpfvRLZebUSYzZuBr1rMJSyNYXBqrCkhQp7Bartc",
  "key24": "4CNJrzrM5FDGVmTdj3o36TLpUy7E3cg17PBchFjDTYV5edbMVkcqZGK8gBMuyP4jptDLDT3RiMyKQWCRGZtCGrxy",
  "key25": "qMam6U7xpM3LE4tprFyQBk3K41m5uhFar1XN8vs3DbZuA1VnJkjBJugbeXRGraFLGdW2X3prCDSHmDSrnfAYahr",
  "key26": "2DChqQFU4b1bLuctgs8mt9TSNQBhX1GeP62vdeQAT6dU2fZsytLKtj5ULHFpw1haLaWjkwrVbiPx5SwxkzVpjnX6",
  "key27": "5E3731DDkGi5kBJQneTRpe4TuFVveyCSdVBuFZGGw7fPwMgNRygM3TgTGNJ6jT2wfs7Q8AaC9gQU44ydLZ87Dccf",
  "key28": "4u9XqCQReAFvUvAeZhgT1TaxJYwZLzn8W2tpxWfM8uTPBoaQU2JwBTFgbQ45hJRXJ6oyVYt89dy4MkfLtSTPsLsi",
  "key29": "13fjHWqjLEweRtUJvro3Uizj3mA5o5S27GCFd8tJF4TguC3Ry1eLmK4gibe9S1RsgwBnPE2psaNqwUdy87UQkkA",
  "key30": "2FjQUM8ZRnGg8K2MvDgCUfY97n3XufEC8FM1i5w576nWqvNJaXLMJAVmbfBXQq7GrGyAu4i4tqYyQRddg9gZShss",
  "key31": "3hBW4ZdHPso1j9cSbJLvuSwK2w1caiXNYwQjyQBkdf2NDskxH7x6zDkW86FJy7huRMHkQxaZEwwUiHjJg8s8CJMe"
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
