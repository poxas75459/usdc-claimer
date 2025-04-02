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
    "2bw2D3SrLScvyw7y8jGomoeko3MH1jUFdQtx9E9VVU91bFupwucCNwWvkYHCZZiMVJMAmeBbqPSMBSqjtpSUmCit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuwkFUen3xrM97RUTFQ2g1A4vPmSiLswgvTJQa4dndnZF8kvtSes1GreJpJPczJ9397zLiZeqnHT8yByZauNSSa",
  "key1": "oGvwQigLJAdbznxDa4rFF3SixQCj3Hu2mwfndDHicnYTysQ6uD3eM78GHuSRi4Rb5uz8Y5GQfp8jSaXD7Uo7q6u",
  "key2": "4k1d4yk4WRUhaeiSrh68b9e31ZzMcBpCXpd6uEeQFxmZatpkwmd8YobNdYhKguvkAcmN5ADVuU7Y7pDtzxaUXoA9",
  "key3": "F3Gim2FPWgstUVccYWpRbAErEycVtzHE8YvYL6vx8X7QTxH5hUCF5gAmjjGWzY97cYgaamcouf7UQZvCxsprESy",
  "key4": "2tUfbq4KNr58Dyy8ae56WSzftA3Ce7fVgvJbKxE8agWmpdbASJNjECynkahLt7oXNtTVmrkHHmr3XipNpaBqLAJ7",
  "key5": "GSGiZBpkXT85k8TowewUT6EKNqjeKKRkNwyzyeJgk8QMUr8L1HYCfUdtZqEqYo5Yb51YVuyyGmY6twfH1WFUziJ",
  "key6": "5Y1j1gbonbUuo1jm5kgN3FrMuYRMTZGzqnFzRLSdY89x7Zsa9LyCFFL7F6fR3yh7ADtcbHzVQGGjrbK9tquKzn6Y",
  "key7": "4SF9Yu9frJWw5vNaoBT62B8V7SFp6eXWH73tvQYnqu5fxfmcoh8APFVuC7Fe881UcqxEmWFoRfwC4CcCf5peLuSj",
  "key8": "P2uZdQJxacF7KuXFT65D7NAPCNrS5PrYAYFC66nq6GHCw9Yz46FUU3KYT2wTtyGD2zzC5ni3f5DYX97eSsBAdJJ",
  "key9": "43xSLEDavhjo9ieVZ9W4BcaPUYTrn3zZ2D26MujVZ8Kw23RiCGS3LSuNRdE9C9ftHskuVjy8u4G6GLMHfgkz2Mug",
  "key10": "5tSViZ3iUHc1p2WKLM58sKeqbmo3YH28nrwwbWNzNsq3Rduv79TzysEJWgUsMenm7rL7ZC8kMEuNz1oU9qSpvXZ3",
  "key11": "4Q4vFT8xHbNKDDBt5yA2nSKVXPeTxk57XNvwcBYaC9V18Tksvk1rhLHTFCC2ztzrRC5FuQYu6PSaGWbmHZZSLDjd",
  "key12": "4ZXsf1yTkP1fW6PJh6j67ut5TfN97P8uPZTde2SczVRmg6f8hNZszFQoG6f8EodCwDnvne4H3HP85ibDNz8BsU9L",
  "key13": "4wg1DjJbNKPPY3yPhzKbcWPtZPz7gahxa127HpQK3kM1G6dAQu5ZR1VoAmK56Jtsj2yT9XFVVdcDF35sGGqbZThG",
  "key14": "3Mos7PdmVcBNt4u8XwS9DN1GCZKYaXYxD4vjXhv5sDr4XNUaFC9bxhSqs2Zi9CSu7HjoD93BGSiMzsEqboGUgEdV",
  "key15": "2TgxbAnEF8PFwdNS2vDztLA99euRxjwzUMu7TAFNzg9v2cBguox2zzsVuNNunZsQWqjhCsxV1BoWxz95C5atsTZT",
  "key16": "2zDNs4tnPRAiDBQDszPQUEdhbN9VkwQjDwJNGPFS4ZnLhJYchSzWQqK2Nphb3AmPiLZ2wZcQ6U1pZ6WCH7YUh7LC",
  "key17": "5ACLkxtgxabpMVcngWcuMha4bMBdxM1QVTRFj2JrvHZRkaJtL8cQgKX7RpiXHo9sFdEPtTFxZsC3dJebuHi1Ffqe",
  "key18": "VU6qWGnQ9vpLfCiGm7Di2MQC4vdipEr5stETB562GVtrsJw8CzncnZBYQWBM8xY6VBzA7wVZkGWpxxM8jnExwGS",
  "key19": "WPZtfNbWcWAMDLcQ1PwnqYDGrnN8r6Lq9FbXLxYTQVckmkAx8BzhJXiGPhqysGEY9QUhMsjUEQ4ixLczoPgvao9",
  "key20": "3289kSLWjWoVbSj79pRZdHEKFhrGrnyxK6AcEvsstqq4qtwZTcfhELrf3xbPwhsTkaTiHz1efvKbF7Kxm9LPZjfG",
  "key21": "3DM2rmsiUqofnuq4dbjMfS8emRhHQ8iJPB9YfYKJoQjBWpSaoyuApPSRKwXYnS4RZYdM4ByV3HqqK5BU4zgUTvf7",
  "key22": "4S4KGYbvx4bSUakopzBiPsVLsZvekFF5BohFVqgpYkyZRXUg1KoULgDZ65habh2RSAiWi8v3MMNRCVFxZYzMmijA",
  "key23": "4hGTTorsvfnrFGcutVPzCadGxyXnHS7JgKMzKCuUXNkfar6o9uRGF3ZJVBZbT9T75xFyh5Nyqr7Zjaca1LJz3V9m",
  "key24": "3oPESUPwc4AXxwEJu6g8KcPrff2nPG94VPmncw15Nyq94X1Qw8JTMaqrL82SxbnryaCeVVecri6keNSXvzVUeb9t",
  "key25": "2g5zbFYcSTobfLTp5m31x5o3v6Ny7e7ZxBaZJjAgaHY6R12EUesXNN6N1N4CMkfunxsankonJL9YnpQiJARrNCpK",
  "key26": "63DSuXraYgtkvkSBjyrwCZ7JLUwNU1D6b9RPT5csYVamB4YbKDyvBS2vpuLPpFTYf14tSMECua8TA3u9MZLDLDVk",
  "key27": "abaFjHYAow1wtGjbjoVEzTfF7YL99VX4osVsjCCkC6madEGtQ6KYgFKTD2nLHoJgR3NpAnwagzoEb72Fu1KVzkQ",
  "key28": "5oycmHpojF922o87nnzSGLpQgvMAyaYBQboRC5KKJrjYPdAAL6ZBu3MvRPG8dGGhoJanxwUCv6W5eLF2s2DxH8UH",
  "key29": "3JfsHSbd78c8dqLK4Tgg4dp6Ydo55S4vv7YY7fc6EYLjbR8GjUgv5YR87NeuztyXvXhhDRUiT2HsKoB1zYsXfodP",
  "key30": "HphxXY4sZL9uEGb7xmW7xCfnKrzq2P7iJTPUaTnQHxu8PuNQoq6uknqipi1Vd9ZxbN3sFiNYe4ZdRzwbe4menpn",
  "key31": "25wXVCJysWh6LyJ7yU9FAKsetpT2Wc8hgR9FJsXkGSZEFAT2sVnn7q3smvpXmnt8BBhcNxSKxpGVk4bZyu3ZB1jE",
  "key32": "4eCRvUjspYCdFWt2CgP5D5v1mMpq6gTFXikL17zBsJmJ3dDq1UyFLMMjpmZZftRaeGSUK5MSXqHAkvnxmoGfCMAG",
  "key33": "5vqYT7qQTiaz2RxjR6QgTmeEPa74AM275UB9MD3ZB2p7kF3RhFdbsVQ9rpMPzb4pRGgi47UocvEmA7Yk8jFuHj2J",
  "key34": "3giGmdXNZ53C5CarLjXQ62r87g74WVYgfzSAdTqzU1XyTccUmtokaZDZ818abrs5SAzEMQbxrsa2cqzYTXrV6Jtm",
  "key35": "2eH9jf9uFRcSn2BHKVfh7iwpcxRozGES1oDRWr2Zwg5hyS1yeBX8aKECT96ouHQt3XDy1dF1BhzmGbbv6bgmF8xB",
  "key36": "kMYfMvEp18NhURokuEiwHcNNRmato4NcpxPn4UbkuxW53NJ4nEKNQaZb32HWUy2WRTErxFTczNFX1xtXS6yjwjp",
  "key37": "67ELVNz6aGPi4qbejCZ4Wn9rhR56tXtcEvUxWUr3rteZSaVCSxVsWD1uv9ftSc9SBUCnBusKEi7MTxPLTKfYZqJa",
  "key38": "4dxDvScnpMzR94EJRHNyWHigfgmHAM6TJV8686zejxhSmGBh1LkHo8S6vC5SuYcHa5qxmbD7eLu7qmpJV3YRMZ4M",
  "key39": "2Ltp7R1Vh9rAK5FuGSKcmZPtafya5zULhT4epJgLjSA3mb77oroLTptwP3eo7CyG9zLiEQADkvLzqwtymfUbJUWR",
  "key40": "4q9HB49WevKB6csgYEBnj5BKTaSqH3gMJR4vZUHK2Xfn52eHd3t3ngezso1Uyms8D1yYw9kXGbDxUN7QpuVEz7VK",
  "key41": "2hNzHzq2rdie46KRhAgwdDbm5J7K5mQbvUEGBPFYg8qHjsdbFg8v1fmXfncSmZBRU2AnugdRm5mcFSPsiTgMVBCS",
  "key42": "3t7bj4N6s6JuukM67gu7UB4d4GMawFBTC2SnJV6jwyuLDW3CHDiyvipFuso1Zg2Hi8D9yomCXdD98Nvb44x5Vef8",
  "key43": "5cNEAYhVnPbBVZ7LGooE3KXBogZZkzCKCKYBxyyH9zdNfmRydFKZnBFNfmMTuua95YpxLEbHKJoDAVv9nsodGq4h",
  "key44": "5yMX6qZ2wqAXD2KhwBSgPBHz1YSQaRjV8BsoFwRfdWaZtYWydt1UvhHUN5NZmc5r77vo7GSU2sYRfM4pPbYj2JkZ",
  "key45": "3rs8aqNhRtGKYwYP96JtZWVR57cYo8tnFV2mbT6KdjXiv37rFp2cRKtNuRAVFmfGwY8GiHS2JqWn5SV3LUE5gJSc",
  "key46": "2vZsi7n9A1mVDXaTDsdArsc6y2TBbyFvD4vmrwSrCSne3pc2dEQEujnP8WHbVqoiPxtPagGgKG9BXDuF7VhQ5AHw",
  "key47": "215FK4c8Fk4zpBiLUHH5YcbXHUEBVfWaZvWh7drQv1N574k53MHaRnQTF4uXvJxpm4CgNbYfSXSWp2EHNvrKJjjQ",
  "key48": "3o3qLnbB7mg8Vz9B6d8epJ5BzQj7DTXCRT475stuqbZwaFukLJ1J64YTWMkJWBorfeoMakyuotuFia7Dkv8GNFtG"
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
