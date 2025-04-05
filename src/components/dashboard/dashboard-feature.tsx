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
    "2Kf2jD2ic8ehm2AUtDW6s4dxBNG5cJTZRPbHQJj25B6rw88oqxwLrzQXnUczGnMGk9fwmTyuw4wuEyHCbCMZiqKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AyJAja5Y6578PteYNSH4HFg5735TFX2XZK3zaunhBtTchAxwbo6UagNrRQmYSZgeWFMjY36TmtXtVCa2QAuAD9X",
  "key1": "61bJVd9hsUX6bTTu3f96ZLpKsBkePWgcdY2xRGsFBRXNfLe6ni9jfdLNZf5o9WaS25CzuwiGA1cE7NryfxFZUSfY",
  "key2": "4EWWyjKMNKxTXZvHXHDnok28Z65Tp7XmphphRcJZ7Kv2Nger33QY6BLq4jdz4bVabcYAVju3XB4CaFG17YmZwzE4",
  "key3": "5ZR7cykgzCM8YzooM7rzifzsDkLeZG9cvgm2rvN95yCdpjr7S3Y7TZADFNVvmV8RrwQiyiECt8hsQ6D8xb3rBhZb",
  "key4": "JQSdov1t1VUnLVcvk4tbefVfYMnDMGqqmvH3BuqT7Lp4tcL8teX1SDDcPzT8C3NWMwsY9KswVSeb5t1mj21MPxb",
  "key5": "3gehFbpg5WSo3CXrCA514xLicgFqFXY1bLNiWukTQXsdw3opvEfc8EHxq19Y78j4rGt4qNV4cH87VEViNuYUNays",
  "key6": "3nzCwZSSzmH35j6NqSoWCKEU98AJpxSmHVAiSYBSzanhEL8yZrBBZNAyTRwa12jiCRuB3uvrYnHe8YDVfA57ggVZ",
  "key7": "3AVuYFLUB3JTp7DuHQbFPwaGUfhyPonQM9kpDYyxb2GQH5wQ7W5dUGrcRj5ZLjEhRF7fWDek3qxErP2mc3LQK8zz",
  "key8": "3kQxgz9SorWsu6kar9TKHpsXgVKtiqFFg4PHMCXmznQTzKoeq7RtaLUc13UFGqo4g6NdHqc7MDhPciC7gbq5oRfZ",
  "key9": "4NuMr6jsL2AeSpUbTe3todyyJfHtFMvDc4hUwFeyE26TbzhMYKfBZA5h4ggJx2EkWVXrBLGknxEuzZt8z1FCumEX",
  "key10": "3acMvHMZ5EvGxVBnLP5UZCSUuYbBWsne4FCfUYce4YEVRHBiGKn54VrBh8iS2VRGg2nEDBv2swBmY89LtbnxcRuH",
  "key11": "xii1pvLMx6pmbuTNUMBUXQJMccj7n2UudDfDdvUdKKuyhGRCyCf3bK6Ur879f22w6PdxkU28qU6SxW4Z8i2a3i1",
  "key12": "4qxxsMT4p8xeNfVRZvNQySGK7sZBWDgEJJEx8wAr4FL8NXjXSV6vaVdYnSYEWxiGTuUmQApHWXLcG2NeTtAfzJ8J",
  "key13": "FuKvioXHorsme2kzjHTvTu3Ek27gTPU4n1KQtAYuN53M8T4M4JiXL55Ue4tVcjyb6Qucvac2bcy1JLxpCSUdrh1",
  "key14": "2LwMRNUmDSXiwUcrp8Y2WJusBEHUapASjBwXKy9jjuJ566MJPiZhvUU6Dw7RiEkeLmx92X8pKUFenNXLGzd5UsMz",
  "key15": "358RvPJidJWKEkFwtqPg1rH6iQE2hJD36FEL2KdWGoDcyvXB7KWYD31pH7w6uQPHB6uMxjXdukPMJrLL6ZBLGzLa",
  "key16": "4ikJDim7bZHY6jpLzWZZMcfdRRhtAJYrZpZzMXj6GqaJ8e88E3TsoE5FuZtJ95zaxtXjBpvZQuuRTCLRh3JFDHvD",
  "key17": "4FpUCrm6RPp3rHkdp8DwYWrD9L1hNh5n4rFdDHZEecg47e7N7P2NdBvurWAyFfMZ6oyH5knz9PS3tnAwvX67xUQP",
  "key18": "35Jkv9cPzq9czr9FVvk48HnkHk1MWqSWXorSBXFEAnJPicGDAzdXizT1jP95tUQ654qBdNBKFfp4FGvUyPpgthP3",
  "key19": "aPt6wexxngptCQyKvXnwqCXF8nosRQYTP3ztTU8Q7qTggZVffyjgi8jm8WxD838g8QxN3QuYCs6UPceFFQQBxyV",
  "key20": "4fVCFZ46T4xd6myJHBzkN7E1Jdk7XrjGTkxvPjXsK795M1srqJMQojjrLhxrHUNFJ16Bca17TBwdYBxDRK8XbsPd",
  "key21": "23CppGuyigW4Rh7PJh6XyarFxdyyVsKjRpUTMRJf1JB51KFUqdCrPMPw6mtk4a7LxY7R7NzxeHLykAZs5N4rMEMK",
  "key22": "3goymcrr7yrcwwvvs3YLSMkqwhfPoktAvEEooLSrU6dG3p5KTVuxsTocbaYS24MQCRhj5RTkm9HmBgCp5eLVn3hg",
  "key23": "yk5HohnpaAeoEHgqQjtaFkntjDLNPkqGeWAfXrS8qd2FPncERndwKyGFw2nWmpQPvaoAGkaX7DTtgvuaT4h8Kzr",
  "key24": "29x39tjasTR2L4koLk3Nau9QdNxRdq5k8BQVEjpVsfWLpQUrwqhxFbWXdC77uCEP8YYpaYeMBQ6kkFQaUyBXKAN8",
  "key25": "5PUuEpppuVmDi9Z1DL8tVnYeDJsjg5jR7KHEiXkwRSh12jKyNC8AgPPq5GZrhABR3s931zDffpaGifaaVbeYq64C",
  "key26": "5bv2t1jz7KFG8bkPWWF3ZdULhn3cYKoMpoDuABWN9hwvKHSRM2C2abrQYJtP7UeCr4GdTQw8eJZFtEnfxgQ3A68n",
  "key27": "iC6HmyFVqfKT8EdVstQwLgoRYS4Ts5mpLvMfJYTyYocikVh5vVMZpeAhTfxugfkrGqSwa2kLnb2Xi3CdBm5Ekni",
  "key28": "qs7AcKVXBARqwTz1TcNjQaEj9fp7pzNYqBfpGhtGAEn1bttum2TRmqo5JriepQKmcEddQFdQaBQrdsiiyW95Zqm",
  "key29": "2RJJeALJ7VPvBzrbgogtbUejs7GcwzHpfBjhGKjMLzGjtGZjYfhcoqfNJFqYhaBVmPo8MPj4NgcVL6rPqdpWfLf",
  "key30": "5c8H9ugePtgjnft4r2SGWKGMaskXrQy8CfbQmRY4uT2B1vn32somMTSAj7B51mzFmnRmomQbDuF2Mh1Q7Yy1JhVU",
  "key31": "3xWV6uo4MGh68XfvqNkR9JwqacgC7oDRxNpDr3esty4H6mPdjDpgxDBrERearoa3GCXE5sYDidWZLraT5jNPCiYQ",
  "key32": "2t7zUfeBX3uhM6yuqhPjhiG1TyAJwZSMMeVqqiu5DzAK7mtF6h6YDokV9jkLrPbkAnCnNfNwQ2dM7RcWsMaJmRSt",
  "key33": "5ieGYBgMtdmQkGJ2MS3KQmjp39HYFQPabntNTf86s7wQQeofrjGu7EPxFXGoJp8gZ5x4R4tLZD7LBfTcyQF7AEHQ",
  "key34": "43VoxWQTtAc5pXDEGGuLEio7A3EkChvhJDjRuoeo7tNVDwnWGshx5cuZZPvNaDpcyMbq9vcK7xQX8nJzUyziQbHb",
  "key35": "4ugMkg85cgNJuL23X34FmFnS2csRR3t9Yce3eKxxeaH79RT37jy8faJjT21p9qszrg4bFZSrqCjpsxfa5swujXid",
  "key36": "3eQYKpCCYu3JuQhSEpwUn74htk7GtKjcjTnJgADU2C8WYg7tAAMDHg42gn3s6sBcfuGXotMpYqHth6cDqEScKxvr",
  "key37": "2bqD6BpXPrH5xWx1kDHqkTXw4U1czTc6pL2KFHSU4Yo1psEVMnJSFmUQ5PCMGs1gubwYseu7j7ALVL5ahWjgcSM6",
  "key38": "f3z228Jc6cFrXm5QNoA2nokh328Z3d6UpsWRtLHUhjs7KzTHR6bBmkML1cTURWmQCpXedY7ffy6iEWhUaagFWiS",
  "key39": "HiP7G5k17SPGj3fjyeWRuWADjh5rnRg4eTSwfG4zFBFmTuMwh5NC3t4HbRhyy99UqzRddFKaymjb67XbCYjN8a5",
  "key40": "673SRcDSNLV1b1DSwfuZBJ4tXWEVe6tw5uvri9mfvqoLiv8jARyCvSV6oA2L5Kxcdrfut9m7yiBQPyfktdpt2xpa",
  "key41": "3ZLX6BdSVjmf6UWSrgxgUJy39VPNJmHejnrrZGmyqgKPfeDcqbEwKk7nTMR6sv74rNUtdzBCe4N1F9P1zZXZ7aUG",
  "key42": "44EiZXU8qTo8LbgVnhtpxQVFMXzdoBSnJ5YEY3ncXAc8g4i38pFBZDaBAgNxhUk4d582EKFtNVzxq24aY71oLT45",
  "key43": "2pdjasH87RtnSUC64XKon5cDGvGckyHqjgrNkDnuwy3yFcBcEQUrZWMiERpALwhxt7jFkuoMdtawZ14Jh6x8ZjRF",
  "key44": "4V4BhrvHixxXJoM9dtG2asoDmYecseFXdcMZZVpWbAgJyjo37NZaJbsDZgXE8iRJmfqyLjGkqviA166N3A4j7kjJ"
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
