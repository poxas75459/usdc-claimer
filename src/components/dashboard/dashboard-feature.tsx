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
    "4N3CqNJjQxqDrvdJwpz7dzMEK9RtZ6YCUTkk4Jrp87vjnJicsYVjV6wh2742HDYppHngEWup8jxXVoCzVZ5J4Ty1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YixrH6LAZ5DyZsf9ophbbZhWFAyjsAgshvDFBbaU2pYNeDH4d9RAZWioR61UYgcQtkb1kvRx7Ay4cuZ2NGoB3cS",
  "key1": "3oK3DHN1YDDredoCGnyYkfJw5YbzBkFEgU2ytaXmGW8CM1mJf6w8iQPeTbfP5cF69x5ALC6jq3RrkhbejLqKN6Dx",
  "key2": "5NvWoYAMFTHcXcxZg2tw13Y5NoXDAgBRt3FZKrrE6CTZvQRKy19WUpfVEMriFY9dCk7gKVFrph7xNsqPi1qW7zcF",
  "key3": "3pSHAPoH79kYQEBZaDBg1WLonTedwnPodV6ZkfVp8arua6LLdVgveyLWKnm95sHHGH8MtJ95HQRzQLWZpcwBgRCH",
  "key4": "3UyUSthnHZqCiCv6QuqH7BymZtV4gkUE1FwV3taA5brvJPnYBLvEt28wAeM8mQotDbzcfa7JhsSDgckrH9JyHExe",
  "key5": "2tHZ7U1DZsK8k9pF7kU7jKTLxRguss9KsAXpG78baNf5q4hTEg5bKruwXW63CLyxMboHwCWKKKudUc8x37GNQVKs",
  "key6": "3zMJE8GYS4JXFsgt1aKMuUo8uCHnKwGhLVRzqmMW13q6BpAw8jkMzoUFuQmkfQP6unHvojyJXvLhZcH1fdoHihAA",
  "key7": "5kHjeXveNvuz2iWwCJKa3pqa8ktvxPH4pQ6RbaZEQ3qL6fK9ZGPeviCAJqpZZVabmr5sCbry2fLKVtGr3wgiT3of",
  "key8": "sEqJx6UMSzBpmwDg68nNqQJsao8w38hWc22DjH5u6xC1qxqDD5Kf3iEHZFosV8Qe44BtQ2tjcVe7eojtkhJc3gw",
  "key9": "5gK1JQYfXf6TwzurAaDS9iVfJnGTq2ncQodDmEwN8np7XCVokBRap4o1kXtpfpjRXen77UmombiKi9wXqTVL8bea",
  "key10": "4SkTUCQbRo8AvJX4vjQ6cRQXtPuL9Xk7mC2mbXcbfufHSeNvYAmvWVhXrpyKYmRScbtSXbpuTRjCRyCDPXsdFRaf",
  "key11": "3BSbCCDD2JdFg7w6e6phirCgaxjCDojVjuvudKCj8T4YEQcHWXa7aZrSumKke3YqdcsuUTfq8Yrpn2taZqqa2fqk",
  "key12": "3yL8suDe8Rp92KMVtKXkt5Vne99qfgpZRBbcuVo985FktbtHzwUYa9TGcPY79p92N6fnWxosuZfiYh86cvc2r5T8",
  "key13": "2eZSH4hqJCcSNzBXaTXQGa57SLxKiZDeX9k9Ahb8rhoJePSSiJaEDotCnB23xrpjUSBRbbsJAbJyM9EiQkWn6VbM",
  "key14": "23AeXNMbvh3SLhUErwL8H1yW8hUqQ8SEvdSDYQ5gS2pgG48N9bRoLKtVgE64UXUGM4bnkvuQb8zksiTdScFfXDvf",
  "key15": "5Te19j6CVUxVDJD1u8Jewg7TwxSMDBR1RG9VQotqBuFrR9DciW4pPLn2Xq7QfYQMijKdz9xdz8Tdf7D7LJovBuBh",
  "key16": "4QkjRZZKGZ7NAou5ufVXadzAGQpcvSMqkrn2Qrjq8dyCRTXM2TdK8ZioVYjgnFnULyfD1V6gfoRovJmUaeHeCbB9",
  "key17": "5chc4bUdKSNshRuN4EWLzFk2ADjicPVgW6pcAtjCQeQjpmFbp94NL9RCbDiEEABZFGZPAjNYmcM2dzNiJDMYGvet",
  "key18": "4dWTD5N17TMWzyDePvDbyJXdgDwYGFaLpstg8MDBVjMy6VK9xvzNNVVrAmdfnsFekhHiyspJNzaG4rtQpzatrZDe",
  "key19": "5UYSPm7ahmkspAuvDCdw6rx7cXL73DmX6qt4kmmYuywAHakX3wjSDs1PrUkbdDxEbjBNeDre2PdikHqsYRXrhJ5H",
  "key20": "3VPb9P7i8TQbfDvUUDJ1mAC5piTjYATkwobmzqZndzgJAYwXt8M2rvyM27rnxUuim2TRj2ApGiWLyF1oFENG7srq",
  "key21": "uxKk74arsgWheA6AChdyuhaKiXQnpc6XSJRMJYznMdwing86KFqsQpFULmouzMneuaj8WccvBwjKoww3EsRBaTh",
  "key22": "kWW5GTNZHFeirLwiwv84WxhUZBX4A3TjpeSNZoUTBynMnCYqDXKQxkPR4cY53r8SkrR17gFKnFxDnoBpyX3Wm9H",
  "key23": "5TPEFT5oah7GoCpte7bwN1Cjs3xA14v9tcCyEg1erASBzGKNrMDAjrnqDoYgbrMq7ny5GEgJV3pk3oFijVVgr5gj",
  "key24": "dWsTz4gbjwZ5NzJ1xMQ8Vq935QDcJ6NZs6aZWeBebJAb9tCVxFMTEgbMe4HSGbaQ5RJxDa3dTL4KmBeaPTw9eMc",
  "key25": "rteWUo5ChLCvg3XAdEDaQ3hCw1isR8vVR6hsJkWnHDg2WK42nzoS3f6HuvNLoLavt7LBqPb6dm5m2C9VKYA2dNp",
  "key26": "23A4YYRwKQatzQuU7syEgko8s4VuHWo1e91WpP4TnCJ77yepPr3GvBayZHiuGDbSwmRcdiaUkp3nmXKx9DhoEdFr",
  "key27": "3zF6buTF1HNKYFUDxu5wQ1MgM4SRqtAU1W1yXMiDG9pg1HzQRW7Pun8amMs8KZdHVxtgioV4RnmKU2e3JVtpfqnU",
  "key28": "2LfongMk3TzjNCWH6oVQpQeZCYDK7Y2GAbW1HfAGqFFKYzhQy94dweaAaZxH9GwvfEQQtPuMPoVZGrY6C2b7neSy",
  "key29": "2JtdvK2ahgbq8f38QJBoCeNDgZ2JhbxMbJCctLsRgUS6CrvpcXEjCTDwjxknoDieQJSnBq5cAHS6V8Mc4K9EnQJf",
  "key30": "UNf5JmnsPoP1EPnERVe93KAnkMwJhurcHei2YqA7D9y8Nu6URt6xDia2vaAh4v3Ex3snNYvJbKZEVmMMWqcQdwx",
  "key31": "2ZM6tK74teSqnrqwQ6CYf9niSu6t59eLEcdMVwRkhfLX2uEd1djaUVDRUj4xsUyU2iHCRjvfswYbStVXoReFZbCE",
  "key32": "5kverQHmamUWnFwSrWHhpcq8MNQcZ8upq5UgL1VQB6Ht71ECVNYpAzguF9SmXfNUK2t2ssHng5aq3CD5YZvpSvJw",
  "key33": "3RRBx8e1rY1GXDvXjwzDSBumMMVgU1zULcnfNfgYvA7UL2wxRRiUJmEoHYk5QujZfAmtZkv5BywNsnK6L6SEyo8r",
  "key34": "4Qs3Q3BasxZ7MtxxJWHBjSnL81JjXbvT6VTr6jF59EvdXJbnkLTVUvydRP9KqRrWdrafiCiDxwoxrpzwvvcGhwhf",
  "key35": "32YYMp5WPdtMbMKGyQMxNrmiP2FoPHzGsPCC3UwE2QChgeNx44MTe6xfPh7i1mhD8UsnNKwdvLSk5YVqkikSq6Mw",
  "key36": "zeAQ6DnnZx7Lbv45UPwZyVtJ6NGZwfH7uXkKjGdCt7mf1Jk8BS22kvgDTgSzWFUTPeD1fWAXsv5Uuoy5XPg9aoY",
  "key37": "iPMnHccfSCidxc73EZ5UDj9FUT5hHPRD2wewinx3MK4bzSy7WfmZwT4T8LBrJjoKu1DDp8ccqNRHC82Lq4JyF96",
  "key38": "4tnjFeEtJwymtCqL1AiUSUAUxkK4qmvWMz4DxomHAosQGAakvPGNM72RBgytqGx2UKC13upBeRW5Dhoi6gzup6Lm",
  "key39": "5D4BDhTTk4vDKCpYr4PcroMxYWK5iWtXaCAkPrrfAzuTW8d1Y1VbpthkmLGQput9qtdYmDo5d1wG9X668AT7bWd1",
  "key40": "4riNWzns3xLkZiJcKf9drPAPEZFuWotAAxyCD4cGWMqFWNjiG8FhhbpJyCtjo7DwpgU3NEsEi21Au5SCKT9BvEDw",
  "key41": "5VywrvcxKd8FSV4zZ345Finms5gA4wDiF7WeGM6LUT5yg7jbdKUtsVxHGXF3evUM7SPC4PmxSyoYS1Ry5VQMZF94",
  "key42": "2HcfgrNcJjK2xdDBcirH2ebWY4hJQ8t14V4nb6EQN9Gj1TYKh4g4DB3Bgiqc84ey8H4hKvme21uX6HgEHdpFAJjP",
  "key43": "5rutWE9Lkzenm21AT5RarNTWq1F9XETEk6C4khHrSosYd63h6jRdeydtA1o1gGjk9Uoi6kbGfSMdKTwSGkrNBH1v",
  "key44": "RM8rAwfoAS6iMUtUfAvP8BCc7A41peYCQxJxVDvCg74nPmQzLyafQePgcQA52dCDL2pBYFDdPYjQL8dZkhbMDT2"
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
