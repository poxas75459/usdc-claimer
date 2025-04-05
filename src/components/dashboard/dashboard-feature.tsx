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
    "4Lh6CotamJeam3DGKUd9hNSiW2odbqzq46bzkrAfetmvKptAqHiQdxpUVA9THApR4n3CxAh2tt9SJJZ12nMJ2P1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rSkrXC5U6Yw877iPxsYgncHcahxcqz8GeRxdR3PRz3xVzraKkVrm3DHC67Mx4GAqAvP3sYjursHrJsF1kmozqMv",
  "key1": "45GfCmuZbvTtA49oqNXTTuzeXzsRnYd1yntEffNNMmWiJ4MouT4Bcipo2VbeemaMNBSpEpp1BwGEhxDwE3epLQpb",
  "key2": "5GK7SrRJbB5hc1a5418h9qEWTopy3m6oxY9pKi6k6ECC1dT2W36JTCdtH3ksAXXLiQYKLcuPfVEsHp3Wg5wi7HV5",
  "key3": "jL9xniSkHUtMBFK8pCVhdrmN2zeaY3BjQvVPRqHon2aAdTorFsBFFqmqHfZs3wL1FTj6kbeuKgwh9ZRytpwVigN",
  "key4": "3uRmNasKET2HtcmPUpNMtQt4V1mqL6r94Mxw1zGHagz4aaWW6Hn4Q3czvTFPvyiNoeCNcbm4wTZcC5hYyRhHrS5o",
  "key5": "2PieqYtvxNztqE496c43ZWrrZymEG8UES4CVJnccPEouA3NsJbaGjvrPWtCx17feBHogJ6pUxd8j41MbrACLR57s",
  "key6": "4ifYDFM1B9xaNQaz8P484h8hkcNRBEzWa3qpLoFXrcaFAJwbmm61U8tpbAy3BZaztYUc5TcXNzUbgBW6iiFWNiVr",
  "key7": "1aA5ur8gFZ9StdEgL5TxduiqSAD36p6T5kQFEqE23RrMyi36KbHgF2yz4UVUrzqRHKGTHzuJAA8Kym8XaLm5DyD",
  "key8": "5tCmwz7b4S8uYDjcJDm1C2edFkpuhA7dRM5ZkeYfkeY3fWzQQ9Gu9xRjaUzBZpoLuzcM383zmQ8ZCcuHWw7YHLQb",
  "key9": "h5HAfpKEaqZWiJHpTFfRuXGFMMHyNbsfqqUx4mFc3artpGeogLfdqwU7aCTpqqiBeYtm6LnMu5hGthWh69AXpvG",
  "key10": "5hfVSkfpKco6oPmwwo74t9qYnNc1UE9fBVCuWnQg6UyCFi9be1iPaeSDCkpaoWcwhebhC9sqzA1wPRRkBZWyZtGJ",
  "key11": "3hA9cLmaMxcNidtzjFSWocx2eiX9TQ5LCmcqhkiyvSdRQAPmYz28fNev1FqVn1dQPLTFgKg7vXuiQHcboSnQmNtd",
  "key12": "4SZUUJ7B29w7mTFxPshfxDg6R21U8cUssGQyYkz9fmN37ZAhBgMgZboRxCmfKDzWtCSndUYoojrQP4vPsBdFg7gM",
  "key13": "3NxcD6UYjPHUCmx4Nm8CHLt5Wa9NqMigbikJwKCnobkTZJmYu6YrkxoeVTgF1dMUemEaCqjqzMeqy3RvJzxBvjQQ",
  "key14": "5tSXk8MVFSzn34px61oa5buyvxsuDaG6edDWKKrTxsKkBnhe1BQ93azoQckhhtag8o4SGyw4nQdKitEB4gKCVXTZ",
  "key15": "3ES9DFsB2h1Z6Bvgu37382PmWaGnsVzQ3qZ18f4FtgGNHV2gzwwYPzWDPLLpLzUhwUvMwy8Fhb6FU7sycZ8hLCKN",
  "key16": "3fx3rcWuWmPDETZsFmasquLT4XgijHEACgXUUTsLzccoX9iZPYYBJMrzH5xCUoLzX5FLFDPXw589GY8NxNU3tJsy",
  "key17": "4Sxxh3F5KujAnxn22ZmriY4rWcPLthan8uZvhV8C3u2PU2r4XTZpDB6Z2yvH7EcMZuun73ymnPCKx4f2NUnQW59v",
  "key18": "2GMvFG6r1CAAmWTFpCAtrimR4CRQxDBrdZ9WNT3LFHPSyUdE61pipTWjaqUw5gg6YNU3d47EaqzqcGc6jgJ1esrA",
  "key19": "5SuoLHfCoxJi3CLnQzpt2ByrFaadHMkJjN89tHVe8HSQLHhXRraAsafcy18wRdLuGcD9SdhswKDevqd1gTxHJmUp",
  "key20": "vanR8U1ZLQDkvdpsDYhKvLg9XYiFnUrwYGfgK2MrCECCbU6fVZF1vZqAC5vPh3EDkaEGpkgGWbpRaRCn4EJEf18",
  "key21": "5EKR6PqAXJdgFXeCxcN2C9eSDyqL3CHYd7MCDSXcTe5dnzEaUp6GMvniaeVLYAw9JqASb2mR6wVE7Jnc1MfT5aVW",
  "key22": "5UG48qv7oCftmcNcCMV7xCQZTVV4c683JFE5HqAhsm5DnFbirBckQ2KHLduNFxj9L87fssfNoeJSpZa9JDoUkw1U",
  "key23": "982hcCUVc68JVrafd2ZFMvEQyFGcJd5HPq6dURTkAQWZnXXdH2haqDKxib9kXFCk8aSSL3ffLhb7coNKVCTe5fF",
  "key24": "22NREakzbH3vjkoy6CHp2c715hSzRWzjQwNobjToh6tHpKgWXoBmuwB6HFQXAS465fodqftkbMpniTaw6T6XjaMd",
  "key25": "2Cn9C7sk1Yu7Qbz1RCurE58r68MHwHc14B6g6yW5GERWW2TWyCb5Jjd2wUv7Xu1ErgHtMyM75Rpo6Vj64gRhRtP",
  "key26": "2TTjPza896GpHazqoeufXNscrXADxtog1qj6QLs4U6hHny26RUgWnj831vRB1JiLwcuFawKb55oUyZkHMfYN6pD5",
  "key27": "24G1v8pjQiN7o1SuS5kcDcKig7Gh3ua9kJhTAPsWXn1DCdaojY9TBmDzhPK274RH2bwHxr96nWrJULaNFPFtXLU8",
  "key28": "5iYQ3LzqZjqq35255i3Tw4ZKj96JUjSKsrFzQPnDdGGxGWRATEDhHTLdLWYv14xHhQFJshefCoU5qnHEe6vrUdHD",
  "key29": "4TGdFdRU6FAeZYmARTWHitEnWmByNHuC57DBmgVuTAQPeJmSitgdf4sL86zZQFtrccatbVGomLsE8rpvCo93nfoa"
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
