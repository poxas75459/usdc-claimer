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
    "5Joe5nDGmqRYFGqz6hBXfRC8CKvSZAMi57s4VWczXyNZK1DrkJt2V29H8yCyTbJ6bzPjrn4HmzP27BV6c6py8dB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXCnaUonjdu2RAG49T8AE4y7wE6eZgHKz12oM2jj1cUA4byAz8mZ2SVGBy6onnMmqSxC9iNB9p947FZUFrA2vCb",
  "key1": "2XDUwm4XdYUFfVCdbsXZctVPv2wnMtBjW5XuurXgY1CLbhQKF1SnMkiGWzwtxPQNYobT9xTC8o5PScCRW6bN72bQ",
  "key2": "2n8M5CRi3WQqFgciNXxMkRAbYNtuY5aFuSRuQ895oDrevo66j5N8VYtw2Mi3pTSNdYFGM8dMbMrPv19Wi5dQrHKR",
  "key3": "34pMxbL5HNEGw7EJYxU3BwKsoQShWYo6bgPiq67CvVdDX3WA5Hhg3Lar2swvQsmyoNSAKiGp36DbMfNuK8JxNkJd",
  "key4": "sRwWpKKaaMmA81rUEG3QS42swLQHnTpZxta26NZGCjsDgFDduNsy1ge9VnEQUusSBADbnFrnb5yGvYYZsUCjxCF",
  "key5": "5q3NotQu57ensCQyukanEGk2ULhov9B3xPNxRa2yTGoN6aGDbomdEtf4JtiX6ac1wsa91kWG1cKfq6rzc7F4oCiU",
  "key6": "3RMvcdsQ71NBGdxm4hXyo49qHQPKEhMsD7gDPTJx6rhJ274PWseTwgn71DFojuu2zCSwKpWixo2Wp74No5ZWTNyw",
  "key7": "2BQmDduf46top6MLZJE2G4FdEz8Ud9DPpsEZSF3GV7frf2MHoodPJaE5PSAKvVmTjw5jT1skPdBu2Me5Ko7gVJux",
  "key8": "4shK2PFLHLTcNxoLkkao6oJVoDyFZjSb6ao5dZmJ1BXBWRr4sQArwVaGJXr38X5Cxwo3JSXiQ2f3BrCZhvKbdZC6",
  "key9": "z7VPLMBi5yovUeL8isthsaR82hRMRAMq96gdwBnnmN8UuFDNwesyoPjwgdUoCr2hMGq5QskF6UUAVpLdGRinRUj",
  "key10": "24NQ9K1888DUK5KvxuJ4uU6u8CuTAd9hNHhNSHGP9BujvWQvKzgWJZv3isRS46FjKXSLsiYPrZTtmK5SDssz9gXe",
  "key11": "3FBgqw4oWZCjnhkSd4fdP4FqLxtJfoCuVXDwfGL9tSAi3zAhTFYUWobNPEu691LWF8MSrB2fWuqTADXooGyeCCDL",
  "key12": "2jiwThKzkR31wGrrkcHLQ6yyHXWmsso5NVam8quaqB4s4LAHUoe2MnvjViyEWJAueLmMVXvZopsQS4h95fGyanAh",
  "key13": "253N5tQSNVkdZMsd5psakME48LDb9ufrp4xMEgMs7rEVx9pKduQYJ2f3qDkdAPDhFzzFUCJQeB8YF6LmgXqDqkrw",
  "key14": "2YAuqzMbNkWQdWrqGtM2sCaA1zjjKiihS2ZfEDJioVE732rAD1eJiE6BHNHKTv9m5GHEhHWJitHUYZKixFXeAEpn",
  "key15": "5mkRDW31ZbGueGHrtSJnyx8J3LP1bbSJsfL2Ud2aiJT1jAG1Yq3ETCFu3BRpgZfuKyEJDUw8UL2yiSBjAFpUKn8u",
  "key16": "5BcbKaDeeJ7HPEMbHf7u6WLqnyxS8W9UUdJ6unipBvt3PmpqhrEKwGrJfhecs97FKSmb83eKmEzw3AmcGVgQzENN",
  "key17": "46VAnMU1AF6Tyjtr9SBvYHneSz7GExPYxWzcLEbDSptxSV2cggH2geVghNk1fboeekVj164wpTYk3hEVkSrDBsP2",
  "key18": "32nVyMZYagFrmxKWAgTfh7oaA2Yrp3kitfLKdnu2wRMrCAGFH9Ypxnpfq9L3sDwCmR8wzUov1TijetgK5LTkv8BS",
  "key19": "4r6zB45pQU8F8JN55BMsBzBGdY8Z1K8xDB3WzjvPMvJq2DZ8UTrhttbpfqvEvmxXEywntp7ADB58ntBLjocWTNKg",
  "key20": "5qbhv7VePpNdPvaYXfxYpPWnQHUBWB6wVyhX9LPk1Y2UZucxcRsmKVxYitK3S4csCjiiZmqWnCQzzimha5XD4U6u",
  "key21": "5VF7Aw5Pb93ZdpUoFhCMUdKttJws4jvnr1mXMDZKYNHPinmypj2Nf9ShgFJmxqFZzn9KbUGE16Ywp1g11t79eoyd",
  "key22": "5XSYtrPewgBkVQEcspQ1Kub6kzTcUhSpKfM5rxyAecuwtHiGzfNMYUFqKN6EjJZvsZLKmo9o2R8D7PRWvvnFtfeo",
  "key23": "iXwUFj9MBSAuACC9YnGa9GnTLuYjBfrGmkeGHHNG4ctUWzyaxXP2TCJ4LVEWGFr5wGB9t8xyoVbcvMSc6NKRBG1",
  "key24": "4n6qeTPvskjUTBAhJ7DfpBxeBKwYXNFNyH2XAQe4dAEJe3v98Nz28bighjWE8fuAt31qC763usE53Rer2jpxygUT",
  "key25": "59iSGrqGxd1tBtzcAe7PKrbRZMQ1bXVs7xJoU6UE76Mb4TQ9ASZvoiMz5djEa3Ao3X28DE7dst1Ges2P39BufnmF",
  "key26": "59eZxXaEyZ2WYe5f2bLBVcqpGq64qnmkYjbyocHQkdfRnouwu6CyyYeNv6MuGjALTRwMqe6dQK6uZSRNAAK4vxEY",
  "key27": "MPd9t8YtkohADT3iKH4zKzDxoutqktL9PfVpL3En4Sy1ECWk66ReK6FbKnvKcWnanpZZqADuAe9rKYKpGxVWeCF",
  "key28": "5DakFdfd8MTYhHeGWSwfwrsQWspW5fzGHDYbEdKEXpGfVLnxmPKorAfW1pxXQMVnHBHqs2E6p2RHUSmYu26S1Pk6",
  "key29": "dT9Gv5rUmbkpy38wtjreHHRUDJHLrZqJSCNdXzdsbYBbAiJzUcbHTDFswestcPDX6xPuhVuKuABEiL4WEJ4iwWZ",
  "key30": "5xz4T6NznyQa3w7jkAmeW9LpuWtPFUYpBjy9626QYzyG51fRwgg9AWveh7UieL1JhgkCNG2L4HJfViLBACA6hLwF",
  "key31": "3nnomCKhbpBkNycSesN3rmZYRgiZ1cE4krSQTrkV4o42JQEbGUDNE2X2GaWT9xfzXbfMy56Am4twywyV4fs8z2Kb"
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
