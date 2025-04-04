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
    "4r4YZuKb8UACnmNAWLiPJLFUZKnjf4of7sX3bRcGCPzYkJhsifETxR3hDEZShcMeKTH7cgBfK9zyuaAgGRuMEWwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2zvSKC2sSf9cgbcqfJTUXsYyet51VJxQiMsKQ2EFrnZtUKPAPLw74dHzvYkGCtFQAMFFsymJiiiT6EcaTAG9Fb",
  "key1": "2cauJB3zVCJ879FkQNxQwgbTMjhjQuiS7b8Dcd7vzAdWXMhxCQVTPVppcAhUE6hz6JgHBXgnUTECYwqdLHWePe7R",
  "key2": "3qsmX2ecuiGExGiAuvfAZxX1e4QcoVto1qQq4NS8xWAorNGHpzKeLY2rCW3yPMBRAj886RAyrobTieJbYF1qWx63",
  "key3": "3MLzhmsn5uBr92dKp3cNEWMNBpwvmD21a37EP93oFHiPJLx4miNGhpqFkXV7Zyh3Sy8AM982aV3mh53iyDdHxQPT",
  "key4": "51RHH8v1B3tCes3nPwiKmZDCwwinQQNt4yvx41i2hPwkNuqGti8oFzbW42MX1DU1y2uVr1nw9q1kfXTs2bscjpC9",
  "key5": "3kUmhX2LW12C3jJAeKyiXBgXg7Ydu1SXDUcDvxMmXTo2X6nocywrvKH8EjxyGgNLX6ggAx6zvUU3qWUcdEGdb4tx",
  "key6": "2P2DQVSzBdyQ5oZDrbT5cGSh2e8Y5AFFJsX8WHWWVVDvKA4YW2gjLkP86XYX9e9qz8aNyJShhYTtKfK5zYGgv3YC",
  "key7": "5xo7LpP8E2Bjy5LzgfofQHB8JDi9bZiTHkFpj14FGBYu6dVgTdqvJ8w5bUEzs9tdhuTGYAfcWWV8rGM3xUwQh8jr",
  "key8": "3Kr2mgPaGFZbh9hAQWuSbCi5eXR1Ge17tjAEZP4R69bMzMmdkkjBKymS6pjAoZQQTxgvNGtMTiv3mtYgzGHrsAWj",
  "key9": "2gNLjEFqSBmszPiXDsFCmGPDzAxseiMTzWA712SfohyuDXb4zGrgrBTWrcGzdWmiNHEZbmNgVGWMX7n3BaEp7WBj",
  "key10": "5FFsD2AUYb8yLtV1txamMx9MuS6haMCwq6YtdFRV69YCufMWuAmUQu5CivwrJKAjz7NrwPMDkzpQgmWGUXZU49g7",
  "key11": "4wWBC8UYiZwjCkHaTjzA8hAhGHrBY4g9KcmRS8PvtMyJmGFoCV9ews8t3Poa11HoaoJP4yv3fiFciUh5LvL5y5wj",
  "key12": "4Jh9Ao9oxYYhtRiNLf391sQZtF9ci4re3jkcq35KGzLjrhx6vAJs7L8m3Qo9DgM1zhw57BFjrrAQMVbCdTo2YFTa",
  "key13": "2baoLsHsVaDC4RM9TFFFJhaT8s6JxCJg1MjeXHg5WmpJrFuVqdJgrFrf7M1WvZKnztEmdnoTTkAqsB1Lxb6kVPyr",
  "key14": "3EcGKhGWRWXkE5qGnz73gqxZ7cWy1jcNL3PqXk8NUPkzk9F5iPaYBwpynyc6ai565wR453ezWLzS4KaXPTLwBVuL",
  "key15": "4i3P7vFXxanRrJWzTjrghgrWrK78zRu8zMKZXHoHYzFwLNZHY7r5Cgd6Dbh2FKHqAvtSfyDT51GnRbWnXYy91Bxa",
  "key16": "3LbvSwL4ddKaQYsHFkCn8Zov9sJRYuvt1XqG7F5SYJAxUBHuJPPgLX2y3EgydEhPp6bLrqkE6y3Ahdbgfxygswqt",
  "key17": "5D2CKr9dEZ2uL1WrVKRMX14qVuSkyJCT4Mh8o69KkHn9LjDWQUSdtbsQYM9G6bx4Qwm5RxUgRJntLGTrcBjNEHMN",
  "key18": "2d7xQ7rttqt4pwUb9TVsdrLqy6mCuywrYfFQe5MMN6DB7p83a1x4zjYWisKkUBeB7N8y4ueNXfAxjnw87j3S3315",
  "key19": "5qJrGqiQpVSZRSEFaTUfjvFUk8rUCG62UwTjqNrd2Rh6ecNSmkQQan4UmQYzTe2HktwPWZyrnTVWA83hrc3Jy8QT",
  "key20": "kFvpDxhFC1fC9KGueaErCsPpWWuqGiXdFA1KY4WRJDLcmn5ZQsVEnAEDRVVBChd3zGpA8sCBKvAo3pUHchQv91F",
  "key21": "UBeGq5TPjZnEdVh4goo1s58MSFJTk589zwi68KKFNPxBLS1r7UqLUdYFkSMpD29sboLZpyUoCQwkF1Fj3dWhuTD",
  "key22": "5xty6Fyom2WjgiLeCJ8vYMWEYQPz4ujEW1ExM2UxjUXimeRmYF5cr5tZDvnGcdk6vAvXe8tKUZv3C5MKmkPGCkwz",
  "key23": "5ukvacsz42yP2gSMuirufJyEVgbp6sC6LMTXZqBYK2yVoNJM23iC2uzyCBXtbagLyo4c3bp8Xbqs7zva2QNZqRH2",
  "key24": "56q8uhgsbUXNz47hh8qeCbPjnr7UFyxMjqC11oEwcofZVX2nHtAkhtnQktFRSVvDiR1qirHHDPCQnVTGr2x5Ln3K",
  "key25": "4XKCFLqJL9X86d3oqqRHfAajh2d7V5oJnsvSMywPuEjNLyjF1JUTnmboeePCjEHPknFhXbzau4NssYnhWTw191sv",
  "key26": "5GLfBdvqsgfZBXi8tMU59FVvDuWERZkwy8jMenjirwaRHUYELATy3nhD2yZJUYdn2GtmvJU38H2iidgpt8fgC72L",
  "key27": "3JDW34KwDNM9G4LdpuhfY4rnxJJtWpWcy96i2woKBpcZLLrg99DiNVom9SYxVzroHjSixhn21mxSVk5A1dXACiq5",
  "key28": "66uppPzTqTR383R9m3a6wTzU1fFtXrVGVnhmG85jkA6NtUugnRhNtjYEAsvvN82DyPyoabr1K59wLWNwyFc96Xqt",
  "key29": "5sGLxZTmEVGVGDGCKEemyZhJTYn658oLdQyNUajWjHQaZSoSfpStJbqkoYpJPH5YS6yfx1rB8m9L9ZUZUGepa96H",
  "key30": "3vQPLivZA7EXmToCfXrs8cmCvqidjcsqTBSUASLQ7ncQvmYV1MQwsmFBeMb36TrPkbdAj9ECi2udK3f5J5AmJ7Px",
  "key31": "4Pc7gyFYyseWeCn7KV7tbXzxSfauEg66AdcSV8YQ3yuuT9rURjtBPtiShufj7R5hbThEc4iTWEGcmdRLiSPLyWqm",
  "key32": "5cUeKaDugcnSR12ZtywwFGrWDxDg8uvFH9dmjv6nncP3CZSfkjtYRoGxDMGMVCV5AVJP1EQHmNpk8imYqCYo62vw",
  "key33": "2Ycm9P8fxP4LfeAn68CAZvYrmCzgFhKLY7Ue8nNev42ux5ocfAgSbiZ88rpYs7cfwPdpB1dS9nK1Jw5FxnzcgZuk",
  "key34": "3mQB9DnjWRcMT29UmKssHFDtdbkewRAYVVHcyPaeVzvKBvjLc6aGETKWphMbJVPzW6DgGjXLCQrD4qqZr4MDhiku",
  "key35": "5STwQNg9j1QCH5eeDs8zGqFo2bCRx6Y2pmoxuRjy8nbfrnjioPfBc43NobXbvvpdX4MZRvh8VseDFJJsUCdQxv7a",
  "key36": "dPkn4xPpAtM5ADBihdp9YZnUHxLGnQV22uNaKzbKkgREh2WJbzyscSuQ77J5N9m8md4cFPpgiCvHvsrmobnAhxN"
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
