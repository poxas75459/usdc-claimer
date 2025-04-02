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
    "4oR69Ki58ByZSAF9RkYbHGPKLq5GcbfsoFyLKEFVk75EZUGERcmkTRaYWNipkvrzokaM1vw2vCnYLAedMvdMXbjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6McAaXfPaUcp9EUdSPQv1t2Aq5bHYANhx8Mtzqc1CueYNavsUhvPjhTdkY8JK5HukipTqistcFqka53ZsfdTKH",
  "key1": "5tPoA5EywzJeSjLfQz9hc3ZhrtPsfQ5WCzk5S5zqdhgJgPnALfMG6pXzPEv4Lgyjfyb2Aqog98FZjNKXecoNF1pZ",
  "key2": "26rX67jApPUbeZ6AS9J1zkVPEX1hR3iP2fzNQ3kYC4muFSktRSzXyWkp7StPJVdkMdBjrnhGEeaGhWHLjq4o1Htm",
  "key3": "58zaK2JeGYabRGo4BdkuRQdMCxP7eGx3YypbVFFdrobqCnaPAsVtpGNKnQdb3trGRbiT2W89avSSYfogYdm6LwjD",
  "key4": "2aUK3MHi79Pz3d8CMhXLvy6RPkfQHmrnU7sD8MF95pjx5zFh534XJE7Rh4TguhPwbdztwSJ3sSUiLFLmF4TYTqcS",
  "key5": "2CB3aZqK63cF8akYUeRHyUYtheQgu5dfHqySqUW9PU19fMbCAXLTu5eC5DpJcirKGMmZxt8XHmnADtBW6PzMRK6t",
  "key6": "4Xc4MkJobyDpSNP526XYNV96tFGf1gBycKoAZssLS2KBuvw59LwWvuTtHviXskkShwzJypjDa8H22EzxH28QSRUa",
  "key7": "3mkbYTyjf6F1Ao1mxZ2ddq4dd5zF1yphsj6qA9xsNpnSwtVz3mTUct6rDDKp5W2e6y7iNH6tRWrgVU8CUutudYE9",
  "key8": "3Awyzvptgu3EjWNDwSPYKTkRp7TGjoNYadxQDjEeghprtQKXJtbeuE3W83UYN1wYLrrHuzKpjoWg8f8baivgdBdr",
  "key9": "3zJuUuZcfWWDS5umHKpPoEziaipAL8GUe2Mm1UkDDgtWWSu2Lagcgakte4UJGGU4B4H1kB9VCZ6QgVy7cm5fRgXa",
  "key10": "5Y3kXpn2F6XhBPBd6gTEPTn26kVZc3mwfvCcisxZnQ68JVodGSYD5fSsUd4SUyDru5qmSbjTNw9db5jNBBdHsg7o",
  "key11": "3rd4sMeMVpsJ9N3yciyaSfFds3k4FqLVt1SwbJ2kWSVGDYUDRG2MjweYFtX1cLAAPLwjg2RX2AHDP8TRpAKurGP",
  "key12": "2AsjhZhxTaaXRGMqcxgGyK58Sn9fY2W3woYavFpzFFJprajJFxUxT91M6XusDDFPv1FCGNJDV8GAoK4xiG65Eqki",
  "key13": "4M9AHyuW5jtDYFpvPV4HwX6tS3HXZzhoU6raqbuo2JKsD4Lg2YmSg6iJjpt5mGG9yimF1fEYTV598jgknnNWkGJr",
  "key14": "4XNQcQDyDouvy4U6xD21mWTAd9w5FCMYGRpbfYeyytWRbv1syYsX3C6bBox3w2MSfPmQZCzfifEs1JeBPp2iQtWE",
  "key15": "43A6WNuS6NfQKJ6ctF3Dg1hzF56dt7PYez9Fg4rmLjzUMLWYEo1avwZ92Md9v7FA9oEeU1BtSqmb7kQXNNXB75H",
  "key16": "4q15LWMzyCWoYa71AsPTvQpyxmF3HJyJKAXXDW86qsHkkHvz21UMeE1iNwR2jKzWB84jhKyLmydYRnukWbstz5xc",
  "key17": "3HKXqScPHG7pg5Xd7wdq3RWgpLZDif75i2HuxpECNhdkERo7JU3e15hsZzbaNQ3e5PiKVRYw23fNkY3pAGAM7hVz",
  "key18": "5TyakjB1FyGKXSoJTMFgmajDcVKTyk3TCw2gqQNVK4PQaXbXSN27gWpGzq7XUFntkhkuJg16iCpaBKpcBAn6szmP",
  "key19": "3LPTubpdcQrzyh5RUVHVJ4DzNhFXN6txcfFfpVemSZuRVTCK1DHKB5zfApaRN8zZz7hi4SxxRQheoJmsJ8T8wKGu",
  "key20": "21wNMGeiRn78mdrVXwFNqdyqiQcvRZkvkgYEAV85ryf1qoApqva9yw29X1sC3vtYQyBg4NY9gUGkHWvGpsdEvUsz",
  "key21": "4nn7pqKzePbH8trDN2BLvkHXg3YcZTLSxyXQ93kdQxmGvATETdy228JYM4PBNxcGj5MS2NwV6sLKxAnenmkRZ3RW",
  "key22": "4PADaDqg1gubDvnrdZ7wJUFPGm3eHPc1z29kJ6uxbWeWDcrZJFcAtZnNARnAwktLGpP4xSmhaJxC7GThFmUex2s3",
  "key23": "a3PsckAvWuKMWLuaCwZEnamRo1cww1WeCgd4rExfn8YmPVTeAm7Bnx2JLmcQbP3DbAfbgCsgjzkUE8ktSdM8Cnq",
  "key24": "31sZffYJPRhR8i9UMqZMs4CCTx8mu49MF8QTVuReJN2n2P3jtYK1YAmnFat7823YS2qhg6TCGSmafs814wm2MC3B",
  "key25": "54s4TK3urd26MgGnUCB1rGgrUoPwVz7dKKNA84rg4wKjyZSsHEsRDssEpPaBTJ1JRA3NuYvdNdPD4DZmyr4F5cuP",
  "key26": "2rVH3gCPfaN8UHVWJruHEWTRzdjxaPtTXqrwZuXfYwbtxqet4JpUfNKvr7ywXnzHAyvJa9dzMtBeDW9tS7194fvY",
  "key27": "4R6eyWFLDg8ELuroLAE4ydJ46i15wETXcsg2VmZb6dvB7guC9PL9eMCSLoVmJyMXjuKYbMptBKcuygHwiWE7gqfs",
  "key28": "23L7gJVdcqKFPDMyt3mDUZLs6UWhxtknKPWrkdxsGeVDF7raRDwhazanQ4XKaCjxt1gquMYC4QSpwebH9eZaXLb1",
  "key29": "2sdrM6Sg5RbkVj5rJVH27JHihwniQRZyipMHifud914uZcAJaCHtTrxx19ifjYUn3tmkC9VThCXgxLgfTeJF2V8x",
  "key30": "3upNqx6pPps8ZJBY3XVaini98q6hUmyk4bAXCr9FJ6oBBWeNnCxwAbFR9yRnrmAkRG3KfkdBaXZdzMwzMGL924a2",
  "key31": "47DZUX63FVAVMCsy5L2hoFqCjuSspqyE1MmyZbedc5See6Epx9uHcCG4QqT6cZ6WwJAd3rT9xx9YfzBiKbkZxdSm",
  "key32": "2bfT2zgFvXoTGGaSbZzEM7fpciVYqyfsxeyLLrSQGke6LLE9JzFo3wBBCq6JFnxThQvSLTDWRYoAFy9ECeaR1XiW",
  "key33": "5CmZPAfMu5u4yai2p91GxUo8nCMbsoX9qQxXQ85gLvhdyaiKvMSKgXaYKUfgqK3wpFMk7PdxrCG3Fw1FE5mwUoaf",
  "key34": "3C7Tnum83NVLV3vSwiC28n2wG1M46eHyjSnyJSBDgXC9cMXEtU1cUFwtXyfD9cmGsRCVXzDBBQrUvcZ19VBqgqLz",
  "key35": "2sCunCN9XivuDYdqAZeBY58NzSNSBC3zCcfsndbvbmMZyF4wwK7hYJEaw9dT13hxsLhB9dfZDa4xv71oCy9pcJTE"
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
