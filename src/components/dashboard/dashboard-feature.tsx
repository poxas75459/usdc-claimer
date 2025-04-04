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
    "7GVk8Ey4hC7QCpnH4HVUwwN63X356XsL2dtnhgNfJ9ZRwRDRCrwBNfqELc3YvQBAG7wPxMzazWnw5nRxnG5orfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vC4vi6uh4jDPTwknLuJxDeBA77vWzhHUFZeJ3V46Lhp4v4ar2q2bSoGfXa3FmqCtuy18rGoyK537c7UhacGZbd",
  "key1": "5qWUWVBjv2JQzTjXBUaL1sgmy9f4RF3a9v9feeiBPfQWR2vMM6idctvrYocSZWkn5AW4m3KQLza2gsHK7n7B3d3D",
  "key2": "3mVazL5dGMDubZvaCoziHTin2ZutNzdwm6eg4Sf5ZM8Yy4n8uvraKNhhboboiSsEwRQvx9xNvbhK9TU63zmUndih",
  "key3": "4QNAWyL57mnvizMwMosa9nVo3Rfdr2iSjaT6ffZ6FoZWLpdVZY1hjBcC2aCoGWkbFQYcAq6dsBdH38jwzZtCsttB",
  "key4": "3TdahJsNiTxnigwzcM2gJ7AK68K3zqErFVnJF7dun6f2rgDPRqr6GG9YnbQsAvNqKFZyd5nw1kecAS4GZ3KTFDAP",
  "key5": "3czDzztbaL6VY1xiffBDV63ChR2QgSLDsUNTCktGWvY8XBxB4zPfDYGnBQZXm9yFNxcNBGFkqjgMnDKN7hfHjBZ6",
  "key6": "2Sti2agAetE8fXTCfB3EoaMvd1YrywuJwScRe11qu9KLehdGpctSYCjKtjnwNXd4iLLjDFFQHnDXewockSZGNUnN",
  "key7": "5ZfQBboTS1EJs7dq9NRjvCfyBPuTkHgckExksxPXNkVHP8yYLFYkxMpoiTSHth9SaBnPQJ1dYtVQwqGJKM13gGQ7",
  "key8": "G52vQ6KoP1Mk4uQ5oa9mmE59aQi4ZMm12o3KB53qKyy34kydUf6yQc1TQQidLX56V58Z9SokauvcZWFe7gi96Dc",
  "key9": "2SBFWZDudsec77ZyoF1yTy1vRucZVt2vYnZduve2F3rAHbnmT9dYB47Tycvzagaw51K46pzNAawnspYo92Q3hh9i",
  "key10": "3ro5cyGuYdsKhLxPqbCiGWgXjXdoCBTNc6Zj9dMRXueLLZvPCBAD8GSNHX6kkLUd9Vch5BWFXYCXcWkn9Njoj1pn",
  "key11": "2SHbKbfbCks6xU2GYHKoHi7DfXbh76tLDy9nAfn5TxYaiLYJfm7vpDMBq4kGrz2uuKUVv2RVFKwP1bpE1Pp5LQHa",
  "key12": "2vJxiGCezT6mcPKDcypx3qwnRcyUdqwtT4bojiphXyvqJ5wVZpc2712Kps2iKvBb42f7tYrhpTsyiK5B2Jei8oiZ",
  "key13": "62EyMGzooQDnoQf5vfYNbTg42iviVQRP3F9JKnf1yp3tno1JNSYw9f3E1J2U48w9riUySgXmJ93CpjQHtXKnL2eH",
  "key14": "2qwqGX6aNLtuxJ98Y3mXsEwEMwRmmi3b46ZfhLTw4sR3zQoccpJku37gFTYDDy3Pnm9KZb5UwsuW9dpVHvttd2fn",
  "key15": "586dLfTM56BgDpDZtmzkX5iVF7cJSpVGYefGnvTyqnP5B42RBjGkFZN239e1Lpf1RyTCbAraXnrGKSo1PNkXHeUu",
  "key16": "5jV5RDCKf6cBvth8JsEfMGqDH5z5wXW77fRNxzVnZrx2rg6AgZ98Cq6GLMRrbBZjFCfcfHQ6NrzenXx1r6SWtdQh",
  "key17": "3nENK9uS4g4uU91zT9xyTDwMkjpZtgLN3KP4Qvoneb6S3j3nkyLSQpBTrHx4Y91M3w49McMWavS3sZ8nseUAH4Hh",
  "key18": "5DDd1XHir6xL9y8BZR56bFak2H8ouzWz39vSefoJDDAtXVjPymf2FnpXhK9Vr5zoDJw1kwSqLkLdYmw3qrv9FtQX",
  "key19": "4GE1ZdJdEUX65GT3HFZcSvGjcLm2ADio8rjvgeijLW2fotJK7ZfJAGdJRjbsHhTx8igogMb3wx56YzDMNczzuVyS",
  "key20": "V7R7zUf8xcG3435L3Em9g3LVdVvnvjFT5zdzFDFcssK3jxfjnxgmAKdwBnbeaCdiGZUmaxZTCQsmnEgGdjcDciW",
  "key21": "4ZDBarQB2MS3EavbxVD9h8eYSCYkTfTpGHRh1Mgc6XojCvPqYoEiHdzFpgGmFyhwC5NY5SGjdvE475Hs3o6zHWCx",
  "key22": "5csyTrodoivVFrW1T8NWG4NvZ8G8rYv2UTon6phLKdTFMUW9xK5qRHaS7LLZ7S5mzZCjMeuSbjyziTHWSptsR4aW",
  "key23": "48zm5YtBQTajEUrSSFuscPSGi2sCRWp6ZgwEi3JzQUuFNgPwVXBVQNxDVKYWw9pZqRHtCwzjkCrrKUkLcYS6T6dd",
  "key24": "2chD7vB9Pr6JzXRrks6UTAe3SDiFsXxqDVj5JZbsxTVYmyiPF66jQgMMLvSYNE46nkAs1WQiBKVp1NAb6y4GG41W",
  "key25": "2qKKScLnB7sffhdKFJn3Fn9PbJKXCZ8oMcgisrjzcSqrvZfSFBnpkpsaZCgFoc953heLhCtLZtM45Q2n3o6t1eAy",
  "key26": "4yKCEe5yjvrpjMGcSWboCSAe3EN4xQJJP4aAd7t58ragHQz69oAXLDqhvTa1TsqRNk8K4VSxHSQDgdZ6rQJuaFxM",
  "key27": "2mqYFETjMjR28VbApxjVjpR7zS5iThpf6nbd3GUer6PDw3BCfzwVVB8f94RcmqfbvbE8FFfeBUPU62njdRZnJtWb",
  "key28": "4y4KZUdDLdEWeYeUzgpWP9yk6hQiaog83w5Zmpa2phqYSkx2UpNE3VEKo9xvkvEEg8WzJ2QkhD93QEbQhwJ3nETd",
  "key29": "5vxas8eNN7TiETjxpwarB2gvPfPfjqGdj1ACvEjrH5jhVfpYzxLg8RW5FSpq7aR3bgTuhgiVX1i3S5j4o2D3j9ST",
  "key30": "3f5oQYfzjCFeFf2nhuE43CbA5pkzsSSbV3nNR4G2MCBpZ4d78gyhduYRh87fTgimKqyT3XWgfpsSXuMDM1tPzMja",
  "key31": "PoLbucvpYkzB6BGnUJcRz6UVszycqYaq9Zxi7Tjv8vVKYiQs3rxhuYz2eFGAMkGoBKYtv8i7WxojRaa3ihvV8H3",
  "key32": "9kAWyHStBYk5B5sfs5XNm5P6wJWji9vvkizYjvNUv8Cqdrdkptai2XagATFcFwRm8QWHVDEiMP9yt8MoJzYgCct"
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
