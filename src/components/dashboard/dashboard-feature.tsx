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
    "2vSwwE3wqbTtjESdrTUJRworVpnNChmfB3isa2acJZ2LpazYmPeWTmqNyBLBEon2yacykaNkmRaT1U5X8xVe2ojY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNQ7GywrPARmkdNotiDQ4aKvxkXbQPW3ZGxCWdXh3zVsobkT9vRLQP2m6vrQ3qLTGgxrNtbNSjyYku4dArUXxKn",
  "key1": "ceTSazePvbPUZjN6ALLGhbcGfthKGRJ5Joqy6sFqJ7yr93FhFDaQCZRUsi3hw3StUcvwCJCfXmW6ZiHnhJAGt4q",
  "key2": "3EiVZJou8iRnSxGUj414UzBm1ofZDUDLT7JHbwsJUyUBy3neKG8J79GEDewQ3o3E7y78jf2VYLXsHXkqzeHnhw3H",
  "key3": "Ym5JW4mkLNKhSTYNYfKxWCY7H26zRxTf7DELdWHLi4Ejy2cNVifTzNniHRSUhUNoYaeU5bTnbjJ8CaV5QeXM3FA",
  "key4": "35xzMLhLgyq6YJ1Gxv8zP7gbwHJoEm3jpricuMLTvW6xybX7Vys2gB4TcMTjWrBizdMmNMy21Sodg1Bqip4ZTCoG",
  "key5": "4kjiLvUNs8qNzQKnkrjSZEo7YJpy4uBWa46JXUWCE6nn2vpSQvr62UGtydQpTmffsJDG94f3YUCDiCfti89tsDYN",
  "key6": "3pA4MXyoJNjtjkujxEAyXsNwTks4UKwqgxwANQMx7NtjvSUeUGqamAW1j42H4XpowvLSxxrghJcDjyosjv5AStqy",
  "key7": "2nCTUYRKWbxc8DqBY6TwZveavfYhSirrAdbCwATibhHSa5n2GUELftoCpb5Czv1yQSePnzrZsdLsHTB2HyNLLASZ",
  "key8": "DdykFrjQSYeicaipjpMvaR8qessXTB8MRWPeAdbd2hMiS9NZNqgMpkpsbKzDKWgombBLnMtUtaKmq4XKBLDDQPF",
  "key9": "4h4i3RrgTUYLCMnWHogBu7CiZcKVqPrfza7kqAKDAbHbLkU5ZUEpwxb4n4U3EoyyvwYfswaXZrsMSPAeLuohsgdr",
  "key10": "4C6gpdMTLuMWTjT71HoaBmDoVjBVWRmeTTkwyivUxE9efsJyrzA66UUJgdibu2dkzL8HmwrZv1AZpqXWuQFFCyfh",
  "key11": "2F7FkwRUfkJXkpCu67K8VWwHbmNBkx1FwBHYkGDNUVaruHdWGXDopRLCjGLm5L2j5jREG5YyZSbDWRzi7wsJQYte",
  "key12": "2beR49nkCRM9S9iu5zvoieSMFHs225Z8tGZyaCdaZumoBo98xHFaEZQqST6uV6d3WLMSv86VSq1hiMtjfdXBWbuZ",
  "key13": "43qBjPmbTNvpFGq7eJ1k1gM3nvLuesECACNZttr7yX4BZ5c4m2qMwjFaczFqehRbp84GdNK7zEyoVJGZysXDUFWX",
  "key14": "3xMvnWWPuYPPZJffPakKM6p4KGWxRgckDdNvqEne1ZA5Qp6NHfXe2k44zYFqixGnLzmqUUS7uKj73q88MwYvKLqu",
  "key15": "3NRZs9Wzv8mDrm8yyejWcKoBS5UNmqtyBZukYSMhuuizTq4XDSqJ2jmne37oCSDrarCRLuYx2ymWqYRQY1WitznT",
  "key16": "4xzEZ16tc6gjxJ74MsDimXcKFGfbY2ndvDXK9diuz3gH38v7Mg9JCXKmYjbLUPPrwuQdZBUV2zHdqydTCpw2XGb1",
  "key17": "Bg78MSDRB3cUT1fqeRD3BKhMmwkNsmEoTMFKp3e1LasFm4866E4G3UwBvUJyXjsF1Y593mTG7kKBAyph6t1YgCT",
  "key18": "5PVci2kpYURvZBZZgDD9EkX81TR7zMwM7QVuNt9afSZijjk4U6Ybr5Rz3nd3MftRdg6t5Wb1LiE4xaSQeUmk7oCN",
  "key19": "2fArjBFa9k3zEJh5KHFJ1dxtextoymharJxweEMojAS8UtjiNFCLiq7BHpRPy67nNTdtNFU4g2jMGk5XmmW2wvLi",
  "key20": "coGkMEftWVh5q8mDkGo7a7RAgCpiyjhW1Bt6FjFDbbTCwz5R6E7pLCkRQCY3D5aEZEzhsGJ3zWTsP8UbuvrcYMc",
  "key21": "35QLcgoUQ4pGFpM2GNTb5bmESLpQTkcgEr38rX8EmJxAsqZEhx7A8cyQgGBp1CypPZqehzPnWFnjKymQMTc4yiwd",
  "key22": "3RRZBNWHmCvnRnNf8mYwdokywQDuEdq5pSj8CL2WYBiUyEJ3RDBVaVBBA9Y8sGyruKiDtuScm3sLQd5iBmQYrBQp",
  "key23": "BjaFSqcWABnK9VmFetZ7RZqqwb9E9wsi4YGrdb713pjD59kHCBTxbifpwhfoKNhqRKySwTXtz5zH32E5a1URTS2",
  "key24": "5W4qrvnFnDVnyF92VooaBfAbyeCnYj48Fk9RFYfetwjmB1LrBR6ZsGJvyP5yuv1BmUVdSrRkAR56ZwP1W57i5dda",
  "key25": "36vwhEp2oNLoD4saXMFwVQNSifkGEiE8AkWUeUYBhDpNDiBQBMtrfHPdnd9DYBBnPnovaABupaNDqCqNtuYQG2Fp",
  "key26": "2VjRKs6n8N3t4VBpGB5qtx56pzEiwRgAaCSxeMh3YurFmHfZnfyWrRFPmpPwL2sAy7syLWjWqWPq4XHeCF75Lvj1",
  "key27": "T1qduvj3nRxXW9Z3xJExtHsVMn3xZTHHSVhubq3GumbbdPt3q9bTTsuLWdJ7bFDyT8o8fPyniZ16Wo3NfgWiopV",
  "key28": "4W8j6P7QBho2JwaNnG69SDmpC45oNPwrGUecwYbS1mNtz3eUE1hGug2VPcZnmnQNhzZ4XixdLEz53JDce8L5xqd6",
  "key29": "23cvZb9t5utPcszVm2R3ThFVFMiYCWdeJ6sFteAetr8T7egDPonNkUNA7wge6wbZxBFi6MPabvxVAiowGizHKE8t",
  "key30": "QkhYWZyeiDNNzFFGvB5gUCmwwqARfCSJP6XSf9GrnDE8L5mhLYyBEJry1BgNHECyyRxUcqi5rRdpUTavXVYRsus",
  "key31": "24LQE6Rp1SZz7BoXhnTzkrSMQKvhRELFRvJJmATzZhDBoD1EXYaG22UqxhUGC8Z2LRESzFRy7zAQnNZSSo8wQWms",
  "key32": "3EyVcTDRWJNGkQxLG3UKwUNfYhzjJpmSKRS2vWvc3pcGJPvsXF2i7zAhtZh7H7Jdv2e9fYaBKvbkfQtjAREtn1op",
  "key33": "2pieDCTF97KWrbZJy2QLVwcndaddTYhu3y7UwfVBHNBdD9tgGhNEw21nA9Tm3aGpT3rqqWA4pd9pJXs5U4M87wUf",
  "key34": "5yEzXMaQEGDzWEWNDTyjCv1qxrmgG5DGS8mMXytRMYgzFUdeKUobtxsshKc7RqfUjMEqJo65uASGyqV2zxNnpNAw",
  "key35": "5e629bPMjxCaTiZQMFEsb9AQ2Ln1QbRNetYrqC1CiaVuXiZfP1cBXPFeJfY8ZUCfySR4MpMc64xGWfx7ASh8LZSR",
  "key36": "LXXNsyTt53KD8zmGsHZuPak8C4TGjTBUa2zYUAJhF24bokBYkqLjcGE4mtXPqpkHw6bq96GGTsqcSmRX5Mw2551",
  "key37": "tSvW7F9JjcSPvPjgcoaiSgoDuvDNqcm3E17SwjRPzmcVz3cL8hwUTwQtVwXPqnbTGNgPm67YYxL2WkeiauKBeNE",
  "key38": "qYQVjTMNFsPz4JUpKXStJSx2t1WuWiYr7VKpyBH3TL7HtQz5sfn1epQWcQqeicxbASM5NqaYS5SnUScrin6xEhL",
  "key39": "5BxfwFxeESCD8R3WVLytsPAsqdQ8JN4smANLi4XD1cjnEAU5zFTzutqvoNFo2SEfMa28pGTKkmoqBduPbnKQktX2",
  "key40": "351QDcfdZD6kuyCgHmDDcK3qX96N265PXTdfCum9FXgfHDoTnsnYhv16SEt6YBxthNRApJmxmQ8nNV1h6AdmyUBe",
  "key41": "48ufV9kURQxpDWD5jrdxZDqoAaSrNeHDWdfSLXEinQu5Q3HCoGjbdWSbeJ5Cwc2byiw6BkSnCnAQvtvjej9zNP5i",
  "key42": "5U5RBdkgV76n7Yh7KxDRV9A9UYZrihXVT7ycvZrgFGaAegHZ5La5GETDfeCcLsXT6d5wB3RegWonn8DnP3J5zDus",
  "key43": "JJw73gd5SaPUKCG5SPfA53k5i3aRWbRBnRWGNGmLtMSLfy7C3RhhFx2yB4dUpCuq3VRJEyYhpci1GjMeqPMcRRe"
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
