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
    "63ZywRtYGVJRTnGRW8BTWgveAxTkaYEe89z8PRoUjV22QKMqoq5Aoo75Rde7vJFGG4Q6AsEmoTKHrSa7USWTpKDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qJvJ22iFYSUpidTHBkey6hF7iqmPJjTF48mrp4TuvQCfPcS4oM1Wb2WMPFZpjsNkzA1kX3erR9xNPEXVvpThPU",
  "key1": "51hXHMp8SygK2CzyRUfCSFkLM9MAaLrMWKovCDH4857QTy2Pc5chcmfiUnfp1yht5493stfX5zsVxXfBwVTCFb7e",
  "key2": "3UZnf9LYFJZmcRfJrBZm95a9ENqXnzNAj2V2BJZUc9j9amhdPHvzhjND4UteYifExwqshgtu6MfTYRF6NkidPYj9",
  "key3": "pZQJQzm8gEozruJmLz4TLPSKC45Chb5Q8ZLNhhy3hQo2Ns29xwrsyRYqHpxStEXDJjMvEh6v6ZMeHAU1rYUT5ds",
  "key4": "RL7v6GWLc2HLFCFFvAu71Htsno9D5FiEVuVrf94qYd5A3CmsVckUkniCwkfydWh5koKjJcyF4LatxCqCNQc6GBz",
  "key5": "2fZ7i16tTWajUzVcyMV8hwMDH1AeXkC7YV8Mt5eHJibyTrwG5XzuEHZDbbZHNcXhFzihY1jmBtvFucihGDekDDNq",
  "key6": "DP3G6q8J7sTXBYBcPE5m6mYuwbcTA9hatA4sDVG2GKYW51vgszhJZodXMFS1gDoCXEXkAZPF4JzpS3LtB2Zmaw2",
  "key7": "21nkU9nTB1asxKKzVfoAQUaZ98KkaJVjJxpjus68u5skuPcHysUJ9phpAXsoRSyDh8jQBoGS9Yjx3Hc99TaFgeUj",
  "key8": "4jLDjRHviJmwjmdz9y8K753e3yzh5EYsL2DMeoi8EEv5mUgFnkm8YfracyBWCynLLqBRnkFNMUvacpebdt2k639v",
  "key9": "2g9fPycYVkm4LPduNRJhkBBV1eH7jWEYLhjF1Uu3tey9jVea9RS7KvyWv5s7b1Aano95YH1xGotvCuXxXFxHBSAZ",
  "key10": "4X9F5shUqmrKNZqEX7379kNgzE8YgJCj5u1arbDMST41LZ1MJRxw6zkhdU8pMZ1tjfRT8VeKYz1hrtnGMcMzc4gT",
  "key11": "3SdWwJcurtrngmSuDAuKTiaKTqcJZzNMGUmj2CAEBeUMiYTrdz1JhD5Aws1R6vbm13H4aE85QHw8bvmvXkz9vf6H",
  "key12": "4icrZs75eZjkDdX5KuTJmBckZBgn8MQunRwyYE8zCcPHJQoursXXYqVmJUtPfd9ANHZjeVoaFertvJ3KAKSprJ7P",
  "key13": "276erkEJUWqhE4Q2a64VwFEGqDP2AkzLsa6TbyqJNGUYmQ2h4vKcdiu5XfTWq15tPXnJgZrredyB4dqcPrE4maoB",
  "key14": "5sYmqXhF3YgTpkvPHCRvKzEebBdNXHL4Vx2gUK2pCVcBFYYwz8sbLwZVW4YJvCBAeEYSDCZ64Tf5G2GJL2UBDuQv",
  "key15": "4M4PMJPCatMo3oBo97raFGLtV4TbBuHtNTEdWRW3AeL3cf12JUMz8AqcoLzphFkaBxbhbsnQGZW49HKabCYbzkxC",
  "key16": "3BsQXkP2nb2CTzWufJ2Cgrwt8N35EX42wFNbUDTzcbxwzuDXUe5siK7dzGbhS1SbMbwHCdZXZaxTRBxqXdxAXgG",
  "key17": "2sxEWa2yKJW3oNT3JBtKw7EigKv67jasLj3JU1fe6X7S84CQRTXgUsta1Kjn8TGR6cUoMgSW86m1q3RAm53XEYr1",
  "key18": "5E5JGcDFSWmryMBXV8PSHnQUZGBHtrJvnMMbiT1S3jEYkgzeBjrHVxLfzXPaLJVzHDjMuFiqyg2qM8MMJVG3oj2d",
  "key19": "esSofDCjcd4equHpdq4qh66ZwLNFJZrndu61YPaPaDeNqut3iaaM1NqY7DvgoYSfFkqHMZtyygSmo32P9ebayhE",
  "key20": "soQHs8oMddEHWdAyyL6oMCdfFRXJVa1wZENGxvDL7h8em96mP3uRxLPr43j3YYz8dQVq7TZQYFrZ6p5kVDxHkqf",
  "key21": "2i1Kz3AtvgbdwGFscQPwA2PPtZL9yiaPTK1o6MAPXrwW9DyAaDGQV4wipV6YsWuoivCBmyZjX7ui6Yi45pgLXnhx",
  "key22": "2witT87uFPJMppnSUQTayi3Lbd4eMd3iz2i4gudTufWCc4bSWr5yXTdrBdQWsoHBwerv8XXJD8zG16fG5armZaid",
  "key23": "2CkPdmSLK2gfMvqrUgS9jnFXN6HZqtNPmYRQ1g6uGnc5cTYpaynG328bAC3CFesVEnCh9dLuCG185NLnH7ozKNuW",
  "key24": "3GsobqDPMTVbfFLd199g4RNwFc9V1orTiq9aj9JWuPnJqBwxgwEktX2GGoPMFojonTXbfnVE5QA9cCbCE9vWRSxG",
  "key25": "4quYLXwYgZtNzs1CRGPDpq5YfbwpNdYZYF2dCJ6Sv9BHs6eqJYqZnZPVVSdMtdA1ce1G22DAKugF3fNEd6KuwLYT",
  "key26": "4GjeVaz8WKRgob9epNMzF8vGvLNZssbHKSEwocn8FdSeHCN5xfUeDuzDPSccsTeyDgByn6vfvCT2RBZqZdxzS9b5",
  "key27": "xeQmCcCZ3MdCVkgAhdVurtMjpAcha6V5UhCQqwisuG9crWNM9E7iYNz1VaLYYnj6q26QTfXayTcsrktiSF4N9RT"
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
