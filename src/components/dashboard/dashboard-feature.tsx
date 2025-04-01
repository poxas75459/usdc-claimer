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
    "4JeztiH5xxx5CKtifnGdUnEmytEEyHQhZ28pkY5DkSnVnDbBNV7UJbBy4CvLCrXfF6kpzhFSBJkBLmBGKwvGjV7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcrueysAogyLeBbBMXitQHucifd1oKWEjBcqyrAK8EAk3WjnZKYkMTfMHfBMvNg4ipfagoMXPEkWthNr2YcN7RT",
  "key1": "5xsGWgiatx5aMUraSJ2ohdCwpeY2WCAzmNch1MQgPiH7K7hLfW5X1gU7ZCo1yEJx88qt8P6hpEiB3XpqcqHzu37N",
  "key2": "3hAfCydoijz6rZD9bLQxVJW29hPRqyDm5MgbAjmLZXGvjrW4LMRNfW2UQuVR3d8EvbH28CsK1aEVJDDL5f2PRKNp",
  "key3": "vW61pTRbUSEkVh7g7csnFmZhwGEgeBe3ySHYG5F7DC76LZzA1yYHy2jpJpD3P7ZXG7nPB7cvcsVmHkvf7xLBJ9n",
  "key4": "MLo5FfGWpgQ1WTTrXNwVxwMyAePK1J8mthbp2XGQM1UqzPSQ6Cs6XKgHxG8n6Cu7JDhj3sbVnuwPSD6t9LzXqSj",
  "key5": "4d9Lk1ZL4gS1NTABpw1Qoq6eLutGjqRQARLVCzoxwVz6CRGbPkwik5HSe38KWouu1XxFToJ4E79yBr4Gf5HDNoxX",
  "key6": "28CE1uobrV1vY5kQU5xRdZcLsofy2EK7FM9zxgphdn29oZm8jyUngacjyv9ZBFVsUBwqQ2f9WUiTQECZwgcJGpoH",
  "key7": "3ZgK255Va8qT1A5ctnNBMFxgHG1k2LgYfvhLNSGZwAjnvUaDirT822EECvyYCCR1k3CDiPgBS1fX8qd2cpc4ZpJp",
  "key8": "YTmp3RG3X1oSAeM8kuvobVuLtRjwX7ELzKtay3jfhYbFpG5Q3cAArieffTbTqR7bW9WmsLTJ4jXKAQZb6FXe5Jf",
  "key9": "5517hE1VfNbGqqFT7g1XaYbTfsM3xzqCbjEHh11FfjZgoHrDL7ZC8xLcTekJmc1GRByTLRxRDFEGokfDukbdx5VB",
  "key10": "1wajgvDNnJQ7bdF58B9WtEXmee7xFhxH7fHtysnSvmkivDRcP7NPUEDtbjbMDQncQ7oDpyAfmbyRYhMBKCPZA8m",
  "key11": "maWPkGUk9nbCR4ka4ePcxbxnPPKbgHDCAJj8iHVQvZ4omQiQ1rp596sGq2TsaY8CaKwM5LzVY19kpy8sd3weK3r",
  "key12": "3V4HZ9TLcUpt7JMdujgqT3ujoDTPU71rS87zRKaGh8Xzh3C3Cc9ZNNvHgBigJXwtQVJBnhaEz26ViQp9oNfTYD2w",
  "key13": "4xGU3oBju5CQXq9b39rjKPquFxExRLzBgNNzGcQT4zwd77ufqfcooM2aWUFpiiPJWW329ShKNktkum7WXJiL9kA3",
  "key14": "4K4mtKdfNwBmwL2U1xioC7pxKDj3fADJTHPQGw2U5TrDLvYiyiXdNwzMrhUdNv2SQX3KczznM6DyyVzT6B7cAz48",
  "key15": "pRyj2CDPeNETXqmoZVY2hcMq8GukLK2x3oB95grDQvce4iEeUMDJC5WvCnEyY1GCw1zvbCgYjRrQSibW6bwDaef",
  "key16": "j4V619cfELPma4EmQGZ1v2fY4PTi5rcT4JXbQigdSNbbdP726NzU76YuNu3z8BSgz4fDUCfRa2cHRKbWn8cPacy",
  "key17": "5cFRrzPFYTfQFCZSnC1EaSLydaYVQA9hKzA8MGYizAfyF3cP7GW1CYcXfyfSy3ydrSkKcCzE2UyziUpAHYY8Q7Ha",
  "key18": "63PgC6DxRWZ5C6zBsvnGqMjCndRAegwtGiRaJbsn7gNzo8yjquKbMGjXUqmahg2BHDRniHm8un3H7waYHCpCiSm3",
  "key19": "3TjhmvMsiBdXs3GAKKsWxR6rGtA4yYJx7hWWg9ghc1uQte5CCsyeXbXxxoRSmDz2BhXTgmnQe5zS5dTEspY9oivf",
  "key20": "5vf9dYnpU2ca92fHubgH7T9hBzUGQGnkhNbzdGnLKzchVhAAojmAyi1fCwjpGj1gdhMktGyrm49pNQhE7aRao5nB",
  "key21": "5mTbMJiT97jjVkzWhyef7dfGh5bt8WSrQWU4apxqqXD57teww9AQCRUFfwF2bCSN9xJi8zsnZrzL2SewdRu2wmkY",
  "key22": "3CVdf6rFSZLSxUZGVsaYhEQMv5bVbP7T8rt8nScfUGYZLPU58nCVJaAtxnEusogQZNEZwZaTWEHHXugVUrQjWmyR",
  "key23": "2QRARm6BG1RCff2kiRC5B65gbFRnBU5kYNBcEn5UTUWJp81E7yjkyZZk6scUMy7puxz9CR3UNeFPHpUcNxDXRqTC",
  "key24": "3rNxXK7mnVo5cRveAELYUW4vVjuTtbw2EJkUX4fEEduWr8vh9ddT2eePWwR2nEs28mXd8jfZeKLTEJLvuWAgBAq9",
  "key25": "2G7q4yEfjbrah9CDfNtYn6wKRAHMKNzYzHGYcArmsnckS38nA4pNjjygRa1SkkTkp7tyhD6criSkA7gin54hYE6k",
  "key26": "41fgKbbzQweu2xCvdnjNwv345RNEB1BcLtFbAPeh66erq6yyZ3op5GwczNRa2AYnZXGjw8CQS1rSXLhpEAFTxeWc",
  "key27": "3yzu5U7YLv4VYv7fCxz6wurfkspSPq8KmBhN2t233kvz2TuanPdq1DKdhVbUit9kJ3AcgmCEPnQnhve4bniT5WDg",
  "key28": "39HwJFvTVfyt1koso4pyf357y7h21PixaPeBea4aSAYT254eZVvcGKdmcU92YGraQTjYxnpxh5sMRRgTMzJipnwv",
  "key29": "3TQLmg8jgF4PdJpea8Uig9Jxq3nkEhaXfGubCEZEiR8gRjkiULUHLg8eBvvcQrkrewZPrJie6qLMpN9sjkfqUnur",
  "key30": "5v6uoWCRsu753mXJDJrcRtwZkXaFBCMnZQyhijHp4f3oVFwng9K8vN1Q9iMPVqruqvqNbG92ETGZLrwAoaxLSo8x",
  "key31": "4d6LCVTBQNhYrnTfqNPRCxsG9CyF6rFyq4KP2e9SUQ4fADdBH2DEvgN83PKQWVa6Q3D577T828X8nBmWZJXYPMKM",
  "key32": "2kcJib3trPWMWfdEuhSnjbEndc7Xej3fsAAKpZmbAo75AJHHNdXpALi93e1jTeSGL1onKps2eNi4Nf7jpkWkNcmy",
  "key33": "57xQFLuZMZ8pJx6mG9ASUCg4ujbnvxasDU1znLFdnc7AivBbNDFtyfKMw3YHUUmnpXYjborCrDo8n5gQLYENno4A",
  "key34": "4vRzcgoHqNQLdLnzqhriMYBALCvCba4bES66ktGyCQ8g9QMbbfxiLVuVEtjyD1ZNDZaYukCQJLkEQSKrV521s4Gn",
  "key35": "3JwZ915DFaPJkEDj8944Me8CkkpXhaipHXTA93f2hDnbXJdVVRqVrVsujxKdBQ2KTFwB7xte5n4cNvJ5Dn6x7y2Z",
  "key36": "4BwoYVgGtkLWsaUGpVSGpKL8aX8TgsTFiKtSrgaEMxL9e17XMCcr1w2KAU6s1xwLvh4V3YZ2kww86jwfuGZJejGY",
  "key37": "31Cr8EhcGFtNjStfGGCJFFN2Yx53PKgi73yNSNs5Zvtt8chcahZ97QoKCV5CyJnDzo3FFZGvbKXXByq7m7hMcxT7",
  "key38": "54ZL7j51d3D4Aa2mzy7ExUiEwXyqWfStQV5kbzdnVnAJACYb3GkajrbbWE3r3DptCtLNxn9To9HJzVjCdf3gQvCc",
  "key39": "5Ej7K9voGkNJqw95r5vyGhogUaaWc9oYs5wENTTftUw6ZYpPVu7BDRSpA4HLiK4YNQs1EXo53B29H2eXkrGWgvp",
  "key40": "4xxppXeBP6xvoLb3xdPLmkwuw3vfXpZXrwUGfcwdW93oFYk2qEQsF6UDNZFufSUocYnKjA9r3Quonur9j74kMogG",
  "key41": "5Djx6WadtLkeF6mcXZSeU4SPkzddSk2K2R85CVA9NoA9kd9rEo3btTT49qNxswasAj5duuUrUuW57G6rYrfCT7wT"
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
