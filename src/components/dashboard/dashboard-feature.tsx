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
    "5qHMJoUZaUDWmGnSzhLzGgK2VcsjZEb4JabmFjs7iJHtWshBKTYtD8AGastpSX7uNiF5SbGAe1kUiMRYSetPaYwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thNxVbjiYcMNTLMPjWVJENYAfonW9tuvXeVCgV98nASLGd4CcJYYqcTVKMRum2V4om1hPhQUNisC9yTbBq4upmK",
  "key1": "2qFk74fDpanSSLhe9gTPoi2kjH2aCzDEcRrJvt1c7n787WD3GhSCdJjmuKAZWTEswuNgJAmRTVwRCbqKJEKh5XES",
  "key2": "64MSPitpTePwBPC8mN8qXWpNMreR3okEnttkEtDg7nLNY4i2dU3oTQeg2kt7dPHeS74ukDv7fxyuNV72wtkr4p9C",
  "key3": "DGAZqhrgrTgVpj5RHc9CJGfwqeLquXrNZwEyQ5YH1gL6d2idx1vSjuPggPkBiYpbToKSu4eE2iARVAeVrtn2zhF",
  "key4": "5qZDJ3Qa2EKdmE7UFW1KAvwC1fPZpCfkzeGyL8m5QT378QBWEKD7cs4azUJfUVoum4m2gHBLVYstyYvHJxe8aNhi",
  "key5": "3AuG9RhF6ByF6M7H22p1CmNfEBnu3nx42616FdSVVx8AEAmuaBwTTRQ776EFBsVstHfGVEEWUriXfHbxjMuq4ewn",
  "key6": "54BcHrpNoacojeQJhuArpznX7uUYYjs4C9QH35eRUxBSUMCmkr59oa7bGhsHpAA5P3SFR4VAMop7tkfezet1a5R",
  "key7": "cq3D4U4aF9bq7W1SpnG9y9sJ4fJY2VUbtssiMy9trHsjUf2RJ6ZxKyVm46QgtwTjbZaagok79FmXLc3CrdN81p1",
  "key8": "MzodQXu1fe6BLvKvqXy4PfaoKi6wC1c5npXDCo7bK5BfTE7jMbr7NBavVQPb5wFz8GoREYGDMCcrKnWwgVY2jut",
  "key9": "5JxcqtFvu7mpwfJSmHjRqww2RsruwWbPegrQEmWFqVdE4fgiM6eyFLHA4Tw2Twf4KRc2dgpbqpxBKmkBNDaFtAgi",
  "key10": "2qzfQsjPG3KCv51dy6eLmvfA9xqued5z2FPT1q1oGFh1rbnwnn1VXv9Fti32ujJkhqxS7GFDyzCVzTVohbi6izB1",
  "key11": "3E1JBT4W2Vfh8GEnaCbNJAyi7ohTxqdANpYc3vMpDZMWZ6tSvcV4ZDknKXXdbCVDeGGVuZVwdeWYSwgTHYTwv149",
  "key12": "4bedAAyQ6hkm94XvLmuy4Uzg45ZRUJ8WvdSvVkekYqMNedhWFj3EegPrZmkWsBUNHAfD9WWzekbn89qGJeNEFWVD",
  "key13": "5gA34pADGg6WiVsEtJNGQNCA6bq3VjjPc6wx1GKAwpKf4bwrqqbyNyoY3as2bBiaP1EjgKQKz3reAwvrTxrEjvsH",
  "key14": "2NFRBe9Ff1e7RxFABE4JMkfqd9TmLFgT1VE977DnrMnnzyUFTGdCyYUKqFyB27bGDPEbWupH7Vz9RExY6NLP9U7r",
  "key15": "2UD7HnKm9EKpz1F9SQCxYhPmPh6D7Yoepdk1SfwGmUTUSgtsbXLXisLoG1RoGpKH5Mfri5uCjwDAa5rTrkZdZS4b",
  "key16": "3JXZd3gH33aNDDTFqoBPSsVCa3x1m9gRbWM8XMnkSbrrQdWmtpKSuuYxDHxwaFP8qnMVVLo6vhjRao6mh5m6vgP",
  "key17": "o26iKfCugdKXx5WdL7uR9g9XnNPyLBs5GEhpAuvNCLXpdMXDuNm4emFWiq66Y1JemMLMKkWtBsppSc6EUZkpvig",
  "key18": "5DxvSjp5PoDBAQFJpUBkv5zyCnafZFWmt4Gzk9JVJoeMsqGcaV6rnPcz3mCA7iVVjcvogzC6Jod8EVYEi9pMwcEn",
  "key19": "5apYvc9R9xAUK1HvU5vSPGQa1L4yBFMynd1MZvAzcBS3xPBY1PAnJhQDATfhiffiCuMgqxd2JLEcEqVbJAe1n9zK",
  "key20": "3wScEWyD3JeTKzPAXitRFXQnyaxxyF4BJqVfQcvZreV1R4LLKHgpJr1xkJLFhSETh7BSbFXEycP5ooQJqgJBy1yy",
  "key21": "34BWfnbWzhQcJN9QXpPGFQR97umTKeWqyTCSstbX6Yjg1yragXbPjCUpahskN93Jf3fy3CSvZtrRbBNrt2eGc8Yj",
  "key22": "2dbN6VtpJoLMT1CfHTLStMCtAAEXsuZFD96ZiCnBRzsfmnXbjavuBvyx9w14VRQUFMKtFWmqr9hmMKXZXDgSN817",
  "key23": "5nnT7ojZxjhrS16duXGGjiVMFuUJRUBhoqon6b8Nk6YHuQPAnRKNxCftci1uHsdPv2e9mYegncYdfX9XTm6DVtNr",
  "key24": "27wiqnyWpr6MQRteiHu4gybGFxUKZQpUPYny7Ef5pFiDKUEavdMtgUEd9qTCBDQdUTss6XUVTQGj5MX4ttBeupEX"
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
