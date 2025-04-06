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
    "2EQKFs7XxdXq8ct9GEXTLDJytBA3DkF5GHKqXKihbnMTRrH8PxjRrxgJaEKWm2KKNn6hJ6e3bhMZyMztr15ftJNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNJvJrSd5XKRhiGprkYimL9HbDGKG1LNCGnTcUnAyWRVXBPVkvewp39JgWR5g9eK3ubJbbAWtmpLpxEZTrg3g4u",
  "key1": "56AuXMjYoAbr7UV14nYHfAihJcWmc46atrcdVqQGnSTGHWbZyxr3VLcbLjXG9iUaTwrNevRhArfn3rdm56GCs6sD",
  "key2": "59CXYrXFsq3MFw1bqnnKzf9RSfMXvE4FLdv4Ynes4HwN8cC3mnRWHPRkvdXbD4YazzmHmhERRtMGaaJh9PRFgVb4",
  "key3": "4ntJ6AqyRQuftW8YuNC8PpAoJ2dnQQJjyVFmNGsqwH9hXPU2SVZwkv7uWz6tuizFhUrhGPTfx7ALfv55BWcfqf5Z",
  "key4": "4syNTbfPuL5ZTLeWbSB6Jv2hXSQ5GoXgfdfy5prS4Kwi42r9aFabTPybXa6gNevY7Gj4uFYWn8jf3iAF6ocn74zd",
  "key5": "iFnoABZovk7DudnxNKGfwsdzr7Cdq2dxzHD5V1x89NPazsYEAHBJD94JN5y9whZPydJ8sHBkXadNEtmX3S3uXJc",
  "key6": "2hhw6HkpwCpSeiLApRzGUbJT8TsGhUfMM83qXKnWoCExMwhGwSsZsdCKqwKPq4svDadG3YTjhyptdDQaGoDVBaBk",
  "key7": "2Co56Yj54ENf2XbBt5SCeiGjNrcMDQgBWMwZkCTUFD8BTeFBoHfJwTMNWK8MhoXJ75vhUE6qz9bGkgc7G7SEUJ2i",
  "key8": "2S3a92HWsmNfaRNxcw3wZwY5cYMJCtP46U51VoHgx16gEdooAF1rYReJz48aA1KjhtfRCGoDJLG1ecQEd16dAeku",
  "key9": "2LuKvFgR3UdR4h9By5op2NEw3eUF8aWaBD2kVkBkybrzQpYFrFNG74A2Upt6BtRyGmkfFCKJrHdWmCscwb3MkjBq",
  "key10": "21ex4bwySdQNXH6Wir1rGLkpmeLdFJ2WbRRYvH2xzQh65DM4gB9XvE5dQioNEHAZcK4CPrNnxWVBYAoD4mM8NH1o",
  "key11": "FSLXLX1g5RKE6AsgreqU6fMMpfFv6yiFNHTmZevBmJbi8ttCXSFpzFQ5BeebZD9FdJCNBvk3M8n9SaineF2Bfnj",
  "key12": "5yAjyVRoZg2Qpptk1gcMVcyKMaZtXXPiSemmLewpVsbyfSqCmKei97LGgGRNmWqWFW8VVXBpBUjLRdiiArD13925",
  "key13": "6XmCg4Qf4UV3G8qJrhELZZdnW4k9fVxa6Siaj7yjmAZbDzhScsLB2HR9atUP1SYtDa3R1cwa7yjGsh7K5szvFKT",
  "key14": "2PLeQ7wYfcsnrGWhpQwebfSMEphSK1LCSQkJhr4cPZ4WkiGBB9qcfvsgLTzB75ACZ6B9LmoCjH48qD7k9JyJpdJT",
  "key15": "2vzBAjK3Fqxmsgt58SnpGY45GY8M3qsmZDrf9hkXfaAemKSYPQYrDesak5fLD3ho1h4Ax1ajy1gAiao4UQ8n9xz4",
  "key16": "3x6jLktpvRGSMkxJLByWP6EXy5kBuR46EcrprBGhAxgND3WBNx76aNudDRSh3KVDaLQ6b2jxsHHNrjutyUJQtcUq",
  "key17": "4WBqZ9GgY2CTvqrCsxsKRKUEd92SX5XpGwznZwcKGkpsboc3kq8nmuF1dEhZm6Lne6PQ2PtJKCLKbNwjkSAC7q6a",
  "key18": "4f1RojpJjPnqFfbmCMaXVEKXiMYcoVhRzeqaH8JEEjCqQC2M7E3BLTHSSAhEkotVvn1o6ZETxgxqwS6EVu6ADta",
  "key19": "3bmfKT3u64ifckEV16pJLYvRgjBawdte6T2ycbNMwBQSC3jR3QC4n2r2cYMhQSLh1BQYjGaxC811FWD1ScE6fue3",
  "key20": "5jyHLBXy5CQ1PEVyt8ZV58DPooctgDmR9o2w7V82BPwAUGmapcet5xd5mDDuofKBWWw46ZVBe4QQVfMPQEJ12cvD",
  "key21": "roUW9NQUsmKUJZTeC22cTwS47YWXHAyvqQSLK5ovZCPggsKkKajyM6mhGrCHQyatsMZ6a6HHGYZiVJGo5NEm7Fg",
  "key22": "BCD3TXQrb4it4YTp9yhNebP612jvxWsRq3xnYuq6A5urKW6wEMud3eEk2MHYpFKypfqe4AaVdfCxw1o11Xu1GYZ",
  "key23": "5XMQaZ5kZNddjxZFKVxq7Bm1uGCT46kaEBAGphQPMETsQ6TrN2xPH2yTdJqhsuqimzcZyQDgA9K4ZH6msgTemhMz",
  "key24": "35ed5AXwJqam7Lw1Nde6YgswsUXXS5szcFoYScdYSVHXV8gpdHEZxySdrcgePsi8c31zeBxHCFAPWovTiZ6aZGrz",
  "key25": "5z1HXDFQcSTeYe4zRoDmeEUvtdqvyPcPe2tETgaKD16KQuYbKnbwRfzKC6XwVXj5EY35z8gJBcyTA5Xn3URz5jRK",
  "key26": "4sJpiKzv1zeBF5szFgeY9wZsjsXNcYvdrtezKc4JgcFhvNgvMAEjWrqBqyMFDzWWk2QStpy3ro22aVmgx8zoS9Sc",
  "key27": "4aae8Mis2HvRz3P1pfFyjM5PFnFuiDn4u449S7NYJVeFtgRuBqbioUPD95BVG9etzjcMXHmhnzK9fMPDPMQ7piYT",
  "key28": "2j176fSRb8nvgUQqczWXs94SSAZRoLoqQQ28rjoy663cAUyjKMVSC2rGKx5znaprAcqyZ91iHmtfMeFiHMwmXYCC",
  "key29": "2HAQfDwWtErBABB4dgHYJJcFS2Nu6suQ9eWVSWVJURaeM571BWPAKs6Mk7dsLutc1cG1DQr5uYVxCGjqwTBueRB4",
  "key30": "3UoAaMprXLyP2xUgAg1Lknk1yAh6GMxbBnDjwJwnP7XuQcuJcpd1aCeXWpWcWuV9Fhcvxxoc56bYa1B8wVsMbT37",
  "key31": "3MdLm7vKL6Q8oJJ9czSqFYP59aJb3kjSquN11iA7575biSH7DNLLuZpvkm6V2VyqyVX47osRYmVJUCuUizG6CqU9",
  "key32": "67BucKFFcUbiqiVGEuG31ynGQLQ1D1e5ZYJckSP8qH7gqU9u2TnW2xhk11x7KtXTCw9WJQKwMKnVT31Qycq3cQWY",
  "key33": "3H3Ly2d3ihjnao5ibGE1QHhGXugCsgYXoCQGzaBHKZsoaLwP5Au3aadQ3mhnAo4Pckm9oG5koLDGaUXx7tMsJhAj",
  "key34": "2pgqfgSMtoqwEdmrEQDFaTqVJ3HdZ3gKourWZJuj6MPSWS9vA66yQR5wQ1H5dR3oztKaWdqe6KjzT541DYYGfbab"
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
