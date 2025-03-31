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
    "25xevSizG6McUAfb3UXD3qt4nEhsc9iUKdWnk61dPdUPs7zqFCAXgm4fR7CvLYxbHZd4Ho7hpwdBzUBFG1KUAvWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpDR2ZBUP2QCnhf89xg6LbXWsWTGAziiLBAvRhApcp7mt6guKq2CjivBSBduk8ze8KwXi5XLzrq1dNcejgTYWTt",
  "key1": "6LQ3NNzzTsDBaMEB6WCfZMK9GWxjPVjfVH92ow6nbz9vedppBSCXUgNxNmSPfSqKWFywRLQxvoXFwaZJFwq9fZb",
  "key2": "43fC6DZocJ653KAW3PE5ZCWXUe1MXWKBRJSB2H6vc78aUtKepvWRymrPeV3YpxamRfaAfWsuCteUCRZMypk5KWN6",
  "key3": "4F1Nx2URwdjh3vTW3yZKjShFRXdtYTYaCNeujXaZFAecG1JguXjNZfnyW4qdQNTTS3EPPCjy9yW3fsqaCNy8EKao",
  "key4": "2363g5hCJcAXtCKXCU2nmjtyLtcoRbq4BD2oydmcmQho8NWZmKq4Mma6FZuG2QNFSzVLx54Sn4SSaLWXRdW4auyb",
  "key5": "5Y331hCtrkJHRqAYcDW4SccJssftgNJgS9P6C4zte4ni8664Yo7XjxhzHUK3aQf9tWjW6wyP5HoDTB9Li4XTr8Sj",
  "key6": "XKgPu7ku3gY2UTofNo1f4b5J5ahu8wqSaZxwTzVsCZok7MtKPBYKan3xxt2MyfVEbTVSsBudHVthJ1AHnJEfPL5",
  "key7": "5nMq1VnswJLf7toqKNg8YYYfbnvhc7EEUKBrnJyAth4HgZazd7dmVsz5bWjQbJwxscZVbdobSUE1dGRsLKkPurqb",
  "key8": "3mCNvx93j7atC2nmS9SMK91SN7M6XUfsNLXAwx6VSCKUumPRLUJRAhRB6XvuWDhqqS4qvMsguPEpS3wZvosqmh5U",
  "key9": "H27ec6oMc8eBchKS2JkX4ApUHGewV6d2NjaxmYCRpSi5yqZaTmifafrBXEHGVDicuCHU5sMUm56VYQZ8kJ2fLRK",
  "key10": "kezUA68a2QFPhmt6chuhGMVCKDFTarztjG7YNzYtXgA8KKttzaSxCRjeWSJHXcV6jjrXnNYBU5ghAfqtd7KgfNg",
  "key11": "3KtCT28tphMh4eEddsFq9j51xwHLq48cAjz8ADoGvi3boZ5hs8wBjR8m3t4afFLhmAjmq82H5aTNS6nTqsZLjq1Y",
  "key12": "3vsqRpJoUsQRgLah8b4jzcVcRAJLyHsABSUXyRzcpb6qrumcSWpJJ9sjtxLvyi82vRn1NxY7tjN3aKaS7mg6GM3S",
  "key13": "3Gem89ArWc5vwiFPiTnHqi4Sr3YTp2R1U9aDGG822TaNYJE1vJgkXpZuGZZGGw2HpQCxYayGQTijJbAhH2WmcCav",
  "key14": "5B5D5ofnLbwaBk6kZ8pzL2rk3N58A1WraHfYovpLG7bA3QQZBzpWhEaqrdxj3L2RMQhcyz2kUdjxPpa4VTMuRG4q",
  "key15": "45J998VoF22UVkxWtHUB8KU7tP4Tdogc11FU4dsE1AYqFjuv3U62QC3xGe313qXtssDoBNFpKh4mM5w7HX39Gbkw",
  "key16": "3ic5WX7P5wqpR9jzTDjSP3cWGnCBnKn6BKof13HeujcJE3YwEfTXKpG6gfKz73a8pdsJRcxxeisASqadjrbL8JyF",
  "key17": "2xm9kbWcGkeryPtuTcryQc5cX8eo4NDA6nP99TJqeofmrW5Zz89J3zWAEPxLp5SXWSyhVJmrVDVdusbLCj6S7eAN",
  "key18": "23nR7dhYHLLo4jAkgX1wE2iZHRfVFKDC2UJryEeocPFgKFesgooGCjanSfK517Tv6dUtNKKZ4YfxtSjknUZU52Hh",
  "key19": "48inWd3iypn3aH6noCGrcuiwen3ei1SSjA1aPorG4Fb4REEykXTtW3o3tzrQcJnq9ZSqLj9XdM8fSfAZ7V68TKpk",
  "key20": "44EvoUHSbraabm9J3mAduMV2d73QurZGeVurn2yPn6iMEDSaiM2tndh7ZDjCoteQ7KpkAW6THvo9sdoZksWBV6SD",
  "key21": "34TXWCuCbRPn2iSJMfjvoeEaSbePZWrRYPu8PEnw6h1DESnX8Bns2fYBbePhktfTwMrvCBbxipz2WinA7osTQdYg",
  "key22": "3oyJnzQhSUKMdx6xWcpg4X7Tiq5ip9CmEGyah8HXFKDjxdRM9R8Dx3u1AJcKz2LBCVnL5ZHcrqHmYH8iVQht3JHb",
  "key23": "3qWWvN1BoWUfDnKhmpSibRjVHNBWHBeVqZsm5JSk8B6Tt19v2zhrorqDHvQHozAAHiaPLHRUS1UGYbpK29o4WSeR",
  "key24": "4HmDLhntwhcb5wgqwBLRVX2i7qh3ZKsqyES55F1JXQcu1GzEDGov3ou4MEG5eCZy5aK6gmEd2HfEkKd1j31rSroZ",
  "key25": "48MqcNArKYa73GRY3g4kS867ceXnCGSFaZA6QQhK4k4GxzKBVj1PJXZp5oCuoXrnybtSpN5pa9f4hxzRk6WkseEz",
  "key26": "5sUxawmqP4U4ekZkFqi4ecc7zjSoa4DHYU8fzrHiFMyirVzebDFsDt7uQBdpu8A9NYhrBnYwimZWx58GVECzw1yu",
  "key27": "3n5hcpBL6gPd1W9cYwVjwSqT3M6C2MkReFyTPoZ13nok1o2kGeL1DJe5am8mdoeQWGSA9jXzhCx1iqSgwuo6QorC",
  "key28": "3oZ4n24vYVy4ut8UXmPY2j6bR8jHNYuGZmxRhrs1iXMX7moMR9wrEibQLQc2L11xWCaEgPsTQ8rKvZCain1ooJQg",
  "key29": "NpRn3z2X2oAHDWMmzdMqhnDK9rup5x9P1iktE74nhazjUWPsK8KLL391G2G3rJ1V2vZLVgwaEVYcXEvLntK6DhQ",
  "key30": "27GP6U9hzB3HoRWkaVBc1HzMdPbMuYszBXKaHzPBZCdbjEnFzvqK5sULZygVuPMfkYoJ6TPSszkXqjqfagq44QLH",
  "key31": "5ELnvNn9Bgyn8W3KkuhFzaR5hLk7sDRwC1nsrLr3evBkKT3XX6t1mV4wtnLEsoMLaHdbMxxhjdbvgQMCMGB2k7gJ",
  "key32": "UtDBPA22AXfvsQVHvwJQkPbfmuXB6ouEtvvrejpLAL3XokL6QxoWb1dV9m1aCqR8yxwq9AJExpEXPQ6mxKGn7Lp",
  "key33": "5n3wkTkxYUWb7noL3frmfEUVYAAViC1yq3bUcAB5iLX8sJD3gLhJnUvRxgvLoJRRqU1tnJQd1wm4zPCePYmkF5t7",
  "key34": "eJmiT8peCJgapweFrK5iUKyhS9foAvz97R1Bcurh345dffVpMUYc5ct5Y4VJKP9X3Xnwu7g1mgREXByNutQP1EV",
  "key35": "4NtkNDoUK1q6puDAddpTVBQX3R5VZLuzLUFHioKcQikyjqtHBmznDzwcg7pzAHchNMYPeiMN7iMVHyTW6hPrYhwi",
  "key36": "3JNFeaNtFz78x8zSfkz6he5VL8YV9chYsehrT3je2wiPMyc6HB7XpFsxP74U7kBQRiUMdFgNLcd1TifBa91GEBNe",
  "key37": "KVzAwWX5tL5i5hVGCB7Sc4asMmTPswKRcj1vYmDnN5SBRT35GkCsEoTSBBmSo9uVXBZK7SuSnKPKGLHqUZVPrfx",
  "key38": "2Kjv5TKWQkaqtP4hW6r7TDje5htNResEndnYiQwiAH1b97ierDmcCpU9g1Xc86nwtLQZgUgFaHYFdRBAArCJRMzQ",
  "key39": "52MyqhtrWZ8np3TsmnP5V8VWHDen6LuFqN5iEZxiEL9t14TLniw3F5zBCdtPmBHYNrmv1iFaWmSfbAeH4STs8VFF",
  "key40": "3sT3ahfatnktpf2iG53ram4CLsnD2nueNA2L5VmNTwcfiMvWcWp2NwM85BYDL9LeXSGBSj2XpNcDwBpcbBohwSf7",
  "key41": "6DJHJxMnQF3ABjNmtkzcqVxsnL8dwBwosPj67wzVo4q7jD2VaksejHwYqPz2pySuyMetsthZueWL847mUmcGV1p"
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
