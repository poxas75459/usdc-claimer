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
    "JKQ3PXubE1wjDaAo8eSaEBTKzckT9PFURmJzmJweyw6soXi2RLXd4hmDyNSeTFUBfbm3E2tUErBYd4mABNVaTGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PhcN5o9fyJFdpFssdxJeCggk7rUWYWmatGB9pN3d4jgrbC7zFtrZAUKAX5vKPcWQxpXEjsRfVsZXGNQMaMS1qN",
  "key1": "5GykjkmLwv3n8fjGsNY4xBN4E4hM6CrWq8QtvRGk1pQeHnuX5Q7AGZ5tvgk4xTa4iTgnpjra2HDpnc4cWahnyZuT",
  "key2": "2r4ef4rgtbAeAeyXs1UeFj5JVTJaGitXWkTLjKAWcURYSmjH5iTHvHcKLcGwLj3aSDQwp5sPDPtVGcqLBckG5bv6",
  "key3": "674mCC7xKAkGpAjZALR2Jkui7sVu1LDRe4kF57xJ3TwouCNLTvsUiBEwrQKzSg9KtyBC6MRtYaoCEx3EQnEyMRZL",
  "key4": "28MxLKC7zy2XG4RbkwviCLfsqKr3k3n3P8xyzcBRhEAJTW5XeJaSZiBoUrC776QpWqMhyuerLcAcB3YA7neye9ni",
  "key5": "5FtmYFivf7sC4MoyTh9rkHD6DwJgGZ1CXJDTgJ4PUMD1nwBpMtRbfzfbkJwQcEJdrGLxXEGV36dWwkdZEbXVuRfV",
  "key6": "4F92vpYEdXY134BTbrGGz4HKnr7xyx7TYdomo9LAnTnW1npBXoZCo1eSkNryHFBP1Uy7NgDDL5DWRnrcHNiDrbWn",
  "key7": "2tFUPWsNxRyLgLJLnsE4gwvNGdQEyhsPdtdZxd2EH9tVYeqaFGzSrxe7bAJvUsZ1QhhDbFrDN66UVYb7PKGhCyrh",
  "key8": "FjNEqgDYNidYMGWVXxLUacmSP9PHsee1bkdv9P6w5MKmT3Jr8Z6tLbMX2WxdAiTRFESS9pkiobhaETAjrtGnSk8",
  "key9": "3v7ey1V3q5ExkHKbfTaTQ6jwpH4W4uagseN9cd46jA8fznFwkyJdbrjjxXVzDcpn6vyffMtU6v8wj3QxbeUwSb7c",
  "key10": "3P6D8FzSgCLYaXVrMKVh9F7TPAZ8UhXmKo51VHFix291M4zufrGX6Mb32VCWmuzWHABGr2UkoLbmy3SjtwpeWEHR",
  "key11": "PGNFN9hwhFTy6zpG6NT2yi5pFrY5Tpi4nvSsffsmdk8bkg4P6AWNZVkLk7cyrR45A7RGWE3n4QYk2m5rHS2bSyb",
  "key12": "56kBfnEyz8Fk15jmozZtryzFvyr97q8yvVbg9sq9fQVVspztdpWag959rpzf9juSGo7xtDGEYxc8HqbaBbE12cgr",
  "key13": "4bW5UWA25DsfCxUtVU359cqP2b9w3Pk6km2U9hKBjJdJqkAphEkg2ByDdFKWzJZi7qC6Drtshwu2eQwy3MV7MRZj",
  "key14": "5PdZNTQjsva5xG8apSYjftbwYErncqxQ8YmuAXkrEcqWrfx1EVqZVYeqeK5RyVQGfEpv3C5NhiuJHMESWsNcJYVV",
  "key15": "4vpgHUVaqMSAt96KMmvCeprtVTczVBi2H5T4akzRcZ92fhZyKoDGaVuDHQhJyAXQxBtWDk7FzGiGb7ytn4q3H8zU",
  "key16": "2akrqS9AzxjCSPhGisM2yLu79SP8WuqkRF6dm4tEcgS3pi7QcgMbg2zmAZo89EoMaNnDkxXw325abVvsJFgjANv7",
  "key17": "2VRsYPMyAZrZBFqNpygjq2J9pQgxiBzhFTqmtVHr6BTfvLoFPctp9nCzSrHsvyAnEvHYtWsaegAyBcTrHs5fjrTw",
  "key18": "82nHsLTke38gaV4otzVyvrpjkCW6HcpeLEdGuU2Y4kU4QYhkacyF2nLbryXDBC4TQANzDXwtaHNNUJfsSEcHYtd",
  "key19": "3Xjz55cHES5sxp8KkdzRFdoacCtNbsWEHx9t5g5yPuNs4GzHXhBDRarc4SwifdRHLWTxw56u5xqwNM6uwuBQ6Cvg",
  "key20": "2gaHTbnaHFTAfbMzMtsJQ8E6hHtr161K7WXRuCZP2XyWK1JY2XACq5fARgmRRsDT3qb8vnB3q2h8zDbHaNMjJa7K",
  "key21": "4SJQzmDDVJUp9YSouwF7mLSURfwdzgdgmXzDu5ywpobj26hxpzVP5WxUWiLHEtUejVso5yx9dDVRdAxHmgbE69tA",
  "key22": "2S4KJnU2upWufBNCGCZeUTZdNbAdUKCHHfcAw2dSjgj8HwNpJke9GzMLKjku6jZdafqXsetrNXfdCVsSwjjKH3Lu",
  "key23": "59tcxRZ8rMknwzvnieL21Uh26f8sxiLzB35JrMqMMvf8toC8RCLjBntcyXbxMLYNVCeuaybxVY968eezwRkuUu6N",
  "key24": "4HEBN3W92LdRvznnMs6aFeVrCxAkMDx1UpcyN2NCqKr6UMCEGESbrny9MCKv4JYdce5Wq9HNCpiQMyGTkBvoXAcD",
  "key25": "UbAiH9dEHvB2AM6DRvZG3sXDxG2fbhyAaMrWzXxgd8cAREQjvXitF12Pam5itdX6b7sdNEbZb3t7VQzyhvSKruA",
  "key26": "EB3L9vFBEYvnwUmpKQ1nwZ5ASBuD5FnwUVCYqXFtA3kxS1LTcMmNvMYv3pAfshggK7CVGZs364Sq9bLXCE3F4R7",
  "key27": "HUUhvyFwhFYRLkY4fDZrYNg1NnvrUHTpn5HDumgdp4t4AVQcGGsrk2rPpoRqdsEQgzBLS7s9r8dsgfbsoxtQRsH",
  "key28": "4xhqEuq7KdXoDHDjMCNFAco151AYQziyyJvXrx5msFn2RKUei7wp2uV56yMiLFzLbVZkgV2BHDUMKj34v74HoLnt",
  "key29": "2TpgQkk3WczCZTRs1Xq5pyHXKQvZ1PrVZvNkohpnB7xNBJT2Q6uHHpZDCCrXNL8WoCxPUMLyH9n7QiDTxyrtHndH",
  "key30": "5s6XjLLJaDqtyp8NyJ6aYndJVdTpXLw23gVfR5X2XaBwGtzfi7vH8mDwzggqw6FaXCNF9a6ywyZde976cNdeYsqV",
  "key31": "2DozHYPKbUKC4zTyiELM65Pep6ZaGB9Mw89gCmDbMHoQ9duUGZpUUgcTZasTXf9V6yTDsgA9K4yK1NNHTZkQUceg",
  "key32": "2DqXuCWmJHrwW3d6fe3qaA6GxdZ8XFjVHMxXNMPv1xggsHqkjS5mgHMCKcgTGjuvyXZqTpQ3G4PskgsMeR5HKU78",
  "key33": "4apMjLpfW9YF7QwnVQ48Jd5jouUrRCdhMZPYeqc99j3LViCXvJ4jr7hdSWnokMekVUN7n8jhhHwYvf5B2RdK5n6t",
  "key34": "5YjviyLCcdQcjbFtHWXxAMLVtUcjVrHTfhZ915fShw4ZuTULmVTNW6KmLbbxkSpNhGwmUswSsqrBpdi1YbWgeQkW",
  "key35": "2iFLZKbLccJcwGgAXCRUW6NyAhEiHyEmVcvYmdnRtjTym75qCaQt15577Ws6aP5BRCRphakfADJA87cALbmcnhBN"
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
