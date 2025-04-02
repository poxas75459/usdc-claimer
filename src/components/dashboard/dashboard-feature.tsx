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
    "4TkV5ss6UrZ7RmRFQ3pjhqjmaCYnTJnCepczXDVo4MQ29mabCdcSoXpMKRZFjMqgUaJpixf1JNt46akH3NhTyzkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TspWsAH7c4JCDeRGnPmZsmzx7W55sj2dJfMTReWseoEkTFJAyv3ZPXnFq61LRaasrxynw5ujf676MsScnEJrijf",
  "key1": "2buLyhSAiRMjBxLiYNT6GzkywYo1jEEh4MpHgcuSckpjH2nauT7RzDTo8Ui3DRaKA4YvaWivYZXFLx6GydWYQo93",
  "key2": "3mBbVvJ2C8uWQGjucZStbukycZYgNXuWoMMs1nXdUfUgiaRSaruq1Kjzn8Ba5F8tjRR8gGjHoxoVJEzt7oJ61NJs",
  "key3": "5j757jAM3o3EM6zzvgSF2Lq9uFTc6XKRueCC4TSvVahomabGNggswMMAyGBJ9Ez3ED1JUntjaqiSRa5rXJNAcypS",
  "key4": "391c7J53Jq7MnNbiohBHep96js5WSEJqRt4Q8FzqX49iYSpt4cWny425T2jPitMrgYdncHBfQozTMv5LtahTXZmH",
  "key5": "bYKqFJMujXFsWojfnwrjeUYPWW7dGGQMdrhhsqooicDuZp7MsBhkKSq9t4cwW7zxB7fovqZpTbxc3JoYFsJWZDv",
  "key6": "4Y45bNnGsndEhxBdenvbReGqhgJEuJhazPAobjo8Pzb9tRrMPSKeEj9ZLmY3ywKZ4FRk9yFwN2HrvxXUQirWUFZi",
  "key7": "3yDCVAp8c5RzoBsSBxxBfVZ9KrFt5NfykTrFoptvi2nPvSz9QpoJSS9jocxVDNk9z8MtaXBRVhjkERto8mL3SRQX",
  "key8": "3BHCJkCdZ4f2HtKrtd3kv2CqRmBr4f4hS1zMoZ959sVD2iStM1ojG8TNGq1w4GcwgoFfRgJ4F7qGRfuL336S8Qzq",
  "key9": "3nV3LAvkr2jT9RgVxLKuD2DjA4GjTiP2sMaXe9Qae767QY7kyphpSLX1AWBhgTqmBSMXgFRLqZS1vKK42JD7CUnH",
  "key10": "5L1zCogYjHTYsehssUJ6cL9QNwvxvWLx4hbCVHbiXA4KfJSRfn3xNuudBh7dDXUrHFuLnXEZCwUuMtUy13ULFEkF",
  "key11": "5erbzyqVr7TmEYEcMBKP7UdADhZSv9HPhSkBQJH3nLRZkq8N32YJhgEidXbWz61vyz4rxheP9dX9k5fAdhJumQ9Z",
  "key12": "M7LkJoCgXMUgBHv6kx3cFrYvWwhPFmwwdWU1iD82LtGca5trMGmgRA6SVaikjU6fBfBMxvnenaLhvuLzzn7ezi3",
  "key13": "3Uv4UxVZa5WFUynoqNZp6LkThW5TVSAfqdHFVL2trgqMa3YWSAhEo5TamTs8DL8PBaQBSFhsGtm8LkkCwKfGqvfm",
  "key14": "2Ss3de3P5FUKsU96XouQc88kRugV7cAvhFmyubCmsJDa5UejeSBNivD7FAKSb8dbJMdVr1KRRd5ztsNM7FuMoZyb",
  "key15": "5gxkVUtXDqMPPv24xQW3t6xixsim9MrqiMw2qxzq4ThxqMbDCdrcS6sTHZsoRWe88Z8mYzzMq7m6eRPhbgXEmgtH",
  "key16": "2aQtbr6HeQEo3mzWgDCUjnnyhf2kBcfhdEi5uPsiiPxRstVBfBK22rH6Hzbokb8Bh9PxCYxiZLwEq1WX5zPj2Rpj",
  "key17": "5ncfsGqrPjPPfNDjDGzcmfMtsqjRMp6S5yRnqo6MC64RunLRPHcwPPhV8mciHbQ6WfJvnPxfMFYsNghrbd9CSsqk",
  "key18": "2VGehhfeScxK2v5j2RNCx2eQBUEMjZtYEURCDWeFowxra7w7iWwqWCUq52LAC2NC7E1R4XoNZ3PenigKEZbDY6Rw",
  "key19": "2segkfRbdbBDS6MymNbxX6nJHAEx8aCVrkJFg8vdcunPnp451bZ5E9kmmXtKdvsKRSSQXoEhFKVMXiaqvEwjF7iz",
  "key20": "2v42M4ebS32BQeNdXEz8mzRvB56k6KrQqVxgYPyZhHXLAhnCVHZbbLSXkBPhRySeyyDUDeoZQ4Q7GRLsoYQHHTKx",
  "key21": "3FywVBscZ7yBzpTpPZz6nSTV9zrnKBaEFeQ4P8aydEDXvLqAGrurZTMkaqYkYW3ac6wtp6SH1pjsi7JRHhMSq4e1",
  "key22": "4uQ31tuRzAmTVzRFprom5NrPhrRLexogprFL3D1Dxut7ijnwmq672h94QAb25iQkKMhoxxujvLsMNZjQphq7aro3",
  "key23": "29H29jMnB84W3L3DH9CyVkaFidRkV7rXbMNRMwVXvZ5ewVHVo1Z82E2HnvmubrCGJ2r4QkmXNZTERJeqpaLQknsc",
  "key24": "54owAhPsAtbq4FN9Dew5xacPWhr5ZxgzrgFiEGZchEidR1NLWrT7nF9wFtbBfC4pWQ5y8a82gWk9izww6NzRCN2m",
  "key25": "Thmn3jhqKW6SvgKdEUTsNgEDdyCBj278EgYygPctVhQyuLZc7Lu42nUYmnZSu5VEitBcTqGpyCSjkHBCJhKhkuE",
  "key26": "65DRxSVedt7zu4Eq72iKxQsKxmUBfqzg24PkBFficnEWM4TzMzrsz73igiyHEk9bdiQWzdafteQHUmNC6HedAz3W",
  "key27": "4pZixz7D2G4NetSfo3cVSSwc8zHtYaWkaMnQDRex3qBx4n9XAvZUJdp6Nb9QcCq9HavUFW93XatwFyTqPEJ93PN5",
  "key28": "4vpAPe7YbLgkk3QBcZWMtTrD3WG4s6DfKRtL1SLxdfBv76XekwYG1SZcQBNZWVWxcX36gbTtKKomxNq3qoHEikhS",
  "key29": "3s9tY5pLhDwi2Vu1bXzhqs4ET3NrCtmmaDU9DEF8Cuq4PK6QVf5EipT2CTyZq25dFBqEFyYTxMEtkcLk7w88AeDZ",
  "key30": "5yvYgTYgurgdYCX2hawzLwdYDxSWZRfLcCRxGXJH1Rcmf6a1mTY9ttFpDb3NBgVKbEtnhVwieoq6Uh7zWHD9kaRB",
  "key31": "3hSrYWaRLk1pfLSz8vGBCJJYv488wHt1nwLXcwcFXeW1JQrfVCnhJcU9HdA1M2kk8JkC5ZZDpmuDT2eT6MAsS6Kt",
  "key32": "56nF9u6N8d5gQva6uYKaTAeGuDYJT7MBbUAmgkcRL5zRdohgSokseb7wnD3vovwGnYbMEFHxHgJXp1qfvWAjJUkD",
  "key33": "2k7dD6W3JeyyuawqzkudFK6aL3RWu9eqHesWWbRcQPNaZVwoR3EqjVR6bpBMVvELyjnnrit3Ma7JkxDDSGR1MTAu",
  "key34": "3DME1aFqkt3BXr2W1k2sBmwbT3qeiXXKQPMZpA8s964odLCiCjEitfTfW32YukjNu4Kjcf5C6jF752cUGqaTUSi6",
  "key35": "5oRs5NJdY2jeg7P89NUT2MYmnqVuetLEbQnWHsVgkYaLhMytCfFm36ZoF9DYmSp7XQ9rFfsTskLWz8izzHRjoBZP",
  "key36": "2BN6Ug2BuTUcS84V537KahxKnUFNh16cJdcmnqehJhVgtqpFLah6cv8PY3wpe4WLVrTRDMy82QMTd1M1JiWXbxtW",
  "key37": "8K1hi7tH2i31DbnCHVQswkMj587MCGnv2YhdndMso8WvwkkXUbA77fMGw2LcFA9jySJoMTmv4goQwaS14xLsRze",
  "key38": "5Uf1rbfagEKNF9vzCJ7u1vgswsW46soEJdMpNgJSvWwciuRSGM8UtZqJkT3oYEscsci65h7SmV4XUU38GeFPdWdu"
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
