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
    "4jfmdjBNDmUedds23ncjfdewfDekzMGEzEDPzK6MgpjrFpG5uGifviuZismtW42G1J36BzCaW4Y3THFLL8PbmykG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TeNwX4BgsGpaTS8CnpcUsSCA1m2HNSCQHcByKitSRGzgpsGZ96iRTh8yPv37NjY9GaDsa7ajSh2Pbz9Fvi1jgjz",
  "key1": "4w5So55ErE1dize74hJTaa5HsPJYWKo5PZFriWY5brurN51eYtb93JzFyt7cCXWmwZ6BsNyAPvnF5S282MLrHfyJ",
  "key2": "2kmqBgW64UoKBx4mPJdM2dCrxZ3pgT7JxoK4Xfnb3Aqkig2Ezz9j9vt1JNyBaYMr8ST94w2jBumfpDqp22nFWMKX",
  "key3": "23U2qY3ew3pNMMQ843JdL1G5XFebwdsU6533QrNkPbrTF9w7ebDXLtXi3hc1ALwfNAkrZJoqC8ih7Q3Xi3VB8kwS",
  "key4": "59MvbQXovLwAHh97fhP8jyrWgQ2qUKJbkNBpPupoaru1yW8jFUthMwQb47p7qG4zd4Hhezfn4S6iFsKo3cdpmp6g",
  "key5": "2LBkFXzbqHPcva7N9Sebw4ko2ZPJP7ZW8GH8gvGHnqTCUTWyW2hLKsyANkuh9HCJnDhZa8xoxgJ9HQfAm95k8hFR",
  "key6": "2Wz3CQd38HvUoLT2kwBBE3GaswAKL5QE6UmSJEQACoAGQAx62Mi2rKZsgdPuGvAwBGZkEj1EaBN6qSzMVZqVPeXK",
  "key7": "5UbC3VH62Coi1gQhHorvPQWiBL8jN3VJfFZvV4nViDxm9PPb5P1SaDaR2grANatshpVPEkU8HY73q13P9qRgU4nY",
  "key8": "4G1LJokkV7dskPH7hmotZzuzx8dqJPQhuHcmzLsNXCjrRc6W3bESZvaJZgPobgVqcLXHTkwYgaT13Ne6MDUtHadr",
  "key9": "36DvTn7189neha1ys6cJZQdBfVsCbN5tN6NZuhz9N8cfpFyqA5Suo8TWNxH2UMrVHD3t4JF3kZt9a1uj7SkQz3wo",
  "key10": "4cJXr2fwbRT2Lrwm331YDwYRvG4br1VU2hZw8fXej9xcTLeuTVWaLkXU98BQrgdDnR5UprjguEoG3REff52Bighv",
  "key11": "5TjTDDQzMnrVBoxCzgLCr7mq83Gkeo7qnRUUbp7RToD7wtZKtfRt5c6So4EeA6j2LR33L2VUqw6TMHfTqRLq9MV1",
  "key12": "4FFC91sV5oaeiAUnvXFVDHN5ajdLVfjEjfvdz6576SxmUhT6CemXs4X7SnaigUeL4QbVZFoqi9UAE4aZJCx2yjWH",
  "key13": "4SgN6vSiyNJhSavkL4Lt8n7ZGgrrPXiTfCnr4dedgovwovLPCfRT5xyWu71TaPBS3vHTcR72eGZ5TtRE6pUv2UJt",
  "key14": "2xh9KjC2Xebxa3tbhVURoBuycB1Fypm65d3MhxQJURboWZXNcPbCVcWn4gRgE9Z7xSd628fWxQZsVt1ZGJT6x4Hn",
  "key15": "3D7nWUeeBxRfdk9YcGcSxa2qN2FAJjdu2FLmnaZtqquuaG899Zpo1unDTPdCAoNnoQej24bkdKjUvsqm6as37wE6",
  "key16": "3VZavgfMrvuacwG2p7HnK7uNdYzusJNAYTajPgSF2xgXMNaWehaj8uraQHFGT6uBF8msRgGGqD2n1yWPNAAYKajG",
  "key17": "3VD2MFqFWeDPNrQjG4H5U1GbNvVBG3SNEvPGoGPvjK7Uz1q9ssDCFLJBU1KU9YkjYsaMB3rEPcpfbwYMftSYH4ze",
  "key18": "3S4c1PN8qdZYmYLWWeMd9cDFUh4AVJBabmAHgShxPJ4mPYAakdqbSW1gayaDEHp5e8J6AaUiP1isc6izXEJDudMW",
  "key19": "2xjtUBUxKgFiz4AZXV5gJuAGhJBoKzopFruVFjq3F6ekjy6zA4azy3eShXocJ6xPUMxUS2LXGnL8XReNezDfKvve",
  "key20": "4nWK87PpZq3vdFMBQJSoz71H4tvcbhDbF7ZURRCgFRGQdtg5XiACuodzqQ8jii9GUqPn1PTXmWHvQjthJctEhM6w",
  "key21": "3tEcqU6AH6Jyax91UvAkQ7dhffBmVfvtVjbhrN8Cf7jAy1NhQuqbTbsPmFxMpQjgc8iQSTFw5pkaGtEuSsbw4Fj3",
  "key22": "2Ey35rjade29HYa9tdtghiEXzadF9Yb7mnZwwW7QpEtA3h4i1GEPAhgacotUoH9j2S1wuVpySNgXCx7x1Rx7UUZR",
  "key23": "44B8rLBmQjD5wpKeHE5wjFs2HqfM72vsbA1NLTnexQHsCkHrjmciZ4oFXAfVS4WcLf5peCqRi59hnJF8yra6RgtJ",
  "key24": "67GqgPLFonZPwb5EjFrC1CXJWvHxraun35Q6ZKRzMgVpYtuZGVaeaE7KzmZK5onAoZnNveyudvJ9yWK52oH22kNy",
  "key25": "5Gsg8ZJoM5oweRpNCXqoVdUzyi93VVA3FCCF7juny3wUEKBk6t1yoTN1JEKNaob4vQ3YLbsh7766eropNG85xyYS",
  "key26": "5jGA2G177goy6L8rgfCLMMtPLtPhhxhvL7BQQZyr5MqsbBFWCRFo4EqokSnDWEvBUp3txwm9q75zBRv11kiSAgsA",
  "key27": "sLSHuSgqT8omMqUKU1s98tTVMpLAu7H442EX58rwASZP2eEAfDFia9w8P4j9AE9EtfLL1QvumDsV3s4Uou7tv92",
  "key28": "3g9RyF8rDxXHjPwaiU2PAEJMSd658Xt5zQhgUWVDDvzRQWtQX4juPEhS9eiR27c7tHoWx2Jwp6yoCYB2sTj8xxBY",
  "key29": "3gNLMQmAthEXY3wUQDnwmj4ru8Czc6YmsihYX92NDvEbMwbnQkDdcBqsnQK3tpKApBBtQSYEs5gAAMnQWYrsxBA8",
  "key30": "2RsgWGasyj8pAWARLuMbDyfPmnWJSqwWX3EXqR8w6XabyZ5ehD8RFr3LFPcuHKDJEYgDTNDsfQ6bjkVGZBQN4cMR",
  "key31": "2Uryubo7HBLtQiQhRLhnH1xqXGa2SrEh17RT6HygZ3JNNxZ3Nk8LyG7CnsEKLKoQRPBK4iR7SAoBypXruPBKLHb7",
  "key32": "3vVSJSvZPSUsLb3t1WvSZfqsPRxufN6Kx3hTeuqqqNQyHEygoDJTuSx5R8try6tviFZ2w6eL66dNoYjCpHr1Nmy6",
  "key33": "3yTLnHN91696pQiwFPtVCTSfgYzB7753xcMhB2fJjrY51DHJjAEG2HAjUEBPwDXWjjVVXAuUgsEJX4yyzJoG7U44",
  "key34": "4K8BuribaRvonuHdcFgRkJxJjQjLuUpC12snTWArzikAKDpz3PFzk6sYu4KmMDZhucp1SR1mf6oXuXZ2hZaUHX7w",
  "key35": "2XsLCbrDLpuX2qGJSVKWVKPAZSEZAMshcK5W5KJXKk3ywhivNy8zgL9Gfw5g3EpQE3KiTfJecWsCnveFN6dxujkP",
  "key36": "62yVNCs2bEjapt6EB2RTVgaMacJSX7agLXxbSKBkHUa6Tp3eudLb74f1yqCBz9nVGAzrRX7XvyW5f3sKMvnp86DB",
  "key37": "4mt97zAijnEdHF6wqk1iz9aoRWh5NRatiHL27QUn4dy2jStXfWS4D1DxPTjE3Zrr2SBZv2RJ3UwbT679oW7iofDa",
  "key38": "HFJkEtHXAkQHDstV8Ta1xchNhw4LmctgJnixfsHUr6dLAMzRb8tNcus2gzMzTXyBgX3hdLWpy7XZs2BVRdgAQtt",
  "key39": "4hpiw758rbsAqpc94QZGfvzUu4osttHXMe7zB3EkWerBHHMEH9rFxBxX8ZXsUeYoBBXLVcvLo7syoQRgCNZzxvb6",
  "key40": "3fjGeR2ep4jVajJbFr67xuRRLwmG7DQBk8znxMyDCNH8UE6GK5eH2uu8NDBuPLkZb8ZAxoKGmCfFs6S7XfLtSUXx",
  "key41": "4JUAQurdDkTw6HnS1gEa44i5H8btb4DRT7RQs4EU3mPQLy4d5Q89QgKd3Vmj2cg9LmT4BKcie4nmZ1ZLmgoorJ3c",
  "key42": "my69gWrVikm4qwD2u7tWbzYbcmrRBiY8JMHzYzGaTo3tsp3A5VK4nc9d2P1ijz74ak1WLh9kNkv2xXVFBuWSyn9",
  "key43": "3QuN78gZ22fVefsVDze5MewJkuPBnCK8UWNvzwKNSAVCFQSfec8L5QcdDuddqfUuYArNYHATpaMWdUUpCz2ihQ9x",
  "key44": "DcwpFKkRfbmRqswD5DirUhPXfKUumd6L1MJKw133GGLLHUV9zDey4ysKJzFHKN2Ri6SFNDT4J7uY38Rjgi313qd",
  "key45": "3apTXGwKu8nE4qd6kYWshWKiW8DZPdjcnZY2xCa2aC7VUHwPSy21zKpsGyTxEiBbsCWtYUy424NobjYugRLLcsQL",
  "key46": "2icTWAQUFHcakY2a9hWCDUqpm3cRBgpyLZn2WQnZVzdLkunVWBeZ5w43GdTXmKB17s9xamuDNzcAEXe21u1yAVkV",
  "key47": "4HcsrMMqPFdix2DCg9mRuBkSydKsv5YP75qw1s415G1oPxx7uedxPWPWDCYP2LUodmSUQWiF3zVNU6Z57Ug7zYTU",
  "key48": "48bWp8eZz3i3jVMUWywKJEwikSbwVCeUB38pKFDzxofNgxbZJcZPN6YRKQGsXyifgJeya6JkzdWM9csVcrYWGW2F",
  "key49": "5vt5YgR9WLUZyPrdwvbfBgGRFgqW8xVb4vpEcRgn2iwL8fFRVeJ46suaPX6GdZSwmzmWc529xB4mYaE5ojEispyH"
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
