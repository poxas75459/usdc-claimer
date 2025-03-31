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
    "2M4TBeJtUoSPBTycozNrZ8NDW7nff7ZgidSBJcqAYCHMFe6xy3TQtxxq46erYqp1hoTLYnA1RzqtCi9E3VFP446M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufcutkpSevCPj13487Ws5vuhTgjR8NQTMVAjhtaNCtAqpsHSfMbHQRcciG2z9HAZMTCkVyngFpnt3fiAeAQCBG2",
  "key1": "5Rc2n8TScRTgsQC9hA1dvrMsyAmrvyUE12aek9easm8qrCqRssHXAw9XtAkfBYCxbwcztk2759nNcGMvpsQB3LN2",
  "key2": "23qdp8EfFFhxY3msBS9B67wSSq8nDDELv6AXXpFxYfDXXhX5VNJiamcWv5itM4LmrC12Z3sY2C4JfwMKNts7Z9P4",
  "key3": "4btNC5siAEGAtuyqKn7yXrEPA5AUdCyech1TV6Lof1XNTWrSANKJeGdjubTBZu4jmxqq5fLcowMiJh1rXsyVdnmK",
  "key4": "Fgi45E974fQNB2BxqiXHZrysSLisG58NUvGB7z1ZDN6pbALVgzaY4VQZ2FsVXKNrmSXMx1FNkFkRC3dmo1SUvyg",
  "key5": "2w4D6dyXjKwyv29rssKXQY1tDEf124B8Gavm9erNmCwTzy3EuaaxLyTNmXSZ5WyubGtRNAGHbSCqwDUoPMucu2q8",
  "key6": "5vq7qWgKhZA9c7pibEDSWgypGN3yWBDx5u9XHPBe9prQqtURS4a2TPaDFFqsn2KgHmPh1bXYoqTyGvPMCVAWRfGu",
  "key7": "Naq399AZwKXumJ2LdGKbTrZj7dAk9BRfTTY22Pi7kEWYGFMyihn7DKZWSZQ2pEzuTkoj7jPx5mHLHV947jwZuEb",
  "key8": "SBbd9RSiUXdZAaVEv6CKZyai8kR7Nm1WREpRkD4r3z89ExD8gWzq8gbnCoJ1uF4zx4w3qAx857AaRuAqdxoW6nB",
  "key9": "5BwPEmbVjy2qsMcyTysu8ky8VW19VRPVqBijP6C17Vg5AQvmnmhq8bDs8T8zqGD86LFxzcubBJXZuHhziCGQBJXM",
  "key10": "2r3rHnr5Lej7smofYTUbAjQcSkYSdpLkxFEC45WJU75SPQvKJCfFnUhqUfVqNhx9D6Esjw1fMRD3QvJXU578qR3a",
  "key11": "TwXy9JcQnoiwgaKcBApd83afnb6wnRfrtaEu2xxixAdAh9SZEJHYi89vXs93xvTspyYFDPs3C5b6UVC7L4sQDai",
  "key12": "G6fAKcwpYqcKbK88VMaZ2jCUYv3NhMS3Hxe4fSRZ2SY6XW9z7m2u9CcfnS6QQyKktfYhfiEFBBRwqFF4uEWgV26",
  "key13": "353kJdPXCcyCRQFtGjxHnLC4vu2ubPmtmTvZEFC5L3Ft92McXPzdHrDPeHRCVNwPDG6MfokEBV5hMCXBHBdPfnRc",
  "key14": "4AjwiXhaJ6XkNyN7BDBPxc8wiDpCjGSYqzbgMv9Lau2Q1b1b4cQmGAEKAxmZjYb2Yh8GQmwDSJ1xcyX4RUpspQvQ",
  "key15": "241YS5gUirDwg34Q16SVw5ayvovwxzhvZ3x1bfeg2NQKcMrvsx98woUX3MEmcMxFjWNcYyqs2p3NyPdMiHb13u13",
  "key16": "26qWLhcKdZcnk9BiS4QySvTCkJNfSpxQXF6zweqRumGaRnYQPKva9gZy9QDzoqQDfxMZUhini1KzeDRQXzDYdqA7",
  "key17": "iHQaDQPw16kk16cLBgYo9iE8HwnDKsvjaqtniGQ6YAPcqZw8qQzphBjcsy3oEwfH35vaXpwL6AvXWeugdtJgfpM",
  "key18": "iGznDME3XGJBGeZK2jTmELCQvhnoaVxjSBMxfS3AVuhJmggaXgFQEcU7TVNS1D99C9kp9cZbE5i4EKu6pvLv5sk",
  "key19": "2Y5ceSDkoDA5Mws7EtvVNeYeCjT8gDM4GJdaeided5aSrwE8GjZejShvpjcNWY78NZR3heR1dFm72C6oFRyuhUhR",
  "key20": "5Hfq9yvLE1daoAGvvnY3WVeUyttmTnfUGSVRPz8DaTB3qFfhtr8ezZHQuCpiCBNYn2ezZNtUaHL3CAARKJUb2f6Z",
  "key21": "2wtuRtzAsHHM8MgnyCHSi57dCEb4pKDCd7M1faZinJpj227m8kgnfnsgmE6YjUU9eiAiWoApytPMRmdSLqJe2e8d",
  "key22": "5RttnP2fuEtAGZxF2PDCaejVVWBKhxkSYTf24jT8g68oD6jAkJz5dX6eT8c71EdKJdD6e5SnZmBLkFmzKvhCaude",
  "key23": "3gL7oJRmEi6w5VAM3spSwTnX2nvUg1WEaPPiDqg6oAJ1dPReiAAHUkJyVjizMRfA6vdv5xEtkf8uFTC1bqQ7wQqn",
  "key24": "48fGLKMM1NJjJQtoiMSduZvzg2r4zVFem3aFpFf3Vp4nHqZaGGsgiPUz6UrfARGSn91XQsHFSuqupyJjXuczhxCk",
  "key25": "34z4s91WRzgmyixwD9QF3yN5nDp3Aes9GWSf7DbjAHjMDkYCFepDX2k3RWbVswv4Qy6UfV7NZyFg16UdaynEozrA",
  "key26": "63gpktMapVbYCAbqN4L4JT1ZgNVNKCKpn6kVeLE8PMPaqKn7YG84Ex2FGXZNyMEknyR16MoJnL1uZWJNKmYeHCNz",
  "key27": "2pW6NWghXVA7jqVgviqw4fjK95M8psia9NBqkRQSxjrsG7SjgidnXwMGMHKsGHRNoD65HYy1oMJH5Q6ubfxDNwY6",
  "key28": "3uukNeuZjSAP4BXQyMZMCjEMztijViP2hV3JaCTibkzpJ3thcgjwNB7kG4rJk5qQoxnZTHuo1C7z3KLq3PMJYQZ2",
  "key29": "2BM8wThKJcn87oHsT79X8m4nhYdyHfUywjo9JpDm3wBDXN24fWZm289sDDWgNJumRcZZAnuYrJMQYH3d1d2Wwntu",
  "key30": "5LU47CvEAaPnN3Zi7U5UXubC2E2weMkmaCxtcN4xY9uoZvimN2PpxbbPbhsz4hNh6p8rYznicYNpfaoCwGtkXx6b"
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
