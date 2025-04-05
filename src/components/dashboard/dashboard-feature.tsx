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
    "634ScVeT8sw6VV1YiSLVFTAyzkJMwQoxwR3eH5kAEmAMNNKfHrQdybB3qrC1ooxjbdD7JzupTLS2ityeEcFQKd1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bZ9hqt1s1GEE2gD3cXufcjtDuzFxBpBwG9e1q3pDab4X2bLBFxmdQXktwAgK23cok2oD5FBkCnxdRzYPuJrxh",
  "key1": "kNEv3odiaYWgvooZY8dmfj7a9nxtzCSYQxmRe6Hyn8qPU5ndstX7N9fUovszZ4D954rFkuBhwcH2QcQfXNTenFw",
  "key2": "4H8DTshYqBC1TRgnnbFFAwVmdvHUzEF3UfpKYBuDjwa5PHArUMkgYz9KzDcfA1nyrv12ypaeCguiQjcpXhqWvfxS",
  "key3": "LNgim23HJFC7emjwuiiUsD8dehLqcYVQWysSBY5AR6Nzbyi4QsjzzjGFwxPbbdFxKbU4BhUVkYBaNZD9XyXw9d8",
  "key4": "4S29jQEyzhAyXUDpg34p22ZKTHVnn8APkbKqBw61b8jt9bfcVsThq1d7uBSbFKSb43CoN4MK2TZPDdRFmuwuKcXk",
  "key5": "476qKo2dDUj7RXLtakLkViGoyBR51CJeYetMtVg8v33eYikLErWhrfRQKb1rV7nWsHFVmZG1Wz7d9oYg4gxQwdCQ",
  "key6": "4HFoXFUZKsCiExJd9HURvPLskCUM3gNSjSyuoT4Ege9VHs4Ro92WSD7nNBSAQANSW1GVduZ3g4GSKrxtNtd8UGHa",
  "key7": "4YhpmDtkCnL98k1L2oeoqwub8suNb446Zx6pcrpL5jg9Kr3W4NbMpAfA2oYKMunXg2Qmc97HhrfnQVwPx9Qnd3fJ",
  "key8": "5XCK4ghtPHFysJ1dp7bQ5opU1MwMpGCx94nuHNT2H7yWW5AMg8n9qHU6FKAUX2Ybkuw7AJ51GzgX83kRpv27nUrP",
  "key9": "5V8iy7qdfPw1pnRwrcz3jsULCU1EAmaprr2wZcK3YM3FBu54kTdZk991HEtsKj556PSCnAx7WNkuqHvDtvdYFKi4",
  "key10": "3Y5HJNE9KwATmE8CeLbm4Lt7S8tpyU4AciNgsYeEpGYfUmp4qvDAQFb8KkyxPKDtcDAnbXzocfhR1mM37WgTL9gf",
  "key11": "55fj9zqCUUYhu1GbXtibvWekKxgbefYRXjhcNCkKwEfGDf6DM8MqrEXACKEhQEY5E38M5k3A1tg97uvaq7vAyJWV",
  "key12": "5PJK3BMjMpW2XvSJYrFu6L3zdgPeShRKWiU4qAa7joTNn15e32k1xGtNgawey39zUiaLq4hPX3FtdyhFxUYK9eXQ",
  "key13": "2hKvSacqV4kLiXrXFrrNdeQupoAHHEs8Xu7KWZeW23GvKHbM1Dv6Aqqc4KY8z6aXaiY26kbxjuAWFawcKZ8SPNdj",
  "key14": "46Rgr9p32amXtD5TjeFtCvG2UyZdc5iwhvNAhxwafhup4o6nBqxU3iD4EK21oqqCNeffKXcbpJe2X7kN3vNYHGgk",
  "key15": "earDdZbx8XNxzhQsU54vyChcMQEcYDCFmU9iEdapeVVgh4rakDs11ZEWzvSjY7sgTLZhVaR4YA59uFPoBD6qrpP",
  "key16": "2wHNjeTxqJDKcJitcpMp8aJurzFKDTKNjA393YjAVEueu8eRCreFU6fJb3Kz1Wb8ZRcH6fU8J77DojsmgKG1Pvhb",
  "key17": "xyyf1Kavd84YhCYX7AHrrP29M3pYLyaL98N3bgishCy9tW7K2BWHhu74SK43dot23YvDYtqQeWJTo4NLtxQM5BT",
  "key18": "4SSNEDSFDef3JYtCuLfvzHZitbVNzmquBFo3GbfjBXcw9QZiV5Z5XhRoE3BPHY83r4HCMqNSryD1cYqkV2nZgDEv",
  "key19": "4soSffX7EWfNHEqkZQ2tTJm3jL4NiEWLtuL7iPJJ8rp6MWEuXou9GBtGXL2if1qxB23Vv8uSnEmGzNHKbyrinuQk",
  "key20": "ivh1jMfUkCPtsrpHmAHdHJ668TN4HpmSQ3CF9VCrupc6cgByLgkz4da5yzfz5NmFQdy9FsgTqd4KodqkdToyyGt",
  "key21": "4i32VpMHAYkJmqjcwDedpU1HcWhBqoHnYbrKCZ3VHtx8pLRCGcrQ3uRwVAP3ipH5U9vrruNLs9Er9HSiGrnq9CYG",
  "key22": "2TddjtnDjvsdoMWaWZ3iMbJAYPKQ31nT93aDrLZvCcb1HtipzbY8h1hZ5CvsRnzPVunthkuqwRAfBiaac7N9v1er",
  "key23": "5kRzHpVqso6yLJNNHVHd8pZf1fsArAQEKVtNRoSHoM3NyvKGQY8h5hCkM47mRnBYdWAXwyMvcQEJ5xnbfVa3iyRG",
  "key24": "x9uvePS6z7vFzc2KqEUUjMHi8Zn2Y52iWxqs5L3tEYYuVV1TGDiprJA6KX4fmHTh6eqFHDbHKnfaXtm8S1jbBAR",
  "key25": "2nmjJgTPZ2F74cQNDYPjbrGQDPxzYeE44dNnesGXuoyFTvrrY7FvazSuoBgH4Fy7TaH3zFfRRFYUMeyTRrPPSAAy",
  "key26": "2cqpff9dQDtxAbmtmqSPF6GNfBeXEfGMPwfwaBeFPAuKzdiPZL8LKGSnVhRszE4xRuvXUqj4rALzchBMyurc1thw",
  "key27": "3Lvp2G4YurEci882svW699iBxYBCzYdhVAVDNXKBguiWyKhxnyY6e7xRUarLnBzURRTQP7ZkCj4F2m3jB5URKhuo",
  "key28": "4vihqeeEu3rzH47FvvsSUJJRwA6WNMATs8Vv1VxQq4TUqitrp1t6kTh6JAMixgu3KJEecR8FRKBGtecFS2t9DH5J",
  "key29": "2ghhAV6EcYuK8X34d7BzD9m9oFFCkdvzxWjFXb1gzqfNE6DCtxp5m1Suj9b33TL615vV3zU9gKpyWabC2uHzoyav",
  "key30": "2GxAj5AysoocXey3LQZhdoJX74uj3NXF5DrAdzx4NCgYShmwGSSup2tXN174zmsDWdkQHAjHafB51S4XQxrU6qhk",
  "key31": "3wTHdjUjf9W7rrmNPn4pVzhi4Gco8U244LjZyXJCC6W2FpN1g52iBKVYDYDkDb7dBZXC5Aovhk66ppdezBt7ZhCX",
  "key32": "3rCQuJf1j93amzkwUFZ1cnUY79dpfJTinFf1wxLnjTgkhJ5aHwNQG1g3nLBq3MoKiEGHmeyoXT2ZQLemNtMnnech",
  "key33": "FtqGdpGCK3hDVkARG723UptgLvS3m7AXgZRcZLYPNc32TzGk2gXREfGzwKSwkZ6CJTdyg2CFF7EhKhSVJuKD3M7",
  "key34": "5jwdCaW8W83g7sEbK32vDX8HTfFmCpT56v93g5t4WW24LHMCjx2bf4Q7LXnitJ9bJ71tJjY2NtHELqcod7rP91kG",
  "key35": "kpLG2Sasxoc2BxxKT2313FtpU6HAeeZbU1k6PrCvMyuWsEEstup83YtEWxswcViFKC1JNdxjPHphAz8JYVdE6eX",
  "key36": "49bF7LLbxhnXH9xv7tzL8uMKi5FuFeCMMo9acpAwSfTbr1z2ZU6fjzyqnJWiAqYcWmsoBNR6tBdE5Litxy6vaX8L",
  "key37": "3fAu5a5KRJPHY56xetb2GP8yRFWjxdA293cmGFKXvPEBFpN8CbrJ7T8YqJsBSHfngQQq9Jd2XuzhhRENDSdvTJGQ",
  "key38": "2MhRfww1QpX1xZJKnB6jVxfrfPFr7tT39DWsTcC6U4Wj74DwjH1UMususBB2CTi5XMoNB5u7bzRSeJeKqW9DbpMA",
  "key39": "3bdrYNAPQsmKKLkTf9kPEngVrqSaKRGHnSZzmDnLjp8L5b12ZKJPj5sm9ZEznGefoQjhHBPSrUgDRkDT314jf4Ug",
  "key40": "471igeLoP5PW2q3PhcCcuBKgrcXuwP1UZnUWpJVFr7LnaW3VagVmSMnamE5uE1dTvewRAn4KAXJ8AU63BMndWrFp",
  "key41": "2LTVMstjpNhaCwJLxTD4Y8YEherLf2jGCq6ofmZLybAfdnVYcv1opkTQHhGGqBkDf5yXne1zerQKcBnVWJmciuEn",
  "key42": "c7KZcE7ztDjznMmKxtVzm6JZeJvxN5PS9RcEYoidG2gGyeS3jpm6UarNThqKZzGUwCv3hghpfTztwi3KMgwuA4P",
  "key43": "4G1Kv9UnrXRQQrvQNksP1apZG4WF58HPpA6sAtCDoaXkGgdpfWzaCxxH9uLpTcLJqASCD2kdQrR13Hgv6wCKttBj",
  "key44": "2bKpQqKy7vKi969JP3ju92mkUPEPBYSJY8B2oN7bD8wPnqEVsssiYoCiwQv5rPeDmynGte2d78RTdyLaHcBXEkS6",
  "key45": "5HZLEZ9P4jTwEQj25p8eLf6HPmHNNmnExFutPk82t2iZxm37vZ3gcPTYwRxhKVaYwYDNSs28iFYgDCV4cKgVYkx6",
  "key46": "jEzk47VJnxKv3EMVZuKA9JdvqMSjoydqKrY4MofrW9JMsJr5XPdFCi6Dk9eK1raNhWNeBafbRtc4PWMwMB1BBH6",
  "key47": "64iFUK8CakSiFdXbHs2seyCUKkLKVtZUfos1Q7wp9KHivd7mFu3VJJuFTuD3LXQu9gLaU3eJ3mbQg1sRCARRRebp",
  "key48": "513BLBHKqtXS5GKJoVC3gTVfNFwNvUzLh7o2cF55tYB8koYTQeKn9GPJMjVLFNaxRdPYMxENgDcpV9qv8NDbCQY7"
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
