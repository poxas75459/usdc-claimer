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
    "VwrVc9e8ugGCUc5fUuiFjaQqitjPThGFpg12dmUZbxsiPhb16TXjsHZ3dtKyLyRwU71A7BFvrGCaDS9HJDEU1iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aug2agYRTiy2g7yjpHsFGmVQrc2jrfoGKdSTVW9h55wEmWpr4p6sYijbgJfuudw1xK9Rvd9Qh7LUr8wxNRcb7E6",
  "key1": "34FVjABXASpaZrT1EYXUNrtqSBeC71bFbq6nEjEWovY8gtiJd98gqx7mQ2g9XdBGbDxLmsfB7tfRaqMjhckQVnVV",
  "key2": "63WJbUMCmf8Yw8q1N2rqwMHHPvJdjcAm2fw1nbASc7SbBLRRr7X7wFhLU6BMn41KHuwwLZWcHS5p11jZAEyJ3XW6",
  "key3": "3fUgCRwRAbjVMrffAUFZdY77vcGnosNq3wcdz4y7KPSGx68bMVFVP2prKED4PwSPEeJKJPTY8eMxtJfAR7FiY6h1",
  "key4": "5sA81QJFomAYEsgsWva6CX8MzV3y8H1YsYU5931F4Lki41uXh5gjp5xSczqBqXasqD2Wwir9wmVNp6BLziwENrzC",
  "key5": "3JBHjFqrrKFCeLnZ37y2o7AuEApq4wCHizFSJkRnmZiYjxBEB6VrwoaFm9zVgVYTUyAFcP75D75z1BcX2b81JiTA",
  "key6": "4BPxBRYCxNK5ZZrd4YZN3B2TVkK7uqqhzC1H7wLYxQAU4FKywkeEC3TJHTQYTu3ve8fFZb4BpSyvV5XVmQKKsQ7v",
  "key7": "3LAstgGbwsQap7XLX5eUUGMaTVs1z8oXHZxuDcbWRteAnVYgBv1idZyCUGsaHVGMvotFeEsTdzqETW1VCuottJ9P",
  "key8": "5sZSEFzWKx81AwgXe2YeMRw2Qeg13akuYWvjxx1jmkTrwBDVdXg3BxbJ9w3aZ1jX5N2UzeoKVvbb7iciwsdEirLt",
  "key9": "3ojjgy9AC6nGmq7G6TpvEGXLXcu2bx2HFBCMfXhNytqmjwcjCHstcsQfDY9A1tWQxgEwWBqm5NzWfgsmythETYyN",
  "key10": "2WZy5iB6PYF7FMGMys6cps1vgmibXWkJvrFK3tjQaJaS9hWVcTcSbCC1azgajqgKC5UJ9adE4RZXUAoctpA73wqA",
  "key11": "rtWtFuwJEyHenXB1YWEYSXoGziZkn9VNv7cGEKp72mpPaLjGQBujHRCdgmMMCbMtz9aPQyFbHKvv9bWzntFJXYk",
  "key12": "1iiYdeonnni2k3gGdjj8CqB9w4aJcctx8XwFyVBzdM85ny5tczqbYaXVXUMdQ7kt39JRfVFoQ4Sgx9uMPTdD1L2",
  "key13": "5t2CgqRwkab15KwayWEhkcU4JuHmH3sWVrJjPbR7grabBRSdGJH9jsmL3xmC77ghTNqTjdiXGWYEMrsHq7a3JiQw",
  "key14": "35s7EQRmDDuxmbPbTRvWjCoSeY2DJJFPEEUsjqxe1hcqhu3BHjPS3D2cF9yLvk91PjPryHoasw8Eh538G5M6NF91",
  "key15": "4S6rqJmJCtD3jphHMpjEK62EZWYgqNJkv7YxvkNXq2ToyurzpZDiwc9BQftHQQP1hjw19Y4b3dHcPwJbRrktfkfg",
  "key16": "38jh3AZ2SEKucThQHZ6e8DSdvLgqpqkgYKd8W8sykCsZM58Va6oZZT5w8VStvZEkwf6on2iEuPPCZMXoQDHFaa6",
  "key17": "pT7YdjGksNUEW1X86JxHNZLhKArPCSnhiC2FKQq7eA8QDoCV3tceP19GnTc4qWX7uM4zSGRPd7kg6PDYKMNxXKV",
  "key18": "5Tfpmc8cQQKiorWpqXKymNMd6KwhXaLyJgrRbTzmQjTRgph5TTqkeJicWcdvCnaJoSHrRUyymftoWZZjYG7QiFQ8",
  "key19": "51RCTrSb628xQjZxQUaqe3X2SeLhaBhWeQgKJiPzewJKVukPPxdxkunf2KdzabbG22F6Fmzi9Vep39buRRBL4TnK",
  "key20": "LvMvwPjGHX5p6tcRDvP4MZo69CmR8sAgsr4v9xr6dzbPgBKhpd6wdLEZwbrc6mSN13aCYLrhDbzzqTQVQ1m6vTX",
  "key21": "gvZeTXVkpCcB86JYVF46YBQjh5MMh1KzKnMjaF4YWFNSU2EnuPo6VmZPx3HBQPvZ5bV9fxRJzK58HnzSZhd46DP",
  "key22": "4uaP61L7siEv23QC18qMF1kNj7JmkYJVU1jxDPDPRTnQJoPMWBBe5xZ85YFWf6uAdp3Rr95aFMowgkehzG1ugsx6",
  "key23": "ef5rtU1C2PJ8RqvR8JpKuCRXnRCjEBxpFnkCEVbCxkbH2iZUJakFmatbezrtFgjUtQFuGTJmg9fgF5vTmNorqnU",
  "key24": "vyBChiYxbzYpfRyqrJSMsWzKtDQDeB4nzWG1S9voZkdwYRAL3g4kJ72y4hEEuUnLB6K5ryG3sacdkEna93L5gAv",
  "key25": "5hiRQChJn6GL23vQXGtPWdYd3Cb3k5Joxxqm1NLoDBaNgACSpPX2YNnj1GaNEVN7uhFWpybNnopZgvDonb8TcKXD",
  "key26": "mmRdWEfXmQmYSYoD4MnkK6qK7LDxwMYSzeuBgSwgoWBQrhV5dV7X8FaRc2wkYtELPXuCnF67bzeAadRVE2ug93Z",
  "key27": "iiQj9GddSkdTb7wRM5MGnPPceSaumE8Buwd8f9GJXBepWGPk7pvxkcHN4TgEXSyUYxxswgCwRfXF3BYPQyZTMn8",
  "key28": "2pi8g9oWGeMomrUmjsxMrdRin2SijsyCyPcyRJgWS6Z9pufJiwD8jmBPjoPorGYYqEgaPDijXDEuXu6KFr7UnjrJ",
  "key29": "h94uZEcohDF1VjSbt75g8m3mdgwh496Nsy454fWCNWCJ3537t5RkiXskB42VXiS88zBBgF1YAsENVkDkov7VwTj",
  "key30": "5L4zMJQcH6VpnzpncDk9pWicj8nxRnf4KXLP6f9yM75TdoV12gc8ouwxBfhNNB1kHvg1GSrgrUC3dWKNBJaRbKVP",
  "key31": "48Mob4zQcnbiiALorzHNAWbBFqcGjHAwER3qxx3JQbidBL1HWK5272ofZ3ghQy1DNq9GMWGHrrWBkkieTDkuFsec",
  "key32": "4cNNa5ToyE5TzfmMDAvmP2rhTKACSWSxqt55nT8EpckgAyebhAgrrztyuTNGjKLzqnQoCnwWLNGM9jddrVUDAEe",
  "key33": "4aefXGym8KfuY8JswK9PVePSRaxQeinCMs5HqaKFadcqj3T3bNCHvE9wbKv3HSoYL9HzZ4G7vwAKQdivJcXjjYB6",
  "key34": "25EKpjeG14YspE7EFbBiwDPo89Smm5SHcnmn46p26VVpDUmqzkgqEPPp8FJNoTFhoJzPcskAgzLtFxXBr4A9CQYG",
  "key35": "3Lo2pLr6qCnsKESZo9CK24xzaTm24pbxcQc3ujHj1DSuL4Dj86TrJMV5o3JHSgqBVqLdg6pTxYknHqtjUL3xuN3Y",
  "key36": "5h6fCqd4ZtSQzWTaz2SKffisXBN9VW5tYY7cHJfoLDap67RaQPwBuuBAmWgzm8fvaoABKibFpz3xNnXWqcebRbwa",
  "key37": "3QKFqGMuXe62McKGdbaLcHamVnuPyREF2hGAYqqnB5nVF1zZDFvDojzf1aysUhhSfgSte2RwBR1Lbixtmvw65ZL3",
  "key38": "59N2u7RTPFnrdaP6UWqxkkbWgTxEDfJhiqkDfbaeq3FEnf9NhYKMtgob8g4VLAGgembNK2vx3NqKShZPqjcfSWde",
  "key39": "2ijjrznAHuV6Fa8prDTgtp6qsprVugGhpEox154eMhouGU7Q3zfqRFbpqip7j32o4AnVTrajJxiuG5roipcMD9Jr",
  "key40": "29y3Mbeg7rU36T576jbNBTy2coJWBUkKi53DHhhMBhZAbiMZkKrVGtPrXbqcVxyGNMWaQnYYEXEhUMTxLCHtPCgG",
  "key41": "3ipVXw2eQ9agUWD1maQWcG3gLEkBBsqtD5WBeG6fMHeFuS7AAGmMdnc3YMxq6X6CmvTpSo2FMaQ68WbMCUBgJfah",
  "key42": "2K8Yy9UidFbqEca1uUo1KUpjjBh44Kwswg9uFL8EeDtzsF44owFF7V5ni7i8a4gsTi1rPz6cu8oKm5vg3aoHhbtq",
  "key43": "2XJoCrW7cZmY9VSGzqafjE7xHgTMxgXwCzRvg58GAwLWuPn2xTxLgmUXTd4gEaDELHVjZvGDdkbWJmbCXL5yyWsf",
  "key44": "5QbP9geh89djDVAXRhRctAa8dX5uQWjcZSfqEdBeBkyLqJ8Xpq69gtjGyvY6EoMMoeoQCLHhjMv4jbjpAfJgU9My",
  "key45": "gwi4KTdaoP8tnFi1QRT925wNEiX1eP9aV2gTpnSzYq6D9R8zbmJYSvjS1ufCAnS5xXWzeFWXFTsmTzQ1uFxx4UU",
  "key46": "2QyMkSCPaUMCUDSAmycRtMa4pi1MS3PahysXfdXkKoCULLXex6XwC9cA4WSBx3A9tWHKH2Esda8iM8DdozAPdZV2",
  "key47": "45X68HVesn21WLJhqaPgUzewNFDb1vdmBXnHLnH7cy4KEPTCC1eord2TniSV7pYq3b45YFnht2tXGDov5EDuzhMJ"
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
