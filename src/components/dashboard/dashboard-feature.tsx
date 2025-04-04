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
    "3K46jYEDgymEvasPT7VoXjvhbqRiVhpcDWLPJ1u6Ud9m4q94C7Ko8yyJ9Nq9gWFWkHTF8MjoaU6qM8uzA4G2u3QC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LdxMEdbbttqT53VWQVoqHfAWyjfMrDoiFtiwZqDaj6j943veijkwTn84V6oE7vGricbUXSWrfxK7F9fDd1BAwW",
  "key1": "26yHaxCmbaRvipoR5BG8Z8uW9ipCqLbtp86iVaur4DUTQxjjpiGjgs2aE9KxfKZwz2ZwtvH4n6iurp2PdQkGEYn2",
  "key2": "teaDWAdKpVYnLm3ySZ7AdcrTQTz8mcFS3scYT1XkNmb7fZQhFSHRnhp2SkX9f51xEroYDKWNJfcT1SBvpyuurce",
  "key3": "ktqMUuVmTTdsT6gZf35USyKbrSeoSSyaSYt6w7ojTU91yRwxFnoogo1qM5B8JpfmkinG5dpih1HzSgxgUhwBh3D",
  "key4": "3H3uPXsTpfMi8PbCRxyKBE3xF2U1bE2cU58vEUvX2wzHXXd6eFZRZV54wdgH9Kmh41YzxCcc3Hqz9L2Hm54X4DeX",
  "key5": "282kJAwX6rSmn7QHDzcBcr5i7t2oASpgYDX9xFLKVV9qhPv9ks63L5hDhzFQ6tvi1SxSmk1ESpVz9KsPcZSZtHTj",
  "key6": "d67V1Zi2nPTS1bwQVVyDv8PY3Mfjb6nzYGTdbJUnT88BbxK3RUGjKf9VBJJZA7pE6KAPhv77GkfaRXMEDNr4e4W",
  "key7": "4y6eAo6sKRePhZPCrKMKPecg13sqZVwXz5aq59QEgPGNSmo51cmksRiXamQFJTMCq7wQ2gQVqDxFwYzPpmzhrKzL",
  "key8": "4MY1hqq3Xmb2q5pacq3sayc92aruxmHDEx5nUBLbM7R4CnABGqrg6Eb6Rd8zgLSNLbWEyBER4qFudZHx9N3zEQMn",
  "key9": "65L7q676StR1CmVxeyZXiwiPQrMPCntHJ7h37Hg9Egy1wmcwKv4dSLN9wgpwaUXQAhdCAUncocVcvdTkaERevcYQ",
  "key10": "3UUg2spYvVjHF2hVvJvHqAYEdGrhGxHXy2izepjaJTZvify8fsCK3nrtXrLKju6LZ4AWF8cJQoK2JQBWz3TpBj8E",
  "key11": "4DaG6DoJ3tEHcf2y79m5H5JiH794s98JwSXcyZ64befibjeEcqNhA6nuo9KVDi4x64XDZ6SCLPKiGT82LQCzwvn4",
  "key12": "2XHaVpxvpvPVnMrZWDX37hEEASUHGyQnZ5tvaKvAgFtsgffQcVXNty19JqhtR7uPhQnLBW8f89k4wYewZCq3LT7y",
  "key13": "5b7nPpv8sSKFdZu9VVhAkwYFnG6BGHVyBuikphAf1kjWoTycwQYSoBEpwduPBBeuUzwy37VdBtLZuaxptXCYjbza",
  "key14": "4vMmgHqW9XDKNuxyKNksB4hd1M3kfbT2zfd6PHvPjRS8CDvQMRQ7CcxFFXmak4pcThcVe5qUzoNTz4i6KhRSY99n",
  "key15": "3YRobxusuWkPddfwYXbfaEGkVtedcPPFyEeHVSyavWMJL4ndyXCNrmZB4VnsPpQY9LnVy354M5YnGCpgV5ACvzq7",
  "key16": "3kpvDdjzGozvsU6mLH91EErNTcpdoxZthKor9fE2bduyq6RRXEc7kW6dFXSkTYYhckKLWmoRFstiMavYckiv4sk9",
  "key17": "4e1CyQr94E79uD2ov9zmTL4vsFVdCvhEMSYqvSV63T7LQEze6iHTmxmQXyYgcfdpi8HbsRsicjKrUZp6PnqHXQDs",
  "key18": "4Nx1jMvyXt6SFWBFJxhPcuP72o2TDbpGxDRmNbo3poVo9Xa2zhyZ6n56nC2FpxKzpvKbmNuKLKKB8Lzf8j4MrJfi",
  "key19": "PWvEHqfVQGYKARGrVCgJBAX2Ktgmgte5JuFog1KQvjVyqekoxBSpX7rN7RHchLo3aJMawUQekMsAGt1ocfdioMR",
  "key20": "5ze7Be4A8t4n5jUntuzFLeADRvV5MAXrigZjv6qwqu3UZP66QEEmQ6waQ8t68ZpiLWPDyszEkARpXTQG39GB4vUU",
  "key21": "2fURGXyAUaU41otYhrRhczzz8xtLwmU157Lgj5jMbJVvfUhV4kNNFj6mX5PF4z3KgcxxtNzYSbNcfNhqbh5CnEwd",
  "key22": "zhPmEUY1G8QCc4cYoNDyBqU7cmUSqqfKXJaeNscHqgxEMnxxzHn8QJq8rVNCuueyBnxzJ4FxgD5GQgXvZLLSTXR",
  "key23": "3pmHmYrHDufYyxH7pn4ffSqRQGHu5zgMXmoJzjovEjztaTPc4VomTzgZvTyELuq8zWtq3APr6BD5wTS4XDmKQyuv",
  "key24": "3KRW2JgJKycK3d7Y7sbZH8tEBm4s6HcYPRb7JvVNrAP9irVHVKfkKJPL7cBXYAxYTnCEapYSYFe9HsMCxuyiF9Z4",
  "key25": "GYQmmdfER42sFXe944xfcVoVxbwd3wqSJrDc2m4P5ZN53YSaJBmijvrj3kNiTLsXgqFcJePYFJ6LmvcH58x9Wez",
  "key26": "4qLSTg8HfGm5giLegPYLCSrfQWq3YjVRF1m2EhjxXjCrFUCngq1fW2MuiCHFG24jyKX2o21iPLrE4vE4zZoa11mj",
  "key27": "3tEDwd8rkq9qbkRBjVjNS7TsPvrkfXQEcfTsg5BPFwRs9mtbbxhMWzgeh51TDYQP3dJ5dLva5CcbpvQgUmpz1n9X",
  "key28": "5s3mC8A7Lbkt6QV9THSGeKnADwMZsyvPYvx4cGXsxuoRkdT3NF3Hap5Tae5Fnp3w5fv15NsLMDQq8ci1fD8MK69b",
  "key29": "4rwaAriX17etbpvS1n6zUCQyNC7hKpLcQRB9M7LJDkM4ZUd3mXPN2cpLR5e3FEYpGsK4SCAaXNhSg61nyUDkNL4K",
  "key30": "4aRGYuE43cv6ysJXxuroSHyBCC8kU7jjuXqySeSfqAJFCMVj6dRj946j7Rsj6DDMPe1qdnj5vKFW2KwCPRkf9oou",
  "key31": "48wt6zYpiChiWb9XJQzsVPDfZMhueDiDfMfooe3pRnsHsJCTY8fomvvtnKRy3TGyb25dhFc7Q7VEzD1iRFGhixCF",
  "key32": "5MbYLT76Y4o1hy5t4NvPoD9n9KjZfQak31TzDPgzvnnBf3dTyjRwcWH3RJPTbdhWmNCH63iCvga7vYDyZkAMJ7gQ",
  "key33": "djcC8KmxMXX2AtR6q7ucd1vBYgV578rn54JQxze1rQuaJan7NKUKLWgN5VpYiNRJAnjKp1HP6pqDxKmyvnJCwY6"
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
