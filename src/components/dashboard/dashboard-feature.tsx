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
    "4yVjp75KrZhpTt7JqzJFtQoBxV8WLkgLDgD4KqiFjpqoANTWcBns8YFK98Rp5se9MUrHpNEY2mNo7jHTG8Dd5b4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RmjuFQTRRqCieNpvnzUdTDHgqEu9HKxhNxsMe7WtyQpusrqonwVWdjuWJFaWgnxVaPRqaMrQV7KoRXhet61iht",
  "key1": "4CKE6xMF8awxZBGTcUbrskSekT53PekuYyRnT9CeSmMiGZKuDwDTwp7xQksT815dqc1hPe51PnEnpMaoyuUNTmyR",
  "key2": "S4nfAsJjADtXHvmj7bNzh3me1QxARqVZcrQQz3hTGo7Ntg2pwKy5k99xRME9hySiPdSyvC6M6CQPXqGuBdrHM16",
  "key3": "3BUfRo2wnzXsat1weW38r58LJiSfeXBV9vCySea5tb8TJArDvJK5WaSRitbvGPyTNFrvNTwcegbuDsRMEyskUcB3",
  "key4": "5afTqbNCcf4ifZ3awrKGdCSi7BVAE3CFKVw9w9ugYMALifpLUjSa8Yej3fmV5HyTjPaCgGkacZAHq9d3crDurq3Y",
  "key5": "5mzmsxnYNJ4nwgQfNAfVjTa4jjgyFye85BChX6Gvq3mhAbiJmwCfi2cDf8BoXfzEt9cu8HrQPRJ3i2yfiSmSyoCk",
  "key6": "2cCK5YuKuroz29jUfcsjTURnNAMJPFG4YsYuKEM9iYCuENKSPFZ6VeMDwSxSoNQJJ9PNppzUEdetYTjGB1B7DT1e",
  "key7": "XkbdTWrEYxSBKcdprnHSMjeei273zGnC5Lpr9miUDmHNR1Ma9AyzBZGZypG4GRbgHuiFbaxDSmJFjLDat4xfwda",
  "key8": "4AkEyDYPzmrdDbHJs8z1ECk77JdrJERyWk7xFC3daN5yKSYkwPJK9KHYfJeujc2vWASYrBp5kMLH5EMoipwABAYz",
  "key9": "5nFrtzFJX5zEJ3LbS5NT5L8S8prw1SpvQzWNpgaPFMMTw78iX5v7hhLsCfksmjo7DKSx5aBEdThH56UmSLnp4NTG",
  "key10": "GKvkTNpoez56b9n4sfiiTs6NUiZa9mdgphNfVXPEwrABDFfFxkkCEKf7w6LT4UZx54q4yqX93CGXBAdP8NsnB42",
  "key11": "2wkEKP5NgwyZSkBhxEf94wdDxyf4jTQWuYdp7sQzZhL5Qc9P4wLsidxGWsWtpdQUmGEHuh7p3EkPnHyNusxQMTpP",
  "key12": "4EC1FF7yT9C9ZN1rRHNsv58Ce71kTJ8avtvsMrbRd92VxijtbmyyzpN8fXQJshkiMGPTVpqDyXHUkqMQDDALf6v",
  "key13": "2sa2c6ovAap9Kj4W2KSRa8Vw8am5nW2wv3AzsuvRkoXoqNc6vTZguuKt6gqfPcpqia4QPVuaEa5dJeSDZMoTHv2k",
  "key14": "2uvoyvyGwF5MvfKMCRHsBdLgT1JJuQYVvTxDo7WaGkznzjJgehsqZgc3jnY5GibKWxVnLecAa1Xg2deWRF26eNzA",
  "key15": "4sj2sP1J7SVdUERLqhv1fNZF1TiqR6ZzKNGUUG8k7jfMDh9eQ1pVVkJoeJLecWhEfsi9XHX3AugmnELBu9Ag3FRH",
  "key16": "3NnF6qM3943KJYZhE2991HXhs7yQtVfEiK3iP1naxK7zZbTCfT1pXoKHAUiGUVgbG54L81c43u3WyrsekvyRVNHE",
  "key17": "24bjXwo4T1VVpWD29dkLXCCJFxmFaqim2druzxnYkLRwwk4EridXTRmXdy2cG7SPDdJuNVpUA7KTU4cSFbhrT2sj",
  "key18": "muDNoYjjtYPk1Fuzhafd7zjweaPFELx38rH88AwZjN1WrcKE9JwSLTMV5LqVdTMQPunsLCXxECVPbrEos9HFNjg",
  "key19": "2sjNLyCxWmoLeWUGGfLHFgWd6aoCghaJDUuPNpZvo2jiY5UhMDXcX1YNdN4sCPHunX54wgLkwUj7HCCVaYf8nGuS",
  "key20": "38JK43h3c68ReZnvDozG7GWmoLWcCDvRvS4Gk1QC6Z4WPhTuPEXZ44Cu4zEp45g8khG4Avqm3MFK5wvMEA4poWev",
  "key21": "5yFuKXqYvRUruJpNScMnANGeDLY3JWq9X4u2dZ3QG6RJoG3TBFJAL8p5FYdEVvCU8RH1trfpn4ZjgQQXewq82MLT",
  "key22": "5YdJg1YqJn4SXksN7RTDwBjC8tzh2aAyrQpraaPsnvAeAe7QiX2HyzxUFANXko1eem4JkvuHZRKnEZAhqTNG88wy",
  "key23": "2xFUfibHA1ZumZkuqqq3NTcEmtEqWgQfyv1jbjXwQT8iihDj2hPcLDE1rTWkggHW6dBkPjBmun3UqvQAhFNdoY6U",
  "key24": "5Y3PXHy5Sq1VWQ4fSqcF3jpQNdxMZ8mmYAVjzqUX6w3R4HTWTJTQgCb8i1SYVEt4HYmu7WL3gRfhdHfmpQi5LvNu",
  "key25": "5cGcWkSAmv52ph8sBZqrPtZriuidF2dGR74b7CusqSZa5ixVmzs3gNsYKvaGWB8N5pUgXFeXRJo1aq62iGTZghTY",
  "key26": "4xNxkBgxBowCoc7xQ7zhD442rHZC64vKBha5nDtqBV6mSkHsArhQFCSdS5h61zJfUyuaekh9Hjy1jsSphxq65ZY2",
  "key27": "32DXzx54Hez864J4sMKSqaXaTuVeiCss4PBpsEPD9sRFb9hGWJr6cCGHaUoGC8PMTK8r6ht24Npc8G7Xc3z4F9kZ",
  "key28": "5izXiebTsZXMGHn8Yk7ZXBsq75pHSo3U5CYDAN3PjCcHBSuBtopK8pBVSskbbrdkgwJ1UMNW2WcBXTTYTUJiX8qZ",
  "key29": "22DGbVZ2dBEi14p7HjbH3d4cFTZQ21KNx4kDNtJumv3yW77owCCGBzz9nWoPK4N4PKFt1TuheB5WaaKwdTVQzmSA",
  "key30": "64A8xtAtxRDr9dEyf1P6rCLPaCwXaERwFzLvLYfEhtpTHvQ5MKhbmz8xxFNYjKU5ApMHLDEQkJX82AMXY1Az9bSa",
  "key31": "ufy6XfNyrZnE7FQLdMQveGaSde7HpMJF2qSTcHedAEZBtVaK5z1R8WFmWNnYderDFPonbk582PMq6muvzaQ8vXR",
  "key32": "3dejPxNCQKcRK215G3KEHisqxYbWK3LcQYEfaGADtPXv6cYf6PoVCrfSeZNBQemNwTRSLeeWymBB5NtjXThKHAxU",
  "key33": "5954Qoj3dPDRxaZtvaNzTQigm36J4mgGXM9TGLeerFh5y24FU7zYr9am4pf69RdSkChfZj7B4t24m51LNEepiW5E",
  "key34": "2rne1eCAtECwY1c1dUastEZtHdL9Da7QYBDWo7VM7RzdPagcK32un9XiLdwcZGbKa2Yo8xXFPrK2kJ7StgY4rh2C",
  "key35": "3ppSxLfV4F6MUqPPbHZUUqGDVBYHY3SUjV5geAxza2HTEhPuvJyAZtpir78iBUA3pMwcUuDfAhpyWdM3xYrc6GaQ",
  "key36": "x4hmcHLoJFj3opa9LS2vWeqY3Q4vyEwUCypn4aVZ49MxcZah7MvnLThQX7gP9aRkreRaevkmHFHM3SNyQFCoz7t",
  "key37": "2TCrMGaktPoeRKAgVfdXhdNewzWFStvjdGE4jsLUW8AH5sqkFpN6YsC6KK9XDq74hWNkNjvTuhwNxdhL3urYL5HY",
  "key38": "qjJJRJBdgnYZdZ4zTmfJNgjkGpDuPPs9zoyKngUqtUQcaXTxargej9eRc17RpDTpteyNtmuW3iUFD8f17abqXSd",
  "key39": "3D1b83fetVgt7A4CkuWqtjBtsPfhk71rBKZftrjf2BeHHqa8DsxNGRndxi8sTPNtnSCp5dXGtK9YYdxsLHcAPDe4",
  "key40": "4BArDeir1dD1uzwgmW4J4PSgvNTPbG8SRXvxrFgukfhHSqBDtFpJWjbrV1SrzEdEfJwB4MizsS57kCzSvL33vy9x",
  "key41": "3avZT5AZMpZQ5GDV6Wj445MyExek2bqBjzhTKkW5uf6Nq3Fx2qwqZAJm147t11wkSSxvfvtYGhHZGz8Bb6B9ZX4S",
  "key42": "42cyYvJL1SZ9qGu5r6L6zM9EstFiPYx5QryDvJuuD3dGBUcn2LW88nCwhm5RzuvuNqp3KGfXtokYLHuKgiRWcS2x"
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
