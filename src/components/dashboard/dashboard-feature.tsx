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
    "4uZfv6ftAx3mZrJDyr6f6CHBWd4hCQQnnfkydrrpaEgAxRes28YGJcN5cjJwLF5vt8PcN6k1FroKmM8KSxrPh2vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YE9NgUrT2rHri8nYnGB9aM1eqYkuwDCMxndqJob7AppHMEHjZKQyzANC3VxY9t5kHhmjU2cSBRDDr34vbb3j9QW",
  "key1": "451MFZwduKPekiqwLonPkBW5LFEKRHRQwt8RDQyijgLDbHwrUn7kftxwssGKMV3fP3aD1CqiopCHUapV2ZW17PxL",
  "key2": "3rFd5YTFu1zhoYkyzfMezAL6dVobVGwiPRiiQK7P2LnjXvMkFkMYM35avSkEFTjrUoVHRL4zTRPRpfbC9EiTReKw",
  "key3": "5EHZ8Wfh785iuogggheafznkboYekpwyttRQXo8qCxQbiqnUP4d575keHvkzfrteSKazd6qFhQbJTJyM9oEBX1XT",
  "key4": "3FEYaww7hGSQ1wFThtTvuzsmwukkujnxCMoERdbDbDP6XjjHehQqTo1vUY3fYkJYL9QHHagw5UFMm6NWaZEeMKq7",
  "key5": "2iupLvNFcwpQYW29Ggkz69HEFXFb6wAS9EDo2TGmMHdAdWTHQXDdZBntmn2ehZsnWrohuzciw8iXC3sE6sL3VBsE",
  "key6": "2fXvQto6eYrZfBbtsM6Awh7tPASCTaRVHEycnEAdxLq3x1wca6f4237dMxMz3ePBo1C6HnF9bWR94JS5UGseKspN",
  "key7": "arUBADNmxiWs2jX6oyxqfumUsV6qjEYNDqJYYRbiB7nou4kLwTqrkcuUbCK9spXxoswLj9tKHGS2P1MzTxoTTex",
  "key8": "62RCbRymdB4dqvi9VpQj3MDpLwbxcX7RgZKYsbqTEiRRJR8iAsG5Sxd9J2DsyWUmJDpTQca9zmYvRhbNZKzrhBCA",
  "key9": "4PEVRkajF4HECZi5ktQR2nuwZ6SuYqorAhu1HuQfMqUJdyDKKyH1hAjyuBKhbvZvmxZxmxfQ7v5nd6M4CpwMemH9",
  "key10": "5GjX3cLa9h273keTMoPsnGFUVnEfW9e8UqkiF2yXQxjVA9qQxgoAGJCpeQTrdQNFJewR73Ei85kRAa7YYar7cET4",
  "key11": "4xS2VJNgDmRbiqKJtdv993V1arAZTvd4Xb9NritSxYKd1J4XmdtsZm7ZS5rzdNftsY4hFJmNu2RatKbKA2BEnqfx",
  "key12": "Kjj74BUCSQCsy4z6U1g2W6bqH5afpYEaLTsRvwHCHHEXAx2CeZvQ8Tw2kjfbJ9nDSaxSNPeyBSg32KuuabUms4o",
  "key13": "64aQJzxYBHqKg8e4SXzthfAzH28VMcQrd74ACtZLMcMwFfjBQtKhtppv8PMYjoZBosmR89U4gpN2rNhWqLcsYHs3",
  "key14": "QruQnvESwpYR7mBY3Xdz6SetddWbBtc2MabzhkuqsgsjjnEQ1totamCfL4ufdnXFkYXxaKMjtzMhygy9S1rNojw",
  "key15": "54Ukzd9vNtKuZUfu8sCJGBr9cbfnwEB9Aab4NHy6bifiqRe9AvWUgfo2QyswLACYsJAsP7B62ERCatzUsSv1HnXb",
  "key16": "33CdgHwwa3ZTqoeTW3ek7UwzodwJrjKH8GvDKHQamVRhAT4ujxZ9tcvvWkNbothxhArtoLxwNh5ugknGmUgDBsoa",
  "key17": "3p7B496KMyifmjDi2uzKCZ9yiFEJR5hDmgENtZnnkvyyvQsayevXGq6H6sXV6xsznTuW7ySM7rEDYRFikBEH3PkW",
  "key18": "WnXE6G71W2uT5fcs2T6LbeWZJw3kFa8uqhtgMDx6iYhXasCSjEKk7SW1ikuW8ShsTeB75E1fG7eEnoTUF1dAnBh",
  "key19": "29xnUbBSRDSx587y1CzsNMxuue9yLmkhnudLNZ9ofWsBdfbHntiFChKowhesRCfkSmTc1L2pWst9V9U24FWm9UNr",
  "key20": "534XwL3FNTnbYy5EoPPAp1fFqJqPUMxiYbgSyfNRY2bEdRWE19YfjVLw6bZs2cBhEqjWQxsS7o4jCNtMqMx8fjV5",
  "key21": "5rieQqjxseu5THfpZY6BGt3Uz51TtVgsbuvQDmodf4aFa8owSqrz3NS4p3qHuPXnSg2pauH61JqgCBg4Sv1v2UX1",
  "key22": "2riBQtwostJLQtARtkLQhVnzcLmrULSteW89PMDhpsSyDKn9ogdqx3EU7bckuR7CaXu8X4bxAJ9oc69wAKbwg9Gn",
  "key23": "AgDcfEW42B2j9adNgzKRGdFHspcQHDiwyMH7HoCeM7xbYqgQ9nfhr2LSUCSUDVNPzA19HAdBvMQDoLVpA1drrEs",
  "key24": "k2MQY1iwqPxrjU4MjJ2SMpgE1YUJ1uBH1NWaG3obwKHnrx8wxKTZNcuudvit5PFD8CUuiv6ekvsWdVKZXAuoQss",
  "key25": "L1q4wjN6SdFc6bjpNjqiqcKHRUiHmzC3RbEti9HfBFutbJFXMoWtWexgaEXCR91HVejZGH1pGR5dhV13MdbLsSM",
  "key26": "5QNMiXuPQXBheQSRtoKuZDn3M8eqx7HenCwMwchAtKB7gRtXDKs1SYCUopegFLCE88ESo7KZdm1vnTKAU7aQpNC9",
  "key27": "saiJEru3Vk5fC6VWrS5BbLoTQpXMPnisSomPMBDeEmojYZjZa8wTFneT1fHtt14oBm31aUkLXpmEER9UVmP4onc",
  "key28": "4dMebwFfVG73RZ3Gi4siZBr6v2z8gdsR8LPvZAwNZPHUv3r3aVzoMfS1xthrzsZ71ng47tsjtnZDXNq1qxPWMR6p",
  "key29": "3rAgD8vVB7EtgrTY9TyBYEBxHzHmkryNULMYZLWbWCJYXMGVZDoZU1VseReJ68E4PsK3dAwiKJryL77XrFYmMevx",
  "key30": "iDgALEZFsY5LukaaRPrXLKwfq6DhdyoKohjNucy1w9iESBJ7xBP5XZfpL5XXHi3YFRTLaKUSotmKMSijS6zPnrf",
  "key31": "5erqkScp32iDQefJGyJVuKFZVoLYVQuSzZoyiTjEP43y6a75tPK4cDPNYsdiGPjgqKm54xoMdXuQDA8d2qJGHNVE",
  "key32": "5hypPCvbJpbt7988sL8DE9LgbjxXZ6e229XPfmsgnankVkAruPrJE4sdqLZh3acTUTJrBGtW5uVQ1Tn4SrC8X848",
  "key33": "4efkFoPFPU5XHHejEFprE6HwrMFc3YtZyVaKHeYH86imcF1D3aYecjzGR4CECCxKKizL3QpBvKMCC7zcRnAm2RRE",
  "key34": "3r8D4ZxiYCQEPDywGmpqZtN9D4Xqw7i8wG4gkkNH9eGaSst4Rw53M24U33MjSYifKag2wBiu21f3b8ugXo3MBCJM",
  "key35": "3ykkWFuBXe6cZwoMyoNc9AuGFajgoKMimcZfoeRxGosKQm3wdfLSWSxKQC8hqpYxFEHf2nR7XjtyyUxpVRM4ZBXP",
  "key36": "4mPhrKTscX5MAquS7KWBjptge9oQGDBwQFaPPU1qunyhKdu18GMmTTtRZKo4ojcHTgSrgTgPnt1gufhtEzEzJ5HT",
  "key37": "52dznqAFKM2iGxHbNNaNBw2SV5jooxV3roAwNsX51prRF5VaL1TmLS9cdGbuFnBL8tApwoZG4sbaRxESBgheL4Hh",
  "key38": "3uj7GwnzDM5Jc8yAMJgVkquJUKYk6gfGTqk64A3uUqBtPm4yt3vKT3qC3G1TxyiZJfGyrZuzU8AYz2SrJmrKmQ8A",
  "key39": "2BwwcSL71Brr9vCTvJ1foUAtnAPXfsh8G4YZAKZs3SFHfdSshrgYJJr8vUQjr9CApnYo5DHrkdSMwFZoLm7Ceg33"
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
