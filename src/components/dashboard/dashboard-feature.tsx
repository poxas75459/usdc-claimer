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
    "5XvqgfaCy7sAubuaniDMPXo5hnwg36KqCA1bWogBN3Hr82jRvHuM1nNoCWrYw5W2cq36LbnmJ9J6dS931XmHDswo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56t42cALcX2GSrcjfre6G4sunFvJ8uQV3sp7hBFzysfDt6jd6abbyEY1t98NTsMkHEYEPYf4eKiCe6a4m6WrmsVG",
  "key1": "5bcSofWbWqXsKLE8nPt3FP123k4Au2uQH95jAtv6dZHGh1Jy98X6c5LQePSHFWaBYgBemBPVPHeUr83uoGDRerEC",
  "key2": "3cgqp9HTbcMhcD9AhzQdnKH5xm8xTKX5Vquy7jWH9qEJeTqTwPXkkwHDhbmWjyiypWDyzxnvgfeY7JCB4vczvrK6",
  "key3": "3chAkupsR6QTaThBoEZTyN5GFYvKoqgEyHoGoCepqb3ta1wirS3XcGUbsm6fH5SzWj6iBCuqoQ9XG85nMVaWDSin",
  "key4": "3rFyaYmyDBzs8yvLaUxV8kTagFGByC7ghx5PsCy8QvUxmwjasy8kw5L4fUK967hF9ch4N7Nj99FaS5qjJNrCEjVt",
  "key5": "2MjQXZJA1kzTookZK6MLnVdYcpNevQAivEJx6mLRbDdydSqHNc64T7rYbQioGpU3Y9PLoWnr7zBvQRnbsXScz8Ze",
  "key6": "35Ehb3suCnB7jZ8CKUeL1dYgPDe79wQWdmTm6vnnAJpeKSrwnnCEG7iUoUEEoLuk76hpQj9BkH2afkd3tThNiZJy",
  "key7": "3J3FQNRk12gNCH6vznWhY1Hon5mVqjzB27xRmPozSV4nUH4Xot65oSvpAn7jzLmWh614UdZDz3kdQeWSWuWXKgTC",
  "key8": "3XpFfn2Xr42htTKMpLNnwNCrjqrVC4GL4SpXaro5XEcvnvFaunr92A3HjP3b8XZxwiQdaxdoxUqQfRc6NPKyTRyN",
  "key9": "4HeJY4g6wxm7bJ8TN5xcFKykhAF8CFcyQ57d1cJAiLBXRFqTMuHBd4u5mR2uTTcCRTMgyaFnm8EscNKucfyR8YHK",
  "key10": "4Q4BLWgtfqSuMqw7NuYme3ocAh7rChQdWMWQKmDeotThfTSJhGu32YQQnk53o2nf2bwgcesFjN2qVRnKg4QhKaPM",
  "key11": "4mXgfNWdCFghK75sHc1hXc6dDKusSTQNgVF77xN7ghSzQCHPidywugZxQbVzz5yCy8Vqpa84xGVuGAmsugWp9jRz",
  "key12": "ypB2GWEfi1HjJtqp86uj8MRBkGunArBeA5cfVfaPgd7nhcx7JqJxrNac4xCk5PBZojyuFqbR8ZCqtpUQpti3Wba",
  "key13": "3XhKNdUNh1n9deoCpKQwRtkAeGvPPaMpvPdMAon8hkB2nYNEV4hvWx7rYRqvuZjjY1D1ugALncyxXT4unwjfmpnS",
  "key14": "2NwhwvCHZSxHiGJMhg7AeRmAECicAMSkpvkqmJ99qB8mnoriuwhguWQq5CCL4FaujxruapSeW4mASa6EwkLEK3ZQ",
  "key15": "345TjA2ZhmNQMRzFByCqtBBgnDntiVFpULtUMyYBkj9tkx4Z7EsZ9oh3yrdGzUaF6s5gUUHQqbgXnrzeov94vDms",
  "key16": "5z8jyjUfb4Et5HMhgYdWuzkREQrEqJHX3oA5hGAXREuHYQse3amC1KdRyYCUKVgbGsNQhn564FbvjMuDx7yuLNNt",
  "key17": "4by2FsXCRzyDuZFw6CcSm65yRG71Wf4nA5ZSv6PeW7ju6WgKmBX1nvBGPKHYQer8H34Qte9E7VxSeM7kMLBs5gUe",
  "key18": "2ojfVXgsGr2FocHYFfNYFXcc1A7wnEMHsCqXfARjxZmQHV9YuTpDNMobgUqgqtwNh2qzoTYQJxH4EXbcuGKLaZ7k",
  "key19": "Ay6mMNDAXgdowvCvi7kVcoDKKwFZcoJCmnUKV21QZgd1bP2kd7QUYpRLv6ta1y895Uu5eHm1BLjNuGGRdM5UGHX",
  "key20": "FcrHFZKSXxpJw3j6ey9rS8G7YgSrq5tk45iitrs9mghwvn7UJgoSNyaKjudvPNe1oryxcFVmFoX7nPHz3hmNDVT",
  "key21": "2uuTyDv2csxUqLu8LoiNMiYEPjY15VFhZC5e49Qs6YVsbq1U7JSQPjTdo3nBCMPv1RFWDX5UpRwbynKLCrPfNBUJ",
  "key22": "55jiDvJSyVHHSojmpYnJNRJyoJm91DdHhcsJuBEqK6LfzE6ReZDoBSCbb4fBmonr249sqZyKDsFssezay2gQkoCz",
  "key23": "3jDczEBsCQ4WsVM4FrHYmzXCt7wb1R1QGauE9q8rZqnbETnADYt3FauJ8tLzDrSnoRCQt67Fhb1GG5FF1umpBUi9",
  "key24": "3przx11zfW7HCA1hjowMdWJMRCKNkdXHg6KB9RJpzQ4TbDkihEQ7DfVMmu6XVQQQ1KmrR7doEDrcBb7MSmnRXtF7",
  "key25": "2QcD2qWTHL3BNfe8vbe8keFoj3FEHoCN9JWNHg2GAbXyWhyGejEUtbAxCfGLsKiTFkre8PteHzdQR2SytMpbuHXn",
  "key26": "5DQ1BRzQf5ykcHXx3RuMBDisBdvV18DosBThkAnG36Pb3Kq8JA1c7QiCEvvZTLpmgXq6uycd7dHTz8dLnBUJZyNV",
  "key27": "54dEewGLHoHNrV9VN53r56dZXqtgxmPu4XiNjdCoPmVp2aZ22HxSN3tNfWDzWpUgKXUsA19iUc7q5APtTwE4wjjZ",
  "key28": "5eu7REgaQKgrjWHYwhDqbGS9ePFjtoDz65HtWFieym2c7kQEVJnm6mcYD8era14X166mbTHQqs1H9bBH3zxQ1YCs",
  "key29": "52srCo5RKzLNp6nk4SqSCvmNCfxYpuAcHWLdi7FiyzUNN77mi6GgG4cscvNGUmremC2MspgEoNnDV6LfCxff5xro",
  "key30": "5ASi29BMWPM7jYFCCB85TWo6q5yUjhGdg4ozxrYv24wyUjNmrNDqf2Fs67efcWDeAUTCcoHM8t9FPsYp3RiEgWTa",
  "key31": "4puow4cRbJmmz4g4NWvDFdvV7zye6tHTm1bMX9HNssw6vV5xY4v2jYUTih1JD2SLc4RdnHUmmFCm353NbqyFbSK5",
  "key32": "2BKnTqNzeQSqLJefYFMhBeX98539vNqbqWzvztn4avdMhvW2nWVrom4CFDbseyhoPF5dgHQppEvB9hxt5Zeh977d",
  "key33": "3rXMqudUy5j96UYHsCo4ssqvU7zY1xj5kaNdeXFyuJrkJk5Rc9BYNhCqzFjG3ZiCA5ASso4Cu8DCcxD7BmCtY3fo",
  "key34": "22v2ovzurkFDeAMeuhdkk9Ht4LKb72BVvZBAwN5iY3Mi254iaPtdpFVa1qbBzHESSTeiPHtu8FWxzepav8CzU7d7",
  "key35": "2ZDhFA9mESWRMTJVAZgnoynjqmJHAo53N3R7bGvcxETwN4n2zT2yVAjGpGfpg3hfBqgg5u8MHdd3exsVCTM7jhJQ",
  "key36": "5YmVbaqd9y1H66roXGsMVpQGtxHnpEM8v2XDvZhYZAqNmST2gKSsez7RJkwAwdPFyAmKmuM81NNrGMAJpkdXEx5S",
  "key37": "5et3M39JaefMfrbDVdYn7H4khS97TmZKzb6q35Ci7GSDRoHEXioXuWUvvCGd6KEFQHMwL5d2ArGnhkNoimiejA85",
  "key38": "2WHHkW3dX9LwrpGwFgqHxJR1PaZaHS6q2NfxD7huSn7gsAcVKnW7F1QFUUTPfa8SmZQ5d46yRzNQ7uK6MNERpqUN",
  "key39": "4XN7AmRkBQX96E1zVe74vnYKYXrHhy5nHWY1hDFmPTRRCotS7WEhgnQxbBXyGpRGRTwCK259qxYpf4HtaiZuYC48"
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
