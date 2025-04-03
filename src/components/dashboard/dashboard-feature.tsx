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
    "2ee7VzcLPyddQTDio9Wwbbxpm1jqu3tTXa96rDU8bcfhhWER3LQWkR3vPUBMsueG5TDbAXja6mGVuMuxtFu7gCw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ToPcnf25XXysg8tt4JSHc1v4rAeVUHadcmyxkoq5kREGNHuoiMDksiDQQNjhFrttbTj7qVzhGBCFZpCwJ1SJEQ",
  "key1": "3efKKRmfuhZbnop7T4j2dC33kzeC79bqu89R7Js9GvHWMkzZ36EXjs7HMmy7RJkKQAbHeeNqY8k9uneAFqxr22hH",
  "key2": "gdy11pHLHTATojuwiQvbpvHrfYzZNL5uJrFjqxRLDQ3FZTJUQYP1m5PqWa6x9kRQwVtM8nbqJTV2iU1UjMe2Buk",
  "key3": "2TNBBBJmyR2p28Vzom5oZLAUKx54HnxkqSnmvdc8y3aox3BtHHN2dMkrA8D5oobmchUrBrgC6Bqy2B5qkGBoAhrB",
  "key4": "3n4gSMj49b6ZKxqfX4jw2s31Dygv1donHNSkfLFposGS4Vk6tNFpvi9NLXcfSjqXtHiXMMhULgdctyhxU1UdhYE5",
  "key5": "2sq6ZKNMqXcaThdmr3E99GjPTBg6J66WgEaREMuYhk1EqJDSf4sVbFEnTNpZ8d8EYPupiE4jWFZdL9ySW82k7TrM",
  "key6": "bs2j4NoEt2opNyt1267P1ZwA5ncUYX3GgVLraUzjLumRC6vfTGnGpcFiw7fuT5oc44LGBdpbhbeZXFVG6mN3Bvc",
  "key7": "mkePagXZvHpNC58qU1unWjg12ZFNK2SqKgb3aLCNsxWVWovv9gVGirUGfdjJ6e1K7Xjn2PJUhHwffjPrW7LURim",
  "key8": "3Ffaw5AeNptptnfvoAAM9NEiNLJnYjntMcAg7tFYKabmhQJ4qTRcBxkpobUA5Zg342B23RUM2HMPzntrjtmvjrFQ",
  "key9": "3kPoKmnPmp3bqPB39GLSPuvAYuV2D6EsVfRJpHJxU7pEh5jVR8bmBGc4Md4V7oERx5TnCh2zMPCs6WM1zqRB6sve",
  "key10": "3Kt9T8ncbvjRcZHWazaUetGjp9vX4dCuYoyMKq3VmLBAnGF6b88i9DmEv6gSdPDxRWSBbA3gNJpmeVGSBvyfjaUh",
  "key11": "4E1fWKVfgjnythZpfrD8JRCudLbXyibE3zgeFUFXmMyKxT8XukEoJG19jLhGpn3X5Bw1NaeKGupNJxMtcvbUgxxb",
  "key12": "4nF2prZBPtjMZiuHKYf5Lt3TocsKscjZKqR7thMUJmRzAN3fBL9pq1p1YLaoSGDbFxBAaUR9wMyMvtHZrhtX5ER7",
  "key13": "2LFkfPD3HQkcXMc5Nj7ZQExT6STvDkLSSpakubYKqZZwckPvi7A5GdE1CVd4PjVkt5bo8ZywH4crEqQJ3Prm6bi",
  "key14": "59pFhYcREetSE99KFn36XcSFUGpW2BSz4Mw9Q5o2UX3rhbc1P7aPWZwWtWmx5qAwz4u1UibxZtHwqH3roUnqvoJy",
  "key15": "3XeBpjecKKiFjyy1eevudSKeMHjSQY9XxGgGe3o1fnKfPL1y9J9uZgBNNiPFn9RfB1R1cJ1z3bmSZwwLiVX1XjQw",
  "key16": "5eCKUpBXSJgimdRaXMdcwSA2RpWtmHPzMAxhggQfcRmkpvznZ4wwDpXiXkGh5DtqABMBGCnpQssmw9xKidi69cYx",
  "key17": "4pFWdZdhgWNLDfj7oHe2iB621UXvFhyH4kaDFPMiFcwAZ8ocWdHXSei5boeNmxnLdk8qcuoJR44UtcfwoubDSN4K",
  "key18": "4gsywW29WacG8RoBvwueN1gdzq2HpLyeDBZvWZoHT6dYzpZyAx96e1CVv8uJGS9LxAecEDsxHmkLuF4SUQj6sMXQ",
  "key19": "5MvhUt4nLSWhnUSfJLsRb4vSuHEfq1AFoLnWfuxe6JVXZfN9AUfKvxD3oGHSHL7CAkY2dhJ9F4TmqUYQ1fB3gWRE",
  "key20": "62TjXAAoMSJSqjssHji3cNq7ydR6bH5NBZFgrwJ5tFzDoiD9Rwy6orrHrrvSzUBCdKchYprCK188vsYoq9jjS4Qi",
  "key21": "2YmGFTUhGAA6L9TvakHfoB8xvNMbGKH2zvEH7ufifHhUTDxTY3zg1S8GpMm4HdYZPT5RvJURrHWxJmE1tewWpFLt",
  "key22": "27V4SkPL4CkKXzw64Gk8iUVR3TK3Xj4UtQfG5jfnjMUWTKpQoozWcbYbLvjQ5f6pNrkWnJpzjyZzLU6U1ikwZjwn",
  "key23": "3Sobxwui4Hifw4dVt8yj8QkJQhyi8quwT6vry3YhPuMTex3D1KfQvVbt4Jyw3PN37c2aYW5aTJDCiKti9BAAPiFf",
  "key24": "5GifcfuS44cfTPR78XP4HJkRzAn9xsnqKJWvgjPQpYRyAgTDgNts6rbiRc2QZX8aihmcivqoiGX7HsP9BN2B3mH4",
  "key25": "2Hv9Jxa3xohnZw6wcxxtwtJaDBYHzw5FnmvUMsMrgr6HrFtFdW1suS5u9UqKPtXN3ds2NLcSdFMvUPyWCS7AccSX",
  "key26": "49VurNUDNAQFr18NzGeroCcJ31XXYV9ZZG1iNRv4V1H57jrGKxF7zCovBHUuxH5PVg8aF4XTJb5VVhb9veHC63EN",
  "key27": "4SEcz5ThodifYhnH3q7FNp1UA8CnkDtDBPJVgNBYqmH6EjA3yXW8yMz7dpfEgrfWWdJxfBLP41Rjc44ph4XrcDib",
  "key28": "58xmJEYT2PjtaxxFfF5dqwqHbuREFE12y1YjGCsPMdW8c6iCFRNJG4ZEzXvrdqBYQxWtoNUxvK3c1CzkJAJvxn5C",
  "key29": "3qcR8mkDt8p7EdgdEujN2JaHz9yc7HgVcL4HD7Yw6sZUUCLp3teBXRWZLNLqgfqBAvzim4DNsQChh4Et41UBL2XA",
  "key30": "3YnMRtMJw4qpiaEGgwV3qqGArAHfboSuq9VcMyoZQr14FxNA4dbYWTCJmgdWqwdo72h4N8uPdMima7a7Vhj1Kvyj",
  "key31": "5HLNudUVmdQvteTrFWQ46H5MGhgJocKkTaqGW8uvgCa9VfkZETtSPAakMj8JCQr7DizeziQKY1fSJSg3DjxPb6Pz",
  "key32": "PiWEmPciWCGScgRMkkH1w8Lo6SP7NtE1ugnLrrEdJsFcZzgJrmxsMS1YnSK2b9kd1DDNaHgge9goKphBEBq18tw",
  "key33": "kunjvc1ztZLAG9Fr1SVGMNHMQaqr6m9X1hHhAnMMcqnf5S1FAsg2FYbRLUgczLh1XBvNZ56oR4mjHXVaV5SBqAq",
  "key34": "4J7pjkZ2F9g3sL7879jfUahs42YYirFv89ereDVkPHNn1nT7PNzhvDGcaUmPomjCR3HjcxHnghf5wihen8LJkUfj",
  "key35": "4PzuS6nkc7h9iECF1hMTURiikoUCmaxNQHT3re7D3EdY4pxGG7FRumX7X7DNxPkSUCvWUG147dQBzx9nDoMkFv8K",
  "key36": "4nMwDY2MvRzkwkErLvjNtoFunF5udadg9wsNwEftRPpuqJtjtuos1bKq2NgApEi3x1DFTwQVSRDqwu7AnKuA5XFk",
  "key37": "57vm3zzDW7iLCYfHatnihhLTPJU7BpmZ9oW47WMh2Qv195yoH1X1J6Dx5CFxcJcBuUpXFsTf6dE1CHLafe4x4ouq",
  "key38": "5erjcYcqE7urfwVtp6iK1AZLS55crfhzDhGAGLh4EVCRTtB9cWBLLN3PJ5M9Gu5BmfYLbfALSeDgLaoGdiWDxf8z",
  "key39": "4fK4Ze7zEGBZFFr3qqBcmQTRoSLTzV1ui5bDZm7nvQ2XPYzawTAMdJMVZ5R37MxrCeMVvyX6F4jncR2ZbMWanG5N",
  "key40": "1ZSKupkEbSvhzyMjKBWQHw3okBK2pJ77a3G548JXzw9rRPSTefn4vfHx3gFDizb3r559vodo298xo2Ebtb233UE",
  "key41": "4EwwgYEQEx73QH4o2Z8Y3T3MzZahdGz74M3gUrGA6XVvvM5vHiSyVjCPHSbT6Sz22iVYfyEsDqEgJfr634qR4gFo",
  "key42": "2Fuvrc4XVvYisTZd2FaWxE2VLWpyVNBhDQmwULDemHnyM9Fa3bJxSsph2ptaLUfWBw5vSHooxbwsjjT5jP8YQMKW",
  "key43": "4ftjcF6w8FsjtnNwZEfwCvjZM1kEeKfW3DuVcU2DVHFzt2n3bvbNB7D2URq3STyC1LTAuGJi7doPmZd3VJguiuvq",
  "key44": "27jsTc7k1GVjSJzNnyjB92HhNaWXtjH2rwTS8AMu6EH9x7WH6oQ4YP6ae8uiQPeUdtzAqAGJHMr9AvtbRBagdiUn",
  "key45": "2cFwL2V82jDEKbz3eLRYbrM31Hqw1GBhHKrzTu6rmXEkVW4up4togj6XaTcEw2MrJ5oWQ6KcAdDEJVjcZbs72RNG",
  "key46": "3jVXQPXypn9Jt13xGGh6r1mKAPTcfT3TiYsfRJKvLG4DyL75dM2xywupfDf7RBKMK6A8Cx15RThmtTE7eSByPiFq",
  "key47": "2pJLu3MLn51U1yqH5bj7NvhuJLn16xPRixHwyHZEoYtBcurD72RHMuMaoFm2mhdsgikJDkueUZTQSbekpB6rCXhF",
  "key48": "281JuReeuA78e9L9JE2dPP7XEYTHgNngWPzxAzivuQqSocxkKshdGcr1ufL8yLs6P4ZYyUTpu6JDZnBvYwS2mmHo",
  "key49": "2pCD6NMqiHQLRAaH2rwoNJcB7zbZ13cmC8NfrG3Xb8cbGwvLNpsgBeL4uJKaYFjKkjC1QENSfdfz3X7BXCKrUSJP"
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
