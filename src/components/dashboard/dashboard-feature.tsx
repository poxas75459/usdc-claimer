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
    "4qNqN7EQ8LTxm7nCf526MoLaYrSc2UQF4gHC4VZnySnsqw7gLvMMb4wJcLJpHxicsauHxSHVNXRJJZizdEZnB99G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkFXoEixrSGFo1i89FteyJTbCzBbZx4J3PTHCKxUvc58AWPvUEv4xWPmW95WJLPontJ8YArYo3tBRAgsshKQLqV",
  "key1": "5zPohndChG8UtEMdztc9edvU6gvhEAz546NApgXWVU2m8ZsnkeTDX5A54rrW16ShUaZ3Q1hMZm4JQ2oWBq1w8feG",
  "key2": "NgPe3ukoTRjF8vVJQ9d452wCH2XRqerVHZK8eyW9ZKRVYRXi5SXfRKNLqU3uBWcJTu5JfHk1BDpfFTh6UF13kjY",
  "key3": "2zsLaygiaw4XY2jakeve2rEaz8yakEbvUReqDYH1Qj2KjnLxkizirFRgSXQeKPECVEp3uMXdpAYnPU6gkzQmL1Ya",
  "key4": "618bor8s5p686nNXJCnkc9xEke5zeGqrwAwism79aXpNembeJjsDSkv5vjVaMSBU2mcEih8yz1E895CJCRwMQ5ah",
  "key5": "3vRuAoKgSH4HQ5PkvxehVU5TUZHhY3AJBv21xZzvXu9kRvb1KKfqbQnXQafM56PQWW7nkT8jmfoB96xPWsrJKCug",
  "key6": "27w9gaVvtmrCcKm17PUxJytbiQFTSHjXGGeDAtuLFZTdt4eds22mQUXnaD6biWzGduHBU8PdaKdgP1PsNASMrE1Z",
  "key7": "2pNmR88Z4orsaiEmU3ENHBofc2zvRYwGAKz5nFLWYxe2Ue7G8mdwJ6t9nM3frsTqSgfBEHNUixUxLFPDUFC3g5NL",
  "key8": "2BMEyBSkcNdS4xs5pmneZvZF9eJq8rtcbHCFMjDt52N7eGk3UA8HqorLdScprVXZATHF8hEDVzF7CbUhcCELwBaa",
  "key9": "5AUsYLN1SFLtmRDmatAPBEwnmppaKkXm5uuNGr2zvLZQmUXNuTvbpqDWgExyCw2Kb2EWR8PcAWc7hpwuf9bcsgfL",
  "key10": "4qcMCzUuF8Jt6Pg1Saad4CPjm5fcy7VAkxVd2C4d3ieiE3DLoRemHLwF9cxgE265EiarAqNuxf22umH9AJbDCcrZ",
  "key11": "59bugqB7MTbJ1UVgP5C7U2LfwNWLrFAjYjMEj6gmVjfG1kz8fVMzxnTCswoKcmtWCtKofPmRwbRrP3HPWTjPtkgi",
  "key12": "4XWZ7GoRxdmJNpRynSZ6TFJKju3SjiBTmQweoBwU8NXxTyd7mPQtWcPP5FCM1DVt2mFoT1ResLnE4QjKCrFYWrPa",
  "key13": "2fHGHWhkwwkHVhTH4nRpNNzruDpRPUCcnZrdy9JLZmTA4rjQovsYfQjk4gF19mq1KNMeaSVAyV4qPyK1kSS7RWd8",
  "key14": "29MCtsFHK7MZxQoiEHJVy5Ar4e1BBFgKut3BtGRUMJSPKJdw2xtYGh1anBpSTGcjDb7HJcam3qhwUpNjnCyma3BU",
  "key15": "54S6F8FEwZHb1GSCS7npofJQsTVyBKsczL5FEEw84DHoWAx5HsJ2U9yC2668Fp9nXofjSzsymfhKm7gM5rAoTYcz",
  "key16": "3b2st3FctDCuPpPwPpgWPKDVy4bcExZUBYT815BKd2S9ZsBvfYu9e9XtfHw9RAiHpsV9cCkAnDT8LgtsjQcibrts",
  "key17": "5hAa12xEropX95ezQgzky4TrYuk9eVa2NYtBwPhU4qxabAoKsuHX9k9K5fhf25G44Lpyx9NcpDBZEGpVSdjEM1Wk",
  "key18": "5UYgyCjBaYK6SUtD4Y3jZRCJV8Y5KXbzmsFZzZuAoDHQrv1zZimCwCQgJM9vwgMkgcpu44uyqj8SzXzsx818at6U",
  "key19": "2rH8anJLGNT21KwVU9mpXDigSdpdMB4uDY6Vi8mu9yEqoGQyaVQHWkDWtbRnK968nmkDz9zas361bHopgHLmbtzE",
  "key20": "5Ksx4BoF6qc5TQDymiWo8QYjA6drJUqJ7VMw5yKwojEE8XRu59sFfWJhXxeoHLr1PUK98yRiHH4VvKMq91oVqboP",
  "key21": "54Go9f2gfG7iuU5GB6Vp7HDq8KnH1Nqi7o37CXTkqpUsSqyZaFV8CyW1by6PNujrWZi4vKhKCNCqxEXaYqvHN1L1",
  "key22": "4jKaSAGN6LTUY83FzXzbbBhd7SJh8RznbeTH8z22GLoARNi8MV7pCZDKVHQKRiiW4NMq6kbCVvTXvZxCM8bu1NMC",
  "key23": "2ffHR8Sgy6p7jb6ec79jfkvTGTJo7EJeJgkQNSdNezPi5wkLEE4nJtEnpLChqfsqQS82WFqLrPvjaQSuimXah3ET",
  "key24": "475R2LMktWcE49T5ZABKSKnrgyExuTWAqVfc2wwQacPMzkH6zg9CNBAkddHcWeidteDEFzQmQ9QCFwZa1tF4kFSr",
  "key25": "3TNqrqyNuhcanM8iCjMw9Rfx5BDXg4J338ui9ryBGAS99NunK3jmgUjfjy57MSBTnteUBajwyaDCqS4g8sGPa4BE",
  "key26": "2s7HsitFd75z3qxcGSKonfrHP8jcnxKKGUsV87EAibqNJiC91HPgDtG3sBZyBXA7DDaYgiU4UpNu1PPW7nRmXgBV",
  "key27": "65twqH9qSXySPMAoXCEoRrjkNNwePPq4TCZU1dHqgGM2XVivGDrLd5Fw7qKHevdFjo3kYr4rh89SYF9iYVFro8UU",
  "key28": "5ksQ9hJGN9AnEKqkBsXvHbDfEhtrTQbw2T8NXZD3oSjjFXRP9EmZw2b3kgqwgTimnGodxBhfzo9875hJ68swRK26",
  "key29": "5or36xRUhMoVwzG3kBW2gSbBDNuBSevZjcXuKAnM4dRfUckVq3oB3KcPAHMAvx8irewqqgEQQjiyCE317uDA6maF",
  "key30": "JgGKDhsXhRnbZxLDJCfJsg9WHrzzYaLRTVd1TNPua6v32MtAUdmRGFK7RL87Hcdoj6h5rQujKiYoiDT8h72is2a",
  "key31": "47gRzUdMhRmhYgsPRxsDKj2duF3GT34PMDQJYAFVHKz1GCvjaLdfMznTSiszzDAkREe7FoVMELJ5CSMoYDXLexo9",
  "key32": "4VxkfuhYvydFQ1vNup1YzvK7WGqFtMEXA8SsY3kiZ3VujkU5frRUUNGtdTe2dokdKnURXJkJdcfHV78M1VdU2WWe",
  "key33": "5KHVnLLcHBNVRT4dG1u8cm1ufrvcqSzcv5a2xo1xfMfE4VRBA3EuqVud6neAb7WuHmTJ8sZWZDU5M34VCKKUhCLq",
  "key34": "vTtTbWPDCo1SSBFYpNQpq1ZKqhLny7W8j1b71cUSR5XavhkpH9uFv8tAd7wRgnePNk6U9uyRgahJk8U1S9Tkt2S",
  "key35": "5f4BVKDzQ6MoEuUK67DCeKLUHG6GR6EjUU6Mouo2SLaDpa8VBUUpEFs9kF1i7c2MHbDXBWs8MZ2nd6SUzuedmAd6",
  "key36": "2wnDJbpVceRSvf9VkGrhFsEugDgL9Rz1zrMjyj13HWjTdMz4Wki9BDxw64A68okEsd4STMMyUzG52VZew794M8u1",
  "key37": "2BgMJRoXU56poiFjqhPtrKTZoBytQV422e1cnSdj634s7CTYLE79Q3Xnr23bUsr2qpAwzWZnoNWCYRuSryKBggS2",
  "key38": "viLrcmSLcWHW5p7BkVVrKbUKRpM6ue5YdwfiU9t5C12Qr2H7ML8SDEQ6cdc8nQNDnx6r5y7o3aEA1dDckNGoRDo",
  "key39": "3gQ1jDhP7CbX5ga47zJHT4wn7gEagEPpHBfMkUPMbq24UPxvBJr87e3PijMLQ6DKB87DGbn4yjNGZhAspB8v9Rbi",
  "key40": "4VhudTGqk7t79GWjUQUoy8B9fNCge75dJYFNmakXTxpf75HjSuqau1XGeh47xGLYvAyZ7oH8331WAiA3V6BMYci4",
  "key41": "RiVuuojuZu92YFoVRcB6k47NwUbWQW5qq4x5fgFv2ha7iTRvuv1r68EJ4uik8LpU1YLTh9ENYQeX21Tq4uactqx",
  "key42": "4rF8A4ue8Q1HUrywjRm8fqDoWMqnzoHSqBZBtK9kS8dcjRTPga5uAVz3GGGdMiNK62pQSZdUAMtqdKMmpA8Y4zmy",
  "key43": "2CgvzThk2T5Ck4YmXHU64ALp63kjbTwMoP6Ez1jNPwEwV7QJeiiy4kmf1YmsK1fDQu3hi1YMkdRM2whXFULD8wN1",
  "key44": "47XvAjAp6upo7FW928MGNJP8WuHWEonGoYPSZbA98CmZkDznDB9ks5CvVqBiCJbQeKPRu5KMzRM8bcDTxApDCuoX",
  "key45": "3D229J87cBXZrzQjMmTe8NjNX26M6BqPd8eeJEUgxWZb5Q1H8ZM5KLasoDsCVvs5oC3fRaDgEKCUwuWmwJM8kPdp",
  "key46": "a5wqZP5ZKFc2DW1Z9miaEvpyobCum5tyfHW4HhJ2EoDQ889JqTpFMkZGVvPV8icyTpErA2KfUiCdRUBBiEh7PGh"
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
