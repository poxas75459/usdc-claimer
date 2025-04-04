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
    "23kE9qi3UXc99Cz4xpZ2U1gmAQnEFUj1XYqYDai9xYiJuY2fd4YPZMHH8SE1uBnCBqFUbsRXYekUeyJ7i8qbDDfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eD4Whujt55MHogumn8nAMJ52BDGv8zcXwhQwpLGRYeC2N77LrnWkuRQyD7yPu4ZeZZVX4vRJmSYnBiRoKBp4Jdp",
  "key1": "23Pupw5dk4jLw6YWHHCMvJiaJubG5ee6Jfc1aCR6RT4QDqZDHVCiuBaKoHtYYR2vqzUidhpNN5aZDAjhyGLTDZWC",
  "key2": "5zJ727XM4psM7xzedvMS8fmXTtp1JjPf9zSNqvRrKFFoUcEY82mgzxz16Mmdb1qwsGF1MF684Qi5TMQ83WJnNPVf",
  "key3": "3LitNYymcNYGJ7KsFzkNpt2PcNXJzHC6egggEJV3UuXiAvaZtgU7oVPuYJnuoaKTXtHZ2iWMJWLDHxrqCG6hC7zZ",
  "key4": "2SACzbmPacDnLejpSETvaufQqoWPrPyo42HtjuyxmuKXaVMbh7JQJ6XJC2PZ9DX3yzWDmAYdQ8xyJeu5ufch8jSj",
  "key5": "24uXZd67Z9dG4hUeLiqVDZkgkP8aPzBjYvycPC2vphREFbJzrdd8gAW4dAV6bsSB4p4CNwToYJdfVMpFsv1nKBLP",
  "key6": "931qig3UomHemKGDqtde7SEAPmgaqmQqRXt7FoH9ppv36owxy2kjAbgfCU7dThfqmLXGuFUUhaDuSWf5Wtk9oTm",
  "key7": "23XZyUHYxMkCUNcMApdrqB7VtuVTHzMBr5iTQrg7GaqQvYd2gQCnotWxFmoV6BzL4T5Xae6TVuyhKdWHS8PYPwhn",
  "key8": "2aWZyb5jjFoguWoMMW2kojECGLy1Ybcv2iBPxrQMALs4xCE33GaVwZPqMC5gCPKmXCtb5KaYS2Ai6NA9rCc6HvnV",
  "key9": "5zKJmjAMBvJWKi6Nu2wQwSJwnPNzf68ddjKG1HzgPBPDJcBsNEAabEoDqngLyyvsYAZhQJ1NBo39y5FarXrjPGfk",
  "key10": "3pu3Bvb8sQ37HCB1VvHfAwXSBkRXkVPzauE9Ty7VeFm2DqGVBtdR2GoQ2J14fkBU6GKfbXXYGrH3muEVxcd8a3wc",
  "key11": "5nPK6rN2XMtBratT66ogmoNcbc3pphnP81Qz9yFeuEdkn8eZmwz7axnMfcVNo9qchGCrMUaZJqdoQuShVqwFzhSC",
  "key12": "4AQwrLgej9bZbYHKNWxu8MQ1PXXpgUeuyn7ZJhi7yhZrG3xPbwtP9mkWCNAk22oM1t91Uj12tXxgReCzCEPas3Si",
  "key13": "3Pi8hXKCDSX1Kb3S8MZCa3SGMFDHozM1qZxwH8cJUq2JDGsF3QXqMY5c89RwznDpvBgS8shMXcv2zhx2bTP8iF9G",
  "key14": "2pyJdbJGqTLXrAJdC4r2EHmDbBUCMy8FXY4FUsauP9xJ9LXvSe8sCJ7NMnuDyvK2V8hdrRC1swy7ro9kHfU5eAAg",
  "key15": "3DH7wRLb7aaZu1wm5s3wAusWVtrr5ruq9TRwdfWhiisHnMPue1tcFguwxbEcGhuoC15vAjcixzkNVzik41VKqeSq",
  "key16": "fsbLnvYcdEuJ7vQzWRho2MLfh8TpVE2yce473iuqpB47RUBsDk4W6SGSQf1UQEfAZ2F1H9yJm19s3ofN1aF6vaa",
  "key17": "5uWJmPwqXhk9ASpQKje5bY7GArggpk83Ah4up8fE7bdkTfz6NvXvMDcmF3VdyTZUcxgnZdcjJYDnbmbHdZHogvRu",
  "key18": "44oiQWCTHg5aG6fRSgCrZEnxihTF5qT4jGZB1aGTjXTgSzwcDc5QVncuY46R2MZkMLP4PoxNqdKdp1pR1EPv3bXW",
  "key19": "2hcZzceZcfEj94Vu5drp7qUkc1nkaHLfctqajR2j8kyVSwQySYW2msisJTzdZ6bF1gMnKeTFn8LHsE3teWL17PSF",
  "key20": "4irbTMBEt5Pscn26zQ1JWEMMuFEDM8oZBMWD1eH1titUwikgsmK4vFvVAJVuEqKvCf6NKdDQnbFkstXXaxZepQa3",
  "key21": "38RzFw5V2oZPhJNz55XAJd2c8YveB9jriL9KbkVbbSXNxx4MPziRWxrBerXAhUi2F6SBQeXVruYARG4HfEk6BdkA",
  "key22": "CXn4nfH9QT5je5QWRWYrGxXTVQyTW2Sf9UVzL2kSdRN2aeeuPG42JF95xHSdw2f87djsNg828YcXaeiBosFDRES",
  "key23": "2zDCyGGfKpRm6iirrmkhXpj1QQ9m6n8gCV1EFQk3j51z96yDNWNFyhmB4jQDmC3VZN38QuFQG7W1KGZ8wTh8m1vB",
  "key24": "5UbnGXYLXdcvEBUmpXaZznZay92fyfiEH5e9mdQnGcZXjqqmxcHRgx23tX5gcgfJoLX8ZgQbZjjvVbdnYC13qSuV",
  "key25": "44qDam7uWMdHuF7Yx99c35eSL925decpvyMozdPFJS7MCtmEbXMdXTjJhMfTjJzdGNuMYV3e2tTTfDnzLBYmijdW",
  "key26": "2mjM5GsUU6jxFYWHwvw8xMYhTj2Cers5iJrg8nAjfSWRCqKTSB1BNW8HJhcrQXGMUQYfwdtgXf5ESvSUtKHCexQt",
  "key27": "5GuvNrt3MoHRRkdFouTTHFSvprPZrYMCz3kokVWnPb9Tn3eEZpSSKFzBS1qYANKx5e1ipRNX1kDeoJbvtidpe8Jh",
  "key28": "5KJQ17x3qxxVpRnLMpGccwrDumq4rUisbW4bKuD5wnexX2DxtUL1U2274jEppHzT19oxFFBKwHzxtheFdeNgpRZ7",
  "key29": "25xEfZPwZbQhMzRG2bAJ2Z9mSpdJc2x1x27WzYwqQeYMKpPxe1Yay4e1Myz8q2kqHQYqLXYqFZyrCviscp4CHb4s",
  "key30": "3TEp1RDXFgk7YVsB9hswzNwb65Eww7RUnGHMmj1DwJ1s2sWcQUGoWTqRNNKndeY3axwY3krcP8pd92q5aH58xag1",
  "key31": "4ih8S3Gs94TMEwhdT6rispknNbnCUB921K8ZXtdAWoaBPb4TQdpN6WddJkc6712Xi7c674xRApY6mwhBF8rydAzc",
  "key32": "2JDLhMreb7KbWZgJmwgyZhctGPFuTLUajyMwxdA1USEaDredzVZM86zRBjAYPwd5XW36jmaTSqMMp1o69cuCnxa7",
  "key33": "59bwtuPLBYMha6fyb7z4mdVY3C45hfnzqQyBZ6CVkKXDLLTSqaRaYaCWw6Ac3pCWYj4ufbWrVacu3nXyVMQLGFLi",
  "key34": "Rjwu1n4Yrdzr54RUbEiiTDkyh14e4pVwP6bH5BL2uKaXke5RAmpBB8SaGoYuWbsxyZJHUSXA6LFebYuF2f869Vq",
  "key35": "2BFVNfe6PAVfWgvi9bo7LTCP9VYGXtzGrx3jnksw6wWMbZGqBW1288STaC96upqZGtNNVFJezBw5oGhsisw3mQTK",
  "key36": "4cjrkA8UGAiXUuSdspPLp8MJgKu1pKNhJ2PL1cdHBRUqmpUEprHLeiz1Z6kVcQ8hPa48Leje49nzrqzrz1vgBMyF",
  "key37": "cmySWkGAgH8PkDSEvRBYy2w6zyP3k3LswhikGKJjz3G7Er2vrJH5mt3Kna8swzvR7sL9VU6yTdP3HFZLdFW4Lrh",
  "key38": "zjpmZpm6ZkRwhV1mc5YWamJyzWuHrMEwG4ju9j7MkWJ8QJqstULVvVzoPWsfHyXPgXLftT2djMjv6FRELU27oWo",
  "key39": "2mmh4qi7HPaKLWZUR3LqkAKhdrdGhMwS5SnQA4x12q6Vwa1Tx5HhmJVwZys6JBp2X1seLN6YFQ6WJfig4dxd8WY1",
  "key40": "3ycY6PoSzBqbnQPS72zuo8ox1sCPhGiUrWcvzjaTsgcFYXHQSSSNHSEpnV9VU3FqMX6pddpPEqbcgLVhs8aEw1SV",
  "key41": "5oEhV3cF7JUSKN3ZsjqYXAwQJjkkHnGimhiJ8fwJZsY5KnzppuwgY5NZhn1W6h6Uy9yd3cBeY2M6qDpZE38tfea9"
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
