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
    "ucdX8V7L6VxPAbdXyR9i5XTRY6dL6wp4vy95go5bDN61XbxHJzqNYbSh4ttToG9tb2MamHimA5VP9D89YYvLNiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALTWPzBR9LJjrJd8Eqf4Ue5VjwBnpGEe6vtS2EtsGvjDjSDQZZWPYpgCmKBwkFxx9mMPZmRVmtqjLGswm2xhJYq",
  "key1": "4kF4L3DTgMeeUKsSZsHGPNxg8c47bg9P7pV26PCfHqXJQrTh79rkzgwBZo3BEVuCkRpo2qjvy8BrSb1H4WhvEqK3",
  "key2": "4kNHakU8XPAeZSZxDQ3pCYC5WKaWkji75iZrgwHcSrxruUDhxuxDt2isrzTxEtanFU2FpJZWmDkWY2Wtwo9KiBGZ",
  "key3": "4mHuDLyyk6nJ1gJaDPn8enmGL6m4jcES7QcbrpbwZsKkYes7k432tDNFrvM2ib7uPQPfHzAHkuDyghxwb7mrHSjf",
  "key4": "EL5jjdUL8QFMrgg42k1sqUfG7THwguxTA1awWtnGq7QkdKE5X6VUDb2CQWbhKGvgRY7EWVpsq9GVgurHqakkzMb",
  "key5": "4rwVwaqvbQSYALKu1iiJ5LcNNwH8wHjr411NWY4Sj3jSBwqotLjNmfEFGdti27TtL7GpngwrYjqik4t9tsreaapL",
  "key6": "4u89rE9oduq5acxhNWEFTrvPgjZZsoF2NyBuQsyY4HxnnXoryXTFxMsEpudBrF71u38dyUGjH37Vd8pwzUvf5Z2Y",
  "key7": "iu6HRy2wGomkeNzHsvTjtju1JAaMeER6BdaiNVCTAofkcXD2FTHrBibj636GKqmhvxTgLGJG362F7wyvTYCQJfV",
  "key8": "5ZbMGUyS6oeFA9CZiEdFbRwxKJMPdfjvAQmNfnYMr2e7XeSMc9c79QVjMd1zGJJytQW9R8vK9H1nwP5Pp55rkb3V",
  "key9": "4w3mi3Nr9fe9TQQbS1pezjdZXQ7QT9doNLar85E2UhCouZgWqgBsoyMFYNRDkyePFjiV1uQQHvWKx2HGa2XRThw4",
  "key10": "4y21R5dW11TXWWsw8XaH6NXRPUKGKJVeXPnhsLCHAhuECf2wbLRWYoheFR3Me3N6okZb9mtiaj2L3CGa55CwdmNP",
  "key11": "2VDcP68XtuYQWmriayFJtB6pp9zEoLC6WLjgzVECdUvdYV7Qf9fSA88yvnmCn7bbfnUHbPekgV9wrMGfRxASNvqh",
  "key12": "nCZSifm9RbpeFWM4NUnhK4pgSsRoCNcPVwXA87q3BxALKK6JjEZwGETiNMvDwhjNqV3fZig6AchbFBxDNHTPfPe",
  "key13": "2ZzZ24hv6V7sSmghfQUL75p2T7RZKofumopvevyjpqRXhMCbbTKyYKGQZyXnD7GVgQ7Vquce6tyYkpURRRSxzCbo",
  "key14": "4VJ68RhiFGjVsH3Y3GrVUnqQ8HV3HyajsjTDBTXkXW1pB691hV9kkPPDdXfUzJL7fUGtWzHtJL5MmoQ52eA9sKzw",
  "key15": "26rAvC4D8yZriCKVWiSSdUavquLqgsZnVeJuqQvHmuuTRtmE4G2PNjqTahvRwsxb2r2EkE47a9MxXYa2WksTen7a",
  "key16": "LcfYu1pPGE8Yo83fWMMAAj9cjNa2o4T1WdLPqFdWn2P8B2JiHcpKQczgak2k21rS5C7v2PLaKr63heorDBQ8P6f",
  "key17": "2HQkixkN7e2rYZYL42b66zZspwpWtHK1QvTjqGh2w1mDnHiq5zTmDvTDQStVH9WSfApEh3R8DHFPKEW8kcYy2s2M",
  "key18": "3x1oxLjQmxKL1hyyXKDWWfUmiWmDCHuTYbEtQmV2x63V5RLbweTQ3JAjys29DwVbmBcdeKjBW9WoT5VSx192jake",
  "key19": "4YD2PUqCAcVwmgGpzSw7mGkaf9kRBYuutXuYyyLShAKw5MTZPVzUHk58WaBqAvXZ2zTMysTnK5pKdQqDRPk1GFzw",
  "key20": "4k4ULGH9zXUAHJQxx3TFV3KGGwDYjL1uuTr6ShFvHUGoU68bXiEf5S6nhswCcgFNFrQWMwn27KfUJPiT3tvQf3JJ",
  "key21": "2P9oFp7UDcaSczcFd4axPJTDRvHyeJMKFzYMWVHU7uiLkV1YxDwZxqJaQoJEjsDYdTRRXsm32VuwdL5nwB8pD8sh",
  "key22": "3HBhRYUBCK6v2Rp8dKYZREMFjmtdyUhEYhR1baVEpxCUV6yjKaqkxaVuAfXE4qdeA7vmgwmmZyBT3va4h7RUmCeW",
  "key23": "43vtHhe65XqBBqCof57Ugxvznxc1GKJaMvTW7yQJU4RhTSAUTqGwFLbAyTkBndxr9BYAyGS8vrnSBbeBALWEriWy",
  "key24": "4FVym3RuWCw7njcs9H31kLy8PMbZW8U9ys2fgnPPRDpxGSLHpkJLsJACvYcf5VooCo9aoCpAy9Kdfp6tHhGtfYz7",
  "key25": "QGKtNSUXy5ZoD2eAHtkjtm3GnHfXWwC4Rg9dCHxU59YeyXkykk121oCqfE2txMHDCUwaTHebFxgrCVKbRHJLKNd",
  "key26": "3naCgQmF8C8QJsaukNRKvE9eWbQqGdgANw9WYLzqbJB2iTqE4o57TxbEtLkEY6g1PfrffgjKKH5SvrCYPYtKH3V5",
  "key27": "3HUsDr4kAwXHxpu8YQ3cu6kK9zHZEmW1Yygqu6DBVvE9R7hwdFYoxHRHwEfUyxexWE6NC7BfU6oeQimTdNSFzegw"
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
