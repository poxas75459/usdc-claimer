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
    "4VS4ZMiG6t7Kc9kx99VURstsoMm41usFnXT9FsUfeKePPmJckHzY8M6dYbt9AcWzHvP7WUwq6TNXHPApTtARfjTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKKtLWTW31w9BJz5WdDo7EctmTjhy8BEDiF9SkoocWTnysNCC17yvzTYyiRDPPhTKGFaxnSkzhKe3sE7hcggJ18",
  "key1": "4XragZKSzfi7VK6Zqeem796JcdUQkKDMKSo8Yg28cLmHixcrc3LZ9JT5V81kkztVxJPjkV9CrftVrsuuhHMybxn3",
  "key2": "4CyrvJDJWoZA8oFtbXUHG4fuNjNWCmTLBtmpMeFSsL1rU9areJ4trSg141N5ck4hPVRC1FBtZd8i7xpWgsuDfPTs",
  "key3": "3B3g2jdx4gwSssCQx427rhtXydhYcH8LUs39H3PBGbPy5Rqhaeu1UPNnx6Lk4Pzk43sGg3ndBVra5xQbc16wggLW",
  "key4": "3NfN1hhiTz1jpuZxczjb8VzoT9T3pLjqr7Kw5zmq2eup1NM6xxkT15WtYrj2zG2DVVkAMAQJxSPBownw9HvD8559",
  "key5": "4bZBJWDNpQG4oS4f7w6mV2iLTkGb2wefyR4VkCHTx3syfhh3E5YFhnCEKQaG1uW1JrSoKPX1R3X8kJ14E5yNPoMg",
  "key6": "49Rj1b1FvEvhezx9dZ6DSDtjUnyyck4arnY8rM7BQMTHH6esPDf2P2E8jR7btC4RmUzDoou7okjTUf7Q1poQQdNL",
  "key7": "5gX6SC3M6hBqb2ju7exJjdBEoSRVXeYXNDqtKqR9xDMrpDqdS9g7iCCDXCHUN4jCh33iypWpeJ5QnKA717nPo1cR",
  "key8": "5VjnBPQAUZzxknhGdD3Bg7jmjKLFaLEfA7ALBhmMDvi9wjJVYpX69YfTZ3o5GaPCRrvWeaMrsjW9FavLsRDWnvWV",
  "key9": "5QQeaiHxWS4UFzB8x5kRLPeQT5jmbqMZJtPCKJWcvZbcpmdJAp4ctzqLstR2eUopF23UUSxhRjTR291aKmtBPwmL",
  "key10": "4D2bs6xc5vQZsWQCsCZ5Tr585AgCMNfU7Ey8JFgHRRTRLMMEdLedN7kGDoFZegKRTTKj958fKEtfBPngMqTPYPg6",
  "key11": "4wiXHqJi3UCmmK1S1QYDPtmQFzdvCKa2WahiSxxKW9NeEsVdoM92NQQ97S7BK1ZVprqbEk6NQC7P79jguMdfBWpw",
  "key12": "4AGDzTcYVh88CPQhWvtJDuyE69w7BV18enNAK4dWkcTT6PnNdjKUWvGmWyEsdfgJ4KESZxb6fKHG1iwzsYXWkqMD",
  "key13": "DiP4rcDe4BnEc1gmEyQM9eXAFEcGQ2cUwAmTXmwPMSnxEdSGhg9CSQ6AvoZAn7A1fskQkmEdsag6hi6RuGJbvjk",
  "key14": "3X2wwSdj6NL3jyabqkdfRKrxVkghTGW9BPVaonAFtA8yHRUaTE65QdoMz4q9LW4xM1enZV98UQA4J268Zp2yBYnq",
  "key15": "3TuRiQBz2Zp4BPyAurNXqdbnB83LEig1Hr3gABrNVqoXyNu36mfPnwbAHVAHkCtdR4aJd5iidy7wjbsNxaWJ4QbC",
  "key16": "2qbLeN5pK9treuXbyzewodNQh8faKZ59eEemosvGzJer7KtStzSz94ZBEpNcifVdeZcdEeTbWMhGMVZgmFSSSuY6",
  "key17": "2cvDMQAwPryJKg4a3fz4P9dWjZJqakYhHjdMnYPha9VrxkBCFwmLEKx8Nqb6P3TkisHBXHL6npxdbipHSbESR631",
  "key18": "4WFSWxmEw1Ed3MCqm26P1nhn521wszTEVeBbDFM7jvQ13GDES6J6zhGhf3a11qHt9Bs1uGU8nHpVaokqaGdKNefp",
  "key19": "XRqp12N9LHKbRYRi9RGkiMf6Evoe2i2SZ2EdDHPjVqmEiLqR5fSGQqSopCQx8X9z6mZpfRLZ2CDefEXL3dp5K9Q",
  "key20": "3XBMja1x53a7u51zdQ63UQ9XQcpKDH67ZPie2gM4W2LPUJ7FDKYjoZrBxaktGc9vEvA4FUYjAcndoyMukHpoqbJR",
  "key21": "51J7KDs5FEuQ9PXcckze1LCMnLMDrk9kYyaY5SULWDfSh7qfMm7SEjN3vUz9CGitiZvhjCcdsMRaXSAU2parpGUi",
  "key22": "38VqbgwRdmxRq32jAvSj83bshvm7QtZJ8WpLweKB2EwijqCh6JTHKhPgvP2hKnxdk5YYEpAvVLpznbL3sTBjicFH",
  "key23": "5eJtNkwJyWa4JbwJwGDtKZt25Hes7Ua3cFiTTp8M5EMBPmf7iMurKB39SaFqrqfE2peFkCbXLBxRhGs2BV1u1DYT",
  "key24": "BTskNycDkxebuckkNCTJn3aXKeba5VCfp7jgR7YwouAKV1pkjoS3ZoHEvSiPT2fiH2k8WJ375ExPDbQuQmQ8ZHk",
  "key25": "33iUQSNtivexpny2icmfa2L624SJQfL8Ax6Zq9UZojKDtGR91F9WdJ2ukbDwNnykaqqj1aBY7MpfPBsVxd6DTR5e",
  "key26": "4AM7uPQAVHjoLkUQ8i4k3Qhz2eFAUcdZoQ1LRFG4Y8WQ4hSYsowV27c1f2v8rY5v82zjBj3mSoVgnfCJP2KEzbEd",
  "key27": "4xRdq8JPUYVy77FidFB5uj5tW4QNPHhTCesiTKuYPrS1nP3aD6vcT6yGipJ3Lym4UXjnf6W6P7LybvMZN21o9gGb",
  "key28": "4yCEAT7Z8NXKoLx9HLkws6LhqMaAffHAhnhKAAf4WN35aVAEgeAkspBTkY9NUQcLWjKWXW8RYJcg8tRsdDv7U7xG",
  "key29": "5ecoR21CrHBxTridzW9cm2hhVeyzMwukstFGvAi1qWBWfZZa9artWSdSG1mUhLQWgHmwfBeGf7dF4g4mYVxNiGMd",
  "key30": "3WVvLrgdhCacYuQc4MmfwpNZCDm5mWhdxjgum1Q3gQob8EHEq3kQcz1oAmhW3AQTwdSjjzuasY6uBbYeFce23QS1",
  "key31": "2KYsrc47DxJofMeWRjqAuzHQehPPyXXhMDAw2WiQdrDdWjNjHUufa7yuxwGeZC8nJXnueDQQ3x9cHZfWrp3sYNpV",
  "key32": "4B5oKJHBNcgJt2AnM8nSfK1AaevAz34zrzozZeCkTDn5jhFKtE16TUaqjZrW8eKTq2nYmewiezahA2jdqDeTjLM5",
  "key33": "3EetfDGEtjr2QRDRUMWB3oqCbD8xPAjMhMjrVkz8KkPBUoDaoYcooi4sxnrpJ1A2Ni3hxXw7fx7sstTFgkXVL1t9",
  "key34": "YYn9NhFbkrnH7fucxK2miT2umDZDtpcrzfhp8PtccioHGjUVFvjW6rjDqa4YkZJdK3p2yWRCXpvQpjbXJ77LZRs",
  "key35": "ozDnRFwH2R82khpagrveVzmUPGM61CTDsU3FGWvuMvHfbXCZ3AyZBozPDUcus2fdZYgzPF7rGN7gtQDXjR9newX",
  "key36": "4RwxTGbd6Jxi9G2PPk7pNBQQBm2y9v5wvAPxLqfhWLqXtDi2VCJav67LzH2adBdjDNoP7FHyYJwX9E5Atg6FdEDa",
  "key37": "2kdVUwV2ut2ZMZMBKn7Yxqd5Fj9k38fLynKaa8PQ4KwyC9JDHXCyHPCVCq6uF3WwPKSGwi3rAEwnw6tR89SGLyep",
  "key38": "3pTFwcBiYNj5xqZennrq7UWQ4zwpan7AfB7nWfoHt2Lwn5P25CRya5hDLDoAhJHxApN4nSYPjqvUssRUG79iCs9M",
  "key39": "3GFX1PtajNDZFjbYFh1fNFLAVt6X2ahK9u5j42xugGfRzVT8UTJS9Z5NvZgEYfWrH9XVJpXzsVpxrV4BK2ijzRYj",
  "key40": "2Ky3ciQxyHUdDxz2u8q7ooa3NZazHmJH8nBjCUQM9s53M4KNajaUqRrk12T46cJ3DbWD7cCjyhkW1Akekd9YdQEF"
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
