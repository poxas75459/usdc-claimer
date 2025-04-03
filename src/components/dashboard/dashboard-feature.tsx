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
    "4rnNM75yxSvBL1r6wATYJ4yu5mpR43DQeMN3HHex2BWpeyVX8w66V9AWGCPzp1JTSLVdG2skCeHvuwSjGsAzhYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7EtTXo6B9UohutQXpL5JNfdZEWJgk25wnhGcSR5uG3BNV5QHVUbhG5kTB8BQ6gHxwwMbtV4R4EQs1BoMrfSVzL",
  "key1": "NkfbLnvXXejTAjKbWeWjwTJaH7Vv6zSQDbD4ajdiY6ti9JhuLUHXwbHEM8xQaXzZExh91EBnxSqPBVqxk9E8yMp",
  "key2": "2m8YX6Kn8zqgqaw4KQWJ8oM3M6n6mXYgNT3biMG9grkyCibsPWfDSQLgZaKnXK8ZXLittF9vshzescLhKEtCcML",
  "key3": "u8uFoP3P4nz1iyAnqSegwMHv3miMdckbaR1tRS5ueDk7bNkkqHcR8sASp6jj5Z5bBDagk6ihGK1f1sctMFzhaYi",
  "key4": "2xPU5azVF7LQjxNvFvG2sf2xUfhvkxugco47tHSBxrYcLDWvfE7i4s4wjgajjUX6wW2wQqwh7FzmCM65qiNeSstE",
  "key5": "2RLaiexZHNEcDmTSMXt8LNWmfHP2DGTXT1AUCiPsTFP3zS11eCTSr9VGhTvrhr6ZBnm2konfQTPWQZACiLmmjq1t",
  "key6": "5FZhipzGgmeEcTzJWPvx8P7134VQBYnwY2agJGxBauG3Jjbt9Rb9bS6XNmvQjEsEdQEjUuZ6oHe5EE7tk43Stq68",
  "key7": "2P7gzLnW9ShYMDxqJMXMQBQJvZtK7qmVBETgzgFV68tAmRgNMR35dawhTZiprYK7Embe8gShV5rzKMEH7WXB9QU7",
  "key8": "3KXsswiR1i6RLT5vVXWXtBJgei9c1npqzJ5jLCop3uk5DX6QiZovsHXKLPyDdiAkagTzhMNc6TmwwxJfny2SaF5t",
  "key9": "3EgWi9HaXvtgp9VTCkK31bpEQ6mT5BxVP1mpoetfqfn4D5F9qMXt1y8zm6bwApSYrYPwASabbehVxW1gxKGnadrp",
  "key10": "521YYS5mfyYAFutTvegFjRmtCzEmuHPrWogrkP8TQBMmEnbvAgTRqzSiwfDAs88jtqx2JAewmvJ9ibbdw7jNk6NQ",
  "key11": "hNgCKy9JC3nDpeUFiH4uF9u9sitoSSwRRLfGx2yiJWZkNENpxWM8pefZfrAciDoJi2GXYa6EiazfPncQnFzh3GE",
  "key12": "FM2eprwXB7UhnVyiiEnvxkkhmRDJ7jwRuWAo5X6JXG4F6VqessWDRkVhrZkdcF1uGWD2wNbFG9qWdJCoVKRLKpF",
  "key13": "2dwYFZwF45inEj7FdUVdXoJA1ESLePuHFB4QusHQNK8aiA5PnMw98BC2r5iBALP8xK67bFYWfUbxUPuTFqhNx7Nm",
  "key14": "5PCxdpJzD7eXyhfrEq1HEPVpANVUwwxnzUpk2FNFHvHSorPmjSqHwRSKnLV7MFequcXfGj9nU6QzU9epZZhqeLJJ",
  "key15": "46cUzPn3UPefyfwwqhosMGAYNMVpbGst9KSvFoskcaYiYTrNRMmJ69amcrR6e1H28hfgowmEMWPEvvrZAYs642n5",
  "key16": "2SfMfGDhi7T4HPCHmUSw7D7pshVwELhh9MXg2HLupbpFdV3utgCzv5EHCaZhP4mz2CsKB48fMfFceXX9fTMJnaBU",
  "key17": "4hj2nPbmdscB3SjMhZrbVU8eFMvT3UVwNXiHtSGVYEHj7TgDU3kTNQAo8TrmqdPfT1wf72YSJ3Wge3rDDWgtfFfu",
  "key18": "2DmpT6yir3mozA64iKd9DmWJUChhFCRpU7fAZUrk7hWXAzrJ1asG8QSunvo8U7adUVGgQaH2Gx9EPgsUhQqGeGwv",
  "key19": "2LAbmMTuDSTtVkvYcoFicSwyv9dV4bm4XeFGeZyZkJs2N1nU1MPwhwqvPZezC71iCnWypgrMDBU8ufVYknLqTnyd",
  "key20": "2aEyUEV4AYZ3KXfBFiAuizPhLQjvV3gBzfiZ3AnBgJEsRtkySNagw92qafyLQW3VgM1wuZEhPPM1EkBeDiC1xY2g",
  "key21": "2EF6ozJfgYAa2aobFR4BBAqYnX1ivZCHUk1aLxgFLVxKqMAsgcM8WRjPLsJA4cufuiF8T6LeAx7g4bMLqjvWiXVx",
  "key22": "2KVe9vPd4KfPKeSWP344NUoAzztPNdGuwhbfzT6KXCpzdSbJ98MYq9sbeYfNL1HvNtGm5Rnnt32PxAdVMQGNnHVP",
  "key23": "4B9dLNms7dUVaz2yPGiijDS6iNoRBCoxxPFyA8W9HgrWQywixSiyZ4oJ1quh8wgEgFHGU3kCvHb8X15jjmG4UuCN",
  "key24": "4rvj5b7dPReYu4xvJtyCkYBiRzbzay2nrvtqLptewSbq7QEAJwQzgu2WEedDBJo3aDJ1G4hfPvTP4UfHcyDWGJKZ",
  "key25": "4zC8TM8h8LQ1J5e4hywxmaftjtdyziQv631C1c3HVABmmy12roUPs5BCCdZbwHw2GeCXDPF5MYPfF5Svyoayphfm",
  "key26": "xF8oqCUmZytVLyxG6wziP8nariRwUNejHVUMGq6DGxYJ6hn3wC6V2AL9ykTXxX2zj33DfaXRbmRJ7EFsob35YCm",
  "key27": "5BkkgvAao3AruQetuxnsWy939Pv9Ykq6AueSCwVPkpxS2KpgCXiDbxZNVRmCs89sEPz9EUMdZ5VV59tm1XxgTc2Z",
  "key28": "F2uUHs617gCN5u4Utv799oWAFfVmMMgpQhLGd4BauUFmEBv38cKQXjKpGFKHrpMLr6fGL7AkCV9dEXDTaVxaaA4",
  "key29": "3nNVDNhzucgWJ7zH8ejnW9MnDj6rAYprNrqUxXfxBTDd6b6T7QZ6qyCSjEEsvzMi4s7Tfi23u6SqyxbNWAnDBZ4i",
  "key30": "63r63H5bneeRrhu9BRkQTKs5uFrLuxS6ikuMmd93QXuwbG2pzbRA3ZEMkaidBCXS7i62usFnZRZMCi64iEiqXzdG",
  "key31": "wPjJDTUMi1JFxzbKciZQgjEp4EV8pXdeiSJZA1dNCxhn5XvhvpZuacjuNYAZgwqHoK5dsdLexdNuhK72iMAHyy1",
  "key32": "oyrqPPQvhVoFZsZAFLgsE3CMe79WiEidPLknpvQcvqpxi1w8owwB9pfohEp54cy7yTfYZvLaKTcLXXZ5yjbb6pt",
  "key33": "26VRifdcFATafCSDAsLgTswFC9HaFD978HS1kBiCU6qSQGNUdkPw8mco4o1ubPFn6A1eudk6jmXgHZ952LtZEL4M",
  "key34": "31rKCScKwWNufCjGr1ocyLr6mZ6EoAZSojPLDLCGLRrrcgjD8mgZ8ZVbKtKKzJ8sCL1LZqaH6avV3kP2zx7DvVrE",
  "key35": "uTi5nffknW3Ei3TUpUGPnpegPKh8ExcHRQSNgrXJ12w1zMJwxeuURqQtVWWnUNNxAbJ6mfaHdMDbcr75wQbEVcx",
  "key36": "5Z6GT7UaPWGRcTER7f717pGyadL1UYiePezKnty6LipspvZqDpfNcWHGcJxyKK2oJEFmjsDEpzMe9TMTnKtmt9oJ",
  "key37": "Th3caQYLudFP3RPZKhoNSPwpftB4Wi485btsaGLQRVrNX8FMMUMQqfD7671mDiciYcgz9AgY6DRJmCnsxfDdhA3",
  "key38": "5EmPvbmaR5EqZ2A69ZMB9Fi9BzjB2ZWy9WKKqhfmaKrHZNz9wXMssqVqZoBMzH6yhqRsiYz36Yc8YxufebpZhEjZ",
  "key39": "4D2vRAY4GePQwDE71JC8HzWoUGVRQqASt7DnFLzLTinjGz4kLzhZC6vGqsiX51ZtGWkG7txM37zpHN1EeyoTy36t",
  "key40": "5NdvjNNHgbVmtuUEmXBWb9G6ys49fLLAPYZ5qLdcpsPFyrzUnt4xHnhFJucGUY4i2cHCzZfa8yKD4sPJT6sKz764",
  "key41": "F7XhQsQgLdvypZBV2HTxsLXagpy3Dv6QiECrsB8dtrj3qLABria5gRCkd6GZC6q9WJavG865K2SX7gsw7qPSjWe",
  "key42": "3JXx6cv3htVKwAccm5uj4tCicZCf1QBnNjFzhfwEdpGznuLmYbEVJNquJjE1HuWY16Nq65P1JQmyYDxCSE97aztQ",
  "key43": "Nv7itp5BLuJCqM6yFLzThcjyZCr5GobwCKCGnG2fHUXFMqNvvdtUMMevU5siMqpxw71LvwMvSZYCTm95gsyQ5rm",
  "key44": "57bskTAvpb9fmFo4koJZbYfPTWxFqmJLqLnwS9o2RgZCUsAUuuqXW6xKBANXW4Fw6MLEw2HSkTvtBhmG7zXgYTJK"
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
