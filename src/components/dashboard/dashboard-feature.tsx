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
    "3p7J79jGAhws918pEgFLWdjYuzNAWXvEZe134XZAC1RH4KYiERGbn1z8jznXFsVfaaJ73WK5hws6F8BdUpPHQbtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UFMzsQ9GBXT575UVEzfaJEtUjj5FeT5u3YuQXASnuvy9AHPJAwiSNJdVBQJnrxfdbZHrPwus4oP63CaRpnNG8C",
  "key1": "3zCXcmBNAjDwwcbSuoSWBY2J8XigkMBsa63u4Z7A7nuGv15YYeap8A1tVNLadcL7qGMeeT8LFZzzZ3vxbVcmYvJk",
  "key2": "3Ar6wS74r3dy9RNLmoPHMvh9QkrM696kN2rqFDTrLZPpeVXWMVF3dKqY56y5cyWZgJebgCaiCQMVT5t7hjhwPP8b",
  "key3": "3TJKv5KqLy4hdUiC7s7Yf4h96FLKAdzgKsWAMARVDVLJkSGsUN8pFXPR7RaQMq9Y5AVV3KBvguFU9SSoPBPHpPUF",
  "key4": "33EKFYBiN8izQFMuoxquT6k1SrmxW7YN7rq18STqPGay56ucMG785QkMZGYqnjx3QzCJzPqzUgKG1f4Zz3ZUZSmQ",
  "key5": "4RVuVtdYYcrVchcAjdzqCSKWuWAU4vywDuKFfg2KJpdubudUsQGsnsMynpT2brsw7ubkZu16NzWkuxJ1qSrSCenL",
  "key6": "4AtUq6Z4sXbJ84TR6SFNrTbkfRVvDpMSs3EfFrCBznyv99JvsTh1guRjTDLmrfX6SNeVQroMyUrP1cXWXYQYuD88",
  "key7": "4DsZNSoVETwHspZ9vMitZxH6vMZUKb8fUtVSfPKkSteXLoP7uSQU7Evgr8NJtPwzz7ER82smZ1vdDPvdv62X4aD7",
  "key8": "2nDnJpHxb8E4YAYUwSxLEzEBtBnkLxMu3575ijgDPrZsP19MZ6LcNPzSu25tiPFJJFMbdGrzZNgsomo6Lbwsd3h7",
  "key9": "4u7npZZ7ZN96ckZZ65GK3GqKnkprqje6CrLYCf7SGFBmxBXyvn5Tr8h4CDRmUUfxEeNatWZL599BxFMCexigpvy7",
  "key10": "6v3W5L43HYNyHysCnwE7UYZwEsXfjPuoACUraHWz6WnhBf29JC99F7Q6U2NtyXPcncafy7og1UAQyj7RAvHycKV",
  "key11": "aurtzpB1Uv2qwoQoMMNLTALdaTeDizF4Ei5DYcoP8WjcKbsMfHoqCiotoKLkmDPcCrEm97StrjdC9mRvpzyaBHP",
  "key12": "4TrmfaBqPE8KV3wwoKxfPom15Gv8Ds3qf4yPMQhXBGNaM8TqMsC52QFicKSPdni7XhHHHLewNjBYsRuurzAKvuvR",
  "key13": "tuhhV2Hs8ikh1X6Xo5MgzHPca7XDCtBmbqMauurvdstTbei1o7xbBRE4tkD7TFUErUto79oMJ7a9XUKUSPJMa2v",
  "key14": "3tUFXD9hkwTpsBj25azLT5DQcF67bpEcCDjfCvjAaGG5PeahgF9fbsdq3Sr4fg4SHBXJXznSAYbMgA4L6XEPqR81",
  "key15": "5nKG8zCeNn8zMZHTn4ej6NWQPwGKxZj5CPtVLioZj6TeLX8b7x4jnhVsFYSwdsHbL2qK3Yx6c6xGe1ZvcVKR8NAr",
  "key16": "5L8verGQnHJfSc7jLZ2aaTts6vkBN3hdRa4dC1QuT1H8iE7sWLTpXC1dYvKpAREPfseWRknmgVoRZs7ddtGPDxoH",
  "key17": "MGKkGggPHbiqZFYcE4F7rnfzPERQhLS1stPNpPfPEHy2p5xvP6B8tVFimHKXShJtJiFLYTS1AvDUsePwQowjb9b",
  "key18": "tbrHsxYubCJwyYHksWQPHf9fYKFxyDUsb72XrFH5EGxSY9oahACrc5ayuchjyWLkBgzMYDLVSR2tF9Xp58JN4Z5",
  "key19": "FPgDrDmZpyQUxvd8yPeq7jHqSskEz2B3vX3iFvQyQDoMHuJLo9XEgyTLv5pCXat7y2RnREZSzrLGdhAz9BHJuwF",
  "key20": "3Ldhreo5cKuW94RjwJBKrjQgA7ZnqWdB83Zy9zeCt1fCp2kSnBdn3hAknRy2KL4E8iGzi5bhwdKB98t5Q73Rmgsx",
  "key21": "4K99xj9nffA19NzFycZ7VcWJ29dq7zuTNGuC3Vjdx6sgGEGugqrCi6oZdQq85Cn1ZBH2bxvfcNbMueH7UELWrcpS",
  "key22": "2zDAKiMW4eyFrjHFmCaeBN7XAgPXeZzjyhXnme1RRHUany4BSScinPcdTUiNCuCjjW1rpZ13P1ufhKwuFXaoy3Vh",
  "key23": "hUprcmizRpvPo4A8bAvNUAisG4fyqt4jCPGQF5xQtiqRT5WvLgwJjppPXbqmDaaUrPBFT9rZjcaN4gNDf6j5TbS",
  "key24": "55hmgqrAr5FTWoPbKEiuU8YNLMBwo2CXaybASFY2a2swp7hVSUg8BSSTpoufan8DPeQwusv13L1pwuP1w6QoqmHa",
  "key25": "4cYCRripS6MmUKJgRBkfX4p6SYGc1Z8e1uf7aeGEmnjG26sCgQxVE2EWq8aJf9ACVvrTzzJ237xkG7wqZK6ByKyL",
  "key26": "4PdicAY7K1afRtGeXgzmYs1grwRjkUndoHbHJ6Z3onvPU5xYcGXWEeCfVmizV9zuGuDDvcr9c2Xo5Jri4CfJdssG",
  "key27": "4CYaTNy9EWJv6WipxxTinon36VfmQt5vXymN9nLxG1HCYHA5u5NwJ4nvfjhcbPYcYWrhdW1jyNiEBsBG1w9jNSBW",
  "key28": "5uXGwtY6WcDaetm5PE7sUChyV9E8YjcDTgPt2W3go2As9u1nP1T1KEm8XfaX5Yxm2KPzMpVQmEdEyUXJqsjYSY8N"
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
