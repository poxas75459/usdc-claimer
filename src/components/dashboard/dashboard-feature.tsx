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
    "3JahDiDpZGUDkzWJJ9cSeGMRn75LeVvBFfwFyk7V8TKdgBQDh6DJ28z5KWDs56NW5cVtMnrw4p446qsSJKZAgidg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meiUXgmuV5tzGCZfWLCoNvUDzBVGUS2AJzS5R7V6MALVPSVYWiYLXhyK7DyBXXoBuYgnKH9qomzZaJADhMVXRfk",
  "key1": "azkNzyHJA8gQdnAWaMJK3r9QEobPRDEz1B1VBefouqptLTz6qu7Q9JtmdmoMqcpD7wpigQH47bfspmkr1TxSWeA",
  "key2": "JkQ66zak1k6ox5d8iNQVNKMAC72CuqZvmRb3HJ8SMBY3jLCJaGoAB3pMnjCQLdcapvWhpmXo8g6YYDQNicEpPqB",
  "key3": "4t76Ce6WkGCcgrcYt2coqoBym7qrk5exrFHWrKgy2cTdrijH6x3obMNCDja6XQNGm2k9AfPSy7QQXSgpcxpsQ3cU",
  "key4": "2RiHq9G3fsjogD5i2ADTw4RgdEYAedSJc1BUZVCKaF9LjCLXGrDN1pgmvn9xEugjP6UjBpkenV4kZY9Mfd5Jzrhw",
  "key5": "6VUifeVswnqnqroHENqXCxCUch5PUiH5x3C5BAZ7yoXvni6ZoNcgvYB4VuRRHAwu5fcwBF4gXbsMza89RHErK14",
  "key6": "4jgFEaCDU7pM2qAjHy3sxdhjDzwkUKgJJZnfdNNPF3mQzyC8HGJ5nm4KskZXpUQk1WKhsaYdSDQTnRfJKRATWWsq",
  "key7": "RC2bcuZs8QL9X8CUme4ezpDKMooR9wDrYuqXsyTmabwV9xjTcEV7Q1mac3bZ31vGzX1Cs4z5LnJ8WrPANHip4na",
  "key8": "5ivr2P3gcncRYDeFFoKGScEujpfse3LBKSBSdXs7xg5tdWULL5c8pyTmioanrqwqJazUjkAu39Wu8i4DnPSwwwJY",
  "key9": "48e5H9uTBD9PDea4iduKsr3ZUNxx2Y6HwZb5VJFsWa48YC1wvWY3jGkMvwar27cE82FAZs13SVJDQYjvwrX4Zb15",
  "key10": "J6cdQAjX5p4i2gm2JqGnniE1RLBZHTHgmPnozHSBdos388f68jUp8GdyN7kmCZuHsekSf1enLgA9x25rtNWGWAA",
  "key11": "5MiUTnnN6yxCdUwGa2Pf4bYYqfF8RnVtu8KCfJ3SG6wRChzjYfVgi4X1Uv9K2Wf9UsZcaPVEMcM2TJ2SySMFj9kP",
  "key12": "3kJt2HfnY4mLzsXgNUubC8Wr8rSA445gSjayAMyhjoM3MAEqZkKQXfR6Y12NHfUyCTj7doHv7d2ZRf4qbsqFRPUm",
  "key13": "2YFXXiQZX6MjF6DpRQZkgxxLZfN9rRd7ffvocY9BTrsWYRs2n5FHYwgtFDx1Ze6yVrTQdzjHa8gmRkV7MN3QkzCR",
  "key14": "2EwifM1BUTek7a47UUV6fh1c8jDw4siXuhLZhUL3RFBA4ikFsHmG6qPLZGUwtSVSfzoiPgrs4en4J5HfYUdHPre7",
  "key15": "2RQRmmR6QdJxgzNiXWsYH1KbDrujHZ4fVM8NbQ3kjUkJJt8FHz3Vd6C7ppJjEejw6KSuNSeL7fe7TG9T2yms56ZW",
  "key16": "669fB2pr958yYq3fdmC5Ev8x3rjH7oBgeU6vVBsQdzDcpnT5S5zHCduHkWz46Qm6TKD8ihHwi2upwfVmMJAhkged",
  "key17": "3rX4Umnu9AYFGADVNFLe6MBAdWf8BjMSCFmSSMgRHSkqCj1Pdvf5WKXUZcECpMe98ugaYoprzZeHnFVGtw1jnytP",
  "key18": "4Y6UFD9FWUQJq6FTjpUp4DhgLMpdU6jUTJtzAooYvNT94JkE4NLY94wbkP5MMJ4gaT9MUUiL9syweMWVTa4yvXVu",
  "key19": "5N4FYVqWgq5NADybBdzHprq2qsfLV2nHekqm99y9EGLuAe1gQGPMCtTevnmuk8JnPAuifkPqdkXSFPa876xyY5dp",
  "key20": "2p3rFJmj1bVG42ukPJq5hvWkj58Ahzo9bgHQeBYX8v5ro14bABg96rSbRERMX5CD6An1nJhkCr8V45LHY5hDB51s",
  "key21": "3NVdF6bqTKn38Q2wrLvVw5WQJ7V1cMbtZNQqJw3cE9MKsyUKwjt9PcLLW7i3EnJMV9BWG7xfdDCzS9juVSTR1gvo",
  "key22": "h6psormhcaRVH8N1mMSzBXoALkwu3v8XZ4DjF349uL6KZfa75LjFzFRdjmPJNeQH5jL6FZhGicxrLBZN8xwqN4n",
  "key23": "b6rPoUPXTCpWAbfiJNS191VuK3yqvPHMdhGPb9Pr9fqf3wXuZJ4JRUfpUnER1YCe38asGF6yZ3hdWPUgNtosg7M",
  "key24": "53pRoHnyus589XntayUv5AP89TskFo58xzGaPC5RgPmPUCqXrgy8muSpdrT3FAd2JL1bnztt2UbxG9u5ZDTnQKmb",
  "key25": "5Qg2GweXHDatE7DwzJmVnDP8iT4ATLhR398tQL7tgp8HhuGw5sX8DSMgLguipz526gV2X1pbfxij84mZRPVENaW8",
  "key26": "u5YyVDnNddyW5L1JeKWxy9HkKo19N9Nxw9vh6bH9XgZ8x3kY3xKgqSXntCjFek6TX9tdCAUwF1vPcG33RMwHnZg",
  "key27": "49PtCX7PzrD5DXavATDSWFTnVAoXQ69rSW3LUmq6iPRhGYh3DdFWkmoR3ZQc76L6kQXMbmCAuzMsdqGQJbiBRE4m",
  "key28": "31kuCfHfgWRmoqGAJB2qcTBdR4Q9iBhujsLuoWHr4RGRcRxyScaV45VXeZ5RzoejsSLCikfNQCQZA3QTMYriFRgC",
  "key29": "2oehoF2h1smwQxthHfFjNaeWEdXVu7vbQHr5nPovpmja4jjwDMDn7uqv1ubdU81L91WsNUfBmREX1ZnnCsM8QRQx",
  "key30": "5Hzj1KerWLA3ZSw2HDvqhWnubEkttxsXhBz6cBY43j6atcH8hJQS3R4dkqxRuuU4B8woRizH9Ua8CAhW7YHFAwYd",
  "key31": "MZkDcYQZHhmw8K1kcNhTP81sc7jyXwK9cn6sGWxTnNAP5HqGyT8PpXMiK1f2XVKYGkFMcuiXttT4TtZqmW7aQWE",
  "key32": "28b2gEpmdvGYansHKKL3tGo917QmFAj7NTwrwMWgFmz8pvc3feCHnC61F9jAm5U5HgcfTe4ARpdBaMXgPgb7JnSU",
  "key33": "2BTywrxqSTyfUcumuYYNSCTC59TSvHmNSzRgknyJ3ymDN4upLJuz5iwgBkbkwXFNGVAs8v3sNCdC9KZCn8ANGzNH",
  "key34": "525PbpyLZ8WCfnBcV9Zebnh82QSHRCpEhuZ79LG1r1rWcoiW9Dh2a5YFZYQA9UmUhUr8dACL6QWRKhnutzZJ9irn",
  "key35": "5FSxqfZUwRQs2vtn5CSo4FHb27coixyHoQ6MsBiEBitdc54xUvwnoSrbiiZN1Mf9uXBK6j3asUdr1jsTvSoyiPG7",
  "key36": "3VwLRsEQZ87KEMoHG1nMtZTKb7MggRAxqcrbYnseDsvi1Zk4c864L8AqkLnU35QdvpyPKs4xBJc9os8FvZwGT3ad",
  "key37": "5ZYum4C9CNVLe2BU1DbtS3BNSiM3Z3Xayq2eYtXtYuWR2RetNSTFXwuHw8yqetWZBmxu9m4gQuvQBdfrcK8WF7RT"
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
