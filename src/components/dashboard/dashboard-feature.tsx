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
    "4seWsFuDnSnRg6NkvToambEgtyDSFk6ESiMjMKU9BAQSXW5iZmjjPMG5awFfpcQCUXE1kFCSQMShGzp6gFJbjdNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSV71ZS2zLU3WQwneQaKWW4EFFAKBZTTFpDidm2ZLqJtJuX8dUchpTogVPUqVQWsA8AaHJuz6Mo7713KvoLApCe",
  "key1": "4ozkzsnPr3VT8Bw8LBAjNwjv4hSGAujVvHjSwK8vCBQhgMS3frVKDC4oXHtjnki5yFLXxc4eNSpZfrbL2XsG3Qrc",
  "key2": "PNYiwZPv4YXLDcSJMapZUbqjRtdaSWpWmStXpuZLFG91UjYuctQLMbo77A5ypcFvFbCj2CYAYa8Nkstpua5V13y",
  "key3": "3xhDfj8DH5PyjnG91uK3yJwxkX1Lktq4nkPELN6a63ea3BWEVXVKBn3B1N8ocFJFeW3noP1NKtB9dV5EmGJsDJzi",
  "key4": "3dgN9tzZMc8mzuWfVtbbcGQSU8SQcDipjEG95HDpK2rCBe5WnsNcVWorPtSyxZRtb4XzHkG3jSmX2oZM9JZ3Uo8e",
  "key5": "2k9AEQ3YYPooEiRvPMrAtWjTx2tkvVhfyw75M2QqU8dk7UsdJC595QVanGjbpzUNPE3zJxUj44MkKYxiEGd6D4B6",
  "key6": "4cPYYzRjw52EiX3RMX3cZQZGeKGa8uCn2DuNMgX3aGJLZuQfSXKyUSBrWwNMt7AZmWvA4EkyezX8inp6EDheYuX8",
  "key7": "dZVRjgMHZqFTLV3rAZPAPQMcKHrA8tPgCEgPPjXHCoPnRZ6VjhQSrysg1TXnvWJU1pGP4cc8Ua48Rd9SosqyR3y",
  "key8": "5yRqw4GzoM43nCTJa6Mw1eHnixbbft5JrVrtgFuptsLZ8Hvz4ZoPaCp8927cm4tQV8vMZjAgvAWBwU6QGZv6FfGJ",
  "key9": "5aJfnrfksxrxvnxi8BurGnCBDhMsQBYXfdZKG81qBMS3UUWJZwp6xLrbjXTZayvDqLQSVBbyy5cfp1D3yM4CJq73",
  "key10": "2Syg6c5jZRbYiSc3Mv1YfmYq3hiSVofp2wDSE6VPqYZ8YHGeFhhwoqwqcEpH3wbwFuq6P2LBiYXs43i3JhcGyaB2",
  "key11": "5c6Tu2Bg3XWBYAVAVzmdWaTUyKzhqqGuiyqrqU6PCUBTGE2Ri6q8aAFK6UbinCbvhfUj7puurwMa95gq1PjBfVKB",
  "key12": "5eRfFBUk4FTS5iRCfNqs1xp5jW2X2KdwPGc434d3Ms6f3ChABDg6Z5VTUpix5zYhxUGdaqDGFTq5cTiqCw3XZe5C",
  "key13": "KZEcgyZD84snwgFeVB8ziypMgkMkE46x3ozvbWr7DU2bAcSduq7QaMpmzt6wwFJnhG2PGA5MCqQ7pu4yxFkyr8U",
  "key14": "62dbe3s38NmqrkaJaJDLXqhXTPL1XNkiUXYHkEUjHmJmrLwy6kXPUupbPDQfsM3asFBnPMCQdnLkeof8wEkRU7Aw",
  "key15": "4xPQr1SysmQXbRrqfbc94qfRKaxcC7beeHSPv2YL33HxPimV3jN3smT8HW2fiFbkbPenj16Z3tu8X9GV1n1dcyNi",
  "key16": "2DptnnmVyMDKGZrG9nq6TrqqRdK1LkF4gqdEhGCUSWRbxKbGoGzJLVmmEVEejAXyzJ5ti9UDcmtzmfn8QXkwYdxb",
  "key17": "3AdzefTfEb2pBTAgmCtm6S8qb95pbyX8BGdqTY21Ruwu5a82B4HoRARAdD9PXNZswKDyX6A4MR2u65v2eLyXvVD2",
  "key18": "Sc5enD238rXu949eXSg5yXCFMEkRvFNZhucSXBj5gz6ai6JW6CkbQ7XZhFbyb1L9METXA9QVefhYpsUgwKGdzhK",
  "key19": "4YeeJZTj9gx3kZQAgy9gNUuLLm1urW8MKE94ozdNmeUucVMp93qc26f2v6dSGCVgRRLDyRmXpFc1FGMXQswK8K9H",
  "key20": "4mHJwJ52YnQ1o7vxKfPTmnfsCAuUyysag7VsaLhm2oGEne5sPopDGwNDxdPGcivYaheAmgGaBD37GeBGcVtEEG26",
  "key21": "37s3sFfwVTD8qNApSsthbcTRyUfe7sVRL9XcKjg4DBsy9LZC9AQH1N9we7Hz6Fjw11C5t3de9BZDd7PAUmyXWXHP",
  "key22": "5VjT4LgDfapismTFdfqN3LNfL9ccPeKJfiz6f65dMJQqjVv2PUVdbrrH9WUB7RTBa6upr1a3X1nTVmnXkrLWLzj",
  "key23": "4ok9TYQZfuwq8yToKhhR8RAntCHTMHaj4dbf1dvGssePP6tVhWDK2VHcTzzBCX1ZGWFQ3qaLKUZK6g1JfZvJncUu",
  "key24": "59ypPjPoV1wSyTX2g5Ba21Fm2zVXH2RgeAo6qim4siSpcrDcL7KNuuinefmbkY9rVuDREokh91mKExn5jm8CQ4YV"
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
