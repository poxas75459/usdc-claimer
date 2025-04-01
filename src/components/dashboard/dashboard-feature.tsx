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
    "34Yej9BCzVHiasU2YsbbrvqNcXZm99nT2nLgZPz5YBZ4w9oQGHyrYGiJN3A5XYis1aWW6KVdPTppxaoqLYwUB46b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbEQoG1WaBLLwiBBdqxFdC11rDjrDuC6fh4ii35xdpqFh1BQr11Ly8a2VUCM7z4sScW9mqHU7dk4mFdefAww5RQ",
  "key1": "4sPX3nzGcicjjX7kMvtU64mDGSMWdYM9STQNbAHZpMEkX99SNkvAJWS1e5iVaSdJRU42FziHwgUAageLwLxLpJHs",
  "key2": "4GDsmK3NSLUoFQoY6gedpXKt8DkDGVEUib1Aj1cm6jMfrC33GLczCViCJtteYJtBg9SYD2SWsxetP6F31kApWCMA",
  "key3": "1v53qCySoDTVYHLngL5cQKgT4RVbJpHvDf9e1jjJubFfmKbZtjfPmTdGUq9mEaArMVNVMRN39DjeBQrLcjwVKx7",
  "key4": "64NnStKkGYdeMYFcyNpgDvpUQzPnEgKe24tHaDUw1svp1n83c8Svo4GJxE5Vf2pKKuYC2Xh2ocut5xRnTnbDxYuj",
  "key5": "2JJR1YKB7sGccKXzE1tB5Rc5pqboo5RMvSmFViEVAQzBcSoMGaLMPmGvJsgf4naZFkS4CAT4vkaoE1ZXtimBGtwf",
  "key6": "2UeRZPamj4cYB9uRKGc3tR3QSBFQrVddnsmeUH72yWgHA6JyUoVW9kDxL413MQ2cbrphETMkMDxBDGVTZYfw8My",
  "key7": "BTUYnJd3fFVPJxMFoFY7yqCRyGpoNCTq2MzeU46iJ7UEPuV45uZg4xzzrkaHvHwNW7jQ7gijepS2NN421Ho1Pas",
  "key8": "DkfNWjG465zEhbRrTnztp29Wz4hTvpPUjqNFXapQ1rn4gbr29F5anzbaCVBMPM5i52FT1y8TAEM6VBwXsuerAgr",
  "key9": "2nXu9YNoBdY9Y5h9emxXuMWYtVbaE2QHtmC6ihvbsydJHGvfty3LKdNEVfYdnmUEbcxgFyFczeQgwwbTy3DELA84",
  "key10": "63J8uJiDYaHuMq7Fz81gfjBwnhvebTNvAKrQS4dUj9tQVzfBgbbzerAd5smHdSwTntMpwYgYjoBv8KUCQs3YaMtg",
  "key11": "2rvar5jXK74aU5M9HKQxDYi7DSBkFHdggoLjCzSBhSnLzdMtCzbsDrewAS1Hjhg7cWCTnZejLLtb4N3b5fBo7UDm",
  "key12": "2eqyncGY2vU5LNRAjudMTVL4vVRm3M7PnC5BwzQ9APtr97CpixfFZGXYcbXHpW9fsE6bTMx9vqhFFAgKyzkScAkX",
  "key13": "GiJJBwYusz9gbtvui4GeXcSmApf3a1WkC1cMYZeMUsGVsU3cLFxXcgupGvLYiBqrFxuhfCLKggm6qXUUxruchX8",
  "key14": "2VQWy8yswUJCM6YBtNXHmsHiWyCQ66Mf2jPYAX8ZmiS3gXYUUUY51DnoCrVrEdv5q2gFveBnrY3fbEfXaSC3uWFs",
  "key15": "3a3qWNPPG5VQvDGNXiW8tGS8zjHkhbCgv7c3vJYiaFKWoovRmmvnPQVrFCwkxiNUXgZjnNBkF568LqhUpCxgNoFP",
  "key16": "3HCDYcTXkpv25yAuWiK1T1HEHQd4VbGJi8oBWNQ85KmiLs4oDkPnYmNoMJqHssdEmNFd9EVBQQwnpegwF5SenQVA",
  "key17": "3erVvHQE3uyz8SH4MgPisp4M4r3rdQQ9M7P7TK2EBbLXANZ3J22cviGT5ynELD4ABuoQdjtDUBnEnGarmo4EHihD",
  "key18": "3R8oPA974baQPAZp1hYn8WwyJVZ5ofTVA6Y9D2oAursX8uScjm1yswt3QyLddHkeB5TkjKTT2aE3jdtr8jdJTFQH",
  "key19": "vTAmKWgFhmWw8FpwN5nVSDQEHJ4apNpc8QKCphbQNHBhm7RGi8gDGJiyBvtsmKkN5iHpjprK5QTbB4cMnnYz11B",
  "key20": "4nmLnimwUE3oJjVDdUyxSwVscimQDKMzfCv85vcQJ22X23A3YVa2WnCbseBzsoTVRWw2EZgA7cTM7Bmfy9KmQLF8",
  "key21": "zXNhHGtFwtrcajFdTc5Qez4c7xAXmytGpzW7jy4KTZgVoArEP6CHf9JsddCzaDP6R4kCgRsqec8dNDSWTvVKNhX",
  "key22": "2Pnsj4ZicP8Jb6mBrtyHz7yaMc8y8NRYX7ut6ALdeV2WtrY7cjHsy5nTdCppDHUVyyL9GQqKaYCzAYv6tx6myJbY",
  "key23": "5ZJ4n1vVZvixfqPizBC1NngHLzMPsWk9etfaovFe72zsLdZNJ6jg8KL7Jw65zrpwFsRdLKmczMNcojMUmAwBqp4a",
  "key24": "4woZBoLWZE8hdFEHd3frNvGMHpJLXXqWEsD2163nh79CUmyopdeJo46vDkMQSJcmJU7mFkQo2h2XZqr52Txj8GQT",
  "key25": "4uVx1yzCAFj7NWp7tioQp5fvyiLxib1ntj8u4vJMdeX4EBZMQFna4EcAasBPnp5jB25Z3Bpdok78UtVZ5p2XD3Mw",
  "key26": "Sfha8ipfBVqJKvTb3u5UAmrY5ndJoQYpPPjAdsA3JGcr5L6bDwopBU8yfGSaGxNXq5M3aESaZvj35PNhBxyLDW4",
  "key27": "5btPLngvwfoC43ueTvsRPCKk4wXEN82StzNpvKrw135uj5yaPJ65JTMQ5caniYbxyYeUmGdycBL5FkxMtWbk4y49",
  "key28": "3tmQpbbf73h9CjfkzZyAq6zTP5qmTfeJ1cSAdA5W5nSppFc2otRMfmHBHqU178x8YZ5M3KWCFnQ6Pam9LZtYdAvZ",
  "key29": "3XmuDzF7cuTRSaC8KGtc1RPQWYtsnTQuA4nF9qn7GdzVZznwW6sPuLKttYaxJGuh2w6e995FEFqWijeTdk4Y3Fwu",
  "key30": "kgohDydAPudoitDubZ8wMc5Ba9SRoBkZaY7KGF8YRQCJkA2gy7EkuZUa8jfGMkBCPAQh3PbsUkviE12hTWzdjSp"
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
