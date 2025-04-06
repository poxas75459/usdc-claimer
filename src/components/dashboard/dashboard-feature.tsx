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
    "29XFWiBbfWaWtfBa4eRnX34nnYoF1HE4SoN5reXcdK8RuyiNovEYFm1iQXTGCh6BgA9wiDWqxp6BDM6x7qyGnzZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFPFhZqbDGMWCn8zpRgtBuCpDi9NbAhSx3BrrvK5t4gTKYuxNHqxXja7ySoytobwYZBtaHkx7qaxM76dYrrimgH",
  "key1": "5KJBAAXjPL6bxibeT2VAat1W3hMhm9V2wBray6Etk4MXMsn1VH9hzmxFKCT8JinxizdsNFWb7RbGw674sgd9a2mq",
  "key2": "4S9TX1n3MP1UM5kwEMh7Hmmisd6AwNwwZFTBdgNPWE2kRLxCTxVGfMKxeFVr2HtCsdo1PEryrTcKQgzNBW2C31Xi",
  "key3": "2uYeMSZq7i9b6zirsFX1QRVxfMYvzXrVuAvdvuUXPZXKE6sFiE45iUarunvJib2RA2dYimHG6m87XHZKvMQ3979F",
  "key4": "3B6TQ164mPa7Edhaix1mXkHZvj3CnqawbkzHjHPS1JGnYbsNPt1XifzmDA8KZ76JZF2FoUYip4s26UzrFBLFVGPx",
  "key5": "2y1tS1egaRM7Jp8cW1LjcJibARMcPeaG163oV5jJDCMj4ZG5ep52eLGwvDiV4YvVmQdNjfZC3mMoQLjGDydJjJ6E",
  "key6": "22wbGcGiDK8BtCaXqtvLskgsvSQDgH83VWMGidZKrKVaUAMDFSxeFQYw8Cn8ZUDP4GUSUYfaLgbeMYvdrE8tDN6Q",
  "key7": "ftmT1WkPhdnoe3EUD6yZzEbaYPPNd4aP6c6fa29iSBTPk3N7MbwY5Kfvu5GBy38981GQHkz1JSw9hbjY2FN8HWr",
  "key8": "kkXVZFPwPNy5Txj2FNEADD7RzAcLvUsMrkxpnmGnXh2ooyrtVG6XD7oHG3DNfgnEN4gexVrCvzLpbnwZjx9tD1S",
  "key9": "2WN7cPDumGDJXAtfY97Coq31An5818amnKnCsNYnu3gJogtm8sUK9787oTehxLAkDGkiYH3vheHke4GmJDCkR8M7",
  "key10": "2QJC4wwpZMC9Za3DnfMLRNbcckqLwRJN3sCR386KHGNgfDx397PKf81GgcWXtx6Xuq7F881LAYdmmVavmy2R3YgM",
  "key11": "2k1UcS4wQqP7R9iTi9Hm7q33BALBqCadyNR4JoH6piajHNoCNRxnUTYoL3J1keSozmgYyzvZAvp7RJe3Pa2bV2KW",
  "key12": "5bYKoqrCGokonHSDHnxBTAT7kJHknK892tA3G8rpG44DmzcxEErGPGBuNEfKqUESShFf9Upn8ukE9RpXfT4H8je",
  "key13": "3xdJuyLxAPes98baxmssZfpmC1u7kYVaAtsq6vTTLboeDfQd2Bu6PkDzyPYeHRypEKiYzxZCg92Bj4wiW1T8cq6",
  "key14": "5g7DKYGD4C7CjHBR7mm3XDUL6pG4CiRwwZh5DZmJ4LLog71edNjDYA6TXATxNaTUD9HTeNaV3re1g6Sb8z6cTxhx",
  "key15": "4GoT3mQjzcXorEr6HPq9WZjN9hJkXjPsKo2FjzgebVaeHmnUa6d6rUewHknXoLBARg97j5VvtYf5PkXSs2ce8kG1",
  "key16": "4ifFCVvptnY6zWvPgS7SvSLjNEdQVymJWrQVHQ9PmUntH5NVBSiB4475ipHNXJq2SVUAaDsD3QfRuAdMcEYwCvuk",
  "key17": "4HVu8wXvFFFnxUFHUGFYnupuNDBC2qriEFaP3JrNX3HCM5ijetQtmw4ieCoQbrxiy5gcigxVwgeEZ6vGxm8mb3jn",
  "key18": "5UVSJs2hDULTKcjrPSSBGfRcS1JiHF7C4KSAXw9FkcTXwmVBwMRkEeNNXPVMv8mb2S4gMh7kKK1FVq41R63AjXXi",
  "key19": "tX5e1YDgsUK7RkHQtVjedXeGGnGVXbERRu4QGCTbvk1aLw7LPBHuC2CFTpU85tZxz2wYhxoNUc9NSqMRQzTonTa",
  "key20": "2qcdvzGNxc3ixED1uVvV8yr9vhSAbZY41X2FNyZcNYfJCCK77SxcBaed14rT4vRRFirrvbhSrNa1H8uBoMX5WJhq",
  "key21": "3xANBkqAvLy8odFo3UFnQ5ychRquhBVZhCVL4M4UkA7RkeugjW9SAwAtozk5vRve7yTdbqo5uV1iw5D8fatBdqcw",
  "key22": "563U5nBDbmgY2tFEv38dUyADEpmTGNiyo2QXNLBX2mAUxFAUMMKvrR2RhyAWmv7KsrbvNAzjU4QtK8fYenPcK6vg",
  "key23": "5TrMtRLVDQzrdWbnJLYZxvAUcVj7j8Ho3kRjjcUWv3RjJ7BVgYtPpfd35CmDp4DSn1kLcKdzdLtsPHm9xafgAfvx",
  "key24": "3uR78R8UHdwxZe4thhnE9SfT6pddJv41cf3cF6dHWGSBaGuabXDZaLzsR6okvAuyVJr3ABdvRaLtY8JggGU215in",
  "key25": "59hnM52qoUVARj7HUzRvGXRUAJbpramKsZeiEm3hfxyku8yBbze5ecfStySCF6jC6M6PPyr4x32FWZvj8ebGKsp4"
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
