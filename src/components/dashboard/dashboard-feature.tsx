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
    "58qxnPFLpmzcHGKBAWe8w8vsXtaBGfDBYL1zh6SjHzuP12AZG9StMxNDoM6ejXZ5riAkCsuVS9YLv9LZh8fuZDzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nokgFeWvpkbf3wJrVYrH93MQTdy2FzLxkn9c7kGzeHHjuqHhq8ca5G2ay3CqsfVZNgrgQryDJSwZCr9JF9wKfMd",
  "key1": "3bBtExRFtfSWeqwi5Kg7KY7pMCumtChGsFTFwW9qNHyzKwoGbnVLKfZaSdyu448tAJbJoykBr5YxYZQKj8QgnxDo",
  "key2": "cyDcTvhr3oJhf6zPHpauqd5PNb6oRRJftQWEmjJKFuA1ecaRkBNuhVow7xTtz9nd3AxgoyXVZ7SDFh9fwdp8YK5",
  "key3": "5KRCCyHxcw3m5G6EACarRXMKJzuYC1qLknh6N8tbjWHECJuyGBnDT71UEuzMyNgTcDdwSLepJHDrpe6AjS9558qd",
  "key4": "41D4Xi5Kwe4ZnAmRbL13dMzp8drpAGZkePKeGCPUGF1xZrREtnnCKVy2MCaPWKy4WUbRZu4Arg4Qy77gZveKgr1b",
  "key5": "277QwaDKCUv83e4HxMnQivKqfPsNaUXdeTWXPmwQc5RDtorz1j5b4gCjjsMAsX1YXYrkArjbZVe5rsf28jTbrgjf",
  "key6": "2oKB4Mco2pNGE46QWN6ZyzudeaoMfE9fGpTsuu5uAqG1z9pFikqDNuWCKR81usZuEVjjUDpeU8MtZRmC7K1zrWnZ",
  "key7": "3Qn8qMf5LCrb1MkVdLzc6kDJQgX76dXWTeq7cKNkLZCiTKsL9zmHAxR1Yy6ju2vFhG2PToU4NpKWtJxTyJDNxPNp",
  "key8": "UV2b4W565HEwPHgtKMLs1EfXAyaGoGTHXEevDEeZrcwb4Q6hKhJpHAfmQWaB5DZKrPtyFW2d3Wox3Qpd61K9eWu",
  "key9": "2SgBuFQYhSymvqN3PwQ2gBuhWDwSWpKSsyYnLEJeNTLr4fvy5D2JgdHm1pENPw8YxDYgjLqs1h4GjNkN2cuLwFYd",
  "key10": "GQPffVvZByPuWGUTVTaobZbAhUaTTFXxy1Wm3J743Mzs2gcReBpRDoiVGwhQyRM6KUF93ctG5AiZR74mKc2ULBG",
  "key11": "3f6jio9RNt29orXYj2oAH2Kr37JFuDu2mVfAehRC1ZhHivQnrexxcqXDtSjUk4JoJdSanFBN1eczmbzoQShMbxkY",
  "key12": "pRWjAK19iH8x9HvNC3uRxEfvGbQvr4hKax3bErZq44PF2i3VNEzyKscFQc3qDke5PmPqZzWTzgNz9FSztKHRe2q",
  "key13": "4848CyegDA5H5ZPbyv3qeWKu2iqfbm5AQEHb4oYFLSh4j8Tvnt1ZGsXRpTUWi5X4KydrW1WP3mYCHBuqf7qCLUN",
  "key14": "5hdzKYJvyNQjQ6iax22AHkdD9PubkYkmY7WmBoG86rfvjGukDU319oT6UnjpiZPSdEVdJf5X72oHHHrf2Xw3eaGr",
  "key15": "pmbg37A6nEFsCyDwA9Z7shJECAvsn2DRmFywy5fUYtUrAJKpGWWhbFwHpXrEALTjfL71cJ9p4eHJLhCGD9or2ub",
  "key16": "2jQ5T1cZAUVxkthJ1ky9TPt8c4myukfm2aPWH9CX8EkR873WKfmYFxZdAHx66Z6tyzQTsATbs2LhLJffz9HPj2r1",
  "key17": "5LRpd7nQDVpPqUFFz1GB67xfAihRhe7BXF2xKpuxdJc91rd2okWTQ2c1agUGsaJWFLnMGmSXuKBqpzUbXTSvkY9c",
  "key18": "2cHMfv4aFz9uuhf2mzUf92ViidzjFurHcm8NNw4784v8v9dS3vaLsSTp46ySH9i69gwmQM5qwe8rEejJ9EdHTskv",
  "key19": "5ajST6QgNUj3Z7pewpNiAYK496SGNrjMk2Y1Voa7aKrpqYCFBR88D9TRRopnzDLQ1UhKMGXrSz3YdxataxCn4DBB",
  "key20": "Nt4MW1TYnY8X5ekBG7FYbBAdUz6wMBw77JMU86GTJ9etbCfJRbryw86RnN4hMfzN2MuVvzGASXrknx14MiRZUsS",
  "key21": "zFrPMJJPmDLjAd7EDDa5g4hfxNV4mmu7b76Wohc9PSs965Mcr47hEpekUK4LjfnRc9Z1vj54U9784RbTWzp5PVH",
  "key22": "oTxBjmjhwVMen8XGKZp2H9kxqmCgPP34fTQp5qUAFgi43DaeNiti65N4jNvmYrv8NPdf6vhZGSZL3j91JKaRotZ",
  "key23": "4w3XqXemsYvPbRfQzRR55Y2nmz7BDssahFApviPUoC4JqJWSjyK7opVfSTsGyFDUFzyPsiuwZhqfMRS1F8qYn6zm",
  "key24": "5GNZunsCbLVL2wTRaAUnWdQA26xbCPjN75BLU3PGofgNz5VB4h68bTnwpHx3G7qtNvxCYoHPVVC9vn6X8AUNFyTn",
  "key25": "4qkDxMgEMP497Qnofh5sptQaAsoysSQzi9g7WuTbJGwzyUXARUQu26T3vbstbi1VvDaGJxRCHSUh1C9N6kuYB1SK",
  "key26": "4tFtEuq5JJcnFVRutpV8Ka6tM61MhuEs9ePn1sRHUEKYe6sCv2JjR9J5F3r7M9kdtUanxjXVFm4b9cLyBKths78i",
  "key27": "663NwsE9Rx4eqnP4twJiprgeixmskzr4SZpnefCRuBP5NM98Uw9QZQ24DxakWf4fGFsiABsMGxkK4TbSHjLFRGLt",
  "key28": "dxE6R28JdEcwjog5AxNkoF9qycjzP1MaTdBtS1yDouawVYt7Mboo9zL6fqXiA7YM6qVWaps7APLdCN2orxeRChX",
  "key29": "5EucFf8VfqUyaYM19uhxk7EoGkhwfgJjVEeJzZHcXki2gvz5sZ9Ke9h3NurLHt8b8G4abeYyFr5Wq18WWer7miT1",
  "key30": "4oX3kPRoApTQMD4ZYvDoptpph9JqKyLvcx3ZPsa7sWswVFk76pCSzhDGJrkDxcupvFaKys24vxGwVrJx7CLEyHWS",
  "key31": "2xjaxm1YZ19FeZZMdSN95pqduqaeBMQsR4vA4iqGCWAom1TBantP8Dhs3KBWhEVKaEWbMLnbKUS5gbaN4T1KvXqN"
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
