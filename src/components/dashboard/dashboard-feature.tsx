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
    "2tsjHDWUEfduuRvR6pHGWXfyuryiz9HdFBgPsBz62oA1MTSfX6LjzrFZSMuhNE8nj1BK9KWkzFxsBjMTYz3CsFJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xd8riSGajVV7Hr2MtS9d7SdzfBrUusbYyFpbbgJv5YZos5JmPJQcuuTXBguc18S2skPTQKGzr2mJMUfQcqX2KJ9",
  "key1": "zW9ZLLJ61VC3FWMnjNojsH7Sh5z7hYbXrPprur99q7iX1AG9xSem4esethJK289tVF5GAkvDBXDFzV9UEhAAg5S",
  "key2": "2DV5vgcXQu14fzqHgYhqADq4EABpjQuf7HnTr7snEx3rs6YKEbpFjaQvxv9sCXAUrz3Qy2YMKyWDhn7A1WYiEgHY",
  "key3": "3SPQwjKG33MsrGsdxLN8AVX3ZcdrnfzAugJz5QET1WihEVAPKUiHrBZV67tTRLdwJ9AZeE7e4EkXR7DEUibRpDpT",
  "key4": "66vGUykPSZcPj4E5b3PXgCffXJDgLaM81dcorw177b9E4YmbupDdqe4tBRXukWwsNWrXkjb6d5LwHCtZuJQQtgaS",
  "key5": "YucNa9yd7whGGxa2VcASbzTtuJJ81f6huup1j1aBsbfYKzBHitovaFzZ54UphonH18cPw4QdD2Vrf46ShiBJiz8",
  "key6": "5yGKbgRtAe6wnjZNQK6eD3T8capRToUtfTerRoLh6oncKapBijKdWBeQjrEM29ESBorg5PW5TmbLYz4ohZxZcegD",
  "key7": "2fpQ7gVZq5xoNcsp1kQ6gaA1pJECpgHyoKKw6P2HMa9FbRQYsd5n9xKHZagCZDdjQzTDREwU3ruNz6npG7GeT3r8",
  "key8": "2Yr944L99J8pHVGrLWEmSpnHdRCiG2XqUWb8Xq1WyNpuqYYHhxYmWRG3HFTFb8UXmYXztGzxoopk3YCjcTqC1S5i",
  "key9": "3LpJxsRp7Zbm9QkoovCAdAbHn3cKtMp86faxgUWsdGDzGjPJohZ2bLmBefzncZsC7RCcrfZJpzsMhFEcTvJ1BjNv",
  "key10": "3Kn97KbnTtePN1J1EDiKaAqojDhYXQjubwvaJbYbb3LpJEydze7jx81LvfoSSRBS72PwAp7BYE4Ljo1bNF622zxE",
  "key11": "4fCHjGiqSRnbcPAeWP1WaasYSqhsJHia6e9XmBJd5PYTfxKPA7VP1A3NogHcWr2RupfKFFMSsptXGU9HqaoPBWkC",
  "key12": "2trxn7j7v9kktEnDdQFg19ugtPLwmXCXAWvPS8tnbr2KGmhujXD5QJ9zu6pKFzFvQ3vGEcLBv7opKaLaJBZmtCHE",
  "key13": "uTNvbkZLYanhAx14Yn7BD8J7y38Go1GRXUquGm1ZF56rnBEahNcF46h64kkzKGZ5qfpxrwpTL7LcC31SJawbYft",
  "key14": "335QCX6xN3x3wnebJYoJCuR72pVb1dEgbYvyWuQhLvqAbpXvvhUiqRNcmgjRXDEPqKgkqUh2fnopBMMXRCvyk92R",
  "key15": "39GJ4ti4cFQFLxnVxkQ19WsjMJzwkgWTzXebTa6vfvSgzLfS5oyYnesf7ztPXKv3GzspKsJqXziUHRMjyX68usuk",
  "key16": "3syD1DbQa9dvsi2f2J8jJGDaLbMQyZwXFSqF3xthBAE3LdQWqynGR9pGJbzF9xNKuJoJijXqyuBNUsvSJxFaWhyr",
  "key17": "5tWJxpjQrGyd6Eqf6GPuKKcBXnSgV4N2c6DmFiRPVBhr9f5kNYZMKmJoDEUcfdMPGRMgjCScxAvfvkuPJnNvR1n9",
  "key18": "5NkJYFpUBw2jWyThaNLNGPGfrbo2XjkN6NJ7HWBQuCT3zU9NbCNBLZm4f1ae7EF89uuBvqgRdmxMjKW4cKaKZ74q",
  "key19": "3wd1vUwXqrM4aok8vGxnR91wW2oSHKKHv7pcsixQyo84qE8KQzgiQ5vd3iH8NeJhwLogbNEpzzuMRCb9LSX9VPrx",
  "key20": "59nJKe21gSBRqEEQv1EWDvzwPGGg91ZB2egFTNnjUKCuq9FJca4VsVRbgaUkcpneqjRfzKd8wLQMxgLRrGbNBujA",
  "key21": "2ngmJyia9GNrZLRFLqSNxkNz8WtfoCbsaHzueYoUQyicubthiJJtpvK3o4uR7uBm8MBKpxTkNtWVgZB5hGhnc3Cy",
  "key22": "2RAg18gJXGiHepqWtMATgngp6wPUaam4pQ7gsHARJHwYy4iAiUiAJHPMLdsJivLjJTVterzbKp9CGD5VUtuGDQCw",
  "key23": "622for7Ya8KzQcEH1aP8oA1UCMBQeA8WyB88Qtab2RYgoPPdu7KoZKGFcWVBkGy7wJRi3fa6Zw8SCwwgyzmBagLB",
  "key24": "5AzW4U3u7g5S2s57nL1Ui4F4QjuYqFfonbLRj5gQFhzLhuFwVkHRZfoDwSTK2vUv9So61k6i3o9UZw8vcCowoYG3",
  "key25": "3hwvMURXBY6oqZAYmsu8nNVcRUwk11u62dshF2YLtoDVBgys1s2B85tH8TgyBYm12BPLQNFLh4dixA9pcxdpqPFB",
  "key26": "62GfvrexKWE8GRvyVpY2fPkq52KnNWW34tNcN9WWsrx6S9DtBcoXUX7yJNHMB3Hb6VdEPXyV36yo9jtgbHQgjT1c",
  "key27": "3d9T44iBeDr8DzzJBRzBF2TxKEb3ami6aB1Z1WQfNgLaQpC2amvEhejUXX936jNyiFcUxfmc7Arvx6TxJmCjcVwR",
  "key28": "3M1t6ExeVYovjAzrtd69C4KRVR2RWRb4XZ8VKtXngtUeYNZYrUGwLY37Qzyb79cTE95JWw5Q4VpNumLvpNwkTmRi",
  "key29": "2S7JsZ3Mca1pTdCuHjN54vrZPPxmdmhmNv99DBYTHGJPWAaoy4e65m1ZjjeB41zWgs4rLx5XvQD5SPxwrCHa4Dva",
  "key30": "3ZoQaCL5JJiy6RKYmu68ybVWt8ksu7yzjmZzsdtwhkYxnhjyDdhyq9UnBkNegrstdXaDWv5mLfUEvXMCYFoMHkab",
  "key31": "49SStTUcxcLM2BtsFEupb1EirhkikSMbcv7MMB86Ci1FrYPmh4jv7S93dvDNEkRJComPKMBHVrDa5QDrtqRsztyh",
  "key32": "2d3j78gsYk5LhXsfXnAURrzJszS6zqMtASWSuRRZT8RPjHngxgv3k3JuRDQHGRqgmPtB5BNwsCUYXmN24A1QwZe",
  "key33": "2yDfxNfvnEffWKvLtYH8dSvfMbjDkBbtL5aLLVh48nMjZg6VaPiz8zGxWicM7wB7WTj1pKhVH2Mi7korn8q8gue2",
  "key34": "4gRQrTTV13KTWoSia5Jqb5HpexsdJHcW1awYoozWUwubw3F4nWTRUVU5jURVnA8b5oH3eZA9zbfKe7WFZvoeUyfG",
  "key35": "XnV14AyxzPF23FLwvSUSW1qZmxisKXWn2QRfBCPhREEfzV9YNvBS4XxyVEsvkcxgEYtHSo1hTDduYFtJaApo1Fc",
  "key36": "4ovai2xtxS1qT2ymUUkNE5vmQEtZPNj1RSGH3LrLx6JeGisBKRT6HUSJupammo3tkB4Tbb7wiBJcpCJ4sHn8bT3Q",
  "key37": "4sMRcHL4rtk2sN37ABZb3s6QuxC942KKB2cDJZweKamVBhLNnYu9eLW1xLXFmN2sxMLiHb1GKzyGGGhxYnoGzTuS",
  "key38": "2yjQ28FhwQWkkdiRidaBdZ4HDC1mWmx5RBfF1MJhr6XpiNw4qAG6yTsU1SBaFHVytkA5eGDYKVdFnzPVZWA5stE7"
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
