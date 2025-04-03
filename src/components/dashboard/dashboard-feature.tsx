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
    "4dzqfqhyHLjHFD4jsjzGR8rm9RkjBhMxjzJEMj5N5kUQP9dTbn8wT13KXj15n9ivvSFU4UWrTYYcSx5tJDxuuBCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSy6Qi93EnWz1SimFGqNGUVGfEqP9zsPWqW6MuoEFoCZ8NPw8Pbhv76wdvL2em5VTgUZ3AhyhaMvt9jXrKDi4np",
  "key1": "2ZR8MsAGBhNX9oPwVaRw7hcTLgZEeFoKpEQgCmgEvDoUQAMKcqj97Yo2nFhXgzLpH4SCB3o8gNRfzgKEuER7c52B",
  "key2": "3zPaMe7tYTNCuVyu8Ha9ASssqPbf3SdePnciWWbyG9BkQDY3kQGrA4V4LKoATVhW8QK5TGnm97BEPRF5iwce6hTH",
  "key3": "3AwVtsa3yujwXrsDs6ZqGVbXfcFHBt9rRTzS65tNVxhWS8brhYBijc1854XVvwcsa8XoiRLCXgXHrDvsarVB6t5s",
  "key4": "4mhu3VeTMpaMvEK7LW7TaTcNAuqU9uePCPHCBvKNTA18RkxupKggvU53eQ5HPHHKzJsBwRZTQiGuewSHM8n63LkB",
  "key5": "2J18mscWSWuYNUBuvswcGKjoER17CkwEK78be8PVpZTqxt8L4cdmfhJ3DD5stBfLRcMcggeyMAibeTFDDcPDT7nX",
  "key6": "5hQQeDkr6g4HoAeEur5uTfZ1LaitfBEyNGSMD9wN2UzqrcYMfGe8AvveCvtbXtiJ4y7rBegVnzfgVptwej6thz3k",
  "key7": "4aiBh9EvJWPPKB83edENKyF19bghxQbP1ybFv2eaMFYoqqp5aTnQ6jabc2ShZWbN4PExrTgszioN3mKsJVNjbYa3",
  "key8": "FsXkkpiuVB1pCiYVqNqdxL7XMUnJNGNTZatid86URmwRCYkhVL8MMEKaiVzsRdNwWqx4VTkxASJECfAduykczwa",
  "key9": "5xguEYeTc53ALxbmTsHdaNqZDx5bpQ9RJ4Wurgkjx2iFoNCFEW2VSiRo7cMePfdkWeLyCDgv7qi4mL9eDfFtWzyc",
  "key10": "4PPj4cKAuWASuUutrzLsURFaVMKFbZES4kHiurYhkv6twPZhMJWo4cnzuZ2BfJbQETTM2jLwqYJui8r1QZugw89h",
  "key11": "63dhFmn3jp2mAz3kezazksYcRDi3hjMt3yiA7i8PPbYSHTD3punmQt8RANv7xmxMKm26fQKXAHLFwixJBTXNybF7",
  "key12": "4E6ukF8iGu6S8kv6eDagymmWQiWjkoGcKAkwmwFwoXVLZfZLZYMM1via1672wLnDqmCRTG97aCGNVvWsEmd1M6jw",
  "key13": "52juLDtaYFt1x88FszMKZS56fLeCpvZp8yFwzJ4vF2rtxULQ3eDz2M72LCPr99TGCtrNvPPpyDHiCXUwexQupg8W",
  "key14": "5do8AxMoVveSkEyTUFfiCjWVv3AzHkPEaCdz3uTQYdaPJw9JP7u53QXVYhdqPwyX5cEiUAKbwBUo6zFLpstHM6UB",
  "key15": "61KQFtHiaeyrr7ztJkCzt5f8ve45pEDPnk1Wr8Dgh852PZce2V77WJRPdkCtkch7fgzG4Yrnmhg2Rd7Qnn9SKTV",
  "key16": "UbSgoKWsWsfPVbPY4basmHoxcx2ACpPtwbShg53hQfgJTUhgUj1imYK4gVqi5FtqtKZ4XLj4h1C2HUpgtY4X8gC",
  "key17": "5EDE6UtNvf5g1bc83tBxn3VYQX5VUgrGx3g2gTNndMaSscw1sEKZMLKi36Uygm8bUDjeVpkjkHgrHW9MUpT1icg",
  "key18": "4qxQTEjrRuhptH1BjFzwKvVCsW9wmQozNS4XLm6VE3v3c4AbVK4mur8feyL2diQCJwE7YRxe9X3L1K3TBihgqhxa",
  "key19": "3oaR2EQ4KkAWNggoSVp9dJNJWMsUwV4aKBUJc9PrKESdN5GTyLQ3zGH8ByPUs2ptPCy2xEBiMmqJnNvHrztHz2Xd",
  "key20": "4KTLSkzqVQbJwVVPekueSTdqoKkeocEwrosyRUNuhrKjbustJ1NqQmzDwpdup6NomTeXQSZoGj3HJ3E2XaY2ginK",
  "key21": "4im3hrRJXwGuef48pYsmzFja2M3wXkaCDohvoutSQaJ3FcdAipyYS7SoWbnfb7zKrfpZKd4aia5hd5McMXKLPEkS",
  "key22": "4JpuYRib87E8YpKVwEnhDQt2fu769RMzUYnTP56LUfqBPBJBc9EkPArFva93xjXN6NJLMW2bPyJGG4G3SHneki3N",
  "key23": "2BKYerHwxJqnuHZUZEUrivDnqjJqDHVs3urruhXBecY8mYazRuBG4nYJ2EdUhQvf1oUUHySGgPk7TG4oEQ3qXQMN",
  "key24": "5H9TtuB2igjvtpZasn9mejzTEv1rsKhcLsefkKfyEuwu1PXj4Y5s8bLmr9GT22WR6JvqRdMRsLisYCXcyg1kfxwQ",
  "key25": "ecTKPJU2Wxfib6KsKN68UM1VZpVqqqwQUumLmVn7md4jUYy6zBZH1Tot44L3sKzUYb3F7cSCCp8NLkFSXtf9wh7",
  "key26": "2Td2ee1HjP4aEvx86hSZvhvpp8jjuzLKz56ePk1Jz9eEadkfdLVAySwNtDk9LjBPnMn8a96nVtjs93TwR3DVHweb",
  "key27": "5UK6qK1nBoMLHCTH5vy1XcW2mnN1BaXhGHepqnCGAhXkALFgGJHjprRSe1PaNX2N4SiHiNBrGqzhpzqYosx9UVLT",
  "key28": "4nSXH6hNEY8zAXG39FeDtwuaw1waXsy4Eg5VLrRvcEiQ8tbsBtbYGtaSwE4H8jss2t7eHFQziGVVqGwSRmEkscyV",
  "key29": "5jPEpFkNxJ9sViHtwq1CLW6HPAYbfzecv8PCmtSaWpRSejv7cKLfdQv7DzksjGozDLzCfES3PB4dmL8YE31kHrTQ",
  "key30": "48rEjVBiSzdmCncAeb1Gff2D9aVGnNQSynEJwLSaU6QkK1xCXRr9XQ8NY78pYtEcb5rCUxCswNAz2R34n2XrRVwM",
  "key31": "2jefFrj1fv6ufrEYrpxuJczCRrsBkLAnjSSTSa64axWqGEwAdx1pAwcixysQMufQyzDj3vt9MrYQQVXok7FvW5SS",
  "key32": "2cVcVNN1Nx9rugobjaAn1qQSADHnUxipq262HEyvay3bzASRGuZVAFvEY6MYXQLe2fF9fzZwRHmCRhKoGmey2CXY",
  "key33": "qGcVEsUNDeXaEnBAiSJFsHt6zvQoDGB5UsKrRVjXCMzXTBGFLvQc3k1tEx3eKNtCvmm2K54phgBBJaZCtMwcmms",
  "key34": "2SWuY1agbp9KYmNut8eBEJPuK9s1pttnjuhXXCU568QkrrPSshriDejm1pPcCi8cvcuscv6KMeB85m39nquAtXFv",
  "key35": "2szjJ7z484p5tXcU86pW4C2iMPjoz192raJfMUacoGrUaviZoBJFBosK2LYjYooVNDbxJ4ngzj23YcQrw8DxXiMR",
  "key36": "2qEJxt77JJoEo1LyF8WzQrsXXoUk1A7fipkHcAhaRFJf3AXrpttUmMXKjUobocHz9GNrtEAvDpVkLRuNP8HBmpFf",
  "key37": "4aS6k9i6dkP8kbFWMFxRAHW2HbijeMUe1jbhA6XAwXhexFYXTzmRXd5WvDsFr4zkHkXh8QBHoji8SzoubrE3j3X5",
  "key38": "5ut4VoQduHbkTye5PfuVoHYRAGcGkc1mkoN2b3Augu96cWatLxRGs9mUHCRFQsTkDCUz4XoYQVSqkRn1VUTsrpUX",
  "key39": "47AfuSTGdt9YzuUSsQAvTcxPouRyASZB4vhYQWGRDbew5sHDD9gSFDdVMqNVKqjaGSAaVufJUbrYpZ9YJK4yEpBb",
  "key40": "2PwYA28QSbuKhy7d6DUWyd7wkXixcuoNu1EHoX11BkYkYipdvq9Xp8GDQ5dbvKWLWWZcC3VKJw4WDtmuxwQeJmQs",
  "key41": "2qMWwFVH9cLuYtkVDGPVDFarnTXKadsjKU25JYCtarZdjkT3MQb7jtssUsBLDNX73owofKUzumfmasoi6saR2RhF",
  "key42": "sehqAUsJJv2Afiuy9wNxKt1urUyG9yxwMHPS7ars5eE3iMSr7pgGoKW42SDnvtVCBZCB1DVFR8GomysqH6bxWHE",
  "key43": "u3tg5rDqrKtV8pbZHvuGjGnztuQ8SGZz7h33MX6d3Q5551f5y4aHRbLCdLwSYtWzbMK1tFJT2f53NLn46eX8n8S",
  "key44": "2VA9gxqxjjXTCJ3aeDbEfFz5xPK9rquQocqh4KPHKrmGaJBAZs2unEQ9syqsbj81qrADy27fct8JWcRQCUT1WArv",
  "key45": "2r7fExQEyrcAY1u8K8ovPyiqAAFapep1j4tqnsXWPD11827aG3MXn97pi66JeHJ3khuyEUaFsWjbA7pR1F5GcJ66",
  "key46": "4Gdde4ghx8Ak53rNga66CoAeG4ApxR4WcJkFsGjUzVosbf6d1ud9sFzoCSa73iMYgUjvc4fqg8Esk3ckRLrt6KYc",
  "key47": "KfKJcaR8rPLjgkT5aQHj4DCHJvzVed6wvQwiM8X1DGyjnFoD2s2bmQcs5ygGhkAoE88pGSR1zBtuhc6az6ZKqmn",
  "key48": "4DRGbahGJfvvYyUMQeCicUgyZxtiCy3BnpMETL6S7aK78YrDXVNVkkDis42LaNNuULPS29XGmoK9kjrRASgAupGL"
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
