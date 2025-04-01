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
    "3t3oXCUUBWgvmVcCj8NextqcfbG2ChtokXqXn83dgVd4e4655oyURKyTpJbqp5ucphkDJRyUfCLQieJtqihfTA5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEKXYnt89h5Nz2fx7vEC4psSPDT6bw8R5RNYwtMkyehmrHzi7EUeQEspfE8FTvSL7soMg5VYD8drP1mtL2HrcWP",
  "key1": "2UyPa2fxapmdsnTrpTfyHq3mXJxc97s92aeUcJUSmQvePaT9nT3m6YYJVymYPh85pTKur962GHZKREC5FhPoECym",
  "key2": "K5aBTNU7gSJgVzqGEZ5oMrafgBuArXZVS8XksQEzS1yfGM7viSPvwuuX8nsvZM1MuWGZaedXJ9i3GQbpWXvUe8D",
  "key3": "4Vp7azbjVjMYeHfbqKqDCxrDeY549kFYTVfzTRGYnNixCJSwmCoRx9TYJc7o2ZhRRveRpMQkgg7x9dAzwgHWZaVK",
  "key4": "NtDaE9SnRFjeuTZjGnHGsgXYSqFRQBuorhveBkCxdRoCsoerWJR2Cvy1Soci1CWX4wfHGeHPaLQSWVRCD2ZrPf4",
  "key5": "549B1vFxYCoa9KvffYstYnXw88t1TyXH457DgkcP3riQfXRg1A7RTBx29WkGZVEzJBRUfKy5kSfrknhH4bexYNyK",
  "key6": "5uqCadaAbRk13v7zhvTdGBDpGKXH34MnorAKpfx1FXynuHYg6fMdfJoFam9B6TdgfDkcWHDUe1zmuoNKnBnEreBW",
  "key7": "dh9qZFkrauG8WNMKR7FN4tNY1XF34wcZaNZt4GtQiHTJGJRfFDDoYPynMVoCYMFhNqoEyHKJkaC9nD2zEWBb6fX",
  "key8": "31KvzjK3iCL3W5sLQrAEShtG7UfZE4HqK4LQx7VmEP7FcX1NPsBs9etT1ZBKWoatgXZ9XxP7f95bgQF5JptFWRND",
  "key9": "mri1y6Qk6vAhEtG7eMXmz2pszom7f4Pe1TsgKpMwU3W28Mfn5XumwwN4492EV49K9QM9nejo53uY8bMyVH5aML8",
  "key10": "31fosGMfDMGEvrnoGrreVByjfPsKmqbrv2NKjxXTxwojL5gAThTsHxjZntavkkcZWLqujw1SqV7JHP6Ymikmibjb",
  "key11": "qWnDyV4jFqsRKnNwy98GobZYCLyJNVjnp5XPtUkvtsZenzFst2tXTvk3TCZbHVX7Tw8FCRU1pLGd3m7EVCESZcH",
  "key12": "Jk2WeF381cKqSXJiJdsrSGJPte64kc6mniQ5qrxgrCGJR739T5KSxkhgXUXM1qv2RTY2C9k615GD63BrCNNyBAj",
  "key13": "2wN4ovxV31caRPq5BEgaxkUfSg3vs1QbPp8hWRtCySPT4hLGrcBWMuNWLU8uV3mJZUrcSaMc1vPHiBYY4i4YB5nP",
  "key14": "jXfPmoeVBUHX7EJCYff8PJyyYRjH97WNGM1srW8V3gZCUv8sboE4gyXbL1xsrPiJ1SS7S8XsyKbHmXNh4nXuGET",
  "key15": "4EaLgg2JqycXcks166uxA1yZ5J6xyFkGc5oFDUERYP1v2sxLDzzVkpa6dQevL23xFdc4BoFDrzvqDq8sR1kEDp6D",
  "key16": "5eSDmcLQ4bFVLfiHttFAnuzJdueKAzWFrSzphn5D4ebEgwTPiZXR1M7Bsw7rWRmq5EuWiggUbHWoFKohYjH5JTaU",
  "key17": "Xie5qJWx8M58wFEGDz4fLB1HCkspVSSo6fGuTcW1KmwJgCs1vavqSomtg3hR6yZ7PB9rDDFpHagTstwYwLD5ZvE",
  "key18": "5ECyiD6X59Xbnv73A3fRhS8vGVFrM7MCwFtZJH9NY2Zhsas7e44NwM3eLZHDPJmkENzvB8SNS2ghoqgUEPLwJCwm",
  "key19": "uShHhJLMnN9c8pCkvjK9xm1UVzSSeAn7JEmziTDXUnm7TFXioRCEJPJsKAuGsFi3gsZVuBPCvBmmFrW3y39iwcE",
  "key20": "VBJdCbp3pLA4maPoHxBf3Kv6rUaAMvgqGjV7MqhZucqZrC27HPazK9sbEczcnmetDUaWhBKCUq2CUfgWazxDArV",
  "key21": "3q9qNDNA1hGiFsGxk6D7oBEbWLNUT2Bb9xhT1Xsy3ELyNhzYfQ2YFvHvQDJ3Pfvt9C1mSQztVagX8bMgBDE8F6mG",
  "key22": "4bRz6r7F8FKrGQBhAfnHhydia8XBAAcjgPy3vTRTrYTkoQD4QbFKQKf7ZVL941auN4TYRUqnmpryxRQ9FCpXvT3M",
  "key23": "rpXWwqasz8J2DU1a8CuDYr9aAiui3naNxtg27t6K4JKf3MT4stjXbMEhwfqspHu4n2AUyAs7RMVrM3yrbhtpsUt",
  "key24": "FWactUPsZMXS6kyK2q76wkJiHqU8nMXw9dyYoANX59pbsnKyNnZFZR3Ka2dBTxEYRgCTpJnFTLRUL1LNek6KoHR",
  "key25": "5P5AQMDy77pX7nAMnYhE87BiDChkXGo16C1RZhS2Pq5bRYQLBi6JCzxAtCzJxmfRgB11onP8ayaGifxDTuJQKGSs",
  "key26": "4zqwAmW3w5cq9856TFZuksQ1NdTo4ViZfKkKP1jaJ4VQ1fEBaTMXT3wTHcijtG5qaejuBcyk6kCi4GyTi7xT6gNr",
  "key27": "5avB1Bkq4sVRGJRohJfSabDJocK87gSKYLeRNk1rpp1XLYa4zVx6eBCfMxZ5XijAyTi5x7nfmgRsToK2ms25XjGb",
  "key28": "3cdDkb5p3gSRahiuH1b3hrn2BFZx5xTAjKNAPQkJZGhoFKv9MgNor4NV1pazCkZEiFyrs8RCmUBamWXAXeUekPZZ",
  "key29": "55YjaZene6NTJfd3CQ3g5VwrYxbpxgyKCt9uVcfF7xZrrvBv7JqvaHGYWzNyXUuU2iPtLGi3cnZXCSUe7kkgFhGZ",
  "key30": "4HLuM6NC87LJDTMdicGstAbgyGxxJfq6V2kJoCvHtuVnwhJv6YznqQSuDFwwtKRdeTzP8j45iUN6KoKyT2NWHyKY",
  "key31": "4pzoftfmKWnGYmNrHVeHyZojKhx4EoruZH5JqesW8HsdiMkRt84UNfBLmHoitRW9aGCdfu1ohLCY1BfsonWSuNFR",
  "key32": "22DQyXeBkzQtPuVRQy2CMrrYEJy5q6tt5AujXWCKFEoau2QDo1jEe3L9UzV1UZy8wNW8925iVrxQ2ksnyicWqy8s",
  "key33": "2FdzJqA5vs9E97ucxn3v859gnduUvLDsjGdPLWNpj2turSKVwKRbSiWP6HxTjrLLW1L3YEbcL6feiLcDF38rfAJn",
  "key34": "56ZUHtPqe7ucbPJ6DKMnDJnhX3Ee8Rybh1YiyAx6e1bCEZMah7tG7cE5osCmCPK6LnyRShz6xmbRGJC6K4ecnHf6",
  "key35": "9Dtg9mBvYTdiofpn7uXTCLuuEyJB1sJWfMWG6Lh3UP3vYbtsUX4tV4jT4XyQPYg1FzfnN4yBVaWJHVcNiCJtoJb",
  "key36": "2k7LmxDkg6MKe1dZcyogYwMTqAs3pHVtTsgsJq2M82D3xth5T2N54LbP2Hsn2yosY1qruPK1M3R19gKYfgpqNY6L",
  "key37": "2AFDUTcA78uiAX7peWihFHJ1FqvsNMD3YnfbWccty4NnTtxtF8hWeiAzaVEREf8eq9gUb6ytmRACZFGAPSQxCSjL",
  "key38": "3SBTZBEWLCstjP55eLDovMsiF31xeEk6NtouUpA15pcSk1GThKCdrPAZDH8CawYoSfLRAPCs5EMPJnP7Y1XhsjzD"
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
