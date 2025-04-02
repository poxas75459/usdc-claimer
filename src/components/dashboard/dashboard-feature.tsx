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
    "3viXGNsxhpNfUGPjQDHftNfEV5aY5xZRB1gL2wS6F6w2YSZ3wPJBh84abaU87Dzcqz9XiswbYfKstTHVr3jAdBPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tF5LhureFxvb53WdiursWJWLbiyccKeEmp8S3F9A3Q6nqKrxKkYfmNQu9iDxvPVogUjof9Kxnb2oeqTPhVq7bX4",
  "key1": "5hxDC69ow2m1HC2tDqZi2okLKmM44H3YM5vhnZbxnV5JF5iTgDwFPRXouGG8FQwH9JGbec5AoPc2EJJWX1waHQVT",
  "key2": "1NTZ891PV9BAKxJLmon96jRws2rVQtFLZ9FZR5DbY3JS6STLTHQzgbRtrpqoXg6JHsjFjprMv5zMUVzWunL8DKu",
  "key3": "teVmtj23keDee1Ye4F2FpsEJ7xf59NuPsrAzECQ4miq834y4BiXi6EBQnJTmJ2gaFLptQwHwm4PpGWppeVxQqLK",
  "key4": "535PA6FpD7kSANMoNMcudotRuKQfy5SEw31ZtZNa42kdZnWBrsz1DPFkAr99C3dEdxBa3v9R4qdPnVXcL8fKqC9i",
  "key5": "3vc7UXYwchGWnxyzxjF22vSkFsGXZVSRoQdfvC48Ewn8vjWmLsBQxzVceVPyM3R1wFVaYJaFQh6BpFCYJPDHGYsM",
  "key6": "2daCz4yTGaRjrukQrjSXBAcmNQE5qvJvHCwDt9qqf21h3xbYMWLt1WDiMA4X814rC8ZnPpxPWz4YtGpqqRwkG7MM",
  "key7": "2Hz4wxP389vYh6UfCyPwbd9AvGWuzmY4uZeYKHhoCbLZtp6H7yBUeUvJ4wvhxzK3xTUug8rC8dqL6BroCqHmnqJZ",
  "key8": "5gR7imiE5w4o36xwDVUPsmUjQZQsEXh2cfAkW4Xuhu4xfYVV3MdydyRxXphGz6AmAVGUSLEwVdZk3pGHtBLBd8jc",
  "key9": "67CXFCKEWocZGsy2gSgnMFRdcGQji88vcRLjJSsqyAqhryFWWcMSjQkhQbtT96HXvMFLt4AR1kbZggxoo3LhmjVP",
  "key10": "4FXXMy948akwPXt1SRzFDiCpZ8DQLo3ZpykH4SghyfwpSTRhZx5r8zBaiF7QuuV3LQsuacFDAc2uUfiMQSSzWQPL",
  "key11": "mWDzeHnysRJWT5n4cfNdHxy993SAP1BNtZKeJcj2ob1CM5vVLJ77cfG3VAL5uEYpHSyLVrnP4N8kSFfA57HETAL",
  "key12": "9MGXFo4zruGVSHBg9sNsKaBZebo5efXWPz8wzhkACYmate8zXEpMHwB9MgMb7dhK91ZTHKSxFMpGJL76eNTDir3",
  "key13": "3SbAasejKS5Y98zBFzGYK5bYJtKfkRkPaAe783aiYZFQzacp2874oBaVY6rjV9gHBqztEtcRZx8FokiK6dppqNW3",
  "key14": "6rxP2du3BSLPcGfFDkbxGj9j32bAyoXKB66gdVe5LibyxCQytQZMTvvUk5PBBh9coFzZnBMofE7ZWmS9LP6aWbE",
  "key15": "pR2if6ANDuynJewSuDFEVsBqAeHmb46pDKiWHZGaLM7zcNWe1R2Wh4MhHkz9dof7CWz2FjpnJKq6NgRqdNVB1Aj",
  "key16": "3AFnm2n4SryHBSTgtjCHuHyTNMrvrUkHY1dmgFgvk4DvKeg54a4eJagUzY4AKzTZJM33fkjB9uEESM9Dw2LruNe",
  "key17": "5rd5sokCWNHTka4Xhf6Xp2ocnRWcZsphGzehJVAp7XPMeMDxy4WdkmHwV5w4fruq7NXzpTZc7mEsAJbk2cPrRXVQ",
  "key18": "syV6Y4r6zTb4bKr6Bv8aFSiR1xbfi9KzcbpudJBMcyp5sck5S4zfeVygYSxch7WvLJwTP92474q7uZpUDt7jXeD",
  "key19": "2RQW1e3UnNi7Th3xGvTyPvBJBUwdZTR4tqTGfPvv6KtJ8EJT7HoKDdGDGmcT5LB8tYqW8KZiX7o8TDK2EAZPigz3",
  "key20": "55vQrDUv2BQZNCY5CBk1uN3sfjsc5mJKPrADUr3jqC8PcuaQqF24JNK8bRGmHPFot62oxSVnGahoDMcyAKBBA2MF",
  "key21": "61qENdHYe2oVJAehF57V2if9MMtynUdAenHyaMtKXnb2g7QehrD5pB7Y6cMUu8Ta919vDTZJ89SsNZxagoFvqgbp",
  "key22": "4PU55xETeEY4LgQnpcX8bS4kw52PtjQbBJV1ckxjWRDM7aKHn5L1AhBhaTEsq3Ze2G4hzmH1yzNHgsuks6riSjRt",
  "key23": "5EdQi6Av67YYJKUhhFStint1Xy16xvoyd4QfFrWcjtg4xbfL8B6Szn3e1BAXrAUrCLyjukZQLvBsGGV2Z4pYxh5D",
  "key24": "4qJmScqNGik2sdi1ds8PzcAhD1fRQLYC8ykEtCMeYE8LezgzE1pgiiPexCNvwH1Gmz5KgTyxPCGz6rX4HMZWPoJG",
  "key25": "5rVoTV9zhS9FPp2U7Wr29QCorSE3DLoPW18vvEBJVwHemQ6S8NPMMwkmPBQaNFzVZi8ipRpMmAuPxcSKTA61Mm1A",
  "key26": "62jRVviDXyiMY1xAthcbjgGnDbMDsK7F6eYL69ihZxptGyHLuy7JwwLptznYstCdkaggRM5TLv9XCQ9xzbvYSLPc",
  "key27": "3MZa95L38T9SCmvuJ93hwHfCTEiJRvmPumj4PLUsF8a3nPwYhSjqnXaTohUjdZVK8EGNW7L8sDwx1p8nc1xhGp7g",
  "key28": "3JiQxjpedNNAvLVU7sMuKxoTs3gCp6vCA6BBhseUW3tYoRR3gikX2HQcMD6f61PhREc8rHZov3oyJSb8gMzhbsSp",
  "key29": "yaaVVNX4y1NPY4ejsHos2phLaAb6QUMuHR4fqL4oyawAiJUyAgTFX2aUvy8725muiJE4qjzMNTvbzA9M6T7DExy",
  "key30": "42Uh5frgh4gmzF7jUVNfsUAdhkFMDJBa8HkJtCR34ixQKBZvbtrCWJVV8f5B27pfKARMYGmSjnm2XShZJxhQaFqf",
  "key31": "4zXERXBJZMc5eJ7XRGcgnS3zUFeVx57MBqKfX1234wS6txVDoiHw2RV44K25o3zJbJnVyBT2tqBzyfEF2Mt7YW75",
  "key32": "3YZnWWxK7QUUEcyZsHPrFJKQ1uWR2zML26VKFJELa117PZ4tLKBK8zdP9ncWLn3ThXFthRQf7G6jcfh3eX2oxCcM",
  "key33": "3AjqhSzRFNxzr1uhyPaamrcqcdax3MXCCCyuSjGDUJ9TzRkMhUtoS1E1CRGNR6CNctk5DD4KTpRn6M6iuHft22De",
  "key34": "1HQhhkAzLhu66RJukLqAHiNTJ2Vyz1cVnig9yuDTyJtdu8ipFoNaFzw6X9J9Setg8vekNnGPAuDzgVaqvq2cmyi",
  "key35": "3xnrxyvoaqGX6GpXoP1eE5HYyuXQxX1vdhDPomnie2vjyKoRPYSFZFSRf4eyA1RMv6eKzBxWGnHfz4rUa5mV4KXV",
  "key36": "25wsRMneXQLSqjn3BYVuz7DS4iRbUuNVEUmCkdXCbv7asS5HFc1keD8WvJJt3W7xcnBVvT4ir3ey1gREPHmchQem",
  "key37": "2t8kvPLHcXpyiDfQExWsF9RaWLCLbqPLf6hdadMKhgK8y6fK9wAst4AgYVUyWu6D4gYZEg69oMnscjd2zC6Hu92s",
  "key38": "5K1aBbVjzSYarjWsXU7KwjAMRHMRwKaNtcSGcZJNBCAVv9kpyWuDkdugQs6wmSrKQKKZ3TfwM2CEyemMB4nPykSK",
  "key39": "4aKLGqN2GCtxf5JuZRRYZpasW1wYrFQyoX1LrqL3KhFdy7tSoJuNHN7s1mjsPWPzAajnQpMCtpf6GEHfQwZ5HMyM"
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
