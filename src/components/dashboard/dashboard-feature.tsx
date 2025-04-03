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
    "3tS6GJyC88zVpiQ1iAevB3QrT7yYzTiEza381McaYbUS7Z3JsKt4gV6ACzv6HDq9Yi1C7k8PpXLkPzGXg2yYSoLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9k2iDE89w1vPSZ4S8PcD3McZreaqAKNTvmksdvyu1nChqu1A1TDaiXBJ3aQXbehnTrHSmfPaHEsMbXCUsRyK1q",
  "key1": "3tDkiguFwUSSzfoGWMJnBDk3JDEwgPiAh3MBUvEgfoeu2vDXmLWutiZQpRsCVKMMUCTt2pKQk5Dv6CyFe46fNzuR",
  "key2": "PTnFwSqm8idsdWyadzSyTe6TVYSG813QvyaaBTo4pJGgwWnmgAWTq2a1aSG2NLKqTLvYFQtKtUEeSpQpGvRDprT",
  "key3": "5BomogtQw8e3PhE6w8t1Mdc62xgsrEU8aT8QoJEgRtNLN86nZMHNva9EBHgQU1X7QrFJiLhDzg3rDpedAiHNcaQn",
  "key4": "47ccrxAKHCkpq7iZmicPpMmrUv5gpgiMtUZKRJ5MgQ8XZ4wCvtp7KPfdh1UykK5TSdpSV864QcE8DjWGB8Wi4xsR",
  "key5": "3TYEbYbkVKL1vyQNiNzyMay6899E39rRK2u3bmKpRTwFPQoYVq7SRW8geEiYJuRecs6jjJeBVgSP1Kk165DFqmGe",
  "key6": "2qwcZP55DcZjhQRATcSzWZBndDHwor2Cp3m6r7f9MRME7wNiaHVTXLMPh25zYST4gGbAVyoPt8S3nDhUU7r6YDF5",
  "key7": "6QB7hbjmMpW9Y5XxsYhq9FfzqPNsBRs6eAKD1oTWSgF7F8Tg4QhSM1XUjm46DWGQ4zmHxBSJhYMLt38rBLTq3Rc",
  "key8": "2AGBEFXgj82hDziodcvSViVzjqRTCXnj4U7G63UXD7QPUTyVpzGZCCRK92S2nbwUTwTAP2QadnXREE7dPWqn3nbT",
  "key9": "4Lty7qEsR5t4GHkqKzubF3JQeenYXapVRF4ygigMkZdp5MTqGC1GSQ7TCeW1addMAskm1YNYDLGmZpMBe9T9STYC",
  "key10": "2U2Nw8aKmN4j1R8mfW8PfakTRmeqAifXx8m4x4onMTu2VU29eVSbRzqtdykX7Ya1jAHV85rcRuWyviYWm4YngUNR",
  "key11": "3AXD1wHfNFK6DC8qtV9snfp2shZC43VE2uNojiEKcMf8DunkDEcmDeZtpjE1tjB1sagnKwCd7CgmcdtugYe4EN1W",
  "key12": "2Yt3NakFJALxLHgpcpLojSCVZWcMovLZjwPdSMFEM4GkTw8DqnLnspeJHxjckU3Rp5Ftwu5Udmd7ruS2erU4NXFN",
  "key13": "5Jc8ApG7UHEaptYzNyjWT2jw2kAnGPwGceS8HifbahG5AXic1rB9187nyhuAJGS9rsfhsKJRaPhhTmgxqpgo6Di9",
  "key14": "2Q43nWeN9mKVvf2mPgTBEr8sMqRtzPJgo7JCkFM51TD1HKbooKRQvJUwxvNQQEgt3GwTmDj2gnAYaojcwdEfP6aM",
  "key15": "Mkd1y9cMvRWFgNh5ct4my8VdViu5pvEZ6v557n1GAvbJcaK4Q46eLduskoQnsnWM6JN4E7swvHiobu1RLkh944M",
  "key16": "2aFzqKAvFnviG9Rc1c1LfjkwDVnddcT8z9Ypk8zkgG3M7V8YZNfYb5P1fymyPAH27DbebKobiEHkmZp6j7NGFmAv",
  "key17": "4YdZ9Q1rwq96JjxpbDryGs8P74JzDawBM7sdfbh1BEfbpZJBuupUfWLMs6dPsssd9wp7VsjXJRgmqcD3zPMJtHpA",
  "key18": "BE9hpXFi2AgAAbFn6MdhuZVsdLdzc4gS4FQTM7sBukmU4xdLhHfsipRNtU41TDJb6e1DSRpHV8AJD6hcAgA4wwb",
  "key19": "3BbzWSAPsWozNkhYXTb9mzreNWK7xDVh2suJkCWwckqRE7JiAXADY2BGY3haBQ7fGtBxNbnmw6xL5k2BuR4N2Wd9",
  "key20": "5oPG1MKHwRtBaivsAyyvyEVkpaFUWs9CeJrP7KbtMzJHoTkHcEiUW9Fp4urmxAVfXtKNHbdLJGht3gMjd2qb3rXo",
  "key21": "2U6HmgWinaTsj5KuLSY6UfsyNBDCFj9LSdNHAqyZ4rtVqxmLnxEGGW1GL6AaTXwBBuDLCd8GuqSmZHSqDXSucLi8",
  "key22": "8dtYdYQ6VVtfUrr61xSeiq2tx6Rm7vE21WsZswxMcLCPFZQv7ZZhNkUF8CqF5yefPopg5XED8NJNHaHyg7DeCEk",
  "key23": "2ayxfqNraYjBhAGz3Vfx4ojf8TSTdFW7BKv35JPfgjNAHzeDeHVKTpnahiWx1mvQs7G2vAQobZ1P9eHznkaa81cV",
  "key24": "52crn72zEPpMsGTQZX1BTvEGQjxZpb1HmRUGcvn95oQSdNR381M248jmfgkyQVE3H8LQa1sNW8eGA7pkyyiGc3QB",
  "key25": "8k3qCqKHVMHruXobFZTPwYzVy67yShP3tdo7Reqadzt8vpsaPV2aW1V3Z6dr1XWR3dNPsD4RSkTuqc22Usm1Dep",
  "key26": "58rne6CvWEZ5dyj782FAohBXZVtMDzzQ5TTdTQDAK1zHgwRuVnFmkeZR1MD2RN5yprTYAf7qTEE4VchLmaUMav1w",
  "key27": "62WbA3gqH5oA6BWxsQpTdpatZutqTP6Ls6uskWw9J2S3XNNuT62qBBWRJqvwHC76ZsnspS7KySgWeteEChAepHxv",
  "key28": "AyieMQZZQqXxfg69DRQT6ZWkRYQT3WWoJK8PiaLyABRjqZkbkcMEMedueQnoqKWZDBM3hCjba7Ban4RqdnYGwmX",
  "key29": "2Dfd83Gr2KHQUUWBAohfD5yNW65xdHrnZxPL883XQAU1RfnkxN7T3kQM7CjPqH6Fv796kLgtYe5NyiTM65ZwQbPk",
  "key30": "58KHXtd3xepKesiqKFgewohiZGxEqgKffSKexYKKtdfdBLjjvVADQ43BCoDt3TbUoYDoesiQw42hmF8eFNDXLMWX",
  "key31": "2HvwNmikpbby4QskgG6womucYRhWzvHGo3c4hBhbqNm1sn7irdmCvM9RSuFXRAHaia5wQUUsJzJ7jpZFaENujZyi",
  "key32": "3iD6fnnLHx4j1SWMk18k8HrpGwDegdF85GZt16DkbbkcYYXn1XimGKM34biHGkFXohwQk4zBHieQmZKfXcDuFHM9",
  "key33": "2KNiR2oCj88JxTANB52PxpKhWTR83mMYC7w7SdkPpXN9eH1j8ujNPU4M1WgrwWyJM571VVMDmBQrsxAEvb9919kK",
  "key34": "xcUAJnUcMVdhZZEAj8nLJJNMG1d9QanasRMtLqJvUsPqhFsx2etYcfVCsMcAffy61TXp72FQcywaNFKtkyF6yJn",
  "key35": "9UnHCh41AA48EAEfSw79bybuSBHzMzWvqvTwKgMMLhcibDYNdckuZhUB5XdPtUsYevkWsvhpTPt91qK345aNomT",
  "key36": "283Hx9EG9xhWVC4FBqWotbMoQLDg61np3VxZL3GCaHNcnntZrT3GzkGyK6z4Ezh9YEkBoURZrJehuPQwM91eZhbw",
  "key37": "4aYrSJGNQhfHSXbYcYPQTHgrzq2b8BEpLpkWoss3UQoT41BQ82hrRejCn5gjRpyWtnzmZbLt4YfKEEsjCJx1FMEo",
  "key38": "46ePJXp7Vx18c6McN3Vebxzr4tdK62xiRd2TR6aswe1V6bVFyuJAWZiXWwvw21CNwKjWJcMyRBjhUFddwknNa2Ni",
  "key39": "MP6qm4YdJuvFZG4bja8NznMQwEEfDoGSsE7XbwpDcCoD6bZRLUHnK8aexHedras2EcpUpzbH9vjH4DHN4mZAnAz"
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
