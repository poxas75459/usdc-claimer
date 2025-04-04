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
    "5GzsJWfZWZkPbFGpzJKZzUYkX5qBSmq4YSBdhXewx4FhULkPn6hYHqeLrUwLvHUDpWTN2DTqhbW8WiR1orypQYYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSxYnnSvBinD1zPzYLspuMPg54BAwAuYPvQfyyADGUHZ5Zinm6Y3ptqkkM9N2wDWoDqoAAvg12qb8t6BNFNsc1V",
  "key1": "2ruUVMahC1N3pWfbpjXCHejTkhS74TS4Ecn3eCrWQ6Z6DdG1j4juaGimQtyZuFmuor6uVhmTpNo2SZbHQnva3Wur",
  "key2": "nNUuCwGn6wubpSUYZSRZaY8dMC7PE365tzi1DTq25NL7MMwWPrFCK8Lyym1mtVieyiMoSuGiU7u8Le8x4AbBKYY",
  "key3": "5StAvFVGgS2qRUTUNoQJNiNDsJo6bo4quXtBs7WUPoKEfq25CVgU8uQ2Rzcu81E28qmbP96Dc4BissYA7L8BXL4j",
  "key4": "4SVQgKqrWGQjp34teyXwycvuYqboP1iMzksTtykYBeuSmPc8QRWaerUcqWPptqN9Atw28LGu286y6uCdN7oDELf2",
  "key5": "G2MT4wwrH1cHZT6ochuGPkrnBYrihjdvvHhsphippMKw6sVidZn6H5aXoxMq1e8zA2gEGBvCTTQ7stphQba173z",
  "key6": "786UCgzBfjHGRv21J2S6RCJHbjiBmwPcu7RfS9BVvTn4eFtnuqzt8NQSFNYgtavcLfV4Re6EwAAtrzXUrkHgadp",
  "key7": "31oRAexKGv9oDmzEvAMuAfgp16bsurQpaLLWoehkwrxZrNZHiZ4o53jNyCNYp4bybLCBoqWTafkxRNWPxFYUg9A5",
  "key8": "1p82aQKQ8Jz91KZ43HDcGVuy13ZP7vmr9EMJK8Dv5PBbQdpKGw8c8tCKgf1rWjDUsxQVu1JbfWYQ3ssHdKUHyZq",
  "key9": "5VR5xiPcKunC5T25xLMQZogdHnFTq7dnVvqwAtFJCL5Mws6CcLEoHCcNZLrqtsw9jrXTxtXHgym1QKJC7SnsuaRG",
  "key10": "5p6qQPK8L86FiD9Yq3Yvf9U67cznBgszLbY9WvNNe5GGeXMacmQb1A827RqJZ7UMnShZ1VzVGmSbduR8znh6cffo",
  "key11": "2Xiiii4EJT5xbBSfoBNp9eoo3TKuLeLhMaitp3aisz5duK9tJ61a1c2VcUFvcATtNwE7LR3QP38kfbQN95fyHF1Z",
  "key12": "2CgpnxwT6hqh1vA27dcAq1dHiQpdUCMYJYqrtb832K2n7GdSzg1RTrm4EpuvYPaXpYuh8MjQpgcVU48EWt8z14ES",
  "key13": "c1Jx3G3v7zteYKE3ajFEhhXiPpnkBqyjBMJYzS5TgRjyGmAo4yAQsEESTc8SK4q6wsZPmg58wgzboMMmY6jBTHC",
  "key14": "2cbjhnA9U7iC3rfeM4aFFNwDdsXJE4YVVrN4DNPQbfwKmuKqxD5FpK5pQgKdSKM4r7DUJbVX7Tvs65zrAxdBXsKS",
  "key15": "2EKU5P4X94pjyfuJ4BHbg2tWvbBTu3Pnn5n1wG5MQjNRBNNP9Cia27XWNdKhSTtoiaLtRkVFzYEdBN7wecWsYF6J",
  "key16": "4PJRRA1HFEZTVdjXC3QeAapVFL7KtMTj2znWtRJB8iyvbGzETKe9rKT7SpNcRgvA5YuNLd6j9NYoyBXyxd4VLrzg",
  "key17": "4Wfm3ZgVoR3gGkeWAFKjYDGdHuLMT7tqrbwNUpAhwwAcVGohTRsarZ8bqSnhUYnC4akmxjqXjU5FKMCCASkkegep",
  "key18": "4uSXE3PYtCjA1nHNgL14ohFwHm3VW4CCaYA7MTWfd8vrGpWDqjeVkvUouYfWj1Kq73wU2rw5kE54aNtr9DjZsPXP",
  "key19": "2ychuUdeCXZHL1LXQyqgPgd8bCok4NzcHNPEvwd9ow74b8Fqnwa1v3Xdybi9We3A4zyH8RHmVyva1kUETM5CP9QW",
  "key20": "44kdddsE3xKC3sNkhWdjHYtJDKhDDDFTqnLq6ee21iQm6X6cLibB1D6eF9cRYcoinGyn9EY1gpMSs4dorFLFTsmR",
  "key21": "Z1Vzs6iBopEwkEXMKBLATn8tSxSuogqAdJ2G1Ejt3c3ooUxVTj997MjHj29zVwXMcZ8nz26yuewFhHxjFQ7rpx8",
  "key22": "3wjjbqwzbXgVK2e5Pax7yF7Mkk6o8qvXkPv5ZC3nQj5e39LNc9BwdtbwmvW1JwrHpz9B2Vs6BySw5fYzzNao5abj",
  "key23": "3gfqSej6hv2vHygv3WHUYpjspKDWmtJJJ1MajYTjnmeU4QpVsmDg8SbsnfPLmDhSRjSGL6V5DbDdTkFxsZ5o7EUm",
  "key24": "iVQxLVah9wtMhhQxK5DtCXUpU8jjAPB73Dn43GMTArf7nfuNdMWPtWs8rSJjJKr3FkCMk81Zg1ddnujKnEQiKSF",
  "key25": "4As95ram1ZVJPmAkidyWDLd7Jx81xXoayMbvz6CbiHHESsE4Bz1c3vSjPwxg48RHnuCaiH28CyURKZJDM3p9Cffd",
  "key26": "a3yze63ZddN2eswsdgwFFV2BFmWripxFkG7zCavSaTNayHjhjQkJXHfyBKFLiHuqH3BpRzWUxfHoX5nfS7TAc9x",
  "key27": "5yoGvGN9J2nyyokznMKoBoPsvnyNzSwRf1ziHKVxUfSpHmWhYyMUd5Y9vK1Lsu1QKAERgvH9HAgiV6keX6y1V6z8",
  "key28": "5s2guhCzkxHsE615zFZeAW3sveX9dE7DCSVpRV4cb62rudwuXy9uxEftJF9QDSsWG3Ba1SpZijB9NNBSt6LAzmjN"
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
