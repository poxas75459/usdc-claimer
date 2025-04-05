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
    "3uVkcoXgS9ERo8dtv9GAb9zx43SHBK6H7zzA9rnYiW6rNQ3VrkH4S18XdsCd1jdjBPYhQrcfphP1LuEYf3VBe6W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45v9u9QByDmJJw9ZLpBkCPFwSv55mWQA3f7ptqAbnFKdc7FaggRN8pieByAEtWrArcGHNr5gmF2i9DqZLdAWZmox",
  "key1": "5Ps3BtGn6QYhsfnMvK9YuHRWh1smttgTtLVD7rKijnASfHqyCsFTz1PqmG1Ev9ruSVc4FiWxkAtvfiP1aLhs69nv",
  "key2": "5T3uty468STtErH2JW3WCr55aj52qNqRJDWp56tMMvQD1ZFpKnxjnkYi4tmcGRWdbfxes9R5czAwS571CNfsjF8X",
  "key3": "4tmDGyWvPMD9dw9iwPgfEZ542BYiFhysPHQJ3Ackri5jStfQAn9J65RZieKTEnRwZHzCEqWDrKdYYxacEPGde38J",
  "key4": "44tByHgSeHZzXZFPFZYaThHcuEyb8fhaFx3rpbDKCovZZ7SbNdBMGFNScvRTzpQ2j2tpXsAAeyoPXMFvvLZx2Ey1",
  "key5": "42ogonL6sJZrD8Nq8qSGibArDC5hwcbz1RxiHTJKm1YJZwV5WzRUDsy91qKJ8MD3AWqaMegb3AEAN2sZXek8PNYv",
  "key6": "3VZUq2cYkRvhJXoU5zUZRLF493m1PCJycWaH9JuVzNn92hLDhFQjbzpTC9vtsUaVPL6eX5itFXT7iudn6qZt65Gu",
  "key7": "3jJhM2Fctr25dyozujGh4GJ4pFYoZJRHJ3SFot6yzCtbZAF2jvyuf9WT8jzfKdByJw8LcT9PhvEzPGSGuJ5wWzDg",
  "key8": "363unr3FNoa6N1iCubkp1PJBu7nueDRf565b6d3i4yAVu4ysXUxzyMMujgRVRTXUZp56NGB7mDeBUWS9Dqejg6pX",
  "key9": "2fBa1BvS8QW8qBpbCAoJGFFzsXU4Wgd4HfyrTgNepzffkbBUp8eadjrLkECMLSuKAoj7i9ytVjuj69cXAvGrCStZ",
  "key10": "2MifgnSrPtSzi4fVnDwNk6En6qETRWXeXN2hFyp4szwSxEUNmBcGSGj2ZxwzeTC6HC7Kcok3E5rDhA3FRioUNNgd",
  "key11": "SfG2gso2HQZkAoZYJCsZoqz5CBFdn5TtjBQBMBvobKrU3CUXGDevrg7S7QY6o8kEe7nRriJABHoQDnSGKE32uBQ",
  "key12": "2wmdF9FgGYCV38Sqa4CEDhgrPs3yqe4oWE8XV44Sq2pEv9KdeFkZFrpvnbT8NYXGcHLtK6dVFPWgB687VCCX5t3V",
  "key13": "4kkEjLgYyMVAX3ZazHocchBWRBSdFoELmR6sA1B3R4fG49dgwVn1yueHr6rLrjDA46p5wdauNAPA8KU9JEjNce8Y",
  "key14": "2ginWiy6e3qbvKtzB8s1jwXfFATTpRWqEJvPcDqKLmHroxYYc7bTanuq7YC3WQMhDwT5kCHH5ceGFE5ybevKMFux",
  "key15": "541XAGpNLqobFvnwRnV6QkYDiPvqJiC8AKGkSQpZxj4iv7X4jxjKYB6JbYAzEWgXYU9nTTFTCg1Q8QaqzHQ38Eei",
  "key16": "aErPXnJoeLsjNEzKWdY4Pad39SPifthBpHBc1CR8WmaYm3deTUnDYkMozm3e62pbLDUtc1FwJXFvBrat79Ht3HN",
  "key17": "5PJYYtEfFPfrVBabsH178xb3Wuj3KHxovJa8eLPhNVpuYjpZcQcwq9YtGjibKL2yF4hbBRutTrqPthKkn5FKFDKr",
  "key18": "3Uvg9xtr3dRGbnNoFfpz3sz8A9zyNsFz8qhKRrhU3Z6xsgNAv8fLLPL3HL1pCGDhMcmqX46weoHzie1gaWU31u1Q",
  "key19": "22cfiiULqmHHKMiHdhpZqkHysmVC8JFhYM8iiVheFHLw6ETMPE9qfNqQH97zqiU8ao5zUvWmqzxGkYX2AevTwemV",
  "key20": "vJDJEacwpRtF9F5Ac6my5fS82Rh8daWthgYqu4ZaCQNWdAJqGrUH29n7HHb5fAZidPYsAjcbKDvkWvgi4LPiHbr",
  "key21": "4pLJK7nBD4MaJ9GyCHmnrknwsxPn78ZrCCZL693yydBBzTmR6L1HB9h4vurvWFxFhTUuKuRTyTJG6PE9Wmpfu7ss",
  "key22": "9BtBG1T5benpou1bN2Pd4cLdySCnYQNTH8KWzEd1U3rVR51jQn8cL4z2RwtCkDbE1hSReFgMZmNJ2mVxXpL2BGN",
  "key23": "sBprgKSepbKWWzGvad5tKWCK5UrLRf5rgtB9YAkzGozuSH2YctsJE3Ej27rX9yDodShBXkGVioJDsy8tvjx4GkF",
  "key24": "2JR6MSWoqWzz8kYQw4rwa8hdeQJKNoDBdtNygiwxGkCkeMDqpFVXekX27thxdxtKFjAbxD8BKDC6gD9JCH7q8eii",
  "key25": "osTUJ95Bcc3R9DwcCUetxp8jfqv6ZtVVk3NsXb1g4ifgmLELkg4bZZeqFaUxKhJMdVpVJ6LShbgtWazUQnmzGf2",
  "key26": "56QyDe42GyzPh12NhaHJDhiPAodRBEyueULkESTKrHNnvyYismc29ayw8n8fnkd3DDJDr2wezGeQa9i2y4xC6x4Z",
  "key27": "4JHrRBqMxaeb3vA3qxDWbFhTVYzz7T8PZgP12nB3Wauy5s9D3sARGdkvHvi3rFbTZP6uQ4mhzStfSCDfJ5bjX1ta",
  "key28": "b1iN6qRfNAASgrajRfXmq8SMjmG9cT9JrFAXztC1sLEzmVeu9qw6usTvhB66hjFESUVJ4vQ3185eQ9gpTGfn4Di",
  "key29": "r8XPsLGJPewN7D99FfBUGqqT4gVCLdxv3oj65BdjffnHVVVkS2exUmPiw6aBadYt47LgfQTnSdFjK7jXiwe4t8h",
  "key30": "3VELmUZcTtHxQs3GrsvpYU1vxbNGBpCqtTV3A1ZdtcWs9TYLwSCv6M3o6kjUkH7H2JY7im7HSQp7ycc5afptV6qH"
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
