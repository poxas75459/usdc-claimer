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
    "4arkpQkfKLopTjnNCcjUvGCBjGawiBzwVTccNYHcPZ9QyGoLnLtvhicEZQfzzj6N8SCSomvTF7TxqwBB4EhnJSTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4KKP4t9JGztJC1pdE4JQsNDFRoydapdoS4xeh6Tuh8H7SyBveFWMJp2NDZtyagHEEVvAvQiVwBSujuA4hrAUs5",
  "key1": "2e7vZBNJK3j4ULXkXL49E1fANtgHgsUh7mr15dNkNJff1aaEmoqNaHkgsTZ8wV6Ndjm9bnwz85KBhGCKm2JRccCh",
  "key2": "3HhmbSVtcgWyzVXf7w12E4JsgQK2f8z8MMXoLZSwHBMViqsp5uSPGX2igerxHCb7fwPqVGvqJUBhEQhw4zgoP5hZ",
  "key3": "QZ52QuwzusPv2o391uX7m4JYbunhnxc72cRuoVBANdSyvJTM4URT5VNYFi2EhXMubxik5uzTdWQjRB3qgdfsMdE",
  "key4": "4x1fLrXotzbo7PD11Lr8eojTvVG528jkc32XJaUZ746E9T223X2p6konZuXmScF53ASHVtHL8YUvDxQjDEdxUzcY",
  "key5": "3gHBzCFMvg3EvnH3SLH5fVpibfbC5gsCx4LeYP6vPLCCLZixhMYTUXiY6AJGGKXbfrCR5P7t2PSYM7p1Zooa3KSr",
  "key6": "52bmMCC1ebmZLf5SokvejFgtFRmdYHYV3YxGXYz4WC621NCsSXgGE1vkKKgp9a8TtNFw7wxSe21iwktzR7oi8HJD",
  "key7": "2ASpnRZvbJV89z5X9Vp8ViMCbjHV68XqxBzos49Dj4GbMhZ6a2QJJn4jExyMryitJ6o7FMsajWn8tPGbcwvjHvFb",
  "key8": "5BKoSi7jMuyw9jofHfMTB8CFTQpD8iq9bzwHbrHvHBKWPZ1JsdWLNyLt7cQLMwV7Z6CML6Fd8ZocwjoSmMP1fw5r",
  "key9": "2hpH4znr8NHqiEtBC9o3pY6tm5Phkid7sfpfQxJZrNP4zJdeSBTMYC1UR13MGAMfoMuBTpzhH2UNCRJkD5eeKa33",
  "key10": "ZTmUToZSS3BxfcTgVLZkHXhRupm9UTQsYjT8dKnGBq7SWMv3Z5pzUL3P5wcTQA9Z2kGJdBKwiHpMc6iXwaCexzi",
  "key11": "25bP8szEqoZQKYDSfzUFNZy9XoQUrYEG4J7iHxixYvbX5954guhgSEKDdyjDYT2iX5zygfJLwf7uD8G9v1m6J2iw",
  "key12": "4zTDos8QbUzUb7B79YSLx7BCrcrBkh125UKmrmZdnYENDV3kr46KwzYuxCVnsLdBmMXHj5sNjLC6bZsh16nnjSCi",
  "key13": "3tqxThhnrvRNvHU2hpPRpCz7eMG2V4tCMW5Dmk42o6nddZaGMp4KxHZUMFtch27BuykY3Xeg8mv7g7UTa3vLW8WX",
  "key14": "5HCGFFvtUWrnpHFUdxKKG4UzhQxeENHRDYjRSgmczhYefGZHFAeHUXdd7EVPRSRHCVTTKGB4Sz1stLpDFRKYQNmT",
  "key15": "5bdHdcQdHjEs2UCEQgJqiCLyDjEQac6VJn4kqaQvuJDiatYGA1QfbCcR2XrMLRRizUhFhckU3t7f3koDuBeNLJhB",
  "key16": "4bG9skhVFQSx4MbKxDsT7YXt5QfC4acQxi2RfphE8sh5JwyE7TLwo9gythAVKAzPatKqHAjB5o4DLsxzdVmHPfBd",
  "key17": "pySQqPJENQMAXFUPcnaNwFP9T9dwxvqLSjBUzfsrzWmsRY1U8udkzbsNnadsoHxHtJzb6SEtY8prx6W4V7BCzb4",
  "key18": "2Qb3hqrzY5useav254wBRkKKx8EZiiidEaCWxV9SY8nqyjCCs6VVQ1pusqWVkEMEfoCBrpzoq9sFeFw2dVP9zgmP",
  "key19": "26tYkk7WYyr7wSjn87FT2vxX85kp2YStE8a6eo7GtCoVXq1dMJGURhXbSLFLPDUnNaCdFMuCkmwgTrwrJm78xrCy",
  "key20": "NAbzaar9bKKJ5rdEpJ9twBNh6obJBziXeFCoCeCgNAjzcJwoJADFH7L7MuukpnxeXnA4eYcdEXNZZ36jWDnSeRV",
  "key21": "5vkwStYiVtyLarR1h9KrUys1vtqfZtv4Rofff878ZSzWxNDeY4aN8x37oJ5nJRrJ2zFNT7GAAqxWqnX1J4cf79Rd",
  "key22": "65HRJFjHZYVQXxmyM14LB34vDkeFwy65o5yE1JYS1dw4DtjHdxJYmd8GvJpk3gCiNcgA28TqhngyLiYyvtW2sZW5",
  "key23": "3VqVgtHQwuAFDza4evCj544TqyTs4brTne6EBCDzrKzFxHrXkgirMpvmMofy66bX3DV21jHyrGGknpqxHbUzB91M",
  "key24": "4hx8vyM5j5pcbW1aDh7nSdi96pjSgiQCxrT8FxzFjyfWYJ4LzDcsXLoUV4bXhHsLxt9PZ8SPnLxvLYA7YNJsgQqS"
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
