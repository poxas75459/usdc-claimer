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
    "2j2KXK6phjpTQwEfnvL8RrzYiZMw7LAjnKc7QLr53oG45ZTQcfRVYYjPsuYLpj4jXFGKtkGbV1bpRYGJe5TeQGRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59X3PjXa3gSdZpRL3QTvtagScq9gg9JaGRauW43Va3Hn5vZ5n884Buj3uvQzumddQLLzTacPwciNrjZgV1ha6Gzp",
  "key1": "ScFh8qPeV28htyuHRQZmbowmpVtAdaZZWU62D2P7csmycQL9uoYccDfbp5D4Tn2E1GChoPRj7Aqs8zfSC36ZxbC",
  "key2": "L2WYfo2pLQQc8GtFEsKhvmCRFqaGgZnyXb1QL1bSSbVWfsgQFw6H4ynSrpFbcxA5v8hx3cuy3S7uPk2dyJ3K4b8",
  "key3": "3rRAL3VfKUXefnF8qt5ch484gN8tAGGXuvSsmFCqqsEgF9WTRkEr6JMvsBAUYoBxN6pAK7bdxE6oRB2dy6pJ3CiG",
  "key4": "4UNPJDeWyb4vBRgBfa9LBScBv1ehbFSLn8jmM8NvZradrHAWx8WvsUpraiCPCcWSRzDcgzCPSVHyJUmyjmydNQA6",
  "key5": "25cXjueDTRSp6jVNNQpx1tW5y24VhwdGunBMWZLSRKjVmbWkyFk4UfWAmFiEbtcKXRzMq18padDqgvzNBTva6MWd",
  "key6": "4MzF252MUFFqBBNJQw6279fxP6hUrDU8BMjemVEnKNmDiRAF9XGFH7W6td71cAWNDyUKH2EDwgouyT1B1t3w9yG9",
  "key7": "3MCuU5oFV4iaPymgrmdnqvi2jMPPZMt5enehqqUsF46MgtcEpZm9LaMpT5G8KkvnY44sUs8pPWpjHXJYrqUUwm6m",
  "key8": "5RrhFTaL8xNSqrGDJEeYMPef1pmUbnwVBACR9z2pQERKZ5Bk66eFgsfKtUhUU4Jx4nzL2ErmX2rnc6x7bNh46QUy",
  "key9": "5NwnwVeoYUUgL75BZwdLgqsAW1whtfG9bzZMXQoPvdw4MpafqvnDsbRFPLiNqx78obt3zqDYuKnnxM6QSb5fBeuE",
  "key10": "67D4aq6dseJU794u5Qkg5dcBDtTt3j7Ud3kfcSGRMDmGu18ebB3XpsCbhyhUzeBsegdDhUuv36jEx2eEG6qApALa",
  "key11": "W7fPDatCZ4NMEtcRi8qxSAcochJ1ESXd4y6WEKsMywKF5EAVbPv9MkCACHVFqgwvpEkxzGgnzhkVCrwyMzJqWLz",
  "key12": "5y6g9iwe7iSS93vWqpKu6wBJUJc95UT1MTe2zeogVMdPQiGGiB88fwwAsHayLrx8zw6G8LksHU7bVqRnhcgz4Rky",
  "key13": "58hEBcK6gojfi1JMehCUmVQjsTW34mibwbgvD7MhJmJyQ2ryYmnM6QqEs3VkpJ53oefFpZ98j2eeWEhbrGtMiiEc",
  "key14": "5UBUnCYUGtE6M9428SLWBS5nPeBG6ESZBRxP7ym82wTQSZ38TQxWy7gZrbaWovDQLD8bMKVy8tkCLByrajcB58iQ",
  "key15": "4ZPRXQmDJPzdoyaJVskpsE9PhZwb7y2u7EXWzHeVoKhXouaCLwbd9orLMx4iTDeqj8DFVNpScB1QFWybcGApMjeL",
  "key16": "4SMYV2JcnFPN1QaganuVfGQYmm3KKEChs2uvvT5j4cm7BtAQFM6PKdYeoPe8xwykJ54uAYadhcjGtRqPaT19XbGs",
  "key17": "2X4yoY5RFbySntkU37RdwFmJXuPUw5G6LPZiWuXdQWm9yCvcQGUfnoz3WB1sjzBwycG981yEX6t7zVD1HZdzucQ",
  "key18": "5LzFfn3XAzuGAdGHD1pVYLw46Lrwqrv6uk4qp5YGaUoGcMJkZ14n3qYbdGidNdUwYpXnjZi1vJn78Vn8VG13u3nv",
  "key19": "eM59Xk4R62aM8VtNFGowChhxWHaiDPjsbSxRUGRGEBKtsztqdqcpCUSF9s1bD3CBRgHCidJ6JN38SZgFqTWcipP",
  "key20": "5AEnhfJCUTcmVwm4Vq7CD1Q2Wx7iYmke6cP2xDLbpHBQzwLyBfa7fAEc4rn6cDHtnutnkUva8etEXZc8r14qLeRF",
  "key21": "Pm8KADFSAi5H1raXbWzpBscrZARQETjmKn7TF8qJe9C9gnocCuPJf8axzwy6SBzWGNTL3PRSEvhDDUTw1kXe51J",
  "key22": "5MbeTSK3tioh96KVgDvzqvQUfst8de1fSjrPzXkPYRYAGp3xnrfFdGhBrM5qV4adg4WpcJ6zxKXvJJL9AcyX4cvN",
  "key23": "3qmG4riY7sP9FwM1NV2xLR27Cgj3Pk2n13x5XJ7ApT8uHn5ZZoJXGEVXhtkizRM7E5ATKp1iDTfxAMkurxNSrF1D",
  "key24": "2Bupuireru7u3tqiHBa9FsJdMtSYnXNaCw5HVFZW1cp4SggH6Ps2mBt2vNzGcMcKBxTUjSz2Z2msh5FVHZwQYBKM",
  "key25": "46yb2XFhQJqaC5PowM9uhbZtUAdE5pEzXiGe8mHMVwt6ypdFNRLqdhAXFeBwNCBGPnPEs6yQtkLsD5tm6RnajUxJ",
  "key26": "4KP3hTPeST2aWcqnWi9rcQMMbV3zE9v8Xabx3cGgNG6wdLofis5i74B9G4bkwumAVhzr5aJkZRdPhAjeVRmBavmx",
  "key27": "4n87NKM4Y9YBAQj2zcvzCDjBSCZjvZnTixF3T575jWSAk4mdk4kaVgNBNELjVBQWp6ZLCWQUKwygnBAUqS842jA2",
  "key28": "pbfe7VLGo9m3LppiFv982eDKrYMQ95f1pN9WkQdwuc5p76Mc2Ai4f6uTfA13NUDDsh2NZJX6t6kmZBdtQRs3PRe",
  "key29": "4rWSUr4VP6YGCW5huJukwLYNAdLKDNPBuPdAkva18qVsSnq6sXg9MQ7ZcpwFnjVjd2sbyvvD9L7NU5LQbk346QXE",
  "key30": "3UsKbUi56Nywg1cW13rmh29ur5QzvtjhZsbbxP5vfdA2pzKsNZaU8m1LAXXfKCnDSXSe2g59geeUFzBjfQxBYJiA",
  "key31": "RH3JcJpkoFqqRCVtmdVi2k7sQRWcY5PSoMxhbHXqboDPVLjJAtsCDXL2sfx7Fbs3LdpqZFTrd9wHVAt65mPQD3f",
  "key32": "3vhec5THxGbYYbG4PL9LE2UKHV6X4oAvrZ9rr1znixtR6bLgQdg8RmdEDHXhfX2qrDmvd9FYi2vtaHsgmWHpfv4M",
  "key33": "5VB3t1TPywMpdFDsi8Moc9EoAwb4pg1BqLeydnpcmx1i1gwiphEg7RBqqGBGBCT3mdG2WtR4PMjsE2M1uc4iVsYz",
  "key34": "3us7oADCwbgaQR9AKH7uJg6jiXYbc8HY3wLaDt4jHXkFPRMF5EVqc8KozkidaP9eoGccuupxmHHXmfsVhBBntSJG",
  "key35": "5CbGQLtjasPueWs767Y3UkRYeVk1L5TN1bQNmDUnfG1Ck7RgpUTk6tWz6rB9Q7NsdNzJAEL3wfoMmnaJdJMN2XW3",
  "key36": "65NYWHjEoRAfsNNZRmm6iPtFFbwtnDVzdviULh3Pf7e6j1HVxFUdAu6VhVn5oKVC5F5sfEt377ssoK2xsc9ZezMD",
  "key37": "5NvuQ26CvH7NgtK53Rb8rK64d4AcZjS4XiVTtMtrvQjKKAQXd6xWABg774Q5mbqXcCRrQvCPtUc5QLoausKVjmgf",
  "key38": "3Ka5MEcP6RYpcJSCZEyNY5GwVVM1KtKaPbhtqJkmFezVTtgQym6kqm2R19YTP2cSr7Zv7N8efSZdHXonhTLEfB88",
  "key39": "5kB5ikHEBDZ8fSXdpxqio8oxPf3zQdeWkrSDeymEsEqVvAMEryVofZ6eTuxNmU89REzdmyqKp3LHfRZ2wM5mczFC",
  "key40": "8L4CTGfzueEiWBjtoy9kAtXJFPCiyFGnLCGh49DyVqMbAuQa4GngFGBUJ5dmLq6NPC3xonakkq6VpxcFXmL9oFr",
  "key41": "4eXJCRgSnEymP79fbf3fpR4kXzfJdSButz5J3pgKjpjx3gc5JwyLZp16vE5bPNx6iihBFyogWvmkG6N9AwFJzYMV",
  "key42": "4KRKa8c2MJrANYvquTxyN6gDiwzTwyxo8HatqTySiMRe8JgtenBZRCQY6rsp9oMQrELbbzWMKYGTme8m4DM5KUfZ",
  "key43": "21iJQYFz1xtNdEJj7rnB57FE3TX1XattQMEQqv3mM7Nt6iGtK2srXay7NctZ9kCMTDFwmMB5XewCZfCvX6mUAQQW",
  "key44": "4hKGFAJ1cb2hKptVuKMTVLvjhGGfSY6G4sUBgsJNoempRTnJvXVSLowHCSZ7DTVUJnCENfEPexmirCZvmCV8KKSK",
  "key45": "2vHHbJJiK8pugns6Xz6GK6oxyt969zEmBv21SSGYb4N1kGWqTTonaKf1ikxsTSnUZf1efYMkbttDtgPyz7LA1P6t",
  "key46": "38Zz4HU7a2HF89GxAGqcUYdpUkSaqUS86VZvi1zCrhLMiisWBCFsjMq73yYj56K6rm9qgTfpa9FPppPjTPWZM9LF",
  "key47": "3MTnNP5hhRE7T3Mz9smHheFPn8WTcZAdHc55Bj57J77ZTfATTS5sg9Sgmy8A4Thjr6Ttw1afdTvF2z7JTHA6Jw1Q",
  "key48": "66b5TQ7iPohXMuC2oa3TB4NSHdaX4BaZkRnaKQszXMSrRGwtWoyvEvx9GMX7opjeHBMMt6WxwxWxSbGwjyNVNqEZ",
  "key49": "SbZbUT1H3bq5zQaZcydpApdsT5j2QXatSUamyy2QcUWQ3f3S6N3GssGTauptZSBs4g6eRW3SLW3iyXeCpNeiUnr"
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
