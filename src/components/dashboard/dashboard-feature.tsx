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
    "WGajpk9Gv3f68gWUrcNdSLrWH7uFpjX5nm71zborUWABRryZYwyFLVia7Z6zTftG7PkiqAW1aRXMviL44Cc6558"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmKHE1ZXxBgNq5T6EuCd8nH3ba9ZR1nDWuuVAxWbdGpbFqEbfHbcvqCpuBTQNcWj5S1QiB9YkpjMpUmf2hfUJY9",
  "key1": "61QQmJKLpQzCqjF17wcULzQE1mJ5VkdvnSn6gnvFPvxiT21ZnzDzkBeEsXV52zXxS7QiZsPr8ij377L5TzcYW6xw",
  "key2": "4afa18QL38HGU8Af9faHtP2mrAUkXcBd9E3cMNaZYaQq8YDnX8iv2AWYWm4snDHTrmeiXMv7x45FtZUgRfpGBuMg",
  "key3": "3G6c1zaEv7hh87U6AU5jwgUXfrkWnjuqP7Z9pwid1cAyeots48FJ27TuqqdmqzBt41ESLgnUBXJrLxUAAmbLHXP2",
  "key4": "D9msZkbAuJkDdkVrrtvy8DrtDx1xH5WnoqVDs2CBiaVYn7P65C8TaudXdnoeyLPAMtJUzWHe65BsK3kijc9pRR7",
  "key5": "3ZNcUTp6FaPDe1twKgJCwVgGdJCd32op1GtzAr3CVjMb9NNXWBFHuuEg3aahd3JCKub7kkjMuvk7SKFWSXopAkGV",
  "key6": "7QE7i8eXVrJ2NvTCdB94xLFQwuqiXM9YFesXxrQvAmffaLLNS8CP5XneTbiCNteeF4zpfT3KvSi5SgJrm1mbsqL",
  "key7": "62AGFyMEc841DV2DMCZUUnqMQfWgrmX86LJS92X2JM7UeqnFwMZB5SrXUYAUBwNcHzwdM3FCdteBVu6oawrHjsB6",
  "key8": "yhmp6R2JXGtui9FBVrnq4jYvG9VeQPAZq7txn6APQrUMbXx13sRS89ZtdeDDev7ThP767BshX6PHSgSpuCa3mY7",
  "key9": "5CuWNMGirRAUsXDvhKVPPTNamtCjk3qMEDMjUJErRkeax6wJkMiX1o8t4aGXti2aysJK2s6uLW2p2vE8azGCYsMH",
  "key10": "2nyq2yPGtRbfHcLHHzRomMHinSwZXcVV5vmz7Zb269aZ7F2ch996PJ9soMNFwDhiLou7ubDwhxoin5eaUWXR4jdU",
  "key11": "4rqwv7rcwuLUkxVPWhYSk1LKbAUmzmbQb6EiPjx7XgQNmxMELZK1tL3hRnETtPeSYwUWSaojh8vKjDXkEfW9za3r",
  "key12": "5UU8fH7gbESuLkhZhueDsWUiMJYT1ebxAamKzgd6kkBVgCqzxUsDjaHu1DaX1iquWvbq5pcWQqT24Q7gHV81tAYp",
  "key13": "31CLb559uXZo8b3sJ3ysohw2aiHuLcCApDWmoHf28anJGTdLHd7bWqF3drt98sqqbTuTqEudGygPjfggt6qLbQ8a",
  "key14": "46n2EGYK1E4qYZGjmL9r1NBZT6ZAKZcb9bd7e1pbSFQCQiAZn4Hry2wWdKRWRdfxDA9ZydTYP43Cz2MFmrnbzaNS",
  "key15": "sAaDFFYiymWGGFYdMbJqtoTopEcJdXTSWuzzwGiJcBtGRhNGQfkergaSgE8rrGY9DvTkyZKvunzmwuQ6jKKdV8s",
  "key16": "jfnxmpJKtdiqQ9YeWXyz9a2Ve4NbNKbtSK14TMg9mew5aY6c9zvzC35yNj164DVNmMnyihXAEW9YLM5jFzci7TD",
  "key17": "GRbwMSpYDAvohJ4CAnbWxw3oYGhCrTaB4WzaC8hyHkTLWvpgVyppUjgQcA5WZapFUWovAQdoBSJ53fujfCiDYK3",
  "key18": "4QFwtFeBvVSgtswaP9KWJU1PfzuYpNw2K8giQdNF8U8YyuJNJvmkxhTS3Ba8oP1dM8phWcyEczvsWtow27MtZmEa",
  "key19": "4m19fcKhMZSiWYPqmUhTo5ca7TdEX1xJTSnhkZoCkFhdkckYxnNS2pEnn1icRtJso5skuGXhcMYBMaoMAzHbNjgs",
  "key20": "4u3kb1Nc44DW7mXnsz7rRoDRz6CyAwcPscmFZSSGajWSieb35r1BHLUjv2xyHfpbhHenSQCNXHshkqfU5VonUJ1W",
  "key21": "J3yoTW9ZLK75sAiLibmvevwi9ix5dSHWq9HeGM9iyxEmALwm4y8LCXDzsUUzrqWscw24CJK22Nk3aSYVuTpNJHM",
  "key22": "2My5dRnJye6R9XL35c6pDekUyb4WE53WXGUNcLk1u86RkeG8HsvMME45tL6po3dXXfQbFPq8zmGsh5ZD2S3952G6",
  "key23": "34hsVMqiE3rNzaNWfts2bAz7qn2etexamcuHMEzhFHSwFjj7bx6PG712VtnAXCm4WbAjGJhZRteFa5vsEq73Mfo7",
  "key24": "5vSfByfnFLnjW6myyzwXkEeXGzFHPw93WVicTfvBjWkHm92EAaTXzHsFuR64FH8dzfnZfXpKTXEtTJQ6fEdRQmtB",
  "key25": "5oW8pe4ogqjaieksjshLHBiQKsT4TCgP47EDFXcfaD1zBdW5WYz5VVkVc7BoZFtKB2vkLXJRgEr8XLZfu2YQCPa",
  "key26": "wnBKEBCjDXnkwXX34Pi6cJk9W2NJw4vZxhWvh8euG9GwxvDv3ddvJ3BU751mpic3Cmb4nVmEyQHHsnpHKBtxAF3",
  "key27": "ZkSqMfmgDNWp1s9v9C2ygg8dLc9rmSQVGxtshP9RBzxBn46NX19yTXawWHVAc3r81TLWunFwfYhJjLQJhtdX5DG",
  "key28": "3vF6qkccFgqQKf6kfXgBhwFyesnZAXzZkkcMuzcniLAtiFbvsodhdGRUbkWuZnjS2g2sYjE5qSAienWjVMDjPceE",
  "key29": "4Cb9mPCE45NLQqxwDhnGpiMgYowUdd2BPpsPsmbjyMuj5zZevD6JYvgMbZ2HktuUCWMnTULwqawGjpFvUbTzBS7Q",
  "key30": "3nwQvNcAheTrCu7hBfk2aAcZdriPsQN5sycrW8EbS8UNjh3HFVMWksjAwCPERyL5yudLCqkREwZBMUjbSMMUX5iN",
  "key31": "2Hc986y3UHJMBhKs4Z6YTRktXaE4f6NrK9bRSmK4udiYDcwm6eUSqNixbWDaLU9c46S2zWwwmVfSb3XddAW85hjr",
  "key32": "3Pqr7J7ia4tXaK4WJ4774qy2shVkdNCAp3bj1aQGoDUq1ooQSnP56RXDS2xJ9mhkkooYofqYzGBrYjkABhgi4Qqv",
  "key33": "5DH3zHF8fTitTCzg9eeqkZeDyZuZeLZMD4Lz1XoZmpgVNxE5ZWt25JxftxqNrgmEYTc4XaigJaEicuRGudrWS3rw",
  "key34": "3n1X82qprJ4U8NTTZYmunF2ZRCCdPgtCFSdjXsEejGjbbsRLTHn9cuNovisaWtqxxkmzpnN7z6Z6SXLKDY7JvFea",
  "key35": "3bsvGK8wyu4Q7riUJJAQsPTyQxJyDg9o7uooTYdKTToFXA3VkMBUvaAbTk4p73JfMZdhYismnnKvELLUrkG6fwDJ",
  "key36": "2NCrUmKJbqhM4CaQeSLx8r4ZLNEkBzsb5U7iQBp8EtbCnoT8sCL9HHuNk1vKcAQcsTycgV3pa4RX8fgkiMihRsoo",
  "key37": "4MyY1yTAJmsb1cEB8oRMqZqXAv4VHfP2dG4DYuB9ZGHdUn5nHu7xsmJVFu1hNhQGa7uZc4C4BjVnhoGPL7oSXk3V",
  "key38": "3fUhXbsNWm3bUpEzWnX71VxgqXE3MAoyGQRFHkSXVSF8Fwg4GTWvsM1Q9VHia7BuHwtKM8Zj7hFWMV32FECqtuZ1",
  "key39": "4U8JvTAmjWCyZZ8CgyThPymstyXenPWozBJF9YrLYbyJEGVFEEYTced2Qdp6uFGrxwL8x4xyZbDvd1hKUxr3R4nF",
  "key40": "4kppfNV8jHPp32eSTAGwCE1wq5gfDCo8DXYgrnSw8b5d7corkknPNjWoww7hiiXMkge8pwSpL6cdcgzdA4sJNDHp",
  "key41": "5bRXtu5yMU8rowRaGKVtCBKUSYNZMaYwZRt3KXsJjVmkFiJiKgdfMpioiSPyNz2hfYU34Xf9Zcxs7jNhETQX3DhY",
  "key42": "4H9p1UoWpeU9bBovPHK1JpYzBGDtYFqDj4RHJjYoCJauXwoFiifLNpKvd9gHCBdJYbcW4WtuSECfp2ZGnkbsCdW9",
  "key43": "5to4UqAH1zgJMWSEhzrGuH7tafukiexDe61STj6W6Mojn9t6NarXvGHj1nn2vrZKwSRXZ4bzEgFq7UCXzBbc24sR",
  "key44": "5Dh7qSmQqYC35DqNhGJcGWxttAvAHvyJnsvxxK3s8p2MAzaSSkfESEGgNUyrTcUVoHJvKyMoZiVsFAVkm5RPKGrr",
  "key45": "5KW5f61y49f9gr7uwomNky9Cvokj8hopVPMwkkiTtxUf8uQTL5E3XrZSoRcRWRCCxTbCBxXBUsJiMuE6GS2DGN5N",
  "key46": "3sRwwFvcJnxUdafVHpDcpdiemqLx1jkM2x6SM2kxGLGY31ZWYme1EwBK67tw9yjjfNTey3qRM8LFZpxY6a2y5d9z",
  "key47": "51x6JjtEc6RQu57JijLEAjpCP29jxNUuhjeUFCk1QprL78ATwoPbhhvdAQzcY8Uidto1baXqhHzzKcEDQLJhPQSc",
  "key48": "5MeDFzKTYz9m5CBfrTKdtVHQGK7Z6RxjMGbF9DtUMGF9n29nYWaFdkPSJEitq5M5qdFEk8u8B4DPghn1CVNYW5zS"
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
