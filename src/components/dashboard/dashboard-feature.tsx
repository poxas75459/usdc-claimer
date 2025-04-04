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
    "25Axq3UxntAdwyCPFoNys36o55nuFKfe3NLH4X1uMdLbsAejWv4f13SavrYjeRiVxJuHQvyyaGvJHH3N5TM9hDbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jduiv851vqNKQWFVCAz8pqiKRzAo2HcA4rbzjgHaJRoQUWBDMrQkqQhcqsCP3ozroTrZtUDtnVkPoPBJN1QqBWH",
  "key1": "4Aj71mdTHwFapm7ChNwgXxmSPEDqebW8oT5Rmvt6XFGmLnzkr5LpbDPDwW2W8oG7kgQs7tLbZzjsUTGQnY8szifH",
  "key2": "4AYkYTBrs9Esn3ooQmSmN6UZii1XLnkTT9CT51yF4CKrVXzrRuJBWyo1a9364RpyMoTbxtLgCUxLeBJ4xC5QD35P",
  "key3": "5DmCjpCv78k2ZHE3eVG1jUZyXR3mAaank1o2j168ag41Sc6ypsAUV8ZpajUSyPMba7ACuDGshYgh1FR1MkdoXtNx",
  "key4": "2RcEsQhs5mURPrySE8AeDC7ExNhJMdU26CU4F1aQmhriRge3pe9raLsH4qLKkgWmGuMwyzXunCpYvg71oarPME7D",
  "key5": "5F2VGPvgoXcw6txAADZwMvfzR9LsEUcEvrce2hLmwZKMnWWvusrSK5sXqqCMz3Wm9NFxmavEcLb1ccXRPGvEL24y",
  "key6": "4xWUVs8RPLbgjZWixAfQCWXzee33m3jpDkPjqGXeBNSHLSP6YaR92PU5k9Kvew7BXDeL4KfqNe3MJVV77nQjEru1",
  "key7": "3E7yrbm48mqMKQhqEqVHqnFr5AzARtce29pzEieGnsfQDAaYHmRfBd2Nh294eNKpgvvnbaxCT5tKGnGfCLaPdc7X",
  "key8": "4CPxCiH93et3knkik3vxfxQTuBvht697iUM5eSnF5QTWucqxCY1sbrkdh3f8b31GqhHEiCuGvMZ2eQtotj3yTuP2",
  "key9": "2RwdyR2mDtvPeQYSAabuRCCa6KzjHdWT1gviQ3SJwCXpjvVbdZQzJLxVu88rHAQ1P4sYoUESUznAX1opQ6Y4thS",
  "key10": "1qWNKY3g4i9dGF7dnTegnDPGAkvEDN8PoQVgYukDdNBV6whUfNZJDMoqWCX24oqAt88nhDug1R83SV23jYmVRLH",
  "key11": "5DeLTLsAHn6qoMq2oPLtkFWjjQjWLed4x2GD1suigJZXwdtH4HLzn8x71Wae9gzfgxRBcTwRoMRpn7VMg3zrq524",
  "key12": "4MPd3S3tZpNzah84tp59XBYhEmhdPjjn54VVbSuhoqR5aqHFJPs9gkc72S1tCL5zymLt4KKmM8fR1BmPHEyCCGWh",
  "key13": "4Txvpe1nkwGQA7VZ1HXuXDv6GQjSnvh8PEz8RduRuicyjBviGwpoPyG4JLjAbDwJjhRPqpmYFFt2iYNGpAgwC3C4",
  "key14": "2hwFxicmZsYA9G8G4t7iYESXN5cQgcGdmc5p3Gs9EBYhUAADbX4BGJDKPm44auoDgLQCoyqgbiYHemb5NE3SFGiw",
  "key15": "2RcTtwL7G3biqc7oCpnvJ8BjXTwRnKthatyVtn11Rb6CFF5eifTAaKQKPG4xk4yH1pzzx4dyabNsBFxBYcHUVBuk",
  "key16": "59SdK1otkdiBQaG7XTBz4xUg4jC1UcxzuoCQqNJGSF5bNSJtehnECLBLSjdF7sHfsPfTQB1UYVq6yGVxuLrF5kcD",
  "key17": "2Rz73bN1oWnvU4uLCGykPoGGkJ2Ydffwb4Wd1uYb1thH6hSj4e2fLBEtFcD8nBt1JFojqUGdroibHAydp2JRJ9do",
  "key18": "3mK4SbAD6HKgvxeKVQgirqwDNnhd1h9kD8HK1TRuCSauTeu92oGqcHAyw4Xd91PBUYUwLdjCap1721Mczx52NPCf",
  "key19": "Mu2x99jZwyjQaghfpf4P28SzTBHW91y2suMWfm8i37P4guLF49R9BQvbUQkZemdWXZkgAKap1QZfjzNR8p4XSx8",
  "key20": "CmFUAhxpCzYS8nQahsCuCE7MkdSFVx8Mwqo8gfz5GCJXM5hBi7CVbFsHfBR95wCbn9FgSww9tyoBSGExob3Zf7p",
  "key21": "hUfKjSz3dykvdWu8depi31H3C4WnfaP3qqJp2wKtAzsyXM2Y2NUUxBA5NsPMqLv8WnnYHED5CfbVEXs5uzHoYeU",
  "key22": "LbbJmo5WMsxWyyEC74uvzk5gmkpqUV1GMQBxbFnpBd6mL7qDxAtHCzvGeHPpo4H8P3R6rRMFmmUEymk3qBppk1S",
  "key23": "3XZ9zwh4frLiwhe8jPoACSsQcqJGpbrAi5Z2WighGaueZMNQTJFk7aEWvAcuSzssqFAv744Z1MdQp9BhRikKkMgK",
  "key24": "5imJqHqxCgmSehzvma8WDHBRbWikcUGjaZxmSTZdre1MKxkDJ5MEWHytPGmwxhBCvN4pLUM6fvCuTnXyBexvHeJ",
  "key25": "3s3Ejzf82HN91DJKZu3D1gtWCrpuQDobg5Jp3LchfaGZCDfT6uwbY2hNcqra4oSDGbRUyjK4Wx6s7sbh8DT2ryW9",
  "key26": "2bmYfjHjJyJCMmPNm4c5AwUWDH89jcHHFcJPxCGBzqKHiL4pJxWV9Sbv2FHQJdVVKbHUX9ndnbjP17wjpANmz8Mi"
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
