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
    "FJfabu4JYrb9GWsUhgiXXHN2c3cwaphp21zYZzoDUdJywRt7ZW2zQUctBqurW8oC4UQpaPPkcyQJGrnBRGJH3Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mZFCFwodTV29XMpoD7xZWh75nPEniH3QfFvJi3eEGixBqo1RdbdLZzn6LpNugXRnYSEEmezYNEyiofd4wLEsaRn",
  "key1": "5djx25YKQDgjLFmwug2Kf5woz6ZSCbL73yLnW3CV4UCTphFgRZxxFpgoa1dHm5yiBuFsh1rdeprjMjW5gisSyWwR",
  "key2": "5W5spWujt4NcdnE4poiEJYeYAkqfjnVrx3saYUwWBaiqH34s7XXzWMh8GuYwMQSYuwrwVPsRymhP69cbnrvYdtEt",
  "key3": "21m67Vi7etNDZjyEkATuG8fXw15ACrJsr1x9sknNkWeo9uP1CjLqNb69s4G7uxqJmiZSkM5GRjAVAzm8X4bpkycZ",
  "key4": "21o5EmUZZdAuR248ucgDY2Yj84PL9QCdkgXwXnaGva1FRWaab3p5t9UXc8gGi3uHMbEyzyyDVYf14f71JA1B2QEx",
  "key5": "3YTTJZAxk9kUf43jwy8HZVzgi4QVmP8PJihkKhTLg7TzvFKLr6iynnXaeb5zmFACPFBHqmqCjfdDeC8R93ids5hq",
  "key6": "31DU11LdU7PdwnYqhXMPdgyP7H64uNbHfa2U3jf1jGKtYy7upLdACRwWsixuUVofKuk3TAozbTVD8Hnr2GvySXpu",
  "key7": "5K5Fur5Cp27yvQSDznvrFQTMSJfMeiKZGvci23hPV8dqxo625dXbMRP5BmfVeLawYuZ4LuoyvdS6miW7c8DyoEZV",
  "key8": "3sHs7FUHEe4dUzwnXSzbDiipBkdPhCFmZmFK6gAfPSMZTRTsYBtirmkSGZgAycNGRSfhvCSi7ZyHsGd7Nf1QNLhR",
  "key9": "3MhsKtc5TpsmEw2Puc9bGZUd1aUkmH7NTLj2cTzxUssNF3QaXP6nG8dw2Hs4QxD1H97BbCVbguXMX9eBHwjGbNCX",
  "key10": "5chafYP4W3hKJLaigmH5phJ6NSUmnqvKrDDZMMzbsxWuUTt8L3LBBbLQwG8noHbAmHJ6eiiWP4HrnDaobaZfXYz6",
  "key11": "39qhcM6Bfe6LCp8Sk89teZqdWu2t87CBVtXzPHFHK6aarycSc9XZgFizL7TnYmS2y1wfUVKAizMmSsycNjZiCPQr",
  "key12": "4LarWdx5boJoz5KzaNDJNTc3EmeQo4n55sLV3dzPNjGcudoT8od6uS14GDBC4pSUZ8EnRWngyQymqQRTqgvbLXaG",
  "key13": "4LeJ6Gsr2v4tsZvEeLtFBsH2f7rMsxgzKkGVUMMwrdSC1MkdG89aBcfTxpnR5xxxw1rskA676D7siHeY8QKHVh4a",
  "key14": "3JepnbgHcerDVrLkRLyjSKujuk4cJFWh4QUJa7ymeEVw3FVQSmgTUYKeo1WPKKzDgnAam4uC4ZFsXjJXTkuVTChH",
  "key15": "4ga2BvLV9Z87VsRzTnEmZ3ziz8HRSm3abeeENEHEnEdg9izTNfZ4akw1CcdUD8MhMKU7SQbbVzZyEzSYkBkxUzbH",
  "key16": "3VJ24nroXF3kMK3Z9BQpSbrxhR96VSnr4ZUqH87g31SLFXWRkmVPxDSo3BMbKhVHg2ATPZis2GSvHWKgBDFB1jBZ",
  "key17": "3b8CT5w8pqRBdSx1ytNx8QNQG1iGYUhshqnUSwaNcqk9y9ZFMqWdX6RvxrzP929VNazi7NCMwTxMrWTY5pJ1Vsyo",
  "key18": "5w3GoCiXKhKVMf7GxYcYvUzwqqsg4x739Qkoo5yzqSQc2xApsgejcwjxDp6QcPHQXxpYgkG6CydEDBLQFw487Y8c",
  "key19": "3ZVS9U2MgEbGeLmC3tw18HVsi8VDGCWpug64Zo2urfczkpfCiWNHWZMfzgvwswWpwzg2GiQ41pm2kSfh7WZugEWT",
  "key20": "4U1MxtTSrHu6abVaotJMWJWK4g2cyrx5im6pqSyXS8HX6rzp87QgtvUvZVbhwaoGXqJFSTPNSHCiRvgABCidx84C",
  "key21": "4yAL6EBWSGiKyWi8vau5GYD7xpgy5NxGmVw1HRxbUBFCQmPebUDWqP7tK1Db5jg87WCdk9VDUzqSzM3e7hr2sBgp",
  "key22": "2BTkw2SD4i2izo6QFigjV7jKUKSkCov7RWUcqRZv8gyTDush26KsBh1LYEWuuXvS5x1zkmQa849uqNxgF8p7Af1R",
  "key23": "2Kzc3kofKFkeHdTqu4ZpQdJhgStVCfGxsAk1naM6E5hotvp49Q8w4MgFdUe66hp1tFTn1dva8EGs7S28Sk9BUYaT",
  "key24": "5djU9tgwD6pQeqbSPhWcL5sShXagmKfBWse9RCNauhmWQwrctTWWMR6eKbyWzDkK22tjJkZAwUK5LTwxipZ1Unua",
  "key25": "YQisEcSEt4AswqojN4D2nsWGpk3yPTj57vwBY8D1KTbKCapz1Gws4WA2RbNbJR41YwRH2ZfwzQYnYCTZvbLTMUu",
  "key26": "zBbzKgtNdZEs85rtE4VbNo8RycoW4uy912PsdYRtbZ9nAtiTVJxkrUZweMEJ6ghzK8QppyrvaS2nG42vXWv443n",
  "key27": "2kti7kfZkAbETeuwdAb3LeZD9BHRiNAtcJC8Gmszd2G2aE9ZBtichanguQGDwDpbq3R4JDST8b6BVvsh3xFWoEPT",
  "key28": "62dtbtkLmXve7exFBviFLDyPMUrnXAdfvGJVNBcdgbj9oGM9ZAq8SecMsvByKTXoGbsxZEfvAyGmjn1Wo9RGD2vn",
  "key29": "5gQnTfE27pcVyhaAD1AHc2E3oUEmu64gARzhjGEe3dL7zAkvPTAV5CUQt3aT5VverNHVCeEgEw49hW1qgCxf3ywV",
  "key30": "35fsGtQgB2faTS5ws53sWCjGZv7nQzPCLqWAqNxYUspDSLvYwM4MYALm9AtnVVQSTSDKC4iq5hYo6MBmxs8Aksgy",
  "key31": "5kWS8uTV9Y62o1jvsAEDpD5g3TbG76aynucw9nwYWszbEpQ368SSsSgfDGfqbHszSwDRYESgRFSGy6XChszzVUV8",
  "key32": "3Ec1CoDFFfqnUYKy9Q52i4S8ccvmzC8rA6nFAFxFwv4FXNyBVZHfLLWh5wHpU6WK9cSGTkXwtijjPjbUeVNGaTaR",
  "key33": "4vVGw24Hdy5qvgPxz1Y9NXARR4LCqT7MtAVt2QuT1ZWd3THjP6uNvnuG1WKHFpxpBVGLfZarMdXbrq8wWLqZsZaz",
  "key34": "22qZ23N5Ro23pbKAQtXVwRia4S1DPkfeL9EcBVncB5bq2erKtke4mguiqkQjqfjJYRtC4A5HVZgThicnTB4FD2iG",
  "key35": "3ZpdJFAEnqctL9JH8xRtovFnMxwMMvqtHPp2yGAFHJQqznXoX5ZTVX6NAsgPc9YYMSuwvT3AL9KGaFxq9LqJfTmC",
  "key36": "55TNPnRp7bt3faWxyGPtBnGbqyCgThMVRpvMS7NtP9BQAJHaReiLPn9VQneEHTBE1dqQYLFRr44uSiLFBv4ZWV2i",
  "key37": "2d3y2GNtFVUdYxiHbKRCWA6y5sK38zFy2LhGgdJuEr45gVs7sYraCFkyp3uo6gbVsthXfvnpqYgCjFqs5DU3mf99",
  "key38": "ADCxSswMjBntJVr9KjnpD5iNb4R8vNd1TtABkETie18NWEUTPH3UJUAq4z4LgeP6wmH3fDo8oZTFiFN8ousLQKg",
  "key39": "32XyuZ4UDuky253UCXXfyiNCQJeosUb2guYngEXiU7kMG5ALQ1zSSuGrHNFC6DzQ2N8axPbxbB8UrsxURdWqWSGg",
  "key40": "3kwf2pByV8Zhqpu18u9qoep5pWv135HnYFRSou6jtaZdiJxYQreR1suRb9H3pteGUiEmwE4dmiSkSMFTpEDRRjZc",
  "key41": "4kjNcvawxZKsowAS3wxoR8vJPYGZjRsFnLXWSKUmCLvobC1bzVRUm5CmUMPcjfF5Z7zyZUWqaj4Z6xmdsc3v3pSF",
  "key42": "3iko4x1kNuDhXCBst3K9uFyMWFMMniU6ZD1PqEWStZ8ndFis1n8dAQMmh4wLNipiXZfqa29wpUEnpBeEgmVpGCjZ",
  "key43": "4gYBUd3txK6qF4FsdNxs3y1MBZCzdApAeGP9rHE9LEX3g65pkEEQ4ZSSkf17ZAUrNPnPCTHBDf6HFdAUySToUzH3",
  "key44": "3Rjk3BHTPNnjeZyJLt1jkZ3CS7396sv2cFTvuMPqWoYJXNTTJn4NCUX8zGREtGjnsvV1HavMrF2cscavUTWyL6HV",
  "key45": "4kiyaya9C3QPqd4yjo1gs1Z3r8Tr91eMJBKhPcvLzVbfEK7HmhqpZYHb5mFvKbAoP6Q7iC3Q8JSURenbKdjERALf",
  "key46": "5vyqyRaHzUbHNFsKtwN6JVD12N5S3r16PkP3uVrPriHq28EeeyYbayNZfUuLNLtLdhMQBE6HEppiVj32GSs5jXeA",
  "key47": "E5ApiMrdSFWmj8btCmR2JsB5DCnKBCFvD6a9WmWqxAxBYKRqKNVrerCcqKtDDE6bSHnAynt8RVfw3HxrNA3aJDR",
  "key48": "4acPN75mDzpDMMrxmbx181CPRm6ss3sJ9tmm5ZyvaWQzEzY8Lj2G9GZGS2JUGr6Ghf39Ew1Se3qrw8M8PZrhL84D"
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
