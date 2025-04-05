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
    "5aafBZ7VUs4f6P3JiStSDwfaJhCAU9w7QhyN55E86Yii2srJgGf4dS4Q9ifhn2oKkfQypDnPNDDPB7n4NJVPFvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKFzfwMMGKJYJHTkF8WF7pTn6MtcEGVwtPYAj1wagZdw7GqmLBSPTnH8vJEkPANH8rpbb4jrU3D7j3dHj1jr2oT",
  "key1": "3nP8khuCkcueb1vKYgRbsbWARvvMdaNM8ZdDRCqShpGmj9XBrZce5BtnCnCc3wZrPqorZbLVYBJ1bSYBqcsCFXsn",
  "key2": "2xaQBhKhFFMDXES74gsXLgrXT3Wd3YqZw6kGAbxNxMZwmk31dx8jLmeXY8rad5ZQv1uXUTkudrbM9jCq8agi27cL",
  "key3": "4gCAZEb5XXPvxuGYrP5STgr8DEWwJvxY1dfx9yDdPFPSywhqh7XjSUqMpkppTEvuDRPQ9BAJzHY7trtb6x9z1qE8",
  "key4": "3hVYnUeSEFh7nNGMoyNUKAaeRjUUJtv2hcbA6LK5wrEcCUcZsD1VY61DhRPKnPYak6hCjiP1frbtWvmkFSzrrZfK",
  "key5": "43RB34dc9MLhKaKtvqpcjPpWnqh74qaLpJKCCDRt4G8SD7jepYypa6KYLhiQvrkRjoCZcT3g4thauHKP1h6DQvv3",
  "key6": "aqXLJwPHEeratfhZSgrHT4DC5pHx1XN48jjBX8QcuGxZLtaXWtQM2VpAARMWoqS4tC6gNcueV7PRqxGjvkTiZf1",
  "key7": "3ZcgSkdwWWT3TrNkLefGco3dDJ1KJaRpdmhGGCRsGZVWgvpstNr8bT1p3HJgBdMQg3F5kxz3EHHW7yz6NEJYFRL8",
  "key8": "De75coukZ55LHkx5wBzARpXbeE8NroupyjZ1SPPnhkXkaVYJQjmwCSfTExjrK7svfWmKSvKtY3FMiUKa9CAs2mz",
  "key9": "4sxB4Bhyv4xEjeogQygti8FzmFNTtZ3exqqH9mcUAv9nwYceeUixhrRAU5jPLcz2EdVZDTo2EmH7EfoPWErAV39a",
  "key10": "WwMtryumG4icTe8cB3s5Y44wDTYD8nT5Z6qH1ynC9dP9wkov2x8MdbAfM9VL72p4XBbNmRv7Trg9XxTf9zrzW5a",
  "key11": "3nLBmNLMQCfrvf9N5okLah3A9VmGPNuUmVJpdw3wczy9pCxob2yn8H2KMXX6yEGBDm2WWRfLmRFqfGn2P6T9Ujku",
  "key12": "SMvgtYiuGKnskDuQ7j11K6TS9NC74ntJoPKcqoy78L3bqnwxNiipwAQXeLAjCoebytV2EzeHzMaciagVyzPxa32",
  "key13": "VgvbcuAPi2a1UWJkU3r4UT4JN1XVwBFs5BZi5JDMD7EUX34QF8nyfzrdAKjvz1NCw1TzdFtyeacnrt41izTUEzF",
  "key14": "3AWHpSBXZmCzPFkkiFq3siaQ9ZCoE7CYw32ew4M6AHGFt9sixcpZJ7u64vR9usweqCNoccHiM6oQwDhYosxfrErj",
  "key15": "g3c9ygkkfjVoYKrZSB7DNiym8PAceNCv97fWSiNXoqz7ZjbqwV21s6CZByBKQA1jx5JM9FFiT633rjjMcPWJue7",
  "key16": "61Z6kbU445VTVHc95CymVZtvzWcGovuchv8CypYvMkapfcjw8gbTZunxYW437dKwbkAzihn1AqciPiR6oH5ifLTz",
  "key17": "2JMBLvHEutRB3DBCPJckhu7WZ8wyqL3PXckXHY57xpBdBitBsQPtp3Zjc5e7Uw2x7hDhrjqZmEQnYGF6zXQPqDyz",
  "key18": "5cF6v3rxS2DtyYVzvSCrVyNz41PgE8UtFtR8nGVn1emmDzYQCiNh8t51vzQACzc4BrkCXJx27roVATkwETGYBx2d",
  "key19": "2E3tHY4zWmpBF8RDieGMJ72kTVfNsNeNH5L6cxJ5Xt3jyihw4JMXsB2aLvajTNWtPWDTjyguCCRUiux9SXWiVHGP",
  "key20": "2atcjf8zvoA5RnW9wSv1TAUBnbX3KR9citHS1jW9abL5Aw6rUYMN9916Gxp2YsvsmiA7S3VwBsBVmKnA8wLc4PJp",
  "key21": "266eA2w1DNwmFZ3oWx11MqDLvox27yUJ7frdF5SehEExRub8XfhSdga73qJKvyZ2fZZE5ouBMCsC2yX3KBgBKcXi",
  "key22": "5DR67dv9Lqfq6KnRJTsbLqnZyQyaxf7P89obGK9aLvmo4U1Y49v5eyUK1tPwubxkrCeUbEEnt2NteaJnp5aFS8Gp",
  "key23": "3KfjFJiJHPP4YrZLJieykhrFpnD2hWoKgjSftHuiyiNVKyxoPtrMHbFSHsgEmTTbxPfxTW39daQFV3pFhXqtgsub",
  "key24": "3w7z8mj6eUkAvhim2VfDgcnHcJ4YW2pWQ5UuecxpHpkM1Sjyovhsh2tDeGott66izMuhDgA3ArvRZhgbCBLuCd3n",
  "key25": "xhqUtUqhVLpNPq41bMX1PJNRJiMgQtKDXXhNLWym7859p5XMSeeygv6cekcCfc2bxPveRuQCNKnsjhEZs7VMkJh",
  "key26": "3D3UUJWbzGbaSx9nYzRZJdFAiZjdYfvDQcNGUpAqgj4XvPSncP8R4vBRV7n425ywj5ZciJRpB1fSoyKe9XwvVJb3",
  "key27": "4xFNVaM214GYEQtDgLghxDJ54GoGes9WFVLWtwH5dk4dPHTPtRBNqJxhNLpa41wFB9CBLtvSqAmi7F2ij3KEbQwX"
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
