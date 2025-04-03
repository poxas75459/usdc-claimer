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
    "4dw569m66fXon3nLVsf4wTGWFTtN7azTiD2SgGXcgwYyiLqTVRYr5kM6NdENbMKFWKhun5dmfr6wZgCRRGFgKqLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMLrsrmviRZbRCZLY8uqXMBKYMujSmri8UsLHPgNRvCpv3wzNckG9hUdQwqQWV5JyGoGmbYE6W4zVDEXdxvBTf3",
  "key1": "5jtnbi5ZwdTdMLzxA8eC5k5A1JjffXnRLtK4fDeTjKYi2CkmtEmbi6ya9ZMuCwqBdgdMsNTT1RD2a2ear371Smcj",
  "key2": "6j5YCXri9LewEb3MATxhFxfXXyEqACqxjHqdYXk1FaePGDUDbY6mJLtSLjRvFvmCAgPCvp9fLdRJmyepeK1AsMF",
  "key3": "5MtMqFxizbUcYPG5iwYzT2FLSquX5GiN6biwMthxYidAGxN7asTGEGtSAiWbUoUNvhCKD3YVBoEjzzfptSHyUjrf",
  "key4": "4pukH9aqCj3uyBGi6PQvqe6wPfpkBYykVCLK7L9uuz9UC1TkL33Nkta1F1uHnBPcW1Aa9g66c9Z4vGV4f4T4Ca7P",
  "key5": "5xqsa5fUUGu9YKczozUcHCwv7EaqY4uAkd1XGkJiBneuHPkwpDF3QyJTNpkdHSzJzMeLW9v6A88oMhjawk4Xe8Nu",
  "key6": "4DdisER4csx7Nfjz9sJC7S6FkGD5eHmi1HGQ8bpgxktYHh4KodA5mrEoQBNahiHdC1cSRC1WSnMoe429j1TjWKDt",
  "key7": "3t14Vkjos8KFwf8NgDpRanPNhNRbKstqw4p5MLQArjYn9Ct2XEkMLLWBi9kAiAn1Sxihib9o967Q6bZZXes9zdDH",
  "key8": "65JuZMfeoeqn7P5C1LGiT26Ck1tkxXoTheaq9DqWVb4GAdJGqUqfkqWMrm6RHF7F94RW2FfMs5fpaDv5x8smJCLB",
  "key9": "3XmesauiyiN8WzjKbBBj1ABQvqqyn59oio9ia1ZqrD1VESnZX6jhCz1RBF4eM62Uayk4KCPM9HpuM2kuqBg6ZMkJ",
  "key10": "4cgHDMbLhBe51N8vAxEo2ySWNFbPxCioiYaF38J7mRUAdVagA1WLSUhVZkMm5dvb29FRmp3USEtvMKFmzUYoChvK",
  "key11": "xhWrJkjNe2WfabqeYBAZKLyY7Y68ZyexR7hsGb3M6sPEvpXUMsRVDrK5by4HgdQn4ubXuHZVZ6zX8EAMpVezVRc",
  "key12": "3SYqh2NkQUmYT3WoPPU6SHXZwavVFbz4mFynPjYUYYrhSRp8FinvdmRMfy9AedNuraDTxDj8Yiz3ePNzLP4ocKM1",
  "key13": "j9JqeqbaaBdM5aKP5S6EUceHGhAiAraY8vj8bRKiqeKtJHnVPvYtNWLKCPyf1EmNnMSr6CjWarrpJWH1QPXteJn",
  "key14": "5K52pvFbiUL8gTPW1fc2MPCLZFdYQb55XW32GLmvjBr6YPqAgBJfPkW5vojJXkmQarzuSe2k6oDd2yxPQaEk6pTs",
  "key15": "5HNH5DtM4m44EupbycnyteCWFgHhUWUDho1HA14tDNs8xwuF6Nh3b6c5kCQ1RUtMnd936ay98jWmJjA4M4PHBpAp",
  "key16": "PV9AMaM3WPjY59NWrxJbBWgsQy64fGFvUY7YHV4KvMe8eTC3BCiuNwhJyNBVJL64y5RGrkjnoWXYFsR8ZeWsXvM",
  "key17": "3G4VWR1KGHCahMWFTgXBnC7PvdPumZbLghbyyxV1dngeCVkhKrFTuXsvU7dukEk81kUtbYYAPeh9CUYFCstRAJR1",
  "key18": "4KjXsRNBd1gSC5neV2cheEWoj4xdgaAjQHvREXPtaw9VuzRtEtm9xxGBsBv6cXBAttufDyakxN92sG3ZWVCy1qbR",
  "key19": "5diAqYqjVtzakY2icwqkUkDmSowHsvnLPySX8ps7BBKEowxhAiQ7botcTFfBvJNXNT8uiZuSiD5V5VNRCfgFXfuL",
  "key20": "5TzNKhcY1LgJJdmHBQTyEE37WcBwCkgysUj9NMZBRa4Y4HkdwLuHaqc6Z4zoKwq9GXuyN2krcZc9hrzF8Rox4tPN",
  "key21": "4ZRDCczMZxoHTgY8hMAg6kUjR4R48T28dxqVS1AjcU9RVxnFNPPhA6TD5TBdLtFxV2LgDBz3iKU4ZXEucFY5Nfxd",
  "key22": "46Q4BSfj6eAN6QjdSVwC5WQwrXrPBu6CZn3zzJWaenB5gm7s4JSSFfsFpvN2pPRDXgMB3XZmrw4RiEKwhDna785q",
  "key23": "2w6EwCEAuSvVrW8SNrZxu6tZ3MmDm2HwWUENKUPbofdAM7obu6WcUkgBMwRojLLyMj5DbWMDo2LoXgrPZoYGnPbg",
  "key24": "4U3ZJgCVfo9wESh7xgDVFCpxJKw3rLrCJbfrdwqX4AhfG2afSRDhEz4d4pba9GRR3CVkierLAqWfw9t9HQN9y9mo"
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
