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
    "B3cAo8xkPBxKV2HuAVR7L9iY6cnfVQxnr1gMqkcgTwQpWyHe9MVPw55Fc46LUVucUh9nZpsCwDfTr2SSDqL9H5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPqR58JYfhQVqx8FK18Lp2XCeBWK8g2HLkVzzY8LpE2UhmK1bmUMbQEX6syPm8RL8h7aUcQaB66KihTsUJz5GNK",
  "key1": "yGHnuVZ4sqa8yCBatMBHoS6qKKggJ1hXSS6dvZ24tNZ3pXpxKtCkepEKNmbeyTgpoccpf6QEH14BRDMuXtzkBLm",
  "key2": "amxwxfiR6x9GtPCLaSBwGi3uD5oVCNCE4nCJjpzdyd11od6P1WtEZxbMtTF6MwJ3qS6jmjouueaiMgWdVjJspYx",
  "key3": "2B8Q9WdAGrgjXVjnXf9edbPdMaRPZwC8t3JotPdhPNvkn6JQgnYuxp4JcueoHyN7EPvv5SAEyCJ1MyuK9ps6WwzJ",
  "key4": "5yo14bNksqZhnfHWdcQRG2PFFJWurkFeS9pMoqNhU1TBBXR3poF8oLa3kYYAgNepa1ZuuDf1kLv9KLK2hCNuDMvb",
  "key5": "42tPDbAzmWnUm4yv8KaDDKib5EXHC41ZoVUxzaEtU69NhbiGpLtxxVp9QzUhTyNfYQ4saApu8zUQE7dCgF5ts3gp",
  "key6": "5gFEJYcbW8zf9y5nmLmHcfvf16gkWn7nwAFDomsCm9c9hHGGTPttvxnEewhG9qq8Qve722maYznnR7B94DmtZsae",
  "key7": "3QPxxBS8WiL83vPyK2dJeBU737k9CaM3Goukbdp2uZQzmvRkWHT5hgatB8KtvtMnbXFrmkMr15iTi8gwRmzL4Nqc",
  "key8": "3S7kH7AURE5kDxHuLGkqrGms67GN39fogC7N17PuKnyjCZNeHAtkTWQ462HxMhcwXBQTNMzxiFH3VQBZq5HtqU9B",
  "key9": "2zi3EdHqcMcF3tWizqwvHgRZnRA2go7fUAmscwzAuwPSp5sS9v5TuLHzNfQtgF2vxQjXdbW2Qu982ymvBC8vwmWe",
  "key10": "4266pahoRevUYXxvujprLyrPwz1deKm8eVrKEcGjw7dDn6XEp1Y4dLHaxSgxaebNs2fErUAuJ99XHdcLWfWvZgvm",
  "key11": "4G4mJw4xDiyEFxbQ2hDfX3weBHLki1zDmp2NQUNY2UsfHzAoi9tE6S1uT5MkVMthcWAtHcxrxZaWW1wq3uStpX5y",
  "key12": "38U1kTWkkkdu76eXBt4wzCb2Rv2mEk5TcGxV3gajPVWFmDUTGAFT1KkfFevtzhiPFEvwtctw3JoufQdd6cL4oGvA",
  "key13": "4Ad2qNw4K2WRkqWekch5xPGcedSrunVAo3tXVxGQjJXbAVmyDckUNMxQczicN2TTs5hkEXi8wAoTscCosSe8kfuJ",
  "key14": "VVHgq2fyMbNYbKEYjVCdnTWHrdKDFdqzcXRrqALfQVgJ4Cby12gcXK3FEQGxKefbT3LzW1pnJsUK3sDsMwXmnau",
  "key15": "3B4y4bGwq56Pi9bifkZJkSAtzdwxzdDCJp9fJLCYYjhHa2BD6Zo5nohJ3NHPYuTii42D5x2KwfJ2s9zhfEpt7FKn",
  "key16": "jd9sZyBYQAgRJ2SZHcpFyULhpkrPjdDrVfB9cQK5jEArHWdz5B7V7UzYCN6EhK8WBQkFZ4XQCUvdZsiGH3kmfxF",
  "key17": "34Qq46uDu4sjJ3N9grobUJxJf6BVERFGDnUi57pseX6kLm37qthPtQknymLHTXTirM5VoBdhKcXizFHBMKc5zGKq",
  "key18": "38KQVfepEmrJhMNwqHRasmtrA3fn443UBnP6CuiCpvRCDHwCGbcDUJALabnz7YmPusw7Ss1oVm6Z7gG34m7BaKLL",
  "key19": "37LiQNGKUibVQN4Zjxy5KSFP9ws9ARVf4FDCxn56VyeuGMc1c1rKshoJoTnEQDZN9jvB5otsVA9DgRZdWVwYbALf",
  "key20": "2gQaQVBBkpvhfXHiCCGZ7NN8iAnBCceM4iUHwWtsKJYrjwPC9nRfjo3AfWy5M41EcwTYFF7kRDxgHh1N8W3ZykzG",
  "key21": "4DETUpvjt8HtHmAKcLArCr87A9tDJeNmFQvAN2WdEg6MABYysNwC15NmDRBSXEhZCkxGPy5J2Etp6Wqa7fQLh71D",
  "key22": "oPsGeNVqfqPHexZBKBQPvdtcCUKi9d8XYoGCDckWg59LLFDaiYuNQvv4ieQtVxz3sqjhvnSkyeTny56G9Zqj7fR",
  "key23": "3bKPi6MxdggyQHosmTQSLdgXuYNqHuPri9jsM9goyTMN6ve4cMuZyypLrt9mUiEvC1oiRKTSwWmv4zQX4e8oWHn8",
  "key24": "3cuYUYQkFHD4qoe3gfSzGDHrgHWz7ZAcKdEqEtM1nfS95bBKecSJQCTfZAvt3Vq9HHh2evX9X5WzLhSdPQGNgijT",
  "key25": "4j1euQUn1AygfaneHSwzKiVz63WT1v6xjTAmrH29NBpeGmYpxEyv1ySphQCTBxe94nCqp9vXm7dqATZuZyEjjmj",
  "key26": "zjJuk51S6yeUQ9VJdajT2gqwMxu2bavCksZQw9ounWq7HTVdkzi9vbBeZM7Ns7NTDQjP5oc9V2Kfr2X5ZX33T6P",
  "key27": "3UKJnMw565gxShgLG3Bqa6YH4XRoFn2jkgQPjD8VWrfP5k83MVqvh6GUe8anxnpZRY2XYLVLnC8ZaxFqq65MQCrN",
  "key28": "4yUT2Pd5CKFs9Mk3sK6Wgqx1BVdHQoZKQicPTByYsP4aoFiA1eTVhQd1sDY279ckK7RbAfvDuheJpAwR95pUQHmf",
  "key29": "2ZkLGyMR97yFC4fgGFvpC5j67e3EsQkgVsbkiDsKb5iNd5L9a6V2pNd8HbdVK12XaMnUpYpPs2ECLHesNoJy7s9a"
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
