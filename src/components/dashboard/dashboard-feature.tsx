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
    "i9vBwin7fmDSi9B3MrUbK3o4QohXhHSJCdZJR7AkWje7s3x979ZaaCZbwX7JXx7dtdfW9QUd3CDwQRb3qEMvDbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tF7GZGRo6rYFFZM16RzTnVMwaTCXYwStvkV93VSraaDqa9S6kAQ587PoGbGtwX4G4CVpahyYx9eVSCn28tVrCUv",
  "key1": "3CHZWCNoFHZN33M8mrJ96xAivcPadAyHcpnzpHF9NPN8FY8KSf1NiMA8Mc73UZSdoyoDW8moCEhvoLhNDwNgBXop",
  "key2": "Hcw56qg37d4WHWzFsAugqbfrGcWDye2BXJ3hWTyFodJ5kgo7y8UvKWJNinYtcem18zS9TkqtfHaxccXN8iSYJ6m",
  "key3": "2f81g6L9TPHf1fvYjG57WQfKQnTkx1goyt9FKNMxnRmw334Kp5Y1NZ3koY6r65sjm2csas21n2dxXet1Pfiuskio",
  "key4": "4rKBQSnVukETjqHxHWidyvDyBPwxnPFYLN8syMiUWegokS7DkgEptcXfPokWz16yWD4WJ1PDerUNtjwE1NintjXE",
  "key5": "2aBQkmpKTaedak5F8pQk3YpGXeg5uH9oqmTFshnTRbZFMZ64airkkHKdNsJSgn8QTJykic9QqgJTJdJvgmg4s13f",
  "key6": "JipS2FHbxWLqZbHLzkvURtTmdF6jyeiJwUozxbyngoLPZt6gmVNoFRRiWio3WTm4XRfSgLVSTqo75jzab9Lppge",
  "key7": "2qcEc6PQwAzQvMewsJB3T1WT1BcC7ekhZLJGLtssFfnVaNAWJFdDNR8Y4WBHLepBx47tMhraPnDjvs2f19q4Cig6",
  "key8": "63wdpMxonCdC4UQUdP99N8rfP5qV5A1oKAERYYyyoaSB3rBkYTN8tWzBbRspjx42QLEhvrtMahhKDcUfhCyzPsGC",
  "key9": "2Wjwp8Eyd9d5d2GNzzLNcBXYjunfqh9h353BF2Ue7iyi5M8YGHNU89fdj5jF1BEtqWJKFy4AyMWNZwyjnMhiQcQX",
  "key10": "4adoRnsD4W2wcfuSSXfPoNvvdYLdx1FSnisuTY85UYwR55W3tR1gSuXxQEsJ1qEuDdLz6aMJ9ujReKbvxTzHXZi4",
  "key11": "67DrzU6UMpByBFLJxP9NSP4fhBeF9dA72s8mVcHgRRVtHNuvt2LBauYfUZoZS77fxupw8U9Xvmk8sg9vjH7Qb9uC",
  "key12": "4Y8yWrmmNNNAqonQx7L5xmHXKqRBrQmHAgm6i7pM9Mz26hJiz8ixV5aBWHkRvpN1ofdYhxKkifbSY5MPuMYubFok",
  "key13": "bkMMuoYU4eyCPbNuTzSvsZ3Dp75cVwBPTbaZ45nqbzosJDBJxuSzGfipRTbrjEWCKV1Z56xjGkWLczaqHfLqx9v",
  "key14": "4wbwAqZkiBkRnhS441VKVuBEMuu9jCJHXRQ8RboKyfesYzDGjA1XeVHyx1TjRU2sHcbHkWPyWm58hDxhJevTMp23",
  "key15": "67iSU9bUCk4cqk69GpnMPTBHeGrUcANposEWynfC6vSAYDj7JwNXeog7TZ8GJ2qaCcwNRAR37o8nqqURFrA75WbT",
  "key16": "3KsnG9MW6DB8SiwGjiekENmofzBP5NVDNfzmRrgyUhy4iugSygWxLL4NpGDNHG6ePpyusUkBhbgv6zfReJY7pUED",
  "key17": "2Jpagh7YXxxiJ9A6yzmxoxDtpFapxqnAqsB4axHn3LxNW4i7Hw8vrZUBa8xBnoxJBmKersxnCkfhXmYMXjLwYiN",
  "key18": "3G2GPGKrHdcZ2NXAPdjGEiYqSAjVM2ebPRciPRi1t2URsy5ahm21hirbq7p9po2EUiJfNEPJL7QAstFRtm9c4Enn",
  "key19": "2JWigKGed2nfwKoBFiiA55MfJi6FdVSzxQgy8WHsZtJgVrP84vozrTmXbxUtWMucktCKZQzHFHXweTMcJT3o7cQZ",
  "key20": "47EkpPWyrUbxpdZcfuf7QU52Bg4kzYtQd7xjSDaTbC39fAvS8GonKtcKQABHoAM5bgc2gUpqMSjvKURQxrAYurkF",
  "key21": "4BDLzbEWsiXJVNuiFMSmFD3nUxgMDY6qnhwbv7zRM9Ng8z2PXQJUvGcpueBKcfDqMdkuVrHxPtfG9gAfe1rtytf5",
  "key22": "AdyfwD7xXpHEnVpk4PqcfPQ9ywbVgEVCue2KFstrvRSmPDMbJVqQ1aMjCcVWQU48KNah6BWKt9YLfLmLK2rrbb5",
  "key23": "5f32arspgvPQeh3d5RtFsckHGGNwGNcfk5cFK453nvEcghCK5whXpK3phYKPpigCF6Ap1zU7KQPVMkdppDdLFv7M",
  "key24": "4armh9u7ZU4xJ486eca8fBTsEdmEUausLgsoHF8V7sQhQFoVT8d4xKswWr6LuR5Sh21EYb93oWwqGjps6bfyVomt",
  "key25": "5RTzRNwmNuTByMJoFgWCMkdwVZYyKzgERJqRKexnz4pMc51QnJmYc3LFkX2uRzay2PaPpZtWCdRLG4orK1AsnxYj",
  "key26": "hMp9JK6M1Ej94RxDQTwkAnSZ81EUCm3AxQReoKN8Jsdo5BSwnHpHHWM6k4S8123tDcTRWom5CfYgUfBB5Rqm6mh",
  "key27": "4zyip8HB6vNUzJ6u8x4iW7Qr5KS5BPWBtaHV6ED4tepMz3hVbyZuMpiYVCsGR6C5CSj73LGaF7EM31KMm6KB9TPU",
  "key28": "wRoFhK1yCTKHCXYZT1PVrfBoEfKiitKEHCRzp8X77KhSF39M8RqbouzTSZ4Tb61rYu3wYvsFMyGpe9bwDxD9yze",
  "key29": "5jJjKK4hLGSuF7KNzRpTvjovnjeh8dQqUNU7VTv9RGDd7TnNbectAgE4DELwXMEPDgmDZnfoY24H87EVK3bFYrCi",
  "key30": "41J4Lk3yacCbfVqMQ2rexttAtohrSZ5HDgwk7xkkbXXo33qtDXaynttGqXX8H4o4JUdy2u6e7QBbAuFLjfKKgKU8",
  "key31": "5Zj6hbDJPVFNFicZVmwwrkoBNarS6EkD3yDu1arT4UNymsntUNvQVSuex4SnP1or58mMYSD5MwGGu2SSCcCzm5VY",
  "key32": "4RHvc5XkJfK8cKrTXEwg9xokc2C3Yc9PyAC6jr2KriuF3AVtduZg6ZkUJwKfPbjuyAZHXaCifupuxhEfT5KwD6FH",
  "key33": "4shDSgv8WoZ8m1Uy683Pmzkqjy7nwCjs9u7PMR8iD8TYCVToig3YDGGNxDL7ZXSTtapQBEWovbrmZ2HLvceJXPh4",
  "key34": "4Dt2A5XwrL6KYbBzyRyPDTuYYx21GVcUikqRfxbDYrRgxyFZWB6iUwBFispNVHmeSu15nSQhBNMWLWmQ8QhSPteR",
  "key35": "osstbHrLqZBBkqnjh32j4hzBW27cKix548VcE4gUBNRBwXB822A1GVio9n2dVyLvVYPRH6CvrHtPE3bj7uM5hJ6",
  "key36": "3xu8f1J8AfA2heSWUfgjKnnuFctziDsYU25vRq47rSh5FnXzJW8FBozAhDSW4SWAr4rZABrAZjJdVQWi8qmPWxtm"
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
