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
    "1wqd9tH9yqrMkXDR3vwa6zfBsmKiSbxrvkYx4bTWjvAoC8Rf6ygT8tByJsYu5oAQ5R8QsixQvu7QJ9be4aKig7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537JGmkN6eezL39JTPqXS6z8dVC7qov4SjF59VZAvDxsQwD9WMLzbC5txsf6FS9wBy88UpJmTS9E8hhZAPCtvyLv",
  "key1": "26arEK9meDbNePXDxaupL861XwN6VBz9xP5v7fAjBvfc86byMb1taJhc757vvL5NPipW59JuqWqhx6fUPZ99qFRR",
  "key2": "3SifATNNtvvUQK78tMa4VkJ5AM1imVQsmw5TfKstDfA6tNCaMTi25tJm2aFepJVdW9FkLvX6gjH5MJBHkKcqWvhs",
  "key3": "YfgyPRhNEH1pNc5ZbjK886DjxgYoq7ZQLPmynDHpnHV4gnH4CvyUpMyGZjUk1reeS8G7myxDBGriwiVF6ErLQnU",
  "key4": "42bbbb23yNYLDiKoyvDFVfEjWA8GxygMBsBGaY6vJABchpZHq88LTWbTB3fHZSh8xmQpNn59n56QNUnbaKcukr38",
  "key5": "2E7yn1YnAwMfi1ZeGRhMbrUze7weG2ji4xvJ7NoqaxA5aTotiRrKT35dkHmqzrXFauaCGMJho1yKtV3Jbvymdh6w",
  "key6": "q8sqmQvsZRoyS7i5PQ7jcq8dofRvyv6QKheQuxqTtzQMBEhbA4Jow7Gu4YWKUa3uDQMpWoyCRhCHWNP63Xk7UG3",
  "key7": "5QoLmHD7HjBg5Z8coToi55eKS6ZGmZnVuBVR58SktqXZ258LyfsMeyVCKDRo1oFhynVzabtPFhMJ9pmqa97MvCvA",
  "key8": "4DXDS9DtvGXHYZpBFKmjrKayyuket46TbD8TrauBogesFqBKsfcxznQwZ9Y72C1g56hhFerz6gK9sveSChxvUnLW",
  "key9": "Wxfw9RhoDafCrQh8nAixHm2m3UyCNYSBmT81DnuwQXfVJTYug1kWmjMnkF5DAbms3yJezuorLxswVjMSi49KLUX",
  "key10": "2TzxTZHmqCQt8UX2fJ7MYzTQisPbjPTYG1NqPiPFqc9aSZYmV7JaRCBsfAkfbdPqdo3wiGzQRugGGci9rEvudHfk",
  "key11": "2xpoM6tkdBLkNy3ufBwvkyD4N7QnD4YjGgmGSdDSdnszxPwuuoF74ptbWipyiNbjrDdQLBuqx73osQCZsY22HkNk",
  "key12": "4nRAVdKm6m3JYKMnjNxPrkFh4BQvDapxAha2eiVVwJX7BHrLneFzBZHRVuTvJvNqYt4eWFG4MM3ELUohwkDjEt6W",
  "key13": "4qGgTTenQV35FUYjcGCfzm4qYHvFzSXpb2dPYagbsSjujrkZnP5xs33ui4WbM9HBQNNAupW48RXSfjyhpDbiYzpv",
  "key14": "2PetdVvKM939D1x83SJuoPcVw5qPLrwoH63fDTPQ3yk4ArmXJ6etagSa3PmH47vvQahsmuS7iZsmA6e47Zz6RGiJ",
  "key15": "3kdN5wYztUocNEHioDuHgepYsPYGnrvAZmhhdPBqPEqFUYHS4Y8zE4hCHJDbBaYhfYVZoq9G6WcPqr8qHnh1SPVg",
  "key16": "D35vF25Y8cL58JVt9HFReCZGhQCL8ujbhnWGQ4SpvaXBQoLyXXeKLAATQHuZyWQJEVgknWpCwAmXSwLzBo5fBHq",
  "key17": "2FhdrjdZBaYeA6sX2dCZiARAFJhJa4gZWL8sY8xQha2pG2F1C1QKekvgmZabXVaRkRPhn2cTquwiaYdi9z3uDt1P",
  "key18": "4jESSEaSbapTvSnEZjBZNmPrkiXGad2m2q1qArQ8R46M2jr7FrxZCXBUBSGopvmwoi3GyDTZ8pJYvLy65bPwdmPk",
  "key19": "eDkiJpwJn15epU3zr2CmK9JmRjQSBcchsv42YKL2pET9bNW8yFnvJBepjSw7y87CeEjGUqFSZdw8USWc3pJDxck",
  "key20": "39jwrz4ZzdLNTSQ35ByJFfqtZvKnDNkbPajCyiiURRjb94AawvtEPsh8yjrrF21wGeC6AgUojsxbyDgceNwX9NyJ",
  "key21": "36mLA3fj4VfryvmN25ytCawPhsUwmujz91x1YyvK57uUo4PTAjghpstKsk36i7VCYTvctoUHrXQHd3mX79wLoUqz",
  "key22": "2dRpVmnc96qqGEMztwb6edtQXBoC9XjsJzZryrpCrngmYyvVWdGyqLppg1KtLnMhRXSrm2v6nDQPva21QobnzkcY",
  "key23": "4s9ya6R2Td29zPgzBF8apUEZu12BMEfpz84oDgPVVyJXCXz1UL3rqhfY4P1iTM3ZQE364EmGREaC4qiURf4zK5R2",
  "key24": "2QEKUSk4MyTF95B7zNf2RjNAdkp6vj4QTdVETwMueY8UJnHiktvufLFTEiT95JqXduSAfahbBTJvvPpRyetNmF4a",
  "key25": "zVb5ipwQbtAXdevtnsvTKrWyCn1gtsktznPwAdfv127CA7oV4htJ6K32pngwq5H49zS5nKfKREE44ZLDRpGe3Ac",
  "key26": "5C4o9MyiUuyDVPvshDv5o4znLfzxLJYr8qRsCvPNz6X88oafaM6CfQCyXx6LA19bvRtV8qCsKs3tDmRsNbwcpzyL",
  "key27": "2gsuhNMJ3TMDMzSApseDXuAKxwdHkh8zYEF7aiAmJ41tiUBheYjXcnor2gUSiZyM72eMsGAQvBhQN3ZYANagkMjH"
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
