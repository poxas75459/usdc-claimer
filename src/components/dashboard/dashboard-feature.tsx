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
    "2bvKcEFi21hsvhPJwSB1vhoQjQr8vduxibgamzZW2bxuAK9U7WpimghqTXCLX5HmERhVgf1ntBFiAnQJc2PuKJCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q41C5vvR2JhP7mWZJZBke3pdbfrNPosTs9mY5LsMPUj2i4bSysmPkSZGDPyxkjf8s4gAxcyqWTA3gtXmGdcNmPH",
  "key1": "5GiB5u4acHaqAYcon9gK3GPV6d17TVaBE6GDB46QmT8WXbCsLqcssbiTsejW75U3Hk2wf29KTGuUivb3RBwZrxoh",
  "key2": "5AQMxhak278KioNzgDGgBLbMgar7p2mrPomxedET4RY3ULRXjFSSFkbZaB1Ed2MSBMEtMAyuJckBhSm7PNxT7VKu",
  "key3": "4LfRtbKt11sUPaARAqdQzuyBLQUEaPjVRJoKk3huGA1EELzhLZKanAoPKHPJ7NifRByxECKQQCnyKJT7QWh2YAkU",
  "key4": "2p6YTw3zEpUozzest1zF84tTenNEgC1Dm6eHTkNmXVa2U86KD5Lhz9qSyLneowZj7sqJ6QpkhG9mozfRq2f3AJgH",
  "key5": "3M3QzErddha8E6vkeWZJBaSxdTg1H6Bx1XiDgo1oBCUbSdHLtYB5X2xhmAYY9eD1Vbpf5KtEmHpYm4tptU4o9sgK",
  "key6": "365zD2dukNAxMALA3GcTUybo6k8j6hwZ1mD4GrkBZ2de5cpubM3DkcnwWbjQ2poFGGb1J1mWA6Ns3t8v5VewTVzR",
  "key7": "2X8BGx7RKxqyt7eu9sod7ParLLfS5JpKLoWSchULyYso1ard5JjBdjwNCRo6RuWtvZscvH3CK55tvMTPncM3wz1J",
  "key8": "4PWFnHceFEYhSMkqcpX7Litt6cKvR1G9vputMprKiSkKt21HK3VN1NQ7UjgtEVn1KT7C8PqyADCCekEyB5efZw4b",
  "key9": "2Zdc4eCdxegStV2aY766U6WQPfXwGdjrWJiJQnUFR3JRKE7EUA7ESeTFgaHGuPWx4mUi3NADzLoBDvrqe9gzQDnw",
  "key10": "3o7iyNxSBn84J2cEjQNxEBQYrMxD6E8t6Gnjt8bbrmEZCsyPXfX8iYDVjTiZdJJfiDUPWhbMpnvXN5RDdtPtwiov",
  "key11": "5cxvzjJKHwjxAE6dvX9rg6LnwZynqERW3iE45iA9KfTP4RV94J1FJqad7g6zV4vPGzQT7gLU1cpxy7WPy1bFEUK6",
  "key12": "4RTWkogj8wUh7PhqoDGhcgWDzcj9XS9HRcPvGpnEfJtPcHY7TwX6o7XYGU8Wy3h87TvM63UMU62n7E5HMBenuq1g",
  "key13": "mjjcj5KqFbCdfupNw2Wu6Aumrv9PZfuikCmuCUoTVMehJYFpErG2hXcQA3Rqcnudus3VkK1ERdEwxELXWxsJr6C",
  "key14": "jktimyYgevP6Vbn2JX3xNW5HtiMv18hzHwapRPeCBMKEPQHti1nK5578TEpwMHAvMScgmdCcJadLj6UQF9F2xAE",
  "key15": "5TymPaLkHmXdTFgDSo1wA5wQHReACdeqL8RXYJBE255dyTvZ19UEYfQKxjSsxJs4bZwc4DxL5FNnXPTqJJouigcT",
  "key16": "52g7ht4CHsmUeHpBw7RwcNV172BYKenoTspjvT5qPZbdz6VSonx6BLkQDVyaqkm1VpSmWKPyTCGTktHq9MhuMPYS",
  "key17": "4GNvNtR96tqGrsmkSgeMsQdQcuaenjQNQXivTr5dxkejweFQrcHKVTFaBz7rMBDZ32zPtufJcgiMQVQUBiLWyJFP",
  "key18": "2apSbsigiLMmQW67fD6SshKFYem1cyXwUQajo1BJ6DRmTmMeeSUWeSZTWnhRYoriWtVU7VYvi93dQFe4DxrURoCh",
  "key19": "63jzRNFh9xdu71WtFGKxH2hf6QLXxrkVrCKAYvHssg7S16Mpu8cUEtv6VvoMceRCZgZuGiua9sQ3H1fXARD4kxr9",
  "key20": "3L6pi7cgJbwnMaHntubdUaM9UAAYKPDwsKzZ2mzcZmi98bt7nttGgueeh5oZVhkZ4C5U18RcYPTfr9xFFAx6wPsz",
  "key21": "3KEXhACkJSFdt4M6rwNWCpy9um6UraSFEUMfZ4o1pjWW7uxmaEoWP2kFGHj1LR25WdNVnvyVn9YkYNLd8nt6WokP",
  "key22": "4JRiVx8odEjUfpvFx7ftFPC2dLLVtPLHFayzx19BBRcFxVxDH8DN71vm2Uw8AiLtjWXGzEZNKXAxw64ePYZ4NWke",
  "key23": "5UMWSfG5LVyDQXmDzSNZyG3bJhijW7Nj5yuiUtW9UgYQPBb4Kg7qUevnYpV2Lv9RqoLXWoXtkUq8rY51SNSLd5nm",
  "key24": "5q9UEq3fgq7zLVitTLPJJvQtayDLYFdG1Lt6jg5bYwB2UbnFTbQRnBsLBVLfmqjE5npdgpYSdV42qF2UG79Emo6m"
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
