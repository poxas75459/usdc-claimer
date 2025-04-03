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
    "kF8iFWQdiSbYoNectHDJHYCi7n95kgAe5vuXrAk9G2oDkSGbn92WzucXPTktEPSiz182hi3Gsjqqt1adwp9g9JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5yFxU6kxBXDm5uLydLdpbrXRkkVoZughcxHRrPiVDi3c1doKzTgYuE7D8BFESrRnFNrH3a4i44cTbxjPqSPmMv",
  "key1": "4MEmEZugPtbWi835SvQmWDpanDP8sVtS1d32mwWEMCfpzAHUcogu7Fd8onJkmGM6Jr4f4zsGQoKG6P4tSafBp81z",
  "key2": "5v1fnj18e3qyXtak1Wwouvs5nLchXvaabigDNPGDbLNQ7iAvM1UCZJejmg6pE2EGpobUQWqP4WdeCV1DJ4QqZ1jF",
  "key3": "CRZwcBRsEE9avAZUbBhrAXeUwVRsWxZEHQWcnxoMxi21s1UjXGTQoV5jShP6yTjrUJaUqhRy4VhhbSuSiz7ufvn",
  "key4": "5EvrB8a6JPdQCixgrG4vn5ESzbiKn9mS7QKbNCYFUSzLEqfG6hKmzQYoeV2LsFzHWUAef62CKUB3v7Xo5dfaTgbP",
  "key5": "3wbiXRK1HCwKHHhV8CariqSoV7G1hJSMnJFS54HU3fUve82yNX71a6pz9eF9P81CbaNXS4qJTXByg9V65ywNu8Ht",
  "key6": "VevX5k142PQJvYQEWEAkGLoL5BiLHmxR1ZrdggYpPvLefKrnUFD92gnXhyGUZCrkgQ7HY68xBBwStgk9g9oL5Aw",
  "key7": "2aC4igXtWq6v4ADEu2Kqa39FAFukMBV43urEsRNPckHXi3eQqDbkAX3dJe5z3YavPap4exnMUGXSpHpN8fkV2t7X",
  "key8": "x24yp4XvTDCWgEJHQP2c5RuFssiQvxun7mem9GoP9eYxvZNdHJo4fNzMDN42D56PRNZgYUqv1Rpj7nYDH6tCNYP",
  "key9": "4Qy8ofrte3zY6CYU7mFGshyT2ghUMFmw3Hgh3wpuXJeJe6F7Pmc1HJo1Kakv21BADa93iGRdntfMMNnAeBgvtPUR",
  "key10": "5SP2C6fQGAt2142QcJ1CfVJcdMapYzTwK2k2t9qMh99TH3rnRVQjJHc9KFxnXyKJvoiNkzQBKrg2p41JHjdY5zM1",
  "key11": "3vk6Xzg9Jgy4UaeGLw8vjJUHHyXHebzhRgrTybFGNpfHdLQf3NhG48ENhtkU1waA7oFjMd7KjfQTzpArJXfuzmoL",
  "key12": "37F1wm1vwRobTprspWyhk9EHHqYUM9C6ykzqQamPkVnf9Mw4CbK4HsSrM7ofRJZxkqG6v2BcaFPTm98bUChPKby2",
  "key13": "4HyYa7QwnLwiPhUFXRN17tR2KMnQpPvmnhh9CXQXeMPRMT3V15FpxxFUq4zhyafCs2rNXH5mLCLova2shqNDJYiH",
  "key14": "3UCc5gpjUwMr9yUypwDZGWajgnUNTQUjASD4MEoRZtPgCuSkMgGqZHvhZf2oHdzcJfzidp2DYLsbb5k6iBTmffQa",
  "key15": "28MFqk6GqHP9obk1muxBSLKGty64WGZW7KBuC3wCfJRVAUMzzyahM2YiYdt7PD5TwdzAoVakc57U6gAueCkTqJDe",
  "key16": "5P6BtseqRBXP5NsyzgiqbPLXyNBvDQ1uoAjL6sPaWi17m4vtqjBaxDqpZ7UXRGgBdJaYVRUTg3zEbDNqcXJm24Te",
  "key17": "qzMTbnEjNov9EiVrzCQHT6mMjtysSSYhXxyskdtpNmVL6NRLfp2gVC6fedjkh6PftnTm7m3N3j6sb9wFxdTntvT",
  "key18": "3qHV1q4Er8pQy224GDE4pMc7bMdPoiHwrmFTVkdFtFxq1CYZ13oMHznZxEH8VefnmEgpf3Ljuv66PEkbsYQmM2kp",
  "key19": "5xpSfszfNTcvdRvXNgGLvY26TocgUMRx2YwD4FWJ1ZtXHkipdBoHDVGapNpjRszTwbQUjUovLL55Ce8uokWqV39s",
  "key20": "4zuFZmqYgFhbahTmwfSnDf4yMBzwutrrPLJaTzXRhcFU6deTX6kRTbNEao6BeRDZ2K5L9CFjvjtQ2MRQZJqZniMi",
  "key21": "u88k8d184Ku6aQioHVSZNx6XCP8Nq78LqpgRweEYLhHdvzCpzKkKUUe4fkNSNAD9cp1r2GiydZDhAw9qPfqrCAf",
  "key22": "3m1uX8XyC3MKEq8fP1HzUwjozjMeFJEuoarGrFdw3BcUNwpABDuNMHHPxrzyxDayhPd1VwVa6Q1PzAQPnTNPs7mg",
  "key23": "5eTRu2wc87LpJGQRpdUFNtSJihdyy5B7r45Z9rUDdTNzV3ut9kpRHXdLrvxH8ewDPuaEqRU3JhPCyoxcbcvWXmkn",
  "key24": "4o3kwYzA3FKz3Ln5a6SaUQkutzByAdHD748Jd5B8vjWgtDS36RuQWtJwkS87aF8ajhnfJu7NCXBBnssUdDehKnGA",
  "key25": "3G8pQoruFUQCDwLEhNVdftPQCAxHMwtPWGy196HozkEAFPmJwCiJWaU56ZPb6WJQnAWq661XH7Y2XUUVYgRsj4QA",
  "key26": "ZkppkknFuugGKQ5FMHKk7K25Mvm3W7L8jqcd6ToGKrkEWAvvyrPEXvRfeoG11BQPedeDDRSNapbeB8DzHiYsXWL",
  "key27": "5SGoH2LaPwEgwSJu5gASnnvZ1gjksme6dgb1kt67Cg9p792scsTzAonm7v5bMPZgxqhjYdzHoedF8qfEM45Zkmb1",
  "key28": "5pfvTNT7vdPGiviEraw7h5bSkWVn7RvK97aXs4TmSbdn5nQ1PGzVsbQh84LgMUrvJCbyLFETMX6PT8E65AUFSG5h",
  "key29": "4MUQ39VCJnZB7LJWnMRCuaugGdNpkzbchFWhDVoUb6BdFBN7RYeoKcF8dFzeRPiiVbkBbxUyuH7udwJSimKmMYLv",
  "key30": "3D4tCRRKXvivXPkfhwzAGzPYv2mYREtfskPmG7ZTgp6MRhEac7wTBXsnCNJCFLxsMbMshKPVDRuaGSrRCBbzdpQW",
  "key31": "3y4emKshCf3gxjNJCz1XNYMY6V2rdsGHdzcZrJkiHLiTCWLcVdBGfUrVkyvv33hgaVqyUQCPxfDeQKHZHMnAo7dw",
  "key32": "4H3JnYt11DJuBddpaRGXvpRWCuQmQbbzsRHoDZE98ubzC13rQS3FseSM1r1KxP2g6oCfsRoTQoByQtT3BrngVPRj",
  "key33": "49hqxbirqa2sJ5q5uQkFTy8Y12Wh7y9W5QPL6soTxx6mfXKy91NyrUbGwUWw7FyB8Wjy2phmuSnHiEJy261bRjGd",
  "key34": "3DhDszEzaW9Jci8QMdzmgufEto92TRd4Esw2xyFHj3mNWT8epjiroLCxuFuLzqzYnLtAdJDZRDJgmeX7LwtMUDbp",
  "key35": "5faVXb1oxNbbb5Cht1ehobZKebAyFbjkdQa7sSGs3gjW739VCFgAhEDkwTaR8eLa5fwD35nRDpbP2y1vRanhbaAM",
  "key36": "47yFJfEtiSbVggoeRtMmy1P5B3FnEnnDfjV2epMjY5mwzJB3kK414zhgAtALRU5aiuFa8HguT5FHzWJYR4vCT3Lu",
  "key37": "5yFXn42azeULPvXS79UuXcRfATUXGLdox93vvt8d6YYJPEHEVmJwmGvL9EwVnY4rjK7Uobmn3iEwE9Y3Q5MSwtxb",
  "key38": "2ekwEmDDi686EwRqrCqih8H1EQDkvUbB7uzjsVbvVCdFvExM5frEVcdtKaHC6sVrh4UBWt2sycL4G4JoNpkB35zo"
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
