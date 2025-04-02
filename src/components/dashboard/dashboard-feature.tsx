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
    "2o3etAmsQiG2rt2PeQsEwQPDyfLFKtBmfQ8USiYAdLgki16JTS8K3JgiLmQUXRtrfd2yft6Mt3PEYeRRFA39mzX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRxY3S8WiBrNLi4VfX6ij2Q2ad2kYhZJVSGegwnBbSVPVVpyWRFRaVNWBnQC7VccspikswweUR6PjLkygN1XDnK",
  "key1": "5BAgQBSL5hcVxh5VcdBnCLZSkfjaFghnFSF5Z1xNbh45Giikn5ojfzJECD3WE71BERFh6vDjWSkhJe1NqKmtji8u",
  "key2": "3t23h4sFT4o72uiP6eMBKEgJh8qZ7KEzMBYHg7XTEs2fCZKjAk7JZdWHsmqwge7EEqDPZLUV3dZN2xt9ExiotzkH",
  "key3": "29yqpEMS5P8TMBcj5CHsRYQXXRfF7zFjf3hUDCkfi3pEAZfXkjUKLD73MVuFcCNbF6rm6CTPgxBaWiUqhUXhLtM1",
  "key4": "4ijXCnMLFFe3xZVjvUhqf5uzhhjtYgiFCHiJZCX7pu4sFJZWsYJcJEr3NdtkU1736mBUhg1wTCqj9MbAKAAffDeW",
  "key5": "3FBLS9TMu9m3Ju1PozADFrNfDd68iFqHuayQkcjNQ58gKRSCQbYCkrBWGp5G4UL21zoQ8xMy3vj37deakQZuxdyn",
  "key6": "3W1dkP7B4gRyApWWXjqRW3pKajiEds9VL9nkxUzNs7iWafLAYCcnp2pMsRDrkzs3vZ8wEernew2G5DjvDEe2nSA8",
  "key7": "3Yqy1m7MbcsVyygnfkhxenvcQndjnoLFL8MRvyTFpKWgNRdCNpZESHXHUapfrwunm4wmkyBj2mbZxgZX3AkYVVvy",
  "key8": "45PnCHxY6bXHp1dbG3gUs47ztibBQnVkky9i1WiNkcauRmT7w8xVsjFsoT2x7NEu1QWt9wnzNyTXMCQfvejLC84L",
  "key9": "2Q1Ys76afQ6XmqkhZP9e4Zawzbx8A43pwv2G1BSHGASXJvvWQYvM1U3A28CuCsZYArf6y7uPuDzw5gKT1RbeNN6E",
  "key10": "ibsQ9F3BCJXARxa8rQ2mq1feywxcg4zYkcE9qHBiwkWmH51xG1Za8TSJK4abTeTinRpR2rLqFgircvvk31rmazV",
  "key11": "4TpjpDQJAwN86pT3Bfu1Ez5tjBt2Lh3DnLMjRe98GPdF6rxu8nMmspEMK2PGxXvRC5jSfu2XfRnXW1r7DEFh9emn",
  "key12": "5z3XutFDtS5nqeMpb5resVzasfQvMvhGdK3xW2LgjeUocvHqcZTC2gnfzWnjingnq5DYmcomuRUQP9wmd7HYuUCU",
  "key13": "4xqYambVpaejWXvDUmMB23882p6orF8QN3FfrK6qwDEinJbeeUS9oiDDMuFUptSK98wNxETkr2z9pCFSpByoiUeK",
  "key14": "uLbyc1CXuD5u2ZUtEb94PoWBWFx8CcGVogfuvziET9NWsHJ3tYsgiBkS6UgY5JFY12dX7mPJXs6MCwKRDriBVob",
  "key15": "5HPwTeKMgw2uCufumEuSEvKtuAsVhVXgMbwMQL3m8s21s6aWRf24dovgXwTx9TSRwiKfHRvGcnBWh2KLfk63Y4Qh",
  "key16": "3eLRDEkh35cavmDDLywKwu7zxf1arLg4diQcRhosRDeVWwKdKMSPe4H2AxjZgL7TpqtwyXtaymf6FyJzWGGoJu1F",
  "key17": "4tXq5yy1uqYDgGEhv9FYR4DJfW8Vyg9NQftzjtq4crVy9BMrYKSQz4sDGhCsZtVWXyAFa2srE4JxA9PwcpjYFaSP",
  "key18": "2UQxrMqDTz5vG4dsrwwFLbMCHUPBUP1bKQM9Nc1JKwq3RZKzJUPLGUBaKaHDbrNtNp5RSNaPo8dyaa2RpbGN3XZw",
  "key19": "3fPRX1n7QRDiUHtaauLTQGsT5bboTW2qjcUCBaM5joA1REdCkDTAjEScH84bwUEu2CSMu6SGNX4B3UmoCx3L7PGK",
  "key20": "2ZUBBk7nKhqEMrkpt1o8Ggk95akyKtwSj6iDUy8kAKsqRQUiRRbJb1dxAC74FcqudjRYFQwz11pAQZcRshN6LpnK",
  "key21": "4QMrbNVXqdHpxyjUtkovKWt1YwwCkPd6vmSSjMNFYaVCWqVKfgznn5xyPVVETPS5ZPALZhu2jxu2RhLqqEiPoNdQ",
  "key22": "NU7yhVWMtczy8r36rjaKR7VvHBduQwTr44nfuhhoF2mJ1nArAnfiDDVcmuYTK6qrnfVvRuNpvsyJagJy9YzStgQ",
  "key23": "4qiqn4rHzV62gwSqLpRrRtj6PFLv122hVWZLGFChwEj7JnoqsUwwroN7ji6z2CcJCzguFaYiLKZ3cwo3cCZHTXPK",
  "key24": "4w4JNHqo2osSsbfGWUd2DcoqDtzacyAsCNM3pAqYbgKsZs7dRqhma6JfBGoAkhvpxotfZvYLtRbAmmSiu2hhgypK",
  "key25": "581hyJS5tVyPiuBYejDgL7yBxawnqx3bXvNqeYaSR9Azb8ZUk2oJWgbrNNfGpHxecYe1nqudsXiEFNM6rmQ4VUeV",
  "key26": "3jv6E9EBnLe4uTajkStUdCEqJyJzJAuwXxxf9y8NRuG41MA3N4Lc6eNUmPXPVUYiLx2FtE5TADxDRw26SzP6TYV1",
  "key27": "4T3CF9YfFGeWJh2Y31wTnLEW4vTkJDqzaAs5hiXwwGLKdgtMQM4e7LYVhRY91TPZmuz7NcVfVMMuWmvgjUsMBN15",
  "key28": "4NREejJoLsFHMuu7qj9HLzBbWsf93HbcDNunktaFKSr9zGWVrBaYDnAhnEnN21DajuF2UzmHUyXLyXUtyZdUrQKk",
  "key29": "31tpMNYgcGwysZgPJstoUdY3Wx1xbn4j7csdnxt7x1khpqXzcEBSWEkdxWdtByqGeWecvyBn2cAWDLouij28aaLX",
  "key30": "5URZ1fm7q3xFYADCA3SSxRYVe58mPLk6tzvzq2vBtGy2qhKbqgxPJsQHMrGJfhmG62CtZxNvftemWyejFRXhCWw7",
  "key31": "534Pnj8LV3PymezDrzjDmeQKaW8jXbEhkx9MtBYKX4xPwLV9WJzJE2B8UdxrjYWBTxm64g877zeTgTUhnkWQt1rv",
  "key32": "SpBJaPSKbhjvM9QB8iAnLVwExCJa8PbM3rKKx5tK9VDMX3SVRWmrmDNkZtoKmgTZnMWH9Kv45gSN4tqt3TovgZS",
  "key33": "hXMdofZ1ao54KxMfDiEedRCBbmAMe98G7Lx8K9RtXx4BpV2a7XPyKhtXMafQnzRWaSznnaR21jbBGoFiXtbpmjJ",
  "key34": "21PK4D24dGqGsQjYv3qNYuc35cEJuSbvb4ppxEHCL4Wyhhf3pcqwunFfonyEkrBStm1j4wdGLWeLgzGEVkx7G7Jt",
  "key35": "2gxV9gKb5Cx452a7SWHrSveQ5uJ8QvVi6G8Mi79dVX4zkGGEfGsB7V3cJzbPN4gsaBKzbLR2vgZvdsBx2grVjdzU",
  "key36": "3hesmpEwA91zkjzubewtgmi9qAdvzzF7NR5zMk6s5v28FUCESJibNxeFWvopCsgXwUVahMXGPwC7sYxfnQZffMUC"
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
