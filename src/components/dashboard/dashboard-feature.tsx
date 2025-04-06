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
    "39AVES1bsqt4Gr9JbCc9vnwMocx9JC5UuW8b5FPX3tCM6Gp8dSL12XyBdY65kWgdQtk3f9ph1kZ67JGgyTYjHRYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSa7Jgi3QozHARRiBPSyRgT9mYkFNUBfg2nP3HMe1ked5sfqU5UtH8vte4f6bDrFXnjWo6aPvVNJKCHM8YTw4Az",
  "key1": "cRdNAfFdFp8uciNCpXCZG2iaP11DKQ2uAArVLumT2gJ5SSkhu3ZdLqutKw63hRSR64VA4hnTH2MFBuVKz9tUsLp",
  "key2": "JpFocx3BQFMR6tVWRkHkh2omFvgyoQCqcPGTDEBUiCLTNC4FC4wp9Zu3vhqW8gswXtXENxm79C8tdVv7gcXB8g7",
  "key3": "5q8CFxwccz6bXMYN8QsjszngFhxWDvduaLb1ktQqsVWpMX7F7fUsC8MgUTpD58vKyJzngDKDb5LaeFNa8tMs848C",
  "key4": "twBwvvWYjhJcKrK2UG48KBkpapryvky43eD4BPw4x97w1fKB4MdDLwL5PxzfDbLHT1nahoF1bFEXby11YBj4eYR",
  "key5": "4qAa7zWhwaQKxteVoJaGUvQUui3XEAxVPujJkuqHEupfnLJFWN8tfz492vZanV4XvBERXdZBENFx9gfbCzoPfboa",
  "key6": "2ABSNvY7cV8yd3gssfTWNVDRaz3Bs8VJQPt6oa8B6jvhhhevgLFDwzorz9cchaVhdw4q6rJwnuLrEUFXAkxZuPJf",
  "key7": "3nm2tBQWo1LmDKDNvEbAKJdQMW5SZ1LYeWcxzrxVvzmUUQyoioXPmEuZ4PCFx7G6eN7eLCJv1ZhAxHo9uqdKLSq8",
  "key8": "2uyb8bF55Jcbb9rKCGT9VtxkkDHNidC9zL3u2QEgmV56eE6uq1LmoZETgQpEEVePSCLKp36cj2Z7uy5HCs9j3fXo",
  "key9": "4jxsjBjMGz9X1WUjGeRoNewSxYQdjZHTszRM2KripxauyCR4X5k44uQ99woK4kucp6fW5Ft2wW51KYFbVp9ks7DF",
  "key10": "3EeanZ8ucTCX1KkCU6oBvwtApfRjAFM1MXymHrxAk243ptKTZxEJkM72969K8EmPAothhAGKmYZCrA9v6LLkuo5L",
  "key11": "5MTHbJJtkv1ibiNx2bTbfA3tkqrAMp3JdDf4sczqGyY1q5pd8LJdrpJAxBo4AZeVsZ9Fk9rm2F6NCzKGyVRcLcJA",
  "key12": "3qkNeQXuSgiXjAohWpaMb9nA4pr6HARDLCBP51Ewj5c6WFYDpUDD7gCXKrs2dFBRL3JCp2RNFxL4e7hu2KUwD1yy",
  "key13": "7nmCVBGp8CELcJQD5nRkWXKDScUWBQed4Df6Pq1aeaPXq5BpHPHaAsUpe69V2ifF1SV6CaPiuqgVhxJevXKNyPR",
  "key14": "WsV3WAwbhjQnH49wn58Ubs2FMNq1fxWy4gtHoEDamK2YqCQFWPj1ySbJW1Sdzwe1mPy9B7wpr2Jk31cBZBhWCNp",
  "key15": "5eH21SFe9wKJhNwvLaziDBKERbfujNHbEsvtP4E4AQ7m1NNrS6g9UuEeWjzb8YNPC3GA8HmdW5Gy176kVXb4f2k5",
  "key16": "5xJ341i5H1P2Zg7TqCLphSmp7LTFiHcf3gdfrtP5WUYXQWKkMyKE2LQny7MyH3n7AQwYAvpbp3MCh461aMqVzHTm",
  "key17": "5xbuKkRVBSHw4vc2AwnSCBCPtkHK7GExbsNgYZ7Hy56aoQBimYmdD3LNDnNSaJTh6AwxctBZGHFmBarYkW7Xt8qn",
  "key18": "31b8HZtodE16NkXQc4teEmSxKawPAMAber31SEADJPGzTNHbW8iaAEhVZYraodyk5cuJvkV4MuNX7JXzRDqVy3cW",
  "key19": "5xCJLRYWcjhDkXwNvjqu9NAnFhcE3jBtgtAM991i9wsLnr6Zz83pdcBC7tReWKM8XFf2ETKGbdfGDzBSXJwgbjVq",
  "key20": "5AETLzz1gcqqK6h82UXTjmjSLB78KYuCUF5u8DRCjWSydRDqVNq2PY97cQSUjjQ5bVMwLnUm57ooYwckJkYHhLsZ",
  "key21": "4r37uf5FUEG7UAzJ44SH8dYKEGDzsRNuJeewfnDHJyQkNxb7BJzPoKDET8QYWM83rzUo8zELFs5exro1gVpKECQ7",
  "key22": "5qqqTevnShRmV2Sj1QW1pzPHdbeg3qMAn7wrc54PNwQ7KcHfAxZMSrBW5Eb2hpBo232r3CNKMzxzNZ9ShA1nnUwy",
  "key23": "3LLzVyZkh9Ec5ikhz4FwFcUypnXNfc1am2Lz9KBJGAnUhTm3WGRa5XR7AwQGa8MwgM9y6Kw758QBSn9Ckgxa94xy",
  "key24": "6hqqfKK1AexNVqTBxoHprAiHp1xeM7Hqw3u3hz1QNW2ihGVRdRXNx8nuq3vYayPjVd56pGHEJsLuAPrUvitqm6y",
  "key25": "xwtrEh4fGYnUv2cezzjj815khGSrz6s6FUTHbfCsG6rzAm7oxj4gSUM8JGAEoFr5QEtVLmwtp1ngkrzK15rZ6FJ",
  "key26": "5LiqgT314ntwkmQzdvKF5EU5jVvf6eKcT89Zo3XDdcfq3ETCddAGHBtivh24VwnEYXAhuLJysYpvz9QrPbeFB8t2",
  "key27": "38ztoFVCsQmVb7VyxywcUvWm35ZX9U9VzJdhRheJReHTqzgkBSHUTqNkUG832o9g3zESRRbmEWCXjKcCYGM5mY5i",
  "key28": "29n67Tf3YFozARtSJ6K3dWMcSWbGex5d6BkyY5nF6vBDrtEzqMpoxRtCWCNrLjPvjNa4y9rnvWkexxujZg5mTpZs",
  "key29": "44QFRXYJRP5Y8octYa5sg9BSkfpFSM6RTGNg8vmAcSKsodApMH75atE3wdSp6Ci3Cdxw4sTKL6Wok7PsSRa6FQF7",
  "key30": "ckPwsrE1J2neaQ4FyQ9jT8TscKze42LfHrKtBydSYRCP6erghy8PY5yWp76NcpTLAmDrF6peNPvTNiGE1PgyVgy",
  "key31": "4NJy71duEb5Zb3SEqP8JiYaMedhY1rYnArrCh8udVDrxSCjQiqAhu7sDyyE2mYVAbpVmgWZYTyPEAF8tbhKAV6Qf",
  "key32": "3HxQXb5qzPZEUGrsrgjkDF5wfBt1pn2pxSM1EfFquE7NXb3PSwJZwv8TYp6KFQ9EKZ3eVj7KrE7JPCeeVpZEwG7U",
  "key33": "3H1Quzuisx3cQcFgEhMDXhzuUUTVS4YWGDpXq8ym7mBcnzjVpn8B6mUSUWdUnnkZbv9TEpXbK9m7jLhezJfwmuKL",
  "key34": "3KqBL3Aj7ENWEe8z4HDkJLjgytan3LPfRqQALXzuq8UPAzzb3nGwPzE2S6XjHS9Hkh447wtMbhXkNQYuVWyrezmF",
  "key35": "3iG8yhFNv9C9gwbhnHU4LRHSUSULG3f7fcEradrtCLd97v2HDvXf6ZV5u6LAR5xAsGFWmeVTufqwMRSEkuVMNYU5"
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
