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
    "YbN4DiWgdzh8YZ3AmoTk4y2cNNY12XfE1Xn65BnJaK1j4LmRsaYCGA4bPW9fvCDT7PutDqCyx7fLMJLtQHHw6gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbLJEJcs5d7Cjj86Ws2dNcKNUtx3AsNeqevfhUKA2qLpmFYmADA1YhPbTRkZUm9kkNftt83UqdTpUTVnSXxfh9W",
  "key1": "4grsPGWwridpcMMqKkwtzdsPe8NUbRZC8DCRQUL6vMiBH816Yq1khndZBjJ6bJ6CTbgcYq8NhsqhmTErvhppd3k7",
  "key2": "TvawQK99zNEXHTVWJeELEsocmRAaYb4cjAjMkvfmbJE7drXXEkscKTPpym99EBhxrtHq8airaCsZefPY9KdLBch",
  "key3": "5QR7y78tLcWuEZX1zrUdz9T7uDpsiHT35EyxQ4LEBnPiR8ZELnjC2KZ3yNwbHMu5GnoeFML4PvtiTMCrRvGJeTSm",
  "key4": "PM811sRnXaJKxeFpKscRAof1hJe2Bgw2QHU2vdKCZkeGv4LnS8vCrb6xGVwQqK2E2dk37uY4B1PoJhuKpNMMPHn",
  "key5": "4wabLM3WEMXLUAc67ag4UmtrGe2YwNBqJz1rYp4syoR3WbCoKEp1t6uGKV2eL2TvPnfpA8A8tCEuBiv8JzCpnHzx",
  "key6": "2ZR5HDvzGkxqu8MZAMwK8TFbTFXY2qCBwJE8yJGDK1JHVbngiLpG3GeVo7JTko2VLoGMrFSXvi2bhmzdC4bjAQyK",
  "key7": "3DpkS3MHQrJSMEhBiDcXBzSgsfdchVVDCm4JTgPdJoEYn5KiWgNTH4UPiNw3v1BNukpD4y8SnuaQoRJDw3BigGKW",
  "key8": "3Q6miovmXdi3aNVTqZ4PRvv1av537BXg6S1wQxaG4TCHHhTbNiy4mRy3LRvpZGkNjWhZKkYixJWSM18wvEkaJAR6",
  "key9": "45ca6NKj6nWVSUEEcaGHmRpFsEXKpkLztjF711h7yYz7gQ3Mz6EnarV6bdaX6bAAoTux5BcAmEAUiAmaybjfEHeQ",
  "key10": "2e8qXxRjGZpwbfXJGVTm3iH8gP5KRqxkpXpmrotgf3f54ztnEYT4aRMKvpkMFxjzKEYCiiYgemoCBe7UKwq7svAd",
  "key11": "26CByvdeXRL5V13JoCRJ1VZRHqY26Jnv2xTd8Zh5qesBdjXaQPNNwekzQh1KgyGiHsrfUPJSvDbnT54zpxkJvfrm",
  "key12": "tarEiYEbFuL8gKc5B4KtkJpUJcL4MatwN5bEDscxfNKVGnqZHpVnHBFb5MuJ2WwjAnFNkVjd3biiYk7KWUAoUKk",
  "key13": "48BUrf3aggtjtfqoHihESW18YySZsgAvrJNxFRR8ndRvVirixPmtVztN1tSRoMAQwQBeTtiXNkkJjrVXDreQCod1",
  "key14": "2wDxN3fgc1KUzPjhRVMEJ6tKeRLhNHakkE2jVoRHMEKqGU1mXYPPLkSeaQ8nW15N9ESitZqrbpJgJumRojMSzVwU",
  "key15": "2iWDpyQeNnzW7rChAwKDHaaWiRGQfBmpRxZHUGFnbWBmeBmdStH27boMVGNuZGY3K9fAEKKnB4QfVizBcATmHk1g",
  "key16": "NxTcRtHjBUTm1yh1mgjzDwtPg7vVYCCqcq9Y4396fNprRCQZYpcWsCQNU114GRNwW8ozsjkZeYgnRM95Q2HZcE3",
  "key17": "5eRZuPjNc4buKJREWgR99uHD9YQoNzf8a62Nz3JqoK6jcr7kpmdpUjLXf4PogUMxYURZpWztvLcT9niJYorrpQu2",
  "key18": "66xjqbMTso82hKCCC7rGynW1EM9Te4qtHBW2znoU481JPG6bS6zk7U1RvZK7gyHeSRfrxxPCfMVwtR46BFmg3mh5",
  "key19": "3MnVURqFyvYgytabL9RfnmHfmofcsado9aJQ366WUWdyUsupKEaoaaZabYKigHo6TqPGZwDPoeezq1t58kFQsgVf",
  "key20": "PkvQJihsd4sbTihVy6KaaUxw1FQXBp6HZtrQWySC4EyLS4XjFpFHxyAjLf5ecwJKzepbEhgtzXhCr6ntXMNj4a8",
  "key21": "YT7wiYEFUSq2kqcmxMV9wXHsh3MU8RfAJw4YRMet1gD3327Sz1mvksf3LSctYVEzeQf76ucHmt47MHK2inrNSie",
  "key22": "5iwySCFCyQMNdh4cYLPstkLc1T4E49cBxm2jQR7f51HhWCEH8j9ouWTm1z8AtFrd5keiYSLE52zPJqZXxp5FAqAq",
  "key23": "3gqyato5ZQ766MjkVv8JcdrnMqzP167sqYf8nuz9NRmTx17CP5nGa4ReVNqCMmWZqzZiEAfpRXrgXdLyTrnDBYtR",
  "key24": "Q11tR7Y5HX3fVgDBNPAkBnCQiFCVvFpQPasb44bZjdV5BXxQ2FmGjnkA9ZnWaXbmZ8e1c5f3pTQdg6Z2V2obYeZ",
  "key25": "51CCotVWKN2c8B4jNFuSdvWuxEvFpoHAtsah5NFsnDTvm9MQvta9H1tu5h1NfehbH8m3mp9sRFPfQZLWrTJY5i36",
  "key26": "2RUtFFdwGvFX8CtZvJRE9Tuqhf4FwEN3DGA1GbuWegTCMaWtku5hQjPziE5qkuZiw9STs27zArFJJLE7FkgT6jJw",
  "key27": "2wVcqWNRnhXZZmGGF97FmiGrc2uWXL9dPM6ZQ4DsLQhToegjjqpQksb6W1wjk7kYp3bmpJbFLLMCf5aGWgZFgpsd"
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
