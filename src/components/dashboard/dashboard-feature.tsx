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
    "2wGdLWsjgdXXEq6nucrVYe3GVpXSFo7TNmvCr5fsBe7EN4zjiwfuuVyNbQgiYEvzJVDGEvbgdb6FgistVQb9s1JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLRDDjUN7HzNtvAqnMYrvLM2hKw6ESUzoJg7n9PZy68mu6Gkc5FFTDRePXXm2FKSKk2bdwq7VRyBmYtXzMc3F5g",
  "key1": "2iQb5Feh8x4pKX2axYKGLBarwwrj1yEr3VW97dVkqm9bHAzAJ7AmAm62CWAZcTSnASCGvJQikrdQu5DuwGGA7J6N",
  "key2": "2k4ekszXynhwaRgedJhQRHN9AYPA8JuwzZtQ442EcJA2NzKG1RCXLgLUGaXFkkcRb3q2Aqv9iioRucELM9YxtewH",
  "key3": "2JE2UcGsHgregVz6yfCksYAcTU34kwCGEZmJSL5kKeZ5dehg15Pr538E9DfYwzEgihiaWxAvAeNy3x4e2aTz1tPe",
  "key4": "2rG5wuK9YsJXZqgFqqQh1KgF84kpmSymxYg6d6aKejCLdz5Mf8rCqWp1b8ZknfmHv8MTNopVWVq5F4X1CcWUoCCj",
  "key5": "4XsnEpoeG1NjExEjhMJGuDHhsotwAf8D6n35RUCbrmcpLZSLo499pnng5T97Pw8LtXSmqAiNoFyW2GuyxQm3eHVk",
  "key6": "4HywnvFBToisdEb65hUVefbqawHALCrGcF3F3EYkwa1Xfim7iahFm9n7S8R8j56RcFMR6SwG6Pw7QVm6Tff6EKyU",
  "key7": "2EqXTU21B2cbMD4rb5ZDZFnD8c2wdMWbBqP16BsPxWhxyUKVfgzD47jQbXoFz5kon8uKCLP1QtbAR1Kbs93XiJc2",
  "key8": "3VbQVGTJHQEiDFcXFBgdniPkx38zDZZGDDfDZ51zD6dRnDz25HsVHABEvw87t7Lp7xybJme8pLbzrYeFA5zbbrxr",
  "key9": "KxsjbSPrXZ55UEge8DJPTDL47eqdqJU4pvAs9dUamrssDoav3b8DRtBcUyhvTsX29DVqbB8HRhNQHf2YzYDLdZa",
  "key10": "5fu86mSv9Z5FFEuEKbZmeqX9Gg4n2R9RSEwuSDTzGPWgSfMot4AmYYn6vXJ4XgtxMZxiceWJTwjZa5m7pwkpbRq7",
  "key11": "c1TwuF1CVtsdonmzLhfa7JJHw2s4jK1TYaXJXcYiKTgan8772HTKm4hywWzzkD1a9eC6CgcKVsnaWKsU12Q2dxv",
  "key12": "tBfcxrWVtMcmUMXNVm11stjWuFmPZ8xduMbq4ffxW7e89wje6zcRVAwRasmwtKY4LMXPkbwR2QUwCyvB7czdMDb",
  "key13": "Rrkub2LCS77yUYrotMjrrUYuz1KviCoPXYm35QVBXULoKtAf2n9J1xxJBuigfgQiXUeLu9zzGUoWY7C8wNkV6ku",
  "key14": "7ZU5We9jMDPDEHzjSbEaf8Q3nnEG77VFNwCR7GmRhLJ6ewRJTWX5VonCBKdEDLBFDv3D2R7xd9JoESsLc6pSnN3",
  "key15": "3VQ1pYFvWwA4FEQqXn4xhLbr18skMpjh1zEQx9y2fuiSZ3QZS1Uua1zvBgbbWQcYt6YSTBBHDubqYegUrLxMZyAG",
  "key16": "3KU2FGVTJMhHfsaG3xFwdE6tKgkUwRadseTQBLjnwMVdGL8Kj4ZMr4RN3Doz54Ae7xhVR7ViGBtAbFquTk1VeWY6",
  "key17": "2AXsq6fKEyp74YYbaGCfoQ1xJ7SmsjnTG41RXh7PRrVJcc3PktX6Q3pvEC9xuRJ4JiWt1dLUfA48jH9fHNfQReD7",
  "key18": "5daWbw94GyY5PzYyL9RNdPZgjxgb5hRD3zxexTb1DqgbUD67gXSFp6eLnJbSesL8i8J39jhx15JpgyQ1UcXkQz6X",
  "key19": "3Mj1PaYfVSDeMd4naQjH6mgD2SqnpbXGxejCgp57LYtKQ3DAwT8UHX1csFUxrWsB9Fem7r5Ss4dWc3SzMuXWbApx",
  "key20": "4iQr8KVHLJEaoy1zvvMkyhiAkSsLnE8tDq3pJ9BwKDJhatqLFZuQPEiXH9VwvRXrwyD1zSmdvE8wiJhcetCd1a7b",
  "key21": "5pzzpeNzsgxtjCp5n8CqXePPMCbytWsj8uHwTaxniazmmX5fQGkRDogbczdwp8AGtXfgzSu6qKbzgY8qiArtsPpj",
  "key22": "5Z9cceaxAiGgVyEAeT8cKHrnHWAc92qNfTJLMFgNkYA2UTrGbkTrCMbvoMe1DfeutNssc8JfadVrjcqAK4LQmKeR",
  "key23": "64vDdxP1M2F3ywdgKbh5NCVThC9yb2NbU7GTuq7V742QXSJUkPTwH8uVxjztYaD3RPYQhAnoAsJAFQ1Ew5mWaVNT",
  "key24": "2wLzYuGxCpjU6VA7xdxVWnDD2RACez3pTzNzMkb4qBrQGXWRnjnkQmyuK21cZtL7qgGsfrdQYM1Mh34D4jHpnWPa",
  "key25": "5tdL9SnPEokUafycUJeNZciCyRQcyfz8rp3AL4GeJvZMwUDH2N7SA3eKyJwNcFqrrkszg7TpAQaijKUn29GEb8kE",
  "key26": "3ZxJN4neSWxcVdyfG8PfTA7ZRTftEa4oh3zBoqHCCAmfHkzP6zzdsrisBuDaCzYcY6JGg8qexUMJ55yU94ChatVf",
  "key27": "2cTeEVUGufzwLLFySpMwLWoxBqcbaF5VGmrm9YcAKWYpTYXJTuTfAEH8xR5UPGgrijcXbDCFzhrPwxetGLoUkddH",
  "key28": "4hFkntEv4xThBkdkZTB3A1uMYubngAXsD61zwWJe3ixYU32irYZYLzXinzRYiZTcc8oFZnGadBpHxpt37smTnN7Z",
  "key29": "24ZjmhFG8rmvmBimS6Hz5LvQnucVzCyVJFqmbwWfsUSCpEgWnsxrQNckqmKx5ewMeD9QCwmtBjqQwkbsrncTKnnr",
  "key30": "2asdtRturajhzWEPMNU7pWJtaud6Xubeq2dXM6X5kRHfTjSUBJvggop3o7erwhnbZ6p4scHZTtP6FUA1qWnMHBNQ",
  "key31": "23gV8UPwBLZYGNV7q5phUtNexHTy1Zx8KgnouMYgVV6uA86ewZHeNKqGXye1uuDq7Vu1BNe7N1pdGVkzRLHJCup8",
  "key32": "4cigVhf59jz1nqtsV45KstUemgNn7EBJugbmktnrhH1kMYEEAvWFz3U3TuKtq123UcERVsb8ZRPWpiMD3hrTKUWn",
  "key33": "3RJ1omJdLimUvRgg1Hr8Y43ckhziaCB2pETagj1LL8LxKX6i41u9vYEFeT46CoW1Yzf2yQdrEK4mgDedg3i9CeAp",
  "key34": "3tcpYbFDjqYLcDS6BgLgm4yDs7t5Mr1WkiqwdL6yN7L1TPHZNi9BQacyJZvgopW4ewqbK22CvRsGs7Dq4iGi2sKB",
  "key35": "4FXF4eLf2wvvm8dkZMCXTsyLdTEgzNeRngTef872zkYqBR9PRXu2D2G8GR91bS4B2qK9evm1G4HbG1p9SbQaBcDT",
  "key36": "5e58dV91hpUEuW8Dbke1BGjb8LCKd5gW87q3WuveFzxmWa4YVSUNWfqgkdDpBWpVAV43iBd4SzrPCaFzU1jiQ6CV",
  "key37": "2JQFmUeTC8XT2CTUnWippDD7sBwESTBmNv2LDcrefGYDFrGqmLqs8JK9ttve9mvvHX8fJau7SvuurV89amJ3fQXq",
  "key38": "5bc7suktygotxUnZUNcwP2Lup5tp3LgB6noYgy2RDCJfubMmVos9qR1RzKQGrKK6UV1hTGRMDFsdWuTAdbFa5vCb",
  "key39": "4xYYCPBFbbdzN3hSLqS74Zcsg3G85F381LNMUZRrmpdeqaRUk5qCsMnvfquZoKnfofteWKZ4HStFn5Re1ootQeFH",
  "key40": "fbfGuVzNjeKn5CRnqTsZWYKRcP97J5JZW5hTeGq8ZBycEcFT1wJuiRctGD4Lyn8kjA9boDW7izgbkiJyvs2hSJJ",
  "key41": "5pAQR9ECiBRxDjgmFzKAGLndkcAH9mdth1SmhdWg1mX3wNNoT3fCKHFMSTf4jbC3QHNY5pFPVyF1ztW9FUwk5EXc",
  "key42": "455gZ7UzEYVu4WfgPnKZcxDi23rpuyhm44RPedGUj1RPkRq1Dqg1qoDQ1c1VQABkuYKTezEVJxGG5DcdWEmVkxQj"
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
