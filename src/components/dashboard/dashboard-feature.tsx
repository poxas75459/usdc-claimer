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
    "2JmueirmZwmt1uG362sQCJQnSspYX8w1xXxsZnPD4GN4yNsmBjGfxVnGGGg7CTBBnSGQQGYH1eL4m8se5P8CUDJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9kUZWkzKgtG4kfG7YbENNeMDStJ8nfFiVSxmzfxvrUAe1cTUXqnLQVqP55FMpUB1UH1Z4kXCgAPZABXcRMP2ju",
  "key1": "4xS2apP16G265cXAiWkwoivhDQXcmor2bnffXgf88GBxGMvoENWceRmUkVqGcCYJSmtE8FtdMfCqs4bGVnxNa7K6",
  "key2": "4Vrfq4dmcMLBLcSPb1kkQAvkVS1cgbTeVyJdC13xrfZ7basp4iwyoTUYgGERy2NeUM5iT4d3tRLA9hsntEkHx1k7",
  "key3": "3ZjQJ5Fe9tzUCAvsqXr5Bc9WkG1Y1xreHaGhah9W6KtrcEb1Dgm6beT3WxxXXrZAWHGGLPh5iBw2yDdxNynitv71",
  "key4": "5RyNS1hsqYH1YrohXV48rZkkoEPAyehDK6tGNMR7NsNdc34ErN9ZxBAkjnjLEpCFzeYLWjL5CZnyuGXSfRjoRPsz",
  "key5": "5SFzTvdKPAEsqsAf5YaFi9hvvPiUGhADFGWWKUvK5uh8WKTnrnqY22psEG6Bah1aBAsXnboeMHcv8XRHTP8Uw77X",
  "key6": "54x3jWyDN5JXWWaKDzwVYSM9CMcyKYzhYM86yiHfLeLYKUQXypxcMmXDy9nakPzDGwzdBCFUjF96k3FkpkTMb9kg",
  "key7": "r4Kg7mXvZvPkr7WtiUiGWRh7Az3ycKDTqKChp8AwdNuLwinR13JXiMRLKRtDk7552Hndkn58LhEU14Z8S1u5k7f",
  "key8": "3K9g6sVTme5tgRPHQJ6kQq3k8MvBqcFH1zNyoRJEpsSmURW1uZKp97pQL2nVvtkVuDzfQ4x7Bk9SsrFzFz3Pxpsk",
  "key9": "3HevxPnFP47eR47sGa44Qfa6w4NsGT2ZjZ3H9jNDqvGCoXVJM6c1dbtCSVAPTEozqzXj8RaR13NaA7kJNS3GsM2e",
  "key10": "5EUk6qSdWztnMvFYpeaTD25UR1A8giWD6WU3GJNQyodjAf8ZRtm5BHkoHaUXqTFJj9Q5HXg4B6M394Z5UJ6wfWSX",
  "key11": "38s87fRRMLVsNZDoScDGhBbfCvxiPD3XcckpHc5FEbo2mwwE9v7TUnkAr1ZiVfYEftFhMPFLkHHmBtuYMtkqnzQR",
  "key12": "2Ri7d6zcmPr6rxPfmR9jP2m9jGnJecEBLyQDn6EFBm6rqNmXdGhcQCfDAHrGLMy1eSM1tR4zRUAWg17GBPXx8HyS",
  "key13": "5wGQZgCo5QkPDKif4hDfMu5mfqaXb31WPvM92eyu1jsi9rSEVtYCduwneSWRatbZpcv851WsMcrJPcCgogxakxaV",
  "key14": "4wVW7u4JTCUfSnU5CCjqcZpdWKHvYwG5hECHRJXW5TGvWfJ6Z55FEyH7pJp7VdgZfkRfoutdoX6bsDxfhYC5B9To",
  "key15": "26RkYyDN4kup8ebAyccuSPXx6y6WZ1ZFFcFr45Uw9AHSPDtNXHxpQ6DL8SzU2aJ9SmYkqwcR6Cbz7jDLh6ALWSah",
  "key16": "4ehKs6HcYjzp6hpCdTMjWCLR4VkoQwudpC2oGokPDaXBb5CoJReVHftq886RC9PTdtw5Vqy775mntC99wNJX5Uuw",
  "key17": "5BqGWTmJwS2wbA2j7buJ2T2c5rN7B1X2Tqaj9wMsfhSMRwVEp3JUBGT6eQzMoNeboYYpAzibAcghTZHXctFBRymc",
  "key18": "2XZvh3iwiyGc5UmpmZGMAKrSjdPZcF4RrQtJmH5uSc2J2HT9brVuu9ovwZp6kNY94J3BZAu44KxfL2H5sRsG4fAH",
  "key19": "58GLKaTnh3UtQT1kgrMnsimxsY98jSTiBHT9dJFjYPWqAEh25fBeJgRFiTqcAVSDg4HGdh9wK1TRVbbnXLW3bQQW",
  "key20": "347sfPEVEbRvdo6KTQqcEFAPKCcUGzEcvMuBksyp9wemBD27mSNP2AUApu2DDNT5WFzHJ18pUb5opAwC6XNAexio",
  "key21": "4aGpwhpN8VgrADezU9zUuje4bt6PUw8refgSaXBCgAUsFVsZ2UpsZnjiiJUbEc2iCygxoBk8TnfCrXFJKkwXrDzP",
  "key22": "3q524wZ9GMC2F5BZaGHJ7GF5s5zpiF96Q1dp1dKKj4GbW1AsimymRmi2kyaxZGhQvKDK3EHs7Zo5VPypJgdnUXgD",
  "key23": "61LniEjTHtND567m6Vy97eVA5TtKDEcz8RAixnm8g2vHgzG7GLoF7bpieZHXzsmY7u94ZsPUjrmpD8q3hQcYu6AU",
  "key24": "5BpXFUU5SafcA7aY4fmpuAei2AEng7o4fWA8vMXLEEDaD7iPKhUrWSPNMKPyKAbfQ882PHPb5pAxs9ueES7HpCqV",
  "key25": "49hjYjB2fta9NzEMMqWW6LeeqSz39YnGUbUrPFroxBz9YfSQZ55LXdsbeacpEsnFDSrkgvhjV9aq5P2wn78iZrkk",
  "key26": "j9EBiBPBAa3eXkqo4baeEHm7V8bJUtDVGqmsZhWZquxwiN8NihTX1ekgWF3pmymGixYa6ePt5U8zMGXc2gaTW7t",
  "key27": "4Z8dmFxxSue7XxF8tdNMAkRsdcpD26kYaF5kSuxbXyu1Eg4fv3xs67dvqoZxgHWfQBHNvECAfUNatXPvzFTRDoN5",
  "key28": "52GosH1HaE2dpSCSbafAKpunBhssiLgGADwrTQGGhugxvSZa2TzScMe5G2s7UqPEVN8QY9pg3dFpL6x54CSq2Yfx",
  "key29": "EfzWmajqcn63aJtXeWNV16usAqiiPRzNUq8F6UhGeQsDJyzR5mHm95YHfQMsrfZenouRU77P2eKfXnHRMvjX6qP",
  "key30": "3z4npSVSU5iuuUcU9nShdnmyjeDQnJ9cZ25CfMQUZtiUEWzHjhiGj3aF8dFi3Uqtk5t5ahFtYvNujr1GuUYhC1Pw",
  "key31": "3gZbGia7rAgs2gZqf2MUGAusaV135jvR5Fm9MMso5iATYQgeYwUz2nqbsDTDGdk3r9FA9Ndm9ApJ8VHyHTUUXAnw",
  "key32": "MWKRfR9xAWpQy8dLSzYY52uekZ3ESJ9vf2ahXo72jjkXVLCCAhz7jaCmYE17bApHMrU7kTekFayVWMA32XAdoti",
  "key33": "3WWZtLdGFuAJtxfAuDFsNZvtM1f2s8aBrpbyG7WDJscwfmiGh5CQFHY2G12UQmesAZXjKRmqcF1cd4tRzkrMRXFF",
  "key34": "GWxTNeLyi7gpo2wzYHVns6Wojzt2C5YoCM95Mf2w7cAbueKNu3EkzUTqRwJfw6zNpE4Tqof6evHL4bKRipaEdCf"
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
