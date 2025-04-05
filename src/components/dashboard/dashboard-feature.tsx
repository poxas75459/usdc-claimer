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
    "4m5TFrbHfEJxPLrfEgFGgxANujVmyViBDWgoKfY5YpejuNSq3zuK8Xys3DEiiKynzjzyjDXQ9JFXo6by2QbjrNuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578EnVdG7gdEuEKM1D684dq72xcsmW7UnxsELfESsbgX9rgaAoAYDiAAeoYyFMdPyAiH9NETZCKByAvErAgRCo49",
  "key1": "5hAbTruCfGrWeN4gaGBFLkPqH5DVNHaPGbB6M4FFima5e8eCJpzNykKdxC35q5318MPi4nDyTQoZq8AQLnFYF1wn",
  "key2": "2c7xqnx7kPN8jKWcHGMV6rC9LEMwuKFGUFdkWMYxENsVkaK46R1HRjV6JxptnTdhzEWojsuih6YzJz9DDgbP4v6D",
  "key3": "2m7nvXMkraQnuBra1LCs8CNhstr4VF6cZFwy2ALXh9CVxBk3UCAG3rV28dDDfezSWYCVt9cLfndvY72SpaQm19dy",
  "key4": "gTLB9EE1FMaQq8pZLRuDoWv3R2avS8FqVbjwB94iBb4CmH5TKb8L26ND7y89AbPaYcmjG148fZHyMBgkKYnHdxH",
  "key5": "4Km5iBnPLeZoYtbKi8E1M3Av9uu4jfqdhUmGV6StwieiShyn5SiysGSAu4TK8zrRBRsezy6cBoQcbhP7gkQgPcT4",
  "key6": "4WiLZUPbMp4qYGRnNirARM7VL7e3XeV5NxK3a6auDBH9c1FvBydCXN3YUJrB1yy2wp4DqPmb2WpFnkDmuVg1Sh7N",
  "key7": "2KrYdKzNeArs2SaDYhrzT8yEULrMFdKxitCCDuVQL7ndNL3NaUCcwGUvdq8keRYxSWrUtUjT2X1po2c4B2hBEmyP",
  "key8": "5Az72sgqas7ELXYvBYoko7C28aua19S3tpLacHDi38spdvKkuw11ZysvuYcStd63AfXbRZEKbBBeADHnwYgNjTD3",
  "key9": "2G4p6WDTsikKSBjqTEcBnT17aGYadjjce2VeUA2HbdgczVvZsQKXAGP9rEMdndEx2kgGo5ke6VbNitvoRUFiH5Zf",
  "key10": "QUHL4kpsty2DY7xz1Ry8TuYboXYgvUZJUjmnNiUL2LDNmqjnHCZewmf9bFXJ33eKbQTFFsjxizD7NLP86rUK8tq",
  "key11": "4rm2HtoonACkZFS5eepVW6kGNzSyQ3mVJCcsfwbVN1nmTq7wGkkWzyFbqP9Ze4GsvCVK1fs4EyCReqRyG3SbF1tS",
  "key12": "3xsXiHkfAoddkwNGub2R5JPXfsbBoKMFgsce7DAME4JgADNtkpE8Gh1PVV7vjXFbtTF4LnjoWkCMkKUsJqZMpFDL",
  "key13": "2niAFw8tvL3L667fKYKLPBu2pqyRdN5gNGDSgZFa3vTWP72EeMEyVMt2nXmk63YuxRaAH9pi35up6Y2wsG23txxi",
  "key14": "46wuPa5N7d5L81c8zKqXYFmogh6ACrLDnRVJkWzYt1zCF6D5jNDituXn1uHcB736Gr3vDuPkriNpZjo3UwovuHpk",
  "key15": "zGL4CbcxdEZghq4iskU4fkFapYDri7FikxvbMyNNHXegLqQwPgxUmBYApqbtNUxMnejfLbapNVeXystB2dmh4pj",
  "key16": "3pjtAh9mnDkKb7M8DDzJ2ELyWgyQr48PoYsox1pGTK8b3wfFJeUr8WHJH7c6CCGVu9PFuARXKa8pmpPJK5vMhwHa",
  "key17": "3z44VMYag4soyq8c3ciaovWsDSdQjYaXhMtFpsQKu7HPT8kYk5oqrRR87RXUaAsfcuQN7qckweyqD9dxGT5ySrxr",
  "key18": "5aBSzP2yNcJmtDXsQUFWKpko2qaBU9xvpZRPEtx8rMz9Q5LTMbMRaHFFdWdjqkEuVoeDETJk3qqpmKz6qozk8DgK",
  "key19": "4kRA6p8htXEYKAPVB4bov5HnSctQwftwz3jCJ68c4FJHEDCoZ8BQM92jkWh1GTJVtwJnVMAsbhosXufRJFqKLiyH",
  "key20": "5AXkHXqkTExv4vJ1onQzJCjgT2RF5W7GkCjruKAEyTFbuCS97MhA1W6HHcdxyKe1dMyQe2ry9dLKi9yzg29E38Pw",
  "key21": "4rFfLkEKpJVRxVacWE6MmqRUYg8N9R2eTzx6ipgCPJ15Vkw6aooeGUnUBjFH8AcBnPa4ZPggAqXfAsGQ6m3EEGmz",
  "key22": "2dSPWi4cfnQBQeJ4mxkky1mRED3Ari9AypUaqgmZcQp5tX8YmUaTwzoLHFYRUjRyGsiDPpQYFJejbHsGcMRp25aW",
  "key23": "4ENvoGdQHuTvmV7qRi7huJnLtadz6XP1S7TLpmqDg2YkwXDqsrs1bqpEqyjPFHdMJ2qnWCeewi2WutDyeprMwFWx",
  "key24": "4CnuDuUC1GSXSQSvip3cBZBm6QxfwBQzF8YPM3uMwHJCnhDBrMHcb13yfiDBvmjw8FftnynF86qX24paNJRQNNGp",
  "key25": "2xUCwXv7KSzCWwwFCH3fw1dQg67m8fYQux9hTt6AbW8gvYvL6SEr8YAa316T1hstsTkYTACwvXxQ9BsoWSjLyhzx",
  "key26": "5u7JcFU6txXdrr2iGju9cyqjEcMai4WsrA4Q1oyDHEBQLk5FV7JkEphAhqVVUEMJ3AuN2W326KZe2V9j2BS3KP8B",
  "key27": "4aDYXP27vNJBSZX3ydfhuS98TEyJPusiWwn3wzB13o1QBjZnpvKRJbxuc2Ayo3bBrAmEy5FqALzAPoJdnKxXopHz",
  "key28": "5Y6GcWzfLBgGZ6B35ZVr9d1PJPwGVA6JABhaN4fgdQjKTUTE5eugBugjG17WR44FQmbKaiydg3kLvpqDpvKjc5w2",
  "key29": "32p15caqipTBqRXwu6tA6WN3HqJka448vV8KoCaq1mbNPK3LFYoBGYZVpzJy96SMWzjyrE6BxPUG2Ri6shykboM2",
  "key30": "6tEbAgXr9QSyVUXVUh6efFkEF81d6wNVMREy5qUGQTUDLkNjX9JnUVFCcC38cyoTCMNgMfmLkPLFFWgAwuLhMba",
  "key31": "54vRbscUsKzDEuyAH2urJQinX34rJx4nfMEH7GP2gHU8qJn7FuDKTefpUdbRz4SGaxyNNaPEsXdyrAZNycP8sxp3",
  "key32": "nMRGUNgUgv8bUDbiSkczdDLVsGPZhAhCzMXijxHLCyArevBq6h8d8qCGTe9qvAqapzmKYm83jKzYvvWzFQZDD11",
  "key33": "5YhmgKUuTT1K9WKakfkPhP6RV17fZgiRyK7gwBVHXasoshTL7ggwBoPtVygw8jQakNujqx8X7bwmdKihsAHynX5",
  "key34": "39LphjACU6sjpZQwfcEB1YWFKAWHoHPybTTYTpMnuZUSKDHR25rZQDXQvZD1zmXikKTbNpubc3TCn6kroEzt1pbJ",
  "key35": "4kfRhWeggHLcQHZZP3bNdUB1NaSj8vknFoRqzaPtgzkobn6e4XoXUUXHwRiBjDxrx9cNR65W1Q5U3r5VDzieQmop",
  "key36": "3jkDtjg1XWXoqkg99qrWbej96rrg1CidXrkcy1NoGr6WDe6i6iK8UHXzBps1RRkdpmEMRSatV4zK4evvqE8A44sM",
  "key37": "JG5GBJSjfjJEx8U2mxgTxzSgMNaQcPQfrSH5Wo6Jati7dp2WSju7JNvZJyV7d6D94XK9Af1juWdub4j7WGnGYCd",
  "key38": "35hPVXnMgkbFa8UwnhKRKC12TqLbvTEHVVYhE7aYPR3mByk2z4dtuikT2qChHNWStK659kotvvoAKH6drGodi5s5",
  "key39": "5KPFKMStweAVVnGUEXeLXrqjbjXteqZXphAPxCADKFDx6a3QiHMkZx3X9jW93PxzQQ9Hxra9RPzPNRGytAUJgEtn",
  "key40": "WrhipTtZMhAnW1NYLj2YfqVnPHUsNWBPrAFPBBUd5JCBo3Dgmht2bsjHMzScwAC7CtG25L3yDs1vsRcwM8Jw5kK",
  "key41": "3RT8LZP7pnxbRCPJuBt2XsuFMuzAn8CZxXgxFCnmgQi6RAjDh94CTzXiSseL38LGr8KZiAvCkWzc7FCZXRtoBhSc",
  "key42": "4r51Gd2uEEpLkrFRocmcjbwWEeKVedNnUytLDutFTTcs1Ly5gunoct6MUP3hKsYZYEVhfN6hzBn9R9rfxUMY1fhw",
  "key43": "D8ZvjxWQn5v69jsZcVm6yadiSpQ7wXpTUPFpVxRQeNrnye5XEHbS82RKrua83GXm3tLBLR3ChLXcvsdU6Nv9q5C",
  "key44": "2LsDhaiGVEpAgcNveceGxngNdiA7QCNdHqYB9fCwabWNKchrZrmmXdQfrHeVm1MhYSFqFaHrV5DSUhAuHqG1yupS",
  "key45": "3zEnDrzQRHSkHMosuXbHLEWhK2W5fzSxhCzneRuvdSdBygGUsemxjmy8J511XQ5QB3jfMowBStfknZJBirGNQYED",
  "key46": "5AVEwbq4fYAJzLww3f7WSnpJ55M4HJkJME9Srk7qXxwCLZ9WQo4DFmZMvS2ysaWZufGEroAPaRS3qAYknTTJ9qij",
  "key47": "xKJGiCXTZtc5WTSri9Aw9M7FA1SHmQByMgHP2bwUYogWxFNhbUJurWuTp2AdWV9cNLY2dfvbrKbZ8mTuZVqbyP3",
  "key48": "56ef7o4rMyo8kMf1fREzQXEADFWfpd4oR8cPMZ4XukMSFa2z5btw3bUwf1s6wwMnFWB79zKX7yoDgjrWhMpu8RPT"
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
