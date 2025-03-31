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
    "2gw6MYDatMB7uTrGvoVkLGpQgjigSSVjcv9YXNB5e2xuGUsQvrmsWbaUD5ie67av7qhdkA2GDSDw7QjtzqU8rq1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZ5MdTsuCvsLJAL8uDfbttGgJRVoDwQPKQNdkf9BZWVLEKaiZBtC5DYJMQZB7XCyk6NaLheYkrbXtfe5pBjfgmd",
  "key1": "3CUr6acS9PGLe1FHDha59zFdQhvNfUeYyvHyM4PS8iVHd56Q8kVWwS2dpmtEoAfA6WcpRhJ3B43jK4hgfv1gbmGg",
  "key2": "5yFUWtq8yBvo9RYjxmxvFh7Xret9tga1MtsiKZLdfC8oV2mqKHqfNKYXEMjSMnRs4NZFeRDRggqUuf5avEgFdrr2",
  "key3": "53xWsAH7SQdfVqaeMUGVPUnQ95m2hw9VdiVsrpJBDGrGkPi2r8Us3ocThuqNRpNUin3qnfrNq9xYFUVvWahMKjZN",
  "key4": "3LLDMbJ77vLpekFMmVLBkQY9Di7fjSnJzqqGQ4d1KFzxRpibsrEaVmotp56oxpNhsxw2xUuFZTBb9B4ymXzcG8gq",
  "key5": "2YXSBET1CX6cXjuFNyBsCKkKSyWZrjSuLCcKo5eS6HxwwNi4AdEUEYTV2yYMyYxXA1MC74NkW3GS4FEP3QiP7BAq",
  "key6": "4B4CMATYGTPqdWvgCoLLzS3w56FQmgvrT6YhnyykbdZgpA4auiajQ2iHX1Q9E93EJmRUUyZNSCvYCcP2YEnAWKx2",
  "key7": "2AbNe2cxy91WpVvPpFSRmsdFowA2UamA4CC839m7wbLhbKpn6AE9YLkuLz5UAfJ9jTW337G33cfBqGfzrQtk9u9i",
  "key8": "3Dis4mKS32UUfQUvNdeKxx7rqxzsyHTypAvWDDp3CsZeknxpeJap9efxAo9nraESJQ1oudyrWoSoeA3g6FsnJQti",
  "key9": "3s1UY11VE8YLNpVmSASfLD8QCoeBH7zVYTDkLWrgccm7H7trAmJZu3CAgiUJatzxyBrw7oWpqAWNBLx12yVAefjY",
  "key10": "diDAU96o1EBy6YF5rS1wqTgEC5MQMJxL4LifGEFBg5eyKVFDjBLnTeJsNDLhaJbjBDiFEH8nrssjokrK45KQBqy",
  "key11": "R4DCHub9dAGWD8Mik9sxAKCYjN5dkhSHakChSzRjvxmyxop18tgJre2TxrFfKCLSw17t2NaQhMe7cAB2AftPdue",
  "key12": "rrSeTkxn5oZjUJfhw96Fd3JFn4kJLhr5i8PMRYU5a6v8FUpyUKCbfDJgqMUCfL6us7Tb23iaB5hiYgjJZDTnUK2",
  "key13": "3CqeBkL6FrvbbSeWJHJodY9reko8cxiGoDReeZzCJao65P1fcS8uwWwgqPSDEdBJUoNTBy4R3PLYnwCoiFAhfghA",
  "key14": "3yvbpYJTnzm9AfxzFn5XxbsGbjQaZJK6W3b16EqKZGcn6e13h7t8a6pyLaoNJLT8dAB9DhKE2w2pjqqLvmfK5yLJ",
  "key15": "5MtTcs1xasVp7g582UM9Sqs6JansDjPB8qJLaNHhQjMLgZpA2Qow5iLjBmknx5859f7PeDtxo9EGAE3VAL9otHQg",
  "key16": "3WmSchWoxfBZkQUMDgo5b2GU3u9HBr8jikESRZ3qU9nfnUC5PB94cnPmPDvESRQRqTR7vbvwUkL31JQS4N3yfxBc",
  "key17": "2nZo4F7fyeEXPxD2ApZ7sCiGT5JJrpKBjBnVWGW4yFTssdbKDZ4tcDibBeGWQucJPHxuMjgmSufnvNukQgmNCGjR",
  "key18": "5n3XWxJLEqbmdaQATpFo9ENiB88qh1qJXX6Ee86M4ZxxuMQ56CChEkciYZH93ENAikNADE8w4U53B96k8EgRyEjV",
  "key19": "aDCyo9S7vZC2HCpGauoMscn39Q7g9zmUC1de1WyV1rEdWcgCLR67PaaiFv9XqD6YwhHYLGmHMkhGPeGJ7ML5xin",
  "key20": "Jd9UsF2ZRWiBJmSqwMphcaQjugWFBFADC7YhffqYYDeiooMfVQSVtdHMAwaRQ8DrwiDAgz2GhS9Ao7KHJEUB7ta",
  "key21": "5CTHMwjP4Qz2rPvHKFypBERxBvTt2fimw8b2DVod1oFQbNJpASmBrTzCkbnE7QnsG6CZSe1UptzuDcKq5JYwiwo6",
  "key22": "Poxt2AJnKz2ssZFf1TDhrwY7cPYKAUMEesy8sWVbjEVhcamD2eDweDrC7r8dkLpbzrQWcAsgBT94QfvrU1xFrje",
  "key23": "4gwMUEFhM2NfBgPyyo3wg6qR8wffSXvFATG54TbYErsVipvTmYVPaWUg9nvtp4jkGL8xNxRDM7S5AMHuFbZkzYoS",
  "key24": "MJ5UEgF1DusTZmhNhy45fAj3XrfYSuk3Z6SjjiiiUXwY4LYVqQbnFctRFHeuwGbWMNqKixkCz8ZzWwnxaazHdbx",
  "key25": "59NASBwfPkjr1regGje5NFtcjtEwVKYGQRMDkJ4ymiPwxEC3aV7DKDpk2Hk51Z66NDbnW3dr32CfKFA2qcF3ZSDb",
  "key26": "4GNZ5A5gK12MpU7eACFhZtMWK3mWekoyGFxQR3RD2qvJKCh1WLGfeGBzCYCJkV5SxSvPzj2ZQaJfQ6mrRffrhhfV",
  "key27": "4Vf9hTg72DmGX7tH2X6rns574hUpFCJB3Sf6Hvp14Mmihf2qB7E6RB6dC6o3PvSxuWLJ3WJgYoPKrPdGSyA5tnZD",
  "key28": "4J1GYmxppZXtoyPBVx5DGSiHSPCLCZVxrEbqJbBbw6F2V6BqK7n1mGXPMvFvqRSMePePTNuPAkozwvFPQvPkNSk4",
  "key29": "3aBdFPTcR236AaQVngVrzVS1PUWLm4rmxt7aB47WhrYZjZ5LmZ1cFztht69cUkZtNZFudZ7ViN5w4bB36mTcyEat",
  "key30": "3sCBznP5FHkFkyU9zTTbdnrcRrtY9Jf5cUqZiyNFN4YXg4uRC96xJce9KZQUgrrR7cdjndw4Ftmv9uZQk3GcumtP",
  "key31": "tk6eoSiDukwZ8s286U1GZaVzRPs77YTj6zpvvknceH6Tan7JPn7zMRPzE9QfxnWgpZvAujxRnYHpQeBeUgSj7Hk",
  "key32": "5S6W3YNjRtj3AQKR2TJA7cCGf497oCZVuVFxXJtN1RBFRp46XoSWFLoMc7fMxTrTaJuSNogC1QZZRLCwKx8ANbPw",
  "key33": "3uJzkpK3oVrYNHhhBKZTzKpym2e35WMtA9WtDU8KWbnK12h5NLjBx3sQ3AohyoTPLZXi2br8tAzxNfRBnSCDQjNe",
  "key34": "5f6SEaHguiqBFcSH4p4G2asZfbBxx38CX9ZSiQ9gFxQyzVnXmVEA4EaCphzTX8x7trLUNsbG95yYTLZY5och94x4",
  "key35": "4HbfCAS3fq1ZFmukcmwYGzoKUxsezUHJetbwPNUW1vP9dvLDkMGt5Ctbojc2cRR2jgwC2gMcate3E1RnxCYYYroX",
  "key36": "R9ndkkNSwLNNJNMmh1pVJ67bDTiAoVAjBKEejj9zHudLNGc7PAhDM1dpfpLVesdWZun22XDBqchBN5p1fx6pPpT",
  "key37": "56c3y4tJdtvaPpqNJoK6D9d7nAWHMkUqS4hE9xaF8MFiaguYmEest6UTUQh9ojCqLj688Pre9fWxE5K46Zend7Sn",
  "key38": "CiqKkeeurR2bNiUpD8WVSFavasaVdXWTU5ECifXgd6LWt9sKGa5aPHFEeo4F7bqqMekUSmE1Qa7TUsVfsi8AfJG",
  "key39": "2PeTcXZgqUs3brzSkX3MzYM24gn5nZ1mUtcQ7AUAwEADpzYigDPDXjCui4LoAHc7oF6kM3Hor1xtGz7iVBJVtmbz",
  "key40": "4tY9cJT8hJ755fU2qz9m3GkMa5n9tQYC2SEJS9cfkSAfo3ejq3GRfDpAfrJGK55j6YyNqs1oRMP1UD3zAzdXYhLY",
  "key41": "4jaK9yJ5YgcVrbLyNqtuJtDYHwXxGLP4RkrXmS1fh4ZwETacf4bgeA1vcTyXXkSx9cdcpZhfY42DodnmiwvB4sk7",
  "key42": "2yoqduxb4n2f5zuWbi6sc5ixgPNoZDyDqzwtXdmb3yMo54htuxoPUSgf1WSsGSoLLjLbuqUANFFkzUf51Hhss98a",
  "key43": "2gLNbVYeF1ovg1AikzH7Saf1Cb8dyk2ADFtQzQquKs3f7Czom5cFErwrLi2f6oh5bfKFjw5sJdx5XhLeJ7ehvQzX",
  "key44": "288t9q9r3TRbvfrtyzVWwvnFhAm8Jgp8Cs9PGHez59i31aNqD7MB5dnuXGcPa3vcUAeNwjvtAC92EFfnm1jwb1bD",
  "key45": "4RLcqtbubBqCkrxLRQtfR7EfkZ9M4SgJDyrJwsrgaJCmqNdUSqvA6MgLxYzMNY44GSzP3dc1ULyniN47j4QANUZS",
  "key46": "36rvMXp91NUUkZva6CAtNvub1YuCYATNqdCxRt2UxAengWmLLWVX3wjTVG75jqNri6Bmv6hCwNHmeeKuHhovD3RM"
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
