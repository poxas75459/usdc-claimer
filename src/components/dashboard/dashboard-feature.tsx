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
    "S1ETezKBbDqcfkkHpjroRvFk43CZYnDTvx3RCcPLDsYnYymhsUQUDdoiAcuNj8sjYAWkapfysgyxWewnrnBsrgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sJrPdX5gVSZf7MvKLRFqttJL2tMZhE5r7uPuuu4SfF8fe6JajmpJRpgtpaPqcUVrX5L9pXGVd8xdaNQtMXUMuc",
  "key1": "3QArvnvtDkMrkpniobxqUcb52hEyQuvN1qHKqJBUkspY9fZwGS1DrjiMzbtAoifgc59FQqZZJApa54UpWkEUZAzd",
  "key2": "4Ux2fqosjCfB5FdqLSJNZNsGU9skXucmsPXAFfQp4SroyoQ9XrDRd3HmrgXW9ND2Y95hSfEfvF2Yv6LCvyBDDnRu",
  "key3": "qdzvnBut4zes6AR4TWPagJvDhTMf77eVs6wyuakshw4CjpY1qJ6kEmNZitJ5WkeNtWfexSB5ENq5mHMYhJkUJsx",
  "key4": "2bmSf5TApu2Y38YGppWk9q8Up6W1chKkG3nq5P7uciqrEw9kMhAc4hTwXtiQWnhTL3mjmCRi4gDiueNQTgGRqzVz",
  "key5": "4XqUjaAkcFvNZKK5ACMNwQhmobKuKSQkTbAZEyuj9tens4Yyz3B4vY9FQxNJ928UCwmZBNMMBNcyd2X8b3fyxaqa",
  "key6": "Hc8bn1s2fxWjqVZHsgkhj9C6uVViKdwMqqvrURYk8ZrozTyWyRcVddAvRDqnTDNov9HwNsSeNLdWqr1Fm4D2Hkf",
  "key7": "3nZ6a89Z8kLeFdvPENLbmPx7uUWAX8MSPs5gyQjtwibDqA8Nw4XoPXojBaNUCn3AcxxuCN93KydgUQByyN2iGbgA",
  "key8": "4XEwB3rMtSz1bFLRoCJCy6Y1SNzotKxcvnH4BgAhJnhgdW1ZFgRLC15xWKh4ZXBXpHMcpx5ZWm5rdeXfbMKUQQ7f",
  "key9": "4CbWBk5nnMkysZ1HmHG99zxLAuBjX6oNCQ8Ao5eyGXE3RZStZnt3Qxe1CbpSaJshGPJHvUDUeTWjBY1BetZMgyXT",
  "key10": "2cNEbAceQyUH6zSzwAaZqmnLx7ANJFTpCVcHNXHwjeoSxEUP2dTtH6niLTMD6MVUVnwaTAurYswzNeF1wkQPqMMM",
  "key11": "2kqBHo3eqtCRCra6J9UuxdwCAU89Gs7GALS7XJDLNECoyuBRqxEpZwviENTrHkeQFLY6uHGtUcsVS5PRfc82dFKs",
  "key12": "4WPnxDG7xJD7Gqp15Ct1nQadNEMBPp64S34tR5p8nsLv7Gai43xe4tdrGRTjNvXesZCppffnTFFsWTXnTSPbYsrf",
  "key13": "34bSyDvYk9thd2D7HnfGp4c4oy87ZmkmJfUBYR1RLKW4HT3m2yyjEr2XTHf6sg5jb36jQpV52piVrJ7FfazrN2Mi",
  "key14": "4ps1sFEVBpie3qB6vdbqumNZXd5MCELG3FYT8SCu1bVMPSzBXMTz1tsYQqHbgZW9vM6BcPSwmGdUuzL1tkFdW61y",
  "key15": "2y84VYEwp1sNoRPX1qMusb4CbAdxx3RgvUz3UBH4JhALu9koyvz5vPY3a7Ppc1m9vW6Ft1EG8qvVNc8PDYpFeVNe",
  "key16": "5jcoG7MWCEawStEwFXbHcR5B9FemDZKxixmTy1uac5y3gGdi6421pPC4LfMT7m11zL1SaPhsKdTn8AGvjo98Sm5U",
  "key17": "RwjvS3x3bxkAED8jEkwJRC2mTt2U7Gt5vxDECdmK4z8fX7G3sCmjZWZBQYuSqjLVyze7ZdX8uqW7ZWJVZptiYwD",
  "key18": "5Vzhpw6jTDEWhLQagoL7Z7K791Y2MQ83hwy8Uqdvmpmb55FWSDg7h5oejmJ7EvK9cLfC3EjSjmKLZ8QBUoZ34Lqy",
  "key19": "3Nv8H8MX6QzwMeBerKioGEBf4gwoVCBQQWhSygWkQr8sbXm3jonLY65B5wkagtkKNXybRbGZnS8MZnjJj1uDNx2Z",
  "key20": "3BPNuedYcKa9V7AR6Ms73FFzeZUAt1pUWXi4q2H6yh7dSZ2ndVLg7FtmKVXNAPTfapGWK1Ua8EeqPUKhq1H2Evwe",
  "key21": "4GbFTT6pfa2yhYNo1pnmZ4GMRbm6tK7hjBTbzewgwcuxUcQr2dPdkG4y5F91MmnsKkGDTPbm9MDvfa1H8Q5Xnqrw",
  "key22": "2Zcu8YX9wdcNVSL3HytBoGpfg9CAorMyaXmxPhnWPzwUzR7aXcVGuNv6EjxnFYVE5GnEUZzqMTTZX6G4RpxS3B65",
  "key23": "4a4RGvNVdhuuJAt5dsERdRjW2mwZAMd2ij8pmu672grD3thEdjm1WGWm7kQvbzwrdyMR53Q6q43pcov4G4pfCHMs",
  "key24": "3YovXUBWkYZQkd4gTzohbsfbYJcSoCJouKNkD3m7ankjSYFjyr8FAGr5c4K4w9TBRf7FGEQ1byBcmZ1tY5cfcz9",
  "key25": "2Bf7aGk3stcep2sLu3hGzuJ2c8ebCgVgYFLUJMvR3bYjfCEF2Ww7P5WabUj3UHiVHJUUXyYrEPGB7xVurXvHo7KA",
  "key26": "4vQnRR3VtHbz6o2EF6LNGRYtdPDT6akrCt5sjNYnaTtfKBAsbiFLSSM8Y7WPDpE28fTXRmhcCnEB3Ayx5g7TcyrV",
  "key27": "44U4WoC9Tu4dDBBDSefyYoYoRUdsyqYfompZyG7XRmptwmbnfEMU5pCi1wWgZqvNjysrct9TbsMChA3gpxWmX88N",
  "key28": "5zXpmqhEdSVMjMoZn4hKE5pNJaEdHHyzW9zDAUBrxeREv9vNLZ2NvoKHeSbgNazQCTt9dw9kv5Ga5z3LWcU7FUqZ",
  "key29": "3u9i3NeP98tUKBdefAXgg8CkvZ3gntBtXUhi2FsnDWzWYkrLkQ6GFsYSgwP1XXFFzkaYB9k6T49zfUeRjJLm5FRR",
  "key30": "4o8CpJuMwUJo9wSM6XdMQPudpR6DGMjfhpLeyB4zuSx17wnQToQREbe9mUw4YsBEudDBsZ4susyd4erZGosbGXgv",
  "key31": "3j5nwoKcVs9pNT7FY6TKQeTVnXBzu1M8SVbZNS2Bxsd4xYneFRHUH7EYbVhgy8bjNwkk2FeJheKZnNtd3Nin4QqM"
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
