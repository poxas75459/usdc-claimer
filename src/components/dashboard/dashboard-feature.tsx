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
    "2XjWruPEFdwrz7CJ62KmafN6ofCXGHY44iLka2zqpp7HGjcbxzAiGArXbXHw2hG7DSvVrNjHCi1no1Jgo7BdUWN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mjMtXYUKKH5XC9fdTYfRKpiKshtN4FC2wQsmNC2MPUCD7eihxkGZUr5Zgb4QXzu7JAtdoY8YERQv39cQqugGFW",
  "key1": "2eUwiVrS5SxX6kBi5WZcVHov3zqbtiMvfy3bHN3q8BTARzzKSLrmY3izSvWEC7HR7vDHbgyTS8cwEVvpaav4oVp3",
  "key2": "3K695DbJSvHhTtbfMJy9udVWMBxB37emxXmMmSYiaVJKHFJ4wdwz3DFyHCFXJA62gjLDBD2SfVDs4LZqFYZq6kkr",
  "key3": "y1KXjmRMDJ677Ebv6xxh63KpCdp5T2zQdwMgV6Ko3yFpaRZRSD5i1Yr6RdPtV8wdvctSswJJAyMWT2eM23qK8fx",
  "key4": "4BdGPkr74j5vKSLw4AYtB8Dt8kSEhaACcQXhLsx63abMvAV3SznSszQhj8tCfTNWQhBYBeB9JYc2bMTciraJ8B2s",
  "key5": "2sxw7FsG2RHvJhvbmSsX2q4tyhUiQPpKSUA53KrkAdM5S15TGRtXpZ1xtVVRhZNkUgwoCq1jpj6CCecx8EFH756Y",
  "key6": "32FAdsJbv5ABukL2zQ4D5F6ynpj5mxXotMyA2YgRf1D31ut1Lc17Qadrj4b1dgc9GRojqaufCTisq3ynhncK3fRQ",
  "key7": "22hfAJtFmbuxiCitmsXi9H7P1pqkhjAR22jn26Xpt3x8NCyfuqBSPEFYgXghJzncPSpdMXLahZBRc6JCxdPecBVd",
  "key8": "2hSiGv1sfPKnRW2t4fdbPaSUxXLPF1HtUSeLGCv5MoL5RrCsn4yUSeFbHqMH2aj1deTbygKDqNMh6DJh6JpkRy7r",
  "key9": "5xREFb9uwtiCnvjRWKWBLX1C3zXVDuf8KBSzazeNgSbBVnBGcLEp3Uxme7GfC3uCJtsntcnzbgJ1ScSsbG2YbxZz",
  "key10": "518Mvus4UnZGEkyptqzctkFikPqzViayh7q282gZXhrANTCYeDkzhc9TsGLrD4RAH5Hv5qoQi4jwVZgJKfY8o7JJ",
  "key11": "2BEJPoCiT1YP92Fri3QpfhmbRC4Vr8ReXfkFTvdwSoDMjMJ8iFtpv3Ea1SYMGWQ4PGaBLmZ1giDaZgQ2nP3J2HnE",
  "key12": "67LjSPkYTJFY8moB7Ee1V5Ddi5uioPG3KHT4c7CMNLZJKnfDNthsCabYrwMZV1D33ifYxCak4Sr8upbKB7ce8xZZ",
  "key13": "2SxrFc6sNpk6DuoRJ6yxXkAxbGjykiNxFG6QKDDWgMAmkvuaDdFfCWXyyyGDGwWb2CE2SnYuLSsFyfaVn46E4W1h",
  "key14": "2K66c32ux4TJvoCjr5hP1AwfjSDYEZj9AXHCw3Dy4qxWWmEoMAUUbi21PTckLj8kzRwzQJRGJ4dGyovAksufhoX6",
  "key15": "swxNDcKhUd7qiFAMRKf9euNmnXDRJo9jQwkNb99ssUqbRiSGSQHSWPxLfzPqwj31mswFwmwyrTBrAPd93uVJd2H",
  "key16": "5pTN4HA2cCKxdn9zQLixuRRsgYH2f8bYFdcyP7hXa8T8a5mAJHcHoyDXcmsH85zUn1FWTKxDAZoXGEN4JJXrB4oG",
  "key17": "56nQVXNMNpGsYpML276rHiJ4H8A5WuTj35faB6A4KMjfy7t6nZvnbxoS1nYoCzaDBf73jc2sh4gqjLugjraZK9dD",
  "key18": "5SNKKmTy4rKmEQuxBmTTeWPhsfT7LULgkcNreKoAJM7unEttPo9CCjBN117oCCAfU4QXekLxmmZYheuWSbaBx1Ay",
  "key19": "2wHhAa71u3om9a2GeN2RoH6yejgd416LThoynN3aE6UT69FSM7eg51FpyrUYdPETet1xFYUahfLmJn6MaYHyGNQG",
  "key20": "kpMXHY4GtYLsqK3DLcCzJSLEoPmifYfAQaw7j4CdWjvdwwgKWYS55endfjW1mWGPc2vjrEU6qaARZvCUMdtaES6",
  "key21": "44KU7y4GnpzEKRSLJnWhW2vhpQ2jnTCnJHLbSEQgmZs3nT9tE3ufmTNfHB4P1a2eKBuMZSXiQYFYwEUBpjrfKQfJ",
  "key22": "5J3pS8WBpmuFM7Ua9kpCwUTXRDahq9v3wSrmjC2MZ8MgAisKzGH1sghRxAm5Ttza7rokkvb4vNpMqkrXevPN6afh",
  "key23": "5mjLh9sZ1ynG13oHbk8zT68W8wxpfg6bFUEpbZVsBh6tadNuEhkKmqrr2Ftf7UnsfJ5oPrYUE7gLxCLk8PjPnoJH",
  "key24": "65j2q2wPdg4LC9JSrv169KzCrxecKQXHmwSdS9oU9TVLwon2EZS2hq45FJTkhWHTktw5hBeqRSM4CKn7hJjF3Gp5",
  "key25": "5PwMkZMWrj9E3ZMfTQoG7Ufxi8ZKqKtGcvVcQQPfJKYn21aGsBM4kpA44JdwDdyzDmxgNnRWUtQ3pHtdNyYHUopD",
  "key26": "5iN4Dh8MWagL8t9A7CxgBrueEpNoTiBv1VYYFGBQzscaoAZNNqnLvrikCBeKSqGhntcH8ZTR4Jnf4HibL1Nt5fDo",
  "key27": "3sjuw6QESqjnkcYsrdEVVqYdFJ9Tmned2v64NMMWUGcaUge5XMKgJwnhRdbEmoAp9tP4RfgAjPyRJsPvKGzMc2FX",
  "key28": "5Tqc3Ncfn1nJMqzs4nGFdFHxUETi8W7WtgEGzCavS7qCozu2UVziZRFhaK6vpuwSpKeZxpz9LXR2LRt1sJP1rmpr",
  "key29": "4a2rxwj9Vr5LgBvANtuLrhUXk6JNhi9jg98sLeMhQYP1ZZXK4K5GfUazbMvXPnLw2rsXiXzxagRhqU1qwreNm1k7"
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
