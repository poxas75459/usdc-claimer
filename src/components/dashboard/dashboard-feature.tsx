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
    "5HW8K5Dh6vANT4j1WhyjTXHmc4RtoYBWs9XE8muhaeNcHJ7QcNvic1g2pLDLVDwTtEnaPFcV7owRSLzvv89g8ehm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx7Uc7Qn7nJQrLfCVwrepZcKPbpWfRRPjoC6BgFrWRzRcVK37UCfamjFBHh9M7REJR55JdECog3DGUwq2zxomZT",
  "key1": "1Gx192wud34TdagqQNX8RVMBK3EexcxKWTiyRFufz6meubDBfQZjYLcTr2zVxvvWvbZDeCDN1PtowHRuRZTYsHd",
  "key2": "5EhCi9VW1sMe4yyZi1Z3P6D3bDJW5nwZoNVcjrkBUEgn1iCgukRJbawoZJPqzStopKZpBzBjMeg5FcctWms3ZLpt",
  "key3": "3GkwtcKKgrBKkhfE9aTG7yNSyHeGkETFGquJmQE1Zj1kWNW74VdPinK2fzsRMnzPJFJdbcGfMintc7Nt8AitGRiN",
  "key4": "4MqrSSGcWu7XTuKc8aSEVM4kAuYVzt1uoe1bsg8qeLmH1UjRVRUK7bJ33gTLkVLWbJ58S9XbBzcF57qz5qz1SQQn",
  "key5": "3hMUbXpmYnKK41Ppao7hGyfn2rJwAhkHZWLHXG3UKwEjE7A4iRRYScrtUYM3kAcu9eZ4m8U1hnzNLo91HNvUEfy4",
  "key6": "P1RgjxFYRJm571NrtyPkKGtBXPQCeaYy3zZKZJ2YN7sNVcjh8wADNbtrpkdMxVbC7S5fy1Ny9xVqwm68yZ8KccD",
  "key7": "5qCVK7TfNKyUXuwGWxEycsu83E91TH7qwtFiBsSadPEa8cBwDpttXByJ8jXN6k1owpLJ4PJ2KaejyQgjpWFX5PeT",
  "key8": "eun1E1RJEJ8cFW8J5LwmWTLv9ofLN57ZPckkoVHb3SAe2bx6sRH68cDbVZmsGq3K4dhxNbvEB8XTKz4BW3xaThT",
  "key9": "4ZHGLE65VBgNoSrSgaktKpgdVyyyH7wpkNEToqAksiZppZ1oHqf5qkSGoxDehdz3H7jLkF4eByXcU2jGDTZCJh97",
  "key10": "qBLzfRFUyLA66kTwS2s1BCKKkJY4kULaJ5YLGCSGjtRw5DR16Uk5MWehBb3Hr6L3i6XbR3KLpETnLfynGPJH8Av",
  "key11": "2HhirYhd5MhQfAwwSdjFVM9gLYhSB28BuekkggEYmRKV9M1JpQVYSDVLaokFHC9EzzjfkTNW892eSj7nhUmcU2Jq",
  "key12": "2xy2gFPHu7LrwHJMzLZ9tfZpxN7nzioMJx9ptZpAUeCB6BMip3Lmwd38USZHreGab9zJRqE8U6J5GmJ6PPCxtmce",
  "key13": "3VgbDrtJC4KeMc1kqat773waPbQ9fsrmWETmF3CBfP41jbT3NPKw99ebtCSt3TpD28s1eCAtudosQ8JW39wWNoKc",
  "key14": "bsnMyUQtJYHw8VgCrjbtH93dEvdFeMe2Ao27jYtisQ5CmZq1SkC2tDn6HZv1vQvpQMkrW8AzUhC5rorJvWQ21Kb",
  "key15": "29pnygTTLW8XsfnDXmwkzefShDq3x1vFC1STM2B1W2WTQ12uVJ7b7FWLWunPhoTy7pUuH58eKx4VfvVUscCtgFCb",
  "key16": "3ffuNmfBzvMZsZ1reEdmCUduzKfmYWfpaS5HsGTeVsvo66Va5xXch5XcBD2bMaAbZVyC8ocBDv6okDGLh6Q6hgCg",
  "key17": "654Tzap5u9oek5NQSdKK3JsqncGzBTdynK6Bn87pC264hmymrzHsEQde2G6EGwwmBSXFS3DgSab2hUjte1XiX3Vb",
  "key18": "2FNVGC9pfDdWvVmzjnrJYVxvnX2oKoCrQS129K4zGWatgK4rnWb6Seqo4nb4Vwn1LZvmhydC5B9jyJ7dYcNjcPu7",
  "key19": "2j8HuX193Zax9EwX8LA8kkkK1zQLusJwdH3K8Jrr7zMJdAW3QmnBTHmV1VRezrjRFXNLJZ5S4EhD625HaWr92J2G",
  "key20": "41sZ911UvrBMw2n7sYk4wTw5JzCB2kk57qX6J6EKP2f5WALDmF7EcPVzLuqjEN653Fn7RCrJHq4dG9F2vr1W8j62",
  "key21": "3Yyesj2ZvQscB9dJzi3Uwdib3FLGfv4q5zp7frnkHsk8jmXyZW4bdXNd9GZBrCrBW6wHPLsKN9SGmctchqcU47RW",
  "key22": "2dbmaFdxoiJRTgSxZK6nM7swVycKKW4FSuBkh39xhbQJmmAeqLAxCHmmZbJHj6jcuf7JP26DdWZkRKL4GyjHvkAf",
  "key23": "SGRGwuJLZnSBirVzmSh1xaLaRjwDX1f8dRj9q95L36PAHzR7BiMCmaCBWCx2qrb2Ah5ci4wNahJEiUcktermiNP",
  "key24": "2Qsff7MgMoQSghS34qXJcVFhF49U8eKq6QrPhXrBarMHHp5BEHzxtK9HJ4hiBdzMhs2ZG7rUYem6JZaFVygbMpQ1",
  "key25": "4twsKB8B6vPmTAAuqWz11BcbrXKEYev6ZbNWFHDBSo5zHh7q5E5U1VdUfHHnGNSvYZPJfm3KQwDZqMgJTp8uBSAi",
  "key26": "zyASatj3YQaURx4mGmp37EHNksrPUS3dZFLrjKqSNxKDDcNzYgkG2ZZSSP6shCMFZFRmxDiDEVk5zDu3YHfE2KX",
  "key27": "43LBaQanjUivwAQf95YtQgCEXWBNfG2EJLbKgm9hMdFKzozK1xERc39aybHVoRVnpwu51FiSvgstqvbLdZhDwjE",
  "key28": "3DjoihBW7QRPxQp8Krqtw7wU6f8HUFgd92ZRqprvFujpW8mb9Qrtrk6gy1b4u8L8bxmpbDEctDQqj6Zsq9QXzXFx",
  "key29": "i9rk9WB91DxjMxDeuAZ4A249vTMRc8P5fS3rTEK57FngDSRC5V4Y44Bdtkng7gCFAkCZoWsUK21EnCUZXf3tjRr",
  "key30": "4eGaTaF3PhbKJkp5LwXHg3tZXYtyxyVwsnzMevsySBTCmZccbyyapL4p374jhxVh8xFBwb1LxvkLT63vaiz58Ziy",
  "key31": "26jmH3VmiQZuxMc88gxEc524okuB4vQhZrZpp8aa4bH4vYL49HrVJpvXtaNDzNiKGfPfhcTueWtSMqHXYxWXKfiF",
  "key32": "Magoj5gGHAvGB3Bnnip7gWZk8CNJqkEWgpdYJ1imjJtBNqwcm9vbCBrGTJ63S1F9DXhCemD1i4mMsUa2CoG4feq",
  "key33": "4GyDciJzVkZ48dqzYxPcGjfs2Z9m9oPYZUhPijk1epczt4AKQCT8vhQD44hyKnzkGhERP9pewUTDdWZdgB2yUv7z",
  "key34": "2nmLfqnEy92yYYWoK7wzFATzqbZiSMzWkaBoTKjW8DBR15tEuZc4r9mKMkPn5JmdhqCfXmTVtcstmWpDsJs65um3",
  "key35": "3rv2JcRUL9eK7ufrsGBsUuJ6g7jwZ5mV4FxWXhVJ4mgfMy6Mgwzr2dcpDSMUk3vQuCbbfUtkDg2rVnNXFtFUXtmv",
  "key36": "3go49fQQwQqgUw7WXjWHUs2ZbcxRun6KX76G2gvypXY1X4vjvLYMUSwsQ4ggbShSPEbmREk4269LzxhJAzHbD98",
  "key37": "3aA18RKUqSwor8EJHC7sQ4PfGYNBR32jyhE149V67VK4zYo59bbNP5RnjsHfZtNoRLzd9PGU1oxD8JaU8qG2dKGf",
  "key38": "DxgN1Gq1JTAxJuoVwbDTC31TiRrLhUBNi9sMvVfoqp6khmx5XLsFhZWfHP5kJxxPChZopM88qMhykqyg6b1VKRZ",
  "key39": "5jwA6ePmtMkjUMLkVfeihFJejLpyBWb8AfC5SMJ7hJvg3F6PAcHDox8AA5Lb21N2aqAJfGDMiArCrsqGh2pBwYb",
  "key40": "2HJ6CAVSqPPGUxxfJd939TZLDNBvTfeRaJPsuqvsMBrkc36m8DRCvJmGjQBwPnBXH4f2b2rG6MZqiC9FCUM4Kbux"
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
