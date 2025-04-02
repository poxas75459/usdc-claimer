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
    "3jjfYoQLxmSbF6WG5VgDTd5gddM97aZHVwDVskjCkJYC54tdUAUjc4E4H7sGL9nuCBtESuf7Vy8Y851kanymFqjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvSPVRaTaYXwB6g9V4bfmnU2u5AZdj6ZyRxHraiKSD9KX8aeXam1uz5CxeU7wv52qEq1wf12JQPzvwpLGug2e5K",
  "key1": "2RoVCFtnSDzpPCnhJ4nrZ9gVT6Z9UfNoyYGUMc2LkTrhXrPSKQFs4JXhSCJQFWJmLHZJPSmce7J5PdHv1vYzzzys",
  "key2": "5byn47NcTkgBQsQ6B72ff4jsBkzYmu9mcfTrZk5vDC5YXjeMvYSQ7ayt9hHxebhtokCKG8QkWMkYXgBoVmdptZ5n",
  "key3": "4gKQXhaMPeb7qsT9yoC8vAzbRUeqrhirwnXe3J9hxBkdGDZjoyLeqPKNusyi3D8ENoephQ1bQfiethHPTNvXG7Xz",
  "key4": "2Hx2KmpDY93C3EzfXssHQac2uuvCknpVtaAJZj65DygrhaZzjP2YSbJrUj46m396heJcrL4veLnrHFRBPHE3BVy8",
  "key5": "3GbESCMeiypvjAuQT9aGQR91R8hkaNgh7EWHv1Yh7xj5a3LmAWSSKkzhEJiy1fLLnaqVR4b6qtZszTtF7ZiQ7Bo5",
  "key6": "3qBU77cjEPYQanar8idKBq2ptYdMcBdCEy7znBFWwZ676of2Br4RbbroeDuPrasDKafY867rnSjzon3nEzu8iFDQ",
  "key7": "ZBTrWn7ZtwwRq2LLvrny8xgvFggAwQUYNkngiPVtDLyCKxcqspdhpurDWwTLUEDgzqf822Lc128bZNE4tZ3rU5g",
  "key8": "2kdLfACYYne57LQbQYWDntVzyEgh3qnwTm3g3kSGAgsq32AKfY8wUFTstPQgAP9ikxQtpEkwf9VYkTRdX4zgqG4i",
  "key9": "4kLs7eWGV1a8DrJ1XgU16zNt7MEyZnyt4S9r5tffvDtvzMxc5D3SdoPnjzQoPA4LZpnJUsK1YaqLfiUzjgK8VkbC",
  "key10": "5LazTfhjbQXRW4oAqTGhCZxQUdPjc75Jdsfi9uTNefx4SRBnTxbqZgYb6c1Be1uUqFCUUc2ByYt8N64shtHr5RcH",
  "key11": "2aHgzrRiSLWG9uAVdSsQP81WhjeGg2vEEjgr3HCafRYsCJwrMNeZGvi5YJfdYUTKc14knmhYzYD9VAbftofuDv6K",
  "key12": "58s2U6oEfsD6xWPdFs3dd8EjoohQLfTah1PDC8YvF3cNDvzmzuwhfurQSkcZ8fYYe2WmZ87o75FGZk57dmDUBxoR",
  "key13": "ssUbpiFMqjGM2jdrdeTyaufHC2iReoj6BgC6tiHp4LP2KnHipuk75YhKCCEzAzactp7VJewgbAucBHwQ2BA44A9",
  "key14": "21WTA4yaKDhE3st3gTRbkcDoMPWdaetRkeijRtXmu2ciB2XKSVoGWefqopYbHxwCzMAa9TQYMpGrE5uauZYQJKDc",
  "key15": "4UNYQAhcMJRF7jKKGahVCZsMUrvW8oXadhMTyGqYTiqqSaeo1b72nXByVqhRFioPwVbuBKyy7JWV5g3rg3fh94LE",
  "key16": "57GSdRJAGiHAVRMomRGNNbXCuE7kHLYU4WArJeAh37XoQR5jCR6kh9fMvRzRWCfKm71JWJrp2LJZ9R67MdKCMj3V",
  "key17": "2AA6RwQp4QrE4NGh6NVaxNzFseQkXiQam4z81P3sUXuq5ChAQbRJ2R2uUm3geafrUYGtduUPA6SJV3wASat7ohdQ",
  "key18": "4hhFANLMasoYwpaBHdVVbmdjhufLpmy3Vd8Sq3bugb9PbEwzRWmid5NjKQJCV5P7WedQT8v2pxK53X1m9k6MCAwY",
  "key19": "2k3EBhZYHyHaQ1HtoMjCxvcUmyWeCfTeNbaLAaehuqrR26aokhZVenK4vUWs5v4hHLr1VTL5MkqEPMSRMqqoQk2h",
  "key20": "JQ4j15Su3jP56VivC2iqmmQS16NMsAujym7tjg2xraLmxYCzGvgNA3UGghNRyHbShwpHp5X3JfDS2HA3aJvW9Ed",
  "key21": "57apfBK3P3uzbuigXnYvLZk9ojMMnoeQmfPYvGAwhN4imxpNoHihtQEWb3rZ9EZcngMCWqPBmPGLGePY2DJ4LsRJ",
  "key22": "3xxUnGYZ2ptuLkQ1UMPVU12TtCe2Z1vgGnxETdPSWijfcW51RzABCHevjFqnPUHRUyWRkvKRFEtH1ejQKKfYKYcy",
  "key23": "5EZeQrStTBYUjWzYyDAXT8EaSgsts28ooRHyUh3Nsmk1ZQL4uryBC3wR7PC5a11mVKGfo4aRD2UCU5PVT7V1wxwK",
  "key24": "5JQmm9MX5MN3P5xLCmpmTV1EmDBrcEu2APohkag5PCLDv2LVb6xWHUSxvreBZkbk5P3KUb6on5cB5UDY3LnBdSXo",
  "key25": "4fTsJiN3o2HJf3EmsKFejhhmDzyUnnuow1oq21yU5gdbkLEYCmVtDudpjtEwzaq8v6Z8rpomKRFJvXYCPALYwnMF",
  "key26": "3zTBPDxVR9YTHAUHDfsEPf1EpuzLg8J2XKmmtjmh482GRLwPncZuRReQruB4TX8LSg3YmMN1XTZck9Q919r7Rb7H",
  "key27": "4qv7DJdAdmo4WL3LwYSdVWhXcbUAru1MxcCtdjr3SNCz2RwQcFFnQ9xJncu4qjbMf41kzp2PWP73CdRqJyxrCvH7",
  "key28": "4bStXi8J72991hz1EkMZK6VKyMjaopHQT62N3EX9ZMuZhVTin54gcaFhb4kpSDJNUHjfwWJ8ciW5MxZigw6kyYb7",
  "key29": "YfSvYRmzQAxK67Appc4fFq2kyPK56LniBCptfJkhj7XMxxe4kphqfkEZ3QEVdB7UJepyjdugFRH1141kCwvEeoh",
  "key30": "5woCmicCAdKsCnfJHAiLRVdFLFgenjK13RMKxUzeF6Xexi3B5KGArvaEXxHqoqKV3C2ReN1DjQgL1MHXPkPG22BN",
  "key31": "4NkCbjLc9xRkEdoa2z4e8rDzagUq8vrVTeB8zKPQGLcBku6F5aNRt14gMZSLvKfpVM3RJ942AjFzvet691HZT8SA",
  "key32": "4zp9xKCPrNKvQHgLF1gzfjZBPUaMEJis1ZwohHGJPn1zspBgYH1gurGrJz9EpmMxC5v6he8B2GvBDHu9yWWFJwqk",
  "key33": "3DQjM9aQzQaQi4aFgwaCeippJbgMMxe9usWSaj7w3KToAzykugSrokJRqFuv3Y51fneVbcJ555mNYk18gU9oy7jL",
  "key34": "JCcLQuM51f8cD6E5qjBC8AtbE7T8UVKLq2wuT7brm9aLWXkGX93HsLk3AFRTopmvri6dEzAmtcqKoGpL8Ag8PiJ",
  "key35": "wZmWU1N4P4VUPfWwsK8y8a5hZ6xfcyFoWoiLd5j7ZsZGDwECkHxvEYNh8jcVFmmywkTXZYTHqrzwLSqF4YXXmRL",
  "key36": "5r12z5iLDXVfromqBh6dBUoPpG93WsStYevQmNbfxvLUZYpyPsVd71eqnDN6VG5z7KuRUhKnVLB9MBJwtx63Ndms"
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
