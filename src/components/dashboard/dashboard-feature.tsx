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
    "4RbJcTkCbufyx9b3HNYBYNd1DsGhh1aAMbtJBKkZb9Nhye21RbkbUPmdhJMQDjBJRMLDJRyUzgsi7LNM4CQaG4Ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvHy1zoYJYskZ8Hfgawouu4kDU2RigNp8Q7Mp1LSuttCKepZ4SPNnVpzFQRBNfSnKMA6GyWfmcKutXxWfXRUMC3",
  "key1": "4D8j9KUpKCGgsSSXWrfwK32sVYFmcGepZWYeZG2uuk8WGmtZiocWQuxzqbLA54BsTRW4bh51U5omgscbpSa6izwn",
  "key2": "4NjLBJM3Ww4PAgrfrRzaQ2N8CU5b1Vs5Ak7JJ5jq7gGZDQVWuTehas4LTsEPywP6nKDPhfGooHGV2TNCNnF9qVFc",
  "key3": "ePkUonqrrq7ABU2Wj8vZ6UJZFTsH1KGqPvpjF6QGDSLojDhq87RGrwMkCFPkRrzjDkTCzcjRfp3pjk7Jso7E7vc",
  "key4": "5Pk4kouuECaW5KvhFDVSptisDqCAJwFpWcJ2C6z1ycRctpaConEZAm1qW964D1qcSHaAtZj2dJuPbQa3WLnU5kYB",
  "key5": "51fMhcRjCvkBXp7dZ2FTNPL9FHhkRp9NcXQgTZT6NoqGJJ1LwKM1m8JZyHtLCUkFCdQhdMWN9Yk2vGCFCPWxQyTZ",
  "key6": "2tCb9TnRFAEU8R7w4smsGydgwZ8uuynecGJmSC2YvjjyXWxuJEfwYyNGKkE2p7Qmu995Tg6cCFx49YE6tnqm8cdi",
  "key7": "54E35t5wXuf1RGWrzAR4nSppKAVbSiesgUbwc3MaWpHwdkMuRHrHBbf8gubcif69E2fHxnh82kx9xW7kWZ5P7Qmy",
  "key8": "4RXpktw1YLBuBczjrJ5k3X8HNjsQkprHrpM8eYBGWTnsnmqRoYdGvZcFN4nXKyQ7d69mHZDnhjozAPUF95bAvhfH",
  "key9": "4JnHsYf5BHRcB7gkjoPkKBG2km64Lexex8MWCeY2AVEppYPJ1iQDnE8vu629ouEQhZDfaMPUe67jVgnYSFcPvhVB",
  "key10": "5WmwwepBadhs3cgkr8PBGgg1XAurfsGd2zJ7rRQPz9owZy7e2TSinWaeZu2bwXN41B23dzg3RQRuWP7cBUrCjDLz",
  "key11": "2xyWByf1N58KJmwN8dA45mfXmsbj2zKpPJeNZyrTMGGgDHMUquo7SmhD95uXyJpaDe7K2YozPMj9v87YWwfy44g8",
  "key12": "eAtJsWe7DThCStuiNM847WBWiARMRdVV5SetDwgWdeVnJfR4hRZ42hCqP1KU6B58iCh2vXVYDuT9eQ8kvWcfA3j",
  "key13": "5Hfcw9QJM8YyHSKkDrJ6WETPuttz6b5ZgmKbqW1Gif6H5mdCACHLDZnFHSB6Ms1Mfjrd5hVWHysXWhaw4hAuMDJJ",
  "key14": "3agJKxfT8Rh16MWiHCkXdjiWyk3EVYDUz5wEDLkv2MyC47vizajfTiVnC8oqNdW9JH5Sn5VXPiBqDWkcoxRLT5bt",
  "key15": "5spPGTRNqoHDW3nBAyVVnU9B8iY9Txp6mBYVxhEFYwYh8KgVke4YBGa2M9ARuhwa5obf8q39X4oBzbmXYq5Hm7iC",
  "key16": "rednmyydzu7zrwjUMpz2TkcLBmD8xXG9vqUonMyxm2iyjcebWKqPS1w5iMLmaiUZxgrD11L7tk5huCtudh3UMNx",
  "key17": "4NA2ft6KmAXVKCMo3QYdStNjqg3p2Z7879V2YM5j1nUyxHDzKtzsHxW3JuUKcHzERagEAHUfLTo7mXjEJgq6EyqF",
  "key18": "5H9sMran5xsA5XhHaNWaranEtTgTFiEWW7ALqYZpvWHimM8Su5Lx4xPPs84xQgSHGHpDm1tphg2kTURmn4ijEJer",
  "key19": "4rLisydRNj1M1eDyC1pVEy411thehSxACW86KWemdWsQWVLByKn5hFMwYkuDwNSvjAwJXfFVBcjs2QQHQXQCQ3t4",
  "key20": "5rBiZ2aGWzdimqmL5mjrV7AK3ziktFaN9gTiLACJMdgPaBpGTvznnC6HN8GTQpJQLHY9E1fZW59gZ1x3H1mFmSZi",
  "key21": "k12c6ZPyJL62JLp7SL1updFdymLpTJmPuxNczR9uKnfcVaob4uhsmA1qoaiy5Zn1SqT89nERWaVad9WXMZWGYaR",
  "key22": "4A4roWBDnc3h8G1T6s7SEHsbYjP8KGByuiMhXG1r5Kv1UBWmHqa5J6ajZfdkjBsHLQtNX7W87kKxmMTdd63v4UWR",
  "key23": "bLdVhSy1qLycVodAooX9qoL4aAUfgUbZ2EWegytAeF738gwokQUEfnwyLfZiGsDJUW2TihML6Vj3BwmuoQN5tre",
  "key24": "45Y2ZA2evem7Ct9gfx9WbzN7dzMyCt4rqBxFoWtFfunpTmJRaQNc1QCqfRdVvd2jCwVYZibm9SDNjjpjFUdkCZoa",
  "key25": "2Rv41wzh4VyQGqQgo8pR4iDxZc6AvaERywobyAvuZXktwnGaWsZSCFN5CTUUWdnwPX6PeWVXdoLnvELDJ7zU2qte",
  "key26": "2FXvauqmiDm4TU8gNRn2zj5eoLbkW6zioMsJj3W3c1nYm7FycvMCCAffEmtYN5WvkFscmx7pAF9NjbL1Pdv2PqRa",
  "key27": "3r2cRbDVEYN7DPbo7jmejPdhQb3xdagLkyeguxxjiWRmJX1uMpW5EyRmhGWC88PBWodGGn4HEoYwd5tkXiHTdkTV",
  "key28": "2J2u92km8LvtzzXuH8LbKJwfmXGxE8MaCKNk1dNTAVS1VRnhFVNUL7eddBi6EygcgdSJD3X9PC4d18tZ4nzfLsTk",
  "key29": "2wesD8CWxqRUc7Yc2iBuEZbsXyP4qAoqXJoimxFubCRX86A7SmGwDwHNjCdmx5KmRME8Va6rqvuz3dhG4dmzVAGL",
  "key30": "3A9ew4Z97cVxU6fEDNmmkAqBLLK8cP41huXdD5PLfRSqKX4YGMfMjVuEiRN3sxD7gS9XvdCzZw3HaqpoXAiGtFTZ",
  "key31": "4Qbx9yJYCAR7WzL8wDzw1u9WY9g6kuU2nEejwXAgjxvgFrmj7UNHW4bNGwyWrEDnPS3Jk2nvaNyBEDBJPS3p5KVB"
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
