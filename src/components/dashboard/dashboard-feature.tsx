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
    "oM7BhBEoqEymP99Jn47hqzMyPkMnVZYEMLpHxjM6ktdtF2pagN2o8rNeWqHQgEWPQY4HDCMi2XvQnt5RTKqStvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2giNNkRuiFjnhjE4qyCDheAdCyQA756p98SsvhniTH4ncWryPgzmUfV3wQmo3gQ9xKUbn7ah1U7ryL2uahxNupuH",
  "key1": "5CXytGnnrWRun2BMsCdBXG2Br2j9EJUM5sjNE8SvVfgdEUXrdcuiQpFLVkRrhhWBRvWgTSRrTc63uCbZZ23XyQDs",
  "key2": "5H6PnCs5bdjKhP4XamxBqGaEu9975xmNxXNa2sKfZby28sp1nKS5353VgmT4fNrekpF6mHTWZhBN6TamsuR3APyp",
  "key3": "3hxUTVMs5eDJMdRNSo32eszHEjoKGexC1s6REUcLaEvYAH8e1jCAosDqk3C7sEXFua3SBpzGU7ZyeE6JKUVEYveT",
  "key4": "3iUjZtuQag6uUy9cQ4MpmKGfrH8FyUb96E4fuipTVe2q96NQG4voB2jvUKpsGSUbMq6ZzuiMLR3v6smBMcG1bSA8",
  "key5": "25PGVSfbzRKGeGEKMpZwMZn4UCErfYXxg57eNarfT2w3q5zMVrEmPmDSEN1hrkEVFhZCtE5KTttsbEPNg3emdgyC",
  "key6": "2QVWuW5ztFYVLif2onzttBSqgr2vgR6HVBZ5FpsG6SdqZr4AnANqCKPg6bWeP7gAjRYsfRZFr3W5Roh55zPDobCM",
  "key7": "3bdhZDcQMybkp4uwqEqFr55NYMcGMqp8rHFm72u3jVjNFzgr6vMG2XKr9humJoJ7kbdLWqvGRCvBuEtwFLHDw2fP",
  "key8": "k3rcC79DzRHZTxw4PvT5TUJAK5kLzdTxH3eCuDy2sKVvRfz5uT9kVr3UH4thmdfQM6FPgYV48g4k58tit6rrCaF",
  "key9": "pickZFKdZW9yjYACxBJCfBeXMQoSz6nwdMXGn4vFddKL7ADEJzKtAGF1ZipaNHqEnNTvpHaUqs5NrRYwpudHcdC",
  "key10": "4sCbtDGJF3zHbbfuigrY7Kz5ub9PAAq1eux4JZ37LgcvcUppPWYnWRyzmzjQNedhXkppzgiLSr8hVusrb7rvaaGo",
  "key11": "4cWQKJGQjJHHZMESacFU3QCiRW2yPS41HhxCmxp2ZmmHKn3p2VbwuyFWuffgjamcWSYeeXoNmuUbqiSvu1WtxF6B",
  "key12": "4GJJfd2JnC259UdFJav3d5E4MUjTic1s2wr3Ka9CZJE2KMstc9VcjbY4vaBPiDsT8TxUiKHnro7cQpvtCKGsrnCk",
  "key13": "3wJX2tFS5GsMhWaZvYZKpwu7iAVEDRZpy4LVbjcUQdr4xhhXkXd1iNL2N2anCM9nVd4X97VPY1L7uyMPowqdbN1v",
  "key14": "3sTM9P9VdZdcx7RFMtgENM2q1Ko3HUgkuEVhKhvC4Ww6nqHQdqJietXyWcjuETtdvZs5JaPBXm8eWHVsevNUWxMZ",
  "key15": "7WthbmNiZ2bVyUBJevhNTrN49ooLtWq9EYQQbHoBbwj7VhJf5NiPUMbbbSnTmB65e1KoMaFbYp5sTD3Zgn1xydT",
  "key16": "4VkeQcdmMSggoTpwsKH5ffY9kAKfDqgGh7rq7ipWeFT8itkXsrTLkGXdcMrrQNuzM4aQSewRcyNcq6YRQqqhPke2",
  "key17": "5jq76iCcHa3RGHkmWEDGLpQBUfr6AJNiz1ikrhJXoHYGx2W1EBiVSLnr4c3hLprN9pcHjTy5ZoUPy8s2PskDFBQu",
  "key18": "f5FHES9qtVPAg5UyjmsgGhKBazyeE7mLfC4Yn2aDx18N56t2jhqNikK3THABWofUvQxF4rEuPEHVrtJjdMJrbym",
  "key19": "3PYtSd3EiiQxvjAfNbv6piGP7chpW7eysdhUsafPaR6nEf5o6rC38zRZmfUUZaqVBr556GwknRconDLk5wVcG9pJ",
  "key20": "5dPU6PddozSQLjxmRtcY59mdh2AkpkB8d6Kfsf3PBV71Gv8aXAcQQ2de6XceLSuTfiAZrSn1sRkViw5WpF2Y288S",
  "key21": "j4qNxqg4z44nC6fC7dDAPYUhDqYjBhf3V6LjUCCJKBeR9Rr2eWsA7wPk2CnTW37sTpNJG4ioX96DVNg54fX1PHW",
  "key22": "DZhFeYrwNdHJ7FuaVBUXC75Ju9uzqtXK4jMWcEkWR6EUZX82Px82t56QByA8SzuFdm6URewpXZfyN4cVSyheVpr",
  "key23": "5od8eUn232s8F65YnQyN6coMdWaN2q2T6oE7CNWxp6Vhsy5Nt5Fci5MDwfhrSg4UoqC6xUfCfwtHujZCL6jroCFJ",
  "key24": "PNdgHuFsCUcg4rQVp3dzdJHHYCn9SMjj8tXZKweBpXgG4mY8wZHgqfo6haPSdtKaz4CeSUHpTWS1rBBdvwyLmMG",
  "key25": "5HvVDAZ3QdUA65eFerSPBdaJoUbV36ixNeum6APRBPhXVYSHnRRzMZjq3drxKzjQiFwVDZf8wEgpBrJCa2aCNpMp",
  "key26": "43gCfBijnv6asyyiwrFusoT1cHEFYCFD9J3BHTT4AEjKppnCq4MU2mhnvR4Ax4WKHEyoSGd7nNKeSoFhU6SCnFch",
  "key27": "5wewxdY2Jv86ugBQNN9n2jSLkqarFRpLwRRGrFFKuN1QnuZYD6CaZwu3gdmKA9RsXuyKx5LAJpYZwZyhyeyQ5k5p",
  "key28": "2WqAkAxfNJEBaNXnQTLMHUQNHzVZ2JeE4GVJf5FtJpDyarztzY5mDiYrERjuzvG3rqNuaAv8R1PDwzdEapVYuU9E",
  "key29": "3FvmqXAy7HybZsm3mjuB2vi1ppssL5pHKp2T1Ci3cextrDFHnauvGjCpe6VYVgAQC4VeaxbWgUJkYEDvZQrzTVVq",
  "key30": "WqCrPyPMJyPGqACsNYqNNcmnPJRCU5s2ZxykT23WYgM4284b2k9uCV5R1CjA21Cq1ZQCaTCt6pTmDfpr9mRqF5G",
  "key31": "3gVnP55U1kyTZXFfPrnbcU1tRoNpb6kzAnYYxKyNvStYT6MH8HmSfEB3e6at68p8f77m4PpYu2rXTBQ88Z93FmQs",
  "key32": "5zXCZTAh4mPECZDqc6rq3pEBmMQ72dvf5pZqXbx1khCiJAg4c8gKDStEWXJgEyWe955gpMYLdWWHMiUUuFr2Pz3a",
  "key33": "39MxxtzG1KuSQoRQ4xYDyQq7Pd7rwiEtAR4AedQnTgeRBVii5RKMiR3RvUFYQFMaRAzxY5aFfWGZNiMtVk7PMSWx",
  "key34": "oe54BBQcdNXF8wXCd7ojBynTccZWKDf8RVYvop1sMYXVucb27MrApjjkw6n248VicQEaZviqfdAXjAHgDePVPmT",
  "key35": "5YdEPFZPALni2WRP2bH8dvvWXXka4Y3MhUHt7LBXxouvBKRdqU75Ss2ksiwfwLuF2nuvUrcpaXyAXHKrCR1JShiJ"
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
