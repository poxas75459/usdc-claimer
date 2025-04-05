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
    "3vMBbUxLQr8wPDS3SiinhpAsTfegoGKxTojmTBMyiq8aBuhQF9UWHiQJu4mXGvj18PYhpy15UESuXQj1PstJeQzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmdY9YwRV8aCfVRUxA5eXqBSqWsRmyLhMZVQWLY4Z3cyjWtjuVcRZpsnJWbo7KaQFZX2iwZP4uKs3fEb82WS3fq",
  "key1": "2FoReQfAcXfHipVTH9WmDzfDwNsJCh96yoVVEHUpjcji837wESvuWLbiaN4udvZ2oTL9LyTke4hmp2NPTJyeryPR",
  "key2": "2emq36D3oBueHwjfZrZe44EzKZsT8adv3NybSjUY31kAo4MSYYeqcmNBKaerjgTBDpmhbGeGYxaGYCfnXwi6YxXM",
  "key3": "4SJQV4DEqNBmQtkVEqrJ1QCWZa76FYJma5ZaJh6rmYrsqQDh6Q2WA82iMvGWFv8W7RA8F6tCsoQvChSsZCMehU6k",
  "key4": "3jBtH8Dh9BUkugGd5y7jgimVgwVToiQrkgHp4xWyP5J9pRqcRx6ENFFa6QxsYTwyPzzd7FndzAR3hnrRSc833TXd",
  "key5": "3UPMwcscT3C6TyZDoW9LZcjJ8izYqc9RdYAUb84zkbaMzLuDfTqoeHVDLgj89dvecfix4ouQYHbSjpZBR49mCSAt",
  "key6": "47vUW5jfUL2w59tnwNeAMAwX2XMdm5rj9TSLxy9PVQff6Qq84BG5umV2r1zmuKyYML2RoHDFn4Cv5KSJkwMLBe9L",
  "key7": "3GuHBwNB3VYEvvahQiDGAMmuZx6SagFQ7qsfFNT6tmvfSH3ZaNd2rvNQvnoanZTEryTTbphqD83fnu17TRT2WwJa",
  "key8": "3Fm678L3yKTinp7pymtooZeFRJVhUi6ptGqSrUeskzSnXb5yyB6ZGAEaKcBkVPY79XCab3Rv2hRLrbPBVjqrDHMv",
  "key9": "5Xsifs6XVEx6BwGzM8Y8P67BWDD3wFMWaCVffMxdCdrQDpe1GFDXYUP7mWjuuebnridin9M655tx3PeieWXkL6iu",
  "key10": "4YSDhnj9Mne49UocY251nM8Le7PcYWokUU2Z3pF9MXwRKvvXQj8v3TgKqsQRaPgWpqkV241AAqX35sBmwuxe83d1",
  "key11": "23CKq4nM9jErJZRWVJHS1cUKE6SVxmEnu2qKx21XNVq6WhZA3MxjooMoxDmhuURdSWL8V68XHkfQC8cLRmVcLBzM",
  "key12": "22ryrnAsi9wutsYL4RqtDmAu7iBxhkoC8YXage9nF99m4ekmjYJiBf4gsQefQiKbqCf3jhAFEy1cxukjiR1MG8y6",
  "key13": "3rs3j3Gxtuq6RXp3xEkGpLkbNk1NfLG2QUDuFADGYsVtyeYpuUxxNgQAPRmHdLTbC916n6fimjbpo9cVixvAQZzx",
  "key14": "4X4RU3Uryg7i8XkHNnHUtu4hxxoAkdAdAfCzFrYydMmjDjTRZyDZFFis1hPskmuEwhdimebsJYeJnC81d8DBrjn2",
  "key15": "2RNH95n8JDehE3uDd7Vp59zUsxMkQwCz9zSDNkNPEaMFJJJeii1HWV9YoQK8QjUPqfA9jRke21kk7J3gpykvNgxy",
  "key16": "5e1MXZUGyfyirHZvb7WUNimthneR2AX4amNrFddZjxgtX3h7Vh439PFFgi3DNdvSWFXheJuom9QDUEA4DuGCFQu",
  "key17": "3QJuKzDLDXw88ENn3h8UBxhezgW4XW4LX2i74nrn62XyNrRT681ief3XeaRWoWhgnTc8cTiJ5mhvabMUsGwcvhGE",
  "key18": "2AevMJSBQfiUhaJynzLBbBZx4mz323ZYA6Ajn2uCfmJvPBAbnJnKhP1F33C9FnAXmgbsCcspMiMjF2eG2CscJJeB",
  "key19": "2kb5tRtmnYifb8GSSLHPQ4L4pFhd4xswi4ERgHMPUT2rZMRebGw7nTiqqnuoeESTxQBeBjSoN8ce8gi6aarLESDo",
  "key20": "5bhrArr4MkfwVUrtWqHdJogtsex3E2PnTApg89CNYj8hnQmBpeWrvzhtPh5wkBSCxav2hVHAdar9h7tcQk5gGitA",
  "key21": "45Wzk7pcCihLePPrPAdKjT13kDb1xLowNtepDEzTPAwX7eQTDDyh4M7hLCFDzRHZDNhaCTFyunfR5Hv3sZfvNVa6",
  "key22": "3XynQUAXgsRAqmwsUY8cnWDxUwxkW94f8jqdDroDVm4B1NtkNrxsqSXWEcciubx3wpwp6Ugw63mgxpFb3LunsUfo",
  "key23": "3sSL6JFM9wEQtMFhcyvHpfthSwUqfAbdaTzSHZYJG7iLtgt48kxRRzBHVgMSCJgP14NjKfXRj3myxQgwBvhFjNSf",
  "key24": "4QR5xjzbaZYfh346iiMFPXCyxtasB1oArwxV8FS3xb7Jq28eiFRkVBurfwMv9RjY1VeML7aKy98fiwGQvM9z5dv6"
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
