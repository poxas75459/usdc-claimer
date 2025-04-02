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
    "WUUQCvUHHiTj1W5UeS7dRdpp7y7sC5h6Q6KEe5xhJNHjmEKVpNmnKrPNeYpWqfBTzcoLL9twPeVFcpe4tzrTkQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nb5gCJwcNpGsXadNpaeEbwDWXdj8tzdXMZER1sDtMjzMssqMeRvc81Si4jdPM2kxBX3xPuEGMZcsJWsL2pJjFG",
  "key1": "2D3v9BkV53jKa5M21PiB18drcaaJKqqiAgdacbpdB71qStSQsCSdPtrQu4ZFHEbweziuybp8oME5k58WRiTJTWyi",
  "key2": "2N13VTEF1KBFFpY2zSqUGChPMz19kurfS54AQeAUrQZdEohQ5iPpcqyDyomEiaxUMwrwdDy7aqQCZtfpF19woaXZ",
  "key3": "4KihKj7x5xuvCsQ6v4qF9m7SF9ai2W1idDM9gB2CsKW7XrDocpWCVoCTArAi7RE5WCN8DaVxBkfJq5sNriyef7wW",
  "key4": "5YuHicTNRgWD7QaDZX5YrbVeZm78PtMycg5QhVtpZbktze1e3EK29DatVsY7A8y4J1KrvchHbd2NqySH5b2pysou",
  "key5": "23WpUDzvDxvfQtBynUAkjmxJSnSVvB9bJqBEEiHvuwa4839qBZGazVQCK7u5r3beKnnSadiaDu93D2uQgADa6ttD",
  "key6": "5CHZupNhGChLWtLhjm69ixMcRymRJyKdHuQXXjQCvmkq7ujrvfSFfnwmBR52YZACFd4n2szu8fFJEVaE3vk5LPbC",
  "key7": "383mmVSRdMHCDFETFUm4hzNmBUhqY28XuQ14nrGXasjdNLrDZvMXFHuunKnCG3P2exajtmZGfRTsYsvQf32A7219",
  "key8": "63MEACxkr2SLBdYyVNUKrXM3pxBKFzG7PSW4jLwsThAZZ5SBRqqNH14KM2pkkPCF8eakqDompy8LYPTCXF6AMXTb",
  "key9": "TBpAotrKHMyQwN9fr3HxgcBFixqFksjPqt7XchftCQ8oLf6R8vERMWzQdqrxgDP5tXwZGmAWixvMi91UokJ5m8R",
  "key10": "5mTCnux9ThUoVsDD5WoSo5hTW7EuR1FJ2Uijphs55cXYZasUnW4FASBojnDD1pXjrqudMt2BubwGWphZRKXWkbos",
  "key11": "3PQPNo6roQYAdPLoW1abGPMMP9qB8CBAGEhWPx5mZCvHBQmfpnHZjkePdyPmdVKS89d1D6cmSbsCU1Hw9rgkwrAV",
  "key12": "YMmHEmaykBnHBsduFpCnX4bvZoYj5McBMasK9NoveaeNLqEwLC4HCY6pAi72tfhJSA9xSPzK9HYKMV4cu6oPPZg",
  "key13": "3AG5M7euSacJcRr9W3Rs17ao5AP7hbhJ2jnsnzNR6j7VY1Li4BYwDvPa7T9nA2QeMzdzERScE8FHRerE9HL79wB4",
  "key14": "1cX2N64WMT9NABZuhwhnVP82RgWfhWEmUnpFi5zCE1haLrG1mkzmXvW1Hsqfe4aNMDgCxu5taFtiaUUyBbL4fFj",
  "key15": "wKbvPRTqFGjdLYiZR1UZHpKu7CMSdmKWRMxCz93uTUBepno7ZwaHBsM17qrBELU4rxRJBnSsc61urWZtC1bZEZn",
  "key16": "XEr4K4XpPHe8ubNHYYATbdX7x8wYXgX9hfSYbVsraoRTw4P38PntAvEhi2B8EXdQN6x6zfYMnqrTyPm18dh32Jq",
  "key17": "5rG1jXSQUXoqHYv3K9s9c56RkRTKJDSGpDYwyDf6ua4BgC3LMdrJpd1JyRTx8NdXFQfHxz3LY6GCGnHguNtRut2D",
  "key18": "46C1QnSWj5QiCnhttmQaQsjFAJXeLifHyFjqYWfcb2cBs1zsobUTfwtNQdQW8a5Hh9ZTApARy9PDQ5g2PJQnCw2S",
  "key19": "58Ahs5ty7qv8qdJBonQSo6nA3Tv4nSqcnGPQ19VPfQLUdnpD9yrsbvSgWAf3mpnwQCwjPLWE9hk8AMY9Q1TBn5Kt",
  "key20": "56VfeSzJhCboBdkCjLK4XpZUP23eGfDzJVJq9ygbKovZbptfBSmhW7LwsFE3PxoHfVzu9jUajXwgtN8tvUqAK4tQ",
  "key21": "5k2iHwVEdhfm9hxDMBcK3rks27k9H9G7xoFrGEe3to55vhgXgohxgYTinmZyoCgZyU9CKXkbXJRUTjGWysKpoiYr",
  "key22": "eKt49jpAJw3vemK7XJd2PyJjEZ6oN52ReYZxzQWZdZBTqamdLWAhYsBxdQSVfYr3ZCUt1hJrYc8VGXvupcV8oxh",
  "key23": "So1wujpM3oBxBKL1QanonKxknUKjizWk4WWmDefjQCYPfykYv8GGJ3yeYdDF8x45P7iRNytfVAY2zMRBUCGzZGb",
  "key24": "2E1ws3rt1UT8CCUaPgTUnLUTdxNTkjRAUnFF38Zx1sBx3yKdYgrqGyRa7Aer5FTMP7tdGihvhRGTUzzTH32CC2TJ",
  "key25": "28FtcAfdGUsh1WvKsA65q8nrgM14rVBPVy9Ro2TS5uxSfc4uBx9Q6Wxr1C6KtYF4U88Un2XQPoSB5LBeYh89SuHH",
  "key26": "5eZEMecbf7nVv7GtSHNTgqNSj81mDDG1oGZg7RzxDd12zPFKy3prKptSP87rhDQfaZvjXbh5q1dCSaCbcVVqPH7W",
  "key27": "3wA9ooFnR33nqje8nqWSEihVGTEBXwUjbc96T8uq2h4McwtZMQ2xGWwzbN4Gu1qMx58yqKkxruz5eKAhabG4nwGW",
  "key28": "5oG9pbSjJCNCrGSKwZFCKxnNvcEtkUfAr26m9E4tvhtFqZ9ZmPHcQwUV5DAsvR3C7Qo13PkUGQvrZ13qzkHSTvZ9",
  "key29": "ycmp7YFR7jdBQZGEfTgYWTEVwjz8qq25Pb7Vwf9VvZNzKCdG5rJuHBo4QSAqNsovondNXA4R3zgU2uF9eB95wjF",
  "key30": "2bcgouJ1dheYMrcFYAZVPDs335kxdvPRSUoVADjJSi7XrGbxvDETy8pn16EuB7jcF8uRVpgi7VJ3YhLDKQoG7eTx",
  "key31": "hM9J25gNcj9dcfkeiSyehMDg5d91ptutY5qZWBqdVJqaLXgZoZiewKwi3XBK8Y12joNVmPCS6JtNGeAn3oWocj4",
  "key32": "4yuwTo7RquSXVs85XzanVtpLmmmyoMjW1Hejfu49MdCQx7BsbR6ndFpgQm5qnyCuS49hMuF8KsrC3xBTNmB9u7Wb",
  "key33": "58mpkqco8vfToUbXunD676oXtCGYuxnvY8jGHzvAJu7EnrJoZFqr3S22WSi8SQHDLvA3FGUwE9TUXrCkroyRRcwV",
  "key34": "3SCghZu4qMbDNbuGUkxDjzDaYBgcTRGP3j4QPANKtFbpLRPvMnjXsU1c21EAGoWhUu5pegdRBh6nE381FJob3b57",
  "key35": "j8e9n6RpqzJLpUwv8hTg5d9cCTPZoxp9U6FmkGDSzWsJtPpUZyYEEvjWsbdTij1smasdFrKbxLxT2dEtfejspPG",
  "key36": "61wdKkQmtruKPjy1573ciQkyWU66QrDQRskeSWMspSUHfLEMG3NPZVAoVf2URuPepTY51FforoT1tATQKVs8rBNN",
  "key37": "5rZ2F5r25CQ9nSbPt1QmS9RgkFsPinoCX4arE12PqPcZ8Hx7mZ6BSJTzJuQJZXzUAVwoRiP7KJeQgSRUXEe94rm8",
  "key38": "2hUpgdMhmidzmFAE1m8vVm9mGf7sU2aJqr39xHL3aFztMJ5Z5r1HkpZdf18eV2Ji93AniVrTW3dFdPdF257Pymfm",
  "key39": "2mnHwT5ww8ERndxeCKFvFnCv51t8dSwyyobXcfaD7QYp2pePDgxHdEP2fPcKwdch5DQ1GuM6g88VERijsSZSsTmu",
  "key40": "4ihs2No8drbYHVXhgyhfEYxTQ75sSWLDx82VtZoWQLBbLw22XXnZnJHFeNoNZrTmGHBRWMowb7yLjnDbZRyBzgvT",
  "key41": "5D7n7MGxgoXVdxkLeuxU5GME12zCH2rVuXqBysRFhRgE2JF8jV8HDGtE8P12CRUkHG2JRWFCNeVQaC4qbxoJsEBa",
  "key42": "PmbYZLKSq85LECogcaZXE6Y3CvbJRmawWuFZ2YBfuox2xtq1JBtYGwQDdiebysHAPs1pStarPcidru35wE1mHxc"
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
