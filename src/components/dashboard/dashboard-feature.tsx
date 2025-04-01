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
    "5JmWRGVwJm6wLnzfpuA75Q3pjAd5rvB7RvHhpL3b8nsWZ7gUcWyxYmnREa9PNtYqeAvWc9vr1cyRQXWde3k2hXqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEnujLmchgQ9WoZBkrwtYREbEjH7YScnSw1s5itkwGXEdcmWerthWFbcPibHNAhTfuW1XqD9NR5ik6BE64bxQKD",
  "key1": "27nm1C92iBeGdaTH8nReuPCmxasP51jzybDLne9Vsy74wRu8K5o6Rc3DmX45irvpxAam2n3LyAGoo1aEzuYAaGs4",
  "key2": "5vig4N1JFMMmuXztt3chNxFRsTrNADbM3dR1JTNypxotAiZ6oo56dPj3AGhuoBawvfD1T3S1zC6R766ejSMcdMp",
  "key3": "4NS1QxXXofvwjNpY8AhMyF8HV1wjVRpGtsKJcCDHjcYMMUXuVQHUraPSEB5S7cdNQU26nRfgUtTDLtR3TFX7sv8E",
  "key4": "5praotTYhiyutvGo7fjenH7gaewurkaTV1cJfQjgGJ6UqLh2SvoR5LaZpWX7AVchWLHcrvHxjGELnLnEu27MPGUk",
  "key5": "Yg4sFKfXHA5hsNASgUhW8Wjrb4Jw9hbiTLjegVUfvWWtSarUgA86ZnD7tnUMbniCaJrPAFRmz1NLGJuWjqrxv8L",
  "key6": "3jjTNHXt3EFwGS6abZWzrzYxpXU53YTKn8VPm4RJk6buopEiBfq9cZUQScExXQFTE2hncuANZuK9owdLm9Ba6zto",
  "key7": "3bRsxCYvYLvVgt34JrmzVpDqVYEMSBqPPQYzWfnn4Hzpt4Fv3LKbTAq8ue9HUgnLS5UJ6qL8F7GY6GD5eppVHBf3",
  "key8": "5r5NzxDAvdiDtHxeLgATNyDHHJ4DRWeQbPXXJRt5E2pHY89PgBX4Hban783KGQE1jLDQXt9hsnno6dmFgji8Ae2R",
  "key9": "2S124vEkTsmujSD3UCNKqs5PvB3u1fkFtwfREWsE4k1FYYmKjjAaNtzDgDPzzHbsXRd8suSEWbhYpWw5nijJPMEh",
  "key10": "2phVPNwECWydXj9zCvLi4sgiKAGp829L9vTPfqfd8ZerH4tSZFSFWRqfErPWMGziW8SoMZUt5N282DsTUx6xgPzo",
  "key11": "3AMDb17dsff6zTYcP5epPSAXrCaWqNDCwDataiZRRRhfb1Ne1WAFNTx3W8tx2cT8S6AuRrwMbW6mpxm8unWPsMVf",
  "key12": "2EY3tMyT8joNeKvNoEVWLjiQm6HGwRhHFSnZSzDuCDBLBr29VA4enrmFqRpjGgriSnPVtCUZxt1LQGuGJWY5CNW3",
  "key13": "348RP7QMSJAf9sb1T9kKXckeFL8znS6vqiXirsMqoFtRJYSrSdydVQfUQ39e17mFiC2WJRG1gFLYj3Xs146FtdCr",
  "key14": "3GdBF61nFM6UtpfmZazycVKqZZK8UhLWdiPBnWLiQpbwJcsQeMq7uezLq5E4NasZqVcs4puvLm2Wu9Geqq1JWkon",
  "key15": "2j3AWupFjq6QHdgw77FwAKrxAB85ecPEUqtueC76AJt92SUnvjEDoGyeuBGgEY2yYBiWmNUiSQ892ZGb6pdLsS24",
  "key16": "foFngbmezU6cGLceR9ujVw6o3urPf56CtXAyKsXcFLBGSbbWsJdek3tKNsNnEthPJXFLk9qzrVMgXXrxBVvi9UL",
  "key17": "4Pdc3C4dbcDdW99aZKbUopLKCysowWe6aQotnHmKua3m1PNRxoXHJd7F52ufrbvsFnv7DaKduVMPvcUyg9CSXWnC",
  "key18": "2kfEwnmqbnPkKUcUHavjRxiQ7fJKHxeZa5se1uCSSs8c5qpSSzcsSJTPanRr1sjAzfST3b1HvsRDHXR8iSX18zpm",
  "key19": "4pphGXjxxjvoiSDXBusvCXWne4hTenAxz9zKxH4xmaJbE1eu6pmPVT714yLRGiH8cgaTafNogpa63iD1zSVmYeFz",
  "key20": "2EmXFANtBS9KNY5H4J2mzpNFWKwpPpudAZGW2Msp3akAAXN7Z8c8mMcA2aaijyUMRBUmCsjX74PXCVUBj2yeAwqf",
  "key21": "31i1HCTUYrV1LUhTRsyvpJVRJPBXnXZAkpeS4Dx4BA8cMvr962T3XghJvDuAnVWeSzdwjjbWRySaBncjh7kPKigw",
  "key22": "65vtSE3v8VksbGcF8s8rbTh2bdU4RpkPaFhKs3vVuGc7roR6erofQSNM85ov1zSvP5FpSu1sn65LbPbDi6gHawwf",
  "key23": "59obuLk8rP74kcWKbwEj6mrnk4ftT1VcoQARkagbH1MGATD37GDvWHTgBLijpC5V3jcwnmxJTdfM3A6fyx5QuNKt",
  "key24": "hvK3gR8nassfnGfU2jABEXiENv7TAVwe6zhgZn4aMyQMAnM2BPR4TNNq6YYZqgjAuY1eBQSS727v1TN8fWJgrX6",
  "key25": "5Dc79GThu8HawZccrSzKh3HuYUGsXdWhx1x4M35BrxJEp6KH8RFv2GSqUairT2uEUF5d4P71vcHWsX1gKWyJzhbF",
  "key26": "4vYma3kWCofPd6qpTj1vjVDuuXesyjvLEHxpkTHCBzGxFFV85gmonnvbRd5UKskNP1RwxvGh4PnygGzdWqPaGFG3",
  "key27": "56iixUASYKCsfq8Dak3YHSHb6Q8Do8mxRmNHpgRz5WLdP6Ds8h4N1Qw5UMYMzigRJ8RYk6VP79oY4BKuoaHfgk1W",
  "key28": "3FK2VoMDTeawWCouLn7Uaqd7hwcmQfKhqWi2Ja5ktzNEmKy3kpAJs9NbbZ188GFzX4hv5roL1BRZbvGrtCBLuLAo",
  "key29": "5WBCGkaRp9X1v1XYggEB6aZGTqWTQVZFmCtCtgtGWAuEhSuLpaW4WyNmypYxQj9dyMkn3LQHCSKZxoaKqPeaT95L",
  "key30": "2ew4yXwwUxNtUvDHHqEpU5JBrC2veuiAz9YijmebseL6aFx3Tjp57nvca6kXesiswqKUSdNp4VXR8msS4dGmt8fP",
  "key31": "4JHDBmXHh2cz8TQ9r4b5p38M2qHFizE8Gs6dy9ffAX1KxhKkW1JnQAfNj9DjhzfAXt2c4eJMSMkNLnGPf9YGb6yp",
  "key32": "FphBsMLuKZRDcAmzWUCrpYs8usvRPKnUdqfBQxyH2VdJjSXvQJ6XdDAgCsWMnyp2rbYkf4mRPFWmErwX5rtN5HH",
  "key33": "2KDNkwh6MgYGDMjS1RAJAJx9AcdZcSzWsY1Apkb6ZYvwBLvaVHbJLrL69Y8WCvv5xDT2ii8xrSz6NZNuCM6ribyd",
  "key34": "5Z2QSWNcjFEYkKRMoAoN5QjjwZ2aiy3XybHxgCD3wRNCQRraCayXzHsg4dkjzeBphkM9J7yBsfnaBexdk7J8NxcU",
  "key35": "5f2QaDi969gCwN7m1RCVFnTUDZfRBzZxLddpXHy421ozXY1SkTPYGCW9CgRdxmEnDFcgxMn3AJwK23UVtzvU5CS5",
  "key36": "435P2AgRZLJtw5cw7p9y5C1wGv77f7uZAVwwUC6ajtK9gmtG23RDvHQHaaS81QCdQuAyWnRumUT57xRACL9WkVUX",
  "key37": "4ZjKSMhusWEXPkb4tVVUj9T4rS2gMyYLEN2CVmHMs5p1eCm8Z5CkAALbw6tQVoyhBqjY9gWn4xYoqVXT3a8hZdQ6",
  "key38": "2C1XVyh2osxsXWZp2QCKupfqrAEA2sM9xZ7s4QMzhKDEEyGd1K4iQX7VExk9KK3FGefdDMp4uJsoW6MByyRicJkv",
  "key39": "5cBVsqsEXJVPHhLRM9tcSReGqKy2XbN9zshpZMQaCCgrLCsqmQ8dJuS9oVg82UfKFv3YVfwsdHoGEZX2SNaibevo",
  "key40": "245yd1KARgKRqSFKRGSvNLcGL2ivkVzR9q5FPEZJ3rqVFPmRHxZeWSQ96si7KEvoMhg8R8iNLwTSkXzB8ZYZshJ2",
  "key41": "5wY37w7zrwkpACF8eWJgqYm3eW46FM9uFr36FZ9LXYScZL8K158HdHERGJzgYNbCNAUuEkeHqN3EQiCaktkpWq8c",
  "key42": "2CFKEHk9GGKCME9Qbb3kHDgebb9QqguvPHoT5qufJ4jyoiatu3GZxunAvmqGekwembGe5VJvDNYVKeMsHQQjJbMm",
  "key43": "6eL4minGfn5wAvLpTVL7vS77JaN7XZkA2mkKgz1VpDVGamxqiLZXSCs5zqPF4nwZKU2k5zmpQLS7fQN3ZxKvcDT",
  "key44": "jV7ZTWedh6nEofZUudzVqrYrKv5HxhEE4Vj1KzBhUXxJ8o2DnfUSrBu6YcpCtMFxFTu9Tv9gqH9StPeUiy5EVBE",
  "key45": "52hpvS3G8R85XvdvqHLM12qT5J22Ks5RPc8A99Uma3ueBJZY6DTmSwudEoxGMLeRBssQoz3qbDiWYEijjhFTKcSS",
  "key46": "3ztxrDns8CpDfHsP8Ua4NviZxqWrKqQyFBRr5s2rdRN7LLbAyrqf66fvYrYLE9wHvPfkiMjKHCrUuVL4LSthphpy"
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
