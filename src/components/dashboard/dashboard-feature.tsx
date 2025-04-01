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
    "25555VwFxP4LSU8qEArnajoY5TMrWnFU5ru3xrLTXa1ULRmCsm6Mv33Ewhm6u3FL4KBnYt6CEERhtwVAQjVgaAXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbiA6xBTBdjUstdb3GT6KE9cNDrPiM6uBCCsMF44zzC4nvNoUGKpWqfYVaVh2sqmgybe4sPwZY8xPyA3jVM5Eou",
  "key1": "3Ht1dGS7G8drbwgPGV88J26XmRmh2nVdWq6RZcxHksJLKCktoE3aXS72SjuidhGvGLHZNuN5R8gqqNbofqRxxu7V",
  "key2": "5mHWwR4Yfs45paWC7yRayUoSJYUj8m5eTKiLE9uSozeCjAweKkw3kE6K9Z688imKyC7RHtwifeVhFBnsZyuYK4D9",
  "key3": "5dXf3u27iKcVwPpXFQUEJgavaLTQ6zKYujZvVYYN6VFcDsbNP7uqBXHFmCeirjuWrmNvMj2UsT9N5MQMys7Wy1wH",
  "key4": "hB6mCkaMdkDSKjWfydxVGq66UkEDKyi7r8tKtQoarh52E9jPhE24Bbov39kfuUNk4USASC5BveaAhcssZoc4AG6",
  "key5": "63Dm3HQbEubMR1N6sg5dULznk294CgApT8CB2Nh4a4yFwZVrvGG2qFvmbn9yrvvyNXYXTKaL9ozc5L3ob8ruAncS",
  "key6": "59jtcquL4AppqM55ESQjRxGKwRVb9765qME2YCUmnM5mZezS1pB1M1v1gGC9jEguqxUn4HWAnX8axiicJZbnvdMm",
  "key7": "23E7txdiJ5UxGdKs6WsiFdC1mBMteaSoQ6KJA83L4zWMysJW65hYTzH9ex4HCK7hbczbvGuVo96apyBnbcfHd5v9",
  "key8": "5qMBjbuRD8U3pvpz9ipP48SrgPC6oJUxq1qgN1AuJD8vaGT15Z5cngFqEUwgURCFf7sPhWYUr9YonxPUHthgoYxC",
  "key9": "2mEa6Eyampw5rbfFbqJj6mCaVVzXXpZuPsJX5d8d7eLwWcuHj1pyuSP83epq1KAo5G8aUUhR9HoU4cGavgVAWnEz",
  "key10": "4tZk1x4XqH4m1JZUN3j9v2fECPzMSvcTC1bDkespFAGhwW2xgJ7G2n8DqkPZcWJ1RjP76newXJogNnE1nNHi8kdN",
  "key11": "oce2gzbCxP6QZVve5DqAYJeL4yswBcvjqTwWZ95TxhhwhM2dwjirsrpL6wmGzkYeCDfh6XUvFqcLWfhFoZ9e3Rc",
  "key12": "46KRVuSakHTqqKocE8xoEBssXtnBsFAxYrRcaa8wTST6aA9Bs2LedW7HLfEcSmTiSwBxCaW5bECVZqfV4119kPX1",
  "key13": "2HvY9ecu7AsCtERxCacrBFBGDrPM3J9eog4J6itkrQ4dLcR39ieGwRXs3UVXMzVMYDYN57DnwU436veoP54cpHMZ",
  "key14": "5Ca8uZXBraioVHRikkXUNwLf5xS2ypDx4jp437ZJzMPd514R2LqDZ5QTmvhvv7zhe5H1f941V6EGgaWeEgpUUkde",
  "key15": "28sznzpMySa188tSptDstP9VSUmBXdAmQpzVxSoMoFMYZTNdaiTcku1CDiL7ZBdezfP5aGGCc72xLFDSFYWc75JF",
  "key16": "2Cc2gpTAw3uhZHs3fZcgSMSvbWE33t4jLjpf8pqcMDXrzG8MUk1hV7twzA3sDvgy9QfPpgV7KMkwnzrpw9wmcpMN",
  "key17": "2Smzo1q5JubJT9qmHSY85HRQRZYXcrPsZXZLWyJeBXgQpcBA5MyETw48D6MRCJNzAqqqK4vYEW1Rp5163JVFabiU",
  "key18": "36Fz7Pf8dPJ7wzXK6hWHfa9dJoMqiPh86RcQJUvxfnr3yWnPmmMM8dqaJ6nx9kwpriGG8CjZ5nCiHn8JYsbfWwq1",
  "key19": "96T2hCuAnbU4R6v1Qd53g28zXZWDxBGBGfm5bdZLkmjFY2YYNW9nqoVqBui3g49A46kU99RqRd5Sk9i43QWn5bz",
  "key20": "3tcVonMUJviQxyUatFZs5vLv1WVLETgPSFvj634i5xjfAkNtrc2FFtPV7yAmJRFgr6ypwvHYUM66gyGshehaSC77",
  "key21": "37bASBqPbYavYMHz68KcnP91LhTtqLWZhCqiTBxwusqS7M4obFNiUHo31f18KxRk46NEp3vkYyNdCjKRy5emMZ8t",
  "key22": "2BfEfhfbcf2181URYGjDCtbxq8v2DQAxPkS5NBibDdzWLvUJ57yGtiuV5E9YYyuyG1cjcFiFWFyU5f4PVCxPH5yy",
  "key23": "47bseRtNqmovEoi1ywReQAAbtMLDt5934nNGqby7Lfkcy4q9CumrE8z9mjVKCuXPMCh33WM7ZJKUiAEEiomGEDsE",
  "key24": "2ywUTYpCi1ki8fshpcwJhcF2BjEpeo4FnmvkxQHcPKoWUUicGA96sdSANTLtnzU7ACxfWrDmbUCp328hcELRYtUh",
  "key25": "3tR1LTxArmpUgqLwYxeGxJAXJjhCC42SbQBj5FxreGYeS3qUF7WUWwZ4HfD39GfBKByz9wVqtBLBXUfi624w5BQ3",
  "key26": "5fhBcVci2wisoebu31FnWbvUTooHdPHHLiww4PBoTa1UzD31of966cC74L3YUnrh12adkMAWiNAcG1FcVvHw8X1X",
  "key27": "3yT9XuhyarZfKZcEeDW2UWtMJXahXk2SN67dcCTBAmfaguGudQZpjsPuXaxDi3DhNpk7VynxzQwLaAoj3EevYGn9",
  "key28": "5v1ayGomcAVbKo5ghznuz71vaKFDWaUkdHTDdQHq3CBm3gNZPpBm2pNGMneMsYeAmccLLuvydjHtLSzPeiuLCeF1",
  "key29": "26zGYKuHx94n6JsF5kAESLXpX4EZEysB2TykAjNzuCb53HpVXnaCEnzV9VRUknDHfCP66CXNxqYLgLu5QgQ1QAnt",
  "key30": "5yCEHqFyGJcZGXQEffX5ALaXjnAGbeBhVJUiBo7JCJcSsNQKYBhfrdHK5EB2pqrMiaNX2ksh8LbJ7tkKvXqWj5kK",
  "key31": "4ocBAD2qkkWpwWavCFu4SNXVYVTJG4SRr9WDA3mBDksHRsXeNF74c7fbMgGBXK5E3FTzFo9ztj5sKzUWbZQyePWs",
  "key32": "4oDNd7GvNyx77LrhJvyttt8rudKRsbeH1ivoqU7DkYwS9KyLq4aQoi3dZFq9GVba8erijouPCy2xNgVu4KDSB5Nh",
  "key33": "E6BixbKNmGyvBunikMcb6aTS1vEbJQhVZ3Zonf23ucXEa2hdYAwzFhyjESbQMsxwz782Las18KUKQNT2GnLXcim",
  "key34": "9JyFdkN9xMD8CbLNVRGqDfW1McqdeVvaZuXzdiNJZPcNAJP3KwjsTjGkrm7H9BhWsj3tQ7i1QSg2eC79XxChCCa",
  "key35": "2xEWqeBVihU1iVmofHE7rAqUAEJWiEwAYY7z333RsaB6WohNhTT4RBJS21rZrQLFLYP2JYX7dBtSwM9gggcMQ33a",
  "key36": "3QXaQCvrqUMjAZfuy9uA4AvafMGbgAag8QE9dxRsmWPTkqSXJ5gN1e14hYEkfebjhWtdm3JY8z4WeuokMZzbM8A4",
  "key37": "mtEhdjqWsdjFLf5jFjU58CUNuxYJe9NJevAxh2vb8ebgjsRUpYvF9JjrgqJW7jjKrVUSFTtmHCHDJMvrNaqtC6F",
  "key38": "422qeyv6aMQ3dKypCUhGLKMbJPojsxYarrdLHHNkP4KF47KrFkFX6mc9Dd6FEDaBVb6vfbdHbXydryFNSvzdSdxU",
  "key39": "59QiG5LMcsNDc2CwMSt9KyBTo6xFCbo8Xu8TFqzAfgQM9j7NCMQSv2GWLTbpo4uYfSt3FFWTPDjhEfuLU4WxzrHK",
  "key40": "eH13B979yhDPcHzQ9RuPGiefc2q11jL33x4PE2JhUFMoeXH2BYQzJ2gx44ARA2UestY7Z13krpt815vifAMDYnq",
  "key41": "523VtsdHt5WSVf8sCDxGBsWuQsn8EZ5QKrYpYHmpTy1t8GeYHNKSxL3c8ZRnKpZi6LypVNLqFLfXvcWkZd4hDGYj",
  "key42": "399ozDwT6u22xviD8Z6SKZLSPQWWngSorewbgEabUwmTKNxgXrcTC5CT8VdR7T34rSmHhdmDGGA3VUjtbyf9j7Au",
  "key43": "3M73NfN6cwHEJ6D99h3MCsoAqYeMYM5mKYKbbDTepSyX4EnFWXsuKQrnEJMidxh88tCtgeAfufcYCZTC6ZWnJPmd",
  "key44": "3JHxDyGJJ2ktm6FTcCkmsGkE2LGU8LxRZqzQXe8dKWaE9fLpazi5egCz3AYL9TcxYbdmVyrhUYcBuCsNeGf3sA5J",
  "key45": "o8ZNqZDxkheD7fr7XHKmju9mmcak4XcGU9kVuB4wKxsLaRa2hgQu3337mK2Ty4V3DSAAGMSsgrViggeWHxmD6bJ",
  "key46": "54YvCKCPXfgaVsqQr9BodcAgQUD1aQm4CfKRrBtJzLcrfWzfwFQd2L97c5Y1CTb96Uatb7T8nUmxW2Xkus5PuaW8",
  "key47": "4dRBoR9Bcf9QtP1TiDRhtNjYery2FUzMUtt52VDZGhe7Lto4ns87jLCzAmSEYqiXTm6oeTsRYB9VPLBRZBE1yx3V",
  "key48": "4L991C5Yjkk6pS1KQcGSEefRTgoFNfc6SRn4aVAS5GDMDUQtAkX4trQLPTfhVp1mkWjEaYAGx3UzvNxTe73gbN9X",
  "key49": "5FRocSSo2JYxzteWqxsSg182NYfANFyMDigAEASB1NeFbeBsbvf8s3YnaNRdXYDgHiBHP2jdLQ6DVZM7nZ8wesgm"
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
