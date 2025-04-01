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
    "55gCKbELWTkSZor1s1mcTtLAP536AD3v2ehEEgNomjapJ6vb7XiHCJMGZN3ZfotLf5YjdasFVjaYfKnFmXJdaS9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h9MdGv84t6fbZHs8bQPa12TvovadU7NXGtBKzk7uwpzzAmRSPt2bLNBP1vYLKjZbSA7uZCLrCqut1mBg4DoCUEP",
  "key1": "3v4oHa95Ce61WHaa3cuqHpmgpkbFTjBba77fivCTPj1KguL9QMXhVaRxwZya9txuHQxBHfNuNs4mpshFMWgzGiov",
  "key2": "3eYgHAamUdE95eheJG2ZjtZYtiXiMjW2bGkXzuVwVqWWDuxJmDEU1j9aDoBkfZkQGupgwPbwjXaE8gsWFagWJUs4",
  "key3": "5bRLhxuqByLDXQnzBZvZqzSV7yUVv9ippRtktuPL6Z7xK971cKWtjyWv5edKZjDpQ4WpHWh5suPZX9siA7vAJd2a",
  "key4": "2WasqtUzyVyapTiUegYeK23AzsaEzmYseAg6BiqU3nQbHN5fJNeKBR1U8AugSBpv2PoWgbzakti9WbQDJ3roWypT",
  "key5": "3ik4oPhCPo3zK9LjLic7x5SG8H7PdBB6Sz5AeiNg9WVoWdc1EhJQeqVjqKttyX3Y1cy5Qjpc1zb98U81pykShQ9t",
  "key6": "5p8n8LMcD7nSR3Qo4q3AcmWmaYBXP8kFHw5oLTvZPsP4rWh5qtvPbze5sVAzCGWf1iAhFaX7D3TRdX9FPLRQ5Gcr",
  "key7": "2q3ApnGziWV6cVpHA5ZHwCeWbcgFoygy84cKAK96r5hJSRstBD4eG8PrRaG18XjbxpCwnXJAKfk1K9VBPEkcgvTa",
  "key8": "mesq9xd7Xxx4fbBaDc9XkvQ368cSXJ8dh1rxivFMPNkG5NBk3onWa4gCts1NAipN2SCHPmKmKpbvxLCLHjgNCsu",
  "key9": "35WHrzgAqUH3vTjWzZd5cm2ZBCSGMTDR23uDVWHDVsLjHDVp8PjCa2Sgem9v9Y8vpbi6Fb83u3h5jrjaHebWkXUR",
  "key10": "3K9C8EG3P8WA2QmbnBGEKjy9zEzGXXhcXAzptC9522xJ1qeiMubDWLY49vmXkEm6TcGAg3VTMmCAaKswyku7Hh5N",
  "key11": "5yzDcpoJZKPbBPYxjLvK6bcCt2wCchHYrouxA7tb3na5V9wTdf9uYFyRdBPRpaeBURkVC2jYF1RjUq5bwHaQKvqG",
  "key12": "43FA6x4LfSvnKP1TVxa25RYP7G2iHDySwMLEaQCdSCEwMj2o3xvCragvdFJgy3ecPq5pX1F1G7hrQ6fp3yYrhVQP",
  "key13": "34drbLLcuqiaZd7mWquTusMM3Uktm8Q1UHiNBVyRgrxE1S9Js3t69VSesD7nfrHrrDbwDp56Z3D9KRLDz46gFBj3",
  "key14": "2iCC4pCv1jy7Lz2UydXXcsnG2Mjdt269ZkEpt5NB5d9Qnf3TdK3BjdSmzsYPGB7GSpqpr6zA5hmVFyjCbTn2TZVA",
  "key15": "yB4nECgP8c8q5CmY6egDMoNu8BZzpxHnoacuaouTSf3uy432k4gSW9osQiSNUq64osXkp48xXGXgik5GyGjRbLr",
  "key16": "55E412c8Z2FDdVisRMkLPgt6amD3LBbPC5GBzYXb3T4N4V8yEM11SBBFk6SAzYsVkQUgz2SwSKu2eBQWuhYf157H",
  "key17": "2Zw6uSGHvVpnd2mXuTSuierQ1ab2kEMbYSvg7SJ7pWSjtPrPGotCxftkCPuc7BZFGXsRCbDyQenngfJV3jAeTuBK",
  "key18": "2jPoGquLnEzp6ujbhpmXf1Bp4YAUGBGo8rW1wFsPRiyk9naW9yeMdrU6J9s8iRSRnnJy9oxBTQ8w3JuyYc9SfqPq",
  "key19": "2HHaKaD5zfVmfTewJRBZ2j3r2F7GbEZYfcpjGE4AhtuQGqp3EPXMXC8CussHAnWLaikncTx6Q4gjfnXYt1Lmm3Fm",
  "key20": "jFiwjZhn7KjyHFRJg26NeeJPzDLXHuAi5mTqxPt8Eu7T1ijRKSkd9PYbmGR2sbzSHK5QrU64pgQXtUbFeaxq5vc",
  "key21": "2NGgtCEEWYjuMmpCYrS7jiCTZmFkVa4c7TVnrqakYGLUv1t7KpPXZFMChSLS1sXDkXqQTSQevGnxRiG24cu3RAq2",
  "key22": "4GEwRgj76xtkXrmz96aMbXcFjM9DQq7iAN7ijKToKn8xbLJxoGmShD29KigmhnAhMvQ8xL2oLdVgLDWCh1DFMKEp",
  "key23": "2LuMD6kdjkZSvJgcwLzYLeWnXXGWWw2RqZDfAkyU96tM4JCrty2LGkVfozrYvGTMETqEmuAGM1YNqAwJTxYUY2bk",
  "key24": "4iyYgv5rJTMiy4GLyB1RLw3R3muLnHd6tks25mpJ5S5mFurqmjL5wvenAjqXcnuk75ZsPeggQdn3bCrxMCt96KqD",
  "key25": "2xangvbYtY37FKsh9frJni1WNsfXjEH9byWDsR5bPybtpMgiAMuowEd3JVBMdGnPZ7DGKzfe7EbJV2WCj7VsEa1F",
  "key26": "JfYVvUZeo2vv1vzx59b3n89cxpNWnoBiLTaWC44RcXKcspkR1yhe9t6MSRqEAVtCgUmWQT9ZwLXzdHndDPKyN7d",
  "key27": "5QHN7zPBKn1TxYGBRcnWhiPYKcfc35SWSgz9W658fbd4Rg68yibdWQPT9NTTnEkj4EjDSxEhywdVJYmMtm5mgaD2",
  "key28": "2SGPDQKffoRkb1o7ahXQXqiLTCTc8oJbsDHfhios4LsbtPCLCKkTRksnVCPUBjdkKhjm7mh9J3QUEYfznK3QJZyQ",
  "key29": "2xXHCjx6oos1AouJqEbVeGeTVJdm8gnMgpTvzAX1EmMZi3XdgtoQEfBvvJTmHRc5HTtUdDbcFXFkjWUQqEJeP2E1",
  "key30": "62oLxJedBQV2vgRRnjs8ubfEiZAnva6wSjhMdq5SojFamo8vqnSXP5hcgenAcjStXiEjqLgffZdcBZ8eQNCc2WqQ",
  "key31": "bYYsGcfcv2Fn46uZqQLr2wZY2vBuuW19upBxXTGsrmHsWKRMY5k3phXGNbhx9tS5FTrbh86s4tc6y8H1mEh9vey",
  "key32": "2PsJ4EAMGya8nLGXRvDZPn1RrjrKsrBvRHDNpnMeurJ5YR6N7aqigVTS5pNLm3u4hyu3NKuRbimHPA8iPQACvMe",
  "key33": "4E9eiPYNa8VNwewLSJccNvm6sdz3aPqeFkd6vSyyYMiAAtMXbahWkKWwCQ1Pzq5oKgcHrZacRGNhdW6PXhYZgfdy",
  "key34": "1x9MPvFii9VbHmb7MjjUqZHcEDbhnqZ1VVY2se5xFmMber6C179igUd1CFa6zPESvt9KtoCFPxYe5mUcKCF1C3U",
  "key35": "2BXE5mxgbVBiWNJRB1wLA21VnGtTJHMwvbv6PZ8fuNak3tQXbcSyWmuvgv8ZgLYxibQdyf6cXp4Fe5qCz7LyhXvC",
  "key36": "3DNw7byTKNYLfFKpvTay79vkH5a8Zu178i8DHEaKrXwGLJo2R8vdBdCjMaeF8DvEm3Wvj6kgXR4SqxJ8pDkzygwH",
  "key37": "3CUo3m8QpMTXXVJ9garGDpfb9ENAnmPkQdPfBKBFWGNfELyBaD2E3nTTBPmYvznoiwEZECYvRpfi86NqWCZxXGik",
  "key38": "4jaUAqVr5L7BEgdznF5dHBoRXFqv4TkdM8YiFh28FU8oBrLsGvPyvkVTcr9xu31QwXHZYM7nfJJJ9RZ6WasZWw7t",
  "key39": "PRaiEvCYHfXNRrHLjRYeq1eLbQ8Xgq2Ya9rdsjVrzpJA5etcBw9BAnkUcE14YsSzTAfTEj2Er2QgM2GezmQz4Ev",
  "key40": "5qzmLbHWPdWqjgLqdmyvmY7wNLYVy6xW8VTgny9y8dSVxgqSEjbwT44xeHLbPawPYPA2rtCFV2MBoqqb42WvgTLy",
  "key41": "2bMbt1619EwWfupQPaz9dfQAjPoHSB1g5RsXqNsdgfBWUexF7xxcQ24WNviJBwhsfpYFuak6BbsJk8k47fKVmHFe",
  "key42": "4R23eF84nf2fG79yo4yWW4fWRYufsBddYFoZ36trFo89vVXDpsFXz92c1yAyg6VB13NFX6Ayr5QkdCPRLXAZZKX1",
  "key43": "2Su8SPP5bozFJBj7Tyh62Sxdwsynfgk3KwS4gvEiFXvbRUBeTLvQ3jbGNgQpKeTyMJYWHbQfQYPG2NcroaHX7LNF",
  "key44": "4fzEeSoWa6CdQU6L2YCEyPJsjgJfkkR26Mgh7iFDGS2haLTxeQ2g9n1ds4JJg6QNUmDB3Ma1fjPeHhqqLmZxiphS",
  "key45": "5HNBB6buRaPmLHo8Jk8VQynbKHwmUNCYGzoUaTQwa2HoTmTEx9LZQf545b2LcGgwDj3LRhszhyVRD2z9mpbAcSvt",
  "key46": "cbroYTrsqSzvcgVdCUJBRnvbeVAzC6TtazCEYS4AauKNJhp3JU4mbRR1gw3yN47a3cGcnzyY6Yey9ijrWhqoGcR",
  "key47": "2iVGLr8JJKwbLFK3c3jELWYge397RfsBxEB3V4SGofbetEA5aY6ZBEja87JnnfxdpMDPteJgYq1wwt3piHh9bdCU",
  "key48": "2KYuqEsZz7Wc8K9rm6wq1j8STcpJbv6pTBJApUFTRi3Bex1d7WwrvjCLLm35ngPC6jQdPyP4MYDR9VEKZfW2zK3g"
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
