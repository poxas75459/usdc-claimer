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
    "5heqBGsiicWz5Gt8ejGTcj1einwhd7sQ9QkB49jPAgUD7DCSLEzaqLdW4MUE5FidQ5uwMPVLLTPRaE5JoQa8xiEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfAjHthqC4Gmh2JfsiM3f91x6seUqjpSctgRVMEyuzHzzq2z2EBWRpxpkPbrN4H4hDqWzj14VK4L2c4gEjXzvPT",
  "key1": "62eQHYtNefaycEbaU6YPoJtc5Stp76D5TE28gTtDZiy9R7h6ogBHYsKvGhKGgXWpDYjwsk2WxZzpvH9g7eWFnHVF",
  "key2": "41Xu4TwyJyKa4yBuVfQ9eqCL5v7263FDSB3jppdA5ddmweXruTqXKsWREDBETHayTNnZkufL8pMp2DB7ewLGkAnw",
  "key3": "2P6ENWaydXrq672WP7RXocAXKMKm5wGM1QBikac5dcXYCjF88TM5xx6GkaYXqL34PwzGGAc7EkxrwdzzzdKcvnns",
  "key4": "3pPgVEZatrb1m7qg3C7Cq538UKJPjmW8bR66MNHGue3pNj7WkmaQax7VDPojuHfULrvTemrpBXSGFRy96PjKa28e",
  "key5": "5V9gXYfh3NmZdW7spUTSYoQYi4fyy9nQoJehaDDPY2Mw6uXpG17rJM68CJN4ZTDVGL7hJF69vrcFWfECPJRarWyk",
  "key6": "2WWF8XQnmnMuPqNV44LnCT1iV1WDxvjLgRwecyQs8Y5fGTxGcJDjy4iwMfBS8DuqQFsuYNAmKN24sSPAEi3aGXHS",
  "key7": "4SPHMQtZfBi3wzge36MzyKSo3f6ACE4MtrdmGtkoiysVY15j4rpswWYvbVncehiXifZqEQbPF9GwcytNAzAQ5Kf9",
  "key8": "5MYrduv712EqTLnMJiu5Cm7EfpbB8B5ivb8NEF4F7Nui4Spb4d9o6AHW9Xz5cYC79j3Fgxu1qP6BrRNovy83vxmm",
  "key9": "3GnJueaiEjJTEbspCjVjnGyA44jSQaAXx3EBjEu1UA8JmidaqM5MCzdYbQG5tCN8DJ1GWA7dsBccGwoRrmVSoA5Z",
  "key10": "5kCe5CHZbNn6FZ6jbUeWJFLV8VkFmvANicw1DXJtmr8ymHjwe56FUAghff7xj3Q6YAd95JUQQj9X2vdmX7oiGjom",
  "key11": "5uhQQZD9LkL2ck8DHpoemkatsa3FRNJBugAopgZhV4xNyT6aeXv9ZHiyyzhyiTwfDuC3tCGqXYw1rPEnyg5u7f6c",
  "key12": "2acpw6KjWUUJVxCNXeTbHgdivEQ8JWgLTfLjZWM1Hga9e4c7kPEFCTUtJLNBrZGN2jek86n38Hg2NQPeSRhwAk3L",
  "key13": "RfhGBa2MLJYzB5ceSwMWZunSMw9mC4wRPSPVoyJxJr6QNVuzMMQ9Jrp6wZtzPNobtspM774qA6zgriAi76vTKzG",
  "key14": "4Drf6fy84b5bKrimzMrmPHutMJfwEDzctGF2miNYMMVSwT1b3Z7dk9S7hzbmH11PwQNw4oCeYijbVW5taegWuCM2",
  "key15": "41rSrvcqUuFcT7UhDtmATuGmrkKt3ejPv7HtrDQgARiBbuuMSMtqM36jBqpGivANEQsi2VbHtFVwQ95jCKwcXRjH",
  "key16": "4DbQ4URw1tMshvY9MhZGNMtHwMQtB2MoDYhprmRdbJXa1MfCnATZUXUnkTnTUJGxzwrtM8hRdm3NEzUw6HdsrQtc",
  "key17": "3RfmTcoYEBSkt6t9JFXvjPYpK5NuFWSKUzVXvqc8jTW4mGykSFySoCtAhmnouwzSLSqcLgBFCDXNHan2raJ6ywyc",
  "key18": "63Rm2cqnmPkx9L2mbZ3gMnV1mwyuEN8xae1jPmGeX763BEZgfL8q7eHpi7wCvNDcdBU1TbcmS8ysSsaZrpK9fH2k",
  "key19": "5hw7qtzajA5GwMdLbDkJTWowqenx89jx164QKeeukvhR6RMahnhnBM5jZ1LjY7jfBFJAjh4VB2vSMmrV1rsJRaHE",
  "key20": "5uuYrMige9auv9yrJtBb6AA47qavkoRa4Q42Twj6pvkWCZnpV3MGZifUuAYjPvHd7XMvaNUXYKdmL1WgmVrn2oQY",
  "key21": "24V6eUHV9ZCt6eq4JKtST6ZHip9r1cTh5TVbAeMHafLSUzodxttzEsGeQLcQyuCQM1aELcsg1nWv5V1drhmWmyTK",
  "key22": "jTQLBJ8iSmtbazehwv7ysP5YWK5Ab4UcgruUUHS9w3cBqVbrBerwWfLBCfLRuTgRMB5r9EisGBLpEaRfJREC2Sj",
  "key23": "435Wx64JajwnnfZhbyPscT6MfTnuD2CmGAumssmryJD4HiET88ZGXQLnjjjF2RvredX8Uy6RmTDTvW4q8wkJJ3FT",
  "key24": "XCFQPzxNeEPTu5Hqs9RDPJzyMg56KzYwVJJxd9GQXUYrgNpXKYec55aiY7FZQA3dfDDasymPkSubELsnPcupcwT",
  "key25": "5WeU1jTvaqW6nXfkpaDdf6UqEXzFpVcrbUJEbRnsxBptpAbBTVav5h1VTwea22jdRmaGGm4sP5hy1T3ZtSxJA59C",
  "key26": "VYvYnArKVDqLkCR9uMnU4HZiyXq38LrdWdqaYnfym3jxQTWN1YdbNAWxWXubURZLhDA9wi1BxkAaq6A2j9ZjWj8",
  "key27": "U3xYX4mFb5xFDWtyVcWFhudtynb6EFYK8wStpryFLC9M8uQgyas6muy5uq1NSuC49wqBRoKa7R3i42JzD1f6vps",
  "key28": "2UYYU8VZEQBj9MjrX7q1wA9VvzsaK6Dg41hdia26VR18WYvu8DcQdWbK2qhSQtbBSFTeGKsN57RMDnQWkgjCEg7A",
  "key29": "54hTYzreaGQVyVQVxwXkmcATgVNpr8qaJjbZ82Y4PNQ3zrWWuofFwGpLZ3yu6s636661Wnmcjd2tw9pQZBrWqUAY",
  "key30": "3gzm6vs4gYx5pvN2rD32E5cfWPPH3d4pefSfaDyxxXJTkAhpgAkw2K1pB5c489MqV35MEda75bZ3gu46vYbR7v3m",
  "key31": "64tFK5CJJXYUcBoAPyqrKVL4C8Npu1jbdRanTuZzmKDgxy8UN3bQ9LS1nJMhyyBpkPBkUc9csiNdkDdbZ5pfV1mh",
  "key32": "5kjsNpcTkRhWsjiLnnifD9jdn8cXapvhmZMuUhrv5nru8auGkxc6bDguPsc356DLF4RPej4dARtcZAUKjj52ZtD3",
  "key33": "5szYuRUtptS2T9EFTrgXyrLcD7XPG3FJvWgYgC5e1ura67K1tGyMCPbfKsnzrJ53Gc1snvrtbUCwHK72PCgt44hA",
  "key34": "5n66WbeKCdA5L9fQ54hxQpGJV3ozcPapwCSm71iSfcBqAXMAsTjzm756H7jNPmAsWMxNam9ZcRhmtdqHZBQXRR7i",
  "key35": "3gA2p9YPnq54rAVjUYqbxZciX5ewASGibP1JpeM7yzE3rshintDxE1HCk6GS9vh15GBeqiTuqYDw7gWG5V41sjF4",
  "key36": "xAXGxECH46Wh1WYLBEUHNbatFjonShvLKKArJuU4Y2GEsWB2gtNfhScktX2NbptdTyzS37Y5g8h4zutArnu6S82"
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
