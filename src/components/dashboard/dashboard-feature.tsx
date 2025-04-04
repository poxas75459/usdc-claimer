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
    "fnMFcDwA1uDrstdeKkHCcexdsdgEZJkiVfcn3bUZzzRuKAuZL8NC5t9VC1UVyaJBGE23AuwKWNoH6wGyNoNshMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNgCF9kHTf5i4zATvkCjcsKypfvFapaeCs7zs9RCYKUC1ASKK7sp7zG2Sp1N2ufsd25Wh133EV9feyTu6uwUh62",
  "key1": "4b7PfEMxoGhpuGDBV127McYzNKXNEfHK9D4xzzmDxqRTeBvSdgsq1YJmoUEjNTUBqW4rMMAKZAGL8Pe3zCJY9wGe",
  "key2": "42BkigsydREjxid2k9Csq7ca9n9Bc17mv9N2fx2h6hsNP7YbpuNsmNW6sXYHHUvaGVdnDre3B5GWv5gGaPvkr5X6",
  "key3": "25WVrDYpspwbKJ9G99BHPF6GagRNUQf6xYzUFq3jtC8uxsRhqXqvWwHDX7LFgyP3sSUNjSEcSz2LmyDp9epRrJ3N",
  "key4": "4pY4PS5uKh3UGXht1CqK5vooBXdGJ5EymSbXfNvMp1nuVw9fxRgnCMsGE3xwx4o47i1gqEf8DS8PvYWKCD5h7KX8",
  "key5": "24S8xMVv38HUQjJKmYPyThcnPXopnUD7wdFufd8FW1sn2tZ88fUofXvLEiU33u79sdHdV82Nj9Kpv19GFdBefLzn",
  "key6": "4bCMzobdm95AW7NTGBvWBnqg2K9dATV2z23YiA3vGMJqL7qxVptU2jVSFAyNc14mUgxgY84zSjj2SeUJo4bJmV32",
  "key7": "49yjiNVsvWQTWt8ksAnNXxhiGhZBGyzFtUEqXvTTJAAEX5KnpoD49ZWkFCnqdrU3enfKGNUYBWBuThWAamwQcPFK",
  "key8": "UC7LpTY98YrBNNMXPzkx54kB4fa1HiZTFKHEWuf2RmKu7bgHGjY2MDfgnctAqncofMnPqzFhUHnxzKtc6nWgzmf",
  "key9": "3gx4B62NZuV28bQx2kQyrARRJRvP8VSrZHoXPoB8YjE6TuUaFu8a1Kcdx4PGKba3jKDPK6Wp8GRDSdhg3kybZhro",
  "key10": "2cB4E5NrrzMfpViJ8SQDRxQ4Tif31haHuyxh5ghwqr19HgcALN9xqvsxHC574mXy2se2dBVRAyg6GxSUCPcF8RZw",
  "key11": "yAQCgHqMUWDmgdKoUWsFVSwh8RefuHtSKRmu7q8WbA4kXiaPvpp4t73rCKYrNfc8doJvYxc4RgAE6NruNZS55p8",
  "key12": "2gnbAK39XdMw4KbnU2BcDkXD5UVUzA7KU7nr9FUMtoL3Q2swU2Gr5Xdi59KUJZDRfN8oT7nKKV6Uve8z1GHbURr",
  "key13": "3Djwi8xWD71RaoDXR8Tgicth8PfDKcBDtB5qnWdzvnPqaVLo9sfHBUcNSisNoT5WRnjabEhoo7aXAeRszcF12pEh",
  "key14": "4AztZAgu8ZNmdumXwfxzWy87RQtGhtZ8aFRZSuQLfan4VjGxX1tnpsFtA992QngtcDA6o5Rm9kGpXDpSadrR3JcD",
  "key15": "4ifmdj94fpSsqi73kVCmL1CRpiqdv9H8d3ANfuYo6eKNBKUMDdmcRPa67DpJgKTCNsBtchiCgTQpzoYn3DYdbj57",
  "key16": "2mp6htsDQq64KxFwRZfhniQiJrNhUXo3omkmnk7TzvDdV87mRUMjWXSeFKCRy3ft8V4A77j8KWv9zXUczfisiRhf",
  "key17": "4Bfkp77WXXYx1fNsRDXUnNrP7WdGS7YnXoVrGEiHy2vUjDtyGEvyMRTTEqTMbzmVrL1GK1BcUXumuDNjCMraKtd9",
  "key18": "2MaLG5G5xAY8xTLUebCVcPE7bkESUXhbt6DN16nqWigNoQxv48AfCYgVFxy1y8rraTCoqcZjhSiQAZXWK6sF2Pn8",
  "key19": "CbNNDWF9xuEcriQQ83sKiq95HvQtuSdFdszT2XwsaPQKix7SPwVbW18XHgiMdJwg3e1qo3hVbD2EgFc2NJDVjaM",
  "key20": "4oo3S9f6s6vuyfD5vCXZBKaKqEUNA9oBSHUis2wbjkfqYHxdPjnBhGks4H2SwgNye7pA4z6CGTAF4XjdP3HjgepB",
  "key21": "2nMM7FeVuFej7CSJR3qRgQH3cJw66HPahkcUzCy9JU5Q37eKWa5UjbzKDeQcx6U45wUDEptndUFimSQ9W8TDxFST",
  "key22": "CtvmD1rgYNyKRcc8vQdyNCMP1wkdu774noyhm1HkSdj4j1EMR8y6ZH8JaBwZcSC7rwypnPPmAFz1xiskt89pWxa",
  "key23": "5An8xVhJyLGUpRhEYsxbm7cyof6wiA3n7SmJxHmsy1etzJMzi1Rv6rqxmHs9wELeBSfanKeG5ZUe8gt3cGhC2igY",
  "key24": "5iFEN7T68jwPaagss4vVA47wt9yD8ZU64SESJgSDUTLp2QrkVabx887qtknybH8vntvM4DwPt3ZyEQT9DgBB2x79"
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
