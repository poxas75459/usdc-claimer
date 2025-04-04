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
    "2H9CLSksokpnhEz22ucFpGZTT8i67t4uSkdkePErYAQr3PVCbwSTTFsmH2jX6C1Sz8v4WzkTEBeHbCztbd76C7Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1mgUBq5BNEfwh1BcChx6hz4XFTmvggMKSoUqRzR5iPyHWiWif5jmamimNxxBjQ4obY2TuPsZZMA9bboPNiZRrp",
  "key1": "mcxCNLioWsot4DikcrPwydmSrBgn1hBcFGt4PUHV84bTCzVbtCqZQocGEARWquWLLdo9kXoKCgQCGdgb7KSoTFz",
  "key2": "52jqFimYwqzgH4o4zraQhCvGUks5VS4r8vakueznWi2KSkoLiH2iCKFhQg4pSEqXZmxfxVacmXqAYWBY7JSbiwyg",
  "key3": "2ehsxYqkjXM8cGgAJDRHbd58B8pCEvpy4LHQS39sY6jkQqCQmS3yygyG2R6u56iYPVS2XwVJp8vvRKhruxh3WGRg",
  "key4": "3u1hgg36eeHcVEiUhNdpBhFhoWohfdoCckW7Q3EaZR6d15ePbjVkzpKodWH61tMTtV32LGS2LayPUeUEatk77qBN",
  "key5": "2oyJ6bJagTaEm3MQ75uPTqdYN1xiTNbmudgDFt75XLLjxrwUaeRmepprnX4M1V4QTehaUybgyL796QTGUoDgEXC9",
  "key6": "25BM9Q4VLnvFA1Tpn7GY5TPJHUjRB9EYaXfwGQjmwytQTmh7SonTXhd4eMepoAiJjzmNPpT1SERioXuRFJTxTEmR",
  "key7": "5HaRaCqoZERejotpTeEgZEQeS5t3JmYuHrLL6GvGLuYWSEcyGV6vqaDyYhMnhwRzdFfDnuXHdGCihr7u9G3AdWFc",
  "key8": "49hSxN2QcVRYp2kB5YJ2jpa63L2xVucgo3PVwUmJS4EQfquKsTvyjEiZj4VuAW6MQ743eKub3R7NWcKKtTyeQYbt",
  "key9": "2Gqoen9mC5iA3WyUgQomPRDuVtzCnXYrEcytGYb1y69nFtPmKyqNLhRYzMi29d4TYkZsXthaiDJjHJZaXUZXyRi1",
  "key10": "yKx6Vr7P9NzS57pZVYtX5vGVKKpPcBdC5H11oq8bkJeHU7ZiQ9gQAT2EiX6AuKzKFaqbQHWhNsQ6QRj67NuLmJi",
  "key11": "28XGpUkVD1fRTgF8hcaXF38Eh2t1t6RscUeFYxnWEo1XpGokkFEeYjBQGZzuVHKTuTadxufkw3PiSjpJf2exVNhz",
  "key12": "2jicgqycM27Kn44rphFabcxZmyAKXhQSshGc2pjwgS62MDNS1B2zQjnuMYA3dhM67cL5LA7hTRVuv22g9Sroq9C3",
  "key13": "47zt5edVb1U2fnzcBSTsMG7EhYdnvQ13XZMSFd9M1MzKXupC6ZW2QMBNGhnYtKDcE8BGadjEUKWoZDSvdwkwgPoc",
  "key14": "4dn7SigexsRgkNBwfFrdfnUxzMPyRT7UBd33yD8pcU4eR4YcokuW6NMRVLzDXdSL9P73j8arfoyNPdS95TVmBAe8",
  "key15": "2XP5cT3BNerX51fvceZzcBFG3SZo7AtzLgCcs71sFeve8MgwSLNJMr4S2ZAgcsxmQuimnUvPX34zSKR4XDGP2jKS",
  "key16": "2K9KyafRKmKVqzSEttXPCk1tBvhC99j2P5gAZaPZZPMaqDuv5snXpUxav2xy8uH1Tbs2ikNMbFe9UEpR15txbmWd",
  "key17": "h8s4RgyL1aUPQgG51pTA9S5TWrFDDtji2MWBxoxP8qV4DovRuy8a2nEJrjTtPicytBCQg7qUFyPovKod4pF1n2k",
  "key18": "ZoAiWoCQyEtTov7KqRUVqvN9sgDTUvWwsWc3eqhi2poR2sLhu7EQp1xm3eWnM2Tr99ffB4kxq99Y1GauiiBye1K",
  "key19": "CjKxkJwGmQH6BwpxrkovaqaC714YgNbQ1GGfLJoBVzZdKv126RpeXH3mh9MV4ghMYeN6d7QBxaR5HWXbUpNQXgU",
  "key20": "nJ2qieEnggVed1rYsSEqo5TWmd8LZ1hdhfQmjeSAhZdmV1HRdLUP12fjyn8WVeyBXwcNKLXems1JnSR1NhHVxC6",
  "key21": "49FmcwfYqNpia2uqw79u53nBjWUw9HLPegcur3QyLTa7Pbwyw6kRFjwdDWGrVy7taSFmn9BdvNrfyhY9swZDx79x",
  "key22": "UbqHwk4fNimQurJhYnKqHgoyAggmeN1h6EQGLvFyhrYt2nUTPmGVZrdjCjZab3ddLmdWT51DrQJhoNVbUzTu8EU",
  "key23": "4SoaNJ8i1URwmDnSu5uAXUMTwh7PW4i9JAVgXNx68sAYUD76fgtRKxvXy8mQeSnE62epdJNa47kfoQRuCNoNNuS2",
  "key24": "NCckanS4uMChkYBZJDoMu5ZhYnnn548oij2inRTyYGik9yLCPAzReebTwKWEitySSbTiwSdCABMYWqimMGyzEJg",
  "key25": "23ziD8JR3pPjxBVEKbMQFsvAsLPuwxWoYYN78JJFNCpQDphFXpMVEhM79mTna4a4ZnKkVeVKt8Yv6fjUtZinuecf",
  "key26": "3abHXwCCRisUHgXqRVXJ1bC7yovWBifT1ZZNEZ3aNeaQtVws3tK1tR2faDNYUfKHowGryTexcD9FeBzxJAffW6be",
  "key27": "8AB8YuQPEPp4jz6YPR1HtEUR58bSL3yAG9EaCg3f9FyWTKe7J5ehbDkxkxYntjTWgY1DveEpcXEgGhsjGX1t7j7",
  "key28": "3X5TDAWQUxedo5B5Hrqr6TEUutvhpsY7GGKVR5kfj2ULN5yWjYWwUUu9QEcYvL5rPWrJSPPrWJETLdRBaFs3hbs6",
  "key29": "4o3DA9BwbUTJjgo8Gpbba6QrRRG369fExatUcoYekYb794qh4c3nQfjL5BQGu2g1iSHwetvVx2pSMRjJD2M2W7ei",
  "key30": "4qgpb5vsgd1PmbArzdPMPV497FjpJJnZmDNXpyi8x9XKR1K3DnnusSeJ4B81Fyz3gkDf3bDcnKjdGd7mFLpsNFP4"
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
