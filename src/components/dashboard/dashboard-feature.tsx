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
    "NEhNGL5h2LifzL9YP4Fw1666cVqQbb6V1AtP5VyiXmuXvDB8RztLf2WxsXgPLJFiev3zdzhnhWR3q3dJZG8iEUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UW3AbA8zpJJfdrV7tWiVLZ7heoHVq7STUjn34yfi3cRwKvDtv6yQvFztwcaf7ePnfZt1ywZBNjc5uQUAo1kDcUi",
  "key1": "4KiaCDkmvs6kP5JURFsD5Ncfusvb7Y2gk3aMxGv9LEWSiEPh6wc3EC8FJcmugtdZjc2umSXaX3rGH7mcRrxFZBUV",
  "key2": "2ZRES4XrfCnkvWv4p12CDavqEqtY29swKLTqtvaN75nBgGbFeiUSKZoXhcpeQbUjsQ3mjUQhqsQjyMB4hTC7PRsc",
  "key3": "5wUpEpuwZWNvsVFqNG6tWTakSNBqPX2va9iBJEHatjUxPY1Zw2nkRu9PHBNpHFcAAgaxEvL7aJN3DztRSjvmdBmj",
  "key4": "65uYrHb6KewPzxBfbJfpyQdbfM9Gphxu1NSxVN6Do4HzoJocAn9xaWorS1MX478xLHjDhihjEoCVPxR8xZkn3Vff",
  "key5": "iubDXJmvizWi5boD3YbeTSg9ec3fuTECpVRWYhAdd1A13u63hJEHnpUHWWWSCJxGcXRByrBncngCnXKipj2GfAX",
  "key6": "8579AG9LxNWCJVX4wjcdyQPd7QqiZNDVTJQ1927D1UVV8EU4KPWoqDkSscoC6ALiQot8gRMy7fFTkN2dVuokfNa",
  "key7": "2QEK8ALbFSYpSSQEtyLezdtPgBDJvLdo6D2Ya6ryHU89F6KHwYcHmzAh8MNkWTje3JZtr7meFnVdEx5ef9S1Qaw1",
  "key8": "5723Xrm194t9XpfKPHuPq64LfJjqSCK4pHGS84wJe8H3X6FTk8pxE4dgSx9SUNFiPGusgJaFvQ8bajbhEFZBZP87",
  "key9": "2u9HC28Mh8NUZBmnptrKPBL8x9mkQWgs2LgG7cG6bqYueNvwkcDMUHkRGbNMgPwTfyxDgX3o7gcr6KesQ7dRw95Q",
  "key10": "3Mv4FCGrfxQ26Kuc7PGzaStFCYSviYeBK1dvhVLxQiP5pffPeYwh3TmDH2waHYvhtYtgb6gaQMeuYcGSGmSvoaK8",
  "key11": "5UQkqa2yY1U9czffJ39mYweDTQ35H551Y2hs893Gy9LpAsvsdgD3YEYAP1GpySSJERsd1YPWFtxTrVdy89qEfDdZ",
  "key12": "28ooijYYbf5vz2hm4sLPvACkQHDtwnuYuKPKuqdS1QTYEuaudGJsQmS9aXbFu3W347emDeP2SyVUo9eRZoTP9xsV",
  "key13": "bZvpjC4geruvoeKp68MMVxfuS7MAK2Bu76NuGSirhf6pHPCrjms3WSEpWbb54R5MjV7PFN9CKLrwVmvXV6X5Lfe",
  "key14": "ZaWF5w4tpvnepnuFmMiEZB1PxDY3F3NKuKnEbpvtKfH3VgeGbGVgRjRfk5d4FfoJCanstLYQwURSXT2jhwMrUHJ",
  "key15": "4j8h44PN7WE1fvWA2P4mQqJ5QZd342wyn2mx5asgdK7Xk1HcnbC76jn3R4TLA4ojAZAHmywnXnvYqh5kgNs58ghr",
  "key16": "3arWJ4YwuRuUgxMpugFqpVe3Lvd6GAFj7BacwKi1UCVMq4dy3Ug4YtbrQ7aZBfoHbUV9Rs7jY1ZgXjjz7qTcdtJC",
  "key17": "4jkSzFzcgaRxNSPAKiAnyrpzTD7cVhUmfFDPf13yWBT1tCJWHyx75cW5UpSt5nMzfSBW8KVAAoPknGgmSY15TLer",
  "key18": "2TcTeMo2Fg3JMGc2pwQXVTJDZVDEuuwJwyc8RNNS1TyFSWa39iWBUcCMRqLXNoA8DYx96CFALRknUw4Ax84U8PJa",
  "key19": "5XvgbxrGjZ8U7vGtX5dQJJAuVupEdNr3mMdxajubFyUTL7TFoEZ9bvSbiTEiboVvVWZUZTtDwGmrVd13TCwUJC26",
  "key20": "5rVcca2GCHQruQ3MUbvKg6rcLw9t1GCwMgpP4dynFocxuTytLD5iWQTdE7kmSiZrkGEta8ze1jUeVxrYT26NYhcF",
  "key21": "3cA52s9oken2AQCgxtyavYDBfCtLhtWmvzxtvFbrv4Vu91cYcjGtm6wJSC6Ta8EKAUzav2uuh9u5sd3G9az9Ltyf",
  "key22": "23GZpom3WY4bryWUvQxQVavGibNrsqbmeNuxNL6rmXuoZcgnVvgo4ek98BzfZTYYHwVLfteKykC9LLECuFnCbmn5",
  "key23": "5zQQNQgSriKSXqg6KeLw4qxCUAuJxtTHWAMbGDaSxMvzdr9BccE4BSnPhNy5uJf4nm1miuogBoZ8ogLyZH9fztxp",
  "key24": "3egiBs7bWN8YtqK9EJ94hcKsmJCbFe6M2iahpGQcHMmuL7iyWJo1e3hzpDkFkEFnz3KhDtiTZn2t7u8wDXkHZe4v",
  "key25": "g5WvPYzk3bSFHjQjBV28uMnpTMwp1FcDqpNHJdqHyswMTsyGK9kc6zAMvGxo2pnNXuADaieHNY5iAJ6Kh7Ev5LM",
  "key26": "5jWACf9kpdMSfPYddBRLFUKT1HD6wPUMipNbshdSkGP6kzxHDXSMyKfwbH5NyS6kkV3L7BsJwoqNzhQKhetDtMNu",
  "key27": "4x2MwPK9FKDZVrjjpyPF53cHbQ8LwraqFgvQtj5teBGEwEDAUbKodsovwx4EF7VnPHvvNvym4t15bAN95ikaqNEk",
  "key28": "nwHNUz8LAVuW5qBrPoYt2JnuJfDU3BpCrzpfTC33ND7GzMmkABN7HtcPXQbXuJHZNFGE1LoxBDZNNNwfJa5YfTM",
  "key29": "4Nq3sBmkKuaRLoYaa3cKfvXB9r7RVYu7ZUuUyLsVAB1FDTeBNxivcdvC6xWXiaRGyoBccsnk6q7bCavhtQQFm4kE",
  "key30": "3eWAo3BX66STHqMGvGio1V9M8jyxAg4KA5KDhD1NiSVmGhzck4Ngeqafucb1bi3Vg1r5v5Cc7dF8dEH7oeoBZhZe",
  "key31": "zFnNNehvdrAGKADmvFZmGwEVkkN9N9GX2B686XhAtJt9AzwsMhFhWhLYaYdy4jtxTK8SXhm4eWDoRxtSczCUybq",
  "key32": "4FPXhr6FgkfKEUuAt7BVo3VoQ1jKv9aX6uKaCLf5pEfJ3UKhA2Ktc9AJ5uVvejLjNkh6h56MB6AVWQH3M5ngdntR",
  "key33": "5Y1gJwSZiah6dYwHMKakz3qpV8DRj1KieWQkHMFq7umSSy3KNNoerc76F5hL9SBujvYaZxEai2zAbe5LVmxjFXcm",
  "key34": "39WPCARgray7s25kYxp287xvKfP6V2LC3CWWafcHEdecv9P7UKw3xs1TkkJd81wsjcsJr6ygZDKXXFsoyJPG71Ji",
  "key35": "3c5RLXiMN6KqFMbWJagfmRUiazfx4VQj7zQfAydAGLwcv7DtNK8cPpqxtvARuruiFC1Lq6Pid6LgNHG3rcxNkgH1",
  "key36": "53WNrPjNYN98EjDUJf5WaAM67QmCVvev3a7hQt8kzuNWKVpJyFkivuDg2AC7rf1DUBhGz4qtSBbMJqzDEzeyS9vf",
  "key37": "huTpHPwQmsisF318ZNi3HgoC6Q8bzyFSCks6yK6RF2zMw7bQGe6hjDS6UweM9yVAiwgq4N5ZXUD5nCUAiLS51h5",
  "key38": "4uqMs6aAVDD2JnKqySLdosHNuKKqsTbg5RaGD1wYxTp6Y1UwWyUjdxBk6WeRmFFWgw8b4errF9ga7AEX92aUYyFA",
  "key39": "4TgX3GncfUjUxUxByANBysudWKLR1xKizzeo6Jtn1W9LX2thQmAhLHnwGxFwMaW5dXQ5h5xzsY8rmM8ySE4NZ9bs",
  "key40": "32EAzhMvuEVzzLZkRNLQC9XSMD12YBv2oRUEhuyBJSGc1rcWP7b7s6M77hnjU6trDXSox56iJn4xRm8eX1V5bjPq"
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
