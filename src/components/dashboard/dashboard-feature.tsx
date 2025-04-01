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
    "4HEyzFuB2gsDvaKxeVSieN2Unf5YQa2mj5Ko66QRdr5SFGuBi45325Zf3JB1JKaZ8qd7wtsPc1aStiQdUXrUct9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uKr53h4A3ouUhLEuy7u7WFfsiq8WLmccyPUSUsdkV4AnuLQjcTqrV9UCKYMFkHoDjNSvs1CvWgtV4rzPjjzTR4",
  "key1": "5cXPTX9CBsX19oLQiKRgpF7UnAx7HLCe5arUjPkF6QVypFnz5upVEm7ovfrfVSKSFyyeEB7QVEsp1Dp66QBqrUVy",
  "key2": "5oUB2ma9wZbdTnjBJ9HA8ifALwcCzydAzkmZ46NnKsznz1cFPR13TE36VabULxCdvpJzYVrNC5o5R2YK8cfJP5JU",
  "key3": "4UzFBEP2pY8ya4WqgEh5MzVptHZTf7EYBqAF3SgEWVSHANMQ6VvwsiRDoRKhgLcCjhsmgkqAd6s3gEECmpQHeKkc",
  "key4": "2EWs7QBSFqoQtYUGAkPTbXDnjdNmmzhrTUxwdsJapRmuUW2Yk4NNajhMnS9YiSzFYEpTLMxBZd5DN6uukY3M5FEZ",
  "key5": "4GZVsVrPCEAfqxoFkyv6b8omixdbADQXVVWT7dFa3D2Lwg4zVZMmv2MctZQtY5PnxHswFgULKBHYBZjiNJt9WeJs",
  "key6": "5aLT5T4ZBFd8qRNzzu3BKSGDzf6HLCsVCCLNYqtWRaqR24tcpPpaBdSqhgrnkuoZ29GyzgcWsE1LHtx5Rpj7WRSp",
  "key7": "4Zk56e3KxuvbqKNUbPB2MLCECsBt36Bdciwr1XP3TiYFiRJPHs2s56LUvh9Wvt8Bprg5dhNaXfgMc2oXszZsGSh5",
  "key8": "NVkNJ9AaAJvWoJtLGAU2y46pYXm16RNgPAryM4Lh6jis3oCFaPmaTaV2ALDkepgFCic6AFCgF8qZktTktHLeVRG",
  "key9": "2XHQerbchVHccLBtNASKRjLNEpBFVS2AZHn7SYTtp2CRMngxhS1ryvSK6oAKJtF3EN3KY8Kiy1Ldcb6SW6aygmhm",
  "key10": "2DRjwjQdV9itfJPKr5UokaW1jqytFTuRgf8yXbD69rxq8afLkZLrJp9gdUK91XhuTk7nDMfzc3jj2tEZSpjKySmu",
  "key11": "hmrdCtsFHvBiYGbzGDztrhqNoCZQ9oJR6P6XQWdRWQdUhBvmwpHjKFudNiAkAZJUR4D54jSzAAca6WMnm2rvMqE",
  "key12": "YuCXt2jSttBDweGRYSW4ei1LXBdf63VHA2BF64D7T2SJnjFwzQwBeR9GNx2ZiLrQdRVVhuFHpASh6ioBJdP58xE",
  "key13": "3oTJtvsDG7DpwDHxzzeDV6LWcaqKXzdFFxDMfWW8xvUrG3DWFcwnfWXHyPSyKTLhw6ra5guzo1Xu7BhKkR4ruMcH",
  "key14": "3SXdoeQcGSGFVhRgeKkeq8sGLYhkP7ow6Tw6qXxLEq47KzHmfSY5bG8jWroViaogtcf7GXxKnM6MqKudWJm4JF6h",
  "key15": "2yPRmap3YbJummG9rHMSzw3aZo84QuYH2hsqYQL5BQJuEFpNstJJnaNA6kUFd1gw8UQzvf4m45yLc8NZ55dPszbU",
  "key16": "5qfzr7Yao9CGsKZ6Ma2qAnEXsTdwGFNJYi5GxZSow8pJmCBxr8Woszx2Q4NwgV8X4PStAzKHxQtr8b77XY9RkBsc",
  "key17": "4qPDP8zFCdKPB9bEFYrnzbkEij3ohvE56TYteNvngjWX8MPWp7eYdcWqpKvEXYBaEHWw8oKhtBYsBGXc4LLrcgxN",
  "key18": "G1BET2bekDj9GTazAtfTTGaFhGZHfXQhfv3fzEikCNHYDDvp4vCNFzX4CiaLcQiPC7oG9m7FPe2mps3TRpUQNWt",
  "key19": "5LUdqqgvMhDCztjnj2UyFfYbkau7DjFsjXYR2KfSZ49XVJWAshaCHUgQLJNGQ5Tp5iwRQpTdJ98rJtCq9Jq2F2Tp",
  "key20": "4DAXm3mBoBj7jZPJeXiUScgwRqVpkvhKxKnaoV9RFiwmFbk9sWDwYpBWsoeX9xCMcbyapFWx6sUomiHZwjYoUCWz",
  "key21": "3SXRFRkVJTywY8QGKaXKK51b2ynVqCdAXKZBEaVi9tVm8LeSiz74vmLBsgQ3v6ymE66Q3oaTd6rnRhasK18L8m2v",
  "key22": "2dF9HQLztTwcY9Un4u9RXX6fpjwFgfYdKY6fngkSmkkQZXd5nWc7JEjpi13rnv6YYLp9NvH8YkmpNjewn9KUpFKj",
  "key23": "3kVkfB4e2k7UHAg4zPsRyc2rJbFrjfUkyfmwwU4NLrTkTxVPQs7MTptfQRySUYGrNE8FeWnfTjUbptLyeSkvBrkJ",
  "key24": "43sQnaLYXZ5ffZkByW3v5FuUQBmSB79mA5s9K7XCrM9zGpHcka3RacwKY1dPPXCMm6hT4H9eaxswGCiUyx4c8eQD",
  "key25": "2ef4Lp1myJjtNRy48V1M8HJf9F6mQz6YxLjHRGYhgpoxMMy9G1vJ735XEpWgKDdu9DMpuXWrhmhPmXoWAVSggtZB",
  "key26": "2wMAxE2CrLgSL6z2uWsTDznDmzx7FS9L6H2qU1tQEbZcqLAQ1TXs8zTcGWXE1hL3tmRKBNfwvvFr8PS6mRaXkTgV",
  "key27": "3JnaMgpoNBXBZoE7YAe6Gmen4u7qt1HKYS7Rk8ez35YwC8xFFYpJLv9VRictAQ3z3vvoBpJYXwbJ1AE2LVbWBafk",
  "key28": "3tPKCFu4fwMWv9kvnvmjEn1U1NsJ2FMvUmNP6EywwTDqmJWVjStc6Z8AYZvpzqFugQVsNEFEaP3oAMqqgB8pqd9F",
  "key29": "xXd2zFttbvRsoXvaDygUUjazGgjzdZidWAeiX2BK6EpqPnXwrvCQn9Gor31YAttq29JurMuhyEwmBnEuMWKCxsj",
  "key30": "3rFsZqasLByz4LLNUB1RSAmAwrcxkzbFhwAz2RQr6t8MwgQFrtB3UHdfQuehT5pGLaomd1tEVntQC1DeAcmUmBkj",
  "key31": "3NDTvfrTpGbfj4hzX8apw7BPuSYu38dkBLLi1eHhodBMAVBHsgQ19XthzDYQQ239x19kYSgwwhxZizdifWBvRvnS",
  "key32": "5UwiQEsibaWRWQDVtjPFvfeGkj4pCyrRjW6K4nyBcFKBSjEkHQGzco6Zx445SNqxCr5LRwVXYdTwWcnPitweyxNK",
  "key33": "5Qu3Mv8ShBXY37hSh79EXEMPaKE9foW6WAthHm7p9vApcCcgoVC7P2rkPNuT9iQsGmw7TvsrxgqfQVpAo2KAF2U3",
  "key34": "2EbgsAbg5eiL2WvoomugFpkNNC9VDHxS6UmdXVqj1knV8jnmmVNgVVSXv68sFWgXy8DCedYd6JRoFnNsxbgZTDXq",
  "key35": "Tm3zbCJzBUowJRw2EnR8VHUds3nKwQhTtavBwiD63aYhoLxdBnR3JuwF45uT9nrBBUwsjjbkDiArQ9JQQtREMNc",
  "key36": "AoCsufj11n1trfupSZq5ADGcJ8p77Fbu4ZjtT8BM8sMNB68D2WnMf4sHBB4rTy3VNmSZqxnWiVtMnuvpbzGrdeb",
  "key37": "4Mpy1c6dCwAmUgD66dSdKr8JMQ6EUKPpphTBc16tnUv85eogaufnVbWr2YJ4Q4ZaHXNLBc2UhoWXmBDY73wmUGEp",
  "key38": "3PELTM3nip41nooJPPdwTeCFECwfRGdfULtP5w9ukBXsfEknfcrgkktJ8WaiznXAQ2Kdh6TBYUECYRqrU63NrLPn",
  "key39": "3E4x1nM6CaCev3RCvZzZocuAHpsVrXu2BscS6bU2DgdQ5XhcQrdMi7J6BE4qm4HfKWx86JSd6HRy2Aed95V8iaSQ",
  "key40": "6WXodu8sv448DJFv3s7JuCwBdcit7EJ6g8funaSH1sqHg1eaygZDGZbgmnuQ3iws3bXhYXwTRjt43pBKa7nZX8j"
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
