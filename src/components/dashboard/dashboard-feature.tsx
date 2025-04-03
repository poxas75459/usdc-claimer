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
    "5drVBb7Bi7NkQJg13h6XBrmhtjMP3MqGBAPoGXYdCz5ioJXUuXeUnz6NC7hNxdhWDYJpEUM4YyZGsCTLbmkX9aEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jsn5mYuwEWAj8bJy7ipzRnEbHDgYsE3qXiC5hFYsUwzeJkNz67W11wkbaiGM4dpsVoE9y2G7sN4uffErUz8W5SR",
  "key1": "4FKwPLH7L1giNSHx46nbVMRidxk9ksTgWE7tpHJhpPBadYLMjKT8jgqEDWoMrBE8h3ZbQzt4w7jvHoP61EnGphii",
  "key2": "DfzAeSjp7HmyTdkdnmpUUDzBNb2b8rzCZaAzYBi5Z2zb8C5N3QJnyrPkrTdJJS1FKbBokMQqN28i2nVw8nQL2kz",
  "key3": "58HtEv47kCUD6ir24VryeDcnQm1kJ33EUBQ414LfRKxofe6qE5GXmVazUq6YxpDT2daughXE6ht3Y85TC39vMYK2",
  "key4": "2VUVCB7aQzm8RC912MmV8Jm1kiUAbbW6vqJT1H1CXqKuxPXwTpAHV8wRE9T8nmsC4F8W2mP7ZiP2MLYr8gf2ULPH",
  "key5": "4dYThHehtwRqznLQgR8XyzLaSxVqQbB7hAXPq3oqbC7pd4BS3dZRFoeR5WAzhSxLXbKGutmge7tnt7VZDF4nR2M9",
  "key6": "61Egs9Du2rUtZ19aBh1me1RmBSNtJRTLDQJVPYVivoi1XAp3kbHZBtw8gsuW7hBgKasmFRNNb1WbnDUX8YFBZxck",
  "key7": "5fRnvFpNBMRtGzB5nWeWBuLj6B4BVmKLMCjvNdE5Z6qcmsL5EXcSS3u46i4b5shtWwd8RHmDVbNLnwr6SpSnHZFn",
  "key8": "5dRLJ3Wxymxv67osmajyip5JumMayJApMt6mVtrDg9xfr26EE1jrqeoEGYH1jSC2Mx61i8F2iqdgdvrJLdUxy9zB",
  "key9": "5hysctmAcHhiMo8dEe8a5ep6o3aQneygWEvEitJ5zSBqXmhBMSMhHbgVBiZqqbJuiBNm4SbspAFA8nQ5MvQ8Cd2y",
  "key10": "RC4wNdww8C7fM7CVnNiNrPDAZLK8sv5iLZKrQikhiCSVqX41EQwVBDtHcPc2pjVgfjDtRt7DhkrXUNXJLtA3WTd",
  "key11": "3WrMCfNDVainVmMXWUZsK2JTQzMuvDWfkdGzKV9qT5sptCJDo2YSJAURft8AhSqDHCQhiDP6Pe1xpo4KdE4vRpBw",
  "key12": "cjAcNfr7kCvsSyYDPbh5TswVNJUQx6ZN5UaDiLwFNgyhRHK5hHFLKZUC9dD5HZ7Mb2byNwiyKBmNX2oddS57Vb1",
  "key13": "5CH8ojunQyCRwgp5BtuvRuGgmUxr1e1pY8AXcQvmo8cFPo976aUCzURiSy2oYmjnC8mxosivgKSHnNnRR3bTPApN",
  "key14": "q2zyMwokxVtbwNRQdfkNupYdsGi1Bdt5q8qnSbTCr8CcUa9x9vxMoRcy2upPYqxLu9WAY5npuipkiDhMnZW5d21",
  "key15": "5dNwy1Za2cYsNUZS1VFq8ay7tqJeiJ3YDGpeCxahWGS79h7t1Mgf1o261yo7iMct2KmSDpfU1fw3NM2ZBRxNWQRu",
  "key16": "3r4K6VRifoXusTiQtUpALwpjTYcvL4NCEBmuyo8WXh5NyNhttJpwo6puhnGgk8zHFm9XbJ6rhj6bvj9E7VPpUspn",
  "key17": "jTVT1GvCPUs8J6dYM7adzu2q9FHFndgQJu2xCrSyvsp52NPoPVjzhEV2sKUCfah4qmhPYTnoTHxVtg2VQXduTtu",
  "key18": "4rW2DqxYoCGUfDjVsf1NDjC8ExfomKR8H7EtitCiLUTDKkZP13YowMsGYm4yuFr4Rzar8DKYW642KqMamKWV7xb3",
  "key19": "SCRxUCzRPaZtYZvUVjB2RMaroSMEj1FkjrueQHvrpZvBuvwuvK4whpWvzTPJrwigMKvU2Ji1iYmp2tWLS8Yfg8S",
  "key20": "3KdhiDz9zMRCi5GMwv4pQKFmL2wAvZuycwBzdTtRiR1bqe5ypcj7frVXbkZXRX6furyU1CjGTxAhakpknrWKEqhZ",
  "key21": "4cu3YpBPZ1MLvQLGyRC7Vwi6y3XgcjebAza8aePHASpvMELSYE8Fg6Lr58Fxsmba3SpSeogZBjG2ZgVHEoP6w2W9",
  "key22": "2hqhfCjgknWVuNXZZadM7m6ZFz6PuLubLTEDE3s2G2twyFPZyz4VRvZZURNQN9MRPazFW66dDLwf6x4FSqyJckYQ",
  "key23": "3R1VHRkjXaLHphESavDpiMe2zdetyvditw9gGgW1aCruhoofWa6ikzaSDJn3dUJ4D1xfYFR4ozTfuz53rM2aGtS4",
  "key24": "4vhzKZaCoa8A62ouH4YJwaNUHo9cQ7pnE2xaQfydhuUk2FY2z2Cm9HTwNFSHuhPPkWTKKCgFLQWomtn4UZ35f2rK",
  "key25": "UNJb4dxh5nVAeg3fm8hw4Zxu5t3hW7Gw1EArpCFKDTXgPwxzayrht8ZDPBoUDmDn3VqnfxSxCrQ1hPLkubQA9jy",
  "key26": "WP2HvJVnjuDmLCwpaJB6BtyzF34eTGNdp7vZc9ivutDvpsbS7FHjZBpFC8CN33j7LiXwAbrZoBCjD8J6yMoy2Zn",
  "key27": "4a4NTWJWh4cBneqLckfzEUGrx8HnxZdbRq2Z2VqmWHRnLJMsEnBaMs5znfChXiu97qq7LF9dw5o7FV14prXSWBZ7",
  "key28": "1bjr3rbPqPLqhDU3kQZFQQZgeBWY9P8HKRPjzLuhTu4yc6CXbhcWRiotvjskSfTWSMV9bGSzS1EM3pL4d4GpHNE",
  "key29": "4VotgFun8YxZW3jCpaa6nXKqFfikrBrYHdAjkoZtB7QUt87J2HemwwpL25VRvVv9ECRAMA4HNsqfZt22zpiKitje",
  "key30": "55sfucptY2a1ykHgSVAvBLtCQBCFS1z5WuSW987viLSs7ej8U6DGqxsM5MMJ32hJToDvamr9YwkfhRKF95kHwL3G",
  "key31": "RSrCn7vLUWF8uHtnBKe3gRcSjtWWos5om4RPfGbB5WnZS7cdmvCe2LjwnzW5ZkzMvobXQzGfJ3QRUufX16NYoq7",
  "key32": "3qh2zVTyLoRZWiyDv5jJipFPME2mn3j6WNJQ2Kp2g51KpT8H27LHQSvbJtdbcqvpW9FcmEYvCEdGePn8Zxc1hq6v",
  "key33": "58UwVUzQWJTDpuag5J73DtabifZdhayf862mj1auTeVnDhun6BXWV1sUaogX6nn8feDrT2tw5jYzDuzYGQiHb4Kd"
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
