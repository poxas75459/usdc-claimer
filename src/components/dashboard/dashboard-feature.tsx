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
    "3S99JyMCskEKHKZv2BeHee3wLHpMG8vWVfgoR49SdH47UgdU1UNoEBKV1WtpDB21PkGCBFWVP5p749q65zmhk8tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqZMdY9aXKcf8b5tMvWtXmp3G2SeHmredsf3BuAYQKffk4K65CQVWYQkZGczXCCDjAMM7WqYXsv3B1JYaqXCYGS",
  "key1": "2fA5yJwXV6pBqWYNsN8EAiVbx35Gwp79MYyE9XLEoF538AEHtNFXZnvThSWWrwqT9f5Wneu51LrdqWXMrhgKQ65N",
  "key2": "6561suaFG8H8Pa4Cw8s1VUBxKX5CEKTQBpo28QTACLafnfE1pfzwxbDJu76CchhVmpZsmWXUMPUBDBKzVjnUeqjc",
  "key3": "22FwMEGMRqUQk2cnL2jUkPD8gaKzxMGzUfmv11cHwBMTGun8QEVyAwwa35UcHufZAXg1knBpzkyXAVcCEFuyZXfb",
  "key4": "4hAVKnukdC1Luiint9CJGvcngonX9M5GpfPbyYEQYWLHgQ2ZWiUTVE99SSsnvmc3x8L6btb9sQv36KBnh2PxykrA",
  "key5": "6323W6tY3uZZsELPKPqjkb79EeWWrJHXVqM7rKRZMEooFhxSdiAfsu9EtXCVQwmBzW9hwdjEVZ6XeL5pnzQm3wFd",
  "key6": "EDymRLHdMZNuFKxDs9mFwNkwU9Pu99RX9dGQEyKoHwMMS3jHv95rjDVPFsicuTPjbg4hFf9TxwYBiCuQujbiSLd",
  "key7": "4DaKmKRoNcMZT5LZrougn6MkP78CLCABneM2Z89xcjWwHWWuX5pc3EMgDybz4VcUqMAzB67NuwvnuSknbeeEqbim",
  "key8": "4cGg4iz9sMb2bQoigtmrgrUp1ixeEC44AJVr9tBXaGguzZeVMB64g2yYdpCSzXuujSm5U2wEkjf5ySxyGgiwwvTD",
  "key9": "353rqbeTPPhnMQNa6fnwxUJxTB4HNqyWfjonLtaehpjcCg2Q6YDY1dwFLAT6ZoPQ2LCXAX9cqokwGo1kXUxJYkbz",
  "key10": "3tUv21bUpT1iJdt1kx8zHFnTqVsU2ncMT645gs2xjUuLkeXrRmuMcfiYWwdE7H8ff8T14XTSS4y1tmtvE92d41zC",
  "key11": "3qR16VpuJLsay8fPy5PzaLGSoe6DqALGfvQfX3EQjLqph7cSF1Ri6tpgLydLBimWnTiUH6nsbu1K23gFnyuEhfM4",
  "key12": "2zQJ5aR2WQwBLUCARnVdQ6rxHP6vchLzyMfKcnYYBv5AG2nsCtYh1E7RhsJ5SjQtv2qXx1cEEn2NVhwq9YNvepMs",
  "key13": "5Yi1AqkMZVLN4Hpo6TyhD2Z11dxxVd7DiypuTrBqong1yzPYPuN3fZHUh7Ss3UgVnv2y1UjPcpfwd2hZ1Mr8aqE2",
  "key14": "53F5WjPmpndQvMqjQaWYVr3ndzEfmMMoyD1N4fLFTen5E5kNNWGKSvELSZE4tjBfCcw64uWct8d2i6fuceMtaG3N",
  "key15": "5bE5t37rgCwRSecWzFqaVRj5v4CztM8yULhRSZSjhxiRn82RpM8xtuhG632avgnxydU5i8NybxPtiisMLPN3St1P",
  "key16": "4hGyGjYHZM5sUZQ977Bq23BC83Eeen4gaXaZb7dUHSeTfAkFNZ13LQ7iyKMy7nRuEeeb1uuCJaugMcBKwLKJ1W9a",
  "key17": "3wRyCpgDWfZF1PVwXxBtPANWL5QQZ4bdCRnRDxH6cNVGMV8oPED78Kghoht83bd1gE1XiF3Pw5K2eTzZvrzpxeF4",
  "key18": "3QyUsKR3X59e9eJDJ3NUPjN1updGaKmvRqAvR8BkUtcmgoLVLg2rQw4LhpQCmJTM8sRnhStUsrAqzSBagGvWie7r",
  "key19": "4C4FAVn7N9pT7KnvdFuiuUbWBB8wskgVK5aM2izi5DVjkPnbHoQDQCf7QDFL1zgUDMPu3tEq8ra7Q7RBEAft4Rju",
  "key20": "28qweUr4ckp7oBVBGS9HpCoirGyFZwGdtT9BtUsGJNijSPX22r8btNYoEtAA3t7eHZapqynxS5bb86vLvFK5U7jR",
  "key21": "5b23wNXp8qXX72y286hmSZnquHdU4bXuCu7t3jGNTAnCH1EPQLQRXBgeartVtQaJ94NPr527sWy58xV2mvzMxX8R",
  "key22": "61Mrku7bhaCH3yyPonisPQHKDLd8J4yEn7xJ5f5SpZjQwRxnpf3PXxPTrAN7i4smXVMbUcp4ohVBiVQepbTZ3EsY",
  "key23": "65qLLP5y2mkZzESJezUdNJHyYzTAFQ34eZPFAZU5DQpepXNtj9p1HCu654dL6E39dn4zcMAwJD2ny5RAvQin84WU",
  "key24": "45aCwVMF54rfvaCZUCDfzfDvgnWL7RzkokMisFhfD1MDh8trYqLMmY6ZGL3WUeH9cRQ2j2jyEUJKuEy1hq9ZYxrR",
  "key25": "5RwzZ7QHeXouwn5ZNTdT7divswnFQEV3F2ggU3ptTLdXiMZ8dU3jRkKsx68mLSB46NdTTet9Nq343wtaKqZR5Lar",
  "key26": "5kkBY4sDfCizWosCXBGsp6tqt4vRfHvc6cV6BuQao2puSMt133cnWNZDUHsHZsFLyejtHLSJkJSvJe6DP8h1HuuN",
  "key27": "Gdv5239V9aFctfSteMdkhinHnBH8pLfScYdECJ3uW6cmfmQCMS5umGTkVZyYyPDzGzVi7YQaUaWUtuuYcSVCGuM",
  "key28": "2av3qrSHupCGyowxiHPeBmHZtgHpq6PUJfhjT1SyWdiJywSNRw49woBTK6usuvS6kfn3sYU1zsjMFbq8ma4uU82P"
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
