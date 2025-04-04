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
    "2WRBeFSWcmRtftK6tS2455uVtVD3musDfTVwwUZYNFC5VjY7v4Sr2UTwYWDT3EeSDwn5EgtWoQujREQKQ4vkurnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhYgHgTfQkX93o2v6CEKZLYjfEFocdxmW233eJcBJM1j2BjnDjRBervbmx133cLjxvfqFki2UzvfTSzzqXismsU",
  "key1": "5SjDgVb9qC25SjGAgEBWKeb6kqbY7BSYXo5Qg1GexSJiK2ATe28LjefrVquYvyb3ddREXpH5DZu76rxdLnNdHzCt",
  "key2": "4SbdDDPaEou2XGKfVMyw57AGeHu5uccV2nY4VqaJbh9E6qu2mRa7UoATxtYScdsMCmiNT7FYds74HKwSP26KiKY9",
  "key3": "4PwAjk91Md3zo9PtBw9wThm9tuiE44woxzekhAaCrnrPtpEhipS2pBHY8LWj34cVC7LAc9xNcUR5RxjQxfWNXymf",
  "key4": "ochaTQn5h5y9UZuYv3SBeTtGZWZDmNWieopWZ4pD4NwZ2AcA86CtPfKDhCJRFca3XixZRWAmHm1bHPSGwLZEcEV",
  "key5": "2DC2orzn38d52meUaYmYmjpvnLCTjSgceyq9x8Y2FnMx6ePErQZnGebNx3UGCtgPZxsfzzNcj63b61hwZQQh43pV",
  "key6": "i4UyT8V34QVQEYpnSJt2FybYf25HA7gTFPHmkV7cNDU7VaXcFGp2UaAWim5DAJY6RdMJyGnQ2JfB1AHZp6ka8FA",
  "key7": "3B5rP5yDqWJhJXdKBhXAifxQQpwaKe72jsvcfum1oXp2a8Fo7wBFA8Frfg5EhNT8gawQoAhJzETgF8sT8jozdxx7",
  "key8": "GphVyLSCEaLVhQSvxqNtFVikjJ1eMvBwGZKJWWNyigaG3DQtCs3kUnArU4jNQyyTSg7MkNeRuQEfMpAgkStSTCy",
  "key9": "67PkVwDnB9j7BeDzwiiFF8PNuAoksCu11UnQH2giEmvARZ3bKSFsAEDDYTksp4TyhS1FtkbEV2urTfkWWDcdfGA3",
  "key10": "3EHzPWx9eTmwF829yLJdhjXkMK1RdqSNYxbeczu1GRYMDHVzfbtLNz4hqjvedv9WWm9SYrxarSj6yy87EAh66sKp",
  "key11": "4jX6DqQMHAVhDyRpaEYz9vPt8xTgSRq7nikxruHcEbpRSgLVFoTqhYz1RjsxqyJD5ao7Tc3diQaEbgm1HwCbuJoA",
  "key12": "5nmfcsmkgH1GnPiGZLXaj6ydxMqp4FJihgZkz5pPBa4SrjqRdUxU4Q4BQMyFM8xFxkGeCjrxuLkBJQpSbREUqunf",
  "key13": "2ZGjn41gDvByoTuC12ZLeMmX8f2t5f2eFVXxjfoRTJcF6vs4GuExpNKEW2FpT4MswJ4qAdvVmtGoYXyff7nRf8Ty",
  "key14": "2Xm7FqeXJSTw6oA8Q4oDjCnLMEcSFoxNuyywtmVgmxeypXJkhRyvtaXwoDdYaS2wAucG86HqadYCig9g7vVfkZ6A",
  "key15": "GBqduzpoef986Jv76XUNs8Mv4tF7Zu28JZR5pNQQh8E78YA52jxKe2ievTPKdEh4Tt5krjdCA3mxsZGcQG77YZL",
  "key16": "3hYHoAgzAY1E5SvEhek7t7n27Ymi1VGMLEdDL33Zc1STdd5ACQm69gqjUGL19ZcxLnqcJYuiXGuhfUkK6bMcg6tr",
  "key17": "2P49weJacCczmQVmd951exvyfsm8hXALTnzhrxKn2UZivQx3fco7MHH31QViZHUfpypSRN9CtUS6bRZym3Ekf3cL",
  "key18": "64aGg3AvVpHn8dr8t7HGze4WYMKYDsUxtdjbZoH7fLvDDvMkXMLgdiPnM3qrhavvS5vnijEjs6tncz72o2JLhrP5",
  "key19": "LR2FnWdZoaqGZ5Lt3cm1uhvyoPoHecnrQLr75hBZgzAWYRFZxFHDddwDVZpUGmq8WwKk2w7YuppZycNpG94EDmv",
  "key20": "2NR938R5fCHH7QxQHp3cvrX28tPmpXHszbgtqBZXE4Jmno1a84n3tTwZLZH3tobWkUvm9L9d4NbR9y51C8UEBMg1",
  "key21": "gVKUhWg7BzLXxq2673wvSynp5cGuLjvj8idArmzG4w4j4Zhe6dxUsVbA6FNAv6kTBMNzdhtVtB2CzawqCRCmiJj",
  "key22": "5weRHz5GLYKkJCTvV3PWekQNPKiD4dse9xewk3FukkuzbSgoCgcFLpAyu83uSecbHpRibdraRWZ1GBeymHpdp13x",
  "key23": "2A6MrDkhn7n6VNF8rsDdBti1BDxUFXgMjgYNp74Jk2xSjpixsN2beXs4q6mupej7C1XnHPBB8PfFjgQEGfN2L7rC",
  "key24": "4ax7fW4xEmQfEwdaa99KhbTKRMBKL1roDRmjnpWu8p9QjQKHEU9geWDWn5yLehnj9gkq2d9wtnXkHrrT3m9uW4jM",
  "key25": "nDJAUHjA9XgnqFyyiNpj6Qa2RqbakqixyJSYfxDwZ4cdactVpNhgS56TvVsEoj2iWj2QRHuFuTavsjuoqiTBY93",
  "key26": "3UkbXy34HJXcuvnH5XiFHmUAcqLNBMHrt5EvkunDFH8EgBW8vDZN9TftQQ1SDgRybzkLyDLFGiZ5KWDKuv6toCBY",
  "key27": "2pGsXKRoK83XM6B9VGMRs5vC1xYEDS3AvhQ4h51AThMrewFGSpLfdsGLM32JMBnhoLsYiv1FNULoB71nzhurrF4J",
  "key28": "4TgUUsUGrqrfgBaRQ8E5AtUes85NUmEppZsDAdM4ch93vjUgpmwMKk4k77GMzjMP6BQQe6b6exrNUom8a8q3Z9Lx",
  "key29": "2duZapF6Zqj2B2gNhZk51rgqTY6Fr1VfdpMLvSKDdo9PChnBxgTd12MDcniy6xrVjYKSmpiEUCPvHxUea5otAHrU",
  "key30": "4cTeFEMwyY3PL2j8jXKNi4kCELKFLeS1JYmYW6a6C8uZqdg4SKLQ2fBaDRFkhPS7ZDFbUMDfSHNuNWz83ACSkyAE",
  "key31": "5MVn1rDRBCtqNzQLxHyviQ4pUWHrkfQ4Qx3Ydy2dvTnJxaDFgrRvteoa6dBUVWfZkHQG8U4aQienmUNofYyTsqwk",
  "key32": "3sWTVrJrYFFkiPqMMKQmwFwCtStNVLKx87jK9gTFwDCtWGihCCjbFLRdzB5oDhZYeUkCpuqiLvZr4qCA6cnrCyLG",
  "key33": "2gcwHU3EBVo4m3YVT3Jp55ZsEc3XXtDdhtEw5RbCZNzGUYznj4jNVrm31RgtHD5W98SvTQkVKST6dNs9wkhKfpjD",
  "key34": "sbhAmgUrSheUd2p6DHgPvqqCuqzFeorAz36UUnjeetsVE3fG2EWSKwkvSWVvD6zwnyPN7SpWzFypWp9FBb7EAv7",
  "key35": "2h1H7kpkCNvPb2pPmy13WpjMcjS8BUAPTDae1Yp32dEjdVommzUpZ2N7Nkj46WycHBEiWgMr7q8McDTjJJfzfHrt",
  "key36": "5a56VU68WNbxS7FTcrWziACr2925JJpPVtyf16jae7BU7wXTWvqs5q5kUYvmmsauyKu9fvo2Lwh5KpZz2ivCRDyK"
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
