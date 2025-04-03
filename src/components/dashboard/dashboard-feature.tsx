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
    "4PG9gf2BpHiGRfqcVhUKDipeAHSU1uzseuat44BBePf3tdGKHkouxCGXMnEADVKPhcSvLtVXeXsRPY9hay7k2C4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxqXAh7xu4X2WmxsnJVXHKWKNocMAZ7mAN7ehxb2U3tBTTnVPXAAy3Woe9DwgzAGVjukh3PgHscXxjWkfxDT2Jt",
  "key1": "5TcaCjLzqtJRqCYBpEW2gr4XYvqjDeB428fHDvhR48w3fouNTEE2ussU5sC5epwo38BPXfQXyNtQfFhpX5im82tY",
  "key2": "25JqP7kkweZhd3owYgi2NuCzEgQ4TLsVVRnpkhYMaP2Fzfd2TWf44LiRMQJvwipj1FWBmcaeyxn41HRb2EFpTSRi",
  "key3": "5UyJ9VmtEXjoVrunRaZjk7HuLq46mknt7ayjsuDQKB4JTMA9iCCMvLRFQ7Ji6RnWKtanvPJwtqW2nRzbHEYRdicD",
  "key4": "kHpzxu5ao8NEood553mdNCkwW9Uvavfg27jB1fuDrdA6oCYFMhg1zeoUh64wN7L9K883XhPEZfD6mamDdyvHYKy",
  "key5": "2THsHgemNpf1MdmBjCk281GrF7dhMEjswF86gFRQhHE8ZhVera8D1c34FJcPfUjzSjfFFDeDcYVVCqTh6MtgsRz1",
  "key6": "5H3bZbo68bTR2ckci8ALMDJviq7PzSSdGdD5deVax82eX76RsS39Q7ov5Dp1fySxYmipFA4R1cat3VZtBzzCXy6t",
  "key7": "5ktyac7PKZEdvUcwmN1UAARViuiWL2LSVURdY2EacaXUuo5FJn8K47x1KVBeuNPLVcmTk4YBMACc57araL2wJAqT",
  "key8": "5phSYqqhkTYmNL4JCaBEoieTbrWAqJP3q6rzzrmTe7fxQMA9X4zA4Qgu3gosdTsXaXgT8dS8YS5vj3C5YqEbGBTd",
  "key9": "5FzV3crrmnegFyM5YRkwERjRpgkbabxLxBLSRPiNfHgQijdHZAke7UfHXvfEEBuDTsaizcAcXfHBEYbHmoLNrE76",
  "key10": "54hwfj9HHtpYvKxWwNR7uGHnCmsceyFhhzZYGD7YHwxboNGw3qGTG3SJnmQMEsV3nrC2QWLBEnMX8V583QgkzQ8k",
  "key11": "r7tKB4pthFRo2W6ea41C7x4UQZdoJDR7BqjBTdLSwSsT2EG7AUb8f3kGizLDkoCk32tCDEtfTVPmNTKvwJrqa6n",
  "key12": "3FMjaC1tqsNg5HCbRwfV1jN2BiydeGjHSHLXwEJ8X3JRadYjKKoatMKH3qrSNC9YhbyBC1JadHt45TRdpmUndpvL",
  "key13": "58HnTbZRBMUMt1d8jSUzUoTsL9ziNMThkvygVgrd5bN36Zern6VKpCwKYjM9VzdZpf3LQsaKYjLRzg7v1g6hxSvF",
  "key14": "3EzyuAUQpi8ERM5gKvbeKqwAeSnSR84cRtbaYhTCiQsgB9M83WR6uT3DUx4GUSqtHTgsPjENYfV2YjH7JwGhJa2z",
  "key15": "2YENUiyw3sffWozR8WzSDJgXjjkNgXUWufgJWxAN355HHkYRCvJCBsehDWkRU97JU95fwbquK3zkv2o2E6nk1QUQ",
  "key16": "47yqjY19scxgoP5k6L8ixvg1eHapq4pGw83QNmu6diuirqaLH714jDpkNrbXzaWysAHesjzLNukqJTGtNGXVhM8X",
  "key17": "3RJPnjpdeZoSeDe727WWNPjbiKfxZKcRU6rwVzRC3U5Ga7q6JT4Fd8vbDmLVFGwzeS5DwG71BHR5uqFxo16kiXxN",
  "key18": "3hLjXo9FyfaJwSpTU4vMCarddbLnA5eSqahbXtigpU4RPNyziBPCRZZr64dfDg5apXSxrSaZGjG7mbk73hQxURjp",
  "key19": "4SKF6wDpJXB2LoiYedmT3Ucfxzh8gDc6dFZrjYmvUCAJm6zXW5ssuzXwFz8cJmPoh9Czt8uGBh5NE6u8cP8t9zkE",
  "key20": "3jySzEpnbVQK9ri192bUpLVNvuLAsGp2mvPsTweMiLC4Ft7JsQvwV6JqXsCyG7KjiBrneSerubqrqq89HBq137h3",
  "key21": "27P4KomVrpxjamEXsPayZowza4kP6EVymSMiyR6dxeqXxB8WKCZrxJcR7MHBXqjtUoqwt61rRrU71p6xR9kiRViS",
  "key22": "4px19a7EA5ex9yrWWJcVMiMeVTyAr5eV49xPKimorKwAKhMKpByFyAWKe8o6fjJNgBNWjTWTeY8vifjd3QXnvpPG",
  "key23": "3XCnGcbVEq6PJ43fSzcUDt58kRQ2DiXjoJoYG3UrJDS76YDRa3Dx6rvfR2CbPbgifXkAuDQYFfL4WBG5vLrTJGCK",
  "key24": "2d9u58i3wSijCqVBxFUyqrjhz5c62qcqjJuFVbJCMbYQD89p4qe4wFq7pW1noFN6LzJtkhJ8YmJy36mXxBRU6cMM",
  "key25": "3oNT4VcorSF1tr9gsSDfbeYgrFFGL4YzPzgiNXfU5x9hJBAdkr168xz7FESJuucuVqxLDDnZNu86qNAFJSzr7u1q",
  "key26": "59R3r2PAsJDq8HtvbDP8t3JWUkqxPPoZRjoXusVHcuWdthiyshQ8QhkcRxnotHhUyNU9fbNgK1EDvvKSvpUNjgyh"
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
