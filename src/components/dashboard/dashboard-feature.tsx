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
    "51mXwEhjHRfYniAjTDA2rNrZb6Z4s9xE3gGbai4Rn4uvGkohArzHkaCqCjKsWVFvjS1WFnvTKcfjJ5eXAyjzELom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7JMn8WBQcmTxLxrwLsSrp5Tg4F22PNV7xetqTJmxH9QngvePD48w6XJMW7GUpVJTWadEf4ESUASenH9i7BYMUt",
  "key1": "39mPiGfco3krn5d2G4pspm8fwVGFUfVrpmZxHiNus7y9A9U7SkiYHhcpP8tF8p2tbYsccLnK3EL95BMv1pMtspCX",
  "key2": "3o5ARjRdSUBSP71HQvcmKqUcTM3mNfL4r1KyffcfA2bc1mg9ddsAuSBGmf2xgff1atijsF5VXqFovgezbohsFFvr",
  "key3": "57P3M3WixUCdixe6tGA6Ly18p21hrBjBumDWs93dmWF17NgNFdnUYPVy98QwTDNMpk7abX18by71HEKkVzTULtxJ",
  "key4": "R3aJ929asyWbL4sfXM6zAoYewQU3uqFhRwayzJC43U8BPt5kcM2MAWBGoyvDeZCgBVUbPWW4reoeUgFss9wjRxd",
  "key5": "QKC1bGS8JqFzQb7aRfnU876BUrC2euvDwYgHLnBzA2UnWcxuj8c2k9HgbbZHHMBiNGw58Y6uWgh2WkEDVAESNdg",
  "key6": "Ht1UsQ8MWgR1Kf4WQEdB5L5HedgUP8rNfXkEFsrLEvLY4FZrPXh93Ya3doygGk71DMX6nemsPi7i2Hqvf4RZ8LE",
  "key7": "2eLpL7BdEWQJ2ShQ36vq7Q7NGgeSE8uVxJR81AEgYfZocTzULrGfQeAuKhD39aCdUZRmpmdUsBHtMnsKWHQXXw1m",
  "key8": "XuiR1xvt58HJ2CUf8T23rHnadjdVqrR8XkeCHq7uhVGYrqdUwW8AjERkicUvmjtnjdGzfgpyTqT6YHCePm35TUM",
  "key9": "4xXE9Jjg5oJH9WHciNDMwvNWC7VZaWofXfusTFHeeBXarCvYffnkkM7txowK5mrR8yUK3DgbW7cqUHkeJBv3nZ8X",
  "key10": "32LEwquVYf5dWAJSL9obx5iGi7zFUTBcgMcC9qKvDzMU8pznbMfR8vhDi8wiVVUqE3rYsjdV4T69KAvZDixeEQ2Z",
  "key11": "4p7Dn9R2EKzbZFPEbxcSCGUub89FXzn9A4dQLQAtqstJYTWV54QXoJCyUBLrz7dz3L6Y1rdpzYUhtCWbiPkK6vvp",
  "key12": "4z4H1NDPAmURdB8K3op875YVLKx7repVivynGvjNGqsTryH3ivsqJbNN5jAgh5ECVpEX7dezNnxCZmN5yP7Psbgk",
  "key13": "3Aw3ons9v4pmXhbj9yQu7pnCHjPppBhVLqa2FNjxPeDh8gb46iVhYsAwxQ7e9DyyNZ341ttPaaSfXXsBkCx9sDVe",
  "key14": "nA846r1VF83MBw5FCiPqtFao8mf5uYKMsxgtwQLTUfA41nMovwAcH1jWPknsUnYC1dhTVYBFvMhAHAh7YC3ad5w",
  "key15": "61riLSrR6Lq75SAVK7y1qMMdtzX8iG5kzWMevfad6gx1xLGseAn1CyUq5c17w43J5ze8RFCsFWAAeW1TLXETDSTn",
  "key16": "3eCr5FwZhThpwfWFygWaAMxjbUHmAri37SikG4dRRHWhD5TT7FJ6TqFsvMrftcv2idh1LTz7QBJws78Z7kvJrvdf",
  "key17": "2P63p6sd3AVvF6Ybnj3NxSxohM15zs5iEouMMcL1AfKLjFCxWpGKC6rMex6P4yacQXbtC8HdGZN2dqPfe2xv2EXs",
  "key18": "2XgFoeKcguscyJKEZ7TAGhgKjCNf1yApzxniMHhbPDx1XRpDvsA8pDyGe2t8TezEvfLT3cY5wtCmqjtEfebsGqca",
  "key19": "4XzA6iw6mz4Ha9cuLWBjvXg8bXT5rYpFPf1yS8etCjjfccVPpq4edwtfpM8Q8TMxmbt2qZgfcdDfzXYeeMdPMS1N",
  "key20": "4gSLyKwcHncFxJ857P7CtLHyye54TypQLyF2ghCqHCjuuBENV7RwZmHyYzNQJccadwwsQhQGEFhrAjMCKQ57d6SM",
  "key21": "iXzVJysRKd7KMR98bACpPqBPeNwCUW5FpJSDKf547Vip3tCnw4fseeFcAAJg6koGcHfQWSye6QKJWC8kF1fZVin",
  "key22": "4cMSuL12zhLyV58xzhpa9UcTa8b2hXdoeJXmUy5azowZXZxywUueHyim7RQV1YW8WhFKG9awVthrtcDFD6Uqja51",
  "key23": "2cQ1agAHzXPY3GiJjXLGqdVit5fgnwp7WPww6NiXyReS2E4QyuisrYccLwdzpL5iTgMrKxErCUziiiF2XECfLrJo",
  "key24": "2AMEMmh8ZgNbD5L3Dbzpk8nLvV4TYN2jRw9aE7dKmoC4PqzaeU8ExYRof2HNGrbnbAykzZivD6i1hvjEB5r7oaSh"
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
