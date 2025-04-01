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
    "3xKDxzZXprWUt2j4VzVDuiLYntGRabZGUr5nZL1reK5QEcNUREHBfVBo9kR7JdP3eGjKQwNVWfBmXLnNav3KQHuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLXUVzQfz7Hrzq8bMzBffYu19zRhCNKfa1QpHuenLVYFRk273UR6fTgBQWt3YgaNzDbeCkE1qPjoUwwZTaWzWcn",
  "key1": "656kTotttuPnAbyXgQrHhB1MsCPGiTqWw1JoMSE5qo4NuNwUkaKcLmC6jhc8Mz5Sybipp1BkbmaVMtZ43UvF6avW",
  "key2": "2ozhtCfepJD5pzjGD8hajb6saP2Ts77BxsNMsgPnihAsLKGjXwLJjoVbkFF6DDrk1DtcfTbYPrti85pGqDHpuScV",
  "key3": "63GSbpSwHLdQ7YdMfpQeDGiJUojLizPsZe76vsTZgsdm7B92dAbTPYffX9iammiJxNhoQL3CynVZ3CoEja1c3NWV",
  "key4": "5HLp8dzUhS4QxLjA1XAvyUUvLRuS2T7pDz7K31c1mNB6Bg1LTCMG6pMdYhXJ9y3RySn2YsW4hoapj6zuUdf53Kom",
  "key5": "2UBGajox7NZ72qvTiKpbxdZP2HEqFdNZ9bPshms1oms8ZGqAa2SDZtm6gaxUvXoCtHVCGUpG2HkAdn5wU4w1ySbC",
  "key6": "3XPdcCZNj3m6vErhLztzjnLkPo25Wds6mFTZZjsNvmLiYH5tytzQhZsnsKWuiEjXbTTxjiQ5wBc2QQoSnf8zFKeF",
  "key7": "myd1na4fZ66EmNC9pNmHvYD28CidVw4Nr6CZ9TLM7ipKNNe1GKpBdBSheta6VYrWysJpVxBV4cSX16YKeNKagtW",
  "key8": "3xmLKTnernnc3UckWnpQvE4nwZpDrzLPEC32XmXX2Csi9F4g76FieMKUZ1MtDzAsJUmVivwzW8PAugy4ArH34aaS",
  "key9": "459Pyzax94WCTZAst17YUqPmkEj9ng7AHReC4gdpcG7xc8pVXRH2ey9qi68uDreLNMUdbZ3X1574D7kErD9sTuQ8",
  "key10": "3ZY5s2EBV6nJzU5p7C3zbVGEm3JsbbirZEagS3ANPpRRM6KdgFbbKd8k2X4bzhZyDc9ZDdyz7FNxBrkzBTjRViYq",
  "key11": "5TnmRN6L1SgdpNELNQXLszLDBjb4tvvKj3ydejjB549PuJXqjS4d1B6vwf3LdozGS52vHu8PjJG68cmtfGiMktbG",
  "key12": "3rJLW17N3eW7pu4CqxAqTxTM2XvCSGShbWEChmQZGsbkHYrLJXnG2Ssu82EuNRrNsVPvtAey2dVsHTB23X4htbUx",
  "key13": "3J1gGznS2exhGM4nrRzXUV89BSb2UbiwXSJz1Qez2oEwM2vpVZAvFeTvM8T7nFJ2CqGNPWSDT1FTkFTofxSZcJMT",
  "key14": "22GjCQtuhP52MtSboNBPf1jLFhFRSM1TkHRJDnVQVNx7YVgkT7y5Zf3sCL1ZUWS6XM5sZpbyPH2Bb71wVBnwEzPg",
  "key15": "fW7rPL4mWbTuhaRMtYxvrNtnxG96N6msQ9BQ59qVwoHjFHK79j9g8Y5dyvfkcprxYCaMRw6NPLuavxKxoFEGwYS",
  "key16": "2HXY5QAhjFZJpnDF79u6Q7xb5G1M9WSSxRyBUmeeaKVG5MW7tqCujCbjpBNb2qqBEGcZq68BmPuY3EEB2UGyCWox",
  "key17": "5VnPCB4TWGmPyxeBmgtVNu4P3m2qF8XEi4zz4kBTGC3StHUU6NdFZcxYgUkE1CxVwvXuT28HX7TLujVenbpS1etP",
  "key18": "4RRTdThASiRBFoWuDTc12Qj5zcDo1nQatFUfsRZ1fKCTxkLyStNx6gtxMgzf85hyXx1ro9YJUPnwpxpbAPjD8krx",
  "key19": "W8F3cCrC9XbfX7RKgcc3vEdKqwUoC1qVaspMvgbe4up7WNrD3pe6ZmbyBMe6C49tj59phoCwbasjzespWZAosqn",
  "key20": "3tbYhWRbuSmwFkHif19gVTKbjpcznvdpaBS1imdbgsz5atyVckNAuKhoFN7DTpdub2STBYWk1Cz9QESKdr5nBtUw",
  "key21": "3xVSWguHXmZgLnSzkwKGvXEzWNVawNP5xhJ3AvKmtv297mQupQJsMJp4CaCciyBG6CgtGgK9i5u8x14fNHCdN6Tt",
  "key22": "3FqtCJRx5g2yPfVbzipPZZz8SYF5mbyJ6yefZriTR1Qzcro9cATbHW6y126AZxZtFmpZ4v8VfSvZPXaCqN6JRnTa",
  "key23": "4dXZL29gpR9U3qXYQsZ2dugTuEmSyB5mKoQj6nRR4J97CHUZ5tkdzwgwnAgovDKE7y14nQ5BpGENVTsWMxat8qRt",
  "key24": "4NeLordrALyggW9dt8J8qBxLAot6jWzZgyfWMzLxXEQFE4pcXEPiRhJJzHrWBiKBky2gf5oncFBgxyenFGipRkF9",
  "key25": "2QfKmhswJ11JHbhQqruAwEXFq9U23rGzKsQNffsCw2D8F325aipjgVyqj9XvtjPD5F5bk5bLDTxr8TniZCm1vS84",
  "key26": "4Yyhjx8v6kqQHxzPXpg9qah1QnFasvBakCBKTyyz7d1C6G2xfeZFxVinnZic5vE6guUQnZwmYCGFHkMLV7TMiGyN",
  "key27": "4kkfnv3tR3ZEMUSxnSBobjyp8BrtjrWSFfuiVam4p22G2KfEtFPfeuLQPWm9uqX1X1Lop2sT8dEB41yfs5e5k8oP",
  "key28": "59zHUAKaQ3dRE4cJBQZyCiJZxftANE48GksXUVddbNPh4echc25H4JkjVdM93YUT1DXriKmS68uyQuUcQ4YYJ3vv",
  "key29": "4dggx25hXwaouEmYzZurhPrXJxbQQXr8GVG8ofXn6yG14TiN5JA1KLLtZaNSeHDfQDSvcfKjHBWdXEZdFsyoEtB3",
  "key30": "4RkHiiWb3rGVyvgSWdmtjVacQvrxk8xw1pWxyP3tuPs7snUtBELJHNuLGzjaxNaKAEKUVoYCfLBRwTCGDg1SN4AQ",
  "key31": "sxRxwvfiEBPTic2uxschdc8tw9nPdaMoLPg2QGjfvXwsMQtQWb87VYqpitjHc47BWbXNUDrdSdJL9dLg87Ui25Y",
  "key32": "37E1dnZJiuc9w3mMNNazFvJ4FVGiLsE8uaHhVzAZSaDtjjos8HpspLaBiup2TuWrHezwJrtFZrsd4z4UftQ3RzVA",
  "key33": "4b6h4ZAXsC57QZhtQZfKpcFrLF7Wrx77H5e8Y2YPnrSjdr3ZjXqWU85cAxozVyt7T9or4zJzVa9eU7FHA7UbArj2",
  "key34": "2aQKA57Mdt9u3W1FRPMV57q91qusnufXDeRWhetdsWSYrXWpoEm26yoK9rSiRP7pvxit9HMezsWxjSCacy6NsJjo",
  "key35": "dCjfjPrziBN6py7fqxHCLU4YZU5qTVXC6NfKUr4btVhSXrFQMMvhWFb6jHs15mCGfT4N395hF2ayQ2Z9a5BMjMF",
  "key36": "2XewnfUkZrWrWhh3V1JhtUVXLn2p6RjXWCPUFFDUZavSKB6xjJLrKa57AujSSMirYXkiVDMovsJSfLdvvCwiCH3i"
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
