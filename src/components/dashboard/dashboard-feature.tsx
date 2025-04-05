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
    "42szraudkTWL9iV6Jrp7PE9DZakrYJJKuSgkv3UqbdnnQND8BtoCvjqBu8c8xHyGA2chvUMgk6CnxntKDxi9NmNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohBwgvGEfnbgHdLJ4mcBqvkkitWccriUwhNEXsbv2a9J2q6F827SR2k62UVSB6kJQKP6YUwotWp8Px1J3kHWnQE",
  "key1": "2dZMt7UjMnd9U88pkfkd4Zy7UMg5L6bQYoGsCM9TtqjqToQkM3DeCZdrDkVaPVfPEiYxF6oGz9kovLJPyWQoFqf3",
  "key2": "67hzYMLvWXWGuYE5kJDTQCsAXRsLPzaeME88nu8tiw8yoDNKFc575s3kLLnUBDDB2fcc3ALovuV7wEeipNNxn26N",
  "key3": "sfgV8YXGv7LVk6tWi9cZFtDNs8tMEPs5Jkw4wZyZG7K6v5GSf7X7G39yD8nFojxzfZBpgCjX5FWMdsQnUkMvKzY",
  "key4": "4HLeZ4Y4XUbLEonD7bhZH2G7vat3Htdr55VPmrMpndTo2mvdYvDoHj6DnLkPKPzLxUSQpsYNMw8hrNCNPv1zuz2",
  "key5": "2stY2X9pBFmCPoKyfk5S88uanZr1B7YuYLcNqqomxKmq4UjKehFcbL1RQKUdWnabeRnbgKSZtSWmmz1yrrYtkVb",
  "key6": "4Jkw8K4t8BrBLNq28fCWSB1b7TmcG7MsVCNVnu8F3Urv3FzkLTomYcTXoEKb9dN2m1NFcXKgRCbzzkG3VtzXPmaW",
  "key7": "MXSm3jBu52ZtPmDZB9g2FPhan4dJbik69dT5fMXUhNc7HnWbpFpjY2w6gAmtFtBXrvpbYiQK3SkgGoQR72nEZQa",
  "key8": "3EXBpZzrT8JrPgeCeMQgxannmTRHQV8xJEdaU8wR3k1bDxGCowDtNzBkMqwa1hnzSTUgcNpnTW9hPqaoXzTcDcPa",
  "key9": "3eaMCj4PAHxLvEisSXLHzZyAxHAMR7eCKXLy58N1a11JaQS6rJv32ZHZe84LsWbZ5tTvwhdE5Krkjb2Wrb6drfGx",
  "key10": "xbP8KXLmyRLvGccAeUJ32BQw2MRbVsbzyDjKLyPeX7jAN4MknuFGhzv8MEczTTGDwg9WqBbho99rhrMqJmZTydw",
  "key11": "5C6NpG6GL7N5rkXB29XeTMPncaLVTn5wTiQgG2WBkp3DocWs36MPjk99GQVehnKJhD8PViT4rtxisAmy8yvRRZZh",
  "key12": "HoQD5PjvpXuXSMJ6CQED2BxEHbTHsteGFxXdNe8qKo3YC9aUus6ow8dWBip5Y5845nGrqsQN641azaUQb441SxV",
  "key13": "2iKVPD5dxNuDbK3kUaDZRWLqFLW5E6BtvSWGWEhsXKDi3nLV9ZuxtxdT6HXHuTLL1EcY89Sx1B7npTRySrdMLTpS",
  "key14": "4kS3XYyJCF3fZH1dvoaCFQocAgndmgWn5soFyxWgtWkHvKMrBhKhPQCMsUmSDyVGRyvhsqh2ZQFAx76h826p4Kw8",
  "key15": "2a3RCjuEKuEudY6me4vRku7DPa74Ca4ejPV3se75MYRxn4grQWWQAPFYoUDPAVd3ciTtHt7ve8iMyHgBEyBWHhei",
  "key16": "DRbmhbnCb7rQhpSJLZ8o41W2jmj6cUA1A7XENn15KdvCwqhLsyeuZnNKBGepj76bt8paJDNm3G86CvFdjWDZGNB",
  "key17": "5DJTnyg27Vh7YeFXuhfUp2jJwTTXPYLdimMVSmweNK5Nwpdv6dYjPCG4YZxb9PMUuhmJjNUcbFdvCCEHf3ACLHvn",
  "key18": "6rcw41BNd1u9rM4XBs3Bg3K1RPALaJHNnrALK3nYXHx23nveLnkC1nuJnoASRR4oi1wVXmfWjxBn6JWQdufc8hC",
  "key19": "2bhiddzeybNBRrmMcSR4T3GTdZhbzBygVmwXvE6SvSSBu7FgA131chWazMBA12FPWcDp1vWmuxtJjw8zHmjUijgA",
  "key20": "3ChkfKgb7QZPr8ZmXpinhuRqTgNPm4NrGwYCu8pXpAqtUnoPtR3P4zwEFMZ3SPBV8YC5X9cnHABJ1CTJpT9DCU26",
  "key21": "4BqTBQLEdjL3S2ukLCrEUiqWJU2pBZ6Y6NUKjYejPRFJcPMJ8U9h3WsVwT6HNQKGaswmAQA6rhjqEua3SQYn9BXD",
  "key22": "2iiWq1LfFXy7YrvKx6uMi5x1MYXbdmFQVcobug9dhnvQZj2VAoiWJpmpjqzVabh1MyfgAgo1SxxRir4UN5GD39ie",
  "key23": "2teaaGNSQhdp86Mm2MMDpgtWsfD2FAWcWbszYdEDcbchedgPSEPcy2PpaPnMnarDan6r5FhMFEbby4P6rHw77tBV",
  "key24": "4Z5aLg8ckmFJuEuVB18VF8mXqWbLEaCnKyhdic4HqPBaLiKWJNdxHuFfzv8qjbVhfSq11DXiAcZDCufHdpyhz3Ni",
  "key25": "Xc17gbcJCNE5MrkawiA2hw2Pn7XcqsQxTfv3KGhHfch7dWdYEa7cSudp19TLUDZtdZTThdjoEcWout3etCsHuCP",
  "key26": "2Tm8Fj6wkHUdcmtQsbcbuveLpJeSQ1LnriTbdzT9ZZabyNdGr6b3XN5NSGXNTVJkMe453M9b4G7KNN7KSb6xAUcH",
  "key27": "47AqGV4UTuTz6WWBwBr2EG1P98excEfuZccdgoc3qafQjxKzrs8QmahvhqHR2kUE3BMbPPpeT6dqskDWy7cRCNPj",
  "key28": "5EZggHY41Z9vPnX4BNPvh4vXUh9TL4xcKM9dmbU7gyzde1iNF3rBLcMNZFiEYU3VA6YqQdiJucs2P9n1gJYQu4fJ",
  "key29": "2MgMwefwgxhnLBdnxCVHffDRM7wsSevJ8zSbi8VHsqTKN23ibZYhfDQELqLb6b7rBoauYS2VGkXF3pRzpZUtG92X",
  "key30": "2QzYFUzTAzipLV6Ds8ymMy7XiSWrobFEqVdM4yhLXe41BYM6Eaf7kgZJFpJJuEq6ynbBawAKnVZQJjJTBYc3LGAm",
  "key31": "3UGy2ARxfAmFwYjtZ6h2gXKFbNgNmzgU9Z7gSm2rQKNmEHsXajjNgkhnuKxFYCwPDPnvLdSmb5p4jV5Lxz95sxtr",
  "key32": "4QeychSSsiaPxE3QyaG1pnYxwhnSDwjohPsNAYVE45r4wUwg5DRENtewevU6hYZ5SyVXputFT3zhgkp4HqJxfu11",
  "key33": "5TvDVDC3rK87wk97smPB3xdQGHjFXpcCQwqgMZESAd2C3YA6xRqaZY31PW644nFaaVKCFm9tGEzf78LjsHjqTFQA",
  "key34": "3gZwiVHyf1GVy2Tj4nrAgANsHwtE2GTuV1zwJskGijnFfqfys8n1LcBryedw7FAZ8wxiepEmYK3GNZk91UWeizUm",
  "key35": "keibatPJJE8Q3PY4j9z6yTdRkwtXrE2D4wt1kk7PCDUvBqKFpRWVZDNdFmnPRspZTzUc3ipGRVVMYSuiVt8u68x",
  "key36": "4qrvzoEfdMGBP2tvcbp8zQ3Fj1ogBJrat2xmdK3gq1pwcD25A5BHeykNbfJ9bLBW1YRVFqMnwAf7KZQ2XnBc6BFm",
  "key37": "2QXg3og6TefGm1sJSiUikoTe2zXnspx41seSHCCBThLUy1qhrPZNqih4LS5KjYWhnMkrvZsvFLUcZmBFVVAthBmp",
  "key38": "3Gs9aAvKTbHeiADRNfqJYme7HisKUxKnLijyXWEn7NxKfbZMaKXmhnWqJrGy7SDVJNuqTRW6zxUzwgrA9fdC7mxg",
  "key39": "Uhyd6sBVNf4EtDtpqcDYZcdMwX8KUSpwWiZZWChmZ6TZpP33TXHjpL3acVABaksu2EW49rXW7R9bCfAPLGrGY6L",
  "key40": "3ZxcmgkdSznru9wMrhKPVxiNR8VSKNbLfPbjNPVARrGN8BJCoedVoBA9hYHY5s1H6JRrte55VZUwW35oydK4dv2x"
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
