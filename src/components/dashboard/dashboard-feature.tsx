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
    "2Mtej5TGcmWVDutbzvjTXrYbBaVLBDF3rp49NPuEVA7qq7MfWGtifaUUSVzubzfXkmFBSR68TcD1CKjtzpgyJ2b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BcA6HsHnkigJAwgUGT5Pbr78qtMc1k4EBbEtZy3CaVrnDzgXNV7uWGQTQmeSzmTqnogCgzyvVj28ShSBztC3ZC5",
  "key1": "oYJfhmhQyyohU5EQRRCLLxfvNU5ydFd99YBHvxKQGorv9dx6JdVq3evkYD4wLLwf2TdgsikWE858WRz3XNjintf",
  "key2": "4pcdXtq7j7ZKVGuXB7ehUeF8JRTGkzj98V1vnYve4Meohey3LE6nUDUJYLAiR31AreSmx6ZcdfQcNgSawf5zfMv2",
  "key3": "3q2UcmvoGAN3LYfFLiw4JXBM1vUAyMvhsdcy43H9SiSeEvnSt4Qx5ocUTwQ5rzpVjVusxeh5DWDbTUHXsv9jq4yy",
  "key4": "3E26KmEwbJTb85kKZddFbtkoDeD7XcYaBeJnDDhtRF57rvGFkRDCyWfxxnc3UP7Pjq8DrsDabDAqAF5gc7GouWn8",
  "key5": "39AHU8rPRfy6yA5VcSaeVVkdQxVP39NHGcEVfGNTCnr1VzEjGpjxNCSr5Crpv3YqiU72NXaxo7EPELxqtwstksk1",
  "key6": "44Ug274Z2c9yxaYMtvw5ryTzQmx535HdKdiUzPGkbZzTmMJRYb7bJy3KUsjZBDBLtvwwNoVfAPiTsCRa7bDjxLsp",
  "key7": "4jPYD8gqdFD2KHeG1Z6L9b8WijTAH3FkNgdAUWUBGtH1cvYVMfAmUJKe2LHe57SYUzmcVEoHKUDiKP4korcejZVo",
  "key8": "sw4MvQduz3HcdzsidbJ9cyVXVsTPPz9fiLWejowfiLnssgTKWq6FSqtw9ZgPKAA1opEvoaTgDjv64rjXTToy6uz",
  "key9": "4iZfQxvQgV8MM7F8Hv98ZPKUBZPGwevkDbaj8FV3fipnf1VHbWXCbGWWJ1zntBZ4co5cvVGZoYJSAtJY4ktWLcoZ",
  "key10": "4wgXB3q9zedPufboRXcgCyjjH61nXMrPXbVJzDGcwMUK43oWkYfAjyPxFhuoMVFsTTdgA1bnfty7UduUd4KU2Lk2",
  "key11": "3998HYaPHkTL9x7Fgwhsn4jZELQXbFJj3M2L9aNPftrAKE1RW8TvDwxWFigqhK2iT7aJ96rXPvYFvjVVgYWBHCd3",
  "key12": "31AgzNkFYyj2c4cjVZBEbyWeFuihMvuzZyR1WdV8uNiQdrXEapet4JmxmRXST1EgYUscDXmViLkNSfcTheWEcJYy",
  "key13": "4dWUn9puYCs3azfcGRVbEzNhXmZEeMJ7XZtmcAGJrTbN2CK5Hd9gmKYqGyHePzBnCyAn8bExVWxupRwD4sE1tSiC",
  "key14": "xvoBtgp9KavzgjQ15ahr1JBHLgmDwha99vjViPYzwqnjHBSqNxQ7QtYuQJK4xVoBYeAiERa582TPk3e1921dhPq",
  "key15": "5m47QyCj2XbKJzC87E9Rir5U4ofWhQbCsfyMKUyYCjMJyWZkkd7rtpiSntsLn5vYqTgRFa4TSWMqutgpBmSiebnG",
  "key16": "rsCaSoA82bvAuRDwtkKokWwabuAMKZB1DkzwyxLuDnSEFKJyB6e7X7tHVEr2JvHZkLfocPmzRakz7X9GcNAjEdh",
  "key17": "hATQMnnUp1hwjYnm6XRSfpUL5DpVUo2WP1yZ9MCTjKH6m1tanPLvX1Vz99zGrYA4RJNCqXnEUMyDA2vvuJ9ympC",
  "key18": "3YkB2WnqqPwwK3ydoA4SdSJArBVeDCeGv4VtA233wh2BtirRc39isWBxYQYQVATCEi1LuxFmVyvdafJBoWBAb46h",
  "key19": "2V58qP1XLnWZYL3T7hrRYViAN9sCwMYnovjgiDLWf8Wy6FJSL8RLhp3XV67LWUR1pzZhJ6UnoosnrrMda8D4bV1h",
  "key20": "QRo5fUCxVkc939xAUyWBD5YQhMS4Z9wGAPDvvRK7GypSjwom9S8p8jr13oJBLenUnHKqPtU89r6D8KtLnC1v1wc",
  "key21": "58sz8reQNZt7zu1Nunmifdw6cv2BGjKF17RFPTqtvpjsL3vVETjz8tDZa5qXto392GnX96Nm5Ef7P9tKAAvu2y5",
  "key22": "naDXsKGcoUJzQivNKxLovaTaXLeU5JS5vFAYyTGxzBhpikLBSmurxfaNgcf6rWXD8tmiG9KRcacpTovMWPmXjrB",
  "key23": "22P9p9MEjHqjBttz62p8Mw9VgKRmkZmVqpuz8i1gpjnRLBpvCyqFJceQWv4ThwUE4Tz7p3aEKNgmtDVc7SW8SmCP",
  "key24": "3FYo4QMms6v7ngk7KHfSEwK5YmU9rfVZmF5GhUVrWLJvVhX2PmRJ8M1vsyiqXXrfJELnQQzrq3QSDcsRLZSJ3YiN",
  "key25": "5nfWQXVdL84fMrEdQ5wQ1UWnibUS1NPEgbJtqBDoovz5A5uW8sXCbBMS3WctDuoUJhk95GvaGcQc1bbv8HmKnefF",
  "key26": "2w2mK5fZ4sUhktyDRypfe1jB41CULtb1f72LXnSRjfWXDYPRwWJRJyoZQDHxzhk4gcdmmfv13HDXMkR49bQdraQz",
  "key27": "4VT8hXCnzSCz1NebbXvGR9ESFZfu6BwoJgMHntRettksixp3mZJvPGbfwwyLBGe9qryZDQJcULbWf5G5sfQ1ozP7",
  "key28": "zRw2EMvzJEJMXLJ4iQEP9rNpNPCtrVtV5djDwbcQMybEGBjW2JBakQ4eciys2BzLjr3eW8smM4b4fQKnd3Wo4dj",
  "key29": "63mJkSVAeEoN1RM5tqAqiBrUhfxe1mb4EKq4dEuiMg5Y4DtqV3DCyATnp5RLmS9QD2dk38itGYNu7WUfNm6481TD",
  "key30": "9fL9ALtziSxnSj2QtSBrgqKvRKT8B8VJbmiGzABgzM1fY73e5t3YpTQy9tDLxVgiFDHr1ENUAzTDEiwsBLTQ5Q5",
  "key31": "4Qp1EzvCHSSPMcixPLkv4Newxy77qKNFbB2nx3xkRs2pkyqZoxXUFjZ1fwvcxQuQRvynia6SyqLmBersQ7MDKAVQ",
  "key32": "4yjFBb3niBU2RdmHzjmxiD2rts7xmPptM2eh7YP5rCmU3Uqt1S4TCeJ878YNntvXyCHdA1UZVf85mb16g64EgYC",
  "key33": "352L1fJSEb6KL4dLapWGS8RuHDA3of9zDpQ4fRqHq2bQycCUrLf5TVxswWN47z8AdqRWa4h8SHme3qc5GJhkLCCJ",
  "key34": "4Br8WAq45TDm8m5ReTUTf1umeqQVenm8XX9WubRTccjUJCZh25j4NBkEPYU2gL5Eox7fVHmSsZHAWQWSxF87dmo"
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
