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
    "2YC9ZsYshiQYqkGZZx2ivqRLohbFxjpid2fufWuwZCo2dL35L19E7nrBvK15oCSMAw3sT8xsSRyfoMYM6WPmkdc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQEovFsqpP1xANiCaqPKa7p92YnsaatQSk6FAzrCuxjGFaghVUSgLFWtHFDPosGkjW2FdLirMVZq87YCvhTn2PB",
  "key1": "5U1dd9UQtuvvhDJo4Q4WjLtdK5jpT366zKAeHXEzVUFLYSAvFHqtycpG7uiNNtmrCpbh6pmEHmnGULA8tZfNM7Qd",
  "key2": "4SMQrAPn4ofN9VW8rWJy7wKYj5i86gcASKRyuh75Stj1LQFnjzyY2FrWHBkeEkJDo3NsYrhvApBDRg78SzPsdgZi",
  "key3": "3PP4JfXvuN8dCU1pR5NEBZ5jvgC2cnQAoqpkXdTxkHwBkgvCJ7P5g5ue7RnbuzUJvwqAcUiUjKYNATSDGTgXi8hy",
  "key4": "38t19JykBQxUcXM1LGcuvy4nDuirbDwt4AU8278iHCKNHs2fVmid4rzBfj83XcdSAA4CPzC3BVoKsexouqBF3bhg",
  "key5": "2Fjvf3XtES5dGcuh4H6Cx7PBVFnWuDLRkmkcvMTj7SMnTLDKGpi5VotrCxcFsbTj5cYouFYd6xzNuogotUaM8auV",
  "key6": "4unDMNNnrxf9LaT5nxUEvMKnWt6WtiXxUmGPCq3pBxgnTfejyZkgcX8khrcKGEYou3aY5SsfQsVSybvoGQvugJ6k",
  "key7": "3EEaCYRo4eVQDfbmeJ4ayeSdJBJVADmu6xYYgq2e6AinHfr2WYs13DSXjekQMaYr7pJpHuffqUvgR91h38ukH2rN",
  "key8": "2PNxybxsg8TbeFuHiLKvJbb73opKivMp5DHtZqRxaSsajxjBkyWpkKL7MY2LaSV4nhRSVH3ZvnZDzHzK92vViPC6",
  "key9": "3pkoaqnGGh8WLrEfsqJkaRg8Cf1ravgC8sHHmj3rknCcCd9QR7bFe99Ufq16dCUJ11cYFQFDmawFTnEMVZUJrShc",
  "key10": "iBqVYZzx37stsTAn26E6hM2Z48zzdjc6c9cMvnRjLzoteJSMFUdYWZYYsNP7SXSNjJK8N5nXMD9sFkrfsv4hYjE",
  "key11": "UtcXvqbBZbUWY1n1xtnBTZGEsYT2oyt12vAfqEqSF2ko5E7Y4fv57sp7yfNupa9KhNRqY6KHHB5rNekhrVdcAqo",
  "key12": "45UV4wRNzfUciG788ngZhFFbRrYsfuhWF8VEJJUFuSWaqaAADa1r5XidcSRkwoBwzLrZUsSYWGd1Xw3YEm9ugpYP",
  "key13": "2PCqJBeTsRpiPAMeT84YLJu5B9KpVQGq46VSUTV4y8fqVBKKqMqxjQtf11pPXw8nQCrHStaE1dvxE4VbQY4StZvd",
  "key14": "645A1bjCGMxnobLCmntYhratb8agK2T76BFG6vCeq4v772GgBBBUNiPYQXzkAqkfe41MZnoq8u1JGBbPCRnM4wi",
  "key15": "2etBkXgNWiXBGGfjn8X4ArjwDZQ9jw6vJXQm4QZP7J5zx8qFGwnLdCUYUq2WGu3L9sHjwcR1GPDSMwVyPUgincu6",
  "key16": "42zQEVrmMeedo83GxFQPEvXoNB979EdBCMBeVW5SMKDZpXv5bCXcjCvPp749aLs1zgmSUMKSUdstUEEzGWz8nUti",
  "key17": "1hJ6vLiQBS9mRE7S5BRroqDBBvxJtGLBvcjznCFFq7vrxhoxpmLdEhvq6fJMGLJP5i9ssdwzrEmqUkydFUh5Qkm",
  "key18": "42UQipzhHMwFKYdpPAH3ikroz9p744v3vv6vVTy9jPmeehsXgqBS5PBHVMw2pGWhKHqVkCEmiZM615et7evJ3BMr",
  "key19": "38znp6DusGQv4WZJRonmeGb43jrQmUy27jqVLMni9rHHyD6k6J8NGmjJUTxBMFtpLDmAdknZjLArkjvUarVzS6ge",
  "key20": "3fapVwYSY2QgLYYEfxs9nY1TYQzkVAFAMiuvFMVZ6DhqzuQ5eSxejUcCnSsQzveUkBSmCCoQHgRFYMDpcmKehC9B",
  "key21": "17JWdi6T1ZUKSfPDKcZ6ePBSvdfVV6yMiEkGt584g6MQhtdZMqKL2JPRpTbNs9AvjDAMTDqXpNr1J4pj9Eejcsw",
  "key22": "659PaLwEbEBJ1xKYoDUwRMqfkhfTXKa8fyKhs3s1YvmtmFYYdfbyALXnEQy6a3eQ6XoWZb9h7rD6qq59sedYj9ef",
  "key23": "3YrEZgVFB4PqqW94wYcaNhDRAc2wsJxMRo6HJdaTLd73FLUBFdq9vF47s63FHeRcDatfBnSKfNgkR3MLVbSsp66X",
  "key24": "5qN8Psz5GgJ7rL12E1KxKBkX5P2bjyxnxRKYdbezcXYbBquvrRpdyF7XKkwmKhkwcwn7uF5pGZ3ZXvS2cRKm3XVx"
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
