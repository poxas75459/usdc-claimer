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
    "2RHuBDgoS41EKAnqj5QbEePDP1wbyDS6UPUjJ2YWHnHNAKRxXFMfWaztVHAA3whGeqFR5Y5MEJWDZGFFyZJ3zBVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zxz9BWqGtCgHQwwhhGtdLkdnoQjyoEcRiNmKDt8bQFhktm4aaGK7ZCvVut5CSGWaZPNbyZ8LPzT7sVu28U5Foz",
  "key1": "52BUeQF8bvsP1nY2VJadcXMPA7BBGyGb9WLfkXFJN3aAroCdnpKHSSXTqBEdZPtdz3pddjuDaM4KwHaczh24SyRH",
  "key2": "2LZ3XVdatYZcmPsMhEK8zgJRLfCwdLQng8iMBhHiBnEgekrtJt78aYXir8hjqeCichKSEv2jkaWP7i2EWKHweBg3",
  "key3": "V1UFxTntN6K8UBCtMaSF6kJUF5wjfvGLRyumFR4FTu41NFY579P8UKqaBxqCJgMawSZQkNZ9WXtejoEZQB3E7qe",
  "key4": "fh5TcMuHB5EcYo2KuCJynjxyc7casC1zvEPUZVCWX8k2jgwxBfBw747RtJJhGFtQ8RRiTkypzek5Wa6LvyMid7N",
  "key5": "2BKQ6qESjpSzk83ArhKU864aCpyfyG6XCYxbFwqtYU1Y8SNzFgbWRT5cLmqArAz34yoWpwyLPJ4HVBR5njHvYyUA",
  "key6": "4RQub7tHR59AUeWiiBSkbNhraFvih6HUumnGxmf8KUJG9NgHJixTGxUFCD13dL9SnaKuFCHMGo5ntuibfFaKjxWV",
  "key7": "2W6euWpyrKFvhGFugj1iNY3QHgQ9dpNVpgmqAxG2E67CtwiLeEq494DLzWuQ7jUmVVnyibpjYW79WbQbTyHHdxLj",
  "key8": "nqGfFbf4V71xB4JXB3dLvMN651PCcCGE4VrUDmNnhnZhTYCcTPiNi9Jj42EiMjhcQvX9TSvjKc3bD9Q4aHSJAF7",
  "key9": "3muBbJzDs9wgkFNCXbV5Lwg7DovQH1tr7DuS1tYKZPL1bYrQ12DZKxd3rpuQUPmLWVRF3zUJorC4YRZkVG35h1s2",
  "key10": "5LeWuuJKk72yDWSxr32q4Wj714aKQrQreHqbNHuBRgbTKTqaxUTpSccHyBiPxfcr1LrCYdmSFUP3msc7fDtAXxTT",
  "key11": "5micgRtkobRaU9r4LBEfHUtgUHvWUAhyaavScuho1VPaDJiuv1qLDgPugmAhyDhxw43cHiRZfLbZFTbwN25WL9ja",
  "key12": "37nUbpDLhDmnGakQTzC1HTLA5hcADBvtCWXCddjdHUdXp1B9qwhADDTzgLjvajmDD9XwYwJ8Qeyey2M8r7dFSMTo",
  "key13": "2dBxAEwU3N8ZbqXMUFWhFaoC7UU6joBwhHyutLwerPmWHwmvztow7QqWNTWWhM1f4a5FUCydWASAzB5KKm9hAKbP",
  "key14": "4kAWxNgCGXzsxT1ur2Jjetj2kWLh7xfApD669hdJYzqoKjGmfCn4oTNSmFRi57GPiHHTCRFVW3778NBJhBvsDznT",
  "key15": "2AM2PtDuxZBemnSYyjL1u3EmTgf1u4pNyXQ51Eq2fx1SWA7Pg9nb5Do5dPjG8mAHeaSKUF5G54TUxgCsETHxETu5",
  "key16": "XJ244Ax9FMNgnA38RCqfKchFwtx9BoRhKUQ1Kj69XnFoU4nPvhoibHkpxUG9cqK11trpWffEnVJrCFh9PhBHfZ2",
  "key17": "5415jdjNw1ZAPJbK6YQsyHtPF5E5x3uhteDUSM2wLyALKHwGcKqM9CRm3tnX38AemwsTtG8afRduK53wTr4SCauz",
  "key18": "vPsJ84wRSWzphR4ABqBzBQt16KtZJmFoxtEmidtJcSJanNfzf4bxU6bZx6eUrb6Uf8H9H8tRULrXmmXQNbqsmjN",
  "key19": "4FF4W5mQdHNbDmro4XBFTsJ2Eb71PbCUmAznoPTtDhRZ32oMQbSZG6CBRw2p5nKeMfGBj5dcQvoUsGDJJsUuzMhc",
  "key20": "pRfEc4y8Wqdp3B5J9MRqPuooK2vra5zfj9DR7uCwF43RUgfti3m7AqXNQd8qKP2ZPm497bSpLAMeZnv5YMTrom8",
  "key21": "E9yaEDEyp6vKAPmRoyQpG5NpWUKbsrsLLXrTR77rdqPC7RkNYE6jkMrYXuvgVuZqAXq8uaevuaQ88T2K9uhar53",
  "key22": "2vbEq9k1MtPBNAe6Ufaxjvd69zL2KLVZAPXUoSzHBGM2EaprrRCg5DRYuocEcKrSZ9SuPLyRKiGW1n6DiNqEniQe",
  "key23": "2nR5cAAFyLrSyDNgn4CiNH425fiVpR1QWRPbhWo5S2n72kc5J8g1CXCX2PPCJuhPDyeMwcX8cQz4eMGcQmQ7otDw",
  "key24": "2XhGLN6q9fW438usbJwrXTm4EQ4XVEcnywh4Nk7EbfrdEg5SNJJc9xrpAGRftsviYTPp3Sc4L86djqi8cxAxrQix",
  "key25": "23YeJfuhhvc4AHVxnXpsr5KuRz2dGAfBuuDnBGtsNXVrsgUwPZgKibgWnt7Wihja2hRDiXgCKUKkLBhbkFmodhby",
  "key26": "925WsbwX9aCkpSY78sAKd29CwaYuQMvY7nccmYUz4NgGamVBKFXJ9ewY39c16bHWoSfnEcP1hSasiyduw5Tymyb"
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
