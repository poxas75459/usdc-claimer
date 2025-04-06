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
    "656fBPcrr31w7iGp3yRE5Qq1XMDHkKMDgVmTrdSQjcFcMeMH6TmFUkdeJtd27tKFCmJPVBjf9bec9GcHjMcKNdjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzHbeSXN9pKNupkA5zQAEAFTrA2BpKSf6ExxSfCoukF7jiiaZgC53NJn87F4ktcL5kU6NY51Byy2iKF9qPBkgp4",
  "key1": "2Q5ty3FwoEreAsc7C99WDbfrd1igB5gvMFCKN76MxgpMvdTGBf347GS5TEVP6YM6ht7s1U3kpetmTQYKhU11yVze",
  "key2": "65E7T8XXtkMNj4ovZES566sbWqEuV8b8JAzuhSNqqRVYTN3mFDZSsgTpzrC8TiBYPjk3S4BauPXicTXgeYmaEL49",
  "key3": "5SEZ3x6SodNBVBHwrSHWxiNpPbNWpRztQDXHXUj3rFVvR3FgiDunGbq3p16De8iibrt3jHw7g5VsdN5dseTnxm3z",
  "key4": "5WHrDSm8wAGZDdMUszRQ8LnobhuzMcNYYZjL3FiyPjkN7kMyEveJvPxSvFwbrvBaim6a3RXzCd7nhNEdyAqKjuLV",
  "key5": "3mgp92x8vTb5ah6eS8JHLMFZdY9VcLT9AwgDvEAWSwpiTjoiJHFvFu1NGoHxEZxQepXwWyyduhs64AAsbrw9ijGf",
  "key6": "5UbJAAgw7M9yjfLdo4U9Xkdig5DTMiyuoir6rvQHieuNq33xJvsdM4feyEa6F7hufU2BJoedzuaHgHTVUhK5pmz3",
  "key7": "4P59t5c3wrLMLjnuumnpicJc8Hqijjbpk8vDA2aJs8LaCrHftduRa4ZwJXvjkMpBG7Bcegq5e8Z1QfR1Cxz8GtLH",
  "key8": "3G7GDoS73k48mXA9REaVyLLmj94DRViGWC8r3k8TeY3RNuh4ujpU3xLRueM1ACqYKp34CjDDsbhB9fn1Aw3H53ci",
  "key9": "MJguGkDq1R1EAsfzZFEBS65nxDu7ESafaYKLBuCGMWSZgXrD62ZvkEoeaqB5hvLMmfAVKva5ubf4senUsoi6W4X",
  "key10": "2vCga3pXjsy3sX4SsacTmz7HxZ8fVY3raZPKp2XCMkGgUPX2M254Dr8BupVSR8RhzdiGZfJdKbLJstr87MG4Gpeq",
  "key11": "2y2R1LDzBLuqpVe6DhSKRJVC7igJvgU5vWD11tnFZ1Q1PASjjFpTnSL2V9yKpey78LXVY8fWu8ib81D5UBoyh9vp",
  "key12": "JZWgfJnaQB8KYG6VXQmb9uCHoEvHScXFskcitd2Vifd439oJJrCisobVQpd4W34GLHWwnW2ZBV7HnRBhmBuHS9m",
  "key13": "3JJi7y6Uh7fSwGvTGScYSkwLr5na2rbTGH1BSy5CdVS6672kYuX84SHA2hYkPU1GnqgGQJ4Emq3nEQyto39sGHAN",
  "key14": "3uNfCVhLJCiCn7LCdq8a2vbSmdSha4XUiaoNfTmbE6JVCzA9WaXnG3BaTsxbQp3AP8MEsnyz9zzL1Mtp6266FKpe",
  "key15": "5eRCjJYcb4GG5ZLTNxVd7P4VWkRybfzXvYeMvQXr6bHSoSLQcM3htEpaaX1nwSj2vdRgXpNFpwDwij4bag4EaW3x",
  "key16": "5yB2yvqYH6Hp4r7kmHKoQsAPAMSjrzv49VMduaSm5xH7r4iGR9nyv1Tu46tYTQkcvoKqTUf9nvcpzAE8bevU2oX2",
  "key17": "5dhUX7uFnvVQCT3c4hZ52TNLdx1kKEBHg9CZhkAwutVxu1NK4DkWWBUuBYHepjfdiq9jcPXd4CCAq9LsHEEYSN9z",
  "key18": "aZyA352h8cCYGAsCjFMtPSCg2iWtxeeqDy6pXzneRSFGiDHeSNqUrYzkm5LVEjTPBFZepV3UzvvMPCGYgx6iWYA",
  "key19": "47uhpx5UkmhpQuQxcopuZKPHKB4d9eL6zW73X3KwEsbT4u5oY5cBjjLG3s56emtaEbxHn3oPUb3grM93QNzJKw1K",
  "key20": "5kgLUxDatpVZemFcKC2vpdYQDQkWua2NP3jiCAupi25zPhCZyyJ2tr4xEhTsyNZ7UNWDXiUVgexHKvLo5L6TSuRD",
  "key21": "3USrZyMssvKLCDi1fd9zuxCk7Hz9MW2H4sAyeu1pxyeGukEqtGWm93h8tNFe9Sb4AMnPVoL15hUfqfML6aXXDndA",
  "key22": "5jRbY1MH7to7vioDGMfHXUzhrzWukx7FvGucRe9J9tbS1b4mVfpaFLzm2LWSca25RgfxrqC1id33Gzj9ZemWYiwk",
  "key23": "5TEen44LuZuGCwqa42XL1eMRy9UZa61aAotTqjxPq26UCXBpHcTGeBPAJiAbv7sqogSTyL3GqX8ARASg4jvqziu6",
  "key24": "3Fr1ckuknTznPZexnVARDZcdayrXbtvgLS44hccvxW7qkrA1cxSSfYwDN9VFjTZNBxMvM7CsBeXddUJwetE7R6tk",
  "key25": "tdP8CAX84qWyUfBpVifGCZmVCY8kgFuV4BPs8dxWzcys2vvCRnuAm4dugNpjMm5L25NggzM6hc3m3ztmaYakJga",
  "key26": "5Lk84eJK26STz5mHvxHx777tnNN5Z2hbFsDjsuA9JY1qcSZ55nVCp1kEZ72cbtGpJNcc4ALFBKTsWZsSr2R5jbN",
  "key27": "24HQ8UACkNJSYDbgmWcF52wzdDzxGKmQHnVz6LuyekixgqfX6W39yivBEF1cxpBep4Pu6LQ34sLWfbUjStFzg6nQ",
  "key28": "8dWavHRZx8KgnDhSdHS6SErugmEtsLNN3F8NtYnqZAJMV2B9oe92TVeyiMtKWnGx8hcLS1VrRnSCmWJkoZQJ14T",
  "key29": "2RuX71cHVQR5fzCio3mC5jSxuib8xFnbhaThvAURR8q1K58XwJ9uhM9qSghCCQDpgUqA63B3dZr9v36F7HUEkUfu"
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
