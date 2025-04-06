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
    "4bsswPkcTNRamwUe7HumJe6w3DmSjxSyJ72oSJm4KLW2JMsMWhqmADNfkrbWEJSeh2yudGBuoPVu484BzaSahE15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrD7iU8gt88GnMiCEeLicLrynTSgk4vjczXVmrm8QvfqYwcLmQRWnkrprVppzG5v7fP98KRkRbqsGvn5YF6Udq9",
  "key1": "Mfap3NHTWPvAUEdyaAxSLzymYVKpQoSsgVK346yXS2jBG5uqxRgUDNyvde6Q3F9UKDdLnJH3VqGPPhpWLFaihfU",
  "key2": "2bn5TSCdtBEBu9TZGAc2rcfZSm7rTM19xV9AhTJd6DvEfRGV1QEFnfQtnrMnCdK8Xkb4eA15yYhfVvUb4bJAzcsv",
  "key3": "3893FTYUq85Qs14ta8qnNGGT3YFpB73UyVzERFNCBRCf6vfXmefdSmTjrHjmkXMq4xay4wFDhiu8CDwSwdq58cwu",
  "key4": "4bkvySMjxPiUgJG7FfDBZQ2oCk61y6hqrpe6kc7a4yTGpb43xxDhtdhJrbE6HbrnMM4yznJXwZHLzuUCujXMdXN3",
  "key5": "3SkPcap3SHJczSp3UJqXHYpDK7qEW2aboiSjs5fW1A9mh21RTVseT45srQEyZXs3TaiAUy6G9esgP1RSqWR8mGP4",
  "key6": "61xV8nLopcfdgTo45QNKSKsfYNcBT6yF7pCBqbZD2YE3AzFExbYuqz1FKhF1gGeLxfHfgMYebJiU42fYBBXhDyeX",
  "key7": "3ZYEZBdPk5ZVzec8DzTfUpDcWWVEJfxKUcgKqY8BDQ3CvU7x3vVCW6KJyGgXYaSyDxsvSXXt4igXzuwE369WbZJJ",
  "key8": "4RTYoyeKXiSRoq2Rn2coDqXkNC96uUMr1eGds37eiGmoYWxuJMMAG3veRNEzduif8Rco2sEH7PT9Zy3vURzzLpJr",
  "key9": "pgh19Ey8A3gSFy99FQFPCxqQaht8T2M6vRzioMDDxnFbP1Cek9wbE77gXXKsEsRBNqbMHgfk1wJDCJS6cu2NZPC",
  "key10": "5NicG1gwvPTW5YuX8Xrf7RAmkAu9dPguXedEUx6YANspcXXuWmjXzCWPQPmabrMtjyau5JqiD4k66GMLtbXSDJRQ",
  "key11": "2h7dy6Y5iNaMahnthG6KU8CDXe2qFjrs94xLJrMTDCbxJ6WhJwtvqCov7nyk3kZzG2S44Q5bVyhi7nK6ctVatwit",
  "key12": "4ES1GDcMC31WebnjBqKCD2T7RMKkAYt8bA3VmMqKt8Y19MKcCTYiUuejXGoNjQxQ5ZBTUgJ11NvYYDijbf2uGbB3",
  "key13": "3W64eGmTUAEaZPNVKhXPoTFKZZFU7GuWjptwBn2f4CTgcihZD4MnWmbMdySAR9myPZxZsUEeAJ6UYEsYB6kN8sbm",
  "key14": "rZWfJEkSAht1aBAKpECN8MFDXsfy4W7asBcrWZJ8DkeCmPCeLESv2WZTAHqeLKqmpYMXQsdeK5uRqGZjjuzHbxW",
  "key15": "5SEA5saJcDpHH9f86RUxPskoRe938VU4LxHcwcAWgKD4VZQKTMN9XECQg9ApHBbUCt6an2GbYMoeK7F4gmiKNg3W",
  "key16": "4LAqo2pK2Nj7h5jj6k2kFLqhVP96SzoQSt9ifQimJ6AmLk4w53LVcmAUJG6kXLXxqZ2AAqDA45R8xhyZeJ1fa7hx",
  "key17": "5Csu1dr7P7RNAmHhb8rcjkXAc6t8G7HKf4hpNzHGGRU6wvFkgKmWVmGEabusJYQpHcwjhrAseh784UFb3V5a5bjp",
  "key18": "3hPhUQDpCwQzaJ26rPc3GJp6ni78PrbKkdZBqtoJg5A9Yjx95CKekpERxf8vYHdrX2Yq3635H4XBtCzVSXVCcJEs",
  "key19": "5YJ2LAFD5L2UJdcAg9eRL94L6kTKFdHihH8QtnXGHPASJPcU5XgGhsXRsHLj5uCTx1QxgKqpvYC4ca8uMNQ9vJzJ",
  "key20": "kCc6sE4y1zkyfftoDvUDPrBdKFK3XXVEEHnwidBNmNY9UbamZsDnw6b9SvxBX3vxnDeMaMVLkGsk8JZzztAZr48",
  "key21": "yng3xrBiL7SfCoW39zhWYVdPdhHuNqkEEFUwombSQh6RcDy95JBaFwBzPbhu8aZRTJBXYRQnr25DaVxp1WrASuF",
  "key22": "4QXE8zDUVPQjVktiGEi62tSQzutjJoM8DjNdTN3YGwjq5UPPt23P1JK4mR2Lrgxe375siXd9kRmRfp5FWG5BAkQa",
  "key23": "GgAn2htb1qyskwEsof6B4W2kqBDb64dCPut6C1NeG1VatXASfa1biHpoiZr3ZruSCu2gakmnzQc4XT9XTWK5Ttj",
  "key24": "3ueBLhK64YcXGfmU9uuzcrkahie4wQbFYmXTwjM2UXUnJgeeYpM9subUyjqbCWdLzY7hKXoqQJf2vzHSTSxRXWxc",
  "key25": "gKegweANHbJP4uhS1Em7yiJnZKNpvDzCaZpAMHFNVs54jx7evrgkPdLMMeyKXqYqBiJpXa5XDJABKAAmt5Ve9Xg",
  "key26": "5ycaoK8JfRfwjcgJp6MKMwUPVxoeo1HDoFfJany8rfaZjQapYjMrnpShMLWXynLcUvFJxV91cfjNhjsWzgd7fyZf",
  "key27": "5BGNyvMDhtH6puwmeS6VycAmAx4LhCrXSJymPjvTdGiXzubRvRxUJ8qm7pMZUX1AEDNjXMq52mYJ8yaYohgMCMy4",
  "key28": "3Qa18HrTxw7NADs8Ta9SyX7Ebd6mjCtUJXqhC7dbK5E4G7scX81Mu1tte7VxhvCmDS1sK9RzVLWf9S7FcfAhQMZR"
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
