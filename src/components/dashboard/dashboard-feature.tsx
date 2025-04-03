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
    "3kcQbPsvkTtUmbgs81L77xoEYDhxXyieh1LcsSEMrJYRK7FYKqXS3jNtNWapzTvqBF1BU1fvo7uWJpHrwcnSwZAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJNUoXBZbDmRCF3joCBaeR3WZ8uCMBbGVoTz1tvCLN4zkbHYDWfTUHdaAZNgt37M4aou6D8BuMzVgS8JPn1PBYp",
  "key1": "23CiUyZQevYpjDDf41NZTRwFKBmJwQqZutsSDjk58eBfHEVktBmnpkVqcEGiCHBDZz4JCMPBwMrjX7Trza1BFaU2",
  "key2": "4wtBzUEZKo6NQrxaDHf217XX769SxUbagaXCCDryHpvMBvacwKpjzxony5DtztXjjvkqTTBDCD74Lmwy3cGkyFMc",
  "key3": "2RBthMoW9psNZHacLn3qERNCfsi7bCwCk6DnthtVi6Xvc9cmR2x94fU8xeFpSHg8jbBZgMAhFNsxvH3tyBYBJCNf",
  "key4": "3XgmLFgnYpA5CXN4MzZZJ1hT41JjxRMRevKDcxFP6Zm2mL9LCa1TpaSTvhkDfLi4iQH5vZagbNcEEonP1Z5gez8G",
  "key5": "srSk1te1etgEutTjYiN1EW7MS6kEEx23kKdiCwp5r13xMwhHP8SfjNpCRJAzABuC9R65QAPC2RpDKgaX8zbPch3",
  "key6": "3eHfq2vsc41FuGmjiTS9wWbSxu7KiKLHAcF4XHbrycBwy8pcWk6xvs3D1wua7uuEvU4YNWJ6ryezCNtq9h162tQv",
  "key7": "3Vh7tV8YrD6RnmPX9W2c1D95BqCM6oGjG8uwUtifvk1TKiwUPitYEAoeX1Q589eRUJuLzmQaBupecxARZ8bMqHYD",
  "key8": "5QeGfUYhqfdQRivswUopKAysXg6rHeAET56TRMnJdpS11AE3N74sDQFD1hjt2HFTaBdqt2MDx3mxwUNy95CiWQ8C",
  "key9": "5yucQombLW3xXoBH9eodmVFkTMmG5FEhZovBjrwvd2EPBaoSc72QwqgonFqcPbqDa7W5uCm5UY4BbnGz6DtqLMnD",
  "key10": "4xAxo47LacJMerZRYKo93fR4eDuhzQh1eZcAhjGE23S83PVRzi5vSEtyEJuv5fe7hR358UFS5RCss2sumwaBvPJQ",
  "key11": "TVGHkTsc7YEGzjDkHBjSi7HE1vP2wDJobHe5tdJfK3qS7azvHzykzt8zspSPnhEd1e8cL7yNyeET4cfDRfr53nF",
  "key12": "2DGGpFcoRXEPHzKSbLVTEDGG2qLx3hTDGFw5jejHboh61QVV3T7j5hCX5trwLREhFZT5fMBKhVjLFthBKr42NhPo",
  "key13": "3WeequHQTShRsyZ5bbzYoU3pWv84vKfeFvuuXTB7iBztCiBXq5uqCrW1yAaQ9DSe5dEEU84L6fXibbghaBqq9Gao",
  "key14": "5eWK1SUceSBWVFQkGeQ1xFapbtP4XQzRRbGEtsEuDKwnp3yDQtxq2UaaXZByabUpx52B5T5TC9nKu5YgZMFVxJv",
  "key15": "3xPpWmeRNdme38cj4gVQMmBRmJGg9FkpXerhys1XxM6sT2BEzNZZ49ncc4TLrqqAHHoA3UDsDqehwaAYXNuz48KV",
  "key16": "5bxmtXEzaa1LQ7KGAtLXavyXpz3LdF8fjyGopgXj7ky6MttFSxZ4msLsomW8teRGuXhYyj6cg8uUJDsECYsB5swX",
  "key17": "5LdierPzrc6tBTZB8iiZNSNfpFzDSaq6KL5QzWm9TNBZn8gcMe6WwpQQRsi6dWtsK8RVhKPB8MYqJ5f3CHykW3oa",
  "key18": "3wBD3JR57Q5F2QeJArPw9btRZXpY1LQBDNfKgo5GKi8Tb1Kwhsiz2bs5Czkb3LY442PAKGy7mFeEXUWS5cKQ6vaj",
  "key19": "3Wj49QeiandgrSjyu5PjiuiawPGCZsFW5B8zM3ScS5u9ah6RpUYjp3yLh4DzXj7nzdivsLY7aXeRr1aVCDA5jZ3A",
  "key20": "NAJpSdTxFe5ZUZtd5KAgchnrgeVzg4SczsR9YN2pkoxvg5SHpuhTZxXJVGPHdLSLmXxCEEbqPLukyjzP9Bp9Ur4",
  "key21": "5DsYdZBJZkbSXxcAxQ6oiBj4w8aH3SruhyVwenh6GVUi5NRkPcJdTLwMQS8SotZHBuTQBgL2YcUtMhV6M3C9fDoS",
  "key22": "487vjY9BWKoua4HD8EiT6xmcK77ogHJaFkBpPVFYG2zRXoRWSVperxS6sTGPR7mkfpTAM9Wzji17EFhCS8eKxn57",
  "key23": "2zxMWsqMNBuGVezE4o7Urn7Je3s3jrFMRVAkEH7Em3Y45GpQMDpqD4d4RXimT37sgBZBonCFwLqMowVgN1TPf7uN",
  "key24": "3D2BN9QrsdL4qCRdKKRJaRNZQRdZyNXUSKcTMxW27QkSpQsZgMbLh32y4ELpfYgJ4NdQnCEXD5WmXFc7wroF2oLj",
  "key25": "3BSoddn7FGcU39PGVJetyuKrhfid2ZdtCkky5mCUzfGZ5dPMHZdwubJ82pCEeGjPstVwVpxdRzbKuyQCSZDPMcop",
  "key26": "39AuZfN3u9qQh4ZRxo2zJxRYzWAV3prFKzCageQUCYUYvyj9Ss6DNo6AzTjgWSwSL7UNu5QUvC9yE7B8P9ZKzfUJ",
  "key27": "4UYhutTUKDrk7wXboGXkFyTCc178EWBYB7sUsomPtNYnSkNTJ1jsmpic8w2VgENjMcKhFcpm2Zs9duZu2rJGxuva",
  "key28": "2Ss3Ad2jMf9k2gYmqwiEPQWzerZuuSbSThdVFG3WvzztUb5JX6u1MV4oyJgf3MM6rAtLExv9poiCvaHGUWFxY82b",
  "key29": "5MWgUtNTnMmHPr41eq8AyEMHTZPoWjY2tcyZosWP5ot9AV7Hu1msKPbbLeptbnCr4YEZqpuxqa2sVKazbHmXB5wL",
  "key30": "52CRTr3Qeo8XjoJ3CLF6GrAK7HXRHLrXUDY3rS6LpW9MYMDU22n2ZSH38SBUiJpcoib75VvE5XoAUEfa8ffM9xqQ",
  "key31": "4uK29YiaLqYk8UoSDqXrErD9w7o7YCQ96pJexMoFnE6XEY626mP2QFJvuw8mLz6WGEkwfN8V7xrnvHrFFQbqfbKA",
  "key32": "5cMmnnXu9ryL8BFwYpiH6yGyn4QU54ho8QRpb1NLCbGAw2ajAGW61yr9UMD648t9F76gSsDCrUKjeqsuwXoXtmdD",
  "key33": "3LoHdrAgTMT8EzvYuVXCK1Ei7FXg8CBr4G5fYux9M2BA9U24jzaZMrMw7NsUCZ5QFthL5DQ1cKJ9GXSrQPUG2HZd"
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
