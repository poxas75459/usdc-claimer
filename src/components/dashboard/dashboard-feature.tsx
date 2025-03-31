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
    "3NE4xRYfmvP3anVqrotLkVjvnUE9j3SUj7fp7dPRSuqMFNZRbNTt9a3J1bXARA9XAJxDc4Pgtvb8RGovoVtU7Exm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymXd89c5wRJR8kNRXTi9XNdGGaGjuwLWS2aB6LUwdKmD1umkVu1nL6ZD17XhoxQJVFLrMmKxnfATkuW72dsnGSX",
  "key1": "5QecJCdPpzPWBzPDsntNnVTBGuttwsZ9eq3t587wnuPjgZiQzuscbmJgBg8Uy2ukBezdrQhosAzPNvBPGu6NCUYG",
  "key2": "2JReZFvrgiTZZeDtMeJpvEiscTbEpi5PaS6ifdjjestctndVjkdsZNpwGZgmPPDQf9qjYdox1Z5UYDfpUsGAhWNh",
  "key3": "5gGCMBEfmU3Y4cbF2spbYWyBWhHAYSbfH6GMzxF66WXmWvCLJxbABWyUpbmEcBAqigJ6Y8huEjHC6GNCzdghGnGF",
  "key4": "5bAwFHLPZUZtuBypXAqdxRS7pzgvALANrfkNzehqJshjELu2wduqFFcb9pX9EsVTfRJDVi8omxDhDeBSWcpA2Ftk",
  "key5": "4MDpqcPErGod8tdnqmxEZYz13H76zCfJdR94c3Wopr8rrFprmq7zxLJv3urEYY66T4jPLvmVLXMoPb6d313bPeEu",
  "key6": "qV46sHGwvc2SX8dkSLFXcKDAL7UmhXT2Cwupgqe37FPQw4iepwtAVvYG5A2u24e2DVsqfK4i4nSyTwS4F84z6Cb",
  "key7": "4r9XRT2qqRKMNjWCzSWMERKmkDrbHuWY97wU3buo1f3py3TBvMjHEtikcJpD9TTFs3wcjQJ7sWan3MCwsHMkg4YU",
  "key8": "49skReD5zBBaSiBPMvAvGrHiCoN3WNgh8EVyiafutuZPpheSy38HPzxBorBw2GRJFhfiGQE6mKCubojsdBdVRMci",
  "key9": "udBEgvYLBr6SXffq78FcVKZUEzUHU2CmPUgqqQ8wRcbGukzfB4Zky1KF5fm6aVyw3KhKdvGV38Mw7rXHcGWQSFd",
  "key10": "2tDxaq3umwamTtzDujKv2eehbc8EaB6VqA1xNdci3n3Mm9724FCLGTP8QTCJRAcwdLn36o1CeKxoV9XkJMrdctiV",
  "key11": "5GR8diyYBPcKXkzAAHK69TTq6zXB6JEQY9b8HkP6qYDzniGLxp3rGGh9uFnbdiMwFvPjrdioNrsiiedNSwyYEKgj",
  "key12": "33EqECKd5b9mVpUzwVuteYi6SkaJXXm9ugdVWrPZyvAQna85ZUcRPdKvvhK9TjqKGymEfxZMhN7AoFiu9FAwBnR7",
  "key13": "3zk3Ffna5FPKSyGcgzKBgJRg95LiFzCrj6w9ctaSte4HZAxiWFd4CfogACJhRth7o5aGQDn4BwFu7HoEyf6k47Xt",
  "key14": "3KT3ZdjrqG5zRzGYbxeSYSE8eu7GnD4CJKp82SRkB7mA93T4kD3uxpEex81dy64V7n2qvhzjg8pV9SMLgCaYFfYp",
  "key15": "2j32f3iteDAQRiDnGwveLPn2nGyCD36nK1xfXstrRXz5URYMpesaeCBvAjuPWcqpqbKS3NMo2Va8GNhxspv1KW9",
  "key16": "48ZFRJQJptMqW15ZnEbUmU4zFaUwSUP82JdK3ToFv49waxvAewAyj16L6x49KZ77f8cSCB7NBuzbStqrPvagnAhF",
  "key17": "5iTNXVh5vVHjQ6QdeLPf3xhAmbu6fdwdztPfUPQx4gTuLHai14csiUUsdQHi95tExcgRLKsjX1cEDPCiumsqdE56",
  "key18": "3gwhxuoZfkGtZnNCuvKFFjtHS4Ria3s1MAmbup5Fa8qQiij75ojSrD6WkYPgwBuKjrHfN7piP9Zkqjpht2GcfmJQ",
  "key19": "4sRSJnQvjMoT9XJvJDpCk6RxHRQ3aHkWo98RU6m5CZWNEYQfwj8zRW7LEWeiHyrJZXm5gM8aLojJrK11wejjFYP6",
  "key20": "3v7DpauCyMAhYYTbUBPGzweRxx4zwbuvhGxSgNq3PXGPKt9Wy6riTrmZRpDfYg1eEPf3d77xuMQ3sDLozPRwM5ug",
  "key21": "37C7V6yApXtNHQCxjCpviuSkb1DbAehGf1gx1uELagHd3H9K2RmqBvHeLHvNRwcmovuy9ZBCXygLoci6p5QBkXMN",
  "key22": "neyhJ22rc7jtmNi62hVM86wMf62m82qWEW23xAsVLSFAx57aXh4a4JPFbNqumLbs92rLnoYs8UKyy7WLikEfUAT",
  "key23": "4PuhmPY5RDCUR7PWnbTmQxGT4bMREMrZco1NYe3eEQ7oqHUmyuKAQY2kkWJAFmqeXvsA1C3aJBLqJZNiyyKdA1QS",
  "key24": "1PBGx3pLJxRrarcTCjpXEDZEJiY3tTTQ93TdghoeKXvuo7gTfHejYdcQrbph5tnPvicFMUU6SukMZHEc8xdGM6i",
  "key25": "4ybJRX9GvLuwbbLYDERgT1qGc8AhnmdvvueAPE8LBi4zKB6LphcVEPmj94BmnW8t6UtNTJyNkYAH7HGqGxYQo5WV",
  "key26": "3Vuf9WPrAZ9yKqPjHBgWqLU4BmV6hzHme853ySKupMKgCL7A2aTfq4sGPJi32TqZBxdVrnHbZPAkH5tqjq6PAX3E",
  "key27": "2piuxabccvn2LFge6ovbNicifXpqfjxAuzZT212icN7RvGE2rvEqgLwG5v6ccS768J56om8L7pkSbhT7ffhi3sqE"
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
