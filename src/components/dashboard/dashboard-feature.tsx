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
    "5bPvua3B8ufc3yvBynx7oy2D5YJxQWFwseWS2QYnUU82fMu5uLZ93mhL7WPw2wVM4Tt63VppcWEmCReHJobbjnBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nd6r7t6uQnkBYbn3HeZd4TcpiVodygp65HRD6E378fMNmsfkR8yKYzespr9tsj5R4ZdmhRJW6WoC1HxM2j728dm",
  "key1": "5Wb2teywxJBSc8JUcsKC7XQvoGQzqCuHVYvtFSBrSbHP2aBhmdZugPLmWivAh1x4bXa8jip1SaiYEhagWwug3RPE",
  "key2": "2Nk1N4fA18PpfV7SPADQZcXPMuooRA6Abj4vis7gKVKc5cXuAPqrQ4HLRyGPFEDBz7A2gTejA5DDWAxbfzQNHosT",
  "key3": "5w887ipEcH5uHGd58xC1uNHZqtmfYx2T4XybjxL5GsexW1wFRnNK9opgPePpwUjrE9jYU7Yt3UuHhhEhGq9aSvKA",
  "key4": "bg9ovjNhMqBp9UuEzMc3hTaUymojhknQXGBtrFJdtfoT1P9Bn4GXHrF1BYRscC3pc46CVBpak7Vu3d6Wf2UBLRf",
  "key5": "5MW5uVEFk87a6TTcpvWYoEYhp3S7mrrwovPso3s9CzfB8Lp5Gn8436pxXV2V9tugjuJb6GBb9Y5rJAPbZFp8PNDm",
  "key6": "VQLsvKkncBQFnEeNJ37yzqHr2RPTCRKSgkGnbVj73w4UQ6UpRaA9e51NiP9MtjQDymKP5w7s4nH4cZTMQ72dieb",
  "key7": "5E2cybr1zEPKePFppHYRnb85t3FmHFhq4zUGN6Bozo9RLbtjLNqPMZdKy7zAVTzWxNcSiRAFUdDWs64CXsTMhQZK",
  "key8": "3VnjhUcHoMonDnixdNVQKfvZhxRHwie1RARsGytyS5HrirKBXqCKQZFTTc4QbaaaXic19RUnmamiHzfcwL7iQye8",
  "key9": "5uT6wd1mebNGzSbg5bcAzVfobob7ve4bESSsBh2bFhJFC1hctXkkEovGMitaUtzjcy9f21T7aVcjX3BfSMbpSu67",
  "key10": "5yUZpJMstCgrMuQm4SZbnAUU625KJVKaENK9Tnkt2KJ1mTf4iNKgangA35xSsEHM7NUwrMFnDJRbeurFU4JZ45iR",
  "key11": "xw3LRdWpvhcGiV1TinnjeHv3CQjYD289XyDDvSaKKFBRXZGKaDRbtbWuA1okDo4aCQMU4Z8yjNZMrjRLnUFA8jj",
  "key12": "2xKikDxBfFcuAboztdxb21mkfA83djYsmE8mH6VFfpqJaTdMz26HfSEx3pxuZg1G74etbwjhRa4NbWdBNq96CE7d",
  "key13": "HkdApXSSqX4Xtx1yozBcgKy363pNkJDeYhNPMWAyujqGT6F3j2aw7YHjqkmsabzE1JF1kKt3aejcwJceU4ihCzG",
  "key14": "nUqSkQ8Yu8xGpKwpjjdVt2yorEKrt3xJWmfNCBMqKzDA3h3bTsW4VEuhnwAyKyhJL4GAyEfoQoXdnfhWgghzRC4",
  "key15": "48B9LgxMbVGzKNSFeJ8g7xjGQvUZbL2Q8rQwAmQcUMMtqanX7NJgythCKVoXjRkG5GAHfHDrpRYzhU4zQJ5VPW7d",
  "key16": "5Anq7UhGZQV1e1LyHkfYA2bnj98mrURitFDFQWRBCJvyFZrrX1yzWQ8y1nXzFfeL3jvaDZ5QGJoA8kV37KLJeLnK",
  "key17": "3ozoTtkyA3A7PShryfgGFKD8z1SdMytVPxEM8Yk1RD9KhsRAY7iCSW7ebyZZ5ozio6yY1Q4WnzKVcwZu14ubDcVb",
  "key18": "4dVFH6KpJvgc8XT1ZqgR2bSVqew4532uwQWFbzwGdk2Woa5X8qU3AAkdSQgG7EpNV7mK6iZo2WRbYLayesUb6pET",
  "key19": "4NtcDzCSAJQ54E94judu6Rbw17D7dcyz6WFJk6fA1pwkXTi8S26BT2g5wfY8ZvpzRg15ije1tn7AFFQS7PBwt83d",
  "key20": "2CCuCAchdvxo8Lyej3zt1uvcmRN7DeUC2vjUNXjd94Giv6UejqXkzVJPK68GW3QPiAR9Kid7oYqdT2r5AtQTqvV9",
  "key21": "5NgcP5EAJM8qC6L8Ldm6wn2XGEESojexFwBRRCJYh1PiXnBaSUjfhfNdyTdHDF1uvNRpHZAwA2RduXcr6E4u85J5",
  "key22": "2P9mL1Hnu2SYvHmnSEWmnuem1DsbePYaRtpTRmk4MMzcqntLow4pVhLboSPkjQJGvZrxxP47pHAKZLxBNuw4VJeu",
  "key23": "4yCgiXUVKk1925TUSQ7thgdEDdh6RhDNoFLsNrsj55DBx1sZdeh9unS37GzrWeDL88wBUJ7prDLZBS34QNQdkBR9",
  "key24": "5gYEoiqGqiKcSsCjeC6BkzxAbtEwEkQRgF6dwJUqVWHFxFwf65jWwkr5cxBcwJaN5tFoK5oBqu7Svn7sHSuhECyX",
  "key25": "4RaYQjZbNfCrnUaYATRVD5HtLwsKN8Tanp93vGEMzb9XAahrcAHHjNaMp3j7tMj3ebUFse6uvEBQwav27F1LzKQH",
  "key26": "5PCgadfMRobi9WuZFZJFqQUE2B7Y5tRH9xGH8E7AvgG1hxiEqmgR6RAjjE8rYo1zoFWJyZ6vY35RsBUKpP2owZMx"
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
