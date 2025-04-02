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
    "2BTNbQHc23aaUSuk3Rbo61jD7dFc7rYAZrGmXwZg6L8QeXXKmuyVi6CoRnirFPCc4oD6ceWZKkqEPB7i7MpYxAnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29nMWwKGESDWemsrf6M1Ecr1DToKCRYWetKXhq8W1geW7EU2KjLxD63UtStudraskQuLGa7oPha7cekCnoGf763V",
  "key1": "4NkQYqeD9pxeeLQbq4MikkXxounYDyRBuTvq4QBmQY44gtJ7pwCmhH1D3rqkdNsHi5hgULRY3uKaqxkPnmfS53Pz",
  "key2": "2xQjb924K31wCbraecvKPjaVJZTc69bVWgsZyNCQoGpWmTTqEaZEq6FeXXbRZS3G8CGEtBTa2pHNLYxsFKLvyrq6",
  "key3": "5fDC15NpG5RhpK12Bzi3C6NPKSx9hxCjfpg8SSaEyL6djmDpgkzvjBFbc7pVuuCFc687vMZrSnFQcFCSSKfLYdPv",
  "key4": "2sjrb2ZsBGXUjHR6JbyQmZLF1tp26mboaExgP7QZZkjD37myULByTEBhE5am25cgQBKjaUPHQZKUcnvzNFWSV2bT",
  "key5": "4buAoK5AhemmbPu6tSJzK7eN5DFsarQyt84PyGXTPAfhTJBM9FM6PGokqJUJU5qb9gonNLdKhZouJFsz6tndNGM3",
  "key6": "z2T2Bi7ne9m3QhyB4Urh4TH5BD2sc9a7d3gyVgz2TQ2fz1wzzuBTwgJbwpNgXJfoPL2vJpji7cRJy7niyMUJKiM",
  "key7": "397rC2BXq3oHrPACh1rHg3cHqFMJhqFYe3PKeLsQz6KRfqDRtP44eWDSb6waJVJF1pBRkxDv9GEi3gDoQna6Ey8D",
  "key8": "2HhS6qnc1WzNufgNA3pYtt1YPDsxensKicbckb61SAr9WM2hDKL9CBJwHxPointzwjNeQyzsitbCC5zj4rX4qoRG",
  "key9": "3fkGsmxgubquxrMiEsM6YQhqgDFUdc4bUkFoj9uyApW8kkwQxXYsmQvgmAuutBw1Z4M9LBCRm7cBcMh8wMzbaSNx",
  "key10": "5vyvvQ5rDBSRycchi6YHN3KqgsQ4pWvVrBXBMKYCzuyqjrqVLtxHCRpPSp2bhtoSc5GH82AJG3XDmJ9ZX2PB7G6J",
  "key11": "3ZaiMtGHQSbAWeBpbkE4dqjUmV64Ub7d39so4NhGB5AoBTSHnNPLsSaUkSnNyHS27L5mu9atN3c6cwPQm2Ywc5qm",
  "key12": "55ZzsgLEYFGRgcAcj6cbT2PsK7ddbGyyxovUrvvZXBRySx84mspXYC6x6dYie3UpupPxWcysD3zNH3yQJ81mLcih",
  "key13": "4uJZsgpjEDNu3f9n8tbZT5CvJH8krWcKipyL4bnscn3bYJjBYzHGMox62EZoboyhscwKyzoWHoYA72FYUmZyqenw",
  "key14": "3KhF7TWvL9oChr1GcjLjMg3W9BwVM8JyH9R4Ezh4BVtWuXrvCBNpxRZbGT7HeXmHuaTHxNhf9gzzjTo7pRz5KaNV",
  "key15": "4kepZT3wmbVgkXjaGKurXA2dVKabdE81qZdMaByWPz56thv6KxiZjsGAU6WJy2zhpS9LNqPvLBQ6ADeVVeNs9wQM",
  "key16": "654nGhhxL86ZehdyoSyUbYLYQWKBSxz7jKe4L8BpyCtBvUNLQpin59huAMU2TeCktXmNofDBx56qsk6jHba4TnaP",
  "key17": "jCwrrnVGXaND67CyBehFb47ma1hncR5iwqFkNBnEtdmsSDEs2BBNoRp269eFvSKDfAzmSTJVEFe72jBUCZe7uQ7",
  "key18": "4vcejfkvFz6Tit4jMc5J5APKfccyH4mGNUG9mpU7sA6mXCF22sd1z27bfKT79YSCnfkwtnZ7TACH5eqpi4EcUDZ6",
  "key19": "2pb3vwKi65sNjvhspXF1F9LYnfPbauAEBQqVo4Lpa1VYvaBgiDkyZdykVxbwnagv2fGVhzvroAJph7vZoBSnwVK",
  "key20": "4CXfW4m9RES4gaQWEaRKQD5HjSfqD8Z9Tv1U4d7PN86ZAiPwQN6fLpzWVafQGdQW3zA9fbRxbg1pZJ6iHjH2gb48",
  "key21": "4B2NqLc5PZfCba5phJojkdFwdQQFMonGYbR5Jkk4gcA5R3726vp5vZScNUkGz8s8iwFhAzPyah9W3Ty4dEPoKc6a",
  "key22": "2t34uj2GtHoUrRkfmZMNNKbns1xkK66MVKfpHwvv3VeQBokonDBKHx2KRQRA9KPNFzgXkd87kWmkVVWyRZjyvnGP",
  "key23": "9cGYbrfBvHBPmKXMiZKwe7vNTqv1q8WFgh7Fxj2ZRpaCHyzNt9qiPz9kkNvRLs39PvfgY4mro6YXMLEwXZAhxjg",
  "key24": "3852S6MCo48MNW3quPUpUVzkxsH6VVygbJUZWFmTBWmho4PKptnzP6EkM5HHULCT78N1zW5dAfbwyF6gDngjGnhj",
  "key25": "ce1YdNdx4UQFcyoDpNs1Y3vv8jdDzrcWKCT3VUgrdzckqucQ4gSUMBizmTuN2Uwb1KeLshw8pMZbnsqEdCVqhys",
  "key26": "2V2gnTCgYXXMcvQLYttbAqjxmmyrkQRobWRV2ZYnKqS4MSvFU1hMqEBKkqVUnVuhg1c19RTJYvpnYS6nAK2oHjkq",
  "key27": "2DT7pomE86Qdh8vyZ4nZrxyfykRmB1SLswrM7FcPVmon2kPWufbLANZdgof4oYWgB4g2PMWrK4m24f17oUfBUKgT",
  "key28": "2TXtSdtVTSPdZUD4Cukkx9Grn1eMKT774HigRckYs2hSjS2QACcdiX9GUacEoUa2s3LKi4RfS57EPEZio83PWcmn",
  "key29": "5xQhvUxzWzmK4PEv2F6sHNbfS17gutmPp9a93SLFD6D51ui5k2KncCy2BLjDGAxU7cegpsikXU5KgCT15ApQW5yY",
  "key30": "4zty9MDzJ9aCMogxRXe1FN5j49TV1xT2n1Yt5CwPeXRHv5YDsYqEigMsgrTzyoMEs9QxZbu77BZvAjbNkLiZ4zKY",
  "key31": "32p5UhGHw9WgyVhS5NNKPcMnwDkj4TEiBCEu9qrJHaiG4RpLL9xvQk1s4gJd7Ac4JpAAhrD95aytHYaV5mcPeChF",
  "key32": "3on51j6Uty4HqpdQtD4aaW2Sw4BffknKXcGm6f6zTQv6cZtKzDPVWQJw3ZXAU4mpLD3qJmcFSZagY3M3uzB3Tvg6",
  "key33": "5AYMsitiFfJF3RQNF36CPArFMppNtCf1peQzoUFDAsqrM1GHNspVehPRz2gVhGevGxqFDa2pwbTNcQSP6Eqg3i8X",
  "key34": "3kbTE8LXoCAYw6Sg9EXQmR8XFSn7i9U43VNEDkTN6FKgJ3j2eVbQdeYXuW3Yjfo6f2JPKjNsMzDm8ndeuaBcJDqL",
  "key35": "4jkSPuP2erZW6UFs3jBJ26KXuv6T12jsFAGUw2A52Yk642bYcPvHJuymbx8AfFqyem1KyrExfN3TQxsSeB7rxt8D",
  "key36": "Q3nWzmQyMEiVwPmMdyZ5WdbAEpUgYBzSaKNGi1MfGXsWJHyP5CBPM1w8YevtTorL8fXRBxitc4d2ibP1pcatsxy",
  "key37": "582cSXfeJ7K1EprpzsCrbHN3hp4kLUPh7RTvT5vpGSph3EvjVbuj4UTXa6VSjG7GUsjxZUqvpHjGNM1ZNWy1ZGj8",
  "key38": "4FuRhhs14JkG673FkBVJ122Yx44MgXP42hUaQ8RTDx9QJ1Sgi6cn6touU6umtTNcebxiMnR5LfSabv9NUq5XdHfg",
  "key39": "5jwUW3iab7RFAieovYuGocWEjZ1Gx3HwdTDJ2RePPN45WVnviiNSZstcPrYitCiqu5iMgJV9Guq7CQaqyw3MtjZW",
  "key40": "gtqRQcuxfP5bSLf3Q3WAppJSUryeFTM8RReePnq5aeRfQWExFii1aK3v15ZfpCm6jxXHRSiPcumSJ35QFZY97JM",
  "key41": "3XfLvMAoABBb6cJ5iFeKpJ49GUW6eZdWajPMauk6KDZp7pRRaMjYjVpiQ6wUjyebRrRyp7fQiS1kXr72skVAySHV"
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
