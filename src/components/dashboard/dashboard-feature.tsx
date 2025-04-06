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
    "4Lo7M3T1rj1Q5aqrRddZQLFbP88UcMbDAYrmqJJvBdn8eQkcPRgAWjkodVeeJck35TxErAcG5gy5HqUiFw3rj5az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfgPPn5ebfHbMYSpQM757XPJK7QyzfhctKqs2hV9TNwCL5Qj6YsFvCWhcRhzpLeh9txtSUmNTAZBQmgn3c4oFJh",
  "key1": "27K5SRoueTpR4RngSwGQ61mSSoBhZKvFTErrMncWoDvykdfGzApAJGQLSKTFXRueVZSL2urbLQNMKTquZ8V9xysE",
  "key2": "2VreoLAnGCGdGd8peYC23eD7ra4Km2FPcdP9sQJuTHiQ19aRsm8SAzpVbKLRDnTkicd9k1P5okPh9p6JECUTLD7h",
  "key3": "5GKJNWg4UmZYMRXNenyLjgfYye8TEST4s1X3nYSvfrd8EH4VHo5T3wtHx6CttqxapxEF3vWAtSVbyZLqMJWofmik",
  "key4": "3m2HzUG3Gqyq8tEAM1VfxLAepx26NadUfDQ82CrP6dmo27VUF1WzMog41ngkhY7x61XrfeJAyS4WCJtZzvMkduua",
  "key5": "5gkK16tyMVoPAyJDwCynLsR8ZjDkvFgZouppGmMwbWyS2LYEFY6uyTog8XhFj4WYPFpGjzTKpZ8qEas1eGnq9c5X",
  "key6": "3kBx22ox9zVKAHnNTcKQhtaBBPqkKLgcduCnNdq2FTwa1mVHGZmMHyoPKZ4knjZMjgwoNhwGDBgd8WoNE6rWWCxA",
  "key7": "6eoirf6Qv18YaZ2vgHN8qJSbhMJ5FoP2eUDvDbPBw9CeZVeqM5g8qRUw9gzGLaug2FuJMGn5CEH3T67xkgkS5KH",
  "key8": "5jBCaRYM1VmQU7f8cuFBRxoBnaAb9EShuEE6bL8eaxaF5yGqmE4CbbFP97xH6f4k9GWNXgR8Jeq6TwAkPZs4uzXn",
  "key9": "5HBFoxLrHjTU74q4HMoa4m214WLGXgSRNgqseYa2SXVonbbjyG7VfhkJ364eAwruXp95Bi6d9DKcikbEJqfp7eA",
  "key10": "2SwaipZM4gJPSgN4hPyeikDvNyDr6BVccGphUNUj96HP9PoNwkoeg7MSdtECeZ7vDxe6bbiLyUGGjCoCxBNVeEdH",
  "key11": "67RDx1bGjeW2AGhEJiSyNpKrhRNrkh5KAuBN3DLBPtCkAnn54aHBzmGpfoGGa6SSXEH98aqMqGX8Y9wazUtacqXo",
  "key12": "277Xo8H8FnvTVyZGgVYNZ8RmbZ4rfyHVhWEiPh8EAXCamQDKuKPaD92ofWsmcqShMyiieYBS8K6p4jwv8NrYrBHV",
  "key13": "GvJ1TKBN6JZ2cz3DWdVTXdmDkARxw8pcmp5Py64FCo6fhUawi9rq69F4HjVhjYMYmRNWw7Bh8M5bsLuxbQcN8BB",
  "key14": "61vycwDeLbX6PKgeRKQHjLYqacV9Frnf5nbmtVgQpRUYP9WrUeohE7oJu222YCLTnANUtkvqNcmCvpUiCEcNFDsV",
  "key15": "FxDETXcKmheqhjRbC8WHQGCR9FgyzLwVt1pQ4u29TTqw1n1aiP77qUuJ8bcPw6tbBkEgY7mv4DK8Ly31csyY4p9",
  "key16": "2MTT5GfEJjdcDJPU2Zo5wjEjhJu4EL7wkQiQUMAsGnTYp9LpnH19K6s7d9HyVyrhvfoMcsc2XyFchnrM8yBXVeZV",
  "key17": "37fFpyjFZDsE3Zfyah3AM3eqkNtB12pu7LPqypeUnvsPdkZjj4yWw5oBfhoHxxZscgbNUAXwKSyMvNkN861FNWbN",
  "key18": "63JL8BbBfDif37absNajk4WHYMPLJJPY5gnEpf68Zc6BaQuca5zmoGYhmaQth2Ck13dQfPpXTpQsxTneqrtGeiQP",
  "key19": "2FdyL42dksctKvv7W4SAv9X2hi2euLz1YLUtkgDr2HLDas6vckCxzKFomowwcZdQ4sC5HdpNPzzJDDgtvrE1kWUo",
  "key20": "FzTCbVqbhtPMVZ6oUHtQsCSKWAjMsZ1sGB5bgYhWs9Nkn3DoYeLEKgbL4FzourpkcztPQ6YdZXBTw6NEPXVUjWj",
  "key21": "2urdxfTN6RB62ZvBibB622czRWKUdY4HEdb4sq9Ed1kcfbGkcDr1UgvAyVAyWXemt5gFHfHBvxwQ5Mcw6S3G2d55",
  "key22": "59ZcwXGFX7iHnBocgVJbfpVwJrfAQnrA2826yV1hAJtvb8ktvoYE326wZWL1XQBtQiP5u2oDdedEVzYkSgb3dDDo",
  "key23": "5ENeSs9By3muAUMTyP5HmeSRpbkEuNLKyk2MdZ9sLPJcbXdeaQk1vHA4KPcfi1SjESLd9TqV6Lsmu7c4Ncsgk6Ht",
  "key24": "5LihHW5ktuVjMNMpdctaGciz16G5ZBrhbQF2JqKxezDMucLtwVpRCyZVq5drgu65TTT3wP6EbMdoRpjoyKGbyhGt",
  "key25": "3MqRByVig1Q8MRgsE29C8P4jQR21JTiRM1EQvLHDD9hgft3gbHGQ6JHvK5WG2X2BddQsojoAuwDfnV39P1w48uLy",
  "key26": "gv4HqzFy1FLhJSuzDQQD12ohGprWQJv354D7ywupFn3DFuaGCvptMUcsnsJbzeVynEHvG4eDeDHL2dTv49opzAS",
  "key27": "3pUUJXv871cx6B2goiLQAeTUL1qA6JGt6BM1ytKXqZ9D1HkaLxMwy4t5NzhCgdbHYG1KAMJKqUGa9xadnUdCqAKq",
  "key28": "5KsG7zdYRcXHbiKCEskmkwbXPcCBs7SBP7URvYgzormGMvz7iumLDtNfMCKK31qkAihDjXJGcAHKaKwT3ZoVhaQL",
  "key29": "5Tjd5dmM52thYTVVjwSLoqueHbLztbXXwQYrejJ65s5bpx9PuzZReUL2Lta5rqj6K2hiEtMzaKn2j71e9UjnGfqh",
  "key30": "5J5qKJjAqpLwv4f9q6Ts7HBWdht8LAG8BL69wH3EhKq6nzuQcFELfcEaWH2q1ZSb1i5Z6cHrMQR1HBF2bfSidoJ",
  "key31": "2mwb5Tx3ve88VUq9HjrKnH8nDJktTKqGts9fVcSBDP2kGeRhhRsahYswpijyQPYEN2rQSLXso2GcTWKrLQHibxp9",
  "key32": "5nYdgznS8pjjc86KhudUZTrp99MWGzAMRdGsabnp8oy4fSj3jyYbXtfMz8GVQeeMbQPi5qvH2w4iWBpQSudWnCrz",
  "key33": "3YgHMVUo6fQwAmUBErVMycMJ4KzhooTuXrPeyBkY6RfvHKen95BE4rx8YdxFSoQ1S2HT6NuLvy9uCMQ6JUVwKGaR",
  "key34": "5T8DvD1BUEJH4tKGeQBSWbovvfNCAACmTUJPX4YVe5EwqSHVRnZHXvrjQa2ttXYPysLtxYayFi4LSqx95emRHE5G",
  "key35": "2AWy7kW7PjdQyLxBRGu26NT8GPtUHuARukxGTRb1PuGdUGvotnCp1ZQ5eJwxS7fkpgtbysv5VSZ1ncxoCxamWcvH",
  "key36": "3KDhriLHTso7gDBDgV93FGzL1FRooTQWF5E7ehdbCA3TkEEiBo6kGYikHqgBvbfRkMTcihLub2nAnT4f2Jm4cTxk",
  "key37": "41aAX2tb9MvLQKGRaamxa4UQqFEvmzqtP4JFYiEStdw6oppjsH1iWimqDCLEKyNosTzggszdnXEZ4kSEFAiauDzQ",
  "key38": "2uGZbckqTRr42gKEcwiw5Bbooj6gTLCUYptT264ieUd5jQdaGU6mgy45rn95GiieTNwPWVdWtSx4d2VAgbai6Tif",
  "key39": "24NUGqsYQ4SAC7hGRzkzy1zJCNxotSUJpdJxjxDvJDjFShsJidANkAcxXCy3FgeQ2ramv8dHjWFtCn3Wo95W1thx",
  "key40": "2XJ8RAbtJMap9HvGD4NRqq3fvPDKH3xuAgEemEL1xFxJLP2oRAt8JhpkdYRxmo8qExE5k5CAmsmBtkLEAMptSqLh",
  "key41": "34JMPBLrT4KdtaRtAMMu5FoUQUbtxTxR2CR8xeGGdg3eds1rScmSEBaXof76DtwV7TtAF1AtvaxCQiJRacQ5DC2N",
  "key42": "3jDyYvNc1LUm3Z9zSxSJtwZss5D6XQGd7wAh8NKh1UQk8Y9J8KFRWQVNB23AGKGgpsL1TcCaR32d7Fm2nRCH4N2S",
  "key43": "3SkxVSGM4isMNwthWkbZ8xihJYh3hKXB1dFJdBbFzB2zUh5bY7bdSWmpRv4S7VvFU8Z16iWnQCqJwa2Wk74HeEpu",
  "key44": "5qejYaLF25vSSHswehJZxHTJd9ZLi72X6Nw1A5hxEKd9rNNGPeuzengbssgJUsB4SRJvzQnGtf8QXnoxGhB8LE3k",
  "key45": "5BqwYYWNWZzVQfhTVZYzhmCmYezxT1AkEpbNHeVHLQz4aGPFbo9bKBiqwiZzQUYPb6Sb6c9YBmav6fzixMdbgNHi",
  "key46": "4hwvzkxiUCqb18cAHLJ3So3GdNhG2karrYWPJK98jmztub93VkYzxWYWeJUPJDPz8HHbdjuH7N7Mb3LNCtFFtUtm"
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
