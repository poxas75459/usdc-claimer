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
    "52mm2r1Ct2rn7ZAhpxJ6uSWGEux5bEeVpC5FmKZJ9vmN9hyE5AwwjmC41UDTYQL6Qh3HgHwCSMi6EH29pnBx1jdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EkAJk8b3qtnEkK4FJa1koPsVz5GNdcqBb8ieXu74AoLZzZLawLAnLB7JK4ToUrH26Ja8PFHcYSSm7zoG1H7pRM",
  "key1": "36tQa9UAHWeZV5rxmdYRXg7HLVuqWxbEEPB5ejzQJZma7WFBFaiNx7Ue21UodVE7qFrkG1Z63G4XrxYFmGHJ2eR3",
  "key2": "bjY653DXq9zVkDGNGjywbxDDdiqFLSNHqjfpvs4hHdERNgn3cJuXSiAvJx6eyg8y7X7M7CKGjMo44FbWT8aHFsT",
  "key3": "z9JPsUhrfSJE1c9QrXF6xn562AMkDhNxCEzEFgptMoCuWthjibP3uSMNccZBP35sWKSvXkC3hpFg6t83A8DpY1o",
  "key4": "2uzmNEgKV7FyoaLCmpSYAFUrmca4Jsujyj31akJFP94VeoAN5Qk4CzrsWXshdz4mrCmuCyFCx4gKxVpYkpbaEuBC",
  "key5": "BEHmiSKWZSrCPtrJqURLpQxrRLHebHdCh2s5eDCVhEnyRs6BLjkieDTNVbWZXFMXQjbFmP4dx4MWgmwCygNAKSX",
  "key6": "28cCtyzT5Kqq3nP9x3DxGWbGetzWwmLh9y96egEo1Q3XrC5Qd9Th7cca5akhUtn3KJv7Fagunv4dFVkiuHinigeZ",
  "key7": "vaM5Sn9TkE9R5BRoh5ybpLawWMqnx6UGkbLgZFD29uNojuh1gEUpr4hhSN3u2psytcgdeK835pnuUw1tfXgEeGY",
  "key8": "127wQAKoVpp39YhkiVRbeZxdQchs5gQU7M8yjhGwZKrwnGeYox1uBe51aZrRknJNo4VXrTTqPKF4UronnriXw1xU",
  "key9": "94JxFHvzaUMGLZCTGcQwuAzP7oaqe6C61tK8nS81jMHVtJ86rz3eRts1E6DXqWjXd9b8ZZ9Zhb5d7ABQNdfgrrH",
  "key10": "3zVhPsTY6RudhFUjvWTR4TMy3VNFE6Q2PVi7wfVvCbyfyFFMNmVEXR1mStrjMUgF1TKRCggwc6K7WAKXfmgpitUU",
  "key11": "5cPtZpvB9DFdBKVeNfmWYbFB2PXc6M1R8AyCd8qsVEqSWi65qjt8gXZdB9T3GcPZiJ138ZAqTFtdZtx5c38SrCCz",
  "key12": "5mwGFxxuAR7Fg7kBRcnY2HsvmCMq3XhKYkVNoNqSW8R96p9ibNX3SDnZTD9hN3hR24nbAQBr1dN41vzCfNLeee4J",
  "key13": "3SMQsr84Au8XKWWtPGXHhhQcb5LHjSWfFwZwmXY8gxznqqAKXP8L8XfMzWie2Ez9uYV5UiPELjbsPhRNJKun2tDC",
  "key14": "5XYyozamEsbf8FZJin9B8a8R3ELTpD9m8iBTGdvwxtA4tn773Vjrzq5peytGjpEeCQrfB8BqovZCVWvSyazYbbLB",
  "key15": "3zpcz8R5NuxhZPgSXcyARKoynVL2GNysudWZESDFJpYdTGjYtxbizBNQSymsDxipbg6RYvbpXa39tWkMgSVyHsib",
  "key16": "29EzJ2XncTrxuj37hzoEaX3EMpj5rd3RcpcrcDo71DLJGLKA9fRRm88NAumYzdVX3bQfnvJ1mVr4NKfEdQmiZjGi",
  "key17": "5Vrp2mceFpfStpGv7uL6hKnZJvnAvwNudA5Mug6hBPH6jcA5eY1RnN7mpFi1dgMRMaRreGwgtqnEfHMxeiWKztKB",
  "key18": "2GWL733MLyEWLJ2WtX6fcSsfPYtRXyQ6UM9eLduD6KyrCAtnYX3EVhKe8WGUaADwmNFHeVHzh6fuDoEsEuPU3UH8",
  "key19": "2eA9qrGKW5XbTYSazqNQoEgboto2aXa22xbyVFTu6XkQ3oAkBDMnTQwisWSrySMWGyJT7DRsZgLhgRT1E3k7z3DM",
  "key20": "3dS5A3DAV8WptKN8kqdAva2QJGnVUM18Smsxi3HzcSnp1fx8YshiscUUjmHpSJ7ZuQXZmid5qdnQqK43c5yWPx5J",
  "key21": "2yGT4YUsWp9cE5mMvSr3EYUsw2pSS3XLzPpxBUv82v5d4W3ycrcRe86TrGzmuPkGDaSXCnGsVo1LtiXJ2YoCY7zY",
  "key22": "5S98harb539CemA7u9ReNnXS87NvapJsYNrCfPPkhLoWtkD2FWJsHWgG1YhSPHWHE8iZ9wwVo7BmhgQ7J9jx43Wm",
  "key23": "3qNNpMrFxFr5pX48UKK8STjoL7Zu5FcZ91vUzH7JhuadP2FzE6UuR6Gn7ShqFSF8xzXoQ7zKFA2pDtTS82WyuDTK",
  "key24": "3CKxZJmbnWhSRZ4jrJwTTnT2hzfijsVEzSRYdnxMf6Lojr5iBueQrbU2ruZK3zDsKjUmExw4vU2sQhmWgMriQE6s",
  "key25": "EHJXKtzvh1j6PvRoMuTjhSzuoSgi2o9jeGt5WGH6uTPEYzxooJunNjwT83c6NMX65YbqugNcNoad3CSsRTrU8WN",
  "key26": "66pwga4RXRnt9jok59yDhgVoc2zSkw9i4MEuSGgDu2H7EDnmc1ntXqZqxXYXGgMEeyFyrPrruuEcoGqe6f9TUbw1",
  "key27": "4YwdoE9GosCT7HHjJmLH2Yr4JcTGMwZLh1rQUzaodjw8Kw777VjoNGpseXrpeERpLNPtwYyf4XByEZdsEm6RCSZN",
  "key28": "64t9UYCjXFfRptVCdhvnMctDVtvRJebNDUwu5g7JMSxuZ9K1hQomcSEvtrkhiUnJjSoKacFgDsHsEUAxxgjWR794",
  "key29": "2Lgp5PMzZjrGrveyYNFxbXp4NRdp9FAzVDEN6Z7D9uucPhdB6cNMneLjJVAgrbngSW6BFRiWJSXJaMbneeWm4FYd",
  "key30": "8v9pT7Md5pHsPtbhtPYKZQwfKmfVnRpjh54JCKkGRKYjQfqKVdemPMf4HNpwy1UpmDkRbVqKAFkD3tG2KccnPqY",
  "key31": "wRiQszJVJkJznwWyUZP9bY98yJphZfDuHFgmMNx8JYJ1CQbEAZbkbUNh8MHUw1DJyD3MtMcaqnjv4EdeRYFtgK7",
  "key32": "2ZEHHRyViQRqEh3Np69jTkop3YuqBZYrMS5gTopxiDa65H3oH15NyTLhPVGyagbq5i3YYhjND7xSSPvjr5oW8ip8",
  "key33": "WvxeH6knvV9b3thsf4Bm3Lze5QwmXWXvMN24GRqo2AWeYaXosri1AFQYD4n6YVRwgAhXhHEKMHC7GnmW2GJWUP3",
  "key34": "3CvNuNmzDPfFBqENyfi3AGrFbmz1ZcSYALmWZfUUL1TYjFbHJwmG6EEEkHwGWgM6uWFFy7d5hEnTCVuRj9kbeZuy",
  "key35": "3KqxHxHQ7QXSu2YrTEwwmkMHnVaxQjF8UH51jvQp7J4RhEXhRdWjhocvQ8QdGHTZeNCdWs7j9EvV5G6wmBtDb9C1",
  "key36": "NNSuixXF19AXp9CWbES7vSh7T3HbmCmDUtPjmUn4zJkZdjDDzAfP8PC2UGUkgvG9XwpBr1LRHNypDdfBRcH42dH",
  "key37": "44tTxoJSYvXdhnsgeASeTA6dCsnZeyb6xrz5eLq2ZSunZih2cBBCfU7pQXrPvA8LGxQAggyG4Ws5JBacZaeTAY19",
  "key38": "62uLSy4xvbBJsUs682Vay1KCbdcYQ38QZM6AGTtXa7V84mtVmZBLX2DJ8bYvV571E6h1NgVQfZixnP5cx4hEQQ78",
  "key39": "2GenfgufMUecY9qtAxVs5tj7D4NQYP3D6Mtquhj3nFd82zgFckLPn44x83Vy4ksUFQrD593wcvmBNDA6wZD2k38p",
  "key40": "3LrNPH9XiqJdhcpvaCH22MBjLGr862NT9PXr6D8MPQVyzByhAn1hLRCnLu9WkUA3gvdB9NygczPjPLyJnsfBWgHz",
  "key41": "izwUoL2sMLDvKgcnKa95MvybVgZWcouY3ySFf8G7HJCqc8o2Bp2LDAvQeZecR8x9anf2u8HLq3paWTWvmkGx4hK"
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
