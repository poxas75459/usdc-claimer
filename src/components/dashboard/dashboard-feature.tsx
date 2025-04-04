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
    "5iwMgtEBUCtVkrLrkryaM3XnDWXWrmjXaGvk5RE3FDwwuSSNDgYEFFYg3S4mfuPuwWLN3gPezowgNiDsWFmArfWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCnY2Hei8TQm3acYDX5jg8t9d7QhE6ubGdDF7qjARVmRJTQZFqu9hjfX9wdsiQpDy3eD5kNk3cMv2bKVYdJsaZA",
  "key1": "2ZJzRPBpKqkYawoCCjdPoaH69PCrviPV8MwJkGZB5QH3SdufviDggx4QCDNiiUetpHFtbLMbESGE36LqtYP7dWTG",
  "key2": "zPvrRTEXQgRPVvDM3YWEvx15GHx31EVMf888ghkAnvsXMDLDJ5K62HxATc7J17n4wiQYa7saJnhdbqJWumnCyVn",
  "key3": "VuTJ3zQUsxuEz1SDYPmpmic8YDkDWPzFu8x4HpssjijLZsWmfYmyMnWNG36dBvGLAkm4ocGCteVDnJhUXxj7RN8",
  "key4": "5Uyie1XQHweeLKsNeqYNTMvqiJYGcCRaaoDkkpE1SHs5ckqFpHmt5vA7LUioXBbSmwmVnndQU1jwajGGWioMra7W",
  "key5": "5jjjtZyUHD8p1v7mifXj8aodLcpMvWzyWD2v8vZZZ4u5KWnUCVmUNXv6jXEws5x8fP1YFheK1M77dKm2M8cp89dE",
  "key6": "2TFUCvEMbGbL6kGSskuP3onBLTdg4yeg4mys3EgKTrUVpHDEB4qB3LFZ5aoBjx3UbJxyQuTujC6Tuxy8hLi6C9zB",
  "key7": "5kgKt6o4Mz5f6FzdDg6sa9FhPwNNp4YPednQZ8DHiV4y5AxKhx1KzyhcGuH7omEashCmV6TDEjy6jq3ZBNkgouPb",
  "key8": "4b9Hdb53qeEa1YC4L4wdK9PPon2N7yVEfz8P1t7PjbpSweC8v15bTjBTPSCbTGWGVmZK3McTcJeMeStQbeXrwA4o",
  "key9": "4GMagtv8K9aEtaWxA9ZKKaQY8mJkmd3b5ZXTD2267Qrw3a7cwJtByYBFBayqsLdHLDnj4wczXgeDbFSsSWvpGRg2",
  "key10": "3dw3UfJTSywmRS36ew3Mayft3374nv4UGBh9aS6hac5QxZMHmj976tcH7VYkxmmnf2vVrb8Q7jpbE2ZcE56a4kgW",
  "key11": "2xAaxN7MmX7PQCsLA2JkrbdK39gZmdkh6XzgXP11w1ZbwoCDUNGJTPRFqt1D8Lswt4PLPXNntcpduzNXrjNhqJAP",
  "key12": "gj178sw1gFooS9woVgNyryrhfP4qNzftggSjcLB4KVy88aj2EZxcUzReGE7L2iMCXs75CnDdDLx64SBguUBMmyK",
  "key13": "5J6YWq6qoeKDydc1ud7erYu8f6qD4A86ynb2dJSgGat4iFggtuSX9Hu3bhwHM7eJ6dNTzy6Wu9vKsAE5hQU83etN",
  "key14": "5JbVw2bnbcKsZiwwwQ5cX1UEdkofvJGYgtN1VFRTMsapWZCBjPGdo9yJNo5YE5qA5t8WqPuhoQMs289FGkykBGkp",
  "key15": "3fdpbx3MBY4NWq6YBHrbE2HdoigP53Nh54Nfr6WBpUF1XiPgSZ4v3ViBoEvjWH2HLD5rRDvzNSg12TLtAf92tQN6",
  "key16": "2q6dM5ZhA2MTyoeuJjmCji4GhHzZYhYHmecAckyn2HruwyVPW6WzfvactCHfxumaTiXFR8jC8AxNMJXsV8Zssqwn",
  "key17": "5kFyeBBGFqP8L6YN2zCQYij9cCctvyg2jxCR8vH7HmadoGyjNYUBhFi9vMnxo8Ga5A25rW2T7C4gYcT7GRdvgVzR",
  "key18": "5SqzWNoRviHsikY2MPrv7PUKBZBZ1t5PX7MQajE1o1R8RR5Qi1RfpLjn86UAfNCqaVT2vWpKC9KbcaqAbG3rBn7p",
  "key19": "5LDToCTPdr9LrBsJHkQhBfiu7Ek3AjbT9PgGcM1GgtsqanGxmek45YZFViH8GDwQ3ADwjA3fv8ujrBNr8jFpduAq",
  "key20": "a7g64hKCE4r4suytkrhaYG2D54mDJ5SL9GsduXD2DFQtbqNNfNwbgH5N6BvwzdfjEpaKviWoSUthgso795bQHtU",
  "key21": "31yJjj4h7Sxw3CB3MLBTmEgLStfrZmPXxR7gjMn9T4WAsbs892H6mHPsfqjmjSQAtJQyL1VCUPVzNEdCx9YCVLFT",
  "key22": "2ysEjXcwp8nSB9JY4fagzfpZXgvG7ptA228iH3o1EJ4NnwNoTpmo2vWdpB5zat9UCsi3t1fiYNngoyXevHUCot9c",
  "key23": "AtK9iwfMPxLGTGYCFoDHXQpouvu9CPESqPRUQRMYdiSriXHTNcxwsY3E783mK9SfNCKB1NeQxXLX84LiPzanfx5",
  "key24": "4U1K6Bfbhp5BYiDoZhMj6CMYyhT9gFqtk6SrMfiyFLFf9SkzK4D4DbhdzepXhwBzgkq3UPQLtKt3uksVY53x97U7",
  "key25": "2SqPQsj1USVcogDNX4RZDFEeRf3cexsj46qemxeabNXKz9RovCycVgav7PpPXa434NKnQhPq9haXd2eDVazwamgs",
  "key26": "22QzYGqEDV3c6rMyXLGWXTb8ZyAC3w6xY9MMNinTLP9W9i7Zqpjg272hiyup4hR1KsmAVJuP7F9yzntoDv1FtfHA",
  "key27": "nwc2g9GEidwLfC18sRqgyQgGLVkeGraVbHarc9wa697GrMp968zvRaYyoB4tS16nmTUZXviHePi92VKc162AZzx",
  "key28": "4sBxKT6e7TQBhYTK5EpVBUz97cKYwXo7kn6gkcGBiuyHc81RD9DX3PkW9Z4gYEdT9xfNWRoMLsuFhjoEZSQChTsK",
  "key29": "2WP6ZZCMzonVqgTjkdUYuj6d7Ypai78csYEMpsck6SH8Z3g4tJ2zZwgXHjXwAFEc6dYZoArhdcj3hau8nGpT1YZj",
  "key30": "2KEui87Lk11Kd8ssMYpRUhBKyLdA3CiL342Hi6YKkK8XrSAFUKKsgeT9N25aQYegYK5xLSgFw32SAwFEHJMVgEaQ",
  "key31": "29XztaxehYwpAQhmH6PR25Rm1a2SFwi4BBdwTVKHqxf98D5q9S7e5ZtfLTHow93MYQcR7y4njtYCS1VLEVN2ixK4",
  "key32": "5Xjn4wBFsqk3sfkBAGm6THm29pQNTBmUuuNhtuhqAtNp27NiRaHH59SbW6uQxeLhaHpZHyqKpBYdfH4tZZDVb8uB",
  "key33": "5XpbJoPvqJNQRLSF9Tv4gBWRWjY78opAmrysMArquyqd3fibmRq6gaSt5PvyedaxR7DmJQeDstj9JodDRJZuRcfH",
  "key34": "5CCEbzqB61uyEyHAtE3dRKJaQLv7AZ1xxw3TrFBroVy2bRVxNrYvzM3ZRFRgkK5na5yjsZHNJCrFBnWtn2qNJL5Q",
  "key35": "2utDM9gEGEZ197nNxRmmyvEJ4iXYT88fDuTgJuUCS54iFe7goRQ7bMJGjYgps7ic1WqKGVQ59U8r52gEjTAzFG6f",
  "key36": "2LDZaHfrbXhwdTMVExU3kpEpSCikxLAtQDuHNLFRdJihri61xrSsZ1m3PSddNkRi25vYXf3pBSyAGgALSN2UuNj2",
  "key37": "yzDyh7is2FvPZy8qHXi2EXvWR1SiPMws1cN1HGrBe9F6Rsm9uzt2SXd2Zb9otym6Ygg3ZpRfp6S9AhjpMjp6RPs",
  "key38": "49iF4mMyiz35C6kUybtbyJBTkGtEUZb64MBtwMDaR8PK7cvTWaYh8w2xXiur1Lhyv3Z7HCFYFxWL92VTC7yx9AKQ",
  "key39": "55A5hizUhSzBDyKsWy2F2Fatkhy7k8B6x7JxnJocpxT7BHDSjVntw9NgjapaZLio92Q3vjFiAPBvFM5nsfhQ7mUN",
  "key40": "3EgqPmHo9BkxxGHyqmzYX1u4xgAXmCpen5Jap6FcRZtLJ74WZ24VbPRLWmbYmyLoRDr5i6MdHCf5JSzXpyLUzoSY",
  "key41": "4NVJprkLmGX6GT9VhPtZxeZNp6dcU5rByDPpBW8A5LKgAmuSZoexzNjmrJq3c5CeYMdrcEa6QNCUnz47LQ3CWWZ9",
  "key42": "5UcUtTJ8rdDyVW13fryCMwLjYB229YxwfbfjiHJV1SieekfuQridRvwPVKTuQ47Mg2Hsw5TTpmP1qp6gLfR3Veib",
  "key43": "55oBEw42Z2EmunPVmv9TGD1Cv5bF7B4qkGdJsoANxVNyJ6WQmyFQzoLQTU9X75UFcUCU2vSre7hZf6oAyfMFAfdR",
  "key44": "2ssaGJcmiLbNKPaNyFizKcJV16BnxfudxBsfzAQ9H5ygCMSzcohkizWa5QVaZq3CmM73zRff3jRxwVVAdPQcbdNq",
  "key45": "4uLa8ejmrK7d8SKCLJGjuu49USw8JySZY6MXDct25NxQzVDPCGuJGptA3BkXmKKY6k1KY6qZkqBF9Eajhe4twWJu",
  "key46": "4vfWvCswqFyqbyabddFKdpUt1ntaXq2updnMv4s1tjxQaP2XFbFFGG1pg2YzqDH2Exmet6BDyRWQY4xWZtUG2ipq",
  "key47": "gWe5SjAymHQkswYA1aSjeMqn7kdWVtwHhPzo5XaZd8ipsRjeDv869ucs6rnH23zYFUTsVNpTiXCA3PuYrhNepFW",
  "key48": "2QzJFcGQYHs6HHRzjc9d7XWuQoi56sg6YCADLw5tMCJtC3k7PgyExjN4UR6PgJtcD2hw1yR74GsXTxr5zMNQaQqZ"
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
