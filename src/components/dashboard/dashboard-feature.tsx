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
    "2eSZtCckUwZ41ueby7FvyQdQPFydPEvsMWALhq1dgfp2APL7aZhZPCKjnX83jVvhuaXLmXZ7ekGjXiqVczyteeAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBm5ZP2EeY5Rw25okUsiFXYNKCVeRvd7RQeeAEm8yUFhJqokR5UHDyHLuZBfWFUce1XqEr7wi9qjcX8p4CpF8D7",
  "key1": "WvJHa1cy99DV7MtXtfo56T3EXKymaLDTUGVNUtDRBXnh6ayWbW2qPzamW99eYB9v9TfoQ7PzkDgYkrgtTUp8sLN",
  "key2": "3yUEY9zbRHECeBMPkK8kcWPNr2QGHwVrjj4Ez6qWRRgd5BkbsBbwkrHcjL5AvVX23ELbo6YNNUMdxRMfK5bffMoP",
  "key3": "2BPm3UDW8EpZsPp3nfaNbGcVuB4cDaH94sBuBnanJ2Fx5QX58G7w3diUSojjbid4iKydRZeYg9zeDg7D2rpbPraR",
  "key4": "3CZPECRiry2PSB6meF53bxYeVCoXzbb8wpLegiXrCczbmqLA4oW2RJeBMZPb6go9eDjJEyMN4dSujNNbYzuXbAtd",
  "key5": "37NZkrzRGzZdX2sujNxrEoCikXLRa8m7JyqmXHNNyGF4vzcCnwjTfx5sVWsSXSiCrUrmz8jd1VZh58FANodbEVjf",
  "key6": "2Lz3FbjqQLB1Q4R6f1dqDLfpRU5LPWKNehuZe97aH4nVHugzj68cfaALPSdJa6bACs7RJ4Z79W8Bo8SS81vxFCJw",
  "key7": "4zjA68qJGe51R7T9RjWHCdgB2jT8DviJgZbSApz8g5dpjavuy1JUhW13FrHXgUs6XcyT52cupiPDiL5Cb19SBPFa",
  "key8": "2JW1WSceQFXhRGkKrjTpXjVytP4oTaHahZMgUgv9hYxktFvTzZ66kt9QioNxBpbVb4HAoE1dj9Ge9qb3Wbj5Bovi",
  "key9": "3HBvwq4u5wUTFuxHZk48LJxDmUY8vnCSwCELW9SmjreuRbgFk8Yu4J1UaP8HCehEnEdfKsTKv5UCfKrkRExY6VJU",
  "key10": "2NBr335aFvpLkyF5NPykpN1pyCgNF7fRJeaAk3m4EGdi4fTfnP8qV69RPAFtHF9XTdCyjckeVVotvXec7yPDaQjb",
  "key11": "Ggwun88WPgpccFmJkjMEh5tDC6winWy47yKea2XaVzVBoFq35AXj245m8bZHFd5BLTvmoAU4TRfkGeaVoSYCQTn",
  "key12": "35CukBBSc7DqUuLnceWPKWQeKUSUaNa6MB3Mva9J4UEmXc13suW2FouKxm587MWJnysDgfnxoYNUzLGLXLasB5w9",
  "key13": "2eF8AmDPAs1Lx82cUuzmipZKM9FQAPYrsCgbtu5ZoLrtmdQBuv1hj1UHE9nqxxWYw41DCMP7GBYUjBnNQKVmRQMC",
  "key14": "3rUyDsBWsUdaumU7kjM3KUhu49ZXijsQKYndEz3A8VhQaT4eiyegD3BnotSCdE6qwRpHR8orPHpQfWiSMpZPRfWX",
  "key15": "52Fj2xY1W47nJBtmdPqou3trf3pG1oB5DzYn17zKtpDUQpyVmB5XhgdU9N8ZZjZwXPGuJVK4FQk7FBm8A94SZaBj",
  "key16": "63WMqs32Br4bjwFuBAhV9p4nqJMnkiKuNfCgZBPdcSJge1Cc9xsLk5xr4gZGN135SixL7GkQtBZ9wqAqDb7C8Av4",
  "key17": "2uVCqKsgVsLAxAF7wou7AFxVT6quYWPPX5mkdKL71KYpS2vicJNo8Y3prLgSd4iNtAGbB5LTwMhES83UHxWH8tLN",
  "key18": "5gE8KHUPpThngJNHTB9xEbxcpmjpUzW4vSzX4MNC8uJGYAJVbnhzoydpJtJ7b8HjHpHcTSwNT6QQcSwoRxNXq6yN",
  "key19": "hhG1WqnamZHJ1EoZ7c4PjF49sq9EGNpCMhupXfaLptYy5K81PzJLfLFqiaX7MrwWUtXvCQjp1SWEYGHqyEkYRox",
  "key20": "4XzUubnyAPwgPiySsH6dq4fQz6XYaYcxbDkCuFn17Qu6QGKYm8UoZyxxtN86cxq3cvdSqGYLMzs6nWeU9Yr7231V",
  "key21": "4npEQCVVKcd9YP7Y2EttfjxvTAoi6wM41XNehjyukYz8pz8M44Prz7JkPJDoJKiWapWiJ7qhPHvGdvdp6DdH87FK",
  "key22": "MAe1ZL4j7hYXaF8pA5brHdg5EKSVgiAjdSLPaKZZJKfr3T9sRXPmuANbTpASqUXPNQ8KthxGoV4cfxDg375YqhG",
  "key23": "2HJR8eNm4uniLcKgFSNzHfwNTcSLwKoRTQH9GP5hu7cxaXvT9s2fBTHmSk36fYtfcFXTdzCVh1WZUQm1UnWoGsDY",
  "key24": "2K6QqDRARZRHd6SdVdxHxg8BP3iXhr748BGHLm5gHsCEheCfNhcGX4QXdoR1CGBhcQ6E8MvdjfLyk37BnyywAXuo",
  "key25": "4qpXKw9fTSWdwF5W2BCXRyS7ZHmKop4JNZnDc13YWWj2Wk1r94eFjKjuhC26vsa1u6pEFsjkTyL794zo2wwcJG7y",
  "key26": "2xfo4SdqYA1a4tRUWEY7L1Pi23yJC1Zibv1XB21Jhz4weMpCiFdum57mbRr1kxwZPXF5X9XbZqJ5T4yrDBbG11Tm",
  "key27": "5gAcHkX9sg3gDz1PB5tCgBVG5rw3C51dJffSQ6iRDHsqoVj3e5YXPp3RAQidqrMJsS4Q3wDtJbyYKbYSrFqgkerW",
  "key28": "4Z5XHFfr2MJZDEkQV4t9EvHg5ZsE1ZcAG3WgN7EMjjjdCyPqgWZa5XetRHd2EpxEoAZtzZ7KCqjheyv2KYp9oUdJ",
  "key29": "4rye9qFNUENBY4NzAheGDLJ8txbhkpMPrnGoJZNynmUWEkFL5HsbUaQPSEmw7wa2mWzLPgjBPxiQUQrp5NxqKwc4",
  "key30": "2HmTEhSKXbmTYHu7iGiShMyvc6ospeZEKm59LpsLNeePeguAUABX6TUvfr4jLWV6URZGYRcD9Vin8vdnyGrHQ6f7",
  "key31": "3a5yqjwF64vSjeDyUPq9hAubPq43vF8FxmiDJ2CC6XMjYUNTZE2pEBXw8PacXoevBwacND5xnGyoNAFPwxBf4t6r",
  "key32": "3jgnkdWdAG1jN1AJiEVS2xBzEiNcSL7rKFpFoks8afTDv2Z4EGcDwXW6hUhQQWcd7fEo5TeEURt9Kq1geUSLMMab",
  "key33": "4JBXxgMpXJRzPvjpBN4bWx9zZ76e2pQMfXXtnV9HAWZLMWeDRmfgdTAeDPnvDukRSKUNquNn58Nj2g345T2LagPh",
  "key34": "3xw6Pua6BCEEyq5L9ZMmUHTvUT8vAcMhhnBCvykYoi7wSxXyX3JBkj4AStK7BR84kxkvWxYT2a1v6R2JvpG6nWkG",
  "key35": "3Q4ojq6CnCfYy868LHtgW4HeqJzcJwn8ic6Q8rJFgY5GakYho9wXBngvWTuR9vpm5FEgM1e1KJrvHQxSEmnj9tQ1",
  "key36": "5fKSxt7w2DvVRw9jLDu8aeo9wYWFMEcVrBLr2ynkd928wVeseWKtGesMi1AFyXu8fcAjnTi467MwmztzaEhNew4c",
  "key37": "5EE94fB5yDF6BqbNN9uyGFAYrGAf3MwTdneVQZFnTzvG9T1rqmS7RvsUZn2fDovuPM9uhRhE9akmnRY8mmrE42HG",
  "key38": "nGphnjKokrYcFYZWwrx4oxpK5q4PBuHKssw9myn16X467ib892ssuW8V3ZnjbHkpW7oTyX4T5S9Ba7bE5LZWJ9o",
  "key39": "3HKGzwSc3ohn6to3LbkWUwvpmZVevQtSV4jirGPu1DMEzWzSeKZdok6Cm1nxHjk51ea4ihVfUZZssvMse71Qht5Q",
  "key40": "EFPE8ZqX9KHkrdWzRc6Fq8KtLWYncWDeNNAZtFrB7V7vY15jkcgSvpf3TeaVpKW3DFRsF9r3MFFXhV3w58d9d7B",
  "key41": "2JhoptrS1N1rA3MQ9QpVECTS1urtqvBxe4geXDXTbUChE1RVwkPfEwVGuCTQ8yRzttkSGNWSKGt7SBPCt1bVrRGJ",
  "key42": "5dvXDbNVRcQXhnyruPWsGUdQ1LcykAtnGaiy6VmZEkRAoeSuvoteF1uF83RnNsAZzimoGNjuvd4zBm7vav5hrZGd",
  "key43": "1CFsPfGC5TUxqNcAK8hs9LR5oi726WuQHpNCJqBh6vPGFdqQiAwpyD4uCiT4ALJx3WQf5GHBWJpiKzhwP7BW3cs"
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
