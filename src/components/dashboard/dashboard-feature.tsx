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
    "5aVsBME2RaZZnnSiN43m7V26CetuQkBrpbcyt18gx9txm7rxWcszJJXxf6xHfgweFt2V5Ty1pPkPiLTEu7tVZc8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htWZUzQgzK3XyYGFfdAyXpZrm2dbPBo5tJxjUyFWek2kYi8oBgF3rhG4MZhcbVFzco58JfXei8cPrqeDUpTtMvp",
  "key1": "387QVMQnEfUQLdAAxnktvTRht7VAgA4o2sZJhfTrYUmfbBVVLdX8HKdKhTauYdbSrVxFVxbvdRFbgs8nvvEGu2bZ",
  "key2": "xsfxMHZPbxpjsLJdHWVnrEnrEmjzi7owggNaKVE2sWy57ovPt4zgy37zfoMGyfvYyYPLSskFasL54ysNG3A5k5G",
  "key3": "23mmFaoMAjPQf4UodRtw1RY6zcWUN6aVqx2NS6pvpp8RjFkJjzHsGX4EqfnY1d63MWmsCCjrKCaikrmkCN1zN8VB",
  "key4": "4PkvtDDvjneW3tdprCPgeJje5AmxKL1YhQAnV8MujuDJkkjsCMtFKsLXyf5RtdFN9C1eWTi2UJwgiDrizn639vWB",
  "key5": "31FPcY48P5fNXaNoc7Z8tmdMcLUNkqH6Bh6gwwBKU8sGwvR26RZdzcBMhwkHWFUDHriwWV9V3sKmmxAuERXLykrB",
  "key6": "MY4gLaHvnuaFqRbd6NBKZf5GZr7a9zBJtHoFtnmMbafF24ZRG7V8fP72QvBPmPZbQiZnv2EiHmPZ1smsZAtEr78",
  "key7": "3AGTuqkjFzPirWCQvtfmP7xZ983PL4usF2d2FE2QNzyfaphD7G1GQj8djazbCSLZj3Xb9ZiLs4ksRUPS1TDZmExB",
  "key8": "heaAqkr9e7mZafSwvMCJ7QE5Vk8QQZLBrT1jwwoDYEeveUSSaReCMY21QtSyMXdFn1fRmgQmsYVEW7qYPELKhmD",
  "key9": "2avkYe69iBKgy58ubcebk25wrv5jCojMVnm9urVbMWRUUK2GJZ4Jtfjjf5jgKc1cA1bk9JjG6xMGGtvgHF1A3R32",
  "key10": "4seZs3bRdrY8s3rwb9bERYRss3vXRYPsdCgyvHhugMCruJhpMHWnCSbdNr54ywR5jhPbDDrYaPF1BMS7Dcm9qT7G",
  "key11": "3voodbhKyurrBj8T1hrRM1a3DBhS2PiDHUN5LGtLrj3vJzzTqLuFyQ1ig984ytmWn7dKN1hG3Tf4wMtDWyTgfFb4",
  "key12": "3us3grTTPuk1ig6YbciDv9C49MxyAKExixXERgyNpXYSePMuhCnbCqqjBU2TpjLtHfJCiLaN1RbhgU9W7kFqN2Zn",
  "key13": "2gLYpFewuzhJu7Y59g3fbVZ5z8YPkRxBz8wz3AbmMkNad2qUHCQMNJm7BaNZTJyb3pdes8UdHxE1yLvfYxsdGMQ8",
  "key14": "3HY3c3iJU11MPdhpcnvAC4qmvRhz974a2W2qfaFf6pSFRf23xPCYR7kp2AZXs3h9VtkxiR3RZbTevhYNfELSuZeK",
  "key15": "5JSFyGFK3n9Yb4o5QBFKgtNw13Xi7CnHp5e8xfn4GQAxxwCMjMCPdUXMDeNV27Wc6oW1rZtDnGba6KbSatzAKKmB",
  "key16": "3zdbJrXJUAcLqApvsHWi8qF6UYxootPY5n11MFTtMsDZTNfMTnozrYzjcWJ9NWHEy9eyQr4xw1TQFTCewV3kBEMa",
  "key17": "43ZdaxmgHPXWGne6URsQWtDwD25JzJmfYc7BtEZCFkTQ3krWZZhQLhouRCkMW3JsV3zVNWbtvM559HPceox8ooJ7",
  "key18": "4mWyxBykCMsVNSpJJ6xGfaqkUCKc9JLQJAJFgyjTBBCSLP5nuAFTf87oqLaA9Nu9FEoawdaHuGbfD66HbTShqD91",
  "key19": "5kZHueEA9MYnBqYnvgSRYiBZ81gJKQmLxCwwTFnN65rw6mx2XGGVrFabEyX5Ae1NNM42eV1Hg9u4fdkY3LoUZwc7",
  "key20": "vCzsHeXcWB7E8NQZgcCzNAAfQcEWX7RS13dpBJW2MdUtfxijwkMNNoYovRmdArFrf2sDxCi8gzCmdU6tVDPg3Sw",
  "key21": "5wqJ7xch3VdRSvVwbLYqiAK7psirq1VL9JKmEs3VKEFzSPm6NEy9CwzF76FZtwU3rpovi7qFKSxAhCEnX5zW4Hpt",
  "key22": "Fo45seuHJU7vNiRSMZ8mgriu87Lvjxy7g2i4mSwMTSxNgBypENuaK5VZEzxsfA1A2JzFiUK4Caeq4Sd9zueEtvX",
  "key23": "4AwXVWJnmKmBAKtGcTcAYr9VHCp9opHi4YYEzWvvGi2JsqLMcwF4LmkN9fTjjU8djbXpPNJbbEp8YfLCFfe619bu",
  "key24": "2qxzEJzL7iSYaYo7FSJW9vxzg45RDcNLMBzuuuoBypBZsLZGuqThFbBZk2xn1ULoFTFGrWTQL44SJMUx5XRGJprM",
  "key25": "3RwER2rsAgcTzc73P8WkB1QDzBb6WuVHiChKLMpwpyPBaYWoPAetCQT5Qs8XyyZiDW3oyGNnsUA6iAyYdtia4FUS",
  "key26": "2fd1sqpWHcXyFfSzYJMExyMB3XaJEpZHSQbFoZbYvC8cmLAyPD2pyYcxTQi3V49WaJdbjrwzvoP5PxrDL6Hgr6SB",
  "key27": "2Gg5P7nLXh7WbqS9jHQMcuLo6FASzPv4HNJrQDcFBBV6ZXDYZmdzYgApuudSM2y9tYE5yg1pHK1997mUPFYcgdfa",
  "key28": "4kWKT6zuS81mvWS8NAe7e5BvrtXBMCSwE5fN7zYe31YG65eGPS9X7qTGoCk4yDsWwJQCSc111VSzYDRez9xX52J3",
  "key29": "4CZEAnePF8cJGSeVkGnwMYNtFr47nKyXpY3fNHMvdKuDomMYoYv6X7AH2KWi5NYkMLsijz3tGEL28eiY8K6zLGAd",
  "key30": "66gnpS37z4GqfTHmibMRA8yieh1rfSmhUVSi7wBvDoHTEs3c77yTMzzWMYY8YaPHKPCJHak5QRWr8CsM6Ev9qUJq",
  "key31": "2LPdfCGYpCCtjeTkNN2tX9sxGEDRVXYcyq9hvE9exd38a1kYCj6g4WNvRUBSXDqynkcrvUvtNcng5NyQ2vJBmCP5",
  "key32": "25RwukL8DVWZtHinEdy84xLpoWKcx4V1WA9F7BpKVZDAm3qbLKxrYenHHzzwsszgp7Go5uqyd4SQ3A56asxj9oFv",
  "key33": "2VFNm2nirLPtw8NcH94aYA4UKog518MC5PLZg8xEVUtRGMUXv95dsb4qQDX8ExaKnrqPaJ8KRHPtD8SB44w8vC7",
  "key34": "56gf2F1TYNwuG4vKJfTBhrbV5i6Tdqq87bTNfwaqvJj6QDC58p5exmtzSjcHNkTs6dUXHWupr8j9tJFXVG2fZQEE",
  "key35": "5NUwwbURq61yQrHEQSGJD8D68ctcwYJJZWvYD7phMBvkAgrvhTLuLvCcGTtouA1E1Nbv6zW52CpCTTbbxMpmSY2X"
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
