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
    "5R8Fm6GCsFBrjXLT1giH162CjaetXzA1oYu3Nz5NUs2ax2VtBB57kRJhSeSWJCKc4oisN8yqYbL31BqokKUVoMEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFq9wiDeM7bDZM596GbX17MbbR3dpxnEsu9LccwCxDqsVYbM8Utp7YHMMASZ3CopqGtS24pfWtoWWPMsEZ6JV3v",
  "key1": "4Uk37yr2ALzNZ2PWU8ruisZt5HYJ7ZkDvEJeN3QtyGWfHaS2HfuCGX5sgycsBgrfZCySmKGdHDQ4JUzgCf7bw8SN",
  "key2": "3qL1c3uKMgdubEvj3jBPKjSBxqTrPBdr9qTfrAf4Q8dvhxkxLwHsXhEBttpAVBASYTipj8mxs1hsRv7XdTZ6JopY",
  "key3": "51NpZXu9Tg54LHjW12jWdV457E5h72MDmNAgNcVU2jyS3NafWcXCuqefGRUNqjPra7qQvqHRto8JKc6jugafWDmk",
  "key4": "39VdapWhEpGFSn8xBq3csZW9puTVScC1KAv9zR7QSoR733DkBzxdPM4Sr5saPcYgAMeR7BzxSSe28DDuNXnUtuDR",
  "key5": "BKkLvvi5RZKWMdd2KMZVhpDs6L7FndfGfhycUh2F5bnpHktKHGDKSvkUvwgG8MSmZ1bTyeBPE3nvDba8QAKX7J1",
  "key6": "5Q1Hh86UggjUxdzqTR85Nnsag96adR9oSxBaRiwHqtsrFmWsMq8zUZHszzhAg2sLWYF1B5EDWEro2RSb85gRNYgY",
  "key7": "28Si1ySmRSiMcnzuPsvsoiedBR6XfgyckRVjdRi3Q3oWznKrS5wcr2UmwGp6rhP5E1LTtvo4CDK9NDstsKZyzJKa",
  "key8": "2MjyNBUpVxFEx8KP8jHTGZ6huAC4taR49Ryhw4j28ms5X8SU7cKhdhxKf8ATUCiJrhAZCrLJxcpVhKrzJsfXjgBu",
  "key9": "w42mRwHtT9ikT2hCrT7jw5C5PcPkV8o4JqPU1bwRtoq731ftiqMbeY9kxfgxxyTtRXuG88EBPcdJpHRR3uKkskU",
  "key10": "582bA4Nz4jxN1ZBet1b5GQcLueR6BDzNZsQ9awVJS6yzNtULUUNXXNSaycQ4K95TXjx1Vjp5bRuKzajDV6zNTxYW",
  "key11": "3Z4vCX2adfyDsCXrP3fTk5kiLyarDwypK3qqnKUEgdCS9kJkYzNf8iwtCXQZ5mDk9GFj7DU9zVuhfzw6cJ6rEaiu",
  "key12": "4TTusKfCETfJXE3giN5Y2Zv1KTVzaMMaynpM2M3odGLm8LU5sWQ3y14a9TLCty6AWdxzyYG9jFL72ekiexnBeSd",
  "key13": "kprMuLSqK3SnHEtPS7nbKdMMA5USXWZXJ2cBVYVBHSD96E956dx2kh4UVFyJxKJ6SqVVQQv4BsijLRPs1wf1aBS",
  "key14": "2KSijFfP2pu8WFP66tuJRm7v5svbFekuVMDfzu39pbS4cB7sZWnmUMquwzRw17LX6VJJj7mVzhCVvWhHM7CzPKyW",
  "key15": "4qkcLcTHEVRZKERxcUfQvhtRC6cTjReKgH4bWx3T4VQ4UjMcs9PZuGSAkDgwtnAGJcYb1dA5sTXrKvhoEh7G493g",
  "key16": "5npMkHHwzCyJ5ftxn1VMFP8vDGQhDtHtue6w9Q1XzL2iGFDATSeFFU1Jk1g5WXqT4BiD69GaXMjXXLjm1QrYxLqx",
  "key17": "3oe4wtGoWPmqm2sUiQP3GSdNNdazw1vcs7SoHDyh3yfkFx89zoynzw9MkDSrT9RhwMSGiGiFcfQKRbUNjhtTttoW",
  "key18": "Zp9AftUjfEuaj8AY1TaNrLQ98fUwxDZVbv843pzXM12ttPR5fhinkTi4EAFYwPeFhyzBp76tkxkiPiDi5sV3W7i",
  "key19": "2HHziyPLMFkTXZo6gyVAk3jiADBwgUaWbUReUTmDtaPQ7TeBmRYwTKz9ShhEDJixMsHB9q9SdTKVXM5aN9sHVhbW",
  "key20": "4wbK8ev3rygRjs3cwEf4nAQnD3ApP2iA2iyfEH8vRCzyykzF2SEGL6x4ptATRoSUPccz4koocfD6A3Zo1JwEnfn4",
  "key21": "id69uyY5apeucbFJjfCstiw4aR3rtzLqUf5e8YUmBcsjgRXjWEapTUjFu4c7E2oMgNgzJhuxB9dXxq4LrCXEQKb",
  "key22": "4NwtF1adrViQKa4ReZwuEKgJ1ndPn5TZkczVVhkPsUYk3U3GyJUVFG55hBaKnKNkmwjmqNJek67cGysJhQxWPNn",
  "key23": "2Rd1GwsdYQC2EoMnw87jyJJ4VM9fCac4ByX1v1m4Q5jNsVp3dXnoNUnq4zTZ54WCMxyhRsh1yYmt3t3z6yKuHCjv",
  "key24": "5SuBMgU1H1hEJHnv4TqdWERjre5rCa5FqiRShptsMC912BxkbZhRvQk1ZvrepGAqvsxBJEhwQU8d8Cs8Vdv5Cidn",
  "key25": "2doRdQ13zDrxbEpFpPVNHd8XNZNjGzVRuPhjtvVErLt3C3G4us2hmrVJtcgMRWfUV2f8VvHBQhSWTU5HHpaH2nnS",
  "key26": "se7E7fahEavnMSvFAzF1yuukKXibSfjZ3g738iSGMPNKTFPoYYX1qDpeZZq4kLCuuXqNydgxJLLUueDWLm3VyDL",
  "key27": "27XtViiatmGwRH8ijryW8XDkHUfsNzjC6GWHFUCRokjpSoYKLU2wsX4cZS2r8tQsce7yEHGE94ZMKKBXDen1UKRu",
  "key28": "5XVLCuVpj6GwXnhYS24MLmtbUswM9PwNiwPCYJ9JgQ5Ebfs8dBjrKgARoZ8h6byfBk7uRCxDkaHtufr9KTny4iC9",
  "key29": "ExXyTtA7AuozLNDGexNBrJE6V3EzNM8yJBCaP5Xd5eULyF6wo48ScbqzJbbYQwxSaRw6QnkhZ1SjRRBdTSzAzE7",
  "key30": "S4YoodsETojR3cnm5Vz3NSU4FYHvGc5HuEJBT5M5xY4XmgJmJ8k5NBeBR9fDSTiTkzxi5B9waphc4s7bRwVGQLJ",
  "key31": "5KfZtmpYnitFpH1prMqgv56571wvYM7pYrx1bJzGWTFhehh7f3Sh8iK8JTeawb9PA3SpDhATdEpc7bzjhqJo6JVA",
  "key32": "3Q9DxeKECJqQwFECtR7u4CaEFJaeu5sn9E9rDdN57drv1KGaCCgyC5SH4G189iCYDUKc55x5k7X4VVp8EHw8vyHJ",
  "key33": "3Xjvzc4sfHVZZZ5eLSubi4VH1PU2ikuFdaThA7NnkSxn9gJZAVo4fKTRdwrAWy3EshoA9CPV2yzX4FxwqRrcXLxU",
  "key34": "5aNzSWA7igh9TMDfeg8cUwTzykVMJzxwpjFimSbJXp3j1bMyuuF3ppKN4Z8mo2NsF9ZDckFj4vuyfe6LrEreWsgz",
  "key35": "4ksqLGZNVoFHtdNJDg9x42Wwrun16yciWCJ5mwtHGYfPAtYQuoeNJGgz4p5BjWnqYD3cV1NJ3ezWKiSdoep9fGG6",
  "key36": "5xN1m3v5eoZ3tS7evjeioawbnjG1sjrApWyzurxDDGjLq5FpcqhfN8n6iwnpuhePBq8vFG2QqaRe1uZ1d8D5iYB1",
  "key37": "4TcTYUEiFb1C4tEm3LR3G7iXNtPZY773Zras2Tp9Ge2X3YKenSgdLWDfr8XANQYPsULyhWdxDidrvQ3FzFx5LRE9",
  "key38": "3KWMuTPXj7qfXVc5ycbBhwwKaR4eQ68uTPQFdcisgnauPguU25THqcN6h8eq7jixszDCPxjupgueKN3Ljmk5am4V",
  "key39": "4CLyYY6HA69ctGUPYa3DsTJtzkNcL4qxFcye8hW1kWqSfrNvxTtRNBsr36mwZBax4fA68gJX46TfP8EMH3qDCLUg"
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
