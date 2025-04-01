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
    "62FfG3PqQWRgYnj3GS2Fh9tmydLi8n53KfgUBpgnevkxXcULwWMrNQCiKvpuuLudhSXb59zVEcNHHozhwrCDxTGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwCxdtm9mEC8TzCTmFBj2TyNVSFANMX9HCgbBTqeifTgggJ28zDRAEpxVwYivu9iSMwZy6JYLJKZL9X1Bibbgtt",
  "key1": "4fVUFNAR3KRxorfjeG8ji8oKQg35A4vU97RK1p94aQqqMk3vjLbxUi6LssGdFtPQxMcACRYrBztvZ4typwDt8ZKX",
  "key2": "2fZKz6ynEWmc6qTt3urG3uasrpj7HVF4n7qnNHCfDx9YewBXLrkvfgf4YUbEzaFJgzpczcPLyCzTQVxLqJYy1gjG",
  "key3": "42pSb7zm2WwWN9NDraL7h2skcpxKhB1LsvePNFTvGLg5YpbJN6cHJzhpeKSeewJcoP4UrXzfXJpjfbFwY6YiwsNb",
  "key4": "3TDfKrUn3fGVHby1uuXSqZkXTQdi3HeQQ8SEz94nwnRtNGw66u29CaPAa1v8pwNeECM4WjaBkeAeZbJ3YWdgfs1i",
  "key5": "5tCnChRQDZ4Zc63VK55iccLVkFJNcumZhGxqFqGxMg4J96pW6Pma7V7cDn5qd2FeNaD9E8bjCc41B4YoepLyu81j",
  "key6": "3cYDgXk9sC1rb4kG4efUMv8ak9v8Ebd2YocHL1218x5eyyZDVGpLN5Kv1mW4GbiRUEa5vPC1C2CvFL5GMatyuNdL",
  "key7": "5X6f12XhzcdDuXmf3ovcX5YK48j723RUWNuyUwsBxBH6ZvEriRYdb81iwatUYu3CFeHRFNfuXLxSrpsKQoXZZ5ur",
  "key8": "4hC5dgq7Q1xjUyVwdK1haNMrU3WRdpfH1EyHj3EbP9JZbmNAUwPRbX3exZGB1hekWyMRvC8jWif5rWGygWtrZ17X",
  "key9": "FoRbHNXb3eqQJtqzGSB7NvmP9Lxsy1E3uyj6fauxiLs3NPepsBTJtWPiVs7NghMkGQdYUziQnDWTSYWeF2ictSh",
  "key10": "bgN6FJN8ZWWG9koKDx1UVn7BfbUJhb2faSNgqQvMBwcHFKxQnvL3iTSBVCdwfRVw1m74suFspSQZndidZFravnQ",
  "key11": "5WSpvdFTpSvzVqBZGdZ7VNpmKTfJkSJU1YjEBPu4rcVfreBVHb9YXqGh5EEWJc5p8QohwrtjbuAs5H3JXcyo6WRS",
  "key12": "5dxoYp7Cd1H5NWhPm1wgUy9AzEvneq9Fdb2AxWNh6RVQgqPQrHs14vzo2ouaCrbFMCSCfoXNba5uiRWFeb2JGLBm",
  "key13": "3CwS6wM8QaiqHBAWJmgwhYnNAKYRgQ8JxFtLyjLzDDWFkVmjpaakWbWM4APcfL2h11dTqgkhZnWPXSv2184hkpcx",
  "key14": "3RGaFxW7ZNHSxqr4cFoob4bj7aUJEsZVSzbbh93JzjBCfJoGbbmmQaE2CeMF4gCVikVvN5NfAhcK9tA7cAG2m6qu",
  "key15": "3rZdXeBf6u1wZJqMucpPoELmHqeYmaUqR8A8tLjHXpNA1VjmF9JMSkZGtkozWJ32UUuuCD5hhLVS7dLyNcP4abSu",
  "key16": "42d9r8KKiixSrvh8bahQeZzBwAsJ1EXtbjpZ7fVWkJSAHG9LhceMtCZAegeEmSHQ6QzET4kRuFXVGSN489DPxFBZ",
  "key17": "3pZbhBNRa1R1vBKomvhHgHuzAB4o3jEHNYVKqRUcPp7YHKxgcNemCm9B75dQ7hDUAT8ukHu9Z9CiX3avkphzDDCk",
  "key18": "4QPCUde9ymSTDVVXQtJfQF3Cp3TD8dHGk63RtipVWagRUm1Svnnam7jqeP4d3ooxjfqqU6N1r9aD97ySoyqcfFfJ",
  "key19": "2PBfXpBgpQtZzF3Af5HKJ6c5QeMc8qHNz8cRGEuYU6TLyzPWkK32Uc2MWRuy3Wi4rgexEzdxLEgVAWUq5sA5LX5c",
  "key20": "2bhYeB6Nm66114tfG32qxJjx857pF5jMysz98YcgRtUGHEos5vBiwRUmHVQ71qjiyt9AZCyXek9uQzsdvzLmw7Kk",
  "key21": "2HvH18wGuBdSRyLgjo3W57AFrot3jrqPHeWdFQrF4qfXa7u9H3vgqRKXWhfSKqWbLd4vbSnjv7o4DFkmXkqyQxfU",
  "key22": "5nJh7gBu3CtV9skjMEsNbvXTZz4A47Dumihd8Xef3oCMrxFb96d5QBSHvrQZSa7Y8fBb82wbCbcn2NBBVnYXzrW2",
  "key23": "4qK1C57bZcNctai1doM5R2ZUiEG9Ue82sRuLDNcVTANmFpZ7vHeWvW3PAz37CAeYvFVdmLqjQkgBEzT8Ya7NgdiU",
  "key24": "3qSnFHjbBHuB64zBJEE8rK97Y9ReGSW1mnuEmVpDNvLwYYx3wNYAzJeVqdz3Y39sc5PeNg2JwHqA1zExoWBjdWTM",
  "key25": "475cENKNGwggsTSysDUwwG6vFNAswgYNbRMwgop4jS3mUYxnorodbkkKL1yjAV4iQHCFPJN6WDvWRphU1mNASLB4",
  "key26": "uwzaxAQLKeSBSWcvw2V2ir79UawAWtybfpZMkmmMj2cMeTaKLxHEJ3G3bnbHZKzTT3zJ86EhmRhYMd3zJK5r5QL",
  "key27": "5Bz57JiREJRnsemTourjAJ1DvW7c5zR1nVEj1EuVXvTExNTakfkTHPEibN1aizCZPCBBy14SXCkuSBmfopRPtZuv"
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
