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
    "3L1STQd7FxtbXeqwEFfG1XEQPQmLefjKUcRWJLzXb9iimWyNRoRmLUKGzMe4LV7Cyt4xd4ZpKUs8Aanzh8NVKGRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SD4WtRq3esgwiq85pB9C182kdGe3UNMPRhaxarpNYuPF7qDTMMqpHz6Pe19nfbV4QpeaUJC8nXGkCRE1pwfDEK",
  "key1": "2i6cWofPdM8rdA8tgtxk57DFKMzrL42VZnGcbERi6LNo6gY2bv55WrrCPm7ic42gfRKFwUUbVMzXxyBaW5FUyf5M",
  "key2": "4SQ1DaUh9cT4owReq2Tz9cfZAKrMbvtnTmTKQevApWcxkTsh9RAQo3ScSbjxnFoAKUuwx543bHGdv32jrZn9aYW4",
  "key3": "2Hu8iZe4N6cePKmGjLkCuV3i2eva1YtLiUzbvv9Vz4878niJS3VtCfSQMAPJX6oUK7iTBzMpsiCB7caiebrcimyB",
  "key4": "vKb1AQW5qTTUmc45ia33uCcpmUjYYC8Q8cUcK27RrtvWpHMTMCgCz1Ejq5R654vgxSC157sJPf3rXiq9bgaKQUL",
  "key5": "2encBKtkfn73tqcp2STuED7yCvZaPwaeusBV7btPJG1oiXN2QEUNPznkuZ8DBizLbgTNAa9yfBNCizDhsKtpgnLw",
  "key6": "3Xs12LxVYgbK6GVdYgNzDJ9YDoiR7r93kffqjHHiWmDFTU3E6zxwXqr6bHJPC4x9Rx4JJe1iPE9bVKUm2K5zaRbk",
  "key7": "4krGU8T9WSHus7PFk9mqYys2ysCa4D1fxy76PC5C5dCKRTd9NnFswFhUn4SEo9CNDER6z4emxSVEHRMv7JBwxuGX",
  "key8": "5qC9L7cWWaQ7Qvs8vKMC2hFheDeXv4ifFWt2uxumDGqu3iyFUT5eqyjFMh5xjFLYsyi2oBxEx6f8AFGngNiLk3Pt",
  "key9": "5xiKTk32zRcXiGTonShVPYcb7qeZFG1dhPcEDa5BZ3HLCt9gcNMmcABqVVyr6kReGrkDY6LnY9jFdPhDSbJcCSpn",
  "key10": "2nJwTaxSLwD6h1tXJN95W1CqhEtR3WHaTE66v1MEobJ9N8oCevWua3Yz8wu64KhiXCr3hFGsB5Mnjfp9tmEyonBB",
  "key11": "3yYhWxpVJTgnyXovpVyW93UnWuf5UT7XEVwtNzwFDEynBtTqc9a2yd4DpkGbyYjMVEHdn8H4JoS9LB7HSvm9HqCA",
  "key12": "57DnMysFJ2xvp7YZBDmjQDeEJxkmSN6zGHzqifMKWFdzeqZrywHpyjgXo32bSebZL1TixEZ6nRQy9RiXfbf61Crj",
  "key13": "4eWzaES8w24YGX8PMLsAHFXF2ax9SpUDhU2fe1RQ2dtXHHt2CGpptv2uRpZ1rhdf48vxHQZR3dMP43zSp4FYobHJ",
  "key14": "2VbmRmw7USPHJysX9qX3Wgi5GqNEGrzYkCEbenxzAPh5vx4DSJGv199nuHKogzDcZpshoDYipbZ7AuDiCGZB56HT",
  "key15": "3YZNE9imV1cwYgHZudZiy3gtjn4adr9SsPFD25Fr9LnLzFLPDJPEvV3VCnAEhsMAiYdZS43tSvwGMV1sHuszF4z9",
  "key16": "C5wfQYxmLq2P8w9qu4tNTU9qjpM4Z32jSX1Hg5NSXyTnXCoUs4eoCA9SXLHLf8Td9qU4bFLFvHuaENyayGbCHmQ",
  "key17": "2j4pZwQrLSiQRjgJP91nphSLkbXAAMCyGVkBmPTxV45thXFneM4oRttyhkpB8oHWEJ8cHQF4NsfXGRBxNVvzeCzg",
  "key18": "2sikPALksYYt7e7m6Sjny2uSQWVopwuTJ3CE4FQkmKVoMRUSdwPNyT72deFVPXV5oHk5fAmx84tzp26cAtPYpsnQ",
  "key19": "3cnLkwNmTCJXSb4CxY2fFN3rEfUMMmCWhEYALAbK1Hvbut9oamcbiTE85zbANa9JcqDPmq45a8Gu55eSdU6rmQuA",
  "key20": "45ZcFoun7aiK4DT6mX3BdsLRmFJPVip9ayzV1BPVUunksaDrduVD1aU7tuC8K8eiRuL335k7DN8FBLaS5XCwoUUW",
  "key21": "5zDok7HLst8HDT2FbJQzMDuCQ6AxdKS8BdmR91skh6JnDkQN4W7bSjH8zQPHT1Gn1gUjW85sA6QDXkp3Du8iNF5D",
  "key22": "x8me5o5pz8513kBNR77pEq8ZLSFfWDR61Whn8HD3W1uWhEaERZrNEVf6mm4uDgVt7ASokW7WZgmvD93hbhQE2Kk",
  "key23": "Pa44tK5NbctT27PCwwZrWY5s27DjJetpd2dJRXuuSBYUYY9e1oVMy5jy1hvmAtzSR5bUrDerfsKVxg1r1iaYutz",
  "key24": "2Va2btioLakBY4dYB1wQcq2DowbuXhiDWj3SHM1fZDJHQiSDfpGNhL6eZSJfKwvg4qePciVdi7RfKBViHq5rcPmA",
  "key25": "YqzQMQNQtjYuNQCokJ6rrUJVgCnUpYmVZZx4VMiSbQTXdZTvidLYgzvxkBgiy4JxBhvp1frhxL2aRqJMMoBr1UG",
  "key26": "365YW3z2CH7ZEkybCNMipSo4CZfp3gAVyqirhDgQgAeRN2LBKN675dpSmswJmjx6kKjsaUtR1rqSXyzzLKGDdrXq",
  "key27": "66qcaBykXpkESfFS6oFL3BnXXv7K1xdLHnGfu8YjBzEeDvbhUk88cz6iMT213gyzfN6aR6n2NgqnLLHxthUAPQLw",
  "key28": "3w8Xbaohh4VBN9Y4qWSAq4JHeHN933XRw53dHchC6kz7JJHkn2pUckiGs2fRf3rEt1FUmMckpqzLSukrdzsUZncj",
  "key29": "Sz55cEVc2mNgAQ2R2oePgowD6rHCgMComZHTqZwkLkizr7LsvX5SgVPPU2mUA58jr1cHNffrmeRRgf6FjWMs8sE",
  "key30": "2ZRAMjLmqCEU3jFkFszwxaJxCyBt7nTMAmNybZSxzTmTduz9DhQM2D5JtjhqGf3jvSmC8KvtoPibp8TFzGsXz3J8",
  "key31": "4h8q5Fs3F7kWVfUQVKSYj6p95hthGEsLJk3Lndko9GmLrPTWj9KvRSbVQHs8SrhnzikGjYhMq12HLDnFDQ5L62DL",
  "key32": "sUEcGbeVdBQbAZPedPAet5e8XNGEtMqzubB2ASLa2q53yxzy4FxKnju44ejKYMgfnC9PErUkVHUFYw3E9yJjQWy",
  "key33": "upjiJeon2BUPNd7aUegiHhuXV7giwmLrhdg3Fe6kzKyNqeMezpxQSDfm9mPZ2eWKMi82WScnht1YjpFUjXyjbVG",
  "key34": "2enbJogGmBm5dngBBkDdTxddhXsG9cpCZwa3UEPCpTxxYuz8hydi7uRAW32iemB2AxyHbe5VFG7gUfmkB6PVLPS6"
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
