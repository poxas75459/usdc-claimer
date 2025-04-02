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
    "5sz9qFW2ETHECFGNmCdc2M9tpRXChDqAHXdZ1GyaPMAQff8T6BWs5NB9s99MPyeP27Z2a1e6YwsTX8Uhzm615FRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eDPzRJLXyZHZ9TrbBUHyvcA2s32b589P8G3z2o4Q2f6Dznr3mj1c12CMnxwGzR6yySq8cSDpGtVAj8BQtcxjSMV",
  "key1": "4rDco3SVEEX7cjRJsrzhbzEEWMDDcvXtm5fMbnRLKfB9Yqr62CGjcXk4TAgxVg9f22Ch9H1S9bMbxXcp5knWuYpf",
  "key2": "67qqm3XrpuUv3bs1RUV45g5DnKUSBeyf4nANWSJdRcYxA5Zz8DvmGx2pGQjDK5FPFBTBgfW6d4pxEaEcyZ4f89fv",
  "key3": "3B4jb9xhPnorUmC2bnfov19zSSMnRa2J1ue1qshhPkbZ7r2W2Do8nk8X3Ce1hy3faazhQdNFB1PLTnaYBNa61xs9",
  "key4": "3hvN4AYPH1ZJTD2AXACMmJg4mJWnC5ZjW86LqGddyKf2wWHHkztWmKdC7A7e1bi6dmZBnh9TqyG1s8d8pkvQfoVY",
  "key5": "49CaD3ttDKkhTDRRAxkQuaMC5Bc7F7PX8xWJZnx2czSgSqEASJY6b8hx5aAQC64gCNuBZEcZ9gK3m3NQGdHNSqkj",
  "key6": "UgSHyUnDMvv3jRrFpJJpJo34QpkBCgqEACXHtmBP3EtGZ6nL5TrNa9E6Q5pjNgEVEGJ3u1D9eUGLFesGLmhjRsz",
  "key7": "5QnaVvSQHiQfWj78KbXKec3ub6ety4wXAZJ8dVHoHjbVRs8QxeyNFufUDT15w7yE1KaQ3wZC6Yw6qtFaC9E9JtvF",
  "key8": "579N1oqhkz8MAEF5y4ewKYGvpYFnQnRr5NejWC6EjCAjEaTm7s9n1qfNeWT5c9Eg6GhCuwfxGacn3Cri2iEbG57p",
  "key9": "3DjEAuwNhfzudWF3PXSmgaYWtT9CKzey5XpiksRL2ZRH6W5JuxzQHuBQjzxGGoc9Qjqf68D47psMtWAKdvHhCp7m",
  "key10": "5b2nFoTCweShFEaymRZSxG4eY4dpCxv3Js2rTvUwHkP7MJhNXDnHs86qpNHwaAZcWeTyUXgTToWSkppRvXJ7W73F",
  "key11": "4sBkbpyasEYZQvM85b25eUwenhzbSmoUS9VGPGcuVnSUbTRsBdYMLmpV68RWFUZGveuzPyCmkTeg458p2puLPFNm",
  "key12": "GGAXXuiiA1oktJRcrCNvWhnNaem9QaWK8Gwk4uSeQg5zpVcZ5Wcddhnt3ohLNH9Va2kwBH1GuQmqsDV3xictuG7",
  "key13": "3YrLJ6yfTKLyNwu2gNxmwLHcwhGdg96C3KmQUck3SNPJ9jcE2uYm4zxMpt9ruTG3dhcmA54FM7DX6AY6iKmCZrpS",
  "key14": "47RdNU3yGpwsGAvMggD4kHzvhM9NnHMi2MNvujLnp1v4cKCGbztJyokZPeNPjwRjPKEWvj3pgRMVDJ8ZwCFA3UvX",
  "key15": "pmNbDmbvKiEmBUgXtqbGsU6An9UouexE3QBQUrKGfzdHiFHDag36veHLkJZgrarh9GUujzg6Hd5iDAqhXkAw8pi",
  "key16": "4wzhYAn8fc9DfaEbnU92uAhBGTJNhbSD26L55pKv8DGgEebybyYNhujpoFxAdNFy6r77UfpaeTcXd2DHqeDQM4oj",
  "key17": "4aAyxAwsfrBTvaFAXKf1Q5pWJT5u3KjiRKyqh7qmdaJvMcUgRs6jDC61HHfVDTwVVAbStvdjd8VHvSnaoDECF3sn",
  "key18": "4qshkJpexMUcMiAuXD5TDvPjCK4ctBmwTDTKAJUL4rVXHkKgv6KDdTrH83rWf8neQWFsjpmPrGUQ2waVY6Nqzkgg",
  "key19": "3pUiBiCDHSxS2t8dHtyvEDJ4z1EqtonxzeMJLLGZEgZBUUNDaZxyXKgYtNRWjwXQ471s1ttMovuYgzmRCbrfMBfJ",
  "key20": "3jVH7LbB33wjpF6oV2DuUSNoMoztyg3rLp9tuMEMSexMpk5KasJoV2raRmZNzMDYF8yvgkRLCKFoq1J21Xw235ia",
  "key21": "3vg8hu41uecQnDn14o42zL6U6rWcUddrmnT67GteMThHUiHZF9Bg2TDdfNzT9SwwUJn1fBvcCh7GNRHx1f9VVJu8",
  "key22": "3q8GJsT5dYFypdSRytZDsksZsnroLMaXE1pXFxqQAfdkUiqwFnJFvM2ZDhE7iHRcJjpohembVzsAqkCLEYgj4zzs",
  "key23": "4ze5Y7Rg5xGtYTfMav4v739kak2jeMUuUeQ368WzTt4UoRyFp8E5n94sRZYE3hXbdCcZ3DNQDjaNjLfRsXdALDEq",
  "key24": "5ZnP9SFZ3xbaEJbKkoPYWtY3JFVPTG7e3QkiS3gMqaToxiUT6KvUvcnZZsgDCuNNpdkDSBNtjBR9nyP2hPhfzS8m",
  "key25": "epzr1BxConzUMeuRdTQKVZCa4Tc7AVHHeBZJAMhhkEgNGp5ooTy7Krv9HYgqj6EgV79C9vyxmrvL2oWFJ4ekCs3",
  "key26": "2BvNs18KyMJ4MBzmocSzFMnL5PizicXcRrCFnVfjxUCBMbkgg6MeZG2AXQFanSiiYrT4zRgnu1ov1id8pR9oJEMU",
  "key27": "3NnjJjvP7KnBk1h7pHRMvmX7L35Ek5oVWG3jaXKMbP6p8epesWh7m7CXuPAeJujoFkLoU6WVLNJhNbbrunok2Csg",
  "key28": "qJgTppVbGjLqbqzpWB857p6AzdYBs2dihnQxU1aZZqmTr8qUFbNk5t93vFgi4EZSanGiim7CgAwdvpdLQNmAtFZ",
  "key29": "454fgVc45L2a2Sd36cwsXTgxsh8zqntiviS26AWAThKCEi61ChypJvs3s4DBbxmEwAGKnogrNgHija7Wpt26d8nt",
  "key30": "2H8vvTAQTtF1mZrGTnkecim8gC3WVeHmz9RW42AWrnRZ5kfUGmxndjRDRfjug3ph1zCqD8QeHte1kkfHWEB3f5iv"
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
