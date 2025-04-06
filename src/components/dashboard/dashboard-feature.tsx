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
    "p9CY4Q5iPxFcquvkZyG7yrf5oibURSrVMhc2pZGunqmRd1ATfh8CaW5fMER7AsRygRm9dF5L16mwDUCTBW6Za9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTy1H53mpgjEP3LUaQmfbkYeN3jHkgr5NRYfchQC6tnu6SAGvbDiJ44NmUSqAkXBe6qPP8vYhRUJPHDtb2CVZ51",
  "key1": "41TbkEk6yvL5FKjYUC8xCxAKCe68uwvUJUU9KpV5MRQNUkwkfwkHKRQvSxRH3vvZeu5Jk9N18g9DPGLrzaJFc9Yy",
  "key2": "4QvXLJLA8n88DV6vXMyH9syeK3AsrMYS9YJV1dfXzKQRKXg43B5eEsy4GsmPiwBjTuScZbhsfHVd5MrcSAd29A9g",
  "key3": "2n8CFSiWAk4px2cwS4XVqebMMAURXoSrrLD6LgJqZL2FvzutdZCHChWrSRm89ZUyV6zS54R3MjG87SAwrw3Jw8EG",
  "key4": "2FcmUN5LFb9T2m92o9VbTRmgaDPGhz3jVUzJagYzhytSCZVboUEEehwVBkSzP63yz4DPgkaaPxBorZPhBeNubcHq",
  "key5": "4oLaSxxPsNty5tr7TXyDJgEeF2rLRsWL61LCEQohfgRbgB38NDzGJNxReTYw8VJ3FCJZCcHhw1nxd9tKDSRK96zD",
  "key6": "5i45bizd2Cy8HBU7tZrvHHpwiFrevHreecszujLN52p1iDBqdNvXXhpygmHc5yhzwNkc5RKL766Rz9sXhZx24q8r",
  "key7": "WpinqziKvMimUpgUUEARuJWxU6araZbHtJKvF8Y3zn9Q2F4DeAfLittQTbQrm4Wq1Y7px55kCywoY7t25hcNXTp",
  "key8": "5deq3ZRa6fAeKBznFLPMKLMaKQt27XcWabxhFZ1fLrTix6ibG27ABQoJpBQMds7NiyKUYetCfJvr4wiR1MwP4rzU",
  "key9": "4GSEvCNfdbTcMv7bxkYGENrFNQe9yPWFB2AaNYvugmVPX3dT2j6TCe7JbL8FzLx3hnc2XW9qL5yUjQzDsLJDGLG3",
  "key10": "d15mh7PN42nKbVosLakSyRbhNNarJ3zVQJ4HKXzjoq7pY4wR2hYVCr4ubQ2TJE9ASMGrrV1k1hiS8AXeNoYE5Ze",
  "key11": "3NYYYz6LBTngCN7gPNdddZazSkvbowFz4roYr1rGChmJRMTqZsuhhDMruYWgLy7w9AbQupkAenFB6JQLBpEJnkxR",
  "key12": "67Z68vJWV18U1DF42Hwvxy1CR96HoPNtnnUU92zEGyakukj9YstLJFCbdfj6soN3TjJRfgWZMTkjjHwiBzhJjAd2",
  "key13": "5WxxfDtKirPTgQShox7WLsktrkxEtv6jEhRm5d7DnvuyDcpypNbec6ZNuVheLDDda3r4fckFKZAZeSqvVPX571VP",
  "key14": "4vpuWRKgLWUMCBvowteSeaUp14R1urJmoQgRE6bv75LNd4pzGyo6GuRKQmgL5FSmLjVBeCjcQEb3kQe7p2xyyExS",
  "key15": "2EhTDZKxFBvE3PLB7QASq2NBXJhCZ9yNTiRVDRsk1MNMEczLb43gFx3Bn2C9ysGKp4RZk5T29JEpmUvgyebyAcwK",
  "key16": "579yMizYj4NQTd5cWQLhw6XmUXjc4nhAAVobhbqj5hU9bSKgKngxZhzUnhvQLyBrMALYY99HdZTMYtMXzohahAMj",
  "key17": "3qQwj83iyg9YXkpWUi3HMwKem2YBXxxvGW4U74PybUrFaibEvXCXuBLf7jb46s9ZryHeArtBKNHemmYifp94Tcyy",
  "key18": "2DPeH1dTi81sRjpjnfuf5oav8LVrGKV6Tpua32hs3Y8cfDDKq1UMZnrcBjXcRGksb8ZgsUzUYbcHsCPeE7AMU49T",
  "key19": "cWEDE289DyXi8GzPgbjogXcDk339VdM9DzpF16hnjX5ea4qWNcJ1D3NAgadCvSYxtNUt4gSdBsmUqqBAPq4tBHq",
  "key20": "KYMxxFfBczh7Wi3UqxoSiRsXVRtxsnTRd1empyKn4WfZyrTqa9sJGgZLJMjqdX4BgumY4iKENrx2Hfikbg5hHX4",
  "key21": "2u7GvdMi6Yxsfr7TLzTytnsvFCmEimkeEQkbAL7R8WDkSVhxuTQCTXSd43xdQAStmBFM8uxBznD4gLkj6VLVXSrY",
  "key22": "5vzUQMZSD17AWLssTGyq6YtLeYDdrctpRPXqB3iE7x4ioTL5B1bHSCbGQxdnLjSjj4AouXaYWJ9tWTMEg8fHgMJs",
  "key23": "5ugGrEwcwSR6fZWiYtVyQQkduvKfHbbYpKr8jEKSL8NQK3vBDEAJqCAfcjQfh7mioxbjBmjfjsJHfwkhc78W2Rh2",
  "key24": "2FTJuQ4KdJzWEKFsVFoSReefszQug38yxPB6UC3xYx1uxcgVW9xxaeke8jKYJpkHEpEFvMB3mpXvA9McviJDzFbQ",
  "key25": "65Q2wmYfXJprJJcpXqa3WhQH4hgNfS4wZHXsg93qC7PpiDAxmqQ9wLZLA4GGJe1roBEqhAi9Nwh11j8jCr19ejkE"
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
