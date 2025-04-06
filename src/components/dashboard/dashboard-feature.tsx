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
    "5z9JcYjmfiXmg621bag4v3urxLfHL26rHoMivVFQmTvM9M5no6NiR4eMGrFYacuARdx2QBbyNS5Nkyy7WhNydEqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2zVVZkVJZgXf6Q1zZ9ZzKofveDKpqyRnP2updUjrAvw8XZMRS1DrV4idNuq2zWn79LKtf5h4KwJqPRW83cyf6f",
  "key1": "5oWvimzfPooCEp69jefhB5aF7SBLph7BGnUKttWpjJZ9seXKBY9hAjFFrBBEiH5oeYerhN6qwBLGLQ7JoCZeBgc",
  "key2": "4SUcxqJTMiKFUviq1borq8A1hMhdaose1V2PXZdX5iWiR1ZHzocWuwtb4gu5UczH2p6Hf4qoazDthLvEUtwGKBUK",
  "key3": "5ZSZyGtHEDoXLLLKoShfXySXC8g24oK26acBVA41zvCcBUrMmcDyHyjYmQ9Wb8JumAEHTbPTWgFBRZRTHKBa9x2q",
  "key4": "4yW28Qt4y8w84fNdbkzH8UqD4RV5BDXa7dC4ge9J5VvnXFXMswfunC63jRHWRMyKVSJjqUCx5LHdHVmP1Jx7zz5v",
  "key5": "3kUGDQ6b8ryvZqAAjzJKwdxSt6iMKz7BdkX8MC8FWtP5JPSAT6nhHzEPRYvWCrVuYkw5fyMCYtrDCiHJAeLFDEUR",
  "key6": "4KbRDAaeRK5JKuw6gHUUmKTkqWdhqYcJeGReQPHa2W6gVRLdqzUiaR2RqQLb5g3iTwLYBU1A6gBsESoSGtqP1okW",
  "key7": "TWUFowgdxrboVWCmNWkwur4NFdh7AZE5DGCKBjYe2qfFvobHKeiqWpTUwMNruRuMVNjUfPwscVYwwAQ51CfG6VS",
  "key8": "5Q994cRXGKUSSJWVWA3irdspDrAwGro2MHk2u9Amh2ZV1YGvkLk1kyANvLj13zquKsDTg58jtAGBv9j4pTqerCV1",
  "key9": "3FSp8ftx2nhqu732nLxXredxM8kEfVAby6vd9hy5SLy7eUpD3ATdSK9iCwNTU3YrYjNoMyiTx3WJzhPc84F76mSj",
  "key10": "wdGQ15RcBB6nAKdHg1bSPXLgLo3b6HLPfDwyLLHZ13XLXMLmdUFv4fttPFYXFqP6fCt5urvNE6PRk9JXj9XKehv",
  "key11": "2r6UqXYPhW3QtkdMue2ZjFFeHSAjFKf6Pw9bpUV4FAT7CKK2fQVusxiZMzDrovxvn7c2THuq4vtoMQoSrKcJvW37",
  "key12": "jxeqKqz21jKTodgdzpYTp5s965s4ntJMHh4kayRFbNqBExvCYaNUjNXpp82nDT38FgBcc3AE8FgReSwm6i2N4uG",
  "key13": "5xp6SjB8RFCkF8QgBgjvbqzCpAo1XG6rKUDvRngaGoEy5Wf7KzecPTqkWkHKp1gG5PLU7eZGuTdZXrtQfkrvDkeb",
  "key14": "5ywAQfJP3kwomi1BdpMhYUEih92snXoXeJgdwCYCkuvg7o8SURvontWsmJWRsEAosWf7XCtwExoapcLEAgxwexno",
  "key15": "5DPrM4mFF6gMK6JDMhtSC8V658KsBUwHQvLi51PCEMw26XxKaWMV5dW5LxJFvxmLYDAjDuvR8drcNMWEgoKoxg41",
  "key16": "2mLE5kRBwDKPTpFbvNEACqnTUtHF4HZ6EsvJT88C5p6uGiWGbYapAZmrhPTJoJR1xm3qGMgSm6qARi67y4qtnFHN",
  "key17": "oU5L6XkxHCb4M1RqGYmqkx5tfbSGoRHGFHrYA47jCR8qMaLm9FwLgYM9mCh1eCibUYfGXr8NTAErEnURGcDs3zU",
  "key18": "2dbd4G9UjQoNJbymDfqdEgrNhN387GUsCsuzoYXS3jXVeEKrxLV759UAvJNJibtmcU1MACkzEhvjyTdaYaRvz133",
  "key19": "5aHCd42zqh9MQE5fFAdoF3K6WZMLn2aKDD7YuMMUCDkQXzdFfjCngLQcd8wAx3V7xzDfC8dNxMv13fWyR88FTyMK",
  "key20": "5aJa6A1KUduzzZgwBujCtUswyHAf18yq1u7VACbb754EPHQxmYr77vnUNiv44CXmycTQdz1uep77Xjp7aYdRgBzd",
  "key21": "3rAgbz6sRb6SMvZFP3z1Jmt5UTfMmEpAs5yHirbtMvVb8aA1uDYpvhBUWBCkjkSE32H3NmCWWJcc4aZHHLQwzndX",
  "key22": "2TE9XTQgQyebA3s82G2v2XyxvVZqN7P3ZDQqbkwZUdcEzkzvXjKqVBfGS6ULaThPGbocq6mwNUpmoZV9211YLe1v",
  "key23": "n5ugwYnCJ5zKjR26iLpaGVdNcUTz6UfMSyXDQiFefzMdxE6Yny3Z8tWvDqpPz8LYBqqe5bakg9qwC55Sq2RDTmM",
  "key24": "5mhU9Jgaq3Eq8nDFSNuwQN3zDas6vbnSHosuqTaakDN5FTwz8d8DN4MtWaVedDft1aeqjx3f2VfxzkNvi3kmdVnk",
  "key25": "296BvCJSpwiE6vgXseFBE9Vc69W3wFpVW2oyEMsowmk6VGhd5ojvh2SRDuMoefRzfkxYrW8LREsoWTbnuCUSBHpA",
  "key26": "5Hm2rHBL7EWwLGmRyiQSiTz3fdMUsq97Z3qaBP9BwtcJPZMt9N3SwJCpyFQW6Pj65r8wjBhvgpAdxKihGBofwdhv",
  "key27": "5E44UEBvZCJNQdnwPJsf9pFPVmBJUaxk36d8TBG2YmY7B8wLaFfow1VJCzuFtcrcYcipKY2ohQeLKCYt9edVnmhd",
  "key28": "4oWREz7T1pfk18m7aKf14EgfUFsoKY1ZWHsmp24J4VsFJE6vreunYxAz97yLVyonmMRTvhqhUg6RF3ee6dKudJPc",
  "key29": "dHDErnbYzjyACzdw5mfVozjkttzcLb29BaSdVrmd8GUmgV5PymXHXr5GpsTLnKf5u2RZGtFpWXhC5xyNAnzbbuJ",
  "key30": "3EnrZ8uQUpb41tmkrxPwqses5sayzkMdkmHsDtBhWAzWTbX8q4rjQCyaJiBcH7BxXkvM4nsDtYuAw1MZC6hanpDY"
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
