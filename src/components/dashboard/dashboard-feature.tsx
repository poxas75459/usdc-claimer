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
    "52UHoBmvravwMhJmnzJMSmno9fXUr5BDTGLZJp6nc3PHzTRWKzieFvGNHmxBB7KyiJRUBdyzi3VD4cDR7hSyTVCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrURhTBqvmEXAoPbcgh43QyftdWb4FMAP23MgdRDEosy8iZitzAgux2W2wCmRHnFhqQhp9kV2CCDMadCuhDSMg8",
  "key1": "3LnwojY4VRpW7xpELV17yKaj1nFxAbDpSLrEcLbbBprXsR67B51RKGnX8cx4FqpRdjJ6Q7xFRQ2GrZ48PEeyo85L",
  "key2": "5qjp1o5LFPvCc1vRzR6EhKs2uftYN8nXxFr3z9AoUoZAhohCRjg8sLEKkZy13PTb1G6iMrrumUDVuJhny8SpRFhA",
  "key3": "37b2GGusEx432EFSVUJPfdMs4ah2mJmfk2aaWCUCq5SJKBu9z9bsGuWVyYbGJAMxnEgEDNvWzrtkvvUyMmXvJfco",
  "key4": "FcXDxQu5oaA8GX7rcmZxaMXGBL8YMG8mEiDrLkxRoPMwBuLVQRGjC5UdrBw99wyyLbCfG9KR41RGGuMFncVPmHg",
  "key5": "4A8kmKqkQP35Fj2qaJgjMEiGgxLZeZNt8poEhWnx8ce6uPKgyKJpCXrBGrkw6e3ptADmS7SNN5RFURL8oQgD8wPv",
  "key6": "4tofSfigXDoZkUxQGgTRbwha2HAjEyPw6TT6ApmVXq6EpGULoF7r459iRunsndDJvFFSFKUB7F7AmYjEDbJ7XG47",
  "key7": "2bmbXbXWibHeG2oV8mCeBe6qjTPHbVJbWNHVBMd57pdYoeqxFYUPvDw5Evt1o5wFSm92xi8t89GLaYWZSaxRCEev",
  "key8": "6yMKcxUKioBLT3sUSrxctDTqZoCMpvkT89zK3ciowsvgmvuQWxdKVDPXYygQ45umhit8SDD2i2A2UVz1SfxoGda",
  "key9": "32hAht26CzEc5nXV6WXekPxEkfcjEAuTUx2gKrpnyVFTCnaTwc2x2u3HZfo4aJns7rWLRLRqPNE2wdwXVNYoEC8W",
  "key10": "3zdsdhQg7BdP13J2q9zuVMuPMRabCz3gzNWpeM9bYCgdcHdUW2FrmCT24qU2FEiSF8Pq5zWmEW3r6VrPdgpco6oU",
  "key11": "47SiuTJo2SWsXSH1FPVBN4WcQRA5mKc3ht95mNuJadgQTdyChAWduiLCFpHf9MRfcXXHA5yTdLh13WbYUKfLSLW8",
  "key12": "2EdzqwCMMGDBKE4RhDfVLNYr4dyLKuBf11XhV7UaG3KH2xFjs9sGXEEnxZhFfWw1mcoL2JSp2cBXxEdhXUeoBgeW",
  "key13": "2vrkuPYhi4YsWYzTsDKSGGd7kV68SJFFzeGu43RhqkzwokyYgvfMTrQ7jZN8xP8pM5AsumhRcJm3Rq34P7kH4nsH",
  "key14": "3KX87yx9YYP1gJ9Q7RQcXGU8FyZmgiWAevgQ1wsmtPVQBBFkg1hqXdsy3arLa71fnsBGjw3JsyWR3RnvuMVEYGiV",
  "key15": "5z2eDuakuHocSGNhVXVDZsWLd2UWEPX9DhJN5Gcy5A1AxLiQ3uB5f3NairHiBz8G6RwTH5wngzsaYATnwk6KHUEW",
  "key16": "5svtmwbs35SCefH1467H2JT5zoPxzjbtMSURdbkXo388NjmVE4iPwRDHC2evdsVBh7oHwbJNiUsQniUQShJN71DN",
  "key17": "4NZxEeLWnZD9XyEPnbBrAEvgcU3TLLkL23XbrisMLMCMfVL1cDBsxQsyFBCHJhkan1Y3hw6c569aSxe7xWVaRChv",
  "key18": "1k7TArsLJyib3czpHpKRuRM5x6TRpPx7QF9uYUqDWuzFNEee3XMn8NjBKRCZJJEx8rCwLUmNSAbvJcx6jzHTngG",
  "key19": "sFxecdzv9goVeYp4DDezPmp6GxrdvwyXQg3K6Ff1oC1LJsSPUFWVEnV4tukjU3CmP7VndrnjeRfr4tNYmUVHJBt",
  "key20": "2Fa6NJjAwmryHQvG8MWt25SvGHVtFbn2xpcWsMoHHcLCJs2EcwUAPuZBpkoWTx8yBS6iP3BKDzjjatF6VmVH3483",
  "key21": "3vKy9pb4tAuNWJgpy7QL32ZWys4waratmzwoS4o93KqSYPvnSdWZXfAjzJcfsNFvF2zWuSbbwA5KEwQdpe4wWdgs",
  "key22": "626hiXAgzTQQHRsiLnkgN3Nv67Nc9StqmLoKneMo41nXYxNQ23ajwwZDGV4YCvwpHvMzBKsRYvVcKexhqfAP2sNz",
  "key23": "5nnKE6p1wf2FkQsBgrh5WGgUcjUQ4GhuvxPMxvfp98LWeEhaDmCHZTCHe5qLz89kCTGRBaD2o3Yaj8ygXcWmtBw4",
  "key24": "3zB8oAWp5rVrfvpw4dHuubEH6z2T7DdXPLG7qs5ENM8UXjhTXzjDjvFQf9EoDoxqyVoRoeFxvhABJZyQXPANJEtE",
  "key25": "62cMRW1qkaCqKLEbmyHnDfG3wgbQYXsj2gouCa66bocmKLxYKHcDWUaVrd6yyu9HMuBwiecm1EYHusveab2VmoEC",
  "key26": "5Hc1w2cghzija8k5MHvzNMF9FRsiBkRZqSVmU4Zm4ZkTDhW2YbBxV5YbDztj88WwyX1zXf3eZFJ4YLjPfAcfVKiD",
  "key27": "yjDgY93RgqdvtyhtxKqS3QZPrfZ8LdSXp54kQNsqf1LMT9GK9HziGu1GCWSRmVNFaw33xfmwNjrhNHuZp3WAGSG",
  "key28": "tMK3yM96BrZpdWbqZ8PmamB7onxopCXXJnUHfjnULQY6keZyycSKp9wEDnVSySEuzwJLAzRtAQSHUDnVPiTyZb4",
  "key29": "qBpQWELoJR7sSP2WFzf2sFsb7yGyKef46hPABni9QgzNup8gH2j7Nmo8msysRwwwDEb3Yw9V9XUZq4HJ91uVq2b",
  "key30": "59Nixp2P5cgSjYUWbVcH3UfT27BJBnn8YQjDTpyBDPD3DY9T4yvRAREHofPjSMou4smfcp5iEQvbiqsG5rL7CP8K"
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
