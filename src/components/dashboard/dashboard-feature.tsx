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
    "2Dr6hfC4vBjsz6ctTdcF8iYsTRuFKbR8beKS9LLr6zqLSathp4DFpsDsuXvA37eJP3mpFLTe3ysqBWevygguajgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrrPpgy1p7TNwWfuPEqRNPiBZWtk1EtWtNpBZ6RCzU4Fv2ye5M8BaYSonu8hxHYTd7nNdi3MDark74T21wLqWMz",
  "key1": "2K85dn82QjVShNKMEhsTq28uYBcSxpUeZC4unU6p5bUt5PU6pCZn5PpeyZNzxVkyi9MWXmwNLncbsuz9jJ6e2Df8",
  "key2": "4uLS3wmoEVRZjczYp2GSrexVJ7gC2RUrHsd2c4HX4xHJ5Qy3V6czd6PHbxUd9P4ghphxeLYRxAJK6gY4qfzrGa3Z",
  "key3": "5Dtb6Aa9Vwgk1tRV5dD6vyrkmXkt2VAMn8fmYQD7Eh9ZJtcfxeo7NWbP9G7vGZt7LXDoASMGaHKTaJ7Xy6fchYFR",
  "key4": "2UMKGu4iVLKX1fwZCkwP2pq2ZEeeTzYiHS4Yqe9pZADcxZ9XX2jyEa6ti5FP2DjECEqaHUpAdTsR4mESeyje66se",
  "key5": "64iuXNGPx5qFRJpkgd8yJLhv6DYdEmmFCpdFKPGn2Sve6nX9VuHu3rSv7WCcEMtEZzZqSRJhnRvbfrtf4cmxpG8j",
  "key6": "22bGtYtgjnGq6qereB8au8v53CPxMYo4ZGKTkmVnxZ34iHAS99FbtrTUZFXH87L22z6PDK5CB82aEV3MnQFVNgbY",
  "key7": "4WF64uh9aMDs1oTi75DfXk3GTWzZZ1efqigTPY9cV1zfMukP6hunfhuUiMPuvtt2Eaj1hn3ckAZQFwktiKdaw52e",
  "key8": "3G29Dk8Ey4PSB8o167VgnSZsAF9GVGihqnwvexrc9YdmZB2k8NqAtCxCNgmwYppMbK81BA8kcaKbAy2suzGwJnJw",
  "key9": "2s9NF1dLkVL7JGtJEJCRgt2rZUCDbR7fsft5r7YF2bt9FSCgMKtbmsJyfDLFF5HNMt7cVDA2JYNFFy8t8zcRLcQQ",
  "key10": "5wV4jU7NVzpUwBQxM3u252ZURYmvRSAaAGR1vVjYxLJCooFvKSFMEZbNMUF6kjE2PDWjM53tWEjXAcH1fSbkrsHJ",
  "key11": "3yqFf2Vp2SQ45UiRyE99TYGX5iHr9xe9MjQfP6tES7JL2iY59WgtHL7C9tzRz6hkPvV9a9FCVE8Ladkfs2bWbFTt",
  "key12": "5M9rNFKc4sxQSaqwu4mdQ8T2X128tCt3RDXdZyPEGtgFVH14QyHtkf9QvjbGSKugxvgz9LZXEoGxFVTognQK8GW7",
  "key13": "4Wkf2JuSwJitohCt8d22p5U1oCmpmdpmaDrLoLPaeb3yQWZ6ZAE8pLqSqJAJEboV2sdJWtXbMgXkrtgUFq7qdvVY",
  "key14": "2qD9ZcUJHYYNQUdFoRD7nWrJeo5MdQenpXGDoYqaaZKMax39mR6BwRyPukfG9BtjDwyJrPo3ejcfEGWi4zs32Nex",
  "key15": "4ib4reqJGjuMGhAPWkNuBdwn1v1uxHYuTvfBZL4UmT8FFf3TQiQqQKimSJt4szg59i3eDGcLJLSrBbxr9RbqHP6o",
  "key16": "5bM4cMuZRVV75RiBDa6L3cJdxdmg6zHbDTVMnnt1N1icQHaWcdH73a67bkCc18RJnmbaee28yMxs3GU9VbEtoJqb",
  "key17": "4nhKMSauPBLDUpka3WM7AdBdQjj4RKJ6egFwiJy1M5oyWUQsLrHyKefhRqE6SRAk6bAMQwTZ4XgG9RDYhPzsDa9B",
  "key18": "3mSAXA3bsmBUVo48h1GjLhBFKNooqxJHf1Ez9cH2zPaTX9xy48PNNMwB8uvX832Uf2MAChjGSCyJzDwNyezCm5JG",
  "key19": "2tc6QAWQpP4MnqSzDNVHsKgy4c382XADpHjp12eaKCM5QH22Zi5i8w9skQCKkds92xbz7rsrhUZWR5NgnDLTFT9p",
  "key20": "3uUQARy26D1nGnchzoEeCU5XzxdeEXPTTbqVdjc5YGJj1CSjRVuZZ1reWmBo4Dgaa2fzgtc9raU41sFVudZoqP3y",
  "key21": "4k3CxYRyo8GEHvRBeH9RYE4AEVZqqAU2YjA2BHAg5U6wrvxoSuPu7duHoM3EK4zSSZkevYSbvPgBqbt5UtSw16Uc",
  "key22": "4ZZp8M6qLrxTKj5vFNY1TzvpJm2RckCjdykwPcqGinrzegmmf3VCQbttx6YsXcwwi9f3zhQeRNDy6gGkwaNJUkUt",
  "key23": "4PGp4vYzjcLYioL2qMqds2Hakaf5yGm8zLg7f7wJKJ5ybWexyK484bQmd7kGXGFZGcqknT3fyBd2tKvNj8wvMMxX",
  "key24": "5r8pJ1Axc1SzbUAEJtACHTjg6Sz3m1euNZuuLtJCmm382NELKvpG2BniWhZfh9NafwTb6vs9KAWuyUtZ1rtZny9k",
  "key25": "2wquaafcvRrvhoLAnaXqzQSDz3Eb1EX5xLdHL1hMDS1YHrJGeXFnaS8uzrxUaGarXm7qWy5PGZaXmKcVsGgrFy2H",
  "key26": "4tiuUtX4nj57pBWNyCEzw12mfx2qh7NJ2D739rk7JqqSRpa2fMPa52ukneH66Zof3mqgGQLYqRnBPVfLynpPARSU",
  "key27": "2ZJ9LtExN8D8djX184GRdVGzYEKzxSotLoCitgdg9h8nPernSWP3CsRDHKts83GqCs7znkWxFBKimTtTjyMyC3T6",
  "key28": "22FYm6dm4zwRgFySRqhHMBDT7roA858VYYFVhx8nVv8cmpSUrng8yKFPgLDHcusUpi9x5qafSN3YE6kwR12UqbWp",
  "key29": "RHsEMsp36CczDV4Q3w7HE7n6Kg1MDgY81nWtafBqUqJFZCPZiJ6uQb2j8WHZE9SHLrggm8LD8Xp5mwfUnQQ7Joq",
  "key30": "hdviX2cHmrpbtL6t8fPV1vFCjwmxDDnq8dFfBQUvUGJVorSRcaaFZWpPS7jNkWFJvAtHnAbihnSC94uPbkU1K4g",
  "key31": "3F41SMnTn7TNVkSndQvjrj6whLDHpzox6S7U45vsTMV15uGNesrHRqszbPfnFcUDo6u2EoX8ECqo459TN8mgjMBE"
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
