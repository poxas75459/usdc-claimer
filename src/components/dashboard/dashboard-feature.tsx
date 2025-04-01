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
    "32n7kM1kMtg4xbkttBBk6KJeHD193bL8BWgguhUeQV4rG2WVabn5Y4Qur6GKP3QTut2gTNkN8wPDdCDKsRqP1wGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56iwf6C5nPUgaJtt8JprSC31MdRAxHrKUvR6jED9Lp5qk7j8CXyijzr7c4RdvjXtxhDfiCM4iNrwcWCpvnUaGQXE",
  "key1": "udbMHwFggfB91QUsKxE4EjuzJ12uereK5GFaM4KJvswdsQdwiALu7oZhL2xS6CyQWowpFaB1FdnJDdZ4uU2ZPcP",
  "key2": "35j8M9LszHyNRmmvbw1pag9MSWVJBMyLSVSDKwPDQBvd5xNHQerGYXNAHTP8UxgvMwQWQEHd42GbtGzSS9gcfgs6",
  "key3": "3T2QpuHqU6MAmtDREz51Pu6kwxHaVaWeoMSWJ4o4v8w9FTsRaUCFzHoSC7Zj9bxDqoTC5xPT8op7BAt77L5YJW7c",
  "key4": "41kDoofa6rZMrYXMX56aQ4XYWAGexPtJbXnoXrLVLX54xnBzJXfYwdTf26Q7bULour45w87jFPD51Qe7zCixDzQM",
  "key5": "3JqZmgYUZvLMN8pbk9dn9VMGV3ifqE5CnUY1P4hr4okvto7FQPU75fvmC1ouThqmbMMNtGQmxhmSsLmuZfZoN84X",
  "key6": "75wXUMaaw9pHTu5aKBrzRdMrV8RK1ma32FGhXeQDJPAYptWa4AkcNyVoeyjgimN5PrjDqdrknBh7XjeUDZHhuZ6",
  "key7": "4hjjqwoKTbuin7eNC23i9rRD7gcYJvy5a1Qvh8M5PvH4uLh3kdtGSNeeh6UKptuytbbpDxfTfE9sn9bJpHw4RemR",
  "key8": "63YvqBgW38JDcZP3TMhQnvQaZQYkJkf36pte485h7zuPaKaaif6wDuN9Fqsas3L8ERLJq74V2BHxACxtKvoyK4yH",
  "key9": "5x58KM6i3o6733ouWP15mxHTRqTz7jBo28mWfVnQMT9DJ3CGAZN2zLMHXwMXWk4EiM7yru5zaByxR52jxZQYFY8B",
  "key10": "4LNmZx1J8g3m7myPynevB64EDgYafdSpFEA9LJDXFdTvv1H3JuhsMBsaeAm9MKk4MESEsQja6YZqKCBuq1o1Aqti",
  "key11": "3U8S3tFGAp3L2jdLhFxXq2uk441bHC3fhDyj4yiHcA2Lxd2yC3mBNRWVicMjzd74RYEkpqGZhto1QgmB9gXSspF9",
  "key12": "5St3iioFLepEiJSnQZzxZ12cxMGzU6GnSyuAntjg5EempEnNMf6Eqa1qvMNt3P2ppSHRP4Ua2JSitVFESgQeC1sZ",
  "key13": "watBstt73ZRPMmvpdk6XZVVjj4R6M9nTAjx7G1RL8Li1W51jNDFATzpMTr16RN8zXoi5CpZDMZxmyvd9C1hrtLq",
  "key14": "2dxK5ZRbJWa3GxyC75owB9g5n8J5nFTcQ9iRuhthVfTo3pPMoBPZHWH4YiVhK8QHjDZw5vHGwFsSRrTZELQD8E1q",
  "key15": "3Vmj5aP2Why5m2XJFig2wik1nY35LeN7gqGZRZzVt3eipjuTLhPy2LUZbP9kYvNMnSX36a46kGqyx7uXRwtL6ZcU",
  "key16": "63RdFYRrSi4fm9iC9aYMBVdkx2i8WN5dx4mJ4md7G1VyZPui4yLyd5j2B6uWimYo6mj2opd8CXQ5gUFBSxtUbb43",
  "key17": "5VWUdv5rf5yi7NeAv5bmUAgXeRP7yHB7pRgToDepv8PEGCv8CGF12KVF7YjzcU8wasWZUHBNXqiPTBd9AkaGguKA",
  "key18": "39EVgapQ3izF5Dqjd8H2XF3cDtgbzKjKoqaLTvADPpvXRotJXMBs7vjRck99EFnDKi6FV3uDjhFJedryaT5YhJhu",
  "key19": "3nVY8gsv5Aq7M9LjLsPsNwXrkkQ3tpSqBiSebE3J36hT3K9XUvPmZGbwqRtcRTSJvskKYHUd2SUSxafEZG185DF2",
  "key20": "Ey7EGGLJSVBkkF15FZ2nubhunoCGdxgYL6QDd9JAaG877GspXagjydpAchbtjbybEBtT7NCQy6LGuNPSjuhRo7c",
  "key21": "4o1Vz7QyrYUGCR67GY8GdFZh8eLRRVefKNSVCKqipj9RSBXHNhhoCHfMcoGpgNBsZYA9ZQMTW7AX73jo3akoALP2",
  "key22": "22FDW2JCh1rLq7REPkmL8JfZmTq8fDTXsyQULcaPGT6ZKfx67wqtWjR4t7XKwLZxLgMuM9axXSzfgB4Y3NRQ2ak6",
  "key23": "danBN1iKcbyktkfuy5GHDvkjeJGKghfKbbXzymuZKyUpoXcFmGo3bSLmbgQuocfrKo7tRojWpPPqnfbARYXa69t",
  "key24": "2dk9NUBnRKd8E99dnqBtfqrrpa97yHRjjpDxHryYHXrxUpT7UQXUA1hX2KCVefDFhwT5HWAbjo3RKd8QmRSLBLHk",
  "key25": "3qDpfX4LVqXN5QHqAxo9rAndb7yWoiv315GRStedtcZJGi3GhjJ5ani55Gew2eWBkUoWPNzcL3S3MqcYCDpG5iR4",
  "key26": "3Gtttuo8dzmLWxCKfzVbhrZET5bt6kk8m8mDayGzyX26YpnbvbxttHo8LU7k7aQ8Qpo5JFp9UZVfMhCpKc5kBhwi",
  "key27": "28aaQXXhyjyyAYy9YbUy7JunrLEHrHMV6Dbtsa51DFxAfGb1qNBqqz6KgfvpwkH1AUkUPaziG9BEJ43vZCd6cUwo",
  "key28": "3ubPoKsgrEL4fVmT4cCc2MKBBDieXdj6H9NXpbkB7vAnqEtf19QBoM3gcHhnuyYb6o8aBotvajHb17i52qjvmUB",
  "key29": "244TyMo4kDHU3SeqqC8dV4t2AM2a2psn1YYHi6w21VTLwdAK3PC4MdmbSU1UUpuaaGujsQmqrkXbavFdxfHdoyyk",
  "key30": "3KupVPXn1VMbfcU5GtqfjfRmqM5HLD1A4AzhzW8dKzf8iAPTt7Vcqrh7ADwvhFkrDNqzSmZ21ocUzzDCQC1M7hyG",
  "key31": "4wXvJ927piM2QmrnVqFMvvmeJvgGP2MXNLYLFqqa4wLZB36KM1UEhKeHHa3hs8etzAY8TXvdkT4f75ycGogUJiYH",
  "key32": "49vy8PAZFx9YajGrEZrMtgiobKQpn4VE4sz7xDr5RzYMVh4mpZNaZwkgyK41bNstAnDHL2BKgGSCJpxUVJdMczbN",
  "key33": "2rmLMtxVrfEoB8MpK4gEje4eNAHXdZZYxYUcRtrqvS3XQx8KEko7uQBhqXm5MA9iftGtst5tQVXHCy2vjSng6mUJ",
  "key34": "5bZ1EArkF8f6ntAnXsjr23WWGXf1tFy9XYqLSMedWXYbDTxAK6nHArccbYLAG4qgzcvQEAfp5Rrk2zFcC97kvd5s",
  "key35": "uPvVSN5P8pjW8pvJxAi5xAjaFz9x4D3fcKqtsW5zDSpYudBNzXjVxiWFQumogjGwmRKg5o6Czp16z2j5ndeqftx",
  "key36": "4kiBWKbH2zuswwwpxrcYuc1KBNCSEASmjXgRpMJwjpj64SrABAX9jZQoRRKGR8yaRLvDCmeTEYiiYbnYXTJ7VPnw",
  "key37": "2wczB8TPML7TyiY5ZKQ6CsJzuu11niy4PRgdyEzE1htmXs2bUHrBsoTFT8Zjm39cMGUqWonrUKsbtKAbirUNvt8"
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
