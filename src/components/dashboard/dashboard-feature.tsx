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
    "4svBZetVnv7uU7BK2rJSvuJg4gFoRENJeeRoU3LUy5G8q2Gdr3dp9yXDhp1AzT25y9Fg9iTZdnLmkNnpvQhZaVn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nw1uxEABjEJVhKdF6JstYx4kmYWDz2GfMSVKKXn98T7Pc8cJxGpRyNtUbcHfQvbedS2aLDB3iLWi94fmErdBvoJ",
  "key1": "potE98hqi1PcxBtvwyddXHM6MNWiV8942tg6tzd5mnLbB5LvEPw7NyjVDJ95cDvk9qzTqoMgyXVuEWA5ts87j1M",
  "key2": "5aPDTPuUnShu9mvsHuXi4bKJseTbQVmKjVyrn3uHT9AeHTjeyVEq8zeKqf5MxxSV7Em4A1doeYjqcDfQ7bYabghf",
  "key3": "51YUog8AnkvdER1BLYTWKRqd7Nx6NYyQt621BYhdPd6iXeHFKJrJNou3oGzvjRRuACRUuc3dEpDjzwiuqAdSxNgr",
  "key4": "4P219rHZUVfWYpkZZYD75zUvTQpjS2cstmTUoZsrRAAPHmnbay6qcfGkBY7YDQsATn6RAuXJ8iDbjKadd9zXNKRM",
  "key5": "2j4BpDyJep3HL2xBSThdStCFKmoGrkEa7rTZsWTjcj6Q5wFqJiyBYW4Th8HNB67SHgFXZ3dGC18hFyGrECo4pQtu",
  "key6": "LX6AW8pURhbPXg45zoPofCPJasBnzBZ67raWdEdRqX5zpKaiVQBXCWKheyxgieDTFJimyurG6NkZfdmwXoAhF9J",
  "key7": "2CLuKjee2uus8YzVTAhvDNeuGyd57Kr9ajSAbYf8chHfF4RJYSk7fdFP4uvRMardXatLoP9KAxnBaHE2H3doxfr8",
  "key8": "oXz1tcCjWXYPxbZ78NK99G8U4hwti8R729gtxUqgvnXwoRCTpq6d24u4gHXLmV73sUhVVEq393iWpBHBzcDcmK7",
  "key9": "4xfmPvcSULCAnew3omQ3jtNPboWMtdDJnE1aJwbd5KX6y3pcP1NBcrWedhgtFDKS6NQxbpmU76CimhpAtFENoVot",
  "key10": "29KtCakGizDbxhPJcNeyDBtgHcJ9wAVWRm5RH6az1CmdQycpFYLX4LU5Jss8k7NzcznGF4nffFresREYcCdCtC1u",
  "key11": "29rAcrSynXSQPaPXBNMyBoHdbBt3GACdKcyETyKnFxc8xcH18U51d8XS77Ry7aTm49Gy5fy6ogvq3zSTJK3C3oFq",
  "key12": "35xhpU8nDNSjDLpzkkoG758pDpZ2LpM9UFQfQs9WpBizkAXbU8VHMF3VSN93S6uHcXPk8CF6tjbsKHAdXrCHZPKJ",
  "key13": "V9aDDzn8P6favuoxtVeZDKUqGVHnRwevp7Hj4wwecyFye8whGRH2DiysXPr3XKxvmZdse2RcZyN7AnXe7Gxg52N",
  "key14": "UC61uYfGE6MC7WBDixwVdozwwXLQ32j3L3V8PEa4DkRV7Zb5nArmT18GvcWVKyMQLHBV87pFxniVvFdsqgSuBni",
  "key15": "pkviwEe9QHiL4XWerpJQ5Zwfqv7s9Nup4CJinYRdBwZ6G1ekf4x4dkYNg1XJWRffWWirGrQ7MuWUoqZvdAgXAzE",
  "key16": "sDynt9n3zuRU6RHHp8v1VoFTULCL6ZENqFXb8Q1cfA3mvhbwPs5T8Rhf6hPSaYMvk42FACWsnxM24XHSPiqvNNu",
  "key17": "2xZwr9qdreFgPRWQEVw8f8a44gSPWzD3xtnCEcBiJHvuqMyQVULCx67nD6AfMWtAnsT2y76c7sfQd3B4ciSLAGJr",
  "key18": "2MXavMqKcaT3p5kZrsJPgtujmsEpMZNXrFMwFpj8iypJPjc7X2unXnCTqFtubzB3J9x6DUqQiAq6gPzN94ZfyZR8",
  "key19": "4hYD4YKkVqg6ob7fBfDWAdrhharzMYxfvNsq8rNvJVGdjpTXnyQW1XszkkfMKtFCEXdSPumXN3BRadsMkutYjzma",
  "key20": "5P1AvwvZ29kP6Veh8YjVNuck1VqQrVF5Fm8cwPAceSV6cCgFsG95sc1MtHHW2cABnWe94V5Q8nxb2Yk2ynsot4xt",
  "key21": "3qKvnheQTK1CJuTqwbYhpJ5yiXKNy13JwvaCEuzdUrF9PuHy6TZtVvsKnVRn6EEmZL8SbHHJqaaoBKNm3fXz4Pwr",
  "key22": "bQn7AuXFsWmcBRj5fkU4N8S8DCoXfxpSd27p2tjQ2mc8nZz1KqDPtwcj5ojZvP71hZWoppLMB6LeUAg5MLpJ9Ko",
  "key23": "2Bjh9XLbHDrRmL9vEi2sUbYBHeoZZRTqYb2jiKqEDRyYLmNjgpYESWMg6jNs4u3ApynCcxSDU2DK3NMgoqYS6D46",
  "key24": "35cAfUPrKv5hkWcDxUzoCKce7Vkk31wBjJweGix5xp9eYV4BBMw8o99KHdajAHVsDXKm8FpCECMpRLKirNPq7rQT",
  "key25": "5idHWrQGia94qQrQVZPxtzFp5pxySG5C1fixK8cF7MKmi5iYwx9Xro6DctixdiedgPwxgtns1zgBZw3sNn3fTmHs",
  "key26": "5GtZyfduP9E95nUnQTQ32HrqHs4oQmV1khxSQMm5pzsDKa7VCBYS3ssVKAcqf2matkYUQywcdysiLKfumGhAX9q7",
  "key27": "4tb79YWanz9mDFFuSMeeyzoWm7vcgwcr1GeUiTReGLKPqU2cwUrzjPknjP3hxJyeCFynqjpkvw4UCYJpuFvXX9oa",
  "key28": "59jhTxdSdCcdBVN8jzVFcxvueHTaEhdHAbTYtZHKE61xCKky3y2uSHReGrLMJvj8tMaiX2awXZL41JbuF9HE8Juc",
  "key29": "3LBYxqZVny4BnmyTEDCJp8RBJWaJtQGDjKgGJSSzyoor9MrX5Xkecd7kkZy8Bwd6h4EgckKUt3yBDCs4yhzm7WXP",
  "key30": "2FCESCj2Vw52Dzj7ZdKPZrJZSar4EjFq3hFSeTjN7YfjzaUBBe1y3vSfjfepsFk34iBGaLfE3JkfCyNt67sdshvM",
  "key31": "41arYSgmSoX7Acv6A4v1noesyLJSfiGLWkTpQhC94oAEsoeGRK28DB1VRx3cqSUKfB9R5JVy3Avdxny6nMq84WrM",
  "key32": "4Bge7ZM4RRtXtfi6tLM7Wa8XfdVUTbCXJdq3dT5b6sFjoJg42NYY4KnkjEadfumfFptM12J4VNoay5FgjSBXj4QY"
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
