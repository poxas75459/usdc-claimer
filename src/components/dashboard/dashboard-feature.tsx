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
    "4TzhTZHVzRa2Q1cpVU5jD9w2HEPJzQNTWyAzxTPbKuYx4ZTFgBaFB35GgBnL75bxmtZ2XHa1Sycgef3cMFiX5r1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYduTxrhNg4pf7EEkVHNDsvJy3WAMYJA9zQDREoaoGrqosUxtCGdvHyeDPKaiYXksHqgXQdRQVFEaEJCTj1cwcm",
  "key1": "3QxresrqKoNUFti9wEXSMePptvkLN2Av5zV3DnKcWNbzEAjb7cb4G8SfTbu5NHBh46CQRgM1B6SfKw6JF6cGnQF6",
  "key2": "3FbKKr9iJixpu43EA1FsNF738ecZ4fVtGYfScyb4Y1bW3y2DuNuUuaULX9uDwBwfiyV96Jy3ZF65m6odUhT3SLst",
  "key3": "57zMEX6NmN1r9URVFdwDKWS3WhHnGXkcwtaMyi1odCcgEwmVrwtTH3KapwDYBLhA5Cq7j3GxVzvz2vtvcSoveNA2",
  "key4": "25KXQ8Q1MtDj3GVMtKJrDQiCSQ55Q96d4baFtKTmRedzunatCBhWLstNU8NfDXfvauj1UFrQ1KxguTJRPDaAioTp",
  "key5": "3GkPVeZWyMEt33ru8QC54DzDSvbTZEzGMsw8EFJS74g2KZQRUkaEvJTm2B8HxLPXWJbDVDyt7EG7FKxDqL2ha1EP",
  "key6": "5PV4WpeM9QPbuXcZDkZyzLSeuiGUqC8J41RHAbQjoV397tYzHq1syCi7vH13CC8NZvYw4VWE5kssfzZjfXmYJVJz",
  "key7": "3Yq3ZUiMACq6PWz6s7r441JLB2obk2kuq6raAJAtoiqbV34jAZKsP6LHt6uoTRVcJ6pJagYdyacKehFPWLhaz249",
  "key8": "qEFgikcWLdRULGU8Ahzvi9rv3GpQZWugCdjAALwTr2Dvw5XrYEzTGwp5hzepv8QkyFk79fT6GkuhqJVQLynHzVz",
  "key9": "zMLQzF1eZSjER66CSR5oj6VdKFe6CbLUuiN2ES1a2WyXmWYP6Dg3eDTuyMDMGWdNkzTXNyisNfkvJXBb7KrJzCb",
  "key10": "5nCzpNJeuo7c22m39wt5VXNKb1tvqBFrimjSSaKKJuFiboeSSrsHy1m9xeq5i1hqX4NGHsihuZYYWewdJBcmegHR",
  "key11": "4xXqX1NB4xSZEcdBYSCXo1yBsN5ukAsh9gH4qgtaKPtLmcUcuWU1YGAoRfM2dU5sg92Lw5K9R1TQVZER59TfoT7U",
  "key12": "2EoycMy5JmcA99Wu3hT8qi5nmS93tVuZT75o9pzQFdeNuvRJWo3VF7AVawfxYsTaycS93tqF7DTZSx9v9L6xNLps",
  "key13": "5Ay8AHft4TVxdCQZP4dkDoQoXbGTr9vSG8pMfXHXYGxDJ2ooMsucY6a6W2KfnvmKLTbhybxWQ7NojmorLR3jTkct",
  "key14": "27YXQ4eF7eDLhUC5jP4fkgM2SE9HqoCqpCn4MC1V93SGux8Wwd36JWMgq1va8U8GX5Zpxy5uiaHkwbRUfBzHuaVV",
  "key15": "578WmdDANMU4hnapZUcshVzAF8wwpQkSHpJddZrhkmChf3PGeUnNhQCJXwN1EpBzttJGGHCLzbfcmsKCb83fQtP3",
  "key16": "WpZ43G2yosk63KcEzHqEghmofkTHDy7qhGHAsbqW8CPCLR2oe9peAPoy7ZUoraL5KPJhqXohvQQtMzkLQkpnaMP",
  "key17": "5XA73UUcugZYDg2kJoxeSTtSXncrLbuZVRASfBW42mpoSJkg2uCfNvnttkutgKHdx36Kg7PmJDPypM7V8Z8w4uz8",
  "key18": "2oyxUvxX6wcfCnAU8A7GyGszn6kw8CWeiThYBT9gs4d8p3RSp48u5CRksFCea4xHA8KksBW4vR45EZw7voqw2dXb",
  "key19": "42dA3twy9gbpUWqteGSmWkSZtMxu9w4YckDm7mJmQTa9tuQZ21Vn4fczFsQx2aiC5ezC8YnYUSuCNmxvteoa3xPU",
  "key20": "2xUrzRFs5d35WtkAdKizF9G48QwNmTyicWqtKbVJDDfzAR4vXRQ7dGad2iSNtHDrWXqaNFaoEtuBNeE6SSCyzKSm",
  "key21": "4hCMfAhYUwxaEXmZW4MWnHobWtSigYMnmujsbYbAW57H6sjCDLHU2yqhi1fUW4tmftRBFH7awL2oHsCtcEdJ3yjb",
  "key22": "64awWNe1pkZYHtZHSLZ9v8gBPW6LHrtr1hXesUWNeqSj12dJJSVpPMdY2Wai7JBStkMFoqGSPuk4jmptdb4Q8VbL",
  "key23": "36pmekUomgFtZ2My12ZQp41Hjdi6KS6UQoG6wJcvAG4gZa2zuwA7qAXpcBcLjoLMrwQawN6dVWTKnDJgriw7a1UP",
  "key24": "5BGkHo8m7XXVSaF95Y1TJ1HXNujB2MWEvy7abC1k5PGPEpoEAERR6TJYCg8bLWaPAjGxPsv74WoJPLWQbnSSyjaE",
  "key25": "V3479baUEVvPAJDuwZ9gnVmyY8gWLTxyHuBMdag65U4Asm61P5KFtFVqhZrhHAis7x8GQTrhK2BD2UjieC9E3Rw",
  "key26": "ZjjohsFjPQZPKHoLAYwcX1rmT6C67WEVz5YjWzAUyw1rnvjdnsKsJpqA7XzQaVSGPKSfajLEF69Cg1BrbxzCcsR",
  "key27": "5dHpAMBQax9YEYKPoH8XKywd6rUF2Zm5gSq92kuFBjUKJBUcYw1rvKojQmisC98cefdoigmxpuTXAXXTgteTgCf8",
  "key28": "3Q2gJ57Y1rVqc4qr7etod6FSLoeiuWa7Yc3hnLFVbvx5LUCRUeGDJVQokRKcvZjRJLtrS64Ep42wCBQQwjhN1eJr",
  "key29": "3eczBy9kvvq2oiD9xQqT2dfaZg18wtZGSNWSeoEkKFS8J4SKHx2r2DcJdfQU55NHNyaFJ1Dgwrba4jgdu6qLHgxm",
  "key30": "5Bpcqz4gEss6TvD6KBtUB1UuCotoA1djG3hJeXyjybBdS73gU4PFDqhegjSzsjXKL1h8vbWSviGUhyKJNd23TnC2"
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
