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
    "98t6jPYfaX3ThutVPivXS81WWH4oH5v1VjtR48o7UNLJmkV9ok3qN4KPn8Kt43ffnHCz4xjU3SmtYo5VDUHtj8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDjQcEAGgL7AWFPVQxr1LPFWTkCfHNToMp1d7eACusaJJfpeuhWfr2qV79aAKMyZZKx6vsRy8Gebq77sux1XSMS",
  "key1": "4WJwFToT2zNoLKzN2a8o1SNaZ9FCdRNS26PWEgLUgJ5S3VbbJzcA8w8K1DG79Gq4ihzZuA8drTVp5ZhZXJcC1WhS",
  "key2": "3jZjyfES5iAgey6JF8iNqR1dvUNWnA88GYwrXigiwSphcigiXWcChocNwHqq9wcjSKkAq9CSFzxcwMxSVKAX3LHe",
  "key3": "3CqapSciBS9keWdehkkLVewoB9yEVwj6Y4W3m7acisfJj8BoRCiS2TKyB2yaWiwQbk7upSK6zeU7dDvE2D8RCgwU",
  "key4": "4hAdNdRZcmKVtBku8CbojGMxQEyYpH13XdqY1mPYCRdTo5pEG4J9n1uJvMWR1jXA1aMpFF62Y1RH3KDgYkCtvXHb",
  "key5": "5dvL9Lkkvqed8b157FkZdje1z9cW6yE9VPLrKbpHCfQmta5xR3tNjLBd3ztEbSqqSyWeqmzYtUJDF6Qa6ynqwP6X",
  "key6": "8ZGGskodkitMnQnGzRA5nRkR5DLRoRfJbpNwMe3KETUYPXHjEMUFJArQUAwex3WiKhjJ8Kzt1aDyKm8c6seSFAB",
  "key7": "AB6R2EKLr3Ra2Mu3jibGN6NymY9j8REmEga6tJbTz5NsHoUx4qM8LDowwYatQYj4G4485rjCyUwDkyEKGTAcDRy",
  "key8": "2HoSLE8REa2jPDLyyxhtP91o4KBTWhUfM4SDB9s8xy3ewoRFJFtxputUvmkSVezYhJePW1QsyJrCyBL5xxwZQNhg",
  "key9": "4RWcDfr7gVuBgoz4h4pp71q2UtEyugZUSDG9S5Wigki1a6a5g8YQtHDh1pTMDkmpxBbqu3yi5RTUsDVsjBLUTx5d",
  "key10": "4x4dsuBDFjWqpvVPqpW2aADPSz5Szrcx67G7HxAoomGN7w59rF5W1GrY1RbEz8ar95VLnQMo867ZNnnzPrMScHk9",
  "key11": "5fpSLxhVGi4VmqWPeXuhWBaFS1eRCbttdCbkkgU8EAbbqtSU7wtZazc9mfpxWAmS6XpC5n2wPtPZGu5suzT6SkL5",
  "key12": "5Ti7PYEPeZFUKdJB28x6kjKYi6aZBh4Sn7oQoVa6m9gJ7GAQcYgKV34LXbZSvohSckMGxSCTn9mY8dXqNkGaEQon",
  "key13": "4c5bUsBsGqRMsnCBvEUci9aMLbf6ZrGm5zoccHQQNNHTGsFjy6hcTWwzjaYGkcLisyW8ZNRVcLH5dyfRa4k3L9PH",
  "key14": "4AJPRs4hreBbU1okoRLxMqGoyGBRjzUe7h2cgqzwH5P8YRLgHVFV1JxnnNoKv7pav1MMjbToswnHSo2MYsK2XHYY",
  "key15": "2CURBeZKVcUzpqQTL3X1rnBNEfcrUmiJAta64BxdB91Gc5vkrKeUpx7ANaGECoR1fD8vut61okUPSJMYG3iHAmbC",
  "key16": "2MqhNkuDAnNEz4DCZBvEA4p5TKQPMcTRabkxk7wjLWqesgzmkdUBKKR91AjHPEbeid6th2vshMZY9e7dQ5oJBfhi",
  "key17": "26xyZ7yb5LiRAd2c2C2jqj12Xb1Xib7iNxz4WSg3ABkkU8fSjF2aDky9sfiXCrXqBYsExPsigyF4hhwPrxv3z6wP",
  "key18": "62oVKHEADafHaxVfjVYjTAKTPnbKxfaPJ4pJcPGJZzqBzDfhSE1E1mhemKCwWrcgXxcKnGH5NNBemco8MVMsArXS",
  "key19": "5QzUAoAYKTWRgf9u7MVBPw5Ys27MyMrrR4aHKj4KruyieiS9pFCjpqSXepwRassgiVMbiUtPi6PhLNVDweFXuMaD",
  "key20": "4j6i5dG5S7mdX1n2cfvNzSCk9ryuF5X93ALAVSdftXJrTzu3LJVoD85P84iSH7XpmSqEiabAYneycjXPS8ThxTw5",
  "key21": "4eNJz7VgfCzSWRYAH9DGMngzxjZ7TEf6JMqJ7Efuc4pvBc1wuqh4AfUzcGnHEujxVx7TsDa8nrHwHZGr9L4tprRL",
  "key22": "2HEavcybhrDfegyyVXVQtHuSH4XCGV1RhjiKBKv2Z8BHCAWjXnJn92EiFdbSXCM2LmBUgzc9yzbCeeujXrW7fpdR",
  "key23": "4WFXv4NVS62XyepMGk8SVatupKUQRKDtmfZXug6v1Vc1vTY729WMYLEMbrpFA2GueQ6uLF6u6ig8FGAYMQxFVM3T",
  "key24": "2d24y2Zbpa9WXX7C7LDuVj19SZJLPwVAKFaCk54RRgHsaqKjNQtu5jG6GtxPxShzRo5DN5iqMhMNqRRE3QV4dQdW",
  "key25": "27jKhGQnNKGqjsNPjbKABngusVvSErtW98bUd9CFHavc4LqTcnmvr2zJLf6mTnktWKvDz59DY3NFaUEhqdsiCXPU",
  "key26": "62Q4ZqbN6NTPfZAr8sCqGobhz9Lkt64g4McHvh6UyP3vhox5ndhNCPhPT8KUxkqsM6WN3vEV9G1NhyPwV6vVUwyw",
  "key27": "5p9oDo4VkojA93fNhpWp5xHLJpWC1vquY7RjVPjtuau1Q3VMfrFmptQ4A1X9TUHwHpNAsfcFuxzKa2w5PVBdiq2",
  "key28": "4jkoas8Nk1YoKTFr5KjZ1vUH9mySGz77cjw7tf4eMKzkWwd7RCkJoZZy6KthUxSqpVrRqJS1vPLT6dip5Sn2pSFt",
  "key29": "2BqqHuRUTbMNVXj6khD3qdE4RCZCazyHxRWHryv1pTzZtyNFr9Zyvb7AQhUYzfjiLyDGNN3KwKoz15KDrWf8Huij",
  "key30": "322UVdWfgXK4fjD3yMFxV6cy8whN57TSzp13n8s7s4wQo7CyWscmxmv7uSVG8DVoCfuAdDBsa5dLQSvpj4znctRc",
  "key31": "4wom7s4LzanCfJAcPhnEDbAsQYA1QNsCfn13dyPwBurSUa4kTMr7ov3AMuLyGZwP9Z4NP1kyrh36DY9y56992E3A"
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
