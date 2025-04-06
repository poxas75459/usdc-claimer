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
    "4HS56B7zs4MQ5BYSAJs3FUdzMJ2oiSrEtgLSXyVvwapz8QjDpmx6LNihzBRGMm2TcDouWup2s5FFdiCaApJswxCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8Tjv9sk5SEnPk3bbrDYtuAzsQdVJkb8NGKSbFPKVYyv2TEKZCPkdJBUNCM3FEYPRwGrJnoDvvv3t6JhmYddU2j",
  "key1": "32DmJEBvtrW594koFVcdAiQbHd9EiLqMhjx3BciW3oqhnXxhBeFBT8UoaTYuQVjXbautBJ98UnfjNbqvGggw3igx",
  "key2": "67rXLcvTb6ksakqkf5Me7RgxPn8v6y3WfR6mPBX7w31C1ZDQG3rj7RbBiavf2CwtfhYv58TTc6rUYUJ3hNSD88A7",
  "key3": "2byGN9gPza1awhwwzf3sFf1ug2trWrzR862y5QRM6Z4vJoDQFygkopSGRKYVrrPbceEu3VnZ63CVH8Cj1TLBwVff",
  "key4": "LQuwwApoonDvrQ82MiQv7v9xEFL7BAQUoRaz6MSdhL2FL2ZPvcZhdwr9QucrHH5WUaVr4Cv9FwWWGdZs2n4tHWG",
  "key5": "4E4pg6KsAhHv7P1Nb7ajfxFEXJeDiY5PWhBVRqJq4uHJ7P5QdMVAKBEJ1BUaqPVGuAUt1ncwxQRFLefBupyGxfFm",
  "key6": "RGEsBppHjhmBZWtUuMBjUywPHVJNxh4tjKPSTwAGYAiHq2SjvS1krnZyVxTZDNfQuVQQ55MK4C1sWR7BoF1rqZq",
  "key7": "3hR8XTCJPZJQCnJpYeVrecFPZeZWjZbk9H8puoXq3wNsyQAMoUtTGGoSwU8AZchHVLaUBeS6VhakT7fuy9P5NE1v",
  "key8": "32JLNDAdUXqATecTZVvnzg8f7VAVFEAA5h69CEJ6Ch11t8i8wrmZgKtubBCL4tvKUe8qzkKMPMr71BwP5Vbn4tWK",
  "key9": "5qHWf8Dy7A9exfMpJnqGkqY16JJbzVVtp62gF4BS6NwXDR7g5JGWdrCM9fmvyU31qbYNE7ZyWHzERL2BFzGZb4mY",
  "key10": "5YriL12si8hE2WxufzUhsCW6NnpzNdheuQELcv3bcQjMvsjH3bkbyZJv8Ro5iTgXy1CjTnG3F8EeCbp4BgDk74GS",
  "key11": "2gGtsQWTTAKLcY2VEFGj19NQdPQcxQEKehocgkuv8CAT6oVq9FYp8HrkU1spUvirE94Bn2hwwXCrdt2SfGycjLKQ",
  "key12": "65QM1iQD882bPga8P6qbUyJCbYSGf4xDf6jvTfH8fZ3zAnkaM6hHptbhTf8USrWz7wpq5hGu9RvhGtArPyjw2M3Q",
  "key13": "4Scv8xBkvLhevvpgYHahugT6Un39MQMR8v1DWo9aUGEmscYkSRP5secA6YzZzvUEfZ1BEdyQt8uPxmDPzBxPkDtL",
  "key14": "4icKbHxUetKKU3wxhcvMoCD4VCBvR5HfPW3Br1KypDxZDPsQ5GQEpquoR3mafTJdLHuZMcjSiGF6FwRmo9EmMuUd",
  "key15": "5w4PEp6jn2i9ezhoSNahzoHbmHMR5rBPGPH74kveV1RpAGEo5Qw3he3A2NEKCBiCWNgbRoswpSeqjxtTWfjfFoFk",
  "key16": "K4FMHALrYK7tQ8ruAJFUHSNYuTU14W3JjEngTayAk8A61jiMCvnQN4TESBDpR2k7uV1EQ8oZ1feQ7vyb6ARBabE",
  "key17": "4dgPoJJ5uvkXGdTZjCEvVgddjSFfreVishYdfP5opA5vHEfmmK5VCYbYN2WuQBZjWS5xmvneceUVdc9jEGN6EFAu",
  "key18": "2L77B2vk83jtosqdoyvLsnjBZbqBsPF6G1YWySMjT72tdts81uofwHT9Zf9egeakQcE5C82rJJVxi41ukDS3NHaE",
  "key19": "4Vyo4YLZypwLjgsU4f1qnYx1XGwcJydwrBxkFngHGKXtFPyJFQfr5vrdxV4GbMfzfAdV4cpLqRmPCSSbxfrqMkqe",
  "key20": "5RZm6MVsadz6EhgAT3iT6cdPPSmyhegfM75WHMGCwrnRurszXmAFrykLomAGoDnxPS9Dy7dUtthx4NT4dstvEXBw",
  "key21": "5jeV9qxSvFRWY15bhTk9dDN38UF9DYQzGbjE8oy39gQrCaNnt9gSJvbQHxByyetXbGEkw3Xjv14xooYPJrueUnCB",
  "key22": "qaCsUSVLEiSrEMLU68Wbx7ityZ9JaiHCRn1wwqnw3GGfmGFebuqy5kr8rB1HnRc6t7v5nKQzV3fBDQexJWhMwNv",
  "key23": "2A9eLLEZV812jW2icpPxsabTVFvEuV4ney1F76oX1d4Rs3AgRKhj87r7x3sSH4bcob9m2bs9KemHNXFBkTFTqrfQ",
  "key24": "2gbfokUAPfkyBwyW6mGDqBgwXNaUQ3eQWBP2SuxCer7hKgCNN1HcWvjgckpGaUF1ZTvanmiYypUnr6dwvU3zBKs",
  "key25": "4xsowwJgZSpcJPi3SKjwsDiXTivTnPQSyQFsnAF5TuYDRrmiA46hoMWcfBfondPN3Hh5HKqzZq9nARPFMNbCBqaM",
  "key26": "5vVCRjkbBBQGRHr6MqZHZUTk4u5nic41jgu7SiKZkDqmx5n6RPsYJ39KTRUtwmRx2FQoVjkvuq1WAC9oXyUekYF7",
  "key27": "3xnR4esct5SUS2EyYg12WN5vF4M6pqaawbTfWzpuuq4s68p8TExbbzN3VyHLowQRzntdcahQT3yXrLjbUN3bDFEo",
  "key28": "4KCJ1Srk3rMsd9rno8ZrmmVLejEnfBRHViQ1aV8wABK5HydX6PybwW535oYRZsWmuQwH5cLzvVVFqtdDxSAV8nGe",
  "key29": "QPYAb9RvR9TLRf86BsWGX8actQ6qPGnf5PhvNFXFUtD9SUMV4hQquz3vWPqPYbTHCVrJJZ6c1EpmJba461YMSwA",
  "key30": "2fsrPbK2am2eH1PZ6hS8KXcJ5o3FRZETgGy2fhyKc7jUCKcjkKQVLzvLRrHwSvM1Zwd4pePADrpRzgmkzZEQXuDM",
  "key31": "5YpxsDfto8vTYnn2CbTaj6uUaZYoQsZjo1YhmQznrH5CWLhWgykF5ZdTydx88jGfgLDDtLjFcnmh4zXeT8VeUeEV",
  "key32": "3V4vjBA12HefRouqx1heSdpJQPJLoZ8CAjr2k5rEL1q8vAMQiDmDEDL8TRc7wYo5AtP2LVXZBSW25RDoL3Hv3mwz"
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
