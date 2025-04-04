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
    "32zm3iUJgVPrUn5dZ5dURtgYiZgUH7ob1T1hYTZNvVF8xmSDQ6Wekf6NX8PZA1jeHVZ7NRj6jtEaNNV6yMSzrCjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVDHBxjvtcQNdCkGn2RdHYWNHXKsbNYURNoDQXEE4ZvbCXhM4BugLvnbFKCREqGqCSWHZaKZiGWtfPqR4ScHq4F",
  "key1": "kdqWsHh8D7AQ7drP2zy9XLLim8ZbXK1FC9YjXboNbDp1PKxJZQ5QmmtBn68ax4GqCMRZLmzSHxCimsS9C3aRf1z",
  "key2": "3MKGrxuHTE6aQehEbXrXMHTcGiwvZE6jgndn437SwQqjCcQC71kL1gi7DyEg3ew87GJPnxhFEuwc647q95nYsqho",
  "key3": "5EQsUEGQLwCPxx4tZoXiFXXEUcqUNtd4aZVRXN7mauaN9ACugu5zDfQyj3kLZkY1cjDcufktvMDhKhJr9dR6X4B8",
  "key4": "55wVYt5iZuWpHGe9ejkNbYfoQV3Kog5a535gZ6tS4CKogDNHZxCbWCVRu6m4Kkq9dKWctGvgRYj1f1WHm26eAbHt",
  "key5": "2nVHWsdi3nm3RncoiLoCPDP6c1Gp9HvBG7wWXkbZ8baVhN4PDfYYaVabBiyvtitRRP73W5GL4WGxxRnWYSWz5KdM",
  "key6": "4u3yd39NgAWrbQSYQe4w9fD2uqdF5to3zevEuGt8moZo3HoRyWCPFsnrXk5jJLtaT48WThJHNfyfZyudgKwLuMfn",
  "key7": "k9uzfbk7i1Cg9WCnEbKhUVNYY9tkyUWG7R7BrWCwzquXM5F7aPJDgn1U4hh2iQNAb6BJjEmYHdyYFGp3u4dmXDY",
  "key8": "5RXcA9V15xFnYZc5HnDWX8pw1zCTKAzBTYDkS4fbmRpb73vixdb4ahTioMoEYH4Zn219wPTjVM9dEyEcESezxgGj",
  "key9": "FxxgKoVYtPfKv3qvmRqCcfScD4cbYpopUbstGHTgGzSEhd22koFfcTkNuTaLkXLNHJRnJQ49w9kfq4VbkYh2xyU",
  "key10": "mKgQ8khNqhK7fSQK79UW4h7jPGYJg1vKfmT1GyU6Q2E6vgHd7A4vec3UDucuPTpSQNKF7NbWKzhMTfnFvAeCpQB",
  "key11": "3ik5zFq4HygFYeVCKBiJXLfxS1Ah8mmZc871xxFFytczfWUyApudVw9Kp4p7uP7xdyXoi4RkTzCKdXoeGtchdrUa",
  "key12": "4CY3W7wjmLBVVaq1dbMN7msuM225TpfxbWU56L5S6N72GpUC3dmnWSVWrqjmdegFBgxoFCy8Mn8g6krRp2ZxMcwj",
  "key13": "4F4TWHrASUGjr18gVAZehJxjkZJmRFqr3mgSK4ari9tzYSTyVDi5DTLtzZRqWaqhhrkCpyQcB2At8vLxZUoRsuk9",
  "key14": "51N2fjMfmDna2bquuUnMW19Wtne94KW8mHwoL6z9uFcbuTnvKsimyYNdodeGcaSXSdtrurBEPDize8udoGQHDRy8",
  "key15": "3FKLpZvDhhpvbR46Aiek4oeR4nVEBVbPe46PXisiZB7kbmo18eWV4sDiDCzMsGULjTAugVbdd5WfUtU7BKEBzPRN",
  "key16": "Vwp7zRN3uMgWPb6jnsBRtyNPGj3HUtxSHLyp2xQ8co1zyNAwuGm2aiAHLe95khkMoJYCiq2dsjVJBv34pVXDKx6",
  "key17": "PE3miB44VP1BfFdDpbwLXHnB4aUYtirsFTQUdYxMQN5TqF8M1sMhwwpe7GyUt13ofhvJJHxZexKz3pGUZrpNqfJ",
  "key18": "2C96j7P49njs4W73jpNg2h3yNncR2n3XVnFUtfJatiKAqQKKmfC46nUAJyS1VXXe95T2PbKY9vePiLoE9HfSnkdL",
  "key19": "4pJWYa7b82puF2THj2SJhnU32wY3nQUs763oZKuqYH9bv8yx3VLGZXHCBuRgpD3qSn7nrfGpjvmErcyu36rZxvrb",
  "key20": "5uvRUjeLDRvNwA8sYHchJFfKdficyi6t2XF2doUgra2PCvu4CTb4SmY6MceLmVNU3YWwFpppxLijApTFyLoAfDsV",
  "key21": "NrWM6Cr3RLNSPFpr6zHh35Zygou7uRH13XabZZsTTi8exDAWAoR5cFFPEkueN59rSfU8oXh9xPaFs2WbEJgehPF",
  "key22": "3d4AeLSrq2oB8kpNWCBqEwr2ZKhaEsYd6gd6XZkg7rmKyP2sn7fZ7MBoEmgR2GPPd85dAqBqtv4B7aFXVYMtwLM2",
  "key23": "3cLWj8ubQkqcqScZzCvS5V6gM7QuUHAFicXqmBeXRipgteMCSS9xM7m77tEXVQ7J3jsawBUdnApvWnRBy8B6v5GJ",
  "key24": "C2ZYv2arfM7M82yxFV8WCqEvZGd1QBGatmKFUPW4aeHrXwipxA4Jkn3MYmJXXjHokurktvNRTfEpxWAuvW63egi",
  "key25": "KBhMPQZJhC76FK14Q89Dkm3KWghvJRN99PQsUZYdYbmrbf8aBbmhZBkPp4KW4EiNpuKCWBcbCACTuY9jQ9FF76c",
  "key26": "4hmtd35TNVh7y879KbCxhhxeD6PM43rz8CJ9cyUTvKnPFK1auY5uVdjnzDVH1bPqQJtPbm3BewR5AkhZnMhY4G36",
  "key27": "Vvc1UKtwyayCPRGyrr8U5EJJ1Xs7hYA6h6hFSbexR8WsQ8ZnL9GNr97msfaHPWysYKp3jHZLETh5yT9cMVNqEjw",
  "key28": "tsmxo2EPKReQpiHnLy62DEdYJotaVCJy7Yrnv55cDTrENsNzDEEDynYzPgRdPQtxcRy1vKcjJVw8YQSdqjZHjx5",
  "key29": "4FtWo5RrGzf6GmQENABGZYHWKNoyrAE7fNExK68zivUGs1rArNEtvBgQjfg94XRJkWSoms1wQbEQfGwD51pXjcQs",
  "key30": "3YdFBui167sahs8UukNV7g7sD3xGqkhbF6AZtueFBkJVoETEp44pH666q25kQFhJuqq7RWrJVsoQb7sF8oPqJpVE",
  "key31": "37ytpqnt4jKoZi1J3VNm9UA4i5dUwCUi53Mavds3rsELF8tAKzt3Ch2oPjyrV1iLhgvyoDUdXsoGAMKd3j6GqSHM",
  "key32": "3tHxvt3P1pS89dn3yKMyH6HrTjEyCx2b5r45B79axCkYn3bF2TbrmKQrFJHm5fXUyQZ2QQn4ccRUYKtXEo7rdvxm",
  "key33": "bzcv9H7S7D1E7HNL4ZbPHCyKVsP4pDA9UeAXTKj1uRftWQGKaomBv6cPVqWbeGfedubwDqvoxwnMd9NyLNroFjH"
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
