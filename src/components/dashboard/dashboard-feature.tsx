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
    "5ya2Xw4rrgzN1GHLEtCzYKhxbgL4BfCdYCnZfes5Q1fuxDNUEo4NAUxbu3yZz991UVVUEaG847obnAxPj92yLj7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPzXPcuPvidQUkTjg7XZtFXPFkYfu28Ct5T89kDJb5tDY4AqCqU1DK85kgWoV6NrRHotvVBuH9JNEXiCtzmhPhG",
  "key1": "EGWvACgswFG6t8afnXSZfGzwtHqqg15mA9bhYx1euY9oWuqQUqQkyNFrQMH1YdbwVzH3oDh35ibAaw6GeH4B46f",
  "key2": "2riJNJBaKH5ncGMVoMo2yXThqwoFLAB1sJRz5wSs5x4JQf2rfBYXnboExifsm9MwF9xoJH8J7uF8C9GvDSX8aQmq",
  "key3": "3PcCkAZhxfMwr4En6wAayQNKgVu4gAUdMhCUQxbxsxUGJTZVUUZAXbdRX5am7iTpAzBR5QnQtFURYwir6pAH6sZg",
  "key4": "2FY1oWTb79buPUWnLpmUnDAWcQmNVufRzu6ASQT62XfdzeB2hKmZ5EnW7uMGC1kC36vKzCcZMtXeVxr37jKGCvaG",
  "key5": "2eWYSx24kFuTpLypmNnkWqfASoYsqsMYBdWscgGLsfRpagXV5E3bijmVHV6DEDN5LG8fL4zjUVRjWeN99CjgZkPC",
  "key6": "49K8CXTsVGZeQgGYyhhD38EUnBngUkk5gGmPFJfsn76jNPkCUbgP2V5mSHzGZiNHxtzaxaS1Z18gHnN8ewVBmgxy",
  "key7": "3t8zv7k9YaUwTYaeFBHSoH6kz6Bjr1e2EkAFJEpzuxQKTvShZeo2KqV1QSpH75EwUmAtz3b4cyC3R9teYUCHQcxE",
  "key8": "Jg8Gu3RVkRTxL6ptrJwtpohSpRBxmCA6UbVqsryhrGYZZoq2a4gxzAdUfoPhYppYbmYe9ggTgNBWu8cfhhBFFA2",
  "key9": "3XYZMe12hobhTsvY4su6FskFrYs4X126GXstLuBYdzBrojFB6KUjsfQPgBVafvTFQ1ibo7j1rCtNsoP6KwyFMtcR",
  "key10": "23A8NpswUmLBArpTsobxSZtoVSMBSP6o6HUzAFvPgqThiUrVKpLZws8vi9tApTnmJhddpBEmjJHgG9CQVJQbqD4R",
  "key11": "aDUiVjDnk8q6p72KKxghmfUgCSMMoyG4WDHExHSwmuX2gURAu5Eoyn2VWiUthXf3ZAG8cTrtpv5gQCMh5waHqgL",
  "key12": "5oA5BnPkBPHk42CPrsnAnmLAEMLxUNKTT3uExjp5CijnmgaJNKx319qr6rzee96MYMoPmuo166UCpA57Wg6mmykF",
  "key13": "3r2FhL6GttQc5qBGZ3ZsC2Pxs1LnrbL5zb41tik1YtssYqBh3pL8qgjzcj3eSATvi8yPQjgQhiWcS4A1Fa5YyGEx",
  "key14": "4it3gWF5WqZs8hYH1oxmH9JXFCBynZjmzpx1287hXawYToPaYiCCxyzJkNw1FQ7C2AFByHGuQwK9P11WaqLKmi6Z",
  "key15": "5oyHkKsrH4iVMb68Dtcxug9eMQzhJBoaQ9CFP2xBqLfY8c9mj9MdHcu7FXDrs5whUWGSbqy6R3HWHMAonGrkqcBH",
  "key16": "4jxU1YDXP4uQLDnsPdN6CCddMmxsgHKP7Zx9DURE77bDvzksuMu7z9K3rSK6jmJvyve2Lvptu1zSaiRpTq3AHyaJ",
  "key17": "35YzbukJf32dxpsQnGffqviN4MwJFWumfg7VrgzDLziAMPKFzhVqf7ztEvzKUdZLe8BhoHcKJy3i2K4oyqcemtXA",
  "key18": "3HsxKHo3NsgUcc3C6LiSZP64BXGCiyKy28AkExk456AGqqrK6TskaqGTBnWVM55DM54BFdZNU3hd9zFSrM3FHb36",
  "key19": "5zbW925ZDA43ayBgs5dY7JUsrosGoSyRe2dUHjyoe4hEeqdjq2EBBH2oDdKUbwxU1MWjA8hYJSwyAPd6TBx2pyAE",
  "key20": "2LuMYZsGB3Y2U6XCKEbBhMTwkbCJgEdQZGGYZgkgh2fyg6o6a8Yb4FxhDdBeQ2qgNEwGhS3waYKi99ttH8X86c88",
  "key21": "2mQYYHeX9yG5CwCN9NGC1NtcK7KJrMSbE2g13j9yPxDvd4VSzDRwgKosxrZe5qgHs9n1jNNwJe4HqCeLebdkLQVm",
  "key22": "5Wy8PNGqPTKyXNb7L1diGC5MPwQjxJNdAwhzVzJ2YMPQbKNntF5tVJff1uNiN39yirDwFpQJDDY41dZ4dv9MZgq4",
  "key23": "5h91RNFTnaCoxcb9o9r8y1UuYeg667hvwKUWVhj8sqpYywa49sTxBcDo31Uz2k1rWYUwPfP7aXBwZtu4sXWk3gnn",
  "key24": "NbLkDGwXxfKhSAxhyVXi4RTqyWLU3ZVQ9Yywrp1img3NW6FEta7rGc6Bbo97AovzKdAUWttLrocPrQ27jbGH61f",
  "key25": "2gEbq2vzbYwmEE8KVJ4HGX3Dxo1W7UvjfgwoTY98zFAUuyUCESVHAEBaUoE5ztQzfkVLJcrVmNuop4p5bs2NRwTv",
  "key26": "2CQXZYEeskTpFb4nkzV6XqhetWq43eMiPnb78ys4YQNyCuiFvxFgHu6nsgeD7LMkKaaRrmePCJK6eXxVUMw6gxmx",
  "key27": "61WaWybFiJWQQYVSkGfHZ48i525sqtMZogvdQ1Pkn5jFMDvs1vGpafnAQYdYJ6rojhf9Eex5X353gK8oWvsVkpuM",
  "key28": "3GfNa2zcrK6je4YnuLu9oGdZStxbGSvnT5X2aindDdHE8k5ayVqcAYmptoymvuU23iDyxiaKZgAoQyLmCr49YKK2",
  "key29": "hLXKHmBqvbXU38SGXvRF3GdX8nYxt2KmrMz1RK1SRYQgmyPQzSYzFqP7iLDdA3tSo4WA2FQ2swQwM3mVxcVt8jw",
  "key30": "tm17DEpnDUuQWmenyvUJ2SNV9ZbwZiNUMHbk8p937kxFr7UYerwD6npLYbVssqi6TaPC4Ga8iq7SVgtBxbwgJMX",
  "key31": "4Fp5TJJF4aWSScwjCwLZc9n3zkqU53jszdvdK386s9BzmN1Q54uDCmUEsSda1yZmJCeXVowMfcXrcv2qKEZQJhs",
  "key32": "556YVyPngps5PtwE4ggEpDf5nyV9gFAveqi5B4kuYbDuPXQ2Zet1hBuTXjDtFfg8nPzqZ3sK7VAVgBzjZHVWtc1Q",
  "key33": "5f8hpHVZxi3Ddo8VHGfibm3beAHr4RGajyUypqTbdmMZAbqNPQdZ7b3jWY8u9LjPLQW2NYLe9CiJvxM9UXb3Eu2L",
  "key34": "5N86zcGNQ6nA8HRTqXgRiBL47uZ3zxTY9dxsFukKJia6HkhYNGvmdTgVsin8fG89enswTnSLGqSns9JyDsMrgvPi",
  "key35": "2u5DXK9zgxLE4UwdFgP4Qr2NhqJ6P7hTZVVtpj5YVcwFFmsE3Pb9NKQcfJqHU6LLGfT9GVrQJgjxHQW8zeDmtzLk",
  "key36": "VaZQsZnTsGWLLrzdVHm9JQvasXRr9bDyqvimWF4dCXUL2H5cVEE4kfjt8zZsKqMNRpEB2t9jcY7GAMefyqKfYNU",
  "key37": "3tdaFsnpoXvfxYwN8CjK5ewsQtJZ9hnYLorV1vbWevH7D4b9TR1maLeRJEaJ4B3QtKuyzyqt1hD8mXPf6XtutLw4",
  "key38": "okwf32gVeEx1UQecsHpDs9hyzh49N5PTV7Atutvp1mEfnSDDZNf3HBSKutUurdC6gbTYSH4aUYjyXF5t4Kwp7EC",
  "key39": "5qZVuoV2X81UdRux57o4WBmYoFtsqhL1Z9upo7Lgt7wAJwGgwur1LwyfC5VuyzWde8bMECAdPBkUdc4DYDVERpVS",
  "key40": "PxzXTcArTdxTmoKMZAVwTCgMXyWcf2JeiNCo33vcs79Lz7G7vktwDc8KC3FpTywhPUE1Y4dEof7K12xvuhNs33H",
  "key41": "2M4dmBCmpEUU78T3EQfijoScqUeUvayuG1kwmbBucuSwfbtCtoCZ23tCUkofHGEB3iQUkLVLt7s96CBnukAAarbZ",
  "key42": "1tEubWzmBVaV5wyKjDPbppMDroCKRo6rL1sxLw1bLtBDJPN5Ru6Ks6nDkwCCfR7oxgafrtj73RFGoGfhf8z2zv4",
  "key43": "Vq7xB2LJLbeBcjo8zvP2vw9noghohECmCAnQZHLtURQUBEWDfCUc6dFbb4LqMpbJWdfnCVquA9wr4e2LL7efKJA",
  "key44": "5w24vXa5Sr472ynYr6TdNRAEU5m4J73PHvGTozew3yjntuAvVjZWYW2Ks6CkLLzDQxt5ayRZSfG47Ziky1LyDG3W",
  "key45": "4q1kaPaDDxvVWNiTh2wQxjQ5piPByznGTwfDUVdTSTFQeJ7MeSEAHmJnLADXa8A17hDkLgWHF31uaXzTpHLid5RB",
  "key46": "5sfzSFsfH5bdezheNFMyMP9F3LngfDVsuCcJq4UwjbRAdySmLf82bEzpMvbuB6tuuoXSEWFCeF85g9omQqGBFNJT"
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
