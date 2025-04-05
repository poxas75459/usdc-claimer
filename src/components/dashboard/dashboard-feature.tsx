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
    "2cVL4kTDjEf8WAXnzCRAW1XLYyN8wM1D4N6XZZQgXbKxDWAdmhJdXHRizbtZqSANvAW86xgXpE5kAPwZoxoJ7nQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6kQYCaMQ8KQWA6w6qfdd4UgiH2XCVhe7RjKu1eYRama34jHbvZ7koPVzcTwC63iGGPASCry1Qa1JoLaVv5rbcK",
  "key1": "2Sjro3xSU3f8y1cg6gRohuNtbrXHxuT9EsqiA1MduSnKoc2VnXRJ5WVThyxwTvP2KZ1q213maBsqcWQWFuqqjWKv",
  "key2": "2PHKzKTXkLZdTFsytVYyNQSZKFDeLJYxTBdTrJimJPS1YgwWo8CbjyZ2bCzQFkV4nGf4xrUrs76GdWm38Noer48z",
  "key3": "2F4FAZ64pLSe2jc9VPsUs3YPSxeyABRt3V5m47N81uNgedXACZpUXqnGUKNnXiu3dP1CN11SXzTitwktsxiUwdZG",
  "key4": "52VGZR7HHRATymFMHa6QyY84QFM5MejrnkrPk7SynjBy4EYCrAXfS6eab4aPFL8F4UNgdHFyqgESkcXEpPUfSuvh",
  "key5": "4xJ9UaZqhGJoRPS9myPS6yzQe1kp5uyhMvm4nVBup9wsmtRBgH6d2KhEeQXc7NPToC68DDYGahp1cZu6GcKgEvpa",
  "key6": "BvkKjfKTKua5CE94GxgoDH2VkiZbttHY2vzJHF45NDoGY1cshGVHMoLJLNSMe3iiFaRe9jxVL8WHobpfP9jTHdZ",
  "key7": "5rTXxFzYEnWz1fpSunBgh81ZbLhewARYCPy6n9GBgf2Y4fthUwZi919kSjhResz71jfygyE2cfVPj9wgnE173JHg",
  "key8": "4HnoEyxCKLs2Mp7cEbosgP3FhwP5pnDeRj7HuBcyRy6kc7c2BKAQHbsKNMN8pKRuqPqsJaWUKQWsS8JY6ZkLPGvW",
  "key9": "Yh2UmgZ1WMgKaJBZc2a1Eoj3PQRLYaGvDBYCkocfiE4ex3zZVaHxXtKU388Sw4eodNdked27wuxK4r8RZ6FxYeT",
  "key10": "5nWmsy9p9ZEZNx3eCgR3uhhcLxoVB6HZCYjcoFmaYxJbiVVkwh1dip2VNP9fG97ri19hJ6GBrLgxvKbjAuSyd1KD",
  "key11": "4taZtWCGFBUNfztsmn6J8U42NrWpqK9eKFdXH3t4DYfVuqnu7r4GdhmcYF7t1aYFEtkhZHrtHrKMp4wtTrHmt1zi",
  "key12": "36MAKgCVjVCdU8MHRbfqQimpodptxVA4SERzyMPsymQ6ZyMJGuJUfjJqGuTHzQLiXpRW79zoBPdxqezmQFY3KYNw",
  "key13": "3c5ieHp1TWvMEBgwuuYyVciVc7jP74YJYFJQR7tsSND9pox6raLo7vGdcV5fWteYPVLfmTVLKwvg4BonEtVf9Rji",
  "key14": "5bEowgwfiZZHNHuYbfZhhwkpL3XYcck8KgMe1yPHpU49TkiKDKG923MeocZ4xyDL8d47eVGNXChBjZkfXKuGPCqn",
  "key15": "TGhY9f3fMk11WpUf1xFXi12ypB86fBrH6XR2VW8o5M1nY67jXJZJWUqAfpM5r1UYvJeXFGjS3jMqrYQGMVRLSKf",
  "key16": "4jNoVAPbiEskxoM1DLMD8V5khTJgxKwfofjYjVRyAD75o4BtoVr1x8ddqRotDPGgmcuFUU9b1gTMGiBwhodFpRSq",
  "key17": "3v32bYAkhYFnhd7aPnhouiibhy7TZWhkQb22fAtXCmZDJp2RiToCptf61XTT8su2AMGngA8hCLoNexxA9T3vbt6f",
  "key18": "4GviVS9CKb8hfgUeRRFB4h4zRkq9AMu6RwuDtWu59s8m7cP2BcddMmNa1Jgw2EKqz3dZscH1rW6sBwtLJ8zmUzty",
  "key19": "2RNGHo9cF9Cge4es1GPRRkqqUvQPERxAmbZ1ByCnT4aGLsgtd2Cm33YUXAJYpiSn9KrT6XmYkbpWJidodrXzA8mk",
  "key20": "3C3SoiTpH233V7sj1bJ2Ra69D6y96EC1YL9QvCbqQcHp1EypsjkAkny6n6GCQjoevUr2YN5n8URiRqScV2RManjY",
  "key21": "4GmND6KApa9B791eKPn4FAdfaFUAkwZRidkL21CqdgDGuECCYMMYr91X6qSJxSrqdoKUXsTQctv11Fh93Zj1zyck",
  "key22": "2P86JCBXBgYvbQ39m4kMmEok8v4pjXXEqhChcbb2hmUBFVpNfyZ2fofQe9zAqLz2NrA1Wrx36msjJ2tm9hePHPNw",
  "key23": "3pH7haWXNc9zWrqvZ67oV9ksbKPc1dUzPvb8M9QbbA9P9hUcqG7Yd2M3LrDx6L6cBVhQJsDNqhL39EyMqs9jhJb5",
  "key24": "2r1UrzwDDDxVER7YtQMyW4usuN5812EYiDEjc2daSUhtV3QXweb5YqqfDNTJfrbF1GmbWsucZVZLaewLnh3qasqE",
  "key25": "HGSshWudWTpqMo2gjuJhJHnh566MRNrJvofb2GriWnvskJPdz1iwPMSi2iXc77GjDKoMariWUTqF6hZyRaV5v9e",
  "key26": "5v1j4k8i8Wk866LHrFYcWfqmhFuodiKfHzeyBTChsmQ8CdJFiCQMaZHnGWhgbS5tZQsbKpFbrNM5mM7D4JVdLRPG",
  "key27": "2XfcN8qfDXBrLYz1wF2vA9cJXcjvt4ZG8ecfY5vfeNTwRdJLyeUQcEzQTCnpLrXguh7qxt9ivko7adH4S3zVUBpf",
  "key28": "4kQiJWgEDJyG3LCSqrK1D5xPCtECE69WiJLprRtcf1cm8iqB7cMBDJDjswVZJheKFrsdVX9o3BbbzsmiLeLiaAtx",
  "key29": "3c69b8t36sMfRJ8GbBxKEkNqtkRfKAHqtuB6buy7kP4g9KsitYZRdZQ6nM7xyyybLopnfsUzn3LgV3uvR9uEedkq",
  "key30": "3mVkkxRmW1ySxRqqab7yyjXLwn7avEGswJ6Q4GbfvvN4WQ9JkrdLhZeNhYViuxxn1dXBQmU5CvRWN3Ldse6XFWdM",
  "key31": "Ep7dXmuBXTDCYLYertpbePZRnnJuQYDdYyD3KhQC7nYPHPAyVaaf9rXbfAoRSArRvpAJE2MfF8CLXfy9etvEe4H",
  "key32": "5P4jenVsKK6TnPH8mWdLbSkxUQeoZaA83QdzgQNn4GAUcpm551E943H3yWxhcg4kY3hAQkPzvLnHDj5CkTpSeswL",
  "key33": "2j1aLmigV8exFUzXPAnUrrDTiitETQ7MeygdibjwB6THpGjJPTjxk5itqquPRX4Byy7FFLFSnp94JzLUCpzgGkSQ"
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
