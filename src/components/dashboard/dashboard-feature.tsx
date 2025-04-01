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
    "4Uvgw9aHUbXSrNs57x475jsUBuzfrHEFmnRdgY52aqr5fJtp8P4S7TkwmQmFHPeonLRqSgKejiwbkdwkaCBtUvK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z17RjY6JeE2q9yU1gVWA9Yta1udm43TwLDGnH1wAFbQNAEgCem6qhRNiN8iS3ceKcQSBr8pFS4k6AqSydyCotzW",
  "key1": "3Cpgy1Zjm3ccqGg1H4hBEZrbxyMu8YMLAPCsTutAmeCokoqm2J3dzHd5bKh9ZH8arLF8KRPBC53sAsYFV9CpLKxM",
  "key2": "4SEFLVMS2a7eCkkf72oR4ZVKtr6ckc1gsASwYH8rPGFD4sXVfeDKPeYfAdwBtGJxvPEii9b6e8bmoDzPQhTRYghD",
  "key3": "sQefvK4ZnFCJU7e5gUeBjoheGwY78FikWZF86c31CiGvRyAbqqDpR1RqBCfBnNG1iYQ8q2P8L3jUHd1scp6zeC1",
  "key4": "5VLaRmhCW9PzfgkWd38uLBpP12rpRknNBbD9ATGxS3Www2xAYcpsT9EvrpRwxwwVidFoGAyGdKRHfCsfyx8gwjrM",
  "key5": "3hnHDaKN3zUZcYQR4rfJUnwhHErNhvP5sFYnpbrX5yAjvYsEUW86WU5bprKJbqDEeGkrHoPvnGsZcUpNdqhzqLEE",
  "key6": "77tv9UGQVzBZYYuBSDMWdYCm9METtQ2yjPg5wuvXZKW93gg8cZjWnpTEZvL5XbLM4TcmHHkaxWrZzfmM3qtasJE",
  "key7": "VZYTYnh6zrtL7p8QzLTLTrpd9ogaKDRfkcmvgAW1j8SZjTz2LNak15odrReV7ne5N1NNkhpWKNgmtWpxcMRArbp",
  "key8": "6127xgBDn3KQ18DoeQjfHcNQFAaEwKK1qCLc9PeaZkVAWf6amufFXhtVRo2VZMrequerqiqiMJsED939Y54hE1uq",
  "key9": "3yHGUUs1WLkgyHc2BWddwsZtQ5eHpuRwLMoABwWxNQbrbM7SZmzZJBt6MBTKtd5B2jJgiMQ3oDwwmT5CQNts4fWw",
  "key10": "4rjLS7BuRHVhWbEpt75AcbwcJw9hGNX3Aq8kxpEZRNt6ssgAbtxbcid5KWxMbvKPNaph9Xf8EvGnUtTPfR6Yz4mY",
  "key11": "bwDgW4HZtYQVVHiQxbkbRyh5QLC7W19JwonibbjL9KnQHFxCaRc912uz5Q59zD4G5UQM1i7NZDk3xoRAtFY2JwE",
  "key12": "2rs344SvpTbmGKnjAqdCWrtf26bVioSScXbFQrW1xrFGxmaHSXnYFEspNXCcvfoBzBgdKSQkQzWkvce7T6EbEAjt",
  "key13": "2rkKAjc6ZR1nrrs2A29CUtcJUMp559KbZfK1FtwANTuhJPHDWGQcwELv1k3XhbHggV2Ux3nTtWw8idSfd7oUQ8ej",
  "key14": "3H4ufaEGKDkF1eMaXkeixmBE4jHGT3QH2wUjoJvThvKYbg1VoiXdQ7HTTKYs3MmGBfSLc7ERTrifSPRQJYsqtPxu",
  "key15": "3Aq2BEJi4hrQLqttWRzBA2w7mj1de7e9KFjUa7h4Ua9UWnG7XgQi4kWq43xS6h3vyYXMwtcW9Ngdp8iMccKjJape",
  "key16": "22tf5UF4xcRryqWacwTwz3LQ8dqdJuLRgGShr5GiLUUE4tF7M7DGAsVsm8f7yFhGuvaMycC1bnjMh4r458YmsMir",
  "key17": "4YLENwmCXW6fzj9nxUswQHSUCPUwcC7RFU2f7srHt7VybTfdWj4hLy44kXGLGXvUZv1YsAcokGF5MQiXSrpbU3Vw",
  "key18": "264pWQyphNNJg4zyA13ZV8q3LJZgU84QmR1J8BixKP2Gr17ph3sGQwhgDrcVdUoXSAk7z4wRrXEiQHFwAg7VgMNA",
  "key19": "9T3apUeys8aM4UcUQfTxjoberZuv82SxyHpTQzmmGDH8MFrWKZFgfMCMTHGWpP9UJ96JwcMPyxE9iVV5LRFP65V",
  "key20": "YFszZgnUapQ8epWorirDDc2JWmh9eRLCyWDembGmVVDRApo6KsaF1XHz9s1Gr4N7FVWJL3XWQQgabrfPojWqYai",
  "key21": "5j5ndJJ94C6SZXrAhRcNehpkjDp3xNYc3RQ4NomQ7Bce69gK6wGgXr3CNSbRKGsv66rzRXcj3Sp3cFDt8R1SYvRB",
  "key22": "jnwUdAQSaNFx33ABaNKUwDM6DXq3ULJjphzTPfsg9aUEKxN6mkLH6B2MhBBP8ZTKP18BJ7Re6QwZRTo29c2QvdF",
  "key23": "1Sd7r9e1fP6wygZ95BBKwzUMnZqKVVqeKBtTPpTKxTwdpTZJuDFnQsN4SvuctHHAYpjTL66vAXPXQ6Wxuodznpj",
  "key24": "2FGaBf7oRvUQBt3DxdWkUsQw5k6tZWZtfY2csJwM6DpwHbMGgahGNTZE6NLkHNo1kgHeQT9MayHpKAcecHPpNLVq",
  "key25": "5YrtygzDufqLANbzuTDEf1KLfYC9wxBDT67ZzWzibDAbKRnGNZ2PXiRHJPtyC2CYqnuXREJhvt2vufCTEHdEzpfZ",
  "key26": "5x7A5g7j64VenD8SiAbqnCFjHtcLW4HzFrvj8zvvuv8xM3JeuSayNFHfxeLGGpnuif5VT6D6hVRNoqJrk5fitWNN",
  "key27": "4Ha1YmsScohM2UTkH3RDQx5dqt6WHpRLaXaZBhJRLcDBfwViGZaz38sDw5wNorQs1trUhNRJz1KMyHUUkDvvYt5m",
  "key28": "2DP3Lpy5ajXg76tkAoqUidbpjb3hQr5sH8vSETMYUTb9TyHxNcf5iwUwggyzMDedjNhwQCAy7L2NSoqssr3BuyUd",
  "key29": "4RYQQfEdwkj9Ln8mmqLspcLpimxQvBgcQUmrycoJMp4zgdHcaH8r3uGroZzdLE2ZxTGfd41iM5K2Qd5pbPkQpB6m",
  "key30": "4WSm7ZQfRTYY8jaqewH7833SFr1p5VuZe2UqKY5ZcQ5sFuMxCKXFNecsrgk9AySdDJHVgZZUFrS9XytHYzL8EHxG",
  "key31": "52nRcUamo3JNVimkfzByUhi57UqsrT9idjjXPzz1pJHEA1qCaVt8njkZrSZXeu6GVxzVQGfDxpfP7KU2enYGQccX",
  "key32": "31XnvKSzdjp3BSExfsF3P27MGy357xzc4fNwhcnTc5UvHsgn2YiFBKkonpcxJEwRYos1mabz4BkcMVydvfrTPjmw",
  "key33": "4ovFvuL1tgD3W3gyMJ5SwJ7ZM7oajHXWiEpXPxbENHSDacSViPnNkqD8uyzCyLDywgY4pebSiryUTDUSXnVFKZE1",
  "key34": "3x6KK6wSoFxGHEmNCcBbwXxkMsiJ7u5nQQrgoWjGuZ7niQY8PQfgZ9uigUF41dV4ZfVhwrF2eScEYct5Gh2YWW9g",
  "key35": "szqrnS7486gmHDcfGLggAzysaDG8ksfLoDTQLuv8pWe6ccjaCF7z7g6Pr2NZBJwt9k528RAuz42nvmwbPetHfXN",
  "key36": "3jDdqmHfFAhfxWBboCSuom69H9gxoSU23tPdSZeVDwbHu8adUvRZSgsCKjfHgB49bnr417c7JbJa2MGVWDhZ5aNH",
  "key37": "29w5y5o39uVXxZu2umSZDP7qNbVBHSLe7j9WupkWy3EwwPFNVGS49xaPQ3SfnYh3ue7h6x6YjyTNzyTEpSZTAnxP",
  "key38": "4GFKzqUBLAYAeWbGN9199J4grvHz78gHX5W7CTGKTPYGx5G591srZ2X5XsUSf7TRjsGJr5JYRmjNcr2qEFqxLRCY",
  "key39": "4g8q2xkFr3kPEXAPDbk44okAW6GkTjpPFbzhtSW7w2eBt15HC2F1B3rNmjCkknRhXhEzsxSt2JP6cNmdoiTPbKXb",
  "key40": "4LiwFuDSfFeztCQLNayvRjr7jWLfLXa7y84A7KDLh9hMBV8jxWT5pHCyK6EudGjcPyY4b745GBD2G7ahhAo2yZch",
  "key41": "4qzxhGHFkDM8KyLbjxTDvv7wiPueXXRyNRxC5tg5ohTez3U3YW8DFdKmXS3CCC4m3E4VCzSgXo7ehxbqVZR3EzXJ",
  "key42": "2UUnw4jwt1pDsQvVrs2WZeH7GqgDq615TKFbzKLtpkUYC2FKNdkWC5Gn4hYr2s879BagqqvyzPSN3bVGx6wzLobf",
  "key43": "3urL2DaUEj54VTRVESjFpwkXYpHKmfFGYyb44YfDy3n5ZYajvEKiT39YooRgwrMBK1wUHt91vErEW3USaEiW778t",
  "key44": "43pyshnYadV9VF21SxaUAhmgnDCS96gLKSHfJuyghqEdfwePh8MrBMCrqcNMZEUHuKUQPf2joqZ2v2rpUzEd6u8z",
  "key45": "mY1Nir3R15iMzBmRooB1xDTg3oV2h4ZWcootsRKs4i8W15RErKbooXzHTcdyiD3YwVBYcVsdFLaMbVgMPTR381t",
  "key46": "4eYQGeh7ibs725CoWJGUm2Mou7PMwUnXSUeWdiuMf9okDZTLy9TE3tATNwK8mwJcnWj6hBWK5GGCRKyWKHnyKZGd"
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
