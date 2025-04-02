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
    "TojhaF3DUHJrWAUxhgWUnT5Em8YcaEvJAmCSEzdE6GrJtpch8Yy4vnmiNyLzywFseRSfQHyhTuHtW2nyEAsGmbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cEKoaYVu1NdE65c8jPZMtUpWUuP8RRpYzXtVUWSa51rM1haRVfGjYJ1UuDSeb5s6MWYiWmr5sX5RVYcrFZGjPrM",
  "key1": "3P6ByTz7nzt4dDWaX6r4HqwkCgaaSGAHLFyqo9ERdXd5BhyiVT8q9vvqAR9SaNkA69vZmkdrpN7ScfmH3YyQYnAL",
  "key2": "4ZrfiYskcYT5J3iEZaZqn6sDHiudvvJf4jyPcxu27RYYB2QJNcccvVpMtUyWf7ewYv3KuRNdSmJ9DEz2jDo7cmhm",
  "key3": "57NbqnPnrLB8kDcEq8Wm9L6yvWFxF2vqrqRPDA9NxV3GBdvBzAUr38LCNTRaWCWmNbd9z1wcpVU2EMDnBEGJiNoN",
  "key4": "5GdxVDxL8QJw1WE6EEZkEoKMCn6oKbsVvRTo1cSqjvDc4XLnjqsj8boWANh6PX33s3RUqWPMW3pFJJJiBRvVntpM",
  "key5": "67GmNUHsAUur8oEQmzWtbGW9dLbr1MUk4Lfh3FoMr4Wu9NZo6yAXNhsN38orToFezxzzTyj6EH3pfbKZiphSQkRN",
  "key6": "3t7SFggTb2ENqeAeqQRQerp8vwVpZgpc3QKc8ySjQviKHGMkwsXvwmUekprsFxayC1VuRweFCTJ42snbbsVLt4rv",
  "key7": "3PJZtwFy3SbYmyM9CURCV1TwTvt2f5MpRnURSsc99bmfGxMow7NsmsHw4TDc1sdugqsh8MoEiqVUNGAK2VZqUKPJ",
  "key8": "3i3D1ppSpMyhTvrUS2zpPmhC6YuJv8MyLwwHkt16xGJWX1Y2tgQk5acmexpZdoJR7m7bEinLowKcwfhxBFkGMJHE",
  "key9": "464koFeeABkqZakr1JK2HqZrNJ9Ntd9d3W25LL6J7aErqzXondS45nMFH21frKeuVNUeb8oM4PvJYyTBT8BdXN5",
  "key10": "J1MK98smPNmkFDE8wSDkh31pwHmLQ3k3kdz9ci5XrecLXQiEVJn7EGtbRFszfyVPnfKsNQM9VBQjZF3gzmetkwP",
  "key11": "5sChYB4ig8mM9QZeqpb8Xgp2A7U51JiQwm4KPoThNZrE99djj9FVgpxhvZo3aCZDUgsjHRX9FsNYQ9NEjeiQbWpX",
  "key12": "3qQX9x4pYEL1mpNdVYMu5wt1ozRXjoZ1hg3Z23xiTBbT1exPW9zm4g2w6NALu9AkoTiM1kb5zCPvCCjmRt6KMUbN",
  "key13": "5W1izE3WVLLBjsL5h8QLJPttzvw4fjLD1fQTNSWAiv2tshEkitXZFb62QsgDQCRkpMzpA1pfvjR8DRPosEGMuZ6i",
  "key14": "5eJNR5iPg2GTW6UqC7XyW7disrwPKjsyeV8UMcn2d1ynDt3BbuizQz1cddTNf8j4J65fVNex2SdHH1XHYkH27Js4",
  "key15": "5DnpttqA13668WoYNY5uUemyv9FM86j9HuV6qXDWMD2MEN2VzMouWysATNTLxs6B3PnDpBfmZxrV2pS8xCRie6KC",
  "key16": "255DacUJaPq4xTTCtkbpsGProT7hBXS7QSayHQzYaNP2PFXTvFGZitaHw4euQ5pbvNtBuJaPLHkHM1BgoHBZ5b8V",
  "key17": "HGCBnCkqzdeHdFqo8AvxWNgxwjuoaD2fEPeHKWqAHaN9fj5FzahxKjTBxhWttDWCGBZiwWWeR7vHoqxVyCZa1cS",
  "key18": "4ibZmBKG9HeeaJ533ErkJXdPvW46zeorLCo6fHAKtkoFB3S2n3bHxVe4GdzoNvQDbqqQHsWLckh1PiZM6xBzkBf9",
  "key19": "3RASPKWYkX67KF43K944Kk2AJSZgybotgL97HrhuZUSrTads9EBZAGhaHnAcYkM7sigGK81P6RCfQvhtgtYKQR33",
  "key20": "4YpmhiVG7Ydrp4ngQTNqtaR5RL5qCruoLej3BNcnDy2RiWyPgVr3vR8arKPaAoCXDMTJQ2kuoJzUNUeL9QMCvmGP",
  "key21": "3qbnBGPUARaYHNPLHTzWehUQ4qvNGowD7XT6WVfQPMfGi3g5fL2oqPXRaRNY1i2zSY48WVAvbk9USrfAM7X54ZKx",
  "key22": "547fL3NkMhzG6QygHCtGUrPz9whtFApog1BBvEy96WrYRv31Dxg9JGavGwTezih4T2MCnwcx2JUie7zUMXeg5rse",
  "key23": "3kmccsTNMV98noHPWCC2Cp1LdzG52boygLnX8fwBWGzLNbhZcWTfH2x8gpQTT9ecACwjfUx1wHPDzkenddzgcPRw",
  "key24": "1BgDa9CrdjbSgF2nnieTKTDzQVpeC52vW1aXPaHLe8QVNPhEZ7URn4qpLxuFTcMFFQaW7bNfRMgx8Ty8yLDDKhf",
  "key25": "hnVdpr9BTuHs2esq89ZZbp2GkXB6VnKB2ENZLFFmELZYSf6b9m4ThnN4MSMaYhfgwBAsU6DpdNVR2N62iKhrzx9",
  "key26": "cz2LgKMabbPnutnUoCYnVcTRpBaAzSc6wV545zgWABZXXWMQzaGreNzeUhS2w2mEMxzRWkwuqVBHASsPCr4Fo5s",
  "key27": "3MMoAa2bTM9gDuoDkAGhqMPGpsmgtYatiPK5Ek3LEmLY5Y5A6h1XgEEa1uwJzhXHb9tim99Rfv85ZPTtmSpPek1v",
  "key28": "2SRzbiTkpFLhLgJ1vuDzsFa5Zhtc3bdHcpCJqGhELRAegWrzEwqNupzoAh79fKj5XBPahzzmoJqM19oKepFB9uPv",
  "key29": "3vTfXkH7rVsvVkhQeer7R14GWXZDGcFQC8yfSNySdLABBkTxNVLkF1rXhqgwitGJox87pguVrh8hFBRCZ7Kxwdyj",
  "key30": "33G8e4PBQ1DHKwUCDc2Cb9DVSZbfWk1P37xPC4fd3HNSHn6zVNXKpM6VqMbUDx8S5yMdhSEU3QLLk1mcFR5dVzvY",
  "key31": "5KpDxstmeWWVTPhfpg9ZdLxfjGUnP4LfCV25wZ88f4uQPt71DxB68gQww2UGA4SoKoq25AkQTTxiUUj7f8XHRwJd",
  "key32": "XWqCF5okDrHZj95cxTmx3ShFFStY9A2LkSFawWMzuz89rKqKKjCCZq65SgRBtuwM1qYJ4bFvHZ4caNAFbttoYyX",
  "key33": "dUNhauegQh58gQefPgSWSaKx7o7nwiqVFTYkzPPGVBB6Q8rXRBJky7RahVD9XNeuPK3hNX884TBqZYxaMhdkFHw",
  "key34": "2BofvRgzhc9dDoBmucVwxXUNHK5shqq3wg2UEcjUhkTRkst7SdaEgHseyVHyr4aK1WbzJNSgDtxHnJJEpPGQMq9p",
  "key35": "3xyGQXwADNbYH3o2jiGPuDuDEJibiH8V3x9cnUD36WJpmZey47hJ86k7UFojzLEcg1vxZaK96FfQk5vcUf2devt",
  "key36": "449VoqPuGWZn3hbVJgRxFm42kPthG75i6wH2J47LMC5A2ZDvqmeGeTYPT7G2dpZGRj6giQuwT88oqzCJTtZriFh6",
  "key37": "3yW89ZvWp66PDRpJDPnNRYYBjnTSgc5jvzfJqo8LyFhyTqgSRPriNSySTE4qyDRtrmrJNwTJNqeM9DLou4VTTp2L",
  "key38": "5ZpKN4jAsmeNTCaMFGdzdDZLaaFCzPWNWTBWMpYP3A9o7n1pKEry5dyFUu1XB5MqU5BBiyjPA8SUcdtrUVKUCEgB",
  "key39": "SfgVV6nsEd8a81WXCbdHXGNS2mrVKNVEsKSeAdKK2iViP77DF8L6icn3RroHq5AKKM5Yc1WkBw6DF5adEdCGbFv",
  "key40": "3ZjBSr1K4988Vq6qGcRkVCe7ZfEbJb4Em6tuarExSaQbN9uUsRmFVFP6FaXC7QrZdnqZCPt9Rqzde8DsGB3X6ZVx",
  "key41": "2zQaoHppVUjhx9Fqu3ngYQ5GHcJzFzD8cB3Kk5prZxs17RFj7Xzu9323dteA4gXP8wAgJQp3M76AdpkiffUzWXn4",
  "key42": "2M8tWSW8fYNqa9d7WmFdSztqgLEND9m7BcL8h5Tc2nW7RZdgj8G8WzXBjEaKEuCUbAhYCfVcVSHtxCWWCo79hPp1",
  "key43": "5Wcm47ABVhFshv9DuBUJ7pZwvLVVa8W1PEbbMWo6ZrG2tWroSeusDpX3HqAtGwt6v3nEbE7YySy5DQ28MeeFQcT6",
  "key44": "4TVGYQFo6vr4pfbidM6eXPVfvUr9gdwfkmxHcVYJE6kdbPUQFHpx6Rkzm6WtABYkUXJ7sMzXhso66g1h3L6nTvKh",
  "key45": "4ZuzDHAFHMrrWuZs8kCrXMpD7yg8hrQY8PGsiyuuY1wuZfjBER5HKqUd5pn8BwthURp69E5xtDvBWw4jNp3BEToy",
  "key46": "2w7t2RRqCBKyMBExJm87wHfMNv8ZkKnm3mRgADZQCXVgsu8PPrm1BKnRB8ydhCEwXd9NdF4zJNR3PV5me7uij79m"
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
