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
    "gTCyAupy2KFrz2oQ8xADgyernNEbjHqX6mAi5WQw7hyTen1gWJGc6YYkDP28sdMJNLBALcYx22Zuc3B7iEvKxfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7ds9NDquAwTT3uJR6Dwxm8D67jyhQBtHc1rSUBmNLz58hNzoF9Cmwv4VfSUtbvzF6QmrVESxUo2hsKcneTi8rG",
  "key1": "5wp5ipXkpJybAwEU1G2ScCinFhgfzmeYfFMNfesZTAeZYDZZ8Y5bGMLPbsaHUW4tGqYMkovtgfqjWRcWAfK1TNXL",
  "key2": "JZxg8SXBr9wBaXB1E9UtFwsK1rJao7J5jwYucUdcyV4zz67TRucU7LvH9n4p3FNVNeVZKKBxnucC8FUvoi81K2L",
  "key3": "39iQv5xpXUQ7Gmy6UkRLaaEwd8MWMssnfHJdZX2rKjM8F9tafCHetA55HZahzsBGgGzrnUxF9ruNveeBEyzhyxX8",
  "key4": "5xbDdGhteDRGjLDWDatKRkQJRk4KoDmTUDfFkJAJASx4tThBDX71j8hBkdJACXJ1Zw7S3JwQTGuGA5pknpimxhF6",
  "key5": "2BNpUBPnAE2WeZ7ozoeka5uVuMxBWRzENe6675CX2e28ACSVBswe1Awb4Yk8DWvgVaX5d3V8HKCts3vQ7stnCdHe",
  "key6": "5TvYrSuKGjnHUWGaL4MsZ2mCXiKsNTXVsn8RkMnhuGmvk1WMbFMasYw28aEHPFSHCn8SPHqbFdPvHyXB5DPMchpY",
  "key7": "2yAdGVioq2p2GbwEm7XYCJUP8Pz8dihoXrrz59ANUmbnZYTC37y2qDRcJZkHpGc6Ac49Nm8efwPsUKzzfUxu1eoC",
  "key8": "Sz11CccBvGLpysoqemaCif5pnarefWtDqHcnZ4vcsUyqfnNp4NR4UcZ6pMM4fx8RLUbenMtnKWYUWDF6XhZMKtw",
  "key9": "2KFseShVzGXnS5WsghhyjpT7kzwkDr6zKnuLhvTY5CF5Jes8j2akZZa8dpJe92UVnaGXMcazxed4iRiYEExiXfGy",
  "key10": "4xJHwq8EchssY4PsUijNZVCjriR3PZJaEfspGMkqTfAiH9vDB267NMZBbZHSPMdtTjAZCFx1nscSwJFWromK7Nik",
  "key11": "2HgQt5sxvYFDTQbo2fBHE5Zj3sgiMXQBMPfsASQEi2CnwCGjw2Sc9HSDDDyNUE6Xb92TPAPrFJjhkJW9dMjDqrCs",
  "key12": "4AX8dmNo1GmFn6VG9a2g6Leign2Ko7vSKSD1ZbzozUtz7MLbhnjF9QM27irBrMw3dvsR3sAifXUS8YKydfgUttGp",
  "key13": "rCaiHdVm4kf7xbJRkjNBGT2KhEfUFGmPgHjuMVYHfEdfvRBFaXL5NMD2Ve7esCFLaxUbXGM9NLooJek3huicB8C",
  "key14": "3Jn6Pk9occkvWVxnatoKbEuuGKTi1TUXtxp13t98SKL1EqQf9zycqWq9bsVkNHmTbYWQPDEKap6tN2V6GPudDSXv",
  "key15": "4do5MemTBEYyKfLkNPtaMnhUxVJuEv62kbohU4QbJFWzVXvgpJWrYENbU7fECbq1LvaKh7oubpE8co45HhdoiKgQ",
  "key16": "3b8pHNudT6CNoktMWMemJdkWdi2NBTUm4jSRJ7DzyGfGG9nNa51Ca652GHXRShP6k2fTpPmqJEyiLRmaLyd5WTec",
  "key17": "4dGZqzhJ3LXJBpnzNcDH1tPQNo1W9aUHTScKQaCAex3nenJDpouXFX7dRnRU8TdMxwrg5K13RNrvScrDwS3D6Rmf",
  "key18": "LFwmT2vNJDA8VSkAs1T1NnTvroEWLtTjpXHs7C2C35GX5QAgx5UDaXoFsx4w5hy9CR8NFCVtHnw7wPzJF1nrsyH",
  "key19": "5gph7HJXLSxHCV7XL4BGPkKWVieKyWqntUC8ggizceGBvaUbRH1LVQrqRsDe8RGkmQLUGjHQLcxLCwmLDTxFhC5x",
  "key20": "4BHNLBCYuFqpfp8oWCtv9ohPGviqcJxNx9xGXXwzKQgA7x3oC557z2c2RvZojnKL1PpZwKcF5K6vhobDr7wrywsK",
  "key21": "2tvd7QMAjqBKs9JRfxiXiJNtPekvx5FdiWjPkBfBoghXSurTKjYH53ci7wPbBrEk4BRuUrYwtTHnouWpozJgPw28",
  "key22": "WfYPYUczwvi4ucXAx3KrtAnGhRRJ6GcCVYVvq8R4aYAW7RXTX3cTo19MhRGkQVTrwgnT1qrGVr5MYyPhSM3Gy5k",
  "key23": "2shrvUdv82PN3HkrVRSgcKinK3K9Mr1sB8mLWGUBLgbo2TCN2pASSDqAxRiAYD25UYcwdcvQco6wVijLSBRdfwT2",
  "key24": "3n6xgyAHRAip78zA64o3eTdR9cZdBt54AC9wWY6aRwT6bPS12xikcT7ZG8wu6Km3gacMzXQ3WaYTWLjNrVgNHTm1",
  "key25": "3S2f82WSebhJtRTgeNJNuSbmQjVvGSsAvMkBDaFGAoWbBiu2MDDoDLJAzBU66Dh7TvzPYdszBBKnQUEhcK1D9XeB",
  "key26": "3cGJZ8eK4Bn6WYTsg1MTRAkKRXBMgSq7nzrkKzTrsmb1BQQPRY5KX8Woy7MTBRChs6d45cjf2ucDubnsvarqpvtq",
  "key27": "RgZcHHLnwFQbGJ5Nhd2nAFCjp4HNFgi9YaBpNFAxPyHaowuLqf6oRWLX67UZiWcs8mWyMGwn8pbe8unsTH3bwQh",
  "key28": "VBh2LUgx3yWt9iNgprFM1DDR1Ai3QXVS6VexL2sWL5rhpknQhMXHi6CNAjqDs1UHVTfnoRtzJjGk42si7JD8GVS",
  "key29": "ry3CgTK4H9y5Nv9uXycDNos5ebUvfBef3KdVYLjodXvxxKyqVvpwVrTkL8srknEB5a4gHiAZ9yCbahPJn3GwAvW",
  "key30": "53bXbEqtzdBdaRigMwrLSs5EMcdg4VTAdNV7i7y89i3PxPqVmouvoGZxKpPeY1sjSCeAgM7t4opXqbgv1jyERdjn",
  "key31": "5EC7bZGCcoA3W8FfasFgyiq7vfZaWsvEceP2PpGK95Jkd3iEKoTp7aK2cvi7CKWpJjmbEYotk1UeEXJAWBWvRswt",
  "key32": "4wZDJm3gadk1LTTznqBWH5HZ4HX8gNgvXZcNQZbx8jNGYquzxYQW3NLqngy9xi157RUUzrCyuvm5FSZNkJf8bmCr",
  "key33": "25KLVDHuu5BCjeEbemgbPgtFQjFsZzbbqobCMv7we2A4tkDC86jeknLAoHpK5xjNQSyd5mQYN8ErZXpKTTxKesFp",
  "key34": "61Xb4UwW2nESpuf595UVQNrngkEKkWq9uoDbLJmgYH2pNBPTBQgMySFkjz8ks31KmypDAjYqUDxNqdLXivVDXogs",
  "key35": "5WkrrKhAN9qneLiRmX2QNAZc6FMwBfb1sdeRK5As2ukk7hJuUYbcgLN5eF42DDDDcAe3MEtshAXCmpSJ7cPuJeVS",
  "key36": "5eb3ai27zw4Syfr7LQLsiQz5C6sdebR9uB58aGPmxsp5bytgCVJrpzq5FFuS8q8FLD9RBythRBQRrbyNUYGYWiqq",
  "key37": "4LdafJJLNdcGdJJC619jnqGt3656ryHnp4cYdQimoVLRciFwME5rXPvaySDM76Qis4GHJULgJZt4BGoJgh5fnoRP",
  "key38": "26UvMb2SooywvZpwhuDuftGVkxh9dHagyYjJqRp9ngWjbQPAugYRDNbT3LdBfjJS9bKvEENsXEJMHXJNtywiJZ1w",
  "key39": "211gLRiNB9LdNBp7wKCwb8vPjjx8p3shdYrNG7NxxNLEDhgzGK3S3raDPR4P1F48bD6qyqJoCsm53eqiSsCDvRrA",
  "key40": "kWt9edQDzUMauATPifgqZsVwQwoEWdYuWayWvJFCuhdjed8nnNgqqc5pwUnjqCieJGAU8tkasjKwDfca2rz14Gn",
  "key41": "5yUipjgkvtWiBqjVKkLfNnyHFZdxp7Ca6DTTzyLNpuVg6wSUCTG6jnFrwHNa7sTUhdoyx7qDnz3E4Ki7VsrCAHZ6"
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
