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
    "4a3T4oHFrKmfs7kEYFNeZAhvuC4N5Uoh9UGan2HW2BExtuqDN2cmz9W93S93Q7GWnMUMyrjrQe544KruUJD6vyCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozvyusnBNXzr5KSm9CbeVFM3sPmp9T5hdfmfC9hwvfZdpR9TrNrjcfqxAti7HQHiFkaTdu9hxAVQsR1CsHg5P4h",
  "key1": "51rZQbh6UFRdRYe2wCoqVE9p7oz6xVUFL42R2GA5q7vidqcyNGWwy2md86pFPXZmGQbxJ7KVk7kQb3vLZe7yACiQ",
  "key2": "5HSp7QwXKkWRWSxSJQmvw2nHh282Wqs8br6HKF6e6YJ6cCgDLSQwUMCXk8PBamxWLXh65kTZRYUc8fDWzhNAidAM",
  "key3": "jgqz18kYdWLmDaWNy6CWZnBVdUCaSRVRWLGmM4WsXsFcnHSYZaVnxYzig6RzJiN8ef9YmsoHvynSoWnswfS37Kf",
  "key4": "4An73aWntrKcfwhXUjqqKVwFtB7cVd8C9JrBs6ys9b2fvggBXqUUS2PXytbB8bbAmmHnSM4FuQ5TnjiWTBGh8zPX",
  "key5": "5NTx3RuLARncruD1kdUDSoNpsy4iB8swWFGEYkJGZe2yxRZivVLKaE6zD8sftPMv2AR42CuWV5E3PyHRwxQyanmT",
  "key6": "2eMAe7iNBSDcFuyEaKXP7DQG84cXLdzdgyNLByRvC25c7LmpdsEKFztrvA67mtfSJpyct4SYQP1fDZ81wVJ6EqFf",
  "key7": "2wRFwo4JjTsB717WAMavpowq2RGjBYz7H5wQz4C2fskhYTn9Z5rdiVGMBETSYFCdkiHbfJQJC2NA8qABPUVvJi1f",
  "key8": "2jjieWpfd9Svf2qVxAYSUjaSwcZ4gYBMpiCGGAFToHwK6BETNjMyyEfieCyorw4byXhC8wAJVo3f7VgjMSfBrysA",
  "key9": "5sVSF2kccmQzuhsrodkRCjvjeSh25sAkjpKvtvMUAacA518CT8P4zVzDsU8jAFN2wVrQTfVnQfwUDSGuASf21UqD",
  "key10": "3DY4vvMuzvxGB5XoHQFJrUr8MhNdY38BPbv8V8R8oiRo6kDs7bmPEWbLEEtdoWLaWSCLG56GgS2TuyXJmZEnGX8W",
  "key11": "5C8ZZbgdRm1DxJKwhiYFABhA3N7Aaxwm3CsLdWMXcRARXffDnSLUfUuNdiQTk1GeQRBw9Cp3Ua4ekiEhfeGCcoBM",
  "key12": "4uHxDtQWGT7kqenWzRZhbZtG9CWWozCYVLaQFWxPRwvJYUFBPCXFmQh8WUqBz2owb7hyx8vVr1VtPUwJfuLf1cLT",
  "key13": "2RSRHWpA7UA6uLt8Hvg6dRGrqMuCNzr1mQZkM3Tvv5VWyWMUZfW1FkSNjjetuMbV2nPSeqwNff5pPf83aLE916Tq",
  "key14": "4qSRK2x1AdVr8oAceHP8QfG8P7reHzLwZjbbmZGZopQUDcTpjik5Rcw23y3QvNsdq6MezVNxvAN1peJQ3iZTxpBp",
  "key15": "5AwjMVrFazdHyttgAWr5LieK4b3PtfVzcJxwZZvkuwpfPiRMgxJ7Y4JgRSJSVmjhHXvMqA4b3B4Rk94cQJx6hwJ9",
  "key16": "4MMSjYBJNxNPbDEzitMqvi687bz9h3Xquv1QWgQy6bX6Ug6Mb98uubrmxKB1xDgi7Q5opo6QXyVcMYTKsG5bBK5p",
  "key17": "5g4FPrg6okT2V9BAUcvkcHKBKkq5GhR9dkVUdYEnhfX6YnoXH6Somc5T9Ke9PJ1enekgNT6ZRWo4TdGEPXHCGgNv",
  "key18": "38eedVyNWov4pKhsvyN77xBETvBu9hmqLDsMK2k8S7aTLp3XJdTxeGeGrsvzPhczQziy7YcfCMDK9iGREYPas23z",
  "key19": "6L1EED5vxPsWgQ45TojhX8LPdeBRLctWT28wxuhHRpzQvJBrVP9qLgtvC8HyQexRiWCgaTWUvGqtfeahtB8Vgkn",
  "key20": "5q7BRtnSM6Pnd3sfD5KJGEAjycpsSTCz3yHqBZyZv3NXHjNBK1JjtmC5DRXGzZYLBX8Mv6PkQSByZMoF2GrgSxoN",
  "key21": "3gH4GZVpPiaC4TjV99uYBxQnSujFhy2Zc8SzK4nH1JAqVda3kVceV8BZaddQwdWNCoVQpSA2uo46ZNJFdG9ceoiw",
  "key22": "3B2fUUx6QNEUmufipHrDy5tBXEiAPwM4M6HLbVpiWottA86dHzzjZYqBoPvVthRzipiHjp8KbzvFCBZ8886T4Vu4",
  "key23": "5Q56S4DgFHnmspNdZbZ2ExF4wDT6ypYhhJqtGAdchH2op6D3apBXpVVgSnVS9XTogusAM6SXut16D8m5Vr1By3Uv",
  "key24": "5TfBWhP5AiKXX6uJFA7Mp1LawK3CsKG9qaS4EqRBUrFRMSezqywhoMr6oXZx8qR4mhpVvwbj8U75wRRK2dhJ4KSY"
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
