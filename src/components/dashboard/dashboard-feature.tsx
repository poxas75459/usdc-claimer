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
    "2h6Guo1EMTituqtgdzEZgkwB8NWmcuT12GRSv9B3RwX68wfcL4tg1vEveT3N9f8dhWwHMzsuTXMgaPdCWZR7TNwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXu6fuh3MfPGKYx28KGRHonx9bWTJHTrwMhJAevYDnT1ju7GvmHw6ZqsSxEyeqS1EMQkF2mH6aXAvJBPkd21fYN",
  "key1": "3tEwBcpqZZvVy4oXbWhruuYajsyTpXkD4GLmZ1x4P31WRyw5HeLF4J4UiDJeQcdsFAUxESa9QiTNTruuoFkYYj83",
  "key2": "2MAr8CuN8zCzAhQ5cHyVM1fM67fDKdp4YJXvhfansDRUPtA3FWne53AndQEdKubN7JJwxHfvzuaqtBziQEawcoeP",
  "key3": "3KjJxAqu2PxnGu3sMqjWUyk4putHYZHmyZh773EasbHyryKAtbhRgBu8ReDGF6YVhLtf8BbsMvguFBwFBQgn1QnS",
  "key4": "3AmhLDJxXnkJLeuHYzNS73Caj8agZEHJvcoXdnyPJDAW6ejfNeapg8Kp4YMv3gycgHqJwSxeJxwLPeWbjb9ERroH",
  "key5": "4awXxn1AsDykis3UBVjqSxwCfgP9Jrtg5JFB1iqqhADsCfBLCjZ3fv7Xp3SR5mygpbc7T7fU8h1praFcCqZ65sTd",
  "key6": "3khMhCNgtePfj3yCX9Kmx89Rginw9gv86NhBZYnDKfsT8ZDPSPb97dLKyhEpPZgdRkYEKAVpuntk3TYdQHgxCQyV",
  "key7": "2bxWtQ7EUhr1aB5hUVRkQsBd9wJyLRuQDg58QKAG3Drnto48SyssyN3qzWhKi4cQDXB1MHfd8UY8G43mc3yCTaqd",
  "key8": "3fRLtwWi9PrpGFcMibE7QMQT87KuEUFKmp7GeBSufPkVsvvKVpB2kvTWaChZnk2UgLrsUJp3aQan9FWWo464ebr7",
  "key9": "5wXz5ozyi54Mn7R7be9c9LuB9hZEoE8j63AGw58DjcSx6AuA3XK5Z5U1EtzNqZ8ADhT2RSGX3UYSVGJcWLsLnEbS",
  "key10": "JKsJE6gUdNqSTwAUs4dYDi1YC9KeTEzMjcbGiKXBjVjNMsu64KzcUEagRteYMxuXupLGd1CiXv8bUjAXdBwSyi1",
  "key11": "5FeBnpQLRPuFcZihyDbQjpLTNvdfMGKgvnuYvfjo8We1FTNR7U192Nu6MkDNZ9VX3y3vz6G92NQ57B8b94qCZgLm",
  "key12": "3dTm1AZuUsXrdYjLiCEg7PNpeQpCc1fFbdyx9T1rA89Xo4yLZK4KWF2auU7uchEwX1HgHqhxZsa5BBvh8P24C8J8",
  "key13": "3DKQHhuE18uKZVyXjcdaRTSNYycn2PN2vWMAfJuy9sVf3UjVg94MRqgCCEfyhuMaLDDgKL7WWK7hz55PeUYex7CA",
  "key14": "4T5S5qfz8Pb7o92xt2RDeixHXDRR4wXe83e6rr1qppDkgo8uu4iFMqRsCzDkcLG8D2ZkJkG4L53HdReCT2gey8kt",
  "key15": "31RkuDVqPqdM4PET93Bc8yL3iMuxCj9uKCm6CByLb4NMro3B2XEYp2Vo6pcta5nckkGgJUor6bhY6mRcH9bkKBXE",
  "key16": "cv9YKvEGyA9UGzSFvhBYC7yHQwJXehEgE4LhQVdQgrBzxhwes1dmSZE8YMBfTW17doW8TZeQxcTHczRU7qbkXXL",
  "key17": "h2B6t4zWEoz4PMDmaHCNdXbMKGmwVPv346hf3ZXAsPpM1U5RCBE3ewTD2nAC7TRSNiP8EbjVV1Jm2PMvn5wZYzm",
  "key18": "2tRA3CkLn3T2Ys7eFj8BDpEPJirAjmWgzCAWrJGboQPd8uByzMMNJ2DJdCKE56NmPiFVwEDk7fkdEZSfkAuFSR7d",
  "key19": "4nMDrzHGe8CJcYvMSCa2a7XdaHUUgrFve1QmELPiB36rPmaGUDxswYfkUuwW28ftmngn3M4aW7jiZ2mfagvH7MyG",
  "key20": "4gS1AR7iMMkpBZ8jkq7hKm4WEkBxJgWzc7dow32gtQhShXdQrBS1qEXCVxY4etnhmZqw6m3UmGP3pX1jexYwXHuF",
  "key21": "3pDrLwwqtHLdMaf8p7sHiEAFWztZgJQKvU2JpSfHfzWP4oXQQzKeBvyCrVEC8umDakPaRAYjeCnW7qme99PNWqE2",
  "key22": "4ZkgAbGpL6G269zNvPVCPZzVYpazoXLu7PjoDfRkPtok6QN3znAWV2UY7CifMxrG9QN1ng67aoBPwmddRpAXfC3M",
  "key23": "4XCXuDsG1aELQRyJDu6Ams9fGczQTnEyeAFhicaaTBKeibVk9sdGgpf9UAZxBfKD2z8x9ekG2AtZbAPfkoXRi4Am",
  "key24": "3SPRKHKJbBwmTmiQar58gSW7ppAhJzf2JxzLZBDg7eQMQDJnRxDGTPJYUV3L3hAfnEeRcuHm4bqUHKCC8xY8THTh",
  "key25": "17YkPtFTEEBkyzTpDiCMR9ovNcYGTv6X56aTsfzXQaeDjzY6T6YLgJhxZ3vy4RbetfDrFY8hVxB9apiP2LstgM1",
  "key26": "3g42XPfE5DLdNvATE3HQcSuNLLNgUJHiadn2HZhUieUap5cWVYwcncE4UBkftWrerXvEfdRLbDHtDaBeFVbqiadA",
  "key27": "59RTVs1cXBGRwh8zsJeCUPCMFLRpoczJhq57ZPpyzNPAWRdtZmyQ3y5fSfJygy9x5ks2UM99DmGU2kGwAej38UHE",
  "key28": "2o5m38M3XjagZQdatneSUqdgkqVBJFEGo2DR26zQR9kBC4GMvmmCo2n7dNB2WycxyW1RBi2xBgFpZKpmai6HtX1K",
  "key29": "3ppPn3DPJPTbwowVSJtkhHwUb7Q8G9zsXJmCenmNAnji9i2K7Emz1pNU7M47jcLvrx2194XySzHGpEsuT3zNVVaK",
  "key30": "5ZcCeHLZhBRozyLsj7Z2aknvGehVmppkKvCyEuca8RZ7N2e57ELDDFihe6gWFFkjLTsB6D83qgoRdpykNcQHEnDR",
  "key31": "5HzJn5oq2RzwY3gSbfv7xHyzJruYgvXEsskXxfScEqqqkVdDRWk9UmWSH7nzShecZAyUYfh2TQdaYQM2YnV8QJyS",
  "key32": "4ixx7jVTbFzAHv6Ga3fY5BbYRyMGvXXJXTJthuPLkAQ3kpGpt2Fv4HP43TNGa87tq3QhBKw2YbEHkHP9EkYJR8Zs",
  "key33": "TaXFCENBSur8bku4zBKVVFsXLENAV5spEF7Dy86txLzq7Lzfzk4Az2yTqk7mgsaugWqKGP17LK6Nr6XUWoHZk13",
  "key34": "4ws5WFdKaiAudeTeSw3YPyJ2NXJPc2RxwSZ47y7tdVmozmFYaBcFUZGSiHS2oD1ypLq4gJZtm4R2G1h6dPRCYj3y",
  "key35": "3dnV634xrh5owVi42FqGxDAyPZRmsYQgN4pLzWFNC5reht9uW8iYALU8kXbo7TWEKswYtuz23DV2wFiBHyE7CKHq"
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
