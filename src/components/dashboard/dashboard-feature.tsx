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
    "3n1fnPRFRsHFRLnJYediWssWHVuujhnsmVHLqEodXydyjoyxoKGnptVYjrGwn6VkgnwYzvbHtr48VMRt4PwFPoN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHtmvmcWRUkZRCYtXFACes9WSUuY5tG6vhk7BPcSnwM3gCeKaHJdnsKcK9WJ5mH44EPPQtaHcUVYfPjGyC4mjsm",
  "key1": "nVsp2ra3YvtxU4dGHN8yTSEXi8tyrmSjwsNKmHegDgfagqmYAsiLiQwVFzNnwCMJuLJb71akFSHdHPbKWBkEEPb",
  "key2": "3kjWhpmx2tsYzZzn2yUujzwkbMjCbLfVTdFSFrge5kcA7W6iQYahyZ9mHMukeWbN3B9jzn8YyZuKZ44GNgazLEci",
  "key3": "5MWbPPR3pTwb9E4W4iCa4u1UYjbQyi9E1A7iQZ8faJXd5XTHcvys7c1v5kks7EpdxCnqYWetTQk54gfyzwZyagJS",
  "key4": "3vop29DTqSWdWfzSpZSHdvj8QVcsjMfvNRZcjGap2X982uJb7NdwPqYotbSzVTTBUBXUvQjQWS9MU5Jm6foBLhv6",
  "key5": "5pMYJ41JS3qsFzQtCMK6Qu1vw9Fd4DL4WoVdncfLcZhdjF7NdSw5a8FZVXDbBHXWyLXCSQCNazA28mPdN5aaRA9c",
  "key6": "2TPJJm5qeNu7f4F77n4m4LwvD4JtqSwHr1iRk74qh3hnxSEQUaLcLhwbEPDoGQK7xaqf6Ue2fpvGThcGG3eEvqup",
  "key7": "5ypW9KWAW9wpDMv3fap4xocubSQBHgfEqs1gv7c52WWgzvwvgrcaQXdq4gypjTxsX5Jf8LpcHMjptmsvwV5UV2gc",
  "key8": "2PYSjNF33d91TKSrxhkucBpyhUCKjJrzqZEcAy9vpC9WM6RC6WkEBd3pF8PbzPLuQRyCutNeVeK4yoc3E5RE5WWe",
  "key9": "rAwQNrKjeqa3UvD15kcaTQFR5u5nF8RQZQFvzvJ4TWhQtkFVBf5B97UxH6LhSoK8NrDCmVwDSHegvoHMMU4qViu",
  "key10": "3mscykJeVFW4kRJgCg3F5Ma7HbZfK14jBVYGgTYubN8FvwVZYGBFUT6hd4sLWFPBVdMT1q4Z7rmbCgMqLH7sgGKf",
  "key11": "2m4ACE26AWF6TTbKbo9sNg4sVYweeSbkRdps3imnMC2V5vJkd4vQvF5b4BayMsw18xvMaLHHM1sXzqachwjyWZaA",
  "key12": "2Qgah4GSKCRHSP8DhqG1R2xUmAtbzJNZNMrCie2h3e2MFa4AFkEHD2FysT1nXCev2DYy1f1SbFvXsDHmS79DBoRm",
  "key13": "3RzR67o3j4xQ2FUr6WYNrBPepqR5ZbwdQYyqNkzUQAQxrxcL7isk6B36LbiAiuv3abvDBxFTe6JdKVuHzk35CjJp",
  "key14": "39paiT6jNcQhmpYRKg3QiWvh7h85sYbXBXAxTmYRuMjDrqjW7RvXppqh864ov3KuzUiNDXukxqumXSx4s8BmV4aM",
  "key15": "2AeQA9s4B3p2UBA2RRk4MqGdPSX9FVZiGAk1RohrwkarPkVX1njxYefjF9z9AJhMDDaz14LRTJGiKYKbf938R48u",
  "key16": "3PajH7hT5ao5W8etNbofVQQfGVeEqpupE8bC5nM3apc2SF2Dk7LFwgrsDNcywL58WYW6RbxrN5rmu8ZhQeQiS73F",
  "key17": "2T5sTgKaWB8DSXNtPKCTmDLp9CHgVHZWUHqNVH8Qjo4FLB6i4LJASASSoVjrg1Qncyfc1jDcsLFFvpRq2yo2UqLj",
  "key18": "2Q8ymHaEY23fm1p91H2TSCjKa6ytKNwXWHEvGq96ZertHPQtJHdQXUj4kdV8Fm47xwCw55zy74mQVTFoEjLSFuFk",
  "key19": "4fPpAot7vXzYUJf4dYHCzb3dnpn6hdsvfaB6Z4sBC1v3SahXvriPiy3TGwzDuzs9Ls1UeVmhLyFWX74eWLowUrK3",
  "key20": "2m7medGBab2E6JoJwfqsX3u8BoK53tYMC7aie31wfomJLbZYVZwmcXJtrgNwNCBLKNBfPneT7nMhdn9wnFCMnx1H",
  "key21": "2sYy6Qc5PTPFRabbX4NuuovzGdnv35Nhx3cj2QYEPRAn69jFTfECoCqPhUM92kN5pAnJzzT4e9eHs5K5wC9Umjx4",
  "key22": "29TKrz7ca8re3GXMDzbuAn3ccRZCAuR648gGazgS1euUvbmZLYNXijwvDQ2TAUxeDCsDXqLGGNR564LftAVcmoV3",
  "key23": "4Kqp4btXxDjZD5xZoCrb3gvDLhGb6SpfUXGCzXo9zyrU77FUxXaSYCqVHiPV7tYc5cfvvfgUGEN6TVQuDq4GnJgC",
  "key24": "4riVwLmTvAfzfBZ3SnHNaBG4DUniPEkoSB2b1DhL2rw1pXYVXThkAEBjFUZpUCgwzJ4gNCskzsSBB143H67gVmzU",
  "key25": "c2iUxjuEJWbxFdpnQu4XuiqyWGWWyD3Liu9FNkitF1Erh4PaJetB7iVR4A5Ya1R3ui4viLYTfA2poUMK2fzaVxL",
  "key26": "5asC4WB52gXmrEfnPUsW6n2uqE99foUzdTxP2NBwnv177ggLqTmx7SoPvGCJ6sATXJve5kZN4hqk5BSsDaPZ6q4e",
  "key27": "3mWNp6EJJfGMbpKwvA6NNXVj5tXn6iDiGpFPCtsHqzQYdv8SaYNFAnJaCEQqZjgU9mMa2HFiHi2J2Cr9sNsjVdh7",
  "key28": "3wm4vnCkr5NqGq6Wv8WxNqCdoE3N2an18unev21espFdvvYrjh7qWRjid1UNbYoRrmtic1xGT3mXwKo6634S2tvh",
  "key29": "LmGeKp3n4gvSgYFBgvq62sEXtf4BQUSbvtxdiQ2VsApDZSsrWs92SZDNL4bPfhFv4hAWMphdgh3DoeqDUvshogi",
  "key30": "4gk4jYrc3SiFv76vyyB8hfijDDMo7wYWg3QikV9HZbkwEE3FyHHG9xaXKrNapqrHfARw2E4qb897t6QM4q8UAkZ7",
  "key31": "2pia1FPRoY2xuBZDYm6U9S4HUKVWmGeR7GmFLcNF3g53vc3qzA7bFNkrK4Sk7ocbNJWoGMgE9wb4FYYVVpdC7b2p",
  "key32": "4BVkK4oe2PGsy5r3VyYv884hfJu2hUVzHPbUkCWbiunF49sRz3SgAh2o1rh7KbFvPHoziNFicb7eEGt4yJ5k9ukw"
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
