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
    "5dLJkQhB7eA7KNexhZpFN3FcJdF7ebgNXdNXbhyMhDAjUYj4t1DZzGJaQbjq5CYwfMugEQ6EbPijjeHwTwMj1sY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6DZSXfi4nzxFQRK6mdyFRshoyo9ugXH2grSe4P3ZfdD5bgBGJVZCaPQfjidNdLqWN51D8ymoYM3oW5fZ6anGk5",
  "key1": "5BwdJzEQ4EPDFqoKtKwK5epMi8smTfWMZdDP3sVRAtA2x31cZVirzYZFLoeHWaxrGBJFAGYo9TZ9g33HnuzaB6yA",
  "key2": "4zwkxCWe6mC9Sqt2yREkh9eNXa76Sx4J4TdcsLo3Pcd2MPNkqjNneEwC1E3mwmb5SDN8QZNzHNd6cwbGtNREkCSz",
  "key3": "5ghr1dbJRQuhqQPQi2Jyj7VCwDyAeRqdR5ynajmmekCwsAZcgDKvHiaN34iaRBEwHfb3fMo76iaeNWLiUR96d54K",
  "key4": "2q38GhSkxBjRmxTRd2YJ6wjvC1dLsMuyBP7t97Jh5AiSHbZXF2GJu5CvUCNpWWZZVrZai4yRoLpQekXAdgSUxsyF",
  "key5": "2fvqkivU3nVNd1Hddqa7QqkmSaPUA7jKCKfRNxubuGtkF6yszqrfyy9z6QRCnEAQ9qwjZQVUDx1J7iX5FA3eBmqo",
  "key6": "2SMDwjqw8MCS4e9RSTYj4tcJneSDBUErUJU5ue1U711x2mogAdE2ZxSNkcStLirXiU9izxSfBKnnedyy7VrFmDjq",
  "key7": "4A4m3N6VNmmh65uVUimX9PrZev8ZiSnnLGhTbZNtK2UMdUsB6Eat2EbUA14mYUfL4PP6FWGtqiArr5nA3Xm9eBpj",
  "key8": "2JpsKUieR9KoZsTUVkfksnoJtzmQUM6xR1gk111nNpwWa25yGC5eFWTZqZ1XydD2XYCvzErQDN5USDChzhhrMsLg",
  "key9": "5MAdbTBmd86isyxxhf9cXQM8TfrftFJbS8WeerSw9bUAWo8U3RjZp86P1bduybG4XGxUza6LCBpZHor2tELNwNe5",
  "key10": "27KZmn5bnWUdSa5MhJHgURneFcmiJbjwRmjiFV1PzrJR4qQNwWekf9UUTJt1kk5N5gGnG68eQ5gJL9B1wjAjAWEF",
  "key11": "4MQ1fQv6sGCFPp24GGAHT4EFoogwHL6BSLGEbzv2Tby59BUzeVxN5TLuvqKb61S5P9NczYD62BAVwEsnKxuTWEpJ",
  "key12": "4bcajtQxaj7c6nrUU2kvirK7gfj62Kyvw1gETekbGgpYV19X9eRCC5ioeg9hR3gxiag5LqhxaN3nWfydtMPAD3Ky",
  "key13": "4gxi4uDBqqGUpdyFLG5KoL9PdFpsbaAribNNxbTkquAPs7kYKZ3d98yULV6LjxWxaVPFb2GW3sTPtwnNrQSNHBMR",
  "key14": "Uz6uVRdYF3dzNmT8YoANvBW2Lg4qmrpbZANQ9Vy8gzaHs9EmqtomqmiWRnji8cjNkhJVpueAdJb3q4VMVnHdq8Z",
  "key15": "qoKVdAjHAFF2cPztpx7H6xyascp6FVk4zrrRdPVPvr6vh9usttmqvGV1j6F2Tj2BvGcoSSgCy7qEuYMKZzqQiW4",
  "key16": "zNNYFtFEuqzPsqN5J8Nu9PDkYgc8AYqXTFFauJLxRjNzUyWWXeYxbf9zAcrcp7fEBhZmMm1gvDqgDvg4THECabE",
  "key17": "2ePBBMEfXcmuF5hkjuRoi6pEjAfc4pmBZADbvHxXvvVBNP4NtQPinj5Lqoz4QisrXe758p59DYEroYBFbKiJC4TV",
  "key18": "5gRKhcSCLMMKptxT9TMF9RaVmgVp5BSwm1AmS2WLG5myNyzEyxK8daUWDhrz5gcsn2tQF9csDTvLNggxhX3xVMFH",
  "key19": "2w4HeCSk5kgQ61ekamdAejLmeZNXraPFYoymeBRGZjMSVmomyWghpJyhbKkXBUWaehabVhZ8fYRAUkLQH5VcBysS",
  "key20": "3BMQfvpdgoSGCXhxuKmNNgo2Txmb1ZFwSjPdFpFTGon1kMMisKCMKDkMU3fQSbhh3krmSMQbmadFGSo4gq5UTMPR",
  "key21": "4QKdgodNCgTxNQA32UzoUZ9pbk4rbCwa4sGKvk3c8sTXMyeiFKx9hCK5kbCvkmuniozUuDin55W8gv7xjKmMwfsF",
  "key22": "5qNjTA1rLeNPZMx3kpMECX4ruqqq8kDGuvZj3q4Mnpv9x83k3UGcLr6aYwS5RkA9JbS8Jp7dYi8ieM3uNfNcarXY",
  "key23": "2WNv8cnv8QL1eYLJxJgqkEh6bt69Ewhroyz19ATX5vhr31jafjuWoAfbArXHw6J6xvcFZyEr3o3pAfJxMVmuEtH2",
  "key24": "67YgD5sGy7CcbtvPAKcfDhDyUzUamiyMHCVzuhnfNfDpDtVCiCnD6qbs46iALPS3znFxQtmKYYp3cmSgTStYfL71",
  "key25": "FFTVqQn85SyQZj8AcLB3uFPBaVht5n4RPX6fRN4ARqDmAYyphNxEboNgW8g69Jnj2ekf6aizZB65fC3PpHha8ec",
  "key26": "4h3AmbbAHcQ1xe9fhTSzDZzfK5oxZiuQ7jiPRneZRajknmbAPAdNeszGM6UaGbeesWwpsPMCP7xGWepycLCraxJr",
  "key27": "2zUj9s7M49JHwebJUNjqsrSC8wWF6KcLZqJn89DKJ6XKCWGsC4FRfusiTfbyqzdoBBCHG2LDu4G1RUCaTiqoPiEd",
  "key28": "2LZYiVhBgScF753SUEQfV2jRQvEXnXWvVCCUUD7upQVnqFkaWcEMuh3itnV9958tNTo12xrwSrXZH7Zmo3ywfJ7i",
  "key29": "2PB5UpumS4tWEqGYmqdRKxprJJjuSw7GAwUtBxFjZDwpgfsQrMbKUBkGE9KDoFEk3G4Zm4xM9TB7pwCqCtEunotC",
  "key30": "enxoT8L3j2ruMgSfckJozXw6A4kVQs7zi7pebKzLvPiJFAsVQcm8fzAXe1B3t3Xfff2t3mw85mbyo25cnr8sCpB",
  "key31": "4sMAi2noLURdvyWE4yBfnH47EAdLYAv8W4LBmz26FghpGYTdL4aaRcHSJhuHy9cwFL9x2TozML49sGB8Rbwc8X2q",
  "key32": "4J1LqM7QzH5XYVSW9nnjkyhZjQiKivH4pB3cT6qECnQSesT16UpRVty2oBTHtvnYjeD1YwYNsmMzsHdNb7i87Khz",
  "key33": "66nQyeTQuWTkGsJ59YDcxsFJyzPVmwQebSMXvZ4edarSEqe1VsvQ4S5JtmguzwgUV3szZTUXSVXz5uCDP2iVmAsc",
  "key34": "5MumYZcmKmEJAGzyCzNN4oeML4bUUB8jFedkn2eDNfvQ6RhqEFz1kB9BC9p8VMKbCWbSgR9fa3mDB2NdEhKfJRaF",
  "key35": "4wdWuAycVkfUsyFU4rLCSs8AkUWmX9RSYAHKhk512oH7sJgJW2iJXZtfg1sY3G8PpUoRveHRzw4Nss6nbvaNo1ie",
  "key36": "2hxRkqtgJ1EHYWG73nvNBC6a1bB8cCbQffGD3F6NDrKuoka2EcTwZhVx6WoqxPL2vhwK3wym51dESeFkCktjWvo5",
  "key37": "4nGphfnAcf3eu9RR3FowaX2xeTZQXqinae8TBE7oYvtUZQMEZTNhUXh85Ld8SMyutkjkEPJm1LJj9pwP3F9fM2q1",
  "key38": "DDNT1SysGtWhxMGc1DSdp7c986w5LtGcATqhWcgNZ7d9B9huwn4tEw9pV4iBsiifi8pLqS2Qa9vxaYqEgreE38D",
  "key39": "4tarn4Peuygd9wvJGYEVw4bZe4ieabqgS5tjziLrmU32Ty6sfoLSMBVtB757VvcRdr1BPX142dGVzTUECaqFZPL"
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
