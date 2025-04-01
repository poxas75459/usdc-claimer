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
    "wLVzEQ8ChjgEZwHgBmBtpPZsbLZzAaMMCvBjsq9whDL2RfBLEqbV5ZnDT4dChsgDECsGCNjG2DcyNAHn9XjdDYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTamrrCkj58YPHcAU4CX1gNxdJs1esCuEUhvB1HgHjDnyUnQcLtaTxtEZ8vWB6qCrg7LqFUCczAMMeBZDh8SGCD",
  "key1": "4GNFPzdRU76zHr3CwX9PVji5oG7VcB6sPdviQMKDwfFHHTVSgVcNLKMuTApFYsUt2ab2tjCt26WB8WHj9vJMb47j",
  "key2": "3ddpEHs6hZUpnXGbndy2oZXuRYHNsYhHo7uRmu5cTgYHZBC9enszuYpCSPq3ZN6MELWco7VY9MKTYamDKAwAAC52",
  "key3": "5j6UfCi35KKwuBHrv447bH1K9Nxe8kXfmbnH9RpZCAVp7gjro9W86hB2VEsvMK98tJM5geK5x82NESx2cuCK6Y2v",
  "key4": "cyfhxeMf4J8gjjGD6b1WQm5ZnUyF3X2uH2g4SZTJJbmYMkjMThYA8vf8tn4ZpVX7C1RBpYZw387PagtwkE8CkVK",
  "key5": "4RyD6nQEn5whtatrpvYbBKzE7pbesoKqYeMV3FmtWArgUnGQmzmpNZ7BpxKKUi4dtouC1Qq6aomtVamNicHvni5P",
  "key6": "5JTKWTKdNXxAN9ubhSiqUpHJFakBJu49matfZE3HwawBGrQyTtRKmzJVXA8cyC18zXMGmNFmFtpLv8p2qzLq1Txs",
  "key7": "66NSDhud7CzP7dxjPMJfYJnmfNQPsnGGPRjf6mBnsaLzeJJERGgbxvXLrE8yn5G9k8CSbqA4TCUjWfxfW2qsFAiz",
  "key8": "2vgqZZ7JUVMABeJx9fFJ4HEx9FRZZn67Ak2n19rePENubwBFLMjiYzXEQbjYZTqXSmoMskBQRpcJ5ytwtRZ31s5W",
  "key9": "3T6RF8Q7cy8YC3PsNfUgmitrMHggsyAPfcbSB2yCZz7arcrifyQz6oZmsJ1nz3u8sm1AxZFKW3XDj3NGrCPcBzKU",
  "key10": "5v43YEtvpU2R7azgjxwBi1fahSYJDC65VJVaKp44nDAHpXcga38EhPrm1sbqR2B8fnuuP3zRGGi6AxJAWssJsBF",
  "key11": "2LTmUcpoWtTfwmdVeC5p2uR5DUeeXcPnJsUDevoTMbDEAPJpBsDvDMfuXEnPqznhRvTqaeMDk3YiAf4JZSGubAH5",
  "key12": "2o7pmYuw3HXJCgrd6Zn7AbjFim3Hb6xRavaW8NYhYwyFtMX7WLRVBVvMdgAQco4dcAoYWDFiecJ4PaSebxuoUSHi",
  "key13": "55WbgtdaeEjejnvcZPMwfrvk8e9ekqXGumM5YBY9Pir8qg3D2GE7gkhMnd9Xa3azorKRUZBUAjXRNBuQzRsUAoba",
  "key14": "22TtnykRssq9xWNUHnLk5CMkjJBbT8rMxSG9dAEYZkuK4waWDASpkTZ19z2rzo7EmNiPKJwX3rvuc36rRddRjPZd",
  "key15": "4FWoNPtf6Gpoj2FUY1Sd1TFmp4L5kENedcMd9MhuxJZwXeDaABoAQ8iK4ovUjVdwEKvV3wQsuJX2EU2PXnQ3tv9K",
  "key16": "38ufaesLZMbg45NawFojjidPMNGhjiWVFNd1wf6NMoYbUwS7WhbsgaFjYMCZ78VLS67grJ7wiVFyY1cy6VsshCLw",
  "key17": "5CXiHdhd5mHRLzxuNCPAw2NCU24ACRmxuXEUi2mzVFoALoRSKhsA6cr4YLcku6RWBFnRSpHis4Key5padH9y1jJN",
  "key18": "5H3StfqVn1LzkdgBrRBJuxLZbeFDvT2mNPntNbyqiEK179aQPfniuMi2b4d8ngeFQxrCBn1xRyFtGPgqGV6bKEBM",
  "key19": "2q9RgDEVkwzzz4uUiNHYSU3MVmTMGPqXyiMFzNKEb7d8ZQwLBSLgcFeuYf11r5oszNSTR3PoPMPHoSjmoB9VEkw4",
  "key20": "3whnZQpB9kNpMriMZJhJ8zs4tHEEtb9C7dpjT2aHKFH2P5M3FRSb4pNKCGy2sKS19h1PxJ3yS61jy8Jq6KFWDLk5",
  "key21": "5LtHNG8DoCXy9aLnypzdUFxFV4BuNkw5ihT18xNYvH7gpztWBeM1Tkpohv6tk7vjrgbMr7f7yGLGVqw1HN9FjX9A",
  "key22": "fepNAo6QoSgNsnVoHbizXRCRGkG75gSZH3yDRRgVNCqPdZVUdNv8xuzQQuy4CXvYAn826Ymv2mVqD1PZZpBAUK9",
  "key23": "2z5yZGzUry1ZQncVCREdWAaWBWHYLiNm6FgSmjnJiyDozJyBNA6p2fVErVizKZEcCSuGGShxtAtxi1Zhj8BocmxJ",
  "key24": "5LEKPG2m6rcoz2M395Lf86PeV1w7ESbtU7acUv3ssaQQP8uMsULkpDa6KpDTpfYKeFGReBxggF7USYW7Y87Ycb6P",
  "key25": "3NjoBq9JYqYMFFzrpTCVrKLUnFvbiWLFpH42ZuunVU8HvUar7rxRdPaLjfNR1gxmcZ8EeAc2C89KDVv73wfcBVGs",
  "key26": "2Q7xcMHuFQfubaCPoAS3BcX35AE8zjoxUieAAnfsdojGrEHU1gXHQ5zbMmQHFnmgGEhdhos1qk12mZShYeRRsE8w",
  "key27": "5vQx3hmmL9aSTFwi33TovzJRt6DUaZeGPaqU29uAAo4ZauQQeoBXwaJ7KS7mhTymnW4Lxr8YDyFMvmkahKyYZ2Ln",
  "key28": "3U2U6KUghCw9LSbTbyY4aYVif5hYjH8MANXKyrzk91CM84xfwVsoT4cXhkkkXqLX1cwJYKXDeeb3zKwpdcbno3zX",
  "key29": "39ptdPzqtCnb7CifXGXKknHQ62t2bCzTZe3Nt2D8cMgPqUGDUnGLtVrvkXywjmXtLGfBwsVe7UUxRdK8ySzCYfD3",
  "key30": "3zoLjz4Uyu2xgTRBJYNv2g7xY7WMQ4xwvT7L6zC9LxGvo57BnHMRxq2iZw2NbTi8qV54iXEdFL9wYpQmyFe6PeYQ",
  "key31": "5e7pg2MthBUfVtwYTcAg17TkgvCRAB5rnCCFvHeUgXtrQX16FdvNLff4VgVzyJDvMy6xCCprfq5DiSZ5UFyfNob9",
  "key32": "56ZXQHDBaZnpvdiRLDNFx4eE2LL8CHuFRVHo6L4Ss7i3fpm4oMy8q7dUAEfsCDaJYYhKUDn8vi8rKccmnMAcya36",
  "key33": "4YXmW6tywpcQwiJT3AZopGZedSZwnSx4BWauhJ1e7EkfF5gmxLy5tZkK2x1zARuWRom6ovNg4iWWbTFZBr24pU62",
  "key34": "39qcEJyFJGsHmZx4rSZNPEzavRZ1su1Z98K5AC46R2iwqYYwwyHvzM5dZevq4o5F4JUoPv7VX93q9oaHrh3vGHDT",
  "key35": "5hZoTMqDFDAi66763ZvvFV4DQPK9jEANgtiiaFq9b1QSQqRHVNhG6gsnSMQfnZi39gBSJURfqF26QcPeZCebGW68",
  "key36": "2ZEfPuLu6PNCJX8KjhvRM4UEwedsTJpKbnU9eaCx7BPBQLJkTwGxEc1THz5Yj6LwHY5wMy78Cj6Afpa9DRrUTrsU",
  "key37": "251cuPfiwkXnyP7f6sS2oVNPmUMGQRH3bncJwS9Zj8XbDE4ou69HQv1PsQ845GsoVTqrt9gnNtZ8aTDdmZaU4VP3",
  "key38": "5qRfy1qXCD7TQxYwQ1JqPULkw53wbaKkiSwnpuoUmYZpdLddH6Ccbrhu22kFFDzDzxG5EAQmdccCBLKpHuuBiSFu",
  "key39": "5Npr1S1H9ss26yuzXaodPs84WgQNeMZND7r9YMfCdsLtqE9CwnZ5BMoL3BPZn82vK9VL38rKkm598QxAth1ajF9C",
  "key40": "5whboLQtozFkqfcTHr4sXTPH4xvyTUXHr44b4D2RGQj263FqCatSkd9diJNb2bv4HQ6N1wGCXqBDg18ewKJuBTBL",
  "key41": "H4ri1Cpp7routBLfeGC3wpYukm85vJ6a4MgR3GDVEzt6TP1i3XyFSL6Rqr1wRwBgVYnTzkNCCXPPy3rTywYLFQy",
  "key42": "2qTVQhKaHafp6mNUzKZrnYgCosMreS4Zbs6qZYNErzJHeHktEA8ptdTdvpuRvpDnDdZqKTt7DHzP2YAmHyzYUWUQ",
  "key43": "eeV9iJZomZkHej9QuDFoioLyKvrgxK8ZEd59ZBeJpRqngZNNi3Jtq2ZyU2ZLamvNsB7jsHt4NBrJiybeX6gzM63",
  "key44": "414f5eor2dMA1Q5MQmnJxZcDBJY966Nt2ZYrdEosfH2vuwG7r2c7MNjKm7yQAsd9epxaZougj2d6EfzVAYhfZWeh",
  "key45": "3WUtcjSgKCYAFMzUiHKt1ScRjwHFHXNNkfNLHSPDpGJYTCR16dJwVSxfbzumQoR2PWBvNQKzf89SBBVFCz45LUER"
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
