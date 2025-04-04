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
    "3EASVoqUfYccNqQmskvd3HmA5H7B66wpYkaR4kesq7NAt5XbxVShGksJwgL2tuRLaPL9xDTbnK1GZ67p7UPa2Tq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47f6k25BYcaeyNFFZHaZjRbDaK1hc2LjS5KHFwAmjvM4vByP3TxnpYEX2JDpR2gaMozwQkh6YhcXM2j4u6vZgEMx",
  "key1": "5CkhgAREXGJSzrg8HCdYrrZodWGw41DrSRkL1z8n7nXWpYFo492yvgmwysK18MGZfKLwtvHSneKtfQPj6DJesy5u",
  "key2": "2SoSWkTkUZ9Tsgrmf9PgUCks7LZVmgcoW5X1gHbXxAVWLyH81pQM875Qc9itEHnkfNoxYFJWDJNte2BdFXk2tQgo",
  "key3": "rtQ68F9LnavcnLkXCB4W6NuWL4SmgepjvawBJaVhuqG8faWunXkQcgJCJdVq8v4kZig3DUNQdQchPkCDDcKmNwi",
  "key4": "5FGPsUfBQT2SSyL5tkQ3XkJqPKsWQh6DW3aYXsan6bdn96AUdQZitMqJNcD4hRzPg2zUX4BDXDxK8rAmVmpPNnxY",
  "key5": "4CRiwHN1TbKXf919yD1i2WuQE8oH5m4RiS9RtgvoKEpnKHuuc7mRdt2o5hKPVUjvQjSq4oUm1XxtPaeAg1TNgiWx",
  "key6": "47BtU8xyxuHCiyMAwKZgfxWDraf78ibyXeADHK2uJTqUnj1fGjKKm8wJM9Usm356YpP7pNjuc9tnfeJg5RLEN1QR",
  "key7": "29Yxu2vHP1HuzMNuGv5Va8N55BTE8YvcqUvHfCLgxnpYdsNmWXxJk69tcS4Hg56nkryePtvWFnetPscxmMyW1QMz",
  "key8": "3p5AZ7Pc5ftfhjZCXnkAMvBBsz3Wm5fuq58jQfvLXhP3DRRXYakDn3KaEjULz9528mGxFVxVAwywU3QpgngKZnBx",
  "key9": "5DrtgX3DZmo3HejbVWTC5dbMVBnbhmyq4xSrPaAfoKTtTPYQ7j9QKL2gZtKxaevDweFuAon4Cn4PkesCDMhDu5oK",
  "key10": "5ea9PFqXA1PeBHCCPqUB2qPkNGx1Qv8C7joG8APNQwFFTd23BpC6MmbH865Vp27KdfUkckaAFHM4HdyeN59Jm8q9",
  "key11": "53HheiStyqSSFTGb4quMu5daed2sbDRPEvrs3fcjAKE8QtgAt8D68CUizPgEe2YMkMmBwVb8CSuYZ2yA2tAQH3tK",
  "key12": "2qxUgou8uhTdiczSVy5eUWTPB3m9Kz9KBedgjQ3dcbsmZBaUFPZf87fL83cSdMcoyzHV2jah1S7JMkqZu7YtFWaV",
  "key13": "3kQKS1U8rUPiNSPHdSFSowD3eUKX4P2Pw9NjVWMQLfpJuz9SPBJpTZKYWyBYr3i4UFpLFKBVT13g2meEeNF3ZQFb",
  "key14": "2Q3QvHQ4CMPwKRgXdoriL4uh4P1rht3QkjvejboTZhbHBKq6KHrciosXTE7bRR21zrYs37wggXyv5vbahinwarMq",
  "key15": "4zdrz2xK9ujwZf9gSEReCBtE4VUtkXKwCC1ByPBKQ3Wod5DegpYQzkfCxv9VuCn18o4PPs7dGBDS74g417w4xU7o",
  "key16": "32hZyq3KUgSAS7YQ23fdEc9df3coFR63nTUcFHBnCto3hXNHfntDL73uwHfHryTWxQHk2Kn8jQQWWLV3RhuEER8D",
  "key17": "ZmVbj2C1bzRJgQeLfx4triBP9UGJSPGg4NAx5rLDQLsrmvGbZ4hXzEX8c1NwdiCSU4kNhH2nWAZrF5HbR7NTppS",
  "key18": "3vh4kBDJdXpzW3dA97ZZWpgRQ4FmdWNwruCs1qR1U86owEMBMBmi6Z8vcSnerLaw9USTN6TMCc68zW9Eg6zZ1K2U",
  "key19": "49BsZiH9bu1k27hEk5m348vKcns1Hf2cPKuWhjAmWsJeFktrbkH3PT7tbA3YbQzESrGMvC5zaNAtcQwxadp9bGyn",
  "key20": "3WaSCekKwqrDvkF7gfFfebQ43sm7rHHLit5ojUunWnZh5h6cQEttVwxkAgW1JQhYgi9BwRVvLKcVAW614FxLY95z",
  "key21": "5kJuUutanix4AMVg1koWFPqKfbkRs4RpXDrumTjAk6jXX8uWwpf1zfSZPYns3hPqbQ9JvncV1xRCXb6qtjiSCMEr",
  "key22": "2CWaNqzbyWLqWa2hrPLSjAXsnpc12kB72DiZpraC447EiaapAW1wzdt9kNbS5i2qErByUeSmyVjy2UBeufXjVtYn",
  "key23": "2hCRpzYZrfVFMNq7u4GDNx27inAWmMSHz8UDLUzQDsGjEcYQbznV999ES31sYvKccwpJyugGvr53nS9AmJmkX64K",
  "key24": "5CenonRWrjSgGv7QYfSh65PY3oyqRzjesRY6ssqpb16iyCuiZwDSvKMcpJthTL3VinmUUSsYcx5nh8fg21RDApLT",
  "key25": "57DGxdW4BG1JY5XVzUUcvL2K12nXjUXAkydG4cGUzMmwtiwQDtpZb51a9qjaNUXVD1FzjaXdhsbUgbe6pQKNAQsi",
  "key26": "5FZ2tRT3XbCwE7YqmKWL6jfwSNw6GerzeThH1c7WGgrBQENwMLnpgfejpzfte9s6KYsB8LKrNZ4MDEhSgbxP9Rz4",
  "key27": "Bqysv6pdqJepHxx2ZTEDFeCvtnuomMis7zR5FdHJ7o8L71AjJy9qYx2CAijXb6yJnoSvv9AS5eBKjkAvaHxds41",
  "key28": "3wpGrDwvXRrg45GSyMegLgkEHDrn5qq4VVMVDSptqVU7Yhs2oet2M4AR7r2nwLPbFGW1bZwsQ8H8uAwaZYbk4nV5",
  "key29": "3mqFrLHPW6WcqkELhF2PCfi6Lwp8d47xDLpoKVXQgcdJpT1yatcYHP35fmneWkGc3jfzHHuGctW74LErjm79r2DW",
  "key30": "3ju13bYUKmfGy91XZwVzNKKGQorsuazMKA1RjYUCpDs1yWJsh2iFswJiUgyVs5jTmToavipWJ6jsz9gYeiNv5NVi",
  "key31": "3Jkt64hmAs4DU1A9J7AidkgJAvyH16aaUBkitLeXqCpD1YuMmQaLC3ctJjT3NfR5WVbNcWcmMXmwF5MuBynttV5N",
  "key32": "5Kt22nJVUQYEQEsvXid5dYsFcUMHRtUGpeFyKihxWx2qDmi39eTX8hi5r98jzdcMpiMH4Q7ACdvgiRKBnnCKBZBc",
  "key33": "2nfPk94xCYMAmArsVyHTmotytQeFxmyBXb3YReoZF8wmAfFpBtq5Z5EN2Vxrd84Vd1qgGQ5dGrWqUrYZzuz7kvZm",
  "key34": "2jjZ4pucAuZkjm87m3H9n1u5FRJNXCkMDKj1JbnVvQ3Chxj1uuxpgEkJNCrPHGJnsG4KwRK4AK2HMfCnQtjxxAcm",
  "key35": "4yG5iMTEJ2kazTSWBv7UUDuvkTTzxpG75SriY9QZRVbzen7mU7bsrp4L2d8Z7RSJh5ChWwBwEjmgUdh8SPMbLFkN",
  "key36": "31qFAWZVDkDMNATe3qHgzagVtgob3ceSqA5JpzMhAypeQm87uiwn7jx7KWYeBeX26ATXg5nx3zZX74Qc7NnF9Khz"
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
