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
    "3f1beBXjkUVZL8RBnkyGwrz95jQF2ceFVFqhgUdDie1aYryvJcBQtmi1NePvCVUfLi2NEBBodoTvGtsW82dtXVQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UF43EbKkFQPV4NVQoVgcBzPJ9U1P7ATaMuQrZdVu6DquL4BM4WDnRqgEe2nPU79ix3kWMChDZVaxn3mpYxcRp8M",
  "key1": "EUa5NwvWGbXxTYHUiB1esFzUdMkQi3Y8aERLP5JqP9N6moq3vHbhmxQPAEasKw3VzJs9zf268FVswpVEMZPwPqL",
  "key2": "63S5eKK8RNXQ9UKNAV6jXVwJT8nNTigpUYiH2N73tfcA4hV14F2ZuJao3we6kpHXM11AJn8vXwrgcuW7a8rUyQtB",
  "key3": "5waX8sEEvaYpPWaeUmbpPpihu8oUguvYamaFSLDe6w37ok8vEBHNPNgk9MFbsAms5dUPojYnX1ZjuGoENM8FCXsH",
  "key4": "KXSMkEh4zwsRxDg4gVz1QQnEhpzpDZcVhwXzxpuTJVrwRTg6pwxywnyuArerCyvLowDkx4XZS3S1VD6V4WuuZzz",
  "key5": "o9sTgpjudmcNturu8wEwgMsB28s1usdwvKPgRq29DzTyNRBu83AJeoXCa8VLHoheQyXgiP3FnnSS12zGnN6M1oe",
  "key6": "6659Ffahd1zBzyKAgxRe2wnaidR2gRqJHX4qqjcPhrGXaQbsyVoc3Xz6ZYws4dScx4vQhbYf5SCZfEkhx8SGc3fz",
  "key7": "TUV2FopYw1P7wq6jCZdBcfA3MKLZ7yq844VXn2JfK5iad8q1r3NxU6T3nUUwZ38pBmWZzYmBT492CEm8j7Kx1bW",
  "key8": "RT2u2iA6X7GhP4NzzuSUQbi81x7Kd2jcfhe88m1DcDTvhTk5iXaZgZAX56PBBFiqRbqt7Pa32Z5j4JAdp3H3oNo",
  "key9": "4MqEY1nD68TEDZR35w16hFL7KGMwPuBch5iiUesVn3aD7PGhJykkGwQzgWbagAwjpyoj7kKDcatuxr4GcrTqotXc",
  "key10": "5c55ujFhPyshrvtmjjs9ohNZM81hi9mMd1ai61bvXGKAKhnnGeYsCUWF18EtfZw6g829vpULvPGuroQhzoh76LQk",
  "key11": "hBAMTMbNAyz2wyRFMKtrUrCPKWqX4RsNvhTkHjhZ8yoQjr2YVKpbgcrX8xBfopCYFQC59geB5YBYNQTwru9zQ3e",
  "key12": "5vPV7WgbzVbHSo4x4eKkAPedVk1XkJUQAmhnAZKuLnn8MfUX7c4CzyUJUadgRy1Pb4F9KNqUYJYc5bQvCDoGUWg",
  "key13": "4HjxDKxp4sPYZFC1goYHDMnjb1c1rcseJsrt3hdeYwe6hR1Qq9r8D2K83q2AyzDufySGNkGKEGZxmVqhBWFkbENo",
  "key14": "37aA2Ntoq7cas9yDFxwKBizV1imHRV8bfLxTDGkbAVyYTtqdiCkuBfwSTU77aRnSLXyCTT9iea5NeGM536fyU8r8",
  "key15": "2FhUBgemB5E19KcU1j5dE61MSANdRptYpvAfgnPVrytCDMn2uUHhMMh7amsQQkC5MikHNN8CT1JrKYL29pUFj7HB",
  "key16": "4nH7gAG5eTy6U6v8drbh9EANYDmTiVagVD1S6LMrBfdCvgvT2vnPDiMnfa9LtUXQDzfzk49zMhNEiK6HD6dRtvqM",
  "key17": "2FGg3Uv2DFZyrCeP9GghXJ7BavsF31L7w91vs58n8r5yedahh61k3jQUFVy8ytmhd8DBcRkuFj1FwvbZNJyRYxLD",
  "key18": "4iNYXWV7XKjMeuwZanhHuKGeooPNhuL2Kn9BwQYvoMGKthD4vbfHnZnxAvMCdxYex31WTpPFWDEnnKNwc4BrdU7",
  "key19": "5i8VYydvzsCpb9V5J1tu31Nnop2m53tJPZhyM5gn7TAT2QaudD6EYNCUoGu9jwM9XBSoBzAG657876LZDfd8gkAx",
  "key20": "47uvaBhYYrRKf98Rb997SVtzKAnpHpA3wy21DpU5b86g1dDQ1gJteD4dMcM4ZeWa5CJgc3a6UmxVBYZS8LjW6W2n",
  "key21": "GiPhP9iR7UNn44rg82iBrN3LzZZtYEvDyiYrpYzKcLW4f8FVcCs1AT4iLE6Z43L5nHZ54zpesb1qNdkykLmicaa",
  "key22": "2HmXYadPfQb1hEKfB5QRGJ5oitFCB1z65rVJa2u6uJSBc7KNAVY2kGXBRCcgLGPDt13tt2V88x8rGVQvgxN5r9LE",
  "key23": "KG8fWYs2ynLZrF945CzUqWuuWFSWST3Qmrke3aGZhmrhPtHs8YUmFXKax9Q39ybNr5e9CfEwSbEnx7DAE3K79Z3",
  "key24": "5Bsyw1x9VG45vonDktisM3j9iWRfWKmPv8HZZfVv6Wu9hVEh8CZQZWRKWRtkVyWGaXA7pKyLUdwrVZcdc9pPsSt1",
  "key25": "275mqtxr51xMyj5r4ounAqA9xZPsN5wo4rzRyjo5L5WgNBj3N4j9RkyQY4qhgGiRyU4Rwa3ULkw7BESPt36w89gq",
  "key26": "4SECdNThvTFonVAUvtXcCwT9gBZXRsVDz6Ek3g9JyCnCtRdq4cqy1CXvD7CbUwxA25jrYmeoSpr7RwUNTsV7Z4p5",
  "key27": "5ijvihqDxMEZSKD1cBsW3ton9aGkPkmmr4Xg8khwnNWEypfLG9Zq4SzF2d1uAmM24MDnioTCyT18sfbL2Y3j9Je3",
  "key28": "5vSsmYVgte3o11ezhjEZkccxmoQwXX7w64u3oDbVRagyXpmkbMrLxuaR6qycbtmHSmgHsyibHudYB5p1QHDTd3Pz",
  "key29": "2EA5siwPQKcAwVVeAKhVz5kznjs85CXufLYs4KXcqBxMDJq9uaJ252TcrWLGi8B9QY339pqDiC3ugPtrZWNohLTN",
  "key30": "HhhDHQQf4nGdhLw1Q8qj6au9uh8Qo4LbM993aGZ8px3SUDHDii1PUfqaMQJuBVm5w6RE7iXswjzwdvE5xRsgpXN"
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
