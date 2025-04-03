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
    "3P21qZKMxzgLEaoKEtbUsb3pPNMzbDXCLvT9WCpWiqbVoEqfRwVjksgFjgiVcA7SdnxxMNHWFBpscWUUMz93B3FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ocQvxGjYUMJj1UbxqyAw69KdBeiGYC1wPhX69HQD4dVTqBLS3mDKPyFwLLyhPnouE9S7zUAkbqc6G3EQiLQLS7k",
  "key1": "g9GHDUNytmMZ2CvJofSNy96Wh5qwaF1n8sEyGnaSHFNrRrWD7e99hAHv5LCJhWPN7QYgzEJi467oBpN9ZcUKq3d",
  "key2": "4z2SsRg8qA9tiiRoLeSNMJy1nEDgQ7NDixAjM8r3WNii7as1m1Xp3XC4Z2GRK1KbzbLow5J8YFBFVRct48CBoUU8",
  "key3": "5DN3XWcJAxE8QfbeDpz2rvh7hPCjCaJ5GyCMaFkhMHfrKtwcHowDuqBpYG4sP38Uh47ewZmgVj9njyvhCadzKtKf",
  "key4": "3HZ1nxg3BRyjF8uUZgHxJyMiaWuhgJhGmT8WTcrDprkFXiqg4c6KvKMtuVhyCEU6fH9dgJQvAzcgUy4E9eJkxmi",
  "key5": "5XiEGE6Fjg5pCagkVNmgWg83s7vopQKiWi5ZGPkazWC15ButkhWSsE2GVYtij1opjxERzoNRtyAEqsiyv2erVs1q",
  "key6": "x4tC5mztHEUs15tUo1nATh7k5yeyHx1ShkmG6GTuqobuyUUsYTE9MuVE3nMMwqdGZaQJu9e9vkDNnoSz42pncsc",
  "key7": "5TMaHwp7evNx1ewP2XMAR8GLfmwNhJznbRJCX4h85EAqAVW341P1Nsn7bDvsVuSUntjQTXoixWCNpfiWipQdqJ88",
  "key8": "2vEwRy65BkoyE93fpvZ7zUyrjeYBiH8MiArRS6XPTBMqoAbU3cq76fgfaF6jM1UpUWUaRNVKMQdsevjYN91nZj61",
  "key9": "4A8QgmRDLzEv3fFVdLKoZ8fXTc7nPVd9YQAproJA9VG8tVWXemBTT1LTAtAv8ePvM2o3WQdbXdtizrffLAeBd1Wx",
  "key10": "2cVhXxd8ebAmCB6xLvjbHHMdYmhzPYfxwwGGMCcnYrPJ5YKVQR1jL5dTYYXWkRou1Lnc7gAakceaS6EeF5DUq2ac",
  "key11": "3rD9M5AArHSv95jjtvSqbma6Bc3fpgirLuo3CwMXMpgGZw7QfjXn2q2ryihiBAJeqj1hG1dPatTQaRECAjNE6rrS",
  "key12": "2fXwGph7ppYbDwdyBmRSkQ3Gs3uoYbUAsufF94XRSMKjxVgeB7RXnEEJJni23w4aRZS4FjRoLN7BjQUvbHSxn72D",
  "key13": "2ToXnrVoj6Jw4A4qrR4pk9GZGuCvsFNN7W1uWobn7HM4hCCEdmUWFPwoHEddk2AVQa2Ar3uQzeMGAtCiNa7bYq4b",
  "key14": "5hTpF6Lwkp2N4Ekby1korjXGExyxN6nHxrffEdENLi58QzQKoeg3fHC6HGiYBmnt8rxFhawqVRRTwLKUBq812q28",
  "key15": "5FiJp5XTBZThZ9HvvX63eHV1UEH1bMv1uKcAAag6ZvpP4Asj3HFL7ue8Z75BfaypfGeJEakgo6oSfzePk34s4v2o",
  "key16": "4FT6D6eVX3S7v5nykx8s67rydXG1uiXhnb1QCSEVGmr55uM3aDGruxdeg661dDkD6uTUjzh3ofguzwt19kT7rHaK",
  "key17": "4wKrzo1Q3zcxRTDJuTiXSsC18NY5bt5LKCqGzcy42Y19Fr3EWDuUHegaMqgzrVjp7SstqJLCicYEGji1eHnbkLpy",
  "key18": "3aSrk2RzJjy5CsLwPbCtUYUAZBXWiBwmXDan5GmpGuMG5t4HHvJNArqrQ6S7ZhXvSSUtbC4k9UE9Jjp7qhpVsqLy",
  "key19": "wsP3CqL6q7oWiYz6wfKrPDdrnUvU3foT5tszzbwcBciDA58nChdfrcG51kL2WBxzv1XWfbmqiowvNPvxGsQAJ4Z",
  "key20": "EbzGWjFRTPWFA8Js1qF4UdSiMj2f8ZwqewhfEBTGkT3uffVUA9QmC3mbkcYNFCMd3QbZM8AS5TBiPFzBWPcB5Jn",
  "key21": "G2ocmyZe22fDojpeR8nGbUA6oTP92ytm3sL9gcNSkda4Du8kBwUC6UMkJNGSbnH2EgYHuFSaf1s1Gs2AviyZmHq",
  "key22": "3siQzeoepzN3NeeMAzbsv4yCkd4bpifbebAsNcaQYSAY71z7E5GqhaeB1NgTeUCqmMAhsP3af1CGLF6neaNT1pJk",
  "key23": "2v7kHTYARsUFcnZjVQQHadx1YfttzjATdvdoKcbXV6HVAADz96wEKiZQqwLjK6TKb6syUtkKxJkw9gvNjNd95oa2",
  "key24": "5cYv6stFtwb4a156AQ6Ris2GnC4BVB6TqmN8eVqU6Q5YBaqYKntnnGC4wxU2Mym2w2KeAT28atmxHgfnN5QBDjb8",
  "key25": "uK1bmYtQvNjJJAwbUXztwB5pvbhSWwrh22MwjWrRuZkxNDsXZWWp3EgchAcV5uLw4jwugUTHQvvSwbsdH93cFwP",
  "key26": "5GMN3kZSLfj3hY2AFu4WuvQT86LLr8y5UYVcm8bk87dt9SMmcs5fzw9ZZQSHGVwupsSEwqazUCJRqTE6g4PfvDfq",
  "key27": "2SsBxAfxaHYvBytthjqt2pnNEzeK8j74rx4a9WJjYCEdN2FqN47wba2xES6H16Wq51pYEQeusdZJp4E8HTCUPeSq",
  "key28": "5Mm2AMrZaYBksVGcvVNpivr7K8enRJbHonk2TCRnZkwiyRec9i6pzPxd7kJ2DnXENKekYJrrHGXNj1a8vMZF5vbX",
  "key29": "4gRVHPpWR4qRhrnTiUuPwCrUNncgRbcSwZvKQUVCRTLxGK6xEqBwWrgXdnjQmWjo9QMNSai4FTSrwTJxGUWpNFqi",
  "key30": "Hr7Y3mgZvpmubCigv6V3vcxocCK4E3DbpDhFvZKnoQRDsbGtWhhvYpazFsiEjrFHTbMvyTXeiidheUhxUDZjy5t",
  "key31": "2K26bBGuABDk5m18CHAAEJ7u2aSEGtjoVyMrjbDAYHWG4TwK6qdmnwmYqb81q6bYMruCEPg38T1VZA1qhw2X3fU",
  "key32": "5rz1herDRC3pXtrojgua4f9urdQszDnLNFnptSdkVFgFT4tGNqhRDT7hWEEEQY73R9H8X7nbjnJvAgqNUUTRBw7b",
  "key33": "9b3XEZ1jHPR6oKeEiGgx26Scm2Kcbe8HFJ2HRKcyqoe9arY5BhPxBE8vbxNHDZLtPcLRr4TYgeLTWrfcLG5t16x",
  "key34": "5H1ww5avvhngz2tJwVqVzZiKTjNfP54rheHdHBe3YuG6Y1mcKwU7uW5situVpG4kVYGYLgaoa7A43v1cf5Yh9HUq",
  "key35": "2ArwFFswg64xN7zj4Qi7RoQCmxQHeopQEaWCsR3P5HnxQZVNq7JNd6CzP26NL3LgB4FYRQvSMAAsSpW4NMT6EK6j",
  "key36": "2cEkYZmk9KGmznXUKageSb78pj8ZxmcMuG9Xh2uGAq1L4fmJgkm8YR5pLWhfdDQW544J3XNot8Ykusshso8MfvEY",
  "key37": "5Z5ZMaqK37vFS9kanrSTobhsPipaNv72PUzkQwMmdEU8dU9yvKZKoppzRUNRgqUf6JztWvskk7tXNa9b9dvc9nvg",
  "key38": "HtDXpHGfGCfiJgx3EVTjns6sP8Z6vkSEHpgSRZPiQ1Ety5AXEhYj9kKuJbVpRSEi8rBkPXubL1eQiuYPxnDGwEz",
  "key39": "33zaMPjUtuhYTdwApJqBVJEK62QaXE8NmChCbvW74PuwzDvhxPboyQE44SuqCdJUEY22KtDecJGp2hCzYyJm9SJS",
  "key40": "4GSqcFBQKMeWMXeqcigTPacZQn6ZkqUm4YbknDmXqazz9JAS4fVnfpGoGUo42bswAyYRvvSEyj4vb8mRvzHM4vnh",
  "key41": "NUTKwbiD98P5ZyRq6uduKAeR5PbGQKfSDdjty5dWiegecB5SVzwZWpuAWEwnwcZSox8huxtFhcrmCUph9AWstun",
  "key42": "2kTQAzt4ePcNhSnZdYW2DNmoQ56ZbnnYkV5UE7dVSyhfqEyGQPvcuj3EnrLxpqGAdoCMjdDbjaWci8maakm6M7AD",
  "key43": "4qX5AS2UaetTv8szS96NiNBKLVZGyf7DaXav2jAkMYduAdpvKafBJSV1f7fYELibJB7uZNQHW3RRohnxprmjFwqw",
  "key44": "5w6pJZWyYovT2vYEcHBdjivYdENpFBHTkL28kVCzSN35oZJZkFMCn8ckDSfGYeQZkJHyyDRrwtgmgNKFVnFhzscD",
  "key45": "23sodug55aLvvab3B89j3WkENhMZDaewqrS4CJ3srxqtYegGm4i6qHtVgW2fDNrWHNgyYj19txUrJJ9MJcUMq4yf",
  "key46": "5H33MejzoQmmoiYrsGRaZ6PtLtJoJ2hwLu2tE6CYBRAsv3AcBseDe12zWVj1yWGZSKnxhsshwu9JiRPk1MhzhaPs",
  "key47": "4FsCxg4oQb7gwem9s3Kr9uNgRxM9jFYjN9z7YFsNNa3znVL2Cirzve7A4UqfK8rYiZHVHreHWjMJnoqkLbftorS4",
  "key48": "3rqs2VPXro8EFatd1uSt9ykcF1n81fHaaY23RpK5AtnUvaS5q2ZSvje6RC9WDTF3WBDf7GQUubjpf8yEqPPCFFck"
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
