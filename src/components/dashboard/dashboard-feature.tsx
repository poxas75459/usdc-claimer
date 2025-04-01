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
    "2WpjUZm6e4xgWrdmg2DnXypzui8b7RbebLV5PjLe6pJRbfCeCDZiMA4vgY7pmhYjT53iK2MpoqdMgnKdKgdwdrgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caSmBZ4ZwBoTPtwFGnvtfdhpn6UbecYg1RucfK7ae5Eh5S5dT1Q6m1GBScc9Yq95tM8QpicJxtfmU4bcU4KeHUr",
  "key1": "4SdHr4ovp2KiXyeFfcG4513cUSAeWPj1ay4gYdiMCqS56mb5ZcdPWrJB5B51JaC8YirLYHmEDj8dxjftYrrK84e4",
  "key2": "48joZKU8QWgkR7m6kRTUZj8uWWpZNvKadLrZXgXFcjai2jQb6Q5kThHmeb3XD3U1w8dnDyqpQ5MvFFUEVfph7c3r",
  "key3": "3MzUeTh69p7v72rpwKmF3QiaCcZKDJYwsMx2LeSJxwJUarBPC8ydMYc3JxTdGFDvpJtnMEYo7ScwUaQyLQrmf9CC",
  "key4": "49iJSQhzF94tFRPrRiHMDGgUer8ev5JbXsK5hAH8UX3xdqMEnrCs66bTDE9AML79LdAMbu832eWqy2QhQaYgRMjV",
  "key5": "2rLfrLJfdhXS3b8LbdBEezpJSZkiosxmCHaAbJcx57SvHegcC1hKfJ31BPjkiFH15nb6qowsc7gYqqd3Y8SfWXGw",
  "key6": "4NXeTktjFL3Si2vFenY2N2Q3s411kKH3RzLX5pwqYLu3cA2zX7xKy1pP1f6NeATEUdZ27RrbMogMLx5VijwwVaQP",
  "key7": "37KWXfySoeKt5oHZB39M4A21gmXh7aHxn53CJDyxHA3wT4dG8pFqrFTNMwEQaFKfdoYuZmtiBp5q3qkyauv43yAn",
  "key8": "4doooxXegnDscrbP2J55SPSuxaVUP4HNLnzQs3jX26w9iWbawUeGmbQzHJN9DncquyGegkt4JuFaziewb6MS3vhX",
  "key9": "3v9zUSQX7LhuiAC6G8U7UMb3ejGBmKF7uxKbpHTgoQgUcbhFuhJLEteFXjLbggPhJDaE5Q4H55jRc9rSZgLQZj9Q",
  "key10": "6B2SCRnjaX8LQ6dofbb8tN6DDTUpi4S1jAzVQPfS5tWpYfw8fDE71PPkdBixPLaeEFVzBzaNH5icoqpU8phMYeE",
  "key11": "5LrHjot2u8T2UHaSCFUgZpSj2UzV7vKjRDEu7hs1FwWpaHgpr3aKU93THgXfXWgCiHHKcQrrmmcRMhXvGNR9ffTW",
  "key12": "2Gxa67gJTiMckm7iqMzEA2eW2Vc3Mgv1vArASeLgZn7K7YBJZVJamckSZzXPhrpPTDxqxPQq8iSp86oinS9yFRWX",
  "key13": "3jVjpBRsiad3AoVnspho18Sw2N4Y26r6KRwb6xKKXowsnod8HCjP76dkh9UoutPUkinzWGmSTvoAnh3AqpPk6zvL",
  "key14": "57HL3A4yFZdgtWcTJtyryYE9zRH16ruF2u4Zczj68s5q9n9Po2r5jxCcBqZZpj6JvD2zV6fp6PzpJtQQPsxuD9WF",
  "key15": "4iksZFMWok6dRe4NtYQBaXZuc2JE9sUyr2sFA7wZBAJGgSWKPHrg2gK4wVrnLhwCAGLSgCErmxXfPiQcUAKTnzp8",
  "key16": "n5gCxgak39aAuD8MKvCLU4859XXKvzA9bqBYAMXh922q8XzmPW7uug7B6535j4PspjTzGw1V4wfH5MugL5EHrXM",
  "key17": "rpmivQuJaTxbo68K5iCbGsz2Zv7M5Vs2o4ViMdQtyg8ggjQbVy5f62YyGikjMgBJoaMNs649fK4ehYfJrmY6ubz",
  "key18": "5kiYXfWYwYRoXkiFBsQZPHyB2H2V4nkJxDX5EzE6Q35tsR7fvPYccYj9jpn964CLCqYm9UrdoiKtLftECnNC4GJB",
  "key19": "HfwEQ97eGQXBdZRFbodVj4fNXAc8dL2ewSM1tn58Hpagt8yG4TGFpfMUFG3P2DdeT56NC2Hqn2crBHv6Gcveso6",
  "key20": "3JkQfEs2upaXbiD75h6Ezr5yWDo38HAmHiBfriHtgdV3qLPGeA8a1wekdundLkcfhZXB8QBQRygpgEpXzdmo16Fa",
  "key21": "56eXL86Pi997pHBPHX6Jr2cusJ3wsHpvx6Lqoi9BQdgsK1mMw8fegQT5bo2dkMxC9ndKNzQYZe9CDU3XemNYPDwF",
  "key22": "3nQLJp28ZohAWTBVmd7EpA7ietzy5hiqys8VWSkWfEEgfJKL8YTfnZoLoygQ9Exx6BzDM1GduFB4A2kJkscobQTj",
  "key23": "KCFQTMybKyo1FJES2PT2dfL6Xha1LyCniKGURJy7837NWsmA19acTqwFBUYG389uFEETqhXN6Snpr1C2j4TC7hv",
  "key24": "2oxbjLtZt6rgpJqpy5mWAwFsnmLsw4fMVAqNRYFgpfP1faj4DpSGDBDwLjSYXf28gqcP4CwgFTGCDACWzZhWC3oi",
  "key25": "57H4FSvfg18hBdqbTLvZ95QwaiRXeWF3U8CGrF9sX2fHFd9284h8ypb6qaCkce4MR7r2LqGWWqeZVmpi2CFGH1vy",
  "key26": "3HudxxZF61Y72B1uovhvGyGwa5rC5UadnXLimCmRaRQeiLLmPSDLpNPCW9ceQK6EavrPGnJHdnRRoUveGp6QhsdH",
  "key27": "TjEMD4u9P4eob2hYfkDBwmVZsedWTjbf2qAugqrGHW4Nsy1svjiTY6bEWSxpqH6AAP1p5qSii3tZsJRRNANBx8K",
  "key28": "2Hu7eXygE3rd63mU4vPTiw8a3xaBvMPbDhq9Kb7i2doj7trwZqt6rBiJSsJqwyG5YVE9PnZ7CK7dnHEUvsEbQpHT"
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
