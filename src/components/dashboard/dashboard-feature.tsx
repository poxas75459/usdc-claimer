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
    "4m5NDmicGj2BW6Zge4VdKfR3wBXSpDMzne7umq7Gj1cV4fD1XiaA62CnZS5nxuxFBjTiTgyMFRLMquHu6PawJj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AsPDLE5wZn7vWgvDnRTLJwfxbV8XT1aRGWX1pa7ajQTe7PQ3Ro9TNZkxtPFRiqE3STrBSJnPLe8QiwPBjyqkUM",
  "key1": "NgZbNxLB13TN2pep9Viwq2XYMM1J1tB4jmb6trvVdL3oDbtthAet1WkAa4mBM6D69U9aMCoq9ZRkrKFVuAfP7Wh",
  "key2": "3dBgrv1wzZusUdi9pG87Bg1BKk6dCWdLARm1D9qQ6oyjiDyWjxxoxK8NZhYqLUGsFF1bs7mEzAo76tYWSYDLeXvw",
  "key3": "2xQNt7xuLvSdk7rnSPzev8aPRz6tenc8iUysALRJ9gLmbf9Ac8WD3vzGREWBRhf7Nwq3LzRtZr8oDDdzRS9DUcSb",
  "key4": "4vz47wzUiYEquK1vfrMihgN3afTjSkJFRnXhrrWGeNa68BDUnxBXetXWty8oMnDa7KqpDEW7BBjfEEKSCRJKzEjq",
  "key5": "28dyV2WkbcVEmvr27iGuibgPonJFqsHjzbs6jhdMKnvN6GvLqncEDPecsyiAPs2NrpNsNjXRYAXbTNPKPHsVQoEa",
  "key6": "4yZBHgWocG2t6pCNQjCoyt1QmiRKxwTxcCZ7FQFCTz1SzQ7Z45senCoupfM1Awabb6LMnx87RSbYkffzEsUaHAVb",
  "key7": "5tegY98psDYw2hQXBVBgnH4getLci4jQ5GJtkCx3mkToVDrk8t7diTnRM3KpmoTFQN6nCiQZb1ZA86PjRY5XhxhF",
  "key8": "fFBTwerYCZmQhzQnKZU7RkCnvP3pYh7woKCKZh2GQabG2rj81wqwg5zECNMvL4Cy8Pb3STNnyySMVDwYfLDhyqm",
  "key9": "4YZSYUP3JVhYdQvHATzN4N9J18CHeN2b5dvrB6S2TrWqp6eoC2XxCdToJ3JX5EgL1tAfFD6egQxGbeEQ8iHhDspY",
  "key10": "VNuoR2GvkE4u5CsMWPQQp8DZupLVzc63c5mQb9m4j3HrZg6WySD7KBjYU1MCAtiTDsLRw7fXCdoihGYmW2R9Z1w",
  "key11": "45VQNJmQVgjci32ZkM2mXsSTd9aQifLgfGABsAjLB1ViHGNebeSw4SjtegaXk9QRk1Fm1yUCgBMerbsQYgRUtDx4",
  "key12": "2nLpDte8ytR9twNNh7jcDYm8vdvUJ4nSob6Xz92npLp6TtQdGswQdmDzrMCoXTze1TLoEDtnivST1bZ5RkLqpDrH",
  "key13": "4joRygAndHSLxqEVF5ThLFZ5SaWfkFMtM84njEh9wGXxTXmEtVWQKLUUBcQhHPAwv2anuEEKpUZ1468Ma7ahFreW",
  "key14": "4dTv2Qmi8vxPXUcrnCMtmjqYif1iCnEWWUPvi51hhnXdeoFZRzrgdtwcGRjbZwfWsrqGqDrGLdatQuju7JQzJT38",
  "key15": "3cUUZ5bxU2D4PuD53t9Hac6EXHWyx5qWfLqsH7WgMbe342PfKG7y7ESkDef4EkCUR5KgNko6QjYXhDUSGvuBTjZ2",
  "key16": "4yherPQP1XYNhFuLendK5mvULFrCiz8STa1mQsk3KeQ1RraNnEa5ccvQooCSVMdkbVXQ7hguTL2bYAyvjknkvUS8",
  "key17": "4NMfuSXo7mxTvxvKrFxfNuKbsnthCBsGkaEBZ4ydu6dURvYLT3VMkD8z6BiNS6qRe4LVNTaysGzTgEUb6g6oPYom",
  "key18": "tPAb2hQGjD6c6qzkn2kuUdKuAX8VPYrm7WMCWtky8NzNiR6SQvafZHQ4f8LepLXpzWfw6oK7bugacKaeWxqMTBX",
  "key19": "4yBVxLN8JjYRAryb2nLmk5UTeekyHXXBLhk37QdaFQRewjkxpe5oztKQ9c7SJZX8DxGWN5fHH8EASDBLYt954cLP",
  "key20": "3Mvut7TDoSSb4VnkvQfytr2mh6V3RBzLoTGJG5mkswvPkWYsY7TtnUFBjKnQJJmUJjGfKMo3AUF3nbzMHW86Y8hW",
  "key21": "nx3iCCppijB7eNDgb1qTzffcGM3zVw1YjRnjbczZpZXXsFJN7M7KrztGcEb6ncdvAWGaPBvLzkryArMcyeu5Qgj",
  "key22": "46vc2KGPQo7qP7qEdQAyCmB8DJDYX5AVBLL3GiBZyLSDuop7zmmZeyTmnypoindiB29ZJLJxP2vkgzhXbyhupC3G",
  "key23": "3ktYfTGjpguEDQjVVBuy8ok5edJf49gPt2YvQnwgXhoMDJPk4Vn4ce737fK5Yfx7RZWP9CU2M7WnwEjKK9JE4m7Y",
  "key24": "22pU2sLXjQWrRR7EVp3vPJuTMkZEQyqrpVbTu32qGMFDokCj8LX5xnFNxvCQ6ShNWKsCoYDXYhMcmTJD86paVt6J",
  "key25": "gyBnvr12nBqnwyXx8kcovBV6uf5H717gzc2RNWddoK99KB8pMLT8zS291yDddWEH16psX5PpnZ52WTg89NyxavU",
  "key26": "461eNdBmBj3QuYGEQLaoGF99gWqqwfAyg34gBr4A87A8zviE2zRa9j5QAiwA5yHmETGfdwPe8K2GeqBqQgwPR4Pz",
  "key27": "4znEhTCSLwQHu3ivVqywe9YSZjQpfHHAufukAKySGox8vNoxzzstFfy7ZdwDRJWtHW8PTbPCApsnRRDtSFb14kUg",
  "key28": "4px8cTQFtLuVvEomETSyWaf6cM8CPt6E1qtdBiURUeTwSWQeRB6ohd7u45J2uMA6EyzJyHnicAmryY5PhRLdHDhr",
  "key29": "5Lc26N23ync4frk8LJWd2CcpnPRJjEPqb84MXdEB1UcUBX2QzbEC2abB8PMQxx9koX2uN157n4X25nRzjSbJZMkD",
  "key30": "3PZKwgVRu8o6xMtPMBGuH1ZrVQo866G4QeiypKKG8mKo4KLrbd8JRX9noJHzqqAmiPUMqjwxgNVktczTdRyvndTw",
  "key31": "JgkFxYBDaxEd9STpHpxv95cJYpudTBZzz5nyQ88hJe4XXeoxT75BKstCbgysKsebPxLX8jJDP2zA2X7ayXNPTKM",
  "key32": "4yDBdrZ3rFeH7BQcxL9zbBoRqwEeWwYsawKX65ZZTEK2J1yzagUb7NNNsDo9DtaWo68PEFo4KuvEPg4seU2Ymr78",
  "key33": "qFaZwhUDwgR665fqa1Q419ykXcqeeFKddXZUgtJm4kFFc4gN5tEYsZTJD3f6XdXffvLt9oLzikhPyeUuj71kT6k",
  "key34": "3b3WNxRs1vNY1SyreNf9EMNmYZUanpBXKXXUKQgV8wLtP7SVV9GcYKLoevky9euHgQkBFfG2vbmeFrMpjcEf6YW1",
  "key35": "3jbjLf26qqXCB1KRycsjx12ghp8BGtXXagFEyjGvysTqTHVaayT3MYB1H7kAc35UScWDpeBYcqcZJSJcWrDrWyrT"
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
