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
    "44CRRYLaG91hqvoRLuoqeDauGBx2oy6epQydK67ErsLGhV1LpNrndZUr7q1ydLcaRJxPUM7GzaAtAmMN876MZqkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cdynzU8tM5fxM9FwQB9S74LbL6seRULnqJB8VqsATJo62WVPK1BUhbrQ9WBmY3DzLNNfSb1aX6c3YrNuZNQvVb",
  "key1": "5o5d5kszztBgYdp51hztxCvdhnndtviB4zw2uNhf5Nfgy6ccBYkNopMLNejDKkTB5kBoeGzaKuTTmEQtf9qURibx",
  "key2": "24BmB2rE5vUz31s6hn95JY53PR4UvfofHv4pQHJarDCA6w97S3B73HJXWnViKFw2iE1MXTg4oJRfARojL9PB922d",
  "key3": "3o7bKNtBgxw5pjbBBnrahZoAaiKTJDp1uzPiGHHg3YWJKrsrCeQziq3XH61ktpfDYDXoyjTUHxzxYiePeBaFEsPL",
  "key4": "3dFuLkUe2mLKeaREgG5ubnCGXJxoP4yht6Zr8h34KefQr1Z24i5vW1MsixCxvvFKwfbXEJhvsyS9Ykj7adx7PfbJ",
  "key5": "LT1iRCTNzUCdu4QXcms77Ydg9dptGF5YLNctW6ieQuHeRwg5cwQEbtguWDzewB3cghSgQRueYLEjRaKdRhHjEKF",
  "key6": "5XoL9KByah7ShKNPuLzfJqGFXLNbdK6Vs1j8uk3fMnJkn5Nt3HFmARrgQtxVbu3zvdN4S9ysExYW1Wkc4qN9mCo1",
  "key7": "NLWagZPx2ADvE7qfEqmtZhdCnyegiLSiDPNMfi32BGsh8zVes1nQqcWecD6sHtF4A9NUiHQ4JLkVDznjkQync1X",
  "key8": "28R2JrbJjdDYtx3JcQ1x7cobPy2TNAzFeLWZJm1CBf9U47FZbHPtRA7xzwsoQqsKwkfrpiNHBMqorbdVXwrQ3QGQ",
  "key9": "3vTfc8bpuY8qRqmzPsuB4Q6D4RLnb9cZp5P3QN4vn976uVpesbrYGuC7zVTquYojyxDot4MFLAJUvz7JXxXZ8d8X",
  "key10": "241VBbMANWMVURpMS8cjehPmgZqNENsj6a2JSxiyJTbJ8nTqJfbLhpERrJGRHPvni5sZjVdBRrWaRUpxMc5Jbr9h",
  "key11": "5mfZpKMpJwFgUGx2fW6kNmhqKcHgfXvsrYrxkarFWrPg4nUfDAHRo8dEEYbd1Dh1wkA954TKuwYNW25SKqLcPeai",
  "key12": "2PCbc9iKqv27pHhfAY6qYwnStw7UmfTfxWydxvGYnF6yCZ8j8YtsvBbhFFvKaEdDPhyugiDu26nnLqQ5mYWu5YLs",
  "key13": "2af7tMbMBfBErN5CLApXA4LkN7PxLiSB2yx1weEwHbJT3C4iFtwayv3ySPGyeht72FSZwsPbvFg5maUx4sEWxnhu",
  "key14": "5mfSx4EEZAZqBafVfHnptCL5Uv9WdwJrvGRoeaWdpnvbXhDHPtTfbxt5FrEhruYLBpG538E98qzPyyWcKYGauJ78",
  "key15": "48Md4RDvoGNbmjmF1wpQWyS2nbVSMAAwqLum3XqMwePVT3fdvrfAYEVzkABQpp9bvgDHLeHXYiNq2RRuctJ9odW4",
  "key16": "2cGz1wS2fbmzb41Wf3LBxFnNAu1yNJmpPMFvbBtpFgT92wiw3AQcMX1ZCMYkCjzQUNZ8nA29bPmt59p7rujFuhq4",
  "key17": "5zDphghSYgNeDFsGEv1xb3KTayXZ3ZNSEQjU6pV9Gfodu582Fsbu2FLiu9XGKTAcWXLYTFSTFg1GCgripdTKr8aH",
  "key18": "4d26JnTyPQgvc76bvQWArP5a42n7dAiyd8Ktg9QP4wVHRJDR7mEDUtrHLU24C7uHfStDMhE9ptBxThTdWLkjmwYe",
  "key19": "3NWw794ta55v2ybc7Cnqi5ptuKwHyF3V19ZBRrsko9idNL5194KjrDY3xXmsJJwTqADymz2braePGHBtdrcspcfM",
  "key20": "5JeM822BGKsky83DQGv5WnYEFmGTCaTx6iHJ4BJ5fRhUwBPN9BXanPFR8AjeZeqTH94auxXmYp1BcuzoX1nfQ5oy",
  "key21": "2Z7nt1hSLUkZ3Axx857C4nkSHR9afeDZ2MZNxL4UbR9Srgs4xTjQYL8R7kuNwHvA9coaY1EnyHNe4g5RLm2oUwsw",
  "key22": "3AThN5TrAwXpqP5dvZXDj6pcSc5TuzwwjtmMxCJkeXhuAWkL21uyiudcV4AeEpv98NyWGFHfC7Fy9LXkfic5NT2G",
  "key23": "4biM87tAgtaCjrvghT3FYYvzq9jy3VpKxVXM1xVN1PNqE4WkgnzKM58AebtusVrisBa9K5RR28nD43nSezwhk7oH",
  "key24": "5fhXvdm86RqQ7gQYJ5XGh66JAgpzumjHowoEkfbq1WKij7EBtV5tDkKSXvbCbq1PDJ1KGdGmdFskkaGxCjmaWtWe",
  "key25": "31u5KTeFzp3XZKSRYawT2edRUZYCfgvq8sET9A2UGvgYRT9WkD4NxLVpHwKTvicRE5Qq6K1z3o6aaaQ3jWdDxzaA",
  "key26": "5GKdCPxav7hmajMWea5LuwEx3svfEL12wNyCQeJoR7JXFSHLYYvFjZVJLzCWp1AhaxrB7tCC3ctsf7LCL7nBk2qg",
  "key27": "5j3HQctQUXpMBbjXSW5pv295QsrKi26HZqvA9PcUT5HYdcJ8UHbbM1Xh3jZmF9jvxDMEWuootPBdxQScug5etRD6",
  "key28": "3uPTo4Ju3vjj338WtyJ1Apq4teEaT4TrRiQhNaQckhGaQG2rqAq1wG8ECD594Pp4uPznU4iGDB8LvVVEptQrqBsv",
  "key29": "UqqqWNzkL7bDi4TuqbM5Xvdy2o2gzzgc6PWZZVjqk3QQKCrVkmK9ahSsWu23FsTBJGAeAsBHVA6NRa3qbDP219T"
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
