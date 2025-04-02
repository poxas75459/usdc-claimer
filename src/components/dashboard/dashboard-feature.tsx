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
    "4bMKzztd29bPEFg2vXghJpWU2Bdc9bdD3UkNd9MZrFTkWgq2pp1cFqN7LMS87jaDqBh5ej9SEwZLUhFHWKLNnY8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3yoM9BJEEKQjCN8z6RJWBmiyk2SUbFmU2goZjnpTbP1Wrgi7QLLJMQzFRkuQ1TaVsVjRsxs7AH7Uxsj2hPzPyZ",
  "key1": "5zKK61Jav1Lj8QaTCXF35y453ayrtQcaqgwRKY2bHXCEN3eF5nr5inghfgrznPgv2NjSpiMQoTyq6aAjtavFuz5",
  "key2": "4VBYHovzFqLM4dQT2mo2QHtw9j833EJUG9RXVhXxc3wWyMBbeExJS7PEAAhtWhiyr4HCpFaZDvNvQ4c5CzHdzdt",
  "key3": "3dGgZAnff38PcDnoY8sTBTjmQZTvRNWeWp5wEV4ZpqLmHKjJqS4rM77nsDpGueuVfKGxddj4B2hnQzMhxqDNq8UD",
  "key4": "3AfSHoT2MpxCmvHLTgQ4fND8k1cAkjw2yvJHL9DK3DNibHqVPjM7GPfWkgo5whciUCMUiuHXSchF5L2S9sY9xJXZ",
  "key5": "5SZyGUMWZSJmuKamM3Kj5G7kEacrSCwdkE5pdBw19GFHWaySkwokPe4Mj8LWsLwLyDdCZjnNDyuqVEqj6rwpuseo",
  "key6": "2zHym2Qy76jnqtsQ7gWQdA5RywGfE7hwVLW6H4yv1cNfq7fNFiDVreqJG22n4ZyV9wJdrAMkfuRa1TpvriA73j85",
  "key7": "2ngxg6pXxny351Kxt9qCj4KSprbX7FHRfW1MsxfV83tEbfY5uf8fYqeFkeUFZa2bmoDd6gdpd4Y6ctSTru9cREZS",
  "key8": "23YC36reyeUu66ApAfAiKEtujqoUP8fWmUCYbafnQNxL4D7GvLmxAeuoj3uaH43b9GwMyMpNYScNaEh5CuoJweZE",
  "key9": "4gpdN8bjhC3Naya856SG53iwjvU1J5MBT2nGH8L4hi74juD4mvcEiAoTUFK6pM2tfB1cGRK27G1vCc24thpzDkWm",
  "key10": "38JdkzeUSgpdZoSw91rTe2wn36HxD69PKebAFzrTTvZ11TFkeWv9pMTqQZJx6DkTpfSNgknJURjJEdLS6XnduD6S",
  "key11": "3SWZTVrh2yHFJGbvVZ1VBiEKEUaw8DmG9pFDUThHNG4xJ9gJD8V4t4BcVsTdPFwkiUByGSUTHjjgy9Z16QfdfycV",
  "key12": "5cRVtCJWyk2SXEVLqyAbm4mw1jMixuivLcEJwjdvwqSB6iQW9PMwY5KVAHRcqbSUk3ytegwn9heVkL1SwYkfT9cZ",
  "key13": "4SgUFntxRKMsGYSMfRpxnBgw55ijxbSBD6G7UzMmruYJpAMFmTd4daAjZWwegFt6DzWciP2bcnC1BcUPLGJmF3Fr",
  "key14": "5t2QfiV3bwZSs8rLyNbofLo4Atirn2tYzkPmwxrRuuyDbvhya3Ga9zqS2D6AcV9amikCak2qyTtwDsWtEyK4t3jA",
  "key15": "2LXmFvavcgiAx1PM6AvA6TKfPZ2sjAYcK3fQfwQ8rM6KUP9RCbKf5rvGfnLwqviq5ZLf3Sm2uQGrKB1v1LLNLhfU",
  "key16": "WUDxzd9yXxnhRjfF6bFZwLJTbXZpiaAhzggASAYwyDxC4DJHmeQh1q3rzDPNPU6HkG1gcZJaefgoMxh8nPzjPLr",
  "key17": "5k6EYV7BM1EJvsKoHRepTckHSr1x5f6vgdis2apFKqsotyFZzPQ292okZZczAhXuHnyjYLcQMRYTDSG71zwJD8cb",
  "key18": "5V4jyeTCqMAMY3eTeC5Ux8pyRjq62KLzjuQzzd4UaE8yMPf51dmqe2cpA8f41EFosbBHZHMbYVrYHtEjMrbrrNM4",
  "key19": "4nXxeEGMrP8fuXwrhSiyp9W8RbzxTifDaqGs4HfMiJVDmHyMnzeBW8j87eGec9Qz7rWxszunVamwYBo3qpwfeL2n",
  "key20": "r7jEtrfhL4gNEC8HxKPSFHeqS8Zq6QKkFKZCDHFTqHcWcKV9BZB49FaRrBetnZg7XmkypbrWdCbvvHn3jEGqequ",
  "key21": "647SD3BMcf3FbuJaxjRa7Bk3nnbLthMRa6NcRdiUrZAAA25KqLm91AxEGNoii1tX8rJg3W3aPDi7VbWkvcuWyv3A",
  "key22": "2dXDUNjfPeHsnG5uxKKhUCmXA9QYnndSTCLScoqZwuscNT8czEgqFSrBtFyz6FfTTpUePRdCnqDu55cUzwuoGyN3",
  "key23": "y5bF57oufHdUa6vxGv1mfCwyZAqT5XWi9Eq7JTi1VCRveXtnWC4r3TkPdL2EtECKvthN7XHjfgy5fzdS4pnma6Y",
  "key24": "2vw5DkQxSLsRWr527MpSPNHXn6kpKxkK2ULBhgUxc4e4uV7uArUH4RXuUJtihpkiavyyU4T6UQyrHaP2CNqvgANT",
  "key25": "wEfV9NEu6TFLzaJWPi2C1JRWcmE8NjzFG43MnvitEbonFi8Yce3CK6WmFuGGmk2Zw3bAC9fMQPU8fBiPdq1DHed",
  "key26": "4j5imesbhDtRiwYJrjH66nVYjAQxQx8JAbpKrxo6pcWei4AvPJa9gdT5YMiTrNdLSqdMihi8iuka3HMHsjoKgrv2",
  "key27": "r77n3teFXzr47kreUuup7ybzhdywrYKpzRyo6x1a1TjTMGJK3ACkcrA69gFG53cFdrQrf1vNjvTFH5Gt5NdTdpj",
  "key28": "57CTPcL48ynGmCRTwMpyg74jpZYqk99yvqqQgFD3ktaqU4FnSEjebbD7mPVdKNLAjzgk49mMSvm2Q3DQtniJVLUw",
  "key29": "2zJevmbmf7Agrgb5yZceykriZNfJ2KdBqB9y8KkcaBeXBDRX2ATkr6YEAAqgeHvk5hedK93NuSPKEmFbxXF59eiX",
  "key30": "3zYsu6dCoP1zD7VjFXb3pmb297igHK13oNiXhoDLk1ZdoHPjyrAKscAARTm4BvWZJj2qjiPCpqUPqJpdE4QDhdi3",
  "key31": "P2LgDn2aLcqCpvGDPieEGj7TSWF5why3E6c3Q72XFbCSYVVqSk8eeStgXUoTgcQDG88vPFxtt4nJ88SYQnsNscP",
  "key32": "DS2uAAuCgdTfZGbaZvBV4HrisQHcEHLtjQaUBL13nFqP2fgzpGGhEtjuAznM25EUGbCQycL2636LoS4qBkz18wu",
  "key33": "4xw865Mxiw7ChUjKf4WcKbyq5yVAXxNuQnZfGUmAvNjFbRupcM1iDqw4H1WNdLatNtjFv856Fs4xzQcJkDKQgAJw",
  "key34": "C24L6By3tSy8DSkBu7nrjgc6Gp2oUMEWmRoQa3GpnSu4wHjqnpUd4KhSMmNKiHMtq5gL6Uqqd3Xctdio5SjAGg9",
  "key35": "3WNze6HjPAEbdgwoCxwvjMGFUbWzAQi38fdDtHTAfsGk2Gu5GYdgWyi5otnFvsZqnJNdKBGj9gNb7qqeZ8UgSpki",
  "key36": "2u4rSyAZtXq3HJvwvyLTB4qtgddrtqF2LriAbyM6NrwQAUFrdGQHmjcoHp6BsZ67ZKMAwvbjSF1fMmP9zqBbtYbb",
  "key37": "1gmb19PHGvk65jB4Z5nU1QkSkQTcGuGAE3fzot7vKMGkzLMehjXza8ga2Ubwx7u3nwSKHGzvs68v1fzSVo8bjNG",
  "key38": "5gjr6UKwxKAZDxnuYK6ungfAFwVCYtEJChmBxx9LYvNxuupeQGoe9KSB7NL3NzAGtRRRC3beUNZzNvJXtBUrVgGi",
  "key39": "36rdnx23WTJrJYVSkVESFRBXnn9hwBhNoYAGH8rf6kP3dQyWJYUt9Y6Z26yWbTLiLchGz6Cb5h3bDJTfbRaQT4j7",
  "key40": "3C4ctMJUf5bfzsKSAyUeSm8FmCnsy7y6pLvPj8mKu9sSUj87Ge889v7m3rrAoC3AcEGoFTx5sTzMzXh6U7i82ezT",
  "key41": "331HHKs2Dc8TSjpqDaK3R1JScjEzPJcPGEWiaYHgKkMEeL2sD9nKy28jHxkSaYQonR5DsKhX34CzJ1jGh6jsXhKR",
  "key42": "3heaLnZC12RHrSezBghzVi3fPvs3QzeyVLCqraECJ3zy3aiS4jjwZvhA2DVMWJ689xyrY9NhzzPbsBUhkDBGU1c3",
  "key43": "4YpEwmJyzVj1L4PA2fTDZrxSMineGw7jBdYGEvThqPvu3xBugrZjN2r775dZzFnHTsrAjieYe7QaqUaadkw2JVrh",
  "key44": "T7AFxGdx6jeAp86C5ziCgQbNygHFXcDE8LRRMnW1m6Jqn9EPC5dKjz73yzpzrbPYwupMhwRNm3AP7j81ukXQgHE"
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
