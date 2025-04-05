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
    "4KrSu7hmXjScEM2grsm5SRhW3CPP37Bv4d2Rq1JdVgCTriVeXfYRBgSzZL9f56V1NLJ8rcs5H7i1DMjemt4vT4jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXFojktTxLTY5QA8DWoPmCZKFtdrGrxbjK2sz48S8sTcHaC8ReLeGDZYz1Zt7RPRKco9LixcYRAMm34w5QKiYKF",
  "key1": "65NNSSE9KZZvKWQDtxui7Qve5MWe5m2XvuvUp6JqyUtBpnTQi23os6LyefmQjKEW5Xn8zxEdEvhQvRCu3YJ7ArXC",
  "key2": "Tp1dQNJJxgTvCruXk5cfZu7uS8fgf3DKUKpCGM2oy1hNbUsjGbF2ncnXQDsVhsgpgWEsJa2oHXnGCHYGARbg5Gy",
  "key3": "3qnTFfjKrBHLA71AaR6QYmNkR69F4TwPVrWaocutGFduqhhoXEWxspWGRt8JR518LiEdK4owWtqqzMZGtmdSA3eN",
  "key4": "5XJRjiw2DPz9NYvkCAr88vG4MHUbZELS7ApQtsv9Dap73Cs4rKjxxF3zQWgxqKx7WWCTZrGEWoSiN8ciUxJGkgs3",
  "key5": "evgPq7HqpuTFhVQAa8apTMBE4jB8KMsdfCNrXpMcKHhdBTFbTUdtQxYu68R1LJZ67NJA6bQNLVrYx3LhfGYgnEy",
  "key6": "3tTRbg34RFC7271JiTD5eacuBqFYcoN4txeQeD3xtGrHCi4BJTatsz8RDfpymc7Dh3mUbrMSFs5d4W9EGQMAKuTE",
  "key7": "VS1UdbfKqPke7gQR5GARaTyRYaCELTgCcF53i43sNJDvGnA3o5KXecCdDhAxdhdHP6pYgGc8fEgKWVFtVbXhL19",
  "key8": "5YyNHJXQ7218C5wjwgrXR2YyoZd78KKMhbf5ANrQfbHewuQpqs629domXAtAGbLp6MLjGb3XqEF4h5VZioVWVnQ2",
  "key9": "TnAcJyNeihbkTAr5mBD4tHLqEhrp7FpavM2SHry6mV2J9Xyu2N5XFzAX56hYWCbE8iBUfUgTHkrdMRKa6HAa9CU",
  "key10": "51QP84t1LzAyrb22HC1uc2QmsvQSHaPUuB1A9w1MhrhWKNWzn3uY6taWwWKMRRH8EYRetMom8wmFx4fdQHZmx7oQ",
  "key11": "3q9NmzT3TWm79PhDdWLoe6oKy1rKhCtmgdWANQvXB65r6rn2r6CX5DjT2K6XbBtECiBCVFRxHYy1ikiFAHZvP47d",
  "key12": "4fdZqDGVkFvYe5pooqPfonQdcnVCbdQY2nNL5KbY93rX4GCYV86kuABrFGJm8j9cmCxrkcDCGu4any2M6QsBrCvs",
  "key13": "5iCcsMaLQqATTXFarXDQYyyo8yF6gF2MCKYuK4XChFxp279nEP3Ct3PnH7ymsMrv9KLAsXZsG8KACvBduwwKvjjG",
  "key14": "3AMBxSq8T68Qxg9dVtLi3oGdvuVBhaV5uBHSSUxcMoumT1mSdAMNNnrk96ugkrUiDEBj9GaC6GHZg5iH5EAcNSib",
  "key15": "PLkWMCEMD1LpA8Nnh9CNFFhYj3DqmgR41drEDTHNbwpcwv7qZKqdAqtawvNCJo54Ptd4NU1ndXAdrr1iufs6qD7",
  "key16": "3E7pJDB2WwWwjGQR23qaYtjrZMmcDS9MqHm2LC9rYMf7fG1QA2hHLC3BEWhrmk8uCR5XjQj8c7yLEsKPq9Fp4QFi",
  "key17": "2pMyj59T53NwcpexhhRgAgvT88HxpsX3d24hTe8YKjoRgjQys7TkAYqYUBpuckYwdkRkbeFCoKw1HEywY5TKJudi",
  "key18": "pZtkVC4QB1ptWvuq9JrrhmFWRX5JRfiBGEQhgnYirdbH2MoTQBpXVvQdC442UotDa3KgBRSiwqu24BkztgdbfF2",
  "key19": "2RaxAn3ra5yknFtWjrFHvZEpqgqepDaTrpn9A6mdJmqUsQTGV6uyccQ5YR5ycbzmTBejhbhaSwqBPBpJMKszH8r4",
  "key20": "5UFUk4k1ZsJJHd37vaxddRF2FwMfjeJZfPTZcErD3TaQM6JiMc6gKMNiLzXLx8PKurqV6KbzdGfLHcqwDHnpGC3F",
  "key21": "2t8A191G2FtQ2Vscq5EJivMDk8p2Vk32HgyZxPV1a7nGK6fxPgF9upkJJmaLpZutyCbMiLz4HH15HKHnSrWWd2tH",
  "key22": "3EpELUkRhPzfTcKbzvG1Vsa4P8jAJKwqL5UriqQkbghe9ZsNRPeHqmVXasUBe1mqAgjhuNRss25whfqnHawWtaGB",
  "key23": "5mgv5cL69RMrDGWHA4XVigqTk9WUadxGNii54mD8RUpJEso3BQgGXdm6AJDqzCZvX3ezezTDPtyB8jtdVeXWTdNm",
  "key24": "5YQfg9EwPLiTf6ujfdRpJ5NRgTR9cFTk6ABEkWTpikYSHCHF2fP6YRakrPkhbK5VAooEkQrh7A6j1WqqqjyZTtM6",
  "key25": "3DkE6UGNrXkr8HkJCN6mRY8xvkgAwj4yXWd9BMiQQ3SuqENzUyJPX9jWGfGYatATiHepbuMDmm1ferHUfSdPYMP5",
  "key26": "3YtsrnGRyUiFiEkkpxjUtDxcCRrV9JZpsUVybFqMnJUy4x7jMSHtNBsCatxTQeSaRwTbFSTi6qiXvtJmXZNtoMtP",
  "key27": "4bdEbzJyiBjEgV4eD8e9bNU6xCD5DZtojTq2M5ADkZr2uj2SB1Um8MNyEGyAhyJKTfvuxrK43XozSbmEVjD4dcX9",
  "key28": "3SAqYoS4MWYwifiSmdgQPsgC7deY3qXN92Syz8wotUxZw3ZvXPmEXYPdhtbPQU3LpVmNHSspC4bSjmFmk3xBFsZD",
  "key29": "4cq4Msv4mLSGm7KNKfegVNn5sB3GRyTWgJ6KrSoW4Hq8FtPrWKTCHfnB6JRJonY74gfXT4XqVXqE4ydN3umBk9Ko",
  "key30": "S374nxVau3vjqr7X2JxwTX2uaRrh7pJAG7A1NwXdEzfeuZnYMJBc6at6WbCdFRoiQVbXKkSevRd2FRpHGgyJuyF",
  "key31": "2tV6kL6p3npJYdU4BDBR2NomxtCvpAYPM4eNJ859a2jnLZP2vWvq15tcmBnQsm2WrYLsSjLBKsyAprjfjE4oUpPs",
  "key32": "3BeHPKpFDifPauTRGwPEEdhW32K8Qqa6W7ka7cweYoFaiLJjiyKfcbPUveaj8A95L2VP2X8MuUUan6aXgj8CUzyp",
  "key33": "57hvCi6PdKUu14DndS1zNiTxuqeRZDmHxZBbmirXxiHpP4VQuTW8GjJ2JNCVPpAt7sQBTxNGVDjzFL1sDkpXTp5M",
  "key34": "3AJDu33Xv9F7o7k7rN9y94nHpyU5HWB8xSDUwD6FM3jBb3auLVSKmhfAt8qeqxqCUtsrr8u5XTyLecnhFVTB6Htz",
  "key35": "JS7qm47CZ9dMstqUhGhmmZiZpaVyHdLrKFJfpHLTwpMphymX2X9vXbAhxJ2SDuf8BL7zWjQF39mmhbn6K934A1b",
  "key36": "5643UaqJ9Mqp7q1Rq4KTgQMWR7MjSsx1rRF3sguA8iwB8cF1rfWbmWhpmiDK6vzvmb4pGupLPGYykqSd3pwttMqz",
  "key37": "2cwQJezBBMhWErAwsAdzUEYSuvoWa8jiuQWu2AcDGZkTzyxk3xeDvYXM3URNk65Rz19hTsesUz8Q4R84enkKKFta",
  "key38": "2iPvT1am8DFvz2989yDcsyV357BCU1Hom1SqDR6mmke5LLti6ARzNqPQ3cybg1qBaY8JeAxhKXCLua7weZk64jok",
  "key39": "5EZtiY6Bxxtz8tXmV5oxaA8moPf5bun2Tr5D5Jz8JtSM7udrBePApARfWb3pnXWDxEyje2uu4Hk8F3MD31CBZtCv",
  "key40": "4Lo6sTRrMXak8iUNoKx3irSC8kxi8FSCg9iD8V8iKkp3C8U2CFg2cov7W5cXNWqWdJgQEYBtjH9RfdA6LGJVaJ8x",
  "key41": "5sA5CYCCPufeudVz7gZior5zoH3xegH7PGRZg2anVALtg7eYKXMFkmsAjbjXcSfjRnYUVXkNgMnp5vh8pLBa4eKD",
  "key42": "56aJPiaayXTvdh3uoUXDnHpLZydGpNNAUR1d4XmkmhmPDeqENs7YJwHrG4P4d4q1eKz9rzuK3qCZwv9FqsQLjQg5",
  "key43": "3LqUChzJaUh5SBtuGV37pkdHo8PNP3s1N4UrEPwiH6KzczAhXoFw3sPCaB1CKJKXE7EmVgSf44tDQzuY7KgtHpMC",
  "key44": "oLhbmHv9vYai6Py3L1Ba4mw77jaoMDnhAcyJLU32nNAMS5mHFWhd15KrqQGcx1bVoMUt7yX1tt9E5cdUV12Zgcq",
  "key45": "8d2DcV5xPBC9tu1uKxdQDzzxVwwpDhQZZYLvtiYG9aUyKAo3TiUmC1e1gAGy2mAnJCoZMcr9J75JFbs2ftporrV",
  "key46": "2uMrgfXw4WpL85rR17CXU4dC8DsG2bEBAXHeso61LLiWD6kmFHKdvHRQ2afc6xgpfPo4b7aDxJ5G9R27gT6L3znX",
  "key47": "uzPxnhZ6ztgwEoW2CkvHWvqUEBuatWC83GmaBu6hmadbfWgyeMjf7SAfGwkPFUzgeoFFU5AcJMzCgjyPHN2kxcx",
  "key48": "ndNVDVRCpuQptWKYr84BBA3utoxYZ265GFt3R8DtJxEfht8T7TbnGZvc7p8YVRBCEipnBi2agFzjGkHwT6YthzA"
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
