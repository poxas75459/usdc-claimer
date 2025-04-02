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
    "UPXe9t4BnX2TzH1zeVzDSBUzq4hRVUTZjfSkLTP2iN5YKNekG2MKTxJTHztFL9JsGuS1Mf3JVYT6py9o9S4QMGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmM1cwgViJ2cyjDqZ1592z6TenuDZo2BvZMUHVA2TStDsgG5UUYWZBke9aCKXv7v5g4LFPQwG3KhXDfvMsghVSu",
  "key1": "2c2gZFfE4Hx9mPVHYt8bd1d9BJjxXNhfNjBVmrw1j3Aj4pw5fwsmGUCjk4UpjEUFhEXLwRyxFK3y2wLxLiV4evjn",
  "key2": "43HWhL2xSosvoLyFnUsYZX4Uphmf8gCi9F94MMMmPQXRaZALZJ56b2JS3Em3NNMbLLwdcMc7JMiyBW2TGesm3jAw",
  "key3": "3KBSdjF1tsK3SozQdimNjJP6NPt7dRfucsjEKLAFzEUhWW1WeL7PCEuUfnSPZukTbXJnWqRTro9iRL1gpGR2YfCN",
  "key4": "421wDWAU9GgaS3v7pPtVsrs58SJaCCkBjrNHu2ujrGffzhGHAXBjxWqe8pERXdVGqVznRNtNTriEbgznARrVhy6Y",
  "key5": "5edmrDyNeaBVHU5BmN97aVYAjGvZqLiBAK2BTE2nheeA6NE91oGsZRUw7uN1VLpKbXAnLgLARGwhfy6X5QjSkAk5",
  "key6": "3sbtMUCmbrGe3UxfYkcGXk3ejyfvau8JVA6cMsP3rYFBw7S6jgVtFhz2RAp7VX5MAmp7wgKfRvyi15YnAGvzdudj",
  "key7": "5F6GwC61UkAFB13zPb6kHQHLo1rH7g31JhBAD42MPcbzgLM4mLGP6uj9szKd4hU6JgCayEKNeRqwiRegcfdnGeVc",
  "key8": "555rduUKBpVMG3Jx9nuKUoVwAJcY6n1ZUQU9votnkKJspGhxsR94oZjMy5RnAAPoJvThcv6G6zvdJxEiaRMoJ3cz",
  "key9": "3AExsQN5bbKnpkFxYDdmVGeAoKYWDxQZCJZAMPDdcLCpFTd5QqqKuhBEG6Srob4PDN1XoECmNbpxPzFhUpqnipqE",
  "key10": "MadsxZudsmmFKgs6NRmeGVSV2S2j6XxdRy3MwBUMP2XJhqzGN6VnNwogJ9sV53JMrGyDaKwbyhSCzgv6FpLdqeR",
  "key11": "2ypxYMjEWVrMWVAY4a1XHAVsZcfgVsnxdfhWc6dMG7UsaJ7nEbZPYmL1fTWFzQoV9UWWfDQbJW2UceScpCFaqLzQ",
  "key12": "3dto4JfTvbKH7eZVKQeeMAApyfJ6Th9xchqvg5iT5iZcJ2Lem48ka5bP48q77H8qxSH8zcMEjBzV4PYWXp3YXSq8",
  "key13": "4ocSPgSbTNaePRcx1UK1aZnqidGhUX36cKvBnnWj3dYdhsRFrgJ5XTXKRXiZyHFEWTfogU7tDMXmbTacr4GeFQvq",
  "key14": "4EQsMzZ8AjC8YXS2mUyzpZEDy9eipmWsnQ5Rat1xqRs5XZdRAjKWdbNPVLCYEzVW9z3yVyhJJ8aFCW49297Gnmn1",
  "key15": "k5JL3UMzizxjfXfmtUjfoWD8ERRzmvoUmPT4WUpZhE7VxDwP2Af7eFFkBH8kWJsZzRcmdjjWuHgMLHZ7YHE99sB",
  "key16": "57P8CNEwYfr7aePjN8coSTmuXFH51F559SaunBxnQ5YXbK5VW9MuWJb8XDTMhnJ3sZSGvupNQLeH8o3oTc5mJjX4",
  "key17": "2Ph3HJ4PBnBoCKrKWeEZytQPNjaR3GQ4DsSxwDsJA2pzP93qUdadcxByrhrDhHCedMdDwN8zomncuYZjN7uGENAw",
  "key18": "8ymbxkm3eYds4VWpq6CsBQMoTpMpYB22p7mcuCwiSR6Zo2q66AuT5JZRfZdEhrjzmiGwfuQriokny9UVtK6Z4q1",
  "key19": "4AZYhEnSvVhPTdYDjAY7y4yu9U3FfFfiKhNe6vpLziq46UzhhTRhKiVFer64f2kxd1DCo27fakBsWsvue1rwDoTb",
  "key20": "sMoX9dsGHEgmX8VsmEoP2VKvsvckQbwFdJpixdAREnZ4G5gREc5jV4sSioc4CADPUznyvGUB3ibCNacoAuwNYdr",
  "key21": "2waunFUztzjXeHm2NMf3iXrtwJsTgzCNWUQhWnXFWaGVvLCnsJkHpHVtwHSSQArANDJY5WMygoQZ2PdaBk3JrcSS",
  "key22": "5Ea41nTrQS7mNVWGyNj3RyDxy4mkHojRJN8FW9TNSh6TPeEK8psc9GAo76ZQtH2cKh81sJ5C3KADTqcTaCMSwsVz",
  "key23": "yJESRU3Nrfj8CpXLHLbVJ5H9DrQreVVYxUWZyPb2jbikJZ5mivszNntfgMfgh7nkfaF4WU4ChHdotSNg2tQnwMv",
  "key24": "3FXb1SYyGweQpUHqbxUKyyZWYL1482kCESbJWsfEwcSiRwA5DGpHpg8mvmjvGfyvGAx3utoUZFnheWbCMikP2DYE",
  "key25": "3ELXNqiiVWAQwr9dtgQwXnw59xJbQuwPNXmv1nB6q5SQXGPXB6V52tpTX121B9kY1cwukUAsm4t4SFY7nAx4LCi8",
  "key26": "3kopsQem5YBwstuBB5vNfS7QxQagUvXJtH3MGuTfsSnZfrcQKgnMZbM91nnvXKjS3CCtS4TTuBfioMhxeYstLmQo",
  "key27": "4cRDg4VpYGaWpT1LRDB9twzdqPdt8Nz2EP3GES77LML3GBPpMFZSnGUiqM71oNFAsRnNbqbnWyRdWoSoj9Vk86HD",
  "key28": "4sRw85aDKMkDP2BB7k1KNwwVaWf4RtAxt3jnpfEB4mHpVmH6TiFCkfBS1Up8u6ctx2FrU1Qi4LbWgZZCea7rKWu"
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
