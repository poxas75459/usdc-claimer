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
    "4FJY26QC4ad9TpTnXh5UcWhWkERVau2XDLNZyn78tMt6K9GMVuPFqwgERjveZpVnB56D8oSc2Zugsdt8XHJ86Q1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSXTqDmkADEzDSNiVPZV6afGdGR5D58LMDC5MU47NQqRxh85LJdXkTXNWffpet7a3qBtwic1jXbKcQdTgvvpqqU",
  "key1": "3PeGHrNftTQF3LqayUmw1ZihdAs8E6cfGVowVXVdrhCLusG726ZDGvFzAtnrL2JsPV11faBdpdq36DLEhuJiur4y",
  "key2": "3ZzhvK66cfg2ddJj25L8KArcCymUVbg2Y7cJ8H7PSrBT7q1qFDSCDPoJY2He9SnMNd3DmHjHLJfdtkpMuUkfdD9E",
  "key3": "41uwWB8ayJ4SFy5VpZ1AjSj6b3ZJRoAwZaqQCW8iRzCRVLL1PRpLdRa2bmrckpDmEb5GQNyte5ZrAehtpnAqjaFg",
  "key4": "B8z1MM7Zm7LYJWivHFixQWDHqgpp6ohJ6KbPsL4hiKxZXfQckqQmJyExt41sEyLquv1FQBkdDd3tAnAjwyLrhp1",
  "key5": "5BprGJVfUCxTKesBF9aSfaiW4BvvnaA9FStqT9rMNw1Pq9FmkKqf895YMcS8RaTFeRYMe4AaV2kCGXqkzPCuFeUd",
  "key6": "4BCA8PdhDxo5R3ra5jMpGEJUGyUkKDWy62YrWiFUetHiG1KF5WqKT8ENLGDrt7mGtAmrhaa8n9bHKYtkVbBgNaMW",
  "key7": "4oKu2H8qi8ucbawvdTJG6kBNUQ8yAepE1DXL3v67anzXQqZBKRerpDQiwMMPR5E91Wx7xDM2ESu1Lf5SoXgkLiTX",
  "key8": "ZogQUF7pVHJY1ZCdSoecMD5HEKaASXFim2dH1MmzjJWngP6A5pZwaQfkSuTDa4HVgVmZXpgsLNuZpTurpfhkMDH",
  "key9": "2mtot5bzgbkJr29gE3BMW2mmV3wS6ziNXQ7FF8B7SkimYj2P7iJBZ7iEBB36xh2d7TKqdE7EniCWvNDdA2LwZsP3",
  "key10": "5NS9z7neXcia1L2qvnzNNogCNDU81ZjGnT1Ui3yXZ2vmghWZupzqs8nWJzd9sbxmV5VWy4sn9MdfiddWArqaUhee",
  "key11": "4TbmgfR5eCBfuubsrdHeXQAeFJkUfzcrh7ozcd1o3fckpEADgS2acxxCdJohLs2d7stMuPUFbyH2N1dnvMaopPRj",
  "key12": "3tJqD2Tu9msPBisFgTpP27VZKBB5ePGHEMdt3NqbM9h44CNCoUREY1DxXz2r4H1kyP6GVkq74SBAopGkSET7ag3Y",
  "key13": "2TUB35dCmuFX9t4VjzkNRFRDdRtK8wPRfTbisjWZhBHFULCP5zp6T5o9rUb2AX7s548RvhCrgxgjzRH138PSBueg",
  "key14": "2KGfg6XAWxBhgi8AqRogmeUNFxDmKcyxwycADSPh9taUrjjTC4NvYH864xAWZ8psxuFauvHo7tFpb41FP54hk8tP",
  "key15": "4xsbhRsTcBbaE53nRSbjt86EDjHPprRwy8AfK6TW4dCfE3hst54Ji6UybJ2T6pkTKtVGtABSNW9rWQVjuFMnp3Jq",
  "key16": "xdCKRmJw2JyFNManaVcg9b65jNyNRU63KTavTybckMdMdKBv3RzJX2PcfYNiqNs77eJ8h6sfkoP9TwA2q77c4nX",
  "key17": "5vMMsCg1UdajNcNZFUz7B1c2qERd5z5s345nLpowU5iydzGV2rtoFJAXudaZEu3WZ5fu7F7BmRaGNLsm7z8sdN5i",
  "key18": "21fXLaxz4igPgSHiAtxPybgM3wE1Uog3MbyhxuvZ57Msc5CovRw52ckvWAJqusyu3ga6xG1bMeyAhMfeTeHk3sgB",
  "key19": "5JVoKYhUSD2d6pBgw2XfD46DwGZcT7ZPurxJyRSABqhqvXwMKQBKKw1PDEGzr1UjNhr2ZigvJaDKxjDLmusg4tNK",
  "key20": "y5kBakhXQG1jF6ZcAGCgWuyMBmktKSQdsdTgxtryLiKCAeAUSQemUTXcZpbtPnCsEmriry7huqqNxivs4Ls7k1t",
  "key21": "5HUNpGcB5cPxi98qYdkmBSbQdwrHFwCjocdzgSbjyy3vEyX4rEK1n1QoFk4kLDUgJsJJ6UYFGoryLmeWRr4BU6az",
  "key22": "2oW3rrw3Xa5usBjdXUqw62SVwnzzFEe5wn9YHz71Jn8tQbbYg3rfgKbtC6e1AXy8w7pUvzU8JUibou9tNpUZTubk",
  "key23": "1wfQgTPh31zeSnyHdEv97Z34PHqBBMsydUg4pkrP25ZJucFajZCufeB67YuNwdE76fnQKsysRJBkhc82j9Xvzhv",
  "key24": "4vC8JkuEjGwCQBkvKQAjaadTxUqGKvREkFEQprnLx329Dn65dWnASWuBHEQqhHttA8cWqwRUjF9ZmLMLCR5QBq1p"
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
