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
    "gP9YRAcGGstou8G91piKmbjwQ4uhPj9T2xuGEVdoNCS4ncXnmeRVVrLAemHhq93CTu3aJ4bNzzPNfJbMoGkvPX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLAWL5bpd6hBiVnWo7r5vafVRfFLndYDpsFAbht9X2K3eoFP7iYJ83kTrh34pFXhKDksEozSiVFRq93LxzHWuie",
  "key1": "4KXiPQT7HGDqH4HRAqngUcg6o9nfruYDoWsDHG67S4DcpqGS4ENwa81ft1vLkKLFFNe2X2TchdnGEuh5Vc3m5JAR",
  "key2": "3GxvmxQENkSaY4gQRqidKAB9KR72vCALcxZgQakZCEdz5n4G4zDqLrbFdCaJZMHDoB3SuWBoR2vG8wikWd74pQ7Z",
  "key3": "3BqsJMzVqLqLadFc74RPxpitPNFUdUnTXu2ThZb14n3YqE1FV1hhmUrGbn9iZhrzL6kuHm9KRmWdX2ZCHjQZshr2",
  "key4": "2r8uGPdEf3bU6DnfQsgm3fU67mLVMVHJoGA9NW3FFVQcfX9kAX9de17xDpW4NByd44QXT98Qc8oWn9eXrGMFQT9D",
  "key5": "4hFQVcU3aDqfvtZ3Na8Tm4YuYB3p8cNM7LqiFfu38SheLiti9knsBgAv7mWPXpiQDM8sDabb78TYE4a9QkHXi3Ne",
  "key6": "4XRTSRCdxEw4cGxy5mQCqsanx6KAGPWEdzqANQqY7zT1DaWA2YzKCVn7fN8ZUYRax2M7fndgQ3jFz4HeK5Q2ipr9",
  "key7": "4yAdX5h7E4FVpBJt4AufZM96ghHE4FvNYRpSdjd7zFNgVxQrmHdpk53ngcKPqPEnhRAR1cwQRHkk7CMGurEjRni4",
  "key8": "5sLRcfpzyDsTMzX9hQ1yVKMiFKj6e2PNn8cVVTJXvWpjcgZY1mN8GzwLEyiwaLagHEnTqEg7PF2Q1thXUY1ZrESB",
  "key9": "486D1afz4jgpP2iAr6Q644kb7fC5a9GEduzXG8b8ch73Wg79TEMHk38ayEhGAvDpxMXDCXGoyqcbAjfmkp2iJiMs",
  "key10": "3XVMxico4qbTyiixPRgjYoaNi8pSQSm5TPnKRebgK8UmYT8caPZGA3AXbjuwe1xPhRfKvWvjNZNw7QZsrG8CFWq1",
  "key11": "wC9J7rxEbkpi7FNHAJmAXr7GNyHZczQS1eJe5vYrL2UPYoCK5bmVV5bRvtxCParzp9t5EHiwTvgjCDsJGKanNky",
  "key12": "4HpQakZyJUWqddWQgk64toiG65JKNLyzkGSUhWM2Tm66J3VzxtUkocY7uZNK8Re4XzR7EtbHLXcX18BcmYWMJhbo",
  "key13": "417ZZj4VmtCaW8uEJeHNCMqNrdyrWZc6M9Z7TURrBT54rWP3kBVLiMYPSEPFYBbwGxG8ow5x3BBtmoLAMh42H3kr",
  "key14": "iSQdfte3jX1NHLvxLMgAG2M3dE1S29nJn7whaVFJhNNn7wxefYwg69QEt6Ype8AtWbNEHWpuByNX1E2p2YKy38Z",
  "key15": "5ZvvALSzD8mGPDRKHjdxN2rx5nnhWLuCmDqDWCsMQNgpmdxfBjFERhv4u1EiBMWbJTgYtrLkfYmRLgv4kxRSazVw",
  "key16": "5geCLb2th7CKDcrB9sJH9UKqE6oG5Z9AsGdzryY972b2Qx8tmaMTi6Pg2cpCHfPtXbw76LNaLWk8CFR1D7d6rqcg",
  "key17": "61GBW4sKFvbZrTs4Y7RZsmuoGohaSPS8vkYv6MovuAf3oSnJh8h9pQbyzCBR6MH78GoVN8epNCCBJwgc7sALHwLJ",
  "key18": "3fYC49BUAZqMPfeWZ8LRZ5GRiekBq8edmn5uCX8Xkm2piozwPtJBCh7bZvvvPsRVoJbXJ7bAuBqq5w2hCA9n8285",
  "key19": "2nJJcL1dLSEY2Fa5RGUBWGiEtKdabafVzQb8gWh74VCTxXZW81XwdG1jAF1rhyBFtuR3oqQR8r6QfmTTEkRH26Y",
  "key20": "5V33LamkH3EFoqfgG2vxbzNHL9ejFTzXbeoX8hozwmqEmSke3Xt1VvjqWFQBcKqRRGGGfg133ziU357bYrE2iRZU",
  "key21": "2ju29ZsCfqARHAx6rHsxd35GZXxcNHykHhQBZVGssv67t8xjzjiYJN58AChBBvTku28cLsR47n4AYZjYhNt65AUP",
  "key22": "2o2mGUR85aybhKFRFH4vbmui9xcMdq6SZ4aRpCLMywweEmxRkMDKvmqkPYq7tK3S9XkMqHNe53NmWASDekVs6Ped",
  "key23": "3Mf86mLESGbt8kdXRaBNk2X2PMwyEaRYb6a2xWu1q4fnVbm7sThn7pFNFzR8wqsTrUnhgM1EqruPvqFjpdJJkHfp",
  "key24": "64Capcr8kk1GutjWu41dWJioZ1dmkUE2mt3Rnbbm2qRSUJifEViJK4Avt9fw5oV3chyt4Y4KkyUvyzpqKR5eVxTz",
  "key25": "qq8Y6W4rAnq25HmQv1GN5tQtKPGKZXbvdijboJvsDb6NZpJ7RtXjPrkddccY7x2dk5En3ieCQPzCpqVX6XRmkGs",
  "key26": "3WLpJn8HLDSh9RDBNva4DHqJjNWMijboHAjuA7ZLa5FdsDDuN1L6JGUmKbwUo2N1FFG9RoMPiycknPgTcW4fJhWJ",
  "key27": "5FZs376m6Ju5P4TvzJ2xeYKZq78u3tJSXpAPYcwYJFx3sJ7JnYGewVHuK1ReV5hWWjnpsEpXPXJWfx97fwYfMYq5"
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
