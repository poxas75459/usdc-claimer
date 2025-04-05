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
    "xxN1cdz3eibpsAyLLRc3BZ1oKGy7kr4sKiV2zz7o6HMhw7ipc9Mu66JS1o6HFxKmNsZwyT4VoCh2CK1pRntFcaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34beosHXXX8HKNqMozShDSk7WirSmSKudPm6jBGdy2pCuVbFK4zXoYFCmQ28h5nQzdJBGW5aUoqyW5S5jyvhGYQ8",
  "key1": "67bLjkYEovoiGVZKmm4xMEPUZQ115J1zABTMsWvfE5hqGKR6pWLRQo7nGLZ1z6Fer8d3YEbkYbZzEnC1zUBLyRvu",
  "key2": "josrJRa3t17dQPomftWHWFcAFFzp42t1vsTaZeF32LiL7TZ3JXRPZkQvDrqKsS7A493kcNANTu7JQZh1CheHKtP",
  "key3": "5FqKKnPkmpJ4TsDUDn93sAQX8ewKbnRWXSLftd3eoCGk8uVqyxt3aAn27B7s2NJwQ2eZax8BGUfwkiomFRLLzsiQ",
  "key4": "2ARTpPkVNvepgq5xU2b3mdpNH8eNiTA9VxhrCBRtgXTdGzCmkSLKfBPT1fButcMAkqFV3BqWUUrubSbSMevu6N1Y",
  "key5": "5EGYBY2L8W1i9cnP77nLBG6yoDGJb4DYopojmrnjX2bXuxVxUHpHt4apRB168SsVmdFjrEPtMrT5qNFd4dBGfZvT",
  "key6": "5d2KXuiFjXTB9993QAQCrXZyj4NZ4aHYSVS56E5zzGydQuFtQhbf9z8M2UShbmz3kt6T4yHmC2TQKYQWULryz9YV",
  "key7": "3aKgFfiCsC8zxxCJVFP6Fs9Vw3AwKKkxhxGDsaqzh4napbv4qhxqEh5oswELkucbLwaie3kkfSHzGCsQDcExqVSu",
  "key8": "5rMBupungqFyrih1AKeko5FZNHDpqVgE7wMMH1GWNXm79Pe363sgZvTa26ByARcaSdTPnDMZ5kVZJ3bUY9hmfGa3",
  "key9": "4C6YLMLSbnoYw5LgLT4DsDYrEpW1TGHzhX5H7n9d43e6ifbAVzj3VviJxK8KUYurCojNiZQ1fNwuAmgChyDUCmS5",
  "key10": "4c7iM4wt4kKf8TCoTMFVNe9Z24UzeLP2RZbiorg3fyCbdUWjrRVRfkMgiktW9qF2G31jsLCFAKhwtoeDgp5ubNdM",
  "key11": "2vrzHeizoYo2L9KckrhZsjHuZzkUKgkRjwyE1tRYXVxiajzv7DHKnypDwAK7VfeUiMe1ecBmY3QpC69NoZLqsdZM",
  "key12": "5K4yRHMJmH1CcDvqE9vMiS4csxYZQoSh3ZBHycsvsHximKBrF2azm35JBh1CBsd5ov7Pc2Wk2zFgzed79pjrKrt",
  "key13": "2FGLBRpzj4U7bWSCpE3qZXTkQGgkNzg2DxZAa5XfNG85wwbAYYdNM84Y9dv3iDnB9DU41iMxjBCabiFq9WFUriWx",
  "key14": "4vsoqj961WW36T7VfJyZFzDJCVib5pB3Uxe953Zm3Y1fajHCFStBrcpFgxCP9C9w6hEDqXCJenMNXQs1PsoPSsqc",
  "key15": "cfxMUDyTU4t279mGW9Vh3rMvo9fjKpmWfMrhRA3AkRUt9kgjBjbqN6kTHGGKzSKrWJH4EorWGCZXitjKpFcEXN7",
  "key16": "5zZPYn9mT8z78NqXe5xPmVKN3LEonxsv9toZsF5NVj2LvwGwQuJ6hTpCk8AMj6qcMCYCYcx84nH1ZLtRhTjtvfon",
  "key17": "Pxc5FSrtCAyz4DCnhgcaDi2jGjPhrcP2kCDXicpTt9aTUmDqLfcaCx5rmk5dSS3bESxrEL9X98rzErJRLLxAYUX",
  "key18": "62KCZePPVtq8p7VuWjHBPWFTzYfHc4K6T5XQFJvfpx9QuZca6UXXUyTbWnse7eR9ZkxWc9XqQpmP1LRQGp1njEmq",
  "key19": "55t5nKtUBPLKD83ZQMhKUcRN1uRSve2K4eEepw1sP6y5f46j7Ujtyo1gMzu4bRd8HrkMG8X3HSmcLfVV1fbMSkaR",
  "key20": "4kRdv7xuKUyhJRY81rMMLncSqHmfUR3voHcBqaebXmouKQ2mHWzevJvAoySx9BQo9WEcuPxq38HcqcokjfVUbPu9",
  "key21": "3hsL1ec1ZeXrqFyri5Naj7SiRnB2LKnBDSmDUypwzL2qSioCr3f9o2hSWLRqpRedsfWbVvaYCTGp7mT9oB2dJrMN",
  "key22": "5fJUQ5of3Z8sr4sYWkALvgZN1E5Yh8XM7qhMue2xjVSGi1xuMTs8UpSySdVnpojQmLdLmSLGjM17B9WYin1Jz7nH",
  "key23": "2pwc3E8FR4oGUBNhWkpKJCRx27XH5R5n3MmsptwytWVeqapKYypw2oE5P7SoKjKXd6RZ81GinY2rUR23uNZcHY6A",
  "key24": "3PQZxY6iPmWh7mtRzJ7QtEPEfeAjVNA4sPUbvKoXB1UCE6QanoBGS2ascJDJ13EXBdAomDmtvezsZ4hhmLNLCdyQ",
  "key25": "2FkNZDHUeYbh1EADjZLeaWvaRbV3A5vmrb8roWR42nXthaQPn9VLPfiQxPmZ4qvH3d4s7wgU7MS46quRxTVosxjE",
  "key26": "2YCan37Dy7V5JsjQNQCJoBtzC1EKc3DDLCdrD8a3WS5YJR3idzBnNiMBQymE8kPDXgAaZb7rfE48a7pwQLdYcatS",
  "key27": "YfP7usYnb3fJfJ4JvoZZW3Lz4k5epKzuwULPHM9FomFLnqhkJTFQHEqihVGrqUqxv2J5xMJbWMU4KdsgCJpvQUK",
  "key28": "2Mxn7neK9zaT8HaNHwEv8T534ragiQU7Ft3GTDCpVVXWdvvx3q8CyGpd6CN2cH2rnsRhyeVgMBpAS1qwW7MRnvnB",
  "key29": "4HqvbBs66j9VFbag6sozSc5bbVH4CU59RZ3MGdmdQkXBjuVUt9Rq8UT86TY5U3XUz6h8vbqxNnjFNssj8huyxESA",
  "key30": "5uA2KCSPPwGsxF8LDNEeLLhPjYqaUC5h1EWiW95eS7m35ZiKAPrs4XQUwsvaojAMLKxPSdGLfmcQvgb7DsNMewoc",
  "key31": "56wKWSMupkPTnXNJVJD8v76vu79vFRxLLbJGDgF1spsf7cGymfDXQrgA34HyXKoMAbTL3uDEeEd6kZBprZrVUQ3f",
  "key32": "5zfHKagYgoKCpy1nqrjJoEmpqEuP2Ca1u8RBV4oZjBMB1W4jk4QZxVpU69hPHwNPntA1Yj4Hy4m9eoiqDCFsEWP9",
  "key33": "2kD1HgkCucFBQ4VR92Yc1wzqH5AygrXFdWCh9tNpTc2EXULzRFeHmmPuxRZjrdBFoQXzrCSNv6PLfqmVBMrgfj7r",
  "key34": "3i6kEP9GA8wXTxxCaFG6mPAYXXqiYLtvytd77eNaCeRLykwkQudPQir5xPpVhEub2jZVFBjcQDveSMNxHs4YxmTw",
  "key35": "5p2S1Lt1A9B5Ur3nvJmi14E2uBWCrJ8TvKsXHVekgeYue7wLPpSMZ17rF4yNh3758fhpKeo5tGD9bSWAiZAMiN2Z",
  "key36": "37vMdzwhmzbhtZAyGn1RzFM54VLbcaNTDUTkxJyVXpNp4fuxRyBJm5SmaY9dxSB4ghGqzHBXt8wA21iUEZbYK6TF",
  "key37": "Yri1ztknk46LmRQaGnc5WiwX4ZayiKVvZfuWa1X5qcSh7SFtABoryuRJMJS6qVJ5ZMmbYkMAd4ActHqefNuYRAD",
  "key38": "2yM7vXx2HFwohD28xEUZwk6vLJGp5K89T2jJTmSPQGmTzmhovHj4hjZviSLATWXAz6CSXNvgyXvtzaPNBix7ZA4r",
  "key39": "4F1EgUWcqSSZEV6Kooq2xk54MBd5zK5yVmWAVRFrMCYezMjMbWxAs8j2nv8AcBspyGs48nUQQhuetuUhu2ArmEZH",
  "key40": "5SxG6AGTi5rEgStbV9G4Ds5PoGZHjvNFmxEBJqCgnFAXrmiUDRYEfmLiHBtntYxZ1LxCXozB7FsQEVqkMZ2hzFoS",
  "key41": "ACoy1N812wv4nKJCEqSPsELtZYwuUmgaXkyE7C74QqSpK8gJGSM9dP2KCbzd26wyNemRSdJRWNq49fYRWvHou6n",
  "key42": "4WgMqe6ZDjLcdHtBEFEHsoYQ1HfM16GqpvGKtpcmfQYF4pde6rYEASsTCZsnavt9hn4p5sT3yqtR2eFCoeSuN67W",
  "key43": "Kg9CwQK9igfn9aQe6RWFtzSP529tGA5BMm51qByDah4k7ixgckgVJxKBFyaJicmjMVGQuRzc7khfuDtVRZAyvgn",
  "key44": "4oHRnzVeWJNYeE73JWJFnU3pYyJaPpoSNmzbGp3bVD7M6q69ucaJuRbbci9AcC8QdvrcNvS5HrQkxqwokt1cXGNY",
  "key45": "47JLhkGtN6EtnnkkdFCY96k79ap8LP8zr6hS2ihZTpdPabdV39F7PyADsySFgoCz2eHGgtFr5BiEcTPoSEKrqRtn"
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
