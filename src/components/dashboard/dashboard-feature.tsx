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
    "2iTyfh1r9S8aKNELHy1DHodnGV8fQ6xJAxPu1PXnJrXBZcG814SsZ2c9eUA1HTEfZjoDFfMpVR9kkHuDeTCaPsdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4TW5tVR1s3f1vHPkYAJUqLsFiAABbB8RUSXeJsCYLRho7n6fNXhNFeBH9hJ835o9aBxukeLEHEab79EWiabgTa",
  "key1": "4tvuzviu2eoq4eEPVpseTQr28tVXmt8Pa5EyGY9c7kCcD6FUAyNz9EnUFh23vakXGxnR9p3LhaYatXjpx8woPZTc",
  "key2": "3knKKoibvP5KJYNfu86RFjoP9fukPU8FQmJon2wzGjh7pr1H3MR4HKwVkJjjtBripr6Ck5N5gc1V4gdZ9aAv9yuf",
  "key3": "5TFFgnYuuVTHWh3zEtSs6M5R7J5pfMSqQhPrE3xKFhiv2FCN8oVcyT9iWMqYjKwDgk9M6FijZi5WA8UXrY47ftB7",
  "key4": "2ohwbNhb1he2mPy3hdDJSVuZEhf1mv4GoMBfNeoib57acaXjv8R7thkTMa9yiC8mGcKnkgNyuTm7c59N7Q19unWi",
  "key5": "W62gbaDZA4czHFi72NGikEjbAM4U9CiKQWiQ6ZtataTZ7mrf9mVWctjvu7t3pDEvpHUjkqDpSEgbbLdG7cKoqcY",
  "key6": "4M7H3uw6sqaN1uLQ14dbdtquaiwVNL7vkJgTL4xQ9BLF5DA8ACoFW7kR5RKSTYrXSfq1FK9Jkpua8Uzm3G3BfSW7",
  "key7": "5SWpJnzbZpZ2uk5VNMwhjCB2fQQcM9vXe1EhjqVSsDsVNwtfzdzV7JvZczPaDVMBRgs5sxVBDNvQNpe63rXdxGpy",
  "key8": "5KhpbUf4pj6mX5anaM54Ntkpv2FZjxSXh7YTCYhiiEHePxKuYNWwFQSzqExJs8qA72NM4St8cNrJXAgga1RTanDd",
  "key9": "h7eXLDWtzie7JYbzXQpUWqVo1bY1HPd87mXStE24wDYXsjBwt6zzb7QgmVv8RwmToYCd2G6nj5EXwi2DuiXsLmK",
  "key10": "1kKpjwa4pdv8c4q8JSRcznNajboCt6WofkuJD91vCfjk3cm3XApFdZhTjfHZ1LcJsj641jfMqQLBaWuSHvjHzuV",
  "key11": "5vwmQgGUGVGtLQnGWyNFXTr5Mo5jtiyEtSb5zHdwLJBAbzLvg9j4ECsoKZet5fGfBoREN4VYMc6HRz6hcqo7CnTf",
  "key12": "4j7hcKAZcDYvuVFF1ZatqhEA2j93ooC7Sb8DJFR1cdHJEY8gNZwKgScPzPYqSfBypMzgMN3PdQQUvnyVgh91woqF",
  "key13": "2uzGRDToJq1ZjTGcpqqe3R6JUBQte6x6goKS5d61cy9R2CYeXqFxNYt5fdyEXR5XbstneNfyiEWeA6v2z94Bcjyc",
  "key14": "5K2T3cRCmHhHjZ3bp6ESfwRiugiEYsyCQPcXFY5aYQnurEBw3w4P7kmB8QyyQZX15VjadYs1GUSWLSU7AZZvhJ1k",
  "key15": "k3vzMXV12oKBjVjrCxfjUnP4u8gs6yWXvfGzvAbW361QMu29MUUEw5XR5JvJvYmvNZdMAWM9mdJ2tLPe93aV9BX",
  "key16": "tbNZejXBfASF2gy2g2xNqWGZJqCRB6MCDgLV2Z9qwBm2nPnBSqRZ9eJZkpjvuTTnVzJcYQEwHabNC5Uvt9uqfyq",
  "key17": "5agBsdQvazeKzBFX9nt9NyZjTqavxiRu3oqXgD2VvLwdkHaGjuUca3zLmrDQL472GRDHP3qNsb3kRaDe5hqm37nB",
  "key18": "38b3XHDAMysTZ6RcM6bgNL7YVKSTG7VcovdatqjqFXzKUPqucvpZiToDMJUMwDcNfSCE2emu4DncT63WqtgkpC5U",
  "key19": "cY1j9ZdDaHobwPFCAQMggMjAxJM4YZgxdgQSzAFrAoaHT47hnxiiyM7FCSReCc423fcUNz3Rq2XyAzwUWPBmrQ3",
  "key20": "2NAhBkdyBFkPvAqynYpt6WmJhkfCuaA96sT81TpacaJGDjM3PBnSjSLCT3Ypc2Fhq41xEy3eHj1dD3zDpCVrve6F",
  "key21": "5mwaNbzsj6i2uSUjwnKiPJiViXKFJdDZqccYWGFJhdp9DwRT6TKa37tuikwhXYTgDKFAsveeatq6gnECTbvfwfxH",
  "key22": "XkDsSfJZ8ug5eeGP2G9ijhh1Ty8UhhSrqZZPBaoJ8jDstTnRbZqP3gMyPqFr8Joib7FQFD8dAsFK11h41ensQ18",
  "key23": "vhLzDWHKNW1ybdJPNvxRTxksq72cu5f4Tnf4FTHL5bSgRSzjiLN7npJbSuXJ35qoWZUSoqXR6MCk1yTKyQeGBqp",
  "key24": "2hpyjZrZ99CKJSwe1thWNbJAKQkr3HsWPSkvVn1KeYM7vH3xHjugYxUukjQ9FDT5ujp69owWsU1s3txrtGUWu1QM",
  "key25": "juiAGa8NLHvqAgG5jzSnDdBp65rLufW8d71ydovwexjAvMXYDeoCLkkJ4CEbwNg3hydF39u8BvqdsgHXEhPo9q7",
  "key26": "4rABUnPH52kKxsGay7f9nMsxv1J526w57mcMFCu8CmtcF3F8yBiF7zDQsYZFMipVx5CL9f2hDU7cWvZFzWzB5nLf",
  "key27": "JiAz1Gn1Fsy8NUfPXnDwB9DCMLK13RBX386naYZh9QsVBAH2Mee9DzjcwsnxiEdXtvBkzSnZxveSqitXbpKiUoA",
  "key28": "oJLqxN7P9YzueSpDFsokmVH3kMRjaj2uohHmd64qWno5cPzffmjhCgQ59DX7Kvv1e4aQBH7T8yqJ1PDEFvGWpSX",
  "key29": "4dRjUQHLzqZaY4oVomxsDhYWwVSQAg47X6WzDKWZHDU1CrP9HqujvrytcZxfictn9xBXnyBqaaVz5u4gC2KBnAek",
  "key30": "4Jp3JvHavtPKoBqrxgx5cRTCZAU2dBFS8hokGs34H5AQDq5kV5NZDGpNapeZx2ddjPKs9p2aLionMjy6JwkC1oU3",
  "key31": "4CdgkdXNfK847Y6ba6VEqiKxZADd1AhdzTJ6AQzLeTfNDiTttDRuZcDMW7YENvjvfGP3U4PexhMvbUK5C2CmsLsq",
  "key32": "2J3LaqNEhZUdwTKn8qPBHsi1v9Ujx6VeWTQnmWCRLUCp4FJ2vaUMYyimypmVNeoeCFAo7knitwhGUz9gumxSenXm",
  "key33": "hk88fdfJispTt8W7yAs1RLSLgnpf7EHGjXwG8zDWkuSoRnfFT5vtXbih6TYcXc6SBqBiD6zxwVk4V3x4ghpBXAd",
  "key34": "2DrSh6ssrqin4JdHy2tBjpUmhoGQ4aJhmHcVdfkXS5NNtfaYWMvhxeTss3vqVhhug55KXMnCopwm6Zz94iW5a6av",
  "key35": "3a25g5AdnQJbrHzpmJqJZzxysC67eyJTj8ZrvG9SzGioXYitiEJwvnnq92ptK8zJRUHZeYa1sWyehLbw58dMQQGd",
  "key36": "5MXgBJ6ZCqCvXNcWFy6gai33k9GPmDs1BNX5bLAigqfkfZNsjWzDx7TtYsD6dPbKCxRmFBCG5n9BfMyi8zQs5wvH",
  "key37": "3tUZGwz58Djtdp4uERkT9pVGVEC68GGsi2fvBaQdaH7S3cHPQSFQJesVvjxjefcGo8jjz6TgjUxZ2KtpkdkaDKza",
  "key38": "2FfnK9Q2Z6T3AVqietKP2mUAruK4LzvXU6euHH5fqtJkceVM8wqbCW1vnCpHcQJhka4f7oCKXgnFndCdggsVvj4K",
  "key39": "33MGjKz6UshisiqUpCHikaq9YmujK5GaJSGAq11KtMt42ecAPiGSmmKq3xL6fbqxW2QGmq3UrsnpmBD8ZS5s8HdX"
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
