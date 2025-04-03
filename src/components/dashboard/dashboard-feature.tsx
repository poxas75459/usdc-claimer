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
    "4L5qaDMpt1Rw44nJK1RrJJb4HE4kpMMw3NaCfaYKVYnFB9VviXV1FzZjjQ8MNLYGLa5oMtN55Z73pj3wUbFJKAbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ba6otZNSCrfrZ8cqXP9SB1P97r4NSSDctSHbgqjWYasEUwZUXeDtTgTf7CBQA2LmTRdTxdkhAH8A99SdLZogmdr",
  "key1": "2owgzARByA7nttDXDtZEpPETLEkwKNfVjpWmFkkU8QnhjvRSTgBibxvG69jv8TgmtWK1HifU8WtoHVAmqVQnzVdq",
  "key2": "37RJzD2CK9hiB6PNnKpodP1cW4NNKrSesEfDmm8Zzqi65trCvoPX8W1D7yM4L36EEAzPtN2xsKoHaVNFzCz3PHbo",
  "key3": "5hNqdb39MHojcqq1LHfKE3NVBkL4ssUmhomapGB44jQqRx5fqqLscFBoBQqVKcggtroMWvL5K9caxEzqjVEF4anX",
  "key4": "4KzMBFr19JmQn3Z2Vm5ocVvAtCRJJsfqtX285Q3TkqLzfRNt22sc1fvYCNtD787RMAtue4EzXPoGAZXW9mn41VYU",
  "key5": "5PBfx6J663YicKcBo94aFJbypp76V73iRpYmf85BgWy6i1kimHEib75w3xd61Kdz5JsAWLS2TYMMesSqwuZRsaNi",
  "key6": "4BvoPAhk2T3RE28LgUAurdzxy1NuJpywMvx1TFJrrAqcomohUWdo6KxRC56iXHJCSc69Nu29UeW2cLUjPxWohX2s",
  "key7": "PWGTrPQUNw7YJaibUqyHMeUzr6b8ouGQiLkqqXursev9Uy845nVLZsaj9trcknzSc1TvbsKk6KQcS1HSUETfnCc",
  "key8": "3WVfhKomfJLpnkwizQnmp3cGyAmsXmnZXdFXJuhQ7zvpRcbXGZemA7AszEtJWq7L9G3MwGnBwBmxeRqMsn5Rg5Ws",
  "key9": "2KtJwqg4nbhDHfZw9EyNofyRWGt87Msb8oRQqbF9WfQqg7hTRPedixpqFWA6h2zTWtTrDjaJwzJb88Sfz2dJtb1S",
  "key10": "2H7oQEf9vZ6Mm1BdkdD7pY7LA6CXze4kgqsQ1ohRUNm5FoY3gbfZiDBjPk6eEGjhF8UQGq1oL2LyzGmK7ntjtfej",
  "key11": "2PNwdeS97pbDrp4HHYJx95nAqYbysu6bFsCjRfC4PNDU6UVG4sbvTNFuCB7iSWEzUwjRoKZQCRau42a7CNRBXG9U",
  "key12": "5vUgz2Z4qK9pVafYsAbAtguczMdKxsHfpxZ7rFfivmYWwDKddUvPVYsq83ZuiRX72um1JTBmgvpLqtHqobVgHAnf",
  "key13": "4j9aj2q9FfaHBQ4ThC3ZLR9d8VBfK1GWndNnnzMrVSEHJjrFMTKPpeUKxdvjtRRwa8Ej78fDq4Z4QSDSuBtEYuYA",
  "key14": "5j4vaD4Py59oL1T6t9geicbdXY4JUL5eoabDhVRGauNMpSPQpo2Wwxx6Yw1vJarfqqqNWQZNZZ9rtHWVwJtxwJJF",
  "key15": "1KR7KabtuFzG52zjRBxGkCanbmmDUUpwQ7BDVoxALW3C3vK1YanPLvfKUqZdYhYhp4ES5WyBiDrjUavdBWBQvGM",
  "key16": "4SaYCoDuhRYeMAocGnS7tiTU5GrKVcrHPuMUrcM9A3fsh7TBH1rahXJ2h8gYrMgB8PPUR8uzjmts6gSRrQj3CPf9",
  "key17": "5KFR7yw5Sm1rqSBY7WorkUsA3u9XGdyjjL45YQ8FCjqWa16QV5Zi93Z3zpkX4xWCLAnDUQipqd7MNNvox1JEHw2j",
  "key18": "qwTrx7QG8CLNY7VD7nqtV24xRGuVnn2aef7Yjnbu1Z1ZuBSGVSDVZc32i8K5dH2g358UnAXxKq9bhW2r99KY2Vr",
  "key19": "2TXAaScr6Sk4UrkLYHKWStwXdHSAZk8R5GhSGdJViAEmr2yQYNaSdbHBavSPKmZ6Khxw3YzD2YHKRvKhWQFZTXpm",
  "key20": "21DMAq7jbwmhGkhfQmy3PGTuMgcv8t5JDaJccwgXz6thsWfm9j2kY4KgD6Bex1ruEkMYmxy2zoQ4LJPyGRXiF3Rc",
  "key21": "iWg2RaGNn9ZqkVej6cDVYeBoXsL719XdufaE6GaG3EsLXrm81gABXyKttqhNc9XpF9VyNuWeEG8a4na8yLzedjC",
  "key22": "5ChKjBdpD2RBdWGfvYKLhAmhfMvgSuseEp5vT93xEsL3nB9uQ9xGLLkY55BmzySoVtB3ye2pdHR2gSdAyRAdQdKN",
  "key23": "2ZgzKcWvhe5RdZthegB9zX3P33zBpiwQhWTpNuLxq2DqR7V7vchsCCjzS9F82zDkmw5NRQEWyjpo4Ybkmtq4QxCC",
  "key24": "2oTY7pAyJo5wCqtbREQnqMtyNJp5bV1AcntM3PaAsbK7TYPhBYiBED2ggRNFxt5gJvTRYYZSqtdVnvCCL2Bnnwb6",
  "key25": "2yFDysBbALCEhkzF1dXF7ySVHidKLa4wcncQhSLFokcMHa9XgppvcS6mR7WMtScainnu2AdbgHGsxHbCSvfzkppT",
  "key26": "2pT5fK7bdqFFxAdVSuQ7rwC8x1veSXdmSevnQpMSHtj5EusAzwAwodW9JyJN3RLG8dQUZxHfqLwwxeaH6wed8TgR",
  "key27": "5K8ymMSonQcMSvBZk8J3e8fotfCyiwnr4Asg2xjZQv47mq3KqUuU4cndETjqDoJJnAdANpkLCLBAYW5RdnnxtySM",
  "key28": "22pDp7dVHZo8P6gLkewGXrsYqgbgLqxRLmSMrN56Bbk7WP2kRX1qkAmEp5E8EMScWtVktj7u6YPNm8JjAmBjcCv4"
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
