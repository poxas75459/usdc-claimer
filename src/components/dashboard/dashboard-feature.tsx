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
    "5Dq2e5xDmCgfh3FSbmwsyBu2BASGRuWmJuMvjY2VgS38Ua779CCePmnmWSB7bRiowpFYdzwRyfutgxyWf3d428yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4igs4QuSngdxr2jbbYBgKnh556FVfW9dBCqzBKygA1xBbUz3aWC2W1DK5D2yk5oUjvWvZGLZECRa881YdUapn",
  "key1": "48JYzCTMVrF1ENBQpzhftX7WghSUfXhq7Q9ez9WhCcxRhcKo1w8RDBhRCqekH3xHVLY7TEtPvkCmrC6HEZGbvJZu",
  "key2": "3usXosCR92AhbXAu4VZHkeBTnE4P9WJyaCqVTbFW2mWtEhLruXusqnbz51UwdJvNkLxWXT6YuUita1uKsjofBAy2",
  "key3": "5xLPXG4o4N2de2fkfRqLcTnU51u7griPFzuG4MSmYCcE4CThn2HCtQGtKgw1rx3QQPjpHFZhc4QqthsYQ7WRuyiw",
  "key4": "4fVks4LKJTxVk2GyY6GJbtoaCvx2cpeNLmMaWGQwd5mmHK8wsuTc6QF7uDdiTQBqi3ZtiLzwG7rmApgYbC4noKcc",
  "key5": "2hmnuR1GC8dxUjQ7ofhs3edBGnZqzyUHjge87bHvPRvbHS25mdSj2XegJ4XiFofkaSTTYdHANeYzmYuBn4HK6Wwt",
  "key6": "dBbC87neCtPEQXqYcmV2DLg6xL7ZzXLFBAgK7Ld15ALrATYY9E8Rm56PGygF8q9Zwsg3jMdCzh87aAS37Z5Dcb6",
  "key7": "2jDdXiCs8pq4Job79SpqHyNnaHzdzV6agFRogJJWkoBH2wWrcx5CPhxNGkHyK4fSUaYz1774tkZ3PfHFfomumDRc",
  "key8": "2j1WQgntsiViSngymBqMDnVrVpizhHbJPzoaNQc7CYPg3puQPhGDUciCfAsa3H7srQyK2eoCzk8dD6VJpDT4Bm5g",
  "key9": "2Zgi9C5dRwcGFjS7MGxZbHnBSN1YwTQNh9SwKBKNXCfVq6Dr1zajBS1eRLoNTPZ3PbTLVeErKXDHAPnLQttzcgkK",
  "key10": "3iFnLCEeYDkmEFkTpNNdSeH9PeZaZe7xvVZVQKzPaNMkVBUFjpohGUGpiWipwTWHrRA3rNW9DeA32nVfdkKL3TLA",
  "key11": "5rynnxjJeTeX5um5RPxEMXe6DfhTWGGGUHCy3skBvfFRJBMaqGSPVWk6xwFxDZnNexRn7ptPTPiDGAe3KFUHM5w1",
  "key12": "kq4f91tCnRizQWFzUipyCbocKYSGeusunCdi865BuhEy92g1bNc5kGkgUi8etuFDSkL5pZ98PN2jsy3mnHRz7Mz",
  "key13": "47hu9UFBX2viz542UA8TUNGbR9eVnpa4xFFjPgfRz2ShgMkycaeazzkZnuCmE1piFNLsNMbMpPbmeBy1NpwdARVh",
  "key14": "458vsgn7Yz7DmWa9hjsz5NAwL85Uxz8sXp5KCa4nQTET39gMbZomwUXasrpNx5iD5DJfJUpec42ZZ42AmE2z6KvX",
  "key15": "wJ5DnzZknrRqy3eKCtLQ9ZXCQMgGHvMNVk2ywdYhXZabJknSoq5kUCPo1FGs4oPdZbgyQoGZkHT994hwrA63gjy",
  "key16": "4EehTnYZmsM9ND6Hy7cBapt9SH1fKetrQoLbEEThX3yFnhFK5M1VCwCYRD9Lq2mXWTVX4iTz1wSqWTnTiSkbsHVN",
  "key17": "2JaMxnrGzEMkEHmqxBqTZu8Ep3E715WWa6LsnW4hRVsRkv2FPY8z1QraitGAs6YbXGqb4mWiKuBZiCHFRJy3v3ks",
  "key18": "2atDiAJtiir83nUo4TQ64TZx4ryqZkBYfDKgqYQmK6F5CekbeY4qoiht7SzH5736gKZJdmYq92d1nqU8pEbN3NAL",
  "key19": "2b51DZdzB75tgLoJxXyeKcKChSfPPrvx7rGXHMP983z2YFxMca3sPME8735HY4YekWEgnMvymhifZZQjkj6eonxY",
  "key20": "2ASZHyykVcF9SaTropuXokm44sDzWa5xZR2uVtNoWk1Hx3Dwhy99iWNuZ13y3mEfAMk5ujdiK1mXCgYhERnCZYRU",
  "key21": "5gfX8gbkpRcfjUDB4wp4v8JHdimM4f8iQpUc5y2635RA8bJrezMUeCktnBi3U4Gfje9VKNREasVLzuaHfe3mBSj7",
  "key22": "4m6zFpRVe6NsQsDmkWst9e7WPqQ5S6kTzqJxfWPJs1QnsphdzRnRkQN2ERVGFgNbALFWXPBVTjhkT9iLkGzFJNmz",
  "key23": "222q4415BHVyi6SM1oxzNoHfSPHsHs15CSBo4P6bMPVtc36h3j8QksMbTUnm6hBc6HqDwsasnJJfTgK58qZhxX1R",
  "key24": "241Au4VvV4BoUHdf5jhgiw9fJZbfxMKKFxVF3b6XJbEYs45Fj54CCpoUYaRmDQmo6Zc6PpUrnwcW7dGQoNNZ2w9T",
  "key25": "53nstQKeptkeHm1n9JDq1D9vokNc4TtQarMvTFTWrZDhYPQqQFcTm1XPNTU77S76yJoCqWgRgPJuqLDyNhrAvgFL",
  "key26": "44pwiDbH7dnWsQgTcNdvyEmbGrg9iUKnvHGAUXJ3qfJA3DoMHzR53bSHKQSGg2RLyqABEohfJY2fUEAhuqSwzZ78",
  "key27": "2znn13aFCSjeB4U4GaERDwnkgcwGWug8UsYD6vWuxxXTzG47LsgRhv6M8qf8GowiCq7pRFm31UTAsoHZPpqMKuzr",
  "key28": "4CPSQD3j8yR2djz4BGq8eEVYJ2zTCwTvuicqocEQzUPKtURakXLe1nMJTJ2o6tYSPdix3avBcJ5TWqTJJm58S4iC",
  "key29": "3wfBoyuyW1nL1cTyiZCwcrzAd1mipV3f36YmW96EDNVWYfcNdxr4edyGuKaA7fhLtizzCNtfKErYVHhKDJdoXd9a",
  "key30": "5Gyf8HWWr6mBEkfpNDCdQp8vbQCa4BGrn95Ny7FSdKFfKUBPyAFAZ76shQinuHkzyyd2EAALeXWbYqF9Nz7uHR4Z",
  "key31": "5wVnwYS6icU1i4C4Fv7ayeVjN43Cvhm7WExE5t5AEAo1HCMX3211LpPHuqQ19RbmmmBRfyLkZF2EP6vcfuVR3RMu",
  "key32": "5ofFeEqif88movjk36x7VmVEhX8VVihiz8GUyqssVdeTsh8nPPfwoe7kKirhWo8B4Ux53e5GaSDuTfCHA4RZE6dn",
  "key33": "5DQV6LuEwd3PQRRWmhk6nBUrk3jaWkHghu2hubrBHrJFmtjZceN2ocLvsh45npEXiYzL9AXZYpnBos4gpN4m3Wac",
  "key34": "g6YiQEXmpqAKWFc9z35fwaAUjH7p79YZi4mg3ETcaSrQTbCU1FFPyGvjLDFENHgULdm9uB7326msa1AybRWBJQ9",
  "key35": "49H6PmgZcoRMmVtPRH8GFycRtioWPaSbXZA151gynX2wPSLF8td2giGxYN3ABbSHP5kcBDxbKVDVcGn6zr3BdN7H",
  "key36": "4TqvMaYd8qpDCtWwUW6QLJJCBcJoSpDTv3uCcUaUNEN2dU2UhxEo3f3GK8z5ZWbVj7KSidKw6iZg9TDPB2woQTUr",
  "key37": "4aSzCL6phBiS16aXh4j8zgpxAA5ayomjcDBUADL6XHCYfiPQ79aAyt9F85L26xjKmHqkbGBiEjb9uPBnYJ6h3s2M",
  "key38": "3JaXYQ8XF2Muwcaney6rw2rfRcuoueW5kA4hPrXKTF3HtJRzo8wEdbso1GrBfh24Mb7SgLiC5MjfTpDkqyjNvq2b",
  "key39": "3w1CFcHxfXBiH6No6waozFMRdQYxVDct8eNQHrFLfvNHYN8TaXBqQQtEBjnronAgpac6CmAF7PE93xEtMEc5KS7V",
  "key40": "5s9b96AsQKQm3ftJ8k3GCL3Yg3mdTGErYtQr2tfVohycpUz1XCn8zD511tj2w39oG1Uv84FzsCTTk19Jiw65Zgv1",
  "key41": "56rWXbdXH9XwPyj9K1U2t6tiAULGjXzqf23eYeL8AaeEWjDwEgfWdjDNKKAjgDyxAUsmTHeSEU5rgkBGNGpGf2v8",
  "key42": "3S221g8kWHunW3YsPZXFmkJ4Ai3ALzBTTw6DfxEqW1cQJksd9kmvYw4HoMCDhpNKckp7XBkjn5D4UZzAEj5nA5tm",
  "key43": "3xHvZjM5qtQNVaSrk5tLRWhwAe8UqmeqLCNeDyyd8X34YfAW5vA3WuGSS1tAH1r7iriyMuFgq32nqGrF6ymY9gHq",
  "key44": "y57PtxumF2CwDVVWJ6godLfodNA4o6o8KYWYjZid3XZUwNhcTZjFrAaHXoTZH1WqneFRA8z4wiuF4zr8tN9fDBS"
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
