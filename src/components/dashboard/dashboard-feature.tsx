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
    "5KYTEhbwFVhenwkHc7wbpNVe6f9vVMCtv5FQGY7tWYxijiiCFZ4m6HsWwbCCjmPGk18AGhWE6Aa5Czf6CUEsQaVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5avMgVxLBkaeZ9WjP7Tx7Aig4Yvw2hB3PmcPKdS7MCQD3RUx8FsEzrWWPBGVR3RF3eACmjwqNBQunUNbBRsAGd",
  "key1": "2SamxBwmpwSNyTL2KTPBA4v1akCDfggbvXbm5TSwJUPXLCkPjxDKEFX14krSdn6effdLX12dSH4tuZR25SFrM5cU",
  "key2": "2aj8SUQdEaTgDgUbQDaemQf4qffG2LRsUt6ECYGYRcozffuW4gLgPyKbK1badQZ5LkhGmRBhbHWs6vyEcNJkKPiS",
  "key3": "2xdV5Uuh4vkKUiHn7sun8VFw4DMkMR6PxGaDMpeJsmHki73SAsUbNco6QHrwmeSfTbt7rhy14XWesHD8UUm46Zzi",
  "key4": "2MG5STbbUFNNWsdQafeEYctFuKKyoJ2Q27icXjLho9iNe4p4CCFyxw8WyMmgEDHRXETNCgkGh3q3wW25MohbgJ9Y",
  "key5": "51vFgxCNbhGe4QRyhk1CxzPtW6sqj8Jyjnux5EvsFF3Xr1aBQhWt19cGPtXVPo3ARe1H4pbF9nqg4GYJ75GyDTrV",
  "key6": "4VKfpHHr9oRfgZfhaqiTva4M27JrAtF9Jaks8dbY5vqXFjUchba3gZFMViJsCEC4KbaZjCj1Dimqbkh68Mf8UXey",
  "key7": "VyofXKsVm28L87Af5XDaMu4JciefpTHiDRiMymh6NREh7DDbKS2Qf86a3PnorYDBDgXhKVGZD7ccMT7W3qcrB3D",
  "key8": "42CbsFbTzojHgtKYU176pwrLpe2PeePg5wmdqTwmgw1bbwGFXAQ5fHZ48tBjvfXPTqGVNZovWPaDPffwDpyoXtM3",
  "key9": "2EN4Yuyfbysd559XTtkMWHgSHU6pRYR1jGcoCCC6rZBa2LnHVPugrz9JUFAmYpFjsLYiV8M7ivP4uUCfPBEyN2EE",
  "key10": "2RmCQYAdTv8hUTyR6H7asz2W2NzmjxHr5y6AKu9GQDs7rMz6zRcHhqiij9LmEzY5Nr5hdYeLrCHGrJWK58QoZqg4",
  "key11": "2MK9qiQcfg7xRDPcNxm3WxujAhT7ZPBHGncfkD26WXXbF9iAvkUa7t9JQe67wjWgP3BwcGFPdpVcKGKnJuFePNKc",
  "key12": "2JHEvSczgDzCzxdg5yKjbeRrsnumMLHakKWtusid5dRFNmoApmqB9QFS93Saa6CAaoXU9WKRWATFmT2iounGnGKG",
  "key13": "2PHUnEZb3cPMPjPBtdE7CCUtPyN54rc3CAdDo1P6Wqwt1smUfHHYbKn9XuDdxnT3anxeDE2VoU26JUYMGh7FJHLh",
  "key14": "5hVwVUVqHX4xx4E4Y1yE3UeToUgZM91pruE11j1aySMqXxv8SqWemgFUHiW1qgX9qxcZaMENnnsPBDF4QcCXYsmy",
  "key15": "3i1QKJpQnokRdmLU2dys7HoWU1SFT67sz9VVtBkHFvokjH249b36u9fHRxPfHuH3XsUMxYWxjLCt8Z5RoDEyvwDE",
  "key16": "2n3sAm4q6nxwxRdW41eL96JpSQSuxDRqZcHMYoZptQRD9CCor7TVtgEKAJ2pqspWGESQYck7nFhJMqy95h1ziPpo",
  "key17": "25iMPDfwjULnLJw3ZnLxPokDByYo8bPDABx4Fq4un8XkT6CrX7aBcmWC2EqSpLrrPP2XRUQH1fDsnzmoNAherSv7",
  "key18": "25xBHKmM2qQX9sXkL5ChdwEuotXjVUFD5NcnLtVEtN3cNPdQoxYRR6xyNCEguKkzM9M1zy5V98E88bVgnv7UkZ6b",
  "key19": "5UDAQQUgVB83S7ACtdEjSf8dZkuwg5pPiX5hWAxtBVKtn39WxpAKfu7B4MnFHrxZ93yypDuQnCJQrAYyjUCRoskK",
  "key20": "4zVMUKUKrsDYMWXwFvDJu8yYvFjGkke5sjswkGksr771AewYa2822V1AMoY3mf3PVxL8hPVGGC8gKbV99HUUZopT",
  "key21": "45RG2dYdg5xLmrPWwKZP2rTFF7aoKWaTqRc44JcQMq4V51jFWMSKVLeKuYD7BdCNNJijMhGJkYxWmHTNieqy52m3",
  "key22": "5S77AU6Lwisx2t1kNF9BWUHwY7SoNYLHPC4LbvBsKfrYTqmXvqvfnmTxtwGzt35UiBsP7e3vTDKy9HvkJQHybddf",
  "key23": "3ux3YdqaixSzzcggUArjGWwNyxCoiu5NK17PcE92AppYGqeeAL4RRacyeoHf1TdzqBXwQ2y4B87PdPGfbsxb2AeG",
  "key24": "2aQncV6TorqyWVsPT5gGCvGf76XnzM6axR7529nA3UZGsYQiYcsYJRHMLScbner8bXifH6jWxrrnGUERZAgvDAJE",
  "key25": "tvX1WGGPMjCd1ZDbgt6Hdgn3QZw79U4W1eirMhWbCk4vm3bPBTHQxUcdNQ6qDPp285ueocLMuR8Q51imn2FmCdn",
  "key26": "4nR6PMDAyrCav9jiCE1KQmWhjwfyPrxcX3NX4g4wQZzEp81XuT3VPqHGyrmEvK2BuuPwjC7kGSa1vJt4rv6Kv546",
  "key27": "4JBX2iEvnD47osy6UBoNd2K5QHDPrmnqxLsTsbDg78RYZAVwquQsxdEGUZ277PAj98uyqSL3awh5kddDLGCpsyGL",
  "key28": "hLsPbd9fCFqjoae5MdK44Gt5dLNshD5NAV7z9p1SmW8ggN62MNz54qAepVqcz2ukz8JbbG629SourjHVeM9qNsh",
  "key29": "2yB9jrEFqtrXYmZ938tg54h4dESru4XtWcQTbNck4KfxjgEVWPL88gJMmBxeUiWYHSM4CpdVfXb35ackrpJJZxpn",
  "key30": "2vhi3TbxpTSSYFB6xcy4P6kRwiGstLkMLQMgrFyB4ntXqujoMbW2cGFJ5H3G4GtzfTBPCkEbSDJMGnU6Z9FaVxsL"
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
