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
    "48RK88W34ZQ98QBiJifbmJcTMpv8YoTV7ejm3fDWbHYDHetXvbeG7EaVq4DxWEdyzube8Qi2qdkUrceTHqx57wEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xm4gdTvG8xgic5vmwKhCcXibK8HeUkp5vDi47zoCDxqAZRxVgJvKKzNtAVwTQukZFXUM6RrmzpmkfyaoQC2fsTF",
  "key1": "2mKXRqmpYCbD5HaiU3CHzDToLHmjNGzdfBULxTWsdNYkQccJzeAupeuuDHAshhDoxVDWKessjUcwYAav3jeiYWNP",
  "key2": "ruYPtj4kCc6hxcyvpGyuRpgoUvK7HK9PCRfasLFndg7ahphHNciV1JC5PUQQaff2EcquDaSuWNF1yCzvas596su",
  "key3": "5sXhHdUkgPmFoaZRCUK71ARsBc7xLTKnup5GSsWsXvqBxo3g2ezVWPmVDTXZRsEC9gdcv6iNeXtjcFZBu664CZBg",
  "key4": "3LdLszWAkpXsH2rWo2HnhKyJEb2BKuYy1Q7CEH1uWJ4tKuCQ5dk3QTBBJHAHP3MsiEcNZrCS9pXTXxNUVTDKavyi",
  "key5": "3rMUdGKKmQJo85GMTzV2pVtECBY2yJDimJTW18arh4WGu7TzRzuvBAgFsnPq4YwxgF3mpruLDCf3Vk7CJFcws2Qh",
  "key6": "2qAb3C1oQwtrnFAK9uhjFeGboNeSYtuBYmhvboEQngqhoebHp5zexCXLMFRZutWskrwDpstKeVn6D3YnQZj3HKAe",
  "key7": "4apYGF4LGD7gmSX6w9YGGrUfKSfJjQQ86au1cn9FxPKtQj73mxoPEcPTDBB2bGF2xbFfbe6n8P4bY4uR9gWZguA5",
  "key8": "4Q15ba1DxNM4HSzS4RKP4bDaLKiHLXZ2r7QAGs2voNPFrQLUXfiML16UX69NbEnTbJu3CmUiJ3pFdDneffHwwJDw",
  "key9": "32DxufNecUG6WYa14oWbuFKgeCKSRaVRLEUwrnhqm4zGMjJibuByG1AFN8w4RnEmkGZCr7WtCBdRiPzpqax17FWZ",
  "key10": "614xpBAsgNZfBsKUMaiT7PsYX86xRuDFNqY4KAENoW6AZbGoJMbitRMcogtshoaJ8B9m1dz8Eq61xTjTBggjsE1z",
  "key11": "4RAMny195E4u1691k89j4n6YY438ENyomWzVkgvzDXaDbniNTa9Le6oqcAvtwNHp7Tu7jUaXJxDkzKKhZYqexWYt",
  "key12": "31Ggx5veS86UJ664ZjZEF6sfdVzHBHZdfVHotSAUAPBGRtak5jJGdThh8Rkvn45HAuYc7Vd5Jdcg19Cmp2Tgi42f",
  "key13": "3XdGAkNk3JxQRFtkYyqY7joXqG8xAatTfysDqYcaDQs6S8zcwQQpinAEX4oUP8MGyVTYqvxvVjbJHf28DRjAunXt",
  "key14": "BGszy7UDdYvE43RAehEZMVC1452XcZMJmwnzzsDQzz1xPXWMXNVajpDSzisBfE6jErarJWgFQ5Bo1R6JmFrx2YU",
  "key15": "jnGvmXHWPuFqVPcSpdXfNzzzsFiddVsD8SnGHW34DAsEJcTACxYQfosGfeqUKkirrdsytjEEdD8JnzwXuC4Ev1B",
  "key16": "FTtLDtsVKABUL3JwywWdjFFMVsDyNbHCgeX651pu7wK3hLSPqvcbmUNprPXX5mui3AEs48LboVipiiWuW3SSFuR",
  "key17": "6mtFjxQYmJTpUXuatxNkENQ1uU4vE9orphPUSnFoQJHnWC91TGFKqgUoRz9AERi62BvW3vthumaDinusCLpEAZe",
  "key18": "4uK79Zt9YtLPw1ExzGJt2rUsaaJ5qLDNs6zR1GJHVougDk7dYpA4JouFCbyvZbPLTiT865GrNm6nfEavcwGcik5a",
  "key19": "4QbVgz6BJnZN55oRxz3BVD46CHRQb933XQaphdzzQshhN3fmBKT84rhXLMnHepp1J2oz5MpMKaYdmhzA1DFpYgu1",
  "key20": "38MwBxh1XyiUMnjrHTPU4urinBaW3k2Jz6BecCggqYuaxk8QQCezY3xtnVQHPhUSoEgcZJgSgRPp2iALbSkbEmc9",
  "key21": "4Y5zML6NNYZD3BePPCzKrsbU1A4eSP77rXA6V94tYW4rnhzm1XShnemWcVEd8hJoibv83FqHMXCEfYChuY8R9PWH",
  "key22": "2pZhtRC2GRzxiCsNFtECbqwYgALxLEknHiVM36uEgjMFpyYLVMh3bxeyLKdf7NfAcFwBudyoDZtFA2dA3QX9Y5QD",
  "key23": "2xN1gEci5Ubw9SdLRTpqjSXywzZB3UDeFACVRjR5ykrm1XoP8zMNpa7rEiN16SyX4NoDWyGo2c3bHW2xFGGqP8YQ",
  "key24": "2EhES3bMfEC6N3VP7c3M4CJ9xiNRtmqERWdK3sk6BuUtsgFqH4s8S5rJeGgWi9etzoZuRYFD2sJWTP8M6qGhuiWH",
  "key25": "65Q7mQyE4giSZtQ8SioEjZqgMnHebzV5h5zY7rFN2wJNd6yYZGXJ6eeUHKg5bSaYSE3W7NU8oALZfeHZMxCX7Xxi",
  "key26": "43mUb3GpW43644GfkEwHwtfhwVAtynZmMLYcjc57ZoQaEvEZwoUa6mvwKpGraD1eCWH3gMbEzpbRNiR7JW9X5pnG",
  "key27": "3PiDKjSzkSJD2x9CaPV9NGTvDauAMncrS6a8L73BDzxFFiQRg7mnb8iV1G9krrn9kMuFERS1DqbJbY6seG4HjiZM",
  "key28": "52QquWKkW1Y8WtjDec4LeGyyfvgwLMbZu8Pt73m3PhQyDSS1YJfFs8NHPfyJR9yRo3bCoe2EbKd9dbgKFuY4SoQ4",
  "key29": "3QcsdiG7TzaD6uXpyhZd5sixL2T5smexZcYFymKRonAsKnwQtsok7gZ4gGeWd326BSzbvnMXx8mxdTP7mpzW7ZL5",
  "key30": "5DnAXymTJXEb1rnVuiqMcidtpns9JmM2VNPCaWKYW9619dBttv7GBQDj66VxB6g24uLcUx67i9qJS6HeujY6fWjz",
  "key31": "3QrxF9rCkMpqVhAEPRv1Avt5eRbfwuLQT3eHVnABuKE38FvcCPnfvTksfhAEKuxtjbZjmkcPQ1jrXUTHCsc4Q392",
  "key32": "5oKiGpwVFRS8F1465tVctbhVmWFBdN699q8giw36EjuWyE6uer3yrhGSzgS6sqbd8B3qbtKCKzPgfrDqnXtxhz2A",
  "key33": "5pGCVHt7H9G7Dd6veqdCXZsN91SWVyXbPKZHkU8bWyDaPufGW2KPGzxvG1vK2oXCh4N5jK7CNtXbNQJyYVkJoUFU"
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
