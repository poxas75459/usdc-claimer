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
    "2edovUqe7bQc4thLe6LU2Kw9oMMehzaTyQSmok3NAUCr5uSerMTzcWPVpKw67GmovzXXUi2vUAo8isRnPTFZgdsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uG5aHkqrwLwXWKLHmFoNzChLLbBDwyJL7j5rS48XnoLWfX2NSpYFzUd2SfVwACMJB9Ji7CrJiFYMs2su3PLfuz",
  "key1": "yyJsfLMXYuEoWDe37EaG72FvHkPDFpXsfpyYj2BtFssRo9QsQnXswkAcd4bMB9x2h6xnigodsP1J3knmRpgryas",
  "key2": "5RgNXfhhqEogotXqjai8d4Xka9JUy9FgfPpsrCRr1YCG4AXrsSH98nvTuTABb6hreMMSAaYkRUobtHMhwNQogQC9",
  "key3": "5EV7kfzWK63xr1EbFxdsEKZmuKiYssZ8jsfUy5vQMQefJjsiFcNTwDnj5dYq2khqdgJTk7B7VBLvVD47HThkTu9N",
  "key4": "41uMr5wgbvcFnP6yFmzbsB4CuC3Gneiw62h3D5sRUUZabzmR6Cmd5fCwFutkJHNRzTDjtSxutmP8Pu1t3AVzwp7J",
  "key5": "5XVTa1LH368gaEhSjMAQCWLJDPyckq1z6aVfeqvb8sthFdyxh7sNnqdch1En8Nfs98phqJa8oFhqwQ7Bw8u6HLVs",
  "key6": "2f5MyENJT8B4DAKd3L9Yc71Gs7wPkZwZ955mKcpc5bYX9DCGprW86WWikYGTzETYMLbkM1AunQS9NPyyz3hHzWtM",
  "key7": "3j6t8iks8Hx7EA7msmyp4Kp8WZXcmE6zjk8n8bd84pjFAMdWUwkpMAsRCdmdv12cM2XJ5xEg6oPUVs4ETdBVm5o9",
  "key8": "4mrn6XtNimf35b2uu8uJ56niYZ4LuaCBKcfAGrZg2QEyqqT4S78hJnW2uad6WUe1XduyqB5wqvmHAttpkGAa6Bi7",
  "key9": "43xnRpvuXwU36hfaZC5DaykUu89J8mF3bmucUuJcq2TVuqQ2d22Z2iDcUjTgAyBwNNFtoFGRLehc1dk4gTZihxWX",
  "key10": "2YBKY1cU6TZuNHuNJXqNp9VEf2my4jyQVNUigsJe5hqBU4KdQ3yofkMr6gqk781htbumab7jMCS349kmwTow2sqz",
  "key11": "3LGmRHMpXT131gq1Zg5ZiFLLnkyoK7eH8mMAnGfcCAa4EFRVrv2qMCddhPeGzN9voDTuxKTvVr5bS3uomuB8PJcx",
  "key12": "65GFecg6H3peeiBCyX5nW9JunqtZWyhyCmajWZGcAdPq3r9BFEBiDW1udaH3QpQTfGAF3tdnLGqjE9c7NK1Lc1N4",
  "key13": "5u3J3Kqvdbd72NmzhwapyCx9Zdw7pXd5VoA1EB9jzFeJnDrLeZbzxZ2opdDx88Cyic8kEora8G65r7iwTBnoW1rU",
  "key14": "4d1Z6fj2Y7G71khjPorYPzgyrDPanEFuTkppzXo76FGj37tiLY7dPP9rbDwKbgyPF9YwS9qUsk3jK5Ug787uGnYH",
  "key15": "5De3DQ8N36rhLnKBWaBKNJ5A7aTqj4agsYW7n5jZBQ89nK3LpAiPQx4cH2DcDcBERVS5J4JLJLQLFTWgFAxvdWQS",
  "key16": "5vjm6VphFGetJfTz78JzBGpPwoEAux6oG9ZLLiNogBGi8uHJdfT2zCpxGGSWwV1zLL6uyexymktYgpj8jaqbGvk",
  "key17": "2MbHYtMLQ1WfdHxNHo46iWpHaAm4kAbXjbZSBEN8ch9yiUS1iS7XbXAgK8sJq2RKcp3L9HTBg2vT9UchfiXsrpYs",
  "key18": "5qV5EfhLmAFLykP6LgPS6Fj8YBEsKT46eY68QRxT4uwEGxh3YpNVt3rMcTHnSHDxPnMafw3nU2sRQe5pnx8Jovy7",
  "key19": "yhHfVdB5jayVaggWfz6JwV3GKgczo85hzU4tuQvaRmPgJayNxDttPw6bfqXDvADeoDpSqbUDxqqCBHTEvCjWrmS",
  "key20": "1BcAyhv3DhH8xFNdyRpdiwL6eE5qYwLgbbKowbcTiJKuechqx5xGJR2hnQoEfU7KqdpXFez39G1U3C2toePLmXq",
  "key21": "3THxukwwreb7VUnxRDMaSpRUTRigSVrMnBLbUvJzTcHpzVTRAfAZeL4S2mA94QjM5Urf2qU1sgCqxZ94AraT2HSC",
  "key22": "5FfaF4mGcQU9DvPS6F6CevinEVpmAXbwHnvTz9HzxZVFa3GyQ9R7pi4vEPHgdWXmBuDsfaaUY4P9BG6UyPvENojK",
  "key23": "48NhcV33Webj3eSXBpzqPwzCNzB9EGcxw4s5Ho2qpEbFXKoPncFVgFcjQdy8nDRh7DgXPEMHaMeM655tXnXvkDo9",
  "key24": "28BE9kdPbZT1j3egPrciFb5SDR3ZPQ8fU5DFDsZbvctxnMtzRj35TMBHgezzA9Y6N4rWyfy27yw68wzob8nSDJ13",
  "key25": "4DAi877wSq8kfxpS4SWi8z3Umo7HygBpireLpHvv1FEToGPZACLs4kqCxaS2zdQGih9M76C7MutSBfSxNPjZauZQ",
  "key26": "4PmabVjW8RsYBeJNohLG378iVJPAqAgyHxytpqF8ZVCTbrk6yav7fX7HcihL7GZTDTmpoexWHQqCgMU5YPkJfaVv",
  "key27": "52E76uHjwp7AwVd4vzPrv3qoYr62jp7n1hQjyGPPViZTFQKPcjhhVfHh9XYGbdMiC2vE3nqieDjqgWFnSmvVyLAM",
  "key28": "2fb2MvAJFKpu2qetgCCmGerx7uURHTie58odeYPJnotwQVm738j4thE9L8bRuMJPHzpkUAeAi75YSb5caMTnWvW3",
  "key29": "4Fku4BrG2JucgniFgvHfSJB3NYVg2KCKrcBUAm5uAc5s73Lou2NiARX6yLB7MqNnD6CZk2NonLYMZocZfydmxjnw",
  "key30": "nLSB64rsxfsX6Ff1vWrAHVG7yqvpouvcDhdcSESHQhzvW2pgyLczxqnNfjuMmySAGwjnio2gto2UU5WcZS7ecNF",
  "key31": "4V67mpoYSt1Qb8tSEG2NArLMyWfBDHyBeGSfeidew7jk61GJkcyPNbXDC59Gdzb7vxLanYrigNf94VpH7KHCJTdL"
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
