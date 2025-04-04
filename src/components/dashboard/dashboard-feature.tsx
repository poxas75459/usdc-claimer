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
    "2hTQFzTKjiKamB8UkMCzhogF1fYf5oVQbSbZK22rvKSMx8mukkqyqRdzD9B9YB22fALsknNJgkkKrwyUkdRjUbk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHZyqsPCSRrrvQpZqqm3pY8KdtWGzMnGAGc3nudZnhg46BvaeN2CHg7i41DSATjcKB37RrSDUBj7wZP44gDxCjp",
  "key1": "sH4FN1e8ASmDX2Feoce27amDMGTknGEPd8XaSNwMbcnCpRm3d9PbNmVTWKTsU7fCiVF7xQLubetVu8Do6hT9nrb",
  "key2": "326tiCkKMd6voYedtsHi1e5dkyKUU6kChaiPA6d9th97YxCzsgHkP15hbXqErKLkeWUZmcKAAq33hVWZ2RzvyXdv",
  "key3": "26WnCPADuefqTyFWDYRg3vyJkwxojmgpP6hDMugxjzfC7xyUgvLv3SyDvy9faAYeb5DsLUUsJNzV1dLtwdsUZqpf",
  "key4": "3Bvw1Q6n44Wee1euSCQwJZV45t9QfVUoTcFfiBpTFsuYznPio5SqFmbaRtCtbVAJSPko1rCGBjGTVQ2jGSWfgyQW",
  "key5": "3JbLawP2Ucy2gTZBSMe4pQ4g8bqQ7GDB4tHabKMT53damJz95qxjcF7HkZETSxDTXtutqXtQGUb53ta6B3oQEGfH",
  "key6": "28Xh5TPmHYRPHrjvxbY8wnvgQB81ht2dvN1hnsy38TPjGvmHUsbSiBGbY9h9M6Ab9ePAyW13YddNKbJJBbpjVHCi",
  "key7": "5Q9j8WbGn6BJdWA7FKrmbRXWptmNRYzzGuXnx9aV3MHariH7DorxeRjofETC183NMR8kUba8kMSZTw1DkoYCDYpM",
  "key8": "TBaFVGhX3BEenAGcDXSsuTu1AtFf9NTVHBU4qesCzjF3zqZiy1jP7RNarU2oCMGM2en5kud6nPXbtuG6X7BXhc7",
  "key9": "hnoCycS3Djnp3QRhafTEHJ3N5fS3iyNrGVrYqHp4czMkkMxzX9oUfiUJ9yqWbs1tjSTjRBrnDSw7MHbzDt8KGq5",
  "key10": "4JTiV2D4CDWP5pDvHSB4x1ZJd5bPa6KjxDnNuuTxdmbJiv3E8bW6Gh6ftE2vVmvumyUPfSwHw48FGkUcVXZteFmo",
  "key11": "21YJMx5Ki56V9m38c3n7e6bgyN1J9p6zcfY1pircJRe515ut2o5g1DLDR5pmkWXbkefAiqcJBjJsdUswwjxZkWJd",
  "key12": "4vt38gkvg3DuyEc1re8GrHbi6yuapL4sPt1msm2MPQWxxhCrBdNi7S43TTDVMntdP2s8NawB4sgMbNWxfWUb14M",
  "key13": "5vJoUEo9AYK2e75PqY9kRz5Bv66sZ4xMhDChhW4JzimT3DPv5THmgbW2nQwCWozE34r2i2mdw5UHFqth3k6n2m3G",
  "key14": "eVr17UcHq1DTGFq5pkBA14mF3tHSz87LT5JU1TrZxG4uMNR4AuKDbPok779E9h14DCyiNJUxpYY17PBv23KAw55",
  "key15": "hU9hDiGZCSbzkxJLjEeXe1D3JKnAnnByq7VF6BCsfAdRbsY42puYSij3W7dmQFL3jsu5ocTc5dtUQCM1sBHJ8Et",
  "key16": "5P68ee1YzQQcjwhNmNfgRVRrd7MNQMtRbBq8M22FUb4XuuhYULWji2eBdufHizvU1mU1PgGFg28Cf9JZ8iaNbMai",
  "key17": "48gz3qebRyTsvqtXJQbESQ5ArfbVBXHFdpQEpt2DzpBsYrxWGejfuF9NB7Xa4v4NDGqii1TZsGArVVbcpnjBFnPy",
  "key18": "46nvrLPGytEafsZ3RQxN3cKuzpfuy5DFVkZFhUFapupW3gU2cMPjmnCvSdJyMDn5AW1yaNSSUMq7n9pKdSjBc9u6",
  "key19": "64h7Mdjo3k5deY6w1B9YvU718jDbfrvxBayEBNJebyfusaFjAZH7CSYTSGCMsgFLQZB1AzpKYDBdFFJBCjxEB5Du",
  "key20": "2Fiowe2fPxm83FydZLMWwXUA4hb1crZnSTuffZcnYD37SmKqkzWNFemqwwJVxRcHLcbjpGF4wzT9ZzLQuykkmucp",
  "key21": "3LppoitxUQTYYMrJ7gmNYFDzjoKpjBkfF6HeUypVMRkqXGAKNqYDXwNHsxU6MtcjESHPfwH9VnusWVrXz8ajJrmM",
  "key22": "28PTNST9KL19yWiQuLrFspSAd3zJhnpdYhD9VwNw2CWVhAezYj5EzmXpFMP7kYxLzhHHzrh43Ne5QrkmYTYiCcWY",
  "key23": "5qTBjkbYN9ZeTRgLFXPofAVCCLLxBDAoXjnZcbcJacka2NAEtBPo6sFBvMHTtR2AoaKWcEx5aptDtSVi6Kk6XuN1",
  "key24": "63oRpbDCrZoC45PiTPNVTVVNtgMJNiKphoQTmktnEu84GiyTcEzYHtBPySXhtNp2EroxvsuXdW2Si57nxR6LXR1r",
  "key25": "3rXB6qwtt933hPMRK1pzv9MN5jppRV6rA6bgECRZEWXTYBhTmQuyRcsn87TNVgvG9inADs9BazJC3MyALJGq2hPQ",
  "key26": "2oZLYabfkggZsPdGb87qm6qAa2yJ7pqL6Rfea999xetMh7bbf5vafccjsERuaQyMY4TwTFzmPwpY2dnohR4ruPdw",
  "key27": "PhaxvnNYpUrfnEmbr2Cxv5eVQaVFR26ZpLwuNTqnR9M2Ew8TZqUgPndLRd1uEd5ZncnEFKyCFUdRAUYHWKknEYa",
  "key28": "fTZaNW2j1bh5S3izejtjbqzsh7aZLttz1tDBK9gCTHaxaPKUkVtV9HLKqQK5bgEzSyp44TSLKvugiALVib7XbAP",
  "key29": "52G11zupztTiVmCPsRr3TxYqoLCNDx9drxx2sCUgF8CPS62LGyEYBwskGzbqP2roWm6ELSKwkhx7PRpzRJkhSGZR",
  "key30": "sDV2AveoVo3e7mSrUBrt5GafkveWadSNHm3xoiFoa5wMroV3FgTSo7CWdEE584rrCQtx4HfvFTSkrVgcPNNLHom",
  "key31": "4iiiUdDe1BfYUsypTkdaYBPrQHUEok72dcXpW8pFirhHqFN84j9pMs6xPW2nkSdxTWHm13vJHQ2yyr2Ux37ezvRf",
  "key32": "3WvzNcumd4nvnf7z8PQNuyD8S8bbSHszzY853cy5zhzJjrJMuVdV8HBmDtEJgZagFqF3VSiBTLyefFFCFNe6M9Pk",
  "key33": "2JYaFD2V2Xq9gumurpDhRaizUuDwf89VH3zMeyn4qtz4tLyXQjxEMaUkvW5JwX8YorXK8uhsShJDX4B1R5WJ1RxT",
  "key34": "JQL9LpbnP2GFqs3p5z2nTz4WgsEcD8vGrzqZB1kX1pzTkN5A9YGCHkxXhqJ2iTFveyC4kW4pFhGEs34oQotWJGL",
  "key35": "4UeJF5ZwsRKPqB6y3XVaf4ixD1sMYdugTy14ZpcmEQvzS5Gg3zWxv4XMwEauYFhntjrnP7WT3suCQGpngyvsm75H",
  "key36": "51HVFBVQpcVnzdWGmAvcGAFHmpphbau66ZMKqGTjGNgYFsjm2pMc5PWHXsNjYwwd9J8B2hh6YWwspffDQW5jksiJ",
  "key37": "4sP5pPQX1UkYHACA9kbncufwzv7LW1CJAFMFqPADDbrSUz2XU8LN1s8gfEZXNzwamNKT3VBz8Ynu9C6qf3wrtw5L",
  "key38": "5VnYs9nKDxjd6rjXj2bRpSVS5YnHo1sLu1kb6ru3Q3qbtwUZwhZsB22SPNjyv8kFszSESKvrB8Br2qF9sBg5UxaB"
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
