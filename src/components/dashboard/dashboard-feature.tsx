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
    "4uaY2jFz2kQ3X2kALmvJf4Siwxaqakffmqzwg7J1c7nkgnZoLpaqzkpweoPG4sGu5C7isVY85nWc219vKs617Dyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrgzH4UwvF2jgDyzUorshtQfFmoA64vNhS1nCCLNagQx6a93ESkjPbxWhEkX48KJYubRsQ7r8v6mjmLtXLvSAkM",
  "key1": "3E2RbtNpQAQZPuxRYcEdmkU8hZtEQKzmFFEjbL1eK7XhfbdfYXcdKkoV5rBMEJjqtjV1XLiM7CPcZwnvufo6nmBf",
  "key2": "2bAqJM2F9DjKaed6wcSV12CXxVqFv7Yz23RcErxeqFL2EZAPYuL5uxz4XNLBNt2Wq6haJzXJD3h2PEc4VaBHD6Mn",
  "key3": "5gXWsFbVjK4k7x57pL1giBzATiQDSGqNkeMfoMq3cMTquPJhAPvh6qBZUjeCDAyQb7unr9nqPhFrw1M4J4njEbZK",
  "key4": "2rbvcmj42uSB6k3uETLiWmCXRWXh4V5UJn138NM7WHsDXEVrsMnkMfr3pKaF9tTsjRKp87NMpqyiAHh4eUvfFNb1",
  "key5": "5wMck2iCFKFfCum7hyREvZRdhcLPnGnwgyzrTzj7mSYyaKp7sAKqwzMvPTxu1J76aRzHbKM9QaTvNiZW2TmA6Qwa",
  "key6": "4p8zqSHpxid5JXoe1VeeTuTD9Yd4bTbxMwtDSwx16b2V9pAfpuRA4ceKRLaPFubxqjELnk33o1Krx51AZbGGkeDo",
  "key7": "2CfKbe2vHTi9CWY26Mhw5A3aJNtykkK3XpwY4V1VSYA9rv7VuKb1y35MN6Dgve1khCguSVS9HAUVv7CLVKfeAYYg",
  "key8": "uR3UtttgnZ8fTZ7v47GtTVWP45iDK3B6NvWpqW9gDQYqVXMBoYRgGJkKacivdcD3PYr9CwBcEckFD16cLuJ2M61",
  "key9": "4kQ15H9AQaPC2VFzUZfZf9Vm2XmrHmpc1YUYVsin2owuMVSttq9e9F6ZnvkEAs8jv9SCiGPQhzu2R1wMMy4NBSjR",
  "key10": "AHtkQ3C57eS9bJTNdhQiMfh6QtxX7uvx5G2ZK8xH9i8pFtJZCmFBhhD56XAbV5sDopB4kD2mJvfTD1cBWBZVyhB",
  "key11": "4UVg9K3VRPrB3CT29cVXfEmAKEs3ozErsVouAn2Ne6q9HyRzLLGNVcBbbhyJ3Z5Bv1Qyt5PjoKfej9nsU7sMPVcm",
  "key12": "2eYfUQEVDNKL2QdHWqQ3U6KDNM27CLRRpsa2fP9os4J32aF3tLEup8iBxoRUypjGUvqSN35QmYMuhLDRoJ6cS1fh",
  "key13": "43iu2PvATWok1xB2heJJcqrGNLsQjFM8scY2B5AiMMy7KzpBkPrw6esYVyxL1f43ingVhyrY4AExfzBThneKpHrD",
  "key14": "2N5wZJsU3bVZ3bpwQzPpdCxsxr3dtZCmEmkYgQhicnDTTXTFdhKxg866nstcPNGsadbc2fGS75sXDYgEVKrsYBPq",
  "key15": "5YzF2dhpxtNQAKLmRJjvknMTq9NTHztvhnzTxQ67vbmTU2aMbM7oF7HLW1VLC6iLKBbuYFYwWfHqrW4KxPK8SwjL",
  "key16": "5oRL1y3zJokVmcueL6a4kyLY8SBUS5T5whJuGzs454dCygDaQDYrMeLmvxUUKW82WS33KwnAHz3WgWkrMWLvRMwC",
  "key17": "57QxKZ6aHuU34ELG18KVML5qi4sLwiyJA55kjdoR9eJxT661gjkXs7vjsuz4kry73Vsq6kyKc3jpuVoJTv7nhFWF",
  "key18": "3bVqvt6Xj9KEgeVadzGDNBL91p3f4fN1UKo1SyfoiyhhLaBnDr1WTLrfMsmewjMAK3CwMxbCZwygma7KHZSpyaTp",
  "key19": "2Jt84uq7R5CM39gGj4iypwLCE6RUzWuxU2W6wqHJ5pJ2Fwm7BcDPysjQi8oGvgjjK3FcQJ8r7JQNwRXifdPeRBLV",
  "key20": "CJsTXtZCQBAECBF511TJeFBiYjd6ZfP3jLLDSkc5L3bzrES2yGkNVd3d2Gtc2k9bsfAGydH2Gsp2hBiAf5nEoK6",
  "key21": "Tsd24iY2m9JofaowymjHv16AjiLeecn87ExmkCFWCWLb51GTzjiZ3KMrVgrV3ZnudpoMJZ46pJ9bEQveF3WFV5Z",
  "key22": "yhmGWbRtcrf47wWZfXwJPHizZua2d68Nn4dFzuLxkHrGNdaXnpzt2XZL13dpP8og61qKo8PaK9DKgPq6SUn6vTW",
  "key23": "fSw7ZsLCQyi2fsPpdc35DvBULchvwuNFL1f8TPmMVf6zfS4XCrZhmADP59YPaJ5iVsSnUGw5EuXZb6abJGu5U3X",
  "key24": "5xrYRLiMnR66uCiiuCZ41vSQWz55ioXnVWC9N7dzEEUaNtjvXmaDKaRvK3dhemKJFs999g4bUmnWNXCm5mpf7raC",
  "key25": "3begenWG6ENy3T9cpjtXoiEq8mqCxhnB85joEEPVzfYPKHLAwEScpEpSqypRbr8WwEasVyp2refwhtgEMr5cBjjW",
  "key26": "3UpQCeF7aP2YUamQzZBAFKUrMripe5U1b3MUML6MTorS7TMQzYLp545VpmR6YDaSxhKkyePYHfioFrFWtRNLZUmf",
  "key27": "2xJw92bPYFX4gQ7jMoqokJSPJ4FDxoum9WVXXz2RhBzqZAHt95FMzvz78nxxg9SygY9rXvMJ43gfw1ZYyak79xb6",
  "key28": "2nBkR749112B81LZgzhQy8HMmnzuaJP7jTrhQQNADbTr5uRZzjD6T5SaiM3NKuRA1fNW9uDy5utcpepwKP3QZTdr",
  "key29": "3sFxvQdGAWekcq6fL4H9Gq2XHNCXSYt6LeMLrkryjBU3qCe3pNpFm3xZ7AzynYXnVQCwdg6BBcYqeVSXwP3zXq68",
  "key30": "2J9oBZyAj1qFjc4NJirmA2iMXwYpy974uieXjprUq7xFRCxV3fc9SRBVZtL7hLW9eQJ8eYLDkTQnY7RXeJU78jK6",
  "key31": "2vCYcGHDbDoqayjPW7s3Nke9yNN3sAgHAgh6fu5RKJDfMPfipV8PW5Qhw7eZSpZrbXdB9H7GVvAD1KFaZNesDsgP",
  "key32": "2x2jpx4n4R3comg7MZhvFftJEqcKj1n5DjZR2Zxy1WxBp14eWLLqCW5dgCtr1r1tVpA5QtJkwj9sgFBQGnZd45s7",
  "key33": "2yvRKCThyPrVg2RwDDd2edz6UYbo461mhjsvBu5sJEFFNHK7Ws9z1e41Eh4mi8fuQAgFNuUvc5x5VFxtqwZwNSTR",
  "key34": "3iQVWELgxzA2sXqnwTvnRaihwVVEy6WMmfaazwJBZpBNaJg15vKMf47CFUThbd3ij7Ay6AVwa4h4Q6vENMy1hoxp",
  "key35": "4xbUceAPy3aap3iqDLkD3qJsBrWvUzS2Fu6HbFQS6xsBqr99sw2h24qm5pCTaoNVnq52jH1aEiDEBXy6EHRP5wks",
  "key36": "3hDGMApX767DWSTi9XD4TK7f3UeBfEdHuBLUtQSfcU5H4kiYfyXUSE9KutMKqHzeECaoDHoia9cfRGfXp8b4UoX1",
  "key37": "3NRPyNdt8yzAa16T4QtVzZzKjqzLSBUoUXWps2S2XuMRoqG8u8hALefMfhkobHLoreuj63Bp9eicKQrhxz9agdLQ"
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
