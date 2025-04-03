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
    "2JtaCNNtRdQSAkGxw1ti8z6bV5EupcZEAQSMjTNqCSUrybWAMCGqHBV7NSWjDXvG65MZRCYUC5GbZGrRfSQstwkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwiJ6pAQtaEoirXXiQxAzGp2ExMkaGgoaxsiCiELjNohKauJ2KcAcE356s2Pn3ct8khwXyosXC3RPT3S9NskCKz",
  "key1": "2JN7ujPn258t5TpLwLKDMStzSgwz1obHcC9gkePq3UvrykD5Wm6KK8HGcYGxN7m6Ug1447ffdJuH5tVvYD7VG9EW",
  "key2": "5CA4CBqNoN9mkmjtriyrpHsSbjrtyPzTdQ5n9yTRJWrZekJVHwBpJ8WqZopCuvG8d5Biwz6gbz8f4UMiJ8ZGuSUj",
  "key3": "4aLpwgeY3drQ15pudao2qCFgzsRWXDihUmokzSMzxGPEzQEZvv5QYUJrwQ42hvypsuFrTE4NEYzAAYkrnQSpEW1n",
  "key4": "4HCSxL4sToUNNuJukLKhxW41DsbwrwVixxNHLtEVtsMZW1ZPUgdxHH3ZgpbY4wggpX9bbMUMUHtHirMgwcHtNLjF",
  "key5": "3tRvqUqAp93s6Ppj18szsCJEDcwri8XwA8vVmPizBsr1S9xNxaLnE4cjepS1m8PpG1YB8b4551SjJWgwd6tTfBiL",
  "key6": "D8R2MsT3dqPgDCA5QeNjVuHvuR9ngXBY2Tj2uMLJKE8J8oiegcFRhcQwXWnVojtsgyYYN6QP3x7Nn8frv1uwHAZ",
  "key7": "LUDG46BL5USBizsTcANfTwPM5aA9KTUSixmGvpBKsxLhechtgnJ1pUpZzUkJdgHgjH3RGZE245qpvrUfTignJHt",
  "key8": "4BrLaabjBAqnN4vMKuUvjn59bodVBDjGV8GTUyWzNqfR1nFhF41qpm7GZiWBP56ocdbkARKMJQhkKUetheZ7FVLT",
  "key9": "2Pd8wLrxKLNcCM5qEDgQXnhxhyN4HdmhjnTcj1eyVqjBfhYLdToi9UmKCNyFNcaQFFJogn2GBq3VaRmZgyxKwszu",
  "key10": "BqkF6PoM3fFDMDywExYg71iMvk95dDkvtzJMcahEtAkRtLwdKH92Qn5S4hr1ytjPksah49DS7A67ySFdzdHT8aC",
  "key11": "XYHbEBaPZ3zSi1nsyyp7AQg9hPjPgEnG1LfkqDFf23iXT32RDVJutSta6jZmZAYdfSWy1oyGTYjAVcdTk7BTZyW",
  "key12": "VfJmFoeKFJykVgXAbtVvmfrVt59YsEJuz18d8Sh4LgHMx6maGARvxP1a9yYGTuuG3aiihmWgaw6VtQQgoy8mYca",
  "key13": "4kSCU6gWLMZWSDutNiG8EMqtMtC4aqwnXmVc8dqk3KFuRTkUQUJrVjv26Jyw9AFXgNevYowxWrNUTkVqvRkUnAM8",
  "key14": "u55CfRQVu6FZXAy7d5sYaDyBi3qmUBHWowYyPBdcZfa7af8vsiqzHUfCrxLZ2p1B7sMjXYut54tMqxCQDotqWBw",
  "key15": "BxJWUcwTQP7g45kuJc7JxMTyUiiKcHHLQeZAFrdy5Qoggm6uGFDkAEZZheMj11hbbgeNMpJxK6WrtEHNyZ33rEH",
  "key16": "5c7bKY3YQnWWiaaDSBdWMW1NJKuwwd2pFGQAw6A59XVh8NDwn22K31jPDoZPPRaZyvpT2FjqEqNgqR5FUip6mept",
  "key17": "2gAMQ6c2XRrU9GK4kZSmbPL2t2QXR9Sk1fo1VP7ZcfTYRrxxazaBmDkKYbMkWYxF9CnUYMGsuiVjJyqivRQ5q39A",
  "key18": "3G7kjmUfV7qLMAS7tgE6BZ8WVzRp6sATUYX8JMoFqLqqq283ypUZVFgj8UzPDncQhr7hTVqF7kYb1VskvoRxEdw6",
  "key19": "34kf96Re5qPVvR8L9fFwskFB7w8A597C2jMJfjJB5iVGDoTLZnngqFDJABTVqisdtkivigEjqnYKtkBK6gxL2SiC",
  "key20": "5QANkEQ8B16KPh7PwWCwjyYyMrEsi8gYGPxi5ujizr1SL5ef2HtMEBhMrDBCb3WfjuC9SuzSZ3k64Z5bozWWWjqB",
  "key21": "4i6iub7tgbYCVbo1TQDBst4bxr4oiptPuEVpD33oDuLTY1ZiQ5YSq1D2MobUWAD7GFxcZoDnSgw1BHsjE2CnKKYw",
  "key22": "2QT5jyregWY97VcvCeGbJkobNcAdTjQpr7EzKNKukzfhmspmAZXFpr6959XskG5N81HgKmrpdTMqK4wQA6K3kLmK",
  "key23": "4ywFN9kzYrAurbLDrerrMRSuqrzrdKq5irhiXzoPnHD27Z7UB3TgeHf8CdBoPKgbmexgo4SUQNzgnDsNsVv3aJkt",
  "key24": "3MQq1DMrM7NWPXUu1tKvgM6DQz58WcpmY4w1HFKca5yK8zXiV8bKQNzJiCLMDZsomrVufgVpQpXP5HUcygidmEiZ",
  "key25": "3TrNQRgQeVVZcpa9PPCvdT8nHH5MD5JWxydwwF54dXmmUq9Lewi4gpBCCv2SDMP7ukK4DAN3xyZdsZAzKJyqAcr8",
  "key26": "5xPzhrkbuaxDUecYhMynmSHWsEGr8yFpFy6VRHHaQ9bmjJ7urqxDuJaHATcfmVendxCWjceBS94XySAeR6Z42UwN",
  "key27": "5taoeV93HpQGVcVYg5wWsKuevvwhnZokr8Gw1H5V6eHAXk56JnuBsZNmws8Xd2vakzAVRSZ7mf5HZZVrwecgBKQZ",
  "key28": "4m8qtVVU31AVGzNfcp3aAVeS41rwDQEw4DNmQZXU5rBE83oxNcuVmwWoyV9trnoNhDyNSwTTqR7g7wpv2pA3LEhg",
  "key29": "4psTptgg89jkFy6kASREAeuhn3zJ6wGapGBr9S5ECPwM3yeZKsGupjbXDRjrmwbLDPcQ1MPAwDwhSF6zjGRnYfUv",
  "key30": "4FZ1qQMB3vcmRq9qP8WjENM8S1qeMVppaQPkeKKWWq8HmDcJMEYHwqtbvNLYjXtggFrs9ch1Qe54Usw4E9BtUUzo",
  "key31": "4EyK8CHv9GqJEkH4UqJa8CeqmbYurTXAJHx3aJpekjemygS1LTGUXvUDJjnVP27EoZodF6WpWEiLXfgiw7Jrp5jY",
  "key32": "4AEriAFXsvV2w4xBJ59WdxLeZZMJWanPM6ioa4MP9VSTkavH225rAKTTzjCw5TNSv2rhCXZuRe2oi6QfuuhWGwDd",
  "key33": "3BXk1cXVF38dgs4EcqQfbhkNwqrgzF8tcheEekg7qKXEkaaHfWhdKXSmxzVbW6VGKqFEaUf7fSN6si7MdAtBqeC9",
  "key34": "64i6SkuM2rDmZSpbE7Gf5ERG6hXMe2iRsEMef7LV7zv2RHfzu8EovJKRJJHxAGPFtnq7TzDLkFZwbL4KhjawRPww",
  "key35": "VxqapJ6BrwzM1YAgbe95anNDAq8DvM4QFZuJsDhPBsn2iLJrvNfm3xQxEG16qTupD3R4tWJCirpmBb8qR84pWae",
  "key36": "FcXcC2LvTqodduBbDcyNkv6PB9jVNEiMHzeJgmEwNtm3SFGt8QAA5ka93tgs4vDKFBvNMnwX4wvz9HG216BmkjB",
  "key37": "mH8HVqeBR19XScf2viL5uUbwiVd7SkTqCcEzhyyck77sexfisLbV2jVRpgMH7TpK17a8AcJhWkKvun4gGanQ8MW",
  "key38": "5dXYwMxhPuPN1PbUS2JD9pFqJhp9qqLvbUy4VNTbY2NNQtkM9HZQr9ujbpHrEYkWxfyBB2ixph33MydTnPiY5MpA",
  "key39": "3f9xmMwWjzVU17VK7iH1ym4Kk4BFBYzNxFBfv98iAWRGuJhnhdxmxiytJd6W8PetmpsC7seGmTWLtRHD2urXu3iA"
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
