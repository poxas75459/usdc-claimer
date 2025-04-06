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
    "3knuKVWXxPpXCzfUg7KKUb1PaRVK8THzj28hAzrZHpizxPmRsCo93NNhn3BfRdQh2i9w4ZbjNyL9mgZQ15XJ7uVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twBqvgbvMxKB9em45UxiTw9qQsP1ame36RKmtPrJANNyrAwUB3gq1PTTAwNHAwewKihn4AZWT9LEz9nygMSqDLZ",
  "key1": "2wXcQCx7YXUeKKJxpcdZ5ckgra9sEQ1WjriyXpMcT1kNYxPi2yTpawZ8X4oKdc7PbNamvXSndhB3MpB6HNfPfMDm",
  "key2": "4C3kCz2FJcma1F1sGgNPirG64gRUVU9n1KH3dqghwJaakpFQbjNdFrWARLgjNErUcNnHSHtYVidty6rV26bP4Epz",
  "key3": "5Qa6JskNjgsV79FjpPCfrpWPtzJ54buBSB51qRVfdfcdb6Fny3BtQB411cRQDWAW1fJi37eiMMR3aResv786TbBP",
  "key4": "41Xbp4NN6cXxJoXZ3xYRWaHsMssQFQhQLbH75nTeyknBpzL7xVrBUuYCa6hkbktzwccSVu2bvX7Xc6e25wrKyc24",
  "key5": "3CcmEcG4i77aLjDLbZbrRAaGBfeTuvamBxXoMZVW4ZoswkmtLPe2jYpq65iahJSTdqxPSLg4MmY2iGSq6RtxeFWW",
  "key6": "avNqjc22zpMBYKLeL465a8BXJMqnUoStxsKw5uPuBeBU7fKmEwtt9mJhyo3SHWZhBpxsmc8NQVWTDj6STjqs3Uy",
  "key7": "5BRJgiK1FfqJ2ejDnUE3bLmrZQPEdQMb4xhB6DcMcVJrZvEjwQJwCwj3mwJrNALWyCGJRBh3xH5FZou41yDNi1NW",
  "key8": "2NbFB9dfKCxCyLVkPDmPiKsYA5DkL8CaBR7sCSKNDcT5oty1Azf9bkz55ggBK7MU958XYKmR56ZLLxERvmRTEMJP",
  "key9": "5vCCiA6SAiG6TC9svHCy9JLQstWSUk53kPQvLmJLddGcA36da23WotcPBGCHGRdLDBfR7NN1Pq3d8zbpqVSUnutu",
  "key10": "3mysxDyo71a8W2eJK1gXPJfSx8cCTtSrtfweMSmnwbrgrbDnfCcrc6RiNAdJQny6dEQzd77iWCKxfNQkb87QjxQ",
  "key11": "2L922israVd8pNsEhLasr2HGLVWp1PyQwMxgX9zXiFfrpRNtMs3sD5UwhKmpFrqjpm6b1Nx2BwE4fmvUQBNHtELG",
  "key12": "4e1P8Aci9tpHRARt98vnxzonyFVUHnv3XSSnCsdw5T4TG1vk9YU26UkFVM8j5Sqmx1ZjpsKjyt8odmxXa8m9P8Ao",
  "key13": "33rj6xEe6dLAKWjLyPpftFMcQQzmi2KxzAXTDtmZ9QNddvyzGgRi4TENWYxH4cMCShL3DVAAWbrokadMDN9S8Xu8",
  "key14": "5vQLiuvJckAKtqWuRgzAcJZt54mRv8Cm7CJngjTHaUMqQfDwSyCSz14B8FYDG6oedM6Qq4mZz5B6MH6KwHiJ2RiC",
  "key15": "5ve9gw98NBGxiJUMNxbzGehoUcEgU5Ljs1Sh5MeYuPP3dNZQRsU4Uym4W14MmS4VFhitH33NSUadSJrhYPNKsAYj",
  "key16": "2SJAZWbvdBiZGvEryaSYvx2ZjLVMkC22xrBAvqoVANxaj8JHP6y8AKtCcLhMknk8TMujdENaxxmw661KoC3CKnYC",
  "key17": "WvAisz2BX1J3MLp6bLL51BKsRoscgpTqqVdaVFGkjNkN7X46t3F6oAU2JTLfm6PyJCX7xUTSy4nZxo7udmosgf1",
  "key18": "jVES6t4hBaxw94qZ3VfpFFv8M1B15sQuM5hU5vQrf8FuEXwepvQUnXe5TCUBqszaSCUkaAdpwnXtx6ckYPbM6cq",
  "key19": "RgJUH9sRRA7CbUdudaeBJXdpxr1UsAaThVbcQwV6YnpvMtrMWZ3bwZp4VXHuvdYXCJ1DiXV5PAc3vVV3AKNXR6d",
  "key20": "5fRjJT8FgiNY5NE1YtncaSuzmsH2dK44RQcPE1zqHESDAo7HRHMLhKCDsPLZk6yGSnFK7YyoNUjvXtMTvroyY5Li",
  "key21": "ij4bsF4RNPJaHkrdXZJvnfwNJqAeHnpgpRpkW6dLxSGRS912uB1Yfa4tYiFVTghHP52TUAHYmjKk2ZsHdVRd97N",
  "key22": "tEs25erejPkDey47GtksZtHwzVrgNaEqRfMryPZQfWBqX4fXZ9Zg7JjzFBkgj95WeXXJmTs3tzmNCtKSsAifCaF",
  "key23": "sHFU1fFA8ySWCbt6XCenhEvsjzPf5ZTL2zC1iNTyz119qdazuV3HEU5cMa6vpxnad43KVygpMQML9VAoFHsy5C1",
  "key24": "3dFA9qrWorcrkpjCPoHLG6hRHaPnKgztC2dwoGHgba7vnsTDAgY9SDCXAdur32QF1xjmKq5p9sHjk8em1SjkiBxq",
  "key25": "SVQdwjJdQdu47ybZi6om2L8CLqNMHehAk1LPxNo8jaFEun3C2Tb1j7oefTwvw6sZHY3WrhVLzLfcL9ctte2Lh8y",
  "key26": "129Lhpra1pKcALax8SXLPd4ZHja3yTrDTJWtd3Kt1pwto8RCjJS9zFjcMFtHUv3ERbAA9nxhhEbuanLBvRdGu3o1",
  "key27": "2guNekmRC1TWVQx3Ej2sh2bxtiaZgBa6p8rSxX67k6AE1EtnEdkjJC7say61L8oXYDxMRxNW3u1mDBrPArunCcqG",
  "key28": "G4f67BP3moAnkftYq7ahaMmVTMvfSx3ET32wHcHSQZ9R3b8pRanVL1JDC4EvkCSHiX6yQBtVBXqRNZxyYd2ntzg",
  "key29": "355rMm5AxzB1ehG6EjitvG7Vwfs9Ux9TVNf6oLJsxiGhdJ5rBVvv7NQYfuSLxZJmiUy6vYuVmWRFpV3giWiW86iW",
  "key30": "5n9VTB2eimDh1SstxGLMSaNfHWrsARNGnd7auZqopMzdFhuAwohF1GppKQYJ77GbJyFBBpWoZqwyt5LD8KHJdWPY",
  "key31": "2DfL2YVZrJq4y8JNP1w2nNcxnBJ5h3LXdBcaDotaGoafXS4p19u8kct2Si5MY6bKXddTkN5WcXonRfhsvwd2bi3V",
  "key32": "23HKrZ8F4Gb4WwChVnZ8cJSuj4EA1mWDXE9Ca2GV8sCQk6Wcb5SkMBdpPzJnUQEENX9LsJKhJkGLeLKw2o9uZqm8",
  "key33": "yGpqyHh4rEk83RA1YU47kUqBiUdAF2F9hTwjfRzGwNXG5Aj9FJhk7USfTdfZ1vu7rvJGoc4tNW5PayEm9kMrcCr",
  "key34": "3gt7n43oRygGxfEDc61oxeBCknNMjWKtwxSubm7eg5KxPds4FQ23c11xuYpzgdHt1uLoDmio9JGDuhFQ8RvtR4Cv",
  "key35": "2xr5k2gJkUMf2gkxZ6W2M8bVCSLQe85uHwywYNmXse3qYL6R6VSEgKM8RifkFvEG1a6eoWeqMKAMfCAymvNkPKaj",
  "key36": "4C25h6NLfkXHpHKAMaUX3CUXqUHh38wXbZKHcRbNBN6V3zbZs9zwFPKQxm8TaBPb2CD8N9mjGX6CkSpvh894yKof",
  "key37": "31pEcHLKxsLYAqeDfH8TTu77v1vAVx7QMxY4qZxzzxc9A1JusF8Mj3hvCa4bXaHQzGmWTFc7ivUqiU3PrY1fmqxu",
  "key38": "5GwXgtHVR8Y3fPRudAMj52v6w8g5w8FtkqUQTFibtBzVfxw44tAHYMxeQW9JraMW5y1HyoCDJFrPCA4K3qeKu6bT",
  "key39": "3nqNcuowa8HsDuho3Sk2iS1Pfbzr3hyFRVZo88bevTiKYd7SzbtjsjGiCU3XRNEYrEqHdpB13XhF9dBUoq6Yd4Q3",
  "key40": "62w143mpQ44CGXSBmXQZDXQCJgLu4Yy9RjGXwAbEsKLotHnyFVYaEdWJxcgJemD9DzL1qAeAQ7dfPcjowKsfoFKh",
  "key41": "5yCEfjo49H4yj4p28sYbDMpzEzPJAU2c8CmrRYSiV3Gv7BHQZEvhKdafoa9yzNfEdVbiFewgtqXUYdjY7PtbdboZ",
  "key42": "5qPAPj97MjtdJXVB5LqzAFeLL7UMbSSTx1prznCnKtC7aadGj2EfQkHJxo9yiGqVYVoexfG5gH7w9QQ5BfzT7D2Z",
  "key43": "37YRym2veqN4m9jyANvJwuaaxfxd1yGbqBKBYiTAiEXNZdUTZgpPDqCovDG2w3jEaacNL1NR6MGCN7anh2omujUb",
  "key44": "56FrSBC2CfenRWLYX1YEnAB9ZxgAYpzKBM1hrNe29DH1bkCyQ424KLkUkjhBw9bTqJ5fmdFVWNLCNJ2xrmAtnbkb",
  "key45": "5obyAvMMRtSTg1TBAAMurF8XioQx3fdGDZD1kcJx2Vr2Rreky6KTQW2VhmdiwLHak3xgviB4qUUZbuHy55egsZxB",
  "key46": "5AL2aiis721zKy7HbYuU8CA3j6nefrSkjsB3nxuatLZ3dduMX5KpsEGoZwjqdMwV2GFnnmknhXaNf87wYf4vFf9c"
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
