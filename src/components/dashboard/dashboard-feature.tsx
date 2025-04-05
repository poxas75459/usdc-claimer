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
    "5SSVuteMnfKog258uoEazPwGkx6uS8sqvWdfkVDM3ABHcqYYGc1Hn4RRyUfEQZGkRFtka9ANM1G9cvBPAK3RXXoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDCgpEVm1NUzmLGAswL1RPwhZSTXP2sduzf66t253MUWvfvcxoMwYKVUTBxJkV4vMiovKtNSD2Zi8nbMYhRzAvH",
  "key1": "3XXwQstwVfgkrDYLa4tfBRhiFzeJwPfNxwohwb9GreCKqAESSEsR5fQKKCnQwh8vYXNNBRJghoGnBBi8dGZhEuH2",
  "key2": "5ptRoBF5PL4MudHthmHQDn1DB7qbFoLnH2753FuN5FBNA6ZXmgKBD37i9sCQKtDEg7Qqn6HVpdz7EyRGnTNPwesB",
  "key3": "J1sZFW71rPLjZh3qpuKcR94CCjYhMoqKCFkg1Gy2LedNNqagEobR7ZBXyHtVTaHRjjkuFPjfeTCCNHTeEKPfjvz",
  "key4": "4BicT7AdGWr5cRw8nDTMHPVCWnmnTiYtqe22YeLsJsXtDRG2au2G73f2Lb2Qq5yyviA6oMNKep3Sm8hJSBZSP3sy",
  "key5": "5BkREobuAr2X859ErQ4oyjGoh2EFJ2Z8HsG4Qkv9p3P2xCUHWmdTYNVZirFHEKCeQPzNBsQpEqRAsqaaYHDH1rAb",
  "key6": "3Ki2D1GKVKiVky7ibNfNJ8cXXgetX5wf3ufyCnGH3EfYSunWDa8nXbwWHppJwip1sUB4oPYamt9GubkXDkTFKJqN",
  "key7": "Hx8mxK4UKPTpUELjk6rLBx7zn4G9PwSzfLi3McdbjDnTKN9nRMBUeLzepYz6wWzSPPjetv2PAzCVHBsN9frDA5u",
  "key8": "3Yj2ggySgvLiADuRNBA17WzW8DQQmgdAAp9fVhXAHPBzfq6qaP9L7LHSL54Qe3ed2zCj57qgPEvkVTr2dJp1UpsU",
  "key9": "2yZPXqVDUv5EpEN82pkKfPF7QYMj4Cf6epcwrMcKbrPb3tTUoMLAQYBsrsCHhqt8wZMoS1x5jRLc4bctNSp8WXoY",
  "key10": "gyNnizvtFoH8axANuimU3Y5bse2TV9CVJUcSsmvov89PUf6AkHWGwDH4QJ65rCmajE1Mrq85eLdsw4D2bqPS9yH",
  "key11": "4hULdnzBvw19EcXFNuCcQCBA35tHL8dv4FSPgHQEeBvxdSNEKvsjntBesNgu8euemWpNZQk5ZccLiARDArFuJoHp",
  "key12": "5v7Ai279Vhx3exLxxjtN7s2r8ntDcrcQqe5wTxHnaK13gawcYGZJvUGu1b4u5SRG8msrBpvB98D8zUdSKj32nzYT",
  "key13": "3dn7JqVEageWZwBcdzxPHjq41QFs4koD8Qy9kzgoysfe4UX9yrYZFGUMszU3NgjnDpenvV5Mstb5nNRWGArA1LEx",
  "key14": "2UMJ7EXonvNocNxAbTEosUYVM1nxBNvopF71te74sWzaUqyV9Lurz5FFxuAzKxTH8i3pjbzXjrJCCSb6ErMA9cqm",
  "key15": "3swztiUbC5i4Fm4TLqm59MSM8MuSJoBe2SPkqttNLfzugaeLpekDP9i8JbD9MTVSjjanJwt9KdZ45SEMBiezv3XU",
  "key16": "3igFkVyBNK79nxk52QYe7Ak6yXQ2EZLuGGkahXW6EmacrP9Ps8VBbaJpcTKez9cfLFedCChmPCuGat9mRTz3E5Go",
  "key17": "sU9dA39N5B7nBxoKxWmM732nbQfAGw9UJfMrKSdSV2HTsnjt1TxUkw1nMUnmcdmj4JD25HYKEtGELQZxetdri7F",
  "key18": "3opRwVRTVnKJgqRAd7gFirjHhcCgtnkdzXjNXNc9iK1ZzcgJijgc1Qsm5GjnUB8XFWiGJu8P3JC7FK7PR8Qxd9tC",
  "key19": "4D27r9tNRPQjEtLjXApnyTYsV2zXMNMHLnsqbcS9H2LLykAagzkfuB5WrKq5w5h1LW9XVwXyyDPxf6RUm1TUVPLq",
  "key20": "YHr8Hy1gw4s6asWVqzFh88JGr81eeR3p6qsoMZKpkf1G54E1TWQRhgje4CeSk6KFt5yQQNPi23TSRJTg2YrUd29",
  "key21": "39Md1Nv9xjm6VcnaVkRuJpFa6RMtmattLuxb3aAAszsZJvFo1r2ctnsxEGYXqw2LVuodhAqfnEqVm5ccg3wi5zTd",
  "key22": "3TK7RLDENLuZL7NiJJAJ4CvQ3p6ZbfytywrTL1eMXcnezp2VkKy2Ze5s8hJQSwtCru8kr9zdC2ctd9qcd5Sac5wF",
  "key23": "59josszHedeJ7czzhEudr27D5wUmP8rs6djWLNyW1HsM6fbGPvxejFPqTLCewxmerupyBs92wWABHYgKAJhfqSyT",
  "key24": "5QiPvbm6UtXXbLqPKj1ZpaDhc5HJqVPXHfCw7BLYXUov7xr7r16AmsZZwJ35JatMsHcnw8ijXUAJLfScCzUsLcu",
  "key25": "2jWjiWYiukC2QdLjeYtN7C6YingepCZUPHjrqYvYy4HtAsLf3s7DgKybD5EAD2AiGhni4TqrU11pE1N89KfkJKpt",
  "key26": "aPpAcZmjEUWtFh91JNLYQ9dqt7UsB5y4cVfkBe4sEWLFbssLobSFhvjY9p7WqZX22wezMz3aDVatkYnuAPTyGFu",
  "key27": "3zVhpQXHFwMT7xvjDJzSrRSV8NMRoo9njSNPq7NWw6fzC4ahTQX8cAJ1wHXo19abWscMWDb7iKUWTeh5MRkqT8j6",
  "key28": "3RRdj2AqCouBYDcVSd8GyeZ58VvRzATRtQzooMcAUP9N6zm6Jfafauozwy6CPF7fvBVcFQCjUNqFifiJEHdzHhE5",
  "key29": "FhD1c95rfv8AKLxvL4rEgZvJH7CF6tpYAdZLxRt3DXqjRG7y4G8EZu6kr4L2DvGLsRC1T47Hys3aBWRWUVbXd2r",
  "key30": "56TEyuFNpJo2Vy7vwY4hBUU4G1humRVPvFSEikgzuoT4BZbQjk1xSiCLro89BwkNLh3nuoD9GPnaBaGJXp1v4LDw",
  "key31": "2Hp3hGXC5D7hKYP1PRh61s9SQjgCdBehntVTMCDhWc1bXdCvmJ8UMAJeVuV1kpK3wXxvW6oXANQqgC81m8JzgBVY",
  "key32": "4ZHYJdbdEt37FCjiQUh2zVU4982eQGHpiAzWxYfVqoi1jiofVTfqD1k3mLcmjwAmwNeBMutSRUqa9Kj5ZuQwYsxH"
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
