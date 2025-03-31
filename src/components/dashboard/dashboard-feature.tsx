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
    "3QKEBZHXZXjAwSnXwsECDHSJAKR4aMGjDHaBaVZwB8MmRN1JqjWeEuRiP9LAVfhRmhNJKKwuwS9GyoRDtVfEBoed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yaRvo6oP9ZHY9vkzkXXsD23ZFmAkLME97wXpxr5VfW7JcX3GT2P9GQGVC3piZhmPZpr19s8HkNoW56hwkCHFNKp",
  "key1": "3oMcsQj6m1F1ckyKX7RNUHMgcoRitki3VytWkWH8NktpnWLh44RPo6CunuVhwZYAgDSCqDTTbBvAzb41B7mT5MLG",
  "key2": "5yQ4jhh35xmvg86BMUHqXLoDEeFAWawC1L6h4fVimxnauCn5iZ1MfhhCh2QQ18xoN78EBBGk2dcR1iizd3dkPv8c",
  "key3": "5f1RQ7VrjHVjSmuxWWpkx2Enz1UVaAtkyV2TTCRkYJ46XP4CNTLrjiZiTYujsb24TZcwLthkQGhCdDDzSZ4BHMxm",
  "key4": "3hAPqSFvTx8SZtSEFTgySKKLc5bRGJH9t5cL5jbdrH7S1twhRkfyAgxkMLRNAL4HNnj5ESv5U8HEEygU2kefcJF4",
  "key5": "5J3WSxCW9BPit2T6HJeVUcam2wNUvCsysJdow2WutCNt6c8PYFt5YsuCt4bpX1d9xBs5rjFLf2ytThTgS6FZ8dsP",
  "key6": "3r4UB68Zk3a3zxmUVit9pJby6hrhhdDWBEaMEReuWECYMrEfZnK7QuziDg5AGruvvzBKNyRGWV4qCu4fypz88tvx",
  "key7": "zAMoAMVMFpmsZnsV9BYVP5bXFWX2eXFMAfEH7Ukn988VV3euCBBzZ9tE1N7ru1HadpsYTWor6AbFcWHJjC2wyak",
  "key8": "gqcEL1q6mhCssKisZqCoviFCbSTda675dRhGR5eAoPG8YKaKjDZMYyQosgAkRNUPQztNTeGsXhTv7RG65fjievV",
  "key9": "64Lguxvr9Co8TzP2Pa8HxqfunYbmvKssLN3yJTRtR8T8dGSNY2zTsxRwqyLDkyQiaGpNN6bLbk3Au26y6PPphBHa",
  "key10": "4ssiVzGnM98moG9n2X3adzNtAfS39xELmrt3kx7gznrGmAdcaf8zFUGMxMKrmiwp8Pvo2jPNeA9dNVaoXLx7nSY8",
  "key11": "5hNLEK6J3AW3UwXqF9owVmUZeCrd3CTLmfzAWwW6Cn82H7WycsQoQ9v5QLGUM86PMaUvVkFbovks2Fm4FTtoWea2",
  "key12": "428csRQ8QixZZEhoc4nwwDtUmwoLxKZ7iS8KnmJ1L6i9n1K5tL8HHvfTKee8e31baJzAKt6UkW22K3ju49UeW8jk",
  "key13": "5yCgsNVyjLULSKWVGuXr8y3ExdRudmiqWMGdKxv5mtD9fDpDGti5ufEWJ458qgDFhSsVvGHE49HKLA2Wv1wKzLox",
  "key14": "eBgTPRmeHtc22U4bb944tWhoRBtsnrBGsg6NLJ9Z4JzHBkTZ9trchUTSczpMZHY12APwWGTRgRoSXKBoXP5jNBd",
  "key15": "4ozZxtsHMJBNyshvzgACmPurExVz8fqriJnL57pDkYF3JFbQjP6z1N6rD7esM8UdYBSKkLJe2NH9QeoqVGTPPx3g",
  "key16": "3ausPbqt9Z1hwz4Kdf3ZHnuLTsLaSN8y6UJCCEdooydX26BUFkLxjThZViFkk2ixGX8S6gFwX1B7hxSStfUboQsu",
  "key17": "VBk3AW9JKo7pAYkQuM9QPiwrPk7i6Z6gM3EPr36QQj3FFWL2YGB2tE4m5cSp11hJSZQaVj7bBbFxWeneaA86aqg",
  "key18": "34f16JThsmLWMFJYZSNwVsvwxaTASAZEhSnvyJRFP7S8giNxeJvCN6DjVvKroEc3kUvfoposjV7yonLkGEVztGah",
  "key19": "539NbsDZ2Noozmfy1xgRaCr6JE6nwwFFLVAwcEoRKTGZ582WSn8QW54jSaGs6dYbPLotgkjMem1UahceW7R88btq",
  "key20": "62hUxHkcYrKakmkw65DNwv5MnGywEhxNr1sPzz2VRGrSJ8Xtyzmutz7nAX4Sbo8dsUf3XnNj5CMmjH8BPeM72APt",
  "key21": "dmfwNRELybSZUbyhxwAucRMGsKHKwwYxnNfXVyUqSxgggUstzMXw7Jo6exbJRguGqcJgYp7Pni5cGxs1by8WVRL",
  "key22": "2ppZFYuUnBcZsy7JG2wDqwmXepnjHcdNBD8UVg6ZuwCzGFrBiEcJKYgdwCU5MozoPeDdsJRyNWLygxzp5xisPDu6",
  "key23": "248eXUnduXK5Bur5mXGALwj6qRg6CLTjepP6BqKYC2N65yuyhfAtoqq1XNFFnob4nesiGnHCtamBHFQ9BZkyTYDT",
  "key24": "3MpKumNimnM1ZjXApQgshuvKyrEMb4toMLUGxhcLfs56knoe9hxof32DmBYsugDknnyPg7tKEmcgMkj9dt8sp35"
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
