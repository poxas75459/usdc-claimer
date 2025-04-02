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
    "1HV75ppJ3xJPze8o54ccqhAZeoQ2zKM6nwmjnpM1mE7zkLcJEMZ4y5CYp3SPrS1kVu48y78687yPCeTwEYcmzrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSgifkeCh6hsXGBfJ3uXwBLFBbo4v7ki2kwWKB4s9NF9TCn8nn4dGBAJ5bwi2gz3hcAz3RkdgLkDAGLBu1hjufT",
  "key1": "4yhGa9zs2QgEofwcLRbW8TMrgb9wHqig5SFTLZLUyx36aDwgMqq5Bxx2psaiUo1CLv7qmGDmypf4TpQm9gKi8Uwy",
  "key2": "66mDRp6gy54QVfAUmCBMvZDGCPjHm6uPrmzmgEov5QK6S2EAUpZAtuJpDM51588oVsVEmkNiWnHXShXcZc8TFS3d",
  "key3": "4k8qGWLPqeCxAVqh7mktQu5tEFYmDG46WptPt6CKn7KBNmqbY8KgUxbLss2bxyjZoNCyucieNm4Y62znWAjbGv2K",
  "key4": "55yWvrwp7iSHFXSTGRLuZFEFGndARwBuXTQWuCK8VQ4MCDs5SEgG2qk4GgtvoytsoZnXpCPpZrGjv1MoqHXYVRC6",
  "key5": "3CfQDRo3dSY4qTrHToD5HyZ6Godpb3JPqQmofWgVuTm9AhSe8DAS5f9uedHSCsAmxBNF7nZS4gCZNfrf1aeLHiHx",
  "key6": "3urxFd9EtkiRtcJGGnET59rEkRWSW7AP18NKBP12KVEt6Y189q9tnEVJvc4Gw22djUjq9oTBwLUpYTmDJ5Ny6gVo",
  "key7": "kkWmn2ry3X796erzKGbwcHBKbbzaP8PKBXdgNeLD8iUfEY2cjR1LsSGEbdaMfsgggGWdiweDVY9ineFV5AXKman",
  "key8": "47fU1qNAveHuJDAjLh9XDPqJnAm7s4NBC71ud9SxwG64NKumbEGdNvCFQbTCruJE3aw1kR2EHgDqRdt2SUEj9Qb3",
  "key9": "23U62eAxvSeikAJFqvKu93sCwqTsPLqTmXQyYjGcGVUwW2zA1JBirKHjyZotnQ94tY4sMncGJeCHtnA9bYSES5C6",
  "key10": "35vjLSjJKFjT9dugN4WSwg2VSdPu97JKAHK5Bz6PdonY8MGPEcbUeftWY2Xv5BtpdmvhGBKVh6zruFVAcxxWpgVi",
  "key11": "5d5pmHAjTxStvYsYPRj7cbsrTasMuaHLddP7bqx8ZwpWyZGzWLyMmL9mef6mdUhXPeDmCmNyT5JH7EfVU3mKgcio",
  "key12": "5LndPNN7tC49zB6nVzhe5yQHewbdPdHk25c2x4iUhMxtasrTzGf7YLXqa6xNK9sZxE9PqvqJ9rxvpiR2gocXjnKC",
  "key13": "3sqSQjzh3sVMtpzVGKcAuCeDMTpS98ypR1Jwg7pfrVxkp6Tk1WpA33ZKUpijW7T5j8HfShW4HXt5i6espQVBFPPD",
  "key14": "n9p8fT7PawwgVtLZVMGmzKKfGfGUwcuxV7HX8sKxTJVdjYN33E5DKdo62P5RuYxAMySENCkpvDcgtYWNXsajfvn",
  "key15": "3Y48cDzyzqvUjd9g88gLqc696ErdRZx3nng4DUR1aLN33sQQX2xj1S7D7rZvkcAUmhtyhR1g4UpXAn4vTPXHNPGF",
  "key16": "4NdrVifc8ghG98YM3ftZm8bAoaWqQdGAMcux8FDzmDiA4DzoNgn5FX1RJPdzYYaSYA9jQ5b9MScCFZxeua6KYGsf",
  "key17": "3ypRPREn9ZWmf7GqQTaXekUeqnEkrSLSKu5sumvak9u3BCrAvckY1o9g2Wre9z6xSsHX9eq5LAmsgmGNCvG9rJRZ",
  "key18": "3PjQicC73JubfaMDGKqYpNuLpRD6wEdGZxXTRxZyon3RX7R3ADk7TYaank9Uaz7B5k35CbhK1oyjhS7ZR8qJkwaS",
  "key19": "57GaCscJFnScgoyf8FDswmLCQbyxsGmuM39ReCCdwLhWenCaQckRE3uxV5C6JwFMhP3sprzxoYexTufVVJNLxNtB",
  "key20": "5a7ZjSJHgDxjvP8kMToCujG1Yt8tHNs18W2a6Vhty5h8JRuR7BatUwvc1HubezuucLpKe3fUQBhiAjjoHETK6xpX",
  "key21": "PnKSStFL9AuSMuxbsxKANQvmsB8LWCXqNCADvH4qwed1Fum2auUn2ryoMmbaK9ibXfCNkK69uUWKS4AEVsnHCSJ",
  "key22": "3pTbggJFX7k94bCsb7mzwX4zg7LSHYL1G73ED2jgzVgscRebPNJYprTEi3wLGdYFU1JKvrS3zownb9NqCT1467LT",
  "key23": "NoXGAap4mUAuBm58k7G3Dei5YoRgVzxtQCz2eQYscsZP1rJHGpHc6mTWfKu7qotzScY5TMuCJ1GKiHwyDwNhRPv",
  "key24": "YmzDVdeT5mCAzvL3f3JA37swrnUXSnojbvPQF6XqENChJwHWZhi9Ed1wmRcdc4NX61WxstVe7envNPVb4dccK5G",
  "key25": "3WteUs2BYvdUqP4GeeVwGZeC6zgUbUHRGumPcmU1dPQGos6v4WRUf6i1xT2ymJUCHRYoD8QaWXBeAvnC5zMb6njY",
  "key26": "51nhEQ97tQGpVNEXdrHBmVypVQmC1vra9q4ivjpjhW6JnMqDXB35F7UMSdrwN3hZqMoXqpGgHQpLFobhXmgTMtjR",
  "key27": "8pARXCs7gUdxioEyrkZDVt1JZBH9r3cdb9JVs9UhZASpmVvc1QmXTxcX4mxJQ7aqsbT9yMZHhc6QucJA7XpceqM",
  "key28": "NRPjmDYmeCWkKEiG2WrFZCwdxjCZMj6w3yxyi9wJWFk5kxFrsWACscj1cCWFtCVGtPUmETcyDNPMS2GJu8g7eih",
  "key29": "5naKE6eg88rCLxTvciVtpxcRgDuHtX4zG1yo5r6FZ8v5makgftpAeAtcWGQK1kAzh3zmY87qurQM2LvkT3U5oDrb",
  "key30": "32BBnndCUEUXkrGyoSsgB6TLGJvNtJGAXpTxD6s2NpPDr9DMb6HHaJiER8otoCzdqUrdfAtA8PruzhUZv1TMnsJm",
  "key31": "5DrgC9PzrQX8Svb1yRmubNEo64GUj4pMmTfAmFUo7VWaqkvRD5pWGnTXDF6RiYdCSZP7TgNV3izKF5YRGrBqAQTm",
  "key32": "56aYiaAZ1NHrFzw9nd5F4nFXbSZF8evkg3WhYy6QpK2SoExYfTMcqiVP5ipGTxbxppCzRMnSqGDA2YsFhHasP4Gh",
  "key33": "5jWycb7VadAVQq2Ev8gypr2ss8uvg9ZFqgNyHDMfmNAwBHXKb7ia64WURBFStARHrfurKibZMrNyLSy3RvBNd4CB",
  "key34": "59Ev9VKD983GESQSzHE4vrKsXDLQe2YAtqYM9R42uowqSXxnWvhvKXsBjV4WG3LboBtgp51xjYQRoK2yFxcWruBP",
  "key35": "3HpnzG8wZWHcHr4d3Y89kTisuzxwamBy4EYkXQfmY5ct3F2ywAQeCpVyR1NKMyThpBVxDPScXfe8DA6hewPH5RHj",
  "key36": "6724A9azXZLxdFZTfdmysQz4swVdP5qfPociR3XmHNLf7JRgdpBKwkwT1aYFfvpnvvSD8s11AghZsuqb4UWyoSHg",
  "key37": "4LfkNYEPb2MtBL7nojnNP7F23Bmf7rPwFUW8z6xkVhcph8i7f7ErQwqFWMZq1CRHMg6Hdj6rVLC9UgZXcPcz6FnP",
  "key38": "2sSDW4sr8tyvuHHj4yrubWvfiVpfomvLDXLt5zrJNWG9hMWvJ9zXZ8MaYKGcbnpTb4Y7QQbxTBf1aKehBC6jBPxV",
  "key39": "4Eb2dGgspsoFUYhFNu5V6PP4E1y31etx9xKiAS2AZ72Dtz8yQoXnmDKK5E7bzGAYUEMim4i1vMt3RYXuJPq3ZpVi",
  "key40": "3MXPUnG15xSsGPts42XifbawFbd4XagxKYsaQGLzCW3iXshKmziNgWw7LJr44haQX4TGKJEGnBNgTeSLFU8HqZit",
  "key41": "2H5ozrouVhuhNGgL5zcYKSvmgsmJ167WMoLAwdEo3xhGoAffkuxhCv8oPMrkPMDgKfsD4oDCB7VbjHCavPBcg6E8",
  "key42": "4MApmYQZpBK2h6Kxo4dKoAMJnGwgwZLkvCUzSt1EZTUSzopxZNpgdDpueLKVUC2i8NU2edDpGb3PYYEE8HGAwMJU",
  "key43": "4LSNcYds9DZF7fowkxoTwznsBSYnupQa9y2fpjEpsJAUiz88UjYkZR9TzWJeZ5YU5XiJorkVmwi9PmHB6NVpm6mL",
  "key44": "5wFaqyxu1UHrsUvAnmwEiRQg6Ws4FGSt22QB3Erwt9ep6q2unTCv5U6dzWhqVP9CAiNYNTE1CLuZQyYp1JigMTn5"
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
