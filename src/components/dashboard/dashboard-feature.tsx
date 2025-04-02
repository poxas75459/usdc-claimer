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
    "2HfPzkvWu8YSqNW77etchexGTerDH4pRS6rjEWduuo1VY7mehyVhi136UMDFF7BCbNS35jYLaop5eaTJ2vot7e3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMhXL1fA3Vccm5iEi9vwghMshbVAvGg3Cdb8BYbz2ty2XE2DiH2uqHYQCw5g3uHtFsBkFBFTtpWHLrWtCUrdoRg",
  "key1": "5hxm9BSptLsDNq3BXE9jy2Ra8DDucBdXe54cJPvKm52qLTJLt3Tr5iJHfFbMRTb3m3LanWG4jsoE8jqFhnVRBRi6",
  "key2": "2DTRNvYZqjTDZjH74fe1CATxMrKcZ1reDaniGU5QwmGrFUvRz92j5fFrJ7CUyWBaeYxEs4wS5ovW4z8oc2mXBRZa",
  "key3": "5Fv3osQ8bMj5NdC6KRXckSjyap6R4RP9BZqKWZTM4XnCtukCoFA3FfvTk4ZPUd8QWSmuyd6tEw4nNxms821DCybc",
  "key4": "3RD4CeM5maMUr7mhKjanCWEwRHd2KK8u7xisoKM9nVFgRTfL3vYcrHYtfPRvxE7fC2115NCPsgLi2BJ3EQZ31nQp",
  "key5": "4tGnoBM5MLtiocFPtCTMbdoVFi27foZ5ck3gKkphkxq9Whq7KBTQTmiUxMG1tE57HW91ZdGXsKnbK1KXE59dLAPs",
  "key6": "2aG5xWiMGj4krP2vm7e3YzmMS1A5TYWpcsbCehqQGYPUDv1d6xf8MH4S7SG178d3rRnYyzAQmr1bxxjz3VFRMCzq",
  "key7": "4JNE2oT8b6EGmGyTrCzxJACSzSCByf8PKw3DQ32kdTp7G4HJjqBNjBcRZ2z5GCwucda8kq6Y8mkTDCVNMHK271mf",
  "key8": "2zvupsJ2kuxeoEh67pSh7B55bQDdCxkVDYeYDTYppyJqQrxp5eAWY7BKvdWviykw57RrHjAtH6njjvHx1jE6vQxv",
  "key9": "4ivZd2bbMFHtc4WXoVjKKuFsiuCwLCMx9bFnLGtP5i3eMQTnmfzwhK8M2U7ENnS9XLywF2iVUf9uqS48XbdYwdQM",
  "key10": "4PJCXLrFBfm2kxD6GWduweUFop75eR77NhKCpUY1T3KUmGPzuCyJeGGjvGZZ2JGjTeF4mdJQtteNn4zLfbPco2mF",
  "key11": "36rsaPNN2iw23zu9DunhMfTafCu7XLtHD5vxRbGdbZ3eHNiY8P3RMYjD37q9QHFF5fUnnsUEfiHcqyik88CCVnmD",
  "key12": "3xmyTJW58fuiAK6nZ2SAeq6QN13zT91HLa2vukQ6ujYdMvk1bPkhgvXwVTW9L9BRKnaH6HefTdbNhgER1TYsZByQ",
  "key13": "mND2eTrB14xXXKy7Gqntkis18fCDWe6xbMxj8hEi2Cbwcs6fVKPHjuxvQHgjgjhX8c6b1cN1pzjkjeRhe8uVgp7",
  "key14": "2o6rZRiMwQRRxHL9gTxnhcAVJDr43tCg2bZRL3mdV38ySjuMufiJh6toCuKatXkXUxUqXkrBehzMzui3XaGJ1Hwz",
  "key15": "5t6yTZVyTFfSuapUCk8c6tnANzgKXQKtjdGA3p3tkrwCRrGQ3Sn111ZectY5mjnAXNKy8GS3YjNQL6UmqrgKERFF",
  "key16": "33she91ceneMEhTrfeaG9uewAfD1t6yWEqbfoJLzD3JhAH4absmvCpdyCCGypv2bWSUrC78Zn5SgW5Gp1y9kNTzG",
  "key17": "2t6RvEurEzexKYt2vP2AVbiie4sG3XfDjjKcSgrUzeoRpQetWS7XPrLjXTR1YHrbNjne2JcLaXYwCJ95CZ8U9fU1",
  "key18": "2ruFHZTLzvaTd2J3Lyf2BQBQhktP6SjsD97azchtuBQSJHjYq3Yuu5zt9ToZ3qSWPcW2u4Y4tWsGezCNTXXscJQG",
  "key19": "4jtPtMzWAnWtvFuNJXcPXzk5xpmuYucDf5Wx7erRQo894F4xF4ohRhM3WJpZWmZgyroNzqxK9FrjT5szuHZ5PvmU",
  "key20": "4CXAvwSFurmdiB7WAbfZtYvuCdi1wJHCUYUSHtATdsy2KdiNyW37JwNgZE8h7jWenhKSVMe8BVYAtbjHUHDQtGhb",
  "key21": "554udgxqsNKbAuWavSXwrKTPJtsCAL4MFHBUtitsH1nw5zEv8EfhCxjV1Wr4mAyCiVAF2esrp1ENLUj9dCzpetq2",
  "key22": "4GTDkSDQiuqNrg2DEmAw2mvYWACotKeY6yEHd7bidhgeHvMsFMVL7SsxTNJvLKi7rjVYwmu3pXLVC2ckoLBBJTfk",
  "key23": "4NThKa4DSTdViQY24ncYQ9NZmBdwaJGvwr7dufVmLhYB9TpsZm9xheKADks5Ld5mbU5Jkd9qzFS9P5NQz18ty8oE",
  "key24": "3P4178W2aetGMCWWY8vBZ7GWoGFzQR2k3j46HQrKQbpieZGLthTzJR2zDUyWWgNn8a2vGUhzprUvAAW7eSog7PyL",
  "key25": "2dLRxvzcd2r5LwLhTa6GGw2xdNGxjkdUtZRyKYBa8qRJ8c7i8rCEMnyWdRazpGZsU2L9APdjHXoDmDDCADcGVjrK",
  "key26": "5Kcd8TnMoyWckoJjvpKpjerRxCQk5BPhTbWDNJkhrxcMa1dCMibfty426QYCR4G6z8TwanPkAsv5BhMtNy9EAGSi",
  "key27": "Gqvcgh6cxHWGd6N8U1MyNixAAKWqtfXmhv1cBLA63p4R8jwtRRRwG6MKWs8p82826wvCpbDiTkNroifaCoRqH2R",
  "key28": "2aMYqpfxnoA9pBrkr8u1vpPJ7xcgXNHX11vdNYP9TLGP41iqmBLYok7C7wBwpEwBCRgKPNvCx8piBNdArNCiXJXk",
  "key29": "29w13VKr82861VJr387mSmQ7RqRiU87mVnjYRpKFCPiJufgC7265PFgo4GUdx46Na8ZRgSFX51Lokf9yNEHH3N6z",
  "key30": "3Nch6n692r4CRFE55cHdZSGsiFqosjxqzgQ3EfSYqyJx1QKeSMRTaURjfzJSi6xFB1eATS5LRkVXw8LLE9aRL7Uz",
  "key31": "2dqF1GDUL6q7utmXdWRNdNCjwUna4MMBy4CVYtQe8rZ3uX4knvd2qFvtp2t6EVEGsMqVGNRVVvepSYkYQ5FCXdk6",
  "key32": "ZBLjGvmS8uNo9US9EcYssvrfqVhcpdZiexPtvdA6hNXJZScMykDqEqN5xtwSxFg6JhVurVE9weAVbVEzWq9e1yu",
  "key33": "2JroAs76dUS69Addck7DZXYDUQ38qQfbRNSVUXUnsBf5sTBPVDFDZDcQgHPfK6MZitwFG4b3uFuT8A13qqtH2sz6",
  "key34": "hkLUWePPpTZmbmJ42sTPtwW1ca7b1uMYsHddkHb9wve1NjkpXDJSCS4EPzAGbhsGGkogHNemvLHxv44WYLVtXv9",
  "key35": "4qWmZV52uX1VNT4D7kPD7asy1xEvMTgEEHAXTTbFRRnWfdp2BYQ2S1cXxXSk6gEkjYd9XNGYgTHQYmdxbctWUUJR",
  "key36": "4jtxsYsKi72vM4Q6gu68FVFWByyoUBbDA5UGjKmZCXYT6WnyKCWLpRi6H5dJcoXnfrLSLYSypqUzhcQxeZJTCo8r",
  "key37": "4cegTBYHCHaXVnk9zT1BH8K9bDUPkF4KMFTGXUd4KaEAMqL6VQy1tYaV3dojYzo3xiGXKJxAJDKTbZ77FLKaJDJ8",
  "key38": "4vApun8PDoyCk26J5WaeVMevF3eajhN2QHt96Gh3FsmgjgBKHtt1duiHRUnXGAV1NYN5HA1J5qB26QXKgAFG9MWH",
  "key39": "SPpRoVHLkwDzCsof7H4BxSZwQqJ3DRcusi85jYPTTWpWMidhaLC6ibudFeFYJ1k2bZhMyHBfENdN7uzLx8PnbNY",
  "key40": "4NLTKDBfCxNbQ7QgqRyYJw42dCjFW4PwhJjg6Z1kDQZpX4MYMs84vvCusRPJD6s6nGt8jDUqEsUvv8bhUhQcX69d",
  "key41": "4Z7geGQkSHmv7brHnBgHughRYGS3W1HQeBGiYVAfkxCrf1j5yX8t6T6TAPAeAmR5yMADnktDic5WbR2sp87jv9E6",
  "key42": "5yyGhdBXC1Ednr25RNQK3uj6EBpkWrwwMi1ZWxfMkQ9BnpXtnfSsQ7RBja4KC9wHcBdEVCuVQFRT3Kde6WECnzD9",
  "key43": "374yEfBu4FoCkNysGbZiVUMRsx8zrphZNWDngLW4CnDCGWDuWJcrdPME2EhrR82UHQLLCcW5G1jBmENeJu7y9iVG"
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
