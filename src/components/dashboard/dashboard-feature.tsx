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
    "3gsKTWceHQWFMTGBaAnQQ7jsakPdEvZRH4cugFBXpd5tgGbSAecbENeEcoU3tbU9umDANQRiHKfo9Dsg2YDQr4BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ryyGCw8ca1Gn6w1NAiV9xoWiyU5eEgX9vzir6fiBXVrgssUij6QbcMZUeEgiKCdiQTtwipHWCRAGR3FtAjHHqb",
  "key1": "3RZURKNwozSQ3jRfzHvty7WW8qDUnQ44EsZ94o4WGcnLBkxRFb9uZi63f5hjFknHyRaqtYJCyJxTh9obPYrsFHKg",
  "key2": "K5uDgnwv1qVcB7tcd8oa8kxsNsfJugRh8zaejRxQ4wk3CWQbP7EWfo6LrLkNyCV8YJ7yZXuxzq3L95Cdujq176E",
  "key3": "3P3GwWQMH7KB12DAjkyuVwiMHnFzRqq9ok1kpy8dgx99Jiha3VywqRjccKfdgLQZGRviB6nMeUp6i4HbnH1LkWRL",
  "key4": "3kiDa2EbnZvQwLhEK32Y8hqzhfJtdeBp4311ori2FBNBB3LrguK9SG8CdrWGyUWvH9n2mtt1aopW7b5H4SDar1gk",
  "key5": "624goZKA8ZgL1wUALpzEaMbuTkWenaVumAbgUAfFx5tjhj7ZqokrpD1YQR4PssRUabEvro2Ys4qs6TBw6cbqZZYi",
  "key6": "2JBbRHNkNy5pYbA6C1pJTwfqBovThxV2omrjBGwmgiXh9RpUyoEPPC3DpULuor4aai6vJsnLeBqK5rYCASBVWafm",
  "key7": "5cyFS5xUkft6PVopeyJ4w9SjaHTFPy1FhvnRuasS17BjgRGWbXBajYyAvNHKF8iGkb7d8QdRgRkjd5DvuDahCg7e",
  "key8": "5XBt8VrjstoSpDoAaAcjEo9US41AbGopwAM9FNXwvdd5c2xQbq99jTj5F2Z9SJN7z7NYV76MVeh5D5wMW8EB8DNo",
  "key9": "CfUn8X1Wtdi1MVv8zcSmX23pGczcDMASFzAEbZA5NNQ6UWBqiiDCPQpsnvTq6L2seSnSVYRDXz6sdEzF8gWCzsZ",
  "key10": "2YYRMXMGU11CbtkCuw2AXx7psHwvoinrAerQuQrfGVCMVX5MR4WaBpZQDneGbN29nVFXGopWYsYUZQY1X1Z8xrh5",
  "key11": "bPESuvRKph7sDGZSr2FaUZcY6XYRewcGQWUaYdkTw14ZudmbLC6JFt8kC3wZkuL5ah3w64QPEy577j21n31K8f4",
  "key12": "4M1kApMWSMxQ6sToDBg4eNfpcQ5KFH2tgdgFQFHebBVDkc8B14HkkjYz5ei2KABh9sFNnM16vKBzUpaAwQBeb4gq",
  "key13": "3WvGQzmmJvKAd5ELDCxWgTrZCSKgpocCBoQsDXMe19XUNsjnN3Zh7QYi3pRgR4aAGSVYkeFUGrUgxXuvuz4H3obV",
  "key14": "jirN6yzrKWGGp8zE56PS6R3xeKnXoTZQB8ttNqqykW4wAsHsCConiSLENf1vAWF5x7uHbxsAyn1c9xTaRhrToxp",
  "key15": "3sdCB7KYrUyUAHVqMBLSRCTmRVXs4Xx579VNkDPP36qYYwNKuGC3AGVYHGpcgxR2ocBD2mWsqH38D5yi1cRrxh8J",
  "key16": "2PhuPiXtwKLLYFAP5CBCmzNiXZvnZ5W3QT7ADo1tyCAVQNWDyHst1M6r9YwsGLGUuZeLAxQ4foxmm9BUDEkQGzos",
  "key17": "35eaoQV8XcGZGqQ9wzSwxzkGvUHLpREprbhaenx9SSo9XiwGEM8ymj3Vqy8ZmJEv6CXSvY9n3P8XfE4sJes4h2j7",
  "key18": "38nr58jhgnCkcUcBHwU5XgCCchHQohCysK9GQewKup6yRJu6B9YBqgdE5hUJeKH2GRqpiizK4q9ocKP4vTB9gUCK",
  "key19": "3hBtdyaDTh7c9nEgaXzWFaL7ufwFKQT3kLiWgUCjSx4epW5jEwmJDrT3XZcPp2wNBTW74euR2Tr3ggK4HWWZyfk9",
  "key20": "4enCXsa6UVLc3gMP9fP747Kwpxhvk7wpaCr5dxGbv3Var8rogj9S3Qk28TXnWBrX215aVEiTPLD2C2CFVcStB8Dj",
  "key21": "2ksDA5Gq47rz2YQah6QsfYoPG9BydN27WqbcAYGVTfoNTtA2wWzxcpKtHGqogXZiD3Y9s3Z9zdrzoqnRsdbDB3gD",
  "key22": "42Biu2PDjE3LUPSdXJgJYsBfthwaGw8aibjS7BXJkGVwGr4QbbssA8jTdQshAF25JjjRKLcTMoAqnA2wLcPTYsCb",
  "key23": "32eMEtQDy5xr7EJCcUy981WUwzQ3cxVqfYTskVnaL3N7mU1nh2owr1637ib13VXTToJogVXh6czobhzzTdMWVniH",
  "key24": "2bvQGweDjCjg5bUSkZ2zzuGsAx1xDNzrt3BmfkmDcoKNrJCurL7Sg4YsbQrVmkz4bk7HViTteb8rADWLdeRqukkG",
  "key25": "3bngYVip1GnoNyDbUVw5QycRhxQamxB1vL9TCQbt5BoBiqgRUSd1LKjsaz4b97ezMv57N1XRx83fnw1cQqmkeqTK",
  "key26": "23DJzy2su5iN38YpiKgsKebgKjb4tbrN5aUmyzsANuAMX1q4v4ZB2j3xydp9uv6vrAFJWiL2HZpieESugGXuxAyU",
  "key27": "2ZtvjVnR3ReGHckU6UhHVB7pqcAvBVRmBQprbBWCZ6nHY8KvwvmWQioQAbcMUp5HsJN49SMtLpAAKWA464obUQ4b",
  "key28": "28hnB61Kn4LBtNFMcaVPNJp5SC49ypvsbuWdFF49iqrkZ9gUj7kFJUgmqfSuCSbiptNtaki8ocByvJoFfox43iQ3",
  "key29": "2DifcdwoNWcfUsJwNupCoTm3C41wAAvsFFNsFbTdsxmps7JWubr2tSBEAobY5pCJcb6x6bca25h7zoe7bpHSHjqr",
  "key30": "3nvmRgTRDrr1iLbxQoaWuRVCYwPW5Xv4cgv7EtLKbth3BQSVeDw7YRneGEkWuLPyp2zgTUgcrEMbdmRJj2cpGyBA",
  "key31": "5QsJz4pCFg2J1kdC7cXBX9bSahmUcRgA9dTtniNbDtu9V6mktGBRWvc7dSkgQukJrPYsEjM9pVnj6wobrFEaLCZV"
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
