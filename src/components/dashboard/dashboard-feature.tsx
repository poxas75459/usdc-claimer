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
    "4atkTDYYvMNUfAFvGx2DFK4MNXLJVMexYaUCz5mNtZLbvKCXYNZvfKTJqgNXyEzaeZsgT2Zsyo53Fm2jxZWxqDLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cjFLfBA8UiKWEP1ijGHCwVrBUqoFFZPxsgbUdqMq3WzjavvU6NWfsea5PXvvELp2PKKPKW4bedU88Pbk2VBg9B",
  "key1": "hcWUQANXBpvrReHTHHFvz5oBG1UgQ2harHrXtNa58dFzNuGjYzaF6YtHVuBapQhdazY8XaZVqyqBDdmt5gfZ1hb",
  "key2": "3aPAU8myUbrT2ugLWcTJry8o9Rc7NebcUjtV46Gycaf3FKsacSSaKdejVwazweVtLUeiJ8RwB95kKV2oasrCwbFJ",
  "key3": "5nb6ZHQay3wZXGew4G8pozdFMjYBDVrC2yWgpVLmojXc2pLyhqCPthipWVa2cqjommkNeZTTs3BSyUyKWspD5reg",
  "key4": "DNeQhcxogtMvVvqsXvND7EakmVgDEs2Yh4sA6fW5t8gRvYgk9vpbQhuUAYJFC7ti8UERER925fJvnoNt4hsbpe2",
  "key5": "3PTGdhac3Xyz6GoPU95oAsjH2qaW7rkxD8GeiuBYaSUGYkwXxQm94GT8NfbryPJFpDrN1F3nHrJu9LhGAki9ehbp",
  "key6": "5YaR7Esdtxd58ysafKpxtFdZ5qTzXsW7FtizvxVNmBwhAGdLH84oy4pVe797oMjZpsAPeQRhXUuVWYhFh3D6p4j",
  "key7": "6touj2qBTu8bmkoC2rZP93b6cgEb5dYch6s3iVTKVSL864xisRWdHfaVJjLAhAUnC6NxHbddJLR3Jisw72mKCqU",
  "key8": "56ZYcj9Bo8ChjrU4c2YafVm6xxFw5JFuXLnA1pp66hW7yrmwWCXnCMU4EpkGSbRHdhjvZ7LpnRx6NdcTCA9LTMsd",
  "key9": "4iFfD7yTGCfk2LNVuvWbjQsJ4wrMmfgzgpf4ULFNsunsDkcDBmcV3XRpUXj7DYYsBGYWXyHmPWcXmZSBsJ79WNUc",
  "key10": "3XTFzuEgyfCqpZXd8Up4M6byHPMtdEKHGfbnHTxtuHtyYkNW9XqvNtxgdMfLSoiRGneENa3Ny6vVzPRMkLyYZ3yh",
  "key11": "3GSng4JVQN1uWNJWS1HkCCuQpYu3mqQSpbh8LrHJu6QZ3nf4G3CVtyKoeW7ViZWM5UE38TfWJcJ9PDJiBP39HdNB",
  "key12": "5vPh6oxAWtcxYwZmc39weL3K3gDbP8zVcmYGfufiTy3RdeMn5CmeQdQmk3e6Gpp1grojsg7sP72R8beyc3NxFPn7",
  "key13": "4NxNmmabvtZugDfHUxZx83JcA7zndC41ta2i3W3wrbT29ae4UVXfroMukURzpCnMikUJWznXax4eYLqvR8mUWYAK",
  "key14": "YdAR9m8Vw4Fzvo2MuRzv1kDMktxSbw8Zp5LEPuKfP7HtrFJE3twFyZR5a6wDvQjveKeiJQEwTKK5AXcpNMbf2ph",
  "key15": "3i7RapAinPzUgcTFa4UhPhWqUr1bxDdfRtTGat5LUkbxjGMVUNmWu3LK1yJnrmHpbo7ySSUnQMvxkUuHYNyTK8sX",
  "key16": "27Q8WgmynLovaCc2XqR8NBxGMFQUYzW9g2kHHZjsGZkyjShYqFrH8oCTz6xsdWfpg2DBwbFWVBYYxBoGnvDJ3trF",
  "key17": "4At69zdbyP35udz7n3asFGLL5ttj2Mzf4CitsusJ9y5vFhgErw5pSC5HY9DQSE1FQmb4QCuk6rrumcus7XQfYKw2",
  "key18": "3BGCAgqjTLjpNaYWnRD3eKnvWF2vSQ58GrsnY2C8he4oCmecPiFZ2jbmQ9SNjZNsj8TrUarwvFDaD1uG4FxieVe1",
  "key19": "3QEJqjFh3wqEEHHxjxM7jcxEVMfMbauMPwXt7orWjdraFPPn4ejux4wvPWNVTjFzbALiAWXMaWycmAGxNWKxcTmb",
  "key20": "2YahNeyYtNrdy6FEVqzPDuGwXZFBsD5pyfsvE4uS1NVDxzXVjg72QcwUYHneBG74HdWjJ6QuQ1nqaoW3hxRD8PKc",
  "key21": "3HgsHro3Lwv3NVLaMFR4ddx9eycq3u1zKRApxMnWJ9GqRuF3ZcfnVKaipqiu9jcVApmWHMBWpjLJZyyp12Rzo4Jp",
  "key22": "2e4ynApzGDD8hcmNBiBGoRuzMFimcnT2No7SLTHutYQ53e8DjwaRei4Zj9QuxYP2cZzL78PUwwdSR3CbpRjmoBPL",
  "key23": "1cjLLgcijoqhNHCeMJPetrG5xQo3w2G4zp5egaM1zveGtqggCWwYDMV7eripSBXnM5y7nioQoHYXWEbsQTA5rkQ",
  "key24": "4iXeiFU1ygxYd2vCXHKoFYdk8sF5vU3g4WQET98u7QPh3UGFTFz5E8VGJmVzy7FaPf478RibXg6XuWkAfiShuTyN",
  "key25": "4XZyG2HFnRSKwdFFNPeZV2YZyEocZ4c3AX4fDu2AeW2KvKH9dNrHwFvJ9GM77StDVcA6BGNoYXH5TPPHPJjxYpkR",
  "key26": "gmcaix2iomFEyWSzMLR499pHzuWU3SF8nmmovLiRTNntqP8qkTx7dBC9gj6sZCWsvHfPGAus8zkWuHR8ePVwgpJ",
  "key27": "skB72YBQnHjbrL7R2e4Fs1vU9fsrbYJaRcTXmkhHKZbtB3zLXKx4Ji3vBKyCbbVgZ6MTM7WxBiAoQkJwo6Zj48s",
  "key28": "3hLsa6dogApRceoqcaM5ZTiFgkkWzaKLxuKbHmTfBdercDr6Pf5VjL6tr64Mqt64VU9ygVQQxgXmrPXEfPVkwUZ4",
  "key29": "ANPdvHBwTKH1wQ46PFp8MMSfxLH4qe7y7Gi99zZhD58EjxWN2FV6d9Te7jTYNYTnvMdtA5mBdKF48YHVQRUPoQn"
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
