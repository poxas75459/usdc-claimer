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
    "43HEbadES7tw3myoNVey4AymKPeaijqQra4bLYcyn5xQSDG2SQfqbHMSP7iXdVaWUnnN9fmEmrDwFMDJK3uZ6pD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6YntZj4f5gCVhEp5VFf2J48QFp4SVsqJUcCXoaFnKHRX5wA48QAmBaW9DgaUkvryYe8pgyL3pTcTVz8eYhwSby",
  "key1": "sjRMg1VbwFudVmfjLHusR6UwB3TVXDGyW9XaoYKcAtVF6qrC3jsAKk9fQqcZLkBM3aWpaBK1xLDsqtZEvn6jiWb",
  "key2": "3Yk4A4Jo5AnKTPb4gC8JRHugZBcAFxd3MrEnphyy7DLWakP3xbJ94RZFUtwPR12WD7bip5YxE5JxWp8UbujGhiMQ",
  "key3": "3Zq2NB78qwJn41RacjS5d6Brhq7xDiyyghWhBL7dGEGWzwXBrXfgCsqSp3df8chsDeTuF4Q5Z68J7Y66B5HiMBbQ",
  "key4": "4VynraistXxB5gPv6h39rR1FhMutorY2x465VEZ4KRUZSi859dTvzgveLyhi63JCdRKetsa3AgUtLNC5u4zZWnRv",
  "key5": "2t1MB7BHKwJfP5Zv7vaKzM4FyT3MNaebsiDLWECGUwVhRqu8wby5mNzvYw1WbWuC8MF7uGxt7DWF49XU2bXVD6rv",
  "key6": "M63mkVhRnGzvNBDf7gUvz73aA7rsSYAXW368wra6q2vPAduwP5XA2WNu1qzZVuQ59qkDqTrYEQkWpxYK2RmxSte",
  "key7": "5zoTFwxnhqXBV9seDy9L1yFsesdjX5cqUtnLfv8PHJ8Fe9tgmJDbBseX6D2PuVPqKGZkgpuSXX2sVWUzoTKdFwk4",
  "key8": "3EK3QBrEufn4NEU5JHbWYqwEFstAyXjWL1eYm4QwyeQ4mcMy1xUfcfnwYNvGibhymiKpnCwyxUhPx2kHoaiBkK2U",
  "key9": "5wPgBbvTQxgxLkR9NhLRPTodNjkyAnzrrDsWqGNHALMXSfiB3gAAJv8EeXp7cxuDpDiM6WAWC4EzznHZYjrgLvT5",
  "key10": "3V6tQQMqpExUpgQcF91bDovv7YCUEmFevynWxuZmJ4ghGYWghG5g29MWxWSsWEL4qg7WD5FCgLeYgvoEbUFZ5eC",
  "key11": "4PYStkrg9fwAnq1wnJXn2LUpYmDHu6Yqsqj12BaMwNwzoqV23Qpvmn6tEDBFv8MQRc7XcdYdoePHpDMtZbdbPjaB",
  "key12": "3PYD9oJU1nKfX95YxrGrWhLWcR9jb2umBRXHfgVZa5Ywv63sHb8RJDEkYSHyvsGxPdkqHExu4L1SC2TBXjgPPvPj",
  "key13": "5rzPPwGJEDRaA9oq243HG1bzTBP4HGdGCFko2e6EPUTBEuxAN3ToSuP8UDVQpsFiPxj5QLTrzZD7qcEf4x1j6KMM",
  "key14": "5otqK7b1dgBhF5mEjJbfCEAcWn1Y5NToQDd8pChh69vE92KYwrs3McycBoShXHgw3nSPLy55fox2nQ98NXPLdomg",
  "key15": "45WBqmSGoXoKseqf4H7ryzD9r3AZBfGaygCrx1Tc17ioj42uPBgFkpVmshYyiYeH4ptx2PE3cYmNCjoEXhoy8JRt",
  "key16": "5xu2hiiXhtKEaoEJzQQiTmJrCoYAtNKiEnwys9vRhqLhQjsX37f2gyeVfQ8SfwWc7vSnekeR59wgw7L8naSrMpK7",
  "key17": "2dQc6DRZtdNeYttPC6fH7S2uAdCCZjcLuU5Fsvm18oXzc1tHxgHwTJURtxMFP4WSdKp4MN5da6GzjPuYkdbXnkQN",
  "key18": "4XGhedw5rjSVHJPUZ89WBh4g34dKVYM96dWEpNrLWx9fqUb6H53fBKo8FJQxsmfMzB8VEqBjXPbs2sBU4xz1yhqr",
  "key19": "5ebtPPt3BRvD9MB4nunobqHGXWgDZbuBmNqwPPpz3qM8YD7rRVj5ai3neLAPsbMUXz8AigZheqeve1SnNMmryATL",
  "key20": "4wqsx6DbLM2wKv13H6AMe1b7Gdwvc3PihKfiooSkayiBvhq9qiqLkoAHen7QAYddruLSc2wX2qG6WJu1Lev1DZnU",
  "key21": "5qUwCrmd4qecfaF4sYajtP3kA1sttAphJ1MkiXn5MpFpQZ78qjNdT9HMPpurGa4rSGnbk5bx8UQBbrKAcSuf9TTZ",
  "key22": "3VbEFsjmZp7xeyBQWGsrdh9U1gfNiR6wbTviAL1U53x6fYcbwuErKBBVoMnfAws8SRr7p42pnsGQMCeNR1LfApfX",
  "key23": "3baaHrLaQpw57LSXQQuUDyMo5kpvbq9Zibvw6DCRZ8ovm6daKKcw3V2MNHANn1LzF6seTBkzzDpYVZPxhniRkKR1",
  "key24": "4hzXsSMFQgovvs5WmsAvjnmA1uePTgoBZrMJ6pckphKT729G2UPiq5PmF7N1mgqDHXHwGoccGk4jFhecoDk6XTS9"
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
