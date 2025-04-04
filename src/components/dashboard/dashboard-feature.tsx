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
    "fybx1h8ckR2iueZWM8ptVprMH1bi34PT3Ppc4Dns1sQTALakRivFtkXVbSWh7QfmsyKr4HbWDuZMB9yWZjDRohs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQFBR3RvU7GBj8sLjumpYBgB66XB4QwhKuJAeuefEVVKvcDBvUQXAxSbfBywf6tSDocx3QWNii4S93f7DohUhCi",
  "key1": "32VnY6fxK7wYj9VandSwchwXfZd4XVpMVrXmYLgCmW6AiKxXC5Pirt3dABtJ9n1hnoeZgECFD6mDaun78X68UzwT",
  "key2": "4Hqtoxfi1s7s2XQK9Y9xQQNQ5RyGLij9Qms2Z5HkHV1FeTuw833WB5adYN8NdAwQq1cmbNWujQhtgzDJfHe5MnbE",
  "key3": "4FBETyz76AwTcktKok2L9MizKYr7HP65doUSVZXqPcVrLALuFwTZhwGDqZgKc6vWC5UUvKDnN6WBh8RTWVgtb8Ta",
  "key4": "2jTCYhe1TH3f5nVCxL1TzjgN5S9EdsyvYmjaLuYHVSkUgLPbreAXwMqpyPHEZwg98iR8ExrYc8Lv88JHHUGWN1X",
  "key5": "wLK4fq6Pe5g8aHUSMWLLfkY9abrKXskMhEWt1cdkWixi5hwDvZECTvLuJTjY3xCTrTuWRW6XHC1obXhQysZhbLA",
  "key6": "49DhcjBW6dxQRoVzGHk2r4vHsoLVqKydPfLQXum9PKNy12DbtSqj5SHtNjzPBqypK4wCYdgdCihfH9snwpXjRyDS",
  "key7": "2Tq1ybt3uuu3TDyUGB825dzL3to17VzVyWqAnkVH2owatw3qRY57zdiYugiAKYsM4arfLbAkwKWADWcxRnyc8AZM",
  "key8": "4whtBDybDFG38wKFzBhN2mHJYEmHXYYibUomNybR12iXo5P9LsPwbdCEqZF1xEqezxkrmFPHgfnEoHUjXN9A6J37",
  "key9": "9EppiyeWjcYr4LPch7mR1nd2AXFZFnrLbi1cwDu3McERH644TTT2NBw6Jx8Fn7wR7BuHBdZNNafj4ivgVzGb7YH",
  "key10": "DwuGrw4TPH4MVccLv37gftUeQ39Mu7fYbNWABZFCPchLiVnQE19xJSn7e69edSmLAb6dgQ76ZirBw3DRAFT5j7k",
  "key11": "3HSqjV47kBh7cKexUXNkFkpaL24e6So3SiUBHW1iyYfTq4sA6XFcg6QD4QL74SdQHeWxE44KXiX8xZdc7hLY53bh",
  "key12": "3b24A717WgaVXbQjTputHPsPvtK3T5LiijZMbpK6qfFsvtaNhoD7MKzBajfZwTNLuAf9bKkCP2vJUGG5c3EiU9eF",
  "key13": "2mYF7mHqocUpEyoMWNhhXVS8niztnuWnF9iJVZKWFSkzquGzuvL8a2ELgw79G1ziFFA2JP1Y34GN29pGk9QJnind",
  "key14": "3rmkrFQGTBdEKTpbg6Bd88JJwJUJBRfC5FFoFzbtbEBopoUeWiVSSyWZTUCr2z64BAdAv3GNLEooahKXSRvMfdaS",
  "key15": "zwTfip2MkQ4rb4JEZhj4eVPNwkoY4TQvDZPbfh5WsccxfpgK4FNZ3VVWnoXAyxJqBkUySmrB5Nga1qoDn4rHGTP",
  "key16": "2NUUjwnbca3doRbfneSvemECFyqgbANRXmFxN178sN9APpSPep6RFsCdKs59LkAQ4proYaXUfBm1iuCeBijCHucT",
  "key17": "5X1iWTuaa6x3vgLuoJRyRRR74vs49igfngDvqfuhNvpnKtoAQFbZ9L584Ha7ffz6VhiTLmCpshBqTdByDW6AEpnQ",
  "key18": "35MwC67NstEfFRapVtVWqHSDs5WY6jaA3ADMvYFa5Mo9CGjTwQL3FZEhYw6ha9Y2Z1BCX5yxJNMNaXdjSf4WdUMH",
  "key19": "3apm3S1mAVbLnKPpj3mDizpQmRw6BD1FXTkKpvxACqax2FrSBo68mic14nJvt6yvHNXitrszm3XG2rouoUZk8qo8",
  "key20": "WPLWnDwHLWGEP9ZyP2kzkMd4tA4eQ4gzWdcTvpUqteejFkJj6pwHgWqjV8HVyYM3sdL4VL2YTfsAT2HhegVvDBp",
  "key21": "2McdzBk3VnUckbMh6BE3Y2bggwvijBPUixynFEUypeoPcttm282XsVbaHh5sdkqMZ3XMtnKQkcBkzZoYioGdqTwM",
  "key22": "3WL3PAp5WnAyE6fBJzbDvxxVafsmd7qJXS41pjxZ1a1Hjwdsy8BSrSirdE1bQw5PDZDdHvMAgQKR8M2PN4s2jqqX",
  "key23": "2MJ1eAkd9fRYfKpHq3TAYfuz1bMaaSVsurzkVUQcHK9aGyHnARvojrho4qgb9p5amJSYLVdBnrNzEaDtkmixVfeh",
  "key24": "3QjkCgSh2DQS2vq3UdTxFcuZaMTVtWr724DZZ3a465CVGzSpik3kLtujaCxuvooqUiJL3teQumykiWyCNbpHuuAn",
  "key25": "34Kn7biABqSLcJUno8NZQ2aUpUJt3MzCn2GpMrC1ZPbJLYJ2X5NN7kRobRPiWzak9BUJqB4kWX83kPgfyH8z6jSZ",
  "key26": "374jpJ6oF84zHAE5iHcv6KgX3rdHuvZGdmhXub43pv6FXCjrp1GJ5JFQ77m4UjStu7aER3JWX56HFaoY9LU5ryX5",
  "key27": "3KFMuyuHBEeTsYS1aZX33xTLgje8F5P6DY8g1Eqb1nMvwjGfa6D5NBCGcToujkNxWbJZ2NEis5G2y7de899eE5ro",
  "key28": "41GDtAMCEX5GzvZD63w3g84JcSpVzAtdLFdGy9uYbVtrJJygjWTTCZA8tmd2RikH6uTkYrgkCm9trJbjVNmz5nEo",
  "key29": "CCAKC3Hrkx67DwDDWGWnWYtvvxiRCuZGaemxMuYEPG5E6TDLVGUPojGeDDA8h6ggJzSVphQL6W7mPXEkCwqaU31",
  "key30": "3cRySQL5xsK8M2U4LLfBn3EKCpHEkjp2YjB5f3Htizrimz8CYvNS3AYhQZ7cyi7BJSHLdFRtoG8NgDo4c2T1KEFC",
  "key31": "2KqYFVqURy2r27jhb9qbQ38H81jssF9BD7GqGbcPq2GZU8K2JrRYBdTsZNhoWoGDSgpEEKfN3L8bfZc4Rc8sS3b3",
  "key32": "536dyaytmyMnSQbx6Pv5Wz7minjvHHpy4qVy9z7kgWBCsayZAh92EUdQUQsoK8rSumnEhEGT16THEavVkwxYs6X9",
  "key33": "3AHHJq77QBy7XuPbidFAbzsCkDkaWLUQHXLeD5o9io8TpNmWbGcKJ2h4Hyz1cbzki2SykujjKDqb7pQHFZi4zDSh",
  "key34": "JmRfUwzpr5iPqskzyuXnXWuT6hQC2e9TRtZ5yiqRJXmpFGdGniEmmWTFe4FjWVyGWmMhi1712xiuAhdU4iQxy66",
  "key35": "jZx51mzh6cnRdZnZfn2XDcQYEWHk6ofRftXKdpQyP41PXMJkbeSyX436C6v17QdmT41RHrSutQFD7hcJTLpHxAK",
  "key36": "2EqecCGrM7CjpiS3nztRUHEA5tf59Zrw5Z9T8uvsDAb3CJjyn4wJcosE7ZDLqdyDYkGjr9utFKPPXYqLcet9nka3",
  "key37": "4RoNSrSQP1FvJjBhmaaY1yDZJbYBFVB2vFYQHrPiGfq84Ygr8XF2KbpXjt6H5fGZNRxETriQ4RX4JaugW5FxPHKM",
  "key38": "3LMTR9yJYduHKWemP7ufYWBfmfEYUJA6PnoKpScnRmRPNHBb9UiqTjU55xGwxhVeqJ8FjvZvezo8DTabArbANM3h",
  "key39": "2nmVSBETQHnCqAd2cjfbYiWA1uFdFXT2HehF73dCecBnHW6kbjkqrYNN5hUQEcXBo5JKcpzGj5GXLmNetTpsUFyf",
  "key40": "5AtuhxJeuYBa7iDRCwJHDX2tnK7YwGXBtguquGTqd2tKEzVLm3PAPUxShBDDyb9keSrkod1CHd2EWEcbUxqqrjaK",
  "key41": "3PhurtLive93JMM5geft1goQdRCkWAda1Bw1naRDxVjb6tGVWL85eXPdgwwJUQwHJ47EnFhRF22NzwBtMrd6hCdt",
  "key42": "nBUPxfusFn51httAbVZgkCMsk2TEdaqq2KS6rxDhfDKeitrHrLyaEHQsR38bxHpU3VSFxABHHbPcdb6hnC7wCci",
  "key43": "5zHKFWWDVd2H3AuP29VX3AQHKxCTt9hps3aeG9dRnbr5py8zsbee73MRpa1MHr4nRWvFZAdA7DV5tb4mZmnztx8T",
  "key44": "3F1R9Pi286Kt2CveSpJRfy2gkzw7hH9rVRDiKuGVJtdmviMh8DZqG5BH8uVhM6MXW2BRv2KDmENcED8VNEiyKmRS",
  "key45": "39qEsLeXRgCWhLBV4XeXsTANaVNJifEF5mRs2gZHBEWr3E3PbFaSKQGUa4DJFf8GEYqN4sQTbopT5QnbzH7hgpyA",
  "key46": "3WrMMDpMX9X2YJyXWqjtvwnVeUHWDhJhPDgW3F61YZ9kzDPqU1X8CCxoKVeyVaQ5U44EvyA8AwGFbN6VRZXDeWpq",
  "key47": "3DJD8gYNknsfV5Rr4v3zExFMwmaqbPerzPhK5dg6TBBXKAZuypDn1f5rJGdcvkxWMdyP8uYNW5mcJY62yUzvbx14"
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
