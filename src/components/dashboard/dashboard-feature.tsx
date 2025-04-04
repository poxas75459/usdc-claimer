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
    "5h9p4pPK7E1c4nBFTSJHAtsxoZDF5powjo9a55pRo1NuF8MvXrso7tZ46gZXDghUQja6pbSbLrnBHvEzQQmzKCjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D46fkhonPZxQJqncTB6QbhrKWr9khFodhp9XaTVVC7wNK32jeDEaQmnPqBRbSmXooQ9LHN3D1gNZhLeNFUuorJF",
  "key1": "4mEDCaghwokNKZ6mjzyJBKrbzjwHQEvgw9ewRyUBCX9QeWcrVe15jVMjEP1PgXGfC88exvsFhTCN7xxU172m9K4p",
  "key2": "2D8Kuff8iwLgAg9BCEiJWm3eFN8irMjWwfgQ3qRBnHUtshYp1sc7Hn3tsZRgoa2KjmGrP9L6FJ3iLKgMjvvzPKzZ",
  "key3": "zeR3xsjD3tatECftKaPp9D8ju2b8GGrpqzvK9Ur7FAa8WXmauBGPVBuF6Y8eHi8AcppQT9QY1ajyEASSTwuYuVq",
  "key4": "VC7zJaJZP2R4iUqKu47qWEyJfPqwUjQaqExY1E1n1UHso54YLTAHapgVggAYwc6CxvN27qL9eDZp9pAHMyzAv4i",
  "key5": "2FZFF11r3ZTVsNUWpb1JVE7obo1tKx2Yk7hvVLmk9unfunYYTviBNSinV5kxFsJPhNCtHwX5AX49CWS3dJW5gky6",
  "key6": "W943vyMGEcKqmDGPymHwqwouK5TR3MLw6zqovA2uPUe3DKbuDDyxUKHjoyaRi4S2UaXv9mas4fTQDd5eEGDefbA",
  "key7": "223WEe3cx3dEsZXhhNfJjpdVEvQ1cxm4ttAuWvSxtSikRucrq3ByDjZh7HLyidiz87tgEUY7hm3unv8ZFvBeaCoX",
  "key8": "3uU927ChY4pvYCGbJptT3kSbjGaCAt5RGN5154VEzq5ibjvtXriGks5MUTgC8e54R8EJ25AT6X6moxgjCZhFaLwE",
  "key9": "JAdKHY1qmiWU5Z9WXfXRNiKpbAUzqDpcouHuhMYcBXUgyYkWH31FS1ZzZHzRiLQnmJkoDfSEa8tDjRTR2EV2Skp",
  "key10": "NMNE9JMHpBpjxnZ6jCZmRn4eGtKuBPGBk8CNt6fzZgXkXej4m27Pir81TWkvReBJKgyVbJPrgQSNnMrEmbdqxLk",
  "key11": "4piRZHiSJLrYLE5QQFikr7ww8r4TPdGqi5Q9mg1p8KUPwuuEqUXSvtR65KJ6hafAx3C7UaW3Whm1EzBqoVkXJqtv",
  "key12": "XRCmkY7RspxMV5DqYTsvotxyd2ktT7UjhDaASJ3JrfjVDiE6cj8cj747sGk5uJ3PvCdQ71B1WPeTH9sTkhy7gAf",
  "key13": "2oCXK7AVvEmYumvn7UBWTVxaFcpAHGqxexwNG4DNpcer54t1jmBeqkuatuE7NEDFAjEjRtDexaM5wh4QKRTkcfwQ",
  "key14": "1cRPUVTc3tzFYCi3hSHBMoEJ6oP9Svs9VNDVwj6TPSkan2QWSPeEmgGWZW4dZNqW3QuTvyqehMqiu7qGiYvddfV",
  "key15": "57PYWU47zF6LJrYokpWybmFXHzy847gUWy1R6pYcWxkDnUJXiAW32F26matpjcN9fxmsk89SwvZGLXAr7bhfdhqF",
  "key16": "3Z6e7WDqbm2qyfuwDHao9wZv9gYxH25ES3UrT1bAotechikAsWAkgviDTMEyyC8VP3YTj9d1eqYJpzzVJsawHQZF",
  "key17": "56aVy6uJgMA2c3ZFXsQSkrigHeThtqt37FrcvH9nCpALSfamPatjedJ3vq9qACQShd4Eu6N4rLnUAA3JvPqWfYG3",
  "key18": "2oVmX3NXwNsdRMGjiEYZ6sXSvxqceePTdo67vUyPSGZwEXEKZS6pQqWzm4v7Eh2vhmseHJuMJZM38qp9QCvBS1tz",
  "key19": "3XwhtvmPWmEVVZx9GStrN81CGELpyrvB1jaWXQXyDddmtwkoW64GgRrJPriLhMhhAANALV4q8EgdQa2LTCzZw6VU",
  "key20": "2YdixbwMw1RHA46Y8WP7g2gAVWotGbc48GBhiCALjuJjD8YXY988i8BAmUjDChRXSkfFVPQQwAgGuB59zevtRSvi",
  "key21": "5WFn8Ccv9evPSapoZ2zPnPW6u26Q9GigkSW1oJbekQfD3H735DfNTz6mqsoTSP7icMYxr3MDHZTpb1HzXWBBSoFQ",
  "key22": "4hiZtBMWdYwHcp9phUnBj1H5Ks4iPQ6dsfhpMpdjq8PWYRvarC85XUuhhrR8GcaFYgBqmR83hdx6hT77xVddSxjo",
  "key23": "3w8bKbxK1pebRaAftLFeKaHgkmpumX39vZvR3sjjUCTxf1KK5Bh5V12CQHeXiSMaDoH5pTpheUv9Gi5YDhtyQAa8",
  "key24": "ScvzxjJxqtTo37QGkVafZ1sqSKpgymNdS4umFR8UZ7NstC6VE1UfBJaMEqCjL6GJj4oBE56hir2S74a4FxuDYQt"
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
