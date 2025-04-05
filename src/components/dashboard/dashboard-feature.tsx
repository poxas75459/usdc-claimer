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
    "znj5uuLnPWAM3H23TZaTmpk254vT1yq3KZ1FNeBwPwkTC3q1jxcacCp6NRbLLKqDiaY84cgZnumtAasFQgSEFmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYWbecxi48BQhptDJzNwQQcUdAgayoE9nrWuxz91YWrxBpicVeeULby8TBX9Kburyh3k4fztNyWBdP8oMQoVT6P",
  "key1": "4AccPk3Mxaahsyb1H251FKhx8pFZfk8cmkrsXJYoHrNpThGD3tnjDdfr4DMMATyycioD7PaxFZgL7uumy3ZKd5Nd",
  "key2": "5j5piSFeizWdfsyDuafvEZivAXQkYm16tQqzQ38NggvDYHVki5PnMNdwCedhGC4m972BzqGomdsHt1iykacrvCXj",
  "key3": "66sVn3MbcAi9Gz3GMt6DxXxJQoCi9h2jXkwaR1USb6ATj64tK7gCiosYLC1T1ahjNbNVpGqQKNKxoqweVPhAVbGw",
  "key4": "2sqZWHGiMfszix3mLALnPdaaycqzEPYqGtGCCVH3nfRxiTkJSjayhP8dj4YLRFod9zXY39jCquDKN4ALUffaXdZP",
  "key5": "3Lff5zi1m7A2YrfJuBZYFeKdzSjWy3ijmzLqNFVHY1BCgVN9SnTF4UCdo4smsr8ULApKuMTpDpu1eGyZjZrmJX5f",
  "key6": "3ZT4cmyYLRY4S1Bszkm4YoTSNTgwrFB6N9gUgRe7sUCpx9tqohgtNXAuyxYURELjViFB8T8D9ebLLkwTwxoHQ62b",
  "key7": "4zoBF5B3ckuB5eHWhgfTZqn327X8aTYYi5oz2EDXGSKsusr7SWwQQ1StpqYDh4WPyLNMHPAaTRAZktLbBKRYTu6D",
  "key8": "3vxbPi64LZoxvuhcKbxc3RW9WTSaYnnQ3fbXmGvdk8X19xS8xD3gtpbUdUepV5jqo5TEYT6a8uNAoWEPnJv2pNis",
  "key9": "wsnHFy81Pvs8SSWp7uRxEPm5hHHNEyzqLmA6HcWWfyxvdXuahq7c64KSLMC7p8T8P2Z2yu7EVfeXJ35ctthQzLK",
  "key10": "2gRkyKz4yRtMQoPaapkhiQQX4CEQeqXW6vDFcALM82CXGCYMz9JzUN3BZVLmNenxV7WggBTbBMEQorMMJ3bHoWsQ",
  "key11": "4N3BmzjqP7pN7jjR5QT5DYhMiCu6F2gLCug29j3QTQiapMSDgooPLCtFbDYmdKAt2K67v6gBiX9a17bbBqp9uy1G",
  "key12": "2rpKL2i4jpQBsMrcQrU2UizL6qSsv7gb8tT8EsX4kZg9YoQbkeBztkLiuSDi1dXrniQPfqTLVyvk93a8j6t2kHTa",
  "key13": "qVguwMTMvDE9fR3fyXKVDojtR5ZJycPL1eLUT8DwZNsT1fhtyNwfBKHYRxgC7eQU47QiQM9avottwpXAodVk5mR",
  "key14": "2jCV67q2vpcmQbiuGiMr4wfeRXCGuLeAHT2ThEScdAqWMo3jc9mxYYE2NjkqMF4N9ZE4dJAwcHUcCqdSbcduENhm",
  "key15": "4NmBCfuYD4QNfnxzWX1SEnFx1bY1FoGwRk3mwFLeWrTaPxLCeXwTfWRA1WPPMUR8gbRzDYWZ51D46p86ZQrAvThF",
  "key16": "2gstJMeeZhKvd9GWSLgPvdtCt6Tt7Gz6zRqs3cpy5kPXFamFck7fuBWGk2khc5T4poQoH5s7CwmE2NggDnJm5CEP",
  "key17": "zRSNcC3TT2GXHhWVmkafRoehzfDsUowYLtnAk3zrKetJx4WqD1gTeZsevedPP7c5tN9Ys84V9boePQJdb49aadq",
  "key18": "2CrBuFDE9UEVT5NKbZiu864cpZFrvNoaDuQq27b81t1rotLadfN2VWqzborBz4zmJQVKYiUWzpKgWN2vVZZoZBLC",
  "key19": "3CsEFP9REMWXNJj4an53BHhKQdDg1asUMgZ6wGQhpw1DhYkoWpokKFrS8YiVXJHPPRMEMYG1yKsNHnnqHv4rCLMs",
  "key20": "W3HAiFZWtgJWHxUFqYfQqsQGCMS7e22SR8mYJYx8nn2baxQz375kqcYgVBd4o1HGzqfsdXhqagpbtFWK9fvwun4",
  "key21": "65Aj4S7DxYtLPKXNS627aG8TsbyBaNka1Lr9Y6coCkqX6SPhRysN51ApDCWktnARW6iXCPJ6BeUxPUhVQfT9222a",
  "key22": "4emEJuPER4pGLueYxkpq8vKHACrJ2H5ZWgx97XHMT9RTAKMMhz1hT63hYCjosPmRw4g7dFH6uSZ2V4n4YCxGLWAi",
  "key23": "EyhFgUFLbuQrTh7QPccq7qxHDKwCUV95p8TcWtT1Wbf7N1UabHapFYUV4CoTV81d7kpqS4o96uKCEk4Mcy47dig",
  "key24": "4AVpAkBFFmCUGs7ZMy1VtVXNaDC72WRU4wcnidjy79K2FupGaChTdUsaA3HRPL16tLE78HeYLedbzjUihNekJ1JD",
  "key25": "5SQMeFbVBM3NiUi66ejA311nAW2xPzgH2tb8uVvCnCarrCcxfyBKz74yLpczRmGbBwhDXKDY7RDNyWzaEqXnakyn",
  "key26": "5kzHk4cHqpEoNEDmd9EQD6KkBQGBzVSU3fQijDfRpruQnHiudfHfLngwk1Vst4t54RLypyhfDonojQRq1X14mMrk",
  "key27": "5coFehm4cDBtWerayXkcLshqkowu3BYDecHAcgFt5D4jpn38FAQXGe6Ty8YKnTN7QZEMnfUATZ4zzKsFm6fv2pgH",
  "key28": "4t1phh7sVRcuaztU8gpcW4KRZWa5Ybfs7pHtywRx6tV7HkhFLRUoxo6kauRxthc8D5GwJAaTiGjkTiHBqa6X8a21",
  "key29": "4CWqZrpT8udzn7tDBytYZWV9K21CHNYkNDiFxeHjEHypwzd784jAALYXt2C5JgPxqPvvLWvcuFxfB8HwoP9UDgfY",
  "key30": "4pVALwfByzQmpNzMtn1b6y6SvmucRFGcEBUi3QEmbXS64ex3QC8H4NZFoPtDNG8715T4MH1j9jrXa49itb39LJYj",
  "key31": "2zwqE37TF3v4XNUgKEUJ4fUABmrDcT2TvVkcMxJUxRgNDFg7mZz5EFrh48hY7uzE4xMA311WGtbRtodzHCg2Yw1K",
  "key32": "5WsdXmszvY2E3bPyF8wUZ6Hee1eG3iGkMw6wNEQ4qm9DKXAHBpE1jMQj2X2FkvdFt4ZJ6FJuuyUu5gR7fuGPg83K",
  "key33": "5fwCXXX8xDEnAA1gJsU9TxrV6pWGx4WBUrpiUpG9itv7rEcwzaALNseJp2Xy7hYidijryPVs6zdPUMehxcfvbCqi",
  "key34": "4dN7CVbb2HNFWs3M4wqnQfjDSZJRKyrWbhRBiS7Qi58t83cx8RnLmKdaZXcbkWhXS4Z16Rzttx7oufhu6xsxTTVW",
  "key35": "5DpC9unE1xRuQWh8wKeExTnCVCSscGB2AVSk7cPtTxSLXLsedobFP82bL1VDdxtnaan3ZkSQGJS8fAv9u87DPE5e",
  "key36": "WLGmdXGW1Ro3k9CDQQrKfQ3C53xCuvJKNSSi9EiK9RhWxxKkncaRuerwq8XU2Ws5WbTpUSVXXPf2H6yFfHgREqq"
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
