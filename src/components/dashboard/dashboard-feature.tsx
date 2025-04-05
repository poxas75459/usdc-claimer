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
    "34PDGA7dqFP44FpSPWG1sBGTX5qGG7PsuoSu2QiuW71fb8kLDRr1QGYsmooUSuVmfbHoVb4YFCj7BqwjF6PHQQr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wR3vBe1tN8rUFnh7JwCav43bsjXHQbzQsryFAcemyQzygbV4mXocA7eUkSZGSirCsVKrYDWRPxnhP92abdjByi",
  "key1": "2ThQofQKCvPNCRaiHX5BuaMunkdsd4hTsKBPScDZLayHJ7QykCNGuvoebN26B5XVssab7kDBmNxCQQaUPhQ18Tc2",
  "key2": "8QL96VVFoLQsnjwgAUGHoKsFo4op84c8xkeRiagRsqy3Hx2FtV35jqJwTCnf3U6ZXwB7FHBqEQTfjfdq34gKudn",
  "key3": "2dndH7f6yfUzv5BQQ3nVnQ6g8Z2dHpPLd7LXm1oMK3YvYt1v8fxqfRDUadvcV8uom3cJK5DAN9itysF63He1RVrb",
  "key4": "58YPFU2cows2t443hZbG8zJdc3WtSQron5A68C2wh1NA7FmNzn3AkUm2wFzCCznc45i63uDeZVr91DrTFB6cXNiC",
  "key5": "2pg73CJLV2PfcFf4BWFGSUL9B5RJa13zByABURgsHouc1odY5CPL4oXdWP2nEnM2vQUZ2dtNQAsKHyxsQRjS61Xy",
  "key6": "ND6qZgRPPXjCbuvktdVGzkYJZZbjxFpk9rqjfJG8VjYUPAUVqGJ56JTwpH44s5QACRuXGWAQjrdyGb9aqStK88E",
  "key7": "3wJnhiZvwoSikFHFXFsh3SfZTTPPfpg2uecqvExZpJDCx5D9jZLd5W5eMNjUZudAGMUPYUSRCzxsTNq5QWuvws5J",
  "key8": "5RRdVLgxCcgQaFADXqcgMN5Lsp3HfHeQz4GomcbqwJdSXp8DvaegrgNML69Nz32ATdUov1Q3LZXHRL4eqWYARDbZ",
  "key9": "2GcQsoLzAmdp1NW2iXhhQeM9r6CjNBBLRm5YJ91zDHx3CuzVDckY8JSk45YTFNidKB7dCNPKUieSkjgQN9HGwZKJ",
  "key10": "A2qvTZ3Vi8xmyVyUqZqNBYhGHRP4YCuaoB9NSKvfEP82NBqZWRkebJHyhyh64TQCpG3iQarygYstMwEWw25xuPy",
  "key11": "o7NDbR6waN7qDZkz41kb2egxJLgNeVwbVEoaDM9BxgBhGXs8ATqrAZGswdzc3NkcHSixxX6Uxa4nLHEVUoqguPe",
  "key12": "5Evq7oqapMxSAsyKNC2vngwVNgMZgux7vwygvzf4DFeYmMHUhBjgU785GRtVxjYwmF4RirkKpvmR7dpCih25jZA7",
  "key13": "YsjRy43MmPG5szvJH7YQyJeLA5pMcWeR748pcBHe7srD2QjmDGiTZXsdvLUcecc28jH63PGaRFZwQDB5zzoSZf7",
  "key14": "4zMhoG2tAqW7G8f9xX6jZuuCT3KovksWCMmvTJ4v5kxcg7KxTS7pzhUzxoJuRA8Gto8cKP7QeKGWbo1exoncS3fH",
  "key15": "61r2vAa41qSSu9q37fpwxYZ9GxWeeT68oMF5VVJSEucGWJhDuxoip3mbzEwfZpAMMJSP59WqhiPQ9i7Lffeqic4C",
  "key16": "2jhCP9mSmwhdjjApvbAykHowmGWc25bniuE2fTLd46CwbVBf2dU65iHkYfiQkUAFGRiMxbuzvULjAEi1XVHZw2dx",
  "key17": "3XZFuhz2Dv4DWhxNN5qVmjcwVsnTLBSdsPgnWAdpfnr1mHGU2x9z2n5ANkMy5q61bbKSbnkLpNA6XezUodzQnzEi",
  "key18": "5kr2rVvP5bYavMVuWNs6WxR3WSAFbmrE556KWhwzB89JngDPww5N1PRAweVvvvfTWXRQonkuvrUhxgF7XUhxUDUC",
  "key19": "61vww4rjRJA5TaaCgCakednWhr2swaNk3JJazGwHvmKj1wMoEHZXwATNyxadRhz1FwNfp3WTio3eegB5DdNanXYm",
  "key20": "5B9EFKsC7MJkJtXwDQMQWQJgKjMDwKJGSMcmevFfHgAZzGVfQYPeuTEkSgs7piRUrGoLmTvuMJVPZXzR4RoUFKZq",
  "key21": "2bV2RMcK1Z5X6XLvouXsDTFijmAMvRFvdFkBeobftYP9gHbt1tX8bQnrq5NU7qSjfsfgxEPKQhch4kAfvYDFpV73",
  "key22": "4TQyV2v7q54bN3Xqr497RswuDrEeeSLiDeH11U2891BYGQHEXYmtJN6ptbPL1cyt56FpbnFjLzWTCT3Fe17fdQBv",
  "key23": "fkbqdMMZDQDpe7unu4TTNCDak4qKh81U5YXU3FozsUDZTXYaRR6UjL2cfe5SDUYHFpxRaGT1gNNYSVejaqW2RNr",
  "key24": "3anHn5tdX9jLUwQfW81ABvgkmxMEMGrM65T4ftVSdPQtvCh85JqBRWzt8HoKJ4KqzPor3uPhoVPGcodR4XWiYqu7",
  "key25": "5QQDFWukfo3FaHkV7QQgeYobfFUTxhQA5fRTRPozm9uKgp1edpT6aphfj742cvPd2SuBH4EQcdbDymT3RbjMu1wk",
  "key26": "3BCXvkcqEYj76MFdXhsPxjUbe8SpmrNG3ghrhpQXy3UE1hJ1Rq68C1qZ1JjGFm3MLkQ62wq8vG9q57EearE6amVe",
  "key27": "57Wyx7jy6sTxvdHXCUVsJ9UZyp92Rw5uGEUeraNMVq8J3NqShQgsMQgFWaFyBRLjuVSJvjKYGkavXE2DYyDxGLGg",
  "key28": "258yVDzQjtcRcVuDJC6hFKHF3VSucoXEtyWgnW7vQvNiNuovTVYkpPiRsEkkfuXAq3F4yGtwULbEkpx3wZhhC6QP"
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
