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
    "3tkE7Ui3y4ZD3GKPvAWJgYpdqDh2AUcKTTf68cJzHU5BYauGg9g8htUvTiM9dJpsTspFSMEzWrQZi4nxqc6itKGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwnHTi5FfVYe4BNTTi16WC7645bPxvko6Jf42gyyK3mT1BnVFCSuziT1HRdH6c1Tt3pec29Xyv4qZkAkKXsJadW",
  "key1": "cWLVFFuWTdzWtGKV5hmVESrtXY6uHXHCZh4cRABV4awaLRDyxbHCSp3ghGdbfZDwTD5VyPgqxN3aZ3f6GBF8q2w",
  "key2": "2sqU95dAem99tgK6VAcKgchKW3gyLDtzwX8uqQrtt9FrMGrDFwvakdQvEWMdrUF6EoGyvvofWAwkwsPGX5yyoYLo",
  "key3": "49gyDM1R2tGCPJX5nnQ1vF67MC81osobdwP6j8SuLEuNHQyT9WyHj1crKuFEKn3JjzSd3rUQ2zc8ZwLmSW97waDu",
  "key4": "28QfKH1VT3uuVUaRwm23BY1A1dy16MyA62MLXkUxxymDgDXDJbHn25QoL5QjmvMRgPbVdpFnzi69GijMp6EAPJkQ",
  "key5": "36jWSdzGxmjXShRBqz7t5P5rTjPvi5BN1rJpL9GjyD4qV6wHsDWC8xQB3pNBUfaqVqzB1unqgUSzPAwfiuaeFwV9",
  "key6": "2HTLv4eAtLG5muEqXPBpTKTBFmTMQS9q5phugFPgK6C8feXcjgm4HGoKVEyifJFc2BRLhEAkTKzuv2ccVPNxYRvc",
  "key7": "33vdn412xTrXidxCV6kNyHuVSuEYLTGiQ5p6fkPj7ESAfKxn5GPa5qsWsLDKiwGY3DXvZMQFp2drunXps5av88bY",
  "key8": "3o84YqYvw2b9YqTDH7RdZPcVgYNe9iqtPbmtNRube9FHYUPpB6Xn6sBQMx5Cme57TueepSgJD6hoecCMTiKvmTDo",
  "key9": "3qKA7A15UvQ5cir6D3f5hJKL33WJnKLoLVWQt79WgQRLMG7svipFtuDZ75UyStJmDZ6Q2NKnQ7tDTCSAARu6Kc6u",
  "key10": "39gHbdCBhTqpyRqunqwji8KXG2GVzdf6pdehzt8tqV1oWWEXV99pDFJJtfScYAxwNJQzg8YWqDZLKRpqnRshxazf",
  "key11": "PU8XGWPiNfhj4EE5pHTpKt11REosZFmCfyU3FQVbRktHcuHF6hNE1x9GLhbRkzf18Ve7qB49ZGLBDsuxn9MTNKv",
  "key12": "3xbUy54SMLtT2MGd251H3HJk8buZNAkkJDmDxCmJQnPHRTgDzcevnPtQ4mwWCdqKv4ko4LeLMyGp7ueqbHS9WGPV",
  "key13": "2P1GrKuLsLLxZ8ypHJostCaffdeVQXmqwoN3zTcfHC3kMV9URvDGXJN4jYcfsxNcHZecVPZXUMhvr23adbZKVZ57",
  "key14": "3vPuYjd87ZGEEvYzFP31hRGaqvYsbUqLnCLzi7fPWwRVdD9DqvqbUnYQh16LruqSF8WJUufDfnWHueLy5adxzxSx",
  "key15": "5RMnMfaiUHJuJSTngpN3kw8hMKTEki5t6Wym4aFCkta9V6F5ZDNXH5bcE6fkqLqdTEwxGGckn1BAArBA44Ufp64r",
  "key16": "g73vW3yFx8pgbKopv9xBTyc7yi5XhLo8sQXfEjr8BbsQ8LuEyZmFma8CMMq2XcFWbFYbSj9N5TeayZ87RwSPyrH",
  "key17": "4gRSzAVBGzg1SHerH8W7mjRmwqX8UPoFdzxg5yVUstBFi8Wyw4b5sN2dqFQs5vfZeKg8iJ99cRHGuT3MuWbvn5iW",
  "key18": "4grA8YbSFkeHpWL7nhXV7J1bychDn84anmE1yeKg7Ag8jMo1mFv5PpwT5pWvGNwG6LF3vV1gc1bqYLMCv3FCzy3w",
  "key19": "355oVsynknSNfK3cZSh62E1tuw9oV1LWcXjhN7bgFZeUydZreRT4RLgcCJvvmd86z4hg5QZ2odX9j82RTaXs2iBr",
  "key20": "5kywGAT2Rohr4M6CTyEdkupuDZtN8WUr3oAjEoio87LHMfkss7vs7WoVFMzG6L77Gspt1wdSbdw7rx1YU3QRsWjP",
  "key21": "4irne5jciVBQZzAkGUhakJj84TGZhFcGcHLefNridwr1mm36gVXuaMM5RjMUmt8nP9tjLW268nfYBvfDGk5bde9B",
  "key22": "3maRwNaujYNmuJrzn4vs8abHRUdz7DPYWXQukaxZBCH3AbzWRF1gvpcepvdfpjt9w9s69nZ2tLZQ2Eu78dzinSfJ",
  "key23": "4vEXDkauiX5YH9BWW9NYao9s6bozBAUAhJKh59nqU49TPoEg14vtDci8SAWffrzpmFpvztoyjpBx7C32AGRRpnT6",
  "key24": "3bdWs3ofVs13xG8BBNPDBAE8amGwHHcR9YdhRS7ppGwZ4rgh21pSPfR8UCYmmAhG3in1t7rCNGei3Seaqj2MMakn"
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
