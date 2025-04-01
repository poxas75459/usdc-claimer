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
    "k5myNpzXxGdQuUgwzPuK7zwEZ3jgTn6bpjfsX8Tw1ZPSoTucJmq1Vw87uwenS88T7apiT5RsVWVSSVnhHgD2je6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YeBbAeQAtHLazsZd3XmcpU8HqJPPqmfHCTozFnKxRUj7gf21xVFTycYjCZijX4jUKtHpX89BLAo9DPJBmnoJC5",
  "key1": "3nAoRtJC9gEE3nopajU6SDYSY3bnsTNUknCtKXY8fEpsiwUnfUGU45nasR4PkcAtTc28MaNph96CT8w7L5vfPWbD",
  "key2": "2aASnYBAfazJHA13tijtMzfiBbpevTRcJmsiiPSqN4MrFuKkGXw7V3c7TwFS1qnxagRX3SaJDQHDRc5SBz4RH2GA",
  "key3": "3PQnG3wTUeKDGtj4USa6Jxx6LxJWX89r2JBewcqdSmNkwv7esK6w5frgBjaXKRK11zhruQoquWC1VAhR73iWnakJ",
  "key4": "3n83GvHWbvJtvGbQgTgpgjq1VQjKoyLgeBYD7Q3YARqeqL3vyxMS4GnhmteXd8KyKfBr9eWnBVoVqo5EhaPTEfbH",
  "key5": "249yz8yUeKzdG7ypNB8X4vAetdzEWa2b5xnhcF5SYAxbLmM73QoqttsHjvd8KR754Dai3HFAxdZHahnmqKDiTzeq",
  "key6": "37U8zQnkrXccUN4HJiRw9otpxMdumKmx4yt8BCYPei97AXLP8Nw4gwnLTLX14Yu5D83K8qwzmFXQpykTyaAoXE6f",
  "key7": "612Zz3Y6UkFoMb45MCHh3eQMciG3Py3THXDV3zgqHeMKfU1gumi7ACyUH81nLojkqV5g8xFvrejGGoqYhFvabHw6",
  "key8": "4LVg5xf9PdejpkuQXh6SmJL9CyPYzjM5C7xjeop3wi9CiAEqDvBJbZX4rhMhRS54udmg95w3p4Hn51mV1V6ufyJM",
  "key9": "hG82z1MQVFDfNoS88atTeQaNx8BgaMpS3PbXdaFLMwizaTz1awxpPz2az3xBhcgRJgGyFejjm28fzQEfTXcgYfL",
  "key10": "47ar7fvEvSW84ABkrdSSGQwzzSUeXaaYZbd7fWbhQGeQ7irCGP7yqnd1B1qJgZwS9PQZNqNFVNKP7UpbMohcPj2M",
  "key11": "4VxsZhr31Y9Z7H9xfYLDcVfzxBgyFgD9e3z1M5tb1k3hboKAQJmQr8PorjutZHVsRDjQvtVagXsREvrH33VQYRAU",
  "key12": "9W21UJypWRysf41hRX34pSkoeYktL5FN17A3U1deGRFGLhqgcb6ZbSJxubBnNFPD2Ez49TCaaYoANnG3YRXv1jK",
  "key13": "hegSzXNnnUeSCNRe2JMJu9urMccrkhUhsJgPgfcmnDDaj2EuaL1KoJzPRDwWsStYfbpSHyr2zikhPA1viLdvS4i",
  "key14": "3tDyC25hGTA8BcFbXcpeGn1cjvE9zc14AKunCCP86oCUG1XLdcFs9z9dFGfkAh4NZ4ydyMtS4sQccBeURrqCkUzx",
  "key15": "5NYtHkGPyyRF116YjTn9XFZw5GsyMMyDgMpJTAceqtbju9RFnezbFp8hhtemwNTGEpnC356g8DD4szGiUpxYjFmw",
  "key16": "2kuPv4zkRmSKccsWyAT55TbCetQz9yeYsJ1pKeBrdsCUK2W1Q5FmSFiXAXcPBpx7PLMLG68CaQBF3jEsxLgWrMGh",
  "key17": "2d66cgJaUpeo7eLbx87XoiTfmk4PAekS9fYgFwpo9KAEA6GrXHpEMijp7VXff4gtcGsikimoPqeZ1akdEXG5ZsLV",
  "key18": "411b6Ut7GZaNmvr4aFfJBA1QFtQsjnuSFc3q1CQmQiZa2Mn7D8FYPpMcSC6pGcyMPmcTWpc6vkMd2SAku817p4bo",
  "key19": "4fUTiiHJMbFRDsXysQ84sffBzMLndqw22H9FXxjkqvW5DFAgQDzhwWzrNDw96JYrz6ZbSHgJyUgshNzGzd86SJhE",
  "key20": "5VMLr9XbbYG5RoLsb1ApWSSDjiyUgu2iEoutuDjXrTKe3AYNqS2VtVkiNTKv4PpSFrDHLwRwaXxhqW8mzVvXVas8",
  "key21": "3NqvqUVmLNwMwtqzRBFNZEA4H4zqGMMhuRbhAfRVmhQVMGVUJ82FG8BkzdphQbToL8EafmLWbtvxZfnJwwSBNqQ2",
  "key22": "615UwbJ4cMDChmv2JJ74BSrSFqKJ33Bgh65qJy1QaX2AZkKWAt3KHdh9sgm6zuudNJpjEyTTzYYgAAc8vgmu5pMe",
  "key23": "thmS85mAQWCBfDioJ2neoUqQqr1TbS94RjaHYeeMX1AhNdFGT1ycQ6X2UNwXHYttkd6bE6AKeK9AA5Fgs4b2ZaT",
  "key24": "5QxRm8mVLw4BdnkgzQmR9EtbJ6Tj3b913Uh2WePPvf92EYzt7RbvS7KDH7eunGbSXanuU9SokoP2sCWhmefgJEGX",
  "key25": "4kH5MhE4q7zEK5stSV2fcpUutcQAFFZsC5BPMtM6M2aeAPrRhv5LcYvVp3KHT914jLjkytFm1KYMnfBpJdj8X59Y",
  "key26": "9fANcBdQ4iHAjq1wnWGf91LE2qmg922zrMH28JUzy4Uh5pfrmWvrPuNijDp3QroNcDswLwmA5hL1hPJDoFWXNJe",
  "key27": "KsGN3tVNYMC5wkaakVyfGkUwVpaLuGUTVhwvV3BUSiZGTYySNuzw16JF8w4JunGN7kj82hrcbcbCoQLd9Vq9TK8",
  "key28": "2SrCP4jkTjTpWCFPZT1MHprsTMDR8Q787F6izgEyrtwdPM2DXWbUGDE8gF6YDWHedGNrRfQ6Bb8H9u1nRHTD9Tje",
  "key29": "4UQMZcz2bMPnzFHqWcXZp9EKfjVw7rka4gMw4h49QpqCbW6rZ5gPr8QX4qK37ZtxCJoRYvdXhVCYt2Vm64z3cK8A",
  "key30": "211NMkmETnC4qFxaime57ViSeSJHtubqEQrL3WDyCxyR9d3qyJ89V3W8Dvq9GdxU63YTtMJvv9jcbbntGbKJRARi",
  "key31": "49RUD4ExPJ5MuHjVHfNMAVtpVycBjqo4enaGEhASnGCedt2jCvAZQuy5L3BbeNfHWn7i6iRQWTNCC337k2o9ZmBP",
  "key32": "3uh4XMotAVGhm454N9bXwivd6x4RYovJkMycPYwJhinkxGfLTgBRq4MrmYaq4TUv5QN7uCLzjmVJefDmKuMoZ36x",
  "key33": "3W4T5gnGnkCjXywYNM41NtQyueWJWnaLYaBEKGoXXKZUJfESxWwPKQiQhFoCP6so4mpPMk8h7RmDm6sJ79J8aNaw",
  "key34": "3CoYXhikK3NQSBSn7SjDJu1twrMegrfQkFtTWW5EvQzgnZcBvGN4ahP2DCmJ8893V4hAYEincBUEVwraFbPE8Qk7",
  "key35": "4raomqKGmmDjRyiiSt8BvXYfVoW98edmBHx2AYHQfx67tG8b8c4owo3ToPUAsPp6oZ1YjvuJnLFpih278FKm5jjA",
  "key36": "26usBXcTQQ19xTpU7FJyWrtPkyuREVmPPCMYuJ8WKes4BZzZ3Vnzikx6hhUkiWaG16MaYX6UydrJE8uerk4W7dSY",
  "key37": "3ph2JvU9KYk9UnTMp3ZMrDsn2uw7CBZdYHdZUCN9sDVj4trv67hi842EfLiBqJFjRzvUkRiiJrnq45HZUnaZecm8",
  "key38": "2cumLpguPazAh8xZ5pTXDUqB5UEs8DU86tnuNm9eUovzSxSeq5myJAQhum2KDbfXaVo65zeY2Webm3SSo2Nb5LKA"
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
