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
    "5sp6Xbo4U7fLzAidYSzz8wEFAKAdUaXRivyu7AEtUArsoU3N9zSFuqUEx2KUdKQK4KSrSc3gZXhobRYxPzJPCMpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462HtZvcDqDPBmH9kzAqR2mrStNVgybWFwXE2mL6drLG65cyCn2GWWfNVYMynbhV7YnSkWvtB2QEudxynBZLVjHZ",
  "key1": "2NVcU2WHg82fd6EMMRkASBLk7YYbgV7qfCSJNHUFdF36fD7hnxwCH6qpzp7wVqNPJftS1HGkV4oaNinp86HJPkWz",
  "key2": "24wMiCsathLiPsGSiasKwvQektCmi2TBc4tfACoCY6CncQohhjxP3nL1AQdydn8MC6pHhLt9qJxF1PqxfsF85Xv1",
  "key3": "4pQvRHVaxsRLV4HbqAC4Cjk63ssYDwVJ41qbYFpryTBcTuGXo8JMr8arqZnBwgaTkFnnyi9PyNBcejaDihVfgWHu",
  "key4": "3X9gdV8yHmH1DmSLh3LGwZ8oXL2wARk8q3oyhK2TewdK1jZvzMa2ccoyiwBtoBV9KeFfHJMwN4cfx5qYXSwAqb5F",
  "key5": "2zt6JwKPaw9YUq68BizsJDAoGt5CBkDdWKiWjJwCFmL1w5LZcj7d6PDnt4LSajRcGX7thhX5hX9JoJERkCccG699",
  "key6": "ie8n943YZixRnqQ2jmqxqeuSVQ6jN5yUJKEirhtc53UeHpF9EMewjcG8Hk2ssdCRyD8GqMVKxpEDd5ADVebtGPy",
  "key7": "29NdZTKjRfSBn6UGDahxMoggdrJ5gcDyXmouwDBvbKTVx1W1HaU1igYvEkTNgU5q1dnich5DKCbq5i54Q8dFtwzi",
  "key8": "3EkQQJ4VZekEqcHS4UQCL17hNLy79MfrRJF93eyBWk8pSk3VvGYjdYPupWu3wDUzmeinynjUiJh2EQ72fewK4XXu",
  "key9": "4cquQfFU7NUHaEChyXXoA85D1vYFArN3ZiRTpebSR2xa14Y7YvLWdnXtEHw6dBgECGuzvywq57zmWwGfEmbtiEG4",
  "key10": "4fA5NuGELp3JXxWhUGnkTS9paCbr9KuNecGZvu6wwr5ZsWYCTEQ5s8NSxPi1M6AWbqR2j95ysmxyZKPda44CHVMm",
  "key11": "34axhFzsGXrdFTcPrHLWzgBAW6rHnpYE4cN4RDvaLyDwZfWxuCHDFiosapJuNzG4dxVCGeZdqcei672gnrVpPvHk",
  "key12": "5JtsciRUzch2dBG1mvgobNxKtys9DLzDSdsyYfrHNpvhHpLoALUhdYaWqZ2YE3dv5FpWRES3HVEg3LZ6EwU7YoHW",
  "key13": "2WyyycGrnM9ygCAqrGisPoxwCcvNwBAYcnhj5Kfu4JviwMkcKn558qigXqgUcTYhedcgEt6JoUC3R6T4E5KwxJrB",
  "key14": "61M32FtypdvdXWH9xnLLvXojWqfoC9kwdDDuqtMuqGNbtkdMWAsvFot3s3szuayM5tNP1cHNr8WHEHHZfcs23tbp",
  "key15": "Dim9fXBJ3RWntZJDSpZiJQZT2xSr6LdxA4oxCNtGnRCYsxctZYjnzmhy89hMG1MUqZtq56q7749jF5MFKJVEttr",
  "key16": "jbwBNuqZHZTLKjZQKYa5U2EmdGyYUAowyKUPJTjPQtTheVU9scAdhYds7nXHPob4jgZ8BbzjtNHsZk9WvwvHtGM",
  "key17": "3HU4isMgvSKa5ABizVzy4HaDR22wVaXXNsNgfE8uYXAqfpyN7f1UvnbCYfSsmJd2Uk5umXAhoaJHDFsdTAjCASB8",
  "key18": "4afXQrS7x6vQ5uM7bjBu69VWW8WmYLoGePn6Z7RN6fHVHp7GG4UJkyDHKERe3afR3hbpwYoMMmSBsfDf9N8wzJN5",
  "key19": "61NdUXaG4GPVr1JYhaSHHStcaHRWcyDfeHaMVKUTJjATMn4pA3D4nya6dEEdZw5n3XaAguVTUdWWHtnsHVXFno3W",
  "key20": "2Ep5Dj6zWnXABx59AeYEFhSWb4eRAmvLr13hDKCSb2KC1xfrEeD3pGBZJvbVVALHKhBqK1HfWENfzrtmf4QiBudr",
  "key21": "3VDMgVGKHsFAde7AJ173azmNMbrBbMZBBzHxn8ZwRn6viJ2obYXHrvkMJg5xSZ1x4Gc5idM7pMpmvcNEN2YM4K6T",
  "key22": "3jt6q53sSwenQw2DskdaDz5BChTxq5h5YzjqxozFWsYueyCKujhFpt1sbArYa2XL5QvtxWYJ7YNNQbEcSC3n6k6f",
  "key23": "3RmtdNuM6nqHmEfYNATSUyTqHy2qL2aZumfNY7vm1jEj8qTHkU6jHGa6xP86ccmbvstDYXb9awC9zSKKxwoYBc8e",
  "key24": "3MweY5nGRk7APCDDjXFAEviZRJdMDDnNatf5citebz9s7vMzdGknTRBKVBSd9W7LEoLZ6Rjg1qASGFg5hFh18LJA",
  "key25": "2Zbz3WV9Hx6WwJ2Zs7bUWGb8hyHqVcXdFdSFukHBfeEFULvyEET82711BkpNQhQPzw4jxmtM4bQaPcFMYhP7msUn",
  "key26": "ECURQCepWbBCeSeNifmTEf2C2XiZzbAyeC3pr14njB6ZysXP7rf9em5cY2yBZF84DsGtvXF8ZxLhotVwBMGNZLH",
  "key27": "2rZDGxdFg46TRq8S75pwUTL4siC2sV2sdGeLCSEZ2i8o1u4QJt8S1MdmHcTYoeBvjZt8AgeXKW4DY1gmv3cGEH23",
  "key28": "4iFYLsL8gLeoXDqJcTeJrGj7evEkAa9AnfyR6TYZjZJ5Fijn7xdQ1yZzf27SG8xUUGxBL2gfVfR7my9i16e7UTYV",
  "key29": "3dRYoBTFHguuCcDGRxCNrueMjtfzJh3J3wtm8j26T62d35DyQnREt87cxneXCdweko7sewu3KXY1wJv5eXt1Qq7q",
  "key30": "3q8PYYvAreBxfKXS3xHTtSyETifMFwm8JA9aYLnjvGAW8vTsTAZwydA4mpwoCUnvAm94DuFeACJpdu8w38u18sPa",
  "key31": "VeaLp815WvxdoVLYP5nYQiPVrzgwKCF1GRPALqpqRunQQLRqEoh6ZmuGR6bJVNyfnHZDs4tTHYwGxarMFgyR915",
  "key32": "4SxSXJ4qaV76UXYiDKRCn71jhNXEJ8h2hcUvd4ZU3x4Aq9h1y9t3yZcbkoWKSkpVDdbYMtz7CRkeJjwz4fwkJXt5",
  "key33": "4SowzmqQ7fKSf6yB2XsFQqYtrqHoFGAwgYxv1vemHvHwdn7pkCKjyR24ZSo82i1wjTFSHdeBYi9aimef2jX5HrUa",
  "key34": "ndupED7fnABUvNRckNo75owxZyB3a4EhRed2CBLcMHx1PFSfXaUJdiqmewdYes1rvoY9ukRXdCZuhXhGhcVap8s",
  "key35": "2kTqYhggb5MidRr7W3x4EHz61nzxC1CVwVQz2wk9dVpcU3iDC3KjFM7MaLJM9QRJjvKTi3zYRrbvtd1f7oHJ1eSG",
  "key36": "9at9n2pcwt5EGToc6xwXZ9jhr5181ggwZ3xHB9NtvW3QjkrQQommAw9yCbZs4JH965eevkYr12aovX6qqm6zyzx",
  "key37": "EZLAgB6nFZWoAioqEb2LgJJe7ar3REPPTESwy8Z7HT5zxxkCHZowthuFtJRDdyqMeeV3AfdB6u6f7NYzeDYpQcW",
  "key38": "49M1K9Ba314uGf2cHvLNzFtCa6nWDfY5uLYKjeXezYMYS8mSNDR4jVqE2h3aQo9Sv9dAa6grhbBMFShQQDYx9ix7"
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
