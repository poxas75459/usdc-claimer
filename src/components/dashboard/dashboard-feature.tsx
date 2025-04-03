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
    "33mEWxG2nispFxcDKkZtYYvSLaMAxCLede18AneWKZdpptEjEXKCjvxeej19WbgLfg2tu7PxBzuvi1fUSSjNdvzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56RzBCfdNPu1BsxmqTsF6H6qLiYet6ADKvrBmFE7KdKfxH4e8MDLTnqdbMVyeo7fDBejtMnUo2ZGTvggwhFiAD82",
  "key1": "5qCicT8GJZPbfbLtiX5wcppHY34JF1YWhgmxHZhKbCnJpxXfECcZUwiznmMxQSKTtQgj9TK6G4JUdAjwNNKi7ev6",
  "key2": "7j3mGHmRt23sRYEa67qZENmZz84Tuo2UYmmS534PzEq7cQPCx9pfHuwhmVdmL58ea2jyoJ4tEgwrbdFbNu39cNH",
  "key3": "AENiUEL7ufdYTqNDF1KCyUdpzcZb2C4cynEteg4efcynyNLuoETvxPqRFLuFgTb7kDsWc4Tx2JGAcXvioSfsgPB",
  "key4": "5yqwRrYfTZnjLfKAnwkfcn5qZjGT9LNqPHwozxSsVqkwhibWbafLUNiGmhKuu7ih6s6ys2XSR8cqdQ7Sz1JDx6VJ",
  "key5": "3oBd9XrrUL2fEvR2CpEBuqpBVumGAgMgppS7n1gRThAoUfEEN7m2T14HQQUSKx6Zj8Ln2QZjGfM4jWMtMkErXJa5",
  "key6": "5LLeWnDHLHRHHYE3iQHe9zyg8Yj4HqrvfHQeX5SdEmhVSMMa36pRa9YMZVpWQNRQtVTxaJgRBhWgxcN8k4F93fAo",
  "key7": "4bpbT2eUa1w5fyBnLQZ8SLcApsMBXEUtK8ygDAkQuhXZ81Q9mwyEN8dpFmqRCYacj4dpAzpgoMgSTJecdiQ3B5is",
  "key8": "34Bnx89qtXt1Z1mWR5BwkFqkmthkx1QqvDNifof9L7c76atr5GPw3PCQGCK154fHwh4xyAnenQTDXgyfFwceWQT8",
  "key9": "5Nv9qmVitNF4U9rJNGwj9HNt5GE4W2G4a4cwvM3Lmp1Pnxawb359HXP88iorcHsyEkoHSTBHnQGpUK82Ddt25QeF",
  "key10": "4FnyZWWYQxLgKLnipjEZrLCwJ8abLp9xdGMmoXkz2ZnggBjeyb7Mhtyy43KvNqFRHsqqb4LLTeuosTxbCwMtLpWY",
  "key11": "4Am2frZj2fBjuTfU9GE7PCDAMS5ZpHH8Muh9qK38axTCKu38Sptf3DrKEeZJnaUt9asMcPy2h23D9kKo7d2oWBTA",
  "key12": "4nKMAsY4bvo3uZ6HtGXeTVkr12pTszhhUA6GrhTWWXDYETgfTg8woCwKgHaHu3aRX5as2xo4dwzx92HnD6pD4zM8",
  "key13": "3shgSbhtUYD2qMcDFRm1hzhYDdpDQogLoYRMh3f8jgq3xwKFgwn3SDLHCJpSgHjGooX7XXpW1jDFfnMcRL6WGcRq",
  "key14": "7KzPrVDjW9QAoZ1QVwgyjknGox2AdLVV3L48rCvPEQ8ftoXGTXue9TB3TTjpVTUxJVzmDxSqfw1K5eZCTcRmmDT",
  "key15": "TN2pZ9ywHb3uqqAEixD74psBFUKffns7DWCTpZvVH82NQwMvLfdvao7Jy5yFHez9DZ2e4GYJGVWDKgsgc3t5kAV",
  "key16": "56P5Ltgs1wrhc8CWmg16t4sTWEn8qAJkkyhM7EBtF2EtscWhvtphfdw7jW6iiWWBYsFCsfx4WDTW1KX88YRbvJAV",
  "key17": "2nHjmFc96JjS9e5axkSi8RwRXNSQ65KD9ZstZSCV4bt27CrJarc1vw11HEvb6kY3LZvTzuX2Szpima8khVZAJQjn",
  "key18": "5rrU2KqtKbCeP1yGNEq4gckXJMr8V5PCBQyCPaNbWeS2usXDpyq6u7BEU1VudUW3qFaDfJkPb4JPQ922Bk1mqwYs",
  "key19": "2hx6jrjvrBr9bnPE1YD6rBHKG2UXuq6AnM28wjtDfUCsCBy8dgJZQgcghH9HgiMMXzbF26Fyev1dVdy3no24EUm9",
  "key20": "5Y86vDiMiLzzgtHpr4p9EVeyRBZHPYKtuYKd3Tia6uSGrjLaZ18R3eHGtyUZmokaBaoNFAWQKxYPx9KsviwAv9nC",
  "key21": "jyqTXJfVPK6duXbhxV9gFh83zf7ySuADUPLAquhEhEkYUWTqqnaaPQgCrwTMZ255WWKAVpZ8sSVgyGeowDJg2Fw",
  "key22": "2LM4uvtF46hAnTsRqEiJdLGEca82fTdFTcptrdbyzWc78CPZ5RcqmT3yr3TLUX2yEUotoJ3GePc6jADQYayZBdzM",
  "key23": "5DEZJSWF5QSKMNPCLjnLbt68fpg4U4cK2ma8oEwxzbC2QRazGCoXGzgBpkbmggrJ6aeEFpXvGGRHwFdUKy48VqSY",
  "key24": "4rXQX8Z3rB3rhiG6Jn2jbKtzWwB7VPuZtxqaph1nn2obGQbSU2WXBb5Re8uzUJ5PGCRenzfKPgmMR8EJmq9cLyFP",
  "key25": "5kYHpxpE1U1S5d4kyT56D7kGsrgseT4LQmsUD1FTbs1LgZhys58KGVMikPLUQbSdVCq5fTi9xSKqUXyhD67iLCZJ",
  "key26": "2fubkpNDvbqBcZNot883eQhuMv5hbhVxNNWy9WqPM3uC5DB2hP8DwEUPmRUJNC2cwpxiFzbfm5dy8P2JjAYeRBfA",
  "key27": "4sJZkqEBF8rww5agbK1xPaaiRBYkMNVmHanPDmMFzM7ZX3b5oZaKDDpPLSoA2YB72j84hYQxTvnXdY2nrDEoesKX",
  "key28": "4avjhX4yzaeRxENoCFAwaKuZewmGMmMou22vdTWUwF3pBFKcDwFqzPhJLsgWqNrQnAUpBT6BxiQStdXpfCVVTQJu",
  "key29": "5sXgg6oEXCcN6AvrASKwFuMgz9XzVzTQWMiMMaU6VpLHrxj77yDDUrrsXRHHHbP1Gjafwpg8mBdYyc8WhhuHjmyZ",
  "key30": "PK7YjjgJc5wEdRiaemqcVukKsTZMimyaD6pMxP5VE3gqqKizEA8fABe3K7hMyxcRVkWeH4nmfJhK9KWSPSq8FJP",
  "key31": "3i6nj4F6S8vhwRufk2RMjvfws378QLW4FVg57SiQU8PCW6gSYUmu4Hch62DRTy66J2JUTZoaUGJLv4tMx5TNTvmZ",
  "key32": "k48V4WM2o2RD3EAAm4qpGdktMkY5pxch9CYsFLpBsiRWLfrCRzg5rQp9z5MLwZRiVANX2NjF5yHbvzwNdhazV4M",
  "key33": "5fe77wBHjRu7kdCCsr8PEw2nwMNfPmHZZQXEq4vnoCTmegTi6NvqSnXoKA4kHAiVH5DS74xyGWy3yGyWksvFxxW8",
  "key34": "2piRUqSDLoG3Z1VRJu6vDt4Pofs8caW2V63LknuaXBq7F1NKC2nVkY6B9nK4z7ESVL1ZapisFX3CdqcrF8hnZKRj"
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
