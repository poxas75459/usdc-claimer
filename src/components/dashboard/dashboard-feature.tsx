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
    "4bucin8BKYiNnu5HGuLb9Xynz7p7RcokfzgqkhDg1aPDyaawzhfncX2LE9v5uJeuuhsxnqg5jPAjk1gTj1ps54Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGWagAYZVqHiQx9kL2ijfwmuohwTjG18LaocNc22i8BQp5NqbJ9DzWjh2HtyuEuT6zAVuxymVesvnwne82kmmX7",
  "key1": "4MWWYE6km8gGSwoE5uQSqrxpteaxrJKTc3js21c66o6opiSrisJ5MLMYVoynk9c6Atz3nQuu5RQcBdzYJrdD9Jhw",
  "key2": "5aU9P5jm3BTvLTs6vZU7F5Bf4t7RqTkgWszrpAjJmPoduaGjLvQNVakKSoZjJCvQwZfepFZFHzb6TxBRbcUi6KRw",
  "key3": "4ZyXrkK63U2yCUL3PV5LCywy9tWGAdqKK5LgacdemkugchAA7bwCDdb33y9sxLWpiDL4AX3mhNATXLVY44zGhCeT",
  "key4": "51SvoJpiJknmYvktUt85bPchWUj91EFdgBXtEJUtzEYmk4ZbRqep9YCGVoewLDEmhEyf4hnptsRkJsLMvs77Hmef",
  "key5": "62WY25h91hPaJ9bnEDWdwYwpfTc4xhGEfFAaAPJffrNgKmj4soA7JgjL8yRZ4YxcKhtLjED4P7mEJ23LqzQtpDZG",
  "key6": "CK4U1QxynC7JDxvxyiwLLHDiJinzLHk44CmgsH9WsoavSg4eFEwtubZrPU7Y841VExxnXjDvAygDqg8Ps75R6fE",
  "key7": "5rmzhuUTkE7ncQifNXpb4J3afx9gSkjDbTjJzibbt8vTeMVXXavwod4JWiyTcyykUXHkcR6HW1dt63ncrUPmHw5x",
  "key8": "4NNiqBug4XPJJJf9wPfUHwzg7iLrrZvDwyZqCfveV1KibkJn2zpMc9ZRb48j2uRmq2GNAxU7TnyNjFwZgvLn2n4i",
  "key9": "7kjWjbg2HBdBhgkxKZWSETNtbR3on8H1rXrpbAPwirVrqBG8WzeiKMqkkqEE1Vt5aFpmhjLF8Aof8MDT4sGj6Sh",
  "key10": "5u7UeUPBQ37cZQoCWa9J52ygi5yq2MfP9VsGyLzUUsCoTHqgPFMZzzmrTB1mfPz1YNx9kaEAURRPRqXzxrcnWWvg",
  "key11": "4LuX7R37nVPS6gwgKY9KCn3ZEPvFa5R5LaBk7CGTCEjsB1Hy5jXnvXNoZugS2NTyQNFQURm9TsRqekdXDWNqM5Sx",
  "key12": "2xJ1dWwPwJBf5uiLXmknPBwHX5VaN28pdWQ8bNdH2GhPoSRBkPjSCBUXy5ejWC9XSaZdCon73QbdaBpCvV5ffxB9",
  "key13": "44sPMaxcSDpqCZ87HvRXxPQ1T11WGbspLev4uGrnvi6MBhdpw33BuVdXLixLL3LdAUiL2wtPMs5XUsdEdNXVcsF6",
  "key14": "t759rk1mBZcto31g7sTMGUwFLzHbTqyepUeDdU87YTwApLfevkCB2ary5BcRVqq61jSNwtTh4n5GHsTHfadwjSF",
  "key15": "5jyo6jSp4kaVmtU5E1SSU5VpfdeuYkni2RyLjksG4ZNa8CSgCn7xiF5pSf1EPYmYrHhwBzZd6YkyDetvg8rXd1a6",
  "key16": "5f73Da7ZWjTDD22w4Bt1diQUJzK6LezPkJmLf4aw86YacdhrpfAVwkdxJVymSMohrRrYz2SBFwCrUT4y693KPQNN",
  "key17": "2tzmJPasyFHXoDLFG22pmHrmyXQAxZnDe5qTt6ecQ1yq7zJVu9as4oEWgKCHqjdzkVW29t7khgykfeJfg1ZRp9o2",
  "key18": "2dcs2U5hPTisn5eH5UmvLKfGy7ezkboR3H9S8CAZ6WN3fxefVDueKUeGeTBzSZfpPdzyh6R5Y6B1nrucaLVauMo7",
  "key19": "vmiGFiwefVnEXUesFa2qSerA1ANndbQadjazHUHu3fWxcGQvw8fQueUbD7VpHKLqvqFd2owFGFnjCx3PmMnAJh1",
  "key20": "4pHqcTpKdvkneByPgK4UJrGDNxCMtxa3MV5eAXaszqvRLGZbpM1L7XaXh5Ckj5g2nPSTxJZbCYNXndYdJSKr6rUH",
  "key21": "3fuYAGvJY64ay2a4Vjpx6v3N9xYT73AvgpbFXDKEsdPLvH78xacvDAvJqaRbSg68V8hiF7GSZTj7wFgk652DcUz8",
  "key22": "3dDF6bw78JSZxCnYXyuhj9GNahu88sMN8gKEHo1v6F2YojtgCcHnwuimooL7rj96AjhApV8mACjRXwzEe831vVWr",
  "key23": "2LzEkoMrBthkDBNSAoW6RCjaFad7RgwyRRR6iD5UtZZQZ3ESmvucYWicxWb2Mr4rEQtFnQyr4KAjFn5Ri5DPx4GQ",
  "key24": "2d47TcjQ1HozGGqK2hSig7hdNHwqUHRZSKSr9jQD2jk1YajimunfKvjz81tWCHAEWkh2YF4NCuUPpqNpj7tnQyho",
  "key25": "3LysfB7XL6eNDxoLf6rYAzt7rmDMjVcYy5peb86q23ExbTYD9unKj9jvCbrdjd6WVXHZvfBUMM4jrt8DzuTpL27Q",
  "key26": "3dPcVQUUFJKZtS5PemqZm5AYS9kLiwyEwX529aGXspLfrn13M2BySaGL9ffzYfKamh3dWZvcRqYjwLSjTATaYieg",
  "key27": "BrrisE7xZ66NSFHqMWUsJuPmPyAPRqGuk728GKTxrGuQsx3hHrb8wvfqNwKVhBFx9JXLLL1HBaA5i9iJAwFep6T",
  "key28": "3wxSzQ43z9NRynVZWu7eeze1hT8WPCZmaQJfCwv8SLkVRYtpvnGPZFHnewdihtbWMKPBfneZGe2ksnf2dBjCgxJA",
  "key29": "5MmvFCAb2zpgQpcmUHvjVaLi6ncP6z7zSRMWBDXAcVQhcRcHa7LQTpNcPEo96uK9fhW7JctQqEYbdTqzaCdzS9G4",
  "key30": "3KnDCJaqBknmLyeobbzYfXwSzkdkv6hp2xix3LpNx6hzq3wuBaysExMutFzokHpY4mNbcNQXhURDhwjWumBWLkW9",
  "key31": "ZpmZ3NYa3XTxU8aX79U6F9fTw7B1QyCfm6QVjNxurrV3M4wyPmYPMYyYsWXtz5y4Aq94xN8xCY6PF3CszDCxSd4",
  "key32": "5td5HzKMrCcdmF9T5CsqtcXV2eYrBr9Zer3tmSHmTYPBJS86y8GtRoLwH2coKJX6crxxRsyCNLp5h7Ef8YsbzHMN",
  "key33": "4ztX8iCo5shhWrLdUq3fLAD72yBVKs8dzdi2dHcwNyEDDZhcX79dbwhfSurX3r8zrdiVk8RmQnJeLcdjva5BaacY",
  "key34": "3XTCNmyRA16m411CgAyHav8WDCGsp4HYRP8DcXg7s1UXdUdXGvvsELNKojqNrU9NhmhTsEYgKL8shTJKMctntSq2",
  "key35": "3CRur5tFv9VTotPpMWewfbtv6BnW9KvudBa6QrbCbm1ezENfPywSZf52DSjYqrpjjoonwbu6Rec3KdUMpfzR7731",
  "key36": "4LW7UeLsZ5vAkELvmwdz5PHLiVbnPwvXDkrjDwKUGJ53j6LeNuGtTUNK1XbAyCxFVjmT5UsgW3Z9AMTmuiRxTZFM",
  "key37": "3TfDHjsHHD7nxNMdCpcXLjy6vdY1vBiiZ2Rr7kA4axekVmtmah7iaQ8ukm4MngHgg1tHgF4gbyDdHk4JrH1mdynw",
  "key38": "2nPWbJt6tjTDhgGyWyo2AxdtbsoWUpj7FZAyLhe8xiGdkt4aByUD337hNWaoZKvDiedsFGnriGo8ZUbCR73GeqiB",
  "key39": "59etjTymeckkMnrzZ3WjJS7g78oNjn4XXXpZHbQXrYe1rw9fS6B9RwSQ3AVos4HaJLwzo8F7aXKyXx95d3UrRKBt",
  "key40": "4pYXbRD6Lb5prt6U8TUscb718nCiuDeKAwP2DyrAxkoMsxGrnqGbw87NGWPS9ZvJajGDGZT6kEX6jJndA3BRBbVb",
  "key41": "3zSLa5W3vEgg3nNruxMjxPceZMZ2u4cQLDihATmcPpKQVMP7Tby9dVkDSZvhaiLuF4muPK1WzFJeJAa8sDWEpfNw",
  "key42": "5VNLVp1AmwX4EB2MLxREbAcKHfpfCRkCuq85TNNEF9QsEBWRhKKC55XHKQTHrLhWVi6VvrrxGKw6PRBLmKDw4qFa",
  "key43": "32XwMNwtffPCYWQq6CtG6tQRK68dvPm8q2kQYdiau5HqP18X2ZEqpAf7SLui5VbkW3MxWz58mAA66WiLW7j4mu7a",
  "key44": "3hAk6NNwt3j57b8nPEzY6cT9Q3BgYPYni76QdGr31K1KFesZYao9Wq2p7Dehh8okykJtyJEGwmNh3KjxiA4Bbbkn",
  "key45": "24CDsoEGs7Q6ciprzRMrXWgeBkbXWbzimw4jDKaEDkUfbXygjxaCEBxQfq4t39JhEgDD74QCduiTCrtx5bLzRg4u"
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
