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
    "4HxSpsYdRYjHhdRxKv8pirXMvQmXf3sVtkyrhUkAbo3LpgXWzFZ6sbWpVveTBUa2dvduusBnXubDxrbxM9K1K9qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBhvh5xJiJp46R3dLAHRoZ5AnBZZU5qPsyZUPMEnLXCtNeSigyEoqusq1PhfKr3EXu1oW49hdnpiKydbukrhvnh",
  "key1": "4soBZAcoQJNdtRgd6oLTB2MFQ1FjAfU3NSpx6XVBTw229G61bhx9BXTHLLDEhnx6Jc994U8NsM8cfPxRZrxUUDsG",
  "key2": "zFpAdR5buvHpjUv3hWawciGtE8USxz2NQwoJzSmTYrrj5iaPwHKwYkxAuEtoMPCiRiNZmz7E8PLBncziz1CGwrD",
  "key3": "3wPzKYQwaHJZCyBCMg6VSCgqVJQEwWEnppNuAPkvta4EVD7enK9NHQ4kzfemiu3peYncGY4es5SwKnJVV3JXX57c",
  "key4": "3e8HVdtuGvVtcBqUuXnGvyB6vf51JacZzvNA64vmFaX58uhqdiATDenorQVeZAcvbhvLm3bqEhMycQVxpDHuKPZi",
  "key5": "4E5pKZh7t5TcEbNZeArqRPhRooxfcLY59pDH28EsfHA3WUhiUKk3rCPBYqn8WSnH7bUd87w3DTPT3WE3MmtQbPuj",
  "key6": "2EEVDvg85Hawn8WRGxiZbkTXvyBXxgoRiSKLu4yzzXK2CM7KV9Agn2mqdAzymiGAKyGuW31NMHqkXPbLrmrHstUA",
  "key7": "4EMR9BtMi8ijErmPwjqACubKFH8sc8oNA61kLW5Z1NpoRhk33hvBwjtkg1dxSX58SHPKaYJhx1JaiyVAd7PC6bo4",
  "key8": "2UTc5heiqrRXcUcKjBQqgqnaWDzxoxDayerDPpeviWfvWcnnw6Rbnx4binSzSAteCRjrSFEPZMnNeZXw5cU8EWyK",
  "key9": "4C3QfTD24X92fwqS4j9BaV6FpQUQR5QeJRPkAU2Q7Yzgx5Dm17L6sRpJnCygVhhLnsoiZPMcNAMZP4c3dvsmqzCM",
  "key10": "5denzD3JeRvhnwYL3194QR61Tuta6tBdPpsJUeX7mBW8rT7jenst6vHwsANngfp5KnGk7c1aff1mUDTuw4WUyapk",
  "key11": "5aa4nqSafAggLZbGNnh7yQ7d3JzjmUJbKeipD3bmVJmjNWEpMgXqfyegb81k6R6hfPWfKU9DwUTjo1Z1jnfr16xs",
  "key12": "3JDybvov15uHHiw2vnrRdWgDJX4qS9J9yYtNR3pFAEYvC9pxSxnGS7Ng2TA2s3AHfM6AGgZ7JGdXcpJSW5Y2ZbD7",
  "key13": "34GpLHzFSnr3bmfSF37BBizeHmerPCYVSSfW58Gvai8S7eR4Am9H49bJd1GFWeHyKHtJrJzFfZLmNYSbvqmAEVYo",
  "key14": "529xRGq7HM4zdfpVpvkWaqHTyVm2GSRkx4M4tzLcxsuhVSShzh3wpCcbSxeX3kfpYwxYBtASjpCDxryagVKxzfBV",
  "key15": "4GYnbX5rN6obrM4RdKoHE6dYipAJQavs4nqhCfMfLS82Bv1TEgEzsqUmENDarJkVzHRaHz7N46arTKkqdXVV2JBF",
  "key16": "44wtDnhhS7HaBBKiYQgcGQ22jqBwqzeHnJKymLHgaB18eZ3iRGMbioB2oS2SYLCcjZMh4HyoRPeYvMpSbkkqmdXE",
  "key17": "2GHSnXFmG7RjPDicHdxuKum45W4BtPTiShwPVh1Qp5ovCYKfsR7L99Q5dxUWmNeSjwrACw1LQnXgEHSqH3PgUfD7",
  "key18": "dnYYLhHrn72VejAyCYH8a4a5sZhWfwkWsjM95Gpde4pxzwdyGf6WWvVEFnRF4FnLRxEb6efoXqK53GbSTbzc9RS",
  "key19": "52TRQrg5PLw9QACN2LtzLUEaRVL4CryBBFHHmS8A69rwnviXmdePyq27uEqjhc6M9gGiHfdxGuAmtoyaxP4Yzibk",
  "key20": "12686xUaR4iuja6NQNsqzs8wsNFWY6SKGo8GUSMWpMUKJrPWkzi91LoaynAVuqx3Bbxtbn91rkPUadJ6DhcY4r42",
  "key21": "5ABMjkRs4rMXyn3BdJ56JVscKRU3w2YoqgrPp32bF835kJvYF3UwiiwmV4AR7MQLH8VBVvXCjhxZyz1Ko9WLaSyp",
  "key22": "6572Tt7dk4zHkQMZcJQ9PDLQjkQsxfErdFgL3DSsC9RL2tBvwyyqxaT7cYposHhZdGxGecdPB3BhY4GnZA2eZbxd",
  "key23": "61r94849nrnvtjFQGe8JL3viJeUPjWogJmUnFs7saPmFrJMrwuzvXjvpjnTza6STGgGsfAtMghtRRdNwMBrQv1Go",
  "key24": "59s7Sn7YvspkQ8eRW726ebr5VYexFPohE4Ex5ezm6f3XrvsqtvPZ5GksQC7GNcaaF8ugQqPtr5GoaU4kjCdyf2bV"
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
