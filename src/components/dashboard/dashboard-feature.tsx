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
    "jiQ3bpy8wxEygdgq7r82j1fTpiBUaDZmk1oKrQdzqpDesiWFBXnJQL3NtsY1ntXSejcnrQETsdccvRVKZLubMWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4ULxvPjimWa17FAbpooB2NrH3xRiYcR7sa5AhyT7eCRvTRD7hvX1kKELwhm1wqYaCT2eaqvigf3ms4xrZFhPYB",
  "key1": "4BAjVAPQdLnKJvNaxRrNMyLUwKcD3a1A1F6ajDPRWQJzC6DbMLoFS3h228E5qN7cusr9ksmjEHLNVzWHx3uUoR9V",
  "key2": "4REyQp1ZH6rvco26eUNo9EGn5K2isQgBQBu1cu3ApoErQdmEtwXw3PVkkiExxLFAdqaCxJeAJcN6aMC53DqZ9bFm",
  "key3": "3STftdxYoiMoTRqc3yihJhEgYT7VM9yYkEejAPmWwMfZvJt2jbYs8Y1Yrrdobgwp9qT6MAvXPAkn3AHZMEcGRFZZ",
  "key4": "46KLDma9R28TP4hYvy81Vgv9eUa631kPxLGR2LUsN2ahJQyLf3mJEnvEfDtLSCYw6wnHGjym788Me1kfwt7XutDm",
  "key5": "4Rk1iuvfRDea6YjJeTSyw5Fnqw9EC2E3E514fXJBAZDL3TCqRvViSpyz9SJDf1ADanPH4ZGYkMHGgf6yGydbEVNj",
  "key6": "38pnLZjG8UKtYGpPCdHzGXCECznFCHJZctZZafSA6KrjjTJ169MuwgPxmo2incoXGoTEMZuQpzhb4tbdVdojDGT7",
  "key7": "3AF28k7uut2bVyX94nKhz6d6AumPCfp17L3GcLfVodtvE42V4NwEz2U46gQJ9GgiGVYjzQXvpvsKdbcmdpjBDjZo",
  "key8": "XZbhFWsJriYWDNpk83Y64XTpRcM27wYnqXMUchMKXNonQ1HnK4YGbBVKqByWjGwwjfJhSpjJpXJC7iQiFgArfsx",
  "key9": "5KSXjsf9jKJHjR92L2dDFCSz8MH6LU8qvLyUVnBHvdUd6DjPs8SYechWH1nf2qDdC11M8LJZKstr4gVgoBbUTfSs",
  "key10": "3K6ahNQ56H417ANLa18CLhYG22weiR9kDmvmtYfmSkN9fiQK3e1NJJZMcCsPoa9WLyba5m4Z9TRx9CigSfJFT9cw",
  "key11": "54D6SUenrmXhigVTyb5j6Tv8uqDNb34uWbeqX5Qtor54cBvLYE7aR7wBkRByHKPQQWmgj3pLopnWVZW4h57C3AFA",
  "key12": "3pD3orEgk1BYqQQwbr3tWyxaJPPGJFbGTthruN3jeSaTn1JkvP33LmnwcMFzd8EcPBMbSm7tp4cEj2SoFNMD9Ruo",
  "key13": "3sdSVvJT6qC2UkEuDBNHmTTpjokKvtxBTBUBRdCMJyLhAiiyyput721NqtCGe3uvS4XRM9gpBYVrPtz5NtFKrft9",
  "key14": "54yGewymisJfsXaX4fYrFstu9c7yofvrDyJnMtEKBgCHofTEEewx4T3cCDBbomuGBgaeggLvU7zbDaxzYKbgSLkw",
  "key15": "3D2sV4kVogjyNHFG9kgUb6As1aSN36Rm6X5XuVnnHjuadn4RxpKL9FPavNDL6JG4Cb6JP3PzKv6ptsS12vv7P4oi",
  "key16": "4Aqd48M35gijir2cgeNtGgY5nxQBNSaWmLBWQGwZQiuy6qEhZZ17TVx23Yd9iq8j4smQRRbcmgNdZr9hgKR5SGhe",
  "key17": "42AAaabLiGf4VyQgBtaYdTx8tRynxoxakxaJdCjwix8TpztvTxCYYAjNkt3HqEsDT7rjS3TpoWiKecj1y5eeFM2g",
  "key18": "2YrCmVPQKCmzFdvy25U8WVdYYwNed75AMammp4S7R9QHjq2HRq8u3GcS7wd9KST2vFN2pvf5isFsvG44ySoHCfTQ",
  "key19": "2FGoNesoCxF91KxoMoXsAES8iNCjiQ1F33gA2XqEk9hKd752e3LedeRTpnZb7dh6cnHVNQxm69b38w52mKBjiyM",
  "key20": "46QmjPF17Se9fPJLRbGvhvUrV2gygSa8SivcxKLS3hXSjx7MZntLuxx6tFsSE1wW9VkyTkbkwWfArhzWUxVhMWnT",
  "key21": "SEcFwnds6DMutf4NEMNGfQv4fhhCrvEZWVZEXFEyRiiG9jXoLESTa2ZwJ1qbaxqhbjk9LGA9B9hndXETyDjJE1A",
  "key22": "4zArbh5VTNkUjWaci4vqNTXFMqpvsekxL1U7zNGY8Pq3aotKyHVA2Nxjm9UZHwp79xvaqKQtapgSfg5cBvyHvh6m",
  "key23": "4nYLjjV8D1Bst89SDBunn3RWEP3XxSuiviUCh1FFcZFhsngkvabNuSvQpxVujgvm24CXcwXYdH1YFFrRHwYvcdn1",
  "key24": "EXSZna8bduETdJxCckvMWhYcfJKaJkw73CP6tHAeg6MgWtsRW5gsEYJmaGE9xSiRnENhZsaWzaRDEpTVdLx9fve",
  "key25": "5RV4iiHentbr48JG9nFXQLFDrP99vYo2a1916vgpPZUabe4HDimgqTmmiLwQgkRRLU5PFgMnw5acR5JuXh99MGqG",
  "key26": "3GNd7nst74SBAaadRbpV6ATSmDNhAiBuc7txaN4Bh6honmLyYk8ee4EwvZDf5N2HL8EfuoZysfnHCVAELfzwAStX",
  "key27": "5HniRnPswoP6QUkwsczVT58rFq5N82WpaVRy4z21wm4Y9HtYKgQyBmCvk9yrsYu7H3r652YDwdmpCPb9URkRn9xp",
  "key28": "2PCWFDWXAHTPhUdaWZJXmAAWXGzcHHKhHsV532s4FcXZw2nTb6JkwmThRw22CLo9ZcXnzPK85t2qYk4CJaY7n8gt",
  "key29": "55twdRC1RqR3xcE7aXJAzgbX3Lndwk7eog6iEiukuk41tCKERvL974zSiFvimGBbJ3MuwFHhWhkwNbXzb9YSNM4N",
  "key30": "2p5gXQjcHkNGBACqUcd5poaDb3CW5B5T1L9Px579vAL2XnAn1vgSu55eiVLeMcJAVS49i9UJmjnNt9vjnJLVbsQt",
  "key31": "g8sw2UnbravESFex48JkwsbvwwcNs8wgk21UqrfiL6JaFymNych92VJZQru6iAA3CsdUKPFqPeiK7nxTb86W5ZC",
  "key32": "5keWKe2bKXVq3dctvphg4LxgAtb6jURDpxfUHip4JJLmFdwZZEerkJJXfxiGYMupZdjtF4jTDHVUt5JBnLA6xh8o",
  "key33": "TqLcVmmHgsVTV4GF6T4fHdS7SUe9Y2CPfVn4D7chAgSGiWH76VhDB4TLzvuYB21CtbhDymuPYbsbzkQow4rUgYD",
  "key34": "51iUiWGR5hBNFCk6Exm3LA4rWpTJ4XMD19Vc16K7VjtujwLBZa2qbAZmztsRxpb56piZ4UdTXwr4GZLjXo52r3ar",
  "key35": "4CmPXhEV91pEaKPRpewEruDqNA7cfnffg9dQEcBi1S4qHvviwdauqqUb3y334vpEvctxhYuDMsQ5A7RgWt7RmCa",
  "key36": "4dsiGQ5qNQggXGifRLuJaP4AkzYyw57vgUTjq3XekGygaMZ141WLHAXCuQz1gdNH5pnsaP3ZQPobxQ9cf5m41g5e",
  "key37": "4hXuHJpExEScmtfPW5Nk9GMVfM4J6Ep2xRA9kwbTLRH6kMsARt6KYbx5SfqLHVDREdbhJybyFfVmz6BuHo7u12Sa",
  "key38": "3QBP15W1isFhtfX8xhbdqNQQFXRXxC387mEE9xMWMZVj3ka1NR6AGEH4LaB7Gk5z2FCivRAxAe7GFsUM5ptyzvsx",
  "key39": "4gw6Zxt5JaiZxg1KoYanap4t3T2o945zdQMB9pvRBSxXHo8nytRzEBnmYjfaDAqixoEbuZnFunr42X6oyWWcPu8w"
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
