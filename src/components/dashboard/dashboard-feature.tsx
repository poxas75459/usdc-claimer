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
    "4Tht6KNnDF39xQYCsyTWUkCJhzsHgih2rhpb7B4bcxQBwEFZmVYZGYitymb7QUAid6DDzogsPfvWCimkgjCoawAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWMAkqKXQmksUgwpFdFvjr2rrk1HM3hA6WuwPQHFajYQcUnDg8Th7LsDbySXJhUu5on9CwhTLEQ4GHYjLPUzy5m",
  "key1": "bU7W8FuMRRWycYJMgpynCnc6A61ZL34EhaVC8cCcpu19jHFPoxBjqChFwGNQ9nZHbzzQ6ruRp9KN1qLXXmaCqXX",
  "key2": "4jPYiF5Fajo2ShBFtBs4ch43hkVuV2PqttMRv4FZxRySxyBpZgrVpNBhAVHom6zpddh8p1NFDtbhZHhUoDxfVdR3",
  "key3": "RQSTZEi4R9YcATZq3ZqDAQouFe3M1bmeh7Cu64WvGh2DJ51uhtn9SESJYrvrTQa39hXXHckkJf1gZaRyYFJYCNV",
  "key4": "Vff8pvxJUxXfDyuqggMZEtYi2BcvpEWT1zdrGnnTAHZf5XWsktrAeDwdXBYsvRhUzaTcNQvrEi7jAkyFjBddFTM",
  "key5": "5n9Egd9NuJiHBe5H8t67Trt1ZUp3UMdeFLrZYuCf57PgUjsTNFwXp8PXWS3Cb7DYcRsVjGpXhwdULyYRyoBjYyFL",
  "key6": "4uCcKWNkGxeALbnemUjW7fnu6nXYt5R21PL6X5wpsWE7bb4a2ajAdGTNMGw7rfrLottFkxuRSepjpsCV6rmZeXFT",
  "key7": "3VNHjdd9JGjiHfVCbsjVPFBEPDFPmV5kTSDyoziVfB6KRbgKBLLtUs3w9aSs2uWkmHBomqkNkBMV13JGPKbVu9Bw",
  "key8": "5FtVCiHwvphBJ5jsVwTDJ5sRraWVYKSSfbmpiMmkGEsws3yS2RBQmQeynyRqGJCSi4ruD9Rw2ZTq516YYdJ7LWj9",
  "key9": "2NavuJLFTvWLDbjjTQcHwyxbgnqT4zxd4h7UsvuLTRvMALnkcsZh168QZQkbBt43QT5S8uJSAdKWH3keYxVVmgC3",
  "key10": "N9r23n8p17r54wDWWEy6zTojaT1PzarDu4XVXzB21hnCm7KdN9FtYktT7dSAhydbF38dt1HVo4DP42R9UsJ1GVT",
  "key11": "e5PwicyN3CFKcvn1NC6QFnrvAbUNgLECCdUrticK7rfHC9SQ3erejPzt3WdVpBdpaG4bCv3yMFJ6JhXCDz9hhw5",
  "key12": "2KPHD4cmShwdP1NLHDK3w1df9NGL432os81Vmyp4FMhJjR1cJNtmdXZ5gusZqCejcPg7NfAXZNYZHQiQia2KwRfT",
  "key13": "4TC88JDDqab9u2byyqzJ7SWggmRan3Fe3Gy13NWFFrzpECJCyF5AfjAWZ9mc4NZoV2krT6c1gjsnmh2r5F2CN4gR",
  "key14": "g7j6XQRvr5i3r75NstNMaSMDJChTHWBEddu6EvjdVQSLpZWNL35XqLDZFvBha8KKTCbkpqFg6C5c67NaTJRj6wa",
  "key15": "4Q8ferhQZqgWNeyJQZ8yoNJvNW1e9Bxawd6TucxsNT5VsgufCrCmqo8BMVyd3X5P1EezYnEpyTCkUM3sgJWXxUYT",
  "key16": "2STL84h7Uyd1SN3rd4TsAp8QrvoaY7h5Pw1d3r8iL5fvdQsqiseRWzZmEALoUwPKoqP2EqYBEbf4zTbbUCKZ9q1h",
  "key17": "2FBoqkTDV3ZzCq9t2mkE2CgSJyZ95C3vBBTykJKXZt5ykaQGWqbWS71JZWJCUBUaMj4ejH9ysj8x79bjrN16JtA3",
  "key18": "3hQLEAFEETmPwLwjTKNBtA5LbDpi6u1kJDyR8e2ppwBPmQQrt66s4iMLZJ6b1Z7TsDxFd3xi8rqXt3oBNQt8H6zz",
  "key19": "5opQhYVsZchtzmXm86WJD9waoQ4zQNkg4Twacjs7AvSEpj4EY5RKRuABwSdQpKq62WFf7deTbjBVxzav66M4YrPx",
  "key20": "3WFs9wC1C8oadmjFSGMCSMBzzwLLTQphcYZv4HTPHSt43962zK4uWJFq2daY35boRnerDou7ej3EEzoVCZwwKuo5",
  "key21": "3JfNpwQ5dVHS2i43K4uf98pti7ZoguTC5otHbGVj16wBnutoFzb4DFyyKB18YFzgHX9rLa2rTz5RA9GLsM1bYF7T",
  "key22": "646AcKLUwwownUPaMrxULVmiB8FdGVQinTUWDR5653kKCQb9XhomnhVLEZ7nuieN5YJNRPJ3bPsBkL3M4nXzFQ26",
  "key23": "ZHn74QsWHJUikrgGzzLuRGjMqNoUrXQVmbN1hUovw387YR55kkp87zrYFNz7z8HdFRsBqYEFJqnh6Sm9pwgTvgk",
  "key24": "2zSnrHbyhmQGfvJTqsuie6xwreSpZxpXT7GBbKNSEhxnXLxUMzjyBWyng45sgv3pERgjMPREhMsYUjCBV1iCjiqq",
  "key25": "5KtSaaxTwBCMwLwCqKA9tP9VjduqXQNc9yFwWUMwgQFb7x6ffaEgviJVhHZBczDhoZjCDcnxo6DQWF4kUcFHQZT9",
  "key26": "2XcyyHhqKqLBoRxYZHohuHYSsRK8aZxCqt1PmH3yYDrYEFAoExumREHJd83A8VxfWnjaW2ZzXMm7tmJLhQXRc696",
  "key27": "5ghWm5Lf7esnHG1RhN5fFST5ss5NPtvKJgGLQiZQQfqKuUnAUzWu77MdhVrkXj1nqxrZej6WBFDvwSSGXs11Bpya",
  "key28": "27NPPQUmEaxKK94RxaFaKw6Cuv67qa4L3JUfeF6L4MA8AqAHpayoDkibxDfRqqsnT5EZemV2XZK4aqJU8fPoRF7r",
  "key29": "62aSnLutYKyMk6VGYpNFWjBA1GRT1BAcjpiyyHbbxsV7Hfja2Db7cc1exAvmHkNnzhP8cd4vNFibFkrFbeUcFUEA",
  "key30": "7JsSkixBuN4uDaSewL8cxwe35vPCmXjWunfCNJKGPw7CBgCwmQMYxye7bWD1fQQq2yacSiFGXv6nhq75KPcjniZ",
  "key31": "5paAE6zZiNQsYPhWnBRiWWSaZAZoTpdLtxkzvkgmUf5LGTrCdNxe9paBfMoLHQxRz6TvMyGds9M2xLvk2M5YquLB",
  "key32": "5oFDrEbTzN3fk2QDEh1WeQEsrbg5tbGJhwhSzmHfeao1QyYxdXUTdcEavRJELuxGZRCzuvtLVnfstUqR5xz2jQiv",
  "key33": "3Ps9WxS52qEJAiD8DjQUtHEtzx5jCduy2gztufKutgwD1oM5ex8cry3YFQyAZHwxV9rNqn8PbAEL7wLyA28vRFGe"
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
