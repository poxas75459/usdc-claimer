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
    "4EgSR8H5KZYs3tVzHAt2G29fSKy4tXYEewJP9UA6FPjzjat2WcBZgQ5DLxTrFA5rSQfWjH63ZrDoJkkNYkX9zLYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334ofE9ysPLktvtxnS6FPmnFiJihyFwC5k1H5TUUqET7VKm1cfXdEHzWCseT61pnAhdMNV8dTXWeQHpNFvUH18DQ",
  "key1": "4q9yhDaQ7NgpbzS7GFvzERMRQtharm8r8JYDeHggwMQyamYTBwYRxGQaboBkFgqTt2Te2BVCQ781jRMvVrQorgVa",
  "key2": "3gpWLP9aDE6xFGZEyTV6ekn9LtoEfM7CtAkXZky8AXkcZ58xasiagFePYHHoVaABBNpsQH5cNBsrZx6HcdzZ3vqE",
  "key3": "9paQ7YCMARcQM61YRgw6ujpHAeY18QQLbi4fx8bKir3aHiEWmZSCtJuZHeNjSKvpyWmJ8dPX5XDfoFizGEorxX4",
  "key4": "3q5tDjpi4hCxpLdW7sTqGzc6ZnpgswPejcggG4qu5siAU6Z1yYz1CnuGzubxx2RBgR9yKjAPKJwuSyLSW3fvgCQ6",
  "key5": "5Sm1eLyrns7DAHzdX5Xzx5MNEnM6zXeydR9pbdEreuSodrqLBdqk54BHdaRAwh6rgQ5aGdSnUYv9u8usdAS6N2j1",
  "key6": "45rN3EqQzmBZKEPyJbwdSCsMeFfnqVbnCNEnKPaoSqERgBRpTCzZByiYWiFJk4C1oo8fVeLUFUqaVZFTrRx6Zdhr",
  "key7": "54m3ieXkBSR8T2TH5VVtu6KdCXWMJzdLjS6wDxSsrN1H2cDjrgrxB6ehiVfvMYwBDnHErLsF1vmixLG6CxbJiaz3",
  "key8": "iRf4QZqSqurrProdyomnaWfJT7G47RX3UiuvP65V7HLTxK5qQa1ip736VQXkqDmBJTp4htByt7PNaJn7TCRYrWY",
  "key9": "5s5Ck3nLtCdL11SDZhabpbpPz5mwchmerATJNj8g9RFdpyrbVtH7w3Q2g6CUWVpNyjn614abNeGET3ea3dAQ1Pn4",
  "key10": "wkEr6R8Yq47zRebgZ5FVyCNZLJRP7t8pxzMrLvtqYCDS7NNkwi1cfnChSa3ViVyRLa8mr4fMU2Bt4uUwBg1zoXG",
  "key11": "3Neg1vExF9vnekdSRHSCVZLEtqKmUUwRW3qEaChDCdd6AzQo6vnVg69J6r3jPtNhrSweK2VcX5W6TMt8MABffZVB",
  "key12": "T3oj8pB5fxbYm4vqbTnJHjNcSXUAnhcKoQLHr9guzm68LLJNv8j3pT76cE55DnxePVf5DwaFk2FKxkYSujpSge1",
  "key13": "5d31WLsBr9ZypbZaMkV8DTUdZALGs5knLHt3FHLYQSRfw6wnD9WFpWbQdSUF6Q5QehYahGz4C37ucrsAwzp94FCz",
  "key14": "2xCRcGgxay5NLPH4xB8kuPwhMAYuUhyqEdw8nKUors73pcpkq7gQ2ScH3piQmyUtc7vPdtNEVYQEgf892TgLqTLK",
  "key15": "4xdjP4XjStjHvDABm94kCCkW2iAqxAn43kpBTRJDFVrQLhjvK4133mpCNmrZYXpmBc7bwAhmr73jx8jrV61XRvz7",
  "key16": "2vDGPwgeKsrCNSNrzkRP5FdtzscQfrxyMRwfUdj15t7TCdt9tDHbuwMw3K5iuCZvBgbfBDZphKSy94JvtaU4ZrRQ",
  "key17": "4LZDe9ir3qPkK4NgVSS6TQonDQ9wh2ij3vwGqGffayEhwVE7jtEcPKr8qYWU9FUk4nJQmvdfrPia2RUiZ9RADBG9",
  "key18": "3Ri4ew52mwTj4tMUg76RxbhVdj9HeUPbCPMFN8n6p78vAfDHnW1MiWgce1r7mp3DtChw2x3yMNx7oHWoGQki7wYG",
  "key19": "2Qk8u1qJekCrAS1VX9mEDVcw2erBchEJ7QWjbXSqnU23WruYAutgN3bVUmN3bxboamqBSVoiDe5aF1T9cDumPYAb",
  "key20": "4kXG1YHxFm5Fc5ggqTzT4sfUHvXVdF5XUG2XouQe1sxYUZu3nJYDzLYowhmSAwfiX6i1qf2yPKLx1sQqpDP8RzMF",
  "key21": "5rCWkYXknWWV7SRV97c7Av9U4B3Dmq5NnHvdbojmdEKqP9UYvWirJx44aAmUeyfRYAyiQdJ4ZSPiNZmdGraeDjKb",
  "key22": "66eoPdkrrLiiddiCB53KJ63GQdMUswWdPiyLpwKye1zCZidcHq6rgghZcxUu5Yp7XzEKMG4kDGrA6dBYjbvuUzZZ",
  "key23": "2XEjTWHFURY7hSjzfMZNPboVXqutd1d2o24EUcR3tPtpzNh3JFHtC4FFQDQDWAhvFoqi5sA4DCZxwCLvC4qEAMcB",
  "key24": "5PFHkiHK2NcVj836R6Ho6asZLjqM9TCW4RpqsdfR9iX6euMEdq8gUfQvrx65rbGNepna4L6FCQHaFoG9KXPwhWYt",
  "key25": "sPo7kUu2wZxjXDwkeaqsvU5WuyKNQf3BhffDN34vwA3yfKkujtA4kt7pUQS7vLzkuefKdM24menbER2Kpz1ikcT",
  "key26": "2jPuWkFd9Pwj1EVrdQk8n67o7YRH1tXQvr3CkXBA7hDaZvpRrCbWpgkAMVDyS15BSNY9XTJshb3FFZZGn7Z1J7xz"
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
