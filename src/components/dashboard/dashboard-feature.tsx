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
    "5yRdVqBi4jHYk7nhZ26FsGH8ZFLKBiEkWSox2qGhhU44eJsvQaGd55bSN11FXUCvp77BnLBANNZgepNs4fFuJZ7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SApWkqbg7x8qUqkxHsmgFgfapNqwWBiJw27hqWsVzM1aCDmaL5VXjmYGsV1FgtpNEBhuj7BZMiqVuPzu3RtmVmT",
  "key1": "CzRPNenhMvVSVbzzXMg7H2QDszL5CMCvo2BN1Kpor4JVaqJoCfdTHnHTESsFyZYGoaR3KzJFNsH5bfQqFKpKXL8",
  "key2": "3evL8GLSuPqCwjC2a3td5C8qoUFBKrNE7axqhuuwW4pgNraanuQzWwotnbAYb9BFqUcs3R34aGHCWc3xi1QpgkqQ",
  "key3": "3bjfh2wAs3dquieWLovexxBT5kAWVNrUPmkUtwGS3xBbsZkHkPrgM4SuzxYfSey594SfZVcWRBzXG5UYammpujM8",
  "key4": "aPZdtLNVdWCvc1GT85c29bZjZYKeznq4nFdQjC6WMSizQvgQnUj5jLLpdg2Yf323vAdT8WXd3FUuHpr3VWiVnyC",
  "key5": "9E9kqtXdiRdTQDQTPE6opTkr7ZkC7DasxxTyrZuM61MvT9kV84xdT912x8oQffwM3k3nCp8hfbi9DssPmARRDdM",
  "key6": "4QcPB3ju7ti8ARHUG9TBhYedmsXfMFUmTcUS1YoRi5LQFi5BkZGCByfDCWrsxQhKsqf6anyrRdvrsARYPkim7HGL",
  "key7": "2WmfFZY8ACDr5Q8F5Ga2KDJakAd2o83msK8pfv6LkCDQ1YyAgYfhDckbtprysCRQMozupRwmYPMCj5SPpRiHSGaK",
  "key8": "66oBP4LiDCYYAKizjuox96ZajtbcXJ71WX4uHJacd6RzUDqUZ6FTZMuWfgftUGx5WjJdbW6E7HUc18QaYvB9jyZu",
  "key9": "3n1SokLLQv7hgTtBaxmuxBvAT4qhNFm2Lwk3ntvZB9yokAoNdpjnb9Pg9knyguz3P7QtKk9ymgCCnPB8X2rNwcR5",
  "key10": "5WUgYDNpBaCN8Q2eyYnSgBbLZCieC2LW5Vu2mNgzh6LCYSXrjgx8pMhaHhWVLzRDgjhH71xA5QmCVBKsV2WfHXiD",
  "key11": "nokwNKrvdJJEo4Fay6A7TBa8mioi3m535bGK738GavqFifEogFV1CM9ZTgAVpJAEb42khRGS8zKaifxP79EEbir",
  "key12": "4nMQoueCiphm3JCYMLVyyn4u6ZXfvm6PuA9mBDC2TnAf5xFLqKAPZKRvE35DHauLQ4dtfGjifHbLNRKd3cmkbuZ3",
  "key13": "5qJZcF43Um1RL77jixTd2fkFEAUHGmCfhwAxSWCbtm918QykH6gKDL9yY74s44fkPiCQEY87QkEq4tLk6qA3esDP",
  "key14": "2pswSiKSH6SEjUw8m1fVRmdTLf2TuPWcwf9fECU8tHXoTwJipXXsFGYTypqkrFZQp67LPdvzg6roPaA5QQ55Gx4m",
  "key15": "5qDLf6NYPmD6qi8XxkbA13jPxuKzLei7AeoVdhUnv63GqgngUHu8qnnUveZFogE5V5HqnYdBcNzcEmAJ2pTUc4Xt",
  "key16": "kAWrpJTxrp67dqwVshtBHdBMLua7QGWdFr8W92hSoZzrnCptk7Aoroze3jUZNRQzQU52bwEPwWdETnTy1cEaYKn",
  "key17": "3SDkYhG4HnUTtU8JUssebNVEtgThaudSpxbzjroeB4e5nu1nAQeXu8eXJ1PTufMSBe61KPrYVUPnCDjyGSg5gDt9",
  "key18": "4gG9qtogQ6GtPnvYBhR5qXjVSA8Gh29uQGoeV24vNqxyF6dDG6DstL6TyUyRpD6K8mRu1FsbqKaV6Aso8KEfYKL4",
  "key19": "3AUqBcnAfhNee9kEbP74GCUNFjiz9eH49NzgU951Qcf5gvmHbQJzyDDEs5qEA3CW5YK5rP812USFazwzHKHvQRxU",
  "key20": "38HRthHCegHGopK5Ejr82dXhjCF3cyXN2aVeby8Wzap7yNJq7tXsorF5WbmTJ3GFicGDCg5RPJvQrM2KhyqrTpJD",
  "key21": "3Em5qZbUmHXpVcD5VitgHDn3VAAjsG5iBAZQ8U19MKHh56eFNPpxWyzrc8bjG7AiYemgvhKoH8kDcwppXKhbnJyt",
  "key22": "5ApG4EsJSn64HspMwCFkxVMMtwz3abYk8WGXm9TFji8wuf9Ww3e1CZnXcz6GSQDm9ykc8sR7E2khsXSe4YFVAuJr",
  "key23": "bytA1abAnMCkEuaCd3LFv5tTpjaP54q8yqXsW2MEZyFmhT2kjvsTW12MVjjNNFVXxiDa55PLn3Rg9UWgoFVC9nr",
  "key24": "5Q39c5Pz5UYd6vmbfLUpPa5LmmmTvLKHUtnZRNGKZHfeb6h1V3u87DbYPCkcroQ4SnPfJP8LKK3SDSaG7EgXXrqt",
  "key25": "3YGhemPGfz7TFfM5224aZJgnKFnbFWT8E52da31AT75VXRuJm7fhWBtkdDJ2xeQVBmmEiPRTMoUNjr1mtmcVyULG",
  "key26": "u6DAc2JBuFkiXPytAuDVqUWNcPbJ3Dgw3BXHtG9kSANBr7YRC8KiozY7JsjimnMvKgYAGCC5wVhZyG54gyhX2zK",
  "key27": "5sYfFR5ALzBL4mVseX3PEwSRZVNukmQo1E21y5s3gcd5SEQpyK4hAVAhLZEL9UpVe6Gm546hKju6PJMw3o3mBVJU",
  "key28": "3o7Jz5GY7cFxzMFR99KDvitpB3B42pjf67KJfaGLQ21zRnFBDdfJcQYYG98sn43JEU2GThdFk27LPUR2xNPmBCXU",
  "key29": "56SozsXp7CKHSJGFvEHaderM2r6q2KgUWAxqDUNZ7rkMYhFdC3DFo9jx7dZeGA3Z1XyCekU25brAVzsmeDA3bv4R",
  "key30": "2GJe1PidPGcB7XxHSEy56YBGvn3QBwArWaLxyadh7L2eEneDBgw9SwfqRpwk3keWxQJ7s2vPyDefaGDHzXvJrySE"
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
