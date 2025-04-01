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
    "3RAG77aevvqkpnXbPJKH1nKiYzfNaenhDVuo6SnuK2S5NjUxFWzN4tndzo6WW8zyhGkHihZpPkRZ7ANptS6dcizd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESdxhamq8f4WwCzhc6NHN2W3paPCi311K1zfsPXSvBbGhnDqbw7uKdXR7wBiizaRiFTRp1erWQ6vppGHXFuhvgr",
  "key1": "2ZQuZfR4AzrhV5MBX2yS33QTMPEjPBe9pBiMZw28fJjEnKn6xHDVC3zx4Kpk7xt3bSm2cnatYkMmtqK9Rqs3K9Xv",
  "key2": "s43hx32m1PCCev3kgFg2UcfxJeT1R1n5i1HXDSHws4hG8uBpyyyh9whyW3TxXZdgH3CcsQeAzgyWKeZDwirtWk2",
  "key3": "VvaDJdRg14qbRW9GhmbFLLZ8fYzLasWTgkL91LSKCnU346GnC7b8isRHHZaYH9c3G1MoTFrKEQ69UppW9AUXQES",
  "key4": "2ciy72Fzqgn1DmA6FZHurQqERxPvMA111UPmDYsdA2juxZLFjpQNsvuV5Qai1K65EjyXbTTUpfHAseMBKk4ja8Nk",
  "key5": "2HFnc1h4cUPaLS2ZN7uGE5NF7ueddhT7A5AEhP5NTF8prEJT64GzFZvjEvo1DZYBcuXB4hn55VT75bsW49MEsLq6",
  "key6": "2NGwweKKJmNge7DngYztwrcAhnRTeRKYg36MjXgjy6SEtsS5cghJgsZfeUx1Rq7m4mf5VLuvdfJZvpy9HZzq6DCr",
  "key7": "5x3QGgVUW2eWbDvh3Ry4AMWaQindv8gUeza6EX7Q6LvRkCmcEWeAv2zRujEWVRbteurnCTmgJHs99P8mHUTXDsbN",
  "key8": "4XSQVnSEJxwLmsQnQ1yEkcyMd2fG7rWtE2N93xSnVruhycu5hESpL8Y146ptxMs7Tu8xP5cuvcEK2TVmMfNn6xHC",
  "key9": "43SHZFUiUMUTi372RAyX4jWZb197S9LNRA7kwMN7yCMd8EjY5QaHcq115A2k6cte8upX2a7pzNuEv2kCQhqDKMzb",
  "key10": "5xKUHKhhD7EqJmN15oLKhSyCXLhyQJTkmNdcCHzVT2xuba87oNDQMZmF5xFPbWBCsVyPY3AG7nmYAi9tPtdyeuVy",
  "key11": "55C4Ryk4i8r3oVGCu18prysBmMUGkrGrRVCHLezNbupgPFrXWD6LHceAwgDtERmJMjbsKECVaQdw6PgDoBxTBVna",
  "key12": "4fV4P7G4KkbNKDhQeCK8TT1kuhDaMgFYCyHdp3zy1BjqDxyqKyMNuYfX5K7h6b3dz2ycnVLCgpgxsgCJn8cuFoqm",
  "key13": "Xn7gF9BK1UbBjrC3oYMWaoWk98vQmxWyApmxM83CiXeYGg6mc1JpKog765etBnUJvwx8QhL7rf7fMT3LhYMLhsm",
  "key14": "5Uc3kdiTq4GTfLf2gLQipn7FBGWvuhkqVfvnVhLc8aAQozUfrwRwMRtNEpZKpiPHSU6U4kxfHzSVdtcrdP1X2Hnm",
  "key15": "5JTmyRnDBQJaQcGgWQfzPEPXpHq5PDpj2EgjT94TreqkDgqFLsxefZmcTLSERmzbNvHokBSJePSkivoSXbvEJvzt",
  "key16": "3ea7nSj966XncPHA262rUEf5fRnadvzWDPsbVv84QgbazkMpoR5Ri41CdRyKRXYNTZgM5oMR7nUpJeMC1UoYXKpy",
  "key17": "33pg2npmy2LyvjBRAFUzjTVJgL2fYvwmGyy8fTo3AwrWha9GBGfCnAh6Cyhk5bB3qer5xTaGhqnQiqm9Fo61PVjc",
  "key18": "5gSFK5EgnazgNGrcTVP4xSrWDHnUcMUb6ZEeZenUgv3g6eUVrJUbq45zdBttB11WhSUs8f5o2vJAMXkmX6jq1cRb",
  "key19": "5GSPuMnAhodPEcpHGKfexeWaheu4JgRsEndc1VmG7gmWNZTmgMRFGi4PBMRyyjm3hwxe3eMFu7DCoDwpMezoiYDG",
  "key20": "5uKHebZAzj1hcvGe8n4QfCyhAYrqGXSRoZyBJhSmcTFjhKxUK5juUwshK8kThnWPYdAoeF4TNAHN37LdKtMLADFk",
  "key21": "54FY2mxDdzvQrNv15mpXzhyr6YTLczDDxCCMUwRe3gY9ubTcXcarSgJseDUXKWnYXsMYwWqangGuBydS2qyp5V9D",
  "key22": "3q4x3UGGp5mK2gzHWg6vW3Q8TG59CSe98PYtcGgMW7bpdSwPP2FGxEZuBpahSkrNbsSFBg54P4BbdjTHxQtKXCpn",
  "key23": "3YtKEpy5SN8AWTQnRTUx7CDwT4S5NbaSnr7xm1BJyZJ3mc3jDRcfWYKqgUTSgwNwq11PvjbYW3E66J5K94Fevvjz",
  "key24": "5S1i5QgsE1C53jjYGFRirfv2BvFNGCtV2x5HYQ3soap8CEHwE7KZNGN7wqLo2FuiBeKNEDqM2AVCtYzpiooSB945",
  "key25": "4imcBGFCWiTrbkNKf3ZptThAFxqR3dpypFeWYSHPnGjw7rSRDwbYz9w2Q7Hu5RkeM35s72FDrj9RcN264dpzV38b",
  "key26": "5LDg2b3xQpSVS37vuF2Eu1dYHwGCW3t4AuMKeScy1YT8o77bdQyLzmBmQXes2b9j5CYVj4j3mbn3AFRRrJvZmSW8"
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
