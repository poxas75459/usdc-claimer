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
    "62a3b2ABqF4xDBGmcBjxSzGjdwpoxwKfCEeKPVEJLFFgwLAcdb6NQzi4KAYVsVLntuJzqqRtEqfUYtErQ48QywRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKKL24caQCnMh2psrFrzNZZzy4tcGTwZbBd7SZZdZxL3VumsgdFrxWdWRkqgT3YfQ8nquukCwBFu5783XccWKBu",
  "key1": "dFDxoDAi43EHxLqRtdGWuRDYyzRGq9jBrMsM7CfjdpARma6vmXkW4K7Q9CJsowB6Uf3SJh53NU5WctkhqGxFkp8",
  "key2": "2fyynvTEVVKEHDDyZTsiWWbiVjgFFzdCeus8ZwAqfgUSuQqWXMMJKMKnrBU2sYF1RQJcS6GU4JypXxCxW8Ln3BBQ",
  "key3": "31fhQSHh2nbPDTYg4cMs7frQrEmUZnpcZmQDNQRzpqzX8f8cBqBopQEjWQPGh3exoAdZG4HUa2HBUcLyvSKoWyGX",
  "key4": "v7TXyf5FS6xKy1WC6QcqcudBzr26WdPzQLouQgkC9t6T4owEZcjtZMWaReLxx88AptenRvBT1x3viG4YPsFAxAD",
  "key5": "3rSgC7gAjBFQS1aN76SBD7vcfK2Dt2LC6L4UmWNB2vWLwkSvFnSM22ZHQV78pNYwRb7af6hYimtb9F7VJ6VpJPBK",
  "key6": "3iciKAJ4chasSCDnFguERUxpHDaakcBmUoodvehiqmdMiKE7LtjokeabWsUFMWrw56frWHhbVvoaNNo25EQvMUdB",
  "key7": "2cxCUjTrqgX6mQBJSEybqfF394A4krQ6a5UURjBgSRk9MLL4ZadLUkif5rpqP5xwPwpmYdtaJsLMHUQsehBYWJRz",
  "key8": "BReEhoWWj5STsgXFrXgxRnF4DeqAg9rNk5cmZfNHiQ4USuvyjosJnQ97Gt935BQfgM5pjbet5ZjmuRAczA5y4KH",
  "key9": "4yAWnG1VnxQ9rr5DuR2pVpDuM7V8vFjRt7WPH8PsrPcT1hWunA46E2L9VRv7GPiz6R76pjpW4QPZPCqZ6eNebhp8",
  "key10": "5VBqbCSrZjCbKTyv9idqY8LWTRgBhW5C36ZZhUVZeLXu6GJstKY7iWxvbo6EcFEK2WmZWwneRxhWxfVZjcL63pmi",
  "key11": "3STM1Jp35zixjCQpvmQ7R6rUYr2jLHJVj9agNQuZeazJpu7Nj8aLjVq9WqXEE5Guu2Liqi24E3oXvh3pLdNHBRxK",
  "key12": "2sGbXkLvj69ZHKkxWU3m1n7oE8JBKDppZCvkqJo3nDg9LqF4ubBEYnkC4JonookJPnJoKwGz5DTZu93A4bjrJYPc",
  "key13": "63jWv375uz82YzM59CxJTxnpM9R8aQsJ9qMYhC4i2EqHMHf3VAet1sruhnrE4tZSjqbvyL8ufVDXLjXNKXbNvEYM",
  "key14": "21pwguDzUiNYmTncUBi8iCnUGt1inMSuRwcEWtv82ufj3Jg4Efbvq6xoRPb1NXnfynr6TFvy93gw9c1ggy3Mgw1x",
  "key15": "5HXpYHDwMjwVQLPhzXJvMJr4L9BUeJPGwcPyMrs6ZYu1JJ5W8Y9UCgrFAZK77emDJrd9tW1V6ABvcxYeji6f2ku1",
  "key16": "2qsCxGSXhujBCvCecrb8JK31A9G4hT42xGPU5mPw3C6YVWhDFpWzeaadETnqFadjvFuMmkaZskutFHm88byR6Khv",
  "key17": "375sY4LyUri2QH4yVjLomhBWE1JpEBhYKG5bpf41S9YHwjCf2n7xTf5b8jBD8K1joAS2VcfmF5oF1MuwhsBfrG8X",
  "key18": "2xZhWkwi8KspMhtjgVabBWwSPbdB6HgLoZLt2Pr9cMjoxohYvhQ15zJqunKKpd3h6w6kT6oGNtfrttAKv8KP7T6e",
  "key19": "5gVqKeEMhbj61imSwvpgyGs6oCi9DXTRKV7KDs7fEaQ4mGaUNmiq6NK8hXmEbhcAchTrgiMrihNLK5CPM4cUCLNG",
  "key20": "2aVCaVhmRiMJYQSt4VC8RU1v43uZRPKmmaxv9mGzmWgssqNNA5d5Wt8yoFXDRUHXP6sup7c6ejABgWq1Vc7kT44X",
  "key21": "AQCeNVv3MwL4pkVVBE6KhxibefdLDkvNXvim815zdtSqU1SagsK5qYQv6QiPRH9kuehK87CWEUibPs9PyrVEb7C",
  "key22": "2tS5WhCZZ3XnErRXCqng2rTJDqF3WmKqmnUMJ2scHbCKxSdhv7iUd1vgPMxsPCzfa4vmHrT3aRALTUsEf1BrNnHo",
  "key23": "2FHbzU58k1RhhQnc6Z6ZfM8RoFrV64QjxTGvPTBDrVSUyWj1ySqZeoV3thDCrTNuwaiuUaE8PR4wD1aUtNKqVmty",
  "key24": "2TFN3Q77zCQ3LNiLMmd2aZ3HLRvErNSQDw1YnSCvc8s2oFa7PYfSXsbQiaX3b3sQv4F5xiSUzENixeHe8dNGu5y7",
  "key25": "4majswnuWP9UFa4jcNnNK7g3Tawi5xW873KJygjggyngK5TyqGdU98pBjeKFcFAbpcc8whhcTkVuWRgKPavLrS1p"
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
