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
    "3VvncB82BWfsWYppGetndR3JR913iE8vDJ5rzBLggv6WwHZ9yZ474CERnc7rbrNxrPv2xJtVzAEmmfU8By7dhfUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31n9vAC4CbDLpEprqsCdiTbH3Ee4MTodPwTZHPDBgrLq8CppR2Aevy2QrStyaYYJbu6e5iJ4e4mZWK39vpmdbX7f",
  "key1": "sTLRGExZahtBK8vcSvPLPXRuxhgbvEjutbaMdPBcZDbLP7oqVjYmtHNidAjCfosPQUrdcmXdNEjvAxppWy5brnt",
  "key2": "2erbB3Jvb8ZJHmfrx19f6X8YDtw8jXSqfdtZZCzpAcfos9P8B7RywGQpJLyveb5VA1AjRUBXJEpEWhqBMSRZPGU7",
  "key3": "5FfPWStcU3QndskEHJTVBWGLxYDViVEVnHPa9R9uLtQDeaC32PhEF9SFSBYew2hx9pcaXcvto65NkqVqKSef1mPw",
  "key4": "5HTEfz34sqi67ZXpVdkvcEZsYLPtcBaFVnv9H5ezbd9bWwpYZWHKKeqii1JhYwnwkLkLRHEh7duUfG7DYvQFrm2z",
  "key5": "2SywtnQ6xnVoQYGNhW7CPnYHdDoGwFNpEPdAAbsAe3M2uw12YZ2otPJpCP4YwSXLKrgBC4rbMoAZQHiXAXfSdus8",
  "key6": "42LbSDe8dJ2YaqcJr3omKAMpUUNJDcZQJo8vECaBauPWGNsthaU7LFPNQ46Nu4bcKYhb8bc8ns7HNXW6mosDJ3V6",
  "key7": "2azXooHyQRS4pfiVsMqLjM8uSJXu1ffE2REvTvFNsfF427eWtwLb7WPiQa6Kb3M8HX93xWAG5MvEo3R78B9i5aWu",
  "key8": "55g6vPC857hUWyGbqp9s5qjyQK4tMqD6nUDUyd3Uwd5VcX8go5rjPbabV1WtMU6f1yYRzTQTQYjT9VPGe49Y5oTs",
  "key9": "5cxeT9QrRq1wdjsTDXs2yFdoq37RACpnFvcCaEshUFEH1YLFfsXSG3pZqXSPWAyQtWLEp4GC5NpfQi73DFqsTHTZ",
  "key10": "2xARBdZoQpPm5ifiku7WKCjELQpPokNQnFenvx35P34bC1LPWkd4p742PvYoaJYP2iuLZZ7fvPeNAPsSv2iLi6nD",
  "key11": "3Z2hSTiT4FgYvBeUfA1mU15uYdELCRxc5bKSD4FYmMyXB7XH7mPP2fVbztJHA4DFAuKV8Bm2TfgCoqEMxi7YsXWo",
  "key12": "2Rf4VGUZ2hQuaco4NsGXs7t33ZoLr9y397khfGt9hY5RReHNWNNsWBBdb9Vt72mhHVgR6w35o3B3HxJpDMYRkpKF",
  "key13": "3Gde7pA2uLXbJYYQBcnJn1hjYT22EM6dzDLF4KgvDzyQye6id755Mgq8an53zBDMZHzLa62e7QP2PnL8ALvuwifD",
  "key14": "4wjGWYyncMPo9urCEPb9gdzajPBmy2iAvaZdWcqQnHCZvpHKCgMkvB9r4A1TS4XF63ymZhWTr3rHfsWhMNmqHf6J",
  "key15": "4HzYTZzoSSBAyg1Ct32ayFjFUUJNNQwMfdXwoBtU9kv4xB6euYsyCHg7V6yjDT5hJeBLvXkd8hyZSzVEARM8JAiJ",
  "key16": "5NCfu1DQ7UApA9mucBYsdt6FH6iZghVKSU7G4rL2FdH4WrZq9qTqfMSNgKfGqWetw92sVDNyooXw8QyrPmf98n6z",
  "key17": "46uWtAqMdCHCF1gD4CvSDQM2NxDzZaCCjZpwTmHpBXA26h9ZuwxUTL7G5NS7AYoTyEEmXcojTbWek7MfM4VZDHQc",
  "key18": "5XuSxrHHPrUg6BCBEti7QxYfrnKtYgWxmuvGAe1H69djq68b4Fch7EQg83TrUcy39Vw5Zha1cJQRppTcfcqrdjyZ",
  "key19": "5UybxdyPRJjWGXNAmWXss6ZWeK9dGqjZuspsVS6cqAQZGNXzPemWpLDBSmFUULjmAhzaFpTnJDhyms81RnVa8RZg",
  "key20": "66EuAPcc2gesDEQK2ATFR6r65mmjWy4YMS4mvum954hEcUrmBE41VR5654hpNc9xU5ZcKXaTewhk4uYoJNzVupYT",
  "key21": "3s8S431voxmJVGia53BKBv4oac2eUN6gYKQBwMQ5jtcN6v7oYbj7XWWnVDVewPumn92jUZWWxVVYb89Qn2RPo2uC",
  "key22": "3BKbV7wDpk5oTKGatNNMhcgpPQsMe1Q5GbkFjCb6m8tN2TJLMkk6FJVADijyeisTrZ3aofAT6XX2kFcsMVEz1C1c",
  "key23": "5VhyDHQ1yyvxV6NRgPLLqzxCxmTkEcdsGvNKWYQ9rfMwsGnV5LqWfS6Lq5GPhj4CELhbZieaVf88RGWhbSfPWFU4",
  "key24": "23YHyjVpnSumxbKrsJcg6rraV4bTt8UHq9P5fvSEvdi4B6R8rouJpFXME7GxkLgipftA4KL1TYfGdx1DbohyLhZV",
  "key25": "5DRZVQfT3pkWqiU5797amizfoS1NNkwKzvpJBcE5qFHNLevX2yHJuEpUPZLBfzpE7fxBUQGGN5dwdy2NiHpqHHLU",
  "key26": "5e9nb9mcFwxXEjXLSK5HqebHFzQ7BSyEhbZXp8YaRf9NyErpzKw9rDjkf2baiYsaHq6czfESKFqTT3nHiionhAW1",
  "key27": "4CW7VX24y99PwGHEypVAXZ4qQ5AzkNnf7hoYGKLHSFxHBHtZqNdeJ4LNVntYisg3nLoNmC6ZMzzQmEfHDtm31PFE",
  "key28": "2e6ammj8axU5sBmNcU2dD9DdBtAqGv4rWmbHtAUerCSXfAHktMccYE2jqTPXtryyurGfk3CnjHUWEUn5UrxRQJbc"
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
