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
    "2JtxDTgky6rEeodWEjnqfWUHNNheHMN7KbkcH4AQKhw53u5i3KwFty1f15umeffXtJo8LMLiirQpmaViEb67arpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5USA1JSvX4w3cF5eMaBo26VXNa3K1MVkuLyLYkUPNx6RBmwrnqVx18tKPLMAktcdxeBxQ8vtvoN9i4xPZCJt4ftH",
  "key1": "4LeQJxoLfuZfSYdyePbboW5bqMzRNjqpaLuD7mVnRmgou9iDCiQ7VRpd5U7ZTMh7RyziFg4k91uFC8QNdGT4HLXQ",
  "key2": "3VZp2DipnX23KikWouNQE1CefFsCVdY5ohGQwxxvgKoqe6mXWxveS6tcX68bZDHgNyqh6KKBEM4YuCqQrafQUVcm",
  "key3": "4yfinPkC2huxGJSmGXBPbJKMEywFsKMuvcLiSvF8zr9sYBrHyfx15qWbhA9uBza8nan942qRbs4ZxPbhooKveUb7",
  "key4": "4wFsYB1e56NHWkgRgbTHEGAgWCtNts4SgZbqbbX4JJVtsL3P8JYcSH4qJ8yZvhyTLbWWwvt8o6UTMBT3oQAfm5Ho",
  "key5": "5BzGTC2FE4ewrad3G3J8ZhjyURA7px8p8zM3k8A9kpKAviYHto28xD5dxAeLeNZCmN9vA8UG2134nJtMwaFoExRM",
  "key6": "TWiaiTER9jw3WYMxeB2cbSxhzzyEMX1LfHJtzDTG7ousmxx2QQt2npyTmMAFvN35oLzHBVNiEFWz2vi5N4afpCx",
  "key7": "3PwMy4oXo7t9PLzvpS4YKYHe8N5u6zMXZVWukWJL71nhKqH6RbmyP5vWNqcBn9rCHaswaCRjexYYUSj19Vsmph1M",
  "key8": "4YbScpXWhDsKd2XwGks7SrvXnG3BG2mnVCgS56bUUfWb5s1HocyDYy8FzJot8Y3mZT8QHy2PzwprwmDaDwNhixyc",
  "key9": "4xuvnff7zzEpeDFMCa4a6RQZq3ww9wmmEK7BuARyQkwnKHSSy2mep8fNFDxF9x5Tf4rFeNY1GdvAuzA5TUQGmPQM",
  "key10": "4ApeE1g9UAVY26VMmJd1ZvZ7ajRWWiMgj319z4aSEVTbhcrXK1EsnYvzfGJZcqJJS4rErxSdhPPd1bExyos73ynt",
  "key11": "26B6fDb3vBhwwgwmUdjtV8tYtTo6oh1uYUtYSUnvbncnsucLmf2gcZsctT83qkHRVfBfCPijAH3FDbvY1auwaZs7",
  "key12": "34Cip3vFKUSebNg7WD7x4fmSfHD1ZdLN2cTN6bvj3Tjc8GjrFJ22jmzzfYtEikYEimZgyNNf81zRw2PFHU7Hpswn",
  "key13": "2Q62NchVjZwdkHosiU8rPSmnhJQjzNQRGU89xmPSepH5CN7e7hWSkj7DfxzML8pNdvoy43vRFg6D1gje7JEsi3GW",
  "key14": "54aQQtTWUtarwJnbVEtHDGKn4aTmFusFMfVcYRPRTeUpeH2fD476afYoZApVHuUWMt1bdjQ7yFLeKGYLGv5FzX1r",
  "key15": "2fPTTKNbmJTGGL25TfNUZXDPFsba4KC6zXCWK5c5Sq6i8inaf1s8QiKtGhopRC7p8PdAZGn8VoZEkRLBhEJJ1r9r",
  "key16": "33urchVwrBhDgdTGR6rHsWRKmus46fi8sazFEAQnkEGts2jALQj8muSS2LUnrhHXLFjguRLSPwLXcSaLsKgvdHRD",
  "key17": "3DYmtNWMTkX2huhCxPsanziKrFpyKZAx8x4c8YATAearZytjvsus6zJUFBmLJQzhHUDUJktM1Vet2KRtjJ2gEzZ4",
  "key18": "4miwmptWF82FaQMj4GsArvYquw3Dshvu291cnjkTaZrNfY5ouTy4rZZNXkHtV3FGtm1Px9YymNT2WavepKxX5Uca",
  "key19": "5AgYT3UDSWCPYbHYzZpoeHZFGYMdw6yLKkztVUk7qzBocsD11SVsopJo9MaqC9GMrgrgBt7BActuqBKzVbnxvbix",
  "key20": "2ZZY5DNLHdoq7gb77qoAAdBVttPDEtNktFPgd6fqC886EYdmzLbExaurAGcfrYRxYLp5FhP6X1zbJ3sULYHjZXQd",
  "key21": "31XMD1CqUVECzriyx1Rky1k3LMFN9gSwagNhvUwy5ynH7JwR5XoiuZTKHfivzHMgoE85FbZioS3MoJDKrQ8YZvg8",
  "key22": "2LCq7gzZcQ3s9ewDmBRGXT67Ln52yevLtysSykDF2WTJiNpm9c1RX2Rs1Md7aASQj2LbB4Z7XvRth5dNxZYFGrgB",
  "key23": "XWYmYotf42X3JhqCBJdBEP7Wk8wp1tG38nirFwqivQVNwG2Cf7394hGAXnKvhT3VWj7QPjKQ3w4qtH9B6PXkVeZ",
  "key24": "3ps352Fmaze5eNb86ik2ueTD9iVgSY1PitTRXoLZSdCdoAJ6o2W88RZqAZrWDsRhKYQMQpt68n4VPnzxZwopV1eK",
  "key25": "5d3WVD67objt3aTkGKf5V1rjbfiEgv8cb1jgJ6U4tggm3nUnWjL3bEjr6jsL7oXiiBgM5vQCNfhgti59vz62u2PN",
  "key26": "3rn6C4FRqwBKW8ckipGUYmPLzSw5mSgjRHnoPRsLMasadtdSqAYt5k7KHSaTHz38jhUDjEndHvTRfc1ecYAEgRSJ",
  "key27": "3NxvWBozB9iLDR3jjWLFuLdS791F3ji9Vy8URQBEXSKnNZLsR3UMbsPL8ZHReaWN6atFcmdZc5Hdb1wSNxJbMbbD",
  "key28": "54yz26wGwiFa48VPRFDSEiJ4GQf96Y5hkYSca4Yrqomo5AapxdVmkokUf9xFrBAhKn98DwmWYf5AzXWhZx7695AX"
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
