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
    "3vZvUP6vp4A567m99dz6A7X5gKmQmrSFD2KFK2f3mnWGSmSwK31hfgZU3k5CTxdZHxcwR4MRGSnrx8nrEfxWAm8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yxjgayKaYefTkVrBuLMxLE6adg1Ltd7D5XH2NpATL9nRbuutw6HVdpBJVdUqX1eJ18ZWxtoy16Yi3s2RZaXzGY",
  "key1": "2j7satQkkBeFsmZwrtDd8brw4UegxY2BpUHtPaYfLbiteryUV8ibh1zuAWsotvQR6VL6gYYRhXqSPGsUv4eT2UeQ",
  "key2": "4crD6eoZ9RFigfDeqkqdqkTS7DokLvh4QXarMRd4i8Ft7FQaXGtf6Nok8JJGGdmSCXxskbrDy64JJfhxf9B7UK1t",
  "key3": "4eGLLakH8tA1NNeuTvrecmiuchedpeYpSakRi35JYk1E5G1964Wru3wVmhyG3vQsKGRHhGXfLbucHQ6ehvfhqeJi",
  "key4": "4H4AYwA5tJs6ABusjsbzUX8CFrNx8kCXjZhCg6GNJs8rnRDwB46tJgPBJ3GVkh3dhThDT4koB6qbNxa4nsFnxYdi",
  "key5": "5rkpNBcN6PFBQkx7bzPmJ8eSfCKLoxNR7Q5MAoDEQhohF5VH61LnhjKQUusQXtVtLsGD6YhrP3j1exvkZ8PLVcAg",
  "key6": "3brbGFdJqmBrCzG2ep5v84UXc7j7USeN5YAUJNZ73Bac37XjaTC5m8cJBdksYgPPknhFxMtmnEhPqKAYVXJDNSkw",
  "key7": "2VntowfPQT3H34PhM4wN8fAn5x5uDYJM9ohoPM66KTD1xGnSNY46ExK7HozPjJyN5PwBv3PBkMT3oLz8CfLR9moa",
  "key8": "5YmjC2BZiFfQJfDHuWwviXqQnDkgXP7TtXuY25iQNSQYPCnrnChaDgMBYNTPqEPnJURNRZ4HSkcFbPUd46qmo687",
  "key9": "5Y6v5unqxRg177xhFdHihZ8VGxf6YCXL8YALFZTrtfSq3CTf4AM5LewCwPQxbx8MxjeGR2qimrbLFqF5XgXphh3B",
  "key10": "5qCH5if2U4nHnpScP74d96AwQfxLF78WKNSxuxLt3coxxdkP2XXJm8w3Xaw2HPp9FoKLK8pwgV863V8JDtgTotR2",
  "key11": "5kZCSQDzCpY3CEgmaKZVgBKUCt4HHLiEF9UkxVMyzcYtEPFWNMKiAWZhWHbGUQ9u5rG58YWnabbTbhwkaQb1WJVb",
  "key12": "58LtEALxfxyDABvs2i6pcGC3Aq9MR6hJbRxU93LWF89BPbX4Fm5D8EkX6e45ieZ9wns6sCyBG2QWzpJzM4bA1vkd",
  "key13": "3f66UAyGMiv222HPrKQ9SFSTztcVoDi9KuF8AGcnk5kJYc6zuHL2HLJUkdNHshe3KWqHKVFAW7VzTz1Sz5af9btg",
  "key14": "5KvWaCgSuY8trb9oMLWrmLD9JVyixEzQMX3ybb4v2UmoEUVbwXdErdVoBGNSfVCbVJaazHcLvnr4aLSZsDYLPsKf",
  "key15": "5dcWwUc4GKMYkJMqbzX2v8PGV3N11xKt92cspvuU4F9LpUrC5nxdbxSrar8gi3FdSmDLTcGQUUmKyFJoXc9Eq1Pb",
  "key16": "5CeQyyYEx97VKyQkcVsKf6pSnjZnDCCsmgpHVf4VoYA61Brovf742mwm6vkTvsrp1XrnLUi3Si1Lx73HUBCcVJjh",
  "key17": "3PKrzqqyXEBGfSnBb2UjxFxPVxRuRy2kwE1ptDaNBGUrFaoRQ5Gsrf398pZxaYxjk4eHCH3puSmL9Y7NgpgFMKBn",
  "key18": "5TfEjnne23ziHTQTF1YgJJMfzEypEdKrQDUaDp9W4xPdkvUn5L6bTGzXsnc7EUkCKbYxj2vpwCg9Kuvp6SS77oRF",
  "key19": "5hdBxXz6ckdwRm3s1DwJDLCktCbj9i34uiPMoPQWes8eRcYy42Vep58xaDrhViLJXp8eivtHUrErkH2B4NXB725h",
  "key20": "4kKnrDNyx9pLXVWkSdYtz2G4R29eu5isA8ZN2xmLPkMdzQj2Yk3eErk7yExHeqSyurLmWD7ZGe8kkxuNYaQfgABP",
  "key21": "66mcX6wjBvKqmDpw1LMDoAFqZXXEuZvC1w9hG5Ku8FHE5Lk3eY5nuuAaKTDv8RmafmV2tTomwGDwhemymfmFm1CD",
  "key22": "nr3uuqd7GwCedt6P19WtYHAM5M3jdNHR3c6du75aqZWPSfSRcmc5rxyhy6kr4vnsBYTC6vvxkhWgCycVEFfTfKg",
  "key23": "4xHyadTHQtLw5bXj2NBf7DBdbdAcMpTgmpDCkYYLH94xVAmCAsZBxrqE1PSq4MhRrD2xiqXWNeBEawxZKtqYpYTz",
  "key24": "3gb8zFpci7NXfVpYo97nUnBn1XuAckJssoQxU85QnDERahXVwuhrxGfQdgRCt2ef2sQdZVa3pBWfmWc8mCG1i8ow",
  "key25": "42FzNyLPzmDN1yFQSkgfavP1bA9nuStDK5KfqAvBkqK3eVuz4dFLPMQMHRgbwQn2XgGxpBhWXNA2wV1jLG9LGLyC",
  "key26": "2ddLHvocF38rkh2NiusXUvZ1gnYA7EAzGVDhdUja3jNQxU5Yu6LW7XScyeF2exc13mqYfPgW1bRyc3c2RXWvZqQz",
  "key27": "3kGyoMczxAjUdSaRnnMwfqYLuvSG3KFq9VkFXh5tgU29AQNfkT5PvrENwKwaGwu96uUmh8PHjjhs5RGyFjhW7mqN"
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
