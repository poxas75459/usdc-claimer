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
    "5NcMynAowLFtpU8UcGUcDZHn9rHHPBYqU9zpc4cVaEoE33ZMCcfREFbrDK8kLfVEqcT6mpdWhSjHWYt3EmaMNWJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WANs6E3TtQaoqDtMjL5rNtRdd2YTVz5WZJmfF76CFEfLsFNHRtyd8SNQVZP1Qcv6gUmJBuaHbwoKh7bEAdmaMwr",
  "key1": "VNLcqn2QfYhdRFGP6s14motd4yWEC6pvJBekEYZt6y3ST6ZGAMjctQ7B5uqTBdbg62PVWph7a6S6Dkcu4PRgxGi",
  "key2": "63Mu5aAkP8ajgsj93NDn24XvBgFAcTKDjVTNCMBjDEkAbZBZox4gcbgHMi4CVayZNjUc8CPJVhryN7E2Hfqnepsa",
  "key3": "EbB26JrLFRS4hXkzvhKwvBVT4USbjZoQRwdzBggzERQJWCQxfEivEt7fjkjUnE9rMsWLyhNwrPdKPxjw9T8P5gM",
  "key4": "5HCuUYeHBJeUc4MoeRnw3e7szwPvzeZsjsNfM9NxfZQ9j33SN3BdJK21deEaWan19qoqxVizuezfacWqTTqpS1jv",
  "key5": "5ReomLDUWUuk5R9K71fG5sWz1SBqnaVccpNKpTwAs4AuQ9YBmcvo93Vx3jT8eCg2PFo6acNzDL4NHhsPTKLUchye",
  "key6": "3Gkq6j3Ju4hFitcoskVu9rnRif9uTcNNijn1EMhDngZSNYD6r38Q32VekJN7CF4ScusTXs3uDp6rEWVjx15AniBF",
  "key7": "2omCAPjx83fM4SedQdPHqdxodorc8W9DmN18nPpQu4vh5azsqJrAjpyRsFiJk3iGpfbBTRrqHLjx2HRJa6QhvtJr",
  "key8": "3hr473DMZi7qmSZAcsNeL12tofT89sM7j2xWQZjKA2Be3r2gScweZRr6uGfYKyM4yZDn7biBq9wprgRemueWMTWj",
  "key9": "TyPgVyXoDMQGGEdBpqExqFxdrVVCN5cgx3717tknt2PC8FAZYkfJ6tEk3zte32wmVSQ2D46ukfWY5K8pDpNB92M",
  "key10": "4e187iXi67a4tv14MDJ9UJ4VhdYtLo5FXSpYdADXwMkoVFpDoQ3oYpVrfo7F2bwcdDqFzCLS4GUzbq9BFf5V5K2j",
  "key11": "45QaeGgBqseyK8HkhfpD2P7Ho4YHejkDjW5dvUvZQEfoZ64nf5sUHgrt2PPDzuKauxKisapwqqG3kHg53zvncp3K",
  "key12": "ipwLnus9DgbcAsAqVV36AseJjD8LYFbBtocvkyhRZdLyE8iSRTUBMpL4DSS3ZEkAAMJxoVwWVe5XUfm9cWs6CpU",
  "key13": "42w1agXdAWhRijSmcnwca1sFxeTo4xLq7WU7FH7py4DnBYafwZjfwmHMo36eNoZ7B3DPHKpP4LdD1o5wrjq4UBZg",
  "key14": "28FymAusNzsXPS56zggFYhmrhQpbH5GFb5gDwuAiLe6dBrynouXBAfJZUz1LkAKcFRY7UNi3eNyrmtqZ1bniaPh2",
  "key15": "2HWvzEZgzGtL6amR9AsnDpScspy6G6RkSP3evrjyqGGexyBuP9rK6P6h4j2JoziqNNAF3zZnu87qA9xYyYqtgKqd",
  "key16": "5WAgD3TRfnPtUXMLxkyJ7g2L9B6uaTaZKFcv1dnprSDVjsGm2Hkd9cb7gjb7q5EXozNBSE1LqTBJaSLv58sQR2xJ",
  "key17": "3xhpwzmgHVEQgj3FSR1sSVp3GmJ9BLXUGmGhwzn4WPm86CDeShMais3ZFbtRjmXuJLKdGRNKG6wDRkEfxAzzpZrX",
  "key18": "2bDrKwXPRPGgupNvZig8yMJqqhi8hzVwWeW6qVEsVeyKUToJ4rZqE5WkE8Vvr7qWfjzBQPgMNj7En1hByoR3PKEN",
  "key19": "34gLuUg92MEV6rvS7Qxt6jANwGoYMn7vkMMuXAdnABfUrVVsuqUuzhTTUhjBGjVoCzvYxa3Tsxy5FSzaWK2WxhR3",
  "key20": "9QVQgyCAsiukuRjciA2ppnJsjvpVdfYiBTXx391kPkqsRKRmxHFXqdtZEJg6CjRvSxeZQSn4Hye6N8SCjf8D7wS",
  "key21": "Dua1tDdzm1ZfZhpvyZs6eGtA3s1daPWqJHGbqBBct1bPwyyskZVNcsCvwW75RY7FRuMCuiz6ZzHYUu5dwkBGh3b",
  "key22": "2Puo42Waz1bSkLKXQNnZVTdwT2gGP4J2XZmzJRDmxiBeGMs4A8gYpASAciyKCWUqdzqrMD5UjEFzbmVENFTDQGrM",
  "key23": "2hJdwoFf29CdpNKXLTHZEJGieFCVoNrGDTGdQwj8JWwJKaNQVZjKdKcf7XwBQVCkFRrEu6Po4z22Vj529zWuQpLJ",
  "key24": "3uq3T6TXVpF9nbcVVT3mtTpjKM8H3PUGgyCYoRpXuhGHNkn7veZpDMJoviCwc8kLqg2i1iSg3KSvw34W9YuhtBZ8",
  "key25": "TTc4QqQcJ4N1KpFyztonW3HgEYs5p4GvE2WzAky8Np7WhfaKRhLG8o9iisE5tiw6QLVSJ4Sm1qNDELFgzGWukbk",
  "key26": "3HZdY4SNgnwbpdyZCyifLVku9AsSLYEpoRfMbspmY8QciwBipDx3DsY4zs1jAqZrw5s5jUg7KATrAxyBvjPtG7iA",
  "key27": "3vS6F1GL1uMPYmabW7kog5PhECJoBhN5eM12LhZvTXyWt6H4p9kx9gHEZ2oEmMT3G4L1Y1BHUaQvxmVQxCT2p5Nh",
  "key28": "5DDgpE3ydWEGeB1XRg81jtfbTHkYsSBah46gcyRQM79No86G73mhcmaXAMEadkL8ZqpM9RcX5zTW75UCp38M65UG",
  "key29": "As9t5mzYXV6ybub6UTctHA1HpXC1Z1xAu6qR3bEaL9htVFmZx24gTCyrMQATXLi1sh5x7P6YELjsAEJi9gn8He5",
  "key30": "3TmgtE4Mv27LiXdoTtLenA87yf88DcysWyBbsa6mceiXqaUUaxgt9JqP2Ejyud22VzxKmYEVdq5yfcVrAo7fFkU5",
  "key31": "4fUUkDw9LXgnRFAsjxQLmK8tp7Ns1EwobXewQDmKqizQnmFpSxXzKiFMbLKNFMqND9nkSgoEgGmBfMtCAWY5YHF9",
  "key32": "3DUZLqvKSFnNgPTv6aHBxFheguyGzPF5jEaQPcCvDXrrTidc2x7nBXVqUez9pN9DZA47hig8W6drKbJtDdmVEPXH",
  "key33": "5yQpoU8KnKEmdxtSCCthvTCtWXhF5Ls235eWJM37o8HCmnc2922k8pLMJdt6Gk7QszrLZPfgXwKm4L6dPuQFGMAw",
  "key34": "3pQVp24cV1g3F4fq4Fs8KZ7Dqzaz7QyaG1MwpPvzKiXrTGdqHbDz5aZpekV2RuwpdP26ei5CJLNXgHkJpHUMaMcm"
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
