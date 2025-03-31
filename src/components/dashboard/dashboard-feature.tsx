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
    "59oRYj7xMpGY9tyBs7J4LsgMiFGL5ZVErqgPifiaPSfUZZwi4DQ7CCBdsBrkBRvqsZBdodR2JvcU5mEamu4aicJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAEF4mRQak1VvTujJhE7jXU6kCGM7DJCbK3Ry2gPmt5ZgygHPW9af7nZiPLsY154cv3smoWqcc9v6kQohCYKVvG",
  "key1": "4X3beSiHqGfP4essH8GUGat5QyFopoyZFhAktbRLc2znd1ghmtWCjXdLTNnWtDXHpqzppZoZ85VTZvebTYX8Miry",
  "key2": "2t5NvRSdVfT82TEye1YKYLpyFgJ5wRKpzsaPyLa1Zk7hh81eUETRDm7a8M6m69zey2U17Rh5x41A6t1UqhCzhuLa",
  "key3": "KeqroMsuPaAuxCsinfuAXzf9AY3m6kpQefR72ZaznjnQdRWJkUS9UbmsAGVfeo2s1Br688KaAbMj2CjYDdmjyoy",
  "key4": "2GcQWpwWr9tLKCcgjhRwWX2o5xTWno26nVgdujR3fb9vD1DXypFpBPcAT2NN1s2NDVETDKY6yAtWJaPZXVUHE4sn",
  "key5": "3sXniQCvVwTEFwYHtvo9DH1JQgcBfR59w3zYycprBgie59AriMnxao1brj1eKiiXae41u4wqeQhHPZzvogkWUgp9",
  "key6": "44eBzbmLDai2un8QhbkeZJ2E7CtP2KBWabXUEtTWkwAV3a9Dk1hBZU99ozvoVvpbCQQSnKmZz7mv2EFFigfijwRq",
  "key7": "5bwJUxmKt5BLHKyqWwZZXcZjFmg8c2thDCSgWCWXGpWKfh31AhMh57XB7RqrRBAJpc6rqxkPc1wHuNJTDbqJT1Jh",
  "key8": "3oDCKrz2GCVcGBwNkX1dc2ChQhvLrU87Fb31Tt49THeKutoGNvZnjjN9vup7hdCWFupsAWQEhVHpFUmKG1iGPqdq",
  "key9": "4FFR1jjTRLEoMMjeEBLTX7m1ANc4g73Yf27TLipHLoKRFw1MhPiFpgdgfc3uGxic99XdzYrai7vc5QPQ2sS8ALvw",
  "key10": "3G5u4LAFuuRC1TPDfPXCin3zwsa7bXLtG79V6XgWqqJ19hkoyq1Y2JmCF22yQiV2MHqDUzTYRQ5tJAUU8XmoL1gu",
  "key11": "2gNabPkC1mdAiqF11GmmQsKunH6hY9i4r7QeCpusMZ67wxSyqmAf7rVmgY5owL1t8Vq4NLRrmbQs1gNWs8HSGbux",
  "key12": "65pnSwYSiBCZA7KLVoFu5jwsYcLLJ5EGDHLS2ABz7NcZNkh8KhVEx9NyUhUkVht16St88vde7Q6CHEAnsrpFSkgK",
  "key13": "3a2ohsFNXwNVugq64kE4CyPaLYdR64KptBBqWbd5UgBup7HHZkcV2WbrKtcRfCQHUFQCuaMuvMTdc8vv3HKkrjjc",
  "key14": "1Pewwunos4gHqD8GZxsAeG17uwmDbhpxpTfhvQ5xy9FPz6ZNa5iouXAkjsgbEgnxjKRgzch8doeRwpXN6LikDcK",
  "key15": "4ougAvrcaefkeb28k7iA1AJMiKKjtf7cm3CDbyDqkzHKcX1XFpya8HAZL7ABLz2W25EJv3AbXqHG8nEysiqg3Dqi",
  "key16": "56ksi1cdDarhWYH8mqLzAjWxcSsZdWguFgE86fyfZaTtT7Fy71mUfmkg1C3uAqUQX2xbB878JQyGdXxe4edaRFMa",
  "key17": "2pv5gyMuaD4jnTFacRtfB6azUBamrZX6kHBYAkqA8syBVFAwM7bAX57gMnnWjN2LogSa852eV4Zhrpsi4yHT1CCt",
  "key18": "4QRYFLCXF4kaDoaeUp3sdsA8hvcNeq3F1eZLsNkhuRk1AjVbpZW7jynrMFRCEeqBYAJxVMHAthTt7gTuGTzKmBnZ",
  "key19": "xErfarNh2iDGR4JFhYU5WRBJkPKgxZ42mSwTbYXEH9K5N4Q9EJFq4tNVmMBxvkfokEMmnQE7uFu5hEcRfFjW8fv",
  "key20": "dwxNdvBtt7fD9ckVxxg8hfkP4LnSTPR8XwqiR8QEs5TFGo2aFU9CqumwVHvLtYEvc9M779Ckw69pAWoQxheBw6P",
  "key21": "5k6qsfr23AJNnkfcUZLtmN7ADeqmvPd6ttM9U9SCgAQoWB9G3LjupcrUNy2zCF1t4DKPaPVH8o8ydiJ9vXvmixuP",
  "key22": "4MrWNDYgA21M5SahnZwNMtYQoHHrqXknqEu3XjBwJrWDq5yc43VW9hBSzUcYKYAbpZhvzqfCB55Df167QYcBuT6q",
  "key23": "5d74xTSRB8nqQyaouMGpozedwmbUxSXpWDYFPwGGDAWyfmo3XMmjjCwZjDtiY3Pj7e9qBr33JkiqY8pcVLL3PMnH",
  "key24": "5tmoW39nXdSGSFf7w4XQPCaxn76d9Had2Lpw4V2AAM1oemLzquUiib4BpfggVsENTNZtxFeKWuV9q5gKo1n76hsU"
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
