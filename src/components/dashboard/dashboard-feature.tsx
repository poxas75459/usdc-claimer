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
    "235Gce8kZwHq84KjH97LRP4tJh1hPvdSbHJNhMha4uGbFUmi29pf9L9fUazXpA7tjxYQQc4gUMRydgSaJrJeX94H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiwmE7fGC5DgVoLYAL3WA6v7wprDjNPoL15vxbsv51c1V3ZJHeywhL28NRduSXXcdPZkL8KfjuUSv9R63zZM4xq",
  "key1": "zEDaAfp6jK29vdwP6ptwy9pkieNPmc7LyK2FPv9N35B44wyar1aqijRy9JeYmL6pvzhryuiK9QGp7BeQsBfrDWr",
  "key2": "3aibQ5ktdGerjaPDN4j9zha5FJrSisc4awmTg1U2f7de87heCuctvxSAuZ2SDTVbVAToMSmf9xLpr4VbwimKY5e",
  "key3": "xaLQqDJjvRYtQBEryqhBjuH752e7rupYFXCeTmW15fZT4yArdCJY7FYPsRPC3FNk3RZT4KH7KWha9rZhtJMwnJs",
  "key4": "4t3zEvnRwoaXaW53GaaQ9AuXS3DdLBjc7t9DPcXborvpfk3hLRcS59SBHxr4okJ9SCuESqiTd7QiX585RasNtMyB",
  "key5": "UZ6tcpGHRrVW6GknytbVaGtRqwYdjL1E28PGkWykS63ozT8CoZpYerWZFxTqvSWVFH6FuJkPXuXqYvFugCpnheZ",
  "key6": "49uAYr3DZV6YaYkPbYy1YmU69xBmFB2nYU41YwvUmkWc5SZsW1W3jfVTR3mxF1EynjQzzFTRv9BDtsrR7wHSX5bU",
  "key7": "26jvKp4DgFWtu6SMP63Y1YTRs3FkNbvha8cHjsi1bL3YVzyqMgpe4eW4WWAN7XRkZEUYwnyvrhKtRCBSYGfNoYYm",
  "key8": "2XtnLPo7J2bGhKWKdzMfj375mNzLD1xQ2diZHqWM8yCyUNkRj4C26iFDHEyFPZv86Z8ScBRppAgjeiGsJwQxyo8y",
  "key9": "kFBSENwnpxBj6BMeFxYVeDMKzdE5DkzzYgEJiXKANwerjXXqrLP3iJQX3HAxGKEuZ2HSMCXyU4tLpff3MNmwTnR",
  "key10": "2iBW4TEFHnGhpLYAiuJwpg4UP89hHfVxLXpMcCQfbwuyktQAsTBJytM5w8WmeWtrXAA17Sp6cPd7EswRTMQMJuqw",
  "key11": "49uCK1V5rGd9D83Fjs4EJnCL5WV6ViivmWjM6QiSyAR65WRwf8bsTbkPBbbZLN2CQQvp7icCxXAgFuuBfGVSuwXj",
  "key12": "5fm9nwbNqS88NfJtAgwf9S6JxSBoRVuE9SN7nG7PD6qyArPhyQgJT9MoKi42XAAshPDfsKkb3osxSW2QzGca5wh",
  "key13": "5eMuQ58QxpP3hDRUzPtxLTuD9ms6dgJAa9FN8WmZqnkuuRprYRQfDiwSPdFqPc3sQNMn4cd4Ahr2ugGBVZGiYYiz",
  "key14": "22MAuzKmA49vybLCJ8n4EYYgHMXB6y734eXgWMjh9nxvoxFEMBRSRon24eaEzc5wLNAqzRMNKrYrYBxoMEtNEQJ4",
  "key15": "4tkC14XbKj4P68f4xUqa6ZKUsu8qsvjatUy3rqP4QUTfAw5jQQJEJkKrwj3nHQHaisF3E9kbL2Gm3X8D48FKf1UG",
  "key16": "2n6pm6qPYjx5HDpNQYMxFArPdXWEcinoDJET8YUkFWtgMF4EKEUVprJk2QnTgiXDcuhBYQQmFxD1Am4Ve9zYT9b6",
  "key17": "qvC3mfExqB4a5HCYQFqiSxydk6GBQkwPKa3iYWY9NAbs16yZuoVQkjKxkne6qy2Fd55KMNMZrUfvzk8wCa4C6mx",
  "key18": "g12A8XGpUqrHsZzDYvwsHNtNdSFaPQfemRQ2pyFqDVAdmvPB4r29HDz6zxjM2iLDabQofy7WZPe3oX2qTmgRb87",
  "key19": "61J8otrwoeuV3gPKiFpXtnVxPuGhqvJmXwW868B81ACAAQWhCS61KV9VJdbvLeQUfHCPHCKPDjDJScvryrGxe4mA",
  "key20": "3wTKF2dqwWrvTzjVjf9X9SDwSPv4uV26YH8h5uQ8n75xrGaBCKTr8rgpMmS32CFCKpp3LgWZYPqvkHbnyJzrtWcY",
  "key21": "25svUsTnndn5iKbFNtSVSrxeWtzDEATk8GvXfJTc84skmZtrfQBjCisDRzx4vy22FBsesH5DeH7cV6DCZhbuW5HE",
  "key22": "4Tmyy17VVtoGuimByuJVeayz3LMfs3tuSYRgzoAzVpGJksq9LJpJ85Nh2EdQTCEP5H6MubXtp6md8QxnL47xQRXE",
  "key23": "32Pc24Y8GwJucftusvMKqkrgJAUdvEzp4s7ecfKYSnDEAhLHr6azMSRLc9Hg7NPYZuEZ4pDspvXJHyRuK2ghtt8w",
  "key24": "4PKs5m6hKaMDkm5Trr8uyfSxnsktiH9DzqxXdZjUD5C6VL42HhUE5hyyEC68xtuFHztpE5T1t4tAgz7YHBR3DdP1",
  "key25": "2bPKrvR7B3Qw4KMfwmuSZTbLmg3oLzvyvJ9GUe1AXv74iJ5S93YwKrNnAAJ4tjfk1VNLffRDVw7PzwqawSSGDJqY",
  "key26": "2pwH91WiUR14Eg4gHxtKw9YX1foqez7YYecRTUy5FTmwQaACmgCVnYbbuazDooKxrmkHX9CxouaGFVtLjkQrgr19",
  "key27": "49kitASpcXsLaQhkCUYzGwSoL81ZeeQdrfgwvmfYNXUU7fKnstjLYANxSV9gPWn6B8nVWZKxtrCDKTEGpACWwHNH",
  "key28": "3PY7bb5jbReKx6dL7X2hT2ixynK9rGR5meyPCarhEz8enpaRxFmi4g2F7japBJ5S4MgRMM62Dr2cA3aMdzicE6jK",
  "key29": "2v8gh7CT9TRNFnAAgznF1XPbp5UwsfiVBG4cZyPvvrqX4FVFe9AdH4y3rZYsX8aMdjYJdBJ5DseMTbrSNsu9vDzK",
  "key30": "2oNzKj4XuRz9oAznP3Nc1M2b1g9xGyAKUuiNu7zM7sS3Ur8xLxGqBWSSU1vVDHwYvrSW5BdpgosNwZ4PGGmopGEy",
  "key31": "cEa7qrq3oBPfKeLXE31U4X78UhJjmbpYjh6psKxmpPgQj4DK1jLELFcH6L8rQFADdm1a9kQPGxA4vwg298H3JEu",
  "key32": "xjVbcCF6osnLWhBpXCFvwdC93gayWBH7DiwkvYC3ADP7k7WJ7WpoV8WQGooRMvMVuWHhvHjChSrhg5jkrAqknvp",
  "key33": "5YArFWBaFyVJ3YkL15sGQqFRQc8TP94C7s5SiDNE7ECqaHnDhJwVE4K4g7kWbSXyomxhFZCqbzYYPrWUiyJo1BR1"
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
