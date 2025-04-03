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
    "E46bP1MVjUptdQXdgA36fANNdVGTdFWLyQdtUhCbbdETvfJ78swACZmieH7ypUnVVjJtvzKjS4MTbo8Dc8ZnYkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9wvZDgef4BJefcjYS43xNYCLoLyau2G1Y1C5pEie5hr1abD4wo6jxVa4c8ZVgiqkANvEW6tLHaxvsCjNU5UiPo",
  "key1": "5yeUUCMLhtpYgy8sDCkvUrtTDmGJNhDE1UX8nbYErC9XkXp66WiA5Cgg6QGvTJTAvM6EUqWeEn17nCYFWmsU3doW",
  "key2": "2ooa4Fru24UycmgnjX25h1MeUrNZqrkCoM3AkttL1hLUrFHp5EpPow3BszHHNmdHPvm3ErkMwDw7ndRqDxvde4mP",
  "key3": "31STN37RGyRkjUysTNmKe3dDfCjsZods5mKzw7XYtQptuhhiXr1syPYUtejxXp2PgQ5ZT8LXXDgkGVRY3G6aBqYt",
  "key4": "4WogJiiT6WnXoBy3EVao8WGY9FB77JFEe3FCn5KqLJJ57iQXGNw1oW9Z7VA1bQjFaZsU3UJbEAxNTAea2YxRGbjX",
  "key5": "ijzRSH7Rshu3i9sahPHqs1UFwLmvRNWSiec4cEAFfK7mfWEbUjAZgXzWcayTN7ARcRjFu5jpC5tyYahCqQkbfGQ",
  "key6": "5aW8AX4kcqGG6mvb6WkhgRLuxVHkJALgRAdnGUqXrrZBJstRMLmqsaAzJGL95ndzMo92RQ6nYNdRmrvw2evrkmBx",
  "key7": "4xTWpRfKFqwpoY5E3Eqc9BREprKA4UfTs1kPNu9TUkMbL5Q7Co8z8eX6vNAdgDRJQquRiK4ztaYfhHyqMN1JNh6C",
  "key8": "4mqypCSWYeWpFeMCSpsqMeYKSxo82qxcPJCmw3webVkc6CAUDXZhaWnbG9Uqdkapw7LX2os2vZGVKnqsrMAgDc6e",
  "key9": "3GMRzkXacDpi25eGMxXLvVEP8yW4AxaaaWrELZ4VPooDsJ7eHQxwNMH21SRzXy3Htwm23G898jN5s7KEKTvdxL5M",
  "key10": "2tiF7NNZMC7LgJkCGG1ZiPv6KSD5FaHR9fjCfvQvdPEexJMqvmNHobfN3Axf4J9JvNR5ctQTm8W84XMsQ99S7M88",
  "key11": "3YJD9F8XyicrHxdhQta1LgZ3CCKwfCthD1o1NcAURx9apv7sVieqhubvenBdPHUaTqy5PtZPz9v2jk2qordM8AEo",
  "key12": "PZfNKna2g4Tm3pj6uChy77ym4eBuznhs3LBivoYsmPABcC5LhKXWEeSchEmqt7YZhtxd38dqCkMhYNSXud5Miyr",
  "key13": "2fwnmXRvBuKqxNtrJYsS14msFgYmRibu18gvPB3GDQZp2MYRoDUT98xvXLhB3P4UunAiE5pWRQH9NGP5VHCxa2Ve",
  "key14": "4uq4TA6JtEjbgVwVwLW7kPP618iPhtK1Rc3UdbWqFd7BPSFbdNHk4ZAxQ5PyTA89ny1reXcEZK3q9PEpbWdA2fSz",
  "key15": "4JXQoQhuLtNWLzfZHzLwVS2bvmEAsBh39sYqxFh9iQQgPrh6YYyfq7dCMKZ6vQTXSt6nUeYUM2d4tC6TUq5KSEqU",
  "key16": "58Lydq9KrM1oqUQoPFPVismzVQBdPHBNYztU97EXDfmD2frTmPG3LNA1eAqN5PvS3vZtkQ1cXgkufK33CBnFQmXV",
  "key17": "uZWyQipPE25y7jbQzEsL52V52RiMQyVK6teEPAumptNpk13Ft12CyMboAXnLhK96L7XxxUJYeuadPS414pLun3L",
  "key18": "4VwjiCnvb7kN5YygKRtYhQHFowVNd6qeirhaTNkciB6hUo2KHtA5eoKXc37vzT16rEz42YkWrtAcmfQMtna9mRyR",
  "key19": "496mFk41x5jW7kpnC3G2EjLAFFCzQM4KXF5kkdAm1u66WDfkj4GguqvpW1p7sU9bABe6y9KyxJJbdf3Mor6JqzUY",
  "key20": "4wD8Kt4wGPp3XsQGVbLunz3vVfwCdbXkBRRoupE6iMd5s6Ej7uHo3FecCbp9y7o31xLtRXJfcF9vBrNMEPZBWU1j",
  "key21": "59mE4Fw6pU6p5Kk44ifHvbo8GH2ixkw8sUN66WwBdcimrUodcrA28qgCyogDycH641KhDFKy3umwMbcpRnRRSTLw",
  "key22": "5stjNrPLRRvW5zjXVp3fRzKEgkxcnqfGb5wtzA1BEEKcJmsiuch6QCQvPULviTbTB1STnPrXiECT7VwTYbmsakXw",
  "key23": "596m1iLZbNc6AxX3NYx64QKZMcT4KL9jbeb1CSrw3cU7wWMULgBPn21kpWrW4t9nS9uNuYbPNFxsyCgTjuwMj2Ui",
  "key24": "3Djs8N2GSTyLNjpP3iRV4bUUtuLTZw5741VnswatVJSJWapGerKtWdW24CGZaQSjU2sEyVHceT2DtrRrymwqLHLq",
  "key25": "5KYgZrE16nfnty25BMhALLJ6zFN6cNS6oBNepL4PV1t8WGrt3k4NKgq8VVCzmFNj3xBXYdGDQh3neBXTx7syKvtV",
  "key26": "cAckJAQY4TiyDtEctoqrqCpxnDU8u2Wu8kSmBiVCsG66Kxq76uqbRZgLuHya5Bfes6kH9kfffEHipodErZEb7di",
  "key27": "4haamoBVWkTf38ARrJ5G2JAw7ciuxknGZdwnnKFeiph1kbvgMsaQEKwgoZexxwGA86b4jLeHGMdGfJgSRHzvrHei"
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
