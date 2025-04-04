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
    "xkEe5gar1Pfh5VeKPkGXBcuPuQ9Bm12ghmk67mEzjo33GgdQmyYvj8AKChEStfuBdsEDZ2y1L3xE58fBrT8No79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ToMKSSauBnewdjfAw1rtNrVgJw5TupQY4gtebJZVKcM8nUmnu7MsAGAinTuVP6M29p43aHn3P7b64yCmcLy8ZxJ",
  "key1": "36L26qHi5EddbpTDuvUk82gX4YRCWDoGXHnNUQtuE4v1pT1eSoTkHbs6vyzJRycTk69R2GMtTtxMj4Uf62pkBsK",
  "key2": "rPBok3LoL3xBFcdSs5gtVVFtxKTZGy9KQkeQ6w8i9j6vzDLLyMi4ca1sjhSph8aCkEKUCHuci3YCNdwSLVdBbp8",
  "key3": "2jZX7rpMzEsBiSCs1NJxRaMTazXcpgqoRfR1pPFehDoKgVMdkuX4T9eHXXBES9XvJqYj64zuCTp9q9DVwyWChpae",
  "key4": "5CUrYj4MwJvXhtxEnsCFYTqwGLGz9TqVieSybtvzZBk7GxduqYhRQLmtbwdnNxwdX5kTF7wcJwhjbs5dEVSJ4SCH",
  "key5": "2AGeWNBuB6yapm8UiFeRK23CBkrPs22EnMY1Z42KYwW1KdKuyviNLkDtWzWdjcGcciAq6K6M9EEJA7TjHYwRCuLh",
  "key6": "5Fqfyy93mTRhe6bzWXGXgj3gsrqVFRf6pcjJB5bbKkxx8CqXeUFxMM7U26rV3VpVt74Tg3XkXia9R5BH4t2wrCdb",
  "key7": "eEMYDtoJ5emPK2JWmoxWiud6AxSqDoiVbG8unnr7XYsBNVdNjUAyYJQZekRaMf5pQXBV6XWauhLvu8YDsVD7mSB",
  "key8": "2iMb78jYFQb3SQidXa4m5W69WDQBFHADiEVduvxx4yEYphdi2DUpVJu18RcuqDjtajzFFZbdBbh19AZnCtvtvysR",
  "key9": "4HLv8x1xfHyaWHWQNaEAUrLgCcidpeAHpTs5EMxrGm4suz7MnPM1rpmqeZa4zts3KJC5ARQQmGVGhX6e7LY55kSt",
  "key10": "3LEpCPxXgm2x3R4qFyL3V397M3dj9ykBH7HCivzd7mUEH3L4LbTBYg9djsLeFsDqtmqouETAeVnRUh6AzBCNSo34",
  "key11": "3KYE3RiuE7g5yJKn2NCxwcYzRTCUQYtPoYe96vzdEnnBRB4bCGve7QRzDhJzBxn8tnrd9H8xuw3SXJJgCRRc545E",
  "key12": "54XmNsqgL2v6mfWwmsUz8ofhBQz1jBsM9GjRja81vTiSjzqPvR6PxPFQiQsC8Yrf1nitKgVoZndzAHPqQhqgP9Gd",
  "key13": "63rKywuVmCabkyaQFoU5bdGqAwvZkUNtfuCXjiDpefMAfLCzEUwsnP7Nn1mpBK3aUEEGq4gSwmcKbviyKrPEsY8E",
  "key14": "5DW1v1WwFzeZMcPTJDCdzgtw3Za4wYr9zVKXSXatQyk8SyrzTiMeL31yJxrTyjkyx36ocbQsRhbgs5rBtGyPefLq",
  "key15": "4EPXCPgEjhXBFLmuS46imVHsDq4dVGXgB5dxayUHBQWF489rCH9EmghTChFcZWwLpvswcHo3c1mF8kjVp7jawLWp",
  "key16": "5BRxqvEuVwVfGiVs3rznBRNEAwpAmREN9YGJ4r9RJx6QY3NUG4Q1orwybCvqdecrVa9bZQnaab9qnV923Te2tjub",
  "key17": "5ob4augezYKtJEs4LZiZZMSaPKkzWcBHaaszZJ83t8a411YPestDT2KHkDphTaPTfQLfaFA128F36M8AqeTmF434",
  "key18": "2V2gJkpy4dyFeakXG46ZhyFjd3usKe71HYovAzMSTpKbtDxa6gu9CX7oddGQQ9xAah122CRi11UtjBZumNZUERNu",
  "key19": "cqfggSXixi6RPYSNhpbNYpFeaVj4N657Yhpoxm26NjWJEHMJYFhbjwyRYSVVzJd22LkccRTNX8ayRAhW4zkZ3RG",
  "key20": "2P7CbaZkjgD4oxYz39i3eyj2ejKk311pNQbCmTGpmzGoALeiMBPxGCSXJYPVhn2yYGXPDjE8btfqbpsKuJBuf9VM",
  "key21": "4daDLo1TYVC9KxWNdM6otNhpyGs2VnvwjeRGTZ3EUYE659DWHMrePvxq1W5312aQK8m98eTMJWEpqLeuHaUmFeoK",
  "key22": "4upqppedr2qPAc1mEEgCrsV1uTR2wXrywtszN1SjyC5FrEXfo6oLLDXC96huNK4JDjYdSwgMEYygbiejcv4GFWHy",
  "key23": "2Mtp457rcWHRmPhx4KuBDeZEwopCaqam5XwnM5BHWHu6sagYpiBuEDdQzM8UvJz64gpKWNG24aNYM7YniMhXu1YY",
  "key24": "3ZeesYwU5ij193nVZ1v1KMa3BaGkVBfRhmssQpMn6e8D1BpQpCm3rFyYLsc5NCD2rgD2nwARy1RvWDkgfLYA4kud"
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
