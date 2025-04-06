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
    "4wDKVJzvtfiYnMp3fJzUDWzCtaysUntKmFJv9KzqP4TskpSWouGh9kc1TkANT2AWtC51MLfrHkDnVuxvJLrtfV7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ykTJfc28pzRR5mqpKE1ayrt7H6HgGA4NnTQMTV5BtxCoECuftbLPj97SxqvpYb3UQeCrgB4sqFaBztTtryaSCG4",
  "key1": "29Dr6fxRAJKXSaLykbdUwe82m5zoT5VT3xXc21zvHxBwFb5iqrE4DQkuVZAkNdN5RNhyAqoAmJg9KtUnzn9eCfLK",
  "key2": "43WTNWkxsicLRhP4n99por5SkYw6qm1qdBv58gG5AWx6tu8Psi1nv51QmJnfLKsibfToYzBtVkzARobcmQqtryn9",
  "key3": "66g1vBCEFCmak7HZNfNYe2iS5mT6VNQ2LszsuXnRaa7mESACgJAx5H137wmVieFKcjJEsxprpXHBKAks6sNcbfsD",
  "key4": "FhVtDAx2a4rSnd1o1pnFX6xNKoRDpxk2Bo9KiFFVATXKhFMnQnsxULHqx4iG7JqW3h1Q8bNDA65kuCi1o7YYg5S",
  "key5": "2Csj3AiLDqnFZjyH1wVaejhoeUcY1yzTmBbaDz1dDHebZywqrYCJbtCwwoYkPN3FAuRcwkLJk7Sn3jUhoVTcHdgZ",
  "key6": "2V1KqU2NSS4X7zRiAYGa8sxcfAPtdeEh21bVuXbezKXRZXVFLAEUsawvevsLA4yNsF2QQVmiKrMLJHyenJ21wwFx",
  "key7": "CNMKmP4xG65zUWwX9fpifDWah6S6xXsYmxuD3eEQJ8guWhxiwQQCCGYr6vEEKEmE493b5r3rJvd8XsRBTKYPdS7",
  "key8": "31RBMBg4Q55ngo4cYnQpW2CPa6jaYFeSqfoecqjvkKNoLYqrjhwsd3UYnXcAfNc2ECtNk4tWeh9tWXeH5RCXDmNr",
  "key9": "nyPTVPZsLL4C7NdDWhVWWiY4NRdgRRTJenZeYNAcEXoouvVX98averq9pULNaZAorRDX215CrHUVqHYTQbABkf8",
  "key10": "2nvARj3fCzxKDx1PJ7dL2J4A5BzpbdbABR4ybuyJ8WXH8MFgbRgSXQE1eGzxFXQk1rPLDs1bb4JxCwxwk84BptPn",
  "key11": "ReNZfP8DVDW6h6XcuPd92uuKiA5oBsM2ngjSMHQBEBfdiDBR8THLmaiHzE8zH2yJmHoYdMhArYo7Mev2eWfUSdD",
  "key12": "4ckGdoYD65ESP97puXyaQ7yNQttWX5znZJ7qFW18SNXiMg39LV4Cgo71PiY9DujsJNc8v1maWZ2KH3MvcvGcPALv",
  "key13": "2Amx7g4D9Z1GLou58JY3BgbR87fJutNwsDQK5ZtcADgHzYccYfQHBpwQTpzbPKuijXbS1skDY3FWAh3tJWM5Gptj",
  "key14": "3Zu21Cu5r2me9baPfVToFab57GKYbuTLgU1qgCK1dZDTQM2ugjWSyUQnbEB5HSoJmaFHz8XvjtZyGd2NHGEDTUdb",
  "key15": "3QjyiKgioLqrBAZutnD8LLyGrJwqvE3k8AMTcubLNsok7yaGbPTTiVnBwqL8oVqeRB2mFcYhqSQwftsFdHTgmdzZ",
  "key16": "668Zk5USPE28zKt8E1H8GSr81gFpfCsRvo4Fug124NkSwLver1e4bnD9ZrqyhYYtQ5vGKhVmaNKgUyAkMyd4iXRz",
  "key17": "tjSXXMMQxzok6gND8MdiemMceR8XtvGSysvcRCK4Dsxv4uyfSKPqW13aW8YaVvhpg6JsHUTxusENSWuTmS7218S",
  "key18": "3aLS37kP3gwS9vqsFi7L1fNXbGcUuK2PBdSjYudCmLHWiSKV9hYAycubMbb2V3DECeBs3RwCcGD6GkGyaAQz88PG",
  "key19": "JcUoL2n3aau6t3Ai9LK1PHcSGwECo8JTHALB4PZaAYriv7xDpX8PjU8fhSasbZkALstizFoYzu2m39CUqmhCJZ4",
  "key20": "3wjX6YrXyLKqbXYBqecCWijd2PEjZwQacKspwta9CyuUDasj8QdkdwaTYkuZ9eJqzpRsW4LDiyCXgd5qZkkhJ5jB",
  "key21": "u1MJTXRftdJ2Gbxnfvz1NL8VdBzFXwfLeS3f1MkYgmuvdAJAo7rW6NzyQykQPhyAJ2ZZQrLT6ZkMbywgiWijaP8",
  "key22": "2hP27k1jTDRmHpkhYz2Fsu9kY8LJFWQqHC4PDKCzAG76ipkWeFWPnSKPLh6nmo1zDtw5Zup7Fw7b7NR8RsGuQpMm",
  "key23": "3KKN3XX87bGCAwDqnMYRKARjrZ6PJ5ENDej9Wf9tmczKgHXs7VhdELc8AvumAmFDEmJswmX92bY3GKQyCzMWqAs2",
  "key24": "sUiAk7KrybAfcE7Wonb2pHxEcbR6ANBvfBSbTgp99VsQnvx1VGXFZFvq2odVjjzNTVLUyu79Qz5k9KLVvoFzpvZ"
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
