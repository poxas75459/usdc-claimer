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
    "4VmkNhmpCLpzZzkGTkn9SVGpGGDW9rHeEQmV5i62zpk5jwSUBq4KgC6cpGmErhuAz78CJiLdU3eWrkJYB9r1Hat7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joJgPZouLCxQMoFJUDBxsfhkqms1uvEYf86Kvhq22dygRmv2nJ3PhdEXTukyXePVUgfskHa7dDYwmAMN8P436nu",
  "key1": "2Q6jsXaHuu2RCh7XYF8trC5rzCf4LaSGXxBh1GcAt82KL4UQ2LcmXLFfjsJ3HqCPwALmb15cxF5XYUW5wQsKequk",
  "key2": "4tbTq5n8BtozKYrVypDgka7FfKZ875ZeHhHrh1EAb38fLdCancEXgppjJo33YdZPrxzisfnchoJTqRkxy3CGVuTt",
  "key3": "4XHcZJ441NofT89i4nupckjG3fuGRsMVFwMDnn8da4HbfHHdUZUTG3NjEUJ2rhqSC8ToFxHiChYkVHr1kDW91k7H",
  "key4": "5qvEfDVFQukY7eonAcwEcomMUyZue6B9VY7jo7bqdy6gjf2mSMHxdktuJTFgUxtR6NEL8PdmDkHyTPAmYmLmUxs6",
  "key5": "5DxVe2Y1vRyyDsE1Rvy1tm8xHyBfC8eeJzqFVKT1xv3AdaptwgTU4aCqYeoBbCiirnZwovA5ZboQYgw5TEDCeWQ9",
  "key6": "43noxn6dsKvNMJBaWD3ZhZZp3tvG8VnYbxroBNmf3g98UeySrnaQCLsbfaE53EQEHPas7amraoC5AxUPxueCMeiZ",
  "key7": "5Lu3pJvMA2GrgLDoAn4KtahXhKwaa9hQzTHBSXjW9afzXwkZWFR2XBMpmaWzN3tVMB472rfnmrThzQZ1PgAkvrW4",
  "key8": "vc4kLspiHeNh5PpTRDaDkLaqh9vTh92wqX6B55r351mZNyS3B4ytcqqrpzV2oRbfkPgNVzP6kZ5cmXmJn1D2yv7",
  "key9": "4dYQmqPpJZ46Kye9PUChEowSe5Vf5NTGT3Kcp3sA82R62ezvwfnCrqrHiH2zaeLHvNxGKbpvhVyduswRaQai8Tb6",
  "key10": "65XBrajLhSwdkabpXVKq4y4n6K8ge1wtefkDybYegTsG4UW9R1EUef2J84kLWuHBst5cSYbbV6FnNwtkZQ2vRLMh",
  "key11": "2Y8e2isVRoiXcsS252whCtXTeMCqouYdzazzSxfoi4vh773dyazwucJXFgWucN7U3XTG1ETLNA4ULgTvT48dMDx1",
  "key12": "4BdGA7aBo4yuY2EBzBKJfDhVA1f138dD5NFRtNmAx5KwneaLPaWEK1RWdhgWXirdfMbcVPwkFsyT91VzaR6Kz7We",
  "key13": "5F5aYBTGEkWv1qcnvXTFNY9Aocrm5kkTDmcvEebuZSQuitTKmMGaT3VXj3LCF6XNnQazjjVW9BRbGSQBFxrfYJYM",
  "key14": "tE8NzuU2rmgaAiDq4noqbQis1YidUBJ2q8y7EkDzbLaMJUAggtF5E8iztJVdQUpNqdK2KHTkqX4yC57atV1xDNa",
  "key15": "5quviAbg67WjwM8AzQ7TmTvRYhSLrEb6sT57vMGgF8ivFQLsYct8DYV4k8Cmt8WhY36uyt551htsPpryyWA5EX45",
  "key16": "3jVH914Gueh4n6UEZgoY7ADYawREqvtfC5f9xDvz5VMg6boz8k5trFy5N3hhRUpEQyKsn6z5NXHJUa4WDr6Wnknn",
  "key17": "38okWyZhUr9n2jjunWjRDZTqNRCi59W3jHt79NVPRfJjhiNPFqj5E7kotnxCqfwV1qB7hwb2Twbm6oqJMfkyuLh7",
  "key18": "2CfwYEmH4wzADEPSdY576YxKxQjXUiYikWUtaYHU3sUn6sCjwn7urb1H3MVrsm1C6ftmQc9qCAcv8k4to81FvzB8",
  "key19": "5Q3GHUgLA6izbBBQd3TL4AzAAtYPzuy1tnpU1B7zxDoe5Eo3GUAJSsMKatJBjFjzZ6miwc3ysxtSkUSAVTEdveDJ",
  "key20": "2yRNXYiNLwjG5SnGRdMdjHpg3h3QmSaVhBgS8YsG47eEG5hVrBS2Yvc6r2VvNnHdY4KmoktM6isTYtxGnzwdic68",
  "key21": "3n9Fj7eQXQzQnSkAZ5Yeh5Yh8AamC1i6mzEKnVKKj4b6PGLHKKyKgUxzwj8imihjS57vc2YxuGRiotrkYbUC2DQT",
  "key22": "3W7aujruhNu65u9KAj1oRgoxtgeoUhNeG25TgVz9NHdbTJjof4UEwWrRBe9YjeZx3pbndHuVUPjzxswEHtNnkWcV",
  "key23": "4Noy7AD4zkABhK9Tvc2P5FyaoBKtjiuTZXvWv19Sb1TkcwePQaF8yEuFZHDhfp3x3vjy9A4LG6MotvuuKpgUoSj7",
  "key24": "253oUwRDYqRYSaGFEeDTAdhJdA3F4akLDZ12aiu5BqFs2MLVM8quRbmSeh9vCCV2jAtjppwfcBhbQqxQ2vp9jqQf"
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
