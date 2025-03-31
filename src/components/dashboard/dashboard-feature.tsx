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
    "3RFC5HuMyk5qB8Y5ARyAwgTJ7VEMfvCJXQs6KC5ziZJL2oXBmbhg7TwXJ7FprSJsV6MgeQ3Ny9RNM7DCFNTzPc7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDnuah9rL1E48L5jkonB5aFqfumvz4cG1baMrvyxqqwaqBeJ6AHYavHDVeRpaySTSuFFuhmo2q6EbEkSv6f31tN",
  "key1": "yvBSvAprrQ5XnBvu6xvoWimGyBNKJYLogX9n9bVb93xkt8r2eWVdjstMMWMHx61nV5uKT32vAzF3AYtZADNsXTk",
  "key2": "3E6K5dbpXpxhYYyhScnYKGPpiHVyfRL59tqp95WvzZJdVADUZuEwVNuX7xt5XwpRLBxhwt7KvdPvKwqY78ocS3vg",
  "key3": "2SKn2LAP9T2UpbWqYsBbJmt7H1LBhy5EjtXaLLfDBTi4Dn2pXojiSLw3RGUojuBf8WECuzjroCgrNJs6U29Hhi1m",
  "key4": "2Hdx8m7XD9Vg8fssxQn3THaWMUEja2bihrmkoTkeGwr7dKaFjuwKm9nyC8SqeYhgcfViqzEYAModDWAZs5oGMuMa",
  "key5": "5tYhThWeFawQtHBHNkRkPMEK4VqthLuVt8rQMJCjeYVS7CDiU9xAKshqKgVnjbr4Po45zqQPKcxwD6hdUPs4nUv3",
  "key6": "27dfjWLnt8tmLrYsVyoFUByuWsaxtn2xXMrZ8GcdTn2mbvPvWY3YSMA9cvJ8qjsJUzeZpSRcvJ49dfe8DDZ3HPXG",
  "key7": "Dd7XQCLwjE5WKn1nBbrAsxvckoUwJuhLAky4uEzefvixbn9S3fPR4XPqUThDfXgqap94V9jJcFxPjYYJCTeWAnF",
  "key8": "56cZmaszAQRpJWqDc24nDa3b3mqDzWaBPjY25eCSGjWvDfj4pJJPKupbFVRzQsdhWq292Rpd8rUt5YLo3SYr3gF9",
  "key9": "3fF5Ee63TYSk1dzJEjaHy5oAUPoFzVAh2EvEaY4eV5CJfBFvVuQGHfXVTYPAXvWVLC1NMaPZk3Z1BKDv6L6zLJew",
  "key10": "5HWmWLAi2bqQjHuukVJJhAoL2r1SN1gEkWriDbD7XUFfRMbBDTg61gnmReY55gGrUQADfMCgVEHTakD74xZKUfFz",
  "key11": "rnxVeNxhYyjE1SSY5rCr3747UQWpC9sTNYz3jz3PBFs5anukPrmUBq38GASVGEzghDj7UPZtv4E7WZMj8sTY6cf",
  "key12": "2og2hRbzrd91z6C2r4DrnQ36k3mcRxuqawqngyYydU1Rj3bfp4NaW1TJhPe92KJYDeedRKFWK2Jh7FjjJwLVsa9r",
  "key13": "7Qg1sejW3pgs6zGJR6XQeS2q58Gf4NaUbUT7tyfWfkMpCwkV14QnMwPKMWwsVoK94fpEigVbCjeiNmj3ZywZKs4",
  "key14": "t3T7XnR5uaD1EnxdATL1qhW2yDUZPFubsuxq93BxzVc1ND9PXCzt3h9cTJvD44ErgSyLxdrU4TonfPGDjNALMom",
  "key15": "2pNG4aLaVoNCaA94QUeL4a1nTfcXkJ8gGTWkAb8JsHxwm9jnP2vV7iD9EP7xRvqbkdfcKXqU1ZLB756Txp8Jdq5H",
  "key16": "v1TScPey627dZEQ36nTQahFXENxBrFiezhNXJsw7chUnx3m9rWJqiLJXZDVarr31hQP54NCKMfJ4ToMPai8MQ9F",
  "key17": "5rdW9LDY2TCw4xeyCe9v5wrvtmS4TqZ3t4rDRaV8NsAvDfj5pdwuEHTv4Po6boBhrdwFB7ukhjSMRzGNQTpdW4vZ",
  "key18": "i73C8XhYHQR1aN5z12ZCBRTmxuyRJ1QP1wtrak68ERNfCS4GTtgBuWDjSDgXvwTTo4BuTLTK885HXBcvV2vEwLp",
  "key19": "2P5PqvehSWYeSYLrwdwCCLDPezMY8o3qyVSAvdrDvfzwE5enHdvKZz1sepHxjkMjAdVirwpXTMdkt5fbSphXfEJC",
  "key20": "fcUb2m4D1Vc7Up6nzpKV8kB6Eh65joHbHdFhZqHhPiFpS7jDD62tsYuiTvCM7Wa9cf92VtWXdDqs2Qhneey4vWA",
  "key21": "2oja9t8Ma2KkUyo9kA62kbY7YHVNE23K54Up4rPNEqpwANfzE8gkFmvmMg8iZ1iThLeXQbuZZmojTRovHYH4addj",
  "key22": "2sArjWv1KWuzr9p6JuU8JDzDK2BmTg33umQytqPEvD2QqFbFvguXLj1NFpBURQZJWr5S9Jst6crM4ZZgJ4idDhKo",
  "key23": "48tfxFMJrmheE3eyebVShMkzVSXi1hmGCLQh3UcqvKyVwU1UenFQsUiASQv4BrN5Xag2Hjsf78YMJmo1nXZhTFVW",
  "key24": "E7oS98qBDfA9pKnpaNg8Q8F3Vs8YRh2pCU6h8BsdoYKHURmP2hbgUXNddXC7mxVg9wQmoqoV4Xg9X2dmupvhjBU",
  "key25": "59TmNd3Fo3gu2pCnqn8s4gzvjohWn7idoxxa2uKCkENeWfh6Mph6Rd1K7cdCWYTmNeVa7xvDj7qFXbxbFD3shCVs",
  "key26": "4kk1zm1kF5Nw4P4sEc2nwTgLUEhMWEDvdWEFgjoWKHiFoUQweWbKnGdxJ5ScDwCjdfiscGBtmsao8iqfBNVnFPuQ",
  "key27": "CK2uwGTNsgBULymdcjg1MDdqXgTtXZiaXj3vZEB2HSPsmPYJ8KykjCYiNWzrgEHK1vUjkvh15KHFajZz9p434Vg",
  "key28": "4tbNnx4WxVk62rnrJjEmbtkkxeMk6Nn3b8cL4BAfFEEYho4nhu6pRsFrbczp3hE5UvDWHubWStdo4HJNrj56cc8y",
  "key29": "5bhxsHv1otboyF9u49h9EgGFPdwyPSnpBdE4wccvz73qhDtrMuQC4dojZxmDR44n1X4PkhsNGzawwY8KLav5s7Un",
  "key30": "4vorhbBPVtgYM6oPijohCdARA25MpHLzCP2Lc9bjxab9cHnB8fbSAd1baF4DMAvXD9BCRZur9BhuNKi7vnxBHNmi",
  "key31": "3vwrFyx4pGEcUJWyWdB4uAKUmVVbUDGQ92MLjPCjRw4aTDP6sgSTeSm7r4BpynTDxyvWtvG5PfLG7upi1FePCBwL",
  "key32": "HGZpexA4ph7EuPKuZ36cSvWnxegJNhmvt4R3LwsYdgtPWYhJu6EuXFd1cTXWYfXPFD78n4SEKCthqKQXzfbafgm",
  "key33": "X3wQVQ6L4kWjG3mPN7X14fRW1aiYmRDeg1Nomhi4Px2giM4qTP92tGGnz9URFnFwjwhujAj3HRHXRxct1rucqHj",
  "key34": "U3GT2vw9vLYq93tTMeUmnjELkri1WUJd2DmtbM9TAyVPscMRMWsk7Bip6n5gb3t7Vn2wvPSBomTsuNSNAjwEJuP",
  "key35": "4jRBAxL22TKorkyzaiYKjpUpiRBfUYEfavv271XnebhGsXH1iYi4n5VybmJcbCwen3L2sNNXVAQjNxh2np8M2KAy",
  "key36": "zs7cESUaqZAqakJ3BHtWCfL4HyN1MRmLEsx28PRAsgdBRx33ZBhEpo6eaTgZdwNPUn98ciDtavBEEoZqvr1vJWF",
  "key37": "6AznXpiLjmoGhkecB585DLxPa74RuPBrUEyt7jJB8x2ngEvTJzSHcVoivrt1NzJ1AXuRs2zetQhJ8Qoj8Eox4AN",
  "key38": "BugWEXSHmaAfwFThoeU5gKiLL7ZGUfHnNTwYwDhY5v8RpSMpvPGuGvrxywwqSJ39cJeEccDwSyVrnwwuKcX3LcU",
  "key39": "3CdMASPPXfW8sotMApowjG67CjLUmChZtfBNWijjq5EH1QfvKgjS54dhnreNaZQiirbajuMHrygFHzMKmd7Dqb4C",
  "key40": "3NTrJzqyJLr4UDSNSJeBPCnWgFy5Ze8tHQwPmJamUCWZYe9gntnpsBb8zTeV1rSLXze7iNwv5naUfN3yHMGdxDhr",
  "key41": "CvaftjRerX43t11giBJEeWMR2RJ9jf4Rv3tCxKsxXcAWb7whinfJbAZAZuyWGx5HQChUroegdJr52oNMd4aKSSe"
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
