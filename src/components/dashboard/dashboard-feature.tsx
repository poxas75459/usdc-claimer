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
    "dPRiXGke2esAd4icCY63Z8M1tjJoCAzxtbfZwz8YtNfVgkQogijRHKVsfT49bd11MbLSyUFbszTWffTExtnRUfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGu81HybcmuAH1tB678LaurpJQu35LgB7bCNQhuhrT719qFHwxMfmhzvepWyRbbyUGjgQLGJuVS92e512nv3Bym",
  "key1": "4idWtvSXnrvedhJc455LYQzdZUwHX8jbxQdUnNn1ue5PLzqFeSLTWHdEVDcBor176zpAo5Zyjm47dTbMHHeCiaCE",
  "key2": "Cyen1sPL2c9FCevxRSvNYwXEeNYPUzrXpZCXnYBdnDCmUgu9YbjFtcKrsyQWBqpHpKyZ57LQtmD2VAH5fasyRco",
  "key3": "4GzcdkDJaSrKNfetNg2jVJYado7fFAFHPJpv4QprvpyB1hBiS4bjSP376JEjHb893Bnqg9VZMpQGk27fCvjXyWss",
  "key4": "GjDcR7N2GGDjLpDKWVKFq5HyUVTnCj6MgY1hzW3T2JeDEy8sZSySDYWaJh9ypaTtkFKEzWMmUdA3anyPADCQXJC",
  "key5": "5HVxGYvMnAipq4zaiyRz7fV2M1Qqm7jyU79NVXGMA4AZ2vxswzyGkRQJXhofsWYCymqXZUzVJL3DgUZrqC4FFL3W",
  "key6": "5gTszCULacuthTuu36cKnVY5pE2dKYDazT4ZoewFoe9PH39j1hhSxSkEAhfKFkk3DqE9Vovwmeh6kzBd8dGaMgGN",
  "key7": "3HHixQ3Bisjr9X44pxmGa7URRWu5bBY9dhuCHZJSTSZQeBQUi6GvWwuGhmes89vNcG6oKiLegD4xN38g79MpPbJ3",
  "key8": "2viQZaCf57AirymJ9aPN1iEU9iVCuE7thSxnmVt89MUu2PvLjTgbQ85d5dTJq7W5Jxvg3Eo5YyKhUiyyHxEuGLsf",
  "key9": "5nVDddDPrgZGJRJjqERFmPsE4AcvLkvEfNJYdk8kVYDVWe3ULtduQf9c5JVn64kGNiKUPsT8nVYchCdMx3LkBJbC",
  "key10": "5z4aZ4Hs8aNaBqhJynGuZk3WK6T6BvmZ7A4AfWSsW7ZeKsF226fhMpNKHCSpZRQSfQ9vLqPHbj74tPQNZvfP96Yz",
  "key11": "z9GFTcL3pysfVjSQ4zc4sUVSgfwxB5pm3eWHasMhnkU9M9yySj3TGfkY4pG4xjDV5Lgsf9s5dDJRn7LCg2GY4h6",
  "key12": "2D2GMZ1PBFvV7HPeDfV6BMjSGD4QXJmbAnrsdFrZxp6cp3B2VYRwo7rGAaFQzeLn3gxwf6x96v8ur6jto9BaWA9X",
  "key13": "4pRbY7B2Yy9aJ6wGN16fegQX5woBsibeRXsttFsYK9WMhL54Nn7Baef4HxVaALdPtRfN5G9m7nYAsc4hySpcRath",
  "key14": "K1Gbpy8uyYVcbyxYKbr3LS4haxa8dbNWuSoFjjWvJh3q8aSiMgPn3wh6KFX5y6Lq179jPXapvWyPND3YZtKoPJb",
  "key15": "3MLkg1b9HEeBTayg55YNsWFFmoWcbM2fLuJWxJpAKsZjuHTLTK2op8PJm7RP1jvLfPtvTRdX9yJZmZG4Hr2sEZwA",
  "key16": "GZK5buiDzCWAS1zDCJAfqWdcKHXLfxcaiztG1cbyKZsvqph4UnbtMbzeLZaQsQDGqoEdkPhuosipqgougiBFLkd",
  "key17": "3x558RdbzwLqrwa6o1R5oSW87wuxX9VmBTssGF4oSUGPWuumLBN8sGUNJ8KvRZYpZnkUQGLMRBjDH7MCTJp1kVhk",
  "key18": "Dw3f1xaDKYkb13NcsDiuoSad29N5zu9nKr7zrWbVVKM4EtqtqWudDYAqzFjYS7y7LniqTsWdBvLRjMXKuZNyXj1",
  "key19": "61ggjSs4WiA9E6Tp1c6MCTAKsLNQSxqindy1E2QdMBAJ2zHfEubWo7c8FXj8neqpsfvhpqupierrG3xYY74hxtrX",
  "key20": "2YJWaQ3eCQWuqAfuutHkRe5shTTHikLqyFmbNPN2YkuqVZN563weTHxv775uxPg3CQTYtAvumQ3XAoQkVNqdEF42",
  "key21": "63q5TZNoeLFNkPPLBYeraSz3rgk2ToR3nsfrDMcTwJnknX2HHg7Rwtvj9sNtu88wyT7ptjYGyWQfXibc6GfbJ1q6",
  "key22": "oBYyUdTbGfFvYfzZKFKje51VAX9gzREJ7QyKQME3s5GAGhCw568MA1Kih4ik8CQq4FT89Uo4Vffmwd25zppKp7G",
  "key23": "3ukotDVjTe8G6tbKubcm3v9RcG9NovQRZhKBWDdmc83UrXZw63bvGWcVkGE7hMJ3h2F29z7TX2X2zNoVD7nvYSk7",
  "key24": "UkjseWW6ynyrLSMRKn2N6k39UECa9NPbA9Uj3BwPYFPXuX71e62ewv2R3xpe4v5U7eqY3C4tkeCp6oh9zu3BwSS",
  "key25": "3yLHLv6H3EZXJHEC22DW7ozLZofsA8QnEs7aa1YYJHL2aoBo33y1Hbf5QxT591dwsKGVY4rsVranWpLPEncKZwwq",
  "key26": "4gnkrTjC2VBqkaadF8rdq96kHee4ZJ9dPCi2Xqp4ocWbQAKHNKTSHZi3NRpAPFbeaCATNBWA8DHs42aaYJKnAbrK",
  "key27": "62LQ4hNCHgskbrVn4jDXwA1gCpHfNnNizix2ZSRPN7grMCoB8QXvDvPL61w7oakzuMrRTfzvjtRSGJbG8Qburv31",
  "key28": "539Excv1YmyWqeoyvMAEs1n4JujnJZxbRRdWMAW2h2vdSYtbPiHxiYUwVHpyvN2BmXvm4epwq4ghubV7jGT8tL39",
  "key29": "4E5syW9Xwo5Ym7SJAYRaC6rjMBssr6wTt2jyzf5vrzg8Nia6GiQ3sFEKTkbNdwnJm6M9zFFFhLS9ArCiwWKDtuNi",
  "key30": "P2gvi96h7YttWq3ZL9shJ9HiC6sXxGSC85eQkC1bo6fuJs6ZvxRx7Jw9P2TAdqhux5zC3CJAAWFvvkaVEVPFFdT",
  "key31": "t7ourXP7ZoJGPYSjoZhx4E8hyHbHb53vWBh4AApbeawCdXqraTL1PmWE5zHg3drYjLRrHUTwRg5hgoMjywHkw41",
  "key32": "2heR2HDB8hawCCPgjeCQ8XLiuEQWrTkxoXBpDg3Ln3noBnQGf415bZTMniWitVgPsd8osmzWD5uireebw1yuG5w7",
  "key33": "3EhEjPa7qjaab9Yz6XXsGFA2i6mzusGFKDHJyckvinyGnYz49q4zSPoReTYYVeGNLJNWC6LNiHtFvcKPbia9ZWsU",
  "key34": "5NR5o5M1LjbE9PrUdMJBGSNSx9fzirKtt3752jdiRf62DAgBjaetra6pa8dZaRkpysjAVr7aPU9fQUXmWCG7JEBz",
  "key35": "4NhVYMWASBRYVsMoGjAy56SidVhZ2aw7AeEbrNkqmwZ9FzJn4k373xYVyyUJkCcHKSdGv2qDyuRXFPMcy5irbXA1",
  "key36": "5qC2GC918n5C9HtLMnxskxnophE5mAWmYx1T9mPNNMHLghwaRSZFA2ntCqgxENr8WF6UEMEzwn3ZjbKwx6K3QVJi",
  "key37": "4fjTdrD3c2m24TKaYi5yXwTpAmjMAXaxpwCjfEmE3kcy15Y8BbZCdXtGxsh4YUbUsLaEErULPkEeqdqohc4s3uTd",
  "key38": "4pu82dEp6ADfvx5xm8LMMAzhgpk1gCG5s9VcYKERB7wePd68KvbzThqeyYJC7TeqH1Z1mEyy1pD7kmwxHKbMwrVp",
  "key39": "513yx9rtvVp1AekxXGbLHVXD2pjqLKWKJCLVKq5hUWZ4rnd98YpfEw96YBr2RWQDjQE2FmR7sjfCvRi8P4mPct87",
  "key40": "hcrFFs5rUF7iThxzf6Fv3uicXcN971kd7yCZBprGJyBMHTS3gEtv1Cj82qpARWFPK4EH1iUsneKeK692y1gLk76",
  "key41": "S9f6LYZPypULU3q44AwXqv8FForzjeoGzGWcAEFHpW9HdkE8MBCCDsPkLeCLAmUqXkUJdwbjEXFFtdn2hy5aWkv",
  "key42": "5kwTK7GB5DVoj3TrbuXkwvrUe3tJuoAZznYsitASEsNYy7qeAJmVLSwUxSa7fjmFnHHdrbXjKaK9gDmgS5hD1tg3",
  "key43": "67CaNi7jAfpMKC2jDpUeKEYiE6uuHU4AQpSPkoxhszvG9L1nmaWzvTHuCVLfMoJ85NZWejBKUGEPhfzADYDpS4HG",
  "key44": "4418CgVFGdKLF5L8jr3K2DB7X548GxVFw1yP5fW6AKpoDV5ojkFvCFrL1pji92HrZ5vXPKo8aroYhz6a8mkooUJR",
  "key45": "2wV1hHN2ddbvoqu1nL4GDWBBDn88tTTVRh2k7DkxCSK5WDBrDEDBE7GT9AT2RZm4Y1JJ1NM1airxT11nhcrNdb1b",
  "key46": "2mQqFWdBtzuEkU5RpY4B1kTfnRgDvqWaWX2xU5q55bsYp495YqJY1T5mDBspEVbRZPYAYdXsh3HbJejCN4DTNX1T",
  "key47": "kQLdK5ejXFUdmPwpowrsurNsnyJXVAHwp2f4LVTjS6yHoxU7VzsDWGdiatnVU4a6Tb8a1WhXbi6Gfg1WivzxdrL",
  "key48": "3k5PmZyPxyxh3KL5AQfW8U7DrYhcKby5tEhixEybeRgBDrgJEe65x4yebL6ZCkEwBa9TQ9TGov7uYE6yuMpV2zZX"
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
