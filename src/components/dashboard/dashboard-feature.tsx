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
    "57iQZbcvdF2i4vbnBMKNHJmvNZsDmSB9eFcttsHgU2jt1f3rwE3NLUqJYjJvfUt2U4MyMLnJCJAfdQpCyT3iKFiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpXHzTzAdXDyLk3GyjqiSTYU9vybRwSzYBDijHs8NRK6QxTiwtUCdWVFEJLFm1nGH1iuwoZW7UWgEHdhJYhXo7y",
  "key1": "3mHSmHJFFMYJ5HSCga7b58CqVuthUkCnYSzaf9TfJSUB2cDvPQsaQKuUCUvk4vuMLxtwoL4sK7ztjjKvPXN2B37k",
  "key2": "boBp8FoX96CVQ2TTdHKHS1tLRiEDDFz2gAeEam9gYgs7PFaZE2VbFcHrtLaC88mJay29iigPgKM6N7tg8m5LjUa",
  "key3": "5hxryGnMdb6WuaNuC1rgAHL4gHgUCaqkHBzqScK558GuJ7i7MdbbuWC15pesVAKU1KgP9xq3tqtXEPvC1d2Rhtor",
  "key4": "3ZuwG89kph68AY9ejri96py3SV798QgPpyg6pgNuWEPpBEXPS3r6HMWqadZzKng4vUavvScLuiVj3Ag2so9TAt5K",
  "key5": "2XMy3DYq1q6TYcDEeqT6FiiTzy4i1RPLWPKVA8znpnuZx5goCvzwXUhjR2h8S5Md1xgGxipWN3sJLkBjyE1mBFyh",
  "key6": "aYgZucyUi6w51Nz2KEu8wz34RLxXxUPFDpjEvaWm62hatew6F7BbS7gUdb5J32aeUDA3xsXfhHapJVaj9BkmbeT",
  "key7": "5JiUqU39oGfboHNgFusGFZ1u8BBzqRk3ezwCKdtjsqVqvMVuzP4aCpdimiLwGJ7D9JGb743cLaS26eNYU52913BN",
  "key8": "qsG3s5dgWSahERiG9NKEyrAsbd2xUQw9id11z8yDY4aiUddGS2Hr4KzfUKTHBqeDjzL4SboYNRY8XVurwvxg27f",
  "key9": "2NMbvdA45jCFCtJt4bEfFj1UkknrmfyJmCN1nkfR66iapnfKby3JcKF7TpZ3WXfqQcDYcAcvkXyV7ZU2UoVX7GsQ",
  "key10": "ZF3rgMvwo8qeWr7jaxcaZFEZfvKU9HQd7hgLUeVE7avaobWpiys3cmxprvVyJ3YB4q6TTT7o2Dnbcr9Fcr5Yv8s",
  "key11": "KvD7rK12669wc4xZ2ACRS1fNbHQ9JAW5YBdTSVgdAwfXbov2HDBd4dWNeVE9HXBZRtmFT43S1mDjV38yDSGaTyb",
  "key12": "g6ptZtSuuHgTVRi4VoUimYez9gUeKrG6QfLNqPg9makP6ZY1Z71ZMCVS17aoPh6WLULWM3KAkGkbcZjmaiKapJF",
  "key13": "2CVUgyLwWAsy3KmfXvTLai2R9vPFHhtnFTkGQYoRYUyEoybXz6nSihUEbDJLLfJy9cof19bZDHVaLbjwBFUhbiaV",
  "key14": "3RsUjgfqf8g2LKzZ12LDGC4k6Fr3xL2HP5VedJYCQ2Y4u2oXyTKK7Ux1ZJtES6kQEhN9z9T8wGZMi6YCQheLx4bs",
  "key15": "2Esd67xNGUme68faxZLqxJAApz6fhqnVfbj3xq3ZQCfWwbwqPKJvQYLqPeWMmsmcCkEd3EPVM7T2yjGpzUnEyX7C",
  "key16": "CE9eWyh1Exg2fABtsbx9PpfSozU92GdmcHZprAGuTmxkTayS8pWngmZQj9bkH58LXpVxDQxVcFeTbCyCYrE7HPv",
  "key17": "2SN2HLGneXvPLR1bykj5MazrzEJHaD4yVuXYcft7qAJ7CKtNrFGAVNZvxFCzhMH9sec27hafFzBSs88Z8cfcFCGz",
  "key18": "5HqgFUmeCWmhTH8VzbDubK643LMEt8xSKeWJqDHimJfpQcibmnEQKtqRzfCgk6sRLy9UWyNGyvEkgSBnLXBkEZeN",
  "key19": "B24KnCVfRJ6wiwNC9BUDS78PifGnPTfurqnoNo4WJcQj8zxA2dkewLw4aZibMZAGA7oL5eSquo8fHPXRjdGcsrq",
  "key20": "3QTRjLcASMxozhbMECzwjXzNLhbcdihh1SatWvd5EvRWs5CinXcjd7AMrwcghMZGusXYcB7y4zP2eg6AQjfwgxMN",
  "key21": "4UR6PYEa2WAZaYCf8WKUc3dkzpKuJk6nFw1MGAuSV7NpmPpk47JMq2LWUvVYqdks6riAQ4ys7t7DQF16R3otFynn",
  "key22": "32btxC3MAmBVwuiTNmDbZ1MU2d1znij5bKhPC5LuJ2jomCz8uYhhFHqSaCUGrCQTXvo2ZRGxkUgygaRLzrk6GZgL",
  "key23": "4GXe87YWJTQGjnNGF3m782fbKHNoJKRNDmFuSArbqSHhx8HdnUqiDnQ4GrEdxYi1LdJMFpgdVp8fcMkB4BhURq19",
  "key24": "4gEDHubaxXGLwVQ2QiNioPZVnvW4ioYsoMzVQicja3QFTA222cYeheCYuJJfSuKb8qbFWE4cVS6Df78MwLjgKavP",
  "key25": "4gCoKecFms1Wa3wqeoeVK1PkxwDame2TTxLvGnmJKVyj6CNcGYu4Degs8QwXTZmzAiqXDCTD6i9yq8CidLNF975f"
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
