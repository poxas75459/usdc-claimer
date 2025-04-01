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
    "33MZL9gJSdEDX4QKp5azefoaen23X7AGWaUFAS4fCPjiezMG56y2ZbArdKaunmizx2GNyegbpLQbf4nVCmxKP6CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WCYcXxCGnuA5BZp5Z1hwVdTUzJnGnpX9VBMiH1tG77v8z7neRwjNM7wWCdqxzMqsnAco2zMpEYVyihUrVaofzo",
  "key1": "2PetKsfskgyMCqi5Zm5miJJcZbDqCAh84WJyU46u7BDxPUNPDthKWRZbFNo6D8katsYiyLJ1fHA3kkoKrDWWmRNJ",
  "key2": "3P3JsfJ6YAjUo47mGLbd1vPJJfo9ooCFkjXc26jyGEiPMpej1vAiSVFFFFYX2HgV6TdW8TSRp8W9HRyw6j52hVWP",
  "key3": "2Crze1oCSX1fsQ3YoDMUNSYPhpiNZFBrFuJvWBnHgwwbMKzfobxzMjLvkhqP4xJ2tEpLycRuGMuFH96LofKsFbcC",
  "key4": "5kQQJvwYjhWbZPfSywqNjofSaw5QVZeUQX5K3JQcYxcud7a2WUnedE7bzCE8kMaQApYvJqdodtBoBjvnt8QrZ3nj",
  "key5": "5qqPz8y4RLKYsedzSNKdhp9FfrRrQqNHoes3oEK3uq6Dgf2S6fBHqbt5vPUB3HaBxQx6FjL9rBsV7JzVXhhcWMct",
  "key6": "5YRcTGbPXeknb85ua2irNMNVn2a6vi2wGFuFZ1tbtaSpWJ6eDt21iYyx9eQiJz7tMi3s9fnPVdo8UwKbgRHzSsqx",
  "key7": "Hmvy7cY8zmBANMEx71LyiVJ7r9k335v1zmzhEWQHEdV9ZyYSQQ7dnGmp8W9U714rpKUief5pR5cmhb6xbJa6Z5A",
  "key8": "5GuSQvpAnG8eEc1jzgQY5S6UCBPSM6LNrnSQx5uRTQ3JiEs75m8RpkrfNM8oDqv6g6pA2CW2HAUG7L3iuP6LZwy3",
  "key9": "qehWktxLRmvhWU2F3RqQGMHsack7GEcq85vv3nfQFr8egSUDNkA9Z5bvQERKPNX2MXDWdHBt3cHqNzxhnjgjBEa",
  "key10": "4dBH7XPgWRHtASA2PXRRFdo629zkwXevcY82R3rfbYb1L6abGruKks6HaxenESwfWUcWMD6RUQNuRDCKtcj82yEg",
  "key11": "5L3WLEoHD9dxqqqYNcUcXq6T2UTTqp1CaALesWgBLZd4cLUiiCRdZgrisnY4cF9LbD5e5uLmSoLtKbnN4UqZ1V2B",
  "key12": "3XxVv67UZfhVj8a9rvtNNACJHPSKDGFDbE7oc7YoHY87ftqBft3asBmZixMB7ojzXE6jTinxpSH6j4rZGnZFMZTD",
  "key13": "2UJwUkHiLDR41A9vFQ6M1kQyb1NAkQNg7JxxKFsc2r2S8o15UsfbMemXXon6LNJ9xTAKsfWyrJi4zDVHZmHeyYXb",
  "key14": "2MAk3sHDm2eE4wq3sd29MbVvhJvucKFxK6CwPuxt1byHRsjETw3Ja1cuGfdxEzCDM9oEtNzAs8VC1rQHbdgpuipE",
  "key15": "66e17mmYP3BN3evPoy4A5yiNLJTefXKkhbHHJPvNBRhJw5BPSdc8paWXBXKGPKQvGRRrx3EXHzbHgpafVXUwF8YL",
  "key16": "GSZS6bpMJWcivKNqzoR2NoEtx4upx7HXnAnwYKknxkDk8pruoABK5Giatn7bEgyf2ArL7W1GQMXpAeTbqWHmGhE",
  "key17": "2bk17d8VaAPbvhApkwwsh3WJwVAFZFSiizVFLhGjkFedeq9dbU3jkUXnXnaAsfqAEdfaUQYpKPdpykiWnuvkoabn",
  "key18": "4X4XD3e3sKUiGfA2CBRWa15FRwgmzzNJg3z556VpYWmSswpJirwVShmkSEDpoUm9H9AYjgMEe1H4YJ9oyhcKPBdW",
  "key19": "5udi6D4qN6EZNKP99FcFEwP3tJRE7RSof7mwu4mwPe57RfubYzRpcFKhNCFHj5FY5idC6Vi5hKEBn7x57gtufb5z",
  "key20": "4MCw7fuzp6hdXuX2sCVzQnm4n9JUEwfRacS6SGrpiMSrtToMi31Xy4DaKYEjtmszxrY9AjCLPskesiEWXNnC3LwT",
  "key21": "n728s1UuNEfr6fPEKmptZEYGxie5EAuN3vQA8FfmAqphVhLRor5zwL34wZmY4jWckfxR7U9JHuP66PXyB62H6Qt",
  "key22": "2ECHRPjxZwft9KgsgoRUbebwJbWvkLhL8T15LFsz4zZkmYKCwkBiHmcEw5n1zQfF2hWr7G7VAzDecMpW9NcQCUv4",
  "key23": "HLTg699Huc1EebmMzzJosuGwMhDiBW4quFtF1nncw55X2oLQhgdq9dZtA4Mj1fMLp9mL4xKdZAM8RDMcLwYPwAM",
  "key24": "2ah1rDbmJDTmamtbEzmEtvMeogYJHXQKtNF843ZQzSbDegrppfUmZA8BvzytHhQhQuUhfBbzqXtQqaj4fBoNwRcz",
  "key25": "4AP2gLtcq7t7nMNSRovfQa21LyHcYvC33Z2TqeeUBCnKLJZhERkRCGdJGDW44D1YCpW6YExApstULNnyZ2JJMZS2",
  "key26": "Nuj9SJqrVxR4RgwdX7Fdi2AjvoBn3DfsUFMsSVCYZBN3PpF3oJTCGXiFyWtzPmNh8ZgcWKn6sixWd6edrRgfWU2",
  "key27": "4swsuER8z1TsU7Wx38hFza1cu8fc5NUUfQNXM9oTMRu1rqfpqNy4ivBCMcQkutbNrGwTtE22nLcDfJVz4iXRKJtn",
  "key28": "MbN9VcoquAVE4HNRp6vvMK63D84AY9Lx8gdRj57g8v9FNi2FUrg3W41mtHzqUUZZbj9bsW9HN2R2azbPamDWAFK",
  "key29": "YjUx8FoaUNqKtJarXeUiSZi4xU2Cqg5u6hhsUkFGzTcz9MK2nk3Lj8oVyLp3FkmwKtb4WUkusmESHyyDPZBnrEt",
  "key30": "2fneurdsmKVviFY9qKHtS3Mhu7yFSUkYrXZ7okKmaWfzSR6R5V2fmQ3x7tqwDikw2kU2Zr1bhDcZDCc35CufxzKD",
  "key31": "53ZTvcmSs3A7P37LfSnDPJgf78rHDv48mPd2G7T8bQSKbb7WdpTEiaBQhU4Q5xoQA9THvpDNYTVwN6i2wCZecBzC",
  "key32": "Hs2c6EHfu6FHcN4mT57315ZJKXz5tbir1YuhVko8qmcGEG1H15woK1BMMSjS1jPX8EmRvPEiydRYKVCpz47hStg",
  "key33": "3Gg4442taDrizHzmYqu3v5qYuHuWq4LTdX3pPGew9TAuQxW75avRsyCM83T8aar5A2xharuuqaGZTYYTThVaUQuK",
  "key34": "MZygvFeFdsjVeYeRAiW1Zb1UAprjkdZmhYSyBtpTBqW7ipswWBRftmQXpxGN8Kih31U9bGporwSY8qmrUPZmVYa",
  "key35": "4HbBT6Yt8rMib6Gs7i718R2XA7io6fwgseyUXTqqziNeCiNHFCsmagaJN9nFFfhryN6mMJM9AtJc4nEQfjFyZJRN",
  "key36": "52Vs9Z4UumJkwLjUZL4m7pVBqMqFbMNaLnLaLHguabVCwD5PvuZ4Z8EmEKRLNT1VTWQC2cTcTheJct5rQKhgTCBC",
  "key37": "3rBBcf9UCg3sakDL879KZxrxpuy6nSgz4smCUUsE154XD2gGAeTLuM6jao2C2eSURsNWgHAtBoPej1xVFuMCcv2p",
  "key38": "2oiL6Caw4Z5VCpuMscsVEvUQijMYjom9bSP3jsYfAEcqpbLmu4kg3y7bhNd989ATKJaa1H4UywckSxyHFeN3iJ1L",
  "key39": "3s26GQEf3Xhp4yZKS3dNcmpaTP7UGjwbkT5u4cdevGxMqpn4finRZ3FETDgGFuStPD5PBEyoKJs873gY2jnDr84D",
  "key40": "2Qem1ZtLjb65VP2Th85LhBBvbjbNruntBozKoAT7CYEAHw4fvJKJSbe9UBib1AgrrpaXSbn2PThbzcgoP1euvu42",
  "key41": "5XcjCfZ2foca5gF9kmw6o5yyQHGKizCqNrnrKdLuKp6K4qhEWdsFh6aXwdEWi5oFdcbTBBtsE22iD1oGhcsjKDZ7",
  "key42": "3i2eNovgfQBvsdKxZWbV2PddPpSw4A7aMxxQGZAHySBVEp8qtvSwusZR5LynYh2DRNBhvtLUAzYabHsDaNWChELh",
  "key43": "JnUUjHrJt8JvAH3tTApjTb4rBSVgKP4VtQ6EEkgAoBgyuu48zTaJzAGrH42rqTetvpNBziBAnBnrUsBWVQ4Db7j",
  "key44": "4kFAP2AW6kUvaCRwQ8sSjyzD3pj9ZTwvV9SzyvD7N3yurzeTQ3PFrA63DproUXYrvfmHnKHBzFjcjTSDPjWwv8NV",
  "key45": "3if5ywqNDHjhL43RpvUQUpCL27ufE5jXYbwhmUB5DnUwQnUvfZ8VA8zn4VBmTAS99jDfBJ9fmooxG1CZH17GEEy"
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
