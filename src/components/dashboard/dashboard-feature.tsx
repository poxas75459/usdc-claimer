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
    "5wyNEXppxRMPbr99nRisV72YgCSjMH7AbngN5keofMCNoaoeHSek7EejAo44LgNAGctbNTtMSHPtWcWxHYaUtKG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qnoKhK36pGM57oUgaM6U9eh8V1qjKA8Cbef3KSTVFZU59oDfMsWgx5o4vD59Po6hfzXdZgwUbJBpXzduvuzUdw",
  "key1": "D6Ze5RJ5C8P5NTWWVjtFxaSrtduMMznFMKzfLDFV5hsTibt5CjJSyLJtgUVRAwHFwdaeQkT4BAKJhKujsXK8iVK",
  "key2": "4nh5Bvyv4gGB2y1H5MAMV6iMTWgzYjDnRXjzqLacwiYsyXHxbca4oUJTBJYn5mX2oV86hMYy3hkPC7WpGbpuYy7o",
  "key3": "5UGBbLQyV3p4B5sapZP9byPASqPquHt3hnEz3ZukbcWsBEjXF2Na1FsLb5aJbA9hFh3T5Fx7kbfHu62XL1J8vtxz",
  "key4": "5ciCAPePA3rYJH8CeTHQkMmSjHoTQkxxwsj8i2Att6HDpP7x8CVhRdYTnZrZjX2xY4R9MuNXa9pncUNSaQhf7Rrx",
  "key5": "5mX6qHDG3h1WVtxuvGeC7Ci6QLsLnWJhvFd8KGuYxcjgNWP7hMEueYyZFs6pdzsQpRogN4xuEHdW8ysXjNAxQGg6",
  "key6": "2QqZAE8a7EADohyfdLRcWUnJhaW6GfMQWLGGt4abjVJCc26tsMCkbkbbKGePYHVjBc41nxoAeq35HJZnayuywZh6",
  "key7": "3jkB8mwupcPDDqjEwtbPHwK27mCZM9nXRWjs5Ex1Kg5k3MqaKqz6ffDKWamK8eYGQZt4L6CNtPZDffSGerh95g8X",
  "key8": "4oiSUsrp524zYHygCHabA2mLdQC89mhgCkiVWZs3e5ewgLmzsBHnguHLgH722pktqKy9RTHeNMvGasExUyfUDopo",
  "key9": "KxS9UimJgKn53naPNotFnFV9TfgSuyWyfXN1FtMkYHGFKeTkivD76kTdtmPp3zyFXt17v7oW7okedz98fUCDm4a",
  "key10": "4A88oZ1soFtpNP2JxbjuCePXA1RvPHnThYmh83crHmWxSLFKcTqKLdKpkPsD7HC5qhZsUTTNrLriXz535f6aBTpR",
  "key11": "5o8vrZRX6Suj53YGgwzAq3s31uMhZCNeArgAfYG1J1wV6hbuuyaZG4vKCdbRrJG34ncTcqCPVyorgsrPzoKsDBUC",
  "key12": "3v4S1G6nmmpX3MMBZ6dvWjrxDVK5sdDKwdZp9tBtAW4vtTBS6GE5F9VKrjrd1EGwp2HmeGr6xX55QqCEhmspSn2T",
  "key13": "3eNm5F4yZRho3uaJBjCW2mbpVfW65EUxVcqdkRR8tRwoiCnxgQqzTJxVYGju1FKxAbop3jvYjoSLPURAbrpWbSbB",
  "key14": "2EmjWC4P8GJeDB9rqnDxBNFTqSSyrzi3gwQMAHgcKKh6aEZq97HGY22u8LnK3g3pm6J4dfRvcHKVwKVNcnHVTANA",
  "key15": "37U1G84GLqpNCHXjqGbcMSEzMpkMQk1bk6E7QUyBYMcAtFUNfCu92WRbJSqapGZJKVc3sWXzibzAJ3mD7bLnTbjR",
  "key16": "33CcPy8WucNN5BLXbimpCcZk3cyckZFXkMNkRjNqpXAnAMqJCfszbgxiZ5DF5Yx3p7YKZjKm3bKDDLRZpWvXpXXE",
  "key17": "2n7A2HtDSiTJp1JdwYWYraf5Vx5ZvdgHRGTyEQqJoycpKNb9KH4vhxTKCWrAR5SeybGF9W5e8pF3tMcFPdg4dDSR",
  "key18": "3Q48cGxLYLHnQtZpkfrqpbWiFo9N2ne2qCP5PCF8c2NSoFTp9Swi3pd6bUS7txjwS3RvZUrYZYvR9iLaVc19La8n",
  "key19": "5zPrTHj19moh1dhhCvsVzRBYfK3FLS9zjLLJDAvYat4UdqCTdMASkcjjGZdVNY8W18dRyAF4w7rAmdQRJn1hHqGU",
  "key20": "2zDUyPkcfm5wGreipui28hRv4pjskpdehvoo2prp9zSwEi2wutQuspwuicVsnreHk875HBwRZtPXyvA1XR61QHz9",
  "key21": "66yC2t5TdMyBYnhqKmD498TiBLgB4BACAqq4R68XQiqZjdaG9qn7kf8uGy2JEFdyxgWp7JFXXWt7PRWAeZMerjoL",
  "key22": "283KHMiCbbmFE6azfJc6noRYfhcvvFkdUuAZRDsqBFpUpvkR6gJEBdo9CRERfp1PmNxavtSFpV2PgH2CiX3UnXmC",
  "key23": "54LrCWvgpcJTUW6ACux19K8TtyRCS4rZMusdjJHDftFfY2P889LMyZoqgVBySCovQ1DAGz6mpj9qsVFJzxkJrhi6",
  "key24": "2MDqRWG6EgzNZbifJvDm4KTiAetQ6unZkEZg9YEPrHZtNz97ZR3XNxDCXUvUr9hxxW8Uh8CN6hZao1R1GixdkKKe",
  "key25": "2ChnrqCWSypGwTgksoGL5L2AUHSska8auffyAagfxvMsMw9GjrTZn114aifAsUddTHcCnw66tFgmgnXEjtp9EuBg",
  "key26": "56WFve14JCGdwpkq5Ro2At17oqmro2dJB1kBHQPorEDL8ajcsma7acMB24zngYWKFVVLHkH2GYtjQzEFoB6oCVKz",
  "key27": "4rineTzLkng1hcfoEdo8s8oEFeVgEGQMzqBZvspVjQdbwCfMiYd9fhKa9WphPvpWfxjxZVA1oYJ3Aq9SA8i49oNm",
  "key28": "2mbLDVV5sMkLwvUCxFrEz5WyDsyBQfd6dXVxBDSNFo9o4GGo2osDb8ScY21S5TLuRVUswUoRbfdc9cF96NmPi3nB",
  "key29": "2LkcFVUpbmftr1jt3BsJBkRKfrjpTgYjtuQv69Kttnpv79kxFcLMtoayt4ryYreDdNhLNg7KpBn2g5NqRh8UP55T",
  "key30": "ABCyV4x941Ma1m8cGHKHi21AUkHhUPBE3iRjsPE3PeSEqVkRPj9MPeH43D2zQbBb1BkSyFv8P8HMjyJ1d8sa5Zj",
  "key31": "3UyziUNqMeRUcQwpgWNc1n2K98WBBvFBB1Znh1PJz9a61CDqZ6VQdTAtCWQSM1XYddsaCG2jDEVEKX2v2AKJZ1LE",
  "key32": "3znSWZJzWMNN3c3rpBUTiAHUT1zyW2kyzJ3PBvkyzDM2gwhC6CYE24Rs52fFWZkkGiZ8pFFeKhewL1LaGxtDJ46N",
  "key33": "2p4JewN6E9k17HBRLNXKY4JoRUWkqRsooZSjXpxEbXXF4u9BhgBjbKbeg7MnYNtkMEPgqeFj7UjyzgyLqtJgrBMz",
  "key34": "54r7Awd7yRFc8PA22z6V8B8nZnVkHEXU6xCXVj7Ybd6tJ6aiUoPq25GNC6aGcvaZZZB1hs7Zy6G3agwGpn7bPcZa",
  "key35": "3jiabq9opUnGYKLR9mjxtw4gwVWQ1sxzmTK2yo4xKau4J8dJ9zFCBSV3DuNtbzKoQ2N5GCVXckEzStAbzvGKznaC",
  "key36": "38e6xA8mkktWVyj418htLEd3DyVQVz7k1WFty9apQ9K9wpnDF6SCaydDg8bCZanRtkCF1FWZAcK5PcqC8rVAae22",
  "key37": "5biygMnQJhmBApuByEjmhjKxnDx9xBoKyZhCWo5MsHRDszXWymnkM2iEFCymU7KeVKtKdsmdKW7vQ7TU9opp9zgo",
  "key38": "2uA2frzWNX2wLMCpa6LVwgy5t6i5DSjoGWTL5uieRJdyPFVd2es8ziUUUxYscC69Yzh3M9Ny9QEQZQhQusorURqJ",
  "key39": "5NcoL917jn6WJTquwSXRP7W1EXBUeqTdjudpweTTCiUGoUt5yQ5FZpEH1o7qbzAH77XUxV7PgXpRuvVn7oRyYVbi",
  "key40": "4PLWCcwe9WatFfg7JR5ERUrJFpuq6LvE6B1NECzXD9UmDJUbkShAhQML1tMid1nFCkXVcsUPEqUV9kyoweK9pWUA",
  "key41": "4hrAppZjR2A7Z2tu29nBRz8eoridLTgHyuA81S3C2sTx6DWBCxJctgesZhDZHi6N6hS62eyKYez2o8syAcps8WfK",
  "key42": "3KJqerjwyGK8z5ftE3XajwsxthgZE4DDTAkSLE2YAuySpXkMgq7ZidKYQ3naoAwvzgNE4T1aNgTxo1EfLX2sChvY",
  "key43": "3cow9X8NhjkekUbDsxL1x9zrvE3aNsVGPeEYcGpkeCHDDTbF8EMfxMtPL3oCEhz32BLnBUSLi32LJe2RjDsB9fT6"
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
