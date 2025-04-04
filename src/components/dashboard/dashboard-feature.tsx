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
    "4SP7DroYhJks3yVSsHH3rLyfb4iiD3EUeqXWv58VPLJa2hrH7zudEdg75C7x6SRpQXHnwtisVZE4gbQYqhdcu9p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GXPMqLedHD2ML6qJ6vdFZSa2Hnmnz8EwCKtezaz52j4Gx3tvsf8DD3UEEQozWEgHnza6be9EEz2jVg8EbaJCvm",
  "key1": "2Ppfifw4Ni2HBQqkAe835fu1riEJUjnRj9MYXSiNUXiC83nvJwnepEwc7dUHKzTFHqktfNgMvNMqH2UM6AtWHFaC",
  "key2": "41EEvpMkdb85V44y1agtbDsFpHBB2LvTp9nHexwWWEm4ybc4JTi1Y3SNJ7TX2ADPDCGZpRvoWcVuto1kZFj5jzQv",
  "key3": "Sp3Jkadq58URTF3LfLtzNHbMZtLEFtACsMXntXe1EMqDh9RFniMUwtNnipYEyWcn7D9f5BbCUak7M7rPAdPd2MK",
  "key4": "4P4PE6SXXEDvoi2sSm7u9gXWADgAJHBKrosUDyJFF7s5KYBTcyraSFckPmqyAFXYs2yP9MGZsCYeby92wwU4bWYE",
  "key5": "3ssGAfUkQ8G1J9rZbjDbhMgaocrXW6Ph24jaic9o98rDguuQ3mS188srQVyKaX7qpBHHMK6hK6GzyAL4Quzk8P4Z",
  "key6": "49MbUU5hynRikS1fNuRVvcSHjoT44NKmvbS9MWypGYzaYGb7XTqQcbt4Q1dHC1ZeukkJgMkFPFcQRh8ehg6vQG9B",
  "key7": "4bhK7zRr1Mopv7hto8YEqfC1wrUbJrV6RLVQT4aNgWESSx5ybBnA2HaFocjDScqZXGA58wTv4SNxadQo2pEm1yvB",
  "key8": "7MEefDiR81pyRQMU66NzgeUByuLewbbTfLMrSoEU5uCyWqJCd3LbES4JW1RGdiURmzgTwN37U41tamiGPGqgyPD",
  "key9": "3aw6gJAcbUi8zQznhR1riGAo8eiKqF1UrEDZQTAtuo7d7SuJHL5Aun4cSevU7r4hcpYG1JYR3oSsWZ4fAoXdVTsr",
  "key10": "36pSbrCJTxcFsBUnax5WeU3GF1yaHBG3PhD46YLfK2jZS62q2ps5xWeBtqgLL9s2E9rvyBQf2RQR3eNHqUmLQ8fi",
  "key11": "2ZPhkFz1pBxLWkejRkMh9hv2jSnGLtkMt59bxE4zW5nH1yA6CpdzwyUeU3ENuJRVbHTAY8jTmBu8AVw4xBxUynE1",
  "key12": "4iXZCPKUB5JvZ7cCLeyZVBpesyuYpfzpF48wV2EggifpKdV6m2grsdCpVDdGHXCEPCiWabzZ6WkDvSusZ9Bz6V66",
  "key13": "yomwGmHG4D6NWvbbBvxnr9XfMk9XzFEtt1PqFXgoRaagDhTUNoNs9LsMNnnKm4YaxM3DS5ZLQkreNJofh2xmJZC",
  "key14": "3DCiFMHj9tXGTfGhHaVdDRpD4zrkpuYBJ8kYqiQbcCneiXBLCeK1EYtTh5zYQhxsWq59JDmrMMUiYyqSDebwuBPB",
  "key15": "2AZwQ3VNJvLiNQTQLtuhU5E2GrMknWLQjoSvtARxK6sn7yvLzabZ43Sm7Nc62ETdt3GC7XRjpezK3WFTeF7eiuP1",
  "key16": "3zuALaevdSG746uRcJ4zHwXbhd7V5hEc5nKYdPtFC6wNy84vWHAjwHPpufg2BR5THMZ4L4HJS1nv35Ws7EZmQCBR",
  "key17": "1KNZwCfoqFbmDPkw3sVMdXq2gfR8pHXD4RVHJRGqzkxXWepwKSi89hMTkQ5vhqjmaMVDVnjvei288ffVaN7jDCC",
  "key18": "5uHQsSASxQ2Jaui2iyDHhLhnD1iwbttbfCFPGitjNgM7xBT4auMUaaD9yd4WmoT4bng6DQhrhkkz8sLPoxoWLdeN",
  "key19": "2kcE9MdngW9F5PCvi8LCK4SdaxX71W2DXR2spi3q1Qcxjku5mwmH1rRDoCJWWBewEY65tTyjzEX68aWM9B2d2fbY",
  "key20": "444kqb13UQ5hfcrUfbe9W8px6xtUGwZ6Cx9qrQg3RZTEQr8oBM6Y9HsriRutPcfPRX6ae8ZiY3REzUR4rqYzaTp1",
  "key21": "2eYSYpquukzEzBney3iY7bGREbkhivoKASjbCNgbcDH6RNGWz463KFVDpGp9KoKSFBw86sAEofmyTPJnn5ZoJa26",
  "key22": "5wcWeXZRA259gN3jn1GfofQvJKvJdzbxZrzw8sHDW53o5iZ9QmdpYuM7EfhHYVuthgsEoghvGHUU8zhaKtgVmiyT",
  "key23": "4Efef21mpuqtwTXA2VPRc189TAkMr3HzaXg7HDtbGnHMNHQZGSUWfb5p8bGChJGfgQeD64GzmEYr3CVq93v2Gbgu",
  "key24": "M6JrExr1wYLHqSejsgaSGYDEfasuDh74GXjq1RS3nNoVW5rC2a8oYd5CUYTsqF2ikbKj3xDkFcZp4AvxCZi1uMw",
  "key25": "3ypX35v3o4ATUGTdSD5jJYakcGzbvNQeZUtvdHupHEjjSXdshyDMLTtErynPwuJokJCLqjtzBoe4bserUr3Ce1cW",
  "key26": "MXGNwG5Acqsrq34RjKWZu5n7vC39KcBRsYqTFWrCRRQUSgZ84CvT9BXp75kVWLjkRQVB2ztdjo2URLQD7Q5cmRn",
  "key27": "3ouL5Hfjrq6dFhzeYZRuVWY76wYvF6UipSzmw1fwMRFMH52ZjG5aiGpEJPWJsxirpotEMsiJF8jningqC1qXALhK",
  "key28": "4fzUGAuWsQFqi7v6JHYrfqvQKSh8fPtenT8SyJACN3hYv6cw5L6q2MwCD5MECFU3BgvpKYWnhpwwQTSNUuXau7dC",
  "key29": "5trWpbagMBSBL7FtPRXFFtTcmXTkTrtk6SSP8uJfidFMUD5GCtKaSH6FQVgA2EGYv8JrJL73YoC5PKSLYj24az6H",
  "key30": "3iB6uEkmt5aFB8KGmsxuL1yotWTw4bdRk5ysryk9FSYtcRvWzPMQNGMH2vtcmFfUTmmVMUymymeyibNbAcqjp1U3",
  "key31": "3emh3F3zyazJBVXanAeLoeMTPmRLo4pAv9bbGCm4YT6SbUPNUyTMyLUeQKmMaspuZJC16EnRVM3y9gbWn1SUiFup",
  "key32": "5QQsjE5NZgH7Y18u1opELqFLoTbV4y3gEnfWzuJA4jFtjb78EcYnSu8T6zVqeyrnCjt9kbTo7W9QzPJ5XeQiKxa",
  "key33": "3ApYXxPqWKaD6hE1CeMRoxcByKw93i3oaXBWUHefmVoSrMdg4jz9nJuFBmtJHivkPhSmoHernzH2U5xUyRvUCvye",
  "key34": "2oBSnhYh1xahoLTfouwq2AXHhwuxi8gDuNdfTrR4ZCGymCegrrAZTyPUrz8Cb4Gwhobmmw1Uc8hstWEZDLEqrqaF",
  "key35": "3zPqYBYsoXUwyDdfubtm51HfKphxaD53c8TpYBVtYmmPkfgDhDYdGGo2BJBVppGLxoUab4Zu7K28dAXZZq7mBxCF",
  "key36": "2j1mDpSEJNwtH7TFNxtZBZ7KSD5h7J1RPYcHofLsztGbp78FGkdynARb6X4bTRKt8Nu2oPRgmtv9rcKX7UBnfimb",
  "key37": "5qY3dpjtSeJYmurakQ8d2LCoRdtBxeVZuqNJmMqGLgvaZVG5E7Lge1f3zQwDEZBkaG6nYQVJ4176xJLrESocTzAQ",
  "key38": "538zAwGfLVr751RdfEyXRbKZ3kx8VjLdZ7WD3HDkgP6wnECCCetQ1PBHi4HbjBnEXqZRQTJxWPKEXyvDLLozLioj",
  "key39": "2y9HPzxNsBM2nCyj5DvXvrQ57Q9SGjgFbTFA1DTVN6jv1VfZAM3E3iZEiegoh7XktJNWXQsbJCBTiViUGDiFUGuz",
  "key40": "2wV9La4oGCGnhniJtTJ7NQejQiW2QSQNA9yYKynCASdfCixEKaRTCtAKF6jMSAJeT8cdKj3eXGC5Cz1ktbfoMds9",
  "key41": "5kijw9NdETHLaNUYGYbX5i212k2xoNkqdQWT192vj1pDASisHSdmojqxi29KUyg2ut3LmHEmcwUYWVAG1NFdr2rn",
  "key42": "39znGkM6dJtjsCAJEB9sYL6yZtMitDJTzZ1X4z11bNQs5kWzKvyPf7jbUH6Zo995btyQeyjyCtHYRJQUHy4kZQzQ",
  "key43": "2vQ9S8yHpd6k1MP5AgSQuM9VF9dYrdwKWRJBsJYxrE3USzjs1ksPAbDnmbCJbHgzKjQ3N7aEJSCYxLJ3kpagvpEh",
  "key44": "2frY8KytBJTwF64yYByCdX515NLTnatuMPTe7autvS1eszi9m1ATTwY5Ccd8z1ru67Cw2NwkugFXWbx23ZKV9RuA",
  "key45": "4z54U1FsjVkqeD8kgaBKE3xFrkDV7UnWf3BLVDBezBviLyhxzbwoKVFLY3R5yc8frD8ELHfDso4XypLKDUJvaKiu",
  "key46": "3zXbCUecr7na43xfsV5xxwCtcnuBLLeuBGQqvTsXBa21piAwzTwxcUZCDUEv2UENXxiSg5S9cDtd4zyuRWKz5cab"
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
