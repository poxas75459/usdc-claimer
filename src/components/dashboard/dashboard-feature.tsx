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
    "f15mdvKAKPbeweez5muAu3tkhV2b5UqQxUnccX81ypDkZzjAzTGfxwf4URgfYYCXtwAJFw5Dk4pXyiBqqoe5Yz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2RMxgiYCq9HRc24bksosr7LkTELwcQKjyGgopnwipA38mD85h3PaBFAnD1mHDpc2CSuSZbvFi87VWdJmSV5cuz",
  "key1": "436VrLbkUfr7ehoaNGjzUEdu6CQJXE2xFSdFEzHwjFPwGFDqDQYPWLuYtVkeKKznbQEevtc9nTW3zTtxhLGYuw8i",
  "key2": "HGpvKobTfArkKw1Y1Ppas4MLquJFRWX3AtVMCcAZiZiB8Nf9f77bRS8L5uQEMVM26JzMwj28t2mFAG9qM4htEr7",
  "key3": "2LsMxqRbYXYFMke3VjMgXVadkdXG9nWhzEW221sJ1Vy9pUxKHgvaT3wQ59EFsh3HnRwKw5KR2EH4tyzsLoLietB3",
  "key4": "5zFzfPA2VYa4wuksywX6JYMAQNzV72kaPCRfpYWDmx3e9HYZtJNb4QjHfrJvSREJthWdRFzy8VWpt2BYz2wM4TNp",
  "key5": "5mzovH4LZdDNjysWxCppNFYGS1rut4GLZMo1PUAsBtm2JPafwZDPp4LiXTkdvwX1SwJmbiyCwqnxBMqekvSRwS8V",
  "key6": "61ixeV8e8uhf23MwJL7QowwxgrPgwbGAPh9JFX4c5GvmcVrS9ZEjnHrCTWRAEAaCuVV7CtFQaer5ZBXahjpN7FT9",
  "key7": "21fPKGnpPzYmGiQamXQy3gNSwS8wMZ7wFhyCDEauWy13oX5okst7KBxk44Yn6EVPP9kJF51jnG7CbnXDeH86dEWD",
  "key8": "r6pEvthPW1fqbtkazUdaQrd2HC3ev64aYGdt4YaDMMdfnvtjFzcPerxhQbJkKDrcPyGKKCmkBgSSVcmzfBh7TiH",
  "key9": "3SrmRzuQ6tpM434uDCHnvB4tSBW19YL9RSBbHjkxBf7MPhxweA1LrCYrbLUtdG8WUY1KQyYSeAj1d3SHU8ZEeJd2",
  "key10": "27pZhJ3wkgrQ9JqSK4Y1SB2V2v8GrMaqhaErH42KtU8X1shngJg263EFLV3kMDMCZHNqQtWybpnFpipeN747K3sf",
  "key11": "5zajHjh8gJxZ7aLqHDDi2fmGYAvJmr2HCN8TYfro4sEAGArXnSb9kksdgZSmsE1ZSiVYXcWHjiu43mpwsMDRzeaE",
  "key12": "3xEFASUw74MqYEm7HQvb3RtgDMsddMuNFfKo8vgm4g8sEXLHzrJwTVZqRRDe4MamgwqEEyDXFEF4Tr3RHck6HhFt",
  "key13": "2bXCdURgHqt9QAEUYqsx8AzPusNp76CSdYaPUoEgq7R8nsgZzmT4x1P4i2HLGjT63MFVBTmqdgg95MkAKqfxBo8k",
  "key14": "4iiMfKNAfuLkzpqSK5TujG9QsEP8WRvayycP7LmojLL5TNn2dbSnz7cNi6friJWiVuFYu7t8fKEVrAUATYqxmvWT",
  "key15": "49twqTFFDB1Kj8zz6bcuqmk2fMj6kJgQYPdLM8MwAeZKJcEQMSGGCb2WDkTWVjxen6Kn7FrDjMCvVtivX542QWQU",
  "key16": "3ZLYTPkS2aURLyA2qs6BEsDCq73UT6qwanRLAr1GW218fZzyHDHPJ7Jwk2V9JCDpwnAgqA6BxD8YaguKvZpWSdqp",
  "key17": "5HTS6DfbHqz2R9Qg3NYBPMFfyTjuw4gDGpWezHaEqHFQSQ8ELh98LKjeY36DavqqpNHiG1U4Br7wzb6x78xNucY3",
  "key18": "4CqS2WVde19FsJLywhbSg3kox8T9nMaVUqALvSPgyugrUFzywXz9v8BWai9iXAb197A3XYnAikcth6UEVnnAGK5o",
  "key19": "4c32sP4rGfd9gfAYwDiDJWAVX64uaUSpoZVJWWxfz7wYGgZHGAnQ4ijf4KbGKB5HbSL7hatyT6bvV6w4dWLd4X1Z",
  "key20": "3iH9vuFukQTDfmaW8HdqautZHBTZpCzcP2vLfGTbZMTCYcaAcb91mtfcpkhkVE2mkNfuZHXV3zL5oUZNxBbPepKg",
  "key21": "Tn7uU7kSm6cASc8xp5f8eUHkuMK6djShuk5tfdKBpz6hQTEtULm9vbzgVNXdiGPERRLjP2HAxgtZSgqNCesB9Ws",
  "key22": "5Mys9H7335rH4VKrpynRWQGFCoqHiwu6dGx7VTcthWVb5UCtcAznVCXps59XWmy3zJxEBuHvKLfXYdm7N5u6rw11",
  "key23": "4jngNQ3sEDg7XaRzsw4KTZZwLd3tp8Xv3nvExKg5Z9nBFCVTRBwiaLNbcsxemKvH1BC2drU6DGggZ46nNthJ1NnK",
  "key24": "44FitmvLU6j5dhdux3ViN9n6LVnNuU9LW1eHHfG7tWY9Y1tDfi2ZzTJv4qXEt8c4wfux2Pi9vFsRASzwxuhsbQn8",
  "key25": "2Q4rGu6BPih6YiicnxMcATpnxV94nigh21NBwZgfbUaaeYT81qKCpy98VJqnj3GNYX5wAmYWuPbuQ69Wg1uQVUfY",
  "key26": "ndHNb8WXD2G9kx9dkMto3V878eeT7Lo9tWHLMN9mj6A8Kytt4n5iCZeTVyZFGdf4amdgrGV66T31LCjGjKt6eS3",
  "key27": "529AiJBoFdCHuPmZzy6DiBgdvymPy22wbWJYDtKMgzHqkmF92mvoVDiEZouCrztV1yH9do3gLHU4pkJCefC7KWiP",
  "key28": "5CbSdt1eK8BcoQ56iXq6daaS3HoSYkB8nZWaBZGQkA8PyWnvHbGw81oHz4Ww8fV8dh5kYDmgGBQVQnPkJcW4DhRD",
  "key29": "2aWGKx77UTQ4dtRRYKbWKUNGH81LTwzYojscHYTZFtwqoYogRiPVdKzR9knE1qF79D3RCHLPgSgkmRPacQ5jUvSN",
  "key30": "3PEgTvYGKYksSNzL9HCJhVaR2FBbx1w7kEsEgVtxG8UKwY3Dg4JDKvuxTt9ccYZ1VCsgDytaNLco9RyTTGburd55",
  "key31": "2irouB2ssUJcWt6bgE2C5hSMz7SmYTYUe9W61RbguDHB4To2ukWKxrqsh33KoP1JVsfVEiY7XNgZ8sME5CPyTQ4H",
  "key32": "2etGqqCpsbcTfXvcPhBK8UCe2Mtg8itFhjWSEcsqdXeueix5N8y85hXM4urV5SfCmLUsDQjAcQ5bh8rA7HbLr27",
  "key33": "4dFwB9UMS1Vz9dCpkXdnBnsAocqU7GstBZ5Kk5uCo3Dyjc5hRxESnmqGG38XszQ7co462xt8e2Jx69zTtMk5o7JB",
  "key34": "39UB9MoeFSwuzZFoXAkdn5e1ZKFkenYFmGBdk7q51Tym1bXqvBUYsFxDaLBXi2f51SCX67LuhtdRUMjFyt7qmQRf",
  "key35": "r9yBXdmvRuEfKFXY8Rmo8K9m2Jsu5oSa7sFXZo7eVC9UPJ1o2U9petU1cKEamszEJhgR3wg9PVsE1XBqf1k51VS",
  "key36": "3BMTQJLenHBrkLScKmTABbVvQGQznafiCQQihWwKL85LivvieTGd6tQ8VciP3qcxLg1SpinQm3isg8sGqypnhqsh",
  "key37": "3FP1vjW6ggnyRWhNMZFmYBTAEM2uSAG4ag5JRhjUXsXgZid3SZgRjvwJwk6eu1zMXdhsSmRzDYV5qrHXW7sMZW2W",
  "key38": "3EgqAjwbVp9SPgrXeYDSf3mU8LJ9dkLFBNHnmomyuu256ofHXi226VZ2Zxszap7birS3Mi2CVsZWuVCMymzusHWx",
  "key39": "NiTaSjisoCUeaYfpfJ5dHqz2PxLKHaemNRr76XhbbLqeNmPCKRPrgrsVbonDeD3mHRXrWZYWydKKhaTQjhv8dJc",
  "key40": "3g3fdBjTpE3D3NQmw3CDBgK7B54M1yfvbRQYBpRcudsx5cQUDjZbi2AS1JVQQB8XAgiozWcCxHq5WkK1nHutz895",
  "key41": "3BCmzWiqNmjUigumeiTLfdT4AU5ksjfKmCpr7aDyDV9dtDgaFu7vRJPPnniHWP4zLB57WFQH5GuzthpfJSfLK88S",
  "key42": "uahmcmY74WikBC88PxhMjUWMRKa836R3ResCxqjnN4hR67uRCt9x896K7SyDaNPRzCK7vRzfs2Kccn63mi39Efj"
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
