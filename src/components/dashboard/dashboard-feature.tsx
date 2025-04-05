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
    "38KZE3d2mEFwDQdYeEpmLyJ6dtzD2R9csykR7acbKRfW1ou2vg9xhq4rCDGTy16ZUudVQcNWa6fccKuk6BpMF7pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUnnT2qu7areHWbvCMNQKr7ZWa5VUyVjq1zAWXKLdPECaCdN8EJph55TVS1UprajLaikR3oFRgEbCd2U77KvRuu",
  "key1": "3vsbTb2U2JZHVTXkZwaCFxVKYjWEJ1pTfBRyVXcHHN7qfBD94Ekp5gCRy8pjSjS8qJ9R75nEwyxMWhk3gXFhUhWp",
  "key2": "65dT6HfAktPS12zjEnYC1kG4mnGUifEB4LGyA9vjDA8NoioRUF21PwRyy31cjQoJioXWE9daLym5gBoFiRMU5gKj",
  "key3": "2RWjZsw7ZQkF9rxnX2q4tttHw9sn4UV3rPU5HLhWTyqcCNgjFHeDhJQNnciNNkvuNdDR8497rJzbiC59nubNzv9t",
  "key4": "63upQ369UaKhSMnvWY7BaG4b9dYk4vzXM7Uk7gztP52p2hioSUBSU7NEL7zPC3FVfjJatbazs69TBMgMFbU3Ngru",
  "key5": "3uojfHbSzRj6GCKjWcY31F1LT7thJHa1KaYuZ2LGBY365qMgTp26pC9wLJYJeF6y4fE3NX6mXDXgZNxw3VGgsXBU",
  "key6": "2bSsoqVRrTA7HZrAg2P8SRCx35eBoX13s4Hk8qwmG67LLpSqX1md3mvNxAFzhEQvPnDGTsf3smwnbFVHoX9KMbCv",
  "key7": "5De5SAzBDPnX1kAZRNify1CyXWayP13cySXQ3r3JUJ22dLu1ZKeZux72mUgYS5qABz4gsyT1NkLivV5hWWForpbH",
  "key8": "2GbEwNdSxb8WR3zDRxM3Uv9Mq6MVT8NMmTrkrFtn71Xt9RkrZLsbsiNHTfz9Sfwx8oghwvujdUSaSurUjnDN6zxG",
  "key9": "3GNZxgKXkiZXT2qY69DnSJ3PyxvEhMfkzjPQe9HGcQJhZcvYiWcTLowufMmSgwTSTuC7McypbgqaNLkvDHS1WWLm",
  "key10": "3PhJGyaF9A9sX69fXvBRtFkGuymqLJi1e9rkSp52iffk2sxgsDAdBWYL9Muo4nVQJhgdHXtsUp8WSky8YxydYCxe",
  "key11": "3tUJJJ7VdWKHswmAjscGjMwKpVJM46m5n82VLd32DXm6rFqn8QDy4xxoNRsnQeShrjydLHP9no7eg7od5LddXoLg",
  "key12": "3ypommDZdiNr4xeoqTU4iBxTWTfK4LP2BXxcytLiiwtAwP8VAzHM6Fs2DkUqDgENPxhdDdE5gTD8ozu6QxjS8CSi",
  "key13": "2RybgvACUVT3kM3N4NDS3GeWTiHoGtwXgaeP5JN6LRN3ntaZ2JLissZUQbHxdZn6fYhN1MFw8tSdetuwB6AWsszT",
  "key14": "3JjDSFTTqdy9NYJB8LN17mNpQEnzLdwRaEqNbwG5Ndg6EyfwzDckJrQmkY37z3ntcMvnv5WbNXgrwY8GWzN24uMz",
  "key15": "48CnTyapYESuoUKpwtn8KAhnSq73BWki55S77ggpMbB1ep8UPMa247enG6Ln5YzrsXi5kSyAZBBGCEYC64srknD",
  "key16": "2dZLb5bs4pFoqqBuCcag86RK6NaNhgh4zeP8mEfAayV7XHyFQxNckT56QxEsfFpREN3X9XuN1S7sFejqxrvs4vND",
  "key17": "57XuU2tGLz1yMFEype2uj5nJpezT28qNrgUhivawSGMeg7rQF1LDiaKpMKmRLznQdXwpMq2UUHhNX4wHCqWKzhDe",
  "key18": "5ozQ1XZ6gSWDGLQNntTCkyzbZxAQtbKh4PnTqVAWtFrbxF61oXxjq7kPFfSomVxvNZDgf3DdxvVypZip2aazHmPE",
  "key19": "4YotvqenrqkbDPmkaD4xRbpnRsoLTWV8XmjGXLVT1XHh2vSdMDNTWkVXUi7xYcGntqPZxv6smynYXiPBRp6aeZUM",
  "key20": "32jC6SByqweq4esoujsn5L7YDssY1JSkMQ22f4HjPKKTGRSZ8DwJiSK3mFxuN8QGnRBVsqdXdCaRQ6qAtxTWhjGc",
  "key21": "4kViNwtxCykYsM7uWFoNowR71AG9iMEtNkA3rJUTUXnzLHwV8QQxeg7whf2RDPzpPMUzK8L1yYKvz3NXFSVTePzj",
  "key22": "2GWCmFUQzuxezfqE4XVTQEixDVr11cC3MyemC6Wg87GKkYJaWKzgYUQdyHQsXm1XD8XMty4ovWeWtNKuLtbFf18J",
  "key23": "3pYi2e4s95VSbgGbEpwEpg8z3bUiNFBpP2xNixW2Ps5qM8TRqBD4UqmD2s4FEvqwM2wv3jzLtwk3ceqHz3ZbiAjr",
  "key24": "23s5sDZ2GnGu65KE5XvzitqbsWwkY8MaZ76CoQvMMRH9mgFzhASyNJefXW5m38rZXWCgLMQco6dCZiCJGCeCKLHv",
  "key25": "3aZzCLykpTPDgnfYHgTp9B3wzrU9qA49wb3V7wQRnK6s2P984x76ePMAKJMhqpkDL26qZs1sAdcZR8TneYi5V7Bb",
  "key26": "4KSGDd7Zz4S2rYB682fnVm7Ec9iB84b4XYL39WKTdbhp4T3iWiQcB47asAgp6oRmkhLc23y8v1eSaXnDptVA9rtw",
  "key27": "27ebi6NwJqgik8wHhYrgvJP4cemGV6Fm8oxcE49r475aqkmtVVZaWJd7UznPzwiLDasZcdKLrVPrC7JrQ7fpNQmP",
  "key28": "rQNX9r6qHztXZyoG5gwUpeoRU1RRTUHXG81XLzgLToUJTk14WMU6AjXGx5QRG8QofEHHmeSkVGnQ7na6wDHtk5v",
  "key29": "3drJMUwGHZs8Z3J5NbHVSGpwDhS4W6EsZVU7srFBUqHaHPCKQ95yp6cKiLe9Fs4oVQWvUpY4meYL8Fm1sXzqDUvz",
  "key30": "zf8LRHQqtiaTcgm1MZyh3Xx7265GeSRrYwcudQd92ShW4pqWFd2wf123Y4DXhUjNULfjUygo7uw6v1agVc3wcrM",
  "key31": "yKN3V8VqqY24TFgNj48tsqm1GRZmTEPMznjbtR17MMSCzVkhsx4wX8nAQfp4EvH1GM33HSut9zPTXE29KspVSej"
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
