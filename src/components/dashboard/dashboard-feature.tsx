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
    "4a8zNt1uo3rUgQXcsLCwzPmh36reinhhSwypf2sg4GFq16cQhcm4KD6YcSjLwUhvGsgZXDkB1Uho86C5iFEnrd3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEpJk8fAPmtafjqEFb8d2GuUgpvWANDmDwSs41aRvemJc67by3qgjZAtFv1xJN5dhM98mZeMruJ2mTqjwvDfX7j",
  "key1": "3yDPK2NYqD8FYrC3qmSBWQZEnLTA9FiVginEzupBCnBgKqwXxtbgnp1rRgVTV2WAkyPHgKPc3mnXgTTVaCeJhknj",
  "key2": "3ec4WGXwZ9FRbBuvTtS4i8Lysg3Z1afQmdP2p1hygpmcE8W41mZ14LvuBWjGNnQjRd1H3YJEPvfZPuZuk71vLCev",
  "key3": "ZSRVFAQWVMSihDCrQ3ojwXsqzwXUPjpBGF1D6iXsfX5vUNWPVCEf5YQ9Lyhc3mHmM8kZcxNb4yJy7hxeaGeN9GP",
  "key4": "2GdsJWvtfT7ZyNqdHzDCpBojNg7ffZE4vrgusy8hnetJf434WtfZ7GBti2RHr58AJhbkKtsc9vBTN8ajMM6PYC1o",
  "key5": "5reeQuZTtNPKS95AiWYXMXCGCMLAqE1D5ioHpyoRVTS9kdFq61CiP1S53F9dtRwxPxZxmpJVTqXNRr8GaVVcuKAB",
  "key6": "2bFgyqH7n1fawC6ySqP5fwq7k5mqNennVpbaykH2P8z3h8YByKpm1bijdNbP3avCgUeLLKt4waY1j5Q7Pzxwu73n",
  "key7": "qNR2mkEYQ64RSTqYuYyXGxDwuGv2DWRUfTLtW3orqoFhzUWSmN7EbMzzXGGFW7g9cSKHDD6kDi6vFGteWNQtGLj",
  "key8": "3H7X6JWQ4GXZQtwXxBekWScdiizV1PfbH1aQEPGn3yBaCF9PbJ12FujX61JecSX9vWRofdm5Fvg53yLzJUNG6WGs",
  "key9": "3gbkkr8naf8WN4cG4mV5t41R2DkzJRjH6rDY5FA68NQVDFmtVm25FBiQJWAW2f19iKNKFtQArCZFCbcDPQgKw3jn",
  "key10": "2vHERmNa9un17WTGEyT4rEyCMcsXgrCvzsFaoMtqmYSvi7HrWffowZsHd6gcWRSSsm8rBSz6nFbLtHa78mFn4F5E",
  "key11": "1ZuYdxaN7zTxPfjHrLSyP5yo8mKtEc4he5QsegNbUMyEfiakNQmNFYPUvm6UFhwN5aaP16cuk42khTQ7BGuW17Y",
  "key12": "5bifNTcEN6jST5w6g73tQDcWMvp5bp772nU6UiHr7UgmibJ65UhL6bLNfQg7ATR1Jy1qCNo8R9vDj59Q9XncCsTr",
  "key13": "5ju91dQRSmUg2hWgipV1nx1oBSnnj4KxZ8q1bUoFyCGDVGvYhPZepKiDbYyCPNW8n9a7DAs76ubfdNpQtqwkzCnS",
  "key14": "2YDvqbHfxBx1STuHANrJoV2Xmvy2Z5WDmfVaz2CUnR5VrBz5qctCxEmnLHiefXGYcisbpFTxf4wEtF5ncqLb6XM5",
  "key15": "5ujN7UWfXAaPNJ58hrATqVBqChTEXRonoQRaaqEJh7ip8oMm6W7nwjB3yT4WDx7fGzDyqSBES7AoPTFaAzv4hRYL",
  "key16": "24rdHRueaBs1rTX7wozLcDo8HUNVs3u7jkhNr56c1RY71sAdWQX7YEu8qiCmT5yHgrR18A73rFu8XmyhPtbrEGtX",
  "key17": "2wJaiexkEDDGBFu6jtdjT8sm7ewCzKkWcEqQWfw645Yz5CzDYRVSMyFSFSvUVkCYGrvqWQMQ8usgWcjmEZch7G6a",
  "key18": "3rxjAhZgsfkBKXeMHZmJgbFYmFmtywyHvFWxTq9Q5vEoMWFWW5d1yyuD2Gi2udhFaY9nm84My3DHDnCd61DMgDEK",
  "key19": "5hcmDacKqxtxwm32hXSaeUUknUpZ2dHZLAKYgzjJFkgutx2ukSukiqzFsx7oERHB5Q9J2JNwP9A3eK11otXAAjkD",
  "key20": "5Y9mYx8FQHLbtAgijSMGPFNgBymGZtjhs9ZTF14cd92eFy8YhFD1REPF3jJoFxWLN4hRK7SYuWy8pWMBHkXsBbRg",
  "key21": "2w37hGxgnPRzfaUzht6MvWdxFFSwX2dWzrNYa17PQ14NT8B66uwPCwspuicbqbgWXMM2X9tnrAwvXu8NiCU8G7YR",
  "key22": "5PCi7nCv31qeTXj2KYJeCwm7hjsgx55r4GKja7dvW2f8PSb27u5Ha8eAycenr7UdU5T6i2HWNaayjhCtmbaToxvX",
  "key23": "54ys4avywxfAyQowyRUVx7bZzSJU1q8cw6hwJLPr2kfZtDDzk26NZ4vjkdzVMBm5bZLsNnV6wRvpKKaoBANt2Txg",
  "key24": "5spssBCfQRxCWYt38k5v5ifqRWWrS2PpdfuL9GhfobT2ZBzPTBGeSGDjCESFxfFcbobeNq9mNNRWrnVAdMP4YV9R",
  "key25": "14LS3kczHXxM831vQ3jgyTA4xL29YfFsfC4EqE7yWcaFaNpBShGuH4TUSLgaTVQS5zZBSo5M8pftfPDqYhRqX71",
  "key26": "2SGkj3CrrKEADB2qoafqvrVrcYwNhqgNnLjFuSQwFs4FM6Y3Vk2fvEXakkuwsgmvMtgoy4TJc6SVtwpB2n1CEZVz",
  "key27": "5novZ7FF6hrsmCjrDHZSnTYHzcn8kVuEvFHWypUdzxrMiRtzxFVG7hJK82eJTLTM4i4dw6Riw7BwznyYY27sDirB",
  "key28": "36gffLNmHyQnwW7r4nESpYkT9C2k2ETYyurmRJihSgzgmbuzR79QS95nt2aHT4MpXHsV64NekTuGf4uMxBHsnUAq",
  "key29": "2U5GeJ29woPRQXcteydgRQaAMkZcoCX3X1MGFh8iAfQqrk5nVagcxZC2nX8EJLnFMxgkEUT3MPh7vX84tgtZESYt",
  "key30": "5ccafamZ9J7rN8gnGSJXmWozxAEqnRNytUHQxA48Enz4wMtF6hubtMftfkc4oossQCj4KDzoek3hAT61tPdxMWt",
  "key31": "2EF4JMdUj3Jt9z18biEq9dQcYuLX2tDLH6Q6pUEPoMsE76FfQYAVqNv3kUhwvucES82R3soezimqaxWHb8VhiZKW",
  "key32": "2JeyjbAFouaRGzAHyifXnzvirpujiWhg8Vh2sSNAVGcxZdW5X4ZxYxaQ7Y78cZ5Q5KonnU5UwFs52NDPjAhnK9z6",
  "key33": "4QAxJaBve7KWLQoA2iiFFN9YneaaBCCUjJCBMnpoauN5wvFJ1feVNMQn2pGmnCvbcdhqZdSUknPubx37NHZhnJvF",
  "key34": "5ztxuD56eTgYzY8TfbfXrjt7z33sQm37xRJEL91sUfn9QPipTAc4a8rbiSzpgmJvuY5JpjZS4yNrTUNG7NHyPkVx",
  "key35": "2JYiYjU3BENNNYfm83eGHWc8hFagbuUJrAXNqP4xsPxdnms6tfvJHjxbX8Hxpy3aed4rVHWQzpvKCQaHegj9jaqD",
  "key36": "4eNBCC85erBdYZzGvb267rLDE4N449Qyd7NF3w7mGVeSfEwnvoY2gq1pFZj4SHmF8DUcnyx8BQGXS7wLMVXuHexH",
  "key37": "5FQydNrkPAwsVSAmiVQnqbs3Rtwma3yzoJtZ21FBW2xucg5oTmmtre8MvGHHHiarHBVQ72Bec1dqd5rvsvemDzSU",
  "key38": "3WhrjCT57dxptQT7JxTkGpJZbvANyN9FFXAuugjTQr8Sj2SDFdK3PN4qZQQFov5bisYsr6QRbAchAVjNRc2ZW7Ba",
  "key39": "p8h8etDq4nVQNy2JZTh4NdJ5TovUpxtsT19vBhTgoCoTNUjT8TFyZtwAVGJE28Jd1gMTainkiTcQj99Gfa9yMVx",
  "key40": "25oQBnhtPw6m8orNzxcrAr1zrNTNXZA3aMggHpfThgwrzTQhYtVg9R88RUdMFPTyHjBp41FR6PmCCx8zjBiakozd",
  "key41": "3dZYDezXGh3txSdgYWsbNiAR8EFf9VDBQdCenKnmF91PbtKRNTGNCFcTSYPSTuRnbHRQuwM6PVoS8VHDbqqN3afw",
  "key42": "2Amy35QLfyEEXCRg6jBzppMHgRRrnMhbeDg2Qsr4peAU8j4n5QtwTdXek7KAyDHs8s3uX99GLhAu5Td1vAkHLFKX",
  "key43": "4YurqZxBacfucbq9r71VBZaFf4q9hKS446bj694DrpUWDoG27a2wXa7dgP2EDFB6dbEG2D6f2YvZEQyjvZMXAaXJ",
  "key44": "Zj69kGsCvNABmyb5ZupeirUpV9f45fNmdMZKFyNiQW8v6oa9zjmKM6DNAeeGzMVgp74a4z41yG2Jjvvik7sMmRX",
  "key45": "5ozrTdFAAgA8bGpRYA6TZg6JGNSc9mUUupSc8Mworcd5dEHiN6UDJLF3wvgF5TvSpCZ22brw3nu93zn2UYz2kGdi",
  "key46": "5TZq3TAUkYWF9QK8tZM1PsSn5z4bzTUWsUZFhQXJTv1k1dmFXuxyTGK3i7PS82xDdGdpPgbzXEGdXpnYUzVFzpzS",
  "key47": "5rnPoETu9qnMtWSt7cUJ3VXGpiEWqjN6dqJg3EKs8s4R9CxVgZC3gwphTPEMGRteMazH6cxZi6WE1XvXynFRd3kb",
  "key48": "2LFvA2UQTvE5tMoZzSgRF8xcfe4dna8fu6KBnZLfEEEW6M6S1f6nrzqPgiqL7wKDFqrC1VPr5iaBtqWaqgGRrwzs"
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
