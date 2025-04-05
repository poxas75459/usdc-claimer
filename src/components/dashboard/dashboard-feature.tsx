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
    "411Nh8bUupL5DHfbUwhdSixbqzxpqpD4WvSUitK3sHEU5LK1UrnwGpdGqLH2bEU352FRXwtGBhjoDWqekT2e4o5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dguMUPbwuLia47JMLfS65RMpXNnRiMS81U96t3YB2fWqrWZdfJBsXRYAr14iYGw1ueZudqvN651mBcBtrvq3NVw",
  "key1": "46xEqEK4KH2QJgBexKASsSfykEkC4ivcAKanSoEinLQwHFWmjvmHKRBEQgmbLV61GVoGMktVdjAZT4KcjBujct2k",
  "key2": "4nnmqf2a4oNHrqrGCSePn2GeeDEW9EH8aHfhUKop5dgRxwqZQBhni1p6aRC4oawMQLBp9gmGJxj87rLGUoX3qLY7",
  "key3": "62Lk7fQ331N4zkzSWxZYCarbYgUf1MqRmRbfVoLPu5PBojAZSwrzMNwGN8sYek7pfuRQpmQxpYuu9X2EaTn132Uz",
  "key4": "2BaCYLKDbfBwj1VUetS2TFEYijf4Uie9JvhBVgdcuJvm1nNkgSut1yxdruVcdeL18N7HyNuTzaWMf2GRQJxciR1h",
  "key5": "5xgCkewWon2GqotpUH9qmKG4koxSJLsNFnHeGBpbNWHcxtXnZ1Q5ohdywfKP3iHZEqeLJ4XHniCjVm1rXqKPAuZ3",
  "key6": "4BabVgSsfN4BP37ijkm5nGFX1aDpHxnUac16xzJ2J4nxpnPUpaU721TsiTQoidkrBtoNB1mESkS3qvHZSHWpWVAu",
  "key7": "3AabxeAZUgR8VF6DseknuFL5B2AJ6QPw5MvzY8j23XahBhWJXeaGdVuL6G4tWqisW55gyMCXtM5nGghFFokC7gXR",
  "key8": "DCGbVmEqZ3TQov8raF9CZHzxbfVdYxyouYXQeJpJuTN51JtnS9q3FH1kJDL3ZW6cQRv4RcPuM9rS9KVEZZViYDc",
  "key9": "gryR5inVLZhvyqwtz5cXmMEueQAPJmLuADv5oaAjVW4L9yvm3fMy7zLcoXBWaHQSUDwVCx3fKgvczsdbSkdzWsD",
  "key10": "2DPMVUtYJ4D1zdra5NFZt9bRt96CjJAQEsUyQ9aWiq1HmwHcJ4UsYBftRT6erozKsZc6hwy6meQFAtE4pWLHR7mK",
  "key11": "4vRV9rkLmDLwJwwzJfrF9pubU8XRjuqYycdDk3T4pADnPyoonqiMjRHNfVMWPT1K3L1Qsi9vdB6simgg5rSzKRyL",
  "key12": "23qegm84vru2u4wuwWbw8y99BwU1z3vxzqoBmWnSur9rhqcxVReDxZRsCh81e3aFMLG4bBUqVwa7k2bWng2M2Gwz",
  "key13": "3fU9MKPTXKF9CL5UXxpdup8wDsKeZRh5KUwRH1bnjaGkqXYQxWainfDs5A1QdBjj3mEnwqc6SSzXbRiSD5CubMNc",
  "key14": "3Wz64SV5VEJjn5khU3jeteBX4KMDm7P8GBfmmLxGFZtNHzsQjFBZ4SPo6jbPjVTBB9osy73SnmfqU2Fewbs2TNxz",
  "key15": "2yukLubdEn2DjugTCdM9gkgaGWYphX3KpTx511tv8RogUwiJ9EnvZ32L13rUz3jJYRwvxkCXCrehor916zNEmkKJ",
  "key16": "666ufLG4zyfuna9Q3Nfsed1cFmVCzPmqhLBN5ucXWDQXjpZdikdQwdBf4Fu8AqXUnVg72AHTFuKoH67w8ZqU8Pbg",
  "key17": "37EiYKitoLdqxYZnkyzbMJqy6EGsixctfLbGsDyGf15mTUNcJGvLJS29vDC2gVeEetM7VvkMaEiUzPSrsCrcCMJd",
  "key18": "2p9L32VEfJRxbXWP95SxKMk6wpPtzJuTWcTjHbXdKkU4dLJR3hLuQXcsA3exhCH9a5ASKCnD1cp5QtLW4NVcyLx7",
  "key19": "9xKBiupocagkJNaNK6mJDqnAmy1Dy2qTiN3p4H3HPufYJPKUgLuYhzg2zd61TsnaqWKGk1zEE4urUjq3VzvF7Yg",
  "key20": "64EeEjzJwJUKLtNnkbqbg3hRwM4N4dHSTT6C3BxZU8i9gcSA13u89KiPuFE7xqxmnWNNf1JPDZ8aG1EbQLU87m3N",
  "key21": "5PvCFMMiGsVtoqSJfGDdEkgdSq3Y1pzBivAzgx3z5ifK9Lie9BKD4Yk6siXD4zyAiBQxzphMyDLmnhodv62q7ZCP",
  "key22": "4YoHCbourkTqHsFNKbzYx8W2EgSes2mY2peWxcHRXPj27GVDT4mi6BvwP8CnJkWQfCrDT1ceju55zKBmZVXLwy1W",
  "key23": "3Lk85if212NBaW66D6orKmqqwoYLuWmT72aG3SdAqMxCzsRhF1ws6NWpV3RxZnWziANuHrxCgqWq61GKSmrCyuBw",
  "key24": "5q4Wv8y5h9M9KjTX6GML8xyHeNkShZEb34h5HwAd98CZpzpGCvB9axJ4DUxnxuVTAEdAmMkBM4X4CXw2GCwihBR6",
  "key25": "3nbJmomHftyBM3paxtMhMeoC9NMeDoUxkY6DwpiC3pEvQ3QeM5Gs8tKDBjmJeNtRybPuQ8p14BNYk86CUoFUTw1N",
  "key26": "4fbrBkZMgAFoFvigigMMkAmigZkF5MsaVDkcZcN4LsAoXAHve77DKPrRvj5VJDgb27d2WbrDVxpxxz3SJWo3xEgw",
  "key27": "VSuMPBFmjN7tbaRX9srA8PNjj15u16fzsXa6MQGvyvXWkceR7M3ec5EZ2i4sxZygn7eRm1Wbyab6hFmQ5Ao3sdi",
  "key28": "2tEtNioB8KJpkr18PHAALAVizw2CRs5hegbrx5g6NDAfv4tXz9Rp7MB8NXJDEoaw22NzVcrCVZAiPmGQcWCi7vA5",
  "key29": "45xzG4F8cEeey61s6opzxjTWyGHCXnH7e5kYZg2e7gW2ZX9LYyww3AbHNxiWme4G6iiXQJF4EKXhUc83MwpjazST",
  "key30": "5TzRsJegSqFSHrBVtGfHXKKoEgDLD8jgqf7dq6r2HHLZuf5DLNxJyesvap6PFLngsjxk6AmNp8mtCpMHGqGTuJxe",
  "key31": "2jFHpJWFyy6hW27PF3HEHAbdzULsetYZUqa4EHXbqDeYbM97xU31Cy8PNNNrFBNBgKgjw5matSxF7ZJxVXAcdzGR",
  "key32": "dXKfCRav1UXHM6tEa6RL1CnBdtmXu1E3dsoKEjtNG6vcpfQAzwsQFoQSwH8X6XNrgJ1A13etSRfyUpH8WRbViTV",
  "key33": "2kB9SSKJEGkydVMmgVNXcxCivKW5yf6WAuysMjms9TureKmXZxA879ZP8mkE4pRFCD7RHXYTpG4WuSCEq4DdnJYB",
  "key34": "2ErPYv8KunZXbm1wXZtGVNQuLRHE8fWy9Guz6ZK1S7qDHaNLbycFbmPb2AinQVKpDPFbH4DCgy4Supn7Weuh9jdn",
  "key35": "64Tga8gqCFMDA4SFyCPzy3xnAVYChk2h7pU9kYH3WifenNM7RJzGcXJQRxtfZA3UBKKnAF3RGZ72fj3kJuwqMQL1",
  "key36": "5LDzZYm4UAkrNX2mk6s5WChspbF2yJHHXU2AJuoLH5d3Y7VJR5FyL48db1rTVkYMZfHCpRFGmcmjrSx1tYhmUBn6",
  "key37": "53MbVJuHVi9grV3BCnyTe2GkohWcRJo1Tec6FUhmxgJ1Kxjqk3Fii8GMAyRmjX4wmCVABs3nasXYdLvETtB5JSQY",
  "key38": "3LyekXTCNVCkBSsRJ1tT9qd4cg7iPGSJvj8x8jYL1VDdf3uRtWdZLtVo5LsupRhzV1R6DZEVgBruUdt5hKev3DWy"
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
