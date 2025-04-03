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
    "59SPyFhRm11hQv2CuDrJeZDpBsWh1myZU7zj5C35erHgo1omfYhwYptz3witNXUoWzGoR7vH4oDJ4CQqQdfx5DZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZkzm9kdFdmq1NsCcV3jYVEKmh64jabVAskA4mL655J8nhKbWAyxLmh49gxY34qwaeSnbftnMDZexiLt2ShKt2v",
  "key1": "2NWr8GUmPXPiwPgp8hJUkTq7i4d6MRxZLaiW23MTL26GfjMGy6RWaRAs2TwTaiF88muK2T4oBvtrPsAjWiLePZ2i",
  "key2": "3FjBau2J2gPLzU2jy2RLjhbEbMNNWZf4zopp8vgrqQQCQNy1RosFdYitqC5F89NcdRpsQ7FgMJFThbdxdv9T5Xzj",
  "key3": "2veYABcoXoZJRkQYL7HZUevHPUbxEk3UzEazGFnEQkXRgzGkuBc9e52hdvdsTYGXRSStU4qBdVNTgzfNN3kfYy4B",
  "key4": "5nqMcdduC1oZUtJLiW1TJk8ney9f3yvA3UsmHzj1gkqUicEu5ThThWis7FPzAhrMpHXmNfQKpX1PcDqqRb1Sr83C",
  "key5": "3CgbAd9rwewrAi48C6ooT5TQy2ezffL3PvWcS8Q5eVxGtxUSianFhdyMoPR3tm1kjUibgE1cX44cTd74H4bfk3Gu",
  "key6": "3x4WXxojtPZX3gPywR79NAsc8XDNmKDvp9zdN4kKb2gmqVMQs7Cguojci2LHkksW3zGCyDLN44qA1Ab5VmJiEfpa",
  "key7": "4Xzcj6zsbWhWNzXLqHLkmPsz1pMfpQZSwh82MFA8o5DRG5EzBTDwRMmjToBT2AhurqkUeFEes8eQrajkpHxqU8R7",
  "key8": "4vmYn3Fa1NZCrDb91j6Qv59QDcRZzd12osxgtDJWa45uAtfF9XNVs9xewRnXzxyZieaXHZR28fXrUDQVd4VLki5V",
  "key9": "5e5mxhijUdpXsY8fmgKBazYBif6oLrWdVGGvbsqcAAfULXXyrW3rwXAJgRRB4NJRMTHoE3iqyJugrNyWCUetH3LN",
  "key10": "3PbH31fKDYY7Pqg2qjo12J6YKQr7gpeE8HM9bQcviT5m6mEBVYGn4MwKxsycRg7Cn8fVNhe135d4RRHRqcSHpcY2",
  "key11": "5wpvrZ9oekDXZwsHEGpqnsHUJRfhnG7zdozpxbzHzY3sis5t22mqWctgB3n3P8UPZV12qQsS2qYHySDPZzcKpYd",
  "key12": "5BiZwFrEQ8cxD6Kor3xV1ujVgXcXYveyKx2VuATo7FNVUj2qWJUfzsht9qA9PHnMdahpiozie6hJXvQ7yrzboyRY",
  "key13": "2Qo6y1xBtobhuR1a5sjcLFDLrYt6FdXURe3LAxg9ZQAcNAXSKgoiPzbe5HLuCfooo24xNR6pZGtT8LcS64iWemCR",
  "key14": "2htoSEBFq1BowuCS9UBx773wtHGY9vFp7uemtH62r5S28TsCyKJ6XJ2vfDHAS2qiaqx5wJ3aJAerScJvBXCucFt5",
  "key15": "1f83c4s5gAormF2fcrVfNaANfj64GFhJGcx3fri5McvjJJC6rBEVrizdZke1KpTz6ADuWewDHCUSz7WiGwnMN19",
  "key16": "3wLNpw3rm1MUWHKRP9h2tiJSbPkDAFYgo2wT4CwMXhA5TJGB7bGHwEvVeQoFMtzarg5vidYW1zD15ESCGGihySCv",
  "key17": "67BXAAjUdwRYLwrpZkR2QzdoRymTB8gZCHbhWA2kK7mQv2xKMp4txtn5md4LLh8AQHfWaAoLUXvdHjKK1Y3MFFtx",
  "key18": "bKoXfsYd3nFuYfsJGbgDpbe8mBCG384JhyXnP3KmPsh9Q5VoBe7FvJEii8T6QFrDdanePdDcgSwRULcRiG1jsLy",
  "key19": "3gB6vasB9FWh796CuwPo4sim4RnPCVMH6yNWPEJ7duXpE8bUMhCPhKChiAXaKSVtvazCd3Bo3YNLe3yiA5J45Rhj",
  "key20": "qaqT2SYjs5TFYvjDc5oo7P55azMELUjgLybnmLfGWuCZE6sLfP5q7aFGk1VfDvD8NBSrqBECApF9wph4Y1RV4nD",
  "key21": "5ZGYqxyZP2gfNRSp3C8DBpbnKrFq2DvrjgXvBXu2XCJGDZegNwm2u8BmZASeP5zYHq5mrFSfDkT1MhCFjJ6cTDVt",
  "key22": "26f1JsBmucDPDtfPzoo8QCaoWu9GVyUXZRiBQGfGTgvtf2aeA29E4xqXThxheXFvmkCn6iPR5cVS2nCcq81vhk1N",
  "key23": "3qHEyrEVkCS9DARcxDuk9yNWxVuvDNo9gJg3guC5aUjxQ43iAS4JBPudEEU5kar3ZnGihvBHzSqMUJymAyvxsLmt",
  "key24": "4bBsBGG5fFZGP2PnSbXP161NuQGrqbVy77KMsXfVx967KFby1kC8MdjCwi1LrtnPwFcHk61EvYcNYTuhLNZmaCQa",
  "key25": "aWWA5cBVnM5w9hDBg5fEhzNvWNhz8nzi7cCsa8EEkaFry4nnGLZgwSaCfSBHYuMViLTJ5nyPCGQ9xotRjgzSMUv",
  "key26": "5WsxCm1pHPz3t9TPRfUwPCn6m72gMG9g4nfLg2iq29WLMYWNrv2qd1Sqyu76rvCxkM1ZtrVjx2wS9awoX1TCRJxW",
  "key27": "3JBjvdNNpEjv7ivDt5iXZCNfRjq739WrV3UL4vgyEJV177iLW2EratdZ8cXtquKCNHJ72HhDvfApBK3QxLwhuh28",
  "key28": "3RSh8YYf85UkModBK9Ecfac7EWQYabgKembmY4ZFw3dj66ej5osxHfZYRhGvmFUBez3tnjoE4YDugy8HcNCAifDQ",
  "key29": "2xSBX39KqTd2isMS6GYBvu7p9sXKXNogUPSMLdec3h46v6r8uXsbVs9NmtcAgdYYY7LcZ6BZJoHQmcjHdyCEMJeu",
  "key30": "4gqAhktabWn99b6QtwC9odWWcqyCb4xS1woBtYxCBpkzV1jQ3Gax3JrxyCX3xwBsAVi6zmn4ctzwDcryWEEAtPLE",
  "key31": "4XQ69XtzsAtoij6gRUbu6gVchLhrUr7SJkuHwfk9p51sbiLEckhb1GGCmrot357dA8aHry1MnRz69sQdrQytWksZ",
  "key32": "4uAXX7NXaw45xFCy4xXvMxMXxgci4dKAtR8JsjWose4PgWtKnToMmm2jrvpR7bBj6usZdzBu5ArRU4eUm53K6eon",
  "key33": "5wjQ7hJrijeNuTgEcKs12Mceeo417TYwonPBLCzgqhg4on59fDu1TdLaqYaUHAaKRp2cgySFvC7coW1FtNLeyGHo",
  "key34": "4epQzXX4KuXa65fiwdCiVbd36Dr9hC6RTrpnNE6US23quoerdfSincSJXMAGUSwSkkXieqnmEBSwTKiqpzxdvkHD",
  "key35": "mP5KfTMdCe6Qk4i2zB8nXE9S5g49TUM4rGbykra2d6upx5xqsvd6n44Hau8gHLNuPkRsobpVnfPi2iuoy1qHxdx",
  "key36": "2wpTMf6H3rX7tuutWQHpWwzZcGUzfKZUsQwvi6PEq6NV75J7TW42379AaHHTYyum8UDABbjJ2VaiLEaCJYRD4jpF",
  "key37": "4YRicYAzEu25a7Ee39KasgYZJvQ9wrJhfzyhXmGVTV2GxwdK7deBgTZU3EoNnW6QsiMTWY2p2envxSLMn3T9BYox",
  "key38": "7s7A9uRxhLEksyCiMVXTsUUkPGTynXEpn4PyGhgCD6h7z96LqFqaprL9eUfWuHGNAavJoHagbLXDByet5ZQNFKQ",
  "key39": "5nJPe3QTnZpi7j6oaMwmwmio9ZyCezmJY1Pcu6P8WBDQ4wFKZSGKuJKg8d93WpBdkBDMYKC8LQ58CpNBXw46L9j6",
  "key40": "4qvt3DpgWryfRSNH6scdVdwZQVLrzczsYcZHqE9vS3JZE3f6LqgQBxohqKBMUgdUG8kGH4D8U6rTCE7SX3xjgjc2",
  "key41": "4DDcRMZACJb9kd9PaYSfVZsRiHadSTjBq1pEzjbRtTPNEqiW5fcW5sQk4HHJz68PGm7p9upw1xkvj5pdN8J2PRLg",
  "key42": "33v7NLtzAvfiEJ1dg8mcWwa7pdVDq9ADBesMdN24fHa26U3hvHJSenSGnY73Ka8RU6nHTR5pEn36kRtdFskHz96T",
  "key43": "3jTJ9ZJ3o8DodGnkeqHPumBnJHnZnx8eWsFjFQq5sbhrHWn1LhvunYkvYzYEhtsHNaDTdAhPTinN6nhqm9cRiSzj",
  "key44": "5AqkHw983W1LUKEbGiq8n17BxXGtkeRdpdadCksBB5PUTuXBSqSUraWcPV6BRqrkcLB4ddK6FV2bQjbU1UZVBr6D",
  "key45": "3jE8zG3gVgVxudLGBVjXrKhojFcWGD34SktSVRnHFiEu52gV1XqxMd5am2sgsHdfTZ5vGgQsWTABx7aNmEgUNqg2",
  "key46": "3Nb5EA7f2JxoJeDSW3wMdgoHucPSKoHxJXxG1cgSGzaPNicMLDoV2cWVSJ3xVYdz4XXapmEt3GWC4GhDS9jcVLuN"
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
