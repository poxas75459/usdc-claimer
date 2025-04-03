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
    "3YHHVTiLRHX8QqA2YCejUqJmjUMmAztxiw4oCLFJwg2Mb4NziN4nz4Txa1JbsQfbFiaQQCPoKSNRehZuYbdzTM4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H24sp7PJWzxMKs3DbYxKibk3utNMwUdfVNUQnXKNy8C1p7y1MNs3AP3nmv8NQZXMdWbFsp8urwgo2WDVWXgPNyR",
  "key1": "2rSctxqPDJQkBMHq5fzpz11LwGpjwkFmHLx4pQBvic8eans4PVaNE8Qds478amaTxLFdbg6vAoEHhHCSDSWyh66T",
  "key2": "5NRQDUe3BLjbzPZhwfcwCvdGEw25VY53pQ3Sj4tmsPmY3jTtsPKuoGQvYpZVeSDFVvJpmyRELpH2SSAii221sZw8",
  "key3": "2XLNaMuxDbJiLiAoqk7udrxs5tQ7HdVuvZ6LqayvvHC3sbRAjeJfT18qHFTBNmCJuAfXMWpjURTpfaWkVieKpcah",
  "key4": "3tchvVJXHnsVdFrVCerdZ5b7t6mTR9GHop1PYCMiGdkhNwkjpHVnLJ6qu8LPXQ7ZqggF1CcuK4de3LYz4z9DvB9g",
  "key5": "2rRVTjA657uHXnXvV2gbhAv4nMtUeGtu6jZx4MZRTawk7xWKVqvKTPUzPp1x7hfLj1mpEeWXaG9MPFoSAsqeKYCu",
  "key6": "2jrQvD3F5RieShyAyTCLrN4k5zrGSfY6jzfQyLkv4nkaTqy8cy1sDfiRAJ99EiUCTi1dQ7YiSXEnLrUyUjSdemFj",
  "key7": "22mtiyda82PsQV9tQhZM13MKeBBkxPLdTZRZSTTKtKHFzTVcTM62ty7fRodjEiBzB6gH5DY5hts8fty4U46vWdy6",
  "key8": "5vUisCDunmkJkBuLiusVWB3DpHueUxp71k5dJH5hNxiUVpr9CJyvvpFugE2gB5utMp2eEqgZqYAfthhAwT9qCKoG",
  "key9": "DMT56RKPGiGuBgD8iChiZ8FzR1BaTXt52gfsZDJZmFp8ukroJ625GmJ4xceov1woGzk1NtCpTGLpeFoVWji3jKW",
  "key10": "3UGxF8coHxckHepfp7zstv6i1KcFDyeqR1U6JnK7JCLzyub6kNmkutge23T6ZoNF5NkqKVofetWwPmBPTAeRojLX",
  "key11": "5TsrarJ2DstfXyDq7EQBmiWZtVnY8Zp9Pn6K1rPiDvdV8ZzGbHXMLYWBPuqtZmBTPTrdcg4QUNuvqcbapfRVK3PJ",
  "key12": "375FEHc1rkyCkeCgpmkavRPbsQ8QCQdLU5SeVaUevxUJoJW7oDZYMKnrDopCgUh7L8no24jCWprqZrGZDrkasJnC",
  "key13": "5GKbNk3wtcBZM7CK1Zh2xUcdw5ccqQhg5kebk3fRa7DdjsKNejNV7UK98KKprYuYM9Dnhh2UCC6fPzBuRP7cPbXQ",
  "key14": "xibiCGTQNtHqC82FdSndcrAe1fHxfnzqATwu4Un7R6oYuQyqg26xfdxUXCkE9dkcUPevA5x1AzqejMkqrtNrrtL",
  "key15": "3Eo7ggTJKmFcs1LcJn97z3J3YkpPH2Ky9L64TdW8JP6sDjxZR1fLucMZyk2qvDpAjmsSTdVTcV3SycNAMvWRkD5h",
  "key16": "UKr1wSSSuiRXuF1deQaqubVkswUd8uYxqnJm9jxYt6sPSFrYK3ArjAjjawzZjoexwFxvytqbwDvvXDK4XpwXcoF",
  "key17": "528M9sM7i2wfFg3BbXogTAo4yG9Bfsxf6bqb3ymGvj1HhgcZt7y3R29wGodr6zCpnzCyi9TPmEZML5dtB6hfHc95",
  "key18": "33U1pcJLZdP3kHwv9EN1VETJxZANqrUxAqo2KfvLZft2uJbRx8gfaxXX8XA2aoLnvzHFzLZBVgXLH5eemmDGJJXV",
  "key19": "49bpuutpWU2fKLC72VR6fB6HVwvfPLa5uT29eXtwVuk1BNzdKe8fkKsuq1wGEt1EdhJnmxZC6cnkhbZKxcdp7K82",
  "key20": "5R9EnZxRoyRtsn4J8TMTesKQBH6q52iPFq5LujxXWZMWWHEyLP8E8vyi2mqMzq9f7Z8qk6aKVaiPqhFSpVXUopyJ",
  "key21": "jKJHzWtgnJhF5Awstt4e7dEwfgh4FmobL3B62CxGFh4R8178ELLkj88YE5VwpFPMvFaf7ggY8oTTTcyjryJLj9p",
  "key22": "3GHo3NM6VcwNyPinckpeSSGLyLfgxcaYur4QpH4CL9qbsZak1Wv5PSpmivDgJXgHjYwjGrwqcZ4voCKCCsSYSg1f",
  "key23": "3rYF7uSxoRuw3HiJX5DrUHVncm3Pyzi1wjn9PCgNXdtS3E4kLHhPQ6kpAEc21VM2rZR63htTERLkS5KEhxG3kDZk",
  "key24": "5xuJy7ciHuhHhfb98DGa1tPhJJNQtRR4iNfzZwbtsU3VWr1kueRxTyhbiDHyuWgoDRWqoLaeM2aiTXFR9KbrwGNh",
  "key25": "5HcwFsK7gEtfUEBzY1gwLveHK3ievBdM3xuyQEGJEVU6dFMv7D1GyuYPYUua15WsWmeVQuU8cHGa36dCajw6iU62",
  "key26": "5AdzbTosG9bFKMQWV3yfLkevWLVvNJaaczdCK2RWgg4V69mPs8JaThpgxENG679HZXyg27NmP6n198X8nHQBNEmH",
  "key27": "2wAYgbDmEr2ebEhiLcqZjr6eEtMUUH33tn9hGJowQUo1kPv5SQEqPcU3q1zkuK8BAu2RFvS5EVrBH9e49FPFX2fZ",
  "key28": "4AvbByXM5mJCwmUMBH3NReRLhpobVffAm1NSDJRWYyRPg2HScEwKgBaDbMR78z6onRSwBzqaSpXUkLzDiT5kBGgm",
  "key29": "rSZbGQNeyVPNbZ2pj9pSvhDo7jhbETkvQtLBiCRz1NExei11FUNB23iN87dyPNjQR4h5Mu6k87TJxJEHd2YhAPo",
  "key30": "4NDiGTLws3iMMjY3D6wRgkXehEzwHwJ8qJ8x8yAzXfvRRDPQXAH8XKaMcncSjewup87aKBconqrzAAwEpYjSj1F5",
  "key31": "44Rw8evkQi1kmTtxYTrgvwYvHWN2xt9Ef6MgS9MHn6tS96citBxwtgfuw72H1dGVgV2Ds2pNRYo3uKxVMPXJv4NN",
  "key32": "4xER5bACPFihyKoDaiJnhUH5tJ7fUEDxgswy3QWe5JM8rDth2TWHz8VZcmzrdL4rq7UsL7apx8VjdZKtzh9FkwkD",
  "key33": "Rdgk9BbQyeZvcYaKDECiik497S1ibH8TRbn8c6Vk2knwhbnxE8hpAzsSHx393xQssNttT27NLr7GQPnJjVjoCdY",
  "key34": "4DhqXrDm9qbKxuWygCCD8mLqCx7RDL5kNBJDFqKeynDhM9hywzu7kWXF1W3dupngJAmoa9vqHYVPnoy9nTmXii8V",
  "key35": "2AUzRgXM9jzzibJVjJ6CHFhmJphfNQodE5vDVf3r32PubRZEosXJathLn4cVJPsgYSyiCJZdxG9ZnJ5e5NgP45X2",
  "key36": "559wHQXKjwfNHRNdthG8FTrJRaQ8ceKo8Uk76nThCawbNGARiuGDoPpM3t4SoKwve1Potfh6doDU12UqSU1YYeMY",
  "key37": "4NN1CrKgtrVCnUXeqVxadQuVKzD8X7mxhhBvQYyD5WZAmy9GY86aUWPGyZ6Qka1g4EBem21bza4LkQmG46jYzusc",
  "key38": "4vEPc3dPgtrhK7mZPfLQJbHNecrdzFTidUJP6JJQ8a4STzprY32dKQyQ3y4BEzcjPbskVrYPdhUCKGveDsi5EzDu",
  "key39": "2hJqTdRK3vjKBDcg6iR7zvmhuCTis4sGFcm1vTLeF5f3jSQMWuT5gpkcA8ib1Jqu3PrEpdTEuCLNV69iw8oXsVTX",
  "key40": "5q3cLuQaseuh9UMozP5dBNUb8yM2Tpm4Mq8Jgy4B5NfLWasywL9NYr4m6GrofcXKvePTyfjZBe1pLgRvHYH6fdXY",
  "key41": "4RUaB312DNEZ5FsJWK1KRY5hhP5yBBCvArh3RR321BjMzWWVZbAtas6cFXuU7RHSzGBqyKq5ujLEuQeNrCHnSZEM",
  "key42": "4vQYQw2dc9ubVz42AY27QWtirWDA6jQnuSj22n1Z3aSbeA3tWveJjDJghhhBPx9LhvQbc982Wktm6bWC84Wyo77r",
  "key43": "3RUUw4vxNdA63A7VghYZhXJDXNzGAHmnG3saSqvNuyQmRe8epvXfTh858z9NjhLFG45HjGRaTdEN7MREA4xzRCQS",
  "key44": "5aLbLnF3FN6ZhjMjgSVDGg6wn4inpzzroox7VedgBNERj1LyQurAibL8Z3rouNoYUnuAU8UH4ZP5yvgooMYgi8mW",
  "key45": "56pN3nsHHmpZY6b8qeEmZ9raU3vq5X8mrKCTwK3hhGCZD9nizUT5TQJWRR5ou1ePd4tUbz774mDPyCzecZbC4ksf",
  "key46": "3DNShCgxb44YcGGe8oEtuh9nxP7N91Df8EZ6fSnaFTeRYa3zveEWf1x2jrbPE1staSqXYsVxtyh8UrQHARrywwT3",
  "key47": "3vDzEHQwZs3NtJfbfpKNkJX97etuJNFwiXqzqcUNGuzsJE729SppX1xmLFs3Af1Ed9BdJLit7U4SJfMVAHuUK8yx"
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
