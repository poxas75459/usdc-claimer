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
    "6qN9zFMG8eRD2A7bjyiqodx7TPDSoHRm2w3RSfrYGsFNAQ6udcs2qcVYXC5gwE7eHaTwZqwnqMr4PbubrrnZea4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mX5agpgfATFVciSbdQ4ms2A8tT1nSze1kZC9AikvZ4gov6zc13ALyHRqo74GQukNf26PkvwKQCgkMiZCNRzFVu6",
  "key1": "4xNHxr6HPPEBhKXobzyHkmmYkjiUovbCKUyyJGU9yR6d9N6gsx282MprYMEqKpR6UhrHi5Y5S9NAwytynVXmcfQJ",
  "key2": "4AChFe5m7hPB2troZtnstK8JE9z7jHtoY5hEmf9au2WE6p3M3pzcRRU2tq9gmqtDg7Ln7PcHKrVpm2pkPt9sp5nB",
  "key3": "2fTR3MzSaikb9CkG4XE4VeXUs4jSt46Zw3GQhsRmBgoEFndHE2KGFGrmR2qheohQczyjLAThhRmeHzVQdA7zLNdu",
  "key4": "2sMbe9nyvGk1k73UEnmbquKLgfvmn6fgPF9JqNheaCoR7fuZMtEuUjdkp2Xd5oSi3YDiwGn7dCTWz5JqsvpSDeuh",
  "key5": "4YBuwUeryDBBkuxBMosC87Sg5rcP9o5npgtcmPzGk5sVX4foqB94McJ9tatzRNoPfuRLzP6naV4wK5eUzSwYcwbW",
  "key6": "2DvsKbH42w6mqQzSve6d3wtgGk6eSriohHMxTzA9mpMKJCgyxDi9f7hSFwPh8BLhHADDQPRFqVrVPJDR3Hx8QZ9i",
  "key7": "5tYVEVE8XpcGitWtRP1JDbmTcsXGVPNioTr9MTMPJ3aAE73QZEji34NKZgmMW9mpC7DnUmLJ8AbXESgxVtgZsWns",
  "key8": "2n5bMx15ibYHFjLMWvbSgippHBgag4iBa29qjpx8Wh15UKbrCPzZ6NzTh93wY2MAJZv19xp1YvwRe2jMUCQg5Q9X",
  "key9": "2NSjyJdENkdRsSCJxNsXSzmUiR4tDyLDXeMRKxZHkiWjAfky9SGFWqo2FEEQ3wL1HeFDyoZSC2WU7bimdp67z7RU",
  "key10": "192831Ywg9ygX1CHA9yiPr2azmEWgvrMiYGCvgDSgWUmnBo7Qh9juKYgWK45dHejhJF76UypxWys3VHuxcZNGNi",
  "key11": "2RqMtNxwgNJ7JSFP85gDYmTEfaoRx3xvt5veMJWPxKJiPTUG3Y23Qwniu6TZrgo2XNrPoXSNfk7ht2hVeVyWBSrK",
  "key12": "3DZgrEPHBDpRGgCdEh2JJnnctDLQppnDYoaEvMtTdPg69x2nXDmZRboueVBfeyYcAZHKjwtzy49ytrD1tM4fos5E",
  "key13": "4TvU71FiKTBC9uvvSL8afzoEvSytoNv72oQfRbvQMkB9vGmAfcAa6Q5eqQu5UPfERyyY33jiew7mvSKsdLX89UjH",
  "key14": "3kDwnFVFqDzNKbWVZpfxVjGmPNjZ86oDvG5fq7TSJAfKrRLoRVTnXEZ8oD7fPiCnuRaGYU4WXuTd1B1nJ5GFRdAR",
  "key15": "jVfQJ285KWLnAyLWDUNzQb6qRuFAc9rQPUGUNveQ3XcQsQ5JYkXT3WxNCxPrkiTo9JBuPASTjXnF7cDc3ehrgUe",
  "key16": "2foVCq1DxjdU3MnprXnhXfVyxAtLHBkBagKWLVTKDndXKmR3gSCzGhvtp4HtTke35YufNnnDv2hFYAmHoFMHhyNj",
  "key17": "5EySSSVT3q4aVQExjCMh9f1eFUHuwMBPXZ7xRSdFBUeim2VjPkgzxrX7jSJhAvRpwUjBqzNrPrZo49WZtmuMkNG6",
  "key18": "VnA1711348uss5o53QJi1gQqY85f6sufdyFWek77K2hVvrQc9NN7UfXQimkZQQXKAhHRm1Vn1yEqDyshix5re9Y",
  "key19": "3kjhv1gKbDcFTE4GnsKiyM1EEpEYy3fWFg611oU8nZW5CpZb5M1ZwLcnbj2WNTxUwjYdpC8hVoCbpmKKcnXLihAh",
  "key20": "5d426kZvmmuR377UJWE7dsz9Qbd6H47KQb9BiwGMjaWcjUNK6k5y5De3eZJ8DdZEfgGeB74wnSZ2kzeJYLxV3PV5",
  "key21": "4noWWSzU1YFzmtHzCMFwUnw3tVRVLoTCjNZq86Ab7JTkqryixnKdeSJLJgn613zAtKYXUW5hgcKQGY9dhiA2cXcR",
  "key22": "WYkmJ5Qi2eofWoDsWk69wVuqXUFDoauhRnkVcxsTM2xwSwwN87v9GXhELXwMWHR7fT3Dmvuhv6QpbEtzn6pHLMz",
  "key23": "FQ3ikVjm19SHEhCKMyy3KE9KwdiB74G8VCpPzBGbPeWvgndY1yzZphAKAiBCLYTwXHbrediB395Gyeq3RLJptmV",
  "key24": "bQWsivQt52L5Lf9TBrwivBCa7E2eDKX4YFKmE3FcVXEyKZkwGavTCcyxz1xFPgUonZww2s6PmbBCutMi2ZxrZAQ",
  "key25": "4r1ii2VtURQdmY5PVhzJ7hkevGUYJq6WKyFbwSzqdkz5jKf5Ko4AyBxu5CKEN8mgdHCGQhzamSsMC1jXQBb1jwHV",
  "key26": "25iSTw68Kvk5H7M1g478kpYftgLyQwyrAUZqMUkxXFj7wSMTJznDUu6s1FiPUatHnoeBMDi63rEtWUH1D49eDWRK",
  "key27": "wZLZ21oD7BtMBRAW1ZBK376qXSAy9JzMw3NzRcpMbrBGX3xecVB9Ez3XzbqPrB91ccKL2N3jTvcNdXocVD4qocH",
  "key28": "4XgGc1rEybcM2SZ6meNV7baUbYaYNiroukTt9aLA7tRoQusvvppFdSJWcdaJ5Y4eTddwoA2WANS25R6hBUch36wc",
  "key29": "znywkP9wgfBf83Yx4afHxFvWYsR2CmZYj274vB3Sd1RmYC1A5vt6GtBjQtf6aWATcjGfn236UPosHWAru7JkWDP",
  "key30": "5PG4AAWwomRcH9nzbF7RGv1wJcjorV9SGmQ4Mk3FMvkrEi3xgrBcknKn8rSnC3KAhwWEdKJZghesL4RtzWMSkCwE",
  "key31": "cApEiBFShA3rJyBZJQg7TR3gsTYYdZjhkYv5FUafVZ9P5pcasBkLQpYyhUzvjVE14X1aQot611pQPWV9ekteeU9",
  "key32": "22RWbeuj3GoKFDMMWucEsWW7GXNcMmw95bY1hnkZfrmuNdZH8hQPVZnDB5yKskw24LzCBA7JBVy5kptu2kaYkmxM",
  "key33": "52Ta5Kuy7ZZeSyi7M85bMALsAv7xJEmsTGM4hvcn92UG4ExjuNA7A253eo9jdAmWxrh2EfMfgZGbh9k72WimxtHq",
  "key34": "4PzD1p7mHW9awCDtuv4DsyZyZkma7iAoHCGZi3DL8AEqqdmGkGQmzBQwAzAueU8LLMexgQ27hZy4Df96Atbvngnx",
  "key35": "BuSbPDFJigLACgCrVcuzMbnnV16H4nzSC1kHFVDyie8HbyVLqf7ScBCiK6mirNckBtGhx1UivC4PKQvUarFWbnb",
  "key36": "1abGDUd9QLS6Pwtatp4xiVA1kpp66XyK4VSg3YXMPoP565zThhfHd8TFn1agUeWTwZnHzmyN1hjB3h5iPWZu16B",
  "key37": "4EnpuYcKGtz3s89YiX1dAkes8nss2i6gxc3ErKMEr1bmLyaTHivW8Zu9MyfjSDwuePq2ywkPDdNDJBhsaWjpv3X6",
  "key38": "jnh1fUGycbKJJcrR8Xpksw1PufkDREywURyCGkenw9kwjsHuCauY32tTQkDMzRJCuDQDM18HXD56LqLFQqaoCEA",
  "key39": "3WUTaP4vqUJnakS2mNGqiGz22ULnxrukFKYh6B8StYkDWVTrRiWhx4p8dRCJtZGTHVHGMwWGxKaDm5Ka771YiV1i",
  "key40": "4sfpx3WsBgajAd1jhtkTaAEegXmCCrgtygas6HDyixPD5A6MZVVtqicmGXD8cGQxY13PojveU8zk9uXnyPj3H3sJ",
  "key41": "4zcxJNiSxwZR44UJXQ8MBeB6hLMRoe4rGhxEsTHfSyuinZEi9NM5GT38KWtFCtmHQgSxEGaDYWq6JfRVbpdypXSH",
  "key42": "yFtagg122KnFGYmBWMM3dexA73Yaa286BG1w6Gx8gA899B426M5vaA1qQ8YW8GsN1mwsN4Ge5HpwHGeJHnFQnmJ",
  "key43": "34dQgFLrruTG1uvpomEzF8WrmgEXxjE9VKRraLPzgFr9N5eTfkkB2z9NwwgiFYoQ9Mt9utk6LmqV8JttCxuJJEZ",
  "key44": "fyPqvq3rhDi4xKhN92Br9y38MYCywB7y87DirePJWbCFHqk7bfAYUQR4F3jzp1jLW6fXfF3r7AtQf9mSSjt36Nd",
  "key45": "bizSVLJRUkWEAFbsijhzDpDTqxFdm6UuSotUHJYAGA7sQH2j1skWnJMpZSBqbAHqyigyU2ihHdVg7j2FLYyPJun",
  "key46": "mQqCvrchFMvandEzgQDXHLf2TXQKz71Y1Dv8PQAUdhdDvDMN5wgNRDdpiCeyQxer9ec13uJngBiFwwDDNAvoFTy",
  "key47": "4bGBf5h66FKRB5eJw3B5MizB2kuQBXMkTX45TS4d5ajhjxktECLveTQ7NocGk15wSN6fdad8cRkkqVwJzKmJkG4X",
  "key48": "2nPfpTN7hwkie5pAvCqN4qj1yEevsf1hHY8FnmB7eHvur1Ct1A5Wx7NrNmZFS2sucodUzCWCNeNN5xsHoSMpGitX"
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
