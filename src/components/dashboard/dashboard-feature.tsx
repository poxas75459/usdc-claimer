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
    "51TEfDii6xEKHLK2FYVhfhtyrjTdV9X9PFmFJHe18TxktNpK6trJesqRSjd4hSMu5Z1jUU3ZFNsLMuwxasQscGRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfqPvvGrN8DXwmMdUumL7kHe8gTEavjvBE7Q635cdAh63cMioQncvjpjZrE34i7riRVKT6xzMSwtf5d7dRj2mEw",
  "key1": "4qHsLYhzDPZV1pzKMdbmBrM9pRoakC9WtA3x3ax3HsbnddMvRoEZ4KUBVweXoTkMiTEoA6sgGmCUpcJ5FPJJi3xG",
  "key2": "4CQ8XGeM5rtJSAjohWrzBrBnue1SfKazRh54tQXqxTq2MACUnxVryqfMFxKLPNXq7kbBt7aZoAQiDsbhkP9eiAf9",
  "key3": "3iW4AKMXgGdwCHRot5JViJY15AGga4vPfPGVQqYs5JXbdhCBkvNvgQuBcH9Yp1RJBscV747eQwsA71nifrQkTBJ4",
  "key4": "4vir4s1QAE4JBXWAgeWWKg2u3JFPCcFew1PNNF1KhBzuM5zvxMkfqqiagQCL7J26JXBigyA2yZKYBkfwXEAHpxDs",
  "key5": "3QgfcJ3pFDXCJepXdzrjdRft9ecF847fKYg7bwo5qTRJzACMFGXSk2Vfr5Ld882T9pKFCAipCwqTpTcntar4Emus",
  "key6": "5oq9o6XkReszH3FK5DwuNTGQzdN77KoQE4pE1aJJQ94yuk5kCkkB3XS43WfDRyJN4mHZXs8UXBCf3wsV16dod4A7",
  "key7": "5jkZEM4We9BJvbWgP3kQZjacb7JMoe9wFpi96Jo9uSKc7RghFWttnaSqgX6L5T6KrTPyqbdhd8e1yuatjzs2jrZs",
  "key8": "3Vck3sEQFug1eCtusR9gYNhG88rUcJPPtcJQm2SQ5TU5swszRzFipuQVZQwbSfJtm5xM7qeqhwZrckQgRgx4WuvG",
  "key9": "3rj6ZSMQx9zJCoSWhYq8X2b8FRBQNkfDnECPg7oBx8BFnCMDoM8xHq8DxWW1FBKz9P1GQ91m9wUN4zzPiLaGpUsh",
  "key10": "WfLHnU8sBcT7Uv3s3Lds29DxyDLv3r1GvsQV6TysKeVqadoFCGTCi4ipvY6tEMn8dmswLE8QakVgzZ31Uc8HF76",
  "key11": "4SpoGYaHPq8hphwaXRLPDcnkdzrHJKzXrwMyQgkRiKwC2BtW6iSuU8NgyRRsgBPKGmvRP8eHj2mUuJz2exXkXByn",
  "key12": "4irEz1phV141jMy9nBWRTyh3YRiFtuc1jdTN9yxSywopsxPTy54xcweMTPKY1H4BXXs6NEwb2rR5BhhVSq1zDpAu",
  "key13": "4JAWLhkuSq1oTybfPrevbPWtAjhU9NNaXo2FsnR1cesGgT6h8RfafDWinGH4pQXSf1BdWiu8ejhYvK96398PtMn1",
  "key14": "55h21J67a6cXV5D3dioHwEbzQykVuSuPfUhoCnpeqHQ6GhFVo9P5XQbSXuQiHAzJxHJzC3LsjYdJEaCGH3za2CX8",
  "key15": "61acbkwdFKmM6ybxJ5VuRJKEdkWvekKVD32ETr5C6vN2CGrzbKczWZj99vsRwws9FoqwecxyiDhc1LZMo3kt8wX9",
  "key16": "3HvbLEx9A298Zq1zrStstczicmHmHF4KuVd68GwfTVkhXZ4z3YKm2firo13isbwm3JAhU4q6etFVpHPuNSCFT87D",
  "key17": "5NNobAoALSgVjvAaogN2WLqDerQPcayEznBh4MtVthD5UH9g4Gm4iNFdqdE1hCNsN2pEMZsVNjhaxhojBmemEMGb",
  "key18": "dM9vYiWeCyfso4S2zY4sfWoHuQ589fEJF8QuNCijGFV5G7J9xXZzLXx6adNwc3Ni2QDcBi9YPnCMtFC6dCPqoex",
  "key19": "54pDvqEDNG7JkTkevQYqxw2XFMy5Ao9czecWwA6XL3Nk58dGHnbx9JwDLYKsKd2dcp5XWXrsCMpkG6CzQPZ7Koa3",
  "key20": "3qKNtmUU3QMJ3VPyefeohReow3jnF6CBh7nfgL6BptfL5HtmYDRuJwi1RjoETEKwrphETbHomwSuaWAQ3uP5vTgH",
  "key21": "4cq6MYHDh9NzUFTMCRVmrBzZZdTDjASXo9NR3JZfVvtK81NnvaBUULdzVH1sC3ZASn1Foop3JQEvG9FyUcC3b5gE",
  "key22": "5mj2HkQponZ3xkGj1Up8naJPk3sjyqK2zDNSAHu8d7A1Jewa2wqwYFrJSAUrYNpfB6mLZU8nLz1aSCuqmimR7Hbz",
  "key23": "5Wr8S7UTdDD8nwWGLt1LovhQxaw1PgCBpbB81nd22VjnZAC3aFKpTkocaUAbbgcnVedEZsRM1FGTmALoMGzbCpk7",
  "key24": "2vq1FRNwWenwTSkDSoi8doANZ3V95JmSnGRSmcaxNqwFXfxwV5Edx9hAKvqtbE8PeiEbTm1c8Hh48cPB6aJHWLXD",
  "key25": "2253QjNf98ZoDQbAqHWwUgmNoGrw3LNX7ftcq7dNM1PprDRjAWTCMTSi2tZyRcMMAL9dRvAPhfy6zDW7FbAsjN9P",
  "key26": "5qG5rbXADVzPtwzpv1VntXzrdENuaTpv9dHKskPsn5wDiBLm1oCYDZoB4qMQhUWkhSmktaL8idsSLTdPnDgrnBSe",
  "key27": "5bzMpggn79tGEPUQtN96x9JWTWMVxmLyLrAmfnW3FfcWkz2388ZWpTDJSSrGJddF97SNtqfKS7uEBj6ZuSiW8W2M",
  "key28": "5CL94DUFUqYC6n1fytEJ9nCemzruEJSAcTSGziTZ3Z71BrHvRVzkvELiR36sGKWa9ecWfEBKSwm7vUofqD2hYWor",
  "key29": "ag1Cbz1aFv1c6gTiaGMHYwCVw2KLX4CVtAynBVQYE3VLBsBS6FPneV3BZzKM6jeqpMKhmyzaRsjQh6YK2XRsBgh",
  "key30": "ujdT1wUBPXeBcpAa3nmwySUyFsxgXC2ixXsCQNPEF4dmS1H6HTxQMAjxVomDaTLw5pTxgUyQiqsMEJdudj3okbn",
  "key31": "2iw5rHJxpjuhrqFE8btbzsw7LrZixoNg9h11nBAMotRv85mhGWyh3NLqRoYmiZXYPY3AK1KjGqFn1im2nJJpMf23",
  "key32": "25KdQgur12pj1PhECAAm2c8iHBwYbD1rdBskgmCHG1v4zQqayRXwFJs1B4bCBUyViRHvXdXByN5U2qcd4Wzx8gDk",
  "key33": "3stHaRvMM7v73HYa2BoAerVTHNu7VHwUdwmdxpjspcp7xAC4iiXZdNpjnwGxszXMoqZdoy5JTEn7vnDMdMRHQ4F2",
  "key34": "22zV27Pj2uNG77SuxZqsMKSTTTn9uEfZG8wqQ4Aerw8tdzKTK8vGELc1wpn6HNvaN3Y3qAhpgweRTqW51C1dx91b",
  "key35": "2194k4TcMzMn5rwiTQR4gK7JvZvwAMstNXW2nLGu1imnvbMkdaxB5ueoqEAHp9XirGkahUFvPBAayxwUCMpqhzdy",
  "key36": "57n1snMYEwHA5TowmxaAgsFCL2ijZaC3BL11fkVu1ZVFJxJU2sysMtYE5MME9TDMHxZnGG7HXALQAdovFRQYy7WC",
  "key37": "2hDoHdoUM7ve6mT8YJw46ARxwMdjNEXSCx8PbQYxbXrCEHQCSWkQE94wShd8ZB3vaqcE2SZKEXxTDRS1YS4dmGND",
  "key38": "2Xgkmz5iAd3uhb4NToWP7WcoRiukGiEt9kK1co2JK8jbP1dAEqFnxUtcNUpo9My2YpD5VntgZY6Qs3z7rcrQRqNX",
  "key39": "4KcnLsazrY2shQqsSnMzvNjbKJwU2Ke5y7xb6kBg8Ld2Bm3Mbdy4twfYYAJsiMSuUFpagmWX8U3b4zaQEgiLC6gi",
  "key40": "5U7HYcs1cKuGxXKuxo6JEChz2kZTW3Z8LnPXsmzKUew5zpBUTnhcvUUVvBiUy3HLjFcYo3MtAH7MRj921VejuLtd",
  "key41": "4FybtE1jwyTGDQWq34wDbqJopi9XCJjwS474QE3Ti1ijG1g5t7YKMuUCJHN7QGGo1fCxvmSGqQXM9rWKkP8HvLLA",
  "key42": "ALW28bwBGyZyJQqVHESxVnRYNnoJHNp91AWpM671KXXwRCsd9c8B8jz3aePSuAhN3s2ZuQtFsLW7aNqtJGZNEte",
  "key43": "24fcKxpM4GPJH1nCrSY3b3LSY6chYKA3V3qq7VLYtwXgZ3KNQqhC87AKUGXCyALFjAC9uqMeJUqm33bEDiBPTmVW",
  "key44": "kJHLnhLh5MaQ5qApgsTbtCyRemoxZ1uS4FvKfnQUWdKv1stCEV2NtEuqmSjsibtfSMmiUJqe8qS3n93kSzaQsqW",
  "key45": "2rqZu1ZRcxhqZRooLkqG3PQ7VL3dQK2oHdPNBhKyyRVnmsAxJWbLH6YX3Fckbt29kHfN3mEFpkyJ5f575ZkZo7ck"
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
