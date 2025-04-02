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
    "4hyrAmynuF9cbZ3sAurZyrCHPabuYheFkbNpDXmuoeWK5SrXxW5HUdXFFnE3JmfCYrBxUyTpU5DTqDvpfb3xmsKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjA4PBV8cX84jt2cRB7qPg6QRY1GA2PdNGEyvfQxAjSU6mfCM5kBXRUPeaUNo8EpKsLhB2E5vNoxj32sXfddmSL",
  "key1": "5pFezj9ENDe4xLEcnbBjzjRAG1jR7XfK3MdfBervSYmn5946NvrNJReyYwYw2Mz6HtVgSaWBVGnLoKGdbQUUmmSu",
  "key2": "51BPfM3adqQKVktAU2NtWgYrLfGCKwwgobrss9hkfQiti8S8CQ5cX5aEDVDhSFpJGdXGCmNqVLXqqk2VpbF4rzBS",
  "key3": "4br9Jnb3MFyeYdRgugfiYDTM8pCXMUtwNnhvBsx3TAtVZjXJkoL62RZyQ3FvKmGE4nNFhkELkZAUaDFTmBsPrUBM",
  "key4": "yZ51kRs5Veph69Q3nz1g1CkP4mJjQkjviv2yZdMHHcf6UUqjc4c1yZr7QK2JGu6vHZPs48ijeVQqPBTy45ppjmX",
  "key5": "2ZdzotXQaUhR6CXocyN3fHCpzSXB1kX14S9EndUro6xP5WR13z4PWxzkZcaaYKp2MDubQBRaiDHuzqk4xATjpAUA",
  "key6": "M8Nm1CT1vCXSHXKP3qb3ubZwkPUsMxfeZojCGXJJWmMDA5MQm7R6iBuDrs4J9TsSQnDFyro4iLJPky967NDWYXg",
  "key7": "2CX3N146EMxWYaJydVite8cSjYmHJKp7eXaCEHgvVHeiVhfpXM3NXxsrq4aNxM93TKvZHY9uBDvqKSeA6qy3c252",
  "key8": "5M2To4jJ7cXMzxkt9m6RyNrCHGz4UVyL5JzdJ5GsfuMj8WXNaykBhhSd84wfHrcrsrCvD9FkyvLqiFfTgdGvrRKf",
  "key9": "3BKvXU4hhEPGHdFiM7ixUHBzcmrgY4tmExALZmW1L5tRPKcyXK1jdVj4ezFy7ytHeNT2oNNa9MtYdpyyRcx2UBTG",
  "key10": "2WDXZd8qMHr6v1fZGhCe8M7RkePNSDxhG645TYgkvxzPaDbVpzRhor9bpZVsRFbzuzayLaty1aRUUppHFeALaX2G",
  "key11": "5n3T9sJfXQjKjAT14URSFZDmXGi4QMcyzVS91DcaomGL3cttvgZk5tJxXFFU6Pbf4gisQsJ36sY8CFJrZbz7MJ7f",
  "key12": "4EKBqGLy6n5FtE9k4iNiQfZhD74wVUymRq3DVzP4tw2RG4Fx9rfJXtLQPMMTV5SVSD74YGLCMGMsRh3ckrVivaU7",
  "key13": "56LzeEEjetTgSPZMLYBp7YYwBSZrNTXbcjTneSq9WUUceb9nLKu5asV1FqXt5GDVHsCnicbDvhFkHd7SYrb4Wyua",
  "key14": "n1DYK7Y9PXkc2wwZS1FnBmSxKUv2TPEtj9suQxZEtn67GiH1wVfUt4D12zoWvbmxzfQeueDnRi4fzeAAkLPbxNJ",
  "key15": "4MH3YiK6affBwLR7GcTt1vqTEcabbGrTMqVaa6kyLSRYBgcCndea2P24PRT23R41kN5xTKTPTJEFy7ncC7uULJq5",
  "key16": "5SRuWUs2sfxpafvQKQXpzbeVCAwdJtdgCatY764wgq8LU4TA8FruqBTWqk8z1WYW2PEmkLb5gCHwHK3w7FknzuVA",
  "key17": "3Copt9PFbLoVPJzwL8JGHWGwNSjG46WyDLxE2KrNCMewGxzpX5bfcMWUKdG544dio9UJnXsD4vhjMc4RzynrA8fx",
  "key18": "2KBCDA5oii4fvjo5SsHZGMQCnFTuCpvR3thyUJ68jzmg6g5Key7WM42j1JAjathgSCG3xVvcZwhsacGGb4VAP5Dj",
  "key19": "LRGWHsha3t39SKfyFqbK6ET1HH47rxmECVQBDBEBKoE6uWaQqF6grguHJbcyHxSvmd7NMp37H49prQMzRNSdfUA",
  "key20": "2j2ZsmEdKYPNEP3HHoYzPomZMGozvrbfw9fZswE2gzzJPEpWb8RQA63S2YTMFRazyeGYTrZVAzwetjsarrVzEfYn",
  "key21": "2ZeF6cceuFiE6kPXr4r2GHrGd35t81ZWeQtkQc1BzxsdvT92LdNTZ5CtitS93fwZf6MgESs39F3VMRvymxWsqkff",
  "key22": "5coDCpi9hVouhV6oDEQuojFRXSLeaNSqnLZV5VAE8WfD6o4wbQVNSK6KJLKePtEojQrFJscMsK9o5RhDqYdJnaUe",
  "key23": "4EK8bJgGvsxbNzNVMVMgFeKrqhyhSgT1z1RMGuxwaWxDqoF8eyeSM5SevBQ33TLgm8wNmVozQf8dmP3rkS7nJik8",
  "key24": "377cJwPkjJJRBJw5WjbfkMwsXRtHSGNrqfchwuWvmbbkYr9x2Thu4q7Us9AxJftYZ9ZnSHY7MwkyPX2KmKJePhPZ",
  "key25": "2GdQawiP79Mubo2Q71fCy1QgBiMLvFZw94gign6tAdpAp79Q3QyKGjgdDNmxLmoiycPCFhqMkAdWsQDSAydUgLaX",
  "key26": "2M2aZ5PZBMHjjPBi7ykGjCc2D7fTwPitWKfzstEFpPH5xA1eTdNt4SzeUBZKmnMDLwxUTXVmgbukLZajWefVC1zL",
  "key27": "4apN4nVScMQvSM4bgqxVTwbTsXknQQpcemcUdoJ9rRfDABdfcuWDP9MpM9wzn9s5m3VHm6aSfFCLBj92xK3Mr3LM",
  "key28": "2A1HBJDXpFtoBQVDTVZnoeUAQYL3oc4WvvtMTuimetrJWtJBGpxiLbBY7PLAKV4XLRDS9XXjtWbLC244jig6JRaW",
  "key29": "NhSpYQ77ACACZcD8YnCACNpXfQ3aYyFjeXds9B1s5yyfsaKJeMczer1TeHfqMu7CPqLYT8G1ddS5smcUj9wfGad",
  "key30": "2RS1nsBb45soNySrxyrPRoUV1WSuX3gJAXbXp9kWr2xKBtDPhcLqn4xG7fXVPNVrGSDkcbtfdgrNcgFZ3LYyg6bu"
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
