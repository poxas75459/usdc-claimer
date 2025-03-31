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
    "2tA1AqBGQCqAM7yWSF9Lrk3csRpBsX5jsW69cohGr6WywSa78Sg2oHuY9xEogqehZS377vxgrAdYbp7cuzGu5fB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHWUGDTVFv9mGPxGDxZ9ydWqkuKu2KddC1uWse137Fxptqtdnc58e6DzVQCukCFHRXpEudg2QvVxsCW3mbtPK55",
  "key1": "pPft4hqpCLXrXvwSKUeyAeSZqKM3dDuiGgzrQjPniHsRKrwgT4X51RkYoVqiYraUDGBtTrqppXRQZrSjYqveAau",
  "key2": "2NTjRWNURTz41qRcMePPGC37PVonTbNAmQiX93qSnugwvpyLFHPqNnFJUFFMq8pLR1DHPH9F8gvdT3apmSfNTXpG",
  "key3": "3XEow4B98h6goC3QuJAFiv4g7F3DCrHtUgWyye5TM9XnYDSFZke9tdQoPd6q3xMWHNadsgT5jwwmghZEYJNC2hVD",
  "key4": "vdReDKkhgbU5bu2VhBMjDoFdL4XoFSEiYtP7a9vAXVQZcreXiYzUmkxmFcAyvX1aJVHbbcMZxgLmkbwsEPRdXMx",
  "key5": "5D1Yg18vSfS3ZjGUsj7HZEXy4tVBLXWgX6iYAh4EdQZRRMoo47AeaZvs5wUvyzR5wQAam4nvxixmWSxWiezR4fSu",
  "key6": "sbDrNcMi8eBnhXLi5orKxH3LTK7826EePguBRMqwH3BTjCzjmR4hHh42NvdBvYxX7fnVjQQmCrUEkkzErYsYth4",
  "key7": "3J27mHVJ1VFqDF8ppcmpinwJaPx8Fc5TVU9AieoaJ5MHy98df4ymS9NBKTswBTgkjvTtYJtRTdajSPVDEgMG9DKy",
  "key8": "5PGAdmwod1YEh7zmztGpiUaZXrCiESvMpQZoMoXnQxJVAcKE538KJhxsDiMqK9VzxTnFWoS3TD8gWk5jDb4wjwte",
  "key9": "5YPvmJt3gp1UFGvZpDVGJGWnWVTKFaoJDwM4y8gyRRMyQ1kazdqvDj3pozjZWmRiBksw27MJ8kcj73LrAWAFfiJ",
  "key10": "427Nwo1NdUWYqBFEWeCV9MJyNcTg9Reve34UANMwjkRsb1aB5CHdAS8vczxveqcqmG7WGMvhNo8bUuadcZChPnh9",
  "key11": "2jzW9PvFSRazhtQt76uJ8261xeJsbpKhNyvBhcxY3Vj7bpNVeLaS5dGKg6VTyAeSe81b6NGrbsiBimynnxrrj8p8",
  "key12": "3wgVPmwm13AQ5BND2PRxcrq8moDtSchNkCwpeGrV1xNSidDgi6xVaXxbq78YRL9D3AL6H4v76UMLGkzhcJrksTQs",
  "key13": "2rtQXeFVJvaZtXaHA7B32NWpEuyesuJgWhXbRNVvr8y8yV9QqB5Qzjt8rJMJuYL6tgDk88myzd5wms46ApyMx9Nt",
  "key14": "3cb1oCxgaESo4rNSGkkTLwzENK3SjbgiV35hfKjBGUHtgUJF3GU6iJW9k4DRQ9uRCtwU8YE3mhhvGMvz7qHXxo3D",
  "key15": "2XhVAEcxLDHQxi2DpfUBzo7m2Hvdz5kTJXV3CFbFSfXU2ibRGXGYDdjhrVNACvNtC2KEewSV7YCu1orL1zWtWAMF",
  "key16": "3kwbZy1wCLyUNaRyGKd4Vew1zRVJa3FLerNYA5ymvBugWteLrAZo1yq8TSZzekDvRrTxkNi1vkueBe4o9aAAqbKk",
  "key17": "4J9eJiaXLf8GwtKk845o75G1pYeC5SVZfvyS5UmAAryLVcabBTS6irKRSLMuB9BCZ2QUAii8fq1bp2FSYEbaVnZp",
  "key18": "A6E4JYHa1ubnhqiGoV6M4Jq4HCa4sc3F498L1CTVbwnb3oRMj3BjFAuwuEsTcPhPjHT8tzhN1KLkXTmEX1fSVEj",
  "key19": "5VvqMa66rXd5wuXHSeTwyM93Wi63hzBHLrbEap8Pz9qf76pK3znELqHJJeXBhKpL8x3r5fpmDSACa6Kzs4NpzyTp",
  "key20": "3Em7nELzpnP5LRFbxexXvSvDZNUgSqLBJVuhKiaNP1fdJdqn2DueP58SCVKfie5UvtYaGEEAVnDSPanP83bbdjsx",
  "key21": "5EfcaNV5YbnB8C4fQ37dMTj7Q6sm44f9AKfzgNKqvKeCLdbSGdaKbhjLgF2BNsZXJBvjhRDPDhDrpPSgbf35kQrz",
  "key22": "2tUuQHZWtLh6znXSuUzb7R2LmRTReHreuhkJSc1wB8ktYTDcczqsUmSLxLkeLUEYLjT4rj1f2twBQwWeh5yvEJU2",
  "key23": "NSa5u6bHFEYsHZJy2LezQzf7ZverwCR4kQ2hSuW76Atn8oruQFLcp342Kjp4sDEHaDydB3ncRfUaKU4TKW9qQYk",
  "key24": "2dA97y7dC7NhcCwvbHuUu5BdPqRnMeRDVJpWekJuEt9U12CYJb11JwdtrUai1ayxcJUAscc1TvRdDrxL31k12TqC",
  "key25": "4ccmFNxdJds2HRoVdTvx8xqkgYpvqnsCuajh2g4eDa7KRi9zXoCYAWAPKR7CevhbqCWjjntxcwQ78Kx3ouGZvMYZ",
  "key26": "ibD4CpzKqdYi1mMkqaiwDHTaJgbmpqgmFtvJ2uTAdrp1DUnjZBK34SLkCw4kMdWi4B8DhdMW75pC9SEnKLoP4kA",
  "key27": "2ekuBWKhqrdzCZTvtwHacDyMC7oczTWrNi63wx1cf3DcK9iGgWL6ZNzEx7QD6r4aWAPvM49hMYGcQRTHEMFfxBR7",
  "key28": "q3tfFRd5VyKaThe79H3eWDazeUJcFhuEiXPBctcSijhTNqxLQu5YmLecr1Kfw67VaJRw5Lk4D9UG897j6PtU2Tb",
  "key29": "5oNui2FM9g894zAoA5eHP2ZYBxxxGs5jhDVDMfSL3yP43rs5j36LGkakKgKDGq3A8i2L7RzpAU8KFsPfz8dPAxFE",
  "key30": "5zQ5kcuMavANg75FJ72XmogN6F8hWYdFTPpMomoEUnSk6hDQCTYiiXka5nRPD1EQWGGWNk2Dy9HFqivQ9tqixpGk",
  "key31": "37EprBRMe7YSvdLxKdz9YPvbLmjpcGtpsiuYoS5gGntRVe1QEYDrPnahPtrGtbWNkd6Rj6bKVosm1wCbwfGZdB2r",
  "key32": "5CPmmaF8bMS2fhHnqEC78PNUwH7LXrLRRuxL1mZkgrsFJ1tv2AifSg1c9HiLWekSpJhJQXLawH5pX3oUAZ92iBwF",
  "key33": "5o2hQp5oX7WFJx7og7BdE725JVnWS8Jx2h4tjbRUrwggH29wztDtBKr3RLZRc4S1rsK9nRQKGkJ2ytBwMHSQ3G5Y",
  "key34": "62vo7tfhRFPiGPYprr2bLN8RrcNXWFCCMyroyxyiYX1SQF2bUXAhvzy6kfXf1QbPRt2KaxrvoQoPRzGcVcZL9xEK",
  "key35": "5uBdTdBkB36Qa9wxYYnqMxR5reFTLKQKJPDmZsRDd1xmC31LUCredABiDLR8mnfZq5hkGfd6ADwyQMBWpHUyXsAy",
  "key36": "27FjWHJk947LSTEHUpY7gxUzTfncZoHb6myjm3ea9CAhT3v6PJ8ZpUB2X6WqTZLeWgNStZNH9eBdRZojCGu71JBJ",
  "key37": "9PX2JfchveJwSmUzt6e76aGbNppPnaFuUD9RQSy3Nhgc8x9dJ3ZpYLK5eCTty2vxqwXgMcq4wb1LCb65FoMLGS9"
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
