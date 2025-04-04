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
    "3x5k8vb6fGtFt4zzRNgzafJ9kDAihW3Kbp8rmeFGFEFjmJB6VhS62EYsEeKR2f7jxccgs7XQf3X2TzZtWvo4Fh33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGfezeoKroZYmL7qsHkWTKPYZCatpdu8GyNwxYoVygkqiKPUu2zi7za2LA2LWWEfuh9dvY2tdtSkYYy4mcrxAf1",
  "key1": "3p2VJ2T8WZabSNGJNJbcVzSBY5SchQWniQhKdQVAbMsQi5xdTjXHRzZyU2vVBMBAkcHUBtWAW788AYhUALmbd7Zi",
  "key2": "2AoVDXZZSjytVV9Z3yiwJ9pWmHVSg5Pg6GxLrRyVS7TDaf4mnCGnQ63A9Ry1qZJApvQDLnxmJC1sLjhP7Se2HSZD",
  "key3": "4SkuAtyYJhQoq1dsb4m2VooYFihGBNNN3NLr4RVnva4Mfb8yJo1LCpVp4Zg7Cq56uWcSRTPDB8EvQsmetyw7YAjY",
  "key4": "UdLm18RgrPmHh9tfRLbpdMV8wTJqiRzc4Xw2VVwy6M7BAEMKKdrW4oSvj7EovPe76UCqKEQ52pDpkMCJRvjVMGm",
  "key5": "24uPMny6kzDYXEdtauLj2cSNJSZYJzficSVzkRt8pv85JFnAtxDRQ4PvbrUFJg7ixgcWTYmay1nQwYrwhVVpwyMp",
  "key6": "NEK8iGLDon1oxoY7LRBB2CJ4APDGk7kFV7ayezPeQPF5Yun8KEwaTy4F7sR8vyhMhMvQTLkNHejhWVbYUBuouCe",
  "key7": "2KiM2YeNRhLPuSHSibgNiHHebpSrMuREmRP7ELua7u8KFsVhG8qYkAXfvTZRUHDiWzCp1Kj1CqPfg7hC3riZV1pM",
  "key8": "64zNPxp18mYPGtFSFjnNZQD2duVdvCpjwhXrbSnmHieDQj3nqXqYFF5TQPojUAGzVhszbVqtAEGDTEE3PgGJuaA4",
  "key9": "2AXArtCpwg54BucW5iG6Zf3cSTxUrYu68huUXCj92dSFd38zheiY3W4J1Bn6ZfUHj4u6KA3nn28W4y1A335EH768",
  "key10": "57de9uyMpDf8gBYUnTNZf4U8Z2GFWKDfASgCSUSFFH4nkNpEp16Xr4eidALWhzjxsji7k11PjS6nrEvCzD6qi1HG",
  "key11": "3jY7Puvtgqcuua8U98PZVdwEcKFg9uXHHZDTdBcDR9MV1AQgEtjLQpPNaf1HAgTD5ZZPdqyDLWDK6F9F9W9oaCAt",
  "key12": "3qxGDRuP3vVXDxJRDtPQjWuNePDqHUjehPj4YndKTaPz4nEsWwMqzVNZ6sXjzBVnvhTVX4RkJ9ZinvEMFdET2SM3",
  "key13": "csAerk2hoAHFmukSJMnfwJKz5KAi9xs7rYXpkUvrVcuymfJEjUr6sAxiGBGt7qtwei3zK47Av8q28HtU3aTokHD",
  "key14": "5m5pQyMSf7LNoRyWuvv7unTAFMjhdWFNZmfn5RCT9d3fvsGQxGekB8c2kFjZQd8yyiAtCkY8FXjJ8sY761S4mc54",
  "key15": "2ZWejk39E8kPkn7K2v7U3xCCMcuaKLeVrjedDxBtupt13UGYXsi6dEqjRgGe72vuC8KKfMS1KuwgrneLcLSk1oQd",
  "key16": "A7jE3xbbSW1as24hYUcYa1AF8n8AgTUVs2fDaJv1tM1EbHtJUyyMNRL59tMS1EEZMsG18mMeWuDNWVszWs1MSiv",
  "key17": "5asy7xKhf3w2mzYGXvWvQvRrRYUQqbTcMvwFpYNZj2C15GVoTeV6vuSZM8mMxxEd8uAn5jt6UXfzjXeD5Q6tn1VW",
  "key18": "4VQDVzbn7FHS7tE9t4UQixFL7mJxbS8WZ278Hr2eZde3wocbhcJc8XYtLkgbc3BUEbjSbGtotowovfJcgn3L61Ue",
  "key19": "U7rec2h7R6QXHLRmThqpmqXBbkhKkMXHpYaMSD8JEF7e9W8QX2FNADWoPEFRX2JpoWNvLAqp37rtTB5TKipTZHo",
  "key20": "31zZ3FFtXC5fcxZuaHom7WrYP7yM1W4ER88jy88pHCN2hf1u8pAD2ujMzABEUVNtKhp7Pyn86yqiqD2YgLfZAj8G",
  "key21": "AHc1R5Wr1VQdGop1G71Qc5iiSLWN2aQ7j3wTn6KYXApbVizhaQnQSfexiAdLayPrLceTia6HF8ZMx19aQsdhRYT",
  "key22": "63Wvzyzmsucd45mZRgPpJ6zavjYe1U1gp7t8Joc4X16EjBrjXcQ3ZM5ANxAMKsH2KwVPZVHCgEv5kMarG2Ljqw31",
  "key23": "56TQHMdERZwigQx64QzuAEjs8saboyeVdmpwRkbLmotr2J8wDcFu6ijZ5kk86y6rt4jzMNds5YyQfUePJ4i28zYY",
  "key24": "5CNF5wqyyc9N7tgEbFdcA8ccVH7wXf9MM4geSaWZZ3LJANhwmhs4RPqxg2YuH1cn6qM4bBL5RKdUx57FoczyuMhu",
  "key25": "2qSyeEk72QVNoM2SYcgpTn5RFMkd4yLGZFgntAKe1CLCtSQBmLGwzRdiBW2dSB748N6KfkiFmsZKcfo7LjsrFzuo",
  "key26": "41JXENmzcVEJJijmr4Vut4iBue5k9sQmNnMbVd5r2sRasJtVAEF7jN6TAiPweTjSRKRtsgQtsp1tejEMz2f3RJ8S",
  "key27": "rgd2M4wC1y3ZFz5a3GZXnoyjUUJwm7YefMy4AmJE42BWSGYCG8vEiUXgmujetvodqoPX8VHMd1X1BSNu6aDvdWn",
  "key28": "58mS64tj5WiH2oo23bwyozCKt8Nx7hkHFoxLtPqNisfm37ghY7KhBijknrE1Y5Cb8maDCj51vTgJS6gqsr1oW8Yi"
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
