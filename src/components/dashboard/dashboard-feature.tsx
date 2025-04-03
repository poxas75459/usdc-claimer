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
    "3wGgRDzPYDLyzxkJHYupcqF6awdVYhzEUA9EtmCHdRd2vvMB6pELrT6JBnE3W6G2CfRJuAmBpFJGmbLmH8cZsC46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3q5Z1kWxtXbK6qVyiHCU5tmYLhccQf11B5HS6fNrGJwcJWyZkJEk2mrFGA4bH9eUENBF6dT7zDip89BwLxd6dq",
  "key1": "2WMg1U88jk92CZjcU1theNQYZaFZXQPRAN6NnRobRkENBwwXHPTCwqmUMtJfjvUAmeoyRoxydMfMeNFXhatLBPpE",
  "key2": "52ran7k3HFttyKqvUWf5VpwD1hWfesDf2AMpPJZ9LUoenJxkxqn4N6FUdQR37BJaMoMz4ktNTr9NXbUDDQRu6KB4",
  "key3": "5drVbkwYNSMN9bQewVM4kwSrGGVKjoP8dEeaVb9Hi7wL3N5qyq3VPpjA3mcw6TK3oFNWzLmyVNSDYu7kArC5neFN",
  "key4": "548rc2b8d2Qp5BL6qvSXde82tLMk39KyVTzef1D6vko73FkThwqBPJSQg71qXacCgPoJ991AZWC78qf4CuHY5wRS",
  "key5": "3siXWxK5vS2vsa2Du9qz855zKDgcjjeS87h156yfw9M44KCdZbDSyhCngtbtDUdWYFgSfRHARUQBLdE4mjZsqf2W",
  "key6": "3UggtBmmMSqNSjmKWJkmWJbbF54NAqWzbugtVEe4M8XzYSpCsHZJFLhPyA1PYuhP28TuF6bVd69ySZss7krVsrgV",
  "key7": "CLvEbda4hdKoxHYNihgif5ErQ6iErXVvnydmoooU4ugyfp8n5Gks9UASKHaZpqjGrQYchK8vYDFQ5hPj9e3KuiB",
  "key8": "3Jcugb47ATKKd9znUzJBoGBV2accL5stvbZZDfASXHAzHbrc7EsWzW19f4izf6wbSeu5f3K3EViLr4JQPyhKCKnA",
  "key9": "3q2vDsWsa6iTS2aUnGmPLPDLWHvv8mMAAiamyAQKSFEeBuviaNw9UUhnmdwJxCnAJiWRz9tyTESAhQvyCz7sP6Wq",
  "key10": "5kKizWWmgcfK8tzdnRaLDSPWW5CY5SNdLALomEN6AVBKRdPQUEXBjcHuDEmCiPPjjwZzYFpUXhjo8n7uKNKqZF7C",
  "key11": "4LaJ5nqX1Q5VrGCXNfB82EKC8Y6ok9HXFxdYp5sVEs8nPZUdF7joS4HbtSCtJEYn5gYcR3f2tcGAk1VTk17KHWpX",
  "key12": "fbZWbzGp8iqEncNfTXAg774tUbioizJMMBkJchARwKyyzuVA1ZcEN6e4w1LGAevWSnEXTK4VVHAUNwZQg18AdJX",
  "key13": "32JHTkEdp4g9pMmwRsVkbpW5a5LkEzpY9KrhUkonVy16isGrnTsbutATAiQbo9Po1VvjBCg5u3ix8p11UUjjCbam",
  "key14": "5ghw4Xc4aqmbi7HKg6emRY85SgatmRTJ1hi457XMiEt6XfeGiskT6FfmaUX1Mdb77sS1ZUMvAJTi9mhC9HFAfwgX",
  "key15": "2fWHjbsETDwLounQSLagFSwfskGaAdMShXQgmdWDboevYxmtqBdK4tGcxPaJDk4SKzzU29fd9xV2Ght6gzGtBdvK",
  "key16": "3o3YNGHLydrhUeMTmVyoozPYWRXAtTASFf8uPrQtZT5kXGPF81Zh5TqqRcjAeLZRYCB5UHwCghAjQ3GhMhPAAHoG",
  "key17": "3DD8uf7m1WjTufSyv3RBN132RnNnpvN5cKUDpCNP8TMeni2u5uM7B7TCsYR5KL6ec5vs2bwaxVSbNVwRi27XZwVQ",
  "key18": "4bfQRi9bQda6RCE4uK9C8a6UTth77rhyKnWa4tPemNo9EywCWuRt5uMy13akkSPijCEAra96KmYkkTT8peWA9bLd",
  "key19": "2NY85gnc9qFfcTLetRJ8S2N2h7NTZNxF12Hjnp1vr1WLxBdTuWUJD3mD9S3ofW4MkCNTCamXpfrLBHVfMcqaTony",
  "key20": "Rqjy9WVwnoQ6947bGmXLyB1hADP8SBUqFbnxDBMLF3k14JWfNuAX1tiWL58WdK8xKFgA358g1LL4dLrNy9B6M4v",
  "key21": "61wzTRznN1kU9gv6f8cEh5ctyNRTEZbhudNg47LkUj1DDBfyRx6MSBEtkGCiZ4USZkbES4S9TR1KzDfMsfErHuQa",
  "key22": "2ydxqXptYuWKUeBBdrYFB5opdHoUQjCvducv5QDVuqcKN6QyDt3B8HPQ9UVN7bPmXW72abngevPEtjSYTBpvzjCk",
  "key23": "BgquL5BfYToqetVXEyw6ZSHgruCoAm3PxdBAtswVtNvgyrhf2atqSkigwJZN4ibQiHJuN42PrSytS1umRn1NCC5",
  "key24": "4KriW1bPDZniZzTFd9U5CowH9jnkes5BFfnRHYrNQQzrLuQYyn2uTFAJA3R49B9ttReQwwJ4Sc1jaGewwNRS7mjk",
  "key25": "38NU8RzZuccHi12fZEf6GXtZN5oHnxQL5Y7tYETUTt7fAjMGmskh5kSorGUjH1qrWSVhwBrgU2jeLwszjtRt2BGV",
  "key26": "4f15TE6MFTyQCz28cgoECfSn7Fbjjhr2So2W5D2ctvLdeQTj6xtVEqaVqejbfxDPpNQQVNS5TcL6uyk77v95A2i6",
  "key27": "3KSCT4KBxJNAAEYhibRuFQBCajojmaETZMrRvyAojYrAVcEbdfnYRZetdxeGTWPT8vY2sCwsf7ZGKgADojkJvQCU",
  "key28": "4ASkL7XwHsewPJC6Qo6eHAFCYsvQpidEnGdac48p6QFqEUi2AdB6k7zFoC6nB5TVM4MzesjfaJ5VmZZtmUBQx3ds",
  "key29": "2CFUxzL5f7eBv9BJwxPkpkV2QQmmF6bo5QvVQSQgQm6XeX8TS53hTAxrhFw4twLerJ2wcydviFkQPgPgqAAfzJ86",
  "key30": "jRhqZCJJMcMpMzt9brd8mRgH6NSVK6VYBs9q4CzfvEhZQXLfM1Rbae586cGDaqzPKFougT3LSEFs8WrbPn6ppM6",
  "key31": "3SYGFh562hZV1sqgQNX3oCQZj53gYpGtpFpmqDXsMgmviNUH8RQFJWSdM9FnRhzdyv3EeFy2Yg1GjzhdwCB3nRSn",
  "key32": "48d65C9UwpKQy2dHoV7qiHaLxRNB6pifD6BGpKRTQgjPqnpir3A687ZukVD9jYgwATHieWMcndwyWjArg3khTDjF",
  "key33": "4cTjU6i1L8Bb7AS4VLrLhoHdq5F8MhtAdmNb2EvMFCA2s4GkW9jZ18g8ek7YRbic3ziW5aWdeUe89uxNmjwZMWfj",
  "key34": "4wyxYhYBgQ8gHm6vacm7wjXTzbJoYdvihnj4aJsKHmqaZpaxxudky2op8Lw4UPn9ArwBzW335aaBPRv9gdWuLMrp"
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
