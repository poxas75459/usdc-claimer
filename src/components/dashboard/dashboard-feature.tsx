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
    "4xgwF2xWBLZFAML3fXJZXDxNGGsBmcVeqaLoYP27MMdVz41L4APHGSM7SY7yzQsc3jh8M91NTY92FZ1bHP2sZcyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598PMYArSSfxZ54b7oJbJhvYYNjhbux1Y1gEz2g6bdVc5M5HHKawEtYMLrQDeqq6VrXAML2zb9YxZa2TH4mLXB5C",
  "key1": "2uYVnTKh39UEZun8KAusetKsehCsJN4R9J617qFjghrcYSmXsQayukxNKCZ92pnkQ2goRpbcG7qRt8mze1YzRe7V",
  "key2": "3tu5iyXZ8meTEkDmu8ZkpxCTdSAEpAhwXK1sEGZdwSQ1GexvJGJ3wDkoPMS2J115SzbL21Q6d2GTZZJNqi6Q2VkR",
  "key3": "3Y8grEEHstxe4H8z68894KtJTdPPdNz6zsyVErt53LxQppSVBBD84m6wUxuKDKqdEwPEDsnKcRZDyP1UeQ8c5cXh",
  "key4": "nGUhRrUdpfCmAVk6Gpz9185tuPhPjygRVWFcEFNdmLpd3Nvh1NNk1mGAPYJNc2wjgesS7FU3b9CJnm8jeNhThbA",
  "key5": "66JH6xBZ2wAsmTs9vJrQLDnFfZFhqLhTXipGJjTv73Hb1mFY5Tq6L4KwsKuL77S9XiupK1zDnE45M9SJaRyseLPk",
  "key6": "wPgjLR4DcQ36XXGxEx2wba4h1d9cm8cvMGNiLbVmsZME64ADBGFyUbMLZoStWJNT7cD7FDg4wsNBEsfHC2c5bRT",
  "key7": "MD9JajXAAACXcYVdrgzLCTxoLCepxtrfgYzEiPcREPhFEoAdH1Du8LBGUb3naHHx8cVeRjN7Mb63A1DeLeEPqkU",
  "key8": "2HNvjgZ8xs6oTCyzE5nyKKKLNPhBDDcUkVefvRQa82QHxLrW2uAsxvCACcJVT2m6MCxJLgQ5eQc4Mp8AB3L86GpR",
  "key9": "4MeEeQFCR2Ea2dLrhRnHGuB3wKueywoUzaWUtMQqsv5ymjb7FjZiwbNTMdcuLtVjd46yvRfGEDKZYZs1oBvJ9NsS",
  "key10": "3nkcFdqigvhZJNvodiDxVLWXvPF4KofbTEruDHFXJ31LLhnhkcP11Vx9bMUcB3jqqtyeKZvLKiyGAn78K6rvVxLd",
  "key11": "TW8THPhVXbr7HcQ1fpFpLKkQfsavTKtJaogtJNfqVvmNhUWvcfajfsqQthqzDZDQj12TDS3ujufZNGnhp5WdizK",
  "key12": "4Sfiwzc1hxEFwGiYMpsbb8EtJM5iqUi11M2hqfSxNvRkx23d1GDnQPPjaTszbDTjHrzqaox5VKPApRgKkYimHVvs",
  "key13": "38k2e8ithiz4dN4E9B8wJu5ZrGrnF2kZyka6NLzW6B5QZYH8nKAaPfqF9xM755ibBhCREcjf4a1GWa57n4uXh4Xq",
  "key14": "29qwfxmFvYp3ozherFm17tuL3zcmJ7G2DuE3UutnddzDFFRubfVhiXZW7LV5X9ajtx1aVKaKKS48VfyVPSDiFPXX",
  "key15": "bHcPesZ6T7TmCQUp3okpP5gqqFCSS7mPtyst4wMwhHNJ4vSy45axgijodjKTFHwu7h34MfksfXs7zSQvtawazyK",
  "key16": "HUoFTsbRqbNwaQLFtg3HmgfxSrvuoNcToRKhiscZi8hWP84Ae81H5RwvJ78gkyBabVT7svw6gCKnen77j25ELLg",
  "key17": "63h7JgX1cG4bYrWW3gETdqt7Jx6ABgAqer3wmz74rkeEv99qeCqJ2PotqRQx6EB3g99pmCERzw8CsYgUNUhLVwRS",
  "key18": "66sF28nUL56wgb5iQTsqgeoUWEJRGnzZVguCQCB1si2RePKvdcdQoTM3dyvWawQnah5YWx7BnsuckrDG45oN8ewd",
  "key19": "5KTqTj92KarsZRx8S6D8jKcmZ9AKoGruKuGU9f6S5qcm8PnWZWz63LQxiyP7eXJYKGgqRSojtiZ2qYzsiZqFfVLi",
  "key20": "2KJJYQjcWEPmStPS3Tt42sTyMwJmF8hcgLUiHsEfMCcAmTrD7FEp8gHuMMCE2MKzYs5z6nVaKd7aBL2jz1xUchCg",
  "key21": "2dYnJh3a8usJ9MJYmLdYsJrBF9Lp2mCfvZ9CMiGp7Kqm6Znhsw3ocdHMrL52LCvL1zh8psbbTbcL55iEN9kuqoYv",
  "key22": "62jXhLMKkqUPQGQBrdYaaSUTniuYXgMegzvcT7BDHTQsqQYHBsFRZo87eXKYwAgvpeF7UKnJx2QbnFkg1GvSZp6a",
  "key23": "gmtYGkZ53K3G16oDuDr8gSBShB6b4SuoXuv6rGG3AKYrE6yXqUqpWBSnqGyTR7qKaQfnFtpeAX4gzThxMgnTYTT",
  "key24": "3HoyxxTvzreHCZqdC43dSy7TC5W7wNfvy2MyzLXDEbMtNxRVUp2bAjrJpoGaMwkNAKdscVhW7w7zRboiR3ignfiM",
  "key25": "26y2e9dxCGWBCktqVDvCJV1ZYUu19qsCsGszhrBZxARouAhRS95FqFVqdSdmpZbXU5jdiDh15eSKb1jrW46px8wA",
  "key26": "wTBhDSoDxtvhTiWb7dj8J9BVPpow8EJoxrzup6Loc5YWeQRRiGvAbCeSGd4bLHu17c3jsrFMDe9K41YhjX3n6wj"
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
