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
    "3JUoxj9BiuizdNbLxq9ufY4gZJqHG6on42LV8B8jp9nxWLQW9Q5vpn3m3bbrSDyQweoG5Lge3EFnnciacaCmKqXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPbzoV2Tb4TBrVJ2Lwt6XksGrWVt3xB1sDCNDhYZU5bk4chh98ntdK12hCBqUv6kq8cr47ciRJcvFeeW4x265t6",
  "key1": "3fMXTgY2SW8u5gQTq6Q76smAJt2Jw61WEtv14MBZvmdUdCDzELvW568UN4yLYFDg1VVZErf9NSJowwWoHVoFgMDs",
  "key2": "5hF4wdAsQ9cyBGA7R33uP4u3vxZxXL1m4AVMk6r7ihhd22i4QPdbNYfGRyF1H7scwyzod3c8RTRYiTD29eKbNvcG",
  "key3": "3qvkonHycrswgZ6Y5wTQ3CS7V93KV87Mf2p8iYNb1A1VtV4dkom1GgvhcGC3hzrRE4HhxhCCcDZBEQ1kFnrpnU3Z",
  "key4": "2UEGgPxakx4FwD8CvFchuoqwyzPSLY9VjN971hC2qB24ZARf1dcEn8im3ECsQzDmczFJZzY9zKDB6V6ekeaSNXZt",
  "key5": "4YGxHFnPve4wLMG5eRYsKVNhyzpwduG64k3LGFXSUdMY98njVa4SbGJR1cfa8avRv3QFMfLw1eivg3Z6SyyRuT1A",
  "key6": "K3PbRikTZuKNAoqa6rU5JD8Y3Nxd8hToGgc4YkMomUwLB9SApq4uJ2552cAUJhg9HL8w2vvriCYWDdZgrGPRWK3",
  "key7": "4b29xivkiZsttYN3YZWsSp7NuwXva7GGoX579aNv8o6zLvYCqRSZcoyAe1xn8gionFEHw752AbXXgvnqhwYfrEwb",
  "key8": "4R31hs5hLGdMtCjCFwuJVHgDaTmE6corCsaCqeEXcYvh7BLft2obuNbNHVw5bvSthnjyo797NFJz4EmffxN5vepy",
  "key9": "48voaaAQZkETSmYMuvm8ARkfxueJkKRWTemrAyRfyjK3Q4h6w5T5hfRLtKBzfWKjFsu6AuWmwWrJSABJbb3CFGzT",
  "key10": "3bCfYoRT9xvLLwBvxk7wUeCEZe93M3tJxT7rMkkpVVk9aGMvrwp2viwBEQDbJn8sihjQ1Q6fDzEa27mGqVNBuwjo",
  "key11": "zNfLVpN8zMrAFp4mcfmoQYsNtxvLBTVaTCBv4C7vD35oPdL4ueYYqH1EAFMkJ9ihf3rpYPRmbDnAKpyhTaYHrpq",
  "key12": "hzDwcY8LjBG1ZqThP1q8ZazEjeCuqMkpyrhGVNRiBBH2wBDz8z8MgkeKePMeupYigHCyCbqK94PtJ2FGVYsJ1SF",
  "key13": "3Y3sLWLvunb9gx8ura7hAUTS6tp1qbPeDeWp6rHV7AF9YwgcmwqHkCf95YHvrhXXoUYgMLLPDwr4182r3NjhZgS3",
  "key14": "44UTNN4rfhUbA6HnSLxAWZgmB1YvkV6Ka9TvnDi8SesywnjULG2M4xT6j7AHuztP78ybVc52GjaRFDaCiLLLSWPQ",
  "key15": "4xantAHywQSbcrMv5SRTwdLcwSnMz89GR4kqdgmi4sm53BFH4RpbkzMuMZbLtLrFvVxWBg1293Ti582znPKkYW7G",
  "key16": "5YVBhVHESzHRDeLGFUW4EKNtgSEJ7cHwJRmK7ckYuDTmwiNdnzhR4pXQWkp3jJkAKwnvDHUyrteiegzo4ccKkaYS",
  "key17": "2tK25skWb5rqwmKBYRQmt6QSixqaXNh923zSVxigGipDrYviDrHc5uGSLQwwh2mfKSUxBPQEDpa35GNQoGqbJtUd",
  "key18": "5xtSWYTNekWFSUtU9LYgMCyMtpzfbjHPpCqAD6NE96GpnvVa3TxeWYByJ6FDft5FUh1sTjx7YGomtS7sBxPyaEaf",
  "key19": "3LomgNcSqGA83bBcP1iLs2m3dkTHPngkUxo2RVSQuuzBcU2eUFbdVozDfwsRBTseetNLXCfB4hfArvbVvmzfwkH",
  "key20": "2guSbZFmvCBUtrTxP1ij6dyVTapDv9S8NwujfwXHH9qQnSMZscidFVQ5m9Zqje9nh1fce2wWNvSPKWqNiHUe4CKC",
  "key21": "5Khnfrmt4AQu8scbnuc3chgjMmXCiqNA6rvz7RvThuJU13otPZKhPdoCHjANzvcBoCjsMNxmNcdcX6oAVrSzUj3f",
  "key22": "2kfutQMNbdSRf28Degneb1hp4od1r7RmDeaF7atoAxD78zWpw1K9xgKdr5cgnTYgwLjb1YjCDzjo6xAn6Y5vPuuo",
  "key23": "2hzKDcNZmEtvTaCEheSqgMT5jRiWwfkrr4CZxevpaPPWyA1ERhrMkVmp2dxqdUmTq93vMHLnYCW6bqGL1JAkqNZy",
  "key24": "56trLZeH9CPGZxsWmeZBRUTgP8pVxa7vtoW6RQJWCuSmazvAofetzVEYAQ2arDYExzCCnxRbXm84tn4jRvHB8tyi",
  "key25": "3WYkgNogTSYEMFe3tPqN3MfAaMAHjLgAj5akiLkVcmwwt41i7WUG6Hu45NiYL8kxbVyw5RrYzjw4WAaf4hvfVkuQ",
  "key26": "4bB5HVTMbXFScGHoUy7xyjbiJbv7TQQfs6WD8RwruaipMAyLxec25np5Hgmvu2LRC4XifwJiDSrJgkdToGoX3GMz",
  "key27": "5335fqNDhtHS8kjVpLapiczEJgxdMbLfBguVdQa9DQLng9sWQcjcdDD6zcpE56ueEnzc9RNdMWesyGwwKqku9Xab",
  "key28": "422dj493PRtQqvcuUCFh4UpibBqvpcZ6cPRbJatP834M5CxdZnjTbs6eDVhzANvVmXFWpbKxxaEaRf25Z8CPoxk3",
  "key29": "5ouUPBRh4kLoAyCxYk9cQtGKg24dcDvneCAcASMeZtuVzbBoRFC5dfp1Z4DwRpW96fdn1cheTffwZHnCNT4d5QVP",
  "key30": "3L4KTyHCzGN5AY3NdgGMV6ECyJ9QaUTPs75xTUJ4U4o4rYihimT11Yhpi255ASAiKCZtyvZuoqbzA67kSgCjSBZT",
  "key31": "s4BabBMAHKMdkY5q3k6v5bT7DrDkzBJC9mxSZcHhLuh3dan2pmpXhDaCtWV5Mr4wWqUf8bzk43QcS2263qAz7M2",
  "key32": "4SyA6XkfQ4T79K8i2PHqJPnWN2zirxPMU3j1toCmmiVdKDrS8MPi1At8GNu6txAqPpJQbDzLxuCJt7BznWohGpCp",
  "key33": "5X2j8XAB7fsn6tNXyYfJt5GP1xBmizTdEXvCi5dDrWvgK1EQUwk4xJahwe8ch4qt5EGPF7HNUtXg2UhKoL64HFjg",
  "key34": "3GvCj5gzzKxc7yMQPGFkEKyJULT8D6E9CdypVza2yKtwQZVnMPKFyPoE8JvCtBANVSbN3WnPwgK3fwSCq3HMGYmi",
  "key35": "UAwRx1Tmv8kkDeCdjQzGr8pUaa6kLCcDgcC4dTJsNz6wY9iFsQ4KCgoQ8pV19K83DR3xQfP4zxCiC6Dv73cicer",
  "key36": "5YXhgaXCVBAv5mwCm1CC7BZGEfi6r4bzKtdm4TyTGarwUnZQq5zDRqpyWwhM2ET8XccKYBAGNdY94VxnArnurcL9",
  "key37": "3TTakgHMbkKwvEWA1F2hGHGfHGCXrgPLcn2B7mEvixVdMQbBSFdY5gGb9SZ46AYeE75k64dEFkEYaNKZSAqoLytK"
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
