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
    "5Rg6Dz4SToqg3uMhUS8aBJ9gf8BtDdjfoPGRYwUFxHm5NwZ9MqhwStZAEDmeA5KaPqd95Z2eqqyKgK6k4XqRJYpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nB4B5mYHJmtxmBfwN5dmXzHAFWYKP7kNApwNmAXSzQYLjxytad2oGYiS5zouPZYpMRgskKcSnems3DeqTe5o1Fq",
  "key1": "FTsDotbttj3drKW7yr6uPnS4XrymGCUwv5kvwwRwLG7nLRuukW7ia2eF7o7iJnumhrAG7gs23rc24Wcuj66YqdR",
  "key2": "4f9reSqFQ8FDyCGW7Szgp9v3Ubd8AZGV9yczFqNeBzHEX79qB195tfRfo2k3vi5L3cgEaM4Y63SEgepmk4JsZmTS",
  "key3": "2bxiXcKKG4ZPBLBbGR7AY4bfUVLpyEgs3Nx7i7ByM9VAFVi1bQ9CQjJgWxzyZ7waLJ2EyZ8YEvgCsA9kjUSwv1WZ",
  "key4": "4Yprh58mL3WzPAGPGojEs9J716heKMjHwKJC8AFaUYQUJNnRW6KtiHeaEwmQgq8azAYf2pVAKHR8oLCm9ZxNwyFw",
  "key5": "3V2ZAj3si9yqmL5W3Z52juTjESjbDJUDojS4owsogZkhr3VGwFDtD1M6GWZYgchA7czVyZzEs8MC8Pw1HP3PtQ2Y",
  "key6": "4hQ42PuPShDxC9hFhKKJsJYK8zCSyZTYzuuqydgjEUVtH3kBpYSczs1mYeidSoHRXYj8eEZtt2HoQLSgRTDXRoxe",
  "key7": "E5zafgU6W2vtEHZrouH4oCPFquof6g5UN3Ab8YL54cuFP21w8A6uBuDghJiX5qTcas7QE3oFNrUJUuuFnhhY7nY",
  "key8": "mo66qzoThpzEf9h5aAh7gLFvtNwytGDF63mPwUwLCcs2JTf8YETB1QWoUTLyajRhBpc4aYJ54Uov7K88e2PZd8E",
  "key9": "5zY64Y6bjmzvmRJut7oNR8vGQd2YU2ctTFvsXENjkgHS4iYLLLDrEGmTnm7PkPaYYqX2r2EVoPkBQ3xBR7RM1Etq",
  "key10": "3X5HFG4wX44GPYGuJ8Ha2sWPs8fPD6AGwVVLD7ReqA5HHisdGQyTfecwzpJ9kNXZqNrDsoQpG6Mfbx6j6g3XCz1J",
  "key11": "47e7W4LtFbySVkUKdBjp7GMXkq8UQ1TgkseVtTi6WbThU5V9edvjRoyVC24zzBRmFwGaLJEcZhEFWs8YpUa9A9nC",
  "key12": "5uVm2Lci9mZB7qHvhLtxJBsmqvDRGhtKAUkocKHhutRnjkC8Be33oMEbzuTUEgieAn6P55RUU8FfzhgZ2rcUzmBv",
  "key13": "2BtUVTpdUJN3vvrF5dgdA4VQmZutGRPwXfjQybp4tvLdB1yPRvjPwDZQev4PfzWhMVekNXj81Wc1JNJ9o96BigRx",
  "key14": "48JsNWGkasP1SMmd7XpuvYm4FzciZKehThKe9W4CBPJYyrh5eoPwqpwyLmvqVvbtKHkvP9RXjTdhidfrvYoLgtHs",
  "key15": "VC5FiDbChusmK7mDpY4HeagLbAUcPDKyEzayoCsrbbRzh7k9cjVisbcabFGb9L1xFAsPDE4yyjKX91qdQcdBm3d",
  "key16": "3tkYVmwR3uGpuRRHdpQmB9gxc7ksXBiTt9QGsoRHkwWXQVcBF7sMGoPSYhMMGXGv2zvek9eadwbLwd7Jxwq4MFNA",
  "key17": "27dducgHG351bUXewgU76yT7xJZpKQJ6FXq6acbwKFGwRexR6C5bzAE3pNvb3o5U3maXqMSJRefAe9gjpqHCYUJK",
  "key18": "2m65JSufPkWa3y9wJtUC8uepySeyWNgFtxLdr1ektQTdmkR58svTF64N9Z2U1gpFvaCLgmLkLStH37a5xySwA5ts",
  "key19": "65ycuxpinXtGkZCmKYz3YUvrUaiM6YqA86efGzXVDACiQK5maAEfP1D1YGnvuaz921EMxiF8n1heL9pmym9UbVUh",
  "key20": "2isRVL6aQcaTKgk4N8nc6p9YEtXbibiokktXUgomZG4ZLAozGnPewt1Vsi8YHwvCfJAezxVur9JcsCgbES3U1RYx",
  "key21": "5sQMhMaAMhWSx8PhZ43zorcSLyTb3mftHczCeVfzQeQ7PXSYk96aT1aatfb3rsRJq76w9gAARsTfaWs1YqJ2MVSR",
  "key22": "rn7zuAqpzBLBM7UzoBSizi9AVAfU163EYkE44qASCgtUGsgnxafjRAxBALtsXUWuStDLndqLXVpMGp5fyzfgV2f",
  "key23": "yQAqYdAmYzWxip8FxQuH8DwNv2dDd1Ec1Zvo9eAZ5BxKQRJwDV5EVxXhB65hWJZdo4CpqWEAMtDrv7rUwbuFwGy",
  "key24": "2eFPg4TnbhJ9wkhb8bXVFAxBsY5SxfNxuTqyoVVRMRhq8RXsbpgiTNkCVoR6z8eA7VkyRZFe5xJ24wFYKNnKgzaf",
  "key25": "2MLwctNtTEVyj1coAux6REQdnD6kUspW2HEMy2Yw4s3cnY2uiJYmPmPZCK8XieCyHZmVjKMEaHEZ3YEj7Q3y1A9T",
  "key26": "5qD7ghNcQ7WVtK5b8FBnmLTDWM9qTi2kxm7Q5Lj21VywH7KYzwTZaoLsrme67mqZTAfmG1crBmmH54ZumP2wwC5P",
  "key27": "4RLTD1T8Phad8eTLLLjqiK6Q4atrRcT2JikA1kXiHY9cmXkiVweJd25WTVEBu9JnRC7hETYUbgjNg7ajLMZCEaUJ",
  "key28": "5rfhg26gkwpp6zukz2gjhYgiPC6rVu7fW2xFcYNn56rowHHMruezcefTC1FQh8AGTdqqCY3QUbUx4SmR7Z7QBwHP",
  "key29": "2Cb8pstraiuY7FATgB1qEMX9yzSgF11S5LHVyoepZFD81pFz11F5zeiiyxGPn5Wd9xGRYLMAnMbtdVkeGAnedenW",
  "key30": "3q4iicYXokxf6bdSbePFVFwBUaoGszhRDXxDtjtvs5qGGSrS6TC1EJb3KjuFizxu1UkAUi7CQPrXmW4j9gv3amDw",
  "key31": "2rAVoqi7ZL8oyQtxS4KveSv47dEH92rGkQ1QxjCWGyYkXDpPPnLWW7YkPUXUtAsBeKvwU1NpHje1GJ7nqHkvR9Fa",
  "key32": "5ispQ8vcNyLt4tSHm6yNEUFKhEp7CPv47M9x25MD7hAV4djf3GSaWxfQoQoichiqZetdJmEANxwAa899MD25dCJ1"
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
