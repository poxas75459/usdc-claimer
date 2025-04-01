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
    "iedEzpTTd355aWDJGrF6kv7DT1kxjDvXAvCBkMNaLNz1seYFkEGi8jfy3xmgoPxswTeCuYXSvF6Fne5yCih54XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrhHS4V7zevkNf43iHWwPEirc8yw3c5hPPWx3WkvMyfQvAKAxqgzGEVxTy8MWyAwFyAZn988MACVUhfPYhroZLT",
  "key1": "26nuuQxUZqgRBhSYqYHX7eooLyAQN1bUzSJhFc5F5HrK52M8rN8S8AiHKeeBb4Y4CWQ8Npp7gD257PZTx8w5QhsU",
  "key2": "wXgjHN9B7n3TK2raMMj3fwRV9C886qGoFSQzMH8Q4jnTSm7HgYGLusnfBkXef1aaA4FANJh8TivFcVwamBG6PDa",
  "key3": "wVKJKRSdC1ysjSqkHEyxEntRCTcZWAEZJxJfyegzJ2MH1wuMYBSorRtkf7uSMY3NagCcXEqWeXn2HdRkxabnV7y",
  "key4": "3Pho9BYpZKmEeYkuA3jPTuCi5Kxtu7KJKtAw5RbXQbcTXroA13wLJHZYA5pM3FgzMmPahW4pRNH5usQhCyFbAex1",
  "key5": "A7MVq6ENu8zYRor1WGjechkxJBkNB2g7J4VQk5ZfgPzb3dBJakom45k9JkttRqT7EZM31oBiDWRiDuLsJC7oPA2",
  "key6": "3Gp3ZZhLW6TVQXUHUGFnyxv6td5FnVKRgpjWQhXudR3zAJdEP5P927zvwYpQStq5p8J1Lvb9zu7UDhDTjiHmxQB3",
  "key7": "4eKWQnrpPxXEFua6BJ74kStB9S12ULXEMMTzDiygoZD3ZwKDMpDdKR84EjxBkdKaDd6qbXKjZzZMG2dACAWcE21E",
  "key8": "5S1KctB7iEsQqeFVcJ6GZLdrpe51jVke2AFqVpR8cfhJtMnUFdkzH7benGVTEVNRF84ATriLpyiw285kR4sfw4kZ",
  "key9": "TiM2sW7aqMAr6Hi1HG9p81jwCGbdYH4HUX5XAL8JXPWRAtm6tTTZhUkAHKCJDQCMnUNTcza9pKNpuGuw1gnzs3t",
  "key10": "5XfBQArSFbVAUZFoqy98AENs9GgGvSGZx6VXjBDU8Ev4Grts2cVE6jWoftVkztZeCGgfCNDLEBwaXGg6cpAsZ1j",
  "key11": "nm6XxJv1HfyrYuPgTX2r32q2WkFV2n7Z7UJfudvM5AjQ1z66P5kVRxQyNEPk3P3ptDNnUtZpGfS8vZBxVJW3K4j",
  "key12": "4nq7QfVLuy3yZf8XDqmin5HiPSRcTjor8qGZiewinZDpguEHquXVKVQrHEsCjR2WBiFmdBYSuuEvWq96VdBVqm5d",
  "key13": "5Xo4pG8PSk1LEd19fhGNJ6ngWN9Nnff5nRcgq7qEPKwNDQLKxwtHZqm13vLwFgTmxg6GEvru4XM7mdnCpzteeuZ2",
  "key14": "5SiitdT25JeYpySgzkwQ8g13NpGAQMN3zzUAxpCPeTan3kvtrxPa5f6B5SWQMtjMEcSPzkN1kEp9AtdnzB2NxGTT",
  "key15": "zKmDgAPoeSvKSoEkEJTr4dBGQtf2JYiYwV7nAQCEtZPq6wDz1z4WESEV9sQKfZuR2hwfVd83TfPwNQkpCWhFSyM",
  "key16": "3uZRugyC28Y7SsBgVj1KqXDoEerCAuYFCzTsmWJTBF3sL7sqa9XUmPbbwAk2KZ7K2E5m3gEzQwJrWikYEozrF5dC",
  "key17": "3WqZURkFi8MQrYmkkqjeUudU9qbuNehXcCsVYRgcy3XPu4gj34BHyGAb9GzmLvzrkzeaZoqFPWE1EsSUr5beq37u",
  "key18": "3GEXpmZu9dzQsQ6mZ8q8CwZ8qNLnLYCcNBusHKD92xXaBcNa4khrsQv2Voe2UtL7hpgEueWhrag8X5kMCCPAGVt7",
  "key19": "5hLJ1y2ERte8Zq9p4w69ExhWtCBjPuYf8jtGVV6mh79AnwdE6RSLScZKJsZ2Btcp9Lkd98Z7AMFFCUtLXa1H113Z",
  "key20": "2MZEnv62SVTnRwwvPeN6ykWPmrVFgFRErPRgPiQsNfnkfXX7GWcGP8ZrHoN8QU6CejDw6NZeKZuhkott65XYBNw9",
  "key21": "YU5NjfXoiianfsHjJEcEUSK4yZadqBJKET67UqPufsVH9YGgHz39TwE1xj7c6bS1TM56ov6yXz9QoPoCZWL4wTE",
  "key22": "56PVjbAW6mLwg27gvm71wixYZwWx4ArwUwS6UXw9ZPRCcYDA3Lyv1Lv4y93QLKgGEyv65RFU9ohapqqNbnNk7KVQ",
  "key23": "62tEw6PZC2smeK3PiKWX4eQGSFYW8oyBLC9rx1oJWwXN2n5V5J8wU8bDH75eBhU4ThxKBZcAtCp9o3sbXHDzLT37",
  "key24": "63widJqy3YoBu1CU62VvNTRB8NNwPhV5jWJu9UCU1F3WedNjeTJy1mkMzUVp9PQnTDCXG4bbZXLTuXEbHCbMBTdY",
  "key25": "4j7ainQTaYZn6m61uzRbRXQD3Xup8GTn8YXkFfCPei2dAhd8h1WopBrjEnwBeYkmYXJqWxuQvLuL698NTtGBM1qB",
  "key26": "5riyAqNYwhZLPm9mKRCfo2cTMVG3yt5ytFR8xpDLtGKRddR5VARXxb2Dwm4hAA6Ntou5DyEwfdyuPxsyUXXE6Zo3",
  "key27": "4bqz9ob4jzWUaqCBV6KDYxSDZMDDSd4BoX3HjSmcyU84mVaDREvoXhjvPYFB1peDHw5sifMgFgXkACHoPecbs3zJ",
  "key28": "4BPRKqhDZMad6LKLcsejUXgi3egNpkeddXkUKwsP73okvJhrh176MXHXrYvFxkVbeyjNTJiBiq7bVNkhUcc5W3Q",
  "key29": "4Vh7DHATEj95u4Pc2JiPM95MYCZHbDWMEmstUbHSdETYvNcuBwR4S9UsRYu4TPbe2c9DxUpteoZejo36ugj7VxQt",
  "key30": "2LCYEFjUD5H1M6sJWxQr93YwHauZ3tnTMhTMMSvwcQudayRh6M9LUwUKVLiN7ZEwpPF9eWAoWG9eCmqrnsmvS7Z8",
  "key31": "4VuQpXUgG3ZZwGgET51W3ZACUKKH7LZ9RweUHUSZrkyZDv9N2VTVF7VGPHZgQhMwFFqSzdusMRXAf9bAhHRYqeLY",
  "key32": "XjXTdryA6NDmtwiCACedMCW5bwNnsY1DpxSmmVXrsvWHxX2Ur87ZVqbFE5tMDTFHJWQ1pY4mtFeBEFe967qjBAC",
  "key33": "2Yr29Vy1RDkC9N3aeoTnCLRpjBj5eovKuDdJA6knGwTebvaofb2q5RB7Z9UQcxyJt4iKg4HjWLAtJHEhYquzeRQ5",
  "key34": "2W8FwPq5dx9Q2pfh32qhrnZ5dohAdekUG5uHsS4FnwgeKfAme6fqgV6Y8xnRyHDVNYWYnBWPStZUDJ8bKN9BKZ9f",
  "key35": "46px8FaX1KczCFyoeeC22eRUvH4N1uQRvDzouaAjh7NhYEGCPn7DeFrt2v9qk8k1iCPhqg48TuZKxfX8yDf2HqSX",
  "key36": "2mpbMcRRHBzsSukyVc3TPYgqZVcNjnZ4S6N5fUZ3R7bXm6BzrchBgbwEwPEbCSMQ6TvzBXFBY7izHLmzMHeU4e37",
  "key37": "5pw6sDWBVifzXBFucR119MBiNkFpxbhuLUUfh6qEGBEGC55ufhzJtdYFM5UTWFBy2d6gq4NXqbjpW39HrFpxC1Eh",
  "key38": "2D1QAA69XZtiCPsaE7KP97kXA1mujFFoHrHWByZmqtzqwpsnsKs8z8uHkgm7dshy5wPGvbxg4XRVYaR3BUqkd7w8",
  "key39": "3qZE2tHpo6ayKZGxiTYjrDuvFsY6oKsV2kfkDMrcQytnn59KdcyankNTtKdfSojSwmKWxjWYyqDnXygxwCJjQxgt",
  "key40": "2H3ANHk6qQxtiSu6NCk6J72k75tCAwYfaXM9CCMprBW1CK5vwSRudvXVNNcMvtPKiFbAAw24ybxHKCvidMzp3Jti",
  "key41": "5zuA2oJzmBioG7XwmyZfZuDQDcvbrxWoAbsdEEcbdzGFyhdk5tyk3XuHRrQMwVan8Cinr15LweYFKLELQsmAfLRN",
  "key42": "2Fnr7ce1E4Bm7Cv1WcNLFnAxKe1P6Mb3AQuKJryce6KtKUDKS2E9a5obyghYpNhXFVtMB8YiU6mjhgDn1fZ3oAQw",
  "key43": "2SWxHjRZPbGcSufbtS5tY2LF97Dwk9iwcb7mvsvAhW7ps8jD8LbiD4wWCDoxeEvdC4gAyroTHMhAb4E7rQwZuVSV",
  "key44": "5DonP3iCpaCcQcgeSWPwWxtvkbLcDFE53MfuBqRZQrTpAo8c233igpsNZWTZoku74GtixL3JZAsJhPrKMZyQ31C8",
  "key45": "54nLfBvHrDnM5xyKQ3dDbjgvkn6pocQeqzyGVAis8HPyAGa1B8R335VKRcsruPGNdg23n9GSPn3AvcdiY14bWJDQ",
  "key46": "3VfdvzAv6Pd5CRQAjRF6a2fjhF8t2swXFBWTGEN7y5GHifbTkL7FxFmDgHqdiSNPbwv3NjX1WLnAtoAFeH2bZX5W",
  "key47": "VSqewQCT9Qx2sNP3TUMk3du6k65qpohKbH5Vg7reM4t1HomJLfTsTbwTLKe8ZR82NzxwJDjc8KYxApyixygFz4d"
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
