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
    "4jNSXQThMw6AFWCZSm5zhnsTy6MhqWHQAQnJqREqgu7nGyzYtXFL5JYcQZMkpBHQ9xzjj7KR6Ycwk15HjHeiZWEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrNrZ8szMZpjEnUQc9Jr7QP6Dgn2wovuVzSVLZJp3ccXuNYkNB16dRyKFsfLhsjGe1T1HzqVYXJk878RE2L3uNs",
  "key1": "2xR1oXkFsJiQJCCdfMdC4N6vMHGGAVX2GhdEftawi8Xf9n5vCURHoFeBEiBsyFwLstZJikeAj1LWjsVmuLtRVeVW",
  "key2": "5k2vHkUMiBckAupKW7aW81hzHJDMG5fVRgSKrCrPqqosqTt6ef91ZgaLhLt5BuMZNZunoKWoj6SNBHctPEXTLfsn",
  "key3": "2ZQ6BnXt5CszJsFZzUV16uTTvJP2mmEb6snc6oqnFWqeMWeEMWcDSidE7SRzVYMsGr4YK4EnWqdV2wTuvbKdMPSC",
  "key4": "4yxw1u88T4QmjMsm372nExJP9hG1Rr4wPHs9gBVSvUttqKxi7ar7YdhWkQPytkkPPti3KRVNyWYiBbPXm6pFnxck",
  "key5": "2CtGh8MSNPXh4jk33z4yqwag5wEdChRs5E5XDFHM3PpCK4gxZpVUz29rWdjZTGp68LskdCXBoC3QBsKeXaGRxU1i",
  "key6": "FKozyJmaNrzm6KaH3G6XivsAeTjBpkjc2VS4tqr2JH4t6KT2BPVfR5QFpkTK5GvCa1dVGdBwa6bMVieGhhmFp64",
  "key7": "2TjckdqRvNrm6PdwKRa5DFYKeaaNY5gT3J3TwmFu7sa1cfC3P7zTzfopG4a7pRwPRDxvSAbSFvD1L27pLxmGRU6L",
  "key8": "aoc7b7dn8bBJEVEGh1pQaqL873PwwG2UsC52H2ShZVzzqarncUMs7qKfv1Z4dfw43tv6iXpF5HPSsUFzMADD6ho",
  "key9": "2D8jNvNE5nrAJyPByocPPPiJm9BZ2eZLrPxgNfrbSuzCHjiZU8spskeY9bMnQeY9p8PusCKDiYfrAV5n4Eip9Xbe",
  "key10": "FyMJbbBDSS2C5L1kCd9QixvZbqRZadosHiAnv4yMQ2sw3CZETziW7V1QVpPteWp7NgMLV7pLY6uhXP23UZo4XzU",
  "key11": "4cPySS4AgKdyEPy25QNuC91knQfBvUuBLuitNNgRJPXT331yY5MqT7pKpQeU74JXYJs9X1W3ynu8mH4eeEcuqykz",
  "key12": "4CEZ99bFCqbqi4DfdzpaMaG4JkxCnDpSBomAcSD5oEKBYEgMTiMxT5D7ckcqzEJ9fPuhBYf9TSMwnQLBadf8HpVX",
  "key13": "2ReiwNKbLxQxchJsUXVeiJae2wvDfUiizSku4WrMsga61Yhe8qqzjTKev3sUoUXfbxL4YjodKCyGUQUkLxrG2sc4",
  "key14": "4hVrzkWFKFLyjYGX5RvsSirx9RDQA9SrLyo3hb995PVGXMnEyXfQ59pynzepbEMpxFJbARC2PjJTWQ4HW76MBnpv",
  "key15": "Pobou9uJcnVrYVFKMQK1jq8wHp1W2wy1EqjBGHDaMyvWW4FbYEYcTt76kVYHGBLXZbqtYy5zMcnyHdtPVJXZ2RJ",
  "key16": "2sYDxjWWcg1jYXL8oHFuWn4xHXAqBJKTWy1ciUqJKpBXLVXHXWe2VNJJURKpeQzz5sFKWHUCXqSP3fUJhnByvADZ",
  "key17": "WCJJhWgP82SnHdcTdmGGBe9Wp7aqCTJwpsyH2ogf4j6mUMmDN8T9fcpVgF9WuyG3CesV1pbqxoM4VV2wXGAdiwT",
  "key18": "312CUL1UGbkh8oiNJmatmnbirQTF6mPc5rXrNJeZzBkaxsJzR9buXxG2C9GzDdcYMT87NSvxFoiWQ8mK53tTSiev",
  "key19": "jiUSuxrnUTWPFF7zvSc3chQ5zcqJF2sviNur6FQbVKwm27AtQn6sgeL631UxvxKXFNyL3r2RQQJdJNTjeBMkGYE",
  "key20": "5kGiDV2d5mTNcRrHB4Pg7mMVAWk9M5UTiKjQgnCPL1FcVzS52kn7eXg8DKsdUf3iVrAHCbwLn9rVz24SKCmddbTb",
  "key21": "4vMKNjzENkTVBTP8pPrt3gGQ27EhR9erXREbqxd2PgrjP7uYjck3BF9fpV6VroJ9jqCSzEuGzZ4ZWSqy9vUfye7r",
  "key22": "4sBi3EeJUkSiMuyGsBHjuDM4XsFANYPmRJWBHhFiDzU7jLy3wDRwF42ziJyEqEe8EYNDKeQUvu2M5cxC6QMg3JEf",
  "key23": "GJowPihrmXUNL3ZqU8PRPJBMpzEqhveoGd4rFD9smvvASpevWAgAuDcpD2ovnZ8BYxnGsNX912vvC1hDYT2iteK",
  "key24": "66XqP5jyXWEyHt71iCLFk4HkbHtUQEvFFe5D9XHVQrHM9WV1uTmtga3mpG3UUquGN6Bio81MLL5HKBkGZCD9UNp9",
  "key25": "5ChyCZU2gcS6bWXydc7bXepbnomQMqXtFCDHZg4T9dchTr7Lq4mhwCdeMnUxv8mgSQnzHCHZBGBJTqVscvW2mHGZ",
  "key26": "2pQ5ZDmCk7N9evvaJ9P4GmU6amEck2Pm2G6pHcjNBdBpZ73xzrJDLJaarScDECxREDYXEM2BJBAiBsoGb5ujFR8W",
  "key27": "vLk2AaLtbzcwRKiLd7BcHJfFgt5FSt7yNRB2Zc7dGyNAEuhmWo8c4rK29x4fTY93Hk64sFiJZcFiPv4x5XWLjBj",
  "key28": "3eKZJmSqm7vb1vdQykRYdXTc4wEpYtN2at165NTBKb3HMAdWTQgngxYkgUaWJKpe9gVKfDPw84Mi22esLKzRSrKP",
  "key29": "4uWvrw4ozaU7vLyRQH8kpoPtghWMRjnBwkiFJqzkeKrh5GhCua89Ve71Pb5rHSgvztxP153pvRfhmhg2m9Ro29nJ",
  "key30": "4QVRaENUK4p6YsDBhE3HhD8pNCQy3W72EeQQgD2uwNNmEosizraHmjfLnhqxcE3ozZ4LBnV98UKPno1TMD59GiZN",
  "key31": "5vV37gYkdTaaMoivcCJDkMGnvcH5oZ2fyVkSKvNJ3vwsWiRJah2wCACxCx1qKuigiFRuXNuLt8NEr9P3FFyNDtkb",
  "key32": "USzhDt1ETefg9yQU6Nqj4msHWqY18ZWpXHmSNg8ZufiwaXABH6B6Dz31zKShDRRmUTjpem9iqNqKnthimuVNtF2",
  "key33": "2ZLEEsfvsiZLNanqAdq7UP23AuQCuxeLnbbkMZuBnn4SwRx5JcYRdiPVqLgoaWd99arZd1XJBwUyukdWYAa59JPY",
  "key34": "3Luw9qTXrfrd3rqDQf4MRho6x3U6H5pQtsfpUrgPq6g4TXZoCtGATFevsTRRtg4LHqfhaZNAdyGd1sb8qZrjYTAU",
  "key35": "jpu6b4WQVRBsyVboVKbxAJjmGbdbyuCthTDKF1ESZX9tL8WLisK3Jki7DARk2bsk134P5RwwNDyWG7iQsW2s7Cc",
  "key36": "3yD3b6Yaeiquq8CeHPYuhZfK8WdfkYCUwqVLhVgV3xwmAit6MUAUqa4xeJLdiQKttJZG1dcTxZqQRLXtQa6Dw3z1",
  "key37": "7Lg3qDny5LyGSyYphJxLVhDjW7xxH6FZuwmhgokAt9QN7mv1pZULwcY8x8vZcbMRWougFz3562tzXEKfAmgsoXU",
  "key38": "54yeTRBsKUo3txFDUvk9P5dKBWiqgrbKokeM9wuzoB71DeKFtg2TxaFgm38AvxQV35JHpsEZMY4fNnSWgWm5BLRg",
  "key39": "2jRisNg8DV6vW8tvXtZJEvmVRASCE3uKoZcPL26HWKBAynJRfVCsQiJ1daEVuwqDTjgb1fFbqKvfidTLHwoH3D3r",
  "key40": "5TJRCrpWAqhSUBBvrNYWZgWQbZFATRZB1gxya6iAD7wRQsz24H6KePma1pacTBEqpriKA1zrV78D33mQKGQdLbPf",
  "key41": "4D2y8wwVXNhXfac76hbkJHQVpiYD1PV6BPke6Ut31b2PJaibrsXA8a3XJ146XHTSGw2g4rbbaf9Pcr1wLAgXFz3s",
  "key42": "2LvjpjBFtCCeMkap1xn5fNS8wsB1XdpuQ4hC65qtemrMCoLcPuHijk1pdwCe4bGFSJUdmH6SCzSh5d9gERBkVxSR",
  "key43": "4mdzgEhHavM3nMb4p3Knj9RgWgbRaWHV3g8xWAkmiLp2kNkqJRmTzgXSChPrVX4yzMxg62TL2PLT7JU8Fci1QC15",
  "key44": "2zQuqWumdCTJgoeL6nwnBbjDcw6PXrptWE7MughNnc6fAx6ViWz4d59EYNryugSVA2DrtjfichYBTCSVLmTszTFE",
  "key45": "2HMYPmUantAvEgDeZaHC8onac62b94KFViVmXwJEWwp8P15QcoZcq2Tc4ALG8DtENRbtkG9DiiqfGfANNaELUKjY"
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
