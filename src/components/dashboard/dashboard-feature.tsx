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
    "66jr3Di8axgsicwWp5jQNNvf76j4zc3yQ4YZVJiLFPr66hs4XGZhibC5Teb3Db78uHVvwzv6q81rPzT4kMxpmqKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPxeBaGLiGncK755Ccwm2pWpmP1J9mUWvLj2tipp8d1mfgMsWQ4zbsaCwHDj9ytHWvs5NXW1NTtSKCm8dEubRpG",
  "key1": "2wtst1JCmTWF2CXEzmgrnTdN1rGQaMef3WuAeyQGDr6aWbBRW4uNyrs344cWvaTwSzoTjQRoU9q1DztCvKy8gKio",
  "key2": "5HZMEHjBmkfAqqSzYg2Xqyfa6iVN2J4BQHQrXKhbngk5SuexKzyUHJrNZyHyNU6vYpQJNSjsAxSdiCgJp6ZsMnCK",
  "key3": "tFoEpf6yymEXAELyxChP3xGR78E4ZwZJxjSPJrZWH8sR6sMnLjjeHQi7whVYBSxQbx71nXEGMhu1nsVqM4jr98m",
  "key4": "3mYfBPLXRwSZadncr295ExLiRr615SX4Jz3ZsqyvcNTYDAJ2Zt8MyjX87o3weS7EUyeZfKFHPpoGiPsNJXqS25PA",
  "key5": "2S9GtGjFaZm319aa1UrW5yFNBThAM6BQ9QURxxdV5SqVd3rQgiGQuXwGzmwKT9wuyJiv9PPWhJs152Dj9PDqA31j",
  "key6": "31rmqh5RLotAnCDydsFqUiBVwdJampB19TD2rFc3oF9fDUg8LdeUp5W1tyqYrddQLd25eVLAsTmnqNM4n1YNHM5f",
  "key7": "4ke7BrW6wbQtnNc7MYuSo7koNZCaWs4k5hh2dLUP9Wr8vju2eP2KDXhYRCBkfeyiks2dwWVScFTRJxACxpzBrbFR",
  "key8": "5hMvif3mfeNHDxFQQb3nf7y2Bxwy9XFumKshD7EYicfufc72dgAq6nS7q3LQmPyKZM9jFsWhNx2Djq1LtioYQv9y",
  "key9": "5Jyo8qWsMSruAd9oYz5NFCkrFw8sosutouhZumhpjXxQvr8Mj1H2Lv7tDpGiLoQMtT7ViDaHYvgEgBVjXkZPxXP3",
  "key10": "2dsQVqsD4wqncyo8CjLYDV6PLrv6EXjd8A1wzEZWmiP7NmGi7h8FNjnFsewQwhSz49XA7QhpaAZ8nCfouAiY2A81",
  "key11": "5CE5g13UY6uaZUHc8mfondxgMpdvtiK9uigDePKE6aNVf1PZXJeV5WLJekZkZEnL24AwFUdCPfJ4PBDCdH3nonW7",
  "key12": "5YLXCY3Nqe3CTtvabWdWXHSqt9v2JzP39UHcuXK5EUung6Kt4jeBHnyg1XANUNcJWMWVyb2p3hAQjBxk4fBmArDM",
  "key13": "Foke7bXxcUd9c3zCGnkJ3S69v1XdKoahBfKzSoMRkBCV7pmHwpfV13A143LKBAYt2XZrVhPwNipoEZRZmuyLaf7",
  "key14": "5wmS1NqdHpvpB2SkMZU7QBwhFm2XWCL3kaZM8zi8nFrZxFzh51Qiau1S4NEevTzdU8vSQR18CFBfaUySP5ytRayX",
  "key15": "3pqKTws4KA2kDfoGGPfhMf4qr3x876FLuFK3odcfHy55KXo3nWUjspRediXVz5iaJGfbbAwAPdpfc4RL9YyWiZD9",
  "key16": "15VJLckpYzbTPDft3dAY6D1WfzQYv3s1K1FiDyrmigr6R5QZXbSugz5utCFK1p4yfcEyQyUmQuhathLKoTLnxnQ",
  "key17": "3mdJYhzPZYm9tdCJ4wNDsvUuuu22Qrodz52hqrGnXHD98mBVqRcVhPChWUt9YR8wGJk5ghZkBnUUYCkQMDLR2KVD",
  "key18": "5GdA9Z7VeS4kkPBmfG3DMUMCozmy1FZhchST61PCKxNxYbeyYMhrXsTqTT8Q4w3kMwpa6RHrqPctv99Gha3PXR63",
  "key19": "44QEgJr4LF8375mg4mTB3a4FaVNZAjDiC4fxYgKw6pxg5M5zXRhGfVsVQMRoJVqaNFHTRfUNLR7Zx8XVvqZ9iF59",
  "key20": "MPigKLpiHdi7Wxt6yY8uMFHzbAFAdQmnrQk3xfNt2hBzd7xGG3ZBiTagaLAbSoZvSwNwuu9iB55d7Z7eAwwrhQs",
  "key21": "2iEkvj5JoSZdWdkRyecS2vMAc5ahhzcQGqZqncXg4hMYbrYijv8cNrvX4cMPcuLTsEWjHCPPx6RSachq9EvTjQPo",
  "key22": "4W6ngjTsfCVStxGLBFyiacoSy8zSyy38CY57xAJwWWLG8NCkSKpVkvmPTWceyTFc11ricZehzyu2j4qkkA6aYqg5",
  "key23": "2o3DDYnAETGDESP6TbirAh6WzbZPHyTJqBRg6vFEFhjhweWzmzN6dBqvfd9NsqxDsRXVPWbea5TqsBNy2kaEC9Zk",
  "key24": "DrTDfYncsKEySzkRhKS2oRvp2PVoTctDcTmR2wuMJxXWXiLYBhNLg7M2i8ijwHxPGgFwaJv21gFAdHB5qhPqFGX",
  "key25": "3NKAKLhzSiVSSt8JN5yxESXx7y3CkQqEQrna9yiRxfFsnn1MuQfSyPUvm3smA3hvCF7Rdmc78EvKPGypDxjrDmJd",
  "key26": "reCjbyruaHcnMQSTXi88g7sYo4mMhcjzLFRm8QjfQehRiKBsxvV8iYL9tuaKKWjrvQbUBxvMGRv9gvS1baGLX8t",
  "key27": "4UT76w1S9WU74a4mc93haZaBeYx5CVABanCP6ESvmPfdXDvhwXksoXmKdMDFRDRMARNPeJcBLKBoo9ZF8Bm6qkbf",
  "key28": "4LZrUGc5VK2cvBuNGuBcSQbzs4CxUEbd389Emhfp8rJ6Wxu9iR5YJnGinvuwU3btKDSwKKBufC52UnmCo6vVFyXf",
  "key29": "2tPhLGona29DqnmTknjyVf4mzHqtvebVi59sMgiKgSRtbEpGcSeLUp3mpFiZRtSchn97wrcK53BMJCSe18vGsioU",
  "key30": "3JKoZnTswL8Bokrvo2xDV5FcD2zSkNAgqCDP6WhJECoL5V7jJXoLm5RgyVSBKtbuK523QAwhaUCNZtp9o2m3HmDB",
  "key31": "2bL9dEJDuyqMMLgcaqoRDTHCX9QeYrBZGWSDsekiirWnv5efvNxmkoHkVsndr3RzGc9FiAKoTXExEdG1WRhbCAVG",
  "key32": "47dx7hamvyqfCeSXE2RfSbQ5kyrNtiJBQAJc8k16TUcX7HPq4dJYbTiYS7bQnj4FbxZcvrBsMJj7abTZYBSVxrch",
  "key33": "5acioMBhs8bTzuFRhfxCpH7oL6dioa8UEHcpu7VPa3JxARu5b7HCt5qBByFTvpvxgNDQrTEgqA592Jc82ASmb8g3",
  "key34": "mUJXi4W3Gvf7WN4GjyTP9mdBzzoUCpi5uTWEM4AYToSqfX3WzzF4fbSM1L3Dk58HSSqNNdwrBZiHt7ovCnzFfxY",
  "key35": "5Drk71i3XQibE2DwMYx2fdY4uoo7HEuHtgETgyENoht5aBj4gDygrow2nxgf6d82LHWad9Tt4rGmPjDciBm84LL3",
  "key36": "5vwUFkS9E4nsfzErdoTRqQpD6DtxiceK6Ag7vgJquiAmq4HWn4UymFcSbpYBUjh4UcWquJmGqtsH9NmE8rNJzL3",
  "key37": "5XXYRjyQKacyeSJ1BE9zo2c8FnFzioAveTgTHX8EH1esJcvR21E4p5rvyq4kZA1hbdrAEtYTB18AW1xpKfoMDmEK",
  "key38": "UhYuxCMgH3JBGtcToeRq4fdZQEd4bR3FnBhTB6qL5ixd8CH9rRUmGTnAL5NDKJMGG5jNUsqdCgrpAaQvTV4WXQN",
  "key39": "5b9RYb8i9L8j1hTzqYsfouHcxAYnEAXHAacVnsfUiCX3YtimqJcDC1FRJrGHZHUbUm2XWCiu6TgbiMqTGBw7icLY"
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
