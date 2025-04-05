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
    "3drbDtM6AQkLFYCJ7yz8vTay8QjCywahKhJMNi326VQHsNy3Gw7BDzrkBtFM6xM487KVbY3GFDDJYkZhCVnA4xWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rquPZxL7ehLTW1EJ2rRa42FNVSd2SDyLvE9AYXU1EDfsozhdwZPbbeqvjx5orSQKKySEULAC9Ry6M568o3MJc1C",
  "key1": "3hEhGdpyjMeHTHvRVHrC8egWLa5KLcgK1dETctKrduRd9g7yuNY6fj2jMS5L94SmoJds3hTPBycMNDktMfhJ5FN8",
  "key2": "2os36oUmGCA1M1xasWkims2ZwMW15nsnFH8AjW7sQFLfUetW1335LzddWQojXfCCv9mCtTsJ3pYMzEcm2JgWLJkA",
  "key3": "Vu3V1nK1sdehv7wiPkTemyd8PBo3qrR9mtn2UThpngYBrUiNLdMurVcY3FEGNhNonCmHFWyJpyqrg2oXLVx2vDt",
  "key4": "2vcUMqeyisYYGJxrtz144NhTyoCrETEipd8c7N77G4CDBLyW3qyY4q22uh6bLGP9SdccxJJhS4D44FxqdYq2K59Q",
  "key5": "zpuAvT7pP69tVp4RRFs1KEiQn4WhhygpJvwkGFNEmUhJyHUYjv6APxm8TpjRB9sDiHKmstEk7po93JpuGJ7AjtC",
  "key6": "je1yC8oHJhy7QbZJNyRNWcafGpA9EqdMSxMTH82sNVqJqQCHfMwYcRRDVffacnUdegY2iKM4thjwxJUk5HMPCQG",
  "key7": "5cUW8KvFN4X9MYijJkGTGLg7b3wttcx8yTHqaidMo3nGhBAskrdoh9sNS1YHoZV5rtL4Y2EXFD6GusRe6QxT3JyF",
  "key8": "58A3hJGW9gwDWGnpTvT3D81aovy46hVM5rMoZb6QEbtYaeu27WZvEkE1pCxPMyAG3D5vWj4ByBshc74goez72cDK",
  "key9": "4w4GkNbKyywYefG3MerrK5upTh4PBz9akmWoG2VxHofGi5gfbEZNZmqVBVhpiAHV7FZ8w1QYuL5PQy7yBS9cfKAj",
  "key10": "4ivFAamfsgPLSWGPXeb73aWf8mbEyCXUCDGwCxVriL7sdqEr3CEqP8u19pw2HycQtgepR1QV96rnWvbX6w6JFU98",
  "key11": "dDAx2XukmoKHmTPvWeMHanjXgrZnXduQF97spVh5ssgSQYyTVttcEiqdsr7Ndo9XNpDbHVG4NE26Z3oqLbUqbzK",
  "key12": "2pvdifDvWeJuxNLoYybQzsRQXT9rSt6HaZ7d1gB3pc4qxafTPCyAQ1bSpCHtpNRsfGtoq481ZdW7ktVP1sfjhiLW",
  "key13": "5RbN5aYT2VpVns8x9u6s2uRivb75rBvSgKnEoGhmhb3Ys1bJdsFSHH1VCzyMhpobPsVjbgYg5XpL8zjxnr1Vwfs9",
  "key14": "5tKvtEBP9rqrex7T1wRZRsJ5xXPkgfzgqiXG3Ls1uavzNCZUZAJdZuRZ1DL6LfobQwhxaSdiXeJBUAPFKvBUpm5o",
  "key15": "2fdrMsQnEnuQFyG3R5i5dQZ2vExPozHMwK59Jupe6JA6txfpKFEJtGxMwda1AsGmJ2wDcRuzUKoLVTcDFohD34Bs",
  "key16": "4oGcETRsPvce4YQbQ11fYDT3TNWgqKSmydzYuWZpsxjcUS12BkR4iZMafHdr8pVwDu1n8nopK31Z7CcYuyHPo72B",
  "key17": "3CuY9MTjwCggPJyf57GFqywGmXC93RL3E5D2DK1s89p2b9NuxfhSQxriMJR6UBan3d8552vFfsbyMueDnTFeGDVz",
  "key18": "vqE69XbQUYnMyVCpXcakeqUn26UAccHJMZqLcjKb7ysEQ3DcXDpKxMgWxqPNMo8Rny8sisAgujN5zgkdZuaKw97",
  "key19": "39EiVHoYi6H69uiaYUvhNAtpvuEnuHx2dHUoikSveG7JJLrs8hRqhpTik2mPysC9KxjDW2KTWnsL8DHJoyQ39GBf",
  "key20": "hhFUd85WxP6sR8aJ46CM9j181iPVZk8QJ9QFvKDcrYxMtWpxeUbUrtBAzpefVfiXsurUdzibeiiYU6LbmJ95HWy",
  "key21": "2heFRtXAyzPj924g3PPPUf4RTXm9DmUouTDkGofDuE5AuEd45tDVSchSugjAC8U7ZqM9u5RP3f3rAxkNFMdnfBey",
  "key22": "5HHHhgTorntvWgSjbYmrUch9xkE35jYWeLYfvEkjCQumxEuezad96Gikkc2EAgjf6HcZ5mdcXuFMNaa9BegLx6s1",
  "key23": "p7Aki6X73dsMQEX6DexfWg3V51uGQw71Ejkui4EVsba5yFAmsWMYgwVXzm56ch9cHsEnmjb8k2ySFFtujNXeeo8",
  "key24": "3a23ugsiyxScbx6LGaQM5j6pKwJA9XhRCChw1k2HTcq3NVFxdpd49nGMfL1hXCGx6S2EG6vR134XATUiBYTvxJ4D",
  "key25": "3RRvaRJ4cE7S9iz8f3hFey4KovYf4aK2bChKeSUfdQffiWuGn5a9fBn4wGGgpXLhTHXpXzdQTcH8PFMUqj5RM5HY",
  "key26": "3uqdUJUaeoC9XmQy22DYJGBBBCrdDqMqNE5UCsZmjYEu3gptG3wTJCjwVRZG3WMjNVCm6hPDJ8nR2yiwdosTEkar",
  "key27": "2LnG4dAVLBVwc7kFCjZAg76M7etfVapDvWKuHzZ6KbNB51x6dx9CkGmuNcHYygxPxcWiqaJXPvss4e1KGWpsLnKU",
  "key28": "4ozeKX8gkQdBHunNS7hyy9V7DurQv9wyRxjaZUbhwJMFjdP7CyhFeBHE32qaDzxNsxLJpHxjw3vHxGZAfCNejyJ",
  "key29": "5w1o7hgmSBPBn85CvxMRMqVLoJrAdvn3hR5TDbrrneoqbLRsnTn4qA16gAZEKQyBKj5GLNqor1zWzNUziognsRi2",
  "key30": "4ThgEZFt8Jeta41SmnNNGgT4qkph2cCCHfudBy4pHwwMrMaM2koZtTNmZDuAnARpf5rcPKoUGGtZpafRQ2Bgx6nG",
  "key31": "5Gnkgx1BFLeaCLqjEGdfK3KsF3EQXzfkmcBHNzaUB9yMGgHaNvvdfDtgVfxm7m92fCLdzFToRVH2FPPaexciWtU6",
  "key32": "2UsTMJJqYW6x7iS8V7XZjfFR67wi9GRvDNTC4uXC1t3rzPqCast8AV5MM5eRbeYrfLkKr4H91eGibV2rFCbfSjqQ",
  "key33": "vJc6PjEcUBkw3Pi9TsUPUEMdSNWrM2MCS6HKJMif18GypF2LoQJYKeKWvz9vJKZA7LgyqxjbkFhrr8vVVpWA6VS",
  "key34": "4pt2dQNxWswAQnUP6qd8Boeu7CURQKyqJXtWp41WnLWLhyfMp6FrCuZ3crkRNoXuLHGJaZwRdez2EWBKjnSuSt5w",
  "key35": "3ZzjTJajsuqWdHd4uJowjLPN6xsp4jMp4jv4JcTDDQ6vW68h1vwgAq9ij8tjoqpL7Q43v6aP2zNviWdrNh1hFH9a",
  "key36": "4Fhy3CcJAPsyFDD8to7cWcEJdsDXn5aaY33uVjSEzqJ2hEenQ3WUHgR7WxYfAhqhs98LSbeFSVKMSyCmb1mAUCw1",
  "key37": "JTdyd8LtrrqarmANimMgFnTu4hTvuwZgzmx6VfJAhDSUmUSVTa7M2gFzzzs7TpEK5aGHpeb1fKqWn698a9iLCaz",
  "key38": "3cSLR2pq32h7oCyMdnGryrQUyxw9oZSy5gjzppDQyoSpzaH79dhYAxBn93DsTtd4Ffccyvzwc9ENvHNVkE2vXvzf",
  "key39": "55Pu2uXpw7f6wDiwfA19GpK8PCsznzZ6DmKHuG2u2QSwwjaJMXDwbFz5Gq8sa316hd37L4zCCjAgdT9sdHJVHSCm",
  "key40": "612fBhtsRvTebveNohynr3Kxg9Gck5xvbSkKPmbG47zg5AaMVvX1ZTEbYy1XjviNjsLJPMk8Wn1wXSuygVQn1S2j",
  "key41": "QDRCnnrXsQKmAKbhzJmADmBrqLaUEJhZrGdx6t3fRNbdCWoXyGetaShUBAoALnYgvYZZBdDbDrb2no9ex3Xg7Qj",
  "key42": "3aFbpeAwMQx1KkBXStm1GXw3oSfMrdqZsTjpGmez6NeWzPSjPuUrv9VRZfWbaKLjhDjWLz73bb9tqzFNkhE5dxVv",
  "key43": "24NyTBfR6ZEGjRD9gQSthDcPWXw6vBQZiAapk3gHU7bxw5eRuam5PjpSPmCci5Kocu7XqMnZkaG4HqvWQ8LcSUzN",
  "key44": "3fiNbj9uEeRsmYhu8WoCDgx6oyTnbZ3kwuEpcbqpFj9CZK9mg3jz2RBXT8PZExLoFbK9jMHAED9Hm6vWWSqkQeWw"
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
