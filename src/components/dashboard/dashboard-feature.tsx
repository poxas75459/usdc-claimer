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
    "PG58PEvAifBaPMAFYGf4CwfabzGEQNgYSkvD7UBP14um8F9QccjChYXQjjaLdvyjbF7XPU2JRyNXsr39Qea2Mxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTZHxEwZt6txGu1n1ETwjXmxa13fyLpG1ezD9DBTmtVNqvbdyFR9fiqZS4FpRPFEwyFgx1gDAgxrii6qqLNwPXH",
  "key1": "5iZoLvn3UUBY4jRKJCHBQASVATZyW8WMYCQwm4cHh43ApQqoegSTNyRSAoztM5QBzwHS1X4BCDsMaBJaNMHPv8Bq",
  "key2": "3gvXYKnwfv9WqqydW4R2HTCcJeSwAkmWZt9iR1vqQoT8qp3XQLDTVAnLisoNeqF9kQuHrhag92WaJcF32eRB8t38",
  "key3": "c8AzL5NMgFwcqwaMezhhEqPu4hrvYoStrtPXyho2hQYTQiChZc4TKf1bb4XKtpXJWX8PqF89vMx6Hz5UZbGsehj",
  "key4": "52nZsLceoRa2txFc4CYVUpPLdiXvdsHxxghNHNhtvsgYE1mtG7PZGntPBFcRzALuybH5NfArYnETBQGGGcqhAPjQ",
  "key5": "4r7rk7okrr9bxRWupyr3pTCaHVhYFsXCk9HTM7icG7pP3igSDU8QUTPY2dqRF8faCEmy5rWmXHRLewnuprftPE6Y",
  "key6": "2axkiY4aakrepFg7yU5nyPzUCsMfvJ1KdoPs5NgM79h3f3bCsQVWb3jxQ73BLnxWS2xfukS2xNLVUHG2SydchDrm",
  "key7": "6wvZN2VTNfnbyceQWNQMTy7spLXhyLqU5hhnDe5RLJypHY4iqkA4o9rpsiE7gv1Di5LXiMpWHPecza4BSVYZgRf",
  "key8": "3ZVvzcsJtFgEWV78jq6XzEkB1JRXAJ7qZgpHxsgHqaWywPf9pTVDw48UBVShYvx5gGBUGbex5L2nSukLNL8VCAYD",
  "key9": "2qLy9vn4T6AF5sRPScS79Ry2fCMWSiv7j5Hm3j3CasW2nsXJGvmdFBrQrrTtne5rgmUQDmL8Bm6E67DBHmSuwgkY",
  "key10": "DhwVGsMaVowZfr3jPeKcfTKrGsceUq25jErJvGxpn7Ds83zPaDDspMFkdF5FPmDm5K4aFBxg6tDUYXjuUFfVwri",
  "key11": "3wyVurhWRVoC28S4vpNkABCaWf9AaSrXVrrFMZv5H8ajanBodQoog7BWafxoDEkfFkq9UdxHeWm6yLmAuoPewyr6",
  "key12": "2HaEL5vxajwjce2JdN1Q3AXi4hLQ8d8dfJ2NWacXAoeeZQr6hRHDnQbwjVTj3wjzgBJGM26kNkDKxXQ1DWBxt7W6",
  "key13": "5n1fftHSfGtLjcDvd5vZMP5Z92DM5KJ2iPAW4TcKtADX3Fve5LEkCrVmHayRd5K7mFCMQLxrzNXT37Az9wDarinN",
  "key14": "2WW4NkxVN7VeLokaEb52xfjXupuyYNxuMFaYDGGRneJyMazCz54Gv6npntJySi8Fse4ihwBoaebuM9C2sh5yiMxM",
  "key15": "2EgPD9GiCbGpfidrjxrzcRP2rUbqugdxKjbDUBPHfs8SmxGXZNP5ha7Mg6rw4iNvDqeTZuFFhxLgSGmqR7NidqwZ",
  "key16": "2oFRQ2k9XkSmLWWwgAXcDGwqsQNdn6vHKennRPSx1C4uaLAuW7hidvjAEdZFbeLvv7LRD6kcrPJMWBAyih3gyHTH",
  "key17": "5FKtMtCi75rvBdwi65ZkMVUKrY113MarTfhGGdq5kqgAKbc4hnDcEXH6L3hAyk6CsTVnfeJ2hF91Mxy5tQEJNtz8",
  "key18": "2kT9jxxiDw8EJCa18WNuvnZhdhe5nuEZVXQpRB8d8KhGiKHyXmogLaewdDuFMhpPZbvhyZAbeUUajzXkaEzQwDem",
  "key19": "cWsx1DV4YZFD7HFsLJ2F3u3VE5PEHUiUxmprA9QEVxDCVuJ6PD2oYtcwNTbrqgr2fRizGgvcENM4aNL4QzomvdQ",
  "key20": "4EqWsizfsscPWavEXL2TKS1sGDD1rigHt6pHTkYBUD3zTkZy6Vps6vux9czhPr79M6ovDpiBjRNr41vz1TtUrNgJ",
  "key21": "5pWbd4QvAuh5VoyVeJDS2KSFxvG5M6d6UaruEArwiDJg2fKxaL3j21exgAU5vxnrZ5fSNhBXJHduyvQiHWMb6Smg",
  "key22": "3kQvdsWPtv1uX1arCnbXLvQ8SJy6wkm3NSGqGiEUXeAPZwLoxtJN1eXEqdgYYYjYLKaYb6guBWx4s7CoDrFxupiR",
  "key23": "3bngLVsDJFmZYqgQc46CK7DpYsiJiceMFNWpugMhSEse7BsKmjq7vMgUkprMZ6WmQqn9yUgXrB3a6ugDSuVXhwcx",
  "key24": "4qPMRmngWU7GMkkyeKasT1pZUGTUYrcMoYmLNMu51AohsYWJNP8LUsvUJEzedHyRtcaUSsaMdJJm1FokWvckRa4y",
  "key25": "XNKQEZkDNt78F5xB9qanrp7o2qKs4puPBhmPCZj5fLcPUnZjgDhdxstAvVtMkyUBbpopiu56agZs1fz7539pY2V",
  "key26": "29pWSzbb7Hnde9Ui8Fnwp41aYn3FMTKxGeJ1jtUzCDrbRpcQGYoWLweDLQBmSfugfz9dQxv6GbQLJaLouZbynfD7",
  "key27": "64zQkpJ1mZBV8KvaZYuuFVTwa4Z2xJP4prq4UFdDmWSRbvxh9qyj3ZNf1gXyzH92r2ymSB37FuyUv1PGVowb1ukH",
  "key28": "3x53qp6k8bBYLVdS2NR7FC34TbWRTa8aGKJWsGSh7y7Vm3M6Prp58D8dHcMCAptoZ3BBdHqXx8YMcetbb6J8pNsJ",
  "key29": "62qvQaaM6ixFTyqRL8RdcjRDdzeEhWC8JSuaiK3JQEAnBEYgRcAc3vGxkZwT5Mt9j92pkycjvNY51hhKtnCqasYY",
  "key30": "2DLGVMESmg5rb7yvF3Juo18toXa3FZoc3gV4BBZKMwjaf42wSWTL19Cjr9YwYpkNtaukP2yV5shFeEEKe94w62ma",
  "key31": "2a4K9xxTtQ1YdAUYLkbgCKifwdjnToTsJpiKMayBc3di4mrKNj9VYvVXKkXYM83zRLytaDsFX8k3gwBS7nGdKc4E"
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
