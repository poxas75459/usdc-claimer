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
    "3NEHn3KL9sh6dzjoy7v8WNU1TSYgoNjnmgGx1Hyvc4TU5JxrkmJnmeq5Zx2JXHWQaTJDfbd8PW9S2aQpSRy19FaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AK1oHRP82VS83e7A4JAu6wAhvrLNn54kDkgNjPneAZpMYNY1W366BpKwHUgDj1dGQySC5yfuSFicv8T8VRxXKHH",
  "key1": "5LLFRQEV56JMaJcNaMwsc6cZHbda8ZZeDYpWdsHrL1a3nVew9Zq5pD55AXdoEM71bqqeMC1TcnpBot18ofmDhtP5",
  "key2": "4dHKm7TYb3bUuiWfHzNmEDbnDMFUCchNbV9Koy1wg1rjmsy33y9mr7sRG5G6UNQreKkvXdXXB5TwY7DXPhEu4Pok",
  "key3": "2Su7qwfKVTUML8FGY1cDDegU4iYKEpLyH9WVsYXtbRFSbcpZtjdpDhFAsJEpe58Dpqpnowf4Df5BWGghWVkM3bYP",
  "key4": "3hj7aRN58Y38zRfyyL8yzGTKcM7YLG8EUSC63S4faph4o2ugiqXGA74v6Ls2quDGkFsVHWDQLcomLB82a6wcbHTq",
  "key5": "2N8YgQzJXDJF7hfJPTZwHH3Xb1pkG6dnnFqFTF79i1mkE3bJLx34UiRpaZcNMm6nJND76ENgZyEzDdAnh4cqk3vM",
  "key6": "5q4roNswuVJxGchb1D6pr8FVNiCbiFUpVT4FjmDerzjRQQ63RzVtPbQb39Zq8jGxGkFkF9VV6pyRvaqiJriYLZJn",
  "key7": "2xmkeS7N4EhPdYHY4JpU65s6B6o6yhAbRemwbkvajRU5gYcrGuSTfYhBruBot6xBobHfyvmyD7yuMLWQcUgz4PFh",
  "key8": "4kFLW5MtzAmnw5TWsiBQBeTytt4ykAPV3JW9Rcn6AuxiMie32VgGU791vmwMUyi3kmiHwyx5gTcuE21YnFj7Hg9U",
  "key9": "5isikCnpHE2zV2sBJz5LkyzbTThUeX6JKvo5e8GhHDgoZgKwb5qmsftbeZ1wh5hrCShmvBYZ2YziqkVH7aczydDS",
  "key10": "2nG2K18DhuFWnvN7XMxkS5EQXysXnZn2basVnkj6j4PXxA3n44izQykMM5vFMVg25UmsCmRrCeDYhomr4a8Z43j7",
  "key11": "428eFgaTat365BiMHAkJAfa9M9M1vH87dKtho2frmDbYMcgFhUanFfqdkSEpxPD3XqWk7Sc7GpqLzEXkMKWDuKH5",
  "key12": "3vy8ag8ECSjL1ceT8BXDaKfyQM3Vav2h7JBSu3fb4zCrYw2hkS2ZAJ8QzpnUqpLqvNnFpVSLkSPXNEw9L6HNJ9f5",
  "key13": "N4nr78piRCoqLKsW6kyzf3g4Lcd5Hg4Fw7EUgihpkfRVAiwNAUGj6e5tZZDVoDgxnN9oxM2jkpRhKbpuMYTedWq",
  "key14": "3MGRQh1GvjYkGH1C3MJyerJNiFbHpwwAYm83H11NrWr4wJKd4Pz85ovPabCsbTH9HMQc6ryBpsT2nfkBZeVMbKTX",
  "key15": "44Qd1ewPsk2eaQK2N9tYh42FHPVU2McLwBA81PLxuSfDDEqM4G1WFapd5SfHRDZYcVW8Mqheu7putDKtbUmYjfPE",
  "key16": "2gq9LcRHmFqVTSbGUuxfz9t9e6GpxnxWwQAuE84d9c83tPNGZZyWy9moJWLgW4q8oQUbbWKcKGXzheZ4hPCDmGfm",
  "key17": "15xTDm2PzqJbyduVjZP7D4USMzNc6eRG9ukVuidpSGmd1pZzGkqCjj6rsQ3875RjtQyyij4dSto1wNjqUk9MoBo",
  "key18": "374nUDbATHNAVMi1bFZBE2ZL8kpVG1eaomWE96emV4nUUwkZJKJNkhQV2GDpysUw1WAYnkiJNU3o8WDCFyiiC3NC",
  "key19": "giswecoTmCiwHmfNYdW2E8ciCZRoBNvNERYB5uphGCGoJL6hw4S4hAqi3osKDbxbpVhZ25kseC2xcCBrCjaaZxH",
  "key20": "553H5WDTGnTi2hRdupQF6tG5Rcg2f2asp7q1iW7axGr5xmYwW9LeQRRxy2m8yETpbu5sitRiG2xPYgd7RUuq1Jgy",
  "key21": "3eDe4bk5axhJNcwWqGdtsNmyoEKx6natRNS7z9zxFRzPMn3Bvk8PKQHTVQa7nDXUnc6WwChZfbQ5xGD9z6H7XzTG",
  "key22": "2odqwRR5RCNhnZ3S1TWVFMgWc1Ed943zoYRX79Pft7E2UTsbWGrdVg5F1x64RWLHTUjm4MCZGjvrDkycgBd3HSkB",
  "key23": "46aEDBcNShCShtEBwyY1CWQtHW82vnoLeg6nAqxZnKDE14nTvHnadjCdPDgtSHKVFz9h83ayV2CPbNHRhKLNMkVc",
  "key24": "2wyaySSzJ1uxKb53j59C5HBsA8XXyeUCThGBHibZXi6aEENsjFaDsAvmnrXriGEgG1HDsNNuv1JaZHjUJ7JjMvjs",
  "key25": "4fxn6iX6LgWRQNG2PztwkrqSkwHhu18rfJyikjmUtYneY9wdKwHt6MkTQHQJNpVrntKy5LJUtL914netxQ6HRgX4",
  "key26": "d61opsYUghsh83fAQgrzRDAJpSGyPmzEb1vVasS5cW1h7KZyZm1SxGBa1G9mqkdC1zSnSBcdNJzRad59sBRa4Lf",
  "key27": "551SF7adKVUHjeV94bPPYzCJh5VGz41pWmEuRSCWRNFjRVhLwxqeXcHPF5pQCaAyTB9nCucAyMDfDgaU1er6dBbJ",
  "key28": "suimw7eaBikj9wxwvp61N2pmKiTu3rxMpZGsMNdhfcVPaN4QuZfx3gBreQM54M5Jiv7hSvqLLx8KnoYUHCKGCqh",
  "key29": "4xzyPy7ogGupJkqxjb7zUhAFAZeNA1eHqRbmgV35Cum6HNFCbJ4ciN2GLnKLLsGG4SKjhQQawwVmofqifJxTXdiG",
  "key30": "3FCLkHM4UtDCkibfZMY4hj3JQdq6mTvPDjYCuH2iiadSH8jAjtPHqDm8ZSRvVBkPA6zH1HZ1ziheovNFHinS8aSG",
  "key31": "5K275tsRAj5vL8NuAKj4nv75i7QwvmE231MKF1xiV272dtJwvcDxnzPncFjoKQDsqXD4F35qNrYzgQ7x69dweZvz",
  "key32": "3crnQSQV5e73js1PjiX2PhBJBLUoyfUvrBtrm8E7yVeFiToJd2tThkHb55bbohtJfeKCNwFsGvyYYvhpd5qxscs4",
  "key33": "5sgTFaUfLHkgS72AgAFFQB3Yh7kY3b5j536xn6Pj8XHzFuiLcHraVqFUFDYyTp8hPX1XvEnojYLKeFxy69xK3Jea",
  "key34": "3QCmr9atkVSMeuLdYBrRFFF9JLt582Ky1KN5UFFjwAdTV1E46GopimctfgYiq98KrYZvqqUaMPxZMQgqWnadA73P",
  "key35": "312tLMyZcqNNs4PDGvCGRxHaQLFbVM2PKGEB715njjKfWyzJNd2WoTTJQFamj1wUvtrFsjsr6iR42BWfEKG3tQB5",
  "key36": "2wH4eA5Y1fyWwJ9LCLNyQUTHZTfbVfDKfUezj7GYNeNBECxpgXXFhtj2eRVMQ8GguKpSnKfbtCiSU4vgiNnDK4yL",
  "key37": "5jrzTeEpy9grAkYh4DzEt5dUVM6dYNcg1PtMRBpHuCrn1LxFcDXDTKrbRvXDKgJdWaCYvaRMur4BpctxByY7KTt6",
  "key38": "3S4Hq8JWhYhBzUFaf1TCVfv2hwUgQRo434Hec79iJCSuAPPPkGr8yqqhiuMD2nKVKohPzMrv1EytxTqDtEGpo76y"
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
