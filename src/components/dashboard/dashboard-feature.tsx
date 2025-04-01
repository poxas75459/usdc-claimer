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
    "gpiPSLwRFUCai8xVvGe1qsbJQ6oYLXFq9b7FDjrqH6AR4vLJtcxBs9FgA9XCr5BUhAPQY2CfTC9ip5HT3kB3NA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ye8cqLGG4ngBc6m719H3UbycfZEDHThywNM5FMNz1CCy9WpRm7zuajq4toQQeKnTK2wiee9TPNaMVjrVjKdzPg7",
  "key1": "5GNMbsMVrdRydg1vwL27WQB9W6JJbVCqJzXNvD1dTaDBr7uB6cs6KuCyZq4JZm8UyYJ51uc2Uh5vAZLgsC36m1zt",
  "key2": "i35P5Es1iqxarg25xuBscQWPmh9dmWBoiDqukxcrdxA4KXyN1zCMtA4YEJ96zZamwUeHABAKXc9ExcPiZ2oMRbF",
  "key3": "4wjurqkh8LvEhPmbY2UbwgTgdrEyaHE8mbbEkSu7cEkgKsvNsWxaV2sGFGKb1qtPdY7s83piuLoQ9QbVNciLv99U",
  "key4": "5BeyZQEAvRie7r8bM9xB2r4jfFsd2P3KHBgBbEJnYDqqssrxpcdB7akMUHcFRvhaFWxuYZtpphUtJvBLCd73m8vh",
  "key5": "3bsQ2fLHMuJNYnALZ1Jspc1auXehibzPRCW83TAanVQGDP5drbsKPG1wTA3XypjWQCM5TLrLzgPg2ZxcH2DMPncG",
  "key6": "3t8t1y4jwnawQzrh9X77WUUbrpafjMtDHorBAdw7p4CeVWBZD265b4bWQeAAUkj9KBsmRTmBTBSAZiFeoGxzZ1QK",
  "key7": "3uEdP3Gp4JVMB83j44RGVX2b3SHRhmbQersQyqXNqZZHnd6ncNyYd4p7wpSfxuUbJEs5suiE2Rt6BC5PrihaJnA3",
  "key8": "57gH8DCm9XG7mtbjNAN6dSkQbdf6EAMBwVddkXfJrFA3PVjngBRkXnQg1GKuT3KiZY7dxLbeWaJbrWcsUjiYNb7U",
  "key9": "3vM7ZF78w6nmBNMRCfXs1Ao66MRXgRGw8U3RgLTztGXDDwHomp4APDVAKfCnwduJqs4w4Lu65y4C3wEqgKUkAPQj",
  "key10": "4rWFrME1PwmBfZf7nFZnpwj4ZZG13ixD5P9tPGWYs9wyhPvz4gTjMwS8gH4MxDQQkWuqeBcqEuaK3sn9K3T3x9k7",
  "key11": "2XnoeUcnqcVe1L6UwtxSgq6LNQ4BWF756hhbQMFEmparU57kRa2pJtMQ4uiSA61f4LUJXTEFSxDiSqTJRJcWY61k",
  "key12": "CW3C5MeHPz4ofA6JZo1MPjVhtmEDKic9y5b1QDuPfHP7tsuLL7u8o8yx8JhR8gJLR6XzTTRb4yyj3qygKp6Uv9M",
  "key13": "2X5gFEfErBBzqDr5uqikhQboraTjjVtMXZWqY6WcYWv37cifCznt4Ku2aDKjUCvv3za4Vd3Qpevg5xxSiuozfNZN",
  "key14": "59gkYyLwnikTZZGRPuWS56uQUz27dXbmsEwWQTJzzsh7T2RtvaP44NSrEV9ePHw6MHLCYaixVNREVzHRBuPidfS4",
  "key15": "2T3LQhoDvQcuiaUSgbEzeQTn5zTqgttXQJkufZcpJs1r43FSGbk81KZrCr6B1AcrJseuEbkp5wJxPMzLthPFvYUg",
  "key16": "5phxaz39KetJeEzTdfJkJGxP29wmbfyVtDC2SGdgzn4kazwuCrubzJsyjP4tQQBaeqCSouLEWbT1ZrVWH7r5ST8j",
  "key17": "46WuWGBSDKU9xssp1An3QX2GjPWCVMju8tok1VswXoYRmi7jySfciki79nvDEkQ3XwDhBYeVXFNARHWiWVSRTU4R",
  "key18": "4iZjLx1S7u7m1wKyRdRuP1MZcipzHa7JWBFnxo2GdfyyZuHuDHcd1ALe157yYep53tMErucFeRCFYSJ87YrqZyXq",
  "key19": "3hXwL3sBtz28j5uXyE3T3c7GW727uzqPoLavtPBwYhKiG5tsT7tvJTBh5muwxQpYaydqvE9AQM5g1tESGoJYDUFp",
  "key20": "2RraTheHS8MgrfzETgR3hwGsSE5ZwBNYA78vmEW7WYBa74puYsgUcFG5zMjrtokJAA1NwwGWQSmZVakCVQLRWy3P",
  "key21": "22ux1urgov7SsVCwVx8pQ87332U5WgyDxthuF5J1dKj7nuzfdzHaorGcc1A8oqgai2ECoKaeYp8mSQHi29Trish3",
  "key22": "4tXLW1fjQCtgv7k5CbnAQLWqcdQK4Npoh7DoP7FyymYvuTURjkqh4sXpgppWuEuWd8H9k6wzNrxYhiCwkKY6ZWZp",
  "key23": "NZUbqAhAkAvd1CsfajDA3mytnduLYK3Z3zELjST897DvppPr7cDAE8dhY47CaU9VgN48znq9e2aoE9G2sfkJiYd",
  "key24": "5suY7txkjxyFfS16WF8tYFRGMo1G49N1pHKJVzX6qVTmzwtRx3eQgp9Pb77qLyHUzF98SkgnePCeQM9zWHPSw5RC",
  "key25": "3TRSBg5WAu37BKTCwqAvDyJNx6iu5wXUw5xh1zwu28Rcxdr78jiLmppi9RDGHaTgJjbSU8EymUSTTA8EovVyC1Qn",
  "key26": "26tKU4iProAr7L42zHrrkHPS9GHt92w6GHzZgMqcHs4wEVHJaEgHFthrrR77JvatBYKFZR3cxwPaf2yTGrKUptMs",
  "key27": "Ri5DHmnbhFhCxPK8teUeU6DyhRuaW4aYZ2chehMhi57q5Mt3fCeUH5eqhr1deoCGMjYQVYmfXjQKouuRH9qHfZV",
  "key28": "4pGm6bjY9DUuq5rv3DKGcYZecW2BTrRa2EkH8JTt4Vz2M9s1p3ug5YSwRyJ7v2knCreJ9cioJMw2ab96htdES1AJ",
  "key29": "5pjP3TR7AdzDzrxPEAuRVstaoGQbJTY2sVE9ZqooGLF5b3jTYsgfnH6xUQzSLCZva3SCcYtF8NLdckqAjcyi1W6j",
  "key30": "5Acoe2QKGzHSP4Kcrbizytj6eJ21C7GPDqU6sXEoYiRiZwfuXkx23nD851PDeyBQzpQc4tR5jzzeg7gxbjsgKcCz",
  "key31": "23RgBZ6qfiGGV2UTjAoQobeAM6gNMa3rdEtzucPFPzzDQKzPj5xvEERzQXnkYZwg9UPq7uY1LKK9mSjzdwvLbdez",
  "key32": "3fmkFWRscYDE6RFVtwZGUAcWbMuRLF1PEEMqjUQDHY8NQ71UzRgyQK57hmFLcKHNByFHa3mShGDczxvL9N1VgKUL",
  "key33": "5SHjc5mNuznf5cVSHvtXGnWRphGrZdmJLjMFcrPvWXopPqZi6bpDioyG9DNoDUZF2MCHdvk1YcevRHJ7fR6oDKZF",
  "key34": "4Dxtrn1SY1EjznpQk4RQaWnUTJnNH3DZrcA15a1vJtrP1ZqJgYcyaSrPLudT58925avGGyUbbDe5e9KRdB8uWtqx",
  "key35": "iHC1gjMnujACy2YYX9dBGfNkxFwbB3id74oQAtbYDzuzfsiL4H62cxLZpB4wj77J4nBMPoNTwVqfiZPLrgY555A"
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
