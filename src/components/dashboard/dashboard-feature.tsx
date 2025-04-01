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
    "5GdZ4Nirz34jgEhvTp4F3RMqP7ZWefNatajyZ9cvDZyzC8uf1mNzUjdhS3WxJgqHVFrihfe2evg5ALRzHQJHwLfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qanHvqKMZQcRPx1iJs3wBPeUVMCDm5qtQnx7D1SoxXdcEmy3ihk1F4yvJdXbi4VHRMKjjJaQNyXfwbRzLCUwpjZ",
  "key1": "5YnWvgbZPQynATdbgtJz4ip2xR4CpBoFfNbndoWvX3Bnn2PePt2Z9wtcvDQGDXNX3cZiBrwFmbpMomwhAVE5ijbi",
  "key2": "39mu41j4T7RLEQcJjr58rY2ZzusrZnw8hBExaNMyxB7kaMwqmHFjZgNCinRAybeKyoEyRtr5XDx31UYmnhhULEnh",
  "key3": "2u3bzyh7tt9caKHWNveEwCG8Cay8cQy4j4mUtgBq84717YffHABwC8FZbxGp7es3oHzdnPuLgtaAqohf2XPWisz6",
  "key4": "56buQBLK6Ls4ZFJRDdX7zdnUwojAZe3Tp2JTNAJSfGKnXT5JaKKJWxKKaFuHZUWYqQiKgNRjyrreXKMgKNo2GdaB",
  "key5": "4yNhj8XNJqQVNzTRxyAqn1NVu4KR9YwH76SuAmaCUe6wnfDHBKNmuZqSwgiveZ2tBeRqEBYFQrrbP2awHQSKVgrf",
  "key6": "66Q5JNonKYmH1cLjQFnnmU4Lp6TXwWCWAN7MMzejsDJiuUy2eubJMWK1qq7TsgPqNvGefG1yEDzULeo4czYXXDGu",
  "key7": "4FuHtFBbhobXQukEqkrLqb24PBhhyTVtfd9yNtYpJvs5riGFtCdDyPpvLsxJ39frt3DNQ61fEJ8wg2iTPx2F1uVH",
  "key8": "5bULDckVo8SEh3f3hrCAwUjwVGbGYy9UvrCEuGVuKK5TBDd3adud27fSdX7a3vz9Ayy1vunBvz9vBW7pPyUAtjas",
  "key9": "2qLriPKy6vPMjyCFk1voes4uxFFBJkuU2j8ZLNyU17sinN4zW2mHApJ1YDcEnhhKhBXYRkRzNXcmJn2wtEoMMwkv",
  "key10": "5uVoLPnvQzHdVKwkc1GNW3i5kdu4p5sjHF6EpuCm31CcTnh6j4fwYdFDwZaPaKSue7pacFrjwNYxKXYCR7An9Xb4",
  "key11": "2Vcyj3zBUYKtAfWeoDBrcc2nDimeZp1oMqaJgNdsHALFPaVq4LQJrVQeGyYomX4r67t52Kq7kTdyApHqA4ckGfMY",
  "key12": "5bKfTJ7wxGq8FJ3S2ecADayJABzzz1Qr41nmpqaSZbYTXHAwTPUmhuP7jiPnQUDzRFsYMGoNHBS9yKYsShiiFF4t",
  "key13": "3i87oxJx7nM9FjUje4BZAZuFJ5rtZuBA8EF24rrkbGyXVRs6zDz7ShKraBDYoyLNuR6gZNcWC7yPAjv9VjEbwisP",
  "key14": "2csSt6sHHNj8FzbhKmK3hTM1oJY51wQq9YKjhvh4qrMRDBWbqtYhEX63LnpZfa7VdMaG7ThSEujoetdpYCqv3vPF",
  "key15": "fu3aVZVQGo5cG1cHkDdubbmBUdtVDEw3hjL3mSXk9nxxp7r1JjfrLJ4X6AdEhRMWxqx4NwEn35HW8tNMYYUVtLE",
  "key16": "34T2bGiYKobmb4LyRbaajt2G5VTNzwtUSt1Wr8QdVAu91CyqgJwAsJYJbDRDtjP3ip5i1GgU1XAXPBnU6rh1mHmJ",
  "key17": "71vXNM4CthKNvW8sU4GzghwKffyX2FTyMXYhoxVavuGQg9Eq3C6ARdMMu48RVh84D2d9Grfz8Xms6d9viFAvVLX",
  "key18": "5cjKyFxKjt2SmYf4MfoE64RfUFxvB1NybMqHS4MNubEYoCfAyPgCSNtHChcte8EjPxteYrn23WYzUkd4UX7AuW9i",
  "key19": "2TfPrUkh3pYRCPNCM7WHTuoQ29jhEFJtyLfPDzPfyFZBaaCWoHhFctE2MYd2jy2YFyP35iXVjyk2JvPSfcYywz9Z",
  "key20": "3JGrdqqhLMm3zQMdfHsRVo8Cyrhkb4gCtUiQtE2sTGj695EHiwNi9Tk4SJn7uvEuUkvxpepTrrwo4DxhjygQMEuR",
  "key21": "5kodTNVtxpJ93pJGaYHmnpTYjmRF7p3KLxSqZZNcpjBArscBEsTBPaf8zS4mqXbHT5yoYzwxyo7u4A8QnejuuQHp",
  "key22": "3jf5cyKGFtp7naPtpgv38caHT3cjx9tx1B43Xaqi7anh4g2DLzqTEUDbDBBm2NK3BSRMvyDaj5rXfDYbcx9tDotD",
  "key23": "3o4LN5v1s9hpwqUMmbEFVnjkfW1Nc4aEHogXQBMmNBFbX3C7bYmZaWg8717K9fPCiJcZQWKK1UddCYrU3ogygkbY",
  "key24": "TVDXNCDpbvvC5YvfRKWowCvYjqzfrtECQWvhYFwLr9juckRPFhmvkCjeQptJEVEXhsU5CoixMupybCYZsJnx5sg",
  "key25": "3LopF8eMkFxG5AQj4GtU8cELgMBzY56LMaDzFPgkKe9Z2oj7rvzSSMnTX7cLw7XUxzrXLxazodRibrTKGZ7MSVgY",
  "key26": "2pmuSNqhDofcPY95J8H1SzWLzebMwumjQtCivfa5HjGUSLTUuA6QCx8tbfhJrZds7o3JzTdkNoTp2r4wQS8SZbSS",
  "key27": "4LA8MdhaAj57WUSPgK4ATjizvkSJ1zb3R1WcoU6s1NT9zvFgkYrw1eSQKNGmgEP9xY3nAGZuzS4Ywq1Da24eCuX2",
  "key28": "4JRVKhenu8TF4TkFijZ3UPtbcVwYfrVQughCZbc19b4qPv5bZtySLrhe91SstuSvFvhWEz5wyPnVPhwzY9vit2vf",
  "key29": "56myHhVXpMewB4H6xP7GeUG4EYeFnCdQJsFjCpwq7ttDPRJrprzLRGNsnJ5aTEVTfZVkT4wEGhE1r999pAiTBaHY",
  "key30": "v3Ts9fx22B3DwrPLVAB8rwwNnpUZHy9urfEZ8L6Mma38TLXp1uQTQXDir4aMqwHQzigqDmMqf6TDTHwNCu41Xa7",
  "key31": "2Hiuoj37bYrixDMV7xgwFkjUQHdXzmYtexaa4bLy1ftAVFc7VZPg8HFZEhrzLmL6ntKFehcfejShjysKXapGBWZV",
  "key32": "35HU3x7Zb4Jc49xxsf39bZmvMgeZfKmpRMadw7afq4KhW4n7Y3s2F51fkLRwWDLEtTVXNqaMY91JAyKDviSF8Y3k",
  "key33": "3cDeZyJ56MkBux5m3PoyGuMJPhbXVA7FDJyzT8d9DUTZ6L8dhENB9ZDozHWbmj1TcodEZU6bhSsQndXJU5gPJ8Gp",
  "key34": "7PE3htPC8wNCMtwiRho8d2HLqEvvzqC4WLpbEgo38fqLsyHGecEd5Vj1Z6Nxpac6SnPcAxptpzm9uHZaX8oRsJX",
  "key35": "Dgypx1uLrC12mrfmDzwmNDRATQeR7e3ic6tfYFJPcxeSZCsfpAXa5821d6sq6TsuVutGkqaMmSjvZvVvRSSUTy6",
  "key36": "63fzhSypg6tbG7ShkXBEH9c8ZMPkhr4X5CZYcX9Mj2W3pt4jxMoTbAJ7zBqjeScYPSdbJ1SSgQA1mkMbw54QL9NU",
  "key37": "46Qqd1Y3w75GQwwwmYU32njmNeyQfz5d2E2UrJtt6Z1JZdQAq4iB2gn9HM9QF72Cxh28hZo8dU9d47kxenCBznCy",
  "key38": "TaTvfXThQMf9bdCWGLBavS5uew1RXiSsRDCQNA9Rb3TPibk5Ww95zCCdBTNbSEj8FqugffbVmHJTSK6zgVpr2zH",
  "key39": "4dVeJ62bXV6NAstLcpEq3JjM7fXBjRW9i4DajNkBWjyuoUC64P42EBuJYc74F8WZwZyvi9E5EqHGikBuHcfYJqAA",
  "key40": "32jf97GXTrkZmBbwWpAm15ACemGkkDyzJgVRNzLDG8aqrEVkSVARxPsekaC9JS6iPzHEFYS85A8UQBTtfEdXR7iU",
  "key41": "DddqaMkNi56zL3CYWfagBCw33uaSD5YBjGsoPGLyUcQxYvf7MMYGmdxcKHHjMrmWggiGy6fMNri2uafoWJsr4fN"
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
