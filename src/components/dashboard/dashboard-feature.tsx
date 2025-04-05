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
    "5yD36YKNMgeQU8nwapEVbctSharm4zNpHWGoSh5socEFZBzUxHdLjoiDKvKrTPSau8xrY7W2yh242MPaXRyvepzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vj4AohgiKcszumo7nAPAAHhCnzNZBQ5CKJTkUZ2ka1vMPVkTdNQWjqj7kFrdbYPRE4wndseNU2GammTfHRykU8t",
  "key1": "4VkriBgiPo2EbvZ1pysxSGauVbQgHL6wGbHJRKcdvXZ1rGREjxWfKWwg8hCdwNCUCAA3fiEvm4CPz49MgD6hciPJ",
  "key2": "2wZANE8Ds9F7Eig1fAqRso51YqbbHsY8kr6f1NLx4oKjTorGbNJDowgBHkeN4kW7yRS5TPgffVfmSCZeux3jybTk",
  "key3": "4tagBFWA1Qj8K4BiByPjXnZuY6E3ZXLwDF5BDyPzXqbPttxQM1jAGW3dqxNZvzX6k5EZRHuXp73McEJhjE79riDD",
  "key4": "5ycYrKmhh9f1Rs1RFMVZ59TRoLb933Y1ggqdX6c9o7MxqtjQNk86F8P2BrBWdnjXs3LMpAUxnbUCL4Jb6SQBY8nT",
  "key5": "3Q3rc1Qr3BMuacYSJ6Nf7fZYuSSusB1CUt18joTDdMnEkB7tSt1fJs7J54cdrS8x7zY2r2CD9PhLxxEzGGdB5odZ",
  "key6": "3xuC4smPWziF9fXwKS9w9qZyE5UdUognFYzo9JFBA8C1Ui2fezS31SKbcQnq5c5NF48CGucnW6VPe9p4ZCQH26rG",
  "key7": "4gMJhLvt1xPNJLtTGA75Tf23C4Kikmos6Cmr9AAe6hqec7TSzwwqRo3tkPT8xg3s5iUBUmxCuLvBm4WDSihMTH27",
  "key8": "4kmrmb2fjYgUiUh1vZuaAtqaUEpvAejszc5b5gSFri8CmDSi88KAVdi9nDpr4yvpqeuKdxqwFQB5kmjk2k1bL2hJ",
  "key9": "5QVWePppKpx6zTt4Lz31fYrETf2FNPpTsADN1oo3H7qySgMsECdXmkQ9UQmsx1EbkiT8uH3mgUsxnSHtMG1hQ7Up",
  "key10": "2PGDwD9wEt2F4XiUjWjMePoJaE1qsRfeB8nw1sPCasg8m4JnUPLf3UM31Vn2YJFNoAUfZmVuUaJzBNjR7W8ArHTR",
  "key11": "642o6PTGH6KsWgJ4TsGwF6heGyBtRsHXChHwhu58R2w16kM9yfEqVYePsMiCBW5yxZ5QxE7uu3LRXGAbeDTS1gQf",
  "key12": "HeWt8ULRfFs1cCfn6BWbXQjBYD1Ht3scv9UjvNGL1K5ai6zjWTTWYhzE8nLYPHP43CMhrf94youQVrAWdsjVeMu",
  "key13": "KpzguZMC1FYRQ6hpFzJbmsfuWXX11Eer41XZfuTPZLAEaGDY31ByLwU8erFDBxJGxYfHair5CMzvJR3sWUHB9V7",
  "key14": "4Ug8iHBfDott6bzUiMGcjyUpNwEypqPuHhjZKH9cgZPLM1CbUCDSaQSQWfSPJxFFous9degVRdVhZkPw6gJh94rg",
  "key15": "3AWWq5FAg659fXvN1maEB7DYAq3RzJu67HBrMJakqmbATXBK67BRV2aZNkUZvfN9qwsFhUdfPanw7RGs3KtupMh8",
  "key16": "5tiYUhVvKQbacB1iTJuTQEUK59YgRkYx8odQ1UBwghU9yvtmBEPL6W4zgMcexv2QaUmwuchPFzqTq1X4H6orhZQV",
  "key17": "5V718UGiXuWsybbZFvuyfT7TqYdrx7DbPQnL7kJrEUW4CPdzk1E68Zn4kLLHXSHveJM3kRnYcAQQmWUvR3WbsxHJ",
  "key18": "2BFt9fHktHZGgWhGxX7VZVAkCF2tQvNfV7fPwXoBEzbV4DQJMj4xngMAfN7xN7YvPuAdxaCbqCUmvUXHLVcSUAmq",
  "key19": "3hueYg4BKc6MqG7bDFfRThyhfB4X2gkutVEpNkcsSwft1nMLWkAzpyXRCK6bae2KN72VJsFojpfvBG1SDbTkyS7s",
  "key20": "3NXcYiYLk6ppkaKTjxbWTSXTDV8bqNChAYAe3aUnFyLkwS7jEWyEsW4BgQaELqRC9y9sEntu6vLsQYoo47ZCPAtf",
  "key21": "25pvGEva3kn6AQVEXLKCEGfe3GyKzTCESc6NZd8LWLKJvKnYtaQdLM8MuhxEV3jHF2VfnBvW2C7q1E8nusEENVuU",
  "key22": "R5122kmg44Qwd9keR5CMaCvyR1h9Q5NT9b9Pc4WcDSUC1fjYT2qeHbDuEU7cLw55RH2d68bDiGRxk1Dg6MnpV99",
  "key23": "47DKjK2vD9f4fJriYWY5Ut6RdpJs7FuXHYgggjCdyFCdp7i6xDNySQXVBpq2SGbX6n5GNfwuU61XhQMZJF24bFyf",
  "key24": "2mHJMqAuwNPgAGGQksvWLnCHMkSDqG5rjDsY2CjAX25Xf8qtbsWSBfe7AyMCg7E8DM27TBqwPxGyDoRjyyyKNU7F",
  "key25": "eyQMTheW2YaSJxtqP11uw4aBVYtppQu5XaDnuyy3nALySWrtn8634463mYtPGxut19icuy2WduFG17opbiy4qx8",
  "key26": "325gMrb4yH26pXSErgomBjdWUZukeea1GPgYvsRrH4mQoYi3x8Am7F8STuMYSFSTBj1B8GsUgcYZdFH5zUPhd7Ki"
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
