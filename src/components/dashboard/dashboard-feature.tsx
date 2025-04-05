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
    "2T336ZRDcs7jW6YcYAPbVxMtZAB4KJdeESRvbGXN211NVcqNJdzM5dzc7oTed91rpnth2VnmqhCBidCuu4qt4KFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsNNBjX4n9sExGTMB2M99o9T1PqJo1yCXwhrp84HKRd8a9p4uUwKAX5nso5QrDuaHyATSVG1T7o8AndVPCR7TdU",
  "key1": "2aXuEs6PyNbqN7LrFgqGtXFnGUnh4sZYYaDkXmYf4RqZWM5DypQkVyCC2jryftteEPzXnTFBirQNUQDuPuu6eyY",
  "key2": "57HUUZvG4ECvjrfxTcjnhhCXaDK5gRp8eb2wKTDkfAStk3A9aQhzTofr8ThRGTdMxv39scM41deqVQVFchhDtxT5",
  "key3": "ENVi48WpWpYsvd5Z1ocxPTdu86PZoN9zTjV1vhLq6R7WbVmVCUrzEptV3Y4LAADdBuBuXnasAK1cVRjKte8YMRL",
  "key4": "3NQ7dnQrmtWgdSuXQRrRJNF4H8PT6i2exDbXw34FvyHsF3Yv5dgiimp3TKNDekV75qF5m6ty2o2fLf8TVbtAdMqs",
  "key5": "21mokmmASBeztqV4y2aRxixVBgdMDNaSzr7Fe5TWTYp64tfHfWBQ796NF8Ap5PGQUx5CLPYfHhVrmnJAA4DGSAFJ",
  "key6": "3yaDvq8uRrJwegdQsaD5oUduz6Nih4cGBW6AkTHMQ91wp5ydNsk8RcYxqJCt36Ee19TNzdxE7bLsvcBEa25fwwtr",
  "key7": "2xKQkaCDr5nLfiZ3zSFk6jPppMms3QBDsFg5AauUSQfFPwtB62nJRrmkuyagErjGXmi2A3vPo7J1bSq3q7wgQk84",
  "key8": "9wGfqXuAMsB1SWtoCk59vX4atR4EVvaMxLtyBJdJx5hCvoaGPaxx2wDGVafhisp6qNE8k8C2kmNQN9K4GvjBH3G",
  "key9": "2pEXPhCeQGDHDaBZbjGErtqNbMiTDrcGwHwTtJsb7Maxdcu8FimWc9nTYy198uLAof3oHxKuR9w78CJm9v1PnoH1",
  "key10": "5eYJBpceP9p4dwvmBrATbgWSgA2BkpftuAJFxkJj7SNQKR7v4qZ17i3xPwknbeupfoXt3gZvtSGjgTygX2oXfMM4",
  "key11": "45NqLKGyPx3JMoBuSVz61LSd4rQvnZ1thL91YobWoW7dQDFxAE1JWhxQXAXoPUHuhiUdAaQaShi7gpcsZZeZAjWS",
  "key12": "4X7rXNS1A8VZLQmpjnGKmEL44hByG3nzfPrgn5xM1LC7qFyp2SW9Bkzb7S1rdYMXt9HrQZqu3xZLZu1gUvqUJgQj",
  "key13": "3ZwCDRnoToiVT5rCRkjPBG1f41mxQMhFqtgekWAvB6HrPeNuoZ7eNpoKChFVuk7UYiTyAxeN387aeQzN4EysJnQD",
  "key14": "3ZNvRddqiqP22E6BSopeW4ccKB4U9VrNagaFUAgwzB3oyC6Kjs4xc81EropjoGa2zRkwWoBj1Q54h59cZe9qsvA",
  "key15": "cseazAqNBPC57wjBdszrqjkp7e1FXmzb9ooHmZYJ9GJ73J5Wf2mKk5eTnKcEb3Uf3TthX7Q4fGM3WwodWfV3oic",
  "key16": "5sabbzaEvi6TVbmQCGthkRu2EiZtTbheNr4zqEstM1Lav6PcD4Ua172FHLRPn1EtLggpnENpQyt2vGRM39M9YVXu",
  "key17": "2nhCgJRcRdjrZCR3z8qLpbiPWuetCqSorkJy37oD362dgeQjU9qEYkoPJPTfw8Zt1YPKyV6FYY6VZRrc6qxymVoD",
  "key18": "4cFuMFnVQ5ana4vovvpV2ceHHSFS62nKssdTjDzRvt2ncUheCdMXUsQkhpz6fKPsGTjcNcj1vGY6TSz2ikFMBPQL",
  "key19": "2c8zF3a6DPkGPxEuFGdXjhe8yvm3UgXoLKCCrkSQhP2WBuuHyANumkX1ZQXTGENPoucgP8Gi7DdSbdk149Zn6qw1",
  "key20": "RFfKS4VUC9Mo6k7QjZjsAF9owyNHAiNFxrtUDiwSV8rPeeASEwH6EMG3J2npFUDES5ArNufnatmti6p3ysNVr2J",
  "key21": "61ymEXPTwLTLJqvrunDktsehADoWY4jtrY9Eg8cpWCqPYxkCQfjzG6i4bz1c1E5WLvWygYQAVx2vHsbf9RzKRNjA",
  "key22": "3uQQU8YGAgAhJ3NTjN1hTemTpshhi9v6ApLLz3t6DRpdCZeTh3SBi9KbxkB9WDRXD8mhj7UdUjRg5phAakWUH3Q7",
  "key23": "5DGhpWkv2MwgNe5kxRwakXoUTJxd1CjtD29oRFcUEJrvCRLqRh51eGche48PTX1nhgaQhCnYFurtnx4TbAKNd8Wo",
  "key24": "3LTcai9oWveGiyjPYgcNmwPAjsNpWUnd1NufoZ9p45AQohbTG5WKfb5UFWePhMg9K3VKCWJitTL9R9a5NzP8HKNE",
  "key25": "3xT2qqPtQrESagqXQkcCaXWMotJuiMxbVPQ92rZjbU3sxXknv8TfZ6KWnywFnmKWUTxLKeRvhbMxNakEhTSgELwi",
  "key26": "5XtDooqTgRa9CopuvvCsydJkugj4mMCWt2ZV6B4nxVDLXYeS5GPA53kRHFTAQ77Mpk2iaRBKbEDS8BnwMghVr14Z",
  "key27": "3Kk8TAWXf6VFmRyVvykXcVKuXWKMW1NzdTnhXqwbVzwaSLSKNX4BLEckHJsiUVAqaWRXwK8jH9s8s372ESuwa6LT",
  "key28": "r4k8yPKX7fJK333wbbQdAMakyaBDQqBgpWbaGVrsxMY7mdK7U9zAaSnr7dkpHvdsHikoySXdc58bqf8y4yAn1uu",
  "key29": "U4LZhGRMzvHC7GmSvaZHu6aX5DsacRTgX87eL357NBz72vE6u9SvwWoEQAfhuJVwZANXZDYR9rPTFjLpBwNBe9v",
  "key30": "B8mTZ2hQ9Ud6RZGC2JdEC4Ek5WkgYFdvsw1RVrJf4LfA1WtM2VJGmnkC1dMH6tJShFGsXkanNYdwtAdEZeZre2F",
  "key31": "3b7Bsyk84yDQRGizv9miKdkcBwLYzomwpn2KNvaKkG72HTwkwQ9S6Raid4bWRFZsyRwxRhwfJ8ZifWF4cSujQaq3",
  "key32": "5VV2BBdBXXnuF6Cev4zcHQt4DTXhoSaEfj8avWFQK1589JWRkJmHN9t5xp6fkG7E9SdYkehchSZz98d7Uxu7p2vy",
  "key33": "d82Qdj8V125sM94T9RihBhbN9Lgq4uoWadanK3tQsuYWKHRcwcWJygFkY4o1HwHMDF3hPrDr6neo2HzK36UywFa",
  "key34": "3Nmq6skX1xenjLbjG9d1Fk1uMBVRT8ySheFmtHmvugq5db22QTPaNQxJPcFkj2KgjnQgkAXiXgssctbQYQTJKdX2",
  "key35": "2h7gUMV6MrY9c4zYCgfwQT5EUJLdEmzW341z5n4iLJmxiPTZnL7Eon4X15Xt4VMbvE7uNUjvLHeYkZtaKn5644GW",
  "key36": "2sghxFgwy7yxiErWb2V1CHKzgLhKjXLMuCmBoJtaEp388QGT3REdAHfkyEeBC3Xe65VRYT3pZNDRVDUksbRqXAJN",
  "key37": "632LvHhoTbh5kDAW18DVVfgD7iGHQxTssPKayR7HPewNB8XSHXJLDY6v8CSjupU5jKu7jHaPk7otZdLyJ5zodV7e",
  "key38": "ZLWMmydEgjSmB3QbefsWNjCKQTLa4T6Aym4DsJsB58PGbtWECsx8XjicsKYCuGdtqFqKQYAY2FPXEuNAL2ckYs8",
  "key39": "2NofDe5JXjbkMNdArd3XGQEQ16WrCHx9DzQV3WLmYTKB3ox9qHn4mUnDcZuUtEtCmwbB6VusyaK4jWcedgAuJps4",
  "key40": "4v5Bay3s7tNcYU8X9hXn3uBrPDGC1vWRVM6yCwYKzJjHo2nBq8mv5tajDTcq8Mq9ruSQejtJKNq47FEbeFMDTXRF",
  "key41": "5FPDYRAjdw35JU2aMocDnm1usZcxdaVeRBN5mSuLwYED49peW38DSMRPYDunQZPPeAvTKyQGDTXEy3Y9fyHnptQM",
  "key42": "AsBmCPyQZYFysDPi8Bz5PtLofQEu3sAPZUP1xEyqSnbWSi3EpecJFNHe81uyeSLaP3kZLRZJyTV74KBisMPsco7",
  "key43": "2LLnHcHEveFiBT2H9eWQLpSeesVdffTZhPXhKKyyALhTfywvTBJsTcPv4u2G9tfihLRGaAPJxgDkquwugcxkawMn",
  "key44": "57ekdRFgokn5mvEUk7sCQuBKjMAnRmXgPEQCDR6HByGETA2Wwxn8sorXr6Xv6Bu9dWTpbaxA24BF48c6tyHnQLXT",
  "key45": "2Wc5dNBNTzvEXRapUgZ5EmxCzQCzhzSuZdJuD2MCEo9UJzimfk2TaxEjh3UpHjrVHcjePy5xFACgrP8VWqs6cWdE",
  "key46": "87XyNgLA9i4uJYxrXx7NPUkRya7jYUMPPmQ7EP264XbaS2ABbyCS4kw3o6RF3QC89gbktH7nxuj72acSXPxZGRn",
  "key47": "4TbyP3xCSNcZ5tr3qtKhNxVb9HnrLzBzdyPoTFqmF36CB62wbEyVsgfVR2MGfrdRXo8dDCfYeEScXPDoVnQyGoZK"
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
