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
    "3YwpA6e4VQoQUURftChnuJeQaVYdm1WasAcoPPVg5tBPHy2LqdrSYAP1Jck9UinNRomoHqdSKjyq2bWPYrmc4w1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rm97K1sZL26PQYHjYx4WkqFNVJbBkrSo9Rw2mwLVqM6esytnxBSsnEcBBHPvUzn2CnQpBuQFKHMJQRPVUrH1Xtz",
  "key1": "3Uakx8SN2FhWXP6jC7WKugYyw4LeXrtFhBSntMztWTPvc9BNyLohAXPdSbd95kJzJfRoDbxWvFKC3jpEP7FEXT2q",
  "key2": "4fnteeRnFfX5AAZmS4sWRF5phQc5HUzf4cHVxxTuY4n9PtiQzcuyt99aEoeKHiw8EHRpQA48f9gikP6H95WcUsUE",
  "key3": "5xt3NWUsc3Kq9L4upzGLvrdrwgfYAeELCrihD3zBxyMcsU6Pzp4sjkvaCBBRFmw6ZMaSMwSZDCNrQaxJKdrQsg1S",
  "key4": "2mn2dZkvtAknWsb4HoKka214drYhYM1Z5kURAcf9ggat5jNgZUADLCUkYQmYdKiZMBce1KDTvzM5kpc391cC5NCL",
  "key5": "3wCX2raMPkT6o4zK1HgGgDN4n9zmwm3FqvQcd9vRXiTPGVyJKpcMTvyVhTu1G61yfnXsdSY7TH4bPjcNub36Evy5",
  "key6": "4J8zg3xQRGntQKRtDNangCxao6KKaCtYtF2e6HwrrvKZUWd3q1jHsocnXYCJKh4dMXoyh9tGKiyFQLgnCR9uzpc6",
  "key7": "2P2oHHzj5bevYizRZpn7nccpbsB7hZLiRQELiJzci1j3ncgDNYjBHXkUP6tGvfukiL93N44hG4bNLC1Da6WENjh3",
  "key8": "XhB2zmCWpnUEZwq5qgNy9LRCLce4FxMhW8ZZmHopHF4Fd3mV6tgRs92bFQmbp7XGviuzhEUJFvBQcHTyWPThqYr",
  "key9": "61MgAjiTG3bdpGAxmY8AtWhd1Q9jjmHvSweeXfwVrd2UnetGBQrtyhUdgT92LmJVB7xNBnLxwywPrKjxDhSVvAB7",
  "key10": "niK28EkEZpvGmpGmz6vET8pEmTHUR5qcn4vJQrZNgFvx6JauzcctzVV8TVkCQ9iic5nYdKWStH5gRDiVVZbStnd",
  "key11": "3QXpFCxQZ25KF5ACiESxqkGdteHhJqfr5LRdb1cbYW8dVYUt15adw7rEQr9wWrLwvycNJ6JtWkc3AAZhzKuD8scd",
  "key12": "433bPMxKmW4YrDMcJqweiGKYic6WyZUuKEaYqpguTzZuHv4MehjyG6PTsGVETKCcmbhqFyKMDwy5i8zeR4nGKKeN",
  "key13": "5J9b1qa9q2RkzdAWEbg9dPH7uAF1jR1VZqtwE3XeUUUh8HYsjKtChZgKzzjjQ4wSPYD1KDkNCEjRS5Tbf5uYU6XZ",
  "key14": "WMHYTkNzcMpE9w4JSyhYdiBbcrhuTCg4eQBYNwHdMAUCXHFD5M3EYaca8K5t3TR2wEe1s5WdYYRQ78eRnNfmwU8",
  "key15": "5J7nvoF4g9yVXJbTyDee9baSgPRS2anvNFVjXqudi3SaA93id9KKzyizv9s748fn1n6NEF2ave7HQJiTtazdK7dH",
  "key16": "PoWPJb68UCS3wZMKTMYT363KM7Mg2ZnRLpe6aT3xJGcrutc83ihPcfknRPwXLoREEqbjrwePK9fgoXYHqnXWyCm",
  "key17": "5xXpfQXobAMLQQArbZ1yuvipR4qRHVzkcsh2fKpcmDk72QemAbTuCL1JAhRWerXHQCvsEyBB8bLNtwhcbUEPhetc",
  "key18": "4AfVXdkxXhjkc2xHfmAuhz91KgD1MZNHgP21X1SpQwHiLRuALnUdwNPT42xB9bq9xbxy3iFqyE5Aqfw4HDHXN73H",
  "key19": "5Qtt2yqBc42gHUsTzpyosrvyaCMs2ovNgn8Dcp7r8e15uqZqG6wq7DHFwiohKV9oncZ2NcsEPAsrks9tJnkMeExY",
  "key20": "3tgm47QG4oJeYoczLoxaditjJoNGxyq2AohANvTkZNGm5tT8y9u3hro4RXJjnJiNeS92J2GXpG76jd16MkZtRVUS",
  "key21": "t8b7zqKjbp2QtFSfnEwgTFcnCYmcN4bycELxvp2RQsVN16Qdw7hj9y8tnoHCzh4wo5nC2VC58ZLtjShP6D54ygZ",
  "key22": "5645j7Lm45CB3WgT78P3F7Zb8ypQ9Ge6gNs7Eof9FQfM83kZGTraHgxDQoPgS8YGxzJbsh18pggyifpsNzjQ9Yxx",
  "key23": "GXCNrhcUucQJH3jrRd3W5wnvVmn2Jqbxizdzpz6z3cFzDEy3vNs3oNof7319sA7sa1t5pz33hS9TzDpSgE2CUYu",
  "key24": "5be898LDHjX5vQgRybVJaZ21GVVy6S2CbUnxdMyTXei3SUDP2pyiLUwDjVSXPiG6MfNRbDABUUeEo94VBKpufuQt"
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
