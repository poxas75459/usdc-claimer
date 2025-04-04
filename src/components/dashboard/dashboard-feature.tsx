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
    "4Vn9duwryhHaAYxRNyQ5Py6NxQydC5YkE4hmwkYcGVw4cJX791oWHty1WciqJWwpWf3eg8P4wRj1CXEa9r43s3QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8jCH47hnnDtBz9Sf2UYJhm4sgzzRiAELEhya2h7EzBBqQEUfptqpPKNZEVkT4napSn6Sr916BRjCu5FeR7WM2j",
  "key1": "5XpWhvr9GaaDjrncSQmN8oNgM9Fv9YbrkAK13jwgURincG21omNrug63o3nzfg9ktGWMpRzH2XHx7HZRmtQPzLv",
  "key2": "4jDbbTRow7ygNNHQckGMMLjc8UGgkgg212RaK1vg4pCTF9B5bamX9qBDJzBtziJmFHenAfvCf9WGHrQgHvSH9eSN",
  "key3": "5FEmvFZwoXFytCiu49Z7z8tYfzynggQ1TZ9NrVwLUgrbqrhs6sLkjJJeCuSA6Kxxnx8TTHfAC3jgMusrnUioWucz",
  "key4": "AseN7H2cCNm7kvzeRCj1ZzhnbxxRtaUAVeopcNFrBcpkknKA14yWwa6S1yCPLGAX4ucgiSmcUwy7zdLzNk2iUNX",
  "key5": "MYyhT4DfqqehPiXnr2X7tqnvzcGqAN9Cws41wkdRFBK6R5G6F2SBP84EBvtgJ62E7HBe6vWJaXE1Hjk2BokdSWz",
  "key6": "k5hgduDod3bAws897oXsR4gvExZ91nno2rBAyN4FYoGuC42U3PATyvuiji2QzvRzoJm4GtnrqGJdbngghHFMrj4",
  "key7": "FdyQQJmmvZaqEq1U7fNDzdvJhay56RyvQPu6mpwBtSHmBAYhLqXCd15xzduCLJEqZj1Uawx9Vf727XFAkCUUhAp",
  "key8": "28PkY6r5QaqwbCEEbbzxognj2LrLpaqrt2CqGZbCBbQ5dSXaWoJKg9Vo2pwKDBWmaNrEwKNz1J9L6P2LadNP7ixh",
  "key9": "4Q6WXgKoCCcPUdVHMBtjh43r1ekPV5HgxVrmMLnvabD8nNuQE3GovCt8YF1AL7NjFsvRAHAT5MyZzH21s7PjmmQx",
  "key10": "5PLhtWQFYLaQYPw6PNCPcxJLucqFTu5sagK6y2ZTTepJCeGj2XM4FhcLoU8VRUeQAuydtTgsqRLnJZ7g2VFKKdr8",
  "key11": "5RZv2JPArj4nuSjwxC8CKTYJZi9gN3Dsbh4j7WTYVYFVPfwxEXx7qVUg2QhArpDAW8gCsyMcoNLJfm7Jdk7jLjE7",
  "key12": "uwUmM8eeJ91tv5tjfYsmT92iYMeG7FbCo93jRwLQerev9u1LPbBtAXE8kSdQ4c7dqS2mUzggmJbscWpbRTdyfrc",
  "key13": "2TN562D3U8YhG5TUBQSMkXzeEbqAHihbVewA7GURGd4ou5YGUySVtByDTTA1h9XYcSQ5zW14ggzV7sx3XUgGJZkW",
  "key14": "4vsz9WCLRCkAymDTmHGr6GzDahmE5BSLE9fPPNmf6hdyt5kq66U7aDptviakiCj3f2BdHAMcZ9afaeQYEKx19Wcn",
  "key15": "4USJho5FMPXx38amE1UxgKCVupTKa2rUcA5c6q6detDYvXxM6SKUNZjLJHg9DRFMxfVt3d1WpMnaNb2fchKLr439",
  "key16": "2VNqVwpLBDqB27rBnoUHm5QutoUz4gbncVzTwztaBusjeQh4bTkU7PEtPnBBwpQ3RECej1AX8eojevurhjyrvejn",
  "key17": "tqchyksePcpSJdTNzUpknkXvCZybnJ1HzpkhixtQiSGPZxjUwzgzUMU31GbeGRJVnUyPG7ESnBpGiaiy1LKsrAB",
  "key18": "2oKsMqPVV1mhK7nLHdAqhLBdm7azuJdnkMiC87SzyAMRRpzCyt4p3vNC4vsJ3YCc4SoMRZdh14GoyRc5hQMBm5em",
  "key19": "489RDN6sy9CiSjDGG2vzsmgmYvqs8nXn9dXsT66rtL4N8afBAvPxEnKwBFPERFpSPRo5YeSKj4NKigWx77cQRaZS",
  "key20": "5LfEtWULttf7VAFQp2qYYRnykxGTkyLJCs73AkEDjrfgHFaqwp5XEhd6gsaXdHueQ8f84TNmzbwXNyq6YS22HDrJ",
  "key21": "2MFYeeFLTFZQJNbvjMEUFbPBY1SthA8j9yxNPJtrSgV8jNzRaHAw1WEYRQqGfycJFRUx9iXXbQrvMbtGUh23ZPGL",
  "key22": "2yRJ1CGBBv3xb1XYw1KAJFMBkTkXWvxoKvaNF8DJswJqg2DtYTXVZLFG8ioHvLJAsdxPpBdAT67Zi6Ema9P2QWE",
  "key23": "4nFdMJ16t2wJo2Bp3FygQSD2Y8Er72inNeUBTENrBNYjzjYppZGUbny8X6SQntB5q2nxdYppqSH6M6tC1ZVxWQK1",
  "key24": "f7jGpbpKZ13yPRPkPM2vpzDx4x1gvVqbxQZzeQgDYB32aLzhSiU1xxWeSxqMTgHxoEZiW87FtxLVoUcJ8EdNHwc",
  "key25": "3sSverdGu1zacw81VNkhy13Fb8mRtrPWFRWqKz3fxKGcPmDsiS1n7aN5NvuYi8fxrjPw55Ljjyb3qt1HNb7V64AW",
  "key26": "3HVgme4JPorkWj7rLxAi9A9cUeRgHdTKZJau8f473QUBT5T4W87D5e9jm35GAPxhjCSYmi9n3faaLf6UCuhRKkNb",
  "key27": "4RaUv1ZmTuakkiKttdHMsaT3hBLn8BNeuMqJgArAXD6C2TWUF2AHMNgkueH8duxQkRVVJCba2k5N2fQUPctPvk7g",
  "key28": "5heg2Td2wFEtfF9CWU8h7pMbi7Qjk76evCoSfCJK5o94Wj4jCgg4ZRM5thWHCALkNedLmRZN2pyS9Fvpnk9q7A8n",
  "key29": "2cZi5YVXonpxDieTW1TJGdSdQ237LhHF7Pj7QniMqMs5nwyjePW5hDLAtDKzPB6NZ4JLNwH5M8YgqnCD4WxuX2tX",
  "key30": "4K4MPcsaFXp5ngf9SFuUH2reHC9rZk86iA5S5t8aWuRt7UoSNxJ2FnJmYYyo2ZUJbyVaFx94b5w2ocX9zXiSfsuU",
  "key31": "3FXDy6VpQhRbY4AQuCBSVVPBU7CyhmkwrHvUkvfTUpLeF96V5Exjhkp6YqbQirBytofrDFHwVC1HJgiaCXC4d4nJ",
  "key32": "2126bHCgwvRmvUemZUzTuA5DPBX97aWwDtjH5LDkkhCiwWtmuRkk69ATSshAdFtkh2cjJkXGDytp3TW2M61JnqVu",
  "key33": "5zbMU4Ri2QTo1g3TcPQvjck6c9MNXyAChqKkQxf5oAEM8C8tM8arizFhkxmN8JdyMAfgJpRTGit4qyPTynFsMV63",
  "key34": "Zysvy7EpZJBRTLXzvbnnoSveJcbz4iwz754d7Mb6Yf6dqZkgTnM7ZQpjGTSCUnSdQrQMQeALjHx2nRntgkqVHgq",
  "key35": "4Nb9X4VzX46CQGHsbVoBENBq8Y4HVUR6vdoNecKxkwEgAhfAyeNXMhVcrGAPqwRYEvWxyEbTBejPbgmbwXK4vuSn",
  "key36": "3aRpLYvjaVHVfcJ4H2wVpLWMXdNsRJ7sQ8izAs7mkHGddrZyeDbRw5wURKkCzmNLQi3sL3U2hPDqhmfVbHis6S7N",
  "key37": "5CHKvBmKQ1Ca2ApYaufbFhQ98gHdrMe7t5QX3T65bvhLfXwrVttXbbMDiLSWNvX6M7B3peb1pbHDYGxwygCNwhGB",
  "key38": "2qBhuivnf812KgnVt3gUTwx3sQLSmpC5c63KC17CRrHDMWeXPkVnXAMFVuG371wHjqq1j4XDHpu3ZcGZCWD2usu6",
  "key39": "LPRJo28iMvYEuct3BAbPFHrGbwGAgVYCExGLoxVbYNCexr2aSXbxZ5SDyASQaGe98HsFqsQoKBq182XZQvenkv8",
  "key40": "3YHWw3Zaeau2PgQwuAvBVau1sKdPieqxeSWCrEcftj6d2ZXhu7VDyVW5GaBDAydbmzQPe7EsqsRjN3D9Dy21Cg19",
  "key41": "4hzqWFJJkfEzKDYSVuq3wE5XFBHeh4akfU6Mihxxh2Kxho1xZxERUtYaHzcDbVrn6G3LtBXVEfThCnGNgWt1j15r",
  "key42": "3MVYTWXycfmwCtbQiyZuP5VnryTt7NEqtF76SW3HVfh4Wj2zagAMapC3JPCAf6qrHy4PystD5mxKiRrbnffZZBYX"
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
