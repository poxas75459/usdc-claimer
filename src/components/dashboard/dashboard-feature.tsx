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
    "4ZirRXCvyYydgxfeG3MwUQhdvRbQPK4tNeMmguetEgRUjxvQXxA6ukCCxr1X74s92wCb133hK3vfLUPRZzg7hAhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFPsWypRUprtWQSGbGCyZompFt3gZqvsunScotP6cckkEcAUHEs5nqPkhFZhU6AMSgfwk5Nt7eFFjmfvazitAdQ",
  "key1": "5obm9nsNPCgqcp5TFNjyyS5oWBWKUBw9iLetYeyjS55RTWAbTPyFb7rqCCQv4wS9HMLD1QwpVv5AJL9gv2j8Tpu5",
  "key2": "382xn5ii8iB2VsY5Xxu1LNrqy8KQHh5hL9hdfdvNhsRUAAq8sWFaCGAThWCfLHj7N7FjTuYTs5PQYCHQBBTK9wLV",
  "key3": "5gXge1XqEEs8qe6Fh6VWxQ7QZKtBw5P6zrV4284hefAJnBJkhEB4n4oUDSwquBz6i34CwuogU5zgTxVUpN22Yow2",
  "key4": "u1cmQXJcsxad5j2BPBBN3gcwyDdnnSkWExcoZby4FYWKBqsmza5UW5zWitjk27genRXeoehgsGtkna5nhDPDTa4",
  "key5": "5V63m2YqGGnM8DM4a9MqedZPJSE8TiFdzKLqUtT8rUmAqfvK8uJX4HQmgzDpEVSH6ZQmyjFNP5Nm4csLwjDcgake",
  "key6": "5PYhfRqteZTF9cVXwFw1vHqfJFwtpisv7i1E7YV3JvoYRo83z4bhFPA3Z5TbPNoQYZRpv1fmhbC9rXVyDLomcL19",
  "key7": "3NGp1Tc7k1hfxNy7gwTPWjCv5zuF5Vg2ZZfm1Masid6FF3qTxaoPELdU13RhnTRrb3wSvoZaoGzPfDGtvAAMxaq2",
  "key8": "4RjdtcbA8bduQCaWjy57JvCq2UqeHzCz6BaBUxgbZuvWrzbqa16LDgvbe7W12UaaJrQ7A62vuPyEoHXKUv5RsnCB",
  "key9": "2mmkXCCEQ1yJLRTTV3wXsJE9yeb1QgCFrTdyc55z4Zih6FADbHqgF7q7TdN73SDm4batmo3HfDWcv83j5MJQm2bD",
  "key10": "qc8VpueubvnxLUgtMuLVViA3GZ7ReDSNpCNsc1wnMssW7zsCTPQQjTowj2R2Bsya7wCP3KkMAVsoaGbkwr8ZTGR",
  "key11": "4mckLzqB5ScTFbLY5jVaj3DJ3nkCmhWD9SsK7V9CNnJUPyMMJ7iVHeo8iZSh7BMeyRBeYr4pjdj67gZtjh9emTM5",
  "key12": "3ZtBtXVyKkvWgSyg3T4uWDrTnLuSYuxUCEEfg2Xxyx3qiWWNhXmwEG2EpVBGqQqrhUKvU4dbYcYVL94z8fezZszT",
  "key13": "32m4yhRyq9V2mRytCXBmhoQJrgjRhmkJqQz2BUWMzpGJrCD7QvXLGzz9beiDTbHGbnPRohfkVvagqAc1MerSkVHG",
  "key14": "4mkRS8eZvad8KkWBN3Eo2pqSxFpiSe2Qh4q8oDDri2x5NNWdJafwqhNopcxw4gwdT8bJbpvb8RG4QREpL2Wy8K9h",
  "key15": "2o4xbwieuV5hYHgVuwgnYqRLfbBpcK368aaQn4UA3kxvjwrb39cNVfrzt2jMxeSd5sK9sFBchTtypdDsQwW8tho4",
  "key16": "64VhiUaWH7WKDoipxxB97FYfgPXWomCbF3yg2b1eth73smEQDRcmjpZPHjDVqpkTpHKNpmkyKKVmrYaSQyMohBAZ",
  "key17": "44A4EDZpEKyHMNQiQnsPbhcNsyFtckfbzdzdMoPg42PjYeCvJRfgv285vJnQZGLp6ZHTRziYen94uX66n2ubwqS5",
  "key18": "27envt7AqrQ9jDELCW9KiCV9hGujnbrxdxscyfoc6NN5rT6Pt9sEWB15GGdwJSXr5LKFUzcXzEVvuCb25WNMJcyN",
  "key19": "2AMWyjBqwYBvh5r8MHtpTcozqAPsZ2S7oY759gUrTMZBukuXEs8qwuFSdoeu1mwW4kdqw5xGF5TTuENyctwuPcoK",
  "key20": "48vWFpmViuo1FnkyWpfT5ngJ49ZtLigKrLK5w941hohAuYC9r4zd3MXtivDFfdUVLLowqk4Vbd9pChrg5aFPXV7W",
  "key21": "3scvvocAEhfW4fTsRCW2W3hPUKyXUk4KAu2AQiBWYmqw8TDoB7ppgdZ7ZYC57AJBrDTRHh3jeAAffCJthQ8xEB25",
  "key22": "2QjvSWaptBatdPCaksWBowQMWQJ7zFovmJzTxxesi8nwkbugWRL9PwSkkwLgrJbSAjReJ4sokzt1aNDh2WoPpH9w",
  "key23": "2jZ4saG338us89MLQPujDGuU23uHeqdDFof62hLeUoFcBxmET9aGQm4UM1PfwVXzeC1mTnCETeok24bdiEFm7fgY",
  "key24": "2t33hZiACLrmCPgFBUDEprghaAw9EPxr8UHWfiwzYKJNaVCMNhm9r9zzoEWhQR9Nnew8Cpidm6nzXujsPAYcTgLz",
  "key25": "23KA5Zqv5R5n9LZqFEsn5wBUQUqru4YShufYvWkeeddy1DPwdy1dLqDeaNpRTVstkX1eZCg1g4WAnRF3JFJP8X2n",
  "key26": "3bJHe74jfzATqSyNLizRzBZvfHhGiSy9PApwvTqk9FzHMTWNh9W65nvm8rdbRCKwf1ukpLYbvG7kG7svxf89jegP",
  "key27": "2468F83GaWDexEszKr6fcRiR6zYwqtUKCM4xJAb6A8Ji3Zzu3dRSdYdmrTDeeEDQnMto4ExTvxV2ycrXe6tNVW1C",
  "key28": "4h3otFD9NPbUJanVYWGch5xF2NiA2YZ4ay3fwS2CvcLBadqgJ9zpBmD6ffS2fyTRvarLviHi8rbgoBLt7qjNrcJL",
  "key29": "3wYpVRCxE4aGCtzmGxndPBBmAhmVWeMHsJp19iFfShvjQv8yXHN8gTP598KAoqc2Gvbj1KhtY4cZKQPquzT6bg35",
  "key30": "5HoXpCvz7M1UUa2Lq9VHadptEm2TeKkiqZXpRAYSWJ5Ktp42QC8Vvh7MuHPFh4HvvRsPDxMBGBMRvoEinccYKTVS",
  "key31": "5QTfRJYSaKhiqzr6nm2PUPDVdPQUxtF8o1ZQWcUnM715DsY3wnFrLvYyfRGGbb8mQUwRfLi3D5GCAZQtqQsH2hsZ",
  "key32": "4aHHiC36eTsBvwHSPJfEsMDBRMCZ4tpZrZjaL1APuaYPoSuQoTd5mHDpSTPGtxeTggXYFznJB5bUVrwxm1s9fSM6",
  "key33": "4XrsauSUpy8S5ccFjNsrH5ffDBgkoPXyhAYWKwgtGD41Eryu9pb2Y7zsdq3B3UQMbGKQ1Vg8vQeFffZ8tdHfT4Rn",
  "key34": "4eSSG9X2r7FzE4jkp2ajwvjvH4tMNRYJK5wjVbDLxm6joMhWQvwnQfGiqudeJRcZi5XWTQonDZzA8jZ682vRBbn6",
  "key35": "5eL6ouMi9suRPQmtPjrfG9wkTguMTeNUhMrExUEjFr3AShAB3JEZKWxKDTh72D8LiEPvVgD467kg4jj9rpyxfxgG"
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
