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
    "F8JUT16WJZj3QBe3xvJ2rst8hVSVeifz2p1etUJBJuTNm2npNpBKYBZANFhBrVdHbeqfNyTV9FQz6H5oYVvJKkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTsq7g4q6ug1NrvXiX5TEtiRT41G2GbMDugzbPp6By4Lh3nsqaYdr918MdrU1ksoXaBg9d7DMmQHUuzvs42gns3",
  "key1": "2DmQEMb5J8Gv8rZjNmgbZoag5BemBjyF3U4Ts3HqA8cFPPrSL1hwqiStB9aH9S2jUkHaQcnwjeUmJhKv7dGANAr9",
  "key2": "5aAAEb3Bv4jVFjpy7Vw8PS2Ai3VC6w77cb7QTZwmenmJQ4qZWZt7pJLaGQC8FncBneDy3UpdgBnqah4AxeGNAdRj",
  "key3": "674fUL1F2Pbvs5jTf8PATTkhs1U61EopWMRAssp9NDc8HrsMypeMmdZKWyMVswUGHoYi4746W1LqQjSbX8gsjYTB",
  "key4": "x3atcRpCW8JFBS3W21mdB3MPciChKjSja9nNSdKP1x8Bmg8YfeasiUhWGRkC2i1zTMPvLczdrT2gjR5E6BUHtNT",
  "key5": "A1Tg49U1RKSMbaFrzAKsDbiHQCxFNaKkBCMF7rXucyS3EosdmG57wZUZCaRk2ikJyxRkHEeVjXw47QCnVdSRQ11",
  "key6": "2WvH6u8Cmdi9rLrDjEvJsqvo7GZM8eByDgb95iESTjXrwTztngHssdCreo3hzFAAXiSb2ZXRZayGVnbuX1mXSSnG",
  "key7": "5ga3HSGgduRtWMcEuxWweLCQUVLohsiVWrxbRhXebbrKk8Czntxn44U8BS41su5S6k5i1SMYuxg2aZNwYgcvvjUb",
  "key8": "4AkuY58HjQNPH8x7Pbc1ETC84WMehkZGyLHdyWPmaTYUpC5f3skHXecahiWw9Zo1bkYvXby3CDZxDP6Trtig9JLZ",
  "key9": "4LdcpNwyd6ch2NGJqrTfs6Wv4jKjQWkJjBGTbpVJgD81eYoTBeJazKAPshsaHGCAjxw5pYfWZKiqunwi5fxp6hga",
  "key10": "2ZY5AnF7Sg1gRfTUJ5sjeKwTGRbtmmoTqr3AA3qLDktjNb3nat2dKSHVB8AjuQo9zAQo4wvtFaT5cZ9MRX1NU3T3",
  "key11": "4xNyytY2nZzcwvPHrgAcTVz8NVoNgM5gTNM44v8w5ixQKtJY3m9F5TEb96UPJS9KETjX8gJk6F3bxpYTiP2Eb6ph",
  "key12": "3Y3qfwKNrPGJ2aK5LQbcfTC1jgRXZhUBb8b33XJsE1FUnvDhwF8JDVRzHvjn8nwWWFHhc37JvEXuLuoEhHSc46yk",
  "key13": "5Eceka5cimNUtToRQUT579bWCTjqm9Y5kqPKgkZJsaaBmsyJHPAKvoQAdT6D7k8EETud95qzAyRsMGyyzkC5UJ1o",
  "key14": "5LZjzbEHuhKp2Jr4tVWLG4g4SiXmZ1TADq9GKG3LDaY4i76uC2KTAJPkfR94QVuHrc5zmoTi7mMybqsC49xKQb2h",
  "key15": "vGc7gcxuKUoYicxm6gueo2u5UYtSaQ8hjYHymxBNJ9as3RdPPoPjErJJMN5QVuKHhuejqjywT95JjN8Uo2P7jZw",
  "key16": "EeM6gPcTYHG3QRehevaPyGF4QZKW8i3sqqHutsXMCvKbMxvFGJiQwmVAfLKUHEYa3q9CxhTWMaiWTriVvyi2KgY",
  "key17": "2rfftb2o1dqzXfLbxWKWLBNQWLXVNLp2wNXXytSdRmgCTCHb2PMeNBASRpGsNbGvYUnggRnGknB1ZgfdbhB6kb87",
  "key18": "BdS154BLAcnXks6xmTRiomzs3wtudBJ4EPqJaK6xkiLFVL146iee9NJtaK9LwctfoFikxrRkqMJbTfBM5FHjgxE",
  "key19": "5wAeMDjwCrA1euRtvX6a8chNDSBgnpAYeuq7D8eJCDPW9JMsrGqfG13ZsjJyC94A4edHumCGN6zKFiPo5PNiorga",
  "key20": "5SZfSzS6qbLP4hvSE5cGDa77pn7oPM8JcQvvmrC1XVujxNBwGGui8bfpw11Q5zcGQW1uT3NyTdEQYQtKAzJddV4e",
  "key21": "ocyjNU9eXWtazigugTZdJYTzwUjRgE4LeV8ss2QHHukFE87jRnKhgw4nQyV2PSAwzthSk1Hgdup3iHoL2UkE84m",
  "key22": "RSHzheGuPWsdrvp9qUF5Ww5UhLULybN3jUEyiG6YkPNd8jNturFfaP647246LhLszJHAkfYLJHCrp6hCKxZZV8N",
  "key23": "2Ut3oHC1ywC7swaL3VPb7BzAXsFXvKVLP3GqwdnL8Dj8mSs1nWhTM2gahC7CeNxgpxbhYdR4e4uLuYBnF8b66Q1e",
  "key24": "2VpvC28kymrLSfipMrU6rpipFbMUW5GDTzYhTQxoprSPqsook2BFRCV3crLybumtUnyW6423PLqP8vga6MaKGWbC"
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
