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
    "3PLZh3uvisFjjb9svEGZ4zEFk9JHQHjoaxEnAYpBxPFAAJTtVdeWRFAqFGHnVY43Xm2uq7VFp7r8devnsoy7NfuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSm5Zdfo6BVLvZeKa61sWM7DSxu9wR18sSCiSMDvuRRNksC1rZ28UFJ14CGyYhLCST93MwQ5mt424sEYb6hdim8",
  "key1": "3xmWfn4esN7mG8G9F5MHuWun7sqCUeGGegsYdCHts82KzcmbkaG7S75XV8PVBKixyZ76bmGNJgnZedsAHSHFiXER",
  "key2": "5nRK8ifT7tAa9TSNq5BjGhfJD1ZpW7aLECQxrYjKzG8nFff3DTz3fmGrNdSmMhDWuRuKDCNqHrhdtWLWh87QgaEM",
  "key3": "3879JNKP6eXKfEzNnnTGmYWcQAJEFfZ7uCD9KHQ1e1pxFPX92oEx5LFVhkcaT9d4aFUisZbJesJrM7aq2k3mbm8N",
  "key4": "R5DhWzLgRXcbo6amQrJJzcBePbYVw2qV1vbBpEHXe1ZtWCXTUtqLktt9hxkQasvD1j75pswyKsB8JebiQ7DohyE",
  "key5": "4BWmK1rDLdUwoKoZDUTW8iQgudXzCkrvfnX1nD8HM7Xi6ioayMkynP8tzT9nsbMnqi6KeiUmNGARDHMNTct3fzyZ",
  "key6": "63x6Lvrx3hhz8FVZBC9AUb7RGBmdhAiqme1P88ATL67YrfkTvHDmUgpfBEMGnzHYzoHPcFA4UgDdbswTPUzZEAfM",
  "key7": "5r9SzUYuk74ErFDiGsc4U4xjAzTR564ccxPgSptMjP3vzFeJ6AL3vr8dyNrjpzSbsWfSt7NrfuVfJF8fNY3zzAh1",
  "key8": "2KM6K554hYp7wjQe2jLHXBpdfvPTTZb8R2jMMube19Rp1UiEBqgF4EgLFsc8fqcbmzynHkxux4xKd4XTLrqD3orr",
  "key9": "4tePeAYGFgFiMtoF73ccebFiTdTbScJaqxTQsV3buembQCgxnm8JAohNGpD2qPP3xtdAuXs41FrF1qMXKcjqwckv",
  "key10": "2KsnaFtLGBkGfJPuZWRdvGuSBRNu9KMUMdR3aSBusJnV85abkHoE1uN6S1m6R3AyDUeLxyQDtwvDbBjKXoRrniqM",
  "key11": "JFmy297z8uSK57NRvQfzJvHR1X9MSLtoh6NF932AFdgTLAnfVsAPzxearD9rhv1H5VBqxRAQMsdfZWEZukc9NHB",
  "key12": "2uSiyB7VVjShbG1S5ZPA83KfhWFqGQBnMkjena425CJ25SyehfMLpo2Xa8223fFDwULrcbNWzunMxLPfxbuDdaCE",
  "key13": "52Qste5HgnXAhavsorg6tLtxa3tnmSCjxBFD2xiwr2gUN8JFQpSRCpjsDJXLwAswvivHHMMZYGBBju7B13mwDGFa",
  "key14": "4enyoUeo9WpfynUreHg2we2wKDjQ3Vh3HnhCBN6k56oz8jSx9Ydh6soUUdF7KobMbKUzY1gABDAcSSAJrsSTttqf",
  "key15": "2wM6sboHBecgusZTQUAJH5SecbVssXDznoxD5YytjLvqPYgNGunHnZ8YCYdSY8eCBghmi7gKeKy2STzdP4ZcR2B2",
  "key16": "4W5b4M9VARpPoy2LwHFQPC6R5J8hP6DZ8bCWA1pWuXbKQK5C2WQSALHNGxZ1xYydVcL3vYqFe86psHMohNuzQUZG",
  "key17": "4m54iGCRoppHVDsSRyBrmTTJhxyCBaQVv9GeeyzBMdGyUR7TBr9qur7RsptVgGQ8GhbEDCwpfN9N1cqiMYrijU5X",
  "key18": "4FuxopWX3yEqcuZ4JhWV2RMivyocqy6YyTdM4NTASJLNn3aE1jYPE16UcarJb2UMJWRDDd4aMqrZ8LtUM7nxrU4P",
  "key19": "3JZHfeBJ672PMGpWs558Lv7zZWJeMx2zaZeM7GdTc8e81PAyJFiddgoVWAsqPqtPPXBLQnAUpczEGPumfYbHVeko",
  "key20": "4WNoj6475kaAj1BhPy4uTpRj8RsozX2K9kbRRZ11EtQo5Ap65C9R7i7UepLCECikgKuBu5p8b7Z9ec3mpZE2QADd",
  "key21": "4K4q3PJM3kom8F2JX85626YUegohgi7XRJyzRcJBQWtuDdL5wU14FxYzqgpZi5w3a5NivXTZfEjJYmTpUMh8fSnb",
  "key22": "26e4J2pFGDgm6yFBzYUWPEFVEMwvhqCGPj2mRy8Ego5Q6ZnwCW3JMFZmDzd4Z3o24YLRdAc6DaEoHFpz4pPWzvUB",
  "key23": "3EX82AAB9HN6aSTrVDm56xkrkEFoApJcAqgPhJDENbbAHJoMzVeuQrv8UnFH5Kb7GXuCP2LJsnJDxNcLWyUKjrXE",
  "key24": "4vtdNDZE88Y5PoWdCZZecGDaTeiN2fMGUjqUkSZcmEPekCE17WGDNGV68U1FSdWZ1c8TR9eQS7nDuTQFVsij62qr",
  "key25": "2mHXoUfM2YFUMaztAmGHJR1uzY8UyrPSESRQtVsSqxNDkj14gNMycxJrEUe8rze9gbXdo1KPqFrd6jKZurayGNbv",
  "key26": "637hVhZ6auwA7DefrGUZCjEK6Qxmow4BWLMtTPjYPwDjtskZHhhj7Li2MhiYFKoS6p6tk11xWnBzNNDT8mj8aHv8",
  "key27": "3xxyPAKA2eAiK65wEsUxwBobZ8gpWWHfQzNUSVEmtu2yERWe59jLbz8jQpnQJuFEgLcs5RHaMrPHjVbXA243R7Y9",
  "key28": "kJci65sEf5jJRwCmod5V2B3G6Xy1NY6DXqp8EsU9NhTR6gbVQJm9ECipYBZSFQVeH3iA7qr8QKb7GbvVToXwEAX",
  "key29": "TzCf9Q2Hg8PtwYSBzEmLDwRsKr9wh4BkJR7Q8ao2bBcU4ffBQdqBCkXF284PZtRAtKp6dEJmEqGeRpj3w3rvTZb",
  "key30": "5Hto8Z3z6AChJxRpzUJF5ju4avXfnbcAqn6pKyc3gQn3TRcX6fHAsUbc3Hh7RPNg9CPh642qNpLA1wdoZuEogTn1",
  "key31": "2rMYpAa5onoV7hGeCLpmUjcytC6LvhUAwo7ZCPzs2obVLdGuqRk3nfE27zDwqx5bAnR7uXUWrZK3CjgYe1i7HXWc",
  "key32": "xtJBvhcECXHadCpGnxfpcYLbeJwTy7NNwUrvT5btoDs7QwMfFj9MsEmxVe9uW6MdZtiHfYx3X16U9WdP1YxEsxa",
  "key33": "4KmH13YgkEv75ZDrkDtkN2dBhq8vCXxjiopXZNZ9nuyPGUkBmYUsL6qGiceiztPtRbfwyKkpL4qjstRd8qoHTkZ1",
  "key34": "3UWhAr2ZGL36UKy28nVAemSMex93ythRPqYgWbcWDUuqmcos2ECiqTQXkHQwGcQ2gASoyUr9PWmnPikfs4UspSU7",
  "key35": "4bWRv4qxLXf1vjYCiA9fd5MqFDkf3uWKG9cjU4e5fskSGnuDmwuvMUgrKkEzFx5SQs2hFYasjLmYQ2XeEsWKQKS3",
  "key36": "4cNj5WRr7J462DTDFZ8e5xFakFb3uFBtjdEnXs78QyFzfo28Bi6tn4nytVgAsG7YcucRg6vtGCadTrhCCNzSCTP7",
  "key37": "577A9dLQ4QuWQ7vEaoqktb7HyPk3AhKaAgyXRJxHTEcVkztmhxd1KFUzZqotwySoFnotx7NDFSQxYBUG2DyvKDRs",
  "key38": "3HFejsvUMz96VoYmD6U9bdBuwYuPMPUZbBPRTze9y5EmTBAoCRGhYvG2tAf3uxzTwdFVusT9jyFBVn7CHcWTurkr",
  "key39": "4qCA3epNVTLjYssgfmS1dHnzatawHobn6deG6QaEMxMAxXs9ehg2WnmGCCuPrqgF6xwJo3pyr9sch1SxhagjEs8L",
  "key40": "BrRCyrBBZ7Z7RjXgHwFKfxBdpThPRQVmS2eyK5YioxDFW6zq6dQGarzYNVpi1ao5UJP9W7P8druKNwoeRdzffAm"
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
