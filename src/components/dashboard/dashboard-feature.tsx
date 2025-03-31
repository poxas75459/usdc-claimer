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
    "52s2GWtccUptX2XoUZCCmimMsC3Ga1Kpnvbjmxry27e5146vgAnGakj5hmNhMjG1wD7PfG9WDurRXSv2qtNbiGNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMFaKGrDGQQyP3GZV1yLxDcKP1xuiwBJKPzL3ABvGYXepEHDBiLkVmXE2VdBTxKKZ5YterARGvm9gXCUsqFriVs",
  "key1": "4kkFuARNJQq1NzaqNTrcEBPbgcgLZh8g98uVVkiPdL1fUa28iD96EtkS4VtWzz7wLPq8RbgAAQDraqvpvFBbYvhK",
  "key2": "4YQ2pqyVDUZVPqgJbgzgHzU9BcKBux6SpHqS4UjzbmdMnnT6k7JdNunA2SGeW3YkgxqmtciafV3mqonFHRkbsc5A",
  "key3": "3QRYHuYru3Dn9E6sZLTPpvfDse4Pp5YniBz4UykSMeuTD1twtZxuGsCZZG5mUkARr7UYMvDqesF4hJFcW548eouv",
  "key4": "37SYnocxynrZ7XZSktCaMv9GnkBQbipp5Gw94zVqQsCxNoSK82uLGddf7HutWQY1S5NG3YdRVucpbTZdoUAtkCBz",
  "key5": "eoccDQnsFw9e7J8T3WXyEuJ48PyEdmMnczFaSXUKMyM6ovpxEwWz8YM2uB9pu5G6Pasmn9fxeVFi9G98deDgE2y",
  "key6": "5LmaQY3eiHi6P8btTQ9bFoXfi4iHUYEvWJVGTWgshXPNck4MkdeAhbxX1numZVotyMbgL9Nu6ZbmpvRAvtikPmgU",
  "key7": "4B4UvY7Z294e2dGrJy5hT321js6LgzDs7gyJzUqQLDkDG8FiYnnsJ6hUiycFjgXBZptAu1dBpEbFi2hAnbFUu1Tg",
  "key8": "4a8vutQW8WfTkmvDuo8x3nLsXnvsVwXzopkY32mGeLoJfKZDD9pdXE7GQ9kthN2c6fxQGnH6LkkFN5tW8TYJ14Nn",
  "key9": "4VS8gQcW9DwH6VbQjL3k7fybrDxnesPQYx6XoX3yb55kNW7Lx4BwbiNwTSkooXaqwHgPuv2xrLAqka8Zf4oyVVvH",
  "key10": "2JYD5mjAEzThQyw6LCeYAnG4MzJNYj9U62EbXArBRmFW49Nf7zTn3x4qcggNPoKv4KoqnESaGVZ1xeCriuGkb2SK",
  "key11": "XmRfRMCaBpwcGFyKce6To4nV65WH1gx3LWv69iD1KJJY6T9SdH4NR2Qp4dYLWDDKUcGmYSRD45EYDH5WXeeve6i",
  "key12": "5EoovMS29HT9xWUUugzXDKcHrpBNjBFAfNP1oZwFUjwjWdJpJj2zkQmhKssGG3mf2HWaD8YM7XCv15wv7o8Gw32T",
  "key13": "2C48ahdvMbahizA4VSTbS4y65z1ztM9PcErfJgwkbm3F87oi1J8DcT55wELDxJUDuK4ciZtfQJacJVTQFH2hSqVM",
  "key14": "5mK8mpJYY5qK7CP8yk76RjPCmPmC2MmkDzKne6pinpYmVxmtGkX9Fu3MtryKeJVWPudJB4HWthyTVkt2dtdmztHY",
  "key15": "2nHxERETRFh6yYV7Tdk9Pe9xwZUM72N8ZjqvNrmEYBJZ7duJhJs7LC9URj5A7yGmvpmMt2jay63DdUxdw3pPtees",
  "key16": "3hVy7XWM9qA5XUiPAWSGgeHEWT9n5ogKfbAWHUgAhcxPg8noMCs6QQCAfSV6srn8Vx7a1fjWJCcG6AesakXzgrQx",
  "key17": "5PG9A62PNTQfx8heCoxNZYVZouiuEHBKjWtcY2tgvnifRNPK69UHbb2t8sacthsQsSrJwtD15o69MDzFNZ65b3QR",
  "key18": "4xYREPjQKEqKYqBqeSJgqVvsFnrT9VrauAMSRP2pNVYGt8aoW32TCYn9f1HtsXwpNZEAaz1WepXe9LgCCJ86fQsN",
  "key19": "2nZWKg9XgjD3vtoTJWebKgDneHG6Zw2eTwZT1MBejkNqErLFpyKBtpxMe5wghoVV8ysE1UwCtSkxN8FgwmJc19jM",
  "key20": "AUhT58Xk3qFvuFUa2EsYNtqMZBLCdqdwepTai6HRN1eGvw8KKvdRWk8NzxaQWhD2LU8QPRHLo6WcidEsSmsBfFy",
  "key21": "5vVYQxmKyyRWEPxVdwicWeKwLjYkXXGpj8A3eW8sT3Fjzg6hZxzUfpVfHi7ALf79bM5FW9EbqNgwxUp3mrJRTAbV",
  "key22": "4eiMT3GPKf3GuhXdEfNoN7kmzDyAtZZjmTM3CwbRMNjQAcrJADQdx5EPaLE836Wj3M8ELWoMJZ5zUCQu9i3fZ1WS",
  "key23": "9mTX3EUb8oSGEsUGHDzVQMdD8oyG8JZi4whHVWXjMAfKK8FDQWQawZPngngisGykaMUz81ipisXg4KrX8LnZyHS",
  "key24": "4oLRwhBqw9WjW7K4JJ631USa58SkvmaKs3DgEWdmEZTmBCz3s8iJroWe438dB33Yc7EwFPGnH8iSwsZa2aCFE3mv",
  "key25": "pa1zufsDTkw4HwwassttQA7UnpthinfmADpQ3cDGQJznB7HDX4vx3fwr9sEs8A9hyD5vuFtV1Cp7HdVDYeF1FBs",
  "key26": "377T3xCsmwcpbJVDtZUmWRZAH11i7fUKEQm3iLM6GAoWRA1xvdaEzHiQoJzqKngxaRBq1zo7dfRjDEJgG3jpBKDF",
  "key27": "5NwQXynCYuDWZkV4TLyLvGzBf94EBbo2y84Ln9tN1WNEq63hu5Tp7PKpEGEPSHH3Y7PKiBpZVD52Z49nDw1kwm2Z",
  "key28": "3HhSFnou7RBPqtavbCJzSS3gCgMoaXQSXKoQqVzUxvMqWgQsf9nD67SpjUdudBw4mFhheNk1SMQSkQQ42eAtKN7R",
  "key29": "38vg1Bt6PREpd7pPZksS8gVNM84poLYgX7VhrTrZ9WgCQZCjexVLDAxcefXqsxAqf5dtK52K2Us761QCnsFpn7Lk",
  "key30": "4qDWMjBdT9sswtLpdPJJLi4BMdNQH35YBsDKd83AKzMJc4WW9gRy6FXsbsEAhUJG6ChiYSdnZokJU8cMuN3Hcojz",
  "key31": "5jVGdcB8qsVMHgrmAoFEPC66ju3ZvqTczpBV68Z9A3RLayjTuSgmDhCD7oP1hnd1cYsPHchokFs5kfdFtMviPgwz",
  "key32": "124eofZuKR76RwTJn2H2mCqibuY185aNrWM1QomF8SYDJyGy1UB7aEeJE8s1zDjD6GJz8sRWFHJASntT8qjxyga6",
  "key33": "5aKHXALAvAfr9Xi4ijiar6dMKmT7bd3BaFrWHfrCQ6DgE3DVKgLi3WhgFGH4o339pUkAnAFjWcv676L64GqCyp2F",
  "key34": "2FmqCBkqY8GvLhhrYXkPryhr9bdLuRgkdE79nkw2E5HG56ggjcD7dsW6L5zDeVTL1S1md9pSSa2u2oMuD1883SvL",
  "key35": "3469eFZP2Pv5yDVFUgrJq2NFF1Pn5FXKjhiVXqJgnrAhAeWcjw4SiJ8gytqxFnJmyx4GQmHP4eNRQDcpSwhcbqxC",
  "key36": "5QTyrrNSMaaTsUsiGpL4bJ24qnZQ3T8i3cdRtEzTjbuWHgBdS6WfeF5PnaHMgbr7CiNTHRRbeLABaw9KWzNQSRkw",
  "key37": "3eBLYBJCLpqQAVGmPPuaWWmyoz9yMixwAkoANyjb71R2L3wdgZzamzC3VPKsLENrJUFahZma4VzgL9jzZbeLDih1",
  "key38": "3KGTDib9VAkuT1geiyenguvnQP9V5kmVUtUd28oq5gDZsLcD6svA2JgLmoT3ze1KFjgNAfxqUnvksxdRsTkVRWXD",
  "key39": "5JgjvLsQ4CqWLaVuTtMAtRFeduXQihTEFmMc4jYcBvaDDQUmBc86dn1nanRZVzEizjNGjNk9mDMPhHyAP2nq1jHb",
  "key40": "2mQ55AZUgNt4ihVQGMXcrBA6256CcBdg6qbok6g7BuwasCEBZqkkWp31hPagxjfbCwoDQ3TKghbfNNZmZ8Epq2rA"
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
