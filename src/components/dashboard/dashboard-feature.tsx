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
    "2L93JhKXgf6JmCznvxJnuy1NnHpBLMFDd9zQm8znEkGbiZ1u8L3RmWVeeRvK8Tj7HYZQCbX9pbn6Rh1TDgYhiLp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uscjuXGBeNC89QjW8Eu73ZSMRoymuQTyNJ9GFceAVhHGwYCG5rZjcwbPyMPoGG6bwgi6JtACUau6ZMqD6CfgPJn",
  "key1": "37buP9yKT4G7KBE84JizT1TCYuNUauLVZz5GhpJieGsUQ2ApG49CV5RDnJ9GcWRYCLubtnkS1VtZobSNtjXQdprp",
  "key2": "2jUw1cZaN758UP7WrsvjZzcW65i18EUCREU1KQxnGuX9WNTczi2sKovmeWi4hska8yTXskvnZtoziT4fa7KNwBWH",
  "key3": "58CdxE3mdiJ5Yk5wBqNTBsXtVeLUge3BJk7y7cF5gnm2H3x2pjHkmskaphnZoSGY3WFAXpXJSCXwtub5cJzASb5z",
  "key4": "2yptBupVxc89ZXQSG4gvjrgks2Fbh5eYp1NqmHDd8gZqJEr3iZD2FxE7t6B28qst5TdG1Jvgwwyw1HFc1e7hGtyt",
  "key5": "3SW7X9GiZzmyWaAeavVci3ZhGpNvvT99tmm4iER3HYmP6p57CdTNu7VqQtyMmQ2TeQStAwY1y9FbPZR2oxL7Ui5s",
  "key6": "45Ath2FobaTLS8EVfBk2uedWRtztWAfYefrqVfVkY31bfMZmisVvfxRUxCNwwdRg8w7smbkz45nVVS7Z8gg38W4b",
  "key7": "2uYoajaqcVc3MnJbYZexbdcNSyKBMftMoX5YEtdankHHvzgc3bx4tYYMwsHtJCuEDSkdH55kJVVxb5cLuxWwoHcS",
  "key8": "4Bn1NNkpTQSDeZtxVcMYXByjmgydPuer9JNNvHwsxeyz2Y6bCFC2nQhEwZnTY2sVimDZ2q3wniUzSCeMV9mU2ai9",
  "key9": "3zFaBN1tFyRDbN9MobQnsY7ikkEDW2HRWyEJhQsRpaX2QeYxPzPc8a5t19U9757r648FnP13aPpwaMco3khqs5cM",
  "key10": "5Fwy23RhKJUz4qFHGhLVHB7UtWQvVaLgydaTYXCaAmYhSk7piAkm92trZXkXqK1wg8yGagzUm4JApPQuMJqtoqVc",
  "key11": "2SCMCsou4pxMps48eU7x1E3rSGxGMpyUU2o9ZpNjAhHP7pekGCxaSSMX6hyaK4kfpBSf8Lh7JzSrqejBj5avPsgR",
  "key12": "5EhdtgZY7XDxB7TZT2ippqnua5cuAtP5cYaQ86RrZ93CrH1wQeiDFgeDbpF1F9TmicFkkfrUwGDCD4GXVcMdqzT2",
  "key13": "4JDyMCrXWeAZyyRRmftkjT8J1oQN1tN2UVcHVPJUqufUzY4SqZfoyhYqxAhJruYMePoi6PoB98XiM6TRnkcRDD6F",
  "key14": "3k4u9zQ1wVLCRuiLr7N2QrifdeqwtkqGq9Mx5vBzavuXigZjuBBYsc6MPiTQkBGu7pXxnNv1M8UuBYfzNYFrBhyT",
  "key15": "64QG3b29spurrZtsC45atTdrwCN4tqxQzfHfYjcPoauTdcroT44NN7gJ781oBwid6zhfjUh73whUqjBoU3MX21ay",
  "key16": "hQmj2o7xaE9sNcCrufFssVfDqW59NrvXivey1LsUEV2QPM1BPjiwbDFEC4daHNV33hfygW8FxS1pLXWXt1oNikf",
  "key17": "4wpKfvp35c9Qbg9NNTNPsFNcxEVnkdsn7VK9gKJMTsxAD61zsMEn5vQyC6DfnYeKnRaBn334sFWMh4jCyGiWga6R",
  "key18": "4tM8BNZDBp9mSTuVbhTpFVuwwBGSTDasgiDE5ezNYE8syxe6g8sPKoekZh5TK8REiM5xpeSJYK6RC77xzmVTWpsG",
  "key19": "JkjsLf8GrnVmE6gsKLfEpC36YEVZQwwvdm7fMMDAMjQ49sSRfu2M8i3ottPMQUrcXqoKQkdC5vr9TKkaqs56kEj",
  "key20": "5RVziqnJufPHejr14n63Wqdjf7yQxYQpHpwjqrC1LFbXBEg4pBGszKZtk9tSmxwBPJua64rehHtr2amrzhMKM4K3",
  "key21": "5nXzYuvKf5c5zmBgmfPTeFZgJdq9yRJri3w7Awi2xPdhWR4ci2S5kiSC6D9cyAcwt6W29PiNVoe3wxNmdZiicZJ5",
  "key22": "5eReMRsC9h6tV2SqVEUgPe4jbE4sngu2MSAsrqaXfxXVixQ6NVmo5Lgq6m7v1EuY7vw9gAdouSmGycgUzZZug45b",
  "key23": "5QBDHXWerUiR8eXBtMRiaWufWeWW7u1AMc2cLRu1MQVybyuDxZL338Y3A5CgTH8YhfGrmkTR6U2J8aF7Q1S4TtpW",
  "key24": "M2Um61ArDiJs3fLrGDzdBFfa9d4HLrGf6TkA1Z8GJrWMcwoLS3SRgrUgyDf1uddhSFxym3sx71j5cz6CNWWmpxJ",
  "key25": "4BvA1MYN63m3GxKRsdTpeEevgpwn6zn4fW6tottprWNR3b88n3cjDzPmkvXQNd3sFfaQ1PMYbwtmEy97uMKyxXpo",
  "key26": "61QiidSecS3ECDErZy6cq4VURRk5gskaMnMQwteQEmynwYpBGET8dQbaCQqfG5dxyTkcPmP2MCvGm1XmGLQpVrHG",
  "key27": "4GFjjErhVUMUjbSL7UJSMY2mCQypQfeLYzz1awdcVSFt5R4DNi41ZZ26CrrFCsatHNfjyr1JPJbC9ULfxZHM1RRY",
  "key28": "3H8g2EccoEzk1bLvwMscFcqrQQcxia7KdcM5Bszpfw4SzhTBcTDxXkoG3Dw8jFU2gDBnXAb1z5YBTMsiRZo1ciPG",
  "key29": "2X9aTVvpzczDGLRh4NoN77y9jiNs4deRhiRAx2maYkZLRmxMY8J2u74KLH6vsPFyD8CE9BTDTos5Hqrdpe8fTrsJ",
  "key30": "5FNpS9Ly8ifFKKRqgtzuiJn3zwpbdy9zmxHwj5CCGz849yTLykN2EnX9QLbM1ncv3LZGYXP57VUMJQkpBr8Qp1Uj",
  "key31": "7zrjobee6WirNBpxvdtjm5VW5VQXvQShf3pv8hKS8pgxpQPKFas1YGUgw2mLLnLUGnpb6Zfx5x4WtKULmdaR4Fd",
  "key32": "2GpMLw5xR6FqPTta6Yd9GqcrqpgqBJWbUMahPbpEzzQJkysEourcE8skwnXbdNLk14bpoMYwAgKZAcKxJ1asegSZ",
  "key33": "2Yt4gJkfHSMHSruBPsnkymHHPyRWZxTqZwp6QX9h8g9DgR7m1cbU2jJsqY8pQTCg2bcnthhueJisdEc4XmNTc9J8",
  "key34": "5PhuUMivTdf3Y5PQkR7kc33Mq8yz7qHEKeChQMuyuMCM5tTS87FWQzc1zfXncXHYjdSDmvy3iCYnFRXoV7WdbtYg",
  "key35": "4ooBsvVDXdRVWFamQXAGhfDrocXx4fbqDwwwioPn63HHsisQPPpXDKeQWBgijS7fEju9vn5SygAwyLM7AB5THsxm",
  "key36": "58M6GUVX8zHSrw5j9Fz29QctWV3EDSGywyvRnwxMJqiFTfywwRdqCZMJvDe6Se647oYpaaVFcijN6SWedbdiHJ2R",
  "key37": "5mKBwbWDN9VeJ4avgPMxtMVWX29vEsCiSVc7YU5Kaz3emDyHb44DKoyMwo1QyCbBYCegeD1iToqbx5VuMJf8EdK1",
  "key38": "4dZg4mgYKAD8eRNvKzvm9p3mrn2VUf7ApYM26SyaY3NdjLDNMxRn9BciAKpEs961mnzgM9ZaNiUR9er55Eb2bffS",
  "key39": "3x9B47sPFRKG22NGxW3ZMjyMYJqx1TNKyqmGH8r2nTBXiLrQniGJMwX3wq6KuS21KgCdpuRtNw6p1WKsRB5RkwM4",
  "key40": "28ttmhYXbthXedZomL2DiPQwjdZ6hvzViJmjHkD6DvtbBqWuQgXRB2WNGKD6oYYRMqaCzhkGd31HadXG5iKiASHV",
  "key41": "5ug4LbnEAU5HL6TVCj31ZcHihjoRVa6Gfb9xa9kDCTmxYWV8iAb33ooDunEdBJtGjTWfH4pEHUWEdaNqVdrE1D3i",
  "key42": "2yNiEVDEFEt1o3RJPFqfwmctrEeSA7Jb2zF95ajxKYBdbCurmpSY1F4zV8ycTx362SVNDM2CUuC6z7ieZe9kKKmG",
  "key43": "2hCiBvjHSMhhQVxPmLv1kEZ2fvwxGg6bddxrcbHuz1mwJa1wLiNaFFBkb9cAraNqtdqGBdm5EqerorTZo31j4W7R",
  "key44": "5Ey32LXmu8fG8GL21Ret4oUnMTXscSN28Tyea14Kh8khnCBujCKMjxKQme5xj3GnQepdPWRt3dj7hD51Lb2Kcrax"
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
