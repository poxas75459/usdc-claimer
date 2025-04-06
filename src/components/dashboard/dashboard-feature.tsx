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
    "2uBaAkVSN1QDXkWgUbmBgSurW8CizzHiVc9jMM2utQZYi3QjvtZts7fakM9DCGU21b11t8aY4njXzaosivGvYiUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYNexmR8ihpkL97v7cFPLYtfozcJHtgmDnHJe9pRorTgiRiGiHYG3aXerDNTJkobMAgbYm3srcjwHo4GSxjk2nL",
  "key1": "4BKczZgBwtFXUVRbnKw5hyAE8xDSsuaohg5HH4M5cRZNZbWa3FzbDQpVio6YaCKRvxu3HPbA2vDAaEuU32X9a5dD",
  "key2": "5ehop8NrVxCF2Qm9uCGGdVnMUhKvHYq2YkeGbh6p6mMXFpcztDrEcvurEuTZzDdeWFVc2ibFPDzwHJtazmt6qnPK",
  "key3": "56RChVXnsWVP52rLxa41n23bGH7FPpms8JkpdkfMuHkMs2WJ1nyA6fz6hwCLb2vtFGkpva6oLaXQ3yTVU3Z2P7J7",
  "key4": "3ohxHbgsLNkXBJ3FinRRd2M6FeLMVVZyqRhcYvoZELwKJViVXwqafbMKh5QGPUSy534SSqWoj1EfL4LavsMpLjfo",
  "key5": "2ZKjRMzK9Nbcc6cs4jYbrEFy8hi5FpMSDiiTmL15z12vWo5esVNRGgbxwSP6j78Wuni9qdgXvaXMcb37EQ9NAXdt",
  "key6": "WPPDT7WJd8qSw86kRwDgPhCu2KruCsZF75vaEq7NG6Pw1BkRkugUNyp1xMLvTvkPeM9mJu7ssjHCnuyGa2z7LT8",
  "key7": "29mPm49x31sLgpSv81htq8H7wzwYBhZaK82rtxGWHE7UR7BGcdRKmdWbmEHEYn9NWD2dSdBrrkTTMJAEMDUiznmb",
  "key8": "2Sr4cDZ3QDz5P2REYopXQz3bau5CMXvjqfcftYJQqPPkc2WTuZDsBVAFNs1qGntTVaTTNiVh4Ffk1sxP3V9rbYRA",
  "key9": "3z77du94koE7kK4fNFAAmoWWJLxvVoXTYj9LjnE8NB9dt9rjreZ5nh3TMAhfheZ8eS5EFY39MdoQ2pppMkEcZ4HG",
  "key10": "4v1PMqd7WiiRX5yQtymGbuhAhR3vraEBc7gJUihwzx6Dt27JnaypZ6dMn51GKngd9xEWdUEpC4T3HRmRS3C1X1PP",
  "key11": "4NVPZPTdbekijAbco2zKt3s9DtBgtKFqRJUk2YdtbqZ56562gbp1KrsNqJZXD8EYCyN1vY2eL2JF21yHX2dAmyJT",
  "key12": "3gyxba1jRvKTJivfky8bLoBhvQjHUGR6CFN1iKdaJiFGGvz8nCVqVg9Ky9cjKEFbZG5cnjfoJ6dMB5Gs31h5ZgSy",
  "key13": "47nnCXU7u9BZt5gZo3fmtmi2wUWrJTpUNuAbpzq6r65BAh2XY5y6pSrMisPahtk5ydH8ocNCh3K4Wkh7vk3f8x8W",
  "key14": "YfXQmmNo4wfwaiKnoNonkorws1k2Y8SebwZed5Cv7wuvsFF24tzfPmZYQuPAZFaTSu1ZZXZ78hoyWcL3LxJuuPC",
  "key15": "4JsLFxzDgeNsbEF4qTRv69Fmb7d91ZLd71zFDMygYW8djJLHbjeppfzakQVVN5hkPX8vzfH3DVCY5f4aZReYdkLV",
  "key16": "kvv9SzKcjeHLCNYr874TSwRjujDAVEBjdQ5m4bAxXvsSmTowTeYdUoyMrQqBMNSKZrUQpSXqVX4uus9Eq3X36sC",
  "key17": "2U5HqdK9MPM7Q7rB6b8sP4dqrjoENYa5FjyjMBvUva3gja5x8XbSmHeT9eoWCHf9eR5ESk7cxHbxqpmDGPHkhRvq",
  "key18": "5TVsNRgcQfbB6yfnEBtT4W1dbmuW8bXKCPNNP865WWSCU4eTGuAW5pT2ZdD1xFtJr2YpuesP7fhTc7KeRAsRDprV",
  "key19": "2geXeSnxSBJnVHdgWc8UK8s8qQWAx1Rny2rG1XfQoWS2JzgV9dwLWeAhnpzFn5vpAQpnF7RPEoRwPMA3Yff9MSAR",
  "key20": "41rHg2Y2LX38oVHNHr8LXjvyJgL7UmZEnYAqRUnupmRtPXF73zGTinUgSTPcYQRwjg5jgrauZMczUYAEQxHKqpaE",
  "key21": "48gPknPu8qceWEWpmPEMjrkK1X6AZQLh4suwjsVakuJoxN7jWrmyYKgzA4e9Hia1Bt5NYQxW6qe9fge79iuReFXW",
  "key22": "2bXVqgeZqy8ZF2ZYNhpCyJjqfxwBKYRtnMunNjMDWC79eJvYLbDry4k3KUkzUBpojP5qhgUN7taXDFatgjTxyMGs",
  "key23": "c2TYB9RjALVuPHKosAwHBerc83BjLEqxaCH989szqx1dsCfHJqoaaMqQQVciNP3rUoKAJ59sAmAMNEd1mzNM5NZ",
  "key24": "23KoCocjdYNTt5kp7m2hdNNAMopJSU7x1ERp64zByoiQG8iMJyeCTuhM1xizym124JeQMiuyMhPsRqBR25DpkHpd",
  "key25": "3Zk2thq6J1oakjra3b1pMGGtkXqS3bfrjxwkvCo3kkfT8j1J2pDehp7R1a343Hjij5ynCdBRLzaQDBuDbyiLg3sh",
  "key26": "21eyAVkGFBk4dx7RPch6qaEoyDMz5YEYqV2wL6fwvSkfn586hzSQfTFyzvWiguxpEnGD4oX92E2SPJ6GNMuQhN85",
  "key27": "29JfisFT4xMo9p7UYraZY7Zt6CRLBMYufGAr5XExGYb7MjBLi8QsfTjYb4N5iGXpeSMEwD4Ynue8SG6vTkgjyTYV",
  "key28": "2uWcULAeWrCftgfXViAghiTdsw5Kpx3PfZ59GXzbegBWELLUDtTs74v7jMguEnCyUo8oSLyomPmy6TRMViyhC3eb",
  "key29": "o6QsvUqzCsnqWzbgvTrzAUyggSdmMYQKDogf3fd6qEN5F3PsDMzCLnVjQh3FFJMMNg4GizBEhKmxKQA4XcyNnpE",
  "key30": "TkreYN9vxkYPTpruJWygyHzyERHVXXhSUFgcDcpoF6p8iemh8ucbico23SPC4gUD66MEPEqmfqZrFKhvSuAr4yH",
  "key31": "4FGVsyQMJzXk3oY4FhB7UsM3Y186DAdQwmM3g2Qd1P2n6WYM1dTA8TD4L9NSTjssBJbymCBuHzZBBcqUmRXDzUfA",
  "key32": "z2fJumAXGLK8uWRHQEmM5dQhUD82uP4HCbGW8jWUY1GpKjvnzmafK5Eqzc6v3J65JucWonhkvEvFpmiYUc6auk1",
  "key33": "1bWxpkEac3bZ62KBxmDGsbZ5xtNEHnAeQmwmGC6f4JckqNoxWxZByV89mMQzv6v82FuYUvo69mnM45QB4boicMm",
  "key34": "4LjamtkGyjicjPtLrf5HU9J5NuNpSKFGm8qPoPgxLsgumWW4UUtuR5EC2qe9mEUpbBEg1kvD4JRvvSX6JtC5Rh7",
  "key35": "2kE1oDuffxSZqaJjeybepoXpjaFUFKq6wBn1XV4A4VyJX35EZR6Rx1Q16oAEUqbrJ1EZMt5cKniy5EcqjEmn3X15",
  "key36": "5ByUYiDHchwF2jGuvdMaKf8xFtKPWtvhRxhRpZKUkY8UL37GjjnyhuUVSr9uoMjHFMB82a17xmG7n4CwnavHuwDq"
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
