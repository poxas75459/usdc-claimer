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
    "38xPmSeqh5SRUCwbvZdZpMBGKWazfpT7CT8rZEGjXbUgKBFwkNhfnHhEjWHvUf5P4AinpGg73q6yDnRrbb7CETXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psqFxonFNCuQF7gAR8sqmkrUacdu49aCDu7ox3MfmgZzacAdszpVKGhCS4van1rrsuZ5qKLosHmtKAvXgCaPJ9G",
  "key1": "2xHCx3ThTC4c3mpgmuYGq3zskmNbKQht6P66fu5cqRgrt7h6oZytTFhKW2bubzXxmMkaWeXAKjEz31w2a3GdR8b3",
  "key2": "62pTfApgpomfTdS3LuEXuc6qMDUjKE4wxYQipHQR6HFQQtfw8fzbDF5VmQMK9mtxUPh4wKAUPP3eBiRpsaanNS9x",
  "key3": "5ZkbV9t1kw5YwBtET7Pbz8UaZrxHqPYpVMKdokB8pCBUwcykRvbQTxi9Wb3Rs3ATfiqJgAdCcQmJ74qhkTU9Zkzq",
  "key4": "4dAVwvEgDv54mBoZi4Ww1cJcw2XGwRyUr5Y3RMzaWD9iZyFVG5uKLZ9f6z1Y24FAg5UjJ3KkQrUEBQcEEywK3pPr",
  "key5": "5N7A438oDLiP8Pnj3vZQ27e7g2qnKg7b9hupak3DM34sAdxh9rMD1cHobqoKxb9WQ884kNMrFQMWRrMeTgCoAX6a",
  "key6": "n4vopn6yRpuGiFDwbrM6zSQCvnqJ7SQ2zSmB3sku2KphRbaD2Tc4xZg4GAevnDyLDiCdnyqQRBaUkTFaGiZA4HY",
  "key7": "wwj3kvxELkrStkpcApv11BQQcvA1jhf9kfPgb9ULGXy64nWW9q6k3Cph2gg4H8MWqCeR8Su4r1DeYJJsCb2g9XZ",
  "key8": "4M2xZKLnXyTUJ3gtB4N9VECKreBw32SYc7UfWWceR9irNpXUH6b6pWKZa48oTUZLPTgGzFfpRvkVZZPuNLeeourm",
  "key9": "4AnMbgd5xaGxzwEXAd7PMXoTdSYh7RPq3WPzERb6FYPHS1vxbpfbvDne3AjEvWDGzAXVmVphPzseXwsnHezwhK7e",
  "key10": "VPJNXzqLYCS7aPf7dFmncEYmFTX6WQqkWjszBdroZwvu2SEf61bi7iXFDHsKiuH2gGwgpvLCxtkiNrmSVvdf95f",
  "key11": "c7JZmMpKH8nEBdLEzWxdZk66XgreL2Gu4S2sRwbDTke8XdHyZ8V9y4yLMjroj49ZJRBmb8QPB3yYSViy3u9bYNX",
  "key12": "DELcnNDcMgGb5XygAWZNbvynm7P7Y9CRCVveeiHrbNAWK6KSyy15GncphBbZR3kFUQW6EegH9eRDoXsDnn735ru",
  "key13": "b3rkrHMEJ2Z7hxDicRZv2e9bJmVFTaKRK1WMQMFbhaLaK1ismpdvw3Ji6kaVPuzDPXDZbA8WRtsEhhQaWMfgs8f",
  "key14": "FfugRUddv2985dSxNv4LhNgJtiGz3M3mFkixfsopiy1jTLzuFjCwLnP6QvreFKwH4izQs2eWTbRDRVCDuhDKfk9",
  "key15": "4cN3dHZCzjQ7g6ZUjxBMQjLtHSu49jvH2xbmHKUx6uS6Rd4jWj1cXHbcw4VRdiAqRFRbZbs7j8HeLoLGyp8f6RAY",
  "key16": "36TYVbsPrmzEqV35TEVsdW7ZgqsDADMFHqktgmkq3b9hFtqDgCNWRuWMwPbd6DRyy1rGBMAS8d1fAmjWehCiM4Kj",
  "key17": "MCmTnZ7G98fRRQkAVRLPhdeU1HJjKij9cVz9BHPxyXGvjCMtCspNfJvcsXMV2sekP35RL4KFDRvSwf3Uok6Nucd",
  "key18": "3p9G5i9RXo2SZpQrxCLEw1gyDDz8B5e1M2mmTALFC8kt9sa6dunmW5UpoHpCYouwGT6TLsx8E41DwEK2Z9Lxks8M",
  "key19": "3cK5LBV8JM2QbJPrFTSDw69nRi54A8WiPictRJcgyHUD2tBtDiSHzESCq4JKN5cKk27esvTJ6pxb9XCvnADgsPWV",
  "key20": "4o1KfWJFY3Cr1LPCEVbsSPoU3LC3CS1um4q7beS9t3oaWoSb9kHiWwTsvX5uuGFsN8FaiLaaQiC9o2Yj52oLjdDN",
  "key21": "42UtSZmwUupmy5nun9yhY2WjprArDB2QYBAWXMDh2yvpXmnpzGGEiEWxAwQefk6ZRYpmAZ9feP8PStuiTpY9sjYz",
  "key22": "5HJjVTiqus5nznA91rrD3e9pXi7i4QUQheKPFYA4KaXPGkFU4jYvhFSaUo1JXr6R6w8zfo7Mm3ZUMDF2xs7WWCTf",
  "key23": "39ZVEy3vbUmDtB8eBiP8q7LTEk26jTLReR9KwF3fth2YmGhZycjBmKNTzevKWrxVq9dfLPQxY9x7Ep91jQ3pCzUY",
  "key24": "3yRt7S5Gqx9BYhR55bpfBZ65eJwWAcCBccUw9gWCbLD3asqydx8Uo91ZUzosSKh1N67xCB41tGjBa1vVKZZBTA2S",
  "key25": "3tP3ewqn24QyvK91GiQ7mYG4sPri5RMe3spGb1QENy4fEKiFxudS9yDwC7LeZtowRhHs6LSk411APWwBHKXbDqFP",
  "key26": "4VJTvqRW4BLuWuYFsNmWzvAuEW7Fcj5bDxkJBR29bAZMQA5SSi4DX1fStQ6Lp9ZdBZ2PT1s3A2kV2ubWFAbyntNi",
  "key27": "4B9NHMzV3fFbTWhaeBeYGS12vKJeRaHUPV61DrAp3QrdfNHBkSwQHourYLGMyCjCBiesVogvyT6VEvEpa3Aih6iw",
  "key28": "2qaNVHVixpx7GUoqGZvofEDjD8aJQrpCWsvgtbrEjnWNPFDiw7QVZXKxbnNCJFkYQNycoeEm6ecxMGxc2ifWHVr2",
  "key29": "5XrewEusm2ssMeaGdNj2Bcpp2YtL13FAAxK4TXamFuAo2nq61RgfhoV9bXY3g9W8TuHKcM7ixfbuojfXzyYPhUBt",
  "key30": "4YyGV7xofURmJAb4bcsCtKeNCypVxDLjv74ekbwFZWf6T8qG4oXXZQZHMjKxSLTtQXnyWEaP94gFMbCVuDBMp893",
  "key31": "561WbtUwtdH9iuEd1LaHJATtZa5FXZgnWbgyrTnjYgimwL3NXoi1GnyXVik5HDHeWP8vStWULrhMGPRjm8tvi79Q",
  "key32": "32LpTwiEok7UbzQ5uckFXrAgYCiVafEGyk7e48SziTCgauuvA4HkUtFe1QFkX3jCbUPPymsP8nvxRDuHgo8RQjuh",
  "key33": "2uKwGHYs6aSGCtF1v3Co2hiAmzhUobFYKv7f6zhR7LR6zXuChbrZPPSK4sHhqniR8VNr4LMbWHN5fatXUoCQ4oHh",
  "key34": "5H5udcV6Wp23BGtENDSQZKEZ2JRG6KX9Ykmt9bULfDJinbrfdZ6ZUkZipmLyZesGSTx1hXfZXo5CiHVp7cM4DZDt",
  "key35": "5TFjW7ToMWFMXYrK9PToSKPHUCCWMfke8rGm6LWHm2Ck8paHrBMeQ68x3qQGiqbntYNsLcKEoUTPWHiLDHTHbsUw",
  "key36": "4dRkkKCzE2mRSPJoyDQWaPmpCLBNkogSXyBJVLMB8NSpo6tn7zqdvXaAxZiBWmMsNpje7pEYU83yXgpZVQ8QjJJ4",
  "key37": "5FSrBQZ7HuLb33xbrfemK2RUpsXhmUnBBL31YexMFj4WRNfVxa2qg8NVKMZSzS5ftcJqU66Xca53iiAAXLWC3biG"
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
