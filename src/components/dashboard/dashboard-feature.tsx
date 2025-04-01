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
    "dY6HV4SNpzoYaNsniQ8evHHdX6KUgr7BDCw3KT6BqrTYJV2fk2G4TZZ9cD6nVftQJdRX8ro272XFfSNm4AH8X4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wY2RVGYwBVq8WhrXQZUMrHoN2iLXQ1XdnFN8jMwLBs7GMXLLpNYVsrhRyJ9A6BWfejRoUWzveRRTLDkmewJujdZ",
  "key1": "4gxULqBzToJF8edV8fqz3qrDo75PCGYEo3ABbTUCxYN3fw4nWdCPSDQDisFbHnrYHD7t7Nc1WZGi7PTPNp4xFJmB",
  "key2": "47NMUGfi5zYFYWu4qTB7JiUVBQRYNx9zULLCY349Thib5d2kdob3u9wBD5zmBt2WkeLKUoVwxAsbR8qpYQFr8HBE",
  "key3": "38nYWBJWYvdZXh9irqv4dcb3Xq3j19ZMGkdUafxg91ncX3qtHGFWk2KFd96wFyACjQiKjJii2iG7SANKWdp1UFyF",
  "key4": "4sHHrw2yCkuKRVzrcgh9PYdjyTW7CHLg4yHRTt6tkoBi19SgCTVqQ22nK4FHoRSH6kczaL9aT4Toq7MMagYUjUr9",
  "key5": "3EtdeKk7fcLdKCqn6kVexKwm1FkVZpanme1AD2xg1rjv9UpPGRo5gWwzFoADJjShoMgtupnMPv7x5DWVj2PvAMk7",
  "key6": "4Paz1XSFwhThGP4Fo1nFUVUJTdtGkod47VDApdWGqH5efTuw33isz3rd438pjAjG3DXWq9RbnskmLSxgBShxEa9P",
  "key7": "4Rx2QUGCaYGRzS4a24kvEnD9DfihMwNZkvyoe1pBTASQbCanuxPrmHHY4zj6VJck2WhLHCxRY9yDjNuMtSnHGByR",
  "key8": "64WE7ZZWyye1qtyrWakqdZDnV3uPgb2ji51JomTCm6Qctp5sAEJsZEPgcLFqKnuJLhez1WMkAaQXfg6kLQR588DJ",
  "key9": "2wtKGLjMy3zEWdS7T8o7dRsyxeN6X7jqvFXngKWwwMBrm3Gg4NGHJL3cTBfsV7PLHQhM3FZJ81T521zLuPkPdtuP",
  "key10": "4wZmPexezBNTincPjRhDhiaNC2cif9zfzfkrySbEFG3qo5Wsjr5hP6ridDrC6BMekvaS7U5wK6jPgVWGibqRvhJv",
  "key11": "5bHRTevJArie1vXKVrYMoYsmFAE78hBeM11jCDg1g9EgXTGZ3NnPwQfx67rnKTs5XQwg1okYyNwVbUdQjb7YPqtt",
  "key12": "27B83KJukPQM9emYeyM2EGnGTTBY9dM1jbXGV92RHVfryKSHTkwnSzVomqscL4zrWHiUu4bi1pBE9k8cV9ikVno9",
  "key13": "3n4FfpM5ZUrQB4LDnbC1CXsN3NbT8jNwmgyiBMGXaY1fLLX7K46hnZs2Xk3cC2cuYuPEhVgaqo5WgbGX3PEJgrZ8",
  "key14": "3AudnE6hphqxGceopdKHj3C3pubkiTx2tKmZp2nSCchKkHxWAgvjX8rPV3yxdFbZikYPBXCz6XMyzBjpnQRssSq7",
  "key15": "3fCGceBopGQmnwKYhmGMpJsdw1cUMp5Ytgcog4KUqc3jhziWCWeqFpZdNVniw9zaEps7VKntLHUaHrdhPkfhCXD3",
  "key16": "5PX6U6zdt1Rmm82oXi6cTQpkhgiJ6D5VqXPXej1mMSvD31esEt8M5dvPSkYBME2bUpACyb4seTmvrfs2RXeKEExo",
  "key17": "NxJUv3LSd1AuDE7jwwfBEeLiU4D6JG7FHDi7AgskPGdtCnto8afdRTFfxq23R8NcqGxYjW8xnFFoPV5fhmppjFo",
  "key18": "3HnPS6vpf7pYRfBf6L8LZ1jnghzZDzv2h52j2YhFirkjo25tRtShE6iDQhbxuhs1rnRTZFXr3Pawh4Raw5m3ocCe",
  "key19": "5r8ix1aok157isEvKoBm486WfNoS8nHoK2TeDuJ4W3sYayMXDARReAgoB744y8FPPFoQ9dDHLTkdhZMhSCfydcca",
  "key20": "38WjdReAtBNraVPbcuL33xTre4WeowE9Ac4L1yUummnmZXMQZ2TZwQrWXuAD3uUFxxaA15A2naDf2WEP5TyGjVXS",
  "key21": "3thSdt8Hiys1rDo1yGS51nQYvjoqykArt9vgDs484ehQTLCXALckD99QdRedkgkhjCSCEoSHXTm72kgwPSTU2jvm",
  "key22": "4aGramrLTUhqJUjVdM4D6FvgXEFTXw18nYdCFTBTXNr93zXerMhhPjE62AeffJ3jHuHzYf5tBpeF1qWkqqgiJqTV",
  "key23": "5kcBqS2hCz5sa2bEJjVGpKsZaoF7LNbfNXi1vo5isBK9TYE4Dz3Mcd6hnyYnNGMn83wBKAVqh7uGNKwjmgx4nMj2",
  "key24": "3NNeABuMmJkM3SkkUvLY23wZTEeLNzc8tXWVbMWXaErHjLK7ZAgfCMJ8vvwnTbgFwfW9UTPPFdDGfzZbCFr4s7GT",
  "key25": "4v38eTQA4ixXvEEXhRLn4zkTzH8YEn4iBqjkCJmmu7Zcd3GmKMpo1DsAAkNt4sq8yBp1pChPtk7QfnLGhLDZ61mY",
  "key26": "iFH5bYMxoJ5LisGxTyCy2ewZQHaPWt4zKw4Xk1efSog1hyY5Ve3CWrs7vk6Kve4MhtQLJq7fCAjj1TTcDenUCxn",
  "key27": "4uP3TFePD5JK88jja4poREyP2Q3oyUF45LomchEX7D9y3h3pdNq8XeTbfxD2AwQppd8s13TLdhqER3ykf5vrMUnc"
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
