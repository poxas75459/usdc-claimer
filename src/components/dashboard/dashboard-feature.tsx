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
    "3eGB3Mk68S39CK3ou78urnf5i2oibSuKVhhCkMBhLfkj1eFC3JiV81tSQGC7wNfVidkNpbMEgYwF9dheUPANCsYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4SLmi3eYLVFRYd422QHVafPo32vyYYiDeoZn5vfBELcjNWmdhKhF12HZTqxuCaDeAaqgegufvhHXKA2egSe5vZ",
  "key1": "5XomyryNSGagfd8civU9Vs4JtNrdPJ7WzNjpuFcswKTtTEBTqnd57siHie8sEUU1uDzUcpFnnPKDGHbo4GFJdAvs",
  "key2": "5CmMHuRqtvfknc6XEnitY7e86Vk959KUDFxstdK32TSbbVUFgq6fDLLDUUKJLYofgoraZitpvBRFzHBva4ZfM29C",
  "key3": "4jUtzwdLVbR8bSuSTrC878RWExADFwRPwtyYFX5ncRGu5PyviaxaGQGKvupYLZZGazGiWUBBsBgPPeKrgotovfZW",
  "key4": "28P4saCCaea7RAd9HBM51mBr3bkY3Rx8WUxdR4n87VCDwivo1acPBQ3F9VM9gB1sSGrdT6J3w6vDuhdJYFo9Kyhg",
  "key5": "3FHoue29hsNe8DJQrX2uVrwwSBCUoJ3PRypTXmUaJpkGpxnpp6x6fZTbLfQzfR87U7eSTzyozFLogZejhEj3fRxN",
  "key6": "4KP2r8WsFrhL3QZaGwwRg92WoPs1kuDMx8ntgGqbqyArS5iD7vwe3m7rQiGTGPdGN716isGZJsfqB4ci4E3JB6uw",
  "key7": "3GtKGvrXKNfjTCmd6igXiMEtxN8PW4CvX6DXEwe4BuC6J6gbyQ6FJNZwiS2SuLk4VaVVf56XLa4whnM6Ze6A1Zy9",
  "key8": "4MCZqvcRtVyw6XBmTe4YVNdCqxYxMgAc5Ws2vcC9qMEthf7kk5QRfYhSd6Ascty6tasPd5Lw7Xe9UCfAGpTiMns1",
  "key9": "37vp5MnqdFGjG3VeS7erXrcSMgt7H6E2QwpERTBtq6pqQbcMEkTx9UgpoHsNtBi3WdJcS6Jo9VS7g8FXxhRxyNwb",
  "key10": "3eCV46G4FeXNkYw5DN3NVjEcVvAt4aBKte2mmXXcXPVaHDoyQft1H6U9F6BsVCG1LEsiwwDorGpw5RbQft9L7mZy",
  "key11": "5WjPaLXPCB8PQb5usPtSyL5Uk3tEVkTSxK7ZfvwnPefjLVLEenymRUrqZjbQxSZrxZPWkeKomXBz4GvSj1XxJLKT",
  "key12": "4vdwhSikJsh76AqYBwVVSn1xn8mA4hbdFYGwzUczx9cdA4ca8whagXa6JNHsPpN1Mgrrgqa3qgSRtDutuewuN77j",
  "key13": "49R4zgNZsbwiaMb3BBTzkqL1Aot6A3ibaLKUSxFqu48YpVVEjiwjDs1MFn33bBpXiM2sxHtGTUcyqTpC7wbQGzUH",
  "key14": "4cMcN5UV3cTt94bXzZdDWEeAzGNMMRWYV9Py3DpEM3oicVH25bMjS3ESAvjKpwiZHCxNRcQMtVQNRoub46BcNAc7",
  "key15": "271pVYCdiyTecme8ysobG7TxUMtgbDHQW2bFTCCSFcHFckgREHG9QKtnGmVZ2QxPkvio4JRbhTyjyVW8yKCwwndX",
  "key16": "Z59ysFjPeRrafPFUVquTyQMQTJ4oGyh2MxmWxMjKPKCFXAB1gmiTgzxc69oTjxmRDqkUgDkDPa69qzMwim4s2xx",
  "key17": "5wYdNvDXeJNRagmKzVvNGem5DY7vbj3YNd66zJpUvRD7RHS6iejgr3TyPfQZzt8Y4N2JyG9v4z2zrnpcBauz45vU",
  "key18": "4qtkGbDFby96ATx2ox89oFDHMWeYCArbbrukxABEJXEtuE5Gtco7yAmef3VEsYqv6NthhnTv3Cc6sUethcaQjsTY",
  "key19": "5dXtuMHRvRhe4K1ZQnqbtUsqeFng4g1ot5x37Q843kKgtPczssVicigWfnAu1ANpW1c78cbqC9bhEmcrJ9YXydFr",
  "key20": "5dFkjvV298iHSWzCobbPTY7EFQ5AXv9c9zZC6Vh9hFNgVVHRcF5631ZnF7f8QH85LgBnouVHksxMVhqiAgW8pUzy",
  "key21": "R5TrHgwWvipLXKj9otyLs6EY9YZcxQBHVuhDnvjGZc5ezDxQpN8tRGRrgS6kK7DTqWijEjKL14dKTTCBxU1RqiW",
  "key22": "36nAPBByxgrgSR82vsAfao2Ce1j4XjoX6NnMrA7nyZczouJqGAM3Wak9PMgxoEpmxefVmouX6oEih3Wruroo6NLM",
  "key23": "dMf84ywYv44j1gSz84AGwbKLW82A5hrfjmQER8HEBLns54k5PztNTq985g1gwzwpsSdiZJPriqBPM9eW6TJWXUb",
  "key24": "sEHymNDufhhZ8BQoQSRKy4AQr1qmauPvB9sHA9WdsJLDQSHyydcKNXjfYFT3LL8KJ7za7ojPTHa7jkfzVyeB7UN",
  "key25": "3BR1nXHULCCYWoxKUStKTickQTDTZySmBYZAxWaj7AW6r37HHbJv92p6Zyz4jgGhu5yjzv9uZuU1ywPA2Taaxtc5",
  "key26": "2jmUVANTQWASamQx7e1QU9FTKJF9USCiTBqmjC4sr4oitheodDv54nmnbcMrBNhY3ktikGUkErPXTgKUtEMood2S",
  "key27": "byuUyErqjrR3HpDiXLbaLYcK6J9Jxkm8GKUgdgBVPReu1JtVR85AcY12HmBcWRdeL7xPcsG8jGyvBLj2MsEs4cw",
  "key28": "5Vb2KFuqcE3jfgwYi4DGcRxJDzGaLggJdvdWq2LMP3i9DLFHKMze28Sy5nZxkwaiXyvvz5WHHLhCvqn91YESUo1M"
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
