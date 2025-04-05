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
    "4KUfhwSG1H4VLqdAvuuySzL9vm3yW8dQceU5yyaKkfVbufjiC9dct2QCVgJgy8g9APSubYPxdNCdVpWU9TQrn3TE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NupAVRHEjpGq71HadAuFHtm1TTAQBPu5L9tvNHB9JPtGzEN7fxETZrwhkbzpA5y9CJwzxzagQGX7cYetRCu366c",
  "key1": "4kJ1H4nYy53K1BbcRtEpzYbVte8wesXpudL1MBQQMpBi8qGjAf8uPMfFcNpuzrFQmee123wACPT3VqxWMuaBuJEG",
  "key2": "5yuXh3mzQhSEFGKo3cL1KjmiZfGa4gtGnKh8g7yECv8aXynoeDuD3v18ToTMtKC2Tc1yaRn7hgGTqdn2i9teSbaw",
  "key3": "5pJC32ZaGKjUgqgX4hdfsvwb214kMzr575EVZ35KTLCadbvtXjFgU5ZzDkiMrfye5LXDPUpCAiJjPupcJjR68Q1m",
  "key4": "5ATy7LqLFUi59AXYKciqb3pkRurR2T9ZgBKn4odHJHxYiuTkhsyrZVbYNdE7nbcN9ZiRzD5j3QcJFHUThnpWT4Rw",
  "key5": "38ySjcqEtn62k5HZjBZ6N4tsc2M2spRSLfVczYdAj25DvsHbgXAChUzvBKwdpBb5XLzMVHqDwYvQvxbPND7yvRuS",
  "key6": "55bCBvcq3gv9toUMt7HiFg7HQebc3nBCasMMivrid4GtATJeNY6kV92x3yVPSHBx3cfKf3tQjJ4Bjezeh1KuFuKr",
  "key7": "5Gz4rcm6sVN92sApCVx43wX6dZs7S7UscjbXpJxcVGpuE7ByPZ1garbqkofUyn3ALQ3ycSTFneHKm67rVNG2wCjr",
  "key8": "oCrjzpqkj6a7P75RbmFAaHT64TnMcvF37v2ZkNQxTtmEV8yT9yQemdZeGWEhHzrm6vcKd12FktSB2Gu4BrfcxcX",
  "key9": "3wuYMX29nXChhC1WqHLmVbk4cmkxN16zqm8o6B9TTvX1WuFo8tHErwXF2GPuaeqsKw8ujCjmPYtGSkBUpZUF8cHK",
  "key10": "x8wGD5KBdZ7dPMYDT8ekb6EhVubKm6p34UQxr58Dcsj3PF1VoX1FohcX1gqUcVrNRTqDnVrUVny9HEBx1XNgYeA",
  "key11": "5ELZPXxgACLZgY3p182buZ6oQJCACuqy7hFYNFiHvKoPaDEhcu6jsNMtfpLqt8R36FxiG65wJcUb21gtBS61aR5j",
  "key12": "eJPe4FgN2NJaLrwRvmpe8QtSeY7XMqy4h54rUiufnqVMNK76gscq8vm34pCiznDCNDBWavXuBv3CaCLqRV4YHy5",
  "key13": "3vRGECgTBGuyadkNtFo4Z6zbmqLiYpneCn4Cmt3g3p923Tphp879uhoFpZL8rzRBkKW3xpz9sqn7gqekJLPUysRk",
  "key14": "3rbWwhDitAQ5BxRy6AG3kLrQ5T8ukDhC3VpSecGqhpiJgCVbfg4mXPPo4ttRcXHknT898zv9PkLgaz77Ee3NfPZX",
  "key15": "37yonK8PMTpfABqUYebhrvZaPjpqvvZ1Jd6J1cPvEkQ5NAmTHYqWVaKFLSp277yCTnRGKvkKmSFE5FyBRfeCepNS",
  "key16": "5p3swzs6usGk6Ub6FZ4T2z5YeWVL1hk547551gMJuoDPE9HCcioMUc8UzhBh4wLttRr9NN9wuwBrhT1ybyooULop",
  "key17": "4pMFni4iVMwU3iCD7qM1FtCLa1WKzimkxzZuprrZa8MiH2CxnTzsQGGS1mxzXG1jUysTyLDWgk1nzsZeUySArsZT",
  "key18": "4tgX3BZRPiQfH29LN9sVo3K7wFHD9YKmWtFa6Y3JUiXHidmxLWQRfqwUVCUQxr2tsdxUvi2Zs6b3ztUdt2vkT8UV",
  "key19": "4AULoRfLYnfPAv1LA32t3mCEVP1zQpaP2N59Krc8dvs8tz7AGDa6jDEjQ5FMG3ryUnaSxWeHrhLPTFAU4Yd5LAKd",
  "key20": "42Kqv2mDbGfqad1U1cK5BeTHvHQsYdx6tehdNZwc7QGESwjCTYjz5mNzURpDCsUNR4A3aCwhoenpGaRRcHptPzim",
  "key21": "3wXqgcEW8gUW81cqZyzkeyagAaYEc3b34KQZZfKAg6PJR4D6SV9gYQXNsbLAajTekzdte82d4TGCU1yFh1FjyvDL",
  "key22": "3PYF2tRmwgow23KWhmy83ikFvMXQBCZ5WWmNLyyNZrV9tuSrXrhjPhY6oahj3JeDC4GaGvPDnSi2yYyEMxJ7ELFz",
  "key23": "31yUEKm2GpMVASa9AZ2SD9FBruR5PFLUwXMtC4EAnzj2owdGAqsaWaoPEQbPM6KZdJQQECZT8MDCLNoS5aHiUz8z",
  "key24": "F1f5LVEfVd2XCspP2Tm9Fk7U4EvzyZvCwXZdoNj5Hja862BEpD2MF6zP8vCqkpzAXuMuT5dd7C2SwdGAM39jRjZ",
  "key25": "4u87WHsfwDwjsbBpPv1Z41KjJxET98CcRimoLpZ6Yx3bCUo4k6TfcCfxCCeiuE2sZubJriVWDdrrMRg71pvCG8sV",
  "key26": "axGTQ9pCNJF4TWPr3FAPTjk1CMkXk7kAXw6NiPnCrod8yQkdwcAU2ypEqMRuaqiat7HNBfDpLYJuRWwcNmSKUPT",
  "key27": "vHs3AJtBcKngJZZRxRPKQeYcgzqpHJjaciUutWnrecEZu7kymGbCu7vKT8fcjZDucajGe3uAys6NwgrFqSquP3x",
  "key28": "3jyjsi6XhoSdhiReGVoUv3xjQSJ1yusq5U725csw1rbRxy8ks37QRr4LDvVYNPNHTtTVLuxHr7aCqKGsT9gSu691",
  "key29": "4rFbny49wrMPDRtia1UgxyvQ8Ca1UXsVC1PP9aC9SWTdwiL81DxbhfsExuVqof938dxCYVbuaZxvAxiKnMZ4UKnk",
  "key30": "3tcPnd6YfNWk7Pu4GMmA2gHBGmduw4GnHdEUNYN6m7G7V11UuHaY515LPwb6VFfwnfrg5fcbykmzPD6BGhHbUovn",
  "key31": "4uL4RkLsqtU5DHggY44ZZg23CMZX4GoSNtrEuoy4wBHiQNZ4R4gfQVkW2Ac3fJFTgVtwh8TRZ1LGsMYoXMBZ9Bkc",
  "key32": "318A1qTHkG6JahHAsmsh95gabPd9upNGi3jtDJ11JFKr8yGGyKuFwRq8L9M8EcVAXvP5MDUuG9MgLXNWzqzqp9vV",
  "key33": "VRi48nyBgAu4nwXEjPthkQ77rpbST1AuPpNwhKge4VmMAAvkpwxeULtd25whEwv7CyMGHiCsnSd1VSTQGBPep5M",
  "key34": "4HB1RsSJbKFng1aVo6PcMfNUSWMvxCuBRs44k1LM2ZwGF4CVZySEFjwk4AMaS5EBjz8pxPn9Cuf1aYe3SfuEp1hi",
  "key35": "6747C4T9AjMMS5zthzrDYDhnq1AMiqz8AS1x1kfBEEPCDLqSsadTo5vt7wLcDCvqKMi5ABaFvWWuH3KMgd92gYYL"
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
