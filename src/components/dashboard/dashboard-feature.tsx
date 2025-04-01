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
    "2GmwjaHZmX91VAHASxAPXK8QnoTHBLeAAtK3vjYc7A3kNHbgkSYDJ1JC2JerRJcdfMJ6De5QxgZ2wJPGmge2Tc3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nkEcPRkGsQLB2xGHXNsHK4Wxb6aGbn26JEns21VhcBUDjv3SUtKtheDyiXUfzeMgRJpo25HhCSd8vbRzFig6McP",
  "key1": "3aFY8EnbTHXsq9MSrVE6NHkMsmqVj8tscT3fe5DqY7eEhm6MCveAPxHw2y8MAG6AMQLGW2aECzmZ2NCmwwDgZDGF",
  "key2": "4fBmPittwtz5fza9JFu8PS3ZFnYUuGmHYKtc3peTfY3SkpAJiJGvaa8aF51XFH1gKjBASfHBFjQXBVAW3twKhQaF",
  "key3": "2QQtse3DbC5QaxykXq4na4M4HDVWx5DwwnQSuFuPsXqxUXdzjPECxFk9BARsuS7jv9GD9qYoFNy9z3RjMWLLhpaQ",
  "key4": "2Xw91HADpDT3LGXJVAm76FbGibvz41NVYKjbkkmWZBQdP83ExmrPE4wHLoCqjfaqGGz188Ey5Myct8vH4GSY7q5i",
  "key5": "53ArdxBE55enzxJ8VxNRBuiVyw86WxJD8pJYT8sLDNy8jgrY12UNqFg9eKoQbExgvm1Yf1bbPPVzcSqVdDDy5fKc",
  "key6": "snTVHdBJc5KSWKuXZfSB1GukxCuv5CbfoAHJzenYLLhkfT199kTkEptUSdM3B5oZeDCfsd3mEh9iDsKMsrf27wo",
  "key7": "286qAcqVndCjMf1rAZNQZY22ksbD3Yy2bNmLXmA27mKJBxWYgZHW3WPCTx48fYkp6hM1vM3qWx9ec9WnyNVonTed",
  "key8": "N8eMohCytaaDtQEhzSj7pNpudgMzfgpQHueQnV1VsMaYRy89dpMCMtgydwi7nCvRj7tivh3diRp31dzxH9VpKbC",
  "key9": "4aM8or7cT6G3vpts2YWxQDNa7aKeYoTVQZkHaHVQSffHWBgZeRrjHXKhA1C3TsDbtUdCtUi94MZtnSTzGUNdmKqL",
  "key10": "5Vf7SMhZCbUJKzoFQv4nM6B8eNDZxKUcnADjcKZjTrJnEF68hnXxKVCCnnxpnj7AJ8XqH9K24c666SmhhkRnw872",
  "key11": "3fa7zNDmP2sx3pMckXoMYwJAgahsjnQLVdLhyvd6z6L7fvgDGVaY478QUETp3PtzkM2aLi9TuxbhV7eZJYLoExUz",
  "key12": "uUqLMWB55H4Vm9RxsuZLe5EbkuA58PKP1rK4fck2iCVA4LcfvbZc4DN6uSe45NYHzJXuoLoGMZiabqvyKRqYsef",
  "key13": "3HbgxbeiUS2URQu9sWHNA46AWdajwrreu5D1BbqQhH8JMZXqjNCaGqgeFufdfzBoUnDqu9if2U8cCfGAcbc15qg9",
  "key14": "3vzbSiWp1A1fHcB2p7aVsxuKT83A7XYdawkrWnLovStrr698b45CzaT6AMbs1f5SsWcjt9LeNNxvKsnUt7CVnDzv",
  "key15": "57B3MMc9M4jgLpf1VUF76aGZZZfXc6rrfuoFfig2qVm2VH4RLigstG4WjMrVzmacRLKFP3mw8YzGP7faJjZBNutM",
  "key16": "2FS35QDi5o25pQkaRSYRfchb4w4ckvvT3vJ39d1pnX3ivvE61qjYeyStCvhVAuynz6CaxmNYVgb7NWWEuMtJuZnU",
  "key17": "5MxkMzYS7CAjJ6Vemb2Vrnc4FPa68vMBpNVQXR1nUQZi2sZT2RzXuuTQEVXkoZwJRSSctW313ND77S3acicgt3rs",
  "key18": "5KJwvtRu5Gu2VncSoDAwsR9sfB6YAZ4Js5eDGeP3dPkxrkFjNwowZpe9pkPGk9Q2C7wDdtoDwFbr1rxKusSZMtm8",
  "key19": "51NcDPerQPp4pDMDuWdJQXRTLenUnYSBL97moLjQoBvbhqBME69uTo1pbaAjo8dihmzNWbfX2K8gTuXUpNXFZoPN",
  "key20": "5pYygwgPaoNkCCG8stWMsfj3mXwdUCuEZnPVUkqfS8QcXqZN4oxZjJWb4Tk5LM82UTRtZscmdedTVWxBhJS2PkaW",
  "key21": "23LkEU237oUpQprppzJXGhE6B5ByMBfeUCAhpN1oPSej8UvQDQWBC6CLieLAfodrLmgESDgdqt3Rnyn2VhFbXYsf",
  "key22": "5kg5nZNXtr2RkxTpXQiZdZ8RQ7QmmvWBbJkRxEa1GNBWFEuF2to2SbUm1o1tHvduQcwH4wMfV7Z5tQgUq1vtBGeV",
  "key23": "4FLHdu6QhWh3K5qwwN9hNj9YLM5y51XV61oHvLhS7DEEHdpj3XDD8yYhZYsT3RcbKHLvtMjgiMQVfALbR2AYwEkG",
  "key24": "4jcippbppzVCJkbroB4cZ3MT8EBrhdHpprbEcM6scp184hjp97aqpzurFEgp3V9qk2pEoYoRHrWRtBbPhNySVFtA",
  "key25": "3by41HdH4d4QD93gfNowwu3J86FkZtw4yFXiKHnSLckhJS3c72BmKp13nf3j4X8qrAivaxD2Xmw7vitXVUqn9JBs",
  "key26": "4rYoc45fzPBcj53ZfziZUXo5PdeV3PMhsnmg55ZcRx7Y1DVufnXcGEH4q1zjRa2y8Vc2HKJuA21HvZAZDqk6UAYV",
  "key27": "2x6BryZsLdXmi5S1tk91oDHTP9VZnUowvyP28ekjFxdh1w1mrtUghbT8aqrV97pbomGrtrc6nnT8xknQVS9X2Jyq",
  "key28": "U272FxYeJRzgv3MuiCQwCpcwovZTT1ycRobsJgZjDcuSbRGytz5cRReZV6nmZDTJzbQhS81Wz52zL6yULR9xueo",
  "key29": "44oDS1CyPwppmyZ3qVXQJNHFgQE9Zqvm1tkgmeaFfvZBKtEYswBh3JVEzFVrT7zgpmRKYzDKG7kqEjNufobK2TbP",
  "key30": "3VxCuFdTwurnpYXnD84L7r4eKawmpP9PYBZ8VrFZd1U58MjzoDxyaZtb4kczdkhbMjGikVfMKYyyWa7CcgvRhadt",
  "key31": "28TMeu3xFkrbjvo9i4vMLSVz1EUjbNKFqrptmVywWJqZxbRd6djrn5yxKjyQwgHP4zeQhSDqxe9RZ8RkhaYgigRw",
  "key32": "3o3FEjJUspJP5MXmmfiqNKqiEjvzvnJ1DWLBoCGxMXJACxfQyNGmMv2gAa2gAvjh4Gi4xPoAARD5tpd52H2yXYb7",
  "key33": "2zEeDmxtD9d3obm6YhrExQA6qjK5ajAaGVCNCotm6Ckn4VZbSC8R7cZFrJw9g9ttmFESPigb8dfhCfXKBwxcae5c",
  "key34": "3VRNj6RLtn191JEdypsyyAE29TZrzinfF6sBcDWr3967DwMjvghUTeYKVCGbh4qAJxmcRxcbo7tkwhZtETSmEX1G",
  "key35": "3L6iesa8qDwJ7kX7agyFmmj5WV5f75WzcUM63usemkBfZUuM41Uvia3PUcmoGMyzMZqZ4ZRcPitXUchUg4vV4XpT"
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
