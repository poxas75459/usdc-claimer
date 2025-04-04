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
    "5ossk6m3TgsuLqiUqH4kLffKpNpQrP9obvMM7Nv9rM5qdPb4vXqq7GYjGqpppjpNLe7NQMaZDy7aAtdDDu4Wewfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DeQKLLMLAaszN3AE2Zx8om66dUyg6kjoyrEDx8vj7t7mmcniEqYXhvVieDrgugBuwcTHJF1Kni5eXjx91fKKE4M",
  "key1": "3XjN9C2EZc78oL7TtPWu5v1HTw5Nc96htVVbnr4449kfMQdWBoxEraFzR8oySz3ZEGQqQ8MdeGveJSPA1Fw6C94R",
  "key2": "3RAPsXdNKNBw2f1FhLzP3zsD3dEwQXwyvAX5yqSFbFkBMJtndHeET3Y27opwffBxNmbNFL63HxkUxVTN1JhwgYND",
  "key3": "5Pya6JV3BqeXphvWkHr63wxYcWzmqHX6QJmZCCzN7iBz8M1oJsKA7KEziLTsX4yBiNUW77NDdpWpycAj4Ckcvhph",
  "key4": "3BenA57Y8GzZomNL4P4ABbchNZ3oUzwK2u3ZgVbhzPN1MKsVfaoNU7issVfDuzyzF3tHaY1WTLv2gYqj79LqYpiG",
  "key5": "2THL2GCPBWZGgbyc1XMKDsBnvrcWiBtvwgTDLquZ4XTJgfbFzbe63HS4c9981c1rLCji3wFD7BuHkXSJYb25G9pE",
  "key6": "2HPcyWSF6XUXuSJsZpixLvbPr1HsnqMYz6eCQ6vip3nBJzpkpD1eyQLewUkv9ZBSSC6LCTcXrF3WgV1WH4i9dMkT",
  "key7": "3mCRWmXceJjCXKxabud1odEyURyJv7sf2RGcavvNAATLmxykJaRxhcvAXkRzYiwjfs57gAvS1A3nL2omvzDVsWKR",
  "key8": "un3eNc6LNFEGnnihwPZoJzqKznLQiVTJfe57AhRzb1a7RqsMFBDfinNZdy9HW4yteZvybaeta3qgbHkMrnbW1HV",
  "key9": "5GrHwZyXZ9BVeaiXviAKQKNUcsNheNMPEZNHMR5GGV1tc4rMf2MvjMDGBZp7mJNvAuZhbHS6d9jD9kWtw99aYYQU",
  "key10": "2TzwNsFtXHUF1EfHft3JCHL482SqfLFsETNbt5Ym6e634vmiLtaVVzZcxLxdfN16gDdif4mMMiefqnxzGg6zdx1v",
  "key11": "UKMjbW4tBqQQXbjZr87pEm48T4sa7Q67WijhB9MqEtswgj2AMz6FzXa2CCHGALBVufCqVm16ruyT5gosH7yu757",
  "key12": "1RqqyVNvb1yF5g9sFzFiXANDwQdWKhjGZ6mQcVSW8ReDzf4jKZPb5BRMrxULGWNMqU6jxqRQuwZkDUthkgpu8BG",
  "key13": "4WJaDub1q26ZMjmcJn569wbTPXNRuMs3d3C2d7G147gRmcwAkE519aSgz9VC7rjGuiz5WaL9LSnBc5BMbLtUCubi",
  "key14": "4kZYX6Qc7J2QhtFwDrrfLrYUqEvGKbxAU3FFoGTCuGruwJJpCPWbi8fEh6dRiT6SBtWzjCtsDhWYa5CwrqHqNCNN",
  "key15": "NcsovwSoHrT5XssX73YWmBZSbGXnH7QK6FcHQMwdZxsDWEd2VB97Cd9oFovnfkiX5nf5o8HMR9Fhs6gAe5F57p5",
  "key16": "3qFAMjZpSKxZMYDTVqqwPriPBHHmgLvunCLPfB8merNR4SKDocjEQb8YaW88pYtDUdvgrccG5qBo5GoZdHuoRD1f",
  "key17": "5YMHRxVW7n6f76Bov5BeYzpae7BourrK4u1cfMH7PMVCxgq76ZyoNLwhqYugGu63iSjbRdFiEe4TA1NBkXd494sq",
  "key18": "5EB6K2c3LQmnR2KLC8HhtwCwe1LajWsTxUjYh1e7SZkofopWgDsSn6CZ5bSMuJoLc8cgFnxih1QotEzEC7Wp4H4b",
  "key19": "4a4HtsGebsXxV6zHEmUhFyZHzdFWxKACELwiioAeVJggR2zxboHzxACMFBti2Z8imgA68esB3QiPptzheVk1smfe",
  "key20": "4TiFpVdYneohF5foZTdyhUsqdqyJNQkkoj1U7kX7UvTKNWwhVxHKwAx3XumTqQVcEC1WFvVAxuS6buMADvFSbq3C",
  "key21": "5618emNhzxnRuCUqfyJN2SdsxZdKSNX5EVwrEDsPrE9xb2Hw1NbKEho3H4cvecfdbhmARjWvpm6NDiL6oeKC8Bgc",
  "key22": "7sjyxsyEXxLj3Wv1huy1BVdcUgeAdsL9U66odacCSosaPyYXsXcj685Trm5wyEnCpAkV7mqMJd6Eh2iLDp3rV5D",
  "key23": "2KdqnLmQduun5DK9bJwb53S8WZSUrW48ZChh97UActZYVRZWLzQ4K2T5YVUTYbFo5rcSWbTxr4GGebCMqxY4bSq7",
  "key24": "6aeipqAVAAa3C53mJ5jEa7T6yrrn9d6SQEsvoNA1i7pFUta7Yw4S4R6TZXthcuzmWRHFGUJacSiBzN97RdaqTG4",
  "key25": "4qp8hg4U8HKbT992agcp7ajQ6yBZVmP8GnBmmcwXP8nKprBQhnZfHHAT85SqFSH4WiJo59XJwvzL3rcWD9j1QWkm",
  "key26": "3Jf1Xysym8nXNTPqY28TUCsEU9wuFTPvdTsmnfayPuUkwJSUxSVrpqpJkc2hKuGkrL9fRtfKGzeZB23z58x7JYpj",
  "key27": "2FeQmwAqo4EwDNZnYPPrxxF9Y19tzL8CGgQax43SpiYjys939BaVsjv9jzgTaNvtXzk2bgL32LwFHHZCTDu8y9kc",
  "key28": "4JoH6UHYNbnkgr5YH5AJKHB2JgxoorkqhpsRF9eMfT5Qjvy5BpVGgEE3uWETA2DaDXUTnwXivogR42rwrX3rY9To",
  "key29": "fjxKCyhgyh1xttzi7zzXRHwsRMG2scM8SF27U7JaTNiH8wXW7JuW6FvhCMqikzBi1UjN97MsEF8L1KmWwit2iZA",
  "key30": "56EhBQqga8Kz3NzXwApETYUNXYFwNkybLPMiqBSuvADmWWzPNgxjuH6aDBTJZyaJugkvvnNRA7pvV6vBaCDiGozc",
  "key31": "5QNwUB8fWDdJnGRUN5yd7ULQSTosM9faXZzsyx6hkRKG8ujcEeZci1BkU5Pn8JQJMDkSG7NqiFS3xf8wHn7tYmza",
  "key32": "5LV8oPNZG3JvBW7TmnB6JYVrH9mjXi6D3kp5pbV65pjGV9r59RPYvNMCgzkdwuKLeUqoWFtVx9WbrLN1FDif5Ctm",
  "key33": "3ZmBkyZhXZ94DdfWS9vbf2gyrrpJ1HR1W3c11U4omMxP2GffC4uR6gH3a6DMq6aTsxHGcc5q15BipAjdFRjW68RB",
  "key34": "5cwghAz9V7vqrzbEbJ5jyWSoxuY3szWnj4Au4Z4CcKMnMwCTq4meitoVp1nJ3LZeVKxcUANxpPHXbTf66eJZT79i",
  "key35": "2XcVWfMt482kvaDpVUPkLczroW1kvcPebbyRDtyar2Zf3UF8a6eN3ZHrYY9gUceRfQbDxPSeHwdmULXnqBY2mn8R",
  "key36": "664zM6L78VG1QSBVckM5emF3dJVryMq4zDaEdtg6xTAGDJYvfbjjkDqMVN9T4puExV7jTMxN6T1KMgwtENNQiWGP",
  "key37": "4HudpA5AUtzMZieA7DD9sXfmc2BLdPC7mKD5GE4nzTGkYik3WRoH8J1D9zYMbKViZb9Cx8PYgRhFjQuHBK8LG57M",
  "key38": "2qPf5dQQkCShpdRrm2krwCvNwpzymsZAcFezBk95godDevmtzYGuwkxhTu5mkeoABcYybfXb7uoFSNZHxp5bhTN7",
  "key39": "pZeaztTpwsySr4xb9uzmh6G1XrLbXZABkNxMqXpsTTQqz6tx4nfWpDzjPyLLNsQW6kczq24njzhyo5jCm7NQW2r",
  "key40": "42iE2SF3cyzia5CV8M5fcHpPkYAE5kN4z8yY51JjbNDmfr4VjKc9Yi2HztgHeUVaTLEVk1cPwuXjt6cVDobBjgyt",
  "key41": "5TMDFYg6V8bKYhqFnKoSvFKorJEd9MRP7hscP6jAp3HZSzo5W1phGoaVDU5dJKe147QiwnHzdiSZUbHCXpgzsmpS",
  "key42": "5SFzs4CQk5ggp2s912aU67JHqRfJ3w33pjP5vn8NQSv6edUvZKepH2Hgd3fHvJa8wdL4fvFAhrb6ACy2jtvBkkXg",
  "key43": "4ayLj4QeqrgKYvVCg4seUerAK93iKao92YegrUyXtEHtJWMzK73cJgM1cwwqydhwYEGtpXL2WfqbfuNWB7qBmgdn",
  "key44": "5Ehzv4do3SKD2q4p6Buts3TTDRarsnenmr7odHwKFks6xMrQ5ovL9o4w3BSkjvbS2GsSi7SN6mep8EGYipMad6oW",
  "key45": "V3nNMf9LjfU13F2m4DdTDS4Mj4rNF8ThtPEk8qcx6iAaftnRP6KsKGnNdVHSE7M71qx35iV9nMAYsCuU4wV2hfU",
  "key46": "5ZSxyKnt5ziYVyHJbDwNpyKNhW6jNPfF7T7BfCznx1u6job5qnr7t2GfDj36uigR1x3pCsgsJtoMbAsytc425HvM"
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
