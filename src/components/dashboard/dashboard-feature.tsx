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
    "4Cpy1peBAmMvGhPKfiQxQ1z7WrCypcBhb8SWCeF2eS2NpaAnbnEWxGpS7L1tgQKMkkeMFMQbP8BvMMMDaBpqci2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uec5CwDDzGzsjgsnxJ94NW72NV6cUBK2ghvDpjFoDoHhGi1jV1ZN7ehPTPP3M2UYXNQFBomPvK54agZ3tuXa4M9",
  "key1": "3PT4WqvKmqcn6ERmoxM6T7TvwZn8WcuTqagGBKBkEda1gjVQkoUqVuokygZ3xxLzSj3cY6XfGjKmaDeDiAERTNec",
  "key2": "2Z9KBjzEhB2zrofXDeMkQjaTVRvoSwsGQscVNfSD9GRk2D2sRBV3jDGqnyRQ6PtRQZKp6NUQNvk15EMUs3eC5oAm",
  "key3": "LEuoRRzgBqtnQwXFPdsS5z3vvJ6NtzCAwgNADvcZfrMGkdWgT7EB8sknwy6qTRfe9VbjMQttJufFjJY4A5aabRf",
  "key4": "5qDv1KcuojL6Y7JqgAHR75ZqTBdPsELcZ17mUUmRguErfGgs6VqV8UVBa32iV3ZuDv6BAMGayhVtAgHfVDMzVX3a",
  "key5": "3aCK7Vg5fapdFApfA3NTbNoAzCrTJCCwfcMu3Cs4MNAkrpqjSLWivJaiivqZZN1SddaztP37UvL2W3SseDxUMShv",
  "key6": "41cwrbgdgq2xCVeQTVVMWDe3K1iXjkWXsPuzHzV9n455fyhN8kVhBrwA11jRSe5sRFaHb1r5rTw1LixvNqarUx45",
  "key7": "62kdyE7nJBU6NiP6sjiLM89RMGn2p1fA7WWxHW39KSam9QKT3eGZkWuhhabNKBW7mgNDiXhaBSZugUANn4hbdeci",
  "key8": "1NiBSEdz6N1rDq3u4Yfn3rb9R9jGWqM9uDfsneDKEUB57SfNUgvpmzKRWcsRp1Gb1TPqoUevzb3ZZwcyRBCMSeo",
  "key9": "3wDsYbvcutuvw9Hm8XPeTN7PhoVM9HHrnpG2Pe2xwbZcAnoTmbrFVfNVMyWRk8gqNxZrgdFDwYF6MYgdkRW4ApCm",
  "key10": "2u8Q8sAReNZ58GC4VLu56xiTRLW5eiFHYbAed2Yt98SZHtHsykZp1W5Wf2cd4mTXRQscShzuRGrqfGmAV3QyicKm",
  "key11": "3UW2Aj2wrc9f4wiDvnbL6pc8oVokeAe8877BXjCzHu94WaceQws1gvVR5yiVnemF3Gz1ttoK9SLrjJ4JuzmmtEk",
  "key12": "fqrf6FpgXkgs6PVfGAYdCfgDH9jGnZH9LM2U7NhYgKdzpLcdR1Y53zWXJSvwnncvMURgn6DMq2FXnA8vex4DLsq",
  "key13": "5AJQ4nK7YaeqcCE5wPn2ovKEUfJPKURjqV6WdkduHBfg5Weg38KTRfTtLDb559nE8WTMUKfoVEtSEzSHhbfcMaMG",
  "key14": "2zTHy6DGxCSdhGQWeDNg4KENTzEzh1ev2dt43qSVn7b9Yv73d9j8DEJQAgq8TCrJipqByVKWSeqN3zpZAsSehSkP",
  "key15": "5a1xucezNuRMXAT22Q4V6YfN4kBNvgxr7MFLWDhuE8muJSYC1QJrMMXbwBAfYH276wkvq5kTZbGxdq7twgXFcFwo",
  "key16": "4VeFFkirJk5ukmaeiurL5gNLnmHmXiVJ6fu4bV8EK5Gq3GSCAwVrSAVPywEoTUuncCoPuy18qBMiZW2mEceMGnG8",
  "key17": "2KGfjsDDh3LzXGC4zE1X5NDKzqqbSkvfdfZwgVqygPdLm3TnoCcueZ4KCFHRGcknK8jsJzvNeMHL8hs6camQwrMc",
  "key18": "W18c383qwHQKZvduXQq1oA3MvQfSMKVNzi9pBnfX9UPkE9R3hnwbitriG1FCVx2DVGFsttR9vJfVF2cHcgqmT3J",
  "key19": "4LuJXFcgCpaLoFAHvhheqHPm1GLpDv8NG3M5SReCHugGu8yVZ97ob3S5xR8pibmqjnaMpoRfTatij5obWfFPpQky",
  "key20": "2LkdbtYPEFWMjFfFTRgArK43ZTRRDXMWbAAQnbJbbuvnWCwc3Vt41SDPiN5giGbVfg9o8ueAo1wEXbU3SaHtqYk8",
  "key21": "5ECcBX6HqeQE4rvKshrfAnYpafsFK9F2D6f7zXh6SLtAesUvjjK9HgDTugpF2V61Ecso4gPA1jjLjE4pYHw2vaLs",
  "key22": "5SjeoCq2w9WRZpqiGDCbznCQqXcH8HdJEA2Eu6BKegAmEoRQeJBRVERQFEZKJqZspzEv1fRh2WvPAJqD4UEwsWf3",
  "key23": "5vm7dENpWYiKo4DjUcfXbX1oC2wYPBmCkedFRA5EpxmhazfZnKdwbE1weH47E8ntrfzm5xRao2ArjiRCeTVnc5k6",
  "key24": "3hfSDAjkYqdUgfoxqKksnJAQN7LdZ9s6h6rRqtKYswPKreTsQWE2yy8LgAkYYr4vZ5KviBG1z1JtuW6fjMLkSZnm",
  "key25": "5BqZ4sbPkNudARTp3KJQbwZAxZw2wuhcT9JZ1GDwPVaMK451G5yZcARKx1Pk2sfyYFaixoG1yGmgpVkVDedVYdTE",
  "key26": "2LnMRngP664Fe1WhS74adP2h6zNSbrqGeV63D3gdw9XAFEeRkg37Wpn4fMdjUenDbGRTacCpPpafgorpsT5hXsJW",
  "key27": "3UvLfhixHUggiy55PiWtMGrDvn32KJQXwfhgiPR6RZpv6V9JDa1pMaJCzY36VuN2foGazqJg8VxUyPsgqxAcKwxq",
  "key28": "49eHhtzY4TZMqbTXYC3BW7WDnV45tmN9Jnhrt3AteXt8XTtVPd3y2vnnLvqYoH6XTzTfGNp5n1vD6NaDbqv3HSaQ"
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
