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
    "2x73DUxZZZkwKm1GH6Tw18TpQqwoudXE1W8qXAGSLbFNtxRxwBrX2AENHfaXYhRZS9rrux84X1uMgwfANRAUrmJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUaJmnALp98QhojMaytAHGQqJvtKtT5cLwrtJpi5JGYmNBLWN5fWyWUFZf2FPQUpQaxrpSHbhSt8ZZLj82PL1Hu",
  "key1": "2ouSVehBxoKaCxoBcGHM6UcdYemD9bxC51bXq43uTAXuijVyjpfhZ32hzFkwngkbJWdAZKc3A8LoXMUCuK1wu29b",
  "key2": "48K3D8nm4dbBQ3QsxiKksfGVF1FutEJRH5UdFRasMtaXvhjcYeiqkrc7qC7Bdi2LXbWeL1hgRtiokXzpufFtCroM",
  "key3": "nqhvuFHjt68xpRJekLcRQdsevguwNUCsSX7TtPpL33miBXJzmuEAN74TAdH4Dusu1zmGPtWUbCCBbAyagNroGDo",
  "key4": "53szzmkwqCNfJ34UXUi3xFuXiUtdUkmjxV2buCoL3euV6mge7a5GL5Ds7TEp6PbDqL66frqHeUMWr8t4fqnZSt6J",
  "key5": "445ALF5GMYUKiUyKzwVoUM4eXUeZPkzymbn5T75rzZVZCyfMWi11SYGSNza7AMYX6Tui9NuSF3XyA2UPxetgtn4C",
  "key6": "2DRUDaH9N6qyCSL5dsjCfEUMyTjJEDWEAKWPbinQCR1WWg1jcrXsq73jmLTQoGWyBvK5UzQ8ao8TUtvw1vn2jka",
  "key7": "5jAYc4KrJrJRdtK4zo3ekm6SofjGu34CmavNVtNCy2iCoHans8uVQeJpLeS4SJPUgDZ422tKg18kyRmw4Cvc2DBN",
  "key8": "3xepde1ZAsxwfCY9mmdLVy8XGdRh9ogrMtP2DTC4hCFEaVVS4FXuuoUCgw2n2KpFN1PRubEw6vUj5kDYe2hsRfdR",
  "key9": "3NRXVS1oQhMf3YwATDeF8CHhrbWGnpmGa4amSV1G4yGLHybjuoTnegfXNPmFxRR2iVTAi1tNrMTCA7hT7GmdvUsq",
  "key10": "66ge8AnEZspXSkM7ujviV2NsaPYG3AeBxKcfiHcLbUnmqiKt2gEoWiYUCxDoWHd4TFTUAhKppBNXQFFTxQ5fmvAT",
  "key11": "5BvGrMdACLaYWQa3XQTh5L7UpnumzUAUNVoXQ5q6fTE3V2AWWHaBz7Fh1rAut63f6T1kD84ikyVosZ7PUFunueU9",
  "key12": "3Xg3CZewVciANjPbxT6148wszozYu7yxYtVnnWZdtKxaZx7b1qrz9NQkZimjUAgE3aws2XBFtyVoZGbMF2iA1hgf",
  "key13": "2T8qo7i8zMU3nXzMRD2oaf6H9FCwiX9S7LwiRhJpcjZfTTcMPw8XbazzXpNdGazYkXeSaZUaUVqWbSCEjavMkyj7",
  "key14": "3Qs51w9Gi6NMqnfJg3NwjRcCc1T2UQXw6ptATFzhr2YKambRXr3D9TDRSBQgybNpAcdRLog7TuKqXQdof7Hrk1ve",
  "key15": "RZcrXyu11CNwqpXoxp8DrLGp41yzZ8TEPYvjiBHrVnVJqQ2sUJRWgFUR2tWoke8wF4bNHK8QHwgGo3R62mqU8wL",
  "key16": "DmM4irZK4MPjPnptY94sQPZHmdBGpirxgueY3FCrri9t1bDT7KFCPrVAMKoZtbsVrDJLTX3AJJvxxz6XM9PjNbw",
  "key17": "5kA8NAZ1ZcpsxNQRWxtwxUdBzFj61VPvz3FVpNT6mvMne7wthAxhrokbjafpuq72WDcaJkSNM41GwmPap3ayH774",
  "key18": "2txXcn7mh1N5UeFQtaRJCzq28riJPAn8qLBRb5BmmBpHyHdwohagNVB9sM43Q1NdBFLuSSzx149XMeB2SkfyLoHZ",
  "key19": "34dnkxwW1688fZMEhc7Tynw6X88WM9AMeGUF3zh3Y2RjaRcdmq4MiT2gTr1DQ5W37oRGEYMpMLREzXSLf6KRViw3",
  "key20": "3NdAejKX6A22DwpJ4XAssVYeoA4AfgnERzYYCsjptCgoQw7aiAyNJpxs4kz3GWvwjRi2qtYJqtsBkxAHJ6s34bkH",
  "key21": "o4XEA2LfftLGujQ5BF1oHCDbAZYQ6L4LYCx2VpZZW9XwjgJKmPfiAihfDxqL4CQDwoUNzdQJDJzYyyJmZUZYJeU",
  "key22": "4Wk3gth59km5H5VvnrP7PRy9xfpQ1j3pJoZBqji89GUDGC471PHnsnohbeAqZEKRXLnVK5Ppie1KWofCyN31jjsH",
  "key23": "qypZdJBFYm4BuQPMyJo6tsnLBcSReTKMgdu99FezM5NNLbyrqK6KzbCKBadeCXZvpe53j4hDx2TELb9YRooZ5SE",
  "key24": "2NthyKQgFZR3GrjZpohSpQnDfiLoN2B1sFG23M21UNK3Db2Ni7Mf7MaDBx9dH8Lt2Utw3ASgPZ78vzUzQ4FyDDgJ",
  "key25": "3hYpG2AqFK8erRLiM9kki7kHJn8z8rxjmpShJdt3ZvPMKwP8BRTG5and8n5W58K6yXtdiCKos8Xkpx2KqbCJbmSv",
  "key26": "4HYS5F1z6zKMwq9AfoFRt9FAKXdnhhJ6oCLzh6YfSdX3vfhJC3fZCpDG9WC1vgmAnNVZScRRGuxekLaDVAFCbFKi",
  "key27": "66Q7yTH3iSNYsp6jsDj6FXUoG8wy8mKy9fkMzCqoyYf4GVx9MdRmcoXgx1k8DG4MCYyZU8Mbz1ueJ7wYDDyAx594",
  "key28": "55HNbHzERsCKQcUUDNQASk4ZvAXk8HVW5TYX8m9tWxHyy1JMrsfYmgqhHm1xabf94orotUVgJN8PkWh45v8U9W42",
  "key29": "2zoaeptGAmdxoEAJvcn6NVfpythR1woaoJhbv9XDyxPt1BYGWrMpAdEpis3L1TcrKeixv8K2KEvu99V25neLjj1o",
  "key30": "2YWyRLzRp4fDzRvzsbU3NWkaUTCeFp8BJhxiaP5uJ9mJQhB2mvzZyWo5JfXSCh8AGiU2YFvrFU4LvMJeUQwd12Cw",
  "key31": "2w1gT7vGmYxTpGaZqC4d3JiKNPUMiqVbQnwNe9619WCDyv23ihVawoASDDtbgnsQhngziRxhqd5nDvdB8oaUvcdZ",
  "key32": "5pJTEvrsatrd4D1GbrWAgjMXR2xvXMRQeqDM8ogm3E5gt7QenWNPeNEMf6xHZHjGCk5oqhXTVphz7GsFmPbNx7PC",
  "key33": "5au1oikfx6FZWp8aVG2PbMcrFeFMx1tCgQTgHNCZ8vsnhN1eZZxvfT7fXDGQXixg48CKCuLViDUZ87nX2fZUVNEz",
  "key34": "31pLy5vyPmAZpwdBZm5uZzbCk5F8iDexs3w9Vtrb6j8poJY683JjRXotKYx4ZotVu9v1Sck3VNJidjvczVRDaCMZ",
  "key35": "3J7KusBFTEu2G3GkoChtzTByfdMHm6wjQe5LZNpDnHJJRyQCqwn6UNAZ3UWgKfdvuUY6dmZq7coXFhijwiKLS3eT"
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
