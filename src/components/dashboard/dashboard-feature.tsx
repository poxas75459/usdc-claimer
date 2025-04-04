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
    "4YKp5RTKgw9mvfW4JcLMyvhjySYgXhcUJRFiGB7kX8kPEnwVqfYGo5iaNXnrHNw4VyFmxKe9mZGQsDjPoku7PMaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyjUBwshnFfjucJovymxVzZKEddxkBDxu3rtHmg5MM43RZmytYk7jd29G4Hn39s4Vt3h14d3fgjFXGq17KhGrbZ",
  "key1": "3LesUBeQfU7bx3QFkzy5gs35Mvk6dBnm5L1q5ZzokhX5xjwvUsokbnScJF5R6oDzFjFWZgLj8x6gwVBVr3N118WL",
  "key2": "mgro3q86uGyT4sbehGYkUuoduXij11ggmCxj77Av8iskNz9ka7WdYcWRrH4QxegnZ7vWTf16F68yukzZ9J5j2Wq",
  "key3": "39SK73x1L1PCiKu1KAmA8kdQ82SaEztqurkyiZWi84EQjDgCgK6kvq5M5HWZXRBnmvJ8XcUtd73uL8SjGQSNDZ6F",
  "key4": "4hyyeYNvsRLM9HS7vgucrTCycptwnuP1roNJskEym4ZMwUj8MQvvVoexZ4gsckSASprGknBxxigyxi3ZtUnkn5f9",
  "key5": "44LygrVMr4bn1DqLSuDYpsqRYe2kmoxrc9bhQJNCZV5HBUVRmpZvrGsfPLWKEBMJvJtBDq4BzXWcf5V2SKzrxQbk",
  "key6": "3ManZbGaHURtHbicYmoz3oN1rih8xTSdY89v6Qp9wrmHxYbmjQVYsE3BJHR8Zho2YtB5rGJ8cYY1jVAVDS5jMoFH",
  "key7": "3v3kthU1kXhv9QJe7JjvUM5XQWyrwGKypgsXCnNxpPPjc3Xkdp5Q5qkVHoavbbCCtVVXUf7cVxKQ8fVpCZKiyetV",
  "key8": "4uzKkpgDUaQpYH4m917qAuJrbGo3qL84n5JuAcmG685KRC3SCrvmGK8CMfH8hcQMvSMDHaW5Nu22f4fyLdkdTmRf",
  "key9": "2NRNzE8oG4mPrhjYu4Lw4zBbzwR3QDYNsXzzDWPLzLgrS1Kzd1EQATAWJ8NMuHJXK3DVJAYgrVGoDtBg2CHa6q3g",
  "key10": "2BocrdQHebxDbGcENncreJBUUf6J9jVNX6UKWJS7oFXzT48Kgmj2jf1RztkHdwUgXDRLHtBGXd6fgENP7GKqyG8w",
  "key11": "4r3Zq555ZAWwW9oNV5u2fUWDMmb69xxnT4vaRnWruC9FKYY7eaBzH4Qf4S6yf1L6L9AkL6etx6xyJRNskGUJkN7Q",
  "key12": "56DzjN9KWvzAWX3PYScU1Ekw4aNR9yWesoPkT9mAb3GCu4gPVbqdSW1ttYtcZGos1C98Lwemdup9qPgyPQwcrLBX",
  "key13": "4XATUcXmMUHnNE6YXBJ1Zv5Ar9y1w7iULW6sc4CeFdkRFfPgFPZZWBDgct5WHncLB269xSK6ruG7VKJsXN7WPbYD",
  "key14": "G78cUTFYeKMNnVAq2WzxSpyRbNTMf7ic4Cau7eKTQv84g8TFZassMEyWqdXm9JXggY7GusZRz3sxJxv5tNfizZf",
  "key15": "5159rVwoa11KTGJi9MeeePj4RrMQZbxygJvjx6LxNmW5vLFwU5aKkUC9UdVaVosDutTcZRHm22C81xiu1A6rH5xd",
  "key16": "obb1sis4q2umw9kP4sazB1B7QGfLz4tJc3XdYTXUEciDPG2UbiaadheNn3Ga4i4pC2G92ujRayr5NTosSUQ2ey9",
  "key17": "4NRA76ndxCRhMRSzJNqGDmwdg1m7MFDwW6ybK4FSbza5oLYUiR1mp7y99UXjJE9TR38CqSbPLXDBvWym1gqzb5gD",
  "key18": "2yRL4YPqRUKVZ7mu24Tgi7hAFKftmYSfXeWVQ6TWSBNVWSo71MsMLXoHh1cPTyxvg9JhaczyqDsSPmc3vYyVzEj6",
  "key19": "pVHpQaqrLp43HdtXV8ZYqjh3wc77Z1hLG3UPD6JMBhpxwmsQVHcGWUrd4sh8FbNZhVx91TXxRqtMh478TtbAjWZ",
  "key20": "hHhx2maFjh3nuWNaKpB7ozChiTHyy2TemSxvvXayjRNkgTVjmbWkCMRgB3i4bpNxaV1DietABnrHVbyQXmuc2fN",
  "key21": "4RuEnXJMJEpF1WWsQBvjZg5eex6H6oX5fErijRvy38B3ZTKq8rq9ohAWAFvrfYHk5fKVq45Sga57akV6t9f48p8D",
  "key22": "7urFrWMA8vESVJSDhALBmiNNGB86fgignNZWxZfnjoB3zvGE7znsGYTZZDcBTLJpUTNzMjbdugRWWR8u5kFNWpv",
  "key23": "h8Z6G8E5saom9ARc4wpxMjMKondSiafV6pvyugAdK9YkhdoUHt5EbjMAzyppmtkS2YrwrhoPHKVW5hERK5yWeDy",
  "key24": "3DV9N1JcQhqS8WzGiqLXgg67wA9QVok6faoFg5wZkgEEcP4pA3hnqwqSnaM2UYNfFxeBZXUEA6fY8eBP7YLqB5PK",
  "key25": "REazUaRxD4SEVeeNTMGiirgQHhGSHqXQFEhThmNtT7XLNtuRAqpu3HRAm13P89sMwZtCnpwBwCT1wfwyWfR2UDz",
  "key26": "5DHDZBiiFtsAR4TBmuSUstJDGGkn7BrFj17u9FfyTTMtp5i4ucmQzB4zoMK5QQaDUjTaCPdUsL8odELy3c9B1KUA",
  "key27": "ufNU4e8UZ2YmKw35FZsQhwYCyM2STMvUa5fzUG3NWWBiZerpJitzBfVFaSPKJY3iTrof5dR7CDGnRyZWoryCuy8",
  "key28": "3KUPkU4gZGJLQFesJtzhAAwkaxiYQTFuPhmv4MW9t9g2bDgjCHiSVdsPSNn85kQb2Zg6qXuanM2hj6mZJQvRN4nG",
  "key29": "4pdVNQwodixmXErKuXezSMcRfeb7e6ZQn6ku2j2ewcoUpQgeWg6KGUz3CUky3WSFnWkhQLFpZ2oYG8yF44cFRqAE",
  "key30": "48i3W8owaaEnPFa4NGRCFBNvjQFYvTtXQRcbfpsFePVpyrAc8kLS7Mms75rauyggsjf3vti9P4mCzce4qi1U6o7o",
  "key31": "5G4EqSygAj5jgQXGgjkHcsgXg9GLARKwDkqA34XR56AVF83aFMbX4j1ZmXck3X97Xg2ZcRLeer3ZjHkpj9iRMNJp",
  "key32": "2Kr6hiBa3sgYvmmqMwDTcdgbCiA8QKYa3tdWF82pjCvUh2yjiTiGiRirVbzTxYrYB4F7PiMv9anVD7sQgPFEfv19",
  "key33": "3mXcGFhT8UFs91gsRYD1NPwvrsC6N2omn36KXA4n7QFue3mu3SviAWxPt5t5Y9qTS4ALdvA4QuGNmQi67BkK9Tbm",
  "key34": "dV3F4YnZNRq1HCUQidqxADRPgZkQ58kWdF1imU3njuzfeLxKstVwS8wRMTxYGoPWzQ63zzsoiW8FnePZ9jaFzqr"
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
