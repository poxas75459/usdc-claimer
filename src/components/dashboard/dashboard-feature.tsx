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
    "5DZpHjFmqopBAaALqwBSq5E4KkEvdYJYxz65ZxC8eRaSoGGevTQX1DJGm3GS7Jddgz5KaUrTVmitjkTx2bu65tGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKFS2kNY8yvAdgfHdi3KePnAJL5xn8AE7ePof7sYigPvqe184RKHvtidznk34tDPYEssMYcWnQApXAPsab8cEWs",
  "key1": "2WTUEEn3zRv4Ghj66eKZ2dV7FNY6od3yjMPJLVUYZ8B7ZbmLpgvXcqjE2eRM9mgAKLmAfFToosoU3hZgc2jHnoND",
  "key2": "5rVoNe8JF8UP1krK7GqQ4Ftn9SmSbgia5Xi8idxC8w2RXqSodYutM5ea87Ai7BsCwc3KKXasD4isbfhPXwySUUVB",
  "key3": "3pjMA8q728bHKXMk1fj7eFMUPZ6gaj3rn2rP1fR5HQCeo69zh7iksuawrk1zftE85GZag1cGJuHqLGThXyx1k3Sy",
  "key4": "5Szx1oPY9pjkL9JBiv1LH2MQF52oosJDJPXEaFKc28joNiZimJfEF3khgVkBiSBmDqKiDDHRpZjeinXPf7opUuDN",
  "key5": "5hCgavqvKwRj3XnW3zTbS8ouwTd27QdpsNrRjhDt7uENkvtZhRd7nLQQk9rTjkpuPXMEAzjmbQRXEWgkAxadjp7W",
  "key6": "2bthHVHvp9LYjgG7EvUXcUoKF8Tm3V2aieGtug5CKvRJ5EP51PkNv9egG7bRYrcLf1476uD3hus7US1JqqJMM3np",
  "key7": "5ekt4vZM4dsXtSA6FmJxz4xHjoEdMhdKr6h7P4GdQPr9xe4aWgjWPGM81djJaQidvhX9G1UEtgLCMgP4TTC34Abp",
  "key8": "4FqUdxzfqWNHYaC3FLBw4zp8iRuWYssq6PSEDkVDMVb5CXAoYjCU6KwCreehKtL46Bbr9UHF4EeZDR3c5q19ML7M",
  "key9": "2u789yYA7JohPiRSBKwvxkvnFiSzgFJDjVxyMRTfDdvMRa6tY78e13TbCUKzo6YwxVzePvjoh3QvcCPXkVHnku5z",
  "key10": "3JVCSibWfmbRPTotbZJroubhudHFeVvRbT4T17daKyWJcot7GVF8tWzd9NRtsrLCMPF1hFU2YcTBNshFCWFKYAYx",
  "key11": "6p2teRQCx8gdtMQTLJAKnb77gzDxuYK1dAzhKtA55yfXTMUwvZR5RE1jn1WcWjzgo1ntuaMhHUbddb3FjMVcRB9",
  "key12": "2GEA1rnmUBdZpV6vRWsDTXKTrepCdnkDP6U4JM7wRH1eoqe15ZxAc5zdzqgGHcAT63K3eqw4MAyquxesXye4zxWC",
  "key13": "2V2T7uWiZ3BGoFzGPQNuizqRCaBnoMYe7hz8cVUcwHmWVBcE6XAeXCR3PRQrf3cNeJwADTe9qg2tfFmhDWh49JDv",
  "key14": "2DcPJnK1E1cLaQQEv9e442dD5KzYPrzfDMCZM22TskREttWrAFSUThz6VPDcq3NRWGmnzLzD1fRzzg3AGPLNwmCU",
  "key15": "3TdVCTAdoXRGMGqqCZspRUhQcmNP8vRZk2knMtSBe9tk8D2KTCjZxur7nFjmpKLv77HRgPnYQMTtfvju9qmNC5FG",
  "key16": "5H37PcS5XCjbcjXbWVNEVtF2oEEBDs2qLN9CP8zgKm2nsJ4mdNE4VbtCGuFYKYq6BzzpZ5NvfyHhQDbzuZCqoQT1",
  "key17": "57wzCzn63CX6r1tkaD74fByNeFqoybCu5LAPoG6emB9HgsR7ZoS3dWJsErRShscw1MyHRXtmLKVdjLLkKupAbNA",
  "key18": "2oYhMbxRnSJyvAzTr8Q1vXk8Yx2ThdQhCf1aZQDXJ1ZiFkF2JKyDt3P6GFcgHcDvboZDJc7hJwGNyFUoDATARqRG",
  "key19": "4xR4iLeWm3qLJsyoCqbDSjx6bqYqcsyKNxcGaQ14mrqFebBoWwsxehoqbSi15HqHrQ2Uw1GPiGtbKotFGz5pEinc",
  "key20": "2JHtqMugGXSc2nkyHufrt6NqwVhzwrXE8fFosw2gi8q4oMfyDD3uKjBZHLMWpYs7NUkWaw3KTKe9hArkwVfXdskv",
  "key21": "4mHrQZrFXMGfqrgke2ykm4pjYDCp6tqAZMXdqQdF24tzPuBDW8h6uax9usxTpdduKtcG5iEbDR5DRaW3ZmqmRkbe",
  "key22": "3xEqkpFu8enKHx3JmYSj2DzCknvet26idqeweSA8iAcS1Gd4Ku4Mwm4SoX15Pb94KwHLN6pwW9PDu8fQYRsGnNbM",
  "key23": "4b2Pa2vBXZsfWvr74QZ4XYwTsqm6NmotELDuCKjFsbDdnLmhNjizVLmEYfzfhS4MFhYSFUXCS2cFgxQGQGYMcdEY",
  "key24": "5vKU1Tkf4QL6vG7nktCtDHixDgLFgagCH8VkLiiQd8simuh6AZMZMkNtZrwvYcvnEs1j8v8FgvUnpVByutq6Q4hr",
  "key25": "aGoYdbWb8ewvUeGvkctk54Z4X1JsANWMuE5D3uNgZT56qRWZ46KBqzWDxAMS5wXSEDHW56SSpPXkJTqSfQXNrPn",
  "key26": "4b6UxzS21CkfLCNg57AVuETkRzbExSqMkfuUVMbYtQDHzYhdTUv4nykMEE7fLzpH6BRUkoEuyQDodNrvJGEqSfFU",
  "key27": "wqDweqwD98jzaaFZJvKLS8mc2DEaaLx69RumyXz2wNWfouutpsKAocCQvUqaxrB9o9eNNNh3X9RZX4CoBWdkP7Z",
  "key28": "2GSe6aPY8oVsjjdezP9jDA7cWpkuMN3DFKynr1AgHNvVHXkHW1WnWLVVJRPH5WMmLm5QA2h1FFGGmX2ujpv8d3i9",
  "key29": "2pmkAe6KhejRuEC3wuq7TyeHxsBHTfjbnSNDEb6uoPby9ksdRweeZjibdisUAGJ2qcg2YzacPNCBS6utXX4woWwW",
  "key30": "5tRjULHg7JL3z5Yeb2Ek4yVZ2m4Qwe2A1LWFgASmQ6pPWFQtMcmTuwSrvCvPVPsjk37ZnsTD8Bv5P4uPYaNoN5sC",
  "key31": "5WUYqvhdefe5P6ryxcwKihAHHKAqG7NMY5XJ1APkLjU8mfzF3v1Q9gFEYtve7wEJkuGxsjwqTXGyZeatyKVHp5rZ",
  "key32": "3LZsCRV8EicFXqsPCtcCyADefbQifLDaAcztPR5ta6TYwuRswVJt9hc4mbYoV4KpCZ7d53q4ho1MkNghgeUHkjCp",
  "key33": "3userRSv9U9KNCrxnFshEcnuVBomS7NGcHqtP3H2PUejfDUhxBNeXCnJcDkxYhRYNqTK4YYsg1ANCiGBNNhccN6z",
  "key34": "3ygE5u9mn9pJRFvTvZCQJgYF5pGTFRUMvhHnbXutZRsCCBKF6TSRPKc6Mx47y8xpaUrLftGpNApHQrcBrhdYPEyg",
  "key35": "5j4nc9DgmoHpJHRuC286uJ7VX1V1Q7cjpR4N36xMbcC9hPEbaWPrtV3bxv5XDvygaY5x48UAHBgTVBUnDVLP61zJ",
  "key36": "3Koyv4oHZAaXHMaofwEWxANdRygrppNR3JsHQKzCcHt1ToFjkhJF21BinEAYDL6KT5QgqEKyVV9FsDipGRMqFXJd",
  "key37": "5oMpksNzKVAvM1ShomVk5orkbUi32RUTGQXv8izGUDzPCT5FSe5tb6mx3YQ1QVrrqRz5YkMRJijdPktzPLm41ANL",
  "key38": "5JF5pPcFq6h6u74c5KeADwbyCSQY2ji4gBscWL5hddD4HBD6fgNbJfjABzjNFZnNgr9zodctWckrNHT1uhQ1rhJQ",
  "key39": "5eB3562Sds4c1KSdQ7Nqyezg4RsimahvbYu6ETzGA6am3UJgQjRrmgT1nFiGV1bMuaaYBmh3pRhiCwsm42bW3wmf",
  "key40": "5D5vkbhgrSPynAAoDiKRHMXv75owifNKLUDTsG1xiHRXarXYqMWiH8zDncbqwqyXXGGixuMKzqVMaiixhL9ScRTy",
  "key41": "4m91RjS2iQuXRcWFAuUD9Dk19ZzUm57M24mU2JZGdChaNkGSMxKnfxNKKfYwacEa9VMfVBvXTpRqenaJqKHSn2ot",
  "key42": "4XcZ38yjiDswkMGzD3uMFNhLZe3D9goaA3ox62NWMEBAXsrDG9HxmNqygaNxWXPCm19bAGnZEhsEHWR47uXbrVne"
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
