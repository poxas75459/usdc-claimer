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
    "5FowpWpYPhnWc1ho7fJNfw4Ygnhu8dPAbtj3pprYStfeGH17zsRpjmhQpTuQkzvd3GaA7jiUGzwffsePX8MaHfk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBqBMUoGP5C7VhfwJS1Wf4KLcfUAus8dHNa4cwpVee4x73xZuevEzaUa3hyTHy8es1L4vdxGroPcsA1cHg24NAQ",
  "key1": "4CjJUF2qWzes4xGRzgNxnyvtF23nJskj5WtHAr8o6xzbwRxnrBbsQDu2amQCoP6pYrvcz79HGVH8soab6wm3dSUy",
  "key2": "2ysLCTnHyEvSrn5ENS8kRQZohALMNBpwNDRnrKCoZUTEx5XciC49eUhUUz6Akp47TzyYvbC5LMQm1WCNVgGsaCeR",
  "key3": "5Y1M99gPNDeT15WhM2GzYwYLx864d57TWKHmxLc7ZoU2gy9g996pQdafsZBp5CAzWajewdHaHYHLqHvvkKgq8kcE",
  "key4": "3tay7UZk2H8JNxnhj84bB3Qyy1THmRJnxZJ2uPXfApiwwbJSb6tK6h7M6KrjyDAXgZuCSF8WGxUuEdUwTqXLFgnT",
  "key5": "4i946DVXoWGXuQqNqV5KFFqLWDNohmkQqtHm9AHQpYa1WyxhMxm1ypZSV2AEUkvnXZG4hRg9FHRsUfrYRsbMgv58",
  "key6": "5J7QMAB978LdD5Z4u9QjnnJWwDUKMgjnqM46jqfeu5rwx4a6M7Udb1dekayLsJW8NPSjpPUXxcBFTLL2JGKj4yhc",
  "key7": "4FVStnuH2meAq5aZjyUnz8iRJQam2LjUb6vUiKkwWkxBjgm4x5bJBTgtcNw3sFkehAy2uRJXwGEtP3sfedYjcJNz",
  "key8": "4havppSfcx9fGTczMnpPSkZ3PJWB7wo3q9CrSV4Qbvpi1LxwWBSvhSvdDnXRVWUKGuZmfxF9SQJ1iNmcKHArWkTZ",
  "key9": "fdrQ88i6hgwrUJDaneiU8fhCEfQUJrt5RMMmHcfLYXy7jzXfCXbXJ6yY1JKp9q4MzYjc9j71aEs5dVPqvyCcBsU",
  "key10": "QRHp6zKS8M6W1RRkPjeErNK4F7nf9isUZufQqK32cgNUsF9ZwmLTu8eySyrR3Y6Ukc5muJ27udeAMJHo7zPwfVf",
  "key11": "2kNPV6tfSDd2Ep5dbxpdMJw97UBRmk99uvBasym8vPVksMnP2M73aopMg717rGGoAcGkmUEniWipzTbJDzFYeZQf",
  "key12": "2b9kmWXqHnreLNubgGkVKtGRC2CZxshMUcZZ5i8FrwMDA9zigmRSeVm4p1VVqD14Pj5uaFyixTLLcpwiVF6F4JiF",
  "key13": "4Qumbu4hGkf1ACzNquSkXP4ozLsbTQGCWezLa6MiugbqKDcWB7SKhiYpVDjAiv8XWX98yFLA2KepVdnrj4RuKUia",
  "key14": "5wExJEnve243S2cwCDPbwEM7hf2MLx9NDj3JU9Q8Xc4ZXTHPn7vrn5t739xSgMFxFCHijXb9VZHAv2bmPg3wVmNb",
  "key15": "kDxKNphfzVsCdu1rNiXVVkZXriX5q25xaFF9ZfBBYk7xyHPsoMqrcJi7X8AZDQegnozCLBpJPMxs7ZGDM8cXTkK",
  "key16": "53ZLrwGvRk793jHowZduR5CcRX3kuPBVqn6KiEBk7sn2cHeMkK6Hesrrr8A3osdjeN2tqHv5AkzmESpjXdaJzeju",
  "key17": "K1uLX48fT6GoCw7ELGB6S2mUyWFnB1gvby2LbVVdME9adfEJKYycF27EoZMnp7Y7zDw2XkzdZ3REeFxsoqi6SXx",
  "key18": "5KNbyKA5iKMThe1KjaKjiQhYkLXudvNZaJwwSY61RvKJaA64XmaguyzsbYHpNkzfmq2ssLyn52qh7mdAvNLhppUd",
  "key19": "5EmcwVxPjrbQHdZf7wFWxYzhpdRbaUSZq2NTWAUJD5P2KyA5KJSLQ9YRnKY4zjWf2BUzieLx2RB8Ae35XhwjsLHP",
  "key20": "2o6WC8SeDr2ULjGLrHghT3pKPCvdM1NUn1seZxjoftof8K3RqhK4PAZGTfQMEN9eM6wNkhxi69hzPV8mQuYrhwsn",
  "key21": "4ozzQC6ExTVgCwbmyyzezWmB22cQ4t6iqeJS1k6waM8Hp9QzuLR7tvdQ8bH6SFrB8R1tswvRb6DY2PjwVrXX6gVp",
  "key22": "22krPPmrhpJBZS1Lcssja2V4hRV17HjovvJGNtQNU5kmiQXr2KqyUYWaG2kKxoDMuoz3yTFXEE5f6QXqnJ4haeRF",
  "key23": "2Y6MKUcH7wA8t11w3ChDe2ooDtXYKXSpmNkMFRK2G77W9B2Wo65bYx7LsiYQtKz3CF4qKpKS8i2trJTNQDoQEo4Y",
  "key24": "2UcaVnXeGnRj35Ccd5RZuCkoZZExYPnJgMj32edbiEhr2j7NWJWbdFHVxN7w9CCb2WU7gyaXrVZdryWky2cLr2Vy",
  "key25": "446sPLJxU7FQ8i678EZF5gqujZsAoKmE1BSDy6dKWeY6UYVMcGZpxuG9vdnNMefDZw9tdd6F8y6XiKgLN6wNMH1V",
  "key26": "2Tvh8cZHPuyCHKknTwbD3yeiCzGwxPFLqqSoKMWyPwv3tWzkzanAUS9iYyMZNGkiECpLvyZJoQ9dsmqnUUkEDL1J",
  "key27": "2zQ4abDBTzcujuPHQWiisxbbfK5DxVHcCturdGXpcbne9yusukpRnQSca6wBupEnKNQjxmUrcw5jHpybjUX2FLFS",
  "key28": "3ZG9zK6GyNkSH6DMaFfEJMaJG1tz8dhtvhSVeuJG8Z9EEBnReQj9GfZepErV8w5wZxr9i3L3PnbKUgMZM3rWkeyK",
  "key29": "vz7oxFNhuL64kZqDNMrc8XeXn69FDtmE4y6Xf5DS9dWeJhLaaznurxhyRGyf4dzZAeGGMukQrEudbfzX4C7eb3B",
  "key30": "3uCJ5GoGu4nkoCp7vRr6LjZBHgPWTSRSk9YX538xRyVKkRNppdJkiuCe2wazeCwjJNBCG8kqa5iFH1LLZAVKfwVc",
  "key31": "3s8yPkikqGaqwyGTcXaRHJu1ZdKP5bHC9Cr4KUdPzR3Qnv1ZMtzWefB7Bk2NrS5DsVLbNpJbFCTQVGjJXesYKGCy",
  "key32": "4C53B49xATMmsxm7SANMLjsM9WFuv4sUF69Q28j5gjgehE2cwAoGTSVwbkSKPXoHpdUiUox45VcpHhAbe9XLm52b",
  "key33": "3GVCwxzxdNJue4e6oTvm4ViykZcCbqejAC5qgWh31h4T4tX7Sd7NiS1BiDsboKLDKaLm9dwH9Guset8aPSk7wqXC",
  "key34": "ucXPXauVQTc1EuMxcSNdQ9zKuvKuGF7dhvxL7eBu3c8tfa3NsJyP4N8ih5DfgGj31cAHu42pkmhBSH1p2divfjP"
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
