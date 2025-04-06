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
    "aEbcT2Ts2YBtsHBaaT7XQ7n326yjbEZAKXspB8A6ztiwnqrr4xzSBFVjbW86M5X8Yav7nX6GuiDGRBPKuU3pFoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fv1NwmhTGktssfR3GNRt1GRAqG87B8DLm3YMy8vTFSSVcsEnYqSkTnSYJh9n6uLnsWim7rqMav9wiaPi8MVbmCg",
  "key1": "51eAk62uNXybGWdY8Dj83aaBMmdcwJj5dKdj1PRwBgxNxM91KnoxWt8fdTmwgy53TRxcJgL5nbKMshibaPom4Yg7",
  "key2": "5sQyASpNuheGxGFhLA4BWeoMXacLwa8iJpJHAD7wTr7pkNbGL1RueBXHRB4PCBCWKL2dpmjG2snFQoS1MNcUxFnK",
  "key3": "6bcYWEb6r13TCTQGsvGkLALtTK9B6KBdqY6n1QMTjjM2L3RD6K51LPC7K3JJkRurS443YoteWKLkNGXVSgnu9fh",
  "key4": "5cVP75CaHd7eaPdCmhmvzeU9N68qcbWrjpX7genEtny5ESmRQYe2Q1yaaEmDww5h8ddx44uCkqq7H6Mf2Ye87tvP",
  "key5": "2jRkj1joweP5radNLoUz1gRHMUMvPKVmtjfNV1m87Uuwh6uYenNmX1pHdweoPm96dbucujb1oCvfUGpRidQpm62M",
  "key6": "37ogKCQLef71BMYSKPLRyZCKo15UsAXA5DEYKpvTcKTYtBsVXW6s4vB8PYyrvnsGDWYMAmyMTHiv3Twew7DFCFBo",
  "key7": "3VTU8QJMLUv5ebTBM2YKeGqGyDuz3cbwJmse68c25qBC2N6tUsh17f59XsJtRcuPtCLUvS4Ku3EXCQ4qRrRuyHS9",
  "key8": "5bVnGxNd8aDbBMdSZ6Si4mABoTUoJFBRyhfhVRWhkaevgBdwE1p4AErZZCCn4SUrnxXEcq3RNHpHufqbNahLyZAU",
  "key9": "2jLqmPL9bty3eiMfNb9T2ZsBc775ELPHs6YRuHjtSesDcBBF2qWTcTpGxLX46xKwMfuUgY1vefrDrjMoTyyat6jP",
  "key10": "4ReRWWKT6qJSCMs8HG3FEjy9uY2dP1PtfZ5NznjC3jdyACFAK1GsiW6NxtrpmesHV6hccaTV4rTaGMyThAMSBp4f",
  "key11": "5va1yh5dc2Lof6p6XauMCrCmk8Lk8kh759Si4pfh6TUE7via9weCDTZPWfGk8Y7NbV3VPRi6ey1bMSfpmorp7yrR",
  "key12": "2hVbWs15TNk8t9g1FUuYemD5rPgiobw2rwDaejbb4Yqwh5S4STr6yHKmyq1YnVYkeAavpGgksq4YCr5g9nJaAnKi",
  "key13": "5FSVdnJCrz7G9hykgjmwKyfdzarRfQq2Roh9j6PWn2KbNARV5ejkyFhHF5hLfrjSbou6jmmxS4oF1NETMy28LX8C",
  "key14": "XMBLxQNqQyFkokUxejKJtSp2CTKM2py26sjBCxB4gYCBkjRuGURfSUDWeXP1qAK26zet7vfVLvBHNf1iLFXEw6A",
  "key15": "13on5nEfqdho1W1bBkgTVH3Xe5U2PT7TQkCArEkJmLT3Hjx1KyrHFffrd18Cg3RLEsgDSb2qJHasSuj7NyQcHJd",
  "key16": "5QXnzG5pwTSNQfo5MayhHpPEnQRBB6cwd1x9EY6BgRPoNx2RWqCaGY2gqEjJB2j44NUujDd8bjH9VwLPXXnJJbAf",
  "key17": "5nDPwxSiMv9VcuQDbPoQYHjDGFQBaFPF8SJLPEiifhNVRHad6WZ5iBXr66H8mny863ySGC6swpY3EMyMDDps5uhD",
  "key18": "26nBm7NSYQmyE5Pdo9dT1Cp9qLJvfPQuDMPrKgWTAhHJCM5zFSXjTggiYRRnTtHvKWrdevtijgLTk4X5jX62L3wL",
  "key19": "4xUmPachep9kzAPnYb7YCDiEFLTBBF82gbBk66qHqd3tz2r7XqJTtwsxqTi3ELK3rkUNpMa4GAK2TcpgjQmKqyhj",
  "key20": "5eUJKxXwAQcJGmMQcVwCkGSTDu2PjT75qN6QQNKdLqXxuUS2VCBfZRiip3RyKYFijHyTQd48skBTB533hsY6YCyw",
  "key21": "3XpJUstNfxfCBe2HDrgiJzDMFWnMkYAD5B73RCnL2BVXE1gTTw9buEQJ7jgVRoUFCu1dSoX6UQkbQcKaQMtKBhox",
  "key22": "3RWx7PgPrwZqrEU9EDvqqEysrZTYuZ4q48fPu6vNDFwiek1ECVPQNx6giEDbtLTddYDRXQiDpuTT2fC5VbyQRbcB",
  "key23": "iWBmB83GU3jmHQ4qBeYpiNsmbC5UYgRSjz3BbbXrymmJY5PMtkckH6kCzFBZoXvbGz7p46i4qTgtYhpa2Qeiuhe",
  "key24": "4QtPNgf49r9HJKAU7uNqbGaMSmEyMP33kBnG5KZ6MRMFGoRKAYkh1YWx5my9iDNpqWmwXsQwLoUQcdZxB6wc7gyG",
  "key25": "3xzNpMXXooYidariVH3KgDHhmuKFj7BjkGJ1TMtYdtG9y8dt3VfdMfjjhm1QqhXFzsA9b6kjZq4pUGGqcmscgZE2",
  "key26": "64X1RtaHrgpWJtjTfdRmze8HWb5mmonZ4VpTYZhyQyHDJkb3X97TuSq4QoVGHSYu2V2PPeBE4YddMrHNNAvZY4jm"
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
