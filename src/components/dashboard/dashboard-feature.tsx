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
    "3Hz7foZsUJKQzRKtjuBuCyZzFFd9tHvBwiMDer8nzwL85DeY69CpasD7Xz2ihMRn7DVwhXKxkMATRQWEHa6WgAtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTP4QNi2g9ScQ3q1FcwmJbQHtu1d24iVie68RjyYTLSLCcwwfnYnK4LTdtW2T6aGWLvLkFMM5QMqSyB8aGrTgHS",
  "key1": "4HZBttCkENAvX6rnK9T9KwTKdpLyARUQLqp4efeGrK6Nk9J65n9xnzwUyBmVJ5bVS3W71NmvnHwehTthCZ57hZAN",
  "key2": "2XuxYNUBWRqyQW7UHPtjq3Zz2M9fYYc627XsD79n69iDw3oJrz6mFMhdL1Yrd8HRG2b92RfDf8dPbFmRXogQ3hgV",
  "key3": "NgR8yAdEp3fRCd3v9UNttKyPEe6dcRq5t3hSn7pjcHPVz19isSDmt6KB78JUbGWWtY9Jfy2ZLAfRapR8XovkHR1",
  "key4": "RW8ge8SBs9WHsHCqnP1dJGaGjsvpi4ByA9Qy8P1vis2shRVJA5ELKmGR8qxmfXG2Ewjf3QfoggzLEGSZgngzTRT",
  "key5": "3QxP9gzrzbjSYSv9WaMidDC9MRPjjzyp4gZEfm35ZSwGiksWAxBnu4eKBmGgyyRhFbBd7xmWUxAmpVuskyH4Siqc",
  "key6": "3LwfYsgqsiWXjyrdnXojVPVMv5Fgw9aZ8sLsyx34XTeoTb36eT42zyxVfeDYksyjomUDtC6wLuogimtUH1GDJ669",
  "key7": "3Lr3TSd94EmM7L89eMkdZorqeMRdiGG7T3KWcpvRrFsTNmGjQWfeQEsCv7eK8zAQRZfoT4w586WjZiP4E5aCFykP",
  "key8": "3uokttqkiqM6FAW6bpVWxDYvLPuCdx6Cho9Bs6dkMkgVFjSJLJoXN7kZiqH4Tv61rVRhV4vxMcBQua9Agfq5eB4f",
  "key9": "4miKVWBAfVp6zGeSdKwV3xVEhwZKw7Y6A9NhKhL5qWcZSsAvjdbXezWmLhTwakaj4uaDjkhmyenWK5A6e2T7e1Ui",
  "key10": "5nnjZWWiaxWdkzg3Esf8tRbMrcENbP6zK8S1EPmeZgw1s4iC7SvP4Fw7pejdQyFFowj6FnJj4rfuTtQc7Q5PN5sR",
  "key11": "5jMPCt4KoRoniRp8Km1RnNPLHnTFWRhaGcDT3qL38Qe8yGRqdqfdHUUssVHP43mnJrueJkTiiLmdEPxWyLDkXUTw",
  "key12": "4UTxTEhQu2DGx4bdv9cpwkwhp3ZfRgH5hhzLYTxjK658qo9e2fptUvr4fVCWh43RzimjeHi3pg9RWjt1XehtPRDB",
  "key13": "3njw5PrcbU8csMzGduJ7wxtYWoZHgkx2CqnJ6MrKq14NHK5346V3NAdcV63GxBhqcdtkWri17hpCcwDVA15DwE8U",
  "key14": "4a6z2Y8J79NWhWqwypW6EFVyXiUYCocLF3g4WbU1ngMhnH942wnYtHSZUmEbiDTJhwDzEiaR2ADKwjyNNcwcDJ8z",
  "key15": "3A4pGDjgHDeqbq4EjF4ypXw27yzfdzdefh8rWJthrkhCj9qf8deJm5Ut69C3tySFw5VYktCgPAh6tHZ99grAZGp1",
  "key16": "3BR7J1iEU7nHej7dythC6VXYEs5TK6AHbFiJJBoz9jTUjkpfkgii8GDLE967WiChQrGNdepLnnR9PiKTU2XDwEz5",
  "key17": "3hSWykJsFp78rPVB2FdS6YnkiRpF1iW398gHr37BAaSxbYLGU3K5sP4XorLBvhLNAZmk8waEe6CEGVx1z5SnrTer",
  "key18": "3Lq47PZWbBXoFQSZ9XGrACcz4Dg4nLsDRfR5zyUQNxEvcAtBL4wzo95311itmPD7qfftcmxcpeKYLkz6GyA1LNPx",
  "key19": "4S4Pa91cYjbWSG4XTYQKyGVeftR3YHgUovwb1Mx3BzUkEwzFYVxpb1GD2vwBS3a4VdsScuD8wNnNsv1SjDBasoge",
  "key20": "3SNTSf5uieY8irtax6YPKUVAx8QTN5XT5GLQRcWJ2eEtNWBzfA6PQpiYNrHSqA1RVgDR4aGrzuNsP6cBuxJosJax",
  "key21": "5C2ZtYoTnPqowXa6cdGQ3qybewYQajUpAdA2tSCG6vWazGhNMwYBMUTaNT6TjZtjeMsXW9W6D9faqL5eynQm5RDX",
  "key22": "ku1ixVsMCZvkVdhCTJPhjwtK926fuQpS9WjQCu5PcEMN993pYbcnrpsvzPVyBSN3bR1LXJH2d7dedCB8vssBxqN",
  "key23": "27ayho4nwC1S8b867JBvsT3M45W3fZqNncwwyC5mBpBuvPkrBv3zbh7s9PXNFJqphkPeEunyXtCfCXpiFb9zDhVM",
  "key24": "5hYfQRgyGWPMyfz9oDk1nxp6HoXvcGTWE22EpfQFEeFhFDu97yfxKpLMqJjBZNxRJoFdo939cGm7fATQUajV4Kkv",
  "key25": "2UtGW9cimo4DriFzULwhGEn7FSwS4YzeqaWLYyiA4dDpxjyLsDNGVu2AZ8qAp9ugULJjCDM63mHHLmJrCbhLPEkz",
  "key26": "2jTuMR1h1nPfTfahZsLWQWUT6K9nvpyV7Gr8D6aeFgARMCJsvRKMi3MvFDVAJmUcTW3RBENpXnqwyHrNGE2JFACh",
  "key27": "YJLBovbjg3dq26TUcTLXtaZoMnH3tdqGeL6BuFVAWHgTV4jvdf1t4eozXnkyisAk6p95jk7NN3TqaizZDmbUNaa",
  "key28": "24fedU5ii9mmUuLdxwJ8qSWxAxeSvPjAoQocQTkDe5adpsxnAgSagCUDPAQ8QMvNiMBBBu7Jbey5eSJtynVNCcZB",
  "key29": "d5C4Upa5yhaRzdMUx9RuvrTCGrKdvN5hHzrYmpQvD92x5ajryqiRy1JEGGjTHBhJEKdgret7XA6vuPhioTmEj8b",
  "key30": "4qifPquqhj3wtHEqaG32BgauNUkXAVhRVGamfodobsC49uZukdJ8ouekXE5GfX39oYnXbivFYccxBZqftGqLzsPC",
  "key31": "44XQmrpsuBYQ6Y7Ua9HnC9WVrHH3j3ZT8rvbCu2X25n7vYB6MV3eGgVCEwqK46hkPj5cbmJ4NqP2vjCNjWYr9yJg",
  "key32": "5HcSA1UV18RDLs4VGS7f118wsGFC3PME3NpfLFUwuuoGrHubjTpSJFTqZxnMTJeGwy9xGJv1iTdG8YJ1x8bdLoc4",
  "key33": "5SNDqjXTY1uJw2JF3CZbhnihGvxJWop1Jy47RYAuoFpLFeCMBUz8aPpuNyvtotzucMyeQVTa3K8oyxg3LDZZQZux",
  "key34": "3mfCwvULenvmRn5KKgsJZvAYtCym2Dv4rVjfo14fnRoMPqoqznVkQBq5iQ7caDj7MHEsrPdTCm4K7wEEg1tyf2NJ"
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
