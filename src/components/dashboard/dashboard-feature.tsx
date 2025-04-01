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
    "4z5eSvCX1M6JHMorKFdPZc9khEsAsUjfdyr5Aw3K7y5w8hbrtdXEqiLnC9cXmPewJ5whcWD33JjExfFoeZ8nsSJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVUbvvD2m8UKuPCgmTj5m9oP5XUrie5QKYas8kDuUWWv1Et9fUvk2ukNnkowuSyfdLoR32NKqm5ccP3qNpSZyX6",
  "key1": "55eaZiPWp2SpXY78E6EhgcqSQvzfsJ62BH2Z5GiGvHbHfFWGDHpXk6E5vz49vuz8D5KoUZVSY1HMcCnZGuaAW7As",
  "key2": "5vTTgvikCUVQyqQNNyAU2nM1dcvTnSSSeL4jXUMRbkqQTuebY6Bx7oRRpfG1UKR3HCDdjYcNxLwPBHhiPLnbffHk",
  "key3": "22HkAJcN3xWhLP8mNP2u7un8Rmqj15JrsRCkDNbCiVCzhVRxQKmoxPjNAdAMeU7321YE5LKA7nrgTfDdodS5kL64",
  "key4": "3jodXXW5SxHi7L5TMBSD3pCLA9jvxTQxKoye9ahY6mcmS6juANjNPt78BFg2nApoGu74Q9uA2VZ9Fg32eutuKv4m",
  "key5": "5NzsKTvJPBFcgeaagwGouo9F89YvEDTw866sumwdcXBgFkwTtP1WVVnNZXEpySRzyyFoCMBQbXr429AYWaM1zg6r",
  "key6": "3kBJwzRSSu7mexZuxXJDUWFw3on6YVN1rm63Adx2NiFcd3PzgefxBCB2Yw94WHfvq836qqboo9gmkghsyYYrkeJ8",
  "key7": "5JYUAsNCs2JgdTyTSxVnXQNR6Xcs5mQ8XXCqQDgvcqfdgeV5NhtZpQbbWxaFjsJRXPPtG2jA6vSkXfkF92aJ5VUu",
  "key8": "4WrSjfbC7HNKLfkeb5rqpFZ1vUWwT3svxQafngkLSVmmFMzrieU3zWG7SRneeQuJ3aGrdwBdkGFK5iXuYcMzse86",
  "key9": "5yC5na6qLxQyBXwmEHysRYTCXDQewYfdAG3T1qr3zZb3UZXpeDVLGkz85VfCWpHehn9eHkBrwGQsHJnBhVwrTw4H",
  "key10": "4QY1fpNyAVTTAiJ3Eio67615QsLnHva6Z3QFmyKejL5BuP5D4QXAXoY4jqfkY25BfTuYXKsbzK6uj2HnaSi469MA",
  "key11": "4XVmBdDevhUuCfaGU79pgxq6TMtsKfyDaT3vCugp7xEMLggFjFJB8ikSSLmPyzD6yZCNzbNaNaUHn9RPUTKzW3LP",
  "key12": "2BMX6wR8UcVrFTi9ANWx73VyM2DBrbAc1UNTkq8irxBgNDH5EE9SwbmWr91kkuKSYRK8mMM6sSnsP72rQDvYwx8A",
  "key13": "xbahQN2JzFhtu79o6hVC16v52VgK6ipVY49BchA2TSuz5n1YnYFUDG8VarmUb3nkYaWgozqyGCWgGQLpavp9U2j",
  "key14": "4dPhtMnRMf8poSt1A5ukKttAyKcDTEr5iNCJ3PwMimTtUmDAKWDGkrmsh9rk9FvUT5T9AuDc4iyCrxUSn1Fuy7Hc",
  "key15": "39xhxxtPLBxdmgqsddwNknXJJmn7ftGUmSoXwauZwQdkXvdtPtAFbrSdrEov1fZ4jRDEykzub1sttzC9Ss8VrhH",
  "key16": "2aiitMV2LX9BnUtWqTX7Ce7hHfS3nbwx8GRTgahssYBNHSxwZLRQqFFjw9bEkEtJDuvLg2EZo9PALdXz1pUjSt4u",
  "key17": "2ontCkWJEVuJz3YD18tk4c9Nu8S6dAnyVNJFeGsaiiCnP1HHSUFk6aebttNn48DbdK2D7Vi4sxoxSLNsT9DNEHbT",
  "key18": "2HWojRCqdDboYupYYHACNj6M87Qcjpbb9zEB4LtYQ7jb1QF3F6q2G3s2huCDTgQQspr6aQ2GbDojWT6cReeCYhdY",
  "key19": "4bmRYNVE7jjXG2SsWzFMXGwMyp1k88tgNZrECDHQBfhUzQwoUP3tXq6AC9rS3rwMuNRfLJzvdsLUsi7ESHHXuCkb",
  "key20": "2a6897yiazLYiRiK9P6eHFdq7YepjeccMumuSevZCkZx7t7baBeoz7yx8yyUVGs4AChKepR6bZdufDbbjKDiNMTQ",
  "key21": "3ft5Cukibi5RbC5u2judhALTEgL3f1ow3YVwSfr3bQhwKUgGAHq5XGSdeMDLVS7TU6sXiDqM6pMgpW1PKmwwN7CE",
  "key22": "5n2QtrgUGTEi4KaL2YBZvs5JXeZ5Cu9gwfCVdBAT5SpdcbeChoNUkEttzBDAz4RooAUxWevTrqMf6gchLDhfogXt",
  "key23": "5GSDzk1XzmzS2b3cZfm7DvzfnTKijWiYN2GyuJdjPjRqWKd6NtXt88jSVX75ApaQz62GMXcsxLeHoGKCzJpZAuPz",
  "key24": "4tLzjTP3KPeQ9KPN63pdPEuYjKBaAhwHAUarBzAt6jk5tjcwFjaFeB5g3w229sLGKXXAE7HPaBzk49zMrVtwrA7u",
  "key25": "ns2F8UQSYSUaBhB2jyLSDAvWMnZUEAzhQS3kpRjompK6AYQEKzQdYEnu1bhUNg1hKKT9FrPGzKV69eQRpTCCjDR",
  "key26": "59hPtmYrhm8zMbHgLAHrMHS6ZsJ7y6js1yK3h38GKFVu3BiDkugtpF5D2eG8C3uB64YRnvGkcxsNJhDRwu7Tk1Am",
  "key27": "Px37CtmAPsPPB22iQdZB2aWSK2pdPN57MWqPau8LoFnxFzetVBgNkgQtikCD6RSsyYbhJUwK3hSQcVfm8NjDhbQ",
  "key28": "3xDvwszFx8YmCc2mCya2tTx8QA9yvJ1CkDZYj9yL3KGAEeugiVoufsGCoN5D3Gu2q7hhHvFoTyFPke7UKK672AXX",
  "key29": "4hbubTmFdGkovMdSGdKzTw4buiLWQED5JZDyo3q7hpDCP95NjNaAW4MZhGxiYrooZ68Mo2g6a6SCMECh776kRd1w",
  "key30": "uapVqn5VHWA6E6m2P7W6JaUcbZ8J7wLWzxxmq2f1yusvmMD676VrG1bAqmG8cdif6X46dNHngqP3u4pJAE5LWxe",
  "key31": "MRnNd6gNFVr4dvZzbtrmobCJoz18rrVTqDTqAhkSRmr3798L7XtsR3XA1HSVCRFJwdoSQTSKLMqR7qWd2pSQA4L",
  "key32": "2CfqgGZCYZDzktorfs9u1th8ujvxHc242byVGxW41LfkpCWMgfFW56kGJEp62yu2iiATZKSnhwGcY6Rhe4xWYNrU",
  "key33": "8MqtY5Fbjk7WBLqE713w2eDj13aQdXVbJdNAE6LNemF3A8zWQzJwS2nxTB8Dxii22MxBYxx9omQTgg2carCw2r6",
  "key34": "5sCs5D1EU5gfp9xjfmimLGPnsqUtRCWQJjcX1BMYDXjrgvnE55idsgZH2qLA83HaUT97Yz7JrkL25vPdGYuow1TY",
  "key35": "3devugYDj27JcKAqHwCZGgiRLyfgaQRpXPAYWBB1H9zVvJgJPFysn8RVkUEQQeZBL2xNh77zZGy1DSSfgccwRXDn",
  "key36": "4is2gqDWYpoWEAG64HYDX49iYMjHrNqhkapoj4Loq2B6q95KpSK47MsD4S2zVPFFbUi82xP6RAEbp3uNJRAsh71v",
  "key37": "3NR34HJuURDrrueL5n6hpQA17TBtXY8Uma86vU1mKReCWSACZ46zi4pf2QiYpNXRkMc2UzUR6pE1Ga6DCL6gP2s2",
  "key38": "3ruNM2Zs4K2Jhvw4QhJNCrRcqx3kVMYbcebokpS5b56HZeS7FAspUg1WnSJgUCuRARaNUyABHc1HX7FXVrt8cq8d"
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
