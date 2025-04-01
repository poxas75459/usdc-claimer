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
    "4m7uT86nGusUdGDrtwzhknYv3W11ZSjdFSp9UFKFWbnSEnvJcKQhN9VbaxoFsnFiBZhZAKdcpxFztPUHSPmUazMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bewH8zharwKpBo9yeb2PvXeCvraRXW8xMtwqW8Et5YcZVbokH8ADoEKjayTB8ZgnTw9H2ZnwtknPdRx3eQjrkM6",
  "key1": "UDnQkSBfiZbtXTzoLv8gGmt8XmbutgYvGB8jzaU45ZFNWoJ4LLp31bL8ST2NdcXXc4WgGETx1hVkPr1qLSHvoXs",
  "key2": "29P1K3YYRXCVzn1EwCtzdRUj2xBgToWEK9wBok1kAEg3iGgL6M6D5RX9RcBKwK5HPQFd39AUL8HW9zqCtDjB8Mqb",
  "key3": "4349Ph2YRAqUuBtCxEdctWzTguWvWjti2nxTpYooGvUz8pTzy9vVnaJRHQcxwUqGhYiGEdxEJT3y8mrK62LhGmEz",
  "key4": "5W78AW2dKndsj5ac6pYv2A1e4NJtSd2Umgb4HH7dNoPAn9JbPWn9xW8EmCBVvKZzeT1rbwojBa95SL7CJBFEXAAd",
  "key5": "3LfwvnFBfCDdM2yfE6fZhN84jQtfiNPRBhESuuP1hvW8rEkZkamb8hXsre4zwKnUmFzEXvRJfCZcNy1jzsREQZ3S",
  "key6": "5AF89MkeWVhXFgm4D8kUXwrEfZZwwNRBv8TZ2HTyZ85zeSsb7ixbcZV9AovupfZeEDv6rSSv35EbUHgLaeean24F",
  "key7": "3VbnU67wUS5X69EBqiN7VSfDZzoULcp4RZg1r1XaRzJiLSMbEQN3ub2hV7M1yJvav7JnoPcHsjbLbepGaaVGfZFQ",
  "key8": "4vsrUJGcT44rNtsRv2LvG9taDWwQ4GWc16GHz6qH3pr2pLqudJwxexcynzpdc2RnWt6jFmGaAsGyiPdK1CnUU7CB",
  "key9": "MBJ724kbAqv4oFYsQLr5GSuQ9VCpmoYHZtU1xRGajEZWG1DnW2PQxfvKXShZAtKLxAQGZpomxwsx2kgb62nMP2P",
  "key10": "26qUJ86a978x2NL4PvbeZzckwaFq7BCrryh9RpD6bXLDbnyDfqyFeTU4w3DmX5Ee4u3X4ndndMEqVgseUuexhZ16",
  "key11": "35ceue9uw22sqEcJKioGNcS52soZn7bRBe8rBJL1cLB45B431LQGz8oNQDtwG4gd4aZehQJgCn5Ujj5pVY42ucDC",
  "key12": "4ykB5vJGSFyziEr1xoA6aJh5bBMZFmeLUwoxEwhtgwzS7XA6E1Pt9LY2KBPXjfjrM9KpP2nMgvJHFUHNYA5fw93L",
  "key13": "4jY617yepC5gaQpGkgXEhMbn1tGks8D26qWeVRhM6NiQYYZqpy3DYXfexgefzJ9gseGYV2w1hZjLjgsXppBimMC9",
  "key14": "M4w3ftZet8t6PNmhhXv6TdNvCQvuSuTkQVUfYidescYKtttAfxhvm9ifbLrykEP2BFEcxDqpj7LhL1A4bTYRuXx",
  "key15": "3J2yirJbE74Hwz83ZArx16zaoYTFiMX9uvLKDEReiHVzZqxsg2dmRQrMn2QE8eFfjxVzFsmDpavn2a3BeHTzrcj7",
  "key16": "z4NFBtUxkmYjmJRuofdWGQbhTsuv9rLeWyp5ysdAVLhePEgFo6hkqR9w8eKvwYgMgN4oxSbjDvXy34gHfwSW4cP",
  "key17": "wzuFUTFQf3h3iF2E8vGsnw3ry87Rc8Uo4GssBFQobQVHZ6v48qRg7Kb32a8BEWSbMx1TDR3JwufMo5HmQZsvJKT",
  "key18": "3VufcvhEXzKRQhFMSX5GYRmpmsHyPi2jZZfXQZMDL6Br71w5MpCsPAkSD8N5ai8EHYPCk2ppvzaGj56DHiMp3Gac",
  "key19": "2DHARXqYbztwTzZ3Eh1rdsfJtNdnXZak6DPPVVF7PbuTs8i5rSfMtF6SkWTU8MAPt15cfus7gWFifUT3bn3YGfmn",
  "key20": "4MkPeMKGEg65jrPGPTAGU6vS5BuGP4L9nmd1fKfhmS6xHpUA4rCRkUQpir4QyJjwcvFMpYSi1ELQFT2a8J6FVyAn",
  "key21": "2va1STVitStp8znqSaez2CZFyGSbuAewufpnJt53a39BvS7UWxoYbU6Ts94AQrNjPP5LeANXZeNCgXkBkNHQXDfZ",
  "key22": "31VhCeNRjJNC1U6gBLHbJzWd535gXiio74WK3pQMHCnjuvgKVi5UAwwzsJHjQfwj8gAQZKx4GmfqpqX1dxMiGRrQ",
  "key23": "48gxZFedHdqhi7N62b89S3Tn2LHAPNPHYegT7RmfqPnMmMrcfKRGUdgbXJPmhzvoqpWW4dVtHSz3yRvRAh2eCo1d",
  "key24": "c3TA7wtiouXaLraK6U5yPuPB3ryyxmjq9P3E6TqRgnyupM7VRM7bh73KvqeJKWwmip8JaEG2JodzmZwLDzeVayJ",
  "key25": "4LH7rPvddQUFGCwAjjy832E4pwxsQ54h92EeHVTVkiGpNY8rv4Cjv9Wr2u93uDt2WKiJ4RujHq6pHiXxUAePdrea",
  "key26": "3dRtw6QNmwosDW9b9RufbWa2LUkNebHFCXhgtpdnCKrkzugXR7UUsbyZpgFrdATXAu563bsLnu3rdmvwtw87NaMB",
  "key27": "3pNyMWaxVLo5Y4ZajmboUyd6vU4P46faH7xDSURnGDAM1wDtzGw9F4KYEVkaBPJJKukRmzEDJdWstph7tM3MtB7H",
  "key28": "5VpbyoX9KyRQ7fm6FAJYyJfR1poHiLB6pSsNprQ87U9jSz8rneLRbndfvQCHRrATFRENtLoRDAVtfLZ4u8Ls4bX7",
  "key29": "4cTTtvJki1hhjUJXtNRdKNFewEgSbbepi4qdNmKDWQYfgyPYjuUN58SQsG63GCzYGmyrU4dVKmAUoBQesbHTKY7b",
  "key30": "5URHBh8mHcM5DMxiBZx97C7rygZGvWYyEwgGbLZYNcCCpkdgMR7kHWo4qHLcadT4uPXFaPZiPvfA8j6rP3XUVf95",
  "key31": "nzFuYjhtXnPZqadJThBKsGSspqTjmVK4xJD1z5ASQ1VimSB3yEKzKBAioV8wx73rqhGCV7HjQ9jvRxWugXeteHi",
  "key32": "DyKXVsGkuxv8fPdgvSDhSdY3MqbRh6rdjTQCX2mZfuj3cwVfqUZpe9MstFeqDdavTxAjgsQ8QHncKhb91iEUZ69",
  "key33": "26uxTTR85BipMMghNzQ94gG6jDATwQR4KodLiM1j1bYNmPHMZNyxsu48PxZaQw2MsSpXRrdkLCdFeMe5NmQRVw2T",
  "key34": "4M6Gc8oZYa3FDMf488fQrtfcySh42jM9KNsMtafZD2DWmZBNiozRqTKHVPvY8LwiPDgACt71nbmcV55fRNwZbMRr",
  "key35": "5aQS8CmLhsJQ36uAFMygGyGiFr5Gcgikcua1dTtGcEVN988S67BXzmUMAeaMR98cv6jG6at4qJgq8ReVT9ngtUpa",
  "key36": "3t7g4s75942edhTBtKZQX9Qefmcf2r1XHSgrDzwJ3oWuEYb6cLyprnHP55QvWzib9KqGuVmUtJ8gJd8B5HCTw696",
  "key37": "5d8cPPETR8QZWfQqqTn915aBT31kL4qC8UMoaTas9jrEaRiy9kRVhr3g8SeUyhdTQdiChSe3QAoGFCNqVEBKhdDf",
  "key38": "2Cf3Fkr8bED8W23ABYSgPVhRwRGBzQpaVpHYdhUgwwaUPpqmStk9yUCeTii9FQexHn7afKxSHgEEBt5nDTxhBY2G",
  "key39": "3S7vEQPeAycNoNEbgxjYhmJSBnGhbug4sq6KP4DPa9gE8uzC12BJDAJvYgTiGWXwkS2DGkETZCRf8jYkeNm5hYx9",
  "key40": "3KSMiy8v3NNrgJasspBQ2u9r6ydA6fttqvQXaDr5QwSz4QpCi5cg58XM96cAncaazSGYFELaWx9MYAGVpbqMyJ6L",
  "key41": "2VaXZZMqxLPaFidPi1ea8UPNw5PUpemBHusMiiNpPUACmCMetnkWRZnhZwVJfRMrqzSiHVPiVTFtktoQH6U815Aj",
  "key42": "4gk7Yv7gt9VfiYuBsQsTCkBidxixBri2S8Ln5H7hFy1dC2g4WXiWb5M1car2FhtSdMHqop5by8e1f6PrNLo6UwhK",
  "key43": "3P9JGpfE9NCjodd2MvW33zjW1fiapj9s6V597nP46NuyauTgkpxAsx2a7EiHraPJovb7gSP6SXUhPzvNUBbYJubd",
  "key44": "5ZPy9DhMMkVj18QzZsFadt3t5AEt3BxHenQLzwE4nziyze6kmSYVFVPQgPQsNmWhvdm5MYkvFpVFsD2KwZFw2BcA"
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
