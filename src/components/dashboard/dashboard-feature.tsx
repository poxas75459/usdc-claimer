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
    "2kLx3EZtcDmCwogoPbgQ8pf83pgNB7YemzKCY9gzE65gecyrdei6LfGZ5N4PDpffHWG88oiKctVTXg6bfhSsJieo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjABGhXib4ZEoFZpiHZ6bv8rQmGHUuDi1V47Joy3WHmvWbRq2QtznGpzQy6QFub7QKE8qUZcqeozFizMHeKP7EL",
  "key1": "oLQLdChATN4XnvCh8ytqVYfC946d2UkQpDqxTQZnY9xAj5QrBpBBoGdHYo9C3sNoECntfWeseQZkjYUU1uw6f7q",
  "key2": "4EvG4idekNy7V9kSE24ye1npC8gYVeECCM173bdAY87t5EqZWGk3F3Xa7a6FogzndYjt6RpWFFmG26azdC5BHgHr",
  "key3": "4iv412hdAiV5d5ft6G5YGbw1p5tytRUNq4dftd2YAQBagRG7KULc915ymmGGRjejaiHZ2PNNey9K1sv4yRMKn4aV",
  "key4": "3iUV1nofxY9Kg1CzTiK94LUXpUeagvHpbLYZwU3UrDJi1q1A8XTAkrVH8659MkTKYGRtXRJVza12ZErquMvJPJ4m",
  "key5": "66LuBVfEGGFfzcWqdCDkaPabNgVSNTghK7X3QZTF8bJJC4MWqgfdT81SjFc4tNGaWQcriDpGrCF19vDN8Bvy7BXf",
  "key6": "2xg9wiLePPCgA6tUgxQ8rdEQiPcLfpKVrMzAAPkkaKFVbQudmMsv5Ncsr5fezf6muG728KxFhvwew2bbChiVyQKq",
  "key7": "UCL921wd6pjX92aFHm3i2AoJnVvRLghzFQpom7fHbtERbzt7JdJcZ582cusHHKWqMi2cmNWrmKwUZuPZYAxXvhx",
  "key8": "5xjA8z5ih31HDAzXTDDM35w3hjZ3qymbGBhEqbxyY38vwpmDN7SPZYFRU7sRonZvkPznnDPeELN3YcUgBJmz41jG",
  "key9": "3iMjt5GxVj5ueJz6z8154tBRhxcqWRUdVm3UGkGwYXv1WoM87399tgidcP7fVqj1wpgxpfEpsfEUFPwwbwaGPkhR",
  "key10": "3reTpUqBtmECYkRr7bYqRrxdr1PGLJ4vNGdqWZ1ov5pvu4A5EZnBgdMC5kVMWNKyBaLvVkJ55JyDKFid5JWUrME9",
  "key11": "ZyY6LrSSUMoNpQ5wS8DQmtsZ4MzDMKEcLwD5WBFFShtUKA24aCHmmoEvDv2zoSzLGjzGa7c9nkawPFJVUjKTQTJ",
  "key12": "4xpjajUXL8soW6iMc1UnkwCx5LLFpoxGuSRuxfjHfBCqtU4CiKp3WmnoTQaU7BJABFYgYY1oaP8dU8S3CK9Xbw2X",
  "key13": "3dK4N2M9nDoAzRsU7iN1Zf8QNFv8RgTUqMhiMzYYXSPe3omjRyRxrWZ5aAEhCgVAuZFzMJJNsGmZQxPa6X5uAKV7",
  "key14": "4KM4PMppF4YquigK6JJoXVWjvWHEQRD22HS226C2jG5EgLfUbC1r8HenCafoigoMbuRvvUKU1DjsmhAsir65keNx",
  "key15": "5NRprbnf2Mm9eujJQrKxuCEkooPSmyYn44ub6TEYrPQXta9ga3wvTHKLKhF4knhuGZYAF2YjiiT9Uczjsr1VLU5k",
  "key16": "3DMpuLzwBq5moBQTNmQpxDG3mMV6wW7wLyx9uRtCudvMaUenKeaGfeMBkw5NGdr7AvX8G4SdR64vxiD1vEeoAcCW",
  "key17": "5Y1JWK4MMKXAJwh9VxrojBSgvNnKA5Px3pjLqGyfefUJfPmpXo4ptBnABNB7C2Epgp2gJxqPeVG4JouYNeHJGcRw",
  "key18": "3qEQ6mfKApmHFv94QcAD6pzfb6ZDK4YevbxYknm5Q61eKVFdeMWzBXyctGjzyofAhZJmiG8jSSMLAZhLxnBnJQRa",
  "key19": "3MwN5WTU1SFrC37mXjXxDvGpNVmQiUKiAKxL5czoypihtREQvkpZCTFAr6oJRC79w8G62PpAvJfAomS3DieaTYL7",
  "key20": "soxTx8tb4kKQe6XVpGxYctYVK3NGSowBx1sr3243FdHKuzvBa6VBzYAfvGMLiC7Kk8yMKczVNRewLNgkYzTExCf",
  "key21": "2mZg8bzMri8xeS5gkfjRR2ysoEZsBnnqKQtgv966ddirSwqu8ujSHrdFeQg18z9rBDXb5XSeYDqtQkriN5i8GEcs",
  "key22": "5q4nf9vTNTQaNFkpuyExLNvSUqZnBtKdMEpz5Q1aWrbDZGZXKY2reAfC49qRkPmKTZsnEsKLZSLSdzWp5vfkpkXd",
  "key23": "51htuPJ4zbELd1gzbDZWJX2T7uVZr69LW1Ww5L6qPNC2anVCkZCjmocwCFSNFFtskEtgBngtsKaF1C5CgbtYAcoq",
  "key24": "5QqUsU3WoDoN1rNxbnT1kVQCqBDghoBVvTJjaxMaRZ7st6LE25mX57atmzcw2t3uhriwTsm46J9SDxuV4UsaRkwJ",
  "key25": "3bbNVj63MfxZHnzrK31newqZf2cTmQhGi7ZoihTLMw1dpq4TttWWrTkhtofj4bmFgfhaok36Uzymtuji3Yomv8An",
  "key26": "46fnhWsSt3YiCV2NFqABhDUr1RD2zA7yK2pvfhTLxkiBM5YqwjTkPwm8Q9Ut7AcbA64nUP8CH9dFq8sVxAEXuxgB",
  "key27": "4FEe3f9Z9L1By4CnPmhTyYzTUkfSe1QKwFYp51dANMWxEX11gdRcXKqEB9fGaKnmhh4suuuvYXJfJk1xhw9ZhAYa",
  "key28": "3AJ8esc5fLqFDA33qDzWjz1Pm7PoBKyG66qaxKczfdDgt1J5QANDvDHg9KBZZfBNz56X4tHuSzhGQHbwGaaveuV9",
  "key29": "2kWmKXuktD4N4XP5S35R3wFC9ZSxzG2CM6ZZTh2qUEaMrTbaHhBvKmdk6scirttDHaHJvWsPe4eWohUWYXmPA87r",
  "key30": "32x91DnQKw1cHqiBLERXiS8WSRAJ5w7zJYoX8gLHBpwxq8iWmvybwLhh82ka58vunaEp54HiR8VXzUe2CGCy5XN8",
  "key31": "E4pXhob7iFw6tjn6GnRYmeVteh72WG6qGuAs3uKM5X3MLMkXYB1wVrHnzySqCmQAJ9gEJbWb4RqaH7W5iFCSZZH",
  "key32": "3d8bCm3yB39whC77rVaviZCMnxeKWtzwZbHxyh59bCpAvt6UNV9nrCeU9itvyR3mhHfNXBwmFSk5VQWyJQ3MTEP1",
  "key33": "5gT7W7CZ4Vy7Hhm3RKa93ktdVpGvTK3Kk54XGgFfxjFemqWx2phrCGqjqgCGQDVBhpUoo6mFLRFr8Fr4binBbbBW",
  "key34": "3sfsAfpX8gkDFzrxgJnrRbXmJwcPJAa5uiFXvfbzqziQHcVgCApLjPCj9CA7YU63MCKRSrWzjd2ERTdPH2fKihkm",
  "key35": "ejEW42518Z83B1W7XYo1kbucjM5XniSo3RejJjhzis7BVc4zzxYzKjgaeDLsaAbo4VbWnz3egF1amFAMAF6ue69",
  "key36": "4oGUx3WNMDsfCpWixbQRByZ51cpe87gjjH7k3FD1Rdxu5TQhZEVh2ndBx4yYYV48zB22xAKDDEV1kxunMkzJhtzT",
  "key37": "3rG3Zf71WXKaf34ibVJU4wQY2Jdp7MaxWkAwaRvreLdrqUUx8GmQVFt5WpZxoknKVyR9EhoNQD3xb3xE35Zb66yB",
  "key38": "4DB2tnpcrp2MXCV2UbwViKcwKurktGgy5X8Jjgu3bBXWsZwHt8MdwehqHpYNckXRLv6LrayGkE8JW1GBtYRtbA5M",
  "key39": "4kLBGpPNztr6efnbZ2wHPrQX8WKLKspQMiV4t9M1cKKKLKfam5wdYKULTBQdJzEz2WvndWxf43wB3i2BZaAtRVL",
  "key40": "5JP995ifSGY1R3WC6SpeFqpGeXEQD1JT44cAn6aeqMKuw1GNFQm4pjMDvmdxAQGYFTDDqoCyYNHd72TG1uRtJW5f",
  "key41": "55Hr6fkB3qzANuimUqykZcGQtzpB2yevX3jeHH4pzUuo8Gaabcf5K7pEjjiezUHDn2K99yw7fpx5eaUffxXjhP2M",
  "key42": "2NKad6fCdmWfWF9qgQBVCG4Pti7mHBsYuRpMUEpBSMH6yq4xz1FhJcnFP8k1xj7YSY7B4FhYvG1ysae8jAF2uJLq",
  "key43": "2gyytgDVW9Vnz4NZfq98k5C5Pqze56Ju8e6MbRPFqCA51ezZaDrhCxBJHzGgWRHXUqeHDemufg4tZpQCnFJNecKt",
  "key44": "5abfVfNASRWH68WbPm5dJG5rMSGxMgXsFUP8Ubp9vHhabcTfkqwodezZYzcvUYnpzCRvpDBSBm4T5yu8zrmC9mBh",
  "key45": "5sBNB2sJSyxLHCuugNyz8ZSqikgiCDsbw6haKPwwAkz3cuqKceTZTxS6ZB2NXneNGk3uArNfpGSY9ubUopnzVLMN",
  "key46": "4xmSUSYznPjDXAWJfWY5AMn1RZ9hxeCDaVhgg6tVvpCSh2a87iqZm1L4Ag3zLFsJyHrb4ykKCrSX9fXmtV1avBjF",
  "key47": "2RN21bDsHCGNpv5A51mRnwY1G2X9Cpfq8ZrzX5ZHbsK81UfRYhWrvpd7K18Ka2eH9EdK8ukEmk9HnFiipBUVX1xX",
  "key48": "2PYRQ6YwWn2YYEG3XPoEXkRA8BqoJYWNxGccaofQboTPSdE9a6vpRHoqfgpbvEHKqn7Z6UozobKA38kcwUaxELqv"
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
