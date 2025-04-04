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
    "2iKSmHYELUzWKFbdcRE43C4T5G6A2NdxPqxAvdUtywNn4XXg8aNCEPvjz6Jnqq8fh1FrG6gmxfs86gP1VzWuCTxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2GTVHz8rBT6F9YP3LxKSZCKhsJ5du9AfAGaTrRGSnvdaTWThLpVHhzhdhcUomr4ouRSib9QaW1p2WGNAmL1vYR",
  "key1": "4WvBkJMfUHPAmSaYWB11XPQZ8WAndfhZPQkCNPNYaqcMRLmYoZvpLscFbSAWW3TyHst5YhfGi69xxaGpeCdgTCsC",
  "key2": "5KjhGNaPw3B1uiX63zv895KZN3CgfqmjPiNm2fWzUj98Zsb7gU2GbbMLmRpzWqiVw3TKrGu268wXq9qgTKbkJ28o",
  "key3": "2rLSC9h7MgkDScthmjh2JeppQNVKZn7df11YFY5LDgDKFwq7NsFUmCzmKi5LzurE9cVKWnLNmeNkmEvLCYa37A2N",
  "key4": "66EMePHGhSgU5DQQgYiiGkmxneMCWX9iy3yW6HbG12xLsHvytfMSVT3wdtSBHBD9nCL8eiTyM2E7TdGuSnhiAi1G",
  "key5": "3xFseBqqYSeAVgdaDrgdMtUPtycLrK6jdCnqGicHyyxjcyv9x2ckDCV2rK37RTHMHanKeLdzwryCTYTwyXEBzP34",
  "key6": "5JEfD3yQnqXUNPLcZL9FYwL4UQgMZAYjzRAmd4vrNd9wuuuuzr9NSUwX9EeajPt3Y1Y9FqFi69PcWRQcANXpXhM9",
  "key7": "kGbhupPZgo95ZHp1tSAAhUimhfqnGBJuahR7oaWt41uTHDdQb1DYAA8w31kqWSrMLgD82Cws8cHVLtPVWzRWxqS",
  "key8": "3EogWEpo1QhAe4gJpJ4BiiUpc86pNvVbGURMKtzZTPzvXiRovmyLJVXUM49XD3vySB48c8BL9fLNtcPX9iaok5AB",
  "key9": "4TM5CBQHYjgRZjPh1EHrREyTLtsrsNSBScf9f3X5C3dfHo18K9unkQiV2vuBBvqqt8LW6GSRVg6dVyxNJEpcCSQL",
  "key10": "2kq5bB5x18jLuh5MK4t846SzTfYGQZeis4RpUhaAZiHAiTUmEq4xHpFZFzuyUu36GJofovbCxuNyMLNzTLKrUuhN",
  "key11": "42LXJUAEWDvj6tpFdKEGRrJta4XTvbSrxCMmuEsj8YQK2gvbdBZVVbKrxHnSseeJpNV3kWT2HBvWtLxF9whJiFER",
  "key12": "2m4odjjfo4RKwmwC9MbRp8vXi1gQh6YworiREF5ksyEkGBBMJiBuJ3w4oBTWNRketjggB9H797cidGXUDWpW3Rfz",
  "key13": "zwD4sovt8tZN8mALWpYthZSFkyR4WqGf7GQJyAByqFqCoknTdRpE5BB9BpGFbmAf7FzPWgi7TgP9e7JZmSby62v",
  "key14": "3qdwuAx2BB44L5mfa4cG5QHtvGK5GUC2RkciuohcZXCNrnPu4G8UnPJG9XABTn4JiSnxX7JV84WfGHoQYj33KrZS",
  "key15": "3CrKjQfq6XU6RQs2cgbaRe341Ei53ZhCmZ2dYRytcNe4e7nthkLJwij6kvqrLUeuPRLHUVMccHLhodPzpCntUcZT",
  "key16": "2YeS9u7UaX85MKruTXNF5o5QanbvgKm2cWtjtRfhQvHoTkyTGuBFTzhAbH4vYUWm5FbyCKUwUea8wryN8CLr97bj",
  "key17": "58vsy2VcjMCtaG4ZXU2zMui18mbs75oM6gFXSz5bQSDaaA6cbUziP8EDHAdrVq1DCiec1CwkQZJDvbTkkThrRyX9",
  "key18": "3WPq1d5hL8qeWpnbmhpEjm5ZBc2cstrijiRLNRo3sncKYLNminivhPxevXLiZATEjcxTgZodia8fZ4D387SWYitx",
  "key19": "5rgxe6vaSKU9ezEamMhdXyiaqp3MKXv8RoPme5Qvf1Fz9mMD9Bhs4Hd2uvNybft8frY2JHVqSBLHoev3tJVppyTZ",
  "key20": "4ixDrQgZvHQNYK6Y4F3Jgu2UsGkduUP5wvyQXerZkMYTVtrYwpnTzMGYiZZmwfzSZL7dcPzqyoSVHywuhTtVsDFD",
  "key21": "2zCzMn6iKTDn5biDQfNs6yk72BmcjbG4YLA9UMqYNYx8NbjUKMrPKDAMcbNHzHLvUqKf7XtaCxUu475SRX8VaRY1",
  "key22": "UsY9vHAqvebjyUR4KKsvVFyVsJf2oWZ2j7N5iSoSiQz2XiRFtdiizGoUQonRVsiw4vzFmuDubzDRVUkMyxPicNR",
  "key23": "4yMLH79WNgUnEoF1ZDqieiSoEKFKsEus1G1FemtfDZ1hrqVsrDYVNKyUTX92nrTrEPFN84v6yBFWWFydDWqosb4g",
  "key24": "2P1znP26brHuuHoxDve2DeHHaHnTwpmAmLZHaypRvHEPm4yDCWEoM78AjvDdsJX9TNyqdNiVztSBT5gMDQsRuGCd",
  "key25": "5NWhfC8UBMykuh45nGaCbyUsB3ASoH5PpXpMRRXqU9uFLwYJJRZNi8SzZQrqpUfUqXrYNrYy29GdJ4YKqtdgx7eu",
  "key26": "2w6Mg2yAVzpEjZ5sBLAbdZtCcnhWXNy9NFVYzMZbx3QqbGUQDX48WPcQRxcLArQVJpcMAfK57eVPZM6Lr2fSnqtT",
  "key27": "2qw9uVTvRyibEE2beQiLhaZycS6YJqo3xKLpsATa1Xa9dBLAbk5qNx2AFtJ4ht3BxSCEX5gWF6V5bRJ4kEceDfLs",
  "key28": "2c9Nx1TyNK8uyemkyWBjTNtH8VK46J8WjmhGekmbyNkKFNoZteY5iSa2j73823U3faM8mYRsUBaaNKt2uDZdfdEQ",
  "key29": "4EVRKwq374ZGQdXDwmzm2i4WbYE3HZLRPjXnnnAD5fLoqcGzJriMA1i9dP6dUaU3bhrDqcnuVvbKshBqJ4Aq4Dxp",
  "key30": "3f6ssGhRD4kdaoe6jnimM3qGemrpmExZPre4EPf8SHymkkz1PvLYcFQf477nyAmUf54a5Sdw42AaVGctdrRjCUK5",
  "key31": "2dDCoYtQtTwh2qWMVM9D8uyTmgrFRjWxGSX49CDmi3zrQDKyckvosoEb1YKH9Z74mdFzwb1FNxhYRsAprNLoT98V",
  "key32": "CXC1Z7u1vtxFFkDBjbwt4VXsnHrYBy24fWEcuENb1NQRcFmEEinjbFE1mNpkhjZ6gPrftreAoo5wSZx1rAL2W8P"
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
