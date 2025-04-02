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
    "nztcuzEunmCkZXm5RJqui5NFomRhR83kyRH5R5GpD4y1z54v3re3in28oxnxNantG4MNhSeaVap4XnVKaywQzTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJTYHuDHPmqyHpmW6LDPameMQE4Nobhxk6FbnuYFjeXYZ2TAY4wsogFeQMNynzczrMgzaQ187jXgcDg946aqwcc",
  "key1": "4qJjJBTfPP8PAxRYN7CzfLDb6qhvb1fTGNtAvJ7gL6NsV1dxXcsv6vcnWQcwDnGGfYANFZ73iUoj4XmsrioDpVFQ",
  "key2": "51KQA2o9KjyHxAMjcyCbGeL7ppPXZArz51zRhr2cvVQeVHNARWhv46vuHQTcVt9u2PnUQUmEt5SKBhJSy4QBBXXP",
  "key3": "3oZhYHXZqq2zm4zsu8cPcamUmQtAAC9xTYucQZgmEoc9FHHZ5UPf2Js8tqMCsFCHWjidjufr84JRT27uZSBD8wjF",
  "key4": "3MdxVk9z6yxihRcgJhaZdqJ4szvdEgSWe3ApAPvLbLYKhqJ2rxeoCLVam2FLRF7qxinfDdn5ddvXgLopRNAittB2",
  "key5": "62romwYxeturLxCvCZq3jb4XQTg2tS5SvMG8qasqf6MCEquAMcxfmGLDNYM252vukJaHB4QzkQhKNkjd6vDhsH5g",
  "key6": "4uERzjR5dtg3hhTSiKd8CypTh5KHs26hLtogdmgwG1k9ERM7yfpJKtMXK2YmSqJNGJD98g3baXH9eGcGnHsDGxZc",
  "key7": "4sYC4Lz4Ctyo9JxYn4DLhVkK2HZmFBFNDKgfdPf9UhnU7r5f9wotfgYnVm1NGTXYmYCcFJV3jEh1wR1t4BLsrDrh",
  "key8": "5h6P1GbidTkZrLibeQJPVncMXdoomxH7AkXMgkbyhERBbKUV6xEKr3fLTnBumufTfHxoSBv4Ug9vqYMqCpZztycA",
  "key9": "2atmsV1HfspwdryPre78yRMfj4itrnFFPjZG63WRRiyBHQtW4XDfzsMJRa3PzKYDPiR3eQExn5ARyt6qRhgpFKMg",
  "key10": "PFW56ihpswEacjMRRirB74KC8UjMYBSghPYqbiQCkE6yb6puM7hYecWVQoKRAoN2jJ1MecsMQ6NNm1wef83Yszw",
  "key11": "2BydE9rw4Webgzw2KmVR9N9D4jTg8Rem34bt3Bnfjwi5S2jcRP4W9CWy1XF4hNC4icfLxyS7Hp5Tgomrj4HCdyQU",
  "key12": "42541FrJp39mTLuzZUGDtCffm97paGbS5tyS1koJCHPukg2r2RZy528ezWCVt1quYM4np6nzKQb4f1bJso2SuqXA",
  "key13": "4EboHff39G4GNzLn2mWEZoShYNtuMEeUZd6rrmJ1b91nREBmvsz36AjeqrMQCgngxAcPcJFPpvyM5tQNU3QZpfSJ",
  "key14": "2dLfH9pJiSZbqPv6sZAiyETZqsKJsrHdJG2HravBvgTiMUR5Yrpvs6pbfqXQRZAKZGGAnp72KG3GYFAdgW2RHaSL",
  "key15": "2FKJ82fkjawLVy8KYuBHgdq52WbwEnwEq6sVXXprpKdRCJCyFqqgYJLtgiAgvG4yo2kfmsiPBjrvBW8TY5bWkUyH",
  "key16": "4B37EDqzE47g5gMzbRGNHaS5uCSZWuSVPy6hrCyW7rrGGtDHnDzRnpSaVveZC5xgaxjMWLYiTKCdmkhcUY122eDo",
  "key17": "35eNZWDAZUjsUgPkhv8rtD4PvkStghhYm9rLkvW3yKKiMh7f298yyEdxEUtwnw6THhChCxbeYkCYHCJFXRiXgYgn",
  "key18": "74iDF6NzdagTYB1FqMkhzPCM2e1cm5hGbvD4bhBWduw9EupFigeUEqhg41dYYjr83icTurmL87dFi6ER4oazyXs",
  "key19": "LjWuqEQvQqo9qwGStdgJLrmzEydB1eTvXVVsRzqkptsVpPwksEzKeWn1WL5vMS2QeuxYGPE8k3vGPmi3kfNLB8G",
  "key20": "4Foj3d2p9ZYryVdpnzf53dJJgWbVchu5NfD177uYy8ZLJEbFoztWR8Uo5Yn4peuYHUG2ui43R6fjqqtPKfAM1Kkf",
  "key21": "kTvru1YPhndBQk7SJSYQGYPcgqYR54VCMcKjKe48uj4jr51zY51iDCfR7XVKRKBxJtMb2UHcw9yGuxPqcETcmjW",
  "key22": "4n8f8ovizJPL7ZPTxtSdXq2itVKRkUKfRpfag6yAdPtctQU3toYAf9GNa4yh7sr8oTqxnoNZrU1AUoJEqShu1iYp",
  "key23": "5Dp7vvPvy656YK1UMFrcek5VXs6H1mXCVFHMVPoZu9zfY1bf8VchNW2JBQFTqP513WTAXcbsN8HgdSX6Qk7ruqM3",
  "key24": "4tDFK2oVeXYLNjxC49fkmKxV6taweVPuSDV9vxBQEzjJPNYSt9HPZeErqL8fJ3HNDSLG5FWf19Jrh4SwKBV1yACt",
  "key25": "2PMdu1W5QXiseRJpnPRMRsowc2Z9T5PYmLDrXE5KWPnddtYqU2M9yHNER4nepXxewas4UhKpZKKicXHXsUnHKQp3"
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
