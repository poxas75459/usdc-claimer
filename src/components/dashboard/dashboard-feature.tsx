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
    "4oTo6Hamsaib1QFi81qQD4z3Rq5wZyGRvsLoPmJPw9ijy8vxQafoxMNKH6HL1egWd8RJAjQ3gKHwJ9iPU6GBkxWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmJbE9eVZfV6geUbFEAieETjDe3M2d96gdn7YAKH3D5kppGyGM6wNBBjRj2beWU69GPABwRrGE7ok7RN9z9eND2",
  "key1": "3byGfzRvKUqadcLnKg613ZMeDGsm7Ha6en5UpHwRy71U3AS5ozt52JKChzkX2i3DSeNUv57CvRixXTWxkUVtXZDw",
  "key2": "2S4boTKZWxN51s8VjhxonBJi5JEfQQHm9ZtedSdGSBg8qf6wtVuS98gwK9ksxEJQXv6mAKhLgN4oYzDQEGfwSx1B",
  "key3": "ecFMsPk3q3ynTxiD9MN8ZXoewuQsfkSYFt7BuWmy8s5MLjtDjp33cPheuLmxr741LiCX1rZMF2p8ZvR3p8uKkms",
  "key4": "48h6bjmmq4FhhGLUKUwn79KXN2quA59gNBKnjqmJNLMMGmWXSasXMJVjAijA52XPQmgk5Xr7ntTCQdrunDEun86g",
  "key5": "bH1W8Svb5QCevXUYgWQB92CihHbwzifMfJKaPU4F4PPeTq1f9qs2zNQPPk7fz8z9aW3owNfpFJMrQBURjPYkCG3",
  "key6": "3HTNnF669oJzhAFty33Raz8rfVRKKVhAKsPUMK67Sw89f1eKjwmp2frrJoUNUnCNPTfj9SBy5QA3JCaVUADbEqEf",
  "key7": "4zjgPPHdno7jxR52kHyAPfjpWSeNTki618N66YSfqz3gK5DA9jDUnKQwEFvJYmsVfAZNUtVx9NAQm9ZKR9EvWTqE",
  "key8": "3PMH9p5d7Z5gh3VACtmd8CxpAjm6ePL4m6Px3YRKzwx1KxR5GHEH4QQgFvGGS3yuD6oGZZ5QC8ExtXejmEPdSWcz",
  "key9": "44yhBv8ZdWP7M4RgSAphB7trWWaSHzfas9LadHfJvedR3chSWzwgmRo7jPVzf1MY28y8VvFGhz83NAne37u1LuJn",
  "key10": "2FTgmmzPHgt4Sj1dQjDyiLoBK94fBiSuuxoTUsJ8e5FpHwBD8AUA6ggd5U9YFfCSvXD2aUg8j2JFk1rfuMe9vaV5",
  "key11": "66jL6wVeuMa4cjZYmBRYz5Go5Tm3VtNRNwy5CzTwXH2ug15zTPWnpdCPDY3Bpdd6xbACqwUT1VXWpYeKLFarREgS",
  "key12": "4zoMik1MKsoc4wEi4m2twq9vyPxM6XP3cmEGVNkghgc99ssspGxDqaANiabFNqzpx9FDPWoDtoUBpdtusHKmFzpz",
  "key13": "658uT941RmS9ottoY8pzjbpm6gwCz2knSCsaRmNdjJmq1ttsnXtP2bYVYtW3sycjpFjGErN5fpf7NCoaG17oLR8B",
  "key14": "5SDLUBaNL68GiTAuYdqDfyu539cWVasWUmsbcriyDbbqcW7Ya4jHNgYrwPX8VUiwhVppSW4rhLUnMku9EeXNfhCQ",
  "key15": "596wgEpeJyzBA8Eeo7jzGzhBya8QM3GrYjzsP8X6uYs9fGJRkeBrSCuhJmmbcNLzyV3f2rMFVANeNwYd2FSNbgVP",
  "key16": "45GpcCChcevFanisEfstnRoU2UcFGSvJs3Jhaz1jSxuLPeFZNsNmkRBgWAZphAk9KaVzxnJWgeRkACTdXteZphWV",
  "key17": "5s69gotfxmUhn5fMBuE7vxJF6Bhruuzvpd4Edny3muCrKXZb8FjggCUDbWjQrNgMWJ39XusASm6sexvHUp9GYzXR",
  "key18": "2Y8BAJU1CPpMHEhKev9mExYW1ekJS1ZMpBk7rJHrgMjp9mvyAzVSeTT9g1ZAGWUhtREzkfHgkQLgR8HStanMkitw",
  "key19": "tpNBEsTy3g9LrcTmX57d6PM2WY5zFBkYR5A9m35htX1T63FUqu3BUYXZDAxkRp4HH6BYhJ9UuNE47vJQF8oaiii",
  "key20": "2zUBVKda8LpQgtG4dBhduP1SYiAhoVMb2ueuermBhCvBRhvQ778Q4rmz8mne8Mn8DRQcoc2BxRLfFJ4934z5MTGz",
  "key21": "57cMhRykivX2oS26g26S5KTmE8iLpcLdkMcZYjfEg7AAchAGKq3emsHzvAvymrkvrynB9JXXDtQG6rHTjLXDWz7S",
  "key22": "4E82pyQZR5TB76rhTrPbSSc4sAVzjAb3B5FofFgZ43WcWDM4UDpwq2qJ8U1AxRi2FzYJk43aqxtk4hCLR9HmXnDy",
  "key23": "3zDMsU4TyqEhsVj3JaisMieB2pCYCRfALx7TpBWJHLntejqhSddqHYWdokRP1ne3YbAdAPJHSB1GyaZsRXAdkXsC",
  "key24": "rrkVKJTZR1hb5zpCFFDRKMYYgjAgeAvQnNwiDKmH4kG8WBZmdMqmt641pQ1GvaX4TG1LLa5xNJc86ENrRD7pUoW",
  "key25": "FtD6BdEHWyCn6bLntVhkBVKchBMQQ1dBgKwkK9B7rwU8rc91gGoNdk8kpuFMGkLFUHfnM4296mYzbNjr9nKpCUF",
  "key26": "3YnbmYmJPNJrq1LWrNFbktw72YDWjgrAmXR34MNSSndVL5CxPgLfzuhrDZqChjy5JxeqNyXGZZVC4xF7iKEWpq6Z"
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
