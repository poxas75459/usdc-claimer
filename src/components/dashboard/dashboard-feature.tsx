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
    "2cKEtJKS9YnN6ARWFuAYhVaPUULQdWrzG6rGmoYVs16htm3kdt9C6fJjXAu18GZZgN2EoCqmumW844T89SCg5PRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AFujQvKEenLTrZ4iHLBcHtH4TXCaKK3eKjeNjNbxpChYJu77yLpBRi8u1A3DptwDDTBsaim2tvMPiiJiMREnx7e",
  "key1": "4We4bd7AeyYE4ibVyw16DhSd2qf9iyAdc3vVV4CS7BgRmK3Top9iUo555kQ1S5pVESjAnUnMR9QC6S7KcaHHhbUm",
  "key2": "S7mbm4SwN8PRvh41YNudTU9MTQQwTc6LswGFWPQS9rMQLxpKEmZX2LmDYwobrJ91c2XjX2wWxYqBmYkWUP17ruY",
  "key3": "3A8vWzaDmwJtyJpuHovddbyHxvfbnsmMcaGo5aodSs7DvephVvk5NEXa9wdD9XKi27pGPBjAEdB2CYkTfjDcrtPT",
  "key4": "4yMZxN25tZogCVrvfpk9NTZ6rEgpcPKbvqQKLJZqzXnj8QjktaJP6dE1bk7dSeyYv9VHdNQm2UKYwv1LW5GHPJkA",
  "key5": "25Pm2sEnrhYJQZYU7WP9pYdkjFVaFeQADc8yxWe7kimhDRmF2mZArLzbVYM77obaobemgG9iEUtrLyFrYGC4qzHr",
  "key6": "3jZBb29FJgHQqcvesc2eMFtCuURQYPZ8Lty6xCtEiLM9A3TpaHMQYPUppAjpUNjnbNVyuqrN1orX2PHZJAs17N6h",
  "key7": "4BAiVPXCXubavHt5GusjpE7yvgLwKWEhV7AsC3gA3v5gbJJjAqENTN5BWdh3N8tABfhbnEww6KFkCTKcQYpc65Kq",
  "key8": "3JWJ42iMhWb2KDiau2tpwPdxeeUkv8MGgbG76z3b5yRU4wG3neNHCLoMVEp7kkFiPvRcoVoFuiv8EKJqLLp952wD",
  "key9": "4sgkKKbt6mJiTs8qvEBXNuhkmdqm7m6uJRqkcr71L15GV9NwAwkGysCqt5Fr6sj7E9X1wnegKaTt23m836qoEha1",
  "key10": "4N96uormQpCzNzqhVv6AEwTRFc7GRAwShzCxEoP96RnNXxC16NUqCPPJpDNYL8Vt3Rgb8KV73re4ppxciAN7L1PH",
  "key11": "3ZgcNpAab1sQhqAEtHWCFSugyaMr8BcUTwJmtBNzoPbNZszwCdaH5FiDQGzVL2k5iEnf8LYrBZoR3SMyF4NdpiLE",
  "key12": "2UiZoCvGgNLU792TCeW3mhW48KevmNoGqh3j69VY1JZsBTN2KdPT9mNzUszswEepjFzaxMCMsa69Tiu2fsYfDkTy",
  "key13": "mb2n8sMgNFahE4vjQbDryW5feLsKpR1bhUxb97sTpnRpFXNaA24d8tytDdd1updiW4XwgH2yAGRuAP7HfXGhAEF",
  "key14": "2JANm9EP6zTYiTNfiev8tZFTHXFdCdSRzCYmMHMwzrLHexumbNC626LzSmBXt9X37MJb65QNktb63hkdwyCUh2g4",
  "key15": "2sWwWyEM9sJ6mpatepXSuSmCMJ3o1x9NJGkVxVswP9muXERPHrymZCme8VHk2F3JaGGvbxZ7dbVjXhYYxFmTArNd",
  "key16": "3m2AxodoEmpQdFfd6APq5sqJiSxU1DeWu2VfxuWCsXeNxBSPaRUXHxtrAa8gd1rb6ECTU72Cz66e9VvCwbYAeStN",
  "key17": "4YYqiQ16Kp8QVSuEsBkGhnPzDEVKYFZnmpjEjrwsujZnoTCTHSqWd872Erob6oCU3tpP21DMLjnRLEgSh8Yst6Zj",
  "key18": "bL58S4VS1ZweLvLN6hUJE1jh23TLSSMiv6ktiunQFWBZHhTUnVx3Lu9nad8bvXSfrEtRX7qzmFUQs4exJ3ohrG8",
  "key19": "4sYEWFzkAbLJ8MmY5dygEA8gktHmPxwTwuAqAB5df7CuAbBwkRX25eaMpChzRvqRX3wdFdv2QC82mtFBGpXBys5C",
  "key20": "2FLHaP4xmzuNQZPmPcj5fgZRasXn5APR4AxPCdnznH3fxX8tVSTJcJNBhoBKA8L7KcCjC7jpbrjNn5uhRn2sGjzh",
  "key21": "4ixoWzRJzdcyKeBrvKyACuRvut3Mo12aEecmTBj8Xjua3awnFXa26zsnqPazSxn4W22nUo6tUNBVEAnhHzzgg6cZ",
  "key22": "2XQwhQjnDDdRnrwLLgTfgey1M4sEfuVBYmXM11FqUGEzG7eeT5RMzJZrNmSkrrtgLz6UmZHoRQNKfvgfe4ngyRDE",
  "key23": "AzEMR9jN6VaSaZk36SXwJ7p3PE3PW7RhpQhTLBuq39VoDpkSUyuALxMF3rjRW5NpAD8vZFyJYPZ6okj74CzzRwG",
  "key24": "4Nm47T9u31KL3PncmjRevcr4NFoMDoxjgypqZML94Ps5bQcLDr9QDPryTLWbWp91KQdFD3y2w9PD7moe6Z6JvYDp",
  "key25": "3VgZe98wVARNaLmUPctE2kQ4hGgwsavkKNryeTptHG5kWLeM5NkB2JmnvjucmTrjewR1ikkS8UC16jansCZamJKb",
  "key26": "5asxHWxrnMwCjMkj4Bf52whWweBJvaMdVttJjLGj3XW3LHBoewdnf4MJnQg9R2cAE1PCJhL6Tb2KrrDDqm7MM43f",
  "key27": "5daCwbLdW4QwVoWkjoevyFGCHqmNk3vkt9gMtGkGEBdv4ntUPGuXBrqptbHrWMe6ZAiuF2ScPt9V1DMJDeb72ZC5",
  "key28": "2eUo32ELNg8GVg4cF7hMm2umrBgnmgLiFgzUa6svxuqBwWML5RM82Gs2jkufmcLZMDbqhqg4k9VQwzvCxFPUboMW",
  "key29": "34HaJLyMsz9Qk4vBbRrPBd2FfZ8A6p44cSzts3ptAwLGuchc2YC9yY7kC7rpS5wLYaPFSwpid41uMQMdXh53FE2t"
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
