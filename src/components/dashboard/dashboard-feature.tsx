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
    "3PQnhYYCeuADxV7hVE4GLfsiUYgB5Azvnbzk98vrE7geoA6259JUVqgSMkZjBxU811WveNiNoLMs8drqtLbBigZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZybnisMDE2TTWMRhEm2LdUvtY5K3eQBqvaf2xanqS9Lp1Pc37TT9i5z4LSw5Cf7J17j1P3BUEbTRXqz2dGC3mq1",
  "key1": "37MSYyACASUwGvnEKzCKdAedE6KSoLHumjU2Agu7oYaT78uwsuKfQN1GHoxNqMv7fpa4D7XADAhPyf5z3kERh5mM",
  "key2": "3ioPrsB4SgHAkngKhx4ecNESeHieAUR7YbZin8gkVmUaqbHcPG9zBworU3UhSPM6Axchm7tsk9r7xiCCi3fWkQi4",
  "key3": "4a88vaeJJfPXhgva1BxFXq6TVtE5sVmbzCZKoJ7foJJEusHicsgqspXBoDuh1t7uNKnahSDUPAXhBFcrQwGc1PFQ",
  "key4": "5kMrt4XS1nL9GNKKcuZQEtUbxZEtk6zRqRarthg3RzZ4Fnbcwnp1ExXA221QsQ8ekynPUyajPpNb5LUxmM2FYngK",
  "key5": "2BikKYejZ2dBcNs34YkTq7rroVTuAHshYimC1bYhvyFYpGpHwrNseKzni1RmwWFdwvY2bJ3WHYWnFUrCjBweHPqP",
  "key6": "tdkLJDzbfdHKYTx9Et4JLpWWqcjDn99A1t1P3arEu5s6R6vPQXPPyrMTPMuviF5p7ZMaN4nNbYvtZDHztAB19mn",
  "key7": "dndhQRGDk92Ewvcn1Q2qHRUHABgSZDjSf9TYU8hmBJSXFAMzxTh5VDNiyA74RsoCSyrMViTR9B5X1oJsZ6Zo7mA",
  "key8": "3SamUAwa9ubhsGFJ4ah1355ezyw8Jg3ATNGMW5MfgeKLF8PD9Cx7CfZPe93NUuKdRrzTzZFArk65Yn4GAbDNZTzo",
  "key9": "LrgEqTMzoAto8kbqSo5TzyYbJZzfAoHrEp6Vr78ohcD73Dbkp5P1LZPwvmPVSyR4eUy4tsiVdgjmUQ2xmKMzMqa",
  "key10": "2KSexznMJQ52Kf9xA3i1tfvrF9TZapFPzkQ2p5P4hvdLJQsqeMTd8w6S9p3GcQNYu1BuSb6X5y8PwiiS25AobS1Q",
  "key11": "5seshcXLSeQwHF3o9XvA78vLdJoVkEMxrTwicr6agyWERiAdQpZpNr9GzCaMJUmMV9MVLBiczegQSr3CFHB7uXfr",
  "key12": "4MUaGtQWheLda1LsX4M6jwLEq8caTgpkXFs2geVsbT7TvfPu9cd4oGLvmF8WgFGYikJdq3FVNxjLxGAJUaPPGLps",
  "key13": "2C1nSoYuUoHJM5vxjUjnmUfBPMx9HDESybWMmxRytBJ3D95SCL1P2vAdiQ7z6sr1t85RJbaaxCbWDLbWAagsYjUE",
  "key14": "2mdUxmjEeTZVh6YK1XQ9w5kuLnYsHD5pcrCJfxqGGosfWYe6g8gGZQSL2XCT47vjry3hwELt7SjUUKX1go13XdXf",
  "key15": "5Gtsd5gLkmnb4LPmVf2GqK6TW3AjFpm14NyLVGJPsvdY7csbMZphXabWPrK8kUFJ5eP4p3ZXqx21pLisbz2FAERy",
  "key16": "2ebMooHLD3zuY3FxYAY8VWjJzpFFw5vtCoL1YLg4mMwbeKG4um89fgRhj5jWSUhTsBXtb8KUfiF7zrhgTAv6iCgF",
  "key17": "24avNYEsHR9zLnKio3Q7JVKs3BdApqwxfACmUvyiQvfUyYV3HbnExFbVJX1WGSieRZUSXgZdBH4Sy9Jx6wpNLkZw",
  "key18": "2RNPbabU1Jx5PvB4cXWQVzpZ4KL6W9r9xLaonUy7RFmovCZ5Pw4tGqg3ZYcpwvxdt1MRnJ7HAXwvEvQWhaR7XUty",
  "key19": "4696dgkPgEowyXMeSZ9uSETPUkU3KTBxVdEVS8zSqS1VSzNo1riiy4hCb551VqsdLNmZv1xjwUYB5Jg6NzLxcZeM",
  "key20": "632sTTK4soypZ2F1yeb5yzdqvwj88ZPHsrT2aqr8FHSuh4gXbFW8z7uudFBUQMd6nLh2DLFoSNEYGMwSr8tsE63m",
  "key21": "3TeSmzUQmhbsgXyj5sMjuyTuEfWA1PmqwNKDUpc3EmUMTbY4o3n1AkH7y6V1aXw65FCKdhf2Hup95DHcaGxZVNRf",
  "key22": "hwbVp3BCenptR22aFShyvxKRNWaVW39pNoV4iKUpm8Y4ifNb9oS65KyMXBK8iac9Yt5XvZZ7exzx492ec6oFKty",
  "key23": "5YZSVQuf3PmwFduiHnUVBu3Vr8EfJHm6DG9ZpNpnd4oNg7btomn4yZaypdE8oRvYBFW1DH5WAhHGXEovdjNEJu2n",
  "key24": "4NCZ4dnxarhzPtpvFJyu9N2VKWR4Y6CYfG4CKmTocW53KwspMFFFdh59HSEdh8VwFn2qeMzXYfay3oQu3bFziTUe",
  "key25": "4ssyic8vYGtgAzUiSYvT9oKWL7qG9J6MgCiyA8GxQ1FpaKy5S7zgx9q5HwRrJFkFkkMxJGg8tTrWRhZLuapxoNwS",
  "key26": "2QazQXBgtfYePxMqpSwg4zVJJ3i1nyQ8Zk2DEQQB8xm6LRxAtqx7BQsN36qcPiKySqLCVCCnaUaVwixPdxXV5AcV",
  "key27": "48sdSbXvQP2HZeKyvBSVu55NZWJYUivtuEfkxEz3ULPmnuYD4BptJv9eVsxSEMYd68R39FRgJoWappPqA8gqux1L",
  "key28": "4bSHWtWeUtsGDohL3kCLxkECbQdXUxN3fAVoiLE6SG636FoV2rvRKEvtCu3pzq4cPnNw1dsTT1agTHbZ6TXcwjeY",
  "key29": "5TNYmoyUKTH1Y5mgyMJdbmdNzvFQ1z6krWLhpyEFJQ1n2qycsz3xwoEyqpdz8MmZZdv6G4gqFM47d8enkFEGAr7c",
  "key30": "65UJAMEeD6rUQZzghwbDrPWTPM83hoEWno6cQzBvBJQzmAgVSk4J5R7Yfgqj6fMLudR93mXZyAteCcscJ35vwn8F",
  "key31": "4AFC8VR1w6zFE1C44YeAPQoNaD7QQ9DfaMXJ88CgU5sV9SXV3bm9h9GauEitS12TqSPyhthj8mrs317PbgSL5sgS",
  "key32": "5uDAjhjvLgnLNxfuZqXceVJ7VZ2a2Wy6wVmdy2bFb5SetHFuxSrt1bgfJM5iyTTKiSE78cgCw83hyQqD14yBQXb6",
  "key33": "5Nb6jwiqTWRFg7YP3ss7dUccJdUygyEQk1mrCHAdWrWMyDXoLv2uUmyNZsrAdMa5M4W893kJGTpzh864SvBF3m4g",
  "key34": "DWR8WZDv8kuG4M7LPoPHadGS3ShpS2FBLdrFQEVzBufMiUu3Sb8zAHPXFqSXFNiPTEvGUbjpdvFAZtp492kLd6B",
  "key35": "4hunTHUtZ6KdcSGqidKQrzn413o1QrY9yy7YqFpGVj3KpnTiRQxZcM3P3ehHYTjSm75gfTJnTwktSk8fmpFTFSk1",
  "key36": "5kN7nvmoUmreP4xNTqQswsxLbqfEkPHYRs6hKrn62XfvNvHa5DJdNUu2E8bS1VmTML4F6HEV4STDPraDb3MNaZTp",
  "key37": "27Cwpr8uEapdBcQAjnHTMz3Lb14NR6eAJ4sYnxAPgzdghuiSzxtywDNgpPXAMMrcKwkKNKze1P61GE5WLhiVDdAC",
  "key38": "jSgBKiaNDqdiLWuAeeK4PwGAySHGPwkoip9EgMgbAvwiERuwFQcNXvHc7zywMxpjBxwhrBJteZFKP2jmKvfpVtg",
  "key39": "5DuRUsTev8x4DuVUmjcfEmVW3yyM6pHBJUoCdXEK3x5vzEk2gP79uKdTYLcPpNm2rtYu1KFi1sShcXaAkfhhp4pJ"
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
