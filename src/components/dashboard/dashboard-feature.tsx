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
    "MyrHFX66yA1rnKww5587RSA27X2R4rdM9WDUHriyF5dp6YAz4QcmpS5JkZ4wtKwii7rUZp8z8Siob4WKwm7UTqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRUTTsrXgnaTAPBuqEEDXrd9EZwZoaW2Tr4xPaYTwhPZJutpNgyBHUAVUWECCob1BGh2kAu8jEWirbX2MHSh6oK",
  "key1": "8icWt89vLBHm5Qf9A1SbHZQ1Pj36LovL1ttkbdCx8CgufocohkeSbDRcd2bJ5epSTpfSESkFVtg3gZuW8hgfkeG",
  "key2": "2uRuadnekfSBHm8Vxerhjc2HwMVSLZCRLNixs36hAgv31pgcw4zhveaKupWjDV2yJGRtgaSVhfY9MXrSvBxWhQAk",
  "key3": "2XbGoa9WhFYXeTTTcfwtHpPiKF8r1gs2J89yuan38ekhjAVnGByzvagMdYkrcMuLF5YkSUFtcGzP7Hpbx54okoVu",
  "key4": "4jZ1kiDvQjGTge7ktyjiFMHUVG6J5MZbk9wPHz9AsBnHPX7tmjsUKwuCHtumUWjBwEQ3kKWp7NMBTuvwkUCCDBZk",
  "key5": "3X8bfBjLAhMsT7fuem4csbkwq7pWnNiFQwEQN6QcsEmHRFe6hJqXej58nQsxujcBkn39LB1BKU9Yi6Ty4jPtCHTu",
  "key6": "3kyXhphMuHNx3jAqaJdM9NKjXxjDLc6F34J6JD1qCBXaMTh7wqY73ocnHymfmYKZob381TC2cgoqq3WLzz5VhZRA",
  "key7": "5MCHyjPH7MExZKymyN5HWnCBkY1WXMNQ1G4y9ruPY7GmWd8iAeuEjZXiaGXZXDfzCZ6QQhV539cVEfQDF2Gic27n",
  "key8": "5fmGHzyvpfhwnNc46CrM2LMUxaJh5zn1CLLhgHHxaA6edYZA5QxXkGDbNuAbC79qC3WKCzXNXaHjiTx8iE6ABZVH",
  "key9": "3zEyJXxRCB16XkSwjLERMLMrywuufR3EWLNvv7yc7WUoQL6k3kPscse9PKXPe9DeVGkadvt7sAMEwoaLWoNhPeTh",
  "key10": "2K8fwuwRg3eVy51y8z7ebFEPn3R8B9thc5WtEZcS9JY4vzUqFJG546z9KKhouzn3P4WmcVU4QfQbNmVfy6yt8pgy",
  "key11": "3pjeELTcxPyKzuw3wteGgPWLquCYwApp3GFJ8st74qnbEGYDaapBhGJ9TM9gEJDz5uWcMpykCDnGzQMUL9worQr9",
  "key12": "4T8Jw6vAyinaKSUQum7pV6DocUvBmbi4LcTTy3fAYjDZ1dPR7RAYWZyeVoTte9s1rH3CaFHK64EkWVsTLTe1WToH",
  "key13": "3UEaF279xqp7ev1LNCWDTrUkmpSjDqWoDC2JVNJ9Y8Cx95QM2khW4ZJ9NdWCXEZpwCbgQc73B47LND7ffh9Gv2Qo",
  "key14": "5LFMRFyp62XXcXtQxj7aJMs9CLtSPn8AU84FYhyGRyCehLRHgUqqfyk3KW8AzyJVX1mm1mHwGdR46kknsr4vGoQA",
  "key15": "5HY7dZQLuPunszEUiK6Q5GzVReCRUgPfeB4vCFRJNtTjLGtyoefa6uvvEQfxZqaR3TiWVPuw5JX2ToYrueWjyPmn",
  "key16": "4YmrxPtBoZLxez88oENrabHPxk6taHuD7238bP3oo3e6b49fztkyEpsBCTfkQQXAVmAbSVormg8E37Ns9C1uwVrW",
  "key17": "fcz1FSP2wb1YexdadsVjSCnhDrrTrBUqiYw4pbQLVbQfGqgBTEtEg5nhrrxWN8AByBPqsgC4iN2XWGoi9EvZ19K",
  "key18": "4B8TrgHUTewz4rJYBe2yFirvD99XKdY58rtQwo2gVWoCNkzDduMX2J2hzh24WHTiCN19bAkqJsYh3YMVXoEDWADj",
  "key19": "4Xim6PaR2Tjmm8moo3Q4zJvvjSSm7Xof8BBUaopZ8wzp1tNHC5v2YeXphM9jJt5oGGZZRxwFhCYg7rhhszAgrpG4",
  "key20": "RnbxxQKz9jxn6izgEimzKzF29DCCJv4vahTquai8AZqdoYC9nRFLcBjeXKsERyiRQLK8rFo3AwXjHdz34BYsFoK",
  "key21": "4CEeoUCZkdK9UzFy3jTkQ5MMNfM25EFNZ6v8f2GGz5AkCQcfKULietLA6gQHQ1RV1VBwPzSNec6N34KYDc1oakzG",
  "key22": "itefh14nwf6jU8z2UQydQGtLYWCsagsFHPepzAa4YSRVB4BozpuKWFAuWQfbo97x8itHHNSjQQ74LYB1BHmziq6",
  "key23": "4J2jpyV56zQDZt1U2bHDACdUJQqunKdNpgwYhy1cYDGoJW58AuCC3Q2ANKoNvgTQ72YVYZ8GZDycEvQsMJQjLnjZ",
  "key24": "3UBuwtks3ZSk66FLUdZaYFGGKcqWPmCTUeSZHNbBxPYM7J73W2rCFLUxdxpdJhYJxM6FrBEu8EjrVrnDjFp8gx9z",
  "key25": "33ecC7TrcFsy1U4oybxpFQUQTQyRTAyNrcAfSioQDtGtiJZRjGTkA34HUpGafPvt6LiopetRfPbPt3yHHPp1jvXD",
  "key26": "3qFCH68ZAoYUvgC518xFo7yVdRH5uFeEhw1xc8UqVaRBYZojKzX5pWWqkHTtUejCdN27sZcPCbwChfxw6PcqjFUL",
  "key27": "4UZe1VsHTskptsHN8RGoQ8ymEXvUiZuvbG3BnYCb1Ns383qqpSum9QmNWMDtkeMYt7MCkTcZtmUsxj3WnaiARYhL",
  "key28": "2j32MUru2AtupsFrkY7jyNjZcq4C4VBxAKRhJaz2usQ3cw51hafahfbsGLwa2etvzPyb3oeQwzEHFFfysw2N3RL8",
  "key29": "21ts8VM4QkJbTBR6t94UPzuoR5WKm8H6U23MKLG4MowCvaHiPUUm7XTtsKTerWucSE5LChvZkUorFFB6VNdTPWvP",
  "key30": "44JMuFz3VnjNsTDqaaL2mZCSSQBVZrdKhaoc7YDVxPwPGJLx6f9JyggcYohm1pGQsEeVB78wWW9k7MKvAhZedb3w",
  "key31": "4812aTUFvQuPnvnAFjUymahbnJu1Wedzayc9BsDZGZAfyBuu5byeaqZ5sCxjeShjg4yjVZmrJYmE5hx1mgoVTRR6",
  "key32": "3aLtyT12dKu2DHfPoA7sHfV8DQNoV6Ya7qy7AgXxDcNXASfGAiRkSf9VWz1nfzA7wZW3wn9RZkokddh7okbUYEyh",
  "key33": "3Jw5eEDZ7fZxvrXbJtoX2Rw6pruQBGafKx1F9NNDQBhtgY8yhHbQUNQcaDL7weoingfZeMQK1EmSMZ8Zs3xzVn63"
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
