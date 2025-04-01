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
    "qqYjB9MeVR4Bv6Fj9S1rpjBEbi8JJL9gxHkLWwe8VYvvsgrCdJGjHkVm8pZcEgpxy89YxuX6rtvLXVesciNm3eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJpFHY4sGFiLiX45ftQcgLrzMoStqWTiWSigP5RnWMx7NqHTFocyVDkW6xbgSzjN1nNrppNeYwfqrcTk4S2LGf8",
  "key1": "48hhJXCoFQuqRCpubzAUr7dPryKRW4JNkN2f1mQJp4sfyy9qMpH5P5xnPSqs2qW3rNYsRj55nEXRfdknXjJF837s",
  "key2": "4d1ZFqa5D3H8ZEUvT6F1WyvTxcvyzkszaQT3QwBmL8gqqAbs5oqBs9ZSuaDKfTBJjooPKgPnvXnExxcxaE5x7qo4",
  "key3": "233oTjYDNnnXs3nwV5Cf3Pu6hQyT8SqrKsJ7SND41BFkjHV3CEd6XUpFYPEF1EjVA2VWE7rvwGmfFFAudz5VrbWN",
  "key4": "3f6pAY6BnYQmb82a3Pyf8Qtwm92414sQS3YK2Vk7SLpVV5HQxevm817jPsyHZjLXhw3HdLrQrqB4y62pgd1KrKsu",
  "key5": "3y7cUd9xmoBdvY6nataHtH1nzp3Jf5LtQxK8d4CzoPw7DkvFpSXWqzBuvHGXGU8sECDa9Dvst5R8UagVx5JWb1SB",
  "key6": "3VRzsmRsfMsZEcXekvztW2VQcGfzcWeRKu9RX7WLCq5jXtM9AyMDQzneJcZtGBiXUcs5SrBfo9HcbwmqJoRe2zmB",
  "key7": "51HAar4QgG6kYR1bxTSWchyxvH2EMGp1WqbpGxQ22LDg8Kg83E2keevBnG3c8ZmUvMk5DZHJynVD3HjCqSgUEa4c",
  "key8": "4Hm1UsLi2ukgDLfuUVXG7yytTevsNLkiggyk4KWFZbCfCbAbJdhGoZu7EPFBAFQAM1HetNy9cN6FNeK7mgy94tou",
  "key9": "SdBxMuZGGueQJsZjZmUZTa4676RiqGpuTrjTJLwPHuFsjno2tTBPZPvEFonqxPDxfPB6MD6iQxnq8UEn935CKGR",
  "key10": "4HKHfNqxKMPmekdNBPVuZ1VewmYJ79Aw7sPp2CNXYARAP9wU1wsC6N41xCQmrRh9P6N3kVaqjaRaUb5rJYFnoUcB",
  "key11": "5PfLejvc3Zx96B8tCktKTXegLh4B28wX7i8TtnfB71C7QXwGyCyEW92sW2uAD6SsaajGxGLRhvo7XXky12FpUp7i",
  "key12": "4TuLz3eypTx2K1SoKYAyYNqE6GpfF2vxy8z1XNKm4ToLWvgCWbz2fjfwKhQqrEEdbSgicoY28kH3JocLA832hVM1",
  "key13": "5UAPxYVC522C5cqKQ3hau9vCqSft3o8k5Ewge4w69vgpo4AW15tKVpURpkTygEChJVFSjVa1LcZbo1DvsHRAm74e",
  "key14": "3TytHLy2ekVu7oP83xcURt776F9CwuenVVrPnp8BaLKbqH2WsuqQz9hCzrUceSQ1tmFTpQHXCNnATq8LTCG91zak",
  "key15": "5yw49vDutXA7yxoKti3TkisDLb8BnqyvsZswBonMXP73W4SWrW38AqWCA7iaCVfy1LHHgmQbyrnCnhmU3QZ7Y4fs",
  "key16": "FqckqZ28xbJ26W4esoNu9pgE5xsqKXREDeopnkG7a3dtStbHWoorjB3U2YuEUdosXJrJBMFJ8jCuyEhXpwMmqrk",
  "key17": "3mwYcz6fuziJGPsAvFozyVyprEFKEZEmGc9pQkwu7W4odoMKpChC7Tx3sq1Exjs7dBbx7cenT7mXcFcnuYGLz7x8",
  "key18": "2CE2c4SyYXLK4d6BFSDfZpp61MUEo566Z2FbPBcdczUGCo7MpjFGRFYMLQdCjT7Ufdc5zDHBzceqYrFBzTiskX44",
  "key19": "56QhmiKeGGkffAneJNB66MgaZfiynytMtzdWR4p4LcyLcDzM2qZDNe4z9PuQmvjT2xCGVshue3xijezhgNvdUHQ2",
  "key20": "5mGkQCXC77iMUd8SUrs9NCeaYwZyZcwsr2UC9SnHFWZo5yUJtLMKCmnYYAgWQgwzQDFM9Wfy9qAJ8Br9F8Y4LVoq",
  "key21": "42r46vvFWrhpEjdpu4ETi4FfEq6pQeCmCBPz4cxGSQmbaJCP8TyNQxbLJcUsLfkPrpN78Pk7LPRzTphfynL3Ve5s",
  "key22": "WnsuVUKW87YCnyic6QkgmiCE4DyntvcBrF2eo2R7p1oZdz7TGjNhXoTu1fsHc3Bb7HPcTwh9AoFmGpymbvyaf4i",
  "key23": "62QK82FzcxhBvxtdSv1R4HpN1LcHnE2p9BAHn44p2ALuzptUjcfeijCbnLLFtyQMo4kop35ryFVjL6pTCZxYe1uW",
  "key24": "2tTX6BopyQNFLigqpNKCbE4JBHHTxrTM37zhT8DHLxGSnxhzw51k6UE88gtJAsM62iwr73GW9YZA5oRUZ9M3tFoq",
  "key25": "2q4ggkbpAe7bV32AMWtmAu5qm4ZXNrHGFFTcPLvTtcfmBfKKCcpPjXrjHgatmJX2bm3u7igy9mCUjnrb55KbxbfY",
  "key26": "5YdMACGYcJGpwA2cj3oruVXLAo2knD4ZYEszPLFRYgJRtfiPfcWW7KmD2qqgRxdEPdimeoq1DvXVebthEUYEZ67k",
  "key27": "4o93hggKgBwCNEhWHZfWxrbqcxhXezNVCRPkJjnxb462nZ1j7A5MTxpNe7WYHXMJGA6CzCiT3WCy5rXUKSepKRzK",
  "key28": "4FfHioxkkgQ3RkH5HixFkNLvYkkyhmXGSvyTiDYFPHZCx3Qod6nYuB7fGHDM4DimAV3h8EE6kxbmajYnTigMfZ5U",
  "key29": "5f1rQT7sDQCycKCX1Tkx9SDPiJkn25fshEDgwyp5YLD7eKpqye1Xjrdj6bSuQZUM7v79ft87bWHahQC6NKyyqqXF",
  "key30": "5Mr86CoXCxip9RkfyE4AkGhydGRzBRSAVKbLycX4sgHAwnq1iBetUcX671F1A9hgAEQLX8mLrWKW4NydXZz5sf2i",
  "key31": "3RY1CD3NzRVZfAbgGQ4hVXXghwMenxXCXzGHvWqjBgCSHL26zZCvkhK7L1dCvdg7nAkbXHdcP69Qmk65mxAjeU1e",
  "key32": "LKnVH1oCBfW36fNejmm4tUuiEgFANwjvcaCtBkPTWttf26DGHcUwFjB7LQ3Hzdn7j1efNdXpt4ttsj96SSfHKMd",
  "key33": "4PjbJa7nGqD25V61LNDHJtcX6cuLe9dz9tt9ULJJyz6eTjpAKyq6XisGPbPbGfPY9gzCYqgWgM5n7td4BWFwxVHt",
  "key34": "34D7PqiFcHHdy4TxTWXhxJDKNmo87hCPsAT1e6eopf7N4CmzZucS711AS4wqpVJ5yS451s5i1TubHpRMNR9eMfDg",
  "key35": "66FwSJN4X5Mdh4KhAFFgSiA4xdTW1mUMwkJWUobDdqH5YGsvKNP2T14hRbNuFansu3pdYLkTeLjYiJQruFsXe3vt",
  "key36": "5dWYo9r9YohGCwsn2dPygx2AMHehst5UpKGiSvgNPHbeCaupjf52d7NfqsjqqrnSKJJ2M5s3uWc34izeoNutQA9F",
  "key37": "3XKMX2f5E7CwVfRoUAXkcXQ7E312L3C9GQWstTE2h2MR3Zn93ePhkg2yuBq7j7SRdckqQimKcebAzVNpDvNGRhEC",
  "key38": "zyXwGHmSAbug1KrUEE8V65KcbjY5qiDZucz77hDdxoGdNXezGGHdyDgpkjWY4KwUNgYjvbU4WPCjteKXK8tELzG",
  "key39": "3uuitjrYjQoZWTaSHcjARCPoG39w9qeXwFzs8f3iQb9nuNHq7g9VBp6cYgn1NApq3SFin5KYHgxHMvypWT8epLFq",
  "key40": "5dZGR9NzsbNCgKsFQSWBkANgYvJhKAzP71avz882CkVxfa464NPCPrMY6jWTjtTMqjH5Qycq1LoNjao3UXgnrw4f",
  "key41": "2R8SSjsFpG8SBBgd1H7B4unW1L4M8jnkeS28Hqb1zy8d1SFJgWiQ3HU65WqmjdW5EVQxDENfU8sTz9tQ2ZfbdiGH",
  "key42": "3Db4B8sKPUgEM6438XbwX6GPP1KeAZVfNjKprrgkJ4zngN7rhAp8y1yPFqW6367D3tYaMSEJpVtMXsAiFcc58BX2",
  "key43": "eTbe3Ysxp1xb19zY3CR9AyFLD5nssGxEpFi6kfrB4QA53SqnFCzmJVSKDa3zhWmfFj9nhMqnQDdPMx5SUYnUwFx",
  "key44": "4TijnGYsVBfNLrmt2hLJkHWaRRpgQfVT1yYBZAMX7SnmfJRbSKMFDT2uFMhwiRVr6aH2t5kMnrU6UzgaTNojp95m",
  "key45": "2TyaBaRPYfBaqbVRi1FAM4RM6Z4jtQvif589zFZWtQgFuTsmtaEsJydDv2cJ34vBsUUxpiku183NwuSWUEvQmzvV",
  "key46": "2TW7fqs54e3biT6dzZQeawqWgrX32go18eCv4saWTjzjGM9h9ZZY4wLwKzTMiMxWZdhWoRA5Z4WLzhuCKNqpKJXA",
  "key47": "DG3HZYpE4mhoHADwbSzZakxJ55PXHzTeZhRx1huheE3t1wyACgjCyMzyFb7cj6t9jUxrnDJfknKkYEYFLa9y5oW"
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
