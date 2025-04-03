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
    "24naY1Fpw5Cwzkk5GAzPhjyaMP8yxFarPsGcXsVFCPLB5kH4fppBkTAMKgCiuvWomm8G1ymgHDUzoopmZVP4Td1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFo1W6uuKyWrcPiQEnn1dQuff2k1jZ1ejFF1pxsSsmNwXMFtLsxLmyEX2gTYpBRLteXR91omJaCETz37vNNfmi6",
  "key1": "3hodczC32dqNkDhQV8MSFcvvnu7m5w1ykE7J5MExS97TC5kfBRVaAyasPMb3gABbMwNtynx9p2wBfxwmXCtfV5Mz",
  "key2": "3LkHbLe5RbZV7Mj5uHjyDTQtuskPvTf1Nf6P1U35upgk3DyFY4xmhN3uu8nRYpjZMqH47fF2MMemGNBUjrqZFpSW",
  "key3": "Fng8WNBK2tr2kuMxxnBMFEzwkmCgg6oPQqkvczR73mXTm7eaJBSV32FczUwu4jPFLe3g15BQnznJdDUz6FL2CFx",
  "key4": "3ukGwZMX2EURZeS6RohNfBbw9xYPgjNDnX1JJBtHArx37tztG5WWBrRXZvcxfuuWMaHxtaSrNnSAF3momd4H8nTM",
  "key5": "3B37yFgET3GKphVM7To3jcK686JTT6D7cPnXhmsVTK7cPkrcLBueKuKAb6i9gHsBRrM6ySVm15zVgYKuutWPrs2X",
  "key6": "3YDLpbBw6mXPuJDA5JyFZUgZC5cuBevuKRxHWouFamSm8EJ6ybc8pKwVAxQzY5Ki5gvDchXHbFpiMvPiurSi88MV",
  "key7": "54z5DHiAGLg9zRW9WCMQH2YrA9DkwhqKyDzHRqiG2evYqAom9FkP3gSFBPNyGLhTnyJrpRoeCv66bB8oEMUzAHRb",
  "key8": "5mPy7C71UfcmahTgGXMkhj7M53LQHzdSCpArixPbNC1fKfnE1dCciAi61qzE5PdQgyc7gUaTTE5WLNc6YQq8W7Ks",
  "key9": "4bXKadRG9dj7WHgN2rtmqmJbxyzUQBnc1c2aFPfGyyKMfKYVcinxJEyku5iGJfHE3muevmMWrqYLeD2oz9Dbh3GV",
  "key10": "65481JtG8KSgipj9YJPD4gJY9zQaqN7NSj4NkX7h8TYC68CQagVhSHP8YdJ8HeCZWFjbJuRTiNVxXLzKR7Adj4G3",
  "key11": "2zGKToaQELQ1AhiTRnsRuZqp38BrnUfjvMGtFEaZb46fUNxVKYbqLWWiUj3EsidvtUntrPmHa9QGHAQ3poyJpowq",
  "key12": "5Xkk5NsZdK3DPPTNmSYyKetRq23FZr9XVoYBGqUpynsK5SaD1TnLAeJgLagZ1jeqUeQKaN2Y1i6Kce9LKsCyzj7B",
  "key13": "3pEgxdBcTkRzJHYKmwU3FFQd49G2FziyFjJyA1ETemZrgnnC6mXpYeFejFwdRRxgcp8x8v3b98LHVjBDWLAtNiRh",
  "key14": "4W8Xbsjsrz3WYE6bvM5w99XVYrqwb2vW3fqRHGJKdBDzPnUJawunrhd9wmtGs4k6rngUQC8rriuTLjwrgH9J9cWk",
  "key15": "5EMfS5jCXLdNJKGcAxmCCzUKEUsQZdCj8ThdSigfqgyDSddxELf74uV3q1AriUncHFit5DaeLvUNe6mESRYkoCpV",
  "key16": "4REeRyRE5Hgw8zRAbhBmTYQ5LxFANzGVq24TTPPH6Vn5LmvrWwbnNhp4QJyVvygoccX4pBcQt23GhU3uDLxRUyfA",
  "key17": "22ypyTD56UMiLjnYWotnmAwfykCyiZKx9qU5CH6eotMvBzx8Ddy5WNsr1prFDrqEM8wWba2AivqBuQezzGwjmVBQ",
  "key18": "299tHWc4CzDSNHhutgVCez3SGGY1fze45cnkfhXSFM2p9KWpTBH9kkKXWgZutxZGDDP3qgyUXpLggidrHpNG8qrQ",
  "key19": "Qw6MTETbECAUtedfrGpQ92AAaC3m6g1wGug9G82J8CVxDGoeW6no63taVbJUSqmro44bjfB7HhRywMQjzDtFzkL",
  "key20": "4i2knRKQJ43sGK171sFVA3Gk6JpyYtpGQrXF3fY9EHaseiugHEuMDErtCfXgF2rMshWnKZ2FRWpYSEZ9p1w1jwqM",
  "key21": "3i6grrLnFxq7VkgkCd8KZxj25BEFnAdto5k2yfZNaR2ZBLAcDr266cnBoTwpbDMvYM8az6mB15YyKg5bk6B956UG",
  "key22": "5nfkbtGYVxLSvszV5NhDuZBUMPnN9cCQfoihQdsdKKWUca3UTqFrWRhoXCQEZ45o6nGm38Gbr9D6CweCn5HrpCEP",
  "key23": "2KPeE4trsQknMQVRAVFNaficq6WiRF3syq7krhBtiUng4fCnzgKhZmKnV2UomjLCkKX3MkyCDYT16zCg421aEPnc",
  "key24": "5NQDCTz4DNVZFaF1ctJy7LJj6a7fhLjapkEPEGmUQaNn1Sav6mrh2WoAC45Xf1emxsWZ8Tk6DLkJn29DpjFSYxR"
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
