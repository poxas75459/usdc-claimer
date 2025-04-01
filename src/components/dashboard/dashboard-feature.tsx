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
    "4VjF7MdKWsGtx2ttLYX4dQATtApjgP4s9Bg4bN5SsJFz8GKxgQbghy7J4txHb8CHHvoCrTdbosh9DVjquLFXA7Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XrisVa53GbgLrgM59fKyGUkLQ1vsBiT1E8iBZTomtHXMbWZKHwBpPoBHibFKuVzY3nvLYfakxKuKkUtLvsjGw8",
  "key1": "evFsXWemxR2cpA3YAgxUto7Q1tJBEDnaAGtNu5BDeaq3QnVrFumd1nSMVMQKhLMmYnhEaNvafExEc2S731mdgzv",
  "key2": "3QL27a1LF6XUg7AwKETuSLRA9Lx4BVC5Xn4hw4LaMJb7a2frpTLm1GUsi63A9FE4x2x6wrLeJT2qdvVzzVPy3EmG",
  "key3": "3QodwRYhp3dVRQFWo9LNqGYjCiJCgUqyqm9q3mepmmYCDEAUxHVUZ1cMctM7GCerzSdZMopYaRQFbwZc141co9JC",
  "key4": "4GctcvedEsyBQ1QC1myFNQ5feM1pycWCa617yJuzaX1ey4ZpU57qmKivDUpwRUFzoGLL5Dx1kZPXgCNXRgi1mFHG",
  "key5": "2F3h6xCqdP5Mc9z3ECkaFTDfkGjDJRVhEiA5iFTYtHtaSv4pXem3YWwK778VaVaEHrr94FNj9h3nFERe8SskqmvP",
  "key6": "5Gamu2rM42a4TLFkXNjPyrtJr8vhaKerjvJBLn2pneXujX4Y637Z7jqAZRURXV7AZwTEqPBhshpC2e2E17panWr3",
  "key7": "4KeGcHn6DTFLWTd7WJPA6CibVRPPGFTvryCoz73UiNi8h9xjoCtshnE5JSRhC9Lun2sX6zbCTKuWRFiqJsagqRr9",
  "key8": "38gyELUWcUtBuGLMCrTvMue6F6ySpm2CFiXvTMSA4XGrESt1WZqp9VwP43UcrwiEuQpd3WzSYVVakVEE3PNbigFm",
  "key9": "3umky3rfDMCT67eouiRsyCvtYXL12cxc5udPaqvouveKwE23Y9bjCnkYub9F5JJV2Ls3veAUbqj1k1KWzY9XrBqe",
  "key10": "3o7MUeTa6ZVKN2ac1SG1QDxdovMvuau6TBR1ysAw1BiC3gWR5zFmfsrbtJpBZaGEdgcWwV7UBjpgMWgtcAiuZXye",
  "key11": "53F7GPBZbGShzW4ZqDWGwx1gVRtvCAMcfZegmLYCnpJpimPxEmPPMr2LDDcNt2xUg1i6E54FNk4zdEcpe8LuU36N",
  "key12": "5DPj5jzAcpVnytgyTQ6fFkuxz9dfvhcj5YfkcgRRz7UaSyUqu5xmL4f7yX23UirB1Wd42Jox67RaYA17UctLY3eK",
  "key13": "2DQWrm9t22izzWfgvU4x6hWvTX5niEcGVwowoZTKTwVNurq7QHkAddgwCt9Km9jSoryr4QCFKgvv8B6XD5Gxofsm",
  "key14": "4AEHJmJqDVYsbPhaCAQe5GgjAzP3qQqLau2jUP6LTjfM9eFRFkCNixYNraUHcpMtitcaADFyAmdZhsDAgb4nhCW4",
  "key15": "4YcLUxbBoUQA6UZCUy4v2kzJXLpTdqeQ8jnDQ1z23VLkhq2L7Tz27jS733J15du6g4woykJNpfVhir9vX8PfNQxe",
  "key16": "5x1zrc6chwQWcZhw5fTPrvZwRvFRGb3sMuVbSLw6fsu5C7kF6AhsNCUiym1M2cNpXjTS3nh8FLEfK8ANE5D7XQYi",
  "key17": "3Wf4MANVN5T8cG9zhUjx3kK6uejWueNacwMYiV5ayT2h2abHMjNNNexnx8fAvqWXoFkBuSrzygao5ju186QJ8RFi",
  "key18": "W7sQQbuT6aGoZVxe3RT4ZYRU4Xr8SMPYVKmkAmX1awrSsEH3RQvUcAbqggEA71vSMwq51uwPM6mRaxLh5xJ7XvE",
  "key19": "2wqQqruWo8Fu86nX9h5BHKBH5SPKzJLsScieAueBZZ13EjS8bTktp3Xfh7tUMVG8Ua3LVqM8nmfdJgTZVpw6PiZD",
  "key20": "vivB5j9zNfvHR3jawMrsiCruK2vzzqmBt8GXzrG69Wma6tb8LggTw4FYgMjB1mtRB6TYMxPycSDxg3TpJrCJdwh",
  "key21": "65Ph1bpSvJncKaA6NXaeCmCAo2vJXuJaX83b7UxHB7jgJT1FGY71GH2tGSa2t7kfcwnDk9hFrfQWYsfpunSqu2dH",
  "key22": "483rVtFAQbM6jPxKReUFh1ozfKwnXV6gPV3jxfDHkuN2Ez5Spoa4kLK8Diu6fkpKtFsPttNWGsVGW5PR9PbDYoGi",
  "key23": "2PL6e2ovqYjDgnwMAzmKUqjj7cJPsXMzH5Ysk16i7XRygdvVtEp2tXosqENZxm7eAirbG7p33mfiWL7rBr3bULst",
  "key24": "3dnrq4nmupx8qzGmbtsLRVQGSurnSNzgkhZwsaxL5rHGxwAnHBGhkhgTMAnwYwqmhoRRYZ2sPNzUz6srTHTNnCz5",
  "key25": "NsxbUGMniQ2ppbdZEDDZV3BpJmV9LmeMqC4LQDVucKX5HMqbvXrpib5hpZdwgdvCR8mKs3Nk1eXQ5RtUH4xvmaC",
  "key26": "vutbyQ4JeahrkDH1dZd6NcZtAuEcr5b8LXF4LWzC6qrXT7ffRsBytmDNT93Sqh7KSdwM8YvoHacCz46fvFCgm7q",
  "key27": "5iNmU4R4pBKRNN6cwYwTCHH25GrJTVwqc37zhFnqWdW7mxMqsCDJYzSUMJDuDfANRNor2dMfHH3R6J3xXXyRBcTg",
  "key28": "5iFJ2Z9j5C6aMorHAKo9bwAWXsKwc9TR5pCYwSP6BZfvJ7wFgBHZBymfm2NTbfBYNk9pLgax3o2v29EfcZWGDgs2",
  "key29": "52rV4c9jgW3tRhacMt1Qvtz17nqbSAAqkWivvv964MDGQLTaFyb3XFb9edfVLr9zVMzCnHav4pkJ4XNvozRfaMpV"
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
