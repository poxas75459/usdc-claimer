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
    "FqoaYm1JHB4vSRBkBAhzhdXtYLcgtwawoJynaAe7ZPGtqzPnAFqcSCeHnP5X2e4z8Woky1htWbqNqaZskR5qscs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opo1H6YQ7NyJMSVavz9VsWFGb9zwF2JYy48ozKx3t7kE7ckx9tmREaY2z2mhDtF38hdNYQ6vzC5TY2frmRpDtUj",
  "key1": "5ueZmQ1LKxeXPLTJwZ3vx9kpZbgXoKgpdWEKUrAMBaLyndNCFcPtm7S97WD3vbBUxwNAHu6SeerND88sa8xvkBjN",
  "key2": "5zfRiQZexhL5AvkrWwByACr2ceJycqVcUQTfGzuJ3PgxFjnvMPvwZsjDQoXuVDCumWbnXJyNsvSUuJCSvenBBnjL",
  "key3": "72zmccwCxFn5M7CXtrGho7wNz1UWVNeY34piL5mEbBSGWYHuayvwqau9mfYanZ3QRi66M3HacpXLzQBzNhhbsEk",
  "key4": "3r3c41EUzanfoGWks1B2f4Wyi6CfHwi5QPArP77TAGrrjxPws57Ahuhxanh5P76CrHpnfgH6AxvGEUAesgCLX5rE",
  "key5": "tz4srY9GX44ALqzGepFkR2CFrd8XbaSbQC7KWDjeyedkK1Yfw8QWbeF4VzqB1RVidEzeL9Xr15SkRZdBPsRRtWX",
  "key6": "64CKvYkAsUtxzvYTmeWWTvJGh2Kox8rK86Hw5ugomoa3mjfmmeUEaK6ZkzDYkMAjTBtN9oZJ5txLeaPdbNRDiL58",
  "key7": "6G7ZVoz2RVXwAgg1qrkSAZSzUKthottJyeyrmugfDWaypDPopkcXWYZXu6fDWsfKcVee6cTspiRfNQW7JE3oMbh",
  "key8": "55UeJgAr5FxMgz3gunFGTEWm1HsDD2TxfZ3tnysbUwqU5nhMoXhWHLvvwnovaovTqGLPEmt9EERyJGhPSnzf4bQB",
  "key9": "5AUpf429s8zyUtFMhWDWsoHmBEwAgYDMkTWTLqGrqynb44kmpG14ydoopxW711xnLRxHm7Fgib9HDAP4ikeZve1E",
  "key10": "593YBDt927uSd32Dpo7Z93HuzKjmFbFKX2tVqC8oskJVjHsLC2R13RSN25h3gGKePChzceb1vxDwyfnnRez25eCN",
  "key11": "2GaSGpTqEg2jGEDkTS6PXLMhE16aH1GeGHUxeWqDNArWgp3zdDbAVUpx5Mszr3Ddu6hWayh3qDu1HZKVkZVQseeX",
  "key12": "CVMPPAeC7EzzWUUqhWRpDiQXHSeFviesUeVJz5ygnTHd5Fxa1jWmAdPS7sUEmaBssz7f2EoSU9ZqmCAaWJGDYW8",
  "key13": "5mKyFTPfhuzDKqQRjYWnz4mB8LRbkw6x9v5jzXLADD16weHcxPmXTThbmLRgN83FfQyVmM3Vswfi6Li5uwgcKVJy",
  "key14": "4otS7oCzcjaaGfAYtfEn3K3PSWn6R7KPZ7dHAYZWJkNZUCjuTrmq2imECmxiRtyrtZSiVFZZb3v9HmHu4muChLJo",
  "key15": "3muxaF1RQAT8NazVKDhtbuS2DYrhiYXYYXhYnryon9XYAMLoYk5zNMvjfiSm9HhuW4sfUg1JV6dPQtaxRW9cTaGT",
  "key16": "41V63e8otzkH2C7KJtYDdj5Tnf6ATb7oPdp7YfktjnT2uohu3roQLJpLwRqezWr2ikVxtaxwKWvU3dkxZX7pexLj",
  "key17": "5VXfcppb9VQEG9qw1mSMcxThFq9oFWC1jpRn8S2iWgY9yeiEzP7u9xDvhqwyr6bYFKFcsLoW1rp29pzAepEmkmAN",
  "key18": "2w1TS15gp4BYARAW2pcX1WjeTi39hQ2xRwdGFDAeyibXJruDUgHophKmLCdUCh4tZw6PAqdnhRHtFP2iRcYqjbz",
  "key19": "2Ykc4GTLHpbo6YMNmK23W54svuTc3sAqYR87vX9MjRGnddiDNzScDBz734JaDcdiXLqHKxMCEjMd2wBsJNFXdDkJ",
  "key20": "5QnwM2KwNUuAJF9qG7x37ivTP6uKRwtxon8kX2vS7ANx6mnWDTV89NXo6Z98pcCngi8Y5peupPwTwB8XSj7K1CDu",
  "key21": "4mu9umH7mQhtbZ8QHyWKwziW4Xkt7N5jb72tSevCRrq9ftvBPwmrCkfjZd58RegiTkP8DrvpzyQyn69eDuP4UsE8",
  "key22": "3iRbAwAz42PmTuirsDJwKNk7isLthx5gMMMiABCMapZYcrgKVPhtppGFa4yA9mw4xrHvayAz6dGzBfwcvSznpMkg",
  "key23": "i3oSLTbhPGz1sAVd8qV6x3Nkh7d6XABb28hLXN2frTMJv4F7248ARexnU3pheLY9DbzZgSVBMG96tJ3jbGxi1vp",
  "key24": "2GGhyKgkthsgAVrPeiqgqgwZ7rhbkqxqrNsjdHKHtwoRAzdeUKcc7MtBhGmipnZEJvBWrxeEPs8bTXegqSB96p5b",
  "key25": "29Gmhze9KsoREDwRYgQjREqo7UNmveAPb3WYMt6FTsWKPBYyMvUbiJuH7wcHrTpzX8KnKhkNaVPCPDAqCrBJpe8H",
  "key26": "5qV1eBuZMntVRcwoGRgpKTPA6mup9F4H5urTFwwhCzUXkoTgGksyVMg8LLEXTzzpsFNDaH7XmnfmvmK2j8ASyBFg",
  "key27": "KorhE92KEaAUTKJujvXAfbTSGjtrNfW8Fx6LuwA4n5WQSaWsWCZ7nbZchf7oz2XdERpNugjpf3syQeY1qz44St6",
  "key28": "4wpN1uCSt5irbcH1CFQJbZXumnentPq8bVRodA8c1Lfj5iWUX6aR5V3ubjgPiUfA5hL6kRZRwjrEN5WGRcMZAgYp"
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
