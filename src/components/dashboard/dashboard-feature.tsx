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
    "3B4tKjvAdLFK6EoKvWp2PTNJYjvYe7fcyuGJDaEg7Wxn5FAfN1twtCs88M7e23eMAwqXP6wKFpogLKpAkewaZ4pT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMcxpZcmx7MyztACM664ZBetvy2253uMJqtDwczdcLMKF5YQMx4w33hpK4vVTKWJhLQJjTZjvLsbuFs45R4Yywm",
  "key1": "4Njt99FbavpwQ6QhuxaRFYvLW2cTZ5Dytc98t8WfKMBZdfyLvbut6CupWSeomHJVHNWWZEfohuwQbzC62SComq2h",
  "key2": "5F66ThuSBQE1E8ZAp6kDTJjQviMQd4xRLWfmZdU7cRcJkhpvrb9AUnM2RqycKReEPaFv1iU7SiEin8i3KMgkWcFh",
  "key3": "3XW7wPFzsF7Eemcfo9dK1qw6y2qatUS9WkovAJWCW6acBF8AJDBpZ1Fn5vLuVGHUyEGuu5QgKDFra9AD1JE8N18K",
  "key4": "26DbJkUWnsNk7VEZDHcyLUJ1EevyoYHHEVnBnJj57rcPasTeqeAXnGAcJYhCXbM96kHJhGken3DcFijv9i4pxLV5",
  "key5": "5WoMh2wquyhrKymrh96wBDPEjYmMFcoDCSMtQhK1JyyYfgNhBX7yhvJm9637hXkCgjdkpMPBUvPbfzAaEWdB6GJy",
  "key6": "4GqcAVnRbWB9pa7Ux8LxPEBF7F2qCHQm99ZAgByt7SM1yCHcZ6aXckqUCsKkfeakmL7ACRmjUwHpLRqr9damA5Te",
  "key7": "5B4erUJcihbG2MMFrDGZUpCy8t4QEVGci7vGqSbDk8z9gp9D1uNtKD4YF5ALWDoEk2UVT88QW39kpDwddd76uKb",
  "key8": "64i3EpxJxvs9qBWUg8Mcip5uEpFjDhEcKtNB4ugAJxKN2rf6VXZf7JJuWeaMr5c7V2bbcKtmTdoq24MtHMnvoNWK",
  "key9": "2fCfp46AT2u4dxB2Q1caXPLpQfCd5atvvyJguVKgm4aaL4GttrYcsT1Fojnmt8jVxbALtfwNNpMyjQyQR5cSZS3N",
  "key10": "5rQXuBk6MBj4di2ZJwTEpjrFrU7hi8umUFFg54SipFjsraJB3q2Avz2eUJqjjU2LpF8Qy2n8FLTCiJbWKk5VBLTa",
  "key11": "56VvjScWBggLeFh6q8zMsU2DpLQdEpfgRpCb32RrCtNXp9zicN6BZwpyCFEvuSopFfxgoRwCkf2899WTREWR2kdz",
  "key12": "4okboM6bNEmAFmGyPfQknXt6AKKFZaCUkt3rJ2oZLfaLijFupDJaNX3hLcJ23uznnVkEHZDhr4advf3o3owECh3g",
  "key13": "3CXSa83pkUvuHexzbRU8xjgm5dtYVev9ZXhjYXFvzQSvDU38CvmXNH3HmgeWBYAdUNsN6ALxYrpqCWy71RzLRSfu",
  "key14": "b88XzEAZyu1HzAESi92Z3fNzp5GMesfm5zCMYjxp2vwxiUh6Kxgf9xfEet6M1ZrVWy1EiSRJ1Uj2BNtgQytcEhR",
  "key15": "pkfrY75EPDMytqtttMVaqKVKusnnL4PaTD9GXe6ND4c9EGt9ALo64BXik6AtYdBYCbC9pbB3N4xru9CzNdRHqQe",
  "key16": "5WTJG7T8edPp52mEFmL4jJLNL8G8PHbeMX8q9jmiYD8JNY5Q5gdSGDKzQKqV8LqRZwSmnv9KNEBaCeiwvKFUc9EW",
  "key17": "Hoqn26ZH86Cgd4uoMCoRokQBA3BkVzHp57ZoW592q3uYWNvCvspCcaeLkpYEfRyazvBbuLbH6nXf4AghzADT9CP",
  "key18": "2XfihN1oQTabv65DFLeMcHvs5Zcp8GZbgsBF43EDnXozCepxMKt5gnuBSdQtgACKD2qVTuo8yCGNg5CSsEV97pqi",
  "key19": "4ibVVwFKx9F3Sp5TE2CaUaWpaC1CxrxWuHrobbkJqze3vzvvaGSczkxscNhkDE1RCH8EWqSBe4P2wdbUmMyBE6LC",
  "key20": "TWcvwrq6oyyqZdV2RmSnWXkYzjedUh8iMQxVbaVaPArmESEgepUucvQrC7QAaHFJGr2wcRRz3pdiYZsGWhV4dqP",
  "key21": "5F9wieGtSkzRk15MUSyjnAqiSJt2trCyieunVWW5mqEwCZewSCaL7v9ttF1paiEzj2HVGJSptVwSL8jGtewyKeHB",
  "key22": "TXAtyT4y6sYEH7uuqC8mnaHXQF6ZzbWHgTvLavCftC95cJSg11XSCiXWMyuwrD6dHaNdW2ekk3gV5PrcMHJVL85",
  "key23": "qFe9NpwYXHojB82QiyWCJyrB2SP4MG3tyAMD4RNt8vAghdceKovMdy2LATxiSsLRfG9rPc1XafE2txAwYXhiEgG",
  "key24": "32P9tm9S3WQ8Y7NECe4h7skj8rTUD3gAF5vVbifCvB3wcfXRj5huzbknCMVNJmW22PN174iRbDTLzuTnyFWWtcRo",
  "key25": "5Q2Ps2gHS4iQzmd3ME9pKyTFdtTjrrjFaXzx3F8Dq4VBxy5cVG23Wqn4ejPmTZA5dLCBo3i9qrzFSPnDAAJ7Sauf",
  "key26": "48EnNc3VpiNjHMSekhXKRzV6jSt5XbzW85VUSpo1KauSt3woRpigSUnpYfdveoq5GuhmctgP3AgJCaB8MX6GpA2q",
  "key27": "Qm9hQ8uxddMw8FjJCFm1qK2FSWdykgcTo6VjFYLJkBVXm7hF6aa2UfSsF1awFsEhVjduSeWWqXbjUwqghNQtXF5",
  "key28": "3JR4nWWAFVcgW2itRGwHRpvJNfkT9VTMBFky8YJmYMJ2eQdyF5foiv5HD7fM21nvGM9hBvpZyjGCJrsLAAG5E8JB",
  "key29": "3s9Bnw8R5bThjFsnW7WxA737rxGRr9VCwN5cZ6r8kLANfEee1BKnmUXy8zvSHUd13rSkxgezLZ9FvmHc613vhx53",
  "key30": "4nrPXKoNUPNxYkmtwW65FMYXA5YhtWagiTrdJkSy4aW71CUdQ2CAKGZsU3DmKADRECFAkBpPtd9JdUA2cd9CumAc"
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
