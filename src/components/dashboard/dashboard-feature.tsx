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
    "ddEJfnuG2HwCQs4SnykqnjdetBZP3BsKkFs8UZ1F218tcTu1YdDKxx9HWUvdAUrrmMjcYH9Xvm3mpsPDvEjNo3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HHVq3FtwdJjf3aE1bkHQfQ7dzh8y4njK9twC8Wp8z251am5EPSPjPKmNSW2BxMWqAJJBTWCZnGVmhXDRiHgaeji",
  "key1": "26qJwS5EJTYuN1iEFYXp6HwkKEbTq9CVi3F8eiyMYz5D9gmFwjkt27aWNdFS72R6X4kCiaQspQSsMaSepHDG3xVW",
  "key2": "5yGk9Bh66P7wM7yswzDXBBCD53yf6tM52rPN9We4PLTonnSHLxtcvrCTmGrcRtoZsMKfQqbz12tMo1zrXmdAbrBj",
  "key3": "4rHztw2pejWmStPDJn9KmFM6qkVtj2tiBiNurQXq9wqF3FaLhBsSBfVq5cpAu9YH7U6FAxozLDkycVdSDi7hKRy8",
  "key4": "2eD84PREC1bdsx31BRte7zStXPpUF4od4ya2muPvnSdCkXL8FMju4EQsknjmRaEMmM8dgbZCxVdgEgmUfst62jq6",
  "key5": "ckADiT8NWSZ54tYSCHpggNH9bovXLsi7AQvQEX6Yun6ToDeZrCCi3dQFqDujbcFPcApbniioZRnKJSB9AABALMi",
  "key6": "3vcGHnzok6CN7FThhFviKQa4G4tu2QsyMp72wWxSqfTAwPKHudazRw6u44bcwpaPBv5oMmu4EvDdgezFnteZSALH",
  "key7": "675RrUoviFUaDbDwVgDP6syLuDFXXiPCsiCyg72xmguVqChnSEEunS89qKqzb4PFwWcXLY8GGvaZZNWyTSYoS4u2",
  "key8": "5T85utPX6361QBRsREauMwvmsV9uEytr4cwVo8HyD9CgnZgyPNFyhCZjZ8RikAsPbn2HU8hfoxzz5GRWeNNBeKqo",
  "key9": "5qR1WPNT9JvBkgewJxZRZbFPcnLdqNommfpmKHTdReqbHBBPjJgtzjSbEPDbKBofv2uXfCDvLFZgHC8QfKTnzETX",
  "key10": "2vCPj4vgKJqbFH8EmT8yhXuZ2AhTgADKAzVbgXw5bLcoGDDgTaC6e6DaWgSrDbefC5JARiv5ZSaUA7P4RLGdAa8Y",
  "key11": "bigYtjxGKPMXP7sG7RXvs8y8WdRZ8wrCiDRLZ8hKoDASeAHUz88czijw4p8Ri196ByxCiNBp5McrH1CkYwxWRAe",
  "key12": "4qQM3Pjqx8hdnbaPE8KqY5xYb2HMB6p8MN2QRW9n9PHaT4ZixBwsKdGEUSp8sv3uikowjvbmyqWiKtobpwXyTLaZ",
  "key13": "4RdXNb8SqSLCj6Res7QBi2y8EFWRswKWwxDfXUQgvTCsNNED9rqAZmmPRhc8ti8um9R1t2fKknDRQewV6k846F4h",
  "key14": "2VF8R22V9f2czMcVJt6dDe488taHGH1swzMwP9CDU4RwxmRrKnEk3k5jG69rmLoPSmYpV649k8VYNohoTzke98HF",
  "key15": "3uNnrsn3U6HpwXyJxvHKLsmML1zu2R5VY2BLrizXZmpS3wJbXd3wm5J5fh8Ga3whj5Tzj4ZJSz9x5oYeR5EEYxuB",
  "key16": "4vwiw9d14yj1UNWTKRvEaa2WtJ2RoGrKPQMfZsma2Qd7gmQmCZjPD9bZWpYsiuFJJ5X2B2Vvqjju93J8up9h7xg8",
  "key17": "3CXD2n9UBAp4w2BujNaWF6bBGMeK1uTtuzKNQ5S2jo4wWcbLwAnAgDyXGHKqCCUCwxibwKq8yZe3yDKPTkAYnoMG",
  "key18": "3K5WT8AKZafjH2D1oQmLjQxCjk7SRE9ijhprU5tkpg2WQyjL2od9ggnvfekETP2C4sfFX5kSLXcD266JJv9gaAjf",
  "key19": "5yAv2uCvT5wtvTBhgbhRmCGLHALmDEcoMnL94hQPwbtWKmvsv5f4LB9XjqTTxen9BmrXohRgjTbFmsRYn5qrBqNM",
  "key20": "37KfdMMvdacqBisr1KES7EfKSjExas4zscK6mUn2Xudezz9mSkR3SF8eHsEx3K5Gua3D3Sc4kaY989YYLwzmg5Zr",
  "key21": "5zkq6KFMM7TL9xfzuyz47UQhS9BUVQk6ARUdzBmsvPWLAKbywbrkobYvZx1aJRiFdqPRiVAdGzJcQs9VNBgBCXcX",
  "key22": "5MnMeJ5ckqJG4gzZacpFf8micBGRg6cqTXTkozL1Fv5bZMWZGvPfUqbXe6qSnt57z9FwhCtPbQduqyUYvSmR156h",
  "key23": "3TR2kLdwgqfx6yoF5NV6x7AZCEFs534BVUvebwGviD947qnBKbz1gvfYhmGDdqg9AGeywPJFeGwQfVRo2HNbqXDu",
  "key24": "3SrppFFTCh96Htc5qSDjJgkyrftpdwv8a3LaGr5o7YRjUzyFJUWqXDr1waiNkQkgBWy11wr5jYVhToq8ZuMKHvWq",
  "key25": "43C5L5pANPK2741kKvvi1EymfXD5PhvG4aVqLEii91KkiDtmQyPRZXqF4x7rGzkzBKU9VvL3SeKkrmWesJZt1vFK"
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
