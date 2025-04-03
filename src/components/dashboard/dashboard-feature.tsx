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
    "26JCUKy92Yo1tFa4FRfGcA7fRKLJrUtjbdmH2ov28BRQ2TxGiyP846pTfP8bajERRuibSyFW8mguLVtkoFxTZW6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JVTj8n4Qj7R91gAAmQQZB7KrRwjMkHRopkgMJPV6gsp7vrJmiYvmppmhqB9z8afi346dz3aKt991KCfQWW9qyc",
  "key1": "5sagaUZrj2JbxHi99eMcqwNs1YEuVE7qfdJggghcjLNVVnjJPF4vuooaQkiBUjkfcTavbhRf4eS2LUEnWfPtovtD",
  "key2": "54G5VyK7UbKPX5TUQr5PJZGRZuxEvfmTGtGBeDQ8oPHHtrHnNA1nw8YerV83D52rcE9Xvzu6bCk2itbCTamsqn5r",
  "key3": "4czmBTyG37Thb1Jiqrx35hkVW1JM6fcTfZJr4WT1QjWHqoSwHGY2Z7KoX8bkjwiHzmbZMBxgCxzE88TqTBAP5oCk",
  "key4": "45Rb8gHt78KSsfjUfmaJLzKKYMtLoEztCAuGNzJZ8Qqz6qJhspnMD1c8CfzKppNfYVp6oQ1w7GnWSi6zarLNuwiQ",
  "key5": "3cQ4wNefpqd5yqvFSDv4dLUFAnSppsJemgULz2MqPHYUu8Lus2h1PsTwJYhUadtPy2jXn1queBAAzHv7pN2GUkVD",
  "key6": "TyUuEFTiXQmAALjoHmMrTgG2tDdmZ1QJSnboQQNT9ka9d3CufAFr5HdZyp6Y3U6f6ycUz7YtSJGPfbvMcHEyrnt",
  "key7": "5Qvr6bi9HzsMYgSvX682So6BCyieUUfJrzPXbratxYF7jUw9hQRa8hefpkNKHSKPamJWsRTmfgE3dtG9bucMpriK",
  "key8": "ewWDQqMzdfZw37jA66TqQDidaJaGPVtHseqcdXmzJEqGJyCPUtYD6z7x6H9aP14GJVpXnRvdTidJhUVZ1U3TKvf",
  "key9": "5azArvdfMonrhJD1Qyb53Bk69FCFQ1PhrvuqrmiQ8AitNLtieqQAfMtvZpu7j3PPRej91G6RnbvRY6xDMvCRBK8i",
  "key10": "3EQRZr6waHCgnodjGpho3zYiMEJ5sopGJNwe2gVMwupEvqwQtKwMrtex64Ni46RgGfPHSxqfmeNXAMaTqQoKFCj9",
  "key11": "545ZgGnnsoufBkV5gk1A43UKU47AhJhryKXEDhfjEJVAUGfKPhmui47QfhYcgnrCRRCk5pNxe3xAoaL7CuXMSQtF",
  "key12": "2CVe3vyfzQG1pjrwjvH1BfSweWGY9AHBhjCyNpvB1u3RjdCFtMPDs94DG1KAaVZbc5H4DaN3XUJzqCraZPhSZELM",
  "key13": "4gbrhLCM1TQh1rkR6YJoADLejWN5ELPxSqwVyTcHRZAXKV6MkcszPRBDYjtnMEcbShq8QTrgcvNxxZxqsTk7JfmY",
  "key14": "bjHJf6AB88ZFVXVCDzd7caTSTY6XXsU3qBM4kyFWDiAwoji73RurWH5Xiw5r3Gb7v5tCqXYWBos297swnL3AERv",
  "key15": "31C5S7NhFNzQDJs7amKqQuHw7omij1NQNBLTW2D4n3cwpSKhVGuKoiKKyycycwi3CoN6RPu5nBMEeoaLqKg2F58B",
  "key16": "3QiHXVK3EvPWMNbesv4y7jGhcyt47EZnj7v7SsmvrNs8PTCRQ8Tcz7FWUgBxi9mMHS8GtPPCKyp4DYAzvEFvGCLa",
  "key17": "4BGqcGMoRN5bXCMXsx8mvshd9hCES6uCHr3fDVdMWwKFtNpmpa9fcmpeS9uv42HDGfRt8M4SZTBZuBaqKT9oG3z1",
  "key18": "4Bjw5oVEK5ujfyP5FBhJCUmHWXz5SB4VxXg4MPsQYeWAixTFEr4BfR5SNrn8mmiUmgowyVmHgVVgNwqeV7CiMcvJ",
  "key19": "2fLWCLZJrbtZpBmQRMb2TATDZ6oEkj4Ty5z8TC6NpE4jj95mtP3pCAMv4AjfYSGUH2U1droEN1qoJTWf1aPcbkix",
  "key20": "4iS3SR6gFFETaUmPEoSuLh3cTpx8cmeeMY2PDcphzqG84PK8ZB3F76yZWHSfYbbSbynQ2D5Zy47xNixwiPqPWT5",
  "key21": "4zr32cgLt8BBz9KqF59w9u5qcjYiosQPbZ6j27AcwPW1aw8BuL5WFSb3sasdfxd6Cy1DRqV9j3H74RYRW8yE6GCM",
  "key22": "2zMeW6PnBomN89jfhLjLkgwwwg9YKuZfeJ3LRFffJAJRciGr9zjCzjMR8Lpm9uchENKccmPVqk1ogQ7aAya6bxB9",
  "key23": "64a5jr6cztP9gG81sNCvgHDcV4ZAWAQUEPjbZkFpNKS34UTAiaDFk2L1ytcohCdtCuLPfZeY659QQqB5Sv8N4bUP",
  "key24": "4n3ZZoq9G65XWEyhTDWPaKaYPgQbwDrYpgsHNyiDGNqZKv8Q1xrbLPkjSAmpGH6ieKRsoudGFYCG2jzQBqciinjv",
  "key25": "4DVg68UoeRbhn4QZ4eQGhnt6AcZBzqNa7ugBjof97Lynkmz2QyWTijfos7ytAX3F5YAjPfByVt2bPPHRjBy9gezs",
  "key26": "2LiH9cpJzazCcb73XGMGeVnYUdb5dr1oHbm5t3hru3GUpNzXSYFmA29EAnvqdKeABStprbBFscH6sh4cdY31VA9n",
  "key27": "3Pjh5hSQYfgk2VGTgQ8VppwwGsAGXy2nGXVUnNMdn4LjK39rjMFsqYQFWqZT963LUS7sL4gdQDum6YRqZYUo2QPe",
  "key28": "JMJFW8ygrdcmfSpshQ5SqVQbTmQG55uYYfabbcVvRGTmMfXfztWoJ4dfWeiiHreyFdSQ3pSu2PPwJQ5BUHReH7n",
  "key29": "2RLXW8jw2yEaNzKjGcucGuWMAaRkyuExu8Aw4f69SQ7wSWETkKhZ5vw1qV7L2DFeP525P8ppe9U2hXVeXbxsS9o1",
  "key30": "HVuh1zdLA7YGUL1UA9tozwN53VhzMtysBdwRcV2J7CQWkxVitWHuR4qZFZvgPwsE7Zy3oYa8gXW4aGPk85eWqzo",
  "key31": "2rFKeMb3xRMWiSP7WvV5jacaiYhJyHpyiE53CqkRYNqX1y2oif6pJ35bNQFC9y8bDHtdgCZ2NKaNsiVMqJTJpA98",
  "key32": "3dQuebwivAMD4jPhykLXRStNDg6XwbsF7pQTTc6kNRu4QpzQSaFzxir9iyCj7QqWPUXu6S1XG4p4qTF6fgWBPCDc",
  "key33": "3ZxC1nbYabssdV4GGdrpewtUSpdYdr9iGETeGuMBjD48q5992jppkazhyAdgE233q7HoVoyeP3rJEnmQfG5QnShY",
  "key34": "2ndEG8HirXyFzTHLnz7pTCHwGB88Ci9iwvSjLcdoRuxyazPfWwUv7gcNeNnYfsRf9oXodN2kARtQWCgNbAKUYuNc"
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
