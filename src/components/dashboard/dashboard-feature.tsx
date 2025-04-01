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
    "4vw6pXz5nAasZUKLJidZ6j6BW8xo3FzFiYF2DiG6pDsApp9YGfd1BrmEEvAF7p7sykBLUBrWCbEVzg95c2RYRpxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xv95Yhv2cdAe7CN8YN1Mow5HnxEVKu1ojGJyRpU47hFrUAUkCwqLGnZvAkftpL2M6gqpSgVEcfTHT61GFMvD2vw",
  "key1": "5H3NFVaF2oMWN5fqAQPHxTexpk97CnTm9R92VPwL4G3SrEAdJCF3QPaehGvhyQu5aas8Ts95Z9vZAiKx157RuEfn",
  "key2": "7zAVh8yzvaZN68sxyEnNvUoGfg3sGxX8y4PBXT1VfFFbfKJ7huzvj9cBqbrYsM4Qg42B8w4bioF97EUzootjvuC",
  "key3": "5mcZZxyUgwCWrntyXbKgwfTroaci8q3EXwK3kfXPYBE42MRTAZpHxhhk7EjVqxahqw9MZqLG1iQQmT1rYn76upc2",
  "key4": "2CNfpN1ru6gnCkohsZrU4GcWSHW77q3w6KPeurL2X8XPwDSKSK4HSaLmbzwubver96ryHr91jxntum4S22R5udKC",
  "key5": "4decgvFStqiuwgaD4oXYtQKHABApMTFYb6koKakPzRWtBYC2P2rK73dqCaC5ARQpByii9Zd8ggMatV6Q1ef1dMrF",
  "key6": "3iDeKXg9dcGgMALthkSFf6WQTpRxqo59wnPWsGjyD5Bjd1ydtCaNqFxHWtuTFzJpS5mMkeid3YYxPMnP5weBR5bF",
  "key7": "5txHTNixjviTNnvs8Dwe8Y5Z63Et1bjzct6gC45xm7wyzZc673ywAoroimwgQnejDSAXoxCBzt5DDNjYeXPtB9iK",
  "key8": "4wERZMgo36AWEj8LzFbNtsucxZrnYMf42gVW2wrnGMv3ESor6EHEjNEaXL74nRo8tpH65wBKUuFJ6ay79G2yS7b6",
  "key9": "4mSk3DWiY1D6RTxu6CeAFPv9rHz16ikbXa6r7ZtyNv3Qfk5M3uEa9SFQ7tdxyBvkepjWvQxmKaPT3zGPh1KfVc8g",
  "key10": "5vvBJxkCQ4hF4X4fzEVFKBjafiY4qbcSK3VaEMhJd4UCDS3hXvXZBVbJUxFRBaE8cKibuP7iPLgc4tLZopRgBMPg",
  "key11": "3p66duB5KC8iPDcT43azrx9bW35ifweMoFh9iC8M4eDdfGn4sjr1TYh4bJUFmaZoHkQ28BWSsTC8Eh6kLvUHKwZs",
  "key12": "Pp3rJQazpc9zSG5KRdF5SE11S1SeTL1Ay6dmDX99H3TAkAH5Dpweu7BxKEK3FLSQoXiF2QYUpdUDrZHcRH18beo",
  "key13": "3kU6cWsE4bjaHNPFszJegcugXudZQYDNDgtUfVmswcniuenYYVifDdyMaR5Mvkw7xBtNDVb38ALUDaWzmbkMh5s",
  "key14": "4cuKCoG75g83HboycMFHjW1aPjupoo4NSd9c7jC1W4VXkuAgN3rNYV5gmnyMv56AcPYghxF6PoMQD91Ez1BNEHdX",
  "key15": "4SGPG4Q9UrRtus1gnqNj1ZtijuQ3wsnUpETZ1oGKcvFQ7bCh6GW47BnbFNfKCwPzcYcpVihWFjqXxBHyETQaBsNG",
  "key16": "5oJLF1SAEDD7cXWfgvFfmQLGVJLshf3hvhLMRZvGVKK1BfohCtuqGjUJvDvgSWYXGSnQAK39aKTb3Gp9TG3S6N3w",
  "key17": "4wGXzE3NJWAfFrYRgvfMH9h4PLhyvMx9tiwHF98vVghT3ysJJ5yuGKtmvNpZ7eTF5zocpSo83pTPvLrzWPkKMXCM",
  "key18": "rCeXMiDtmcsvpXvNNjCSPjruwdkHqkdWcupBTch5mUvnZf9SRchfLPkPMqnkRtBXTjHfGsqYchDT4qJYuBnQn7W",
  "key19": "4UhZRZ8ypoB4e6vzh8GsHwzveBqPWe1FMQrLXci164P8a1pSCUwE3tBCyYJjpKz8GD1Pm8GbSLQqf9Kp8FtF5K13",
  "key20": "2QeqtaxeEYCbhzZLppvF4cCVoSYSA63XtYimGew1P5b23zVHYo6uMebTL1xoXD8uB1LxFLjtWe29qB21mfeobkbQ",
  "key21": "2JXCWsNRa2PrXsCg6kmfFAQW7L8SNKLCC8ptj7hriB4MQX6TMApYRZhh3zvFbVKSJEWExVmYwxciP8oKAvkwqVPC",
  "key22": "5ryoehJArupF3MrQ57EXfTNfJuF93LKQetHiwnxe5Nr9WSigNCgfPG4RKtdx2a3aA7vR4nNdyhKbwnovT5oPiFgj",
  "key23": "39YrB6j6nTkqCg2H4pZsRDPQkvFyP6Skiw33D7AzFxDDpfjRqRkNerV9f7Yejb7kZKpxUcrQusyjPh84Qv3YDcvd",
  "key24": "49YdE36dXxgwydFhATn3KiAuTojevuxvGVewz5JSPi2BbBBC8sx4YLeaMU6Jo27hXgRvcY3kqGjQF22AkNuA8ANs",
  "key25": "4HxPtGkC3JA4LRuJC4BqLdRLKtKx3TbNhRuGnJ6hKaFeeDs7ktv1Y2exnuQBtiAyVCxiH5kaCwFNBt9966KD2qE8",
  "key26": "4Air1e7bksnghhMmAPJTA3JT1JsPjLJ5sgXQeFVrdQYYbhcRvYDFctEyjwTRcWD4GBzCL87YPBff6yQMZkKTxpYg",
  "key27": "31XZBjYcx16ih73NUyMKL5pdgafUEvHpxLRbn5NewYDGv74WwkpHG5Wj3B9aipwicS3CVwixVoFZtenoGf87tK78",
  "key28": "ZUcBFf3RYu1XovhWR5bhXfB8SEAFMgBgw4FaqNahn2iJzoYunNakNnbETSXeEmQz7XtE138yh5kszabtSJQs2oJ",
  "key29": "4iAZNCMHJ4qNz23Q9WwsH46VbRQprjijTXkN7bZTxcVy5uxUdLaGhYGnknKQLmCeTXqWgWTdHMRiAGxMx46Z6m1y",
  "key30": "29kpJB1Q8r3BgmZ56UEHejaCu1i3sfVdr3yeQ5z6j584uYDbojv9XXt526n1CdJXupCyWQYd7DTS7J2BimAxpjFN",
  "key31": "4g9y8btnTcbzmCUdU2cPocnNWAKJqFbNqYkArRia3VQb6LgccS2sM9Dt88HC4vd22Sv53nk341eyF4igCjSXTbRu",
  "key32": "2rkjJg3MfHm39RAjSSoo5qVJTPy17toW7ouitTiJ3wgDu9zMCoTgx71TYYVzNUkKYSUkjNUjzPXpxcu938Z9NuQV"
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
