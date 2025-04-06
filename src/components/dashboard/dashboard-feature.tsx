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
    "45R7Aq5dnWR1DXRTXqJywp8G3cyKDU6TqudgT5WxptK5FoaAqyegBfSbJ98Xw9BaLcquwsE1gcVh5sXGB3bpgeaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFtLTNwjM32AGczHHiE6Cc4cvekvT69JvpAcvr74gj11spq8P2unjdc1vUdXDHGEvgWGiKWHmHiPeSvEAUdpXMz",
  "key1": "4RSrkNkMiNHoSXkreXE4LaDVqUaTzf17jqwjC3L5Bxi5kQGftzFnop1mWV2FboqHrexePbBwUXg4zyurybVwjhE4",
  "key2": "3yyc5QkxDaPhkSu2BNY2oyAHL4ZSxxXNfSJNHtfnGKjGfLtuk7BZyWc6GWBBNxAtFJvHVeBbfo3NSmDmNHjBSjX8",
  "key3": "2r7vDh2Dfc7iQdcBaYizqpUYAdidsNaNYWaVQyeDUjppPd1ANQTsZLq6VPwTsCnnZhd7RZs6VaM2dTPRDjgq5aQa",
  "key4": "33NoSZUefm4YpCd35CgD4RsgWs3SfTCBdPi9QqLKB1H22jUBNk6V3tn8uytxa1hn5UMr96AkEtBhLCxaKWGWropk",
  "key5": "4QWwMK85Rno5odFfuVNLN9xY7w3j8UEmqnPg73i5hMFPiAe9Di1ePsxU2fUFakdiifKpCdmf4ThHhRh2RnAqGq7F",
  "key6": "ES47txoSFMDAhwkJX79f7g5JV9uwPDHdV6tQryrFaBwhP38AZwBCfT4rHEWhSvnpymbNQWuMsrttMaGoPpquuJs",
  "key7": "61N4EnLuaL1UBVrhzDQS6EGti1Qq3gveFKyaHTwpFVytPQexBRuLzb49k14JYBbTSL3Te4Q84QJyVPVoQgqpAueM",
  "key8": "4pmC3enNt84u33Ds2149L15qJkkfxmi3GYEvovqWXJgVwnGk7dH924ixv8KrawzLbXqo41ZYatYgKSDt5zfyzqMX",
  "key9": "3MmzUpfLtCncEJaQzBxeaTLm13AQsG87AYX8RRFJM68oLQyPLvZrj4jeHEc7ToKHJoFs7QJbc8QBqTkF8YTFcL9F",
  "key10": "28ddAGMCUr4T1kfpvknM1Ne9FMCYPAp9SLohsE41Z9Hr5TcRGiAtaRCYRauNGTk5QxzX8gTayvncgkiioWfzAPZK",
  "key11": "3erPvZ9ZbsfcgYZhEuJNKFbvDTAdGW4gr1bCZkPG7dGCba28xPSiwWdunGV2hGAEJSV6BY7P1BRMfG5P67exH53B",
  "key12": "29QhX5bNRT3u5jZLFYC84byX9Tjm9Un9nSpKcfQ9nRYHjMU4M2DmfurUQXTmiSMJ6VezW2orzTZtpfcjrfCdupNu",
  "key13": "4ZZf71Me1yqCfnkHDBMWiGVUvdTnywS2UBBmjceULirZricRz2rNCk4wvYeYrdHmVyp6dJYnKUjdBc7JMqsnVVoQ",
  "key14": "62M5vcHgpFKDWQK6AYDmKcnTqTc4gtt2LUgvbGHKr4pXixrGkhrdbCH3m7oGerynRDunhSi4QV3hGLxU8HiNmRFE",
  "key15": "7gHVCh3UtX7LGoe6c1Y4DNDHoZiwjMrGyY3LQQE9znRdfFv3v4D2j8KH39tLqZKWNtitJu7s5Q5Cs9nRnpGuQPT",
  "key16": "25Etmdr5nS6avF64E58t2Gzovdun8UUSaVt1EQNWDSPe7WuAfuwfEJWiUB1TfJAfBXVa13jvzRbpbAi9jdGsrUKn",
  "key17": "RKYPiNdujihgBGTUcQnMyDyYPvwjPuYztcB5RJLkJo6m9fgsGZCb9ZtCsCcb8qRvbwRHAgvLAyEbcS27CZjBXof",
  "key18": "CxVYzkgZnbE8zuCpBZBut2WGGdDVLGbAdfRPVYatG6RJtxmFU5J3YUKMJ96UKAUzqo424m66dpqLiHTLRQHebGP",
  "key19": "5PfizGWD4siTSwV4PdssWfs7qJk9HhY6KsyHRt99zP2ULwArZzRYfWoC9ahpxmbETWqe7ja8EMxe3bYk5RqwPn1i",
  "key20": "BeCVbDQMKd1g2qZhiEicoEpxRo4rYVVvcwobNt2ncWvmB2VNS9yP6TcEuQDUzPPXBL9UgdJsfbWzhdqbaSwge6R",
  "key21": "3w4VFr7jffBfDT6KbXuc5YFB1ormxebbHkqy6US17LQqojcDsq7BQiaoDZ8gNsSMqYdxCV1fRNQ2WmUHs5xSzXRV",
  "key22": "3ZgiajmE3M3mFbcD6vAG33p4Wco4ahAhL7d7pcW6PJxRabkYXSTf7nfgkJJzeeewV256WJqZnF7yrL3sTMGxQjFz",
  "key23": "2WHc9rNw1Jg6bjg24rdVFU16s89e59f8oCCrqHPYycyhTHgrVUCnL2fwxEKfjBXDi1Aod8JmJaN4tgSViMSrbtfe",
  "key24": "5TJKr8o1Q4xFBQvwqaF27K3Dp9dTsLPig1s1qhTFr4mZPBRgcmt5tpz1cJYzzC7BCDXT2iSEVuRnDzFDPbrgVJzw",
  "key25": "2XgP2LGoLbPyJueckEv7ZeUGU1YznytmkDytggur2VeiAYtP9oRvotLMHRTqkBn3i5vk1yU4iLNeQRmRjN8A9Ahq",
  "key26": "5wHNzsA6EiQ6SBxXwnk67epUTM41PB6nqnipENV19yzWCNuLvecPuEHS212xyUMwMciybxF3jFXMbgnJApZV2pUq",
  "key27": "2C5UwEMT31cvJc5HNPj3xKDiqnJt1CskKxFEA9BBNoxZugBZ6EuLT3SCVYWXP8upFCMR48GKNjtHuayKC45gs5bv",
  "key28": "5u9rLBwdccUc46sqoiBrG8bQhY5k7jzvmusSBh2LdEEdzVC4yy3vzo93hCsVtLFoapwx9k7WeTbMJN9XHN5fUtFq"
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
