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
    "5QHP572aVpTGfzjo3ejzkYj17tRJeT7wmnbhr2tG3Q6RyMF4ZS3RnjrLyyb6Yaymuin4YBiPG4mXogyH9qo9JiA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dkhcasKyPj5Vjd68R7nxPqqNdeR2q8tkWpeMecrpjPBdHTaJfAj4WBKY1Ey8k3DMBbxzgeqmmxEf49R2o6A93DD",
  "key1": "bedPjRuW6BrxtjHr5ovpmygttZQn4dgsUEduvfVV3KPTVpENiZbV2cRoAjQcsS2d6rPmRSY5DcbTwo4srYMhdTs",
  "key2": "5mUXPeCrTgThPUvdkS5QvjseYQu4cSzqLLL4mmx2DShxPwcFaPsbqC8e9iaUjaWZifqTtfWuEZXUv1TqdLz6z1p4",
  "key3": "3ABLVtG6auyjU9dzdywyX4LvqY3EDHF9SayE9TY9xFiHSLuZrYUNX5Bax5yZcxBLAhvauFFbs9LTGqsppyFavEfd",
  "key4": "5CczfjZMDo3ntG82GzJ5WcJNYaMKJRoCcupNhi2Pua8H3epquQWSyar75ZRLvCcEpefFCHHrBS3TuLPt5x7brBYZ",
  "key5": "2vV9CZDeNJqD7an564SXwa38jX6XvRqd61USzHVu3VEkBRnLSSrAPtPEP4yehU2PrfuAnFEcrU8qsW55AyKpLAvA",
  "key6": "2pGSsExdQLdDUijxTpwcSSZuQjMoN1HvnQY1GCk6AcxUdVS9KrC2HxvKyjXJtKVs8feP4pqvbzFK1Zm3RTJRnstX",
  "key7": "2aRMgHU2Ry7cUMjcMHo73zgdqH2H89tM4xdPh2fwSWHdcB1ENKzXtBpKaUDH1VTwNBUXXYAKsXhi9dnc7ruCtQS9",
  "key8": "4E5wP1epBtVqpLDeziqjSYzovCnehMGdCX4LxkZR2PrjX2Zeiq2bpTzcTg7mUb4qeAzZXcm3oWHD4DENErEvk3ap",
  "key9": "4pZNp2qmFo3B4jJpwZAq4gKNYqpzatYT1T4zKYBmwcniPNsoczn1SC67mu4LyRz1ZJE6x9TQekxJGFa9yNqeVMUT",
  "key10": "g1YKnULWr4XtH6tMzrHjThMqXbfQzpdmeNBuQikzjqzVopP3mY1AY9UvtVyg1wCQJhvvsaWt8JvD2V76xndeYaW",
  "key11": "49hMk7SYxyZYYhvjRDgcCoohcb9tXptQC7Mije3vAsBzmsakAzdK2z9sE8RaD1YKcfugETJZFRpFgfZURKzDtwdJ",
  "key12": "JTVguHJ3bqWaQuv7YXW2yPAgtWtdXaUyFFj18TZ3RpMGXo4HrHBd2LgDuKCgdQZS7pLuKWLJ4RAUVAk5ezSHpsh",
  "key13": "2VhZzxi5marWPcnHYPDoYANsyUB4zNDWgjH2qVht4G2J4whi5bDozgvf7yV5hEfpba3Dqn5BHm2TiUGQfXmRBfcn",
  "key14": "4D4qrpgaLKCx7jFZQ8bxG9VxxhC33txXZhySjrfXQp92e3xute5vyBgkbs95t97mLtmSKz7cukjJxyHGQdbbQBSz",
  "key15": "5yE6Ff8mSSiFmVE8rerd4YZyG9YDsty4QwhissnA4YKnBLHSsiaKkuSAr6sJxfXiWXTS6nFGS6JZUGyGEmAvx8uP",
  "key16": "bRAN5j3AQwqkUwctiDWxGy73u1PSRtynEwZoKAu79mCK9auGYAFjB9AWQ1ejxPWT6Tt9EANV3vDC5ry5cCVvbra",
  "key17": "2G6otoFgQ2SZw5SAWXXdNyxf3v8n3FbsTWTYxASi3Vf2k36JPWfAwdQKJQy3mesMegp2hLJhw9PQMM15pbu6AX2Q",
  "key18": "5acn3MfddEkPX6nTACE1csTskgMJyxGFkugqqpVndk6jLxaQ1SR3HtSwjM274dtkfXT5o7D9CEo1PDSP41bGreNM",
  "key19": "4rj5WAEP3Bmx9GJp9LFvZMYNYJtu2Y9z5zyPTpFYEJ17BWocam6TrP2cQ6PCtssYit37SC2Fg7UsWC26UgDvXn1S",
  "key20": "4spWU7TW513Dh11mhaxAgWMF6QysNqCqr9nkumQ2M5gJ5xuqszp44ikAxVnbjoL71mBfLQ3aXtXfmr41s34mTayf",
  "key21": "5E5a4dx11DFfysBPpbrpAKXs4bQpNWWXuEdM79sNMYgM6nDi7xpMqcR1bMRrRPswJLGqdLRTJTqjfjP5Rjvr9KQ6",
  "key22": "5PkgLKa2sRynCsypiQ6g2EjUMHgzPeZ6oDCbsszkSm8j9NssQt2MHb3T8e5Yss1sPBHUMvu78oMLdDFZoFQufWob",
  "key23": "3ugpRMYmiFgg68VRFEvSRRbsuexNZBkh9KLaNnizRyKsp3sgu1aT3U9iQaCRTDsDa97RCTLHKkvz1PcKu4SXdh1L",
  "key24": "2dKrsWZ8epoTr73SX3gnoLqsQDr8RPJeZbR46DppEhmxnem7TM1f31yi5L3dAidcVdF8Ys6ooLB2qiaFjn6GW7oH",
  "key25": "eU7vjSEhaEoN3FTweP6zataHDTtLQWv8AmRzzojN5TXhej5Yy5uq6d4pNAcxY1iidTp8JboTSmP3aGqgV3cEp1A",
  "key26": "3yQX2R4Gyh5xL7FicA3wMJstNyp5kZEoce1zFfwJXSvp2xv3eFVZ7RqtcS4Sa3kjWtZQiBDYCivNFVLbXLDRhoST",
  "key27": "4tvQRKicb2VmmkRDqagcnDSDXTbecjwiUSCu8SoNRae2UR6YdUh3wDn3t3Arcq2xdKa9reSbCZX6ts28nHnJePwa",
  "key28": "3u1So7qPvcfmHU4wh5SyZPvKwhFpPH8hYfK6hsfobsf3Mq87qQzKMoWkNb2TqhqKzVf492QApe8ygixXEv8w27z5",
  "key29": "5SDU3KnXKF5JvKuFrXcCcQXzro4z3CEFqfUr7iUx62yyTk1iZ1JtWNg8t2Ua5tLR8raMgnCFLG8p4SC2prEkYGQx",
  "key30": "3p24GU7jDgu5ofrWWHZf8Ciqem3SMVU6SscC7WGwipY6jtCTjv8MCN5V4EUF48qjuHBRSwE8rK5fgGxKAhDSzdZ9"
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
