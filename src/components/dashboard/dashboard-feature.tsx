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
    "2paYBrSFhZ4Nu63xQQjumM4CWf96mAzpgkCvBJs3fB3cphTnkW1srYLot1nbBVEqMmNx5EnGN4f8YxQSGW3mFDEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BsmYxS6UQqVQUt2PW21FiWAcFC4Cup9kPJmJxS1d2QV3qojevzX3wTxuyp78cUxQsUFMhGCjGysdkuAXDAUMvF8",
  "key1": "2W4r5WrFW3nMAhgKiiZYq33hSQD1cG9jbCMrJKTxNs57NVmrNqTDGAnfQwHb3BfwNWmQmhbpEF4bY8rzx1zuwTx4",
  "key2": "5niqW244xn64KW9HYbhR4Vp5fgQ1NZ1QC1Egzz11SBCP5LLyDWFhXYutZhrsiZWDK58a4C9hjcU1YZP2r8hSSrWP",
  "key3": "3UvYzz2pfhtqKYvVjVSYTT7QbxpWV3Mfytp6rm1GPU24erPyWbivnisNXK5X2h1QrxTFG6j43HoXK7K4MWALhjTF",
  "key4": "5FPw6AyZLBRceRhZncBjvZ9wi41cazZfpKvkuTFVeoUXoAFbi4SWvW1xXtqhDE9t7vsN5H2TRWXTWGGVjAqj9UMq",
  "key5": "3ypNvXJYtcXNcWccWa2XmruENLixVXjsJeJrou5M8j455NGgCW2QmJyx5Ee3CXQC9sFWq2QMMV43eJNsqTVXEpb",
  "key6": "3ujM3c6KaZK4R5HwowLbrsxN7VGs68s5TAJzixpGnDGsMsbD4adKn3h2Rv3XGfxEwfgprFJJC46V3WsZnFMfWukR",
  "key7": "49MWqQR9zUW1AuzH8LGmkw1gwZedwfwBp7P2rge2iSTa9NF9ZL63W4Ty4vzuBx9ECLixCDRDSWN2a9bq3KTkMfuS",
  "key8": "7unVHbv4Bt4e4TTGg74CMNKaWZRFE9AqiErwj9ABPS2YzotwC5q7Vd8UxMcG4rgAi6TAGJRnB9UWE8YvSw8DpqR",
  "key9": "4H9zijNApT9Ehw2LG9AS9JNb8MvX3SdgqBdKRGKBdieNC154hhQpSqtNEadQnXicwU4SDTDXEExaDwmp1hWdxwH",
  "key10": "3mS3cmyb87DPjBBUFATLF2hoFYoZSWUT8J2PbCwkdwX1hzC8ZTGbYexNSvtybp9EXW8B7xrgHS6fi64rYpumJFxN",
  "key11": "3X52Mkk1FGPqHDxsXUR73tEwptDbBEM1s2Vk42xEde83Zg9Hk5m7dXdzvpie8AP5tJY3UJKYXkZZA5BvJghEN6uu",
  "key12": "2p3HeRVd3hWtPbY8ZKkpn4v27MpkboQyBhPG94n8XiYoUmppvA5tTsEPX4twyBRrEWEku43P8QEs5ExoRK2wDPfX",
  "key13": "5DsvNAHh5NDck5dZnKjd8EzqaXtSSAAMtbq1dYL7QvVCXvKqH9bsyZmBYhi1e8haXhEVXVCkpoDvrn1WD6CxCNzY",
  "key14": "35K7ZRPhVi9ZWHgu5zUNT2eoMG4BE77zxm2xRAEJYadXNmFvQ5uzQAPrt9tTGUskagPj15KeixAE8no3oV2SuLVc",
  "key15": "QniBHr1TGH4T4NpxpCsfgprzR2LFU3Q4fBGuQZ3JWSzMm7bp8ZCUGP9hUJmKyfJ8kf3Cuz3VmX3w7atoy18xNN9",
  "key16": "2Y8GZ6yNT1dUDHEen1w63puUoyGTpQGR8BFScqGwpBSxQLaaHxURN54b6ivmMcAb24SXb83H4ZWaiKpvU9ix39t3",
  "key17": "EpMpKqDYyZ4kixYEfexztLpwpdTjsGzasrkvmii8tA87vifXb1Dy2Q6MjByD1hgA6a9Y5uZMG1PJwSJj5JsBtZS",
  "key18": "4pmxvBh46hy1wrucBegdX3dh5eapfqE8FW6cPTT4sba6zs6aCYUw41pAut7nxELAZ27EKrtj9AUSSGC5uhwgD3v5",
  "key19": "RCDRow3FRmMrN9Qo6t9esf7SnAibR1SUQ866RkBzAzskUFNZMGAEMqxXNPxpzaQKRybKMgfBvoRVRUi3gHx3CfC",
  "key20": "4mms6Uij9Dv9pKWFytNX8fjcsBEZ5CTE1Aw3JLu2SN134MEa3RtSRg99SCs5e6KXKVgzGC1sGeLrgbRFt48m3paV",
  "key21": "4JrYKx74bPL4EgXp4TQSedAGc9tfwyYZR2YSpiAvdMatcCaGGVFcjEQDcoQZPapBG65zDvqjK8vEDHvMa6qEVXTx",
  "key22": "s3Kt2ZiXMBfNuFdwaViSscHof1pFxf27p6LGj27cnnNeLhuNL5b5CZ6n7kDHTpiZrLoXL7jWeBkkUbtrstZ9Yyt",
  "key23": "3thxL25GwRvFbzR6Lsj6UMi38rqzAEcVQH97Fkh66phjb1Nq1xChwMTtaPbaz38ZPvcgo6trJDMA5e9ZJKondUqz",
  "key24": "4VQ5QvgdzScnc1GsihXnvoqnK5zh2jDmkSTM5pDzYwiNZcoGfnHHpK3fLjpwqN7XFxMixeTWMWNE5PXVeXyyJMNE",
  "key25": "2CQCpwWt9NGQYnmWfKosvz1QoKXUa2MWHVazPvcBUdLWwBDFLSHEejzDz6BNGNrys67V36NnT5oLwB7hSeZaH7Bp",
  "key26": "4UEpgYfCAcyPeBUDipS8hk5NsE42nQpBG8ZzoSK3keJ9voT5wJdyfv8LrXaJTUdJCRAu68j7pHDjoo6CUSGaVTV",
  "key27": "2mp48ed1ktTzxQRFkPBQK2rWWJZLLNYCwfpsjQvd25uwSA2QdC3uWm26MkTNeW3MbM732gqXg1bo84NEweQ9BrYn",
  "key28": "5iRAshgcNJb1Tny75yV92zhvxaVpRbut2iU6ECFyT5sWLewZm2mvVc6Dom8swiTrRm81TicT45Upn1BPVsPNR3YS",
  "key29": "2Rq55HuKFKBoTYsu2jjmkJgy93bvkvdkboZMa9vgmkKzuoMQcbRkXcq26ZPA4ioHwKqjfoTE3qsbK3zRPsieysmV",
  "key30": "5v7KPMSZmBe8s4pjd5EgiKuj7HHfoSNFfiXi5RH4Qzv1L8uxHK3M1wHT6h9Fw7wDZd97pxb5Z2jLr3V7shucdqxU",
  "key31": "3SS5YroVn2hJ1gf7EM6TwEbRfdgSf36gSDjqQGWynAd16HE9msS1m8snNxbERSQ685ah7My6t3Ym5W2xYbKh6imX",
  "key32": "2GmM1L7sctXQtGBkfLVDrDZ7KgBBWjxwudd6NYEdxcnPwQrEwo1U3RyS9XDTmEaocMdRpGmLvp1VEULzPkDjYfMW",
  "key33": "3sRURrcpBjpRoQ6WXabLDyjzg8sEwVUrKH3ScQHqbJJYbdbTaJ6JAStqgpCCjoZxEjWe8P9vtjSUowa9Dk5ySY2n",
  "key34": "2BkLeWqhK98R4yd7gRYZBCrFRg7x58M2cLn1snor2L3T2rF1m7HyLRHdWMbwmguYFgh6BFfEw4VK6ncFUf2791YS",
  "key35": "bZ6SSugueCCFHpBMsWMToXeNm6mLVt29Rzu3U3YM4vj3BP1E4ziCTMw5Vv9WJExA38mjhJZaw3WjqB8cfDqsg8y",
  "key36": "xcdxpUuargtEULe2atUtyFzR2zvLotkoZ3HrC4oDseGDZNWW8ap7Juap1CWGwJXTUHjrMLUZ3CXptVbBZ6c2rVR",
  "key37": "2YbQzK28Z4D5V7eZuYuR38UzhCuKZgsrrCoFsRdJgZfZXaCxgKBWkGN8erZJsEiVo3yiR2vYdsok1ftjC539ZPPe",
  "key38": "29py6ihrfLtvSCwgqj6YEtxY9jMa4h2XMx9hLwi69nGUQcmoAq6qi3U8iieZFZCvzcZnKiGveD4pYnn4DdeYDyoV",
  "key39": "25EpZDppLk9e7zCP5VuZe1K3Ns1rPMv2eCUc6CdCbNAvZjGgrUvCs1GSAt2Pi2kYombEBLYvhijoWDoUf8uB7MbG",
  "key40": "5fYH8wxJQz3Dmx9oAoJRKgrLADk22MF54coy9qUVtr3UD7Rtqqym3WK4x4NECeDyy4EkEsoEAhtPGoeNgduVxQbD",
  "key41": "5ESxvi33oLxSP9qEN4QX5KErBGn55Jzd9zrWsWfMWgP8NpWLFgpbPmHDQFVevhGWvChH2DGaiKBoChgf6R9HhRV3",
  "key42": "2hFqfsZeajFgtLzJ8Rc4XqvszbYD8UnNmCH9BDcYwKJfQpxegia8bcbwFGqUvgJ5NLG2th2pNd9BrwgaGJ76BDvC",
  "key43": "3URckBmnpYJNuAxKvM8NFp4mozQJuKYGR1jLTCLGy5kSsFMtovWa9WzB7VZpvkxkHufof8529CGjcbKkAnj4UoT6",
  "key44": "52pEzEkuvTrNDU7U2FDS5jCDEXEtuDiyBawwM1goaYNXqQpLhqKC1riKTzGP8c4Xrn1BJAFdtmhs33mtTYZPXodW",
  "key45": "4Cj5awrWNSiAS62KvD63fBymdBja16gRCPrKiPdGrB1ttKT1HpPpg1o1KFkErhtcQqY6YRShXr3ZNEYRwKfQ1Z9P"
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
