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
    "47WvRpQ6zFUDujT7X9WBnbTLayNUBtSQGENwp7QUxwb7xEFYLFbGjndU6HNy4zVojNJrKwKhKqnuCdzMpPiUf3wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wF12d3KGjcYf4CCmgjP5xpTc86fxPvC6JKFAvvGpjr3f8t2qBz7KGpTLmAxWqkZphR2cK2dbemiWsXxYNMXaBye",
  "key1": "5mNxro5CeQSzvYjja3Zh87X1an7468usqjp2W5w8ZojPYH7UK1EfKUmMxWpYXqPUCnNRHCzgQNzEDjyxBfUMu1eg",
  "key2": "3jVph7DrbRbCuM398JwqtEQYNG2hYqPAGWAZgSZW7nH5PdvvTj3CVTQ6AspdciAypF2T6vTiCafo471xLTFVJbJJ",
  "key3": "2GahpnNKuGuEjNK35ZKy9StAwiPeEeb4iJwcbLSMh6q1XP8xWwueneMZzZ48pAku4sJUeSdXeFFEZWZvkWrNLs2r",
  "key4": "3Pe7QcnJQeP176rgSm8BEY5eNBhvPAJLA7GTZrdgrZPNgeVRq41RBrWtuzy99wC787Eg5529nVgn96Z2syx88JWg",
  "key5": "5rt34pHPVgiuzoJbmRRGa4C2bj9oLRC2zJxJBAFeLVT5ZuSuuQiNfDRwci3E3feV9kf9nY9a1jQ76Ze2JGUxZ1Vb",
  "key6": "4Tjur2GGEC2z2F2Aggt2sxoV1KVf6frvH6WU6GoKzoA6V3uHrzS6LivAuGiYGnuHxc9zbBnKg7fspVnB9uXZ6jkJ",
  "key7": "29zJLJfUjGZZLMyqEGcTgwio8oKh3M2Uq1jBjzLUpXFNuaPQsvUs6ge93FaXsBA3r5kf94E2SKgBhygpW27HaHJd",
  "key8": "2fBRz2PCxvoeQfnGzAbxYte8yAibUPSnwHKLTtCsJytutqjXQ3EyBmQyf5woaKJtWyejGCZiWx85AZipxFCRHkPn",
  "key9": "2vPowFhJMAkuFVL16c7FqF44cuyXKFFrkwNwqkASXWFdN3WztvEq6quFt7P5cmMFZva8aKDU5eehMLSvg1xdrVAo",
  "key10": "MEyQyQTV8LU5Mbq5Q4AigxXNDLsKqdrSLTPrwMzCWNyMHstkthv1gW8ohTLxx2YUb3UmBo4xWkiMqAKKQVqvYa1",
  "key11": "21cyvgZGWXFM3oGTxzuQ6muKiurftNeqKvP7FMosHYfHgNGqfGMyf59LS5wkLAs32xG3yLqGnTEoZy6vCTdZwDYf",
  "key12": "2FNEy7SaQ1GA39fxw117iLfJd7dGvLegwdVfmxLSw2mLnn77fea9QE2ctYeCZjo2hx8fq9co82zbqPWV8jbQx3Di",
  "key13": "3YzbGrAAZJKzxh2nt56MK62HSjMyypCPVVRgF7W3jQhP3hTqYDJeYtHFw5KukjaocRL8MHZgxUhsq3ukCDotg6K",
  "key14": "4zneP92p6K1q8wtLHa6YdLNMA4BqECw6VDMk3fB7LgLZHPjYSEhxqKQ6iGUBEwyF7Zsgwzbvf4nLsyAsUro3L25s",
  "key15": "36jRFCyNeh2DXgSLuzAGQ8znuwQ44Xxqpuc4x43ps2Zumq2P5torW6t2JCvGAvFf7D7x9vjWPcrx7yyrWUnEz7fK",
  "key16": "4LVR5gu6eAiAtKrNpLnfhJyFjvZakzYmxqjN6dvMT56eppbUwpa8ehhGtP8Ygg4Yxwx53617RaWbRmiB4yCzus6d",
  "key17": "3NyMKup6UPsjJhTBRLX7yNddKuq1jDCiCDUBvjXo6GJyz1R8aEpMytXiyoVxqrKt2hsMfLJVULjJtUCSv9EaAuVL",
  "key18": "dV4X8uottYvRhruUM8ks3W6SeMuo3zrvawhVHuFw7LCtCtnkwt2hac6KySUBWtzwR7sV1xATuKPV15fyPHZBR5A",
  "key19": "2R7EjT76FyxYurtu7bB2ZxCpDibuBpcrnsAkqLMLKmAwoc3LHS6XR4QkhMwa3PVWLpJPv8rkHyrxk8BfEQntA9vh",
  "key20": "3YTw2xvgSXAcvd9v33pdju3DN71RhXd1amvz3PnaUjNqY4NCn26C4fkskZZy1qCnrvfFKnepEEmFGLYqpiiRpJDj",
  "key21": "3m4Ah31RzxtRME2kfqsTk7BrXozzGDuMb5kQgpvZnKbJfvvxc55TVHkqEfXtRVMT2ZhAabgyLumSfzhtSaSK9gev",
  "key22": "2imeZpSZpSSgKfQVvPwMv8tCZCeLzZZJsm8udQKrHq18aMGeeZa34nupi6SaSTvFbDrhMbXKaC9BqRF1mvdFyKTo",
  "key23": "5smresseQPbTdYhc8F71pritjSuVBHbDE3mAySBhoidwsuj9nJDn39fiG5aRPqxn2mVFr8wJrbvPqcPkr1uFuSbs",
  "key24": "Da6aFDQJWtJHR4uJSxUig4FEZEVS7125fDKzSkFRTGLPntbQN6xsXTy5eXJPja5nnKbF1aw4oTnrd2UQjhWBdG7",
  "key25": "5VXgbsMSEBn8zfny6CAaCUzUESPtepyTpsWVeGzjko4Tn6GEx3VhH5T23Kursypgk3nFsv77zyxXJDkLtMmYbWzU",
  "key26": "5wLK64z513zn7EkSM4FGAkUnsYZ82oNSSZkuTGvjzeo5biHK7MUNRm8brj59VTZrfQPmpNrb6BoZwZSahLUCnsDe",
  "key27": "ggEfFGih9dP75MxnjzXdL4MNe1vW2C2vDMey9oXhh1bo8CVNVUaCpXXxTuLbEknDNCcC5frAuT33yCWh5s69u6a",
  "key28": "qGfP2pnWWLw1q4r1NGMbC2UnPnroH9L97A72H7Nea33dWAumXLbXEbV2on9Zby2TMPHi73HZgdCtc7PZ533HNSy",
  "key29": "4CAE34KZ2iHY97htxKjNHbukYqrs5kdk7sTPGVkPyW4VhzwcJYSoE8qHUEgsLqDc17mLHSFMn4i3SArwxw2aRfr2"
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
