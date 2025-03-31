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
    "3rRVhCE6qrB1KgAFY3cx9sb4yV5R7r2qXH9u6ggPFw42sBarYKf41qjurP36kv8RrPrEnV4Q2NpAQm6LQmpJiXi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NzVcocqu5NuLDmXxWrAcBraZuAyFivPgv6t7S6hAGRZkJwvsmPFqo4YHDiCxvcGHG17S1phSvo6GVb5NZ2zGXz",
  "key1": "5PYiXSK2L2qBiVuZUTrLvGsFasnievJrRbkF4mjm17dqh2gtqTx4mb83R17Gj66KyVedynq5PkHu8KDwDMxWhPYb",
  "key2": "5QaZEJgkZvoa9tBHTRLA78Ff5LDfbyNvpSLnD6Keiojt5yQUy7d2eF1myvEg4bY6LDniXRKc92ftrY4ipu9Sm6QA",
  "key3": "37dM3CDaHbgDQiZBBD1me51zktJDgKYLAsZHaxAPMxDAv2NUnr9VuT3WE9rsKuSGh1NVxXQSEyKeeVkn9jDd7dqM",
  "key4": "4agzSnmJCiVxEribrEawa1zeuD3YRv327P7t8nJseZCRzqu9V1d6yg2RoxtSfxooBjJR4T5WXBHmFYX4ygKiYAhm",
  "key5": "4oj4cvWHTLw6SPPLCimnEPBgMLZhggY7ZK2cB5vNzmoNtFBUPmkp8Z71GBeuMa8w9mk8s9BmzUqUinZfuzAsrbLN",
  "key6": "3pZZZRgfDAMz6SMG4dTzPBAs1yFRQDe4aX8DKJ3wWKQcbBASZPVvxq7FEgpwGyp2HTRJhSSujN4jrk8Z6xhiAWVW",
  "key7": "cvNWh1StFPu4CKyjqTFGs9fB26Ba5aGX5N9ssYW9XfMCwSTS97V4acqx9MVoiPiDjmK2aG6QV3e1KfTyfJrZM6r",
  "key8": "2FxmCxmQsakeHZRqekxqz5YwFGaU8N7MYjmDLCttaduZADbT81jmXcKiUMq77dk5NoRYCZu8aXzP4XhAJAZRiyA9",
  "key9": "51UnWgDHSwxEXpTpD7xRXHPEtqzZEEfRuBQiNMTKiJYJbNHJiRdoKdrkppHsVBMcBr42V69FuWfxRik6rBTpAjB9",
  "key10": "LGt7kABaygAzg72Bn3MdALPtU2a6dCqGfKqWUNc8zkY7ZHP3W4vAsjky2LAr2eiFvDn8eEatACQgGgfyyU4nAcj",
  "key11": "2WX1adVgAfPV7gbJKyLzrw9KQ3wAZzgSf1NSRjYjbhttUg4Do6wmp5YzCUYMNN4sm7zpY3XkCM5ucdBPydL9f8oN",
  "key12": "4AVUbHsmAhrAmtaYzVwJwyAnSNnjRsrm3Xe1Eq7XWqxH2YsaUYhQPkEBypCvgTUW4Gb68KJ4c2NXu3sFWkznkSUf",
  "key13": "3i6datxDZQTDgss7MRhroAfoyqk6ELDYhEXvKpwt98iUFw9sdZg7y2NveZzK36xMVatrh734z9gnwhDpDTEY5Hip",
  "key14": "3uzBox4prYGGjNuNZHWim9f335uZFGDorZurHLgX1GMYUoUFmdxuSBso8Hdv9nksq7vpjex759GiDXfsfP3QKmHP",
  "key15": "yUSMRdndtqCccy2g7U3NyJumhFGStEVTibKTvU449ZvpSLVwppSirBGRB81YuDs47rB59TnmFZtuEKVAZoKKtoR",
  "key16": "54gSmybwhCroKQTu6xanUahdWAKEaz5RsDhsYL8dwPhuyw9meRhUvdPwXxArozXz54g9RoYE4xaNb5dqEPX2PPFe",
  "key17": "3jRydN4kEQLGMwZSqRRBiPntU6kreWfaNJV5CzivGEzJBr1JUj8XeLJ4sYRcBDssfPhPi9LfzXGoiPdxGFFXMU3s",
  "key18": "44kaK8h8y9PGE2c1D2MHQ1VUMiMwMyMXAgn9fvbV2xujRExm1Qs5E1QE2jPsejMLpCfk5A2TeW57mh3cCyWAwHFb",
  "key19": "qArcthSukYzs6i3GomVQiUc7KyBMDmGChkskdkHQh3YN7cudWNT8UHjuGjSfFK3QWXtvh24oZrDvXS9DU48UK6v",
  "key20": "5UxVgrJj4AGH3aMtTpkj7xjFQWjiSPP8HsQgyA9q2h9hZP9eQgRpaAyUGG3v4FKewz8FYtSVLQa8xtzj4vMncg5S",
  "key21": "4T9iabu2BtU2zPMvcYCxbqAdnsi3YnGmXgg6J141LKFAijEXD627G3ghEdqLfF1Qcs8hmoGSPZU5KPhCRahtzn6u",
  "key22": "4PxPPkujwrfeD2n7ok4Nm87wCFr9qNufuTDnY4z57RvZ8RNyGHqEyK9PzfA25pBrCF6jwx8yVft3k5CvwBfYTBbU",
  "key23": "4h7BGU9PZAcXJ48VT94q3jbpNcJbsSbFc66kXoGskH7Khzwwyx9vcPdZ6aFV1NAnQndiVVEaE36Qcv5n583pS69D",
  "key24": "4wqmywH5MArW5UGbNXaYB9KLsBu7QfADwiyfKWN4SiYtVVcGABh3CGtEZNgcR4WVGwU1Nw1PiiDEMmahR6qAkmS1",
  "key25": "57S8dHK9S4uF8qCpxhgS1Sg4ujDbgC7e6SQScBQSma6TXvzWqLir7KKrZsm3hDLNxiLADfssNcrd9RkF2gXau7MB",
  "key26": "2BsHRNNebph88QthiP3ehcsx66ngz4cPNandsurEJveFYDEyabBpVGz4dEGE1TRYXxV7euMH7byu5ByuBMQzrvsy",
  "key27": "3523BERPSKWabtSBk7vLPschXhX6jsqqs2HP5ggWSvij5qMfCvC2fDiXGy1LebyXf6Akxmbc82rFr9VQEvg1DQ9D",
  "key28": "4btVnyF8pL31uLDPNUHkrBjvEsyXBaJadu4xZnc6vEpmnd46CgQvCAE71WwXd4VvgJCaW6WgLSMNKWJRyg3hoBC1",
  "key29": "35E3iXpx7H29JepdEuQjApBXKhrHA2UBFH4TGgydETSNvG14HPaYgdYY7wjdo3pzY9RMPXSo8v3dt6pwri5ns5Ny",
  "key30": "3jrHMBopFgad2fLnysW8yHZrqPiavvMTFdAq8oiv7eZuygHDw3hAUHkVqqMfz5U8GUpywW6h24LLz22sAbZLjDAf",
  "key31": "2RsBXzUs2xRHVnkRQCZYJjvnNDH6fZ7FJVkhB4cSD3JjxZNpmL2Lxi2nRhgK3PDpCTd75p5yzTjvpK4jizVN1Zd"
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
