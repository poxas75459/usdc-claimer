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
    "561J66hMTKtFpAyuU3hAoY9ZDCsvuQJF36K1mrxhLo9SmN9SrrE5XRFitxLS2Rir1pA7BnYCJy7S3jhnvZLgev31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omK8HVKrGuUqr8ZVGaaiR2nvtuA8HSBpf9648VENPetnczRiKaFe8VXWULSzhd1YRQUCgKz7GLM2hgA2Kt2z9ir",
  "key1": "55qJS1HTe93Dc2bGD9Kvh5BDddcoGMjsdBrSWN861fWzEokW6D8jrpLTDypxTXN5G1VBAHgosSxj2kBUE6C8GSDz",
  "key2": "4k9yCUonJttrd5WPHaH2kpTLWYU3WEbU6voTePEmmqvLYCryAFQJw5h21PAaUJqRL1E5FAmZCbHokTFwEvqJw9mE",
  "key3": "yBoW55ATDKgPDiFedE4C9rfrqnqxcG3YzSoP2ii63dAruQg8R6csyNgEpYw3NXCST9Wi2Ayqua3mRkQaXHT472R",
  "key4": "3brHGBN8hZFY7f2wtWk5dkMskxXMijcyT1K6LhdqyybSjdbe3p4kiagFAr6qNTigVvCbsZZHz88FvUNw9uHcBrCx",
  "key5": "yauC4nHruHQdXFXsKpeomGZqvoCx1WAtF735tUc5Z6SJetyzcvjiKLhekDtqofryrN6ChQDszsQXbCxpK8qQWHc",
  "key6": "2KvnuRjHEFe1XPdd18XHuvG3q3N2TzbgTCL3wqNC3gs1d1dD4ttmrDbuK8RBAiuQmgjtTDr6iyXvBHvQRBB1Yk19",
  "key7": "T9Kak344xgri5DA9LARx3kEpEcMkGvvgKZyUPLZEtCQKavHEYqGqFPoL4AERBT666HwZzLEJPvsgGdxVUJuoUG1",
  "key8": "5XGpcTEoBmi6m9vYRABSUoiPFNsJ4jcYzQkx8JQ83BN4hj1hVMKLof9Xr7fKocziwgSTRCFNL6MJ2orEhkUZPkkj",
  "key9": "4BMSB8wKL1T8Wbm5WpvPmZTHFRWEx7aq9yrTvJRth3geQJTEGoH5skzuJhDkYEf5EvXRmwe2dXKDMQ2HvUNMtvzs",
  "key10": "2Ru66cejHUbMo56Bs7utR99hurnZC8bRGpPM52doCQ4A6gdeyA83usU7Kiy5VU3G5C227Z4Fk6WCHq6sFzEGgfXd",
  "key11": "3bpKZddTDuhcdqHERk8Uhi1yJe5XKZMABgHjGg12Ai5dcj449goUVjrac3Nmd3bdSJiw86ngBFb5tDZHXFTZkU11",
  "key12": "4hqEbExGQqsMxWtECNy1vk6BdyXzUQeRzzEBYRRVsv6C6iE3u8SMg1oANSHF5Gxe2hap2GzT89snPqrBu3KhVMgw",
  "key13": "3361aCw9gk1QU5oL4Red9yziystA3k4YjZfC2ntXAJHtRCAJ6J9HJaJ5FuorLCJ4EzB1sLcN8qmzAKTj9JCAoyHP",
  "key14": "3kVH6b7q7C3WwZJ7U27bJiWHSaTzfWrc3LzqETupu58Maf3D5nECsxUQ4GZ8j4VwyM4xuSvY7r9vaG4AMVGJSneA",
  "key15": "4JyacEy9V7FBALVwxw3ZzoSacLzQkJXhUeWPJP3R2QzjrgGsqdG3cNrrBYTX92RunwBTkSSxAE4TCZruJ6HhtHXa",
  "key16": "vVHYrcm8jtqeB6T6gxdWK9P3oq1hbV8A5gafNhzpcQb7kDvPsLX8vqRCrQNw9wwEcBDNr1cyCQaQbijgq4MiSbP",
  "key17": "3Z8NpEqbZ8Xm6umhGF55W15GYF129b4T4LxHaTBz67S6RcXPDKb95PRT24eu3e8XrBq1dK7ApMCh5FLWuyu4YHph",
  "key18": "2pNjXuKon72HDq9cCASDNR6Y9QhY1wqdANGxdGQvaWAeS59sHnJCdXN8DXbUyhbuNpMkJvX9D7dyotBC5ELDgSS8",
  "key19": "5JkAqq9ZtXaFQMfWBh8miWAWKwFSsE9sd62Rwjqoojn1aq9K62MFsW2cJ1t1SGdJUWC5zk77sBbur9KHRVjHPCGn",
  "key20": "4AftJR7LKbY4rnhFABrQhPCV5jvBsosvasVpupgXtWzTz3ZcD2FdpARQNc4RzdBGp2VsEXFWZhwnVtQyZdhJKG39",
  "key21": "ZLNJoZLqRUDPhujvVuLaSff2u4ic3RGG5JobgJuFCwfHepAgpcGetGV61cqnj1kE83HTcpRffPA4vSpHvt7ng13",
  "key22": "4thznYFSbejfCY88beWkTbSfecwqm9F6Q657tXmVf8JVjcznKLDn1pBRLy7QKBUPRruET16SzNNFSCRLX27A6tgS",
  "key23": "2HhzAftKEZCyzn13s4tSkn4R9sCwqe8MqiE1jTzW8QXkjKSaDE6zXskDeKdPP4os4wYqhQuNXeJCUgH8PrBC4wmk",
  "key24": "2GF647XeeYwd5qQTCR7REcee83T83WB3eZ32FhwEY5LwL2o5vcvu7cLbX8haTcJ3CJX4Ld9EC7huVgYHsRnsshar",
  "key25": "3PdCT2LfDVsjRmh6hJPbH4aMYSSBfiymPPTzFb51M9knfwHVVsU8TigFYgjuxLVZq11NoUuv4MTL4y58wpNDEova"
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
