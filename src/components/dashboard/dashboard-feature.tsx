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
    "3ibxYAgEE4dv6bJt8otwfpBukdurRq1hNwfASjLJbjpXxNeUx1oY3vU9RnZABt9Lhh5XRwRukC8A7qJHrUi7sjPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JSeL5CcyJCfAeM8PxYoa49mhDQMto4opvvxPujs6CWGVe3oLxELjQSpGs1Pq4ppfiawjSfoTywRGCnubffXHXt",
  "key1": "rEDgqQuTrnBRf8XXcGhw75GexiiHsMzajXCTbVKmUdigoU7u6cn7HAsdxdto2nEW6FBekCGMnVnY5CK3BmMwQkc",
  "key2": "3qjg1Q79H3e3YDQi482N2orioRaBqEA9P6sG4UNiaP4CFjC74z5j7ySdbkpyTJt2tjzoevhaY3vhYje3D1iiz3y3",
  "key3": "2AoTxJW3TH3K1EUrSgLa8fXnrXSUH2aYepGsR5PZYr8X64Pgo5zYmnWEJGy1ubnqTJPN953McBmNRge6C9CBa1Zg",
  "key4": "42TXtFhDvzY5JmWCBdKJ9E4zDRSs7zneeKF9tL3BK6SxXKZDg7HTYwSXL85wmqDKZwjff9a93uthnBW8oHesiu1v",
  "key5": "4uaAvdXM6zxDUojXTiFXgWND1RyjepLHXQHuT3A9XznYqTQQAfU74dUEwCcKRrTrSxFfj8EgZB5WMZQZ1kkJhswD",
  "key6": "x7hk7jF258shUNKn2oGC8bUJTResnwkffsfdduqYpc3TEmU3m17c59chdx8RmHLfUaRUXbdJWRdTAkCdqHPHbMd",
  "key7": "4PRjCHU45W5vMbTxa7kVmqjXTQT1jYZLfpTxdjkZty1ErzoDS6Upcp9L8T7PeSynJ3CXSj2B5s4aCma1Rw2QEbFw",
  "key8": "3RURN1pkgAJViY2Pe1dd5kWrhuMkwHVrwyJVyPyMxk2iD7G6nvX2yXRMDS7CcdNQrD1LhXQgsfku4E6Ru24UsC6y",
  "key9": "3BrW26qLGpioy3JQKpdUFgCtcthHYbQGeDXjqyqwWHwPPppSy42d1zvVmAruc9wUxxQNZuXR6tLUDcnEKB5c5cGW",
  "key10": "5sB3GYPL7QqGrFPj8eJD37N8JAfjXR15uK33omGdpkYNxG8ZQBt9qtQjFvNfMp3QAnY8PiuEEVFhG5EW7LuzZ6F5",
  "key11": "26xgAJe1ptRS591w7kZJpnZnVQ9NWmaRKgYQv14zUsRPWRNAQ5ySmiB1XZxJprhDCsadiV23v6h58eVizwWbZ5PB",
  "key12": "jiHyaEvdgmQSfuWZZTLEcTZznfUoHCu6hGtD8TzhEFUawHbN73YW9YdXf7ettj2HYQrcGShm2ugYDjpxjebdTDo",
  "key13": "2ad9E1WmVPEg9MQz76ntUSLYMFREZ9gieJvLfqg4fbqxrutpkXvbNuLffTdMsHV32t6Dp3HzMC6n2uRsojhFV67K",
  "key14": "5p23VfVc1dgnM5Vp2rmUYfimcAnwvXLi4mgKR8Zjmzim8NfP5c51mBZyuuvoQC5Zonwq1uwnGBsQnv6bXE22JdfS",
  "key15": "48CAe29oke5ECT12P2bXbJKFb4XLcpADVKhG41XDFSkzHwPLh1WznbswqAfX1pn16YQAmUXZ4xJjDPwFyU6ATAcV",
  "key16": "52R6T8orHWizYzGMD4S6ZHyGTsjxwZPhU4Hrre2QfB3mwzks4Y9793JaGo6iALNcDEKg7p3EHbsMwS1S7V682opD",
  "key17": "2xNbUr2YmCy25ffGaasxutbuwAf7nZhrhboGGAeAKyshXhdV3Dd1qdzv1zE7QCkGb3tUzM9jYpzyiMsL2GfohwTu",
  "key18": "5mjhL67QjDn38Up1QWfvXdfcYUC4rE6MGKQvPceebqywemEjuSUUp2QUGRaTTxEw7JXtmBczbp9SSoqei9FYA7ft",
  "key19": "5hA2SCymACUEfkFN7dosVJ5VzDePKhHQ5A4pVuiH4WZZPoaJ8tY7z7E3AcThmLyNx6ArNsZEJcuxcKDzssZXrXx4",
  "key20": "2ZH8SmU9TD9t4nbgqGsKT7xbX5Pz6nJ162F734PTnHmoaHPMZRrjTC7pUSVbqPhtNftqxAz8QVchFj1fmrgDXsD6",
  "key21": "4uq9PTJHgszaCgpfw9JDoAshKAXH3gzCXzr7hp7pPHzKExZBAmafRArDocYXK9sxa38eqvjBKqt5zjV7jYuRCvAU",
  "key22": "4SBaDP2M1K71fRXw2jd7TpwMB7TVRUV7CgGzQYVwNPTDw7MQqc1begkiqrxK5p4Q7DcnyiwDvGe26pNVfD1tBjFZ",
  "key23": "5PcCMeUep55dtFjVW9iDHNSPbovKq3Qs6CfiHv9cyJV22omPrjBSGQ4p3Ef9LHSeL1b5NDgcDFxc2eLa1JhLRZRj",
  "key24": "2VVG9tmtVBJZHDMcpXQhPS9Dvt8LauPRZqbrxSF879yhN7TMn9eEyfVJFWwhHT2EpJAjjPVCnsrK5N8fTDnNvLTf",
  "key25": "5NKENZ4ogqisSKbwMEcpJ4T9WiLfHkkF9Noky26Cgxbj3qn1S3DRq1YXTi9hqKNjygPpoxvRNH3mDgzwHq66zBzi"
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
