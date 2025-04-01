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
    "3y75RYLCSVJwWDi2ovV1aic2iYWVkUbpDJwpumLa96koBbMVYJNv5eW2wr7Zsb8Gg6TAznHByTPz2T8S5bbMr1yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxWymjBPxCoemw1TjfNzvjESuSWBveurA4ft7P41U9ZQhwxce1LPS5vghSmd5HMih4T8CDrTy7woDJzXkZE7h1j",
  "key1": "tVc6qH9k7g1T2SLNsA6cyQn9DA5Wy4ZY7tLzPjDFe9vMgwwNBPQb9byNwVv3Xhh7aUZkZdru5JgPXqBdKsUH8hj",
  "key2": "in95dJDBxVdXxvmfp7PAk4kxgBFvoiE7vpB5p5QFABQexmDb5wBkAntiFykmM5ATzeKYxgUkUvjv2jo8ag4qCQt",
  "key3": "bajGAHC1eH93nQ6sJ3GxxBGkHmczb3ws9JgigyvRyCKh2ziDoqzAQASNutdLSaCq9PD7TdYnPbCLABNnPraHPMi",
  "key4": "nsjSz2cZhrr8PjLQv3VrY6MTqxKks4jYW7LeJp4H9YfDy7A8ShDR3mRf5tWcaWipGLyiDs2u59NsYwuirEEwAED",
  "key5": "9T7XGZXLECEt6d5kbonjbyHUznZm7kFKkhMic3EEDwHzBFipRsEU2Pj6LpFhGk1DGFVnd272cNbNeHtBoZuThPG",
  "key6": "4giQw96c5LQDLbvsZUf5jpVbPKNa16pdbphQoUoZFUP74fQ3NYTqgaicRore7NZtE7V8sT8L1VZoRbCtEsZAjk2E",
  "key7": "kwkhhWky6eqAJjtvDgzehem9otp3SQxSYWTbooLYJ5A3iFMTiy7ksgSSHoskvB5gDrPFCbjJELPyjo6mn7ASji8",
  "key8": "4jXdCxcxRXSyZwaLzed6di3318cdzKecve4uMmdjC5fntLJAjZyEzidCdtqd6xKnr9hnXVsTUz34dBtx7uPocqFx",
  "key9": "2WjsVWWqSU6kRn4sdyhYYgXs6yzZrAw2fcbyettVu2PR7NeYPo4ccyvXWaRAkBpM3HWzNaKaHUTRpVrCWeGA6UTe",
  "key10": "2DqAeCjDCx9pcPzKj8VxNq2LY6fYmHtwFRQn2HoE1XqEDSMmAZzbizmuaf15NQi2MW14rKV8grXoeicD4LfxMnza",
  "key11": "Bim9fsPGPmXBJ6Ld5Sr4zrvKWEC6WmTDJSSYZtdMuPgnuAHVPgYcBGGqMsV43Dw6cyiufcPEmT3cnvCTpSPnFYb",
  "key12": "4JEYfJd1fqxNsFQhJikBqjRZVg7iUvj8Tqph1rs1gogAyHan3jqDMuykKr7MeM44tja5ZFFXio8Dgck99QmvJMk9",
  "key13": "3RRxvfXvLxAYkQviiw2RykcvT1FfypVse8ejAySqaW4KFcdiYtS1khNgdNYhCQJqKpZ2M8PADNtu6c4Y3FUDgewC",
  "key14": "7isHsvkPik2viFeXuawEXq6fLYM6CyzwHj1k7EmtETXfyHMmcfANgj2eiJrY1XAYnRbGte1HVw694KdrT6sjwox",
  "key15": "3bRX5ynb6VpefTYRLLmsWA5YyZZkLBjH5MpNa9wp8TW1V8UVZ77GGi75u2KSE4qU63cto9JByeeYgqjHWyuaF9NS",
  "key16": "2P2gHELrmWtZFHwaojnyDhyLZL4UZsqr8RkejJt53tiWQuQHMU77my6sNbtYDp5ziYNmwg3T2K8PPfgCKb9ANceA",
  "key17": "527ruh5C44mqeYtVASguuMjZFgfjHRm9njV55wadhcmKZKTUR2tnSwHj8RDzfmkRbnWAuha9mqHcwJ2zC1BEeSQt",
  "key18": "41BYgyYVujCNZY8iasFeHAvBSBnzQPHHVQUu65zPCHyGiqjbu7VEKgycFsTVWY5r1hDJGy9HDe9SPR79HVgM1yJL",
  "key19": "227DSYL9DcAQ1br7UjctNdorz4miAh1Sx1TaGXkwgDi74L1hbrfKogBLdgoUoj66M6ag9nKqvCrKMbwv6HefSd8K",
  "key20": "3y5JEANv57wCHQqAFj98nZiAjkVZPssdxtR3henVZb8qrgJh6QujwajKP1wxPsA6MguCU6RnZJR3bGeKswxEP7cD",
  "key21": "3DNkxsLL2pE6SVtqx16p8WwF9ab1uKqdyYao2PdoKgXuoGq5YXjfMjYPJ6iCwFKcTWx2MA3wCDp3JdMwWjAFaKXb",
  "key22": "3cz4qPDqthRdYpiTgbb59b4AC2P5TihtxANDBePoSEqk2EArwCb715osTpqqLwTAjUrbDNFYfvcYf3MQKYkhXDk3",
  "key23": "6H1ueSFWxNn1D1UdX2YcWCjDu81ntjjVJigrsLfKoq3aiy3NKnRHJwjFwevmGdzeYUg32YaNh7Grz7JmcWqksjw",
  "key24": "4dfLDYsgJs9WBdmTZx6xFhHK1D5qUgfatqFdf2pKh811f7U3jCkdLCqoZh2aSfq7tfxj6WD8kvj9XE5kWkHJGMMs",
  "key25": "5Vt7uBCrY68b9ftww8DCG5Si8ao64ZY6YZxxZijZ1TgsVCCkggA6rHvTmuKryNKvZC4bi9bJ2fx1HTYf1VDnyaBt",
  "key26": "2WJESYQdB9eNWmXMz5wd7myaGPGvqmYWrub5VSuAU21sEgaUyKu7VSfGQkDi4Bx8L6BRjd4GPbadNGMEbPgzsiJh",
  "key27": "5av7jvWMZoNnDxpcJUSYwdx4QKJ3foEXfLGDeq9997t7n9cTLnzMnqw9rBXuVUYKzSUf3uLAR1mFhYKuHRB8xqCx",
  "key28": "CMK71MZHmnscApMgRfeb3zLYVJd5Ko8VvJDgWGpaPeeBVYVipzrdUTBFtmTjUsCBhXH9UbSoneBXgCBCMuCPGbc",
  "key29": "4Br2ZV8ks5Tb3fFbWnbfKUbTdAgKtjrYJbv6XXHpRhW6NqhAQFuZ1b67ua8oDuQV8H3Dn7VT2YzmXLHZH67B56pm",
  "key30": "4Qj23pjfkZyPS22jPkH4PFc6et66Hu34AnJucwzpi7Rv58nJMUrYfqKTVLJBGpY75QZfLGo3udseerf51RBVwm3R",
  "key31": "2U5FaNPWNMwhRtwnCjywjd5t7WdJsXFYuULPDSxLjkVHfCL4Fgj4ChBZYn5nVnovSZv8TwKHGmGLJN1V4pifnD5b",
  "key32": "3aU8YuDZWnnruFcXsZ9UhKonE5w4yg1yobbyYbm6URFQ3WFzsoNocTv7DhfwrJ62Wqdbi1dxkLUW55Eh1DWqPXCV",
  "key33": "4ET6LRaHRK7BrbtdsHD9MYsRP62UqZRuZDTLZrwufDHXs8UpieLHMUfDW3ArqAPH8fAF2ds81X4Y3vLKiJh18G6o",
  "key34": "54tLMygUsJ56PWxJbjAY7CCHkggFgi8am9v1nLUKUBYwjQRkSB7BwKRt4oZG9uyEz2Gfk2aFXR9Nt2YKKmEFcqqT",
  "key35": "5hyzPjP1u7RYHDEzfZktHBkGvkfY1rwLybL6UCpTHCNGE3SjbtbBwqmfuYuuvY8shmFECHrGGApurtZta6mjunyQ",
  "key36": "2PMitFkDnjQ88H7P2j6DubkZSUq7dXLcK2g8932ZbbSs77JKgPndrhvmHpmWXfe1YMnPdsJsHWN7UeCLiMaEzGJ1",
  "key37": "3oiLm6VAT3Q4uipEgYmSywqyUS6B8VNwRzBX1ELQx1ui3sRmg1y63rnqdfkZMyDWUvNi7wwM8T7wtDsKsof482Yz"
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
