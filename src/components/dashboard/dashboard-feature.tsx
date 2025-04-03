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
    "2kehBFt3dwtT2xpf632vX5LjJBUAjYdh8BU39YzRsX9f9UeSAv6N8QsX6dY2q27XzE6VWWGP8TYW1j2vCJGCjemH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBh6ANikHiukK5mnsTP177JmxGyDzsvhUidozMZBVf7vNNNXGAjmyXym8k18LcozUrBKKC8Z7HQi5AGfaGTswzT",
  "key1": "4vq68QgpmEjpEePUWCVyGLJEWbvV3QvPhr4ehGiomdnkygf9YeS8Jyen2TUos9poKKoChe8egxX5nfrTeZ8zP7L5",
  "key2": "35atPNc1TpuTSoFqMmjmWZqmwQynvjpHF8z2XRvkteJ5HoFEYbPNsuZh2s1Vxi7KRXGkzbLraihPczN9N6wAw29c",
  "key3": "4M36Sig4cD8eZFKByG3FM7EBMY2zMQGVsyd8zwVBEBiFvPYAtpVJdW7xREigpoUHTkHMuLEKsiJNmX68RAxk8eWm",
  "key4": "fULdw6FR9ndruaH1EYGE6Uxu51fjtcSfq9bEjhAATKvnPXpGRbSBRxP8XVabK5LrvXfHwQCyZLijDZnCTCvY93D",
  "key5": "32A9VpR6phXs7Dzeq42Eao8vCGZnLUmDszpLsiUonWzHtAfBeJeRSK5L1VNKkEkumwqaQKwewqYexq9Y2uPzgYp8",
  "key6": "UFGpJAVUQxYJHK9jAiE41423CGbWwzq7dbagKy8PSK1PrpxYNsJKjpEo21w5cZgj4zu83qDnBgF3ziL23MfWGsV",
  "key7": "EZBubZGESQynzNyxUwqACCxRGhPmC11Xag1VePTCMoiyQxBdr6GMiFcgTqh4PikMSaLPhYo8KDszedk2iPmQUUH",
  "key8": "ZXvfaFzH163err8aspqWjwkAC1G1HEXhnPcmwz4X4A5gMM5JNJ1Gef4mU6i4ZvSpwUrr7DaCQ1SWd888AGRZW6M",
  "key9": "4tbPcNEsJbX8996YogP2fa6gdrjXqeMxRbGBx3JzvR91TXtnJsbqPkDa1Tpk2oeHCKeVQwAUPzzBCKorneogBayT",
  "key10": "3oaKV5uSEUFPVRPLA93S54k8cjUxU7vvjAzyuP9JX7aEtkEXhPjjLdBJRzfRoV7LP2kwBFjFYN9AYxmgg938zY9m",
  "key11": "PguwkSwGH42gpVH9ufZnrBRwii5AirqPMM59YXcRJz2EAee9n4QberBY2zqoJaNYVrAi1UR7XfRocsoTmFqwZng",
  "key12": "5NmRFdRdMGQXBUKvbWcJDcstfqcvnfDt3fLAf17ofLeBh1iyeDL7nGp1bgqx7fm32GqVPrHym51mXKU6UxVUqMv",
  "key13": "5BTpsND5A4m6CGETBGs9seZyKN9LXRJ3czPUSHPizUiCy79y9JYQbfTKQuj36MFLDisTgvVgMH4ApPnovgJYZQq9",
  "key14": "gwbq1n8C7SqyBynyjpVah3E6FJW1mRq6pZa22WCDtfFFk3DRugWgcSHZrZx9AZ9sjPvSZnxjgPgffJwsBa6KdV9",
  "key15": "EPZWcGqsi4sUpWFr1YKFDKJsLdpKj5CfQ6FTfVGpGwSYbp2V7suL7R7aauUSxHnwi5LRegegLy6XB7VVjaLWEhU",
  "key16": "6FwRgPdBZ1rgjd4NwnbzsoTSumr82Lc5ixWmAtSUvP9a6RbZademWNrXM6WY9su55taHQWd7PRhao2F7r5creWU",
  "key17": "PtXxwhPUfY5Hdt6iJp4zhunzV5zLB3pVbNihGWzjPEcYVQVMZ73nv2dvPahbC3WaHChLzBxvuVDqEEDGcRZTFzQ",
  "key18": "28hUAZabGgyGBTNf9enFXEiPLXymkd6JYdtPNL9iVCjDrUVmVksA9omQ4AGTxBN86ZeFKE66kcdKPQhEVptEtEbJ",
  "key19": "3Bsqp66TY4R5ztZGhrPUkpk9GvDQWt2Sjo4x1Q2crwMfu6m2a8Femc58MfTH5V3jzSPpfcYghLnpUCaZkXuDxuqL",
  "key20": "56WVYSE53JhbbqBnauUe11m1wXaZh5Yofz2TZBPS95bcRWfzcik4LE7FRzaTWtQn8ByxWu1TERFC27iiDeqmLZoK",
  "key21": "3NT52dpsZ18kGbwYNscpRMvS1viufmCpXye8zCS4prHFcp75kiHMYbuBq2b3WAKxupsE66zZGfitgKhUZvP2noqp",
  "key22": "3jKffXuDPjfawskbeqVcs84XePckPrG4PNE4MpoEKLB2JrtULiXzvVnS9pjmFvWRoa3Weg7bUTm5Qrr4kcvCVNqn",
  "key23": "63CQpUrvuDMas4hqJj6JNS5u2x7PXx4sL9mCLY9oUAywX9w3PdPtoR3H3D8J1ggeqAj5oSR6iwReMfVai8WXHeyT",
  "key24": "3kmc3ZF7pSGuyrG6ssLeXKQNV7M244PC7dXtccDYNKjW37mBfXKY22kYm1eyBXjjdC4AH31XXYTcVut3uj7MoFxn",
  "key25": "Du5GsP9JHJr5U9dZUr2QLJUncaW8c1ukQaLJQgSXJm6F39NAT84b4rhohtYrD7WWHFy8iM2Jxq2HGXZrkqWgBFn",
  "key26": "2we8dDNynkjcGPAstojrHuzJPDBeri5v5hxoX21adyw8UTNaPgCTvYgZ7j9KNew2H4w4zn69UWjSKKqGqwtZgNcE",
  "key27": "61P7PJE49AJ8MQUUSuw5w9mQeAzQ9ReKpm4jxZ6nucC2WJFJ2i4PVdUCjfXEoVfMwWPXS4fK4PunkKD52Wfe1siB",
  "key28": "38N9XGFkbZwmBmcdxTbHTmEgeUx5fPA2761x8z2Vzdq6eJH7dsjiDSUkjcVFygZfNWd8nQqsJR4Mz92bBZ58MwPg",
  "key29": "uoWkMDQsVYWv7xVvfk9cjDn3tJTAPwQdZEmZ5cyWxo9Zwn3wCyD4KJkYcwDBeSo5iRJDAKxrewprjNLnH6Rnfmu",
  "key30": "335PEbgj4Rww63CxAZbs82row3zfXw9Ec8Cgnvh5W1q4A6bjHBPUjQoe9F4xx318UdGZ3JKonVb3isznbfPe3Npt",
  "key31": "66iwShCjXewcYASNSfoE1z4ys6ZAAXqUnXrptWtZyUTCzcvvFTBe72szkzSx9jwvtQAGAr1a6mVieggDX7ShKFsi",
  "key32": "iFPwTnvWRBwSRpCfiHe55PfzqtA86qGQsurmVg6J54DikcLoJ58QB6mXhY3XMPfNsot7T7dJiXbFQiUK9xWBa5y",
  "key33": "3xxLLin7BWwFj4eztaTcnJFPZRvP2S7ysjVMwwgP3i1N8VQS5i9Dz3NJ2WRxWg9ZtxjYsvopv3JXBSZH9osLSKDB",
  "key34": "3sv95ogXwz99sgZL2dt3pDw5FuTMMZ7bPU1Bn6q5ysRmXxxtkTA7sDx4cMjMx935bYMbXWCWhmckmMGRoXyXuc2N",
  "key35": "3MX6jEMjPD4bjtRvsxZ2RdsgZuCmpMPYAUcq79hGLwPSCqBbohUSqAuhG2yoBHvZ7JtpzXWaW9tBMaoCZLhu6sHr",
  "key36": "5ry9QuV5u5VphfUwM1F9mvDfdjQu5b4AJa1JTe72tbjEyNmZTrmaHxUHg8ECGbM7UoWZHd4zy4ki2or47Sm5MKyz",
  "key37": "2pWUNMRXyHydeQCFNJZdcsUcSqPPvZ18brTvu3fm7xq2SjTjy58ptx6ac31pjSkBjUY9otYKtkkPzYxUe5TVXY4T",
  "key38": "2oHQuUgR9tPP87BwAUYDectAVSyRZzojF6qLnDfsLu3acyhomVDjhxqQSW4kNh39VpVDreKY1vRUaK3MLjmZJ4w6",
  "key39": "5YrPrLXH22M44aCA1YzXrDiccxCVNuNLd81i4NABt88NS55eYHsxVEyTpqBiRLioDcdeVjPWY4MGRMeMhHttRSMN",
  "key40": "TQdWS59nHS16ANE4n1Uj9e2qWD6896jJdwPYo8muaP46CLE6FPZ9UfEGS98iB4aGXmpoNq3Ri5ieyXGkJLSig7L",
  "key41": "k8v8zasAjd1Gnz25vf555Hj4FMRLv4LbEFBuEFVcUZygPGFgxbWrMdvF8LVn8kaevHbvdiiWuktuKZ2jDmGufos"
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
