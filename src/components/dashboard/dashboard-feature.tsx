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
    "3iEBPvZb28BdKdFpSzPx4WktCRELSE9jYB9ohN8bnyPf4LAvXNzGEgc2npvJBggQxLyAyeU7cdUBoAdfd6xhzaBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XD5BfjPEHynDUTAojuM9btdh1VMxSLzPyUp9zQURJzMFcQCs6nfTcbhC8odCY28tsaxpCm8LAEfojF6cVVWHzB5",
  "key1": "5X3gBHe31KM4B16caJN5nyvE1VqswLcSi7W8QDNTwouxgbcdtQg3US7GtGTdeGEDiLswwTCZNCM2PMcRckyFRUPa",
  "key2": "1zXggovtScRD7UMWpJ59ANWB4JNgER8vZ4bDyXVh4BbgTdgD9AZ1F9axNNna7TUtm2woTRHF9uDRvgSg4Y6xivS",
  "key3": "5xsde3UUL2y1J4wwsuZt1KeTbfjLg9QEqKuSLm1QviEouYAVsnsdEiRGX6ifZxWoqwemc6TU6eTe7CE3K3DkDHMJ",
  "key4": "42n8ndTefVW7ZWpvvk3GWH1M82tEazuEaG8EQT8y8ER66tSNHJuZjpNVs9MCoRy9SzBpxV54C3S5D2o39Md5xJAU",
  "key5": "878Gp7aS5QWbHbHzz5jc7QXui9BfU4K3UZGSLesaacJZoLZoLQjEbuHoodEDTKycF6PH54P5ZvRjpJmzFH9nSmv",
  "key6": "5vPFjLw46sijV9zFNXB5mav6pvYzuQXuTTKiTcFzPDuP1TnqqDw6vrAGCgpKbqAZhFZCr68aE4R55uYvfTUKHBNg",
  "key7": "2fMyU8SWNkqa2ny48TC1uqpJ2ioue2GgD5WioZNyuAha3Y9kLBHtqw4o1XNwfoi3jNqeZkJH2QzE8tUidGbzaJVc",
  "key8": "5H23T3NZMKEqExpvmaEpnHpVHNeSYH71AgnPyBEVH3yfSfaGRkjrBrcFQDQ7RJiuuhMCfehRz3YtzLi3U85yU2vj",
  "key9": "VvUFJ2kQoVyBW28B3MmnKHMdXAbnT4iaiSViF5vVdCKGQ4d1SFgik9wjpq3MRrtmHRogJNUKudqUP8pvcXyik1d",
  "key10": "373UdiTVjpxbaJJTd1Fxf9P3sC6tXD6so5qGs94gLwLztPBRqQfLFjXhgWd83R5ARq4VtJ1N5jqhnmPUNbaXa3Kg",
  "key11": "4YWwUCefqJfSUBE51riciknPPchw7ajVU4vwwEk5SezxxAZmE4oTcf9JLYTRJtrfC5jWeqyhgw2v1dSct62s6Fd",
  "key12": "3BuevKkNfrVrMQFxY3t9yLoEUaPRFdZEJ5U1w4eaYesua7bj32KSj2F48hTUfZrVYQpWxBZwoQEqzWrxF1pXjV6B",
  "key13": "56RSyaW2mYpnptQRaGVg1TCQyYxcpN2SewYDtFKsjJZKhdmTF7FDUwQBm9fowDD26xpNCuXStsShZpRa2njJFJ8N",
  "key14": "5x2ZkwnZPYCUn2fnU5UUnAjpMeEbdJzD2u4LdZGaYbrRcYQyasLoJRoMWShg7uHQ2Ks5R43ZDCzP2ryf1gMNWj6s",
  "key15": "3H3H1gh5R2Bo5DF2VutQkGHhaDAKgVsMQSXDRLrwZ8rM4dmNgjVfZhDchcLWqk15SoAQmDPTzyGBLMTHoZo49d7K",
  "key16": "5oXaew8yNhBKejnWRVNGwnLQawvFYPFgJ2fAh4ucJxjqMk4RPXmXfzZDnwbRe2CdUyoT1aPGLwvZzAtCGYGuq6qi",
  "key17": "3nbYzZBMC2ntdgEVT7vxeescTncrQ4y3k4eZ8aj2wKHWZVmmDE89qQwBp1QLTdqUq7j8qtDHfJLN9zcGs9jDDJHo",
  "key18": "3q2Dbpn1YPNVewk2xZKyU8cX6zmcuoZBBqxkonUECK3wJaZeYQsrcqSNytAvDVQJzXTT5ZJxaZBJiVeCjUvTKU6a",
  "key19": "3WeYwsHS6BeysSfxaPX2K2LhczmY3GcaqfPwURza9BkqKuUhwuoYa32wBVyieLYLbt8vC45TH6RTe3Trq6bKnaE4",
  "key20": "3sSHXaroqJ8nkmzqQWBwHoozbFAEPFNtDWCGtnC1vZVSocdAK4YKYFQEum6ezeS6CwGajMNksV3oxPS1Dkvkst6a",
  "key21": "4Pc4XsXZXvqAPEP7GAevusCwUhxWJqHADF61qE5G6V8U9NiKxsZUhmfrUY83Y6ChdFBU2MkJjvjbucFmT99JbbTa",
  "key22": "5DyyKFizA4XJo3gtUf8kZHppj5CLjevGVarNkiK5t8aFi3nyd3sSjrtsuFJh9FhTA5YGx7VNoJZTj58D7LTAogU5",
  "key23": "hFfkh9wSLSmdS1fi6PTmNyRUB9vMQFTKoD5u28N5h6Fis7YqE8VKozzxR1F3KFGGQPKPcDmVuGHqxz9CSphR7ds",
  "key24": "4NH5mnJvUx4qMPaRLuSDQf5rBshyELExbP8ehjexEGDRUR5AFs9m36yq2tYhyuNiBu5TMPES6dRPacwg94FwCE4m",
  "key25": "MGVFu1atUidu11iy4Z7CXFKvPqHspCMfvxYX78GLDnUmBfFWygPdgnF3JNk7xvJUH5QnpkAYSzB7FPCaMte8T3e",
  "key26": "pC4vKCEW1Pz2Z8LaSoHkyHTAi9dUhMPBDodHZi622bCM5EQHQPPcnT57m1nLdET6UGR7zdW8ae3D2kZMNxQDpUY",
  "key27": "4NZh5qLMmYM5CVrniGyThpZttrXTANjqViGsawP3t6wjgQznCUnN2vAKKXqFG3aLRUNKbFvTDeHLLKhdSu5bZbd9",
  "key28": "4DKUfdfjEXtBM1f7KjzcEeZjxfR4BKC4BLpYsZ1kbpPG6A1RVDxaGEZq3REUdFGSwdH2JuHEj9nb4Br6z4EXV4Ec",
  "key29": "4jzNTKRVaVCUuK5dT4EQDvjC6hAAnbgEew2r7sWBjJyVsQMXfDqVB5825KkdZfJ1cMsX8Xe28UMtYo9ANKFRmYTb",
  "key30": "3oH31JSuZJQ977wMy4AoPSDnfHQuHrXbv9DypaLwbc2U5zcrJ6EhrnpMM1L8KBw1whAcovXHLKn6JJNFiKMyAqfK",
  "key31": "461yfgyJtPF19LZv4guKKkL8NHSiDGNwhQFbeDj8yJu9yt3wdYPo74tMvJcbbk4Wemucrf1V4rvgUDdq4kVuZNiG",
  "key32": "4mkYvv4SGwk97CWxwaiKpaWrAnstsMcQKhq2M5Bb6vvJyctJDUUBA3iZFBALddVqsiGCdqhPXHUzLkxejDPDMA8h",
  "key33": "3k9uhA72zQXuJA5itE7bHg7zsjNdP8dNiJkSq5CsER4FM6m3rdvzWP7eB5N2SkuPaZXFvGqPF2Uhq5FTJ1r2Um67",
  "key34": "4QnVo5ejYgwUoU4d7wwYsPsayWtrC2iGbsaqoftkNRbtG1esgJyJiJ7oCL1jnKx6ChGWuH3PxQsbyPwV3j22Ksbv",
  "key35": "yfuPhRHzRESo61Zezzim2NfLDa8a8b2cgQuP2FhijJNtCoxwF8CStRPQQvSPjBG6ZDwAztFRkw8CWaTJvWY46PN",
  "key36": "83ZsQ9ettRGZXHdZkPHwCNBy8RQevrdeQ5teSwgzvwWrEAwc2AnGyV79kcaL7AVRe3NomjTQWiNrJdjKJiL8ho3",
  "key37": "3s2KykF3UWGhw3dq7kgDqZQciWEqnFRnt5PoX7VMYSdsTs8TPvzNL9DpyF9tbFyoTYHrVgaNn8RUssyrfbg4PNTT",
  "key38": "5cAX8chxzHSwKNFxJHtCjvaPi1Yy6rUkKgM55q97GpUN1g8fA4cLBwFN2wGQqqWXrsgSXKrgqLz2GVFpoT8djcV6",
  "key39": "5FrMBTA2RdVYRUUB3UyL7ZRY5EH1K2UPxQ8gKzMvaizxjAUB6Tcnh6g2b1tXVDgfcpiTnNW5VGBydXgf4gg1KGei",
  "key40": "5DGmaFuDnEUypXKviPD4eJcgme8cH1eHiiDzEzGyhYMfH8LAJSY3yAr72ALsjAggzQ2q15vkMApxLbovvPyKAyP4",
  "key41": "5ZZaLpE7guuDiFo9xhsceLm1anEGAfvKg1M9JmxbhwJx9GW9UEu2ZY8urj5Wz3VRhywR9JyH8n57Q1vFLJTjp2Gg",
  "key42": "4PDZxF66uwNDRq174u6R4n6vScxTtAyxCcJW4Jvu2D5sCo5TsJangXuqJmLfTePqBQHMJerVceZUR1WG56ssGbcz",
  "key43": "423HQHAkC6N39dfTTpkwAKXktr2v9rrZLCzXBJoF1gm2EndjpMnv7azoFsRug6XHr7wKb3BFRU1YiW7FvAy9ksDA",
  "key44": "4q9RWqh4xQypgrt3h1thSUxsf1yRrHi1XRdtoLdA6rJ4ytE1ocVJeFuGPaTCmGAgquJA31rxBsnWasaoAjkHi42U",
  "key45": "5BPNddrpMWF9YQaWp8Jn4AERPyiiCCAkzB6q96LSodxbmz85R9R928DPtigNmYwdxUyQ1MQaAJCivf4Q2e5VKvD4",
  "key46": "cH3ZAriUbAnwhneNgqG8YbDoBBpSqFQkhPfFf6JVEMDfUz1RpmP7ZVR7eJPMDLMi1Sqg7dqEv3QrRtKTvVY4L7G",
  "key47": "3QsXD5epNZir7SrSWtNK4WuLqGk8vsAqSFUxpKHJbwe7P7ZHtqiHiQ672b5mAPFVU4CYgqVNRSuawRuRAxBbrYS5",
  "key48": "5D25kQ7b9fhmxA5cqDZastQaGPAvmngx32T3jsaadaFYLfW1fm745Cq3Uvm3Lz4DwNVv4mpmhERYc64W2eEn3LB2",
  "key49": "3QbFAwCAy22JxFbGceDmztdZWqwUcQ4TR6cGZPz9a7oNxdtwDrnCYbTKRq8JRMffGjapxQHiHySUGB6RY1Ma4zrm"
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
