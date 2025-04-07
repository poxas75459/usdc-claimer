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
    "2yYKybWTy3LCbcS88z2nJFBYNf8mvW9FMA3eRtfXmq9mtzBr7AS3iHUbSdMFjv38ofv16HGji8oTgjYgeS9yXar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrVs2rhqS7k7QJV6smMJY8rT6R3TutaJtM5KZUJKCCd9dmQtVoPCMFreopRoVqBV7F7V5jDLvzjdd1LDZtspEYU",
  "key1": "5rja4rRuhyotMpDUPWLTUYmgLdwNnrcCpmY9cnErjRaNQXh7okw9RpbX7mbJg3zKfEnLVCZoiJZG2UVWY94D9ZEz",
  "key2": "5g4uAj5eVVQqbN7sE5BYz5jtnYSjmTzb5J9KSycxq1XLtmZn4DSXsmDspQupoS6tXZfRK97nYJ8qLrfNPn99gqJ9",
  "key3": "C6oSLCtx5oe4qqBR1813Nmo8ZcV6RVEdvnonrPBnDPeyia3QQnpDLy6P6ueinycaymMhtcEEVMVY8KUxfG7EVaT",
  "key4": "2an1qXeyqxjNvBpP3gtf75mL69Sjg6Dp9VVczJKyyEqExVC7fApNr5PykPtrtYHcr6jSJEARbCPbC8YhHmpoQBva",
  "key5": "5F9YNwe8KTAVqs1vZav2nSHPzoKVyUiFKYmT8BoY5YipqqWrs1dggqrsnkdtWzELd9qXP2EStZjDNwwEijgoZb76",
  "key6": "564NKyD8C8QxNHZrJNiGiza2PCQSKkeSFzd7VGmVJVzHJpPm5u2ETFoSPbYqYZ5dwNyovL5pyhJK5fnaxKDPrykz",
  "key7": "4MaZoRpXGysZ4gcZqDrq388dgpqrMFKbQRhEDkUW9iF57dDu2wqzJ8GQiTX9jVxYdeRA7Mu3zy6ij3oBVPtuTzvG",
  "key8": "3JgPj4GpYSAhDnwFQEhVkJwrScZxjAxpdJ7yoYgSJ8mpmfGGSrFVG588pUhKcnaoQrnLLikFFHmxEwseZ7g3h6Ea",
  "key9": "5od42oJeG9GeYvscn7oZeYCDwkDFEMbcvKb64FZRNvB6BnDo2y7pWjXXdWXXpAuXnWgxTjhc19xrBsA1CdCpYgAx",
  "key10": "5735ciBSdsGvk5eWdJEUj1k6tcC3cHfNeZxBj6P4oVJeazMeRWLqcnF9KmnFtKbmfxLCQvbQiqnY6ALYQ5pebSM3",
  "key11": "3Hgr4bABW7EqxKLVpDmd3evHpZhEvaxTvYy4PeU4vBcmXzqosUw1tkB6MALScnmfbkVyqEsvXmMU2fRYCHHUjeH",
  "key12": "tYp56kW9L6Q3NgY5XiabvLeBH2UwGZ9WJp8FH9aw1EXkz8xB7tBUweXdHTFstvD8rEerCuhUGvFJ6wFh2KcZPST",
  "key13": "2bS1fdLjsjdwSMKWbKjVmMZ64FGkLKj561Xvj6NDmN3Asyqh8upkqfJV54QQSC1SE6yU6yxpuFapXa685zA6u2Xj",
  "key14": "3oYM7b1bhERM2ZAozvFvyKH3UahvfKTTJnsfDWJ4Ndn5ut5EvkyLs78Mkw24XhoxETe3E4JHd6nXCt29yy5cAs4W",
  "key15": "YRZPzwDzA126dquaj71MLbhBJLfHoYDvQvKkk55okcLiUVSWj3QFW47pz1EJnWARQmkNmoMsxhcYmNkN7pBeZik",
  "key16": "41nvjQETFHDAwsWu6TZGrVP4hhTqnvFjdMyZYdimLBCH3SwPPeGKeQSd5Y3dWyzMz7c15yYd669o1U1kLnmvTr9k",
  "key17": "4h3B9tfmVEVfCKG7b5LTSibAmXmZixFkvwu5rvAWtgCkZJX2MkEgrHAs7bCAcfU1rwaYXuicD57mGeUDopQXkLzs",
  "key18": "4aaVup6ut1GpFMfHbtsqYaKrGM242NYtH9Rixb2xbpaCrRpeJAjQodf98JdYbpZdfdCJyXg7ut1iet59GiZp2Acv",
  "key19": "3q5Uzmd5sfZeDUDjnoMXGKErrQWobA6iBRmcbp2fVwnmRcBxuFgKwFojZXBc8EwhTALsdoJppUqU7Vb3HQgJBuN8",
  "key20": "3TUtEegZ3veUNTsii22iN99eD8WzM74gkN57FGZhfs79TpeNESGdiapqzx5GxNux9G5tYur5LPgVBemaovvEzQHs",
  "key21": "2YfuqWLzTfMHbJtrSnkKGXQyXXT5VtCz5n43dg6t4FpRQUu6vw177TLw7BH5oobDqzeF3bB3auVPZm81u8PdMG3X",
  "key22": "2qndHD5oXHdpq1Qe4oJ3Txonj1xb9jgWYnriTEKFmhUiiPmF6bmevxjgNmCby9w1VGjhuoG3TRg5184nD2CYt5KS",
  "key23": "23Lv3oNSAvHoE82kBNmCQo4aPNsHEBwxhQFbzvXzkpAbFKTuC6hCTEh36pesrSP1FfNN7hDrcfMFrmFJndCDN9Xv",
  "key24": "5d6nHhE4waU4jybkzxKP8HHMm4da6DkTxsuGFqfDWsMfNqCXkBL1bgnJ6yqoi33LttaEi9phrGcW7ZvBorWJLZBQ",
  "key25": "2ykuwCDdMxGKGBPd1Aksw9RWFxAQv7QVLr3nLoLcXbym4rKPjmKbFKJyspaHd7fZdfK2DQxtpRThc2tw9D6FvzHD",
  "key26": "4u2a91zaJ5djJQSLiEUpF2Efgf8cvUSs73U5ABn3nD7f9cH787gcDrvR3dGcWaLANgoUnkZzeoJNuBTGB7VQyYuc"
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
