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
    "2MTf9T1DWeZsCgbjujPtuvimwSSW5Pkn6kGnQRSVeMe6BB66Nwq4qhjT4C3fbyXyE8Jfkho7F7kmbWQEg9trjLAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzX4DS2pLwabRRVyUsygaNvvKnqKPLa9CSdbCCTEYGdhS3jwMzXHUtRRJvcq8SKsTAM7ot3cxiEwtADJnfmgRAb",
  "key1": "2vGwmj87BaZvuCwHfgAp8tMX5V9bGUMuFSFm2DEzxkEnRC9bDLj5rXPj1H1CzknQZwbmHT8KGPW1kfKDEdGZkXXL",
  "key2": "DKW3cG2K5gXoxy4qgzX5WYMGjYqE8MpUDNMSsuuf1QFuu7UFtQAaSgVU8bFeUoqQBbrtD8VmMwsuDSLNzHih4gf",
  "key3": "3qy9G2EKVmHmBk9L4LrJ5ACprUQ4tDruvTSEWDtXP3nRkeRC6r95UXDdBExY5uatNxTTs1rp9oyjtkytsHSoyfdZ",
  "key4": "SsVGRkHn5UerAnVGYXUtEpnzKB6NkAfnBvCskHTczi2kZfjxTc7rhh2Pw2qbeAnyxKNysHKfbHqCuy1QbKAP7yk",
  "key5": "2kiaPb7AKbu9vjsk3zNetTFiSNYXEMiP2tePM4ZBnUWi2CJVp8EP4mp3yD3VwAzMvhTCRMSj1W4z4nazVSy1mj7f",
  "key6": "3ingQfCWAPcRo6G3N2rYe1PPNJBFY95pg1WT8aG4fdZW1PPH8XYWvh8pR5dJ3KaWKa3KjJyLWsL8hbSgoLojozYB",
  "key7": "47VbF2rZ649GC1exKMssRtZWGDHksy8WdDrV43misFAnkqaMjSHZpBN6WZM2FsSBLewcRvqNx12i4qzgNX78m8Fy",
  "key8": "5qLTHjz83R9MV7tgg3da7AnMkwSouRAZ4A2MxS6zSAbAoq3U6Y89ANg7ANWrs1jzLqLLwxjj6JTyingcLvAVS7Hy",
  "key9": "bjxaJAoESDd6seXSnwJTmWFtgZQs9trauVzNseUQX5BqDvAWXbBksH5TS7qfeMt4M4odWW8qX31fsBTy7uVquJn",
  "key10": "56JC4t4AeEQrxGFbBzQhZNLP4PQYCWF16TZESM5dau2jnWrBkPSgH47auriGb5DtuAKQpvztR3jhUDvNxjKdZy2a",
  "key11": "2dovJst8k9TGGx5P1hxMJGN5PJqn3P7YnC584yFqDRHetEVjEnYEF7sFmCHkwphXZZ3FbYMsvFCdYjYdnMcLmfcf",
  "key12": "5cRincctgM1uuEX9yrhuAizLNLNWJoLTSRSJQBpNdTHz5TZQw4Xdit61fDkJWrQDYBk6nTojq9JZhctmHKmEFFvM",
  "key13": "3NpunxwNqXitx35DzmkxKXvuzGTb4NscLprrgVbjP39S2r62YApMGKtvSebzuxrHYDk8BKDPEgnoNizrkrPt4UmG",
  "key14": "SLje9Sv6JQ1AYuEZXpZc6eFVart6LYSJC539K1g3ktKjoEEzzdBaGivEje5Drw8HtpiHHzzFPyTDDJYkBv6v8Am",
  "key15": "T6pLjqSB81pT8dx5sxsQ4u2PRHWc8fgd8VU1SmPPniBJqrMsfWn738pyfGb8q7oM3hspCb5MdDvNiBgnu2zvRhf",
  "key16": "XWMAZTjhcg9gKyXxSM9erBixrcQNjDovKGpC294M68Tyoc35Pz741q9bcUeKNAn19dL6aCiSjDQ3ibjMj9Liyup",
  "key17": "3bLPp5GbbTQPf3Qnoc1W12yaQEyXKePk4XDExZAFeEW32JBK6fGLsQts633y53HEK4RRMcw2StL3Q7w7tErD9wkM",
  "key18": "5D6HrCsJZ7bcnUZJoryyaLFfVTTDVNgAmGDq3WQufK1sqrBhNrtpQPYikKqgHjdsY4XqhRJFqNAumA2cTSpsEavs",
  "key19": "4j1x1JCYbRVNve83oyxuWhXfmic488Rkpxj1RskntpQcEqeYpnFLPZ7XKV5VsutZzsd4vszFTv6ds4igTmr4SXUG",
  "key20": "5SBkR5mowGcu7kLSYL5QZB5tq6jZWBMLYfnB5Z8yun91nY6CRTGALH6ezHBU7p5iqUv4RiyqKSm4TFoc2A4uGbcY",
  "key21": "5Mh1vDVjqk4VtEDfVVw7afHamUqvNri5eh2Q67n9kbtaUnCfcfTd1a5EcEnkc9e11tDR9dQxQPjwbm3H5opEfabU",
  "key22": "quywbPp9HYspeswdeqAXDpD7K8M7AxJJYNND21kdLqK58keQsrYET6FZGLFbS5ApsjHswxnC2P8FvMwBtnaUsKP",
  "key23": "36t7CkJrDU9PnvsBBo7KiRHtaMgNvWMDxDLzbjjfqYidYWLmfa167HLsDuKZBGuLWGe8TLU2hcsWzCYWYvN7rZHJ",
  "key24": "3PYybaeaKwxXKpqfuWtVPvNyP61CvwRtmXnEQdA5uVJVdLZEFoYzEK1PK1Pot8NNxaPXvsnsEtUyMncyWfnwqrBz",
  "key25": "66rwfUV73zLbYGnRQBFv2LiQNpBrP6qHDNvnEjyVaSswXB457MfpZfBWviZhbBWjW8byUABpgjCRh8Ga63QuKhEV",
  "key26": "5gvvK8wTdjPyEN5g9FRMkAXqJiJs85SMYQWBzKNw1EtbBAh35EzX2VT3uPekqoq91EUHSRqyyvE3LwnrBDjgHjzg",
  "key27": "24o3wdiEab6WcqqdT8p2YVksc6NNM2n5exHFsPqWhvjr4UjPQGUzvbUR9JNW865hvcURngeewxNFucfUzYc6hSkc",
  "key28": "3WG8Ppm8kGggVdD3Q1WXexXpjsjPYerTnxfKie9eo8HjwUbv1A7fAEjpe4DJKoaH7B9no1ood9nwb9PhkvgiwMFf",
  "key29": "35Ds5X2xKSEhHrBWuL3YyYTdat5vBEj6cbqo77r2t6fSgdEDgSHT9KJSFYXchM3jbLpRFo7i8oc1Gp555kgp4TRY",
  "key30": "6KXsYqmQoiNyQn6CxMiqPtste3QijvPkSAz9geF8qmBQXkMBGpVg9xQuHLx8qrXDVcVzPagrMngP8bgra8itBDx",
  "key31": "2AdD61ioHqizZ6dYsADMYuUDzbf4f55eX7HE9RE6FdihbY6hpCviNXzzxyBKNJTrYuhydfaymd45DgwSpmUgoVMB",
  "key32": "5ma83YZv721oJzF4zvtSnoSK3ApErvg3huH7i6sG3Z7trzJJSkWXW8Kc9UyfBUKdCeRXt6SjtAMHh8XXdpESncoZ",
  "key33": "4oB4bCoKVoLmf4Lr7FW5JB3ykX4XGgJ6ydLXKeH4aQqXPCczym4P1hNtUuNAhqFwsTPyVnLAJhvbrzzWcPPi7xDr",
  "key34": "4ctcdqJbVvVzC4edF5niXYdrjsAHGvaeGcGwnkdXUxKH7HeB5NNx61z596x264DMra6oMDmdfbH3hLin2V7RiGb7",
  "key35": "pKJ7cbTdK8adHdwgeBDAAvHY88QfEaczeEPnfhH4ioccvCDM2q5Yarao35byW3qD7Mx91xyqQqYt4qSsz6bRKp7",
  "key36": "4gFv9j5c7pzcMsNCXvTnAP9gtNpGehFSsEX5D6s1Ech9JKZD4sJdhkfdVqVKosGBe44pjnm5PqyRF3RZEVzQg6f",
  "key37": "5u4tExFBa8jej8pd9q1rkmoa99skZWi3WQe2iK3y3DyzErV4k9DAGA9AForUPANaR6Ckz6iE8hX14s3Nr4VmEtTB",
  "key38": "4hQe45rLJdxvmz2fBfLkcwMJi2qNpRTNniAFJ4a4F87kz31iUXjrMKCnjBmhHGC2ZZChNYAzd6BBdW7zkaCnXv22",
  "key39": "3pUcoat3rXKRSpSdEcX9k5rYo7qiAtEXbNSVGYtGnzRx2PesqQ7r1CL9JotGoRYT9G8cEk4kZfwjX9wuMoXmrbfF",
  "key40": "2RCFLuUx8C8YU73A5mjM48Q6mhTEqB8Yhfxe3Xbtcv7kBjtUoQLtk4Usf9G6urhNFruyDiNVMPS94aHZ7ocd32T4",
  "key41": "2L5Rj6Cavq1p42hS9gMqnySAiKn5KUBT342wu9NBBm5r61PTkyCexinUxcSroWpkop6T1qcyrZ7pXmr2Lrq5F2Fp"
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
