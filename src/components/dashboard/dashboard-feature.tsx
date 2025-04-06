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
    "p4aVdRyNMJTwdmZKLGEC9RorqSphfKThcettsP7CRKYMiT1rkruE7mNw8v21tkdNrK3eoTwiyuoHLXptxpFdT9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6z6cziy8CixcKRx2f1XqEnx9iDE7ZsxVwXpGPQ98LPT9ijLw79UWBHxKuSWxt3EmqX8jyUY7ksggHLmiT512g7",
  "key1": "3oJaEfgnBzSDRjiMz5saA3huQxW3g4MBb7E9imwPaak7M2rN29EPCmV7PkqH5TH55ysub3BiSsb2gC8Qgdxg1py9",
  "key2": "2xhonAh3gpJtNNfu1vjgL7dTa2GhrP6gX812hojhxkdn6PPWZpgwNQsqk2i8ockKanhrmcX3y5KgjnGwAxafjn5D",
  "key3": "5z5YGVLDavEvH369UAsRotn5sKi6sy7ANWqsb1MqDNZG389PxE2Zid7TkvHHrjbZeAydW5wPhpgXjEtTfXgBpbnY",
  "key4": "4KgXkjQnuhAzpVgzfBX2LmBKtpTcyjKQexWMvjUGS7dcQgAfwNxXs1hEbd8nwcJrSqSH5dVg5LTmwfeheqUbbCGo",
  "key5": "3whgYiHwt4ACctbPneBXEnGu4E9ohFtJ8xagLm7N84vAG4VPy9oWtTRK8zm97VWgixcDiaFzgwaRqtvYzJ7C8ujE",
  "key6": "4Lin4TYJPUS4phuGsh2RQuy3QAz7JVTPCik1nRQ4J4f1uPkuwEsjFgCmLY6ALJQgusD2GGAdswvpR2wqWHrMvt1H",
  "key7": "4an7RVBXiYU2eZGNrYvaPYDrZZS5wujBMgSF5u5ow3LNeCxFWoytWDY4MGfakLVk2ZQAFsYe9vGHnGwdicnFjyLY",
  "key8": "5Rrg6H34t1Ry5tforFdXkAnMLyWqxf4zKcTPwizFc3zWRs5rrWnr69DnAkxjt4mPuTGpNBtKg5mSSSgDmxXY17ie",
  "key9": "3KLFtnwyexbdykaxdFEGpEJ1iFKYY4CPg3APJHrfSLdUt26Lf3NVrkur8TMi3XzXyUQKn8p4kRa8W6B7hMp8TgWC",
  "key10": "Yzpgi3n41gZ9XFS75ivLA25h1UcRom7kXZyzXgstg56EbvZCLHgjaLxvx9yphKfYrVa2cJ5Sd8S1urk48dGcYbG",
  "key11": "3oKtkjeLKqj1FMWyKWGqQoZ6aNizhrYk7o11PBYGVytMLmHwQrW9YjkhFGVaFwQzaENWTxY3XX6vbwnfJ4qZfkrq",
  "key12": "5C7PJVy1STtkVCgHzewFbcCppM92fDA3kCSCY35RBXKzdaUSdCyLCqTi8vU9seHhfn1CZcxjmkFV2Tc2Qp1MDBHd",
  "key13": "659jiVDVmFiBuwxG56powhEFX6RLGz8nxcS6etr6fnm8YQKWu7JH9ZFnmfHEeGgmpsAYBQSmv6t51KtHmm8DxiBd",
  "key14": "5oc6hbzpcqPTgtyDTMZzCTosRhVSPGAnK62i7RSPXbba7DxMiMN2isdY49qKTmSb16wQjwXAWiNgJcVvfeHaccp8",
  "key15": "fbAYRhDSVQ8Hhk5njQPuoXKpWQzDUDPY56KoDifSUdVhkyUJxWY8TxCnUBMTbD8FmyKWxnGSGxEguEq2xM59GdC",
  "key16": "7hmWFavh2UtZ6qFygsJfAtYomEy9TaApPZHf2MVG6xmT9k7VXg8ETJwFZ88sK7Hp1ecxaiXvRDwDwKp2LxJ4yTL",
  "key17": "rav8v51Yah27mHH93DujMntyPiwaH1Yp4Ppyo7fY6RyDYQucobgbNCuQUAtvQ1yooeRHW5iMpXH6ydSpg8g7DqK",
  "key18": "2x3qHhyBZ7TisWxbgc6J6VbpmvpkXncpVrEwgsqxtUhTeNcu1jLDY6EhC4sU8qCZpVKVtZq3kgxdDqtqLmC48okn",
  "key19": "4gpzrCdp7dPS8HDWcATR9C2X2rWyV6KXZNuSmT9XH8n1HVrHAh4aJWLHGcmMhS57NppDypxUGjgwmQGYN8aLvbHV",
  "key20": "2625vSLjVPSb7KX5cTR6LQU8zNevC9BnAm59zaZ4J8SnRy3XqzWLW4mZGwzo9wT6FTEAopoSVGAo5bDjuinye7vs",
  "key21": "391qxUz5ghDaG5YXG8UoVHkbW4uAMmppng5G2TAqzC2LEPqt8KbRMbzLU1Mawe1KwbkCXAhnYrjtjqsw7NJV6BtC",
  "key22": "5zYnpfeihuZkQ7DKJcJKMehg8KJXvS91CYpTWWaFe2NAtfKFhCg1MPR4JBaHNq2yHF1qrqayKnrDYmVkenGrhoyc",
  "key23": "aAESzYE9dCc9hNDXiTzrCYPpZQYGTYkvtrkzWFpSKVkoozVQNvNmsSxoHdJMm7UKSy3DBmt1UoadEZeNv9LHn2i",
  "key24": "33KrHC6rrX1Dq4JHcNG7K1FHE7QyiiFMikgfwqmBTGAZ9v98ztDzSXaahDUrw4HXrAtMSBHXQxD2Fnqe6zj5B3m3",
  "key25": "46ppHsnLTLhmoGe1WGQjvrD4KRo6LnMBNKHt9igzR7AQ9waDQt8WLKniUzUbgh5kYUe27siHZGxdyC1H2mkGiS7T",
  "key26": "57KRnza8JuuRKARnHxTgW34FGmAssWzNCaqbNabuzxiC6ixFh77VPBKD5iadRd1PD5m5LDCFDogxN9rA2iFb8kWC",
  "key27": "5QFwLtXsbYzdPsczSg3fC7napYCxjH22sxWQVdQh2fqLCEMBQ6F4E9yS2G1GiztTBYnPiK2eV7GUveqvcb6mkJKi",
  "key28": "4RbwUc4aLFkhXTDYG4cGqUCYAYPNZ8nokAzFYhywbRUAHmfBJpowq2zd2vDFdEXF7vZMbkUrt2uDkDP5GBXpj5TE",
  "key29": "jMRvVqtiY9ZJVfgepNRoCeeRRBAwJQGcDp9PkhEdQ5CdzJqr63emJMVXuB5ntQZQ3FfKpjL13b6HRqHEN3hM72b",
  "key30": "jdtAFVh4tUhBfN8YKjBbCZ74yiXbypeyDZeuHJKgSSR5yPDMSrDqqKqnFXCRZ4kXLWmgNMGEAqizQzQBTLtKB2W",
  "key31": "2hqGiySnJLvrK3pcd6J6y3ZUbiSrMninWSrJw7wZsQbhdZPPUaZcMaA2Le11VoELskwJmsZh6Czop8PF53V9tsoR",
  "key32": "4kkwGJSioHdVRSatgmPH34VWNZxxNvDmjfZX61nuoNwjpn3KgL82mdEV5D5Hx5Lu9wCt1DfmoTXysPvU7dKpcf6T",
  "key33": "67AVYMCu1BRauYVJVDCRWVNZbJnuJjC8wggG6MAoWNhaYtU9bzv5N9UnVkoSPEx2WtYmFj95nUz1byCjNzXgE1k",
  "key34": "KLCuQUi5KVUSNEdT5jQ3D9baUEnHKMkRgR2Ve9fyQHhLErWx9Ckoa3NLRbpNdHE7NQQ2BJG5WcWQKfe8BfSy6aJ",
  "key35": "4zAQAQ1WJSFpvzHdNYjJ7TySDkJUBXByrCR7UuP5fgigTsfXZLA3hfbwJbmZyb2JvTvD4ufAdzg7o4dr34R2RBGY"
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
