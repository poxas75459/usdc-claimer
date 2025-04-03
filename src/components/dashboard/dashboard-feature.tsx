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
    "FVLFRNpRKa87aobX7EG6hpf5H7DXnWbxAF8hnmDKQb1ngmno9aSfaoEuJhgjyHG9KV5U5Spj3FNMcg9P4MUCzNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8RBCD7CNXpCJvsRYoQr1xmatgACK283QwKpthB5yyvh1vJ1vdoEGQbwhAdRC5iphGWasX9xrLHPG8Lngt25JjAJ",
  "key1": "4WNveCSB5c2oXvg1UDA34upV2CtjHdHgwcNmKePnwKatwGDVLjTdfk4YBcT5ALdT8mCJRQJNG2cnJRTKNE3UoiiQ",
  "key2": "5evrjS6sSy1yZf48bHaMQXCBshLKp9ZeUNgyZwLr63KSZ3iNg91wSvVEwNjAus4ydhx3nAJd6UvL2Qg9cZruuaMo",
  "key3": "4HMZGaMdt1qPGWgCuS1FYwD5WmwBLV8WXVzrBLJetsAYdGNYzDYNnBYwFkhvoh9yXi9iBuCA3yKUkEkpThPX58dV",
  "key4": "2nyDrZNrKdZFL3jk6c44aA2SAA69GvZiB72FUAyBpxcfztZ4pdK8iuLHxKX6LwSxDTuTCtBt2n1Jo3Cm5SoQToqj",
  "key5": "51GBvtggJoptny6ftNix7oMLbBr1m4foQYVcpFMQLcNFqcBXb1y1kv878GdpBJrkFjervHrXifwF2c4H1TfzM4kH",
  "key6": "33TKVgGPwkiJZe19PZhLSVoUdv4CWyAb5p9hFermkjnwyfDwiPoZWtaB8KKt2upiYPCUp8AoTTbGsTNhr3vyNjDL",
  "key7": "FGDheVwWfwmcSKz1gDsGftwTx1nd9eqKmyS9wBbMmXvuKzTsut24HGTrSjYnGqXYiv59tZxxCKEHtgCHcnepvGN",
  "key8": "3fgmBkGLy7qehnZm78PiA8bn5Rnx4Ta3TJRtRDcUu5KFysCfC72BDjqLypM8jeF93xkae6jqd9hAPxLeqmzhCMhP",
  "key9": "N26FFEcb714u4iMEKroAAG6njwPdP4ZUNnHoyFwgw7f6AE2VDjdZAobcuGEC6G79evgdJA5i8FCUsMiaita7Wtv",
  "key10": "5Tx5Mo1wi1ZAcgXF2vZmYg6VmHAKvyQem4wyFi3pCukXebGSARFKYmzyR5nWqMG2xeMa7DDdCHykwhCJwiBkUz9j",
  "key11": "5uaYkL8ydmFumYwpQAHQ1yFGFQZZDJu3859jCH8FZC5BTGkJGFJUeVrV66H9T4znYyZv3Jcazw7r7qf1nQCzhrcm",
  "key12": "2vx2xi4LQg5dmDaRPzC9s2vEcki17eCidM7QD9RBoNpiwPCSBb487udiifrFvQfQRndkKmDyqUmmeARGQHRWR3Cm",
  "key13": "3Wp9fQABD3XdMKkQ6Jg1QLe34frvGJYb36jfoX3s53m4mniKeErhBdGB7FMCctqNxXFpGXG6hoJ1zMkJY8gr2GNW",
  "key14": "SGu2CAuWRTt1YWTkfGprqwwRqKpvhrSQfYCLwhUQzdjQjKsSfJE5pUMaoSJf7VURev7dvr9mG5RtwsnrVkiyGsx",
  "key15": "3vEPp775LHpUztg18YZU1XtEGu7ZhaxqWYfYNSWQNz5ZNjT9xm1erqJwKDJCbQDWqmga9Jy9Mt1shauueNkgJve6",
  "key16": "vt8gkq3nyG3UCTkaEUUQ6i5aBVLw9173DKvv59pPgz3XttEE4ng2XdWnqpgwrmPX4CyYPsSHnCckkrNwEppsHh3",
  "key17": "5Uo23oxMYY3PjhLbNKFSkB6iLYcQBJ6we8SJ7vLav3YsfvMe1s4MZHPfXL6UACvRXYgdH86UipwKvCzqkbA7z1s8",
  "key18": "3SVyL2iCnAJYWKtosFcPEbv7P3qbPuLBqCjjhrSwmLNxkHhLxr1avTWo1DXCQeZfyMLZk9mbc3m75XxLLydJTEtG",
  "key19": "4MWdAKQWB13KGULCVizJV2rDRhJgHuQrUnucxZDN6Zx9KXvdkz5tTenWoYiHco1utoWE6FCXZQihCq1Vf7jrtcdE",
  "key20": "nwkx6xqi5fRGRDX6a6aGrHFzEe2CvsnWqTySkDGUWxzirQTyNPeFDuuVBRaJNSGWpuSNvHcUNQDM259DaPFHoxm",
  "key21": "4ASUzvsPh6mGbvt1GDsrYMcjVSF8FQbiXN9Vtobk5ZfKJAnCpYRgDRqRDQvC2qx9SPesJFEov1RdD94Jd6CfVaT7",
  "key22": "8ShbmWFbs9QNEgSe4wx7CFmZwgA97SeKRemXSwmUo1kLU4nrdBHQbED5C7CSBsfmmbiaNyr3aF2DbKVY9eehsqT",
  "key23": "3yd3xUmmviMUDz2LA6U1Nvk4w8oqMwTLtjguzT6BK96d8iqic6PM5fNG9Nb213wyPMmZjyW7B9kFVaxUM1LrAfsy",
  "key24": "3z6AYBLu34EDmiMN6jFQzeBjY6NMqqVmNVx9ce2vyPu3wFvby3uumatLmPLKpVvVqdoaTBenat7LcAuViP247zcH",
  "key25": "4ujSBoKCxiNm8yRdHJYLRbcC5ZP7tcCyxQ84ghkEfmG5H7JWcro9qmBveDgENjRaF3X8tUZ1PSBe6SRgpu37JN7c",
  "key26": "4Jh5aVGQrqR5Eim31drYxc3h59pLQBhzeTxpejmWfQbfVCj9dKyzP6iNJ3StWsz4AxmCiHSA5FSTrka73Jveccyo"
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
