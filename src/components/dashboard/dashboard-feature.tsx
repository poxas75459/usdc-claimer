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
    "7dSgnkKgiLoX9eARqn3zEZZeZKEf7vktLHUjemXmGBA1SptRXFx3tKHSencHQUR1499zzjVDAoTD2Egeqk6dSLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bYHYboMSiHMRPeYdj1cuq99ekPznozZGJj5hCYeEJpnpWEGcPcndDNcDcjqpynxW5N2JpjumboyCi98vrit5tW",
  "key1": "5mgxhZq8GyiqGHdbvW6WQeiCtZbzFnz2o5XBUH5gg88xg1eghrS2fcKK4ukXsSfKkV48MzCxseh9iVzwp4MjaD3w",
  "key2": "RbzYKZpknsDDVjPqv85Dc5uGHRema67UZpmTWCfXFudWATwqHgdYS5ERsVXa5NyeATsv94j9ncYTdR5xbifaxDV",
  "key3": "3MnBBwPQvYVvXFwTtsrEMD2R3V85Up4fa82xdLDt5mCzqHZUsLgLGQL9Ba6fjuQm35fmd9zCLyHgt6NTknXfi1cQ",
  "key4": "PZPemCxv7ncFdZufxBG4PotrnT2WkqbQ5Le6z9zg6M9YB8rHtanEPBPV3VQhEKGtdy1ydhg7UYKFKKhbeD2d8Ly",
  "key5": "3duzb5i8z1QAGt2dpjD483p9tYEK5rP1RmnYhmrUGVKD9Go8bettj9aBLZt7eowc31YeuqX4VQ6NQUHqPQ6gJba3",
  "key6": "4fZB1kEh8WbLV6WFNkRARgGPogzdFM7MGjFcLEnyu16F7sTryaNBbjKVZ4yq7vtBa4YzUiczMZVc9aWVoMeBP1Eq",
  "key7": "xKF5Z8Kps6fLvNqRdk4jbVWLnxAE2DrPnH9zp6jkySXapMrRWWNUNCfktqZFcQEL1LaW3X4zTrGZGajcTkPDbsh",
  "key8": "5Qnyx87Sx4zdgPWE4pEieRGyzWiQ6PZo2KCA78GfaQTEWmf2bPU9YPpMevpWdmTcbdgNTnrFiPjavfF7KTex1hjz",
  "key9": "5LCtRkmzY2yeSTeQrFCRxGR2LdFniGXyYEe9Ps5fR4a1pxTv6MUQjbsthVDTLVMDvvn8U2yzEpfukvRcNc76PPfk",
  "key10": "4ZEutK34SsCMW8Z6PJdNzNHpxoeCNf8BQDVz6kjZ8hoshEHP3hYy8yR8uaHqxJujefFTQWseV3ykPYmv2Skyp51W",
  "key11": "5X4EB2ibuL4Jtp9jvoVcURd6T9NetnS8pUEpia9BV46HrpmZcoZwVE2ZdQAKfMkY9RmDwKabbABdoujFeQ2BvWXY",
  "key12": "3xC4f2PdD4P6zYzvXX6ebeWFZHErUs7MqXZvPTD59jhpjix5Lw9bi6Dc7chghnjA7ET7p1Q4GzsXaQ8JQ32fZcEd",
  "key13": "31CbAXCbPAfXAzeV7z6x6c5gjBfMV2bDdvvfCzfLSz5NKR7NU32zSZXLGwbfHAxL2XRcxSBRUiinu4R4j5CeHhKT",
  "key14": "5ww3FCiFMirYRNmX5NbvAz5o7G9giGeCFLyMofkYUUUqLri2f911jWbPCwidxuimHUaSv4arpnTaVYhiE4kNPTk2",
  "key15": "5rgEKt3gP5ioaWeQX84ft6TD18mBTYomqjDBo1iMMEaL3rpfaU1q8FrGuuq8jsVYmvGeogA7PA5qMoTTAtUoAZeT",
  "key16": "3oXAedKsvY3a6trACyRWdMu2mtJiLeBKvubXNC3KLdG1Z4dSBQ2jErsyufg3isrY46eHm9dYv4UrQAyxvQjDwVqd",
  "key17": "41iPnTsaTnQRuuHn6iBadbYPVtf2WomPdNDmcwXiJCEzwqEsDT62YsGUZA3uJtRBqUzS8jBugY4qPVyMSPmGdCdR",
  "key18": "348LYHPBHfpDH6PsVUuxVJsA7dpwdvD9Z9c7PV56SHkUCD53vwxAxXnysMaPX275VHPF87Ax8csxYodrVVjsGtqi",
  "key19": "3nD81j1J8ETHMdhjvZwVi61ehF2epiRopGhPVrPAREGGQuKtNzEqiBqJERE8XT2mj2uhfaRRCQqr9FJKpztJ548Z",
  "key20": "5yRuL14n4U6V5xDB3Hwfm2ic3KHHmh3D7pg1CGqJJGjKMNNQMmuPg9R6nURUpgsfBMkRKZQf4rwTccL1kD9eSepr",
  "key21": "Wt8A1x8vLgNbHrSM8ujDsxFN6CgsaLmup5y7RHnTR81EuuMnGvwJ6SLxDc3otw848ZsN1dyScerjgAMkYgU5FaP",
  "key22": "EJf5RrexdeWyHD2NJXnwXQt5CYifoTTcoGLzKGkKYJ5vnDSBhuYbcU2rsUsHM7N3z1pQwXWnAJnWdKMHVZFMKoJ",
  "key23": "ErEGkaz6dxVPs4gkjTmjWYnRPPYkParqYjLQbNwXh7uEitMr3jujyxtNTbKNPkdYzX68FgMiXwYxy8wQWKD7cHK",
  "key24": "54MTECgQSeQRXs29Z3qVVRFBVdnZ7fQg6nTU5SkhvyFJHmhxCyNDGQ7bdgvZvX1LAErd9AWCKcadJhUmqyG5zDWo",
  "key25": "2EwXL3bQg2Umoh5pW9Ahh3NL1QfqYL9qzzfQ24crrGKUrzic2qq3LSz2Jr6pc6ACG9Zit1rG5WcQCM28VMJcsMym",
  "key26": "3bDaNV2e4hkgXeHushmXprCyynzDJ9CH5QfmKr21sBNZEdFZt4Jmz7vEk9uvBQs1JpFtN6GTj4hjyRVtPQnhzFqd",
  "key27": "2GLCSejLe8yoX7YSzx7gqLbtozSc8E6XkcNQxKWuBSDak5i2EqmdmDLyWnk87Sk5tVEaSWKUAVbR3pk9AdKB28ch",
  "key28": "2Awc88AH7TN9ZVnWAANf5MQ8tMHKZEHLqfGD8X867H5Bs6kMLanYRTHKuQL6toAReEKS2EM54jjJYKREtXvXfd1p",
  "key29": "37yimBgAmWoJU9zp1WTwL5T7gNG28WEXvxHH35aG7wCsBcBjLfj6aad2mq5DSbXooLf8BhasLrGXPLAaYXSMJrco",
  "key30": "3wdL9835yG81g6XPkVBnMU9vgNpoMBrg8UYhsTKnJCJ9kbq55FRLuzrsfP86MaPguWqzvC1m6fUWjdGeVocBABJv",
  "key31": "3dfgrmHcVqRWysXh4gNcWabNynowZsafnAC9rcdJkoNRquwqJZNfNakSqQt4AmQ9a4RNEQEMRw6CXnmztEKNaoMJ",
  "key32": "3cLfLujtTJMcQYCTw9w6qa8uQpoXsJ1WFcUzTCpcLFDsCUyJddoL7UwaFn4HnuecYhiFAj2e9RHaABXYddGz7xtZ",
  "key33": "4Z2SbYcKPAX3ijPm6UxcjoBYZG8quLiLWU8N5byw8qo8dhhV84Mtpg9EuhAHH4iSCQ9rBfhY8v9NaHzZnbTKV3iC",
  "key34": "2A1BJfKb1m4a51H5PJ4Bceuu2FhHADDakuUrTz4JLKmTnZnuY1MzQWvP2GEE877KuF2oDCWQWWLWcVHdpXA6Lt99",
  "key35": "2JKzAPsR1AkX96odR2cq5V7NjoSE9MzJVAyjXwFGex8ZR7qvbK8QzyXUFc6yhWTT66HdHoegGu3QkUXAa5EP4GQX",
  "key36": "33LHQsknhDVNaBhepjGmCV7qV48mT1pzsZZv3aEfGS5mMeuAWSejxdm7erzvK15hhpQiAVfesPx6v8Yjv8t6DQRo"
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
