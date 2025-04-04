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
    "4UFSz16KKyktBcNLJqV9vkDojbFX3bzfYVy8YprkkthC2n1isVhxtkSqvHFj9whkVFoAFVJztiBWS5iJ1WsxcMGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obP4Vtr8mK7MPahPn6i3J5qQGKKuMR3zGxJYTpPJgXxFZGUJ2aPQaVK8Kzw6exRuKTrC1seMyi7hkgKyZpNZHHG",
  "key1": "4w5PkSZ7Dr3SYNy33k8VDUab3NHna6xosh3f2nkQtJHp3y6VyMBaQx2P3XNwawQnH81DWsqy8CYigqTaYLzbd7um",
  "key2": "No5oBb2EiT3gkNxZbq1TP1TzNjiiuLPAxtWQkjUUcsUCKEN3Z4HzqwLWH7N2NkLA5uXeG231kKQemTvQsJSA1Dw",
  "key3": "2hPjMrhQpd3WMwRAUueTg3dYJANDYDuzAV6K7kidVWTZpD4L5tnoV8tSYRQzVxb5DNV5xowYvVWahF4j6veQ8vo9",
  "key4": "3wXxXika7UttaMjifxS7pcbJWxjeKvmgyftL5qMTm2HDsKLhCXVBgccQgsaCDHrGuUdCmTBgh4uH9moxoCRjU5x5",
  "key5": "4Xmi3bKMQK9jqG7HGdtp29nf67Vu2JrEweTmFDa4p6FYUuPBXPMp9FgtHHViUeq2orjBxZmU3DQ25op4isawHz7A",
  "key6": "axHFdzcgpvP5hRQfyxfpe4JfF5PTYaKYnqBQA9hLuBpbeownWzGMv5gMowepqKXafMrwCPJ5rPSjna6X8epQzy8",
  "key7": "fkWxRLv1iNu53Vhpt18uYFdFWZnssHi51HWgX2PcxseWWNatiPkktcU6tVwxzZqHoantjLhdK96aX7EfjT3YRAF",
  "key8": "bhwG7L4uagpAZr7zmwiUncX5j4utFzwZJj5LbXxbT2HsumZ6Eenkuvd9zAnyN8ionrG7TtSoGyNov4oqs73CjRe",
  "key9": "3WaKP1GydNktHTTCeYKVuWc8Fe3THrdz2ieFogpPgn8T7yipcaQu1v5fmxNtuzApVhgLN1iJ4WjktDEPSKKUbxZ7",
  "key10": "3e3kXTjF7wGuY9R4pZXayzyN3VRbxBfFoCi1fVVpisxNtjf76jpNNpjogQpv15HKndJLQwo7StAznqpzxH8CEN3",
  "key11": "2JjA18zo9z5R2zxKZCDPZokBN4n5r7h2vkb9wubP19urbw6UhoZxyZFeNA5rW18FFcxaLadsb4ftW26pHxyqEjHK",
  "key12": "3hQj8ubMazPopB98u5YrPMExL4gtjRHaK8JyJN5g88Qu94rBGwm3bndJfLJuJknhtx8KN1BzHfCGCFZRTu7z5WRA",
  "key13": "3dHDBeMRZ6EPtSS857x9bzVymgABtn5yWkxTkVfvYFFLeKNGXKVGvWsJ8xic1j19CqUhzWneqJRZExP3i7WSsxX7",
  "key14": "w2Y1PjBw2u2XgsegTcUscNZUwvipj1kZuJLnu9H8aGSK5CooHi2Rbq54yi5mCMxQM14nR3vTyraGGrsBgnnBC7Z",
  "key15": "3hzoxGSz2SsX1kgRk3N2UiUqeiMiHoCgM4J7N9oMCZaspUXaTiDMVZUGsCcsCk1f6ffoB7Wp6R1DXgwaK29zC7sJ",
  "key16": "oMu8KpHbF283rNARSpSWRNceADoTPAvfKDmbADFVaUwS6szG3zkmzFzfPy8eQY7jUHatWaQjadUwX799CffD1eo",
  "key17": "ASXu8ZAz175Y4KHTPHWGJv18GRxUhRcEFSFcGmGYAdjpnVsWwb5v8JpWbV5ery4SYp4i9Bm28jLG81a2uCPYdL9",
  "key18": "37bwHhb5GGN4Tb1huv48MCMEDJbUjusssTHY1PXdEvN7zq8woVAQW1porv3tHrNi4EwtkKfe5c1m58z9ZKtTNoCa",
  "key19": "5c3wYmBRFbLTuQ5PckPTYaSNJFrYpTLP2N2QLsTT6swxLbowHqfhp4b9PjXBN5vc55ff2Lsn7huvzXsNrexfxhie",
  "key20": "56xaGykuqGYCtYD65iPagANMn1HsXrGDCmTWmRBQJWXpbyfVPNuGePaJT2dJPjn8hh9AbFabWuMtjx7Yv7YXwEFu",
  "key21": "5aZwyGRYP25en2fEHg33GU6nBfN7oUS28tZ9zkmihZQvm4xPjt3Mvkp4z8BwD1px5KALr3qD31mBZA8WSrMvsA1s",
  "key22": "YLf6EKGDe7EZYbx4v4vTZB6NyeeAUuDz4zZtDNVMnFvAsjWNsFYq11JAGVURzMd65fpmdDRztQyB5Ayf6mEhoZW",
  "key23": "4bemjnjnJ5rWcQ63Kf5QAfgxLufWj3GkUVu84KNkg6uvhgKmv5wpdVrTZXTqx2h4J8ahrnChDxAEZ8rSffcBoBeL",
  "key24": "4ut93y4h2zxx1dEfh6nqufJe5M9xfM3aemoCzrvhjpSwEYhC4JvRXEy5QgM7nH7RVok4N7dBjYPXbje4uC6imsjo",
  "key25": "CWN6sV198e4NpB43Rf6HUMZARUwcLHSsvhVnZbqfd3k4dkBHh6kTKmNUxiVCPZPikZG3bw5mChUg6wJkBZZGNVm",
  "key26": "ypj4mCycSzduoEqLsDb8Ene7czGuYdRznMtrQrbvwzW1Q8fkKkm8TTVRLGQuyCeBkYAog69yWCgb3r2kUBALi1t",
  "key27": "3YEJZUfvFRZKU69MJayYyhPrG5Z2ykgFkpbpMKLZQhDwFuX9uiZywUKGQbsq5L4REeT14mrFNADR9D9QoSHsCCuf",
  "key28": "2DFKox1VcbrLSpxQwNx4cA1g9yBTvqWdNTnyJRJjT2S5EXpgboRPwzkKNFGKPySUZUVn4m2UJevVmVzTTyDu1Vfq",
  "key29": "57iXk4qvWnfAzdR8wEMQrWVUUZjpZBpMLzuNB3DwnYXQ3A2cWPMhXhp3Sqadk9ZyseMEPTNyHq2FEVU4mLEcbV5d",
  "key30": "4fBSUMKMVNDumpGmb8xF5WkSSqQRyE94aU5h6E9GjS8H2XTaCqbASR1pL92hWELk6VbzVuHPg8U78JJhTmvmPC7f",
  "key31": "zQcXkps32EfFQ4RyuNUGhikM6WjELyoqSk9ZTrEBbhbFH3bAaUMjN6RxpAF2FZjqBSQhHPk1JneTCrpnPXPCnYW",
  "key32": "3VccyGHD3KU5iB7LqQ2C9zfmoyptScsWHMCqGVh2S4LJv7w8NgCF2qcDKEHKhDiqVZxnJroBa6nGr3dVxMG535Pt",
  "key33": "5BLvSSpKgpQzYjucHgqsuXRDL4dZZ6mQbmpiYGET1MHL247fWM2wRg57JDSnLyUct9SxcAqSY69MFxsGqxpa2TqP",
  "key34": "5nPE7zC8FZP8X9LxSKXpB3PJ4dTybqm9X5yXM7ttFeqKvRRaU9j4DfKsgjrgC3sgo4ShgHGUegXhDc1RtFr9fbpr",
  "key35": "LbfHFnvRKgW8SHSU2PGem1aMMExNbgofApDqhhLE8ojP7VH1WhbxZwM2Yqt2aWVgViD8EXBYrzztSoaxCym9M8M",
  "key36": "vfr3Q6oZEN6YBkXBUafnK2xgoKq3E3NnJBLgqbZ9G3kJywoeJ1pNxFiGhXT2QMxj7tR3qryEjz1WE1ufkw7cvKJ",
  "key37": "4SmWvVz7eB4Uen7SZPTQgn1vKJtmN6zpM2snWkvGUPqo7kQMkxa5XRzntXsEzH4SsPwRet5uPgSZBpvZ13LkGHDd",
  "key38": "rqxzgMUPbZPAQmjwwVzcxtyEtTmk2iAiZWqzcDGUjB6HSZR21mWXoHPA9RgpVdP8LfExxYqHxvcd5ucYVUQJ9XM",
  "key39": "2r7n2tTRUBNpoGHFF8Bo9xoFhFVQzrJnZJKNFVpPCsXyNAgnnypgn1sJ5zHkvEd5cdoVA2iue47aQZM2iXBkRvJd",
  "key40": "3RSxn12YFYSWNtuQywsanpamrgnQfH5ZNNaKK1KDuS514AhdUuVqhKkYcnAQu5fJog6QLNuSbryWfW3PX2gfNB5z",
  "key41": "rCvvyePBkHHo3kKVz3PEuaAGnKHEwYdVNc2nqqyJrHJYFNfzAVDZ5jhgyXUEK6eSAsBcYXWV67tTfesaBJAFTB3",
  "key42": "5jma3dZpeJ2zXnFHP9QpDPSLwodeuMdK7PazJsL41Cww4x8XULa7yqXxCwz47usqBAaJGUF5CufPAFzHCspb1XPq",
  "key43": "2tY9XHxfHS21fu46uHh1RqVbJkgzQmB55Gd29cNKUnXTBfmvBZWkAYYtQhZRcJd2efQrY6pRMLs28MScUZ4qhbvH",
  "key44": "2o1N1KZ72s1faeoPcugqyZSYMp8aPfkyThRsfAVEdKHwadciMptEBjzjshBiDM7AwH5mTwP9P1mRPFKxLxBpG7kV",
  "key45": "4Ddgkz6Zq6CJRQBQrAjksPvXaMySEavfDui8W61hHxrBPGxF3YdfixQNwuRHgU7QqEsey2VSPMPgwi1iVg2zWE3u",
  "key46": "4tou3rGsxog8rePNN5LA8oFhYCmvHHjm19g5GYy1kzpDzXgkshNGfJxKFThjDsZzAKPmfvEefDprQ55wSSSVDzWX",
  "key47": "2NuESErFrFg7rqyHAGL3pSLNRZihFfY6fwo3xvQDBNx8BXAhW5QrFEooHu9dyHrdswzC3FQqDp92LjqutkKANJN6",
  "key48": "z2iRLPvz9tPBDTwEHEkz4RBwKsysfmUbHgoLsgpChNxNzjDhirG9eJFjmyx9qqBC51HKTtqrutBYXRnheDohbPC",
  "key49": "4oWSm5dnhq46zVbtkgAjdtAfvxYxxD7vS454aPyrqGgdV1pGmYCG84nURFy3m3ffKoznqS7zUu2LQFSzHAeEWVPR"
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
