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
    "2DFDHgwBTQ78mv9ziC98xhtMGHJvCQNVMFrYZQxEdHabk3gmrddeQgvsp1ufqnkveiUN1AzRnZAwQ3WhPGFDf9S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxAwfgaKUB8ktBHNyhjxqVP4i9xG5hpVKsQX8hxkBzUmwMyXGWYEikpuCRGvAwTubMH9ymBTtmtVye4GZGbEMeF",
  "key1": "Nt6r8ZabMCvE9oYdqN2C4UFFjKiEX2nEhvgsEEqPE3gStQXUyShCdobZ8Rk7wqzyJCwgYEcBnxwcEJy1yRa3DHp",
  "key2": "4zZMA3Vd5JE4GDbDeYLUe3syNaMJN81pAxWYTFa5EE8LKo7Z89NgABTc4pE869puvfaKbVzPTgNKozSn5f3eTrof",
  "key3": "3pHTQaVgJRzDscFARQUm8v8hs6ACZfykLj5ctKyK3z7XNaRof6KRMY6SS1PXPjNDDDTnVvpeUpXtoLdqn1M1SekW",
  "key4": "zEcGTfhhwmt8UJVsjDN6xf2J38qtVRWchMBRHcYVCawkTH4rdPQeHgGuLnaPjvqe2mv6A1Sx2Cv7cVEQYbubV6U",
  "key5": "5WhcvKY7HEokX8CdLuYR5gVYSz3AftdxUhbfLnpxvD7GDz4RLsrTWrEAUAFNRVUgursVGHp9mEDqv5wZQkKNcS9o",
  "key6": "5qUHCKFUj3o96KmSH86hfxDcqNHSf4rmwzboYbbPTckyKSehEJwo94VowNYZynWN8qraSYwpPGyj1deaf6AbwffT",
  "key7": "NXaunuixAskbefrDedPsKa94s7rawYpkRbVt7Wb1Vv8aUhGzYEDHMGKpQAH45PtpKmCbKZWcQJY4u2izd8yc64A",
  "key8": "4y77XyThyt8ufazgA44SLkuSHYEYos6Au1DXpiD21ZLq8V8XZWrGbYX89UwfvrdLdS2biDPcQocfYWxSaTS4y6Zm",
  "key9": "2gW6Gjp2FFanx8UAwV2tgQZK2Emf7SxDDgKyvKKtjkaKTBEJuJ1K3fViFJQLXfRworUkv5ZVpeMxhnpvybnUNLSh",
  "key10": "4BzuYGTnxe6R4upnoEqwg5J3GxPZtp8vcwNDXLtaB9TqnUq7nNYd81xX5Tdwy26Tkfg7aewzByNQY4DMhzC7gMes",
  "key11": "2tdunv7hAgGDcifzCoCsEDF6jxqquaD4wfLueXjuA3eMsCjJjhNR94UmYNB8D4c9Ksg6GnLH4pR6Lu6ndsPTT6bK",
  "key12": "cDWVqUgwVjeaSJTEWohLuNCYFBpxboXM5YmcdGej7Hm6a4uospHueDseGeqSGR2b8emGyJPmBFG4s5EeJZTvzeV",
  "key13": "54xZQMQr4GRMsjsqKoTsMxRKccPfNtcUEaT5g8SwUzB1ed4hpxTtC29pPAXKLPBYx32a4kCJ2BFuMr33ieaZQjxj",
  "key14": "418dZnUBXHSttLBXSidXNTeCuXSiNLdURRPxzkC9UJENHmpEB3hxrDWThHjRGNNxPebLcPnNMrgyx4LWyAra9F5X",
  "key15": "5EWe8k5mCNvsnKZGmWnupwG9YixYot5LS472Ag7jtVcDGFK5RgxCaaAbwoxFDcnV6wn9QvkT3QQohQoPKfe1pLAH",
  "key16": "44ej6FBvdLjgcxj9vwA8sgqfCRTeTfKD9fi4XiC373bn5r25TVsq4BmeXi91crNWjwB9anrogGejb36BJdX1Zj4V",
  "key17": "53jg8oTfNvRhzpTovwPhWw3hofsPNR1CbwMxrMb9g7MRe27hdKB6biLQgv3y2LGMG3HCeG1oPWobE1WKbdbCrvJP",
  "key18": "Nqaqr7XPQENUATsJGNrZ4EQXY3rKY94SehNwMTntWLLKBkFNyHFq2Rnj3PsYQtJ4MY3FZChjoXjUkUwh3CQyT1h",
  "key19": "2do6i6QU7WhozKrGqw58caxXt3Rtg21AooQTS2JNNTtXXSEabRDqe8DHx39aaieqde1W4joirUCU89umefsoZYbG",
  "key20": "5RuX9XT5VC49YhuVgUPy5yMsRE1A3ms6pQdpS1BbsYp3nXkMnAtWNavWN4vVCeFkocnXE4m4ZeVoMNuHaXZKKJJv",
  "key21": "5yexWVpgxWkziWk3a1t2KF3j5rbMLvhAUv5trhwLpUGcPcnPyFq2tVji8bCvPqrmHfys4xaXUyJYUNZmD7oq4MKQ",
  "key22": "4Siz2aDrZBnGYyPFPZ7z3Wnp462rnktmj7Vs58r1YHeFZLnYFXW23fnsD7xCchzZvRwMsysvVhEaYppK3xLNEtG6",
  "key23": "BkdZR5biiGGTUhi63UD98gVqBjSCrxrnwTdTwKryt8n2Hr34j2W5ieCTziAfE5p4GYLPoxDgBhgtgpBuJ3wojsX",
  "key24": "qUeQ7B14UELeBwXs9KDJuxcf7i6G1CGmug3e2KLm2q6w99BQwJNrtp5ZUEL7jhNT98QF6LMSAAAi4M7Dg7B4vea",
  "key25": "2XFQ4meAGJGBbqrg2V5U6NH5LcKiZGE5kPYJVBHLBCUigs3xwB57MgH2rnEwbmT48qdtLiqQU71VfmLDzuaa8A1z",
  "key26": "kCkuiNbmwh1ddBqKPDH34oQ7ucFnJimQkVVc3NkyWMKKwvVEDPbLuj8aVjuZgJjvJ9THAicZLzAFf3L4oPrVBhH",
  "key27": "EfTCNrcjLdTNjCtUxW1p6uzqQq8N2hiqVzQzaSPzaX78SaXbcFpHB7zrwnUJ3uDNh4bmxe7JT6cLw996dDD8zWo"
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
