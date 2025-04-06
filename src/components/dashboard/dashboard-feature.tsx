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
    "5a71eEdvscx1iHGGNmusNu5rX5hXQ45WBfPAtRsg9gwNrQCQ44teMPnLEi7muoqDct8Apb2HqdXhe4AXdUqSfMxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDTAZwgmtAawQ57mwC71UxiNro7L1dqiL7oHLkjLtoTe9iamc6pQwG65z7UmUc2PzaFYpQA3hJEKrRqfoLKg7sd",
  "key1": "4jy156JbmYgFHQVE18NY8f9Cu6tCmied58fFHDwLp9zH5bt941kWbUsj2STFmHfFMQn8eD1H4MVyNAnD7HADZ9m1",
  "key2": "5qwSQdLKFaukwKGvgmoa8JRRLKA6DmE5MNX3Nqqfspd7Uded2VPQEC95gUpN4X1zP6WPXXPvYvkSL3fyMK1wgbmY",
  "key3": "5HUNi3T9f8jtirAaUiRJuHdrXNvHy7fYFToFqKL3ztCVgTXU6B6qU6E3EVDYSNDU9nzp8vh4LqXzYAbJNUTkaBCY",
  "key4": "3UA4JRxgXRyrMTyKRxSAivKeMGSjc33P2KkordTyFPA7a9vhoT8RZk8zWRWKhpmmAg38uahSzEYErdpMc3koPYE3",
  "key5": "3yjs367RGiN9rf9jVtm1R7hcPjUEiwYbH9SMEdYpj5LWHoThCRM8ta38eq5cv4UpYiCpc7JxXxFbfZjUcPxPNpRB",
  "key6": "3LKAiwD4zd2whgDC6LXDSSRPrjsL5GEhTB72Xkt4f53Ge859p8WkWRVm1jtAThwAVopFPMnRFxboVzTWMuQ5hvM4",
  "key7": "3aMfwdcSGuwCvWDC6YQggFpwJVmwF4XNkKU8hSJtguaoe82Dbvdc1nV2pv2yv4agdKoEu4sWtj2BgafEYn2G41B6",
  "key8": "4SjwcW61ovcmzSarszr6SqHiNnWZ8dd8xXjdYjko7SMvUYJNssgG8KYyZ1azSR2iXwybJc3jxDAwtwDF3EDpWvU6",
  "key9": "3mHDZVbyHz7w3LYQLa7T91sRRo6yT2EytNvDb1G2HR3B7e3wcFLH2gnRLRdvas6p8LELEXNQVTjR8TGhF5S51AFz",
  "key10": "u291J2z31GL3ZJAvRi9RQdijZLVhEHTH5BcZiSoNFziKcW3xtnBfQ4gZ1wgZXcAE4ozZk5A2sn7F8WWZGQb6Rqo",
  "key11": "3Wbi8TZ2G9U4cexwaNnHNJKSspSRYCPRHHeiy1SHkfkAHa68S2WkDfRDLSsPk4RFwsYYzxhXoyCwvdEKUCmmVxXV",
  "key12": "2HK16WrJNafV5MeKf2VhcdSYbgio9JnnLZXTJ5gbegAJbS4WVniAYE2uYNcW7CxyWQe6etpQXWksrgoyinbpZQrh",
  "key13": "3reuKNTF4w3RzLvknvJ53jUavPeZfj5nWG99852jFJYYrnxypVSjYpoEcyJwwaS6WrFTSEyVcQHKbBpKXgn4ZxGj",
  "key14": "2TpfDCYeDwdG7vx2dCpVkuC9oQeaX648bX2GprDq8rNEtioQJThpXfMLXiZGjGv7BqpSZmxZPu9HtrhNYXJeJx8a",
  "key15": "4rTZjMLLtfcDVM8BALBgms7JtwiCJV17phkDk4riAG2vk84eHfi5taYtPUcV4a32WytYB7sxSfwWkfK2Sv4BVyDo",
  "key16": "512Rq1zPqdaNE7ybmhJS3uUtiYyhvmRuatCEz3VrWGCo7i8jPxy2ZQZqFJ1A3z5L7vvmxA2vMrBMzcjF9n2bkGDF",
  "key17": "5eqBE6a3PpPo1KGDdxo4Kb5ooSDTCE9BKxiY1Tru9uxdAE2fHkPZAGCRkTSt3yYxeQifDZqg1QzNi4qR7X1ShCDA",
  "key18": "GpqaYgxt2iU2cqvh8D88RqCxigueVZy3yKuqcpS4zFowQSkEJs8LWex1icfemQMF4RRoh1DcMqDn2CiR5Srfvrq",
  "key19": "5b3BXm1mQY3uojBS1tcqWrEqPCLNVrpwn5yXxKoUpVohqNsiwaB9kaJm1mcY8L2NUtFAKug7KRSTEwhe8TQwsJwh",
  "key20": "24CkE7awUHecQVvpZLrutXECjUxiCyoJ3kArchfaK9Q8TV9yCd7negkc7967MW8ZKqW1xUbi89cyGpYpNtZqRrhg",
  "key21": "4S6YYE2DZUN9t827GaEppho4q7YyR26Zyp8qzqxqZWbBk94CwaEvsNxyjHsupmX3cHgcHSz1JrzrGKNFX4LUrT31",
  "key22": "4QswAGmkm6vwDdhpMj67e1eUdcSfNAgCPa5FANLnhYPRRas3gfRY4YruppvscSQwfd8sCRosheRzCncFBHgM6mrF",
  "key23": "3FLrh6pewkvR6fWG4B7qv3ZXMbwkVecLYAd7jVCVDQY8rwoJd7Yn2BXkz2Nhf9xGdwRRE4KsCEcWki3GfgBVn9mu",
  "key24": "4SxPDTyt1AgTPgGsU8BsTT7ipAuZKvjfVwjNLDpRiy3SNYJFZY2miK8rAo1VbcSJxK2ToATAypMnpJojQTaCe2Do",
  "key25": "5ZqzRCg8A9HK7RRWv9bXuyBtXvXe8qsVb5y6KZQVYRMEsP9haWA1bUHS8phU6b4TF7b5DRw1pszG6qiU9jqENr21",
  "key26": "3ht3KMwYAGfHBrEF62w1XtHgZcUi6hrgHRNVsmx3ZJFpcLe2pCNakcGxzceocp1bxW48QrGwGd41rQCjuGs7pMpZ"
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
