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
    "4afF4czrwUu5UANXsU8P9M7LQs6NTJag8BJmpTad3d7fsPECbS8oRrpQqTjU7PQyWmP6bRrmLuwo82nsvy2qGnSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCabq2ycfCdyoGxcZ8UFggd6dBGJo8QpabDaqJcjoHJs9Z5sLspMKx6Jcc65XSZRxSP28auy568S3RgZNQuqgag",
  "key1": "4crAmZr3MxKsUdembMTUc3cZZDpMiqVAjD3pgdMWuZudzQabPTmMMtk4vF8WfqtVDQJE4Jn8a2Ls6euBHFjXaKm2",
  "key2": "22oviZhytXdHzradCn3QYZTw2Y2U5YVCBjU1vpHfW8USBVFFUDygfpiJVuqH4144bCX9rYXvkugs2WLf4gySNaCM",
  "key3": "4Qe3oDqRV7PjLC32TJA7RBXaNBu62wjhUtAxU1az5Lw1rxMYijPzTSsRMjbHgFr22jahLsDYPH4jeF1sSK8KV3qp",
  "key4": "rPuZfqDAwghzWs5aAPu6KzURqUHVnbLTMet7WQcJFCKGjTwzV7RvcUWVgbFq2bYQNo9tpRkGrciaXhip818Ru3A",
  "key5": "2Vm3amAr7p8cQusHrFaVnh7vAhwDkQ8hdVC8G64eCsUM3jYa1KvdM1fWBHe9qfF7bpAhErKFDBw4W9ZXXqS6DrQ5",
  "key6": "5QUQ7TrV2NRMtG5pDMSVF9b4vYrwA5szPQjdgUCDJixPnXFCxJMpdHNq1KpseA23JqUtVE1ZXr2EUwGTkRapbzkd",
  "key7": "24DKkgzfCBzcEB6qcXsL9qddAMjxWiM5fq95hw9dNWmgtcs5GZQpWG3WGe7J8sjvk7cm6Y8SBkKy58cfDfWzxusE",
  "key8": "ukyzp8EdRnWV1T73pDTfQZuezZL5wdaDPWZEwm6fuUaQrc8dZMLcprMJi99PL2P9KWiCao8WTroWPKqrfhKXbX4",
  "key9": "2zPE1XQ3owP4tMYFoevTrsNmmQwegRpZF5nVhu3udCvpncR6QGNgcZW7Kgon6u9txAPFZF5EhKVY8rK8GPhfhm6u",
  "key10": "5QoJq4YQnVCiWytToWiTcSe6yYLHx2rhqp6vYdDPmSZzfVbuU88LHmsfs3wwS1oadEoyRmDebq8i1d4AFasQPdT2",
  "key11": "5NMupbiTsNHtJPyhHypqmSkjB43uM5B9mHFamxX7Gv7Xu9AU7EoEmq1FW84LBZXP5Ggu2W4pp4g8yLkVmPHXME4L",
  "key12": "582CG2fsTUuWxXYDrVjVdvSFNrx9DvstN7ZWCQLw9zA2H44EHU6z6k2GbwReeDQ9aWheEMRgaGWSpjG9g1yFLcS8",
  "key13": "5xTJVFc7F9yWaXbW2cET1YTc9W445YUTkrgp7H7c6z59NGBhJSSYgf4o9pMWk4wxEo5m2C2WifQnpNHUgc17Lbn8",
  "key14": "nKwysLB1W39Eww9CNzUBbca1gt7oJWPm5a11pctEzjdqsLmD1d5yz1nruSQqCaCgAQpfzRBVzBqicoYPLDJ8Y1B",
  "key15": "5svkKWiAkCoRTZ58GmTVtiueAxbdB2UxSu7c6iHEnjy8uYXfutKEVAK8KMDYTkTsL1Z3Gp7YG7GjsGVcBWJFgRwe",
  "key16": "5ZAMbQoV3QfvXXbGmBp5tQbhCCTpGjFc2HPjyYpsSsVzr9CkP3cai98ZHzFLbe9rTWotghAt2k9qEcvGbNaskmdV",
  "key17": "5fUnSf38P1FFoVf3D3RckTqsJNyT8Qc2TT1VJftzY8P2A7kXNQyAULVfsCwYbNcLfhoHoUYL59rhZoaNRXAaY8Ub",
  "key18": "3DRPS9ykRaYoSbVdhrp4AWqiTNfm6LtYvA3kgkbQgej5zjnh2B1sme1NheiZ1Mnjj9bBBLMaSghTRMHhoZas1dpW",
  "key19": "52rBc1BDpYb32rPeWskAHi8a5XMfMmDi7to3yJSfxUEACp2FiSxS8GwnBgv2MkRY7k736fEr319DmyxHRv2T34uF",
  "key20": "wh6kJjZB9yfJ4XXmkTLQM6fPu6mRsi99dqvzuG4UF8UKHvPuBq5Fn6qGW49tu3UAxoEGFJLFmSBMqhaKS3yRh1S",
  "key21": "5UhVQDv3c1m65XGpQfqPb8yufpYdPofPyGRkUHfmxEw9g9KA5NjkmXCuBSx3n98thZohJUPTWsvMruDnnBjMt5Vm",
  "key22": "59pLsGbjditDHficDf85KhvfExNkAAC7Hx4CiSbn57mvcBneAoAmBUvSd8WVbmfAfTwhNg5kjHk1KAhpDa4qnUSw",
  "key23": "3Lr29GQnBSiFi8vRL16SxX3VEXDf2x2Th9UtSh1qNH5QuTaQj7hqGvPpekmKoSdqzLByfsoF53LwjsEKDHUQagii",
  "key24": "3Feqz8kcRcR3yZtEdhvetvsVdTiByRuhAvSYMwhGVzHNS6EPASXNzycVF2r56Up9cuHyvGdmwMQafeQv3ED1jEMf",
  "key25": "3jUY1Tpd5uCAvTq5Ntdrr8v5Ci6kRLgGrZHEa2VqH982GvjVW9n561HRGGf4u13GhMFqKR14tCEDL1UG5pdVsETd",
  "key26": "4aMSUxHKCqHQdghzMc9QNBXEFysBMRuEKBXYdw6fin5cz88B43CmFt4zgEdnn69vsnf7fv935nJaexSMEs8d5thW",
  "key27": "L1zpBf8i3h6Ctrc9W8LUBMrzdaFqTbwp1kzc8S2ucXN9AwDMkFbtPAmFEcoprfU7yNhgQi2FzyL5hsA7ctx4JE4",
  "key28": "fABGyppeYVFzXXon5GEPC3Yypc9ZSGBRr4iTSPWeBNUKbtUxNtPwUckrkqCpJmDkBKC4krMjizatCdnsWykEkEi",
  "key29": "2Wq4qQrRrpG1mTFijnFoSSsKFuKmNmbWkjf8hptbaTt5vezfPegMicAVpNLzmuP2y6x75ziY3iwGViJWQZnpUFKV",
  "key30": "5tRAQCWAFAsCXsz6sWLJtJqMAqVKWbYPk9csMweJwpkhyzmYDKADeSaptJAQhat4kk4uLTtUjvcFkfTcwo6Y6S1D",
  "key31": "4Nja1F8ccwKiAEfa3T85RcAdD64Ha8Gz1vbs2LzWoMzoHB7sm79yus9ubvHPLsDWRTgw335fK13RbWGDRgT8zwtZ",
  "key32": "oFoeHV8ycwcWgDC1XZXon18Lut7QvxTCjxDb79CqwezuUFhbdbGrRssS2fkRB472dW6L8HuwQY3d2NayZPf8KAC",
  "key33": "25SV2Pbo8jzoHg4ayRgE71ySdC7hWnfjfKF8ho7FLfFLyGMdbW26g8CBuDcZj47xrrDp3kfpvH7XBxQrCKJWL6HF",
  "key34": "3hJZcFXrnpsCG8bAh1EkUd7beDChHMRhPM9bR8gyDR9jtnGo4B1xWPFz9d2oDdWNDGudUvqT3HxwGZmnASodFV2k",
  "key35": "4M6K1r1RwVSjAPeof1MqLuV3ffv3DC6ocCC5RWYQ1WQ3zYW8wNRPXjyiK5MuHbEYW2mgf9S2atS2a4VQuqk9ZSSe",
  "key36": "hcfYjSnyKGTLt3LKBQirBfDDBtsCcgjPUzyjFLxUWw5KyYTKmJtNRzfun77hAq5E3nawRUseLhLMGWzpJm7JTdw",
  "key37": "4QcSHAvBHo1adZoX3EHK7iFBRSyPpupZRG2WiTs4jeAE2nwXKmqYjPdgcGVAeszFuWBQ6FLfwr6gTVqmRQU2TMb1",
  "key38": "289pRUNZVumb99X1QyvvUMpTtXVTQLjXemq5HkMyxj2rzUi69zrWYFVDmN6MRDE1RME7Vxf9wZ8U3P8uP52aPdca",
  "key39": "5Y3SYJxQXbxUNPTzfjvmw6M1Xvadw4utEMEhG4VGdqydUkjF2tBxZAf2RdsiR87T7KQi2vuFNF3qDVPR1GNhspbD",
  "key40": "5oD9bkeTVwuLiw2PDPLy6EEZ2mGCLkkKsc4nYjDQcXL8xsWLf9faTweb5ryTCejn3AZfLjqeS44Z9ZEDqWgPEFQ1",
  "key41": "46TriG6fdYDn1jdReHLcstutMtrDJTWtV9StxUcRBkJC4ZPTqR5KJS2ovgKNZW2CSAchFao2cnYJJ1KXuj7fjqhz",
  "key42": "5t3HThADXShKea3UJCz4Vgf32zbseEJsSdbxN37TUxHyv9Q8tYYeo7phK7APCb453scMQMdWzKsB2M82PG7hWikf",
  "key43": "3JPmYKceg4YqnoTLHi9PguW8RCCCQP7DfSQz8TUazhczW3GxgYFjaojWKofn4dHvkKHYDG9wpkaaYGPZT4i2q8ke",
  "key44": "4nvGS2r8D8QJgP2f4ZqByLvS1yejyLzQF6TXs9BF9ZHkceFD5HHXvuX4VmnjptW9b1GeA1SsGfJNs73cYo8ytKpC",
  "key45": "2v6mzmPbjZxgFqPsYAX6r21JuHYFGn7JcNt7asFjL7gNFFieRsKmSMthuJaHoh7hFxCV4KaaHLsp9bRXWN3HCjMA",
  "key46": "3PuwquPqZKLgTpqWirBjpG6wUwZwiqjZJaYdBTep7nsVRc9vXAH6tYvdmu24Amn1T2MLBEAFqZNb1Hrk3RxTGCkF"
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
