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
    "5QD8435oCWEEkrmB6Q21RPgxr5xqs1f1G7Gbpnhm64oFjk1MCMuc4otHGYmsjKTaWX5vjmqqUTq4ErM2SsCb52aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpSxw3Ph5rkGdKBSQiDayc639KR9QqJsmMc3gQah7Scv9SKtGik3rh4sNm3qhrxasHMG64mD5zouFxLv9rLgmXR",
  "key1": "58Uj1HPjN3u4vNa3ptaJa2JNehv1Tkn7ougwD1RfwNsWnMeyAqV1eGQCcVszoG4mp6twqcrfddMySjGsqvGtzY4V",
  "key2": "Sajz8AxnQzbYbvYut71nfxhKaetkJC6puuJEDYpGUdPocQuKYTKDA9aC287wZguMoiZhBfpdt4k2PdEJqPmiTAh",
  "key3": "hchUeWsncBMJXsJgXdLDgN83VAC16947N6JcThHU4T4XLxbjDh1hEWKxWGu466TYbaxJnt17yxU1NDsi48p23Pe",
  "key4": "4qPWZtWZwqEwd6HSptqYRyRpbyR96xF6cboVbcTj7JXDg4WnCZz2tRtUAtVmWY8ERsXeq3o6KP2EfJVmFx5HMc68",
  "key5": "Qp3g55VeZvzBMegyHW79WZLUpxsasRWGXiSTJNcG9ae4rMhTwzZhWvsqHDsRU7k9kehuJqg3Rzfhxx2iZ5YB1TW",
  "key6": "bbaZSwNaFv861P2L5cuYzwXUD2CcWkXkApsXkm9GUbDSawSRQ9APYt4KBZNuFxy7gANZRd17dH2sZwBZuWDYU7o",
  "key7": "3uMYzDKDgDpx4HvYiUhNHzSC2Vm4neopgVZn2wu2uuEpgVdfXtQRepvq8yrWsiTT89TXWijRdREiLNdrawJ8TNCg",
  "key8": "2Ccts57abGX8XRLKC88oj5gvwoiwvXUYYFjsMx7ANBWodQgqBgmqtaCLeQ3gdpfaVgRQDHRJTifT1xLU9oiAMiW",
  "key9": "5cr69YaUaYfhNAJQpd3uk154GNLqkCgwzcd86y4LEYSZhuTvZR49BbfFufxbg4YG94LU7JvBZNDXwuR46Fz29j6N",
  "key10": "5jt9qS29M4wLFWhnWrGCELGgLsGGrae5ZM44Mo7JygPCrRVfUVC87ke6Zk7qHCFu1j6v9kqKkqTmvhmQ4YSFUUsV",
  "key11": "5vNyaiehQA8QmGP43F7W14paNv7yacxpESVW4Gs1jQ2C9dfbpggEfsRGrf32zswCQvt6rCnig4d9wPbL1VGPbpym",
  "key12": "2oHAeVH51AuVx1EAx5XTNvLqZF7E3hwv3xF25UpSoZArktnzNJUZmyaanMBZdiVt1MU6EE1PUrsSTqNLkvi19nhH",
  "key13": "h545MTCdoBMERdHNhNxqFZfUtZinLVFfhZYkoMs1vQXgpeBi8KXGNAcNJe4EGadHA3UFJ6fnPXFLTANUZB4Dr1y",
  "key14": "2q17coHPMKvhQTrREknmgM5jAttxKfNp5E2z1MYwxgbdeNFYEfmR5YMfXtqwvuDpL1o757BWUBjM5H8d9r8GQi9S",
  "key15": "te42TYnirJu2LsGyhNwnd6ahXSuPj9P3CgEmjDkoQfedakoqtVPX67MnPAx1UMiS6fApi9BvYrzK6a1WX9M1dFu",
  "key16": "2kovXARMrHE8f1waDjHMrqCtKYADXDo26zqdRdRYYQgqS2L1gLM3wW6oTMUQU5bywtALVedXvGGKNhzsCXgA9pw2",
  "key17": "4PVczUisUP3V1tvBVDNCLEAkQSEb4DVGX7abFM1GkyatTk2GSHgRpgH5xX3vbwac9R4aBqiAJYUkf6DHLXXLx5Zu",
  "key18": "3sJXvUkmFS1h49mVzAc2goZedKHDivV3Yr8Yqx1NwxRmo7yNb4WjpVXY7pJMzo3iYN1NraJav1cJvhBmkKaEHcou",
  "key19": "5gZpsxXVkQDwMorubCXEPDaNdsJVBUirGsBavTqpmUQi1BPiZwjiJcjj6cursCTjsuebGgLExnngxitbyZfXxKGt",
  "key20": "2GgrmuV7wSMPu5oMdPphcWmhPEgrHr6E2uvzs5WmfCgMZgvu76HTkQyLX9r75rXYto9YWMdwjsBLCgNcAcXU9io",
  "key21": "3Gx4VMt9agaBS2gH88FdFGY2TWqB1EJN7gogU1FtJbnLQ7zbVxyuJ5bydhFTLZ35pFeKyeNAKbKq6fYZCARCancg",
  "key22": "2XkjFVJNbvg46nNjaVSmoKMno3FS9oSNyuUjb2we1EHoHwGqxYWdvwWCJD3oragm5WTt5bTEBQEbcCsxhd9hktdT",
  "key23": "5uWBMvgMiCnX1mnJAusGSbTJ1HMkdb5RZw1v9RtgKaDKF7YmAkmANT2Kru52SMb6PhUZfPzSwcXQWH6x235XDADH",
  "key24": "zHt2tg3j3CW8sEVZqVCoE5SGiSv7F1RQ4v58M9JqUaK7gsff29S45A4W8vHamDzqwA1pBRYxdPJUnRLckUHrMWt",
  "key25": "5Z6qzpVTe6gE5DnG4kCWi9sHsM96nngtrnhRRHz3zfuUn1d8sBJJV5zEm96R8UQtPddUgc5pWEiLzfdePBqrQ2fW"
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
