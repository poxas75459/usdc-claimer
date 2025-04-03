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
    "5PSxbRMK7D3pDbtyVrWvVrWCMyjBG8FSh5Nkptik1XbFeMvQHcjNq8XzvhV4YNfuqCgMR63TYCristM6pemBnTYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZMWGWBHzmx8i8D4UVXB89YhbFTyiKRE7C65pcVju7y5EKXQgZTgh2UQSCx7FpBuuWxpZBJT7NpETYLWmfRJcJP",
  "key1": "5DTi7B2k6Dt1Gfbzb8mWnKsCL8EPY9aCfYunBxxKw5ubRgSkjqWua8PNt7iUpjR7LFkKeW33rTCX4KANKaYFtjWp",
  "key2": "4R2boAoptiqEQbUbm8PxCHL5LwRzfd6Au7GizemM5cWaUYHhabZw52ZZSe39qYM1Zr5YneQFdhS7M8qsTQCk62nK",
  "key3": "2KesEkWx3q33cqH3uo5sUjLFUtqtnLdoq2x4sSdZMouGXd6VwbnMRN9Gnafr9af9VvJB9r3KrNrBthk27kSGixM5",
  "key4": "4Fhajtv6UWX36BeNJUnt4tF47aGR5myHdGtJw6L6YQyH7ymhfX7tcMFSvZ3CrK8TFvk71HACoCPn3YRnyUpGt1k6",
  "key5": "tmUseNALd38DNdfrcTAWhu2fZ9JozoZxFKCN1mYubZJ36zXJkGKuodj2dNbmFyz2H9D8UZBY8TM72CuZHmuKRHQ",
  "key6": "4MBmoYZJCbA3eWvzoiUyPe6cTYFJD4jJaYJhPAYUMAig8VsRumixXkedkS8RocTewtHbLbPA8jTmoBsXk7TpqViR",
  "key7": "j51sTreZetT7ioC4jnzzddsUfm2fhgRx6g8djt1vfMnFw1KJ5JewySPoYdeaHBA3xSU94eVi4zSqi2sAVL93Qh3",
  "key8": "2jnJQJ7Taqj9BcnprUeCFAhE558cvn7orLGgipT5CewnewDUFrgVnteSfdY5N1gkG74cAYHZV9kBry68uub9dvT",
  "key9": "2nmQi32q15pdCdtGC4rbEYRgQVp7ivGYiUWrxWf1qhMjEZCkJXunYniecMQLTm3TnceD4pLJpeHCp4MQBx9Hpspa",
  "key10": "34aVYuYvdBkUePWL19A7rvBFhBk97GEXyMoPv3py5rZJKDSXhmRjwMMkdL7Wv84JwkCJromWrHa9dktTQKJxoGEY",
  "key11": "5aC8GMyiW2D2BrUddAwD7WNCZz6ngcrJkgLuFNW5fSzJHem9kBaErN9r7q3SXYSxMjXJ2FnU9SF1fx8rxeHc9xSp",
  "key12": "2K3VmEDgYe2ZSbHaFhLVz48zqcSZ3iZ6hJC22rSPTE9jiVLyeXoAUokskMJExz8xoz2SJUERDhoz4jzmJwapSdWk",
  "key13": "5MbYGLGYwNbXnHLVRW4D4pWCDqA9qWR9HGgqtFTomBQ7c67NCJoV1B6MHs5hLDSfzKsjcuYDAMuYxVcAamyqsb9q",
  "key14": "3Hu24azqejJhxHCMU3TWQVMZYZxXteEgJhN3NxfxBgLC5oyHtkoD3xc5fS4mMfwvpmqSya4crofdfzqXHmCjxZj3",
  "key15": "5DeKZmUHs93ZzqX39m15sfQYYXuKBmBUpq746cAouKZn7xMeMRRywCA8MvMifspsaUqhXpdwxEDkrPFQzNKA6W2T",
  "key16": "65wAoVP91ecRbbxiFiyToc9nGHqV45B5Z4Mqp1QjGNXUTbg8CzisB8kVauej4WjDD7LnA7GU4nUk88cs8GMC2NJy",
  "key17": "3ZMy248wfJPMi492feVchU3aP8wNZfHvTNyhDT4mqhiQVHRkMEFDC1XVAtcc4nCTDG2vYNQgN1ShVP7pZCwq9vPR",
  "key18": "3g3sGn7q3sQ9Z2PxtgggV9CiJ7V9Cu5ukK2FQjwPX2aX8DtsaMijmeGSdEnmSy4Vgx4j1vA4Gm6Fm74rB8psh7jq",
  "key19": "4voB5zjrrx3U7QHT41BQj9np5cDKqZyK46arTrihZTEbmgXNH28DfzJi2fN4i7gBZyzMkerXbXr9qnpDFkp2ca1J",
  "key20": "3g95Ae2zvj2HpmDdB3dwScSEePr7YrWm7aTSjhvK1YZYKGLgvWHGvmQjzEKRGXV7yQUF3nyXvCXqBbLcUzbf3RYD",
  "key21": "2SqDmbrpydr2DXf5kR6bbbzUJ45inEKgdpH5Be9enRHqViXoLTjBHYNtipbQHT4VvvVuoBtGFdDBG3xf3yytFdvG",
  "key22": "3qUAzGhPu8fetjVugy7VKCgcjLDAAxUbmUiM8dDgYWrhMRmqzDSNkRa9ar1pdVXcEPeMUZKEMr6ybQ1doMFHa2NL",
  "key23": "2AqzxgTGtej4EwxPJh2dS2C2yR7CpQUBSnvPjrbPgrL2CZ5KGhv3iHyyVZMfiTWyUbAuxVuFgZHnTG8M7DPPbxrH",
  "key24": "1dCJo2VNV3jQPonpE4yoDYY5AgdRRoNe9XeKandbvdWbgetKeJLaGKNvMELrrQzF552RXjcBpnNHzu7f22U6Rm",
  "key25": "4UgBYm6PkWEmq8a2ZjriHAADeud3TUZfjHHZKvp8Q2RYuhp4WneVM3MuVZsGqFa536Nkt9q5wkBCEmc2JFRZG1yS",
  "key26": "3cQKpRvTseW5vfe2DkdFyxZ2keisM6Xcs67tyN7oyzfmEsTZkj8VbTE9Nkv8XvLBFXFdf5w4VN9iNRdnTSFzSeSB",
  "key27": "4VkarZiXe7HxCoJRTp5QoBbetipVa53n8zoaLadRS6fHBY2dvdhAGYqPktP4Te1zcSqQcPN26Ttbfdrjs5tSMhBP",
  "key28": "3sjaMhkQVfKLA6eSGLrSU6fbBmJ5RTMziocwHxvhbxftjrS51i1vHS2Wo3CkY8f5ADoDEfrXquRctXHEBS2qEbEZ",
  "key29": "52CSdeGkAp5MBtwcayHJ4yt6mskwLD78mNUCAJ3pCUxNnqDQkikwDjCgkphwBXZd3PWenkVCzgA3xvHdKVfZ2Cwg",
  "key30": "2UGCvHNdsftw978CczjwEpx7Sup6hSHghwQ7NwHcLCcuHcaByNXPed8PqyNyDEEpYuE99jn2ssMgETgFCA3bAjqU",
  "key31": "4rLxZSc8zGhQaDiHeTCgpPKCFwviJi36akMG7SEoM9ydkSj8gRBTUYD7Jtgk6fevSojBhfcT1jSg83DGgN5aq4Dg",
  "key32": "5dKkc4Pb7AXGydXVW9DyKx7a8p1gRCc2DA9cmJsUzPbPN623hUbx9DY5GqFdjeE6fFCHkSY7MNH1pMLvQZwmcbWm",
  "key33": "3xn1HmEwpsZxED3Y19zbFiSVAZxbH7UR1gtRbmesu9YkSgKm9ewk6xZxRXisXZnDL3GKnKbLiirHBw2hLP1Cmc45",
  "key34": "2Smi8pmEtG59iPs8Zbb3oHZ8k1qCyZpxfLncUmTa47aJTCLxpCJGH4nPG97PwnYaRZQ7JmL36RNmD356vFTRscWq",
  "key35": "3DaLR369H3ZrWjDRyCKFCZzvUPAjU6Y8dzL2YJabs7EQTpivmsZ22mr9mbErUM1XsfpCrFy6VGd4kuSXSvQjRKvE",
  "key36": "44yYWyT6w3brtXiKknXPw9Q1uPsd1coHP2BXpMB9p866wHvEdtNhhiVt3jJoDzB9Li8TMbP4acJQ5FPFwbTpHYaw",
  "key37": "TC5giGMdVGASkWhpnc2Dpu1fgSryJ1RTzEN9w7dv7uVGt4QeHshn1VzLJvpiWGoacvmRCsCmcAHC2kKmEvx2qXx",
  "key38": "fTHckx88YpQJi7Py4RV164Ruz4thUYWomBSZxFMk7JJnL6bksgk33LePfGMRiHkM9UPzMYbqyrmjP1AMYV2RmXm",
  "key39": "5CM9yHirPUuycQWbqTDTUu4poD8deQzPY768Qo7zq1NmCkkutVVVAyRYybrKCXKvNHqFSNASc8HT9jfBWydJ3KZb",
  "key40": "2d7i2joRpjdqUcmm68BcFLMMwHLTq1ux4WPuRWBcsBi9s7iiaM4wPGuwaFSdyHsT2nsEbZeVxwJ3mDTQtwhmQrXU",
  "key41": "4MzJ5SYt81URKcW9zZ2zLTVffW5p1LgVWMMQkXEKRHTQThYNUoSMkrofbhQXLy9rrhjxx6UTRRmgfvj21PcLZJ2c",
  "key42": "2z7RjmeimLw28Lr3QdgjRf4RL3K13u6DpioGkmahGqepceTqByZuoxbuoEoaxyJS48WJjJThK6SwmGR9w7jfzcyv"
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
