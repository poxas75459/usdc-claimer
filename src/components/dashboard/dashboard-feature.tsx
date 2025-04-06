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
    "SaHfTab7uH9Edri1DPRMqxWBi5fJ4Do4NhV33F4hjQV4UnorzfEcsRU3ddt3drjBu9AJZGGQMQBPKiAW31oXNCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KyKtbS28sS9jGD3UdePytZqnX3ZYRshueZX8q9xoDBECLCd4To34JqwmxhWCmnNSHAu5hTL6piZvCkspv21v8L9",
  "key1": "NFzNTUA2HsstJvcSxhNmPCUt9kW7mgxM1XQsVGuZoW93fQjCNsKLnhiYLESkyscPAi3gddqH9UN7M5TxVi4vDz6",
  "key2": "2RcgbuMuKV5da8LygZvqUdTW44s8DTh2nre9PfWT6TjJ8ZuDTCXPiCMtVYuc74r35HWpS8gEeT59uBamBpxdjT71",
  "key3": "3vmzHpF3TLACVU8ea5uRMLJ7S2saJAZwLBFLLGntBREH5CFh7bx8ck6zQaaRihQQi6hNXVEwLNAn6kvTdSbtbJTS",
  "key4": "2fgiho8D1sGnGtXXjHqyYZLWrDNx9fr2WDKEHeEsLfywWPyj3BpZ7Md1Q7WAD7ba7Bb4VJZasCRBr4NxYdvpMWVR",
  "key5": "A1uJvkdANYQbHUFwMkCLmSR95EsAcK5uvHJxFH5QHrW9cZNBAFDrxw4f2K5ZH54YyW8GNkaEZkuNsimvSMHVZ5q",
  "key6": "oqSw8sXs583F4dK6y6VVS5ogc9cXVMWosyex7Fe3fdqeErGXjVGPZL6sZzEruCbuueLUCqMk1Y8jDKsrW3SPoNW",
  "key7": "DMYPycwde5sTcDQupzuozFJGdrKjwPxE4TMiMtZ2hVoG9D38R5zsT4dHWL3N3Tc8suBVtrCtP6rwzUXRE1i75Np",
  "key8": "4BXfePdpJfPiiwK4Df8RKvAgjNZAxpu5sJhfvqaF84kmh18gXvxhJSc6yTBJpN5irX4yTpmizZGTtEB7kMrzpBrT",
  "key9": "4Wn1Dck5DpbZFzBza7gSpgQhaW2y1s3vZtgSBC9eVLS8nWELqzWGoYx1NATKsJxscF7rytZ6QC5EWYVHehLUnEof",
  "key10": "x8SabaY3SjFKvADEVrJgsr3oHo2rdrJNnRmiDwGw6iXmvg5hhrNd53vaRiz2XryfD1Jg8sLqaXxRP9LaZA1cuVU",
  "key11": "5CTrYjGecRaN1rtpdz3ff2JwEP3TRxcxkbar1infNjtNnegwavrPmaKHVgr6Pypr3b4dMKU2EnGnjYoPk9vb5N4X",
  "key12": "3YPngw1D3c33NXH4912i1wwJUUqN9gxjPWFuXNaTnsbt7mcw4p6q3mWVguV2QaAKLg7NiZNszC8AdcqmPUv7ysTu",
  "key13": "2vGjrk5bBLn263PTo3uVXDZ7LktzVnLFrPq7XssA2nKN3rwKv14sVNzFMNawnW4iqRHb8CsxcASyohyHLjer8qV9",
  "key14": "5t5TWiWYJz2CMsScYCkMoXGME7uhdUJhcKap71AzdD3BfSevgz6pfk8NEAV5B92FX69vdC6P64KgSDvsv6uyNmMx",
  "key15": "4nJvV5Uof4EpYWRphxPUBoKhNAHXY4CtCRgwDRuC9wYBBdNvTJGP3uTU4b5uzEyUsFjaJe62gCVScWQhnU96eGh",
  "key16": "5A6WuqUKmcMzUiSqUCHuju2rmgHTMnWsFMFQAs2w1xHSaNjQ5DPUkxBVMnBD4nPpXh5XWF5RUaWWj8P7AoDQYBX5",
  "key17": "2574REoohwP82RgVx4oLJLXCDYiV9ReuFoh68s6ra91E5s5PsK9dJvoKSva9yMiToZJVyz1eGQu8EoUwqWQDXZPt",
  "key18": "33VcPgtbdXHohYHnpYNu8VjSkxDZ9SZ1cbxyNiMZB8A9Qp9KSgnECZwCThvcoiETyXMZzS68Y1LHwvmJgGpd7fAo",
  "key19": "39nfsE3kRQRLA6ZeYWhoKrkvTiXbWLmEsneDbBJbcV6UtxcjeWhvqT9qhJe8jfYZXJdxs7mF78wAYRfVXfAzVQNi",
  "key20": "3bQCRM1YChGPErejtfogsAHwoduog6mew8wL9Fw5yn7FoprhFz9ZnwWhikxBvRDu9ZhR16p8Z9U888ER9GJ5ZJtY",
  "key21": "P3v8DXSio2efViacqM5gvQWCKdHSH41uwzjPJjBYha8syJ1KPRgNrWY7qBfayFqpJzQPbRGGJEzTmL3GeHWnUps",
  "key22": "4jEuqz7GSZVZvBthed9jn53r7WkmWKmruHRER8m2TUQqbTcbXU6THaNoiPXRwPi6xFQi9dSp74DvfSsbRB5NP5xj",
  "key23": "5o9wiTDUm9PuJF94phPY36Pv1GuWUtXt29hjnpmYNrcaLXNojnFHm1c5Q5dMJSGayaiLQ59wDhTV5vug2z5T7fWp",
  "key24": "4os8TDfShkQBk5SKQ3d2kM5CedQpTsEfBxZEjbsQpMTYcakpeAVVJ1gw3aunRhPQwykjHzTfKV5orABC38npYZ1G",
  "key25": "4opHoANpj4bSHR4XLWch82pHpdfDRBTapzuwqPjuduCvDtw199NjgHaji6rjRYjfmKkqQZbCiZcYR2CTgjZWySrQ",
  "key26": "4qoTqaGZftMpgHak7V2wCAH6HVNCRXMYFNhvFwYuzG34EKJPi2MxQqqN3tppPfU7p4hSjnV1nWFQyx7eyRq55Lvz",
  "key27": "4886tdCexuaccWwvEh62aYbTe2RSJhwTAukt3ak6coDkQJXJ9K9xc7owLN7SXSQVPSc5wVQkiDbQKMapAUS1hGXU",
  "key28": "XasxpTNgyPXcaXxN7cazW57k9XxfxQmRqrugoHBYXMWrmffZAs5tDQhfw3fY3VGhU2EakGMxo6MCmjUwpKEfuj7"
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
