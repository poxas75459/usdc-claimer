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
    "c1Cdc8Heyb6HbNtbHqvjaDji7UrJeTzZveN3FAw17F5z2GMpjuqZU9T6QvSN8vJE7PbZpALoqWLto7dmhogZJx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SegDuWYXxFt6MdzQMPdk8GzrxCpvzmuPes8zzMkqJ7qrhNmyctCHm67kqwJSMTjP1hjHw3b5txVRCYFbr67SoMJ",
  "key1": "5Py8azvZ12p9bvenGqPGTgv6h6tUd84NhnggaxmserbFuS1fYGiCFKfYNBK7bTrCpi51wKMpmxZRDAaztrNr7TcN",
  "key2": "2uq1BahMWZBjmZYxu4ermoESJaS2BSeDXnJyec8yzq91Vg7kgxMMG6Lo4q2VsaTFS8nCrYG1Gny1z7Rt62Fk8YLi",
  "key3": "5zzgmixeYHYCRduCHFaHqEfASNPD2XgVmT1pj9Ufo9SUGCGFqMN1mX2zxFqTVah4wfFGxJxvT48sr7X5dpSzW1Uc",
  "key4": "GbLf7WFMn9d3P53FxPD8n6VAsVsJXbomeSzDkGYiLPBH8XykJRxbso7BbktrQWjQP9VhEB62FKv1YwpAcVAzVnk",
  "key5": "3bUakWhy86QVDWHVbhanx22zauBJgTPRqREsT28QenB51qA5cJMu5bPUgz8gP7bEMXntdurUUVdd3cJqAgsphk5o",
  "key6": "yYi7yxKgv5PZmYQyQZigD4rsGhj4JCL4gjA5tzgEwChLAKwJzSNrwJLSfk42pR44hgNjriWS86PqzvRqyG9EQyY",
  "key7": "4N247sNYjrozrXXmkM9ctEsY8aatG2xMc4w6JcZ8xBHxwSU3do1V9b1kG6emWRWKz15qwazSzBjUkygQ2Y3LUJxe",
  "key8": "3s11szinZ66ZBgYm15A24j8KFAXiAkumcqVPNbiDjNLPYQjTRcKxhYNtXnHogfbH7y5WTHSCEnmitroLarQYckDy",
  "key9": "4eMdBpeAWfotWexBnyS78BmRKSaoKPv89nExNtiRf58tEVSCvm8fb1owqHngzKCUvbVVteF7EJ6srhynpf9Yjifz",
  "key10": "RePhtfCiMwdsSZtWDKSLk6Zx73kGaZg8oPALcvZ3pYEDundFuwrrjv2mhiTGiFeEspGoZKBRvP67geYod8Ka6f4",
  "key11": "5uq7T3iscQzQgnhA3QfqLJYyfdzVTa3u5ZYuhVqZnrqWgVt6bLrrhvGbT4RSyfXxMQgUswbHBuViNaGZVZbPmTLj",
  "key12": "4QXDZNiJGrB1vXA3KJkgxtVhG313Bcg14M4SFKRPS2qxu6nmQUoKEj6NGxotFi9YeLAsrpifpBX22wbwPL3orrMG",
  "key13": "4CP2aTxETv3LHcgTopt27RM5mmcNmXHjiM9ivCxRmTGxg6cTGKXRkTSxCv5ZddebcEGDfMFg4A9QWYDJYSGQKPsc",
  "key14": "5kNm1h4GWJgjmdqxmHudnUid7Jn5XWQoNpvhZpRChNdLTxPb1r43qw424tDsX5N9vJoXUyv8hLBzMJZ39UX8Khyj",
  "key15": "5haVf6sK1rzUzNQVEs2v7SQ8A23Rw7WZsNHJuFTgAiZ4y6b9NLkmgzvY8VcaBewCB5o24jEU3K9Zpidqqykn3PvL",
  "key16": "4xWvrNkN5mLLgHac9m1qjUszfREFCv42Wxwsucdjfur3KW8SS5ftTG72qzDXrhiVXfZnF9w12yByTMpRnn96UE1v",
  "key17": "5GuZxn6zXVRoR6HTjbju2Umg2ABAJRQt9XZx5qXeLqehwdhpiXjjrMkJV9UsnXjJQmaVpjXwwToHffhyceBYNX7L",
  "key18": "bMEvJpQaKR9YpQRqp9Nnb8eNpoEEQDGCQLZCurUEeWBfWtCTxe8ncpJ5nvAxFCqYH4ALHdwiG4cETUWCwsZP7Ly",
  "key19": "5PbCYRbqireFEBWrWrkzoJJ6nNMu7Unki5Y5J9utbiejWwAq2WeoPQAkrfrXGt7mTToMhJNfzNfzQeEAE2MgKNUF",
  "key20": "5Pp7bXb4PXa6xhMWzG5FXwiKu4VWnmHuQkcDuto8V64EjFybnQ8zfToKoW4rKqq9j2XtrnctYoNne9smmchhCNSp",
  "key21": "2vfSp9HVrrYfQnNLZqVzzUiihXKvfZ9gKYCEpvuPWtBbPmKYz3hauqGTFoP57Ph67JZ5HN77sXtSKKZDAsU193JB",
  "key22": "2aFTynP1yFn4W1PZ2i49cKax6QGyCaq7yXXTuE8i7mWtUDR5ZhPPbu6v8rGLMahWtGVZYtoWzBjeKu9ydAoS67Fm",
  "key23": "3g5S4kH7u4JBAuuMYDidQj38Nxugx8bRrum6izYtZQxLHrQrTT99zg8GthA8A7kFDosp8FcdJpVJCtHW9QfSdXLS",
  "key24": "3yiqzZeFGHgEywPrvhD8FwgvKmXScZBBedv38A2BGDjXT1WT7LzMWHsrHSkgHdYXVAf5Nq2yguwixR13PLubKDsY",
  "key25": "5coYScL6X8jNwVdE8Rajh1BnvS5tS1BvYftQHK9BizhpDwAi69VDvH2wcMFHkzGdnjZqdSX9QrwQ9sxeEqiz4Kpc",
  "key26": "31iUhuaqLb5yrW9dVxK7cEDVnfDTmT3ufspJJi64Xjnq7F44yrPHhWz4VHTtWE3KRjauJuEEGpdZB9LgPRp6gvA3",
  "key27": "65ZCkc5Q6wt5tFK7zsXDDYc2e974MaxxDHASDzdLEgacbdN9ohkKV4Cw56qGyMEmoj8EiW9aMs2g3pgjQ5dW7Z2L",
  "key28": "5TZs6D39YWub99pakdJBb5SQgexPT5Q8U1zzNAUDyTdBwcb9zg6RkccMAfV8bmjheZwThGprV8cx3JQicaQTdeW9",
  "key29": "4b6GL59McDjx33xo9WJa3Q2TCWLezfpGLNc8eMpY4iqsp8DfzAcNcJX1p8cCa1CrjPTbNPrrPvCwz5mTykhyZQ7W"
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
