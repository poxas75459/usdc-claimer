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
    "5i4Dn3DYfVH53HVsRoKE6sYJnAtpA554mF4dAti3S1LvfdUpqKW4pku5RetyTXvKn3xNtk9m2qgkvqP8GJUv5kW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NihB13XJK5LnUnuk6ppJhebygV5NX4ViFYBFDLqLZfoALBytvApToi9LnhtrfufATpxUtotfMxaYfgMg5TAGhYj",
  "key1": "4uxGLX4P2i9EWFnXQybP9VUYnCyAUHAjqRSHrmCvNAWBSbBXhYxaWqP3cnZ9cyiTwoY9pEYNrae6CNmP1zmAdAh7",
  "key2": "33EJPYzdcEKW9C7jQtJvrnijwkWM5FnBqiFUJhs9hBY3MswuiLn6SdJFQrtuCAj1877stiRBLMftdPLhcHu6uUnk",
  "key3": "3PXjHdtbAFxwkn1pp8xRj8LZTwZgaHKfwccvzf2CimSMBh6TtSBT9VvqyCGqtSX6qhAonBkjQUvXdtUiTDKTWvWD",
  "key4": "3mWbcSzpyEh2c9MhXiZixUekbd3JYx4in4uynLEgLn7nYREZ7Yn9gFxdGw1uuiQW8TL1KBGo3zGMSpcoWa8EcK7H",
  "key5": "3wDMgVHB2RXVSocdfXC6MTu13rNRDB9nb9sCxfzDt6zzmRDDwZP2p9NftxqCTFNXxaqDByxwC7nzeQNenEeF2wGh",
  "key6": "2WtM9MuDNSs3Q5KnEJranE6Gq6vr6gFCWTjpKHMxepFqz6swq2hg3u1EcMYA2D7TZds3ytN4bNKqtz2RSdYBg8BJ",
  "key7": "3CY5oL7wtnCEaEQpg3DLJeAkwm7VNjcExHeGmNxi6dHsVMt75yucDwiRupYeyjjrdsKqynyQMT3N5iqjC5nhVAei",
  "key8": "65W1FGuEcc1T3R7wXJ5CRyAYCPpEpq2PaRLYdNuhziLizrYzMzap8wTBcR1htikkGFHCovmJGib39AK71gckn4xN",
  "key9": "4iXrVKuLdHz5RnYYs5DjoCtPeaxxyZSKuorDL5JdMazjjaLNZ7xzzjhZ97wnQ3oqYCpq72paiZGduipTb7EwH4WU",
  "key10": "REDKTa6teNXwWSLoi6VshQo2WWRKgnVtdzAU4SNRKe71x2gSwc991oMYmuw3rNsZUosBibVHYDqKvibAdsrJCmx",
  "key11": "2EtJN8XBDEXDHT6ehFfPCor4A1Em9tezNsxxrkocytuccQM2spNZ4MkDEpjKt4kTg5Fx8ZYJkFmhduUCUxvBEkj8",
  "key12": "3ZSDV18uEARs13rSCdSgZJYP3ZXbG7ZMCmSRfZ8LJCyzM5rG3mBio2TRHiAHDMSfrrNX5RMnZdt49Rv8F2zHjApu",
  "key13": "3fyADSQ9HxtVnBKJpf5XuVhFbsKHh5qpwkWhLCxpkDKSbwm9AAAEY8NoTNWQxhW2r1EDDkiwWZoLCfjNVCL566tL",
  "key14": "3YMxwM54ysWaoqWXZbMvrw936Ea81565vGtsUeo4sxy8Vb7t781zmygj5G3yn14CzTjmi7FhFjed6bSWK1EwNzx9",
  "key15": "5nY1fzqfjJxBbxhs2zqjjV4NpkdyBsrE73WoNKnHSSZxNu4VCHrnwm433f63cGgGUwZyjXkmA6med3kK4NEdXjKj",
  "key16": "vVx72BPb6wB2obvvtQEXstDzWzcgpjJybqUnW1iqbK1Gg1mZZS88xkXWZUNvWE8KWtKkUNbAHebCnVKqPhNNCCc",
  "key17": "2cVqSFPxuL6dXffqaPtKNFkJhqzsvB2WzRAfuegbYWuiPpfpHA5BHzjKFBAsFS4mB6s9Dd5RLjpwfv55cVFBrUMz",
  "key18": "Wkvyux43vC8sjwLQjYCnUmYDb8w1sWnCdCuygsyLb7piFUnpCmjhqxELZrtGiQDZATciCCaMRp4NhM5EPEKUkFD",
  "key19": "29qfXSgdhQTkvpEUvqTiU9vFxN291jXooARoQe7equWUJFRgaEW7XV4GBMZ6s2x8UhDp4bST2kQhLveo1osJb88Q",
  "key20": "62y8e6pnpGxxHUUSYc5vP9XYASrT4M8fKuENosAyZ4ARw1kxUGWSdsrVaxsb9qDxHKh5RsRzkEouK3RVDkkD5q9u",
  "key21": "4nccLg8hT143XGhd7Dc7e4xKdp4zg4DPaReh7dbxmxt1pvvnsaRUuBFR6oD8Hm4uY8LwZSxceT8yNBkuQkNjq9g8",
  "key22": "65eQvzrMCxYF4xVw5M5Pm3s5YsRERDFTJXn8QQEhkhnqBicg21Ms7iBDGt8XepS6AT3UkpgtLzLS7g89pubQUA9",
  "key23": "4mmysmyE1exPCWQsjDMfg41X5GPFoVVysrypkAqLH6C8YS1nirpuU7knfoKh8PEEpjz1ZxFtGjsk6nU5rAgGw46S",
  "key24": "4SjnhsDEv2LB4bF9F4NrMEnhUVUzWFMYa1PfoPhsM6aAg3Sr34qsLdbmRJxUnbDxQWo82fdroKeuGV2PQSdQLUuy"
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
