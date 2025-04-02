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
    "3EVpJJgycWKbUpFcCLwcrBV95WftD2SyqEi6c2eMCoa5R2PpHvpzLiRF5U2G3NSxPyrX5jrwxitViDxZDm9wGZRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Npdmb5nvAwK1b1mBm3JSt7xdtt9vL2W3Jt53tc2egaJLw4xjDuiCrAfYdrL9RNxoGhrdNkhPdo43WTV27qUdMLD",
  "key1": "55mha8kcxjKbC8jxTHczj91PTpJ8KWxcNhSyN2qurDSVNhYHuMsf4WsfwA1BmLjEkhUJNuQeo9qgw4HJoViGjnes",
  "key2": "3XdXRM6vcfDMcPVoyyzFNaeRSVv1wu8DpAZYULuLpg431QdNeRQBsYACTjDss8LkjaY1QTMsZWCxKxBNC1jX3obP",
  "key3": "5UEB3ZcxUdGsLjMraiGjdkExnvYxojTrCc8z7WdWdv4MJ2jptvwLFqttpXfuJBCXdwuRaLdgofDX8TdJjStk5eo2",
  "key4": "kmhvz5mMhMa5M1uh9VxgchXRmMoVJdBsKWJh94uKW2155MKTDDYbU7HnVwD3LDgNEc1t9NWa2GeZc6UBfRoHVds",
  "key5": "5DCn3TK6QT2nPvnLJQCcv3BXELfxto2ZSu7ia1qhErGKJvNMVHA23enh9NG9HPsE5UcaMXuKoBVYhkWDrNSPSjGi",
  "key6": "4bJshmgNCCnE2pTETZKoQXUY4ULcsgZDwWnigp9LWrtzvEQPmEFmYVLYnr6PyDrP4uuDbWK3XkamaK1XBSLFfee3",
  "key7": "5ihNDrdHdvgZvoYhaWEp4gV79NPbkG2XLJg4wpykrz4w5p43hPXC8PTHEtoqJZ4weZN6iE6JqHL4TRY3nb7NYNfm",
  "key8": "2kMU6CLVRAM2WvEuxxgRjKocLVSS17eLp4bMpvUU3a3kTDrYcx4Tg3fWn4z8r9bXMB1jYW3b6TkBXtA715NwBrok",
  "key9": "3rVR85u8sGFsTDxPLjFD1EDZprDueGwAuHr2Ssx8Cv3NwdzwCSqZrk8ZeRSvpmWSFayMvCSFxrtMn5EmhEa7zMnP",
  "key10": "5JUD5ibLgn5B3L96pemE7FnHrcdBbNoHL97pJbGdz3R2RPAdCnr1u6aeWaQW347rPxqKeWMe417mBW2sg44XgVu8",
  "key11": "5DDLA9kQL2UEjTj1ZpqqKktBzyWYRuFPaL4SjCsnnbzBgUesFddmuZftF6fLN2jz3hyMgormHp1wgEG5SmJgC5H2",
  "key12": "4Fzia97kCbyrsCHMq1GVXKrTBu4fmXpjiDzTDeXxBDHTYmhG22kh6CRiYr8AXLCX6VAqxLu9PZa4WqWQWpFjBW8r",
  "key13": "9LUW6nCbzRJowL8GVGxzFGm1uCEuKmYr3mtJPv2jiN34Lyr2gw9EMcfVX6mToGQKDd5GWexJKWc8XLwyeDv7ppt",
  "key14": "45mr5WzssyPTVvvn6fDf7HpG5nZbFU58YdY4dwKS7ApXzBsdFzPJgx7qzrZydnGn7ok1c9FoEAjrqVXLsazVdJ2R",
  "key15": "3UE1RCm414qAsKGn6YcLWxy37B3rbFXSm9kgokoCdz9vTkX1Ci7RGPDdumNkW5Q2axNjTmN5GXhXNgH1RzQ3Sxee",
  "key16": "fVtaVd14hvUJ4JMS3V3cDDa3g8MDgwicUbXMafe7SRnBS81SnUuDMCWWr77rdutVEffykWusPsLXAqvWgQtYFn2",
  "key17": "2Pz3yfKdJdPHhVxXkVfbrDH5XbN7XPhvr4mUKKAyx3zYCcHdP4CFxCn15EgUSzMeK4cJFkrfKFt6JsZ1J5QVVXhw",
  "key18": "8ETaUKchrxfTj7FLYGYqVgqxo4avWMvnmDpcMJyBe3S4gAzgL4ss1nwEcQ6sfRJLK85xipGHUu1oYYXaU44Lafy",
  "key19": "2DNGmRgthUyRB4w2xbet3pDTvkJeCcM76aAYuUFVA2YjmNzziWmfFkrAUXSAG98x2i8KdeqHsMaHp7oMMe9dZWF5",
  "key20": "fA6mj3RVppC5Wo7xfMkc6oVfeFkduCec2WwyMCrRYgM3d4K174oAwQ68rJU4WuDHpSPiZ6RSoWjbpYYHgY6MoYY",
  "key21": "ZufJp5Tr4KbmiLMGck77sabR3s6F4my7b9TwTUrQtzUsCe4C4tHAQePtu5nZi67KxwCwfEJDptnmGkBXKvXJGaA",
  "key22": "RGDhp8nYTZiKnEVW5V7AjwvRJq1wkxm9HpnjCyidw4sYvkxzfvmY8pXZAzJSSPXuxcbZvJACpuaqDJWLWKtrvgm",
  "key23": "5MxhSRC3fwCHoTkXdonUaUU9XmtpZQhufmn8p357uh1VDZZpLXGPFSbmjMPFQUFFVw1cXamfQY57uUwrkyedYzFn",
  "key24": "2ur974nyjYvWQbpYpgntyNmnm3HrqGt7fgtXXDM7fPe95Qk8kxWKw2ehFzKwbuknBYE9BixSgwHiuk8pjZRFJFdQ",
  "key25": "Y9sSMQhr2PadCMHPZySQB46RMp8s9CP7197MrPCQRRU15UAhz3mTy1jFr4s2L3X53Z4PY2ZoyNyZbQrpb86k4K9",
  "key26": "2fhdZX9FKAWjV6ZjENz5bNTysWSmWmHETzYQskpicuW2h5jj4g5oSy1iaCgaeqtWxSyy3C95W2GnycPGB1t8bVXy",
  "key27": "3JYRkE69LJYek112V3kSprYYNeXVUa5rgcdceQ7rqfeFzHz9wU4CeytoHWnSbuRGD93BvWD2awPYTyor4jrgGyp2",
  "key28": "3yujVo94wLjaML78KTFa2HoZjYmsbtkJuwpRZSoFJtnbM9diGfZYZv6KnLt6TUkAeXThT68BnK63DrbUg8YydsM9",
  "key29": "3MEKvGHkzxBLMS5gxuckZEQmmeLmiTM7VngmP7id522ejd8pa6GFJMvsCZgCZLwSMgijijaEu3PJybcX5ZNdy95G",
  "key30": "52MSWTiRkZjTpFpXKPHQHLGveUG2WRMBZtWYBDYfUzCtbvArozJbx5KLyQAPyfWVymKkcxHy3se12pvZ6KNp8k5r",
  "key31": "582VMdTXURGj81ka52Bs99kmkdXqC8CL2hW7NS6pkuJkHFQVGkmakemJweoKG8cncFmGZGjSEr3ZAyfsfnnn9jft"
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
