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
    "2Ax5TwKec1pFcCHKQ2R27hH7X93BzujqyjUa9BtUhbt79Gken9TDaHPck8k6PBMTS9taWdGpKjMHxMVfGuKN3imH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511m45PrvqmhMJ884S37iKc2ezpDuSpA12fuXmbVxcKq4yteLq2g2bQ2Tr9qYEQarUuERokMQeSQBpLUtUXfxA2k",
  "key1": "4aKXS8akyz1xuNqKUaE5bTgRd9WsMqG1PyUdGPywkEoYReSihBvW3T3M6G9B1NsZv5crKhtnbYYuyv6Zj5tR3FZ",
  "key2": "5pPNDck49zGGkXw3CbuScDJTTS5enH5hAH8px7MgEkLy2UXxMvncSeNsiTvWUQ9FJ6aoq7PTUHEqheTz8t5jsJCC",
  "key3": "4Bm7UehxPgvWAgQ2Sq6vkxfapjPsAVR71Q7p9iVA8H3Emqys1F3crbBXia3z83agPw3uuqgwKZznRWJadUBFTRd1",
  "key4": "4nhgqwngmNNvniQtpmE2yvPTNYEJbkGUHUw2oN1VNAbFcPFg31NGZetajFetJCwFLgVXwpFv4hY3vqHKQEyYGzgn",
  "key5": "5ouYTVJusn5BXGhW1geQw6QDfAPgJoeteEyH9sGxy9eDizVX8gCCkhdx35mEjDNKryZq3MKstqQi5KEhMB3zfoHQ",
  "key6": "56yki6bgzingrk8b26Xzs5ETi5f37pKr37pZDAXuZdydAgddHPU5ZZvA4S9UczgPwiByNjHGUJNXeFgGDFuDHxhx",
  "key7": "48Ufj1BZ5AyVbYz9AvzZU3Q6Agv1rBXXdaqQBWT2SvsJ4QNmNpysqnGhfyeQNZFLx3vXLpfHx75wz1umjc5ejBd2",
  "key8": "4TyGT9MPfkuPHFHLFGZUhU4k5emMuwLFCpCNp1rXXaBb2vncBNMEjk2iCpwjRQ6kui6fuMutoBuX9KKZ9FRvzwiV",
  "key9": "3LgSVuy9GWYL3CkRZRYNqzgZQXrfqXkBuciN1Q7w7FZe28d8zSM6VEQHbU5P79f2siDxgogVxUswihMXJKa3WhCH",
  "key10": "4c77qHWd6P5BmH7rowkmGsReb52pMMgk3224qKdHGyuHZjsD4oGeBs9NrJqZqBSBGV5L3tqF5PPrxe8kzVEv2QrW",
  "key11": "5GrYbpU6qSppAmnTjTNKYqkGX6ckqK9g6aFxBaFFEeskL3TVvdck44TLDm9FKpBVtStpzbiKZMsrvgytHSD8kZnF",
  "key12": "2LFnx4ehATyU1h5QQozBkc857vr9EqPpQ1pi6RN4S5sVfEsEZSaT2xND6RTk1FQKaVr4Ut9dsZJ1dB1SqThuWXxn",
  "key13": "4TZu6TUT6fUcrs4sbWW3ja4AZ4TDaCm9AwaKp4B62Leh9eDCMuyuVy4CcnU4zLgHTihGh9YuYE2NxVmDU963U2Wf",
  "key14": "3xKTKzPuD6449BomnMBPVrawSbr8U4ZSqboUczpHmNGkSkEbZWbLxz29pZVh1PkPE4miQWFFUcPSMF1P6Ty9mA2h",
  "key15": "3jbJXLwYZp9fqND1s8WRwvjXQWJfHpVbpaB8CEVGGmxfzbTNxYhJmsJ7PpmXmz6TQnqC2gjXPPS8KgCTpD6Qi3Pq",
  "key16": "1TEbg1mhyuyv9NfNMyGvMkQbyJBehfjyjNk5BxNEYW5KxskXmdNqvFREV3TbXouU74seK3Z7GrjtNbiZ8ucPBYs",
  "key17": "4jZT88v1eZ4DJgmLgrdpDhEyF6KWHJ9vhkRCR5Gby2XykhXzqiT2oJAv48GVCUB2EZzNvZU1VnUm34B4K2Q8Qjou",
  "key18": "zbmQYp3x7CLcYrbAb8SZbfNHnJTZN6xPmoSpDeq6qWRNxDj6ueQ21jY2kMUWhrJ1ZioyAELE3KHpwvBZCStXG2L",
  "key19": "5MWToYcpChHfiFuguyWRbnke1ij6owZuF5575mr3J7zUvFA7ZA9B6EyNduHzvVxFTMg63MoGpfBevxTQLzsL1FTL",
  "key20": "3PvQt2Pg95g7a46XqNt5iH7uAKKYKa3N3k3m9TJFP1nJDCFPpXJNhJongE62ZMdngGJeGJC7WisHpfv6zmmLLDvd",
  "key21": "Vtw2CPve1FjUHdkcatq2mFf7yM133MM3LZYqNZF9AvrRzsGhgqwJ7S4EGGg12tRtaZ2BQopQnULhZNPEgXw7RDT",
  "key22": "CV5fgEqSwyUyuJg1gK666at5XJmT6SQ4VX7BanayJeydmKUNqjuZBCk8bhGF65MwmjDSwjxTHiVBE14zGEKwbKk",
  "key23": "4Msa8u26ryVX12SLzNUtvozhetrfpBjZM94umUFTec5j58YxDAhizivmru5hbH8TVBnbVJQJAszEnwSa5t1c4XKt",
  "key24": "3FuzdPka5qPqAuHy7yEy1fmggnhfTtYmoAieZJdpnpUhicwYyLvk5KxM6zKSWbCmAwxxmBHX2UMzSeTdV2wQ7n3J",
  "key25": "dYHYhJ3ZBTd6wWMQY4FFMnv5hcmmnGfm7DwX38f6yVz5JTrkiBFciZYNjuCdTaYz6pwYMBwGKCfgzrrtxGNUP2D",
  "key26": "3Z5Q2Vjbfc2ivMQw29DHTSVaHFZF6TS1moV6MYcd4o1mxgS6ZpSX6q1ts2m9AXdktfrxpRZmuP1KqpZ4y7eLBhrx",
  "key27": "MWH9TftFKoY617jnEPc5p38XeRRbQAcDkcw5zF8AXoHPvphbJipKD75cWwnpABuHmeWjE3HJZnJ9bQzfN29zPyD",
  "key28": "2BUa7cVPxZcB2YbvgwjmXaTfZpwQGPaGSxZjSXmXga5zvTYbqWc5TC8kZb2bw75RHPPnX9wKSbAadRV9XmDjMvQy",
  "key29": "64NTi7yKAGmiDt5Fb8vmmHfssah79FJMfRvTzthVxErUNxjZoLPbAzMSZ9vE8Ew9p3brszcYXMNrMmqGkK5viACh",
  "key30": "4JzHpLM16mLHy8z5v6EipA9veCTRdA5J8XbFntPzRV6F5QcxWYqHiGsGeSyMQLB4CTMqcwhTFpwzpcqq6Y6ipwTd",
  "key31": "2P3zHmdELM8UiFBEya58H9crWfmU4S8S4JhD8ApUHnxLkqxDhZn1HCEmVL6jHcaZS9jTy4qStiuqzbR9uHJXLWFG",
  "key32": "iepsQW13vJ62FNJxqWWqpzQ58ek4kP9b8er5rn6jEKmuRW2zgbg82Q6ZGoTi85GK6p4avj3bAE63Kc4NZJ4XEB4",
  "key33": "3z7LH3pYEd4TzXpkkG2UmGYauT6gFUTTCXepkgaLLexYK5xXHkrekrZgo56PDYjnyFKdzN9qHbfM2sCGum9uwKMc",
  "key34": "5r5kmVzv3hBX8x3ZWVswazn4WpLtDQoJTbhtoJ9PiuXzEcEANTP6SvZEZvvxWfr5LtiGPxtCe4oyFuYXtJj5T5rS",
  "key35": "43dT3CYZJijZYnmEDDMr7KaXPazdbWBznuxM7z9b1cakDHVeKE3HRANqviz3ZxcffjRPS9fCdA6HistkHKmKm79D",
  "key36": "5kACb25on5htXJhckTNt5B1dJwur98abbFDL22AuAHRE8ZkGQnaNExEZT3V8jw7Htq5PVAvP84fZ5x83z9vTxc6a",
  "key37": "3S8dLjUB6LGnp83fEc6zGUfMoxyV61fH58AUkaEtE7qFz6Mk5D1k6TXSdv9eLB7Mxx5ExdeRoy15zDjZV282Cn3w",
  "key38": "2Vf4uAzx9R5bU5V444TGBu3LbzijRmsRdncbZoAe6BwpdrkxMv35stgEs127bQnj4hUC7vz5SFeP3SiTZYqfQmuo",
  "key39": "4DXUjpP9Y4VfK8EQXGwUrYaEaaFfaEy9edMWqu474zpMciHYDuZtYCwtQYL2jPQSPZrKdo21iK2Ri7qhZmwQ5ND4"
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
