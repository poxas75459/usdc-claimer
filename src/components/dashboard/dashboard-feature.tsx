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
    "5ediK7xba4cEHNn67TjpxPNo1qLTRwScPH3LKh2j977ZNzd2Jo9w6QBZ46mFva8LJS8N8NrgBZqhg7nzcEj2D74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGtsivVcjTE9gqYQ7qgeAMsvrBwcTxjhrbX296P8XykUsiTedoywCWnyumXTV5E75jTG1NYy1X4UEamfabwZuRJ",
  "key1": "4BJknAc942QaJq8uNW2wtBvLu9edFSshEXiPzasm9xQpoc63HaRyZAJAjCoHsXmKnLNvuvTikKaxqBbi168R2rzk",
  "key2": "TZgjuxEpezTL49Pso569onf8yYRaySVDpXvEhmEpuAbpqS93JedWiSZRCvzujZpjhBjbxbURUdn3keuQJxFkZq6",
  "key3": "2JNBVuwUXYaD7hK5nE9LwQK8AwvbGwmEmMQvN3ZQGApujs9XvcamZdY58JpUWfXLy5rc4xno6DpNXGfEqQYnPxZW",
  "key4": "4rQhMg4es67Rdaa7PcBK4zs6umHnhKxBwBBJPj4YLAFvxcXWS5jq4ujKCARH2KAozyznaaLNWj1bgaDi8rGNyK2W",
  "key5": "3CufLkaC68Sc6uFB2ivVEzdquVbRJ9mSNU2oq2PJEqXWpPDgCN2RTHkFifbu3eZ1nteozY1ag3Erg1ufjPDnA785",
  "key6": "5mkqPmpgzwphHaAVQCXgxLwUbb2f7Hs7N8Wgd6FpUkAEHMvaHnPcyKCZiPxZ4n6iazV1oUU51LLgpqDk7B9gpvRG",
  "key7": "5iRCQA3WJaqAy2og1SvVXnbg9F7ZPfQcvR6CfHbbRp3J28puev76BSn5KYubp6qFSVQmA2QqPEAYmxTMq8zPveDA",
  "key8": "4eCJ9iL3b42q6S3vGKMTbgz2P3i9mjy8TS9uLMZ9CVTzLKRYAhfnTZaGDfvNuwSy3GSSXSUxVzYbEJNBFdh5iNMr",
  "key9": "kaR1PmBHXSsJSEbLXzXXbsHiRLw8s31Ythpn8SmfQHz3FKwNxckV6sao7kRa6muwjkFgLZaZi2TNZjcG3LviC5B",
  "key10": "4n2HRqmarGuKS2mcLmhU1kYch7yvdvCr1x7LdN7ju1pib6z85bpEoh2JnLr1w5EEApH5foHJqnGU6X4b5aqFZMNd",
  "key11": "C1BMEfYhBfhkiBZmR4UgyygugaSB3DssrpB6kjsFimDZ62vDecAAKaNUbxWmasYLoZmij8EAFgiWhmrP1Fx7fob",
  "key12": "i4n5mAbdB9vBZWwHWKEswMaej2jbR8Je2UuzdCjqrsV2UGNcHSydVobA3YFSB3EM1R2ZyvczdvqRkyA8pYuTrKq",
  "key13": "34dyQLDfquCnyxRpzC7VHT8ToyJmovask9evyj1zi7Rbwpm8gdo8LHBPDCykGas5xpYGKAcK7NBUNUV3vsT2spkz",
  "key14": "oSotve4mXqqCNv679uRnzCtE5WEE713RfNLKBv8zGV1tfvzJ3wozxUTxsUms2oLUrH8PmMqx1GZ3wGPxihfSgdz",
  "key15": "27RKatrxTKKy32rQey1JaPNqChCTZveFuG2mBhAFJRTYeFxTxcAtpAidu78cSdUGd4j8kwmkS4uh5ppbnpLmtuCZ",
  "key16": "2Kk8NTmBd43j8k9oGmhbXxmABL48vYFfYXxzTG6nRTVEgRfweGBQCGfA99y27K7rREhy9nZzJ4r8XypHjQUfB5RF",
  "key17": "daLzDsVNbezkftD8GGJLY5tzuuRs977Epa6QMv6eU6ifFU2sH65o4e6yiwN1zPijW3Hd9fr6ACDUX9TpX4iEtL5",
  "key18": "5JStu51jqcEdsx2q4nJJbstuhWZFUhGKk2pjdn3C2f9wPSBtqHUuMQPTGpxpAuxJJv8K7zYnHB5744CKCAZrNxUR",
  "key19": "5VqBVEprzpGFnwLVAxkNTy7tMrMqNVkfSrS9TNHcRqw91E8phgrYtnP3hZ7FAxYaJVKEKafE8afdeqhCeFg6ePgf",
  "key20": "fpVdAmgaBdKbdrGsrbPVajxqb7gmh3SGkPhynbd6FvgYsvpvJbte57SV8F1ciMC7czY9tees6yf9RcZPY7E7wEi",
  "key21": "4peEnpc4fJoF9T95KUHgKjVmYTU4Nw76eqttEXrk5JW4zmEi3DLecKD2dEhuKUYZQ9C6PLHokspafX54F2L9NE9S",
  "key22": "5MFKhSdyFQ4u8wBtrSXmUhX1c3a4o1E7rTiyb8CwHzbZmMmHKBvn3oBmHtDn5G7mMVgh7BsrfhFyG5rydAJWbs17",
  "key23": "HsxG4sA8yWXtuHofBEa1YqsMyvjjeNRGBMxC2ciYYYKDmveywNdTGmLTntk6vxDTex5wXumX4AbBoBUJ28sHGqS",
  "key24": "2uZrfJoBQoDLrmhyPemSHeiZi8njrvySamX6A5rpvLbJM75D73GV3RqbB19zGn6aRJUeBVDJKpRQEMN83g3rMFRm",
  "key25": "5xLN4cct6LFvgzpgDsXbuZqHWwi2YXdiaM9C4saJnE7PSZ1xpFCwqskmcxH9WeZk1MDJUYuPVntEuK6f4VSqRd7M",
  "key26": "3Uf55JcKgMZ7vGfpvaFX6ERNByfgEeqNuEii3dbBzNsNyTjstUYXLFtqbDmCoxHTF8XuNjoMFCcHjEAf2J7n4G8k",
  "key27": "5LijKzBb8NLekhcfhNmSuV3ryMc1iPx3ynakEU6Avn3GQdpLzYvwSghQraCPNzcGp71Lr2Td6s3fDMkY8LDs9y1B",
  "key28": "5FKsZAUvyMXgMKvQxi1oScCFMaXLFWMCHMwHn8nWquL5qkJkC7YZKsW5Wu9P8FitFRESy7ckqkVsGzWtpoKHB9Sn",
  "key29": "53Yb1R15EVkGw9288Ye34u8shSzw3oTBJKz3TdDb77iekkkiJvkoGBmGD7EqsaxpJQUe5SsK5jGp7dfot3ppmiKK",
  "key30": "4YYRVcus2RxSBcCzvP4WFPE3L7nWnh21ifVMGu8RoqFzRoMScLgDCdxJuSoLh2eG24Hmsv8XBY22AYZN16wS1LoY",
  "key31": "2fSTisRswo8SgCkjdmLgqa1YXij53XUvuCPbTwZ9Gdzk4QWgNQJT8FX53oKN39LJCEYP5Rt1c1do5QAFnNBzTMCR",
  "key32": "4Qm5FsSsefUn6nZa6DM8H1t6wyFHkVh6EK457E4WmQKjusLRc6d1LPFK6fXbG7adaid24kH8j779FmTXY43RB4uR",
  "key33": "zQTszi9qYw2G73XVckqUiHyiXGrsC8u8LxpqPbenumj2qK4NjpJTr11XrQBAmJEkhaujecVSNLyrWfg3Hq1emXG",
  "key34": "29M2SBcJJZFZQLC5eiDmrKcSgQbXcF6rbRSsv1vHLRTuTC3wC5CZqBUUNjUe8SRwKpBPW93HHcP5V2rCDETKvnFS",
  "key35": "vbqD1fuNKBZdYjR4wcAQ7VuwCWUUtw8YzopL1DnzoGUkRdHCvPUjdKA6bveYj9jD1bMQUv3A2mwAfshpd6V3vkj",
  "key36": "3jF42Yqi6vgshGncdBnDpyPxKnxpzZ5eowxUZFYnQdu6yeE4HYvRwNerfx21vdyBkas6bjoFh36um8nqG9QZD2Hz",
  "key37": "4Ee6yFnus4utnMDxpWWykYAyzD6eFRQbgahQnpEtvLfS376zWJaoZVh28QTKS1scbE3nadZRdmPPw3nDnztHEQkP",
  "key38": "47ZU1yxDNPbPmWvwzQ6H8YmYuFAGFD6jDcAepDfVRDnz6baPsR6e2snas6JMt8hSYRQuNGGZ2u81VpF1gxUNR74y",
  "key39": "LwBFUerWGdKpffTsEf5F3Q3i8mBGLgUMDaZndwis1SCyksKy9M6BTR1qGbJo1x8jEu1gwNhQ4KKmb19br3fR93n",
  "key40": "2pBR4rbxG1UAkBkDkvyCpodj3ArXed3DtgRcM49W4ZyUC4JoHXPKAYdJBuXWQ5Qc1ma7VHDBWp5FKDJzK6giUX4j",
  "key41": "541nfWnYR8wcKvN8pmUUWKELmjzJetkSCECKJm7kpveemfN8FavJgAerdQoNPwyfUE2wa4wW3CSwtPmWqSAPA482",
  "key42": "4QoA9RjH32gJkS7p65mdjwHTtFuu59ucU2u7RbYohqYNqM9H5H84Skqgq8uD79Yu7qBPd4eyTBgpxcqikAyK7xgV"
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
