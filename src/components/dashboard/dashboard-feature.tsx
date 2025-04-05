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
    "3JkCdxg9utkFz88gyR9PASwDBapHGJ8GKLDNoCJfUmSeuBFTLvEM7gCR7jkxj4nby565vC7yNsJoBygNeYRkVzMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAXW6dry8Qudtf7bnQXRpHAxAGqqMU4xdcHU9YfsHiVZvCnjyCgYPLwKr9uJjZNCvbuCzQWDitHoS3tFJnhJPEA",
  "key1": "3vNtvnfwjF6D6geHgMgqaXjYCRqyC1esYRp8n5AaPJadzsoN5NwrwyHjFcS8opiJyPk5iM6oNKWqoq81AkcX4YRV",
  "key2": "zdxXniHcx4yonQTpo8xfse9LT2fNKCY5dBGeTVM1hKEsvETMw7a4e9F6QVgzW1i1vXKw29q6FFnLTgJ68vnBE9f",
  "key3": "3paifGR3dvEavHnx5WBzmqCXY7D2PhT6aoMbYA3QiDqH6WSrhg3CCdj1B7dcrq1QBEUSoHibosrfsZADNocxsEm2",
  "key4": "5YW6iznfn5NSctJX1Ci5wKtNSmPpZhuURqDSR9gbTM6qaKUgNW5AUdpLeT5yDTh8fCjXsLvbVKAKpRGhp64VJWQp",
  "key5": "5peZqN64GBQ68sMMzRaKiztRmfJy4upJPnAX7SXjsG8gEPd2MitEK93HyuvXM5JZyv8LJMUfBB6a4KTSAJrS24Ez",
  "key6": "57CFNuekSDFvk2icaqtRhckVPe1cbnshyyDk9JG1fSHBuB9SD1H2vWBvTfn6qXLq6Q8Q4WQEEfQaht2hvSQgZYHf",
  "key7": "4mdwHrFgL9y68Ci7zMhJK8xuFEnUWQDVAV2MVuEDgKQFTi4v7ngmVmEyp6bAubRjCkQemtfL8LLV9HRzTWMBjKbD",
  "key8": "2jqpsqPMWo5xGNHepS9BQyZTN16TLt8YJoUDnos5ggYTYafYxtbXpnuiFT42GeEUBKw7pmUUtza28MU27TdPvzyE",
  "key9": "3XjwyNHPLwnwASacWshnESbNprZduNA4XsoDuJvjNYxUZ986ocVHz9sZWEtaVfig4VtnaCp7P42Rg3vsj4hHx4wD",
  "key10": "5zuaUzYFMtaPKUQp1N8u5r8JWTzRjWosdgPfNyVrVZHbRpT4sTd4hrcRXqZVNcgQo76HS3sjMHsZqFpBvtSL5qKT",
  "key11": "4apHyzzxXnzzDUa3NeXrUG1ztnNCuMHiQEELsJMS7xcUa3VBgZrQPKr1tsWetaTJ5Hr3qS4Q2f9uXGvE7Medo6NL",
  "key12": "4WHmRPiQ1yV7QnTJfA8tFPnqn5CrVGDz7dbXxYKxgC8Q8xonGkmK7bkASrX6oDsVasU1kcykcuYryRz7N6AmVdRo",
  "key13": "4pDTKVDpdH2F9uq9NkZuEGVbZWxCNN4tw76HRWP9c7Ma9TUWca4MUcZF8yMaLVSfu6mNg8EyqsqwaeUvkaVkEFjb",
  "key14": "3q4KvguJV5noEtGtfumjtzEXY14ocKcgUo5movAPAmHJbcuMgDDhyqQWZbXV3UTsA4f4hjWWHANuNDZkq9iKdpmh",
  "key15": "4rBDZx2MSUAJr2a8tzm4hCGeEvkTjjF2HX1ojbvp6575rQZKXm87CtrNtf4ZrKYiZchYfA3ritG6DPDNaTGmXZAW",
  "key16": "sRuscd3nCutgnZmgdrAwKWFtwm3ZRaitdBWQXDQiaYr8aaPjQ85sQqgrmgFTQuLMYNx3Z9HTegsCxhTpm9Vq3hU",
  "key17": "4Rz2p7Dw4ZMTFNLsUzxGrYfBxHCJPLZwm6W8jqm1TTW8NiomddtwDLtiJUQRG5xPFVr7cRDrt3q9MJT5E9deiCVZ",
  "key18": "22aTxYX94XJGmsiSpcoM2TWGV8QiUPzczy3FmkFM17gY3Gkhz3gj3wM9FTNg4hEPjNnmA9QeUE4acqNxWrSC2BgH",
  "key19": "3689C8tN4QaaJh35YEEwuTZWjqdeoWANuzM8wwbG2o4pSqy8aUBec7gkhKWj69e14HKZ8NVXNMJ27sakNFL1QRio",
  "key20": "2MPKvLdFCcirWPG6F46XuXSLJR1mkuP12UnRubFLByKaWNRjrcCECE4VzZ4TW7m318DdmCoNZFY9BNE6LJVoguu1",
  "key21": "2GkyDX45n7VnzasGMNdZcFA6EgFnLqve81LyTwheCpLNP7UDMJJEDyPS6g7MvhSukZVsxxoeYPHenvdZDAya8bxN",
  "key22": "5SyEgLYnnhHjEHPBHSbDmdxB7hZ25cMee1JH5s2RM14BY9xacRnVJCY9NRYT7q6j2hSFCM9c2MKTHPQqxmsajaDn",
  "key23": "46U5jwweMczKDBcq2bXvh5a6FAHsgKhCYwLr4Md8Sum33pFuoo1JjsyH3Er1w4L6gbMAgsBkoKcBLk5NggTTSiMa",
  "key24": "2cYCSRdCYGtbnxDoiP7HrVVuUFobMnw8t9b4ZennhxAYKtB4yKRecjaHvZv2Y1XGaZ3y88mjtTdU46mRBDzSPTj8",
  "key25": "4uyaW6tWvW62eQWz84NPGuyDPpS1bWfQ4RDGZSTKr2V8j61kiWqhHfqbgcCV6co62L7pVQZmNoi71kkogKrqKWAa",
  "key26": "33APvMdcTXSxoaBYz966hb3o9j5QYodNCWbjafLnWGMymm8ztGauuCiaPU69WCW9sP6xvuTpfYcoCKjjagwmCcqw",
  "key27": "3StrVELhTLGE9trqzbxUFBw9Cgr7bkppK2LRwLqhHp5s2gc9eVBSeuCsEZMerSNJXdnNXZqxh5Hxix2K2rJb8GEn",
  "key28": "2s761ppkwYhcV8qpZsdfs6fgihpp3HTKBaTtcaM1o51QRHCLzc7M8hBg1JkVA9QYqQ8PDtxTmw3JFMKXaWpnJ4Ui",
  "key29": "3JeUSdouDT8vJ6uh7JSbpU7E3EopqSKrZTC3tagq3fcEKXVhFr3EXjUUB9JScmjJ34PUwe7U2am4cDt7Y3FJRcZs",
  "key30": "493n2jTHMGnjG9Gpr3BR2Rd2nzf2HM22uQ4R2odh8UufhBDxxokyBf9ULmZMcsxWNgJxny64FpZw2X5yQc6AMLsN",
  "key31": "2zEgyHwrPoqd51GYUbKRfBz71YHJ3BuekVZxxFddrCxPF8X1C8q327XGVqCE2yU3yiCyQHKchQ68bQEGiNLN3xWU",
  "key32": "63D1j8wvwoR11UuEBn8aGTt5mPW31N6RDeKfwqxMNQpPR7ua5j1HzQVxbE7jKYh8z6F3uRR6U4BLsyMjHcD7mAVf",
  "key33": "3E8dE1bHRycQTj8zi4EF9neZQ6ntmomveqcCpbMQDwf6xzvpvmHdZD2rWLnSAZ7FR4nsof9pysLYGmD7L4aSBP2s",
  "key34": "3yiRhPusgRTVZhFtYqXtwNg2XsVbhNk1uzL7txakpBy4Lo7tbW7AgZrGux7puYYHe1F8uJ2a34ywoQ2rYQATHn3A",
  "key35": "2JTFsq2Qhnhn2NeUze7eZqRfcExg84TmTiYSsNZeAibAXd5kNPbsZecKN1Y2sxxmEpDAPVRg1S7hyfPJ9KpRxq6Z",
  "key36": "38ifmqyFmBL1FfBZ3yx7DKvrJDTxUc9RVUDuhNZhdQ3CEZr1TePC8JC2B3z9fo2fq5PSjUfW8wUsfEcNBJdkRW2A",
  "key37": "225hZ1ucZ4Bekwb9bNNDs9x2cKtPZH4c8PVrzgDQw26BJEGpE7G4EfXVH2UbpDuCPeyA1qHJnPvLmHzYE38JMLbX",
  "key38": "2dbB2REZN3r8mE2ptHtPtywvgagqczgk4gLPXgiKPJJRQan9BQ4rFF1d8vVikKSLy1wSyDuERpsxto3xYMcBiVF2",
  "key39": "2hZCJrahvnVYoCj7hMH6reYmMAZZBbyxZWEoqSDJb5i3wDKfKZmRr3CcvCKfvnrsVDMwzZGpgjtLeKh7TgSinStE",
  "key40": "VxYsZssG1naP9RpS6Kpe42vxnzKFJq7Qv8ntU7UxJ4djCJErahpcJoFaGq8NV61Z6JAqG3znyEi2wj8s4Ku8V6V",
  "key41": "4wjTgNJuPeVU4ej3iFnUgrN9ZJ7RHFyX8tWimY4gNonZnhkcAELcK1QfqJZ4ExgYF2uDZCboXR7yziPRjo7hzyg6"
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
