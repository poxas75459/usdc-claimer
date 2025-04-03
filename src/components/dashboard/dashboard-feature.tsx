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
    "5t7z6Qg5TSHtofMSM73Y2SESBEervuu5rPhRdJRdDum8dgZws1zvxrSBGq9rGNmggJs7ensVhViiPAF7GBT2cZGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAYPjibWM6Rrp2Cz4YnpAjcLCUZY3qkmBFz2msJYNgzvwPvYRF8uyD53JxX2TXRTxZ7hcrxjLB3XHQewunpQ6wa",
  "key1": "5nzzWu95Sz6daPinqf54Y8khFPXhdv5Mc9bbLjgrENAvN39V1i93Pmccv9hKJk1NgSorh5bEtB6wUXpt3kqTYMCd",
  "key2": "3R21Torwh965847Bu2BVuhz1FWfB4VDyUNLpj4SLraJSSMk2FuYNqkQfT1Bqd6qRwjqyKg7smuDJs3cQnnioc9ne",
  "key3": "5XP9ftYUmPHSdpdMFUDE3DWRCHerFuTxwrvTUHqah9aPXGhhJLDDsaCC7ewS2SrAWj9TjcLYvJANBXPwvG1bCcJW",
  "key4": "2qskxRoy9j1FQiiCQFxwnP455A3oGWjRmNdVh3NrxLY3edCxGRLra6R9E6NwZwaysoqJsPkHRauUD6FsNyzoKZCH",
  "key5": "otMtRJZNPEjNwKeqb6QCfLLvrzHrE927keJxLVGP1RXQ8kwdsTyoWG4VQdHwL5fpdF1866SpVRx4hXpBZ6z1KbM",
  "key6": "4VvCcJMbtKaViM2LfvxgKudLWzUgLXoNoCDozaD5ENMCkedQj8sHxT2CajhDHpPWfcyjtHZLQdbDtg3vxV5DogwD",
  "key7": "3eiZg5V4rQymRWUrT4Y4rSvMJjBQQpK1cConvW14jf3dC76nKtmhY5qAtM3LZqqKUzaAdTs16Ut44BMBccGtSmcb",
  "key8": "5E4CL4rQSZLe5S7frbSYvmKHbDrTcS4ZvxYy7xQgP4RDnXNXcUsfXPyKCamx4udsHY9A5uMfCyAT1RG45jYK469U",
  "key9": "SBuCKudzZBvSeXHptKrzYYWSjHBBRZNLbaXQ4Ho9eGFXiCmuFgWScDQWgAFuGkczMNNQQDDVQBATSQ8tnwV7Arp",
  "key10": "3vrCLdsw1rMGtZ1s6Nmti5CG7BVj97tcUj1ZgeHzMNknPPfL5E1P9schqgm67musx4WJiFDgjkM56Z5SgHHu1t9f",
  "key11": "4HzwWUNjPeRXbzJ5ZxKietj7af3L4xGCJXfixfK8Wgsf875Gwb1HDAmj3FXRKUWMhj5QcWvtDZG68rx2LdCbF8Ky",
  "key12": "3zfsQE5SDKtM3HanZhhyBTKK3fn4MjBNRmPRME1QRFa4m1ANjZ7HUXcZRundosFNFqoEc6qJqvdMgrhdFsP3U3gY",
  "key13": "5DNrHt3F8imnmjSe4FkdREzucsg6yZUqgFcqdPkqgLHL39DhxB82uGckQ93GuLbffukHmJFqpfJgoVEhc1th12Sc",
  "key14": "hzzRqH2u3C9DniZ7z4LhGw94TBcX5AC4rh9T4booacLgPKAjv1SL9fxGXXKKsRZnGqzN7Chp16sujMGsCgtuj1C",
  "key15": "2yiD6nHLs2ag27yHkiCakT5v6f2Xs8X1v1g4bCQTS5LjyMfxpozBCov1bz3sasZYMPeFatqUFXDRdq7cnPEHrnE9",
  "key16": "WiJ3nPwTRctbmugvQSaunHkcCB7ESNd4nYEUdRjuVC4jqt41shhcskh76dpDr2LVBPbscooQkyPV7LQZ7iestjj",
  "key17": "2zrMfoZFKZPv3kFFNotwCs1tzyEAUb4hSFYUUqqygNvFt2k13bCLMwdnT8saX5U1jCgUX5gaT46EDv2rw6CMYPna",
  "key18": "34UXa6PWqyvVT5YUGSkTWX2onQo9Z86skE9bEk11N65jCVNWgG7NGqBtz4aYEfzhwUib6SBHjYRbnaTJvo9mnxVy",
  "key19": "2E3YMtnsc5uUje7mqHBUWEqi4PrjTmBPkJii7gEab2ir7KZGYTDRQVi2dJWzDyzANvRwiXG1vYgo2Ds371q97Z2g",
  "key20": "3tCiRtsUgCQyJgPU5ygPfkRFJtqvQhy4SbPMhjQmM8E6hcWKv255ChMmiUwCsnY8MSd9BwbQquRhrGi8roVFCRb4",
  "key21": "3K6YZUNmVupg9kMWiCekxBCctxf986fwZjefkWdxx1nbD71PukQdAZzGi45NLA2jzcdubyDqKxJjjWTPojLWxK7z",
  "key22": "5XGUrNkkiodANnv39RCvRcdWtYND6cufiqYQauHCiYMrRMToTDLyMEot16aaooHQD6qjTVkXJSVDsDcvkVNQMibG",
  "key23": "ehhZ9p4aoUaCBsRH83b4jWybANkXmd5Qi9ULuABuSbXB9puPVV1JP4DN4u85J9cNPZYEYtP1YuggrReqwfjZbyM",
  "key24": "4Gg5c4xyELr1aATAczh7rLJweXJKNDN4TPf29SctoTj1qMpd2NY4FCwKKJPMQNPj84AYQFQiTe5m6FZNtg9DVcs9"
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
