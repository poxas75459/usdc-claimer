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
    "5dqFBK2Wuh5uWo4iuKBgRXbtLUWcMLfvy9HKkHcFtRegxfxa92v6ekQkB4YBd7YYYwJaNmYkFrJ1ibMV5wZzGstv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDS7ciFYhQbqaN8k4B95sayyhQCa6QMb1sUd52QUuYNcFWyDkbfvZNiy3rL4ujqWGjkpEqN2dqRsG3ebZu1EjkN",
  "key1": "2Npnr1ABwH8Dm9nnGQkYgXhH3zt4L8RbgkEBajZY5vYgoQ8vtsXLScA4HRyWp1N5jrcPYw7vx1FoEr4rER4sEq72",
  "key2": "3ujNXjpcmi5sGQcgiiUjPQ1RrFL4K1RU7541e1NXvmpn7TDWSN84rPiUaveha6o71zGXy3FVmZ26CENFbEftR7vT",
  "key3": "AXMYg1viwAvdcBog1DnGX43g3CXXKc4cc75bcoTt1FeHDJ8qyC7Jhf9yCEb28vfgnPk2TSuPSAKhyHheKMAKZzq",
  "key4": "4o1iAAqPqqEkc5QzC8n2aHSnzoSc4eK5StG7Kffer9xh9of34gKNNVSGLB2oynPbnRKvF2TFfZxhNanYv2mLRV83",
  "key5": "WtzBKDkjucbDXzmmYnrRYR4cGRFxqKwpKrUYaCQUBufPtxU9Km9e4C7TidrASK3hqCMACCuYhPziecxQJfsPtmW",
  "key6": "3ArpiAeiLFdSKCBKPmGjTjFPJdX3EzDBpZ7ZHAcFtGnbfSEBfHgkCDKkBXbr9ahghiTEcZtCfcg7VMgwi2TqNijF",
  "key7": "2sEkHzDD5rEpN4WNSVdo1MAcLaiJ7oS1cmS5nAmoBNuLhsvEmHxX9ZZPG5xYQBd73sRAnXn6NMFL7VFLZJtGRzTg",
  "key8": "4pSFVg17ut7SspjFPhY672BktGwAJptNjbwJZtEdj36gYAVM2C6UA3hv6tuBJL5xo2pVBStcU2mQgrkYdnCvuqDM",
  "key9": "28etK6ZJmMXWuGDbBqs5t8FtriChN14nSiHx6j3KbS4X3Bg4jTqpjTd22b3KASoSa1jTHmcRCsJuS5bAEmPkNCbe",
  "key10": "2MEp8qkEzzELJfS4mZKUXaT1uFvAyNMWfGGYCpSPsEVpC33YyMsfFMwjerAFaMwhmmwiXFCKJjSRBDaz8MtqmhCz",
  "key11": "3umJRk6uvuhq4Fa26jmXJaiTX5CtZhP1bX1yc2kmdXdM4edqivSEoq4Lbo3SBk66hFiS75nPQJMBPc3LLNUgedkp",
  "key12": "SAwFJ7Jk3gzZteEKM6iKv5uWjHb1zvWMF5mhgd7o82nxUiTrjLLPZ8FvnN79LUu9tzTaDnvaXPdga3B1FGna4FE",
  "key13": "619hfheR27HPNXCko2YoFKEM7tkGipQbCz1EK9aZpecYNiAsSZaiybZw7qbdkSdwhYPCP3FUdoZZRBfuafsTw7NM",
  "key14": "xEipymNU5ofcn8D5bruyxPHBFmoXQF69Hb3YkLwWN5mQQfw4qKaPq2JPPRdcY7LPZQ3GduwyviCkGPhKmjPJ8WY",
  "key15": "44EyfmRAvpZ3PGiYt7gtXkRZUiAaThCcwbGck5NQuAYn669TYYi2rnYpT7v9Q33yYhxjPhbuDftPMQSy589Wts9b",
  "key16": "7aU5kQm5AHNDjr1giEYn7i9guyCLAoNVHseYJmS2PqD1UN7FagfjuH5o5ViESKXqAXWtJHaJ8zVhFyEvBT4QaeH",
  "key17": "4AN8f6tpCG4AMbgfpXpaeJdHphYxKQckCfoLPFCG9fUqnpFTm2917AcsoxTuDLACyyfTh7Vp7BCwwPoV4uT7ccxC",
  "key18": "3d42W2JTdLpudzX1Txk2aRv8C7QBceWrHoQwcmTrypcwRVGHujX6yo2DsPMnvAozdNicTGAyMzuz69MwQbKvPFzk",
  "key19": "4i8XoR7LgtkHzUFhFu8PbCEJ2JwHbBse3fLFy2yozMjEEV4toZpU3w8kj3Zb3U2M2DM4whp33dxqozvLwjf2YRi2",
  "key20": "XEU6MrUPPEPL1Q2dZnSwNuxJE6Yrc8eBWPvrDZmrYRhxJbUMySuSbxLcbDWZo61Emn7JfRKgXL7rv3MnvAiWuX1",
  "key21": "4guU8QpjDKKm9EXaeTX3A9D3bn1KHR89TcDFrBCeMGSHQpTQQxSsMQ9d78WopbCSGfVKQPqgGF9sWEiJEHtCZ6V5",
  "key22": "5bvbY1TUcVHSDwDvCEKv9u9M8XG7Am4oL1xTWEPCD9fzoros1DJtnAvPSqtM7NYd5kKhQsrab6kamP2Qbm71BcS3",
  "key23": "59obwEXHVioWBnG51oxzA65BjQE5UHUXvZ1KUMN46GfWTTMkJ3VjdNHGFSSZMW86MGbfinoLdbWho52p4iz3tgrz",
  "key24": "5pQ2Z96BKyiYKD2QfqbKZUuy5v4voqs3RuPu11ZJQikNkZgWftfcawBCYXdZyVxw2jWSynSGCwkt9iTgt9XQAr5S",
  "key25": "3SFajb7RWRNHfCvH7cjTYnfZ8mWzTBJBUSnz7V8PGSNB473yVGkP1odfp3jQPEDW9zTVQagYnjTeJTTDDutJUtPi",
  "key26": "MZdbU9YnKMJRk22y1eUc18rt2nYVnZEVCU4uttCDKwPjoYifj6MCjf2euiiCqJHWxbePJ67XNN2zGa2KZYVFbdK",
  "key27": "2Q28XXLTPTWVVPviEPELvExGGsZHxLhjwtC6TsmkcHtqCYNtKP97FVok5VVG4sevqKviJJP1M2PzMPrkLZQSQ7dQ",
  "key28": "3CyDGLSkx9U2TKVA2RxiAPT8QqTquv4fYaPMVo4vALhBKxzFUr6bmoRDMBarNUfeh6mJ51kVMdP4JnRx3zgnUSpC",
  "key29": "4F48cfffQewysUePdUC7yw55ug4gK6pmZLQmwfBEzKY6vTYHMEs3gFxt4UGQpexUSC1gUG26PyNRoiN2dnLNJ7kT",
  "key30": "3xGkcKin6APLNTFfYTTbKR3iiUyfRbdpSsGTtNXDUSZLGEwGgouuA6KnLz5UfakxsSwTEzRPFd73tQLXHBnUgm2e",
  "key31": "3sqXd2zHptPvB8FHobA8hy5GnmaPF5U3GcoowrE369oKc55EogzEzrbLTCLLW2PP1jk2y8XreeNjSSuHtXVHDtWZ",
  "key32": "3JbntbZf2yi6xNEdWoABkBEtkuNoLW1MB817hiTijmz48t4rVHaqxxZQN6PTZLkEcHBKJWC8K4RBGKWRymCVhaa5",
  "key33": "5FwAJP3xcwgdAkFbRchnqiDGVGPSogUQ3qj57nJsFcrdqm6Y1ertshg7drwjTBEzh2xut4AL3Mgz5vEqtKcMg9kD",
  "key34": "4eGzFXdkKDWwsVqNfu5T9Nk5ELCrq19jh2uvTtXXChbcuqM5m9FaSu8G4Not7Q25YAGjwCBwVBm91LgcFWno6u4"
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
