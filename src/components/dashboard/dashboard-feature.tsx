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
    "52xn5Fxk3nzXJFmcssdnMrt417daHfwMy4tAZ2Cek3PiC8bNyYdpVN1L1fyp4xN1dccMtSc2BdxB3krXFhVox7yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9QwUdYdsiT6yFG7DKscYZzwggemh421ABqmjfs8mQNMK6oWDhDmmUP1wa1ZykGDgECtvpxfDRLSfm7dhDA4S3i",
  "key1": "3wyCWLLDmBKvF9NoRdnUg271h2u9JhezULrAA1gtBuySQNYLzjKVoG32q9J4cGRHp1CxwS2sVQcy27xUzWm7nvae",
  "key2": "5PxH4yE9HjygGmrEJZ2QLbmwAmFEmQWuLKccEzXaMHDMzfA8Zf9cAZiti2JJiu6gfaUiezLarVakqLgGU2grZ31s",
  "key3": "LJDzQGdCGMdHDUHExrZykRhL7YT1EoJZpmvA2bNpfjUKkWFmkrNTki7opuEjFrvgxdm3BZzpnz7JL3tEKqKek6M",
  "key4": "5QKuFbJcEt5sZ1uRTc3jyHooYnFgSxbX4dSRJjTbMpZy7beHPVMrTtpfB2c2VMKWxxJVBGPkhzx9nob2eS64PfYA",
  "key5": "2jVYtZTdPFudXL2Jnr8TAyEkRXN4Zne4Mbhuyim9ALS4YfN4MKToFSeiU6jqqxrD8GVmxvdwFY86n1Meex95ywfq",
  "key6": "2gq4kAX8D4HKWjQGCDnLbL3Qe6akKvD5dYcD5duXo8TnmsdmbAtWipSs9o7uAdH2MKUwT249X25FqzCm8VBe4ZoU",
  "key7": "462NeLH3CGF2MGxZQ8vpXj2jTQsLHxcbKDv54C98erfbAH1mXREBMVLDFHnUu6RhjgMoEVJgL14FDPd5LSX7yfCj",
  "key8": "Jqgbhtr6r39wF9uZhTZrRgc6sMbCio1bcktH3L5rG9Y4ARcLpoQueycehfqFUogioUgdUsrDivmzvy1vvgM4v7v",
  "key9": "3Yt2xEqEyY1is67Ym8h4ZND5vDSf5wWaMXHB3Rws2gLQsv7LntWUudhnoih7SzBgNCTiFnq5WzCVVJajoRwkj8jp",
  "key10": "5i991bcWq9Rr76Eax4JhvUpyiStxEQoWgXDg4H2Ec91GKXQJozzRrg5jnajCn49o61ukrtVRHWGuafrd6rFAF8gy",
  "key11": "4J7B3JgQGTH8JFNce2TxWYsh4CE743TQ9bAb8AANfTuMybEFVBfggB6VCQKYgX4eMGcfqHYkYBCrprpNBaZ1qAP8",
  "key12": "4AueodPC5rN3ti89APNzx25ji6Ta5U8S2rK84roEcyg8YRoGUeVz7aS46cWKGF3Jc88VEtex7CSxbN6GrxwkfBAN",
  "key13": "2BS7akxYJUqCVhvSKjrat1QoTKX1ro4XMXsoe7HSqsQAD4RhhsVxgYdus4ADdE4rYER8kWMvZ5ickMJTiZ58n7DY",
  "key14": "2vuUEWUtfrUqByRWvMCZYRcjHvYvv5F7gc4pbkeaftk7SBtizPHX4TWUqiEA3YNSJmrt1QsRnzm3vzuNYSD8Lq3C",
  "key15": "4JTXRVH9pfCqQCsBtLR2uhhUU4nHKGU5tc7gBuoeSdy5zAPGe6N3K8QoAJ5TbRZ8Q2SWR4roHdhNRxJN61aCW16L",
  "key16": "2VfQs2deJA1CRSh25kNVXeMTu7BR1LJAnDcAAyUJmBzfMvfLSKh7DN2datCqexyPwbar8zhA2BovG32gqVaYcsje",
  "key17": "3a1ZqJoa8FQtWbiAyad54BEA9kzwocaVqYLViZH9siabB4nkfCxg5D5K6CpwrbwqmXnbMmM5xjVgFJH8QtiJooTZ",
  "key18": "2YU8G7Hj9UdFLjppBRbLxLLRLi7f1j94MG9fUbaxYSVe3agr6RSm2LdND2J5VmwjvAr5MyD4WkhYHjxBNMXgnfDy",
  "key19": "5nBigz92J8wqZNgv816S88yuVzvmY1SQ6kVvS53SHC33zAMj6XZy9wuPUNBxrccZh3ZiEhMUNkVXbi6UvhtEis9C",
  "key20": "2SfxSAvdJquWoDkKAUdffD7BJ6DZg9dAzupRY8tLCgxg9K1queRzVgYuWLTE1z7rZz8kDpXM96iDXFKCajycu2pd",
  "key21": "soFB1KD6uwk8SSQqKwe24YA1otVwrRh2MNQf2zevtS6UxkFNe6gQyhhFW1d9rwUmyy2eqbkGNnXnERnTvhBqV8U",
  "key22": "9SduDLRWT9Haa54Bx2gPxuytz7ucZMqBkRkQgXSc4TZynj695Rkvyo2JStardQ7J816p6fyGnpGZxA4vEpVmdqj",
  "key23": "2QN8W3DaGDBhunHZepfYSEbmZ1n68x6mKmmtK6dpNvHh9Cn1BwrV7HrjizBGEqEwjqJBwP3n3iRRpdd9UWzdAo4V",
  "key24": "5p5iG8vn72yg1SEnwRz8Yih8Y2agA54yw75r1oHtcuMKpJRZXowY4kx7fddZ9rEFdoNZvbZTKJkYh4bzoMvayF27",
  "key25": "46mBzvVJMkc8yE8zfVD968abiCAJKZssP4FfXcWaSLXy2iGBWtThVKQAWVXVHHkciSphL7kXg4H6jpcWD9C16Lkn",
  "key26": "5cRJBTf47pvTWejrAmzaK8pkLmqKk8N7HjbRSzcbezt9sqk9213haxBoD42vDyBvgNoSbJXHiWEU9k7UZH4Kb3Ss",
  "key27": "3Y8a8zyU3wB6Au5XUm4nZRvkNMY31n6ps6oAYvXbCaAunY2WjbSuUDPsfjie7Rr8GVrpNEH8KFsA8o6aFPUU4V5Y",
  "key28": "5z9g1M3boZoo6xouowvcJEeqqWjKFiwZZf5yDUvbDPGu9DqnLo8w81awXN7o4siQVpgBgfgYu27hwXgeZsESERin",
  "key29": "4ExtNGaZNzvTtkdJ21U2qmNQ2EJCSy5RXVaL2cZRrFMK36dRTdi64KmCmYPFBn7tk1iLLQa1SHHDSFPDtD8WHtmi",
  "key30": "5ZJ8w9qGut3MeC3wiCVgig7UEVnWGcC9mnKb1mioFFwJ8h6ShTbBdVH3uwr1Cw4LMvQXN9emxx8rHPCoX6faJRfV",
  "key31": "55QY23FkRGunej4qezedDAU9mYhyu3gSjA54MKfP5S5C8eUVvV2v8H1HcHLnjd6WqmqF9JvnZx9wAa3c1BzD5D5c",
  "key32": "3MKBVe6cKzmseQhMSBHpRCWjhpcmXLAWRYqHELivpoLVTpCcQ5HXqj22BSbfLJEnQ1dc8RJCNhQbui9kPv7uQCRA",
  "key33": "424LxxUU41vxsApiGoksXRUt2FkxmHTmQzuWJinbQzt45tkxpMAjriBrEHVenFp11XZcyADGjDTQpiPNtSQLQs2d",
  "key34": "5GsfVQpkLtdyS9FtFGL1USmFcUL9nka3eruq8CcNTm1hETDgNGkmcX8QF3a7zhUDYZiDUM131hrS4ShPadT6JHSJ",
  "key35": "2eBD5shYntocd5SwdUBN1S4nhZZLJVgvEzUsoNhrzoJ89CZSy85hvYrRm8sAwZbu4Fqr3SdxL5onEcd27JGtXpo6",
  "key36": "43joLiEY9gw8TGwGzqujHPVqt5229RfX3cc1ENo7q44Zgpay5mHXTJNNxMg9RCPnQ2nCB1Sy6bVi5HXBCKRyhNDa"
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
