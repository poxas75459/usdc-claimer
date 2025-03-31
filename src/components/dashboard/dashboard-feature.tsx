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
    "5ZYCWqhwDjePEtpHpKue2VCPrG1ebP2aCM2TywLxdBvHwbMQnmRgdRH3nbhHSt54Tikv2eFprGGDoaHMzs19GznQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6JBDVoBeXqx985nrQfCV6fvbNquyAYP77JvhJ46s4Cpmi3qgZwqqFtHMBk1DY131ctmLUz6XTLhQ6DSFuXydhK",
  "key1": "3CjTF1nVgPB3pqk6Nbke1smwFvtoJ9TTCZsB89StuSF7HmpAdxJv32hgBkNSypUdmrojz85v2oo6xz3grKoV9Qt7",
  "key2": "yskKrmPTJ3X8rchars56D2ioyyndtiZeWeXgn1d1E8ZzMPacVEtPoBVbP55Hr7Avja5zrGYRaz7ryf4zALEqsS2",
  "key3": "3SH2waB6H1LoyZabCTC4BhFrJm8ZwsowmtHQfekSmYwdTavMjRgzukn8DnmEsFNCiy4sWENgeBybjLZ9jFCR92Ro",
  "key4": "2cdEToixYEP28JK6t4NBC2dx25HXv1DmoYRNVgf58PjZ1bQ8MTuS8WytcKz4T1kXBiCG6TQwWy6xgnNprWtwUonF",
  "key5": "5emG4d2RsAcNQ4NWpVYbCgyN3G4ZedFsitv5QKmoNiGJNELV8oaB36SdkpRrFmfkxiPRYF5jhGhh67xaQ5EVVyvo",
  "key6": "4smZopkwioTAiwebRs2UoB6vdYmXicF4Lmmrq1g7sWJqtZdXAc9YvvTj35xGSvWhPjuqCKLk1uj7uBFNJ6HecDkR",
  "key7": "vgzMorNSapjUS54Gt8oFsLBkZRTRHSoqGg3D1UgyKpVwmdSUcjrcjZqBWDbVj9hLg6TpkAcB3DiLbBA1ysykEUX",
  "key8": "5zgcuq1bQQrEwj5ypUq8xDf1UBjyBB6QXf6Zj4ZthLA5HNc6UECeqVvZG7L3JmWuVzyNARYC8J7QuGHMjnKMR4Dv",
  "key9": "5auGSUtyCvsVszxJ7QfYFtUCmhY6jh9HyesXNWC5wFHMS4jZ8NboCjrHF87somB6drwBQby3SovLKZXQ5VaQ87a1",
  "key10": "3Lv544551p1KcGm2fq7jzU9wt8twUv778TegUQ2oXJhUk4yBBLfpcDySzx6ZtiFs3fT7fqe21XwxhX4zuGZ473Ss",
  "key11": "2CdM45vFTuW2aoMsyLZpT8hzkmVLkw49aJnf7B6r6qp4c99r3fdgtJiy9fRasF6Dr7yRnrwz4knkhuFcjpwJbJiC",
  "key12": "BymFUWrAAFaFjXRZVDVXqXDGiRqULZJfJqYszaKDdirmsWUL8TekPuVVpgWxzJpqAVtkzhovUxJ1pbrp4CDNZrF",
  "key13": "3iYwHMo9Jau1obnwZky7PJPzf3N5hnh2bdx2MXhCMuJwZKwWD6MiEQ8AAG6HxGUKo5DaFk1RZMoixuBi7dhNHkQg",
  "key14": "52p7UhUP59bMenZqEUQAKjLg4WU9jqaw8n98aeGf5PPtvQVCuQ3ztUQPNmhLT3ZsSee5FpgwBugm5ZTnwkuEhLXW",
  "key15": "5zmsqpb5w9Yjcus4W8QKXPfKUus3J5MLCDd6npb5ZAMQTKcdtZBtRKncGMP96EQ9hn9z4xFkjsqg1jZFMsJBFNk4",
  "key16": "3txTFDgtd8XHhxbT6hcUJfZuiEhnxZ6Yd7MmzXXBJXaP2k2Q7CHCkUVEaviNENBiD1zFCYhX99uPGEE91nrhYkzL",
  "key17": "3MNTGi3ijYKb3UVL7eZ1oLELxpdF21YEzia7ewAmG8P6LwZVoWh6Cxf6G4rp1MWk8Ltpy3vSWQYPrQPQ7SS774RU",
  "key18": "ct4dA6nxtgHTispUsSaLcG8PdgKBVYTecD6cHJJitiU7hWnfxSDuxQJAwHN39XXpwaH9qdCzgzyUpjAcxUe5WL1",
  "key19": "2YKyECrGBZUC9npryYmsPQw9rtqQRWBe9Nb7Y8ZugBe5nobkpVBCMuyMZpYERw5yDsaqRPdFroQhzJRHrbaMVnGG",
  "key20": "5BZa7Gsn3dYtruYnsUJ3bmUB4ZL76wrwcvtifxmWamS2K8PuM9TVJdo2zwL2ghKSfvtSMfSjLhaZRgWWtbFdtHJf",
  "key21": "2fQ6vT8R8iFZEDjxsWmhvSPXWK4WH6aajkGTiqcPQWvTeW7H9hQsquYS58EKA2GaLzr53TyhUwJDjow27xSdVaFv",
  "key22": "3F686TGAJPEJKyfpgSDW8bE7sKRysjexNN7hcK89qyeRhQcqJRwC8mn63ZMvNmZbwaGbAJrXJaKVvoXFNmLn3raq",
  "key23": "3FenVoUCgs95H12YxPCAbDC5GH5haZczDAs9Kp7JgVh9tre1g7AANhdKM44Jz4v6yeqvueC4E3q8jGUW6iGhBJUo",
  "key24": "FKk3TBg1M4JeHdAne3APtGHzSkQw5CcwdaRKA8B9AY3pexkfvDPecVVEB3whmBG5ZcrKhpbii4CnxnqSMyhyxgH",
  "key25": "9UkaGpBE6yi4JxrNQQsETXzpnZb6wzWGmQAzT5oYF6u7XNu4sAyWnUZhZt87Mt1D27ah4cWDcGPxsVNv3kHeuTA",
  "key26": "5uW4nbatPDuLkA11746YErpbqcHGnrDBNbdrka19XFQiWgP1cSh3e8MhsbGZs3xaxyBvoD2mfxyX99sJoiRz34mc",
  "key27": "e6yamNKzZnXS5ssnspDBVBn5gxZvqzVe959peFHrG5yuGw4GpyWdAPKqGYyrJ2ftPUpcPe4fwi4RnkSw9Yu8mxc",
  "key28": "9bEMmdstU4MHvMwAgPubvtSXocJeoyA9ssqXbsquoSqvqokmQC5PWLGB63ARj4g8PFN2djWAoQyh4Q2mQgmpfq5",
  "key29": "4cmEQNJB1UKLUuPx6D932kLYaViijggB2djQKWuJfTtyW4jjmDop724KQmbdjaTpLc4oB4nHbFirWN77uZcUn1ZW",
  "key30": "4W4UN8BX31onUewzEvz2bdAovCwW6QPpFiFy4zxdgjiZcnvKF4UrjXRKb7u5D7Vvaaoao7mnLNvgW1Ws7MKZ2c2W",
  "key31": "2wLNKZuuMixXqj8szbuq7yx26kSVcmMZXbkWjVMfUf5nHyDpXsAnbxr7rwrHaHu3gWkZRPsejnaav7vNJziYoV6j",
  "key32": "rNRKqMhmtMq5CLfcdSGmQRDmP39Yi4bYLoRrcc1YNqjWSA6pJRaivFntTk8r87Rj5nrNYCJheDA7yiwKGP6Gu4B",
  "key33": "eKZFqhgJ8mdAGjyhRTrXZag2w6D3RrY2xM51YvY5F7MtPjmMvcciEKkKAq2DWzDgfJz6iCAqxdb2vwLoiRTVhiF",
  "key34": "2ziGSK1yBhmjGgnR3PLwURDjYqTxzA6bFd315dS2V7bZwqi58Ggs8FHDJieLygfKysPTyJgWuWMko5jodBdYoj8P",
  "key35": "3qYAje6CqquE4VZteqezu9UzMuJB2zqUDjDZuRoyLFoxDrPVmKDCR8i9wwtJxudSBMRedWzRVuf3zYFSLwcciRNt",
  "key36": "2LZTqYnK7wUQuXiHpodhsEv5oFS9sQ5bxhh1QjoPQEW51QBhoe7cT9Wz5FD46eT4MTWT6AWhFgBJC5kYWQhVzEJP",
  "key37": "23rhNyJsKcQ8ppgG6X1zWRKJ3QtJNrR48gwi3yWv5tH8RrKbw7pFGJHNKxEAw4NtvyVrg5t1fiUWByYgycYf2mCU",
  "key38": "46AEuHqDU9QXeaEYKQQ92jtqXpZL9uS8Y22s9bjPfhwZjL7xnSxLv2z5x8mtu78G2Kn7Ce4rscqZhBvvN61TJvC9",
  "key39": "5ePmaMHfjqdy7yppwqeyHHAQVGWSC823HNrbZY65xMJw9fL1L3eGGw8TQ5SkHYEZGHes3wWyS3zdDtc5Ctf4iBX3",
  "key40": "61Hs6hf6oWk1rxZ97vrAWzqo9QDduxtBFERFWirmUBbfU1UtJQMiRjGDMptDFxdNQMAmkLuefAhWJiwk4e7EhVXS",
  "key41": "3zTB8iQ9hoLpMgxbqiYckbAipCjiRz6fPCC4XPLdafuNX5TFEuv9JSgVaddUhCdJHo4QzSFZViouFPANgjE5TBmz",
  "key42": "2cthwZnchEhzJQmF5Kf4qHRFKxXRzEkCEkce7ZdCEd36QkXtgFDAic6H3xZtHTemqm8XKtwUYWi2jVUwFUd1aWeW",
  "key43": "3NWWF1AYbGopCuJQtkh2Jzh1ZtdmrBaneU1JtA9oBqPuWuHyUyoqsqDyVdewjgecVUoLn3YRj452TX2D9wwdJ867",
  "key44": "3JFWWuHb9jfdCN8swJiUnfAvV4EBifD6Fw9rZ6Wove2dT99VPpDwJ7EoCVRQh22RV8C7wGBDa3avBPCYP6sry5Lo",
  "key45": "2PrhWBT32wgNxbZshBRhNorvLDru8FTsx238Rd4sP42QtxKm28DgDTWu4BjMAGLD4k4w4qCnL4LuzbCFxicYMaid",
  "key46": "3eTxB72aPuHXyAbARvNyo3KjNXZTG3WR4RXFhETTB86nt1atHVLUMLp3iDR3nZTPdLS9NjhMznTJH4Tuah1m2aTu",
  "key47": "rWZhvd8Ea2vQc7dYbFRQVpY6NqS6uD2peQhdTK4doYqtHRAf5VuwqmrnBvRgGPuEzMTCd26GQxYamRGKZP8nGVi",
  "key48": "3rzJucWM5gjiwdKJMiApGt1ijUUknZMv23Ey16USYWpEA9dtiZK2nAy56CAKKYYc9ry3ymFhYSVZPyHoMyWf6mKZ",
  "key49": "4LPLwCsqzUW8kMpUYEfacbSUuoit3VoiCdt6ZfNCbKd4VBHPzZYP4mC1ghooLR6PY96KfBe8DeG6rwSfKoabWLoD"
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
