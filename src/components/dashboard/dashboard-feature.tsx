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
    "2rJ9NAVvmhPCwvDTSDcZBqMUXsLuSA3iRh3ojAWKyU47SVU527MAghrZMyosEar9S6VRdrJunif8AdWDR4mUt6VU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFc4wWamHHmqHyQhZR82Tm1t2xKtmAbJoHd7KD4428zhLykQ3jjagsSi9TZWNfuoUybZ9JMFuF7GuTuBsLLkQ23",
  "key1": "64dos5kgGCAZb8ukhhteK1sEZVF77JwuxSzpfnfMut7AfoRZvQFpctToyCEkbfkMkcCCB2a8xCTbnzePKUrUJYxm",
  "key2": "HRVhQ775wfkup2LBx4s3kc9caiVSTd3tErMyunT6UkX11xgZfMmxefSADhsj5ZtLWHcXkUhaR2C17s6WkY7HUnj",
  "key3": "35yjgsYfKHcqhPZWXiJDZuXvEd9JxnjFR75gyYBZK9xui9mqAFkotziVT2LuBsPFe5yTi5kMxnhvYnUhvcKPsYPY",
  "key4": "5BdtR5oS4M5FJZK8qJiktBirRGALtnTGNQL5KPPN3d9RcjUhwHQgLKwZ8XeJR3sigKrbCcGfbkb3VtrzhgEEoLLC",
  "key5": "5YQvoe1GHBDkUixUVmQPVnigNjGJpNzreFc1vqRC49CgRu4gacSuZYSsmyLgPLdjMV6xQYpJc86shNaYTuSnBTHP",
  "key6": "4vqGaUPTfccC8Wc64NJk5r5XM5soXxzo3Fo4oCV3Bb2ebcrp7pYhcmFzg5Lw28Tv4JFdCUuFk6rVznxfZwQtD3qp",
  "key7": "xxrLG1N2tX8XYh1hqfycoXQ6Y7yXuZP7sST6VqVESqGvh32AGVFFTnt1MbDdRyJaSHbbWVbBKNnTdDSMFa29uDB",
  "key8": "4ntKo6V5EJWCs8VUTtPZnBwM2dr8J1y3tkeiCiSEZgvKDwyausfD6n9wSKPpe2BKazAVkyXNuEkJcTRa1UGAtfQU",
  "key9": "2seYMNmY11qsqHWHvALJwaGj33Wtz3gwUj4ykNFeqKyHvqaCQzvS74Nz1Jz4c3GhvcjsFJAAVn4Mop7PdZR3SLD9",
  "key10": "2eRcFAUB2L1nABqXZCsF4GvCts6g6RJcoNA2YkAyX123iGzkQJ6vLuf35yMhHCHeWJD5EzL1srQPJcbJaMvHFgLX",
  "key11": "R5fp1jYpeo4Kz3CdmJwCtiLYoVP94xdsoiztGjpw3sFV9M5Pus7DSZNAr1N1mCvRYwVVHs6Hchpwiv4Xtix85QB",
  "key12": "5v9WURLtGDiGUJES1JVDu2xFe8EAbkZxcdvtpisGXwmnrACv7m6CrCXiCbYNsqP9vUJ2EQbJQ9ECkahZZo8p149A",
  "key13": "5afk3MfhCDuNxWHjx9btXuTMXaeQ4utvicqoR6S8f5vphAaJoSq5bBCBRjwc9CSbe5UW8SM4GKF8P9c3Z2u6xaph",
  "key14": "28iBADcRiE5x1Lev9cBVuoSjAFZ7y2qPQZ8vf4zCyJAS9TpG39J3Scwkh9FYefikmR1c62ABYon129Aspxq8oS7k",
  "key15": "5m9xPbx7AVHPUtccxVSVcNCqX6rjaVy8HnpshYe2pxZ8vMMiuh12fjgiNoFYCwHqA5w151XztH7mJ4nfb57rLfe1",
  "key16": "3kuZrFSVMJU65itTvPooUgLasqitPgZ4hxSYhVBoHoth7sJu51cgLSWCVGAznqtTBGBoizVBQGNWMpGyNfm3rN9Y",
  "key17": "2Xhj1rQh5wPNbWfAP2wofV7dtqKQyfaYr2UG1ZwXfxZLTLxgXCcAjbjHbtyMY8VeBQrTNmgLQJou7HidYPs2i9w5",
  "key18": "Jye7SxkaV1GAxTPnDnpAeLTh4YqkWpsbxTKNYn44dinCWnpY3DdB3yeSw8Kp77LdJbkZGMLp2SaqZ7YX34vUUoR",
  "key19": "5kSu4tfuosgjvK9k4t2wcoravpD53QCzuqfEn91GJsJR4GGceDR4p8xiDQcUe6BDHzEfmCUeuKspEJeQrH9rzg3j",
  "key20": "4qsLdA1W5RjAGJ4fR4ZAv1W9FvuFCN1s4E4PoKbak79he9Es8FV624bVrzRPzaRNqHg9aZYc9TSHhnby32oA9wga",
  "key21": "3SBXyqnzJsm1mK6zqF2Qp82CUtvJTKfyK6WHZaoAq1GmiPH6AR387FVk3Bb4ffTZN1y8kAc1hjsrzQ4VgQ9iQu8U",
  "key22": "57Z3H8ftQWa1EYmAQ2KVpJmNuesbYjKFQTACg5bvhjhANmJYGh1T62poNeG3MCEXtcmZaoZNNrjYQ7mxEbptbFgn",
  "key23": "32f1YV99WYkhhWqjU2KHkwvmPs3h8Rgdv7soyW31LskkhYZ6ksmPd4YzEwSqU4qTtNgnJENwZiNfNxozmh5WVz1h",
  "key24": "5QPDVSY78AzAwbjNWDqwiWLjUJqmQE9rPhuSN9LQZb8z5bAER7a71eW6axDkz5kpHk4mjD1BpbX4pLKcn3KuEUYo",
  "key25": "4mCymcXHihWMdh4M6ezqK8PDXvJkYcVYt2fdmpzDWuj2bus1712H6UqbRL6cVrJowE5JT8R2VhKoEeS8q14Neffd",
  "key26": "3ZZs7jyzHPRThZcg4CK3DunMwtmpYdTwzhieJTQU3ZDBeauESxgoTZVkwyBngKS6vM8ZGyR3xjgh5tZPExZAZdLZ",
  "key27": "5eVbPanPNx9ghY8EddcBTpDtcrLEN5uMVYPPJLXDioedMjP9aJ3PpchYDFXwjxeooD1g9KeojLfjZ36AmDT1nc7o"
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
