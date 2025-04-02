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
    "2w75LM2sq7CNGaQkbJtWsJ8XyUy5iGfb4oDvx3XuE9kcVwWmrdrWG9RB7zWCXBEwPJXzkAxgLE9mSWjXPswser1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWEouXEaFXN5EHBNSkuBJYnT569Sk4AMyfXLV7f1S9DNeezt8YQv5p5YkNq993nooKrV1B5YjsqWB3pDGveybnx",
  "key1": "3ZeZ5K723ZHeMimsiBJrs9hh5nH5ELXXj6RQKWjNkJjztoEnKbT6x6w9tqSDtgFWRMgUZ4QR2c9gRJEd1idzbMpD",
  "key2": "53fB2SsxFDeZBL1jhpdmvA8cfDgyAfVgLfm7B4JtNjUons3TqNV9MYvSTRN9fT2yAxh1wV1HthSbU4VGMhS73bQj",
  "key3": "4g8BcULfw9jdS9GcWyoEVd1KmNFPrDFAmnNiz23eZPJmM1nFyu3NtncFjSgEwkzLaFNHwAJvizCgi8kec9ZhAi1P",
  "key4": "3PptNsGegBgSS6XCx4NFtcXUHYxJvGZjR4XzdkNNS4yMrCvxnTShFm81wVjzq1A4cNn3juhxc42Uur9DaMRZwmmv",
  "key5": "KuyMuA3MwTctP1NBuQY9i372E7J33fdEtBfVE7oGYWi8xncL7fcm75hgRP5BYXEJK18dY2Jcvnsd1wHBGiS8a1r",
  "key6": "2kJ6W7nbEmHeKVftAuWUhYh6PnsxJbZp3CeKraKYTsh4wBBsDuRwiMN6HAA6gxCPppujYFoMy8pbseXJDGNEM45Y",
  "key7": "2WSZ5yVq7sf11yD8FhEkr7nwXUWon9WNFtd8gHbU6AeAoW1iZaxubkqsaWBur8gvN5JytCfRtC1u36mXGG2F3nSw",
  "key8": "3NmVDMvMYHtQHkj7rDssPwau3eW5hyuSYM6JsgHrmBsXxXQEZ4ptE3qHrswY44pfd1SN6VCoaN3PmR7ZUouaR8To",
  "key9": "5M9shsz7MCs6EDG8VmFDB9v7Ase3Lga7vc43cm1fcV8eJjCrajAjzJL2YBz6kHFSqyerzfBtwaMPXdjYYHrdunUo",
  "key10": "4ZKJwVh2efvKzjesV22UekvH3CCjS9XD5Zf6dsb8Zrv2iz6xN7wcoRg7S1ui8KU9D1VvycQJUZ6kzSeJB6akXuAD",
  "key11": "4grX53HkPsS4CQyYNMKz2GBkn3J7mPhHu1iGmKxQ4FYWf7fiBJyV1QnWt4qwBXi46Q5pVzJV1yLKsGKGsTfJwnLT",
  "key12": "XLssGZYCvEwM8hMs9xuhP5MxjzyZs9JBTBKiWcorCPoyGrZSsKWPHbdoK27t3V8hQwUj8mGs1bMsGQ9u7juGF6b",
  "key13": "2ARa1bkQJCg2evSEo85g1rN5x66dWC17yvUqyQPr9VSPzXByxqzxUt94ibp89FRFGMkVGk5HDDMC73Chirp91eBH",
  "key14": "5BFjD5rHaLX2usY3t8bocKDZBeb9JLnfa2kjPryCakqbHDqQiz79afToZLSaSc3N52S2LMeDTHz5jDFvWSkmoW1g",
  "key15": "3tRtgZyF5utc274cwNUb8b259voRJsvF3Cs58JfMgKqHtDppxvtLKa17564TKFUZUznUvLsvpT7bXe8jipspBmkm",
  "key16": "4W6gCj3HrUPNZQJHHG4v1azLWv4kBuyPxTqeDZsdKucf76VH3t37cC1GtVJ2Z5ppP6PfoThdRX5aYHuM9x2HpZPW",
  "key17": "2vancxxwEjx1ch7AUziZN3TK8kpFDRQJvmKU8wAhhLXg9bFEbfBgwk6HKWHkQQnhRQuq9dCtxxNWkQ4MdJFW4nrs",
  "key18": "5SZ58UFkEyms2f8jpb49VzPxxfp7WP46eimHyaMu9n7pGuDJchhCwf3vxvxHf3gL9Ay8DqFMBpgjxJwib8ie6vTc",
  "key19": "4XCGQxSEW6AcudiWPSsGeVniJtmB7Sz8PwU6C2GW2YCMQExj15Ke8TL15Uzpu8s5oucmbZMmoxvbtouH8A9jgHdW",
  "key20": "5snznPkuQsCanpUtNgenK898LC64ZdBeGuF5sPDXAAvaKsvy4yr8o5QhEnygQg5khX43N4NvRWWK1upwz8kMXfjY",
  "key21": "4AZNg4XeqRHknabu3EmtiBdE3HbQJeQK91sVwZKHaX5us9ikmZEsx78iqw6nGfoxhy4nbE6yvUkBpGtB5XKwLrkC",
  "key22": "4AnkpimrmXxJJMV4JExgeg9WxVBQVh1oUtv8Z35FTBR4YuQ7dqwQscqhRshdZxA6E3Bw7Mfb4gNm8vznmzKfTJrR",
  "key23": "2zLZJcoXVC7kezGCAg86hYDJ7zZFKf45Lr3fkGNxs9upU8knZSQfgCsEqVpJxd1YCDMnzgxwBLTkJm1F2oCBcaQX",
  "key24": "2AiKiZD1bELABzTgypTqLzSuAmaPoG1EXRoLWkicmc96Pe8T8AqRBdx8uTtrJ58RXHgaCUcsNrhKnKpAg2XCTAMC",
  "key25": "4JxAzVDR5snvF4tCqR6gH5AcByW2ofSj2UNkS1V9APfGohyqFfWckudhw2kmRWWBXfPnReVWwQkw43HxHaYy3EhX",
  "key26": "2kmPrdnVqgPiStnSLZdgDA4A3etmeZyqMiyXr5oVrSxV5hoVgWsi7tJQ9M5NjarZ1M5jv9Es26y89Wu2ynR47w3V",
  "key27": "2baXfJycKjR9PWowL4zccerhNZBxeAmCmnQfgyA49kyqpimMoikZNnTp2rADSuhBAZRUmeaJELnkAQ3nR3sEs9uF"
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
