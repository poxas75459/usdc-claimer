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
    "4xEnwzdzxfz9rpG5HxyA3CJ24qjR3FnQYooiCtsco5EY2iXgoxZdDpQv4EPTS2184KhQcTewMHSSGM7M2ZSMDtDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTpQyUZmEkdZLDpkbUjbyKWZ2aGWdz2fv6yScKD941ZCFxghwHjAduEQ5KLRmSEyZqcruK9nWQzdjvTxXqeXDq7",
  "key1": "47b5EBEypbkvBqtib5gQE2K1ZPxyA3NtQG1wp2C5QmUqrc4cp9vRjjXrZmQF2KisZgAqNtQ5FtTGj9EJsZxhJtKq",
  "key2": "5m2FHHA7Lwk4cgkRVrEUqemqV1EVyrdWApEn8CP7hQrXXMgXJh9HzSRAEy5TgN3vRQrPQjmn418caXkZkYA2U6Kd",
  "key3": "3aR6ZC8RnMb3opUAGoE7KTMsSWtUMwRs3SbG2FdezYK7Zpdh51EDSdvQaHBVRHUciz7QZhqAmmzwNZMRq7V47HuC",
  "key4": "4HV5hxNrQ8MLzhS9nBWb4bbG5RxDQKmCWrwF4ZC2jR211guJPsSR8r8bCjTi4LhCiJC9qgi4YZznViTZSoUYgAog",
  "key5": "3uZLYWxe315LR5coA1FZ8LN4dwJpYW3t2PNSWekhdGc26eDsWe4Q9io4FkTa5267NJdH3mqNaWuFf4RcwezoARed",
  "key6": "27dZuHtjQhZ4fXDGMRftaj6cE3uvNyWE4UFcLfaY4VyPj7uMnfrgqruvth335JFAi8kh2PNapWhjcgf8HMUS4i8R",
  "key7": "4FhheNqnBWy9xgqXV7WkWFhqmmoxuDWe9zJhzwLzK5QGzekPAVJWHsYviiajv7sfez86YGXaS9NgPuDv72nBXyUn",
  "key8": "AkWVJofVpSFB2MnVg2pR1qfbFVqauRGPJ3Y2VZEjjeVadwg6MrN5uKbH5EenafoUvx11De4kPostpsaU4wAwGGn",
  "key9": "bUMKFgRQgquGKcRPCZMeLvDRbaC3rDnnnYLTdCesfiiM36HpkpCRjmaqzbSxUzdLqRFJ2nCkrLi7oWpropt2KeC",
  "key10": "rhq3CU77PMNDG2eDXd6WHDvjBnjfeMDVwpeqEd1grpTeCU3o9cmsPsSakagstry8QWnnXttVWTQoiEdaWpq3esn",
  "key11": "pdPD22W2vc37aH6LAiK1EYzUiRAMMLePrP99EdSWPYRvq4xQewGiCUxMPWcniGYSaGRrn3tF4QkvsSMahiQE4Za",
  "key12": "3tawawqJ3zjrCMYSc1LUF2iJhgPXt8cvaiXbiybizieumZcfHQLZA5gWHEgF5YKjWoebcjYEpvgZGmqoTdjabACQ",
  "key13": "ukxM3zQTQUsSBkLD1dyAx1JjokN2VcVTsgqLNWFGnDM87KDE5x39hSmNVyx1BnGysaCnrtzv5HRPFNkmLLetSp3",
  "key14": "2SzFppZiTEZ7B5Bzwmx8Q4XEKRafthPk4baFD5At1g1T3Ar6zHsuUToNTt9Sux2RUG4i7bVqvmvVwn8dgrXAhsGt",
  "key15": "2BhEuELqqAjUb84LksttTkfTuhFwbD3qsuczQ57NWyTShX3tvBCpduFKqidzX4VdedJctGXz5rdCcpPoHeeU4KvD",
  "key16": "4BYrQJYpBGbbFDxpYgTFLBA9y3WhJVQLMMTDsPXLQB9E2zrLD8xFc2JervghHn5pjQtmxAXpzhrZSC1ZkuwJfT6o",
  "key17": "5kMydj74gbJBZjnbEtnjTZbSMag2sTdTjjpzdUG3zRmxBxa46A2Ua2iXrPsfi2J2w55XRky19yh3wqexjAfQosjJ",
  "key18": "4wxUTcCfUjYpLjnuvof4kMFDR31fiFJx96bCGRXUFHRbXJGDmaHxYnDBr87VmZQcBYkFMSAbh54yEVJdfTh449EY",
  "key19": "jUjSm4XTQkkoqM5RUKWsNwoUP8DEVBrPbzeq68iuvCLZChHneCuDgLqbtyyrhJhsGUQ8CvSWNGgqv38JRZ4vycs",
  "key20": "5BeCWffif6wGH2ukgKcnFQrasq8oRfTGx8EAPmPu54ff3Gx1GaBq3XX2ZmqKnYBa9PguH5hhzLNeTbGmRNdCVekJ",
  "key21": "2qSbDQeyE6a3sXAxggcdhwPRojp7VuPxvVmBsQE1NvCCf7dXg2fUbLnrmZzeJxyFANUTjED8Cs6TespJLH8WqprX",
  "key22": "3euCkUyH5oXA9UDVEByNFTUP4Fa48umZMFJiNb8uaSNqDPjLFujiwGox7qKFzGuH88ZSVWvSdjUkyho6EqwALLiE",
  "key23": "3oMG8xjc8xi1NfqrtCmMFAVVd1iXmaE4aqcn8RU6uibKwXsfZ8S5TxaVHb1dc4T6V94XLJegur7AUNDEb1UevQAE",
  "key24": "29KDMd7f8TCE4S49Eg1TXMMoQj6sFAnias2gzR8Vd7CUqxyuyo8Jj2HwuvmXNWfjveQR7MF8Zp936z2rquAxKtNJ",
  "key25": "4ftLDdGrRN8rT3dPxNB6oCj8JCHhffRG27XaruJacZEymPFfx15H3pykUXyazdPRjHN5g5FMFd7pqyUwZ39Ra8CH",
  "key26": "49JQwhGpcAAKLzCn9gaUNnhX5JYCzeutCK6HoaKipjf2mp4mVBuXvyLgeQbx5bZiLacZL6k6kMFWbdjc2hyvyoYZ",
  "key27": "4Mjwpf9nnVPUsRJLre5GVbAJiovDnrpDRxzzFyy4EYDYhfxvjTPR34zBeeDL5pAsfxprcsqHY8kMbQfqrKDtzAUh",
  "key28": "3fUtqvU5NNjxaYmzCpD8FPF43ukyJ2zBV55skrbFsyNGTx5N1SaFHsgnmPc41MRzwfEDifKeZeMQrL3gnWprK28W",
  "key29": "qwFfxLzHyfSvLtUWhkRCZhuB6eUAKPuwEmgbkCN9gENJ7X2N37xbTsJp1CHLLNEh91QYpHBw11pQaJg39B98ZSY",
  "key30": "2W4FmTB64DV4suAxGpAsBY9bZmQw1TqBxKqL8u3hMFYy7gmQrE9CyxJaBT7L4pm5hC4MzuPKiHTQ7PuqkSmrzB5j",
  "key31": "35MiRtp7vRx7oQZCuknV7sXzmSvE98sfUEDq1sVX3LJL9eV3AHUuBauFNQdJVeL458UmnCjmngUehTHEaTEPVAA1",
  "key32": "5tsJ27npr3GPmfuYMe5iNNGuziyc8vEzRa7Pkidd9XP2QQDVLoKMryzQ4w5WJ5AvwBLDzfszoWcdz7gf8YPB7Bkr",
  "key33": "42AMNWojN4MvjPiZSxWmf31Y1UdBDaCEJ9mRP6YJQEZnTYENpKoRvDD3LgvA7oVSS7cjQEVzfSvheErxLk8Mjmv8",
  "key34": "2z9zvpDbF3FymFKuHstj4wC7622DGuhWPe4kqJEwB3aj1wEevyfJ8oUov715AnoPkE82x6Xqu7pEg6MtvzbCB83Y",
  "key35": "643m7qWH8n5fRWdQgjMzJp72eivzoy1kKrvA879tVzDToKBHB2u7qzxWWe9cPA7yKzLZ9pYCDWWkCcgCREb6x2FE",
  "key36": "5RCRB3UAr6B3in26DYiL2KeXtymSUYBJRCZhzWZW1e7PYrDA3ccDYtBiYP8u97RTJzBF2FcAQuQsu24Ld8cynxnL",
  "key37": "4Ex7LsN3EP2FuZNgyrgC8tmWejJTQGUaVKCxpUM1WzduJMNGeQrHdbPXN8nzdf6rMFLJz8MNgWqpnhB97vrchA7o",
  "key38": "4vEs8VN4uSbMjvCzL3CtNfpywJhrU9Kgc9Yrc4iGu6ThN99fPTzpYocA5WYDK1onfGk1663ZLLJhwdWcsGcqYjWj",
  "key39": "38aXMvCqv6sLs9R6EQVPsNuYVgGrWm6HrTbXbJrMmFmHpCRNFAo3jA5aEgSpUhC1XqJgcjwMgWQSw7ev3EPNBg2c",
  "key40": "5nn6QVVEwS5T76CYKw9Jks55EKD23og8fLwuJZi7eNsWmHzBv7BeRU8u4w8NmuAkwD5GvjbeFkk2ZerzhJrpJk4J",
  "key41": "61aUgPKbAVXjA8YoAnzK8kGnwFmWfH1NYjb754ZVXCBPUgZAgfTFdXNorXFBAgfYBZMku4qmDkLsroWZd3VpewDi"
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
