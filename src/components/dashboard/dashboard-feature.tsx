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
    "2FFr25dKbBXkLSV3cKWjKeeEC5X2mmq7CcpHzbinasDBoZJWAR3bLV5WUsEhzWGpqrmBP9yzW7WJ467ceKLVzb2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqjiQ9jxyrk5pVYb33iKBSaghpknq2Ur9uQ6DpLNeVemhQH8t5375ZVcXTemjs97MsrnPLHC13TNdnftHs2Cid",
  "key1": "5M7o7zssryjUQ8LvseS5Fwu3yzqnt8uW52Pg2DgBRpkSfjN74akZVfY9sMse2YRLHDHNN25ZVZcNczg7hz2t2bST",
  "key2": "2Xhi4c92mfL31n2j5RNEB1MqLaKZTNEhmDFncmEP43TLKcEoDu2ipHwBrmmUCRy3owbGdwN5tmhYrrWeXq4xSvtw",
  "key3": "31hPT9HW8LX8FjcwrutPEooUVtzWfy9HDduCK2Rcqw9stjADFqFGVaBGG8v9x7oULxKqUHsAKPmBac3TKeoqkVwW",
  "key4": "3EPQ4BVUQqPyoQRUbC2EEgJnvpdAESEDjBHEd8SgXuLaGZgkTiv2zxC7TNDhMEaYnVWtXPvdyFNS2AEKFs9tkRe6",
  "key5": "5ywUWFTWvixgV6RKmQRq18tuYZcY17WTgTCed2Nt2EkibNMTh6k2zSh5eathxbheHTs6VonqXAXDTPtP7cEyvqh4",
  "key6": "2JTqtdYHpHA32HcBQahWs8mkKLWhRDkX3UNAudd7RJBrLsjVJHLLTomGHroqhMEV7eDW4ZzFsYJNwcFaRAo8LeRX",
  "key7": "Ts3JsniVQLbNpqbPUStv17n2ieiEPADZUT7eiZNKfQwx6YDKH7htDSYzooWaLh4qxDyiGuyDdrGeLEkN1CALiEX",
  "key8": "3ixzM73H87M8rRHfncsgQnS8oLETxYVNcBweVmGkNMSambF2YGi6YDXXsh6Z5Zi5KYVQTnsJyv5EBm8JMab8H8yC",
  "key9": "5zanUR2s9nzp8PidYzj2JghYdPu2AAWV5UBKn336qQQWjny8kii2Sf8urbDL6DXnL8gET1jimDSnPa9jDw7hGbjy",
  "key10": "59V6mzr4iJSSAJ14qNVLtT6YmVv9QK9ydkYVzLtQqsyDD7CNkJLb7BzJLzJQ11Dv5dDM7b4fXsSWMcjW9bq79ynJ",
  "key11": "26BfCSyaxh4YuZYk8StonzZPrhF3FguxYir8aMmG9NQKEk2JcKDDwswVjTrPrLZwMyUHyfXHsodkUBSk1MFdSz3s",
  "key12": "3cyevSw73riQHzH1dz5EpCA7MSJvm7bdUqa3jvg1HBy32cVFseS19ujFCBZWgrw82MMYwaxFQG5DeHKkooRhzWUT",
  "key13": "q9ESkJnGj538vSrRnHuVajvkDUEvWQriX9WwSFUPSYEsY4cfP3Uo6JuRMuQ3aiQU8QVbConnKQyjutULCjgFHiP",
  "key14": "4L1PrR69yNzQFWHkuNfSorkE32LmNm5gB3A225d2DBEpvmMDA31hZvmaWS1aW54Pw62AKRuABwgsPv7A4VhXtLi",
  "key15": "5YJN31gH5xwAFK4KxqfnTPa4ijiXR62pwdVqbp9faWx33hRbfwfs8Dk3qxjAWetGbtHvrdQkoMycqN4kvySb8ELR",
  "key16": "2uXrfN4dohuBzchuUKMaVSoMTKhJqinr11k4uhAbrKnpDBRoDDyVk7igRP5Eemg6a8Q7A59ugTNxT3hya8YMssFm",
  "key17": "3Z6ZZ4DNz885jXA249u26jQhVeVDm456ZJ4kdFjf5RFfcQehg3Nj8DchrWg9T1DJ4pdR1eNUn8UjcSQsBsBAQsEC",
  "key18": "3ahXcRFa2xDBx5fHFJNMxQga9WnK47DoZHZs4fV1LmmyQbur3wxP7xXE2PmZEuzNMkjguyQFv1sLepptF4fEZurN",
  "key19": "3ck1Y1eFAx4q8aqJgupqFbsLvDbqSKNqdRoEHNjwt34mkrjCBt1q9LSM332NcY8HNCJ4Vgxgj2hnk2NovwzRFmx3",
  "key20": "2VB3s4LfsveKbdAX5s44UbQavDW17GxwmhHTrw5pehXsoyagkZF5trJvVnxsqaW94unCxJesuRHi8tjWTgu4TNyy",
  "key21": "2BnSMbuiTnemRU9ZJw1Zjb4semEV9P5QSKSGgGA8r2GQ6DBvdm2HQq3BUV362VAHU8Jcomkae75SefNKBHtKA5Mm",
  "key22": "5PrdbL4ytmLTTmMyUauEn8bqadQjszofSkkZjL3a7JiRN7BqmnmeasjwxZako867UnrLLYgvHnDPx9FfZ6P932az",
  "key23": "28VAAuxuDjHYVfUBHptZCgD69dG53s7Jzwku5j8bGXjfsyBdGEP5vBRSRTNkne4EtuNeGEgFPYatuTvXdzBgHinN",
  "key24": "5GVHD6BM3CLSJaF335NGBQT8UKu34ZhAVuiSYQ6qANviJiAVy5iE2GL3d19ESfat5UcAVzsRWsPFCm3fSRuXsmK4"
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
