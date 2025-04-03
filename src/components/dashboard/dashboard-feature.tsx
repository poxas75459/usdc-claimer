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
    "64bTBxFoet1RCiDNt9fGW8VfnoTH7sS9p3VcMhBCpf6MyAfCBSVXwMWN2udQuspHxGSGVAHBD55ffa91ayWAxoT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZZWeDWFjfyBvtXuadwHywX5VeNhgMgsqdH7NPEJkaczgviwE2hrmh6R1sLdPEAwsGJmpdqf8Jda6FHAPhJehgG",
  "key1": "3Ssx557GqnASJHBWzdp5R26xzgn76uFKnqnQ96ZbMBgv7MJxf1MCthdyECnCovMoqeNtpShnCwS9GAFDdQUTDiPL",
  "key2": "LiR9GDSGxzNuUFxsypoFGEvYiugkCReKbG4kTrDMKx1KSbgRU5Lg9Lh74sRs3L18h7CSNbQM4U7qFaonxRRf8u2",
  "key3": "nceWuARDaD89HDBvPgouKPyG7EtwiUfK4s8B9KrRP7TYpPUmtk6uQ3nJSDD9ex6R8pR14nCj3cvZ9G5DuqFAFBe",
  "key4": "4na7h4dGipJaDocw7tYwPxuCAXmH2chnruNsXXLWQwdAznkJR44aui38cAs7NLCXnBZVQjAjmCPJSarroqbj8XVj",
  "key5": "3ZVL1foVzqUHyNYwJHo7JJVGjvXfkoUm7iRDiuNT6qZMqWAKuUGKfpMD3bBGn2MXaNEd2hp5rVZQqUGncZaVxKQg",
  "key6": "5dxDGub9KHyrC1AFNcUup78Km7PG4mJsBx6bFYTYga9aFZ3q2gMmRRW8WyNLAuCmWaxZqJqHe1cBgS6wnqRWXAJY",
  "key7": "54XoykofLCwvK9pSVJuxKhHcEEjZE3etJH3HGQH71bKGrb6KMiWcu26QtCJivPhymqEZmeqt7EQrogv3bGazFq4d",
  "key8": "4iYSjcqQxj13HjeaudXRiYhNDn8mqCBne3yC6rbKcsbq3dRyLAQ7ZnVyLaWd6GH4LBeuk9zcTUjzhYFzACtt59ta",
  "key9": "2ztPCumKxZc8xPbaWoo3twCsUeXzhNBW2gAAmXdiWYUm4T7FGRZEgW4jUkgriacG1oMsjv73MJVr8VoyeyCjqRuQ",
  "key10": "3Gq9mkJ58JHHLYZR6QvF8yf1T1WTzNYkSkk3YgHmRTjYNU6YyVfsDdbRcMUnBpcn2r8ob58uoUUCmhGT7FuWHMn1",
  "key11": "3RUKbWQaFPmDHQco7LLDoDWGnvozmoSRTjBjM89SfKWV1G5t4fRcYdXoD9LCtXuij83bVRQcs8xz3L7GWXMZxzsL",
  "key12": "2PUn3kbs8BjsUYCUsR7fhNtEpixkLfks2tYqD2nze7gqvCBDJU8dUPu1Xba26cChbVeeqSWpCEpvns39GV3Q9uzP",
  "key13": "4thbaCviVy3YrzP58dDeuqiFR737GnwmpHFZVrGyW8vtD5JZzt8TuyRm7YGjHZopQr9C58BZrfxe1oQQhArypCPJ",
  "key14": "3oogak6gkWMPzombKEE5sC87TmD1yKedHKApJemHyx5qPsneeDNi1h3NJMq8Q2oL3udGLFV1LLbRvr78ehmxQFgA",
  "key15": "Q6DSTUBbZugA5ELCYAheLHm2ffC7P7V5AhKPJj3shdL8exjG1NDdyq4x7kWUiABUs3YXrdAwuDkudZy9kN2hwck",
  "key16": "4qcKcpXW6w4EUG8AZb2PFXZ8qqPoXJZJarCrbJUTmpncFZc6MEN9eXe9vrFshA9gqBEMDP61woNCEc9k3TuUGRzv",
  "key17": "3CnssePzVVpRoMJ8yoC2e4AkyM867sWfiutdWJtEx5wLNDC7zziX8WM7gbyyu6xfdHWVoXQSE13Tis3ASug6KZtp",
  "key18": "2L54CRezLRfLeVkwuMXw1mdWmuyi7cBFj8vMbYGfg2ddMUf4JuyB3pjsERD5Nyx9zVVpUsxB1zWYZHhvfx4Y6nyx",
  "key19": "3NAEzYbTsYtmjYuGUHjRtB57a9MwcEFh7rHWaeaV5bx635aQeBRCj5gdzFfi764ARAAZi5ZfJvcJXxNsABMfjEBW",
  "key20": "4eEUXcKUTFMPeK6dt4hiSdFZstu4DmE9XxdQRcQ7rkho3ZsK5MTv1jHq3c6oys7J4RdXhv3J3DNb63AFix5Sw7My",
  "key21": "39iSeaVig2wCEngB5p2JXq9c7Nj63hTYJnNYmZm4U4WrkrWPNhPCFejZoGZQvnaWQhTEkR4aGKcFm9QmxVytYiYt",
  "key22": "4enm8Msmp8kahKHm71nrNvG9ypJqFyEf99W6xcSQyQ8xChFghzNy28sQuNNVHj624VYDEsfbWekZta7bQ2xG1ACy",
  "key23": "sDgkBeULKjVUKZJQEfjncE3ZfCvwEiXcx3uXuNYeTmgGS1xfJpkcpE5ZwezkN5SuhYM8DYncf8BJZCVzpRrJyJD",
  "key24": "5dZiHWTKwGkufgwQCT8znFRkWvfXFtuiikjHUufGoSyLQY6KDMRkkBJggGU9nJKduVuFkbVhWUTRxxoymxWL8L1r",
  "key25": "2twV7nQSy25zyHQjUbK6B5RZ9VLjgoBX5vMnQXErhsx7NAKn9gYXDKCFpXwrUnNq7hhCR5XV3AQtQAjqyj2YVUtj",
  "key26": "3stctMziWD4oF9sfdcm33uVC6HxAEr8MDjHY2a5j8VJidU57sjd8mCrtTVKxjtkSfkdxL4q3vfD3tzu4QePZhmgU",
  "key27": "5qqCtGAuS5ne3MUpTTe8i86LsSU4Bt8qWfnr8sjqkkjGSGQzjLvr2hLvKtVddqNhYsFaYWh1uY8oJSy1uziN16Gg",
  "key28": "4BYViAeR3PkELub4RD5Bbm6JScWA519yR4hovrMp47yE5ZzL5JSP21eDvNZFfzAxa7tSLaQgjVRDBV2LRWgfJaSh",
  "key29": "4HRXz3aquELfXsxKkYuBL6Bs2FDnpMS5o9JHyL8sBCKD6VddS2x4mzLLBXyE73N319iHniqt5GMHA8G6X7uyLHee",
  "key30": "2GmkkCmCBWsbor7XXs2huJXUatKF7LYLKVStz98Wywx9RG3p66pdrB2o6sUbHZsTL6eMS5PPaXwVyfdppyj96DQu",
  "key31": "2462a4VisVFDPzW38rt4S7SVd63JoW1rUWySFtzu3ExBQmdkAPJb4nQERX78tdqz6LKbpizprPdG3o1R6J9b9fZQ",
  "key32": "5fLrf7Lmb4vkLzCrvHyWyWX18coRVRL7bC4YxZSsyQmvSkBAXNxYK39dbq39Lk3Pd9NVPjspctWfmVZLz1nynitn",
  "key33": "2LjqBiUJBE4sUiurbSFTCW1oYTD9JnBYrDpV6FiBKdgRagvSdgS5T6AdTy3x3gXiK71rPgCFPHzitsWbZgcpwBhv",
  "key34": "3wYXRgeknBVhe3umYFfa6Bfzxjtkcu75AJLBygqP93EZmq6EVhEvSaxAy7kyAJJaei81EhvDxQmQCFHNanaqVHPf",
  "key35": "39U6igcJMjRD8upjyn1o1HEM6LW8c734sdwEdWm2HN5eqgQCQk7hMeqtVtVWypKnY18bANDJ4kdfgfZTHepr73nR",
  "key36": "3vPmUbZqHFSPzzBAJPG6CR34ZBhz5UDdZDBqtx3hoTMH2Aq3yvjY8WTrXt5GKhaCEDWfmtWab6BD2TvN7niYwsr4",
  "key37": "4a36r9ZcH8htpxNrCoGkcEBpdH68EYSaUx7o4CqFXqxnbi2Rk7Xuh9svps5XRXvy7CLi6hV99WdmRSRckw4dELtj"
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
