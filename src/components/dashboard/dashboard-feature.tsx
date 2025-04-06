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
    "mjfMBt1QxatKYWKEp7Z9sy4rVzfKFpTpDTparjLwNza4LvH4bJBzaMhyy3oUjFeNuNanRjbjxGxe9BhDaumJHGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KX89ZHoPbyEkXiBft4Tyih2YQH5vsiJYByTtVbX6gxnacT51onvFm1xuxb5US1EWxAZ8F9mqpinaN3UemFy2tg",
  "key1": "2pdBCbnD6oMfsJrSqgr37zKEL7N5z7KGQfBWCeEMZLXaya3tjNQZc9QNVp5zXNuhD4sHGNvRMhughqyL8ZPHuB8r",
  "key2": "2jrksGptgMYorGgWLuepwMae52gnjyKeyw6tMsVSZGh75ywo8otDPYR4jbS5K29F3kJ4d9QHZs3kFdTWXW6PFbjz",
  "key3": "4H5h1kEshgLUQy2hVeTMXKGhWfxRFByDTDewmJWAGivFCzofDajAbRwBmFHEastXCzdmh1awzSMJLY1vRo8NJrVv",
  "key4": "2A7JEJh2DXLAXKt3LqqFT3DQBBWmCEN6d8ku1PsbzN5PTETnJ87eApNS7VvUrfZMjDewkYoowVFh128tBSa8pSxT",
  "key5": "42LH2vxodrGc1vWkf1nrcBZbEkpfH85GJKW8v3Pz2boE6k8yp4zQ7Ug3NV9fknZqtAPZKMaRSVHzRgxc7UmmxFGW",
  "key6": "5hDvZ4q6sArQWyu97nydDJxYJvN4VzXsfaYqrq1jNijvFvaYWfpoYBpdLnAhhonCYTb1Jv8P19FyUCKygiLNciAb",
  "key7": "4fM3LZNeKeyudvWYCAaCz323hESgM9rPZ9VxFshzzG8FNmSaupyEZN9VkVQgrrj8Stxzcfa9vKzjUBQ2ej1CLPUE",
  "key8": "36D368c1L2bmuNnMPRh4YUGGQGj2pzpDvjNAXm5oJ3U4ebUZAyyB235BdBFP4tWn14w7zuYva8JtH1CbLdqYimGh",
  "key9": "3JPBQAN7iJQ3ufsTTy4LuqxUUfzBNnBxLyQPQUHKY9KZ6NGrYuHRvDVeYN9gzY8iF1mGszsSe2En9zaN6gf1AQEW",
  "key10": "5LA3ab65jRkkvWeDfYNew9nB3xtQbynTVTomfmpC7spXpfLkNZnteqvBL7jWdoq4sJw2if6JDux1veFK9eDi5ohf",
  "key11": "3EJB2E1g7i42TmLyjYStW8S6JyCimftepRvyawgC5SAfpELui7QBmdZkCKDnkhzXyc8dgREvwHuLvD3xz6aX5HQ5",
  "key12": "2v4gz2ibVfSPGoSV3aKV5mXMYejtvJ5WABUj51f6ffo4WSUutq3gC1z9nairornMV4tUMA5evHP6oX8PMNygsZSm",
  "key13": "492WR6rcj6coWczHLXUvt2CYSdzjyFAmUoT7R3xL5u7ExhN6WwiJLPobPw9rgAWUrTCgh5N9FRpYmXwEAKYF2zJQ",
  "key14": "3e8qNJPovPhrWUoXnX4VpHCWpLiHVHZLuJ8tiBHS5YFXzjcnosAoTh2ttpkAfcABVueyUjrKZtjxFH9LtXmyjPTV",
  "key15": "3FhvfhxqsjqbQAriUowo1bKFsNGFngHJHoHyjXsVfzpV6w5TM5YUXvKWssaHT1ZitpRRF3iiZqN5mHtw1dSjJEqf",
  "key16": "5wpyrypmyVbSKCz4Re2x61c6CVVWXs1yRPpkD6TydMSe9oqnNRVjLSyyVvVCywfYjMyzF5rP4YrX9aXoc7PQJsFx",
  "key17": "3UH3vNunSDSEZpqH6bGapGSpHqKYcvrRaFTtNWC7VdPpqxf2AwM2hVB8eHKQJ92KESbZ9oZc48UKCMyJAAdtEB7U",
  "key18": "5BPcq4bENhyAVQXxt7Heqt7hQnwULEj3JMvnqBr5r7vgZ6PcajNgkehxZKo5MMcBJFXT8QA11MEbYya2v7nqUGUA",
  "key19": "MPxwZVhsSNJiTByyQ4bMQwyxFeyaqWZ1VvZ7V7E1jnPzRqv6uzoEzY3MpLCXGKGzrRSJ1estYtuK2ujbcqk3Qpe",
  "key20": "3kwre1h5mhDE6shimZthWBy469Kfjce9Qh787efdF2EL4aQ7Ndo8cQywb5ZarXLDQJA4Z75TwvhNPuBRYVtSg6my",
  "key21": "4BaARgTQUhZC2igoKY8nQ5jVsgyiipuUPp5TuLMj9jCzpoQqGKsywWA5MFMwTkEWQxxvqAqwtxVkh5yFvV9icLuP",
  "key22": "44mCsUEozwsbKdUhw3dFeNBK859TttzgLSphk9tSxJJwSDV39Ej2EpZ2vrZxuYWefjos8V2wLGrgXdMK2n2raSAL",
  "key23": "21cmCH3qDH8ygEgt41iDNn3TsoqjvchrnUGFSdHNHyQcd12X9iEDVQtQfSfBsfVEKnSYGnsBZ4Jd1492CRWDdwLJ",
  "key24": "22vR2JVq13Fhau5JoVAgy57usJAUH7vZiiC2J1U1GTYR6ziKESqQv3hFgnsJCKcQS3F4EvGw7mQFxygRUZCQpU6m",
  "key25": "fXSEKbcif8T2nCUPieGSV3BEGJEfhNTVaJzU2Bh3CgJpwWRVpk44bxmpCZJ5M16wnEaYuPZ6FYSbsXMaHypKsqr",
  "key26": "G8w6SwH3ocT18JV9DPHGFpSGz8s8XFWhzgnRQVwWFD7WLjnzSQrNSCkVnxyDh6nGNL4KmjEZuNBLXUHWc5pWRCY",
  "key27": "5D8qvfDWgJ22Btw16wzeHaik8KSLkHcsNW8u1fDirUuCqSonPYaxBv2kR8W2WYjXAk8ogdiSkXjJXoRxUFMLdaoc",
  "key28": "4y6sowVum51jHxBTc4EjGcqXE2YNLSUDf4CSiKdzxufUb7YTZ7BeChR3mFhraV7cUYYG78QosPKqd452k1TMj8JM",
  "key29": "4cVThpFrrAuvFyixUiXFEKz9DGe5BwrsWiT73izonbXQqe66FwVNBMsxNDLWGTSqWriJiuDwFKiYZ9TCwP9yHWG1",
  "key30": "2ATqz2VC8Uu9H8ALFgjrYuwKBsfJ9CBhf2yZb9jPXZygjm9BwG9RQEWHADyxGcUciHokzyLtj1RxE7XEWxCPdwHp",
  "key31": "UqDRP8yb2kjE3TZBaENfLNtikF1H41n29egikPw2BeXXnXHsF74CS7SH26XuvuqBkBfiZj7om4Q4ZBpL63tcFyd",
  "key32": "TyNe4z1FQowT3o91QrjgQWXKTs3Av6pe1c2kWUn5SeMaNRCM2mwVTi2viwi4gwCyxxyWxbzk4YdtcvX3PHmcAMT",
  "key33": "3ZCYXnP8N63DQXiMXm5YsXET1kwTpwu8StcLJiZfns3eBkFmRm7VmjuG5iQ3qdaw9c2PZNQLUbXSve4J1ohagrwZ",
  "key34": "5zEneQW8JvTErn1WXDSK82jNEgNFRLuMpXoovH5dpjzkeAKDRdScNbUJMiYb6RyBvNUdj8h54s67v1QLUdoZGU83",
  "key35": "HeyUWYmbDt6iN4M6zDua8qV8pT8w9sSwyC7KqWM78TKCTSGgwYCAaA8HoaXZPipnPrCivXZEtJRUijxqZcLVU7e",
  "key36": "3q7KBgoYRH8nauSavw4FFmLVcGJ7GRBcXdjoB1zno81ZQncoccZoXs9ohWpWRBaeZp4LxcKUDg3vmXngewTc1YDK",
  "key37": "4E1hrLgvA5Z6Tmw3M74iJuq2kd5y266SV2EtY1oAM4iqgKRcpmmz2D5R4LPFje5SmSNJ4NgMQ2fekRiwvjzcM4eA",
  "key38": "2hNeUVCJ7XYftxSSxeEZr1wj74E94sa3utu4ASSvn2uG1tJmvB1ZFeKs829bAMJcF243McpUNfGxhMMAe84Q2cNk",
  "key39": "DWciGkRXkSNYrUVZ6ow71yafdUqbJBhU31CQprQJNrcaeR46LwMeBQRJV66c2iaZKirPuYuKqzWnweFHmFGpLJr",
  "key40": "4UzfiQjkcijhQ1Cxh5iL8DVx1av8iwztatev3rCjkmR5H7VwmPPMUM4ZSxV66M3c6MuJKfNZYZgsShidtteC4888"
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
