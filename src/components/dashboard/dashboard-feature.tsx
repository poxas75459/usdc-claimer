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
    "4pioKdAUb3iAFuCBdffWQiuKBw8WE1nr6PkTevZy5mqWwXDmHtP5GitJ2f7hMiespsQmmjV4GmPEj2irpiRKm1qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mE9BZCRTUKh312GoazM6G2TArwWDVREghUq482ywrLeT1GDpYgxaYVLKdxVYwn5D2bnGsL56FRRxjRa3SuVoxKP",
  "key1": "3c8AYi2tP5GdVn5wVzcVWqt4FH8tBNg8UpMxSsZ82i4D9oneuJG22jM9KkwBZNQhAV4JqDYzhGKC4YkHgUranTBe",
  "key2": "45EirGa9jKN1mV9bckjhiMKFSXFshqJeHAP7r9MkUhpZgGwqfYxQ7Qnuqep35f4ixZGJVYTAW6JCZWrNAr7ZedRT",
  "key3": "jjHEDowadCg8cqdjBqEFfBrhbSikCypYf2NwCvJmpmA4sntnT826eTv94r39M7qNXBX1wW4ghsDWQFn6RsMm5SN",
  "key4": "5Natmw16JJsQdVtBSCeC5QGmpmWGBqAC9baJduXE1hvad8Z8F6aaiAjas2Qm7JwEtX7qfpRvdjCaK29EcXSSxjx8",
  "key5": "2kbRyFcZRLEhjx6tckghEakMS5bvEZxC7dLWJkCVKEg4MjU5EyJtPTm5UobcsRgB3ZNR2At5jiwBFmrw66JaTdeE",
  "key6": "5uhFKAUsfkJtzVd9NXe1CXTwBhEjvGfRpRZcBeXTPUQHVpUGHUddVHnSix799SVmVKjXH6Dc3BH1zVGsXbn55Zhf",
  "key7": "3HzsHce1NcknQZxWVt3nkN7KujGVMUwrs7JNdSyaFdpfYVyhJfz76bzBDzCydDoHofAnAsVQhFzmhmZbfaUopNwt",
  "key8": "2sQ6NWWxjNduZJA1fgDdt1QXT5aSyYiQRdkh4eAYrb5yyxJA99p7UfWAedYARQkDbze9XW8ZvKSxWi2whwPN91zh",
  "key9": "43f9LXQS8RwRd21AnFd4N2T8F2PdyuD4G57SiibduMwLe7tSK8v1PPCvSb3RnW8pseP55XSj2vPnKGFFXA8B2zvP",
  "key10": "4QiYq21vXj1He2KtfAvMVdeiwzVPQNeu6uY3596ChgqDuUGc1MVvEdHs5heFVWJsxtvqfN2m4ioregfbbFg7vSDo",
  "key11": "3W2Y7dsTKpfMDYsr7tjfNRJyfh36Z2wJDewYfpDfuccdP587wMjjHBxSNnTNmGoq42dHjZQ7K7eJGnhHBpskcgp7",
  "key12": "3tLSrsico9qbaajAzR3ffuBXHiARVn8mQEAyM1R5oi2iG8QgDQiYN7BVzQkao421L7cerWqNyi7Ago15p7QLyvHL",
  "key13": "2P1smQwfdTHzitsHZezejbHJVnqpbhMLWEmwkmUzV4syajcJhdxnBSi9mfhUTrux8tPaaxVdq3WfrduuyTuAte9b",
  "key14": "5Emhd5BFNChN3ZLSeoNACw7KTsTSNYZ5LkzUScPAJxWGrSk7MDKECMMxj2eu6tkUkSL8pN6VxjoA736aSejAHjX2",
  "key15": "519RB7hXQ5xjWJe1GRPWQUgsbCF6pNWqMCbXhENr6SfS8wxP3d7DK3SWFEfm532FLZGmaEF9QqWQaov2V2mwfcdc",
  "key16": "4hKQCw5cddxeVSZx7hYZemwXra5PXXSQqgMo5Kdn2znajnYEZ73aX6B35mddqgYW8aysgoLCKQcFRaaYNRhvQF3c",
  "key17": "3WAyF9hD4j5XbisUp4MkpKvg4BgVEPZBMFPMmv4zehv5YECLTWhCukUUJUKAizXgyxS2HXhz1BEfyQNJou8fnHRQ",
  "key18": "3tZD2TSx7Ei57BykNdtxBS7JAWXXmKUirPWDzTk4iCnXgZ6iNpv4qEYUd5YPXsr3aj3L1B1a7kFH54eAh6CFAjuE",
  "key19": "2FLinB26jJyGemKafnzrn7jiifarifUZUjVayVQefCSUBLoNDHVfUP9zRx63jNAPufSjk5gSrx3XyWGCPijqDHvY",
  "key20": "44NdapuMANQwQnPqUrYmgXac56u6X77DP8a9MbNvTcd5BdGKpFm7sxYPUFaD1BxFE5cp8NcKP3aFgjjqR2Q5Qhrb",
  "key21": "4pjFwYDJdjid9TBu3yGJ1FiifuAGRXqSe41zEhkjRynDoX6dcmJ1sKA7vNzAcevFDL6F5HQVNNVVZQdJ9HSssbW6",
  "key22": "23e9anNfeoiBBGzFVgJ1uJhg8WpNZaYWLZgRmgpqyjMNLYrQx3CHWtrMyFcva5B1QnNnduj5bWAhqh3MNpydHp8h",
  "key23": "VQUfjMxxefvaXByFTj2qSRAQcVTmx83Pqk1oUK6wiGq39EGVLUfNg94ujQ3zYKHWgRE5Fw45997L9y1uoQsGgKe",
  "key24": "f1CbeT4uvVaxaFwP9N7CNEGBELUbaAFKm4MHaHjMNMbtW6RhjbV8RmRSawx8ch8UfSg8iAWWwgaEpqRxGrbUHqJ",
  "key25": "qq6EAQBM7XJw3HEtBwmi8hn9iQQP21wrZxYNJ7V6y1A42dvB1G2QF5AiyAXZFDhJrdhLTt8gXpbQf2whZxrsoBo",
  "key26": "2c5XTM1wDY6vqjnKmY2xDZLuACA2x1zpsfND8TkUs15ybP5NURC8v3eXodp2e9GB7r5Frbqg4fpqsM3wwKZskPEu",
  "key27": "47ydbSwfGFUwNPB572YYSR5zxEhCjyZtHp3oFt8Qbq26RwJdkFKoXoS8NXsAydiMk8r5b9z7KXXJ5Hifc2MBSi72",
  "key28": "471h1M4JZjCNW9D29UeHG8DiPFPx7W1UoKGzLArzYDTWCbBPNRATXHtBiuR7myqY4DSw3sjAMF8pR1eSonBPPBNb",
  "key29": "4gtWgzNcdoX4TQ3jJUv4coUMFfcKkr8cduxiXZNCBunsjTQMDWJiEQqXEgfPGfAttSbLtwMYfQNbLAHXAbTXG2vS",
  "key30": "38qsUaVCbH7RAauQL7hqXoR9wLVximMuPPs7XQXxjG5z6GYAqPmNVQVc8TGaqZR3DMZm6M4USPjSdmHAVsQScyCP",
  "key31": "4mjMyGngUGeaA6xCz3DGoHzJQeqZ9Mzpb9E9oMt1Ace2UeeHaomie3Gc5eadanVRomJzhb6SeNR8inHubNZ7ykCL",
  "key32": "2KuAyNzzBkYtpgFHAVZavvWRmz3XEvEbPtjb1b4UCCudw6s9SLDPL5KxThxVtE7PanQJrQ7j6rGTJHMCT542Vhz2",
  "key33": "2vwnfkSQruVDbFrzP3LTro55HdrAGK8XctSsLf8pewkc1nrpvgAVoiNzHtZUFgNX425AqLWGCyYSU5prGe5Jr3qY",
  "key34": "3ibsLjnG6Rw3ChBCdTC1K1VErmM28cNSvEYCnsUXPR9GoUMt9Z7nhhjTSaWGbPHRouwmQSyLXnpJH8tVCr7Vxy7r",
  "key35": "4mcysF6BPbDfgnAT72zihBYzAQsXVL9CkDXDgiwrZzcmHqwGeUK15DhEqwBS2kLYJgwv816U2z6DXdiXva2cq2z9"
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
