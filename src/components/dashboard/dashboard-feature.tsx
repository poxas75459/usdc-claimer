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
    "5vRYxWGoqKNXxbXmoo3bpe2oEVvEmnRoJfsZbkZAmfsvanSscKQ6RwwVNrqUbQrhV4w2EX4j19pg7MAe9HnPVXc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRb16Cj7KqwDszZWncCs7wU6xXinWtSKfv4LPh2zGYHKbQ8dMTk5kSnWKZ1w5TRr6ZHSis6k1YvcvrcChjTvQ6Q",
  "key1": "5KJWRazqotfGy2eqcdZHaPb4stsB7LRMbmXs3Vx1HduBxjzkXuDvBJpLqG9AxC8iGvmc1DG92TnmXvekQQ42CFbA",
  "key2": "64q2hUQL9nRgm615PtYsAJifqsYUc6iSGBpJ4htoetoCoeLjxrkzMBERGefAZGhqxDWq9gAgeaBn2zrrXiv3vdcr",
  "key3": "42LDMZZuyCyhHyyNS3sCHZ88mD3fo8meeAX4jyCDJVSbmSJ4PAFBXAr6noX8kMDS2eY8PmkkmAxXVfLxUXRcffmQ",
  "key4": "MJXwrCEWX7n2fv1L2A41YL81mqFr2bPRy3C6QN2pna5tmN1E1XS2zjk32WQoNZeNYJBzAbKxv8X13FBY5cJzrCR",
  "key5": "2Mg4FxV4yrNUTrqeUifkPBBSj2FEJFGXsf9NVPMczVF1bRdSvTfyjekz6Zra8JvX9xuADEbVz5eM48uSPrrJufDe",
  "key6": "36gyWqrevA5Jsb5p13VBcxVHYUWLVgEbZ8LALMTooTizLyCseBs3mgphYgHXEBDqaUNBdCPBWzFqHfKWm4KESkRC",
  "key7": "4AABFCaRbfYD8EFvhhVk3QwqeKcFSzKMD9Px51ddBAHFhLYJj6haTn8xscQWH2p7TCKWqJvAkhiMBXuTY4ivwB7L",
  "key8": "5piTXK8LEJeaTsPvPEm4SR9D75QWEXQWEJodMrVeXGH9rqPnJGfo7pA5y7sM37gcawGjbMwD4DLeoFFLoiY4j4L7",
  "key9": "jfm16RmVq7iiCGQLNNHEpmJSrJmAnsfkYKBxWhtqBcS6MYndKPVQTfQ1KTTuGzycwdLTjL3mUYV1yUz9uSQ76Mx",
  "key10": "2P4j391ET28Fxji396o5Uzi24YA5TVwAE62wTobFsgy3YzaMfEbDt56EnVjoEDtMYxsdLkYiBeTwXRmPvEoAwRmG",
  "key11": "4tV7NMCi88b6MEFG9ph6No6DMko17G4CajGqbpEHugBDBFfD5GejWdL3YjxYMBMhomRq9wZFDPnJqcbyrSWcqfuF",
  "key12": "3QC4g2yXxsdH9VkpU9ERwzCMy3WDeNTWkdRapyviu4e3B9WWVhycqrD8HrbaXGqgj3er6GRYQcVxjdYMn5EAeUBM",
  "key13": "4iCiNLvNxBGHEspGK3GwTvhv4TuZgi7A9yhTYGBMNZD2CzVpG9qzfX2Jy9nGi9Vwzb7KmxuxdA2JzgMcbAvvCBRf",
  "key14": "4Y8tYFyhFJMnY2DGr45kDHwJkwvJSF8EsYtGtHWAPnbVr1CnLhHHYFbxhNzgDzY8jk6eTz5XJhCLdjqdxHbgNDGm",
  "key15": "2kHHGfouqp2Yq6ifJf13RS2jfHzqakuENh8nxHzsiueauHXMbREJFg3HHeDHC53sWzCXr3eBSZjrgvqog5c93tdJ",
  "key16": "15BawrwBZLbEBHyc4ctnhAndgWLWuvNWmvCxiJ4qtQHdoE7izMTNu1RDDJn8JkpatuvNHvQebLuLg3iwXBXC693",
  "key17": "5Ezr1bDWD3LPSLhzdKBy8ocSvKeY17vq8e2RXXzuDaxxAt4DnWWSFzV4usKjqng26jzq8pgKAc8XMjKey6hjp3CV",
  "key18": "646gQBZSsAwvkugjh1UAcA7aSeq5cGtQG1uMW5buPCSSqGKj2eaaksG3aNptGsmyQBifwb3RviFtfaEgHLmb5ZJZ",
  "key19": "34EFVLycjLmwLrxpoBxW9tLfwCU2X59hW581QLxNDPuvQBNM2DveqvGRLUaVizgLc3dVCEazaLtDUTsQmpMBhr5x",
  "key20": "hReFvD5qYbht7L82yco2S5QYjJpvXfDjJGdHGunpSz71kHEqPYtnM7GYxLnxg6b5CrgNmdKpeE8fXP2mqEk8GKn",
  "key21": "mqBsABMcyzDMB6csZ4uaBbT7iiv5MX7pKRViocojRkG5rNGSBGKS1whL5xmUgEeKV2Vjd8gJu8XJmKy1rxY1HU9",
  "key22": "3dxPmx1FYivRTx5v2zTGfRVtwybZyajH2dvbWP7s35Cw3J2D2TQ5HY5VXvFK2Yoth8reTmECm2M54aDmMzBUe1Py",
  "key23": "4hEQv9P4Rk5hWhtM1NPGoEQxhBe21pTen8vovxKe9FYNfBhnhh5JPNoCy1iRyavb5GbbkcwH4NHLgCZHGATry3ev",
  "key24": "5jk2qx4eQiBRRZmNVZPKsoxyGW46irYAM6ZEJqyihrWfAvWtxgnRrmx8hq18wXZApnp6J3AJP8sKuLgGonZEcyiu",
  "key25": "4CpwmBq3Bq5kPpDhja7H6jJt7XhhGogasZGZHHuDqHLbMZUwttmrY3ChC12v9kC5m3MA7QAoJovX6n4yqH6iBRaW",
  "key26": "3YoEKVjaaTTnf3doBrdTXUz7qU1du7b38icjnXvtG3DnNKvYrKHFwsqtMJZ4ZKiY2suCXtLDuSqba2grpYUkDLS",
  "key27": "2GyfjUrZL4sLeRXuHRppVrJfXNzmmeZcw4CQQ6BJfX8ogNBq537XC43tM3rc7FF2i6hyeLSku9ZiSeFrJojLhjzi",
  "key28": "2BPDTLkr27ycDhN5nXuNbd8Vub6JySoJ69JrL7t6RaVb7KqGDDcXWLyRoptt4MohLoB8upPKNjseZUYupdrmASBY",
  "key29": "4eRkYPFpq4UjZ2JmbXDSj8aKAVd2NCVSxhycx6Gg5kyPrA6sH3ytmphi6vf8CRYzUxFPMfdvLYudrLTwjzTaLS2s",
  "key30": "5ghF6s8dUpCsfuAErgSU9jzonq7T4sxeimVXfcy9DPrT4f5EeqvjC5VEop1aHSb5NxrgncAXh7HgQsXBLaXF6wSJ",
  "key31": "4jhW1i3rmnxFQdP6bcsPT2FUs6ft8hgZKHAZHQbBZYjbCmDHg88rJPchfz1XbSgv45mPEhXFWEt9B86a5ec3p8Lu",
  "key32": "WiR29PEXZADk4NEHst8SENarZovcif3xYxxTz1DWx5EemREP2HMmzJk1DcEa69gp6zxLHADEGwdrfgxAuQELKRW",
  "key33": "3NKhQy4tQQju3Lfqps7XignrjNUfZsDcxMUcJknZv3Ctb8bjBoeeXEqaYqzA6qQzQLdCVhp5ZWUB4Sn7cW8DDcah",
  "key34": "3S2b1vs3aTxyhrvmHEf2oGcpctMhkwMDkP259GT9aAC67sL1V26oUGqdmU2YjGDUWnyMeYWPQXAGTjQLsQv2u4eR"
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
