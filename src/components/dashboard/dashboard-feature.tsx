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
    "474BK2CxCmwwM6evQJmgRw6PhhJdmcyU85gpPNDze9ZygWAj2CM6d8m3BZNoQNK16bGVCAjT9wCHSStT8Kdxd56K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMZTVPryoyDk9dWPsxsZLfc8Hp3QeuxAVnzQk3uKaGuUcAwgHGbGjXBunUR4o7BTBS4C88dSe2dxvtsCoV75LaT",
  "key1": "2LA3Xb1KDWPNNrqdHWF92fydoiYWEgokbU6hG3ZDmHQoTddMYFUdnKQwmsKeMg3EMvkm2EwExJ7m6Lh9q9BdteDp",
  "key2": "qSqYmCDNHdBjEyW6zB91YPiw7G8t4vYvCGzkEgWGEDGPKT8CK1yRqJwct3AfKz9mJZHiVFGBXAmTiX7CiCU5SLn",
  "key3": "31TeHziiMdVHBFoFpQyE2U81PVfgJpaEpRMgkjM5AaxFD3Bwa3ZvkVZPwjDTT5o29PXvyjQPHC5EzPjSyfVFhBxz",
  "key4": "WBzY6hpxbCu9QchdxQ9R2Jh7vbaXXwPaZurknDyZKsbatwAMBtU444ekhKgaaDfUfDwFF8WrY97FiXwnpKfMwtH",
  "key5": "49PWU25QqayPU6PjPXSuxhkBVCss59WEVHGL9QLDwG5nvcot5dsgW2wPSFwJWUBHgbDHvo6YS13p7PgNDQScU2Bg",
  "key6": "5PtetU9pScviBbK12wEzp2idMM6T18WhYNyHX9qgYo6RVEcvvswe1Z8sWrCJtkfANWpR1NCvve1Q71DMvCtn8L9",
  "key7": "2yop4LsGFfTCr7AEyZB24GfsxW3nZHkmCnm4ZkZikHspViWvviY419GmRD13cGN8iYXEYuYetPvRoMcdjGT56mDw",
  "key8": "3ftVueajRCwQLKMs8z5cwYsiL8YS7DZmMd855GgYVo8ij4MTPdn4ndfDidwQEg44fMTEpswB4B9mBxTva5eEBSWY",
  "key9": "3JA8KX1wVo3vKJeZBdyvZ5v7gGgoh6kCNqRg7RUD5M8KoiymksdVnUfAf336i7feknnPDyJpuyQPSry1TWgWVsvQ",
  "key10": "52bgzsm17iADaKcjgt5S31sMsuhxoHHCZiGt7UF4Wfsb8mTFmz9aL7yWrusekk8nMzWjmveyEjxRHjiweyTsqYPu",
  "key11": "2N1Vs4FGtQ6yhY411T2XvJBzeHG1ZZZ6u4cPS6MUcCY9vUC87KwMVvQvabmYYxL7FDNHnRuuodbjq7SrNauS4tNr",
  "key12": "3MNuzsobHWC3fyPUsDLndC2s1pzKmSP7fDT67XeX78tDbHYkmjkepLuja2kbvhua6cA7HMBbELzMgvAAjVymV8Y8",
  "key13": "34unko4LYUTArALVTuNeM9vdNsthCdg3ySHEz1oTxsfCENd6UM8B7gHdzKCxXeRKVk52cJnoBBRTEqz4vdskzxng",
  "key14": "45yCLTKzXXoKdR9rGWp6RXzPfq8a77WRsLq2r5GCN5mYxhaeMhXd6BxseL2JmLwEicU9f4HQufy8DArDSXGCSHSy",
  "key15": "373UNgffY4scShi8YtGmevv1Fn7o8X9aZJTpkMLaMg32qXt7cNmbKKq2ES9Kq9qMPgGWq9qQ8WSNfz5dCZmMfkZ4",
  "key16": "41eReNYZtRXbwp8eKh72e4hfWDZGWoWHevLbcZiNK7189StKxNYuCZPNagFJ7Adke6ZKcm7WU6VTYGm6cMj1ayfF",
  "key17": "2dVKywQg8CKQbyXAyHHqmo5iRGBdu2yZeinNSiEP8eq2YeSAk6DGWsRHWqZQpwe8kiBU58rJuUzfRMvcaLfwMxPr",
  "key18": "QyrQameuBFnKZuMSyrKhqRFYbCDwFPXJDS3x6FyaAQBFA7HN48R3XyysH82EjQGt7dYBefeH4joueheoVuo7J62",
  "key19": "3R7RMaeNKvqrw41BE15gLToMoEHpN7moRa4CLLwCSZjASGE9FsFg7v8LycX7q8gdaVNB1CEMq4T41nJq9SBf5Qst",
  "key20": "ca6TST69m5jtgwFvDRMJgisRuWNT2j2sCJFp9cHtVuJivN3DEqaTCLfff7R5tCkTdsnmsLgvHGGb8xB9xXV56rn",
  "key21": "4ZRX6XM1Daoh7jLwmKPoJwCZQqNp3DANe5sTkNYGvJgjRFc4R8eg3gBtWJYRut7vbh2KxaFGtqSUb11ediKpSfMp",
  "key22": "3eCVBEn8gR5PXYCen7kBJygbMQkYg8oTXAXH3FNtLxHMTeANvW9mSZbUdz5wb6KCCjhPLDuh7MsLkswoR1jhsBAv",
  "key23": "ZjVTYpbazR5Qmik6esfqSdTBmQjCn7mHP9B8JBfsJA18k68LHYKdjGx58sJcQ6MHoALgNVTsiYdTCoEtHbZuj8i",
  "key24": "3L5T1CTni4PgV4hWokp8y3LJDY614PL9oYJGYFgBrP6jnJ4JbBpQJDzxkaAfUfdcqv7WsXJCTXiGcsBNyjX1Jy4e",
  "key25": "5aLFj3XG4rr5Z7FyvkkM3YzKwTfT91HMLpDpRXJikJD86eRPUYfbxzRw5ugvrJ94Gs5qVDSuYLh7TCsGbm6knQTY",
  "key26": "2jsMf2rSfe59kNFeWyYUWSvdjTX8w4x3envT6jVfMeJw7oFefijgxmwn9oJREML5YPNBWe9uvwDEieZ8g8dEmMEJ",
  "key27": "2eesM9cVoiUtdn3qzFanVF7oxymb49GyY8iqbJsBijXmT5Q6wRmsUW9YXJ9C8Yd8Cc4S5grb6mVQjGMJKsCXoCR9",
  "key28": "4T674jUtTecEa3WhSJHWgnKWnjy3cU8CWXAC7Re24JJ9skxNrxQPwS8dk9PAURKxggLLmu39zxmFfzgehiTiWPrC",
  "key29": "KQoNwSeomb6qxVvBTjtXtmzdwKkFDinV1vUiK9qNB9EkB2759juLGQzr72cb4CMhWwK81vofGTnSFhP9a2SmWr9",
  "key30": "4FpUrS7gDVAAYHiu6eQ5m2CcUonAHG4BvMKEqwUjPhLHP3isBv8jg7Ehd4v7cjGM9sFYz64A9z5zhBcvxeXrr6dJ",
  "key31": "3HEaDw5q1whL7ZdmF8661SmBPkp8ojrkVKkm2L1HmxoAwZu8DBEqZETFLZ1RyHkB7KwmUmQgbXwY5hvYjFT6ynt2",
  "key32": "3XHfBgHkisSNzikH4hXbqyztvkFvPVtKtrUBgZk1XkZijHkTj3WsrgstiuL5MA26B3u2wGR6T7QudbsXy5NhwSGq",
  "key33": "5KMfwcYY4ctKw9YVd3WVP1o8HmHBvQV6CqAeTLNyngyfkXJn2jr1WabQhctCwEgU4m6H2LAxczytrTWcc1eraXEP",
  "key34": "rQfCkfj51YUGmg5gMBX8hXKNG2zRSXHAh37RtzMdYbgBCZGW2jtTX3WS3fKJzTHs8g1mwCTVDDS2ofnzouyUgKq",
  "key35": "3iAYLNSV5UBMHHo8uDhj3SMNC1w4cRnMEYHTsgUCFCrWtLrV3iiqNFC3vPBtB2Cpd7A55CBTHRFZ1W47kskhtVdY",
  "key36": "4MWYjQEeyjyt7hNHmrr8yQBVpwQ2qWzpS9met2xiLTTdmt8M48EUZ7FrAhwfff9tYGA81uom1hwDKzUSzjM7SaDX",
  "key37": "3X1fwYrC3rL24WLxyTdr9V5B1L1KLjCRqTfWPEQWRy88Gpu6t84hXKVNj5AVdHbTxP8ai8h1PTw2Bmw221yzwe1N",
  "key38": "5M9oM4vu9brkDoBNv8xeYPcsuz3htpedfgmhZG5ZAdAzEZHAgi6ALp4BrXmarTpL5R8Po8JL3ZFLmo3kBGQM7M4J",
  "key39": "5APvQFbynNZ9kJPjqPwPdLQCgAye8sWvxwHf3SGg59Y1v6wNLEN7TbSWjVwAS7iyDYfeCFrWe2mT9gAiVrAQCDsZ",
  "key40": "3cMHqzLkrGrN3H7mNGyRBZk3A2mFoKN9TYh4qpUymRzDRag4D4q2u1VUgQTNFfRkPomMacTYX51oGJeKKT4hffAG",
  "key41": "5VWQvRGmP7USnfgJXmHkawmZjLJ67pUs4WvxmgXuNb9aFuTxCDmnG82znGj4GFkoH9eDZbFHcvY6JrpemfrjqWf9",
  "key42": "41KbRokfjs5U9Mv2Z16b997FDnH47PnsYN4ttxpDmnGHRvnpFZKqtZ9xPo2KQzCS1ZuZpDRsLsqTo5xc1YaPSJ2B",
  "key43": "feMg1T7VaBpkBmEnoDFHzdunU4D7rfSw3ChGsCJAB9ZNkeLuCzeoRE3T67jCRuVucAopo4iqZFJvhkQ68bjtWyD",
  "key44": "5bxKoCg4bFdKQq6dYueYn1U36exTy9uxmSvBTWXU4743Nvcw39Kx7j2FRP6NWvgZoWfwjgbmqdQV8Gy5GRPshwUD",
  "key45": "4ETRBjNVVS85axcVWwzXRmnQvrqJRpVXno8Wy5ydLC6dtDVDjzqq967RUNiBKgKyVMiQszPG7S6myXKDCKuNA8vT"
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
