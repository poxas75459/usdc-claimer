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
    "2GpKJBVP1MzvRyPvZz9tjEgRPrZgfmSj4sbBQh54QQ1qD2XzY8G4PapnkkwYqtUyYzth1teYMKCGic7VX7ttPiiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NUiq3oQDx1odyaaVvVsNZ1PbNJKKoCp29GEf4ZLuyBmrAr4knVvSfSGBHJFcbj6kn4YPAeUKPTr5EXdRLaNQcx",
  "key1": "5BEqmDwGAJ8tg9yKwb1CrJL5GHeRdHWHYH99vQJvDdsW1UDPfofqUy5YtwZmg81XYaHE189a6qZcGQVkbRfrdYgB",
  "key2": "2GBJd58SPgYtVLVdYp9BUNMRrMcccoqUdvt6xmwdL8aHQRZNGKxAEYiskh8d4bhLYTnSF6dSbVa8qN6zGYnj6Qix",
  "key3": "3QCkMdsWQoCgxDMMGg7YxQZBTGBh5tL6f3DXMcVzsLdzovcJZ5tVzYzasg9e8v3WfKrJB7Hg5z9saRUsbvNCpBQD",
  "key4": "516xMBWDsJffgR99S3kaEqrc4dqLUDRYbYtaN7iNCFQYaFpdh7HFinsH7CCLkbfAG9qiJdnECDRWbv8BMvgdEFqQ",
  "key5": "3MwjMVsVSw7fCnkNL6FJ9BPurW21oDbVehozZbvih7jA8icQ6FQreQX8KRCugoGj68utt8fY7yBkixKG64zqt9TK",
  "key6": "Uz26qdAHVyGmqPSHusK61pNk6kCWM3FNi2cmrUjLkWALKV18yX35n6xi9pMmQvEoejpiZ9MoprRqn6LdyMt9mGo",
  "key7": "2KWsTibs8Burzy7DRK4r4v4qAWMxQKyzA8QxThhXpjyom611y62DveYEC3wA6BYbUtyBjweVk74xRhJmYC12P8kQ",
  "key8": "36XsDa67CS7aqeNqVCVU6wCva2o63jsSrzck9nFm1pfXZ6pXFNJtgjFhjyBQJJhLe97VP45kTQGwqfKUC9VXDSNi",
  "key9": "3pFLssT5VThSvCvNC7U5JdHzVyDmwf8NtApYXfuV5E3ntoPAZ4k6g4bYri3CPsQ5MEQirkF73FtnRAgeUsT8fAix",
  "key10": "273aE4UjwaM94qD3KBY2zqvuroKPUE6MYA9vXKtZSz1UtDqBadBbSpwaeDGB2sWajsDBL8gR553LeBNBfpbL8iVp",
  "key11": "3WiNTsRdghNDo3cMWWQFszArJ9Gc7Regvs8gJa1jzq1bUgXc8dTrE8gAWqEuTKRBLoVdSnpMBdVsvN6z3rNzZbUJ",
  "key12": "5TycVxNq7vbQ5i1TReW22Hiomyv42mKWVRbmYxMkz5uBMdW4PcnL98VW3qpekZhB12wSid15mkensjB8DUjh1Jeu",
  "key13": "2HpTVgFuzAUGd5SPswBGWKA3ShXWBaF53tgyLkM5prQLBJ6m1UQFXwL1HgpuD98ko21rj9AwqXajxbbCDdfP8YFD",
  "key14": "bV2yCGbMdwXJfwkNSMiHfUqEgS4SXUbSChUR9m6FCJcKQqh4mvxv4eb448SzvpDra9DLMMuDYK6JxGPCLXrK536",
  "key15": "7Znytk1syUDhgmGHWRQQxizjahkuM8HN8BsdtkzVTUXumCJXdAjuTbAWDApbLMJ7QN7q5vXTqEZR4MbnFMKBr2M",
  "key16": "35EcHF8fVPKkibNqYQ5QKjeFuTxfmYdk8m1jVFpnMo5sF8nyB9v6MiqupEt25jsAiigd1T4uyoADo24DHaqn2Niz",
  "key17": "5kZKjZS32epZGxQVMxTavo1D13Lx85yp1RScdLzFfdpyHHm2RjqcXxpfXg9AojUCa1wSwMCMG7NGWjmkgALpc9g8",
  "key18": "2qKP1HtvXdSvUMwvALfZKjhph13qQWNdpXoFgk7yEGn52vB6ifz7sZZ93crpcQPeXxvPPHHrp45uu73GdT8DUyTy",
  "key19": "aN4tLZ5GPvJE9pVyvxePdwJHkiVmYsZ7Aj6LtAregi5ZLxsfFM69tYB63xxoWmWRWGXXVPVd1Evj2MnV6VQ3Qbe",
  "key20": "2edCamxcyXrC7k3aCd449o6yJR1XjQpScEki9JkyunXtscKJhjJzBXU8ARe8tVLtUjcDM7shXSUNW9yU57mbV1CN",
  "key21": "2VCcvMCeHjfYgbzMUzE2HR84e5Votv6gjUpxgiN9PYKxDsKwXcFhJvACuWaja5fVxWxH2Sw1KpeybN61WarB2wXY",
  "key22": "3VbmiocNd33AP627YwTfaADkPJDHoymiZujVNgFUR68f86mhYeJzrLeTTjP9maDwPxFyS7QcVevhH9e7cSDft4aJ",
  "key23": "4wbaGDh5L9ygN637GTB9iZ9K1gs7SSTASpzc7TZAVdeCTSD4FaQs3yCbJn3eBvpkj8H3tyiPYs1Qey7hskyEA1sT",
  "key24": "2EaixaXm5gTs4vW2nqm36PEFx2hh5Ew7optZ86bcmi71pKwqAG3sKMpcWdWkaDybSTZpg9S3EJZewwqd5RfuQzg8",
  "key25": "3BaCMpBka6EWK5nSPk8PWUQHFLATgEfKznAuACnLjGrcwAfddKNoKqpMu7ph4ipAiAVnnxzM5ffjbEaLq1CbQ9n3",
  "key26": "2EwpVrNz5c2s4N93UzUzcvfbnGW3M3wrdZLoCucmDaG4icd7PZR3UYu93bJSG6o47Yec51jVjTfMK2am4F2LVQd5",
  "key27": "2ZFEE6Q2cgvDtB6CQWMGPVx4gqCcZa9MZvuDzhicHbCWxvKFZWPeA7ZziATpERvNCNMoCq7yhzohJRwKNHrK4Fqt",
  "key28": "wDdUpGobmy2fRCm4ncSMo56HevBzQQprCVLXCtUyDAWBHqPfpVKBM1k6JyLde6iXxMNbzMhixfvFe8KtzVKRwNk",
  "key29": "5So8TmRpTmE1JkMAQLyeR7JZCEmF3VvjTKaw4XhzopfHiWDLgccN25tqMCUQL4tgsQSv5sWcNAyQtU5FYxSBZaqq",
  "key30": "5VqWs7f3SepiGWBdDthEnftde8EBHRBjHX5cks9VeNZDsASDSZK2eQNWT6oGbvzSJDHgbuVoDaMNPyBStePRfpEZ",
  "key31": "3zD6y1JwjDfKs6ueovnFSoKxscyXMx6QpdarvUKUP5G53vSinvy7ceMbhjJSYGKU7FuZUZq8BMo6MKrki1yjmQX4",
  "key32": "4SPC5TpiTjMBNabn8KZMLjttJNNu9Wd9DJjrxcJP5Pk1k1UA6co6DNYnma9XE34739KXq7Qcy4Nywm4wSi9fs5K7",
  "key33": "5epuJgdNCTVJ4ibnFLBd5ddXEcy4C5WZGbAFjhVM1Ds5QPpiN2ttnZCMy8ahfgzf6tbnJzrXf4mzCB6bURrVRmh2",
  "key34": "2TYZHPWaHaBYNnkimQ4mgQf8FvhoANyDgX5Vs3ovRA4N8WY2Ve1N9hfEnRRtMZJmt7GapRQUz195x6C2dDyb2imL",
  "key35": "Jj1kM1dgBx4qxgYMyExWPptVBrVzof7T1DxZw2h94GDC1TeNg9orBKp9kGPLhSCcg1m9nv9VGsb2AqkcaEpoxwm",
  "key36": "2kffETmv4mhcxo6MsLPizLBHn56p93t4DNFEkn8kPSxrYwKzjtnUuhHKkKryqveDmAJTcD5fpbnrMS2prwZ8fmzN",
  "key37": "2ReCq2DXUZRRWExqQ3353MEySyobKY4muRDU4QFTu1i8bua6o5X54YjBPN6NcdnxpqciU39tLnvxtj4R5f4ceYwK",
  "key38": "3AR2p2k95NN6kvpamKPmP6Y9U9eug5upJpBbwn3Z8pwr5rS1m8fdT26CZ6PWaKFYYmGKQWjUiG1rHFXvrvcP69q5",
  "key39": "5dLTU2khDcfoQyJZtFJjTgvVvQiUUUKz2BJTnHGSTM763qKQErNdfrx7WS1taiFg7cm68cbeNxgrP82d658R5W22",
  "key40": "4sbw1HbM1CjmtTWSAn8tJLVzSDxBnZMj48HSgomJenxSt3qdx3hSnDtaCLBbUD77XmPrnAR5NADV7SdVvqYgMAy",
  "key41": "36W7H2bf7jLRWrPjZsuk2wboFLpDtsysbHkRdgBJAcDNMBKnCnKhozcFxNXsLaVYgzvVhranKag1EU9sMVVnzUEG",
  "key42": "zt3UjV5U58cjmaM26rfdcgRLGqPb6oGxHM4fmpR5X7hdhzmxPbhcURtz7ULAwgkEbPxyGNgaDPZcZN1k9SNcSUr",
  "key43": "4yCCvJG4Yi5bprciqrT5ZoGRS15hUnM1abTPAogJhsANqboLTwpoxAo7iXUAkUW7iR56xvVBnhjpLAFcqkaHKfFG"
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
