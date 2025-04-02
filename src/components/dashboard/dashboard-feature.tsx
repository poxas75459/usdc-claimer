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
    "3gpiAzCDMgqDMeRZdQ7Ft39kY7UfLaVH4gkPvYTp4P9TPEGxNrLn8GgCJG1spEdvBL3yEexMon1pqMPxmWHvAf9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67W2qKUY6TWdkJUiP2zqEFejc5ppAmLGPE7vAZzMzhTkytyRjYZxBd4cGAFC5cR9Za2ATeAFUmsez7zPZS2bMTJP",
  "key1": "57LrX2FuU8LA9w2QRmfeSErQSmBcHbieLmdqfibC2yGg1hmsQtR1m2ebXeyTsr8FmPWvf9CTTh9j4SNHJtGgdJcH",
  "key2": "A2qGhsEgBvHkLG8K6BFaVVreeWrAqKeom6BWoyYSSoLX2vhq5FQdw5nXf3zNfruQGiMcokUYNByw7dt6oPBHpq5",
  "key3": "4Y9azoQ6tTjt3DpWh2EUbrX8ga2Ls1VJ3FSRWLSAyTVKSk2hnny2FNUrPQ6cGapVLZUxz2qDTrR7t5Nbofb2Up8G",
  "key4": "3yP4CvgtQPgKV5RfqDah7dmop8kJMJn3PPCtgRaXHNRj4NGpCRR2xW5vQjNMiTwvFX2ZYXvUBFsjDFsErZ4M9VZG",
  "key5": "4KSzKWYG3Wa2RXPFrRygte48fn4GVAMkFvPNEJh3KzDUPtDLWk3pzndgHPh2FcDFp4DmYf3rtvKZKjMwreWrWJEG",
  "key6": "4tjHFJqV8yDJKfJKc8CTnuQcteCF3hEyyp4U2un1ZvuaQ2octejnFtMncqMC9eS6kevvaR3FHY7ukrJbdP9vKQ92",
  "key7": "22phoyYu89JEPZ6JgHjcsK53oTvi9dFgUJdnjM49BjrUKpkXUc8bLuStoQBUrCHLJkVwtN6mC13SfpefM2E8JbR5",
  "key8": "5JRXrytcgruW51ESKY1weTZuaxRmLQUNkpQKgnAyohDBifaK5VYQ2iM7ErGnAqDrdrWQ7Nc8fzFU95Vw3by1oWEG",
  "key9": "2GWixGW7iuU6SaETGwDYw1TCFrRUmohdz3PokupD1wxK9LyWBWQLsCQEMpfiQocd1kUjMMoPpH1pUTCiuSZyChrw",
  "key10": "4EWc8QVLRYWdaVFU31e2x62hZrn1oX3EME48FdqxRd5CV2cS9Paj8JJECZHurxNDUhFH664Bs3HriW2kdFJ9TcJH",
  "key11": "63yGHSku5K34nn9xY8V746K3oG7woRkkJHehkP3CzcgWhec6TZdatgUgf5kyGyQu8eeRieXfqtYoBULxs7Dezr78",
  "key12": "5dScd7hWaJ1sBqxmTaDrWJnhNif23Dkw7NYUfj22a1wcqbbzokLmxwhMHm2Fnvuio3RZ3zT3i5pjdbTTgfvosTSa",
  "key13": "eFEvkpBg1BLEJLfCkW4DxTkRkgrobsrzBzakTRSF73YPCFbZprdpGfPuRLRZwkkMwgyLj1xLnAmTafL2ryDzfar",
  "key14": "ma4bes9ZwpKSr166pBHArdwjh6h9nfDRcjsJ885MNswYGkJaJ6FUbN44DhDFriQQwRqBFSH2B9ZS7WaFuV7NdRS",
  "key15": "5zrk5zxUwwLzu2WcSbR53UDHdqEJSfNh2xD49d28ixcHRuWpEvLekj9Sh5XAuzRWXHBsrDfUbBbzN6s2GAZ1tFN4",
  "key16": "HGmBnVPAHsw2pH2ouZ7wC1ZhBmDjhnDq7Nk3G5XG9N1GDWYcFiLUiBsiBWZwwNYKjHXv4Pna2cg972Bnsdz3Dyb",
  "key17": "33cadHu8BwrNyf9L2UUKyi3WWhLadbkQB8UV65BTdmqkZ1gSxik5pNrVP6Sujh9mTDtKWxbUSNJGDWhXCss4SzsS",
  "key18": "2V4E8RmRhmnbujvj1dorskuSACvez3xkt4X8gd7p598zpo2C6kLSVCr97BPoto2KT5c63WnhDeeZyAkvpPfsLot8",
  "key19": "3pU4J793X75F3xht3dT1LpbJf7Ci9s92SWwSfY3C5kzzWjALrKmq7AtYUjKdM2PzuwFCZXDBzwfiyJiTaH7rCfkp",
  "key20": "NW4KJ8sJ4svBiPBBSPLn7ag5i3oS6eVUdpuVdJ5YxbM8C3Hx7H7JP8uLFtNAefwDw3QUdamCJPRhDZNA6rQZ4wS",
  "key21": "m8g9fvDEZvmBt5eV5M7j7WHoGL8zBvjmP4PaMWV7hgXvdYWwtDLAan8f1dLzKLeETaFhMLwFWN56eytqqHYfyuK",
  "key22": "3FrT9vAN177WTPKj9mCdzxUHSHbLnXNv3EFmxkVhgZY2TXRjHM2vd21NUAe9VfLDJSjqak7pdc4mZYkTU1Yqa2NG",
  "key23": "5A3GToJAXUihDgk9EmT2Tyut9Jiub7Ka2AWfKbLaN2y7qxP1FpDYMXSgyzV2AVoJafnBgfqRvPPfP6xD7qS74EYt",
  "key24": "5s2RuGtCnDWJcsqLccEWdEqLvHcAYZEyB6i6GNZv6D9ZsWR6sU6XDZ5KVJFitqvvjEsxPQ6rykK1WDttiH2VhP5d",
  "key25": "3wvWStnSYTHif5TJ1dREYZ2PLdzHxze43iKgDRBZZrXFvXtM2JCh9WbHSDAdevAKhf25B9yvDFRQyX9pKrY79Nuy"
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
