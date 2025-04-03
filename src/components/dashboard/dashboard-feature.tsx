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
    "49W9pV6wJiQD3mFBE132hHtafhfoUSA4RLevDVVevBbHt6ysyGVGF5PXN1dKM24teNJ6CVkFHpWQkQMHoermdBSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irQxzDtmQkXV1UsWeVk1tZcgEv6bpahLX7yYGrjMBcdYnhf8eK1QncMDrM6GEgFTjaFR9DehrnqNNwZPxHm6w46",
  "key1": "3csxCuo9Hg9i4BNLG34UAktAzdZjRbfeFNjh8WfmcxKuGHpSEAKSiUvU3JWbMLEkPnBX2c4sLeog1oHoJYV5zofR",
  "key2": "4U5CMd1yoVDJRYxqmBFM3gbPYd9xPRUaeC3JJeVRrr4LnVrHEY3Qd5cgkvxATEBsWZFSqXq6apEVV5DQ7tHpPHbC",
  "key3": "4nF4thvTYLM6gq26HuhmsH2W62rvhc5iZhepzWjHXrQcUvUf81xciR31jRg6rsjJV27FDBKLwN3JywrurfZkX6dQ",
  "key4": "2QcmJbKfynexF2zNz4a5mdnecjwTvhRNw7TC4WC32vDBmphatYjGJCkjMKWQnfLcKnURd3axwuz8fXkP7rWjg69u",
  "key5": "4WvzSJgXDwGdPRQdcEMibMRaf3KpuCHo3LW1Y2hQ87f1KnZWQFFC5ZtBY9nPnmtU72jFkMx4cowCuYrc1zgjpJJ5",
  "key6": "A931ummpLHERcZrgZBXfM51aCLd9HJGJ3eUPuhEM2ZTtYCXpkUriFwarvGxTYnayfJYPQezRMhRquNv3APuwfbe",
  "key7": "4h3Bt6Jvrf2TCvKHLjSeF9AmAtbbuCKvY19A3hkndBjSk2vJkW1YMyJf3Lg4LdGNUxmsdyiAN4K2Ms5Wf6foyDZj",
  "key8": "438RiVw7UhX5Y7E9GmppuErzwyG5ff89vhj3p6M2L1dK1yTauDUBx6fzxWsZKx6jR1QKgoayu6Mu9KtVFtMmeycb",
  "key9": "3gLAAbaeGrYXnz5rdBE6Msh4eGSFPbq2yDAhyCBWzMKM5SoPetVrHKqnaSR7fqHyekdEnuhn5GC1DjkZnCJSHPZG",
  "key10": "bisgeqwbhFFFxBjUSbMXRnfUJZ7BCCRFiCB9U8Lvad7b6pZkHiV9bdAUdiUT43g1MXEcURrRUeN2TN3oJe5a4P5",
  "key11": "2vS2wmkcoJssi3pcvPVPtgt8ayGsqBGnjgEueFkrvKsHU3ijcd5yqnD3rJeuJmuGP2Mz79hBTfCbk6kxaiC1Cwe3",
  "key12": "5DER93jVHzMKJXAGA6UfdyXT6ck8fqrgMnjtTafRQyjVkEYN3hpqhkC3CtgCrUBiZRcXy8qohw5EV5FksNwPUuUR",
  "key13": "4MD42xBoLiXGU14A2bQ5gdn16sQcgD3nQFXqsaDCMq9LALQ7d6TbrmibiLtEYu4ewy2u5CFrasRRvXXgMTiShXLd",
  "key14": "26kTFz4xrMx7HAWCXeoeAJsrkvj82YhUQt37FyS8uTrPwkrQmJ1W4qX5yp4dM14eomDa8pGLzrQrXj16LdyP3FK3",
  "key15": "ikjG8jpHsLKZVA1bZkQgQPSiqLCvEmRusKHbKfHgC5x2VUPY9WHxnuxrKp4Z31SpMwVp5a2zAQun9k1Vda9aj8q",
  "key16": "pasBPjGeBAGBp7kLxwkBB7ajPz1fs2xhevseEXEFDhbTNGdDC5kdPwFYSXvDgUG1Yg8dPajiR13wtzsF317YZyH",
  "key17": "2qV4LnBr1Zh9sbeWhTxAxireWoa9BxbeRBRG5ifpnqdNQBDviZQyZp7T47HBYEAtuX6xiFY9gLfNsLcrMxk1JLob",
  "key18": "5qJeq4VSAD1r4BEGHiABB1h8PCjQUqw9mKef84FoyS2WzaeJeSmjxkaBrWYi7iThnGNf71oW2ZnvXPjpbwigqBqN",
  "key19": "3QErudMbsc1EfZo6wZEBTtEzJHuovnUd9L6H2RcTSr5UfXhb1DFNpjzT2ff8MN3ehgjWgMtxsRBC5jj1mNTsZeg9",
  "key20": "5TSk16jUJexHRtsNQHfEZEQ1e1iHtogf9ZhnhXFjJzzNVe2QyGmBXWjWPoarWDEVtrZT8YYBo5n86VsKQ34Ponju",
  "key21": "2477MonkJVTJhbyPdnQ8g4tGQEfezty8psRWVxLWe1w82WKYYH5TvoG9MNd6Vu5EaZjHvAbuqGwDv8BNapL5ZhBY",
  "key22": "3sSbmnbKLnUaKmP278969SDpcYi7Rjh2xsBbRA24muwCRryU5E3gpzmAjPAsJPY3sDZDKbWHMU9eWPPjV6vYmHtx",
  "key23": "n1k558PQjrM5tPvUD2PiT6kLRyLtQW8mMdAEWEXjaGGamFQ8GuRAAkiCqCA2XhbDXMCmB8sAkYoGRNh2WMHGg9B",
  "key24": "4VLVBZSxNrdwfMRSczRxmzSieTG1rfoiVGaGz1reUnqvq4CEnnqiw3ibbd587BrF1EPMU1CQgabVMCi4cU5xi7Pm",
  "key25": "62zL1RHvDV2EsPJjYrGHcxuVnH5makmYwHZtj8SZbgN32Bmy63wE6ZYTghtHKR4DqiHy1EbJiAzbkmudd9mKFnqD"
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
