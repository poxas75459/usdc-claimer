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
    "4cPb31o3uTPcmkoX3QMsLoWtbMiYJ1XygLafSA8xYXmaw9g7zz8DiKD3xVDJ3YxAr86C8ZMFN8zhrDRw6bVsyxKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMngRSxyq2pXRNSUJ7F6BpBb6GJkypPqwzHTEsoqZ8vrQotVoei558e8Mohjm3NYjBFNPKxG5aLSjoLHbBdyXXz",
  "key1": "2bdCrnJLWaynnYvSYoD1BCAnwfBP3WjMQji5FYcsZ79FySZw1r2t1trNCDm2ubs9KFjJXVKZU8BrmS54NwkKx3Dn",
  "key2": "3HnkuU6HZ3mVjELFMaSGWmRVWAkjyJ8VYAkK5kheV38GY7XzPMuZc7CNgS1UiVD8PYqYjzBg7iBKAiRrowDXu5pz",
  "key3": "4nUER8VJW4UXjdg4PjNLrjZJpZRwoDL7iDqpd2vfv9bzVgJahuJFTS6jfAVXvPHqdcxyNqTDKe1c9Kess1nC7z2V",
  "key4": "5PHVY8aXdeRWBjGXemVzP4MsUPpqqPZ12kK84qhQy5BbncLrrRiRGg2FMR1iGp38ZCUJAovFfTvLn73mD8SfSnkg",
  "key5": "2QEVoJU4JVo98ChTVYUE8hcfMsqC1Pbu9seWqikj6QD8MwEXXXh1yauPcX63eHNZGgdEHLriyZNHFHu7aLJUEu4p",
  "key6": "8uym45YZw2qY6oHJmkZ4pHHDSnKAxygEZZutLwjgVZLE9CBqUYUycRBso4Vj5BKX77V3BBUEN5iWhRoj9jr1Edm",
  "key7": "5JjTKYV51zpB5V1cpKhiFknA9zw9BigGw9R3Mn7ddEicSVj83tAx4JdkzjPtHwKUvbvboMNMHnQmwpPLeLwXVTNd",
  "key8": "5F3D8RBjEtmoJ3GHSSkrU8tGHb5AJid38Gb912Fu53VgCjhoRooex6zs49LAcnhvNYQMzmCNdUog3nyaw5cCKYxK",
  "key9": "3QeFMiVM3V9i25NRG4wTyK94So6AHWBBPKzYPYNaN12SzKmX2qcEzieuD2fbmv9DJF2sCLWvT24sxqEsYg8rMCGv",
  "key10": "4uCZaPkBjJoVp6obXA3Ty52xjQM3sQcduJpsanSKbL2FrHMTjRhBPxQKAcX9bBzsMtwt84gM6pqD3f3nodLQEj2C",
  "key11": "3hSoG7Hu7pwmgMS5p8JTmGUaygH9unou3xkw84EVqFtFYH2GAG92Lmn8Y4VWdkzN9zGibv5pPgKFSdjwaSRYK9YK",
  "key12": "129zXRYXLjfNmdqLuXW5UzxGF7UpePBqFymmTzZkdxVTxzVpgf4Wv9RNXRb7iamydpk3L38c1cpZ7ZfSvoYtCEKJ",
  "key13": "5CakB9sw4LFXY1gAYccFU65a1fSQX78QNBxzukueEXY9c3AnbdBgo7Kt4p8XdzAAgJbswYkdv8edTTFUMF1R9yhb",
  "key14": "4gW4FkYAo5DvDb84oh1AvxKAbK22RXdVKLH2SDw2QaNJgEF3KbkRA5f6Tfq38CALWH5EqqW8ya8fHR9hY9yqvimP",
  "key15": "3zWoyjP6mq6oEV9eiWKj9CMcrvSWw1xcARVKyPP4CkW1Ax8GS9T3XRVAJBAuQZKALptYRzgye9v4RrpBQkHdGhy1",
  "key16": "4mWL6bGpQQNzggdFHdPfotJDbHF3T4oAkBLqcSYXm6Kt8K9U1Gb23vgdGtjkFsQDBcLNKqZUA1o7wZMXYjZEwDWA",
  "key17": "2HC2WY47KHJxaHsAEZuB4wpYb22ZHK6bSTsijYFxutvqB12vkRrdd6EiRiQ9M5BiZ4yiEFhPfy3N57WBHKoy9ze6",
  "key18": "52ybYsbcYELdbJRUuPE2SVnhCgTeRVDkBAnxYmrJzoJqGN17dyeShwbGGJbZxFcXMUhFszj4C3dnvjwbTGb7f7QG",
  "key19": "DLJ2FPW2njpV1JsfZLjV11XeFtMDmeXatNhgrFV7wZB6p5KnQ8f7o61vGiNmZiS9oXdEDgES544UKMTrQ6xo4AQ",
  "key20": "3faqLYZj3PpZK1BC3v92moX5C44gXPRgwqB3NzbUUJJuwmRGamb26LADwNCpGjL795QNxEzGbbCRezagZVC1k469",
  "key21": "3TTj6cUw6vwzuA1hMZf6mhgw52Wvc4fKqbzUjPi5n1zjGRQZCxQG9dBDr4ThzesPsgQk75aXWpm4n2M3cHhp9Rvg",
  "key22": "37r6FpzgLSxCPsXF6Nb8K2hw3KnLD94TNKYqoCr5G87uH1ztgCoR9sbKRTxwBBwimH7cb9e3h25ZF489U5znvEb",
  "key23": "5W1xRaB8eeeWiKAmrELw3T5Ai7i95XYZGkWSSRDZA3cSSMxwPkg7Wn89pEEr8UCXrmtZo8EH4E4snLhtTu3AhvtR",
  "key24": "2pj1FEq6xRn5pmRfd65qnb5BZ1CP8dRS9kvV9oUJQPxdJaaUcZpkjMujjQcPf8rn8Jg1jtBx2VgfQBT3LnG9TjSg",
  "key25": "5vwrWmjJ19aRZXyQfLF7CtanzJDpnU3WQBNr4T7wBAQBZZoWTkWKc7vAkk7L9VJyfzrCFYk7Ej2zYyEHBY44xbBo",
  "key26": "nc3A7EbF8dF7zmgqFoKdmMgHmkPSL69Gge6kGyS7eeXB4TYbev57XAouWxp2FDgViuqV1yZULeoD1uvBGuuNUVi",
  "key27": "5U4NDuoDvC85UndtwdwAABYgoPgeLMiNGPU1CPy9W6wMo3AANxJHb57LeLgF9TNqoW1gYZqUrYfVRUrVohpHwYoG",
  "key28": "22fs6Xy74fM3eyF9irT4yqjvEJfcg4cVCY49pnJtvyjvLmXSKLTXthoUHU7Lw9ZP87TcBFCztWYkqHKFU6qhVy56",
  "key29": "4EkA4uESsAU1oyg79hkBwanZbnyd7uzBiMz9WG3uiPA6beEmLJ5NJCg27WENiTETYDwTPkbAgEaXCc98gxMJXvtc",
  "key30": "fdidBJsmdptJMXNkVFpAT7h75Anbij7nGd1Vm3mW2YuxRQktSedR8K9fzpQwcveK64piFZNzozv4AbHbG2gpf8j",
  "key31": "orTGUzKpcS52tdjLoojAQUhN9U2kspFQGvifPK5p4Gt5afi2xsXx9xQ1C4kXHKkWsBP1ropDWpL5nikP8aUnoAB",
  "key32": "2MhcxExV9iBdriRVD6FJqhjyWGoYPrnq5pfaJ5DYtX8Atoq21Mi36GpiFuaytqv2aWW6meFAmqdqoHGFuqJ3Ztss",
  "key33": "pTdRcEUMsX5fBEgCjXLsPtdBm39chH2wkPrWXfZ4vNGQWK1gKDvH3jM3JZHHKziTFpFtMLFJnLs7QrF9cPyAxkr"
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
