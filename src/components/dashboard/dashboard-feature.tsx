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
    "2xAaB6wHaWgykemnhuYiqwN9jGY3V6L35wXVqaKsdLCSFQE7S1WPmQQDb96TghMVZfxqGuVQZvG1m4P5CG6gzu99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhEiybdCW1h7UAiKL9UMo8hfm9WizoykUiTVqaAqj23HZ16dbEe7p6cNZdQsSGfMkJUY9QGoxBxhS84t8kE7jdR",
  "key1": "49YEjBV212egEtwfr68EqDjWgEPwo9CcsQghddJcA6QHfpEH2fRNq4vqnPNEMnRDpCmzKLjQvpV9kYpfTkewFBf5",
  "key2": "5Jsw276QafHTLNWcYQ6GYgJf2Trdzp2P6W7wtYxsmi2fdZPjU1MddsJS7C2tD2kSZMC6wRQQcsYXX5wLodcNDKYD",
  "key3": "DHVqDk7VYELDqHg1kYSP2twMN1wRyK7oPWgMMgsfW61Ssy6nDXosKf5NjUR4hVumGgv3rdgTGJhpS43HJsM4PcN",
  "key4": "37x1wfcrR3hMKWgkHw2z4pmL65MGxt3EKTH1dk8a3LacZer41NsVxedRVi6GXWwsdNnjk5jK9X3etsYf6HYoiihQ",
  "key5": "GKYJF5mJu88MGhwFe42UFDrvbRDGxyDE4rPt86auFsK9zMqmJVE8X2VP1651eaci4asnJDNUEzP6jQZEuabBFbK",
  "key6": "27c92LMBWpcHZeXAXfsGQJctYyoDbtDWembc98Qw7QM9cLvgWikn7bGHwbyrhesAXi8SjZZ6xgD2121Ve6Pqd2LN",
  "key7": "4GC6SmVCLMt7WX97jGQkJD2ZXuv5kLYiPbKoSxp1TfS81pUBrngg5tFY7hLNRzh8AnyprHf5xVLLWaSJhfDYYhrD",
  "key8": "GdEBBsxSGNzt5125g5W8xHmVuoTZdnHkExa8TwgUVHgqbtXMZfen7dY1bZpYVbvUpvd6WKvqbKJdRY8BHPn1HG8",
  "key9": "3pmLHpVBJyLGFjmuW1fUgchwuBdxgHCUmyChHSUy2MNT5iHDa5MLN4ZiwMdrnBrzAa5s7Qm66YhmuLuSiLMvvPL",
  "key10": "3eZAMQPZbdAADGVaNUFT7DatXo1wkGBNrY2H8Xjktfbqgm6eYzocEjBMFxjdoST8W9ikfhj7tLTSn8itysi148hw",
  "key11": "26tr9MfhE2c9E1Ef7PmQvbRFQeWhqWXcswYn17x8g9z9M9qaquUY9vyBX1fykzPq8meR7wkkWyKPp1ZjSPg1hdAg",
  "key12": "t3FKNjrrs2hTff3sgCFsRQvskwNQwqqB9Uk3QGp1AjHx57EqhkjWvMK4rBJReAKE6TjMVYGwx5xcz6F2FHh3Lpx",
  "key13": "4BWPNvepU4TAyvbUdGBeeDCrg3EeHCjWgWw62ebnVYXZ7zwWNv3SZexhpniUSTnujcGUeQxkpxi3riJNRkTbemWR",
  "key14": "3Amda9jpBmEsh1PzPMXVvu3sn3enhRxfkmiearpb7qWHbMazCXuapeER7qHxhzuaFzwYaVBGDuYuMoWPrwbK41gn",
  "key15": "5tk5z7jybF5Yb3NpDPAwquPJo5gArhdx1sfYi7hQ5kT3jfMgFjtowAjKuQa5RyALhfq3iUW8yzAasT4iaH1238m7",
  "key16": "5rdTWJM6CtaWceExyyBe6NRZ4p1AbbGev85KXpS7tXCJB1389CUpxh83oZgqpo1R8p8L6BoDvVXTwY2VrUu4C5WE",
  "key17": "2QDss4bF8MDtS5H9FRGXLFrnjDBJaHMJFwXQvkGq8HbCxCpTLMjNMa2nkRQmkdmqSLJ4GRrikRcZ7xHprXhLTfF4",
  "key18": "66GwkpMqE8MXV58xymTCqNbsJE3MUmwnWvHGeUqN2wk6g5eQrpQ7TDzrpgN4Sx6iu9qPuocjptgRsL9ZM3AfJAEG",
  "key19": "2Gc8q2igQsNjpvwqaEAvLj96CcVpntyF2KttG3r3vgZGpmA3v4avhiPPysBvcG18HHdb3Mih2sUbASw1QJfPDAVq",
  "key20": "43SUVrAX4zosVwGSfaswezYTnomtV71n27PoN3AznkDsJnWkso774J6gdMBeJEz8tavqkDiMBtFnJair2xyW1dYw",
  "key21": "4fdopUF1gKynsMms1tKd2RMXAji7wxuUdEBab3jDCFsHrngEk3KvxYstN3NbBdB7DsbYDG45n9kyjvbxEEccLMmP",
  "key22": "L3k5nMuesEzUjrpYtvq1xxq5EJ9jwiQjvqDiB4kssWh7pyiqhmhSfuhHe3tmSBdzcW9b2CTYgWRZNmC75Z8chiG",
  "key23": "4Whwdf53o6j883AhsRAKRhauwxEaJTkx8bH7na88HrgvFDE8ZWxBAwt2nBjiX2XeHnyC4q7nvkcMpUQtKtmai1Mu",
  "key24": "2vPtm2JWRUzsPYzrhDDBX85kN46tTmkrntnofufV8oYuge4JHNG9P6AfoVERwsf4wpoak72DpQe1XEFPPndyF24V",
  "key25": "5Z9saDjSZWZSitg7MH48JZxDnvzbzpR58PCyGy2XvQ9PMq9WGfhxE5Ni5rU2fmf9rqZ3g2EgymypKFaAHbvpbhmb"
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
