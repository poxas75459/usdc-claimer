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
    "4KXRSW93wu2GKAqEBS5pzRUykj2CuAeFwpfnbinNwJpqR586idC1hzAHGo75LxZShATxkmA3SQuMxeVTURMBg74Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371WLC4gPYonD7zAGLGfAkRgJSD9ssfes8eBeM56HUUSsU12khJrU8QYqQ3XHcsBKpzbtUBuMgYP7L7XNBrAQ3Tx",
  "key1": "H4sSHQjfLfhfPj97ovd4MpGgggWLuhcVaMnW37pDXzfPKEBXmJUvYb3K8siAwJeyoHxJWwjBbMCyL8aLiBh5oeS",
  "key2": "3N4qH1vKZmceBQu6iMY8qcE5KX5wcC2EbFGv66hZX6KcbPoxXjfBQDdoCEEwpTDzVYojUkKEuwjmbo4rXpvWsuLp",
  "key3": "L9QxcGc9RsopFgHSGvf46ckgbDyLFW6YMbUbouiotNVZVdKTPCA576bvho8vzi8QW64yGwkGpPbPtKcoKYquuRr",
  "key4": "5etJsecrdhJ8D9LMxsDLRJ1C3VWmWN3oQ9r18xd6W8uAoW8X6RjtqpzVijkwUkg6RmZLpD9a1u3EgrinX8dA1dSy",
  "key5": "3mT52NgWG9eAjNo61X4wHcjUUfQgQLJp3EgXcJeEefdCAoREoCzAXNPBBmHskqZ2JvDMYChpH4EdHjUbFpUYqrJ6",
  "key6": "4XRBp2Te5fXf9PrVLr8HeJA7cbCmxmjAMDpwqWvbwMdhLKHZHDjkxbQaGagTU68HqogmaM6cU42uh5yG8igCsuYp",
  "key7": "u1DN9zsNhagsAfbgnSBdbWEeWRnHQviAMAByuSam4esNriMKEtBjoSBuNQhoGpUf1zyRQW2mRvsUedwiDb4LvxB",
  "key8": "2gHrhLdoMjd4eUZfRnpSDBrfATeiHPc7xDcVgnHYsh45SXB7iHTMXRZC1WC4TC8M6GnZNs5qRd8Fioa744CyKVxT",
  "key9": "5jq6oTRJBqRFkumstzzJrHCa1PpXc3aVwc1RH7wrAypudmEeKem98aSVXk2oeQU4yqEQobTK4nsVjwp7t5ET4Vzu",
  "key10": "632WVuxxn8kk8FCjukHTLnBfegbCkQmf96Q4a4WJiU4YsAysXakJuFqn3BQPCavgzKJemtrcxpShe6sq6sV85sT1",
  "key11": "UiDzS2ez8XNprxSKMucYQcbPektpsAV8PbmEoEB96fAzukzmfc91WNUF4cLhoMBeGg7i4EZDmZ4Yqx1UdbYqVeh",
  "key12": "4uAuV2FazSQgKj54vTTmAEvATYSy8RKFbgnaVQwytBcdBBYS7913fBgjtDeUZU6tnBue6DVQvZpbQyMBKTRCWaNb",
  "key13": "rEf2ZZSr1Vf1mFJ2kU6LZZPTSoZ36DTKYcg9pqg61ptzSm52RWJ2Sqg2AbBMMrbBriDzKRzvmLZ5ABMfN7nhJUK",
  "key14": "3KEMhxsWPDBcVvbvhA3VWp3q95suyEERsxJhonaQ1mon8cRuc5cpXjYQ2JE8c9bY3qCHV9CKKaS1QPoKV7cqsXeY",
  "key15": "3sKjCPysb1v8RHG8cUvzDgcY4tjrPEnyy5V5Eyj5S5bSjycqzNLpHgm929xTCYNgiYtwTorRpnuYcWQzUKbFMPHe",
  "key16": "5Ze4UtfiEjfu5KD9pPc7L8sboqE1c641diD4s4hsQqkihJNhdpwzT6f8QRD8x3Z6kzfLUMPcM82JRtKyy3Ux6eF8",
  "key17": "Z1bxkdRCPzxPd7EvRJzDBjcLxKg9ddwELrtQu1UerLQtEWdEeTqBHb2PPRfgZYywj6L1UV1vafAzVBagJdVEwji",
  "key18": "2QqMjy5SM9cL7Bhho3xBxcZi8gX2wA2jAjBazS4mbQH7zmBspaCCLT7SNPRyAAatSGb3bFD82iDrNrdu3DZu246z",
  "key19": "3wongNfnAhLWfhiaUYJC3preAE97krPRGvg1fQZ23NW1ikGLQL4wRmZbHkLn7jLup2YKtP2bRonVrDsGVkZeDsuk",
  "key20": "5ZgFZZSD4PyDnSKsFy1iqKzs9q8sQkkgSVe3s3ZAohmm9aqZ94YobJESRuN6X8wCHryQCqjGHuAEJ4dWhihNKV64",
  "key21": "2HaP1MDoW4XzJjeicUyyorVBtqZXoKD4QyeBoaTKE3eaSZZPVo1AvX6NrbCTrsuau8Exef5pdznMwK5qRF54Hptq",
  "key22": "4LVAQW3VPxs6bNht9h3MuHnFJJV5w9dnK4WEop6DLxtmNfmjf4fnurCmmXSPobP4TWR6Y3KFb91em3eHSkyu2KXt",
  "key23": "4vvfQzc6maa6GJiYYQzbASdj3gtayrih3R49UvMXTFX2oehan1gnoR1tWcxPaxs8UsJRRhkDRDz5Aim3MAsjHWj8",
  "key24": "4AaMJ3Y7KFuCVFaf4oNjR1F6bqqMGWrMDhcpoJLnw2RbXcgnqcFXwYYh7cSyKh49EwWm81YiuENqiQcJfsyvy8yc",
  "key25": "McLe6yHSLRrpP2LRSBvNCauHAv3rnExDLwoVDx9Z3cKZry2Tr7dnizmpTimcop7rk1Wfp7J9aT8YJuE9JtQ4Ef1",
  "key26": "5EXDxzx6jcJGxqFQgXHo8wW4CDGuNvVrFwRPyfZz37kfSeRp8qh3fSfkAKk9ZKj4uQStW3pWSR2WWzPZgHfhZSDK",
  "key27": "4YtKGA823LQvRZR7QPm2KsG1jUgmiuDaURch5S5FfuwdVvwqkTtdTTU5dBBSMXH2ij8t6MtfKzFo9fGjCNMSgpbL",
  "key28": "nh6ttfM3tY6qp8HsjhV9eVHezknyFgRtHyW8g3XKmi914ojtpstJKpnvntWt36qS3PBnZrsXnU3hiWcq1wYgqid",
  "key29": "3rnpCzUVibEsEiPrNeYyPZb51kV2CQwFTbPavNc5WbYFNZgismhS9ThTYFrpFA1hu6BTpywj6U1xESqdySuU9WNm"
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
