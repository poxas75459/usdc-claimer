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
    "2pHUyBgZ79NuAwJzrL1ukc9aUz12mw17Bou5Pc3A9FFoJ7kyKKp6duRqMiCga7qNRsjeorQPtrCkTyH3644JS1pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wT898yAnZFnn3Dw9u2snrjLi4ySPkQsTULk9bkAD6v8yq357ygBHmkff2YPKUR2PVBfD88WvRnVhUB39F1peF3C",
  "key1": "3SgmcdybU1SPMTRCPFiuui8Q6nz6rsoeu6oeUPnnMPDsF8FjAR5bDw7kAdjQyqPBgopMwqRoH75uECDYh9G2byTg",
  "key2": "2oTgHkLsmkHaBQd2Pcb6bNBtov5hanpniKQssFbVXGHsFX5gYyBRAJ2Cts6n2XTK2ai6M8gt4iScGzfpx4JnQWJA",
  "key3": "3sMwwA7wUCy8eKsJdupcQZPGP55KD6fyG9cStBez4Kn6Dh5vTCYEaLZGF2pGWxgP4EAd6LYiNpAQGG1Vkzrs5oRb",
  "key4": "2JxogPvUkEyfRf8F2J6ZErLgBqMbfEiMpGEQ32JwJyahoWW7nTKYdZEb6bND9AE1mzVqRTry151TtRZBYD4vF3oK",
  "key5": "4eDnqAN4AAVyH4fkfna9Rr2fe3i22S8jBL6N2NoWonHdc7HLU95DD9fR37BD7RwKJcYDXftDYmur4ofB3Tt5X7YF",
  "key6": "4HLDjVdcfJDTgCXEL5B1eDMehRSR5QaAQFPdMdYWkekXVB1D8dXmoR8SsL7j46x5fN1bo679pqgZszXfEhspBS3Q",
  "key7": "5uUAzKQERdFjGvDgGUKdGwzJ87K5HTFccw6j4Bn5tPBFQUBGEvy3brCpDaupVF7cHMyWiLN86t9EmMPheFCHSB6f",
  "key8": "4FXQ5iRwBu8LvJjPuywgHwwN3zveuLkZh35PhH3pp2uU8YwXqVTpyFFSGKPtJNGwh5H1ADaJrfSSSPLFiPRdU46C",
  "key9": "59ipVPkb1YsLKKbBBkjK1XdQYnbSf319jQfgC5sdJab4ge23d691w4LAHkNHAnC4KK1djyFQxGP4BafWVs226T1P",
  "key10": "53exZQZJfMdQ5YqNQw6pUdGWeKWigZfu3nWaif9YufDrGsoGM3ivQd1YsKGxo1KMuZUWm47ZkJZ1GYzXyma4UNUL",
  "key11": "4cbyCnCvknYzq2KiFDhmxZRCYvJAsBgNd9qBVfyqauou7FcLHmFV3q8UXnuZQAQQKuiwCkmj5nP1wpmQwMfEZgfw",
  "key12": "3sKnoqhDt1bQe93aP6RwkxPAnQ5jfAMQ6wEPsxYLZniTroMNSEFSMrSryYaBrfc3iq5GrZbqS9niktxxKzKNCMLn",
  "key13": "S5gv1YuihUxL5JB1VGdKzyNURRALWWMSabEXiCBJAMqryCHLQerpaYG5Wc1uMzJn9fVc35RD8GQDJeJDM8Gn748",
  "key14": "3g1XVZmKLhbp1CiPErCCm6HDKt5gWM7oQt5CEEj8UFWfXAxGjTTuEpfn1FBfYmqeUwboiviprS5Sc5MkaESnFcGW",
  "key15": "STzhJNtDVCx5WSWbHHdb2oxQk2iJkqkwLih4L9TyAEKyswjCCLBQVAMDm4xkYUvQxjw43YPYQHhNKrtQw9p9X28",
  "key16": "qxhWU1XMvtHz2gS6RavSyMwECAmYfEQTTTy3Y5KMVkmijy9JyxV76FpkGCd9XarugAXhm5sQgWFmLHorfuo5iVu",
  "key17": "3whVuENXQsY6Hj8LDMAfpBzfpKFErAEyS254sjPgBdUFvd1dF7VndFMPuTpAyXiziwDUeHPYuTAtARLFLpeBr58N",
  "key18": "2q7WSAqPqRvHn8ar4yttfieNa2UAZw5HAqTgNd8ae2bpC8bGtsUXjTbZK764DVZJdMqzdHSA8URgAL2paeE1GiAV",
  "key19": "3cD6RsVwDfcga1DMxvDrev44Yw3XSx6fS78f9sL3ngm8vjtDBwSMfffpgaLdETi8Fy5VT9t5GGSdyJhyLvmhAQ6A",
  "key20": "2464Br4xRH7orPfmJcFdS6VZXuewxxT7F45tbFsXNpSpggoVzFVFdg3yxhxWEnitWtyLQ2ENR7gavNyJN2ertWie",
  "key21": "8RVH4SagSGvjy3LEpMMCXLAjgULF5Ki85opZAdEJ66Zh5CjNg329H7RFwtgo4Da6QMv6eoRoA33udnCCAcwK2xr",
  "key22": "2u7iV6KFRpRor9nn2ecL9L7hQsztNjN3J6pWvfX1CWD7QpV9tqZvYSoeddKcfUaNpNDYDPfW7ZUqveAJC5xW9FTc",
  "key23": "3jgfqcSer4RoXvW9zqjWUFtBWBgoGknwJ7aN7oBJcNnadD9AqW5MrHir2MzmnA6ffNUDFitE8saNj8UwGmv95cAq",
  "key24": "4rp1C7KtqsEHpNMQ5JkPwdrT5Xu7QDREpGNsT3rqhkZyaEWo9FcZ3kn5pzZj5P7XpdNshBCm2zwGNUieYRw1z29N",
  "key25": "2UC9tu1WLcUE2RzCkQSQsPs3YmnPGWjYHLBtdFJF6jqz7SLx7q6kmnUo7Dd5jWondzjCibdtc6SfRxki9TQcPc1",
  "key26": "nrfCyaWSnCackJGJMRzjemytQz495WeHY3LPAxJJYqv6SDRqLB5pxMyBLFm3xdheRhtMBG9RiU6HjdKVUXTqM2t"
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
