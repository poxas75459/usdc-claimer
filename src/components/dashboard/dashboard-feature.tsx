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
    "44fiBdKzNKAAkeiMD42dLo9FRyCmsXwRnnUKihzQi2cEyDXdxCpug775SdRuo9iP1mnuRRSqnYY8EQ3E2HywCUGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CK1xz7zU9DU7uTV7MCWj81SwHVFDaUXVK5vWyATGanetXnVx4vWcB3DC5yrBrxMLijTwc7ov9U1RqZD72djyP6A",
  "key1": "41CkKrwJVtv4rH16Gjm6ZHyoUoY96uacco7XifoaR4zhMEYLEeiUN6FmtWBk3oNR7T5N2xJfXWAbbekuvSKFEM8u",
  "key2": "4iv1E1vD3gNJrm2M4S74ZYUqJF9egpK2GErZpst41WGTqsRsSw6X3VmD3UddLND4cLrp83h71Y4HjcDyh2ojavCA",
  "key3": "FMPnnmBBt9VbTUKizRbLYSkpZHs24ojFo8est7oaB9g72PE9jjaCQQj4bfLhHBDou43VzGjP5sSar8zXER6sy7r",
  "key4": "515V4nCWRiQTqwnRFMqUFVQFrKigE2dPApavzaNScjjBau2ri9BBvucr4mNtyt6yQZpqYqCQQoqQYz3L59EaoNo5",
  "key5": "5cQD3zvzNDk5yBipaBknK9bLAQGGXZdE8gcSpsvV8sgyCsun2fYmFQD6b3ipA7s2H5ESj7WrgvhgLmn8zSB7vqWM",
  "key6": "2oeeF9h9ieJfhMqonqrickVkNDg4VMbQqUQ9oQg5PyXJxyrFSezTDeqqNPgEHkE8mVDVGK9jQhW9d5yxLM3Uuabg",
  "key7": "3ZUVAP6kptPhmXouCHNq74XrBToLM49MLmupC2cZNqVPHxg8kivWobYKXmVb1o8bJ38z3oyqya7humjticTwcw62",
  "key8": "4GvJUdgEB6TGTLJEx87BRyuLFKuitX5VZ3t9RdR35C2xWgGyTZg9bKNZn2bG2rX893vZJsgLhy7fN4pUqXf1dA3A",
  "key9": "r579ctDZVwjCRcgBd8PwPS9SyAhVhg93VfU4aggYTy2Td5Z5wpHK1mirRpps6edaNKvPGa7MuAXFK5GYXegt94j",
  "key10": "xtequxHUqBZiAVzZMTZJJzjdWRqjECbd28qRo7zCpEkMQz2fqWDKBv8AK6ZnRzm1EBLdLo3cYpm2UUgiyxSLhtm",
  "key11": "2sMWCS2Y1jvnoB51AZeiPmmwj2gk3rJ5nC82chA22eq6EEZEN5Z1cEq9gwtfDMEQxYrdHG2kxFmLnDucsPaQZL8N",
  "key12": "4EevmVZoZ4kfDV8M5on4oTEz3vZFke9DtNCekGW4KCYWYKrYAWBzxRhzMZTfiPpvKvTSUcvd7TBdvqpWpqrkAv1C",
  "key13": "cR13zhsukwooFLGVTXYaWiPBfDkAf9ESbqsQj6kZYfPcHLkRykKYqmnFokiVDmQKMMKKjgP9CPj4prHrv8KcVLG",
  "key14": "JMQZRmBsVhcffuEJ2LZSZ5s6Pdw9vLy9DEaf8iUGjXgseq7z8r5TUGskRJAk2NvL5k4oNptaaqCc1TcbkphZHxW",
  "key15": "3upcD4RatYqjwyP5HoBWuXcgCBrPPUhiBu71cZGgb4iU8GikEPn8i4EF7Yvv7VCouEvM6nN1icpTgBMJH8uYQMYT",
  "key16": "2HG1CvoWSGNyUGL6czeciYFsvXCWkmXotP9DNRMnhJsFj8osagyugZCndRpmRCfXvgU7o9T3KqevQvbRTFYqhecd",
  "key17": "CuoFvVYx8a9ZMgGDroYRP6v51yMnKZ7bStyjPF7bxQNBL9EtBzHAV3dE4TgC2tZzh2rsSQasNrFJs9aUqQctAV4",
  "key18": "oAU4nxyecTgjsPVTHE2xN3W231GzgoheHpFupQZJd2Bwnw9wNJkD3itLHPKPR3ZdSxE5JGjFQAUbYbbEmPgDPJA",
  "key19": "eSQPGGS1Ucm6HgNiw1dpQGwXWwBMqPBjD6f7dv5mZt3qcCVXgFs5a22yimS4XA6QKrtimgo13EDizFidbZGgJey",
  "key20": "2HbsPTpTWtKRsJRtPGnct4ByyWrGqXtnpAPS3z3LkDjoZH1NdeFvUQztc7n2J7dyxBEjXxFQBzXajMBYbtGgecXP",
  "key21": "hJi7TSu8xi9yGReWz7urfms3mdYXUzUcumTzNhgjaDQk9jrzzysygdvGk8aXRz1uKxEQo32kiwNvWrBvfrGFtnQ",
  "key22": "25mMS12UiXKqRs8wvFRZBYxNoFrmfwuKZK2NUhBABaWvNvYwXZtM3w1TafYxyc6XQ89Pb88bo4YDS6Jdz49iam28",
  "key23": "LaeNUkjT6kcW14VMJvgyzmqrUBEM1W8wvdnskct9t3698sQrNhj4XCGHYgtSkSXt2pbJYbEviUUYCgP6TyT52PZ",
  "key24": "2M1vscye5yZiNVS3cDvcp14QVKds6nsL3MwGcg7J7PF1mDwp4KL8Y6Mw2BLL4JHn4GVQ5k3MxtZP1JjaB34KXHSc",
  "key25": "4bivrSakubmFR1q27kP2rCeaGnHzSVXiBXY2CAAWkZrfpq1nX3he1uJ435VJLChUX5phkoxr6i9TDzgioMZ29z7z",
  "key26": "3DSNKv2rmUbDxEput4FU7dgnYVKx4oGsebMPJCohgDC2dTpFyzv58vUBt122ksZTrw5iU3fqCggHBnYGd9R9WRiC",
  "key27": "4MiTeCgpKaZ6bHNuTaXdAFFS2rr8sMLboMMjH7waH6M1XBh2UGZLDscYrzCTQ7nutnskqymt181SkrLicKi1JTci",
  "key28": "2Yx19YA61fv5CiGoKbkqqt9jmT8YTwxMSeer2tZ7XyKRtRHaD5uCdxqbu5THWZCqQpsRhhCCHCPTWQYxopTFzhr",
  "key29": "5w571FAXiv96tuZTxsMZMasR5BDa6Zt8UGGybs6Ku8UwtMjQSFTvxHtW2fdUAwkLbUEh391b9vYC9udPLqwRj7F8",
  "key30": "2wgAnjUHJg7WsGEfPpPxZPNrz8imoku3xGQYaWCLMbeTwSpnE5AHPn7FSBGMfG6PVgAc1TpKWq6RHYRnEMdZDbLB",
  "key31": "2BsxovnkytSSYQDUzrKA71sJQouuEhPn7AFfLezfiZcLRdU5JnSmH8ebPQrvuCJmLu9GVkygZm3c9Lg5U3VkfiAc",
  "key32": "4aa5thKSNUzAemFMPQVq84HLzqxcxax7GVs2BseE9QGMnoqtqGje12NRE4ghcc8MgEZuRhPVTrhMChLoyr5Kr7kv",
  "key33": "JaaX1ZWJnfB3s3giqCeHAruhVZvePp1KhyZaJ2iWvnYtSK5LYhN2AT5Jm6y9CWGgqgjBQnfYBur91xmznzBbwzD",
  "key34": "2NXgF5bCDE4tfApt4534XmxdHovFnki8fu5Jr5Pt3R5ogT9Wpv4ZWoQdToBmzrgiytHL6jfwokqXQJ9E1nThXRC1",
  "key35": "5Q4ZW7vz9kWRDZYyUVaJeHWTfztNq8je4or5j95gSvs986xi69MHpSF2mcTmypVs24LbvCmr7uaDBXTivhwFwhv8",
  "key36": "3Gc62PYPcGHPgDy2Y2c1cYytqq88eRpW5GuziofHwu4CpLJTj8Wfb98rbFFQrSkp2ETRkM9q1cmKDsMBQgz2HmbQ",
  "key37": "4fNFGvx2Z3f35Uz3DMoVzgGYqYQryeoZQkQ2NS1doEwRU6trhLgFv5jGc8wyLKsmMAYXZRSGSo7SWCcKD1GZ1eaB",
  "key38": "4SbyBG2qamWS94cGqwEQLD9dJkZwNarqs55XvBd5bCFgf9Q74HasCS5aHE141xVYMVtyJZNULW8TEEvJcDfx8aBp",
  "key39": "4g1kDyiHEmAcs4f5CwxVLXbawDTsiSsd14LwYrWBdYhye9jkHFn6fQ1h9fMt9BMz48Zb3t6D9kUBsn1UJwBVmqMH",
  "key40": "4VXTQJWi1kMXCqDnHCz4tKQAp1rNB9t865KN6Q9Zundx8Najq3DyAMhsCzKd4qqHbGVsfgRVzPifxFH1UK3gknez",
  "key41": "5VB7maJ98f4n5f8B35TDvFLdzgDM3k2yJumHJ89MJ58evf9DgQpsbu6iB2oH3Kn5oKtEEvWKrag9uPDXKPKGKqMY",
  "key42": "2MEU8yHrs4Gqm1JgRpTqS9Mvromy3C96bWF11VMPZCBR9HcpVYXNV5QyoFwD2DU5a5M1jwGZtyvMsMxBpUGB5Bv5",
  "key43": "4s61DH8pf2Lepi17W1sbVHsoRvMwcCFAEcFSTcV1EHF4WJ237HbNaSR33A6Uf4wWAHHeTeGyTohN9w2UtRsiBzfu",
  "key44": "3uwgM6xj1pge6fC3uqH7mARa8BAoHC3iopY9GvcBJ2f5GmNKdp5yTrjCdqxXfEESfFwopwPrW3wJVSubXSi4P1Yh",
  "key45": "5XfXNjBaUAdRJFd8CiKn9X6N8VgyYyZWdYgLyYMMkVgmo71aPJqXMptGepqAk3P6PK3oEnzmiZVfAUJnHrLmzm5A",
  "key46": "3MewJRJWvVp15tg3wn8s3Lxom865EhkSJDtugQsaGgjyngxgN5EgjaioZmFazF1rjiEW6peH958bMZ38yZWCPX9K",
  "key47": "2Vki9iJpvXpU1La7HVZbSyMUyMmJ89ZjR4mfCQcZN5FSaLLGcXzzrYBsdMWEJwE7wj4zgjtFVmC2WwmcyatDTCxo"
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
