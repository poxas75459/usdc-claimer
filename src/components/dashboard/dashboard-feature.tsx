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
    "2hxYqqHQz1S8tZWn4qxtSUhsJ7h7n2GsvJEy2jrJnUGYGW2oZEAnaEU4NzFQkW8ahKWvEFQGqYxgkTEHayZ6cQ3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ZUZEykSczhzF6BDUfxYz2y8bMsZAhhS1pkCgU2ZnxisfgnyE1yvtEqDnqs9hM4HdHsTauq16YKuxaRkH8GaJvp",
  "key1": "3y2MA8Cu548XWtFMMxZkLgqmyuMvWV5mNNoKsKF5tKKtSRMADxgbtWxaj6G9HKLqkKgbJQZqurgd2a4wKt4Zuo9G",
  "key2": "5akUfTah92o9VoKSFYgkGjcwuQ87Min737ewzLE4yWHavX5utA2iumWnQqtRCpWPyqz62XBKSmMCXLuVhz7CYSQt",
  "key3": "5FpjYNuJmsEnSz5K5Tt2wr9zkZ6jXpDrnc4SmtyBBB67cpkd31tM7sgXqeMX37drvmvr8VRc8eg4j9PREMdWuZfC",
  "key4": "4vHxTprHVDwsoK7LnsvTqBHT6dUv5xxy8Z2CkcA1Eykks6sdxtodgwPipf2NBEfnE1RtnZ45RsD36tYRqvSN7uRY",
  "key5": "4oac4osNCyCXMz2HamCH9ppLhLwpTngEp48HnY6Lgp7iSMGA4CAbCwSdYgR5PCtnALNhnUuvNFwzZRGguELHNBdo",
  "key6": "53GdAXGoLvdpxmsQYtzYghhE2pKrRiDkwZJFrDC94WQ1DwPBLxF2bmjSLcB4M272eWnZKbjbERaFswKjonNRwZSr",
  "key7": "4tPVk7dA18V7pJsPjhBHU3FMNTYYzjScL5UEgTzvRv9vyp3qewVTBXi53HUfh8dEKsaGX6vxg36D1LtMVZncCqf1",
  "key8": "4oZV6EGh6LAVz6oHKfwN7adHUacuLEcaZ4rh2TJNTc1BiznTdRWsnfQszH82W4XmZhgQ178TSVfSZbAtm2EUrkKY",
  "key9": "ut6eeexmPQj4KvY57oH5nVNJWyQi1FW4rDSjvuLr2Nf89VLkM9FMLsiFzdDMat2Jy5XzDeZNrH3gntUgQDn5YDR",
  "key10": "kH1RscY5sgQj4CuNFx6fHQLqLn7Q7LNZmDo7XvoXMv4fLFX4UaFHz8dXiN7G4iUVvt6rgk2L643E94xLQmsB4XG",
  "key11": "4NNnNzYYkChR5MHDACnG6T3jupsx7W1aWE9jR5FLsZBGyLmXViRfayfdbSbzEVy4S7GjWhqTFeyoUp2ZCZbxFu77",
  "key12": "2x9TPjhN3JH3D9jGysXNdLXd1atN9tUDfJEfXycGacj86VfaSx3DcKMsLMgobEwAZZRDfNGmCcSwfopA7PaL5vNo",
  "key13": "4A4TDL1kNbV8qybx5nsEgdp9UsM82y3XdyJT7j3BvitFHx9DZjAQGxpDZ35ckBgKW7oJc8fDD5abdNZzYtVxVZ36",
  "key14": "egWZiLhrW58gxEP3HBH7cTujRfmAmHDAvPdDTMP2tSnJmgfzgKvvNFH1wMgahvecMVRANPuaCixDJtUzYNGS2m6",
  "key15": "61tTWZMTmYf6rzXgrU8zsjtUXNN9Bve76r4kxGH91ENguspwaEW9VDSfNTtuWeBXkg3zmVLn9ynNqUgzvFkkC9fh",
  "key16": "3RhaMQeE97ns4qrviotQciLUT7uGrPdbowCCTWsRcwzkwqsTmgJLPs2hWawG8yCvh5zfGqEFWkCPEG29nPyvoQux",
  "key17": "pK1uvdWg6HAhga14ZMjehGdGyT4m5pc8a9V1dtHyk3CZ2teF57nDydu7jVBoCEwBBbSkWUC8ip1NyrYc1SR5HC1",
  "key18": "4tGfsFLMVooyTHNCcSxhHktnT9jNkM1bWpU53t3Jpz94GUPw9ppAFyTnvhNhWnZDes9SY2RA9AtVfH9eiwV2Nifq",
  "key19": "3eNMh1mVHqJwrnQ36SYQAA1TDSBdPf1Xu5KBxbKGtWAiHUjhKZWXbWfoWYednVdnJas8PZFSw1wJwB8A5cGk2YWZ",
  "key20": "5Tfh5eXAUtQCiKmtD5LGHGch5ZiopXB8QhUcTL2tBwHwkEzD89eEn3CopJFzBoAUce7ygCmNofSQASH3FYeQ3Eku",
  "key21": "2iV5AdLem1F6voRYnABykZUr9eXv1sRjAxdgVFaemDHfX6WYsvj62QeZiML673WtbwkCW9HC3cy8J6Yv2SuqanVv",
  "key22": "3PnkA4FN7iqYtuoY3kGNniWrcBzygRrxV5RZSrag1HqFLnAb9omL7cdzGbxB4BT58hyJWhXxtGJKw8Fnbo6JWHoL",
  "key23": "2kfrsaEohNBczpX6gU7xS6LPmkxn6fyxdW5ryYTy79TQt9vEyrmA7MP119KwLoQzuReEFcGEBqzVSM3t7e345LRb",
  "key24": "5n2LhDU61RcKP4w7hmS5V1a4Fwwu5pBgEfa2cX4C3j2gykxd2t9DpJ1pzWBReep5uv8nGmQJy7A7pgG3B7EJivcJ",
  "key25": "2BorYVcF7Y8AUjQdaWYudvaYFykZeA7LtgJvtD94tuprDqcZhbTM1vvLYL1gSxXC473avrEu5ofsT9LzV6He2hQS",
  "key26": "3cz19i1AEErDvT1Z23VfNCwucAtCrzKS7GS7SAbzCEthXdxyWo7QNNXH5cceNmit3CrNtUeTBTv2P8URngD5x2iE",
  "key27": "59Vc4Cvxvx2iZJXb6e7xzJUhnzmo2LwxgQfNH5Pc1LCGA43kw9oJcfFFRNpMMaxQyzbRNtCWsBjq544nezTBhVi3",
  "key28": "2UrC8wf7pyNeA8qzwqJxQgPuRSS522yc9rUR5nzNVWGqPDnXBzhyjNTMt3SUDhya9LU4xFc5cVUxjkdvncmZz4dL",
  "key29": "Jmikvhrvb7VER9B8NuZESZjcQUWpRymNA5ZJabJTkjRZYE7SC426ry578hoPHXakrfF6iQVbm5MP3HSwWgqW65o",
  "key30": "GURSvCARGcwdMuHM1j1nHhMZoQ7gb2gNfdsdDtGkpLM6HjRV1YnoWKjrLp5sirTMyhhdR3vXVJHYGGJqvGevk55",
  "key31": "2WmoY9v6r25FN5dRsJxkkPRHKqMZXL4NrfZnrQ7Zuk8HSQfN4Yn5Fc6sdQPmr9Un8sGd7EufjcZtxkkcNtqWbbCd",
  "key32": "49YxeJpk78HxY4AhaAK2kECXJ7M3To68HrDK8HSUvtEKzWxEjaDVfbpWC287edhBvUqX3BaxW32BwPo3RHAPhAjz",
  "key33": "4uXdjnQBo1akasbPoAM8tXYZ8RTbnS1uJ1H1QcoyRt9T2T65e7PEZyRab4VRnyWtVGVdLZxdHH9WT9J9JMmeyMvq",
  "key34": "5jdtiwJqgQXqeNXdqaJnzYp1XqThCdnNcyfRNbxPQsKSYeZaiN1wW1hB1ZtacDzFF9DVDAF8Hk2jdfMeueGd4Tn7",
  "key35": "kc5QhPY5WjwhqtNig7kk14yHqzuyHfgDGmx1wUFQ9ivimwRQmLJBiqxto3irVNygu7Q58a333mgRmvYnCNoBELa",
  "key36": "3usvUy12N43iXNGB4Np82m8s45X7pCVmzqppuoR7gYYFGg3VQ789ekam22xEWoyXeyEbjrBbAKCmGDts3dF86Gtk"
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
