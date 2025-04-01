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
    "4pRonBmNsgo62BHKiMpoQbMH3eptyVEomhpsDomFJrJyZpBAmAsCPDPXDsMcLsL4ihB79uRiYx6YHMkEyQMrdno9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44e1Evkum9LGjXhXhpbydzUk63UtkXN5W948zZNWBh1hgDoiLhqNU8dtrvPoQz1LFTHDSuGLHgb8nz9WSNDyuXsw",
  "key1": "52peL6bUJtNPTMW7es7WMd49BMeRLbjjDvjiD9Yph4WkqqWace1NvtvDx7kjH4A3bskPv8R2g91qSnNsyDmCqA9m",
  "key2": "5uvy1Mko1sw3EQxBDAvj4c3Bxmo3wfVZMVwH6NTASHn6FufxfUrUch9PWNYJGVKG4T4SjoCEfjnyZXckY8eD5Eut",
  "key3": "3JNZfH8fHgtfxbdEX5DFrZx79vxySu662fTDtL7cPCwPno9YQMDtzTuHeoWGoPPhzb3YDxhycg7n6EBhFqTELg6C",
  "key4": "p1ANn7cLtTJeqF9yE9oGjGGAhgpo4beucyDyY6JdwXE2Euj8wdU3HeXqXdpWYBVjNCNd7oFfxDjMWga9PaMzAd9",
  "key5": "5jK5Yo7MPXQQjtrwEZfYQXLTAdW7hWKgzzxips2moTDKYFY5S7emQfLjcZYRf81tNtDmsQ3uL8cVPSHPPDmbKMrE",
  "key6": "GA3o5sM2pZeGsmCNqefZMLMyv6UTMhqgZcQERicD5B4sQ42zqbHyy8Db9scmfWhrrT2vTBhvyoqDzgpP7MSgcZt",
  "key7": "4FF8eZpqPtim4eYmfXjDF5nDroeK3PTfccxmaxYnePqDu29fYHS2jq73ouEF4bWYYoTpxPwMiiTQiW86ffwVtXzH",
  "key8": "4kVMn2FDei4WWDjwRj2ihGQT5vTCnFVvT1ySkcnNZ91YeXfHcBKbwZz6jzpgwEwcqNBW8nm8eiM8mDmWHeKrSZb3",
  "key9": "knZP2Ea4EwTggJfK8R3VWm4XEPuxkkDNCzWu4aJJLGa1yayaL92XCX9Rhw1e7f8foZiuUiN1LiCRceVcK76mMwp",
  "key10": "J6D1TkkBVUTZEp6QyvhMeurJ3NUKXJtZujBQr6XQquuDrMEFJ9UvJcS6uo3qM6xrp5KkoLhXZzRMTxoT8CCkosG",
  "key11": "48JB3zjVz6VGHVR67GESRymWEZnjTsUL9QvHB1kFKbATwiERxq51eL8gVMpUZtwVNKeKE3udkkBDmTKngohHbWXK",
  "key12": "2cE3VDFL36ZTeyLxK4d2amLBpSPNp1MAxShASyjt3reEvTxJQ9v6uRe4vCsBoj2tbkoYJ9uHq6SHyV5dzx9PdyJD",
  "key13": "2nFvZ1g67FdXLX6URaEibRJkeCoKqGhJC9RARBiXiSV5PH5Gv4F1BuD9zAx5CvpqtD59R8x81QVTD42922fRdubi",
  "key14": "54K9TSG3GUsbR8RnbgtbHWrGwNdoPaQAe4hnhAyuoz2q9wSQZw5r4KENUCXSweeSZGmK2CEc82BJYuAGVK5TX38w",
  "key15": "4z48zQ7fPYXhLmTN7BGg2YQyLVwyd8ENZQB1Kyxt1pK2XaQCYqcGQiArfmu4K6ze7qVSq9PAfB5VjtaZ3QtyZMoS",
  "key16": "M5xRYBZcYM4MU5oAC2TxaA2qr9NigRHva3RmUutN8tac91yhpcevKCcA22QBEhzQiQjgomEBcY2rwyrUjgyoYYA",
  "key17": "25A3QevrqiLRxbuWyhLrpa6MfTHf32nfdzXwUBsi8S9Udtqorm966vjvzuifhCDYfEvHzWuurTr25cu92gTGUbWT",
  "key18": "5SY9Q36JaTgLeDxAUrbCHKcBpvD9EoZNUbJT4zCBNZ1jdZZdJBtGkJXyqET61xsD1U7UXk6Ns9u9wapwryMitbWd",
  "key19": "2To2VPKoHndEBdt2tUsgpggBXWs8j5eMqUwcfxd4LNcvAeUHPe5uZhC3Zv9qQoARFnitx5Fr5AWarjmtz7ZgN7fZ",
  "key20": "58nsHF3e3ZWhpiFbLEx4k1Ap6FxnyKd1ace8YXQr7MxSoNha5iZG4RiCwTovs5yhFDape2s7pnLCoGALDjZpE92a",
  "key21": "5aRbYFSR2Sg7XgwLrtmuPdmHZsndPVbxy3dHus7EsbQRbzgUtAAce7g1jdm3mT77Ekc2d58spzvgaU7RpnCp4xKn",
  "key22": "4a2tkkvAQwUSYjSsPjGjmBcukbYshA7jmn2LhGKNtQVRbkL75kPKFQMVQazGDSR1sVkdFipewayoQSbNEFSjNsFo",
  "key23": "5my1awsv5Lc97QDYSsRPwPTtpfhMZudLpPLWdF3FUhf3N21DnJ959cmDuwKBV8qykt7uiWEet2o5g9EuTstxmAXs",
  "key24": "3vNx7BGfiqyNAVUseJYLTxsC1rq5NYvehMU4MfZXerBFoRxoP5zwb7Km4tLwsNTok4YT5UZWwYaEKNNQPQjq9MA1",
  "key25": "3c7ZLtrxezM1VCwwoZJqjnYCEMLBkMpCR3zaPdpTEyVPJMDJr7gXD158GzcJX5ymGkJcnqAxuTYh6ToCV2d7ejA5",
  "key26": "3TKm5TbMWvDST8GLqx6FJnVReWnkXngVf7WMBGrE1p5NAo69MfkP7jECggJo8hM6LNczeWc8CRgdKfFonW1QjUHk",
  "key27": "5gTNVvEF1U9wxQBAgYGC41oxyoCsakXHSZn6bQB9b7a7ZBt7TDCMjTN7F86K5giSZr5BYXWMrs3AsYjuQVZmSLhc",
  "key28": "3tyadma5DU7gh9dSmn384gqRpN54gstq66EQ3TfbzkcTvyZDicipdrPEyagridmJyhJnhjPDprSbmyi1HtUd8MPS",
  "key29": "3QJJsDTsHb8opuD97SY1L6fEWcGwBz9mU6m1ApbYrr5Fqoi91WbTpX1BNRManJ1KafmGP3Qt9vZ7vhJA5BcPoXyZ",
  "key30": "2ehpvv333gz13iEiXX1fDWA8A3EQVReiNd5Lqr23iBKSidNCYrkGuXuyyskapMvgRHhpVCUZV5Kq8F5BSS6SWkwG",
  "key31": "3BPeG3jwxvmpYGQqCHiS8u9WdDVXs8q6i36Wp3TmUoEFFn6c73wy8EBhhjhMwiVAd5S6fB23V8iDH3B6NPSKySqS",
  "key32": "49MKdBqpTU7S9NcR6xj5jxSW1dc9pPDU8SoqPYasNBTYGmddxzgjSxWFjtFDVHbWedcBWyPnksJiXh7i94LW7gXq",
  "key33": "66wXwLSKbco23L1eutRWmvPvUBzqUNs4QP2ugPMgu9u45xBBKoyGNeBRQhCtuS2RsMiPri6XxMBU13QV16P79ZkY",
  "key34": "pa9reQAXrcf6G9TjC6jZMHTzqdfFim5ML2rQcY487s3UNTuX84Bx7LfnuQwrQLBiGwtukEwoCPoRS8PtScYPtGv",
  "key35": "2dvVqGscXZQtkRhWTfEFNVvb52ty8wRGewFsufe2TK29W1sCjVhjAHnvtgQA7LUcJBfZqHXHZ2BZeKqVkjN6N4nx",
  "key36": "271mKaQDU3X9BucTL3JGEQo26ofnP8BCdFsM8vRHijgMhiM82TUrXuXeXANfKCYkZtNppYqZg4GWLe4fzgEmn7Rw",
  "key37": "5GZpCM3KHKiBv8gRif4yiEwmvdspP7zH69r66tqqrZysKJDzDGw268RjcrqqgXY3qzQv39rxFUFjhBxLVF35fwGi",
  "key38": "2HQ6oLzfEJcMqhFsSDYrr2Gpnzk1M1hrkNqZpjg4Pj3dnjNqvp3Jg8sshH1M3Hhc2CJb25kM9gUuTVoVS6GBazEM",
  "key39": "xAohxJTFdFH67Sa6TjLiNFdFcEaotQwzxCp414ByHMkF5YYMHb2jLJsQYSXfLgV1ktSWo8GCTSC2sea7bC7mgUd",
  "key40": "3fFHrKTgXoxifxCMBk3SKxud1yRCa7ci9GvndgVBtDPEHwtqtabQy16e5KAMnLSrYGZbBtMoMXWLzL3vAfxdy34z",
  "key41": "653puQeNYEbcPfaQxdB1uciZm1LyzUjHKDrjjBFpFG7mZEa5Cq7mWmqwqW5MtbjHkXpQwKYDAMTkTjDNYbFtRgBA"
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
