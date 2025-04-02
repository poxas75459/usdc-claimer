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
    "2849WZoCURzZcb761uiYcZFTFNnvrjcmmNvpbBugAUWazWUb4XZ2V1UJvHPvDk9PyJMiDLGUFfTtLFK4HtY7xytF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mURByAHTHgQt1yv2Rku12CHQDLFxWPWmVQHBn4pjjdwnfWuvXSQm2ASK5XJG8MDKHQY7ArDpD1usX3GaDQBr6Pa",
  "key1": "4zuRig2yH7SBJ8oJCfZtLCsyeoSxdnfQG92FGPp2acYMVcRerSTQ5fXa2fhR6yhPR3VMrE537E6fbnwGSEFQX5sn",
  "key2": "28RgmdmWG25X8NXuJFZNfbguEqSeuaFXq9MXhosqk4WLjJKbsziycGxT6ibW2asjkryAVPW3SLk34KYiu7YbpLS5",
  "key3": "3YJpwqfHVsDBU9Gm3FWCHFWN2YZghQBiRiaiNuWDm7Hyn4mS627ke44MP5iPTgYuiUGmJk5CchDSyQg68EaGT21y",
  "key4": "4RZY7aq6G2oCCkeLHu3DryiQFsrfTmDtXZJWkzLqtQ5TRtUkHWqYr7A9b1EE7D7XcHRSENSujtto5rbDe84RLXZ8",
  "key5": "265Y7qBpvvkhiggC8hp4v6Y9EmFBHxGHTeEwwaDEDvaYN4H3vwPiJrtSoBkuFe2Yxp1XfV17AVZZAsccTftwaoaN",
  "key6": "4EaFBDd6kSeBrQ6HxBEjpyuAJjnohGqkY8XL9rduwJ4cZUG8RZMcuqnuGZwkMb15do6xnjUrwe6mudDZww22rpBm",
  "key7": "279Z7ahB2nEnqFNF5DCXuD5VeR3mvh5Li9ibfj1SXNo5LxnfszgNiyygTE9boV73wLrfLEGtcHYytnjg766QwytB",
  "key8": "669YFsfc6za3SdGx5qfNyKMkAA5w1x95NBAueaygbw1z4taukUdvY7nh4DwvUKHPhXPD7tpDpbRU1tFbPV65XsEy",
  "key9": "HwrdW3MjuTzck2TAcAMxJDmX8xRQVnBY62Wr5hPX6ZH7cHFcjUJ5LrTZfTjk62X6mE9ZBftNdAKeLjzPJ2ZqFAR",
  "key10": "3eTbWuaNWCDPxAmn9bJifpRhUhaEP6EmRKdBYNGD2wvC3EAq81LQnS8ct3iXctGVRp2PxCL1cp35vJqxeQU1oN8Y",
  "key11": "3uLo8iWF8oQXeFtK8H6zfCmK4nww4r8KV2VABT2PSsVUpb4HsW34gyYHZbjcsWjxD4qZpFkgFgacP5PZDBPaSj9L",
  "key12": "3u5zyYKedoHmLcGESv1P6CfYNQLDkCiDVzSr6Ng6pjDtNiFuEgyf5W9kJSxjMN2thgEHV2P4qFC2asQTEMo2jUwk",
  "key13": "3fJZZ1NS5Sa4W8WNjRRoBQuq66Dpx94VoKSfFAHXy69QQzB3c6AEbHoE8bE7ZrYzvexeMZVJuJWnf377BaqzzyBA",
  "key14": "3GKotkC2aHViiFs9kEZ9Am5UdDs6pYn6bx8rf43jkGWbtmcmNXSFkbhZBVi1Rmc5i8EzEHVHuzFArxzYJXCBQ39i",
  "key15": "37hc7oBtb68ruu9p7ZknsNavJHBGWJ51hKGKr1omyXX4V7tiAynYYJRwePHenjFDm13yDqsq6zLVFb1dH1yHo13V",
  "key16": "5QwNe8LkAQR2ffBdaiU6eTa6AvRVGq5T6375w4AHo5ENTupMHJraouTnJCDna2BPWhSpCW1UxSj9uveKvS9Dmuhi",
  "key17": "5C5ELtWw16GaJFiFUjauFPAyXw7ry2uKqSv6UUWKqakRGCfoH7pqo3Rv6mEZeQTFhizrTEAMnWEZtfTixEBoYjK5",
  "key18": "3fK7GBGYGW1W56NzGJAaydV3dwUgESxBiNBK7iZcktx8LfTbJYP3GffJrx2qqDUVFy2VV8zAJGGaQbvDX6gZVu9U",
  "key19": "Snh9pCi3ZX8cL2a3SXyooFUGGVGESU4wci6g2uM395PzfVP4jBRbqZmKVgYgDa8fbJvKyU5D8davNFj3LDaA8xs",
  "key20": "c3ENiwFuuA9GodbYc8TeRX9cmRNQPH2cTCP5sRiPrRwyDTDHN5UDN5jgWTeQ9Q9Fe73EEbyvuEk27zX9bYqxk3B",
  "key21": "3VxshqKL4QUvaDbNVBp5JSsBnoSeHr4hwfZpfEWBkkPsJmcvxHE2PoSVkispEfKqxGcyViMPgjJ7Jf9aQiWnktrX",
  "key22": "61MsE2XezSx9crKJxscgTkxsDZd8HdK5ye9gB1WMs6eYsBU98HLFiNGKRRtrb3vR2tZEgsgWSQ8xWiV7gJRchCvc",
  "key23": "4LF4QBqd1Qg7CSnboKKr2is3s82TYzioTjmQdEZV8Bn33zhtnZdCBwaKojVphSfogAjYo6rHBxcaHYtyNbb5eskN",
  "key24": "5dsbQegA4yer2ABMzVdD3bhaqJkWsMMBrWLjHQHLzXwsvyhzjvBcayCXChBGHa61NvYFnzKN3bsof4e9hRftagkA",
  "key25": "5YZL35LBSmjkbtN3bVmNXLATdps6g35uwA1kkas7VPRePCPn3ka2h697j9qCDM1RvwQn7HWF8Dm9BcpvBCYtzCGH",
  "key26": "51qVrLRHM9PHumPNgvtPA8yiwaW8KXZb9mTqRqQKGjPCui5i2uwCATJTrp1LYEJr6eDZwQwCVbZygQSRX2GucrKq",
  "key27": "41KiBLcGKpmBuZGpogBk8541F33bkjh4kJJXR99q1xeYPkyxyp9XcYWDdqVHu1fUQi6wT5SUymC9FggdWpuF9AnY",
  "key28": "3DW29yHXg2fY5T5SjHmqTkab5xKbYHWdvXbJe1ufL7QTB3DESZBW8iNtzcThWFJRuP8sHBm2WLbPdn7i5PzyXtfV",
  "key29": "2WKUnMaTyWyNWJUHfrS2yP1WvJbXWFURFmAcTcDnFa26EViFUirBRYfBmkkyBZJ8W2fweBHmiB1G4UzFCpC9FpCz",
  "key30": "3z4hAo678uh2EsW63JCnF4uVJ4YiaE2r7PhjiezqVC3CH2YvcjJKBymAG2zLGsXkUem7ES1Y6ahzY46T3EaFLPFY",
  "key31": "47uu4awXnc8mkFnpeBXsS34EXHaspTW1GoDshEBrFGSdwaaC8y3q6ie5zxrrroeYT6inTuEZYKPvgsK8dnurnWWw",
  "key32": "2MJAtH7FcTRPhC6bZMFT52rywRpDthoXsUrJ7c77zjnJgbAB7cau4CTUxMY4ngypCLxwL9yPYV4YJxmEjfw3qNCp",
  "key33": "3Ahzop4TqnKjUBm2hVtZkWPtbytQRxpJ2Y2QRNm19va1nHBy3PHkBARXnY9uA8SJGse9WdjnGsxaYjNFwG2PjVaP",
  "key34": "3ELu5S5z1RJefbMNKVtrWcYreBLEkWthbbzRuGyF2hCrEhyfccQaaaBSBcHak5wGEdzP7GSe6cgzWNHvs6wm98t1",
  "key35": "2fzVnzGb8SDfbwfYrtgvdnb6R9dM4aiimnXraSko55WbkSWAq3UMoXGSDezBJWVqyvUBVhV2pTvPJuhJcuPbR5fg",
  "key36": "5j3u1SWb4nyzjjWXkXNRPxZNw3ibioXAhp2coNuvDCzdsP6NydZkgxDwXqLsuauEXUWJPXvHenC5aJ2ir4DTsCn7",
  "key37": "25KsL8GPxGrGfW1VYNd71CYtWVSn3AzQYgm1VPMnuonwsijWQWnkViNqvmSyF257TF2kTkrkHjpN26rTMth5YKoJ",
  "key38": "4Xk5nuwjg4ChB55v2csT5jcTH4sbrymxNZ1Rr6cCX5VCMhmNemQKpzCePYNUL7QLiDqtYK5SV2wpkDpuygWJaYGi",
  "key39": "25BHNqcyJCa9nN5ReQ6e8of3kNvSYMXQqNP2NJshER6L5BZxQsXfnZeeMfivzjvXZrHrKHxna88g4iDVDhWgXax2",
  "key40": "5vgN1UfHFgNuqtY4wnKuyzFymEw71iWsidVXXiNpRSxZJ6tB72kXzch2s9iv8KfkWwKtHbrodyffJqwDvkErSnV9"
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
