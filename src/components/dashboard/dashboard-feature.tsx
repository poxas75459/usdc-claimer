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
    "3CWCEBwUnunh1e8edMad8tydvmoZusWp8ZNhNaLyHDBQejf819sBk4Rx6jRrsfYHur5Jau57NoebPMVndwmTVdxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJ5TUVmenYkfp42gdpGoVW9c329mngHo7cqUxqkkF3DH4dg42oxP85q41q9ipo4gE1YSpsFzhDG1K6CzNGdFRfg",
  "key1": "3kRy8SM2K1G5dUpupjw5ya6U8iSwtYStgKLt9FEFtGRkS8aT9g9hxU6hQh4TQtN4oR2Q2Lan7njM9YKa4ErgryaU",
  "key2": "5PHBFgrTMix6R7gbD1ZYR89U5ovHeRapcYicqD5QLfFNmR2iZBrsxtkaqkqisBFS5mNr7VmgvaK66XmoAV3RDBuN",
  "key3": "3Ugoq89KZw9NaDRTg2oVs6Biy1kiSY64Egrz115chGkpok3onRkgjVv16tbJ5rZ9qVCa4N7wc6Lwnpg2L81wYshG",
  "key4": "43MFFY12cqzbH5QHvpXemLEh3DbGz8zf2CZpP4TACrE1rskY9TD2U19az6YCjLYQ1WVnzYdLTJNtmYMwPfn34jkr",
  "key5": "5jbTYnG7UN66i5ZVbgdHWywhLcucSCs7ku2uWCrqmwhCpiQh9g9EQa1QmhunERkzZ6zTGrrSNUPTvtyvadgjtukE",
  "key6": "41sV2KqJBVL7k36WTMFjtxT6qu7dY2uKzFUEZbs465Gnx9CAsewhysktNVgFHgdyquTJzffb6C2PKNxwWEMwdVke",
  "key7": "4Qbp1BDbmXaAn73BurkRyNgrVDgS95fPDpkCsnzbfSSiWgNcd8seM4WHHA9ZTCqaGRDYNMuhGoJPcgrUMzgsGzaF",
  "key8": "3Juq5yEzJCzB4H4v5eJ6ez6vSqVEHGFwWw5YdBpQug86ggwouhfxgDSDpMWVRXYKFbFmWo97eJzjY6JQFUjt2tuz",
  "key9": "2vFWJZxCSNuC1BHaSX77MNVhpKmCUkQvpfyPjA93etJ4SfpNnn9yXSaFk67YPZUuBFNhFLp3bbQhjDAyv6pr4kPh",
  "key10": "3zQXH5qUYQg7CUU9HCGEo5XFxeX1EXVQLw7aDaYDBJHUUCuMT1fM3wqiV1ii7MBGzT3AkAM2FnaEsFLUd6ep3hXB",
  "key11": "2Fvmy9C3Fg7crNHtV3fD52c4K1VWghxeXwjYz2rNoELPggn3xx78dwaSSTZmfqDP3VNHEA73NPWcQ5Tb34fzkcC",
  "key12": "Y2j3fdYqDVdeW8wsrL991gSqFgxdNv7JvYjMhpbS8f5CVa7r8gspyiZATVT2TVUXBcqzWDEtsWQAx3QnaNvG6q5",
  "key13": "3a2uExt5R1Gw7hxkvjPmxvJoVY5xFq2RBGA7AyUcP4rsCseabFPw33HhUW4e3qMMJc9YrjCrg5EosyDGyr8vSzzr",
  "key14": "24g3NxPgV4uuN2sSrt4jr4qkPJzX8TemHVsro2maGKziLeBeJdvGcxi6SiXb8AZvUHK34nZk6BYwaY7vK4vtcEwR",
  "key15": "3KoG1jEXXJQt3Vbg4Xa2VzrTMRAshw72Pi4XeUkdSGuAUCLSbvVx9MXssxjTgxiqxinw9PieUe6KzqZcE7zosZfa",
  "key16": "5Zw5RvwyVgD6AYVmjCAhx4pVm7H8NU1ijh8ZaS21uJMD26oPmNLeV5enMFMDEuWoYvfQbd4WsXpoaaBzo2Ug1N3y",
  "key17": "5wR9VerjuihZfCymZYUWrbwEYWf3BK47t3qF8kp47DM6UjXjYkMbvTLqPeHRkSc4oyn7CYnUHNKAFm87ijMufuiH",
  "key18": "3kCMZ7tFVKnc5QLnZzpUYiEr56cHfAh62H6srhsdUxqXZeYNqzeCQpizuU5QwT6JJ4e8TgTYngroNYfsBk2TEzYN",
  "key19": "2EdeGuwMMjXRvSULeoZpXuXpiyZiDzLr4bxH5m9xRUuWNQCis8VVNWwYy1GMFxSUKZMoHThZekMEXeTXvDCpwx7k",
  "key20": "44GvGcvV2NY6niU9ChT8wyAyDVWv23pkF5Xjgt3Kf5fBLqhSoVtJhisSrBXpva6cvDE91LfunoL12idVE4pJHkkF",
  "key21": "3hjb4MRu4EZTcj6ePbGdrFPCUHrawByk2JwUXmc9Ldei2pkjvvyn8wHu3kp4tTPiAMaj8x5cLW8729ZFjWmnExTz",
  "key22": "2eMAzyBH3mrgXJ5tGjzqzgAHNaKCtoq2N9QCPVd4ZrFShgEAwf8EsJ4491fcnRVwWSqb4FCXHoi9HKpBKLvKxA22",
  "key23": "2bMFEMDXG6Ac1tmYWVXKo9jhfbrdpt7m7wPz8P61SK3D9kJ6K7YfUvTuCurKJyuxEHC7mi3hYkWAJFJaqSbrAdRv",
  "key24": "3iaQakdw28VxNLQzsuVGH28vwZGikiYFGUw5cmbHfYfxbpbcxzu6EchVHEXWUpPHPDAp5yx5LbLGi5MPPmTsT39J",
  "key25": "5Bfhvqo65GASPdHdJ2peszCFfjRVqjqoGt2jTBso6D4fAC9bRGx4S4zKcNKhLG41pCM154dRAp2dZpmNrRDfsd1K",
  "key26": "2boq8iasSpswvLpcfhY8ZDqQvH129gxvE7Bd2Mta3NrTd74Qtqn2TbMcASX1VNGLnQNoYyHmitATKjEe4WnbE1Wg",
  "key27": "3CYHYMStwvnaY4kgvfR7yAWujPU7wpNKRB63gGNbiC1PDNmWzJ212z8C9aidnF9GhQCtn4LAf2PizVSTHYaHSTFi",
  "key28": "4hePsMRLEESCCY9GBdqrqhSJyGuvcSvVsUyuz63MBtGmr9hME2vSo918KGZbVQ51j9sgRdjGrBSmhpNN23RBmcGf",
  "key29": "2iyAkSy7m57bNnQh7r2xH63mxkuxDQqPbwkZKrJdMWiYKnCRtZ12CijUVxWEMT9fVrDeTaoSaSZcBaFKGcUyN6Q4",
  "key30": "3Ek3dmFVav5mwA9uQ4TsFwuh2uTjrMVHo3jxHd9JxejBv1UtBptPWnXpHAb5E4uiGV7fH1sBnr6jT4TY8HiwNm6p",
  "key31": "4YEgJcLz67q9j9onsEh8U8L5EMCxkVS8mhKguNgEs28UX9Ujw7Y9S5b3UoHVqKpCotVPiu45tNze8J2kL4mKhpxX",
  "key32": "59kUkS62sxqJoZ1YotV3ETJPQiVa838Qkaa9ABdueYfyjrvPYvfaySAydu1UDdmBMVDsMcwUfkBbeX8U9CHuVMm5",
  "key33": "31cBqpDGGfjZy4SPwEyyhsXoceVUScZyBhFqfAnzPnMjQ1jVdyqRpyVvipEUrjXM7ocWwpyeYg3coUKKzCFmqZug"
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
