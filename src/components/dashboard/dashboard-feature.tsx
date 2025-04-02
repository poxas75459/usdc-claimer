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
    "5sJBpWrr6c3QXkvAVqabf22Tjrfn1qbZZG11w59cGAEi2jRPS3MjYpamVHnB8b6LohicwDYDmWzCrK6Bj8czerQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AfftjjzYTdk7qzCoE47Earja1chnTpFYQLMNFS5s1nGBWJUj6V8qfe6u7TkrTgTUY8PnhPGg5T4MXU66hmCW6f",
  "key1": "3kxruEw4dTBjobZipqPork8Bo59GK6PQyrHcCYciqynA3YjLdfVqGCDkMRzTumcRxtCdXN3Wx5Y5P8aTpPxUFQSz",
  "key2": "5Fxfgx12a1nVUSPbyhFeiufBUituFAH8wE4xFfNgxxkm8WhQURQrC1RBTnk6Z5HVmkpxy3VJLrkhtUnkRZw24fMH",
  "key3": "3YR1G3pNzg4X27fdkGF4skH3coUFkirchjyvMz7579FqaHdJ78moDXzbBEx52sv2CnZoz3ZjuBP5e3sV8tw9D5WH",
  "key4": "5DZaP7aMCSMXuhTr7x7975eAjL2fKBx4oUYXBZihG8mQouzr2GEGKEVSEazD5vs1sY2TT9u4oHeL7U8LNe86ewW",
  "key5": "34grxtKAp5dSPfUx96TiwAc1QrwU44gDeYMYPRBb6vAfgKg6kyAGaXmjUrbdPXbdbZSfA6ERpZtso9dQhXuQ9ucC",
  "key6": "3Vef2CPW9zxMRV7CYYxht7tguD7bniJYQUqhHyG1NBv7XxtMARcNpHTe2sjFnBFacB6byro4G14ZCnqr3XwP29r3",
  "key7": "56gBQWdFehqyECmcBbuyD89iRYs4qkvA6k1ZdQHcPibiAM6G33x89Un9XJ3BM5eJccrwr7VR2TFZqFrJgBBugvjY",
  "key8": "5BiUKXeBK1deYPkMk6XTWqkHpqPBmARxTeM4yoCrDcgGg81FrxmcFiQAVDA7PWNBdrJq4bghDnuyQKJLbzP9TtY1",
  "key9": "2uQMfhvAeaDjPpNZeHCB1MtX567WP2GKvvw9iLFGDu3EjU9hn9Q1gRGQU25givTWc3axdAnzpmAtTUYtG53WkLWF",
  "key10": "2PmWQfbbFdchAFeRyN6JZYqiTu6PH7Cdm6nnFqrR3D2KS5JBFcq3zGCZ12Mx9YDcZRMkfpF8WVu8TEMvbjmMH5LZ",
  "key11": "2WH7k9CF1ERKzqmkKcAZDpts7NF4TRZ7d2KxowCbBs3GRZvcCEypSjrCyTB1erhWeNaMzt2Vvuv5ng82dtPMbMg8",
  "key12": "21sDcTtER1rVZMFaHoHPXrv7CmCCSb2nVJCAMn5pW5wzj8zfB6L8k6t9AmriD3qJPkuJqaLRjE4nYLr98cXPVWpJ",
  "key13": "CSv5GzehvQo3DgUTeSqFRtbaa42vmhhU61evT3vsiPZAi797s6PeBj6dJyftqDLfso6xXyVXugRM93WsJxUC4J9",
  "key14": "3Z7CeeheBGmXC1WmQBAEicnJgnxw6dVSMHZWMkrfhxPEKgJmzsZcZppV2ZrZqRdVCWEVKUzBTX7J3ZhTdjop3pXy",
  "key15": "4RtmgM1v2DN829juChTqCPsbF8g8sfLeCpR1P3vZwb5R3onYGetXf4ZRTX1fkWEfhnCc7Z7xqdp8fQfASUJPMNu",
  "key16": "4NfuRkqv3Fc4Z2ikDb2YQDPu56rnTF9E7Ncp1hSWCvKjb3c4eqjW1jo4mFRQF9X64tVLjXLqbZHbthZV5HoNVp75",
  "key17": "5vZc2d2wC1FrgXv2iBBB6zM3jcZQGTJ1i2s1aY2DiQUNs7LGZDs2CUgMtEtPvTyqNDCgfK4G4ypTBxDYKnwesXiJ",
  "key18": "fhZmg9W8yaAd8yCMpQSCqrCw7sL3hxv7LUyesJbquikPWXnb6pTGmuUSwcZPTWmgAjwYyb1qJBQK3PvQHiqs8Zp",
  "key19": "3BC3K83Lk7uWP4HhwttJQ1KterbFxaAyCFEacThMmU1YdFfQzDX4mXdiL5qcqLxqZKsu9S5xSg3ik5brALrG9Q4N",
  "key20": "34o64u2ufs3CVA41efMB4aVxkL95DJdb9aoQsNaKB8sFAfBFYgJaDTUM3wH8gpRBcXcXmD3Uxn4qrtKEvSXmgy47",
  "key21": "5UaWjFWwKSTUx89aeoUzqCexFgEzPhYSAUf43z8o54Rs6C6vf1o3mEYMNHasqx1v8VZxdZSC2w82GCMLwvK4J8z",
  "key22": "3C7hxRHC1HdG3r4hj1WBghYK9jrXwG7D8ifKausEK5EeXpkeaiLXdqqModYRhN63fDXYGyTekJbsDULUZtgNCjvA",
  "key23": "2XZizoMr3M47dcZgtufWs8wE5VDSnHU5o8ZK8BrKoaowVrFw6GsHuteHEXTLPiEStCbLe317b1NGDsjWSxcgbD5Q",
  "key24": "2qv1zqeFcgMsT3mH9oNEyKrqrJNfQ9pZEYW8Lf2Ghjyr5kfDja6RPUnQJFVMPuR69FB2bPsPrx8Mp5bNS6pKETTR",
  "key25": "ddaXttjE4sSXRPkXvCndVPTSniixMPNuo7PMVVk1tfHu5jaKGubzyrncwbCyeQ9r4MAXSKzWXfHQtR7nWey9e4T",
  "key26": "3m3HfxgeyNiaLih1UEGkff8PENmPzNJyZ16kgEh87UQcjQR8VBYzJ13yRihsomQiNJ9k12Rk4FsR8sFH1jT3Vf3k"
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
