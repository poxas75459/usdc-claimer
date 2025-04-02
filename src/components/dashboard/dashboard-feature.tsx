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
    "2bexEJdTxTMfvmrxH6DUE7THsjf1Qj749Z9fRbby6Wj17bMz7Rp8eguXqC2yzv6Lcwf8Fg1eUEdcRaj8CKpxTEHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpvc9vTAyXnonty9j9dJHHWEquhViQSz5vWYuNSqk3mvCgFkfeBoV6UqrhFbbhM5eUXkVkFGVZT9B3X1qW7pLTX",
  "key1": "4sMYCYmpm3d1ANUpX6Kiu1fGJmxxknyZDjmj96TuxCsQ2snVf7pRx9ReVhDVbkkXRv7udZ9J1ZvCW12ED8yELCx8",
  "key2": "2QkA4LeNEyjYqXwUZHKWpxsRM8bF7oBN7ekkj3gmyJzqzXEqAHTp6oNia4RkuJ1hQBDzuq6AHr6N6uRj48a2txks",
  "key3": "2VBvhEpVk6oHAFFsnFX7ZBUeW29te96r6Kaa16BCEQ7JJMuB6FbSvwTbiCdmD3mouc3QNtwMaysNsRJiprusPLFB",
  "key4": "4zrPTDqckNQPZV1p1VSTXyM99o5n6MHqDAcJrUdoCPdMgEm9or51QDHzHLxMf2Dzj2Sc26YSLUybTVNfRyjZcyKj",
  "key5": "3qQsjnqqCDe2avwmdSFvJBy1Z7KRJcgTmmoe1Cx6wkjzRekcDyjSKpkY9z6xcnvqow9jaEXipuv6TZhvNSeaCK1w",
  "key6": "3i2oqain8wLdJSwJHY7PAefmPHzUYxw2vyZzHsnQSjzzFFypWwNKTZ3PhMw5k5twy7BozjkNobmzBXSd6owykbbu",
  "key7": "4EoERSJgpqvbsXHwH4FwZXH7CFQYMPb89taQakhRXiLpaGnA5autwfpV2UJhAWVGGzSU33EEcmGrhan1v5v2g9e9",
  "key8": "2GhFp1EARGXWt3r9K6fD5g9zTcWFUyLBZCnXf2Q5qPiNXiGiZfhbXgXJTg2xf316perGeFWzXzcmU7CJyemtN3PE",
  "key9": "2tgKNVyn3G8KPA5zspwFR39CwXnRLFSZLMjh7qgM2T1oKfqQomJVtYFBcDPkkRvuDHpRTWpAB1evNg47WaQQ8n7o",
  "key10": "21spNssP84236Lvaio6vhjsSyYux9ZbHvLKqKaNTTZgMNvjtkpMwyMg7NEHiTGWoESGjumpVvco7yEX6VdHG3cif",
  "key11": "2v5p1SF7ZkpWGk8z8DtxYn5tJWygeFNVauJ7KpNWFuhzpQNTz1bWGasBE7b2ur13P6ZNS8vVpnZn3kDKSyetigYQ",
  "key12": "5XZove2uEvpzNRfbGwkLtPzQFPYqyWsv1qSTRseX2f5PqxpVUNX8wqq5numSCW21izDgnvasBkveP8Stuwpfhw9H",
  "key13": "31GVAhGqQC3EEuETVFSHzSCWSostuDCMKqyXLnZ3n2yNC31pCCc75MCoeFeiLi64akkRJWf7g69xKKP6RFwvCoit",
  "key14": "47xVxtk7zM2HVZVofpJXAYpaENyXneujsMqYT3SbMGtRd4Ks97q1LKLthjpfFYL8c9tVNWmbxFw2WgZaAAuNt2ZU",
  "key15": "2iRh2o9CSbxDSoARifY3JcgresQ5z6shwp79oTffDtR9Xrm1r6HXGB7fhfFCVN67XhWBfN15dHo9AY59G7vniruQ",
  "key16": "5RTeTy5iLSA9yUpzamTE1yzy2z5w1278RyRrUApRNy5CS1Ce6A4RQkabycqKPEEDMuSS1EQB6ygewKifdEZZZUCk",
  "key17": "3dydcLoMepqzPdNTLpY83jcmi6xfYmFTkWiuyD2Ln956aebS4yVj7aw5oNvrf3aRDvCMRDZc8rnfa26X5xCEPcXL",
  "key18": "5uzhfFzrQ3BQppyvRypK8Xtwt55sbjfaGyw4jseWr2gCjcCzgqrrWnqrs8yd5qGjTtnbxUddhrHWteP9Qu6wuGUU",
  "key19": "3wekYVuyjgD4cuhkoYT8abHQYbhA2xfXyWxVeTMycVwFjFvYJD27rsWoZsVhBoR4ch55i1qkWJsmtRBQceD27uqt",
  "key20": "6udpBiCpLtsYrXzZ7bXPsyVSyAh2pXcpy7X15Mi8w2qv9km6MuC8o3eV5afZonucXYb2CyguNBeFP1PYMxWndkN",
  "key21": "4e3HydJYLRQy9dnbAm4rWGPSueawPwAiBTENeSqUNEAbLUT56EqdmCwmfKuPKykYsMTpeUT8VPozm95YB1fJ3HZG",
  "key22": "4XaftTghaxmSTyzP7JVR8NNXGaAC4cLziiBqFbGPGJqBNCveYKmEo9dR9Emb1xeTX1QdvCvwrSpvkBZZpTfHCxLe",
  "key23": "5btQBn9tJdpHB42AZKeArXNP4Cezhy3T7QAztCd2JzNjz4QxmByHgXhfye5i32vvFeiqcyB9BkboiTXJNPZgm5Yh",
  "key24": "4YQAQqQ3oVqAbTcFoJNT7F95cwXx7VeVNtLGZ6ZSFYksyGYddhjJHL2u35ScSPFLvfwiUDdjdpzVFs4p8hcM8CYh",
  "key25": "v8S6MzVLejPh1tzwC51w8kvWbUyz9ZSoPBhdRRsuX2zoMjkgvQYejtdaRF3xcbZAptKk2g7abnbAqc3hPzGhM6g",
  "key26": "UH6ciZpqUZ8VqTAzUWVfUzzduQzYWGwyegTrQXeL6N2k84JonadExajert1J5EAFto9ZPy71g5SoWuk9419giux",
  "key27": "jRYuVx4qyFTZWEau8m9ekZYHc2t4CnoYPbfVbn6Novw153ZKiT5g5bbxtjPnH6sD3Fm7dPJgkhRpAjdLx8qWjc6",
  "key28": "4iXiV89j46geVoKFHgjpWXmFqzrUaAtsCUGhkKZVGAf9UGqzesbhepEtBCJaewQEZEhRaaje8N4K6PJavaCPoAKs",
  "key29": "5eZTh8AghNv7MfL6vgd3iJSdXcUYiKDpwLi4UYjDkaWcPxc1Xt4DgNhPARDALm7wVMfAXg8sU7YmqxGQGyYauGKt",
  "key30": "4gqN9eWC7XM1via2aNTJ3TN9hC96c8Lb6dJUmiXHoVMxjMqhiSm9NDXxbdwuyfqhMiTWtcYVZGJqmCHtturWtfC2",
  "key31": "2SzQ7ifSPoAjhxTq7KyPQkgLi7ezqWFaHMss7YLXWQPuEtNkqH1GPEsWGZmSQahTxYCt267HR2qZvRdRkh8NYyi7",
  "key32": "4p72H4PHb7Z5dRjKCftJKxqD15xvCg7Th9QjEMmQt9CnJ6XDvtEeeMSVuWaizHR7TREG5obcVP1VqZ6MVcJ6rrzf",
  "key33": "3e85YdDsTe2srVE8PFDyoPk1jgDYn5J33QMVHFsdwsNQnU5zqJyBufgVggRG6RGnY72io1UdqgQfYV9tYcFg9R1b",
  "key34": "4HjaULyqadDTRVreCzqdKGJdGqJhj8yyhT7XHNL5TXQxTK3g9TLhHTbx1FLX9szK2vEtJSd2Vwqpuwp1gMgp4itj",
  "key35": "2AKTuHJbN7XxAfjoMXRskb2PJJi2QCGnnMBiGArf7aYCXEcHbpwGu8H85ekq7KoKmQvbMpDWgE7ThGJK9wQ2z7kB",
  "key36": "4zW5vdrNjJFgw7bEE9SnpTY72a8WALYH243hQNkqWo1SdwNsB6pVAbSj4Vu85dfo8EH2kNfrUiNTd5wjH6uBVmy6",
  "key37": "5jr7dznkPF12qpjFPCXf3meU4AtgZswQn5XAmszuREhtVBNHovsWMZZ9Mmfncpm6F2CiLTZBGYwbCaqB7128i8Cg",
  "key38": "5RJh9KYKGX1H4G1SevpLR2pawpffvPrGNL2Z4A3tKJZRm2gmLQXpdeef8Donxcxjw6S5hS5z5AZfXFCXGvQE27Wg",
  "key39": "2Lo9iMgCBHutRb8tEFfhJPSswfVbTzBgFLHRvdfD9AG6Z5S5GAaeWJ7HUoAf3YtSTF9DHQqtv9No7t2teCGf9xFU",
  "key40": "3zwwnThJ79fEnaQkt3hqWsa6yVUvrfyUiCRYdchKnkuD9eRVEGmtwUpZMWLhyGkowAspiEwvJFYzdhVYQsum7XqT"
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
