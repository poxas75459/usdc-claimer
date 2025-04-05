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
    "3DHEJRtMf8gVCxvtqz8KXa8zGqkcC9HHe3PTxJmhz7dBrJ82Td96CijFMqPec6pjwAiZwxKznrBmmgnLySd38fMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7e1j2TnzUfhNZLwhjbpCZNvWz8i1Trs8YPEsnAbpMq8B5dZgqaYSeYpUYiWy6odcqX3kroLg5bUP77H4zVeQkA",
  "key1": "3Bc3qghsHiw57d8d43CrJtGaRqKrryCw6i5F2LiuMqrjy6u5uXEHYdAttadF8cpkD8aAgy5cPPfLGTW6fwQpoeXV",
  "key2": "4Cc145QzfChSZUUKj137vzv3sUvrio8dUFv79qa6uJFygUmHJWWjoAbR9JJ13qkC6P8rH4mqmrFpr3YJLgPCwnfh",
  "key3": "KRfF2chJXUbbcxLRM9N1ufo6hA95hqdxsfoZf1wTgRY525zVaVPAjQH2fHuFUXzazFKoqGPZYGPKzPYGspBX9Qx",
  "key4": "4c5VwJcnnTU9YBxeeeGwo5tbhtE2f9uQLCkGW9FR3TPXM4TMRwmBt8ZmEuTdemjB1bfutm4dKgPSK1KoGN9yGijV",
  "key5": "4yq4EiP8mfjcq7TY1oyP4ztt7kPd5YKronhe8cQJFhnDN12bBdwc8WvEMKsESciSpSHRYyH44C44jK84GRMRcb6W",
  "key6": "5ryJ5gQ3U9R3sKDoKmNuo9vmVppsv6SPwgAh1icafy49wnVe69gaStfga4w9EmccgYuBnGSKiByabLZo7WkeWM1w",
  "key7": "5B8mpP8VCMHetTQgcyFqmb7JQ3v8519UL6vnHFn9diheHZC2Nbz72j9P5YAGtdwZpomDNQy4RTYABcbwMWhUrVgH",
  "key8": "31N4HqcrD2rFA8weY2g64SnUPvqDDCXxn8YVCAo1ewQhCswCYaunEogJaWHfRkYoAzu4KvcmG6BYqmpdP9BZdSNr",
  "key9": "2LekiTPuMkXNo3WxDx5YW9kQUryVsZHyqfk2cQH8DvpmMRCQQAt8pN29QMVuCdRyt51jXgJZn3hkpfjjrVzP8Q7G",
  "key10": "2pCnADLMAe4gpvmeyjMr3c6hhGDszu3rWicFTNxMo25LQ1WguBHvsbTLEdmnPP6TejR9twPb269fMfc5WdUuHCvh",
  "key11": "2ZvA8bpSdWnSV1rS38dNzjGacsTtLMQRUuhGsUquYCA7Dh9RAPej5rTxejhcTd4NaWHsGMNeanevP2q28ogkmFGG",
  "key12": "54mz4BWKwHZr9dJaTXpRy8cowyMW2AyRqLvEsZfAhSPcdHNmvkmQL8LKENGqycVrJ8MoFTNQSYUU37CwfVt9pX47",
  "key13": "41ApgUkGHwaPQu1qRAVsHL4xF6fPTFCWx9bDFiADEUiu6Z5hTpEPexxEXb93UyvYUcyGXxw88Tn4CEKqdYaR99vh",
  "key14": "2CuDw1PYMbCzS7R1JWPmRDSiHCCyqawqcAr4LkVFndssu7RmpLYLAguHEWYBoM5tJiVnvWQV23TUW3fHsMF6oGEQ",
  "key15": "2qCNvSCGCy2U4ed2RBrxf4xMgcpaqij5dreJejqbCHPPknLCh2wc8L7yTzgtvb7at18HPNtqK5Kd5AwTud9vMznq",
  "key16": "QWSPQ7LZAxTeWPhn6ExFohD7KaXUu39kSCREzYVWSZTDqGE4Y2FN19DSmYfx6fMka3NKQSt7pfpkVc3GRBBFYRE",
  "key17": "3cugmhC8UP3ik3GA3ApQQUDfe6FZHtFgh5rhm5HHUsWCKMUZT1ATFye6AJySoDwn7u8Lg8uxxYBZG2GUs9CDAsmF",
  "key18": "wGsRx2GajEjC5xDt4dcDjKaW3kYzjsWTUHfUQWEkpa3RK9AJTFza8PxT7X2d2Jr4Pr3MzFLng1FUcUXtyhikyEH",
  "key19": "2c9Sx7kzQ2rPT4ZjafaPWFQC6fgUCL2PFBXVbLSU21wmNzQGui132vi27hNRN1H2HS2G39MRX9Wa37pM3VnANYWZ",
  "key20": "3JiuyMiH16oikQhPPhhnpRwL3iPry3N9oqFWaxAYNXsUw69QakgZY4SoxFheDUhysu26jgF8WmCxYh1ACxEKJDNp",
  "key21": "Rv1qzmqPhsteL2Rcacy9vwQ7Td3yD53ctsajgfzVUJHAixY5yev3Hvp9jxpex6hXzgQoKu2UTSStF79SdPs5PMJ",
  "key22": "hbMRJXLjjFvRdAS2R7ZwyRxgudHuCtsuoazjsvVqmkDZi7RDWyp5y4B2Jxma1WgsYjgkqSKPjHaA31UTLoCGktF",
  "key23": "4ysUfR1DayDi8EwSsB12Jtz3F5pLK3HQhBRpd8XNQtk572RJF6vyT8ufcZsz4RxLhGcohADRBUwWxYhKBAG8tPTY",
  "key24": "4QWLkAdPaiHWxdEXkJG7oLrEz7he1BbQXBRzABWGKsN93zn2iKYVEmmB9ftX7yJ53z9zJSYBU2MR2hRkgdzHq3XW",
  "key25": "2eLsiMMVP4ryMB9C9j37UWJd4jkE4nzPgY5Ac79UcxNTrAjR78LgRZ3Jx8igNArQnXmuErx7KzGBH7hBcepJjify"
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
