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
    "4XJKzVLFt8pQKQmGR8cinp622UewnJv6XMLxQDqobfgmxgpGFbbW7nsEbDobJnLyxpSVW99jUQdsByeUCMNZvSxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWfEgL3Tihbutic6A7yvsjJvxPJCYriWNCxFTYdmw9jbzCWrwTqeuVCMSQqVTgByUB7kPJrZFaPWXCgkbG8R8Ke",
  "key1": "4cRPSv5c7tDziAtbKc5BmT5GQsrNceVkifTT184EXPpbRef3j1EKMJbqSfCB8vsShk33DDkfBErhkHxfGFa5L1Ca",
  "key2": "317KjisdEqW76QkQvQAffTV7q19i6A6P9SCRna5wWQTHkHSmgy7pqqXQL8xK8TozCgpHKED1Vru1Ja2kSHLHU4Rw",
  "key3": "2itYLJYt4p2EpfVMALnmD9eZqgapYm8wLyoWyWAvDbJRC1AxpZ6EjNqWZQxePeySHaLxPZW8ESnLrFmSVizRbDDb",
  "key4": "DBtAyCW4w4HWybviYXdV5A8TVJq3UXt1TrSZettdnnArauZ9i9PxyFbhSDKBdnLmFKBNSzDYcbr4eqVykRqt19F",
  "key5": "4fAfTV7s1WjTqJpJAvgoogMwX6NtejMXfxRpaRZcVzUvGc1xoJyfREKbTu57SvC3CNqYK3QtAia3d7MzebNVZNAj",
  "key6": "wV1qNbX7YWxw93mxoRPsLPBJqY6h37tXNbZYxgoV5AnsbNYwPKVrrzXPx5hVfnNy3jtkURvjuXCu8tiPsz69wFe",
  "key7": "Xd2Aostkd6gcXCYtHxtaj9noCPSnbHKpabGuN8HTq8iCKUuYDNwW6L8dtGdVungGiNPvT2mjkjypcEEbvpWLroV",
  "key8": "wNvLpyZHr3ESLsKLjrdYjfN7mhGzSE1SQcbJ1vQ1ADPGZPD49eEaYm3wyherA5NJ5jjeZ3XSfkpjtwX4DQrxPiN",
  "key9": "26utkNpyYVMJgfCmApDTkVu2CiuapQT34zLwnUGQsDeAt23a7KjtxsDMSTBajZcK5wpAAvJSxJzUpgd92Y6XdkvL",
  "key10": "5ZH7M25ReXidtWX5kJGVe8gU34yqBPA56NrvDUMBkXVzBthXX8LB7u7YZCipSbfpGnus5xQbF2XT3QMWH79yFcmH",
  "key11": "3zDVrvQ95KX9cZvqsjAQoStpr3sRF5eNrjBqDwE4kXaeKQndsd5qYaZYx4vH8GNBD4mFtvVQq3thBS8wbRNgwMLG",
  "key12": "63ar7d8TA4wDpoDpMGLipxCeUdGrc8hQmsz9FL5dxqMv5Mnf9dptifh1Utxops1S8nNcH9eqB6yjF9SmgKseRjXR",
  "key13": "3NTHkhpVCdxCNFUxUmiGEtkd6a1e2XrtTJEVeQpmBaDbwQbME1f7YpfdnLgBUybRxoMLLikwhgH2tGJP3heQgkjP",
  "key14": "4WScXTba3Bcjh6NZP9sPxCdz4EeEDk5x3UeRDai1rAnYrjYMbym2gnd3QiCyeHkRsDKxgRs2ofTqJgQbHVWYm3N1",
  "key15": "4WjA8JUzHT6S2BB7N1HHZJ4F6tf7AGiUchE75Qo5TbqKYyffafahFdgwdcXLtzgVX32SncqRrfSKfhugwF9itRwY",
  "key16": "3JUYQnFuGsjp6mB8NV5PNW2tr1VNhAfMU6StFNUzQW8vDzaF4B8BbF5XXXZBkUUE8joJYgJCpDpmMWofkNDHWozn",
  "key17": "4dutXfH5VqhtwjPETAsRmPm5x8wot93xGLcUtfAyMdMYFCni51y96BhA2QetgMxsNvedYhZ4gpe4EzgbG2iBXHy2",
  "key18": "4R166i14zTmnYYD2hPJAz3Qy4evyxV5K1hqvPpEUS3gkZnYYpLYAD9mMDFZmDKW1vH6D85RYmheC7UHjD7jLrmo9",
  "key19": "2qffVsb2ee5cVqbdmc1GcUC7j5vCLWAQ4cqHDgNHtW6ZShbDxkSas5nUeZtowFp7KqY6XET274eGHfoiZSgnaGny",
  "key20": "3LAi91VEGMMyGXJqmqWYzi9JeZh7rnR2JE43F4ZUuKFzTc7FGGMy4VVDpAoZB72xEDsffXqcE6hSocnCSTe854vj",
  "key21": "3LmWE62SEFiSu43veSqPCnmQUZUP8SLV3P5Vp7o6RJngEBVt2ji22anntfXCFWzbmTUd8FcRnH7J8KNSXwdQfGoQ",
  "key22": "23hTubvczgpxnrpZiVERpkN8LBFyM4XJpBpvEjofjwm3899wMuu729psLFgYSQqrm1z5pSwCacqyPQhRWPqCRvCj",
  "key23": "591HGjaV2bDfB77vNRJU2GMSgeZqJcTCA4ULrTM3ZzmFXh2oXhZv1P1mj5a8nH6qmmW5z7X8HdAU9skTgV7wBChF",
  "key24": "5qU3EGL5iqKj6CnoMjKcsy23ekbWzMN6QFjEVZyDFeNWTj7aokWVpuTtPGEefggHHyHHwkTrh71n8iL7K2oa5NAi",
  "key25": "2ceyWbmUS8UnWWNjyqkBSJ2Tgu4nY4SzgqieRE1nAdPd8hni7APqBJoF6UpZyk5GsxSERYSn9hDKdUSNVCtRY51j",
  "key26": "4uuBdi2q2dNxaSYV4dJ6xrQhdnCz9bMM9BmKguSpv4B9ZENsL76vmmnLVFBm4DqiXo4oJ9wr2CkYXNZ2deD5eYDh",
  "key27": "yKiXdPeSrXFBMcb5v3ybR8c1mMjUSeeDhYjyCtdeyNnwN7FnjT9vM6gfCkAgsvZpkKTnar3aUDfqjFP3i7vsTkS",
  "key28": "7jLjQyyqGZtStnsAzDbM7wZiMTnxsnKs2gVW3X3DuVffWboGmmi5BMygzDRpjQCXR9sGj3nrdhuonkHHCwrmuHV",
  "key29": "2fUTATrGi2YctidvMErdhRRTVE7u1pQXeEkfXLVTMiKHHayVHzzBLpUdMP9tEadkX6Tw92FK8fjYVKCvG9ej3ihD",
  "key30": "32o9ttrvSr1nHtHWiDVo43CNQzD67aX5ohzXHn8WxwTgbWxPW1ZQqGrbhfqGeR8yzB8QzEjipg28DjTokVYux2M1",
  "key31": "3AQvNPib58VMEG4DNhWLeTUgk4ACXsCcwNkfBmUTvq3y5AcSbhi4XFyPWdaCZtQJWXySZGGsSNv7ZSBXAzmHHMHF",
  "key32": "H87QsZMGhAYmYD6vSatGdqVuC2TeQSQDqvEY4HSaKebXAbL6N6Nbs3pH9vuYDVSvjkGuanPaDncVPRCemPCQwUn",
  "key33": "jKgCHaACiSncmtk1TXQVQZY2uvqqgrqH69YbpVwVDybQ96ktJSyLpDdMdXNnBVtQXuvUY4Be9oPpXN7CoFD5ppA",
  "key34": "5F87JivJfX2pGs1iMH4Dnfi4xGkVTwQG7WNJsSTmftRDGG6xJ7xWhfXQwW3hKtUgQZ8aUWXPR8sFhJRZZpDs67RZ",
  "key35": "3JeQhJg1ENs8TBA2bcyu3uMfZxip4pWf7WqKNSQEfMZjckNCbfnoLhczdMDWmtbtYr9dAZ2AUXTopCb4kZ63VydW",
  "key36": "29USGvo9nQGovkUjXWLzkeN8M6otmGW3zdvaVisJwTouXXzZNphqYeGALQ6cUjxSnvigzujuLQk5AzwxaiDtFw6W",
  "key37": "4Qxdn3DGxyixGQmAJodAeYBK6k7LKBA7xunX4jWYYW7dMQZVmChdLxph9iWiAzwQ4PB3wu5nx2qZcAbW31EvaLCF",
  "key38": "3hKsStPDDpiYhNdGzZJVFBrNgPU77szSsPpbyz5pXx3quZgHcyS2xAtzuWKpXozeatsingxdLRXhPBp3Qe2BNbTs"
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
