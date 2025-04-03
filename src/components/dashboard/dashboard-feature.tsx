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
    "2UGaZgYkEArVL6FKmxj4ptTzfNXToAScckAD7bWDW1KCwKzjwhGZKEx5eNUK1KcB6gqstFVtJRsJZoQf4NcLkV5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wW3uV9y4PCMNhpeq2HtL4Pv1XcxyQk8Z4QSSjYdaMb9RMkT894vCUqEVNiCD9NNpMRa1g3Kp6aD1SEU7WvEFWJs",
  "key1": "3seQ98kbvmogGfYYnJyJbup52i7TVp1v6mkjbeiEQqgfL8j4WJVRCMWEGkxL6ZZmfyQ5gZc57X9Bk4pkE3pzCvg",
  "key2": "4qj7twq2EusgB62MdGqaNWrJa7SgsJQifFyyomrT4WnM51sFoGHiw4UnQjQhFqiiDU29CCQtB5woimziZhSARvQ6",
  "key3": "5vnUAHzATPyaEs7GfAqzSEMnvLsQuEVV6Dh1GHxV4a9vMaXJwZMpQYTVNJLo9ygsEXyfMTQ62cWVZJBiXLqzT7A",
  "key4": "2UdomggvYAntvKdFKkTef3SeVmB16QPbAxLnZoCeBnxptS9WndLYCmryb3ryjqnFuy8vVhMnpz2EFPczuCR7omQd",
  "key5": "4dFu81x4uBktneKf4mgSQYmSpv3RSBsaTUVPH35RTWwg3ApmJRBqN1mXMmxoxo6Ajhkf29zATGBxDfhPjm6FCmxA",
  "key6": "3wwSLuTdWLJjmevdDdgXCzocvs8D44KHBiij97SofKSsJ5SbDFf7t2A1rSHNfGa9P46NgUWsyJm3W1rfMUub8oyX",
  "key7": "52H98TzUtreHF3GmkekcipRT9ph3yMgMkJ4d1zjiRiZUr3Ciqd4FGwenknNFBFbG6Hc66pcWcPzEyVpX9gkyeXDM",
  "key8": "3BCimQkfmwBTH6jpKCVb2ZwADe4VFJi327eJ5r8jN5h5JnBUFkLGuyEge9RZV1qaedbVAkwSwM4w2ugdK1xiPiX5",
  "key9": "5y7EYCzLp8JZDMntsETTozyJuqxY5s4cz2SN5FJs4FoM1wMbnnAz36QPTEguiWSbVGGWFuKgkWvxpcZYCBHs2fCN",
  "key10": "4tA52vEfRoqHsH4T47oxRaHf3bG5CH5fjvXpC4tQ5AVK4RCn4MiwDPfWkgGMxDLP7L8o3CYYQJXUAQU5YB89QRUi",
  "key11": "4bE7Gwy8ZZn23Uox1hCAHoZsMbBH2vwxwoE1wqzVEJJjLpjY66L3QJfTPk6FUbNvuVABgfwibni3DV3CYLHkBeNf",
  "key12": "2oFr41VGqdaPU6VQ1fXkV9fSsfUGnvMLLNqqTXhN258YtnrtunmTCKYDpPGWxiq9LgneEAkyFP5JwNeT8mckXJno",
  "key13": "3x4Ao3MnWkyQ6SE2ugGvAd33nWNdBeXZv15mfUbWL3mVTELuk6EzxPptvN5Mft6v7wUgLEoZMdC4LjbufzKcLKru",
  "key14": "3WqWKcdLjompM2MLrsRmCis9Wgb7RnNW3HmEj5tJhJqEvMRiYWAmVGCCB368j6G7xLutdE7NpCc1Xqexfbp4Ckhp",
  "key15": "3pUiGTwoSH5tdRQB84TeRZqksnKgDHS4WqUyNBe3xwTi3tqVFQTLwn6TyaoiJxZnKetEE612kh4EAhcp5dHDsmq4",
  "key16": "3JjWq4HBGGCH6pJ8cGApGEmhjArcEpNS6vAuFw74fU51ZDTK66sYXf1CvRajm1MYzn556XQi1FAAd6uG5Aojtxy",
  "key17": "43fcAkr51CnFMZKUY9va9iHAGyppo8VQWVb87CiTKnsH62PMfiUMmBooL9i5NH8GgVYb7qKfkGTTS5ovzZx2nWGp",
  "key18": "3iTgrKdBmwXtzjmJfGt7yCs6xJXcGZPycMs3pHWmaXZdgWrbJuYevEV1i7kif5FMRCAh6D3sX5wnaKH38wxLpcEk",
  "key19": "3WCWrGE2RWFPT8Wom8D4A1gzBsm38EGhdM2i6jHyPzUyhehsjrK5Bp5iEZJQtpPn8MvLwJ2KuXhah8CzcF1PssT8",
  "key20": "3sRetNo9cdJacbEkCx8seB3cXnASbPxkXRE6yPSYWcfJYY8tgV6XNpuCTb34qWBoDNJiVajjkax4v8QUnA2wgmbh",
  "key21": "3AMKJFMdCWgcpFrerCoTC81AWh6oms1fyuq5eFtdw9muzbSLvMrSeGZ9d6vXCJ1DeS8mqRrvdAupgoyhCJrL5Yzk",
  "key22": "2jQh6KykRWURcGju1MubhiqHe8GQkJJx1sbAC134zmMMwavBagKPrWWP6P6r6C4UTK2ZmkgjixJ1gajx2dSTZp2c",
  "key23": "4CVpd1hcX1KBimKPP3i26vhNbSj8wm4VspKB29fwxw1EJWZ8eq3mXndgrQCgAmgtqzxQCU5NEHxDtug1kUWFJYzN",
  "key24": "3aBuiuLrpeT8fx74D2g3bknv81fG7LDmmZdJG4jhN89YHxSub9fe833wZg3yva5gVWkWUHG2Tk4trQSkRQeJCUZ7",
  "key25": "pReJhpsQsJnfqoTxmg7enkrymnBPATFpgEgpFkCHkkyM8KdUarQbkXM1vmA9XAYG4Xs8gCGdoeUHbVwYAiL74tY",
  "key26": "2vRJ6QTcZ4Zdfu8HewrY3SMyoyUyg5qSnbekJaACBArU1PCGEYXJ9SXu3ewTBFkn8yGzujbwCpWncuyHPts9bGPn"
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
