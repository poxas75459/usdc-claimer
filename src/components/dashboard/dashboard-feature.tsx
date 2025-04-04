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
    "46soAzbNP5zpZdtGpioUg7ri1HL8qdWEMG2mVtusGAy8FbePcUB4YBh9oP7ntvB1x4GwJv41SBFRiPRBxxJ7JMJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwZ47CSZ52PrEtSwcgYBd6BEif8TMcxtsM2k84YxYkhoJ7UnTqH96eHwDtHWWppDyoY7fcpGYUt3EKz1gxNn35R",
  "key1": "2p8Zp7YkxiUZC1qWBtF4JyFTFFGJtfLjfqq6pke6gBXQHuXx75TFQFh2WUiEM6nS42FtWxAeZ9YWDNZMRVbTxBqb",
  "key2": "kvHciUcceSQ6rGNkjUhmgVVZj9rimdaJU8uV63vG8ZmafQKrTYk5wwyKtpsciokTNyzY8yunZjqiXdgtU72MAko",
  "key3": "5KUNBdxwAPkGXZdQ39zLXBVWwnyyGxbWcLwmMxHuP6Sz4aDB6WG1Ukh3YRpfZvMRCAGJ4SzBEFB39GdA8AEtznrT",
  "key4": "5yysKvyMxmq9Sku4te1iZvQAMvShG7uxQRDnkHXgR7gXkn8RBEnf9sCPDWqCMmz9PqRCCrzCT39VaCrgFPz9aEsM",
  "key5": "3jgwbxBgDgY6rwSW2JAAzYwwVBq8ofyQAHBZoeACvdfY1heqwfmcejAX2sqLepAAJL2saah86goQKHQHvHxHrrFE",
  "key6": "2DYdLjgZr3Fx6hogUoh6nx28Z2PLb26FjoC5U4FMJe3aHvAm2djfPW5DFm77671Z2H8En7BFvAtRVMDgsnBEKKHg",
  "key7": "3Krhr1bcCXvn336xSkhKoV5Q83fBrHASBPQEXY3FVs33RruRe4BEKtR3mTRxfhQNucCVcCzc6F2GzmJaDaNGZhF3",
  "key8": "2YRF9xeaWpurf8F7w53MBV4d7v7VZ14MXYS9yLdWUfEs3XE3ePkxnz819rMt87EcxHDHWY1YstwHM8akM93aWgLm",
  "key9": "4d7inBvWTPd5ameFacQxifeux8wTBeFpxHXQWdoCmzPHc96FEyx8MJQheBjFRfeMqtoUTY7S3C5pz2zkpnZrWywe",
  "key10": "w1aUAuNchLo2TSrfZbX1aG9qfWELaNShsqGSeE9Ly9pCDSug5bx6LubHBSY6H1K5xG1D2kWHNmDaEv5m2fDZXPK",
  "key11": "4vDi62VVRRgeFTaJC1HSPntNyTmiNsJM41TN2wJeAK7skkM7aTXwGUGpmhw6FcfFvbp4ak8DViQNWWFeyt424Bfg",
  "key12": "2PpRfQHSiHhhxohe81ieTrYNuCAq5n6u45rmSjXJ499p2xxZCk8qZ8iPbhcsmU1YKQ1EXeT8SLroLh8HxsSMeGVw",
  "key13": "2YtuHSAKNMF4EkdgUbwuciqcV3iLZtcRm4DHtrY4kf34newC7EAo6cQ37GCEHDxJPoNnm5PLw1YfWZwxorn8q3Gb",
  "key14": "2tJFkkBH85Psg625PC7uooUcAmmkkkdd9RgU4YnduxNdtTUTTi69jkCkHqxrHTuh1GHpZHgvmFzmx4UfWJY3n7Fg",
  "key15": "5Qo2MSkdF7CsoM2XuNexQJLChHCNoJ1oabcQWKpvtW1HKwSgY7cGQ4aTp5Vv9o4fy1tCE31jNU5oXn3UhKHZv1sP",
  "key16": "8Vkuw2UDVDUjZJSscFDQ66MJyVJ82pc3M9M6BEw1KjuwxvFXimoeuizj44XyqPWhBN96TA1ew24eat3NSmXezjH",
  "key17": "5MBYf6Ydw61kc5txp4narX7mMAtcj28k6HqaxaBwh66KxR2zzBpWRRyf7FUog7ySmQ1g36tK9QsEECCmAaTYkenq",
  "key18": "3xF3Ejbh6PDHovWD6cF9VQ5mMGcGgRuX7WmF1Uqf4GArz2Ni1P8WoYqgawo91vrin8oBQhNhCZ6wcyqoDgVaufmf",
  "key19": "oCiRi77T2CmUS47fvxbTHVC9UF2pv3FCQ59q3gmVs49t9jkAEHfbrZCvXhPrWeAsSouZBdpag3kZvyr9RsV1i6c",
  "key20": "5cLaUzY4ZtuNAYDvjFgQqBUyVXLFTcwePaf7iyhLRhxbzzH8a362env8rM6t1esxKvqszVGBppDRoUyj6xdPnfjB",
  "key21": "4VREtPHEi61RaZsRnDhC5BA85ekdz3YHS7vKynC1QKySVsY6DaoAkCyPQ9XRGppBtca2VM5PJ8DjvD1ygPscuxkF",
  "key22": "3knopffrWMrErUNeWRqtomkxZNdvWWJCs9sRBeTmHUiXPd52VtCLNCcLAedStVfVPN3sz4R1E6Evxkny3NTPPXWV",
  "key23": "4RqqXJzhT7SpShvgF7iYbsnbuBbnbCDikfVnw7kftWXMcCt83v7xgnmSv8g4ugxxB7uGhBhgZoU7bRYrLhE1cVj2",
  "key24": "3ref15J3mKKNGR9dp6zEyCSwsQZ2L3yC1u6wicnjQFAUkEbACcHSjHVCTxFnBZ8xF4wR5jw423fXFrpaaXAahgBV",
  "key25": "vKXVSACPU3ELaigksTYUbroZMydR32QG9HSvZooAWzR7sMAr8N6VUEbPoDuD1f1EktqVsuUWhWcgpRpMqejjnHA",
  "key26": "aRHciEcWgPr4dcdXwjXTBVL81tspYh7xbheZAEDwYwwG55A972MjqQgi5Ts9Pz6Cv4RarmwA7uDF1hHG5eZk4R9",
  "key27": "5MtyUUek22z5BpWucUcietXppiYiAgmYy7y2okrb6CsLELPHTYDBvHK5gVAErNadJPCEs5iwez54W2mUEWynDxQF",
  "key28": "49k8FQjSZ7Dc2BsrFzViposesWaXAz55MosfFWcwrhaaYYC2qcpSy1HxmrYahaaFDFuY92CSdnoEpLysAjJ8TdBr",
  "key29": "4WnhbvcmX3zv6mTq8dhoKRr3RT53B6zxZNmEFzzFEv8D3Bus2DTNgTfA1zKcN7xsgKYu9qQDhLpxGLu8RrHjH3pm",
  "key30": "2mLuocT7ZbbYknRZMiWjatkK2ftVt2cXd7285A6hRvwqykWmZ1L3rS1WfkT7aHK5jFu8Jux9kgdWwraez4wciBJh",
  "key31": "4iT7FAnPmiJqXDeu6dRbnexNLQAvMzG5rc2m58UQNKdeqBbK8VLCMVSuQA7AP8qkEFsttxy4uceXQGnt2sNMiNUy",
  "key32": "4gZaLMZuuqbXunTPok1m6DQR63zj7Z6WfVJXvTEsQ5jh6vcbwtG3PLG7qP5amyTi4EX8AdgBrLnyvbvWYw3i6o4S",
  "key33": "4GHnRDyyFmYhkSFPjD9g4tNP5nsv3qqAaoDnqLeRYT8c2coESKbUhak5uu8k8Vxrq7ytxGnrzDeK296KN5ugb3Bd",
  "key34": "35uNfyMHrTwVovxKKfrtmDSZZ1yM9HEqKdvtxTatS5QQsVpggimHfvFMq2poK8JYmSAzWKsFQckiga4Zh3U5gbPz"
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
