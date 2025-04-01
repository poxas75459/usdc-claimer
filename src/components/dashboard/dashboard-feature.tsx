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
    "5U45PfeyVkYcMWWRgTLz56H9YSgGvieh2yRjc7yVzomDsfJEPwkfKNGRMTWwfZYVop2R2MdCSwVWurp24rfSW2FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgdisdfT75sWrwUhykBCXinmuq1TumTixbGWJcrBtXQxNbEY1F1sqrSCfd3fwBS26ySKdaAA36zH1qLLbiCqVS7",
  "key1": "411PriZvGyci3BANvzFV6kGPmB5Lukm6xmT2MARE2WZBdAdtffeLaaRXr9dnd2pGd8gf9sd2FELicRciQCUNiEMK",
  "key2": "5ZnWYDLhzjMum8GjjcAYwxr1WeSxJ2n5MDHxEqyYaoPvVysWtNszMfk1a7qhRhtf9ryGzVF7N1UvRyhwujVtDwsL",
  "key3": "4FeLhPaB5BTBJ9qQLdnc3QDTUbbBCiEVuxSmq138be1wAnXzAtT7XbKWd6f97738yYYHh7vHT9QShVXDp1Uv2HXg",
  "key4": "5MdLknG5rrJzgFuRLSVb3Rwwzw8ii9ajm1eCFe1744THiKaE7qsWu1Dis7rnp6FVGcZXxW2QWKCRaBaaSqsK6nmd",
  "key5": "2aAXX1roikTEcQ6PfT4e93emCnxXzUYzsEUwZHF2SxtAdbCG23DDw7bmJMjkVQBwyaq6azpBURKwVR71oyiUBQiP",
  "key6": "vMvfu3S7nWWfnUiHa4grViecqSuopZrvsqCR82Dih4kjgZvWFHhxY8KyczbC5mxThWHHAnNhU3iL8x5Wkh8eZEh",
  "key7": "3iRrVepaJrYpyP84PYkLWmENh4dcW8RcU3YKZ7ByGsHqki61z5z6bThXtjbfMARAdtgLKE4QEtDqzKdJCKgHVvGP",
  "key8": "2vKdtYFpJuPp8Ab8Ets5wtuHjYT5Uk867ywGdGrUZWgUmN6iRYnoSbAPKMuv4srKaWLvbk2HSzYx386dduxrFhNB",
  "key9": "45JDX1MAnojnTBprsT96zT3Gr8qLAAyYb7gGFbeqT35obxemHvrgCf9LAyBA54dJ2tPF4JWZhKD9U7Q6DtXkvt2S",
  "key10": "2cL2qtusLwEySWdSqRbWNVZuo5bh1zHQYZzRKUPMvTZJys5dCfymRphtDSSVZCaqBMNjT358inFLDMYNoyQ8txv",
  "key11": "4Gbh4MMz5dcv81YsfX9KBF8yJZJ5mzB8ViJXnLKZatk3323ZdVoagi4sJKSTG7P6jsE7UVjPZoAgxHwSA8iz2xnQ",
  "key12": "39Y2XNtboKescBRwUrLgqNeU8dDDc2uazymkwWrrjdwGN2yZ2K3sZ47UZbcdWcLMPR9NuztzXPqQnt6N52AsfZCL",
  "key13": "5wxyjmP9ymx66R14EP32MN7URHYUpizwTy36fa911gJF8vbXaLqwGLpYiF7dyn81NGuN9TSzpDGAxQhunX8LcohU",
  "key14": "2et7fHUv4wLcDWFr5tUoKSeKt8r3ahfjemFtPvTJ2FdGTeot7cCttsvESQtj9vjfCAiJhg1nEy8vQZWE2RgiHpRt",
  "key15": "CXAaWmxAjzuqajHrLhN9rRvb4RonKMekk6rdnnoecypveAcx7e1uEEFAawRAk27WTAPk7QqRfUrN8U99apz1Eog",
  "key16": "3NkeQH7TYEUc4PEWe65pAsbM8Et4NJxdtUJLPwSsojdLoSv6wzQsLADfbY3byNB66Szf6Whwh7kNW1enxMC3V747",
  "key17": "2zLqptxUZD5JKLaZQac7XWqzuSXb4LXNALJdsJkmKk1rq7skPp6ZxTA2QjQZ79RR1MQjKv14t8YPqp7SSncT5U45",
  "key18": "3APPQVbkpZqM1eyVQx95Hzn7fkguE4ArWenVhaDiPByVMVv21ewTZyiSPQaJNbPtT9zmPpRsfM3pzphurFe5AYBk",
  "key19": "4tj8SqGC9d1a97uwVGrobdw7yLdipEkqDJf5UHqv6of9oLCnrGeKLbQbuPKj5ZFgSi6azZAYJytw39xVk8rEtFFf",
  "key20": "4HsDdrsWhmPQ5exBgGjsuHb67SA8UNCEgHQfYzGKeRPi2tH5mrScSu9wvfqbdELGedbEUVzkx3JBiq5JhDRC5fAb",
  "key21": "5Sxhtc2mmrRXp6CwDxkweabwCz5UDGxxCuuDzqUKp6KeG7wC1wgRfGJSn72fQjmJoF3bdaSFUTBer5JkUGjixQvk",
  "key22": "4joccLhbWmddyeSLLfsYqkFe9o1XToAaVG1fRoTcwpdNuQcehZgynd36jbLhewmLi8GMCgBEEemkNeu7SW5XnQPA",
  "key23": "2pW98kcUXQqbB8km9smEmf2eqPNg1QReBKz4nMPXeUwUUepMcqkfG9BoWwrLwGktgUCKr2fv1qvRx5Z8yTuyZoTw",
  "key24": "4NuYHjKcnZkT32oXcbDoteXZLKnovm6snTqKRiGtR3gNkf6JZ2bxEEdseYYv3Jh8pKJrWhHnCNEsspbxCQopyVic",
  "key25": "3T8KZ72brvboLfG62R3hsrr8aVBfs9YtN8hxSraiqWEYcMMMs1QGHa6MtxXG7nXy1qXewx9rQzVHYdUFM2HaSRoT",
  "key26": "r6bzoQsMUARZoZXSqkY2LpHSmvLUwU4V8ETjAqWyUvMtASKiBXc8upNCw2pYnoWWa344MYVtGdD2KTN4yADgUhs",
  "key27": "3Yf57Q4jNahAvT1eGasa4jG4t2VoRp1aWjeuNjgpjfKyaQjXc2nhUBQSqgfojCRFKmtX4fP3hgBBuMpwmM4Yx2Zp"
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
