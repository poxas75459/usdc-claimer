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
    "3JZQGYrvDdd8q4LUjh4uYsrKDNCoPwXQYg9pQB8ngK7JEAReBdvgm5Jv1nQHvXeheHp4VcE4MsqNHuxhoRThL2SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257p1GdY5vB8XV9tBqPZpAS5eWawb2rpFN6iEj5yhJ9nvu9BuSWvMPs7boQhWeH6nrmAFde9HCJ9eVi53RFRGuPJ",
  "key1": "4tULqhQLkAaGBho7BXHR9HvWDu9PXCu6oQD3Mr8X3GeTjNwqrhoFefe7RQChVKCESH35QDLAvL5gnfci7Y8xdRoz",
  "key2": "2bKUaUJWCxDh84cxkJ7mnRVAVQZKxT4yX6TEf412Ln826QjNHdQnaqXtPMXiXhm3SXHJas8gEHfLzmDTanbYH2fq",
  "key3": "4yFvGU9ztfcfxWpNbSPxQAF7Q66pc7eF1RJiXeB4hoiKQ4ipSamWvcEEvF4xN6kbD2vE9XEk9Q6LQmtMTKaH46GW",
  "key4": "i5FtZrYY495TYrrEBJdZ4HRBJHHWvssv7vgnojURq2wFJ3BvVDPgrN7ZCtMLNVC8VC2D2wyawAp64y7rcXDmZMW",
  "key5": "3Up6CF6mFYSQ9BzPp91UbKhqKnKqdhBSFpPmXC7vJHjtrpz6AVtSH1ff9V24wkuimYhTFCyvMkJeAaTG8e5rUrDo",
  "key6": "2CADxHSygRvoSLSHf842YcHo6unL2SFKPqbQ5cN8hj7ixo2Tvoyaze5k7FpFqwziTPKxbp2KbFGQB3XR6DBLvagb",
  "key7": "iiF1LybDF6Met99feQg2P5my29LJzpCpiLpyDeu2K1veCdjfoyYPdb9vxJC1AZCe8Npc4AJyYKbghUAcy48v33H",
  "key8": "2VKk1hA2gvmvPRQBnK8P941LgG39k8WHXoBATXZWfbBxt4AvX5wz17QjLwPAYidETvoHMH5eZsPQaGaZUymYEEnd",
  "key9": "4tVFq4cu8jmwkBzBEbpuKiRVrYsb8Tf8cq4r2EhrKiBb3bRShcKiXvdh4Cfm3x4sYa8TazpK4GyreptLUzBNvxfb",
  "key10": "2obQbNAWiYkka9Sk4G4Yc87cqRuzP6mKMZpdNJcRYjDsHdB5nw7dKEo2Y9Jo4eivLXd57jJVbUB55ixZWMMSeDRk",
  "key11": "5YvzWH9NsSrK4P91VkUgC6QgvRPfGm3yVDtf9D2zFv11areS5h19rnLwrZ1xRTuECg3Mm93RgRcxYYs8ESxguxhz",
  "key12": "2FECxX4b1RKTTHXhqQqvpbx1KX5K2uJbwPUE5Ky4TLotdwWCxXHsHxNB4mZ3Nfjnp8VtjXKfFYSjniYkkeXDcNCB",
  "key13": "hiRWuwvyH4jfvPcuuYGDu46qkNDVA1XU8M4N7cCtPd7nPRrmRPmY8tXeRT41bX1tusF6nn4XqKuU5geyTWcoWfY",
  "key14": "2GtLBSz3rSgLFGgQB2GwzeKDqC3RE4UgqHFpJeLHkLFUMhr78kFW2KgquveoMbmJSqq3Jpf2JdEJKkV4iGwsvqku",
  "key15": "3jxot1Rn2UP3LfEvkXRsDPVabwtYDiGjHp2x8dUcCefQkwkF5TZCxNyinssvpvhWQdVgCJh7oZkHUjNkXQgSr8pn",
  "key16": "26pZLK5tcvyPguRvmqm8usGY3rKSBV1kZNRA8P5jwooXmoshXdQFCEjF4jRnhRZ8ei8DiLgLbV4wB7Pkbh3XG9i1",
  "key17": "3xjWEz5UJ8XHy4RyuxHhHagyWZc4BtvPaQDjmWukmFncHBwZk7AUDLsu7JPX1UQx1MqaqUH5Xo2fiTabTSU1iwpp",
  "key18": "3aWbVbKhyeTewqedaizTLguTLZan3GsvJrEFwm22KHfRTpTSN67C8vdbwwGNU39wWhuaqWZpNNX27TuL8CxskWuL",
  "key19": "vJzgXyj12Xqx6KLrBwFL7uEA3gXaHEVsvNEGqcN6GQK8XF7fBTqZo7rqLyyWwVrEX5gg5ijHisfwYe6A3JWgJQo",
  "key20": "4wUfgVRcKtwTD82NCu82sMqj38x6QTMgRvGck1F3eJh16qebwt8655NpUbU6URjoCLGsPj3SAgbQ15T81iwLit4H",
  "key21": "4Jt9Hjs2SkNH7RPRxKgoaEbkoia622pHjY4f6i8rqVx4MfBHz2dexLsJwEzfnXFbPZKLSkctCvo9V24FmNMkKJNy",
  "key22": "2Hi4FpcgHkc1WsFXmfCZCeDVrtMDCJivcYZ4azEZizMQe8NVrY5eKeTtiEWAaLvBvaLmc35W2pdymAvgs3LhQt2G",
  "key23": "5zBHx7SbZAvKnnBDqDcEFXLt2fGvAnYJ6YqiNC1FvqDc181VV5zvZv4FvZfqFvZvSEFBSy5VEXnHmTQvmjb8gn5v",
  "key24": "veFU7M39Wm31v4zn1JbZA4NTZgjUF1vMGC5nSrPma3sffqkfd4uGDDKYNtQT48b4U91FttPbS78QSFoDw1wZSxQ",
  "key25": "uVTfhJtRaMB6P1FtZvmXcPJsvXxK6ijP7mt9uf71JKGgsMtyycsRozX65jyDTDXarMNbZFqBqdBYSfDDiDdkszh",
  "key26": "4evCMbiwYkCvdxWugnc5Bz8UQaXZj5kNmnPqVm8wDtnTvtYeSUnL2Tkwh6yhzpYq8QcmGgBpEGhKDVvq8gZd6vqX",
  "key27": "4pJsh9V9Et7hpsXLrnRcespo45ZAqyJknKT28h8AywD8yaxZhayJo4bNiKmnhwjz6jXg5zQiBZYRhBESyFK77Upd",
  "key28": "8zz3UQfNKvFnQt27RjG8LUieUFoGhTPqDqEdbgt8toiNYPEYwXKCBfuo71C7E56Zk5ojWs2f1Sd4uw4sPDQCnZx",
  "key29": "4BqMAszkMjCQccNfaJoS6uPdT8mKqam5ueiosKWpXXU5rCBsuXfB7RJD9RgjpJcDCoweKJjrxzcqTKLkg81EQoht",
  "key30": "3sYiFsA3dtqjq53sckXkX4t3wTprsfxGqShAKawAq8MXTMmk68WaaB2WgQrnufx21vsjENi1CzPjkjofWtFKu5sr",
  "key31": "5z2NBGi4kRZ9YRWs9bSZ9vghnftDxLSGbTThPZSVs5xLhPpcuTHP7sdW7KxRCXRMz98fkuSN4aZcASLoHyFUqfa7",
  "key32": "2BeiwMCygLsyYdaS9sRsxJSujKNNHUpBStSS29CXoj8f1yJbDLzaLVGeAtyfC7C8pdBtzB4trB2vpjMoRoK2mLwA",
  "key33": "5Rf6KYrJrZESKubZM3CLuexfWZXDab3DqGVqY6pqay9U3YxArJd2V9dvidpG9j1pzXfFeK5j5gRNk5pBr6fyHcEv",
  "key34": "2wQcddXATu9nEzFsNLof2wR9qkW8XaLx1TVPYVfXn2sN4G2kxEXs1nNUgzhrfPpPFBfrM5Be6MtpfEvsGJr9fxnD",
  "key35": "63yKNu6JA7HgnnFmqQzknNsMoyw5kTjZbt3iW2crdq72fQME5DyoBrEWfi6M6YtgvHAAtV7mhqVKwtQ7SxnJpKrA",
  "key36": "3DTPHQ7aYdvSoVaznRQ4bxzw3k94fyCHRjqBgcch3oLGxasR3Qt81n5zZ5mWP2KrHvibfDPT1P8Fb8JxftvGvTGa",
  "key37": "2cdyoNwQmU21xRUjQMymNvY2r1LY2Z8CpW5tCh8LdSfP76sNanokvLSA6sAMdRgNiTHc1zoKnrnpN8XRvwdL63nT",
  "key38": "2sGMmWZ3vTNZNtR2EJWzZyzjbjUmRa1Sr6Z59Lcd4M8at2Z5bZTQiLMHagp4R4XRUNz8EGo5oTHeqtZpi5RPqYMv",
  "key39": "KisNnYWDdYzms2UktV5db7f4oWfcZYqPEbcpSRJva1yVjiTh4fYRPotEc1Vg82WVtHjDGFSJuYuWT6WSJUXPrLN",
  "key40": "22eTet2ufmcmcVkSKJnVhcbQHKxTZtXfMVTRXRx1UmugPb5q9g6zFASVSB6AeYmWMdXkjLRxaabwKiL6o4kpJeGE",
  "key41": "3VDzWGvpWoG1UmF8LufBp2jw3s9VJ3CmzPFJmVEQnAWV4EzNJPFB1ikoDMTFvjXME6HLQmkv6HXCYns1S5UmhZNP",
  "key42": "3hHQj7bEmZxXYU7DTiz3pGw561RjahkTY6fcZ5TNWC9ssX6DzfT7CXGr9dtcVbWeJBnkcZdLVah8fCDQDWPZjJW7",
  "key43": "5rmuTntRKdK9ska7rczc8t2kGY1L7o4XZ2fiHHieoziPYL9GHtyq7G3KUK4kK6YsLVFt7fp692xQ2DDvq6gUFgcV",
  "key44": "2hkxe5Micn4LfXVqam7PFoFGZK49UFwzXuYhpS33sRuuPRVLLi8CucRNPkR8BfrvKHCEtYMzYvrGa9tUEtW7z6qu"
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
