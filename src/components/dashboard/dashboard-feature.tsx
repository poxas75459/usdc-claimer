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
    "3EN8W5cDHUCwymvEP2f3DYXSMqgHdLNaDBKFQWACePTk8sMLnNBcm2EWkGKoaxNUZjLv41zgr47QRw95adZyC3Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gz8qRk6C7TEbUHLbdyYdwu1sEuNZmQ3prQoeXtQAP2yhZTiyrpB7ZjY57zy2crLhEdjS5JFCUmnVC7Jbo9FP8N9",
  "key1": "4RmPAAV1Zf7PxbH3o2sgaDUEkhyAfQT8sJCd5TJZMpF7X6WfbMoazD32F1cBQj6PT2eWEZDrojaWZ1q7hh9uEUCh",
  "key2": "2G8v4CkAfnZT7igiHv95ZTuG9p2ugthEneZiQeBmrwQLpzB7keuAgVE8zLAhv4Afdd7NWxHFPVVDwHa4Ce9AxXjb",
  "key3": "KqpJwPSiFHCLxFyrCRFvPJz35GbtsCbCe4qj6Pn9U6udUdePR9XStxx51awaDz37onr1ays5cVGtgrKVQ82AD3U",
  "key4": "3LhUKm7R7QrPhMLqawTkBes3Lkdq7Q7FVY1VLxPNLNRZrnJBANM4dBZkHFab9Xpiw7U1yNNz1MRZHBsMB2bPYZNf",
  "key5": "4t86FDVAcfEpCekjaqXTsJkh1sybUejdeMJ8GkbqH1TUnnSvSSco7euieAqAEYVijfvZqoeKu29XjktBzmgEh8bL",
  "key6": "vnVcnKbYkVwqpJpsNQ5HU2HGxPC8crKcrnP9b6c2FYkxm1BpMeDkwS2L7sxQ7EATFHS4PEvbPiRG3Z2P5moYqoi",
  "key7": "3TFK2FsFNgkBrQgSwh3PCDZ2L6QzFi9Dp16t9Ko5opiE4ia4FtJYyJoMTxUKAdJRPu8exGmjuTWD3QjmVoZkq3cz",
  "key8": "5dEsVYJ4Ei4tmWMoBkipa9eaUc2cn57hcj7x4LH6H6PGvjcLuA5QYtykH5sMWL4QpbBbSDp9fxo5hxQyhWHyF66T",
  "key9": "2iiBfD7SdJpEJyYqvsGjZYjjnb7iFspMk6XgGLMgHL37pXoxJvmL7D1CYo8HhL93y3UTd14Px7QcFkvisRnre1L",
  "key10": "4ebaM8dpHUe9z1SwLYMVPgtFNy3PeSDRqcwHen9cPiwgdvtJDY75xZQLSJCACNunxenkxBWnqBcrYuLncMzyAPMi",
  "key11": "2Jgzzf8krM57LQLFazDJBvuEm8Np3uWqk9s8NmJ1Fi4X6PU17M6xX3jTKmLPVcv4SmsPPRcEVhCwgi8jFSfB3GLi",
  "key12": "4FRoRMhKYmsMoMYcaEFr3pEXvBptY7RzgxXs3BQL3Tk4vnnLc24eizno5rHvDPiXBGjNZJ8d9FnViwtQ822MVo72",
  "key13": "5u4CzstLV8mEKAi5BQNvc6MTe1xCZnVxm2ipDpVHE3a5wDCvSzm9waSiUmNvh5mdky3NmW6pxh1jKdmKUdMN87Vs",
  "key14": "4e2CNx2pqo67w1NPsz9YiuvsnFdG1WyA7WiXenZmL1cAx3ycMA67UGVBVRoAeFzzLUzzMi4ScRqyLgiCjeYKEifz",
  "key15": "LxsJmBaADhhAhyrCBULgUC1SabyzmaZmkFuxnVdds5QAdSPy2MTmnnxnEyM5MPfAF1XScsgAUF4bPpUaQx3cYM8",
  "key16": "2ht8WuBiVVCe8bDSKNaXiVrg3pTciaK319qAiKW4U1cYB34ZxTgWMjtgpPsFkQ18znRZa2Emxe8v7Fvuv9nPpFGG",
  "key17": "3ZkJfsbfepwFEM4XsdjWD4MtiPXT4bMp8h68vkdkCNkECqTc74fSzYtCcUwLSrhXtQbqmatbLCjbEWhJvLn2NnRj",
  "key18": "4qgFeJaCMX8AKt2Sjzsq3HJQkHfpJtrhiQZSNjXtQEpzxJCexUvYZeXy9ywfoDRPVPcdR37PzzsjVET9V23afi5F",
  "key19": "C147NbY9d6Zkc87Spobh4iiqTc3f6ApK9wSsQDQ8JigbcwhnwtMWC613H3jKp7Jb9HYvztBKCqn6HZY29DraoPb",
  "key20": "38BqrViS6Npjeh8WVCgCwnTMGoTJzB6n8ZPago9S6ZyLxpd8VnHBhKNkxhKHgkGq9RikwcefRggV48J5fNhyNsYi",
  "key21": "3sWqHe9R3afwqjJtTxgecyjka7Yfs6oKdszkAM8A89aAxSFQgrNN3FDJYNwTn8G39xdmyBCuhdR2UCL6UasvkoFZ",
  "key22": "2d335VNj5jBND7dAu17dXpt47Cve17sery6XsGXAo6Voc8c7QymPmaDhDwCgEW6ywVUzwradxwqoLCyb6R4Knw8E",
  "key23": "5CxBEXv6pzLEyVpg3qGgMP23HFQqVn4TBUGFLKS7fhRfLaDCv28aY2QvK6yxL1iPdrghwNt18XibogwapoqUkkrk",
  "key24": "hqRdJm8Mvk6bW7hcBAgTjJh18RPdc37JrVsv7Dg8iFYfCje9Kqc9PQD1CmWBCniPWf1C7cYDD7VTKPjhCJ2Dam1",
  "key25": "3CeN4Gbv6tDug4fCsFrPrbrimwE1yw4PAEJ8ModBaQkqMEsXAX8Uazwde4HjnWWpRpTTXFT4SuiQBjDzgmvhMjMR",
  "key26": "36YwRRw6KZGdtPaWHGZtZcpJND1XoiyePGpVAwCDb3kCJYg8i4Gw17BW1UJ1GrXrZB8tx3S1VkNxmr2Zkx5JU2DM",
  "key27": "4jRDBAoZ78QhusocLobqUjLcA9zjXQCnNuW27iLNqD1wTHvdKHG55Q3fbRxZfqjm4Y78gRGC49eJwYFkgqLjmcgV",
  "key28": "2YbJadpXc3bKNFsBLqZybkSaNHDxcKd7Wr3f1YPjDcAv37p6VH6Kk4Jhm56BPav76ggFyLPXsmpFDaN3Zy6fqgXG",
  "key29": "3iY79naBnxTypFdf6wqWJsXkSEtAcQsEm6SBQkuUp5p9FWm5FZBXKhK2JTbePVhwurydUZ2wYKuaytf7VuC5qSqB",
  "key30": "uAXPUmq2HQom9zX9e23jR6oJ2Bnz1m9QM7SJhNkxY3LSsrdKGfF2P4RerHvKFGXAogrSokS4Y3hrs6FNpXwKjfu",
  "key31": "57XMzUJNJU6zwgJxiruAKu52iCavaMHJzTi7CGh3xJeygkaxFjmcgbuVrmb2XqMpcENPRGR9ofDkANbrSKAnKZKw",
  "key32": "2yV6HgTDBmzzh8XiXPzbpFt2ho6Aib4TjgoLEobsa9xThpQLYc26ipQJLPACg7wjLKLiqDU2xhpD6btmYcAbrnUe",
  "key33": "3Ka31yYE489K33bjGKUa1MuEJ1wuXvY4BJdXAyKh11faY4nqWYqCep8mEfe2PLUsd6zN7NDh7Kx8zLBsKswTGvbP",
  "key34": "33oKvGTrGhmJVUCE74dpM9wdPNMAUE3eg9usYBE4u38DcNaNpFsMRdfu53vNrpUUeEgXeVDeQLRaxr1LrBD4nRV1",
  "key35": "281UYwY63LS3mHsSPZGCL6xMNuKaD4ifg5CiVdsnQ5qDYm2aLzzQzpgBXxmmrCaMuP2fXZqGxTjXUqygT4pvEeFD",
  "key36": "svec2RcZJXC7wPMh9M7PRLDkJAyDNpD2sWTYp4pS1JpKfv8Mn8M6rEeEFa548d2YkCNc3vd3Vy3SDNfFo68pEsP",
  "key37": "3KgonBUckfnT3czKdmJw6cvYNRiFnyo9ugCzV4TReeZkfejeq9kYZxGmGNQqcRsHuyeKvDnYQ3UHmgNk3WWc2n5f",
  "key38": "35MRBvZCM9KZSpBWo1L3peADxWGopSE6P5oNdu7WngSkxRWRqM49YZvPr8EArJxnStEagB4vpc2khJgcgS8V4hod",
  "key39": "54Lyc2cwVfcVxKTfeAENyx2oqPgZYoqBJGwZJoTZSquiKWnLzxrhsjAk3dbQyvefNGDZvP7PP6zHa1TzCDVSnMDn",
  "key40": "G9nqnD2HZtzsVx16oi1dba6ANCdXfoPt9fLJD67Kg4TTa7ojYDR84C84fYoeb7TtMY7M5dFmAwseuaD3ddcK3Jr",
  "key41": "397jdtvNziW8BaqE1XGyFGGTASGub1cy1D7AGLq8CZNi48HkQKh2Fo78AqHUShabnXzfroocETgawbKLZWKL9YUf",
  "key42": "59MqjXRD67eXDDMXBJAs82ioQMux8AuhQC3MAPZs65XstZbR4u6niBbFbJigFPg7KF5yMJExGPQyW2KK4KNw9u2c",
  "key43": "DSWPBy81jbBPF8AWnjogrRUfx2Q14meV9j994YLRmwXGNpdypuTeLwcToCBg8KYPz5cWmU1fhjDnyS2N7xxWcqc",
  "key44": "5125swjECNDAvVrX4YndwSNUHrut3JVhEZdDSrTZNqASR2vfp1ERt5AStu5YSwZPk2ptnoCd3c3tQ3xrH2EMzACG",
  "key45": "5yuwk9DqYLWPrBeDkf4cMLDDnzETdARZVy6YqARatuhZDHBMrNj5MvnWZSeEta5LvJUzccM73MTbaNHd5QvH9Qvh",
  "key46": "NiXQqXbwtyUHDsqJeRqwvmAUAn3ry1XC3cGozWuxpYxAovnduMNQ2TbRLVJSmWU2peyYbVbvsoz63gT7f9BA8RV"
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
