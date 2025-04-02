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
    "2pGoEEidjjPZBrqEoHMgobawvRPQDumEUHSY7DLdFeWrzA8YwMyEHXScdY8ECtim1wkdvi6f5NWXrnBrQRBm2zdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mdo9rG8pUXCp6d7wJKVPBwnB8R71y7sHSRX7GbcPK3RJSEa2XYnY3XjueMvhSTSzfP4R5URmVXfB1dcGizVuito",
  "key1": "3VVpJy4LXxPpCnfhzj3pYFSQMeh1WjuTfdyPKqoHzrYLd5n8VJbZskdMtf9JYUTp8WUs2VEKGVeY8aNiM3GfJjHW",
  "key2": "5wq26yukaf9ET1VBsCAeqVgoFDYCgqjpKEuNMXLAkQ3qdMFc94Pj4pfm8fNFs63dZ8MtuN1EQGgfiW6Vc75cVTX",
  "key3": "2iZPBmnbcDxiokeJRx1iMK7fdSjF8U9f6GQpjD8WUepBKLiYVLzyS2swLj3FF9YGBGaf2B9BdMcZ2dF1FhFh3spT",
  "key4": "9uwtmcdmAFK9n9Jk394Wa3uJ2gPt23GiHNd5cGDPQhVS1pKp35peRRmTDyoAtcaDRYH3iNEwkCU2rDfECJV49ci",
  "key5": "3UDNi7m16xqFS6GYa9gjc5twdpdXR5XVPee1hWg96U6ufQieiLuED6uYcusdJ5pqnf63WKfqzu3BcV46dNYD3Urw",
  "key6": "5it8kvUUR545JtDmbVS3xdZZCT4LVQb4X4MNdTqW1nJf1R5JofHQ1mVRwcVRdztq53HA1ZUD9U4gNdh8797ziQT3",
  "key7": "AixbKYC5afAdMT4qwYZeK5uh9kZHC6HrSdAFaCXEwqEzxsFSFjT5LH6tzSfwwbCnw8RSumW1iMb651neY9XGiGs",
  "key8": "5UvoUoCt7bzzuVSM5H7KvLaPLHAKT495dmonVevg8aPPNFu7pAkAvxSkeKEKFpQYUeT7SW5FYJ3ceHKC4cA75YN4",
  "key9": "3iAZFfQunwkhNodw65S51cu2sgvGWqYwLGBWGsVSFtVgmyDXSSJE8NPiDp9ezygL7uDEGR5KdDfc7F1e14TpEXSX",
  "key10": "22vJVNBhmUuAiHCrosprKP9j6BHSusBJAfxT4cYiReSw8e6UTg5mxEU6WbTWqX1WQc5tLt633iPmaHE9icMXBmYf",
  "key11": "7CjDfDzkZwdSp8DR9HzpCBgue4jHmhDkStx4wt4cdhjmc9AEieKX9nDWQQuErMD6ZRqsYNr7KZEqBp3djYtWAgH",
  "key12": "t1ZaY69BCJJbHLkigj4RyxZh5RbcoK239oE5ztiXp6bVtvW19ovvDbmBUHZfkx9cqJxMdYAk4CbhjqA6vZfWo59",
  "key13": "4joU7bUD9bLfXtXxKqsEi7zhVw1M8V6GzjPQCEvEd3RTg5iFLFPpbTRQn9iVQqCQa8hVLnM7p2UxLP5bkkaoj6QW",
  "key14": "3VaNRLRNmCPmQW6TsijWGqbxmSZ5wz33F7YRBQK8VMpizZabcRX7vqqPmJmftdBu9dkjcJKLx9fFAf3Mon5t7MSM",
  "key15": "2M6AiADisZXK2KHeRdg8FBNYmdUqhNH3rwMMZh7CATUgnHT5HyhG72QgQ1yfqkpDqiyyHT1DtszDGo5NBfe5hSCm",
  "key16": "4LnrobFW17SDZJwc21WNzu1omSf6caXSfZzPTcED1C4WW1ViYyVHFy2rF4RwdPYro6235aJYtVsk5zD7Za23tw5E",
  "key17": "2hAt6C3sFeKP2vZGq2h7xZjFgcjn6D625WV5XQTgbPSxRRRNA9bkJvBq9cNoJ87gHfMnNkVif8USAamY2K9p32M9",
  "key18": "5Pz5BMyFnnXAbjy4cVrCwDRrnYzBsoStdDPh5Hkv27tDe9uEKQrPaMEwgQAfWqR3nU3yUavozNi1q1Q3q6JFCamG",
  "key19": "ftFX9xG9NnFCkweSFwjKuwMm2gfdhEM9HZSNMwXaciChq3RSDgjH79Sfj3uKBYbSYHdLV1aQ9mMLzcyL4GSAN4b",
  "key20": "2nsFvdoSBRrteZ4SKRA7bbu1roMAswoPreFRHzW5ibCxds5scorJfJvzhHdZaogbRq31vdfBp1z8RtkmdK2C69uw",
  "key21": "61KesM2FEshV6ZWwZCQoj1Mz6fkhDhMVnKSci2vA7okrj2qsZH327bSWofKg5KyrBMowPZf3vppyL3HyNwSwVGe6",
  "key22": "45BqzjRVtxZMHyoGrQejfkAB612XD629eLFZ7Vhb8npGbmWJ1Y81vQJG93TttrS9S8BWcSuACdWQEbRkfhj6zZYS",
  "key23": "2cX29qoS8JCogUW7w5sZmdSFX476WZgkrXQSJpw8CicnWutisAVR7tSZYd9XaFWWPNBmJHJqSHFpRncRnMQV4Gx8",
  "key24": "qDhALqYGBGAXntCSdX9wRqwYoFtBMjkoVDA8nSStYSQAVgeBt2khyTmmKBWeurYKwxgasgX8bqp84ttFB3SZD7o",
  "key25": "4c63Tf54RtmGmsdNDaZiWes4U1oKWyf39G3ZTeSaahEavce3obDgTkNaLFyF855gjUVzvLKniUrFv9qnMUmihC66",
  "key26": "GqyhH7nUituxLyubQU4yKbfXmzp93shWkzRfjUtzcdcbBdr5ahyen9heqrDzX8WPkQc4kkktGnrfXiD9LhfJZBs",
  "key27": "523AyXWgT7FG5ERiCjtpkmk4MRpxfn4qEW3Mz4vyfM9f2YBHxMgA1R9XDHSw41pWJt7fWLTcgz2xxmoPEvzWoYj4",
  "key28": "4oyLMDPzDk18WWTxYgizeDvqt1F8J16gwrczdqGstf54rPpk61C61Uhzzrh3mQxai1RDkW9L6FnyBdrYGjGCG3HC",
  "key29": "5ox9cok8Wb8gFDf9gNHfwk7uxkLvphLVouvMoGCUgF2UDMJYEPGPqFjUztpszCSVoNoMTZDCcVaDR3h1HHaqgSjk",
  "key30": "2ooPLN9iLnMA4dN1Laur8CGo4YhTbdWErTTXvSdbtUBZVT1AjRnkknv1NcFeC2LDmMMv8oo3fExuBnjQNuCH5xF1",
  "key31": "sVwhm1BD2nnTfXyqb127dZcJ9Hi1TFXtVz1E2DAoJfsmfiEQpUwgNU38kLKSRoHNKcF2wSdQ4gPXRoWS34sSKPb",
  "key32": "4QY7Vj2F1zoJv1cTX2morEWwDfPa4paXGA3fnzqm6GjNJFSuH9DTqZEjPLRLng4DusbZMuFRmZH4QgHg86vwJT4L",
  "key33": "3XfR4Pr38m6mhAmdNP3rRMgys8iHX6dGZbr7B4UzzRA36VbGWGCbQEdfDuePQaiMDDg5eY8abzJ1fT1dTGQTpZdw"
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
