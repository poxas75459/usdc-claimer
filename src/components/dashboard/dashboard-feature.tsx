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
    "4jnpmJX8FEsKFBPytmwk4XvAULFEsaHgCgoizoLLHpiNTLeqLUr5eu18U2nRhreSy5cYU4Ld787dAj962WLdxkks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNHX3CtumZspcDxKXGb43L5cwUAShzGUkEQuzQ2rG3PK7FQJEbHxQepN88EXvkmQqNmzCMezUaQrCtP8LndYj7A",
  "key1": "2GxbLLLv3Y4QCB4iBYKPzAZrGfnxSk2aXTErbPdYMLV82BJKJgoaHh6PsPvNqGnHJpmSnoNAR9uc1Sw39L9763PD",
  "key2": "VNkJBMs7mjsoEp5HT8KeDLwt2CTUuRcebqyZVXFthzkbeduiiqCPZkSuG5XaQji7t9gDKrMPG7ytSiiPMZapHfb",
  "key3": "3nVZWko1nUG6NKPQ7kirzxWnhtFq9FzQSmT1CsDZNeAmNdUJGBv76mwCAv91Q5qGYZhu7ek9zEdQsjsAeVmoiLK2",
  "key4": "2EYx12dN118dEAc5YFL8nmjPJSuddfMcQmGu66MhovTW8f3J4XvMvEwFPbu88rfrn9XbRRMUWECP7qUjVW3XtAUe",
  "key5": "2RRRRebWN3MM6cgEXCxFuSdSMJsfB2TBSgA6cYLoPPo6nE4wvJvUwg2c3fTBUp8UNgrJsqYgQvGyiKcjTBpeQ4sL",
  "key6": "3GxrEmYLVqD3epkmJ6Ux9o2brwGeeEBB4V3wBC1ugr1jm2pDib72yhZA8mRCtwRtCzZhx6BRx8TjQ2ogkH3gBd5b",
  "key7": "e2kzpbbbpAU9vhqRaoZLpWgwN224xjei6vkVxBB9MXCCUkz16Qwq5s5jTeQnkHU5Bw5LaPad9yoX22UxmPT8x11",
  "key8": "935XUD6hdAjMRzjcLse6FYdFqHVBJXzZGLxXS9owbk3fiB2wSQkrzwsPjhfs3EkqBikRupdzK7cFtr16pWFE4ZK",
  "key9": "5FAWpXixbLzZHK7pCt83HoaTJSfz3CJBjTuocPvpsjPrK4EnaxjNmUbCX7bGwQQtDZSmy3vLhXQSmT1rXzeMzGcn",
  "key10": "ickERJr9yKxFc6xZKWa2fmHxk9VEqG8gatpZ216SAHSkebs5SE6rZGPDDgkokRQtVsQMxjPTD6QYUpcPEex7eUw",
  "key11": "3h4NmRYpETGL1M3nXmp6mPPkiCRuuERRf7H6wPdBWchXH5qrXJEJwHKUWDXZCY1FiE7Yms23eFKa8xKVf2umUx2K",
  "key12": "65YanXqpoB8zUuW2eCVh62E7f9m5zeEke3LdCtgcFpFcmYPiuzHJs87Zr9WEkMsxFKnrY7b4ddBV7MEz3qdUjUmY",
  "key13": "2vqTLU6ELrNznS3zwncJ1NYiAaXBAhssJs7bmxDwW5vh7UFNgWSBzJ8jMBQ1Aw3BqRcoumubJKaCzsLYzATi89HX",
  "key14": "3ggBgj4pPcHekTUeRkaUUQ5LPjBC2skZsqV2DsRjUUJpNTikerWwb6PW5Rjjckkb2p3CjSocvmYTCuEDAoLQp3e5",
  "key15": "3iaM9xbJZnXSNSze8KMDmJcuVGaaky7XXbBmnjqrTzhzQyQgu89sNPECXN1FRSufYTAkXQ8s3w5j9rgJDP8cMSxk",
  "key16": "3LA37teaiRBKTMyx5iNnnEPrXCXPH5jrUiLaeDoyPZ8RVhYNmzVsuUAmVwJDaDFFL3QW23XMzdmVy57cgqPpqZxn",
  "key17": "5AfMDdTJzcGdp3rE3nw8FxaJLNEfJ4Qae3LC1vjdp2Wv3vjXYS1KJvTKc8jHQFHqMH5UmWAGuQQK6j1jKt8YH8Tc",
  "key18": "oy8YeCtmsgrw1XN2LTshKztfaFMvogrvakq9tfh7BQRG6mxjaLJuD5qEMftpuLYoBKzYUj3nr8xAyfDVCSoHQ2p",
  "key19": "4dmmbmhADTyFcZkiQmEWGbqzTmx58tR9Uz3sYzvSnvZiSDiNCcTLXpPsVBQdkjt1S52wCKna3ruRxYfSmhzn7mV8",
  "key20": "3qDEoNiKjKbw4983ne2hHZUo1YUncfd16H93g5kwA2Y3bCYnFEzy676Cr7zVNPwacrKJWbd7D37WSWwc1fWQ6goL",
  "key21": "61ERgfYG6rbjfv7G7WYoHsxDUriDMxxgjcfsrjuGXJdfnosT6i6e9w4wB3ssL52jWS6DmPT1FJZvaygTEEeRppXA",
  "key22": "5wG9fDLnpExakRSzbNKN7Tgx8YBE2VSwJvWB4JD9F8WjM6rQEh19BZoxvddDCrykgfpgScXffw1vghDeF56nw3ZS",
  "key23": "5fU5Y64yDHkXPjzft8MGx7wqqA1yr8UkNEoFMrimD46xmseoDbV3wTcWxUVpMW6jGLDswVCZTtQBXSduGY6U1uvr",
  "key24": "3GQ5Lx2M5yeNVbzWsj92KhEt33mKzT9P6NjcfW3VWm7Mwo9yG5yoxSCEF7ccui5MV6PsKQd5TPS5DVvsYtan9wkT",
  "key25": "3CXqsP857f57RkESQqebGK6uFERfCRBjLXBX7PgsZNnT2RpttTJujj18CKSP7EjfrLYiKcQ1q6zakrefNRVyQLH4",
  "key26": "4V1Kyt3d7Lg2tEhKubQPuoRMMq84vThrvaV4x6U413gewY2sLB8Lyk98Vjjft8FsCPLPaUMA133fiZDMpezwCMQp",
  "key27": "ZMRPKurgEEp6h8usr5QjRihiAex2tTE4GTEB7twAcGuQdqCuhXAwsR4jjws1hQSYLHoz8ztVwJFBXZAdAsHSrmn",
  "key28": "3A1tKKC3ugb8qM9sCsEeyXWK6AxyqMJ8GJrnSwsmSZCpkE3DR2ib1GAQdJNVpubgqDmwvNFishfMcpewhVBoXZnD",
  "key29": "2zvK8P7ZR9ozsGJfqNiWRKQdVebBFWMo8KnszhDnfSfSZD3XiQoJLsTHmeSJ6NaMJ52ajja3Md3M5ThiMPGU3xNu",
  "key30": "5FBeA6ebt5yjSft1VyUhAtiesEuquVvWVeanX4yCW3U129D7tu62HinFn9biLLCDhjnHKBqd7HR9nxzZq4vojSJU",
  "key31": "4k2jG9jYycdjN2P1uCzdBhMcyD4dRNADXHYXLb9t87ULS5fp1PTtsAZ3EbqUngNTbP7gWwdX52F5584L8B4wTxcW",
  "key32": "2yYGdaPTqvajKLGft2n67dGgDuVqmdsRJagTjTcLkmPzfzediscvXH2F3dNRrntPLJkkPiFNBdeUbTP7GuawHFiR",
  "key33": "5iWckBxMcB9PUF3zBLCFMyciXFdU4ffcKxN29G3YbmQbHh4fnXXtPm9DSfYSBnm1XmfbKjg6zBHRfqvL5Xey1udt",
  "key34": "hUxQiEGbLrt3zseH1j5YhNMDA3TchBJoqdWjB9L4bKPLPBazBbejhFys4Bo1QnnTHx62PtPZMgcPA3Yur7NTdSd"
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
