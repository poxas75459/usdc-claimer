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
    "4etgd9DpKvcCvW5ew2kbiZvNdfFBUyxno8y4vqkZ6LRpeWnjzBYcgcWTLfsGEyJ2ijG18DN3rrDJsMcGpMy4HeuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbQbGVgbpk98wvq5vEopcEpXWkq6By68BnbwJwA7hQeTtQCnizMQZb7GmhRgMrr6WR3DHHqrxvquqYDXSeGDGzh",
  "key1": "4dAKiPet8hSN3u55nB51XsLNTmkswv4kewuMPLzGdHAp5kgk8F1zdn11rBkUN3P37jKcisqwhgnGSpNcAXdM122n",
  "key2": "36WEyAR2PFys5zCoFxjsq5dtMhp7irwhBezVbD8qpVSgYkY893Jrta3eKSjJUCybGUd8jvgWpLYhMoL3KDHF4oxv",
  "key3": "3z7cCGK5qNykE9QtVQXoXj6PF9DL8gdhkSLGVAeMUhwGXgpfCacCAAm6Bpm2P2UZQM8b7yji2HMtM8cqGPfBNYDC",
  "key4": "4MbundG5B3yhckn65ykUrmHuoBaEKoAkVhgoky5rGBk79jRnGMaeXS1o15DQP7hpv3VhcmzxBiRuReYMmE38yKQt",
  "key5": "5Gtrcw3tW5mxzfGBd5Gcvhpi4uRGF8nyimNG2frHsWRca9GRfCAyvA1HQSDUhrqbbmKCyy6ZF3WG53VFNhQzio2e",
  "key6": "2okMqtPJX84jRvrrFLT9tgqHH42uHU4eCUVEP3CHP6zHgZCCQuiWJBuVEzPuUFnZP5sGRQocE7Dvc3iFZBqXwGjS",
  "key7": "4QtBA9miyqiE9TJv5cNZYvgKAZgnMDm15rWJksJabc3t6SyjhkrRHamAkMSUrXRiQCFymczffcpjSw9gwB6DpRCv",
  "key8": "5cckfAZtpbTe7tPtJwiitiUg81frBijDM3k1jNTMf9CzgpgGLazcxe8SVbmpykkGvGK8BT8AcLPcPGLW3d6NX99C",
  "key9": "53gk28RfiMnwCvez9TdFTF3tYRZeUNgcRKGMZdzk9sWp8xN8qwoaAqqzVSoj9TC3qR8NKtNMcZWVm8icVSUauXy4",
  "key10": "4hK16oVcfDkkR9R1Q3HFdChA3capfZrgEyRG8wCq2p75hKGN1cZvHLHhVH8WvogNsyRzabrBP5Hw6wuLJYhay5ok",
  "key11": "4HsBSnASDCk2mUcyVpxKXYLJ8ENw3YAcTdqRo6xpwRMdXPtjBtPjSQwDFXhpaGwuP7sQj5tE156sNDuJLhhzEuqp",
  "key12": "3jKFTcmCYpNSaN9d8rFsraVKtKVwLPF6qWhtZ2oLWnPmw9bbN423B5V3QEFEeCXPKcNV2eoSbnuh2SmXpBtwLeEz",
  "key13": "4geQZE5EyBMKoN9wMQwSYaVPHckmqrAUAtkYvxLCKqAkhFZBTk9yMVMrkMCc7uHk3dBe9ufgq5hrgMpUf4V37oHP",
  "key14": "3z2gQAyG1JZ5wEieVS3GVoRrUAwaAmYnSn6Z7zgheYVq4Z6svVh1nktPcEsZQ5iWbz5G8DvrHw9114mTJrakgbie",
  "key15": "2KPRJkFUo4KxLMRNQbcMTiLnGBYiBFiHgtGhvAdgBTYi2gStuxaFGzpSjRGHQNUNtJb54LYQtphmMYREeb7cYTce",
  "key16": "2S36nVhWj2cGGMvVUSpicQtJQR818LzeggbUPAXHvWpt61iKBCMgrvUbDeXBh7Fi8tQd4zzwgGgmsB9Wze6kEkRz",
  "key17": "3TdMcjAZJ2RE1pJ9wnwtGgAJSDoV8cGLaiHeGQBWuVbKhcucQZsX8jookumh1ZM94pwAPvTLYyArm3GZtLmRqCWJ",
  "key18": "5kDmdtxfSLV8XchfgnmGzVXcassDNxLdmvbhxKBSSeRAX4UMj5qHeWYUBvmoRoPY7i1dS2EuUK29QZ69uZgeAkNh",
  "key19": "611k6L61Sk8jcQURq3CwjYqcb18escQPP8FCjrL7khoMxQEuK5QXMDEBzEGU87LuACWLiTqPrQANhm633TFnfSEW",
  "key20": "55K7NjLCJDwLDmjEFH52VrjzTYHg9PgrMKNAxgArAkQhppqa7Tq9wwC54MWuvN3e4HHEhhQQ4kuYgYGdr3m7UnkB",
  "key21": "2iHpRowgczVtjuUo5n1YkVVkdHpDqqTsuR3jYTokAre9Zky3hoFtvPPDMzV6up3s82EeurmerfPwmXh7pC2gAEUR",
  "key22": "56yiPHG7yPRbhNNrugHgRwXGGeRuYahu8UjGTMqdEmFZTPHpYyfLdFHfju4n7RJGyU1b2BEfftrHHKKn833em98R",
  "key23": "2hhqzncMkfhmKH8qvzGR3zPX2XK3iG7xMfSLHZymq3MzUD7rYDQygv6oCXQNYS3tqtTdqVJ7SUUysJ9u8ybzJtzk",
  "key24": "2Roobw8E9byWaXbuJmAaKSpf41Bcx2QBghgWFDD6nJXYGuCojKVyGxdHPEdz1YYLEJdPzMR8wSXY1gnWShGp5UEV",
  "key25": "N25dfuiweFmXXNcin7eF17JnnErK6UejnaGLd9Z9ZC5NTPTcLNmCTHrbwg2DKsqgoLoJ3tcs56QoQGvNDTqMRGi",
  "key26": "2asCffGRzXH3qMnJXrGyc2Y5snbkhvKHRKBavgzMsGwNCJkXhiDGqJDn1pR2EWpvJgpz6Mp11Rq29n7qvqRATcMP",
  "key27": "yoHVaaRdHauE9qeVPQ6D5EFUX5fKX4z6DoQ8ffpJAwm7GbmdB68EjTYjmg6VwEeEhF5fccVULRXfW45hgwscHV5",
  "key28": "5EWmgcqYEGB7mJgPoona4t8mVryaewgdUQrsjLcG9SwBQfNWeVjGTHbemLxHpYvEwmECcSHakqvT1hyCtPdeToct",
  "key29": "57T37vrnL7wLc4oiWeYm9tCiNS4KbhmSXyoa8qy5tb1YT2N9Kecoup2CVey4XGSdJxxK5EJgYMdmvCpw4RxaKaHu",
  "key30": "Brayf2UMcJkPxbMbTcfmjWUnwMiqR2W1r3uRC4oxvhmwJpmxqnruU44fn6bRg9Gaw5B5ptPmPL61iQxXpXPWsb3",
  "key31": "zXpwMiDXDzvwciuKiND2P25PuAbjiuoGCeXahFZQip68CeobeHhAm5FtWgaFih8XnMPfqqf9s9TVeLk5JSuGYsm",
  "key32": "4xXhJGddD5dA5eg8PbDdbsj4Z4vGhJ8P8fcz6DVoHgA55nAv8zAeGgF44AqdTAfoukoFvA7HqaNgvEBAYRuK5hYc",
  "key33": "25MYf8yizBdNGVGvtKhUKZhbhhGJihBo47SPCZG2BMghv22eDGWg6biBAHDzh6GPxnfPA7P7SiNw5Pm6shxQxhx2",
  "key34": "5qFesjkCRjqPtu3CdomnbknuygYnu1ScpdLiYfGQD5Pbgr2L4SZNJEtJUxKV74krsr528r4J1jnbqsB3Wt9oa5H7",
  "key35": "2SQRHutc9euxUr128XNK8PRSTJG2CVokErq5p52r23jcErt5Mxmmkdkpv4Tkf8dwjVPebWJuqVZtxtUP1MtUKKGK",
  "key36": "64DfXkPJF48FwC3Fui7nHKZSSu3YA1uchDvDfDiRZBisaLFS5KoXBQRDRMUoHWbQyLS2BrwBfY8z4f58XTG4C57s",
  "key37": "4MiVGqYVzfEmwfkhZddeYcGbMx3Do7EixTPWWgYDnmbbNfNKAFfxrwwEh5J1cyMZ6RTo16NxGQ8SNY86PgBYxjsb",
  "key38": "4jRpJXRY4C1wQ53YgQkWEqL7VUeQyeYnCjFcR28y6euUChKpiEeoinDHv4fytjQ7JSTjMpHarLLtpY7zSkpHvVKk",
  "key39": "3CcVSFZ5ajZLKwrEzKjenoTHyS6MyM1gu9NB18YdoPP27bmu1htHogV267Fmu2Q9QrX6STuquGhWX9TB6wsSgupf",
  "key40": "3qKxJXNKsDbWjQPQSEQkEb27RyuW8rVUqXTNnKShn7PfcYADaAna79a7JtqdJcMgGxHi1ov91YeeMUJP74id5tUA",
  "key41": "3anebpHxP1RpiUCCZyM3kDcVt8SHXjN2zfgNbySMw3zx1i9stYYiR1nZofNQmxM8HVfN4xakXgHpqqXQYCM6SUaD",
  "key42": "4gkG3qfjhG2pVkpyu5xDNEGzysQkwMLD6kVnfAKfYpXGabK3eC64YnoyYD6d31fW8zSZEUg5Ce4B6aASkaxDTT7W",
  "key43": "3yLVySjbhBA4fTaCXGrqjTtrwXx8JpebhfYuvkqbUZ8xCv7zuLs9CyUZFt9PdhXKfG65KohiovyRu7tBSQPDbQhB"
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
