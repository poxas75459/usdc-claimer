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
    "2bi5iHzJnSEVS97YLkcMkiwqmHipbniryKQNco3sTBQC9tzUVXyx9jUB5S6Yj2vjQD2Fy4nvJrBYvx7xVacDryKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRHQJQHHJApJ8fYvD1J4ftAZ4gjuuSxK1VqieGhVJA4Hdgdsco9LJeXUvkcG2bjF6fuyPfNFafWpdva3raNMQGg",
  "key1": "2RUuzob6SE1SBMNDionQshtTx4Em3iqoYCVAGDXgZSN9Yftjfjxs2uf8HEKnkjVECv5rBsuBRZ5ysKFhj7gU8ptt",
  "key2": "2VjyaVyA1WxXUANY8Wf3zyi9P9qq2QVD39SMkwTYjkCrACj9inWA2LxMp6TGfGf3N8BataQ6Wko6TUJnrDTPHze6",
  "key3": "4rsWLQEixUmFBpr3jAxDzbuVbNRYUYmHbTnMBtCzNgvz1tk65Xen3XpD4P29C7JpuqRXRtz5sjuTfEzvPbbwmFhb",
  "key4": "ENmk4NdPPUVyniYpRf77AhTMvXjphM2CshkQfG1HdCytLmuTNHg433q3B7F8CUUeQKDupZAfxpMN8QycyYf7xRB",
  "key5": "1eGDjfTe4mtBn4Ak3vHexvCs9jZW8Ys9DNCfJvkWWWboD7vbrC67QG811kh3EEZs4BJUPTkkhpxobM1EH91weQC",
  "key6": "4nuPjYngKzDggv8p1QPYa72Z9PxPrBKMiLgUSjXtB4aC9nAoiAVprJif8zbKUrmek3pL6RKoyqQyWmzwn27Z74nU",
  "key7": "4brQ146XtEgUJNmHdYCW4TyXJo18KQoLKqy3UtxUwSGUpAg8E19v61b1P9jsjaiRoY7m71sT66HRNVBu6vY32KrE",
  "key8": "2nPhvtY5YeuuRWTbfJ2PVSBVA9ywXfE23eka636L6LKTpDY23UoXzpLBn4kRz7jABUzKrajNJ6mAYkndLCLLcmh4",
  "key9": "2YaA1GHyeHyqv1m2BxQe6Nk5ZPTnZHXtmkBAcKjhqgLRqnUPmUgbXFq33DKMujKHtoUYik1sVwFHsRD2qceeYhz9",
  "key10": "2rz7rFAC2EARnP1G7m3dSnB6BZ5vJLE4jVYegUBMKZ2dwKDUTtoMjpbiSRmTV11v1E7YtBR6ACvttYTtTzwxmfyp",
  "key11": "DwyPQpHfvZnYKBWaTG4PBfMbXn79R8akStwFaGiNchCv8sfHQqPJcduySDgRHu5CWHvhf4RKDC7AiYCnUXkyzoG",
  "key12": "4yBzgUiogBSdSLGk2tKxk5PeKeayK6YjSrGJK5bVuHBgwj8wfp28YUMgXA8Eqoncj1kDGzG39DnVXcYqGMz5m2Tm",
  "key13": "3dGWJvcQ68r48QASmjrxyyqPmoU1aNy2p1UmsyLrULYk8REdaotYXtMVm4CdgiWuTezRcMBRnPWLCyhxZV6pxr6R",
  "key14": "3iUMbYf31Qip3PCf9jxoCwVNzE6CUFC6aXPpp3qZP63v3eLNUZJPUgnL6eKtouJsERZQbpFW7jyYXgmXMP7HCyW",
  "key15": "3r8GeYrbVLADF64oBFBrNjUns9HKf1vWE87gQshsQmB4tLZPomnFKzGpVRwF2seTctkUefehsmSWyThAcT3ToWUy",
  "key16": "GdLzzjd3iuVAah1M7A1bzeFWboRLLM8j6Swdyqp1efZrX1NsWUPuE4x4vBQRdppvHigvqkoDjWzT88Lr4sy8CBD",
  "key17": "4vrss2qXCYR1Y1Ru73vZQrxAuoG1n1bjutmDccBGwTRyhkneLQcXYywNKckqcz3Mher5NsSBUVf8aR3B1pVBWAXy",
  "key18": "4YVRR46Fy8C85w7RjnV5b8U1W8egdg8q7U2PUv7i24UKPgYhJqMXM5i6yvYmQLxE25BWnaV7ow951MkGHiYjdU2G",
  "key19": "xN8HwmoUcZTXTf3igwhKALB1GEWaKqpjX3jsNL9jeGYaDbJ2pKYFcJiZftha2bk4xFHEoJfCYPcc3wJy47AZStj",
  "key20": "33JpkBAsuEnBA5uf92E9gzP4Aorv2Bg5WWoSX2QP4Udwsj5o858W3WBL6EQFtfgD488DB3uTaMJidHNzSMR4eHFP",
  "key21": "wfzfnHB17frZFw2VQFu7imRcjpEtyGZ2M5HXyxxXe1RdtdoJ5C1uAPh2hhYmJmSgGJs7cYt7pKzxYDhZwFUX96i",
  "key22": "RMWSAgJ9vhRbAf47FNSAmTLNnjs5pqJcQbjFmnMbKuXtpmKLTpQTGWmZXkuRqH4Mu1Vzi2CCicPMNBbxMre4pSg",
  "key23": "4WZpHFK8uSg5BYzagTGEJfrRJNoTgY7Lz361KLvNby9tQXWY5CS4FiCqF4adpQYYF7f4oxmqJJ9a5mmbjSa6GErB",
  "key24": "3STxWgwcTweMQ8gpBnPHerKo76DUZ7HAG6gr8uNgLVJ7EQDyCH4EmzsNExrWCZmWnViD8iLxvMZzHPGCxYkwY5k7",
  "key25": "sskk31rgxNgmabC6TqPcLjgafLyFFsWReGfjh8PrBQhLGAztF9sRTKzMStCLVuUUFCBaFz4BZfkCo6b21wi9fbZ",
  "key26": "4CFBXL6dq6LA9JB2J8yJVcHXsteC8t7Drmv5muuvm6JvQcvomDDXjhhqUpxGUASpG6iN3NeY62pJmhT9Y7BG6DqV",
  "key27": "3KohbeVY631wwVjyJVqLA7GF9zhfxSBJCEwo9hNGaKmSkzPvaKUNVx2GfpNjg9aMSnxdQj5c4B6Q3Cy5E8KK9pDr",
  "key28": "5ds1pXcXvkUdsfLPrAgxosw3qVWeW9Kf959SEiv3E7kZGu8oZUbdjNXrSymvPmPWTq5sozCdUkDyCNKg26kshUCM",
  "key29": "39J3XqD69uq6hcna43DV59idNbxwZhvTBZRqek7C2xzr4neP6ZU5bxCJ5ffq4VXqUjm15knsM6j9rUawhZwWJRxL",
  "key30": "vyot5W6WtcohqXwxmuxfZhKrXRcCPKpR3iNkbfxuKyuQb3XJ8XEtU8Suyt6pbrUSpbyTmLgCxocffBUYXWRndGo",
  "key31": "2qdpMHQ3Nqd5xkWVGuc4eKeWpMtRRnUEsdFJKdMfghxDu9meTRPAE7nY94tphbbAnXb3UrgXLJf6i274MXTL4a3c"
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
