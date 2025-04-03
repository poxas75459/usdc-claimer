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
    "3Z7D3GtFTpZxjVSZYACBYQyLMyVoWo2v63B8qP4zSsBHhb9vpxznhb8D5SmUpZFw4xk2Xvtr2dwwCCoNMGqMHYYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZPsWhbpZ3WyFkYLtrTCrvFsmchszQvhZhyYt3vyRCEeFoGNxEHdBTXRL9FpGGmHnYYVJ1LjdxMB5qVwvxGKZxR",
  "key1": "2QBKrz8vMz2ipLGHFnBYgYPB2fJ2s7RN6z4KQQoo18ABjrnb57HaKzYPpJYmbCitqzp2hkjfX7GJ2XbhCysY8TU6",
  "key2": "5CQYzzyqRNAZpwvVo9oYUUunWf47KWjbzFiBTXjHBPoLAZMEh2CrjAXhSBs62dAVGXRUBXqpdgKgPn5Npm3asBKV",
  "key3": "2etghPuP2dScHEbxrzEGzpX5nsiNsaXqpF64F1b6v7EFTLKvURG63ejcgjp3GacNAKHofkgQXoAN8yJ2De6Jy2xk",
  "key4": "4qors5KB6TWMtYEBa4oCMmCXTtivXB9fWphG3xUX1rDfBzMq5UjTiJ1fzo2ZKQu5ygDcyDuk3w5ndcvmHjYpRryh",
  "key5": "61gQCATiQutnqJGnazwcqFw3Hmyd6zk1ry5C2oinK5VZhFNAxCxefUwW9AKB8Jsi78KSyMjc26DVt7mu9HMWxea9",
  "key6": "3qtdf3CQBkZy7G2k2bbKCbzCit9PTJuwhMy1hXuzTJqaWziLrQd1dtpf9xVSA6QRQcGeLBFXhH8WHP4pbQ6RiA6",
  "key7": "5wvWaQp14mLWjvwqGus89KhnuzPkQfbTM2X8uB8BQ5VxFjW4kdtgsUGF2m8dTEw2TX9H8u1i9BqkJkYGA3Lr1mKy",
  "key8": "3acbSGNmDoniGRNSNcAtvbntodvWrPtU4hqJgkEeN49tFfZYXZ2wMBgRXvV9WiMe8bzzMvbfE7HHtjdAC3FwP2Pr",
  "key9": "7vDkGnkeKkA3M3pxwjUHYfZWxhVtL5eMkWpsaaNkYLNUkWJvMNM8gLrcYa4uiUwDgVh3oLCzvp3x4gwH7mWmQhP",
  "key10": "4DfzK9GeTNWY97R9HQGzWQCUUGMyqteDKTtSvTCpfBZKPmZwTSeXebHnAN4rXtcn1kym1C29pPx18aKKyeNS1vSX",
  "key11": "vafCbxk5hDnT6JVLcQF8GmFK2DAFA38FUcNrVF586ep2EHPskx8R4y37yXqSpZKD7gMF73W5bSxWuQexJRzcRNu",
  "key12": "3hD3RYCgw1AuxAMYPwVfFTSpTQJNzD8rGxX4NjQMjhfdWRauFoQ2AWNUHYK1jhtvWqwRWJ4ZrboPMB1SdFBdFgEf",
  "key13": "356id3XJuyk72Xpmz2cf2uZw17NAvJwGA8PtoSsqRPmbxryETv17FRX9VcBo542ACxq1mg1cnS9nD5EuS5CTqTtm",
  "key14": "3665NAoCmZhShG55L21kdj5qHrzYSbcZbu6mvzboVHX5vbZZ9hXEUTWEywrV1iCuu7UaBRRm52YTb7ydTbUqU3uH",
  "key15": "4ZgUHk25SncGeLSNjiXwTg3aHrvn7Nfx4FnsP83ZLfssxrDHtXuUW85BaurzuvHEQ6KD9WvYgE62MH8STmPDG3zZ",
  "key16": "4KJVN5Lxmv2zik176XEMEFQx3pv3ucJGp78xf543EgT5MugU4qk2t3SiyKNBRT19JoPxWBs6gHeEFn4eNShfPjwG",
  "key17": "2yrHjRgDy4bMjfBz2ddMzvYm3JE1bfkjgp3sUUQcC9qKvQN3U6zRLSYKJLCMBNjJikCPU8WZvXRbphvvAkt5wFPX",
  "key18": "3ETG6asFyynzX4CB9YKdcQTkLShqBmcj2k4PA9LnytXBUm89mXuQezguJWKLrLdCKt8QjXSjWZ1ZCAybqNQrLLHd",
  "key19": "4ttw7REssy9RjBCbVvTvsXCHHuFE82cwa9VrqKiHVeKPyJ9voYZ36uEmqQqeUKS6cjgM1N4eP9SaPhxwxWjArufy",
  "key20": "3zpdmn29RWVpRo2QdGJLVsChdvVJEsKvFaLyDRhdE7WhfWRdkLcf1StbpApZAzEDQZU6NcfhNPM2XLTCA26niDoT",
  "key21": "ZRSZ1xNTK4C7C26o8txEiCJVoByQZTnBXih4SomxLfRfT51jMShP128wuKV38e6Ag4534fgoNQzpqnhxLbR54aE",
  "key22": "3rkK69xefBuWj445KkR7uFdaHyW7k12Yx1g1u78YXzxHotdqkT548wqHJk3zevgavx41YCBc2n3BbNsPsEgypHkN",
  "key23": "1byNcZn5JoHzRCiTmu7kskbNYQQMePiCjLA5EPv17YxvFoefTmiFeqVNQW4WCDt6Kmj9YGG65xqUDaJ2VyYqd84",
  "key24": "5YJeVW3KxzygBmHMpCiSqdixMJUotzGvbunCw6Jwc9cDXCU2nfHfTEqqLZHVWDSfPNoY1rGj5NFYjh9qt9pnq8Ws",
  "key25": "4j3k4vPutG5TYBwmG6Svu2LSuwzv3xQTpQUbPjqSfFkex3B5Vy4rXrgeFZpNjubCMeHxEKfrNnRUjiVstN39mfLp",
  "key26": "45U2dytL7tQNH17AuX9VuH6GGWNV2om8J5WuRJ23Y2LnEqaAroJJtwkg3sLPRadqLXahtatvWu2mewk2QwXDPKSu",
  "key27": "446T8JD6g7hPJ9G5P3ZhUSjs3vnUm5TzjFRYJxRtBbvjVkAq1SMYkiPeP5U7CUyMyFL6MBjbGKhSBJj2oepKW6CW",
  "key28": "36RwpoL4xmYYyDchC4xxktk2cX2zXvaPjHVmQJnzbQ1sDHw56TVenPPV9EbwAxgjLRfive6LLMVxryXE7c4iixr5",
  "key29": "36JKdhEawZd9a361Fz16NHfSgtBeNKf2ddWdefCcxBmLARhMAAuXcsH4bGNGEiT79rkqzex1VdH3KEUf3XB7Hd5e",
  "key30": "55bbTeH82Pop34qCBUshhVNx7oXKWRtYwvbRDEyXGQBKJBHBzZGE9SaCYKrcNTevPLUWtm5qCLK2bvK8MGX8L2Nr",
  "key31": "4CX7pViBTjYGAKTMtGojbcGyJhmUHk3GNFfS9DAbP2o6MnhxnaJvr9KSaFMWUEj682kZXNodf5uMRw3wRJYuFSVN",
  "key32": "gJv8LABFAQiNjUCECHNYaCF7GWWRN1GuXybMbhiWqvu89Sq5h43XBofEoBtvzjDCHTXH3mKLDHXgfz6TYs4kzBS",
  "key33": "2TPycrjNdWdNNTARvuWhjMGFhZMjxRgC2kqcajZ2PEdQoPyzCrdRkDb66yK9uzqWsmBfexNv9VspFF5eAZbwhJyK",
  "key34": "2JKVwSSFjPcAYS3cdYZwsGUrtxYtxVrNJJ89bZrYFdk92aPSwdbvzu1e48Rdzwn2mXNNeKHZx6em2Nj7M3gt99qx",
  "key35": "4XZ684VHt2ijZbn826TLSBUNo97ko1rKsRshr3sVYrbJAQmJWDVTVWBmeu1fmJABfDgDGNZGUN5h9VC3ssSDj7pt",
  "key36": "3DZ32Q58dsL9YpTakRhaLtYe6zau78G9vNa3VRtJBu4a416ahPLEaNAc7rhkZSj1Bj7Wok7VkQDGCLHA8fceHfFA",
  "key37": "5GLa1bnV7Fk2fk1sW63xZeh11EPWcjhJeUhJUY1svGEKM9voRBfoRc3ZTaoHh6AgMpyv6ZBY1qBC73EDAH9bNsTX",
  "key38": "4MVUHPSwF8KyLkcPtmeJDyf8RuWszomsbfLAUw5EUGgoZNb2YuVjRRjqKegEF8m9vL92PQXF1gbQJq8K5wjzhPbX",
  "key39": "4GPRPovoVDCTdsgy16so4oS2rXBQQo2bMQjXB96iFHfrUwLWSTKQy8X1MFZKAgQ21QU93x4tdmyxbrPdfPvLxord",
  "key40": "4P4qudxfSyQn3bokVeHkNE2Nv5RBCCQL4v97bvBBSTzk9kWu7ZhHkSXzLZf8EkjNaYjEBvJM3RgwehBjuXrtKKSY",
  "key41": "3tBJpCczhay25MGjiwS18Fx2hV5tUDVdLLLKQuQ1kqTAVyPhVxsXxq2hLCqH5BaJXRAi6gLqARLkJSBnwCy19j38",
  "key42": "EtB4rzm4tFGngBQhoQ8FHvz2swLSWef68vD5m2Mk8BqcxV4i3PoJQftgMBC14GdUAUgxpMfaPhMEFgCo4FUTP47",
  "key43": "4a6Nk85vyUGXsQgNMEVG5Boo75Lz28Tkk4Ds6H16Aj662UpyGuoMgLWxvyJKuCKEjfM3dT3jDxvcdsZ2mkag1Beu",
  "key44": "4ex1bou94qvpkEkcxDpbju3UpNDcSPvxaWHrfMZ8jythT6wgrcvzUWQdGpDUQGvDGMis7EobEhg3T4NHWB8LE5L5",
  "key45": "NvV5vgyY9Dkg38vV7kwAc92EV2SNsWCKrdkx863Dozk86Fo5X9TDxbo2AHkcFp238Qq9YsZ2wXRKXK3CqpRNs5e"
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
