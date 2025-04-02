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
    "53SwbfbnoSewawFsaonpwtCz97rUfB2T7r2vhrsnkGdBPnHrLG567eeKFyZtaQgShWHzuKNKGomAP4nVeUaeLgSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjA9HwfEC77eW83GiBLkA6fGyqdZDzgQxXaEM3LHbymDqSJ32ruwp5vM97ZFutQ3CsLKPYgNiQwmkez7v4JQ5tG",
  "key1": "3SyVgGj2Q4NHW9Uf5iFe81f6bwAaQvf1dMAhjU6YQk1Nj76T1xsU8DzwrXVzbY7cq1yEMCERprWAXemmDWcWrcK2",
  "key2": "4vhUaVdc5X5YLhhtZLesiwSeu1hwUeT9bmuSESfwtHEZE9gUL7R1qyig6KmjPScYSbwR7xQmiBc82WrJwkX9MFmZ",
  "key3": "4v5YzZfvfPFzSTLi8camGQXZQcGHCDWXbVX3fwtjGDC1mFD1CMYuBGRhyx3ZpYqPcN9QC4Zgcx8vhFq2E1A9w3hg",
  "key4": "3X7aA3Ajt2MBGHhF42mcoUbxumg3xnkUfKQ6z6abyNXSdVYZRLcbLQ2cRykSX4sZf28W4pAk1tgoeVLdnXwi4SVp",
  "key5": "5oxErnmVXP14RuRnCMsSWnDGf9Sp7gzTjDvCA3UQUzfbQTYYPVULy8wWepLV4z1eG1zCPRPKGsht52siNd9FTjaA",
  "key6": "Aw4dmizN6NTZS1XLhNHAZYUW6uEspzb9ZMkH1LD74jJdny27DmW4ZjQSaVa3EMkEMk7GTvRSGhcRDVWFeN7J4Li",
  "key7": "2eLNcy7ZPm8E8Lsq4qC9ZbCEsRaoC3ZYAVKZTS6XQSQE5bKYMqUHP47L8CfBpkuMtb6iVBNCEAEYhz3HenKW27rj",
  "key8": "21hLpEj53uNNaQsLZxHovA9My2sueBos53EWFAKXH542GXRAYK3QGrQwX3vLFw2EHrKRYQKYeHDV2SehXaNu4J7N",
  "key9": "2j98iPsoswZVLznXPrvPhrAxXaH1mBRc8xfwMp9JzMmydccDJMxZYTrspvQhQ6tP1zzQJcNZNw2MVdY566MGSuiB",
  "key10": "5TSFWbwrxGCMnMxE3sSN4rZw1Z2MeXQjjjvJ1BBQLy5o1qww2GeTo4utFBopHUfRwDR1vkicHrDDgh6r83okDCKP",
  "key11": "2mVn6gtyEdnbUcVrEHKeTehcs8CwMprsw2uT3AKaZxjsbwFySWwD9pk1BtXpa3ZW8NzrTE8EKpSxxYJkKAkREyBf",
  "key12": "cK1GK1Py8WWmfB51xiXA3UaQWSaQRHpXbBTc9upUneBMSW6q7r7Zxsjqay24TpS81Do2VCEmd5XMmKR7XPSFfLK",
  "key13": "e11iDsfduQ7nt7Bib6Moz3V5QEd5vXUvFJfyabFwxULkqKyy8xnyRmhomVnRoLgZQCsA25LBEsfyShXGKq9qDAt",
  "key14": "3NZdfSGvKMML9CzyUug8J7vi1WkgEabCibh9bZ1HZLDxooyzjkekzF8VUjTgebuiQoHTCn15XuDaZCXrghqC3wWz",
  "key15": "5Js7qk1kB8aYpcqRijoRs21ML6yLCrh3aUyvEypYU4whCoq8y6fVDQpoyitXG2VZ2P6w34a4x2sWREhxiwUbqwL1",
  "key16": "5NXin4VZqZGXzJpEjRunvWsMubGnzF6ozLPGuzkJN4eaSNE3ByTDEFuayFZrrg7GvNiYnfp7Mq3iWqTFnoQDcTHJ",
  "key17": "2mJB9YnZkzrFVbypb4trXc95S2LEfaZrgDRgxeQzXXc54tpLExpZw1XuNwyHn5FA3p81iJJ3NhvcFJEZDnBYdWf",
  "key18": "5ABr3btdorhDN8H4PkJeCzVuQcUATsBLjuaJi81HcnEzAxWRmxFheWTLDpvakRiQ2naBBe2BS7Rx7GqatzMJsCPq",
  "key19": "4fJFH3WL2qE4s48tSibeh4bsdavP4tbPW4XXndTF87tfrP6JhmRpxzHYSpQQ6HNHmmY7KBzJt1qjQbGbLBreMgw8",
  "key20": "5RqgmKjDqYaf43j8J94df12mpY7XSr2qAFjKKve8ot2YwrLQr3gPXyXfVD89w5sAKnPYQEiPL7RLQHKovj623odM",
  "key21": "X5xq7cY1E1XyEPdiWB7wd3Nm1XqbJ8UhcE68zsWDeAR78RzRCTW4jQ5m2wu3JogdExbJR99wAqWdCnJikXDKcWp",
  "key22": "5aqpkYGTHL5Z576uSUa6uh5cJnsSuRhv7diErDWJbKodr7oKzo4vTbMaZm7noQNv8zepcPqd3dzauoe7U8D3sk1W",
  "key23": "h9cNpQTLB2G8R23M52uVGoNQRJJQtGzPTxWu5U3VQXFYVEGFw3hskhZftQGnYshDXHLhqPQyGECbk5EK4xpdkxv",
  "key24": "5fUc2Nfg4siAuCYMBRTaNpb1fp6VpTzEK9oWazkHCzFGo3YvNQMefDcF2YyaQgq5ZqE5mLXsvEuoME2rjYJ1wrBg",
  "key25": "54otyVbFH25aNhTt98TTktQjDHRdJGyxoZ3MN1zthUDVc9W5h2EEPupTSND18GdAjzxFDMW8wj7AGP7zvj58dZb6",
  "key26": "38PM6gHzFvCN7pmQfwPCrBHEG3ZmYP4cjnaUcDjXPnWUb8stm5Vhg7GAS9DQYsJsjjMPfiBrXPEyhMmMrNndG5Yg",
  "key27": "erBsgCSvS5UcpieBm5VVGrdT5U5fXGstuBTwAWVwB2LcUiyfpCQfd5LbjdHfxN4R9q3xvPJBYpwcsvgTV44pmiL",
  "key28": "4DcH9GNuzSL7dZ7QHnrMGdDFvDTwS87MG4bHxfTNfn42YbukmHmTJ2c7y2SLYHMGa7jNRkbw8hFY3k5ZueaCKjyf",
  "key29": "4qH6SgM8PdWUo8Yo7WNSW88NU7vKKejsJP5keLCynLsR4mbi5dZfxH5NN4sWHum4TSFoWirD12TAXnmkhYCTu7mt"
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
