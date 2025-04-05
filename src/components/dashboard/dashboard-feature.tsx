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
    "3kfjvwzxGfennQ4P4ujVeU8SZV3WBmcDiYhZcY92QU6eB1p2EJ3SN9Gx8puLYmJuNSe1XouZvdrdRgSCZUib3D4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVWJvbopuMG2zBstwPcYAYihUwE9ELxbEcT2jUJq1zkASVp46EPAVPgyi2WY9BwV8aEUXYFHzdLWBf9M64q77jY",
  "key1": "4pgtPJp69pLvwpeZwg5aoBrn2TNLRqzoRTBfkGq4T8GgDQUw5yRVCgopyFnqLaoFArm2caYAZLdyWPZNFgNUHwsY",
  "key2": "3Dw53r513NaWggeRTTPBpsKheHTEwCCLaez9tBbTAtNXGgwWTC7LPyjyCxHMXckBdvAuUCqGCmVMk4iPsxC2wi7y",
  "key3": "5S5WjTALqo2XdGjqosz8cttG3c9nDVqsAGPdBejVkH9Fcih8QahsPpnkdKDpAyyCyPfk3qiW3335juJo63S9w3dn",
  "key4": "nTQHimS71fuhV7a9v6WhiagL77DpSwGiXdcYGMQWNLGtuXucbu4dGmg2KmQXd29aw812bCftkAGFahC2BGBu9uR",
  "key5": "4t12KfbXAgfBCeLXypLtAqnzdvwN45rfjP5D3LLV2C4gnftzXXy3JNXRU1PwTyp15KCY4RNTLhRgY7CFA85gvHP9",
  "key6": "5FVCzqQmhLQoLtdz8zVunXPpJYJ9WAUneMVabBsm1deU3GCEyGjRMjLVDUTE1uhsyxZ6cGWAfwsD9pDmyqBm9DyG",
  "key7": "2KfyNyQG3Fw6fuUSwGocM5DhyRotXEbaBcBR36WZtPwDm2PuU7brr3gRPjMzhV3d2SitQUMgghfV1buUXtXyaPcv",
  "key8": "5DREtMrLNE6uAcKWD2NrZc1KzwyemnoY1FL9vBcFM6J6vqBZdwDWrQioJwqLT6J79Bv1ofJtWKzsrpz5jL6hUkH2",
  "key9": "3wTrD3eXH5nTFcUH4cNnrCwiLD6GpvPXaSKdrDmKncU6Qf9UB2z8Gue68KF22w2zJyNNUhaQeuoruW4ZuejHXccQ",
  "key10": "46ZUBGUTgAC6vxjHCAnvQ6oP23wZQmDLUeWSebb2oAFxbyEF6p7M5j5gXePXN3vnGAXukZD5Mmw11WrtqviqaneE",
  "key11": "4eKsWn97vmDg98BeaLxBTCb3NWJMZbvsCJiV6PMjakarPw7GCGBEZwyonhqDBcunLMxjneFzgmQNHJnemdUDqk8n",
  "key12": "2SrswMJkCsuXKzCqDYxikQ24ztpfYkPoB5YVxHSicApk9Ta66YpDiMD4BYAh7RjCn9ocrxV2YpSQEr5Y7YitpnKw",
  "key13": "5CBryF7B4fZYacGK4Kt5HTxqsq21AoznXAv99F7ihpVE7hVamC3dXjnHji39CQX7tzynKGq5dQMpqwyNAEPZKyqj",
  "key14": "49LYL4gfxRZpse6rvZu3bfNfThjYH8tggiu2EGXoeeyBQy46NLYxRGEwvxkLcy6Jw7UwHDd5HFhgr4XV93KVbHHR",
  "key15": "3i3Lug8pSeYKhvf4bDKsznfir6qqHBbztYKvz4e1QcEiAi1isCZrCFVM6ZS738DxBrho8KSh7ANXGs7aCAh3PS9E",
  "key16": "6Bz1ThgZnLYZoAqGLiVSJsRETJmimJ9bkt9vFb6U6MBMSj1TKWBcZ9pRor2QWuLuBB6HQpqUYX7ur1rh4rwgA6f",
  "key17": "kCe3ZzATC6iFXfxzD4gUTAwSbKYs1byT62FopgswWSBAtEfaAfWqM3ShwNqSPRboaJePpgTXE5UqcBbnuw3L1iL",
  "key18": "4jNBCBLVMGjQg15skeDJvmraEPXsNonNX8rQKg7h9Ka4TJmkQ4z8NU2VmJCGpsprJgYWXBbSXDwG5XyoEfyD8WuU",
  "key19": "5yhwHsmC6V39T78kDzRJRC9SzEBH5e3ChZ1WaFudjjJiXHbzfBQh9BgSrBBHJtVrzf2c9LZetAtGqy2XedWLc1bo",
  "key20": "t7Dz2kocjTjH3mNW2XG872f2Cjq6REHkcgt98f9ogST5KW9aj2tZC9yhRkqSiKiBarrBkUX8ARXjnLB8v3nnFWD",
  "key21": "5oukvYPkUfv7JhPAi66K1D6myQUV7Z1Us1XeVYrWdXN2Qq1VJ3cCga6wZ4YJw2iZyayuZks17VZZLyC4jHf5oPv4",
  "key22": "qLJuSaN1tKDcu2LzegFc5Q5hkr7yonc8fibVZdkwks4kKHoywdzCQT57iSudJmAeHRZ6wr7qKroH6qPTdHydqpp",
  "key23": "3GvT9Dp5Ycn2RihjrNtgwkarkZYfP1NSc8j9DUnHisjy6iD7HoSG31irGN613WNoSvdGk351QDT32evLN3FoLNxi",
  "key24": "3gHSjiRQ4cgYMc4KTGqA2CftkqLEfCQehbs7ukPQ4USqAmLHNsiaBSGMj1nizDt6UkHDCeerjsxPgvx9FXVrRKGz",
  "key25": "29JFxPKyubpY5hxaoycSK5hz5DdmqGvSnm5zhtfYCaZk7PqMntUJbAsxYG9R4rzjBwDmvadqf5wkozDacqCuXXNt",
  "key26": "3j228KLiE8c2PBQX5vmJZbmN9ksDczCWf5hqjLTVDJg9zBtgMY1ezkAzQeW2mZUc1JdCZ2TpGxuYLD9og9EayHPA",
  "key27": "u5hpPj5LQjB63Xa764bUVxk4uE3XsXBKAxLcT2P6f38tHguJuLeyoEmoyVGM5oGEct7NFX5mn5wgVbHbCU4DrA7",
  "key28": "5LS7DrnN5BC8yziLECUNQ7U6hWJicEew1ABbuJezXzRmewPfTkdZLNNCPnoPnvXgc4VLmYiXUm9acGUpMXiT98Hm",
  "key29": "4DEMWJvxRgkGeMVy7uKJ5TNTzfaCbbGo2AKgGAGaZQbNbGxvijfwY9SvGsAzdMe7TJe9K93BmiEDK4Lcrw6x8JHb",
  "key30": "3aEuADcYoC9ZnaLPNfELPKAHpy31DhVJrRayYXAr9DqBTMWyjQ8Uvk4Sb7dUskDnm7KwozRmwGjU7h2uJ2zYAbT9",
  "key31": "q34wva9SshofsjJx2sKKJxL6XzKhNT3EwpQjLU4XD5QKeKmvEByUHQF8GjRJrvFYq19iAGgosEoUvmHkQZo8Uxc",
  "key32": "64a47vnBADYvNn8yji7B8WntE45YSKCJ8L8VnAS3BHtvQvshSu92XisPxqeKWVbTswgbg8UH59DT97n7DruaUKrQ",
  "key33": "4xKk1yk9VNuVyxDPRa7mU1eWFVzSQVsvMWa37RFTyb7Y2oMVk6YXTwVcL7kYd3PWyHzBqovBF7QiihhWSeFMPBfN",
  "key34": "3p9aSZJTbuKxdk9tLSsF53J9YsekLNQYVn1GybPuths8TWHLK8g8U9kVNjnQt5MoQX8mRb5E8KbfGs5rxqzcB2ze",
  "key35": "4KoJN3u4Gf6m2jniaCRYbbstgrLSZpCdWxkAyhvqbKAP4cxQ4V6TywEQnAuWu9U9R9feXmEPjWwvgr4sf7dLW5ix",
  "key36": "Nk21qNdUZYnKmd3VnhbgMWo67s1zrRKRBxkkxDPGAAMcREFhf9cqjTZnDbdiqEfogSfDSnbM2ZkwkeTsBGr1MAM",
  "key37": "4VbUhxRVnoBUz3V5nafDKzVkq5rKumoZGFMRwH9mvHjHF73QTksqjeGD7AFcVdg69MNPPrUuHFhThFkWwFC7tMos",
  "key38": "5BHjqTANp52p32ViuaVnCagHSnjX4LpD8ERCTe5Yjud9iCVepbo55RD53fcQBqi3GLUF2WUSAhCrQWtNArnaPsog",
  "key39": "4whgPp8o6KoPUAiQCDMsVwbd1Qn5D1fny3B52K2cwDx4Z8KLCSobAK1evVvXPeeWBD5CHeYLmLL8M2Rwm1qBXNc8"
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
