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
    "27iFFSacUxPkxd18o1HzLBZdtzwxA9Ee5qPYhxtodDtc4JAaLp9ZyZqHgM6aYUeiYGKdpNRRXYdqCfuKHKPhurvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnrs9wEPmCceJgsqDsivgep2Th8TrDeapQQ9UGyXtxiSSMboWkRYTyjGzgR52s2jLdZwHwDSuXfbnznBWN6wzVW",
  "key1": "5ZsPziKKysiioeK23xtUEv1Kcy8xL9Y4tosxADKCtZrqrVZDukkC4or9iGLn6tEFazcmk7RfVgTLpcNEewu8vPc4",
  "key2": "5En7bUGaQEPjwXyHc3FoGpbjEfog97RfJvyfSVkL9NRsmEE8yQemfXAJxnJTJifcSst9yftmBefeeWtW1qhmLMmA",
  "key3": "3ApoZU6FwAvrr5cqAnuE1Hm3GVoUnd7QEPzJ7msemqKbTkpqHveXQ7kw3vD1zuKM6AFe8g9yCdebMKsnsnBHpTku",
  "key4": "4A1TKvMvNMJjQeQrUFaryHiHsaD2DfyAhCDtC1edYPn78fZGppvFkqvNuTfoRYCThNCdmTEgHhGLCCtUPTaqpSNs",
  "key5": "2HawPHBxe5VgPoNAKDDdjTWGKrbnB7zRfxvgi2Qy6YwoH6rAvRGCk5GoNjuipsLD9sW9mQdPVq41HCBx4EUjYbv6",
  "key6": "3zgwHoijDyydAPYbohDehoVYb4dGt6xCNdpxBE3gX7ng2gzXUqAH1u4PGEeJJf2tsQy7YNXD5ysY3yVQCYchcxqn",
  "key7": "5s5NK2yn8RgATonBetyJAGtF8ugc4j66dWeAPyU9fYCXDMRMPXEX4X1gr2eACbWzAb4DQbM6MJAVG6tsAwyJ1QfY",
  "key8": "bTBufo7Tpas52XasYgqDyzyxz71UW8gKV32gRY4VaRcjXnzUPT18rFB5sRLy3ByijtKoJaASXfNw91bgRhRmGaj",
  "key9": "2gpW21D2wy6aHbFCP97Ku54GmcJYru2b3dPTFbgbCZgr4ZdhEmYxUDnJY4pnztTHKLyqyJf6bgH5pHRJxkX9HNvC",
  "key10": "5k77SCpsRDytn1ZeFMK14JV5Ya8tmMACLTq5XAfvfA9UYDXTtcm4PyrK6JADqu1LvvkkxaujrQ7vPxxQvBcuDYGN",
  "key11": "3q5UoiB3ZERh9GSVL4vpKCh8HRgLMStKGH2FJxL5ywXUepcuYomZxb422Ewwsa2mXhznRD7ABM8dEVQrqD2RTFv9",
  "key12": "2hDekKqfEzZLLsifcBeLYKaSrfRZFFJKrWxR5pGdDidxaTRTvYzBFkHvUbtxrXmeS9SLhF68SkpJ3TsDTp6d1Xx",
  "key13": "JufJfDeZYJYw5sYx27ZAsQQZM4mjcWPcUnFwn7Ha5AQKusLvmEU1Y7QFiaGwps8mxoYdngsXkqwTCmmGh3ZTuZp",
  "key14": "2k6umBHVhRe8oYbgqJfjhKdyhF7ULERr1Yiw3TrG741RhBsziVwUELMsMSnYX7rSMK2ddYAvJ74TmgVKqJfhiu7L",
  "key15": "42aMZKdraSMDQEu1iV4wzoUSSfmgBZSMUMwW5JagC7JimnTj3dvXFJHqRFJox9fEXrM6PVYHwoi4X5FZG3Tokv7w",
  "key16": "5jLQdKBawszMVYRwqXmtkvoGxRyBpVFXRg64Bw6hDHTTZP5xXwB3AmCRej6Dq7bnmCm8Gvr6PqEtKSMJxfp9TZsy",
  "key17": "38jtzZUxHQjaF8dbEYiEeS4hF53yZhcD6Nav7PCXRwyjk1en3Kx2DtVD8RwioKKpzPf5NhTaUZSUBpHmYMFEuLbm",
  "key18": "4RAnPPFhGBqJ3tfnRQeWj1teBY6A5gWz3zsK76JMRLVdkmZykBic4ieUoW1btNygTktQgH4Ay8TpuqKchCSP9iwo",
  "key19": "5rFkQ9TDwBiGMDXTCw8EmdnzEXHAbbW1TuaRtJWVaQBGqiTUo1GBFJozkR9CW5TauSjLrGBnguchn73rkSk15AgV",
  "key20": "64ceK1WALEvrPQT3nfZ35XEZkYJn7rWFQjLfNtZ5gE1nNoNpy1MnHHvT2qDZoucrHjTZjxSCfdTj1f31zXpFuJz",
  "key21": "3PgecZ6UhmQTm6peFLDgSxPgGhwVfxNYpz8sguJfakaMfGu5aR7QctMY2d5wyhc52fqc2uAUq5BWSXgfXFTgZbmk",
  "key22": "38j1EFu3wbHt7S5jyJFRdkAF6ddJEi4h8rZ9G931p164FnEKp85yFEGbzUNMtw1V9e6jU2C7SrZCy163Kj5x5aqq",
  "key23": "1zwB9fa1HFjqQCF49QP9bG77cyvUs5wb1x9DsULonYBQSfYJy5ZZmzs9RiA3zWUqsitZmY35WTjyoNoh3feydbx",
  "key24": "o1icoWDeHej2khthAxJjdtdHD6NUE7KMcB3ccx3XLTh3qsvUSfWChoSyBNYRZFqgBrA5Ki5xE6QNgqmn2gP1Ko1",
  "key25": "3VukisiNsvAhs8MXeV5YWasU1u2mECvAYnAcWTzgmj9iVjAH2qYcCBiUzSNgnfukG3THiuQVwpchsSk36uLBh6bj",
  "key26": "2hfTNjD3D3cMHubUW1HiBBuYxWsg7qLMujdekzJiiuAX4cS93Ea9MEgPFkxwjBNUiBNW724oZRvNgw4gwcwzqCfX",
  "key27": "5djxtVtwxDh8pH8EqiGyfjdAVwW92yh3hcQfsHv8ZcVAFEFLGMEVapkrEr53nUENStnucQVg1181SkGSu2szzHrx",
  "key28": "4Eqmw3cifo75arsdLcSxHc2eCiB67mu3DLw3HK1uuiwSacs4S3XXRp28eD4sujdGQyYPNVpTVsd5SakwPqnq57nC",
  "key29": "3SZNEmPq589fKZxm1wPxBqhVzjRUZ9eRrqKH9RoVZtQyxVEJ6UYpQRXG1DRdr56pYWGU17PQQGkrLEsdmwEkXsFG",
  "key30": "3sYwYzXjZtyok1xQ62DAV4Vp8imiq4PxxsYMMmjAfE3nb6JHQcmYzSxPiVztvY2RAy7pZrRXrJ83xfZLhc4ZBNwi",
  "key31": "3MJ7CdWPkPn7MWo86wg9qnrfoYDvaKQd7dz6ZP2j1Tq3vr7PNb47N4XSef2T6aDhobdgKVvyZDr9Fsn8L2u2voxX",
  "key32": "42RKvf3Ap4jXiWWWZuKMX9jPs4beYdYHbVjgMJvKWzrbNXxCxRWN2X98vHddndeqYA7Z1ZDWYBFtXhVYw8ESwn8t",
  "key33": "5F7uTVhpPScHvvSMRfshUHvPDkFGFyWSXizeW7WTbwwttCFCgP1tbNozxStQJb6F6nvUBYTDLW8wqarKiipdDTcQ",
  "key34": "5EomZvkx58BvEyFgyLWSnwwH3dC5kG9U8LfMED8LMn6iPZ8Wem363Nfxpadu6HLbBG5A4pUDVqaTKSjmfWbgRWeJ",
  "key35": "3TagufsHYQToX3cJAnicB2quQpi2hUsNRNj97dQtwTCxqMQhbmkcKXjg2tdSUuXKAXpaUkKMgyWQ8oKnuQ5DPXYJ",
  "key36": "LrGg3aaJvNeGGD1Nvz3F9vgPKE8g9i25JounAxfkk2WWdMBh98KiHEi8QXFmrAPRDUMaEtuJwhXo4RBwVr2qVRV",
  "key37": "4sWUBhoxXfbVC4z7n4Gkm2pion4YG441J2yT7fbWnTHykXRkSsXeDvFT4DxYEJTm5yb1QJiqNVjLcnPhn2FFFFUL",
  "key38": "3BnKssfbyTycJhXsY38EpqJZ4WL7F4hBickv5dWrzYZeY3UVFXbmxJSv2GaFoBMDNbUMibLR2cVTA877TFvpQbNT",
  "key39": "62xFszxfAi4rKv3smVEUH1P6EwTeXKxJ39chbhA2MZbPs89y8gJKwHYn7szgydAiH417ZaMw2Xx31wMLmk1cRNZa"
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
