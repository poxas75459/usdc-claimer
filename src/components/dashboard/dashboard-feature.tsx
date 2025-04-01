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
    "4vV14RzD9K158mgCdJ7Xbbhvb7Fbc2MNiRyc2EFoXh5xQoDqTPQ4dLT9bH7vnZ3xRa194ouqvWzVM4fKLBXAvydP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cJRda1jocXhrFBudAtoyJVT6Cz2CSAN9hRFFYsa8SRQEUX8yQQuJLg4zPhtXKDpktMcPgMtNXxgyPJi8JtHxtV",
  "key1": "5ffgoatAH95T6VpxLjEaP7S2vjiLfqFTnMVePR2KvdY3DziVMe7KGzh1fpiuLGa32MYqdhWDoaerPQRdh5dn14tY",
  "key2": "NMz9UHtUdD9QDuEU9XkrXnZPHmeu6V2PYfFf4DFtj7T9fcHJvwq6kGwbvn5UnVoKC1YkWWuFNq8nfNFR2tbkeHU",
  "key3": "3AR7mGfxC8EBccC7NbBzbmctbwkH5zH2uJoNeYiW5uAnSZpNJnFw3NeTctEaQN5rvAyAcyBs4sJ7dEnfKmCxBHua",
  "key4": "3UPEbDcSfrFKZJUJoBVcZfnFstqUgN7KwtJqmrAWP7WPiG3kWX5weeL1ZBu7YtBe7jPA7Wp3aUXJTcscHT3MpUpd",
  "key5": "4wQWobu8xXUZMEYdCVxDZGNJjFw9WsVswhzNJjEmSXx3QQqzLimo7ERjSicHm9HAK9dJjur2A6PRaR7cPakKxJbS",
  "key6": "iwBcRYZHyHjmm1HWY1787QS9KB7nd8SPj35oyte7ar2bVxEt96VipcKKevDXyuSQ6KjsR65WCYTc9DUVaW3vWYJ",
  "key7": "5G3epfggeyuSMRpE4zyo6G5FNGqycCNFD6TcwQc9TQGMvriDhfp5Nn2WHb2csx58dUyeNU6U8JQum6T8Wmw9VZcJ",
  "key8": "2vCVqn1nhVvFHLCcvBiHXkpPZN73rEuecsPvcRU2q3K3piQVwV1gd9cc2kuUjuJowDuwQqaBJoZpojbXFmzBR6R9",
  "key9": "28p2biTEVENwZPXtC6aSndCiF51gfSLSE5g6cjKJJpJKAh2CESESm5i9zTEnGjkZ616e29tfCwMevLjGvs5zXDQg",
  "key10": "AsS6VTd3ucsymtUGBf6QrzFyW7uLtKRyrrkWFzVD9esEtE1NzbE9yN7BJy8yK3BFAXhdraXtqVUJpMufGo3qD1Y",
  "key11": "33wHjTo1sECDY8ESY98XCCke283iMUjhFiY2C5iLDF9cWMb7ysEgQgHUW6mVpvPk7HCXqNwtirJQvHVs3gX6SgN8",
  "key12": "646vzQZAMPu8MuW5eJwtrPnYrppstbGGvXxkjqqePPVF2Vvi7gAUdFGXy4hv5T9QzMzA9zWwscYecL88V6gLSUzU",
  "key13": "V7Nc3JocFyrfNcutBN3U6PzFE5ydpyrBQcsnsDzLSAYqdgHhzahBgD1PGfok6CDWN33JAvspWnxwUFegHktLCyF",
  "key14": "4sFs1x3Pdpd8TgoL4B7PVDViNohec3pgA3eNoux31XLSgbvyJQtEr4U3WY5dfEFSLCVyseu5iFmTS62VQjotvBMF",
  "key15": "3iQwLHoLQCGR2ZfAPqu3VZ9z2qTm71mdiC3BKpTx4mjTYTi2jYCkw1zh2TmZKBEZjuTonzY6XHcYeRzZHoxyWuFS",
  "key16": "hySzJsR5fq38Ujw9EZuqEHmdjQJLUdvAMf6yMiXWNFCMmwyuKnJXGDPkEadxGUpK2JaC5EMGrp9h7BKuZeKHPCa",
  "key17": "4SR3yAyWudYYJoYDb3NZjkzNrb1jQNrRfFTGxqnXvoRUPFVihZmUH8r9v8bsgPCCrjA46FSuCZQkUdXKiztuow7p",
  "key18": "4rsvTC51dECEnppJVGoQXfizvDcHFwjfFQKUGciuhgLhpdz9xqWBf7oUnkCyPAWSYELzB33gfhPtcafEWdmD8168",
  "key19": "53gfjsFqwaWCBe2V6yZUG3yZfsk7bcDh6wXogPnaYG9ppGdUuUJ851FKxMnQT7SEPd9oDyu3F89D9A5UwKn1Fp41",
  "key20": "4FvNzzfJBnQFSuJ8xik9AWNeQFQ9Y4MLujYwYYh7UFBTeiMtMekLjC8mQkTA6Qc14UGHs6UyXLNmP6146mJzbaWR",
  "key21": "65RDRMhkHMGzzTA64AkCNDFTStPVEy91j2rb2iwDeo2AH2gURGhYPRG95c2PnvKYavruWQzJDxWv4DPYg458jVm7",
  "key22": "5CAcVySKZebzd3mDP9NHQDaczx5ngGKfGFsPCPjHfgBcz9yY2aiURZyuj8VHRHdLQv2Tx7DQYv1xUoc725Rt4sQ4",
  "key23": "2iPeqHhtd4SuNKNTdBfwV4RPpkR9hAiNDB5taaSMpnaw3ypbBDi2aG7Ehu76NWQhgF9Q9bBxmau5BvZxFq9jCAXQ",
  "key24": "4dmpY8KWuuDXCQV67RTZeH3yStn65adrqz5wHeJ9ygPUx4tgRqkrJrHfmMhfpvCVTewKEihxs3dbHGURJg8rSDP6",
  "key25": "3pftsDySGo72ei19gU4JutgyZCi9zArbGVDsGa1EeRQ5GtiiihXbYqeTNdVWjna5cMLWEJjhJogyBMnTTa3dPEQn",
  "key26": "27tSf6gthXHDjUPqYLTq5spVNPtgu6xiQW8A2z3PesH9JKyAr1xk7tHAN8ytSPSqdCL6PPuf52UmvxTqaEQPwFZe",
  "key27": "5J2i9sZXAm2MaVRcbk9QNQfKUK6pJQosGmnRxYBx7ncSBEnN6EdW3W4YKvbsfXjsWyq1wJFdxb5FpvjbH5sR6xL7",
  "key28": "3Nm85L4SQmfYvyNEBTppjytdHzVRoro3ArJjmP83XpvJFAsrXW4orKBowC1VPq9zarG1Ppz4GFCaHimacaQ9Dd1j"
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
