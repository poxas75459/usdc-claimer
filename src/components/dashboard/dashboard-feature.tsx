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
    "4LLA65ByVZ571HoqqXJgQqZ2ZQBt3m4WZa1yGjiVhvsgoUcHQ5mFBopiEwAUjt55iUeZPbzHtoQKhKLcE2u8pZvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5JRgPVFk551Vds87AvnrpVYHU9woKJ4tPJY1fr5MRi2MLCgMLuM5gaWnevhmYf6AwkmYBdFxEbJDAM9nmYnkFE",
  "key1": "vFYdAyWUZnNaBoinMp8wgXBvqfmeXN6Xdx5gHGFiQx2hfogKmcCj3Xru9tHHAuhcWmh6jZcbUTfajcx3gSDMWHZ",
  "key2": "foyZT5Wa55o77w1nbRxtLBrVoS9MsamveNktji645NivHvhKCqftu5koGP3eTX2TPbXRTjDQV9mi7hgom8R3ebR",
  "key3": "3GGBc5bZhHjiiNytVFDAF1nibG5BynN5uVfMFyexh9TUkPQxUir12ouiStCPQv4rqswZFGVckfBXDqkDvPGzgFqD",
  "key4": "5A3icBxzXBNruNC61qTGz3C3ZQvjTgFpG4PjHoJGAd1NXHF3ec7vY3gX9qhMgsJpiXeW5EwEJQFNYgES77XSK5mb",
  "key5": "3ijo1M2BvPN6qQa2beZE1EQ47XUEcWvUjp6cgxmV68L98sRrp4xqv2Gkr7bdWBJzkerwQgP1BZspLRNwsoxPCfcJ",
  "key6": "4Az3Esff1NZncsoo3ecPoKh4tMvrtavL8SwsqujoEDNSukzSLgJkEUQTVSQt12KLnbdBpPgBNyLNrUwh47KtA9We",
  "key7": "5hfMngyVHn1WbKZVH3ZPv4Ge7W6LaJ6z71MrnKuRApN1bkjBKy3qLKg6eHyJ2EJfWHhwjowP3XLwrWAvEQpUJ2hV",
  "key8": "57SEHdGGfqReDaak6ywEKF5RxCY8Yr96sxvFg2LA6k4t3EANnbdwwAjSKYjTSjEgFTRnRN4TsHpbT7wYGNqRKPBJ",
  "key9": "5EtFVgnQEW5zy1Y8C4NqELuPCNxd4tsKVvwkq1Ci8uWyAwkco2juprZnN2vLoEoUX8vtLSe1dhXanC8uuqwXw8R7",
  "key10": "2BpBCVekYLU8PgiJuf1FcFTX5E1EczbUAX7tNzWSo8AJY9eiRTtbWjTj18mApAxi4a8AMfPbU6kPhDmAXLBnTrXA",
  "key11": "5H5PCV1MvTK2S7vVBNumfNBMWyWpdfTatDEohaFTbKnh6mbEaBZS1augNojazvpa9Qn5yurP41p4MKqmtWpG4vfU",
  "key12": "a3FqbRibiXEvSa2HV3VpG8ejCRcuxSL73tBDb7R28Ja9zTENdpQTRUn33jqtvtxNeGmR1FZAPHtX59Bdz297uaB",
  "key13": "4xPzmDSLuob4pJuf58S6nGbhaEJG2auzDE2APAufbAU8AhcL9Sdt66xKNp2EBE9ygJWfM264zviUthRZLYa6NNze",
  "key14": "4TGeg8TL6X61vH7A2USY822rg85cFCjy1onV9QA9vqe5xnKtHYQYaRJVz6BVn4qh9HfEQTT4vAsX5FHBM5A8VoKn",
  "key15": "33taACftS6jPq6SpvTTdNEs3gBqXdF9WmRyMLU7sM8CWKnqfnmrAWH4dEUgJwxgLnYE5wBapR1XhcChJBjTW18gd",
  "key16": "4uH2iikQhTEQ8HyZEziMK6AshnEN4P6TWFNJhpWrwNKgvjppYibRCYS52CJQGQRWUn3pGhyhYEbqnvLczCkHTBFa",
  "key17": "55g1JyB716KMEzn2xmTyT6JYYVv56QgJB4Ypd4ZGLSCUPW5tkbeSmNv6DU4wMJBLbmVxnfojYks92QBHyLy9Lbig",
  "key18": "4hDUMtiE7AwfQ8qKyxmUVqcvUtpnq539PXAGY6VFfqdYGdhebwg2zDTbimbytUyNKCWB4pjrsu4hPSMzULCqFgC7",
  "key19": "5Tbz9egQNoKTwzwpzfsk1ueoj3jDsZFZDWZRmnnuYZS9Y1mA6qBJEvz9k7pdB17rqRJTN9HeCASe349SXzEpDNPj",
  "key20": "3vQ5EmKKvuirvCFfPo11JGwTLph1AdHQ3qRrZfNHf5HTUMsHy8KmZfLgz1mhgwjxCkCv7t8t1Wkt4pHxcTSMmCCr",
  "key21": "5rXqMAooGY2YinzcoXnHcuRg85KHF8XLiftfhhMNHttTUpWSaXvfJ42nkySSkFZ3fjJJ4zVc2HYBSvJNkEYigQzA",
  "key22": "387AB4v5TW33Nixj2LFwFdwu82Ryhrp8Tsz4725Pkj4Mrt7zktuP4LNumkHC1SJZYPLGBSQGVQkLN5hdjaB27qDE",
  "key23": "2EgsoxvEuWwWD3fhkarkbayqgwxGi1MkC8C9jroW6DibE9AMrTE7NFaFMVG8wQLiAeSXSMhbaVECPTUWCnQUZ8mh",
  "key24": "pdqK2RGffszbiFGaMmccCK1odwS6ecV2rb5othi1mQ4SYqikf7Y6ocGnCUuSXAYtn92JcWcUj9aro4vzQezEDh2",
  "key25": "2FVYnqL3HpBdWFTLQE6yDEyqpdsUXWjnb7tgR3zAWqboEgTaTuTHmoTJqvMeTWRUQvXKgC1TSNrzPMP8xNBNmnvA"
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
