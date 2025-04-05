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
    "4gQUpe1oUH1yPaFWA7WUFhFHUWQQaV4MwH1oafbjrdwk6uaqqCCV7MUCNEHzXzNUpwQRZ5wauaxdyJHnGxR6dJac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCN3Y9W8SXQd61GB62hE2JqmhNHaPAradbobA1PYoHNgz2MB4YUdVCdkj46AxbUQDJ1whFfv3bDPrEPhnqZ9XKL",
  "key1": "i7FE5BkXVYnSMVaw8k1Ze2GGooM4bq7yaUA9V9DrJsyoX3oGgvHPb5P4RfwVjC9dkC7tJfjhVVUUMcWsdWscyfB",
  "key2": "5XTYb369WtKbRHmmryS9h9KTyNTcSqJTGU3tRecMaS1yAzyjUX8gkeRfGvTFNsG3ge1tCcA4eRxyG1xa2ztCqeiG",
  "key3": "P3kKZHU4aGXPkVMyX89TnWTv2XWKNqP23mi8ptRptjdUh1YGxsmmBb4pKu5oHijJszyqJBMbPwXBziWkBAHZBc6",
  "key4": "4oHPrDS2oXg161W4oLkHEpqtvi9WZ6Gp5Xvpt82BJGGnPYzM1g9K2VLvGmMj61JmaatQeHuyqvYRYvpmw6Xu1kEd",
  "key5": "2UCmnrpNA7KEoFtezRSaHXAJfQuZZHxHybTRZfNkbN17zn8dmZ1Pz1xzi1JJ6mCEkq7BxqcEfKT8mHW7UncXkUcA",
  "key6": "3Uyz8X6BwotHhjx9mTuH3jgLwrLwgbxzmRaAsbeH91s6PxdUqb5PF9fF47EfirjQdH5JkM7WSodZDbYrpUq8vjsy",
  "key7": "41QZXQTVZ3CNyb2yAmdxuXAuBBW53X5VKgb3WgcwsL9WbJ6hB1xzdgs9ckX9MpsBm81ohpAu3317rLCnXCY3riYG",
  "key8": "3hWMw6FwY5LE8VYShQE4HdLYedWzav1TGQzFaet8ckBrvAwUrYdc58S55Ce9bUapN9FPMdRY8ju7nxRjhuo6Qvww",
  "key9": "5VnaP1WvSVk4bUkRvoVjBWHiRUwzHgijuzmuMQ3ccQDFSxz3KjRduwVZwpSK9cDMzgefjATLb7dJ3ZCJ6DCMJb4q",
  "key10": "DkfFh4YfiStUQZnrRBzYux9N79ek312iLmZmf5EXfRPzSQKXZexaxHNV8TMp4sxXVz8n9b9ei8qeMDXSJe4sfxm",
  "key11": "5RFAisyGVLgPWtWBU45FDKaVkTU67Nd8zatd6M6fsQRhygVUcj6N8LiWF15tEAnNdD7bw8EWXZ7CSibJZ6vANgcp",
  "key12": "5Lg1dJ7F6CgftUyENskJfFcCBJzJEnWt5ov84HcJdzhsnnXHPkEUPLZiWbf4YskvQZXaQGLXzGjbC8f4Q43GgXMi",
  "key13": "KvgaeKyxLBnjRjXAbKpbde4ksoKHgvjiSwuHVzYBWRojCAMLS1fpDbC7MqC8d4Kd3wBAH6eGfMLpuewvcsn4oT8",
  "key14": "5FWzdFuNfkMN6bcLxoo1TEuJh8SzoewWBrK2Vi5K22ifRuZeCrhfD11J7WFgPAhvfKBX5ArDDTbUWfsTSb6GcSAp",
  "key15": "3arv4MAYvt4yhu1V7svcsAE1YV7mdUUtSiZ1hCwh7ZHMi2oGScQ1KcuyQoDaBhcpgHjQPtbaiwr9GjKoN3nGUbyt",
  "key16": "3KQhueYbQKA7W8Spf9BcKJTcF3JD9Wym68YAXkafdhzLHQvhAEopLxieGrR7Muqt3JEmXE37riYuRNHW2uUvVnRc",
  "key17": "UZgs4ShbrBz8oNejha9QSzUaaBZLwWrGEgZyBJE7iVpvHHUKiMXJdu7PxgQuAyRysMJacS8q9p62ybcrocFD9dT",
  "key18": "5DA96cfXy8f9jeoekW45XcoiXUgAhHfmqzntGy3aYx8i6t5b9ZzARdQRMVvg1hiAxbu3nmZbBp1e2ThsUD9ThCmi",
  "key19": "Y1ddJdSTVE7CwUfpHKisodobRU488QHkmivZ58xjibVmbVJ4E1RmTNrz2x99R3gbt9mz2hgywAcwoH7rqxkPC1X",
  "key20": "4gCtVgQ576snJqn8vyWBgH73ATXBmYXzyE2V1mSm43bVxXSX41ts7h87YEsb8Xa8ieq5bZaky7EAnvbXL9NPZSTT",
  "key21": "4rStiR8n2p5aUVpad6jD1rFoogVsxnrkCxSaYJLyyMwWCPgFxneggosZrA1jbuPqahau81uRm8b1bcdbq6cYBmjW",
  "key22": "472JM5qrvULARTQ8YSkCTJMhtrvhsnaN76YesT2d5Y8u4FSK2QqAFk1Bx7opbzbSCcHdpsnbjJQWdigdVhaeZ9oa",
  "key23": "5S5cG5sHFrbehPBk19YXY5XvtJb4dn7wSn2siWgDMacuXpf379XohYJbcJd8dkFwurLr54aK8KNXKD5TdpopMKkB",
  "key24": "43VJUPGuxjnkAwUjhNgK893sNBhaB7K83gq6evR8gHCw44yyfjeWVRhZxZ1xuQxVadh9AF6sgzT9HGZL6mAJidL4"
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
