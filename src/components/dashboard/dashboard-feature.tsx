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
    "62qnxwd8iEmZQdRFzJtSNYw4HTz7tkpv9CFu1XU3BEcBfSEvQwz3v9yh7fngExffd5MkautSobmP1RWD75G2s7v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTBGHn59oHq6SsqBGxkyrQqKiSaJtTjsmtMuA138wBGWJqVTHVh9EtV6aajdvPyBTcXyR9bfLnCv1f29cXBvre4",
  "key1": "3P9Yft4pi8qdRanxLiXMpPpPyWwpL94YhngRT721BDKf3xz3qtanN4hYwWJdsBPJCHbc4Az8QTnnPXdwVNYntEXu",
  "key2": "52MnxRb5pb6XF27xxpmtiedP2H6Vx28XHFrAw9bkCusGhdjyDbiAooZfHxm5NT7tMRGqRkwXfmgo4a8dqHv4XFiP",
  "key3": "5BmHao7UppSS2LdDyRFTVJdjnZD6VVKS2PEmMdD6L3TsRMdhs7NDRPngGfnCKNmaGm2fdd3avasvskhhqt4HTtnq",
  "key4": "2SXLxFG4QxrBi3nN4oXpYuDLYHBecURzyFmt69iKDMENK9qSLoXZiyMSHUKS8w2Qn3Jv4wtScVtp6fuRCA9RpF5m",
  "key5": "YiAnZQEiZDXZaBw7Pkqi5Vyh2AQpskXvPfZAsaDMGaKsnSbhHZCaeVGr8We443CXeXv5SMbnP79HLTwd1Ddhook",
  "key6": "3gMFm2cbN2E4Rybu7gWwowpMmvJ6Cr4pHzDxxNiNYm3KAfRg4dPeGKJewxHianwHvyYZzgn1zfMX454TYmhZoHvz",
  "key7": "4xtP2GLFYHzjBE7TNDH1BShfSB4vEUVZhXsxwW3RChy828L9f8hrUjQLKSxTQw292ifwQwFwiPAcs11hLubuwYwm",
  "key8": "4za9dEwBYMhx5fnRXnTJeyNz2DYZHbZz1Rem6vLgLsWbHUBAU3HyCmBp4UJdse1ghzjwhL51654BeyMC4LEpKpXd",
  "key9": "3Sz5fNE9LQUq9j4FZx7u9VnCu57Ln8Yh9x2gtNHP66MSr4rpCx6LCYYUk4njzC49XANHvhYyiXb5gzMx7GrLgc16",
  "key10": "4frb4ETBsp23PWMkkThFiy7DAYUzxJQ58MBHi8QmFEowjswCZbNCNxbPms3mq5cznLDKr2wjqJTRrbKFfLsb2pHv",
  "key11": "2QcRsZ9qbSe4k1CCXy5TRz8b3skJG1MdNJRGEZMpv1j7F5KpBinCCutgUH3GiYFAbS9ESeefZ9WgL51Sem2o5Nhd",
  "key12": "35Dd19gTg2un95S89EGAM8MNC7xxq67nzZA8g1ZXHwKyxSVsL1uTHYLWjPQfPfjtCQznU2SSyFUE1hkJg7fhruew",
  "key13": "UApk6gieCgTycVpG6bJWz6bscQFUhUKjennACLEPamybntfjYqj5yZSjoARPmJm9h9AdnEMkJ3Mqf3QCgUXw8pN",
  "key14": "52rT8L9FxMjHhE5j7xBF6FKpRNiyJPQ6qvq64M91d86pqF7xusoxfPm2qZmRCYJ9YrrdyhxD4nMmErNBrHSvLZ2Z",
  "key15": "3QXkzNvzyy2sPWAizBp2WNUr9PRT35XiLynsK4oTszk77K4QHergXKgZmxReAUfewew2CFGypwruHbsjxMWQsKGM",
  "key16": "2UPMgqgpy6ezNyYS7yy1yWnEtcv7WyJzMDP5zuRjtWZrLZVmV8K5PAnhij3sFdienConC3Mm457rMuLvJuSUovr7",
  "key17": "4r84PEyoLdiZX4z3t4z9rkK47zXfT9tNuZTiTgQ1S5Dmbn3F1w8shqtFrjnY84U4gUb2ATa2b7uMHmkRLEf4wXxg",
  "key18": "2dheeucJDLoCf4pWoA1JELSSenmHtvutaLzyzF3WY4iAo2fXVHMgqGZUewG36q9hqnCf7BsiWSLb37Lp6zwN8BY3",
  "key19": "4zsdyRCMmb3qPCn6gUj79SBvzMANBg4XbjEHFvXLzGXptKMTygGsYEhrokmvMRKghFrzwwrhsMcfqcMuFb3DYu3M",
  "key20": "4LqZzpJ5FGm9CGeeSKKknTiBCtdtK68G9UqugS6cBfHxm11x5yJohhALeSGqzKteKVJ65YA9ozY1VsrFzrtRtqjh",
  "key21": "45MDFaGaLNL8r5reb7Pw94BrQSi3x1fdEAmvA3LV4fc5npBdNXzgEBRjREHQZBBVyXyQxAgc368LMEVTnfpY5xHr",
  "key22": "2rBTvojCAWMgekxCq5HKVGQTB2YfsFs973dhSEMFvEqnPTqJkw3W1fQqijWA3zzuGv75X9MrJ3dWR4gbRgzcjxrs",
  "key23": "35qPB4qEKfGkffFFNcX2Ya5ndmE7CmqdWAudeqLh648BBU82AiwxEAUCi8dvKxeCMKRToCZH2hG7G8qnef2KD4t8",
  "key24": "5P9vDRUvHDwsVUKatrDVK7NAeu3NKyqswqXwBfkSu91kXbHRbe7U2NzutRhiNJBJ223oEfcQBo6QUKzZnk8DtY1V",
  "key25": "4eXztpjUt5bXGAnysU4JN5DeU6RvbQt31io5x4tB8PJEvcwQyH2a8ojRmaLwiDhp4cDh4WJddh6gXRw5eN7Dy7b3",
  "key26": "brhfnwvfPvr5dc5Nq5N6QSUH7DpJavMbZPEgcyxG3WNHwtoLQVbJA3Ptb9cyhcGpxxkJJBEZXmgMeUujb5FaPJ4"
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
