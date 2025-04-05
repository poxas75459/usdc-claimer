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
    "5eRptUZpUDCgd2w1fPWagCNuB7E3EeLduTFfo8FJVeECpwgHXvnzCg255bmJRXyc3HvVdjHNwBZfdytaTuu4q2SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qHTxMG5bKb3qZPGPmVEnTtoChn1LAVKYfmUd6RKVeD7cB343RFnxU1oxntUukc3ChN53X3hzDbNvzzzsYFRHbqq",
  "key1": "4fqBa3FaxLv5Z7rPkmy1CQcHurvRA3v3iEPB1TusxBvKgXkatANHWzWs2QLjpzm46aPVBnVNiehsuFPB68xJhBU3",
  "key2": "7PADsCDoMLFW81pF1fHeccT8hX3VjN9WFzs4rWWbeeBwuc7NjJyNkfpXEp77k6NtfqMFHsJNYQN2Nz6bbfCG2AE",
  "key3": "5SNSF6MqenrCsx21LQRPsNwwBkyd3XnXqraBFi7B5WhMDs34YwbBZGncUzJ4fJQxq17mKgyKfzhXTKrrXcnuh2X",
  "key4": "2pNPadqCTCmeSNCJuzzuazBcn3go9pLCRCKeX21PUiH27P63N76uaS4gy6x9ZM8PUpHijEr1beVoLHgp9Gwog8QS",
  "key5": "V1NAWgBMm5KVsXBzYESKNMJHvnQPsHnPGMEktc3BWXujVjvXbykg4GazAEd7UXeurPd86a9adG1b7Uc5A2BWK7u",
  "key6": "3yPcJ8Lq1x4rMFfEPvNjv1JapVoNbxfxkZQAvW4UshJd27dte3xLSHy7BbvBvY6qkfbw3hByKVwmVysgnP7qzHCX",
  "key7": "54KnPR9JDS8jhvjuwgpsikdXwyubFgHjq3ZnwdJRSkmB7YWUxLrRgEyC9UWBnaTs6p2VxWqfw5MD7o6JzFzd7qfm",
  "key8": "Xh9VxxWaZQb2JmxnnG36THSoEcBnizar6YbSW6VzZTWfPkHHM5t6bvpg326Baz3y6EG36m87KL8BrtVXgwdb9Cs",
  "key9": "2UhGuq2Z4U4mQsaRzbsSFR5Bjp8MqDNEHSstsuzmX7taRhffrqb74ErRa1cgV2qetkyVAnzYWVmeoXrHF9z44LWf",
  "key10": "2LM7Rnz7UtE3W782g1h55xJNq9EcQBmsvKfnurWW5T5gKxGJ5Lij7JDG6ktw9zdLBfaLXeSThHYu6zPVWoTf32FT",
  "key11": "4VhZxftEFYUgqgoSc6mqt95vC6X4SjpjgDYunZxiBG8ViZ8v7V78VaMvco2emBcZvhGZ4F6afHq6CeC86ou2s9i",
  "key12": "3vPiTRwwNAPHAwmRHgrDXcCtyGuAPZQJHAFze9JaDTbqA1g1xEd9ZnHBGZmjtJtPXM7DUyQfmJttxxQgDKwYmP38",
  "key13": "2B2Wf5vRkwZKakiDL5UseMs9Ex5mvCeMXbPnJ2KbE1udAE3SMepJKoLS4K4VnU98D5KEhrNUT4QzxV9T7YDqw8MB",
  "key14": "597K9iBi15cFgAJHkF3itNrfRZ5kgyB2evKmDskJLDEEe3h5BqqsHC6FX84axTo9piwkCtBCtKsDAKCkswtwiJpr",
  "key15": "4umhX2ZxLpQvnjWNsbNVho6oFCui29yeK133qRKiysE2UVU5SbPvRrMY499FgKVQVpr3uk3YqE6ATJaA55JpadP3",
  "key16": "6cpi5KGBoZfggYwDcVuVyovsa3LRkNh84cFEzYCyYnPadPF2fTwJBwB5BDmbresvHxCRDed4z9oraP1Z5xWHSWF",
  "key17": "42QoDXWEjCQXx76AFNwezRHr5idrcLiaqAnFSWpzJRW8SajzBLGXV1MyoRATkboxfieV4Bq8Xst2LRMY5pm2FLdn",
  "key18": "2uAbEsiWPs3LTEckght7ozKKphVaaBwz2bc4VQi4UgLoGrjtpRdfQp7T8KCF8zm1KpJwVbdTDG82T2T9W5pyT5hH",
  "key19": "5i3kpXKAtBLcBHXUJnu614jJPCKAqGq9H7XUTmEjn2v6c4rKoFtuGBYZmD6iD4QQR9aKvHtPG6rs2P9PJ1G89jKR",
  "key20": "5659u6WsJFZ1id3axyN33vnZfEUko5FiqCAQ4zqD7CfEpV99EagdemRV3Kpwaon1j8qBqT21o3NBDFCEAwmfiW2C",
  "key21": "5fyaaoKrJ11kT8GN5bcr4Ciz5j8G4Dy2hPBt6xpWfgjfZtvaX8f8gdSBiXaudBNPANiYuRF4DpbBSDRp97EbFcop",
  "key22": "33sx1grNUDFDsHiXmKBNJ9QYJSa2ymZm1RJ9fqmnBihRNS4HnBnjNUfq24V6Y58vhvU2m2qyoYC1gR7SX1SGqCx1",
  "key23": "33s5fL1LfZvbXBH5Q6BPCBF3r85deXJ5Q8P61JuwGwBYj8tmYWeNcWg6aFztdqQyWZgxLwxrkQL9SFMuhSDDLnQy",
  "key24": "36wHJLTgNs2PD7JQ8v4f7buz3N2jC1WEDfgr7VwYbf2K5JUDyESDfP2czktY1NTJ9A1J2fZeiXNzCC5Fxf9zRKau",
  "key25": "2yRrZoSCFrwnJuZMEQGPoLJeXnuQyy98jUb1hy2bee1CGacCdHr1M4KgkkQMUXdU9kDR48Ri3DgsK61bFqXbenTD",
  "key26": "4wcVkAqNTzhEBX7FWpFKmhuZpRusBd1Sp8xHFA73CY2vhoNgBaUH9M5QaLi37G5FXMHrXXds3nN3ayjKdXekpC58",
  "key27": "47HT1Yf64JffDjMpMgP7Rbte6oxw7JTFBsBtpT7wx8o8e5qpKczW6NUTaXHeuxGy7qe3Z4eDvyG1Rp9xokWtqjpG",
  "key28": "3peveaBjvTa6MQE6HWnzpTfcrhRRajrD8Dpiz5Dbyb78hu59sotQGFHgqUunVhhTpVtUBUSXBYUMvEs7B3TccSdu"
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
