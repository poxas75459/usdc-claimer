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
    "3VpmwsPoWkm6fCPqRj59pqSZscFWXjdJHx78jRdHXgQrWudcH1AbZRSrVLrJKSYCddEmmVGbGYkboeEhW3az2Zms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zRjZDC3Qk4KhvJKfQS7gntqTnFd51bMH4zANmCQCeBv69qiSfG6Ue4dYDNe59NGjMHyveGSPmJQCidYP9BeoeX",
  "key1": "cWnXYu7jC4w1c6tcXyFBwz3xfZMFj8Ns4FSo4GZfwEoBubKD86NgWdLdYbQ5f2xJJQquS1tfzeQ6AxppCfKZnZH",
  "key2": "4ySX4L1aR1DN9SyypJBT8VoREuCNvndNfJHeVREnAsZ7C6Y2sTisW1rri3pQt5A6QoGjdwpMdacFnpypbxvZenty",
  "key3": "4hpBMnB7o57mpejoW5S6yU61dF8pwcxb5Nrk4g9rLU1XyKvTDVWK12kXWR86xPP44bp28g6kxn8WzvbHt6Xvh58t",
  "key4": "3UaJvDt22u6Entr2Pc9de4YqgsPiWoc5Q7Fxds9AgQkC12GA9RrzPe4uh6z8uf2TMA4t5MsnjpccyEzWdAxix94Q",
  "key5": "7f8dsrRh1nRapv3TyVSskw546bn7fGGQKyWQUyQE1abSwF6zsGn8tkkmsfseC5S1pp2BGMiQgH1eeVhwWtAKv6k",
  "key6": "3vpcdFShDsHQAYH9x5rYLgfyfXbdsZjTrz1oXNuBSR6PzjVa5SzjdUoxF8wQCkvsBfgZG26fY852xvmSv6QbRftH",
  "key7": "3owV22hBZu7fPuN7itT799AFfQr25NXj8HHnhuW9SK6QGwe9Q2p5riz8PMgmF4cxbbWhi9P1DyRoYEm2fzFNHbuz",
  "key8": "4zVSN7WdfjX2UfjHG1z8pHxJgdS2M34wZzhi8YUUKkNRxVbEZiXe27GHTucWTaTBNraNyavmbR8iWVbRGQBcisQf",
  "key9": "BBCRwuGZjZLPgwhtS1dseUF8t1TZHRSfzmZxXv9BC2kCg4WKEqmbJgkj5ttK3tJiJyqLVLuEwjmCKSe6Ha3ywZF",
  "key10": "2NwUAHmq4WWm4cRH4b4r9b13mepcTwZZxC46GDLBjbdJUjbfWkEU8nkGtX3MZZX7xNcGPJcS6Tzt2JRPt1KYRGtu",
  "key11": "SVAbFTpeyGCA3kEfz9FFWkY4HMRAPMyeV2Bji2gyUT5u6o71rGRrR6QCPPupe3VpGCW5nHnp7atSDy92F2GwQKK",
  "key12": "4sANDwNY8ez2pKmPcNBX3tVxMNVdCE2pqzhLWhbsgCnxAVAR9dL9eLTuVGWd9je1ckoKdz1xSUs4bNqMABEEJkLA",
  "key13": "2KtVUXVVDYzWb92ZiPkVU1LMZ8F8G3LV1Prg3uM22SC1gz7WSKqCcFUxEH1pqjcvLkEf8RqsnuSrUUGwSbAnUXx6",
  "key14": "XDzmsMbepqrfr9krp5djZjwG1RaRm8udUJ7gnUkRzuVYKh1qsVBBweJNqtfcG7VsXLEdQktUdaSqvW9kLzgmZGv",
  "key15": "4jVCCWVfJ7NHKMgGNcZoRTJMq2VhQCbPxnzgL8gKwxJ3TrCjksoFeXZdV5LmeSy5VrwqphWcmeVhfhKA4ixoZw5T",
  "key16": "57cMcoWFFq9D1rahFyyDxK6zoANkiWFuP54Y9WCQ6oTnoPiwdMVX5oMLwxQXqUee8Pkvgv1yLovTJxg7LogX5P1a",
  "key17": "53woUoE3WxP8pmU2sXxSexL53JAVTXV34ULruupnxVhTtqeM6DAQYKgJhj8iKQQnsthMYCwPWrG2wuaYSZkFq7ix",
  "key18": "4P5aytRZ2n7ccRd2U6uMkBJHuQ7SMZEJKh5rKWtV6mekqHH7husmtA3Fis1ZVoh2BE4XaissULm99bVkphkowwhX",
  "key19": "3TsoRLSZcXsvQvtUP1dZcXzZ6KD8zwrvFbdHz3P6Jj5XTcperLBadqocxtDXgDvnQtE8YhLt6dniTCZXqWVCye78",
  "key20": "4fS1X9RN1fJ62bn5MzMkxdYF15BVjYXbx4rJjFtqrANekbUjjhFrJgD1gMsgZRWr4sd1Vr394jtEzc6QQo3FdwkC",
  "key21": "5TWAGo91p9U8gHwFUDHR3icNVLkHhyjjBCDiPyB4qC9sPZW8MF4q2ZzHH36TRQdnyYPe9ADRrta6E3yhXoLHcgor",
  "key22": "3rktR6SuwwXdRGV6KzXV4eggW949YAvgKxUW9PapbVqRjjq54vYAG6dCzTgUbiiFFQTDMsV77hrx7yH27Wribjgd",
  "key23": "3tgLDmpZAuEr8EDYXo2aMrad5TkS3yNQ5BCLgpa1RAMbhhA7SwRdGnnak1jJn8dZ8RwwbPAUMJtuZ6JwjvZ5d3tY",
  "key24": "4F1kRsciQAV83vVqGGmQq6eC6i3xJieq592BMMKDvW5hnHa1BCFYhnJLTd9zsqZNbd1c6XM499rKfffrYj58G2i3",
  "key25": "FRLJKpUBS9DdKprikN1XAUiefpm8QutNNxBFhWvropPPryRv1iU7Qu3HFAMCAD34xpxcRhdsG6epVRxZqST5Xd3",
  "key26": "5bCtfXCXQpt5domgSqhURJcHxEhhNsf9eeBroiXTrdqSXxv9c9M6dxZv6m8UunRJ5qLiZ1uSCZqmW9ui9DNaBSqs",
  "key27": "65winxku7YCMukEkQeDmwQzyk5cAiLou9QEYaYaJ3uqU8XM8keBjLsBNjkjiMjvTogiw6UGXoiqWj8ZK3b6SC1zG",
  "key28": "2nABNMKB8TaeCeNetCyj8iR2yU9VUtK2m9zyHg3yzCc4YCRu5pkWyums26LvAkT3JCXvUVeDRzLcVeD62fkbvuT3",
  "key29": "54SLNe19o6EkS1AtbHDWrwuJCxQnoGr5DztALtRoTw1C8vsYpUHb5rSkXp9XscCvjr6K7NBWPeUMoKPz7g6PrnGS",
  "key30": "65Y3tmkDV9dCboey2hZnmr43kvBoBr1ieJnpQmzPZ14n2q29Lr4f6mWa587LbDnShUTfqAcZAeaDvmCDWFSBejUt",
  "key31": "2SQdk69ZAmB2Y7PgpErcoTvyN8qWUvTmHx6kbCk2wSJfWZyL1kmNJNU6euje59ncdbKQrMCNM8m3QqZ4U9miLoSh",
  "key32": "5xmATKaxvGDetyKASRUdPoiggDn9xjmmu76JZwuZKTM3Adw5Ty77dBdA3b86C8MivfvPqTPQcaMdVd4qRDM8BdxS",
  "key33": "2VorrzhYgFNKBab1DQadKVAo1ZQNhzmVGsbxtn3MmiN9aYd3nUt3pyPthinJcM2y9wYJi8eo2an1RixE1VpiHWAy",
  "key34": "5t8Ba6EymfhERKTQGXYFoe54bRPK7PkT3vUKXADKNRrjvdHBJ4iHvzwMQXkbDNB3YCC4JbAdXic7XMXrKDFMFJ89",
  "key35": "3c7BHPFjCL39hLEWkHyc6DCnfepYRBEw4s8ruSqi4VyPUZX6XuPig28oB3T7zf5t3rzNyPJBXESf6tDcXTg57J81",
  "key36": "2tQEfd7fzfA5sGJkLTCECyCbELnfX8hE9Qh6CVMwHir4G7Y9rnt4UzeLQn5QrsQHnEfroaiDZn6mhpGBxZBuZ3zr",
  "key37": "3sJr9zd8SaQMPFuzmjaC3n9wCFciC8xxfYvQ5Ps9JSpD1EUALEsPZ4WaeM4NkP9wVui9DXaTT2xGhJcZnpCHbRqZ",
  "key38": "nfmxS8sTRSYCZDQStgKQmg3wP125rDNiE9ML6yf9BzcaEpqeUyRzvHrVrux6y1RwzzRwcxfT8uUEZj2CsZuxGAu",
  "key39": "zHKzu2Be2SyYNPLWZJJKRJzeNTVfLWE5cGyWapQu8LSbAB6e3b4mqHWHom4PbHx3e9PBgVXUu4kqqWH8UH3F4Dv",
  "key40": "iU5mzipwRnSbFcKDJWPzSwVsxk7RbmXoiuvH6KDULzmEq5SVnuYLvkpw3NK3qvtFwwZPv6NzR6wBAifhTKcxqdc",
  "key41": "21NxvN9jteJ56hQ1scz9i7aqhw4ZbShm6kVx2j2Gd8hf6m51sQpcq2Bqv27Ri3niB2XS28T3FVAUVhhAceb5sakt",
  "key42": "uthJjXEgrqMsu1bwPseMJqqWz2wNwWVmWD3o5hukNNDApqb7ebt2inBYDzrBL8Rah4iH6Pd2pEBjGyyqezWfj9o",
  "key43": "5BBkybfeAevfoNrNmXJrKAy2qvaziidv49kfYjdQudwprTW8mDfE5oegN6oRER5hbJYexYpAuS5cTHXBitY1uLsZ"
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
