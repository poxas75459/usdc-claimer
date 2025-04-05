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
    "3qDsogBy53f4MCYN6sV6DrrZSpDAEgj7pipQqWXyqeNuZM9dWex4PRsrUZq1yeCEdPYzPDBzCKYpKv2zRn2CCYFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UFH7Q2r3WBCxet7mbTHo4pCj8kZQzoHMJq1kdWvv8JwTQQFo14ceGD7TLk2MiftfjmXrRcJuSUqfoabpDvCaR7",
  "key1": "3gLfwkJvuaVs1CxWTLMnyR1JrUg1AQJALT6KyZCSXsJVM2m9sizw6Mqe1Q66maWfxzGSs7XLpgTw63ETkdtaZtXz",
  "key2": "qvU7h3GrwViL7tXiezDrG1WvVfvZwxyJHgc2SghSjeBdtVtSnwzTT6edPkgeJXjkXAq1rmNbLi8GfHRm7FQmY7z",
  "key3": "29HSfUJfDDsA6QM2yP6CVyn4gxj8Q2P427hZBo3aFo5BY6PyCGtHzkota3YSXM3aadhZ77uNcfHYfxVFVEwKbNsK",
  "key4": "5pc3de82W2ZjtzMvwznMG8CoEEeVLUmaapFetxkuPLfzZrP8BNAEiMvdsHwm62oJAcPaFqGBKRSRf3GWJGFWHWpj",
  "key5": "2yYyR2skXWtL8DJFABDrEfaBSU5X4UF86Hr8kqmNCEER5jbjj5vo7kJrrvwtZef3BFYVoX6iBxLv9AGKukuvkk4e",
  "key6": "2qhB9ZB8JEtrDdT94QDrFJj4eUN53Fp2s7oPjr1jdLVYSBa1dUpDEjE6q2ETcZXFzKKH3S13SXqzkKXRMF8PsSuc",
  "key7": "JRL1bVTkaPEVu5Armwcs1fEdJPPKSb3YMRcN6WqLR8F5FutLunrLaHt6DQpPHoEA4u9ufqrfYShzX1SQd2GXD5C",
  "key8": "5Z6mLnFyQEMYyuaiRRHV7NR5PEYhfrcgnW4AeF49c8GqJPzrSMrrYtssGCyUD9riTpKuKJM24SycRYh1bajrKnjD",
  "key9": "2syXeToidRt3priphiq8zzzbHqzdQ2ERoRAifYqP9EGubPWzBWL82jTjWFbcNNHd8rxx6H3z1Kbf8Lzx3uJoaKu9",
  "key10": "2kRWj52GnBpqmcGGbmNLtvUVhrabmLLoaNCUfd9e2UVenn6eK5SjTRJYsV8uWH4ekbkUWHTNP4nmBAhJ7w7C3Xxh",
  "key11": "21Y8ssBxkNGWG7cwSiBGvbhdb6XbKDXK1XXaFYyJ6yzmrPZaFNEcDmX5TvCeXWsyzJXiyhwACbTxysM5JL65WCYu",
  "key12": "62BfXL2EdBGj3Fr48oqMHnkBkoZ1CYtYdoMVQqYFqSp7Fq8pwwXjmKQKEm7PSDgatvqq1QvRfNrCen8HN5uWftXA",
  "key13": "2kPSvSbM3a1WQ715QxvaPMCA6goxcjZVS9CgrhYc4A1jgLUxGrcodpNnfExcWQXmXq9GqDqHwwrZJozDZvxAhJiW",
  "key14": "4zfBVvWZ8R4kXhy1fqkdBB8M2T7CK8npDnTTVG8qDdwZvPhkRXdkBTofijayxkPjzcdrAEKbMbPFnTzt2DCG4Sg",
  "key15": "4e4nT4QHnvmY7uw57fBk3YDPZCaUESXC4JjeHHe1VfzUxXKaXsYiiizHmYahG81FeSoJpFENs8p4Ee4HK41h6qVR",
  "key16": "679punMKaHapR9iudgyfPcCqqqTfiezCvLfAts5SCMsUUtCJXivq7iynKhvJYBbMDpjQz6ygGSekSrNEXPGyrH9k",
  "key17": "26jqnV8XVZtyb9LpaCA1TBkMKiQ5QbP7XqRJjmGF5uzEjB6XwuGKFELzvcztMLrE41cb8JNXAkTmsRrDc7RU9zvb",
  "key18": "GUH4obRVkc5tpQJWcP15eTpKP2ZbnmJCqDfHRy2gU8pgsWDmyr8Ycd6Jp3CTJ5htNqXpgdK5NoBaS3WDhPjem3r",
  "key19": "4r7AXzJKSPqxgNCHwwVEuarZ7L33d8kxKE5tHgBJ6QWzceN4URhZzmvz3rogcg42W8su3B6vzuCMnt5swsMwLWwX",
  "key20": "58etD4QkgNsqvfxrMdMiy53nDymvFYhAjEN4Su6dNh6tQSwyxEJH2TMkh4VbDzj8Gi8YUh2dFtFuA2mHK4UQHgqB",
  "key21": "37R5v4prbXdLrhX1uWaR8SGz1U7rRDWUXvVCW7mKmr1VyBipaLwzJsQ4wccD9aZtVLkbwPHBNTNmqcpB1kcJGSeS",
  "key22": "5rt1XxShsbGEMafD4ecT26rNt1bFcvF8XN7Ji1WXYXXe16FUBdw6wYiZ4s5WNDuREnxHNKQEh4ib6tr9My5RFTKB",
  "key23": "2yaSB8Fg57tYNgndMswhGVj1ppGnsurAHeNvXejKSjSk14q6vrHYhmambYTCjMdAQaaZ6zcqxteb7qEUZUjhzoR1",
  "key24": "4dJw6UwqcTbuiczYebDCwbEpE19XWS9VNaC1dkdCu8YFWFiUN3VWE5FuTzKH3oRgwEid4etSxfKsSCatJvZbW26w",
  "key25": "4sNZ7ZoSW4ghETHJHp74cXh2CeTCZSsWiTi79w8NQMDQsSRotsKWZywp88hM8RQivoJwvmzWDgY1HKZ2Ky5rByVs",
  "key26": "WMm69QqTyYE34qo8DmJq1wi7ESiSpzp6PKDtBjEUX5F8pV5MagNFugdX5wotp6PALju9UntSv2sSxbwui4fVHLX",
  "key27": "38DATkSAVBgn8dbCBxZHXCBBUWYpwnmZQWNTMwUGg1JLR84T6yJvkFFK2D8FANG6B95cfnwZrYT1YPQK5V2GycFn",
  "key28": "rLzuRrxUsb7AjbDQqaUnnR8qThWSfbq4CLGyADrrypacpvLiCLdn4wFLRGHsgnrAqgesQm1fDKNWd9SVEKcGgyQ",
  "key29": "55V7uBnm8jxzDfMXEbzZLbNAT2idBFyZaA3rR2gij52mnz5P14pt2r1s3d1zMJKiTC3pVLLucsYwuDfjQXxXSQ8r",
  "key30": "2WNSemgNPzeckMnH3SzpRZnW5zuuB9r6WhCzR69fcCxWrrPuWNpW7LwwmDrHJUmYP7B37sNbnT1AH4jghBLiZq3f",
  "key31": "2DRfoFtsUnQBfFgmmuhYF52fZuRGctrzuzoVAoy6fgFruF3LEK2tng1FtAA4h3CfQv2DBhwww2gcbMaAmbd6H2Kp",
  "key32": "2SsHs9Dj6bsABxeDU91cTGax6qD4E954Ag1bUeRNNeYmteqYf6rUmhZYnM5tJYeRuHtEcFfNiyHvdvJwu9w5Yxj5",
  "key33": "2mUq6rwHY4J7wjVNmZEeHubpHCkTLWVUSUyxstJWV48S7vpU1n6dv3DQmWAhEPMyA7AKciGRNWYcxVvE6rWGPBdt",
  "key34": "3PTHtfyQRguJUvCeWFxrCFU7GZVXSUuokatqtQAUWe8cJpjLxQ8Bcnmvg94E9rFaKtx9NSvg4xU4yCEZo9VwDRJb",
  "key35": "5rbGrMc4pge6qaMTj81uz1PAW1L2CQbaneVYzBHpPyxWz5Lu1zYACwfNuyuh464dUZFZSZyriBRUWsEnH4GWKXFX",
  "key36": "57Puo8FTcejyBdnV5aLohFQLt2tGzhkYR7xC1VdHxbGhvRmKNXF6UikucWuCEJdqPa8Jp51fuy9vDZGhMwGVPRm6",
  "key37": "2DjT7FKt2cc2ZXTSKjHfmkvzTbYjjLAMddVnaGBmSF4Xh4BtgjvwsrCbYwPXrf1kQsgtTfAZgLU8ESit1Hj7zKRB",
  "key38": "3YY7DYqoUhFbvFHEuxW7m6edYu2Hne5nrK9tupVWR4G7J81q7ZBSzyLdLxiZLxsDRdQBsZdy6f2Vg8L2kxp6e6Su",
  "key39": "4RnKwmAFzmFiHFgEmFH1Yq1ZcxMgs4s62FTZB5tkJFH4BDMtXS9fvgtDtqmz28Y2K8vFzPgZkBE6LdWKc6VNviNB",
  "key40": "2Tg52Fd6rG7AsFaCZ4LUr7WZ1PKs8JCu35xKBeysDsCjQh4mnGBX9GoK1caPFNNFDez1qFdYYFuXMmKwbPFKktan",
  "key41": "3V4EwZF8jAq7TWefMVDch7vw9gqEvYcr3p6DPAYL7dNKTUMvSAzruF83NYFG5ZFNtnfWgoTeNiUbHhcgMteQFgRV"
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
