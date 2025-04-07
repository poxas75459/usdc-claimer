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
    "3robghrYzAsdAjVKfXyanmEFWafoLVit1KhSLuqtqpYqjHvXx3g9HjjNChkc93CSJN727xofPPC1UjM2nntGyrNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHTgK54qmvut2UvD7uCYe7wg5FKj8ykR4WpcBzHAjEoVUkFsmg7Km6CE185onuGAZ6Vt4ETB7emUs2assrmk7ei",
  "key1": "7fgJ1bAovct3tQQgt9cKiDVZn2fgFxiscfBfHtfkeSHS5baTxRUnbsKpimq4feACwhKNG8pmqQ9dHrAvepUzYQo",
  "key2": "45YdaCs3GM5jQYsQjM9MPNMXCchyghwYWQFbtE9LtjL4pw1vDYJcpm6aJRYq8HuM5RVbp3BRxfN7tjG2ALALUGbN",
  "key3": "3c9jKmYkLL66ZfJRzcKhrAF3b7xtrhzCxKzxLMcrDazoeQjXzN25dFEQWDCb76xBeMB7VgLwQg3Djww9RibMobGY",
  "key4": "32Yo65ZpctqYRGFVqEpZbmkciN6Q7bZ2vQzkMDyRxbZzMWfBmHd1Ra4mewNXbSEVVYrQTB8imNCzJPa6aUane3gp",
  "key5": "4tQT3qWbVusHvvJq4Tr4eX9DY2rTR3J9KG6sS1kxzhSWvTEzJMiobuXU43EzsmbMrUWpm4nLjiji94ziDDEYgVnj",
  "key6": "4FZx7aBchm315H5pX46AHTyKsneKEKi24ajgFN7dT3kQTNctFhmz8d7AeWUJV51qPKwJD2khBM3gsWxVc8BKkqYG",
  "key7": "4pg1d47F51mf612N4TYhcurcZoHvJdPTm2geGqxrLUC4S6hLoenBFFhJdARYiwGeYd5sRoVhbVopzQUJKyQAv4Qr",
  "key8": "XWeC5PKzNq45iRAnJJgRBHHqfMFCUwV6VHJ8dhmBypdkmfyxU5nNiGshy1z7uD7q7yc1iwWcX2cKjaLHiFaaGZx",
  "key9": "58FpXFCcViCFJ2P1fvduiUkF9LqLnQ9LPxzL7qCc6xJ7qMtVhzHBBAyEWRDzrBQmpAPWLTubo4kZYYW4YtuynZtH",
  "key10": "4kXQcW7EwBJ5BaPiTW8FBP1F88qsEBam5QSreWNpvPsDWgfc6JKxk1jd8j2JaXrZMS8iTBp3XeCfEaLWRubzKn9P",
  "key11": "4D1gFV6BwZTX6wuzgH1kfyLjopnXS612JGi8iuLPfME4Cs1cBFi888CyLXC9FuboDZ4A8FNFv8eQPQdKfu2c8BkU",
  "key12": "5iPugitXeJQ2A9dTtKAdr1Ra4EQqstHZ3PjumR1yU5w7Uw5faGnSngF8NJJbkttXfkkCWpo93KFHGmqnchbKn69x",
  "key13": "2agDuU53chMsaNpyc8a6i4cPWZks1Mp8Nj4ATbEqXgafdzZYwpAs312NXXcgEHYqW4kgF6XMTkea7fycqnWgGToS",
  "key14": "2sU3Qt7jXmVufLEhHgyzeTFvvQnvacThM3hLuXDngTm15czsfDMBKHYPxVdZp8y4JPAKHjM3Ctg2rKjJczL48gj8",
  "key15": "3UoEEUu62rnGUSbyFsMwVY5r2LniAx8s4gfZPoMuFMQJdVtTk81afdcYihoWaRKonhx3XBkNis33EF4PdS1UCuMz",
  "key16": "2rAsAQdeUcusYUwfpQ9Nvw9popLYVuESoE272183vGSGJ6aViMBgoFzmbqxR32XcoVU3xq4RPa8w3RnzpzcmopvM",
  "key17": "A6D1Fv2mP7VF2PbHJfYBUywGFs5gyvshiPo6cZYdiY3WNLFX7jjC84VH1ZjQGkcNKbcfLEqoVZFPWgfsViVV44Y",
  "key18": "3sk2aBh1jjSTSK8t4Rdbr5PaTbh6YQeWHZoN47EAAaYhdiavmUSntEUr5NQ2VxUTURS9t4ajCzAxgAABefLPbBXU",
  "key19": "FmrTj3cjvs1DX9ZHxQKyPCBDeZ2t97uaTSifpsspyGQ2qhPBVe1gBSYyzvQeqW18a2HojTSbXhov3ij4jm3cLjV",
  "key20": "4JgW4dmvyadZmD5VVD2cULbu7QL7z821MfsSEkV7BpAy3K4VMsrKYaa615HLR3Pa3bX9XKag788yBFtKbtb5mcC3",
  "key21": "2RwW6ujD2aqz562ZZvkEPaMJ1x6xpoPz3efdRgpWPgcUjHjSQEgkzo3L8zozW4Z2NPbGoWVAdgqG1urKXFsCTERj",
  "key22": "2pPdyPCYfNxJDtoTf1ZgZicgNs5FvNGmixzcULPLWG9CFy1q7e2pyKiNYZftYUBmNadwSXtT2RFNv8HJMGS2w2CU",
  "key23": "2pLVoQgpPTTrwPpmYUWcbJxovkTbsrfFUQKiyK38foApVuQwqZFi9hGYq7vXdzp1JjGD1zfVgiwTAXeLKmr3paPb",
  "key24": "5sE47PXvqtQR8jNhk7yKfTtpHoSxQbZLnUaacdEUHFJioHNNzGNEP2kqEGPnf8M1RCB2BaTjWF7cQdLn8afzV6Ak",
  "key25": "5BiFEUCdVQ88SLtBPpaGxv9XoSZVvv6Uf75UqCNFe9Xvt58CdpPMxvWvHuFCYjf3J8uoHjYhkpct9PRwND42mTGU",
  "key26": "4CbBzSuYwprfnyvyrBj1c87EXrRMcgSJi5P3WytwLUTujQuzKFQek8ykXGDi5cQ5KYVVEawQnGoGgCzn1WEYvgjo",
  "key27": "5X5R7v6tjepTRWdPFoCkxVcQyzCouVY9Tq6XYgh3HvbqNd9euqpuYSAVDB7RfTaa26GjNtiAv97CWEBdV7aYfKF9",
  "key28": "4JGA2UCH79avX3omdRsnybJxLmYfTfmqqjHwMWG73RkrxqVc4hSZgSRmHHwJcGcX5PQa7yRrzK8YbHbcU4doDWiF",
  "key29": "4B16FAoAZuVaUWXAXWxSLB5EHBkzmkZtgYWHDHZd2VvDenNU6KeDU3HV1XmKq6GiqHYP4XGeFYkSHqsPdvnaQKzb",
  "key30": "2jRTTywihxNDirZMKpp122J4HMLiccqEmM1JhAudjCpmep2CWG2WenwXfCuDQpZaY5SQ5hki7VFfaVLXefztmdcC",
  "key31": "32BpxcpPVfsdutkXYJ6aqUR1Hus3brYJWQdi8ddDE7w7oezJJ9vBV51MfhkdSayTCCJkYHBKhM2YRmJrtbhgQPGz",
  "key32": "r2rh3BN7TugcaPg8GeYveEF6aUxNbFrE8ZYsgxCYxBEYUgJuvJFMUsAFfRqN1acbVQMvosUbV8HvtjSLheRCuv8",
  "key33": "3hcGcfffEf2iEX3hMHpBPaZnEZfR35ckeR1rc8nSf1siDG7pbHNPR1DjFtSggyD57yWMapPjCCCi2EAz7iPzaRvy",
  "key34": "4AVvggdGi1asxWLtWLK2GuomtUb5kcPYMhmT5fWvH6UqpfheRu6jq8WEeM9ZL5BZ3q3KyXt7nLzDZt7Lb3zz6VBZ",
  "key35": "2CbQR9ySiLYknEze3riBrFH6LdcZojupFs5yGsbua32U9mvSxCDmZ6dcpwWz8WJjMuQoTmu2nxtNk9Rcb3eSn1ep",
  "key36": "4AfNEFQrrTBP5qkxdvU3jAwCDnUX7bpmja5hc2hANuGpmQs2TyDYy776WhZccduMGscqnSjo3h56v7DrbG4xtAzz",
  "key37": "3dZEXMt3HP9gSFyBYe464A5YtkDkkaE5758LLXCJF9Fe2fg18Yc6vdyMBah2bjgBfkLCNbBqi7u6gmuazojW5CKb"
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
