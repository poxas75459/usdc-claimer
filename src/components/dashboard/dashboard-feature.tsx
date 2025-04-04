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
    "3dAEdKwS7M3WMdQLjKxcs5QJDYtRaf6wHFasMjSeXwFb7jfzJgnPshcj6c9SHVNVtLXnW6K4tngabxDayYMcRiNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqBneDTVAHEVJvpBxpFqejVkHQbu6tqdx2rGdaYydFgRTxyKJgUQNtpj8E1U8AbX9pB5wodpdtupyA8hSKvweFV",
  "key1": "2BhsFtxGUeHoZhUuNnNXeJUYB8tQi7WF59b1khqnUbSxwpR5GTEthd9Q7toDfw7b572yXvYHo6aJDLnc7yrnjFu2",
  "key2": "63rs27q22wCYqbqZRATUASnoBFdCa3AGAToXDFqdbjHGv1K6NBYyDPoBiaz3EKenXNLhxJXL5mu1W2GqBgEwGNyf",
  "key3": "3ssEKc2761fXULNYkuNznBwjNqJ9kYFJPeej6Pp6JJdj5WSC7ZvtTjBd1hk82TuagubDQvTZ1R7TDUbZYGDSTG7H",
  "key4": "5DbZN7XLEX1s5KLJkg4iNJiLEirr8VxeqMrazYuiT7eTBzu625UZCbJ1SFvaFUnjxHtuFARih1YKHEvLYjFfYyUL",
  "key5": "28JzcTHkJLLaHhah1vkdbst23fLGkavtL66tEDMeMAvavun9b6mq48m3hvFu7rcdZEAsX2dMszQjnaZjwbv6WvTR",
  "key6": "3ASvtTXuo1sXjYg6HRZYerwgbeLq6fako7XQ9pzPdiu9RMpW3n1JuVziUv2wBJLLMngYDjThCg7MRh9qhznXuELs",
  "key7": "25N9PcBm5v71R5dpQaumSATtpKUM65ZZadBPjHUee1PvDxJ2mVUZJEtzAjQxkGg7DJawKa1CdYDF34qEZQssmMwg",
  "key8": "57akHVy6y7UE6jErwcquAw1yYkkmcuzoz3b9Ksxi5oCy2DR1xATg3kBzVFqGJs9Cu6xFHseafWdsDStczeY4NjCT",
  "key9": "2UzmkMYAXEXeJNj6mLGu1N3j7WYHfTxjhLVa5QAirfMqKdnYBU6b4ddTYWrWxJmaMNMPt4DX2fftgi4fMdVbouV1",
  "key10": "3c9HRQyCzsmTbCDPg7Pd4xWaC87XUMMgQZr8MmrGSpscs9QMNjkNcqfn84yxrBiZ25ymgJQqKcoQiYdu7Fp8jpF3",
  "key11": "29tStEp6WYrS2kyFma6r76gKaPKWqj1optM9ikJw3esAro3KQSWHBoaAwWbWNMTAwn9WbH6Cb7xEmuuz4RoTbqzm",
  "key12": "3dw6KbS18aZiP3ebhHQ5UrJMUexUh11tyocACTtBPAVGTDJLaquPZECDEhhX2j33AVHq9g2m3W1knAubdyCLaSiG",
  "key13": "4sLCXJdQNtQrTG4CBByv8nUtScLMTrztD2ngy5c1NtWtH4t9UXZso8RtthcyvmVHTNAHzNu5y77t7EuNw8adFNaK",
  "key14": "5ZmWxSxgowrjjaVWwHKXMHNimAU7PCZiFzY8xMmiJUdSndPWc7qWcUkHSbPgFDR6y9ACcuSDhjbeeFwB2u8aARdV",
  "key15": "3Jry7z4z1YR7Gn1u8R8ngpXiGyAx1HxpEsxV3L93Uni5ws2RnGTFZqwnkZHqSxtuXqZHQgM8mmqT8PYJpicq5SgQ",
  "key16": "632odJJG5Q2v6xX5YiigGYQZ4arC1VpvMUai6HJPaCiFBKTbTzQy65Cu6mLXPCpPz15UpDnrztQuz5YAUwc3kXN6",
  "key17": "MAmpFsbYXqcbRKsLwEu9VswEtS933xmvntEJ2roHyVJL2G25ufut1mZXyqYdFQNerKCeQL8Q6xtWQrJww1rdwbY",
  "key18": "2EQNrvGgJtwdXLTxoWkDKa2LKqXNgXrk2JF7YRM4VfECzgHDzM2YrhPEyz8xsTgmbSeGWmHDThdVbgRHfqWC8mFP",
  "key19": "4zQdzZwy81jqJKrpS2JAzLk4dAMbWHbZSy3T58jd51fEHLAkFjverqmrXXtKk1osWcNf2zjqGj2t6d28AthqZTsz",
  "key20": "2nbK7AfWWLx5GuafXcTqgM1qiyR1GMu2xLP4r1Y2Vm2dfghrVFDRjeY6bMJQmc9zeWhVZZsgcV7B5E7jpiqFjKyd",
  "key21": "2gMJbMeKWckMeRXjB9gWVcNPBZ2H2fyz25ZftiygHnuwSsREHqLFZigk8ajHtsUQjMfNMo4vsXkgsaAnyy6qwbiB",
  "key22": "3yTc5GsA1tmN4Cx3TdSx6ZmdxcyVYMdyAa7E4ravZRCLcNmuzTNWDfdwbFuwxsi9rCeKuwjjmP2t4zhEC1FkcqEo",
  "key23": "58SUXbjNUBD7xcj7LXzVJgrmbLPyCfdpkbDgSKY97KpR8caJ2qLbxwLwLkBFq9yDLEtVDuS2sUdb1iwGtdP4SBif",
  "key24": "2r141cqNgUBqjHV4gGK7VFnnh35SvN6JVP93EUH5dkVgwTGFAre5PjhLrqdDXv1ZuUH2vsWmmvrAYKYkbewntm6M",
  "key25": "5CTv9pGQqvxM7XcoHHnCPT1bpF2xVLzrtPhiKDupqeWVNAFAPrcrNSnYep9SQGhEbj6GnhHhH82Nm685BMWQB6sz",
  "key26": "qhD3tKtASoLvgEq3HyBBfJc1wvrCRwZGEwy1A1koA2Ua3QoXiPeiQj6ozNDWPqmEmh2sizzsjYk29XYyip3mPxj",
  "key27": "2XGqGmw69CMQgSxZHs2EkpCNBz2w5etyzttLdYibgQ4t5pRY5VjEx4PtRkWJX1FAVBThsRpjEWdSK7hcJkH1gwr7",
  "key28": "zMD7qBSy7vCrWLgMDZjqkyrpjCSsqCYYN1L31h69gZHSsJz8erpsrxBUDTxFdkUy2j53JbB9AuyqpTrGoDAWCD6",
  "key29": "wriABXktts8xCmkuLLuZy9WUpS8jzkkeGaMFJTAipja47X7L78XYYBTDfzCxmNLzTZrR6fh1cPL2pDCkp3NEhVk",
  "key30": "4JK29D3S7yjfdDEusQ3ppKTnj4F531Wdy32WJDh9yEsmjU6ZVamu2PWkPxWMbLaQPLh1cYb7XMnxHv8SXbacM7hC",
  "key31": "4bxSjDEbFNFSk3L1KoGtxtvDLUeMKD4CJqgxenGVf5KrruBGdAV2NSKvjYtHSPiYV3FcZnM1hvkVgQ49vGgKCvPu",
  "key32": "4c7VN7muYtpi7X4vtaHsGLPYb3VwLhH2fVc8yabWpSaP1Y62mnJnZQLSw1TNb9ioPoUjWUua4MfmAiCSUMDcL11c",
  "key33": "3Canw1cZVQHkEzonYALtY85CL9o6ZbKKKA4W72pwU6ygphqbntEPQhYpUdsM4CyJhJW3xWoKH6gzEZLTTnts2ZuG",
  "key34": "2mxoxxzYUZgHftBRgcd4SpridmAS2ixcJ3f57UoPVrFTfs8zCr8ExHTuLBrXNCQ4n2UZ9K4ALLzeDA3rewhR6R24",
  "key35": "5SQhh2uDFN988Fh2SjmTjdqfdkPSHemUPMxvaQ5DbxTgt2avHfZuW6oAeGVjP7t5npor4EZAHt9yr6AEC7WGNYTs",
  "key36": "23Uy3WRusKTBFV8XRRjXWwVGu6AFXRgZnBUM67JoK6HTd5PLwmq9UMC1eGD7bANVyNci8M8D24CAoVtrUoVL6Cp3",
  "key37": "4f827w2pd2oS4WfqUn7g2NFbq66rBcjCQyZYdYtuCqJ8gk2Vqo127W3RZMse64RFcnVtZGPcTbw8Tq4qgfP4Bczo",
  "key38": "3h5Ph3Q74R1XCz9UmkM7HrtaWCr5QZAyzfwMnKjH7RW3eAn1ZHzun7BdMqJYm7v6THewBn7YRKZW2XyDhWxVKvCc",
  "key39": "5bWGjfvsSQdS8U6szPgVcH39Ltusiz67rCm4UGYHad7RLhPR5XSTziWSZBdKJuwsZV6MxiREtohoA5Fyb5fq3oab",
  "key40": "4Uu9jG6JqS2MLFitmfudr8AHaHwZyTQSspyKiEmX8pfTDQGszNhDqmGBT6LX7vWynEM4qvzscy81nYCQNkbmC8Cy",
  "key41": "34oESQ6mgiwakoKSUbw4BQzZfGpdH7FJUhwFThRLHHuaNqCJDJ3xBqY6iWtRsFBtNCGthmDGUCQPeQTytXEHGT8B",
  "key42": "7QgMHmoN8RnbBnfkenmuMdFdUW98zZ4eKQAj7bdD3We6r62Pwo2HJG4An3LFqnDgWDSDRXsC1dm4MMxzwHUqqTG",
  "key43": "37SdA4tMmdLrzQQt9DuhbjXJaDDbkueJbMY2U9yNNypSYzmVZXLUPawgRVnnF9fQahkDxgiweyxJxuW7qs9UNEje",
  "key44": "4ecodeJp91ack4oEgx8562pLbFa3XYAYuij97KWG865sr7CbLenGXdmZSMTBSHmJstALMZ3LS9myUNLpat89uLhR",
  "key45": "3qEkzxJ1yN2EZgR2rHKTyX7iJAe8udjgwGkifrQFVQwvWuQVuDtmryBg22YDABLviYATwLuGJbfq7CbgFGXUqyRe"
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
