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
    "3vdYgHsBCP9k6krmbMD52ax6K4p2itvDYoq3Qg4XSRHkPr8XS8PehrazWdALQatjXzqQr4mccv9F15TMNUAQcm3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jau18BtnZQZF9YiENAG5PqEBC4696Hgss7V9MmNYvkCqxK1fKdxAbsTmLTkfBx6TaX7FsHBSNrTspHZS9gXnjE",
  "key1": "5BHZmuYagXSkWFK3PyJSgFgFnHTpYqK2z8JjM5ceyrzZG1z8cCbNTCLoaqCRNVMMC7epRAEQVYun4g4fGYL53WWP",
  "key2": "3sWWfC4q5c1r1wgmWZ6NV5eJy5i3ZJL4h12uAq6Af1aew3EJnchyoKVp5zTr8TUhLfPw3XLduNgRoCQFh3RmVb9X",
  "key3": "3VSRSMGqBCrLauRmhR8Rfktnm6PJ8LBB2RQcZG6bRhGRt293mUStjMw5KcvLmCijZFd4fvsAECymvc6dUPPmCmtg",
  "key4": "2x421JMzpXReiSy3AQ65QeGT48xVHV4NVeB8xXfr1vddSyVX3cM8DXRY2sDWerJfX7Ppe3KJXXtjdYDpfMSwHdQi",
  "key5": "5ziig2iNE5BHYEsDzJECmrgQLT9gS75tqXpEjjfyHWUtQTmPSf4VGBGvwtm7NNbbQvZndMrnJkuSCk8oAPWA8DkQ",
  "key6": "6566XyWaAaV9husf98sBtps554f8mzyxWBpFV6LWykHutLTcChPYwaYpBCenaWnsDvsi6fSzB9Uon5BX9v5tA9Ff",
  "key7": "4WQiqTdFe519PhjXxgZTUXLHNGiPsAzw2W5fhjBAfBAErzrxxcqUoUyoegu44qwwQeeme1oa54LqubCGVnWJs74N",
  "key8": "3c3j7mtat1tqkVfWUV5SeGyvDpcYS9S7DQfYSrW1LezwdoSpZg9ovq6xnNu31mv4PR4sw4WkiLxYhhzKqmHSb4Pu",
  "key9": "5qrTQHbxrfJxysCeMbknXgEBTjKhHM2zTsNFqApdz9YLQ47XD45Ee2nQgM66U97G4EFG4qAXrXWoosCGWTR1w7xD",
  "key10": "RddgWWKq9pH7NCzKDXhfKcFBvtjnhRZEgGTKWdQj2LdQX4TY5Qt9hhKVvThUJkTysfSGtuWC2cNVvf6FdUyZ3aE",
  "key11": "52kJQwJoS5SeHqRqmQVW9HzsQYQbnbQBBE1uPQGtb4Md9kRdPhTo2UGwMsxD1avjoKqJCR41JNbjRkpZnNJWRcsm",
  "key12": "3UJicPzCuMwT5TDFF5FVghz4XzDdQBs4KSZKwrkFfB3FYZYG8Ns6yq1dEgZf3u6UiiueTyQfDppACkdZvZ1pLWKD",
  "key13": "4E9WpbU5GLgUxpyVU9VVh7wskTkMDHc59rbgVXNhoT5BKg71oQ6UNFDzKkjfadnHnur2RNSxBRdcshvApaiRMg3s",
  "key14": "3iB7mHXGPFW1JRuAqrSbScwfbiJuKRBpab2BJ65kZzQFs7KUUH1NfpnwDdsKSqAt31THnwM3nrrQQkXoWX1H3tTD",
  "key15": "4jDSvcv9DdVGeBkR2Rfr84ZkM92W8Y5WPPwqZDiVj7KE5NPbMSmi7AsNCxWFdUSFTWx1BncJeGsE5NbwaucSLDEE",
  "key16": "4Jb6hiEmyJHs8qPvgy3fRFmQowtuqBN2j9ScdwcKEdGiN3BwgwEfNFbfJj1w9wUXUnDKbLqo8ox7ALfAUUNkrqUX",
  "key17": "46Pp7hzhBzzhBkLp5Dgh1rLK5nyGUa9BxkA2cRkZvWD5Zpj1V9rw2cKaYn1gDZxGtQbRQ6ft4BT7HjVrCgfMAXK9",
  "key18": "5PWNL9oAQTTWpWNpfkkfQPi4SVWfzYjY6JBiuM3JJKrQe8LbcpLji8tFUaa1PYmw64JAeYxgSAZAAE1ynd51m647",
  "key19": "4yA3Goqq4A9M3244oCKe3GgXqq68bQKJkcVD8QymregiEncKL1SE9Rr8o6Cq6R7BCXbGURjKD2E9rDnWE5tXJ1pX",
  "key20": "gZ77odGDmPoWGQH1x4uorQCE8ZUPvgUiQNCw7xRyef21bxpMgVH6LRJuvGQVsynijdUHLNuNNvtoAN1Kay4iUX4",
  "key21": "3f76EXsj956CnYKdoFxgbfKkar9kfDgYnvZYoLLjy17BvKehbPmRP2uPff4TjpMN11ejWPw9eerDRU8Asy7iLEwr",
  "key22": "2Rcb1VeCCD2K6z6tP2H2FabMP4Q3Ps5WzKfP2DsaLLPwqkb1PHBmtPcoJwzmikbjTaHuKPry1ErNVD933vxoLS4j",
  "key23": "2nbvdemFWRGf65M8CahFJrJ6btfUKQvuacHJZKwMvF51zQbs373LNgTZ9MXE65Dwfdn16dhuiGt6VRo4HceYhvE1",
  "key24": "4jAD4MsVDxzLLW4EZLTe4B6F5gd3r2AhGjMou63PjKdNpNSr8CDYSTbtFrRsgP4wDZ3y2qZRoxqy71NpXYH64ZjL",
  "key25": "63qqMvRkyWRoUsu67asxBHQj23maD6ZkxQqiHbgJ2JLP3PYxs1VkHEQPtT23gLe9e4VVZHAAVxSo26b9umtzDuAa",
  "key26": "4ze7XDqssGMBWzkaWaTy3P6YpjZ319SEEgCPuVirP6oAdMg1bGcuuuWocUZyqYsHHDWZAVFB2UP7qgTBzn3tdMpY",
  "key27": "ztuiPerwtvH3qveh3wA99K8L4jgT5cQHssNxhx8Gn73JQzkVxv12a9tStehci83hKo4YgNFi56ksJeXunBoyCfg",
  "key28": "5SUbiGbx9dvopzqGQiq4nyGifkEt6NXTr9GDCK6hJhh4CJZPY6x8QkKWCx6aZzs9mY9F9PMnGrRThUBDpL19nYka",
  "key29": "3iWsmfJMx9pKhcJwSTffqhiFat92Qc2KSkf2JLK27RuFVNgeTeem8aBMJujKCeAdLzeY4e3iwLWrjnGdG63WZdbJ",
  "key30": "o3ZyvTUztFuEhCjZUYWzdnhgB4CMYmhoeqeqXD1cE8LEcQ7UHEjUxpmj1mffEhQDCgmc5DAsivecCHuQ6W6fN4P",
  "key31": "3SRKTv6oZvDwdr5e3m2ftiXRrmoVzCqJztYNfncJTEygVL6MUQD11YfAp3csZ72LmU2NFUi3pKH5wsajL3RfgaJm",
  "key32": "4GpP12Vbbscnyf7G4xZ6UozpWAAKL9SfVyBn3PaRXHMZujYsLWW2RVsnuAwmMgfiFDE4aJVuBE3BXPc9dpJAX6pz",
  "key33": "46wgwBrFghxqMyS5FvHae8Q6QX49v9LG5bkXmQTEQrJXx8XrnZeZ5rFTdsynbrizZXrVxNMarNPkLxa6Ahr9aab9",
  "key34": "5Z83jn5TJRBL1s7aw4x3ttNXWF6ah6DQ2eyiqrQV7LPg1XpQeGiPqKDFfWN7R8WWZGTpQHAuR9ZNNu9WvWV1zGoc",
  "key35": "2phyqgARYFQhJdBJks62oxC4VnqTf1vhB5EHZnwV44PWN7YRVeHmeHt7U6urWsDbRfxKaQ9XpGGzCNtM5aEMCBUw",
  "key36": "2xUqmD2UNKcPLH8mEju2GWBSkMHF8ESdoxo8E89JyWwQJnk7HoKpgSonV4CFNFiwDfvyEcTzoPqdzfE3UUGjUnZJ",
  "key37": "54QgKzkqdCZWXCoqvx3Are8VXrdboVsFi61cb4H97KB2NC6W5e88wVkkAhYofPVaPLrLUmRqCsRZCoH6j4nAW5kL",
  "key38": "3q5cAwTN8BTumUe3LHXuxuFZVyrrbjhXKkLzx12uXDukzUcNdC2CVF3jRYVTUvRJoKd9bCFqdEUeeZgGUCdyBqRW",
  "key39": "26HX2pkN8jawJ3hHu4ABQysztsdFWhbsMYKug3ULCrSVp24sKu4RukNEFNMt5wTLKuAuuMKvELko7757WBwJYRHX",
  "key40": "4x1jJcgJXU8MvnU8KU8jiWnTs8b1QRnZUL48naNW9NwVS8hnv7nysL2q21Hq5vSTQ6BEiRYFv6xZPbLdUceRiSYZ"
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
