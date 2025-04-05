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
    "2p18oZK1WwEqmnrf3uWc69ppRozZ52LyoQTQ5x5dEre973u2HDzUAJD2TZrm58i8EEDg2BH8zRW38JWbwYvMwrmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTxyj1mhCHyMBNuHc8yDegz4zHS4SMwrFRBvuLPwtKq8u1w6dFVDWXykwaj4mw99poLTpBANw7iXUSBj6PkCvTM",
  "key1": "4Ukc5ocwsaCTDs5kDGo5N9Q8RRxjc51jekHB4HUNYU7k7tKKyrx1Zx5mSHA6MPH5CfV6jRYnbpsHwoMM74erdtKj",
  "key2": "3rJcPmhv5ZR6dPw8wxm7PixZNe7mRdsKYzojv2YQ5PauHy35ggCed2o4tEzdXR27ijgV2KiKnLuaDtLcvP5W7Nc",
  "key3": "2hcpwXWkJBLZeVaALFyaYXVFp41jFKhLLT58kus2R7WG417gUXdAf7a15Z9KDwyTBFMCYuHJWcC6ez2tBKSxM8Jx",
  "key4": "5ZJMtcvNdmCima2BFW34DBcpLmL1TCggGMjDXRLutqYQJTWuqGjTvgMhpgfvMx1VdCbpNKaRKtP9MV4ogo83L3bX",
  "key5": "3KgWsTNk1GFdzWWg4sNnNKw6ETpZPboTbgxJBwUDzr9et3e5g6Hdyfcs11Aconk72rQnFPk3EGmSkPMjGTX4eFgA",
  "key6": "5PMNCKp7RG2eGcKBFXwgQuQEGcKBtbPSE622r9LTNr81FjhNTYv5FcqmDjVUGhf1i1kimBwtA9LJ72QDb9aE3KJe",
  "key7": "32UY6oWW8LVTj6BueY5w96QvLrsQJKDQZvmx99cduFeDDopatNJGbpVAQeP68cSek2eyzcaYMYQvNPEJYYkZRXpH",
  "key8": "1GvfJyBhuvNCQG1feeGUxcnpPCFjAtPusWRWqetTJriuscN9jR7Wo1gdxoCZ1ui1G5bmVyLNoQt1gHT6MWMYbp3",
  "key9": "gsB9kJL1wtLRdDtH13M3vApUc71bqC7FDCLa9ovmYkWeeG3JSnnjYHXLV6y97wZnScUYzho43dfDeSg3nr2ki4w",
  "key10": "4xc9FYrzeoUGDt3hdaHbb3z2bNRwUkVHhdEKwenvA4GuYWHufWtMf1izYb7kaYFgrtwmr3bqVYBRWeBQPfGMWRSX",
  "key11": "357VebDF8xibFkCQx5PHokgq58dc2WhwCxKNuQ4wm4ZQjsJWVpGZ735dz3PsKv1GRnaWZfGLbX2ux6T2PhMKhJxx",
  "key12": "3v3TumcLt5qkX56TKoHhnAsaeGw2RCG3ykwnavzEp3LAnMFuDEwEDstPzvoDzpfsEsuKr3K4qyh7ATU4kiYpspko",
  "key13": "3y9DMXsFX88mNoJQ2UqEDZ2cCwpRKzz3LVam5omsAGyDn59g4gjxTa7tmJwudPVyNyLjyy26QVsiesxocDgPRMV",
  "key14": "46zDFie5oxzu9LS5gV2mwo2DeANVeqA2cnEzexJYspztDDx9K9joakEE4arXxe5xesqj2zZatr1ncueq8cTFKvbn",
  "key15": "2rfbTak5ij6KyFRpGZP3SZcmog1cNqpknf9j5ocq8mbhyGU19YpfEG7BQh8oxWPRetaNJxXeqFVkst24HHXFzGog",
  "key16": "5TvAr1CneH1tnzaEVhGp17pCwAHddsWG4iF4qrybvESME4Xpvgq9C1P8hHYgh2EJrBaoCrmgFXNLvZbuqhzA68Z7",
  "key17": "2sFbssmduEXSpX5cyNWxUZbTFvswVqkdTi1aMunYHnVBnSmu43ipjcPxjXEbdMwx1dxCdxkdvfkcd8YjxAP8xFP2",
  "key18": "2v2Y5vJ4C89a22mWJsRdwVtZkD3sU9gbb1KZAdEuPYFUPhtBXszkTudhpEBq35Spo3eMBoNKF6fsH38eUdgouLCn",
  "key19": "4dEDKmz69w7tuu8tBAW4LdrUixGoNAZACkoboSg6VkJHyfWTjccdWFLrA6bYBQV5HnxeCTkhGVopmm9Q4msmbrsF",
  "key20": "GtvFneJCyhGVGJv2uk15oEo2zoBQ1ScjnwYT18eq8KYn9ApS8RgqygV4XxUfCk3D11WPoNXXXt9wAWwWYSK9kpo",
  "key21": "3epHBtKf9fpKYQDM9o5bm3BMj8DdCfT2JXJA5EcY2h9gbJtAz7qQ3hgzmh2eoHK5fnbbuoL2HqJvWaPYNHd8v61y",
  "key22": "3USujN33QcckW8PzAHqAMuSx4Fzho4vD2iAt6TbtjQcuWJ3qpjFL3EoFfbeaBt7FhjjsBnhYyky5ar9hNh7iBz9q",
  "key23": "KPwZCuUaXqDDJrYzUpNdoqCz4xMcgv4zYE3n2vvEMBJR15nFBdPtKaaeVLkNoXRytLVQkWMbvGZmY8B3Ry49sEu",
  "key24": "cnMbT9seGT29vWi1akATwgwcDienXBe2JggSr1TLdHppd6KkN9XebqS3mhUkNoRJdj8UPiH6TGUsUJom1eVRFp3",
  "key25": "4NYcbCgcycUFKpc2bHGDwXXoHLpjumb5fycik2dMgeRHeeFdnMtPHfC2JimjL6EH3YWBWrf5uts9VZDDpGT1voZe",
  "key26": "3JUUgzNTDEZFeK4NeBH8AdRuX9Acun3NfnoQ1woN9cwcqk2UH9pdxjGxhkmsECXGLjuZ2rqj93gjGCozrdeLPXC6",
  "key27": "2kxaGQ5gSnZFwKhgr7bmkhEAFK7ZKi6dqFo9or53C6g4ZmmK7wdeaweMKKjKF1bQaQBabgqx54dvBteTksjP1NeF",
  "key28": "2vzmsouiSdcqQvYbR1Mkqpd7a8BwukzBjZndDK3Q6yM2uMZPbEHC4fNuLCxMK9aw4rz4mgVqt8DenkkAJUkSWinD",
  "key29": "4qBEb7V6PPu7PP4ZBTMALBrFF6EHUS5adtogPcVZ3Vgu8sVPCqLVGgVDiaommYgDHCJJJEEf5RDe33DrCPsNrv3g",
  "key30": "5fDai6PTD3RJZ7Sree3n17FvKzYCjzk9VWqJSJdTT2PAQeV8daqt2CcXub8hHnST3pU9KtN8o4xvmVGzrme2wKZU",
  "key31": "5k25xJzEkvubqS2MQpVhphiNiKS83kQwgVWwKy41VdAt8E9Z3WW61nscL6mk6Sx9N95LU2t5peSLSGDs7B4gmVYn",
  "key32": "2TgUACr7j8kt1et2DRfnVv6kXRHmXCFCYV87AhuXC3i7hm5dWz8eUxkj5qeuXKejWkrZzxv9GuLFDqGWnvBhR5JU",
  "key33": "5KmRe8AT4mfRCrJbr73C1ZphKyGGyDtAj2YrVUrgouBiMQieFW8eDN4v1GGBThwzAmvnu8uRFjimcNxTXZoMYgY2",
  "key34": "48tp5bufMeLoLgwE6RWCjcYpA1kSkiD8pFrRf3PFPh5hhevcS5MMYC6MTNs1t5SYVGpm4LVuFcMH9YZepmB97PpA",
  "key35": "5Ks1NG32rmqq62mviK93xLsiCapMZFUs7GxzrXi6EQnkVUqFB4eRGJHHKzmWmvAfY76UEFEp7WZaAqN7H3tt5Rii",
  "key36": "4c7BBwj1grxLwSc4iBSBbxVT8G4QiBeYQBBGmZqqzFrH4tWfeq1nqGRYjdL3rdXpB959mdWJF4XSKmuSRVFrUPEG",
  "key37": "5UWQ5Np97c32FyzawdsUXLAKL7cRHTZdYvKNuZbZ4gXw8PjRCNvuYrMjSP47aN68Vq8cidAFSBQu8ebKKF4qH49g",
  "key38": "5Z8MqEVv6Fq5tiK3TGL8M623rZdfkNcszrVpCSEmDCrB7cRfm2LL5H5ENqYqQPWNPkXrBnHAnw3epiY783aZ9Nam",
  "key39": "3xNehMgjLxB3whL44UWBWkKfoVacrgcsNrwS5FUNNmXK1Jz2SoCTN26NEWAx7TLyodHigaixZKiqoinCVFuuiMsq",
  "key40": "HFQFgnzdLsx4vXBnQrHiJcqpu194fwXwtRMy39Hq4M4RyTiA3fEjHAaPT4cBYfdbKVgZ9csq2SHZGtmMvv6GEe5",
  "key41": "5R4qsSqtjCPkm65Ybv9re7eCSrrtxfFv1sH4Jc14ruFCHWug5Y9CPSVAgzFcCYtN5DCUx3GJBUcXi4fRhcbX4pWL",
  "key42": "DvXPqzbx7pwUgMdYiafY3dXRHjU3iuKPHuCNWNB3vL2AjM9tmUK8GyKdk2Gm93gXmv6A6GtzWNz76C83jeSzAs8",
  "key43": "34qRH36EYSbu7krR7JmGAqgTYLtPTiSPVUAsoyXgG9EenNHxy47acGxd1ckQkLeRqwzt4xYZCA5Vo12Mp5NebTDz"
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
