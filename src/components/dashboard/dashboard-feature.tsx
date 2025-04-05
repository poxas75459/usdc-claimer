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
    "5jiXD8fB66RWJ5HR22k7P3ZtC9gTDc26NxH2W8TAB7K4ELgL4Sfz81BTqQNh9ZmgM6E34CrY8sQ4GwixLjeF3Xp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gXZKF18tnLYSv933cYfEDZ8jbD9Bf7un42kGv1mzKGCKPseTQFKyUg3PZwLNxr2psSMsd5MRhdL3qTZ4wDhKpEC",
  "key1": "5RtJAqFep696GVofbfDf8LcDUcZ48bbF2wDmfyMnVXPvLfnGtCZjZQGX48ut9bws3S9bCDzokqDvkDm41yBrxdHi",
  "key2": "2FTArTeL3EHThCsYvWUhnmajxUAWSXvoMF18DnbQXjpsqLVzdnCbguCwufirY1xfGMt48aL1Gc44Rpzh4nFUJv92",
  "key3": "2SZSGu8SXbUzMjCUmSELMPYbV5jtcejEMU3ZSWKqjyFrH8QsyKAZNp7asmq4i4xa8mVTD8kYemLrazVVRjET3FME",
  "key4": "4cdALJXCxStg7HSXhA24hSrGntCWjGwWoyrjMceKMUUBBrZkpzNvaGN6TCQDWxZg1i9u9evwEYLX9sE8Bj89xZuG",
  "key5": "jU2Hmm46ze2iSs7tMQkSRmT2n8XoLT1nCrNdTaGyXbS3UqKCcjyDxoWTgUFhjADYXJ6sEKhWdaeNwU4L5nkHD6n",
  "key6": "2fJHjSULPuTt7Qg6LYgtS6ArAGqyHSyoxJnUuDH5i5PuEXfc1NJukuPUMPV5VVrBX3PYr39U7Cbab3ZbwY2HZAcW",
  "key7": "uzcz78rvrRsf91PcjB5Gbk81V3E4MfY36dSoMhhHShPz9jtxTZSeNH8H3W34cadTRoUkRYz83Xuj1EAb33RJjn3",
  "key8": "4y4bLsNuFa4NS149U1GfqJMy5hXzVH4EhfVFoc1i9cscjSfeGmdmZEB2kaKzbjY2yugrLSeV3DxUeAE8vnpo7D3n",
  "key9": "3Q8Ja8A5UXdbykaiS1GgN1ooxW9AfLSUCGCY3YxX7zkH1LEPAYHV5XJXgzK9qwkSNi3DnJmSFGDrNNTJt6f1yPQ4",
  "key10": "5aAifSBGLEJkdcAHNuhTH6tP6Y9m3Qu78k5GqfxAWHtZFacrAQzuxqEb6k9MKcjn7TtkpFVsRydpZm42vfiCznzH",
  "key11": "4zBKt1bvjba2yqC74yq9YeCTy3HH7LkB5wyPSgM4VZbPT7yFp4WZFAwbFU72yT38wqkQPfV1tcR1gpcb4ARZ3bVE",
  "key12": "5AXysoYmsd833tn7TPEZ5FKYpSjtQhToAhCT9uivFGdx8hPNfixBTw7aFsPquqrD8chZoiXK36F4ZaRoZNDNSGpc",
  "key13": "UiA7P3AYvNy6UxVY24eVNhSymANBrZLRGSzvaWHYdTNDXbdTkTWdJwPL58HEGCA3GGwTbYkGgu8oXQWNMjwNfvC",
  "key14": "3nKM8LD8bmCzEURvroN9pxFdfdscvXFVaLsNe8vJ8gZPZYfVXj3sY7dd5pW8eihi7T4m4YNHHqBZWGUwFHyvQd4t",
  "key15": "3gyAHpk9byWrJnGQm7KQsNuqcyTrnnXTnipbCe9CrFDKBVPGdGzbU3vTMMVHsqZETPzFSLanGPRAkpwBtUPwGhjp",
  "key16": "63q7QJRHkRXv4WrC6dEKejN2UPTPjKBGfh71ECSffF2YGU4M1roQf1QKXMSkSEsJkNJcJmdpuSTajwYFteTx7iGW",
  "key17": "UNJW9AEihKiQd13vMYewitE2sVFdqMAnWw9WJSTdj8PXwyeX9U9HQE8oDVNh1qvBLDTzNivVCiVD1MrViy5u47D",
  "key18": "5swXsNdSQaMWkKAWwr45JzkKyiGmAHAfAPnMRfH5WQURSvBvNSPiKtTcEskuyFWee8DgqKazuA62SDsFtCfdGnGg",
  "key19": "5MwKcobYAGZZ1SLQyvFndXMuTWKc1QPDbeTmhkHFPAnUsYVmkbBK9VaEJir3GeaziSio3Zq4uyzwkXMwGNFCgG5V",
  "key20": "BZRQSvWkTSGsk9YX5Gq3Uj4uYY37YQknVWk5qTbpEimqtR2PWfVLndPUd8xbtiC9zfGuAAhgo26f4rpa7vDWcRS",
  "key21": "48eD2i3zhuWdxGpMMUHoM2vGGs8jbsnzg1iEgchvtdkadL1kWKLc41RtkbrrhWnmjGGdjPPmkBbqNTTBbcf7ZPSF",
  "key22": "5r9yhPvzQFfsNGp6mfVvFK1vXvHSToSDHAvYuXEd34tLRT3o4P3c5PH2ZGBnNxRMfb7yuzf3nbzi2tqaujTugREG",
  "key23": "5EAqRSod6ov6YDP85BHfoDHFbu66FXMGEYhyNdccTZEeyjFgJrdczE1dfZT6ZVr1MkFv98aSKy9xo8EMPxbKApV8",
  "key24": "UDiWYVBbCpNaU2agPCH9YiRPJoBzLU1cCSarbgtNckeqA2riv8YWui1rq61mUy4sEy7HuuD9258zcRLA1f98vyu",
  "key25": "2HFhEq1G8yzHqH3cJnBKnHQoNTUPgRZyxcBZp5uizePVS4unvzXVFndwjMUNvQhwnFjywcmZFBEDn4DVGi2ie3W9",
  "key26": "4QQzqGQfcNE6vzYYLk3e6JV2CrTyW7R82qYhWAK73RKhvuaRiewDfkkFJiDJYeTmfmem7PxR1TSZWnbZNsLDkZn",
  "key27": "5oAcoQzfPqKdFMn8yd1hauTM19eqZ9vMYo1rMsTuhSjpc36DaRk5WntCfM9qz4XupNC913TyLx4zGQFJffY9Z6Ka",
  "key28": "4EoHnsv73rybt7uQrPcnFtHhBMh6ZkauUmoEXToKeYDY8i3KoC7fJmq8uBedrdfKZE5U56wKEvoWHgYBQVbwNosA",
  "key29": "3pEAa2snhA395NeCc5RpXko2J1aDt1xhUWonv24Gnm1rHvRvCBStFVU2A9J4DTzy3ajznmPujKZVvsjELCZcP24G",
  "key30": "267b64c157MucUJd5w4qwmR1cn1tQ1suHMu1PFcJ8wVZx3CMit4R3bpvEq49VZfrQ1r1AgMYfvSKHAE3qAVFFujt",
  "key31": "2C6nLbPCbSEt4aeY9Z3DfvBCvUv1zePmKzy1PszXFdJJXnWV1dADacgnE85LLHYCd6Rq5ZAxqXYAT6GTg8WxJzDK",
  "key32": "2nRtUNYxBAKJ5LdnoT6JCFeeybcdB3L1VNDyYYFwzR5Gh131V68GMDKFGkjisUhc1yPDceM3dN36X5GfaMKP74Uf",
  "key33": "556fCHNJhfLqauW6QoCDpuddNjLBEbZCsLQ1cEM3tK1SKgNNWz9mt5WvFnFNFbeqD8rrecSRUj2vgRmuKjsBPqyy",
  "key34": "4z8FCssUn4WUqhaY7pWBBpq5hL25LN8Ym9Lnya9JUuSuygbs4NuTdsT5pji99DWnqBnVtv26ALdsHNmgFpznym2H",
  "key35": "5pZJxTBVr5S7moK3MXyVctJjbgKGsLKx1fATMvC524SKri3pyXgxXGHVBLfyTCZdyXqrEa3dR8XVCWiAwRBQBvA7",
  "key36": "3QM4rh8pgZJrbJMCTonAWX3wNkshtcGtPWX6NMS8U1gW5hf6VfNGQb64QgSZzMd3nZUSm3yLMyCfj2hFTupofcLg",
  "key37": "JaGMTJ88jiFvnaW9YGBAP7Wp97GxYNYLAk9hxqAZdqbFoHowLqRrTUtY9Lsxvp7WUmg5YjagrYRdvrFD3dbLuYJ",
  "key38": "2LdubM8iunMxZTY7XUFQHpbL2k1jfu9M6qG49Z1Az9NGfJ19jzyDGmutgPfM4GgqjTtjpvGWtNbDrMak61QTuZmp",
  "key39": "3DprNJP4YZszFyitZkZde6GCYZuhNh9HdKf5W8hML8LuC3hbg74o8Gm9EuaRj1BoR6nny8vXkQAZU7hyW3JsWmF7",
  "key40": "2q8g8tPDa1fX3iqDtgDc2PP2QuitfwkJejAZ1ZPnHmzczTgMhfeFHzmkPy4c85pMvwUK8Bd6HKevVVgn8DZcQykx",
  "key41": "2MhidJKDHcbexyqEMPuVYtQbozrRDH5prmqEt7z1HwSP8gqFybYDjNK5SafDJYSaKjxu3cvKB6XoGRjbQuVEJBWH",
  "key42": "mK2yK9Dy3wULFjXN12qe13WtrbBrgVikxktvAnxHv7GEFpppbAskAMJPruup7bo33GEvmrGb3UdcMxrcqg1DNPF",
  "key43": "njkuosDye3SBzBfLZExySpNY8QUXH3wXWee4Bt4hSSTDHpBErEFDvifoFxpLbQevdLjfHJ1TmjUdarPuaEgQAt6",
  "key44": "4w7LukeuBH2Yx2r9UBCWf4cTycMLNqq4zdskpXy7FHegFmMuqBmSgfk82TcadGJG5UyLjQbWhoL8FNjq3f9Mg2cx",
  "key45": "G598JFA49FrZ1kPrs4FdG5bP2iq9LBEFn5oS7V17jijsCnULusXES4R85hNAJpiehTLaiMVRFSxvZ12JFaiTomM",
  "key46": "CmP2G4hikz22fnAdnWfgoTgGKHBDiiExQAhpFX2yQUVgE9tmRBRswDYGAXZeTbQYztu8J8ehHiWkPAMfhfrzqbJ"
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
