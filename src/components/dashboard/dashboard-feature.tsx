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
    "jvcYFrD5Lw7WDf2PTFfvCj7fFENYeqqgPCUNr7xKthGn471FxjL3sqNFZVGmSWQcmJ1D3GxkkL4iLFgcrFTV2BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bk6Ap9p8Ld8Pb86a1ALCjre9vp5nkZRArSmWp9NGbAJsB1HvRfrP7YvAKuUEPTSG1AAB3x2Y5LDjFM5zwtFkmfh",
  "key1": "5dTxLuD3t7xMrewisQjSWc9rZiP8FYZ2bKXbCASJ58HA7C9rSswJKicZptywNMmENdZkiN6YqdSSyNLezyMpH8fU",
  "key2": "3r3sViwSYk9k6gWWLJdTPFHY5X98CQWeqLiDeCTh1mkA1XjMbHkcF8tDje8q1nZgAQDSScnEQ9oAW74FNB6zqj3H",
  "key3": "4Xdqqk5B1NcuZXdmnvX25mpuZ23jQPRyV49dMSL2xxq7N6hUqwrgLHpF5UUbu3wz1xnVFTERHsdsdXfWB6AFFi7S",
  "key4": "3DGoUsh9ZFiDT57pMWaXRMmuqMCLHhE5BP3sqRRL5dDRzfuZ9SraqGiGNqXb2n4r8HQDPptVyUWduAWBLE1DBwJB",
  "key5": "HuZ1TBagB1aHCPdjzbeZc39YjE93xG6K3kK9ggnJGDcGX5BYEGZYvb8w8UfGZwiXgWJ5WpTiRAJg5TE9VorYBMf",
  "key6": "zsrkkXDSPKA4Ashc68KqCEUC2XxbVM1iu4rJitNFFYZr3AfwJjYfRRqDjx8qdWZnwBk4R6vnRJyFEKVAHY3Pq8F",
  "key7": "Ps28g1TQJ8gdvKT3uYistW4bVKUiNqdSgSuAecQ6sZYJd8ydK9gPjHxzkT6tZTfQqJkPMGVPHwhPvjm2d9h9JQF",
  "key8": "4AU9NUYeuwKyrreNyhRzxUY8myFBvaPdwpTnae1GYiA5HHJTZCiyMW2NF2cHRNdRSuSQbbXzT955FAkQRhWtnD7L",
  "key9": "4R98jXZ1o2nTNcTYfEztw2H8Z6PrU2zhFsaXGCNtCZnT6E8deo9S8HwSYRfvuA85tehGZEf7B9jXY7wZXz6peFvu",
  "key10": "2kzB4upwir2WdApWE4QQoM8Ysn3eqefHdqXtwEWxPYhhzF3Sxo2XAivZFF5BP4RixtBxNok4ZCKr1dr2gWNkP62o",
  "key11": "wpGnVbfzXxyWgyM2s9xatW7VqVo7C61GJtrADE9v8h937Z4TJibXBiGwtBFKwNroV2FpqZSyaxKuamCpeW32VYS",
  "key12": "3dXkWJRkFBo5ewEYKCkVNCMekiWtkco5neeDq94Q8gNJiFzaXJGuYMRZKL4GiQoyMuj7X1Q9iH8SrZotQDhkfhzd",
  "key13": "4LHxdX5vYeUmaAoakXGcSvQqjdc8t8Mc78zoUnb9YBFw3iW3PwKc1VSvcLrEdGdHJza86peCoc6CDRRs9dPSD8Un",
  "key14": "2dC1TT1veN7SFuERpH5AVB42uKcrekxj7aLbwAGtt4G9aoCEtgSwq1JN4ckdyL7AgiFu1Z9FVRTpzs5u4BG3pLN9",
  "key15": "538n8RdwHqhMkYZEz5QJ32VbxZv3QkokHj18fmEiccMWVi5eT1wr6Xj6DTsRfHSanNfrZMXtS7EZT7uxVcNTSrRC",
  "key16": "3rG2LHmWkaQ4GjwPZvr7g8AJPFTJxNK4DuCgzxrBRf2hut8ACeVoGYBDyJhANgSGXeiGbMzqay6veRYWihmXAfVU",
  "key17": "3uHXDFHzb9jKNH2dpuQJdGYKY6wdGrQU1QJEHNovsmkYCGTvqM4oBSJMK2ztbuZuK8HNrhLUN4oxr4wSVq4TBkaQ",
  "key18": "3VL6EruRTqyuYnUa6iNC3TV4uMHvY8js7TdDDDs1sg8hDH6FG8Ze4Zaxhv7LwNhSZ999hHsXZ7aU24jcjJwFTQgv",
  "key19": "55tKRUc1c574X18v2FmqPiVjKANdNFjgGm8eCsm1pgBeJi4avr2MNiCf1fGZbDtLwsZnTyzqGURrtMqvEAdmAfT1",
  "key20": "3W33dGhvBQXeu6iDgFDBD5HcgLveMKwgzsbq7NoU85pPgSunuQwdNqHLJRjnhps5y5nindGjEFom5cFXuwTkTLQY",
  "key21": "53H3pzQqss6uxhXaHuQ2PcYQz2k5xxHFYNSyQdAJtMKsVJ3JVt8VKEwyoTGkHMmRVgHzxPCNB54pqmTHUoSoiakn",
  "key22": "3PKrys6fdm9gZqewWzMKknhXKGVL7J6qEGqBibkRMUoaW7zmuGFSVRiQ6zbtdCbTJEuoE9Ej33NVsAs3Shn1opj9",
  "key23": "53UqPfscn9TLBkBRPjXy3Aw1RAPjEyYtRQxYiW3wfPZrFDtYSNHk9SE12s6wNxe6HGE3R8PZViLgY6N9jRo1sJ7n",
  "key24": "qXbQDYEZZRV5mJQcy5F53borLrT8UkDBP5RPufVM4RShEcpGPijhoXbKQSMzKiHcdr9xZDfiRNLv5QnRQcwSo8y",
  "key25": "3mLfrBbLvZZPetcJ374idEKqHsfcS1TkuBQW31L1fqa6EJy2JDXJyFfRE4fjunnV5Fda6tnYofNPNpF8vEvvnzi9",
  "key26": "2oJGSREW7zFWaHe7scxmsXAXMkTth9wb8594VEJGBfCnEBwqEamRT3oRC4BzFK6Yem5vLZkF6Zg6pEqTnYtRdhbW",
  "key27": "oMy5vR588gnBzSvkBCycqxXDGAopjs6YFeakjjwbUCJq8x8svkAtTJYWEMGLufQLJFF1qpbEZMQVM9CgsqzQGcz",
  "key28": "3MmxJ9YQy4WcmCnQw6LTpaiuC79V2PPui5taUEdRNoY63bwU41bsKCUVXRJE5YGLnjtab4dymXdYmXaBZxa681Fx",
  "key29": "2qghkgkDmXKVV3NMebnjwnX88pcrGJNmR5XAp8ZfP2hKRpJfMN3wKFHy5ekoLueY8DVy29W1JnUhcmg8R6oyuw86",
  "key30": "2jDveNAQLiTvvEyebH1WLj8quDztEuH4qCoAqTUyXZWYof8SFBMUFzFbVJTaxywA99DE39MWscMwYLkJYiYrpTkM",
  "key31": "5Kare5XmBtRKuovVKvgg4btKddVXwj7mroma6CbH2sX2SwfEhDxpHveir3NvD2G1sVHVx72iGzpNbSyWp53r8KsM",
  "key32": "xj4iByjVyXbfZkvz8jDrbxqMZZTvASCCbUCfJLWdEoHvpSCwGGuAdgefW42gpvmGckoZKXiDyuUBffakG5eM5Cz",
  "key33": "UPYEj7Hkp93x7pRpncf8XisxdytamtKe4QQeUi9mMzjmP7mHE9qPgudCv8fLhqHkhqVnAMAVULnVPYNtA3Tbjho"
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
