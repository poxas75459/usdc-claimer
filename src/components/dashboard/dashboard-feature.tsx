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
    "55RxFe9WQVfB6zzFwuy4et9tCet1CjnHMWo7Dp82VGPVF4JiTkAWhzhrSm9vufcBSeE5zc8dubxkrAcgEpndUkJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3595FkZ2PSCwCXe5yGXDN9jFmUfu5vesxHCU7E8UVmspqzvR6bTG1aFoWjurmYcYLWmhc8rY3enTcFD5AHqRn4zL",
  "key1": "5NeykUTj7TByb2gLxd56na8PAdyown2N32TcgeS9PHqc5rRTw7EwoTgYAsnyUZMvRq2ny4KiBoQspho2wfESA4dq",
  "key2": "347R2ie9QBuPfFyLDi4MTuQTrNbj4WJexjbKsFDhKbB2uqYRMtBhd2MLfSS37bExN9dm8msbd6QfQ3GpvuoWo4H9",
  "key3": "3D4aNCEXBedvszuyzZWm6BZMYWrM8DsLo9LDGCTAxM8R47veuBESqPvy2wz5Ns2keART8eL45mq6GFowPGkmAuA9",
  "key4": "4tH5T6MfvgB9knrH3gPzWWHQSqNHkCeKxK6MpHwNkYn4Qem62L3JQeUJ2q83d6e1eeMt1Ey1KYnPETz9TxTw1qdy",
  "key5": "46XjaUMFHVBDg7BbpjCmv2ZGTtU1VpXZTrJ8txsaimJgKWJqYuqRio7rBZd7Fscc7QtFfrbGMCdHpGKYuwpAsgkJ",
  "key6": "4V8YpxfGrCKhGHM63oDzBAuLwNuQJ1BtjxFKE7HLzXRx8D8A36HKV2GJKaV3e3HT6ENv2NqgzmwDvVAyBJsZigoF",
  "key7": "br5XRnWrcikAU7Tg1rB1pv9F8vmtJiAGbKWsgrxvh986CioWYdUuZqYLLWMfDZnATvFmh58ao8CAfK8xG1fTEHz",
  "key8": "Rb7GHyPyNnXa5YcJJUM66oi4RL3MN4GF38eJjvhNoHMj5mYursHxdRNRiUtMnws1FaYpZXZK4uvXugxHuXsWFuj",
  "key9": "27t9vQMAkhmkwx5KLNyco1DbuVXtv5bNxk6qBw5UcQGxkzApuB3nQEpTALnyjU71UxGQZWisVnB9QvP1Cydw1TPD",
  "key10": "4DdV8aGf1PbAkojrmB1T4QPBZyhXTGYsVSEHfuJCg2K9hWcicF4AVSa5TmCUA4LMo1bWNfUrU8N5tQcqc5vxTLcQ",
  "key11": "4oMx4PSziZRCZMTQqTUtHhGefdNQAehFde8Za7H7PHrkm5oDUF8dPWYVfm7wmjVXa7NRTKtywXprV8ap1iHCA98a",
  "key12": "2XBDScEzf9smmMKdmGkPhta3wk31N8yH5uadUgKZU6i8WPrSjrjuGGmeMHRBg6R4X47nruskcBKHdQtHVskJ8ME7",
  "key13": "VQyyRQNFX4FWthoaroptDeP5bgC7F5t4XLRpayhu3CbahuSVMwiz5hm8hA8jfk1ha15jPWEreH8c2NGtNi1KXWT",
  "key14": "65hawzZkP41v2tuFWbwxMPSjAFMHGEU5Ywtfxf3mxbTqsg7okZTFVddCwA6CTvmRT7hdjzJksfHBDDMJetjUzeiL",
  "key15": "5yoHYzz7LEBRpjWTsk1wYzKHDxT2ChGrRT58XwsKdxjgJiAuh63C8P1KbKZ1n6CXJApTPKweyF5JDVmKS2R3oVjJ",
  "key16": "3TjdJJRV8mxsGE1uCUobMD237HCP4qFVJNRL82x5kamNJ9c34JLLNGwSftXCZmLoy2VcuLV4FDACJ5BN3E8EskXY",
  "key17": "3ATuc8WBxcwvY4ne8cNCfDaofRdDWWxSUhtbM1jR2CRscHJhhQByiUGEbjQzKCQJ5StsTj9CsEAxRvWuAfjxzT4Y",
  "key18": "5Bhxiwr2PxaEUNgxfU4h4aHvLR2P7SFpi9QVsFb9LdLJq5Sntqn5ZtDspCnpGCthHK8ZyqPBHbbUr5tzr4pRu5rs",
  "key19": "5oZdySfZwqDWtKuNtQodYkNF29UjH4ca8kzUG1NoaPMg8zVUVb9FGNGs7sXxxdqX7d5NjvCx8BC8QdGX9vjC4gp7",
  "key20": "4W5F2edAQWzaDxgXFXGive6LiVDgM9HXoBfZqCjRzcnAXcs4kWGPiXMPM7Uk7eff5VFAicac4SttBYn4piKZW3G6",
  "key21": "4eMALH9Le6CSN6wp6UWNjMPQb4KPiCtod1ebeF8KeQEFxHZD3edwZkmQtCDsoP97rnGf9Q6EaHonwcdw3qynCbzZ",
  "key22": "2mgQNUMTXjbRouE4RbpMRrL84p6x61su2rdkPTgPWKczGmSA7p2vbMbVZCSx2x3BkB7xrmxpirvTaX7T7SnmTd3u",
  "key23": "2w6cJFrC9L7cDnV8sGtvoQz2avV6uurA4UpbqNknfXpce1APHEDyAwYQFBxyhrmNsct9B78bCbkVHv96zJcP2xod",
  "key24": "3xjvxqro1YBjxwCX4Kif3jyLtZtVLAz7aDxC2aQr2h9au3jQykmHEWiZXwNsuLCxs2na2XcU4CdY7Mjnm1kRrPNr",
  "key25": "5BkcxC7DAR78HA7vH9Er3bXwu32BcGoq21WVqCQ8VGPtQfrdFHSAxSBqnb1PyZhRxhVHZi95ETBmxEprz5kKtkoC",
  "key26": "wHYQu991PJQBXaxdGYYua8YL1BvKYfQyVPHd425qWd6ng5eHQXyAnVezwtADTos8nmAwS7ubQu6ysA5VE5uG27L",
  "key27": "Eas3RsdLNhpga7MibpubbsYbEbZwyUJ27C9Wg9Nf3V68JCwmrf57Z6XMRbErgAiTfZTmDSgkQ8HwxTWKWWPpVir",
  "key28": "oxZbmDb9rRkkdoRj1YCDfKyXa4hdEQSTPBfMeG68d3JZ9C3u31CYeg5NWPcU2vY6CJHUksjC4PGUPFiBzs66qjD",
  "key29": "2e5yue2n25YkYht9dzVMkmhdVGJqzb6JJPDfNxwJ48c2JjNtMhgiHHHA6LzD8Cp41QfUbfN7dPhbd6AzQnCkfJHe",
  "key30": "3493864RJEPEvbC3CURcG1SuBomabjTZ5fCbiNkSNa9TUjMCjBdN24oGdj2BYywJ2ctzzSXs8FDg8Rgedwk59sBb",
  "key31": "g9yAVGiXr385c2HJiXN4o1UAaYSQwm8sPPGD74Tt53GieV1ePaipQLApRYq3PJs5TEtkc3evi1D3gkJg3smUJ51",
  "key32": "3SPPeCEiZjkUw3GtEtn3Cx3NrBKeMFbyhLe6n66emmQaWG2MQXpiN1romSRqcVm3qLyQWuP35o1x6ttwWbfKetmL",
  "key33": "4qy5hrtbvhkATkw2Brv417u8scufiZz5aQpd2q1f4qwCpEU4ch4nqnqFBx8gmXctJDYscbTK61eVpH2Edz7iMxdM",
  "key34": "518c7nqYJP2F3Gaf6HGPkGFfZQpgFs1PDn7qin4aXrnsECoeneyA8oBTadvSoA7DEaoy3V5d18kW2AooNALmkBXS",
  "key35": "5W9zJm3DGYYivpvz9L73ZgWGmKVyhLxSXr3351hSjKzA8t3d2Nh122tzZfM68UMDswvyoGyWZQ1yQ44jwf8a2LM7",
  "key36": "5D9TM1mX6MsNcFvb6Tp64X3RgZFCsnCgCb2wKamneuUk9HgHjYYyXrU5zN4vhhMEjU81TJyvyW3KWusU4Huq1ucd",
  "key37": "3sdfJym6f18pZ3QNkP7yxjgVJAoLUyrgjGuFsWP5F52hMsBFnaC9ht1UbfBXUuN3MjJ5P7P1i3Xf51LiAV64hN7p",
  "key38": "5PGjxpynKmhetdrGyJa7ZoUGBQynU9v814Rte1ZJKs6L89HfBgfPvWZFSHwxdbhfaF7n51DYjCsxjA8PPcHkS29R",
  "key39": "56vgmVeNeYhiHBziF6DxbCNwLUWKHaE4UKJZJTASUUdahCzw9SjwXg2GsDfAhaeG3uqDhsY7MhTAQuz5egWN5FxW",
  "key40": "4cFAJG7iN6MEt1Ec1gUuccCPsxoQxi5gmJ5EV8avM4H1NdyimFvLKeV5U8swVx7g6JvMhr42pzuBv2TNohFcwKLL",
  "key41": "4Wm1vdTGvW1WWaKtY81Rs7e7AKGFWa1brcVAWyhTqaZTUQy5fyVmLzf2BgWE5yXmFNwE57zjASbveFeuFfz5ZMgd",
  "key42": "Cb7Q7obgW8KKKu1HcHBazCYqf8AndsG2Ph2tdZwDSEVqepVMHjbvSDoJnsfsWidWe34jihWkQotaf4zbLAWsbJR",
  "key43": "4nR1rmvmzhbTih3PPFDrrPS8Zgtw8Zvwxsrn8216F34tzsVCyuzfcWjNfmKJENKLJSwGspav38KxnNb7tciufQNp",
  "key44": "5JNjqnV2isixFmYqGsfzb1atEXoJGSmFcqWehB84Xhf2Y6KyFJFZgx5g1KJR29vrvfVQyWPEu4vAFGpjd92Svb3W",
  "key45": "5RNiQwPHUepGu7kdHdgFWG6vTF9XsV3dmFSzk3zgneTa85tpD8EhCfKRQaz8VuQcHQnWYhuNNZcFbVVeuedyeyz2",
  "key46": "2X7erP5W5jw93Kex8m43n9ivVuUYmw6p87Q4AiKEnxmCDM1gTF6ifMf7gig1xYFBaCUU2GHzC2uLPKRTRKmqr2a",
  "key47": "5Tx9VrwjobweJG3eXDtCZ2d1q18dps6PJHRggWo3bNqMEAMtWgFRXgnLiWrnvC9dm2e42iXD3gCc8P3Bxxs2RoQA",
  "key48": "2q2CXAxzv1TXEjTQkEw3mxoapUSrT5ZgPiNbEJS8S1ZCiX8DyjzKNNBcMW7TrcR8SJ5nRsmdy2MsoqvhkMiHxsKS",
  "key49": "4MdY8zLG7S6xMXPbLTHpsdEh5z1HgwqyEkp5q9T2E2n2LTtReFQuUWRZNtovuSrGUsjy9hoxcXv8JfjLUpwqdNb9"
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
