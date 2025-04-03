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
    "2SFurDjEDU5GSx6zTE3spy6MFzzGFHEynKdmrPvSTwx9ZHW4hyhmMJHzhwuaoT7Hnppok9j8hVGyceWiQoYihZaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TP835vVpwxRZoRqvSB37xoYwb2KcBsUXk6JchSdpF5DoVCp1SEpMtFwFUmpAqSqaNMnayeJvVMSj5qf4GvAhzYw",
  "key1": "24wUXE2jf4oxDntw6PDnLEnvXg4KyWDsQN2tTBvWpkxbpsR8oFtHtst92Rkyq9jT3zB3gaiaJQSAx3Ck3YcMEdbG",
  "key2": "4gpMMQVZf4rW4ZAASuB6JCxGvZXPsgCXVaUJuvXxcpfwLAv3R9R5fs4EyrLhYFEWxUUdjm7fVnn4oHrdQYaLuY1N",
  "key3": "66kSjXehW61LYNsR8PunncKufi5zePw5sLirq6fpZkiMyvcMFtLJwRXP98jqGiJJE2wZsKNobiLUidaCNwxX1A6B",
  "key4": "3nDkLpUEYKvvpRnVAtqqqMfuEZkvbkE1kiDHSaY26CYZxn6uPMBQSJxbB7vWDrevkYazQEwm3NWcwkzNCkgxXZaq",
  "key5": "3RYQ158VYMRGNLMj5SCYyqk8yg7AeGzNn97BsUJeWZq7iebTmZbxTQvu4ByhpfXWR5dBAJ85bjwTCMbXYsrN4Mef",
  "key6": "59y5N6DJdBgkxMdejTPFKHBwRVXS7FKwJ4eY6Xw8vk1G953pv3ZnLa465mJ1n11ndmi4PXg5bUPN22zFnnGJs7Qk",
  "key7": "3eMdKK6YiVQhwJCvz9KhGNgsvZVGiJkgi3PcSD7V3Uq9qkLd1KgaymHYSoG3Q1UdXrM6F2dpaWKPGtNjtq6a32AU",
  "key8": "4Gj36ZDxnBm6ZhsJ3hdWx9ZJ3ZcxussMqa6axKbtNLtqaCEU862PEqmv2P4CrRKmjr7JVR5cyb3oo5CqLPJsVKQh",
  "key9": "4bazstQ3oJfJqxyJ5EQB3YJenZtdon1U4NuePmKuzf4QjrBBTpoV33siTy16p8SCG1vzTTYq8Np346SL34tk4evi",
  "key10": "4XvffSi47ToLxEFi6y9JwX2zpWos98dJ29gmgTX76kqE65kPLQAvWTCUGgi3Nb3At9TfG7AcYut8PFR2VHwnTMKe",
  "key11": "61DwdMRfdnwggSFnqUV2BAxbRq88FUSmFBhRQkerNSdEKsqEgtCrB7yovCxJwquwypNZ27Zwv58hthaTpzqdH5n4",
  "key12": "26Fjr5YWCMk81K1aUjveqx39hKpcnvDm7Pze7Wyt6dKVgb2oPy85cC2Acduk5pvepS7opb9QHYJHD2fyx6sLkmab",
  "key13": "4QWPE8pxcMW35Gm7mVWoQStibRgNAwF2WZWXm4DW272mGdgMd5shE76fVgTgeWEg2esdNs7kXozHAhfnCZNeuQTH",
  "key14": "5aYDnyPY7SyNvrmNSu7zppVzVSn12hpEbYCCSQ9bSNsWFj82276UE4Ku4EEe45sRgrX4CcGLDB7y2v3evuLcxpca",
  "key15": "44xcbqxiuZSLXeVnVexpavCLFS8EHWXFuTuLUiJigFv2Dzdno69fasjmQcs3R459N91Vf9AYdnzAe9LpXNyMcJfp",
  "key16": "3pkJTYrRSqSka4FqQjXE12aPzruaSGMN4GMxYKzqcV3c5VmEw44bVGGWsKfm6QzgT474ZA5oZd9uzjBtNHau2Sqr",
  "key17": "57XxHMJZu3GL2mWK6BjDyAxGVC4GsdvgepvXDo3ST1BAun5FWRdfhxHMSC7vF6gFvN54pJNNQQe27KNdcwdKhEYx",
  "key18": "61rjLWxDjyi92NDDMft7cAUmr71hZJF4Bu75YUnb86kQ1MLiMtXCdbsW9cQWoJjBrxvGHvpaH7J4SufxL8dK5rof",
  "key19": "2PfYoZoWFvkTN7MSbeLxWoND7snowbzeYFsRZ4ZHwRWuRLqtSyXYCzj8f2BgK98pVPQpwkWBmTVtc6bpFYkftQ96",
  "key20": "5P32PQLThQ17V2tKWT2ceD52TgPCet2hZuC9n9kMnV5JSoRrunxyYL5C2BWJdKq3ubbsgwkDExB2w33cGPdmiQJ3",
  "key21": "Juragto2rxrnuaJjKajB13KGHhWmTUHkWxbA4mSUrmodBMLLaL2CExS2wctddMhzJjXMt1bej9Y36MutQTpZb8C",
  "key22": "PLTt3TiLE9SySgCNeKDeYASd2tivhUxZv41akstUj1ju9ZnBAyJwEDqamySxJeoeU5pkP9duoEVMoAZ9oreSd9y",
  "key23": "3NCdBB7E22ygHykMsX21WUtg7g8XPqZ4MF4rtz3kRmLWqdJAMS5C8Gd5SRFieJ7rooCZ2keHukgnRaCfhz7YUeoY",
  "key24": "4hPWsLmK1WfrZmn5LgGkNWG8ETebjWxYHgA2wGRFJ9pEy7vSvtmeKjPDe2CU8Du9TFYFnLbyCMmAQsokKZokeLch",
  "key25": "2W3tdCyBcQU9ALPCWi7KLsBJ4JPRMD8qqj97Kedz7Knz6877fiPYJy5RarF1pQGzaRyQE17StaC7mDkRfokGuN4f"
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
