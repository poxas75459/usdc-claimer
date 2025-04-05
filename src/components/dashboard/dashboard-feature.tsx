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
    "2ZRoKkcA6ZrF9A16YAwxxfv8tWUzaxyyrA9Bk4VcBJqkWAeRAck15prHMDukrnjEHfLF6ep3PihJtgJj3Lftz4ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rABQi52PdCANTUVysPyfHJP5mn9aruaL4XRZY12vzunxQti3EpTAVVdFKyw4mibZf2yjp5DKqgiKW2rhcfGTiJx",
  "key1": "5NJK2i7JtDpMyVFyF6tES3NVSpwZ34kijNYxqpmqCqCrjiqv1gVSNZJ7rjFwLsWk72veiRXKaKEd58xnbS2XNzsW",
  "key2": "5FrCJ4s9MrbKYpAbaJckFsiYykwbADBBSnnG19ExqFXq5ze5fQp7XBrWnkMxd3yYvhZkRrUimeFdCWCzJnmiUpge",
  "key3": "3mJwYs39MGsyKKMRF48sjHthEPSt7mfNDitUevN2A9L1Xa12WyQiGbVK3EfsZhcUFfBUwEmSkY58jTReriC23DgE",
  "key4": "D1HYhgjwWb75iSpUYv72m5Phxr7tDpZJxaaKQe6ygXzv2hhzntVQt6dS2aNu7tyYn7NisPpPEgt2qgb2Tu5BMBF",
  "key5": "4ukQtWCWGfK5YgeRi3AP5SJniHcxuDMARK3nBJj2v6g2cp5JFqqmzLPrFEgUkJoeYGymt5i3Bax2H5hUhwCjqquj",
  "key6": "DcfcVcdpbqQXBxSKqJHTEMN8HoE7VQb2b7t7S77o6P4pGEmhJy5pLeMCNkGYvtbRHFc4Ytnt9Ap3ND29ZBVKmJ5",
  "key7": "5Cjvzd1xHPSYR4byJXNNiUzmTPW2oDFX2sGhtf4PuXfia6vnkGBhL3QXJqmgsooSRTx2HJ7W4xPPr6zJ4fipAPyK",
  "key8": "ox7exWwhyEaGy16jTw8Yfhf8uUgHdVdSqTYVMQSioQ3wfKcrSFrNufTF1QvU6XTgbEopLqH6Y9NQXMgivYkWvKj",
  "key9": "5SM8mKr6DxnXtEg2wrrtQhNs5eVBS97BFXdiW5yTESTVuTxyEbfe2X9UimE4HjhvPrXVTWW95GhvL857C6oJWkvH",
  "key10": "5AMHgBViPVzEvfXVdJhfzSjXkwXAcbi87r1wfxx9Ax84PXgUyoNWGDhdai71TP8uGPx1DFWK6Ty1wXRuzNdmADsF",
  "key11": "35mQ9MjkQz7VqmCwa76GtUd8nNsa3vgxgQR5tfhAm3yW3BAs9FuwmatyAzB2dwd6o4dvNdNxmrYHka1abjAE61pX",
  "key12": "2fSaNdjbANFP4vKaFnXeziMjV95gP7vB4tWL4QL1kV1XvZgsZiWcKHpxodnR6eB8NcPa4fxXXpQwGt7RSBo4zhrn",
  "key13": "5FfXKoqT9VPRDEsGShogKHWrkM3XcdMqzKS2GoqBQVWFtqcYeWvQXRqqGc9jSJUctZpYBpeUyg4oytj33hCFk2AJ",
  "key14": "5jSEHTg8fv1FeFBVkYnWDvBkQfoMo6Ra7fkAE7hm61S6tjT66UiojxSEn3Z7tkitzJ911HD7sbkLGQTDwq2HyfgU",
  "key15": "V9Rw9cU9VDFPA1g4NknRfMeRp1QTNtcnEuQxq7kaLZfmiDxKDPG2RkBWw3oLJMSfKDA3BfYvsgaZTScgKxoC6jC",
  "key16": "3xYHQfrWxLSGUDo4BAZqnVvo54xbn9B9BpRWsbUeSuvutXfyTZ7As8dX3g5Y7BbE7E3nMSsZF8KWbTQ1sbCNkoV1",
  "key17": "58hhDf4J9qFL3bqtrGDMTTwmWMD7MvZc8xHb5Pg1qB4Nd79waRm3nKMv4C2GEb2n6PGVD2CuBK41sa17PUaowSeW",
  "key18": "9vGhVejSfkhdfvUYPPBvoMA2xWGVmoPogL8t6DELYMq3TVjhCourxKC6mzFmMZqfxxQsvcEWuW8t2bbdd3pizuy",
  "key19": "KdEPmaHpB6n23ihg5Ax76cecYR7ssC6EmM1nLrQHiUAX3cgZx71ujp7S41jVG7sGpTvZiogdCjVGVfYdxYWCx6s",
  "key20": "3xvUJTxxj6rdaHCkCo6sNHkkzGUtWjpw8gP39bKPVxaDWBYfBwEamkZ8gJxZJnhuUkbzCv7wBo2SWhcxGY3BDxKb",
  "key21": "5pfVQjT1gwuph9dckKJoLVFYBgZYPoae3ee8e4JkAnY26T4pd7fsKDAghbYNEF4Mkn9owLMHrZiY8BwHtzE7Aqi2",
  "key22": "oreiwNR8teeKP2ixfoqYmNeipYN32DWCoo92caYAfnBD51mSTmLL4M86XZdkPtWaBwpwVz7kAXQ7JsVwsjkQ7zV",
  "key23": "5yjJqVEU8hatfMeWkNSxELWnTeboLiTS3CsqiChNibGubsY7ST9aQi81Tx4JSJPphhY9snaNZ8qtkrmofDNoSvhM",
  "key24": "s1woUvPVHKKDhVnZB2z4u6v9tp5jwfXYKaWYk5uPuSpiU2wVZsyANr9LitjCqVauqzbZn4m1VrSBZqBTXjBiRnK",
  "key25": "5Fyjm5Fm9LGM6dLSi74SXaoHu15AKSbcafatRdiwFeQ1vqdeGZGkc9wzbKdqeuHeJpAVM4zPf5ggtbjczUrpCtei",
  "key26": "52jyDaCABQNpvWmUxZXUCp2kq8Ftw46FxQzjFWzFQ1eQm3DVDSDiwfuNvcxHmMjuo1rF3ETz3PDRuWs5KcanWi4E",
  "key27": "5kdr2YRSKvZSmk6gTDovt2U65Yad1AEChB7YyXnY9Y2STf44U4inVR2R9gkDkvUtHh66ZgzWNuQR69fHPo8893WM",
  "key28": "2KGEQFoSYLe6L8BbFZECAhfdkgwTTFLCpXvBgcSHY7QhbSXSkqeoQ6E6ynXo4MAxUunZnGEcKQxBr9dVeK7i4UhN",
  "key29": "2BcFHtcSqz9wWoUoy3s326m1U3jb4eN68hHwfKrS9kJ7pD1RreQFUfZNNxQUm4THGEhDLX1VBb6db494nvAUMUJz",
  "key30": "3yQFGMGxU2MiWeyPy8YhH7RAStHgcqRXwUot7sLZxGGftpknKk7dZ2o3Kcvn5xUMEF6yVSXdySRisxuxyLSWyh2w"
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
