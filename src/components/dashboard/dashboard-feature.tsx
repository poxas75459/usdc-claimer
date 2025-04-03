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
    "3ptuhES4rNQGFtEAWL27k1fG35d8TxSrWzP5X7K86KYKFdiBWy7XxREpV4VrDjUsP3ru1ST9zkyp43uojjBt7czi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4texAHbiCdg95LSbAcQL15cZkXidVDvuWfMjbG3BZWWcK2NrLo2xBaGkpp5guYJvPepoDmMorTCCWs3EVeAsHrbX",
  "key1": "5EM4vcyWhJiDQaqoNWjggYayxcdqKyqAqyzQxDwQzkfCj2p8Yz7FozcP4QaZZhQbcmPT4TFXPp96UxwgreVcLg22",
  "key2": "2e9bWTdoELDtKkLVdJDvZADQxwSTmWfw7V4gWrkJPPzmPHT48jMxNZFh43xFkbDh4xh7ThLk6VrezMqRTqRktrrr",
  "key3": "2k91M8YTgac4WkbD14FTq41ZCJBgoKMqcQEDsB2wB8SsZ3jojnSafcyci7TAi2W3Zewfwryv1N6KnzKt1mVeVb1U",
  "key4": "2zcCcHnmrpbJy66ffxsKWCxR7UhjsfQrKNJ8oAWUnDibt2Wtdnd5zbJrtdcpZfurGLXaYQLm88nNuGowWkAxjqB9",
  "key5": "5fF3agNBRSG8TkVbMcN8AcC12PvHcZwUuVuXjKxkd2RhvxEkX7kd6Fe4ejzw4CZUTyQokAdqNRNhjcbEmHoZfywy",
  "key6": "2fyUd7ccrkmsUpNse54Q4M91Kg4vc9JYBNrCR3yrMPckNWp18PB7feLurdD2vNMnS2pNj4WwfsyiLTherJZeLNp6",
  "key7": "2rYMDAgvS5ZWH4tLVSk9oPAadDZNBFBUHSM48ngtmCwWWtcVam1R8hyaHP15uHVnr7SKwUDc8SFEP7Fd9E9FviKA",
  "key8": "5JsXbRwTGuo33e3KJmr3iGBkNHyFXhoTnyQe1nu14qVm4ZcNxcZidsMywSS1Uq85XaQYyTghWKBXCC2jS76ahhfR",
  "key9": "5ozYTSGRsmSBTkyaYJdxoqBRVN47apmwnkPgqZ6mDSr4VM9Cy647FYE9QqAMEb9esyG4F9NRVkEuJdAXLB9kcAVz",
  "key10": "FdPrwHMz5SE1ysKXTbVJd9uaAP1V9RwySkDeDqySZBnqHE8r3pKWmmqA5fZKxnensxiqfsYN5puA7AcNDXH4C8U",
  "key11": "42GjKzLVa6HhFsGzLTW61uCGDTftBtqvHUuNLmh9ynUvmrhDTkZQg1UvufiEwA9tLsC7ZLVxDaYuZNcJxBSufASd",
  "key12": "2YASsvq9jVWkMaqdj2AAt8WbiWsKcjgK8wGurXb7kzEY3jj6JdUtishTvjYkSudZzV1s2irJktiMimiW2XYnUoKp",
  "key13": "5XsACUm6XHfWpg43rWT5F25FetrHxnwPpqtDzyB9mGpSXEsNt2pMvAYrbwdPsVyUXAQxrTYkBvwUF8Gz2YpcQ3wz",
  "key14": "3P7CaKFzbFxfUFXM8FNbwVNsmd5UZvcujsbJU78dWADFrphPnvSuhY7ydMJBdxftoT7DHvm37Ahz7u3hRWuwTh8q",
  "key15": "fMNNFkhvQe9XTALdvLAnLha1LuoaSvFNLz8hLbPTNg3UveD26CUWesY48KFSvfxVPWyoqqcsnsFSL3yAznADoaH",
  "key16": "4ypuBCAmr6uyBGUg7szx7BfdeumP9vygENqTFeqrCdfsS6VpcbtvWiTXjfsTTbWuWiftZ6k4jLXVy2nDfKmD3Dir",
  "key17": "5teXbxYhagci8XnWYyfB29ZT3Ejg1ruWsYXmZhBzyMxhkr6NdwE3oaSkjFqfC9wwqudDJHmhwtGx5f1UzPhUTVkM",
  "key18": "47zoCGLo2Qvj5ev6LvF8czMVa7FnbhudZihzrTRCNpAYCaryNQZBRpxDmrPFTabdtMupyo4euQ8i5TGEg3cPsQFH",
  "key19": "4kvHEAw4TVww2DYQ7BPmYRwCfzRFNHdEJ9Ev1hJjrSry4BqzuEuFNZewBDiVEWJDfLss4WPFjRmBxw8nt5biWHyW",
  "key20": "3vpcgywyny9UiRLu3X4rjLP6DiBZMJ3tiSh6eWZQhYAUAoTY5RDnyzo4Swayh6gufYVHnsYYHsRY9nyW8ZfKAAE9",
  "key21": "2y1Uw6UpnkMoYL8Xs8uYKom5c4bDmPugRDVDcpguhgXuYdxaD7JRzH5eeW12ajiMGoufGUfzrLb8wYfB3snuqm5T",
  "key22": "5HRsVprxgchNbmEYf5KtVb99cD9ryqmuPJeVbnVqp2E8wqjxjDZkvnEeywnwu9QHWwSmL8FdpjUNewpjMTNEPcMi",
  "key23": "3MEhC5wbVJJzJq87wHwQ7JsVxwtRfLPWLivhbXwdpF4RwmgTREyyvXSYpJN2jsQQc8GNiX5o6sL85KshDzWV7cun",
  "key24": "24TF84rrp1cekekoC3VAGKoEaf5fnStgiJsxc747Lu4U79khuYmkYQ6MuH5WD2vBChXMSAxgxu9EwEXkX9hoWMmr",
  "key25": "3Frmkpsdgu6w3KQR9QTWEEo7hGMYDL2sYyx17jGobEeXL4sTmWQq7526MHp2yvLkn5rHia4YVNbMAzsJfH2uh5hh",
  "key26": "NjvZAss9NPqeMYk1AtfwQHuFxP212ExbbbdQKxnpiwarDcDFMEQ1BdcL9wG9GZav5soZuRTigN8412ZG2EtYdj3"
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
