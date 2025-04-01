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
    "2jUxmJGDHokWW1rKa4iATuqACywJv7TrXhU6x6rcwJrLhgVrQkcbY8ndZiLX7bnXyTKMuxUSdDDPe4Wc7W34cBBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EtvuUXjw2byrwfonNr42pJLPG1Y7raAqcP6NxqdKwNFGbGTF27fPfhkXVxVYuTzaSWofQhgAKffziRquyMd8Jf",
  "key1": "2CwDm2byFqkr3Yp8MDZGVHcGLLkEXTQW52e5kCK9LmumwMDiKR7qrhTqrsjqWmCAeEyCWTjpbNvSGs8r3mDEqErb",
  "key2": "5JxEzS3ForiteEufSoZYa4qgLLrr7WuDNubYMJjWSUBTwKBrmnRxtviVpuQnfSVLDzFCNA7XQ3feNDHjBhEcyy5b",
  "key3": "5EFDufU2s94kEBuGJY3v8B5XYPa5Xp19oWWxkfwEzSPyse6bnUPvnci2KEzqmgNdsnxZh5W4zw32bHihyifdTG4R",
  "key4": "5ZYDQnQ9JurDMy2vEZznt6pcxpCdkBDEE5DqHLubJnG9BTjzR75PHtUUowPU1PNhMF2AiF3d6Qe2jg1NXxrfvMq4",
  "key5": "5L7G5Ytm6o2gWfFiuTnsNscLEFRn9M8nuu5SmXME8EMv3vXXxwNQBMrG1Pi4qMrNYPZYwsgTv5Jn44TxgbzUtEdj",
  "key6": "5FMeu1mzU8gDcPk8UqyXmtvoMukKG2NN8v1vhkVuc5qWrRVaLSqPaDvj6fdo9FWP663WWKij44TiZXxHVMsHU8wJ",
  "key7": "4WF7hwzCBRPXFduomWZVT5m6p6frWL9c7FQ98LVJ7dbDve4Wod1nTcmp5BKs8Pus1wYREvj5B4XChRBZzYmHUCUV",
  "key8": "5vW5eubB6BHvr8Cwfi99GsRWw1mPCyS8Lnj5TTpR7vjNFekuucd917apfAjwKugYDDgWJfoz2i5NKADDdhG9S4yV",
  "key9": "23MTyU8qtDZ3TTVBQnjcGGKSfa6mwYrsRLGAKHjAwAs9F6dKF9cVVdQNQSXMaxYPMRtJaCicJB5fJHzWvnGXCY1C",
  "key10": "5qCxCGG6jjFqr8U7cUskyBLqkKusdS9EjrZyQu7uUC1P3Eaa3WVsEyNaseazJKJcLKWHAwDCib5dtCMrmAsiCQ6s",
  "key11": "9yru3QaJ4mqoV9t6zrbRpnmruzJcdxg7arR8FnzHoKqyXdt2hBWLcAyVvvrnXXB6X2Xr1Bmo1FZgsxPMKoANiKV",
  "key12": "ezu1y2ihdKx6Fz4CtezzNLdXQXZ63ieqSRqiByn6jRx8mavEodCEYfSVeQTHMpHR396b6untsvr7LrL4HBdM2QM",
  "key13": "5m95t5AuBnxgZVm7N54EiGfYJ9ZTxo7LxxQRFZMYzj5wKAP1tin2Jtnb7Z5vJk9ddy8JsFTdJWgGkze4BaRdHLEj",
  "key14": "3dTY9BAtAye2ZpcjcWrvbHGrTMgkWe8oz6zdHicsHQvq67q6PoozwjSvK72CZzg77jvkci9wxQJC84rRCoGHKgcJ",
  "key15": "4j6eS4XRE6UhzZ3x99qpTKpU9KBUhh7zzLXw8fjeVo8PVdPnUsTNm6vdpfENMx7PsHmoYkPV9b2CDYi25DGEPKFj",
  "key16": "4h89wQbqBMoAS4XmKpjHCdQ6WGTBiGrfyL1Q3SQvs66c12TvDFrKkte9cmnNUcG685gZ9VCZkErj7GRSSS6cQ4rM",
  "key17": "qSr3VKq9L8sDRgr1dNkwKciNLkxHJAbBgRdAiVfQeKBEbVEgmuH72z9AoYQLcSbcriRLoTZZmcFX9ECSsn1TkyH",
  "key18": "47hQ9uxtCEP94LuQdDha4feBSwpZMgRDALTgndadCqwoU7DXMMREHuk8AoVDyqufB3pvRwAvssgqvJHvTsb6fjg",
  "key19": "3Rj6Lj19H3Tdpih8mtSUUUxheKXMQMehsWKHaJ1cNcYz89SHCQYP4i6a47p5m5Ns8ZWGQCk6XXFhy1NiM4RXkxrf",
  "key20": "JCDaEjTnjeyT6yhs2W5YNpvYuMgaLZX6PJeY6SDQMsJ9xMDGpo1zaqzjfcddZid5Nu9xPerZyqxbjaEw1pKM3rg",
  "key21": "4CpqFPReqwLyNYKf1CDVncDeQoqxbQqvF4sAZAzEHRkVBMPXgMhHGUatVmEMXkh4XaF1g7vT223r6RBhfbckMBmz",
  "key22": "4D1Qk5XYh78eyC4YTdyQmYoApLg7VuV7PeofJ75BeMmRWnKstXfy1Mki3iQfnaPKUwm8TSbhwsuoPvsoNMBAsN4Z",
  "key23": "4uioAAGc9EPiKz99fhKYhrkAfpZHerKSQwdDKzaHSsARtfSxuR4t5G8Ef9FGizpsDo9zhLcpruo3NfWq87mg5cPr",
  "key24": "5hxuBkbx73PvLvTXorFs5cv6U2MmHcJ619DyVdV81ucfnvxJJcz1uSX8SaBE3MQvssc7VbCZwwXsQDnbC6QLjRqa",
  "key25": "5S4rVo3ZnHHHUtT4D2PiUTCHRxtKxTJWtnkkumrW92iqmGF33LR6kn2YBeDQM7VWDn87NSHbU8V2rGMLrqXBWueP",
  "key26": "3aYKXceMQjNEykRUQE6hG5pj6UfLNXjTpUK3zn5rjZTpfXHrZ6cUTAj74Y1QwDWryoeAB7xBFsazLNzajFCmGDxs",
  "key27": "3a9t9VSufQncmSZpcd7M3AxC7DrRsy6yL8o1mf52sRHaTDfoT7Hc9E8fqmp2qfjrSQMTb2SB3vVp9YjqSwW4oarV",
  "key28": "4axUCDrnVruWxXXd1AYUMqcC38p7xSywnxKQgLS4BmDzknNmRBdfF4eKxKHCp3yQAnhAitMkcvW8w9ztfLQtnLyN",
  "key29": "4171rQyHDvPKBGCbyyqqwCbeNevpVTJBY9ABrKUnFtGg2D7KaxejQQaVvhEKge7HZHKLGcNQzkRchcCFT3oLTjEB",
  "key30": "4j8AkbuncLL1HVGv3ybV7FBDcVZoE2K9QgtSiRnVpBSYCNM9D31fAk4ysWXd4zvcwdS8998J2mipTvfoT1mU9W4d",
  "key31": "YLYKsEotoRu1tgqXAwDR3xmx4z95XG5HHSW6GwKvJDGw2SFLFcN98YpRtZKCPutQoZUkNuc6UZUjcnt6UhYXhWR",
  "key32": "4uNZwmNcHpx4Y6zGaG9dVSNSgt8X9Mg6E7CVA9xWuCPPZ9zw7FFBLwL7YY5KAMLspD9A16JjYu5uFnKfatvVZvNk",
  "key33": "oUWp83gwBTojfA6Jx36PCVxR6MW6FTCbQEuy4dBjVRQX2Z8ohkaj81BVcStKBAab4VT5YkuE9yzUpj9jEtYDYgi",
  "key34": "54EnzXjjcu2aFtnR6s62ycyX8z3vgJrtFx7QaoDANdUSF5o1f91cG5PYe9QJVevqbg43pnuMuCSx4GknW2vufS1x",
  "key35": "4rY9PAmPynSkRYHuJjL6bgWpNBkEZw2dLdu2o1mTcSviCwN3hGVE3waudLnw6ShanpDaT4q1hCWdnRVfTjJTtsxw",
  "key36": "26xM6yMwwVViwCo9kv5DSDmrfk6LbQcFX6ibQhnSjWh9RH5vMaosnerEPkM4ETef7NsLDHQA6jSEf5DJYcVe1y2f",
  "key37": "3UGnPZT6ybeAETM5C8katWhJKFR7bHviXzPHeNAig53beJafQxu24o9xjM3LtfN8bsfQQpQ26rwh3jS8fYShvNpW",
  "key38": "w3xYEcJ7qDAv4FPgGAgxYH9mrb63FrgLKtJRrtRoarLg4N8rrYpQs6WBXEpdhPjhuhQ5K8YwvyqSkLyS4DUadeN",
  "key39": "5r3BDVA8mEPHofXXdSGW3HjvuLi2SpNUoNKBRqTa2ecWJg5SmcZodNyoiWuNGXNNNor24LFJkDpT6eGWZQUGykd1",
  "key40": "561w5LPZVE85qP4q8rw7Es6ayJRavsk7RFzEEkbhuTuhFT6EFUd5T2TySVb8qe4zv7DMEHzg55ARWJFWBXdoGJkm",
  "key41": "SZEExCyXKGZ6wK7aTPJ6oR71uThgqnUZTfshuqnzkMHY7yLTeHswjkXQwY2D6foM2arvCAW3XpH9jbHTm7zg1MK",
  "key42": "QKMri3cwBo7VnAP1VzhMMogdRjdiMaVLxN5cxEMnrGLCuzteMAJDVjr5CM842utddUSebQYLypYKBKs7d4mHMwz",
  "key43": "VzBK49UTKCTHKKRmdgREU1UC3jk943Eydc6U82q3Vee2tA36TDkXqzuwZwFLocttLMcNrWRNLTHGv6aBkNfY8Z2",
  "key44": "3RY2WXDXDhXeoKddWeP8VBcWKyPoe6RmCbWLhE86cTUiXSwNwj5Lj8Ge1WfTw2ZebGfhzM1jiQYXuTNAgQWdL3nT",
  "key45": "2B3cFAsF5EmjTTWLX1BvVMpxyp49CBHzfuW9iyi8Rn7MiXqPALSPki1akboQHjLfpNfTEo2zTgVhpt9wFtzhm7KV",
  "key46": "4pUbA6w8y5KjkepoCmNfR96eAUtZDNF9smh7aiK4nBQ913H6gsFcQXcTPR4QSgAomJGKwtNpaSxjsgeYXM4cEkLB",
  "key47": "4eEmxCgYaALSZ3ZeQthKA8LRP5c568yyK4TwtnU4iXnp4brt81J5Ty4N9Z9eY1kKAZhykCx22FHBp6NVhbjxJpXF",
  "key48": "2tMeoD8qqjjZPqT11W1zhJvPHjWENk9gHGi96JLneJdYJTyD2fPrWEM6tyF1ravjmfXL9PavaKzTupAXQN4Yty6u"
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
