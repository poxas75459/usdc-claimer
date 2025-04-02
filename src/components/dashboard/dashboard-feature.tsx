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
    "5jU9Wp5tojzopHxyf4kzZH3mdkN611ppvnUv3HVXUTXbSwPs2Gg9unSkDtBBZUq6MPUdV8CJAGJWXrmojBqHF3bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VD9WzDmkcr2jpEZiBxKLmaW3CXMmDNWiGy8LTuEgaG5AMRqacBdZ7JZbB5egPD34JFvtrakmaXj1hxoE68u9pUA",
  "key1": "5NPBvTvVSTyCMyDqQKf5dJJBMsFCHx7ndnZqAaQysATnB5ap5BZ1QFTGJfoKh6Yry6xA4XjiWuPhi9N7rgpjVxR4",
  "key2": "3mm8LGLFTbfkFdi2ia13bz4gz3wuLwtamFHQ11ifQ4KobH67PB24DiYpuCnwykb73BS1ezybmUt4WiX3d74JnwGD",
  "key3": "3EJWfsBe2TFm6TxK2fjbbCfhfCAH2BiFjw7JuZLUPXZfE6XTL4odctTMRjNVsuocdMFLTtvr7Nq9MDnucfiiwNGY",
  "key4": "621jRFXgwd1nEUKBvfwK6vcoZSS9zE6iotTbWP3qVfgELmPBpUqm85xLeU3TckpZWaEAxaoBNAydWQF8gZxuYHms",
  "key5": "5PAg1ccBC9SUkwDQuaEWDTyUdBXcBaZTc2dUoKDY3srsARswDkTt1fJtQxtQro6WcW4A2L2nEssqBU7YH9wwxfCZ",
  "key6": "5SXD3aQeeBMky8MF74WDSNsQeyQToH6YcF6CyARYts7M5uuoHhjUj3dn6NA99RyxDn8zd8jcCMynQLzSUJdDV3Ge",
  "key7": "1kdBhcdcrhQxjRxP8TF5NNxPmzx64peCVG8sChnuQvUc5VNurSuD5dSDS6Qm2REMzxhigH4Y7VYU5oxwiqey5Q",
  "key8": "3sDAUXTddhC4VQo2QdMR4rQPoqf9VdxJkcAEo14gbETD8Yh5EEnCmiC7gBwMwishAZQfrMefDfnRJcKP5y31USNb",
  "key9": "5p3jEy7hwzLKzvUpU3TL1YWS34xoZdwDFK8S3x9DZgHPRsemcHtTqwYJGLGtpnsP4HJ5qhWSP7BvSXkqVqSm8vp5",
  "key10": "2VZX1KPHqHkEQEGSC7J85EpnqsRzrNszMJiQft9iVHjUDUgd6VU2ubbHZ3S6VQtEu2v6AEStND33riiyWiPm76Mw",
  "key11": "3KxdbxpmvMYdci7TWqDgnNoXrjm3Uifas4vBoc8hrxDk24qBWCmBppTRuVSBWueqqrErjLwwFpu3UbQLj5kVLvF3",
  "key12": "4W1VWxXMYJNF1i9khwuA7d6yfjEah8tAwjjdfF8W9K8unKvVoXPthuApnpZNULK2UXFBSj4QmH6KXPNoSSiwMXww",
  "key13": "4pCR1ZKsmtg8PNRSa91B6HrSDKPmPhYZp8yrNyMyJhtu64rV7z28HXSB8iJ13pDsrWBQMuBW4ANLSZtCRQ4fcVkv",
  "key14": "4uLpXkXs8yfsCj3jupYtPGUmwx1Gch7fPNuRigC1XUwtzKKJAWMfB5sfkivMvq1ue61oBfBy3ESPT5JW64hu3XHR",
  "key15": "21ViEwrb2QykM67PEU4bzZMqUY1iJb2TXRh5ZoDcVxvBP24mNYSRwQTdA4x9f8ypL8FMjknvTvmuDhJkuLMHvn2f",
  "key16": "4f62J1c1srg3Az5JFffzBq2TMBApieguvyK1QyRj5wsqUXDaiumMtdw1bFidVywqW9NyE4ZV9esJ3jecCgebMF7b",
  "key17": "35ytGDfokBQV11hgR3QucUiZPdnKX4rKngssBdvwjTRM9o9DushjwZdkbcxpBooiDTdxye1jf7FoDFMNVgqyy2a2",
  "key18": "5d2MU8PhSXiaRbaQaBN8Dqe6JGhWtsgzTdq45cnocoo8ieij1YKjjJBuDihbVT99tMXzCwhAwvFWgH2ZFspbfxCF",
  "key19": "3K73dfGczJDP2zqampM6FXctNHJ55yPwzUtBUdTN1RJBShzKTu6UERpK4UBFKtZhpHwk1wVviHQqvY5GADL2R96r",
  "key20": "4wDZzNkmNCg7wDSWRmJZ8QjoXGQQV4d7VQJE7GWU3A76KrYDRYB2hknUVyHGZ4AULLxYWxsYbeJpTGw2Tnv9GaQ7",
  "key21": "5wcmwAtRim7aFA8eqnsmDupkhGmyG4p1bYBHvy5XSPNaLkiTae9Fr4JuVmgpmnAhnu5MzrYJu39Ea75BoA4WnqnE",
  "key22": "xJVnhWHr5oc3CUzk7NFyLrmtLQ8JAbGDPdf91F2qNQrzTSthnWnzyVNgi5m1ZWwn9DiJa62j9NRAB84Sygq19iY",
  "key23": "3GckCwJbZwxuVdRY7fk6iCZDtxQNCAY9jZtNLpZWZ17DqiidmpCKCr1oigmW7kJdKbCRk6jh3RBy6HJpSecCwJZ3",
  "key24": "kK3X93DmiX3Mv9meJViGFYtg2uQKutgBEj4Pt6n13cepc4RScv6dgzcHnotamrq45iqppXswJRvdz78xYaBmY3L",
  "key25": "67iNw3cz2sEQkNcihmxe8M5FSq35YvMRS3nVHZwKmskkbmXBf7uekWgnzK5mRFDNjRwQKYeqrPDmhYaCB7EFqFgQ",
  "key26": "3CkXSyU2fY8V94fA2q9SEt9Vfi7o7JGBVSumhBnT9sYjeAD9MGX4tZUBcUABqBqsxBzc8TtKZZUyw27Pb8D9gf9t",
  "key27": "QkG98pECw2dHEVnxpBn4RXjRGG2G8B3rBSF8HBLVUdfiCCQvmdszu8Z67jPaED274n7v7673rE4eTMSzDbQp4x5",
  "key28": "3tHSGTMfdByEVznzkWRcS8SbNVMocfVByzR9GavCGTePMZL4iic7kqisfE7c8ZYcP7MJSxdzPHbUVRbLoTVnVpTH",
  "key29": "4sLK5E9jmirEyoxJW2qsAqEhoknqGayYN2kQd6HKeFyVWDLT5jmhsrhDvxzhZcTZZxG6cpoDLCC6GjcHPgSv5vGU",
  "key30": "4QUHNwMtm6w8TF6vAokvMTyFeLdLXfEzmSYPHZePZb7GVxengP3qCFXWb5LeLR97rGX8NyrRcJoKagDnwUji1DWE"
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
