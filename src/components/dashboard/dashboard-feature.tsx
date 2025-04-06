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
    "2yocEt5GuR9KFoUkJmamxU2AUMTsEyXiRAiMhKW3cpgyHJ4htxhK8fShEtVLXYstNt3fCghsbkDKn175sLM3547g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xpiCPsngeHqtEL9LBwoaSaT8ax6K9ca4fThKAbjCZS7BShVtCRTzrPjryDNFU8ggdofkF2cXsKewubZRKJX23x",
  "key1": "5Ype9YXwDwGmjZNcy2jJg3P2eF4EvBpfrDZvWBBeGs9CSHKcvLM4cuTjoss9PtjLJ6vGnQ7im8m5gqMPBMUPijf4",
  "key2": "2uE2kmxrcjXkRAHqkaiWBmCZQQBhZnvJg6d2N71MQfk3eMTUNsgn4VTRvZRUeb3n3ctueZdkmLmWPLvWGY5Txi6j",
  "key3": "4V2jbLs9bJch3Bpc4NrxP311yvZnVcmb3uSxACLpHBN18ZjYBKQaJKPGsH6iw8LJkWfYCEAwVKZJZPKNGFpiLUag",
  "key4": "fcNahCPSr41Pfh3q5CpYm7QHHCsJJXHbpNmNfVqkax87rbNNXQnVbBrMFHZPwp4R2L14NP6f3ZKuiF4MMjuSjeV",
  "key5": "31WEv7gh43rvy1fF3tbGWgX7TeRCzHawTZXuc79Ewc2o7BwaMeoNBfcQLCUsD3iPKzZuWwybrYxRQp4FdZuDMqzT",
  "key6": "4oUgqr3ZF6Uob8bPGLH3qotdciRazxAsrpmZ4iFwTgD9awa5CEVwLCjyr94kHSKcSa4kuap5i6pmnJJ7QqHgaDxz",
  "key7": "5x1D32G9Z7BGuer7D637UNAQSLLJR5LrBW3TXKD5WoXboe7h27HgwomFGB5X4XZPNoWKvjXVkfKqxYPbPjYEDGad",
  "key8": "3hvLvRfsAsEHC3K3RrAp9tM3R7eTbRKq8C3Dqz1V37L5orZ2sfWHbRGzhux3gmn4XSGP6cz8AfLE775xgGGVHVXy",
  "key9": "6619VZWGeeFk6Jd3a2UxEV1J5HPi3LtRjR4eswy3Nvg8fM5RdvuEx52fyKUXcj7SB7Y2ri2WiDorHoq6TMq3wyLL",
  "key10": "PNygnyr5e85uCjsoeE1d4BM7iB7LynsdhwGWfMSERkgrF6P49dJHTxB4cx3cVoJo3VdXPJwPdp1cdfYLDT94TFQ",
  "key11": "4fiiS6r4Ncz2aijNUZa9mCe8X7uyYczjhCfaRc4ocimKtFjrGHmraUq4GLHK8Sz61GDbALadthcBwe7vqzgGjNjh",
  "key12": "2CjmMsShaz57EFMMDXbU8iCfzMN6tqDV7sfy367vyxQMkpJR1yT6eKCEhLmUcoLA2ZCYLRJesj6oGZwdE7ygKpMn",
  "key13": "5WhABsk7qjFc7ZaJprAvR72387TcDSnKaVyt6gEQw1b8uiicES93FW3yRGHkgLUvG56PwUqc3Nq8EuKgPruxk5LA",
  "key14": "ayskBiFcBwiZvnq16iek9ebXuLvKWf14Qb96224ej1NiKR7szgfhGSE4rH1XFacRq8WpPf5duSSiTtgRkbb6B6z",
  "key15": "3bnBr6zsMnY5AJxcMZ6gfkAnYY6Q8uhDieAmoRbdazpvfvNKFLAtF31eGUYds8Jyq5rXkC9fBBJSHFQyPMuz5V1a",
  "key16": "qyBMFiBCWZ2ff9mjPbAEqJLMDdGaELMKv5Y7iyeh9BbwTXASXGVLfghF3LQPgWxZ9TsTKDQcZQYpTZqyjRLXobc",
  "key17": "2vs4JTM7SBNHbHZYv8Czf2CBpsv9TAPNxJPabVPRhY1RwMyhXnkPoLvttx5H2ExTGD5TyoRyRLM8JPtS5eeJd8uG",
  "key18": "5HqhmXffDzqxsw1sU8M1CSNBbhhStsP17T14fLeFTmUByUcUtHHpX931p3mb7gBfMArJQAwxWGY9UMQfgztjCV4L",
  "key19": "2zuudyLfhj3TKZNUP31ENDkshT2kDLMCSYnmrsNH32m4ENCJ3t76pRwnAEbGwpb9q1hphizxLp368P84YToYp38U",
  "key20": "25QidGU8oK4N75fVNepYvdygcjkGG7kpcx81pRp47wY1qKYeQMQyPmk4ja5NvdNQHZQbcL7b96oXtTZt3HLjdmME",
  "key21": "Vyh69toyQhaZw7s8sp6waoMgs4ggpfR11sQL5RPYa7WCjbZgEZnveV86zK3vbfkUz3t6qrxAY1ipXGAob49zKHX",
  "key22": "52zC1RiUmyo3cub9zNWyrNXPBhoYVffyJMQXzrqLWWUx9boR3prJjfrkvErT5juwRx9ycB33BCKEwe3KTNKVCChZ",
  "key23": "4rRuUvUWgnRVda7YVd1NTERhsVZ22hJVeVabo2sVF2i4m6G1QjbYcsQnwqEL8gmEJo6mqXjxeCjCirHR9ADcatHQ",
  "key24": "48drRctGSTHwG2aG7rkDzvauxX8rmkc5B92D5ZkzJgfJfBA5wZLLfNw6BGtZiHJmaTUFP1LiZmspWRAVtEd5sd5o",
  "key25": "cRfVvFkzoSwnR4M5v7UsoKCxizRumhCMtv9tE3ZbeBkSk2vTa1a5r2S53ziM3LkZzMi4tAMSrp8sfuHaGViyMPT",
  "key26": "5XCKWpixCDMndWwfGaRsvwAHk7Vs4tYYJtkGhiXpd47XQYrTdMF4JFGsvVSNuo4VDMStauiDeC2HWtsetbnJCkzU",
  "key27": "57XwMWjhsXB8w72Gm4aZf8JbWM4RgCmg1qeyRqbffPMNCbyn2AjWXvXNqtyFBzQEgW6WQPS3akXh6JBHMsKzSKPN",
  "key28": "4je8dddUY2ydnMnCLxhQyoQEtYEi4FumJQfZvf46bRdT2F8mGbzTxwdwQqCkSzwy2cG6qx8CRbqEZkd3upGy7AiC",
  "key29": "3SAUNv1oh3WoyURpt4AGmdYJViNssqRNHibSapSiNZq9R6oDK8LwhCaxsLKnnfq8pS9okYBjHj37R41xk4G59tCi",
  "key30": "rRVDo5w72Rz1gEcPr9Qhp4BYr8tfomteQ2vNUn1MX8pa5SAXkivmB1EgnT3ujKYunRBGYoW4tGDHFxJHDtZjpjq",
  "key31": "QRoq8xNiLfTvhApf6kCFTgdejm73NX7htjHxvsZDanFSejHkS5p9uAJv6TBSkQXmCXUAFYVLJCsFCXqfraPicSw",
  "key32": "2fGPgtZRfbcCV53dfNWP4wHtCYyQEgBSnsou4xgBUj7J5RaZrroNk9yYcn6rtPD5DPtdZMPQxj9Dc6SRocW5LJht",
  "key33": "Xo9wqjTrxCjM4oqFTXTABKHSuwSwV1spHgfh8thBwdN6C7AbZ6hCzybaTk5iYhge2ndxSMxMCmpLr6AfXLTcYgT",
  "key34": "4Z8zK5efq96FXFsBZ4jRCEU5p34EHGQxyPPgHy6z4Zf8rgAA94XubCjkjUvqBdWcuh9XhZpnUoezCrHqf969rpPP"
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
