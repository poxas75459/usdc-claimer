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
    "2Kf3rAFE7Y4KGCCGf7bQWitRqGpYVBrKa9L7s43mJhCkdTWoxyeBkdNxdVksM5NT3UTnD6u2u6BSSntyxZKZL18G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcKAMokt7jYZHjEM6hpKWq9T73X9xJRYb8XhgZ1vcrNbWKdVUgoaN7qdF8TFHMpDD1QgUpRLu8zL4mqJyJUpJUy",
  "key1": "4jt2MrbcehPAmVnFbFRr3fKRr9jL1uk1JKpoRLQG5RTUqm6weAuqtXPv3xD6YuCCLFaZPWNZZcRTUX7yyjZoJTmN",
  "key2": "5FrtPpcwmZXdG8NVkPHD5Ts6VrYFZurcSNjGV6K5uVjxwnSoJBNT7BurkTDPq7PU2GXsi8P27bgG1w3guEUheoWa",
  "key3": "632DQcdyYNEkzwZEwk2CTChvsL92uKGaUpe2xK41wNAqJz3gnknfp1wod1Q7ExTbZCABppzYTVJQMgc2QRiJPfq8",
  "key4": "u6PRPWWRX8nnHDPTZKuKhqgoL9EjCUmCfyKpasPBkHE8nCt8W6bTAiBFsnQvGn3SPp8fVYQiFpeqkwVif5pJYeK",
  "key5": "5PzBVp95fCpAWcAQ4iA3q8q4eudobiA7LjEXdSMT2xvZqSXD2vA3n77ZvM4BPcF7w7muB54XthkzYghcLyUggdHa",
  "key6": "3Sftm7RLuSJ2tZWLh3bd4iMoKea4VWehB9PptdSopUMAS2eQ4Et4G8ELyLTvFGNKVZjgvMkZU7XTLFkBgFCaw4u8",
  "key7": "32vXGUA9YHVHZ4HUzeASEnnsfiPR1qgJVocdJuYsYAo7QW19q2Z23SnUa9n4BFJH1fikq4yDcdiTUH2NZoCaDWJu",
  "key8": "4rQvvbzWdMQW2UTjX9BDRCdNTy8RBEkbEwFY96oqJzVHsDFE9XhEsag7AiXJNrmP3TSNz7w4AnxJXzzLakJvjHX2",
  "key9": "2R4ZrXUzH45pjqRwYMa1ymS1gBmam4HyPbadCmuLcPsg6eiioHWBXNzXeF38dcWNsSALWDRaB9vne6XGrrp3E8CX",
  "key10": "3GFKE4BdJm5CZvCduZtPpp7SxrUcVEKcuKvugSPB6QrL2GJ3CAVYKXW94ovaLeTF1YFxQeeUqgtAnMYa1Sy9sqTW",
  "key11": "5JcbvkrQfitK6LRXJEWUQTSbCG8zgTDe1VSUx39KPGJy6EsuJ7pDeFhhBUAE5CQt7eiyd4Rk4g6NGzqtnzrYAhbF",
  "key12": "4pgA5H96trpC4EsZPxUfDSzc97ykTGLxWfDVBfPTjecndAoiydgFy4wMJaMAJWfMWLT7uno8v4wjs5gt9NNsu2ts",
  "key13": "2SX4hALfqfdtNiZY5T1scWEHxGRk2ByFoQNPThzzqaSNvrWvhV6gRyigdCwicJNWvkQ5ddDWa5gTCC7ERh8hze4h",
  "key14": "up24GjLm7csR1BPHz3g783eHMmBAEm5wts9ughbTdJpb3L8vxaawbdyFqFfAPSXfuWVY8ws2hUwNaCWz9kfSFQS",
  "key15": "3LGeWLLwWNzAVTXuXASmFJ9iTStQjpTTsNvUqC9SiBrBeg3JV9HA3h7VnNtPsHzGMPXpbNzLzuWXfxTy3VaHyBF5",
  "key16": "2pRtf4xKmPNDT2jvUihKBitTf5u845Bx2ZzFD62pvUc4gxGgsjmQ5chUF2rJkcSYnh9EFLaep184C8aWySqGJDWr",
  "key17": "YMG9Q7gazS3ESevnS64fnizWpBPfmzXo5vneEFZ2nvtPyNS9uafs7wsrwUbdUHF8iPNqH3ExVZ9YG41UfDt23H9",
  "key18": "59goiiiezxEN63RAotGeqDNHQXCdD1fz2pkZHy5h8hcX6wp5bUr1ZsujuoHhY29TYCqdkTSnSaTbYzj2ws5GgxfW",
  "key19": "Cqf7TR89tzHrhfCXhs5MWAstVTnkTPxE2j22eMAPTH3xrqmT9ViQQCAJn3LJtNhCDKAvuLBekK8kkndMD6uLygx",
  "key20": "53uPw1XtmjUctr6T71nHTDotZEks6JEfg7T7rBzjUZkW2jMuDgEzEyWackyod79yEWtJHaX42nzgNVnHsuxnwpU6",
  "key21": "XZUc1w7coaw7mvR6mD4itq22qsZunykBVMVbzipY1iz8chZ1vnZVoGDxp3XoepqdqCdk1eKHxnnwrns9uhc7LRX",
  "key22": "5kCBQsrcV4RwcKiqhSpiC4gUkmXfex93sYG8dcD4x1L3DTse69RSF1bAi523eDHrPLkXC1GV8LAXeCSaoiNsDVH1",
  "key23": "4dUryuwuxZMT9pugb63g64Ph7p1ZmSPSP2Mt9GWM9wKghjVMQLvbaAbtxVbYCNao34pq9W2fpfAeJuWp4s9SDozc",
  "key24": "2q3NicAn6VmKDToxbaVxtPN2A9aj4vBKJTzzJ8MUphkKyMQB3W7BuE9KvK3bTeQRot5qokQtK4fiiEnvztoJKYcK",
  "key25": "43pfCP7uL23Pu4Ekooc8GnndAoeBofw3BiHc5fq2NMYmhcubAa9CqQbRYPXaxic7VgVkHVXepyqbjVziPPSADfSJ",
  "key26": "4LqcuBzGaTawvbQWJRQQgPgizEXU97KFJW52D19yXw21H7G5i9GacijxCrgMDyWKUzsH8QMNoUZHSpuFehDdEYh2",
  "key27": "5b5sJbKBwpV7AMFTS8tHWjvQ4QFdUZpCMKeY24cuDQrBqoPJs8DitcmhjTnT45qf3XuYHEsTCHqRdSw9wXBcJRSx",
  "key28": "2S2H15WZEZaD3uUYpAyJTMvajhuHjooHYtbrajTx7u5cdSPZYfwkFeUSEbyYQ4Z2bf5AqvToWLs1EGSM5EQfLvKc",
  "key29": "2roCWrvzaV9SvBmBFFMof5ipCG7LZCK8P91FDQDpFBqnikrvHEwY3M9maZudnpRKrzPck4T3KTtuSaCT6hLLSpdw",
  "key30": "5D8iCygjvCLY3rHWCvzSivLPTp9C3s3vD2tUfMSgw5PXECdohLn5Hx5F8VG4z9qHAQD4griFSkzcUETovbiQXkLZ",
  "key31": "3crdFni3bFePxQvWGWxeEjDs5E3nmH2vLfKkTzgPmPRBKtztXnHJe3Gquu4dKfFM5i8DQzUzDmRZdG6ayTUd8kHF",
  "key32": "2TfQ6Rszz76Farf5mCKXyTtD9ucmbG6VpKbMAhkumBMF6WeMNV1T89LXocYeekE2fTKN2XqrQRNjLiEtfnc1TuEd",
  "key33": "2esjrBsfKbsmKb5qKV2Pd6iZajjVZehci33wWM8E5dvJcjUNFc7t7yWCRMJbE5qQYVDaWAvzn4MBKcppZ5LcJCc4",
  "key34": "CoEQRZ3WSmtyDJtcc38jMy5ETqB62FYtJiQguh9QDA1hNDFBu1QACLvt9QkykZiqYWwytDekbvfG8qEBcfasngy",
  "key35": "36JuTKns5w6A5Q1xu3MmMsEeiPmxwBDSGMehzCSYFA1mBxTDuUyyroaup9oCeRnvtKaTvYBnE6ysFquKqA9Gku4G",
  "key36": "5oKcjWL5UpR11zpSy7YiThvAFv3WauiZYDpVDgxeCWYDvgDi8tuzLG2cc5pw8D4RUpkTPRigFpZrTiH5rUkbS9gm",
  "key37": "2SyLevnXc6mjegfYdWmDUznXm8XH7PqwLYNLgMv3RE5yJhsat5pYdQCzQ3ZYjVwcbqHeoesabQJ8Arfcmmj9qYcr",
  "key38": "67GehYgWdxm5CG5oqEM3C2rMJBGWih3Gqzwt9uRJLQJnK89pmpWPuBLYxw2WAGzTtXyoKJffVwmGt5tX8K6YXrpc",
  "key39": "4gCnSWrib3RCMqxHcSN9DPG1Yidsf297drxgfjmpwo7dnZVnqpMxZ6dv44RDFwiMbcCfpPdSVMNaVQeGrSWsoVAZ",
  "key40": "3aTGXVydgBzGZi6kCbxB7xVQnJEdjxoRRHbSuitBUFzRn8fETk2eouj2dPtkqfhXHwWCoMBKVEAZz5ewwcg7eqkp",
  "key41": "5S4M4LYHwtmoMHV958hecHaPQpmQ4WWiny9ME2rv9K5bHJY3X2LJxuhSKSocK33BFSh47fJAkuVEK6rN2W19eR8y",
  "key42": "3pLKBCXn2jfhYL6haStpSh1cBNckeHGmH2fJurEf3Czy9P4V4To2jfTXVv3D93YmCnxmeeRnC4Yf9Yp4WiuuVbLq",
  "key43": "4hJkGu7TaCsiVMzFFeQFpMB3ZoKRDhKyPNqjtW8EVGruftxuvsV3G5R1YGPaK8Ubg8po8XK7EqjCtuZo47ziG2So",
  "key44": "3gE4E7RVWNEnR2MoGremzP5G3fege9KasHHVj9bw2HBu3eCNmBT2EBxzHrb1AyHJugfjarNugxRZmT5ZPjTUSFvt",
  "key45": "654LqQEdX6TskfxiwMPTDWJ1hVTakY76FR7P7sXvw7gzS3SJTvhq9wLYpTAZQ8z962gSNe8WrnJYpf96NCbbE18"
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
