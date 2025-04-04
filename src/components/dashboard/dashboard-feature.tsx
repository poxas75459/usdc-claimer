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
    "5BTpjdxBhxGeUBg9huGiJVuqsMU3fY2FsjTdbJNJtcKx45TPf93pBjeqSqcbgGFzR8PKgxeFUJemsDvynRjPWuWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xf2HhBCPXKEF8JkkeesToc9uK2VnmR5ztCTpPmkfd2bE4hN3qLGtVzJDnP3drVYAXNN1Zwn2vnDCEFTWfdL7qXJ",
  "key1": "akr76hXUwsbn9QwFiSE1sH2J2W5wLpFVEGMxfUK6X9eTpLqyj8N4T54k6Nh18XovSspnCLYiwLMoT2tEEHPuEqr",
  "key2": "r3Nq1m73BabmkCMtkTEWzmxmUm4xhLc8nbXCPof3Hhbyu1bcKi6rBPTdSB2dMcmAmLW4vcdDuykGpo4HBnowmwX",
  "key3": "5p54n6iDk68xSWz74r9K4iZ7eGGdt1yyttobEDL3EBZEFC1MP7rQ6BaMSeBf7B67zwJjgtfxbjkseFF4hJHZf9Q6",
  "key4": "5osaeZefnzpy5Q38JVE1aFQwjHBLkDGxYUamQEbhgjiR9TnC24wuvNycPJzWJ7m6X1HDMLaZSpheHdVyVuo2e4Pw",
  "key5": "4DxCYNiNc5NZPZsfmajt3uWPwznQgXMWwqfS9s5xt1SJtiAdDQK7udw8DSTccECZ5tpBSNGEGnVo1hWGHKXpnqTk",
  "key6": "WxkQKmQzkCbramH2hRvwKtcpk6kBzDLWupivDoxSdSAybiznw41mKpMEexcc17V4s8VfiUbxQVQjY1kB2EcVpmL",
  "key7": "jC3ZLk4WmwWzPqDZfnww3d66NXBKAKFDKFmrTnAmF5sKtB7gSuXuiy3eLyCoAwCmBJfvcMtnsFe6ZrVUuzThdgh",
  "key8": "6XPgBtrCaCZoighsQ4M5aRhDg1UkzpTjAj2vPoAcQMvVzzHxjcND8WAgE9mt6udU2xEAcM21Ab35buGZA2WZPzc",
  "key9": "4JLMNV9d5DG6ERbDkUiLhGjmkrLdeCjFSZtW85XE2yUnmpwwg8paqsjWPpAStBzF5jSCmi7NuMwuo8nWyeVEqX1X",
  "key10": "xuauzABwuH6EGEuNCZTNKqs7sKh9LqiaosgKAjGXvVikGK2j1pHturJmpvbuUnkgwk8wnqUKeAk21vawk1CFh7y",
  "key11": "5jzc51ZVvJvsFP14wMsKtpM8C5sbxtZ1Zs9Es6z4rsLv16tjfrpaUhpi8JPfqPJUec2w7zBGAGs7GDmZPxe4oWsc",
  "key12": "3UEnXZmLJEbVoyUXa3qrnfkQMVjs7HWUJk45qZ196QYWu3rq4MYUmc2LJfXRVwfXffJjhmAvdLyZNRGN7bKbrpPt",
  "key13": "4MTANeu7sKW2mGKrGV9jKSK2UMZ43KHqsEDNmpJo59FLQkkTtebG2V5zWKGXQjyuQoHkoJnypNE1jbRifsKHjd1o",
  "key14": "2JqkCvSctCfRUXfC6WpKRso7Dsya5uDWzfiwgAvPpaVKno7WrDHmnRaNeUZLnBYhn38FNghLUMqCL3kjuH6TgydW",
  "key15": "NqjTy6MnHA7jyJkV37MMRD2zDAD6RBpkFMT9tsfZMA74pt8Vi26rc7vinN8LSGZNEgrhh66r1npMTx4qJwrPaLb",
  "key16": "2Pfn2d6NVviB9JjftHorfYsa1dzggMBLWPgcb2te5ptWDDP2pNsVjb38N4wijwHWh3xDxr1ro4Fs55KiDCMefmrm",
  "key17": "XwuMi5TzkAodaaprC97NcwwTCRakKQ6YgVUKnEtDVcfWdDwAuSL2UgCd2coJmc5y22fcXpgaQBgFEtR9hFtM3Mx",
  "key18": "4n2kT3oSRnnCZ13WFx8KiQut9FSZe3LFJKaHkCyEvExmCSo6yn96TrjrXUE1rTNpm4FFWhAhDoFKpL3ZeHP2gW7C",
  "key19": "5Nbpr3vwDCZ8ajVEauVDqKbcjzkpTrsUZn2RLMYoCEXTR3toJuTJw61XWeaaZLRbn4LCB9hiUBDydqE1P9FLipPN",
  "key20": "c896Rfgqz4LoWd2cD8ynkL4uihKzxZQwZMwJTg8QCVpcCD5qZv6mgzMvBEwjgCvD1xozcvH7ba89Tjwee6znhjQ",
  "key21": "4rmGKd2m8GDhJVdxPDhK5jgmbGJjSt8cCnPnAyet1HAGody4G8JRGzVTASTHASZh9zWabqNQCAY12EwDaU4j6oj1",
  "key22": "2GzXcJ9NcVXLC29ayD5Sj6JGktw42p6pWAkENSie1vk61LqPaxqJGFnTzn5LUCHWVvqpMZhyofotf66bsrWDLg2H",
  "key23": "oVc9STYXFZsQCkQgK1GYJsqt9q3iqaPgoBvA2xzwwC7MibCuwsFuzyHbcPxQkTuPvBfSLcmKigSNg8FkVW1JJ3r",
  "key24": "eeVHQGSET6HYfdERQjcANcxXYUUvEPc1ghvRrNKmHsAfkdsSoySqW7VSb5oSN92AypHGJp9V6F8YVeVx4SVtSEi",
  "key25": "5tEeQMiZ7cdsPmnHX1wy6KbPL5zicjN4g123iPY5MJHna25T4kn2DpCm5XrAG2HG467tNhr3Df1DYGnv4LcYAweX",
  "key26": "3FWoeLLv7XHayfYtdkXws5BLTWz5Aq6ALZwbH6GbrgbAPYnJUv8wxqHid9C9KiVMJDpUXgsKom3MyaKwYEv8Pn7R",
  "key27": "2fS3zJsfFPERbg6sWcBN6smeVTxNwUQJeqWHETDB3NNZw4Be63PWC8shitwCmxu8PpftUbpAFxKBu8p16YGJazMx",
  "key28": "3yboxJc6p53ufTGdoS8CjrrrMg6n58CUVL4GmycE9EH9jMFVWwfLccFeUPF3GX5DpMUDYQGiM8usuGXBZAi8ezm",
  "key29": "2LcVW7xP94q6787Qqw6msePyNE3JnjiN9195QqzrCFLdqCgQTKMQRGBvYJ8vYaaemR8tFi5bC1kAGR7mY8vibNVq",
  "key30": "vUZ8F3Z5tthH9nXAUkGeS91HL9WegeogouE2wykuPeGVAjrGzJAcVYYhsd3FtHfnZk3uHVxgvQwwABZdHW7pW2N",
  "key31": "5tLAjLKmgpjLpcehj34Fx9feVhFtZGq7avoupcxdr6mp31KnzStE9GJihtfnrLRS4cDY5uYjuBcvgwN6G23VGRU9",
  "key32": "5bb2HcbC5HrucFVBuKTcNsM7EUWCsDjGNinTXuT4XKwiVTQ575MUs9tcHTu9R3fTFyi2uzhPMs5DM7bEU4xjmGYM",
  "key33": "4bCnF6UiVzVXEKD52pH53gMVX7LM5nb5ozRLRH4a4HN3okitRKoWgvRRLjEmtbVRPSSdjRKwAxfQrWYw6HUpkZCZ",
  "key34": "5WeWKPbXRSh8c8yiHFZjRPTSyyXJzRP1N93gfdSF1jNLvWQ6AoAQbVKZcqxCJPv19Y4o37taRvKeCENm3w1QTPCF",
  "key35": "2AfcYJMRueziauJVCks7YG217VVm8AfRGjRPsmL5BaqRHnvRgYWqS2tAVvaiHoD1DoKXKRxeyG1Hd54stBesu8hQ"
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
