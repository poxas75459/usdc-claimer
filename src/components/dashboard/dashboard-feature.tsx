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
    "58bSb5T93s2qob2xvFcd9kRoSAmhyZAejkhr91Bhwv8vocXy4eusBWU4gfkcZjEzVhVXNArHYKKBS9uxM4H5dSwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M33E8pau22wi78SovyEBgGqez4bnVS6oXrfWwkGQMN4vGXxDTn9MkYuYgZVTReSW4ju2ciGhfpoR4x5s2T74QE3",
  "key1": "3eRaRdZ9qCHRkP2qF3dcXHGNS35NuEVjso12PZqhcYtDcCVy5bP28hmyjygvJbhVSbrkwrypXubuPDZu4HHJLgFS",
  "key2": "3zZ7n1W84BF2PjpGqjaLZ2CNXVzzK3SeUb1eN3pWoR1J5TY9qMCpz2ffn24kJHZFQeNQgHfdogt5EYtjaAXHpzde",
  "key3": "4AcJDjAWUYEEKQF82hp3BVsSN4iPSi1YUDYJdSSmgH5LVnKH3NAQhZkFBxyXcQgDxK7pTaZ9vwXDBRz8yjGGMi21",
  "key4": "uZj7cmqbE3d3MUPEggpnFUqRCVb6JFo8rtYzJPFpkarHFzDE3i9dYiqifG7yhgk2jsAzdYZkKur6mtxQwhMK469",
  "key5": "2Y5D2vNZ1f3FbdA4XHJKygEGYHRA1e8kM7WUSahHFJHBuvYgRsuBYGBBsGCSZHykroKNxYLXwt8jFs3yaQDiMjVj",
  "key6": "2JSYS8GFyr7aK8Cp8DScuY9uNZ5i6VtwBZ1AYbeFjx1D1dUsPVLpv1VQdkSgTKJak3Xrm83ZRThJbtnPx1RzvTBU",
  "key7": "DK3Yq5yD4paPPmCfDY94i3YzeLQq2cbfpMWKv2h3GS4eeH9cq71VrouGjU4Af68b2MuDrsZKDE8azK8L2S8MAMT",
  "key8": "3BbroFcvkDFGJYNwzbS3v7zTHPmceTEp8m5DtrEMibGT7kaguT8oFaBw4MHn6ueLZP4oHZL5DfLepZoUbJx14q2B",
  "key9": "3mwiWAHyhkag9UBaAcpReRs5TmQrkGEAyKcQyZHN1kM8q5yfHpRTjitsj9BSFQbartnyBytYcvjhSJNgct66ava",
  "key10": "5Vj3jNHuYRwrypdzqrDC77kd1Lxuzfhsr4BB2QavLsFGwbxihsyVRufAqVq5a8HagnTVVaEdTW4jJBxkSXAZVAV5",
  "key11": "3CSeLUEN2shEW487AE5bVTGiuy3RmHbEinPgqUsoECWT3wi8fjJQ26t9AoMD3Vv2J9rMZKJawaRwsFTb5jkgW4aF",
  "key12": "4s5EsiFpFRa8eKXE6KVPESGotNaPGo2tSzgbQTyfraMsYTrWsPzWrb2LtQKvdJsenCUSCkrvswpBZxGeWUPVRCbu",
  "key13": "rKhoWD5j62AZc58Ld9S74GQwBUCr4hN7sDtAvHxghjfFkSRKS5m7mJEihJ6C1VmQAVVtKnceaEF2KV53LdoATHj",
  "key14": "4Na2ftUHPCPwXjkhybCKPrsSiEWtL5cihUMFL7PbhhBH2UMhs9f1UXjQmhWZtGQUnLJaC9bRhmJuQqCotQCUp54",
  "key15": "4uJ2DvqFKFyGALCLhG5sMc1nEmoF4HfNFD7mXFZXxsQ72kfaneYp8wJot2oK8ZZCz985J3bcwEHgKpJ4iEashsYZ",
  "key16": "4mN2ggRgShhc9EGWztwTh5xiDgY2Qj4SyW2A4hvP1GEPBkoH1bmXYrKGExFKgcv9hp9G3H5Ruu6PH98ZuxJWbWE4",
  "key17": "4qPunifJstQZzkLcSLAL514inAi2y8qJpPSah7ZVGGjozC2QFBix6QAi1jUBwgsEViCDCraVNzDBypBiNQjy9awT",
  "key18": "24HTPVEKbLAMsap7xZnGW2ZGQXv5Vx4otqYEey8thmWZFZqwka2USAfXLmsccJh3nXLCH19c2xvhpLHSoWKHs2JY",
  "key19": "3SmMvpj3A9tEDenUainJBZwf14EQHgEQBmUQhA5dS98R87Z7Vd1Jk9vXHB1UnLgyeW4wvz9caU5jpyCsa5rHJ3x8",
  "key20": "K1ZvZUcowg2LARaUBVuhk7mMmzQa64egeP79u1kxqr26yQxLboTLcCsZmi4LZnzX3HqBFvoAcJxaW48SJAHuPiE",
  "key21": "2Cr91MpAf23aVxvqHGssFdc9ERyLRsNEwpVbTQXBi8WYUiX4jcEZLTu5YrXvpsuQ7er6aHZQvKh5Gu8JSnP2GePH",
  "key22": "4w9QBq2b4fCXk1EKH9eZxTdjtQfXEdFdQGZFBaksLBYbuYgBbpuD27oZX6dC78zjHi3MnDQy7EY57XXsRcnf5pX1",
  "key23": "DmLrkHwU7gsHkKG72TghxZr5cxqNH8BKbXVz89Yeazg1a53yibNoTHBr8c1EoyHUvnu4yGht11QQe1uh9AkVLwd",
  "key24": "2Vx2SAiUb8pLuDk9PJadqjU9J2AoGCdT9vVDEbzH364gHiQsnt4siN5o5avnVw9LKfWhoBvzWXhMYMixVdXvoMu7",
  "key25": "2PVEiiejar1tP9VrYaAcxbTriXx9YdV68dp3kXycTZwbuzbJ2B4YN1mQCf67jkZL1krER3WaBX3RbgWrKhf5AAsn",
  "key26": "3mezFtxyqdncwYXjACjZxtGspaSsDUCkGUunua6SpbgMjsUSKvE8LVPjDZezGuTpa2uEePSKvZRwLPGaEkUbSoft",
  "key27": "57zdDXTdf8XbHX6N3KJu1Xh5RKLPAZJ7HDepY4NpwVEJ12xpnStoZJBehkiZeVTnjXmjsXfxQBsirQQkzjZpPMBM",
  "key28": "5G3y6x9wHWe1x6qmnX2Bd3HsXkzcSoSkpdF8LBWkH11TLVTCGf2TCymRPhdzK8A4KHXDuyxrvJAm1gzr8FmMHfSK",
  "key29": "3euw2fwi8WCmpNh7SG1Kp96f4YXGNXyHfnC9qUQQFd4dvvYiMhzKr29DW15kRLRMSDA6dTbt5isHaAiMqLGWmPsc",
  "key30": "YRk1fWzBkC1ABURCkjWU42y2QisKtiwaBZc9HvxwfPTYxZjvoEsdpY42NdJrLpqcqhYvjt6ycXqEjUpRnjc4HdJ",
  "key31": "38v625ZLYmRsXuCPMStE1bsEpLR98Cxcu5U6THLUXbgJn8w3WXjScb7B7TtqeRkFdYcULBsP31P759D9SXjpXCok",
  "key32": "3DpGRa1VUpXwR2bqhvxFNrUSxu7ggHtAnG71XGTTg6GLjadg3FhxAYbGHrUKKz97j2LGmryDFdTfmjtoTu5zESL",
  "key33": "3HeuRZKnYsQ4kPFokbYhc25M6hMLj6SWerwdmQugQFtXWFNBCfJ2kFBK9QFzcshi5E7ftZq7YrV4GzPtF5jcJ1gc",
  "key34": "3FzUz5VfdaV2LUhPzPcmxZQQqffho2N3Hsvx61MKREh5SCbfcqyWuJcPPuAAAZsnCAmfTmrXPTg5UkjiSaRvHd2",
  "key35": "3YAwyjtpB6m5J6vxxx4Cdik12Pr4VgZ1uKs56ZWTM4qxUuCqGSDkziW6XDskdv6KkwKAesboHsR7KnRC2MnWB5uH",
  "key36": "qieWdXz2JU74YFxifrXU4PRXKvoFKkTwsP44net58TCiNwFGAZGMY5GVjZ7kwh9zfaTWgy6NFS5zDsLzrHiS3vt"
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
