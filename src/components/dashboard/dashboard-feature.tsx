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
    "2VFwrwU4iDnWcfhiJyinBM538TLReMCGt2s2zUA8rk1Nf4cN9degui24yh6XxaWPK95qAxpjZ2NUBmAetbCiBip4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ku4ZfLRcJg7UEWG5NCvWQTvj3wCMjRr8Hk9nPk3Kpj2PEuXC1aZ2quwwFBA7SY5uA9DGJFD84MLNdiY1ji6Exdj",
  "key1": "EWwvH4CgEeFcSwbgSspaZmDa81aNVTVjGbwhkBk5ftdeDwAQ4JZwKULdf6vEQHfcUgs58E6yMRpkS2vZU8JDRSj",
  "key2": "mAAgdqGaFqjudsEohLActBWthycUSCEbfms8pHQvQuWNUUbmsPX8HC73Y1DWH5GxAebBci81Rv5YxzX6K2iZqcU",
  "key3": "3qyMCEcBfvwpEmPttQGSgh3nRv6uyvu6BtJFog6WC6fjzZaYZGAsg8AeXBmJR3q96vMCFEDL16qqcLnuhqTkCGCg",
  "key4": "XuYAFbv4GSB3NQm4MdbZUQ3gDZ2yquVomsakUpmkXNXCTCVkD8MCymU2w4VKpizU4aAawi64yzBkVmMUR43GL9K",
  "key5": "tUwE9LED24KF2kd2sFzpUoBHsbceUN2FA82ndRg7WdnhgdQtDQ7y47YAvM4xirGHNADAWWnqHo4tjPmZbiQSYSG",
  "key6": "4WaXbbjG4dfZ27UH17in8Z9G82k2Yf1Je2C7Yc2E1RsE5s1oh2Ws1TVD9jSVFqVXiRoCzNzxPkZPesA5jC135kuV",
  "key7": "3dnN3CAiBsc6jvJrRreRTfjbGhGm3k5hwiwVH6v6u5fiP41HmZzH3W1UGs8xhT41Kv5jLr82rWuUs7eefZGTxPre",
  "key8": "277XY4gFXepR3zarst3DXroWwV1Y63W49Gq7ncUw7T5JstCaNJU2ekANUw9tvLyhNAdcy5PzM28TUoHWefiYMrgM",
  "key9": "5rWxWxeMv1Wqf381qJK1XKxmbSY6ZaMYwfdUk5zFrEjhhEBuRZAzhx2b7K19Fxf3hHJ9Q8D8uqVDzer9Sd6GjmFi",
  "key10": "G85wmuTTNsW8x1EGYWfrDm7DX23LaWMybDDLF681yvssWo4qcJdtEhjkkoczQyG6xaRqSR9fN1ieQ6awnvm68Yh",
  "key11": "5qVyyuYh9j8gYnBH2MStfJX1pMjSrkomBxQCrwuYRzoTHkqT7u1d2zQWJZ4tR6xUja8zbcoQTi6CDBCxH1v17wKT",
  "key12": "4L1ByY5LEAA9XQfCWNwVr365HL7VLa3TrHygnqaHuEb9PwrBT7maysXWL2iWjVC7nkWVpPHCqYzg1q2zMopvb1yW",
  "key13": "eiECZk7mMYm3DkRYy9cxARFJPChB45BufVaPdWkEgMJ7n8DuZG8dEBUZucVVg8NA6EJywCEv2us4LqGQ6vdCzF4",
  "key14": "4wbwvu5rbHTB3M31w3JBw67mvQ8UveUCTJfvAfESpGwCa87gDMNZq4vivUvpHV59bGV5W7CB61ySsM8uGCzhxNdt",
  "key15": "rZ3p3KMvpN589VvW22NmMfkyhgP7hcqpF5NdhKtoeUvpqY93zy7XHsC1YAnXkpQm1qvZmjkWJN3FZhELh59Btpj",
  "key16": "rdUtchRcw1X3sCAFrczf4wETUHiEDUHV19bhhKrTQkTsmsujx5d5yGuqwuMnfJNK7yLHAKyQJoL227V1S9vZjdA",
  "key17": "4uASFczXwb2vkGQr1ddamA5QDEedcdL1Va7oVyfhbCVfWfuTrdo154rzG1GCan4rEV8whwDq54ruDkQb9Xu5Xcsb",
  "key18": "5Nh6WsW38ckDM2AnHQYd3vjmPxkKh4hs3XXjqTFBf44NtbfN8WF3iN2RkUnrvFCxXaKqwLyhMDtLfwRTDypSJF7q",
  "key19": "moVT37k6AaVu11RBwexG943PE42cwC5fxWEAzrxsiZ1TMxSnhFaNxYreFxdtdeZwm4yxpbDm5BzXASjUQ6DtLPg",
  "key20": "sQT7NkajmT9t7G6EMXAZ57qC2Qdk4MiYekbmPPFQ9cf2REhnPBtEGpyU22Yw4ABvgrxB3QgWK8YZwwAiM3c3Wwx",
  "key21": "3XXSLh7QvyEdTQaRPKhcXNGBFU5zDVw8AMXB2fD9ZMV25j6o96W43YirdHsfza5w9XAWLrYesoM8JbAh8t87wSE6",
  "key22": "5GJTpK17EFXR12qpxvwm34t1a3xPuCsZhYiKKaccJCf3Ffxv5qcf5YXU1SKqFhb3SkGf3iSAcx9oXLHqpxxaux9q",
  "key23": "4Fcp54fNduNH2FoXMQfS1Qrmvi1pqCftSJzcrHtEs7YyvsXUH1NkRWNcTJp2o4WWuVNLoRrqN7M7bjBnoJZ1qJ1c",
  "key24": "mednrYjFHu4xcMVzVadq4SyfChD6GBS5fDwCmAfZNfStWzFcJmiRTzs4hSBT4vZQyLgLuPZZMLunmHU3ECEQhWF",
  "key25": "3hjRN6dktTGz12huby5HzXHi13J9i7bfGx4yCnokAR4AAV5iyP4pH4sWEydngmCkQPMZdC1Ftpmxd3iSS57nCep8",
  "key26": "2FxtWPk8AwkFvLMPRrwnPGqoPsnaXh9n5JdNMzuTU7kzF6f39aecUa4KZ5hrStKn7Fhv8xiDcpt3vKBxrWDRDaR2",
  "key27": "4Jhq248GpMoL2h9sgKg5fpVoUV9Bsix1mEXyp5Fd2Qwi1jNUqk4TpBACsy4ysM23vAroGXh1TYrQkk5Xr2XgNomF"
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
