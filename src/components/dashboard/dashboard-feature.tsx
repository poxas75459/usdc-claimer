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
    "3YiiwTA22WDiyj8EZJrxzsXoJFBe6uRua9TYM6wLW8asGKY4TJ6kFzjSRkQUtK97JYbZh3fD2WFKora1J1SKWPdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqSiy8GG3EPJ9PrqBMfqW4S2ySpknH49TvTHWxMm8aGPzFgZ68hBVxN9YqXdqUM9xczFCESfsW6jwUsn483FSvW",
  "key1": "5sD72MUZwfRV6Pr68yksrmHFbdHBzbEJnjZqBjcaVhqSUGhuZhwgtxahcL29HWh4hxxCVTAcrQNbzd9KYYX1GkUe",
  "key2": "4X84DpQV5KgxJmmYz85WebE988adtwD4gJSS88a1vhSEFEV8583Eo2BUxiFQo2oL8GXhhdDnaumsCukg2MJ4QkTH",
  "key3": "4F9Ja1tJsZo5jcPTAA9yYbYQfGL3Rxjx6Q18rcwCE5nmXmwqZ6s8TksV8WUD4f5Zcmm3z9bHTidgnFrYx3GsApVF",
  "key4": "4N182NX9FhcHxgFw4tECZvihwXwKEn3N7Fm7mL2NstVmx11ZccxhQhfzgRqwQ68Nx17mMzVpaYjm5r5aGc7BVX4C",
  "key5": "5SWF1pRFtgCnNxGxDi5Da3MzTyPKwjAHEJhUdJoZoDjCcZotc7G4k7dDXqkZjJb9UwVVw6FEJT5RHCXyXnrvckJm",
  "key6": "4ptmxEVBtHWWHbYDJw1y9SGXrN7SWn3tLpSNAyvV4eBQt9h4fhDGYqYconj8MbejdPZGhrmJUtxUqF2AH8cVEGP",
  "key7": "3k1naWaVhdQRDHJN9P18vQUhStn2yBfoTNLwUaRW3rvh8F8PvWsCaWW3taWT81qQMYTYmbRRPfDRniUsZBwuyVvQ",
  "key8": "C1B5HhP1g4FZ6Xz8aMV1ViLdwfp1gj7EPd5P7wZ7vvKvDgHvS5ZqSFJopQRzx1LosGTWoRsqTAkEaCgiqQtvRoZ",
  "key9": "2km8tR4ZMwrZLY2cbjNCvLbHWvyXXeBMZGPGbMdiaukvF2YgSujMNWp1yZpPTc8gmCBkZHYHmEqdyVgZz9ZAgXdA",
  "key10": "HJPhjKeXS5ckgyzC1aA2Ep9WAestzqKMSzdUpNFpbhWf53w9NpgDv62rqfFa6BWUQMAh6gC14KiNxBNxnb3oMQM",
  "key11": "3jy84xWTYWEEZVAzA8iCb8VTbuycD59qryFMEoM8SvUC54wdET2NwAmxozbCWr4RJdJCah26prmmTNDG6mPGNJpJ",
  "key12": "3BuMsLNMS36wJp59dpC5pkde6H5dtocy7ckHYGR1PPRmVB2WDDbUtkgoHy3TnxxAHTFMooeTxBeZTtvSdag1uYJr",
  "key13": "5ZsLYJ4is6Ueb1ZiUVD3TnuYgscvG1mpbzCAgCCPbFaZG5XvXKhAQtSeecWoi2UZDJs4HStQ5Mu2iGs52n1evmCk",
  "key14": "2NsyZK3wpmgas43bXvua42DAKKT2q1uhzv7J9xMQqbXEobPiHXVjrMCGRidn1xsNarrEKAB64AhSxmSJQK6Zd6FM",
  "key15": "Nc4eJiosjsmo3pVfoTugmW4PZJKGUEUv1VcpkwNk2kfhW2bvXWXjWTGEysjyiomWxEmda27uw56W1oWnAQ1GweL",
  "key16": "3NdQuBowzt5tBcV2GNUgk51GXRdLRkd5TakEK8xFXAZu13buYhYyhiAdtuRcNoMYRnRV8rxdNSQZPSKeK1UrJ7LP",
  "key17": "d8utemLCBVuewH6vUeLr9jDtZu9wTSLJUw5KEBLXq5N2X3eevpy1Y8XLAAQ2X5sfhwhJm2WyKoujvU8k4hpUkQc",
  "key18": "4seNusycBVbuk8hVMBfqAqCHfMzehCsArbmkdkzz89y28VebexNbH36bzn821j4uN8tkLjzPMTryhyZdMkJFSpKJ",
  "key19": "4dSahDeQag7C7LPQok5XgxAxGg4vmSX1ehE2U2ZoDn4zpEefmtMKemJMeYoiUUyzydxtbhoB4vYkTN72zs8ofazj",
  "key20": "5jJRdSNzGiCghLwp2jF9N3FqKiganwJjGiJM8chs6GGDH6L5xQFycumSu1A3XMq3F19FjkDNPkTLsUPJ8moaxkfZ",
  "key21": "3fnxXHuPWPRBDAbXRArqS1L2sjqpJz43cLccu6qAnTnLENB4dYgvUhFGarGnFyMDkgyWRfXdsPQN1GR9xbCq232D",
  "key22": "x7TWEjzufojCD9NcwehyBMebeq8igB5H8hhV7zpxZRbgFVMXiE5ijPSvSQXcgaxUZyoA42K9fmHrfZoLYCNoKL4",
  "key23": "4ZQP6zHxZmJ7dTN63y5zoKKbJwX9KRvDpv7ET8V4UiHs9f12Siz8bBMdv8cXxrtMYTQBr1J3QAeKCZUdc3rPHvMU",
  "key24": "3TA3AfsuGc21Uyegq2rondhDF5fmqe3S4rAz8oNVMZZd1fQT6U1tV6rXqvXWpN1VRAwLvfwQddxUj3B3D94GuNgd",
  "key25": "4sRoCWgRLWcjuiTJaMi426Yg1gCMudYcQ8N984H6nfvJW4VmnGCuAqR9xJuk5ipSBxDyBx9s95NKb5jarrWh9yyZ",
  "key26": "BDMzpmyMoG7K1sEoEAHP6nVupUdBQXtjWktV3JBQpUdXuSH3FCzVPMpdZgd2XfbiRDBUVq7KXWSA7kqVHcS1F1d",
  "key27": "3UfMEzv4pEehABY62WUJNdu8qhWQwxzgovfNPsSULrGrer5Y7C18DYNzz5odNfrShq5nNfA6wmfZ2bRDJaG99qLm",
  "key28": "3G5ZortpKAvo9otQyNK6kczLMUY22JjrTpM55yJLBtCPr4NeGaFUK7pPTdgDNfxYNM3bk1NtEG6bpcDTnyDpYwYm",
  "key29": "2RgPsqVzfVencmXhVwjFWigCvNL1Sx98wfPXwfkE8rftWyvdF9UduGsGXgskEyXJTaJkB8ckA9LZU7GnnBpgoMDz",
  "key30": "54HdW2ACedcKSmjsrxvrTwVnDv72k4yfkAi1tFcz44ozmMQGSvU927pPGAdjHQYuMkqxZFtWc1L8oNJxog5znVbH",
  "key31": "2bDPHhvFG66QTu7yUKaJk77cQa6ayRRrhc3jQA8LE2WKpfFH2VVnyd4e9XZLj6uFdV5CXp1pN1h6Yp9aw1VG7Hfe",
  "key32": "UVJGQhpaNKgFRLUEyaUQdFs3Qiz7AcRq5hbgGq8ZpSJYT7V5JG2yTK2JVPcWCyJqGiujcy5ZJaakk5v9NxCr9K1",
  "key33": "5w1KKgavQZjYJwBpWxc5tFJ1rNZPwcYLAcPirMdS1BqYHjqAs6v84g3dy6BWx7KLfUHMN6cPFNQJM2D5EWBdyXyt",
  "key34": "4mvPso21crD8QCxXN4XbwcskD2ySmB1XyV7TxRLzWmsmxGao8PtREgpmvb9jntwjrh567sCBZxfG9rQKyhGd3G3m",
  "key35": "3BPjNXwG6zm7aoJUocPiGrkZLX49uW4hedm1WYUbLT2wYqCA9nXVMtv452mE1RysBjdiW4XzxMbXBnF87G2Zd9bH",
  "key36": "2Ui1oGAgKubsXAZKAfDz6hsSmU5LQoDJQs45PoVwN9FwLuc8yrkYGmWs6UdYTWqdqCrcxL2uje6gUnKrxdkhgcLD"
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
