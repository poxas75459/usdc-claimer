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
    "4n7xprqH4Ko33KTzLA9kpUkot5cJTYFXJJdd9mUsHiRc1ExYBFsekQHH3YZ5qh8jwn8ikS8ea8Ufaqvg5HUiYncV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2vWY7irQTLe5b58E1BsQQfYoDC2sfJoPhxKCJW1YuMwiph6zX7E9CuKCBFwTBJP9kZiDiyfiPE68tawncziDew",
  "key1": "2rewZMxJgoh3NYCVJ39oN8uJCFAVt5a4ujAGZX4XS1mc4D9eUeoBHMkjgLkrdLoYc3AYjQDatKyUYbhGPBtsGr56",
  "key2": "5qXTtAxgkAsd1KAHRboXibjCaBYsSTwXHk2Ecozw8tmZa7aSCDzamvr4CSbGK8kjgQrBfknQpq7fbe5tknQsMFT4",
  "key3": "2ZvhU1WF32Xw8Q3XBAB5hxPaGUC5Nb4UboGwydW9X5hyyLSFBovhRxDZPX4Mjgv23L2nLQTPX9QpPv5L8KpJU3oR",
  "key4": "CoRf4EkmDGKo9UtLNEfSms972egdKbwN28rtAadme2a5A4ySShR9RXpvrazSwKfoUAG7ELwXVLmpvdmWiXaT5qe",
  "key5": "5q8b5RVguRDpQT4637WR5LiRRacLih9Gw2srHb25g8UmKCGwZMxdxTbNUUeCL13EkJCDjwpGEhCYTSv4mjZVm5DN",
  "key6": "5WnnmkTPN88Sy3njqFqgieqRofyWeNfw1kxTzMQZ14Zwv7FbLtgZGaXdMWKAvPYBzFCoY6y9zPoRQnZkDmv84Hnp",
  "key7": "2iVZzda2SjqQGFeCHWYrhniVV9Ldkg5UzwQVzKKG5wqXaMTbSUyaWzEkKjyLBpHmCxD36Hkx3y7kLTQcFpC9efvU",
  "key8": "2FKMe19ATYGWSBjJAV7A2KwBNMZvQSgFoGDT8EEkHU81Z2Guk8bKe5kNAiuMrWzqBm1YQHtKvRPGxMSJZFjggfgD",
  "key9": "3Z2gE14Xe6DRforh2pZEXpDNt7xw9Ed7E8oArG7fTFqvvHcwSTj76cmuutthhRZk2qXfsoeZHbhGfzXcrVASQoNB",
  "key10": "37gWPgzZ7AwTJVac6RrLiQNXTZ9c4T8MkygbNwRTSsdrXzoTpV41tNptREmyU17mwmShWwwTbo3JhWh3KBYvPVe",
  "key11": "5gdf85DmsJQG5SqguCorFxwcKNpf7rDV2dfGHn1171vWRCrhPK46k63swABwsoezZiusHXbzYUrdSuS1dQjy9Qf2",
  "key12": "4NH2ke55LHHEibpP7oHHxPcSBF1GQubF9BncL322NCdNrXZhoZLgqrWsZvLiJhZsFh1fkCGaEax4i2BBBDpoJVPr",
  "key13": "3UBZGW9jQqVFsEVBVP5pooNYpAMEgdmqCRtpaCzaSvsLKPEizXHCop5wPtBYb87SNzqXMJjtMFeEHyjKV9KG1aAZ",
  "key14": "wDUBUr1cMFgGcZoupnxiHFLzjpHCgzPxibfHB2E6wNkFdEbC1zzwsFJFPRoHCLYGJvSxdmHFJR2V1WQVjeX4ZM7",
  "key15": "5cRjWTajM7ZBvQpjw1jMGWS84cbBAfVRGamcwWFfCKz3YAbMMinxBWtVXfWda53ZbBrGHtyP2DrF49JDaq9qqe8F",
  "key16": "4FKLY3BSG97kBgfLF9AffzkTzFXhgvmxff9KsPtqMNJreaZEmFhxmXMyp1yebReu93Gn3RRgD4iRNnoQ9uNfshff",
  "key17": "5KbQuVwZtmGZjaVsHgoHWqf2Ao4rtWASPGb41ZXfaazACpgcArVn6jpeAxzZxXuSKq1n7DCbrMrjWeUah8rNbhbT",
  "key18": "58VVU7sSQykmPcsvn8SBRuAC7FFeBheoA6Vae254Y1CddXCiCMNxb3GyRdaeBcExecrimfvW2JkrNTRJcH7ExAFk",
  "key19": "31qYMeB5od39M6mqLwEB5nDhZ65aouL7f5DuNiqoyCTSoVQns1CArXCQGUqAoSftCPXs2zrA1sdRtjXf9aWWo8Rn",
  "key20": "4AoBXvZj92j7cyT6oYjbEWc8Rf4fEUvxJVtUaPeQjK57xhBL3JsT7S1Zi3Nty51WnpVBdYRoHJRReqTfiM7mMuTh",
  "key21": "EEfPzAR8XiQSFinVzH4VcpMvmKK7YoYTM6e8tExMUdZ1FYe5BqqLAwpFYCDqBYjRwGZJfMHfnGpxjgdoD8UyfXy",
  "key22": "2pU6egcXCPhPibfnd32HoiXUYVQmZhLPk2Dxet9zdAr1j3CJpmmeoCj7iUhn7x1fg2BuYwfB8hSFq2P1N8o8bjGz",
  "key23": "2Ayt1Ji4DU8nYjU6vfiTpeBBhuvDCW5PDLDGuqmznQvY2Z1ouYwhDfP3BiQUsqDm5PfTUyV7pzuLDsuAjXYj6T4P",
  "key24": "3MVT7kvKaodRtrUP7wYhjcysuV1c4gsRwU4HQ7VSURyhiB5oACJ5vKxjNRACnPhNcdVgMztV2WGLTF39nu29Bu7j",
  "key25": "2YTsvGvitHW6cA6RmJtL1QMSpQVGt1seeTeCqosv8Lou874wh3UgJtAr7aKucvFnpnLKfNe1y7UUQSnuwHwkSUMG",
  "key26": "4zYmJ8WjeribReKP876Dmohe9CFnfn3Rkabg648Nx3FciGqBWcC7CSLSnhgj65SDHbPqn52HxsAUoYjc8kwRucNW",
  "key27": "3hrR1RAZCkSeiKeBa9pngSkXbG4PyQJvy1QG6uDVhvU3fTvC639bz9E85ZrRKwonoApthessz3sohoCGu7NfLdN6",
  "key28": "44GHh3MD2D2X4zm6VKt3HmtudBkM5E1voLS1NLYSZS3fZr7okpkzBDLf9UX63JXy6zrmArMj324Pz6wNMva4f7kJ",
  "key29": "4onnnaczMqxxG3Btz12x8zLpXQWTUjZZ14DrLtsRZaK2y8WxV9XczbJscUcqnwFv6tsYuNiXZ8MbyCPh2DY18Ry5",
  "key30": "3sFruqwYD2LeFxknFHJcQ8uGpokZyckCLQRzdyH9usAFtv7op58jx6DdfAs631x3xaaKP87ge1SiXEDtTG2Wguby",
  "key31": "3sahkPQAPNBM4t3KSRNMNWAKg78BQCiw53Lzstr92ekqA7yTz1rfe15apfHa4KKe7oKaq2uvPaqd7UjSAu4pCVU3",
  "key32": "2ic3LwTzVSYd3JxFayUKJKt1avagvbESohd1ZyfwnRxYYrmaew2wssAcJdaPoC83q8auswokNimW6yocs2FsYphR",
  "key33": "65HoNFAQyB4XQgA7CA3W5i4jHsRSZdvRPfA1pBPR1BnRjGWGcNVVfS38sb8T7faCo829HtK8wYovpKPFWNMUBrGf",
  "key34": "3UrDeF5VmWmnEhE1d21kEgkpKQVJJZ17L3dU4ag3cY1mCTu3wDNpUgUM7BXqtgpsk8zMZqKJyB3V6YdBFmDGoFTD",
  "key35": "G6kcxhMHaHP71gzWnxjw83X5ghx7JjzbUqyfsvBzabWHjJiQ57LpSanFmgFPDmqJuyChoGVc4r89Bx3NZmC2a1G",
  "key36": "4ZGzStUNFjatC9xmALvuLuvMHn92SvU6DNymyxvohHLHtELXeouYTvMdezaEng8AqzL5Yq2CbbceR5sVDanm3Hij",
  "key37": "4WDc4k7k2SJjkWNXCiBVmU3W6DDmaGdX76iK32ueKtLoce4UsCyj53GrmJJmoof1PxNEpJrpqRQd1QRdMir6iPZd",
  "key38": "4dT1CncXoWFq7NwuAZNLcNj1koPpFd1VyWXTYi6dJFwk8oRr3Xe8htgs7ctqPdbMLStSBbcB7yGmfGCNE7hoD9LT",
  "key39": "v725UAVQmRNbhMi3Dxa2o1JwP35ACPPgxyYps9QkmgLaC7ii9QLC1rfNnSBw4nE4669nQhvurNNAkG6ibQrwFSC",
  "key40": "4kDFMmBmzZcKR9RWutsVMu5GEfraWcb2AyFUaoGfM245NvPM2SsPGhYzKnod1KHBowLNZVZns3jaFjBzEWFuDga9",
  "key41": "53jSFXT8ioXjCfMTxPAjE2RvHgNSZmq5EN8V6KinnXgYpXtGCYj1VvdYzhAVEbRZy6upyK2kqHTp6SqDV93yit1j",
  "key42": "2TQWAozg2yAid3Sy6dN52G8ZxPX4BHpx2TiZXRcziJ6fPhgD3aB7rirzcSSxVgX9FirtnF2bZvVZrFhuKqGKhpBP"
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
