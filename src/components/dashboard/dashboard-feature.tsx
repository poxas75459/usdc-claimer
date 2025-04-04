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
    "2rSp86fHZs4qqjvuqUhiuSPjcKCktet8YjwYTzEebqbkAQPZsajU6zL4zukPHj6vtfntQ93KdnMHMBgcFESsEnBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNRvppH33HQbAgoUdqXYRgFPcNVHzPrFen6GAHmdmUNmUeGJ8fkacZhcrMz5QUQYS1j5iwKW13pE5ZVFvYFFZRE",
  "key1": "5bkE8xpSdg8UvV5s7dadLHcNpQXFkgJB6QpTwN28fJWw3EZ2QL127iPk1yDxJEgdnhppAJdnitd6S9VbgZoWswHj",
  "key2": "7bxrg6yKTuBDtQ6EL4x7UqRtKUCNZ9nSsJn1XqaEqjywsFkQs9YAr5sTxN4SopF8EfTrsjC3PwJp59KNNqRTwGN",
  "key3": "5YZCJGvrwMdWRT4z4VqPemXg9v6mbH47qD75zxtpyZptiwNosy6dHW9Ff8kz1TsfF81wugLFj7cHLLxdMdw6E71q",
  "key4": "62pLC12dvef4dFBDZsHArfxgqbmnJmbckShjyQ6mbJDSKa94Dgk64ZJSHZ2RuTVYq1ot4cDAS7GhXAdZEg7yx6bQ",
  "key5": "3QGPAkWN5NrqNBLTh5CYfy3DC6DXhLWViZHLc73QyEF76GbifgteifHQPYk17RVu2SrC9VbuyF1sriqGGQm5QyKq",
  "key6": "3ELn9fbMgVStB6sWgE6UDFjLJTyK37YKvXptxFDD15Ci9JAWqn11VRVmY77tnuJ4GjHjnjLAq4AprAUyKU8wZiAy",
  "key7": "3zRBz421coK7G5udvKaUnd7ZsSDaRfj4BqnLgeZXD5wx3t2qzMzQUZDa2tXehEVhgTaJ4uHQ2TCGdAvQM3ZCSUQE",
  "key8": "nD5cRoZBUJKA2VkNr5ngQtPCwF2uzsSAVuZ923pcfzdmnNQTSUtrsBd2JjYzUzQ9FPSW9kn8X5CPxSn1mrMBahq",
  "key9": "2WWHs9ZpnfDNn3oLVdw9LjgLE3Udi5eJ43CcnfV6baL4RHihffXSEL2yyfJLvEHxiLbzavPmTzMLDpAXqrn6JFRJ",
  "key10": "2gLx5GH6NsaSCZYDpoTgjRieSjyuQXjcE6zpuf4Bauw45vCnrJFon4bRzKrd4PrrgsQvoCzSimregLYNSaDvyWi6",
  "key11": "4Lt4vbYQbBiskR6pGYxTopHcFV5ZvDukvt26akLGU7s4pvcVKNXJ1cbcvgbNbphb5wwssf1W4GisoqKKa3wNF5u2",
  "key12": "5zyxemDACm2pMFT5Fm18dxLQxZyoqQTFaxFHmMnzHR5SSzPaFjNPXerSVJFTG7QtAasevpzMMDK5eheBppPuFk6f",
  "key13": "4vNpQYJEBapc9BdtsUQNY3eYczz8kHAKLyGCkngrD9Dxrw6TqCNBGLaCVZXsmRuvecjiGZD9d1Z5WRytQxjkvyeU",
  "key14": "5vUpZiBB5qjsK69autrT3MKGABAMoA4Tshby53qWcgBsmhMijF18fugvLj8pDnkyt54Y6dAWSuAuYQq8ykZQnaPM",
  "key15": "bh7712wymGJfxbNRN7aJDEvE1SrYSjii4ayRxtqabPRCVF3QXEbYTntFKJN19KbHoE93yuUAZvedMwebw2tB6ns",
  "key16": "4omrk4e7zTUi2p5kJRaCV11GVtHkgCHiQdngbjASYb5L7pXBMLrtCZ9dqYYFHyE5PWCa5zuLMtiD6R4sbLgPspJS",
  "key17": "3mnHhCQy4aEAz3mjtUefwdfmUSQEhzpY2p2cL77GjsDS7MFLZwaf8YYEJcyre7Mv6RZfK1AmsnHGHZur5g7S4Ea4",
  "key18": "3FRJRBPG2tqvG9U1RCokSwiCGAMisgivvBUiDeCfYxmoXcbtYZgp73koaYcu6JGPzLXZcfrBG8jb5VYGSwzebetf",
  "key19": "nm7Ra2ZfjHTeCyW958FvLThABLriMBmMSwAaza5h5T3aozPD28E9HwxXhwKjtCN4EYdXv6pnp96S29A2NmGTfre",
  "key20": "5nQy6SpTYSM9wfJHxJ3RWZvFyvWFgubAxfLD3gmBaqXCJwsHDi1T3XvmFGNRzCeKcSfupkTnCPu6Web2XxsyJezf",
  "key21": "3hKFGjMciNs1rkKB2mKxDiWveSQ3hx1x32wwySfNzM9QsPZYgz5WXnLaM698gVPMcaX9oEYZLe5Uvu2Wcgn1H3dZ",
  "key22": "gBxRWKa6VgrwgkpSyyPfbW8SxMsJvqZod7ioBaaPtXnzVuFXdi8BDtwPBjjNFkLtUChQENRdk36yZCnxbzzsynC",
  "key23": "4ZMDr2QnsJr5hRstBvmuWpUGho4ZLuFg1rsz6anns9WjzkGDBEw9poiJQrLbL9nNhC8Mn5k2rCvVN2kpwngfoGsj",
  "key24": "2NSLQi9BXDgBo8qgmTVtUnRLgPG4sVDMN1NbK4cxUbEtQf5CAiVAEKjdc9dMA8FczPTgm37963LkZ4K8gizkeraY",
  "key25": "2byZvj9FXQsVkKhyPpUzvC8m1ChSNDY8WYvvQmWxfQFtae1AVKDgibu3oAvbJXTYPbE3B3wX55PmH7PjApbpKo2u",
  "key26": "UkRpBiQCqQz5tQbPPKs9PzzrGTBXbAbeNFR8agXDcu4MmZvRLmS9SLW57x36GG3nmHG1jDYtXkoeRLKK8zLRCp2",
  "key27": "doiuhA7RzjVsVJyWDysAGRrWM4VB3Mh3yv7D22SdbLNKYUbJjm9Y5Y2SQnFGsd7yjK1ZYiQWZBA3mQBUJM3AZBH",
  "key28": "GVGjiMqq7p6vUF1P8VzXzaupqid2tku16KxrtLBXsj9zykEN9Hu4k99BfX97KrDz5JDjrPjNAkWwH69G2czyj16",
  "key29": "259ZoeC17XwcR1oBmvoxHSg9NMi6rri1S28CPUU1uEvDVhGkzYgVqHzhmndTMf8zwrGMGEstJLzAXHEnMtNwbm4Z",
  "key30": "5fdPmaKDb8vbjpX5mx3f4Ps1Py2yjuuQ1ho331q3GJ6JEWG2aQSbaFbPJHTSbBBqrr2V3VN614uQnfK74AEQPq8w",
  "key31": "4SG2JWMSYXnnfuUbsj4dkkgQnrQiFHXTYsQp1VFetjCMFn4F5wHj2PgXCzGsRda1uuURNYX652VvUrouhTWJjKb1",
  "key32": "57YbaAeRa98NJb19KXPBo8jKccAsbpySp8t5PPPtMZZ6VKqrwQaHc1m1ohkU94V4de4m96HTrwFFiiYRXJGeYuG4",
  "key33": "VxXSvHDfA2yFLzkQrrXrVCcmGVdr42x9NRMhPtvttdhkZXb39iqvLpcERNtoQMz31YLmoUUDQzUVz6QkBCe82Pb",
  "key34": "3zbcBagAXB5ciMo3mP7H7iW4PxAqnRJNmaNdG5S6jAnqWF28pWYRDpw6ppcHdifzqzsCjgZ8CBZxpFHVg6jGV3Dt",
  "key35": "RnsTYubdrEFREzYUggPhcDNhTHDBL88DECUNjz4CWhd1DTpMX5BfBVNo1jfunJfuzZ5LCdF95amD1n8hEcjmbE6",
  "key36": "2FynRkG83o6Svtx2oxqQihPUtcPcQofK2h431sdU6wSRjJPjPVLimZAJJZJAgyaY9cBPbQmqqDjgJQvTk1RAFTZV",
  "key37": "QjYX4zLsPF56wSL3P245vdhx6ShN8p1tTZb2JoDVJXvofT52MedQsaggqUHkUB5SvySjb9M856HrJdcB8JibqGK",
  "key38": "H9c6KjNxjRSkKdMEoXR9WeCJzNs5mbQswKzdYSeSggzvSi7SJt5ofGNVCKv7JrJaDa13YZwWtzxkQkAWn7bE65m",
  "key39": "3f6sD99YBESeaMPPSYUgzUSVN9aUQanrEdxT1BGC4NyAEH22GE8CCuGqTvqk7PXGy9kiHgKN3XEvM1WqTnnrD1Di",
  "key40": "3NGZHdyVDQLH9dVU2D3h8vpUm2aFBEveQVsGN42aNtSUUNJqY2e3R8vuRKXoopdTGKq7eWjjL2qgZLEEhtCB755P",
  "key41": "LpqmRvM2hWSdK8JaDegFo7GKBukP9WhTe8NXWBskAfb1ykVGyRT3xwAyR8q5XjHkTHvDcXYuWuyoEKeahoHcenJ",
  "key42": "2M9fARvECT4yhXx6BASC6LZ3MdSwpvrUhK88BajVidRbuMgZGTqqVoEjyaagX2KJwCstruon6BmjDcR6NXZh4egM",
  "key43": "4KEh5btSegH9YtVTyPf7oJP6EXw9ughS3JEYuLTiArxa4zr5HAXdhZDsjUFLJABKMnR218xw5VhG72QdMQyXD75D",
  "key44": "24TsWmPBCgob8gwL187LT66zY7oogfsRGW1w6XAyAcfKaebK2ecR2CfdQAusgEEw1mUF2YoyJAhFtiYneErLxka6",
  "key45": "5XmTFS1iS3GfDXyUPqMNTonte7qDwx5SqwcqmokcHDJEfN8jA8EPAP5vgDwtkDb3ogQ6fExqw4RFkrt3U9qHm4GT",
  "key46": "3vDkqZNH8LCazuVhaJzBmCaYEsgfTDfXJ32Qq7YhdUkrnKriSpLkR61FY1pS8H2GJWgRu1xGHd1xiWAbfd27T9En",
  "key47": "3C1xV24HoT2kHf5MXyahKg9dpuDQ6CZdqTXaYCh4YpBH3yGxHtt86QQMWGyiyegVSPUZkdckWAo26T9oihnkWYsB",
  "key48": "4GG4rYuotcfuSiu9p7ryabT1YJckZfRpR1hsyRjJrvyqFyAXJGTLhhsd8uYhUH87TgJXp3tYihrCiiwpXpLRqyYi"
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
