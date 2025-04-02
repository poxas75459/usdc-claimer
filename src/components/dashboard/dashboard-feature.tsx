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
    "5uAs7RUL61n4QLdBGNUk68oJwn5BBmNnDYpe25HEqxwpdEvem74YBomes9hPmWW3EhnSpmLTCFbee9s4QW1zEWmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tQSZVk5dKxSssomFEWE8g17wP5qNCrCbyy3veu4m2pcyDzu4KbcE94ibuCLeDr8cuA3GuUDWeBBzfjZK7nFnY8",
  "key1": "4FKJQMecwAGaZjRsTQzNEEoAyX12htRMP64uWA56gAWVGBM9SG2p2E3ei1Trxksh1NA7DZGJ14WyJydzhq2Umsgs",
  "key2": "5dfbXrVnbS82RyRjQfG2xg41NwCh36TJUi7UD4vCUbTE8aKXwVUqTmdHgoh9ZEj7oHQ1Hi4ygy7sr7kSfP2mzqGx",
  "key3": "41wXmEiQeg4MYdK7RDBhcVWHeGa9V2ZZWymwS1nkTKcSQhELQVKbE6cijBpEt3KYdyjnYBdpAn4oWCGpVocJ2x1F",
  "key4": "5a3MbYRukPvDwSp9ZLNpi2LAtspTAZUSsqnWV4EPN1rFJjw5GrC628ZYFXaTbhCsbjLcgAdqeqNC7bpcQVqHNyvU",
  "key5": "foziaoLK4vS5T3krwUEVvPYfZLvHXtgnxAJKASK85uLDEStbLAB5eZtkajJgf9JB8ng4ZYrASgL6qesoNuFCTxy",
  "key6": "5iLveHKytiQuxejFoAfHKTVT6mhrTQ5XSDYJWtCscvaAYmANVGnEjT1LQUWTi1pmU3YNVgy7BsJUhjZ8uh3DGaJ1",
  "key7": "39v7KiJiqPJ7MqyDkTyEWveHwvaZA9uQWWn5Us1on9ZWAiNhGvQrQJPy8htyHaXsKa2z7huMG9LTfcqJn7xPgsWp",
  "key8": "4FxJeDXdpPWHeh4HarVt8F8aY8Jiu9DL8RS93Qd4KEoPWkNXgqUBWFkPg65UA5B4gYLoVZVKtp3wTdvjxKG2b1tC",
  "key9": "3ezd437UsLTxisJ1YHhJe1YfLEd5DUNCubuF4y4BaR5vkSsaFS8efZXGdqiCKopRiTKQLdY4YrqsRBVxoXjAo3Vj",
  "key10": "5QYwqFjr6dpcpu7BW6497wuyrvLuQ6c6MQVbVssoGdkdydDQCfHqyHDXaPDLkq36mafsuutUr6wF86GYhMmdxcj9",
  "key11": "qKEgsMXhrtjsXauGK6VsayZrqWCfbV8TApofaojXpi9UHkTGCy77ytiUrACEQxoDyX44UqBpY7B8bRo8V5pR5AK",
  "key12": "sgjjWTw2XwrrtVCRRxzK6r14QNRx4Bzn3A6oVcChcPuFLSCpDCYAbbJxp7np2FNDt91EMGHTEtUpsfo2bk4UPCx",
  "key13": "4t3bV2C6WKyHPF2YexmkjoLjhdbm6hUNjDwG2SuggjNCUst4LBNoi77Rpch8C1ymsc86gERcjzVbTKY72xrziRBr",
  "key14": "k6yBobVqq318PGDxvtakdDYMTzLsis9KkVCVAnL4VZnPUWbZs4J94K55yyDx618HS5X8Lu4t1TGkvvVXmofy6pA",
  "key15": "4tyiBMXesWDd8dRdjxFq6QnkTftPNKV65FRcBs2eqgmUuBkY4AEsD9kqPsUQGET1WaDStjzcDnALnrt2RW7TZHyw",
  "key16": "2x78JPLpK4Um87vjCVSzg21SyCR3XuKUjxuD2VYwtBfGBrAvdTk7j4B9ik2Zdh5LMsNozD8U7sF9LiHSZRZTcf9z",
  "key17": "Da34TVbT22y5WAEDnZrqSyJQjn1Tes31ZW5SxetcBkr1pmWsH5VW7FqxXshumtTGPZt3YWwsBZnTj8AZKPJE5md",
  "key18": "c2VdF1NzPVoN71fiVh9yMQFEyz642ThMT1fw4T5a7gT8hPFTKXvqpHNTceJGq4HqiEAZK82TuXhc8VCGEsoNDrg",
  "key19": "3jeGGcC5rpds1X3PLLMuECjv6i2cuhXhxmmoNzHskiSamM2NTmfdTwkTneNeV7bQVKER4Yk2XMh3K47xRfZUpRCX",
  "key20": "A4YNoxqia9K1JrSp8sXQJHXtS8T7sCWuE1NpdNAEkYpCEbvE4eM2sRq8ZzFPZ656jEAjEyu1hr3T7bodVgKioUM",
  "key21": "49g5qCV7Tz5SQ6jR3j9qozGLEDgjnSTvv3DXzLVznDdSbFM4AvLjFcCuaPbzq9T6xq46Djx4gKdDw3v4Eq8Z3wvW",
  "key22": "5kHZzMQrNAYKQfq2HwbzqqVdj98zfjGrf781mGPJdrYH1xnYGsNsLouprGUgiX53g4wKKeYW9zSas4JnEoKAYHmC",
  "key23": "4xMinz6sfamFYSVwXAbp9pznbqtu66oghMyXpzGvXoTMePoZ84bG3Q8jGp2vvSU8herrUrN9ubZ3tumrmSMwprwy",
  "key24": "rBYKQpLnaaLNuAwT8tPL6ZyBT9ceASAcqHyVgq81xECaUtrpFBhd1Ls8E2ih5XAfezhNuaS4frFQ1Yds9yRf48V",
  "key25": "dqJWigDhFAz1VDUdwF1UNMReduhmnxp4UABsH9rtgVt4wMswDCqLmnnbye2KJ8SfzmQoAptHZcS1LuvXhD4o7dC",
  "key26": "3j1BwEyCbPBVopHuJiHhGxEz9fwcNKF656x5odJea8qcDiwaGetDKpHAqTTQ2RsNHPZMzigdgQBwLQUScsyofedg",
  "key27": "4UzGp1QcbEWYd3L4ae4udxAZKuk3DYTHqrgJh1aoBy33si9GTni7NW66ti69SUkHaXJ4DwDETa6hSqpUaV4SDtKn",
  "key28": "598LDRtm9sDHJrKnyiDTQAxJm9McZ1G5fygu5NDkwwMESY9oZjtNa5m9i6MJR6jf7FAXXiopu2VHoGXExCupveGx",
  "key29": "2cayULNUKZGL2fCPHyUYnAGAxRhUijmDZSx2h8dLk6DqotJMTDTFncGSGY7NNSrhZBoVnusYrP9vzb3BJR1pZBA",
  "key30": "5GBnKskDMc9JskYhRFzhysQUYB7f5rQeUuCBEDDSfLZzVpzzmxhuSQ2ef3AT8K8rmg86oQCuiC6YyfkpVyk387KG",
  "key31": "5Ckh6cTDWtt3xBjubqsAyPzZhUy1tGniEyZ5UGpYszTTRxu8yD5Bwb3HyhZ1G8raGZDWpcwuuddAKEVJC1wgc41E",
  "key32": "3f5RcJhz7dkj2oUNapJ32FqaT4k6jkko8vtUQsH1rymPpvH5FdmtTBb4VFPDQCwHovbmajRuVfRyR3g2Etje19JB",
  "key33": "5mXu6EXtYDQgiAMtoA8du8jNipjjwDLUxck6BjvCbyRF8kESQYNvPbb9mxBynBY3Kqpf4s44sEsjpbaVcr7DzEAU",
  "key34": "5sirP1npQHWW1eDVE98s5MJwBrvyHp27KzYv1E63z5vWCWEubLYcm9uFak3jAtXPY348kfQV2Wk3TUvN9sNeZsax",
  "key35": "v4M2v7JVX2nE3M33FvfgBsf4QLdSVwCFbk9dqGDoWWc6SkVqQtxmhiLcZ544P5zbcgGLNJ9z1WQxWGRiPWWqdH1",
  "key36": "3NnVkPmXwBpBkwKxqZr5paJYau8MdTa4PiUuTX6GLGf2jrTHcs2FFJiztvbZvcu579KnMtJgqTqHH7ifgsyFdZQm"
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
