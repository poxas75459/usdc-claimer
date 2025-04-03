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
    "5HDWzAREFA9zpfSpTeNtdTEvhbAHEPkcTooJafqvg2619vJpGn51sRxiSgWkFjsrLfubBuzTeebkvZbrFZoKJwsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j56NZeGquXTtQPJaivDY8pA7PoCvZshyFYF1qt8hde3u6BK3FrE5LmkxSf9oNVwViUS2kMYsuXmhxZeBX49cytt",
  "key1": "3cj95q32Uaztuj4RbMbyCuBkxodaDSm2UoLm41EJu3MqnbVyKhVa2L8TU5dA7xpHHxQRKHd2XydpV1SAKJ15wxuk",
  "key2": "5zchE4LSq8o1X4RXmWB7Kk3NATLo7XL4Lebp1ahBj5eA49WkJoRGytVha9qz3NgvpvwssA4wQ1keEqfyNyNv8ZMX",
  "key3": "39boJ8AJAkZC799XxogVERFKUFkmvTxWgvXq8pqf9fUFWeqBrffEJyd8jFbsEtCfLgE5ncobztPx51UyqHNz53EC",
  "key4": "2gB4sXiAXPz4Wjr47yPprTc5o2LrsKLFdQe5Fs3C4wiJDvm4ZQwTgXKn5LvHc1rhibzVLiujuMvJNsRCQLdWzqrP",
  "key5": "3sacCCmGJaugexegE7rhdTH3rZDsGaChREsCH1nrBiqfdPQniX9XGJpWgNU4aSB9JrwBckrMVMoRiaEViJHWLTuD",
  "key6": "3GWNw2vmVQTZu9rQ6sHvXCSeHnm5SMnMoDNFtVLQK4zV13E2cxtTzBPV6SjNxeaHYSnPSb2vGyVme296NbvTgoJ2",
  "key7": "5i4Gty1Y69syxV9RRpopf6DC9FwBPs8PLfXwpWzKQHqqNNcZftQfoy2hVxJStS4RxgQeWeLmMyonf8JbfwLopUTX",
  "key8": "ZBL6Z4bNFkKpQnXnnc2KHuSTy1oE4TuQNPQhkqh23t4VfErS4jusfPkgcDgaa8atbt6KrFsKSRssgQ3WqVSeEUs",
  "key9": "2t31Qcj4tYnTX7KwKi64mTZFSjUuk6s8E24PnGE9twG9Gca4PibWzue1nQFcYtQzBgBRm2VxLX5BE8dkxcEQFkr3",
  "key10": "4yMZL2dhEmpWfzBcLzsDBa2uphwiAJrA5jaZugkaPvm5QkBMUT3vwwDu74crCNSHt6UdQT5KPUXeExLZpXas9AJ9",
  "key11": "2soRys5Y2ze5ubhdVY42EQbdxuLwGjSPbEf3mk6WivfyZ42QEMLfuQ8nnEnA4jiWfXbPo8PJwvaJzXgAC8xc9uBD",
  "key12": "57SR8t8k1Vc18UJB2yVNp8EBym3dAxqwARmg9CgvqsTDrESQ4mQwK9cQPrcjQcUShbeNMo2pEdBqnTrgJQQz2k8J",
  "key13": "3ZKbGGWcA3gXf9GvWUv5yiRaTZJgi3Nxs4uM13ymWz7kdytR1Bxmzkb2MDM7H2UkVkeVbTpFkJmJ8D5JMCVUJvN",
  "key14": "3Gjnw7hc3Eg1dqVFkpNaj1LJ4BNVUjhZN2RsYbdmMbyMmq67SNA7zoowUUdtnkg85HgdzgGCMW9HmUPmyQSBbrU5",
  "key15": "2ZoNAFJyV44ro24pdJsaU35JyQMrJcJ4oHmA1NyKuzYWzVqf2gLJgtDaig94iB3Q2pix3W6LfhMrSASmhHYSWMtz",
  "key16": "3h2sa87bUmq3Lqs4C5RZX3cpnSE5gJvTcpRLsKejg65GBJwi2nXpbXgodbdU6NVQTUPAJ7YNK4TycUbRuhoJgBFK",
  "key17": "YDtQ8eFGoqrgMFGWPT2Z5MR6RhefQbZmfADWryGfsNir9bAH3weUoyUNpQ5zTQWvhTkT7RoxjvkdE7wzgV89zMM",
  "key18": "vafHVEAH7RPkUaAZq3veuXPyiVxQQm9z6Yz57RACaMq9tMAnXYHX2gvyH95pz5qARx9pjwYhxfhjSdJicbGyHMP",
  "key19": "275Gfjzx4qVQMgB8tXS94yaiFSoj2fS65hKGDodAgSaaB6cHAdmpDGMUA2Xjy1Mx5DUmSAACLBwx9AWwM3ixWbgT",
  "key20": "39xPtQwvZGpFUMVzsPRohtBwGeRFn4zoCFWTcEp2ndbP7MJT3f9vNjeRvGg8WVGmhVqkfL267w5r5SxTCPG6E4XQ",
  "key21": "MotEs1nHdWNkETyJYgXUaQmCBFsTiw18Pz6tdcmXCjksK4C84TFvpuNGUYQyFzKwqoWCmqPCWe2pGqSTTeSbsCt",
  "key22": "3HQUSqCJcEhH41oyuaUDFe4xYhanGJTdThzQbszt9TbQwVPJHBf9j1JNSczpAkAoYyuWo8LZbRVpFH2X8eVe66cT",
  "key23": "76SXjmKc5USx53F8JPwxVUHi9HJwcF9BtCmjPu9gjxAn3ksFVwEjts8713CjKWusoLMLHMfEt6CFcnSFXZp8L53",
  "key24": "2Q51bhCxe1rvo7VkP2Q5ZpRDKN8EVjBttuRxD2QLvrtvtqP4wCa4Cx6Lbf1umhmMcBj76Kb4mZJUTuL9NFwahaNP",
  "key25": "2aQGXv646tdGY1yvMWdR1iy3xRSQcybqFVmossaMXYMutKXhve2sshkKXFmEndV7fC4Y4RFakpeTaaEmsZ6Y12nQ",
  "key26": "3QNCNMockKru6JHdpH5jxMLm9eBiPjwtQNu9fRLiKaTsBV4RUomm58qYfw1jsk4gY23dHnnfVCkguRSupaVfEWpe",
  "key27": "5dtrXtbsoGTRGbWkkmH98dhGFhB6hNpTU8DRdoRbpCsMydFnRF88pVoC8AAGkx2WvW6M41V6j3wNp6nLnssLxmA",
  "key28": "49wsKYjacAYXRjNrPMLkfPFR4wwQFgRKo8MjeHezEQC2bE8tCUJGFQKC4rLHXVYPKSCa6GUfjKEan5Kb2G6frxT",
  "key29": "5w4rTFy95ju5L3X24iDo7FH6kZMRv5gqZoW1Hw7iq8bsNffjYN7iJoPYuuA2zG5eYUJc19SgosDtua82e6vmvnS8",
  "key30": "4qYEK9p3bKP7oAVtmebgg9axg3w8gbPMVRaV5P58sZkUykaRh1Jygqg6ct1WLXHoRojEBWCTpC5D7r1DB2mBp9ZA"
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
