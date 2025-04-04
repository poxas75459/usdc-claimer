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
    "4pht7J5ZaCPMpaiherxcv6GNLkULkrMhy8MRe3X7qV7BGtVRFfkcFJHGS6PTPiYh4szMbDbDEEbo2gP5icoCy5ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSfdLPJLqjAxiQ4x85p7fve3R4vu2uQATUAP6yprebKSXkMemsxNR1z93jGm9M2ofsiFgoPVz2ThbCwTibovU6d",
  "key1": "2iAzdR5c8i2S4AxqYxEzGhnrkhaAj3EnfXp1A7SB4f9wwCd48f1DRmDCvaJUtre9pgehcX7mVaCt4Ef3ip9nYQbj",
  "key2": "3SQGACCKyHqmb8tuE6UQ3KAEJswhmWRfKdpaudupL2wXkoeFrWXfHnAdpVTEHp8fxGKeivHQnE6iYdb8SpCPcy28",
  "key3": "2X2qTzC7ANsXaCDyJGUfL2fNRy9RDyAKvwe5u6pJomLSBhY5BkxYXgSzPzbp2xNpWtzMv4Ay7VkHqb3yGMMgEKf9",
  "key4": "iSrn8yWXHaw67M1EB9eSR2pzKJQzmyz3QddYZ1URMdcMt1NE5VqjnuYfNeowWbeDfsmT6vYtUcKuKp4zdQoxc1w",
  "key5": "2N7sUmYGFJj2Hkr2U46baKBWQL7JR6w86qBcGoxYUa3C6aAkqzYaVbhyvKY3EM8mv4jWhZge1DV9DGTUodd1S7iY",
  "key6": "2uxcR8i35MfVoyU36Ee3bv3yYFgMPeZq2dBUDV4QHyqikXrZFHTuXuZHLonurYZxXjjqoGje6ScFtaNvGYYeue1g",
  "key7": "21dRXyJu65RoTzDrqEePBEnp4vjP93wAPkGGPB8tArrbZurf5nDJVBhX9pXGUd1wvnAc1ifrCT821xg57crgPjuv",
  "key8": "37iMhyo9AdhHk859YLMTjgNhqRqd6tkYH7VDUuYza4FJDqBMDtqUiN9rgqgtxns3rxdU4wrxYebytm4AMbX581h3",
  "key9": "kwZTBXnbiiW6FpizHKv8DWPDhYskoxLGE2q3KSPygydeeuVhjkVAQS99sPLgJkwWJ7Tx7CDo5QTY14sLu1s8ieC",
  "key10": "66PWsoUj961VNFMXua2EowCAkj2Hp4ih2HGtYYKQfhkqkcmb9nDG8o1XCnwtbBseq7tZioZEcM8szdi8nR44gXMJ",
  "key11": "4C4vb45vJFnx67rgYi9BrptyCCpkbCbqEzT9jyC1XWP3zGzkpRLJq9WowFZQf899khPy925WkpDxyntHghAiMerU",
  "key12": "Btd9kgR2VRYXGZy7qANyCbb2KJSMxc6KN6LCRvaT45RujAfFcquNs7zWbv6fxb9AEd9qE4SvBuW6paoDNJG8ta5",
  "key13": "5RzEAchAhVvdfTvjGEJrDpoQh1yf3gKdDoRCEUjecXiHA8KkLUzBHYDWovmUgT9i8s7BZSq7wyHpjmsjap3A28L9",
  "key14": "nCeb2anQJiZsKrj8wFyfaW5hUMEnutDb8fF5v7ijQAB9Y9qCWtYiWmoBq7HmknGKoigEcWgT26sGRYKTZAgLMrG",
  "key15": "YAXbP2BrGrwEsEiis5VPB6kRXrFYTiJkDYwhDYibie9sDT4N2wLamEPSTPFM8BtKYuiPXvwetaSk8pXbRNCpYmm",
  "key16": "q43fTQAC5QE6MGVw5s9uywPNguCFBSZHAS2Yo6No2R3tZgPSaRMfboy3atvBLYuVy2g9xxhv7avfQT1i6MytRqp",
  "key17": "4iiSvagPM3aQgp445vFCLCt923WpNsgSyszbRfkjTBKemM9hQqnoAKPXoT5N9kGLvDeYprAANh56PUqzfEeJVrpv",
  "key18": "472i7kPcJs5YWiw8XHBGDqrkzQTUJfgVAsYsFHFwz8BU7iwmSUihhtrUNZN3iCdbFx5qFBijCgyUtZx63CyFqz24",
  "key19": "NJxXFTRNhepNSenfCStT2CNztV182FLxsL8vy3xs2tZGqG1NkGjgGAr8z7JmvvXzNVUQuK6FPu4ybsh8j8LpbHf",
  "key20": "3dQoUAL54dCAPMG2i8wgvWXXXryyP3g2vgnfM35bpaW2V8Fdf3PFhPpezWX8doQiaSjRUfQ5KXqK2hsFv9WkfCkr",
  "key21": "45pEovPE67gpyHvFFd6trx1Cqq3YNoJfW1oU7xBkhhPj5p3cS4u1KVjWzAAVPd7gqdDsxkfMWGuGRPdG9pRmHr6M",
  "key22": "36ztf2UCwrCVoMHGMHraPPAMgSajKr2NRFzCjLCDpEjUVaFZ8Z4d5pj6PzCfDTwmnG9UBDu5Hnafhz6awXA2HaaS",
  "key23": "36YYuozoeGsY74A5vn9vGHeFUtjfbRFqrsxTAz1rS1o7E452rixPfVn9fQPgYxVHrrFzS9WTD9UZeNkaz72Tz9bw",
  "key24": "3tJPWmX2DptBMdMLXf1cBepQLzzsQGkKE4QBE1biR6Tzt9dvHPek9JQysF9nDCicEt1J5oPWDVZCFRW7gqZbqHMD",
  "key25": "35uXwQCdVRE1BjR1DXy28fCA2ENKHconarw3MTih68ekLQBYfMiGnVFnp7MYjhXibR6f5MJfhpHU9DZWLspbxba4",
  "key26": "5o5MnCpYn2C1UGopHv3RWyXSvwe2sCtWq97iaXrEwNkao6WPgCGFKrThmj6Uf64SsD8kNut8sJArugmXABBpGqXR",
  "key27": "gR369h4B7kQi8X8KheTJmWyTTZzUKUN36JobtzEP2kJ7A9b5c3X6LrvUutDbKBKyzx1M1XMWAHPKGUDWJduHJW4"
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
