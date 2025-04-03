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
    "5e8ERh5yDKKW9MGmRKhPnEaKKsG5oD53dJ97aRphDAuKGJ51WAULfpKUpcBS1LYnX15Kfo5BrfpRiL2FT8ZgrbGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdjpb8muHyWLAy7cNYPMiucEZWjsNFkoeh56jvmzCWLu4WHjd39tzsSSMMUhhqcBdLqMG1PRAMGehwBHYZvaF1",
  "key1": "2uskKvEJanQfhs9rmYrTVKL7T6UwENFY1bZgTBiqrwbFe55XtjGfvyf3kqy8xws4XMCfT2fHBCLjAZrRXiDphwUS",
  "key2": "35qcNC6L4czHAwRXzFvL2t7tA1mJNhQs9ZXmDDrNf85mC6oEmpjjDBte4NPMyznhnr3J1rNdXsGj2ZMTYVesAWbZ",
  "key3": "3jWtg5S4GKZ8BHFBWKJEV9rBDyBEo6BRG1MhisnGwnBkfUoZjA1q4gBxeTrXZroz5xGVbuUfA6hydie8a3P2FgxQ",
  "key4": "2c9BkM9waWgDudh92be2TzVSdtAKgQQkceeXhxe6CnsBD6if86yFaiqWhA37CQY5kCDGpL4mgkhJsWNXeoHa5Q6e",
  "key5": "4qZ6cBCZztvH1YuqQMz7LLE5iq7JNH6UxbhobRj3BLqrMKawRcFpisPjgnBEU9UkijupsJr4TfSNHVkXx5rCZEME",
  "key6": "67raXJd9tUkzzwWG4qoSzaGfDgEVs3vg6YGoCDwUbhXkSxJtumpq9eizkbK4eQxzT2yRMMDNjbAd5HHhGMkd99Ed",
  "key7": "5Arz5LX5GBKstnDrGALvdJfjBspCVx3AQb2FVPkJPfWELWgDVMWuNygMxhXhyce2eZwF4QGyFGZMvq3U4v1iHVAq",
  "key8": "ut85395knsqyFRoafkZHHKxXfTmfusrvpoyrysnQPgcCCUCdzfDBfc9w7mC6PErvesaNL64Q2USxC3UW4RWoMhU",
  "key9": "3nSdX3YgLsXenKcXgpn6NtLdpn3gybfVvMnuFzU6Kodj42ZXazePnLrWhvpQ1TaZzCthbNvxT11huFBUVsFeEwGt",
  "key10": "4ensNfNBjDyCRdvBwf2t5Z2chcMMUch3a7uKZWapCvfU5aj6s5gVhuviHDCm44CKWNzj3JVUyDNvx7ibG44aqKEG",
  "key11": "2iDo8zZDia41SVQC7naWR1soUywT4n7uEAF53XGYk2XscyBXVpZDaJXV9uLQHrhJaRMVzGvWxZbPmh1ALW8M6r5K",
  "key12": "emkNt6dZ8Mh9iU1idmLxesWEXBEJw7DjqQUBxeeTnnAh3VPkT5WL2EyRPqtTYnAtsbAKnFT9Zgj8rx2J2Xs1qNy",
  "key13": "5mpYTc8TBeyzhNrmA7HcE9sk6r7N7LwRCK57nbUxdJJ216pmZssR9Wm1wop3XSmkBbGht5ZJ3mQQ7WBVxhVCn7LF",
  "key14": "5krvBxWgT1ovh6nmLFxCyJudiQZ8eauguTSxyAixtTVsn8ALPRVd4qRp9pFppAnz728gBfWGCFCoH3WLEE8rfgBX",
  "key15": "3fkooEKJZXUbD7ShgQfNc2bSFyWqvKBJR7NzfKTiuzPaL6FJnBvUExAHXPcm3gev3PNquMoWtwpHE6xjtphp3NCP",
  "key16": "5dUqPdSf9bg2T76QKtKj7yeYFVU2ioWUhmK55CMgtfa4S9gvrymKE9Ep5gs9rmHNeLDoHermYzR18hqZfqSb2bNX",
  "key17": "2zX8URwmjbE8MUozVgdn7WQZm37KsMnRTSXj12oys17GLTbW4G9ReniZy65Fi6ZKTTHJjP5SHBkjoXoNiUyQpbdj",
  "key18": "4fRuAuKW3bVEjXs76qZQpcQkgTqHsutu3MFn7srhoH8f5S2cM6TrKUMozDYnRRRuQ518etbQJqZdqzkRSuspyENM",
  "key19": "4VcGy8ZiFHYuRR3kp1wthHf8BxMs6FZuGgkVMzXaVG8dNPHSMq1ogy9HA9uicC4e6yrj2gCf4zREMihkDHLddJjb",
  "key20": "wgYXh3PSetZbk4RCyjMhfcuE7d1kvP13KdA3zDeKkyCv3e9xCAEN8jHVaxEUPYsW6Gw4XQW9hE31MAGQBvsdNVb",
  "key21": "Ecbx649xVASRQpsmmjPzyBNSKSNhXvjvwd2zBLJtG1XqoJ8VZ7musqAvwqPhWGbMpJiVphmkq1vLVKFVweGQ52e",
  "key22": "2UkWNSh5HVLy9buvcWMnMfJ8d9hKmepwCXyXg5JCDHiB8YidUgqZaCkuDBED2yyYkZ5UvZsPaH9pWWmWTEQYNc2j",
  "key23": "cPV596KjGdtWtxYMyWPUTHveHmbNixAmBP7tgxtX4wAG9Qa8ivH1fMCTYemB3uPVZg3gv1WcysYkPwfTbfjMcYh",
  "key24": "2pEt5aFL792TXHkqjVW9hqJMDX6s78oiSZA6qdhRWrBFn3WR8N6HryogDZ8ApNH7SKG1C8pPNKytnv9tsk7Vt7NT",
  "key25": "321CFWRdKkzcpny9GnYXNoqVd29yh67qrHm8gRA9p8yGksM8Ew5AyTevaWfBfcshjFGu9MCE3edPTxMWsoQk5FZ9",
  "key26": "4cJQ6ayNLc1Hkhu6KVtNBubr1Wta76CqsqsMVW9195Q8Hbw4GSS5zDWKFrNu4LpMG6ZesjG7zhhFuEeewCVR32sr",
  "key27": "4X7ccqreKWU9UhnbKec63WVsNjQAHWFUbKRAjzRCDPLqr5eGFXqu7C5Me41RKFj6uGfXVwmHfBWpc3bpNgR62JHD",
  "key28": "45zZjFuJDyPERTQpg6KdQsUvw6kdNvHbqgHyJmsQAgdjZNa3L2U6yFUhAphJGKimL373Ca2JRY6v5rQKdBJxHaXc",
  "key29": "KvBV6Y462T17S4fJqsRbVHPuPny4wmDDMyV11URAKiwvizeaALEmVuTKgtWX1z4rJafm4fatfhXeAJFoF5vtq2E",
  "key30": "2hmSQW31FWY1fowNS2ZfEUEcWvHJ61qN8mKgw3JTuoj67rMsKWEvdTjyS4DDGj3kLnehyumgM8mVfkDCQ642SUbZ",
  "key31": "28RnGEpTrTgVe7Jkgn7WzpjbnKrGj5ye4BweC5Bf6j9jWuzmbCkds34QcghAPkqLkHXs1wrCsH6mwwoNqn3zkZio",
  "key32": "31GDFJ5r1tRuPeodFigR56gDiJdsqoECWK6gW7ANGz3NAtcXvZYr4sGvzdxy6zNgjuJcyMwRrwuW13SC6Stkz2Yr",
  "key33": "QmV7TXzXnucQp4C6V3sgKSAbWPPeXhD2WAAeSRznfsYjYahuVDMJPKKyAAgVZGNPG2jCdmu4QBSnaYvTY7JDzxx",
  "key34": "5jLAmjAWX22pvfDDLaMaHdWx2hozxK5aqiNaNU2kC49TQJkc1J4C1tK9qDNhjVCrc56TSam7ogGwdWHZhsUfgtgm",
  "key35": "2qhNouwoRrjbgSmeFt1jihuychY3uTU2i6mNvQLZugUojrwgwMbGs7WRuUMEsFw7m28K6nta9csutYt1YxQd45RU",
  "key36": "3mzSf1aaXZBr5bbptoXCKK4w4rggpXQhGSZTnDLWLcHT1oHgPghw7McVQ9Z419SDt79PK9Ga4sxoRYd9YwuM7Vh9",
  "key37": "QUG7BtZhn2mjitbq7XdzZX6gTxc1cRBbKJGKXR4tJ1Y4foVBvBR5vGktk75hw5AZum5k3sd493izbg5eQSXYJir",
  "key38": "4AxcdLZgE21t4wR1WkFk7TS4PbbnN2f9Zz3FoCaNr15Kwj7Vz5EcrJctDxSm1JeGjjbvow6twYBdMssKRgNF8Ng4",
  "key39": "5PZGC5VhnD8MdVmyBankRnLQvGEidGfX4NuBPmjYTdX1qMwinn1W4a87mT8pQMmCNuyFBpPUMmpFoAuwHfLnAs36",
  "key40": "4eRDw18onrTLrEvJfQDqFKyUKn7tyFDkpKawpPedewUNVk7cenBL9scteTzBTNypLV3JQQ6ye4Wu6G3c5GszsyFs",
  "key41": "5Fd3qdyMWtUKq1thwPDUDPVk1XytzWKMW5z3r5Z2Bmujnq6t3trzXT3MuX6PkAsVZ4QJwzsiq5sAvYFi3DHZLFmN",
  "key42": "4BAfZNtVwaZRE5NAU2STDmtPQaWdR27WeZ6oQhwj5wr3Hyp5stMii7QLJMMfvy9KwZaCw9CW7t21DAig9VNQo5ma",
  "key43": "XUropNqr7FNiqdvxUB1yHEkbz9848e9Y44Gz6FjWV4bcErGi8yjgZKd183UC3DVAUVHwUy8otATVubmQ85xxbsq",
  "key44": "3P3x4xbEAiKpVMKcQZrTg6CcRCw8ZtjJZwebX199G2kf3Kjd7dP33n6usMBc3hENHiyJed2ARcFDj5LgaasaGV8X"
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
