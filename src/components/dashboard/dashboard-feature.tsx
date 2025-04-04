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
    "4Aw7UUiFdTdbk9NRJ5c52Nx9iJ1CAXvxBC946X9GTom8sTMqKXdLSq75D57i8XUHRr2u2DotQZWB32a7gyoX5F6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYcEPZuju5YXMiY5Y91vbwKYSUzWfY1AxCrDzHdEyxx5wgz4NNG2qVEYAm1eU4Qw3uPXiJdFprZS3d3km8wtHiP",
  "key1": "2yi5uB4Z8CkkF32EUQdFhhffGbx1ev8FW4Z4PwVHN8rwrZ6dtwVeJG9HCwiTu8RqccPDf91ix6aU1s6jawTovZva",
  "key2": "2NdReTAXJoW3cYFjETzCz2Z1fQDyw8twbCmJ9UxjJC5VAwi1C83r3sWdK3m4jc67rxLRzpTDHE6nRRJympLu3atH",
  "key3": "eDwbBvvpJfB6N8hF3VDWQdAaRiK3ScPPCS5DGqaN2i1zUcwsDib6gVdmDtH5Xq4GCbznj99cVZTStMSLqGR84sm",
  "key4": "3u4sQvXU4bap3tVRQwArPY6bXAU37kFg4Limyq6JKEbZXrfDMZ4fNjGDAvxvXsr1CUqvbmnUm9bUwRKuxmUnQv1E",
  "key5": "4dKVfnGfP4viuMHQnpniKKtS5ZaiNE96me25CVWWGwdPqsZr4SVzK4uQg9o8JfeZeEQrKgpJs9FFiiWkKPRVM5A6",
  "key6": "EGvstwBN2XFLHVXJQpxWsZMQRK9HVVx65bQPUuCoFw9r7XK1sgWPqq1VSaXvTZgm2Z9A5fx4JMoJFjLDKYBR5ij",
  "key7": "xgegKSYe3owTh1u9K2hCSGzFviDwqVgCe1Pzoxt77DBPR6YQ52yhkgichv3rhkg15aBhSparFm3J5t8BPZYmCY3",
  "key8": "jZKEpwekP5YN886x7UgUWga6sBERYR1ujHFGNQ31xWqQE3q7m5RtDu18c6rVgtf8E1X5i9eaHGaCNfFrTGr2vXe",
  "key9": "3KjRoAVYk1hK9j1ALWki2rrrqA8ctpbxBQ4TcjWxwVo15gR7NqeNQURJmf9j7V668AFaK4e7E8aHMYqWjFGxTEmb",
  "key10": "63DCDMtr6QJ79cy1SrvqFPgqeaXvrLmEEENJADkDYpuwHB4f6LQeiVeXfdGUEV8wSWcpmzys4sgehcukuyKmo491",
  "key11": "qJ5rdny8dkGUhVE5eGx62EpPCUeHSfTnwH5Fq6YRD4q4BxFqGXSH88NDCq46wCAivA1N2Azb4o5rWWD2YrSJHMP",
  "key12": "3MyXyaMqVWxzFERUygP7ajVRPS9gVA2aMTLUymEua3TjQ2bvaQTrQDYV7UXXc8ZjB5v2U8haXGAFwQCz6iYZXS81",
  "key13": "2KsQX82ot6MsQ3aNCfaabMFJA5kaD79QWpeRQuB5fFMfMkUbQ9cxLm5qygwSBfdEGs5ZhWfQg5woUPghQHmm3nAf",
  "key14": "51cdYnTa4fU2Edv5k846CqPwv41vGiH1Y4Bc6ZjqhfJswmKkaDq174KDaNVDx1NfoZnVDS9aqgsJXCnQeifp1eYs",
  "key15": "5w2sDQchKxMox1frG5fVmpsmZduuLCax5N4w66292ttQCHmfkfnabSriobHSy1bJNs6nuVsGRUKVtrTiruDW5mJa",
  "key16": "geHAjb67TiAHdAdWKGiStjKNzsrYLGGGsne2fBsAtBy8UDhxvXm3KaBRhDtKQFQN183cQEAeV2ogEixNJ8mun6s",
  "key17": "2oMeiiPtoxTRMpkLMgDsxpeyKzBgknLCX6sNY1S4RUMBkPnPbMmNpuYWdpnvUBM23QDtk4PfbJFaey7fxruoyq69",
  "key18": "62zVtfQWy1DLMY9ULHBmFeXLFXfUJh6HRpazYr4gz67rnkZ2Sj1ZTz7eRfPG3aY7EVCT9CgAZd2rWX51ZMXTi3Md",
  "key19": "4GZjxPJKv8sHSWsgsjmiQqDZ66P94NaXPhwYeZ8cVhT2tADxzPtVCzYSC14tb13bVWCw8qjyTY28Zi9qjqDpbq3k",
  "key20": "9JrBQ5twsaWt3VK3M1HMDC2zqrLYLvDhKBpS6S6BvSnLVR65jdJHgnCKQYJU8pKPCNQmnaSWwwtxPDQPAXf9BB7",
  "key21": "67o9yxgM2oEqCwifZmczVhkMLghckCXq1fboZ2XtwC5LwED1MV9omgDbPKXvEDhvd3vF65dyqgKgncofyBLxuHA3",
  "key22": "5BknZbcGDitCyvveT4ono7XBJtFj2LNF4n7NpMo2d6oYQzehRpDoxaQuqPLQuHLYZEJEuJ6fu4pHydw862tewiqM",
  "key23": "3HuFLF3vjqNJ4snAPm1az1sF3v16nTspeweKyPKRkDJU1kbgNnt3naRcngzZjX1G8HpLCke1Gsd1keeLpoEVeawt",
  "key24": "5qcApkirTxe2TyfktbJD5WAUBzZcnQunFXZzazatnNhbj2YSqp1UJn3RX8W9ZbibWN9ggZZZoPUfKvcEns7hxWF6",
  "key25": "iEusPpuBtV6rk9NCbdUz5kfRc4Dh2qCwUb4pYPZAjyjCPecLBtrpdMMzSENoVgc5TXciNtSsKVNLyrT9tghzUYZ",
  "key26": "5AAXuf4ZbbPnhmbKs5noqSzVrQxrGtyEaMkD6KsJ3dGrMVdJp4SXDdu6tC42dbTuEdwZDMEAp8rBpbppjBH7cBze",
  "key27": "qrtethdyJAM3zbDEpcHeanhfdvm2DXPGheBFG9xaHJW3HY9z2f7JpFVVSoYJt5psDBDsLwLF9ayHh1XvxHqV9QV",
  "key28": "38onf1MQdszzN9a6YxNLGHKsi7877d7h3qztq5SnFmH34ughgiY5yrTueRkXDiC3Sqi9Q6Vk1UmuzwqBLdtSNNmc",
  "key29": "4aznMm6gxVmZTEw21TiqH3v5hh2YNALhhp2WJZo5EA38xoFdPd7JF6jwNmSX4tU2qWunCfofrx53QGfMjfTbGbDz",
  "key30": "SJ1pFkvyFgD94pZ6PQxdJQkCSMuGqjTyuGXBrbyXSsWCqcjiT4iBMHmiphqKK67wspyVVt68UnuFVo3WUM7VoAy",
  "key31": "3sDgscC6UoTaa8HF7N4PjtBA6TLg3fLDuMQ9gS3bL2HsdfXyC6fpjVkYCMe3puGp3TeTAtjrzqv7oiuyRtLZydPz",
  "key32": "eymwFF2Vc18wwBDCaHN3fULM2n3zspzR94GKhyBbeAbRuFwXwj2VhEErJTLvii7SEDFMLQodFz4jjBB2QdjSaCJ",
  "key33": "3GWhZBfwR7jAbhE66H1v34nm6EX3Qcef7dDvbujYsyEkFpnzvBi2fLMRYRgjXMGtkpPwoKtSCm3See3fgpMH29GL",
  "key34": "4wLETFjhsUdaQgcy41uVG9GuWPNEKwQm3TRDfATxkyoweygXYyZxLyGiW2xfaQj8WNF8x3ox7vk49BkmW87YvJBd",
  "key35": "4KzhYyW6kpx7LiGkc5uM8vuUTeTS4AhEobEzhk4r9KFAjyHYbpcBL3VYqcU9YbRiUTwetmMuKrz1p2DVQoGHPFkC",
  "key36": "4H6Vu2GDDySfvBL2ioCWeVKZeNAxtLpeDQYPnCw72dG2eyfWSYBbvcX3YZbWnwTiVs9tBVUa679y2prRVZvbRgRf",
  "key37": "4ZJJyY6oYER9mYc19PzsNk4CgSrZkMjnZSLtSzoBzNKPvwxmgKaZkt2xEdwGt9DYPs2HnqaFvrTiGtctScutrGhR",
  "key38": "4XuYxdJ7UiXqKJfsGVmF8SV3Lw4Yp8DrQ7BA6KekfnrSLhx6m8mtG6TUgYcs4H44WtKq7uXtnQyy6irn7UncB5p3",
  "key39": "4XEtMLjx54VzyLPHvogonxa2PBvvppK3aYPmX6QKV9qLLth7GH1tke7QoMPFPqs3r1NXcgZS4CNMRW1UgxsHuHJB",
  "key40": "3jwD2Wqs9TZ7kALp51RD96Jdo37LjqnVH1q4xggnHtj6aAen3NQGgXqXHpRvjsR7C7qCLxYV8oDEma9JtfYAXdjS",
  "key41": "NQdsWZXoJBQqtovB6ZqA6PCeE2W5U54pHF4Q8Sbevv24pGj5xfuXvE8cKG3kZ7qhRCQ75SYcB87wBBwVpSFmQRU",
  "key42": "uFXbjibXMRHSCSouPRDDg9pmXfJygPCE5NG5sXbWmd4aHMfAVHH17JmavR4agL45TaiDgAgH4mKJoFswpLWLS2F",
  "key43": "47tnoFi32817uXPhu9pikyLyut5DxAcfaRSQJ2A2tAeAk6UAbag2aofavS4wFeTDfqUtUuJHfmt8mbRgEs74Q5xu",
  "key44": "5QMkgzPnfmoFpZypQSJ2mvMnTE7kacpoLiMGv6UBiao39f6FAHvYhx2pDnoJvu4SAmn3929Uk9K7rXLiLDw3Taxs",
  "key45": "39oAaCQ1RA89QfGD24oEpehS71Fb61bJHPSddnz4jhHZ35hKpNAk7xMduBGKxx57nr5xv8etq545t4ZuoEjyDrsY",
  "key46": "5KKfQdioRmbA7Q8g9dNCRg8WTzDXRjzDStAKVB7s2SpLPBpb5HX5U3qgVLSheMQA3Bi5ML6PMw5QXEuTACALH5qv",
  "key47": "3GT3KR28qx97ZmDFdeLfuM5NmsbL26g7EHM6FFXDeW5hnEY3cQ2hTQze1zD8ZJLnYcFM2RdLTwRA9qi6BXXqMbRV",
  "key48": "4YVeLEDbsuFFqfM1KVHDb5JmrZJAWQb2HSk8jyaYyGExPZZq2uustWQ1UomWvaKq98fC2jS9mng4tKUTVH2uB5SP",
  "key49": "2kz21R6bVwW5Qio7mEft9sLCSohJKrivGDejwZED1Nvij5LtTn2cSq6ra7pKJqGvrrh4rHYmUb5LNcBK1Mj6XdT1"
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
