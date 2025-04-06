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
    "5cHp6yZVQbwYVdFVR6dNRP3fCLZXEJUPJjp3RSJehx6BKe8uWNFSbNSP6cTrjiiVMzH8UXm1EVHb8kxMijdXPkNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWP4K4JPhpgMLAkDFhQfxo5zq1cPowUV2DWDW3EcxVypshEEJMpLpUi332chLwF2abKJ48fuYtcaYVmqhkrhNEi",
  "key1": "2RN6sQXg1JGsR5aqXk3PTn41EHWkMs9hk4Q5Rh5WRjkLW3GXeXPcuSJUniwose729JpAPbGxSxeu3cv4Fbgj3HTG",
  "key2": "4iDU7RUjJrft7rbfdvBR9pec5nKeMHphQyGKDGr6okYapUoMLsrqHLpbDN8BNf3HRD6xDdf9cNLp3MKRqxfSgFi7",
  "key3": "3CPppiEN5xpo11w3gz8myA9osWTBXZ1JeF51DtmmLRFTE2Ta9W7eWHwbpuoo3C6pnK4r7FTeWLvE1CZGGutrhzhd",
  "key4": "4PS7cpHRLrym83Rri4TRebWEbvqBJYUBpWURG5iMTsFysNGW2LGiFnqjELicmCWs1VfHAZAx4TU2fVZTmcBEZojy",
  "key5": "3Uc7wqXfGZAXbJq1nUCRECYz1VDBVLZT5rVjd1mrSzfqu7fQSLHGh9bwFoGMbYEqJxcyT7n9p9gU4rjVYVzFxtBj",
  "key6": "2Pbid2NEhUstTj63w5tjPhwyijmYsqhE72uTWjpzCy19CYY3toohwgqaBadunoFzZFXsq1hsQanHwMAwrfH9fAMD",
  "key7": "3tePRZ55NSEnZUiSjvjhvisbEks8QgoToYud7fcKkNawxyBxCQKz5moMhEmb82AkP9uByPk8KsXBzcem9UH3bPg8",
  "key8": "5mr41gGTjhb4zZd1dYVt5tyEqG2X2CqzM58PNStUTdwb4FhunFDkdKnbBpaUnbjXGNWNQEnKxkgbeF3vNQeC6xBJ",
  "key9": "5KDPUoby8okW9bHZgZ2GkzFRBnW6QyfXvapQTGtaLexLCKYVgeQPvMNx3xb266NQWW5GPCcVoHftVHft1anpn6Wn",
  "key10": "3USpkWcfX7gpUtfNUoAPCVHaoUQpjqJMRY9C8ZqMMa1pWDsP7eZCeW3spFz5Z17i1kvnxTdgWwf6tg87s5VDvigo",
  "key11": "4eG8jDwKTkidai1wMPGRrLkyGHhaVWkFQhyPr3zfzRCgrAAYEGZh7ogMcJNkPnxcmVe4AZ4SddAJynvtCPRMXMj2",
  "key12": "2n4LjnUEDZbADLUroBetD7NfBtyrKXmmkCRZWqZJ97exm8WZSQCnC9ckxEvQ7QRg3KGweYuk2pam5LexS3WJTCU5",
  "key13": "8LMoswfGpCY9Py5t5VFdaYsUbkGDD2dbKYaeF7aP7znUZHirtnoi1MKRP6Qgz7sxtdjJnvvDfPiBjmf1c27oJxV",
  "key14": "2c1YV2JAQuX8LaA9B3GVbQ5eR8mydARsbT36qaymxYuVv5uFDj7STNr6zmTp5CpWdo1x2wBXa8XjaRboViTY5N5a",
  "key15": "3A2zjqP3ecZstNyPEiP7Zs9YKTziFVMX1jPKYRZSGepowP861e6jGYjkQveAKkhGnYLrQ6NgFeks7RFWeGWJzjKB",
  "key16": "3ubdMmfQ14jiidMKQp5MFZpxQ4c1xJGngjfyYFxfs3SN6G4ZgeT91DC3DwzbSrnEyJMACy8MDv8oVoEHHrP9bU42",
  "key17": "5rirdysrymSaFewJjjeDXtiftVCiD6njMvzDi4UZxGYWFGSHWdFVJ34GUaiMSqTeUiTBSTF73xMzPLFrmcwAadWf",
  "key18": "4BS8mJv5nzpxRkqqrptdLagAv3aGf9dQUye2kwyRZk4XN2198z3GXz2HLa9piPo6JMvmK48oEuudrHTxk61t8kp3",
  "key19": "5nAFS5WseACGbvUmTF8gk8beEtUFRXqtw93LukLq2k7P2JDUhPco2nCTKjpLosBDCB2hX6RGBKjgKBv1HGAnBSKp",
  "key20": "5kPBqaBtjV8TM49G1CSXwqSGXTwWefe2fgyprBf86V8daHKfFZYhusDP1cBewzAyqpf1uuN3ttFQCfqnHHr3MS5j",
  "key21": "3w9emWKB5397FKjn9kWpoKCeqndo2zjKF9UTZWKBjQ5BwMHNaaqzuYeCUz1L6mubGZtYNifPMAorqGAaVwF5KzK1",
  "key22": "S88KY2MjGsEiW3Mc2q92gxs6wpm2gHfo89rrSGYn2TteATJUnbS7x2RxpjFT9iqLPGBBrsN1jv119NJ7VvyzvjS",
  "key23": "394qJfqmhTFCMZ5jx7jQC1F4dmXZWxbtMPSVfK1NE1fZ7pBhuks5DWzeTM2vP255w7iLvjRD9mJtLdDWu7zon14i",
  "key24": "2PNUWbiJF6z92zBE1qwLKBAAZCnkuJq4c8rZKf141qcAreS59dnX3d8HgbT78PAMZQEnkZGz96Zs6aV7s692YjNN",
  "key25": "4q2B1maAWDbBJK2VDG9NyfwSw6Z2CCtvV1dKFypLZxRUtP4dmcbmssYqZpBwkDSiYpuXSWLNwpEZVXRD8Vffamp",
  "key26": "LBAMfVLMMJVmf5YNKy48hJd5Sx1iYKxhwK4WUBzZuSRH8aFXTTCcVACMdvX8ENQp336emC2898XLXaq2MrW6HEH",
  "key27": "5jXGR8XbpaBscfgpWF8RymdMV3x6AM292tCyDYRpTuxGjYg6VthTc65ZcbDLoo27L5rk47HWPM8KDigr8NNYoMSK",
  "key28": "4bvdwSFSjLyyxqyBQgNHLt6x35ytjm7rTWdykJUzeQnSpc564qfua3VaQVnT2iiC1yH1eij7W5YqswM1DJ25xTuJ"
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
