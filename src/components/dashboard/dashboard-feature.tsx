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
    "1RdLkcP5neDToEBp3K4mZjcuH9FCKUBWpTe64xLC6juCmfFNm894VwZSd6rNDGePxpqrt9vLjJSpwciijjNsN3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ur1ZkqLNeawC8tMJCRqTpfRToVXV4TwgMA5MXhwx2FD8oLNWDZK3Es2YbXZ5fUJtkiLqGrtZFU28JTdoWJaEV87",
  "key1": "4gp9dN5D2qXreQh91ptHnJ4wL1R3YrnZKn9znoxdLug7AiKWbJ133GvrXd5p2gxLBwUUwtKkWXwVZGtjbNKpApHk",
  "key2": "pUNnNwmXStym6F6Q5WysnweNXLi4E1mNP7Cds3wUp6VxmEemjdZ5YtnqedfnJ7NdngSXyVa1rU2sKbxAsu49SZQ",
  "key3": "3eFQwr39quqBkibNaUW9zNRvDfSwPhMV3hX5WRg7v4wBzhYLi1yhQdrSZoDoLsEPkvqUYKfRu6oFctCZibNCfmFE",
  "key4": "3kzctXgvCdWYQyaVsKe2V4zpqazjMWffXk6uQV9kgRH26iv6cyyt49t3ohbEBDSKDZXK2Tm8gkgQVssv5xtX84QD",
  "key5": "3x4Nt8MEXWeVYtz2Qy7RRvDjtqABXPGrW5Zn3hnj4m8azPS522b9xn76KmqirRoK3NbGLdgEn6DY9u1uPWz9z5T3",
  "key6": "2ML4UhjZZhMBb86GFCajr3freoVqSscW2j2TrEUd7C9MzGHYcsPYC71R1NTPnnEhGpAQiTSMoXJ4CzxR3Ffe7tq1",
  "key7": "ufh4xXB4ycpTiJx11fkvMLpu9jGSvQ1tZM1ZJBYg8h3hD7NhGuMCnmvUTGSzBg3mUJVhxAXXeQx6ko28F4cqfAP",
  "key8": "4MhvD4bdsGPfthYQFSukFtAr5XC9tcJAGzxFUWpd2j3zHCnsySMG8aLWXUApAVkUD5o8rRvzzJhSjS1JtS1gr9W1",
  "key9": "67YuALgJ3bff7ariJujTdQHfi4Gd8rdthrhw8FWLC26RcG3AvA4qiTkBt3niTpxPciFsq7QWuNJTVrZyVUE3Vdxb",
  "key10": "24uHmYZWBmYbbEbuembXZkvyc45f4VQ4Vpo265AivFbjNs6nd4saBVnuybRVVhoKPS6FsmZviaGkavMnrBwSesy6",
  "key11": "4QoB8TVy7osTUYaQsfd3PMvWZq4UdviHQ9jUXiVFFyGxib3ZdBSxzd6onz7f5TncoN8Deo3fGzuG9rEMLFNTf4jS",
  "key12": "3zgmggcE975NKuyjE196TqaWPmiTERjDfL44AMTAKH5bhYSTidYAgzpqadEWsrfogH52db3srLM1aHNCsU4gjzE7",
  "key13": "3CY7T5aAPXokXuvL2MWECTMDTVTDFyMmKcHVcxmSugpBq15KjxfBpBDBHZT9JH7Q69ETHxCvs8JmBYh4uVVbHbU9",
  "key14": "i4cW5SbYakvkZaViaGfgNTbg3WD796ifwUAHp8VU3GofSwX68k5QKmATBiKeycSW8sa9YfUTCpAiBJdo2UPkUTb",
  "key15": "WYy4wAqeAoWAFBLqr1xzzqqkNYB9Kc5iFGKtGfDjgyA5sswx848CjVp8jo2svgPpwdGmjG9ioH7iEQBB63zdVG7",
  "key16": "51EK6XfUV8VVqkaa3hnv2KpmkCwYTRaVJVBS72R3Nsakpz8WcAzE2A3JcVVRgUgDS3f6pyct4C9dEsZXk2msXkzf",
  "key17": "RL1t5kv221HALT4MxFUhXo7i7vagLC1HVf4Rhkeq2DiQZ5yHeVqQ7hrjakiEaEUWEfzDWEsKBmk4LRm9yQvdQND",
  "key18": "5nrc3w2mCmUC5JobBrMqYT9meT9c6pHuvTw3zbAT7itTjEDdYu8qKExaFJ4mu7gdxWwZmCSmCT27aZfmqwmX77Ue",
  "key19": "8MBEkyPGaVouKZTnTGx5c8Sg4UHJkosnpL1FmewognffxhLZ4vfDxUPVHb7a5pW5HfADtEbdgrTV9kXQg4EJiWr",
  "key20": "LdfZCZbdT1R5tTiQbLFbjBvFDrVxPjFbm3tQC9RAiqg1yCWqqfaeGuBMZyF4nVSkjb5hky6n65YBk62Yr8DEuiL",
  "key21": "3eCWzJTyeYviB8LNvZZAr2P2tR6Y92u4dRiLHNni9ZXRX1pw9F6EG6N22CfNZvrM48makveyNdmDugCiL5iVfh3R",
  "key22": "4gv4Wa3vvxtUhzJgdx2yYTskQA8neF6UFvtLPHBD55G2A7hqJdhYcnS4iHaCd4XS52Mm2WXkukjKJPdRQgmFGSsK",
  "key23": "3ksUcQc64WoKc7TZezeZWPpyskj59JP9TvVysBzj7vXFdyfj7bBvRz6TBySLeiGP3jLSCQdVchetMSRMtygyn8y9",
  "key24": "3nQKRUwQaNmsvY3PaMiDFTtfkZTHeMCWL9BJfXwM518zhUUHudAWH7T8gYBwvCABezAuEZUiNBLofQ5vPU7rjXkK",
  "key25": "4RsXx6Nqt8XVRPitZCHixk2Pn56odmdQKc5CgDjjdqUdtUuy8q5fyNc1Q9NsgUiYBvhkAixEETdxZFcyxHnZDzkT",
  "key26": "vMPPico1jbKFKaEUDXUvVH7PUAdsEYJPKBFaMwLqCHdNbYavXy7tr9MUiY3xzYi3qBFYh9qKobJcEbLFgGJKTPj",
  "key27": "Cw267Ci5oPkSzUvh7D47rjksTU3TntVPATMGBtEUdQ15D1HDhkSg9GT7khg1e6GZGL7woKivmwuECBHqAk7PjAM",
  "key28": "483BfKKrM7WUri6n9MwpcBtq9u4ZnsfhyZqQ4r8PmxquwjyyPzESc35U8VCMm8Pi1ahn8LjgfLiWK7GdWLNcUhLw",
  "key29": "5gc9ctuw1vt1DgDEQxGnTaiWvb6ajiQYKaAReRbbERGoPC2YLSQRLL8bEsViefRLiBCehS6Y3MSnptgiJ2naoZpr"
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
