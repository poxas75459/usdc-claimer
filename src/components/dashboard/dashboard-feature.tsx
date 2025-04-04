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
    "4GyNM2W4Ee2MqbCpFvwaPjQRjusM7fi1WCupp26R4Aoag8jqziMFdj9oZbVZnzXt3Kc3dNLrU9FVRrwsbzhnjjWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUuvJ2tDAhUQDhhqQzfLoWxkr7s7TuHtpR4EGRtKECziJd864hxSWaz2jeqvBMZ4J2QMSHiMgxduYeG3w83Hkc9",
  "key1": "2fD132j8uT74U4g66vYZP72hB4t5XbMKmywaSeJqbPtVKzzQrq91EYBfL5DQxVsR5FoGAWAWSoXPhqVg3YXpbPCK",
  "key2": "3pxUBvrjvpbz2mEyMazrYamD7ywr6Vz2tvRZ1TBqAHyjNrGxVMoSK1qQomh3jivkMbrSt4yPspKsbXHNL57N6vsc",
  "key3": "23ag6Ti6hcxGn6r1R3gnkiyKoD1r3X4xn4Xmkj1roXb3zXCRTyemph68K75esnjfDCsQqG1gJwFG3wyzzbmHvkMp",
  "key4": "4ScMosP66voncS6LDmAqA6qHyZHEgR71MJ4eCiNC44fwjniYoq5DExUtE9DZXfZjy2dm1fi6aQ7QL8UZbbG4juwe",
  "key5": "5nDinKyAxacDjpsf1omRm8HBPoR1VYBXnuL2EMeiSTFbi317ZHnnh4XpbQoGGz4ouV2XecxEiBJ59RFqUbzC5wUW",
  "key6": "2M3HWhuWRk7kGtS7ZncvUFGdfYc56uPUNvfKSpQJdK6qskkB5Xk1UwrvbMNFNUV1YkUyydRCEjRnDX5gCvfBKptv",
  "key7": "35m3mouBuGmJiremi9xyvm5QM2UJgEAP6v43Adou4QYnebRLTNHQrYPTtqGra894bxy54Er6Zz6NU1zZ7sDW9VNM",
  "key8": "58jByz7NmzJtwmvfjTupXhhMvBn55Jb3xySk7MS4gUT87JHmPAKD6m6xmxsH1KhXCsGtkNmRRwVBeNUqxM8xbh7n",
  "key9": "5QKNmWi9wMDeoFKWDW8P7pJJSUXCzvziFDoBQMJCWrYgz4sMuHzp6LWC3FUXfvh4q4FZ2mvKCs9T84RAdZ1KCpCU",
  "key10": "66foQk1BgHNgVBiA96bno73egvqTLxV1P8K59cptwwwWQRgyDNETZcvQoaWT5bMfS481HznSEoLyejwaR4q1zc4Z",
  "key11": "4DHeZKeQ1hoN4r1v3VxZ9cb6FACc6xcsonmxV9CVMR2BYT79GdmVhEbE42HAiDqRVSBP4Y1V433fFqXpHnhtcT5M",
  "key12": "5337UPo6HCkpVRgqkFYmVpdXR2PeT3yzsTcGTDg31ZkXPjScFZ5AWJhXJrdjYe8jNfYkHYxQxsZkb7kryEHXVi76",
  "key13": "3z82BrW3tpY8hADCdhwBN24q2qm1JtSgdsB8P58D5j1n4J2wjDJ78JYF9niuyTygGxNQ9TLXx9ckaxG56unSF3GG",
  "key14": "4cpBtJpV1jGfyCBy8PA7YHGzH9vNA8Z9ddtZc84P8XPLf2nDKvog3dKwC67Vvq2bwKew8S54smHFP1nfN5hKheT3",
  "key15": "2by46mHwfmMJqy67hBEE3CBBeveyC5sDK211omHqBFSz7zEjxsShTWrpwqHFWuNBNUTBpr2o81N4P4w3SNiDKewn",
  "key16": "4egLWXW7LDPqqdZAZDpuCLTumXbukyrsE22z23PprjC4fc2qWNFLv9RkVPMv3qo4FCYJ6hDixR2R7bgpgbkGkmkq",
  "key17": "2eqmLGQnwonP43NoNQ9E5AYHzPGbmWpDrd3XeCVhz4noxa6yBfsrShg6C5rbcb4J9ps542LRg9ygag5qaTDuRaf",
  "key18": "3sk5ygDrN44zhhz6yyyUkt6QYt7UB5Mg6Yiwa5FdDkv2Q2Cu6PNG1gRq3sxzzTLb257fFMD8QRL2zLTEhmx9M51s",
  "key19": "5cenLL743PSpdMnJGwQRgN82UxvnD6RKL1jZyw9ajbEZvmPQzUmmXPU5x2EcNGwZ2YaCVVmFpjYpoSGQgBvN2hKa",
  "key20": "5ceGR7UYz7GAuab8PMwFnTVdid3M49x4h6iguyCHqeFj4zy5g7rw3T9sD1aK4LJeTXR4ECZj8UN5DADTR8tjwL9R",
  "key21": "4JH3ujLaZYScDqpbVAnXfrwnyq4TV25VE4qah4CryH3VrWyHbisXZHTmAjhh2ERaiRXGjrXf4wfyt69pZUMYZfs1",
  "key22": "3yDjd4MkAr3PAmhRGKxfgVuWK7TEqdYcYQd3Zg3i6gBAn4ovxkzR5ZQgYwZdfE6boADYe6HuQ5dKeo2oLwYs7kei",
  "key23": "3K4tLyL8Hff1gLVRmH3ukMMxAafTD16pvvgWEuFhma5PZw5ADL9RreaSXf6pfP1hadrttMFyK41sJN618PCRjECq",
  "key24": "UxDPV5oFRxUpHRU2vPie5yvLdWyfo8eTRMjg4jHYRxqH45yDR1m32gFoov7GTM2Q9wCin2ihQCTfMvuZyCmqck2",
  "key25": "5HoxYGjAWnEgjTQWopB28EmrbD12cMz3XnjZErp3C2SSb9LZGUsXQswJquyNNY1eWscAEg1L3bX1d2kAvkbLsrzi",
  "key26": "2JRjhi91kt3SHzASbbUXARvTPQNVxVUYq5GnjJ9rqunjvBAifJhx46QVA5i5Hwcg3Nzu2DM1hJNqB4bdYj2svAMK",
  "key27": "3wNoFvaFA8FrNLGdGb4zxgqu6svd5wjgKnTGkvdBgTfaaU1ifhqt2LKwYfyG88VNs4yoz5mrS5KjNsT5zirFufHM",
  "key28": "enekECPZjqZKsiSMFysWDJecYNuPyutGrRhiVEUJTVLjp761JPjqFFUgEMMMWsCWBnQkds5tpWVuHXHrLGn4cfT",
  "key29": "5TgT3MbuJdY51uWuFd8HGgBEgiyTYLu4wwVG8VNXNTCkmyzHRcEmp9qbfY9Q3DTBJYwVkQKTrm7Kc2iuVXni8s7o",
  "key30": "4J4GsMRwpXWvqkiRrZCaRNw1CHno9j2YYqPmdzU3FEFTJ6VkH2vgZ1YAph84K6jhNUquFua1hK6mLx4EzehKAE72",
  "key31": "23EppK4ZZZoYgzEKeNwNRr1EeXKGyT5FmyPDNrzKkFgXAHSWBZsombBJngKcy5rG3AZN8JxBEFprA6DxjqzpgseG",
  "key32": "3oRw7e9BEZnbrBnSsSJaDE2D6ZWQXCuYLrarGCJa3xK59Sdq7ScFYivtHpSvuSqfkYb8VTa8K6cFP6JMp2vGdT3X",
  "key33": "NmWZ1VaugJHLrCDEV15E7JnRFN2LJFS9VZ15vYZGA6JET2f2La9yBeKfdtrEuTEkDjzsFH6So8pLzzkPSDzxfCW",
  "key34": "2bWYvkJf1dN9DuUwAXTEatevPUWDtrFKjxKv8EeXprZzosxbveZ2h2Uz88RkzyVGPnJ5tVmtCMuY2XsJYZnwhfoy",
  "key35": "5Pi5W7uUtMty5KhNy51PQd34e39paEjvGVdtwxYGCrDWkwUevSgQMLUrZuRrcp8dvcj8p4H17TE1TYTRWi5v3gFS",
  "key36": "47mrTCVbq76bA8UuG5LYQb36oFyX5CACjrkPpJbc4ibF7ohuGS8tk8HRCXeuQPfDX4cNqwiAk2vF4SnwP8xNo3BN",
  "key37": "n2birtb6Mjks2Fcw4XJenBuoZVrJTCyuMYkFjfGMeuNu88VCcYEtvWN7rwwcCX36uU9zepXZNdZGyW4MHTv5fGm",
  "key38": "E1jAeUmrDBPrMQA87XXRYKVp7FmBpv4r3yzxRm5w3Sbaf2XYRpTVKsPP8oHw94unGAFkePW7AwmSammNhN5w1mM",
  "key39": "2i8aMcP9wDw1TJrTEZ8PokrbBNWmsZ12ZkxJX4pxtDAxuK1mw36aSibwoo7tjmn3hzfPEwBUA2gFCAZZG3Gdehgx",
  "key40": "4o6BdJoTgYECngHQQr9GJXS1nX3KgdAk9nqmFqFrBpVq7x6gwTae8rVCTYiGRvAHodFwhi7713oW3ydCbyn5RKsJ",
  "key41": "pwv15XjpSHTCPD1Rs7KzGc7CDZTjcrqHjnLD6auUjzA2edGhCEQQTVpzbpnJFM93yq938kbWbKG3oEQomTnM3RM",
  "key42": "pstRuEKho66Vsq5iqKpg7t7MebT9o87F6AL3LNkT2d5bAx52GhvAqQURMH5WqDQbS2MzM1qVAND98JJcW36CJhh",
  "key43": "L8HLSBdfwhUhNTDqavi18aTuPuC6rnjvumqFTZreGmvkc9MbT6AEeFoU87hwiy84RMQvDuVjochHbatoXQUGf9h",
  "key44": "2gi29DswcGvtny6YpfidCgTLE42DpwvaRGqLLFFjtTDKgGX9ahheVnFZsZdfLDndfX57JBvazdruay9jEsfBTTFG",
  "key45": "2EsdQbCT53pE2uYNZQPEX5Gw1sZEUZd1uQpaBgBEjFrpC62vfkdnBa1AMnZTWV2Ebe2woe9Y7FyLCmMgedEeEeKv",
  "key46": "2KGMM6K8kgDjJRuES6bN698n2bbpTuMCmyVRqCjVYkaq3ZjU4NDbPhwUDBZcekJGQ2F7nLY53MHnArZEh826e5ky",
  "key47": "5XKzSfEGikXS5dWkdnpQJVxWUEthvtwLMz44YpfPxFzy6b1WY4Ha1Vfe7KXsQogWGSyjrsaqxJaHZvzKSwLxmfB7",
  "key48": "8wCwu1qToUhqE9hYKdz4kpLCcssqFRPMA4Hzb8o4oa8Ge3nd4fg7rpkWMvgMkhCwFYkbeZU9nypc5Hy93AcTD1h",
  "key49": "2QpG5A79fYsyUTTLjqfiPS83hfRZjCQCcYyz65hYWZEua4QS9F8bLqz4HsfZ35Z1UJM5B5hoPa1NVo37eB8VrV2P"
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
