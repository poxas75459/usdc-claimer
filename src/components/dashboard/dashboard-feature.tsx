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
    "KUcZ1ZfeG8Ssq974N47JzP1x8rj7RaFXbHhUaBLRUjN6LngM1rgNYv6EeQ64N3QqxW3KDGWy1wrNXESZh1AYRz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7PtcMTpE1PSVgrtX3Xww756vnFyZm3D4iJbudG3ceXfjvNaPveA9Ednsq4cngkGXMVcQofQKXrfTBZwzQoQXHS",
  "key1": "4Wz3WX6QDwEhktFjVwpC9t8tLDbGwffno9gXwKtX1CRjG45jLWgWrgrfUYzK69JE4vCzfbWYs9VPL4DYzQwRZfR7",
  "key2": "2fr8LhzegMihbsHLX7TasqLFyZDrzxUvznzZb9V63kLGkgBxDZVRgbAGp59wnCkmxRk8P6aKAnzfhWWJwhqP5sNZ",
  "key3": "2SvxMxUKw2e3PHCwpiF1LP5PNm16kAgpnffF6LneuaWbHR7y7iZ8c7chMXgakdMj3QS5etp5fAFQb9Jn9VQupqBg",
  "key4": "5oHmTDtKKVuvYdc4Sv8q4iEbrtrHcyKU1tyDRDEbSKZ8WTEshs6QQypBpxXFyHXqHg21y5hhMWhU7KXfWKSP3hdF",
  "key5": "QJHExyVM8AajQ6bQmUF5mS8dP2qGcX6FTYMXKNFTsHHLqueiknC1YVitbQ64GY2hW3DovB91j8pWKasVAPs1HYp",
  "key6": "4u5uZxBWiifgb4vuiUi2DVu5H7wmMPz3eirif2mji7xQmDaqLvGNXBXUTLXYmdRoM1aXGmtwBcyG4FFSUZaRy8YK",
  "key7": "5VKVg59MUSZ6cfx3GfPUTUZATkYELp7NHQA4rqJE3gLrs3STkCZiyXq3v6jRB4sBYdjGd1GnwxtBh37vgZvyh1tS",
  "key8": "2PmjtDtdWkdiTy39XJf62vL2oAqzKmfvUJoUktSgrFDh1yGupkbXroy3FqzPMuqgAMgZv7yii9jBFQ3FwuAgZwQC",
  "key9": "d2cgYy5UDTMLX3NyMCuyZh8jJ6qHx2eAqReyqfcqhAKBSATf1vLTMCM9Y4r5NqRAGPnoN3fDnV5FP9o4ZavNhNG",
  "key10": "5LXW8xDu6Z8WDdG9y7Cap1qSbCQYm7V6jc1KdrEYQmhYJCCycpHs6tf1hGWUnYRjCF5XwQy2npaZYkv5MSDBT1cy",
  "key11": "4yszSxsjSDRQxWfEmoiRxy9J8LEYUp69dVHknRC8rqVduLV3GB5PSigNRsHoYiZbt36VArHCELF64Tnp4PsBh7u2",
  "key12": "64TbMmeY5RixbdENwEBDdmtDwA2Yq1q376atcufhLin6quLJHMfowU2dDSUa5qW6utaPTVxQ2CsZMD9KBuKEqkso",
  "key13": "5yezfBbqhRgMoTFCF18xQF9oCCjJEXhgWk7itU4b3mWsAHFDHVAC1XS91LP1rdQ47bbqvTx1reRwCLXKHQK8bakD",
  "key14": "UMKx3mjXKtwEWjcQ7ngMtuBkjG7gaEZN5Kwkq4sZ92w3MmhFHQfV4NqsR4bLh2c1P6oFA5wvb294yxtetSrh5Pg",
  "key15": "3KfiMyBx62Qwf2DNFEBo7ugp8uMkUPFxpKc9MATMEdWPYfEt7XtfUanSrxipmtPRLsZDD2dhN174om3eqYitiBh3",
  "key16": "2YiXqLm1TUUgWfkDSX8MzK4Z5iH3XpsCzx8EBcNvbWbJ1Lhzp8VnS8LkrqB4kpkRzZH778LhyG9UXj6NquJQfow3",
  "key17": "2sGjjio6XvgsVWsikp7czy624cSB2etTVhA3ZzKtDKa2D2Kw7pa72YXRYhfspDoamz4uL2NWaaLf7N9pLoa6GcA2",
  "key18": "NRErFYHwSgymr5CWSFMtSa4pQkc8UBKWYDUQvhP8N31e43Fq4EcV1o2aSMQeUyvtX79N2TmYNSE4ZFBLktqhUEX",
  "key19": "b8fimmSDEHwjNm6GAqxdEfqZGfUmQbejJdxkGJ6LG7ZhHjmbz7M6fLawrC7S3n1HGc5KSKrzesYTCQLRhncoAwY",
  "key20": "36GovFqELFP4jr1JMamiqx4ZAG3SY61s2jFB9LsqESMuhJcAzN4wWn5jGYmfvQEgraykiS42NNKZd7ydwq9xCANy",
  "key21": "2Cmj55ScdkTBYzBY2T99ZvtMJzPiabX86Bvt2eaiLj6Edr9TM9wa6n1dZXDsZZZWVLVhGGH6XE4wwufbKUpMuLMm",
  "key22": "3uTcJWZkq1ibfbHGxgxjtpKFavCudVBmHzzrh37ow75nNKdzSE7YQkg7BJLcqPLzQXHM1c72pCp5KVD2MsReqFXN",
  "key23": "5EDUAUxm8uaoGNDo3aF5DQtrsyyLZwKLY3QuJXo5BuZhGnV6thpqegkks2g2BhkVfgxfBMXnfnybg7vDniwhN9dy",
  "key24": "2cHdQU7iipb2zgdaA1bK6weHMxdG7uocm2ktzB1n5Xfhw9K8Ap2Xb7Ak8zcGwuVfHhuHrj3KVehwKnyS2xCM7AxY",
  "key25": "3fLqfsDYUcdyoYnga2vqh67VP4i9VeTt87EZE42Rw1QaBqwua3o73wYfMU7KUwyWfhATmxbHqDZm1kM6iJZFtVTW",
  "key26": "52Suz3SFhektwjJRFmVbuR37zqojcLWyibd11oWwEFHbWjQBJ4XLHPQSbB6JG6hAqk9sAnp3Ro9uSjkfhM5fJkH6",
  "key27": "4kRQvtTTYvqJ3qZMPUyisAna2ftei9KszrNJGXaVVHfNLnuwhtgvKB2mLZMD3Cm44vSCQM1tX39zfQUNNFxXWW6C",
  "key28": "4yX19oSmubh8GaEd1atc38LdcykbpqEiJm2uPuDDAvgYB74QNoqmH6JtTA4dZVbFwkWBHJeqNTdcZ4SGdtsqQQPk",
  "key29": "4E8UxY9ryeuHCskwEa9zeyHNrSD8sXRy6qMqUaL6jyfnQ5hmnu49WRXB5y7Mrb42detJ9kASrHoXmTq69Mpjn8zh",
  "key30": "yzm1TG7njyFt5qntMoHwwEeXEuLiN7dTx4FZcsvMMSSwhzTWpuaixWp3PQHXuWyBMbhfbaGaeSB8hfBLieJLfec",
  "key31": "oHHHu8cNSPkT2f4uzGLAWvosEzimcobrAW7za3eK74J9QRBeKnaw1VMC8kZzU1hFPAo3crev93xGASynvHuuQY5",
  "key32": "Vc6e5xecDQ7eCuJ2XUPES74rg44yYPRhx5daMcywqsXqu5wp5mdErgs6U5yfJKexrSY5CAnkQWu1acDTnmuU9Gr",
  "key33": "1Dkty6ebKotrM8e2RUVfLjVTd7wtZ3ftXrnWrQ498opR2oV6eVvwjNHMDAAseHpQxJEpWmeA4NpRhq19XnoNYAH",
  "key34": "3vhoY2WynUe2dTiUeg3pgLPTyy7wt8ihm9RkZyAq7SGBaPvXK7XECqRfginJE2nHXXnf2YooszzMRkG3ig6sJGRi",
  "key35": "3vrZccLNqm7JkkQMHSoLknTjiwTeD5cnb7heC9KYjrzKTE8vzA15gkcM7zDeQnGDiAywLdC3ofNuBRxDCqhuHo4M",
  "key36": "2y17sFJubpY1DyrbmLWsoANBZcQkjE7t5R1RrCVqXEpksRt5fMMMS3bhFPdw6cm2LpxZJsu6xezFPZKUHTzW4ynR",
  "key37": "4SWGDNiGYqzCWsYNZvvCxHrNKTJa2LtZAD9R9WrCPifWZZJxBj5erqfGhhukRAY3HTtvAA52ieFhDFq6gA9WQrh",
  "key38": "42yfmsqr4XqL4epubUyjxXhGTndWJgXU4b8C8XL9dknDnbUxSfhid5pKYinyfLaTLASCYSy2aTptnvRSgTuu9ipW",
  "key39": "4U4kuTDwVUUMvd1Wx68tW2dSHderRyxYJeSgfAXZCySGzvXTCWMe2kEUBtcWzwvoTNn44JDiak38twuPJpyfnVXV"
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
