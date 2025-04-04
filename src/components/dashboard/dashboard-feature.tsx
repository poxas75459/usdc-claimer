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
    "uyqJ4k6FNZVYU3XCXNbiP8rSMtHSiMn7DjS78tXsM4cHMQtRvZnCDHNRfdirRpTqbbGLG6ia5jA7gKnEdmnup1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqMezMtJETGLQty146BdHB1boYCu6BzhvXZjesUBJukPVe3XZPpjjZMmUZygJDf89GG3hUtzyLF4Tdsp6ubvyJb",
  "key1": "2ea5LZCEwJoiH5DKgtNAh4yB1mohHribdoyZoU5QvQwbhxC3BUvWre5jnHqta1XJ6285XFyd4a29jfMis13gTR5R",
  "key2": "Asa5HQhKGNwJxiKwKDP8KwZzpmrzzWHb16sWfeeBd5xC3rABhMz9ReSWvqDV35WdMc959R2HA6ksZWkyMJHVv6s",
  "key3": "2a29zC18WKxWuwt2VFDAv8vSS8KKxaZt9TEBEqyETy1EKKo5Yi7NAXoPQ2Tmn7B3s5CvfuCBFHPwbp3FKaKuQqw8",
  "key4": "2BSPhCWtdTw6DVTr9acH3S44ejLsqy32SwfXGizzPAKEpDRrsaqntmqsJDg5PuqGtJHNPSCizy2hzbLAhJHF9Q7Q",
  "key5": "SSsrrx4ovzCFQLFQr44qq8pufZHfz2An35vXnocBXV3QioTg7mQP8Cr2HTwoHsVy8CfVcFDMFkXuVatMfCPF12d",
  "key6": "3tm5AbRCtXLnhZF5RENPbvf65Y3BCtmEmRnVYWutTXF9PuN6UwcKrUJGiwj8z2s2hVxcZprMwBQfudaG3yTo2j67",
  "key7": "53tsACTYMbhutc9Nk86WB3x2xJV6VaSrkubVBffEj2WQGTmgU4rGSUiUXhbnu1ND5XSDqPk2ZLQ343MxVCbanuuh",
  "key8": "2tv9zL8QWZUfPPtGHZDwGVt6AH5UvUFTtDUaqUK5UC2e4V7bVzMuhWWC6826sPXUhojGpArMRo99A8z2DnVNVbHk",
  "key9": "3nbmYQBRB3aUWfzYc5Tq3o8yUAB73Uj27fYXBNDx3t2Ky8Geu2GQUn2cB4cSGMexEqfzjHGjT34qkfb5ujyxDbkh",
  "key10": "3T57gJUVSHX8hK9bmTEEvtXozt8LsQbDANa2D31x7Jym5upauruPmfxAmVcNMw9Nu3SLg9CVyr5rHfV4nzrGcKA2",
  "key11": "2ZgnWdNQFUhStsHeZenJmi5mX1vSPW6ZV83eP4D7f2RmppzoAQjARzaoAJUqmS6LJRw5Y1o32WpWHErhRfWm8k2F",
  "key12": "dnUvahyAmM4afNsNYNVeS6M3rwyo2AaAV9g7gnb9bWVuESSSpdvjyMSLKreWF66HDYcf46CWh799tGMtAMaQ3aT",
  "key13": "2PFLyJYKb7A9i2vtA2ju4YZP6PWWWsYiBH1HvrTp8PUWTxnE4sQFwHVK5k6WAAJKUonJecRPibFPq4nfvyH5WQwe",
  "key14": "27gHjwbzDv9WYNgpRZQ2an2BDrTBsgPoWN7QZGDbQUXsBFYe2y5WkcaweSBA8xVe2gc8bFi9yfLA3JBMdaJ5GZTR",
  "key15": "5o1qEKkGiVcT8HPyKBcs1QWBfu6uiWs4XWUSMttq1dmTfAGL39DZgBrEFiBKgcupcagwUE52pADmHk5xKKovDRtW",
  "key16": "prBb4XaG4woa6vmJ3VUh8KJTBZq6gvzfNjkFG9echfjBaDn3REqH3QYrjwC9TKi3cfyiYdim8GR4teDFEtZaJPB",
  "key17": "2zZcQ3vLGAB5ybKFdW9K898WdfMepHGBHfx7psGEvSXUuFJyHGtcE7YkoyKTp6g4sn58qjJfKwTQFpCzAyEvcQBw",
  "key18": "ajR95FnvLW69Dhs4t1GK8Mb8pGXBmDwT5huYxYBuPgPreR6wh4x4oTugq2rSXYyEbJBfsGdttC5ZEiK2Yw36uq6",
  "key19": "3gyj1YqG99R9hrJEiBFoCSEr4ekctRfH9eCyvbK985FaXkQUSGKvEhoX53ejrE2FqxQsSLBkizZM3sXFG7ANrZSQ",
  "key20": "2Xi3nQY3QZHwxeHiaa4pyefUCtQ32hG6x8RePfQucNtqXirP3wj2TVs2aC7Lrz6kmLz7CzT22p4XPd9bcsNBoPvz",
  "key21": "MECUh9dp3KzCK3wKKDY8jTpB6cnfG7JjMr5knGYTS6Q72pHpanePgckn1tLDaXWzMMyAKMbVpqKkyuVN1NQAMTT",
  "key22": "Cceu2smnQnwWKnvtadoCXzpG7ASYvqcshbQk3MdVRybNMk958r7v9ih7cKXo8EJsyJEqxGNKfgiQRZg8425X4JY",
  "key23": "55twsPGMU4iQyNegrGWsW4Vp73pwnrJTcZJJ3UmCRe92bDXPx3WzDwihxtUzj8Se32Y63tnEL6HAbD36LaLyRD6f",
  "key24": "451uVs5KvpNJuQ1DesNBYeke3e3imzTU6K7MZRKRtNH96mzMZ8KnFFBtcvosaZTzUK2s9CnFfKncmeh1x3LDuSuW",
  "key25": "x9iGgVXSZFz9xX4C7CS3W5BraP2QwVZgp6S7Y3LUfFu57A3D3LPTMpwZh5w2wUVTaYGLJeaAN6JeBeMt6iEqiwL",
  "key26": "4XKNk71ThwbaVpF3VjXWbonBJxfhmghD2435zLA4kvt5Zomuj6Bpp7AmAGTQZs8RQ2AbA7pbK7VD579gVfgbocp9",
  "key27": "4WUJGRapsuvZN3e7JEZcefhreD7rfrE4VY5hNYYwmdLcr59448nsYF9GZ6oTHUQAAogdc2pAjmfHHRrQHTxKAGQT",
  "key28": "5voPuf8yNAHpctR3kiJVLF2ZTRfsNPiVJExoniSg1h9eopd1AaCMsJcZFzQ8bYeooekszMuyK1cMRiJbTJKdC4pQ",
  "key29": "64aoEfqXZGpb1C2ZZ4gbArMxVtATaT3DHd6f3q1DzuRwaQZvRt3qrUpnDAaF2tanSVkxppXNHHUmtJkh2TVCyu76"
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
