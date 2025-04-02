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
    "5sbyae88nALGixWwUsCtwVuiad5pyt6uEDifW1wwsm2xfLMcytKoybPTLQnZRJkf3b1P49c9i1SxuPqqNmf1PQzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdoXTLyFqLyMp2S2s2pP7nYhMAxmseon3Nm8WEjfeRmvin8xeZtzAGXgWtxEE4PfdG9rEn22GUN4dgjhY1BMAgZ",
  "key1": "bupZQjwN4xnUnfR1sUhxU9nP8GS9Tdx1xBK2qWyHUgvwp36rVM4GFyj4icJVWVTeFNvSHwFe5Xf5QiXpf8LZajW",
  "key2": "n6PQM3vaX22qBscaoP5Tksz38XRW92tKH6Xxbtp5UZELfiiPewtkvK5ogfkbNCtWftQNvwDatt9uK4ynMCRoN2r",
  "key3": "5CSM3TY7X9H6TC1mvsZrQ1XecgbPJvBUMEt3yuiH2z3bLcjif1cfkG3VPXoyHB1sf1DdSF5QhrzT8RUuFVvxY3Xf",
  "key4": "4mwVQnpYVovhGxQimggN4FAKowMAdhr6A7M2w8Lhx5CBcEfWHzJzWzMFFVmcuf5bQSX843mZSU6xvHXRRrPY389b",
  "key5": "4QHG1a66JbLU2LCQj7qsxeyKqAGNLCBaVtnEGPvA96ShQtuzndPt29mSppKFW7ZNn7u85dUiLVgSmUGetgRiybMj",
  "key6": "HiVK9N6U63KmRjnJfoFkbjcTmgpoozyVZFNoCygbgBj2Nc2Tk4UwXoegBFgtTWPzZN6jLDhPEpmANC1zrMfPY1j",
  "key7": "3hqraRK4cYBWnasn5NVPVWcRsRHbKArD8CQXBPBFGhhZBrRwNRu8c1ZJC2xddY3tviQqCdAweg25sFZVF4u5NyNE",
  "key8": "4qQnMVyQFDNLc2thXZzofXXGfE9Ng9quSQqEHhVBajJqTVYRdNEwxPQhDkJzsgDq5cCJUyq6PgJJJwzcZVz6cFnu",
  "key9": "YVaY7y1nmUjhCMsg2cYm1xDV6w84CLiWkiXTP4GrXsTTAiY3WJXRDPXyKsLmcaVzDrwe9XJVBaQoKiLcDajg7yA",
  "key10": "4RmirbYEuwuSnRvVSCPqLi3Q5iVrqeNVZoK2BTSp9uqEAFAwtntUqf5xdWmTmAnAXdsJAuaQbF4dFvJbaW3bzgE",
  "key11": "vQ4QsP25Q7L7ufM2stseKBQhyrsBNAEdzhKP6xkv6uiHSu81GvRxSzzNpiNwyPGtC89do4HmopUGR5weMjSYdpb",
  "key12": "59HwDHYGQH5FrVHDXhs14pi6GpfpmFdsuTEmc8D4wbtXn4KSHg5L9Hth8KbzXMuGENdDan9uSSiqw9AUz1EAZKUj",
  "key13": "2ad1g2bHrEd7d3xP8eC8x7sk9PKEWr6nvm9QMrq7bJuh2Yaw7jLQ2v8SDDDCJkB9MiuHn6zFKcwy5wNQQpyAN4AK",
  "key14": "3Y3F2Wcf59tYxukAEnEsSwQT3YPkJETGXABasqVwcok3mouP4bwRSpEP7q1fMGdjcMAePyBFBpE7jKH7Ukazkg3F",
  "key15": "3fsnLzEBXy9YUyE9oAiMHMPVpAH7ZDx8tK7b4pEgZGExSF9BpnH6sBegmaz5gqsWkeuRwuCPy9KdvhgmToQe3n2j",
  "key16": "4FnyGW3fJDBmQ86dG6LvYAzCU9xkVUBfcsC1Vn5nW9P14cvavXxB4zyoTe8EQzeWDWneNWKGfyHNrd5mYsxL2yA2",
  "key17": "5iQCQhNcMk7x5JrKYyRAyqVZmxS3uzhAf4bJeTDaXBWLoNhV8QMT8byiTZCZXv4gzteVSApXAA6X4MJYk8oUk3ZH",
  "key18": "xhMYFuCjTbsxEgP8qavReHTVKiE5fQ2aLab38jS5GsVnx9trwwaFHuoTRnAeS1LEryQdYQrbNZV5hxgULFyL2oR",
  "key19": "QBbmUhH3CE6UmK5AuBvrVnbgbWPUBFMhs6uJ2T7iuGbFexfpLw58cgvQpUmxA3Sj5iTRboqbCud4X5ztXPBXdTE",
  "key20": "3xs6rk7fCuKiet4EdjSKqhjhVopGRXtCRGufqxm9FUkJruJriUk4DHJf3EBBZVsJj6FMf9EkYu2KuLkXYXtnxAGi",
  "key21": "4YDKCa54mQ4khqPYrTRP6tgxVJ2NpnLV7ixxqWxnXqeD1Y7Ue5Mf2W2EWd7eEYGLkFP1cFBv1C542htcJxfDSRJp",
  "key22": "PZkrLWrJsA1Emf47rsJkC8YpRUhYwrDNKBifsCZY8EFnUfpWijcbvPxvXNNkXRCj7hh3bsd3UFkFjMwqwgK28Yj",
  "key23": "4reTFhDAouwxs8rriJbvdhzBo4nRQx1CV6W4yW93fTvyiDVsh9WowYBXYis3V3t7mdedxX8YPWUmAbTcfEZdYGAq",
  "key24": "64SqXP2bqTmUJGhP6MGnCBpfdtmXgDQiNxoqsu6NtSz3UqBSd8wHequejb3FxuYtej99uUU1QnR2gK6UpQQyhvgD",
  "key25": "U35us5GjfpHDomRYAY8Kxf2v8cDxg5N2X5LBx72BzAF49ftNwHLr2Pjkebg6buyeacGmxDvW7RwjKbMWToxU6Wk",
  "key26": "36W1XPH3Vsy5aUsssrnrhcgwUeRTWVqDtJaERgqXPdGyrF8ZNtXZy3V2XmTX2wo21M2RMYVqvFNY3CGtMP91KbX1",
  "key27": "4avE4utRtQPBZjFKRszoqj7r1qo9LT5H7L2D1vX9sZCJGvRV2vNyyyEEYAR47GRgjvGGaKCBzzkSheTebntMBd8c",
  "key28": "RCtsp9eEy3EhPadtq8dGgy5ajNMGEqziFHSXR3MZXq8JvvsYF18SJooSCH2mK8fYZbaM6gK6ffi5uqdnw7o29q8",
  "key29": "2JpNQq7xz8jsPdL92vofXUSqGiNZ9wKd5mx8VYLPG5ikeYggTtZxz3nm672vPvM6Ha7JgoxaLJq6sZ8mSbW64p75",
  "key30": "2ZHqeqQ2YXLRymWXKgmkyU7vRrYbCTv2Y86Q16SxzAac4KR8XjEZCCnjSyrfNtjux1Ru3hBrjBQuPYYonCRGC8ZW",
  "key31": "5pRCE5qPceykFsCM5q297bx69Qvsy7azeu246JddY5zb3ehB3m3ERBDGrytXxogwWL5k1Er6ugDvvqBQU2T4ZEcS",
  "key32": "41ANRRdE5sv9twc4xjm5asNaXyyPj1n9CSYyN1R24FzFCX45sim9qDCrUQsbyXrNLbEgGij8scprWMLD46mMtEVB"
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
