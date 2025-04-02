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
    "61bPnQCj5YrFvjZd4XYJqZN32Pk57X2BK9dtK7csJ4XpvVtv7nLRMW2BhFt4xT8GhxmESL6LrqfHaAVyqqdrZUuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXEXLZcnpbYeZJe9MYhZHyyUdebwBM56fewJpQ8ubTjXythTESZ9ohiB4QYm4f2u8j4MxXk8uWQGVDdj9ox6xC8",
  "key1": "3Kqa7emoP4C5Tbjrwxfi1CBH2qBjStYcyD6rjwNGdz3QM54BkGkwZzCe7moXezDgBq1DSU3wXkA1sUcjoH8bPY5i",
  "key2": "4JSSSC5M7R7R7FzXgyrTgPCWXps8WDZZVm6TEofUjdLtPCDbg1fb6tmSZhB7GymAK5TqfyjijvKtAYey1SwomPYb",
  "key3": "D3tD8oWaVNuGnW5MSG9HHWDC16d5Fadg22jt5H4U3fUozL9besyaa88uGbSV86ywirZrgtZnxaLZczVEzkVc6n8",
  "key4": "5XkjDyWFjFqxnRw7HaxFxGquDbdscHuTb1J6CkMga2BVh6Mg1hAA2Y7vB2oxnfTzaxsaeSrn72bYVmKQtXcAZeui",
  "key5": "3KsN7hKfthZ5QEvkWqMYDaHG1Eqx3Ax3QwRv8NgfGGtHNTZ2RTCdzSvPJD2RYSbYtH7mz4AzXUot7rzMmGkya1Qj",
  "key6": "5eDryMs571efFW7yjT8CPDbUfMb55DFEktn3MXCZQZgnsV6CXTqeT3vNJtu4Y8wdJS9RBwRXmVqe9JhAKffj1UxL",
  "key7": "3bZ9ZfC4cvQkur1vxz7vWVtjPDUt9tfv7cWWi1tLCfhQ7E4tW1fDq2ojSJXuAMEGSt12D2WAuStgRQkfkqg413Ss",
  "key8": "5vvKjaGEtH3puq1sTKxc5X6Qccjo2dwRMGugFcQa5542zmppXHzkgGt4exCJT5zE6ihgU7vaD1E7XtdtakiYhnhW",
  "key9": "3YHzcn5gkY61pcJdhQ61E87MCFL4mqRWWY2CE2etPkWks4vYH9sL19Tsky1YezsQBow9xMM6c5oCmdzG9CfEUmnH",
  "key10": "3dJ1VShiCb7e8yeKqeubvPzeC2Cez7tT5VawKAUjaERNgBxKAW26AzajpKVEMVPxUWctH3d4Vk4XjF2QkKT4dABJ",
  "key11": "5DqNff7FWi1zxx5ujh9XQCa3HLKmTgNEC2Xnb49n2gdQLkFL3JydXp8BTT9fjXPXXQqTaNQssJ5qhFXaqz4XoBjB",
  "key12": "5hXAcAJ1zogHnoQovFGdXT4FXSjYhFe73ciztRrbk3FrzKqJh8FNwhAmeKuBfHtY2x2aRRKVMBvNkxorHMLpPgbN",
  "key13": "654CaGR6JH71sKsSUKfeMzzZSS81DuEKzbfpWBu1MThnroggGjrfimymkSDoQ5j3JnKaFyqkJzdaGtJ76MdYUz7s",
  "key14": "dFPqwv2JhbCTmWbVmcjs34fDzi84cBuv4pGbrAP6MowWmniVSqrjNHkuRkPh3dcppytD5jprGMsj17pAZiFWNAL",
  "key15": "5xKMZJKQ8U49pSrgyG2WLjvNX6cP71XZn1FM5sSj8XUGKXH1WxLBcufdcqMa22JiLZpTdAhGK8oY4kaLpzJpvYmo",
  "key16": "2kF27vrJmGo5uPPTTfScwtPmV9KYQdjPigaoWqYHZdNYyWJtKdStKPsGgheRtUnvFESxDnhHAXprPUD5q4Xjtxw7",
  "key17": "LYfacEUHbrhQHfrdXE3iQL2mkCRFAjrCaEvyAzkpKP5hydNMoX7xUQN1KLgq8gZWWu7goAcNnRagi4PmPN7YdMc",
  "key18": "vcQJ7okr5Jn9s5vN7xNSM8Spz4FYkpzHk466VH3Q774X5sog2UbLUrRses6xXC85tBMqW8TUKRnsDwwb4XZieid",
  "key19": "vsV5kG1yJTHV5FMndcJC5Sx36dgkguGW7nUyA6gvSj1MZV5pCBngJ9zyBWSC8G8xzDo6EGdP1DHWjXbdxDC5uPG",
  "key20": "7GqN2vPsfxuafAKzKecumw6XaEChYDo2hu5k1WTBFx2fq8KTZBFigthypxQ7jYd6p4sHVPfEjwzgjdLKMhDFaFh",
  "key21": "5vGR9FM2czhZ1nqxdyargb1DrZrBTnZJz8tLETNJfgSuZ5gr1u4zP73Npsgj8x6UAwPMdWv1dgZt283dSbQUbrjQ",
  "key22": "4piihaQ2rD58mcQPPNuTbYXwQthEjeQq9rMpj4yHMrnDypFRE1ycioRH5hExC7iceSvxvqBXs1TyL4Td5J8LHWB7",
  "key23": "2vwpSe4mX6n28ng2e1fu3gjkesS28RNeb3N5EKhUkRg7sij1RKDHgisUwR6oJrWnVRw6rk8XiunsQP9JxHHTL8vZ",
  "key24": "2bptM79SigaB27MyBYxbxLk7uHzB9BR4miidhnZ9DDtoMgcAKGj4QUdEN5aRuqbcPDGamyhQ7JqE3o5mTnnAz6iC",
  "key25": "42y39y8uhTTstDgYsXebHqeBXqruVG5U8wN9WGmEiBkRMXMMYYqVaVskgoL6HprsQDdZ8tMab1QGpTeKGzTRpMWV",
  "key26": "3J3KXtGP4LEN3hyXXTPF7invZZH53J4FNDhtrtVAHkh6tZKWbJaBxutrnGaUhRvz6pqW9Ys7twDQer5GuR4xYQhq",
  "key27": "fSQEXBCYQ8VGUVa8Qb4rhtMaGiktEHSCWY9d5d8WqM8BANpwk9wGHciCxHxUwp1DYxBt3DNRwWbn4x1KrPXcq8u",
  "key28": "2AKN14c1XNG79TBRsaAL6qSRW23E3s5Fm9wbs8Roi7YXdsk843nVbtpSTEbjALnsV6cYJhKa4pWK8PVDAFUf3AB7",
  "key29": "phsmtSHbjjyUsCDT6gNtmhRKUvSHrDCfogbr7MtjeicWYkZdg9wczA8v5g8ePmd4zvWLrcq2LzA1h6xtX3icW97",
  "key30": "4AA1m1vjPnuyJ3rjuqACUi2m8jyUWKZ1QaGLmZoTfDatfaJWsFnfRazirFm8yKCEUP24QuTYz82VsAWZ487VTnjK"
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
