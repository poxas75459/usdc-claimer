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
    "3QzoXActav583gaB7JL5XnMopohLPQL9VjUS7L26rHouc5iiNTQYgGUQ7bRLkPuCnEpPzTcUn2GJcz8cabYoMkfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yrEeTstusuHpA7HjEnRHdn1HHJBsP4GpGSfrgCstEnmSmpBcgpyFi5pQzykDs7KhRfLjfMmrQLFMhjmYLQh69o",
  "key1": "42T9VksjT1MYiftMAWfRVUtAk1bbCC3ctWKqG2xzpHyretEym7PxQugNbue5KxgiyMaaqjeybXN6jtQfyvhoXTu9",
  "key2": "2wLvo9NEqs2DcvPLT86kmYLTBKED6qkx69UWjaBrn84Eg9q18nJExjNdfMjzcjqqy9ucyVJh9FWhuDFgGLebFJMw",
  "key3": "PrBKacFhsECKotxUUpEDcXNGp2BTduEKUMj9g2Qcs2DxxggJbYNGgcEBQyEf8pjdq6Bjw9PyKiJM8vxMtWtQa5y",
  "key4": "5RQxTR5pNwvheHXziJuqSc1wSZK2wdzK6jmzJ7So1h7FzJAXcaXZBMzzdKa2a3qRosmRTVaSVXzr8QKchBYZ2kWw",
  "key5": "3cjmthm5vFjayegHesjmQu4YhsXWzPAmQx8DW7Sopq5T6ngDkZ3GZ4hNFufenpMK3iHSnxigADP9MgbJyn59FmxR",
  "key6": "4ZHY6SDhCo3z983DdsjRsTUYBucegxP9A39acNaGQs8P5gYDwvxUJB9WcwizXMzdnFtwy9UqRrrQwpf7qWVCGtTb",
  "key7": "2ojcPgzVPx7pJuoDaHeCXXdyULcCeUdGPGyZ92po218HQkMgBHYVQ6GENWzzbQsBq4PP7Bdsr8na7NkqD4TVNpTi",
  "key8": "2p2vbv5KHQS5XsMgFwnNM3KpwGYnH9fUxprLFkn7xGUskbBQRC8Ucq32pcxU1bjRbzT8YfQzmfCcJQmspzuHr9be",
  "key9": "4Xk9RvMXd37SR1h2USNdgB4xanRLTwo5nLraYShMiMsEUP3jAfGmGeNtHfabCXETrPCYxVsqwKsnMU8o86gXvoj5",
  "key10": "MitaaBAg4rhtnKPaBMGENQZbYJeRa8tfQyJNLKRa3MEdYSiMm6bCYfaTpa8oS2CbErYvCj6zzJt7NHKvb6a1tmG",
  "key11": "4KRUcehsj6xro5xCVWwKCom5ZctBMWE3KNWZLER6New6zF6B6oUS75vf1TeNxeUAAu798WF1AZT9YKgouhpu4Ebp",
  "key12": "hnyFpXgWoWyf3bcbMNV2zXip8n26wVYed3CrGrAJq72LACAvEUx1MRWUr19KZZ2ifXcXk4uwxWpAMVjuHxjQguj",
  "key13": "2iVL7kAMFTcTwWf79hBSe788MnMLGKabry7KRKyXEV8eyQoFru2svYkDNV59r8wFdYEWkJsMqmTLjUiKWR9Mpg1A",
  "key14": "5751eR6D17vCMLQY51qYa7RJTwnFk6FCpprqZtTjLZqYBrSB5hpgECJcyyDvTqFoiC29xaxBnQVNao7V3MgVsd59",
  "key15": "2dkFhUBMoiHWGixeSS7QLVNNHCecLAWcSXjCQQ9g5HETuyyHipUVqYhdCoEEGsuwgGMZLx9dD8WEU94zELmYoeaD",
  "key16": "32MWtD94D5UsotYjK5j5ERQ9jXnfYG7XpTe2sStfxjnYSogmS8uhVJuJx6w365njYQ5GGzWaF29wy4sGi3if5KZM",
  "key17": "5id2vPhqJ4Am621BHV94TDLaeRtunNdD3vwEqs9tAsVKVyByge1Q8itK5AxaMcuFhMTJctgixmzvtuL5QmS67naZ",
  "key18": "NywBxiMNoRryqjM33PwFHtmUSC8bZss1R8LfTaoebYTQH6wC4PR6cdxxxx2ZPiFXe3VtAkGmFg5de1c6RvzBh8G",
  "key19": "4rvkV6xSSHhoiJxgtQHu9AeZogUAVKmFmr9wzQdfdmMS3yhGufK4kWpTy7rosAE7cnsxki5dgSjHd8d77UmSEJvJ",
  "key20": "SvbfKsBqtEvCdHbsYKmBnDPq7LHWSUKwTXALjJHTktdV6P5Ywf5fMyA64wdds8UkbHvwYaMBoWS8GFNZddScYc1",
  "key21": "71F12jZgsqAjDE83GnbKL4XmbcM7hy1ayeoPajjCx4p3CFCh8F9ERztcybovVuhCqcRTiEaBdoEaQv3WmCD7Ca1",
  "key22": "4nqyLgMrQGszpJDudS4nfGLVPfcQYPv3c6zCobtH6sCsYysCPDXbBVCGJMe2AcPjqpTBtQnYwrARJ66PQ1Adf4kG",
  "key23": "2YmWMagv2bctUKotmrevEFLFCf53aHYLLCQYA4LQbeSMWtpKjz65JqZZMjvod9GEFzhQp4CRjq7d7ALbjaquFCk8",
  "key24": "56YaP5tBFrjWUu4H5ZGxfnSha8TEgbDA6JRkT2FipAaDjzxpjR34sCoHxFhahoQ3aSLE5bE72GdHo58HS75VB6gR",
  "key25": "2iRefBnmfL9XkQ4VMjCdUEzDwestnZxh95K1Si4eti1xnJ4Fu6zphAHsLeN5f18MfnuA5QSTeDU8nqgvEGaLRP8q",
  "key26": "CQgsqGZfCF67TQP2DCFEFdGitCXmZCqXmWNGkEhxE3SyeirPmZJLyQyrexgpky6eANLKEKp3uFCsQJBULii3yYu",
  "key27": "5gGkvBgCHNnn6jGwz1UDXcD6hSbCAxyY4Qr5uATYFnTDNz9iDunedh6UacSXyjFsrRkJjyK8gaNcuvdozTHUKK3D",
  "key28": "3YAKNShRKvB89WsAzenSV8SBjakCjMfoHXCKVtcw8iy369F2yzF59u5D7ELkvtqAniXNJdhQpas3RHYDTBv6KN48",
  "key29": "4wAthzL5QRMuJTUjudYEwJEBJAQQjV5BXuYj4uT4eWM63wRWpCLXiMhDBYUftox7G9ERT3G7TaKWBGjxbB3HjfUs",
  "key30": "2y9Z24gQMeSYb51Bb99hZExCbykkKYDGH84qVNQPWxLUTd1U1M11x4eFx4YMcpDjR4nJxGAiV4bJLtox4RiLLiLY",
  "key31": "XUSFRKkMuvmce6mPPVGQj3w94KQuKGu5CF1ReHZ3uKZRmR8MJ3rBtw8x6pbomNJQ8bFCSjordj7L2i767e8CU9V",
  "key32": "3HzucXLSmbbN1YN4kzk2jfmQYaWFQ6LnqHMTSicZVUzNwd8wQ86nwM5PrKJLd89R97CV6XgBavpwA3gFVFWg6N1Y",
  "key33": "49JJNF75SeQ7yiXo7F5pe4WDEvyogkDWB3oFeenmDmUjH1yWuosxmB9E7bXJJuDn5mXkLF1xAS2M8S6FbcGXKe2K",
  "key34": "4qVcy2dNrhbbWjwtL7cgFq3mRDfJEtk3cvgxbwA4g4bwV5qLqL2MLHWjRErec9mj9phpThqRADFv1A67xnMmnb3L"
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
