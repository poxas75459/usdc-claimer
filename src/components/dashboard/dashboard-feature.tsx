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
    "3aGVVhD5Jm1G4kKkWTqJapsj3QhbJVrjr7pMskFa98HZSuBbuvqiGbwUETyKuLSnazpc4RqpBmFTVDXuXgashkqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDL1qXUJ7ME86ekqmHffL2KaripLf2VFvtyCqnzpMFv2HhYNpgDgxzzqXqHoogtURDMxRmLXXAeZrj9DmGnR9sb",
  "key1": "v8aZZoaPszPKTSiPcAq6rQ9xSTf1br7p8BytTFedbR8YWimwkHWs97dS7bzN93dCsBzQD6obRf6daoAYrQVuNj4",
  "key2": "4PcWga3cZyiwhvf1fYYZ2uNiKqrzQRt5ggfvP3rfULn8YxqdnnMha8zauhEvqWGqCafz6erbxGKSea5upiknZJd9",
  "key3": "2ieQoVfhuJECHb8pSQQfLiSN1Vmkm4GFFAwRXXZuyqM3GpiPxm5WRRrtMLiTzuPC9ZkYzeNH8CoNXgDKfvaBuJz4",
  "key4": "4ySiCECfx7aQBJ7L4Mt5haBBfHot4iqw9piVzYGGPJAhDCm2PzryFt4evzC2scM5AoZscQYwU8QWVVMEwx664SDo",
  "key5": "31EabTuQEEZRry6DQj5epVd47wXSdZhHNWYQh2CWdcYX42ww3R6r3UajJiRz3WPuswL91g8jgFhVz4h2zvcSuqwE",
  "key6": "5PsJCjpesBDmMk9FYnv7P2omqvT12zFzPfZYoXE7BUuq9zQQG1diyXMNs1oFUwm4zY5ZTLvZPugNXwNprLnaget5",
  "key7": "4aLuBVyZdnhLeZ7ZYwQsNw7hX4nyjJaajw5Mm4VB7t1ADSbQA26NHD37XBCk585Qg4L7kZViWyvGDUvuK3J1Ddjg",
  "key8": "55PqiErbPAkXsjuy34aszRhWroJmHabaGWbNvnMMyt1fAB5GsnRDWgbX4GkBJAAGCzpo4bK44p4DQp1agSCZKZSs",
  "key9": "3jLtyTqgSy6NigioyxSU4eWHSm1JhCHhG5jeMJNajqhdcuajFUmdG1M2KiFXTJhG4XqFpAWWdrQnhqAEw6aBNRwJ",
  "key10": "d1K6Rwh7ZFnr1W1ehdXBKC8WHwk5tR27kPij91yhWXWGFo9upHiiaZW3zfhEqpUno33eSbeNbaqsqUy6BExLGXa",
  "key11": "4qwo43zfsSS63tNgV64SDje3LrrDZqGb8zL6Hs6NQ2EpsCuapPdbwU38gLFSydiKkqeGhpHfTwgWYgwL4y8ra7SG",
  "key12": "4EdExTN5EfrtePAGg5GZiz97yqkThnACFDRc5285YmYrjB9CmDyz7ik6WxcwfFU3V1SBQFYjEZPM2P7V3RSLkRpo",
  "key13": "5vvcdAwse5MGQ8P66LxUWJrVRc9LHbERwFsVKTdcH1YxKinhzCkXs1CQLp23CmpB3QpxhkhjG7nRXuEF1GzBsjpH",
  "key14": "3ug564SbMaGtHHAxUJ21KucA24yb5xCMoesnbJBigYgvXTtwetZtKNGtK6q4uR8TiqpMtT5MTC2JRvV5pAUGqQqQ",
  "key15": "2wbTdQFEfnRV87TfCaRmiwYCbspWwpdtJqzTof5uuziuvevxGFbmpCL5Atp3Hywqd7PXBovtopgLS5ECpxVKJreZ",
  "key16": "5BHPcDhWWV3cGZGwu42SipiL15aLvMHvcNNT8DL8bnoa4NYQTTnjaP4Bf8rw3E6qQnpzX7jZ8uo3JcrojPW8frRs",
  "key17": "9vYsGbcw9KZrbtwvdMVd3FV3miDdMssTuQqjWQvJCDRhq5Wjo6jB2cCG13snvaf44eCsTqAEFbDg7ybf5aEJtcU",
  "key18": "mPqHTyVjx1CuXj8ozczDfsjR9Q5Em5oZnvGFr3eHbQnGG5pGAHyQhTB7UtfFGtLtdKDhzRTfwtnccmZ7ph9dTWZ",
  "key19": "2MA89UFvdDTP9xTCPWnwMKVXeHQvyuPvzSQ8AAGqeMEs6PME1gLJZNkZtnS6dhQtoGetQ1AkkbWCsM87e7MQkSQU",
  "key20": "4SfPa82iTsoc7fAjzXmhiKxiU7y4aDpxEWw125wprSZKdypS74PinHHewAJVYz6RusdybUecrS4YjQvt3HvfNnnZ",
  "key21": "3jQJg1BPLAg4dRAHfymaHjFYDevypZMnz3YgfCq8PXgNDtD54L4q6Nu7F4eEZvcTQSxkfLTYmwsMnc5Gvo8CKx4e",
  "key22": "43bwVBHnwdt3zttKJEftsuw3Xo5D2Y75GURAqFMiZVMS1W1BxcpWra9qcsZQrKieTE15q26fr8A6rTYD8w7NgXS8",
  "key23": "3RbHPsHvXgALVodVusHFXsgVMA7RukL2YbhFyigidZk1PaLRGANRbrigdUnWTZEwyRrmtFVvw38hxUw2jsHL934c",
  "key24": "3doGrFgwXdsMWGWFf5TiknwZfDuijaJdocNzhBHxDupoWtQtSgE61F3MNpET3ZFbZ2V2N2qH5nPrB35GUQiqM1Gk",
  "key25": "HpTxeoffUEydMvw4NJAXSSdmgjjwuzqRMhYC1n1sByeV7ZTJyz2bhwvVvgZWA1it4QhpNTbwB89i3JCgjoiGALw",
  "key26": "53NdntNf4TjnTz5JdZmfnMU6nhCmaz2oryWV3b5Jk1CAyy6T85TjjEWeyp3N4REWpknhpogyfkdzxJYgv54TmsTe",
  "key27": "DWXQpRgdpnX5CrzMj5iHco1jNzsWM4ZJABTLbFC3BhNYqXfqTqSkwaGJTGUJbfFouckCYwDQwZmnKFMJwb96MsF",
  "key28": "4ki7HvrWmRmQDWZTKT35HG6kUYuZyVJWPbNFsp97vrDo8qtGNNd1SmrCWRZQSzAcmv5R2LwWhTJjT848Wq7c4QCY",
  "key29": "5buYHkTigYNhn26MhCL6aYgeTH7U5trdoYq5ikofkw4AXAfwWyV7DDpvKUzgrEGpYagXYsBE5BRSPZWhrFeKttzc",
  "key30": "QMR1S4sTkGxDC7YX4tu8o46MYRZFYptb38H8egGSZs56TyTra8WwZhcMi3qkVhxuQUoLyYTqEeEtdEEbRFk9URy",
  "key31": "ibo7m4xmsgaYyXztnJnRmyhjCE9tZByeFVwsvf7D9DPr1ZLTj5na554RMKESrzwbdKPn92mEm23M3G34pRcY3M8",
  "key32": "AasT4dpt34gatkQdrJhznRiZ6LoXcR68WVtPx8TQNPentFsWqbW9ndFqSfVH82N5gHdB9RAcT6KhjwD3yctGkPm",
  "key33": "5WXFwJXsLUn8GCtwjnBWa8Rao5TZiMq2gYMDHYLsd4d9tpnNqg9ecXKVBt121ioSn5K3TimVQAQi6YkkmqTYuurc",
  "key34": "2pMzE3jTTTU2EBmG3kz2KXRWwCwqvvLjpAto4RSY3qZmub6EvKWGx2YSLoaxnV8ipcHRWcKAdcxJZ5qUYq2pgBVm",
  "key35": "26faCiEFsRN6C8y3SYv3D8bwoBJ5VW9VeXEAuR5M1KdfR885zpBzGTqFaRFJKHiaVNGxditzceNcW21GUpZyqXTd",
  "key36": "2PqGQZ66v4RsY7n6RWDSTMVpBc9WmifybBpHnbqQrmrPtG3ET6txqZMRpoL1GoYwVcuaTR6tvZop6nUVNBtQjg8Y",
  "key37": "515YGq9QaBFL9bZF3GmjV9tykkd1mr7xxR6uA2Bg1eiqbnzZgrbLLfnL6kEuEyHLiVfi3UVrLTXrGNzCNmbcE52w",
  "key38": "2o6fBvJkFy1sdorXYTZqTS13cTFBFsGMPBif2tRhFhMMEkhoACnM3wwmGFZLxT5wsLd2RdVhJ3m3qSPBh39pNP1h",
  "key39": "3eorXZwqnFD9mbz5oDausGMDHujF7yHqTWQ5jfi1kpQBmVhPcRpe6v826oyT6ifP4EYZS3Y1EPNVZJNZjNdC86JH",
  "key40": "5EMgRY6QMDWmRhEDG9AS5hL5YKokrgbtKZdqGPN1LxX5uxhhmfevHmVUZCL4tPaiY9jEZaKXCkBDBDRZnYwx6VjP",
  "key41": "3qE36o9EeWkCQUD3awzNaHFbvTR5mBQW6FUKQSco1J6VbKDJ9qxQfq6rwMuVgjDj7FKLoek7uRgG99HhzTowGoLB",
  "key42": "4mPr3adXHC9VVoJe3vm9MbEgX8aqTSFiK4doXbLofcAdhJdTKYBB8CPqPAjgHbspv4doLHbPZw1PVy6pwKvQqwR7",
  "key43": "3X2T4t4JntHACcoXHZseeZVadUemQqT2VyfzxmDq57odTHa6AcxgpJBXyW2uX9XfmzFSe5hz75hoYY91RZjwWiWu",
  "key44": "ypgnukph3p3pDwfcqz7nNVri9dYM7J4DkMc1pXnEKobjYE3B5NJ9bFwvRhLCKagbFKJPQbUkruLLN4iRQ2axZAh",
  "key45": "2YAAixVScpzx12B85szt5Q99uEk2bHMW2CPAqMWt2bgqPXXpRSP8N9HuiG2KAY6s9CgLk6SvBZN8XBLKhEo1fTuZ",
  "key46": "CCFmtYEiEVaJuabQsYv2Mz73HQMy1hqixCE17HBSPNmnAhXqw9QC5yuzRyX9uivBm9XcRCdTwbhGDMGPyKoa22g",
  "key47": "xudXyxiUjqzQPE1kaD9Kq6oWtZDpMgiD2M1SdhQusiocGrRSJpoc6GRatTZBTMd9QZoUxyrXjGvc5srokStMkQ3",
  "key48": "5xd2tKGMGpYm1KKyeRp91CrCWSrHgWyvBixz4vxvC3jWyaBwD4WGuQAx5ay4udfiHan5XH5gKSB4BgewEDZ1Jr6E"
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
