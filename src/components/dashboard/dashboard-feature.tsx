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
    "4xut2QxiwbpbYcC2bES8NnkKtMmLK69CPA1iPq8spBsYdjiFASdPBWDyZaok5VrqPZ9U3sZtvGuwSvATm3QVt6gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8FEoqEvGkHCtjtQAFktj7qrmwX5P7fPjfQf2MUgt2pbVBZjhEFTZM6t2cuXfrzg2HixfQE8atFLaBbKP62TPsK",
  "key1": "4xfAKUB3S7PG6EDcmLWkKsvU46rkUotPQKRQudABfTkUT5KYP8XAZSWZEYCc4nTWE7AEEWASDZbAAL2zeRNNHF61",
  "key2": "4Qso5it8jFeboZfm66BkS2bkf1wp1nrr9rY5dr6HriYpYovM2k1qkJR7utNKPvDy1TGCKUQsRqaGfoo13YRbfW8u",
  "key3": "2yjcRgYg2sbHqtMwg5Md3GzG74M1WfF3ZFh5Ccw65yRnsgPa4X4JeEHsrsW1bz1Wu1PhMsExuiofFLD2BLtrQZWF",
  "key4": "RGQdfB8389Mmv2dsVRn8AfyDQt49btMzZ4Jnq2QNWsiYgA6TzuJ6CLS8icXVX4GRyphPpJH7pZVvBqdoWJ7ZTa9",
  "key5": "4obMh2KPe7agvQtyEVfsnXHnFodY7PoQnBvmtTNRtHrFGAcA8ZuTJukjenG2ZAQ1okbwQs5sJdRUiywvNob1csZA",
  "key6": "3LsptE2ktoMYmbif6TcXeuXS8r7thF25aNv4Y2HpZqDgXDBBDBawfJZ6ndW44zVC6p8LwYqJLqR25S1KCUg97VtE",
  "key7": "5SoJzeJeRN2kczn8mZfBhSjNU5pHR3JuhJe7F7nUkS5oxB9CJuucgrFRPtL6EHCev1CgbSbXc6QdCZbudLsKwHZG",
  "key8": "3UfUF49QHXZeAGfBTw57tqdatPiVUJfMjz8irH1qy4AePVMgi2N3c5yCS52dR7X3zDuApHWeRRccqa1hgZxEgSAy",
  "key9": "5q17PhcAGMvMk4A43mHEKUK595JEu9SNB6AYAmEHfAYHsmE2tnjV42MVEVRpKfBnhjzzAgTMbe2GSqv2EUeYiyJx",
  "key10": "32CqAbd1wRPbqigRN9ivTakfSii3cJNrJZHTrsFHSyMgnQodtnmRRoyb6skTq2oLzD4q1SE5YWZkzfJFpEsQGYMb",
  "key11": "4KCD5CAdHhJT4sS3ATHj1h8F2z5cibkuNEjVDEXfq24hV1r12GLKEsjA7fmtZwpLF3vZxfHpWzha2tjuLEjdx4SS",
  "key12": "P94o7iRYwwPoHrNADycKMA4whpkBpVr5WvWTMX4BeZNao476u4JcE9XL1uvYVRERhGDkxTtvoxbtFmSZ7doNE5j",
  "key13": "p3uPVD1AMfogDho82tAmDKWnB5Nna133GJca2oVq6XrB99fvQsrsDho95G1Vu71yeaQ1FEw4Ty9D9uuREUrkkje",
  "key14": "4CZxMSycUhGJ75nX17YHeiNrEYef9hGDg5aBMA3dxYua9Hq4eK364Awt6HejfpS6kQrjv29DjDTbWVzaa4ZaXh3f",
  "key15": "4bdnuLZYpnD5L6SFPk17z2K3zxokyokCKZdT16AobWLSicZxhXtThdRjUJtZpN5gi4RNgLFNNpqdEvWrEiN7pTVN",
  "key16": "5wDtPUaVcNLnvtdqEwgzzfX56Zj8iSBYuLWdnet3pcVCZ2FDHYKJkCV221afd5dTnAZLxqYRmTKWZNkrAWtXVamv",
  "key17": "4LvtNBKY8FPnndfvZW7pnDNXLdHQATq3sjpnAbKhuRqwijBLbpbrQRvQ6UHyHczaaSfSfxYPGTF4sU7WYMVKhed7",
  "key18": "3Ymo8iv1i1mj2P5GTfZUQ6sw9V6Ne7hwQ2VHst2wGKt9sZ6VdTn1qZ9P226Y22ntjJiBkep24F4aThuFFr9QaTdT",
  "key19": "3nhQvnfDVr2hmohGKxnFnBSgTeseVQYTj9pkrqPfMrnWQceMaK5FnurPWFrdcWyZWhiRziBdvVpaZPEMiKLyNdMQ",
  "key20": "3EJFwSL3AAKJw26VeGxzsF51yb1CfozhMyz9XdsJcCF4MXNGzVRBQLhDYgdEuu4DUzAhfxqsyMjzJUE72rvPjTNA",
  "key21": "uxZs3m7Ad6tKR79c4Tz6fqRLN5btyekN2UNRWPpKCxNePkFnsdrNMAW2u7Sa2wqq7cAPENSd7N7U4FrmjeCgiAb",
  "key22": "3x2jU9ctXbYg8MYVG5TqEPuRoQthcHNC4UX49tMK8vWVmUH7R9QEWRTWPuZJnNKrBwBnEyLdQdq6AjFfr7Xx5opZ",
  "key23": "2Zcnv96hsJKPXz1Ld8yaTYaDopDhoEXda3RvNauepX91VNPZnQGsSCda9skTqu4KVdYKJgCoZFnLewQ3RDJoxtQj",
  "key24": "3kjoCkNG9ddaffQajiG3TL68hW8S8Kj1MyFVQacB5qvU7J9vDPAnwWhgDKJas9Y9djZu6RntyqM6mdgKLYRiQmN",
  "key25": "61MLpe2zEmbg4rPVFoCDWCrrGxMtZ8fo1AUhtPRnteCfA8L4BYnq9pBQPgnQhGh7T96BWnoKaUdqKjkrEGb3ahrj"
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
