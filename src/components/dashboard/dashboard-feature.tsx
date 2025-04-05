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
    "rnv5UJW2tin9PVbVvJgV5ayyGczFQocZUa96qxbGtmxfikUW5y5cRvpACz8WbJGyAEuegJmhuEKSPdwXKiTMrF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nk33CL17E43i51LjRbCgeEoVcMvgGD945Z4t654sjmfEexx178LarNJCZKAxSkh8rXPgSUbeSCqiesRPgPBWaPB",
  "key1": "3ZFq77UU557MpLy6TJqgQA5hjLEAhS5k7XtNxyLXASsxsStijFNtJVuJ5PDfihsBB2RZGFKuCgxqFKRL6eYgQTWD",
  "key2": "33YFAFZUaq6fJ6tmGvEcdKxoNpLAwLTdx9XdbEJSZg7xa9DKmRNC9QWaqDa7dirroZDCVsdtXiARGCQRZTNot84K",
  "key3": "2Zv2UKdttssiH6PwMRLn2GyBQMacv718qzFfeTFPX1kwEfgV7YieQu5J44KbMABo6XoMx65c4NohrorpAECjutCw",
  "key4": "57giLQUcanodNrtJoEXzXKZphoJ6TFH3i65EqUvUmTsvRB3m5JezCQTtwtRA7XL4FtqWSShMZksWhFyXeBygeK8A",
  "key5": "2gPZimtM65D3V2BYVCycBAcuT7MsHpzzLs4cZd6haVcheN7JtfyU6Kbmk5nFfGsqJkQRfhMeDP1CnRekitTy8JAB",
  "key6": "2RJCPCshB8NXggJLXbQHz22GRDCR3WJzSC1vZq4YbD1jBCHyjTKGddbqR2PFSWJy7mU5wQm2QV1PppvqBWC9UP9d",
  "key7": "4GEHL2CAWXXJuRrwyHwTrpzhZ7Wye81bTevaFNcLJgqgVAE2ZroeLyfVUP94FHdbmervC2BfvHP7VbEvj735Fw9s",
  "key8": "3BuXHeGdEWkFtg1NgmKmG1DDwqk6fQxgSf3yq4FpFNtofkvSwE91W5Yr4fJu8uMdcMaEiySrRM68MMokyWCifzfz",
  "key9": "5osBrjpFiY2VG4Agtnu5UgXpwFF2wR4KuWPkhmZLX2qzvorHD6aRtFo7eyk2vSwCu8MwuU7NrkPFPDxX4xpYWQpS",
  "key10": "5F4i2VDdWefJpsN3GUWKAbfPVQCpKuQq3KMNtc72nNeWBDVVVrQM9dQCPSZum83FnxfaivMGV7K28iugUbT5B51b",
  "key11": "5rxMt1MGoD3tK2mcY7x4bPbcHKU45NZToWLdYmFGd91qMup45H7D5rbJKiGr6gA4JGqjBWgDJnBcxaniBxeEXori",
  "key12": "57JGYNizAsvthAR9u5BAUhLyd7YHrymatDcrJ2jgwkyNjEmmhMaF1o9L2iCBohV6XmpgHSM79anv5VLhRaZPUccT",
  "key13": "rT8JdCQTizrtuZaVWwZmefXd5wyzMaEoLqtBagUhGxRYpUTTT9FDJ3gaRworVHGH7Vm26gZtCYnc3NLdDu9Q5xs",
  "key14": "3jUgznpCUKdciVSKXLKacR3hYtVfQjVwHNhbndWFW3WfecKSgPtvioEL7vp7Z87tLed68bKjqcCwcxSY262QiCcj",
  "key15": "xwxSRXcmfKSHwBHYnSDemCQWvEgKYdj6WW1BABXFvqNgn5KHN3dcHLaPK5cFbrrNGwAhH4kr3ZyK2TKvxSLn9Po",
  "key16": "5VGgqjqVpKHWC24bBEBxH1TMGpDqm2VSGwdkTXbS8DBNykyxxpBMiQJFMgPnofN6nHZios7fMVL3rggHS3mjx9PT",
  "key17": "TNmkrFk8LjBtaj9KxUSgCDirR23uB72Kt6hnZPMx2zwBoSUHFdmhxEHGCFNA4TM1LwRvhvSn12tnRnE7NRNKjUj",
  "key18": "4XWFiLy24U67FnmXN6jGng2n37MvJZ8EaFtjVVpPkhgyJtDsyn2QDAPG9Jd4QkYppDvg4YJUyssAQq9hXjbHhED3",
  "key19": "4cz1nf5o7PaSCaEmQBowz1oqdavzKusDwYK5NsVXXvnq4vhbJA2YKYE3HEgQWe2bfo2NcnxmJHrGF9G8nCxhmzDH",
  "key20": "55whMyEqjYcBMUnJULctpWB4UryJzoWTzsx8Yr4f6CSGLbSFwpW1dcxA3i6gW8vNg9ZZxoqxUzeKAZjDtVvmNdru",
  "key21": "3BYzo3U5dF7tcHiyoXwPmCWjEHk6VYk5AjG6QxSZvyrFDrjFkizibayP7HL1cbQPcpPT1pfy8pCwL5BxPPmCLqwk",
  "key22": "3UpbFFb7Tzcox6GLhkBCpRxMQk4qdsFsz9DpiZRdHVnrgQaWrt25nrH5HiMYUS97ePzGhcVe6UVRcepRBGsMqggH",
  "key23": "SbM59n5GtdMxuDWoR3tVMFwaQoLFnLhcTJFuhvFysrVtsAt4RQ21ppUwzVq8M2yG45SNbhPxuLP2TtfyQhaWtR8",
  "key24": "4R7FhauszWEMGkqQchLFWdCsFzqFmSEZqEjkTgs37GzZp5RZqEF4dCeH2zgyGuZXUUDAGcrEWCR5SrEPkiFTasot",
  "key25": "3aG6e6Z8pHDf8uNhEmso3EadFGWwRBsbDesaTdJEP1PwBQMQGr7qYXm1URUeKH6Si5QSnH2fsgPikjL9gqdSYwxB",
  "key26": "3svHsynLvATB4XxRoGXJtQJEvXBiPgcReYyQjEhZfL7PfctCYwrBqG7FkC3xMHAYVUAFkn7ioCZgm5msEf7bFVX7",
  "key27": "GaCAowyEutpJ3rYdufBt6XQSakQ5DqDUw9kzDfQU1FPYSNSvxFfMZLecGtoWxxBd6MZKi4A3ZR2C8fsCh9gNgyD",
  "key28": "3wby2ziFjpL4R7mDFF2FZJVuwuZrkgDD86jraH7oWKuCCPCAKzPMGDEzQd9tikuQy9JUEAB1FVXMgQQwfvXBM2nV",
  "key29": "5YMVqMVrVsqR3SHQLoAB1T14XEzggCcPZXRwFKXXjGqoEqaHuaiiTJWxKuC1wySg4aAEfSFbxfbXN9hLezVAAQfY",
  "key30": "48Amdw3ZEk7Se7kWXPH3pL4zPhtNtZis79Da9w6GwURrXs66wM9dGrxKiBzHs9teDPPe774p6eG3mSmEG1PmmuBE",
  "key31": "L8RgCmyeegfaaeS99naA3KhvxbZL8bXffQ3PQtzua2vY3D1cAXQLKQWG3nGeccHYVxPnv17b94shybFBy8HrfnN",
  "key32": "5RbibokSKT1eG6n1AEBinUj4AYYATtf9sPndXK5F2TQKaV4HnrcRuv7sZTJTYErF5HtfzfKdzw49VgUQXxXctYrQ",
  "key33": "61knumFasjJ3gjRgdvxxgCLobrdQriDck1qSV8e7hVQyim9xFnBtApP6DyvzkxWQ89GUsrawq1Z32sh9UDvnW9KB",
  "key34": "58kRRuMEqJMx3ciS1gH785g8zePL4J9k6499Xxrg1gWXtQsVpnNTPVxJtpiqXG255kX5NhuNwnVv7dW7UkSz2qdW"
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
