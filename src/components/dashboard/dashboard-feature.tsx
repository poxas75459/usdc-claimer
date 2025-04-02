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
    "4hbveEK2EHdbSra39j6mQkNX3ZabVdowLvcf3EZwHCxvPAwmN3XdDY8UXuPaH73VCSMGND1Y2FazUh5wMt8gVdam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDXfbbtXrunkrzsJYaHRfo4CNqkjKFq7L1LcxJsQjFCWs9vZrFLVnwwAeepfxxtDDsF7TCCH7ciihUbqqrexfrJ",
  "key1": "41gdS6bNaVNcezYUaFNv7thkPM1rxkHVhWN9P1jJyicBNBSKR7rdWF4AvtkwZgffkFFyvZEcHwmf1BN6ADcc6NFR",
  "key2": "5VQWRSQQUrnMxb3m9tB6FH5diR8q6GDTBAhijhuf9Q4GZxSbjRbWQoaDqoiR8REcqhbwhgAPDk5LwXSS56sWzC5z",
  "key3": "3Za7uuVJZWnQKqBCCEEn8xHTAMdeyUwDX4w6KGJMiZXeofkTVVpz2Skjqg847bkZSKPdToc1hgbrMw9kS5fLsoR2",
  "key4": "276ug5YhCvj1NvVtGikYBpGd3F1Eo7R639x651ygiw1HN5rL4tDWSZkhwaYqWmipEypyhpYpkNLKREtUjJMfVVGE",
  "key5": "2kzjGL9MDNz2AiY1Zi7yGXdXRrSiHoiiyUHMUhegDp5vnr1xegT4Twx5mugWxU23PhrMWVd6cPbKJBzCizAWwXvn",
  "key6": "bvTTnzQ1vdFN2JybAnY7etAZA3pBovdJU8avSCqqEb6cTDJz6aHKZj8zYoYWQJUonCu66SnyXueAWSV9JHtQG65",
  "key7": "PecfJfSdwpfGzAGzhQbbFAoNzvmXoGVmbjPEcL5ASwdLUz3WsitaGaYtfWDpY7a3QbJWyTbeeAuqWbAfSXKfvd6",
  "key8": "TUaSJF1rMmHpjjAcQavK6La5DxsDV3w81zfGqJnpvGXT8YVLerNmcK1XTgX6HnEr8F6UAGSwQXP9TzM8Rw4ksDL",
  "key9": "3t9mYNzg3WquPptN2SKCT5xQ1aR5deriCZYn9pUbCokE4kUEiARfHEz7hdCVsWFFLXJ7rKuaN6fgXqW2sz1fgGCL",
  "key10": "cSAFxNRssct3FzySUsrDkBYoLUdswvBYQUFJffAwtWuNKSyaFuUWYNmqFqg6Ryko5XfHRqBRFKr9V8rPKyhNAvn",
  "key11": "4xBZK7MGLRHAgfUiezxuD9rhhSGXhQtTGrA7HoTVjYsdJMWhcm6t91aLJ3ku4JRgYeEMEjXnUXMnVrcDKKvqDUbX",
  "key12": "56t6Tr4z369SkXYcEWAhRmw4Yq8jwcznJBmmr5oixvMmARfve5GiT5287gt6mRekohS8PVKoHX5n2HkGyjKyRMvm",
  "key13": "CdWr6dftQqEAa3nw7SW8iC9xfsvVJKLgDc4Lr7VXLcsYSNw4wDMMFumgt62VX8T3Lg5ZoEpuaTatwHWBZuf6qpJ",
  "key14": "4hZbj7pa5adFne8jZWMz721KdE6kb6zWxKGK5heLP59XMvcvE2gXnpS9yxtwYaraVnhH3pAc5WGjk4JFNwtnWTq7",
  "key15": "5frEkHofRbjNAq7Y5sXd6QYoideaKDwKTLnTEvmhkngX68hR5oMwZYnYCqMn37Xt2qZ2N6nQwqUVuRw97Mcq4YcZ",
  "key16": "272F7cg9WPQ2SpkoudRKeQkJW3f8zULvyXaYqz8fME2S2tenYb64RufSJgcubRxdfDkrQmd877HPAWPEYMY4ocrc",
  "key17": "55WeawL4VgySg3GySLFTonFMhAZcp6JvKfvHy811PcAJb7v3AsGKCstTGaWqUAYhkgYKRojBJQX1p15sYuL7Hybg",
  "key18": "2mSitAKxjCxq6WYBeTJLdShcejpiR8tTL7aBZouCzoCod5hMPLS2igd8LQp6NFWjosm8RxogNJmimzJu9boBaXPj",
  "key19": "2isYeiiyZGPyQ6mvYGywjxyUtdiu629wNv2nASkjbRTV98A61C4oAnsEHcDWVHRaqz4wp1aNz6PJFL8kXDw3rwK8",
  "key20": "2jBcwXhewrJcqxV8maNZHe4gZggQVXncqfCpZcS6oej7shddqNN3DU4cmq7ZT1GwX7Ef8PmssTsum4DT58v8kZL6",
  "key21": "5TMdP5jRzthG9U3LjM1scTZAoy7G8K1z9iqgdbW8bF2tvygJLxas3EPekRmUN4AxrLMDyefpodUFitQDqYUnyUFV",
  "key22": "EV28TdVFR1xsWJz866i48b2FpAxLeDcTXiRFrr9qe7x1uZrr4T5dDGNPPHhmMcofAEUGTiAGqauB65Ez2f48TYB",
  "key23": "YQduvDGBEZHmSsk17NRmdwBysxyLqkxdtUbKDdebLjCbPsvMuD384f7RmmcUkfVR5GvdsgkF3d385pEhpFKoSCk",
  "key24": "5R2Tz7ratPuLaiHCZgW4778uAjzQqtRvpVjX4ntjkaR5evfx18Kk8HdY6KYFkrpSFrjtE8kAQCbdz35MX9PtKkDh",
  "key25": "4Vi8pyvnnHFEzcpe7uBFQBMWrFGjfNvYd9sEgJozeRpKfcDZLcfNPvQ1NZne6A67TNqxfYYpisddvjHj5xFrE9Nr",
  "key26": "5yLfVD5vsb242SREnzCaeALijnopXBC59LMuZV3QNv7ZatMV3K8cJBCgcAbcGkJ9DuoUzn31jSz9Q5jAgdy23NBQ",
  "key27": "3HGvbWKuGxB2u15pb6f9hb3pQa1FLpo2zxzHKXFQTQuvLvVtWmJ7nNCpZW6E2kst4BUbUeBQcRGftTAG8p5HA9mX",
  "key28": "QPdmR1Kpd12NZRtz488nkd65gVo1jHZxHLRL8GE3VeGdDdBYGTD6zaygRGz7XijMyXs2HrmVwQLCrX3PYga3xYu",
  "key29": "4GsW8C5acT2Q3yW92j1VAKbp5DB1A2QfCvDxYiBsuNqk3edSHEuECGQVArZbt3PhbCJxYbVb79yo4e6i3YadTrDg",
  "key30": "Ed2KRUZWXuh6RuE62mBvhgoeuHAWvEHp84SL8EUUsGKp6smegvivPZCcmjTvEX8CandU6oNhC6BFouw7nvZp8hD",
  "key31": "5Y4vSJQCa82aXNpVQXkY2bt46Ybu4ZwiQTy6LxzdzZuD2BQVLXUXxiDG1t3WabfGX2D3CPVMkGcshKtxNkqXGJyR",
  "key32": "3zMT5XrqdQR8mbkiVsnUNgQwcNEE865gQ6aYEz7tGBySqit8xyeeaaq6hPhuEQWB5mc5Rj42ELURQQTtTnuEuG9W",
  "key33": "C2fszFkwSgBGriCcoc7LLj9jP66HmMiykpVKJ1DWsMTv9sZmA4US1bPTfoDNWBENQx2yYYpg2A2tdX5HxMgYdi4",
  "key34": "4LttHBN7JEHEKvjBpug2RoZLqFhpvEUwYD3K1T1bKmyUGjLbpQLkVph5atFEWKsDKNbChEAgedqyhRrqkjuH6PBZ",
  "key35": "2YxW9iAN4CMheyBJvW4Ad84xo8CBDDMbVstTBEnnKxpVwsmXMraDSwb3PkgqyhU5qHnUjfkuyq7FsuJ5J6FWJXWJ",
  "key36": "356jemi9UZXPBwxfwUyAWRk5GLx7sqsphYscstYEidaWwgz986ncztL1S3NjA8VBWF5ou7kj1iHTNCYfsR1fn5vZ",
  "key37": "4Rvj7G6rQ6g4fuz2PcHc9TtnTu5H7K7a7Yc18aGrPH17yDECj6YmAJH5wEL178DJXBXkUs1LtrSgj8eQaPUgL7ng",
  "key38": "3s2scyFBHJQb6hnLBrCmp9U4NrEi9H74anEjvoxHXj1T3dX28TwBaVRsCArGroyfLRtf9pq3ybyEPj5RxErLPWEs",
  "key39": "2ReHmLFdEfVqGTfSMEf9PyPoYe3ps2oCFbRr2MRmvDBeWHNrHkAofW8zzGAdu9SYesXPH9M3N1UhqsfCxGencLgw",
  "key40": "4DPbDmGG2uo9rqN2kF2LBHwu4fSSMuLreJnoYRBEYydQrN9c9gkfGvMJb4GvfCaFFkkwAJqwKVgGEUU5A2VA3md6",
  "key41": "5KYxseiwDPxziLsuy21XtcGcmwAqRTykEWMejaJfMWdUvS5H2JdsED73b7qiC87oFeiPkWjuUFbVkxXscqteDPQV",
  "key42": "3hY65a3JzaPLxfWgFtE3gaKQoMwDZVgZ3tRAy7xHZDk1DxCHTFbeMjKSAF4XgPbD9ad6eWUE7TjyfEt8xHwnvDaP"
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
