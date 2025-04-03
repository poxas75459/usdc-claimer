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
    "5m7XSy9cYfS4dS8yGfAgPwBPXVN9PsGAbQL5nDtD1n8YPRnNXB3tPseJpFqsPZgsF2yj1L4EF3G4hEUQTd9tiy5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCXrNazHLJ7qVsbg6KmeW7yCAK32yGGEmoheogJwoXP1TCoo5aG1TE9WjfnDufapmoR3qpmTa8NHHFCM5YS1zEx",
  "key1": "55WHSEYeUqjAcAikY7jThmqNNzNfxKVKdAPxLZkDj4ucAV1mwAK4pu8CRzyXeE652rGWb2FguDJtJuLERpHTnKoC",
  "key2": "5LMgNagqVmVPQsd668SKZaay8v8iwED3LEXohjwkEbQ3EN7pLrzmYtSQZMrAFUrD4MmjMQKTGuQ67S9ttWnC4yiD",
  "key3": "3pwiZsewmPBsFPJmiE5XGffByVYjme9V2xZQop49Grst9ZzW7cbKa6cgV3kkaj1tsNPa8HMAGMcntsiHCae9uGGm",
  "key4": "r3kAp1fsr1VJapSdobQtdmQBVMBZvWFHtsVEvGWbY53CkMfXxdNMLps41NazpqSKxjWoxrcgyoSJAFLDd5XRpch",
  "key5": "5JyAPePzdJC9n9gvwhdyNZqQKSsBbZatanh5J5rGJhAm4CQWfFHAheEgHDXfRTdwijJ27qrahKVJHHRtRcc4myo2",
  "key6": "2khSkGpWLdMdiVJPZ6PKZWd5spRY8uStgoHg8Zbghz1cmxWrr2nFTbfz4CSd5x5uQvbtVYip7xaZT5VrbPBXj3sm",
  "key7": "5DabAh7F9UjdCueBT7cwsAgER7S2XbMtH6gMpKNa5jHwDSBTWpVNwhZztXdP9zbENHtgyyJdmWRPREtDf82Hzai2",
  "key8": "xYccCSfzEtS41oC6EiKsphf4TWcU6zCDgyNwrWvmqPSbFZtcFkksWvY15B2MXfY1ADRawLaC6gdtmLjYZyfBY2F",
  "key9": "39iRFExYPbbpyNQvWvTasojDL1AS8qjGnxXErAT9Uhr787KReVm15CigRUUANsUPfY5adxxjeuRCWqZ3UddVyw4q",
  "key10": "2Mz4GWWSvmaPMMVRAwmQW5W8Wn46Yaujvxd84cxyUpfo46X3koYZwcnq8fsDumtpqn9nsq4hSKXP7Mo3j37M38aV",
  "key11": "4SLS6eh4B8wYzqDU5gnZ2xAVgEnMMvQeXTzkFqESqJ4AdmeT28tMPuqwXqg1VFujCDjaPV9uijtvwGA4MP2VtSzi",
  "key12": "SpKAN2prLVE51oc2VEnJT91WLSFqbUt56iGvG9HJBpy5Tmyus35WsLQkcgmxLs2coBLwWxxf8FdeCcTo6QnYR8L",
  "key13": "2SaKw587WYjFe7KFLKgvL93NHJg4Df2bNmUDM5cQXu5QgHxHnQRSCqfrR8CaRCgvuesqecB1ustFt9ZRajsFnw8g",
  "key14": "2Lhbn8TLP64AXdKjE3mTho7xefapJA5PqtRyEkvmcWnnjsfceY3NM3e6s6YYMCUA8hZTKd4PaT88YbXTtwuUKTBQ",
  "key15": "3rCd2mrkbSUMSTtQuXi1RCBwgYNaGSzoFLb5Q4i4PPZi48TnsjDXfCrA5LE3msCyJoDBGDU6x1pz52EcMaw7mezd",
  "key16": "53Ex61hnt7nLKcSCN3GN2hYbXQ7hXEXzKudiziXGjWFWiZMYeXkP1htiCL4h4rKsBbZrcjkMYqyXz93MWmn2hhDZ",
  "key17": "3a6Rem8Fvb2JCuqBZRAhFkjj1roUbb2AgR3yRs8fjcCxLmeJMaAxCrLzb3GH5euUvUrmPAmFsenzDAvSmTtusV2F",
  "key18": "3iC19cFKApMQh9ajZWBW1iDf9Ub9EwSHLDaf1kXEJV61P12SCAKBrpJjwTtmbKAZysJzVk9x1fNEKm4w9ZrYSxJZ",
  "key19": "pszeFN1GNWMDwJRghMFhFrbDWF7FWQHTYHgSDMdvEm3GuaUACPttgC3LnHXYrfHAKupLSUvMRcGP4RSuGur5173",
  "key20": "uvzTXyGCAAtmyNKVgp98a6cbBrYFXcwUJdpE7P5kGQtKU38HJnvX5DHeznP6Hjb4Su5XePPBhZYkJLMns3rZxDV",
  "key21": "46446VHcb9Bxex2CR4vvU8LVcru7ufNmKxth8pwx6kQy4ctM3Sf5MHudCeAmoDwd5Wuw4RzpL38GVTgxgwtDg7AM",
  "key22": "5f6qz5dRxNsWZ6pDVBqtmSmdR8JSPLHyAVAwEFg2WTBy91isQPv1yRxb2LrooUCNimhHfYo4MHPtAHJZfeyxejmR",
  "key23": "MQsTwasaUdj97EscqMNQytFvz9qHN7Fjof8zn1aj8MgLLCGdwMHiWHKLjCTPE78LKfz9JoJsQTVk9KAdgizVeTB",
  "key24": "5gPtxh9P6Hqb4Ygr7CTft4gfSJebRGNXSHs71u1HH5KciX5eB4Rfz67pyzRHTFQwXmHZPGYF4FB68Ea1jShxaPbf",
  "key25": "26bxSaSS54b69VfmUKFhvpuWcZwmAixxqZCNxgfNGBUd7L1XzBKZTziBhoBjzTNUuc15F4zg7qrRRFiaA9tvGUaB",
  "key26": "4MDAcz9ohmZH5yGtfgHaMEMgQDDeUxdNfoLvHbLHNvXxCVQL7vwCH614MS6B8nryWweARr7mHEjqopbKm7NYw5sf",
  "key27": "4ucdg2ZqSGf8cD5n5fkbjnUZuKEyzWg7F8kBjZXJSZRLt2xK5jPSiNuk2XXzoAwEdf5eE21nebH6psfhyDQSuFc3",
  "key28": "ywxRchRKkU1K1AQqGQS8wjnLHb2LceugsyfkLute9W2ZxYqj4vyFzGgQcq7eRoLCkRoQMU5EZJ1TGDG3Zk9C1j5",
  "key29": "4hG7G62qn5BfhfR6GZjN2nbys5eudJgNFHCwjLyZrLioaZfSbX4Rb13ZpoxGA4Pi5M3YFfwqzVBjHF8jNCc7kWTB",
  "key30": "hm7AU4pnUVVPDKc6v5ugB2GVNg9kumV5dMjFs3VoDjZAaYg5YMVJRjX63XhyS6fpCZKzAagoUi89oY3vJtUyoep",
  "key31": "2p8BipX8AdndBYWCsdfuUUDyKgfYB925wxkEhTD6ByAEH39YmBbqBfcJxT424V9eKKjq11WiSC6hHSoaVTnLLytX",
  "key32": "5heBosgoxtoUBz8ArE72JUJTRwRFKUZ48KECh6qpwAa4WoidzzFgYBNJgaghdF7jHB9PJpidW56vuj1pVQ1b9UrX",
  "key33": "2pEzsK5aPgZYonDe3vG6ttW4mVMaU5d2qjNyQiPqNqjMRQoKqDZhyjSWqVCQGnwPN2WDav33Fbu6jazPNxhL52xf",
  "key34": "wKZMuu1fPQUAfuMVteetGok7FVTSRRsy1mr8MMMaG7b6tL7NomvatjdEGE2FrSbbx2LMe1Lz5bvoGrfQPSqJsog",
  "key35": "2HyYhUr2RUvHruwTLgceBYjY6uZpJEHMVhXR1WCEQXGKFoNNiJvL2vt8Ciwk8rvQ7fJRx5Y6ssj1rmazwmZsoEaq",
  "key36": "4prAcsdzQNZGDpxu6a9FxcbKutw4esZjEBoFbEwMVqhyYiLagDweKVeMCpdsDCMFgvvWQKNT97J4YLNPxbhr5p1X",
  "key37": "zLUANSp9m2CAeCvASShuo8Spwo1VZ1T5m7JMvGruLsLvPdixbRdrKV4wCPBGFcLegQeXP6gJk4VZ3YUBM5Bqmjh",
  "key38": "55QRQBBWYmtpyQeNRcC9uLWyT9hX6bs8Ngimw4s9p3R3T5tWF6ipThWb8dedNrxYGyzKjocyTtHNgs71s7mq22Jv",
  "key39": "UNXX3gMuwaRS1PdMJKsiosHrkMhqKa6pPbcrHV976c8vEwFJbHtCSQMmvSnShMxDhr3G1ANDux1LvjMsJfzbtV3",
  "key40": "eEaiwkULQhZiDBGAnh3hfJUnjr5Hr7kaKdqQVTKQCToPveHjySYjaLV8UvhkckDLw3TR2b6s9VFxhijUsFV1Uyc",
  "key41": "4vxh3BNVA2nyz7tCtzdt8R3eu8GeLJEyi5UpUAJZfPzk5vcKcjhqVCGjNSbqngfUtiadjYwWQ1ZnJ7hXukE77NJA"
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
