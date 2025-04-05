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
    "3q7pmTMrAmZ4D4kzGc3m5ZmWummCgFC4vZmP5GRDa5ARw1Ch4vuPKBtqhMjjKaUeRTdk4czTo31jyqKVntmeriLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbwe4VpWiUd4C2hLsYhDtkBcMqYQLS7QNkNYLdFzQcC9UTPDHWdL7s98FvePt6nybniSpLJ6UPTiTW8nPdfmueD",
  "key1": "5qqUE4TQxLUMPDzU4VZHN6uCaAU1cdF9YrWUEKMGBoshHNMPxN89oDeixAm14iNrPyhXTF9MjALtRze9SqcyHs3E",
  "key2": "4xKTGGH9TMnv22SP3iC624au2dSTo962696ZdWcvcKVeBqrFayoaeNh82eaCeEoM8P6EBaTFqrwiKSEzwnTiqhuL",
  "key3": "4W12PQvqVDVn8cDvXvi7HGDJVKT4df2MCUF4zMcaioxQgUAanCdiJbVpF4z4HkXq8P7qM5DKYAq2ZovYgQN4Ygbz",
  "key4": "5bN7V2ybKBnBx6R4ALiXnQAA2JyNdERXRMkPZxaSBqqzmeuKq2kUDL1dGA85imQ48Ln2mreLBN16LS8G1S2LBLfJ",
  "key5": "tNJP2MywECS8rwyGksGP5bfD97468Nd9cVoSRBdQagwrWAKhh7LeGdt4csyHLBGRNF9mLvYXLGY5Cgw7aDCGV76",
  "key6": "2uJYyLHkoYsBH2jSLbvbpANHweYW7uBm23XhS9HxVUYbt7SCVDiXw97FQcsDFuHLSju4QNtVaJyg8Dn79XJY9iKM",
  "key7": "4H5eSkSbS9RhsQeiPS4m4niBVzXd5CoNh3mqeqpGQDFYBprxA7nN7PatHovBN57Wan7szA8hgM88rrGdvuBh4LWQ",
  "key8": "49JXheUoLc5mm1QJvw1XjuyDdkF9jYwTFPfNBS5oDgfGVQFexxyQGnbiRa4MSG6unDrLgpTqMUmeiUoGN7cjixGE",
  "key9": "5SW2aeiNdmGTVNJD6XTwQvSc7w9kW3Pai3jy4A8N23eqAL6vtqxPutzg4CYASfNtMC5x1zyogTs8z2UrtbpPG8Dg",
  "key10": "5g9qRRLre4K54deWDGhBhs5En8f5yPbSuNLP4BBjopdTc1wFQ5oibqenSL73EJatf2Q2Q4PkQMa3kMnL7y3NUwbG",
  "key11": "2vkC56UwGHHRPto94Fp57Ki5B8HG7p7HoEnoKxxQyfoHuWTANaQ7ny8MgCQksXiY19PzwcSdDZMFCZ1g4CfoX3Vk",
  "key12": "ePFMGdEPyNVK991kFNB1g4L8bPurbKph3xNwsYTsesSPcgcqV9TLHqc715XCghJ1omN9npnU2JhgqwzsPKMuo2M",
  "key13": "5D3VkGCMcTjBBSCkPNkaU8mDHhWKVbta1hKiYchePiKGXnqLqUZCrrun5fNHMk7dZsnpunuSLCg83V7wmLcbVWwu",
  "key14": "3F68sxM57tBUArPAiQDg96NMDZweHijGV7iV4brm7ab5ENWm6f5ymxXdxPoa6TjeGV7ug8rZGdmhaTpgu9uQJMeJ",
  "key15": "2TLHk2YpQN4e41NcvDiNYa3kx1Ziy1QtNK6AUysrtuqbmKTUxmnE2ejrafewPYkuY5FVYG6quDG8H2zZjGjkAf18",
  "key16": "5Za2hAS6VGjDWh9CKLfxFEgUMPqw9f1FDGhmZ7YwNqH5PVPQjio7oUhzuc2L2EvBmVPLvnA4kMx8EvrgVBEhnvH9",
  "key17": "2JHxz4TF53kDBJm39uDaQhHLCzRtsEwsQJpMQa3HLSUmKfZUGz2SQAkmydCTs1Pa8pJXa2oXW5boDV7KiuqBUako",
  "key18": "3cXiQYLxtbd9XCVuFuCMxhcrNBWzDrGcAXvSfAMwzuz7UijXdDem2o8dHsHmyhjVGewZH3ywHY58MvUz4KXR34uR",
  "key19": "2Twok3t8qq2K1ht6GehRYBXbU5HWpN2rigF1af2tdiPV69apYL4TxXVCVLaq6MwuC7jqAUe6KL8TbhZF7DdfpVsn",
  "key20": "5FiAFD54W3eHkzXsSrmkG5rUK3dqwX1A6ZYUi93YQWiNyGbRqncVAysEjW7RSR4QvD7NRDzX2tYhy5aG4X4gTGH8",
  "key21": "5Z6X5igTsLkKJEaFr6obuo2Ti8EoAHwKib395qY211yWc9QRZsJMN88F5uCPnkAssbqCKt4WEdsKcMcbbW4SKSSQ",
  "key22": "5VEQUUkCeMraTaPHn8Sa6YnrWi2x8ELSeaXdyxhXu7M1S35duYMjeyA3Us8JaWdPQQxCxAKiTFYJWaJa9U5Q218z",
  "key23": "46PM9fREjpzx3puJiwPfW49wq64MWgqe89AXUJRyoKFN9RmHb98Ftmx3794Mv5HGvhjMqCgJupTQTEDsAgvax1SB",
  "key24": "ZNC9W16tfLd27x3k5pxiLKTVhhcvFv99UPf8FTbCDkGLGJmpykYUfgjTeXJpDQ1nm3XUVMuK5X6M8wDqaRfCH5R",
  "key25": "eVkZaPXxXaYfjKAmVFCqyEpfqM59vEHrTWbMeTYobwEe7voEeian7ffJRYuCV5DxbbGHqXKJbDkqx7KMfVEa7ZY",
  "key26": "2qJccUoLqqarLViV22No5FjfakmvgEpHD4RtqwMVoboEVCMw1wQCb5Cjqdovrsj97xLFUof6i3EhF2vNBP338Vzt",
  "key27": "tV4HATgbXqM4J5G4PD72GWaK71F8WhCNhiCFQ78suP6ydJkKa5FebkxjH3vWb3eTL23ebYysJ96LpeNhNLzTZoX",
  "key28": "62SHJ2Urp229iNK6sbf1FprVJvVCeoeyRXTgemNf2zptohtjP8K97d8mcwjY7hjvKMuL9tH844w8Uu6eLLQGXaAD",
  "key29": "52X1Y2MmnXHw5TAUCGx7D5Tc8AGBAETbxcYNyVDwAUFteLLN9VhDgHjcYZt7tUcxtAHNy3Ak68aKXZc1by2vjeta",
  "key30": "3G5jEcKChbZwM5x1cj9oB4aHmhkiy6hsV1MzAsuPznPVKz6Y4RKs6XEUnhcXhKaAv44mkXzm4Lmya39yznVHtTrs",
  "key31": "23sKvQT1pUQfm36Y3K2qZzUaxi27vyqKthWjkJJ2A7D4bduMrKoVzLvnYoX1q4sxFLhZySmrwNRiqvVDRjCshz4L",
  "key32": "3xuKwweFbU5UjkVPZDpbv9YjxwWAbiAFgA5dQKYXCn4Xy5DBMqbQKvhF5PDK2kGMjKFn5WhXCJRJDFW7UTwAm5Pk",
  "key33": "56gFnSvCJEVEgda9mBbMKmYoGnxvmiihZPfCc4rGvqkhpXXzKBPXPMJVaqBc4DcvS5XYEi7UVu9TaW7Hd4hukXcJ"
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
