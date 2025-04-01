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
    "5vPiDh2CDaiuxXGDSuWta5rBgFuB1T9sZtTggcRrpGk1zUqjhXr9eJTHu6vaaF1tXnHzKZPRWwnFXc8Q8zXArBR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvL5S9rAsc6fNvaF4mT1hP4jvsuc6ZXm47M7NkXPwGTZu6ymxn4fDMfL8CAM593KuWQYcKoCqM4SD67UUp4tNzU",
  "key1": "4bbQyzAyQcEgaqY6gXjP5sPeSxwEUezDNLQCGBohn1uyrub6rmAbvFEedYq7CLmL2hkUSEtN1oeCUPno76oyHxos",
  "key2": "2Fjd3fHC2dMVxbweUqVBWvvBEVhhb9WoFh19ZtywzsruBeDqoRETSCQov2SCAfsUaQ6GH2Pdbi5ggXHw3R3sS9Ww",
  "key3": "5JEvtcbNXEHRVxGHYaH3ou3JRyEaGP7TnbXT1WJusXFoJ9sX5BQCdrk9G4RQxXAsEnmYnUf4Scn64BRjx73xkL4d",
  "key4": "9vjJNhXeP6trFXbtBHs7Cod3qrC61PVkPSoTMfAY28DoRdNUBXPsnv8pNP3MezYyVrxKSYuSnNvM4WDeACDcFyn",
  "key5": "3DMHmhCd1tjs6GkGk6C8AsefVSBEYSY8HaMuKsDyLdZyfan4Pw89hjJSQbnE4PkByAPvJnijWwQyG8222gA54rFx",
  "key6": "52yH5FFtyXih8s9RuxVpJ2TypaDbzKQTZrPxF9oagohiou9mWxxviDnPRHMLvqgdhQoThgusNrPDimqdc2BC3i5",
  "key7": "4haV52tsArwp8af7e2hr4DZhfebAbtXkhpiAwSPHHCSonkNN5MgZYYyEnMiCSor9t8LQenVDjzchhPWXLP9XSCTJ",
  "key8": "xydycrjeAa1ijHpaxiidH98sb18MgSfTjwX6D9MtvEe1zLoMeDqqFoiDXuSLguPGQNUKwYjfzwQSkdFVihox4oa",
  "key9": "3PEaSUzYkqDMPK8AM6iuhVNTf5WtenwcCr68UjdKakjkrKE1ceLEHdEoDZiYvrvgDMh7PsHJQuLVHHT5EJLJzBXh",
  "key10": "5ZZvJTEb3q8gEmu8JqUR47ZuZjgS4dG8wJB7Mv2dnE5L6zjsHjStC4q9pGLGZffy4bXC5eovgV94Vve53j6HsYj7",
  "key11": "2D5kkbHX3neyfGDZp65iDuwfvAy8Ct53g9kXAozBhwnXa1KZPUG2QeRsPihqvQo3uHiFMn3Qb5d2qEa9PDXBuCFL",
  "key12": "3vKVfvPCyunexa96XqGcrppJqLSSCnqZ4aBPxiCrroqfivCceFG5fPsSoNnbR7Jc2E3ftMh6hioxyyHnG2gJw314",
  "key13": "56htA1H4UbMqhz3po7dBdHSD4wu5BiGUcL4RWEt2tDgu1TqcmJy17GL3thZTRCAQDAaMYJYEbobNopnw7bnRkgkC",
  "key14": "2LVE2QyoaPL8B8DWC17S2WYcFRdSY6tDWZ7QgZvUiNostsvUZSfPTsRHPEJYG482YYJVjVSYNumTwEVBzxHtFJwt",
  "key15": "5KttUnzECNqqysVpPARoH9JyYGDUoKcNLMijk5EAxLrQjbJmjgZcbVbofhoKeb4nnGbBUFYRv3YSXH8yUB7WieAo",
  "key16": "oWnu8uUyiMobRiTRp7Cu1JT2FpkLzJYx3vBpgzL47gqEnELi15hTD7hEKYs9vdNyHxLasqsjatQFPCv2DMD7tT3",
  "key17": "h74JdfbLM6Rdzf1EJAkst4imekta7v4M1g11p1DRnRtxNP6ZG8ZjH52zSghVhRRDKombUK4xMQrptERWTNYdr3e",
  "key18": "4nco6wTAZHkRGkmm5txrLX48crmcyJDsJzcNwHbdLCUWknY47p8MaVqLddzKqABL7myUAzZUKq1958cGTnR1eCAF",
  "key19": "4uSn6cMMaGNjAYqXDGCqEZbzS47kXzh3SDCCikGiigLZXG7YwVqE7U75vcg3igg7ZyE56nyhHhepPuVGHUU5R8pM",
  "key20": "37owraPWoKecLESvh653MSDqB6EgseyX6YnAESUoy4Wm28PhuuhgENJT3JQbT7uqxYdSLVnxfhkLohHiLiP7znSy",
  "key21": "4h91ck4wjPNxvxK43thkxZUrMmPUs1wu8pYDeUUX39t11Hx9MWUe8Jh65mziMXJUMe2c9TPE7jQB4oehASkq7ejj",
  "key22": "5Gs6mEV3NvfPMcYETv3mY2mU4t7xXhnGsBGXjFHRT4ot7SGaL4v6mcgWjGgM1Zo2qo6v7pKuZGm7uaJAujAhkL1x",
  "key23": "2sfHUrXSknHaeAaaqHKtwTLQnXbM4YAZfz7HNdA8QraEeijzessgF1NKtJP65d7GAr6Y6SMpPU8NCWyxpfTN3NVN",
  "key24": "3kxaPr2y7kvdY8sWXfaPSBQhvqfap3cHmjBeXoydjnxCWNgcN1NuX3ntSNhPMRPUYGrpcTunczhS1NoZD9iNCQ7N",
  "key25": "42U2JpRQ2zWZDhXWtN7AaW8dc6SkLEa5CZSmv4a84s2pyS8Yfs8e8AfEpE9ALTrMTydfM3sm1mG2EbEbN7xg17mt",
  "key26": "WVGPCsXRLSQ5hvM5E1sA1uRGtNswJA5u28P5akRtbpPaxVtjiQirf5pz8LUkUNzNq4qQZHzS6pPC9bj48yZhp7A",
  "key27": "22jyc6MCYUp8dspHZthBD5bW32mNsXrRpCG3zGeH4yPQ1syn2GyE16rivpgWoDB9eBH7r9ontea85wCY38CZ5RbR",
  "key28": "28R8VftnxwJrrjqJRYnNBXpv6apG63q1eFkKgc7WpkHqLngLt163iKAw7cL8Wthe8WToz99a6L7TWycAGwzkQfvZ"
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
