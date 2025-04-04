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
    "2LNM4Z678enDH79pupc4Bw4pvoyEELQnN8PBKTUEpYyjTenAe3fxTeBTygn84gyNtGWZ3dvoCWdW6Dg9axxg6b6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myv3zkXTum5p9Rwf6UL4Ey8AfhPGfUWpSCbKmfMDswDKTjTzUfEvE28Z2JEQuuvZS6pDXD8x37XviHjvrNxqV7p",
  "key1": "26hBq71kveBeUNATJoJg7UKoujkpPU8CP7pouHYmVnHNdSGtqTA9rFUwRsLTjcary7Sw9K2AkD3GNLDyFYEuJ4iL",
  "key2": "5EHe847TDFevTjEkcyn4jCowTKDb5pkkRwsZcvA1ud4qRMfzidYY26KZLKxkU2uoEgcb53XCJnGPu16LAQDR75G7",
  "key3": "5j3Co7nzq9mcvj74CY9sRnyLwyd9YkodaepTnrvLLA9NtDMGNVQt1ewXKPazidyZsG17qiammCAHbVxCUV6D8Tgc",
  "key4": "3dTpv6jkCd7kdMq17ViyhpuFDjCp15SZWhBLW5bUiMrZa77tUSuh9Cw72H7KNUcywWPQTZ5PZNqhm8hGY96x5kKJ",
  "key5": "2VeLh5VsL7ZWnfSBqDgi3L8HrZEGE8hLRiXNaorpBLGiJTkqntyYb8x93BJsUWZKh25QY4gPiDKZHcB6YQBxmur2",
  "key6": "4WchFF3Yq3zXcminwCFofLhueMNCgnReTVPsu8UwSHd9SV2gMf59Q8tVWsqexVaUUbc4ir6n22iGVmc9ppxxNCYU",
  "key7": "63z1tcc4U84vAyeDDKDQ3BW4adYtPpkR96W2FBb1q6Zfu2t77qVy6pJDKfQW9GiTiRki1iM2Xwg5MF62gEE4LME6",
  "key8": "15egJvPzcCXHCZscir75q99D3fgdtcJmh8TVDAFX7e5yEsagKXupXzKxGaHWap9ir83goKtNtqtA4C4KzeER2RD",
  "key9": "34U8jAd2wfvEDiPdT6zaU3pSUMMnDDZoaDrUf9h2p9GDYLnQgdH5pjUgoZ6ozbp4NvLe2DbYcVizVaKU3bTmefvm",
  "key10": "f9AAmCcaJVBBe3jYn3v1hQTpEBbQQqbp8LnYeVtw7x3CKyUzk81uGuFb1bx3RXLFEyePWM9TT7t2iacRgfoKJj2",
  "key11": "3DCN44MmPttViuMkSvqQLdRKAQU4wH38A7rryXxcpMtusZ8PH1v5Xs7jKidePx4FYJxzjaXyqTJM6XeFr7Bf4YgT",
  "key12": "3bD9UYuApEW3dnsCxqh4dDcvnqgu4YTw6UpCShfq9zfEYrFDpuorQncwD3zsiEr1i3ifXF8mZkzJFoPTN1mBif4y",
  "key13": "3eAG4CojbdRaw1srGErdbWh6R2tBTNqiX7af278awWtDiHGk59SiM4UB6oW9sabWeGn6pgx2VuLP4bcGumAmukEz",
  "key14": "5WWg7akKomvYugzavh7NSmSL9CVtb8MbLGQWa12tBueR5yzhomXkJRzx6sZ6hLfDR1jFuHFNLoy1kMtgmAeHTVo6",
  "key15": "2dkXwBGJFuAnAP9AvyxAD5PuohDetnfuBBRHxuAVYEacNn3W79NoikdQ3yiMB592iMxjy1rDiDLz6SkFAXEnvyC2",
  "key16": "4aezXiNr8o16hpTV8G8r9B997MDXXb1enAgeoHntzSvAZir8q2gbW9ZiZtpkN7FEvVYdTYJ5zXP36SkjcToFS3Uy",
  "key17": "467ap7fN3y7p9LQPxPQppK1tTcPCrzgiH9w92tQa2Ai8C5jeSQxufAJjuCCc5dzXpswNhVNFBA4Q4eKisnQawWs1",
  "key18": "2iFm6csFySrCKVXrZ2VmW2oroHxtut57gGk9nur8ErPxfYjzcUQpZZHNwgHdfwojiEJzxqnCpAV11jQyHJSzTJ3R",
  "key19": "cFaBHebZ9okpGLFu6LnRNh9knzBBLfxEMtsqT4aS85Jokz5Yu9YT2aZdCsXXWgpGWmyNrqNwEvwsAfupbKbujLV",
  "key20": "5YHyEghFN1Qmk2enYno3wmpKc9UrwKUApzNj6bEwrP38t5mv64yDQS5mkfmwDAYg2kkEY4GQehiUSzQuVhqf4uxn",
  "key21": "43KV7NoJpFxbajSgLrxNg9vtUzpyQVz3pTvf6Gaw8H79Fyh9uWWpohVUdC1T535HSAc88KofNJ4ekw7wS1VneY7H",
  "key22": "4KSzxGAznAsYWB8chNY267uUwd9J2FArA6Jb5bUMqwAEPP1CQRHUQWthYbZx5qR6DvDfEvH64z72gDKUpicRGFWn",
  "key23": "4tLfzfsTj2WtkJ3SSqbsZ9oaMVk5mVXrzBx74xdPJQzkRbB4piQna75YsKHSUGH1QAjjL42fU36a81tee4xVhcuN",
  "key24": "3FMPs3WTBGmtXkZyTFfSGsL8tVJzgvi2Ft4BHzcYU1up1MwgDYT4bUdXzxgUDBnCLJX5h9yCaP9EjnpppPrB5Dgt",
  "key25": "5xAm6sXeKUZCpVkfovHofrMw5B9UNFY7kmVL483hnuXjKC1aeNRD5GX5xdiWaBAubCKgRbWBdvufLNZsHx6ZwcWR",
  "key26": "5JkBhQ3RdaineYGJSgwJG8nQkTmc8DBAvtmbnUECSuX2JAnsG6pP8jTMMmznJU1Xvn2DdCMAFoYdV8Xruo4778Vy",
  "key27": "3cv2nn3PdPDmGr1sRyaRG52nKj7TYbBsuG5NNAvXaP8zKW7x4CiE6fmChaeWe3nxb3hFrhzaaiDEN9cDwUhXYhF5",
  "key28": "4YPyAUTuHg2Uj6f9RX6w78NT57FCavwPqBDH2VoLRvWLhKMXUPPV9813Ku96UexvD9fxSXYqj1FK31PLLzBASt2a"
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
