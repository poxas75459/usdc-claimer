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
    "3CrSxQzcaZffHG4nzRZTGpyC5JwMXV3SVoGsUdut3w1qg4h7ubXTCXF8RXGyh4UHzGRVJJZukFxCEEKG2HxyrXQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPAhqJRmiMgwpJBpg5j4TZy852cKdvxisdQoMHm66MePKPBSAbfA7NvfgaE4YJxXpRfhBT6cVXXQysjMpnTudAE",
  "key1": "4vXs7cJig3KA78zMyE6mf9kbk1XQfNqchRd1L1aZ4ZwKFAD5VUuUpfNFuttN4FztHoGTBCHBXWtW2vWyfLz3np4a",
  "key2": "2YKyUFNqFYGze2FoHdEKWcCbQa8LkySuS6euUJWjE3ierEsnVkh4rDuqe7XimeDZ4U8G1DG2YucmZc5PimDpH5WY",
  "key3": "2dv35K3bpDCzQdXDiP3gcGHNN2qBweeJS85XhzMJuL3b9vfHTijdpJU6iDovh7Esn5QFfg77Se8395cbDfSFsVnW",
  "key4": "31LMAvWPk8DYjGWdD4rAKH8cfc2qecMvdF88FG1kECt25y94TZprHRWgdDknbWo5EzdpV57xYMJzUim4JN3mXkvC",
  "key5": "2qMdBEzr1AhomQM1iVubTsVBDS8dfZnaxvgusW9xyNbg8MpER5umPic6hh8LCHQDcENGCKWXt4mQHBKhLBvzMgbS",
  "key6": "2dQ244eZvhNdNMdMZh3QduW92sVJop4trK7MYZPc7LeZRcxmKZXnsByJAvADHFZiADad133tbNuKK7eS4r7wR6sn",
  "key7": "56MJSAncUxXw6VkW9bGTu6S6RpGqwJQ5tNRjkFe6Kgcxr68v88cNzxKU51gAXv1jU7Xci3L1V3biN9dMbyPEcPwR",
  "key8": "3GAdP8iR3nvPXsmA2u5Sq99R9ibA7GGiQg6xevXhnmeWenuZaoxbixqvDv1DXuxXbA7197mcbojykQ9YhWypiyQx",
  "key9": "5s86jBiweJSV1mqAzQE1fYLyPWppXoBVEegFyBdW4wDSgK7F7U9qEMCuJM3NQjQ5kroB3ymof5aA25xtdP5527i9",
  "key10": "4GMgSqkouU5tcZLeKTVfezdYYqSmX3vYiampuwrrSbqUznZtDUcaxdLPCpJUcrbRstwwtTH6AofsycSrQBbmw7bd",
  "key11": "2rbsB3HBDB3DjmQreZfC1rNWcwE6buD9mPidU5g8hqmJuFt8hfwqDhmENgULYS9CGKtMAcGDhVS5Le3UnRHvvaSx",
  "key12": "2n3XipetdUaUqg77vMPFGSxafE7ZsxmQviK6xDnfXCoMdtARJiLhR25bdNHKbhAdVy9FsWdm68xaT9DrbwKf7XJX",
  "key13": "3Xbvi45jZjtMgKeTAvkWP7JrrBGNhULZUCWKJxj2YDryTG9XAd5P2FjJukERKHWEX297Q1331AprhaugB2drSB3r",
  "key14": "5z9L6juKiggUmJmRMaV4vvXYLQ11h9sLnaAmsvq9vtUMkdH4EXZ9FVnDWdmdUu7oovqbsZ7294oRqwcftn6uwXzC",
  "key15": "58zBG5E4APe9C2xcM53ZS3MHe9hWAbEBAxjDJCN1fe7iJDK3XPxb6imos4K73P7tCeRPa4XZHX4Z8G95R47saEVG",
  "key16": "njMnVLDpq5Bpb3sMe5v3XA6witTzcj4kLb6UDpXrgnwu7LQeojRg48Cf6KCfqiCnBzcftiP1Z3R4yfcokw6r9Mc",
  "key17": "5abWvnAFQ5Fbuc8cFjNVxXXGEEXt6S9GSVgCGcGX5D1UGNEX9aGWYsuGTuzmwMUC4DNejmE9gbmU6gw73GAxP5bD",
  "key18": "4ohRdJv68RkdDAWiWFjSZBRKB6k77JMFNaM114t1h6jAUx4tg8MeFSWELZd4yEYaBPKVmm4GyXaTge72gkmCZKrd",
  "key19": "5gRyKctf4dzQN636jJWa18jf599e1zuqMDZyn8DfysYNMuVUWBzTcxsB4GM3nWy6B9ewoYKK99GhLFHHChfmA6Kp",
  "key20": "bPeNFSz1RjnHKPsdbC7NiT5gyisfqtA693maqPyMrdF8aUcMGgaL6wvRp6DDhfWYao7gjA3zVXfCg6JsJqaFqoR",
  "key21": "58pNs1dPkMT2MqNW9SrX2sc5ip2NSgP6rdsQfiGjWSYh6g61kxt9ZupmWfcp6BvfgYSF9kViSArTvPB4JpRG9VNx",
  "key22": "64tnzgZqZNsAuLPHxhoLsYaykuN2KB9shyfDEy2uzSMLMMhQkF4t7nfm9f3uw1JmJR7yTM6Uv64JvTJFWW7jgXD6",
  "key23": "2UKFPMzdB3wDqZwJiZDZKkoEsMkegrJbuwYDypFxQnwSPBNcxV4Z8XzF984PujvMPSkM78TN7REEvv9XYbgAwpKL",
  "key24": "24C9zdTnNj3v1Xw3qMvftTczWJ3vV9XL1nYcpNYnw6HbYMkmapcYSQHg3VN7vQA7gkzmPf22FDxMQCdg5ACdahj4",
  "key25": "42o4sW5jAtDcJ872wx5q92SDL1EsYbPDbDAxkVuSrLsStpy16K1WK633u6jJ5PitRjHXStNhGYdzTxQfFREoLtj9",
  "key26": "4VWE7hr2C87QjB2y5nkd2p7qGrazUT9KTonCZSshNCvcEFj8muJ39sZRJsQkncaWmtQbF9pUT2NtMwdvdskXTpPd",
  "key27": "5vxUo4AjpwHF5pYVaqmvTCr7xDV82nvWgiW8Fc5KPnxcheyBVXnGbePY6vmTJCcgFm7mJmMh8cBUYkSBeaT6Vdam",
  "key28": "5sWaos3hWFaCH47kMadwCz2ZSQGvB6aT85qryAkUau53LNqEN5z6keHvRJC9izQcSfCu87evdkJAhn8U2WtS2L64",
  "key29": "44U8b1MnVenPxKxMnB3NMZF4RBeJzDGkdaHSDNfZAvvt1yGWaDiiVQopJ7m2hhuM3addfAQMomM68JR6tnaa3h42",
  "key30": "55vrm9T19a7RxPNAD3S1SjU5asU3SsQRpU8gxKJNCY8oV1efeJKuohtNp3anVJxWEBsDegTQV7NL5MycM2qmq1uR",
  "key31": "ueaGDhGYXkBA2N4UCqrBkVoH8a91hPmcFsAbCHikG3yxqFMYeu3WL1aJYqrTppaerrjQQV1vsgKsHZ7RCXTRbUu",
  "key32": "61hdKhU98mY7iDvaPdqWXNEvxkENtRDkJX5xJorHJysn5tHFovsJd6158AmFD1ZKP3dp7fpwkaqbiV2DMkhumn1J",
  "key33": "UYjhhM6EJbbhxHKC9RoNcJ4TnRXTvYPhLiaB7AbE92B9cwp3tKLNgpbkX31iySdTgVpVNTz1CwYxTbPYwzMLgGc",
  "key34": "41M68e8TJtmBMzTPxCNJoYCGLWsYWDjNyvik2vx595PrqsoWWpR5zecGdAQwfCuCxqJzFGiKWVJbF7ik9G1VyXy4",
  "key35": "fBB8dmWEWJ2KNsVhx6cd1UAxpFAAL8ppqs4jXMSd9wAjRW3WuCA9vD3g9bbjBXJEGVachQJiXafkdzMMGJoC5dv",
  "key36": "5cdn9rXZkvERg3qhaSW5n3GZKkTfJ45wXXbCQzApUe5XSWsc1rjncVY1SeszzSwGSUgdJdupWJLKMScXbrWsUMxL",
  "key37": "46nBVZaauVP9bZYjUgWpZvyerEKUykrQ7pX4rpiF2jH66rBej4DRT1AsXC29HXd7ry4PtaqwXDoakMkEYsgGW773",
  "key38": "5TE5AsmTekZk6oXFXm4rmSZ8nxKQwjgzcCUymNRXGT6hF8knh1YCEukJmMDvZWT6dPgUUkR58ZubR1Lg32z7Ed6J",
  "key39": "5NjGNxg4sPR5ZjZCNT5ubjBtaD8FWtHk5bYC3qkosHJ7i8mhki1X8oHqCDMgP9SDbZw9keynrEgKuSWLawsHpfoQ",
  "key40": "5u8b9zgV792tAFSoZMdQwxWceZwYnxbXL31hATgHgpDXBwropGdN7ECuciPtc1B3dQbVoeZSiJqYGjFuA428XCxa",
  "key41": "4tXBBbcsiQhLVvS1mEgAKpG7QPswvHxpFfRxEN4sgAomWEN8XRhmgQmvt1oEPzD7dKnyLkXWWVdzmFozw95HHfjP",
  "key42": "3kBpbsaXBBRWezgLsQ6ozQzyW5SAKR2C6VAE4z3yBu4dpeFgAZ7m4UfH1owABYtPy2JWtyqh6Dx58cZyEkKQf2nH",
  "key43": "3rwEW7Nf5ASg6EsWtQYhqcf4u2e6dKgtRCfBgakBoduDfdarqreCQaJn2LVie7JYyfNvDHJkJu4bvjKgcfewSDVp",
  "key44": "5ehW6pAhhSdeWaBFk9SLrTs2dhzh53HNVhR8PHFyjXFDACboUyXp56fA39wDainLxUASUd2gFAf7GtH5eq5TYRyp",
  "key45": "3zXtckAWBB9to2SkGejKFC2ssRAPwQE8EXttuSWnaAWNR3hdHjBCH7e2dyAotdtEiUXtqor9fhNve8ARK6C93DV7",
  "key46": "2LmGdauX2m47LQYaqV3v9h8wMx3urKi7SRNgqpmYRRxktVadvPP4YaTRDpvrq6qYQBLAkQDe1HD6yFNTZ6LQgNJ9",
  "key47": "27MMADj25nBy6AcnEyGZV6b2tAHQLExhqFDKigkvDeUqH72MrDcgANKtuxJgjw5EE2ifRVeEzE7ELJYkRfrhpuZn"
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
