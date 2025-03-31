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
    "2qnFuUS3D8J5conSikxj6gtXHcfJq1KiS8bf8TZLmD9tVJFMLRs94ZJnWmW7uydk4iWwZtkqE9W7ujPavZeFSPB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoKWrF9FZVFD8E8ZN6aicu9a9Zm4fGHbAZ776P1gRDwJGscx8q1j97FCwVjJcFZnw2xRaxkhuiRN1gMHoCJFFhS",
  "key1": "65PbBiantwoW24JNWR92iQxmhm9qbzQ6smwpdKJBWVDoqqXjnetvBA5e3giEzTkLtzZQ2FmE7rtGhPWxgjZRkTT6",
  "key2": "37V2HxTHErHAvyXj4SjwXuafVZCXRr3mdbd8QfHAKsjRGE2D4mnWr8ABfDerRR6dVT516oF9m7HH83PD7MUt3sLX",
  "key3": "3fPBUy9v43Pm22CeQ9CHQmG6VjCs8eyapn6umxxiSagtpjdTpCgATgPk3YXFPPV7BvZRZcosuE1JyQqFomL2pEhs",
  "key4": "2g97LU6qGJWDXs9WDSr1YzWcoLyH7vPKT4RWLnC3qcdLBEwSa8hzmPqUvqgBeV8NCJmz2eY1PMBQjjYp6Qn8vFVX",
  "key5": "htdh8T31WR8ASddtsc2L4KmjrcnvwshBtep6kFqEQeu6WdLTWPMd69dsboz47F3991FrLBAgzxcGbGZz3GtvTSU",
  "key6": "33Jc5epfhEEHWqN4ypTGxN1NcMKw2pytYDAZ1zvmZDoXbsRYTTNU7o4cZ1UybXFRCSpDfpWP2yMVRsNL4roSXRN",
  "key7": "4hssYxyi5Nfz7J4KzuHvgDbnx7dnLHzbnAh9CzqnjiTH4oE3VQ1H5xpZHPWf6X4YKVgBxzrXhFQGMwdM96qw5hwv",
  "key8": "N5gaPRzHUi2WuyXVd3VNy6LSEMeGtfzB5CD1iDaPPkruesZZ2yK7o9jogwSkqEHoiGUGVKtTZzv7vbUY6c4V77C",
  "key9": "52Bi19MZg6UmanMUKacyKfM7xb23FS6Eb9QQXZDy3h7hk2oCMYiC9X2DH2wh5vMR6a42o8xwuop6J6MJqpTxrXYi",
  "key10": "H5xPqsJxeZXiMxkpqY73DbJve163exHzdUFLQDuERUQsChw6raQdwbf1n42v43u19qxBfjeQWbrHW6qNTEegGTV",
  "key11": "EA5m8dbC3DiRuCtteU8S4vpcVWLcoZSoLDxSNgV5d3LU4RiZE78wXTdK7Src6vvD8NpEexdrF1xEcZY9Yg4raav",
  "key12": "5AjjrVi6Yer7WGFxVLZDCT2rrxJuqRVECXmBzcRF5h5LM2gQDyoqpt5RaimxL4jY1D4bUFK66dJ6j54YVnsgdqj9",
  "key13": "2RiKj1e6RiNU68PMkheNose5xh9cLbeon2FbQHYYzTzSd1codm1vtReMtUFaxRBmo9VgpzzgzNJWNzix87pEqR1W",
  "key14": "3c6rMok33K1Z9JE89RgAAufaKxbLcWzT59FP1BLAb15AMEaJajTTTQHR3DfzaiaXGDp68YMknqf4FLLj8D3MoAjG",
  "key15": "3637mKAuKQBR71m2M3bkLyAerpiQwW3dyBsyWjyANsYUwZAmd8fPPtAFuQfGeAeva7jxgeM2Rj5sghNnfxfoja5C",
  "key16": "3DWHW4ZtqL1nXS2NtfGNeSEUY74Aq7W6VqfzbsJepUjK58mx7kAfZqLCfs2BWTP1C6kn1zmN85kbCiC7F4YkjrfD",
  "key17": "51WcbadZc4jW9uryo4GEi5ZadwwSTiVrM1qDARy723NbxzGQAEvnCxMbe6jiNTwvCHpk7P2bJh5TLvFFqjDCJMps",
  "key18": "5jBgodc3shCjfL62JataxJbSv9Cud5FhZRXMX5gzxaMUMktUxYmri4LXF1b1wurzjasquKaYE6KBgbwRcMEUVbVD",
  "key19": "5TcD3C7V7zeMbNRDLJ5YNs4cETe2aHtXo2ZCWYmabksCKNCm4MfB7oF972vwY188caDfrtaco8V7w9LKX4sEwa9W",
  "key20": "PuE8EZbnXYL9UoRjhnGRZ7VvP9euW7d9cfrmPKKt7LovuAizQvXk3zqpu39rrL3bSL3LtsYGJvqEPVJ4Ysp1GNX",
  "key21": "3z7fcpStYAxUqAqJa9dKMuyiP5aatosAkccdc3gs31pQdme6G1FVuqevKVzCbWTDDhT8P9mCzGL716aUbCyfjTTX",
  "key22": "3NtT6stWUuy8qedwfeTZRt3gBFJJ1bcDkdsBfLKSmAV5yMcd2G2bdSoSz5Sp2uJvLi3pdgSTVQe7xyeBrBaVeoqA",
  "key23": "4r6CYDdsDWtLpKCBrNNy3vp8AU8MPxkJraseFiYcq6Yr76yaA45bLfYVu5PQ2BN2STWaPErFGa5nyrZyJ8vZ9W4w",
  "key24": "31PNcRXgBpXGRGDkX3GuEp3PfyiwctnNWiCuVtZwK7MMKBqdX7XKegHFkKacXCTeEohJ7d44qoGzqLqzxdZLAPPD",
  "key25": "4smLsbLCPn7Wpz43Rw3a54CfJtfjGoavt3WaT76A4kJ4SFANVnyU86LCMAymKK6pHxnbgQFQmGpdL8FMs3ZTaBt1",
  "key26": "47CqECpEPaYnXSTs4ddzQ3yq4FFxJeZpQ713bUTQQaPfsK8ErE2SaTQ74mA3QWUYHCZEfhNysaFDC3LqWseYGaQs",
  "key27": "58p8GAYNRh5XLTV8Mh7js3oUmuQttCweCwE1bFFqinK2D5RUDcEKMjxANXqLJ1UDeskwMUbXQSfUuGdMrixp2SNj",
  "key28": "3YWLr6Nxkm3CdG6GaMSxnRk6eC85R2j1q1GJ4UZVbqdEZFg5DWvq4nMvZ6pnS2pwK4HJYss5n5GsKa48xxKA124T",
  "key29": "5BwFp4h1RLsXGo3YFYrHJfb1TrCohGqP7MBpN7897wXAseSqnqoj18boMa27NCGpPjxK37wDar25eDRYMxBupZNQ",
  "key30": "2vQBcqBAYdpcmEmJ8MZHWxkMJVHsN9bV86rNK7fkauZ6bHwb3dr2ZS3ZnvXNXcowR2uKr3jsbCN2TCe3wc77WPhV",
  "key31": "5oEnyzbaBrCZS8TXi9xMCgxKhMsxy5eNyQYCazZSGHxXvQe5pMus3AUdpctA6YbFGTj3ce82rTMNf7jWa7suVGZh",
  "key32": "FS7VyDSR7cvpE2jQXj8pGLiUKnxafASkbWzr8udAJGPhAe8oKEvraM6e5iSXivDwFXNiVgFkdRvPqTnDJSPmMvG"
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
