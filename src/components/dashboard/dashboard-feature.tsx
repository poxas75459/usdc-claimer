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
    "2HrsrZt7dGJKN5dQsC6CCppX8ysM4wHpXQfkviHAh4vopeM5yY2QD9Hb3nGXAqY6EPvaftHQRZoYKsV3VuKA55mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqyKuQz3F6Wmv9hryweRwneNewkHmgxjrPWHPPx4HRmHUFoNGpAaz6mxJLfkngsBTDKTvYxtFNmKtSNEY7mxNdT",
  "key1": "2rHe6jkHkPHQrjwm7otHU5UrHyTkicGqdeDmALLX2q1Lp6ruzWdzYxtDwqTdfzw9hAdsJUqMSvDm9oQZhthY9cGx",
  "key2": "5KRGWPktFx8NPVguEFH8aKhNjK23ooAsqnjx7pdRTznv7daCxHoB934at5Gvc4gQNsQjyQFF8ZhueNjJubQ5YW6u",
  "key3": "367Ju4EKrbZzcv1uEzByLsrAHfhofaXiaUHgdmWhroyqdsYpwuWz3fQjyBgbRyeMagnepCmZ6Rz3qDJRcrdgFWc9",
  "key4": "3DuAnWyAGZEHWXPwYHnx9eb9AEwmxdvWY245iW7knaz9rH1x2GSeo5JHqV3daAqqb6v2xcA1bAFRFQBcp8QKm3ue",
  "key5": "2tG48R5er7K4VyvA7w6opE4Wbo62FTZXRYUNjhrC3MrmEHw6kihY4tc1HAiHuT9ye9AkeFu4wid9ttx7GNeEjSHX",
  "key6": "3Jie1RZfem491p4VmKct3kPuvZSRhoLXTASD39CHHA5C8hR7vRKiyiqiuMKiDPgj4ohiTgLwbz9MLfc5vxsHtFgt",
  "key7": "4vGihRHspzTKy1WpKSTQXWBe7wrQZKXS5yvExR2DFvQ93azZYzHHQw3CcN9j3auEC88LdPvc5GB5VUaFgyn5Msa5",
  "key8": "4NtSoB5JHoo2ftj32UbtgH9xJDV6omvaTJAxQEvjAhQXJFFTsHx4BJ6hByrqaDrzAceRZPbV66Zmy73i9Rd8GSoR",
  "key9": "4Vv5HrwJKnRaUazXqYJxow5ekioyTKmrgYkNaVuEQm7eZghXbMrgfvAeoq6UuP23ivGmAmXFXGpGrkfvRwWZ7un6",
  "key10": "3egHUoktxFW8wGhcN951KFPuJDe6t9gLGHfs8NbYsCXg4WVThKLqQq82i1FJZms7YkNSgZQkWkKYB86y4BpZ5cpy",
  "key11": "25NSxStVz3gdNrddjFLPkhbT9FM36yDqjLKLyuf4hFeYLpUjca6ZfZCih3aTuRETNiDhR3Gu3fz5LZpgw1bZkE1H",
  "key12": "3ZZgVSc27arNhXVbo6gVHW2wAN8zGSeL77Gcd9Qm4rSKGdpock3h6PszSnhaoag751NPPWNqbVSzQGd8o32sWEUu",
  "key13": "3f4nmLoYqK451xi8fcpBWMyjZdhXN5hbar4uhSX7qQWikDTTg7XzFvmQ6GtWiuyPbae4x8a8GvGhsYe3bNbETrGN",
  "key14": "4RtwDoLHBbiQoJRWyUgJ6S1HbgegkFyRoXqyKr9AEN9FtS8DWtdeDY4p7E9nipeNNyNGsJ3FhEtRFXwSPdo9GUpg",
  "key15": "2Ac5Qt5GA1WJJEKGmaY99T75YdQRuEr8bgCWmYXc51gT4BNmteCcJEvp272vZbfBVZHMvEYTjutcYk8oEpfTUFpn",
  "key16": "3yamtbtnPwoj7jeRUkzGKghx9ofxYu58MNJnruzhnH5QrxJNdhJuSLmFFzphAo88NJupkshZLdxGsTAJGMTWkHJL",
  "key17": "62roR7dCdXKSE1ggGM6jLHLPYacTmvjhsERwDu3wHmDmXMWVKq4ntmz8NFr2bm8stf6EycwEHwvu8sa7rBXLJxtN",
  "key18": "56QoruB3zj9AXPRCjqfypcrZKEKsSVudsDmvrPv9PUF6MFXvzb7CVmzf1WNRh7vumf3Yt6pwVWLCW7iKAfGWhcmp",
  "key19": "2AAKAwu3sUE6jhQqCevYrgcTnuUfhtCPK8LxrL3GDSgnU6Gcz1SZwrCjkXFqw865VhWBKVmTbxbh1F43SEdPV6hV",
  "key20": "2zdsgvMCEyfhRjeS77jKR5d7gzyneSxu1wm3sWc5c9gLMy2VXnmE83Y1JANBnfU4HG7Kzw9QReWoHyZhXtEXGzF9",
  "key21": "hB2eK5AgL4o65CjS4BBcN46LAK2nj7Xi2UUpBSeFiJLDva7UMk8XMcQcUPzUeXH9g78WvZyVwyHW2oA3xse7JHS",
  "key22": "5gkaDsSSuPkD2auSrygUYrMvB9u465vrqCYC7UrA4fHUrERz3CdkpNpzGoojseF9vxLdXEnwLbGk48b3uAwbS985",
  "key23": "ra75iGc6ePmaziP8evhPnPYKpD9pe9FwTwZfgNMc9TQWpUUihYG4tVhu7sxGEomjgtoeAsNMrzF8hn7foLPPcDz",
  "key24": "3Yc1WfG8XAFNjdMe9sHSPdyWWxRz9LeJWGvmd7tSLE5TnTWjRXZnuXsJjtag4LHazPBv6msn396qCwnq5YN2uXw3"
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
