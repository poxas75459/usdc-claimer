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
    "pBcCZsFKhaaSXDASerAQvwiX5rATSio3ePmPiPNDGAMBPSdphW8MPifq1m6tv8sDTCMTZo6iXbD1QC7PBmaHFsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zh7rfF6tfhMY8jDxKuBRwDmf63ci12DtxnLWBkxf1xuxc15dxqEnc69ZmD4wdpyfYdW8oKRjFRLhkcV6UTHygJH",
  "key1": "33KDdEo6kFtU6kaRNvL9zKRCahFbaidxUX6VUe2xcdv2tGMxAYGxVFKYZmJuLzfdHyY2FNdsDVHT93g1S3hx2uQg",
  "key2": "39ZXZSXtYZEMPVpeYt5a2zHdnLTivBy4VoGtHCJ9RTQU3SwEq2tJgT5RGncvkQDAL5bRBE2GCHRrcbvfmupa5PV",
  "key3": "ktVm47gvniVvpTbw3uxUu2PVdmgbohrVbfrco4DUzFPCsWEYeFzpeYRQpMNidXyF5tjAwwWobHCZHkbTtZH2o2V",
  "key4": "5y5z3cGjaUT58NwQgxBtR5Li1EVoj7xdMowYGQot1HQQSeAhVBjjRJDmxCe8a7zCyRgiqv8HCYZgngoBM2tghZBF",
  "key5": "A4UaNaGUT7iBD3CK64xiUMoUWPniXpbwzo1qtN7iwvJiGhmBTXES5W6W2fBViz96WwFiHCNpjmLiMwYcCi8odPr",
  "key6": "T1cSsHvhRpcdCi29PPLWdfUZrXm3Gr7camVmDjQKBMFRhE27jNXuKNbuLxRkqWBbPGdAUWdBUDNwgUxCSxgTtzY",
  "key7": "NnUZzwYXVJR1VPYEAPqGuucE9uHEmnWiiDie99XEWjcii3gmMMpUfPyFdSxJxgkvGQKXC8VFyzXKGZHAPwYGSwh",
  "key8": "i7oA9xhjqAsedU9cHr34MjrsXvuMsYTLXsXK2C2HkvutbeQm4UU2dzwAVQDTbrYxUrtFFLmJAKZGbuzFftEkHbG",
  "key9": "2HFghcPXFuXhxrxun6ywVBSpfT9jhbr3QQSZZnZ7zPMpJ6vB8QQKth2AhFzeqKX3NSSqafH3CeZKmip5pYEdiBdp",
  "key10": "4LA99LZsKupPmT4AZSSuF6adcXZuZy87z7UeWzegcrZP3evHkmEYQM4JbiPtCGkwCS5P57jNsmZWpvQyb8CHp4Ni",
  "key11": "2NZfcXTUxDXvZo97xBXPgbrJUUamZ3ZKGuyi36dVS4mwKkCbNXRpaHCwRCS7QaD1iqe5fAf6dCpSdqFRwWA2S9CN",
  "key12": "3iBS8a8fZu8tyiTvjhcQ7VTygpHsi35HkLCGUPiwyc4uF2xEQaEXPcECXFnwkbwQA38EcPDfQpTthWYqeDuCZSof",
  "key13": "3AjLTymofFioCfF5E9AJzc7uyeZait4gSYG7T7umvtvJK3ZSi61DjCNgjzpiWY6oMLXAcDoonbUHjs2qfNbj14Ra",
  "key14": "43wZ1mvtv5vWvC4Ync2HFpHBoRst7y2sJikyip8ZH24a1KZSyZGQLmeaVvcrX9JJH84uLjUGiuW6DjJXXkxgXZrr",
  "key15": "GdtstSaLvWAxUqBUv1FjSmP1yjY2SKQwGay3T5H9GUor8newKtEUqfWTTNWMjrJnzLaTQkRTzQSNXU1V8Afq2WS",
  "key16": "3wdEX6YbSKe2kR3ScqnHUNEY99hoVDqRX37faPsnLSSSH8MGNEAGBnUJc6nnrRUhQc4JAyJsinoebJMZaHoCYmTm",
  "key17": "3XxTDL9aPQo4sXNDDMa6xQBnsnceFNTD6FD4EMRrp8NmEMAetodWzMRwTtF4dR5eeBqQRTGaELCf3pUfWY3ARkFF",
  "key18": "3MfitxHrDHd8vo9vEzg8ZwjCGkZ8nznxfCFGzfRqCjK2x5W2EPKba17nntffx1a65gMGPjouTmWCJX1K6PmxYeMK",
  "key19": "4q7JPuCF5gpcmvNuyUBieqrNK51kymiz6FmSgxcTz6MtsRFm7o5qBFGzS1tvE8VhPrk9vLRqMp5mgKbHedt4w38C",
  "key20": "39BRcVDRdo8sm8A4NBBA6P19oVJToJyUsq9XexQHn8duR9GeKYomw1aJXgUUt7CwTMtTbXiAH7X6MLZdKG6gNzGY",
  "key21": "2zaqEH2Vfzor5imXE1wVZTfqq5LbNvW9ofCFgeqzWWJw6PcaeH5Q5hk2eZ9ka6QZmdY41tJCAB7bts9msYUF1MfM",
  "key22": "4yRzuJr9AQLsv3k3DZHYyyCSgBoczR9CmvkhF4eu1juQetkwoTz9yYV6nbUuwz5UMnf5g6GeP85fR9Wt2bZz8cQv",
  "key23": "FPhwJx17oi4Dr1Xq8e2yLPX8T2W7NXXDoFxE9skAyEv6Uu79eHp6HGvrC7Mn74fEfBYdDjzioSQfjhwLX5K886s",
  "key24": "4cpQKgpbASUknkbLiyJ1Q5surupuADth4irKniWVAcXMe9Cr7CTBpjTpbu88k9heyFyUpJQak15rb9efVdVdDgv",
  "key25": "1DXvvgjrXPFrKESKNk4g3zQ7h6R6qCH8ERTHpk1zdLzSK1m37bnkfa6LpbB5McMUejZxQYGSr45ssoau9ejTteh",
  "key26": "46mFBEY259p8toh48akxiNJc9tqUTvwwxvKyp2pgVoq8qZFU5torEWu93NDM8E262fmHRi3RycuPTK31z4WCvrWx"
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
