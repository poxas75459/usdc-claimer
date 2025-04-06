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
    "2KTa2DTASo7boQJ7z6ehdbg7h85AvfTFMKxdM45dK5E8xXBQKJZ3rAuM9htpHCsKFZ6R4FT7huKhVDVvsqxxd9Li"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkQFwaV2W3fvoQV3fa8owVHqmi6pb9UH9NM79ZnvxSdX5eWBKdUPY5kcnDuzbDP5pjyex4vS2gtAdz4WMJwJEeu",
  "key1": "shURtm6wo9XreQ5XgaVxi7jT6UP3UFTxAQFExHwxswkV2Uf7zYcNp1TNTqNGrHScvnZRiHHRMy8Fu8T1bVNfshz",
  "key2": "21GJxNmWKFmgf5nrWYBGxKk4PswWje8SiiqCv7sbnAHv8BziFNcpWSvmGrbv5kyjhtr5Nr4ajFSJbr8cdMen9vAQ",
  "key3": "2v3J8axJK1xW3hgvpFi4imerTaZu7sPFiDaFHhGvtscBxGkXBU6kNooShBbPpWnY5ispsfeW1TTnPkrKCmLpYXFQ",
  "key4": "3eTspi6tm9HrN26UWmoekEXYQNU7b27yEpcTtEzN2mE41247p6G5XYk38tBcbbpFj6piaZzvo1XDuorB8PDDESPa",
  "key5": "4jdoiBq7eGKeryeuqCetoGunFqq9bxQAUmDykyLStEhBjmg7pY95SEYUCt79y6q67xW6JprAbZDdtP9qqG37669T",
  "key6": "2N5HkNQVVswWD9E6kfdVpJ2JSTcKNekxzfSyW2KJEYiNneZV3FwuBhEoq3MoowXSBjKZWLjEtUag9sp8Vk5sLehj",
  "key7": "2J8yUoPQWDMCfnfKTmEuRQyntjEqzvVWyicpreqMdyQSUsNSGCQEuCetV9wG9abbPvLHoVg6dBr4Tuda7BSLr7b5",
  "key8": "42Q5HTNM7ExCBJfNrYVuCyxyYus7Z1byR2FbXY8RXKGV5s3Koa52XXeG72Lrog6poMuAS5Z3qWRUe39xMz8xQipj",
  "key9": "2MeDunziphLfwrrAirCpp1mdmLBkUPsXVQKkqohS7hhgbqQZVVuHEDBtzAhU4FY8d9deSbdMxD2zRAp8ryodpXB7",
  "key10": "kzrHy28rjuH27sJmRRukeCXNEgr7LyVTxAXv3pvybUyoCjopxCodHpwa4wMPcbVYRsQpqEJHEX8iqGDCLa9puWL",
  "key11": "3iF1W3yfeaUKPPujZ7rwfVAENgocsX7cTWE5Jxj2oPuYMRScHfyWxtNkdGnrL4ryuEPacU96RXuv3ycg7HBXXxM3",
  "key12": "2dcfSsG4Rchz472EdzKfWULNDGibUyJXag9A1PEXUTrKL4yetxoormGzHsb4qYYkZ6UPLA7Qa3YFom1uYA1G1iqe",
  "key13": "2vRNWBC6F3EKNyjF4qRaw3PCUa5tZZNg8gD9tx1k1AqHrAXNkhENghtFjxmxb9M3n1yWjsLdxG264YDN14A5M16N",
  "key14": "2Xg9kaF3P97ze6XMv8ZrauRtJBpG65cJTzQtrFqWrspzsNNf1ZYjAX1QX3aqrFS6hHQWHRiwF64bwjbmoKMqarnV",
  "key15": "hN8y2k6UG6TbSpx8vPfr3StMud4G1uuSeodShZ32oTPQvEnvCrs9S3QkmaBNRDbcJRh8H9g2wLntHbh7YtYSkvi",
  "key16": "3Vfk2CjtAmfKZSsNZ3rrKf28NvbdzE7U59B8gCpMRQyFEHjmMprUjJR8dGdiXrrMRqXAx4FZRXTRAhexJXfH7kmU",
  "key17": "cESJXeXjudrgVRiJdqLF4AtLCGcWYBeaNUDhDUyXMdDaqVq1ZT5JcxExtquaLvXUH99RA2Kdm6iW8VVwnZMra3A",
  "key18": "4F3mSrcH49DoKQHPegeHiTHuBMf7aXusEF3WNmDhTWDgVTzkYV3UsYv4BmQ8jgBw9Wue14Lb6z2rJrzmHTPD2kjm",
  "key19": "2Tgo38ATACgazdW8DrTxTW6dYStZhYH2arC5nTPPTAhZgY153mMFGXhnjZB7XKXsWRnRQMoTrzkHvQeE96yjzQjn",
  "key20": "yda48AtVuCwmb22fZoCL9vQjSVxNewMG6HbKmKbgLgajgxQcGZazWnXH23gKxTSFpKB5y5gwD7wHm9zbbYudZhn",
  "key21": "2A89xjziJ5oEh1Zs8Ebfc7FcJUHVKA83MC7DQaHNb66MwhegnK7SQ3eD2fPm5sC2X9TRyDWD2iJ5r3CkbZAQB7Ad",
  "key22": "5j8xHExtZoBSbYBhaY4wjNMbbGrxoMYKAUgBrCbeaABH4pg5VUMXy9jijoCh9uQL5QKBMZHf6D2fNmkXe81hvjXm",
  "key23": "QBdSHECvvobmabqD4o5eJHRg88DjgXttVVbbsvxCvNfSF7wGnNdScifmBs2JjDbfJVZagxix2M3ybKRizfCnb1Z",
  "key24": "29vhKtfp2bygdw69foh6AVAir5VFKXfpH7HnQhfQwcu4H8ankxdUy8yEi8cqug4b989kJTwvKyhgs5aZysxgsSxU",
  "key25": "3UMhMy8MpXijAE9S8iurAxCbEA8xjZv7W5nWykR1Nxx8cZSDZjaRz3E2pPeZfLiXAohbAPTTyPwBbuxcxK8zL73d",
  "key26": "5xeMpabd4VLoqkQct95kRzCdh7VPQm8RK9LZknrDvxCxwJCi28wpxhPyxiq1WvHcs3v9nWQvJLS3zXBMnrkCuwVq",
  "key27": "5CgGGyWZzvfPBw7Sh1KzR2aCcSwP38rRfXvvzChe39SK2B5WBye1yjnwLzfHhJRn1EcuWBTpqewos8BGRzsM88QS",
  "key28": "51NLrZGYcrs1BMcWbBfYz4cYaBLwv2BLau8RANM7TEHGvPXk16mrPk3HXr6C3fLQiHPV3Ju2qZffaSecmapwBKhN",
  "key29": "5wYqhUsjykC1HsqGpFK8m7PLCLDxQfM4NBo3v6VDbCPxebWLkjh8vKa2JxnPissfnxDvzUJN67GHrgwQiA1LgDRN",
  "key30": "2w2xAq3bCjD9SW8Q7XpzKD6dxbYexBUquoo64tWh5VtP82u9Ek6uWwSbFhuzZBCE8vtWWQk4u6EB5RVKbfegPxrQ",
  "key31": "ZyX1Dkpspvd9KEgLP7HEnrJxGVWGLYaP48p2xQ5iKmkM5mcQ3WNV7GvMjzHtxGz4cxRUcxg9b7R3gBtdNR2tZU7",
  "key32": "2WeyybqW5JQcVrKW6HCCpyB55VcaFqhJtgm8pQBoaPQeCLBiJBojq8emL6r2bY9yhRnjDApqKVkKKsVDHki7SenG",
  "key33": "4QU3MxW3gtFB13ppKZ5dmLS9mFNvkqoHWcMpxHWFjD3xTG5rMRFpGRcWNJpY827zZP9JPaQhLZDCCUzAxJhbmWrR",
  "key34": "3nem4fXPRQzu9ko9y679rMZbPXj5dfBHtLwh816Zjyo2mchdH99LvMdEqbqiSk1SL2gnWuaHAzUa46Gn1RjPbDkY",
  "key35": "3QztcyFKEJm3nLRCTwTkMavuhSYzVqZt9FFTsiQdoK53uo9txJbreenAQabYn8WQ6tWr696ZQSgvULZsSuFo1qbQ",
  "key36": "56zLvD3kxv3qZpkEfmDNb6FYDVQSURFToEwovnVNNQ7oQJAKKRXAD6L6EPBjpnq9A5R95fqoWuNpXaHpV6cpGqBn",
  "key37": "2oGSd3qvSY1zJCTABFtzg71KM17saQrQvns9QNfSMRD4mpqGUZ5jYEfnRi7poxG6fbVmcfHnGVjqNepmC3ZAFFxS",
  "key38": "3vL5YPfWYgVd9FWpFyDBwjkwNnpxejuzxys6WkW9yMJK6mD8toAstHVoonmLsWBKZ7te4yuSGnWABZEfXtoL2jnx",
  "key39": "3J5qm4ccyWKkYu5Xx9vrUHEu3Z2H1K24czTQETqrh7Q6Wh5tE5P3RhBMAJWCrQP4mJ2nmnP9hWMbY4troKNhEdxB",
  "key40": "4q6zcW3EedPRGBKvCAUxNT9pHnyGKHNYwUemVyLePwsqxGWJKR4a1apgqXGQQnUcnMoJrS8hdcHUUTqora8okgwa",
  "key41": "33xxxrDdiRPhmuSZQofg6Fh71DQnKKQg5KAALMT4ziCPds8rGZg5RhcrLAxm2A3PQmRhBwvGanDQwy3Sn3GGrWYd",
  "key42": "39QzArw22EW9mENyrz2GaGtX8BmJgesifFUoFpq5PM7FsRTRAvtMb8x8tA5efRzgnM65hWXAGXqApPXJ18SbxHzM",
  "key43": "2eT3joYnYN6btUVMiFP7jQX5sPymRRHRZLMotcbscfoZbaCVk3VVaBGqucm1wnY5MAgxrf8j514SPniJZir1oi5Y",
  "key44": "5czDAPe8RnZcX4VGfSPwAY1YFVVMWeujLmxx3VLfJMSfvESUCMphC2yrBHvYJgHAQ62pX9eoxcAfZ2xvyn2kkXuA",
  "key45": "4Wa89ZoKFNg3tJV88xfNqg6kYsFgjWjbTLQT77cGGTgEAcicrrKc8BiEPchqwBWQRgcYra5LYPjQP1mCgxzw8a5p",
  "key46": "5FH837uHup1B4cNpWpTk4AjbqCzQ6aGXqQFZJrQJgrUE4yTVqvQQJNb1eUkt2mhLa967GAiSLCPJ3PXhfBxGPYep"
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
