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
    "3ite7gHwtGybuiKmcmUnSN9pcoyZh1DHU1JX7UAcAvYiSwmAoaKrmJbiXgtCfEK5SN3FTtw5APZSSP4CbgpTMgAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7J1N8m6uCpwShNruH9N2Y6Xu3Kwfmmo7R6T7QYf7BXvMAuztEfofiq571fJ9T75qy9sVTAsKea8ZYUae8obmUb",
  "key1": "3oneYxBTWW1Q7EDk7z9iY7vzi9LPMT7fQhQ8aggpVNtHrLHeNWXdDnosJVg2EMygE5jcpF8PqHFSDnNZ6tq9Aahv",
  "key2": "4Y8RjJWrUqXsk8by6uHNdndbW1sJwQEZZRwLU7299j93aBw8bDvmNfDWYi3KdsezCoNFywYxE7ary8e3Qs4LBeU9",
  "key3": "5XZiL2YM5H2mJ8Ex7kmcktVJhwFMQ9k5XrLWpSoUUqtFzeffARzTRbDtakZC8wMBpHcv3YoHuf7jQwb7CUkEz67C",
  "key4": "5HwJjzgFDenvEjsMqQmqXxwPipYXQeSx21oaEpKbKHHRNZubEvuBdm7Bx9gG9EN8qcoG95bzqVQjtK8G7SeukF5s",
  "key5": "4PJNCeAkgm4BCk7zYDyXNAuhJ7TSbpYyWdf38jHgWs8XqB5VrUcvkY6BVUTWpVeLQtFbphECv5gBvzHDTicsjS62",
  "key6": "2mCi1QuuDGD5kNmzqcSWTxary4fshq63Nvexpieq9mKMjyU9BGGwFNbJfZQ3uMR7RLGa5Mxuvc3EZEfRjnMC7mrz",
  "key7": "5Gcpj8j7vwYnaihX9whh68H1RGk9BxMKYfrJXn1iycqdNd8zntoZuN81H1DHUn1tu9ZYvoAPk3gc4vjin36Q3KXX",
  "key8": "dALsMZ8ArfRW6cJwk8jDbhGawVptbpU9aZ2eCJK8w5WxCfwbpjdmXC26bdFgbfdXZsH2qDqvpKg31Kys8u9VR1s",
  "key9": "xtV1zfSvxYF3ovcqbj17EFhq2MGLLwaMkhEypwzzfkgWcjw78PxocNVF9vZuif89rjX3HVCLzqTFU2n5hEuzgDT",
  "key10": "2K84fJAQdktCA3Y4CG3kmxe9hLdfUMYJFFCwKwCKvYzXQZfqRYLJK9ted3HHBzkDjXzMeVAVcngyt8rjUGTNECkh",
  "key11": "3iDQFxyrhv9TG3ENwuU1h6oGjkkK5KYxUXSkWsXfN2pN61v37A2qJsJY2qmCqdcvnBE2ao4M4pC7EZHunZS3y68j",
  "key12": "MnQY3pLB67qVCTKwoTLpGtPSGeh53GaE39JvuThrWtyNr6GpWxm9nfNjYYjCYFRByjYF1msu5NkbTsq8zLU7MWN",
  "key13": "66dgYkKKiynA3ycXbM5Gu2cgHQMf5LFzkQ6PsQkXB1tc5aTmqXseW58pksimYcMyqr1ktbNRcxCYAY7fQvhKPb1m",
  "key14": "Trnmk4fyspY9F7RxM7YxFyq4ctsk5xufsV2PeJqaQKCa5xnEWxGnbDKjsoaHPo36RYF6dDmMPSCt2nb2BCoyGtR",
  "key15": "3LhAbwtyxhYhoCmRhAbC7Rh6r5Hd5tnLXGdw2Jj5vQeQeX5ARW7VUUqbW7ou3vB85eRzpaaxB2MGiAWr1FWdZh3S",
  "key16": "5PdZy8uMGGwjbYY9eeRQZzfL2CEhSCUUCba111hDJMS4BfsgH1cCuh7npa46CCTuN3C2jwvqeEKMU2foAVeq8YwM",
  "key17": "2o4xe6kxdMfQVwX8EmJPamrPM5xVSnjeh7NiPUSJerviY245bQ7aBMP4EthXcztHc4epS7cDKvtpAFz6A5LvazgE",
  "key18": "5rV9DjonGsYniee76djoAWWCnnXRpanqyKq88Ckg29CPuc17JUu41cEixyFoBcF4crPGyXzpHYLGazd79LifdzJX",
  "key19": "2xLQN4yyVEnRJ1v9K2fVwZUivw4iPcyKZWLJ5nrvfEq1N13H75WoxSVMGN9US3PbTZ3VewdKb1wTRHojdPxBq1Mx",
  "key20": "2MQYB29B8GjoUsFFUJM6WZB3CiFcFQTP8VrwZ6QnasLQLxy9E1eNUoAhUH6EnxpQ5F4ustLzxambWoZfH3Z5oZ8E",
  "key21": "4bzkyrBYQDpGAVRrr9ob8WTjCAUsu1N2itZbpCZRytittqsmEvGXAVaC38ETqx8D4iGPEbQYe9dEJHPoSKHWQcPN",
  "key22": "47G8QaRZvWmCEwHcwX2nuj1h25B5FtvE4ouder63QKaCCrn4npTvqGKo1fRVQoUSMk4Ky7LDpZELxVWN2s9mpmKo",
  "key23": "4Dx1ThkSPCj3AcGb5Jj4kQu2HKQG9yDaEu4UZ4HE9wBfAmfAZ2HXiBQsCTA5wDdcs8WabuFPYf9tMXcF1u1akbwh",
  "key24": "5w7BRkfpCzp27ZBK8SPKyxAfmXprsyGPSrsKmUotXA7CSJxFyat3QTASpRwy2c62ovE9tjyucKK5VNVbUoL7SZrb",
  "key25": "uNpUseaYw3Si3exjsKskjfSxs34gH5wR5qyHJoJFdeWsZqFdLKLq7kYXU8D5KVqQoUzbgif5C2vAbhJdbjoHCjt",
  "key26": "5L3deKvELVg9bxkMWJqGzT7DdgsCmncgxwH4YVF89n1D1qEqzSWJuDms9AsMDeu2VZyYUjCn8KBsciBorkjzjsig",
  "key27": "4b2uXLx6758Ubp1iFCat48wUkLT3NuRhjbrLgTCfUzqygY2ycL4bWfoHxyp1DmzpqqAL6ymid3Hu6mVLAT6XXPmX",
  "key28": "3a1cqtjNUhLEGxHQ4UkRPvSgY2Yy9AvFrBfsZMpe5wuTusnpVRL37gVKqtS3xYdkor4ZV7c9hD7HVyF4ypAWQ1kW",
  "key29": "3uz6eurXQUptYUH98MEGzD4gk7kA4unfuQfLNzfBrvF5mVua9aJAYwhs6HB2Ve3Uih6miVEtwBnrYWcEo84iqRBa"
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
