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
    "54eUhHcWbYEE4CW5TLtjRLErUvTrjsB4H69unBUccusFTJCT7zZXnUB3EbDtCGABAEdfBs6NCgKZF3opYQVuesrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egfu8YXMyi6EQV3ChqSt5nUMsZ5b1V9gxXDyEhcsJyTQJ1ToS47rKfujm5hKbJR3BvCEhPaNbo5pa733MkMnvb8",
  "key1": "cJwJLup9QJeYawf8Q4xXK14hyfJoiMTUzvvGCK3NcJ7UbyttDJNg9vxAtUmufNBWwsvSqq7gZXHejS9Q96Hw5ug",
  "key2": "4fQYFxYLDsjLq9TvymmiJoFKvkHC5YdtphXkuDkFepifbt6EeHyxaMyRVBC48e3fqhpaGD1ioCSkhapciJSoJbzq",
  "key3": "62vUVWC8BWFxCFxYdqcAexGXCnyLmGn3c4hfBcHaZmucyR9bKCehQvPZKA77KD8BMd9DkctNmVU3UPL4te5feoSn",
  "key4": "3ztiaAb8EdbDzVHmRFi1JYcDTPDfypcnLrqFnjj9Q9sf2HWuw9ZZ2mVPXadfbHfUeNGjZLWBEdMH5Cxefybtp5yn",
  "key5": "3qNKgWRdGR823NU2o33VRE39KPwqGSErHwJ15K3PPCrQQo5ibfvi7F7EvLRm85kJKVXD7asTWHx99YgkCQJFnUeM",
  "key6": "1xnkaaiyLXVdzTHheXESEEcEmK381p6pcpQ4hrRh3Ku4xNz9Uh5o4VpS6aSfAMpQGUt5ceBrEgW59M4iGZqYpLd",
  "key7": "Y9RSP6H9iawwZR8641ehGPyhPFYqYLtWXTRr53ZJC2u9WofjyL8yfmefrkv5XuZdgBes74zz8zogv9S2khLXKK6",
  "key8": "3jNLyjXBU7Z9K1zw3ETyA2HZnup8fzJTJuesexMeecS443AXDXCLYSnax3tJwMk9qXrqr7nssSZavKtadWqCekgs",
  "key9": "7aCDmbV7qxKwoiRjQgVykcGqc7NXnuc8gFwYE8ZQHhT6jydw9TtctaY5d7fUbS96dJDsfworfSApgjJBm1Phek5",
  "key10": "32VmixchTijg5DyRM76EZLXCwuEjdYGC2o3GBA5rVNpdJ5abbEZs932X8rEerrskk3jQcMXKvmFm82mQ9B67ae2D",
  "key11": "36Jwa7eCCJgNDTxiAYoLkd4vdBbdaRmLVG2FfWs8hSbyFd6gxSgQLeZLQhAWwDCKRhj4SMXa7VPp2kBTsvQ7S1mB",
  "key12": "8GH2r1g3FCUrwxKCDs1uiWXUFZf9Vkc1zJo2wyaZWJrZSEs7JWtbTFN4cMPRnTp3w9Xr3ovc1kEz1SDHeiQTTC4",
  "key13": "iVoXZJz15YndkSbxtAyZHgdxnjgahxjphV25e4UftnRRWBGdYL7qDSybG5tk2SCSXW7RG7HLxZGxvgj6TMvaPWE",
  "key14": "2y68fCc1sqo9MW4FwmWmJS6jdh6h1jAXDQ7cjPVcfmoakEUPKRg766kxJ4DhyLrUjLoEQMRufkrMwYqnL7TtQNTj",
  "key15": "59nMRX6AJhtTQWLSrvBftvxJufPnvYLwZ4eqM3avRgY3udUQqwQHAJ5V42wzZZCWEskgARKCN4jtyFZELZHAUAe7",
  "key16": "3Kx47pid6sU6oFjLifw4GmZXahVsVVrby17ZLWRhSpmmAGACsPJmTUQn4A8nqKau8yuRsoHNZT6wHmLJC73U8Sc1",
  "key17": "4ouqGFScMEmc7BcgSWZpe2gSphMVKqLzAVgPiDTBfLymMxMp8Ni4ArWZvtnadgx8jt3w9S1a4449DcDUApNrNrKo",
  "key18": "2hguPq4bPQzGKMwQ2dqH3tpnniivA8qTTErkrLWi8vNGJnFVDS2SWuLLFht7W6WdgAk9UsUmAPAWiHNEBaaBMbVL",
  "key19": "3abAAFdPBdP4i1u4jXhJoVvrMHA8DCmXPUHypz91onbhDJvwWHg1o3qHwyfYwd3atMK4ZAsaZ9YuqAYbFX6VKh5K",
  "key20": "4Pfgju9DhWD8NuoyA9LLj2aEJV7X3ztMtRJEiJBTV7MW8p38kffj311q11yEPgqF1WYHrQYEuW63SJvGW2D4yh7U",
  "key21": "5o4P8KDAjoZGbDqMdFJKhemJBpV7YiHUtAqfuSgZfTEsjDXSoWsnqXvp5RrbgdtK2fW9yk4vQE2nmvVms4mijWQH",
  "key22": "YRN2DeuCK8D4Sv6o8kueKopuWU1jvac9X4Hz4sVyrjFdQoYq53ps1bzXiNQZqg1tGEcfCAEad2KJWxYbeknnMom",
  "key23": "5TUxQB6R7MSt8Pobz1feKg7NredF6scrEjDBb7pTWeAE5i4TKx4cxgV6eWJ7pweVH1pX283rBWFNxbPBW8ULmm6o",
  "key24": "2dTREWANtfTy9GnDbCtAbBVEJBpp2Nr4K7PaHnTMyAXbj7W6mNVMFhMsSdBpDGyEhdNmaeZNVfXtAF77rC6ob58",
  "key25": "3BeVVkGY1UgpNSsS2xS479w8pL8vYXd5CFV8Ck1FMCJpqPtRdxKKFMNpLvDLJczEGBMDwQovatNG5vobpMrst8uQ",
  "key26": "EqzzknqNMtb3eNU1Nz1JaWoRM2h1V6pcEeprdUHvGxoxkPmJ6JJ7M3J2XGDasyFgE2KKfkDTmv4GgAg2r4x9YRP"
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
